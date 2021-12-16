const returnOnSuccessCollection = (data) => returnOnSuccess({
  metadata: {
    length: data.length
  },
  data
})

const returnOnSuccess = (body) => ({
  statusCode: 200,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  },
  body: JSON.stringify(body)
})

module.exports = {
  returnOnSuccess,
  returnOnSuccessCollection
}
