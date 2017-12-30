var animalArray = ["hamster", "cat"];

$(document).ready(function() {
	for(var i = 0; i < animalArray.length; i++){
		console.log("<button class='btn custom-btn' id='" + animalArray[i] + "' value='" + animalArray[i] + "'>" + animalArray[i] + "</button>");
		$("#button-container").append("<button class='btn custom-btn' id='" + animalArray[i] + "' value='" + animalArray[i] + "'>" + animalArray[i] + "</button>");
	}

	$("body").on("click", 'button', function(event){
		//make API call here and update with the giffs
		event.preventDefault();
		console.log("button pressed");
		console.log(this.value);
		if(this.id == "mainSearch"){
			var searchTerm = $("#animalName").val();
			$("#button-container").append("<button class='btn custom-btn' id='" + searchTerm + "' value='" + searchTerm + "'>" + searchTerm + "</button>");
			console.log(searchTerm);
		} else {
			var searchTerm = this.value;
		}
		$.ajax({
	
			contentType: 'application/json',
			url: "http://api.giphy.com/v1/gifs/search?q=" + searchTerm +  "&api_key=ZPSh7WK2L77oeVigt2olum9Drpvkj60h&limit=10",
			method: "GET",
			success: function(data) {
				$("#gif_container").empty();
				console.log("This works too")
				// debugger
				console.log(data);
				for(var i = 0; i < data["data"].length; i ++){
					console.log(data["data"][i]["rating"]);
					console.log(data["data"][i]["images"]["downsized_medium"]["url"]);
					$("#gif_container").append("<div class='gifUnit'><img src=" + data["data"][i]["images"]["downsized_medium"]["url"] + "></img><p>The rating: " + data["data"][i]["rating"] + "</p></div>")
				}
	
			}
		});
	});

});
