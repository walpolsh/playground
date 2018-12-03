var fs = require('fs')

fs.createReadStream(process.argv[2]) 
.pipe(process.stdout)
//process.argv returns an array containing the command line arguments passed