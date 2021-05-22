<template>
    
<div>

     <div  class="calorie p-4 mx-auto mt-5 rounded-lg  w-75" style="background-color: #f8f8f8; !important;  ">

<b-form inline>


<b-button  v-on:click="isHidden = !isHidden" v-if="!isHidden1" class="mx-auto " style="color:white; font-size:20px; width:300px; height:80px; border-radius:30px; ; background-color:#30CFC0; !important;" variant="border-radius:30px; ; background-color:#30CFC0; !important;" ><p class="mt-2" v-if="isHidden==true">Nazad</p><p class="mt-3" v-if="isHidden==false">Radni tjedan</p></b-button>
<b-button v-on:click="isHidden1  = !isHidden1" v-if="!isHidden" class=" mx-auto" style="color:white; font-size:20px; width:300px; height:80px; border-radius:30px; ; background-color:#30CFC0; !important;" variant="border-radius:30px; ; background-color:#30CFC0; !important;" ><p class="mt-2" v-if="isHidden1==true">Nazad</p><p class="mt-3" v-if="isHidden1==false">Vikend </p></b-button>



</b-form>






     </div>


     <br><br>
      <div v-if="isHidden" class="wrapper fadeInDown rounded-lg">

  <div class="rounded-lg"  id="formContent">

<div   style="background-color: #f8f8f8; !important;  ">

   <h1 class="text-center mb-5 ">Radni tjedan</h1>


  

<b-form @submit.prevent="spremiPoTjednu" class="mx-4 text-center " >
   
    <b-input-group  class=" mx-auto my-4 " style="width:210px;">
      
          <b-form-select 
            
            id="input-1"
            v-model="radni_tjedan.dan"
            :options="dan"
            
          >
          </b-form-select>
      
        </b-input-group>



        <b-input-group  v-if="radni_tjedan.dan "  class=" mx-auto my-4 " style="width:210px;">
          <b-form-select 
             
            id="input-1"
            v-model="odabirObroka.DorucakRucakVecera"
            :options="DorucakRucakVecera"
            
          >
          </b-form-select>
         
        </b-input-group>


    

    <p v-if="radni_tjedan.dan ">{{this.feedback}}</p>

 
         <b-input-group v-if="onclick()  && radni_tjedan.dan " class=" mx-auto my-4 " style="width:210px;">
          <b-form-select 
            
            id="input-1"
            
            
           
          >
          </b-form-select>
        </b-input-group>


       

        <b-input-group   v-if="odabirObroka.DorucakRucakVecera == 'Doručak' && radni_tjedan.dan "  class=" mx-auto my-4 " style="width:210px;">
          <b-form-select 
            
            id="input-1"
            v-model="varijante.dorucak"
            :options="dorucak"
            
          >
          </b-form-select>
        </b-input-group>

        
        <b-input-group  v-if="odabirObroka.DorucakRucakVecera == 'Ručak' && radni_tjedan.dan  " class=" mx-auto my-4 " style="width:210px;">
          <b-form-select 
            
            id="input-1"
            v-model="varijante.rucak"
            :options="rucak"
            
          >
          </b-form-select>
        </b-input-group>

         <b-input-group  v-if="odabirObroka.DorucakRucakVecera == 'Večera' && radni_tjedan.dan  " class=" mx-auto my-4 " style="width:210px;">
          <b-form-select 
            
            id="input-1"
            v-model="varijante.vecera"
            :options="vecera"
            
          >
          </b-form-select>
        </b-input-group>


 <b-alert v-if=" radni_tjedan.dan" class="text-center mx-auto pt-4" style="background-color:#30CFC0; border-radius:25px; max-width:200px; color:white;"
      :show="dismissCountDown"
     
      
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
      fade
    >
      <p>{{spremiTjedan}}</p>
     
    </b-alert>

 



 


 
