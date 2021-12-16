const persistance = require('../common/persistence')
const dbAdapter = require('../common/dbAdapterDynamoDb')
const { returnOnSuccess, returnOnSuccessCollection } = require('../common/resultsWrapper')

const createComment = async (event) => {
  const body = JSON.parse(event.body)
  const itemId = event.pathParameters.id
  console.log(`itemId=${itemId}`);
  const results = await persistance.createComment(dbAdapter, body, itemId)

  return returnOnSuccess(results)
}

const getCommentsByProductId = async (event) => {
  const itemId = event.pathParameters.id
  console.log(`itemId=${itemId}`);
  const data = await persistance.getCommentsByProductId(dbAdapter, itemId)

  return returnOnSuccessCollection(data)
}

module.exports = {
  createComment,
  getCommentsByProductId
}
