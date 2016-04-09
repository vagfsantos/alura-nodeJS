var connectionFactory = require('../infra/connectionFactory');

module.exports = function(app){
	app.get('/produtos', function(req, res){
		var mysql = require('mysql');
		var connection = connectionFactory();
		
		connection.query('select * from livros', function(error, results){
			console.log(error);
			res.render('produtos/lista', {'lista':results});
		});
		
		connection.end();
	});
	console.log('exportei routes');
}

