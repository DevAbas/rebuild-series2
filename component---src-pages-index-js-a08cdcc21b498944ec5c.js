(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{RXBc:function(e,t,n){"use strict";n.r(t);n("gu/5"),n("eoYm");var i=n("q1tI"),o=n.n(i),a=n("6ysj");var r=n("vOnD"),l=n("ZMKu"),s=r.default.div.withConfig({displayName:"homeStyles__Banner",componentId:"ztnijj-0"})(["background:",";height:100vh;width:100%;position:relative;margin-bottom:296px;"],(function(e){return e.theme.background})),c=r.default.div.withConfig({displayName:"homeStyles__Video",componentId:"ztnijj-1"})(["width:100%;height:100%;video{object-fit:cover;}"]),u=r.default.canvas.withConfig({displayName:"homeStyles__Canvas",componentId:"ztnijj-2"})(["position:absolute;top:0;left:0;height:100%;display:block;"]),f=Object(r.default)(l.b.h1).withConfig({displayName:"homeStyles__BannerTitle",componentId:"ztnijj-3"})(["position:absolute;bottom:-120px;left:-18px;color:",";pointer-events:none;"],(function(e){return e.theme.text})),d=Object(r.default)(l.b.span).withConfig({displayName:"homeStyles__Headline",componentId:"ztnijj-4"})(["display:block;font-size:23rem;font-weight:900;line-height:0.76;"]),p=function(e){var t=e.changeCursorType,r=function(){function e(){return{width:window.innerWidth,height:window.innerHeight}}var t=Object(i.useState)(e),n=t[0],o=t[1];return Object(i.useEffect)((function(){function t(){o(e())}return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),n}(),l=Object(a.c)().currentTheme,p=Object(i.useRef)(null);Object(i.useEffect)((function(){var e,t,n=p.current,i=n.cloneNode(),o=i.getContext("2d"),a=n.getContext("2d"),s=!1;a.globalCompositeOperation="source-over",a.fillStyle="dark"===l?"#000000":"#ffffff",a.fillRect(0,0,r.width,r.height),n.addEventListener("mouseover",(function(i){s=!0,e=i.pageX-n.offsetLeft,t=i.pageY-n.offsetTop})),n.addEventListener("click",(function(i){s=!0,e=i.pageX-n.offsetLeft,t=i.pageY-n.offsetTop})),n.addEventListener("mouseup",(function(i){s=!1,e=i.pageX-n.offsetLeft,t=i.pageY-n.offsetTop})),n.addEventListener("mousemove",(function(r){if(s){o.globalCompositeOperation="source-over",a.globalCompositeOperation="destination-out";var l=r.pageX-n.offsetLeft,c=r.pageY-n.offsetTop;o.lineJoin="round",o.moveTo(e,t),o.lineTo(l,c),o.closePath(),o.lineWidth=120,o.stroke(),e=l,t=c,a.drawImage(i,0,0)}}))}),[l]);var h={initial:{y:800},animate:{y:0,transition:{duration:1,ease:[.6,.05,-.01,.9]}}};return o.a.createElement(s,null,o.a.createElement(c,null,o.a.createElement("video",{src:n("V0Cn"),width:"100%",height:"100%",loop:!0,autoPlay:!0})),o.a.createElement(u,{ref:p,width:r.width,height:r.height,onMouseEnter:function(){return t("hovered")},onMouseLeave:t}),o.a.createElement(f,{variants:{initial:{y:800},animate:{y:0,transition:{staggerChildren:.2}}},initial:"initial",animate:"animate"},o.a.createElement(d,{variants:h},"DIG"),o.a.createElement(d,{variants:h},"DEEP")))},h=Object(i.lazy)((function(){return n.e(7).then(n.bind(null,"Bl7J"))}));t.default=function(e){var t=Object(a.b)(),n=Object(a.c)().cursorStyles,r="undefined"==typeof window;return o.a.createElement(o.a.Fragment,null,!r&&o.a.createElement(i.Suspense,{fallback:"Loading..."},o.a.createElement(h,null,o.a.createElement(p,{changeCursorType:function(e){e=n.includes(e)&&e||!1,t({type:"CURSOR_TYPE",cursorType:e})}}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-a08cdcc21b498944ec5c.js.map