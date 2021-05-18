<template>
 
    <div 
      class="calorie  p-4 mx-auto mt-5 rounded-lg  w-75 fadeInDown   "
      style="background-color: #f8f8f8; !important;  "
      
    >

    <h1 class="text-center mb-5 ">Obiteljski plan</h1>
    
    

  <b-form inline class="mx-4" >
   
    <b-form-group class=" mx-auto my-4 " style="width:182px;" label="Dani u tjednu">
          <b-form-input 
            style="background-color:#30CFC0;"
            id="input-1"
            v-model="dani.ponedjeljak"
            disabled
            
          >
          </b-form-input>
        </b-form-group>


    
      
    <b-form-group class="mx-auto my-4" label="Doručak">
      
            <b-form class="form-control" style="width:250px;"  >
               {{dorucak.dorucak}}
        
            </b-form>
               
          
        
    </b-form-group>
   
   
  
 
    <b-form-group class="mx-auto my-4" label="Ručak">
      
            <b-form class="form-control" style="width:200px;"  >
             {{rucak.rucak}}
        
            </b-form>
               
          
        
    </b-form-group>

    
     
    <b-form-group class="mx-auto my-4" label="Večera">
      
            <b-form class="form-control" style="width:200px;"  >
             {{vecera.vecera}}
        
            </b-form>
               
          
        
    </b-form-group>
    
  </b-form>


<b-form inline class="mx-4">
    
    <b-input-group class="mx-auto my-4" style="width:182px;" >
          <b-form-input 
            style="background-color:#30CFC0;"
            v-model="dani.utorak"
            disabled
          >
          </b-form-input>
        </b-input-group>

    
    <b-input-group class="mx-auto my-4 " >
      <b-form-input   placeholder="Doručak"></b-form-input>
    </b-input-group>

    
    <b-input-group class="mx-auto my-4 " >
      <b-form-input   placeholder="Ručak"></b-form-input>
    </b-input-group>

    
    <b-input-group class="mx-auto my-4" >
      <b-form-input   placeholder="večera"></b-form-input>
    </b-input-group>

    
  </b-form>


  <b-form inline class="mx-4">
   
    <b-input-group class=" mx-auto my-4 " style="width:182px;">
          <b-form-input
           style="background-color:#30CFC0;"  
           v-model="dani.srijeda"
           disabled
          >
          </b-form-input>
        </b-input-group>

  
  
    <b-input-group class="mx-auto my-4" >
      <b-form-input   placeholder="Doručak"></b-form-input>
    </b-input-group>

    
    <b-input-group class="mx-auto my-4" >
      <b-form-input   placeholder="Ručak"></b-form-input>
    </b-input-group>

  
    <b-input-group class="mx-auto my-4" >
      <b-form-input   placeholder="Večera"></b-form-input>
    </b-input-group>

    
  </b-form>





  <b-form inline class="mx-4 ">
    
    <b-input-group class="mx-auto my-4  "   style="width:182px;">
          <b-form-input  
           style="background-color:#30CFC0;" 
           v-model="dani.cetvrtak"
           disabled
          >
          </b-form-input>
        </b-input-group>

    
    <b-input-group class="mx-auto my-4" >
      <b-form-input   placeholder="Doručak"></b-form-input>
    </b-input-group>

    
    <b-input-group class="mx-auto my-4" >
      <b-form-input   placeholder="Ručak"></b-form-input>
    </b-input-group>

   
    <b-input-group class="mx-auto my-4" >
      <b-form-input  placeholder="Večera"></b-form-input>
    </b-input-group>

    
  </b-form>



  <b-form inline class="mx-4">
    
    <b-input-group class="mx-auto my-4" style="width:182px;" >
          <b-form-input
            style="background-color:#30CFC0;"
            v-model="dani.petak"
            disabled
          >
          </b-form-input>
        </b-input-group>

    
    <b-input-group class="mx-auto my-4" >
      <b-form-input   placeholder="Doručak"></b-form-input>
    </b-input-group>

    <b-input-group class="mx-auto my-4" >
      <b-form-input   placeholder="Ručak"></b-form-input>
    </b-input-group>

    
    <b-input-group class="mx-auto my-4" >
      <b-form-input   placeholder="Večera"></b-form-input>
    </b-input-group>

    
  </b-form>



  <b-form inline class="mx-4">
   
    <b-input-group class="mx-auto my-4" style="width:182px;">
          <b-form-input
            style="background-color:#30CFC0;"
            v-model="dani.subota"
            disabled
          >
          </b-form-input>
        </b-input-group>

    
    <b-input-group class="mx-auto my-4" >
      <b-form-input  placeholder="Doručak"></b-form-input>
    </b-input-group>

   
    <b-input-group class="mx-auto my-4" >
      <b-form-input   placeholder="Ručak"></b-form-input>
    </b-input-group>

    
    <b-input-group class="mx-auto my-4" >
      <b-form-input  placeholder="Večera"></b-form-input>
    </b-input-group>

    
  </b-form>



  <b-form inline class="mx-4">
    
    <b-input-group class="mx-auto my-4" style="width:182px;">
          <b-form-input
            style="background-color:#30CFC0;"
            v-model="dani.nedjelja"
            disabled
          >
          </b-form-input>
        </b-input-group>

    
    <b-input-group class="mx-auto my-4" >
      <b-form-input   placeholder="Doručak"></b-form-input>
    </b-input-group>

   
    <b-input-group class="mx-auto my-4">
      <b-form-input   placeholder="Ručak"></b-form-input>
    </b-input-group>

    
    <b-input-group class="mx-auto my-4" >
      <b-form-input   placeholder="Večera"></b-form-input>
    </b-input-group>

    
  </b-form>



    
  
   



      


    </div>
  

</template>


<script>

import {spremljeneVarijenteTjedan, NadipoId} from "@/services"

export default {
    data() {
        return {

          ponDorucak:null,

            dani:{
                ponedjeljak:"Ponedjeljak",
                utorak:"Utorak",
                srijeda:"Srijeda",
                cetvrtak:"Četvrtak",
                petak:"Petak",
                subota:"Subota",
                nedjelja:"Nedjelja"
            },

            dorucak:{},
            rucak:{},
            vecera:{},


          
        
    


        }
        
         },
         created() {
            this.pozoviBackend();
},

  methods:{

    async pozoviBackend(){

      this.dorucak = await NadipoId.getOne("60a39dfa3e2c6f2ba83b6d58")
      this.rucak = await NadipoId.getOne("60a39dfd3e2c6f2ba83b6d59")
      this.vecera = await NadipoId.getOne("60a39dff3e2c6f2ba83b6d5a")

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






