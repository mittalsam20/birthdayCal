import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { aliases } from "./vite.config.aliases.js";

export default defineConfig({
  plugins: [react()],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "Colors.scss" as *;
        @use "Mixins.scss" as *;
        @use "Typography.scss" as *;
      `,
        sourceMap: true,
        outputStyle: "expanded",
        includePaths: [resolve(__dirname, "src/styles")],
      },
    },
    modules: {
      localsConvention: "camelCase",
      generateScopedName: "[name]__[local]___[hash:base64:5]",
    },
  },

  build: {
    sourcemap: true,
    cssMinify: true,
    cssCodeSplit: true,
  },

  server: {
    hmr: { overlay: true },
  },

  resolve: { alias: aliases },
});
