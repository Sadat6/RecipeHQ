var searchBar = ["foodcategory"]
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

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '51a8b8f970msh294e2129279c3a5p130ec8jsna317748ab7a8',
		'X-RapidAPI-Host': 'worldwide-recipes1.p.rapidapi.com'
	}
};

fetch('https://worldwide-recipes1.p.rapidapi.com/api/search?q=beef', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '51a8b8f970msh294e2129279c3a5p130ec8jsna317748ab7a8',
// 		'X-RapidAPI-Host': 'worldwide-recipes1.p.rapidapi.com'
// 	}
// };

// fetch('https://worldwide-recipes1.p.rapidapi.com/api/explore', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));