<b-button v-if=" radni_tjedan.dan && odabirObroka.DorucakRucakVecera  "  type="submit" @click="showAlert"  class="rounded-lg py-2 px-1  " style="font-size:20px; width:100px; height:40px;" variant="info" >Spremi</b-button>
 


        

        
</b-form>




  </div>
   </div>


</div>

<div v-if="isHidden1" class="wrapper fadeInDown rounded-lg">

  <div class="rounded-lg"  id="formContent">

<div   style="background-color: #f8f8f8; !important;  ">


 <h1 class="text-center mb-5 ">Vikend</h1>

 <b-form @submit.prevent="spremiPoTjednu1" class="mx-4 text-center " >
   
    <b-input-group   class=" mx-auto my-4 " style="width:210px;">
          <b-form-select 
            
            id="input-1"
            v-model="radni_tjedan.vikend_dan"
            :options="vikend_dan"
            
          >
          </b-form-select>
        </b-input-group>



        <b-input-group  v-if="radni_tjedan.vikend_dan"  class=" mx-auto my-4 " style="width:210px;">
          <b-form-select 
             
            id="input-1"
            v-model="odabirObroka.DorucakRucakVecera1"
            :options="DorucakRucakVecera1"
            
          >
          </b-form-select>
         
        </b-input-group>


    

    <p v-if="radni_tjedan.vikend_dan">{{this.feedback1}}</p>

 
         <b-input-group v-if="onclick1() &&  radni_tjedan.vikend_dan " class=" mx-auto my-4 " style="width:210px;">
          <b-form-select 
            
            id="input-1"
            
            :options="hrana"
            
          >
          </b-form-select>
        </b-input-group>


       

        <b-input-group   v-if="odabirObroka.DorucakRucakVecera1 == 'Doručak' && radni_tjedan.vikend_dan"  class=" mx-auto my-4 " style="width:210px;">
          <b-form-select 
            
            id="input-1"
            v-model="varijante.dorucak"
            :options="dorucak"
            
          >
          </b-form-select>
        </b-input-group>

        
        <b-input-group  v-if="odabirObroka.DorucakRucakVecera1 == 'Ručak' && radni_tjedan.vikend_dan" class=" mx-auto my-4 " style="width:210px;">
          <b-form-select 
            
            id="input-1"
            v-model="varijante.rucak"
            :options="rucak"
            
          >
          </b-form-select>
        </b-input-group>

         <b-input-group  v-if="odabirObroka.DorucakRucakVecera1 == 'Večera' && radni_tjedan.vikend_dan" class=" mx-auto my-4 " style="width:210px;">
          <b-form-select 
            
            id="input-1"
            v-model="varijante.vecera"
            :options="vecera"
            
          >
          </b-form-select>
         </b-input-group>


         <b-alert v-if=" radni_tjedan.vikend_dan" class="text-center mx-auto pt-4" style="background-color:#30CFC0; border-radius:25px; max-width:200px; color:white;"
      :show="dismissCountDown"
     
      
      @dismissed="dismissCountDown1=0"
      @dismiss-count-down="countDownChanged1"
      fade
    >
      <p>{{spremiTjedan1}}</p>
     
    </b-alert>


<b-button v-if=" radni_tjedan.vikend_dan && odabirObroka.DorucakRucakVecera1   "  type="submit" @click="showAlert1"  class="rounded-lg py-2 px-1  " style="font-size:20px; width:100px; height:40px;" variant="info" >Spremi</b-button>

 </b-form>


</div>
  </div>


</div>




</div>









</template>

<script>

import obiteljski_plan_recepti from '@/components/Plan_prehrane/obiteljski_plan_recepti'
import {Service} from '@/services/index.js'


