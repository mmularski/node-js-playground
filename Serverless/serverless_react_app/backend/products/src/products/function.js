const persistance = require('../common/persistence')
const dbAdapter = require('../common/dbAdapterDynamoDb')
const { returnOnSuccess, returnOnSuccessCollection } = require('../common/resultsWrapper')

const getAllProducts = async () => {
  const data = await persistance.getAll(dbAdapter)
  return returnOnSuccessCollection(data)
}

const createProduct = async (event) => {
  const body = JSON.parse(event.body)
  const results = await persistance.create(dbAdapter, body)

  return returnOnSuccess({
    message: 'Item created',
    results
  })
}

const getProductById = async (event) => {
  const itemId = event.pathParameters.id
  console.log(`itemId=${itemId}`);
  const results = await persistance.getById(dbAdapter, itemId)

  return returnOnSuccess(results.Item)
}

const updateProduct = async (event) => {
  const body = JSON.parse(event.body)
  const itemId = event.pathParameters.id
  console.log(`itemId=${itemId}`);

  const results = await persistance.update(dbAdapter, itemId, body)

  return returnOnSuccess({
    message: 'Item updated',
    results
  })
}

const deleteProduct = async (event) => {
  const itemId = event.pathParameters.id
  const result = await persistance.remove(dbAdapter, itemId)
  return returnOnSuccess(result)
}

module.exports = {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct
}
