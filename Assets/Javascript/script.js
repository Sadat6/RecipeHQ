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

