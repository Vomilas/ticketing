module.exports = {
  webpackDevMiddleware: config => {
    config.watchOptions.poll = 300;
    return config;
  },
  env: {
    stripePublicKey: "pk_test_4U1uvKQNmxX9FrcNiCpnaBxS"
  }
};
