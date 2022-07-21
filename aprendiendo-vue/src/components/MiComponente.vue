<template>
  <section id="content">
    <div class="center">
      <hr />
      <h1>Este es MI PRIMER componente creado</h1>
      <h2>{{ subtitulo }}</h2>
      <hr />
      <h2>Reactividad</h2>
      <input type="text" v-model="nombre" />
      Mi nombre es: <strong>{{ nombre }}</strong>

      <h2>Directivas condicionales</h2>
      <input type="number" v-model="edad" />
      Mi edad es: <strong>{{ edad }}</strong>

      <p
        class="alert-danger-provisional"
        v-if="edad && edad >= 18 && edad < 65"
      >
        ERES MAYOR DE EDAD
      </p>
      <p class="alert-purple-provisional" v-else-if="edad && edad >= 65">
        ERES DE AVANZADA EDAD
      </p>
      <p class="alert-success-provisional" v-else>ERES MENOR DE EDAD</p>

      <h2>Directivas condicionales</h2>

      <ol class="listStyleNone">
        <li v-for="pelicula in peliculas" :key="pelicula">{{ pelicula }}</li>
      </ol>
    </div>
  </section>
</template>

<script>
export default {
  name: "MiComponente",
  data() {
    return {
      subtitulo: "Soy el subtitulo de mi componente",
      nombre: "",
      edad: 18,
      peliculas: ["Batman", "Superman", "Spiderman"],
    };
  },
};
</script>

<style></style>
