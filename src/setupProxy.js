const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
        // ๅๅไปฃ็
      target: 'http://localhost:3000',
      changeOrigin: true,
    })
  );
};