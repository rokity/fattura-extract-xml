const fs = require('fs')
const path = require('path')

module.exports = (name_file, data) => fs.writeFileSync(path.join(__dirname, name_file + ".finito"), data)
