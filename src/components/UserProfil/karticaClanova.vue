<template>
  <div class="card-body mx-auto">
    <b-card-group class="mt-5 back">
      <b-form class="mx-auto">
        <b-form-group id="input-group-1" label="Ime:" label-for="input-1">
          <b-form-input
            v-model="user.ime"
            :disabled="!isEditing"
            :class="{ view: !isEditing }"
            class="form-control"
            id="input-1"
          >
          </b-form-input>
        </b-form-group>
        <b-form-group id="input-group-1" label="Prezime:" label-for="input-1">
          <b-form-input
            v-model="user.prezime"
            :disabled="!isEditing"
            :class="{ view: !isEditing }"
            class="form-control"
            id="input-1"
          >
          </b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Spol" label-for="input-2">
          <b-form-input
            v-model="user.spol"
            :disabled="!isEditing"
            :class="{ view: !isEditing }"
            class="form-control"
            id="input-1"
          >
          </b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Datum rođenja"
          label-for="input-1"
        >
          <b-form-input
            v-model="user.datumRodenja"
            :disabled="!isEditing"
            :class="{ view: !isEditing }"
            class="form-control"
            id="input-1"
          >
          </b-form-input>
        </b-form-group>
        <b-form-group id="input-group-1" label="Zanimanje" label-for="input-1">
          <b-form-input
            v-model="user.zanimanje"
            :disabled="!isEditing"
            :class="{ view: !isEditing }"
            class="form-control"
            id="input-1"
          >
          </b-form-input>
        </b-form-group>
      </b-form>
    </b-card-group>
    <b-button @click="isEditing = !isEditing" v-if="!isEditing">Edit</b-button>
    <b-button @click="save" v-else-if="isEditing">Save</b-button>
    <b-button v-if="isEditing" @click="cancel">Cancel</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEditing: false,

      user: {
        ime: "",
        prezime: "",
        spol: "",
        datumRodenja: "",
        zanimanje: "",
      },
    };
  },

  methods: {
    save() {
      this.isEditing = false;
    },
    cancel() {
      this.isEditing = false;
    },
  },
};
</script>

<style scoped>
.form-control {
  width: 250px;
}
.back {
  background-color: #87ceeb;
  border-radius: 10px;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.788));
}
.card-body {
  max-width: 400px;
}
</style>
