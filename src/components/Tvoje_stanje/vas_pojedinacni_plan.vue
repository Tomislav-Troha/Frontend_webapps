<template>
    

    <div 
      class="pojplan  p-4 mx-auto mt-5 "
      style="background-color: #f8f8f8; !important; max-width:1400px;  "
      
    >

    

    <b-card-group deck  class="zeleno wrapper fadeInDown mx-auto">

      

 <b-form class="mx-auto" >
     <h3 class="text-center pb-4">Žene</h3>
      <b-form-group
        id="input-group-1"
        label="Spol:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          
          type="email"
	
          disabled
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Cilj:" label-for="input-2">
        <b-form-input
          id="input-2"
          

          disabled
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Kalorije:" label-for="input-3">
        <b-form-input
          id="input-3"
          

          disabled
        ></b-form-input>
      </b-form-group>

 </b-form>




 <b-form class="mx-auto">
     <h3 class="text-center pb-4">Muškarci</h3>
      <b-form-group
        id="input-group-1"
        label="Spol:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          

          disabled
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Cilj:" label-for="input-2">
        <b-form-input
          id="input-2"

          disabled
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Kalorije:" label-for="input-3">
        <b-form-input
          id="input-3"
          disabled
        ></b-form-input>
      </b-form-group>

 </b-form>




 <b-form class="mx-auto ">
   <h3 class="text-center pb-4">Djeca</h3>
      <b-form-group
        id="input-group-1"
        label="Doručak:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          

          disabled
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Ručak:" label-for="input-2">
        <b-form-input
          id="input-2"
          

          disabled
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Večera:" label-for="input-3">
        <b-form-input
          id="input-3"
          
          disabled
        ></b-form-input>
      </b-form-group>

 </b-form>
 
    </b-card-group>




    </div>

</template>




<script>

import {spremljeneVarijenteTjedan} from "@/services"

export default {

  data(){
    return{
      dorucak:null,
      rucak:null,
      vecera:null,
    }
  },


}




</script>





<style scoped>

.pojplan{
  border-radius: 20px;
  background-color: white !important
}

.zeleno{
  background-color: #F8F8F8;
  
  fill: rgba(196, 196, 196, 1);
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.788));
  overflow: visible;
   border-radius: 20px;
   width: 1200px;
}


</style>