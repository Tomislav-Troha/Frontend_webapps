<template>

<div class="sivo mx-auto mt-5">

  <h1 style="color:black;" class="text-center  ">Glavni izbornik</h1>
 
  <b-card-group style="max-width:1600px;" deck class="zeleno text-center mx-auto " >

    <b-card class="mt-5 zeleno mx-2"  >
     
      <h2 style=" color:black; height:80px;">
       Kalorijska vrijednost
        namirnica
      </h2>
      
      <router-link to = "/Kalkulator_kalorija" > <b-button class="mt-5 " size="lg" ref="show" variant="border-radius:40px; ; background-color:#30CFC0; !important;" style="font-family:Segoe UI; color:white; border-radius:40px; ; background-color:#30CFC0; !important;">
          Računaj
        </b-button></router-link>


        <template #footer>
        
          <b-card-text style="color:black;">Izračunajte kalorije pojedinih namirnica ili čitavog obroka.<br> Planirajte obroke na osnovu kalorija.</b-card-text>
          
         
      </template>

       
       
    </b-card>

    <b-card class="mt-5 zeleno mx-2" >
       <h2 style="color:black; height:80px;">
       Plan prehrane
      </h2>
      
      <router-link to = "/Plan_prehrane_home" ><b-button class="mt-5" size="lg" ref="show" variant="border-radius:40px; ; background-color:#30CFC0; !important;" style="font-family:Segoe UI; color:white; border-radius:40px; ; background-color:#30CFC0; !important;">
          Planiraj
        </b-button></router-link>


        <template #footer>
        
          <b-card-text style="color:black;"  >Izrada plana prehrane u odnosu na spol, dob, zdravstveno stanje i tjelesnu aktivnost ili kao cijela obitelj.</b-card-text>
          
         
      </template>
    </b-card>

    <b-card class="mt-5 zeleno mx-2" >
      <h2 style=" color:black; height:80px;">
       Vaše stanje
      </h2>
      
    <router-link to="/TvojeStanje_home"> <b-button class="mt-5" size="lg" ref="show" variant="border-radius:40px; ; background-color:#30CFC0; !important;" style="font-family:Segoe UI; color:white; border-radius:40px; ; background-color:#30CFC0; !important;">
          Razmatraj
        </b-button> </router-link>


        <template #footer>
        
          <b-card-text style="color:black;"  >Pogledajte vaš prehrambeni plan i izračunajte kako napredujete u vašem cilju.</b-card-text>
          
         
      </template>
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
  
   filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.09));
}


</style>