export default {
  components: {obiteljski_plan_recepti},
  name:"obiteljski_plan",
  
  
  
 


 
    data(){

       
         
        
        return{

          dismissSecs: 1.5,
          dismissCountDown: 0,
          showDismissibleAlert: false,

          spremiTjedan:"",
          spremiTjedan1:"",
          

        

          isHidden: false,
          isHidden1: false,
          isHidden2: false,

            feedback:"",
            feedback1:"",

            radni_tjedan: {
                 dan:null,   
                 vikend_dan:null,         
            },

            odabirObroka: {
                DorucakRucakVecera:null,
                DorucakRucakVecera1:null,
            },

            odabirJela: {
                hranaDorucak:null
            },

            varijante: {
              dorucak:null,
              rucak:null,
              vecera:null
               

            },

            
            

            dorucak:[
                {text:"--Odaberi varijantu-- ", value:null},
                "Doručak pun ugljikohidrata",
                "Doručak za trčanje",
                "Ne volite jutarnji obrok",
                "Doručak za one koji žele smršaviti",
                "Doručak za one u nedostatku vremena"
            ],

            
            rucak:[
                {text:"--Odaberi varijantu--", value:null},
                "Krumpir-gulaš sa svinjskim mesom i povrćem",
                "Mljevena junetina s palentom",
                "Dinstani kiseli kupus, restani krumpir i svinjski odresci",
                "Panirani otkošteni batak i zabatak s pečenim povrćem",
                "Salata od tune, tjestenine i vrhnja"
            ],

             vecera:[
                {text:"--Odaberi varijantu--", value:null},
                "Jaja",
                "Hrenovke",
                "Piletina",
                "Pahuljice",
                "Kruška"
            ],
           

             DorucakRucakVecera: [
                    {text:"Odaberi dnevni obrok", value:null},
                    "Doručak",
                    "Ručak",
                    "Večera"

                ],

               DorucakRucakVecera1: [
                    {text:"Odaberi dnevni obrok", value:null},
                    "Doručak",
                    "Ručak",
                    "Večera"

                ],



            dan: [
                {text:"Odaberi dan", value:null},
                "Ponedjeljak",
                "Utorak",
                "Srijeda",
                "Četvrtak",
                "Petak"
               
            ],

            vikend_dan: [
              {text:"Odaberi dan", value:null},
              "Subota",
              "Nedjelja"
            ],
            
           

            

            

            
            
        }
    
    


        
    },



    methods:{

     

      showAlert() {
        
        this.dismissCountDown = this.dismissSecs
      },

      showAlert1() {
        
        this.dismissCountDown = this.dismissSecs
      },


      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },

       countDownChanged1(dismissCountDown1) {
        this.dismissCountDown = dismissCountDown1
      },

       
      spremiPoTjednu(){

   
        if(this.varijante.rucak || this.varijante.dorucak || this.varijante.vecera && this.odabirObroka.DorucakRucakVecera){
          this.spremiTjedan = "Uspješno spremljeno"


      //------------------------------------BAZA_PO_DANIMA_I_OBROKU; TJEDNA---------------------------------//
           

      if(this.radni_tjedan.dan == "Ponedjeljak" && this.odabirObroka.DorucakRucakVecera == "Doručak") {

        let NewSpremiPoTjednu = {
            radni_dan: this.radni_tjedan.dan,
            dorucak: this.varijante.dorucak,
          }

        Service.patch('/SpremiTjedan/60a39dfa3e2c6f2ba83b6d58', NewSpremiPoTjednu)

         .then((result) => {
          console.log(result)
        })

        }

        else if(this.radni_tjedan.dan == "Ponedjeljak" && this.odabirObroka.DorucakRucakVecera == "Ručak" ) {

        let NewSpremiPoTjednu = {
            radni_dan: this.radni_tjedan.dan,
            rucak: this.varijante.rucak,
                  }

            Service.patch('/SpremiTjedan/60a39dfa3e2c6f2ba83b6d58', NewSpremiPoTjednu)

         .then((result) => {
          console.log(result)
        })
        }

        else if(this.radni_tjedan.dan == "Ponedjeljak" && this.odabirObroka.DorucakRucakVecera == "Večera" ) {

          let NewSpremiPoTjednu = {
            radni_dan: this.radni_tjedan.dan,
            vecera: this.varijante.vecera,
                  }

            Service.patch('/SpremiTjedan/60a39dfa3e2c6f2ba83b6d58', NewSpremiPoTjednu)

         .then((result) => {
          console.log(result)
        })
        }

         else if(this.radni_tjedan.dan == "Utorak" && this.odabirObroka.DorucakRucakVecera == "Doručak" ) {

           let NewSpremiPoTjednu = {
            radni_dan: this.radni_tjedan.dan,
            dorucak: this.varijante.dorucak,
                  }

            Service.patch('/SpremiTjedan/60a39e083e2c6f2ba83b6d5b', NewSpremiPoTjednu)

         .then((result) => {
          console.log(result)
        })
        }

        else if(this.radni_tjedan.dan == "Utorak" && this.odabirObroka.DorucakRucakVecera == "Ručak" ) {

          let NewSpremiPoTjednu = {
            radni_dan: this.radni_tjedan.dan,
            rucak: this.varijante.rucak,
                  }

            Service.patch('/SpremiTjedan/60a39e083e2c6f2ba83b6d5b', NewSpremiPoTjednu)

         .then((result) => {
          console.log(result)
        })
        }

        else if(this.radni_tjedan.dan == "Utorak" && this.odabirObroka.DorucakRucakVecera == "Večera" ) {

          let NewSpremiPoTjednu = {
            radni_dan: this.radni_tjedan.dan,
            vecera: this.varijante.vecera,
                  }

            Service.patch('/SpremiTjedan/60a39e083e2c6f2ba83b6d5b', NewSpremiPoTjednu)

         .then((result) => {
          console.log(result)
        })
        }

        else if(this.radni_tjedan.dan == "Srijeda" && this.odabirObroka.DorucakRucakVecera == "Doručak" ) {

          let NewSpremiPoTjednu = {
            radni_dan: this.radni_tjedan.dan,
            dorucak: this.varijante.dorucak,
                  }

            Service.patch('/SpremiTjedan/60a39e163e2c6f2ba83b6d5e', NewSpremiPoTjednu)

         .then((result) => {
          console.log(result)
        })
        }

        else if(this.radni_tjedan.dan == "Srijeda" && this.odabirObroka.DorucakRucakVecera == "Ručak" ) {

          let NewSpremiPoTjednu = {
            radni_dan: this.radni_tjedan.dan,
            rucak: this.varijante.rucak,
                  }

            Service.patch('/SpremiTjedan/60a39e163e2c6f2ba83b6d5e', NewSpremiPoTjednu)

         .then((result) => {
          console.log(result)
        })
        }

        else if(this.radni_tjedan.dan == "Srijeda" && this.odabirObroka.DorucakRucakVecera == "Večera" ) {

          let NewSpremiPoTjednu = {
            radni_dan: this.radni_tjedan.dan,
            vecera: this.varijante.vecera,
                  }

            Service.patch('/SpremiTjedan/60a39e163e2c6f2ba83b6d5e', NewSpremiPoTjednu)

         .then((result) => {
          console.log(result)
        })
        }

        else if(this.radni_tjedan.dan == "Četvrtak" && this.odabirObroka.DorucakRucakVecera == "Doručak" ) {

          let NewSpremiPoTjednu = {
            radni_dan: this.radni_tjedan.dan,
            dorucak: this.varijante.dorucak,
                  }

            Service.patch('/SpremiTjedan/60a39e203e2c6f2ba83b6d60', NewSpremiPoTjednu)

         .then((result) => {
          console.log(result)
        })
        }

        else if(this.radni_tjedan.dan == "Četvrtak" && this.odabirObroka.DorucakRucakVecera == "Ručak" ) {

          let NewSpremiPoTjednu = {
            radni_dan: this.radni_tjedan.dan,
            rucak: this.varijante.rucak,
                  }

            Service.patch('/SpremiTjedan/60a39e203e2c6f2ba83b6d60', NewSpremiPoTjednu)

         .then((result) => {
          console.log(result)
        })
        }

        else if(this.radni_tjedan.dan == "Četvrtak" && this.odabirObroka.DorucakRucakVecera == "Večera" ) {

          let NewSpremiPoTjednu = {
            radni_dan: this.radni_tjedan.dan,
            vecera: this.varijante.vecera,
                  }

            Service.patch('/SpremiTjedan/60a39e203e2c6f2ba83b6d60', NewSpremiPoTjednu)

         .then((result) => {
          console.log(result)
        })
        }

         else if(this.radni_tjedan.dan == "Petak" && this.odabirObroka.DorucakRucakVecera == "Doručak" ) {

           let NewSpremiPoTjednu = {
            radni_dan: this.radni_tjedan.dan,
            dorucak: this.varijante.dorucak,
                  }

            Service.patch('/SpremiTjedan/60a39e273e2c6f2ba83b6d63', NewSpremiPoTjednu)

         .then((result) => {
          console.log(result)
        })
        }

         else if(this.radni_tjedan.dan == "Petak" && this.odabirObroka.DorucakRucakVecera == "Ručak" ) {

           let NewSpremiPoTjednu = {
            radni_dan: this.radni_tjedan.dan,
            rucak: this.varijante.rucak,
                  }

            Service.patch('/SpremiTjedan/60a39e273e2c6f2ba83b6d63', NewSpremiPoTjednu)

         .then((result) => {
          console.log(result)
        })
        }

        else if(this.radni_tjedan.dan == "Petak" && this.odabirObroka.DorucakRucakVecera == "Večera" ) {

          let NewSpremiPoTjednu = {
            radni_dan: this.radni_tjedan.dan,
            vecera: this.varijante.vecera,
                  }

            Service.patch('/SpremiTjedan/60a39e273e2c6f2ba83b6d63', NewSpremiPoTjednu)

         .then((result) => {
          console.log(result)
        })
        }
setTimeout(function () { location.reload(1); }, 1500);
      
        }

 
           

        else if(!this.odabirObroka.DorucakRucakVecera && !this.varijante.rucak || !this.varijante.dorucak || !this.varijante.vecera ) { 
          this.spremiTjedan = "Odaberi varijantu  :)"
        }

        
      

      },


      //---------------------------------------------------------------------------------------------------------------------------------------//

      spremiPoTjednu1(){

   
        if(this.odabirObroka.DorucakRucakVecera1 && this.varijante.rucak || this.varijante.dorucak || this.varijante.vecera){
          this.spremiTjedan1 = "Uspješno spremljeno"

          let NewSpremiPoTjednu = {
            radni_dan: this.radni_tjedan.dan,
            dorucak: this.varijante.dorucak,
          }
         
          
          if(this.radni_tjedan.vikend_dan == "Subota" && this.odabirObroka.DorucakRucakVecera1 == "Doručak") {

             let NewSpremiPoTjednu = {
            radni_dan: this.radni_tjedan.dan,
            dorucak: this.varijante.dorucak,
          }

           Service.patch('/SpremiTjedan/60a4116709b3a991da95d8b5', NewSpremiPoTjednu)

         .then((result) => {
          console.log(result)
        })

        }


         else if(this.radni_tjedan.vikend_dan == "Subota" && this.odabirObroka.DorucakRucakVecera1 == "Ručak") {

           let NewSpremiPoTjednu = {
            radni_dan: this.radni_tjedan.dan,
            rucak: this.varijante.rucak,
          }

           Service.patch('/SpremiTjedan/60a4116709b3a991da95d8b5', NewSpremiPoTjednu)

         .then((result) => {
          console.log(result)
        })

        }

        else if(this.radni_tjedan.vikend_dan == "Subota" && this.odabirObroka.DorucakRucakVecera1 == "Večera") {

           let NewSpremiPoTjednu = {
            radni_dan: this.radni_tjedan.dan,
            vecera: this.varijante.vecera,
          }

           Service.patch('/SpremiTjedan/60a4116709b3a991da95d8b5', NewSpremiPoTjednu)

         .then((result) => {
          console.log(result)
        })

        }

        else if(this.radni_tjedan.vikend_dan == "Nedjelja" && this.odabirObroka.DorucakRucakVecera1 == "Doručak") {

          let NewSpremiPoTjednu = {
            radni_dan: this.radni_tjedan.dan,
            dorucak: this.varijante.dorucak,
          }

           Service.patch('/SpremiTjedan/60a56a2ecc15356506973c02', NewSpremiPoTjednu)

         .then((result) => {
          console.log(result)
        })

        }

        else if(this.radni_tjedan.vikend_dan == "Nedjelja" && this.odabirObroka.DorucakRucakVecera1 == "Ručak") {

          let NewSpremiPoTjednu = {
            radni_dan: this.radni_tjedan.dan,
            rucak: this.varijante.rucak,
          }

           Service.patch('/SpremiTjedan/60a56a2ecc15356506973c02', NewSpremiPoTjednu)

         .then((result) => {
          console.log(result)
        })

        }

         else if(this.radni_tjedan.vikend_dan == "Nedjelja" && this.odabirObroka.DorucakRucakVecera1 == "Večera") {

           let NewSpremiPoTjednu = {
            radni_dan: this.radni_tjedan.dan,
            vecera: this.varijante.vecera,
          }

           Service.patch('/SpremiTjedan/60a56a2ecc15356506973c02', NewSpremiPoTjednu)

         .then((result) => {
          console.log(result)
        })

        }


        
          setTimeout(function () { location.reload(1); }, 1500);
        
          
           }
           

        else if(!this.odabirObroka.DorucakRucakVecera1 && !this.varijante.rucak || !this.varijante.dorucak || !this.varijante.vecera ) { 
          this.spremiTjedan1 = "Odaberi varijantu  :)"
        }

        
      

      },




      onclick1(){
         if(this.odabirObroka.DorucakRucakVecera1 === "Doručak"){
            this.feedback1="Odabrali ste doručak i imate na raspolaganju 5 varijanti"
        }

        else if( this.odabirObroka.DorucakRucakVecera1 === "Ručak"){
            this.feedback1="Odabrali ste ručak i imate na raspolaganju 5 varijanti"
        }

        else if(  this.odabirObroka.DorucakRucakVecera1 === "Večera"){
            this.feedback1="Odabrali ste večeru i imate na raspolaganju 5 varijanti"
        }

        else{
            this.feedback1=null
        }
        },
    

 
    
      

        onclick(){
             if(this.odabirObroka.DorucakRucakVecera === "Doručak"  ){

                this.feedback="Odabrali ste doručak i imate na raspolaganju 5 varijanti"

              
                

        }

        else if(this.odabirObroka.DorucakRucakVecera === "Ručak" ){

           this.feedback="Odabrali ste ručak i imate na raspolaganju 5 varijanti"

           

        }

        else if(this.odabirObroka.DorucakRucakVecera === "Večera"){

           this.feedback="Odabrali ste večeru i imate na raspolaganju 5 varijanti"

           

        }

      

        else{
            this.feedback=null
        }
        },

           


    },

    
    
}

 


</script>





<style >

.calorie {
  
  fill: rgba(196, 196, 196, 1);
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.788));
  overflow: visible;
  border-radius: 25px;
}

.wrapper {
  
  display: flex;
  align-items: center;
  flex-direction: column; 
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
}

#formContent {
  fill: rgba(196, 196, 196, 1);
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background-color: #f8f8f8;
  padding: 30px;
  width: 90%;
  max-width: 450px;
  position: relative;
  padding: 0px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  text-align: center;
}

/* Simple CSS3 Fade-in-down Animation */
.fadeInDown{
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}


</style>