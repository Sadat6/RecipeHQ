

var searchValue = "";
var categorySelectedValue =  "";
var searchBtn = $("#search-btn");
var foodList = $('#food-list').children(1)

$('#category').on('change', function () {
    categorySelectedValue=$("#category option:selected").val();
});

    

searchBtn.on('click', function(event){

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '53f78cc422c1b36e1de17556596d28a1',
            'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
        }
    };
    
    console.log("This is category selected value: " + categorySelectedValue);
    
    fetch('https://api.edamam.com/api/recipes/v2?type=public&q=q&app_id=b9c6ace0&app_key=53f78cc422c1b36e1de17556596d28a1%09&health='+ categorySelectedValue)
        .then(function(searchValue) {
            return searchValue.json();
        })
        .then(function(searchValue) {
            console.log(searchValue)
            console.log(searchValue.hits.recipe)

            for(var i=0; i < searchValue.hits.length; i++){
            var foodListElement = $('<li>');
            foodListElement.text(searchValue.hits[i]);
            foodList.append(foodListElement);
        }
        })
      

    event.preventDefault();

    $('#mainDiv').css('display','block');
    $('#dbPictureSlide').css('display','none');

    


    foodList.text(categorySelectedValue);

});



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


function videoSearch(API_KEY, toSearch)
{    
    let iFrameTarget = document.getElementById("iFrameVideo");

    // call the youtube api and search for the video given the query
    fetch("https://www.googleapis.com/youtube/v3/search?key="+ API_KEY +"&type=video&part=snippet&q=" + toSearch)
    .then(function(data) {
        return data.json()
    })
    .then(function(data){
        console.log(data)

        // grab the videos id
        var videoContainer = document.querySelector(".videos");

        let videos = data.items;
        for(video of videos){
            // videoContainer.innerHTML += `
            // <img src="${vides.snippet.thumbnails.url}">
            // `

            console.log(`${window.location.pathname.split('/')[3]}`);

        }


    })
}

videoSearch("AIzaSyAcGfs0ivOla4i7uh_q0nYkcjEgEADgwNA", "indian");





