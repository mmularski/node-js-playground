const DynamoDB = require('aws-sdk/clients/dynamodb')

const DocumentClient = new DynamoDB.DocumentClient()

const { v4: uuid } = require('uuid');
const { ProductModel, CommentModel } = require('./Models')

const TableName = process.env.tableName

const getAllByHelper = async (field, value) => {
  const params = {
    TableName,
    KeyConditionExpression: '#field = :value',
    ExpressionAttributeNames: {
      '#field': field
    },
    ExpressionAttributeValues: {
      ':value': value
    }
  }
  const results = await DocumentClient.query(params).promise()
  return results.Items
}

const getAll = async () => getAllByHelper('pk', 'PRODUCT')

const getCommentsByProductId = async (id) => getAllByHelper('pk', id)

const getById = async (id) => {
  const params = ProductModel.get({ id })
  return DocumentClient.get(params).promise()
}

const create = async (body) => {
  // Create item
  const product = {
    id: uuid(),
    name: body.name,
    description: body.description,
    imageUrl: body.imageUrl,
    category: body.category
  }
  // Use the 'put' method of MyModel to generate parameters
  const params = ProductModel.put(product)

  // Pass the parameters to the DocumentClient's `put` method
  const result = await DocumentClient.put(params).promise()
  return result
}

// eslint-disable-next-line object-curly-newline
const createComment = async ({ text, username, userlabel }, productId) => {
  const comment = {
    productId,
    dateAdded: new Date().toISOString(),
    text,
    username,
    userlabel
  }
  // Use the 'put' method of MyModel to generate parameters
  const params = CommentModel.put(comment)

  // Pass the parameters to the DocumentClient's `put` method
  await DocumentClient.put(params).promise()
  return `Comment added for Product: ${productId}`
}

const update = async (id, body) => {
  const item = {
    ...body,
    id
  }
  const params = ProductModel.update(item)
  await DocumentClient.update(params).promise()
  return `Update complete: ${id}`
}

const remove = async (id) => {
  console.log(`remove product: ${id} `);
  const comments = await getAllByHelper('pk', id)
  console.log(comments);
  
  if (comments.length > 0) {
    return { error: {message: 'Can\'t delete Product with comments'}}
  }
  const params = ProductModel.delete({ id })
  await DocumentClient.delete(params).promise()
  return `Item deleted: ${id}`
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getCommentsByProductId,
  createComment
}
