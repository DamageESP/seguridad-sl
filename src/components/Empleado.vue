<template>
  <article class="empleado" :class="{editable, current}" @click="selectEmpleado">
    <template v-if="editable">
      <div class="profilePic">
        <input accept="image/*" type="file" class="editLayerInput" ref="profilePicUploadInput" @change="uploadImage" />
        <button title="Cambiar imagen" type="button" class="editLayer" @click="$refs.profilePicUploadInput.click()">
          <span>📷</span>
        </button>
        <img v-if="localProfilePic" :src="localProfilePic" :alt="localName">
        <img v-else src="placeholder.png" alt="No image">
      </div>
      <div class="fields">
        <div class="inputGroup">
          <label for="name">Nombre</label>
          <input id="name" type="text" v-model="localName" placeholder="Nombre">
        </div>
        <div class="inputGroup">
          <label for="lastname">Apellido</label>
          <input id="lastname" type="text" v-model="localLastname" placeholder="Apellido">
        </div>
        <div class="inputGroup">
          <select v-model="localAdmin">
            <option value="" disabled selected>¿Acceso?</option>
            <option value="true">Sí</option>
            <option value="false">No</option>
          </select>
        </div>
        <button type="button" @click="save" :disabled="isDisabled">
          <span>{{ empleado.id ? 'Guardar' : 'Crear' }}</span>
        </button>
        <button type="button" @click="cancel" v-if="empleado.id">
          <span>Cancelar</span>
        </button>
      </div>
    </template>
    <template v-else>
      <div class="profilePic">
        <img :src="empleado.profilePic" :alt="empleado.name">
      </div>
      <div class="fields">
        <p class="name">{{ empleado.name }}</p>
        <p class="lastname">{{ empleado.lastname }}</p>
      </div>
    </template>
  </article>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'Empleado',
  props: {
    editable: {
      type: Boolean,
      default: () => {
        return false
      },
    },
    empleado: {
      type: Object,
      default: () => {
        return {
          id: null,
          name: '',
          lastname: '',
          admin: '',
        }
      },
    },
  },
  data() {
    return {
      localName: this.empleado.name,
      localLastname: this.empleado.lastname,
      localAdmin: this.empleado.admin,
      localProfilePic: this.empleado.profilePic
    }
  },
  watch: {
    empleado(newVal) {
      this.localName = newVal.name
      this.localLastname = newVal.lastname
      this.localAdmin = newVal.admin
      this.localProfilePic = newVal.profilePic
    },
  },
  methods: {
    ...mapMutations(['setCurrentEmpleadoId', 'setLoading']),
    ...mapActions(['addEmpleadoToFirebase', 'editEmpleadoOnFirebase']),
    async save() {
      if (this.empleado.id) {
        await this.editEmpleadoOnFirebase({
          id: this.empleado.id,
          name: this.localName,
          lastname: this.localLastname,
          admin: this.localAdmin,
          profilePic: this.localProfilePic,
        })
      } else {
        await this.addEmpleadoToFirebase({
          name: this.localName,
          lastname: this.localLastname,
          admin: this.localAdmin,
          profilePic: this.localProfilePic,
        })
      }
      this.localName = ''
      this.localLastname = ''
      this.localAdmin = ''
      this.localProfilePic = ''
    },
    selectEmpleado() {
      this.setCurrentEmpleadoId(this.empleado.id)
    },
    cancel() {
      this.setCurrentEmpleadoId(null)
    },
    uploadImage() {
      if (!this.$refs.profilePicUploadInput.files.length) return
      this.setLoading(true)
      const reader = new FileReader()
      reader.onload = () => {
        const dataURL = reader.result
        this.localProfilePic = dataURL
        this.setLoading(false)
      };
      reader.readAsDataURL(this.$refs.profilePicUploadInput.files[0])
    }
  },
  computed: {
    ...mapState(['empleados', 'currentEmpleadoId']),
    isDisabled() {
      return !this.localName || !this.localLastname || !this.localAdmin || !this.localProfilePic
    },
    current() {
      return this.empleado.id === this.currentEmpleadoId && !this.editable
    },
  },
}
</script>

<style lang="scss" scoped>
.empleado {
  border: 1px solid black;
  padding: 15px;
  display: flex;

  &.editable {
    .profilePic {
      width: 150px;
      height: 150px;

      &:hover > .editLayer {
        display: block;
      }
    }
  }

  &.current {
    background: #e6e6e6;
  }

  .profilePic {
    margin-right: 15px;
    border: 1px solid black;
    width: 100px;
    height: 100px;

    .editLayer {
      display: none;
      position: absolute;
      width: inherit;
      height: inherit;
      font-size: 24px;
      border: 1px solid black;
      padding: 5px;
      background: rgba(255, 255, 255, .5);
      cursor: pointer;

      &Input {
        display: none;
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .fields {
    .inputGroup {
      display: flex;
      flex-direction: column;
      
      &:not(:last-child) {
        margin-bottom: 10px;
      }

      label {
        margin-bottom: 5px;
        color: #808080;
        font-size: .9rem;
      }

      input {
        padding: 5px;
        border: 1px solid black;
      }

      select {
        border-radius: 7px;
        padding: 5px;
        align-self: flex-start;
      }
    }

    .name,
    .lastname {
      word-break: break-all;
      margin: 0;
    }

    .name {
      margin-bottom: 15px;
    }
    .lastname {
      font-size: 24px;
    }
  }
}
</style>