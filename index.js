const fs = require('fs')
const path = require('path')
const ClearFile = require('./clear_file.js')
const write_file = require('./write_file.js')
//take input of the file
const name_file = process.argv[2]
const filePath = path.join(__dirname, name_file)
//read the file
let data = fs.readFileSync(filePath, { encoding: 'utf-8' })
//clear the begin and the end of the file from signed file
let clearFile= new ClearFile(name_file)
data = clearFile.clear_begin(data)
data = clearFile.clean_end(data)
//clear from special characters 
data = clearFile.clear_special_characters(data)
//Write the file
write_file(name_file, data)
console.log(data)




