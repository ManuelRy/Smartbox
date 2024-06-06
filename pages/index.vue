<script setup>
import { useScroll } from '@vueuse/core';
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import Footer from "~/components/Footer.vue";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});

</script>

<template>
  <div>
    <Preloader />
    <NavBar style="z-index: 1050 !important; position:relative;"/>
    <Hero />
    <About-us />
    <!-- <About id="About" /> -->
    <Services id="Service" />
    <About-us />
    <Contact id="Contact" />
    <Scroller/>
    <Footer />
  </div>
</template>
