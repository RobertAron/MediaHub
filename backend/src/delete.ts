import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";
import { DynamoDB, S3 } from 'aws-sdk'
import { serverError, clientError } from './common'
const dynamoDb = new DynamoDB.DocumentClient()
const s3Client = new S3()


export async function main(event: APIGatewayEvent): Promise<APIGatewayProxyResult> {
  if (process.env.bucketName === undefined) return serverError
  if (process.env.tableName === undefined) return serverError
  if (event?.pathParameters?.id == undefined) return clientError
  const id = event.pathParameters.id

  const params: DynamoDB.DocumentClient.DeleteItemInput = {
    TableName: process.env.tableName,
    Key: { id }
  };
  const getRes = await dynamoDb.get(params).promise();
  if(getRes.Item){
    const { s3Key } = getRes.Item
    await s3Client.deleteObject({
      Bucket: process.env.bucketName,
      Key: s3Key
    }).promise()
  }
  await dynamoDb.delete(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({ status: true }),
    headers: { "Content-Type": "application/json" },
  };
}
