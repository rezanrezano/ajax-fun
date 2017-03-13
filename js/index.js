$(function(){
	var URL = "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE/top-tracks?country=SE";
	$.ajax({
		url:URL,
		type:'GET',

	}).then(function(tracksJson){
		var tracks = tracksJson["tracks"]
		tracks.forEach(function(track){
			var name = track["name"]
			 $('body').append(name + "<br>")
		})
	})
})