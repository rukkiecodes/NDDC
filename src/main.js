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

// PWA Registration
import { registerSW } from "virtual:pwa-register";

import { StatusBar } from "@capacitor/status-bar";

StatusBar.setBackgroundColor({ color: "#ffffff" }); // Set white status bar
StatusBar.setStyle({ style: "dark" }); // Use dark icons (for visibility)

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then(() => {
    console.log("Service Worker Registered");
  });
}

if (window.matchMedia("(display-mode: standalone)").matches) {
  document.documentElement.style.setProperty("--nav-bar-color", "#ffffff");
}

// Initialize Service Worker
registerSW({ immediate: true });

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
