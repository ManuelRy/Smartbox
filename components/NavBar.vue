<template>
  <div class="justify-center w-full">
    <nav
      class="bg-white dark:bg-gray-900 fixed z-1000 top-0 left-0 right-0 md:w-full w-full lg:w-9/12 mx-auto border-b border-gray-200 dark:border-gray-600 items-center">
      <div class="max-w-screen-xl flex flex-wrap justify-between mx-auto p-4">
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/img/logo.png" class="animate__animated animate__bounce h-16" alt="Smartbox Logo" />
        </a>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button @click="toggleMenu" data-collapse-toggle="navbar-sticky" type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

        <div :class="{
          'hidden': !isMenuOpen,
          'block': isMenuOpen,
          'transition-all': true,
          'duration-300': true,
          'ease-in-out': true
        }" class="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul
            class="flex flex-col justify-center p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="/"
                class="block py-2 px-3 text-lg text-white bg-orange-400 rounded md:bg-transparent md:text-orange-400 md:p-0 md:dark:text-blue-500 scroll-smooth focus:scroll-auto"
                aria-current="page">HOME</a>
            </li>
            <li>
              <nuxt-link to="#About">
                 <a href="#About"
                class="block py-2 px-3 text-lg text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-400 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 scroll-smooth focus:scroll-auto">ABOUT</a>
              </nuxt-link>
            </li>
            <li>
              <a id="dropdownDefaultButton" data-dropdown-toggle="dropdown" href="#Service"
                class="block py-2 px-3 text-lg text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-400 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                SERVICES
                <svg class="inline w-2.5 h-2.5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 4 4 4-4" />
                </svg>
              </a>

              <div id="dropdown"
                class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                  <li>
                    <nuxt-link to="/storage">
                        <a href="#"
                      class="block px-4 py-2 hover:bg-orange-200 dark:hover:bg-gray-600 dark:hover:text-white">Storage</a>
                    </nuxt-link>
                  
                  </li>
                  <li>
                    <nuxt-link to="/delivery">
                      <a href="#"
                    class="block px-4 py-2 hover:bg-orange-200 dark:hover:bg-gray-600 dark:hover:text-white">Delivery</a>
                  </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/events">
                      <a href="#"
                    class="block px-4 py-2 hover:bg-orange-200 dark:hover:bg-gray-600 dark:hover:text-white">Events</a>
                  </nuxt-link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#Contact"
                class="block py-2 px-3 text-lg text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-400 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">CONTACT</a>
            </li>
            <li>
              <a href="#Contact"
                class="block py-2 px-3 text-lg text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-400 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">MEMBERS</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};

</script>

<style>
.transition-all {
  transition: all 1s ease-in-out;
}

nav {
  justify-content: center;
}
</style>