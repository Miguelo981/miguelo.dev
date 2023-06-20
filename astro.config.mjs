import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";
import vsharp from "vite-plugin-vsharp";
import { astroImageTools } from "astro-imagetools";
import robotsTxt from 'astro-robots-txt';

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
    }),
    robotsTxt(),
    astroImageTools,
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