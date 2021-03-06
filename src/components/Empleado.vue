<template>
  <article class="com-empleado" :class="{editable, current}" @click="selectEmpleado">
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
          <label class="inputLabel" for="name">Nombre</label>
          <input class="inputElement" id="name" type="text" v-model="localName" placeholder="Nombre">
        </div>
        <div class="inputGroup">
          <label class="inputLabel" for="lastname">Apellido</label>
          <input class="inputElement" id="lastname" type="text" v-model="localLastname" placeholder="Apellido">
        </div>
        <div class="inputGroup">
          <select class="inputElement" v-model="localAdmin">
            <option value="" disabled selected>¿Acceso?</option>
            <option value="true">Sí</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="actionButtonsContainer">
          <button class="actionButton" type="button" @click="cancel" v-if="empleado.id">
            <span>Cancelar</span>
          </button>
          <button class="actionButton save" type="button" @click="save" :disabled="isDisabled">
            <span>{{ empleado.id ? 'Guardar' : 'Crear' }}</span>
          </button>
        </div>
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
      this.$refs.profilePicUploadInput.value = ''
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
.com-empleado {
  box-shadow: 0px 0px 15px rgba(0, 0, 0, .2);
  border-radius: 5px;
  padding: 15px;
  display: flex;
  background: white;
  transition: all .2s ease;
  
  &:not(.editable):not(.current) {
    cursor: pointer;
    &:hover {
      background: rgba(0, 0, 0, 0.02);
    }
  }


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
    transform: scale(1.05);

    &:before {
      content: '✏️';
      position: relative;
      right: -270px;
      top: -25px;
      height: 0;
      width: 0;
      animation-name: pulse;
      animation-iteration-count: infinite;
      animation-duration: 2s;
      animation-timing-function: linear;
    }
  }

  .profilePic {
    margin-right: 15px;
    width: 100px;
    height: 100px;

    .editLayer {
      display: none;
      position: absolute;
      width: inherit;
      height: inherit;
      font-size: 24px;
      border: 1px solid rgba(0, 0, 0, .7);
      border-radius: 5px;
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
      border-radius: 5px;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, .3);
    }
  }

  .fields {
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    .inputGroup {
      display: flex;
      flex-direction: column;
      
      &:not(:last-child) {
        margin-bottom: 10px;
      }

      .inputLabel {
        margin-bottom: 5px;
        font-weight: 600;
      }

      .inputElement {
        padding: 7px;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, .2);
      }

      select {
        border-radius: 5px;
        padding: 7px;
        align-self: flex-start;
      }

    }

    .name,
    .lastname {
      word-break: break-all;
      margin: 0;
    }

    .lastname {
      font-size: 24px;
      font-weight: 600;
    }

    .actionButtonsContainer {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .actionButton {
        border: none;
        background: none;
        color: #8a2be2;
        text-transform: uppercase;
        cursor: pointer;
        padding: 10px;

        &:disabled {
          opacity: .4;
          cursor: not-allowed;
        }

        &:hover {
          background: rgba(0, 0, 0, .05);
        }

        &.save {
          background: #8a2be2;
          color: white;
          margin-left: 5px;
          border-radius: 5px;

          &:hover {
            background: darken(#8a2be2, 10%);
          }
        }
      }
    }
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(0.90);
    }
    50% {
      transform: scale(1.1);
    }
    75% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
}
</style>