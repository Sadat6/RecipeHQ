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



// youtube api
// authinecating the google account
//   function authenticate() {
//     return gapi.auth2.getAuthInstance()
//         .signIn({scope: "https://www.googleapis.com/auth/youtube.force-ssl"})
//         .then(function() { console.log("Sign-in successful"); },
//               function(err) { console.error("Error signing in", err); });
//   }
// //   setting up key
//   function loadClient() {
//     gapi.client.setApiKey("AIzaSyAcGfs0ivOla4i7uh_q0nYkcjEgEADgwNA");
//     return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
//         .then(function() { console.log("GAPI client loaded for API"); },
//               function(err) { console.error("Error loading GAPI client for API", err); });
//   }
//   // Make sure the client is loaded and sign-in is complete before calling this method.
//   function execute() {
//     // to search using the api make sure the key is inserted
//     // use the (q) query to search for the desired video
//     // make sure the (type) query is set to video 
//     // make sure the (part) query is set to snippet
//     return gapi.client.youtube.search.list({
//       "part": ["snippet"],
//       "q": "food",
//       "type": ["video"]
//     })
//         .then(function(response) {
//                 // Handle the results here (response.result has the parsed body).
//                 console.log("Response", response);
//               },
//               function(err) { console.error("Execute error", err); });
//   }
//   gapi.load("client:auth2", function() {
//     gapi.auth2.init({client_id: "789422668946-js76l4sad0pchts9nkvugsaum5da8cle.apps.googleusercontent.com"});
//   });

  

// function videoSearch(API_KEY, toSearch)
// {
//     // call the youtube api and search for the video given the query
//     $.get("https://www.googleapis.com/youtube/v3/search?key="+ API_KEY +"&type=video&part=snippet&q=" + toSearch, (data) => {
//         // output the response
//         console.log(data)

//         var video = ''

//         data.items.forEach(item => {
//             // grab the videos id from the html
//             // var video = $("#videos");

//             video = `<iframe width="420" height "315" src="http://youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscrean> </iframe>`

//             $("#videos").append(video);

//         })
//     });
// }

// videoSearch("AIzaSyAcGfs0ivOla4i7uh_q0nYkcjEgEADgwNA", "indian");





