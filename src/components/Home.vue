<template>

<div class="sivo text-light p-5 mx-5 mt-5 rounded-lg ">

  <h1 style="color:black;" class="text-center ">Glavni izbornik</h1>
 
  <b-card-group deck class="mx-5 mt-5 text-center " >

    <b-card class="mt-5 zeleno"  >
     
      <b-card-text class="mt-5" style="font-size:25px; color:black;">
       Kalorijska vrijednost
        namirnica
      </b-card-text>
      
      <router-link to = "/Kalkulator_kalorija" > <b-button class="mt-4"  ref="show" pill variant="outline-secondary">
          Računaj
        </b-button></router-link>


        <template #footer>
        
          <b-card-text style="color:black;">Izračunajte kalorije pojedinih namirnica ili čitavog obroka.<br> Planirajte obroke na osnovu kalorija.</b-card-text>
          
         
      </template>

       
       
    </b-card>

    <b-card class="mt-5 zeleno" >
       <b-card-text class="mt-5" style="font-size:25px; color:black;">
       Plan prehrane
      </b-card-text>
      
      <router-link to = "/Plan_prehrane_home" ><b-button class="mt-4"  ref="show" pill variant="outline-secondary">
          Planiraj
        </b-button></router-link>


        <template #footer>
        
          <b-card-text style="color:black;"  >Izrada plana prehrane u odnosu na spol, dob, zdravstveno stanje i tjelesnu aktivnost ili kao cijela obitelj.</b-card-text>
          
         
      </template>
    </b-card>

    <b-card class="mt-5 zeleno" >
      <b-card-text class="mt-5" style="font-size:25px; color:black;">
       Vaše stanje
      </b-card-text>
      
      <b-button class="mt-4"  ref="show" pill variant="outline-secondary">
          Razmatraj
        </b-button>


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

}

.zeleno{
  background-color: #30CFC0;
   filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.788));
}


</style>