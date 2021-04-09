import axios from 'axios';

const client = axios.create({
  baseURL: `https://uptownhr.api.stdlib.com/jlee@${process.env.AUTOCODE_ENVIRONMENT}`
})

export default client