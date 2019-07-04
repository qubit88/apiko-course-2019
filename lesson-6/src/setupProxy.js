const createProxy = require('http-proxy-middleware');

const proxy = createProxy({
  target: 'https://apiko-marketplace-api-2019.herokuapp.com/',
  pathRewrite: {
    '^/api': '',
  },
  changeOrigin: true,
});

const wsProxy = createProxy('/socket.io', {
  target: 'https://apiko-marketplace-api-2019.herokuapp.com/',
  pathRewrite: {
    '^/api': '',
  },
  changeOrigin: true,
  ws: true,
});

module.exports = (app) => {
  app.use('/api', proxy);
  app.use(wsProxy);
  app.use('/sockjs-node', wsProxy);
};
