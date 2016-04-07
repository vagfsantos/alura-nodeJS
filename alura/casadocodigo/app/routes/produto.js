module.exports = function(app){
	app.get('/produtos', function(req, res){
		res.render('produtos/lista');
	});
	console.log('exportei routes');
}

