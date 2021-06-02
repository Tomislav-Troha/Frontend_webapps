<template>
  <div class="sivo mx-auto mt-5">
    <br /><br />
    <b-card-group
      style="max-width:1600px;"
      deck
      class="zeleno text-center mx-auto "
    >
      <b-card class="mt-5 zeleno mx-2">
        <h2 style=" color:black; height:80px;">
          Kalorijska vrijednost namirnica
        </h2>

        <router-link to="/Kalkulator_kalorija">
          <mdb-btn
            outline="info"
            darkWaves
            rounded
            class="mt-5 "
            size="lg"
            ref="show"
            variant="border-radius:40px; ; background-color:#30CFC0; !important;"
            style="font-family:Segoe UI; color:white; border-radius:40px; ; background-color:#30CFC0; !important;"
          >
            Računaj
          </mdb-btn></router-link
        >

        <template #footer>
          <b-card-text class="py-1" style="color:black;"
            >Izračunajte kalorije pojedinih namirnica ili čitavog
            obroka.Planirajte obroke na osnovu kalorija.
          </b-card-text>
        </template>
      </b-card>

      <b-card class="mt-5 zeleno mx-2">
        <h2 style="color:black; height:80px;">
          Plan prehrane
        </h2>

        <router-link to="/Plan_prehrane_home"
          ><mdb-btn
            outline="info"
            darkWaves
            class="mt-5 "
            size="lg"
            ref="show"
            variant="border-radius:40px; ; background-color:#30CFC0; !important;"
            style="font-family:Segoe UI; color:white; border-radius:40px; ; background-color:#30CFC0; !important;"
          >
            Planiraj
          </mdb-btn></router-link
        >

        <template #footer>
          <b-card-text style="color:black;"
            >Izrada plana prehrane u odnosu na spol, dob, zdravstveno stanje i
            tjelesnu aktivnost ili kao cijela obitelj.</b-card-text
          >
        </template>
      </b-card>

      <b-card class="mt-5 zeleno mx-2">
        <h2 style=" color:black; height:80px;">
          Vaše stanje
        </h2>

        <router-link to="/TvojeStanje_home">
          <mdb-btn
            outline="info"
            darkWaves
            class="mt-5 "
            size="lg"
            ref="show"
            variant="border-radius:40px; ; background-color:#30CFC0; !important;"
            style="font-family:Segoe UI; color:white; border-radius:40px; ; background-color:#30CFC0; !important;"
          >
            Razmatraj
          </mdb-btn>
        </router-link>

        <template #footer>
          <b-card-text style="color:black;"
            >Pogledajte vaš prehrambeni plan i izračunajte kako napredujete u
            vašem cilju.</b-card-text
          >
        </template>
      </b-card>
    </b-card-group>

    <br /><br /><br /><br /><br /><br /><br />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped>
.sivo {
  background-color: #f8f8f8;

  fill: rgba(196, 196, 196, 1);
  filter: drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.788));
  overflow: visible;
  border-radius: 8px;
  max-width: 1700px;
}

.zeleno {
  filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.09));
}
</style>
