<template>
    <section class="bg-white dark:bg-gray-900 bg-[url('/img/hero.jpg')] h-screen bg-cover bg-center bg-no-repeat" id="bg">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-6 mt-20 p-6 lg:mt-28">
                <h1 class="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-6xl text-orange-400 bg-white rounded-lg inline-block p-4">
                    SmartBox
                </h1>
                <h1 class="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-5xl dark:text-white text-center bg-yellow-300 rounded-lg inline-block p-4">
                    Your Stress-Free Storage Solution
                </h1>
            </div>
            <div class="hidden lg:flex mt-8 lg:mt-28 h-64 lg:h-5/6 w-full lg:w-72 relative images-container">
                <div class="relative h-full w-full lg:w-auto">
                    <img src="/img/hero/intro.png" alt="mockup" class="intro-img h-full w-full object-contain lg:h-auto lg:max-h-full">
                </div>
                <div class="absolute right-0 lg:right-[-72%] top-[5%] h-full w-full lg:w-auto" id="approach">
                    <img src="/img/hero/home.png" alt="mockup" class="home-img h-full w-full object-contain lg:h-auto lg:max-h-full">
                </div>
            </div>
        </div>
    </section>
</template>
<style>
/* Add this to your styles (e.g., in a <style> block or a CSS file) */
@media (max-height: 770px) {
    .images-container {
        height: 50vh; /* Adjust container height based on shorter screens */
    }

    .intro-img, .home-img {
        height: 45vh; /* Adjust image height based on shorter screens */
    }

    .home-img-container {
        right: -72%; /* Keep the positioning the same as specified in Tailwind class */
        top: 5%; /* Keep the positioning the same as specified in Tailwind class */
    }

    #approach
    {
        left: -55%;
        top: 5%;
    }

}
</style>