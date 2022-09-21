import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";
import vsharp from "vite-plugin-vsharp";

// https://astro.build/config
export default defineConfig({
  site: "https://miguelo.dev",
  output: 'static',
  integrations: [
    tailwind(),
    react(),
    partytown({
      config: {
        forward: ["dataLayer.push"]
      }
    })
  ],
  vite: {
    plugins: [
      vsharp({
        ".webp": {
          "quality": 80,
          "lossless": false
        }
      })
    ]
  }
});