require('dotenv').config();
const fs = require('fs')
const path = require('path')

const dataDir = path.join(__dirname, '../data')


const Stripe = require('stripe');
console.log(__dirname, dataDir)
async function productList() {
  const stripe = Stripe(process.env.STRIPE_PRIVATE_KEY);
  const products = await stripe.products.list();
  const json = JSON.stringify(products.data)
  console.log(products, products.length);

  fs.writeFileSync(dataDir + '/products.json', json)
}


productList()