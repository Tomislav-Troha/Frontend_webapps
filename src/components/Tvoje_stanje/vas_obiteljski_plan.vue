<template>
 
    <div 
      class="calorie  p-4 mx-auto mt-5 rounded-lg  w-75 fadeInDown   "
      style="background-color: #f8f8f8; !important;  "
      
    >

    <h1 class="text-center mb-5 ">Obiteljski plan</h1>
    
    

  <b-form inline class="mx-4" >

    
   
    <b-form-group class=" mx-auto my-4" label="Dan">
          <b-form-input  class="text-center"
            style="background-color:#30CFC0; width:200px; max-width:100%;"
            id="input-1"
            v-model="dani.ponedjeljak"
            disabled
            
          >
          </b-form-input>
        </b-form-group>


    
      
    <b-form-group class="mx-auto my-4" label="Doručak">
      
            <b-form class="form-control text-center mx-auto" style="width:300px; min-height:38px; max-width:100%;"  >
               {{Ponedjeljakdorucak.dorucak}}
        
            </b-form>
               
          
        
    </b-form-group>
   
   
  
 
    <b-form-group class="mx-auto my-4" label="Ručak">
      
            <b-form class="form-control text-center mx-auto" style="width:300px; min-height:38px; max-width:100%;"  >
             {{Ponedjeljakdorucak.rucak}}
        
            </b-form>
               
          
        
    </b-form-group>

    
     
    <b-form-group class="mx-auto my-4" label="Večera">
      
            <b-form class="form-control text-center mx-auto" style="width:300px; min-height:38px;  max-width:100%;"  >
             {{Ponedjeljakdorucak.vecera}}
        
            </b-form>
               
          
        
    </b-form-group>
    
  </b-form>


