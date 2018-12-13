const fs = require('fs');
const path = require('path');
const clear_file = require('./clear_file.js');

var name_file = "file4.txt";
const filePath = path.join(__dirname, name_file);

let data = fs.readFileSync(filePath, { encoding: 'utf-8' });
data = clear_file.clear_begin(data);
data = clear_file.clean_end(data);

for(let i=0;i<data.length;i++)
{
    if(data[i]!= undefined && !(data[i].charCodeAt(0)<127))
        {
            let prima = data.substr(0,i-1);
            let dopo = data.substr(i+3,data.length-i);
            data = prima+dopo;
        }
}
fs.writeFileSync(path.join(__dirname, name_file+".finito"),data)
