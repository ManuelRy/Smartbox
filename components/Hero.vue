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
      <div
        class="overflow-hidden flex justify-center lg:mt-28 mt-8 h-64 lg:h-4/6 w-full lg:w-72 relative images-container"
      >
        <div class="relative lg:w-auto h-full w-full">
          <img
            src="/img/hero/intro.png"
            alt="mockup"
            class="intro-img h-full w-full object-contain"
          />
        </div>
        <div
          class="absolute right-[-40%] top-[5%] w-full h-full"
          id="approach"
        >
          <img
            src="/img/hero/home.png"
            alt="mockup" 
            class="home-img h-full w-full object-contain"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style>
@media (max-height: 770px) {
  .images-container {
    height: 70vh;
  }

  .intro-img,
  .home-img {
    height: 65vh;
  }
  #approach {
    left: 20%;
    top: 5%;
  }
  #image-cv {
    margin-left: 10%;
  }
}

@media (max-width: 1024px) {
  .images-container {
    height: 50vh;
  }

  .intro-img,
  .home-img {
    height: 100%;
  }
}

@media (max-width: 768px) {
  .images-container {
    height: 40vh;
  }

  .intro-img,
  .home-img {
    height: 100%;
  }
  #approach {
    left: 20%;
    top: 5%;
  }
}
@media (max-width: 600px) {
  .images-container {
    height: 40vh;
    left: -10%;
  }

  .intro-img,
  .home-img {
    height: 100%;
  }
  #approach {
    left: 25%;
    top: 5%;
  }
}
</style>