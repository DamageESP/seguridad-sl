<template>
  <div id="app">
    <div class="statusBar" v-if="loading">Cargando...</div>
    <Generador />
    <hr>
    <ListaEmpleados />
  </div>
</template>

<script>
import Generador from './components/Generador'
import ListaEmpleados from './components/ListaEmpleados'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    Generador,
    ListaEmpleados,
  },
  computed: {
    ...mapState(['loading'])
  }
}
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;

  .statusBar {
    width: 100%;
    background: lightblue;
    text-align: center;
    position: sticky;
    top: 0;
  }
}
</style>
