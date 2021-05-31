<template>
  <div class="col-lg-8 mx-auto mt-5" style="max-width:700px;">
    <div class="card forma mx-auto">
      <div class="card-body forma">
        <b-form class="text-left">
          <b-form-group id="input-group-1" label="Ime:" label-for="input-1">
            <b-form-input id="input-1" v-model="form.ime" required>
            </b-form-input>
          </b-form-group>
          <b-form-group id="input-group-1" label="Prezime:" label-for="input-1">
            <b-form-input id="input-1" v-model="form.prezime" required>
            </b-form-input>
          </b-form-group>
          <b-form-group id="input-group-2" label="Spol" label-for="input-2">
            <b-form-select
              v-model="form.spol"
              :options="spol"
              type="number"
              required
            ></b-form-select>
          </b-form-group>
          <b-form-group
            id="input-group-1"
            label="Datum rođenja"
            label-for="input-1"
          >
            <b-form-input
              v-model="form.datumRodenja"
              id="input-1"
              type="date"
              required
            >
            </b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-1"
            label="Zanimanje"
            label-for="input-1"
          >
            <b-form-select
              v-model="form.zanimanje"
              :options="zanimanje"
              id="input-1"
              type="number"
              required
            >
            </b-form-select>
          </b-form-group>
          <p style="color:red;">{{ feedback }}</p>
          <mdb-btn @click="spremiPromjene" gradient="blue" rounded
            >Spremi</mdb-btn
          >
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import { Service } from "@/services/index.js";
import { Auth } from "@/services";

export default {
  data() {
    return {
      auth: Auth.state,
      form: {
        ime: "",
        prezime: "",
        spol: "",
        datumRodenja: "",
        zanimanje: "",
      },

      feedback: "",

      spol: ["Muškarac", "Žena"],

      zanimanje: ["Zaposlen", "Učenik", "Student", "Nezaposlen"],
    };
  },

  methods: {
    spremiPromjene() {
      if (
        this.form.ime == "" ||
        this.form.prezime == "" ||
        this.form.spol == "" ||
        this.form.datumRodenja == "" ||
        this.form.zanimanje == ""
      ) {
        this.feedback = "Unesite sva polja";
      } else {
        this.feedback = "";
        let newSpremiPromjene = {
          ime: this.form.ime,
          prezime: this.form.prezime,
          spol: this.form.spol,
          datumRodenja: this.form.datumRodenja,
          zanimanje: this.form.zanimanje,
        };
        console.log(newSpremiPromjene);

        Service.post(
          `/UserProfile/${this.auth.userEmail}`,
          newSpremiPromjene
        ).then((result) => {
          console.log(result);
        });
      }
    },
  },
};
</script>

<style scoped>
.tekstInput {
  font-size: 18px;
}

.forma {
  max-width: 500px;
}
</style>
