(function(t){function e(e){for(var r,a,c=e[0],u=e[1],s=e[2],l=0,p=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function c(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"6f9651f6"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={about:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"af32d158"}[t]+".css",o=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return e()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){s=p[c],l=s.getAttribute("data-href");if(l===r||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],d.parentNode.removeChild(d),n(i)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(t);var p=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/MediaHub/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var p=0;p<s.length;p++)e(s[p]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"059c":function(t,e,n){"use strict";n("e7ce")},"2f8a":function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return d}));var r=n("1da1"),a=(n("99af"),n("96cf"),n("bc3a")),o=n.n(a),i=o.a,c="https://kgi9pic66a.execute-api.us-east-1.amazonaws.com";function u(t,e,n){return s.apply(this,arguments)}function s(){return s=Object(r["a"])(regeneratorRuntime.mark((function t(e,n,r){var a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new FormData,a.append("title",e),a.append("file",n),a.append("description",r),o="".concat(c,"/files"),t.next=7,i.post(o,a);case 7:t.sent;case 8:case"end":return t.stop()}}),t)}))),s.apply(this,arguments)}function l(){return p.apply(this,arguments)}function p(){return p=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="".concat(c,"/files"),t.next=3,i.get(e);case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)}))),p.apply(this,arguments)}function d(t){return f.apply(this,arguments)}function f(){return f=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n="".concat(c,"/files/").concat(e),t.next=3,i.get(n);case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)}))),f.apply(this,arguments)}},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9c0c":function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[n("b-navbar-brand",{attrs:{to:"/"}},[t._v("Media Hub")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item",{attrs:{to:"/"}},[t._v("Browse")]),n("b-nav-item",{attrs:{to:"/upload"}},[t._v("Upload")])],1)],1)],1),n("b-container",{staticClass:"mainContainer",attrs:{fluid:"lg"}},[n("router-view")],1)],1)},o=[],i=(n("5c0b"),n("2877")),c={},u=Object(i["a"])(c,a,o,!1,null,null,null),s=u.exports,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"media-items"},t._l(t.content,(function(e){return n("b-card",{key:e.id,staticClass:"card",attrs:{"no-body":""}},[n("b-button",{staticClass:"floatingButton",attrs:{href:e.downloadUrl,download:""}},[n("b-icon",{attrs:{icon:"download","aria-label":"download"}})],1),n("div",{staticClass:"picture-area"},[e.imageSrc?n("picture",[n("img",{attrs:{src:e.imageSrc,alt:e.title}})]):n("picture",[n("ClipIcon",{attrs:{width:"100%",height:"100%"}})],1)]),n("b-card-body",[n("b-link",{attrs:{to:{name:"FileDetails",params:{id:e.id}}}},[n("h4",[t._v(t._s(e.title))])]),n("p",[n("small",[t._v(" Uploaded "+t._s(new Date(e.uploadedTimestamp).toLocaleString())+" ")])]),n("p",[t._v(t._s(e.description))])],1)],1)})),1)},d=[],f=n("1da1"),b=n("d4ec"),h=n("bee2"),v=n("262e"),m=n("2caf"),g=(n("96cf"),n("9ab4")),w=n("1b40"),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",t._g({attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"18",height:"18"}},t.$listeners),[n("path",{attrs:{d:"M0 0h24v24H0V0z",fill:"none"}}),n("path",{attrs:{d:"M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5a2.5 2.5 0 010-5H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z"}})])},O=[],_={},j=Object(i["a"])(_,y,O,!1,null,null,null),x=j.exports,C=n("2f8a"),k=function(t){Object(v["a"])(n,t);var e=Object(m["a"])(n);function n(){var t;return Object(b["a"])(this,n),t=e.apply(this,arguments),t.isLoading=!0,t.content=[],t}return Object(h["a"])(n,[{key:"mounted",value:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(C["c"])();case 2:e=t.sent,this.content=e,this.isLoading=!1;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}]),n}(w["b"]);k=Object(g["a"])([Object(w["a"])({components:{ClipIcon:x}})],k);var H=k,S=H,E=(n("059c"),Object(i["a"])(S,p,d,!1,null,"a3b1ce18",null)),P=E.exports;r["default"].use(l["a"]);var T=[{path:"/",name:"Home",component:P},{path:"/upload",name:"Upload",component:function(){return n.e("about").then(n.bind(null,"2679"))}},{path:"/details/:id",name:"FileDetails",component:function(){return n.e("about").then(n.bind(null,"9f52"))}}],L=new l["a"]({routes:T}),M=L,R=n("5f5b"),A=n("b1e0");n("f9e3"),n("2dd8");r["default"].use(R["a"]),r["default"].use(A["a"]),r["default"].config.productionTip=!1,new r["default"]({router:M,render:function(t){return t(s)}}).$mount("#app")},e7ce:function(t,e,n){}});
//# sourceMappingURL=app.6b03b032.js.map