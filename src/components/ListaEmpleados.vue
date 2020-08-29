<template>
  <div class="com-lista-empleados">
    <div class="conAcceso">
      <h3>Con acceso</h3>
      <div class="gridArea">
        <template v-if="empleadosConAcceso.length">
          <Empleado v-for="(empleado, i) in empleadosConAcceso" :key="i" :empleado="empleado" />
        </template>
        <span class="noItems" v-else>No hay empleados con acceso todavía</span>
      </div>
    </div>
    <div class="sinAcceso">
      <h3>Sin acceso</h3>
      <div class="gridArea">
        <template v-if="empleadosSinAcceso.length">
          <Empleado v-for="(empleado, i) in empleadosSinAcceso" :key="i" :empleado="empleado" />
        </template>
        <span class="noItems" v-else>No hay empleados sin acceso todavía</span>
      </div>
    </div>
  </div>
</template>

<script>
import Empleado from './Empleado'
import { mapState } from 'vuex'

export default {
  name: 'ListaEmpleados',
  components: {
    Empleado,
  },
  filters: {
    adminFormat(isAdmin) {
      return isAdmin === 'true' ? 'Con permisos' : 'Sin permisos'
    }
  },
  computed: {
    ...mapState(['empleados']),
    empleadosSinAcceso() {
      return this.empleados.filter(e => e.admin === 'false')
    },
    empleadosConAcceso() {
      return this.empleados.filter(e => e.admin === 'true')
    }
  }
}
</script>

<style lang="scss" scoped>
.com-lista-empleados {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 40px;

  @media screen and (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }

  h3 {
    text-align: center;
  }

  .conAcceso,
  .sinAcceso {
    max-width: 300px;
    width: 300px;

    .gridArea {
      display: grid;
      row-gap: 15px;

      .noItems {
        text-align: center;
      }
    }
  }
}
</style>