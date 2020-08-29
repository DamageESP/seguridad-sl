<template>
  <main class="com-generador">
    <Empleado :editable="true" :empleado="currentEmpleado" />
  </main>
</template>

<script>
import Empleado from './Empleado'
import { mapState } from 'vuex'

export default {
  name: 'Generador',
  components: {
    Empleado,
  },
  computed: {
    ...mapState(['empleados', 'currentEmpleadoId']),
    currentEmpleado() {
      return this.empleados.find(e => e.id === this.currentEmpleadoId)
    }
  }
}
</script>

<style lang="scss" scoped>
.com-generador {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
</style>