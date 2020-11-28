module.exports = {
  "extends": [
    "standard",
    "plugin:react/recommended",
    "plugin:flowtype/recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  "plugins": [
    "flowtype",
    "react",
    "react-hooks",
    "import",
    "class-property",
    "jest"
  ],
  "rules": {
    "semi": [ "error", "always" ],
    "space-before-function-paren": "off",
    "curly": [ "error" ],
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "never"
    }],
    "prefer-promise-reject-errors": "off",
    "no-case-declarations": "off",
    "max-len": [ "error", {
      "code": 120,
      "ignoreUrls": true,
      "ignoreComments": false
    }],
    "import/extensions": [
      "error",
      "never",
      {
        "css": "always",
        "scss": "always",
        "jpg": "always",
        "giv": "always",
        "png": "always",
        "svg": "always",
        "json": "always"
      }
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  "settings": {
    "react": {
      "version": "detect"
    },
    "import/extensions": [".js", ".jsx"],
    "import/resolver": [
      "webpack",
    ],
    // "import/resolver": {
    //   "alias": [
    //     ["~components", "./src/components"]
    //   ]
    // }
  },
    "env": {
      "browser": true,
      "es6": true,
      "jest/globals": true
  }
}
