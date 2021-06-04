<template>
  <div class="card-body mx-auto mt-5">
    <div
      class="mx-5"
      v-for="EmailAdmin in EmailAdmin"
      v-bind:key="EmailAdmin.email"
      v-bind:value="EmailAdmin.email"
    >
      <b-form-group label="Email">
        <b-form inline>
          <b-form id="Email" class="w-75 form-control ">{{
            EmailAdmin.email
          }}</b-form>
          <button @click="izbrisiUsera(EmailAdmin.email)" class="btn ml-5">
            <i class="fa fa-trash"></i>
          </button>
        </b-form>
      </b-form-group>
    </div>
    <p class="text-center" style="color:red; font-size:25px;">{{ feedback }}</p>
  </div>
</template>

<script>
import { Admin } from "@/services";
import { Service } from "@/services";
import { Auth } from "@/services";
import { UzmiNadimak } from "@/services";

export default {
  data() {
    return {
      auth: Auth.state,
      EmailAdmin: {},
      feedback: "",
    };
  },

  created() {
    this.pozoviBackend();
  },

  methods: {
    async pozoviBackend(term) {
      this.EmailAdmin = await Admin.getAll(term);
    },

    izbrisiUsera(email) {
      let newMail = {
        email: email,
      };
      if (newMail.email == "horvat@gmail.com") {
        return (this.feedback = "Nije baš cool obrisat admina");
      } else {
        console.log(newMail);
        Service.post("/admin/" + email, newMail).then((result) => {
          console.log(result);
        });
      }
    },
  },
};
</script>

<style scoped>
.card-body {
  background-color: #f8f9fa;
  max-width: 600px;
  fill: rgba(196, 196, 196, 1);
  filter: drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.788));
  overflow: visible;
  border-radius: 15px;
}
.obrisi {
  color: red;
}
.btn {
  background-color: red; /* Blue background */
  border: none; /* Remove borders */
  color: white; /* White text */
  padding: 12px 16px; /* Some padding */
  font-size: 16px; /* Set a font size */
  cursor: pointer; /* Mouse pointer on hover */
}
</style>
