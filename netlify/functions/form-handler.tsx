import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';

export const handler = async (
  event: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
  const data = JSON.parse(event.body || '{}');
  console.log('Received form data:', data);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Thank you for your interest, ${data.name}!`,
    }),
  };
};
