module.exports = function(app){
	app.get('/produtos', function(req, res){
		var mysql = require('mysql');
		var connection = app.infra.connectionFactory();
		
		var produtosBanco = app.infra.produtosBanco;
		produtosBanco.lista(connection, function(error, results){
			console.log(error);
			res.render('produtos/lista', {'lista':results});
		});
		
		connection.end();
	});
	console.log('exportei routes');
}

