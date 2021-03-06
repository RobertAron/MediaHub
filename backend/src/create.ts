import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";
import {DynamoDB} from 'aws-sdk'
import * as uuid from "uuid";
import {serverError, clientError} from './common'
import * as multipartParser from 'lambda-multipart-parser'
import {S3} from 'aws-sdk'


const s3Client = new S3()
const dynamoDb = new DynamoDB.DocumentClient()

export async function main(event : APIGatewayEvent): Promise<APIGatewayProxyResult> {
  if(process.env.tableName === undefined) return serverError
  if(process.env.bucketName === undefined) return serverError
  const res = await multipartParser.parse(event)
  if(!Buffer.isBuffer(res.files?.[0].content)) return clientError
  if(res.title === undefined) return clientError
  const id = uuid.v1()
  const mainSrc = res.files?.[0].contentType === 'image/jpeg' ? 
    `https://${process.env.bucketName}.s3.amazonaws.com/${id}.jpg` : 
    undefined

  const params: DynamoDB.DocumentClient.PutItemInput = {
    TableName: process.env.tableName,
    Item: {
      id: id,
      uploadedTimestamp: Date.now(),
      title: res.title,
      mainSrc
    }
  };
  await s3Client.putObject({
    Body: res.files[0].content,
    Bucket: process.env.bucketName,
    Key: `${params.Item.id}.jpg`
  }).promise()
  await dynamoDb.put(params).promise()
  
  
  
  return {
    statusCode: 200,
    body: JSON.stringify({id: id}),
    headers: { "Content-Type": "application/json" },
  };
}
