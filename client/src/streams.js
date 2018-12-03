var fs = require('fs')
var through = require('through2')

process.stdin
.pipe(through(toUpper))
.pipe(process.stdout)

function toUpper (buf, enc, next) {
    next(null, buf.toString().toUpperCase() + 
    `\n ${100 + 100} \n
    <=======]}======
        --.   /|
      _\"/_.'/
    .'._._,.'
    :/ \{}/
    (L  /--',----._
        |          \\
      : /-\ .'-'\ / |
        \\, ||    \|
        \/ ||    ||
    `
  )
}