module.exports = function(app){
	app.get('/produtos', function(req, res, next){
		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);

		produtosDAO.lista(function(error, results){
			console.log(error);
			if(error){
				return next(error);
			}

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
		res.render('produtos/form', {errosValidacao:{}, produto:{}});
	});

	app.post('/produtos', function(req, res){
		var produto = req.body;
		console.log(produto);

		req.assert('titulo', 'Titulo é obrigatório').notEmpty();
		req.assert('preco', 'Formato inválido').isFloat();

		var errors = req.validationErrors();
		if(errors){
			res.format({
				html: function(){
					res.status(400).render('produtos/form', {errosValidacao:errors, produto:produto});
				},
				json: function(){
					res.status(400).json(errors);
				}
			});
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

