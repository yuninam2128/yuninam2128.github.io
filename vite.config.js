import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // ex base: '/my_project/', 
  base: "/yuninam2128.github.io/",
  plugins: [react()],
});