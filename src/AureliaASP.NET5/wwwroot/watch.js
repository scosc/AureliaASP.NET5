export class watch{

    var player;

    var videoId = 'W5JfexPxA8w';

    var country = '';

    // self executing function here
    (function () {

        // 2. This code loads the IFrame Player API code asynchronously.
        var tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // 3. This function creates an <iframe> (and YouTube player)
        //    after the API code downloads.

        checkPlayerState();

        var v = Cookies.getJSON('v');
        if (v !== null && v !== '' && v !== undefined) {
            videoId = v;
        }
        else {
            v = getParameterByName("v");
            if (v !== null && v !== '' && v !== undefined) {
                videoId = v;
                Cookies.set('v', videoId);
            }
        }

        //geolocator.locateByIP(onGeoSuccess, onGeoError, 2, 'map-canvas');
        var html5Options = { enableHighAccuracy: true, timeout: 6000, maximumAge: 0 };
        geolocator.locateByIP(onGeoSuccess, onGeoError);

    })();

    //The callback function executed when the location is fetched successfully.
    function onGeoSuccess(location) {
        console.log(location);
        country = location.address.country;
        var countryDiv = document.getElementById("country");
        countryDiv.innerText = country;
    }
    //The callback function executed when the location could not be fetched.
    function onGeoError(error) {
        console.log(error);
    }

    function checkPlayerState() {
        setInterval(function () {
            if (player !== null) {
                if (player.getPlayerState() == YT.PlayerState.ENDED) {
                    //setTimeout(stopVideo, 6000);
                    //done = true;
                    //event.target.playVideo();
                    player.playVideo();
                }

            }

        }, 100);
    }

    function onYouTubeIframeAPIReady() {
        player = new YT.Player('youtubeplayer', {
            height: '390',
            width: '640',
            origin: 'http://localhost:17022/',
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            },

        });
    }

    function onPlayerReady(event) {
        var title = document.getElementById("video-title");
        player.loadVideoById(videoId, 5, "large");
        title.innerText = player.getVideoData().title;
        //player.playVideo();

        //player.addEventListener('onStateChange', function (event) {
        //    console.log("Payer state changed" + event.data);
        //    if (event.data == YT.PlayerState.ENDED) {
        //        //setTimeout(stopVideo, 6000);
        //        //done = true;
        //        event.target.playVideo();
        //    }
        //});

    }

    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.ENDED) {
            //setTimeout(stopVideo, 6000);
            //done = true;
            //event.target.playVideo();
            player.playVideo();
        }
    }

    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
}