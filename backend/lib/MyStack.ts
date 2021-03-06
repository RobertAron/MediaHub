import * as cdk from "@aws-cdk/core";
import * as sst from "@serverless-stack/resources";
import * as s3 from "@aws-cdk/aws-s3"

const allAllowedMethods = [
  s3.HttpMethods.GET,
  s3.HttpMethods.HEAD
]

export default class MyStack extends sst.Stack {
  constructor(scope: sst.App, id: string, props?: sst.StackProps) {
    super(scope, id, props);
    const bucket = new s3.Bucket(this,"Uploads",{
      publicReadAccess: true,
      cors:[
        {
          maxAge: 3000,
          allowedOrigins: ["*"],
          allowedHeaders: ["*"],
          allowedMethods: allAllowedMethods,
        }
      ]
    })

    const table = new sst.Table(this, "filesDB", {
      fields: {
        id: sst.TableFieldType.STRING,
        createdDate: sst.TableFieldType.NUMBER
      },
      primaryIndex: { partitionKey: 'id' },
      secondaryIndexes: {
        fileTimeIndex: { partitionKey: 'id', sortKey: 'createdDate' }
      }
    })

    // Create the HTTP API
    const api = new sst.Api(this, "Api", {
      defaultFunctionProps: {
        environment: {
          tableName: table.dynamodbTable.tableName,
          bucketName: bucket.bucketName
        }
      },
      routes: {
        "GET /files": "src/list.main",
        "POST /files": "src/create.main",
        "GET /files/{id}": "src/get.main",
        "DELETE /files/{id}": "src/delete.main"
      },
    });








    api.attachPermissions([table,bucket])

    // Show API endpoint in output
    new cdk.CfnOutput(this, "ApiEndpoint", {
      value: api.httpApi.apiEndpoint,
    });
    new cdk.CfnOutput(this, "AttachmentsBucketName", {
      value: bucket.bucketName,
    });
  }
}
