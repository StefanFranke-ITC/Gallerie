<template>
  <div>
    <article  class="mt-n3 hidden-sm-and-down ">
      <v-row v-if="$store.state.jochenAnzeige" class=" mt-3 mx-1">
        <v-col class="d-flex justify-center" cols="3" v-for="bild in $store.state.bilderJochen" :key="bild.bild">
          <div class="pt-1 pad x">
            <p class="text-center mb-0 ">{{bild.name}}</p>

            <v-img class="bild"  :src="bild.bild" ></v-img>

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
        <v-col class="justify-center d-flex" cols="3" v-for="bild in $store.state.bilderMarina" :key="bild.bild">
          <div class="pt-1 pad x">
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

    </article>
    <article class="hidden-md-and-up pt-2">
      <h1 class="text-center mt-2">Jochen's Bilder</h1>

      <v-slide-group
          style="border-bottom: solid black 2px"
          v-model="model"
          class="pa-0"
          active-class="success"

      >
        <v-slide-item
            v-for="bild in $store.state.bilderJochen"
            :key="bild"
        >
            <div class="pt-1 pad x">
              <p class="text-center mb-0 ">{{bild.name}}</p>

              <v-img class="bild"  :src="bild.bild" ></v-img>

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
        </v-slide-item>
      </v-slide-group>

      <h1 class="text-center mt-3">Marina's Bilder</h1>

      <v-slide-group

          v-model="model"
          class="pa-0"
          active-class="success"

      >
        <v-slide-item
            v-for="bild in $store.state.bilderMarina"
            :key="bild"
        >
          <div class="pt-1 pad x">
            <p class="text-center mb-0 ">{{bild.name}}</p>

            <v-img class="bild"  :src="bild.bild" ></v-img>

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
        </v-slide-item>
      </v-slide-group>

    </article>
  </div>


</template>

<script>
export default {
  name: "GallerieView",
  data(){
    return{
      model: null,
      head:"Joche's bilder"
    }
  }
}
</script>

<style scoped>

.pad {
  display:inline-block; position:relative; z-index:1; width:300px; min-height:300px; margin:20px; padding:25px;
  border-radius:20px;
  background:linear-gradient(0.06deg, rgba(250, 250, 250, 1) 0%,
  rgba(246, 246, 246, 1) 29.62%,
  rgba(234, 234, 234, 1) 58.47%,
  rgba(215, 215, 215, 1) 86.92%,
  rgba(204, 204, 204, 1) 99.22%);
  box-shadow:-4px 8px 8px rgba(0,0,0,0.1), -8px 16px 16px rgba(0,0,0,0.1), -16px 32px 32px rgba(0,0,0,0.15), -32px 64px 64px rgba(0,0,0,0.25);
}
.pad:before {
  content:''; position:absolute; z-index:-1; top:0; left:0; right:0; bottom:0; margin:0;
}


.pad.x {
  background:linear-gradient(9deg, #acd07f 0%, #cdf595 100%);
  box-shadow:0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb,-4px 8px 8px rgba(0,0,0,0.1), -8px 16px 16px rgba(0,0,0,0.1), -16px 32px 32px rgba(0,0,0,0.15), -32px 64px 64px rgba(0,0,0,0.25);
}

.pad.x.y {
  background:linear-gradient(9deg, #acd07f 0%, #cdf595 100%);
}

article {
  min-height: 100vh;
  align-items: center;
  background-image: linear-gradient(to right, #054f7d, #00a7cf, #efe348, #861a54, #054f7d);
  background-size: 600%;
  background-position: 0 0;
  box-shadow: inset 0 0 5em rgba(0, 0, 0, 0.5);
  animation-duration: 20s;
  animation-iteration-count: infinite;
  animation-name: gradients;
}

@keyframes gradients {
  0% { background-position: 0  0; }
  25% { background-position:50% 0; }
  50% { background-position:90% 0; }
  60% { background-position:60%;   }
  75% { background-position:40%;   }
  100% { background-position: 0  0; }
}


</style>
