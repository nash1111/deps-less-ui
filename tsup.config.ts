import { defineConfig } from "tsup";

export default defineConfig({
  format: ["cjs", "esm"],
  target: "es2019",
  sourcemap: true,
  clean: true,
});