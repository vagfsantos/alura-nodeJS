module.exports = function(app){
	app.get('/', function(req, res){
		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);

		produtosDAO.lista(function(error, results){
			console.log(error);
			if(error){
				return next(error);
			}

			res.format({
				html:function(){
					res.render('home/index', {'livros':results});
				},
				json: function(){
					res.json(results);
				}
			});
		});
		
		connection.end();
	});
}