<template>
  <div class="mx-5 ">
    <b-navbar toggleable="lg" class="navbar rounded-lg">
      <b-navbar-brand>
        <h2 class="mx-3" id="befit">Family health</h2>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"> </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mx-auto">
          <h1 v-if="$route.name === 'plan_prehrane_home'">Plan prehrane</h1>
          <h1 v-if="$route.name === 'obiteljski_plan'">Obiteljski plan</h1>
          <h1 v-if="$route.name === 'pojedinacni_plan'">Pojedinačni plan</h1>
          <h1 v-if="$route.name === 'tvojeStanje_home'">Vaše stanje</h1>
        </b-navbar-nav>

        <!-- Right aligned nav items -->

        <b-navbar-nav>
          <span @click="profil" v-if="auth.prijavljen">
            <b-nav-item style="font-size:20px;" right
              >{{ auth.userEmail }}
              <!-- Using 'button-content' slot -->
            </b-nav-item>
          </span>

          <span v-if="auth.prijavljen">
            <b-nav-item style="font-size:20px;" right @click="odjava"
              >Odjava
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em style="font-size:23px;"></em>
              </template>
            </b-nav-item>
          </span>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { Auth } from "@/services";

export default {
  data() {
    return {
      user: null,
      auth: Auth.state,
    };
  },

  methods: {
    odjava() {
      Auth.logout();
      this.$router.go();
    },

    profil() {
      this.$router.push("/profil");
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: #009dc5;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #009dc5;
}

#befit {
  font-family: "Script MT";
  font-style: normal;
  font-weight: normal;
  font-size: 44px;
  color: #000000 !important;
}
h1 {
  color: black;
  font-size: 60px;
  font-family: "Segoe UI";
  font-weight: bold;
}
</style>
