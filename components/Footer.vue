<template>
  <footer
    class="bg-gray-100 dark:bg-gray-900 overflow-hidden font-montserrat"
    data-aos="fade-up"
  >
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <a href="/" class="flex items-center">
            <img src="/img/logo.png" class="h-16" alt="SmartBox Logo" />
          </a>
          <h2 class="ml-12 mt-2 mb-6 text-lg font-extrabold">Contact Us</h2>
          <p class="ml-12 mb-6">
            <Icon name="fa6-solid:envelope" />
            hello.wearesmartbox@gmail.com
          </p>
          <p class="ml-12 mb-6">
            <Icon name="fa6-solid:location-dot" />
            Russian Federation Blvd (110), Phnom Penh 120404
          </p>
          <p class="ml-12 mb-6">
            <Icon name="fa6-solid:phone" />
            010 505 302
          </p>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2
              class="mb-6 text-md font-semibold text-orange-400 uppercase dark:text-white"
            >
              Service
            </h2>
            <ul class="text-black dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a href="/storage" class="hover:text-orange-400">Storage</a>
              </li>
              <li class="mb-4">
                <a href="/delivery" class="hover:text-orange-400">Delivery</a>
              </li>
              <li class="mb-4">
                <a href="/events" class="hover:text-orange-400">Events</a>
              </li>
            </ul>
          </div>
          <div>
            <h2
              class="mb-6 text-md font-semibold text-orange-400 uppercase dark:text-white"
            >
              About Us
            </h2>
            <ul class="text-black dark:text-gray-400 font-medium">
              <li>
                <a href="#About" class="hover:text-orange-400">About Us</a>
              </li>
              <li>
                <a href="/" class="hover:text-orange-400">Why SmartBox?</a>
              </li>
              <li>
                <a href="/" class="hover:text-orange-400">Careers</a>
              </li>
              <li>
                <a href="/" class="hover:text-orange-400">News</a>
              </li>
            </ul>
          </div>
          <div>
            <h2
              class="mb-6 text-md font-semibold text-orange-400 uppercase dark:text-white"
            >
              Terms
            </h2>
            <ul class="text-black dark:text-gray-400 font-medium">
              <li>
                <a href="/terms" class="hover:text-orange-400"
                  >Terms & Conditions</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="my-6 border-black sm:mx-auto dark:border-white lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between grid-cols-6">
        <div>
          <ul class="text-black dark:text-gray-400 font-medium flex space-x-4">
            <h2 class="ml-12 mb-6 text-lg font-extrabold">Contact Us</h2>
            <li class="">
              <a
                href="https://www.facebook.com/profile.php?id=61556244512123&mibextid=LQQJ4d"
              >
                <Icon
                  name="fa6-brands:square-facebook"
                  class="w-8 h-8 hover:text-orange-400"
                />
              </a>
            </li>
            <li class="">
              <a
                href="https://www.instagram.com/smartbox_cambodia?igsh=MWtzZzhraHh1YjRqbQ=="
              >
                <Icon
                  name="fa6-brands:square-instagram"
                  class="w-8 h-8 hover:text-orange-400"
                />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <span class="text-sm text-black sm:text-center dark:text-gray-400"
            >© 2024
            <a href="https://flowbite.com/" class="hover:underline">SmartBox™</a
            >. All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>
