<template>
  <v-app id="app">
    <HeaderComponent></HeaderComponent>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<style lang="scss">

</style>

<script>
import HeaderComponent from "@/components/HeaderComponent";

export default {
  components:{
    HeaderComponent
  }
}
</script>
