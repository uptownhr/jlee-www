import Vue from 'vue'
import { Magic } from 'magic-sdk'


export default ({}, inject) => {
  const m = new Magic(process.env.MAGIC_KEY)

  inject('magic', m)
}
