(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{RXBc:function(e,t,n){"use strict";n.r(t);n("gu/5"),n("eoYm");var i=n("q1tI"),o=n.n(i),a=n("6ysj"),r=n("Bl7J");var s=n("vOnD"),l=n("ZMKu"),c=s.default.div.withConfig({displayName:"homeStyles__Banner",componentId:"ztnijj-0"})(["background:",";height:100vh;width:100%;position:relative;margin-bottom:296px;"],(function(e){return e.theme.background})),f=s.default.div.withConfig({displayName:"homeStyles__Video",componentId:"ztnijj-1"})(["width:100%;height:100%;video{object-fit:cover;}"]),u=s.default.canvas.withConfig({displayName:"homeStyles__Canvas",componentId:"ztnijj-2"})(["position:absolute;top:0;left:0;height:100%;display:block;"]),d=Object(s.default)(l.b.h1).withConfig({displayName:"homeStyles__BannerTitle",componentId:"ztnijj-3"})(["position:absolute;bottom:-120px;left:-18px;color:",";pointer-events:none;"],(function(e){return e.theme.text})),p=Object(s.default)(l.b.span).withConfig({displayName:"homeStyles__Headline",componentId:"ztnijj-4"})(["display:block;font-size:23rem;font-weight:900;line-height:0.76;"]),h=function(e){var t=e.changeCursorType,r=function(){var e="object"==typeof window;function t(){return{width:e?window.innerWidth:void 0,height:e?window.innerHeight:void 0}}var n=Object(i.useState)(t),o=n[0],a=n[1];return Object(i.useEffect)((function(){if(!e)return!1;function n(){a(t())}return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[]),o}(),s=Object(a.c)().currentTheme,l=Object(i.useRef)(null);Object(i.useEffect)((function(){var e,t,n=l.current,i=n.cloneNode(),o=i.getContext("2d"),a=n.getContext("2d"),c=!1;a.globalCompositeOperation="source-over",a.fillStyle="dark"===s?"#000000":"#ffffff",a.fillRect(0,0,r.width,r.height),n.addEventListener("mouseover",(function(i){c=!0,e=i.pageX-n.offsetLeft,t=i.pageY-n.offsetTop})),n.addEventListener("click",(function(i){c=!0,e=i.pageX-n.offsetLeft,t=i.pageY-n.offsetTop})),n.addEventListener("mouseup",(function(i){c=!1,e=i.pageX-n.offsetLeft,t=i.pageY-n.offsetTop})),n.addEventListener("mousemove",(function(r){if(c){o.globalCompositeOperation="source-over",a.globalCompositeOperation="destination-out";var s=r.pageX-n.offsetLeft,l=r.pageY-n.offsetTop;o.lineJoin="round",o.moveTo(e,t),o.lineTo(s,l),o.closePath(),o.lineWidth=120,o.stroke(),e=s,t=l,a.drawImage(i,0,0)}}))}),[s]);var h={initial:{y:800},animate:{y:0,transition:{duration:1,ease:[.6,.05,-.01,.9]}}};return o.a.createElement(c,null,o.a.createElement(f,null,o.a.createElement("video",{height:"100%",width:"100%",loop:!0,autoPlay:!0,src:n("V0Cn")})),o.a.createElement(u,{height:r.height,width:r.width,ref:l,onMouseEnter:function(){return t("hovered")},onMouseLeave:t}),o.a.createElement(d,{variants:{initial:{y:800},animate:{y:0,transition:{staggerChildren:.2}}},initial:"initial",animate:"animate"},o.a.createElement(p,{variants:h},"DIG"),o.a.createElement(p,{variants:h},"DEEP")))};t.default=function(e){var t=Object(a.b)(),n=Object(a.c)().cursorStyles;return o.a.createElement(r.a,null,o.a.createElement(h,{changeCursorType:function(e){e=n.includes(e)&&e||!1,t({type:"CURSOR_TYPE",cursorType:e})}}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-ebd5acea46e1e88f58f8.js.map