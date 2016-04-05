var http = require('http');

var server = http.createServer(function(req, res){
	if(req.url == "/produtos"){
		res.end("<html><body><h1>Listando os produtos...</h1></body></html>");
	} else{
		res.end("<html><body><h1>Home da loja...</h1></body></html>");
	}
});
server.listen(3000);

console.log('servidor está rodando....');