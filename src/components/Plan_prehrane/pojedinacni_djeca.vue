<template>
  <div>
    <div
      class="calorie p-4 mx-auto mt-5 fadeInDown   text-center"
      style="max-width:744px; background-color: #f8f8f8; !important;  "
    >
      <h1 style="font-family:Segoe UI">Djeca</h1>

      <h3 class="mt-5" style="font-family:Segoe UI">
        Odaberite jednu od opcija
      </h3>

      <b-form class="mx-4 ">
        <b-input-group class=" mx-auto my-4 " style="max-width:182px;">
          <b-form-select
            id="input-1"
            v-model="opcija.djeca"
            :options="djeca"
            required
          >
          </b-form-select>
        </b-input-group>
      </b-form>
    </div>

    <div
      v-if="
        opcija.djeca == '1 - 3' ||
          opcija.djeca == '4 - 7' ||
          opcija.djeca == '8 - 12'
      "
      class="calorie p-4 mx-auto mt-5 rounded-lg  text-center"
      style="max-width:744px; background-color: #f8f8f8; !important;  "
    >
      <h5 v-if="opcija.djeca == '1 - 3'">
        Odabrali ste prehranu za djecu od 1-3 godine i odaberite si jelovnik:
      </h5>
      <h5 v-if="opcija.djeca == '4 - 7'">
        Odabrali ste prehranu za djecu od 4-7 godine i odaberite si jelovnik:
      </h5>

      <h5 v-if="opcija.djeca == '8 - 12'">
        Odabrali ste prehranu za djecu od 8-12 godine i odaberite si jelovnik:
      </h5>

      <b-card
        v-if="opcija.djeca == '1 - 3' || opcija.djeca == '4 - 7'"
        class="text-left mx-auto "
        style="background-color:#F8F8F8;"
      >
        <b-form class="text-left">
          <b-form-group
            id="fieldset-horizontal"
            label="Doručak ="
            label-for="input-horizontal"
            label-cols-sm="2"
            label-cols-lg="2"
            content-cols-sm
            content-cols-lg="4"
          >
            <b-form-select
              id="input-1"
              v-model="hrana.dorucak13"
              :options="dorucak13"
            >
            </b-form-select>
          </b-form-group>

          <b-form-group
            id="fieldset-horizontal"
            label="Ručak ="
            label-for="input-horizontal"
            label-cols-sm="2"
            label-cols-lg="2"
            content-cols-sm
            content-cols-lg="4"
          >
            <b-form-select
              id="input-1"
              v-model="hrana.rucak13"
              :options="rucak13"
            >
            </b-form-select>
          </b-form-group>

          <b-form-group
            id="fieldset-horizontal"
            label="Večera ="
            label-for="input-horizontal"
            label-cols-sm="2"
            label-cols-lg="2"
            content-cols-sm
            content-cols-lg="4"
          >
            <b-form-select
              id="input-1"
              v-model="hrana.vecera13"
              :options="vecera13"
            >
            </b-form-select>
          </b-form-group>
        </b-form>
      </b-card>

      <b-card
        v-if="opcija.djeca == '8 - 12'"
        class="text-left mx-auto "
        style="background-color:#F8F8F8;"
      >
        <b-form class="text-left">
          <b-form-group
            id="fieldset-horizontal"
            label="Doručak ="
            label-for="input-horizontal"
            label-cols-sm="2"
            label-cols-lg="2"
            content-cols-sm
            content-cols-lg="4"
          >
            <b-form-select
              id="input-1"
              v-model="hrana.dorucak812"
              :options="dorucak812"
            >
            </b-form-select>
          </b-form-group>

          <b-form-group
            id="fieldset-horizontal"
            label="Ručak ="
            label-for="input-horizontal"
            label-cols-sm="2"
            label-cols-lg="2"
            content-cols-sm
            content-cols-lg="4"
          >
            <b-form-select
              id="input-1"
              v-model="hrana.rucak812"
              :options="rucak812"
            >
            </b-form-select>
          </b-form-group>

          <b-form-group
            id="fieldset-horizontal"
            label="Večera ="
            label-for="input-horizontal"
            label-cols-sm="2"
            label-cols-lg="2"
            content-cols-sm
            content-cols-lg="4"
          >
            <b-form-select
              id="input-1"
              v-model="hrana.vecera812"
              :options="vecera812"
            >
            </b-form-select>
          </b-form-group>
        </b-form>
      </b-card>

      <b-button
        class="mt-4"
        variant=" background-color:#30CFC0; !important; font-family:Segoe UI; "
        style="width:150px; font-family:Segoe UI; color:white; border-radius:20px; ; background-color:#30CFC0; !important;"
        @click="spremi"
        >Spremi</b-button
      >

      <span
        ><p style="font-size:25px; color:red;">{{ feedback }}</p></span
      >

      <h5 class="mt-4">
        <router-link to="/Kalkulator_kalorija"
          ><span style="color:blue;">Ovdje</span></router-link
        >
        pogledajte koliko vaša hrana ima kalorija
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

      rezultat1: 0,
      rezultat2: 0,
      rezultat3: 0,
      rezultat4: 0,
      rezultat5: 0,

      feedback: "",

      spol: {
        djeca: "Djeca",
        aktivnost_1: "1 - 3",
        aktivnost_2: "4 - 7",
        aktivnost_3: "8 - 12",
      },

      opcija: {
        zene: null,
        muskarci: null,
        djeca: null,
      },

      hrana: {
        dorucak13: null,
        rucak13: null,
        vecera13: null,
        dorucak812: null,
        rucak812: null,
        vecera812: null,
      },

      dorucak13: [
        { text: "-- Doručak --", value: null },
        "Čokolino",
        "Grizolino",
        "Mozzarela",
        "Mlijeko",
        "Griz",
        "Frutek",
      ],
      rucak13: [
        { text: "-- Ručak --", value: null },
        "Tjestenina sa jajima",
        "Žitne pahuljice",
        "Piletina",
        "Puretina",
        "Juha",
        "Varivo",
      ],
      vecera13: [
        { text: "-- Večera --", value: null },
        "Dvopek",
        "Kolač",
        "Sirovo povrće",
        "Voćna salata",
        "Kompot",
        "Sviježi sir",
      ],

      dorucak812: [
        { text: "-- Doručak --", value: null },
        "Čokolino",
        "Grizolino",
        "Mozzarela",
        "Griz",
        "Pahuljice",
        "Jaja",
        "Hrenovke",
        "Sirni namaz",
      ],
      rucak812: [
        { text: "-- Ručak --", value: null },
        "Tjestenina sa jajima",
        "Piletina",
        "Puretina",
        "Juha",
        "Varivo",
        "Roštilj",
        "Riba",
        "Gulaš",
      ],
      vecera812: [
        { text: "-- Večera --", value: null },
        "Dvopek",
        "Kolač",
        "Sirovo povrće",
        "Voćna salata",
        "Kompot",
        "Sviježi sir",
        "Chees",
        "Pizza",
      ],

      djeca: [
        { text: "-- Odaberite godine --", value: null },
        "1 - 3",
        "4 - 7",
        "8 - 12",
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
    spremi() {
      if (this.opcija.djeca == "1 - 3") {
        let NewSpremiDjeca13 = {
          godina: this.opcija.djeca,
          dorucak: this.hrana.dorucak13,
          rucak: this.hrana.rucak13,
          vecera: this.hrana.vecera13,
        };
        console.log("Djeca", NewSpremiDjeca13);

        Service.patch(
          `/pojedinacniPlan/${this.auth.userEmail}`,
          NewSpremiDjeca13
        ).then((result) => {
          console.log(result);
        });
        this.feedback = "Uspješno spremljeno";
      } else if (this.opcija.djeca == "4 - 7") {
        let NewSpremiDjeca18 = {
          godina: this.opcija.djeca,
          dorucak: this.hrana.dorucak13,
          rucak: this.hrana.rucak13,
          vecera: this.hrana.vecera13,
        };
        console.log("Djeca", NewSpremiDjeca18);

        Service.patch(
          `/pojedinacniPlan/${this.auth.userEmail}`,
          NewSpremiDjeca18
        ).then((result) => {
          console.log(result);
        });
        this.feedback = "Uspješno spremljeno";
      } else if (this.opcija.djeca == "8 - 12") {
        let NewSpremiDjeca812 = {
          godina: this.opcija.djeca,
          dorucak: this.hrana.dorucak812,
          rucak: this.hrana.rucak812,
          vecera: this.hrana.vecera812,
        };
        console.log("Djeca", NewSpremiDjeca812);

        Service.patch(
          `/pojedinacniPlan/${this.auth.userEmail}`,
          NewSpremiDjeca812
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
