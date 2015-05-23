// Simple bookmarklet function to convert GIFS to GfyCats while browsing Reddit/Imgur
function gifToGfycat() {
	var gifLink = window.location.host + window.location.pathname;
	var newUrl = "http://gfycat.com/fetch/" + gifLink;
	window.open(newUrl, "gfycat");
	}