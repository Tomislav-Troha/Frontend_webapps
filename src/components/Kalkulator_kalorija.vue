<template>
  <div
    @submit.prevent="onsubmit"
    class="calorie  p-4 mx-auto mt-5 rounded-lg  w-75  "
    style="background-color: #f8f8f8; !important;  "
  >
    <h1 class="text-center mb-5 ">Kalkulator kalorija obroka</h1>

    <b-form inline class="mx-4 ">
      <b-form-group class=" mx-auto my-4 " label="Meso:">
        <b-form-select
          class="form-control tamnije"
          style="width:220px; max-width:100%;"
          v-model="odabranoMeso"
          :options="placeholderMeso"
        >
          <option
            v-for="meso in meso"
            v-bind:value="meso.kolicina"
            v-bind:key="meso.id"
            >{{ meso.Vrsta_mesa }}</option
          >
        </b-form-select>
      </b-form-group>

      <b-form-group class="mx-auto my-4" label="Broj kalorija: ">
        <b-form class="form-control" style="width:200px; max-width:100%;">
          <span>{{ odabranoMeso }} kcal</span>
        </b-form>
      </b-form-group>

      <b-form-group class="mx-auto my-4" label="Broj porcija: ">
        <b-form-input
          style="width:200px;"
          type="number"
          v-model="multiplajerMeso"
          placeholder="Broj porcija"
        ></b-form-input>
      </b-form-group>

      <b-form-group class="mx-auto my-4" label="Ukupno kalorija: ">
        <b-form
          class="form-control ukupnoBoja"
          style="width:200px; max-width:100%;"
        >
          <span>{{ odabranoMeso * multiplajerMeso }} kcal</span>
        </b-form>
      </b-form-group>
    </b-form>

    <b-form inline class="mx-4">
      <b-input-group
        class=" mx-auto my-4 "
        style="width:220px; max-width:100%;"
      >
        <b-form-select
          class="form-control tamnije"
          v-model="odabranoKruh"
          :options="placeholderKruh"
        >
          <option
            v-for="kruh in kruh"
            v-bind:value="kruh.kolicina"
            v-bind:key="kruh.id"
            >{{ kruh.Vrsta_kruha }}</option
          >
        </b-form-select>
      </b-input-group>

      <b-input-group class="mx-auto my-4 " style="width:200px; max-width:100%;">
        <b-form class="form-control" style="width:200px; max-width:100%;">
          <span>{{ odabranoKruh }} kcal</span>
        </b-form>
      </b-input-group>

      <b-input-group class="mx-auto my-4 " style="width:200px; max-width:100%;">
        <b-form-input
          type="number"
          v-model="multiplajerKruh"
          placeholder="Broj porcija"
        ></b-form-input>
      </b-input-group>

      <b-input-group class="mx-auto my-4" style="width:200px; max-width:100%;">
        <b-form
          class="form-control ukupnoBoja"
          style="width:200px; max-width:100%;"
        >
          <span>{{ odabranoKruh * multiplajerKruh }} kcal</span>
        </b-form>
      </b-input-group>
    </b-form>

    <b-form inline class="mx-4">
      <b-input-group
        class=" mx-auto my-4 "
        style="width:220px; max-width:100%;"
      >
        <b-form-select
          class="form-control tamnije"
          v-model="odabranoRiba"
          :options="placeholderRiba"
        >
          <option
            v-for="ribe in ribe"
            v-bind:value="ribe.kolicina"
            v-bind:key="ribe.id"
            >{{ ribe.Vrsta_ribe }}</option
          >
        </b-form-select>
      </b-input-group>

      <b-input-group class="mx-auto my-4" style="width:200px; max-width:100%;">
        <b-form class="form-control" style="width:200px; max-width:100%;">
          <span>{{ odabranoRiba }} kcal</span>
        </b-form>
      </b-input-group>

      <b-input-group class="mx-auto my-4" style="width:200px; max-width:100%;">
        <b-form-input
          type="number"
          v-model="multiplajerRiba"
          placeholder="Broj porcija"
        ></b-form-input>
      </b-input-group>

      <b-input-group class="mx-auto my-4" style="width:200px; max-width:100%;">
        <b-form
          class="form-control ukupnoBoja"
          style="width:200px; max-width:100%;"
        >
          <span>{{ odabranoRiba * multiplajerRiba }} kcal</span>
        </b-form>
      </b-input-group>
    </b-form>

    <b-form inline class="mx-4 ">
      <b-input-group
        class=" mx-auto my-4 "
        style="width:220px; max-width:100%;"
      >
        <b-form-select
          class="form-control tamnije"
          v-model="odabranoBH"
          :options="placeholderBH"
        >
          <option
            v-for="brza_hrana in brza_hrana"
            v-bind:value="brza_hrana.kolicina"
            v-bind:key="brza_hrana.id"
            >{{ brza_hrana.Vrsta_BH }}</option
          >
        </b-form-select>
      </b-input-group>

      <b-input-group class="mx-auto my-4" style="width:200px; max-width:100%;">
        <b-form class="form-control" style="width:200px; max-width:100%;">
          <span>{{ odabranoBH }} kcal</span>
        </b-form>
      </b-input-group>

      <b-input-group class="mx-auto my-4" style="width:200px; max-width:100%;">
        <b-form-input
          type="number"
          placeholder="Broj porcija"
          v-model="multiplajerBH"
        ></b-form-input>
      </b-input-group>

      <b-input-group class="mx-auto my-4" style="width:200px; max-width:100%;">
        <b-form
          class="form-control ukupnoBoja"
          style="width:200px; max-width:100%;"
          disabled
        >
          <span>{{ odabranoBH * multiplajerBH }} kcal</span>
        </b-form>
      </b-input-group>
    </b-form>

    <b-form inline class="mx-4">
      <b-input-group
        class=" mx-auto my-4 "
        style="width:220px; max-width:100%;"
      >
        <b-form-select
          class="form-control tamnije"
          v-model="odabranoVoce"
          :options="placeholderVoce"
        >
          <option
            v-for="voce in voce"
            v-bind:value="voce.kolicina"
            v-bind:key="voce.id"
            >{{ voce.Vrsta_voca }}</option
          >
        </b-form-select>
      </b-input-group>

      <b-input-group class="mx-auto my-4" style="width:200px; max-width:100%;">
        <b-form class="form-control" style="width:200px; max-width:100%;">
          <span>{{ odabranoVoce }} kcal</span>
        </b-form>
      </b-input-group>

      <b-input-group class="mx-auto my-4" style="width:200px; max-width:100%;">
        <b-form-input
          type="number"
          v-model="multiplajerVoce"
          placeholder="Broj porcija"
        ></b-form-input>
      </b-input-group>

      <b-input-group class="mx-auto my-4" style="width:200px; max-width:100%;">
        <b-form
          class="form-control ukupnoBoja"
          style="width:200px; max-width:100%;"
          disabled
        >
          <span>{{ odabranoVoce * multiplajerVoce }} kcal</span>
        </b-form>
      </b-input-group>
    </b-form>

    <b-form inline class="mx-4">
      <b-input-group
        class=" mx-auto my-4 "
        style="width:220px; max-width:100%;"
      >
        <b-form-select
          class="form-control tamnije"
          v-model="odabranoPovrce"
          :options="placeholderPovrce"
        >
          <option
            v-for="povrce in povrce"
            v-bind:value="povrce.kolicina"
            v-bind:key="povrce.id"
            >{{ povrce.Vrsta_povrca }}</option
          >
        </b-form-select>
      </b-input-group>

      <b-input-group class="mx-auto my-4" style="width:200px; max-width:100%;">
        <b-form class="form-control" style="width:200px; max-width:100%;">
          <span>{{ odabranoPovrce }} kcal</span>
        </b-form>
      </b-input-group>

      <b-input-group class="mx-auto my-4" style="width:200px; max-width:100%;">
        <b-form-input
          type="number"
          v-model="multiplajerPovrce"
          placeholder="Broj porcija"
        ></b-form-input>
      </b-input-group>

      <b-input-group class="mx-auto my-4" style="width:200px; max-width:100%;">
        <b-form
          class="form-control ukupnoBoja"
          style="width:200px; max-width:100%;"
          disabled
        >
          <span>{{ odabranoPovrce * multiplajerPovrce }} kcal</span>
        </b-form>
      </b-input-group>
    </b-form>

    <b-form inline class="mx-4">
      <b-input-group
        class=" mx-auto my-4 "
        style="width:220px; max-width:100%;"
      >
        <b-form-select
          class="form-control tamnije"
          v-model="odabranoMlPro"
          :options="placeholderMlPro"
        >
          <option
            v-for="mlijecni_proizvodi in mlijecni_proizvodi"
            v-bind:value="mlijecni_proizvodi.kolicina"
            v-bind:key="mlijecni_proizvodi.id"
            >{{ mlijecni_proizvodi.Vrsta_MlPro }}
          </option>
        </b-form-select>
      </b-input-group>

      <b-input-group class="mx-auto my-4" style="width:200px; max-width:100%;">
        <b-form class="form-control" style="width:200px; max-width:100%;">
          <span>{{ odabranoMlPro }} kcal</span>
        </b-form>
      </b-input-group>

      <b-input-group class="mx-auto my-4" style="width:200px; max-width:100%;">
        <b-form-input
          type="number"
          v-model="multiplajerMlPro"
          placeholder="Broj porcija"
        ></b-form-input>
      </b-input-group>

      <b-input-group class="mx-auto my-4" style="width:200px; max-width:100%;">
        <b-form
          class="form-control ukupnoBoja"
          style="width:200px; max-width:100%;"
          disabled
        >
          <span>{{ odabranoMlPro * multiplajerMlPro }} kcal</span>
        </b-form>
      </b-input-group>
    </b-form>
    <p></p>

    <hr class="mt-4" />

    <b-form class="mx-5 ">
      <b-form-group class="mx-5 my-5" label="Ukupna vrijednost: ">
        <b-form
          class="form-control text-center py-2 ukupno"
          style="max-width:250px; height:60px;"
        >
          <span style="font-size:25px;"
            >{{
              odabranoMlPro * multiplajerMlPro +
                odabranoPovrce * multiplajerPovrce +
                odabranoVoce * multiplajerVoce +
                odabranoBH * multiplajerBH +
                odabranoRiba * multiplajerRiba +
                odabranoKruh * multiplajerKruh +
                odabranoMeso * multiplajerMeso
            }}
            kcal
          </span>
        </b-form>
      </b-form-group>
    </b-form>

    <div></div>
  </div>
