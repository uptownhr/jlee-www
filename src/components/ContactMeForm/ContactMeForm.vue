<script>
export default {
  computed: {
    reasons() {
      return [
        {
          value: 'mentorship',
          label: 'Seeking Mentorship',
          helper: `Explain why you think we'd be a good mentor/mentee combo.`,
        },
        {
          value: 'investment',
          label: 'Seeking Investment',
          helper: `Please provide the elevator pitch and any publicly viewable links.`,
        },
        {
          value: 'job',
          label: 'Offering a Job Opportunity',
          helper: `Please describe the position and why you believe I'm a good fit.`,
        },
        {
          value: 'other',
          label: 'Other',
          helper: `Hmm, I'm interested to learn more. Why are you reaching out?`,
        },
      ]
    },

    reasonHelper() {
      const reason = this.reasons.find((r) => r.value === this.form.reason)

      return reason ? reason.helper : ''
    },
  },

  data() {
    return {
      form: {
        reason: '',
        about: '',
        disabled: false
      },
    }
  },
  methods: {
    submitForm({reason, about}){
      this.form.disabled = true
      this.$emit('submit', {reason, about})
    },

    resetForm (opts) {
      this.form = {
        reason: '',
        about: '',
        disabled: false,
        ...opts
      }
    }
  }
}
</script>

<template>
  <form
    @submit.prevent="submitForm(form)"
    class="space-y-8 divide-y divide-gray-200"
  >
    <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
      <div>
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Contact Me
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            Please let me know why you are reaching out.
          </p>
        </div>

        <div
          class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
        >
          <label
            for="reason"
            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Reason
          </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <select
              v-model="form.reason"
              id="reason"
              name="reason"
              autocomplete="reason"
              class="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
            >
              <option />
              <option
                v-for="reason in reasons"
                :key="reason.value"
                :value="reason.value"
              >
                {{ reason.label }}
              </option>
            </select>
          </div>
        </div>

        <div class="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
          <div
            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label
              for="about"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              About
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <textarea
                v-model="form.about"
                id="about"
                name="about"
                rows="3"
                class="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
              ></textarea>
              <p class="mt-2 text-sm text-gray-500">
                {{ reasonHelper }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-5">
      <div class="flex justify-end">
        <button
          :disabled="form.disabled"
          type="submit"
          class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <svg
            v-if="form.disabled"
            class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>

          Send
        </button>
      </div>
    </div>
  </form>
</template>
