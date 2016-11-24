module.exports = {
  "parser": "babel-eslint",
  "extends": ["standard", "standard-react"],
  "plugins": [
      "standard",
      "promise",
      "react",
      "babel"
  ],
  "env": {
    "browser": true
  },
  "globals": {
    "__DEV__": false,
    "__TEST__": false,
    "__PROD__": false,
    "__COVERAGE__": false
  }
};
