<template>
  <div>
    <div
      class="calorie p-4 mx-auto mt-5 fadeInDown  text-center"
      style="max-width:744px; background-color: #f8f8f8; !important;  "
    >
      <h1 style="font-family:Segoe UI">Muškarci</h1>

      <h3 class="mt-5" style="font-family:Segoe UI">
        Odaberite jednu od opcija
      </h3>

      <b-form class="mx-4 ">
        <b-input-group class=" mx-auto my-4 " style="max-width:182px;">
          <b-form-select
            id="input-1"
            v-model="opcija.muskarci"
            :options="muskarci"
            required
          >
          </b-form-select>
        </b-input-group>
      </b-form>
    </div>

    <div
      v-if="opcija.muskarci == 'Mršavljenje' || opcija.muskarci == 'Teretana'"
      class="calorie p-4 mx-auto mt-5 rounded-lg   text-center"
      style="max-width:744px; background-color: #f8f8f8; !important;  "
    >
      <h5 v-if="opcija.muskarci == 'Mršavljenje'">
        Odabrali ste opciju mršavljenje,<br />
        izračunajte svoju dnevnu kalorijsku vrijednosti koju morate ispuniti za
        vaš cilj.
      </h5>

      <h5 v-if="opcija.muskarci == 'Teretana'">
        Odabrali ste opciju teretan,<br />
        izračunajte svoju dnevnu kalorijsku vrijednosti koju morate ispuniti za
        vaš cilj.
      </h5>

      <div
        class="mt-5 mx-auto p-4"
        style="background-color: #f8f8f8; !important; max-width:450px;"
        id="masti"
      >
        <b-form @submit="onsubmit" class="text-left">
          <b-form-group id="input-group-1" label="Spol:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="spol.muskarci"
              disabled
              required
            >
            </b-form-input>
          </b-form-group>
          <b-form-group id="input-group-1" label="Cilj:" label-for="input-1">
            <b-form-input
              v-if="opcija.muskarci == 'Mršavljenje'"
              id="input-1"
              disabled
              v-model="spol.aktivnost_m"
              required
            >
            </b-form-input>

            <b-form-input
              v-if="opcija.muskarci == 'Teretana'"
              id="input-1"
              disabled
              v-model="spol.aktivnost_t"
              required
            >
            </b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label="Unesite težinu (kg):"
            label-for="input-2"
          >
            <b-form-input
              v-model="form.tezina"
              type="number"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-1"
            label="Unesite visinu (cm):"
            label-for="input-1"
          >
            <b-form-input
              v-model="form.visina"
              id="input-1"
              type="number"
              required
            >
            </b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-1"
            label=" Unesite dob:"
            label-for="input-1"
          >
            <b-form-input
              v-model="form.dob"
              id="input-1"
              type="number"
              required
            >
            </b-form-input>
          </b-form-group>
          <b-button
            v-on:click="jeSakriven = true"
            type="sumbit"
            size="lg"
            variant="background-color:#30CFC0; !important; font-family:Segoe UI; "
            style="font-family:Segoe UI; color:white; border-radius:40px; ; background-color:#30CFC0; !important;"
            >Izračunaj</b-button
          >
        </b-form>
      </div>
    </div>

    <div
      v-if="
        (opcija.muskarci == 'Mršavljenje' && jeSakriven && rezultat1 !== 0) ||
          (opcija.muskarci == 'Teretana' && jeSakriven && rezultat2 !== 0)
      "
      class="calorie p-4 mx-auto mt-5 rounded-lg text-center"
      style="max-width:744px; background-color: #f8f8f8; !important;  "
    >
      <h3
        v-if="
          opcija.muskarci == 'Mršavljenje' &&
            rezultat1 > 500 &&
            rezultat1 < 6000
        "
      >
        Vaš dnevni unos mora biti {{ rezultat1.toFixed(0) }} kalorija <br />
      </h3>
      <h3
        v-if="
          opcija.muskarci == 'Teretana' && rezultat2 > 500 && rezultat2 < 6000
        "
      >
        Vaš dnevni unos mora biti {{ rezultat2.toFixed(0) }} kalorija <br />
      </h3>

      <p style="font-size:25px; color:red;">{{ feedback }}</p>

      <b-form @submit.prevent="spremi">
        <b-button
          v-if="
            (rezultat1 > 500 && rezultat1 < 6000) ||
              (rezultat2 > 500 && rezultat2 < 6000)
          "
          class=""
          size="lg"
          type="submit"
          variant=" background-color:#30CFC0; !important; font-family:Segoe UI; "
          style=" font-family:Segoe UI; color:white; border-radius:40px; ; background-color:#30CFC0; !important;"
          >Spremi</b-button
        >
      </b-form>

      <h5
        v-if="
          (rezultat1 > 500 && rezultat1 < 6000) ||
            (rezultat2 > 500 && rezultat2 < 6000)
        "
        class="mt-4"
      >
        <router-link to="/Kalkulator_kalorija"
          ><span style="color:blue;">Ovdje</span></router-link
        >
        pogledajte koliko namirnica ima kalorija
      </h5>
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

      jeSakriven: false,
      spremiFeedback: "",

      feedback: "",

      rezultat1: 0,
      rezultat2: 0,
      rezultat3: 0,
      rezultat4: 0,
      rezultat5: 0,

      spol: {
        muskarci: "Muškarci",
        aktivnost_m: "Mršavljenje",
        aktivnost_t: "Teretana",
      },

      opcija: {
        zene: null,
        muskarci: null,
        djeca: null,
      },

      muskarci: [
        { text: "-- Odaberite cilj --", value: null },
        "Mršavljenje",
        "Teretana",
      ],

      form: {
        tezina: null,
        visina: null,
        dob: null,
      },
    };
  },

  methods: {
    onsubmit(evt) {
      evt.preventDefault();
      JSON.stringify(this.form);

      if (this.opcija.muskarci == "Mršavljenje") {
        this.rezultat1 =
          (this.form.tezina * 9 +
            this.form.visina * 6.25 -
            this.form.dob * 5 +
            5) *
          1.2;

        if (this.rezultat1 < 500 || this.rezultat1 > 6000) {
          return (this.feedback = "Krivo uneseni podaci, pokušajte ponovno");
        } else {
          this.feedback = "";
        }
      }

      if (this.opcija.muskarci == "Teretana") {
        this.rezultat2 =
          (this.form.tezina * 10 +
            this.form.visina * 6.25 -
            this.form.dob * 5 +
            5) *
          1.9;

        if (this.rezultat2 < 500 || this.rezultat2 > 6000) {
          return (this.feedback = "Krivo uneseni podaci, pokušajte ponovno");
        } else {
          this.feedback = "";
        }
      }
    },

    spremi() {
      if (this.opcija.muskarci == "Mršavljenje") {
        let NewSpremiPojedinacnoMuskiM = {
          spolMuski: this.spol.muskarci,
          ciljMuski: this.spol.aktivnost_m,
          kalorijeMuski: this.rezultat1,
        };
        console.log("mrsavljenje", NewSpremiPojedinacnoMuskiM);

        Service.patch(
          `/pojedinacniPlan/${this.auth.userEmail}`,
          NewSpremiPojedinacnoMuskiM
        ).then((result) => {
          console.log(result);
        });
        this.feedback = "Uspješno spremljeno";
      } else if (this.opcija.muskarci == "Teretana") {
        let NewSpremiPojedinacnoMuskiT = {
          spolMuski: this.spol.muskarci,
          ciljMuski: this.spol.aktivnost_t,
          kalorijeMuski: this.rezultat2,
        };
        console.log("teretana", NewSpremiPojedinacnoMuskiT);

        Service.patch(
          `/pojedinacniPlan/${this.auth.userEmail}`,
          NewSpremiPojedinacnoMuskiT
        ).then((result) => {
          console.log(result);
        });
        this.feedback = "Uspješno spremljeno";
      }
    },
  },
};
</script>

<style scoped>
.calorie {
  fill: rgba(196, 196, 196, 1);
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.788));
  overflow: visible;
  border-radius: 25px;
}

#masti {
  fill: rgba(196, 196, 196, 1);
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.788));
  overflow: visible;
  border-radius: 5px;
}
</style>
