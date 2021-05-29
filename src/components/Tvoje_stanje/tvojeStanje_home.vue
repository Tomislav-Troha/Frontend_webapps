<template>
  <div class=" mx-auto" style="">
    <br /><br />
    <b-card class="mt-5  mx-auto hover text-center" style="max-width:700px;">
      <router-link to="/vas_obiteljski_plan">
        <span
          v-on:mouseover="mouseover"
          v-on:mouseleave="mouseleave"
          class=""
          style="color:black; font-size:28px;"
        >
          {{ messagePrvi }}
        </span>
      </router-link>
    </b-card>

    <b-card class="mt-5 mx-auto hover text-center" style="max-width:700px;">
      <router-link to="/Vas_pojedinacni_plan">
        <span
          v-on:mouseover="mouseover1"
          v-on:mouseleave="mouseleave1"
          class=""
          style="color:black; font-size:28px;"
        >
          {{ messageDrugi }}
        </span>
      </router-link>
    </b-card>

    <b-card class="mt-5 mx-auto hover text-center" style="max-width:700px;">
      <router-link to="/index">
        <span
          v-on:mouseover="mouseover2"
          v-on:mouseleave="mouseleave2"
          class=""
          style="color:black; font-size:28px;"
        >
          {{ messageTreci }}
        </span>
      </router-link>
    </b-card>

    <br /><br /><br /><br /><br /><br /><br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      messagePrvi: "Vaš obiteljski plan",
      messageDrugi: "Vaš pojedinačni plan",
      messageTreci: "BMI, udio masti",
    };
  },

  methods: {
    mouseover: function() {
      this.messagePrvi = "Utvrdite plan koji ste si spremili";
    },
    mouseleave: function() {
      this.messagePrvi = "Vaš obiteljski plan";
    },

    mouseover1: function() {
      this.messageDrugi = "Utvrdite kako ste si spremali pojedinačno";
    },

    mouseleave1: function() {
      this.messageDrugi = "Vaš pojedinačni plan";
    },

    mouseover2: function() {
      this.messageTreci = "Izračunajte si stanje";
    },

    mouseleave2: function() {
      this.messageTreci = "BMI, udio masti";
    },
  },
};
</script>

<style scoped>
.hover:hover {
  background-color: #009dc5;
}

.hover1:hover {
  background-color: #009dc5;
}
</style>
