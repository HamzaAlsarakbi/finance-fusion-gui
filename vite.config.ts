import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// @ts-ignore
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  // use @/ to resolve src/ directory
  resolve: {
    alias: {
      "@": "/src",
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  plugins: [
    react(),
    eslint({
      cache: false,
      include: ["src/**/*.ts", "src/**/*.tsx"],
      exclude: ["node_modules", "dist"],
    }),
  ]
});
