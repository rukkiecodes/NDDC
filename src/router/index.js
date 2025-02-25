/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from "vue-router/auto";
import { setupLayouts } from "virtual:generated-layouts";
import { routes as autoRoutes } from "vue-router/auto-routes";

// Import AOS
import AOS from "aos";
import "aos/dist/aos.css"; // Ensure AOS styles are imported

// Define your custom route(s)
const customRoutes = [
  {
    path: "/project/:project",
    name: "project",
    component: () => import("@/pages/project.vue"), // Explicitly import the component
  },
  {
    path: "/programs/:program",
    name: "program",
    component: () => import("@/pages/program.vue"), // Explicitly import the component
  },
  {
    path: "/news/:title",
    name: "news",
    component: () => import("@/pages/news.vue"), // Explicitly import the component
  },
];

// Merge auto-generated routes with custom routes
const allRoutes = setupLayouts([...autoRoutes, ...customRoutes]);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: allRoutes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" }; // Scrolls to the top smoothly on navigation
  },
});

// Reinitialize AOS after each route change
router.afterEach(() => {
  AOS.refresh(); // Refresh AOS animations
});

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.("Failed to fetch dynamically imported module")) {
    if (!localStorage.getItem("vuetify:dynamic-reload")) {
      console.log("Reloading page to fix dynamic import error");
      localStorage.setItem("vuetify:dynamic-reload", "true");
      location.assign(to.fullPath);
    } else {
      console.error("Dynamic import error, reloading page did not fix it", err);
    }
  } else {
    console.error(err);
  }
});

router.isReady().then(() => {
  localStorage.removeItem("vuetify:dynamic-reload");
});

export default router;
