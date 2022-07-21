<template>
  <section id="content">
    <h2 class="subheader">Pagina de pruebas</h2>
    <div>{{ id_desde_url }}</div>
    <button @click="actualizarNombre()">Actualizar Nombre</button>
    <h4>{{ nombre }}</h4>
    <button @click="redirigirAlBlog()">Redirigir</button>
  </section>
</template>
<script>
export default {
  name: "PaginaComponent",
  created() {
    console.log("Componente creado");
  },
  mounted() {
    //Pasar parametro por url
    this.id_desde_url = this.$route.params.id;
    console.log("Componente montado");
  },
  updated() {
    console.log("Componente actualizado");
  },
  unmounted() {
    console.log("Componente desmontado");
  },
  data() {
    return {
      id_desde_url: null,
      nombre: "Alfonso Porto",
    };
  },
  methods: {
    actualizarNombre() {
      this.nombre = "ALFONSO PORTO";
      console.log(this.nombre);
    },
    redirigirAlBlog() {
      this.$router.push("/blog");
    },
  },
};
</script>
