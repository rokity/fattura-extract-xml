
exports.clear_begin = (data)=>
{
    var begin_xml = data.indexOf("<?xml");
    return data.substr(begin_xml,data.length-begin_xml);
}

exports.clean_end = (data) =>
{
    var end_xml = data.indexOf("</p:FatturaElettronica>");
    return data.substr(0,end_xml+23);
}