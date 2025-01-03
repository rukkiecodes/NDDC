/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App
 */

// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// AOS
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const app = createApp(App);

// Register plugins
registerPlugins(app);

// Initialize AOS
AOS.init({
  duration: 1200, // Animation duration in ms
  once: true, // Whether animations should happen only once
});

// Mount the app
app.mount("#app");
