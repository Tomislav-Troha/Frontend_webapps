<template>
  <div
    class="calorie  p-4 mx-auto mt-5 rounded-lg  w-75 fadeInDown   "
    style="background-color: #f8f8f8; !important;  "
  >
    <h1 class="text-center mb-5 ">Obiteljski plan</h1>

    <b-form inline class="mx-4">
      <b-form-group class=" mx-auto my-4" label="Dan">
        <b-form-input
          class="text-center"
          style="background-color:#30CFC0; width:200px; max-width:100%;"
          id="input-1"
          v-model="dani.ponedjeljak"
          disabled
        >
        </b-form-input>
      </b-form-group>

      <b-form-group class="mx-auto my-4" label="Doručak">
        <b-form
          class="form-control text-center mx-auto"
          style="width:300px; min-height:38px; max-width:100%;"
        >
          {{ Ponedjeljakdorucak.Pdorucak }}
        </b-form>
      </b-form-group>

      <b-form-group class="mx-auto my-4" label="Ručak">
        <b-form
          class="form-control text-center mx-auto"
          style="width:300px; min-height:38px; max-width:100%;"
        >
          {{ Ponedjeljakdorucak.Prucak }}
        </b-form>
      </b-form-group>

      <b-form-group class="mx-auto my-4" label="Večera">
        <b-form
          class="form-control text-center mx-auto"
          style="width:300px; min-height:38px;  max-width:100%;"
        >
          {{ Ponedjeljakdorucak.Pvecera }}
        </b-form>
      </b-form-group>
    </b-form>

    <b-form inline class="mx-4">
      <b-form-group class=" mx-auto my-4" label="Dan">
        <b-form-input
          class="text-center"
          style="background-color:#30CFC0; max-width:200px;"
          id="input-1"
          v-model="dani.utorak"
          disabled
        >
        </b-form-input>
      </b-form-group>

      <b-form-group class="mx-auto my-4" label="Doručak">
        <b-form
          class="form-control text-center mx-auto"
          style="width:300px; min-height:38px; max-width:100%; height:auto;"
        >
          {{ Utorakdorucak.Udorucak }}
        </b-form>
      </b-form-group>

      <b-form-group class="mx-auto my-4" label="Ručak">
        <b-form
          class="form-control text-center mx-auto"
          style="width:300px; min-height:38px; max-width:100%; height:auto;"
        >
          {{ Utorakdorucak.Urucak }}
        </b-form>
      </b-form-group>

      <b-form-group class="mx-auto my-4" label="Večera">
        <b-form
          class="form-control text-center mx-auto"
          style="width:300px; min-height:38px; max-width:100%; height:auto;"
        >
          {{ Utorakdorucak.Uvecera }}
        </b-form>
      </b-form-group>
    </b-form>

    <b-form inline class="mx-4">
      <b-form-group class=" mx-auto my-4" label="Dan">
        <b-form-input
          class="text-center"
          style="background-color:#30CFC0; max-width:200px;"
          id="input-1"
          v-model="dani.srijeda"
          disabled
        >
        </b-form-input>
      </b-form-group>

      <b-form-group class="mx-auto my-4" label="Doručak">
        <b-form
          class="form-control text-center mx-auto"
          style="width:300px; min-height:38px; max-width:100%; height:auto;"
        >
          {{ Srijedadorucak.Sdorucak }}
        </b-form>
      </b-form-group>

      <b-form-group class="mx-auto my-4" label="Ručak">
        <b-form
          class="form-control text-center mx-auto"
          style="width:300px; min-height:38px; max-width:100%; height:auto;"
        >
          {{ Srijedadorucak.Srucak }}
        </b-form>
      </b-form-group>

      <b-form-group class="mx-auto my-4" label="Večera">
        <b-form
          class="form-control text-center mx-auto"
          style="width:300px; min-height:38px; max-width:100%; height:auto;"
        >
          {{ Srijedadorucak.Svecera }}
        </b-form>
      </b-form-group>
    </b-form>

    <b-form inline class="mx-4">
      <b-form-group class=" mx-auto my-4" label="Dan">
        <b-form-input
          class="text-center"
          style="background-color:#30CFC0; max-width:200px;"
          id="input-1"
          v-model="dani.cetvrtak"
          disabled
        >
        </b-form-input>
      </b-form-group>

      <b-form-group class="mx-auto my-4" label="Doručak">
        <b-form
          class="form-control text-center mx-auto"
          style="width:300px; min-height:38px; max-width:100%; height:auto;"
        >
          {{ Cetvrtakdorucak.Cdorucak }}
        </b-form>
      </b-form-group>

      <b-form-group class="mx-auto my-4" label="Ručak">
        <b-form
          class="form-control text-center mx-auto"
          style="width:300px; min-height:38px; max-width:100%; height:auto;"
        >
          {{ Cetvrtakdorucak.Crucak }}
        </b-form>
      </b-form-group>

      <b-form-group class="mx-auto my-4" label="Večera">
        <b-form
          class="form-control text-center mx-auto"
          style="width:300px; min-height:38px; max-width:100%;  height:auto;"
        >
          {{ Cetvrtakdorucak.Cvecera }}
        </b-form>
      </b-form-group>
    </b-form>

    <b-form inline class="mx-4">
      <b-form-group class=" mx-auto my-4" label="Dan">
        <b-form-input
          class="text-center"
          style="background-color:#30CFC0; max-width:200px;"
          id="input-1"
          v-model="dani.petak"
          disabled
        >
        </b-form-input>
      </b-form-group>

      <b-form-group class="mx-auto my-4" label="Doručak">
        <b-form
          class="form-control text-center mx-auto"
          style="width:300px; min-height:38px; max-width:100%; height:auto;"
        >
          {{ Petakdorucak.PEdorucak }}
        </b-form>
      </b-form-group>

      <b-form-group class="mx-auto my-4" label="Ručak">
        <b-form
          class="form-control text-center mx-auto"
          style="width:300px; min-height:38px; max-width:100%; height:auto;"
        >
          {{ Petakdorucak.PErucak }}
        </b-form>
      </b-form-group>

      <b-form-group class="mx-auto my-4" label="Večera">
        <b-form
          class="form-control text-center mx-auto"
          style="width:300px; min-height:38px; max-width:100%; height:auto;"
        >
          {{ Petakdorucak.PEvecera }}
        </b-form>
      </b-form-group>
    </b-form>

    <b-form inline class="mx-4">
      <b-form-group class=" mx-auto my-4" label="Dan">
        <b-form-input
          class="text-center"
          style="background-color:#30CFC0; max-width:200px;"
          id="input-1"
          v-model="dani.subota"
          disabled
        >
        </b-form-input>
      </b-form-group>

      <b-form-group class="mx-auto my-4" label="Doručak">
        <b-form
          class="form-control text-center mx-auto"
          style="width:300px; min-height:38px; max-width:100%; height:auto;"
        >
          {{ Subotadorucak.SUdorucak }}
        </b-form>
      </b-form-group>

      <b-form-group class="mx-auto my-4" label="Ručak">
        <b-form
          class="form-control text-center mx-auto"
          style="width:300px; min-height:38px; max-width:100%; height:auto;"
        >
          {{ Subotadorucak.SUrucak }}
        </b-form>
      </b-form-group>

      <b-form-group class="mx-auto my-4" label="Večera">
        <b-form
          class="form-control text-center mx-auto"
          style="width:300px; min-height:38px; max-width:100%; height:auto;"
        >
          {{ Subotadorucak.SUvecera }}
        </b-form>
      </b-form-group>
    </b-form>

    <b-form inline class="mx-4">
      <b-form-group class=" mx-auto my-4" label="Dan">
        <b-form-input
          class="text-center"
          style="background-color:#30CFC0; max-width:200px;"
          id="input-1"
          v-model="dani.nedjelja"
          disabled
        >
        </b-form-input>
      </b-form-group>

      <b-form-group class="mx-auto my-4" label="Doručak">
        <b-form
          class="form-control text-center mx-auto"
          style="width:300px; min-height:38px; max-width:100%; height:auto;"
        >
          {{ Nedjeljadorucak.Ndorucak }}
        </b-form>
      </b-form-group>

      <b-form-group class="mx-auto my-4" label="Ručak">
        <b-form
          class="form-control text-center mx-auto"
          style="width:300px; min-height:38px; max-width:100%; height:auto;"
        >
          {{ Nedjeljadorucak.Nrucak }}
        </b-form>
      </b-form-group>

      <b-form-group class="mx-auto my-4" label="Večera">
        <b-form
          class="form-control text-center mx-auto"
          style="width:300px; max-width:100%; min-height:38px; height:auto;"
        >
          {{ Nedjeljadorucak.Nvecera }}
        </b-form>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import { NadipoId } from "@/services";
