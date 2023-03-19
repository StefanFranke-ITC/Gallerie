<template>
<div class="header">
<v-row>
  <v-col class="d-flex justify-end">
    <v-btn v-if="$route.name ==='gallerie'" style="background-color: #2C3E50" class="white--text mt-7 ml-3" @click="$store.state.jochenAnzeige = true;$store.state.marinaAnzeige = false; $store.state.head = 'Jochen´s Bilder' "> Jochens bilder</v-btn>
      <v-spacer></v-spacer>
    <img style="cursor: pointer" @click="$router.push('/')" height="88px" width="88px" src="../assets/logo.png" >
  </v-col>
  <v-col style="cursor: pointer" @click="$router.push('/')" class="d-flex justify-center mt-7">
    <h1 v-if="$route.name === 'home'">Franke - Arts</h1>
    <h1 v-if="$route.name === 'gallerie'">{{ $store.state.head }}</h1>

  </v-col>
  <v-col class="d-flex justify-start">
    <img style="cursor: pointer" @click="$router.push('/')" height="88px" width="88px" src="../assets/logo.png" >
    <v-spacer></v-spacer>
    <v-btn v-if="$route.name ==='gallerie'" style="background-color: #BDC3C7" class="mt-7 mr-3" @click="$store.state.marinaAnzeige = true;$store.state.jochenAnzeige = false ; $store.state.head = 'Marina´s Bilder'"> Marinas bilder</v-btn>
  </v-col>
</v-row>
</div>
</template>

<script>
export default {
  name: "HeaderComponent"
}
</script>

<style scoped>
.header{
  height: 90px;
  background-color:#E67E22;
  box-shadow: 1px 2px 8px #383838;
  z-index: 900;
}
</style>
