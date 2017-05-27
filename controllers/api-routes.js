const REQUEST = require('request');
const CHEERIO = require("cheerio");
const Article = require("../models/Article.js");
const Comment = require("../models/Comment.js");



module.exports = function(app){

	app.get("/api/scrape", function(req, res) {
	  // First, we grab the body of the html with request
	  REQUEST("https://www.javascript.com/news", function(error, response, html) {
	    // Then, we load that into cheerio and save it to $ for a shorthand selector
	    var $ = CHEERIO.load(html);
	    // Now, we grab every h2 within an article tag, and do the following:
	    $('ul.js-loadFeed-list li').each(function(i, element){

	    	//Save an empty result object
	    	let result ={};

	    	// Add the title and href of every link, and save them as properties of the result object
      		result.title = $(element).find('a.sb-c-text').text().replace(/\n/g, "").trim();
     	 	result.link = $(element).find('div.sb-list-item:nth-child(3) a').attr('href');
    
	      	// Using our Article model, create a new entry
	      	// This effectively passes the result object to the entry (and the title and link)
	      	let entry = new Article(result);

	      	// Now, save that entry to the db
	      	entry.save(function(err, doc) {
	        	// Log any errors
	        	if (err) {
	          		console.log(err);
	        	}
	        	// Or log the doc
	        	else {
	          	console.log(doc);
	        	}
	      	});
	    });
	  });
	  // Tell the browser that we finished scraping the text
	  res.send("Scrape Complete");
	});

	// This will get the articles we scraped from the mongoDB
	app.get("/api/article", function(req, res) {
	  // Grab every doc in the Articles array
	  Article.find({}, function(error, doc) {
	    // Log any errors
	    if (error) {
	      console.log(error);
	    }
	    // Or send the doc to the browser as a json object
	    else {
	      res.json(doc);
	    }
	  });
	});

	// // Grab an article by it's ObjectId
	// app.get("api/article/:id", function(req, res) {
	//   // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
	//   Article.findOne({ "_id": req.params.id })
	//   // ..and populate all of the notes associated with it
	//   .populate("note")
	//   // now, execute our query
	//   .exec(function(error, doc) {
	//     // Log any errors
	//     if (error) {
	//       console.log(error);
	//     }
	//     // Otherwise, send the doc to the browser as a json object
	//     else {
	//       res.json(doc);
	//     }
	//   });
	// });


	// Create a new Comment
	app.post("/api/article/:id", function(req, res) {
	 	
	  // Create a new note and pass the req.body to the entry
	  var newComment = new Comment(req.body);

	  // And save the new note the db
	  newComment.save(function(error, doc) {
	    // Log any errors
	    if (error) {
	      console.log(error);
	    }
	    // Otherwise
	    else {
	     		
	      // Use the article id to find and update it's note
	      Article.findOneAndUpdate({ "_id": req.params.id }, {$push:{ "comments": doc._id }})

	      // Execute the above query
	      .exec(function(err, doc) {
	        // Log any errors
	        if (err) {
	          console.log(err);
	        }
	        else {
	          // Or send the document to the browser
	          res.send(doc);
	        }
	      });
	    }
	  });

	});

	app.post("/api/comment/:id", function(req, res){

		//code here to delete comment from comment and comment from article


	});

}//END module.exports