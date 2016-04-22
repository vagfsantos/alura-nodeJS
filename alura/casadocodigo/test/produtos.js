var http = require('http');

describe('#Produtos Controller', function(){

	it('#listagem JSON', function(done){
		var config = {
			hostname:'localhost',
			port:3000,
			path:'/produtos',
			headers:{
				'Accept':'application/json'
			}
		};

		http.get(config, function(res){
			if(res.statusCode == 200){
				console.log("Status OK");
			}
			if(res.headers['content-type'] == 'application/json'){
				console.log("JSON received");
			}

			done();
		});

	});

});