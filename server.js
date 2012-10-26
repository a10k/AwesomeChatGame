require('coffee-script');

[ 'index',
  'websocket'
].forEach(function(controller) {
  require('./controllers/' + controller);
});
