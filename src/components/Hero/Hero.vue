<script>
import Logo from './logo'
import clientOnly from 'vue-client-only'

export default {
  components: { Logo, clientOnly },
  props: {
    loggedIn: {
      default: false,
    },
  },
  data() {
    return {
      showLoginForm: false,
      loginForm: {
        email: '',
      },
      mobileNav: 'none',
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
  <div class="relative bg-white overflow-hidden">
    <div class="max-w-screen-xl mx-auto">
      <div
        class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
      >
        <svg
          class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav
            class="relative flex items-center justify-between sm:h-10 lg:justify-start"
          >
            <div
              class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"
            >
              <div class="flex items-center justify-between w-full md:w-auto">
                <a href="#" aria-label="Home">
                  <Logo class="h8 w-auto sm:h-10" />
                </a>
              </div>
            </div>
            <div class="hidden md:block md:ml-10 md:pr-4">
              <!-- <a
                href="#latest-work"
                class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                >Latest Work
              </a> -->
              <!-- <a
                href="#investments"
                class="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                >Investments
              </a> -->
              <nuxt-link
                to="/contact-me"
                class="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                >Contact Me
              </nuxt-link>
            </div>
          </nav>
        </div>

        <main
          class="mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
        >
          <div class="sm:text-center lg:text-left">
            <h2
              class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"
            >
              Hi! I'm James Lee <br />
              <span class="text-indigo-600">a Software Engineer</span>
            </h2>
            <p
              class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
            >
              and a husband with two kids. I enjoy tackling issues related to
              SMBs and enabling entrepreneurs. My mission is to remove the
              friction of one becoming an entrepreneur and increase the amount
              of Small Business in the world.
            </p>
            <div
              class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
            >
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
            </div>
          </div>
        </main>
      </div>
    </div>
    <hr class="md:hidden" />
    <div
      class="hidden md:block md:show lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
    >
      <img
        class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
        alt=""
      />
    </div>
  </div>
</template>
