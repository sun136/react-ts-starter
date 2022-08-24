const { whenProd } = require('@craco/craco');
const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  webpack: {
    plugins: [
      ...whenProd(
        () => [new BundleAnalyzerPlugin({ analyzerMode: 'static', openAnalyzer: false })],
        [],
      ),
    ],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  devServer: {
    port: 3100,
    proxy: {
      '/direct-mock': {
        target: 'https://anymock.alipay.com',
        changeOrigin: true,
      },
    },
  },
};
