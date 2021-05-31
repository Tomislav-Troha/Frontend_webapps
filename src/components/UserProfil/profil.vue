<template>
  <div class="container mt-5 ">
    <div class="main-body ">
      <div class="">
        <div class="col-lg-4 mx-auto py-3 drugi">
          <div class="card">
            <div class="card-body">
              <div class="d-flex flex-column align-items-center text-center">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar6.png"
                  alt="Admin"
                  class="rounded-circle p-1 bg-primary"
                  width="110"
                />
                <div class="mt-3">
                  <h4>{{ nadimak_obitelji.nadimak }}</h4>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8 mx-auto">
          <div class="card  mx-auto ">
            <div class="card-body ">
              <div class="row mb-3">
                <div class="col-sm-3">
                  <h6 class="mb-0">Email</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  <b-form type="text" class="form-control">{{
                    auth.userEmail
                  }}</b-form>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-sm-3">
                  <h6 class="mb-0">Broj članova</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  <b-form type="text" class="form-control">{{
                    nadimak_obitelji.broj_clanova
                  }}</b-form>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-9 text-secondary">
                  <router-link to="/profil/dodaj_clanove">
                    <mdb-btn gradient="blue"
                      >Dodaj članove</mdb-btn
                    ></router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <b-card-group deck class="pokazi">
          <karticaClanova class="ravno " />
        </b-card-group>
      </div>
    </div>
  </div>
</template>
<script>
import karticaClanova from "../UserProfil/karticaClanova";
import { UzmiNadimak } from "@/services";
import { Auth } from "@/services";

export default {
  name: "profil",
  components: { karticaClanova },
  data() {
    return {
      auth: Auth.state,
      nadimak_obitelji: "",
      broj_clanova: "",
    };
  },

  created() {
    this.pozoviBackend();
  },

  methods: {
    pokazi() {},

    async pozoviBackend() {
      this.nadimak_obitelji = await UzmiNadimak.getOne(this.auth.userEmail);
    },
  },
};
</script>

<style scoped>
.drugi {
  max-width: 740px;
}
</style>
