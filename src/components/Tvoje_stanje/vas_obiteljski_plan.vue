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
      
            <b-form class="form-control text-center mx-auto" style="width:300px; max-width:100%;"  >
               {{Ponedjeljakdorucak.dorucak}}
        
            </b-form>
               
          
        
    </b-form-group>
   
   
  
 
    <b-form-group class="mx-auto my-4" label="Ručak">
      
            <b-form class="form-control text-center mx-auto" style="width:300px; max-width:100%;"  >
             {{Ponedjeljakrucak.rucak}}
        
            </b-form>
               
          
        
    </b-form-group>

    
     
    <b-form-group class="mx-auto my-4" label="Večera">
      
            <b-form class="form-control text-center mx-auto" style="width:300px; max-width:100%;"  >
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
      
            <b-form class="form-control text-center mx-auto" style="width:300px; max-width:100%; height:auto;"  >
             {{Utorakdorucak.dorucak}}
        
            </b-form>
               
          
        
    </b-form-group>

    
     <b-form-group class="mx-auto my-4" label="Ručak">
      
            <b-form class="form-control text-center mx-auto" style="width:300px; max-width:100%; height:auto;"  >
             {{Utorakrucak.rucak}}
        
            </b-form>
     </b-form-group>

    
     <b-form-group class="mx-auto my-4" label="Večera">
      
            <b-form class="form-control text-center mx-auto" style="width:300px; max-width:100%; height:auto;"  >
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
      
            <b-form class="form-control text-center mx-auto" style="width:300px; max-width:100%; height:auto;"  >
             {{Srijedadorucak.dorucak}}
        
            </b-form>
               
          
        
    </b-form-group>

    
     <b-form-group class="mx-auto my-4" label="Ručak">
      
            <b-form class="form-control text-center mx-auto" style="width:300px; max-width:100%; height:auto;"  >
             {{Srijedarucak.rucak}}
        
            </b-form>
     </b-form-group>

    
     <b-form-group class="mx-auto my-4" label="Večera">
      
            <b-form class="form-control text-center mx-auto" style="width:300px; max-width:100%; height:auto;"  >
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
      
            <b-form class="form-control text-center mx-auto" style="width:300px; max-width:100%; height:auto;"  >
             {{Cetvrtakdorucak.dorucak}}
        
            </b-form>
               
          
        
    </b-form-group>

    
     <b-form-group class="mx-auto my-4" label="Ručak">
      
            <b-form class="form-control text-center mx-auto" style="width:300px; max-width:100%; height:auto;"  >
             {{Cetvrtakrucak.rucak}}
        
            </b-form>
     </b-form-group>

    
     <b-form-group class="mx-auto my-4" label="Večera">
      
            <b-form class="form-control text-center mx-auto" style="width:300px; max-width:100%;  height:auto;"  >
             {{Cetvrtakvecera.vecera}}
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
      
            <b-form class="form-control text-center mx-auto" style="width:300px; max-width:100%; height:auto;"  >
             {{Petakdorucak.dorucak}}
        
            </b-form>
               
          
        
    </b-form-group>

    
     <b-form-group class="mx-auto my-4" label="Ručak">
      
            <b-form class="form-control text-center mx-auto" style="width:300px; max-width:100%; height:auto;"  >
             {{Petakrucak.rucak}}
        
            </b-form>
     </b-form-group>

    
     <b-form-group class="mx-auto my-4" label="Večera">
      
            <b-form class="form-control text-center mx-auto" style="width:300px; max-width:100%; height:auto;"  >
             {{Petakvecera.vecera}}
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
      
            <b-form class="form-control text-center mx-auto" style="width:300px; max-width:100%; height:auto;"  >
             {{Subotadorucak.dorucak}}
        
            </b-form>
               
          
        
    </b-form-group>

    
     <b-form-group class="mx-auto my-4" label="Ručak">
      
            <b-form class="form-control text-center mx-auto" style="width:300px; max-width:100%; height:auto;"  >
             {{Subotarucak.rucak}}
        
            </b-form>
     </b-form-group>

    
     <b-form-group class="mx-auto my-4" label="Večera">
      
            <b-form class="form-control text-center mx-auto" style="width:300px; max-width:100%; height:auto;"  >
             {{Subotavecera.vecera}}
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
      
            <b-form class="form-control text-center mx-auto" style="width:300px; max-width:100%; height:auto;"  >
             {{Nedjeljadorucak.dorucak}}
        
            </b-form>
               
          
        
    </b-form-group>

    
     <b-form-group class="mx-auto my-4" label="Ručak">
      
            <b-form class="form-control text-center mx-auto" style="width:300px; max-width:100%; height:auto;"  >
             {{Nedjeljarucak.rucak}}
        
            </b-form>
     </b-form-group>

    
     <b-form-group class="mx-auto my-4" label="Večera">
      
            <b-form class="form-control text-center mx-auto" style="width:300px; max-width:100%; height:auto;"  >
            {{Nedjeljavecera.vecera}}
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
            Subotavecera:{},

            Nedjeljadorucak:{},
            Nedjeljarucak:{},
            Nedjeljavecera:{}
        

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

      let CetvrtakdorucakID = "60a39e203e2c6f2ba83b6d60"
      let CetvrtakrucakID = "60a39e213e2c6f2ba83b6d61"
      let CetvrtakveceraID = "60a39e233e2c6f2ba83b6d62"

      let PetakdorucakID = "60a39e273e2c6f2ba83b6d63"
      let PetakrucakID = "60a39e283e2c6f2ba83b6d64"
      let PetakveceraID = "60a39e2a3e2c6f2ba83b6d65"

      let SubotadorucakID = "60a4116709b3a991da95d8b5"
      let SubotarucakID = "60a569e7cc15356506973c00"
      let SubotaveceraID = "60a56a0bcc15356506973c01"

      let NedjeljadorucakID = "60a56a2ecc15356506973c02"
      let NedjeljarucakID = "60a56a4fcc15356506973c03"
      let NedjeljaveceraID = "60a56a68cc15356506973c04"


      this.Ponedjeljakdorucak = await NadipoId.getOne(PonedjeljakdorucakID)
      this.Ponedjeljakrucak = await NadipoId.getOne(PonedjeljakrucakID)
      this.Ponedjeljakvecera = await NadipoId.getOne(PonedjeljakveceraID)

      this.Utorakdorucak = await NadipoId.getOne(UtorakdorucakID)
      this.Utorakrucak = await NadipoId.getOne(UtorakrucakID)
      this.Utorakvecera = await NadipoId.getOne(UtorakveceraID)

      this.Srijedadorucak = await NadipoId.getOne(SrijedadorucakID)
      this.Srijedarucak = await NadipoId.getOne(SrijedarucakID)
      this.Srijedavecera = await NadipoId.getOne(SrijedaveceraID)

      this.Cetvrtakdorucak = await NadipoId.getOne(CetvrtakdorucakID)
      this.Cetvrtakrucak = await NadipoId.getOne(CetvrtakrucakID)
      this.Cetvrtakvecera = await NadipoId.getOne(CetvrtakveceraID)

      this.Petakdorucak = await NadipoId.getOne(PetakdorucakID)
      this.Petakrucak = await NadipoId.getOne(PetakrucakID)
      this.Petakvecera = await NadipoId.getOne(PetakveceraID)

      this.Subotadorucak = await NadipoId.getOne(SubotadorucakID)
      this.Subotarucak = await NadipoId.getOne(SubotarucakID)
      this.Subotavecera = await NadipoId.getOne(SubotaveceraID)

      this.Nedjeljadorucak = await NadipoId.getOne(NedjeljadorucakID)
      this.Nedjeljarucak = await NadipoId.getOne(NedjeljarucakID)
      this.Nedjeljavecera = await NadipoId.getOne(NedjeljaveceraID)




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






