<template>
  <section class="bg-orange-300">
    <div class="container mx-auto" data-aos="fade-up">
      <div class="flex justify-center">
        <div class="text-center md:max-w-xl lg:max-w-3xl">
          <h1
            class="my-4 text-5xl tracking-tight font-sans font-extrabold text-blue-900 dark:text-white text-center"
          >
            Contact Us
          </h1>
        </div>
      </div>
      <div class="flex flex-wrap items-center justify-center">
        <form
          class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6"
        >
          <div class="mb-3 w-full">
            <label
              class="block font-medium mb-[2px] text-black"
              htmlFor="exampleInput90"
            >
              Name
            </label>
            <input
              type="text"
              class="px-2 py-2 border w-full outline-none rounded-md"
              id="exampleInput90"
              placeholder="Name"
            />
          </div>

          <div class="mb-3 w-full">
            <label
              class="block font-medium mb-[2px] text-black"
              htmlFor="exampleInput90"
            >
              Email
            </label>
            <input
              type="email"
              class="px-2 py-2 border w-full outline-none rounded-md"
              id="exampleInput90"
              placeholder="Enter your email address"
            />
          </div>

          <div class="mb-3 w-full">
            <label
              class="block font-medium mb-[2px] text-black"
              htmlFor="exampleInput90"
            >
              Message
            </label>
            <textarea
              class="px-2 py-2 border rounded-[5px] w-full outline-none"
              name=""
              id=""
            ></textarea>
          </div>

          <button
            type="button"
            class="mb-6 inline-block w-full rounded bg-orange-400 px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-orange-500"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
