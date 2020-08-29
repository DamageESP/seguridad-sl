<template>
  <main class="com-generador">
    <h2>Añadir/editar empleado</h2>
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
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 40px;
  box-shadow: 0px 0px 35px rgba(0, 0, 0, .3), 0px 0px 150px rgba(255, 255, 255, .6) inset;
  background: rgba(76, 0, 255, 0.05);
}
</style>