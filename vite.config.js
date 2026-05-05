import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Isso evita que o projeto seja carregado na tela branca quando publicar no GitHub Pages.
  base: "/todo-react-avancado/",
});