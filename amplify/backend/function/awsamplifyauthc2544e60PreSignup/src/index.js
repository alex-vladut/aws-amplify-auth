let { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");
let { marshall } = require("@aws-sdk/util-dynamodb");

const dynamoDb = new DynamoDBClient({ region: process.env.AWS_REGION });
const USER_TABLE_NAME = process.env.API_AWSAMPLIFYAUTH_USERTABLE_NAME;

exports.handler = async (event, context, callback) => {
  try {
    await dynamoDb.send(
      new PutItemCommand({
        TableName: USER_TABLE_NAME,
        Item: marshall({
          __typename: "User",
          id: event.userName,
          email: event.request.userAttributes.email,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          _version: 1,
          _lastChangedAt: Date.now(),
        }),
        ConditionExpression: "attribute_not_exists(id)",
      })
    );
  } catch (err) {
    // ignore if already exists
  }
  callback(null, event);
};
