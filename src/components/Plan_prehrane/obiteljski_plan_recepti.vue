<template>

<div v-if="isHidden" class="wrapper fadeInDown">
  <div id="formContent">
    <!-- Tabs Titles -->

<form  class="container">
        <h3>Doručak neda mi se</h3>
  <div class="form-group">
                Ne ustručavajte se 
  <b-button variant="info" class="rounded-lg py-2 px-4" v-on:click="isHidden = false"  >Sakrij!</b-button>
  </div>
</form>
  </div>
  
  </div>


</template>

<script>

export default {
    name:"obiteljski_plan_recepti",
    props:['isHidden'],
    
    

    data(){
      
        return {

          
             

        }
    }
}
</script>

<style >

.calorie {
  
  fill: rgba(196, 196, 196, 1);
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.788));
  overflow: visible;
  border-radius: 25px;
}

.wrapper {
  
  display: flex;
  align-items: center;
  flex-direction: column; 
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
}

#formContent {
  fill: rgba(196, 196, 196, 1);
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background-color: #f8f8f8;
  padding: 30px;
  width: 90%;
  max-width: 450px;
  position: relative;
  padding: 0px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  text-align: center;
}

/* Simple CSS3 Fade-in-down Animation */
.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

</style>

