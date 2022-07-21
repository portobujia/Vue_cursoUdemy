<template>
  <SliderComponent texto="Bienvenido al curso de Vue" home="true" />
  <div class="center">
    <section id="content">
      <h2 class="subheader">Últimos artículos</h2>

      <!--Listado articulos-->
      <div id="articles">
        <article class="article-item" id="article-template">
          <div class="image-wrap">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Cuesta_del_obispo_01.jpg/640px-Cuesta_del_obispo_01.jpg"
              alt="Paisaje"
            />
          </div>

          <h2>Articulo de prueba</h2>
          <span class="date"> Hace 5 minutos </span>
          <a href="#">Leer más</a>

          <div class="clearfix"></div>
        </article>

        <!--AÑADIR ARTICULOS VIA JS-->
      </div>
    </section>
    <SidebarComponent />
  </div>
  <div class="clearfix"></div>
</template>
<script>
import SliderComponent from "./Slider.vue";
import SidebarComponent from "./SidebarComponent.vue";
export default {
  name: "LastArticles",
  components: {
    SliderComponent,
    SidebarComponent,
  },
};
</script>
