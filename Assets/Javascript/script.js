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
                $('.youtube-video').css('display','none')
                              
            }     
            console.log("Num of food list buttons: " + $(".food-list-btn").length)
            //Food list button click event
            foodList.delegate("button","click", function(event){
                event.preventDefault();
                $('#recipe').css('display','block')
                $('#image').css('display','block')
                $('#video').css('display','block')
                $('.youtube-video').css('display','block')
            
                indexBtnClicked = $(this).index();
                console.log("Button Click Index: "+ indexBtnClicked);
                //Ingredient List
                var foodIngredientElement = $('<li>');
                foodIngredientElement.attr('class','food-ingredients');
                
                // call up youtube video
                videoSearch("AIzaSyBFeYws43rpN5DIOd-G1ECcF1zxSwXR_yU", categorySelectedValue+"_how_to_make");
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
    // call the youtube api and search for the video given the query
    fetch("https://www.googleapis.com/youtube/v3/search?key="+ API_KEY +"&type=video&part=snippet&q=" + toSearch)
    .then(function(data) {
        return data.json()
    })
    .then(function(data){
        // grab the video id
        var videoID = data['items'][0]['id']['videoId'];
        // grab the id from the html
        const iFrameElement = document.querySelector("#iFrameVideo");
        // plug in the video with the embeded link 
        iFrameElement.src = `http://www.youtube.com/embed/${videoID}`
    })
}
// <![CDATA[  <-- For SVG support
if ('WebSocket' in window) {
    (function () {
        function refreshCSS() {
            var sheets = [].slice.call(document.getElementsByTagName("link"));
            var head = document.getElementsByTagName("head")[0];
            for (var i = 0; i < sheets.length; ++i) {
                var elem = sheets[i];
                var parent = elem.parentElement || head;
                parent.removeChild(elem);
                var rel = elem.rel;
                if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
                    var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
                    elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
                }
                parent.appendChild(elem);
            }
        }
        var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
        var address = protocol + window.location.host + window.location.pathname + '/ws';
        var socket = new WebSocket(address);
        socket.onmessage = function (msg) {
            if (msg.data == 'reload') window.location.reload();
            else if (msg.data == 'refreshcss') refreshCSS();
        };
        if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
            console.log('Live reload enabled.');
            sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
        }
    })();
}
else {
    console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
}