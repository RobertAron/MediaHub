(function(t){function e(e){for(var a,o,c=e[0],u=e[1],s=e[2],l=0,d=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},o={app:0},r={app:0},i=[];function c(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"082703f7"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={about:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"f88540e5"}[t]+".css",r=u.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===r))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],l=s.getAttribute("data-href");if(l===a||l===r)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[t],p.parentNode.removeChild(p),n(i)},p.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(t);var d=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}r[t]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/MediaHub/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"09b7":function(t,e,n){},"41cb":function(t,e,n){"use strict";n("09b7")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"790d":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n("2909"),o=(n("13d5"),n("99af"),n("d81d"),n("cb29"),"/MediaHub"),r=[{id:"".concat(-3),title:"Title of the file",description:"This is a description. It can be a semi large length. It has info about this file and stuffs.",downloadUrl:"".concat(o,"/sub-content/testVideo.mp4"),uploadedTimestamp:0,mainSrc:"".concat(o,"/sub-content/testPhoto.jpg"),mp4:"".concat(o,"/sub-content/testVideo.mp4")},{id:"".concat(-1),title:"yooo",description:"A picture of myself",downloadUrl:"".concat(o,"/sub-content/testPhoto.jpg"),uploadedTimestamp:0,mainSrc:"".concat(o,"/sub-content/testPhoto.jpg")},{id:"".concat(-2),title:"yooo2",description:"A video",downloadUrl:"".concat(o,"/sub-content/testVideo.mp4"),uploadedTimestamp:0,mainSrc:"".concat(o,"/sub-content/testPhoto.jpg"),mp4:"".concat(o,"/sub-content/testVideo.mp4")}].concat(Object(a["a"])(new Array(30).fill(null).map((function(t,e){return{id:"b".concat(e),title:"item ".concat(e),description:"some description goes into this location",downloadUrl:"someurlToDownload",uploadedTimestamp:0}})))).reduce((function(t,e){return t[e.id]=e,t}),{})},"9c0c":function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[n("b-navbar-brand",{attrs:{to:"/"}},[t._v("Media Hub")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item",{attrs:{to:"/"}},[t._v("Browse")]),n("b-nav-item",{attrs:{to:"/upload"}},[t._v("Upload")])],1)],1)],1),n("b-container",{staticClass:"mainContainer",attrs:{fluid:"lg"}},[n("router-view")],1)],1)},r=[],i=(n("5c0b"),n("2877")),c={},u=Object(i["a"])(c,o,r,!1,null,null,null),s=u.exports,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"media-items"},t._l(t.content,(function(e){return n("b-card",{key:e.uuid,staticClass:"card",attrs:{"no-body":""}},[n("b-button",{attrs:{href:e.downloadUrl,download:""}},[n("b-icon",{attrs:{icon:"download","aria-label":"download"}})],1),n("div",{staticClass:"picture-area"},[e.mainSrc?n("picture",[n("img",{attrs:{src:e.mainSrc,alt:e.title}})]):n("picture",[n("ClipIcon",{attrs:{width:"100%",height:"100%"}})],1)]),n("b-card-body",[n("b-link",{attrs:{to:{name:"FileDetails",params:{uuid:e.uuid}}}},[n("h4",[t._v(t._s(e.title))])]),n("p",[n("small",[t._v(" Uploaded "+t._s(new Date(e.uploadedTimestamp).toLocaleString())+" ")])]),n("p",[t._v(t._s(e.description))])],1)],1)})),1)},p=[],f=n("d4ec"),b=n("262e"),m=n("2caf"),h=(n("07ac"),n("9ab4")),v=n("1b40"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",t._g({attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"18",height:"18"}},t.$listeners),[n("path",{attrs:{d:"M0 0h24v24H0V0z",fill:"none"}}),n("path",{attrs:{d:"M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5a2.5 2.5 0 010-5H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z"}})])},w=[],y={},_=Object(i["a"])(y,g,w,!1,null,null,null),j=_.exports,O=n("790d"),C=function(t){Object(b["a"])(n,t);var e=Object(m["a"])(n);function n(){var t;return Object(f["a"])(this,n),t=e.apply(this,arguments),t.content=Object.values(O["a"]),t}return n}(v["b"]);C=Object(h["a"])([Object(v["a"])({components:{ClipIcon:j}})],C);var S=C,T=S,H=(n("41cb"),Object(i["a"])(T,d,p,!1,null,"73a87236",null)),P=H.exports;a["default"].use(l["a"]);var x=[{path:"/",name:"Home",component:P},{path:"/upload",name:"Upload",component:function(){return n.e("about").then(n.bind(null,"2679"))}},{path:"/details/:uuid",name:"FileDetails",component:function(){return n.e("about").then(n.bind(null,"9f52"))}}],E=new l["a"]({routes:x}),k=E,A=n("5f5b"),M=n("b1e0");n("f9e3"),n("2dd8");a["default"].use(A["a"]),a["default"].use(M["a"]),a["default"].config.productionTip=!1,new a["default"]({router:k,render:function(t){return t(s)}}).$mount("#app")}});
//# sourceMappingURL=app.2a19f2cb.js.map