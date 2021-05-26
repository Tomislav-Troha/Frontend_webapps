<template>

<div>

    <div class="mx-auto container mt-5 rounded-lg register_1" style= "max-width:500px;" id="example-2">
  
  
  <transition  name="bounce">
    <div> 
      <form novalidate  @submit.prevent="register">
    <p style="text-style:Segoe UI" class="h4 text-center mb-5">Registracija</p>
    <div class="grey-text mx-4">
      
      <mdb-input v-model="nadimak_obitelji" label="Nadimak obitelji" type="text"  id="validationCustom12"  required invalidFeedback="Molimo odaberite nadimak."  />
      <mdb-input v-model="broj_clanova" label="Broj članova obitelji"  type="number" id="validationCustom12"  required invalidFeedback="Molimo odaberite broj članova."/>
      <mdb-input v-model="email" label="E-mail"  type="email" id="validationCustom12"  required invalidFeedback="Molimo unesite ispravan e-mail." validFeedback="Izgleda dobro!"/>
      <mdb-input v-model="lozinka" label="Lozinka"  v-model.trim="$v.lozinka.$model" type="password"  required invalidFeedback="Molimo unesite ispravnu lozinku">
     <div  class="error" v-if="!$v.lozinka.minLength">Lozinka mora imati najmanje {{$v.lozinka.$params.minLength.min}} znakova.</div>
      </mdb-input>
      

    </div>
     <span class="text-center" v-if="showError"><p style="color:red;" >E-mail već postoji</p></span>
     <span class="text-center" v-if="showError1"><p style="color:red;" >Ispunite sva polja</p></span>
     <span class="text-center" v-if="showError2"><p style="color:red;" >Lozinka je neispravna</p></span>

    <div class="form-group text-center">
        <div class="form-check pl-0">
          <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
          <label class="form-check-label" for="invalidCheck">
            Pristajete na uvjete i odredbe
          </label>
          <div class="invalid-feedback">
            You shall not pass!
          </div>
        </div>
      </div>
    
    <div class="text-center">
       <mdb-btn type="sumbit"  class="rounded-lg">Registriraj se!</mdb-btn>
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
import { mdbBtn, mdbIcon, mdbRow, mdbCol, mdbInput } from "mdbvue"
import { required, minLength, between } from 'vuelidate/lib/validators'

export default {
  name: "ValidationPagePro",
    components: {
      
      mdbBtn,
      mdbIcon,
      mdbRow,
      mdbCol,
      mdbInput,
    },
  data(){
    return{

     
      showError:false,
      showError1:false,
      showError2:false,


      nadimak_obitelji:"",
      broj_clanova:"",
      email:"",
      lozinka:"",
    
    }
  },

  validations: {
    lozinka: {
      required,
      minLength: minLength(6)
    }
    },

  methods:{

    

    async register (event){

      if(this.nadimak_obitelji=="" || this.broj_clanova =="" || this.email =="" || this.lozinka == ""){
           event.target.classList.add('was-validated')
           return this.showError1 = true               
         }
         if(this.$v.lozinka.minLength == false){
             this.showError1 = false
             return this.showError2 = true
         }
           

        
       this.showError2 = false
       this.showError = false
       this.showError1 = false

      try {
       
         
         
       let succes = await Auth.register(this.nadimak_obitelji, this.broj_clanova, this.email, this.lozinka)
       console.log("Rezultat registracije", succes)
        

    if(succes == true && this.$v.lozinka.minLength == true && this.nadimak_obitelji !== "" || this.broj_clanova !== "" || this.email !== "" || this.lozinka !== ""){
      
     
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