var fs = require('fs')
var through = require('through2')

fs.createReadStream(process.argv[2]) 
.pipe(through(toupper()))
.pipe(process.stdout)
//process.argv returns an array containing the command line arguments passed

function toupper () {
  return through(function (buf, enc, next) {
    next(null, buf.toString().toUpperCase())
  })
}