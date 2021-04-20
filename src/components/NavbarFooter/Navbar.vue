<template>

<div class="mx-5">
  <b-navbar toggleable="lg" class="navbar rounded-lg">
      
       <b-navbar-brand >
           
       <a class="mx-3" id="befit">Family health</a>
            
      

</b-navbar-brand>


    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="mx-auto">
   
</b-navbar-nav>

      <!-- Right aligned nav items -->
      
        
<b-navbar-nav >
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em style="font-size:25px;"></em>
          </template>
          <b-dropdown-item href="#" ></b-dropdown-item>
          <b-dropdown-item href="#" ></b-dropdown-item>
          <b-dropdown-item href="#" ></b-dropdown-item>

        </b-nav-item-dropdown>
     </b-navbar-nav >
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>







export default {

  data() {
    return {
      user: null,
      
    };
  },
}
</script>

<style scoped>
.navbar {
  background-color: #009DC5;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #009DC5;
}

#befit {
  font-family: "Script MT";
  font-style: normal;
  font-weight: normal;
  font-size: 50px;
  color: #000000 !important;
  
  
  
  
}
h1{
  
  color:black;
  font-size:60px;
  font-family:"Segoe UI"; 
  font-weight: bold;
}
</style>
