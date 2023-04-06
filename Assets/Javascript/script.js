

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





