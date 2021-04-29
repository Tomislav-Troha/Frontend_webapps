<template>
  
<!-- Material form login -->
<div>

<div class="mx-auto container mt-5  rounded-lg login" style= "max-width:500px;">
  
  <form>
    <p class="h4 text-center mb-4 ">Prijava</p>
    <div class="grey-text mx-4">
      <mdb-input label="Email" type="email"/>
      <mdb-input label="Lozinka"  type="password"/>
    </div>
    <br>
    <div class="text-center">
      <router-link to = "/Home" > <mdb-btn class="rounded-lg">Prijava</mdb-btn></router-link>
<br><br>

<mdb-modal-footer class="mx-5 pt-3 mb-1">
            <p class="font-small grey-text d-flex justify-content-end">Niste član? <router-link to = "/Register_1" ><a href="#" class="blue-text ml-1">Registriraj te se!</a></router-link></p>
          </mdb-modal-footer>

    </div>

  </form>
  

  </div>
<br><br><br><br><br><br><br><br><br><br>
</div>
  
  <!-- Material form login -->




  
</template>


<script>



export default {
data(){
  return {
    show: true,
    name: 'Basic',
  }
}

}
    
  

</script>

<style scoped>


.login{
fill: rgba(196, 196, 196, 1);
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.788));
  overflow: visible;
  background: #F8F8F8;
}

</style>