<template>
  <div class="mt-5">
    <b-card-group deck class="zeleno fadeInDown mx-auto">
      <b-form class="mx-auto neku px-3 my-3  ">
        <h3 class="text-center pb-4">Žene</h3>
        <b-form-group class="mx-auto my-4" label="Spol">
          <b-form
            class="form-control text-center mx-auto"
            style="width:300px; max-width:100%;"
          >
            {{ zeneSpol.spolZene }}
          </b-form>
        </b-form-group>

        <b-form-group class="mx-auto my-4" label="Cilj:">
          <b-form
            class="form-control text-center mx-auto"
            style="width:300px; max-width:100%;"
          >
            {{ zeneSpol.ciljZene }}
          </b-form>
        </b-form-group>

        <b-form-group class="mx-auto my-4" label="Dnevni unos kalorija:">
          <b-form
            class="form-control text-center mx-auto"
            style="width:300px; max-width:100%;"
          >
            {{ zeneSpol.kalorijeZene }} kcal
          </b-form>
        </b-form-group>
      </b-form>

      <b-form class="mx-auto neku px-3 my-3">
        <h3 class="text-center pb-4">Muškarci</h3>
        <b-form-group class="mx-auto my-4" label="Spol">
          <b-form
            class="form-control text-center mx-auto"
            style="width:300px; max-width:100%;"
          >
            {{ muskiSpol.spolMuski }}
          </b-form>
        </b-form-group>

        <b-form-group class="mx-auto my-4" label="Cilj">
          <b-form
            class="form-control text-center mx-auto"
            style="width:300px; max-width:100%;"
          >
            {{ muskiSpol.ciljMuski }}
          </b-form>
        </b-form-group>

        <b-form-group class="mx-auto my-4" label="Dnevni unos kalorija:">
          <b-form
            class="form-control text-center mx-auto"
            style="width:300px; max-width:100%;"
          >
            {{ muskiSpol.kalorijeMuski }} kcal
          </b-form>
        </b-form-group>
      </b-form>

      <b-form class="mx-auto neku px-3 my-3 ">
        <h3 class="text-center pb-4">Djeca {{ djeca.godina }}</h3>
        <b-form-group class="mx-auto my-4" label="Doručak">
          <b-form
            class="form-control text-center mx-auto"
            style="width:300px; max-width:100%;"
            >{{ djeca.dorucak }}
          </b-form>
        </b-form-group>
        <b-form-group class="mx-auto my-4" label="Ručak">
          <b-form
            class="form-control text-center mx-auto"
            style="width:300px; max-width:100%;"
            >{{ djeca.rucak }}
          </b-form>
        </b-form-group>

        <b-form-group class="mx-auto my-4" label="Večera">
          <b-form
            class="form-control text-center mx-auto"
            style="width:300px; max-width:100%;"
            >{{ djeca.vecera }}
          </b-form>
        </b-form-group>
      </b-form>
    </b-card-group>
  </div>
</template>

<script>
import { PojedinacniPlan } from "@/services";
import { Auth } from "@/services";

export default {
  data() {
    return {
      auth: Auth.state,

      dorucak: null,
      rucak: null,
      vecera: null,

      zeneSpol: "",
      muskiSpol: "",
      djeca: "",
    };
  },

  created() {
    this.pozoviBackend();
  },

  methods: {
    async pozoviBackend() {
      this.zeneSpol = await PojedinacniPlan.getOne(this.auth.userEmail);
      this.muskiSpol = await PojedinacniPlan.getOne(this.auth.userEmail);
      this.djeca = await PojedinacniPlan.getOne(this.auth.userEmail);
    },
  },
};
</script>

<style scoped>
.pojplan {
  border-radius: 20px;
  background-color: white !important;
}

.zeleno {
  background-color: #f8f8f8;

  fill: rgba(196, 196, 196, 1);
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.788));
  overflow: visible;
  border-radius: 20px;
  max-width: 1300px;
}

.neku {
  background-color: #97ddf7;
  fill: rgba(196, 196, 196, 1);
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.788));
  overflow: visible;
  border-radius: 20px;
  max-width: 300px;
}

.form-control {
  background-color: #f8f8f8;
}
</style>
