import { APIGatewayProxyEvent, Context, Callback } from 'aws-lambda';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

async function counter() {
  const config = process.env.DYNAMODB_LOCAL
  ? { region: 'ap-northeast-1', endpoint: 'http://localhost:8000/' }
  : { region: 'ap-northeast-1' };
  const ddb = new DocumentClient(config);
  const param: DocumentClient.UpdateItemInput = {
    TableName: 'counter',
    Key: { Id: 1 },
    UpdateExpression: 'SET Incr = Incr + :incr',
    ExpressionAttributeValues: {
      ':incr': 1
    },
    ReturnValues: 'UPDATED_NEW'
  }
  try {
    return ddb.update(param).promise()
  } catch(e) {
    console.error(e); 
  }
}

export async function handler(
    event: APIGatewayProxyEvent,
    context: Context,
    callback: Callback,
): Promise<void> {
  const res = await counter();
  console.log(res);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(res.Attributes.Incr),
  });
}
