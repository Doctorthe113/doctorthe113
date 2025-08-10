// @ts-check

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

const script = process.env.npm_lifecycle_script || "";
const isBuild = script.includes("build");

let siteUrl;
if (isBuild) {
    siteUrl = "https://doctorthe113.com";
} else {
    siteUrl = "http://localhost:3000";
}

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [react()],
    site: siteUrl,
    server: {
        port: 3000,
    },
});
