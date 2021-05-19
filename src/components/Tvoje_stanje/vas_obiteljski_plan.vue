<template>
 
    <div 
      class="calorie  p-4 mx-auto mt-5 rounded-lg  w-75 fadeInDown   "
      style="background-color: #f8f8f8; !important;  "
      
    >

    <h1 class="text-center mb-5 ">Obiteljski plan</h1>
    
    

  <b-form inline class="mx-4" >

    
   
    <b-form-group class=" mx-auto my-4" label="Dan">
          <b-form-input  class="text-center"
            style="background-color:#30CFC0; max-width:200px;"
            id="input-1"
            v-model="dani.ponedjeljak"
            disabled
            
          >
          </b-form-input>
        </b-form-group>


    
      
    <b-form-group class="mx-auto my-4" label="Doručak">
      
            <b-form class="form-control text-center mx-auto" style="width:300px;"  >
               {{Ponedjeljakdorucak.dorucak}}
        
            </b-form>
               
          
        
    </b-form-group>
   
   
  
 
    <b-form-group class="mx-auto my-4" label="Ručak">
      
            <b-form class="form-control text-center mx-auto" style="width:300px;"  >
             {{Ponedjeljakrucak.rucak}}
        
            </b-form>
               
          
        
    </b-form-group>

    
     
    <b-form-group class="mx-auto my-4" label="Večera">
      
            <b-form class="form-control text-center mx-auto" style="width:300px;"  >
             {{Ponedjeljakvecera.vecera}}
        
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
      
            <b-form class="form-control text-center mx-auto" style="width:300px;"  >
             {{Utorakdorucak.dorucak}}
        
            </b-form>
               
          
        
    </b-form-group>

    
     <b-form-group class="mx-auto my-4" label="Ručak">
      
            <b-form class="form-control text-center mx-auto" style="width:300px;"  >
             {{Utorakrucak.rucak}}
        
            </b-form>
     </b-form-group>

    
     <b-form-group class="mx-auto my-4" label="Večera">
      
            <b-form class="form-control text-center mx-auto" style="width:300px;"  >
             {{Utorakvecera.vecera}}
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
      
            <b-form class="form-control text-center mx-auto" style="width:300px;"  >
             {{Srijedadorucak.dorucak}}
        
            </b-form>
               
          
        
    </b-form-group>

    
     <b-form-group class="mx-auto my-4" label="Ručak">
      
            <b-form class="form-control text-center mx-auto" style="width:300px;"  >
             {{Srijedarucak.rucak}}
        
            </b-form>
     </b-form-group>

    
     <b-form-group class="mx-auto my-4" label="Večera">
      
            <b-form class="form-control text-center mx-auto" style="width:300px;"  >
             {{Srijedavecera.vecera}}
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
      
            <b-form class="form-control text-center mx-auto" style="width:300px;"  >
             {{}}
        
            </b-form>
               
          
        
    </b-form-group>

    
     <b-form-group class="mx-auto my-4" label="Ručak">
      
            <b-form class="form-control text-center mx-auto" style="width:300px;"  >
             {{}}
        
            </b-form>
     </b-form-group>

    
     <b-form-group class="mx-auto my-4" label="Večera">
      
            <b-form class="form-control text-center mx-auto" style="width:300px;"  >
             {{}}
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
      
            <b-form class="form-control text-center mx-auto" style="width:300px;"  >
             {{}}
        
            </b-form>
               
          
        
    </b-form-group>

    
     <b-form-group class="mx-auto my-4" label="Ručak">
      
            <b-form class="form-control text-center mx-auto" style="width:300px;"  >
             {{}}
        
            </b-form>
     </b-form-group>

    
     <b-form-group class="mx-auto my-4" label="Večera">
      
            <b-form class="form-control text-center mx-auto" style="width:300px;"  >
             {{}}
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
      
            <b-form class="form-control text-center mx-auto" style="width:300px;"  >
             {{}}
        
            </b-form>
               
          
        
    </b-form-group>

    
     <b-form-group class="mx-auto my-4" label="Ručak">
      
            <b-form class="form-control text-center mx-auto" style="width:300px;"  >
             {{}}
        
            </b-form>
     </b-form-group>

    
     <b-form-group class="mx-auto my-4" label="Večera">
      
            <b-form class="form-control text-center mx-auto" style="width:300px;"  >
             {{}}
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
      
            <b-form class="form-control text-center mx-auto" style="width:300px;"  >
             {{}}
        
            </b-form>
               
          
        
    </b-form-group>

    
     <b-form-group class="mx-auto my-4" label="Ručak">
      
            <b-form class="form-control text-center mx-auto" style="width:300px;"  >
             {{}}
        
            </b-form>
     </b-form-group>

    
     <b-form-group class="mx-auto my-4" label="Večera">
      
            <b-form class="form-control text-center mx-auto" style="width:300px;"  >
             {{}}
            </b-form>
     </b-form-group>

    
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

            Ponedjeljakdorucak:{},
            Ponedjeljakrucak:{},
            Ponedjeljakvecera:{},

            Utorakdorucak:{},
            Utorakrucak:{},
            Utorakvecera:{},

            Srijedadorucak:{},
            Srijedarucak:{},
            Srijedavecera:{},

            Cetvrtakdorucak:{},
            Cetvrtakrucak:{},
            Cetvrtakvecera:{},

            Petakdorucak:{},
            Petakrucak:{},
            Petakvecera:{},

            Subotadorucak:{},
            Subotarucak:{},
            Subotavecera:{}
        



          
        
    


        }
        
         },
         created() {
            this.pozoviBackend();
},

  methods:{

    async pozoviBackend(){
      
      let PonedjeljakdorucakID = "60a39dfa3e2c6f2ba83b6d58"
      let PonedjeljakrucakID = "60a39dfd3e2c6f2ba83b6d59"
      let PonedjeljakveceraID = "60a39dff3e2c6f2ba83b6d5a"

      let UtorakdorucakID = "60a39e083e2c6f2ba83b6d5b"
      let UtorakrucakID = "60a39e0e3e2c6f2ba83b6d5c"
      let UtorakveceraID = "60a39e113e2c6f2ba83b6d5d"

      let SrijedadorucakID = "60a39e163e2c6f2ba83b6d5e"
      let SrijedarucakID = "60a39e1b3e2c6f2ba83b6d5f"
      let SrijedaveceraID = "60a38c7b8d1ad63034a23671"


      this.Ponedjeljakdorucak = await NadipoId.getOne(PonedjeljakdorucakID)
      this.Ponedjeljakrucak = await NadipoId.getOne(PonedjeljakrucakID)
      this.Ponedjeljakvecera = await NadipoId.getOne(PonedjeljakveceraID)

      this.Utorakdorucak = await NadipoId.getOne(UtorakdorucakID)
      this.Utorakrucak = await NadipoId.getOne(UtorakrucakID)
      this.Utorakvecera = await NadipoId.getOne(UtorakveceraID)

      this.Srijedadorucak = await NadipoId.getOne(SrijedadorucakID)
      this.Srijedarucak = await NadipoId.getOne(SrijedarucakID)
      this.Srijedavecera = await NadipoId.getOne(SrijedaveceraID)



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






