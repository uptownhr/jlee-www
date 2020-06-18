<script>
import hero from '@/components/homepage/hero';

export default {
  components: {
    hero,
  },

  data () {
    return {
      loginForm: {
        email: ''
      }
    }
  },

  computed: {
    loggedIn() {
      return this.$store.getters['user/loggedIn'];
    },
  },

  methods: {
    async handleAuth({ email }) {
      if (this.loggedIn) return this.$router.push('/member');
      await this.$store.dispatch('user/auth', { email });
      this.$router.push('/member')
    },
  }
};
</script>
<template>
  <div>
    <hero />

    <div id="my-stack" class="py-24 bg-white">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <p
            class="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase"
          >
            My Stack
          </p>
          <h3
            class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
          >
            The Vue Ecosystem
          </h3>
          <p
            class="mt-8 mb-16 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto"
          >
            Vue is simple and comes with great documentation. This however does
            not mean the ecosystem is not complex and full of options. Let’s
            explore the options and develop a path towards minimal roadblocks
            and maximum value.
          </p>
        </div>

        <div class="mt-10">
          <ul class="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
            <li>
              <div class="flex">
                <div class="flex-shrink-0">
                  <div
                    class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                  >
                    <svg
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg leading-6 font-medium text-gray-900">
                    Nuxt - The Intuitive Vue Framework
                  </h4>
                  <p class="mt-2 text-base leading-6 text-gray-500">
                    A solid foundation that embraces convention over
                    configuration. Nuxt introduces a module system to the Vue
                    ecosystem. Adding plugins like Axios, PWA support, creating
                    Sitemaps, and UI libraries can be accomplished with a simple
                    module install.
                  </p>
                </div>
              </div>
            </li>
            <li class="mt-10 md:mt-0">
              <div class="flex">
                <div class="flex-shrink-0">
                  <div
                    class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                  >
                    <svg
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                      />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg leading-6 font-medium text-gray-900">
                    Netlify - The fastest way to build the fastest sites
                  </h4>
                  <p class="mt-2 text-base leading-6 text-gray-500">
                    Development is one thing, but how do you get your code out
                    in the wild. Netlify removes the work that goes into
                    building a pipeline to your production, staging and
                    development environments.
                  </p>
                </div>
              </div>
            </li>
            <li class="mt-10 md:mt-0">
              <div class="flex">
                <div class="flex-shrink-0">
                  <div
                    class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                  >
                    <svg
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg leading-6 font-medium text-gray-900">
                    Storybook - UI Component explorer for frontend developers
                  </h4>
                  <p class="mt-2 text-base leading-6 text-gray-500">
                    Storybook is the ultimate playground for frontend developers
                    building components and interfaces. It allows you to build
                    and demonstrate the capabilities of what you’ve built.
                  </p>
                </div>
              </div>
            </li>
            <li class="mt-10 md:mt-0">
              <div class="flex">
                <div class="flex-shrink-0">
                  <div
                    class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                  >
                    <svg
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg leading-6 font-medium text-gray-900">
                    TailwindCSS - A utility-first CSS framework for rapidly
                    building custom designs
                  </h4>
                  <p class="mt-2 text-base leading-6 text-gray-500">
                    Tailwind provides a common Class based language in building
                    styles. It provides flexibility and does not lock you into a
                    framework. You are just learning a set of utility classes to
                    get the job done.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
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
            <form @submit.prevent="handleAuth(loginForm)" class="w-full max-w-sm">
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

    <div id="services" class="py-24 bg-white">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <p
            class="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase"
          >
            Services
          </p>
          <h3
            class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
          >
            Multiple angles of learning
          </h3>
          <p
            class="mt-8 mb-16 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto"
          >
            Coaching from Mentor, Peer and Alumni support, through Pair
            Programming, chat and PR Review.
          </p>
        </div>

        <div class="mt-10">
          <ul class="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
            <li>
              <div class="flex">
                <div class="flex-shrink-0">
                  <div
                    class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                  >
                    <svg
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg leading-6 font-medium text-gray-900">
                    Pair Programming
                  </h4>
                  <p class="mt-2 text-base leading-6 text-gray-500">
                    It is extremely important that we build a relationship and
                    learn how to communicate and work with each other. Through
                    pair programming, I can provide immediate feedback and work
                    on your challenges together. Whether it’s questions on
                    documentation or code that you’re writing for work let’s
                    solve them together.
                  </p>
                </div>
              </div>
            </li>
            <li class="mt-10 md:mt-0">
              <div class="flex">
                <div class="flex-shrink-0">
                  <div
                    class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                  >
                    <svg
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                      />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg leading-6 font-medium text-gray-900">
                    Peer Programming
                  </h4>
                  <p class="mt-2 text-base leading-6 text-gray-500">
                    Mentor is one part of mentorship. I will pair you with
                    another Mentees also learning Vue. Pairing with a mentee
                    expands the different types of challenges and provide a
                    cooperative environment to problem solve.
                  </p>
                </div>
              </div>
            </li>
            <li class="mt-10 md:mt-0">
              <div class="flex">
                <div class="flex-shrink-0">
                  <div
                    class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                  >
                    <svg
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg leading-6 font-medium text-gray-900">
                    Invitation to Private Slack Server
                  </h4>
                  <p class="mt-2 text-base leading-6 text-gray-500">
                    Chat is a great tool for handling asynchronous idea sharing
                    and discussions. Throughout the day, week, we can explore
                    your questions and curiosities together. We are building a
                    network of Alumnis that have asked and solved the challenges
                    focused in our stack.
                  </p>
                </div>
              </div>
            </li>
            <li class="mt-10 md:mt-0">
              <div class="flex">
                <div class="flex-shrink-0">
                  <div
                    class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                  >
                    <svg
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg leading-6 font-medium text-gray-900">
                    Pull Request Review
                  </h4>
                  <p class="mt-2 text-base leading-6 text-gray-500">
                    As you become comfortable with Vue and start making commits
                    towards projects, the PR process is a great place to gain
                    additional insights. The context provided by a project
                    tailors the design decisions and feedback that can be
                    provided.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
