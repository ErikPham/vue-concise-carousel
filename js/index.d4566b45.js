(function(t){function e(e){for(var n,s,o=e[0],u=e[1],c=e[2],l=0,d=[];l<o.length;l++)s=o[l],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);h&&h(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,o=1;o<i.length;o++){var u=i[o];0!==a[u]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=i[0]))}return t}var n={},a={index:0},r=[];function s(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=n,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var h=u;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("a1ec")},"0bac":function(t,e,i){},"0f0c":function(t,e,i){"use strict";var n=i("0bac"),a=i.n(n);a.a},"35bb":function(t,e,i){},"674d":function(t,e,i){},"8bb8":function(t,e,i){"use strict";var n=i("35bb"),a=i.n(n);a.a},a0f2:function(t,e,i){"use strict";var n=i("674d"),a=i.n(n);a.a},a1ec:function(t,e,i){"use strict";i.r(e);i("b0c0"),i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{"margin-top":"50px","margin-bottom":"50px"},attrs:{id:"hero"}},[i("h1",{staticStyle:{"text-align":"center"}},[t._v(" Vue Concise Carousel with True SSR Written for Jambon. ")]),i("div",{attrs:{id:"example"}},[i("carousel",{attrs:{"per-page-custom":[[480,1],[768,4]],"center-mode":!0,"navigation-enabled":!1}},t._l(t.slideCount,(function(t){return i("slide",{key:t},[i("img",{staticStyle:{width:"100%"},attrs:{src:"https://via.placeholder.com/1080.png/09f/fff"}})])})),1)],1)])},r=[],s={name:"App",data:function(){return{slideCount:6}}},o=s,u=i("2877"),c=Object(u["a"])(o,a,r,!1,null,null,null),h=c.exports,l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"VueCarousel",class:{"VueCarousel--reverse":"top"===t.paginationPosition}},[i("div",{ref:"VueCarousel-wrapper",staticClass:"VueCarousel-wrapper"},[i("div",{ref:"VueCarousel-inner",class:["VueCarousel-inner",{"VueCarousel-inner--center":t.isCenterModeEnabled}],style:{transform:"translate("+t.currentOffset+"px, 0)",transition:t.dragging?"none":t.transitionStyle,"ms-flex-preferred-size":t.slideWidth+"px","webkit-flex-basis":t.slideWidth+"px","flex-basis":t.slideWidth+"px",visibility:t.slideWidth?"visible":"hidden",height:""+t.currentHeight,"padding-left":t.padding+"px","padding-right":t.padding+"px"}},[t._t("default")],2)]),t.navigationEnabled?t._t("navigation",[t.isNavigationRequired?i("navigation",{attrs:{clickTargetSize:t.navigationClickTargetSize,nextLabel:t.navigationNextLabel,prevLabel:t.navigationPrevLabel},on:{navigationclick:t.handleNavigation}}):t._e()]):t._e(),t.paginationEnabled?t._t("pagination",[i("pagination",{on:{paginationclick:function(e){return t.goToPage(e,"pagination")}}})]):t._e()],2)},d=[],g=(i("99af"),i("4de4"),i("caad"),i("c975"),i("d81d"),i("13d5"),i("2af1"),i("a9e3"),i("ac1f"),i("2532"),i("466d"),i("2909")),f=i("5530"),p=i("53ca"),v={props:{autoplay:{type:Boolean,default:!1},autoplayTimeout:{type:Number,default:2e3},autoplayHoverPause:{type:Boolean,default:!0},autoplayDirection:{type:String,default:"forward"}},data:function(){return{autoplayInterval:null}},destroyed:function(){this.$isServer||(this.$el.removeEventListener("mouseenter",this.pauseAutoplay),this.$el.removeEventListener("mouseleave",this.startAutoplay))},methods:{pauseAutoplay:function(){this.autoplayInterval&&(this.autoplayInterval=clearInterval(this.autoplayInterval))},startAutoplay:function(){this.autoplay&&(this.autoplayInterval=setInterval(this.autoplayAdvancePage,this.autoplayTimeout))},restartAutoplay:function(){this.pauseAutoplay(),this.startAutoplay()},autoplayAdvancePage:function(){this.advancePage(this.autoplayDirection)}},mounted:function(){!this.$isServer&&this.autoplayHoverPause&&(this.$el.addEventListener("mouseenter",this.pauseAutoplay),this.$el.addEventListener("mouseleave",this.startAutoplay)),this.startAutoplay()}},m=v,P=void 0,b=function(t,e,i){var n;return function(){var a=P,r=function(){n=null,i||t.apply(a)},s=i&&!n;clearTimeout(n),n=setTimeout(r,e),s&&t.apply(a)}},y=b,C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"VueCarousel-navigation"},[i("button",{staticClass:"VueCarousel-navigation-button VueCarousel-navigation-prev",class:{"VueCarousel-navigation--disabled":!t.canAdvanceBackward},style:"padding: "+t.clickTargetSize+"px; margin-right: -"+t.clickTargetSize+"px;",attrs:{type:"button","aria-label":"Previous page",tabindex:t.canAdvanceBackward?0:-1},domProps:{innerHTML:t._s(t.prevLabel)},on:{click:function(e){return e.preventDefault(),t.triggerPageAdvance("backward")}}}),i("button",{staticClass:"VueCarousel-navigation-button VueCarousel-navigation-next",class:{"VueCarousel-navigation--disabled":!t.canAdvanceForward},style:"padding: "+t.clickTargetSize+"px; margin-left: -"+t.clickTargetSize+"px;",attrs:{type:"button","aria-label":"Next page",tabindex:t.canAdvanceForward?0:-1},domProps:{innerHTML:t._s(t.nextLabel)},on:{click:function(e){return e.preventDefault(),t.triggerPageAdvance("forward")}}})])},w=[],x={name:"navigation",inject:["carousel"],props:{clickTargetSize:{type:Number,default:8},nextLabel:{type:String,default:"&#9654"},prevLabel:{type:String,default:"&#9664"}},computed:{canAdvanceForward:function(){return this.carousel.canAdvanceForward||!1},canAdvanceBackward:function(){return this.carousel.canAdvanceBackward||!1}},methods:{triggerPageAdvance:function(t){this.$emit("navigationclick",t)}}},S=x,T=(i("a0f2"),Object(u["a"])(S,C,w,!1,null,"60643be2",null)),O=T.exports,M=function(){var t,e=this,i=e.$createElement,n=e._self._c||i;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.carousel.pageCount>1,expression:"carousel.pageCount > 1"}],staticClass:"VueCarousel-pagination",class:(t={},t["VueCarousel-pagination--"+e.paginationPositionModifierName]=e.paginationPositionModifierName,t)},[n("div",{staticClass:"VueCarousel-dot-container",style:e.dotContainerStyle,attrs:{role:"tablist"}},e._l(e.paginationCount,(function(t,i){return n("button",{key:t+"_"+i,staticClass:"VueCarousel-dot",class:{"VueCarousel-dot--active":e.isCurrentDot(i)},style:e.dotStyle(i),attrs:{"aria-hidden":"false",role:"tab",title:e.getDotTitle(i),value:e.getDotTitle(i),"aria-label":e.getDotTitle(i),"aria-selected":e.isCurrentDot(i)?"true":"false"},on:{click:function(t){return e.goToPage(i)}}})})),0)])},$=[],k={name:"pagination",inject:["carousel"],computed:{paginationPositionModifierName:function(){var t=this.carousel.paginationPosition;if(!(t.indexOf("overlay")<0))return t},paginationPropertyBasedOnPosition:function(){return this.carousel.paginationPosition.indexOf("top")>=0?"bottom":"top"},paginationCount:function(){return this.carousel&&this.carousel.scrollPerPage?this.carousel.pageCount:this.carousel.slideCount||0},dotContainerStyle:function(){var t=this.carousel;if(-1===t.maxPaginationDotCount)return{"margin-top":"".concat(2*t.paginationPadding,"px")};var e=2*t.paginationPadding,i=t.maxPaginationDotCount*(t.paginationSize+e);return{"margin-top":"".concat(2*t.paginationPadding,"px"),overflow:"hidden",width:"".concat(i,"px"),margin:"0 auto","white-space":"nowrap"}}},methods:{goToPage:function(t){this.$emit("paginationclick",t)},isCurrentDot:function(t){return t===this.carousel.currentPage},getDotTitle:function(t){return this.carousel.$children[t].title?this.carousel.$children[t].title:"Item ".concat(t)},dotStyle:function(t){var e=this.carousel,i={};if(i["margin-".concat(this.paginationPropertyBasedOnPosition)]="".concat(2*e.paginationPadding,"px"),Object.assign(i,{padding:"".concat(e.paginationPadding,"px"),width:"".concat(e.paginationSize,"px"),height:"".concat(e.paginationSize,"px"),"background-color":"".concat(this.isCurrentDot(t)?e.paginationActiveColor:e.paginationColor)}),-1===e.maxPaginationDotCount)return i;var n=e.paginationSize+2*e.paginationPadding,a=e.pageCount-e.maxPaginationDotCount,r=e.currentPage>a?a:e.currentPage<=e.maxPaginationDotCount/2?0:e.currentPage-Math.ceil(e.maxPaginationDotCount/2)+1,s=0-n*r;return Object.assign(i,{"-webkit-transform":"translate3d(".concat(s,"px,0,0)"),transform:"translate3d(".concat(s,"px,0,0)"),"-webkit-transition":"-webkit-transform ".concat(e.speed/1e3,"s"),transition:"transform ".concat(e.speed/1e3,"s")})}}},A=k,E=(i("0f0c"),Object(u["a"])(A,M,$,!1,null,"4b52a64a",null)),W=E.exports,j={onwebkittransitionstart:"webkitTransitionStart",onmoztransitionstart:"transitionstart",onotransitionstart:"oTransitionStart otransitionstart",ontransitionstart:"transitionstart"},D={onwebkittransitionend:"webkitTransitionEnd",onmoztransitionend:"transitionend",onotransitionend:"oTransitionEnd otransitionend",ontransitionend:"transitionend"},N=function(){for(var t in j)if(t in window)return j[t]},L=function(){for(var t in D)if(t in window)return D[t]},V={name:"carousel",beforeUpdate:function(){this.computeCarouselWidth()},components:{Navigation:O,Pagination:W},data:function(){return{browserWidth:null,carouselWidth:0,currentPage:0,dragging:!1,dragMomentum:0,dragOffset:0,dragStartY:0,dragStartX:0,isTouch:"undefined"!==typeof window&&"ontouchstart"in window,offset:0,refreshRate:16,slideCount:0,transitionstart:"transitionstart",transitionend:"transitionend",currentHeight:"auto"}},mixins:[m],provide:function(){return{carousel:this}},props:{adjustableHeight:{type:Boolean,default:!1},adjustableHeightEasing:{type:String},centerMode:{type:Boolean,default:!1},easing:{type:String,validator:function(t){return-1!==["ease","linear","ease-in","ease-out","ease-in-out"].indexOf(t)||t.includes("cubic-bezier")},default:"ease"},loop:{type:Boolean,default:!1},minSwipeDistance:{type:Number,default:8},mouseDrag:{type:Boolean,default:!0},touchDrag:{type:Boolean,default:!0},navigateTo:{type:[Number,Array],default:0},navigationClickTargetSize:{type:Number,default:8},navigationEnabled:{type:Boolean,default:!1},navigationNextLabel:{type:String,default:"&#9654"},navigationPrevLabel:{type:String,default:"&#9664"},paginationActiveColor:{type:String,default:"#000000"},paginationColor:{type:String,default:"#efefef"},paginationEnabled:{type:Boolean,default:!0},paginationPadding:{type:Number,default:10},paginationPosition:{type:String,default:"bottom"},paginationSize:{type:Number,default:10},perPage:{type:Number,default:2},perPageCustom:{type:Array},resistanceCoef:{type:Number,default:20},scrollPerPage:{type:Boolean,default:!0},spacePadding:{type:Number,default:0},spacePaddingMaxOffsetFactor:{type:Number,default:0},speed:{type:Number,default:500},tagName:{type:String,default:"slide"},value:{type:Number},maxPaginationDotCount:{type:Number,default:-1},rtl:{type:Boolean,default:!1}},watch:{value:function(t){t!==this.currentPage&&(this.goToPage(t),this.render())},navigateTo:{immediate:!0,handler:function(t){var e=this;"object"===Object(p["a"])(t)?(0==t[1]&&(this.dragging=!0,setTimeout((function(){e.dragging=!1}),this.refreshRate)),this.$nextTick((function(){e.goToPage(t[0])}))):this.$nextTick((function(){e.goToPage(t)}))}},currentPage:function(t){this.$emit("pageChange",t),this.$emit("page-change",t),this.$emit("input",t)},autoplay:function(t){!1===t?this.pauseAutoplay():this.restartAutoplay()}},computed:{breakpointSlidesPerPage:function(){if(!this.perPageCustom)return this.perPage;var t=this.perPageCustom,e=this.browserWidth,i=t.sort((function(t,e){return t[0]>e[0]?-1:1})),n=i.filter((function(t){return e>=t[0]})),a=n[0]&&n[0][1];return a||this.perPage},canAdvanceForward:function(){return this.loop||this.offset<this.maxOffset},canAdvanceBackward:function(){return this.loop||this.currentPage>0},currentPerPage:function(){return!this.perPageCustom||this.$isServer?this.perPage:this.breakpointSlidesPerPage},currentOffset:function(){return this.isCenterModeEnabled?0:this.rtl?1*(this.offset-this.dragOffset):-1*(this.offset+this.dragOffset)},isHidden:function(){return this.carouselWidth<=0},maxOffset:function(){return Math.max(this.slideWidth*(this.slideCount-this.currentPerPage)-this.spacePadding*this.spacePaddingMaxOffsetFactor,0)},pageCount:function(){return this.scrollPerPage?Math.ceil(this.slideCount/this.currentPerPage):this.slideCount-this.currentPerPage+1},slideWidth:function(){var t=this.carouselWidth-2*this.spacePadding,e=this.currentPerPage;return t/e},isNavigationRequired:function(){return this.slideCount>this.currentPerPage},isCenterModeEnabled:function(){return this.centerMode&&!this.isNavigationRequired},transitionStyle:function(){var t="".concat(this.speed/1e3,"s"),e="".concat(t," ").concat(this.easing," transform");return this.adjustableHeight?"".concat(e,", height ").concat(t," ").concat(this.adjustableHeightEasing||this.easing):e},padding:function(){var t=this.spacePadding;return t>0&&t}},methods:{getNextPage:function(){return this.currentPage<this.pageCount-1?+this.currentPage+1:this.loop?0:this.currentPage},getPreviousPage:function(){return this.currentPage>0?this.currentPage-1:this.loop?this.pageCount-1:this.currentPage},advancePage:function(t){t&&"backward"===t&&this.canAdvanceBackward?this.goToPage(this.getPreviousPage(),"navigation"):(!t||t&&"backward"!==t)&&this.canAdvanceForward&&this.goToPage(this.getNextPage(),"navigation")},goToLastSlide:function(){var t=this;this.dragging=!0,setTimeout((function(){t.dragging=!1}),this.refreshRate),this.$nextTick((function(){t.goToPage(t.pageCount)}))},attachMutationObserver:function(){var t=this,e=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;if(e){var i={attributes:!0,data:!0};if(this.adjustableHeight&&(i=Object(f["a"])(Object(f["a"])({},i),{},{childList:!0,subtree:!0,characterData:!0})),this.mutationObserver=new e((function(){t.$nextTick((function(){t.computeCarouselWidth(),t.computeCarouselHeight()}))})),this.$parent.$el)for(var n=this.$el.getElementsByClassName("VueCarousel-inner"),a=0;a<n.length;a++)this.mutationObserver.observe(n[a],i)}},handleNavigation:function(t){this.advancePage(t),this.pauseAutoplay(),this.$emit("navigation-click",t)},detachMutationObserver:function(){this.mutationObserver&&this.mutationObserver.disconnect()},getBrowserWidth:function(){return this.browserWidth=window.innerWidth,this.browserWidth},getCarouselWidth:function(){for(var t=this.$el.getElementsByClassName("VueCarousel-inner"),e=0;e<t.length;e++)t[e].clientWidth>0&&(this.carouselWidth=t[e].clientWidth||0);return this.carouselWidth},getCarouselHeight:function(){var t=this;if(!this.adjustableHeight)return"auto";var e=this.currentPerPage*(+this.currentPage+1)-1,i=Object(g["a"])(Array(this.currentPerPage)).map((function(i,n){return t.getSlide(e+n)})).reduce((function(t,e){return Math.max(t,e&&e.$el.clientHeight||0)}),0);return this.currentHeight=0===i?"auto":"".concat(i,"px"),this.currentHeight},getSlideCount:function(){var t=this;this.slideCount=this.$slots&&this.$slots.default&&this.$slots.default.filter((function(e){return e.tag&&null!==e.tag.match("^vue-component-\\d+-".concat(t.tagName,"$"))})).length||0},getSlide:function(t){var e=this,i=this.$children.filter((function(t){return null!==t.$vnode.tag.match("^vue-component-\\d+-".concat(e.tagName,"$"))}));return i[t]},goToPage:function(t,e){t>=0&&t<=this.pageCount&&(this.offset=this.scrollPerPage?Math.min(this.slideWidth*this.currentPerPage*t,this.maxOffset):this.slideWidth*t,this.autoplay&&!this.autoplayHoverPause&&this.restartAutoplay(),this.currentPage=t,"pagination"===e&&(this.pauseAutoplay(),this.$emit("pagination-click",t)))},onStart:function(t){2!=t.button&&(document.addEventListener(this.isTouch?"touchend":"mouseup",this.onEnd,!0),document.addEventListener(this.isTouch?"touchmove":"mousemove",this.onDrag,!0),this.startTime=t.timeStamp,this.dragging=!0,this.dragStartX=this.isTouch?t.touches[0].clientX:t.clientX,this.dragStartY=this.isTouch?t.touches[0].clientY:t.clientY)},onEnd:function(t){this.autoplay&&!this.autoplayHoverPause&&this.restartAutoplay(),this.pauseAutoplay();var e=this.isTouch?t.changedTouches[0].clientX:t.clientX,i=this.dragStartX-e;if(this.dragMomentum=i/(t.timeStamp-this.startTime),0!==this.minSwipeDistance&&Math.abs(i)>=this.minSwipeDistance){var n=this.scrollPerPage?this.slideWidth*this.currentPerPage:this.slideWidth;this.dragOffset=this.dragOffset+Math.sign(i)*(n/2)}this.rtl?this.offset-=this.dragOffset:this.offset+=this.dragOffset,this.dragOffset=0,this.dragging=!1,this.render(),document.removeEventListener(this.isTouch?"touchend":"mouseup",this.onEnd,!0),document.removeEventListener(this.isTouch?"touchmove":"mousemove",this.onDrag,!0)},onDrag:function(t){var e=this.isTouch?t.touches[0].clientX:t.clientX,i=this.isTouch?t.touches[0].clientY:t.clientY,n=this.dragStartX-e,a=this.dragStartY-i;if(!(this.isTouch&&Math.abs(n)<Math.abs(a))){t.stopImmediatePropagation(),this.dragOffset=n;var r=this.offset+this.dragOffset;this.rtl?0==this.offset&&this.dragOffset>0?this.dragOffset=Math.sqrt(this.resistanceCoef*this.dragOffset):this.offset==this.maxOffset&&this.dragOffset<0&&(this.dragOffset=-Math.sqrt(-this.resistanceCoef*this.dragOffset)):r<0?this.dragOffset=-Math.sqrt(-this.resistanceCoef*this.dragOffset):r>this.maxOffset&&(this.dragOffset=Math.sqrt(this.resistanceCoef*this.dragOffset))}},onResize:function(){var t=this;this.computeCarouselWidth(),this.computeCarouselHeight(),this.dragging=!0,this.render(),setTimeout((function(){t.dragging=!1}),this.refreshRate)},render:function(){this.rtl?this.offset-=Math.max(1-this.currentPerPage,Math.min(Math.round(this.dragMomentum),this.currentPerPage-1))*this.slideWidth:this.offset+=Math.max(1-this.currentPerPage,Math.min(Math.round(this.dragMomentum),this.currentPerPage-1))*this.slideWidth;var t=this.scrollPerPage?this.slideWidth*this.currentPerPage:this.slideWidth,e=t*Math.floor(this.slideCount/(this.currentPerPage-1)),i=e+this.slideWidth*(this.slideCount%this.currentPerPage);this.offset>(e+i)/2?this.offset=i:this.offset=t*Math.round(this.offset/t),this.offset=Math.max(0,Math.min(this.offset,this.maxOffset)),this.currentPage=this.scrollPerPage?Math.round(this.offset/this.slideWidth/this.currentPerPage):Math.round(this.offset/this.slideWidth)},computeCarouselWidth:function(){this.getSlideCount(),this.getBrowserWidth(),this.getCarouselWidth(),this.setCurrentPageInBounds()},computeCarouselHeight:function(){this.getCarouselHeight()},setCurrentPageInBounds:function(){if(!this.canAdvanceForward&&this.scrollPerPage){var t=this.pageCount-1;this.currentPage=t>=0?t:0,this.offset=Math.max(0,Math.min(this.offset,this.maxOffset))}},handleTransitionStart:function(){this.$emit("transitionStart"),this.$emit("transition-start")},handleTransitionEnd:function(){this.$emit("transitionEnd"),this.$emit("transition-end")}},mounted:function(){window.addEventListener("resize",y(this.onResize,this.refreshRate)),(this.isTouch&&this.touchDrag||this.mouseDrag)&&this.$refs["VueCarousel-wrapper"].addEventListener(this.isTouch?"touchstart":"mousedown",this.onStart),this.attachMutationObserver(),this.computeCarouselWidth(),this.computeCarouselHeight(),this.transitionstart=N(),this.$refs["VueCarousel-inner"].addEventListener(this.transitionstart,this.handleTransitionStart),this.transitionend=L(),this.$refs["VueCarousel-inner"].addEventListener(this.transitionend,this.handleTransitionEnd),this.$emit("mounted"),"backward"===this.autoplayDirection&&this.goToLastSlide()},beforeDestroy:function(){this.detachMutationObserver(),window.removeEventListener("resize",this.getBrowserWidth),this.$refs["VueCarousel-inner"].removeEventListener(this.transitionstart,this.handleTransitionStart),this.$refs["VueCarousel-inner"].removeEventListener(this.transitionend,this.handleTransitionEnd),this.$refs["VueCarousel-wrapper"].removeEventListener(this.isTouch?"touchstart":"mousedown",this.onStart)}},_=V,H=(i("8bb8"),Object(u["a"])(_,l,d,!1,null,null,null)),B=H.exports,z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"VueCarousel-slide",class:{"VueCarousel-slide-active":t.isActive,"VueCarousel-slide-center":t.isCenter,"VueCarousel-slide-adjustableHeight":t.isAdjustableHeight},attrs:{tabindex:"-1","aria-hidden":!t.isActive,role:"tabpanel"}},[t._t("default")],2)},X=[],I={name:"slide",props:["title"],data:function(){return{width:null}},inject:["carousel"],mounted:function(){this.$isServer||this.$el.addEventListener("dragstart",(function(t){return t.preventDefault()})),this.$el.addEventListener(this.carousel.isTouch?"touchend":"mouseup",this.onTouchEnd)},computed:{activeSlides:function(){var t=this.carousel,e=t.currentPage,i=t.breakpointSlidesPerPage,n=t.$children,a=[],r=n.filter((function(t){return t.$el&&t.$el.className.indexOf("VueCarousel-slide")>=0})).map((function(t){return t._uid})),s=0;while(s<i){var o=r[e*i+s];a.push(o),s++}return a},isActive:function(){return this.activeSlides.indexOf(this._uid)>=0},isCenter:function(){var t=this.carousel.breakpointSlidesPerPage;return!(t%2===0||!this.isActive)&&this.activeSlides.indexOf(this._uid)===Math.floor(t/2)},isAdjustableHeight:function(){var t=this.carousel.adjustableHeight;return t}},methods:{onTouchEnd:function(t){var e=this.carousel.isTouch&&t.changedTouches&&t.changedTouches.length>0?t.changedTouches[0].clientX:t.clientX,i=this.carousel.dragStartX-e;(0===this.carousel.minSwipeDistance||Math.abs(i)<this.carousel.minSwipeDistance)&&(this.$emit("slideclick",Object.assign({},t.currentTarget.dataset)),this.$emit("slide-click",Object.assign({},t.currentTarget.dataset)))}}},R=I,F=(i("f33a"),Object(u["a"])(R,z,X,!1,null,null,null)),q=F.exports;n["a"].config.productionTip=!1,n["a"].component(B.name,B),n["a"].component(q.name,q),new n["a"]({render:function(t){return t(h)}}).$mount("#app")},c889:function(t,e,i){},f33a:function(t,e,i){"use strict";var n=i("c889"),a=i.n(n);a.a}});
//# sourceMappingURL=index.d4566b45.js.map