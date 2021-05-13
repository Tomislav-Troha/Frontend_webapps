<template>
 
    <div 
      class="calorie  p-4 mx-auto mt-5 rounded-lg  w-75  "
      style="background-color: #f8f8f8; !important;  "
      
    >

    <h1 class="text-center mb-5 ">Kalkulator kalorija obroka</h1>
    
    

  <b-form inline class="mx-4 " >
   
    <b-input-group class=" mx-auto my-4 " style="width:182px;">
     
         <select @change="promjeniKolicinuMeso($event)" class="form-control" > <option value="" selected disabled>Odaberi meso</option> 
         <option v-for="meso in meso" :value="meso.id" :key="meso.id">{{ meso.Vrsta_mesa }}</option></select>
      
        </b-input-group>

    
    
    <b-input-group class="mx-auto my-4"  >
      
            
           <b-form-input v-model="brojporcijaPH" >
             
               
           </b-form-input>
        
    </b-input-group>

    
 
    <b-input-group class="mx-auto my-4" >
      <b-form-input type="number"   placeholder="Broj porcija"></b-form-input>
    </b-input-group>

    
     
    <b-input-group class="mx-auto my-4" >
      <b-form-input type="number"   placeholder="Ukupno kalorija"></b-form-input>
    </b-input-group>

    
  </b-form>


<b-form inline class="mx-4">
    
    <b-input-group class="mx-auto my-4" style="width:182px;" >
          <b-form-select 
            
            
            
            required
          >
          </b-form-select>
        </b-input-group>

    
    <b-input-group class="mx-auto my-4 " >
      <b-form-input type="number"  placeholder="Broj kalorija po porciji" v-model="form.kruh"></b-form-input>
    </b-input-group>

    
    <b-input-group class="mx-auto my-4 " >
      <b-form-input type="number"   placeholder="Broj porcija"></b-form-input>
    </b-input-group>

    
    <b-input-group class="mx-auto my-4" >
      <b-form-input type="number"  placeholder="Ukupno kalorija"></b-form-input>
    </b-input-group>

    
  </b-form>


  <b-form inline class="mx-4">
   
    <b-input-group class=" mx-auto my-4 " style="width:182px;">
          <b-form-select
             
            
            v-model="form.ribe"
            :options="ribe"
            required
          >
          </b-form-select>
        </b-input-group>

  
  
    <b-input-group class="mx-auto my-4" >
      <b-form-input type="number"  placeholder="Broj kalorija po porciji"></b-form-input>
    </b-input-group>

    
    <b-input-group class="mx-auto my-4" >
      <b-form-input type="number"  placeholder="Broj porcija"></b-form-input>
    </b-input-group>

  
    <b-input-group class="mx-auto my-4" >
      <b-form-input type="number"  placeholder="Ukupno kalorija"></b-form-input>
    </b-input-group>

    
  </b-form>





  <b-form inline class="mx-4 ">
    
    <b-input-group class="mx-auto my-4  "   style="width:182px;">
          <b-form-select  
            
           
            v-model="form.brza_hrana"
            :options="brza_hrana"
            required
          >
          </b-form-select>
        </b-input-group>

    
    <b-input-group class="mx-auto my-4" >
      <b-form-input type="number"  placeholder="Broj kalorija po porciji"></b-form-input>
    </b-input-group>

    
    <b-input-group class="mx-auto my-4" >
      <b-form-input type="number"  placeholder="Broj porcija"></b-form-input>
    </b-input-group>

   
    <b-input-group class="mx-auto my-4" >
      <b-form-input type="number"  placeholder="Ukupno kalorija"></b-form-input>
    </b-input-group>

    
  </b-form>



  <b-form inline class="mx-4">
    
    <b-input-group class="mx-auto my-4" style="width:182px;" >
          <b-form-select
            
            
            v-model="form.voce"
            :options="voce"
            required
          >
          </b-form-select>
        </b-input-group>

    
    <b-input-group class="mx-auto my-4" >
      <b-form-input type="number"  placeholder="Broj kalorija po porciji"></b-form-input>
    </b-input-group>

    <b-input-group class="mx-auto my-4" >
      <b-form-input type="number"  placeholder="Broj porcija"></b-form-input>
    </b-input-group>

    
    <b-input-group class="mx-auto my-4" >
      <b-form-input type="number"  placeholder="Ukupno kalorija"></b-form-input>
    </b-input-group>

    
  </b-form>



  <b-form inline class="mx-4">
   
    <b-input-group class="mx-auto my-4" style="width:182px;">
          <b-form-select
            
            
            v-model="form.povrce"
            :options="povrce"
            required
          >
          </b-form-select>
        </b-input-group>

    
    <b-input-group class="mx-auto my-4" >
      <b-form-input type="number"  placeholder="Broj kalorija po porciji"></b-form-input>
    </b-input-group>

   
    <b-input-group class="mx-auto my-4" >
      <b-form-input type="number"  placeholder="Broj porcija"></b-form-input>
    </b-input-group>

    
    <b-input-group class="mx-auto my-4" >
      <b-form-input type="number" placeholder="Ukupno kalorija"></b-form-input>
    </b-input-group>

    
  </b-form>



  <b-form inline class="mx-4">
    
    <b-input-group class="mx-auto my-4" style="width:182px;">
          <b-form-select
            
            
            v-model="form.mlijecni_proizvodi"
            :options="mlijecni_proizvodi"
            required
          >
          </b-form-select>
        </b-input-group>

    
    <b-input-group class="mx-auto my-4" >
      <b-form-input type="number"  placeholder="Broj kalorija po porciji"></b-form-input>
    </b-input-group>

   
    <b-input-group class="mx-auto my-4">
      <b-form-input type="number"  placeholder="Broj porcija"></b-form-input>
    </b-input-group>

    
    <b-input-group class="mx-auto my-4" >
      <b-form-input type="number"  placeholder="Ukupno kalorija"></b-form-input>
    </b-input-group>

    
  </b-form>
<p></p>

<b-form class="mx-4"> <b-button  class="mx-5 my-4" pill variant="info">Izračunaj</b-button></b-form>
    
    
    <b-form inline class="py-3 mx-4">
          <b-form-input  class="mx-5 mt-5 py-4 " id="inline-form-input-username" placeholder="Ukupna vrijednost: "></b-form-input>
        
          </b-form>


<div >{{odabranoMeso}}</div>



      


    </div>
  

</template>


<script>

import {Meso} from "@/services"

export default {



    data() {
        return {

            varijabla: '1234',
            brojporcijaPH: "Broj kalorija po porciji",

             form: {
               
               
                ribe: null,
                brza_hrana: null,
                voce: null,
                povrce: null,
                mlijecni_proizvodi: null
            },

            meso:{
              type: Array,
                default: () => [],
            },

              
               
           
           

           

            ribe: [

                {text:"Odaberi vrstu ribe ", value: null},
                this.varijabla
            ],

            brza_hrana: [

                {text:"Brza hrana", value: null},
                this.varijabla
            ],

             voce: [

                {text:"Voće", value: null},
                this.varijabla
            ],

             povrce: [

                {text:"Povrće", value: null},
                this.varijabla
            ],

             mlijecni_proizvodi: [

                {text:"Mliječni proizvodi", value: null},
                this.varijabla
            ],

            odabranoMeso: null
            
        }

        
    },

created() {
    this.pozoviBackend();
},

methods:{

    promjeniKolicinuMeso (event) { 

      this.odabranoMeso = event.target.options[event.target.options.selectedIndex].text },



    async pozoviBackend(term) {
        
        this.meso = await Meso.getAll(term)
        
        
    },
    
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






