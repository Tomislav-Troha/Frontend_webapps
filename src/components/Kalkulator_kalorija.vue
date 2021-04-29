<template>
 
    <div 
      class="calorie  p-4 mx-auto mt-5 rounded-lg  w-75  "
      style="background-color: #f8f8f8; !important;  "
      
    >

    <h1 class="text-center mb-5 ">Kalkulator kalorija obroka</h1>
    
    

  <b-form inline class="mx-4 " >
   
    <b-input-group class=" mx-auto my-4 " style="width:182px;">
          <b-form-select 
            
            id="input-1"
            v-model="form.meso"
            :options="meso"
            required
          >
          </b-form-select>
        </b-input-group>

    
    
    <b-input-group class="mx-auto my-4" >
      <b-form-input type="number"  placeholder="Broj kalorija po porciji"></b-form-input>
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
            
            
            v-model="form.kruh"
            :options="kruh"
            required
          >
          </b-form-select>
        </b-input-group>

    
    <b-input-group class="mx-auto my-4 " >
      <b-form-input type="number"  placeholder="Broj kalorija po porciji"></b-form-input>
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

<b-form class="mx-4"> <b-button @click="pozoviBackend()" class="mx-5 my-4" pill variant="info">Izračunaj</b-button></b-form>
    
    
    <b-form inline class="py-3 mx-4">
          <b-form-input  class="mx-5 mt-5 py-4 " id="inline-form-input-username" placeholder="Ukupna vrijednost: "></b-form-input>
          <p class="mt-5">{{varijabla}}</p>
          </b-form>




      


    </div>
  

</template>


<script>

export default {
    data() {
        return {

            varijabla: '1234',

            form: {
                meso: null,
                kruh: null,
                ribe: null,
                brza_hrana: null,
                voce: null,
                povrce: null,
                mlijecni_proizvodi: null
            },

            meso: [
                 {text:"Odaberi vrstu mesa", value: null},
                
                this.varijabla
            ],

            kruh: [

                {text:"Odaberi vrstu kruha", value: null},
                this.varijabla
            ],

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
            ]
        }

        
    },

created() {
    this.pozoviBackend('http://localhost:3200/meso/1');
},

methods:{
    async pozoviBackend(adresa) {
        let response = await fetch(adresa);
        let odgovor = await response.text();

        this.varijabla = odgovor;
        
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






