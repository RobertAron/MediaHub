import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";
import { DynamoDB } from 'aws-sdk'
import { serverError, clientError } from './common'
const dynamoDb = new DynamoDB.DocumentClient()

export async function main(event: APIGatewayEvent): Promise<APIGatewayProxyResult> {
  if (process.env.tableName === undefined) return serverError
  if (event?.pathParameters?.id == undefined) return clientError
  const id = event.pathParameters.id

  const params: DynamoDB.DocumentClient.DeleteItemInput = {
    TableName: process.env.tableName,
    Key: { id }
  };
  await dynamoDb.delete(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({ status: true }),
    headers: { "Content-Type": "application/json" },
  };
}
