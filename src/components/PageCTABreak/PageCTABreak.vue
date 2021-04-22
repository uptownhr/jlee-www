<template>
  <div id="contact-me" class="bg-gray-50">
    <div
        class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
    >
      <h2
          class="sm:text-center text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
      >
        <slot name="heading-text"></slot>
      </h2>
      <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <slot name="cta"></slot>
      </div>
    </div>
  </div>
</template>
