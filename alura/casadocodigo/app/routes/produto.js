module.exports = function(app){
	app.get('/produtos', function(req, res){
		var mysql = require('mysql');
		var connection = app.infra.connectionFactory();
		
		var produtosBanco = new app.infra.ProdutosDAO(connection);
		produtosBanco.lista(function(error, results){
			console.log(error);
			res.render('produtos/lista', {'lista':results});
		});
		
		connection.end();
	});
	console.log('exportei routes');
}

