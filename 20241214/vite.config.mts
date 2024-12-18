import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/extension.ts",
      name: "extension",
      formats: ["cjs"], // CommonJS形式で出力
      fileName: () => "extension.js",
    },
    rollupOptions: {
      external: ["vscode"],
    },
    sourcemap: true,
  },
});
