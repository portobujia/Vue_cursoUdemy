<template>
  <SliderComponent texto="Bienvenido al curso de Vue desde peliculas" />
  <div class="center">
    <section id="content">
      <section id="content">
        <h1 class="subheader">Peliculas</h1>
        <div class="favorita" v-if="favorita">
          <h2>{{ favorita.title }}</h2>
        </div>
        <h3>{{ misDatos }}</h3>
        <!--Listado articulos-->
        <div id="articles">
          <div
            v-for="pelicula in peliculasMayuscula"
            v-bind:key="pelicula.title"
          >
            <PeliculaOneComponent
              :pelicula="pelicula"
              @favorita="haLlegadoLaPeliculaFavorita"
            ></PeliculaOneComponent>
          </div>
        </div>
      </section>
    </section>
    <SidebarComponent />
  </div>
</template>

<script>
import PeliculaOneComponent from "./PeliculaOneComponent.vue";
import SliderComponent from "./Slider.vue";
import SidebarComponent from "./SidebarComponent.vue";
export default {
  name: "PeliculasComponent",
  components: {
    PeliculaOneComponent,
    SliderComponent,
    SidebarComponent,
  },
  methods: {
    haLlegadoLaPeliculaFavorita(pelicula) {
      this.favorita = pelicula;
    },
  },
  data() {
    return {
      favorita: null,
      nombre: "Alfonso",
      apellido: "Porto",
      peliculas: [
        {
          title: "Batman",
          year: 1995,
          image: "https://www.filmaffinity.com/es/film161835.html",
        },
        {
          title: "Superman",
          year: 1978,
          image: "https://pics.filmaffinity.com/Superman-376057457-large.jpg",
        },
        {
          title: "Tiburon",
          year: 1975,
          image: "https://pics.filmaffinity.com/jaws-195807307-large.jpg",
        },
      ],
    };
  },
  computed: {
    peliculasMayuscula() {
      let peliculasMod = this.peliculas;
      for (let i = 0; i < this.peliculas.length; i++) {
        peliculasMod[i].title = peliculasMod[i].title.toUpperCase();
      }
      return peliculasMod;
    },
    misDatos() {
      return this.nombre + " " + this.apellido;
    },
  },
};
</script>
