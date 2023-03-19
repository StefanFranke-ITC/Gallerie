<template>
<div class="mt-n3 background">

  <v-row v-if="$store.state.jochenAnzeige" class="mt-3 mx-1">
    <v-col cols="3" v-for="bild in $store.state.bilderJochen" :key="bild.bild">
      <div class="pt-1 bilderRamen1">
        <p class="text-center mb-0 ">{{bild.name}}</p>
      <v-img class="bild" :src="bild.bild" ></v-img>
        <div  class="d-flex justify-center">
          <v-row>
            <v-col class="d-flex justify-center" cols="12">
            <span>
              {{bild.beschreibung}}
            </span>
            </v-col>
            <v-col class="d-flex justify-center"  cols="4">
               <span class="ml-2 mb-1">
                  {{bild.preis}}€
            </span>
            </v-col>
            <v-col class="d-flex justify-center"  cols="8">
              <span class="mr-2 mb-1">
                  {{bild.größe}}
            </span>
            </v-col>
            <v-col class="d-flex justify-center"  cols="4">
              <span class="ml-2 mb-1">
                  #{{bild.nummer}}
            </span>
            </v-col>
            <v-col class="d-flex justify-center"  cols="8">
              <span class="mr-2 mb-1">
                  {{bild.status}}
            </span>
            </v-col>
          </v-row>

        </div>
      </div>
    </v-col>
  </v-row>
  <v-row v-if="$store.state.marinaAnzeige" class="mt-3 mx-1">
    <v-col cols="3" v-for="bild in $store.state.bilderMarina" :key="bild.bild">
      <div class="pt-1 bilderRamen">
        <p class="text-center mb-0 ">{{bild.name}}</p>
        <v-img class="bild" :src="bild.bild" ></v-img>
        <div  class="d-flex justify-center">
          <v-row>
            <v-col class="d-flex justify-center" cols="12">
            <span>
              {{bild.beschreibung}}
            </span>
            </v-col>
            <v-col class="d-flex justify-center"  cols="4">
               <span class="ml-2 mb-1">
                  {{bild.preis}}€
            </span>
            </v-col>
            <v-col class="d-flex justify-center"  cols="8">
              <span class="mr-2 mb-1">
                  {{bild.größe}}
            </span>
            </v-col>
            <v-col class="d-flex justify-center"  cols="4">
              <span class="ml-2 mb-1">
                  #{{bild.nummer}}
            </span>
            </v-col>
            <v-col class="d-flex justify-center"  cols="8">
              <span class="mr-2 mb-1">
                  {{bild.status}}
            </span>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-col>
  </v-row>

</div>
</template>

<script>
export default {
  name: "GallerieView",
  data(){
    return{
      head:"Joche's bilder"
    }
  }
}
</script>

<style scoped>
.bilderRamen{
  border-radius: 4px;
  box-shadow: 5px 5px 8px grey;
  background: #d5dde0;

}
.bilderRamen1{
  border-radius: 4px;
  box-shadow: 5px 5px 8px grey;
  background: silver;
}
.background{
  background-image: url("../assets/hintergrundJ.jpeg");
  background-attachment: fixed;

}
</style>
