(function(d){var M={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,wrapperClass:"bx-wrapper",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,ariaLive:!0,ariaHidden:!0,keyboardEnabled:!1,pager:!0,pagerType:"full",
pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4E3,autoStart:!0,autoDirection:"next",stopAutoOnClick:!1,autoHover:!1,autoDelay:0,autoSlideForOnePage:!1,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,shrinkItems:!1,onSliderLoad:function(){return!0},onSlideBefore:function(){return!0},
onSlideAfter:function(){return!0},onSlideNext:function(){return!0},onSlidePrev:function(){return!0},onSliderResize:function(){return!0}};d.fn.bxSlider=function(u){if(0===this.length)return this;if(1<this.length)return this.each(function(){d(this).bxSlider(u)}),this;var a={},c=this,A=d(window).width(),B=d(window).height();if(!d(c).data("bxSlider")){var C=function(){d(c).data("bxSlider")||(a.settings=d.extend({},M,u),a.settings.slideWidth=parseInt(a.settings.slideWidth),a.children=c.children(a.settings.slideSelector),
a.children.length<a.settings.minSlides&&(a.settings.minSlides=a.children.length),a.children.length<a.settings.maxSlides&&(a.settings.maxSlides=a.children.length),a.settings.randomStart&&(a.settings.startSlide=Math.floor(Math.random()*a.children.length)),a.active={index:a.settings.startSlide},a.carousel=1<a.settings.minSlides||1<a.settings.maxSlides?!0:!1,a.carousel&&(a.settings.preloadImages="all"),a.minThreshold=a.settings.minSlides*a.settings.slideWidth+(a.settings.minSlides-1)*a.settings.slideMargin,
a.maxThreshold=a.settings.maxSlides*a.settings.slideWidth+(a.settings.maxSlides-1)*a.settings.slideMargin,a.working=!1,a.controls={},a.interval=null,a.animProp="vertical"===a.settings.mode?"top":"left",a.usingCSS=a.settings.useCSS&&"fade"!==a.settings.mode&&function(){for(var b=document.createElement("div"),g=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"],c=0;c<g.length;c++)if(void 0!==b.style[g[c]])return a.cssPrefix=g[c].replace("Perspective","").toLowerCase(),a.animProp=
"-"+a.cssPrefix+"-transform",!0;return!1}(),"vertical"===a.settings.mode&&(a.settings.maxSlides=a.settings.minSlides),c.data("origStyle",c.attr("style")),c.children(a.settings.slideSelector).each(function(){d(this).data("origStyle",d(this).attr("style"))}),N())},N=function(){var b=a.children.eq(a.settings.startSlide);c.wrap('<div class="'+a.settings.wrapperClass+'"><div class="bx-viewport"></div></div>');a.viewport=c.parent();a.settings.ariaLive&&!a.settings.ticker&&a.viewport.attr("aria-live","polite");
a.loader=d('<div class="bx-loading" />');a.viewport.prepend(a.loader);c.css({width:"horizontal"===a.settings.mode?1E3*a.children.length+215+"%":"auto",position:"relative"});a.usingCSS&&a.settings.easing?c.css("-"+a.cssPrefix+"-transition-timing-function",a.settings.easing):a.settings.easing||(a.settings.easing="swing");a.viewport.css({width:"100%",overflow:"hidden",position:"relative"});a.viewport.parent().css({maxWidth:O()});a.settings.pager||a.settings.controls||a.viewport.parent().css({margin:"0 auto 0px"});
a.children.css({"float":"horizontal"===a.settings.mode?"left":"none",listStyle:"none",position:"relative"});a.children.css("width",D());"horizontal"===a.settings.mode&&0<a.settings.slideMargin&&a.children.css("marginRight",a.settings.slideMargin);"vertical"===a.settings.mode&&0<a.settings.slideMargin&&a.children.css("marginBottom",a.settings.slideMargin);"fade"===a.settings.mode&&(a.children.css({position:"absolute",zIndex:0,display:"none"}),a.children.eq(a.settings.startSlide).css({zIndex:a.settings.slideZIndex,
display:"block"}));a.controls.el=d('<div class="bx-controls" />');a.settings.captions&&P();a.active.last=a.settings.startSlide===h()-1;a.settings.video&&c.fitVids();if("all"===a.settings.preloadImages||a.settings.ticker)b=a.children;a.settings.ticker?a.settings.pager=!1:(a.settings.controls&&(a.controls.next=d('<a class="bx-next" href="">'+a.settings.nextText+"</a>"),a.controls.prev=d('<a class="bx-prev" href="">'+a.settings.prevText+"</a>"),a.controls.next.bind("click touchend",E),a.controls.prev.bind("click touchend",
F),a.settings.nextSelector&&d(a.settings.nextSelector).append(a.controls.next),a.settings.prevSelector&&d(a.settings.prevSelector).append(a.controls.prev),a.settings.nextSelector||a.settings.prevSelector||(a.controls.directionEl=d('<div class="bx-controls-direction" />'),a.controls.directionEl.append(a.controls.prev).append(a.controls.next),a.controls.el.addClass("bx-has-controls-direction").append(a.controls.directionEl))),a.settings.auto&&a.settings.autoControls&&(a.controls.start=d('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+
a.settings.startText+"</a></div>"),a.controls.stop=d('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+a.settings.stopText+"</a></div>"),a.controls.autoEl=d('<div class="bx-controls-auto" />'),a.controls.autoEl.on("click",".bx-start",Q),a.controls.autoEl.on("click",".bx-stop",R),a.settings.autoControlsCombine?a.controls.autoEl.append(a.controls.start):a.controls.autoEl.append(a.controls.start).append(a.controls.stop),a.settings.autoControlsSelector?d(a.settings.autoControlsSelector).html(a.controls.autoEl):
a.controls.el.addClass("bx-has-controls-auto").append(a.controls.autoEl),v(a.settings.autoStart?"stop":"start")),a.settings.pager&&(a.settings.pagerCustom?a.pagerEl=d(a.settings.pagerCustom):(a.pagerEl=d('<div class="bx-pager" />'),a.settings.pagerSelector?d(a.settings.pagerSelector).html(a.pagerEl):a.controls.el.addClass("bx-has-pager").append(a.pagerEl),G()),a.pagerEl.on("click touchend","a",S)),(a.settings.controls||a.settings.autoControls||a.settings.pager)&&a.viewport.after(a.controls.el));T(b,
U)},T=function(a,c){var e=a.find('img:not([src=""]), iframe').length,k=0;0===e?c():a.find('img:not([src=""]), iframe').each(function(){d(this).one("load error",function(){++k===e&&c()}).each(function(){this.complete&&d(this).load()})})},U=function(){if(a.settings.infiniteLoop&&"fade"!==a.settings.mode&&!a.settings.ticker){var b="vertical"===a.settings.mode?a.settings.minSlides:a.settings.maxSlides,g=a.children.slice(0,b).clone(!0).addClass("bx-clone"),b=a.children.slice(-b).clone(!0).addClass("bx-clone");
a.settings.ariaHidden&&(g.attr("aria-hidden",!0),b.attr("aria-hidden",!0));c.append(g).prepend(b)}a.loader.remove();H();"vertical"===a.settings.mode&&(a.settings.adaptiveHeight=!0);a.viewport.height(q());c.redrawSlider();a.settings.onSliderLoad.call(c,a.active.index);a.initialized=!0;a.settings.responsive&&d(window).bind("resize",w);a.settings.auto&&a.settings.autoStart&&(1<h()||a.settings.autoSlideForOnePage)&&V();a.settings.ticker&&W();a.settings.pager&&x(a.settings.startSlide);a.settings.controls&&
I();a.settings.touchEnabled&&!a.settings.ticker&&X();a.settings.keyboardEnabled&&!a.settings.ticker&&d(document).keydown(J)},q=function(){var b=0,c=d();if("vertical"===a.settings.mode||a.settings.adaptiveHeight)if(a.carousel){var e=1===a.settings.moveSlides?a.active.index:a.active.index*m(),c=a.children.eq(e);for(i=1;i<=a.settings.maxSlides-1;i++)c=e+i>=a.children.length?c.add(a.children.eq(i-1)):c.add(a.children.eq(e+i))}else c=a.children.eq(a.active.index);else c=a.children;"vertical"===a.settings.mode?
(c.each(function(a){b+=d(this).outerHeight()}),0<a.settings.slideMargin&&(b+=a.settings.slideMargin*(a.settings.minSlides-1))):b=Math.max.apply(Math,c.map(function(){return d(this).outerHeight(!1)}).get());"border-box"===a.viewport.css("box-sizing")?b+=parseFloat(a.viewport.css("padding-top"))+parseFloat(a.viewport.css("padding-bottom"))+parseFloat(a.viewport.css("border-top-width"))+parseFloat(a.viewport.css("border-bottom-width")):"padding-box"===a.viewport.css("box-sizing")&&(b+=parseFloat(a.viewport.css("padding-top"))+
parseFloat(a.viewport.css("padding-bottom")));return b},O=function(){var b="100%";0<a.settings.slideWidth&&(b="horizontal"===a.settings.mode?a.settings.maxSlides*a.settings.slideWidth+(a.settings.maxSlides-1)*a.settings.slideMargin:a.settings.slideWidth);return b},D=function(){var b=a.settings.slideWidth,c=a.viewport.width();0===a.settings.slideWidth||a.settings.slideWidth>c&&!a.carousel||"vertical"===a.settings.mode?b=c:1<a.settings.maxSlides&&"horizontal"===a.settings.mode&&!(c>a.maxThreshold)&&
(c<a.minThreshold?b=(c-a.settings.slideMargin*(a.settings.minSlides-1))/a.settings.minSlides:a.settings.shrinkItems&&(b=Math.floor((c+a.settings.slideMargin)/Math.ceil((c+a.settings.slideMargin)/(b+a.settings.slideMargin))-a.settings.slideMargin)));return b},p=function(){var b=1,c=null;"horizontal"===a.settings.mode&&0<a.settings.slideWidth?a.viewport.width()<a.minThreshold?b=a.settings.minSlides:a.viewport.width()>a.maxThreshold?b=a.settings.maxSlides:(c=a.children.first().width()+a.settings.slideMargin,
b=Math.floor((a.viewport.width()+a.settings.slideMargin)/c)):"vertical"===a.settings.mode&&(b=a.settings.minSlides);return b},h=function(){var b=0,c=0,d=0;if(0<a.settings.moveSlides)if(a.settings.infiniteLoop)b=Math.ceil(a.children.length/m());else for(;c<a.children.length;)++b,c=d+p(),d+=a.settings.moveSlides<=p()?a.settings.moveSlides:p();else b=Math.ceil(a.children.length/p());return b},m=function(){return 0<a.settings.moveSlides&&a.settings.moveSlides<=p()?a.settings.moveSlides:p()},H=function(){var b,
c;a.children.length>a.settings.maxSlides&&a.active.last&&!a.settings.infiniteLoop?"horizontal"===a.settings.mode?(c=a.children.last(),b=c.position(),l(-(b.left-(a.viewport.width()-c.outerWidth())),"reset",0)):"vertical"===a.settings.mode&&(b=a.children.length-a.settings.minSlides,b=a.children.eq(b).position(),l(-b.top,"reset",0)):(b=a.children.eq(a.active.index*m()).position(),a.active.index===h()-1&&(a.active.last=!0),void 0!==b&&("horizontal"===a.settings.mode?l(-b.left,"reset",0):"vertical"===
a.settings.mode&&l(-b.top,"reset",0)))},l=function(b,g,e,k){var f;a.usingCSS?(b="vertical"===a.settings.mode?"translate3d(0, "+b+"px, 0)":"translate3d("+b+"px, 0, 0)",c.css("-"+a.cssPrefix+"-transition-duration",e/1E3+"s"),"slide"===g?(c.css(a.animProp,b),0!==e?c.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(a){d(a.target).is(c)&&(c.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),t())}):t()):"reset"===g?c.css(a.animProp,b):"ticker"===g&&
(c.css("-"+a.cssPrefix+"-transition-timing-function","linear"),c.css(a.animProp,b),0!==e?c.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(a){d(a.target).is(c)&&(c.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),l(k.resetValue,"reset",0),r())}):(l(k.resetValue,"reset",0),r()))):(f={},f[a.animProp]=b,"slide"===g?c.animate(f,e,a.settings.easing,function(){t()}):"reset"===g?c.css(a.animProp,b):"ticker"===g&&c.animate(f,e,"linear",function(){l(k.resetValue,
"reset",0);r()}))},G=function(){for(var b="",c="",e=h(),k=0;k<e;k++)a.settings.buildPager&&d.isFunction(a.settings.buildPager)||a.settings.pagerCustom?(c=a.settings.buildPager(k),a.pagerEl.addClass("bx-custom-pager")):(c=k+1,a.pagerEl.addClass("bx-default-pager")),b+='<div class="bx-pager-item"><a href="" data-slide-index="'+k+'" class="bx-pager-link">'+c+"</a></div>";a.pagerEl.html(b)},P=function(){a.children.each(function(a){a=d(this).find("img:first").attr("title");void 0!==a&&(""+a).length&&d(this).append('<div class="bx-caption"><span>'+
a+"</span></div>")})},E=function(b){b.preventDefault();a.controls.el.hasClass("disabled")||(a.settings.auto&&a.settings.stopAutoOnClick&&c.stopAuto(),c.goToNextSlide())},F=function(b){b.preventDefault();a.controls.el.hasClass("disabled")||(a.settings.auto&&a.settings.stopAutoOnClick&&c.stopAuto(),c.goToPrevSlide())},Q=function(a){c.startAuto();a.preventDefault()},R=function(a){c.stopAuto();a.preventDefault()},S=function(b){b.preventDefault();a.controls.el.hasClass("disabled")||(a.settings.auto&&a.settings.stopAutoOnClick&&
c.stopAuto(),b=d(b.currentTarget),void 0!==b.attr("data-slide-index")&&(b=parseInt(b.attr("data-slide-index")),b!==a.active.index&&c.goToSlide(b)))},x=function(b){var c=a.children.length;"short"===a.settings.pagerType?(1<a.settings.maxSlides&&(c=Math.ceil(a.children.length/a.settings.maxSlides)),a.pagerEl.html(b+1+a.settings.pagerShortSeparator+c)):(a.pagerEl.find("a").removeClass("active"),a.pagerEl.each(function(a,c){d(c).find("a").eq(b).addClass("active")}))},t=function(){if(a.settings.infiniteLoop){var b=
"";0===a.active.index?b=a.children.eq(0).position():a.active.index===h()-1&&a.carousel?b=a.children.eq((h()-1)*m()).position():a.active.index===a.children.length-1&&(b=a.children.eq(a.children.length-1).position());b&&("horizontal"===a.settings.mode?l(-b.left,"reset",0):"vertical"===a.settings.mode&&l(-b.top,"reset",0))}a.working=!1;a.settings.onSlideAfter.call(c,a.children.eq(a.active.index),a.oldIndex,a.active.index)},v=function(b){a.settings.autoControlsCombine?a.controls.autoEl.html(a.controls[b]):
(a.controls.autoEl.find("a").removeClass("active"),a.controls.autoEl.find("a:not(.bx-"+b+")").addClass("active"))},I=function(){1===h()?(a.controls.prev.addClass("disabled"),a.controls.next.addClass("disabled")):!a.settings.infiniteLoop&&a.settings.hideControlOnEnd&&(0===a.active.index?(a.controls.prev.addClass("disabled"),a.controls.next.removeClass("disabled")):a.active.index===h()-1?(a.controls.next.addClass("disabled"),a.controls.prev.removeClass("disabled")):(a.controls.prev.removeClass("disabled"),
a.controls.next.removeClass("disabled")))},V=function(){0<a.settings.autoDelay?setTimeout(c.startAuto,a.settings.autoDelay):(c.startAuto(),d(window).focus(function(){c.startAuto()}).blur(function(){c.stopAuto()}));a.settings.autoHover&&c.hover(function(){a.interval&&(c.stopAuto(!0),a.autoPaused=!0)},function(){a.autoPaused&&(c.startAuto(!0),a.autoPaused=null)})},W=function(){var b=0,g,e,k,f,h,m,n;"next"===a.settings.autoDirection?c.append(a.children.clone().addClass("bx-clone")):(c.prepend(a.children.clone().addClass("bx-clone")),
b=a.children.first().position(),b="horizontal"===a.settings.mode?-b.left:-b.top);l(b,"reset",0);a.settings.pager=!1;a.settings.controls=!1;a.settings.autoControls=!1;a.settings.tickerHover&&(a.usingCSS?(k="horizontal"===a.settings.mode?4:5,a.viewport.hover(function(){g=c.css("-"+a.cssPrefix+"-transform");e=parseFloat(g.split(",")[k]);l(e,"reset",0)},function(){n=0;a.children.each(function(b){n+="horizontal"===a.settings.mode?d(this).outerWidth(!0):d(this).outerHeight(!0)});f=a.settings.speed/n;h=
"horizontal"===a.settings.mode?"left":"top";m=f*(n-Math.abs(parseInt(e)));r(m)})):a.viewport.hover(function(){c.stop()},function(){n=0;a.children.each(function(b){n+="horizontal"===a.settings.mode?d(this).outerWidth(!0):d(this).outerHeight(!0)});f=a.settings.speed/n;h="horizontal"===a.settings.mode?"left":"top";m=f*(n-Math.abs(parseInt(c.css(h))));r(m)}));r()},r=function(b){b=b?b:a.settings.speed;var d={left:0,top:0},e={left:0,top:0};"next"===a.settings.autoDirection?d=c.find(".bx-clone").first().position():
e=a.children.first().position();l("horizontal"===a.settings.mode?-d.left:-d.top,"ticker",b,{resetValue:"horizontal"===a.settings.mode?-e.left:-e.top})},J=function(a){var g=document.activeElement.tagName.toLowerCase();if(g=null==(new RegExp(g,["i"])).exec("input|textarea")){var e=d(window),g=e.scrollTop(),k=e.scrollLeft(),f,h=c.offset();f=k+e.width();e=g+e.height();h.right=h.left+c.outerWidth();h.bottom=h.top+c.outerHeight();g=!(f<h.left||k>h.right||e<h.top||g>h.bottom)}if(g){if(39===a.keyCode)return E(a),
!1;if(37===a.keyCode)return F(a),!1}},X=function(){a.touch={start:{x:0,y:0},end:{x:0,y:0}};a.viewport.bind("touchstart MSPointerDown pointerdown",Y);a.viewport.on("click",".bxslider a",function(b){a.viewport.hasClass("click-disabled")&&(b.preventDefault(),a.viewport.removeClass("click-disabled"))})},Y=function(b){a.controls.el.addClass("disabled");if(a.working)b.preventDefault(),a.controls.el.removeClass("disabled");else{a.touch.originalPos=c.position();b=b.originalEvent;var d="undefined"!==typeof b.changedTouches?
b.changedTouches:[b];a.touch.start.x=d[0].pageX;a.touch.start.y=d[0].pageY;a.viewport.get(0).setPointerCapture&&(a.pointerId=b.pointerId,a.viewport.get(0).setPointerCapture(a.pointerId));a.viewport.bind("touchmove MSPointerMove pointermove",y);a.viewport.bind("touchend MSPointerUp pointerup",z);a.viewport.bind("MSPointerCancel pointercancel",K)}},K=function(b){l(a.touch.originalPos.left,"reset",0);a.controls.el.removeClass("disabled");a.viewport.unbind("MSPointerCancel pointercancel",K);a.viewport.unbind("touchmove MSPointerMove pointermove",
y);a.viewport.unbind("touchend MSPointerUp pointerup",z);a.viewport.get(0).releasePointerCapture&&a.viewport.get(0).releasePointerCapture(a.pointerId)},y=function(b){var c=b.originalEvent,c="undefined"!==typeof c.changedTouches?c.changedTouches:[c],d=Math.abs(c[0].pageX-a.touch.start.x),h=Math.abs(c[0].pageY-a.touch.start.y),f=0,f=0;3*d>h&&a.settings.preventDefaultSwipeX?b.preventDefault():3*h>d&&a.settings.preventDefaultSwipeY&&b.preventDefault();"fade"!==a.settings.mode&&a.settings.oneToOneTouch&&
("horizontal"===a.settings.mode?(f=c[0].pageX-a.touch.start.x,f=a.touch.originalPos.left+f):(f=c[0].pageY-a.touch.start.y,f=a.touch.originalPos.top+f),l(f,"reset",0))},z=function(b){a.viewport.unbind("touchmove MSPointerMove pointermove",y);a.controls.el.removeClass("disabled");b=b.originalEvent;b="undefined"!==typeof b.changedTouches?b.changedTouches:[b];var d=0,e=0;a.touch.end.x=b[0].pageX;a.touch.end.y=b[0].pageY;"fade"===a.settings.mode?(e=Math.abs(a.touch.start.x-a.touch.end.x),e>=a.settings.swipeThreshold&&
(a.touch.start.x>a.touch.end.x?c.goToNextSlide():c.goToPrevSlide(),c.stopAuto())):("horizontal"===a.settings.mode?(e=a.touch.end.x-a.touch.start.x,d=a.touch.originalPos.left):(e=a.touch.end.y-a.touch.start.y,d=a.touch.originalPos.top),!a.settings.infiniteLoop&&(0===a.active.index&&0<e||a.active.last&&0>e)?l(d,"reset",200):Math.abs(e)>=a.settings.swipeThreshold?(0>e?c.goToNextSlide():c.goToPrevSlide(),c.stopAuto()):l(d,"reset",200));a.viewport.unbind("touchend MSPointerUp pointerup",z);a.viewport.get(0).releasePointerCapture&&
a.viewport.get(0).releasePointerCapture(a.pointerId)},w=function(b){if(a.initialized)if(a.working)window.setTimeout(w,10);else{b=d(window).width();var g=d(window).height();if(A!==b||B!==g)A=b,B=g,c.redrawSlider(),a.settings.onSliderResize.call(c,a.active.index)}},L=function(b){var c=p();a.settings.ariaHidden&&!a.settings.ticker&&(a.children.attr("aria-hidden","true"),a.children.slice(b,b+c).attr("aria-hidden","false"))},Z=function(b){return 0>b?a.settings.infiniteLoop?h()-1:a.active.index:b>=h()?
a.settings.infiniteLoop?0:a.active.index:b};c.goToSlide=function(b,g){var e=!0,k=0,f={left:0,top:0},e=null;a.oldIndex=a.active.index;a.active.index=Z(b);a.working||a.active.index===a.oldIndex||(a.working=!0,e=a.settings.onSlideBefore.call(c,a.children.eq(a.active.index),a.oldIndex,a.active.index),"undefined"===typeof e||e?("next"===g?a.settings.onSlideNext.call(c,a.children.eq(a.active.index),a.oldIndex,a.active.index)||(e=!1):"prev"===g&&(a.settings.onSlidePrev.call(c,a.children.eq(a.active.index),
a.oldIndex,a.active.index)||(e=!1)),a.active.last=a.active.index>=h()-1,(a.settings.pager||a.settings.pagerCustom)&&x(a.active.index),a.settings.controls&&I(),"fade"===a.settings.mode?(a.settings.adaptiveHeight&&a.viewport.height()!==q()&&a.viewport.animate({height:q()},a.settings.adaptiveHeightSpeed),a.children.filter(":visible").fadeOut(a.settings.speed).css({zIndex:0}),a.children.eq(a.active.index).css("zIndex",a.settings.slideZIndex+1).fadeIn(a.settings.speed,function(){d(this).css("zIndex",a.settings.slideZIndex);
t()})):(a.settings.adaptiveHeight&&a.viewport.height()!==q()&&a.viewport.animate({height:q()},a.settings.adaptiveHeightSpeed),!a.settings.infiniteLoop&&a.carousel&&a.active.last?"horizontal"===a.settings.mode?(e=a.children.eq(a.children.length-1),f=e.position(),k=a.viewport.width()-e.outerWidth()):(f=a.children.length-a.settings.minSlides,f=a.children.eq(f).position()):a.carousel&&a.active.last&&"prev"===g?(f=1===a.settings.moveSlides?a.settings.maxSlides-m():(h()-1)*m()-(a.children.length-a.settings.maxSlides),
e=c.children(".bx-clone").eq(f),f=e.position()):"next"===g&&0===a.active.index?(f=c.find("> .bx-clone").eq(a.settings.maxSlides).position(),a.active.last=!1):0<=b&&(f=b*parseInt(m()),f=a.children.eq(f).position()),"undefined"!==typeof f?(k="horizontal"===a.settings.mode?-(f.left-k):-f.top,l(k,"slide",a.settings.speed)):a.working=!1),a.settings.ariaHidden&&L(a.active.index*m())):(a.active.index=a.oldIndex,a.working=!1))};c.goToNextSlide=function(){if(a.settings.infiniteLoop||!a.active.last){var b=
parseInt(a.active.index)+1;c.goToSlide(b,"next")}};c.goToPrevSlide=function(){if(a.settings.infiniteLoop||0!==a.active.index){var b=parseInt(a.active.index)-1;c.goToSlide(b,"prev")}};c.startAuto=function(b){a.interval||(a.interval=setInterval(function(){"next"===a.settings.autoDirection?c.goToNextSlide():c.goToPrevSlide()},a.settings.pause),a.settings.autoControls&&!0!==b&&v("stop"))};c.stopAuto=function(b){a.interval&&(clearInterval(a.interval),a.interval=null,a.settings.autoControls&&!0!==b&&v("start"))};
c.getCurrentSlide=function(){return a.active.index};c.getCurrentSlideElement=function(){return a.children.eq(a.active.index)};c.getSlideElement=function(b){return a.children.eq(b)};c.getSlideCount=function(){return a.children.length};c.isWorking=function(){return a.working};c.redrawSlider=function(){a.children.add(c.find(".bx-clone")).outerWidth(D());a.viewport.css("height",q());a.settings.ticker||H();a.active.last&&(a.active.index=h()-1);a.active.index>=h()&&(a.active.last=!0);a.settings.pager&&
!a.settings.pagerCustom&&(G(),x(a.active.index));a.settings.ariaHidden&&L(a.active.index*m())};c.destroySlider=function(){a.initialized&&(a.initialized=!1,d(".bx-clone",this).remove(),a.children.each(function(){void 0!==d(this).data("origStyle")?d(this).attr("style",d(this).data("origStyle")):d(this).removeAttr("style")}),void 0!==d(this).data("origStyle")?this.attr("style",d(this).data("origStyle")):d(this).removeAttr("style"),d(this).unwrap().unwrap(),a.controls.el&&a.controls.el.remove(),a.controls.next&&
a.controls.next.remove(),a.controls.prev&&a.controls.prev.remove(),a.pagerEl&&a.settings.controls&&!a.settings.pagerCustom&&a.pagerEl.remove(),d(".bx-caption",this).remove(),a.controls.autoEl&&a.controls.autoEl.remove(),clearInterval(a.interval),a.settings.responsive&&d(window).unbind("resize",w),a.settings.keyboardEnabled&&d(document).unbind("keydown",J),d(this).removeData("bxSlider"))};c.reloadSlider=function(a){void 0!==a&&(u=a);c.destroySlider();C();d(c).data("bxSlider",this)};C();d(c).data("bxSlider",
this);return this}}})(jQuery);$(function(){$(".slider").bxSlider()});