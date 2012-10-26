var express = require('express')
  , util = require('util')
  , port = parseInt(process.env.PORT) || 8003
  , EventEmitter = require('events').EventEmitter;

var node_env = 'development'
// express
var app = module.exports = express.createServer();

// some paths
app.paths = {
  public: __dirname + '/../public',
  views: __dirname + '/../views'
};



// utilities & hacks
require('colors');
require('../lib/render2');
require('../lib/underscore.shuffle');
require('../lib/regexp-extensions');

// events
app.events = new EventEmitter();


// config

app.configure(function() {
  var coffee = require('coffee-script')
    , stylus = require('stylus');

  var assetManager = require('connect-assetmanager')({
    js: {
      route: /\/javascripts\/all-[a-z0-9]+\.js/,
      path: __dirname + '/../public/javascripts/',
      dataType: 'javascript',
      debug: node_env === 'development',
      preManipulate: {
        '^': [
          function(src, path, index, isLast, callback) {
            callback(src.replace(/#socketIoPort#/g, port));
          }
          , function(src, path, index, isLast, callback) {
            if (/\.coffee$/.test(path)) {
              callback(coffee.compile(src));
            } else {
              callback(src);
            }
          }
        ]
      },
      files: [ // order matters here
        'polyfills.js',
        'vendor/hoptoad-notifier.js',
        'vendor/hoptoad-key.js',
        'vendor/json2.js',
        'vendor/jquery-1.7.2.js',
        'vendor/jquery.ba-hashchange.js',
        'vendor/jquery.border-image.js',
        'vendor/jquery.fancybox.js',
        'vendor/jquery.infinitescroll.js',
        'vendor/jquery.keylisten.js',
        'vendor/jquery.pjax.js',
        'vendor/jquery.transform.light.js',
        'vendor/jquery.transloadit2.js',
        'vendor/md5.js',
        'vendor/underscore-1.3.3.js',
        'watchmaker.js',
        'application.coffee',
        '*'
      ]
    },
    css: {
      route: /\/stylesheets\/all-[a-z0-9]+\.css/,
      path: __dirname + '/../public/stylesheets/',
      dataType: 'css',
      debug: node_env === 'development',
      preManipulate: {
        '^': [
          function(src, path, index, isLast, callback) {
            if (/\.styl$/.test(path)) {
              stylus(src)
                .set('compress', false)
                .set('filename', path)
                .set('paths', [ __dirname, app.paths.public ])
                .render(function(err, css) {
                  callback(err || css);
                });
            } else {
              callback(src);
            }
          }
        ]
      },
      files: [ // order matters here
        'vendor/normalize.css',
        'vendor/jquery.fancybox.css',
        'application.styl'
      ]
    }
  });
  app.use(assetManager);
  app.helpers({ assetManager: assetManager });
});



app.configure(function() {
  
  app.use(express.logger());
  app.use(app.router);
  app.use(express.static(app.paths.public));
  app.use(express.profiler());


  app.set('views', app.paths.views);
  app.set('view engine', 'jade');
});

// helpers

app.listen(port);
app.ws = require('socket.io').listen(app);

//added for heroku websocket support
  app.ws.set('transports', [ 'flashsocket'
  , 'htmlfile'
  , 'xhr-polling'
  , 'jsonp-polling'
]);
  app.ws.set("polling duration", 1000); 
  app.ws.set('browser client minification', true);


app.on('listening', function() {
  require('util').log('listening on ' + ('port:' + port).cyan);


});
