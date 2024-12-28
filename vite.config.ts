import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import path from "node:path";

import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [
    solid(),
    /* @ts-ignore */
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    port: 5678,
  },
});
