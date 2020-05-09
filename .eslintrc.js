module.exports = {
  root: true,
  env: {
    node: true
  },
  parser: "vue-eslint-parser",
  extends: [
    "plugin:vue/essential",
    "@vue/prettier",
    "eslint:recommended",
    "plugin:vue/recommended",
    "prettier",
    "prettier/vue"
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
