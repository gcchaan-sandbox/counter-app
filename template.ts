import { DynamoDB } from 'cloudform';

export default {
  DynamoDBTableTransactions: new DynamoDB.Table({
    TableName: 'counter',
    AttributeDefinitions: [
      {
        AttributeName: 'Id',
        AttributeType: 'N',
      },
    ],
    BillingMode: 'PAY_PER_REQUEST',
    KeySchema: [
      {
        AttributeName: 'Id',
        KeyType: 'HASH',
      },
    ],
  }),
};
