const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
        // 反向代理
      target: 'http://localhost:3000',
      changeOrigin: true,
    })
  );
};