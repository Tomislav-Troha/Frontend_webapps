<template>
    

    <div 
      class="pojplan  p-4 mx-auto mt-5 "
      style="background-color: #f8f8f8; !important; "
      
    >

    

    <b-card-group deck  class="zeleno wrapper fadeInDown mx-auto">

      

 <b-form class="mx-auto neku px-3 my-3  " >
     <h3 class="text-center pb-4">Žene</h3>
     <b-form-group class="mx-auto my-4" label="Spol">
      
            <b-form class="form-control text-center mx-auto" style="width:300px; max-width:100%;"  >
               {{zeneSpol.spol}}
   
            </b-form>

     </b-form-group>
               
          
        
     <b-form-group class="mx-auto my-4" label="Cilj:">
      
            <b-form class="form-control text-center mx-auto" style="width:300px; max-width:100%;"  >
               {{zeneSpol.cilj}}
   
            </b-form>

     </b-form-group>

       <b-form-group class="mx-auto my-4" label="Dnevni unos kalorija:">
      
            <b-form class="form-control text-center mx-auto" style="width:300px; max-width:100%;"  >
               {{zeneSpol.kalorije}} kcal
   
            </b-form>

     </b-form-group>

 </b-form>




 <b-form class="mx-auto neku px-3 my-3">
     <h3 class="text-center pb-4">Muškarci</h3>
      <b-form-group class="mx-auto my-4" label="Spol">
      
            <b-form class="form-control text-center mx-auto" style="width:300px; max-width:100%;"  >
               {{muskiSpol.spol}}
   
            </b-form>

     </b-form-group>

      <b-form-group class="mx-auto my-4" label="Cilj">
      
            <b-form class="form-control text-center mx-auto" style="width:300px; max-width:100%;"  >
               {{muskiSpol.cilj}}
   
            </b-form>

     </b-form-group>

       <b-form-group class="mx-auto my-4" label="Dnevni unos kalorija:">
      
            <b-form class="form-control text-center mx-auto" style="width:300px; max-width:100%;"  >
               {{muskiSpol.kalorije}} kcal
   
            </b-form>

     </b-form-group>

 </b-form>




 <b-form class="mx-auto neku px-3 my-3 ">
   <h3 class="text-center pb-4">Djeca</h3>
      <b-form-group class="mx-auto my-4" label="Doručak">
      
            <b-form class="form-control text-center mx-auto" style="width:300px; max-width:100%;"  >
               
   
            </b-form>

     </b-form-group>
 <b-form-group class="mx-auto my-4" label="Ručak">
      
            <b-form class="form-control text-center mx-auto" style="width:300px; max-width:100%;"  >
              
   
            </b-form>

     </b-form-group>

     <b-form-group class="mx-auto my-4" label="Večera">
      
            <b-form class="form-control text-center mx-auto" style="width:300px; max-width:100%;"  >
               
   
            </b-form>

     </b-form-group>

 </b-form>
 
    </b-card-group>




    </div>

</template>




<script>

import {PojedinacniPlan} from "@/services"

export default {

  data(){
    return{
      dorucak:null,
      rucak:null,
      vecera:null,

      zeneSpol:"",
      muskiSpol:""
    }
  },

  created(){
    this.pozoviBackend();
  },

methods:{
  async pozoviBackend(){

    this.zeneSpol = await PojedinacniPlan.getOne("60a38c7b8d1ad63034a23671")  
    this.muskiSpol = await PojedinacniPlan.getOne("60a6364bfc63e21c610aab3b")  
    



  }
}

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
   max-width: 1300px;
}

.neku{
  background-color: #97ddf7;
   fill: rgba(196, 196, 196, 1);
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.788));
  overflow: visible;
   border-radius: 20px;
   max-width: 300px;

}

.form-control{
  background-color: #F8F8F8;
}

</style>