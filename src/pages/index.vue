<script>
import Hero from '@/components/Hero/Hero'
import LatestWork from '@/components/LatestWork/LatestWork'

export default {
  components: {
    Hero,
    LatestWork
  },

  data() {
    return {
      loginForm: {
        email: '',
      },
    };
  },

  computed: {
    loggedIn() {
      return this.$store.getters['user/loggedIn'];
    },
  },

  methods: {
    async handleAuth(email) {
      await this.$store.dispatch('user/auth', { email });
      this.handleRedirect();
    },

    handleRedirect() {
      this.$router.push('/member');
    },
  },
};
</script>
<template>
  <div>
    <Hero :loggedIn="true" @auth="handleAuth" @redirect="handleRedirect" />
    <LatestWork />
    <div class="bg-gray-50">
      <div
        class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
      >
        <h2
          class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
        >
          Ready to dive in?
          <br />
          <span class="text-indigo-600">Start your mentorship today. </span>
        </h2>
        <no-ssr>
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
                  Get Started
                </button>
              </div>
            </form>
          </div>
        </no-ssr>
      </div>
    </div>
  </div>
</template>
