<template>
<div>
  <div  class="calorie p-4 mx-auto mt-5 fadeInDown  w-50 text-center" style="background-color: #f8f8f8; !important;  ">

<h1 style="font-family:Segoe UI">Muškarci</h1>


<h3 class="mt-5" style="font-family:Segoe UI">Odaberite jednu od opcija</h3>



 <b-form  class="mx-4 " >
   
    <b-input-group  class=" mx-auto my-4 " style="width:182px;">
          <b-form-select 
            
            id="input-1"
            v-model="opcija.muskarci"
            :options="muskarci"
            required
          >
          </b-form-select>

          
        </b-input-group>




 </b-form>





  </div>

  <div v-if="opcija.muskarci=='Mršavljenje' || opcija.muskarci == 'Teretana'"   class="calorie p-4 mx-auto mt-5 rounded-lg  w-50 text-center" style="background-color: #f8f8f8; !important;  ">

      <h5 v-if="opcija.muskarci=='Mršavljenje'" >Odabrali ste opciju mršavljenje,<br> da bi ste dobili
                                             plan, izračunajte svoju dnevnu kalorijsku 
                                             vrijednosti koju morate ispuniti za vaš cilj.</h5>

      <h5 v-if="opcija.muskarci=='Teretana'" >Odabrali ste opciju teretan,<br> da bi ste dobili
                                             plan, izračunajte svoju dnevnu kalorijsku 
                                             vrijednosti koju morate ispuniti za vaš cilj.</h5>

                                  


<div
      class="mt-5 mx-auto p-4"
      style="background-color: #f8f8f8; !important; max-width:450px;"
      id="masti"
    >


    <b-form @submit="onsubmit" class="text-left">
        <b-form-group id="input-group-1" label="Spol:" label-for="input-1">
          <b-form-input 
            
            id="input-1"
            v-model="spol.muskarci"
            disabled
            required>
            
        </b-form-input>
        </b-form-group>
        <b-form-group  id="input-group-1" label="Aktivnost:" label-for="input-1">
          <b-form-input 
            v-if="opcija.muskarci=='Mršavljenje'"
            id="input-1"
            disabled
            v-model="spol.aktivnost_m"
            required
          >
          </b-form-input>

           <b-form-input 
            v-if="opcija.muskarci=='Teretana'"
            id="input-1"
            disabled
            v-model="spol.aktivnost_t"
            required
          >
          </b-form-input>

        


        </b-form-group>
        <b-form-group
          
          
          id="input-group-2"
          label="Unesite težinu (kg):"
          label-for="input-2"
        >
          <b-form-input
            v-model="form.tezina"
            type="number"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-1" label="Unesite visinu (cm):" label-for="input-1">
          <b-form-input
           v-model="form.visina"
            id="input-1"
            type="number"
            
            required
          >
          </b-form-input>
        </b-form-group>
        <b-form-group id="input-group-1" label=" Unesite dob:" label-for="input-1">
          <b-form-input
           v-model="form.dob"
            id="input-1"
            type="number"
           
            required
          >
          </b-form-input>
        </b-form-group>
       <b-button v-on:click="jeSakriven = true"  type="sumbit" size="lg" variant="background-color:#30CFC0; !important; font-family:Segoe UI; " style="font-family:Segoe UI; color:white; border-radius:40px; ; background-color:#30CFC0; !important;">Izračunaj</b-button>


        
        
      </b-form>

</div>
  </div>


  <div v-if="opcija.muskarci=='Mršavljenje' && jeSakriven && rezultat1 !== 0 || opcija.muskarci == 'Teretana'  && jeSakriven && rezultat2 !== 0" class="calorie p-4 mx-auto mt-5 rounded-lg  w-50 text-center" style="background-color: #f8f8f8; !important;  ">

<h5 v-if="opcija.muskarci=='Mršavljenje' && rezultat1>500 && rezultat1<6000">Vaš dnevni unos kalorija mora biti {{rezultat1.toFixed(0)}}<br> i sljedeće namirnice koje bi trebali konzumirati su:</h5>
<h5 v-if="opcija.muskarci=='Teretana' && rezultat2>500 && rezultat2<6000">Vaš dnevni unos kalorija mora biti {{rezultat2.toFixed(0)}}<br> i sljedeće namirnice koje bi trebali konzumirati su:</h5>

<p style="font-size:25px; color:red;">{{feedback}}</p>


 <b-card v-if="rezultat1 !== 0 && rezultat1>500 && rezultat1<6000 || rezultat2 !== 0 && rezultat2>500 && rezultat2<6000"
        
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

            jeSakriven:false,

            feedback:"",

            rezultat1:0,
            rezultat2:0,
            rezultat3:0,
            rezultat4:0,
            rezultat5:0,

            spol: {

                muskarci:"Muškarci",
                aktivnost_m: "Mršavljenje",
                aktivnost_t: "Teretana",
               
            },

        
            opcija: {
                zene:null,
                muskarci:null,
                djeca:null
            },



            muskarci: [

                {text:"-- Odaberite cilj --", value:null},
                "Mršavljenje",
                "Teretana"
               

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

            if(this.opcija.muskarci == "Mršavljenje") {
                this.rezultat1 = (((this.form.tezina*9)+(this.form.visina*6.25)-(this.form.dob*5)+5))*1.2
            

                    if(this.rezultat1 < 500 || this.rezultat1 > 6000 ){
                  return this.feedback = "Krivo uneseni podaci, pokušajte ponovno"
            }
            else{this.feedback=""}
            }
            
            


            if (this.opcija.muskarci == "Teretana"){
                this.rezultat2 = (((this.form.tezina*10)+(this.form.visina*6.25)-(this.form.dob*5)+5))*1.9


                    if(this.rezultat2 < 500 || this.rezultat2 > 6000 ){
                  return this.feedback = "Krivo uneseni podaci, pokušajte ponovno"
            }
            else{this.feedback=""}
            
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