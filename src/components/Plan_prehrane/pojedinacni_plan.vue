<template>
  <div class="px-5 py-5 mx-auto calorie" style="max-width:1500px;">
    <b-card-group deck class="text-center rounded-lg">
      <b-card>
        <h1 style="font-family:Script MT;">Žene</h1>

        <router-link to="/Pojedinacni_zene">
          <mdb-btn
            gradient="purple"
            class="mx-auto mt-5"
            size="lg"
            variant="background-color:#30CFC0; !important; font-family:Segoe UI; "
            style="font-family:Segoe UI; color:white; border-radius:40px; ; background-color:#30CFC0; !important;"
            >Odaberi cilj</mdb-btn
          ></router-link
        >
      </b-card>

      <b-card>
        <h1 style="font-family:Script MT;">Muškarci</h1>

        <router-link to="/Pojedinacni_muski"
          ><mdb-btn
            gradient="blue"
            class="mx-auto mt-5"
            size="lg"
            variant="background-color:#30CFC0; !important; font-family:Segoe UI; "
            style="font-family:Segoe UI; color:white; border-radius:40px; ; background-color:#30CFC0; !important;"
            >Odaberi cilj</mdb-btn
          ></router-link
        >
      </b-card>

      <b-card>
        <h1 style="font-family:Script MT;">Djeca</h1>

        <router-link to="/Pojedinacni_djeca"
          ><mdb-btn
            gradient="aqua"
            class="mx-auto mt-5"
            size="lg"
            variant="background-color:#30CFC0; !important; font-family:Segoe UI; "
            style="font-family:Segoe UI; color:white; border-radius:40px; ; background-color:#30CFC0; !important;"
            >Odaberi cilj</mdb-btn
          ></router-link
        >
      </b-card>
    </b-card-group>
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
  border-radius: 40px;
}
</style>
