<template>
  <header id="header">
    <div class="center">
      <!-- LOGO -->
      <div id="logo">
        <img src="../assets/logo.png" class="app-logo" alt="Logotipo" />
        <span id="brand"> <strong>Curso</strong>Vue </span>
      </div>

      <!-- MENU -->
      <nav id="menu">
        <ul>
          <li>
            <router-link to="/" active-class="active">Inicio</router-link>
          </li>
          <li>
            <router-link to="/blog" active-class="active">Blog</router-link>
          </li>
          <li>
            <router-link to="/formulario" active-class="active"
              >Formulario</router-link
            >
          </li>
          <li>
            <router-link to="/pagina" active-class="active"
              >Pagina 1</router-link
            >
          </li>
          <li>
            <router-link to="/mi-componente" active-class="active"
              >Pruebas</router-link
            >
          </li>
          <li>
            <router-link to="/peliculas" active-class="active"
              >Peliculas</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>
