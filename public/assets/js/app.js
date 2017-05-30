$(document).ready(function(){



	$(document).on("click", ".delete-button", function(element){

		element.preventDefault();

		let articleID = $(this).siblings("input.articleID").val();
		let commentID = $(this).siblings("input.commentID").val();

		console.log("commentID:", commentID);
		console.log("articleID:", articleID);
		
		let post ={
			"articleID": articleID,
			"commentID" : commentID
		};
	
		$.ajax({
      		method: "POST",
      		url: "/api/delete-comment" ,
      		data: post
    	})
    	.done(function(data) {
     	
     		if(data.complete)
     		{
     			refreshWell(articleID);	
     		}
     		console.log("data:", data);
     
    	});
	
	});

	$(document).on("click", "#scrape", function(){

		$.ajax({
			method: "GET",
			url: '/api/scrape'
		})

	});

});



//need function that refreshes div well with comments.




function refreshWell (articleID)
{
	//get comments from article
	$("#" + articleID + "well").empty();
	// re populate well with html


}


function addComment(articleID)
{
	/*
	1.) get values from form
	2.) add to dbs
	3.) refresh comment well
	4.) clear form fields
	*/


}