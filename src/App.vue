<template>
  <div class="app">
    <Navbar />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/NavbarFooter/Navbar";
import Footer from "./components/NavbarFooter/Footer";
import { Auth } from "@/services";

export default {
  name: "App",
  props: ["fields"],
  components: {
    Navbar,
    Footer,
  },

  data() {
    return {};
  },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.1s;
  transition-property: opacity;
  transition-timing-function: ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
