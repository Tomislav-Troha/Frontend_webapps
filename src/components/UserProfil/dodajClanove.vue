<template>
  <div class="mt-5 mx-auto iza">
    <b-form-group class="mx-auto promjena" label="Unesite staru lozinku">
      <b-form-input type="password" v-model="staraLozinka"></b-form-input>
    </b-form-group>
    <b-form-group class="mx-auto promjena" label="Unesite novu lozinku">
      <b-form-input type="password" v-model="novaLozinka"></b-form-input>
      <div v-if="!$v.novaLozinka.minLength">
        Lozinka mora imati najmanje
        {{ $v.novaLozinka.$params.minLength.min }} znakova.
      </div>

      <mdb-btn
        class="mt-4 ml-1 spremi"
        gradient="blue"
        @click="promjenaLozinke"
        rounded
        >Spremi</mdb-btn
      >
      <router-link to="/profil"
        ><mdb-btn class="mt-4 ml-1 odustani" color="danger" rounded
          >Odustani</mdb-btn
        ></router-link
      >
      <p class="error">{{ feedback }} {{ feedback1 }}</p>
      <span class="error" v-if="showError">Niste unijeli ispravnu lozinku</span>
      <span class="error" v-if="showError2">Nova lozinka je neispravna</span>
      <span class="succes" v-if="showSucces"
        >Lozinka uspješno promjenjena, molim Vas ponovno se prijavite</span
      >
    </b-form-group>
  </div>
</template>

<script>
import { Auth } from "@/services";
import { Service } from "@/services/index.js";
import { required, minLength, between } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      auth: Auth.state,
      staraLozinka: "",
      novaLozinka: "",
      feedback: "",
      feedback1: "",
      showError: false,
      showError2: false,
      showSucces: false,
    };
  },

  validations: {
    novaLozinka: {
      required,
      minLength: minLength(6),
    },
  },

  methods: {
    async promjenaLozinke() {
      this.showError = false;

      if (this.staraLozinka == "" || this.novaLozinka == "") {
        this.feedback1 = "Unesite sva polja";
      } else if (this.staraLozinka == this.novaLozinka) {
        this.feedback = "Nova lozinka mora se razlikovati od stare lozinke";
      } else {
        this.feedback = "";
        this.feedback1 = "";
      }
      if (this.$v.novaLozinka.minLength == false) {
        this.showError1 = false;
        return (this.showError2 = true);
      }
      this.showError = false;
      this.showError2 = false;
      try {
        /* let newPASS = {
          old_password: this.staraLozinka,
          new_password: this.novaLozinka,
        };
        console.log(newPASS);

        Service.patch("users", newPASS).then((result) => {
          console.log(result);
        }); */

        let succes = await Auth.promjenaLozinke(
          this.staraLozinka,
          this.novaLozinka
        );
        console.log("rezultat promjene", succes);

        if (succes == true) {
          this.$alert(
            "Ponovno se prijavite",
            "Lozinka promjenjena",
            "success",
            {
              confirmButtonText: "Prijava!",
            }
          );
          this.$router.push({ name: "login" });
        }
      } catch (e) {
        //console.log(e);
        this.showError = true;
      }
    },
  },
};
</script>

<style scoped>
.promjena {
  max-width: 300px;
}
.error {
  color: red;
}
.succes {
  color: blue;
}
.iza {
  background-color: #f8f9fa;
  max-width: 500px;
  fill: rgba(196, 196, 196, 1);
  filter: drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.788));
  overflow: visible;
  border-radius: 25px;
}

.spremi {
  border-radius: 0 18px;
}

.odustani {
  border-radius: 0 18px;
}
</style>
