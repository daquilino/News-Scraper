const Article = require("../models/Article.js");

module.exports = function(app){

	app.get('/', function(req, res){
		
		Article.find()
		.populate("comments")
		.exec(function(err, docs){

			let hbsObject ={
				article: docs
			};

			res.render("index", hbsObject);
		})
		

	});

}

