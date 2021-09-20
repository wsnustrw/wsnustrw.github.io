var DEV = typeof noloader !== 'undefined' ? noloader : false
  , ua = navigator.userAgent
  , $win = $(window)
  , $doc = $(document)
  , $html = $('html')
  , $body = $('body')
  , $res = 950
  , $g = gsap
  , $gs = ScrollTrigger
  , nn = Linear.easeNone
  , exo = Expo.easeOut
  , exi = Expo.easeInOut
  , $y = 0
  , $x = 0
  , $scrollTo = false
  , $ifScrollH = $('[data-horizontal]').length
  , mouseDir = null
  , yApp = 0
  , xAppH = 0;
$(window).bind("pageshow", function(event) {
    if (event.originalEvent.persisted) {
        window.location.reload()
    }
});
$.fn.app = function() {
    this.arrange = $grid.arrange;
    return this;
}
function sizeBgRound() {
    var $w_w = $win.width() * 1.5;
    var $w_h = $win.height() * 1.5;
    if ($w_w > $w_h) {
        $('.cirbc .cirb').width($w_w).height($w_w);
    } else {
        $('.cirbc .cirb').width($w_h).height($w_h);
    }
}
function heightPart() {
    $winh = $win.height();
    $('#app, #n, #we, #sv .rg, #sv .lgt, [data-height], .ec > .cov, .ec section.nxt, .sp-2, #err, .sp-2 .eavl').outerHeight($winh);
}
$win.on('load', function() {
    sizeBgRound();
});
$win.on('load resize', function(e) {
    heightPart();
});
function hColor() {
    $('[data-h-color]').each(function() {
        var $t = $(this);
        var $o = $t.offset().top;
        var $h = $t.outerHeight();
        var $c = $t.data('h-color');
        var $hh = $('#h').outerHeight();
        if (0 + $hh / 2 > $o && $o + $h > 0 + $hh / 2) {
            $body.addClass($c);
        } else {
            $body.removeClass($c);
        }
    });
}
hColor();
function ifIE() {
    var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1 || /Edge/.test(ua);
    return is_ie;
}
ifIE() ? $html.addClass('ie') : !1;
function ifMobile() {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp| netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck| ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c| k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50| p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]| c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        return true;
    } else {
        return false;
    }
}
ifMobile() ? $html.addClass('mob') : !1;
$cursor = {
    cur: $('[data-cursor]'),
    cur1: $('[data-cursor] .cur1'),
    cur2: $('[data-cursor] .cur2'),
    classCursor: function() {
        var t = this;
        $('[data-cc]').each(function() {
            var $t = $(this);
            var c = $t.data('cc');
            $t.on({
                mouseover: function() {
                    $body.addClass(c);
                },
                mouseleave: function() {
                    $body.removeClass(c);
                }
            });
        });
    },
    init: function() {
        var t = this;
        t.classCursor();
        $doc.on({
            mousemove: function(e) {
                var cx = e.pageX;
                var cy = e.pageY;
                $g.to(t.cur1, 0, {
                    left: cx,
                    top: cy
                });
                $g.to(t.cur2, .15, {
                    left: cx,
                    top: cy
                });
            }
        });
        $('.line-ec .lp > *, form fieldset, form label, input, textarea, a, button, [data-nav], [data-link], [data-hover], [data-mail], [data-part]').each(function() {
            $(this).on({
                mouseenter: function() {
                    $body.addClass('hover');
                },
                mouseleave: function() {
                    $body.removeClass('hover');
                }
            });
        });
    }
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
class HorizontalScrollPlugin extends Scrollbar.ScrollbarPlugin {
    transformDelta(delta, fromEvent) {
        if (!/wheel/.test(fromEvent.type)) {
            return delta;
        }
        const {x, y} = delta;
        return {
            y: 0,
            x: Math.abs(x) > Math.abs(y) ? x : y
        };
    }
}
_defineProperty(HorizontalScrollPlugin, "pluginName", 'horizontalScroll');
if (ifMobile()) {
    var $damping = 0.1;
} else {
    var $damping = 0.07;
}
if ($ifScrollH) {
    if ($win.width() > $res) {
        Scrollbar.use(HorizontalScrollPlugin);
        $html.addClass('horiz');
        var $vertical = false;
        $gs.defaults({
            horizontal: true
        });
    } else {
        Scrollbar.use();
        $html.addClass('verti');
        var $vertical = true;
    }
} else {
    Scrollbar.use();
    $html.addClass('verti');
    var $vertical = true;
}
var $s = Scrollbar.init(document.querySelector('#app'), {
    damping: $damping,
    alwaysShowTracks: false,
    delegateTo: document
});
if ($('#crea').length && $('#crea .rc').length) {
    $('#crea .rc').each(function() {
        $screa = Scrollbar.init(this, {
            damping: $damping,
            alwaysShowTracks: false
        });
    });
}
$('#smooth-scrollbar-style').remove();
$gs.scrollerProxy('body', {
    scrollTop(value) {
        if (arguments.length) {
            $s.scrollTop = value;
        }
        return $s.scrollTop;
    },
    scrollLeft(value) {
        if (arguments.length) {
            $s.scrollLeft = value;
        }
        return $s.scrollLeft;
    }
});
$s.addListener($gs.update);
$s.addListener(function(status) {
    $y = status.offset.y;
    $x = status.offset.x;
});
$g.defaults({
    ease: nn
});
$g.config({
    nullTargetWarn: false
});
$('[data-mail]').each(function() {
    var $t = $(this)
      , m = $t.data('mail')
      , d = $t.data('domain')
      , mail = m + '@' + d
      , dis = m + '<i class="fa at"></i>' + d;
    $t.append(dis).on('click', function() {
        location.href = "mailto:" + mail;
        !1;
    });
});
$('[data-bg]').each(function() {
    var i = $(this).data('bg');
    i ? $(this).css('background-image', 'url(' + i + ')') : !1;
});
var $cookies = {
    closeCookie: function() {
        $('[data-ck-close]').on('click', function(e) {
            e.preventDefault();
            var $c = $(this).data('ck-close');
            sessionStorage.removeItem('cookies-no');
            localStorage.removeItem('cookies-yes');
            if ($c == 'no') {
                sessionStorage.setItem('cookies-no', new Date());
            } else {
                localStorage.setItem('cookies-yes', new Date());
            }
            $body.removeClass('cks');
        });
    },
    changeCookie: function() {
        $('[data-ck-change]').on('click', function() {
            $body.addClass('cks');
        });
    },
    init: function() {
        var t = this;
        t.closeCookie();
        t.changeCookie();
        if (localStorage.getItem('cookies-yes') != null || sessionStorage.getItem('cookies-no') != null) {} else {
            $body.addClass('cks');
        }
    }
}
$cookies.init();
var $swiper = {
    nav: function(id) {
        return {
            nextEl: '.next-' + id,
            prevEl: '.prev-' + id,
        }
    },
    pagi: function(id) {
        return {
            el: '.pagi-' + id,
            type: 'bullets',
            clickable: true
        }
    },
    end: function($t) {
        return {
            transitionEnd: function() {
                $t.find('.swiper-slide').removeClass('end');
                $t.find('.swiper-slide-active').addClass('end');
            }
        }
    },
    init: function() {
        var f = this;
        $('[data-swiper]').each(function() {
            var $slider = []
              , $t = $(this)
              , id = $t.data('swiper')
              , speed = $win.width() * 1.3
            if (id == 'etude') {
                $slider[id] = new Swiper(this,{
                    passiveListeners: false,
                    on: f.end($t),
                    slidesPerView: 1,
                    speed: speed,
                    parallax: true,
                    touchStartPreventDefault: false
                });
            } else if (id == 'tag') {
                $slider[id] = new Swiper(this,{
                    passiveListeners: false,
                    on: f.end($t),
                    navigation: f.nav(id),
                    slidesPerView: 'auto',
                    speed: 200,
                    freeMode: true,
                    touchStartPreventDefault: false
                });
            } else if (id == 'equipe') {
                $slider[id] = new Swiper(this,{
                    passiveListeners: false,
                    on: f.end($t),
                    navigation: f.nav(id),
                    speed: 1000,
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 30,
                    parallax: true,
                    breakpoints: {
                        600: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                            spaceBetween: 40
                        },
                        1400: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                            spaceBetween: 50
                        },
                    }
                });
            } else if (id == 'landReal') {
                $slider[id] = new Swiper(this,{
                    passiveListeners: false,
                    on: f.end($t),
                    navigation: f.nav(id),
                    speed: 1000,
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 30,
                    breakpoints: {
                        700: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                            spaceBetween: 40
                        },
                    }
                });
            } else if (id == 'landAv') {
                $slider[id] = new Swiper(this,{
                    passiveListeners: false,
                    on: f.end($t),
                    navigation: f.nav(id),
                    speed: 1000,
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 30,
                    breakpoints: {
                        700: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                            spaceBetween: 40
                        },
                    }
                });
            } else if (id == 'landRef') {
                $slider[id] = new Swiper(this,{
                    passiveListeners: false,
                    on: f.end($t),
                    navigation: f.nav(id),
                    speed: 1000,
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 30,
                    breakpoints: {
                        600: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                            spaceBetween: 40
                        },
                        900: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                            spaceBetween: 50
                        },
                        1400: {
                            slidesPerView: 4,
                            slidesPerGroup: 4,
                            spaceBetween: 50
                        },
                    }
                });
            }
        });
    }
}
$swiper.init();
if ($('#wr').lenght) {
    var wr = $g.timeline({
        paused: true
    });
    wr.to('#wr', 0, {
        display: 'flex'
    })
    wr.to('#app', 2, {
        opacity: .15
    }, 'a')
    wr.to('#wr .bg', 1, {
        height: '100%',
        ease: exi
    }, 'a')
    wr.from('#wr h2 span', 1.5, {
        y: '-100%',
        ease: exi
    }, 'a')
    wr.to('#wr .line', 1.5, {
        width: '25%',
        ease: exi
    }, 'a')
    var $work = {
        open: function() {
            wr.play();
        },
        init: function() {
            var t = this;
            $('[data-work]').on({
                click: function() {
                    t.open();
                }
            });
        }
    }
    $work.init();
}
$opt = {
    grid: {
        columns: 2,
        padding: 20,
        delay: 100,
        minWidth: 400,
        breakpoints: {
            600: {
                padding: 10
            }
        }
    }
}
$grid = {
    arrange: function(opt) {
        var base = $.extend({
            padding: 20,
            columns: 4,
            minWidth: 300,
            delay: false,
            breakpoints: {}
        }, opt);
        var w = $win.width();
        var $new = {};
        var $newVal = {};
        $.each(base.breakpoints, function(key, val) {
            if (key >= w) {
                val.columns != undefined ? $newVal.columns = val.columns : $newVal.columns = base.columns;
                val.padding != undefined ? $newVal.padding = val.padding : $newVal.padding = base.padding;
                val.minWidth != undefined ? $newVal.minWidth = val.minWidth : $newVal.minWidth = base.minWidth;
                val.delay != undefined ? $newVal.delay = val.delay : $newVal.delay = base.delay;
                var bk = {
                    columns: $newVal.columns,
                    padding: $newVal.padding,
                    minWidth: $newVal.minWidth,
                    delay: $newVal.delay,
                };
                $new.a = $.extend(a, bk);
                return false;
            }
        });
        var a = $new.a;
        if (a == undefined) {
            var a = $.extend(base, opt);
        }
        var c = []
          , ch = []
          , gw = this.width() + a.padding * 1
          , ce = this.children(a.selector);
        while (gw / a.columns < a.minWidth && a.columns > 1)
            a.columns = a.columns - 1;
        for (n = 0; n < a.columns; n += 1)
            ch[n] = 0;
        ce.each(function(i) {
            var $t = $(this)
              , col = 0
              , top = Math.min.apply(Math, ch);
            for (v = 0; v < ch.length; v += 1)
                if (ch[v] == top) {
                    col = v;
                    break;
                }
            var left = col * gw / a.columns
              , width = gw / a.columns - a.padding;
            $t.outerWidth(width);
            var cl = {
                obj: $t,
                x: left,
                y: top,
                w: width,
                h: $t.outerHeight(),
                n: i
            };
            ch[col] = cl.y + cl.h + a.padding * 1;
            c[c.length] = cl;
            $t.stop(1, 1).css({
                left: c[i].x,
                top: c[i].y,
                width: c[i].w
            });
            if (a.delay != false) {
                setTimeout(function() {
                    $t.stop().addClass('show');
                }, i * a.delay);
            } else {
                $t.addClass('show');
            }
        });
        this.height(Math.max.apply(Math, ch) - a.padding);
        return this;
    },
    loadGrid: function() {
        $("[data-grid]").each(function() {
            var $t = $(this);
            $t.app().arrange($opt.grid);
        });
    },
    init: function() {
        var t = this;
        if ($("[data-grid]").length) {
            $win.on('resize scroll load', function() {
                t.loadGrid();
            });
            t.loadGrid();
        }
    }
}
$grid.init();
var nwe = $('.wew > div').length;
var we = $g.timeline({
    paused: true,
    repeat: -1
});
we.staggerFrom('.wew > div:not(.active)', 1, {
    y: '100%',
    ease: exi,
    yoyo: true
}, 1, 'a')
we.staggerTo('.wew > div', 1, {
    y: '-100%',
    ease: exi,
    yoyo: true
}, 1, 'a')
we.to('.wew > div:first-child', 0, {
    y: '100%',
    delay: nwe - 1,
    yoyo: true
}, 'a')
we.to('.wew > div:first-child', 1, {
    y: '0%',
    delay: nwe - 1,
    ease: exi,
    yoyo: true
}, 'a')
var an = $g.timeline({
    paused: true,
    repeat: -1
});
an.to('.smc', 15, {
    y: '-140%',
    delay: 2
}, 'a')
an.from('.smc_h', 2, {
    width: '0%'
}, 'a')
an.staggerFrom('.smc .smc_lg1 div', .5, {
    autoAlpha: 0,
    delay: .3,
    ease: exo
}, .2, 'a')
an.staggerFrom('.smc .smc_u div', 1.5, {
    width: '0%',
    delay: .5,
    ease: exo
}, .2, 'a')
an.from('.smc .smc_s-sub', 1.5, {
    width: '0%',
    delay: .8,
    ease: exo
}, 'a')
an.staggerFrom('.smc .smc_s-tit', 1.5, {
    width: '0%',
    delay: 1,
    ease: exo
}, .2, 'a')
an.from('.smc .smc_a', 1.5, {
    height: '0%',
    delay: 1.5,
    ease: exo
}, 'a')
an.staggerFrom('.smc .smc_a-c li', 1.3, {
    width: '0%',
    delay: 1.9,
    ease: exo
}, .2, 'a')
an.to('.smc .smc_a', 1.5, {
    left: '80%',
    delay: 2.5,
    ease: exo
}, 'a')
an.to('.smc .smc_a-c', 1.5, {
    left: '81%',
    delay: 2.6,
    ease: exo
}, 'a')
an.from('.smc .smc_c1', 1.7, {
    width: '0%',
    delay: 2.8,
    ease: exo
}, 'a')
an.from('.smc .smc_c2', 1.5, {
    height: '0%',
    delay: 4,
    ease: exo
}, 'a')
an.staggerFrom('.smc .smc_c3 div', 1.3, {
    width: '0%',
    delay: 4.3,
    ease: exo
}, .2, 'a')
an.staggerTo('.smc .smc_c3 .fiml ~ div', 1.1, {
    left: '110%',
    delay: 9.5,
    ease: exo
}, .05, 'a')
an.from('.smc .smc_c4', 1.2, {
    width: '0%',
    delay: 10.5,
    ease: exo
}, 'a')
an.staggerTo('.smc .smc_ul div > span', 1.3, {
    width: '90%',
    delay: 11,
    ease: exo
}, .2, 'a')
an.staggerFrom('.smc .smc_ul span > span', 1.5, {
    scale: 0,
    delay: 12.5,
    ease: exo
}, .2, 'a')
an.staggerFrom('.smc .smc_lg2 div', .8, {
    autoAlpha: 0,
    delay: 13.5,
    ease: exo
}, .2, 'a')
an.staggerFrom('.smc .smc_f div', 1.2, {
    width: '0%',
    delay: 14,
    ease: exo
}, .2, 'a')
an.to('.smc', 1, {
    opacity: 0,
    delay: 15
}, 'a')
an.timeScale(1)
if ($('#map').length) {
    $map = {
        generate: function() {
            mapboxgl.accessToken = $('#map').data('key');
            var map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/dark-v9',
                center: $('#map').data('pos'),
                zoom: $('#map').data('zoom'),
                pitch: 50
            });
            map.addControl(new mapboxgl.NavigationControl());
            map.scrollZoom.disable();
            var el = document.createElement('div');
            el.className = 'marker';
            new mapboxgl.Marker(el).setLngLat($('#map').data('pos')).addTo(map);
            var serco = {
                features: [{
                    coordinates: [4.8653723, 45.7708179]
                }]
            };
        },
        init: function() {
            var t = this;
            t.generate();
        }
    }
    $map.init();
}
function $afterLoad() {
    if ($html.data('load') != true) {
        if ($('#we').length) {
            var t = $g.timeline({
                onComplete: function() {
                    we.play();
                    an.play();
                }
            });
            t.staggerFromTo('.wem > div > div', 1.3, {
                y: '100%'
            }, {
                y: '0%',
                ease: exi
            }, .2, 'a')
            t.fromTo('#we .tc', 2, {
                scale: 0,
                rotation: 0,
                autoAlpha: 0
            }, {
                scale: 1,
                rotation: -180,
                autoAlpha: 1,
                ease: exi
            }, 'a')
            t.fromTo('#we .h1', 2, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: exi
            }, 'a')
            var t = $g.timeline({
                scrollTrigger: {
                    trigger: "#we",
                    start: "bottom bottom",
                    end: "bottom top",
                    scrub: true,
                    onLeave: function() {
                        we.pause();
                        an.pause()
                    },
                    onEnterBack: function() {
                        we.play();
                        an.play()
                    }
                }
            });
            t.to('#we .wec', 1, {
                y: '-25%'
            }, 'a')
            t.to('#we .screen-c', 1, {
                x: '25%'
            }, 'a')
            t.to('#we .kb', 1, {
                x: '-100%',
                y: '30%'
            }, 'a')
            t.to('#we .ms', 1, {
                x: '-200%',
                y: '-50%'
            }, 'a')
            t.to('#we .wec, #we .screen-c', 1, {
                opacity: 0,
                delay: .4
            }, 'a')
        }
        if ($('#sv').length) {
            $g.from('#sv .circ', 1, {
                rotation: 90,
                scrollTrigger: {
                    trigger: "#sv",
                    start: "top bottom",
                    end: "top top",
                    scrub: true
                }
            });
            var $tl = $g.timeline({
                scrollTrigger: {
                    trigger: "#sv",
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                    onEnter: function() {
                        $('#sv .rg').removeClass('fx')
                    },
                    onLeaveBack: function() {
                        $('#sv .rg').addClass('fx')
                    }
                }
            });
            $tl.to('#sv .circm', 1, {
                rotation: -360
            }, 'a')
            $tl.to('#sv .rnd i', 1, {
                rotation: 360
            }, 'a')
            var $tl = $g.timeline({
                scrollTrigger: {
                    trigger: "#sv",
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub: true
                }
            });
            $tl.staggerFrom('#sv .rnd i', .25, {
                opacity: 0,
                scale: 0
            }, .25, 'a')
            $tl.staggerTo('#sv .rnd > div > div', .25, {
                width: '100%',
                height: '100%'
            }, .25, 'a')
            var $tl = $g.timeline({
                scrollTrigger: {
                    trigger: "#sv",
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });
            $tl.staggerTo('#sv .rnd > div > div', .25, {
                width: '5%',
                height: '5%'
            }, .25, 'a')
            $tl.staggerTo('#sv .rnd i', .25, {
                opacity: 0,
                scale: 0
            }, .25, 'a')
            var $tl = $g.timeline({
                scrollTrigger: {
                    trigger: ".sp-2",
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub: true
                }
            });
            if ($win.width() > 950) {
                $tl.to('#sv .rg', .25, {
                    paddingLeft: '50%'
                }, 'a')
                $tl.to('#sv .rg > div', .25, {
                    y: '0%'
                }, 'a')
                $tl.to('#sv .cir', .25, {
                    rotation: -150,
                    x: '-50%'
                }, 'a')
            } else {
                $tl.to('#sv .rg', .25, {
                    paddingLeft: '0'
                }, 'a')
                $tl.to('#sv .rg > div', .25, {
                    y: $win.outerHeight() / 2 - $('#sv .rg').outerHeight() / 2
                }, 'a')
                $tl.to('#sv .cir', .25, {
                    rotation: -150,
                    x: '0'
                }, 'a')
            }
            $tl.to('#sv .crc:nth-child(2) > div, #sv .crc:nth-child(4) > div', .25, {
                height: '0%'
            }, 'a')
            $tl.to('#sv .crc:nth-child(1) > div, #sv .crc:nth-child(3) > div', .25, {
                width: '0%'
            }, 'a')
            $g.to('#sv .crc > div', 1, {
                scale: 0,
                scrollTrigger: {
                    trigger: ".sp-2",
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });
            var $tl = $g.timeline({
                scrollTrigger: {
                    trigger: ".sp-2",
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                    onEnter: function() {
                        $('.sp-2 .eavl').removeClass('fx')
                    },
                    onLeaveBack: function() {
                        $('.sp-2 .eavl').addClass('fx')
                    }
                }
            });
            var $tl = $g.timeline({
                scrollTrigger: {
                    trigger: ".sp-2",
                    start: "bottom bottom",
                    scrub: true
                }
            });
            $tl.from('.sp-2 h2', 1, {
                opacity: 0,
                x: '50%'
            }, 'a');
            $tl.to('.cirbc svg', 1, {
                rotation: 180,
                opacity: 1,
                strokeDasharray: '300 999'
            }, 'a')
            var $tl = $g.timeline({
                scrollTrigger: {
                    trigger: ".sp-5",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
            $tl.to('.cirbc .cirbr', 1, {
                width: '100%',
                height: '100%'
            }, 'a')
            $tl.to('#sv .cir', 1, {
                scale: 0,
                opacity: 0
            }, 'a')
            $('.lgtxc').each(function() {
                var n = $(this).data('lg-st');
                var $tl = $g.timeline({
                    scrollTrigger: {
                        trigger: this,
                        start: "top bottom",
                        end: "top top",
                        scrub: true
                    }
                });
                $tl.to('.cirbc i.n' + n, 1, {
                    opacity: 1
                }, 'a')
                var $tl = $g.timeline({
                    scrollTrigger: {
                        trigger: this,
                        start: "top 20%",
                        end: "top -30%",
                        scrub: true
                    }
                });
                $tl.to(this, 1, {
                    opacity: 0
                }, 'a')
                $tl.to('.cirbc i.n' + n, 1, {
                    opacity: 0,
                    scale: 0
                }, 'a')
            });
            var $tl = $g.timeline({
                scrollTrigger: {
                    trigger: ".sp-3",
                    start: "top 50%",
                    end: "bottom 50%",
                    scrub: true
                }
            });
            $tl.to('.cirbc .cirbr', 1, {
                backgroundColor: '#e9eef0'
            }, 'a')
            $tl.to('.sp-2', 1, {
                opacity: 0
            }, 'a')
            $tl.to('.cirbc svg', 1, {
                scale: 0
            }, 'a')
            $('#sv .lgt > div').each(function() {
                $tl.fromTo(this, 1, {
                    opacity: 0
                }, {
                    opacity: 1,
                    scrollTrigger: {
                        trigger: this,
                        start: "top bottom",
                        end: "bottom 80%",
                        scrub: true
                    }
                })
            });
        }
        if ($('#co').length) {
            var $tl = $g.timeline({
                scrollTrigger: {
                    trigger: '#co h2',
                    start: "top bottom"
                }
            });
            $tl.from('#co h2 span', 1.5, {
                y: '100%',
                ease: exo
            }, 'a')
            $tl.from('#co h2 small', 1.5, {
                autoAlpha: 0,
                delay: .3,
                ease: exo
            }, 'a')
        }
        if ($('.bt').length) {
            $('.bt').each(function() {
                $g.from(this, 1.5, {
                    autoAlpha: 0,
                    ease: exo,
                    scrollTrigger: {
                        trigger: this,
                        start: "top 95%"
                    }
                });
            });
        }
        if ($('#eu').length) {
            $g.set('.hspan > span > span', {
                y: '105%'
            });
            $gs.batch('.hspan > span > span', {
                onEnter: function(batch) {
                    $g.to(batch, 1.3, {
                        y: '0%',
                        ease: exo,
                        stagger: {
                            each: .2
                        }
                    })
                }
            });
            $('#eu .eui').each(function() {
                var $t = $(this);
                $g.from($t.find('.bg'), 1.5, {
                    y: '-25%',
                    scrollTrigger: {
                        trigger: this,
                        scrub: true
                    }
                });
            });
            var $tl = $g.timeline();
            $tl.from('.tit .sub', 1.5, {
                y: -100,
                opacity: 0,
                ease: exo
            }, 'a')
            $tl.fromTo('.tit .tc', 1.5, {
                scale: 0,
                rotation: 180
            }, {
                scale: 1,
                rotation: 0,
                ease: exo
            }, 'a')
            $tl.from('.eui', 1.5, {
                y: 200,
                opacity: 0,
                ease: exo
            }, 'a')
        }
        if ($('#et').length) {
            $('.swp').each(function() {
                var $t = $(this);
                $g.to($t.find('.bg > div'), 1, {
                    y: '-25%',
                    ease: nn,
                    scrollTrigger: {
                        trigger: this,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true
                    }
                });
            });
        }
        if ($('.hspan').length) {
            $g.set('.hspan > span > span', {
                y: '105%'
            });
            $gs.batch('.hspan > span > span', {
                onEnter: function(batch) {
                    $g.to(batch, 1.3, {
                        y: '0%',
                        ease: exo,
                        stagger: {
                            each: .2
                        }
                    })
                }
            });
        }
        if ($('#sc').length) {
            $g.fromTo('#sc .tc', 2, {
                scale: 0,
                rotation: 0,
                autoAlpha: 0
            }, {
                scale: 1,
                rotation: -180,
                autoAlpha: 1,
                ease: exi
            }, 'a')
            $gs.batch('#sc .ls svg', {
                onEnter: function(batch) {
                    var $tl = $g.timeline();
                    $tl.to(batch, .1, {
                        opacity: 1,
                        stagger: {
                            each: .2
                        }
                    }, 'a')
                    $tl.to(batch, 2.5, {
                        rotation: 360,
                        stagger: {
                            each: .2
                        }
                    }, 'a')
                    $tl.to(batch, 2, {
                        strokeDasharray: '300 999',
                        stagger: {
                            each: .2
                        }
                    }, 'a')
                }
            });
            $g.set('#sc .p > *, #sc h3, #sc h4, [data-projet-id]', {
                opacity: 0,
                y: 100
            })
            $gs.batch('#sc .p > *, #sc h3, #sc h4, [data-projet-id]', {
                onEnter: function(batch) {
                    $g.to(batch, 1.5, {
                        opacity: 1,
                        y: 0,
                        ease: exo,
                        stagger: {
                            each: .2
                        }
                    }, 'a')
                }
            });
            $('[data-projet-id] img').each(function() {
                var $t = $(this);
                var $tl = $g.timeline({
                    scrollTrigger: {
                        trigger: this,
                        start: "top bottom",
                        end: "top 50%",
                        scrub: true
                    }
                });
                $tl.fromTo(this, 1, {
                    y: '25%'
                }, {
                    y: '0%'
                });
            });
            $('.ls > li').each(function() {
                var $t = $(this);
                var $tl = $g.timeline({
                    scrollTrigger: {
                        trigger: this
                    }
                });
                $tl.from($t.find('i'), 1, {
                    rotation: 90,
                    scale: 0,
                    ease: Back.easeOut
                }, 'a')
                $tl.staggerFrom($t.find('h4 > *, .bta, .p'), 1.3, {
                    y: 80,
                    opacity: 0,
                    ease: exi
                }, .2, 'a')
            });
        }
        if ($('.ec').length) {
            var $tl = $g.timeline();
            $tl.from('.cov .sub', 2, {
                y: -100,
                opacity: 0,
                delay: .5,
                ease: exo
            }, 'a')
            $tl.from('.cov .h1 span', 2, {
                y: '105%',
                ease: exi
            }, 'a')
            $tl.fromTo('.cov .tc', 2, {
                scale: 0,
                rotation: 180
            }, {
                scale: 1,
                rotation: 0,
                ease: exi
            }, 'a')
            if ($win.width() > $res) {
                $g.to('.cov .bg', 1, {
                    x: '25%',
                    scrollTrigger: {
                        trigger: ".cov",
                        start: "left",
                        scrub: true
                    }
                });
                $g.from('.line-ec, .line-p', .2, {
                    y: '100%',
                    opacity: 0,
                    scrollTrigger: {
                        trigger: ".cov",
                        start: "right left",
                        toggleActions: 'play none none reverse'
                    }
                });
                $g.to('.pres .ct', 1, {
                    x: '-15%',
                    scrollTrigger: {
                        trigger: ".pres",
                        start: "left",
                        scrub: true
                    }
                });
                $('.mck:not(.mckn)').each(function() {
                    $g.fromTo(this, 1, {
                        x: '-15%'
                    }, {
                        x: '15%',
                        scrollTrigger: {
                            trigger: this,
                            start: "left right",
                            end: "right",
                            scrub: true
                        }
                    });
                });
                var $tl = $g.timeline({
                    scrollTrigger: {
                        trigger: ".mck-1",
                        start: "left right",
                        scrub: true
                    }
                });
                $tl.fromTo('.mck-1 .m2', 1, {
                    y: '10%'
                }, {
                    y: '0%'
                }, 'a');
                $tl.fromTo('.mck-1 .m3', 1, {
                    y: '-20%',
                    x: '30%'
                }, {
                    y: '0%',
                    x: '0%'
                }, 'a');
                $g.fromTo('.mck-2 .m2', 1, {
                    y: '-10%',
                    x: '-20%'
                }, {
                    y: '20%',
                    x: '10%',
                    scrollTrigger: {
                        trigger: ".mck-2",
                        start: "left right",
                        scrub: true
                    }
                });
                var $tl = $g.timeline({
                    scrollTrigger: {
                        trigger: ".mck-5",
                        start: "left right",
                        scrub: true
                    }
                });
                $tl.fromTo('.mck-5 .m2', 1, {
                    y: '-20%',
                    x: '30%',
                    rotation: 20
                }, {
                    y: '15%',
                    x: '-10%',
                    rotation: 0
                }, 'a');
                $tl.fromTo('.mck-5 .m3', 1, {
                    y: '-20%',
                    x: '40%',
                    rotation: 20
                }, {
                    y: '10%',
                    x: '-15%',
                    rotation: -5
                }, 'a');
                $('.mck-3').each(function() {
                    var $tl = $g.timeline({
                        scrollTrigger: {
                            trigger: this,
                            start: "left right",
                            scrub: true
                        }
                    });
                    $tl.fromTo($(this).find('.m2'), 1, {
                        y: '30%'
                    }, {
                        y: '-30%'
                    }, 'a');
                    $tl.fromTo($(this).find('.m4'), 1, {
                        y: '-30%'
                    }, {
                        y: '20%'
                    }, 'a');
                });
                $g.set('.p > *, .txt, .list-s > *, .ec .ima, .ec .btec', {
                    y: 200,
                    opacity: 0
                });
                $gs.batch('.p > *, .txt, .list-s > *, .ec .ima, .ec .btec', {
                    onEnter: function(batch) {
                        $g.to(batch, 1.3, {
                            y: 0,
                            opacity: 1,
                            ease: exo,
                            stagger: {
                                each: .2
                            }
                        })
                    }
                });
                $g.set('.sb', {
                    y: -50,
                    opacity: 0
                });
                $gs.batch('.sb', {
                    onEnter: function(batch) {
                        $g.to(batch, 1.3, {
                            y: 0,
                            opacity: 1,
                            ease: exo,
                            stagger: {
                                each: .2
                            }
                        })
                    }
                });
                $('.bga').each(function() {
                    $g.to($(this).find('div'), 1, {
                        x: '-25%',
                        scrollTrigger: {
                            trigger: this,
                            start: "left right",
                            end: "right",
                            scrub: true
                        }
                    });
                });
                $g.fromTo('.line-ec .ln', 1, {
                    width: '0%'
                }, {
                    width: '100%',
                    scrollTrigger: {
                        trigger: ".ec",
                        start: "left left",
                        end: "right right",
                        scrub: true
                    }
                });
                $('[data-go-id]').each(function() {
                    var $t = $(this);
                    var $id = $t.data('go-id');
                    var $txt = $t.data('go-txt');
                    $('[data-go-puce]').append('<div class="pup" data-go="' + $id + '"><span>' + $txt + '</span></div>');
                });
                $win.on('load resize', function() {
                    $('[data-go]').each(function() {
                        var $t = $(this);
                        var $id = $t.data('go');
                        var $p = $('[data-go-id="' + $id + '"]').position().left;
                        var $mw = $('.ec').width() - $win.width();
                        var $pp = ($p * 100) / $mw;
                        if ($t.hasClass('pup')) {
                            $t.css({
                                left: $pp + '%'
                            });
                        }
                        $t.on('click', function() {
                            $s.scrollTo($p, 0, 1500);
                        });
                    });
                });
                $('.lgs').each(function() {
                    var $tl = $g.timeline();
                    $tl.staggerFromTo($(this).find('.ima'), 1, {
                        left: 150
                    }, {
                        left: -150,
                        scrollTrigger: {
                            trigger: this,
                            start: "left right",
                            end: "right left",
                            scrub: true
                        }
                    }, .5);
                });
                $('.chif > div').each(function() {
                    var $t = $(this);
                    var $nmin = $t.find('.nmb').data('nmin');
                    var $nmax = $t.find('.nmb').data('nmax');
                    var $tl = $g.timeline({
                        scrollTrigger: {
                            trigger: this,
                            start: 'left right',
                            toggleActions: 'play none none pause'
                        }
                    });
                    $tl.to($t.find('svg'), .1, {
                        opacity: 1
                    });
                    $tl.to($t.find('svg'), 2.5, {
                        rotation: 360
                    }, 'a');
                    $tl.from($t.find('strong'), 1, {
                        opacity: 0
                    }, 'a');
                    $tl.from($t.find('.tit'), 1.5, {
                        opacity: 0,
                        x: 200,
                        ease: exo
                    }, 'a');
                    $tl.to($t.find('svg'), 2, {
                        strokeDasharray: '300 999',
                        onStart: function() {
                            var Cont = {
                                val: $nmin
                            }
                              , NewVal = $nmax;
                            var $tc = $g.timeline({
                                paused: true
                            });
                            $tc.to(Cont, 3, {
                                val: NewVal,
                                ease: exo,
                                roundProps: "val",
                                onUpdate: function() {
                                    $t.find('strong').html(Cont.val);
                                }
                            });
                            $tc.play()
                        }
                    }, 'a');
                });
                $g.from('.nxt .bg', 1, {
                    x: '-25%',
                    scrollTrigger: {
                        trigger: ".nxt",
                        start: "left right",
                        end: "right right",
                        scrub: true
                    }
                });
            } else {
                $g.to('.cov .bg', 1, {
                    y: '25%',
                    scrollTrigger: {
                        trigger: ".cov",
                        start: "top",
                        scrub: true
                    }
                });
                $g.to('.pres .ct', 1, {
                    y: '-15%',
                    scrollTrigger: {
                        trigger: ".pres",
                        start: "top",
                        scrub: true
                    }
                });
                $('.mck:not(.mckn)').each(function() {
                    $g.fromTo(this, 1, {
                        y: '-15%'
                    }, {
                        y: '15%',
                        scrollTrigger: {
                            trigger: this,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true
                        }
                    });
                });
                var $tl = $g.timeline({
                    scrollTrigger: {
                        trigger: ".mck-1",
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });
                $tl.fromTo('.mck-1 .m2', 1, {
                    y: '10%'
                }, {
                    y: '0%'
                }, 'a');
                $tl.fromTo('.mck-1 .m3', 1, {
                    y: '-20%',
                    x: '30%'
                }, {
                    y: '0%',
                    x: '0%'
                }, 'a');
                $g.fromTo('.mck-2 .m2', 1, {
                    y: '-10%',
                    x: '-20%'
                }, {
                    y: '50%',
                    x: '10%',
                    scrollTrigger: {
                        trigger: ".mck-2",
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });
                var $tl = $g.timeline({
                    scrollTrigger: {
                        trigger: ".mck-5",
                        start: "left right",
                        scrub: true
                    }
                });
                $tl.fromTo('.mck-5 .m2', 1, {
                    y: '-20%',
                    x: '30%',
                    rotation: 20
                }, {
                    y: '15%',
                    x: '-10%',
                    rotation: 0
                }, 'a');
                $tl.fromTo('.mck-5 .m3', 1, {
                    y: '-20%',
                    x: '40%',
                    rotation: 20
                }, {
                    y: '10%',
                    x: '-15%',
                    rotation: -5
                }, 'a');
                $('.mck-3').each(function() {
                    var $tl = $g.timeline({
                        scrollTrigger: {
                            trigger: this,
                            start: "left right",
                            scrub: true
                        }
                    });
                    $tl.fromTo($(this).find('.m2'), 1, {
                        y: '30%'
                    }, {
                        y: '-30%'
                    }, 'a');
                    $tl.fromTo($(this).find('.m4'), 1, {
                        y: '-30%'
                    }, {
                        y: '20%'
                    }, 'a');
                });
                $g.set('.p > *, .txt, .list-s > *, .ec .ima, .ec .btec, .sb', {
                    y: 100,
                    opacity: 0
                });
                $gs.batch('.p > *, .txt, .list-s > *, .ec .ima, .ec .btec, .sb', {
                    onEnter: function(batch) {
                        $g.to(batch, 1.3, {
                            y: 0,
                            opacity: 1,
                            ease: exo,
                            stagger: {
                                each: .2
                            }
                        })
                    }
                });
                $('.bga').each(function() {
                    $g.to($(this).find('div'), 1, {
                        y: '-25%',
                        scrollTrigger: {
                            trigger: this,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true
                        }
                    });
                });
                $g.fromTo('.line-ec .ln', 1, {
                    width: '0%'
                }, {
                    width: '100%',
                    scrollTrigger: {
                        trigger: ".ec",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: true
                    }
                });
                $win.on('load resize', function() {
                    $('[data-go]').each(function() {
                        var $t = $(this);
                        var $id = $t.data('go');
                        var $p = $('[data-go-id="' + $id + '"]').position().top;
                        var $mw = $('.ec').height() - $win.height();
                        var $pp = ($p * 100) / $mw;
                        if ($t.hasClass('pup')) {
                            $t.css({
                                top: $pp + '%'
                            });
                        }
                        $t.on('click', function() {
                            $s.scrollTo(0, $p, 1500);
                        });
                    });
                });
                $('.lgs').each(function() {
                    var $tl = $g.timeline();
                    $tl.staggerFromTo($(this).find('.ima'), 1, {
                        top: 150
                    }, {
                        top: 0,
                        scrollTrigger: {
                            trigger: this,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true
                        }
                    }, .5);
                });
                $('.chif > div').each(function() {
                    var $t = $(this);
                    var $nmin = $t.find('.nmb').data('nmin');
                    var $nmax = $t.find('.nmb').data('nmax');
                    var $tl = $g.timeline({
                        scrollTrigger: {
                            trigger: this,
                            start: 'top bottom',
                            toggleActions: 'play none none pause'
                        }
                    });
                    $tl.to($t.find('svg'), .1, {
                        opacity: 1
                    });
                    $tl.to($t.find('svg'), 2.5, {
                        rotation: 360
                    }, 'a');
                    $tl.from($t.find('strong'), 1, {
                        opacity: 0
                    }, 'a');
                    $tl.from($t.find('.tit'), 1.5, {
                        opacity: 0,
                        x: 200,
                        ease: exo
                    }, 'a');
                    $tl.to($t.find('svg'), 2, {
                        strokeDasharray: '300 999',
                        onStart: function() {
                            var Cont = {
                                val: $nmin
                            }
                              , NewVal = $nmax;
                            var $tc = $g.timeline({
                                paused: true
                            });
                            $tc.to(Cont, 3, {
                                val: NewVal,
                                ease: exo,
                                roundProps: "val",
                                onUpdate: function() {
                                    $t.find('strong').html(Cont.val);
                                }
                            });
                            $tc.play()
                        }
                    }, 'a');
                });
                $g.from('.nxt .bg', 1, {
                    y: '-25%',
                    scrollTrigger: {
                        trigger: ".nxt",
                        start: "top bottom",
                        end: "bottom bottom",
                        scrub: true
                    }
                });
            }
        }
        if ($('#map').length) {
            $g.from('.marker', 1.5, {
                scale: 0,
                rotation: 90,
                ease: Back.easeOut
            })
            $g.set('.form fieldset, #cnt h3, #cnt .p, #cnt .center', {
                y: 50,
                opacity: 0
            });
            $gs.batch('.form fieldset, #cnt h3, #cnt .p, #cnt .center', {
                onEnter: function(batch) {
                    $g.to(batch, 1.3, {
                        y: 0,
                        opacity: 1,
                        ease: exo,
                        stagger: {
                            each: .2
                        }
                    })
                }
            });
            $g.to('.mapboxgl-canvas-container', 1, {
                top: '25%',
                opacity: 0,
                scrollTrigger: {
                    trigger: "#cnt",
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });
        }
    }
    $html.attr('data-load', true);
}
if ($('#land').length) {
    $html.addClass('stop landh');
    function $landing() {
        var t = $g.timeline({
            scrollTrigger: {
                trigger: ".land-t",
                start: "bottom bottom",
                end: "bottom top",
                scrub: true,
            }
        });
        t.to('.land-t .bg', 1, {
            y: '25%'
        }, 'a')
        t.to('.land-t .l', 1, {
            y: '-50%'
        }, 'a')
        t.to('#we', 1, {
            y: '-40%',
            x: '60%',
            rotation: 30,
            scale: 2
        }, 'a')
        var t = $g.timeline({
            scrollTrigger: {
                trigger: ".land-t",
                start: "top bottom",
            }
        });
        t.to('#we .we-c', .1, {
            opacity: 1,
            ease: Back.easeOut
        });
        t.to('#we .we-c', 1.5, {
            y: '0%',
            rotation: 0,
            ease: Back.easeOut
        }, 'a');
        t.to('.land-t .cache', 2, {
            y: '0',
            ease: Power1.easeOut
        }, 'a');
        t.staggerTo('#land .land-t .l > *', 1, {
            y: 0,
            opacity: 1,
            ease: Back.easeOut,
            delay: 1
        }, .3, 'a');
        var t = $g.timeline({
            scrollTrigger: {
                trigger: ".land-u ul",
                start: "top 95%",
            }
        });
        t.staggerTo('.land-u svg', 3, {
            rotation: 360,
            strokeDasharray: '360 1000',
            ease: Power1.easeOut
        }, .1, 'a');
        $gs.batch('[data-anim]', {
            onEnter: function(batch) {
                $g.to(batch, 1.3, {
                    y: 0,
                    opacity: 1,
                    ease: Back.easeOut,
                    stagger: {
                        each: .2
                    }
                })
            }
        });
        $gs.batch('[data-anim-r]', {
            onEnter: function(batch) {
                $g.to(batch, 1.3, {
                    x: 0,
                    opacity: 1,
                    ease: Back.easeOut,
                    stagger: {
                        each: .2
                    }
                })
            }
        });
        $gs.batch('.land-he .sub > span > span', {
            onEnter: function(batch) {
                $g.to(batch, .7, {
                    width: '0%'
                })
            }
        });
        var t = $g.timeline({
            scrollTrigger: {
                trigger: ".land-tx",
                start: "top bottom",
                end: "bottom 50%",
                scrub: true,
            }
        });
        t.from('.land-tx .mck1', 1, {
            x: '-25%',
            ease: Power1.easeOut
        }, 'a')
        t.from('.land-tx .mck2 img', 1, {
            x: '-60%',
            ease: Power1.easeOut
        }, 'a')
        var t = $g.timeline({
            scrollTrigger: {
                trigger: ".land-cer ul",
                start: "top 95%",
            }
        });
        t.staggerTo('.land-cer ul svg', 3, {
            strokeDasharray: '360 1000',
            ease: Power1.easeOut
        }, .1, 'a');
        var t = $g.timeline({
            scrollTrigger: {
                trigger: ".land-co",
                start: "top bottom",
                end: "bottom bottom",
                scrub: true,
            }
        });
        t.to('.land-co .bg', 1, {
            scale: 1
        }, 'a')
    }
    var tlalo = $g.timeline({
        scrollTrigger: {
            trigger: ".land-l",
            start: "top bottom"
        }
    });
    tlalo.to('.land-t .bg', 5, {
        scale: 1
    }, 'a');
    tlalo.to('.land-l .logo', .5, {
        opacity: 1
    }, 'a');
    tlalo.to('.land-l .logo', .3, {
        opacity: 0,
        scale: .5,
        delay: 1.5,
        onStart: function() {
            $landing();
            setTimeout(function() {
                $html.removeClass('stop');
            }, 1500);
        }
    }, 'a');
}
$('[data-go-form]').on('click', function() {
    $s.scrollTo(0, $('.land-co').position().top, 2000);
});
$('[data-projet-id]').on('click', function() {
    var $t = $(this);
    var $id = $t.data('projet-id');
    var $pr = $('[data-projet="' + $id + '"]');
    $html.addClass('stop creaOpen');
    $pr.addClass('open');
    $tl = $g.timeline();
    $tl.fromTo($pr.find('.bg'), 1.5, {
        height: '0%'
    }, {
        height: '100%',
        ease: exi
    }, 'a');
    $tl.staggerFromTo($pr.find('.lct > *, img'), 1.5, {
        y: 100,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        ease: exo,
        delay: .2
    }, .2, 'a');
});
$('[data-etude]').on('click', function(e) {
    e.preventDefault();
    $html.addClass('stop');
    var $t = $(this);
    var $h = $t.find('a').attr('href');
    $ct = ($t.offset().top);
    $cl = ($t.offset().left);
    $('main').addClass('upMain');
    $('.bn').addClass('closH');
    $('#h').addClass('mixb').removeClass('blck-1');
    var $tl = $g.timeline();
    $tl.to($t.parents('section'), .1, {
        zIndex: 9500
    }, 'a')
    $tl.to($t.find('.txt'), .8, {
        autoAlpha: 0,
        y: 200
    }, 'a')
    $tl.to(this, 1, {
        ease: exi,
        top: -$ct,
        left: -$cl,
        height: $win.height(),
        width: $win.width()
    }, 'a')
    $tl.to($t.find('.bg'), 1, {
        ease: exi,
        height: '100%',
        y: '0%',
        onComplete: function() {
            document.location.href = $h;
        }
    }, 'a');
});
$('[data-etude-next]').on('click', function(e) {
    e.preventDefault();
    $html.addClass('stop');
    var $t = $(this);
    var $h = $t.find('a').attr('href');
    $g.to('[data-etude-next] .tc', 1, {
        opacity: 0
    });
    if ($win.width() > $res) {
        $s.scrollTo(999999, 0, 1000);
    } else {
        $s.scrollTo(0, 999999, 1000);
    }
    setTimeout(function() {
        document.location.href = $h;
    }, 1000);
});
$('[data-close-etude]').on('click', function(e) {
    e.preventDefault();
    var $t = $(this);
    var $h = $t.attr('href');
    $('.bn').removeClass('closH');
    $('#h').removeClass('hcl');
    $('.body').addClass('blck-1');
    var $tl = $g.timeline();
    $tl.to('.bg-nxt', 0, {
        display: 'none'
    }, 'a')
    $tl.to('.line-ec, .line-p', 1, {
        opacity: 0
    }, 'a')
    if ($win.width() > $res) {
        $tl.to('#app > *', 1, {
            ease: exi,
            y: '-25%'
        }, 'a')
        $tl.to('#app', 1, {
            ease: exi,
            y: '100%',
            onComplete: function() {
                document.location.href = $h;
            }
        }, 'a');
    } else {
        $tl.to('#app > *', 1, {
            ease: exi,
            x: '-25%'
        }, 'a')
        $tl.to('#app', 1, {
            ease: exi,
            x: '100%',
            onComplete: function() {
                document.location.href = $h;
            }
        }, 'a');
    }
});
var lcl = $g.timeline();
lcl.to('#cl', 0.1, {
    pointerEvents: 'none'
})
lcl.to('#cl .clc, #cl .logo', 0, {
    display: 'block'
})
lcl.from('#cl .s1', 1.3, {
    y: '-100%',
    ease: exi
}, 'a')
lcl.from('#cl .logo', 1.2, {
    y: 100,
    opacity: 0,
    ease: exi,
    delay: .3
}, 'a')
lcl.from('#cl p', 1.2, {
    opacity: 0,
    ease: exi,
    delay: .6
}, 'a')
lcl.staggerFrom('#cl [data-color]', 1.2, {
    opacity: 0,
    delay: .8
}, .2, 'a')
lcl.to('#cl', 0.1, {
    pointerEvents: 'auto'
})
var cl = $g.timeline({
    paused: true
});
cl.to('#cl', 0.1, {
    pointerEvents: 'none'
})
cl.to('#cl .bg', 1.3, {
    height: '100%',
    ease: exi
}, 'a')
cl.to('#cl .logo', 1, {
    y: 100,
    opacity: 0,
    ease: exi
}, 'a')
cl.to('#cl .tit', 1.5, {
    y: 60,
    ease: exi
}, 'a')
cl.to('#cl p', 1, {
    opacity: 0,
    ease: exi
}, 'a')
cl.staggerTo('#cl [data-color]', .6, {
    opacity: 0
}, .1, 'a')
cl.to('#cl .s1', 1.5, {
    y: '-100%',
    ease: exi,
    delay: 1.3
}, 'a')
cl.to('#cl .s2', 1.5, {
    y: '0',
    ease: exi,
    delay: 1.3
}, 'a')
cl.to('#cl', 0.1, {
    backgroundColor: 'transparent',
    ease: exi,
    delay: 1.3
}, 'a')
cl.to('#cl .bg', 0.1, {
    bottom: 'auto',
    top: 0,
    ease: exi,
    delay: 1.3
}, 'a')
cl.to('#cl .bg', 1.3, {
    height: 0,
    top: 0,
    ease: exi,
    delay: 2.8,
    onStart: $afterLoad
}, 'a')
cl.to('#cl .s2', 1, {
    y: '-100%',
    ease: exi,
    delay: 2.8
}, 'a')
$('[data-color]').on('click', function() {
    var $t = $(this);
    var $c = $t.data('color');
    var $lk = $t.data('color-lk');
    var $cl = $t.data('color-l');
    var $cr = $t.data('color-r');
    $('[data-color]').removeClass('select');
    $('[data-color="' + $c + '"]').addClass('select');
    $body.addClass('wcl');
    $.ajax({
        url: $lk,
        method: 'GET'
    });
    $('[data-color-theme]').attr('href', '/css/front/color/' + $c + '.css');
    $('[data-theme-color]').attr('content', $cl);
    $('[data-color-c="l"]').attr('stop-color', $cl);
    $('[data-color-c="r"]').attr('stop-color', $cr);
    $.ajax({
        url: '/save-color',
        type: "POST",
        data: {
            "color": $c
        }
    });
    cl.play();
});
var ld = $g.timeline({
    paused: true
});
ld.to('#ld svg', 1.5, {
    y: '120%',
    ease: exi
}, 'a')
ld.to('#ld .bg', 1.5, {
    height: '0%',
    ease: exi
}, 'a')
if ($('#cl').length) {
    ld.to('#ld .bg', 1.5, {
        height: '0%',
        ease: exi
    }, 'a')
} else {
    ld.to('#ld .bg', 1.5, {
        height: '0%',
        ease: exi,
        onStart: $afterLoad
    }, 'a')
}
ld.to('#ld', 0, {
    pointerEvents: 'none',
    delay: 1
}, 'a')
ld.to('#ld .bg', 0, {
    top: '0',
    bottom: 'auto'
}, 'b')
ld.to('#ld svg', 0, {
    y: '-120%'
}, 'b')
if ($('#cl').length) {
    ld.progress(1)
} else {
    ld.timeScale(1)
    ld.play()
}
if (DEV == true) {
    ld.progress(1)
}
var ldc = $g.timeline({
    paused: true
});
ldc.to('#ld', 0, {
    pointerEvents: 'auto'
}, 'a')
ldc.to('#ld .bg', 1, {
    height: '100%',
    ease: exi
}, 'a')
ldc.to('#ld svg', 1, {
    y: '0%',
    ease: exi
}, 'a')
var ldm = $g.timeline({
    paused: true
});
ldm.to('#ld', 0, {
    pointerEvents: 'auto'
}, 'a')
ldm.to('#ld svg', 1, {
    y: '0%',
    ease: exi,
    delay: .5
}, 'a')
ldm.to('#n .nl .bg', 1.5, {
    width: '100vw',
    ease: exi
}, 'a')
ldm.to('#n .nr .bg', 1.5, {
    width: '0%',
    ease: exi
}, 'a')
ldm.staggerTo('#n nav li', 1.3, {
    x: -400,
    opacity: 0,
    ease: exi
}, .1, 'a')
ldm.staggerTo('#n .art li', 1.3, {
    x: 400,
    opacity: 0,
    ease: exi
}, .1, 'a')
ldm.staggerTo('#n .rs li', 1.3, {
    y: 200,
    opacity: 0,
    ease: exi
}, .1, 'a')
ldm.to('#n .ms', 1, {
    y: '100%',
    opacity: 0,
    ease: exi
}, 'a')
ldm.to('#n .tc', 1, {
    scale: 0,
    opacity: 0,
    ease: exi
}, 'a')
ldm.to('#h > *:not(#n)', 1, {
    y: '-100%',
    opacity: 0,
    ease: exi
}, 'a')
function $page(e, $t) {
    if (DEV != true) {
        if (!$(e.target).is('[data-nlink], [data-nlink] *')) {
            e.preventDefault();
            var $h = $t.attr('href');
            var $g = $t.attr('target');
            var $an = ldc;
            if ($body.hasClass('onav')) {
                $an = ldm;
            }
            if ($g == 'blank' || $g == '_blank') {
                window.open($h, $g);
            } else {
                if ($h != undefined && $h != null && $h != '#' && $h != '' && $g != '_blank' && $g != 'blank') {
                    $an.totalDuration(1).play().eventCallback('onComplete', function() {
                        document.location.href = $h;
                    });
                }
            }
        }
    }
}
$('a:not(.nloadani)').on('click', function(e) {
    $page(e, $(this));
});
$('[data-link]:not(.nloadani)').each(function() {
    var $t = $(this)
      , $a = $t.find('a:not([data-nlink])');
    $t.on('click', function(e) {
        $page(e, $a);
    });
});
var $filter = {
    tag: function() {
        $('[data-filter-tag]').on('click', function() {
            var $t = $(this);
            var $id = $t.data('filter-tag');
            $t.toggleClass('active');
        });
    },
    init: function() {
        var t = this;
        t.tag();
    }
}
$filter.init();
if (DEV != true && !ifMobile()) {
    $win.bind('resize', function(e) {
        if ($('#land').length == 0) {
            ldc.totalDuration(1.5).play().eventCallback('onComplete', function() {
                var $wd = window.RT;
                if ($wd)
                    clearTimeout($wd);
                $wd = setTimeout(function() {
                    this.location.reload(false);
                }, 100);
            });
        }
    });
}
var nv = $g.timeline({
    paused: true
});
nv.to('#n', 0, {
    display: 'flex'
})
nv.to('#n .bg', 1, {
    height: '100%',
    ease: exi
}, 'a')
nv.to('#n .ms', 1.5, {
    y: 0,
    opacity: 1,
    ease: exi
}, 'a')
nv.staggerFrom('#n nav a', 1.8, {
    y: '110%',
    ease: exi
}, .1, 'a');
nv.from('#n .tc', 1.5, {
    scale: 0,
    rotation: 0,
    autoAlpha: 0,
    delay: .2,
    ease: exi
}, 'a')
nv.staggerFrom('#n .art a span', 1.8, {
    y: '110%',
    ease: exi
}, .1, 'a')
nv.staggerFrom('#n .art li', 1.5, {
    opacity: 0,
    x: 200,
    ease: exo,
    delay: .3
}, .2, 'a')
nv.staggerFrom('#n .rs li', 1.5, {
    opacity: 0,
    ease: exi,
    delay: .3
}, .2, 'a')
var $nav = {
    open: function() {
        $body.addClass('onav fonav');
        nv.timeScale(1);
        nv.play();
    },
    close: function() {
        $body.removeClass('onav fonav');
        nv.timeScale(2);
        nv.reverse();
    },
    init: function() {
        var t = this;
        $('[data-nav]').on({
            click: function() {
                if ($html.hasClass('creaOpen')) {
                    $pr = $('[data-projet].open');
                    $('[data-projet]').removeClass('open');
                    $html.removeClass('stop creaOpen');
                    $tl = $g.timeline();
                    $tl.fromTo($pr.find('.bg'), 1.5, {
                        height: '100%'
                    }, {
                        height: '0%',
                        ease: exi
                    }, 'a');
                    $tl.staggerFromTo($pr.find('.lct > *, img'), 1.5, {
                        opacity: 1
                    }, {
                        opacity: 0,
                        ease: exo
                    }, 0, 'a');
                } else {
                    if ($body.hasClass('onav')) {
                        t.close();
                    } else {
                        t.open();
                    }
                }
            },
            mouseleave: function() {
                $body.removeClass('fonav')
            }
        });
    }
}
$nav.init();
var $cof_c = [];
var $cof_a = [];
$('[data-part-n]').each(function() {
    var $t = $(this);
    var $n = $t.data('part-n');
    $cof_c[$n] = $g.timeline({
        paused: true
    });
    $cof_c[$n].fromTo('#cof .fm' + $n, 1, {
        pointerEvents: 'auto'
    }, {
        pointerEvents: 'none'
    }, 'a')
    $cof_c[$n].fromTo('#cof .t' + $n, 1, {
        y: '0%'
    }, {
        y: '-105%',
        ease: Power1.easeInOut
    }, 'a')
    $cof_c[$n].fromTo('#cof .fm' + $n + ' .sg > div', 0, {
        overflowY: 'scroll'
    }, {
        overflowY: 'hidden'
    }, 'a')
    $cof_c[$n].fromTo('#cof .fm' + $n + ' .sg', 0, {
        paddingRight: 0
    }, {
        paddingRight: 5
    }, 'a')
    $cof_c[$n].staggerFromTo('#cof .fm' + $n + ' .fd, #cof .fm' + $n + ' .bc, #cof .fm' + $n + ' .mn, #cof .fm' + $n + ' .slc li, #cof .fm' + $n + ' fieldset, #cof .fm' + $n + ' .p, #cof .fm' + $n + ' .svg', 1, {
        opacity: 1,
        x: 0
    }, {
        opacity: 0,
        x: 0,
        ease: Power1.easeInOut
    }, .1, 'a')
    $cof_c[$n].staggerFromTo('#cof .fm' + $n + ' .btfb', 1, {
        opacity: 1,
        bottom: 0
    }, {
        opacity: 0,
        bottom: -100,
        ease: Power1.easeInOut
    }, .1, 'a')
    $cof_c[$n].fromTo('#cof .fm' + $n + ' [data-range]', 1, {
        opacity: 1,
        width: 250
    }, {
        opacity: 0,
        width: 0,
        ease: Power1.easeInOut
    }, 'a')
    $cof_a[$n] = $g.timeline({
        paused: true
    });
    $cof_a[$n].fromTo('#cof .fm' + $n, 1, {
        pointerEvents: 'none'
    }, {
        pointerEvents: 'auto'
    }, 'a')
    $cof_a[$n].fromTo('#cof .t' + $n, 1, {
        y: '105%'
    }, {
        y: '0%',
        ease: Power1.easeInOut,
        onStart: function() {
            $('#cof .fm1 > div').height($('#cof .fm' + $n + ' > div > div').height());
        }
    }, 'a')
    $cof_a[$n].fromTo('#cof .fm' + $n + ' .sg > div', 0, {
        overflowY: 'hidden'
    }, {
        overflowY: 'scroll'
    }, 'a')
    $cof_a[$n].fromTo('#cof .fm' + $n + ' .sg', 0, {
        paddingRight: 5
    }, {
        paddingRight: 0
    }, 'a')
    $cof_a[$n].staggerFromTo('#cof .fm' + $n + ' .fd, #cof .fm' + $n + ' .bc, #cof .fm' + $n + ' .mn, #cof .fm' + $n + ' .slc li, #cof .fm' + $n + ' fieldset, #cof .fm' + $n + ' .p, #cof .fm' + $n + ' .svg', 1, {
        opacity: 0,
        x: '150%'
    }, {
        opacity: 1,
        x: '0%',
        ease: Power1.easeInOut
    }, .1, 'a')
    $cof_a[$n].fromTo('#cof .fm' + $n + ' [data-range]', 1, {
        opacity: 0,
        width: 0
    }, {
        opacity: 1,
        width: 250,
        ease: Power1.easeInOut
    }, 'a')
    $cof_a[$n].staggerFromTo('#cof .fm' + $n + ' .btfb', 1, {
        opacity: 0,
        bottom: -100
    }, {
        opacity: 1,
        bottom: 0,
        ease: Power1.easeInOut
    }, .1, 'a')
    if ($n != 1) {
        $cof_a[$n].progress(.99).play().eventCallback('onComplete', function() {
            $cof_c[$n].progress(1);
        });
    }
});
$commence = {
    values: {},
    openTL: function(ot) {
        $('#co').attr('data-height', $('#co').outerHeight());
        var $st = new TimelineMax({
            paused: true
        });
        $st.to('#co', .1, {
            zIndex: 9000
        });
        $st.to('#co', 1, {
            top: -ot,
            height: $win.height() + 4,
            ease: exo
        }, 'a');
        $st.to('#co .ct', 1, {
            opacity: 0
        }, 'a');
        $st.to('#f', 1, {
            top: -ot,
            ease: exo
        }, 'a');
        $st.to('#co h2 span', 1, {
            y: '100%',
            ease: exo
        }, 'a')
        $st.to('#co h2 small, #co .bt', 1, {
            autoAlpha: 0,
            ease: exo
        }, 'a')
        $st.to('#co .times', 1, {
            autoAlpha: 1,
            top: 0,
            ease: exo
        }, 'a')
        $st.play();
        $cof_a[1].restart();
    },
    open: function() {
        if (!$body.hasClass('whte-99')) {
            $html.addClass('stop');
            $body.addClass('whte-99');
            $co = ($('#co').offset().top) + 4;
            this.openTL($co);
        }
    },
    closeTL: function() {
        var $end = new TimelineMax({
            paused: true,
            delay: .15
        });
        var $pa = $('[data-part-active]');
        var $ac = $pa.attr('data-part-active');
        $end.to('#co', 1, {
            top: 0,
            height: $('#co').attr('data-height'),
            ease: exo
        }, 'a');
        $end.to('#co .ct', 1, {
            opacity: 1
        }, 'a');
        $end.to('#f', 1, {
            top: 0,
            ease: exo
        }, 'a');
        $end.to('#co h2 span', 1, {
            y: '0%',
            ease: exo
        }, 'a')
        $end.to('#co h2 small, #co .bt', 1, {
            autoAlpha: 1,
            ease: exo
        }, 'a')
        $end.to('#co .times', 1, {
            autoAlpha: 0,
            top: -100,
            ease: exo
        }, 'a')
        $end.to('#co', .1, {
            zIndex: 9000
        });
        $end.timeScale(.8).play();
        $cof_c[$ac].timeScale(1.5).restart();
        $pa.attr('data-part-active', 1)
    },
    close: function() {
        if ($body.hasClass('whte-99')) {
            $html.removeClass('stop');
            $body.removeClass('whte-99');
            this.closeTL();
        }
    },
    changePart: function() {
        var t = this;
        $('[data-part]').on('click', function(e) {
            e.preventDefault();
            var $t = $(this);
            var $p = $t.data('part');
            var $v = $t.data('value');
            var $pa = $('[data-part-active]');
            var $ac = $pa.attr('data-part-active');
            var $q = $('[data-part-n="' + $ac + '"]').text();
            if ($t.hasClass("check")) {
                if ($("#c_name").val() == "" || $("#c_phone").val() == "" || $("#c_mail").val() == "") {
                    $("#c_name").addClass("required");
                    $("#c_phone").addClass("required");
                    $("#c_mail").addClass("required");
                    return;
                }
                t.values["name"] = $("#c_name").val();
                t.values["phone"] = $("#c_phone").val();
                t.values["mail"] = $("#c_mail").val();
                $.ajax({
                    url: $pa.attr('action'),
                    type: "POST",
                    data: t.values,
                    success: function() {
                        t.values = {};
                        gtag('send', 'event', 'devis', 'submit');
                    }
                });
            } else {
                if ($v == null) {
                    if ($(".fm" + $ac + " .ui-slider-range").length > 0) {
                        $v = $(".fm" + $ac + " .both-min").text() + " à " + $(".fm" + $ac + " .both-max").text()
                    }
                    if ($(".fm" + $ac + " textarea").length > 0) {
                        $v = $(".fm" + $ac + " textarea").val()
                    }
                }
                t.values[$q] = $v;
            }
            $('[data-part]').removeClass('act');
            $t.addClass('act');
            if ($p != $ac) {
                $cof_c[$ac].timeScale(1).restart();
                $cof_a[$p].timeScale(1).restart();
                $pa.attr('data-part-active', $p)
            }
        });
    },
    budget: function() {
        $('[data-range]').each(function() {
            var $d = $(this);
            var $min = $d.data('min');
            var $max = $d.data('max');
            var $step = $d.data('step');
            $d.slider({
                range: true,
                min: $min,
                max: $max,
                values: [$min, $max],
                step: $step,
                slide: function(e, ui) {
                    $d.find('.ui-slider-handle:eq(0) .both-min').html(ui.values[0] + '€');
                    $d.find('.ui-slider-handle:eq(1) .both-max').html(ui.values[1] + '€');
                    if (ui.values[1] == 25000) {
                        $d.addClass('maxi');
                    } else {
                        $d.removeClass('maxi');
                    }
                }
            });
            $d.find('.ui-slider-handle:eq(0)').append('<span class="both-min value">' + $d.slider('values', 0) + '€</span>');
            $d.find('.ui-slider-handle:eq(1)').append('<span class="both-max value">' + $d.slider('values', 1) + '€</span>');
        });
    },
    init: function() {
        var t = this;
        t.changePart();
        t.budget();
        $('[data-start]').on('click', function(e) {
            e.preventDefault();
            t.open();
        });
        $('[data-close-co]').on('click', function() {
            t.close();
        });
    }
}
$commence.init();
$form = {
    check: function() {
        $('.first-focus input, .first-focus textarea').each(function() {
            var $t = $(this);
            if ($t.is(':valid')) {
                $t.parents('fieldset').removeClass('invalid').addClass('valid');
            } else if ($t.is(':invalid')) {
                $t.parents('fieldset').removeClass('valid').addClass('invalid');
            }
        });
    },
    label: function(t) {
        var v = t.val();
        v != null && v != '' ? t.parents('fieldset').addClass('act') : t.parents('fieldset').removeClass('act');
    },
    focus: function() {
        var t = this;
        $('fieldset input, fieldset textarea').on({
            focusin: function() {
                $(this).parents('fieldset').addClass('act foc first-focus');
            },
            focusout: function() {
                $(this).parents('fieldset').removeClass('foc');
                t.label($(this));
                t.check();
            },
        });
    },
    require: function() {
        $('input:required, textarea:required').each(function() {
            $(this).parents('fieldset').addClass('required');
        });
    },
    expand: function() {
        $('textarea').on('keydown, keyup', function() {
            var el = this;
            el.style.cssText = 'height:auto;';
            el.style.cssText = 'height:' + el.scrollHeight + 'px';
        });
    },
    init: function() {
        var t = this;
        t.focus(),
        t.require(),
        t.expand();
        $('fieldset input, fieldset textarea').each(function() {
            var c = $(this);
            t.label(c);
        });
    }
}
$form.init();
$alert = {
    close: function(a) {
        a.addClass('hide').slideUp(500).promise().done(function() {
            a.remove();
        });
    },
    init: function() {
        var t = this;
        $body.on('click', '[data-close-alert]', function() {
            var a = $(this).parents('.alert');
            t.close(a);
        });
    }
}
$alert.init();
$s.addListener(function(status) {
    hColor();
    xApp = status.offset.x;
    sessionStorage.setItem('x', xApp);
    if (!$ifScrollH) {
        yApp = status.offset.y;
        if (yApp > 0) {
            $body.addClass('fix');
        } else {
            $body.removeClass('fix');
        }
        if ($html.hasClass('stop')) {
            $s.setPosition(0, sessionStorage.getItem('y'));
        } else {
            sessionStorage.setItem('y', yApp);
        }
        $('[data-h-color]').each(function() {
            var $t = $(this);
            var $o = $t.offset().top;
            var $h = $t.outerHeight();
            var $c = $t.data('h-color');
            var $hh = $('#h').outerHeight();
            if (0 + $hh / 2 > $o && $o + $h > 0 + $hh / 2) {
                $body.addClass($c);
            } else {
                $body.removeClass($c);
            }
        });
        if ($('#sv').length) {
            var svy = $('#sv').offset().top;
            $('#sv .rg').css({
                marginTop: -svy
            });
        }
        if ($('.sp-2').length) {
            var eav = $('.sp-2').offset().top;
            $('.sp-2 .eavl').css({
                marginTop: -eav
            });
        }
        $cursor.classCursor();
    }
});
$cursor.init();
console.log("%c Design with ♡ by Wisnustrw ", "background:#16141c;color:#fff;")
