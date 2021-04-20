<template>
  <div id="app">
    <Navbar/>
    <router-view/>

    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/NavbarFooter/Navbar"
import Footer from "./components/NavbarFooter/Footer"


export default {
  name:"App",
  components: {
    Navbar,Footer
  }
}
</script>


<style lang="scss">

</style>
