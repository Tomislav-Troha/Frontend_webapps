<template>
    
     <div 
      class="calorie w-75  p-4 mx-auto mt-5  "
      style="background-color: #f8f8f8; !important;  ">

 <b-card-group deck >

<div class="mt-4 mx-auto w-50 my-auto " >
       <BMI></BMI>
</div>

    <b-card class="mt-4 mx-auto calorie " style="border-radius:22px; max-width:500px;"
    

      header-tag="header"
      
      title="Udio masti u tijelu"
    >

    <b-form @submit="udiomasti" class="text-left" >
        <b-form-group id="input-group-1" label="Spol:" label-for="input-1">
          <b-form-select
            
           
            v-model="form.spol"
            :options="spol"
            required>
            
          </b-form-select>
        </b-form-group>
        <b-form-group  id="input-group-1" label="Dob:" label-for="input-1">
          <b-form-input 
            
            
            v-model="form.dob"
            required
          >
          </b-form-input>

        </b-form-group>
        <b-form-group
          
          
          id="input-group-2"
          label="Unesite visinu (cm):"
          label-for="input-2"
        >
          <b-form-input
           v-model="form.tjelesna_visina"
            type="number"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-1" label="Opseg struka (cm):" label-for="input-1">
          <b-form-input
           v-model="form.opseg_struka"
           
            type="number"
            
            required
          >
          </b-form-input>
        </b-form-group>
        <b-form-group id="input-group-1" label="Opseg vrata (cm):" label-for="input-1">
          <b-form-input
           v-model="form.opseg_vrata"
            
            type="number"
           
            required
          >
          </b-form-input>
        </b-form-group>
    <b-button type="submit" size="lg" class="mt-5 " style=" width:160px; font-family:Segoe UI; color:white; border-radius:30px; ; background-color:#30CFC0; !important;"  variant=" border-radius:30px; background-color:#30CFC0; !important;" >Izračunaj</b-button>

<p v-if="status_masti">Status: <strong>{{status_masti}}</strong></p>
<p v-if="solution">Udio masti iznosi: <strong>{{solution.toFixed(2)}}</strong></p>
        
        
      </b-form>
     
    </b-card>   

 </b-card-group>




 


     </div>






</template>


<script>

import BMI from '@/components/Tvoje_stanje/BMI'


export default {
    components:{BMI},
    data(){
        return{

            solution: 0,
            rezultat1:0,
            status_masti:"",

            form: {
                spol:null,
                dob:"",
                tjelesna_visina:"",
                opseg_struka:"",
                opseg_vrata:""
            },

            spol: [{text: "Odaberite spol: "}, "Muško", "Žensko"],
            
        }
    },

    methods:{

        udiomasti(evt){
            evt.preventDefault();
            JSON.stringify(this.form);

            
       if (this.form.spol === "Muško") {
        this.solution =
          495 /
            (1.0324 -
              0.19077 *
                Math.log10(this.form.opseg_struka - this.form.opseg_vrata) +
              0.15456 * Math.log10(this.form.tjelesna_visina)) -
          450;

        if (this.solution < 2) {
          return (this.status_masti = "Krivo uneseni podaci");
        } else if (this.solution > 2 && this.solution < 5) {
          return (this.status_masti =
            "”Esencijalna mast“ - minimalna količina masti potrebna za preživljavanje – sve manje od toga može dovesti do težih posljedica po zdravlje. Baš iz tog razloga bodybuilderi takvu nisku razinu masti imaju samo pred natjecanje, a ostatak vremena je održavaju više kako bi mogli normalno funkcionirati.");
        } else if (
          (this.solution > 6 && this.solution < 13) ||
          (this.solution > 14 && this.solution < 17)
        ) {
          return (this.status_masti =
            "Udio masnog tkiva u Vašem tijelu, osim što se ne odražava negativno na zdravlje, omogućuje Vam i prihvatljiv izgled.");
        } else if (this.solution > 18 && this.solution < 24) {
          return (this.status_masti = "U prosječnom rasponu");
        } else if (this.solution > 25 && this.solution < 80) {
          return (this.status_masti =
            "Udio masnog tkiva u Vašem tijelu viši je od preporučenog.Povišen udio masnog tkiva uzrok je upalnih procesa koji rezultiraju mnogim zdravstvenim problemima, poput dijabetesa tipa II, kardiovaskularnih bolesti, nekih vrsta karcinoma te drugih oboljenja.");
        }
      }

      if (this.form.spol === "Žensko") {
         this.solution =
         495 /
            (1.29579 -
              0.35004 *
                Math.log10(
                  this.form.opseg_struka  - this.form.opseg_vrata + 90
                ) +
              0.221 * Math.log10(this.form.tjelesna_visina)) -
          450;


        if (this.solution < 10 && this.solution > 80) {
          return (this.status_masti = "Krivo uneseni podaci");
        } else if (this.solution > 10 && this.solution < 13) {
          return (this.status_masti =
            "”Esencijalna mast“ - minimalna količina masti potrebna za preživljavanje – sve manje od toga može dovesti do težih posljedica po zdravlje. Baš iz tog razloga bodybuilderi takvu nisku razinu masti imaju samo pred natjecanje, a ostatak vremena je održavaju više kako bi mogli normalno funkcionirati.");
        } else if (
          (this.solution > 14 && this.solution < 20) ||
          (this.solution > 21 && this.solution < 24)
        ) {
          return (this.status_masti =
            "Udio masnog tkiva u Vašem tijelu, osim što se ne odražava negativno na zdravlje, omogućuje Vam i prihvatljiv izgled.");
        } else if (this.solution > 25 && this.solution < 31) {
          return (this.status_masti = "U prosječnom rasponu");
        } else if (this.solution > 31 && this.solution < 80) {
          return (this.status_masti =
            "Udio masnog tkiva u Vašem tijelu viši je od preporučenog.Povišen udio masnog tkiva uzrok je upalnih procesa koji rezultiraju mnogim zdravstvenim problemima, poput dijabetesa tipa II, kardiovaskularnih bolesti, nekih vrsta karcinoma te drugih oboljenja.");
        }
      }
    
    },


            
        
    }
}
</script>





<style scoped>

.calorie {
  
  fill: rgba(196, 196, 196, 1);
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.788));
  overflow: visible;
  border-radius: 10px;
}


</style>