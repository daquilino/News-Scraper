const Article = require("../models/Article.js");

module.exports = function(app){

	app.get('/', function(req, res){

		Article.find({}, function(error, doc) {
	    // Log any errors
		    if (error) {
		      console.log(error);
		    }
		    // Or send the doc to the browser as a json object
		    else {
			    let hbsObject ={
						article: doc
				};

				res.render("index", hbsObject);
	   		}
	  });

	});

}


//in here make .getJSON call to api-route route to get articles and comments from mongoose.
// response in some object sent to index.	