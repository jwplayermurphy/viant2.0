cnx_jwIntegrator = function(u, p) {
    var i, e, g, f, m;

    function t(e) {
        e.iframe.contentWindow.jwplayer ? (function(e, t) {
            jw = e("cnx-ad-element");
            var n = new XMLHttpRequest;
            n.onreadystatechange = function() {
                if (4 == this.readyState && 200 == this.status)
                    for (var e = JSON.parse(this.responseText), t = e.playlist.length, n = Math.floor(Math.random() * t), i = (e.playlist[n].sources[0].file, e.playlist[n].tags), a = e.playlist[n].mediaid, s = i.split(","), r = 0; r < s.length; r++) {
                        var o = s[r];
                        if (e.hasOwnProperty(o)) {
                            jw.setup({
                                playlist: "https://cdn.jwplayer.com/v2/media/" + a,
                                controls: !1,
                                advertising: {
                                    client: "googima",
                                    tag: e[o]
                                },
                                mute: !0,
                                autostart: !1
                            }), r = s.length;
                            var c = !1,
                                l = !1,
                                d = !1;
                            jw.on("time", function() {
                                3 <= Math.floor(jw.getPosition()) && !1 === c && (v("https://x.vindicosuite.com/dserve/t=d;l=557921;c=1065424;b=4819688;ad=COGGIhC66g0YoDMgASgEMMeUATiV1wFAzYIUSLbcGFDQg0FY6JWmAmDIgBFosq4ncAJ4AYgBAJABAZgBAaIBEzE4NTEzMDMzNzkxMDY0Nzk5NTOyAQVWSURFT7gBAcABAMgBANABANgBAOgB-P_s-5As;a=278600;ts=TIMESTAMP", a), c = !0), 15 <= Math.floor(jw.getPosition()) && !1 === l && (v("https://x.vindicosuite.com/dserve/t=d;l=557922;c=1065425;b=4819687;ad=COKGIhC66g0YoDMgASgEMMeUATiV1wFAzoIUSMLcGFDRg0FY55WmAmDJgBFosq4ncAJ4AYgBAJABAZgBAaIBEzYyNzk5MzQ1OTcxOTE3NTkwNjGyAQVWSURFT7gBAcABAMgBANABANgBAOgBlZfs-5As;a=278601;ts=TIMESTAMP", a), l = !0), 30 <= Math.floor(jw.getPosition()) && !1 === d && (v("https://x.vindicosuite.com/dserve/t=d;l=557923;c=1065426;b=4819689;ad=COOGIhC66g0YoDMgASgEMMeUATiV1wFAz4IUSM7cGFDSg0FY6ZWmAmDKgBFosq4ncAJ4AYgBAJABAZgBAaIBEzQwNDYzOTA5OTkxNzY3NjAyODayAQVWSURFT7gBAcABAMgBANABANgBAOgBi-ns-5As;a=278602;ts=TIMESTAMP", a), d = !0)
                            }), CNXPL.JW_EVENTS.forEach(function(t) {
                                jw.on(t, function(e) {
                                    switch (t) {
                                        case "play":
                                            u.adSettings.aoc && (u.adSettings.ci && (m || (m = !0, p("AdImpression", e))), u.adSettings.civ && p("customEvent", {
                                                showAd: !0
                                            }), u.adSettings.cs.delay && (f = setTimeout(function() {
                                                p("AdStopped")
                                            }, u.adSettings.cs.delay)));
                                            break;
                                        case "ready":
                                            jw.play();
                                            break;
                                        case "adImpression":
                                            clearTimeout(f), clearTimeout(g), m || (m = !0, p("AdImpression", e));
                                            break;
                                        case "adError":
                                            u.adSettings.aoc || p("AdError", e);
                                            break;
                                        case "adClick":
                                            p("AdClickThru", e);
                                            break;
                                        case "adPause":
                                            p("AdPaused");
                                            break;
                                        case "adPlay":
                                            p("AdPlaying");
                                            break;
                                        case "adSkipped":
                                        case "adComplete":
                                            u.adSettings.cs.delay ? (u.adSettings.civ || p("customEvent", {
                                                showContent: !0
                                            }), f = setTimeout(function() {
                                                p("AdStopped")
                                            }, u.adSettings.cs.delay)) : p("AdStopped", e)
                                    }
                                })
                            })
                        } else p("AdError")
                    } else 4 == this.readyState && p("AdError")
            }, n.open("GET", t, !0), n.send()
        }(i = e.iframe.contentWindow.jwplayer, "https://cdn.jwplayer.com/v2/playlists/YAOQ9GMJ"), i().on ? g = setTimeout(function() {
            p("AdError")
        }, u.impressionTimeout || CNXPL.Cfg.TIMEOUT_IMPRESSION) : p("AdError")) : p("AdError")
    }

    function v(e, t) {
        var n = e + ";jwmediaid=" + t,
            i = new XMLHttpRequest;
        i.open("GET", n, !0), i.send()
    }
    return {
        init: function() {
            (e = CNXPL.IframeLoader({
                container: u.slot,
                adScript: "https://content.jwplatform.com/libraries/xbqSp8p5.js",
                callback: t
            })).loadIframe()
        },
        resizeAd: function(e, t, n) {
            i().resize(e, t, n)
        },
        pauseAd: function() {
            i().pause()
        },
        resumeAd: function() {
            i().play()
        },
        setAdVolume: function(e) {
            i().setVolume(e)
        },
        getAdDuration: function() {
            return i().getDuration()
        },
        getAdVolume: function() {
            return i().getVolume()
        },
        getAdWidth: function() {
            return i().getWidth()
        },
        getAdHeight: function() {
            return i().getHeight()
        },
        destroy: function() {
            i().remove(), e.destroyIframe(), clearTimeout(g), clearTimeout(f)
        }
    }
}