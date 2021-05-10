<template>
<div>
  <div  class="calorie p-4 mx-auto mt-5 fadeInDown  w-50 text-center" style="background-color: #f8f8f8; !important;  ">

<h1 style="font-family:Segoe UI">Djeca</h1>


<h3 class="mt-5" style="font-family:Segoe UI">Odaberite jednu od opcija</h3>



 <b-form  class="mx-4 " >
   
    <b-input-group  class=" mx-auto my-4 " style="width:182px;">
          <b-form-select 
            
            id="input-1"
            v-model="opcija.djeca"
            :options="djeca"
            required
          >
          </b-form-select>

          
        </b-input-group>




 </b-form>





  </div>

  
 


  <div v-if="opcija.djeca=='1 - 3'" class="calorie p-4 mx-auto mt-5 rounded-lg  w-50 text-center" style="background-color: #f8f8f8; !important;  ">

<h5 v-if="opcija.djeca=='1 - 3'">Odabrali ste prehranu za djecu od 1-3 godine i dobili ste jedan od jelovnika: </h5>
<h5 v-if="opcija.muskarci=='Teretana'">Vaš dnevni unos kalorija mora biti {{rezultat2.toFixed(0)}}<br> i sljedeće namirnice koje bi trebali konzumirati su:</h5>

 <b-card
        
        class="text-left mx-auto "
        style="background-color:#F8F8F8;"
      >
        <b-form class="text-left">
          <b-form-group 
            id="fieldset-horizontal"
            label="Zajutrak ="
            label-for="input-horizontal"
            label-cols-sm="2"
            label-cols-lg="2"
            content-cols-sm
            content-cols-lg="4"
            
            
          >
           <strong >pecena jaja&nbsp; </strong>
           
           </b-form-group>

            <b-form-group 
            id="fieldset-horizontal"
            label="Doručak ="
            label-for="input-horizontal"
            label-cols-sm="2"
            label-cols-lg="2"
            content-cols-sm
            content-cols-lg="4"
            
            
          >
           <strong >pecena jaja&nbsp; </strong>
           
           </b-form-group>

            <b-form-group 
            id="fieldset-horizontal"
            label="Ručak ="
            label-for="input-horizontal"
            label-cols-sm="2"
            label-cols-lg="2"
            content-cols-sm
            content-cols-lg="4"
            
            
          >
           <strong >pecena jaja&nbsp; </strong>
           
           </b-form-group>

            <b-form-group 
            id="fieldset-horizontal"
            label="Užina ="
            label-for="input-horizontal"
            label-cols-sm="2"
            label-cols-lg="2"
            content-cols-sm
            content-cols-lg="4"
            
            
          >
           <strong >pecena jaja&nbsp; </strong>
           
           </b-form-group>

            <b-form-group 
            id="fieldset-horizontal"
            label="Večera ="
            label-for="input-horizontal"
            label-cols-sm="2"
            label-cols-lg="2"
            content-cols-sm
            content-cols-lg="4"
            
            
          >
           <strong >pecena jaja&nbsp; </strong>
           
           </b-form-group>

        </b-form>
 </b-card>

  </div>
</div>



    
</template>










<script>
export default {

    data(){
        return{

            rezultat1:0,
            rezultat2:0,
            rezultat3:0,
            rezultat4:0,
            rezultat5:0,

            spol: {

                djeca:"Djeca",
                aktivnost_1: "1 - 3",
                aktivnost_2: "4 - 7",
                aktivnost_3: "8 - 12"
               
            },

        
            opcija: {
                zene:null,
                muskarci:null,
                djeca:null
            },



            djeca: [

                {text:"-- Odaberite godine --", value:null},
                "1 - 3",
                "4 - 7",
                "8 - 12"
               

            ],

            form: {

                aktivnost_m: null,
                tezina:null,
                visina:null,
                dob:null

            },
        }
    },

    methods: {

        onsubmit(evt) {

            evt.preventDefault();
            JSON.stringify(this.form);

            if(this.opcija.djeca == "1 - 3") {
                this.rezultat1 = (((this.form.tezina*9)+(this.form.visina*6.25)-(this.form.dob*5)+5))*1.2
            }

            else if (this.opcija.djeca == "4 - 7"){
                this.rezultat2 = (((this.form.tezina*10)+(this.form.visina*6.25)-(this.form.dob*5)+5))*1.9

            }

            else if (this.opcija.djeca == "8 - 12"){
                this.rezultat2 = (((this.form.tezina*10)+(this.form.visina*6.25)-(this.form.dob*5)+5))*1.9

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

#masti{
   fill: rgba(196, 196, 196, 1);
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.788));
  overflow: visible;
  border-radius: 5px;
}

</style>