var cnx_jwIntegrator = function(uq, ur) {
    var us, ut, uu, uv, uw;
    var ux = {
        '[description_url]': encodeURIComponent(location[cnx669b('0x12')]),
        '[referrer_url]': encodeURIComponent(location[cnx669b('0x12')]),
        '[timestamp]': +new Date()
    };
    function uy() {
        ut = CNXPL[cnx669b('0x41d')]({
            'container': uq[cnx669b('0x1c4')],
            'adScript': cnx669b('0x473'),
            'callback': uz
        });
        ut[cnx669b('0x41f')]();
    }
    function uz(uA) {
        if (uA[cnx669b('0x121')][cnx669b('0x141')][cnx669b('0x474')]) {
            us = uA[cnx669b('0x121')][cnx669b('0x141')][cnx669b('0x474')];
        } else {
            ur(cnx669b('0xa3'));
            return;
        }
        uG(us, cnx669b('0x475'));
        if (!us()['on']) {
            ur(cnx669b('0xa3'));
            return;
        }
        uu = setTimeout(function() {
            ur(cnx669b('0xa3'));
        }, uq[cnx669b('0x1d7')] || CNXPL[cnx669b('0x127')][cnx669b('0x3b4')]);
    }
    function uB(uC, uD) {
        var uE = uC + cnx669b('0x476') + uD;
        var uF = new XMLHttpRequest();
        uF[cnx669b('0x188')](cnx669b('0x477'), uE, !![]);
        uF[cnx669b('0x194')]();
    }

    function uG(uH, uI) {
        jw = uH(cnx669b('0x478'));
        var uJ = new XMLHttpRequest();
        uJ[cnx669b('0x479')] = function() {
            if (this[cnx669b('0x25c')] == 0x4 && this[cnx669b('0x18e')] == 0xc8) {
                var uK = JSON[cnx669b('0x1a8')](this[cnx669b('0x191')]);
                var uL = uK[cnx669b('0x47a')][cnx669b('0x13')];
                var uM = Math[cnx669b('0x3e')](Math[cnx669b('0x3f')]() * uL);
                var uN = uK[cnx669b('0x47a')][uM][cnx669b('0x47b')][0x0][cnx669b('0x1dc')];
                var uO = uK[cnx669b('0x47a')][uM][cnx669b('0x47c')];
                var uP = uK[cnx669b('0x47a')][uM][cnx669b('0x47d')];
                var uQ = uO[cnx669b('0x44')](',');
                var uR;
                for (var uS = 0x0; uS < uQ[cnx669b('0x13')]; uS++) {
                    var uT = uQ[uS];
                    if (uK[cnx669b('0x19')](uT)) {
                        uR = !![];
                        for (var uU in ux) {
                            var uV = ux[uU];
                            var uW = Object[cnx669b('0x140')](ux)[cnx669b('0x13')];
                            for (j = 0x0; j <= uW; j++) {
                                uK[uT] = uK[uT][cnx669b('0x136')](uU, uV);
                            }
                        }
                        jw[cnx669b('0x47e')]({
                            'playlist': cnx669b('0x47f') + uP,
                            'controls': ![],
                            'advertising': {
                                'client': cnx669b('0x480'),
                                'tag': uK[uT]
                            },
                            'mute': !![],
                            'autostart': ![]
                        });
                        uS = uQ[cnx669b('0x13')];
                        var uX = ![];
                        var uY = ![];
                        var uZ = ![];
                        jw['on'](cnx669b('0x10e'), function() {
                            if (Math[cnx669b('0x3e')](jw[cnx669b('0x481')]()) >= 0x3 && uX === ![]) {
                                uB(cnx669b('0x482'), uP);
                                uX = !![];
                            }
                            ;if (Math[cnx669b('0x3e')](jw[cnx669b('0x481')]()) >= 0xf && uY === ![]) {
                                uB(cnx669b('0x483'), uP);
                                uY = !![];
                            }
                            ;if (Math[cnx669b('0x3e')](jw[cnx669b('0x481')]()) >= 0x1e && uZ === ![]) {
                                uB(cnx669b('0x484'), uP);
                                uZ = !![];
                            }
                            ;
                        });
                        CNXPL[cnx669b('0x485')][cnx669b('0x50')](function(v0) {
                            jw['on'](v0, function(v1) {
                                switch (v0) {
                                case cnx669b('0x2b'):
                                    if (uq[cnx669b('0x486')][cnx669b('0x36e')]) {
                                        if (uq[cnx669b('0x486')]['ci']) {
                                            if (!uw) {
                                                uw = !![];
                                                ur(cnx669b('0x95'), v1);
                                            }
                                        }
                                        if (uq[cnx669b('0x486')][cnx669b('0x36f')]) {
                                            ur(cnx669b('0x21f'), {
                                                'showAd': !![]
                                            });
                                        }
                                        if (uq[cnx669b('0x486')]['cs'][cnx669b('0x3ab')]) {
                                            uv = setTimeout(function() {
                                                ur(cnx669b('0x8c'));
                                            }, uq[cnx669b('0x486')]['cs'][cnx669b('0x3ab')]);
                                        }
                                    }
                                    break;
                                case cnx669b('0x81'):
                                    jw[cnx669b('0x2b')]();
                                    break;
                                case cnx669b('0x82'):
                                    clearTimeout(uv);
                                    clearTimeout(uu);
                                    if (!uw) {
                                        uw = !![];
                                        ur(cnx669b('0x95'), v1);
                                    }
                                    break;
                                case cnx669b('0x89'):
                                    ur(cnx669b('0xa3'), v1);
                                    break;
                                case cnx669b('0x83'):
                                    if (!uq[cnx669b('0x486')][cnx669b('0x36e')]) {
                                        ur(cnx669b('0xa3'), v1);
                                    }
                                    break;
                                case cnx669b('0x84'):
                                    ur(cnx669b('0x9b'), v1);
                                    break;
                                case cnx669b('0x87'):
                                    ur(cnx669b('0xa0'));
                                    break;
                                case cnx669b('0x88'):
                                    ur(cnx669b('0xa1'));
                                    break;
                                case cnx669b('0x85'):
                                case cnx669b('0x86'):
                                    if (uq[cnx669b('0x486')]['cs'][cnx669b('0x3ab')]) {
                                        if (!uq[cnx669b('0x486')][cnx669b('0x36f')]) {
                                            ur(cnx669b('0x21f'), {
                                                'showContent': !![]
                                            });
                                        }
                                        uv = setTimeout(function() {
                                            ur(cnx669b('0x8c'));
                                        }, uq[cnx669b('0x486')]['cs'][cnx669b('0x3ab')]);
                                    } else {
                                        ur(cnx669b('0x8c'), v1);
                                    }
                                    break;
                                }
                            });
                        });
                    }
                }
                if (!uR) {
                    ur(cnx669b('0xa3'));
                }
            } else if (this[cnx669b('0x25c')] == 0x4) {
                ur(cnx669b('0xa3'));
            }
        }
        ;
        uJ[cnx669b('0x188')](cnx669b('0x477'), uI, !![]);
        uJ[cnx669b('0x194')]();
    }
    return {
        'init': uy,
        'resizeAd': function resizeAd(v2, v3, v4) {
            us()[cnx669b('0x105')](v2, v3, v4);
        },
        'pauseAd': function pauseAd() {
            us()[cnx669b('0x39')]();
        },
        'resumeAd': function resumeAd() {
            us()[cnx669b('0x2b')]();
        },
        'setAdVolume': function setAdVolume(v5) {
            us()[cnx669b('0x472')](v5);
        },
        'getAdDuration': function getAdVolume() {
            return us()[cnx669b('0x471')]();
        },
        'getAdVolume': function getAdVolume() {
            return us()[cnx669b('0x449')]();
        },
        'getAdWidth': function getAdWidth() {
            return us()[cnx669b('0x487')]();
        },
        'getAdHeight': function getAdHeight() {
            return us()[cnx669b('0x488')]();
        },
        'destroy': function destroy() {
            us()[cnx669b('0x152')]();
            ut[cnx669b('0x489')]();
            clearTimeout(uu);
            clearTimeout(uv);
        }
    }
},