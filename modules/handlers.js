var formidable = require('formidable');

exports.upload = function(request, response) {
    console.log("Rozpoczynam obsługę żądania upload.");
    var form = new formidable.IncomingForm();
    fs.readFile('templates/upload.html', function(err, html) {
        response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        response.write(html);
    });
    form.parse(request, function(error, fields, files) {  
        fs.renameSync(files.upload.path, 'test.png');/*
        response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
        response.write("Plik uploadowano.<br/>");
        response.write("<img src='/show' />");
        response.end();*/
    });
}
var fs = require('fs');

exports.welcome = function(request, response) {
    console.log("Rozpoczynam obsługę żądania welcome.");
    fs.readFile('templates/start.html', function(err, html) {
        response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        response.write(html);
        response.end();
    });
}

exports.show = function(request, response) {
    fs.readFile('test.png', "binary", function(error, file) {
        response.writeHead(200, {"Content-Type": "image/png"});
        response.write(file, "binart");
        response.end();
    });
}

exports.error = function(request, response) {
    console.log("Nie wiem co robić.");
    response.write("404 :(");
    response.end();
}