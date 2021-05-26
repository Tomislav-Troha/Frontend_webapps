<template>
  <form @submit.prevent="validateForm" novalidate>
    <mdb-input
      type="text"
      id="customInput1"
      label="First name"
      v-model="customValues.name"
      :customValidation="validation.name.validated"
      :isValid="validation.name.valid"
      @change="validate('name')"
      required
      validFeedback="Look's good."
      invalidFeedback="Please correct."
    />
    <mdb-input
      type="text"
      id="customInput2"
      label="Last name"
      v-model="customValues.lastname"
      :customValidation="validation.lastname.validated"
      :isValid="validation.lastname.valid"
      @change="validate('lastname')"
      required
      validFeedback="Look's good."
      invalidFeedback="Please correct."
    />
    <mdb-input
      type="text"
      id="customInput3"
      label="Country"
      v-model="customValues.country"
      :customValidation="validation.country.validated"
      :isValid="validation.country.valid"
      @change="validate('country')"
      required
      validFeedback="Look's good."
      invalidFeedback="Country should be one of those: USA, France, Poland"
    />
    <mdb-row>
      <mdb-col>
        <mdb-select
          v-model="city"
          validation
          @change="validate('city')"
          ref="select"
          validFeedback="Look's good."
          invalidFeedback="Please choose Your city."
          label="City"
          placeholder="Choose your city"
        />
      </mdb-col>
    </mdb-row>
    <mdb-input
      type="password"
      id="customInput4"
      label="Password"
      v-model="customValues.password"
      :customValidation="validation.password.validated"
      :isValid="validation.password.valid"
      @change="validate('password')"
      required
      validFeedback="Look's good."
      :invalidFeedback="validation.password.invalidFeedback"
    />
    <mdb-input
      class="pl-0 mb-3"
      type="checkbox"
      id="customInput5"
      v-model="customValues.checkbox"
      :customValidation="validation.checkbox.validated"
      :isValid="validation.checkbox.valid"
      @change="validate('checkbox')"
      required
      label="Check this custom checkbox"
      validFeedback="Correct"
      invalidFeedback="Please check me"
    />
    <mdb-btn type="Submit" size="sm" color="danger">Submit</mdb-btn>
  </form>
</template>

<script>
  import { mdbBtn, mdbRow, mdbCol, mdbInput, mdbSelect } from "mdbvue";

  export default {
    name: "ValidationPagePro",
    components: {
      mdbBtn,
      mdbRow,
      mdbCol,
      mdbInput,
      mdbSelect
    },
    data() {
      return {
        customValues: {
          name: "Matt",
          lastname: "Doe",
          country: "",
          city: "",
          password: "",
          checkbox: false,
          datepicker: ""
        },

        validation: {
          name: {
            valid: false,
            validated: false
          },
          lastname: {
            valid: false,
            validated: false
          },
          country: {
            valid: false,
            validated: false
          },
          city: {
            valid: false,
            validated: false
          },
          password: {
            valid: false,
            validated: false,
            invalidFeedback: ''
          },
          checkbox: {
            valid: false,
            validated: false
          }
        }
      };
    },
    computed: {
      city() {
        if (this.customValues.country === 'USA') {
          return [
            { text: 'Boston', value: 'boston' },
            { text: 'Chicago', value: 'chicago' },
            { text: 'New York', value: 'newYork' }
          ];
        } else if (this.customValues.country === 'France') {
          return [
            { text: 'Paris', value: 'paris' },
            { text: 'Nantes', value: 'nantes' },
            { text: 'Lyon', value: 'lyon' }
          ];
        } else if (this.customValues.country === 'Poland') {
          return [
            { text: 'Warszawa', value: 'warszawa' },
            { text: 'Kraków', value: 'krakow' },
            { text: 'Gdańsk', value: 'gdansk' },
          ];
        }
        return [
        ];
      }
    },
    methods: {
      validateForm() {
        Object.keys(this.customValues).forEach(key => {
          this.validate(key);
        });
      },
      validate(key, value) {
        if (key === "name" || key === "lastname" || key === "checkbox") {
          if (this.customValues[key]) {
            this.validation[key].valid = true;
          } else {
            this.validation[key].valid = false;
          }
          this.validation[key].validated = true;
        }
        if (key === "country") {
          if (["USA", "France", "Poland"].includes(this.customValues[key])) {
            this.validation[key].valid = true;
          } else {
            this.validation[key].valid = false;
          }
          this.validation[key].validated = true;
        }
        if (key === "password") {
          // check length
          if (this.customValues[key].length > 5) {
            // check uppercase
            for (let character of this.customValues[key].split("")) {
              if (character === character.toUpperCase()) {
                this.validation[key].valid = true;
                break;
              }
              this.validation[key].valid = false;
              this.validation[key].invalidFeedback =
                "Password should contain at least one uppercase character.";
            }
          } else {
            this.validation[key].valid = false;
            this.validation[key].invalidFeedback =
              "Password too short. Type at least 6 letters.";
          }
          this.validation[key].validated = true;
        }
        if (key === "city") {

          this.$refs.select.validate();
        }
        if (key === "arrival") {
          if (value) {
            this.validation[key].valid = true;
          } else {
            this.validation[key].valid = false;
          }
          this.validation[key].validated = true;
        }
      },
    }
  };
</script>