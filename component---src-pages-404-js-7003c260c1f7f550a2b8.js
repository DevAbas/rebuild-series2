(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("sc67"),n("AqHK"),n("pJf4"),n("pS08"),n("R48M");var o=n("q1tI"),i=r(o),a=r(n("Gytx"));function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function d(){l=e(s.map((function(e){return e.props}))),p.canUseDOM?t(l):n&&(l=n(l))}var p=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var u=o.prototype;return u.shouldComponentUpdate=function(e){return!a(e,this.props)},u.componentWillMount=function(){s.push(this),d()},u.componentDidUpdate=function(){d()},u.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),d()},u.render=function(){return i.createElement(r,this.props)},o}(o.Component);return u(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),u(p,"canUseDOM",c),p}}},EH9Q:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Rebuild-series2","description":"Rebuilding of the awwward-winning interactive site.","author":"Turabli Abas"}}}}')},IRj2:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Rebuild-series2"}}}}')},QQdC:function(e,t,n){e.exports=n.p+"static/50-beaches-fb6ba34d77b5e12a4dcbe1a283177c50.mp4"},RJJy:function(e,t,n){e.exports=n.p+"static/easy-cd62565914274c60d51f139d9c43afa2.mp4"},TJpk:function(e,t,n){n("MIFh"),n("wZFJ"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("JHok"),n("LagC"),n("pS08"),n("sc67"),n("R48M"),n("E5k/"),t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=d(n("q1tI")),a=d(n("17x9")),u=d(n("8+s/")),c=d(n("bmMU")),l=n("v1p5"),s=n("hFT/");function d(e){return e&&e.__esModule?e:{default:e}}function p(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var m,E,h,b=(0,u.default)(l.reducePropsToState,l.handleClientStateChange,l.mapStateOnServer)((function(){return null})),y=(m=b,h=E=function(e){function t(){return f(this,t),T(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,c.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case s.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,o=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return r({},o,((t={})[n.type]=[].concat(o[n.type]||[],[r({},i,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,o=e.child,i=e.newProps,a=e.newChildProps,u=e.nestedChildren;switch(o.type){case s.TAG_NAMES.TITLE:return r({},i,((t={})[o.type]=u,t.titleAttributes=r({},a),t));case s.TAG_NAMES.BODY:return r({},i,{bodyAttributes:r({},a)});case s.TAG_NAMES.HTML:return r({},i,{htmlAttributes:r({},a)})}return r({},i,((n={})[o.type]=r({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var o;n=r({},n,((o={})[t]=e[t],o))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return i.default.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=p(o,["children"]),u=(0,l.convertReactPropstoHtmlAttributes)(a);switch(n.warnOnInvalidChildren(e,i),e.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:u,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:u,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=p(e,["children"]),o=r({},n);return t&&(o=this.mapChildrenToProps(t,o)),i.default.createElement(m,o)},o(t,null,[{key:"canUseDOM",set:function(e){m.canUseDOM=e}}]),t}(i.default.Component),E.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},E.defaultProps={defer:!0,encodeSpecialCharacters:!0},E.peek=m.peek,E.rewind=function(){var e=m.rewind();return e||(e=(0,l.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},h);y.renderStatic=y.rewind,t.Helmet=y,t.default=y},WRJ3:function(e,t,n){"use strict";n("R48M"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Normalize=t.normalize=void 0;var r=n("vOnD"),o=(0,r.css)(['html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0;}main{display:block;}h1{font-size:2em;margin:0.67em 0;}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace,monospace;font-size:1em;}a{background-color:transparent;}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder;}code,kbd,samp{font-family:monospace,monospace;font-size:1em;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}img{border-style:none;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible;}button,select{text-transform:none;}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0;}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText;}fieldset{padding:0.35em 0.75em 0.625em;}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline;}textarea{overflow:auto;}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto;}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block;}summary{display:list-item;}template{display:none;}[hidden]{display:none;}']);t.normalize=o;var i=(0,r.createGlobalStyle)(o);t.Normalize=i;var a=o;t.default=a},bmMU:function(e,t,n){"use strict";n("pJf4"),n("Ll4R"),n("q8oJ"),n("C9fy"),n("klQ5"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("MIFh");var r=Array.isArray,o=Object.keys,i=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var u,c,l,s=r(t),d=r(n);if(s&&d){if((c=t.length)!=n.length)return!1;for(u=c;0!=u--;)if(!e(t[u],n[u]))return!1;return!0}if(s!=d)return!1;var p=t instanceof Date,f=n instanceof Date;if(p!=f)return!1;if(p&&f)return t.getTime()==n.getTime();var T=t instanceof RegExp,m=n instanceof RegExp;if(T!=m)return!1;if(T&&m)return t.toString()==n.toString();var E=o(t);if((c=E.length)!==o(n).length)return!1;for(u=c;0!=u--;)if(!i.call(n,E[u]))return!1;if(a&&t instanceof Element&&n instanceof Element)return t===n;for(u=c;0!=u--;)if(!("_owner"===(l=E[u])&&t.$$typeof||e(t[l],n[l])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},gKAI:function(e,t,n){e.exports=n.p+"static/make-it-zero-a2107e500d7f9d76ac8b1ce3a0953764.mp4"},"hFT/":function(e,t,n){n("U6Bt"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("AqHK"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},o=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(o).reduce((function(e,t){return e[o[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},"ip+z":function(e,t,n){var r={"./50-beaches.mp4":"QQdC","./easy.mp4":"RJJy","./featured-video.mp4":"xZFP","./it-takes-an-island.mp4":"zlIH","./make-it-zero.mp4":"gKAI","./video.mp4":"V0Cn"};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id="ip+z"},v1p5:function(e,t,n){(function(e){n("wZFJ"),n("HQhv"),n("1dPr"),n("JHok"),n("MIFh"),n("sc67"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("OeI1"),n("AqHK"),n("U6Bt"),n("sC2a"),n("E5k/"),n("m210"),n("4DPX"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=c(n("q1tI")),a=c(n("MgzW")),u=n("hFT/");function c(e){return e&&e.__esModule?e:{default:e}}var l,s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=E(e,u.TAG_NAMES.TITLE),n=E(e,u.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=E(e,u.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return E(e,u.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},f=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return o({},e,t)}),{})},T=function(e,t){return t.filter((function(e){return void 0!==e[u.TAG_NAMES.BASE]})).map((function(e){return e[u.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},m=function(e,t,n){var o={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&A("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],l=c.toLowerCase();-1===t.indexOf(l)||n===u.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||l===u.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==u.TAG_PROPERTIES.INNER_HTML&&c!==u.TAG_PROPERTIES.CSS_TEXT&&c!==u.TAG_PROPERTIES.ITEM_PROP||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][s]&&(r[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(r),c=0;c<i.length;c++){var l=i[c],s=(0,a.default)({},o[l],r[l]);o[l]=s}return e}),[]).reverse()},E=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},h=(l=Date.now(),function(e){var t=Date.now();t-l>16?(l=t,e(t)):setTimeout((function(){h(e)}),0)}),b=function(e){return clearTimeout(e)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||h:e.requestAnimationFrame||h,g="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||b:e.cancelAnimationFrame||b,A=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},v=null,S=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,d=e.styleTags,p=e.title,f=e.titleAttributes;M(u.TAG_NAMES.BODY,r),M(u.TAG_NAMES.HTML,o),w(p,f);var T={baseTag:O(u.TAG_NAMES.BASE,n),linkTags:O(u.TAG_NAMES.LINK,i),metaTags:O(u.TAG_NAMES.META,a),noscriptTags:O(u.TAG_NAMES.NOSCRIPT,c),scriptTags:O(u.TAG_NAMES.SCRIPT,s),styleTags:O(u.TAG_NAMES.STYLE,d)},m={},E={};Object.keys(T).forEach((function(e){var t=T[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(E[e]=T[e].oldTags)})),t&&t(),l(e,m,E)},_=function(e){return Array.isArray(e)?e.join(""):e},w=function(e,t){void 0!==e&&document.title!==e&&(document.title=_(e)),M(u.TAG_NAMES.TITLE,t)},M=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(u.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var l=a[c],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===o.indexOf(l)&&o.push(l);var d=i.indexOf(l);-1!==d&&i.splice(d,1)}for(var p=i.length-1;p>=0;p--)n.removeAttribute(i[p]);o.length===i.length?n.removeAttribute(u.HELMET_ATTRIBUTE):n.getAttribute(u.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(u.HELMET_ATTRIBUTE,a.join(","))}},O=function(e,t){var n=document.head||document.querySelector(u.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+u.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===u.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===u.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(u.HELMET_ATTRIBUTE,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},R=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[u.REACT_TAG_MAP[n]||n]=e[n],t}),t)},P=function(e,t,n){switch(e){case u.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[u.HELMET_ATTRIBUTE]=!0,o=x(n,r),[i.default.createElement(u.TAG_NAMES.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=R(n),i=_(t);return o?"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+o+">"+s(i,r)+"</"+e+">":"<"+e+" "+u.HELMET_ATTRIBUTE+'="true">'+s(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case u.ATTRIBUTE_NAMES.BODY:case u.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return x(t)},toString:function(){return R(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[u.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=u.REACT_TAG_MAP[e]||e;if(n===u.TAG_PROPERTIES.INNER_HTML||n===u.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),i.default.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===u.TAG_PROPERTIES.INNER_HTML||e===u.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===u.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[u.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){v&&g(v),e.defer?v=y((function(){S(e,(function(){v=null}))})):(S(e),v=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,d=e.title,p=void 0===d?"":d,f=e.titleAttributes;return{base:P(u.TAG_NAMES.BASE,t,r),bodyAttributes:P(u.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:P(u.ATTRIBUTE_NAMES.HTML,o,r),link:P(u.TAG_NAMES.LINK,i,r),meta:P(u.TAG_NAMES.META,a,r),noscript:P(u.TAG_NAMES.NOSCRIPT,c,r),script:P(u.TAG_NAMES.SCRIPT,l,r),style:P(u.TAG_NAMES.STYLE,s,r),title:P(u.TAG_NAMES.TITLE,{title:p,titleAttributes:f},r)}},t.reducePropsToState=function(e){return{baseTag:T([u.TAG_PROPERTIES.HREF],e),bodyAttributes:f(u.ATTRIBUTE_NAMES.BODY,e),defer:E(e,u.HELMET_PROPS.DEFER),encode:E(e,u.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:f(u.ATTRIBUTE_NAMES.HTML,e),linkTags:m(u.TAG_NAMES.LINK,[u.TAG_PROPERTIES.REL,u.TAG_PROPERTIES.HREF],e),metaTags:m(u.TAG_NAMES.META,[u.TAG_PROPERTIES.NAME,u.TAG_PROPERTIES.CHARSET,u.TAG_PROPERTIES.HTTPEQUIV,u.TAG_PROPERTIES.PROPERTY,u.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:m(u.TAG_NAMES.NOSCRIPT,[u.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:m(u.TAG_NAMES.SCRIPT,[u.TAG_PROPERTIES.SRC,u.TAG_PROPERTIES.INNER_HTML],e),styleTags:m(u.TAG_NAMES.STYLE,[u.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:f(u.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=y,t.warn=A}).call(this,n("yLpj"))},w2l6:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),i=(n("gu/5"),n("eoYm"),n("IRj2")),a=n("6ysj"),u=n("+ZDr"),c=n.n(u),l=n("vOnD"),s=n("ZMKu"),d=Object(l.default)(s.b.div).withConfig({displayName:"headerStyles__HeaderNav",componentId:"sc-17zj55c-0"})(["height:0px;width:100%;position:absolute;top:72px;left:0;right:0;z-index:99;"]),p=l.default.div.withConfig({displayName:"headerStyles__Logo",componentId:"sc-17zj55c-1"})(["a{font-size:1.8rem;font-weight:800;color:",";user-select:none;}span{height:16px;width:16px;background:",";margin:0 4px;border-radius:100%;display:inline-block;position:relative;bottom:2px;}"],(function(e){return e.theme.text}),(function(e){return e.theme.red})),f=l.default.div.withConfig({displayName:"headerStyles__Menu",componentId:"sc-17zj55c-2"})(["button{transform-origin:center;border:none;padding:20px;background:none;outline:none;span{width:36px;height:8px;display:block;background:",";margin:8px;}}"],(function(e){return e.theme.text})),T=l.default.div.withConfig({displayName:"globalStyles__Container",componentId:"sc-15f4ydf-0"})(["flex-grow:1;margin:0 auto;padding:0 32px;position:relative;width:auto;height:100%;@media (min-width:1024px){max-width:960px;}@media (min-width:1216px){max-width:1152px;}@media (min-width:1408px){max-width:1244px;}",""],(function(e){return e.fluid&&Object(l.css)(["padding:0;margin:0;background:red;max-width:100% !important;"])})),m=l.default.div.withConfig({displayName:"globalStyles__Flex",componentId:"sc-15f4ydf-1"})(["position:relative;display:flex;align-items:center;",";",";",";",";"],(function(e){return e.spaceBetween&&Object(l.css)(["justify-content:space-between;"])}),(function(e){return e.flexEnd&&Object(l.css)(["justify-content:flex-end;"])}),(function(e){return e.alignTop&&Object(l.css)(["align-items:flex-start;"])}),(function(e){return e.noHeight&&Object(l.css)(["height:0;"])})),E=l.default.div.withConfig({displayName:"globalStyles__Cursor",componentId:"sc-15f4ydf-2"})(["position:absolute;top:0;left:0;width:32px;height:32px;background:",";border-radius:100%;transform:translate(-50%,-50%);transition:all 0.1s ease-out;transition-property:width,height,border;will-change:width,height,transform,border;pointer-events:none;z-index:999;&.pointer{border:4px solid "," !important;}&.hovered{background:transparent !important;width:56px;height:56px;border:4px solid ",";}&.nav-open{background:",";}&.nav-open,&.locked{border:4px solid "," !important;}"],(function(e){return e.theme.red}),(function(e){return e.theme.text}),(function(e){return e.theme.red}),(function(e){return e.theme.text}),(function(e){return e.theme.text})),h=function(e){var t=e.changeCursorType,n=e.toggleMenu,i=e.setToggleMenu,u=Object(a.b)(),l=Object(a.c)().currentTheme;Object(r.useEffect)((function(){l&&localStorage.setItem("theme",l)}),[l]);return o.a.createElement(d,{animate:{y:0,opacity:1},initial:{y:-72,opacity:0},transition:{duration:1,ease:[.6,.05,-.01,.9]}},o.a.createElement(T,null,o.a.createElement(m,{spaceBetween:!0,noHeight:!0},o.a.createElement(p,{onMouseEnter:function(){return t("hovered")},onMouseLeave:t},o.a.createElement(c.a,{to:"/"},"FURR"),o.a.createElement("span",{onClick:function(){u("dark"===l?{type:"TOGGLE_THEME",theme:"light"}:{type:"TOGGLE_THEME",theme:"dark"})},onMouseEnter:function(){return t("pointer")},onMouseMove:function(){return t("pointer")},onMouseOver:function(){return t("pointer")},onMouseLeave:t}),o.a.createElement(c.a,{to:"/"},"W")),o.a.createElement(f,{onClick:function(){return i(!n)}},o.a.createElement("button",null,o.a.createElement("span",null),o.a.createElement("span",null))))))},b=function(e){var t=e.toggleMenu,n=Object(a.c)().cursorType,i=Object(r.useState)({x:400,y:400}),u=i[0],c=i[1],l=function(e){var t=e.pageX,n=e.pageY;c({x:t,y:n})};return Object(r.useEffect)((function(){return document.addEventListener("mousemove",l),function(){return document.removeEventListener("mousemove",l)}}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(E,{className:(n?"hovered":"")+" "+n+" "+(t?"nav-open":""),style:{left:u.x+"px",top:u.y+"px"}}))},y=n("Wbzz"),g=Object(l.default)(s.b.div).withConfig({displayName:"navigationStyles__Nav",componentId:"dc5kxy-0"})(["position:fixed;top:0;left:0;width:100%;height:100%;display:block;background:",";color:#000;z-index:100;overflow:hidden;"],(function(e){return e.theme.red})),A=l.default.div.withConfig({displayName:"navigationStyles__NavHeader",componentId:"dc5kxy-1"})(["position:relative;top:72px;h2{color:",";}"],(function(e){return e.theme.background})),v=l.default.div.withConfig({displayName:"navigationStyles__CloseNav",componentId:"dc5kxy-2"})(["button{transform-origin:center;border:none;padding:20px;background:none;outline:none;span{display:block;width:36px;height:8px;margin:8px;background:",";}}"],(function(e){return e.theme.background})),S=l.default.div.withConfig({displayName:"navigationStyles__NavList",componentId:"dc5kxy-3"})(["height:100%;width:100%;display:flex;align-items:center;ul{padding:0;li{list-style:none;font-size:3rem;text-transform:uppercase;font-weight:900;height:96px;line-height:96px;overflow:hidden;.link{color:",";position:relative;display:flex;align-items:center;.arrow{height:76px;margin-right:8px;}}svg{width:100px;path{fill:",";}}}}"],(function(e){return e.theme.background}),(function(e){return e.theme.background})),_=l.default.div.withConfig({displayName:"navigationStyles__NavVideos",componentId:"dc5kxy-4"})(["position:absolute;top:0;bottom:0;left:25%;z-index:-1;width:100%;height:100%;background:#000;.reveal{width:100%;height:100%;background:",";position:absolute;left:0;top:0;bottom:0;}.video{background:#000;position:absolute;height:100%;margin:0;z-index:-1;video{height:100%;}}"],(function(e){return e.theme.red})),w=l.default.div.withConfig({displayName:"navigationStyles__NavFooter",componentId:"dc5kxy-5"})([""]),M=[{id:0,title:"not humble",path:"/not-humble",video:"featured-video.mp4"},{id:1,title:"bleeping easy",path:"/bleeping-easy",video:"easy.mp4"},{id:2,title:"make it zero",path:"/make-it-zero",video:"make-it-zero.mp4"},{id:3,title:"it takes an island",path:"/it-takes-an-island",video:"it-takes-an-island.mp4"},{id:4,title:"50 beaches",path:"/50-beaches",video:"50-beaches.mp4"}],O=function(e){var t=e.toggleMenu,i=e.setToggleMenu,a=e.changeCursorType,u=Object(r.useState)({show:!1,video:"featured-video.mp4",key:"0"}),c=u[0],l=u[1];return o.a.createElement(s.a,null,t&&o.a.createElement(g,{initial:{x:"-100%"},exit:{x:"-100%"},animate:{x:t?"0":"-100%"},transition:{duration:.8,ease:[.6,.05,-.01,.9]}},o.a.createElement(T,null,o.a.createElement(A,null,o.a.createElement(m,{spaceBetween:!0,noHeight:!0},o.a.createElement("h2",null,"Projects"),o.a.createElement(v,{onClick:function(){return i(!t)},onMouseEnter:function(){return a("pointer")},onMouseLeave:a},o.a.createElement("button",null,o.a.createElement("span",null),o.a.createElement("span",null))))),o.a.createElement(S,null,o.a.createElement("ul",null,M.map((function(e){return o.a.createElement(s.b.li,{key:e.id,onMouseEnter:function(){return a("pointer")},onMouseLeave:a,onHoverStart:function(){return l({show:!0,video:e.video,key:e.id})},onHoverEnd:function(){return l({show:!1,video:e.video,key:e.id})}},o.a.createElement(y.Link,{to:"/projects"+e.path},o.a.createElement(s.b.div,{initial:{x:-108},className:"link",whileHover:{x:-40,transition:{duration:.4,ease:[.6,.05,-.01,.9]}}},o.a.createElement("span",{className:"arrow"},o.a.createElement(s.b.svg,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 101 57"},o.a.createElement("path",{d:"M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z",fill:"#000",fillRule:"evenodd"}))),e.title)))})))),o.a.createElement(w,null),o.a.createElement(_,null,o.a.createElement(s.b.div,{animate:{width:c.show?0:"100%"},className:"reveal"}),o.a.createElement(s.b.div,{className:"video"},o.a.createElement(s.a,{initial:!1,exitBeforeEnter:!0},o.a.createElement(s.b.video,{key:c.key,src:n("ip+z")("./"+c.video),initial:{opacity:0},exit:{opacity:0},animate:{opacity:1},transition:{duration:.2,ease:"easeInOut"},loop:!0,autoPlay:!0})))))))},R=n("WRJ3");function x(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  ","\n\n  *{\n    text-decoration: none;\n    cursor: none;\n  }\n\n  html {\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialised;\n    font-size: 16px;\n  }\n\n  body {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    background: ",";\n    scroll-behavior: none;\n    overflow-x: hidden;\n  }\n"]);return x=function(){return e},e}var P=Object(l.createGlobalStyle)(x(),R.normalize,(function(e){return e.theme.background})),C=function(e){var t=e.children,n=Object(r.useState)(!1),u=n[0],c=n[1],s=(i.data,Object(a.b)()),d=Object(a.c)(),p=d.currentTheme,f=d.cursorStyles,T=function(e){e=f.includes(e)&&e||!1,s({type:"CURSOR_TYPE",cursorType:e})};return o.a.createElement(l.ThemeProvider,{theme:"dark"===p?{background:"#000",text:"#fff",red:"#ea291e"}:{background:"#fff",text:"#000",red:"#ea291e"}},o.a.createElement(P,null),o.a.createElement(b,{toggleMenu:u}),o.a.createElement(h,{toggleMenu:u,setToggleMenu:c,changeCursorType:T}),o.a.createElement(O,{toggleMenu:u,setToggleMenu:c,changeCursorType:T}),o.a.createElement("main",null,t))},I=n("EH9Q"),N=n("TJpk"),k=n.n(N);function L(e){var t=e.description,n=e.lang,r=e.meta,i=e.title,a=I.data.site,u=t||a.siteMetadata.description;return o.a.createElement(k.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+a.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:i},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:a.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:u}].concat(r)})}L.defaultProps={lang:"en",meta:[],description:""};var G=L;t.default=function(){return o.a.createElement(C,null,o.a.createElement(G,{title:"404: Not found"}),o.a.createElement("h1",null,"NOT FOUND"),o.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},xZFP:function(e,t,n){e.exports=n.p+"static/featured-video-a88de43f12f64eb7d42d7aac7e69b652.mp4"},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n},zlIH:function(e,t,n){e.exports=n.p+"static/it-takes-an-island-a797a73047aa34e689c9f0987a280926.mp4"}}]);
//# sourceMappingURL=component---src-pages-404-js-7003c260c1f7f550a2b8.js.map