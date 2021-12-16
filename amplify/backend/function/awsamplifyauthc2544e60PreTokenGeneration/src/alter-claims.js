let { DynamoDBClient, QueryCommand } = require("@aws-sdk/client-dynamodb");

const dynamoDb = new DynamoDBClient({ region: process.env.AWS_REGION });

const USER_MEMBERSHIP_TABLE_NAME =
  process.env.API_AWSAMPLIFYAUTH_USERMEMBERSHIPTABLE_NAME;

exports.handler = async (event) => {
  const admin = await dynamoDb.send(
    new QueryCommand({
      TableName: USER_MEMBERSHIP_TABLE_NAME,
      IndexName: "byUser",
      KeyConditionExpression: "userId = :userId",
      ExpressionAttributeValues: {
        ":userId": { S: event.userName },
      },
    })
  );
  event.response = {
    claimsOverrideDetails: {
      claimsToAddOrOverride: {
        tenants: JSON.stringify(
          admin.Items.map((item) => item.organisationId.S)
        ),
      },
    },
  };
  // Return to Amazon Cognito
  return event;
};
