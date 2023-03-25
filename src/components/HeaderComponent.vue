<template>
<div class="header">
<v-row style="max-width: 100%">
  <v-col class="d-flex justify-end">
    <v-btn  v-if="$route.name ==='gallerie'" style="background-color: #2C3E50" class="hidden-sm-and-down white--text mt-7 ml-3" @click="$store.state.jochenAnzeige = true;$store.state.marinaAnzeige = false; $store.state.head = 'Jochen´s Bilder' "> Jochens bilder</v-btn>
      <v-spacer></v-spacer>
    <img class="hidden-sm-and-down" style="cursor: pointer" @click="$router.push('/')" height="88px" width="88px" src="../assets/logo.png" >
    <img class="mt-4 hidden-md-and-up" style="cursor: pointer" @click="$router.push('/')" height="60px" width="60px" src="../assets/logo.png" >
  </v-col>
  <v-col style="cursor: pointer" @click="$router.push('/')" class="d-flex justify-center mt-7 ">
    <h1 class="hidden-sm-and-down"  v-if="$route.name === 'home'">Franke - Arts</h1>
    <h4 class="hidden-md-and-up"  v-if="$route.name === 'home'">Franke - Arts</h4>

    <h1 class="hidden-sm-and-down" v-if="$route.name === 'gallerie'">{{ $store.state.head }}</h1>

    <h1 class="hidden-sm-and-down" v-if="$route.name === 'impressum'">Impressum</h1>
    <h4 style="min-width: 110px" class="hidden-md-and-up text-center" v-if="$route.name === 'gallerie'">Gallerie</h4>
    <h4 class="hidden-md-and-up" v-if="$route.name === 'impressum'">Impressum</h4>
  </v-col>

  <v-col style=" max-width: 100%" class="mr-2 pr-0 d-flex justify-start">

    <div class="hidden-sm-and-down">
      <div  @click="$router.push('impressum')" class="d-flex justify-center align-center kontaktKnopf" >
        <stong  >Kontakt</stong>
      </div>
    </div>
    <div class="mt-4 hidden-md-and-up">
      <div  @click="$router.push('impressum')" class="d-flex justify-center align-center kontaktKnopf1" >
        <strong style="font-size: 10px !important;" >Kontakt</strong>
      </div>
    </div>

    <v-spacer class="hidden-sm-and-down"></v-spacer>
    <v-btn v-if="$route.name ==='gallerie'" style="background-color: #BDC3C7" class="hidden-sm-and-down mt-7 mr-3" @click="$store.state.marinaAnzeige = true;$store.state.jochenAnzeige = false ; $store.state.head = 'Marina´s Bilder'">
      Marinas bilder
    </v-btn>
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
.kontaktKnopf{
  border: solid black 2px;
  cursor: pointer;
  width: 88px;
  height: 88px;
  border-radius: 100%;
  background-color: silver;
  box-shadow: 2px 3px 5px black;
}
.kontaktKnopf:hover{
  border: solid black 2px;
  cursor: pointer;
  width: 88px;
  height: 88px;
  border-radius: 100%;
  background-color: silver;
  box-shadow: 2px 3px 11px black;
}
.kontaktKnopf:active{
  border: solid black 2px;
  cursor: pointer;
  width: 88px;
  height: 88px;
  border-radius: 100%;
  background-color: silver;
  box-shadow: 0px 0px 1px black;
}
.kontaktKnopf1{
  border: solid black 2px;
  cursor: pointer;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: silver;
  box-shadow: 2px 3px 5px black;
}
.kontaktKnopf1:hover{
  border: solid black 2px;
  cursor: pointer;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: silver;
  box-shadow: 2px 3px 11px black;
}
.kontaktKnopf1:active{
  border: solid black 2px;
  cursor: pointer;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: silver;
  box-shadow: 0px 0px 1px black;
}
</style>
