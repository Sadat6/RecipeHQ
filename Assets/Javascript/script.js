const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '53f78cc422c1b36e1de17556596d28a1',
        'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
    }
};

// var searchValue = ""
var meatBased = $("#meat-based");
var vegan = $("#vegan");
var glutenFree = $("gluten-free");

fetch('https://api.edamam.com/api/recipes/v2?type=public&q=q&app_id=b9c6ace0&app_key=53f78cc422c1b36e1de17556596d28a1%09&health=vegan')
    // .then(response => response.json())
    // .then(response => console.log(response))
    // .catch(err => console.error(err));
    .then(function(searchValue) {
        return searchValue.json();
    })
    .then(function(searchValue) {
        console.log(searchValue)
        meatBased.text(searchValue.recipe)
        vegan.text(searchValue.recipe)
        glutenFree.text(searchValue.recipe)

    })
    

var foodList = ["foods"];
var recipe = ["selection"];
var video = ["YouTube"];
var searchBtn = $("#search-btn");

function submission(event) {
    event.preventDefault()

}
searchBtn.on("click" , submission)

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


