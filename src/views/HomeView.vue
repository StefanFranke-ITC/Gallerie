<template>

  <div >
    <div class="home Desktop hidden-sm-and-down">
      <div v-if="marina" class="rechts Marina">
        <v-row  style="height: 90vh; width: 100%; position: absolute" class="align-end mx-2">
          <v-col style="max-width: 100%" cols="6">
            <div class="d-flex justify-center " >
              <p v-if="jochen== false" style="margin-bottom: 160px" class=" text-center">
                Marina Franke ist eine abstrakte und realistische Künstlerin, die sich auf die Verwendung der "Pouring"-Methode spezialisiert hat, aber auch realistische Figuren in ihren Werken darstellt. Geboren im Jahr 1961, wuchs sie in Russland auf und absolvierte eine Ausbildung zur Friseurin. Nach vielen Jahren in dieser Branche entschied sie sich, ihren künstlerischen Neigungen zu folgen.

                Heute lebt und arbeitet Marina Franke in Baltersweiler, wo sie in ihrem Atelier faszinierende Kunstwerke schafft. Ihre Werke zeichnen sich durch eine Kombination aus realistischen Figuren und abstrakten Hintergründen aus, die mit der "Pouring"-Methode erzeugt werden. Diese Technik verleiht ihren Werken ein besonderes Flair und eine einzigartige Atmosphäre.

                Marina Franke ist auch eine Liebhaberin der Natur und bevorzugt gemütliche Ambiente. Diese Einflüsse spiegeln sich oft in ihren Werken wieder und geben ihnen eine zusätzliche Ebene von Harmonie und Frieden.
                Neben ihrer künstlerischen Arbeit engagiert sie sich auch als Kunstlehrerin an einer privaten Schule, wo sie Kindern die Kunst näherbringt und ihnen zeigt, wie sie ihre kreativen Fähigkeiten entfalten können. Durch ihr Engagement als Lehrerin gibt Marina Franke ihr Wissen und ihre Erfahrung weiter und trägt dazu bei, eine neue Generation von Künstlern zu inspirieren und zu fördern.
                Marina Franke hat bereits an verschiedenen Kunstausstellungen und -wettbewerben teilgenommen und hat eine wachsende Fangemeinde für ihre Werke aufgebaut.
              </p>
            </div>
          </v-col>
          <v-col style="height: 100%; width: 100%" class="mb-0 px-0 pb-0 d-flex justify-end align-end mt-3" cols="6">
            <img style="transform: scaleX(-1); margin-right: 10px" width="360px" height="500px" src="../assets/Mama.png">

          </v-col>
        </v-row>
        <div v-if="jochen"  class="links Jochen d-flex align-end">
          <img class="ml-n6 " width="420px" height="570" src="../assets/Jochen.png">

        </div>
      </div>
      <div v-if="marina == false " class="rechtsKomplett">
        <v-row style="height: 100%; width: 88%;" class="mx-2">
          <v-col style="max-width: 100%" class="pr-0 d-flex align-end mt-3 pb-0" cols="6">
            <img style="margin-top:-94px" class="ml-n12 " width="420px" height="570px" src="../assets/Jochen.png">

          </v-col>
          <v-col style="margin-top: 170px" cols="6">
            <div class="d-flex justify-center">
              <p class="white--text text-center">
                Jochen Franke ist ein abstrakter und moderner Künstler mit einer Vorliebe für technisches Zeichnen und Details. Geboren im Jahr 1987, wuchs er im Saarland auf und absolvierte eine Ausbildung im Bäckerhandwerk. Im Alter von 22 Jahren entschied er sich jedoch, seinen Leidenschaften zu folgen und eine Karriere als Künstler zu verfolgen.

                Heute lebt und arbeitet Jochen Franke in Baltersweiler, wo er seine Kunstwerke in seinem Atelier schafft. Seine Werke sind geprägt von klaren Linien und geometrischen Formen, die oft mit Elementen aus dem technischen Zeichnen kombiniert werden. Die Ergebnisse sind faszinierende Werke, die den Betrachter in eine Welt aus Abstraktion und moderner Kunst entführen.

                Neben seiner Leidenschaft für Kunst teilt Jochen Franke auch eine Vorliebe für Science-Fiction und Marvel. Diese Einflüsse spiegeln sich oft in seinen Werken wider und geben ihnen eine zusätzliche Ebene der Komplexität und Faszination.

                Jochen Franke hat bereits an verschiedenen Kunstausstellungen und -wettbewerben teilgenommen und hat eine wachsende Fangemeinde für seine Werke aufgebaut.
              </p>
            </div>
          </v-col>
        </v-row>
      </div>
      <v-btn v-if="jochen == true && marina == true" @click="marina = !marina" class="mehrJo">mehr über Jochen</v-btn>
      <v-btn v-if="marina == false" @click="marina = !marina" class="mehrJo">zurück</v-btn>
      <v-btn v-if="marina == true && jochen == true" @click="jochen = !jochen" class="mehrMa" > mehr über Marina </v-btn>
      <v-btn v-if="jochen == false" @click="jochen = !jochen" class="mehrMa" > zurück </v-btn>
      <v-btn v-if="marina == true && jochen == true " @click="$router.push('/gallerie')"  class="galerie"> zur Gallerie </v-btn>
    </div>


    <!-------------------------------SMARTPHONE---------------------------------------------------------------->
    <div v-if="!marina" style=" height: 100%; background-color: #1a1a1a" id="marina" class=" container hidden-md-and-up">
      <h2>Über Marina</h2>
      <p>
        Marina Franke ist eine abstrakte und realistische Künstlerin, die sich auf die Verwendung der "Pouring"-Methode spezialisiert hat, aber auch realistische Figuren in ihren Werken darstellt. Geboren im Jahr 1961, wuchs sie in Russland auf und absolvierte eine Ausbildung zur Friseurin. Nach vielen Jahren in dieser Branche entschied sie sich, ihren künstlerischen Neigungen zu folgen.

        Heute lebt und arbeitet Marina Franke in Baltersweiler, wo sie in ihrem Atelier faszinierende Kunstwerke schafft. Ihre Werke zeichnen sich durch eine Kombination aus realistischen Figuren und abstrakten Hintergründen aus, die mit der "Pouring"-Methode erzeugt werden. Diese Technik verleiht ihren Werken ein besonderes Flair und eine einzigartige Atmosphäre.

        Marina Franke ist auch eine Liebhaberin der Natur und bevorzugt gemütliche Ambiente. Diese Einflüsse spiegeln sich oft in ihren Werken wieder und geben ihnen eine zusätzliche Ebene von Harmonie und Frieden.
        Neben ihrer künstlerischen Arbeit engagiert sie sich auch als Kunstlehrerin an einer privaten Schule, wo sie Kindern die Kunst näherbringt und ihnen zeigt, wie sie ihre kreativen Fähigkeiten entfalten können. Durch ihr Engagement als Lehrerin gibt Marina Franke ihr Wissen und ihre Erfahrung weiter und trägt dazu bei, eine neue Generation von Künstlern zu inspirieren und zu fördern.
        Marina Franke hat bereits an verschiedenen Kunstausstellungen und -wettbewerben teilgenommen und hat eine wachsende Fangemeinde für ihre Werke aufgebaut.
      </p>
      <router-link  to="/gallerie">Schau dir meine Bilder an</router-link>
   </div>
    <div v-if="!jochen" style="height: 100%; ;background-color: #1a1a1a" class="container hidden-md-and-up">
      <h2>Über Jochen</h2>
      <p>
        Jochen Franke ist ein abstrakter und moderner Künstler mit einer Vorliebe für technisches Zeichnen und Details. Geboren im Jahr 1987, wuchs er im Saarland auf und absolvierte eine Ausbildung im Bäckerhandwerk. Im Alter von 22 Jahren entschied er sich jedoch, seinen Leidenschaften zu folgen und eine Karriere als Künstler zu verfolgen.

        Heute lebt und arbeitet Jochen Franke in Baltersweiler, wo er seine Kunstwerke in seinem Atelier schafft. Seine Werke sind geprägt von klaren Linien und geometrischen Formen, die oft mit Elementen aus dem technischen Zeichnen kombiniert werden. Die Ergebnisse sind faszinierende Werke, die den Betrachter in eine Welt aus Abstraktion und moderner Kunst entführen.

        Neben seiner Leidenschaft für Kunst teilt Jochen Franke auch eine Vorliebe für Science-Fiction und Marvel. Diese Einflüsse spiegeln sich oft in seinen Werken wider und geben ihnen eine zusätzliche Ebene der Komplexität und Faszination.

        Jochen Franke hat bereits an verschiedenen Kunstausstellungen und -wettbewerben teilgenommen und hat eine wachsende Fangemeinde für seine Werke aufgebaut.
      </p>
      <router-link  to="/gallerie">Schau dir meine Bilder an</router-link>
    </div>
    <div class="smartphone hidden-md-and-up">
      <article>
        <v-row style="width: 100%; height: 87vh" class="mx-0 justify-center">
          <v-col cols="10">
            <v-card class="card">
                <div style="height: 100%" class="d-flex align-end justify-end">


                  <v-img contain style="margin-top: -300px; height: 100% ;width: 90%"  src="../assets/Jochen.png"></v-img>
                  <div  class="d-flex justify-center align-center balken" @click="jochen= !jochen" >
                    <Icon style="color: rgba(255,255,255,0.68); font-size: 37px" icon="mdi:arrow-left-drop-circle" />
                  </div>

              </div>
            </v-card>
          </v-col>

          <v-col cols="10">
            <v-card class="card1">
              <div style="height: 100%" class="d-flex align-end justify-end">
                <v-img contain style="margin-top: -300px; height: 100% ;width: 90%" src="../assets/Mama.png"></v-img>

                <div class="d-flex justify-center align-center balken" @click="marina= !marina; "  >
                  <Icon style="color: rgba(255,255,255,0.68);font-size: 37px" icon="mdi:arrow-left-drop-circle" />
                </div>
              </div>

            </v-card>
          </v-col>

        </v-row>

      </article>
    </div>
  </div>

