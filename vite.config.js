import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@component": fileURLToPath(new URL("./src/components", import.meta.url)),
      "@icon": fileURLToPath(new URL("./src/components/Icons", import.meta.url)),
      "@controller": fileURLToPath(new URL("./src/controllers", import.meta.url)),
      "@helper": fileURLToPath(new URL("./src/helpers", import.meta.url)),
      "@view": fileURLToPath(new URL("./src/views", import.meta.url)),
      "@router": fileURLToPath(new URL("./src/router", import.meta.url)),
      "@layout":fileURLToPath(new URL("./src/layouts", import.meta.url)),
      "@store":fileURLToPath(new URL("./src/store", import.meta.url)),
    },  
  }
});