</template>

<script>
import { Meso, Kruh, Ribe, Brza_hrana, Voce, Povrce, MlPro } from "@/services";

export default {
  data() {
    return {
      odabranoMeso: 0,
      odabranoKruh: 0,
      odabranoRiba: 0,
      odabranoBH: 0,
      odabranoVoce: 0,
      odabranoPovrce: 0,
      odabranoMlPro: 0,

      placeholderMeso: [{ value: 0, text: "Meso" }],
      placeholderKruh: [{ value: 0, text: "Kruh" }],
      placeholderRiba: [{ value: 0, text: "Riba" }],
      placeholderBH: [{ value: 0, text: "Brza hrana" }],
      placeholderVoce: [{ value: 0, text: "Voće" }],
      placeholderPovrce: [{ value: 0, text: "Povrće" }],
      placeholderMlPro: [{ value: 0, text: "Mliječni proizovodi" }],

      multiplajerMeso: 1,
      multiplajerRiba: 1,
      multiplajerKruh: 1,
      multiplajerBH: 1,
      multiplajerVoce: 1,
      multiplajerPovrce: 1,
      multiplajerMlPro: 1,

      form: {
        meso: null,
        kruh: null,
        ribe: null,
        brza_hrana: null,
        voce: null,
        povrce: null,
        mlijecni_proizvodi: null,
      },

      meso: {
        type: Array,
        default: () => [],
      },

      kruh: {
        type: Array,
        default: () => [],
      },

      ribe: { type: Array, default: () => [] },

      brza_hrana: { type: Array, default: () => [] },

      voce: { type: Array, default: () => [] },

      povrce: { type: Array, default: () => [] },

      mlijecni_proizvodi: { type: Array, default: () => [] },
    };
  },

  created() {
    this.pozoviBackend();
  },

  methods: {
    async pozoviBackend(term) {
      this.meso = await Meso.getAll(term);
      this.kruh = await Kruh.getAll(term);
      this.ribe = await Ribe.getAll(term);
      this.brza_hrana = await Brza_hrana.getAll(term);
      this.voce = await Voce.getAll(term);
      this.povrce = await Povrce.getAll(term);
      this.mlijecni_proizvodi = await MlPro.getAll(term);
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

.tamnije {
  color: black;
  background-color: #87ceeb;
}

.ukupnoBoja {
  border: 2px solid #87ceeb;
}

.ukupno {
  border: 4px solid #009183;
}
</style>
