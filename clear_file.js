const write_file = require('./write_file.js')

class ClearFile {
    constructor(name_file) {
        this.name_file = name_file
    }

    clear_begin(data) {
        var begin_xml = data.indexOf("<?xml");
        if(begin_xml!=0)
            return data.substr(begin_xml, data.length - begin_xml);
        else{
            //it's not signed
            write_file(this.name_file, data)
            process.exit(1)
        }
        }

    clean_end(data) {
        var end_xml = data.indexOf("</p:FatturaElettronica>");
        if ((end_xml + 23) < data.length)
            return data.substr(0, end_xml + 23)
        else {
            //it's not signed
            write_file(this.name_file, data)
            process.exit(1)
        }

    }
    clear_special_characters(data) {
        //Clear the file from special characters
        //char ascii (char<127)
        for (let i = 0; i < data.length; i++) {
            if (data[i] != undefined && !(data[i].charCodeAt(0) < 127)) {
                let prima = data.substr(0, i - 1)
                let dopo = data.substr(i + 3, data.length - i)
                data = prima + dopo
            }
        }
        return data
    }

}

module.exports = ClearFile