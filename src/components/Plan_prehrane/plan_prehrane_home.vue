<template>
    
     <div  class="calorie p-4 mx-auto mt-5 rounded-lg  w-75  w-75   " style="background-color: #f8f8f8; !important;  ">


<div>
  <b-card-group deck class="text-center">
    <b-card class="mt-4 "

      header-tag="header"
      footer="Odaberite svoj tjedni plan za cijelu obitelj"
      footer-tag="footer"
      title="Obiteljski plan"
    >
     
      <router-link to = "/Obiteljski_plan" ><b-button size="lg" class="mt-5 " style=" width:150px; font-family:Segoe UI; color:white; border-radius:30px; ; background-color:#30CFC0; !important;"  variant=" border-radius:30px; background-color:#30CFC0; !important;" >GO</b-button></router-link>
    </b-card>

    <b-card class="mt-4" title="Pojedinačni plan" header-tag="header" footer-tag="footer">
      
      
     <router-link to = "/Pojedinacni_plan" > <b-button size="lg" class="mt-5  " style="width:150px; font-family:Segoe UI; color:white; border-radius:30px; ; background-color:#30CFC0; !important;"  variant=" border-radius:30px; background-color:#30CFC0; !important;" >GO</b-button></router-link>
      <template #footer>
         <b-card-text>Ustanovite svoj plan prema spolu i cilju</b-card-text>
      </template>
    </b-card>
  </b-card-group>
</div>
 


     </div>

     


</template>


<script>


export default {
 
}

</script>




    <style scoped>


.calorie {
  
  fill: rgba(196, 196, 196, 1);
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.788));
  overflow: visible;
  border-radius: 25px;
}


</style>
