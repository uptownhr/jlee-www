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
      class="hidden md:block md:show lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
    >
      <img
        class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        src="/img/james-self-backside.jpeg"
        alt="James coding from the back"
      />
    </div>
  </div>
</template>
