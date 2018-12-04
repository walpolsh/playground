var concat = require('concat-stream')
//Writable stream that concatenates all the data from a stream and calls a callback with the result. Use this when you want to collect all the data from a stream into a single buffer.
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