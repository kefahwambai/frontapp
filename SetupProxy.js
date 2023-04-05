const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://carrental-1n1b.onrender.com',
      changeOrigin: true,
    })
  );
};