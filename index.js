module.exports = () => ({
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@babel/plugin-proposal-export-namespace-from',
    'babel-plugin-optional-require',
  ],
  env: {
    production: {
      plugins: ['babel-plugin-transform-remove-console'],
    },
  },
});
