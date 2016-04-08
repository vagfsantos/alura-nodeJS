module.exports = function(app){
	app.get('/produtos', function(req, res){
		var mysql = require('mysql');
		var connection = mysql.createConnection({
			'host' : 'localhost',
			'user' : 'root',
			'password' : '',
			'database' : 'casadocodigo_nodejs'
		});

		connection.query('select * from livros', function(error, result){
			console.log(error);
			res.send(result);
		});
		connection.end();
	});
	console.log('exportei routes');
}

