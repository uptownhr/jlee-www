<script>
import Logo from './logo'

export default {
  components: { Logo },
}
</script>
<template>
  <nav class="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
    <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
      <a href="#">
        <span class="sr-only">Workflow</span>
        <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="">
      </a>
    </div>
    <div class="hidden md:flex md:space-x-10">
      <nuxt-link
          to="/mentorship"
          class="font-medium text-gray-500 hover:text-gray-900"
      >
        Vue Mentorship
      </nuxt-link>

      <a
          href="https://www.linkedin.com/in/uptown/"
          class="font-medium text-gray-500 hover:text-gray-900"
          target="_blank"
          rel="noopener"
      >
        LinkedIn
      </a>
    </div>
    <!-- <div class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
            <span class="inline-flex rounded-md shadow">
              <a href="#" class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50">
                Log in
              </a>
            </span>
    </div> -->
  </nav>
  <!-- <nav
      class="relative flex items-center justify-between sm:h-10 lg:justify-start"
  >
    <div
        class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"
    >
      <div class="flex items-center justify-between w-full md:w-auto">
        <nuxt-link to="/" aria-label="Home">
          <Logo class="h8 w-auto sm:h-10" />
        </nuxt-link>
      </div>
    </div>
    <div class="hidden md:block md:ml-10 md:pr-4">
      <nuxt-link
          to="/mentorship"
          class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
      >
        Vue Mentorship
      </nuxt-link>

      <a
          href="https://www.linkedin.com/in/uptown/"
          class="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
          target="_blank"
          rel="noopener"
      >
        LinkedIn
      </a>
      <a
        href="#latest-work"
        class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
        >Latest Work
      </a>
      <a
        href="#investments"
        class="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
        >Investments
      </a>
      <nuxt-link
        to="/contact-me"
        class="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
        >Contact Me
      </nuxt-link>
    </div>
  </nav>-->
</template>
