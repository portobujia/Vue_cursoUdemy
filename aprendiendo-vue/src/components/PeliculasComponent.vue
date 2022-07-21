<template>
  <SliderComponent 
  texto="Bienvenido al curso de Vue desde peliculas"
  />
  <div class="center">
    <section id="content">
      <section id="content">
        <h2 class="subheader">Peliculas</h2>

        <!--Listado articulos-->
        <div id="articles">
          <div v-for="pelicula in peliculas" v-bind:key="pelicula.title">
            <PeliculaOneComponent :pelicula="pelicula"></PeliculaOneComponent>
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
  data() {
    return {
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
};
</script>
