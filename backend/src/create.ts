import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";
import {DynamoDB} from 'aws-sdk'
import * as uuid from "uuid";
import {serverError, clientError} from './common'
const dynamoDb = new DynamoDB.DocumentClient()

export async function main(event : APIGatewayEvent): Promise<APIGatewayProxyResult> {
  if(process.env.tableName === undefined) return serverError
  if(event.body === null) return clientError
  const {title} = JSON.parse(event.body)
  if(typeof title !== 'string') return clientError

  const params: DynamoDB.DocumentClient.PutItemInput = {
    // Get the table name from the environment variable
    TableName: process.env.tableName,
    Item: {
      id: uuid.v1(),
      uploadedTimestamp: Date.now(),
      title
    }
  };
  await dynamoDb.put(params).promise()
  
  
  return {
    statusCode: 200,
    body: JSON.stringify(params.Item),
    headers: { "Content-Type": "application/json" },
  };
}