import { Auth } from "@/services";

export default {
  data() {
    return {
      ponDorucak: null,

      auth: Auth.state,

      dani: {
        ponedjeljak: "Ponedjeljak",
        utorak: "Utorak",
        srijeda: "Srijeda",
        cetvrtak: "Četvrtak",
        petak: "Petak",
        subota: "Subota",
        nedjelja: "Nedjelja",
      },

      Ponedjeljakdorucak: {},

      Utorakdorucak: {},

      Srijedadorucak: {},

      Cetvrtakdorucak: {},

      Petakdorucak: {},

      Subotadorucak: {},

      Nedjeljadorucak: {},
    };
  },
  created() {
    this.pozoviBackend();
  },

  methods: {
    async pozoviBackend() {
      this.Ponedjeljakdorucak = await NadipoId.getOne(this.auth.userEmail);

      this.Utorakdorucak = await NadipoId.getOne(this.auth.userEmail);

      this.Srijedadorucak = await NadipoId.getOne(this.auth.userEmail);

      this.Cetvrtakdorucak = await NadipoId.getOne(this.auth.userEmail);

      this.Petakdorucak = await NadipoId.getOne(this.auth.userEmail);

      this.Subotadorucak = await NadipoId.getOne(this.auth.userEmail);

      this.Nedjeljadorucak = await NadipoId.getOne(this.auth.userEmail);
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
</style>
