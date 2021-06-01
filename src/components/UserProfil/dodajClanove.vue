<template>
  <div class="mt-5 mx-auto iza">
    <b-form-group class="mx-auto promjena" label="Unesite staru lozinku">
      <b-form-input v-model="staraLozinka"></b-form-input>
    </b-form-group>
    <b-form-group class="mx-auto promjena" label="Unesite novu lozinku">
      <b-form-input v-model="novaLozinka"></b-form-input>

      <mdb-btn
        class="mt-4 ml-1"
        gradient="blue"
        @click="promjenaLozinke"
        rounded
        >Spremi</mdb-btn
      >
      <router-link to="/profil"
        ><mdb-btn class="mt-4 ml-1" color="danger" rounded
          >Odustani</mdb-btn
        ></router-link
      >
      {{ feedback }} {{ feedback1 }}
    </b-form-group>
  </div>
</template>

<script>
import { Auth } from "@/services";
import { Service } from "@/services/index.js";

export default {
  data() {
    return {
      auth: Auth.state,
      staraLozinka: "",
      novaLozinka: "",
      feedback: "",
      feedback1: "",
    };
  },

  methods: {
    async promjenaLozinke() {
      if (this.staraLozinka == "" || this.novaLozinka == "") {
        this.feedback1 = "Unesite sva polja";
      } else {
        this.feedback = null;
        let succes = await Auth.promjenaLozinke(
          this.staraLozinka,
          this.novaLozinka
        );
        console.log(succes);
        if (succes == true) {
          this.$router.push({ name: "promjena_lozinke" });
        }
      }
    },
  },
};
</script>

<style scoped>
.promjena {
  max-width: 300px;
}

.iza {
  background-color: #f8f9fa;
  max-width: 500px;
  fill: rgba(196, 196, 196, 1);
  filter: drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.788));
  overflow: visible;
  border-radius: 25px;
}
</style>
