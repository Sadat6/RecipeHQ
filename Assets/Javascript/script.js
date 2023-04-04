const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '53f78cc422c1b36e1de17556596d28a1',
		'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
	}
};

fetch('https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=meat&app_id=b9c6ace0&app_key=53f78cc422c1b36e1de17556596d28a1')
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
    
var searchValue = ""
var foodList = ["foods"]
var recipe = ["selection"]
var map = ["googlemaps"]
var video = ["YouTube"]



$(function mainPageSlide () {

    $('#mainDiv').css('display','none');
    
    $("#dbPictureSlide").slidesjs({
        width: 200,
        height: 528,
        navigation: false,
        play: {    
            interval: 3000,
            auto: true,
            pauseOnHover: true,
        }
    });
});



