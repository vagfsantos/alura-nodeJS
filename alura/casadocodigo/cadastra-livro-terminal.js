var http = require('http');

var config = {
	hostname:'localhost',
	port:3000,
	path:'/produtos',
	method: 'post',
	headers:{
		'Accept':'application/json',
		'Content-type':'application/json'
	}
}

var client = http.request(config, function(res){
	console.log(res.statusCode);
	res.on('data', function(body){
		console.log('Resposta: '+body);
	});
});

var data = {
	'titulo':'',
	'descricao': 'Livro massa de JS',
	'preco': '122'
}

client.end( JSON.stringify(data) );