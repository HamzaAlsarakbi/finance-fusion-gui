import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  // use @/ to resolve src/ directory
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  plugins: [
    react(),
    eslintPlugin({
      cache: false,
      include: ["src/**/*.ts", "src/**/*.tsx"],
      exclude: ["node_modules", "dist"],
    }),
  ],
  server: {
    host: '127.0.0.1',
    port: 3000,
  }
});
