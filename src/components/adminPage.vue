<template>
  <div class="card mx-auto mt-5">
    <div class="active-cyan-3 active-cyan-4">
      <input
        class="form-control mx-auto mt-3"
        type="text"
        placeholder="Search"
        aria-label="Search"
        v-model="store.search_text"
      />
    </div>

    <hr class="mt-5 mx-4" />

    <div
      class="mx-5 mt-2"
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
            @click.prevent="izbrisiUsera(EmailAdmin.role, EmailAdmin.email)"
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
import { Search } from "@/services";
import _ from "lodash";
import store from "@/store";

export default {
  data() {
    return {
      auth: Auth.state,
      EmailAdmin: {},
      feedback: "",
      store,
    };
  },

  created() {
    this.pozoviBackend();
    this.fetchEmail();
  },

  watch: {
    "store.search_text": _.debounce(function(val) {
      this.fetchEmail(val);
    }, 500),
  },

  methods: {
    async fetchEmail(term) {
      term = term || store.search_text;
      this.EmailAdmin = await Search.getAll(term);
      //console.log(this.email);
    },

    async pozoviBackend(term) {
      this.EmailAdmin = await Admin.getAll(term);
    },

    izbrisiUsera(role, email) {
      let newMail = {
        role: role,
        email: email,
      };
      //console.log(newMail.email);
      if (newMail.email == "horvat@gmail.com") {
        return (this.feedback = "Hmm?");
      } else {
        this.feedback = "";
        Service.post("/admin/" + email, newMail).then((result) => {
          console.log(result);
          this.pozoviBackend();
        });
      }
    },
  },

  watch: {
    "store.search_text": function() {
      //console.log("Promjenio sam se!", this.store.search_text)
      this.fetchEmail();
    },
  },
};
</script>

<style scoped>
.active-cyan-4 input[type="text"]:focus:not([readonly]) {
  border: 1px solid #4dd0e1;
  box-shadow: 0 0 0 1px #4dd0e1;
}

.form-control {
  max-width: 350px;
}
.card {
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

.search {
  max-width: 300px;
}
</style>
