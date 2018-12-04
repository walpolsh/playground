var concat = require('concat-stream')
var http = require('http')
var qs = require('querystring')
var through = require ('through2')

var server = http.createServer(function (req, res) {
  req.pipe(counter())
    .pipe(concat({ encoding: 'string' }, onbody)) 
  function counter () {
    var size = 0;
    return through(function (buf, enc, next) {
      size += buf.length
      if (size > 20) next(null, null)
      else next(null, buf)
    })
  }
  function onbody (body) {
    var params = qs.parse(body)
    console.log(params)
    res.end('ok\n')
  }
})

server.listen(5000)