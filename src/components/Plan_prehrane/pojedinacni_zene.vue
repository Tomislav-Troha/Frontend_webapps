<template>
  <div>
    <div
      class="calorie p-4 mx-auto mt-5 fadeInDown  text-center"
      style="max-width:744px; background-color: #f8f8f8; !important;  "
    >
      <h1 style="font-family:Segoe UI">Žene</h1>

      <h3 class="mt-5" style="font-family:Segoe UI">
        Odaberite jednu od opcija
      </h3>

      <b-form class="mx-4 ">
        <b-input-group class=" mx-auto my-4 " style="max-width:182px;">
          <b-form-select
            id="input-1"
            v-model="opcija.zene"
            :options="zene"
            required
          >
          </b-form-select>
        </b-input-group>
      </b-form>
    </div>

    <div
      v-if="
        opcija.zene == 'Mršavljenje' ||
          opcija.zene == 'Fitness' ||
          opcija.zene == 'Trudnice'
      "
      class="calorie p-4 mx-auto mt-5 rounded-lg  text-center"
      style="max-width:744px; background-color: #f8f8f8; !important;  "
    >
      <h5 v-if="opcija.zene == 'Mršavljenje'">
        Odabrali ste opciju mršavljenje,<br />izračunajte svoju dnevnu
        kalorijsku vrijednosti koju morate ispuniti za vaš cilj.
      </h5>

      <h5 v-if="opcija.zene == 'Fitness'">
        Odabrali ste opciju fitness,<br />
        izračunajte svoju dnevnu kalorijsku vrijednosti koju morate ispuniti za
        vaš cilj.
      </h5>

      <h5 v-if="opcija.zene == 'Trudnice'">
        Odabrali ste opciju za trudnice,<br />
        izračunajte svoju dnevnu kalorijsku vrijednosti koju morate ispuniti za
        vaš cilj.
      </h5>

      <div
        class="mt-5 mx-auto p-4"
        style="background-color: #f8f8f8; !important; max-width:450px;"
        id="masti"
      >
        <b-form @submit.prevent="onsubmit" class="text-left">
          <b-form-group id="input-group-1" label="Spol:" label-for="input-1">
            <b-form-input id="input-1" v-model="spol.zene" disabled required>
            </b-form-input>
          </b-form-group>
          <b-form-group id="input-group-1" label="Cilj:" label-for="input-1">
            <b-form-input
              v-if="opcija.zene == 'Mršavljenje'"
              id="input-1"
              disabled
              v-model="spol.aktivnost_m"
              required
            >
            </b-form-input>

            <b-form-input
              v-if="opcija.zene == 'Fitness'"
              id="input-1"
              disabled
              v-model="spol.aktivnost_f"
              required
            >
            </b-form-input>

            <b-form-input
              v-if="opcija.zene == 'Trudnice'"
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
            class=""
            type="submit"
            size="lg"
            variant=" background-color:#30CFC0; !important; font-family:Segoe UI; "
            style=" font-family:Segoe UI; color:white; border-radius:40px; ; background-color:#30CFC0; !important;"
            >Izračunaj</b-button
          >
        </b-form>
      </div>
    </div>

    <b-form @submit.prevent="spremi">
      <div
        v-if="
          (opcija.zene == 'Mršavljenje' && jeSakriven && rezultat1 !== 0) ||
            (opcija.zene == 'Fitness' && jeSakriven && rezultat2 !== 0) ||
            (opcija.zene == 'Trudnice' && jeSakriven && rezultat3 !== 0)
        "
        class="calorie p-4 mx-auto mt-5 rounded-lg  text-center"
        style="max-width:744px; background-color: #f8f8f8; !important;  "
      >
        <h3
          v-if="
            opcija.zene == 'Mršavljenje' && rezultat1 > 500 && rezultat1 < 6000
          "
        >
          Vaš dnevni unos mora biti {{ rezultat1.toFixed(0) }} kalorija<br />
        </h3>
        <h3
          v-if="opcija.zene == 'Fitness' && rezultat2 > 500 && rezultat2 < 6000"
        >
          Vaš dnevni unos mora biti {{ rezultat2.toFixed(0) }} kalorija<br />
        </h3>
        <h3
          v-if="
            opcija.zene == 'Trudnice' && rezultat3 > 500 && rezultat3 < 6000
          "
        >
          Vaš dnevni unos mora biti {{ rezultat3.toFixed(0) }} kalorija<br />
        </h3>

        <p style="font-size:25px; color:red;">{{ feedback }}</p>

        <b-button
          v-if="
            (rezultat1 > 500 && rezultat1 < 6000) ||
              (rezultat2 > 500 && rezultat2 < 6000) ||
              (rezultat3 > 500 && rezultat3 < 6000)
          "
          type="submit"
          size="lg"
          variant=" background-color:#30CFC0; !important; font-family:Segoe UI; "
          style=" font-family:Segoe UI; color:white; border-radius:40px; ; background-color:#30CFC0; !important;"
          >Spremi</b-button
        >

        <p>{{ spremiFeedback }}</p>

        <h5
          v-if="
            (rezultat1 > 500 && rezultat1 < 6000) ||
              (rezultat2 > 500 && rezultat2 < 6000) ||
              (rezultat3 > 500 && rezultat3 < 6000)
          "
          class="mt-4"
        >
          <router-link to="/Kalkulator_kalorija"
            ><span style="color:blue;">Ovdje</span></router-link
          >
          pogledajte koliko vaša hrana ima kalorija
        </h5>
      </div>
    </b-form>
  </div>
