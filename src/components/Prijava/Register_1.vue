<template>

<div>

    <div class="mx-auto container mt-5 rounded-lg register_1" style= "max-width:500px;" id="example-2">
  
  
  <transition  name="bounce">
    <div> 
      <form>
    <p style="text-style:Segoe UI" class="h4 text-center mb-5">Registracija</p>
    <div class="grey-text mx-4">
      <mdb-input label="Nadimak obitelji"  type="email"/>
      <mdb-input label="Broj članova obitelji"  type="number"/>
      <mdb-input label="E-mail"  type="email"/>
      <mdb-input label="Lozinka"  type="password"/>
    </div>
    <div class="text-center">
       <router-link to = "/Home" > <mdb-btn class="rounded-lg">Registriraj se!</mdb-btn></router-link>
<br><br>
<mdb-modal-footer class="mx-5 pt-3 mb-1">
            <p class="font-small grey-text d-flex justify-content-end">Imate račun? <router-link to = "/" ><a href="#" class="blue-text ml-1">Prijavite se!</a></router-link></p>
          </mdb-modal-footer>

    </div>
  </form>
  </div>
  </transition>
  
</div>

<br><br><br><br><br><br>
</div>

</template>


<style scoped>

.register_1{
    fill: rgba(196, 196, 196, 1);
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.788));
  overflow: visible;
  background: #F8F8F8;
}

</style>