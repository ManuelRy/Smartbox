<template>
  <section class="bg-white font-montserrat">
    <div class="container mx-auto overflow-hidden" data-aos="fade-up">
      <div class="flex justify-center">
        <div class="text-center md:max-w-xl lg:max-w-3xl">
          <h1
            class="my-4 text-3xl md:text-4xl lg:text-5xl tracking-tight font-extrabold text-blue-900 dark:text-white"
          >
            Contact Us
          </h1>
        </div>
      </div>
      <div class="flex flex-wrap items-center justify-center">
        <form class="w-full lg:w-5/12 md:px-3 lg:px-6">
          <div class="mb-6 w-full">
            <label
              class="block font-medium mb-1 text-black"
              htmlFor="nameInput"
            >
              Name
            </label>
            <input
              type="text"
              class="px-4 py-2 border w-full outline-none rounded-md"
              id="nameInput"
              placeholder="Name"
            />
          </div>

          <div class="mb-6 w-full">
            <label
              class="block font-medium mb-1 text-black"
              htmlFor="emailInput"
            >
              Email
            </label>
            <input
              type="email"
              class="px-4 py-2 border w-full outline-none rounded-md"
              id="emailInput"
              placeholder="Enter your email address"
            />
          </div>

          <div class="mb-6 w-full">
            <label
              class="block font-medium mb-1 text-black"
              htmlFor="messageInput"
            >
              Message
            </label>
            <textarea
              class="px-4 py-2 border rounded-md w-full outline-none resize-none"
              id="messageInput"
              placeholder="Enter your message"
              rows="6"
            ></textarea>
          </div>

          <button
            type="button"
            class="inline-block w-full px-6 py-3 mb-6 rounded bg-orange-400 text-white font-medium uppercase leading-normal hover:shadow-md hover:bg-orange-500"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
