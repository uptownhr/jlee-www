<template>
  <div id="latest-work" class="py-12 md:py-24 bg-white">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <p
            class="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase"
        >
          {{ title }}
        </p>
        <h2
            class="mt-2 leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
        >
          {{ heading }}
        </h2>
        <p class="md:mt-8 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
          {{ description }}
        </p>

        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    heading: String,
    description: String
  }
}
</script>
