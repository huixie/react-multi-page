module.exports = {
  root:true,
  "env": {
    "browser": true,
    "jest": true,
    "es6": true,
    "node": true
  },
  "parser": "babel-eslint",
  "plugins": [
    "react",
    "import",
    "flowtype"
  ],
  "extends": ["airbnb",'airbnb-base'],
  "rules": {
    "react/jsx-filename-extension":0,
    "class-methods-use-this":0,
    "no-plusplus":0,
    "no-param-reassign":"off",
    "react/jsx-one-expression-per-line":0,
    "react/no-access-state-in-setstate":0,
    "react/destructuring-assignment":0,
    "react/prefer-stateless-function":0,
    "react/no-render-return-value":0,
    "import/no-unresolved":0,
    "no-debugger":0,
    "no-nested-ternary":0,
    "no-unused-expressions":0,
    "no-unused-vars":0,
    "import/no-extraneous-dependencies":0,
    "import/prefer-default-export":0  
  }
}