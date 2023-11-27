module.exports =
  // other configurations...
  {
    env: {
      browser: true,
      es6: true,
    },
    extends: ["plugin:react/recommended"],
    parserOptions: {
      ecmaFeatures: {
        experimentalObjectRestSpread: true,
        jsx: true,
        tsx: true,
      },
      sourceType: "module",
    },
    plugins: ["react"],
    rules: {
      "react/tsx-filename-extension": [
        1,
        { extensions: [".js", ".jsx", ".tsx", ".ts"] },
      ],
      indent: ["error", 2],
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "single"],
      semi: ["error", "always"],
    },
  };
