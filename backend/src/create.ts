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

  const file = res.files?.[0]

  const id = uuid.v1()
  const s3Key = `${id}-${file.filename}`
  const s3Location = `https://${process.env.bucketName}.s3.amazonaws.com/${s3Key}`
  const imageSrc = res.files?.[0].contentType.startsWith('image') ? s3Location : undefined
  const videoSrc = res.files?.[0].contentType.startsWith('video') ? s3Location : undefined
  const videoType = res.files?.[0].contentType.startsWith('video') ? res.files?.[0].contentType : undefined


  const item = {
    id: id,
    createdDate: Date.now(),
    title: res.title,
    imageSrc,
    videoSrc,
    videoType,
    downloadUrl: s3Location,
    description: res.description,
    s3Key
  }
  
  
  const params: DynamoDB.DocumentClient.PutItemInput = {
    TableName: process.env.tableName,
    Item: item
  };
  await s3Client.putObject({
    Body: res.files[0].content,
    Bucket: process.env.bucketName,
    Key: s3Key
  }).promise()
  await dynamoDb.put(params).promise()
  
  
  
  return {
    statusCode: 200,
    body: JSON.stringify({id: id}),
    headers: { "Content-Type": "application/json" },
  };
}
