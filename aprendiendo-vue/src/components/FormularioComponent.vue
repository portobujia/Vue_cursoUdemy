<template>
  <section id="content">
    <h2 class="subheader">Formulario</h2>
    <form class="mid-form" @submit.prevent="mostrarUsuario()">
      <div class="form-group">
        <label for="nombre">Nombre</label>
        <input type="text" name="nombre" v-model="user.nombre" />
      </div>

      <div class="form-group">
        <label for="apellidos">Apellidos</label>
        <input type="text" name="apellidos" v-model="user.apellidos" />
      </div>

      <div class="form-group">
        <label for="bio">Biografia</label>
        <textarea name="bio" v-model="user.biografia"></textarea>
      </div>

      <div class="form-group radibuttons">
        <input
          type="radio"
          name="genero"
          value="hombre"
          v-model="user.genero"
        />
        Hombre
        <input type="radio" name="genero" value="mujer" v-model="user.genero" />
        Mujer
        <input type="radio" name="genero" value="otro" v-model="user.genero" />
        Otro
      </div>

      <div class="clearfix"></div>

      <input type="submit" value="Enviar" class="btn btn-success" />
    </form>
    <div class="datos" v-if="user.nombre && user.apellidos">
      <h3>{{ user.nombre + " " + user.apellidos }}</h3>
    </div>
  </section>
</template>
<script>
export default {
  name: "FormularioComponent",
  data() {
    return {
      user: {
        nombre: "",
        apellidos: "",
        biografia: "",
        genero: "",
      },
    };
  },
  methods: {
    mostrarUsuario() {
      console.log(this.user);
    },
  },
};
</script>
