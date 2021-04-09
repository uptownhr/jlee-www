<script>
export default {
  props: {
    loggedIn: {
      default: false,
    },
  },

  data() {
    return {
      loginForm: {
        email: '',
      },
    }
  },

  methods: {
    async handleAuth({ email }) {
      this.$emit('auth', email)
    },
  },
}
</script>

<template>
  <form
      @submit.prevent="handleAuth(loginForm)"
      class="w-full max-w-sm"
  >
    <client-only>
      <div
          v-if="!loggedIn"
          class="flex items-center border-b border-b-2 border-indigo-500 py-2"
      >
        <input
            v-model="loginForm.email"
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Email"
            aria-label="Email"
        />
      </div>
    </client-only>

    <div class="rounded-md shadow mt-2">
      <button
          href="#"
          class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
      >
        Contact Me
      </button>
    </div>
  </form>
</template>
