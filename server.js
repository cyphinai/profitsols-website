/* eslint-disable no-console */
'use strict';

var http = require('http');
var path = require('path');
var handler = require('serve-handler');
var compression = require('compression');

var buildDir = path.join(__dirname, 'build');
var port = Number(process.env.PORT || 3000);

var compress = compression();

function isHashedAsset(p) {
  return /^\/static\/.+\.[a-f0-9]{8,}\.(js|css|map|png|jpg|jpeg|webp|avif|svg|woff2?)$/i.test(p);
}

var server = http.createServer(function(req, res) {
  compress(req, res, function() {
    // Cache policy:
    // - Hashed assets: 1 year, immutable
    // - Everything else (html, robots, etc): no-cache
    var p = req.url.split('?')[0] || '/';
    if (isHashedAsset(p)) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    } else if (p === '/favicon.svg') {
      res.setHeader('Cache-Control', 'public, max-age=604800');
    } else {
      res.setHeader('Cache-Control', 'no-cache');
    }

    return handler(req, res, {
      public: buildDir,
      cleanUrls: false,
      rewrites: [
        { source: '/**', destination: '/index.html' }
      ]
    });
  });
});

server.listen(port, function() {
  console.log('Serving build on port', port);
});

