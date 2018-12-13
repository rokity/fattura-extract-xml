const fs = require('fs');
const path = require('path');
const clear_file = require('./clear_file.js');
//take input of the file
const name_file = process.argv[2];
const filePath = path.join(__dirname, name_file);
//read the file
let data = fs.readFileSync(filePath, { encoding: 'utf-8' });
//clear the begin and the end of the file from signed file
data = clear_file.clear_begin(data);
data = clear_file.clean_end(data);
//Clear the file from special characters
for (let i = 0; i < data.length; i++) {
    if (data[i] != undefined && !(data[i].charCodeAt(0) < 127)) {
        let prima = data.substr(0, i - 1);
        let dopo = data.substr(i + 3, data.length - i);
        data = prima + dopo;
    }
}
//Write the file
fs.writeFileSync(path.join(__dirname, name_file + ".finito"), data);
console.log(data);
