<template>
  <div class="relative overflow-hidden">
    <div class="max-w-screen-xl mx-auto">
      <div
        class="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
      >
        <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
          <Nav />
        </div>

        <main
          class="mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
        >
          <div class="sm:text-center lg:text-left">
            <h1 slot="heading-text"
                class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
              <slot name="heading-text" />
            </h1>


            <p
                slot="sub-text"
                class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
            >
              <slot name="sub-text" />
            </p>
            <div
                class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
            >
              <slot />
            </div>
          </div>
        </main>
      </div>
    </div>
    <hr class="md:hidden" />
    <div
      class="hidden lg:block md:show lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
    >
      <img
        class="h-56 object-cover sm:h-72 md:h-96 lg:h-full"
        src="/img/james-lee-800x800.jpg"
        alt="James Lee Portrait"
      />
    </div>
  </div>
</template>
