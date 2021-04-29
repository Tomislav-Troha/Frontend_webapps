<template>
    
     <div  class="calorie p-4 mx-auto mt-5 rounded-lg  w-75  w-75   " style="background-color: #f8f8f8; !important;  ">

<div>
  <b-card-group deck>
    <b-card class="mt-4"

      header-tag="header"
      footer="Odaberite svoj tjedni plan za cijelu obitelj"
      footer-tag="footer"
      title="Obiteljski plan"
    >
     
      <router-link to = "/Obiteljski_plan" ><b-button  class="rounded-lg " style="font-size:20px;" variant="info" >GO</b-button></router-link>
    </b-card>

    <b-card class="mt-4" title="Pojedinačni plan" header-tag="header" footer-tag="footer">
      
      
      <b-button  href="#" class="rounded-lg "  style="font-size:20px;" variant="info">GO</b-button>
      <template #footer>
         <b-card-text>Ustanovite svoj plan prema spolu i cilju</b-card-text>
      </template>
    </b-card>
  </b-card-group>
</div>



     </div>

     


</template>






    <style scoped>


.calorie {
  
  fill: rgba(196, 196, 196, 1);
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.788));
  overflow: visible;
  border-radius: 25px;
}


</style>
