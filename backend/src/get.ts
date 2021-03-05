import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";
import { DynamoDB } from 'aws-sdk'
import * as uuid from "uuid";
import { serverError, clientError, notFoundError } from './common'
const dynamoDb = new DynamoDB.DocumentClient()

export async function main(event: APIGatewayEvent): Promise<APIGatewayProxyResult> {
  if(process.env.tableName === undefined) return serverError
  if (event?.pathParameters?.id == undefined) return clientError
  const id = event.pathParameters.id


  const params : DynamoDB.DocumentClient.GetItemInput = {
    TableName: process.env.tableName,
    Key: { id },
  };
  const results = await dynamoDb.get(params).promise();
  if(results.Item === undefined) return notFoundError

  return {
    statusCode: 200,
    body: JSON.stringify(results.Item),
    headers: { "Content-Type": "application/json" },
  };
}
