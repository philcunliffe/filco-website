import globals from "globals";
import pluginReact from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { ignores: ["node_modules", ".cache"] },
  { languageOptions: { globals: globals.browser } },
  pluginReact.configs.flat.recommended,
  eslintConfigPrettier,
  { rules: { "react/prop-types": "off" } },
];
