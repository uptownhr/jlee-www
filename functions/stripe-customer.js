const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_PRIVATE_KEY);
const { Magic } = require('@magic-sdk/admin');
const mAdmin = new Magic(process.env.MAGIC_SECRET);

exports.handler = async function(event, context, callback) {
  const reqBody = JSON.parse(event.body)
  const {token} = reqBody

  mAdmin.token.validate(token)

  const {email} = await mAdmin.users.getMetadataByToken(token)
  const customers = await stripe.customers.list({
    email
  });
  
  const [customer] = customers.data

  if (!customer) return callback(null, {
    statusCode: 200,
    body: JSON.stringify([])
  })

  const subscriptions = await stripe.subscriptions.list({
    customer: customer.id,
    expand: ['data.plan.product']
  })

  // your server-side functionality
  const body = JSON.stringify({
    subscriptions: subscriptions.data
  });
  callback(null, {
    statusCode: 200,
    body,
  });
};
