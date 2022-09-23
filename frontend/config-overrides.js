const { alias } = require('react-app-rewire-alias');
module.exports = function override(config) {
  alias({
    '@components': 'src/components',
    '@assets': 'src/assets',
    '@redux': 'src/redux'
  })(config);

  return config;
};
