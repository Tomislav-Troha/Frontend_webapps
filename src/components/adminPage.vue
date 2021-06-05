<template>
  <div class="card-body mx-auto mt-5">
    <div
      class="mx-5"
      v-for="EmailAdmin in EmailAdmin"
      v-bind:key="EmailAdmin.email"
      v-bind:value="EmailAdmin.email"
    >
      <b-form-group label="Email">
        <b-form inline>
          <b-form id="Email" class="w-75 form-control ">{{
            EmailAdmin.email
          }}</b-form>

          <button
            @click="izbrisiUsera(EmailAdmin.email)"
            class="noselect my-1 mx-3"
          >
            <span class="text">Obriši</span
            ><span class="icon"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
                /></svg
            ></span>
          </button>
        </b-form>
      </b-form-group>
    </div>
    <p class="text-center" style="color:red; font-size:25px;">{{ feedback }}</p>
  </div>
</template>

<script>
import { Admin } from "@/services";
import { Service } from "@/services";
import { Auth } from "@/services";
import { UzmiNadimak } from "@/services";

export default {
  data() {
    return {
      auth: Auth.state,
      EmailAdmin: {},
      feedback: "",
    };
  },

  created() {
    this.pozoviBackend();
  },

  methods: {
    async pozoviBackend(term) {
      this.EmailAdmin = await Admin.getAll(term);
    },

    izbrisiUsera(email) {
      let newMail = {
        email: email,
      };
      if (newMail.email == "horvat@gmail.com") {
        return (this.feedback = "Nije baš cool obrisat admina");
      } else {
        console.log(newMail);
        Service.post("/admin/" + email, newMail).then((result) => {
          console.log(result);
        });
      }
    },
  },
};
</script>

<style scoped>
.form-control {
  max-width: 350px;
}
.card-body {
  background-color: #f8f9fa;
  max-width: 650px;
  fill: rgba(196, 196, 196, 1);
  filter: drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.788));
  overflow: visible;
  border-radius: 15px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.noselect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

button {
  width: 130px;
  height: 45px;
  cursor: pointer;
  display: flex;
  align-items: center;
  background: red;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
  background: #e62222;
}

button,
button span {
  transition: 200ms;
}

button .text {
  transform: translateX(35px);
  color: white;
  font-weight: bold;
}

button .icon {
  position: absolute;
  border-left: 1px solid #c41b1b;
  transform: translateX(110px);
  height: 40px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

button svg {
  width: 15px;
  fill: #eee;
}

button:hover {
  background: #ff3636;
}

button:hover .text {
  color: transparent;
}

button:hover .icon {
  width: 130px;
  border-left: none;
  transform: translateX(0);
}

button:focus {
  outline: none;
}
</style>
