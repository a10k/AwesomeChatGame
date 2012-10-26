app = require '../config/app'
fs = require 'fs'




app.get '/', [], (req, res, next) ->
  res.render2 'index/index.jade'




app.get '/now', (req, res) ->
  res.send Date.now().toString()





