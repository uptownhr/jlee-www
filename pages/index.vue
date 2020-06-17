<template>
  <div>
    <div class="relative bg-white overflow-hidden">
      <div class="max-w-screen-xl mx-auto ">
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
                    <img
                      class="h-8 w-auto sm:h-10"
                      src="/img/logos/workflow-mark-on-white.svg"
                      alt="Logo"
                    />
                  </a>
                  <div class="-mr-2 flex items-center md:hidden">
                    <button
                      type="button"
                      class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                      id="main-menu"
                      aria-label="Main menu"
                      aria-haspopup="true"
                    >
                      <svg
                        class="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="hidden md:block md:ml-10 md:pr-4">
                <a
                  href="#"
                  class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                  >My Stack
                </a>
                <a
                  href="#"
                  class="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                  >Services
                </a>
                <a
                  href="#"
                  class="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                  >About Me
                </a>
                <a
                  href="#"
                  class="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                  >FAQ
                </a>
                <a
                  href="#"
                  class="ml-8 font-medium text-indigo-600 hover:text-indigo-900 transition duration-150 ease-in-out"
                  >Log in
                </a>
              </div>
            </nav>
          </div>

          <!--
        Mobile menu, show/hide based on menu open state.

        Entering: "duration-150 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      -->
          <div
            class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div class="rounded-lg shadow-md">
              <div
                class="rounded-lg bg-white shadow-xs overflow-hidden"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="main-menu"
              >
                <div class="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      class="h-8 w-auto"
                      src="/img/logos/workflow-mark-on-white.svg"
                      alt=""
                    />
                  </div>
                  <div class="-mr-2">
                    <button
                      type="button"
                      class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                      aria-label="Close menu"
                    >
                      <svg
                        class="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="px-2 pt-2 pb-3">
                  <a
                    href="#"
                    class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                    role="menuitem"
                    >Product
                  </a>
                  <a
                    href="#"
                    class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                    role="menuitem"
                    >Features
                  </a>
                  <a
                    href="#"
                    class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                    role="menuitem"
                    >Marketplace
                  </a>
                  <a
                    href="#"
                    class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                    role="menuitem"
                    >Company
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out"
                    role="menuitem"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>

          <main
            class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
          >
            <div class="sm:text-center lg:text-left">
              <h2
                class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"
              >
                Hi, I'm James Lee
                <br class="xl:hidden" />
                <span class="text-indigo-600">VueJS Mentor </span>
              </h2>
              <p
                class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                I’m a software engineer that love using VueJS. I’ve been using
                Vue for 4 years and have not looked back. Let me guide and fast
                track you to using Vue today.
              </p>
              <div
                class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
              >
                <div class="rounded-md shadow">
                  <a
                    href="#"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
        />
      </div>
    </div>

    <div class="py-24 bg-white">
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
        <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
          <div class="inline-flex rounded-md shadow">
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              Get started
            </a>
          </div>
          <div class="ml-3 inline-flex rounded-md shadow">
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="py-24 bg-white">
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
    <div class="mt-16 bg-white pb-12 lg:mt-20">
      <div class="relative z-0">
        <div class="absolute inset-0 h-5/6 bg-white lg:h-2/3"></div>
        <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="relative lg:grid lg:grid-cols-10">
            <div
              class="max-w-lg mx-auto lg:max-w-none lg:mx-0 lg:col-start-4 lg:col-end-8 lg:row-start-1 lg:row-end-4"
            >
              <div class="relative z-10 rounded-lg shadow-xl">
                <div>
                  <div
                    class="pointer-events-none absolute inset-0 rounded-lg border-2 border-indigo-400"
                  ></div>
                  <div
                    class="absolute inset-x-0 top-0 transform translate-y-px"
                  >
                    <div class="flex justify-center transform -translate-y-1/2">
                      <span
                        class="inline-flex rounded-full bg-indigo-400 px-4 py-1 text-sm leading-5 font-semibold tracking-wider uppercase text-white"
                      >
                        Dedicated Mentorship
                      </span>
                    </div>
                  </div>
                  <div class="bg-white rounded-t-lg px-6 pt-12 pb-10">
                    <div>
                      <!-- <p
                        class="text-center text-lg leading-7 font-semibold font-display text-indigo-500 uppercase tracking-widest"
                      >
                        Bundle
                      </p> -->
                      <h2
                        class="mt-2 text-center text-3xl leading-9 font-semibold font-display text-gray-900 sm:-mx-6"
                      >
                        Pair Programming
                      </h2>
                      <div
                        class="mt-4 flex items-center justify-center font-display"
                      >
                        <span
                          class="px-3 flex items-start text-6xl leading-none tracking-tight font-medium text-gray-900 sm:text-7xl"
                        >
                          <span
                            class="mt-2 mr-1 text-4xl leading-none sm:text-5xl"
                          >
                            $
                          </span>
                          <span>
                            399
                          </span>
                        </span>
                        <span
                          class="text-2xl leading-8 font-semibold text-gray-400 tracking-wide sm:text-3xl sm:leading-9"
                        >
                          USD
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10"
                  >
                    <ul>
                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <svg
                            class="h-6 w-6 text-indigo-500"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        <p
                          class="ml-3 text-base leading-6 font-medium text-gray-500"
                        >
                          Weekly Dedicated Pairing
                        </p>
                      </li>

                      <li class="mt-4 flex items-start">
                        <div class="flex-shrink-0">
                          <svg
                            class="h-6 w-6 text-indigo-500"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        <p
                          class="ml-3 text-base leading-6 font-medium text-gray-500"
                        >
                          Peer Programming
                        </p>
                      </li>
                      <li class="mt-4 flex items-start">
                        <div class="flex-shrink-0">
                          <svg
                            class="h-6 w-6 text-indigo-500"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        <p
                          class="ml-3 text-base leading-6 font-medium text-gray-500"
                        >
                          Private Slack Invitation
                        </p>
                      </li>
                      <li class="mt-4 flex items-start">
                        <div class="flex-shrink-0">
                          <svg
                            class="h-6 w-6 text-indigo-500"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        <p
                          class="ml-3 text-base leading-6 font-medium text-gray-500"
                        >
                          Pathway to Mentorship
                        </p>
                      </li>
                    </ul>
                    <div class="mt-10">
                      <div class="rounded-lg shadow-md">
                        <a
                          href="https://gum.co/Cfrhr"
                          data-gumroad-single-product="true"
                          class="block w-full text-center rounded-lg bg-indigo-800 px-6 py-4 text-xl leading-6 font-semibold font-display text-white hover:bg-gray-700 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
                          target="_blank"
                        >
                          Buy Early Access
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="mt-6 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-1 lg:col-end-4 lg:row-start-2 lg:row-end-3"
            >
              <div
                class="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg"
              >
                <div class="flex-1 flex flex-col">
                  <div class="bg-white px-6 pt-12 pb-10">
                    <div>
                      <h2
                        class="mt-2 text-center text-3xl leading-9 font-semibold font-display text-gray-900"
                      >
                        Private Slack Invitation
                      </h2>
                      <div
                        class="mt-4 flex items-center justify-center font-display"
                      >
                        <span
                          class="px-3 flex items-start text-6xl leading-none tracking-tight font-medium text-gray-900"
                        >
                          <span class="mt-2 mr-2 text-4xl">
                            $
                          </span>
                          <span>
                            199
                          </span>
                        </span>
                        <span
                          class="text-2xl leading-8 font-semibold text-gray-400 tracking-wide"
                        >
                          USD
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10"
                  >
                    <ul>
                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <svg
                            class="h-6 w-6 text-indigo-500"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        <p
                          class="ml-3 text-base leading-6 font-medium text-gray-500"
                        >
                          Invitation to Private Slack Server
                        </p>
                      </li>
                      <li class="mt-4 flex items-start">
                        <div class="flex-shrink-0">
                          <svg
                            class="h-6 w-6 text-indigo-500"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        <p
                          class="ml-3 text-base leading-6 font-medium text-gray-500"
                        >
                          Alumni Feedback & Support
                        </p>
                      </li>
                      <li class="mt-4 flex items-start">
                        <div class="flex-shrink-0">
                          <svg
                            class="h-6 w-6 text-indigo-500"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        <p
                          class="ml-3 text-base leading-6 font-medium text-gray-500"
                        >
                          Invitation to Training Webinars
                        </p>
                      </li>
                      <li class="mt-4 flex items-start">
                        <div class="flex-shrink-0">
                          <svg
                            class="h-6 w-6 text-indigo-500"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        <p
                          class="ml-3 text-base leading-6 font-medium text-gray-500"
                        >
                          Access to Recorded Sessions
                        </p>
                      </li>
                    </ul>
                    <div class="mt-8">
                      <div class="rounded-lg shadow-md">
                        <a
                          href="https://gum.co/KXjZm"
                          data-gumroad-single-product="true"
                          class="block w-full text-center rounded-lg bg-white px-6 py-3 text-base leading-6 font-semibold font-display text-indigo-600 hover:text-indigo-500 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
                          target="_blank"
                        >
                          Buy Early Access
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="mt-6 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-8 lg:col-end-11 lg:row-start-2 lg:row-end-3"
            >
              <div
                class="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg"
              >
                <div class="flex-1 flex flex-col">
                  <div class="bg-white px-6 pt-12 pb-10">
                    <div>
                      <h2
                        class="mt-2 text-center text-3xl leading-9 font-semibold font-display text-gray-900"
                      >
                        Peer Programming
                      </h2>
                      <div
                        class="mt-4 flex items-center justify-center font-display"
                      >
                        <span
                          class="px-3 flex items-start text-6xl leading-none tracking-tight font-medium text-gray-900"
                        >
                          <span class="mt-2 mr-2 text-4xl">
                            $
                          </span>
                          <span>
                            299
                          </span>
                        </span>
                        <span
                          class="text-2xl leading-8 font-semibold text-gray-400 tracking-wide"
                        >
                          USD
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10"
                  >
                    <ul>
                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <svg
                            class="h-6 w-6 text-indigo-500"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        <p
                          class="ml-3 text-base leading-6 font-medium text-gray-500"
                        >
                          Mentee Partner Pairing
                        </p>
                      </li>
                      <li class="mt-4 flex items-start">
                        <div class="flex-shrink-0">
                          <svg
                            class="h-6 w-6 text-indigo-500"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        <p
                          class="ml-3 text-base leading-6 font-medium text-gray-500"
                        >
                          Joint Mentorship Pairing
                        </p>
                      </li>
                      <li class="mt-4 flex items-start">
                        <div class="flex-shrink-0">
                          <svg
                            class="h-6 w-6 text-indigo-500"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        <p
                          class="ml-3 text-base leading-6 font-medium text-gray-500"
                        >
                          Private Slack Invitation
                        </p>
                      </li>
                      <li class="mt-4 flex items-start">
                        <div class="flex-shrink-0">
                          <svg
                            class="h-6 w-6 text-indigo-500"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        <p
                          class="ml-3 text-base leading-6 font-medium text-gray-500"
                        >
                          Priority Chat
                        </p>
                      </li>
                    </ul>
                    <div class="mt-8">
                      <div class="rounded-lg shadow-md">
                        <a
                          href="https://gum.co/jYnNI"
                          data-gumroad-single-product="true"
                          class="block w-full text-center rounded-lg bg-white px-6 py-3 text-base leading-6 font-semibold font-display text-indigo-600 hover:text-indigo-500 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
                          target="_blank"
                        >
                          Buy Early Access
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
