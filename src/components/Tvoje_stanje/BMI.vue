<template>
    <div>




    <b-card class="mt-4 mx-auto calorie my-auto  " style="border-radius:22px; max-width:500px;"

      header-tag="header"
      
      title="BMI"
    >

    <b-form @submit="onBMI" class="text-left">
        <b-form-group id="input-group-1" label="Spol:" label-for="input-1">
          <b-form-select
            
           
            v-model="form.indeks_spol"
            :options="indeks_spol"
            required>
            
          </b-form-select>
        </b-form-group>
        <b-form-group  id="input-group-1" label="Dob:" label-for="input-1">
          <b-form-input 
            
            
            v-model="form.indeks_dob"
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
           v-model="form.indeks_tjelesna_visina"
            type="number"
            required
          ></b-form-input>

        </b-form-group>
        <b-form-group id="input-group-1" label="Opseg težinu (kg):" label-for="input-1">
          <b-form-input
           v-model="form.indeks_tjelesna_masa"
           
            type="number"
            
            required
          >
          </b-form-input>
        </b-form-group>
       
    <b-button type="submit" size="lg" class="mt-5 " style=" width:160px; font-family:Segoe UI; color:white; border-radius:30px; ; background-color:#30CFC0; !important;"  variant=" border-radius:30px; background-color:#30CFC0; !important;" >Izračunaj</b-button>

<p v-if="status_tjelesne_mase">Status: <strong>{{status_tjelesne_mase}}</strong></p>
<p v-if="solution_indeks">BMI iznosi: <strong>{{solution_indeks.toFixed(2)}}</strong></p>
        
        
      </b-form>
     
    </b-card>   






 


     </div>

  

</template>

<script>




export default {
    name:'Indeks',
    props:["udiomasti", "spol"],
  
    data() {
    
    return {
      solution_indeks: 0,
      status_tjelesne_mase: "",
      feedback:"",
      form: {
        indeks_spol: null,
        indeks_dob: "",
        indeks_tjelesna_visina: "",
        indeks_tjelesna_masa: ""
      },

      indeks_spol: [{ text: "Odaberi spol", value: null }, "Muško", "Žensko"],
      show: false,
    };
  
  },
  
methods: {



onBMI(evt) {
      
      evt.preventDefault();
      JSON.stringify(this.form)
      
       var solution_indeks=null

       

        if(this.form.indeks_spol==="Muško" || this.form.indeks_spol==="Žensko"){
        this.solution_indeks = this.form.indeks_tjelesna_masa /  ((this.form.indeks_tjelesna_visina/100) * (this.form.indeks_tjelesna_visina/100))
            
        if(this.solution_indeks < 2 || this.solution_indeks > 70 ){
          return this.status_tjelesne_mase="Krivo uneseni podaci"
        }    

        else if(this.solution_indeks < 18.5){
          return this.status_tjelesne_mase='Pothranjenost'
        }

        else if(this.solution_indeks > 18.5 && this.solution_indeks < 24.99 ){
          return this.status_tjelesne_mase = 'Normalna tjelesna težina'
        }

        else if(this.solution_indeks > 25 && this.solution_indeks < 29.99 ){
          return this.status_tjelesne_mase = "Povišena tjelesna težina"
        }

        else if(this.solution_indeks > 30 && this.solution_indeks < 34.99 ){
          return this.status_tjelesne_mase = "Debljina 1. razreda (gojaznost)"
        }

        else if(this.solution_indeks > 35 && this.solution_indeks < 39.99 ){
          return this.status_tjelesne_mase = "Debljina 2. razreda (gojaznost)"
        }

        else if(this.solution_indeks > 40 && this.solution_indeks < 70 ){
          return this.status_tjelesne_mase = "Debljina 3. razreda (teška gojaznost)"
        }
        
       
            
        

       
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
  border-radius: 10px;
}

</style>