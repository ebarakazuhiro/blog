import { defineConfig } from "vite";
import { NodeModulesPolyfillPlugin } from "@esbuild-plugins/node-modules-polyfill";

export default defineConfig({
  plugins: [
    {
      ...NodeModulesPolyfillPlugin(),
      enforce: "pre",
    },
  ],
  build: {
    outDir: "dist",
    lib: {
      entry: "src/extension.ts",
      name: "extension",
      formats: ["cjs"],
      fileName: "extension",
    },
    rollupOptions: {
      external: ["vscode"],
    },
    target: "node16",
  },
});
