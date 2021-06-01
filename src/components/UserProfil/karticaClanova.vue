<template>
  <div>
    <b-form-group label="Unesite staru lozinku">
      <b-form-input></b-form-input>
    </b-form-group>
  </div>
</template>

<script>
import { Auth } from "@/services";

export default {
  data() {
    return {
      auth: Auth.state,
    };
  },
};
</script>

<style scoped></style>