</template>

<script>
import { Service } from "@/services/index.js";
import { Auth } from "@/services";

export default {
  data() {
    return {
      auth: Auth.state,

      feedback: "",
      spremiFeedback: "",

      jeSakriven: false,

      rezultat1: 0,
      rezultat2: 0,
      rezultat3: 0,
      rezultat4: 0,
      rezultat5: 0,

      spol: {
        zene: "Žene",
        aktivnost_m: "Mršavljenje",
        aktivnost_f: "Fitness",
        aktivnost_t: "Trudnice",
      },

      opcija: {
        zene: null,
        muskarci: null,
        djeca: null,
      },

      zene: [
        { text: "-- Odaberite cilj --", value: null },
        "Mršavljenje",
        "Fitness",
        "Trudnice",
      ],

      form: {
        aktivnost_m: null,
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

      if (this.opcija.zene === "Mršavljenje") {
        this.rezultat1 =
          (this.form.tezina * 10 +
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

      if (this.opcija.zene == "Fitness") {
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

      if (this.opcija.zene == "Trudnice") {
        this.rezultat3 =
          (this.form.tezina * 9 +
            this.form.visina * 5.5 -
            this.form.dob * 5 +
            5) *
          1.2;

        if (this.rezultat3 < 500 || this.rezultat3 > 6000) {
          return (this.feedback = "Krivo uneseni podaci, pokušajte ponovno");
        } else {
          this.feedback = "";
        }
      }
    },

    spremi() {
      if (this.spol.zene) {
        this.spremiFeedback = "Uspjesno spremljeno";

        if (this.opcija.zene === "Mršavljenje") {
          let NewSpremiPojedinacnoZeneM = {
            spolZene: this.spol.zene,
            ciljZene: this.spol.aktivnost_m,
            kalorijeZene: this.rezultat1,
          };

          Service.patch(
            `/pojedinacniPlan/${this.auth.userEmail}`,
            NewSpremiPojedinacnoZeneM
          )
          .then((result) => {
            console.log(result);
          });
        } else if (this.opcija.zene === "Fitness") {
          let NewSpremiPojedinacnoZeneMF = {
            spolZene: this.spol.zene,
            ciljZene: this.spol.aktivnost_f,
            kalorijeZene: this.rezultat2,
          };

          Service.patch(
            `/pojedinacniPlan/${this.auth.userEmail}`,
            NewSpremiPojedinacnoZeneMF
          )
          .then((result) => {
            console.log(result);
          });
        } else if (this.opcija.zene === "Trudnice") {
          let NewSpremiPojedinacnoZeneMT = {
            spolZene: this.spol.zene,
            ciljZene: this.spol.aktivnost_t,
            kalorijeZene: this.rezultat3,
          };

          Service.patch(
            `/pojedinacniPlan/${this.auth.userEmail}`,
            NewSpremiPojedinacnoZeneMT
          )
          .then((result) => {
            console.log(result);
          });
        }
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
