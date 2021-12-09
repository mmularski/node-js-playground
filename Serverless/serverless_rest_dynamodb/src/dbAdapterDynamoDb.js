const DynamoDB = require('aws-sdk/clients/dynamodb');
const { v4: uuid } = require('uuid');

const TableName = 'dev-rest-t7';

const getAll = async () => {
  const params = { TableName };
  const dbClient = new DynamoDB();

  const results = await dbClient.scan(params).promise();

  return results.Items.map(convert);
};

const getById = async (id) => {
  const params = {
    Key: {
      id: {
        S: id,
      },
    },
    TableName,
  };
  const dbClient = new DynamoDB();

  const results = await dbClient.getItem(params).promise();

  console.log(results);

  return convert(results.Item);
};

const create = async (body) => {
  const params = {
    TableName,
    Item: {
      id: {
        S: uuid(),
      },
      name: {
        S: body.name,
      },
      description: {
        S: body.description,
      },
    },
  };

  console.log('createParams', params);

  const dbClient = new DynamoDB();

  const results = await dbClient.putItem(params).promise();

  return results;
};

const update = async (id, body) => {
  const params = {
    TableName,
    Key: { id },
    UpdateExpression: 'set #name = :n, #desc = :d',
    ExpressionAttributeNames: {
      '#name': 'name',
      '#desc': 'description',
    },
    ExpressionAttributeValues: {
      ':n': body.name,
      ':d': body.description,
    },
  };
  const docClient = new DynamoDB.DocumentClient();

  await docClient.update(params).promise();

  return true;
};

const remove = async (id) => {
  const params = {
    Key: {
      id: {
        S: id,
      },
    },
    TableName,
  };
  const dbClient = new DynamoDB();

  await dbClient.deleteItem(params).promise();

  return true;
};

const convert = (item) => ({
  id: item.id && item.id.S,
  name: item.name && item.name.S,
  description: item.description && item.description.S,
});

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
