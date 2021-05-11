const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
      '/api',
      createProxyMiddleware({
        target: 'https://records-app-api.herokuapp.com/',
        changeOrigin: true,
      })
  );
};