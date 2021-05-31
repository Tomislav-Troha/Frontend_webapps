<template>
  <div
    class="calorie p-4 mx-auto mt-5   w-75  w-75   "
    style="background-color: #f8f8f8; !important;  "
  >
    <div>
      <b-card-group deck class="text-center">
        <b-card
          class="mt-4 "
          style="border-radius:22px;"
          header-tag="header"
          footer="Odaberite svoj tjedni plan za cijelu obitelj"
          footer-tag="footer"
          title="Obiteljski plan"
        >
          <router-link to="/Obiteljski_plan"
            ><mdb-btn
              gradient="blue"
              rounded
              size="lg"
              class="mt-5 "
              style=" width:150px; font-family:Segoe UI; color:white; border-radius:30px;"
              >GO</mdb-btn
            ></router-link
          >
        </b-card>

        <b-card
          class="mt-4"
          title="Pojedinačni plan"
          header-tag="header"
          footer-tag="footer"
          style="border-radius:22px;"
        >
          <router-link to="/Pojedinacni_plan">
            <mdb-btn
              gradient="blue"
              rounded
              size="lg"
              class="mt-5 "
              style=" width:150px; font-family:Segoe UI; color:white; border-radius:30px;"
              >GO</mdb-btn
            ></router-link
          >
          <template #footer>
            <b-card-text>Ustanovite svoj plan prema spolu i cilju</b-card-text>
          </template>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.calorie {
  fill: rgba(196, 196, 196, 1);
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.788));
  overflow: visible;
  border-radius: 8px;
}
</style>
