import { createRouter, createWebHistory } from "vue-router";
import LastArticles from "../components/LastArticles.vue";
import BlogComponent from "../components/BlogComponent.vue";
import FormularioComponent from "../components/FormularioComponent.vue";
import PaginaComponent from "../components/PaginaComponent.vue";
import MiComponente from "../components/MiComponente.vue"
import PeliculasComponent from "../components/PeliculasComponent.vue"

const routes = [
  { path: "/blog", name: "BlogComponent", component: BlogComponent },
  { path: "/formulario", name: "FormularioComponent", component: FormularioComponent },
  { path: "/pagina/:id?", name: "PaginaComponent", component: PaginaComponent },
  { path: "/peliculas", name: "PeliculasComponent", component: PeliculasComponent },
  { path: "/mi-componente", name: "MiComponente", component: MiComponente },
  { path: "/", name: "Home", component: LastArticles },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
