var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var dataVideoId = 'data-video-id',
    flexVidClass = '.flex-vid',
    playerTargetClass = '.player-target',
    placeholderClass = '.player-placeholder';

function onYouTubePlayerAPIReady() {

    // Set up for multiple videos on one page
    $(flexVidClass).each(function () {
        var video = $(this).find(playerTargetClass).attr(dataVideoId),
            playerId = 'player-'+video;

        // Set up the placeholder for desktop views
        if (document.documentElement.clientWidth > 1050) {
            var placeholderImage = $(this).attr('data-video-placeholder');
            $(this).find(placeholderClass).css('background-image', 'url("'+placeholderImage+'")');
        }

        // Set up the actual YouTube player
        playerId = new YT.Player(playerId, {
            width: '1280',
            height: '720',
            videoId: video,
            playerVars: {
                'autoplay': 0,
                'controls': 0,
                'showinfo': 0,
                'rel': 0,
                'modestbranding': 1
            },
            events: {
                'onReady': onPlayerReady
            }
        });
    });

}

// Fire fitVids after the video(s) has/have been loaded
function onPlayerReady() {
    $(flexVidClass).fitVids();
}
$(document).ready(function(){
    $(flexVidClass).fitVids();
});

// Set up the placeholder play trigger
$(flexVidClass).on('click', placeholderClass, function () {
    var playerParent = $(this).closest(flexVidClass),
        video = $(playerParent).find(playerTargetClass).attr(dataVideoId),
        playerId = 'player-'+video,
        player = YT.get(playerId);

    $(playerParent).addClass('state-playing');
    player.playVideo();
});