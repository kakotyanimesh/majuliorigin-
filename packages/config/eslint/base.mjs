import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import turboPlugin from "eslint-plugin-turbo";
import onlyWarn from "eslint-plugin-only-warn";
import tseslint from "typescript-eslint";

export const baseConfig = tseslint.config(
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: { turbo: turboPlugin },
    rules: {
      "no-debugger": "error",
      "turbo/no-undeclared-env-vars": "warn",
    },
  },
  { plugins: { onlyWarn } },
  { ignores: ["dist/**", "node_modules/**"] },
);

export default baseConfig;
