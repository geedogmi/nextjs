const { createProxyMiddleware } = require('http-proxy-middleware');

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/app1/:path*',
        destination: 'http://localhost:3001/:path*'
      },
      {
        source: '/app2/:path*',
        destination: 'http://localhost:3002/:path*'
      }
    ];
  },
  // 여기에 다른 next.js 설정을 추가할 수 있습니다.
};

module.exports = nextConfig;