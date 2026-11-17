import js from "@eslint/js";
import astro from "eslint-plugin-astro";
import tsParser from "@typescript-eslint/parser";
import globals from "globals";

export default [
  {
    ignores: [
      ".astro/**",
      ".husky/**",
      ".vscode/**",
      "node_modules/**",
      "public/**",
      "dist/**",
      ".yarn/**",
    ],
  },
  js.configs.recommended,
  ...astro.configs["flat/recommended"],
  {
    languageOptions: {
      globals: { ...globals.node, ...globals.browser },
    },
  },
  {
    files: ["**/*.astro"],
    languageOptions: {
      parserOptions: { parser: tsParser, extraFileExtensions: [".astro"] },
    },
  },
];
