const globals = require("globals");
const js = require("@eslint/js");

const {
  FlatCompat,
} = require("@eslint/eslintrc");

const {
  includeIgnoreFile,
} = require("@eslint/compat");

const path = require("node:path");
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});
const gitignorePath = path.resolve(__dirname, ".gitignore");

module.exports = [
  includeIgnoreFile(gitignorePath),
  ...compat.extends("eslint:recommended"),
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        require: true,
        module: true,
        __dirname: true
      },

      ecmaVersion: "latest",
      sourceType: "script",
    },

    rules: {
      indent: ["error", 2],
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "double"],
      semi: ["error", "always"],
    },
  },
  {
    files: ["**/.eslintrc.{js,cjs}"],

    languageOptions: {
      globals: {
        ...globals.node,
      },

      ecmaVersion: 5,
      sourceType: "commonjs",
    },
  },
];