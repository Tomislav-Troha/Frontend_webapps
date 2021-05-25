<template>

<div>

    <div class="mx-auto container mt-5 rounded-lg register_1" style= "max-width:500px;" id="example-2">
  
  
  <transition  name="bounce">
    <div> 
      <form @submit.prevent="register">
    <p style="text-style:Segoe UI" class="h4 text-center mb-5">Registracija</p>
    <div class="grey-text mx-4">
      <mdb-input required v-model="nadimak_obitelji" label="Nadimak obitelji"  type="text"/>
      <mdb-input required v-model="broj_clanova" label="Broj članova obitelji"  type="number"/>
      <mdb-input required v-model="email" label="E-mail"  type="email"/>
      <mdb-input required v-model="lozinka" label="Lozinka"  type="password"/>

    </div>
     <span class="text-center" v-if="showError"><p style="color:red;" >E-mail već postoji</p></span>
    <div class="text-center">
       <mdb-btn type="sumbit" class="rounded-lg">Registriraj se!</mdb-btn>
<br><br>
<mdb-modal-footer class="mx-5 pt-3 mb-1">
            <p class="font-small grey-text d-flex justify-content-end">Imate račun? <router-link to = "/login" ><a href="#" class="blue-text ml-1">Prijavite se!</a></router-link></p>
          </mdb-modal-footer>

    </div>
  </form>
  </div>
  </transition>
  
</div>

<br><br><br><br><br><br>
</div>

</template>


<script>

import {Auth} from "@/services"

export default {
  data(){
    return{

      showError:false,

      nadimak_obitelji:"",
      broj_clanova:"",
      email:"",
      lozinka:"",
    }
  },

  methods:{

    async register (){

       this.showError = false

      try {

       let succes = await Auth.register(this.nadimak_obitelji, this.broj_clanova, this.email, this.lozinka)
       console.log("Rezultat registracije", succes)

    if(succes == true){
      
     
      alert("Uspjesna registracija")
      this.$router.push({name: "login"})
      
    }
      } catch (e){
          this.showError = true
          
      }
    }
  }
}
</script>

<style scoped>

.register_1{
    fill: rgba(196, 196, 196, 1);
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.788));
  overflow: visible;
  background: #F8F8F8;
}

</style>