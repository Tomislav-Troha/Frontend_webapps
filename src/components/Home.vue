<template>
  <div style="max-width:500px;" class="mx-auto mt-5 text-center">
    <b-overlay :show="show" rounded="sm" @shown="onShown1" @hidden="onHidden1">
      <b-card title="Card with custom overlay content" :aria-hidden="show ? 'true' : null">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        <b-card-text>Click the button to toggle the overlay:</b-card-text>
        <b-button ref="show" :disabled="show" variant="primary" @click="show = true">
          Show overlay
        </b-button>
      </b-card>
      <template #overlay>
        <div class="text-center">
        
          <p id="cancel-label">Please wait...</p>
          <b-button
            ref="cancel"
            variant="outline-danger"
            size="sm"
            aria-describedby="cancel-label"
            @click="show = false"
          >
            Cancel
          </b-button>
        </div>
      </template>
    </b-overlay>


<div style="max-width:500px;" class="mx-auto mt-5 text-center">
    <b-overlay :show1="show1" rounded="sm" @shown="pokazi" @hidden="sakri">
      <b-card title="Card with custom overlay content" :aria-hidden="show1 ? 'true' : null">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        <b-card-text>Click the button to toggle the overlay:</b-card-text>
        <b-button ref="show" :disabled="show1" variant="primary" @click="show1 = true">
          Show overlay
        </b-button>
      </b-card>
      <template #overlay>
        <div class="text-center">
        
          <p id="cancel1-label">Please wait...</p>
          <b-button
            ref="cancel1"
            variant="outline-danger"
            size="sm"
            aria-describedby="cancel1-label"
            @click="show1 = false"
          >
            Cancel
          </b-button>
        </div>
      </template>
    </b-overlay>
  </div>



    
  </div>









  
</template>

<script>
  export default {
    data() {
      return {
        show: false,
        show1: false,



      }
    },
    methods: {
      onShown1() {
        // Focus the cancel button when the overlay is showing
        this.$refs.cancel.focus()
      },
      onHidden1() {
        // Focus the show button when the overlay is removed
        this.$refs.show.focus()
      },

      pokazi() {
        // Focus the cancel button when the overlay is showing
        this.$refs.cancel1.focus()
      },
      sakri() {
        // Focus the show button when the overlay is removed
        this.$refs.show1.focus()
      }
    }
  }
</script>