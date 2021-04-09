<script>
import Hero from '@/components/Hero/Hero'
import CurrentWork from '@/components/CurrentWork/CurrentWork'
import {htmlHead} from "@/lib/helpers";

const head = htmlHead({
  title: 'James Lee - Software Engineer',
  description: `Software Engineer, a husband, and a father of two kids. I enjoy tackling issues related to
              SMBs and enabling entrepreneurs. My mission is to remove the
              friction of one becoming an entrepreneur and increase the amount
              of Small Business in the world.`
})

export default {
  head,
  components: {
    Hero,
    CurrentWork,
  },

  data() {
    return {
      loginForm: {
        email: '',
      },
    }
  },

  computed: {
    loggedIn() {
      return this.$store.getters['user/loggedIn']
    },
  },

  methods: {
    async handleAuth(email) {
      let success = false
      if (!this.loggedIn) {
        success = await this.$store.dispatch('user/auth', { email })

        if (!success) return
      }

      this.handleRedirect()
    },

    handleRedirect() {
      this.$router.push('/contact-me')
    },
  },
}
</script>
<template>
  <div>
    <Hero :loggedIn="loggedIn" @auth="handleAuth" @redirect="handleRedirect" />
    <CurrentWork />
    <div id="contact-me" class="bg-gray-50">
      <div
        class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
      >
        <h2
          class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
        >
          Want to talk?
          <br />
          <span class="text-indigo-600">Reach out today. </span>
        </h2>
        <client-only>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <form
              @submit.prevent="handleAuth(loginForm)"
              class="w-full max-w-sm"
            >
              <div
                class="flex items-center border-b border-b-2 border-indigo-500 py-2"
              >
                <input
                  v-if="!loggedIn"
                  v-model="loginForm.email"
                  class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Email"
                  aria-label="Email"
                />
                <button
                  class="flex-shrink-0 bg-indigo-500 hover:bg-indigo-700 border-indigo-500 hover:border-indigo-700 text-sm border-4 text-white py-1 px-2 rounded"
                  type="submit"
                >
                  Contact Me
                </button>
              </div>
            </form>
          </div>
        </client-only>
      </div>
    </div>
  </div>
</template>
