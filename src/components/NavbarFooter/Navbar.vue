<template>
  <div class="mx-5 ">
    <b-navbar toggleable="lg" class="navbar rounded-lg">
      <b-navbar-brand>
        <h2 @click="goHome" class="mx-3 naslov" id="FH">
          Family health
        </h2>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"> </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mx-auto">
          <span class="home-text" v-if="$route.name === 'home'"
            >Dobro došli</span
          >
          <span class="home-text" v-if="$route.name === 'plan_prehrane_home'"
            >Plan prehrane</span
          >
          <span class="home-text" v-if="$route.name === 'obiteljski_plan'"
            >Obiteljski plan</span
          >
          <span class="home-text" v-if="$route.name === 'pojedinacni_plan'"
            >Pojedinačni plan</span
          >
          <span class="home-text" v-if="$route.name === 'tvojeStanje_home'"
            >Vaše stanje</span
          >
          <span class="home-text" v-if="$route.name === 'vas_pojedinacni_plan'"
            >Pojedinačni plan</span
          >
        </b-navbar-nav>

        <!-- Right aligned nav items -->

        <b-navbar-nav>
          <span
            @click="goAdmin"
            v-if="auth.prijavljen && horvat.role == 'admin'"
          >
            <b-nav-item class="mt-2" style="font-size:25px;" right
              ><p class="mt-1">Admin</p>

              <!-- Using 'button-content' slot -->
            </b-nav-item>
          </span>
          <span @click="profil" v-if="auth.prijavljen">
            <b-nav-item class="mt-2" style="font-size:25px;" right
              ><p class="mt-1">{{ auth.userEmail }}</p>

              <!-- Using 'button-content' slot -->
            </b-nav-item>
          </span>

          <span v-if="auth.prijavljen">
            <b-nav-item
              class="mt-3 "
              style="font-size:20px;"
              right
              @click="odjava"
              ><p class="odjava">Odjava</p>
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
import { Service } from "@/services/index.js";
import { UzmiNadimak } from "@/services";

export default {
  data() {
    return {
      user: "",
      auth: Auth.state,
      horvat: "",
    };
  },

  created() {
    this.pozoviGetBackend();
  },

  methods: {
    async pozoviGetBackend() {
      this.horvat = await UzmiNadimak.getOne(this.auth.userEmail);
    },

    goHome() {
      this.$router.push("/home");
    },

    goAdmin() {
      this.$router.push("/admin");
    },

    odjava() {
      Auth.logout();
      this.$router.go();
    },

    profil() {
      this.$router.push(`/profil/${this.horvat.nadimak}`);
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

#FH {
  font-family: "Script MT";
  font-style: normal;
  font-weight: normal;
  font-size: 44px;
  color: #000000 !important;
}

.odjava {
  color: blue !important;
}

.home-text {
  color: black;
  font-size: 45px;
  font-family: "Segoe UI";
  font-weight: 500;
}
.naslov {
  cursor: pointer;
}
</style>
