<template>

<div class="sivo mx-auto mt-5">


 
  <b-card-group style="max-width:1200px;" deck class="zeleno text-center mx-auto" >

    <b-card class="mt-5 zeleno mx-5"  >
     
      <h2 style=" color:black; height:80px;">
       Vaš obiteljski plan
      </h2>
      
      <router-link to="/vas_obiteljski_plan"> <b-button  class="mt-5 " size="lg" ref="show" variant="border-radius:40px; ; background-color:#30CFC0; !important;" style="font-family:Segoe UI; color:white; border-radius:40px; ; background-color:#30CFC0; !important;">
          Dalje
        </b-button> </router-link>


        

       
       
    </b-card>

    <b-card class="mt-5 zeleno mx-5" >
       <h2 style="color:black; height:80px;">
      Vaš pojedinačni plan
      </h2>
      
      <b-button class="mt-5" size="lg" ref="show" variant="border-radius:40px; ; background-color:#30CFC0; !important;" style="font-family:Segoe UI; color:white; border-radius:40px; ; background-color:#30CFC0; !important;">
          Dalje
        </b-button>


      
    </b-card>

    <b-card class="mt-5 zeleno mx-5" >
      <h2 style=" color:black; height:80px;">
       BMI, udio masti
      </h2>
      
     <b-button class="mt-5" size="lg" ref="show" variant="border-radius:40px; ; background-color:#30CFC0; !important;" style="font-family:Segoe UI; color:white; border-radius:40px; ; background-color:#30CFC0; !important;">
          Dalje
        </b-button> 


        
    </b-card>
  </b-card-group>
  
  <br><br><br><br><br><br><br>
</div>



  
</template>

<script>
  export default {
    data() {
      return {
      
      }
      }
      }
 
</script>

<style scoped>

.sivo{

  background-color: #F8F8F8;
  
  fill: rgba(196, 196, 196, 1);
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.788));
  overflow: visible;
  border-radius: 8px;
  max-width: 1700px;

}

.zeleno{

   border-radius: 20px;
   filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.09));
}


</style>