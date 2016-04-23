var express = require('../config/express')();
var request = require('supertest')(express);

describe('#Produtos Controller', function(){

	beforeEach(function(done){
		var conn = express.infra.connectionFactory();
		conn.query("delete from livros", function(error, result){
			if(!error){
				done();
			} else{
				console.log(error);
			}
		});
	});

	it('#listagem JSON', function(done){
		request.get('/produtos')
		.set('Accept', 'application/json')
		.expect(200)
		.expect('Content-Type', /json/, done);
	});


	it('#Cadastro de produtos com dados INVALIDOS', function(done){
		request.post('/produtos')
		.send({
			titulo:'',
			descricao:'Novo Livro'
		})
		.expect(400, done);
	});

	it('#Cadastro de produtos com dados VALIDOS', function(done){
		request.post('/produtos')
		.send({
			titulo:'Livro de teste',
			descricao:'Novo Livro de teste',
			preco:'16.5'
		})
		.expect(302, done);
	});

});