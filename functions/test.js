exports.handler = function(event, context, callback) {
  // your server-side functionality
  const body = JSON.stringify({
    event, context, test: process.env
  })
  callback(null, {
    statusCode: 200,
    body
  })
}