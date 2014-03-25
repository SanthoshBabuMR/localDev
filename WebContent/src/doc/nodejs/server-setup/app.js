// utilities for working for with http
var http = require("http");
// utilities for working for with stdout
var sys = require("sys");
// utilities for working for with file paths
var path = require("path");
// utilities for working for with file system
var fs = require("fs");
var extensions = {
	".html": "text/html",
	".css": "text/css",
	".js": "application/javascript",
	".png": "image/png",
	".gif": "image/gif",
	".jpg": "image/jpg"
};

http.createServer(function(request, response){
	// callback function begin 
	var file_name = path.basename(request.url) || "index.html";
	var ext = path.extname(file_name);
	var dir = path.dirname(request.url).substring(1);
	var local_path = __dirname + "/public/";
	
	if(extensions[ext]){
		local_path += (dir ? dir + "/" : "") + file_name;
		fs.exists(local_path, function(exists){
			if(exists){
				getFile(local_path, extensions[ext], response);
			}
			else {
				response.writeHeader(404);
				response.end();
			}
		});
	}
	// callback function end 
}).listen(8080);

function getFile(local_path, mimeType, response) {
	fs.readFile(local_path, function(err, contents){
		if(!err){
			response.writeHead(200, {
				"Content-Type":mimeType,
				"Content-Length":contents.length
			});
			response.end(contents);
		}
		else{
			response.writeHeader(500);
			response.end();
		}
	});
}


sys.puts("Server listening on port 8080");