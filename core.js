var tagsToFire = {
    threeSecond: "https://x.vindicosuite.com/dserve/t=d;l=557921;c=1065424;b=4819688;ad=COGGIhC66g0YoDMgASgEMMeUATiV1wFAzYIUSLbcGFDQg0FY6JWmAmDIgBFosq4ncAJ4AYgBAJABAZgBAaIBEzE4NTEzMDMzNzkxMDY0Nzk5NTOyAQVWSURFT7gBAcABAMgBANABANgBAOgB-P_s-5As;a=278600;ts=TIMESTAMP",
    fifteenSecond: "https://x.vindicosuite.com/dserve/t=d;l=557922;c=1065425;b=4819687;ad=COKGIhC66g0YoDMgASgEMMeUATiV1wFAzoIUSMLcGFDRg0FY55WmAmDJgBFosq4ncAJ4AYgBAJABAZgBAaIBEzYyNzk5MzQ1OTcxOTE3NTkwNjGyAQVWSURFT7gBAcABAMgBANABANgBAOgBlZfs-5As;a=278601;ts=TIMESTAMP",
    thirtySecond: "https://x.vindicosuite.com/dserve/t=d;l=557923;c=1065426;b=4819689;ad=COOGIhC66g0YoDMgASgEMMeUATiV1wFAz4IUSM7cGFDSg0FY6ZWmAmDKgBFosq4ncAJ4AYgBAJABAZgBAaIBEzQwNDYzOTA5OTkxNzY3NjAyODayAQVWSURFT7gBAcABAMgBANABANgBAOgBi-ns-5As;a=278602;ts=TIMESTAMP",
}

var potentialMacros = {
    "[description_url]": encodeURIComponent(location.href),
    "[referrer_url]": encodeURIComponent(location.href),
    "[timestamp]": + new Date(),
};

function injectScript() {
    const s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://content.jwplatform.com/libraries/nYLmRo1U.js";
    document.head.append(s);
}

function createJWPlayer() {

    g = document.createElement('div');
    g.setAttribute("id", "jwplayer_video_container");
    if(!document.getElementById("jwplayer_video_container")) {
  document.write("<div id='jwplayer_video_container'></div>");
}

}

function fireTag(tag, id) {
    var tagToFire = tag + ";jwmediaid=" + id;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {}
    };
    xhttp.open("GET", tagToFire, true);
    xhttp.send();
}

function buildJW(jwplayer, playlistUrl) {
    var playerInstance = jwplayer("jwplayer_video_container");
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var playerResponseObject = JSON.parse(this.responseText);
            var playlistLength = playerResponseObject.playlist.length;
            var randInt = Math.floor(Math.random() * playlistLength);
            var file = playerResponseObject.playlist[randInt].sources[0].file;
            var tags = playerResponseObject.playlist[randInt].tags;
            var mediaid = playerResponseObject.playlist[randInt].mediaid;
            var playlistTags = tags.split(",");

            for (var i = 0; i < playlistTags.length; i++) {
                var tag = playlistTags[i];
                
                if (playerResponseObject.hasOwnProperty(tag)) {

                    var dfpTag = playerResponseObject[tag]; 

                    console.log(dfpTag);
                    
                    for (var macro in potentialMacros) {
                        var macroValue = potentialMacros[macro];
                        var numLoops = Object.keys(potentialMacros).length;
                        for (j = 0; j <= numLoops; j++) {
                            dfpTag = dfpTag.replace(macro, macroValue);
                        }
                    }

                    console.log("new: " + dfpTag);

                    jwplayer("jwplayer_video_container").setup({
                        playlist: "https://cdn.jwplayer.com/v2/media/" + mediaid,
                        advertising: {
                            client: "vast",
                            tag: dfpTag,
                            vpaidcontrols: true
                        },
                        mute: true,
                        autostart: false
                    });
                    i = playlistTags.length;
                    var threeSec = false;
                    var fifteenSec = false;
                    var thirtySec = false;

                    playerInstance.on("time", function () {
                        var currentPosition = playerInstance.getPosition()
                        if (Math.floor(currentPosition) >= 3 && !threeSec) {
                            fireTag(
                                tagsToFire.threeSecond,
                                mediaid);
                            threeSec = true;
                        };
                        if (Math.floor(currentPosition) >= 15 && !fifteenSec) {
                            fireTag(
                                tagsToFire.fifteenSecond,
                                mediaid);
                            fifteenSec = true;
                        };
                        if (Math.floor(currentPosition) >= 30 && !thirtySec) {
                            fireTag(
                                tagsToFire.thirtySecond,
                                mediaid);
                            thirtySec = true;
                        };
                    });
                }
            }
        }
    };
    xmlhttp.open("GET", playlistUrl, true);
    xmlhttp.send();
}
createJWPlayer();
injectScript();
buildJW(jwplayer, "https://cdn.jwplayer.com/v2/playlists/b53dbsV1");