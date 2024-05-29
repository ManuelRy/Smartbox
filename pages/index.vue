<script setup>
import { useScroll } from '@vueuse/core';
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import Footer from "~/components/Footer.vue";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
// const scrollTop = () => {
//   window.scrollTo(0, 0)
// }
</script>

<template>
  <div class="bg-orange-100 ">
    <Preloader />
    <NavBar style="z-index: 100" />
    <Hero style="z-index: 0" />
    <Test-ca/>
    <About id="About" />
    <Services id="Service" />
    <Contact id="Contact" />
    <Scroller/>
    <Footer />
  </div>
</template>
