const proxy = require('http-proxy-middleware');
const hostConfig = require('./host');

module.exports = (app) => {
  app.use(
    proxy('/njia', {
      target: hostConfig.host.development,
      changeOrigin: true,
      pathRewrite: {
        '^/njia': '/njia',
      },
    }),
  );
};
