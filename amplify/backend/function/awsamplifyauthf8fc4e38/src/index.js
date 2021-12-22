/* Amplify Params - DO NOT EDIT
	API_AWSAMPLIFYAUTH_GRAPHQLAPIIDOUTPUT
	API_AWSAMPLIFYAUTH_USERMEMBERSHIPTABLE_ARN
	API_AWSAMPLIFYAUTH_USERMEMBERSHIPTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */
let { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");
let { marshall } = require("@aws-sdk/util-dynamodb");
let { v4: uuid } = require("uuid");

const dynamoDb = new DynamoDBClient({ region: process.env.AWS_REGION });

const USER_MEMBERSHIP_TABLE_NAME =
  process.env.API_AWSAMPLIFYAUTH_USERMEMBERSHIPTABLE_NAME;

exports.handler = async (event) => {
  console.log(JSON.stringify(event, null, 2));
  await Promise.all(
    event.Records.map(async (record) => {
      console.log(record.eventID);
      console.log(record.eventName);
      console.log("DynamoDB Record: %j", record.dynamodb);

      await dynamoDb.send(
        new PutItemCommand({
          TableName: USER_MEMBERSHIP_TABLE_NAME,
          Item: marshall({
            __typename: "UserMembership",
            id: uuid(),
            organisationId: record.dynamodb.NewImage.id.S,
            userId: record.dynamodb.NewImage.createdById.S,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            _version: 1,
            _lastChangedAt: Date.now(),
          }),
          ConditionExpression: "attribute_not_exists(id)",
        })
      );
    })
  );
  return Promise.resolve("Successfully processed DynamoDB record");
};
