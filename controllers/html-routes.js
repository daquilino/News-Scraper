

module.exports = function(APP){

	APP.get('/', function(req, res){

		var hbsObject = {
      		text: "WELCOME HOME!"
    	};
    	
    	res.render("index", hbsObject);
	});

}


//in here make .getJSON call to api-route route to get articles and comments from mongoose.
// response in some object sent to index.	