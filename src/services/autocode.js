import axios from 'axios';

let devTag = process.env.AUTOCODE_ENVIRONMENT ? `@${process.env.AUTOCODE_ENVIRONMENT}` : ''

const client = axios.create({
  baseURL: `https://uptownhr.api.stdlib.com/jlee${devTag}`
})

export default client