(function(t){function e(e){for(var r,c,i=e[0],s=e[1],u=e[2],p=0,f=[];p<i.length;p++)c=i[p],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={index:0},a=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){n("97c8"),t.exports=n("df31")},"3de1":function(t,e,n){"use strict";var r=n("2909");n("ac1f"),n("5319"),n("841c"),n("1276"),n("466d"),n("498a"),n("a630"),n("3ca3"),n("99af");e["a"]={preload:function(t){for(var e=t.list,n=new PxLoader,r=0;r<e.length;r++){var o=e[r].src;n.addImage(o)}n.addProgressListener((function(e){var n=~~(e.completedCount/e.totalCount*100);t.progress&&t.progress(n)})),n.addCompletionListener((function(){t.success&&t.success()})),n.start()},parseURL:function(t){var e=document.createElement("a");return e.href=t,{source:t,protocol:e.protocol.replace(":",""),host:e.host,hostname:e.hostname,port:e.port,query:e.search,params:function(){for(var t,n={},r=e.search.replace(/^\?/,"").split("&"),o=r.length,a=0;a<o;a++)r[a]&&(t=r[a].split("="),n[t[0]]=t[1]);return n}(),file:(e.pathname.match(/\/([^\/?#]+)$/i)||[,""])[1],hash:e.hash.replace("#",""),path:e.pathname.replace(/^([^\/])/,"/$1"),relative:(e.href.match(/tps?:\/\/[^\/]+(.+)/)||[,""])[1],segments:e.pathname.replace(/^\//,"").split("/")}},getCookie:function(t){for(var e=t+"=",n=document.cookie.split(";"),r=0;r<n.length;r++){var o=n[r].trim();if(0==o.indexOf(e))return o.substring(e.length,o.length)}return null},uploadPoint:function(){var t=this,e=document.querySelector("html");e.addEventListener("click",(function(e){t.dispatch(e)}),!1)},getTarget:function(t){for(var e=null,n=Array.from(t.path||t.composedPath()),r=0;r<n.length;r++){var o=n[r];if(o.dataset&&o.dataset.points){e=o;break}}return e},_parse:function(t){return-1!=t.indexOf("{")&&-1!=t.indexOf("}")?new Function("return "+t)():t},dispatch:function(t){var e=t.path||t.composedPath();if(e&&e.length){var n=this.getTarget(t);if(n){var o=this._parse(n.dataset.points);o=o.split(","),console.log("埋点的数据为：",["_trackEvent"].concat(Object(r["a"])(o))),window._czc&&window._czc.push(["_trackEvent"].concat(Object(r["a"])(o)))}}}}},"6a86":function(t,e,n){},c1dd:function(t,e,n){"use strict";n("6a86")},df31:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-index"},[t._v(" 首页 "),n("p",[t._v(t._s(t.loadingTxt))]),n("br"),n("br"),n("img",{staticClass:"avatar",attrs:{src:""}})])},a=[],c=(n("ac1f"),n("5319"),n("1276"),n("bc3a")),i=n.n(c),s=n("4328"),u=n.n(s),l=n("6d29"),p=n.n(l),f=(n("c2d8"),{name:"pageIndex",data:function(){return{loadingTxt:0,root:"https://vwx.linkroutes.com/",auth:"wx/authorize",signature:"wx/signature",openId:""}},created:function(){var t=this.$tool.parseURL(location.href).params;console.log("页面携带的参数：",t),this.openId=t.openid,this.checkAuth(this.openId,this.token)},methods:{checkAuth:function(t,e){console.log("是否有openId:",t),t?(p()("授权成功"),this.setShare()):this.go2auth(location.href)},go2auth:function(t){console.log("跳转前的url:",t);var e=this.root+this.auth+"?redirect="+encodeURIComponent(t);location.replace(e)},setShare:function(t){i()({method:"post",url:this.root+this.signature,headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(t){return t=u.a.stringify(t),t}],data:{url:encodeURIComponent(location.href.split("#")[0])}}).then((function(t){console.log("8888888",t)})).catch((function(t){console.log(t)}))}}}),d=f,h=(n("c1dd"),n("2877")),g=Object(h["a"])(d,o,a,!1,null,null,null),v=g.exports,m=n("3de1");r["default"].prototype.$tool=m["a"],r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(v)}}).$mount("#app")}});