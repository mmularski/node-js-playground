const persistance = require('./persistance');
const dbAdapterDynamoDb = require('./dbAdapterDynamoDb');

module.exports.getAll = async () => {
  console.log('getAll');

  const results = await persistance.getAll(dbAdapterDynamoDb);

  console.log('getAllResults', results);

  return returnOnSuccess({
    function: 'getAll',
    results,
  });
};

module.exports.create = async (event) => {
  console.log('create');

  const body = JSON.parse(event.body);
  console.log(body);

  const results = await persistance.create(dbAdapterDynamoDb, body);

  return returnOnSuccess({
    function: 'create',
    results,
  });
};

module.exports.getById = async (event) => {
  console.log('getById');

  const itemId = event.pathParameters.id;
  console.log(`itemId = ${itemId}`);

  const results = await persistance.getById(dbAdapterDynamoDb, itemId);

  return returnOnSuccess({
    function: 'getById',
    results,
  });
};

module.exports.update = async (event) => {
  console.log('update');

  const itemId = event.pathParameters.id;
  const body = JSON.parse(event.body);
  console.log(`itemId = ${itemId}`);
  console.log('body', body);

  const results = await persistance.update(dbAdapterDynamoDb, itemId, body);

  return returnOnSuccess({
    function: 'update',
    results,
  });
};

module.exports.delete = async (event) => {
  console.log('delete');

  const itemId = event.pathParameters.id;
  console.log(`itemId = ${itemId}`);

  const results = await persistance.remove(dbAdapterDynamoDb, itemId);

  return returnOnSuccess({
    function: 'delete',
    results,
  });
};

const returnOnSuccess = (body) => ({
  statusCode: 200,
  body: JSON.stringify(body),
});
