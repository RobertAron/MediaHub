import { APIGatewayProxyResult } from "aws-lambda";
import {DynamoDB} from 'aws-sdk'
import {serverError} from './common'
const dynamoDb = new DynamoDB.DocumentClient()

export async function main(): Promise<APIGatewayProxyResult> {
  if(process.env.tableName === undefined) return serverError

  const params: DynamoDB.DocumentClient.ScanInput = {
    // Get the table name from the environment variable
    TableName: process.env.tableName,
    IndexName: 'fileTimeIndex',
    
  };
  const res = await dynamoDb.scan(params).promise()

  res.Items?.map((ele)=>{
    ele.id
    ele.createdDate
    ele.title
    ele.imageSrc
    ele.downloadUrl
    ele.description
  })
  
  
  return {
    statusCode: 200,
    body: JSON.stringify(res.Items),
    headers: { "Content-Type": "application/json" },
  };
}
