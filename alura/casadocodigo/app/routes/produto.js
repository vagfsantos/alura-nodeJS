module.exports = function(app){
	app.get('/produtos', function(req, res){
		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);

		produtosDAO.lista(function(error, results){
			console.log(error);
			res.format({
				html:function(){
					res.render('produtos/lista', {'lista':results});
				},
				json: function(){
					res.json(results);
				}
			});
		});
		
		connection.end();
	});

	app.get('/produtos/form', function(req, res){
		res.render('produtos/form');
	});

	app.post('/produtos', function(req, res){
		var produto = req.body;
		console.log(produto);

		var validadorTitulo = req.assert('titulo', 'Titulo é obrigatório');
		validadorTitulo.notEmpty();

		var errors = req.validationErrors();
		if(errors){
			res.render('produtos/form');
			return;
		}

		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);
		produtosDAO.salva(produto, function(error, results){
			console.log(error);
			res.redirect('/produtos');
		});
	});

	console.log('exportei routes');
}

