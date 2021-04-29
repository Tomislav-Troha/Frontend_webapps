<template>
    
<div>

     <div  class="calorie p-4 mx-auto mt-5 rounded-lg  w-75" style="background-color: #f8f8f8; !important;  ">

<b-form inline>

<b-button  class="rounded-lg  mx-auto  " style="font-size:20px; width:300px; height:80px;" variant="info" >Radni tjedan</b-button>
<b-button  class="rounded-lg  mx-auto" style="font-size:20px; width:300px; height:80px;" variant="info" >Vikend </b-button>
<b-button  class="rounded-lg mx-auto" style="font-size:20px; width:300px; height:80px;" variant="info" >Odaberi sam</b-button>


</b-form>






     </div>


     <br><br>

<div  class="calorie container  p-4 mx-auto mt-5 rounded-lg " style="background-color: #f8f8f8; !important;  ">

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
            v-model="odabirJela.hrana"
            :options="hrana"
            required
          >
          </b-form-select>
        </b-input-group>


        <b-input-group v-if="odabirObroka.DorucakRucakVecera" class=" mx-auto my-4 " style="width:210px;">
          <b-form-select 
            
            id="input-1"
            v-model="odabirJela.hrana"
            :options="hrana"
            required
          >
          </b-form-select>
        </b-input-group>

        <b-input-group v-if="odabirJela.hrana" class=" mx-auto my-4 " style="width:210px;">
          <b-form-select 
            
            id="input-1"
            v-model="vrsteHrane.mlijecni_proizvodi"
            :options="mlijecni_proizvodi"
            required
          >
          </b-form-select>
        </b-input-group>

<b-button v-if="vrsteHrane.mlijecni_proizvodi"  class="rounded-lg  mx-auto  " style="font-size:20px; width:200px; height:60px;" variant="info" >Spremi</b-button>

        
</b-form>







</div>





</div>
</template>

<script>



export default {

    data(){

         
        
        return{

            feedback:null,

            radni_tjedan: {
                 dan:null,            
            },

            odabirObroka: {
                DorucakRucakVecera:null,
            },

            odabirJela: {
                hrana:null
            },

            vrsteHrane: {
                mlijecni_proizvodi:null

            },





            mlijecni_proizvodi:[
                {text:"Odaberi jedan ", value:null},
                "Mlijeko",
                "Jogurt"
            ],

            
            hrana:[
                {text:"Odaberi vrstu hrane", value:null},
                "Mliječni proizvodi",
                "Kruh"
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
            
           

            

            meso: [
                 {text:"Ručak", value: null},
                 this.meso="1234"
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

                this.feedback="Odabrali ste doručak i imate na raspolaganju dvije vrste hrane"
                

        }
        else{
            this.feedback=null
        }
        }

       

    }

    
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