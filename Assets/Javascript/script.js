var searchValue = "";
var categorySelectedValue =  "";
var searchBtn = $("#search-btn");
var foodList = $('#food-list') //.children(1)
var foodIngredients=$("#recipe");
var foodImage=$("#image");
var indexBtnClicked;

$('#category').on('change', function () {
    categorySelectedValue=$("#category option:selected").val();
});

    
 
searchBtn.on('click', function(event){

    event.preventDefault();

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '53f78cc422c1b36e1de17556596d28a1',
            'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
        }
    };
    
    console.log("This is category selected value: " + categorySelectedValue);
    
    fetch('https://api.edamam.com/api/recipes/v2?type=public&q=q&app_id=b9c6ace0&app_key=53f78cc422c1b36e1de17556596d28a1%09&health='+ categorySelectedValue)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data)
            console.log(data.hits[0].recipe.label);
            console.log("This is the length of hits: "+ data.hits.length)


            for(var i=0; i < data.hits.length; i++){

                var foodListElement = $('<button>');
                var foodListBrk = $('<br>');
                foodListElement.attr('class','food-list-btn');
                foodListElement.attr('style','margin: 5px; padding: 5px;');
                foodListElement.text(data.hits[i].recipe.label);
                foodList.append(foodListElement);
                // foodList.append(foodListBrk);



                $('#recipe').css('display','none')
                $('#image').css('display','none')
                $('#video').css('display','none')

            }     
            console.log("Num of food list buttons: " + $(".food-list-btn").length)

            //Food list button click event
            foodList.delegate("button","click", function(event){
                event.preventDefault();

                $('#recipe').css('display','block')
                $('#image').css('display','block')
                $('#video').css('display','block')
            
                indexBtnClicked = $(this).index();

                console.log("Button Click Index: "+ indexBtnClicked);

                //Ingredient List
                var foodIngredientElement = $('<li>');
                foodIngredientElement.attr('class','food-ingredients');
                foodIngredientElement.text(data.hits[indexBtnClicked].recipe.ingredientLines);

                //removing existing li element from recipe section
                if($(".food-ingredients").length){
                    $(".food-ingredients").remove();
                }
                foodIngredients.append(foodIngredientElement);

                //Dish Image Element
                var foodImageElement = $('<img>');
                foodImageElement.attr('class','food-image');
                foodImageElement.attr('src',data.hits[indexBtnClicked].recipe.image)

                //removing existing image element from image section
                if($(".food-image").length){
                    $(".food-image").remove();
                }
                foodImage.append(foodImageElement);

                console.log("Num of food list buttons: " + $(".food-list-btn").length)

                if(indexBtnClicked > data.hits.length){
                    //indexBtnClicked = ;
                }
  
            })

            
        })

    $('#mainDiv').css('display','block');
    $('#dbPictureSlide').css('display','none');
    //foodList.css('display','block');

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





