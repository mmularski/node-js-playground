const { Model } = require('dynamodb-toolbox');

const ProductModel = new Model('ProductModel', {
  // Specify table name
  table: process.env.tableName || 'local-testing',

  // Define partition and sort keys
  partitionKey: 'pk',
  sortKey: 'sk',
  timestamps: true,

  // Define schema
  schema: {
    pk: { type: 'string', alias: 'type', default: 'PRODUCT' },
    sk: { type: 'string', alias: 'id' },
    name: { type: 'string' },
    imageUrl: { type: 'string' },
    description: { type: 'string' },
    category: { type: 'string' }
  }
});

const CommentModel = new Model('CommentModel', {
  // Specify table name
  table: process.env.tableName || 'local-testing',

  // Define partition and sort keys
  partitionKey: 'pk',
  sortKey: 'sk',

  // Define schema
  schema: {
    pk: { type: 'string', alias: 'productId' },
    sk: { type: 'string', alias: 'dateAdded' },
    text: { type: 'string' },
    username: { type: 'string' },
    userlabel: { type: 'string' }
  }
});

module.exports = {
  ProductModel,
  CommentModel
};
