var sys = require("sys"),
		my_http = require("http"),
		path = require("path"),
		url = require("url"),
		file_sys = require("fs");
		
my_http.createServer(function(request, response) {
	var file_name = "dummy-data.txt";
	var my_path = url.parse(request.url).pathname;
	var full_path = path.join(process.cwd(), my_path)+"/"+file_name;
	//sys.puts("my_path :"+ my_path);
	//sys.puts("full_path :"+ full_path);
	file_sys.exists(full_path, function(exists) {
		if(!exists) {
			response.writeHeader(404, {"Content-Type":"text/plain"});
			response.write("404 Not Found\n");
			response.end();
		}
		else {
			file_sys.readFile(full_path, "binary", function(err,file) {
				if(err) {
					response.writeHeader(500, {"Content-Type":"text/plain"});
					response.write(err + "\n");
					response.end();
				}
				else {
					response.writeHeader(200);
					response.write(file, "binary");
					response.end();
				}
			});
		}
	})
}).listen(8080);

sys.puts(" Server running on port 8080");



















