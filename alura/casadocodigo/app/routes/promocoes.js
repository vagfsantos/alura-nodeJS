module.exports = function(app){
	app.get('/promocoes/form', function(req, res){
		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);

		produtosDAO.lista(function(error, results){
			console.log(error);
			if(error){
				return next(error);
			}

			res.format({
				html:function(){
					res.render('promocoes/form', {'lista':results});
				},
				json: function(){
					res.json(results);
				}
			});
		});
		
		connection.end();
	});

	app.post('/promocoes', function(req, res){
		var promocao = req.body;
		app.get('io').emit('novaPromocao', promocao);
		console.log(promocao);
		res.redirect('/promocoes/form');
	});
}