</template>

<script>

import { Icon } from '@iconify/vue2';

export default {

  name: 'HomeView',
  data(){
    return{
      jochen: true,
      marina: true,
    }
  },
  components: {
    Icon,
  },
}
</script>

<style scoped>
.galerie{
  position: absolute;
  top: 50%;
  left: 44%;
  background:#E67E22 !important;
}
.links{
  height: 90vh;
  background-color: #2C3E50;
  clip-path: polygon(0 0, 100% 0, 37% 100%, 0% 100%);
  width: 76%;
}
.rechts{
  height: 90vh;
  background-color: #BDC3C7;

}
.rechtsKomplett{
  height: 90vh;
  background-color: #2C3E50;

}
.mehrJo{
  position: absolute;
  top: 10%;
  left: 43%;
  background: #BDC3C7 !important;
}
.mehrMa{
  position: absolute;
  top: 90%;
  left: 43%;
  color: white;
  background: #2C3E50 !important;
}
ckllerie{
  color: white;
  background: #E67E22 !important;
  position: absolute;
  top:50%;
  left:45%;
}

article {
  min-height: 93vh;
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
.card{
  background-image: url("../assets/JBack.png");
  margin-top: 20px;
  width: 100vh;
  height: 100%;
  background-color: white;
  background-size: cover;
  box-shadow: 5px 5px 20px black !important;

}
.card1{
  background-image: url("../assets/MBack.png");
  margin-top: 20px;
  width: 100vh;
  height: 100%;
  background-color: white;
  background-size: cover;
  box-shadow: 5px 5px 20px #252424 !important;
}
h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: 1rem;
  font-weight: bold;
  color: #333;
}

a {
  color: #007bff;
  text-decoration: none;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
  line-height: 1.5;
  color: #9f9d9d;
}

.container {
  text-align: center;
  height: 140vh;
  max-width: 768px;
  margin: 0 auto;
  padding: 1rem;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  background-color: #fff;

}

.balken{
  height: 100%;
  width: 40px;
  background-color: rgba(0,0,0,0.31)
}
.balken:active{
  height: 100%;
  width: 40px;
  background-color: rgba(0, 0, 0, 0.73)
}



</style>
