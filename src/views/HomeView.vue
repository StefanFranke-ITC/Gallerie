<template>
  <div class="home">

    <div v-if="marina" class="rechts Marina">
      <v-row  style="height: 90vh; width: 100%; position: absolute" class="align-end mx-2">
        <v-col  cols="6">
          <div class="d-flex justify-center " style="margin-bottom: 160px">
            <p v-if="jochen== false" class=" text-center">
              Marina Franke ist eine abstrakte und realistische Künstlerin, die sich auf die Verwendung der "Pouring"-Methode spezialisiert hat, aber auch realistische Figuren in ihren Werken darstellt. Geboren im Jahr 1961, wuchs sie in Russland auf und absolvierte eine Ausbildung zur Friseurin. Nach vielen Jahren in dieser Branche entschied sie sich, ihren künstlerischen Neigungen zu folgen.

              Heute lebt und arbeitet Marina Franke in Baltersweiler, wo sie in ihrem Atelier faszinierende Kunstwerke schafft. Ihre Werke zeichnen sich durch eine Kombination aus realistischen Figuren und abstrakten Hintergründen aus, die mit der "Pouring"-Methode erzeugt werden. Diese Technik verleiht ihren Werken ein besonderes Flair und eine einzigartige Atmosphäre.

              Marina Franke ist auch eine Liebhaberin der Natur und bevorzugt gemütliche Ambiente. Diese Einflüsse spiegeln sich oft in ihren Werken wieder und geben ihnen eine zusätzliche Ebene von Harmonie und Frieden.
              Neben ihrer künstlerischen Arbeit engagiert sie sich auch als Kunstlehrerin an einer privaten Schule, wo sie Kindern die Kunst näherbringt und ihnen zeigt, wie sie ihre kreativen Fähigkeiten entfalten können. Durch ihr Engagement als Lehrerin gibt Marina Franke ihr Wissen und ihre Erfahrung weiter und trägt dazu bei, eine neue Generation von Künstlern zu inspirieren und zu fördern.
              Marina Franke hat bereits an verschiedenen Kunstausstellungen und -wettbewerben teilgenommen und hat eine wachsende Fangemeinde für ihre Werke aufgebaut.
            </p>
          </div>
        </v-col>
        <v-col style="height: 100%" class="mb-0 pb-0 d-flex justify-end align-end mt-3" cols="6">
          <img style="transform: scaleX(-1)" width="320px" height="460px" src="../assets/Mama.png">

        </v-col>
      </v-row>
      <div v-if="jochen" class="links Jochen">
        <img class="ml-n12 mt-n16" width="550px" height="740px" src="../assets/Jochen.png">

      </div>
    </div>
    <div v-if="marina == false " class="rechtsKomplett">
      <v-row class="mx-2">
        <v-col class="mt-3" cols="6">
          <img style="margin-top:-94px" class="ml-n12" width="550px" height="740px" src="../assets/Jochen.png">

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
</template>

<script>


export default {
  name: 'HomeView',
  data(){
    return{
      jochen: true,
      marina: true,
    }
  },
  components: {
  }
}
</script>

<style scoped>
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
.galerie{
  color: white;
  background: #E67E22 !important;
  position: absolute;
  top:50%;
  left:45%;
}
</style>