<b-form inline class="mx-4">
    
    <b-form-group class=" mx-auto my-4" label="Dan">
          <b-form-input  class="text-center"
            style="background-color:#30CFC0; max-width:200px;"
            id="input-1"
            v-model="dani.utorak"
            disabled
            
          >
          </b-form-input>
        </b-form-group>

    
    <b-form-group class="mx-auto my-4" label="Doručak">
      
            <b-form class="form-control text-center mx-auto" style="width:300px; min-height:38px; max-width:100%; height:auto;">
             {{Utorakdorucak.dorucak}}
        
            </b-form>
               
          
        
    </b-form-group>

    
     <b-form-group class="mx-auto my-4" label="Ručak">
      
            <b-form class="form-control text-center mx-auto" style="width:300px; min-height:38px; max-width:100%; height:auto;">
             {{Utorakdorucak.rucak}}
        
            </b-form>
     </b-form-group>

    
     <b-form-group class="mx-auto my-4" label="Večera">
      
            <b-form class="form-control text-center mx-auto" style="width:300px; min-height:38px; max-width:100%; height:auto;"  >
             {{Utorakdorucak.vecera}}
            </b-form>
     </b-form-group>

    
  </b-form>


  <b-form inline class="mx-4">
    
    <b-form-group class=" mx-auto my-4" label="Dan">
          <b-form-input  class="text-center"
            style="background-color:#30CFC0; max-width:200px;"
            id="input-1"
            v-model="dani.srijeda"
            disabled
            
          >
          </b-form-input>
        </b-form-group>

    
    <b-form-group class="mx-auto my-4" label="Doručak">
      
            <b-form class="form-control text-center mx-auto" style="width:300px; min-height:38px; max-width:100%; height:auto;"  >
             {{Srijedadorucak.dorucak}}
        
            </b-form>
               
          
        
    </b-form-group>

    
     <b-form-group class="mx-auto my-4" label="Ručak">
      
            <b-form class="form-control text-center mx-auto" style="width:300px; min-height:38px; max-width:100%; height:auto;"  >
             {{Srijedadorucak.rucak}}
        
            </b-form>
     </b-form-group>

    
     <b-form-group class="mx-auto my-4" label="Večera">
      
            <b-form class="form-control text-center mx-auto" style="width:300px; min-height:38px; max-width:100%; height:auto;"  >
             {{Srijedadorucak.vecera}}
            </b-form>
     </b-form-group>

    
  </b-form>




  <b-form inline class="mx-4">
    
    <b-form-group class=" mx-auto my-4" label="Dan">
          <b-form-input  class="text-center"
            style="background-color:#30CFC0; max-width:200px;"
            id="input-1"
            v-model="dani.cetvrtak"
            disabled
            
          >
          </b-form-input>
        </b-form-group>

    
    <b-form-group class="mx-auto my-4" label="Doručak">
      
            <b-form class="form-control text-center mx-auto" style="width:300px; min-height:38px; max-width:100%; height:auto;"  >
             {{Cetvrtakdorucak.dorucak}}
        
            </b-form>
               
          
        
    </b-form-group>

    
     <b-form-group class="mx-auto my-4" label="Ručak">
      
            <b-form class="form-control text-center mx-auto" style="width:300px; min-height:38px; max-width:100%; height:auto;"  >
             {{Cetvrtakdorucak.rucak}}
        
            </b-form>
     </b-form-group>

    
     <b-form-group class="mx-auto my-4" label="Večera">
      
            <b-form class="form-control text-center mx-auto" style="width:300px; min-height:38px; max-width:100%;  height:auto;"  >
             {{Cetvrtakdorucak.vecera}}
            </b-form>
     </b-form-group>

    
  </b-form>



  <b-form inline class="mx-4">
    
    <b-form-group class=" mx-auto my-4" label="Dan">
          <b-form-input  class="text-center"
            style="background-color:#30CFC0; max-width:200px;"
            id="input-1"
            v-model="dani.petak"
            disabled
            
          >
          </b-form-input>
        </b-form-group>

    
    <b-form-group class="mx-auto my-4" label="Doručak">
      
            <b-form class="form-control text-center mx-auto" style="width:300px; min-height:38px; max-width:100%; height:auto;"  >
             {{Petakdorucak.dorucak}}
        
            </b-form>
               
          
        
    </b-form-group>

    
     <b-form-group class="mx-auto my-4" label="Ručak">
      
            <b-form class="form-control text-center mx-auto" style="width:300px; min-height:38px; max-width:100%; height:auto;"  >
             {{Petakdorucak.rucak}}
        
            </b-form>
     </b-form-group>

    
     <b-form-group class="mx-auto my-4" label="Večera">
      
            <b-form class="form-control text-center mx-auto" style="width:300px; min-height:38px; max-width:100%; height:auto;"  >
             {{Petakdorucak.vecera}}
            </b-form>
     </b-form-group>

    
  </b-form>


  <b-form inline class="mx-4">
    
    <b-form-group class=" mx-auto my-4" label="Dan">
          <b-form-input  class="text-center"
            style="background-color:#30CFC0; max-width:200px;"
            id="input-1"
            v-model="dani.subota"
            disabled
            
          >
          </b-form-input>
        </b-form-group>

    
    <b-form-group class="mx-auto my-4" label="Doručak">
      
            <b-form class="form-control text-center mx-auto" style="width:300px; min-height:38px; max-width:100%; height:auto;"  >
             {{Subotadorucak.dorucak}}
        
            </b-form>
               
          
        
    </b-form-group>

    
     <b-form-group class="mx-auto my-4" label="Ručak">
      
            <b-form class="form-control text-center mx-auto" style="width:300px; min-height:38px; max-width:100%; height:auto;"  >
             {{Subotadorucak.rucak}}
        
            </b-form>
     </b-form-group>

    
     <b-form-group class="mx-auto my-4" label="Večera">
      
            <b-form class="form-control text-center mx-auto" style="width:300px; min-height:38px; max-width:100%; height:auto;"  >
             {{Subotadorucak.vecera}}
            </b-form>
     </b-form-group>

    
  </b-form>


  <b-form inline class="mx-4">
    
    <b-form-group class=" mx-auto my-4" label="Dan">
          <b-form-input  class="text-center"
            style="background-color:#30CFC0; max-width:200px;"
            id="input-1"
            v-model="dani.nedjelja"
            disabled
            
          >
          </b-form-input>
        </b-form-group>

    
    <b-form-group class="mx-auto my-4" label="Doručak">
      
            <b-form class="form-control text-center mx-auto" style="width:300px; min-height:38px; max-width:100%; height:auto;"  >
             {{Nedjeljadorucak.dorucak}}
        
            </b-form>
               
          
        
    </b-form-group>

    
     <b-form-group class="mx-auto my-4" label="Ručak">
      
            <b-form class="form-control text-center mx-auto" style="width:300px; min-height:38px; max-width:100%; height:auto;"  >
             {{Nedjeljadorucak.rucak}}
        
            </b-form>
     </b-form-group>

    
     <b-form-group class="mx-auto my-4" label="Večera">
      
            <b-form class="form-control text-center mx-auto" style="width:300px; max-width:100%; min-height:38px; height:auto;"  >
            {{Nedjeljadorucak.vecera}}
            </b-form>
     </b-form-group>

    
  </b-form>



    
  
   



      


    </div>
  

</template>


<script>

import {NadipoId} from "@/services"

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

            Ponedjeljakdorucak:{},

            Utorakdorucak:{},

            Srijedadorucak:{},

            Cetvrtakdorucak:{},

            Petakdorucak:{},

            Subotadorucak:{},

            Nedjeljadorucak:{},

        }
        
         },
         created() {
            this.pozoviBackend();
},

  methods:{

    async pozoviBackend(){
      
      let PonedjeljakdorucakID = "60a39dfa3e2c6f2ba83b6d58"


      let UtorakdorucakID = "60a39e083e2c6f2ba83b6d5b"


      let SrijedadorucakID = "60a39e163e2c6f2ba83b6d5e"

      let CetvrtakdorucakID = "60a39e203e2c6f2ba83b6d60"

      let PetakdorucakID = "60a39e273e2c6f2ba83b6d63"

      let SubotadorucakID = "60a4116709b3a991da95d8b5"

      let NedjeljadorucakID = "60a56a2ecc15356506973c02"



      this.Ponedjeljakdorucak = await NadipoId.getOne(PonedjeljakdorucakID)

      this.Utorakdorucak = await NadipoId.getOne(UtorakdorucakID)

      this.Srijedadorucak = await NadipoId.getOne(SrijedadorucakID)

      this.Cetvrtakdorucak = await NadipoId.getOne(CetvrtakdorucakID)

      this.Petakdorucak = await NadipoId.getOne(PetakdorucakID)

      this.Subotadorucak = await NadipoId.getOne(SubotadorucakID)

      this.Nedjeljadorucak = await NadipoId.getOne(NedjeljadorucakID)




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






