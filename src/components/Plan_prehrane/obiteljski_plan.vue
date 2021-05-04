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


  

<b-form class="mx-4 text-center " >
   
    <b-input-group   class=" mx-auto my-4 " style="width:210px;">
          <b-form-select 
            
            id="input-1"
            v-model="radni_tjedan.dan"
            :options="dan"
            required
          >
          </b-form-select>
        </b-input-group>



        <b-input-group  v-if="radni_tjedan.dan"  class=" mx-auto my-4 " style="width:210px;">
          <b-form-select 
             
            id="input-1"
            v-model="odabirObroka.DorucakRucakVecera"
            :options="DorucakRucakVecera"
            required
          >
          </b-form-select>
         
        </b-input-group>


    

    <p>{{this.feedback}}</p>

 
         <b-input-group v-if="onclick()" class=" mx-auto my-4 " style="width:210px;">
          <b-form-select 
            
            id="input-1"
            
            :options="hrana"
            required
          >
          </b-form-select>
        </b-input-group>


       

        <b-input-group   v-if="odabirObroka.DorucakRucakVecera == 'Doručak'"  class=" mx-auto my-4 " style="width:210px;">
          <b-form-select 
            
            id="input-1"
            v-model="varijante.dorucak"
            :options="dorucak"
            required
          >
          </b-form-select>
        </b-input-group>

        
        <b-input-group  v-if="odabirObroka.DorucakRucakVecera == 'Ručak'" class=" mx-auto my-4 " style="width:210px;">
          <b-form-select 
            
            id="input-1"
            v-model="varijante.rucak"
            :options="rucak"
            required
          >
          </b-form-select>
        </b-input-group>

         <b-input-group  v-if="odabirObroka.DorucakRucakVecera == 'Večera'" class=" mx-auto my-4 " style="width:210px;">
          <b-form-select 
            
            id="input-1"
            v-model="varijante.vecera"
            :options="vecera"
            required
          >
          </b-form-select>
        </b-input-group>



 








<b-button    v-if="varijante.dorucak  || varijante.rucak || varijante.vecera " class="rounded-lg py-2 px-1  " style="font-size:20px; width:100px; height:40px;" variant="info" >Spremi</b-button>



        

        
</b-form>




  </div>
   </div>


</div>

<div v-if="isHidden1" class="wrapper fadeInDown rounded-lg">

  <div class="rounded-lg"  id="formContent">

<div   style="background-color: #f8f8f8; !important;  ">


 <h1 class="text-center mb-5 ">Vikend</h1>

 <b-form class="mx-4 text-center " >
   
    <b-input-group   class=" mx-auto my-4 " style="width:210px;">
          <b-form-select 
            
            id="input-1"
            v-model="radni_tjedan.vikend_dan"
            :options="vikend_dan"
            required
          >
          </b-form-select>
        </b-input-group>



        <b-input-group  v-if="radni_tjedan.vikend_dan"  class=" mx-auto my-4 " style="width:210px;">
          <b-form-select 
             
            id="input-1"
            v-model="odabirObroka.DorucakRucakVecera"
            :options="DorucakRucakVecera"
            required
          >
          </b-form-select>
         
        </b-input-group>


    

    <p>{{this.feedback}}</p>

 
         <b-input-group v-if="onclick()" class=" mx-auto my-4 " style="width:210px;">
          <b-form-select 
            
            id="input-1"
            
            :options="hrana"
            required
          >
          </b-form-select>
        </b-input-group>


       

        <b-input-group   v-if="odabirObroka.DorucakRucakVecera == 'Doručak'"  class=" mx-auto my-4 " style="width:210px;">
          <b-form-select 
            
            id="input-1"
            v-model="varijante.dorucak"
            :options="dorucak"
            required
          >
          </b-form-select>
        </b-input-group>

        
        <b-input-group  v-if="odabirObroka.DorucakRucakVecera == 'Ručak'" class=" mx-auto my-4 " style="width:210px;">
          <b-form-select 
            
            id="input-1"
            v-model="varijante.rucak"
            :options="rucak"
            required
          >
          </b-form-select>
        </b-input-group>

         <b-input-group  v-if="odabirObroka.DorucakRucakVecera == 'Večera'" class=" mx-auto my-4 " style="width:210px;">
          <b-form-select 
            
            id="input-1"
            v-model="varijante.vecera"
            :options="vecera"
            required
          >
          </b-form-select>
         </b-input-group>


         <b-button    v-if="varijante.dorucak  || varijante.rucak || varijante.vecera " class="rounded-lg py-2 px-1  " style="font-size:20px; width:100px; height:40px;" variant="info" >Spremi</b-button>

 </b-form>


</div>
  </div>


</div>




</div>









</template>

<script>

import obiteljski_plan_recepti from '@/components/Plan_prehrane/obiteljski_plan_recepti'


export default {
  components: {obiteljski_plan_recepti},
  name:"obiteljski_plan",
  
  
  
 


 
    data(){

       
         
        
        return{

        

          isHidden: false,
          isHidden1: false,
          isHidden2: false,

            feedback:null,

            radni_tjedan: {
                 dan:null,   
                 vikend_dan:null,         
            },

            odabirObroka: {
                DorucakRucakVecera:null,
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
                "Umak od mljevene junetine s palentom",
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
            
           

            

            

            kruh: [

                {text:"Ručak", value: null},
                this.kruh="9999"
            ],

            ribe: [

                {text:"Ručak ", value: null},
                this.varijabla
            ],

            brza_hrana: [

                {text:"Ručak", value: null},
                this.varijabla
            ],

             voce: [

                {text:"Večera", value: null},
                this.varijabla
            ],

             povrce: [

                {text:"Večera", value: null},
                this.varijabla
            ],

            
        }
    
    


        
    },

    

    methods:{

 
    
      

        onclick(){
             if(this.odabirObroka.DorucakRucakVecera === "Doručak"){

                this.feedback="Odabrali ste doručak i imate na raspolaganju 5 varijanti"

              
                

        }

        else if(this.odabirObroka.DorucakRucakVecera === "Ručak"){

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