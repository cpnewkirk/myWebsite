import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" lets the built site work from any folder or sub-path.
// The app uses HashRouter, so your /#/ URLs keep working on any static host.
export default defineConfig({
  base: "./",
  plugins: [react()],
});
