<template>
  
<!-- Material form login -->
<div>

<div class="mx-auto container mt-5  rounded-lg login" style= "max-width:500px;">
  
  <form @submit.prevent="login">
    <p class="h4 text-center mb-4 ">Prijava</p>
    <div class="grey-text mx-4">
      <mdb-input v-model="email" label="Email" type="email"/>
      <mdb-input v-model="lozinka" label="Lozinka"  type="password"/>
    </div>
    <br>
    <div class="text-center">
       <mdb-btn type="submit" class="rounded-lg">Prijava</mdb-btn>
<br><br>

<mdb-modal-footer class="mx-5 pt-3 mb-1">
            <p class="font-small grey-text d-flex justify-content-end">Niste član? <router-link to = "/register" ><a  class="blue-text ml-1">Registriraj te se!</a></router-link></p>
          </mdb-modal-footer>

    </div>

  </form>
  

  </div>
<br><br><br><br><br><br><br><br><br><br>
</div>
  
  <!-- Material form login -->




  
</template>


<script>

import {Auth} from "@/services"

export default {
data(){
  return {

    email:"",
    lozinka:"",

    show: true,
    name: 'Basic',
  }
},

methods:{

 async login(){

    let succes = await Auth.login(this.email, this.lozinka)
    console.log("Rezultat prijave", succes)

    if(succes == true){
      this.$router.push({name: "home"})
    }

  }
}

}
    
  

</script>

<style scoped>


.login{
fill: rgba(196, 196, 196, 1);
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.788));
  overflow: visible;
  background: #F8F8F8;
}

</style>