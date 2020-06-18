<script>
import { loadStripe } from '@stripe/stripe-js/pure';
import plans from '../data/plans.json';

export default {
  computed: {
    plans: () => plans,
    plan() {
      //todo: currently selecting just largest plan
      return this.plans.sort((a, b) => {
        return b.amount - a.amount;
      })[0]
    },

    loggedIn () {
      return this.$store.getters['user/loggedIn']
    }
  },

  methods: {
    async checkoutRedirect(planId) {
      const stripe = await loadStripe(process.env.STRIPE_PUBLIC_KEY);
      stripe
        .redirectToCheckout({
          items: [
            {
              plan: planId,
              quantity: 1,
            },
          ],

          successUrl: process.env.URL,
          cancelUrl: process.env.URL,
        })
        .then((result) => {
          console.log('result', result);
        });
    },

    intervalConversion(interval) {
      switch (interval) {
        case 'month':
          return 'Monthly';
        case 'year':
          return 'Yearly';
        default:
          return interval;
      }
    },
  },
};
</script>

<template>
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
                <div class="absolute inset-x-0 top-0 transform translate-y-px">
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
                  <div v-if="loggedIn" class="mt-10">
                    <div class="rounded-lg shadow-md">
                      <a
                        @click="checkoutRedirect('plan_HGlS8lYEq3FxUU')"
                        data-gumroad-single-product="true"
                        class="cursor-pointer block w-full text-center rounded-lg bg-indigo-800 px-6 py-4 text-xl leading-6 font-semibold font-display text-white hover:bg-gray-700 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
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
                  <div v-if="loggedIn" class="mt-10">
                    <div class="rounded-lg shadow-md">
                      <a
                        data-gumroad-single-product="true"
                        class="block w-full text-center rounded-lg bg-white px-6 py-3 text-base leading-6 font-semibold font-display text-indigo-600 hover:text-indigo-500 focus:outline-none focus:shadow-outline transition ease-in-out duration-150  opacity-50 cursor-not-allowed"
                        target="_blank"
                      >
                        Coming soon
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
                  <div v-if="loggedIn" class="mt-10">
                    <div class="rounded-lg shadow-md">
                      <a
                        href="https://gum.co/jYnNI"
                        data-gumroad-single-product="true"
                        class="block w-full text-center rounded-lg bg-white px-6 py-3 text-base leading-6 font-semibold font-display text-indigo-600 hover:text-indigo-500 focus:outline-none focus:shadow-outline transition ease-in-out duration-150  opacity-50 cursor-not-allowed"
                        target="_blank"
                      >
                        Coming soon
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
</template>
