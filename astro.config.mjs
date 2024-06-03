import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import vercelServerless from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  adapter: vercelServerless({ maxDuration: 8 }),
});
