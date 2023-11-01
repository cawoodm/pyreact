const http = require('http')
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({
  // changeOrigin: true,
  // target: {
  //   https: true
  // }
});

proxy.on('proxyReq', function (proxyReq, req, res, options) {
  proxyReq.setHeader('X-Out', 'foobar');
});
proxy.on('proxyRes', function (proxyRes, req, res, options) {
  res.setHeader('X-In', 'foobar');
  console.debug('proxyRes: status=', res.statusCode, 'headers=', JSON.stringify(proxyRes.headers, true, 2));
});
proxy.on('error', function (err, req, res) {
  res.writeHead(500, {
    'Content-Type': 'text/plain'
  });
  console.warn(err.message);
  res.end(err.message);
});

const server = http.createServer(function (req, res) {
  //let target = 'https://5173-cawoodm-pyreact-oft7hvkp559.ws-eu105.gitpod.io';
  let target = 'http://localhost:5173';
  if (req.url.startsWith('/api/')) {
    // target = 'https://5000-cawoodm-pyreact-oft7hvkp559.ws-eu105.gitpod.io';
    target = 'http://localhost:5000';
  }
  console.log("Proxying", req.url, 'to', target);
  proxy.web(req, res, { target });
});

const port = process.env.GATEWAY_PORT || 8080;
console.log(`Gateway ready on ${port}...`)
console.log(`Launch http://localhost:${port}`)
server.listen(port);
