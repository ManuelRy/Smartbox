<template>
  <section
    class="relative bg-[url('/img/hero.jpg')] h-screen bg-cover bg-center bg-no-repeat"
    id="bg"
  >
    <div class="absolute inset-0 bg-black bg-opacity-20"></div>
    <div
      class="relative grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
      id="image-cv"
    >
      <div
        class="font-montserrat mr-auto place-self-center lg:col-span-6 mt-20 p-6 lg:mt-28"
      >
        <h1
          class="max-w-2xl mb-2 ml-3 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-7xl text-orange-400 bg-white rounded-xl inline-block p-4 -rotate-2"
        >
          SmartBox
        </h1>
        <h1
          class="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-5xl dark:text-white text-center bg-yellow-300 rounded-xl inline-block p-2 rotate-3"
        >
          Your Stress-Free Storage Solution
        </h1>
      </div>
      <div class="responsive-container lg:mt-28 lg:col-span-5 lg:flex lg:justify-center">
        <img src="/img/hero/app.png" alt="mockup" class="responsive-image">
      </div>
    </div>
  </section>
</template>

<style>
.responsive-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.responsive-image {
  width: 80%;
  height: auto;
  max-height: 80vh;  /* Ensure the image doesn't get too large */
  object-fit: contain;
}

/* Media query for screens 1583px wide or less */
@media (max-width: 1583px) {
  .responsive-image {
    width: 70%; /* Adjust the width for better responsiveness */
    max-height: 70vh; /* Adjust the max-height for better responsiveness */
  }
}

/* Media query for screens 1024px wide or less */
@media (max-width: 1024px) {
  .responsive-image {
    width: 60%; /* Adjust the width for better responsiveness */
    max-height: 50vh; /* Adjust the max-height for smaller screens */
  }
}

/* Media query for screens 807px wide or less */
@media (max-width: 807px) {
  .responsive-image {
    width: 50%; /* Adjust the width for better responsiveness */
    max-height: 50vh; /* Adjust the max-height for smaller screens */
  }
}
@media (max-width: 471px) {
  .responsive-image {
    width: 60%; /* Adjust the width for better responsiveness */
    max-height: 120vh; /* Adjust the max-height for smaller screens */
  }
}
/* Media query for screens 600px wide or less */

</style>