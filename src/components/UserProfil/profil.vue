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
                  <b-form-input
                    v-model="auth.userEmail"
                    :disabled="!isEditing"
                    :class="{ view: !isEditing }"
                    type="text"
                    class="form-control"
                  ></b-form-input>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-sm-3">
                  <h6 class="mb-0">Broj članova</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  <b-form-input
                    v-model="nadimak_obitelji.broj_clanova"
                    :disabled="!isEditing"
                    :class="{ view: !isEditing }"
                    type="text"
                    class="form-control"
                  ></b-form-input>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-sm-3">
                  <h6 class="mb-0">Nadimak:</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  <b-form-input
                    v-model="nadimak_obitelji.nadimak"
                    :disabled="!isEditing"
                    :class="{ view: !isEditing }"
                    type="text"
                    class="form-control"
                  ></b-form-input>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-sm-3">
                  <h6 class="mb-0">Lozinka:</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  <b-form-input
                    v-model="lozinka"
                    disabled
                    type="password"
                    class="form-control"
                  >
                  </b-form-input>
                </div>
              </div>
              <span class="text-center"
                ><p style="font-size:20px">{{ feedback }}</p></span
              >

              <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-9 text-secondary">
                  <mdb-btn
                    gradient="blue"
                    class="urediButton"
                    rounded
                    @click="isEditing = !isEditing"
                    v-if="!isEditing && $route.name === 'profil'"
                    >Uredi</mdb-btn
                  >
                  <mdb-btn
                    gradient="blue"
                    class="spremiButton"
                    rounded
                    @click="save"
                    v-else-if="isEditing"
                    >Spremi</mdb-btn
                  >
                  <mdb-btn
                    color="danger"
                    rounded
                    class="odustaniButton"
                    v-if="isEditing"
                    @click="cancel"
                    >Odustani</mdb-btn
                  >
                  <router-link
                    :to="{
                      name: 'promjena_lozinke',
                      params: { email: nadimak_obitelji.nadimak },
                    }"
                  >
                    <mdb-btn
                      gradient="aqua"
                      class="promijeniLozinkuButton"
                      rounded
                      v-if="isEditing"
                      @click="cancel"
                      >Promjeni lozinku</mdb-btn
                    ></router-link
                  >
                </div>
              </div>
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import karticaClanova from "../UserProfil/karticaClanova";
import { UzmiNadimak } from "@/services";
import { Auth } from "@/services";
import { Service } from "@/services/index.js";

export default {
  name: "profil",
  components: { karticaClanova },
  data() {
    return {
      lozinka: "ladno",
      auth: Auth.state,
      nadimak_obitelji: "",
      broj_clanova: "",
      feedback: "",
      Nadimak: "",
      isEditing: false,
    };
  },

  created() {
    this.pozoviGetBackend();
  },

  methods: {
    async pozoviGetBackend() {
      this.nadimak_obitelji = await UzmiNadimak.getOne(this.auth.userEmail);
    },

    save() {
      this.isEditing = false;
      let newSpremiNadimak = {
        nadimak_obitelji: this.nadimak_obitelji.nadimak,
      };
      console.log(newSpremiNadimak);

      Service.patch(`/users/${this.auth.userEmail}`, newSpremiNadimak).then(
        (result) => {
          console.log(result);
        }
      );

      let newSpremiBroj = {
        broj_clanova: this.nadimak_obitelji.broj_clanova,
      };
      console.log(newSpremiBroj);

      Service.patch(`/users/${this.auth.userEmail}`, newSpremiBroj).then(
        (result) => {
          console.log(result);
        }
      );
    },
    cancel() {
      this.isEditing = false;
    },
  },
};
</script>

<style scoped>
.drugi {
  max-width: 740px;
}
.urediButton {
  border-radius: 15px;
}
.spremiButton {
  border-radius: 0 25px;
}
.odustaniButton {
  border-radius: 0 25px;
}
.promijeniLozinkuButton {
  border-radius: 0 25px;
}
</style>
