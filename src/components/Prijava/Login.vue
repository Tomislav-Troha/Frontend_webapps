<template>
  <!-- Material form login -->
  <div>
    <div
      class="mx-auto container mt-5  rounded-lg login"
      style="max-width:500px;"
    >
      <form novalidate @submit.prevent="login">
        <p class="h4 text-center mb-4 ">Prijava</p>
        <div class="grey-text mx-4">
          <mdb-input
            v-model="email"
            label="Email"
            type="email"
            required
            invalidFeedback="Molimo unesite ispravan e-mail."
            validFeedback="Izgleda dobro!"
          />
          <mdb-input
            v-model="lozinka"
            label="Lozinka"
            type="password"
            required
            invalidFeedback="Molimo unesite ispravanu lozinku."
            validFeedback="Izgleda dobro!"
          />
        </div>
        <br />
        <span class="text-center" v-if="showError"
          ><p style="color:red;">Podaci koje ste unijeli nisu valjani</p></span
        >
        <span class="text-center" v-if="showError1"
          ><p style="color:red;">Ispunite sva polja</p></span
        >
        <div class="text-center">
          <mdb-btn type="submit" class="rounded-lg">Prijava</mdb-btn>
          <br /><br />

          <mdb-modal-footer class="mx-5 pt-3 mb-1">
            <p class="font-small grey-text d-flex justify-content-end">
              Niste član?
              <router-link to="/register"
                ><a class="blue-text ml-1">Registriraj te se!</a></router-link
              >
            </p>
          </mdb-modal-footer>
        </div>
      </form>
    </div>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  </div>

  <!-- Material form login -->
</template>

<script>
import { Auth } from "@/services";

export default {
  data() {
    return {
      email: "",
      lozinka: "",
      showError: false,
      showError1: false,

      show: true,
    };
  },

  methods: {
    async login(event) {
      if (this.email == "" || this.lozinka == "") {
        event.target.classList.add("was-validated");
        return (this.showError1 = true);
      }

      this.showError = false;
      this.showError1 = false;

      try {
        let succes = await Auth.login(this.email, this.lozinka);
        console.log("Rezultat prijave", succes);

        if ((succes == true && this.email !== "") || this.lozinka !== "") {
          this.$router.replace({ path: "/home" });
          this.$router.go();
        }
      } catch (e) {
        this.showError = true;
      }
    },
  },
};
</script>

<style scoped>
.login {
  fill: rgba(196, 196, 196, 1);
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.788));
  overflow: visible;
  background: #f8f8f8;
}
</style>
