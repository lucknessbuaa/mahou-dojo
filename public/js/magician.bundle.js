/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){function n(e){var t=e.length,n=Z.type(e);return"function"===n||Z.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e}function r(e,t,n){if(Z.isFunction(t))return Z.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return Z.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(at.test(t))return Z.filter(t,e,n);t=Z.filter(t,e)}return Z.grep(e,function(e){return z.call(t,e)>=0!==n})}function i(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function o(e){var t=dt[e]={};return Z.each(e.match(ht)||[],function(e,n){t[n]=!0}),t}function s(){Q.removeEventListener("DOMContentLoaded",s,!1),e.removeEventListener("load",s,!1),Z.ready()}function a(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=Z.expando+Math.random()}function c(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(wt,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:bt.test(n)?Z.parseJSON(n):n}catch(i){}vt.set(e,t,n)}else n=void 0;return n}function u(){return!0}function l(){return!1}function f(){try{return Q.activeElement}catch(e){}}function p(e,t){return Z.nodeName(e,"table")&&Z.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function h(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function d(e){var t=Lt.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function g(e,t){for(var n=0,r=e.length;r>n;n++)yt.set(e[n],"globalEval",!t||yt.get(t[n],"globalEval"))}function m(e,t){var n,r,i,o,s,a,c,u;if(1===t.nodeType){if(yt.hasData(e)&&(o=yt.access(e),s=yt.set(t,o),u=o.events)){delete s.handle,s.events={};for(i in u)for(n=0,r=u[i].length;r>n;n++)Z.event.add(t,i,u[i][n])}vt.hasData(e)&&(a=vt.access(e),c=Z.extend({},a),vt.set(t,c))}}function y(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return void 0===t||t&&Z.nodeName(e,t)?Z.merge([e],n):n}function v(e,t){var n=t.nodeName.toLowerCase();"input"===n&&Ct.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}function b(t,n){var r,i=Z(n.createElement(t)).appendTo(n.body),o=e.getDefaultComputedStyle&&(r=e.getDefaultComputedStyle(i[0]))?r.display:Z.css(i[0],"display");return i.detach(),o}function w(e){var t=Q,n=Vt[e];return n||(n=b(e,t),"none"!==n&&n||(It=(It||Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=It[0].contentDocument,t.write(),t.close(),n=b(e,t),It.detach()),Vt[e]=n),n}function x(e,t,n){var r,i,o,s,a=e.style;return n=n||$t(e),n&&(s=n.getPropertyValue(t)||n[t]),n&&(""!==s||Z.contains(e.ownerDocument,e)||(s=Z.style(e,t)),Mt.test(s)&&Ft.test(t)&&(r=a.width,i=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=r,a.minWidth=i,a.maxWidth=o)),void 0!==s?s+"":s}function k(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function S(e,t){if(t in e)return t;for(var n=t[0].toUpperCase()+t.slice(1),r=t,i=Yt.length;i--;)if(t=Yt[i]+n,t in e)return t;return r}function C(e,t,n){var r=Ut.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function T(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;4>o;o+=2)"margin"===n&&(s+=Z.css(e,n+kt[o],!0,i)),r?("content"===n&&(s-=Z.css(e,"padding"+kt[o],!0,i)),"margin"!==n&&(s-=Z.css(e,"border"+kt[o]+"Width",!0,i))):(s+=Z.css(e,"padding"+kt[o],!0,i),"padding"!==n&&(s+=Z.css(e,"border"+kt[o]+"Width",!0,i)));return s}function A(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=$t(e),s="border-box"===Z.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=x(e,t,o),(0>i||null==i)&&(i=e.style[t]),Mt.test(i))return i;r=s&&(J.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0}return i+T(e,t,n||(s?"border":"content"),r,o)+"px"}function E(e,t){for(var n,r,i,o=[],s=0,a=e.length;a>s;s++)r=e[s],r.style&&(o[s]=yt.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&St(r)&&(o[s]=yt.access(r,"olddisplay",w(r.nodeName)))):(i=St(r),"none"===n&&i||yt.set(r,"olddisplay",i?n:Z.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}function N(e,t,n,r,i){return new N.prototype.init(e,t,n,r,i)}function P(){return setTimeout(function(){Jt=void 0}),Jt=Z.now()}function j(e,t){var n,r=0,i={height:e};for(t=t?1:0;4>r;r+=2-t)n=kt[r],i["margin"+n]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function _(e,t,n){for(var r,i=(nn[t]||[]).concat(nn["*"]),o=0,s=i.length;s>o;o++)if(r=i[o].call(n,t,e))return r}function B(e,t,n){var r,i,o,s,a,c,u,l,f=this,p={},h=e.style,d=e.nodeType&&St(e),g=yt.get(e,"fxshow");n.queue||(a=Z._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,c=a.empty.fire,a.empty.fire=function(){a.unqueued||c()}),a.unqueued++,f.always(function(){f.always(function(){a.unqueued--,Z.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],u=Z.css(e,"display"),l="none"===u?yt.get(e,"olddisplay")||w(e.nodeName):u,"inline"===l&&"none"===Z.css(e,"float")&&(h.display="inline-block")),n.overflow&&(h.overflow="hidden",f.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Kt.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(d?"hide":"show")){if("show"!==i||!g||void 0===g[r])continue;d=!0}p[r]=g&&g[r]||Z.style(e,r)}else u=void 0;if(Z.isEmptyObject(p))"inline"===("none"===u?w(e.nodeName):u)&&(h.display=u);else{g?"hidden"in g&&(d=g.hidden):g=yt.access(e,"fxshow",{}),o&&(g.hidden=!d),d?Z(e).show():f.done(function(){Z(e).hide()}),f.done(function(){var t;yt.remove(e,"fxshow");for(t in p)Z.style(e,t,p[t])});for(r in p)s=_(d?g[r]:0,r,f),r in g||(g[r]=s.start,d&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function O(e,t){var n,r,i,o,s;for(n in e)if(r=Z.camelCase(n),i=t[r],o=e[n],Z.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=Z.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function q(e,t,n){var r,i,o=0,s=tn.length,a=Z.Deferred().always(function(){delete c.elem}),c=function(){if(i)return!1;for(var t=Jt||P(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,s=0,c=u.tweens.length;c>s;s++)u.tweens[s].run(o);return a.notifyWith(e,[u,o,n]),1>o&&c?n:(a.resolveWith(e,[u]),!1)},u=a.promise({elem:e,props:Z.extend({},t),opts:Z.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Jt||P(),duration:n.duration,tweens:[],createTween:function(t,n){var r=Z.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?a.resolveWith(e,[u,t]):a.rejectWith(e,[u,t]),this}}),l=u.props;for(O(l,u.opts.specialEasing);s>o;o++)if(r=tn[o].call(u,e,l,u.opts))return r;return Z.map(l,_,u),Z.isFunction(u.opts.start)&&u.opts.start.call(e,u),Z.fx.timer(Z.extend(c,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function R(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(ht)||[];if(Z.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function L(e,t,n,r){function i(a){var c;return o[a]=!0,Z.each(e[a]||[],function(e,a){var u=a(t,n,r);return"string"!=typeof u||s||o[u]?s?!(c=u):void 0:(t.dataTypes.unshift(u),i(u),!1)}),c}var o={},s=e===kn;return i(t.dataTypes[0])||!o["*"]&&i("*")}function H(e,t){var n,r,i=Z.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&Z.extend(!0,e,r),e}function D(e,t,n){for(var r,i,o,s,a=e.contents,c=e.dataTypes;"*"===c[0];)c.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){c.unshift(i);break}if(c[0]in n)o=c[0];else{for(i in n){if(!c[0]||e.converters[i+" "+c[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==c[0]&&c.unshift(o),n[o]):void 0}function I(e,t,n,r){var i,o,s,a,c,u={},l=e.dataTypes.slice();if(l[1])for(s in e.converters)u[s.toLowerCase()]=e.converters[s];for(o=l.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!c&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),c=o,o=l.shift())if("*"===o)o=c;else if("*"!==c&&c!==o){if(s=u[c+" "+o]||u["* "+o],!s)for(i in u)if(a=i.split(" "),a[1]===o&&(s=u[c+" "+a[0]]||u["* "+a[0]])){s===!0?s=u[i]:u[i]!==!0&&(o=a[0],l.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(f){return{state:"parsererror",error:s?f:"No conversion from "+c+" to "+o}}}return{state:"success",data:t}}function V(e,t,n,r){var i;if(Z.isArray(t))Z.each(t,function(t,i){n||An.test(e)?r(e,i):V(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==Z.type(t))r(e,t);else for(i in t)V(e+"["+i+"]",t[i],n,r)}function F(e){return Z.isWindow(e)?e:9===e.nodeType&&e.defaultView}var M=[],$=M.slice,W=M.concat,U=M.push,z=M.indexOf,X={},G=X.toString,Y=X.hasOwnProperty,J={},Q=e.document,K="2.1.1",Z=function(e,t){return new Z.fn.init(e,t)},et=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,tt=/^-ms-/,nt=/-([\da-z])/gi,rt=function(e,t){return t.toUpperCase()};Z.fn=Z.prototype={jquery:K,constructor:Z,selector:"",length:0,toArray:function(){return $.call(this)},get:function(e){return null!=e?0>e?this[e+this.length]:this[e]:$.call(this)},pushStack:function(e){var t=Z.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return Z.each(this,e,t)},map:function(e){return this.pushStack(Z.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack($.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:U,sort:M.sort,splice:M.splice},Z.extend=Z.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,c=arguments.length,u=!1;for("boolean"==typeof s&&(u=s,s=arguments[a]||{},a++),"object"==typeof s||Z.isFunction(s)||(s={}),a===c&&(s=this,a--);c>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(u&&r&&(Z.isPlainObject(r)||(i=Z.isArray(r)))?(i?(i=!1,o=n&&Z.isArray(n)?n:[]):o=n&&Z.isPlainObject(n)?n:{},s[t]=Z.extend(u,o,r)):void 0!==r&&(s[t]=r));return s},Z.extend({expando:"jQuery"+(K+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===Z.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!Z.isArray(e)&&e-parseFloat(e)>=0},isPlainObject:function(e){return"object"!==Z.type(e)||e.nodeType||Z.isWindow(e)?!1:e.constructor&&!Y.call(e.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?X[G.call(e)]||"object":typeof e},globalEval:function(e){var t,n=eval;e=Z.trim(e),e&&(1===e.indexOf("use strict")?(t=Q.createElement("script"),t.text=e,Q.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(tt,"ms-").replace(nt,rt)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,r){var i,o=0,s=e.length,a=n(e);if(r){if(a)for(;s>o&&(i=t.apply(e[o],r),i!==!1);o++);else for(o in e)if(i=t.apply(e[o],r),i===!1)break}else if(a)for(;s>o&&(i=t.call(e[o],o,e[o]),i!==!1);o++);else for(o in e)if(i=t.call(e[o],o,e[o]),i===!1)break;return e},trim:function(e){return null==e?"":(e+"").replace(et,"")},makeArray:function(e,t){var r=t||[];return null!=e&&(n(Object(e))?Z.merge(r,"string"==typeof e?[e]:e):U.call(r,e)),r},inArray:function(e,t,n){return null==t?-1:z.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;n>r;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,s=e.length,a=!n;s>o;o++)r=!t(e[o],o),r!==a&&i.push(e[o]);return i},map:function(e,t,r){var i,o=0,s=e.length,a=n(e),c=[];if(a)for(;s>o;o++)i=t(e[o],o,r),null!=i&&c.push(i);else for(o in e)i=t(e[o],o,r),null!=i&&c.push(i);return W.apply([],c)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),Z.isFunction(e)?(r=$.call(arguments,2),i=function(){return e.apply(t||this,r.concat($.call(arguments)))},i.guid=e.guid=e.guid||Z.guid++,i):void 0},now:Date.now,support:J}),Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){X["[object "+t+"]"]=t.toLowerCase()});var it=function(e){function t(e,t,n,r){var i,o,s,a,c,u,f,h,d,g;if((t?t.ownerDocument||t:V)!==B&&_(t),t=t||B,n=n||[],!e||"string"!=typeof e)return n;if(1!==(a=t.nodeType)&&9!==a)return[];if(q&&!r){if(i=vt.exec(e))if(s=i[1]){if(9===a){if(o=t.getElementById(s),!o||!o.parentNode)return n;if(o.id===s)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(s))&&D(t,o)&&o.id===s)return n.push(o),n}else{if(i[2])return Z.apply(n,t.getElementsByTagName(e)),n;if((s=i[3])&&x.getElementsByClassName&&t.getElementsByClassName)return Z.apply(n,t.getElementsByClassName(s)),n}if(x.qsa&&(!R||!R.test(e))){if(h=f=I,d=t,g=9===a&&e,1===a&&"object"!==t.nodeName.toLowerCase()){for(u=T(e),(f=t.getAttribute("id"))?h=f.replace(wt,"\\$&"):t.setAttribute("id",h),h="[id='"+h+"'] ",c=u.length;c--;)u[c]=h+p(u[c]);d=bt.test(e)&&l(t.parentNode)||t,g=u.join(",")}if(g)try{return Z.apply(n,d.querySelectorAll(g)),n}catch(m){}finally{f||t.removeAttribute("id")}}}return E(e.replace(ct,"$1"),t,n,r)}function n(){function e(n,r){return t.push(n+" ")>k.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[];return e}function r(e){return e[I]=!0,e}function i(e){var t=B.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),r=e.length;r--;)k.attrHandle[n[r]]=t}function s(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||G)-(~e.sourceIndex||G);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function a(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function c(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function u(e){return r(function(t){return t=+t,r(function(n,r){for(var i,o=e([],n.length,t),s=o.length;s--;)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}function l(e){return e&&typeof e.getElementsByTagName!==X&&e}function f(){}function p(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function h(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=M++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,s){var a,c,u=[F,o];if(s){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,s))return!0}else for(;t=t[r];)if(1===t.nodeType||i){if(c=t[I]||(t[I]={}),(a=c[r])&&a[0]===F&&a[1]===o)return u[2]=a[2];if(c[r]=u,u[2]=e(t,n,s))return!0}}}function d(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function g(e,n,r){for(var i=0,o=n.length;o>i;i++)t(e,n[i],r);return r}function m(e,t,n,r,i){for(var o,s=[],a=0,c=e.length,u=null!=t;c>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),u&&t.push(a));return s}function y(e,t,n,i,o,s){return i&&!i[I]&&(i=y(i)),o&&!o[I]&&(o=y(o,s)),r(function(r,s,a,c){var u,l,f,p=[],h=[],d=s.length,y=r||g(t||"*",a.nodeType?[a]:a,[]),v=!e||!r&&t?y:m(y,p,e,a,c),b=n?o||(r?e:d||i)?[]:s:v;if(n&&n(v,b,a,c),i)for(u=m(b,h),i(u,[],a,c),l=u.length;l--;)(f=u[l])&&(b[h[l]]=!(v[h[l]]=f));if(r){if(o||e){if(o){for(u=[],l=b.length;l--;)(f=b[l])&&u.push(v[l]=f);o(null,b=[],u,c)}for(l=b.length;l--;)(f=b[l])&&(u=o?tt.call(r,f):p[l])>-1&&(r[u]=!(s[u]=f))}}else b=m(b===s?b.splice(d,b.length):b),o?o(null,s,b,c):Z.apply(s,b)})}function v(e){for(var t,n,r,i=e.length,o=k.relative[e[0].type],s=o||k.relative[" "],a=o?1:0,c=h(function(e){return e===t},s,!0),u=h(function(e){return tt.call(t,e)>-1},s,!0),l=[function(e,n,r){return!o&&(r||n!==N)||((t=n).nodeType?c(e,n,r):u(e,n,r))}];i>a;a++)if(n=k.relative[e[a].type])l=[h(d(l),n)];else{if(n=k.filter[e[a].type].apply(null,e[a].matches),n[I]){for(r=++a;i>r&&!k.relative[e[r].type];r++);return y(a>1&&d(l),a>1&&p(e.slice(0,a-1).concat({value:" "===e[a-2].type?"*":""})).replace(ct,"$1"),n,r>a&&v(e.slice(a,r)),i>r&&v(e=e.slice(r)),i>r&&p(e))}l.push(n)}return d(l)}function b(e,n){var i=n.length>0,o=e.length>0,s=function(r,s,a,c,u){var l,f,p,h=0,d="0",g=r&&[],y=[],v=N,b=r||o&&k.find.TAG("*",u),w=F+=null==v?1:Math.random()||.1,x=b.length;for(u&&(N=s!==B&&s);d!==x&&null!=(l=b[d]);d++){if(o&&l){for(f=0;p=e[f++];)if(p(l,s,a)){c.push(l);break}u&&(F=w)}i&&((l=!p&&l)&&h--,r&&g.push(l))}if(h+=d,i&&d!==h){for(f=0;p=n[f++];)p(g,y,s,a);if(r){if(h>0)for(;d--;)g[d]||y[d]||(y[d]=Q.call(c));y=m(y)}Z.apply(c,y),u&&!r&&y.length>0&&h+n.length>1&&t.uniqueSort(c)}return u&&(F=w,N=v),g};return i?r(s):s}var w,x,k,S,C,T,A,E,N,P,j,_,B,O,q,R,L,H,D,I="sizzle"+-new Date,V=e.document,F=0,M=0,$=n(),W=n(),U=n(),z=function(e,t){return e===t&&(j=!0),0},X="undefined",G=1<<31,Y={}.hasOwnProperty,J=[],Q=J.pop,K=J.push,Z=J.push,et=J.slice,tt=J.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1},nt="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",rt="[\\x20\\t\\r\\n\\f]",it="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ot=it.replace("w","w#"),st="\\["+rt+"*("+it+")(?:"+rt+"*([*^$|!~]?=)"+rt+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ot+"))|)"+rt+"*\\]",at=":("+it+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+st+")*)|.*)\\)|)",ct=new RegExp("^"+rt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+rt+"+$","g"),ut=new RegExp("^"+rt+"*,"+rt+"*"),lt=new RegExp("^"+rt+"*([>+~]|"+rt+")"+rt+"*"),ft=new RegExp("="+rt+"*([^\\]'\"]*?)"+rt+"*\\]","g"),pt=new RegExp(at),ht=new RegExp("^"+ot+"$"),dt={ID:new RegExp("^#("+it+")"),CLASS:new RegExp("^\\.("+it+")"),TAG:new RegExp("^("+it.replace("w","w*")+")"),ATTR:new RegExp("^"+st),PSEUDO:new RegExp("^"+at),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+rt+"*(even|odd|(([+-]|)(\\d*)n|)"+rt+"*(?:([+-]|)"+rt+"*(\\d+)|))"+rt+"*\\)|)","i"),bool:new RegExp("^(?:"+nt+")$","i"),needsContext:new RegExp("^"+rt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+rt+"*((?:-\\d)?\\d*)"+rt+"*\\)|)(?=[^-]|$)","i")},gt=/^(?:input|select|textarea|button)$/i,mt=/^h\d$/i,yt=/^[^{]+\{\s*\[native \w/,vt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,bt=/[+~]/,wt=/'|\\/g,xt=new RegExp("\\\\([\\da-f]{1,6}"+rt+"?|("+rt+")|.)","ig"),kt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)};try{Z.apply(J=et.call(V.childNodes),V.childNodes),J[V.childNodes.length].nodeType}catch(St){Z={apply:J.length?function(e,t){K.apply(e,et.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}x=t.support={},C=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},_=t.setDocument=function(e){var t,n=e?e.ownerDocument||e:V,r=n.defaultView;return n!==B&&9===n.nodeType&&n.documentElement?(B=n,O=n.documentElement,q=!C(n),r&&r!==r.top&&(r.addEventListener?r.addEventListener("unload",function(){_()},!1):r.attachEvent&&r.attachEvent("onunload",function(){_()})),x.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),x.getElementsByTagName=i(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),x.getElementsByClassName=yt.test(n.getElementsByClassName)&&i(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),x.getById=i(function(e){return O.appendChild(e).id=I,!n.getElementsByName||!n.getElementsByName(I).length}),x.getById?(k.find.ID=function(e,t){if(typeof t.getElementById!==X&&q){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},k.filter.ID=function(e){var t=e.replace(xt,kt);return function(e){return e.getAttribute("id")===t}}):(delete k.find.ID,k.filter.ID=function(e){var t=e.replace(xt,kt);return function(e){var n=typeof e.getAttributeNode!==X&&e.getAttributeNode("id");return n&&n.value===t}}),k.find.TAG=x.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==X?t.getElementsByTagName(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},k.find.CLASS=x.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==X&&q?t.getElementsByClassName(e):void 0},L=[],R=[],(x.qsa=yt.test(n.querySelectorAll))&&(i(function(e){e.innerHTML="<select msallowclip=''><option selected=''></option></select>",e.querySelectorAll("[msallowclip^='']").length&&R.push("[*^$]="+rt+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||R.push("\\["+rt+"*(?:value|"+nt+")"),e.querySelectorAll(":checked").length||R.push(":checked")}),i(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&R.push("name"+rt+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||R.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),R.push(",.*:")})),(x.matchesSelector=yt.test(H=O.matches||O.webkitMatchesSelector||O.mozMatchesSelector||O.oMatchesSelector||O.msMatchesSelector))&&i(function(e){x.disconnectedMatch=H.call(e,"div"),H.call(e,"[s!='']:x"),L.push("!=",at)}),R=R.length&&new RegExp(R.join("|")),L=L.length&&new RegExp(L.join("|")),t=yt.test(O.compareDocumentPosition),D=t||yt.test(O.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},z=t?function(e,t){if(e===t)return j=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r?r:(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&r||!x.sortDetached&&t.compareDocumentPosition(e)===r?e===n||e.ownerDocument===V&&D(V,e)?-1:t===n||t.ownerDocument===V&&D(V,t)?1:P?tt.call(P,e)-tt.call(P,t):0:4&r?-1:1)}:function(e,t){if(e===t)return j=!0,0;var r,i=0,o=e.parentNode,a=t.parentNode,c=[e],u=[t];if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:P?tt.call(P,e)-tt.call(P,t):0;if(o===a)return s(e,t);for(r=e;r=r.parentNode;)c.unshift(r);for(r=t;r=r.parentNode;)u.unshift(r);for(;c[i]===u[i];)i++;return i?s(c[i],u[i]):c[i]===V?-1:u[i]===V?1:0},n):B},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==B&&_(e),n=n.replace(ft,"='$1']"),!(!x.matchesSelector||!q||L&&L.test(n)||R&&R.test(n)))try{var r=H.call(e,n);if(r||x.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return t(n,B,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==B&&_(e),D(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==B&&_(e);var n=k.attrHandle[t.toLowerCase()],r=n&&Y.call(k.attrHandle,t.toLowerCase())?n(e,t,!q):void 0;return void 0!==r?r:x.attributes||!q?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],r=0,i=0;if(j=!x.detectDuplicates,P=!x.sortStable&&e.slice(0),e.sort(z),j){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return P=null,e},S=t.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=S(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=S(t);return n},k=t.selectors={cacheLength:50,createPseudo:r,match:dt,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(xt,kt),e[3]=(e[3]||e[4]||e[5]||"").replace(xt,kt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return dt.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&pt.test(n)&&(t=T(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(xt,kt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=$[e+" "];return t||(t=new RegExp("(^|"+rt+")"+e+"("+rt+"|$)"))&&$(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==X&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e);return null==o?"!="===n:n?(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o+" ").indexOf(r)>-1:"|="===n?o===r||o.slice(0,r.length+1)===r+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,c){var u,l,f,p,h,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),v=!c&&!a;if(m){if(o){for(;g;){for(f=t;f=f[g];)if(a?f.nodeName.toLowerCase()===y:1===f.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&v){for(l=m[I]||(m[I]={}),u=l[e]||[],h=u[0]===F&&u[1],p=u[0]===F&&u[2],f=h&&m.childNodes[h];f=++h&&f&&f[g]||(p=h=0)||d.pop();)if(1===f.nodeType&&++p&&f===t){l[e]=[F,h,p];break}}else if(v&&(u=(t[I]||(t[I]={}))[e])&&u[0]===F)p=u[1];else for(;(f=++h&&f&&f[g]||(p=h=0)||d.pop())&&((a?f.nodeName.toLowerCase()!==y:1!==f.nodeType)||!++p||(v&&((f[I]||(f[I]={}))[e]=[F,p]),f!==t)););return p-=i,p===r||p%r===0&&p/r>=0}}},PSEUDO:function(e,n){var i,o=k.pseudos[e]||k.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return o[I]?o(n):o.length>1?(i=[e,e,"",n],k.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),s=i.length;s--;)r=tt.call(e,i[s]),e[r]=!(t[r]=i[s])}):function(e){return o(e,0,i)}):o}},pseudos:{not:r(function(e){var t=[],n=[],i=A(e.replace(ct,"$1"));return i[I]?r(function(e,t,n,r){for(var o,s=i(e,null,r,[]),a=e.length;a--;)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return function(t){return(t.textContent||t.innerText||S(t)).indexOf(e)>-1}}),lang:r(function(e){return ht.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(xt,kt).toLowerCase(),function(t){var n;do if(n=q?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===O},focus:function(e){return e===B.activeElement&&(!B.hasFocus||B.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!k.pseudos.empty(e)},header:function(e){return mt.test(e.nodeName)},input:function(e){return gt.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:u(function(){return[0]}),last:u(function(e,t){return[t-1]}),eq:u(function(e,t,n){return[0>n?n+t:n]}),even:u(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:u(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:u(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:u(function(e,t,n){for(var r=0>n?n+t:n;++r<t;)e.push(r);return e})}},k.pseudos.nth=k.pseudos.eq;for(w in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})k.pseudos[w]=a(w);for(w in{submit:!0,reset:!0})k.pseudos[w]=c(w);return f.prototype=k.filters=k.pseudos,k.setFilters=new f,T=t.tokenize=function(e,n){var r,i,o,s,a,c,u,l=W[e+" "];if(l)return n?0:l.slice(0);for(a=e,c=[],u=k.preFilter;a;){(!r||(i=ut.exec(a)))&&(i&&(a=a.slice(i[0].length)||a),c.push(o=[])),r=!1,(i=lt.exec(a))&&(r=i.shift(),o.push({value:r,type:i[0].replace(ct," ")}),a=a.slice(r.length));for(s in k.filter)!(i=dt[s].exec(a))||u[s]&&!(i=u[s](i))||(r=i.shift(),o.push({value:r,type:s,matches:i}),a=a.slice(r.length));if(!r)break}return n?a.length:a?t.error(e):W(e,c).slice(0)},A=t.compile=function(e,t){var n,r=[],i=[],o=U[e+" "];if(!o){for(t||(t=T(e)),n=t.length;n--;)o=v(t[n]),o[I]?r.push(o):i.push(o);o=U(e,b(i,r)),o.selector=e}return o},E=t.select=function(e,t,n,r){var i,o,s,a,c,u="function"==typeof e&&e,f=!r&&T(e=u.selector||e);if(n=n||[],1===f.length){if(o=f[0]=f[0].slice(0),o.length>2&&"ID"===(s=o[0]).type&&x.getById&&9===t.nodeType&&q&&k.relative[o[1].type]){if(t=(k.find.ID(s.matches[0].replace(xt,kt),t)||[])[0],!t)return n;u&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=dt.needsContext.test(e)?0:o.length;i--&&(s=o[i],!k.relative[a=s.type]);)if((c=k.find[a])&&(r=c(s.matches[0].replace(xt,kt),bt.test(o[0].type)&&l(t.parentNode)||t))){if(o.splice(i,1),e=r.length&&p(o),!e)return Z.apply(n,r),n;break}}return(u||A(e,f))(r,t,!q,n,bt.test(e)&&l(t.parentNode)||t),n},x.sortStable=I.split("").sort(z).join("")===I,x.detectDuplicates=!!j,_(),x.sortDetached=i(function(e){return 1&e.compareDocumentPosition(B.createElement("div"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),x.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(nt,function(e,t,n){var r;return n?void 0:e[t]===!0?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),t}(e);Z.find=it,Z.expr=it.selectors,Z.expr[":"]=Z.expr.pseudos,Z.unique=it.uniqueSort,Z.text=it.getText,Z.isXMLDoc=it.isXML,Z.contains=it.contains;var ot=Z.expr.match.needsContext,st=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,at=/^.[^:#\[\.,]*$/;Z.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?Z.find.matchesSelector(r,e)?[r]:[]:Z.find.matches(e,Z.grep(t,function(e){return 1===e.nodeType}))},Z.fn.extend({find:function(e){var t,n=this.length,r=[],i=this;if("string"!=typeof e)return this.pushStack(Z(e).filter(function(){for(t=0;n>t;t++)if(Z.contains(i[t],this))return!0
}));for(t=0;n>t;t++)Z.find(e,i[t],r);return r=this.pushStack(n>1?Z.unique(r):r),r.selector=this.selector?this.selector+" "+e:e,r},filter:function(e){return this.pushStack(r(this,e||[],!1))},not:function(e){return this.pushStack(r(this,e||[],!0))},is:function(e){return!!r(this,"string"==typeof e&&ot.test(e)?Z(e):e||[],!1).length}});var ct,ut=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,lt=Z.fn.init=function(e,t){var n,r;if(!e)return this;if("string"==typeof e){if(n="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:ut.exec(e),!n||!n[1]&&t)return!t||t.jquery?(t||ct).find(e):this.constructor(t).find(e);if(n[1]){if(t=t instanceof Z?t[0]:t,Z.merge(this,Z.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:Q,!0)),st.test(n[1])&&Z.isPlainObject(t))for(n in t)Z.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n]);return this}return r=Q.getElementById(n[2]),r&&r.parentNode&&(this.length=1,this[0]=r),this.context=Q,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):Z.isFunction(e)?"undefined"!=typeof ct.ready?ct.ready(e):e(Z):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),Z.makeArray(e,this))};lt.prototype=Z.fn,ct=Z(Q);var ft=/^(?:parents|prev(?:Until|All))/,pt={children:!0,contents:!0,next:!0,prev:!0};Z.extend({dir:function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&Z(e).is(n))break;r.push(e)}return r},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}}),Z.fn.extend({has:function(e){var t=Z(e,this),n=t.length;return this.filter(function(){for(var e=0;n>e;e++)if(Z.contains(this,t[e]))return!0})},closest:function(e,t){for(var n,r=0,i=this.length,o=[],s=ot.test(e)||"string"!=typeof e?Z(e,t||this.context):0;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&Z.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?Z.unique(o):o)},index:function(e){return e?"string"==typeof e?z.call(Z(e),this[0]):z.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(Z.unique(Z.merge(this.get(),Z(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),Z.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return Z.dir(e,"parentNode")},parentsUntil:function(e,t,n){return Z.dir(e,"parentNode",n)},next:function(e){return i(e,"nextSibling")},prev:function(e){return i(e,"previousSibling")},nextAll:function(e){return Z.dir(e,"nextSibling")},prevAll:function(e){return Z.dir(e,"previousSibling")},nextUntil:function(e,t,n){return Z.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return Z.dir(e,"previousSibling",n)},siblings:function(e){return Z.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return Z.sibling(e.firstChild)},contents:function(e){return e.contentDocument||Z.merge([],e.childNodes)}},function(e,t){Z.fn[e]=function(n,r){var i=Z.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=Z.filter(r,i)),this.length>1&&(pt[e]||Z.unique(i),ft.test(e)&&i.reverse()),this.pushStack(i)}});var ht=/\S+/g,dt={};Z.Callbacks=function(e){e="string"==typeof e?dt[e]||o(e):Z.extend({},e);var t,n,r,i,s,a,c=[],u=!e.once&&[],l=function(o){for(t=e.memory&&o,n=!0,a=i||0,i=0,s=c.length,r=!0;c&&s>a;a++)if(c[a].apply(o[0],o[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,c&&(u?u.length&&l(u.shift()):t?c=[]:f.disable())},f={add:function(){if(c){var n=c.length;!function o(t){Z.each(t,function(t,n){var r=Z.type(n);"function"===r?e.unique&&f.has(n)||c.push(n):n&&n.length&&"string"!==r&&o(n)})}(arguments),r?s=c.length:t&&(i=n,l(t))}return this},remove:function(){return c&&Z.each(arguments,function(e,t){for(var n;(n=Z.inArray(t,c,n))>-1;)c.splice(n,1),r&&(s>=n&&s--,a>=n&&a--)}),this},has:function(e){return e?Z.inArray(e,c)>-1:!(!c||!c.length)},empty:function(){return c=[],s=0,this},disable:function(){return c=u=t=void 0,this},disabled:function(){return!c},lock:function(){return u=void 0,t||f.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!c||n&&!u||(t=t||[],t=[e,t.slice?t.slice():t],r?u.push(t):l(t)),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!n}};return f},Z.extend({Deferred:function(e){var t=[["resolve","done",Z.Callbacks("once memory"),"resolved"],["reject","fail",Z.Callbacks("once memory"),"rejected"],["notify","progress",Z.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return Z.Deferred(function(n){Z.each(t,function(t,o){var s=Z.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&Z.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[o[0]+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?Z.extend(e,r):r}},i={};return r.pipe=r.then,Z.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=$.call(arguments),s=o.length,a=1!==s||e&&Z.isFunction(e.promise)?s:0,c=1===a?e:Z.Deferred(),u=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?$.call(arguments):i,r===t?c.notifyWith(n,r):--a||c.resolveWith(n,r)}};if(s>1)for(t=new Array(s),n=new Array(s),r=new Array(s);s>i;i++)o[i]&&Z.isFunction(o[i].promise)?o[i].promise().done(u(i,r,o)).fail(c.reject).progress(u(i,n,t)):--a;return a||c.resolveWith(r,o),c.promise()}});var gt;Z.fn.ready=function(e){return Z.ready.promise().done(e),this},Z.extend({isReady:!1,readyWait:1,holdReady:function(e){e?Z.readyWait++:Z.ready(!0)},ready:function(e){(e===!0?--Z.readyWait:Z.isReady)||(Z.isReady=!0,e!==!0&&--Z.readyWait>0||(gt.resolveWith(Q,[Z]),Z.fn.triggerHandler&&(Z(Q).triggerHandler("ready"),Z(Q).off("ready"))))}}),Z.ready.promise=function(t){return gt||(gt=Z.Deferred(),"complete"===Q.readyState?setTimeout(Z.ready):(Q.addEventListener("DOMContentLoaded",s,!1),e.addEventListener("load",s,!1))),gt.promise(t)},Z.ready.promise();var mt=Z.access=function(e,t,n,r,i,o,s){var a=0,c=e.length,u=null==n;if("object"===Z.type(n)){i=!0;for(a in n)Z.access(e,t,a,n[a],!0,o,s)}else if(void 0!==r&&(i=!0,Z.isFunction(r)||(s=!0),u&&(s?(t.call(e,r),t=null):(u=t,t=function(e,t,n){return u.call(Z(e),n)})),t))for(;c>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:u?t.call(e):c?t(e[0],n):o};Z.acceptData=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType},a.uid=1,a.accepts=Z.acceptData,a.prototype={key:function(e){if(!a.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=a.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,Z.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(Z.isEmptyObject(o))Z.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return void 0===t?n:n[t]},access:function(e,t,n){var r;return void 0===t||t&&"string"==typeof t&&void 0===n?(r=this.get(e,t),void 0!==r?r:this.get(e,Z.camelCase(t))):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(void 0===t)this.cache[o]={};else{Z.isArray(t)?r=t.concat(t.map(Z.camelCase)):(i=Z.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(ht)||[])),n=r.length;for(;n--;)delete s[r[n]]}},hasData:function(e){return!Z.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}};var yt=new a,vt=new a,bt=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,wt=/([A-Z])/g;Z.extend({hasData:function(e){return vt.hasData(e)||yt.hasData(e)},data:function(e,t,n){return vt.access(e,t,n)},removeData:function(e,t){vt.remove(e,t)},_data:function(e,t,n){return yt.access(e,t,n)},_removeData:function(e,t){yt.remove(e,t)}}),Z.fn.extend({data:function(e,t){var n,r,i,o=this[0],s=o&&o.attributes;if(void 0===e){if(this.length&&(i=vt.get(o),1===o.nodeType&&!yt.get(o,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&(r=s[n].name,0===r.indexOf("data-")&&(r=Z.camelCase(r.slice(5)),c(o,r,i[r])));yt.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){vt.set(this,e)}):mt(this,function(t){var n,r=Z.camelCase(e);if(o&&void 0===t){if(n=vt.get(o,e),void 0!==n)return n;if(n=vt.get(o,r),void 0!==n)return n;if(n=c(o,r,void 0),void 0!==n)return n}else this.each(function(){var n=vt.get(this,r);vt.set(this,r,t),-1!==e.indexOf("-")&&void 0!==n&&vt.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){vt.remove(this,e)})}}),Z.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=yt.get(e,t),n&&(!r||Z.isArray(n)?r=yt.access(e,t,Z.makeArray(n)):r.push(n)),r||[]):void 0},dequeue:function(e,t){t=t||"fx";var n=Z.queue(e,t),r=n.length,i=n.shift(),o=Z._queueHooks(e,t),s=function(){Z.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return yt.get(e,n)||yt.access(e,n,{empty:Z.Callbacks("once memory").add(function(){yt.remove(e,[t+"queue",n])})})}}),Z.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?Z.queue(this[0],e):void 0===t?this:this.each(function(){var n=Z.queue(this,e,t);Z._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&Z.dequeue(this,e)})},dequeue:function(e){return this.each(function(){Z.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=Z.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)n=yt.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var xt=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,kt=["Top","Right","Bottom","Left"],St=function(e,t){return e=t||e,"none"===Z.css(e,"display")||!Z.contains(e.ownerDocument,e)},Ct=/^(?:checkbox|radio)$/i;!function(){var e=Q.createDocumentFragment(),t=e.appendChild(Q.createElement("div")),n=Q.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),J.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",J.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}();var Tt="undefined";J.focusinBubbles="onfocusin"in e;var At=/^key/,Et=/^(?:mouse|pointer|contextmenu)|click/,Nt=/^(?:focusinfocus|focusoutblur)$/,Pt=/^([^.]*)(?:\.(.+)|)$/;Z.event={global:{},add:function(e,t,n,r,i){var o,s,a,c,u,l,f,p,h,d,g,m=yt.get(e);if(m)for(n.handler&&(o=n,n=o.handler,i=o.selector),n.guid||(n.guid=Z.guid++),(c=m.events)||(c=m.events={}),(s=m.handle)||(s=m.handle=function(t){return typeof Z!==Tt&&Z.event.triggered!==t.type?Z.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(ht)||[""],u=t.length;u--;)a=Pt.exec(t[u])||[],h=g=a[1],d=(a[2]||"").split(".").sort(),h&&(f=Z.event.special[h]||{},h=(i?f.delegateType:f.bindType)||h,f=Z.event.special[h]||{},l=Z.extend({type:h,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&Z.expr.match.needsContext.test(i),namespace:d.join(".")},o),(p=c[h])||(p=c[h]=[],p.delegateCount=0,f.setup&&f.setup.call(e,r,d,s)!==!1||e.addEventListener&&e.addEventListener(h,s,!1)),f.add&&(f.add.call(e,l),l.handler.guid||(l.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,l):p.push(l),Z.event.global[h]=!0)},remove:function(e,t,n,r,i){var o,s,a,c,u,l,f,p,h,d,g,m=yt.hasData(e)&&yt.get(e);if(m&&(c=m.events)){for(t=(t||"").match(ht)||[""],u=t.length;u--;)if(a=Pt.exec(t[u])||[],h=g=a[1],d=(a[2]||"").split(".").sort(),h){for(f=Z.event.special[h]||{},h=(r?f.delegateType:f.bindType)||h,p=c[h]||[],a=a[2]&&new RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=p.length;o--;)l=p[o],!i&&g!==l.origType||n&&n.guid!==l.guid||a&&!a.test(l.namespace)||r&&r!==l.selector&&("**"!==r||!l.selector)||(p.splice(o,1),l.selector&&p.delegateCount--,f.remove&&f.remove.call(e,l));s&&!p.length&&(f.teardown&&f.teardown.call(e,d,m.handle)!==!1||Z.removeEvent(e,h,m.handle),delete c[h])}else for(h in c)Z.event.remove(e,h+t[u],n,r,!0);Z.isEmptyObject(c)&&(delete m.handle,yt.remove(e,"events"))}},trigger:function(t,n,r,i){var o,s,a,c,u,l,f,p=[r||Q],h=Y.call(t,"type")?t.type:t,d=Y.call(t,"namespace")?t.namespace.split("."):[];if(s=a=r=r||Q,3!==r.nodeType&&8!==r.nodeType&&!Nt.test(h+Z.event.triggered)&&(h.indexOf(".")>=0&&(d=h.split("."),h=d.shift(),d.sort()),u=h.indexOf(":")<0&&"on"+h,t=t[Z.expando]?t:new Z.Event(h,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=d.join("."),t.namespace_re=t.namespace?new RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:Z.makeArray(n,[t]),f=Z.event.special[h]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!Z.isWindow(r)){for(c=f.delegateType||h,Nt.test(c+h)||(s=s.parentNode);s;s=s.parentNode)p.push(s),a=s;a===(r.ownerDocument||Q)&&p.push(a.defaultView||a.parentWindow||e)}for(o=0;(s=p[o++])&&!t.isPropagationStopped();)t.type=o>1?c:f.bindType||h,l=(yt.get(s,"events")||{})[t.type]&&yt.get(s,"handle"),l&&l.apply(s,n),l=u&&s[u],l&&l.apply&&Z.acceptData(s)&&(t.result=l.apply(s,n),t.result===!1&&t.preventDefault());return t.type=h,i||t.isDefaultPrevented()||f._default&&f._default.apply(p.pop(),n)!==!1||!Z.acceptData(r)||u&&Z.isFunction(r[h])&&!Z.isWindow(r)&&(a=r[u],a&&(r[u]=null),Z.event.triggered=h,r[h](),Z.event.triggered=void 0,a&&(r[u]=a)),t.result}},dispatch:function(e){e=Z.event.fix(e);var t,n,r,i,o,s=[],a=$.call(arguments),c=(yt.get(this,"events")||{})[e.type]||[],u=Z.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!u.preDispatch||u.preDispatch.call(this,e)!==!1){for(s=Z.event.handlers.call(this,e,c),t=0;(i=s[t++])&&!e.isPropagationStopped();)for(e.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((Z.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),void 0!==r&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()));return u.postDispatch&&u.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,c=e.target;if(a&&c.nodeType&&(!e.button||"click"!==e.type))for(;c!==this;c=c.parentNode||this)if(c.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",void 0===r[i]&&(r[i]=o.needsContext?Z(i,this).index(c)>=0:Z.find(i,this,null,[c]).length),r[i]&&r.push(o);r.length&&s.push({elem:c,handlers:r})}return a<t.length&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,o=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||Q,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},fix:function(e){if(e[Z.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];for(s||(this.fixHooks[i]=s=Et.test(i)?this.mouseHooks:At.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new Z.Event(o),t=r.length;t--;)n=r[t],e[n]=o[n];return e.target||(e.target=Q),3===e.target.nodeType&&(e.target=e.target.parentNode),s.filter?s.filter(e,o):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==f()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===f()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&Z.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(e){return Z.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=Z.extend(new Z.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?Z.event.trigger(i,null,t):Z.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},Z.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},Z.Event=function(e,t){return this instanceof Z.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?u:l):this.type=e,t&&Z.extend(this,t),this.timeStamp=e&&e.timeStamp||Z.now(),void(this[Z.expando]=!0)):new Z.Event(e,t)},Z.Event.prototype={isDefaultPrevented:l,isPropagationStopped:l,isImmediatePropagationStopped:l,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=u,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=u,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=u,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},Z.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){Z.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!Z.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),J.focusinBubbles||Z.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){Z.event.simulate(t,e.target,Z.event.fix(e),!0)};Z.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=yt.access(r,t);i||r.addEventListener(e,n,!0),yt.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=yt.access(r,t)-1;i?yt.access(r,t,i):(r.removeEventListener(e,n,!0),yt.remove(r,t))}}}),Z.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=void 0);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=void 0):null==r&&("string"==typeof t?(r=n,n=void 0):(r=n,n=t,t=void 0)),r===!1)r=l;else if(!r)return this;return 1===i&&(o=r,r=function(e){return Z().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=Z.guid++)),this.each(function(){Z.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,Z(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=void 0),n===!1&&(n=l),this.each(function(){Z.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){Z.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?Z.event.trigger(e,t,n,!0):void 0}});var jt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,_t=/<([\w:]+)/,Bt=/<|&#?\w+;/,Ot=/<(?:script|style|link)/i,qt=/checked\s*(?:[^=]|=\s*.checked.)/i,Rt=/^$|\/(?:java|ecma)script/i,Lt=/^true\/(.*)/,Ht=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Dt={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Dt.optgroup=Dt.option,Dt.tbody=Dt.tfoot=Dt.colgroup=Dt.caption=Dt.thead,Dt.th=Dt.td,Z.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),c=Z.contains(e.ownerDocument,e);if(!(J.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||Z.isXMLDoc(e)))for(s=y(a),o=y(e),r=0,i=o.length;i>r;r++)v(o[r],s[r]);if(t)if(n)for(o=o||y(e),s=s||y(a),r=0,i=o.length;i>r;r++)m(o[r],s[r]);else m(e,a);return s=y(a,"script"),s.length>0&&g(s,!c&&y(e,"script")),a},buildFragment:function(e,t,n,r){for(var i,o,s,a,c,u,l=t.createDocumentFragment(),f=[],p=0,h=e.length;h>p;p++)if(i=e[p],i||0===i)if("object"===Z.type(i))Z.merge(f,i.nodeType?[i]:i);else if(Bt.test(i)){for(o=o||l.appendChild(t.createElement("div")),s=(_t.exec(i)||["",""])[1].toLowerCase(),a=Dt[s]||Dt._default,o.innerHTML=a[1]+i.replace(jt,"<$1></$2>")+a[2],u=a[0];u--;)o=o.lastChild;Z.merge(f,o.childNodes),o=l.firstChild,o.textContent=""}else f.push(t.createTextNode(i));for(l.textContent="",p=0;i=f[p++];)if((!r||-1===Z.inArray(i,r))&&(c=Z.contains(i.ownerDocument,i),o=y(l.appendChild(i),"script"),c&&g(o),n))for(u=0;i=o[u++];)Rt.test(i.type||"")&&n.push(i);return l},cleanData:function(e){for(var t,n,r,i,o=Z.event.special,s=0;void 0!==(n=e[s]);s++){if(Z.acceptData(n)&&(i=n[yt.expando],i&&(t=yt.cache[i]))){if(t.events)for(r in t.events)o[r]?Z.event.remove(n,r):Z.removeEvent(n,r,t.handle);yt.cache[i]&&delete yt.cache[i]}delete vt.cache[n[vt.expando]]}}}),Z.fn.extend({text:function(e){return mt(this,function(e){return void 0===e?Z.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=p(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=p(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,r=e?Z.filter(e,this):this,i=0;null!=(n=r[i]);i++)t||1!==n.nodeType||Z.cleanData(y(n)),n.parentNode&&(t&&Z.contains(n.ownerDocument,n)&&g(y(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(Z.cleanData(y(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return Z.clone(this,e,t)})},html:function(e){return mt(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ot.test(e)&&!Dt[(_t.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(jt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(Z.cleanData(y(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=arguments[0];return this.domManip(arguments,function(t){e=this.parentNode,Z.cleanData(y(this)),e&&e.replaceChild(t,this)}),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=W.apply([],e);var n,r,i,o,s,a,c=0,u=this.length,l=this,f=u-1,p=e[0],g=Z.isFunction(p);if(g||u>1&&"string"==typeof p&&!J.checkClone&&qt.test(p))return this.each(function(n){var r=l.eq(n);g&&(e[0]=p.call(this,n,r.html())),r.domManip(e,t)});if(u&&(n=Z.buildFragment(e,this[0].ownerDocument,!1,this),r=n.firstChild,1===n.childNodes.length&&(n=r),r)){for(i=Z.map(y(n,"script"),h),o=i.length;u>c;c++)s=n,c!==f&&(s=Z.clone(s,!0,!0),o&&Z.merge(i,y(s,"script"))),t.call(this[c],s,c);if(o)for(a=i[i.length-1].ownerDocument,Z.map(i,d),c=0;o>c;c++)s=i[c],Rt.test(s.type||"")&&!yt.access(s,"globalEval")&&Z.contains(a,s)&&(s.src?Z._evalUrl&&Z._evalUrl(s.src):Z.globalEval(s.textContent.replace(Ht,"")))}return this}}),Z.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){Z.fn[e]=function(e){for(var n,r=[],i=Z(e),o=i.length-1,s=0;o>=s;s++)n=s===o?this:this.clone(!0),Z(i[s])[t](n),U.apply(r,n.get());return this.pushStack(r)}});var It,Vt={},Ft=/^margin/,Mt=new RegExp("^("+xt+")(?!px)[a-z%]+$","i"),$t=function(e){return e.ownerDocument.defaultView.getComputedStyle(e,null)};!function(){function t(){s.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",s.innerHTML="",i.appendChild(o);var t=e.getComputedStyle(s,null);n="1%"!==t.top,r="4px"===t.width,i.removeChild(o)}var n,r,i=Q.documentElement,o=Q.createElement("div"),s=Q.createElement("div");s.style&&(s.style.backgroundClip="content-box",s.cloneNode(!0).style.backgroundClip="",J.clearCloneStyle="content-box"===s.style.backgroundClip,o.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",o.appendChild(s),e.getComputedStyle&&Z.extend(J,{pixelPosition:function(){return t(),n},boxSizingReliable:function(){return null==r&&t(),r},reliableMarginRight:function(){var t,n=s.appendChild(Q.createElement("div"));return n.style.cssText=s.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",n.style.marginRight=n.style.width="0",s.style.width="1px",i.appendChild(o),t=!parseFloat(e.getComputedStyle(n,null).marginRight),i.removeChild(o),t}}))}(),Z.swap=function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i};var Wt=/^(none|table(?!-c[ea]).+)/,Ut=new RegExp("^("+xt+")(.*)$","i"),zt=new RegExp("^([+-])=("+xt+")","i"),Xt={position:"absolute",visibility:"hidden",display:"block"},Gt={letterSpacing:"0",fontWeight:"400"},Yt=["Webkit","O","Moz","ms"];Z.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=x(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=Z.camelCase(t),c=e.style;return t=Z.cssProps[a]||(Z.cssProps[a]=S(c,a)),s=Z.cssHooks[t]||Z.cssHooks[a],void 0===n?s&&"get"in s&&void 0!==(i=s.get(e,!1,r))?i:c[t]:(o=typeof n,"string"===o&&(i=zt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(Z.css(e,t)),o="number"),void(null!=n&&n===n&&("number"!==o||Z.cssNumber[a]||(n+="px"),J.clearCloneStyle||""!==n||0!==t.indexOf("background")||(c[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,r))||(c[t]=n))))}},css:function(e,t,n,r){var i,o,s,a=Z.camelCase(t);return t=Z.cssProps[a]||(Z.cssProps[a]=S(e.style,a)),s=Z.cssHooks[t]||Z.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),void 0===i&&(i=x(e,t,r)),"normal"===i&&t in Gt&&(i=Gt[t]),""===n||n?(o=parseFloat(i),n===!0||Z.isNumeric(o)?o||0:i):i}}),Z.each(["height","width"],function(e,t){Z.cssHooks[t]={get:function(e,n,r){return n?Wt.test(Z.css(e,"display"))&&0===e.offsetWidth?Z.swap(e,Xt,function(){return A(e,t,r)}):A(e,t,r):void 0},set:function(e,n,r){var i=r&&$t(e);return C(e,n,r?T(e,t,r,"border-box"===Z.css(e,"boxSizing",!1,i),i):0)}}}),Z.cssHooks.marginRight=k(J.reliableMarginRight,function(e,t){return t?Z.swap(e,{display:"inline-block"},x,[e,"marginRight"]):void 0}),Z.each({margin:"",padding:"",border:"Width"},function(e,t){Z.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];4>r;r++)i[e+kt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ft.test(e)||(Z.cssHooks[e+t].set=C)}),Z.fn.extend({css:function(e,t){return mt(this,function(e,t,n){var r,i,o={},s=0;if(Z.isArray(t)){for(r=$t(e),i=t.length;i>s;s++)o[t[s]]=Z.css(e,t[s],!1,r);return o}return void 0!==n?Z.style(e,t,n):Z.css(e,t)},e,t,arguments.length>1)},show:function(){return E(this,!0)},hide:function(){return E(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){St(this)?Z(this).show():Z(this).hide()})}}),Z.Tween=N,N.prototype={constructor:N,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(Z.cssNumber[n]?"":"px")},cur:function(){var e=N.propHooks[this.prop];return e&&e.get?e.get(this):N.propHooks._default.get(this)},run:function(e){var t,n=N.propHooks[this.prop];return this.pos=t=this.options.duration?Z.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):N.propHooks._default.set(this),this}},N.prototype.init.prototype=N.prototype,N.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=Z.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){Z.fx.step[e.prop]?Z.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[Z.cssProps[e.prop]]||Z.cssHooks[e.prop])?Z.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},N.propHooks.scrollTop=N.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},Z.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},Z.fx=N.prototype.init,Z.fx.step={};var Jt,Qt,Kt=/^(?:toggle|show|hide)$/,Zt=new RegExp("^(?:([+-])=|)("+xt+")([a-z%]*)$","i"),en=/queueHooks$/,tn=[B],nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Zt.exec(t),o=i&&i[3]||(Z.cssNumber[e]?"":"px"),s=(Z.cssNumber[e]||"px"!==o&&+r)&&Zt.exec(Z.css(n.elem,e)),a=1,c=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,Z.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--c)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};Z.Animation=Z.extend(q,{tweener:function(e,t){Z.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,r=0,i=e.length;i>r;r++)n=e[r],nn[n]=nn[n]||[],nn[n].unshift(t)},prefilter:function(e,t){t?tn.unshift(e):tn.push(e)}}),Z.speed=function(e,t,n){var r=e&&"object"==typeof e?Z.extend({},e):{complete:n||!n&&t||Z.isFunction(e)&&e,duration:e,easing:n&&t||t&&!Z.isFunction(t)&&t};return r.duration=Z.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in Z.fx.speeds?Z.fx.speeds[r.duration]:Z.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){Z.isFunction(r.old)&&r.old.call(this),r.queue&&Z.dequeue(this,r.queue)},r},Z.fn.extend({fadeTo:function(e,t,n,r){return this.filter(St).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=Z.isEmptyObject(e),o=Z.speed(t,n,r),s=function(){var t=q(this,Z.extend({},e),o);(i||yt.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=Z.timers,s=yt.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&en.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&Z.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=yt.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=Z.timers,s=r?r.length:0;for(n.finish=!0,Z.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),Z.each(["toggle","show","hide"],function(e,t){var n=Z.fn[t];
Z.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(j(t,!0),e,r,i)}}),Z.each({slideDown:j("show"),slideUp:j("hide"),slideToggle:j("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){Z.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),Z.timers=[],Z.fx.tick=function(){var e,t=0,n=Z.timers;for(Jt=Z.now();t<n.length;t++)e=n[t],e()||n[t]!==e||n.splice(t--,1);n.length||Z.fx.stop(),Jt=void 0},Z.fx.timer=function(e){Z.timers.push(e),e()?Z.fx.start():Z.timers.pop()},Z.fx.interval=13,Z.fx.start=function(){Qt||(Qt=setInterval(Z.fx.tick,Z.fx.interval))},Z.fx.stop=function(){clearInterval(Qt),Qt=null},Z.fx.speeds={slow:600,fast:200,_default:400},Z.fn.delay=function(e,t){return e=Z.fx?Z.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},function(){var e=Q.createElement("input"),t=Q.createElement("select"),n=t.appendChild(Q.createElement("option"));e.type="checkbox",J.checkOn=""!==e.value,J.optSelected=n.selected,t.disabled=!0,J.optDisabled=!n.disabled,e=Q.createElement("input"),e.value="t",e.type="radio",J.radioValue="t"===e.value}();var rn,on,sn=Z.expr.attrHandle;Z.fn.extend({attr:function(e,t){return mt(this,Z.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){Z.removeAttr(this,e)})}}),Z.extend({attr:function(e,t,n){var r,i,o=e.nodeType;return e&&3!==o&&8!==o&&2!==o?typeof e.getAttribute===Tt?Z.prop(e,t,n):(1===o&&Z.isXMLDoc(e)||(t=t.toLowerCase(),r=Z.attrHooks[t]||(Z.expr.match.bool.test(t)?on:rn)),void 0===n?r&&"get"in r&&null!==(i=r.get(e,t))?i:(i=Z.find.attr(e,t),null==i?void 0:i):null!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n):void Z.removeAttr(e,t)):void 0},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(ht);if(o&&1===e.nodeType)for(;n=o[i++];)r=Z.propFix[n]||n,Z.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!J.radioValue&&"radio"===t&&Z.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}}}),on={set:function(e,t,n){return t===!1?Z.removeAttr(e,n):e.setAttribute(n,n),n}},Z.each(Z.expr.match.bool.source.match(/\w+/g),function(e,t){var n=sn[t]||Z.find.attr;sn[t]=function(e,t,r){var i,o;return r||(o=sn[t],sn[t]=i,i=null!=n(e,t,r)?t.toLowerCase():null,sn[t]=o),i}});var an=/^(?:input|select|textarea|button)$/i;Z.fn.extend({prop:function(e,t){return mt(this,Z.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[Z.propFix[e]||e]})}}),Z.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;return e&&3!==s&&8!==s&&2!==s?(o=1!==s||!Z.isXMLDoc(e),o&&(t=Z.propFix[t]||t,i=Z.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]):void 0},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||an.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),J.optSelected||(Z.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),Z.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){Z.propFix[this.toLowerCase()]=this});var cn=/[\t\r\n\f]/g;Z.fn.extend({addClass:function(e){var t,n,r,i,o,s,a="string"==typeof e&&e,c=0,u=this.length;if(Z.isFunction(e))return this.each(function(t){Z(this).addClass(e.call(this,t,this.className))});if(a)for(t=(e||"").match(ht)||[];u>c;c++)if(n=this[c],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(cn," "):" ")){for(o=0;i=t[o++];)r.indexOf(" "+i+" ")<0&&(r+=i+" ");s=Z.trim(r),n.className!==s&&(n.className=s)}return this},removeClass:function(e){var t,n,r,i,o,s,a=0===arguments.length||"string"==typeof e&&e,c=0,u=this.length;if(Z.isFunction(e))return this.each(function(t){Z(this).removeClass(e.call(this,t,this.className))});if(a)for(t=(e||"").match(ht)||[];u>c;c++)if(n=this[c],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(cn," "):"")){for(o=0;i=t[o++];)for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ");s=e?Z.trim(r):"",n.className!==s&&(n.className=s)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):this.each(Z.isFunction(e)?function(n){Z(this).toggleClass(e.call(this,n,this.className,t),t)}:function(){if("string"===n)for(var t,r=0,i=Z(this),o=e.match(ht)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else(n===Tt||"boolean"===n)&&(this.className&&yt.set(this,"__className__",this.className),this.className=this.className||e===!1?"":yt.get(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(cn," ").indexOf(t)>=0)return!0;return!1}});var un=/\r/g;Z.fn.extend({val:function(e){var t,n,r,i=this[0];return arguments.length?(r=Z.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,Z(this).val()):e,null==i?i="":"number"==typeof i?i+="":Z.isArray(i)&&(i=Z.map(i,function(e){return null==e?"":e+""})),t=Z.valHooks[this.type]||Z.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})):i?(t=Z.valHooks[i.type]||Z.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:(n=i.value,"string"==typeof n?n.replace(un,""):null==n?"":n)):void 0}}),Z.extend({valHooks:{option:{get:function(e){var t=Z.find.attr(e,"value");return null!=t?t:Z.trim(Z.text(e))}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,c=0>i?a:o?i:0;a>c;c++)if(n=r[c],!(!n.selected&&c!==i||(J.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&Z.nodeName(n.parentNode,"optgroup"))){if(t=Z(n).val(),o)return t;s.push(t)}return s},set:function(e,t){for(var n,r,i=e.options,o=Z.makeArray(t),s=i.length;s--;)r=i[s],(r.selected=Z.inArray(r.value,o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),Z.each(["radio","checkbox"],function(){Z.valHooks[this]={set:function(e,t){return Z.isArray(t)?e.checked=Z.inArray(Z(e).val(),t)>=0:void 0}},J.checkOn||(Z.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){Z.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),Z.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var ln=Z.now(),fn=/\?/;Z.parseJSON=function(e){return JSON.parse(e+"")},Z.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=void 0}return(!t||t.getElementsByTagName("parsererror").length)&&Z.error("Invalid XML: "+e),t};var pn,hn,dn=/#.*$/,gn=/([?&])_=[^&]*/,mn=/^(.*?):[ \t]*([^\r\n]*)$/gm,yn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,bn=/^\/\//,wn=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,xn={},kn={},Sn="*/".concat("*");try{hn=location.href}catch(Cn){hn=Q.createElement("a"),hn.href="",hn=hn.href}pn=wn.exec(hn.toLowerCase())||[],Z.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:hn,type:"GET",isLocal:yn.test(pn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Sn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":Z.parseJSON,"text xml":Z.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?H(H(e,Z.ajaxSettings),t):H(Z.ajaxSettings,e)},ajaxPrefilter:R(xn),ajaxTransport:R(kn),ajax:function(e,t){function n(e,t,n,s){var c,l,y,v,w,k=t;2!==b&&(b=2,a&&clearTimeout(a),r=void 0,o=s||"",x.readyState=e>0?4:0,c=e>=200&&300>e||304===e,n&&(v=D(f,x,n)),v=I(f,v,x,c),c?(f.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(Z.lastModified[i]=w),w=x.getResponseHeader("etag"),w&&(Z.etag[i]=w)),204===e||"HEAD"===f.type?k="nocontent":304===e?k="notmodified":(k=v.state,l=v.data,y=v.error,c=!y)):(y=k,(e||!k)&&(k="error",0>e&&(e=0))),x.status=e,x.statusText=(t||k)+"",c?d.resolveWith(p,[l,k,x]):d.rejectWith(p,[x,k,y]),x.statusCode(m),m=void 0,u&&h.trigger(c?"ajaxSuccess":"ajaxError",[x,f,c?l:y]),g.fireWith(p,[x,k]),u&&(h.trigger("ajaxComplete",[x,f]),--Z.active||Z.event.trigger("ajaxStop")))}"object"==typeof e&&(t=e,e=void 0),t=t||{};var r,i,o,s,a,c,u,l,f=Z.ajaxSetup({},t),p=f.context||f,h=f.context&&(p.nodeType||p.jquery)?Z(p):Z.event,d=Z.Deferred(),g=Z.Callbacks("once memory"),m=f.statusCode||{},y={},v={},b=0,w="canceled",x={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!s)for(s={};t=mn.exec(o);)s[t[1].toLowerCase()]=t[2];t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?o:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(f.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else x.always(e[x.status]);return this},abort:function(e){var t=e||w;return r&&r.abort(t),n(0,t),this}};if(d.promise(x).complete=g.add,x.success=x.done,x.error=x.fail,f.url=((e||f.url||hn)+"").replace(dn,"").replace(bn,pn[1]+"//"),f.type=t.method||t.type||f.method||f.type,f.dataTypes=Z.trim(f.dataType||"*").toLowerCase().match(ht)||[""],null==f.crossDomain&&(c=wn.exec(f.url.toLowerCase()),f.crossDomain=!(!c||c[1]===pn[1]&&c[2]===pn[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(pn[3]||("http:"===pn[1]?"80":"443")))),f.data&&f.processData&&"string"!=typeof f.data&&(f.data=Z.param(f.data,f.traditional)),L(xn,f,t,x),2===b)return x;u=f.global,u&&0===Z.active++&&Z.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!vn.test(f.type),i=f.url,f.hasContent||(f.data&&(i=f.url+=(fn.test(i)?"&":"?")+f.data,delete f.data),f.cache===!1&&(f.url=gn.test(i)?i.replace(gn,"$1_="+ln++):i+(fn.test(i)?"&":"?")+"_="+ln++)),f.ifModified&&(Z.lastModified[i]&&x.setRequestHeader("If-Modified-Since",Z.lastModified[i]),Z.etag[i]&&x.setRequestHeader("If-None-Match",Z.etag[i])),(f.data&&f.hasContent&&f.contentType!==!1||t.contentType)&&x.setRequestHeader("Content-Type",f.contentType),x.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+Sn+"; q=0.01":""):f.accepts["*"]);for(l in f.headers)x.setRequestHeader(l,f.headers[l]);if(f.beforeSend&&(f.beforeSend.call(p,x,f)===!1||2===b))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](f[l]);if(r=L(kn,f,t,x)){x.readyState=1,u&&h.trigger("ajaxSend",[x,f]),f.async&&f.timeout>0&&(a=setTimeout(function(){x.abort("timeout")},f.timeout));try{b=1,r.send(y,n)}catch(k){if(!(2>b))throw k;n(-1,k)}}else n(-1,"No Transport");return x},getJSON:function(e,t,n){return Z.get(e,t,n,"json")},getScript:function(e,t){return Z.get(e,void 0,t,"script")}}),Z.each(["get","post"],function(e,t){Z[t]=function(e,n,r,i){return Z.isFunction(n)&&(i=i||r,r=n,n=void 0),Z.ajax({url:e,type:t,dataType:i,data:n,success:r})}}),Z.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){Z.fn[t]=function(e){return this.on(t,e)}}),Z._evalUrl=function(e){return Z.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},Z.fn.extend({wrapAll:function(e){var t;return Z.isFunction(e)?this.each(function(t){Z(this).wrapAll(e.call(this,t))}):(this[0]&&(t=Z(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return this.each(Z.isFunction(e)?function(t){Z(this).wrapInner(e.call(this,t))}:function(){var t=Z(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=Z.isFunction(e);return this.each(function(n){Z(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){Z.nodeName(this,"body")||Z(this).replaceWith(this.childNodes)}).end()}}),Z.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0},Z.expr.filters.visible=function(e){return!Z.expr.filters.hidden(e)};var Tn=/%20/g,An=/\[\]$/,En=/\r?\n/g,Nn=/^(?:submit|button|image|reset|file)$/i,Pn=/^(?:input|select|textarea|keygen)/i;Z.param=function(e,t){var n,r=[],i=function(e,t){t=Z.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=Z.ajaxSettings&&Z.ajaxSettings.traditional),Z.isArray(e)||e.jquery&&!Z.isPlainObject(e))Z.each(e,function(){i(this.name,this.value)});else for(n in e)V(n,e[n],t,i);return r.join("&").replace(Tn,"+")},Z.fn.extend({serialize:function(){return Z.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=Z.prop(this,"elements");return e?Z.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!Z(this).is(":disabled")&&Pn.test(this.nodeName)&&!Nn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=Z(this).val();return null==n?null:Z.isArray(n)?Z.map(n,function(e){return{name:t.name,value:e.replace(En,"\r\n")}}):{name:t.name,value:n.replace(En,"\r\n")}}).get()}}),Z.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var jn=0,_n={},Bn={0:200,1223:204},On=Z.ajaxSettings.xhr();e.ActiveXObject&&Z(e).on("unload",function(){for(var e in _n)_n[e]()}),J.cors=!!On&&"withCredentials"in On,J.ajax=On=!!On,Z.ajaxTransport(function(e){var t;return J.cors||On&&!e.crossDomain?{send:function(n,r){var i,o=e.xhr(),s=++jn;if(o.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)o[i]=e.xhrFields[i];e.mimeType&&o.overrideMimeType&&o.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)o.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete _n[s],t=o.onload=o.onerror=null,"abort"===e?o.abort():"error"===e?r(o.status,o.statusText):r(Bn[o.status]||o.status,o.statusText,"string"==typeof o.responseText?{text:o.responseText}:void 0,o.getAllResponseHeaders()))}},o.onload=t(),o.onerror=t("error"),t=_n[s]=t("abort");try{o.send(e.hasContent&&e.data||null)}catch(a){if(t)throw a}},abort:function(){t&&t()}}:void 0}),Z.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return Z.globalEval(e),e}}}),Z.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),Z.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=Z("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),Q.head.appendChild(t[0])},abort:function(){n&&n()}}}});var qn=[],Rn=/(=)\?(?=&|$)|\?\?/;Z.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=qn.pop()||Z.expando+"_"+ln++;return this[e]=!0,e}}),Z.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(Rn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=Z.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(Rn,"$1"+i):t.jsonp!==!1&&(t.url+=(fn.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||Z.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,qn.push(i)),s&&Z.isFunction(o)&&o(s[0]),s=o=void 0}),"script"):void 0}),Z.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||Q;var r=st.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=Z.buildFragment([e],t,i),i&&i.length&&Z(i).remove(),Z.merge([],r.childNodes))};var Ln=Z.fn.load;Z.fn.load=function(e,t,n){if("string"!=typeof e&&Ln)return Ln.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=Z.trim(e.slice(a)),e=e.slice(0,a)),Z.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),s.length>0&&Z.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?Z("<div>").append(Z.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},Z.expr.filters.animated=function(e){return Z.grep(Z.timers,function(t){return e===t.elem}).length};var Hn=e.document.documentElement;Z.offset={setOffset:function(e,t,n){var r,i,o,s,a,c,u,l=Z.css(e,"position"),f=Z(e),p={};"static"===l&&(e.style.position="relative"),a=f.offset(),o=Z.css(e,"top"),c=Z.css(e,"left"),u=("absolute"===l||"fixed"===l)&&(o+c).indexOf("auto")>-1,u?(r=f.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(c)||0),Z.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(p.top=t.top-a.top+s),null!=t.left&&(p.left=t.left-a.left+i),"using"in t?t.using.call(e,p):f.css(p)}},Z.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){Z.offset.setOffset(this,e,t)});var t,n,r=this[0],i={top:0,left:0},o=r&&r.ownerDocument;return o?(t=o.documentElement,Z.contains(t,r)?(typeof r.getBoundingClientRect!==Tt&&(i=r.getBoundingClientRect()),n=F(o),{top:i.top+n.pageYOffset-t.clientTop,left:i.left+n.pageXOffset-t.clientLeft}):i):void 0},position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===Z.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),Z.nodeName(e[0],"html")||(r=e.offset()),r.top+=Z.css(e[0],"borderTopWidth",!0),r.left+=Z.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-Z.css(n,"marginTop",!0),left:t.left-r.left-Z.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||Hn;e&&!Z.nodeName(e,"html")&&"static"===Z.css(e,"position");)e=e.offsetParent;return e||Hn})}}),Z.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;Z.fn[t]=function(i){return mt(this,function(t,i,o){var s=F(t);return void 0===o?s?s[n]:t[i]:void(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o)},t,i,arguments.length,null)}}),Z.each(["top","left"],function(e,t){Z.cssHooks[t]=k(J.pixelPosition,function(e,n){return n?(n=x(e,t),Mt.test(n)?Z(e).position()[t]+"px":n):void 0})}),Z.each({Height:"height",Width:"width"},function(e,t){Z.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){Z.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return mt(this,function(t,n,r){var i;return Z.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===r?Z.css(t,n,s):Z.style(t,n,r,s)},t,o?r:void 0,o,null)}})}),Z.fn.size=function(){return this.length},Z.fn.andSelf=Z.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return Z});var Dn=e.jQuery,In=e.$;return Z.noConflict=function(t){return e.$===Z&&(e.$=In),t&&e.jQuery===Z&&(e.jQuery=Dn),Z},typeof t===Tt&&(e.jQuery=e.$=Z),Z}),//# sourceMappingURL=jquery.min.map;
/*!
* Velocity.js: Accelerated JavaScript animation.
* @version 0.10.0
* @docs http://velocityjs.org
* @license Copyright 2014 Julian Shapiro. MIT License: http://en.wikipedia.org/wiki/MIT_License
*/
!function(e,t,n,r){function i(e){for(var t=-1,n=e?e.length:0,r=[];++t<n;){var i=e[t];i&&r.push(i)}return r}function o(e){var t=y.data(e,l);return null===t?r:t}function s(e){return function(t){return Math.round(t*e)*(1/e)}}function a(e,t){var n=e;return m.isString(e)?v.Easings[e]||(n=!1):n=m.isArray(e)&&1===e.length?s.apply(null,e):m.isArray(e)&&2===e.length?w.apply(null,e.concat([t])):m.isArray(e)&&4===e.length?b.apply(null,e):!1,n===!1&&(n=v.Easings[v.defaults.easing]?v.defaults.easing:p),n}function c(e){if(e)for(var t=(new Date).getTime(),n=0,i=v.State.calls.length;i>n;n++)if(v.State.calls[n]){var s=v.State.calls[n],a=s[0],l=s[2],f=s[3];f||(f=v.State.calls[n][3]=t-16);for(var p=Math.min((t-f)/l.duration,1),h=0,d=a.length;d>h;h++){var y=a[h],b=y.element;if(o(b)){var w=!1;l.display&&"none"!==l.display&&x.setPropertyValue(b,"display",l.display),l.visibility&&"hidden"!==l.visibility&&x.setPropertyValue(b,"visibility",l.visibility);for(var k in y)if("element"!==k){var S,C=y[k],T=m.isString(C.easing)?v.Easings[C.easing]:C.easing;if(S=1===p?C.endValue:C.startValue+(C.endValue-C.startValue)*T(p),C.currentValue=S,x.Hooks.registered[k]){var A=x.Hooks.getRoot(k),E=o(b).rootPropertyValueCache[A];E&&(C.rootPropertyValue=E)}var N=x.setPropertyValue(b,k,C.currentValue+(0===parseFloat(S)?"":C.unitType),C.rootPropertyValue,C.scrollData);x.Hooks.registered[k]&&(o(b).rootPropertyValueCache[A]=x.Normalizations.registered[A]?x.Normalizations.registered[A]("extract",null,N[1]):N[1]),"transform"===N[0]&&(w=!0)}l.mobileHA&&o(b).transformCache.translate3d===r&&(o(b).transformCache.translate3d="(0px, 0px, 0px)",w=!0),w&&x.flushTransformCache(b)}}l.display&&"none"!==l.display&&(v.State.calls[n][2].display=!1),l.visibility&&"hidden"!==l.visibility&&(v.State.calls[n][2].visibility=!1),l.progress&&l.progress.call(s[1],s[1],p,Math.max(0,f+l.duration-t),f),1===p&&u(n)}v.State.isTicking&&g(c)}function u(e,t){if(!v.State.calls[e])return!1;for(var n=v.State.calls[e][0],i=v.State.calls[e][1],s=v.State.calls[e][2],a=v.State.calls[e][4],c=!1,u=0,l=n.length;l>u;u++){var f=n[u].element;if(t||s.loop||("none"===s.display&&x.setPropertyValue(f,"display",s.display),"hidden"===s.visibility&&x.setPropertyValue(f,"visibility",s.visibility)),(y.queue(f)[1]===r||!/\.velocityQueueEntryFlag/i.test(y.queue(f)[1]))&&o(f)){o(f).isAnimating=!1,o(f).rootPropertyValueCache={};var p=!1;y.each(o(f).transformCache,function(e,t){var n=/^scale/.test(e)?1:0;new RegExp("^\\("+n+"[^.]").test(t)&&(p=!0,delete o(f).transformCache[e])}),s.mobileHA&&(p=!0,delete o(f).transformCache.translate3d),p&&x.flushTransformCache(f),x.Values.removeClass(f,"velocity-animating")}if(!t&&s.complete&&!s.loop&&u===l-1)try{s.complete.call(i,i)}catch(h){setTimeout(function(){throw h},1)}a&&s.loop!==!0&&a(i),s.loop!==!0||t||v.animate(f,"reverse",{loop:!0,delay:s.delay}),s.queue!==!1&&y.dequeue(f,s.queue)}v.State.calls[e]=!1;for(var d=0,g=v.State.calls.length;g>d;d++)if(v.State.calls[d]!==!1){c=!0;break}c===!1&&(v.State.isTicking=!1,delete v.State.calls,v.State.calls=[])}var l="velocity",f=400,p="swing",h=function(){if(n.documentMode)return n.documentMode;for(var e=7;e>4;e--){var t=n.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e}return r}(),d=function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var n,r=(new Date).getTime();return n=Math.max(0,16-(r-e)),e=r+n,setTimeout(function(){t(r+n)},n)}}(),g=t.requestAnimationFrame||d,m={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==r&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||t.Zepto&&t.Zepto.zepto.isZ(e))},isSVG:function(e){return t.SVGElement&&e instanceof SVGElement},isEmptyObject:function(e){var t;for(t in e)return!1;return!0}},y=t.jQuery||e.Velocity&&e.Velocity.Utilities;if(!y)throw new Error("Velocity: Either jQuery or Velocity's jQuery shim must first be loaded.");if(e.Velocity!==r&&!e.Velocity.Utilities)throw new Error("Velocity: Namespace is occupied.");if(7>=h){if(t.jQuery)return void(t.jQuery.fn.velocity=t.jQuery.fn.animate);throw new Error("Velocity: For IE<=7, Velocity falls back to jQuery, which must first be loaded.")}if(8===h&&!t.jQuery)throw new Error("Velocity: For IE8, Velocity requires jQuery to be loaded. (Velocity's jQuery shim does not work with IE8.)");var v=e.Velocity=e.velocity=y.extend({State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:n.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:t.jQuery,Sequences:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:f,easing:p,begin:null,complete:null,progress:null,display:null,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},animate:function(){},mock:!1,version:{major:0,minor:10,patch:0},debug:!1},t.Velocity);t.pageYOffset!==r?(v.State.scrollAnchor=t,v.State.scrollPropertyLeft="pageXOffset",v.State.scrollPropertyTop="pageYOffset"):(v.State.scrollAnchor=n.documentElement||n.body.parentNode||n.body,v.State.scrollPropertyLeft="scrollLeft",v.State.scrollPropertyTop="scrollTop"),v.State.isMobile||n.hidden===r||n.addEventListener("visibilitychange",function(){n.hidden?(g=function(e){return setTimeout(function(){e(!0)},16)},c()):g=t.requestAnimationFrame||d});var b=function(){function e(e,t){return 1-3*t+3*e}function t(e,t){return 3*t-6*e}function n(e){return 3*e}function r(r,i,o){return((e(i,o)*r+t(i,o))*r+n(i))*r}function i(r,i,o){return 3*e(i,o)*r*r+2*t(i,o)*r+n(i)}return function(e,t,n,o){function s(t){for(var o=t,s=0;8>s;++s){var a=i(o,e,n);if(0===a)return o;var c=r(o,e,n)-t;o-=c/a}return o}if(4!==arguments.length)return!1;for(var a=0;4>a;++a)if("number"!=typeof arguments[a]||isNaN(arguments[a])||!isFinite(arguments[a]))return!1;return e=Math.min(e,1),n=Math.min(n,1),e=Math.max(e,0),n=Math.max(n,0),function(i){return e===t&&n===o?i:r(s(i),t,o)}}}(),w=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,n,r){var i={x:t.x+r.dx*n,v:t.v+r.dv*n,tension:t.tension,friction:t.friction};return{dx:i.v,dv:e(i)}}function n(n,r){var i={dx:n.v,dv:e(n)},o=t(n,.5*r,i),s=t(n,.5*r,o),a=t(n,r,s),c=1/6*(i.dx+2*(o.dx+s.dx)+a.dx),u=1/6*(i.dv+2*(o.dv+s.dv)+a.dv);return n.x=n.x+c*r,n.v=n.v+u*r,n}return function r(e,t,i){var o,s,a,c={x:-1,v:0,tension:null,friction:null},u=[0],l=0,f=1e-4,p=.016;for(e=parseFloat(e)||500,t=parseFloat(t)||20,i=i||null,c.tension=e,c.friction=t,o=null!==i,o?(l=r(e,t),s=l/i*p):s=p;a=n(a||c,s),u.push(1+a.x),l+=16,Math.abs(a.x)>f&&Math.abs(a.v)>f;);return o?function(e){return u[e*(u.length-1)|0]}:l}}();!function(){v.Easings.linear=function(e){return e},v.Easings.swing=function(e){return.5-Math.cos(e*Math.PI)/2},v.Easings.spring=function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)},v.Easings.ease=b(.25,.1,.25,1),v.Easings["ease-in"]=b(.42,0,1,1),v.Easings["ease-out"]=b(0,0,.58,1),v.Easings["ease-in-out"]=b(.42,0,.58,1);var e={};y.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,n){e[n]=function(e){return Math.pow(e,t+2)}}),y.extend(e,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,n=4;e<((t=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*t-2)/22-e,2)}}),y.each(e,function(e,t){v.Easings["easeIn"+e]=t,v.Easings["easeOut"+e]=function(e){return 1-t(1-e)},v.Easings["easeInOut"+e]=function(e){return.5>e?t(2*e)/2:1-t(-2*e+2)/2}})}();var x=v.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<x.Lists.colors.length;e++)x.Hooks.templates[x.Lists.colors[e]]=["Red Green Blue Alpha","255 255 255 1"];var t,n,r;if(h)for(t in x.Hooks.templates){n=x.Hooks.templates[t],r=n[0].split(" ");var i=n[1].match(x.RegEx.valueSplit);"Color"===r[0]&&(r.push(r.shift()),i.push(i.shift()),x.Hooks.templates[t]=[r.join(" "),i.join(" ")])}for(t in x.Hooks.templates){n=x.Hooks.templates[t],r=n[0].split(" ");for(var e in r){var o=t+r[e],s=e;x.Hooks.registered[o]=[t,s]}}},getRoot:function(e){var t=x.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return x.RegEx.valueUnwrap.test(t)&&(t=t.match(x.Hooks.RegEx.valueUnwrap)[1]),x.Values.isCSSNullValue(t)&&(t=x.Hooks.templates[e][1]),t},extractValue:function(e,t){var n=x.Hooks.registered[e];if(n){var r=n[0],i=n[1];return t=x.Hooks.cleanRootPropertyValue(r,t),t.toString().match(x.RegEx.valueSplit)[i]}return t},injectValue:function(e,t,n){var r=x.Hooks.registered[e];if(r){var i,o,s=r[0],a=r[1];return n=x.Hooks.cleanRootPropertyValue(s,n),i=n.toString().match(x.RegEx.valueSplit),i[a]=t,o=i.join(" ")}return n}},Normalizations:{registered:{clip:function(e,t,n){switch(e){case"name":return"clip";case"extract":var r;return x.RegEx.wrappedValueAlreadyExtracted.test(n)?r=n:(r=n.toString().match(x.RegEx.valueUnwrap),r=r?r[1].replace(/,(\s+)?/g," "):n),r;case"inject":return"rect("+n+")"}},opacity:function(e,t,n){if(8>=h)switch(e){case"name":return"filter";case"extract":var r=n.toString().match(/alpha\(opacity=(.*)\)/i);return n=r?r[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(n)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(n),10)+")"}else switch(e){case"name":return"opacity";case"extract":return n;case"inject":return n}}},register:function(){9>=h||v.State.isGingerbread||(x.Lists.transformsBase=x.Lists.transformsBase.concat(x.Lists.transforms3D));for(var e=0;e<x.Lists.transformsBase.length;e++)!function(){var t=x.Lists.transformsBase[e];x.Normalizations.registered[t]=function(e,n,i){switch(e){case"name":return"transform";case"extract":return o(n).transformCache[t]===r?/^scale/i.test(t)?1:0:o(n).transformCache[t].replace(/[()]/g,"");case"inject":var s=!1;switch(t.substr(0,t.length-1)){case"translate":s=!/(%|px|em|rem|vw|vh|\d)$/i.test(i);break;case"scal":case"scale":v.State.isAndroid&&o(n).transformCache[t]===r&&1>i&&(i=1),s=!/(\d)$/i.test(i);break;case"skew":s=!/(deg|\d)$/i.test(i);break;case"rotate":s=!/(deg|\d)$/i.test(i)}return s||(o(n).transformCache[t]="("+i+")"),o(n).transformCache[t]}}}();for(var e=0;e<x.Lists.colors.length;e++)!function(){var t=x.Lists.colors[e];x.Normalizations.registered[t]=function(e,n,i){switch(e){case"name":return t;case"extract":var o;if(x.RegEx.wrappedValueAlreadyExtracted.test(i))o=i;else{var s,a={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(i)?s=a[i]!==r?a[i]:a.black:x.RegEx.isHex.test(i)?s="rgb("+x.Values.hexToRgb(i).join(" ")+")":/^rgba?\(/i.test(i)||(s=a.black),o=(s||i).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=h||3!==o.split(" ").length||(o+=" 1"),o;case"inject":return 8>=h?4===i.split(" ").length&&(i=i.split(/\s+/).slice(0,3).join(" ")):3===i.split(" ").length&&(i+=" 1"),(8>=h?"rgb":"rgba")+"("+i.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(h||v.State.isAndroid&&!v.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(v.State.prefixMatches[e])return[v.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],n=0,r=t.length;r>n;n++){var i;if(i=0===n?e:t[n]+e.replace(/^\w/,function(e){return e.toUpperCase()}),m.isString(v.State.prefixElement.style[i]))return v.State.prefixMatches[e]=i,[i,!0]}return[e,!1]}},Values:{hexToRgb:function(e){var t,n=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return e=e.replace(n,function(e,t,n,r){return t+t+n+n+r+r}),t=r.exec(e),t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,n,i,s){function a(e,n){function i(){u&&x.setPropertyValue(e,"display","none")}var c=0;if(8>=h)c=y.css(e,n);else{var u=!1;if(/^(width|height)$/.test(n)&&0===x.getPropertyValue(e,"display")&&(u=!0,x.setPropertyValue(e,"display",x.Values.getDisplayType(e))),!s){if("height"===n&&"border-box"!==x.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var l=e.offsetHeight-(parseFloat(x.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(x.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(x.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(x.getPropertyValue(e,"paddingBottom"))||0);return i(),l}if("width"===n&&"border-box"!==x.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var f=e.offsetWidth-(parseFloat(x.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(x.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(x.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(x.getPropertyValue(e,"paddingRight"))||0);return i(),f}}var p;p=o(e)===r?t.getComputedStyle(e,null):o(e).computedStyle?o(e).computedStyle:o(e).computedStyle=t.getComputedStyle(e,null),(h||v.State.isFirefox)&&"borderColor"===n&&(n="borderTopColor"),c=9===h&&"filter"===n?p.getPropertyValue(n):p[n],(""===c||null===c)&&(c=e.style[n]),i()}if("auto"===c&&/^(top|right|bottom|left)$/i.test(n)){var d=a(e,"position");("fixed"===d||"absolute"===d&&/top|left/i.test(n))&&(c=y(e).position()[n]+"px")}return c}var c;if(x.Hooks.registered[n]){var u=n,l=x.Hooks.getRoot(u);i===r&&(i=x.getPropertyValue(e,x.Names.prefixCheck(l)[0])),x.Normalizations.registered[l]&&(i=x.Normalizations.registered[l]("extract",e,i)),c=x.Hooks.extractValue(u,i)}else if(x.Normalizations.registered[n]){var f,p;f=x.Normalizations.registered[n]("name",e),"transform"!==f&&(p=a(e,x.Names.prefixCheck(f)[0]),x.Values.isCSSNullValue(p)&&x.Hooks.templates[n]&&(p=x.Hooks.templates[n][1])),c=x.Normalizations.registered[n]("extract",e,p)}return/^[\d-]/.test(c)||(c=o(e)&&o(e).isSVG&&x.Names.SVGAttribute(n)?/^(height|width)$/i.test(n)?e.getBBox()[n]:e.getAttribute(n):a(e,x.Names.prefixCheck(n)[0])),x.Values.isCSSNullValue(c)&&(c=0),v.debug>=2&&console.log("Get "+n+": "+c),c},setPropertyValue:function(e,n,r,i,s){var a=n;if("scroll"===n)s.container?s.container["scroll"+s.direction]=r:"Left"===s.direction?t.scrollTo(r,s.alternateValue):t.scrollTo(s.alternateValue,r);else if(x.Normalizations.registered[n]&&"transform"===x.Normalizations.registered[n]("name",e))x.Normalizations.registered[n]("inject",e,r),a="transform",r=o(e).transformCache[n];else{if(x.Hooks.registered[n]){var c=n,u=x.Hooks.getRoot(n);i=i||x.getPropertyValue(e,u),r=x.Hooks.injectValue(c,r,i),n=u}if(x.Normalizations.registered[n]&&(r=x.Normalizations.registered[n]("inject",e,r),n=x.Normalizations.registered[n]("name",e)),a=x.Names.prefixCheck(n)[0],8>=h)try{e.style[a]=r}catch(l){v.debug&&console.log("Browser does not support ["+r+"] for ["+a+"]")}else o(e)&&o(e).isSVG&&x.Names.SVGAttribute(n)?e.setAttribute(n,r):e.style[a]=r;v.debug>=2&&console.log("Set "+n+" ("+a+"): "+r)}return[a,r]},flushTransformCache:function(e){function t(t){return parseFloat(x.getPropertyValue(e,t))}var n="";if((h||v.State.isAndroid&&!v.State.isChrome)&&o(e).isSVG){var r={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};y.each(o(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),r[e]&&(n+=e+"("+r[e].join(" ")+") ",delete r[e])})}else{var i,s;y.each(o(e).transformCache,function(t){return i=o(e).transformCache[t],"transformPerspective"===t?(s=i,!0):(9===h&&"rotateZ"===t&&(t="rotate"),void(n+=t+i+" "))}),s&&(n="perspective"+s+" "+n)}x.setPropertyValue(e,"transform",n)}};x.Hooks.register(),x.Normalizations.register(),v.animate=function(){function e(){return p?N.promise||null:d}function s(){function e(){function e(e,t){var n=r,i=r,o=r;return m.isArray(e)?(n=e[0],!m.isArray(e[1])&&/^[\d-]/.test(e[1])||m.isFunction(e[1])||x.RegEx.isHex.test(e[1])?o=e[1]:(m.isString(e[1])&&!x.RegEx.isHex.test(e[1])||m.isArray(e[1]))&&(i=t?e[1]:a(e[1],u.duration),e[2]!==r&&(o=e[2]))):n=e,i=i||u.easing,m.isFunction(n)&&(n=n.call(s,T,C)),m.isFunction(o)&&(o=o.call(s,T,C)),[n||0,i,o]}function l(e,t){var n,r;return r=(t||0).toString().toLowerCase().replace(/[%A-z]+$/,function(e){return n=e,""}),n||(n=x.Values.getUnitType(e)),[r,n]}function f(){var e={parent:s.parentNode,position:x.getPropertyValue(s,"position"),fontSize:x.getPropertyValue(s,"fontSize")},r=e.position===q.lastPosition&&e.parent===q.lastParent,i=e.fontSize===q.lastFontSize&&e.parent===q.lastParent;q.lastParent=e.parent,q.lastPosition=e.position,q.lastFontSize=e.fontSize,null===q.remToPx&&(q.remToPx=parseFloat(x.getPropertyValue(n.body,"fontSize"))||16),null===q.vwToPx&&(q.vwToPx=parseFloat(t.innerWidth)/100,q.vhToPx=parseFloat(t.innerHeight)/100);var a={overflowX:null,overflowY:null,boxSizing:null,width:null,minWidth:null,maxWidth:null,height:null,minHeight:null,maxHeight:null,paddingLeft:null},c={},u=10;if(c.remToPx=q.remToPx,c.vwToPx=q.vwToPx,c.vhToPx=q.vhToPx,h&&!o(s).isSVG)var l=/^auto$/i.test(s.currentStyle.width),f=/^auto$/i.test(s.currentStyle.height);r&&i||(o(s).isSVG||(a.overflowX=x.getPropertyValue(s,"overflowX"),a.overflowY=x.getPropertyValue(s,"overflowY"),a.boxSizing=x.getPropertyValue(s,"boxSizing"),a.minWidth=x.getPropertyValue(s,"minWidth"),a.maxWidth=x.getPropertyValue(s,"maxWidth")||"none",a.minHeight=x.getPropertyValue(s,"minHeight"),a.maxHeight=x.getPropertyValue(s,"maxHeight")||"none",a.paddingLeft=x.getPropertyValue(s,"paddingLeft")),a.width=x.getPropertyValue(s,"width",null,!0),a.height=x.getPropertyValue(s,"height",null,!0)),r?(c.percentToPxRatioWidth=q.lastPercentToPxWidth,c.percentToPxRatioHeight=q.lastPercentToPxHeight):(o(s).isSVG||(x.setPropertyValue(s,"overflowX","hidden"),x.setPropertyValue(s,"overflowY","hidden"),x.setPropertyValue(s,"boxSizing","content-box"),x.setPropertyValue(s,"minWidth",u+"%"),x.setPropertyValue(s,"maxWidth",u+"%"),x.setPropertyValue(s,"minHeight",u+"%"),x.setPropertyValue(s,"maxHeight",u+"%")),x.setPropertyValue(s,"width",u+"%"),x.setPropertyValue(s,"height",u+"%")),i?c.emToPx=q.lastEmToPx:o(s).isSVG||x.setPropertyValue(s,"paddingLeft",u+"em"),r||(c.percentToPxRatioWidth=q.lastPercentToPxWidth=(parseFloat(x.getPropertyValue(s,"width",null,!0))||1)/u,c.percentToPxRatioHeight=q.lastPercentToPxHeight=(parseFloat(x.getPropertyValue(s,"height",null,!0))||1)/u),i||(c.emToPx=q.lastEmToPx=(parseFloat(x.getPropertyValue(s,"paddingLeft"))||1)/u);for(var p in a)null!==a[p]&&x.setPropertyValue(s,p,a[p]);return o(s).isSVG||(h?(l&&x.setPropertyValue(s,"width","auto"),f&&x.setPropertyValue(s,"height","auto")):(x.setPropertyValue(s,"height","auto"),a.height!==x.getPropertyValue(s,"height",null,!0)&&x.setPropertyValue(s,"height",a.height),x.setPropertyValue(s,"width","auto"),a.width!==x.getPropertyValue(s,"width",null,!0)&&x.setPropertyValue(s,"width",a.width))),v.debug>=1&&console.log("Unit ratios: "+JSON.stringify(c),s),c}if(u.begin&&0===T)try{u.begin.call(b,b)}catch(d){setTimeout(function(){throw d},1)}if("scroll"===P){var g,S,A,E=/^x$/i.test(u.axis)?"Left":"Top",j=parseFloat(u.offset)||0;u.container?u.container.jquery||m.isNode(u.container)?(u.container=u.container[0]||u.container,g=u.container["scroll"+E],A=g+y(s).position()[E.toLowerCase()]+j):u.container=null:(g=v.State.scrollAnchor[v.State["scrollProperty"+E]],S=v.State.scrollAnchor[v.State["scrollProperty"+("Left"===E?"Top":"Left")]],A=y(s).offset()[E.toLowerCase()]+j),p={scroll:{rootPropertyValue:!1,startValue:g,currentValue:g,endValue:A,unitType:"",easing:u.easing,scrollData:{container:u.container,direction:E,alternateValue:S}},element:s},v.debug&&console.log("tweensContainer (scroll): ",p.scroll,s)}else if("reverse"===P){if(!o(s).tweensContainer)return void y.dequeue(s,u.queue);"none"===o(s).opts.display&&(o(s).opts.display="block"),"hidden"===o(s).opts.visibility&&(o(s).opts.visibility="visible"),o(s).opts.loop=!1,o(s).opts.begin=null,o(s).opts.complete=null,k.easing||delete u.easing,k.duration||delete u.duration,u=y.extend({},o(s).opts,u);var _=y.extend(!0,{},o(s).tweensContainer);for(var B in _)if("element"!==B){var O=_[B].startValue;_[B].startValue=_[B].currentValue=_[B].endValue,_[B].endValue=O,m.isEmptyObject(k)||(_[B].easing=u.easing),v.debug&&console.log("reverse tweensContainer ("+B+"): "+JSON.stringify(_[B]),s)}p=_}else if("start"===P){var _;o(s).tweensContainer&&o(s).isAnimating===!0&&(_=o(s).tweensContainer),y.each(w,function(t,n){var i=e(n,!0),o=i[0],s=i[1],a=i[2];if(RegExp(x.Lists.colors.join("|")).test(t)&&x.RegEx.isHex.test(o)){for(var c=["Red","Green","Blue"],u=x.Values.hexToRgb(o),l=a?x.Values.hexToRgb(a):r,f=0;f<c.length;f++)w[t+c[f]]=[u[f],s,l?l[f]:l];delete w[t]}});for(var L in w){var H=e(w[L]),D=H[0],I=H[1],V=H[2];L=x.Names.camelCase(L);var F=x.Hooks.getRoot(L),M=!1;if(o(s).isSVG||x.Names.prefixCheck(F)[1]!==!1||x.Normalizations.registered[F]!==r){(u.display&&"none"!==u.display||u.visibility&&"hidden"!==u.visibility)&&/opacity|filter/.test(L)&&!V&&0!==D&&(V=0),u._cacheValues&&_&&_[L]?(V===r&&(V=_[L].endValue+_[L].unitType),M=o(s).rootPropertyValueCache[F]):x.Hooks.registered[L]?V===r?(M=x.getPropertyValue(s,F),V=x.getPropertyValue(s,L,M)):M=x.Hooks.templates[F][1]:V===r&&(V=x.getPropertyValue(s,L));var $,W,U,z=!1;$=l(L,V),V=$[0],U=$[1],$=l(L,D),D=$[0].replace(/^([+-\/*])=/,function(e,t){return z=t,""}),W=$[1],V=parseFloat(V)||0,D=parseFloat(D)||0;var X;if("%"===W&&(/^(fontSize|lineHeight)$/.test(L)?(D/=100,W="em"):/^scale/.test(L)?(D/=100,W=""):/(Red|Green|Blue)$/i.test(L)&&(D=D/100*255,W="")),/[\/*]/.test(z))W=U;else if(U!==W&&0!==V)if(0===D)W=U;else{X=X||f();var G=/margin|padding|left|right|width|text|word|letter/i.test(L)||/X$/.test(L)?"x":"y";switch(U){case"%":V*="x"===G?X.percentToPxRatioWidth:X.percentToPxRatioHeight;break;case"px":break;default:V*=X[U+"ToPx"]}switch(W){case"%":V*=1/("x"===G?X.percentToPxRatioWidth:X.percentToPxRatioHeight);break;case"px":break;default:V*=1/X[W+"ToPx"]}}switch(z){case"+":D=V+D;break;case"-":D=V-D;break;case"*":D=V*D;break;case"/":D=V/D}p[L]={rootPropertyValue:M,startValue:V,currentValue:V,endValue:D,unitType:W,easing:I},v.debug&&console.log("tweensContainer ("+L+"): "+JSON.stringify(p[L]),s)}else v.debug&&console.log("Skipping ["+F+"] due to a lack of browser support.")}p.element=s}p.element&&(x.Values.addClass(s,"velocity-animating"),R.push(p),o(s).tweensContainer=p,o(s).opts=u,o(s).isAnimating=!0,T===C-1?(v.State.calls.length>1e4&&(v.State.calls=i(v.State.calls)),v.State.calls.push([R,b,u,null,N.resolver]),v.State.isTicking===!1&&(v.State.isTicking=!0,c())):T++)}var s=this,u=y.extend({},v.defaults,k),p={};if(o(s)===r&&y.data(s,l,{isSVG:m.isSVG(s),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}}),parseFloat(u.delay)&&u.queue!==!1&&y.queue(s,u.queue,function(e){v.velocityQueueEntryFlag=!0,o(s).delayTimer={setTimeout:setTimeout(e,parseFloat(u.delay)),next:e}}),v.mock===!0)u.duration=1;else switch(u.duration.toString().toLowerCase()){case"fast":u.duration=200;break;case"normal":u.duration=f;break;case"slow":u.duration=600;break;default:u.duration=parseFloat(u.duration)||1}u.easing=a(u.easing,u.duration),u.begin&&!m.isFunction(u.begin)&&(u.begin=null),u.progress&&!m.isFunction(u.progress)&&(u.progress=null),u.complete&&!m.isFunction(u.complete)&&(u.complete=null),u.display&&(u.display=u.display.toString().toLowerCase(),"auto"===u.display&&(u.display=v.CSS.Values.getDisplayType(s))),u.visibility&&(u.visibility=u.visibility.toString().toLowerCase()),u.mobileHA=u.mobileHA&&v.State.isMobile&&!v.State.isGingerbread,u.queue===!1?u.delay?setTimeout(e,u.delay):e():y.queue(s,u.queue,function(t,n){return n===!0?(N.promise&&N.resolver(b),!0):(v.velocityQueueEntryFlag=!0,void e(t))}),""!==u.queue&&"fx"!==u.queue||"inprogress"===y.queue(s)[0]||y.dequeue(s)}var p,d,g,b,w,k,S=arguments[0]&&(y.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||m.isString(arguments[0].properties));if(m.isWrapped(this)?(p=!1,g=0,b=this,d=this):(p=!0,g=1,b=S?arguments[0].elements:arguments[0]),b=m.isWrapped(b)?[].slice.call(b):b){S?(w=arguments[0].properties,k=arguments[0].options):(w=arguments[g],k=arguments[g+1]);var C=m.isArray(b)||m.isNodeList(b)?b.length:1,T=0;if("stop"!==w&&!y.isPlainObject(k)){var A=g+1;k={};for(var E=A;E<arguments.length;E++)!m.isArray(arguments[E])&&/^\d/.test(arguments[E])?k.duration=parseFloat(arguments[E]):m.isString(arguments[E])||m.isArray(arguments[E])?k.easing=arguments[E]:m.isFunction(arguments[E])&&(k.complete=arguments[E])}var N={promise:null,resolver:null,rejecter:null};p&&v.Promise&&(N.promise=new v.Promise(function(e,t){N.resolver=e,N.rejecter=t}));var P;switch(w){case"scroll":P="scroll";break;case"reverse":P="reverse";break;case"stop":y.each(m.isNode(b)?[b]:b,function(e,t){o(t)&&o(t).delayTimer&&(clearTimeout(o(t).delayTimer.setTimeout),o(t).delayTimer.next&&o(t).delayTimer.next(),delete o(t).delayTimer)});var j=[];return y.each(v.State.calls,function(e,t){t&&y.each(m.isNode(t[1])?[t[1]]:t[1],function(t,n){y.each(m.isNode(b)?[b]:b,function(t,r){if(r===n){if(o(r)&&y.each(o(r).tweensContainer,function(e,t){t.endValue=t.currentValue}),k===!0||m.isString(k)){var i=m.isString(k)?k:"";y.each(y.queue(r,i),function(e,t){m.isFunction(t)&&t(null,!0)}),y.queue(r,i,[])}j.push(e)}})})}),y.each(j,function(e,t){u(t,!0)}),N.promise&&N.resolver(b),e();default:if(!y.isPlainObject(w)||m.isEmptyObject(w)){if(m.isString(w)&&v.Sequences[w]){var _=k.duration,B=k.delay||0;return k.backwards===!0&&(b=(b.jquery?[].slice.call(b):b).reverse()),y.each(b,function(e,t){parseFloat(k.stagger)?k.delay=B+parseFloat(k.stagger)*e:m.isFunction(k.stagger)&&(k.delay=B+k.stagger.call(t,e,C)),k.drag&&(k.duration=parseFloat(_)||(/^(callout|transition)/.test(w)?1e3:f),k.duration=Math.max(k.duration*(k.backwards?1-e/C:(e+1)/C),.75*k.duration,200)),v.Sequences[w].call(t,t,k||{},e,C,b,N.promise?N:r)}),e()}var O="Velocity: First argument ("+w+") was not a property map, a known action, or a registered sequence. Aborting.";return N.promise?N.rejecter(new Error(O)):console.log(O),e()}P="start"}var q={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},R=[];y.each(m.isNode(b)?[b]:b,function(e,t){m.isNode(t)&&s.call(t)});var L,H=y.extend({},v.defaults,k);if(H.loop=parseInt(H.loop),L=2*H.loop-1,H.loop)for(var D=0;L>D;D++){var I={delay:H.delay};D===L-1&&(I.display=H.display,I.visibility=H.visibility,I.complete=H.complete),v.animate(b,"reverse",I)}return e()}};var k=t.jQuery||t.Zepto;k&&(k.fn.velocity=v.animate,k.fn.velocity.defaults=v.defaults),"undefined"!=typeof define&&define.amd?define("velocity",[],function(){return v}):"undefined"!=typeof module&&module.exports&&(module.exports=v),y.each(["Down","Up"],function(e,t){v.Sequences["slide"+t]=function(e,n,r,i,o,s){var a=y.extend({},n),c={height:null,marginTop:null,marginBottom:null,paddingTop:null,paddingBottom:null,overflow:null,overflowX:null,overflowY:null},u=a.begin,l=a.complete,f=!1;null!==a.display&&(a.display="Down"===t?a.display||"auto":a.display||"none"),a.begin=function(){function n(){c.height=parseFloat(v.CSS.getPropertyValue(e,"height")),e.style.height="auto",parseFloat(v.CSS.getPropertyValue(e,"height"))===c.height&&(f=!0),v.CSS.setPropertyValue(e,"height",c.height+"px")}if("Down"===t){c.overflow=[v.CSS.getPropertyValue(e,"overflow"),0],c.overflowX=[v.CSS.getPropertyValue(e,"overflowX"),0],c.overflowY=[v.CSS.getPropertyValue(e,"overflowY"),0],e.style.overflow="hidden",e.style.overflowX="visible",e.style.overflowY="hidden",n();for(var r in c)if(!/^overflow/.test(r)){var i=v.CSS.getPropertyValue(e,r);"height"===r&&(i=parseFloat(i)),c[r]=[i,0]}}else{n();for(var r in c){var i=v.CSS.getPropertyValue(e,r);"height"===r&&(i=parseFloat(i)),c[r]=[0,i]}e.style.overflow="hidden",e.style.overflowX="visible",e.style.overflowY="hidden"}u&&u.call(e,e)},a.complete=function(e){var n="Down"===t?0:1;f===!0?c.height[n]="auto":c.height[n]+="px";for(var r in c)e.style[r]=c[r][n];l&&l.call(e,e),s&&s.resolver(o||e)},v.animate(e,c,a)}}),y.each(["In","Out"],function(e,t){v.Sequences["fade"+t]=function(e,n,r,i,o,s){var a=y.extend({},n),c={opacity:"In"===t?1:0};if(r!==i-1)a.complete=a.begin=null;else{var u=a.complete;a.complete=function(){u&&u.call(e,e),s&&s.resolver(o||e)}}null!==a.display&&(a.display=a.display||("In"===t?"auto":"none")),v.animate(this,c,a)}})}(window.jQuery||window.Zepto||window,window,document),//     Underscore.js 1.6.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
function(){// Baseline setup
// --------------
// Establish the root object, `window` in the browser, or `exports` on the server.
var e=this,t=e._,n={},r=Array.prototype,i=Object.prototype,o=Function.prototype,s=r.push,a=r.slice,c=r.concat,u=i.toString,l=i.hasOwnProperty,f=r.forEach,p=r.map,h=r.reduce,d=r.reduceRight,g=r.filter,m=r.every,y=r.some,v=r.indexOf,b=r.lastIndexOf,w=Array.isArray,x=Object.keys,k=o.bind,S=function(e){return e instanceof S?e:this instanceof S?void(this._wrapped=e):new S(e)};// Export the Underscore object for **Node.js**, with
// backwards-compatibility for the old `require()` API. If we're in
// the browser, add `_` as a global object via a string identifier,
// for Closure Compiler "advanced" mode.
"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=S),exports._=S):e._=S,// Current version.
S.VERSION="1.6.0";// Collection Functions
// --------------------
// The cornerstone, an `each` implementation, aka `forEach`.
// Handles objects with the built-in `forEach`, arrays, and raw objects.
// Delegates to **ECMAScript 5**'s native `forEach` if available.
var C=S.each=S.forEach=function(e,t,r){if(null==e)return e;if(f&&e.forEach===f)e.forEach(t,r);else if(e.length===+e.length){for(var i=0,o=e.length;o>i;i++)if(t.call(r,e[i],i,e)===n)return}else for(var s=S.keys(e),i=0,o=s.length;o>i;i++)if(t.call(r,e[s[i]],s[i],e)===n)return;return e};// Return the results of applying the iterator to each element.
// Delegates to **ECMAScript 5**'s native `map` if available.
S.map=S.collect=function(e,t,n){var r=[];return null==e?r:p&&e.map===p?e.map(t,n):(C(e,function(e,i,o){r.push(t.call(n,e,i,o))}),r)};var T="Reduce of empty array with no initial value";// **Reduce** builds up a single result from a list of values, aka `inject`,
// or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
S.reduce=S.foldl=S.inject=function(e,t,n,r){var i=arguments.length>2;if(null==e&&(e=[]),h&&e.reduce===h)return r&&(t=S.bind(t,r)),i?e.reduce(t,n):e.reduce(t);if(C(e,function(e,o,s){i?n=t.call(r,n,e,o,s):(n=e,i=!0)}),!i)throw new TypeError(T);return n},// The right-associative version of reduce, also known as `foldr`.
// Delegates to **ECMAScript 5**'s native `reduceRight` if available.
S.reduceRight=S.foldr=function(e,t,n,r){var i=arguments.length>2;if(null==e&&(e=[]),d&&e.reduceRight===d)return r&&(t=S.bind(t,r)),i?e.reduceRight(t,n):e.reduceRight(t);var o=e.length;if(o!==+o){var s=S.keys(e);o=s.length}if(C(e,function(a,c,u){c=s?s[--o]:--o,i?n=t.call(r,n,e[c],c,u):(n=e[c],i=!0)}),!i)throw new TypeError(T);return n},// Return the first value which passes a truth test. Aliased as `detect`.
S.find=S.detect=function(e,t,n){var r;return A(e,function(e,i,o){return t.call(n,e,i,o)?(r=e,!0):void 0}),r},// Return all the elements that pass a truth test.
// Delegates to **ECMAScript 5**'s native `filter` if available.
// Aliased as `select`.
S.filter=S.select=function(e,t,n){var r=[];return null==e?r:g&&e.filter===g?e.filter(t,n):(C(e,function(e,i,o){t.call(n,e,i,o)&&r.push(e)}),r)},// Return all the elements for which a truth test fails.
S.reject=function(e,t,n){return S.filter(e,function(e,r,i){return!t.call(n,e,r,i)},n)},// Determine whether all of the elements match a truth test.
// Delegates to **ECMAScript 5**'s native `every` if available.
// Aliased as `all`.
S.every=S.all=function(e,t,r){t||(t=S.identity);var i=!0;return null==e?i:m&&e.every===m?e.every(t,r):(C(e,function(e,o,s){return(i=i&&t.call(r,e,o,s))?void 0:n}),!!i)};// Determine if at least one element in the object matches a truth test.
// Delegates to **ECMAScript 5**'s native `some` if available.
// Aliased as `any`.
var A=S.some=S.any=function(e,t,r){t||(t=S.identity);var i=!1;return null==e?i:y&&e.some===y?e.some(t,r):(C(e,function(e,o,s){return i||(i=t.call(r,e,o,s))?n:void 0}),!!i)};// Determine if the array or object contains a given value (using `===`).
// Aliased as `include`.
S.contains=S.include=function(e,t){return null==e?!1:v&&e.indexOf===v?-1!=e.indexOf(t):A(e,function(e){return e===t})},// Invoke a method (with arguments) on every item in a collection.
S.invoke=function(e,t){var n=a.call(arguments,2),r=S.isFunction(t);return S.map(e,function(e){return(r?t:e[t]).apply(e,n)})},// Convenience version of a common use case of `map`: fetching a property.
S.pluck=function(e,t){return S.map(e,S.property(t))},// Convenience version of a common use case of `filter`: selecting only objects
// containing specific `key:value` pairs.
S.where=function(e,t){return S.filter(e,S.matches(t))},// Convenience version of a common use case of `find`: getting the first object
// containing specific `key:value` pairs.
S.findWhere=function(e,t){return S.find(e,S.matches(t))},// Return the maximum element or (element-based computation).
// Can't optimize arrays of integers longer than 65,535 elements.
// See [WebKit Bug 80797](https://bugs.webkit.org/show_bug.cgi?id=80797)
S.max=function(e,t,n){if(!t&&S.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.max.apply(Math,e);var r=-1/0,i=-1/0;return C(e,function(e,o,s){var a=t?t.call(n,e,o,s):e;a>i&&(r=e,i=a)}),r},// Return the minimum element (or element-based computation).
S.min=function(e,t,n){if(!t&&S.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.min.apply(Math,e);var r=1/0,i=1/0;return C(e,function(e,o,s){var a=t?t.call(n,e,o,s):e;i>a&&(r=e,i=a)}),r},// Shuffle an array, using the modern version of the
// [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
S.shuffle=function(e){var t,n=0,r=[];return C(e,function(e){t=S.random(n++),r[n-1]=r[t],r[t]=e}),r},// Sample **n** random values from a collection.
// If **n** is not specified, returns a single random element.
// The internal `guard` argument allows it to work with `map`.
S.sample=function(e,t,n){return null==t||n?(e.length!==+e.length&&(e=S.values(e)),e[S.random(e.length-1)]):S.shuffle(e).slice(0,Math.max(0,t))};// An internal function to generate lookup iterators.
var E=function(e){return null==e?S.identity:S.isFunction(e)?e:S.property(e)};// Sort the object's values by a criterion produced by an iterator.
S.sortBy=function(e,t,n){return t=E(t),S.pluck(S.map(e,function(e,r,i){return{value:e,index:r,criteria:t.call(n,e,r,i)}}).sort(function(e,t){var n=e.criteria,r=t.criteria;if(n!==r){if(n>r||void 0===n)return 1;if(r>n||void 0===r)return-1}return e.index-t.index}),"value")};// An internal function used for aggregate "group by" operations.
var N=function(e){return function(t,n,r){var i={};return n=E(n),C(t,function(o,s){var a=n.call(r,o,s,t);e(i,a,o)}),i}};// Groups the object's values by a criterion. Pass either a string attribute
// to group by, or a function that returns the criterion.
S.groupBy=N(function(e,t,n){S.has(e,t)?e[t].push(n):e[t]=[n]}),// Indexes the object's values by a criterion, similar to `groupBy`, but for
// when you know that your index values will be unique.
S.indexBy=N(function(e,t,n){e[t]=n}),// Counts instances of an object that group by a certain criterion. Pass
// either a string attribute to count by, or a function that returns the
// criterion.
S.countBy=N(function(e,t){S.has(e,t)?e[t]++:e[t]=1}),// Use a comparator function to figure out the smallest index at which
// an object should be inserted so as to maintain order. Uses binary search.
S.sortedIndex=function(e,t,n,r){n=E(n);for(var i=n.call(r,t),o=0,s=e.length;s>o;){var a=o+s>>>1;n.call(r,e[a])<i?o=a+1:s=a}return o},// Safely create a real, live array from anything iterable.
S.toArray=function(e){return e?S.isArray(e)?a.call(e):e.length===+e.length?S.map(e,S.identity):S.values(e):[]},// Return the number of elements in an object.
S.size=function(e){return null==e?0:e.length===+e.length?e.length:S.keys(e).length},// Array Functions
// ---------------
// Get the first element of an array. Passing **n** will return the first N
// values in the array. Aliased as `head` and `take`. The **guard** check
// allows it to work with `_.map`.
S.first=S.head=S.take=function(e,t,n){return null==e?void 0:null==t||n?e[0]:0>t?[]:a.call(e,0,t)},// Returns everything but the last entry of the array. Especially useful on
// the arguments object. Passing **n** will return all the values in
// the array, excluding the last N. The **guard** check allows it to work with
// `_.map`.
S.initial=function(e,t,n){return a.call(e,0,e.length-(null==t||n?1:t))},// Get the last element of an array. Passing **n** will return the last N
// values in the array. The **guard** check allows it to work with `_.map`.
S.last=function(e,t,n){return null==e?void 0:null==t||n?e[e.length-1]:a.call(e,Math.max(e.length-t,0))},// Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
// Especially useful on the arguments object. Passing an **n** will return
// the rest N values in the array. The **guard**
// check allows it to work with `_.map`.
S.rest=S.tail=S.drop=function(e,t,n){return a.call(e,null==t||n?1:t)},// Trim out all falsy values from an array.
S.compact=function(e){return S.filter(e,S.identity)};// Internal implementation of a recursive `flatten` function.
var P=function(e,t,n){return t&&S.every(e,S.isArray)?c.apply(n,e):(C(e,function(e){S.isArray(e)||S.isArguments(e)?t?s.apply(n,e):P(e,t,n):n.push(e)}),n)};// Flatten out an array, either recursively (by default), or just one level.
S.flatten=function(e,t){return P(e,t,[])},// Return a version of the array that does not contain the specified value(s).
S.without=function(e){return S.difference(e,a.call(arguments,1))},// Split an array into two arrays: one whose elements all satisfy the given
// predicate, and one whose elements all do not satisfy the predicate.
S.partition=function(e,t){var n=[],r=[];return C(e,function(e){(t(e)?n:r).push(e)}),[n,r]},// Produce a duplicate-free version of the array. If the array has already
// been sorted, you have the option of using a faster algorithm.
// Aliased as `unique`.
S.uniq=S.unique=function(e,t,n,r){S.isFunction(t)&&(r=n,n=t,t=!1);var i=n?S.map(e,n,r):e,o=[],s=[];return C(i,function(n,r){(t?r&&s[s.length-1]===n:S.contains(s,n))||(s.push(n),o.push(e[r]))}),o},// Produce an array that contains the union: each distinct element from all of
// the passed-in arrays.
S.union=function(){return S.uniq(S.flatten(arguments,!0))},// Produce an array that contains every item shared between all the
// passed-in arrays.
S.intersection=function(e){var t=a.call(arguments,1);return S.filter(S.uniq(e),function(e){return S.every(t,function(t){return S.contains(t,e)})})},// Take the difference between one array and a number of other arrays.
// Only the elements present in just the first array will remain.
S.difference=function(e){var t=c.apply(r,a.call(arguments,1));return S.filter(e,function(e){return!S.contains(t,e)})},// Zip together multiple lists into a single array -- elements that share
// an index go together.
S.zip=function(){for(var e=S.max(S.pluck(arguments,"length").concat(0)),t=new Array(e),n=0;e>n;n++)t[n]=S.pluck(arguments,""+n);return t},// Converts lists into objects. Pass either a single array of `[key, value]`
// pairs, or two parallel arrays of the same length -- one of keys, and one of
// the corresponding values.
S.object=function(e,t){if(null==e)return{};for(var n={},r=0,i=e.length;i>r;r++)t?n[e[r]]=t[r]:n[e[r][0]]=e[r][1];return n},// If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
// we need this function. Return the position of the first occurrence of an
// item in an array, or -1 if the item is not included in the array.
// Delegates to **ECMAScript 5**'s native `indexOf` if available.
// If the array is large and already in sort order, pass `true`
// for **isSorted** to use binary search.
S.indexOf=function(e,t,n){if(null==e)return-1;var r=0,i=e.length;if(n){if("number"!=typeof n)return r=S.sortedIndex(e,t),e[r]===t?r:-1;r=0>n?Math.max(0,i+n):n}if(v&&e.indexOf===v)return e.indexOf(t,n);for(;i>r;r++)if(e[r]===t)return r;return-1},// Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
S.lastIndexOf=function(e,t,n){if(null==e)return-1;var r=null!=n;if(b&&e.lastIndexOf===b)return r?e.lastIndexOf(t,n):e.lastIndexOf(t);for(var i=r?n:e.length;i--;)if(e[i]===t)return i;return-1},// Generate an integer Array containing an arithmetic progression. A port of
// the native Python `range()` function. See
// [the Python documentation](http://docs.python.org/library/functions.html#range).
S.range=function(e,t,n){arguments.length<=1&&(t=e||0,e=0),n=arguments[2]||1;for(var r=Math.max(Math.ceil((t-e)/n),0),i=0,o=new Array(r);r>i;)o[i++]=e,e+=n;return o};// Function (ahem) Functions
// ------------------
// Reusable constructor function for prototype setting.
var j=function(){};// Create a function bound to a given object (assigning `this`, and arguments,
// optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
// available.
S.bind=function(e,t){var n,r;if(k&&e.bind===k)return k.apply(e,a.call(arguments,1));if(!S.isFunction(e))throw new TypeError;return n=a.call(arguments,2),r=function(){if(!(this instanceof r))return e.apply(t,n.concat(a.call(arguments)));j.prototype=e.prototype;var i=new j;j.prototype=null;var o=e.apply(i,n.concat(a.call(arguments)));return Object(o)===o?o:i}},// Partially apply a function by creating a version that has had some of its
// arguments pre-filled, without changing its dynamic `this` context. _ acts
// as a placeholder, allowing any combination of arguments to be pre-filled.
S.partial=function(e){var t=a.call(arguments,1);return function(){for(var n=0,r=t.slice(),i=0,o=r.length;o>i;i++)r[i]===S&&(r[i]=arguments[n++]);for(;n<arguments.length;)r.push(arguments[n++]);return e.apply(this,r)}},// Bind a number of an object's methods to that object. Remaining arguments
// are the method names to be bound. Useful for ensuring that all callbacks
// defined on an object belong to it.
S.bindAll=function(e){var t=a.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return C(t,function(t){e[t]=S.bind(e[t],e)}),e},// Memoize an expensive function by storing its results.
S.memoize=function(e,t){var n={};return t||(t=S.identity),function(){var r=t.apply(this,arguments);return S.has(n,r)?n[r]:n[r]=e.apply(this,arguments)}},// Delays a function for the given number of milliseconds, and then calls
// it with the arguments supplied.
S.delay=function(e,t){var n=a.call(arguments,2);return setTimeout(function(){return e.apply(null,n)},t)},// Defers a function, scheduling it to run after the current call stack has
// cleared.
S.defer=function(e){return S.delay.apply(S,[e,1].concat(a.call(arguments,1)))},// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.
S.throttle=function(e,t,n){var r,i,o,s=null,a=0;n||(n={});var c=function(){a=n.leading===!1?0:S.now(),s=null,o=e.apply(r,i),r=i=null};return function(){var u=S.now();a||n.leading!==!1||(a=u);var l=t-(u-a);return r=this,i=arguments,0>=l?(clearTimeout(s),s=null,a=u,o=e.apply(r,i),r=i=null):s||n.trailing===!1||(s=setTimeout(c,l)),o}},// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
S.debounce=function(e,t,n){var r,i,o,s,a,c=function(){var u=S.now()-s;t>u?r=setTimeout(c,t-u):(r=null,n||(a=e.apply(o,i),o=i=null))};return function(){o=this,i=arguments,s=S.now();var u=n&&!r;return r||(r=setTimeout(c,t)),u&&(a=e.apply(o,i),o=i=null),a}},// Returns a function that will be executed at most one time, no matter how
// often you call it. Useful for lazy initialization.
S.once=function(e){var t,n=!1;return function(){return n?t:(n=!0,t=e.apply(this,arguments),e=null,t)}},// Returns the first function passed as an argument to the second,
// allowing you to adjust arguments, run code before and after, and
// conditionally execute the original function.
S.wrap=function(e,t){return S.partial(t,e)},// Returns a function that is the composition of a list of functions, each
// consuming the return value of the function that follows.
S.compose=function(){var e=arguments;return function(){for(var t=arguments,n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},// Returns a function that will only be executed after being called N times.
S.after=function(e,t){return function(){return--e<1?t.apply(this,arguments):void 0}},// Object Functions
// ----------------
// Retrieve the names of an object's properties.
// Delegates to **ECMAScript 5**'s native `Object.keys`
S.keys=function(e){if(!S.isObject(e))return[];if(x)return x(e);var t=[];for(var n in e)S.has(e,n)&&t.push(n);return t},// Retrieve the values of an object's properties.
S.values=function(e){for(var t=S.keys(e),n=t.length,r=new Array(n),i=0;n>i;i++)r[i]=e[t[i]];return r},// Convert an object into a list of `[key, value]` pairs.
S.pairs=function(e){for(var t=S.keys(e),n=t.length,r=new Array(n),i=0;n>i;i++)r[i]=[t[i],e[t[i]]];return r},// Invert the keys and values of an object. The values must be serializable.
S.invert=function(e){for(var t={},n=S.keys(e),r=0,i=n.length;i>r;r++)t[e[n[r]]]=n[r];return t},// Return a sorted list of the function names available on the object.
// Aliased as `methods`
S.functions=S.methods=function(e){var t=[];for(var n in e)S.isFunction(e[n])&&t.push(n);return t.sort()},// Extend a given object with all the properties in passed-in object(s).
S.extend=function(e){return C(a.call(arguments,1),function(t){if(t)for(var n in t)e[n]=t[n]}),e},// Return a copy of the object only containing the whitelisted properties.
S.pick=function(e){var t={},n=c.apply(r,a.call(arguments,1));return C(n,function(n){n in e&&(t[n]=e[n])}),t},// Return a copy of the object without the blacklisted properties.
S.omit=function(e){var t={},n=c.apply(r,a.call(arguments,1));for(var i in e)S.contains(n,i)||(t[i]=e[i]);return t},// Fill in a given object with default properties.
S.defaults=function(e){return C(a.call(arguments,1),function(t){if(t)for(var n in t)void 0===e[n]&&(e[n]=t[n])}),e},// Create a (shallow-cloned) duplicate of an object.
S.clone=function(e){return S.isObject(e)?S.isArray(e)?e.slice():S.extend({},e):e},// Invokes interceptor with the obj, and then returns obj.
// The primary purpose of this method is to "tap into" a method chain, in
// order to perform operations on intermediate results within the chain.
S.tap=function(e,t){return t(e),e};// Internal recursive comparison function for `isEqual`.
var _=function(e,t,n,r){// Identical objects are equal. `0 === -0`, but they aren't identical.
// See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
if(e===t)return 0!==e||1/e==1/t;// A strict comparison is necessary because `null == undefined`.
if(null==e||null==t)return e===t;// Unwrap any wrapped objects.
e instanceof S&&(e=e._wrapped),t instanceof S&&(t=t._wrapped);// Compare `[[Class]]` names.
var i=u.call(e);if(i!=u.call(t))return!1;switch(i){// Strings, numbers, dates, and booleans are compared by value.
case"[object String]":// Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
// equivalent to `new String("5")`.
return e==String(t);case"[object Number]":// `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
// other numeric values.
return e!=+e?t!=+t:0==e?1/e==1/t:e==+t;case"[object Date]":case"[object Boolean]":// Coerce dates and booleans to numeric primitive values. Dates are compared by their
// millisecond representations. Note that invalid dates with millisecond representations
// of `NaN` are not equivalent.
return+e==+t;// RegExps are compared by their source patterns and flags.
case"[object RegExp]":return e.source==t.source&&e.global==t.global&&e.multiline==t.multiline&&e.ignoreCase==t.ignoreCase}if("object"!=typeof e||"object"!=typeof t)return!1;for(// Assume equality for cyclic structures. The algorithm for detecting cyclic
// structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
var o=n.length;o--;)// Linear search. Performance is inversely proportional to the number of
// unique nested structures.
if(n[o]==e)return r[o]==t;// Objects with different constructors are not equivalent, but `Object`s
// from different frames are.
var s=e.constructor,a=t.constructor;if(s!==a&&!(S.isFunction(s)&&s instanceof s&&S.isFunction(a)&&a instanceof a)&&"constructor"in e&&"constructor"in t)return!1;// Add the first object to the stack of traversed objects.
n.push(e),r.push(t);var c=0,l=!0;// Recursively compare objects and arrays.
if("[object Array]"==i){if(// Compare array lengths to determine if a deep comparison is necessary.
c=e.length,l=c==t.length)// Deep compare the contents, ignoring non-numeric properties.
for(;c--&&(l=_(e[c],t[c],n,r)););}else{// Deep compare objects.
for(var f in e)if(S.has(e,f)&&(// Count the expected number of properties.
c++,!(l=S.has(t,f)&&_(e[f],t[f],n,r))))break;// Ensure that both objects contain the same number of properties.
if(l){for(f in t)if(S.has(t,f)&&!c--)break;l=!c}}// Remove the first object from the stack of traversed objects.
return n.pop(),r.pop(),l};// Perform a deep comparison to check if two objects are equal.
S.isEqual=function(e,t){return _(e,t,[],[])},// Is a given array, string, or object empty?
// An "empty" object has no enumerable own-properties.
S.isEmpty=function(e){if(null==e)return!0;if(S.isArray(e)||S.isString(e))return 0===e.length;for(var t in e)if(S.has(e,t))return!1;return!0},// Is a given value a DOM element?
S.isElement=function(e){return!(!e||1!==e.nodeType)},// Is a given value an array?
// Delegates to ECMA5's native Array.isArray
S.isArray=w||function(e){return"[object Array]"==u.call(e)},// Is a given variable an object?
S.isObject=function(e){return e===Object(e)},// Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
C(["Arguments","Function","String","Number","Date","RegExp"],function(e){S["is"+e]=function(t){return u.call(t)=="[object "+e+"]"}}),// Define a fallback version of the method in browsers (ahem, IE), where
// there isn't any inspectable "Arguments" type.
S.isArguments(arguments)||(S.isArguments=function(e){return!(!e||!S.has(e,"callee"))}),// Optimize `isFunction` if appropriate.
"function"!=typeof/./&&(S.isFunction=function(e){return"function"==typeof e}),// Is a given object a finite number?
S.isFinite=function(e){return isFinite(e)&&!isNaN(parseFloat(e))},// Is the given value `NaN`? (NaN is the only number which does not equal itself).
S.isNaN=function(e){return S.isNumber(e)&&e!=+e},// Is a given value a boolean?
S.isBoolean=function(e){return e===!0||e===!1||"[object Boolean]"==u.call(e)},// Is a given value equal to null?
S.isNull=function(e){return null===e},// Is a given variable undefined?
S.isUndefined=function(e){return void 0===e},// Shortcut function for checking if an object has a given property directly
// on itself (in other words, not on a prototype).
S.has=function(e,t){return l.call(e,t)},// Utility Functions
// -----------------
// Run Underscore.js in *noConflict* mode, returning the `_` variable to its
// previous owner. Returns a reference to the Underscore object.
S.noConflict=function(){return e._=t,this},// Keep the identity function around for default iterators.
S.identity=function(e){return e},S.constant=function(e){return function(){return e}},S.property=function(e){return function(t){return t[e]}},// Returns a predicate for checking whether an object has a given set of `key:value` pairs.
S.matches=function(e){return function(t){if(t===e)return!0;//avoid comparing an object to itself.
for(var n in e)if(e[n]!==t[n])return!1;return!0}},// Run a function **n** times.
S.times=function(e,t,n){for(var r=Array(Math.max(0,e)),i=0;e>i;i++)r[i]=t.call(n,i);return r},// Return a random integer between min and max (inclusive).
S.random=function(e,t){return null==t&&(t=e,e=0),e+Math.floor(Math.random()*(t-e+1))},// A (possibly faster) way to get the current timestamp as an integer.
S.now=Date.now||function(){return(new Date).getTime()};// List of HTML entities for escaping.
var B={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};B.unescape=S.invert(B.escape);// Regexes containing the keys and values listed immediately above.
var O={escape:new RegExp("["+S.keys(B.escape).join("")+"]","g"),unescape:new RegExp("("+S.keys(B.unescape).join("|")+")","g")};// Functions for escaping and unescaping strings to/from HTML interpolation.
S.each(["escape","unescape"],function(e){S[e]=function(t){return null==t?"":(""+t).replace(O[e],function(t){return B[e][t]})}}),// If the value of the named `property` is a function then invoke it with the
// `object` as context; otherwise, return it.
S.result=function(e,t){if(null==e)return void 0;var n=e[t];return S.isFunction(n)?n.call(e):n},// Add your own custom functions to the Underscore object.
S.mixin=function(e){C(S.functions(e),function(t){var n=S[t]=e[t];S.prototype[t]=function(){var e=[this._wrapped];return s.apply(e,arguments),D.call(this,n.apply(S,e))}})};// Generate a unique integer id (unique within the entire client session).
// Useful for temporary DOM ids.
var q=0;S.uniqueId=function(e){var t=++q+"";return e?e+t:t},// By default, Underscore uses ERB-style template delimiters, change the
// following template settings to use alternative delimiters.
S.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};// When customizing `templateSettings`, if you don't want to define an
// interpolation, evaluation or escaping regex, we need one that is
// guaranteed not to match.
var R=/(.)^/,L={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},H=/\\|'|\r|\n|\t|\u2028|\u2029/g;// JavaScript micro-templating, similar to John Resig's implementation.
// Underscore templating handles arbitrary delimiters, preserves whitespace,
// and correctly escapes quotes within interpolated code.
S.template=function(e,t,n){var r;n=S.defaults({},n,S.templateSettings);// Combine delimiters into one regular expression via alternation.
var i=new RegExp([(n.escape||R).source,(n.interpolate||R).source,(n.evaluate||R).source].join("|")+"|$","g"),o=0,s="__p+='";e.replace(i,function(t,n,r,i,a){return s+=e.slice(o,a).replace(H,function(e){return"\\"+L[e]}),n&&(s+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'"),r&&(s+="'+\n((__t=("+r+"))==null?'':__t)+\n'"),i&&(s+="';\n"+i+"\n__p+='"),o=a+t.length,t}),s+="';\n",// If a variable is not specified, place data values in local scope.
n.variable||(s="with(obj||{}){\n"+s+"}\n"),s="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+s+"return __p;\n";try{r=new Function(n.variable||"obj","_",s)}catch(a){throw a.source=s,a}if(t)return r(t,S);var c=function(e){return r.call(this,e,S)};// Provide the compiled function source as a convenience for precompilation.
return c.source="function("+(n.variable||"obj")+"){\n"+s+"}",c},// Add a "chain" function, which will delegate to the wrapper.
S.chain=function(e){return S(e).chain()};// OOP
// ---------------
// If Underscore is called as a function, it returns a wrapped object that
// can be used OO-style. This wrapper holds altered versions of all the
// underscore functions. Wrapped objects may be chained.
// Helper function to continue chaining intermediate results.
var D=function(e){return this._chain?S(e).chain():e};// Add all of the Underscore functions to the wrapper object.
S.mixin(S),// Add all mutator Array functions to the wrapper.
C(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=r[e];S.prototype[e]=function(){var n=this._wrapped;return t.apply(n,arguments),"shift"!=e&&"splice"!=e||0!==n.length||delete n[0],D.call(this,n)}}),// Add all accessor Array functions to the wrapper.
C(["concat","join","slice"],function(e){var t=r[e];S.prototype[e]=function(){return D.call(this,t.apply(this._wrapped,arguments))}}),S.extend(S.prototype,{// Start chaining a wrapped Underscore object.
chain:function(){return this._chain=!0,this},// Extracts the result from a wrapped and chained object.
value:function(){return this._wrapped}}),// AMD registration happens at the end for compatibility with AMD loaders
// that may not enforce next-turn semantics on modules. Even though general
// practice for AMD registration is to be anonymous, underscore registers
// as a named module because, like jQuery, it is a base library that is
// popular enough to be bundled in a third party lib, but not be part of
// an AMD load request. Those cases could generate an error when an
// anonymous define() is called outside of a loader request.
"function"==typeof define&&define.amd&&define("underscore",[],function(){return S})}.call(this),define("js/constant",[],function(){return{SHOW_WAITING:"waiting",SHOW_PLAYING:"playing",SHOW_SCORE:"score",SHOW_FINISHED:"finished",MAGICIAN_WAITING:"waiting",MAGICIAN_PLAYING:"playing",MAGICIAN_SCORE:"score",MAGICIAN_FINISHED:"finished",scores:{ACE:1,THREE:3,FIVE:5,SEVEN:7,NINE:9,JACK:11,KING:13},score:function(e){for(var t=Object.keys(this.scores),n=0;n<t.length;n++){var r=t[n];if(this.scores[r]===e)return r.toLowerCase()}},reverseScore:function(e){return this.scores[e.toUpperCase()]}}}),//     Backbone.js 1.1.2
//     (c) 2010-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org
function(e,t){// Set up Backbone appropriately for the environment. Start with AMD.
if("function"==typeof define&&define.amd)define("backbone",["underscore","jquery","exports"],function(n,r,i){// Export global even in AMD case in case this script is loaded with
// others that may still expect a global Backbone.
e.Backbone=t(e,i,n,r)});else if("undefined"!=typeof exports){var n=require("underscore");t(e,exports,n)}else e.Backbone=t(e,{},e._,e.jQuery||e.Zepto||e.ender||e.$)}(this,function(e,t,n,r){// Initial Setup
// -------------
// Save the previous value of the `Backbone` variable, so that it can be
// restored later on, if `noConflict` is used.
{var i=e.Backbone,o=[],s=(o.push,o.slice);o.splice}// Current version of the library. Keep in sync with `package.json`.
t.VERSION="1.1.2",// For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
// the `$` variable.
t.$=r,// Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
// to its previous owner. Returns a reference to this Backbone object.
t.noConflict=function(){return e.Backbone=i,this},// Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
// will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
// set a `X-Http-Method-Override` header.
t.emulateHTTP=!1,// Turn on `emulateJSON` to support legacy servers that can't deal with direct
// `application/json` requests ... will encode the body as
// `application/x-www-form-urlencoded` instead and will send the model in a
// form param named `model`.
t.emulateJSON=!1;// Backbone.Events
// ---------------
// A module that can be mixed in to *any object* in order to provide it with
// custom events. You may bind with `on` or remove with `off` callback
// functions to an event; `trigger`-ing an event fires all callbacks in
// succession.
//
//     var object = {};
//     _.extend(object, Backbone.Events);
//     object.on('expand', function(){ alert('expanded'); });
//     object.trigger('expand');
//
var a=t.Events={// Bind an event to a `callback` function. Passing `"all"` will bind
// the callback to all events fired.
on:function(e,t,n){if(!u(this,"on",e,[t,n])||!t)return this;this._events||(this._events={});var r=this._events[e]||(this._events[e]=[]);return r.push({callback:t,context:n,ctx:n||this}),this},// Bind an event to only be triggered a single time. After the first time
// the callback is invoked, it will be removed.
once:function(e,t,r){if(!u(this,"once",e,[t,r])||!t)return this;var i=this,o=n.once(function(){i.off(e,o),t.apply(this,arguments)});return o._callback=t,this.on(e,o,r)},// Remove one or many callbacks. If `context` is null, removes all
// callbacks with that function. If `callback` is null, removes all
// callbacks for the event. If `name` is null, removes all bound
// callbacks for all events.
off:function(e,t,r){var i,o,s,a,c,l,f,p;if(!this._events||!u(this,"off",e,[t,r]))return this;if(!e&&!t&&!r)return this._events=void 0,this;for(a=e?[e]:n.keys(this._events),c=0,l=a.length;l>c;c++)if(e=a[c],s=this._events[e]){if(this._events[e]=i=[],t||r)for(f=0,p=s.length;p>f;f++)o=s[f],(t&&t!==o.callback&&t!==o.callback._callback||r&&r!==o.context)&&i.push(o);i.length||delete this._events[e]}return this},// Trigger one or many events, firing all bound callbacks. Callbacks are
// passed the same arguments as `trigger` is, apart from the event name
// (unless you're listening on `"all"`, which will cause your callback to
// receive the true name of the event as the first argument).
trigger:function(e){if(!this._events)return this;var t=s.call(arguments,1);if(!u(this,"trigger",e,t))return this;var n=this._events[e],r=this._events.all;return n&&l(n,t),r&&l(r,arguments),this},// Tell this object to stop listening to either specific events ... or
// to every object it's currently listening to.
stopListening:function(e,t,r){var i=this._listeningTo;if(!i)return this;var o=!t&&!r;r||"object"!=typeof t||(r=this),e&&((i={})[e._listenId]=e);for(var s in i)e=i[s],e.off(t,r,this),(o||n.isEmpty(e._events))&&delete this._listeningTo[s];return this}},c=/\s+/,u=function(e,t,n,r){if(!n)return!0;// Handle event maps.
if("object"==typeof n){for(var i in n)e[t].apply(e,[i,n[i]].concat(r));return!1}// Handle space separated event names.
if(c.test(n)){for(var o=n.split(c),s=0,a=o.length;a>s;s++)e[t].apply(e,[o[s]].concat(r));return!1}return!0},l=function(e,t){var n,r=-1,i=e.length,o=t[0],s=t[1],a=t[2];switch(t.length){case 0:for(;++r<i;)(n=e[r]).callback.call(n.ctx);return;case 1:for(;++r<i;)(n=e[r]).callback.call(n.ctx,o);return;case 2:for(;++r<i;)(n=e[r]).callback.call(n.ctx,o,s);return;case 3:for(;++r<i;)(n=e[r]).callback.call(n.ctx,o,s,a);return;default:for(;++r<i;)(n=e[r]).callback.apply(n.ctx,t);return}},f={listenTo:"on",listenToOnce:"once"};// Inversion-of-control versions of `on` and `once`. Tell *this* object to
// listen to an event in another object ... keeping track of what it's
// listening to.
n.each(f,function(e,t){a[t]=function(t,r,i){var o=this._listeningTo||(this._listeningTo={}),s=t._listenId||(t._listenId=n.uniqueId("l"));return o[s]=t,i||"object"!=typeof r||(i=this),t[e](r,i,this),this}}),// Aliases for backwards compatibility.
a.bind=a.on,a.unbind=a.off,// Allow the `Backbone` object to serve as a global event bus, for folks who
// want global "pubsub" in a convenient place.
n.extend(t,a);// Backbone.Model
// --------------
// Backbone **Models** are the basic data object in the framework --
// frequently representing a row in a table in a database on your server.
// A discrete chunk of data and a bunch of useful, related methods for
// performing computations and transformations on that data.
// Create a new model with the specified attributes. A client id (`cid`)
// is automatically generated and assigned for you.
var p=t.Model=function(e,t){var r=e||{};t||(t={}),this.cid=n.uniqueId("c"),this.attributes={},t.collection&&(this.collection=t.collection),t.parse&&(r=this.parse(r,t)||{}),r=n.defaults({},r,n.result(this,"defaults")),this.set(r,t),this.changed={},this.initialize.apply(this,arguments)};// Attach all inheritable methods to the Model prototype.
n.extend(p.prototype,a,{// A hash of attributes whose current and previous value differ.
changed:null,// The value returned during the last failed validation.
validationError:null,// The default name for the JSON `id` attribute is `"id"`. MongoDB and
// CouchDB users may want to set this to `"_id"`.
idAttribute:"id",// Initialize is an empty function by default. Override it with your own
// initialization logic.
initialize:function(){},// Return a copy of the model's `attributes` object.
toJSON:function(){return n.clone(this.attributes)},// Proxy `Backbone.sync` by default -- but override this if you need
// custom syncing semantics for *this* particular model.
sync:function(){return t.sync.apply(this,arguments)},// Get the value of an attribute.
get:function(e){return this.attributes[e]},// Get the HTML-escaped value of an attribute.
escape:function(e){return n.escape(this.get(e))},// Returns `true` if the attribute contains a value that is not null
// or undefined.
has:function(e){return null!=this.get(e)},// Set a hash of model attributes on the object, firing `"change"`. This is
// the core primitive operation of a model, updating the data and notifying
// anyone who needs to know about the change in state. The heart of the beast.
set:function(e,t,r){var i,o,s,a,c,u,l,f;if(null==e)return this;// Run validation.
if(// Handle both `"key", value` and `{key: value}` -style arguments.
"object"==typeof e?(o=e,r=t):(o={})[e]=t,r||(r={}),!this._validate(o,r))return!1;// Extract attributes and options.
s=r.unset,c=r.silent,a=[],u=this._changing,this._changing=!0,u||(this._previousAttributes=n.clone(this.attributes),this.changed={}),f=this.attributes,l=this._previousAttributes,// Check for changes of `id`.
this.idAttribute in o&&(this.id=o[this.idAttribute]);// For each `set` attribute, update or delete the current value.
for(i in o)t=o[i],n.isEqual(f[i],t)||a.push(i),n.isEqual(l[i],t)?delete this.changed[i]:this.changed[i]=t,s?delete f[i]:f[i]=t;// Trigger all relevant attribute changes.
if(!c){a.length&&(this._pending=r);for(var p=0,h=a.length;h>p;p++)this.trigger("change:"+a[p],this,f[a[p]],r)}// You might be wondering why there's a `while` loop here. Changes can
// be recursively nested within `"change"` events.
if(u)return this;if(!c)for(;this._pending;)r=this._pending,this._pending=!1,this.trigger("change",this,r);return this._pending=!1,this._changing=!1,this},// Remove an attribute from the model, firing `"change"`. `unset` is a noop
// if the attribute doesn't exist.
unset:function(e,t){return this.set(e,void 0,n.extend({},t,{unset:!0}))},// Clear all attributes on the model, firing `"change"`.
clear:function(e){var t={};for(var r in this.attributes)t[r]=void 0;return this.set(t,n.extend({},e,{unset:!0}))},// Determine if the model has changed since the last `"change"` event.
// If you specify an attribute name, determine if that attribute has changed.
hasChanged:function(e){return null==e?!n.isEmpty(this.changed):n.has(this.changed,e)},// Return an object containing all the attributes that have changed, or
// false if there are no changed attributes. Useful for determining what
// parts of a view need to be updated and/or what attributes need to be
// persisted to the server. Unset attributes will be set to undefined.
// You can also pass an attributes object to diff against the model,
// determining if there *would be* a change.
changedAttributes:function(e){if(!e)return this.hasChanged()?n.clone(this.changed):!1;var t,r=!1,i=this._changing?this._previousAttributes:this.attributes;for(var o in e)n.isEqual(i[o],t=e[o])||((r||(r={}))[o]=t);return r},// Get the previous value of an attribute, recorded at the time the last
// `"change"` event was fired.
previous:function(e){return null!=e&&this._previousAttributes?this._previousAttributes[e]:null},// Get all of the attributes of the model at the time of the previous
// `"change"` event.
previousAttributes:function(){return n.clone(this._previousAttributes)},// Fetch the model from the server. If the server's representation of the
// model differs from its current attributes, they will be overridden,
// triggering a `"change"` event.
fetch:function(e){e=e?n.clone(e):{},void 0===e.parse&&(e.parse=!0);var t=this,r=e.success;return e.success=function(n){return t.set(t.parse(n,e),e)?(r&&r(t,n,e),void t.trigger("sync",t,n,e)):!1},H(this,e),this.sync("read",this,e)},// Set a hash of model attributes, and sync the model to the server.
// If the server returns an attributes hash that differs, the model's
// state will be `set` again.
save:function(e,t,r){var i,o,s,a=this.attributes;// If we're not waiting and attributes exist, save acts as
// `set(attr).save(null, opts)` with validation. Otherwise, check if
// the model will be valid when the attributes, if any, are set.
if(// Handle both `"key", value` and `{key: value}` -style arguments.
null==e||"object"==typeof e?(i=e,r=t):(i={})[e]=t,r=n.extend({validate:!0},r),i&&!r.wait){if(!this.set(i,r))return!1}else if(!this._validate(i,r))return!1;// Set temporary attributes if `{wait: true}`.
i&&r.wait&&(this.attributes=n.extend({},a,i)),// After a successful server-side save, the client is (optionally)
// updated with the server-side state.
void 0===r.parse&&(r.parse=!0);var c=this,u=r.success;// Restore attributes.
return r.success=function(e){// Ensure attributes are restored during synchronous saves.
c.attributes=a;var t=c.parse(e,r);return r.wait&&(t=n.extend(i||{},t)),n.isObject(t)&&!c.set(t,r)?!1:(u&&u(c,e,r),void c.trigger("sync",c,e,r))},H(this,r),o=this.isNew()?"create":r.patch?"patch":"update","patch"===o&&(r.attrs=i),s=this.sync(o,this,r),i&&r.wait&&(this.attributes=a),s},// Destroy this model on the server if it was already persisted.
// Optimistically removes the model from its collection, if it has one.
// If `wait: true` is passed, waits for the server to respond before removal.
destroy:function(e){e=e?n.clone(e):{};var t=this,r=e.success,i=function(){t.trigger("destroy",t,t.collection,e)};if(e.success=function(n){(e.wait||t.isNew())&&i(),r&&r(t,n,e),t.isNew()||t.trigger("sync",t,n,e)},this.isNew())return e.success(),!1;H(this,e);var o=this.sync("delete",this,e);return e.wait||i(),o},// Default URL for the model's representation on the server -- if you're
// using Backbone's restful methods, override this to change the endpoint
// that will be called.
url:function(){var e=n.result(this,"urlRoot")||n.result(this.collection,"url")||L();return this.isNew()?e:e.replace(/([^\/])$/,"$1/")+encodeURIComponent(this.id)},// **parse** converts a response into the hash of attributes to be `set` on
// the model. The default implementation is just to pass the response along.
parse:function(e){return e},// Create a new model with identical attributes to this one.
clone:function(){return new this.constructor(this.attributes)},// A model is new if it has never been saved to the server, and lacks an id.
isNew:function(){return!this.has(this.idAttribute)},// Check if the model is currently in a valid state.
isValid:function(e){return this._validate({},n.extend(e||{},{validate:!0}))},// Run validation against the next complete set of model attributes,
// returning `true` if all is well. Otherwise, fire an `"invalid"` event.
_validate:function(e,t){if(!t.validate||!this.validate)return!0;e=n.extend({},this.attributes,e);var r=this.validationError=this.validate(e,t)||null;return r?(this.trigger("invalid",this,r,n.extend(t,{validationError:r})),!1):!0}});// Underscore methods that we want to implement on the Model.
var h=["keys","values","pairs","invert","pick","omit"];// Mix in each Underscore method as a proxy to `Model#attributes`.
n.each(h,function(e){p.prototype[e]=function(){var t=s.call(arguments);return t.unshift(this.attributes),n[e].apply(n,t)}});// Backbone.Collection
// -------------------
// If models tend to represent a single row of data, a Backbone Collection is
// more analagous to a table full of data ... or a small slice or page of that
// table, or a collection of rows that belong together for a particular reason
// -- all of the messages in this particular folder, all of the documents
// belonging to this particular author, and so on. Collections maintain
// indexes of their models, both in order, and for lookup by `id`.
// Create a new **Collection**, perhaps to contain a specific type of `model`.
// If a `comparator` is specified, the Collection will maintain
// its models in sort order, as they're added and removed.
var d=t.Collection=function(e,t){t||(t={}),t.model&&(this.model=t.model),void 0!==t.comparator&&(this.comparator=t.comparator),this._reset(),this.initialize.apply(this,arguments),e&&this.reset(e,n.extend({silent:!0},t))},g={add:!0,remove:!0,merge:!0},m={add:!0,remove:!1};// Define the Collection's inheritable methods.
n.extend(d.prototype,a,{// The default model for a collection is just a **Backbone.Model**.
// This should be overridden in most cases.
model:p,// Initialize is an empty function by default. Override it with your own
// initialization logic.
initialize:function(){},// The JSON representation of a Collection is an array of the
// models' attributes.
toJSON:function(e){return this.map(function(t){return t.toJSON(e)})},// Proxy `Backbone.sync` by default.
sync:function(){return t.sync.apply(this,arguments)},// Add a model, or list of models to the set.
add:function(e,t){return this.set(e,n.extend({merge:!1},t,m))},// Remove a model, or a list of models from the set.
remove:function(e,t){var r=!n.isArray(e);e=r?[e]:n.clone(e),t||(t={});var i,o,s,a;for(i=0,o=e.length;o>i;i++)a=e[i]=this.get(e[i]),a&&(delete this._byId[a.id],delete this._byId[a.cid],s=this.indexOf(a),this.models.splice(s,1),this.length--,t.silent||(t.index=s,a.trigger("remove",a,this,t)),this._removeReference(a,t));return r?e[0]:e},// Update a collection by `set`-ing a new list of models, adding new ones,
// removing models that are no longer present, and merging models that
// already exist in the collection, as necessary. Similar to **Model#set**,
// the core operation for updating the data contained by the collection.
set:function(e,t){t=n.defaults({},t,g),t.parse&&(e=this.parse(e,t));var r=!n.isArray(e);e=r?e?[e]:[]:n.clone(e);var i,o,s,a,c,u,l,f=t.at,h=this.model,d=this.comparator&&null==f&&t.sort!==!1,m=n.isString(this.comparator)?this.comparator:null,y=[],v=[],b={},w=t.add,x=t.merge,k=t.remove,S=!d&&w&&k?[]:!1;// Turn bare objects into model references, and prevent invalid models
// from being added.
for(i=0,o=e.length;o>i;i++){// If a duplicate is found, prevent it from being added and
// optionally merge it into the existing model.
if(c=e[i]||{},s=c instanceof p?a=c:c[h.prototype.idAttribute||"id"],u=this.get(s))k&&(b[u.cid]=!0),x&&(c=c===a?a.attributes:c,t.parse&&(c=u.parse(c,t)),u.set(c,t),d&&!l&&u.hasChanged(m)&&(l=!0)),e[i]=u;else if(w){if(a=e[i]=this._prepareModel(c,t),!a)continue;y.push(a),this._addReference(a,t)}// Do not add multiple models with the same `id`.
a=u||a,!S||!a.isNew()&&b[a.id]||S.push(a),b[a.id]=!0}// Remove nonexistent models if appropriate.
if(k){for(i=0,o=this.length;o>i;++i)b[(a=this.models[i]).cid]||v.push(a);v.length&&this.remove(v,t)}// See if sorting is needed, update `length` and splice in new models.
if(y.length||S&&S.length)if(d&&(l=!0),this.length+=y.length,null!=f)for(i=0,o=y.length;o>i;i++)this.models.splice(f+i,0,y[i]);else{S&&(this.models.length=0);var C=S||y;for(i=0,o=C.length;o>i;i++)this.models.push(C[i])}// Unless silenced, it's time to fire all appropriate add/sort events.
if(// Silently sort the collection if appropriate.
l&&this.sort({silent:!0}),!t.silent){for(i=0,o=y.length;o>i;i++)(a=y[i]).trigger("add",a,this,t);(l||S&&S.length)&&this.trigger("sort",this,t)}// Return the added (or merged) model (or models).
return r?e[0]:e},// When you have more items than you want to add or remove individually,
// you can reset the entire set with a new list of models, without firing
// any granular `add` or `remove` events. Fires `reset` when finished.
// Useful for bulk operations and optimizations.
reset:function(e,t){t||(t={});for(var r=0,i=this.models.length;i>r;r++)this._removeReference(this.models[r],t);return t.previousModels=this.models,this._reset(),e=this.add(e,n.extend({silent:!0},t)),t.silent||this.trigger("reset",this,t),e},// Add a model to the end of the collection.
push:function(e,t){return this.add(e,n.extend({at:this.length},t))},// Remove a model from the end of the collection.
pop:function(e){var t=this.at(this.length-1);return this.remove(t,e),t},// Add a model to the beginning of the collection.
unshift:function(e,t){return this.add(e,n.extend({at:0},t))},// Remove a model from the beginning of the collection.
shift:function(e){var t=this.at(0);return this.remove(t,e),t},// Slice out a sub-array of models from the collection.
slice:function(){return s.apply(this.models,arguments)},// Get a model from the set by id.
get:function(e){return null==e?void 0:this._byId[e]||this._byId[e.id]||this._byId[e.cid]},// Get the model at the given index.
at:function(e){return this.models[e]},// Return models with matching attributes. Useful for simple cases of
// `filter`.
where:function(e,t){return n.isEmpty(e)?t?void 0:[]:this[t?"find":"filter"](function(t){for(var n in e)if(e[n]!==t.get(n))return!1;return!0})},// Return the first model with matching attributes. Useful for simple cases
// of `find`.
findWhere:function(e){return this.where(e,!0)},// Force the collection to re-sort itself. You don't need to call this under
// normal circumstances, as the set will maintain sort order as each item
// is added.
sort:function(e){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");// Run sort based on type of `comparator`.
return e||(e={}),n.isString(this.comparator)||1===this.comparator.length?this.models=this.sortBy(this.comparator,this):this.models.sort(n.bind(this.comparator,this)),e.silent||this.trigger("sort",this,e),this},// Pluck an attribute from each model in the collection.
pluck:function(e){return n.invoke(this.models,"get",e)},// Fetch the default set of models for this collection, resetting the
// collection when they arrive. If `reset: true` is passed, the response
// data will be passed through the `reset` method instead of `set`.
fetch:function(e){e=e?n.clone(e):{},void 0===e.parse&&(e.parse=!0);var t=e.success,r=this;return e.success=function(n){var i=e.reset?"reset":"set";r[i](n,e),t&&t(r,n,e),r.trigger("sync",r,n,e)},H(this,e),this.sync("read",this,e)},// Create a new instance of a model in this collection. Add the model to the
// collection immediately, unless `wait: true` is passed, in which case we
// wait for the server to agree.
create:function(e,t){if(t=t?n.clone(t):{},!(e=this._prepareModel(e,t)))return!1;t.wait||this.add(e,t);var r=this,i=t.success;return t.success=function(e,n){t.wait&&r.add(e,t),i&&i(e,n,t)},e.save(null,t),e},// **parse** converts a response into a list of models to be added to the
// collection. The default implementation is just to pass it through.
parse:function(e){return e},// Create a new collection with an identical list of models as this one.
clone:function(){return new this.constructor(this.models)},// Private method to reset all internal state. Called when the collection
// is first initialized or reset.
_reset:function(){this.length=0,this.models=[],this._byId={}},// Prepare a hash of attributes (or other model) to be added to this
// collection.
_prepareModel:function(e,t){if(e instanceof p)return e;t=t?n.clone(t):{},t.collection=this;var r=new this.model(e,t);return r.validationError?(this.trigger("invalid",this,r.validationError,t),!1):r},// Internal method to create a model's ties to a collection.
_addReference:function(e){this._byId[e.cid]=e,null!=e.id&&(this._byId[e.id]=e),e.collection||(e.collection=this),e.on("all",this._onModelEvent,this)},// Internal method to sever a model's ties to a collection.
_removeReference:function(e){this===e.collection&&delete e.collection,e.off("all",this._onModelEvent,this)},// Internal method called every time a model in the set fires an event.
// Sets need to update their indexes when models change ids. All other
// events simply proxy through. "add" and "remove" events that originate
// in other collections are ignored.
_onModelEvent:function(e,t,n,r){("add"!==e&&"remove"!==e||n===this)&&("destroy"===e&&this.remove(t,r),t&&e==="change:"+t.idAttribute&&(delete this._byId[t.previous(t.idAttribute)],null!=t.id&&(this._byId[t.id]=t)),this.trigger.apply(this,arguments))}});// Underscore methods that we want to implement on the Collection.
// 90% of the core usefulness of Backbone Collections is actually implemented
// right here:
var y=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","difference","indexOf","shuffle","lastIndexOf","isEmpty","chain","sample"];// Mix in each Underscore method as a proxy to `Collection#models`.
n.each(y,function(e){d.prototype[e]=function(){var t=s.call(arguments);return t.unshift(this.models),n[e].apply(n,t)}});// Underscore methods that take a property name as an argument.
var v=["groupBy","countBy","sortBy","indexBy"];// Use attributes instead of properties.
n.each(v,function(e){d.prototype[e]=function(t,r){var i=n.isFunction(t)?t:function(e){return e.get(t)};return n[e](this.models,i,r)}});// Backbone.View
// -------------
// Backbone Views are almost more convention than they are actual code. A View
// is simply a JavaScript object that represents a logical chunk of UI in the
// DOM. This might be a single item, an entire list, a sidebar or panel, or
// even the surrounding frame which wraps your whole app. Defining a chunk of
// UI as a **View** allows you to define your DOM events declaratively, without
// having to worry about render order ... and makes it easy for the view to
// react to specific changes in the state of your models.
// Creating a Backbone.View creates its initial element outside of the DOM,
// if an existing element is not provided...
var b=t.View=function(e){this.cid=n.uniqueId("view"),e||(e={}),n.extend(this,n.pick(e,x)),this._ensureElement(),this.initialize.apply(this,arguments),this.delegateEvents()},w=/^(\S+)\s*(.*)$/,x=["model","collection","el","id","attributes","className","tagName","events"];// Set up all inheritable **Backbone.View** properties and methods.
n.extend(b.prototype,a,{// The default `tagName` of a View's element is `"div"`.
tagName:"div",// jQuery delegate for element lookup, scoped to DOM elements within the
// current view. This should be preferred to global lookups where possible.
$:function(e){return this.$el.find(e)},// Initialize is an empty function by default. Override it with your own
// initialization logic.
initialize:function(){},// **render** is the core function that your view should override, in order
// to populate its element (`this.el`), with the appropriate HTML. The
// convention is for **render** to always return `this`.
render:function(){return this},// Remove this view by taking the element out of the DOM, and removing any
// applicable Backbone.Events listeners.
remove:function(){return this.$el.remove(),this.stopListening(),this},// Change the view's element (`this.el` property), including event
// re-delegation.
setElement:function(e,n){return this.$el&&this.undelegateEvents(),this.$el=e instanceof t.$?e:t.$(e),this.el=this.$el[0],n!==!1&&this.delegateEvents(),this},// Set callbacks, where `this.events` is a hash of
//
// *{"event selector": "callback"}*
//
//     {
//       'mousedown .title':  'edit',
//       'click .button':     'save',
//       'click .open':       function(e) { ... }
//     }
//
// pairs. Callbacks will be bound to the view, with `this` set properly.
// Uses event delegation for efficiency.
// Omitting the selector binds the event to `this.el`.
// This only works for delegate-able events: not `focus`, `blur`, and
// not `change`, `submit`, and `reset` in Internet Explorer.
delegateEvents:function(e){if(!e&&!(e=n.result(this,"events")))return this;this.undelegateEvents();for(var t in e){var r=e[t];if(n.isFunction(r)||(r=this[e[t]]),r){var i=t.match(w),o=i[1],s=i[2];r=n.bind(r,this),o+=".delegateEvents"+this.cid,""===s?this.$el.on(o,r):this.$el.on(o,s,r)}}return this},// Clears all callbacks previously bound to the view with `delegateEvents`.
// You usually don't need to use this, but may wish to if you have multiple
// Backbone views attached to the same DOM element.
undelegateEvents:function(){return this.$el.off(".delegateEvents"+this.cid),this},// Ensure that the View has a DOM element to render into.
// If `this.el` is a string, pass it through `$()`, take the first
// matching element, and re-assign it to `el`. Otherwise, create
// an element from the `id`, `className` and `tagName` properties.
_ensureElement:function(){if(this.el)this.setElement(n.result(this,"el"),!1);else{var e=n.extend({},n.result(this,"attributes"));this.id&&(e.id=n.result(this,"id")),this.className&&(e["class"]=n.result(this,"className"));var r=t.$("<"+n.result(this,"tagName")+">").attr(e);this.setElement(r,!1)}}}),// Backbone.sync
// -------------
// Override this function to change the manner in which Backbone persists
// models to the server. You will be passed the type of request, and the
// model in question. By default, makes a RESTful Ajax request
// to the model's `url()`. Some possible customizations could be:
//
// * Use `setTimeout` to batch rapid-fire updates into a single request.
// * Send up the models as XML instead of JSON.
// * Persist models via WebSockets instead of Ajax.
//
// Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
// as `POST`, with a `_method` parameter containing the true HTTP method,
// as well as all requests with the body as `application/x-www-form-urlencoded`
// instead of `application/json` with the model in a param named `model`.
// Useful when interfacing with server-side languages like **PHP** that make
// it difficult to read the body of `PUT` requests.
t.sync=function(e,r,i){var o=S[e];// Default options, unless specified.
n.defaults(i||(i={}),{emulateHTTP:t.emulateHTTP,emulateJSON:t.emulateJSON});// Default JSON-request options.
var s={type:o,dataType:"json"};// For older servers, emulate HTTP by mimicking the HTTP method with `_method`
// And an `X-HTTP-Method-Override` header.
if(// Ensure that we have a URL.
i.url||(s.url=n.result(r,"url")||L()),// Ensure that we have the appropriate request data.
null!=i.data||!r||"create"!==e&&"update"!==e&&"patch"!==e||(s.contentType="application/json",s.data=JSON.stringify(i.attrs||r.toJSON(i))),// For older servers, emulate JSON by encoding the request into an HTML-form.
i.emulateJSON&&(s.contentType="application/x-www-form-urlencoded",s.data=s.data?{model:s.data}:{}),i.emulateHTTP&&("PUT"===o||"DELETE"===o||"PATCH"===o)){s.type="POST",i.emulateJSON&&(s.data._method=o);var a=i.beforeSend;i.beforeSend=function(e){return e.setRequestHeader("X-HTTP-Method-Override",o),a?a.apply(this,arguments):void 0}}// Don't process data on a non-GET request.
"GET"===s.type||i.emulateJSON||(s.processData=!1),// If we're sending a `PATCH` request, and we're in an old Internet Explorer
// that still has ActiveX enabled by default, override jQuery to use that
// for XHR instead. Remove this line when jQuery supports `PATCH` on IE8.
"PATCH"===s.type&&k&&(s.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")});// Make the request, allowing the user to override any Ajax options.
var c=i.xhr=t.ajax(n.extend(s,i));return r.trigger("request",r,c,i),c};var k=!("undefined"==typeof window||!window.ActiveXObject||window.XMLHttpRequest&&(new XMLHttpRequest).dispatchEvent),S={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};// Set the default implementation of `Backbone.ajax` to proxy through to `$`.
// Override this if you'd like to use a different library.
t.ajax=function(){return t.$.ajax.apply(t.$,arguments)};// Backbone.Router
// ---------------
// Routers map faux-URLs to actions, and fire events when routes are
// matched. Creating a new one sets its `routes` hash, if not set statically.
var C=t.Router=function(e){e||(e={}),e.routes&&(this.routes=e.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},T=/\((.*?)\)/g,A=/(\(\?)?:\w+/g,E=/\*\w+/g,N=/[\-{}\[\]+?.,\\\^$|#\s]/g;// Set up all inheritable **Backbone.Router** properties and methods.
n.extend(C.prototype,a,{// Initialize is an empty function by default. Override it with your own
// initialization logic.
initialize:function(){},// Manually bind a single named route to a callback. For example:
//
//     this.route('search/:query/p:num', 'search', function(query, num) {
//       ...
//     });
//
route:function(e,r,i){n.isRegExp(e)||(e=this._routeToRegExp(e)),n.isFunction(r)&&(i=r,r=""),i||(i=this[r]);var o=this;return t.history.route(e,function(n){var s=o._extractParameters(e,n);o.execute(i,s),o.trigger.apply(o,["route:"+r].concat(s)),o.trigger("route",r,s),t.history.trigger("route",o,r,s)}),this},// Execute a route handler with the provided parameters.  This is an
// excellent place to do pre-route setup or post-route cleanup.
execute:function(e,t){e&&e.apply(this,t)},// Simple proxy to `Backbone.history` to save a fragment into the history.
navigate:function(e,n){return t.history.navigate(e,n),this},// Bind all defined routes to `Backbone.history`. We have to reverse the
// order of the routes here to support behavior where the most general
// routes can be defined at the bottom of the route map.
_bindRoutes:function(){if(this.routes){this.routes=n.result(this,"routes");for(var e,t=n.keys(this.routes);null!=(e=t.pop());)this.route(e,this.routes[e])}},// Convert a route string into a regular expression, suitable for matching
// against the current location hash.
_routeToRegExp:function(e){return e=e.replace(N,"\\$&").replace(T,"(?:$1)?").replace(A,function(e,t){return t?e:"([^/?]+)"}).replace(E,"([^?]*?)"),new RegExp("^"+e+"(?:\\?([\\s\\S]*))?$")},// Given a route, and a URL fragment that it matches, return the array of
// extracted decoded parameters. Empty or unmatched parameters will be
// treated as `null` to normalize cross-browser behavior.
_extractParameters:function(e,t){var r=e.exec(t).slice(1);return n.map(r,function(e,t){// Don't decode the search params.
// Don't decode the search params.
return t===r.length-1?e||null:e?decodeURIComponent(e):null})}});// Backbone.History
// ----------------
// Handles cross-browser history management, based on either
// [pushState](http://diveintohtml5.info/history.html) and real URLs, or
// [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
// and URL fragments. If the browser supports neither (old IE, natch),
// falls back to polling.
var P=t.History=function(){this.handlers=[],n.bindAll(this,"checkUrl"),// Ensure that `History` can be used outside of the browser.
"undefined"!=typeof window&&(this.location=window.location,this.history=window.history)},j=/^[#\/]|\s+$/g,_=/^\/+|\/+$/g,B=/msie [\w.]+/,O=/\/$/,q=/#.*$/;// Has the history handling already been started?
P.started=!1,// Set up all inheritable **Backbone.History** properties and methods.
n.extend(P.prototype,a,{// The default interval to poll for hash changes, if necessary, is
// twenty times a second.
interval:50,// Are we at the app root?
atRoot:function(){return this.location.pathname.replace(/[^\/]$/,"$&/")===this.root},// Gets the true hash value. Cannot use location.hash directly due to bug
// in Firefox where location.hash will always be decoded.
getHash:function(e){var t=(e||this).location.href.match(/#(.*)$/);return t?t[1]:""},// Get the cross-browser normalized URL fragment, either from the URL,
// the hash, or the override.
getFragment:function(e,t){if(null==e)if(this._hasPushState||!this._wantsHashChange||t){e=decodeURI(this.location.pathname+this.location.search);var n=this.root.replace(O,"");e.indexOf(n)||(e=e.slice(n.length))}else e=this.getHash();return e.replace(j,"")},// Start the hash change handling, returning `true` if the current URL matches
// an existing route, and `false` otherwise.
start:function(e){if(P.started)throw new Error("Backbone.history has already been started");P.started=!0,// Figure out the initial configuration. Do we need an iframe?
// Is pushState desired ... is it available?
this.options=n.extend({root:"/"},this.options,e),this.root=this.options.root,this._wantsHashChange=this.options.hashChange!==!1,this._wantsPushState=!!this.options.pushState,this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var r=this.getFragment(),i=document.documentMode,o=B.exec(navigator.userAgent.toLowerCase())&&(!i||7>=i);if(// Normalize root to always include a leading and trailing slash.
this.root=("/"+this.root+"/").replace(_,"/"),o&&this._wantsHashChange){var s=t.$('<iframe src="javascript:0" tabindex="-1">');this.iframe=s.hide().appendTo("body")[0].contentWindow,this.navigate(r)}// Depending on whether we're using pushState or hashes, and whether
// 'onhashchange' is supported, determine how we check the URL state.
this._hasPushState?t.$(window).on("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!o?t.$(window).on("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),// Determine if we need to change the base url, for a pushState link
// opened by a non-pushState browser.
this.fragment=r;var a=this.location;// Transition from hashChange to pushState or vice versa if both are
// requested.
if(this._wantsHashChange&&this._wantsPushState){// If we've started off with a route from a `pushState`-enabled
// browser, but we're currently in a browser that doesn't support it...
if(!this._hasPushState&&!this.atRoot())// Return immediately as browser will do redirect to new url
return this.fragment=this.getFragment(null,!0),this.location.replace(this.root+"#"+this.fragment),!0;this._hasPushState&&this.atRoot()&&a.hash&&(this.fragment=this.getHash().replace(j,""),this.history.replaceState({},document.title,this.root+this.fragment))}return this.options.silent?void 0:this.loadUrl()},// Disable Backbone.history, perhaps temporarily. Not useful in a real app,
// but possibly useful for unit testing Routers.
stop:function(){t.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl),this._checkUrlInterval&&clearInterval(this._checkUrlInterval),P.started=!1},// Add a route to be tested when the fragment changes. Routes added later
// may override previous routes.
route:function(e,t){this.handlers.unshift({route:e,callback:t})},// Checks the current URL to see if it has changed, and if it has,
// calls `loadUrl`, normalizing across the hidden iframe.
checkUrl:function(){var e=this.getFragment();return e===this.fragment&&this.iframe&&(e=this.getFragment(this.getHash(this.iframe))),e===this.fragment?!1:(this.iframe&&this.navigate(e),void this.loadUrl())},// Attempt to load the current URL fragment. If a route succeeds with a
// match, returns `true`. If no defined routes matches the fragment,
// returns `false`.
loadUrl:function(e){return e=this.fragment=this.getFragment(e),n.any(this.handlers,function(t){return t.route.test(e)?(t.callback(e),!0):void 0})},// Save a fragment into the hash history, or replace the URL state if the
// 'replace' option is passed. You are responsible for properly URL-encoding
// the fragment in advance.
//
// The options object can contain `trigger: true` if you wish to have the
// route callback be fired (not usually desirable), or `replace: true`, if
// you wish to modify the current URL without adding an entry to the history.
navigate:function(e,t){if(!P.started)return!1;t&&t!==!0||(t={trigger:!!t});var n=this.root+(e=this.getFragment(e||""));if(// Strip the hash for matching.
e=e.replace(q,""),this.fragment!==e){// If pushState is available, we use it to set the fragment as a real URL.
if(this.fragment=e,// Don't include a trailing slash on the root.
""===e&&"/"!==n&&(n=n.slice(0,-1)),this._hasPushState)this.history[t.replace?"replaceState":"pushState"]({},document.title,n);else{if(!this._wantsHashChange)return this.location.assign(n);this._updateHash(this.location,e,t.replace),this.iframe&&e!==this.getFragment(this.getHash(this.iframe))&&(// Opening and closing the iframe tricks IE7 and earlier to push a
// history entry on hash-tag change.  When replace is true, we don't
// want this.
t.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,e,t.replace))}return t.trigger?this.loadUrl(e):void 0}},// Update the hash location, either replacing the current entry, or adding
// a new one to the browser history.
_updateHash:function(e,t,n){if(n){var r=e.href.replace(/(javascript:|#).*$/,"");e.replace(r+"#"+t)}else// Some browsers require that `hash` contains a leading #.
e.hash="#"+t}}),// Create the default Backbone.history.
t.history=new P;// Helpers
// -------
// Helper function to correctly set up the prototype chain, for subclasses.
// Similar to `goog.inherits`, but uses a hash of prototype properties and
// class properties to be extended.
var R=function(e,t){var r,i=this;// The constructor function for the new subclass is either defined by you
// (the "constructor" property in your `extend` definition), or defaulted
// by us to simply call the parent's constructor.
r=e&&n.has(e,"constructor")?e.constructor:function(){return i.apply(this,arguments)},// Add static properties to the constructor function, if supplied.
n.extend(r,i,t);// Set the prototype chain to inherit from `parent`, without calling
// `parent`'s constructor function.
var o=function(){this.constructor=r};// Add prototype properties (instance properties) to the subclass,
// if supplied.
// Set a convenience property in case the parent's prototype is needed
// later.
return o.prototype=i.prototype,r.prototype=new o,e&&n.extend(r.prototype,e),r.__super__=i.prototype,r};// Set up inheritance for the model, collection, router, view and history.
p.extend=d.extend=C.extend=b.extend=P.extend=R;// Throw an error when a URL is needed, and none is supplied.
var L=function(){throw new Error('A "url" property or function must be specified')},H=function(e,t){var n=t.error;t.error=function(r){n&&n(e,r,t),e.trigger("error",e,r,t)}};return t}),define("js/timer",["require","js/constant"],function(e){function t(e){this.el=e,this.$el=$(e),this.$inner=this.$el.find(".timer-inner"),setInterval(this.ensure.bind(this),1e3)}var n=e("js/constant");return t.prototype.ensure=function(){if(!this.type)return this.$inner.empty();var e,t,n=new Date;this.time<n.getTime()?(e=0,t=0):(e=Math.floor((this.time-n.getTime())/1e3),t=Math.floor(e/60)%60,e%=60),this.$inner.html(this.pad(t)+":"+this.pad(e))},t.prototype.pad=function(e){return 10>e?"0"+e:String(e)},t.prototype.timing=function(e,t){console.log("type:",e,"time:",t),this.el.className="timer "+e,this.type=e,this.time=t},t.prototype.setShowModel=function(e){this.showModel=e,this.showModel.on("magician-swtiched",_.bind(function(){switch(this.magician=e.get("magician"),this.magician.get("status")){case n.MAGICIAN_WAITING:var t=this.magician.get("first");this.timing(t?"wait":"wait-magician",this.magician.get("start"));break;case n.MAGICIAN_PLAYING:this.timing("playing",this.magician.get("score"));break;case n.MAGICIAN_SCORE:this.timing("score",this.magician.get("end"))}this.magician.once("start",_.bind(function(){var e=this.magician.get("score");console.log(new Date(e)),this.timing("playing",e)},this)),this.magician.once("score",_.bind(function(){var e=this.magician.get("end");console.log(new Date(e)),this.timing("score",e)},this))},this))},t}),//     uuid.js
//
//     Copyright (c) 2010-2012 Robert Kieffer
//     MIT License - http://opensource.org/licenses/mit-license.php
function(){// **`parse()` - Parse a UUID into it's component bytes**
function e(e,t,n){var r=t&&n||0,i=0;// Zero out remaining bytes if string was short
for(t=t||[],e.toLowerCase().replace(/[0-9a-f]{2}/g,function(e){16>i&&(// Don't overflow!
t[r+i++]=p[e])});16>i;)t[r+i++]=0;return t}// **`unparse()` - Convert UUID byte array (ala parse()) into a string**
function t(e,t){var n=t||0,r=f;return r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]}// See https://github.com/broofa/node-uuid for API details
function n(e,n,r){var i=n&&r||0,o=n||[];e=e||{};var s=null!=e.clockseq?e.clockseq:m,a=null!=e.msecs?e.msecs:(new Date).getTime(),c=null!=e.nsecs?e.nsecs:v+1,u=a-y+(c-v)/1e4;// Per 4.2.1.2 Throw error if too many uuids are requested
if(// Per 4.2.1.2, Bump clockseq on clock regression
0>u&&null==e.clockseq&&(s=s+1&16383),// Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
// time interval
(0>u||a>y)&&null==e.nsecs&&(c=0),c>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");y=a,v=c,m=s,// Per 4.1.4 - Convert from unix epoch to Gregorian epoch
a+=122192928e5;// `time_low`
var l=(1e4*(268435455&a)+c)%4294967296;o[i++]=l>>>24&255,o[i++]=l>>>16&255,o[i++]=l>>>8&255,o[i++]=255&l;// `time_mid`
var f=a/4294967296*1e4&268435455;o[i++]=f>>>8&255,o[i++]=255&f,// `time_high_and_version`
o[i++]=f>>>24&15|16,// include version
o[i++]=f>>>16&255,// `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
o[i++]=s>>>8|128,// `clock_seq_low`
o[i++]=255&s;for(var p=e.node||g,h=0;6>h;h++)o[i+h]=p[h];return n?n:t(o)}// **`v4()` - Generate random UUID**
// See https://github.com/broofa/node-uuid for API details
function r(e,n,r){// Deprecated - 'format' argument, as supported in v1.2
var o=n&&r||0;"string"==typeof e&&(n="binary"==e?new l(16):null,e=null),e=e||{};var s=e.random||(e.rng||i)();// Copy bytes to buffer, if provided
if(// Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
s[6]=15&s[6]|64,s[8]=63&s[8]|128,n)for(var a=0;16>a;a++)n[o+a]=s[a];return n||t(s)}var i,o=this;// Node.js crypto-based RNG - http://nodejs.org/docs/v0.6.2/api/crypto.html
//
// Moderately fast, high quality
if("function"==typeof require)try{var s=require("crypto").randomBytes;i=s&&function(){return s(16)}}catch(a){}if(!i&&o.crypto&&crypto.getRandomValues){// WHATWG crypto-based RNG - http://wiki.whatwg.org/wiki/Crypto
//
// Moderately fast, high quality
var c=new Uint8Array(16);i=function(){return crypto.getRandomValues(c),c}}if(!i){// Math.random()-based (RNG)
//
// If all else fails, use Math.random().  It's fast, but is of unspecified
// quality.
var u=new Array(16);i=function(){for(var e,t=0;16>t;t++)0===(3&t)&&(e=4294967296*Math.random()),u[t]=e>>>((3&t)<<3)&255;return u}}for(var l="function"==typeof Buffer?Buffer:Array,f=[],p={},h=0;256>h;h++)f[h]=(h+256).toString(16).substr(1),p[f[h]]=h;// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
// random #'s we need to init node and clockseq
var d=i(),g=[1|d[0],d[1],d[2],d[3],d[4],d[5]],m=16383&(d[6]<<8|d[7]),y=0,v=0,b=r;if(b.v1=n,b.v4=r,b.parse=e,b.unparse=t,b.BufferClass=l,"function"==typeof define&&define.amd)// Publish as AMD module
define("uuid",[],function(){return b});else if("undefined"!=typeof module&&module.exports)// Publish as node.js module
module.exports=b;else{// Publish as global (in browsers)
var w=o.uuid;// **`noConflict()` - (browser only) to reset global 'uuid' var**
b.noConflict=function(){return o.uuid=w,b},o.uuid=b}}.call(this),define("js/token",["require","uuid"],function(e){var t=e("uuid"),n=localStorage.getItem("audience-token");return n||(n=t.v4(),localStorage.setItem("audience-token",n)),n}),!function(e){"object"==typeof exports?module.exports=e():"function"==typeof define&&define.amd?define("socket-io",e):"undefined"!=typeof window?window.io=e():"undefined"!=typeof global?global.io=e():"undefined"!=typeof self&&(self.io=e())}(function(){var e;return function t(e,n,r){function i(s,a){if(!n[s]){if(!e[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(o)return o(s,!0);throw new Error("Cannot find module '"+s+"'")}var u=n[s]={exports:{}};e[s][0].call(u.exports,function(t){var n=e[s][1][t];return i(n?n:t)},u,u.exports,t,e,n,r)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(e,t){t.exports=e("./lib/")},{"./lib/":2}],2:[function(e,t,n){/**
 * Looks up an existing `Manager` for multiplexing.
 * If the user summons:
 *
 *   `io('http://localhost/a');`
 *   `io('http://localhost/b');`
 *
 * We reuse the existing instance based on same scheme/port/host,
 * and we initialize sockets for each namespace.
 *
 * @api public
 */
function r(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var n,r=i(e),o=r.source,u=r.id;return t.forceNew||t["force new connection"]||!1===t.multiplex?(a("ignoring socket cache for %s",o),n=s(o,t)):(c[u]||(a("new io instance for %s",o),c[u]=s(o,t)),n=c[u]),n.socket(r.path)}/**
 * Module dependencies.
 */
var i=e("./url"),o=e("socket.io-parser"),s=e("./manager"),a=e("debug")("socket.io-client");/**
 * Module exports.
 */
t.exports=n=r;/**
 * Managers cache.
 */
var c=n.managers={};/**
 * Protocol version.
 *
 * @api public
 */
n.protocol=o.protocol,/**
 * `connect`.
 *
 * @param {String} uri
 * @api public
 */
n.connect=r,/**
 * Expose constructors for standalone build.
 *
 * @api public
 */
n.Manager=e("./manager"),n.Socket=e("./socket")},{"./manager":3,"./socket":5,"./url":6,debug:9,"socket.io-parser":40}],3:[function(e,t){/**
 * `Manager` constructor.
 *
 * @param {String} engine instance or engine uri/opts
 * @param {Object} options
 * @api public
 */
function n(e,t){return this instanceof n?(e&&"object"==typeof e&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.nsps={},this.subs=[],this.opts=t,this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.timeout(null==t.timeout?2e4:t.timeout),this.readyState="closed",this.uri=e,this.connected=0,this.attempts=0,this.encoding=!1,this.packetBuffer=[],this.encoder=new s.Encoder,this.decoder=new s.Decoder,void this.open()):new n(e,t)}/**
 * Module dependencies.
 */
var r=(e("./url"),e("engine.io-client")),i=e("./socket"),o=e("component-emitter"),s=e("socket.io-parser"),a=e("./on"),c=e("component-bind"),u=(e("object-component"),e("debug")("socket.io-client:manager"));/**
 * Module exports
 */
t.exports=n,/**
 * Propagate given event to sockets and emit on `this`
 *
 * @api private
 */
n.prototype.emitAll=function(){this.emit.apply(this,arguments);for(var e in this.nsps)this.nsps[e].emit.apply(this.nsps[e],arguments)},/**
 * Mix in `Emitter`.
 */
o(n.prototype),/**
 * Sets the `reconnection` config.
 *
 * @param {Boolean} true/false if it should automatically reconnect
 * @return {Manager} self or value
 * @api public
 */
n.prototype.reconnection=function(e){return arguments.length?(this._reconnection=!!e,this):this._reconnection},/**
 * Sets the reconnection attempts config.
 *
 * @param {Number} max reconnection attempts before giving up
 * @return {Manager} self or value
 * @api public
 */
n.prototype.reconnectionAttempts=function(e){return arguments.length?(this._reconnectionAttempts=e,this):this._reconnectionAttempts},/**
 * Sets the delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */
n.prototype.reconnectionDelay=function(e){return arguments.length?(this._reconnectionDelay=e,this):this._reconnectionDelay},/**
 * Sets the maximum delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */
n.prototype.reconnectionDelayMax=function(e){return arguments.length?(this._reconnectionDelayMax=e,this):this._reconnectionDelayMax},/**
 * Sets the connection timeout. `false` to disable
 *
 * @return {Manager} self or value
 * @api public
 */
n.prototype.timeout=function(e){return arguments.length?(this._timeout=e,this):this._timeout},/**
 * Starts trying to reconnect if reconnection is enabled and we have not
 * started reconnecting yet
 *
 * @api private
 */
n.prototype.maybeReconnectOnOpen=function(){this.openReconnect||this.reconnecting||!this._reconnection||(// keeps reconnection from firing twice for the same reconnection loop
this.openReconnect=!0,this.reconnect())},/**
 * Sets the current transport `socket`.
 *
 * @param {Function} optional, callback
 * @return {Manager} self
 * @api public
 */
n.prototype.open=n.prototype.connect=function(e){if(u("readyState %s",this.readyState),~this.readyState.indexOf("open"))return this;u("opening %s",this.uri),this.engine=r(this.uri,this.opts);var t=this.engine,n=this;this.readyState="opening";// emit `open`
var i=a(t,"open",function(){n.onopen(),e&&e()}),o=a(t,"error",function(t){if(u("connect_error"),n.cleanup(),n.readyState="closed",n.emitAll("connect_error",t),e){var r=new Error("Connection error");r.data=t,e(r)}n.maybeReconnectOnOpen()});// emit `connect_timeout`
if(!1!==this._timeout){var s=this._timeout;u("connect attempt will timeout after %d",s);// set timer
var c=setTimeout(function(){u("connect attempt timed out after %d",s),i.destroy(),t.close(),t.emit("error","timeout"),n.emitAll("connect_timeout",s)},s);this.subs.push({destroy:function(){clearTimeout(c)}})}return this.subs.push(i),this.subs.push(o),this},/**
 * Called upon transport open.
 *
 * @api private
 */
n.prototype.onopen=function(){u("open"),// clear old subs
this.cleanup(),// mark as open
this.readyState="open",this.emit("open");// add new subs
var e=this.engine;this.subs.push(a(e,"data",c(this,"ondata"))),this.subs.push(a(this.decoder,"decoded",c(this,"ondecoded"))),this.subs.push(a(e,"error",c(this,"onerror"))),this.subs.push(a(e,"close",c(this,"onclose")))},/**
 * Called with data.
 *
 * @api private
 */
n.prototype.ondata=function(e){this.decoder.add(e)},/**
 * Called when parser fully decodes a packet.
 *
 * @api private
 */
n.prototype.ondecoded=function(e){this.emit("packet",e)},/**
 * Called upon socket error.
 *
 * @api private
 */
n.prototype.onerror=function(e){u("error",e),this.emitAll("error",e)},/**
 * Creates a new socket for the given `nsp`.
 *
 * @return {Socket}
 * @api public
 */
n.prototype.socket=function(e){var t=this.nsps[e];if(!t){t=new i(this,e),this.nsps[e]=t;var n=this;t.on("connect",function(){n.connected++})}return t},/**
 * Called upon a socket close.
 *
 * @param {Socket} socket
 */
n.prototype.destroy=function(){--this.connected||this.close()},/**
 * Writes a packet.
 *
 * @param {Object} packet
 * @api private
 */
n.prototype.packet=function(e){u("writing packet %j",e);var t=this;t.encoding?// add packet to the queue
t.packetBuffer.push(e):(// encode, then write to engine with result
t.encoding=!0,this.encoder.encode(e,function(e){for(var n=0;n<e.length;n++)t.engine.write(e[n]);t.encoding=!1,t.processPacketQueue()}))},/**
 * If packet buffer is non-empty, begins encoding the
 * next packet in line.
 *
 * @api private
 */
n.prototype.processPacketQueue=function(){if(this.packetBuffer.length>0&&!this.encoding){var e=this.packetBuffer.shift();this.packet(e)}},/**
 * Clean up transport subscriptions and packet buffer.
 *
 * @api private
 */
n.prototype.cleanup=function(){for(var e;e=this.subs.shift();)e.destroy();this.packetBuffer=[],this.encoding=!1,this.decoder.destroy()},/**
 * Close the current socket.
 *
 * @api private
 */
n.prototype.close=n.prototype.disconnect=function(){this.skipReconnect=!0,this.engine.close()},/**
 * Called upon engine close.
 *
 * @api private
 */
n.prototype.onclose=function(e){u("close"),this.cleanup(),this.readyState="closed",this.emit("close",e),this._reconnection&&!this.skipReconnect&&this.reconnect()},/**
 * Attempt a reconnection.
 *
 * @api private
 */
n.prototype.reconnect=function(){if(this.reconnecting)return this;var e=this;if(this.attempts++,this.attempts>this._reconnectionAttempts)u("reconnect failed"),this.emitAll("reconnect_failed"),this.reconnecting=!1;else{var t=this.attempts*this.reconnectionDelay();t=Math.min(t,this.reconnectionDelayMax()),u("will wait %dms before reconnect attempt",t),this.reconnecting=!0;var n=setTimeout(function(){u("attempting reconnect"),e.emitAll("reconnect_attempt",e.attempts),e.emitAll("reconnecting",e.attempts),e.open(function(t){t?(u("reconnect attempt error"),e.reconnecting=!1,e.reconnect(),e.emitAll("reconnect_error",t.data)):(u("reconnect success"),e.onreconnect())})},t);this.subs.push({destroy:function(){clearTimeout(n)}})}},/**
 * Called upon successful reconnect.
 *
 * @api private
 */
n.prototype.onreconnect=function(){var e=this.attempts;this.attempts=0,this.reconnecting=!1,this.emitAll("reconnect",e)}},{"./on":4,"./socket":5,"./url":6,"component-bind":7,"component-emitter":8,debug:9,"engine.io-client":11,"object-component":37,"socket.io-parser":40}],4:[function(e,t){/**
 * Helper for subscriptions.
 *
 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
 * @param {String} event name
 * @param {Function} callback
 * @api public
 */
function n(e,t,n){return e.on(t,n),{destroy:function(){e.removeListener(t,n)}}}/**
 * Module exports.
 */
t.exports=n},{}],5:[function(e,t,n){/**
 * `Socket` constructor.
 *
 * @api public
 */
function r(e,t){this.io=e,this.nsp=t,this.json=this,// compat
this.ids=0,this.acks={},this.open(),this.receiveBuffer=[],this.sendBuffer=[],this.connected=!1,this.disconnected=!0,this.subEvents()}/**
 * Module dependencies.
 */
{var i=e("socket.io-parser"),o=e("component-emitter"),s=e("to-array"),a=e("./on"),c=e("component-bind"),u=e("debug")("socket.io-client:socket"),l=e("has-binary-data");e("indexof")}/**
 * Module exports.
 */
t.exports=n=r;/**
 * Internal events (blacklisted).
 * These events can't be emitted by the user.
 *
 * @api private
 */
var f={connect:1,connect_error:1,connect_timeout:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1},p=o.prototype.emit;/**
 * Mix in `Emitter`.
 */
o(r.prototype),/**
 * Subscribe to open, close and packet events
 *
 * @api private
 */
r.prototype.subEvents=function(){var e=this.io;this.subs=[a(e,"open",c(this,"onopen")),a(e,"packet",c(this,"onpacket")),a(e,"close",c(this,"onclose"))]},/**
 * Called upon engine `open`.
 *
 * @api private
 */
r.prototype.open=r.prototype.connect=function(){// ensure open
return this.connected?this:(this.io.open(),"open"==this.io.readyState&&this.onopen(),this)},/**
 * Sends a `message` event.
 *
 * @return {Socket} self
 * @api public
 */
r.prototype.send=function(){var e=s(arguments);return e.unshift("message"),this.emit.apply(this,e),this},/**
 * Override `emit`.
 * If the event is in `events`, it's emitted normally.
 *
 * @param {String} event name
 * @return {Socket} self
 * @api public
 */
r.prototype.emit=function(e){if(f.hasOwnProperty(e))return p.apply(this,arguments),this;var t=s(arguments),n=i.EVENT;// default
l(t)&&(n=i.BINARY_EVENT);// binary
var r={type:n,data:t};// event ack callback
return"function"==typeof t[t.length-1]&&(u("emitting packet with ack id %d",this.ids),this.acks[this.ids]=t.pop(),r.id=this.ids++),this.connected?this.packet(r):this.sendBuffer.push(r),this},/**
 * Sends a packet.
 *
 * @param {Object} packet
 * @api private
 */
r.prototype.packet=function(e){e.nsp=this.nsp,this.io.packet(e)},/**
 * "Opens" the socket.
 *
 * @api private
 */
r.prototype.onopen=function(){u("transport is open - connecting"),// write connect packet if necessary
"/"!=this.nsp&&this.packet({type:i.CONNECT})},/**
 * Called upon engine `close`.
 *
 * @param {String} reason
 * @api private
 */
r.prototype.onclose=function(e){u("close (%s)",e),this.connected=!1,this.disconnected=!0,this.emit("disconnect",e)},/**
 * Called with socket packet.
 *
 * @param {Object} packet
 * @api private
 */
r.prototype.onpacket=function(e){if(e.nsp==this.nsp)switch(e.type){case i.CONNECT:this.onconnect();break;case i.EVENT:this.onevent(e);break;case i.BINARY_EVENT:this.onevent(e);break;case i.ACK:this.onack(e);break;case i.BINARY_ACK:this.onack(e);break;case i.DISCONNECT:this.ondisconnect();break;case i.ERROR:this.emit("error",e.data)}},/**
 * Called upon a server event.
 *
 * @param {Object} packet
 * @api private
 */
r.prototype.onevent=function(e){var t=e.data||[];u("emitting event %j",t),null!=e.id&&(u("attaching ack callback to event"),t.push(this.ack(e.id))),this.connected?p.apply(this,t):this.receiveBuffer.push(t)},/**
 * Produces an ack callback to emit with an event.
 *
 * @api private
 */
r.prototype.ack=function(e){var t=this,n=!1;return function(){// prevent double callbacks
if(!n){n=!0;var r=s(arguments);u("sending ack %j",r);var o=l(r)?i.BINARY_ACK:i.ACK;t.packet({type:o,id:e,data:r})}}},/**
 * Called upon a server acknowlegement.
 *
 * @param {Object} packet
 * @api private
 */
r.prototype.onack=function(e){u("calling ack %s with %j",e.id,e.data);var t=this.acks[e.id];t.apply(this,e.data),delete this.acks[e.id]},/**
 * Called upon server connect.
 *
 * @api private
 */
r.prototype.onconnect=function(){this.connected=!0,this.disconnected=!1,this.emit("connect"),this.emitBuffered()},/**
 * Emit buffered events (received and emitted).
 *
 * @api private
 */
r.prototype.emitBuffered=function(){var e;for(e=0;e<this.receiveBuffer.length;e++)p.apply(this,this.receiveBuffer[e]);for(this.receiveBuffer=[],e=0;e<this.sendBuffer.length;e++)this.packet(this.sendBuffer[e]);this.sendBuffer=[]},/**
 * Called upon server disconnect.
 *
 * @api private
 */
r.prototype.ondisconnect=function(){u("server disconnect (%s)",this.nsp),this.destroy(),this.onclose("io server disconnect")},/**
 * Called upon forced client/server side disconnections,
 * this method ensures the manager stops tracking us and
 * that reconnections don't get triggered for this.
 *
 * @api private.
 */
r.prototype.destroy=function(){// clean subscriptions to avoid reconnections
for(var e=0;e<this.subs.length;e++)this.subs[e].destroy();this.io.destroy(this)},/**
 * Disconnects the socket manually.
 *
 * @return {Socket} self
 * @api public
 */
r.prototype.close=r.prototype.disconnect=function(){// remove socket from pool
// fire events
return this.connected?(u("performing disconnect (%s)",this.nsp),this.packet({type:i.DISCONNECT}),this.destroy(),this.onclose("io client disconnect"),this):this}},{"./on":4,"component-bind":7,"component-emitter":8,debug:9,"has-binary-data":32,indexof:36,"socket.io-parser":40,"to-array":43}],6:[function(e,t){/**
 * URL parser.
 *
 * @param {String} url
 * @param {Object} An object meant to mimic window.location.
 *                 Defaults to window.location.
 * @api public
 */
function n(e,t){var n=e,t=t||r.location;// relative path support
// parse
// make sure we treat `localhost:80` and `localhost` equally
// define unique id
// define href
return null==e&&(e=t.protocol+"//"+t.hostname),"string"==typeof e&&("/"==e.charAt(0)&&"undefined"!=typeof t&&(e=t.hostname+e),/^(https?|wss?):\/\//.test(e)||(o("protocol-less url %s",e),e="undefined"!=typeof t?t.protocol+"//"+e:"https://"+e),o("parse %s",e),n=i(e)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/",n.id=n.protocol+"://"+n.host+":"+n.port,n.href=n.protocol+"://"+n.host+(t&&t.port==n.port?"":":"+n.port),n}var r="undefined"!=typeof self?self:"undefined"!=typeof window?window:{},i=e("parseuri"),o=e("debug")("socket.io-client:url");/**
 * Module exports.
 */
t.exports=n},{debug:9,parseuri:38}],7:[function(e,t){/**
 * Slice reference.
 */
var n=[].slice;/**
 * Bind `obj` to `fn`.
 *
 * @param {Object} obj
 * @param {Function|String} fn or string
 * @return {Function}
 * @api public
 */
t.exports=function(e,t){if("string"==typeof t&&(t=e[t]),"function"!=typeof t)throw new Error("bind() requires a function");var r=n.call(arguments,2);return function(){return t.apply(e,r.concat(n.call(arguments)))}}},{}],8:[function(e,t){/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */
function n(e){return e?r(e):void 0}/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */
function r(e){for(var t in n.prototype)e[t]=n.prototype[t];return e}/**
 * Expose `Emitter`.
 */
t.exports=n,/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */
n.prototype.on=n.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks[e]=this._callbacks[e]||[]).push(t),this},/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */
n.prototype.once=function(e,t){function n(){r.off(e,n),t.apply(this,arguments)}var r=this;return this._callbacks=this._callbacks||{},n.fn=t,this.on(e,n),this},/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */
n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(e,t){// all
if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;// specific event
var n=this._callbacks[e];if(!n)return this;// remove all handlers
if(1==arguments.length)return delete this._callbacks[e],this;for(var r,i=0;i<n.length;i++)if(r=n[i],r===t||r.fn===t){n.splice(i,1);break}return this},/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */
n.prototype.emit=function(e){this._callbacks=this._callbacks||{};var t=[].slice.call(arguments,1),n=this._callbacks[e];if(n){n=n.slice(0);for(var r=0,i=n.length;i>r;++r)n[r].apply(this,t)}return this},/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */
n.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks[e]||[]},/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */
n.prototype.hasListeners=function(e){return!!this.listeners(e).length}},{}],9:[function(e,t){/**
 * Create a debugger with the given `name`.
 *
 * @param {String} name
 * @return {Type}
 * @api public
 */
function n(e){return n.enabled(e)?function(t){t=r(t);var i=new Date,o=i-(n[e]||i);n[e]=i,t=e+" "+t+" +"+n.humanize(o),// This hackery is required for IE8
// where `console.log` doesn't have 'apply'
window.console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}:function(){}}/**
 * Coerce `val`.
 */
function r(e){return e instanceof Error?e.stack||e.message:e}/**
 * Expose `debug()` as the module.
 */
t.exports=n,/**
 * The currently active debug mode names.
 */
n.names=[],n.skips=[],/**
 * Enables a debug mode by name. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} name
 * @api public
 */
n.enable=function(e){try{localStorage.debug=e}catch(t){}for(var r=(e||"").split(/[\s,]+/),i=r.length,o=0;i>o;o++)e=r[o].replace("*",".*?"),"-"===e[0]?n.skips.push(new RegExp("^"+e.substr(1)+"$")):n.names.push(new RegExp("^"+e+"$"))},/**
 * Disable debug output.
 *
 * @api public
 */
n.disable=function(){n.enable("")},/**
 * Humanize the given `ms`.
 *
 * @param {Number} m
 * @return {String}
 * @api private
 */
n.humanize=function(e){var t=1e3,n=6e4,r=60*n;return e>=r?(e/r).toFixed(1)+"h":e>=n?(e/n).toFixed(1)+"m":e>=t?(e/t|0)+"s":e+"ms"},/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */
n.enabled=function(e){for(var t=0,r=n.skips.length;r>t;t++)if(n.skips[t].test(e))return!1;for(var t=0,r=n.names.length;r>t;t++)if(n.names[t].test(e))return!0;return!1};// persist
try{window.localStorage&&n.enable(localStorage.debug)}catch(i){}},{}],10:[function(e,t){/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */
function n(e){return e?r(e):void 0}/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */
function r(e){for(var t in n.prototype)e[t]=n.prototype[t];return e}/**
 * Module dependencies.
 */
var i=e("indexof");/**
 * Expose `Emitter`.
 */
t.exports=n,/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */
n.prototype.on=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks[e]=this._callbacks[e]||[]).push(t),this},/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */
n.prototype.once=function(e,t){function n(){r.off(e,n),t.apply(this,arguments)}var r=this;return this._callbacks=this._callbacks||{},t._off=n,this.on(e,n),this},/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */
n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=function(e,t){// all
if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;// specific event
var n=this._callbacks[e];if(!n)return this;// remove all handlers
if(1==arguments.length)return delete this._callbacks[e],this;// remove specific handler
var r=i(n,t._off||t);return~r&&n.splice(r,1),this},/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */
n.prototype.emit=function(e){this._callbacks=this._callbacks||{};var t=[].slice.call(arguments,1),n=this._callbacks[e];if(n){n=n.slice(0);for(var r=0,i=n.length;i>r;++r)n[r].apply(this,t)}return this},/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */
n.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks[e]||[]},/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */
n.prototype.hasListeners=function(e){return!!this.listeners(e).length}},{indexof:36}],11:[function(e,t){t.exports=e("./lib/")},{"./lib/":12}],12:[function(e,t){t.exports=e("./socket"),/**
 * Exports parser
 *
 * @api public
 *
 */
t.exports.parser=e("engine.io-parser")},{"./socket":13,"engine.io-parser":22}],13:[function(e,t){/**
 * Socket constructor.
 *
 * @param {String|Object} uri or options
 * @param {Object} options
 * @api public
 */
function n(e,t){if(!(this instanceof n))return new n(e,t);if(t=t||{},e&&"object"==typeof e&&(t=e,e=null),e&&(e=l(e),t.host=e.host,t.secure="https"==e.protocol||"wss"==e.protocol,t.port=e.port,e.query&&(t.query=e.query)),this.secure=null!=t.secure?t.secure:i.location&&"https:"==location.protocol,t.host){var r=t.host.split(":");t.hostname=r.shift(),r.length&&(t.port=r.pop())}this.agent=t.agent||!1,this.hostname=t.hostname||(i.location?location.hostname:"localhost"),this.port=t.port||(i.location&&location.port?location.port:this.secure?443:80),this.query=t.query||{},"string"==typeof this.query&&(this.query=p.decode(this.query)),this.upgrade=!1!==t.upgrade,this.path=(t.path||"/engine.io").replace(/\/$/,"")+"/",this.forceJSONP=!!t.forceJSONP,this.forceBase64=!!t.forceBase64,this.timestampParam=t.timestampParam||"t",this.timestampRequests=t.timestampRequests,this.transports=t.transports||["polling","websocket"],this.readyState="",this.writeBuffer=[],this.callbackBuffer=[],this.policyPort=t.policyPort||843,this.rememberUpgrade=t.rememberUpgrade||!1,this.open(),this.binaryType=null,this.onlyBinaryUpgrades=t.onlyBinaryUpgrades}function r(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}var i="undefined"!=typeof self?self:"undefined"!=typeof window?window:{},o=e("./transports"),s=e("component-emitter"),a=e("debug")("engine.io-client:socket"),c=e("indexof"),u=e("engine.io-parser"),l=e("parseuri"),f=e("parsejson"),p=e("parseqs");/**
 * Module exports.
 */
t.exports=n,n.priorWebsocketSuccess=!1,/**
 * Mix in `Emitter`.
 */
s(n.prototype),/**
 * Protocol version.
 *
 * @api public
 */
n.protocol=u.protocol,// this is an int
/**
 * Expose deps for legacy compatibility
 * and standalone browser access.
 */
n.Socket=n,n.Transport=e("./transport"),n.transports=e("./transports"),n.parser=e("engine.io-parser"),/**
 * Creates transport of the given type.
 *
 * @param {String} transport name
 * @return {Transport}
 * @api private
 */
n.prototype.createTransport=function(e){a('creating transport "%s"',e);var t=r(this.query);// append engine.io protocol identifier
t.EIO=u.protocol,// transport name
t.transport=e,// session id if we already have one
this.id&&(t.sid=this.id);var n=new o[e]({agent:this.agent,hostname:this.hostname,port:this.port,secure:this.secure,path:this.path,query:t,forceJSONP:this.forceJSONP,forceBase64:this.forceBase64,timestampRequests:this.timestampRequests,timestampParam:this.timestampParam,policyPort:this.policyPort,socket:this});return n},/**
 * Initializes transport to use and starts probe.
 *
 * @api private
 */
n.prototype.open=function(){var e;e=this.rememberUpgrade&&n.priorWebsocketSuccess&&-1!=this.transports.indexOf("websocket")?"websocket":this.transports[0],this.readyState="opening";var e=this.createTransport(e);e.open(),this.setTransport(e)},/**
 * Sets the current transport. Disables the existing one (if any).
 *
 * @api private
 */
n.prototype.setTransport=function(e){a("setting transport %s",e.name);var t=this;this.transport&&(a("clearing existing transport %s",this.transport.name),this.transport.removeAllListeners()),// set up transport
this.transport=e,// set up transport listeners
e.on("drain",function(){t.onDrain()}).on("packet",function(e){t.onPacket(e)}).on("error",function(e){t.onError(e)}).on("close",function(){t.onClose("transport close")})},/**
 * Probes a transport.
 *
 * @param {String} transport name
 * @api private
 */
n.prototype.probe=function(e){function t(){if(p.onlyBinaryUpgrades){var t=!this.supportsBinary&&p.transport.supportsBinary;f=f||t}f||(a('probe transport "%s" opened',e),l.send([{type:"ping",data:"probe"}]),l.once("packet",function(t){if(!f)if("pong"==t.type&&"probe"==t.data)a('probe transport "%s" pong',e),p.upgrading=!0,p.emit("upgrading",l),n.priorWebsocketSuccess="websocket"==l.name,a('pausing current transport "%s"',p.transport.name),p.transport.pause(function(){f||"closed"!=p.readyState&&"closing"!=p.readyState&&(a("changing transport and sending upgrade packet"),u(),p.setTransport(l),l.send([{type:"upgrade"}]),p.emit("upgrade",l),l=null,p.upgrading=!1,p.flush())});else{a('probe transport "%s" failed',e);var r=new Error("probe error");r.transport=l.name,p.emit("upgradeError",r)}}))}function r(){f||(// Any callback called by transport should be ignored since now
f=!0,u(),l.close(),l=null)}//Handle any error that happens while probing
function i(t){var n=new Error("probe error: "+t);n.transport=l.name,r(),a('probe transport "%s" failed because of error: %s',e,t),p.emit("upgradeError",n)}function o(){i("transport closed")}//When the socket is closed while we're probing
function s(){i("socket closed")}//When the socket is upgraded while we're probing
function c(e){l&&e.name!=l.name&&(a('"%s" works - aborting "%s"',e.name,l.name),r())}//Remove all listeners on the transport and on self
function u(){l.removeListener("open",t),l.removeListener("error",i),l.removeListener("close",o),p.removeListener("close",s),p.removeListener("upgrading",c)}a('probing transport "%s"',e);var l=this.createTransport(e,{probe:1}),f=!1,p=this;n.priorWebsocketSuccess=!1,l.once("open",t),l.once("error",i),l.once("close",o),this.once("close",s),this.once("upgrading",c),l.open()},/**
 * Called when connection is deemed open.
 *
 * @api public
 */
n.prototype.onOpen=function(){// we check for `readyState` in case an `open`
// listener already closed the socket
if(a("socket open"),this.readyState="open",n.priorWebsocketSuccess="websocket"==this.transport.name,this.emit("open"),this.flush(),"open"==this.readyState&&this.upgrade&&this.transport.pause){a("starting upgrade probes");for(var e=0,t=this.upgrades.length;t>e;e++)this.probe(this.upgrades[e])}},/**
 * Handles a packet.
 *
 * @api private
 */
n.prototype.onPacket=function(e){if("opening"==this.readyState||"open"==this.readyState)switch(a('socket receive: type "%s", data "%s"',e.type,e.data),this.emit("packet",e),// Socket is live - any packet counts
this.emit("heartbeat"),e.type){case"open":this.onHandshake(f(e.data));break;case"pong":this.setPing();break;case"error":var t=new Error("server error");t.code=e.data,this.emit("error",t);break;case"message":this.emit("data",e.data),this.emit("message",e.data)}else a('packet received with socket readyState "%s"',this.readyState)},/**
 * Called upon handshake completion.
 *
 * @param {Object} handshake obj
 * @api private
 */
n.prototype.onHandshake=function(e){this.emit("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.onOpen(),// In case open handler closes socket
"closed"!=this.readyState&&(this.setPing(),// Prolong liveness of socket on heartbeat
this.removeListener("heartbeat",this.onHeartbeat),this.on("heartbeat",this.onHeartbeat))},/**
 * Resets ping timeout.
 *
 * @api private
 */
n.prototype.onHeartbeat=function(e){clearTimeout(this.pingTimeoutTimer);var t=this;t.pingTimeoutTimer=setTimeout(function(){"closed"!=t.readyState&&t.onClose("ping timeout")},e||t.pingInterval+t.pingTimeout)},/**
 * Pings server every `this.pingInterval` and expects response
 * within `this.pingTimeout` or closes connection.
 *
 * @api private
 */
n.prototype.setPing=function(){var e=this;clearTimeout(e.pingIntervalTimer),e.pingIntervalTimer=setTimeout(function(){a("writing ping packet - expecting pong within %sms",e.pingTimeout),e.ping(),e.onHeartbeat(e.pingTimeout)},e.pingInterval)},/**
* Sends a ping packet.
*
* @api public
*/
n.prototype.ping=function(){this.sendPacket("ping")},/**
 * Called on `drain` event
 *
 * @api private
 */
n.prototype.onDrain=function(){for(var e=0;e<this.prevBufferLen;e++)this.callbackBuffer[e]&&this.callbackBuffer[e]();this.writeBuffer.splice(0,this.prevBufferLen),this.callbackBuffer.splice(0,this.prevBufferLen),// setting prevBufferLen = 0 is very important
// for example, when upgrading, upgrade packet is sent over,
// and a nonzero prevBufferLen could cause problems on `drain`
this.prevBufferLen=0,0==this.writeBuffer.length?this.emit("drain"):this.flush()},/**
 * Flush write buffers.
 *
 * @api private
 */
n.prototype.flush=function(){"closed"!=this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(a("flushing %d packets in socket",this.writeBuffer.length),this.transport.send(this.writeBuffer),// keep track of current length of writeBuffer
// splice writeBuffer and callbackBuffer on `drain`
this.prevBufferLen=this.writeBuffer.length,this.emit("flush"))},/**
 * Sends a message.
 *
 * @param {String} message.
 * @param {Function} callback function.
 * @return {Socket} for chaining.
 * @api public
 */
n.prototype.write=n.prototype.send=function(e,t){return this.sendPacket("message",e,t),this},/**
 * Sends a packet.
 *
 * @param {String} packet type.
 * @param {String} data.
 * @param {Function} callback function.
 * @api private
 */
n.prototype.sendPacket=function(e,t,n){var r={type:e,data:t};this.emit("packetCreate",r),this.writeBuffer.push(r),this.callbackBuffer.push(n),this.flush()},/**
 * Closes the connection.
 *
 * @api private
 */
n.prototype.close=function(){return("opening"==this.readyState||"open"==this.readyState)&&(this.onClose("forced close"),a("socket closing - telling transport to close"),this.transport.close()),this},/**
 * Called upon transport error
 *
 * @api private
 */
n.prototype.onError=function(e){a("socket error %j",e),n.priorWebsocketSuccess=!1,this.emit("error",e),this.onClose("transport error",e)},/**
 * Called upon transport close.
 *
 * @api private
 */
n.prototype.onClose=function(e,t){if("opening"==this.readyState||"open"==this.readyState){a('socket close with reason: "%s"',e);var n=this;// clear timers
clearTimeout(this.pingIntervalTimer),clearTimeout(this.pingTimeoutTimer),// clean buffers in next tick, so developers can still
// grab the buffers on `close` event
setTimeout(function(){n.writeBuffer=[],n.callbackBuffer=[],n.prevBufferLen=0},0),// stop event from firing again for transport
this.transport.removeAllListeners("close"),// ensure transport won't stay open
this.transport.close(),// ignore further transport communication
this.transport.removeAllListeners(),// set ready state
this.readyState="closed",// clear session id
this.id=null,// emit close event
this.emit("close",e,t)}},/**
 * Filters upgrades, returning only those matching client transports.
 *
 * @param {Array} server upgrades
 * @api private
 *
 */
n.prototype.filterUpgrades=function(e){for(var t=[],n=0,r=e.length;r>n;n++)~c(this.transports,e[n])&&t.push(e[n]);return t}},{"./transport":14,"./transports":15,"component-emitter":8,debug:9,"engine.io-parser":22,indexof:36,parsejson:29,parseqs:30,parseuri:38}],14:[function(e,t){/**
 * Transport abstract constructor.
 *
 * @param {Object} options.
 * @api private
 */
function n(e){this.path=e.path,this.hostname=e.hostname,this.port=e.port,this.secure=e.secure,this.query=e.query,this.timestampParam=e.timestampParam,this.timestampRequests=e.timestampRequests,this.readyState="",this.agent=e.agent||!1,this.socket=e.socket}/**
 * Module dependencies.
 */
var r=e("engine.io-parser"),i=e("component-emitter");/**
 * Module exports.
 */
t.exports=n,/**
 * Mix in `Emitter`.
 */
i(n.prototype),/**
 * A counter used to prevent collisions in the timestamps used
 * for cache busting.
 */
n.timestamps=0,/**
 * Emits an error.
 *
 * @param {String} str
 * @return {Transport} for chaining
 * @api public
 */
n.prototype.onError=function(e,t){var n=new Error(e);return n.type="TransportError",n.description=t,this.emit("error",n),this},/**
 * Opens the transport.
 *
 * @api public
 */
n.prototype.open=function(){return("closed"==this.readyState||""==this.readyState)&&(this.readyState="opening",this.doOpen()),this},/**
 * Closes the transport.
 *
 * @api private
 */
n.prototype.close=function(){return("opening"==this.readyState||"open"==this.readyState)&&(this.doClose(),this.onClose()),this},/**
 * Sends multiple packets.
 *
 * @param {Array} packets
 * @api private
 */
n.prototype.send=function(e){if("open"!=this.readyState)throw new Error("Transport not open");this.write(e)},/**
 * Called upon open
 *
 * @api private
 */
n.prototype.onOpen=function(){this.readyState="open",this.writable=!0,this.emit("open")},/**
 * Called with data.
 *
 * @param {String} data
 * @api private
 */
n.prototype.onData=function(e){try{var t=r.decodePacket(e,this.socket.binaryType);this.onPacket(t)}catch(n){n.data=e,this.onError("parser decode error",n)}},/**
 * Called with a decoded packet.
 */
n.prototype.onPacket=function(e){this.emit("packet",e)},/**
 * Called upon close.
 *
 * @api private
 */
n.prototype.onClose=function(){this.readyState="closed",this.emit("close")}},{"component-emitter":8,"engine.io-parser":22}],15:[function(e,t,n){/**
 * Polling transport polymorphic constructor.
 * Decides on xhr vs jsonp based on feature detection.
 *
 * @api private
 */
function r(e){var t,n=!1;if(i.location){var r="https:"==location.protocol,c=location.port;// some user agents have empty `location.port`
c||(c=r?443:80),n=e.hostname!=location.hostname||c!=e.port}return e.xdomain=n,t=new o(e),"open"in t&&!e.forceJSONP?new s(e):new a(e)}var i="undefined"!=typeof self?self:"undefined"!=typeof window?window:{},o=e("xmlhttprequest"),s=e("./polling-xhr"),a=e("./polling-jsonp"),c=e("./websocket");/**
 * Export transports.
 */
n.polling=r,n.websocket=c},{"./polling-jsonp":16,"./polling-xhr":17,"./websocket":19,xmlhttprequest:20}],16:[function(e,t){/**
 * Noop.
 */
function n(){}/**
 * JSONP Polling constructor.
 *
 * @param {Object} opts.
 * @api public
 */
function r(e){o.call(this,e),this.query=this.query||{},// define global callbacks array if not present
// we do this here (lazily) to avoid unneeded global pollution
a||(// we need to consider multiple engines in the same page
i.___eio||(i.___eio=[]),a=i.___eio),// callback identifier
this.index=a.length;// add callback to jsonp global
var t=this;a.push(function(e){t.onData(e)}),// append to query string
this.query.j=this.index,// prevent spurious errors from being emitted when the window is unloaded
i.document&&i.addEventListener&&i.addEventListener("beforeunload",function(){t.script&&(t.script.onerror=n)})}var i="undefined"!=typeof self?self:"undefined"!=typeof window?window:{},o=e("./polling"),s=e("component-inherit");/**
 * Module exports.
 */
t.exports=r;/**
 * Cached regular expressions.
 */
var a,c=/\n/g,u=/\\n/g;/**
 * Inherits from Polling.
 */
s(r,o),/*
 * JSONP only supports binary as base64 encoded strings
 */
r.prototype.supportsBinary=!1,/**
 * Closes the socket.
 *
 * @api private
 */
r.prototype.doClose=function(){this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),this.form&&(this.form.parentNode.removeChild(this.form),this.form=null),o.prototype.doClose.call(this)},/**
 * Starts a poll cycle.
 *
 * @api private
 */
r.prototype.doPoll=function(){var e=this,t=document.createElement("script");this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),t.async=!0,t.src=this.uri(),t.onerror=function(t){e.onError("jsonp poll error",t)};var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n),this.script=t;var r="undefined"!=typeof navigator&&/gecko/i.test(navigator.userAgent);r&&setTimeout(function(){var e=document.createElement("iframe");document.body.appendChild(e),document.body.removeChild(e)},100)},/**
 * Writes with a hidden iframe.
 *
 * @param {String} data to send
 * @param {Function} called upon flush.
 * @api private
 */
r.prototype.doWrite=function(e,t){function n(){r(),t()}function r(){if(i.iframe)try{i.form.removeChild(i.iframe)}catch(e){i.onError("jsonp polling iframe removal error",e)}try{// ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
var t='<iframe src="javascript:0" name="'+i.iframeId+'">';o=document.createElement(t)}catch(e){o=document.createElement("iframe"),o.name=i.iframeId,o.src="javascript:0"}o.id=i.iframeId,i.form.appendChild(o),i.iframe=o}var i=this;if(!this.form){var o,s=document.createElement("form"),a=document.createElement("textarea"),l=this.iframeId="eio_iframe_"+this.index;s.className="socketio",s.style.position="absolute",s.style.top="-1000px",s.style.left="-1000px",s.target=l,s.method="POST",s.setAttribute("accept-charset","utf-8"),a.name="d",s.appendChild(a),document.body.appendChild(s),this.form=s,this.area=a}this.form.action=this.uri(),r(),// escape \n to prevent it from being converted into \r\n by some UAs
// double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
e=e.replace(u,"\\\n"),this.area.value=e.replace(c,"\\n");try{this.form.submit()}catch(f){}this.iframe.attachEvent?this.iframe.onreadystatechange=function(){"complete"==i.iframe.readyState&&n()}:this.iframe.onload=n}},{"./polling":18,"component-inherit":21}],17:[function(e,t){/**
 * Empty function
 */
function n(){}/**
 * XHR Polling constructor.
 *
 * @param {Object} opts
 * @api public
 */
function r(e){if(c.call(this,e),s.location){var t="https:"==location.protocol,n=location.port;// some user agents have empty `location.port`
n||(n=t?443:80),this.xd=e.hostname!=s.location.hostname||n!=e.port}}/**
 * Request constructor
 *
 * @param {Object} options
 * @api public
 */
function i(e){this.method=e.method||"GET",this.uri=e.uri,this.xd=!!e.xd,this.async=!1!==e.async,this.data=void 0!=e.data?e.data:null,this.agent=e.agent,this.create(e.isBinary,e.supportsBinary)}function o(){for(var e in i.requests)i.requests.hasOwnProperty(e)&&i.requests[e].abort()}var s="undefined"!=typeof self?self:"undefined"!=typeof window?window:{},a=e("xmlhttprequest"),c=e("./polling"),u=e("component-emitter"),l=e("component-inherit"),f=e("debug")("engine.io-client:polling-xhr");/**
 * Module exports.
 */
t.exports=r,t.exports.Request=i,/**
 * Inherits from Polling.
 */
l(r,c),/**
 * XHR supports binary
 */
r.prototype.supportsBinary=!0,/**
 * Creates a request.
 *
 * @param {String} method
 * @api private
 */
r.prototype.request=function(e){return e=e||{},e.uri=this.uri(),e.xd=this.xd,e.agent=this.agent||!1,e.supportsBinary=this.supportsBinary,new i(e)},/**
 * Sends data.
 *
 * @param {String} data to send.
 * @param {Function} called upon flush.
 * @api private
 */
r.prototype.doWrite=function(e,t){var n="string"!=typeof e&&void 0!==e,r=this.request({method:"POST",data:e,isBinary:n}),i=this;r.on("success",t),r.on("error",function(e){i.onError("xhr post error",e)}),this.sendXhr=r},/**
 * Starts a poll cycle.
 *
 * @api private
 */
r.prototype.doPoll=function(){f("xhr poll");var e=this.request(),t=this;e.on("data",function(e){t.onData(e)}),e.on("error",function(e){t.onError("xhr poll error",e)}),this.pollXhr=e},/**
 * Mix in `Emitter`.
 */
u(i.prototype),/**
 * Creates the XHR object and sends the request.
 *
 * @api private
 */
i.prototype.create=function(e,t){var n=this.xhr=new a({agent:this.agent,xdomain:this.xd}),r=this;try{if(f("xhr open %s: %s",this.method,this.uri),n.open(this.method,this.uri,this.async),t&&(// This has to be done after open because Firefox is stupid
// http://stackoverflow.com/questions/13216903/get-binary-data-with-xmlhttprequest-in-a-firefox-extension
n.responseType="arraybuffer"),"POST"==this.method)try{e?n.setRequestHeader("Content-type","application/octet-stream"):n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(o){}// ie6 check
"withCredentials"in n&&(n.withCredentials=!0),n.onreadystatechange=function(){var e;try{if(4!=n.readyState)return;if(200==n.status||1223==n.status){var i=n.getResponseHeader("Content-Type");e="application/octet-stream"===i?n.response:t?"ok":n.responseText}else// make sure the `error` event handler that's user-set
// does not throw in the same tick and gets caught here
setTimeout(function(){r.onError(n.status)},0)}catch(o){r.onError(o)}null!=e&&r.onData(e)},f("xhr data %s",this.data),n.send(this.data)}catch(o){// Need to defer since .create() is called directly fhrom the constructor
// and thus the 'error' event can only be only bound *after* this exception
// occurs.  Therefore, also, we cannot throw here at all.
return void setTimeout(function(){r.onError(o)},0)}s.document&&(this.index=i.requestsCount++,i.requests[this.index]=this)},/**
 * Called upon successful response.
 *
 * @api private
 */
i.prototype.onSuccess=function(){this.emit("success"),this.cleanup()},/**
 * Called if we have data.
 *
 * @api private
 */
i.prototype.onData=function(e){this.emit("data",e),this.onSuccess()},/**
 * Called upon error.
 *
 * @api private
 */
i.prototype.onError=function(e){this.emit("error",e),this.cleanup()},/**
 * Cleans up house.
 *
 * @api private
 */
i.prototype.cleanup=function(){if("undefined"!=typeof this.xhr&&null!==this.xhr){// xmlhttprequest
this.xhr.onreadystatechange=n;try{this.xhr.abort()}catch(e){}s.document&&delete i.requests[this.index],this.xhr=null}},/**
 * Aborts the request.
 *
 * @api public
 */
i.prototype.abort=function(){this.cleanup()},/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */
s.document&&(i.requestsCount=0,i.requests={},s.attachEvent?s.attachEvent("onunload",o):s.addEventListener&&s.addEventListener("beforeunload",o))},{"./polling":18,"component-emitter":8,"component-inherit":21,debug:9,xmlhttprequest:20}],18:[function(e,t){/**
 * Polling interface.
 *
 * @param {Object} opts
 * @api private
 */
function n(e){var t=e&&e.forceBase64;(!c||t)&&(this.supportsBinary=!1),r.call(this,e)}/**
 * Module dependencies.
 */
var r=e("../transport"),i=e("parseqs"),o=e("engine.io-parser"),s=e("component-inherit"),a=e("debug")("engine.io-client:polling");/**
 * Module exports.
 */
t.exports=n;/**
 * Is XHR2 supported?
 */
var c=function(){var t=e("xmlhttprequest"),n=new t({agent:this.agent,xdomain:!1});return null!=n.responseType}();/**
 * Inherits from Transport.
 */
s(n,r),/**
 * Transport name.
 */
n.prototype.name="polling",/**
 * Opens the socket (triggers polling). We write a PING message to determine
 * when the transport is open.
 *
 * @api private
 */
n.prototype.doOpen=function(){this.poll()},/**
 * Pauses polling.
 *
 * @param {Function} callback upon buffers are flushed and transport is paused
 * @api private
 */
n.prototype.pause=function(e){function t(){a("paused"),n.readyState="paused",e()}var n=this;if(this.readyState="pausing",this.polling||!this.writable){var r=0;this.polling&&(a("we are currently polling - waiting to pause"),r++,this.once("pollComplete",function(){a("pre-pause polling complete"),--r||t()})),this.writable||(a("we are currently writing - waiting to pause"),r++,this.once("drain",function(){a("pre-pause writing complete"),--r||t()}))}else t()},/**
 * Starts polling cycle.
 *
 * @api public
 */
n.prototype.poll=function(){a("polling"),this.polling=!0,this.doPoll(),this.emit("poll")},/**
 * Overloads onData to detect payloads.
 *
 * @api private
 */
n.prototype.onData=function(e){var t=this;a("polling got data %s",e);var n=function(e){// if its a close packet, we close the ongoing requests
// if its the first message we consider the transport open
// if its a close packet, we close the ongoing requests
// otherwise bypass onData and handle the message
return"opening"==t.readyState&&t.onOpen(),"close"==e.type?(t.onClose(),!1):void t.onPacket(e)};// decode payload
o.decodePayload(e,this.socket.binaryType,n),// if an event did not trigger closing
"closed"!=this.readyState&&(// if we got data we're not polling
this.polling=!1,this.emit("pollComplete"),"open"==this.readyState?this.poll():a('ignoring poll - transport state "%s"',this.readyState))},/**
 * For polling, send a close packet.
 *
 * @api private
 */
n.prototype.doClose=function(){function e(){a("writing close packet"),t.write([{type:"close"}])}var t=this;"open"==this.readyState?(a("transport open - closing"),e()):(// in case we're trying to close while
// handshaking is in progress (GH-164)
a("transport not open - deferring close"),this.once("open",e))},/**
 * Writes a packets payload.
 *
 * @param {Array} data packets
 * @param {Function} drain callback
 * @api private
 */
n.prototype.write=function(e){var t=this;this.writable=!1;var n=function(){t.writable=!0,t.emit("drain")},t=this;o.encodePayload(e,this.supportsBinary,function(e){t.doWrite(e,n)})},/**
 * Generates uri for connection.
 *
 * @api private
 */
n.prototype.uri=function(){var e=this.query||{},t=this.secure?"https":"http",n="";// cache busting is forced
// avoid port if default for schema
// prepend ? to query
return!1!==this.timestampRequests&&(e[this.timestampParam]=+new Date+"-"+r.timestamps++),this.supportsBinary||e.sid||(e.b64=1),e=i.encode(e),this.port&&("https"==t&&443!=this.port||"http"==t&&80!=this.port)&&(n=":"+this.port),e.length&&(e="?"+e),t+"://"+this.hostname+n+this.path+e}},{"../transport":14,"component-inherit":21,debug:9,"engine.io-parser":22,parseqs:30,xmlhttprequest:20}],19:[function(e,t){/**
 * WebSocket transport constructor.
 *
 * @api {Object} connection options
 * @api public
 */
function n(e){var t=e&&e.forceBase64;t&&(this.supportsBinary=!1),r.call(this,e)}/**
 * Module dependencies.
 */
var r=e("../transport"),i=e("engine.io-parser"),o=e("parseqs"),s=e("component-inherit"),a=e("debug")("engine.io-client:websocket"),c=e("ws");/**
 * Module exports.
 */
t.exports=n,/**
 * Inherits from Transport.
 */
s(n,r),/**
 * Transport name.
 *
 * @api public
 */
n.prototype.name="websocket",/*
 * WebSockets support binary
 */
n.prototype.supportsBinary=!0,/**
 * Opens socket.
 *
 * @api private
 */
n.prototype.doOpen=function(){if(this.check()){var e=this.uri(),t=void 0,n={agent:this.agent};this.ws=new c(e,t,n),void 0===this.ws.binaryType&&(this.supportsBinary=!1),this.ws.binaryType="arraybuffer",this.addEventListeners()}},/**
 * Adds event listeners to the socket
 *
 * @api private
 */
n.prototype.addEventListeners=function(){var e=this;this.ws.onopen=function(){e.onOpen()},this.ws.onclose=function(){e.onClose()},this.ws.onmessage=function(t){e.onData(t.data)},this.ws.onerror=function(t){e.onError("websocket error",t)}},/**
 * Override `onData` to use a timer on iOS.
 * See: https://gist.github.com/mloughran/2052006
 *
 * @api private
 */
"undefined"!=typeof navigator&&/iPad|iPhone|iPod/i.test(navigator.userAgent)&&(n.prototype.onData=function(e){var t=this;setTimeout(function(){r.prototype.onData.call(t,e)},0)}),/**
 * Writes data to socket.
 *
 * @param {Array} array of packets.
 * @api private
 */
n.prototype.write=function(e){function t(){n.writable=!0,n.emit("drain")}var n=this;this.writable=!1;// encodePacket efficient as it uses WS framing
// no need for encodePayload
for(var r=0,o=e.length;o>r;r++)i.encodePacket(e[r],this.supportsBinary,function(e){//Sometimes the websocket has already been closed but the browser didn't
//have a chance of informing us about it yet, in that case send will
//throw an error
try{n.ws.send(e)}catch(t){a("websocket closed before onclose event")}});// fake drain
// defer to next tick to allow Socket to clear writeBuffer
setTimeout(t,0)},/**
 * Called upon close
 *
 * @api private
 */
n.prototype.onClose=function(){r.prototype.onClose.call(this)},/**
 * Closes socket.
 *
 * @api private
 */
n.prototype.doClose=function(){"undefined"!=typeof this.ws&&this.ws.close()},/**
 * Generates uri for connection.
 *
 * @api private
 */
n.prototype.uri=function(){var e=this.query||{},t=this.secure?"wss":"ws",n="";// avoid port if default for schema
// append timestamp to URI
// communicate binary support capabilities
// prepend ? to query
return this.port&&("wss"==t&&443!=this.port||"ws"==t&&80!=this.port)&&(n=":"+this.port),this.timestampRequests&&(e[this.timestampParam]=+new Date),this.supportsBinary||(e.b64=1),e=o.encode(e),e.length&&(e="?"+e),t+"://"+this.hostname+n+this.path+e},/**
 * Feature detection for WebSocket.
 *
 * @return {Boolean} whether this transport is available.
 * @api public
 */
n.prototype.check=function(){return!(!c||"__initialize"in c&&this.name===n.prototype.name)}},{"../transport":14,"component-inherit":21,debug:9,"engine.io-parser":22,parseqs:30,ws:31}],20:[function(e,t){// browser shim for xmlhttprequest module
var n=e("has-cors");t.exports=function(e){var t=e.xdomain;// XMLHttpRequest can be disabled on IE
try{if("undefined"!=typeof XMLHttpRequest&&(!t||n))return new XMLHttpRequest}catch(r){}if(!t)try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(r){}}},{"has-cors":34}],21:[function(e,t){t.exports=function(e,t){var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},{}],22:[function(e,t,n){/**
 * Encode packet helpers for binary types
 */
function r(e,t,r){if(!t)return n.encodeBase64Packet(e,r);var i=e.data,o=new Uint8Array(i),s=new Uint8Array(1+i.byteLength);s[0]=d[e.type];for(var a=0;a<o.length;a++)s[a+1]=o[a];return r(s.buffer)}function i(e,t,r){if(!t)return n.encodeBase64Packet(e,r);var i=new FileReader;return i.onload=function(){e.data=i.result,n.encodePacket(e,t,r)},i.readAsArrayBuffer(e.data)}function o(e,t,r){if(!t)return n.encodeBase64Packet(e,r);if(h)return i(e,t,r);var o=new Uint8Array(1);o[0]=d[e.type];var s=new y([o.buffer,e.data]);return r(s)}/**
 * Async array map using after
 */
function s(e,t,n){for(var r=new Array(e.length),i=f(e.length,n),o=function(e,n,i){t(n,function(t,n){r[e]=n,i(t,r)})},s=0;s<e.length;s++)o(s,e[s],i)}var a="undefined"!=typeof self?self:"undefined"!=typeof window?window:{},c=e("./keys"),u=e("arraybuffer.slice"),l=e("base64-arraybuffer"),f=e("after"),p=e("utf8"),h=navigator.userAgent.match(/Android/i);/**
 * Current protocol version.
 */
n.protocol=2;/**
 * Packet types.
 */
var d=n.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6},g=c(d),m={type:"error",data:"parser error"},y=e("blob");/**
 * Encodes a packet.
 *
 *     <packet type id> [ <data> ]
 *
 * Example:
 *
 *     5hello world
 *     3
 *     4
 *
 * Binary is encoded in an identical principle
 *
 * @api private
 */
n.encodePacket=function(e,t,n){"function"==typeof t&&(n=t,t=!1);var i=void 0===e.data?void 0:e.data.buffer||e.data;if(a.ArrayBuffer&&i instanceof ArrayBuffer)return r(e,t,n);if(y&&i instanceof a.Blob)return o(e,t,n);// Sending data as a utf-8 string
var s=d[e.type];// data fragment is optional
return void 0!==e.data&&(s+=p.encode(String(e.data))),n(""+s)},/**
 * Encodes a packet with binary data in a base64 string
 *
 * @param {Object} packet, has `type` and `data`
 * @return {String} base64 encoded message
 */
n.encodeBase64Packet=function(e,t){var r="b"+n.packets[e.type];if(y&&e.data instanceof y){var i=new FileReader;return i.onload=function(){var e=i.result.split(",")[1];t(r+e)},i.readAsDataURL(e.data)}var o;try{o=String.fromCharCode.apply(null,new Uint8Array(e.data))}catch(s){for(var c=new Uint8Array(e.data),u=new Array(c.length),l=0;l<c.length;l++)u[l]=c[l];o=String.fromCharCode.apply(null,u)}return r+=a.btoa(o),t(r)},/**
 * Decodes a packet. Changes format to Blob if requested.
 *
 * @return {Object} with `type` and `data` (if any)
 * @api private
 */
n.decodePacket=function(e,t){// String data
if("string"==typeof e||void 0===e){if("b"==e.charAt(0))return n.decodeBase64Packet(e.substr(1),t);e=p.decode(e);var r=e.charAt(0);return Number(r)==r&&g[r]?e.length>1?{type:g[r],data:e.substring(1)}:{type:g[r]}:m}var i=new Uint8Array(e),r=i[0],o=u(e,1);return y&&"blob"===t&&(o=new y([o])),{type:g[r],data:o}},/**
 * Decodes a packet encoded in a base64 string
 *
 * @param {String} base64 encoded message
 * @return {Object} with `type` and `data` (if any)
 */
n.decodeBase64Packet=function(e,t){var n=g[e.charAt(0)];if(!a.ArrayBuffer)return{type:n,data:{base64:!0,data:e.substr(1)}};var r=l.decode(e.substr(1));return"blob"===t&&y&&(r=new y([r])),{type:n,data:r}},/**
 * Encodes multiple messages (payload).
 *
 *     <length>:data
 *
 * Example:
 *
 *     11:hello world2:hi
 *
 * If any contents are binary, they will be encoded as base64 strings. Base64
 * encoded strings are marked with a b before the length specifier
 *
 * @param {Array} packets
 * @api private
 */
n.encodePayload=function(e,t,r){function i(e){return e.length+":"+e}function o(e,r){n.encodePacket(e,t,function(e){r(null,i(e))})}return"function"==typeof t&&(r=t,t=null),t?y&&!h?n.encodePayloadAsBlob(e,r):n.encodePayloadAsArrayBuffer(e,r):e.length?void s(e,o,function(e,t){return r(t.join(""))}):r("0:")},/*
 * Decodes data when a payload is maybe expected. Possible binary contents are
 * decoded from their base64 representation
 *
 * @param {String} data, callback method
 * @api public
 */
n.decodePayload=function(e,t,r){if("string"!=typeof e)return n.decodePayloadAsBinary(e,t,r);"function"==typeof t&&(r=t,t=null);var i;if(""==e)// parser error - ignoring payload
return r(m,0,1);for(var o,s,a="",c=0,u=e.length;u>c;c++){var l=e.charAt(c);if(":"!=l)a+=l;else{if(""==a||a!=(o=Number(a)))// parser error - ignoring payload
return r(m,0,1);if(s=e.substr(c+1,o),a!=s.length)// parser error - ignoring payload
return r(m,0,1);if(s.length){if(i=n.decodePacket(s,t),m.type==i.type&&m.data==i.data)// parser error in individual packet - ignoring payload
return r(m,0,1);var f=r(i,c+o,u);if(!1===f)return}// advance cursor
c+=o,a=""}}return""!=a?r(m,0,1):void 0},/**
 * Encodes multiple messages (payload) as binary.
 *
 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
 * 255><data>
 *
 * Example:
 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
 *
 * @param {Array} packets
 * @return {ArrayBuffer} encoded payload
 * @api private
 */
n.encodePayloadAsArrayBuffer=function(e,t){function r(e,t){n.encodePacket(e,!0,function(e){return t(null,e)})}return e.length?void s(e,r,function(e,n){var r=n.reduce(function(e,t){var n;return n="string"==typeof t?t.length:t.byteLength,e+n.toString().length+n+2},0),i=new Uint8Array(r),o=0;return n.forEach(function(e){var t="string"==typeof e,n=e;if(t){for(var r=new Uint8Array(e.length),s=0;s<e.length;s++)r[s]=e.charCodeAt(s);n=r.buffer}// not true binary
i[o++]=t?0:1;for(var a=n.byteLength.toString(),s=0;s<a.length;s++)i[o++]=parseInt(a[s]);i[o++]=255;for(var r=new Uint8Array(n),s=0;s<r.length;s++)i[o++]=r[s]}),t(i.buffer)}):t(new ArrayBuffer(0))},/**
 * Encode as Blob
 */
n.encodePayloadAsBlob=function(e,t){function r(e,t){n.encodePacket(e,!0,function(e){var n=new Uint8Array(1);if(n[0]=1,"string"==typeof e){for(var r=new Uint8Array(e.length),i=0;i<e.length;i++)r[i]=e.charCodeAt(i);e=r.buffer,n[0]=0}for(var o=e instanceof ArrayBuffer?e.byteLength:e.size,s=o.toString(),a=new Uint8Array(s.length+1),i=0;i<s.length;i++)a[i]=parseInt(s[i]);if(a[s.length]=255,y){var c=new y([n.buffer,a.buffer,e]);t(null,c)}})}s(e,r,function(e,n){return t(new y(n))})},/*
 * Decodes data when a payload is maybe expected. Strings are decoded by
 * interpreting each byte as a key code for entries marked to start with 0. See
 * description of encodePayloadAsBinary
 *
 * @param {ArrayBuffer} data, callback method
 * @api public
 */
n.decodePayloadAsBinary=function(e,t,r){"function"==typeof t&&(r=t,t=null);for(var i=e,o=[];i.byteLength>0;){for(var s=new Uint8Array(i),a=0===s[0],c="",l=1;255!=s[l];l++)c+=s[l];i=u(i,2+c.length),c=parseInt(c);var f=u(i,0,c);if(a)try{f=String.fromCharCode.apply(null,new Uint8Array(f))}catch(p){// iPhone Safari doesn't let you apply to typed arrays
var h=new Uint8Array(f);f="";for(var l=0;l<h.length;l++)f+=String.fromCharCode(h[l])}o.push(f),i=u(i,c)}var d=o.length;o.forEach(function(e,i){r(n.decodePacket(e,t),i,d)})}},{"./keys":23,after:24,"arraybuffer.slice":25,"base64-arraybuffer":26,blob:27,utf8:28}],23:[function(e,t){/**
 * Gets the keys for an object.
 *
 * @return {Array} keys
 * @api private
 */
t.exports=Object.keys||function(e){var t=[],n=Object.prototype.hasOwnProperty;for(var r in e)n.call(e,r)&&t.push(r);return t}},{}],24:[function(e,t){function n(e,t,n){function i(e,r){if(i.count<=0)throw new Error("after called too many times");--i.count,// after first error, rest are passed to err_cb
e?(o=!0,t(e),// future error callbacks will go to error handler
t=n):0!==i.count||o||t(null,r)}var o=!1;return n=n||r,i.count=e,0===e?t():i}function r(){}t.exports=n},{}],25:[function(e,t){/**
 * An abstraction for slicing an arraybuffer even when
 * ArrayBuffer.prototype.slice is not supported
 *
 * @api public
 */
t.exports=function(e,t,n){var r=e.byteLength;if(t=t||0,n=n||r,e.slice)return e.slice(t,n);if(0>t&&(t+=r),0>n&&(n+=r),n>r&&(n=r),t>=r||t>=n||0===r)return new ArrayBuffer(0);for(var i=new Uint8Array(e),o=new Uint8Array(n-t),s=t,a=0;n>s;s++,a++)o[a]=i[s];return o.buffer}},{}],26:[function(e,t,n){/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
!function(e){n.encode=function(t){var n,r=new Uint8Array(t),i=r.length,o="";for(n=0;i>n;n+=3)o+=e[r[n]>>2],o+=e[(3&r[n])<<4|r[n+1]>>4],o+=e[(15&r[n+1])<<2|r[n+2]>>6],o+=e[63&r[n+2]];return i%3===2?o=o.substring(0,o.length-1)+"=":i%3===1&&(o=o.substring(0,o.length-2)+"=="),o},n.decode=function(t){var n,r,i,o,s,a=.75*t.length,c=t.length,u=0;"="===t[t.length-1]&&(a--,"="===t[t.length-2]&&a--);var l=new ArrayBuffer(a),f=new Uint8Array(l);for(n=0;c>n;n+=4)r=e.indexOf(t[n]),i=e.indexOf(t[n+1]),o=e.indexOf(t[n+2]),s=e.indexOf(t[n+3]),f[u++]=r<<2|i>>4,f[u++]=(15&i)<<4|o>>2,f[u++]=(3&o)<<6|63&s;return l}}("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")},{}],27:[function(e,t){function n(e,t){t=t||{};for(var n=new i,r=0;r<e.length;r++)n.append(e[r]);return t.type?n.getBlob(t.type):n.getBlob()}var r="undefined"!=typeof self?self:"undefined"!=typeof window?window:{},i=r.BlobBuilder||r.WebKitBlobBuilder||r.MSBlobBuilder||r.MozBlobBuilder,o=function(){try{var e=new Blob(["hi"]);return 2==e.size}catch(t){return!1}}(),s=i&&i.prototype.append&&i.prototype.getBlob;t.exports=function(){return o?r.Blob:s?n:void 0}()},{}],28:[function(t,n,r){var i="undefined"!=typeof self?self:"undefined"!=typeof window?window:{};!function(t){// Taken from http://mths.be/punycode
function o(e){for(var t,n,r=[],i=0,o=e.length;o>i;)t=e.charCodeAt(i++),t>=55296&&56319>=t&&o>i?(// high surrogate, and there is a next character
n=e.charCodeAt(i++),56320==(64512&n)?// low surrogate
r.push(((1023&t)<<10)+(1023&n)+65536):(// unmatched surrogate; only append this code unit, in case the next
// code unit is the high surrogate of a surrogate pair
r.push(t),i--)):r.push(t);return r}// Taken from http://mths.be/punycode
function s(e){for(var t,n=e.length,r=-1,i="";++r<n;)t=e[r],t>65535&&(t-=65536,i+=b(t>>>10&1023|55296),t=56320|1023&t),i+=b(t);return i}/*--------------------------------------------------------------------------*/
function a(e,t){return b(e>>t&63|128)}function c(e){if(0==(4294967168&e))// 1-byte sequence
return b(e);var t="";// 2-byte sequence
// 3-byte sequence
// 4-byte sequence
return 0==(4294965248&e)?t=b(e>>6&31|192):0==(4294901760&e)?(t=b(e>>12&15|224),t+=a(e,6)):0==(4292870144&e)&&(t=b(e>>18&7|240),t+=a(e,12),t+=a(e,6)),t+=b(63&e|128)}function u(e){for(var t,n=o(e),r=n.length,i=-1,s="";++i<r;)t=n[i],s+=c(t);return s}/*--------------------------------------------------------------------------*/
function l(){if(v>=y)throw Error("Invalid byte index");var e=255&m[v];if(v++,128==(192&e))return 63&e;// If we end up here, it’s not a continuation byte
throw Error("Invalid continuation byte")}function f(){var e,t,n,r,i;if(v>y)throw Error("Invalid byte index");if(v==y)return!1;// 1-byte sequence (no continuation bytes)
if(// Read first byte
e=255&m[v],v++,0==(128&e))return e;// 2-byte sequence
if(192==(224&e)){var t=l();if(i=(31&e)<<6|t,i>=128)return i;throw Error("Invalid continuation byte")}// 3-byte sequence (may include unpaired surrogates)
if(224==(240&e)){if(t=l(),n=l(),i=(15&e)<<12|t<<6|n,i>=2048)return i;throw Error("Invalid continuation byte")}// 4-byte sequence
if(240==(248&e)&&(t=l(),n=l(),r=l(),i=(15&e)<<18|t<<12|n<<6|r,i>=65536&&1114111>=i))return i;throw Error("Invalid UTF-8 detected")}function p(e){m=o(e),y=m.length,v=0;for(var t,n=[];(t=f())!==!1;)n.push(t);return s(n)}// Detect free variables `exports`
var h="object"==typeof r&&r,d="object"==typeof n&&n&&n.exports==h&&n,g="object"==typeof i&&i;(g.global===g||g.window===g)&&(t=g);/*--------------------------------------------------------------------------*/
var m,y,v,b=String.fromCharCode,w={version:"2.0.0",encode:u,decode:p};// Some AMD build optimizers, like r.js, check for specific condition patterns
// like the following:
if("function"==typeof e&&"object"==typeof e.amd&&e.amd)e(function(){return w});else if(h&&!h.nodeType)if(d)// in Node.js or RingoJS v0.8.0+
d.exports=w;else{// in Narwhal or RingoJS v0.7.0-
var x={},k=x.hasOwnProperty;for(var S in w)k.call(w,S)&&(h[S]=w[S])}else// in Rhino or a web browser
t.utf8=w}(this)},{}],29:[function(e,t){var n="undefined"!=typeof self?self:"undefined"!=typeof window?window:{},r=/^[\],:{}\s]*$/,i=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,o=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,s=/(?:^|:|,)(?:\s*\[)+/g,a=/^\s+/,c=/\s+$/;t.exports=function(e){// Attempt to parse using the native JSON parser first
return"string"==typeof e&&e?(e=e.replace(a,"").replace(c,""),n.JSON&&JSON.parse?JSON.parse(e):r.test(e.replace(i,"@").replace(o,"]").replace(s,""))?new Function("return "+e)():void 0):null}},{}],30:[function(e,t,n){/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */
n.encode=function(e){var t="";for(var n in e)e.hasOwnProperty(n)&&(t.length&&(t+="&"),t+=encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t},/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */
n.decode=function(e){for(var t={},n=e.split("&"),r=0,i=n.length;i>r;r++){var o=n[r].split("=");t[decodeURIComponent(o[0])]=decodeURIComponent(o[1])}return t}},{}],31:[function(e,t){/**
 * WebSocket constructor.
 *
 * The third `opts` options object gets ignored in web browsers, since it's
 * non-standard, and throws a TypeError if passed to the constructor.
 * See: https://github.com/einaros/ws/issues/227
 *
 * @param {String} uri
 * @param {Array} protocols (optional)
 * @param {Object) opts (optional)
 * @api public
 */
function n(e,t){var n;return n=t?new i(e,t):new i(e)}/**
 * Module dependencies.
 */
var r=function(){return this}(),i=r.WebSocket||r.MozWebSocket;/**
 * Module exports.
 */
t.exports=i?n:null,i&&(n.prototype=i.prototype)},{}],32:[function(e,t){/**
 * Checks for binary data.
 *
 * Right now only Buffer and ArrayBuffer are supported..
 *
 * @param {Object} anything
 * @api public
 */
function n(e){function t(e){if(!e)return!1;if(r.Buffer&&Buffer.isBuffer(e)||r.ArrayBuffer&&e instanceof ArrayBuffer||r.Blob&&e instanceof Blob||r.File&&e instanceof File)return!0;if(i(e)){for(var n=0;n<e.length;n++)if(t(e[n]))return!0}else if(e&&"object"==typeof e){e.toJSON&&(e=e.toJSON());for(var o in e)if(t(e[o]))return!0}return!1}return t(e)}var r="undefined"!=typeof self?self:"undefined"!=typeof window?window:{},i=e("isarray");/**
 * Module exports.
 */
t.exports=n},{isarray:33}],33:[function(e,t){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],34:[function(e,t){/**
 * Module dependencies.
 */
var n=e("global");/**
 * Module exports.
 *
 * Logic borrowed from Modernizr:
 *
 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
 */
try{t.exports="XMLHttpRequest"in n&&"withCredentials"in new n.XMLHttpRequest}catch(r){// if XMLHttp support is disabled in IE then it will throw
// when trying to create
t.exports=!1}},{global:35}],35:[function(e,t){/**
 * Returns `this`. Execute this without a "context" (i.e. without it being
 * attached to an object of the left-hand side), and `this` points to the
 * "global" scope of the current JS execution.
 */
t.exports=function(){return this}()},{}],36:[function(e,t){var n=[].indexOf;t.exports=function(e,t){if(n)return e.indexOf(t);for(var r=0;r<e.length;++r)if(e[r]===t)return r;return-1}},{}],37:[function(e,t,n){/**
 * HOP ref.
 */
var r=Object.prototype.hasOwnProperty;/**
 * Return own keys in `obj`.
 *
 * @param {Object} obj
 * @return {Array}
 * @api public
 */
n.keys=Object.keys||function(e){var t=[];for(var n in e)r.call(e,n)&&t.push(n);return t},/**
 * Return own values in `obj`.
 *
 * @param {Object} obj
 * @return {Array}
 * @api public
 */
n.values=function(e){var t=[];for(var n in e)r.call(e,n)&&t.push(e[n]);return t},/**
 * Merge `b` into `a`.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api public
 */
n.merge=function(e,t){for(var n in t)r.call(t,n)&&(e[n]=t[n]);return e},/**
 * Return length of `obj`.
 *
 * @param {Object} obj
 * @return {Number}
 * @api public
 */
n.length=function(e){return n.keys(e).length},/**
 * Check if `obj` is empty.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api public
 */
n.isEmpty=function(e){return 0==n.length(e)}},{}],38:[function(e,t){/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */
var n=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,r=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];t.exports=function(e){for(var t=n.exec(e||""),i={},o=14;o--;)i[r[o]]=t[o]||"";return i}},{}],39:[function(e,t,n){/**
 * Returns true if obj is a buffer or an arraybuffer.
 *
 * @api private
 */
function r(e){return i.Buffer&&Buffer.isBuffer(e)||i.ArrayBuffer&&e instanceof ArrayBuffer}var i="undefined"!=typeof self?self:"undefined"!=typeof window?window:{},o=e("isarray");/**
 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
 * Anything with blobs or files should be fed through removeBlobs before coming
 * here.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @api public
 */
n.deconstructPacket=function(e){function t(e){if(!e)return e;if(i.Buffer&&Buffer.isBuffer(e)||i.ArrayBuffer&&e instanceof ArrayBuffer){// replace binary
var r={_placeholder:!0,num:n.length};return n.push(e),r}if(o(e)){for(var s=new Array(e.length),a=0;a<e.length;a++)s[a]=t(e[a]);return s}if("object"==typeof e&&!(e instanceof Date)){var s={};for(var c in e)s[c]=t(e[c]);return s}return e}var n=[],r=e.data,s=e;// number of binary 'attachments'
return s.data=t(r),s.attachments=n.length,{packet:s,buffers:n}},/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @api public
 */
n.reconstructPacket=function(e,t){function n(e){if(e&&e._placeholder){var r=t[e.num];// appropriate buffer (should be natural order anyway)
return r}if(o(e)){for(var i=0;i<e.length;i++)e[i]=n(e[i]);return e}if(e&&"object"==typeof e){for(var s in e)e[s]=n(e[s]);return e}return e}// no longer useful
return e.data=n(e.data),e.attachments=void 0,e},/**
 * Asynchronously removes Blobs or Files from data via
 * FileReader's readAsArrayBuffer method. Used before encoding
 * data as msgpack. Calls callback with the blobless data.
 *
 * @param {Object} data
 * @param {Function} callback
 * @api private
 */
n.removeBlobs=function(e,t){function n(e,c,u){if(!e)return e;// convert any blob
if(i.Blob&&e instanceof Blob||i.File&&e instanceof File){s++;// async filereader
var l=new FileReader;l.onload=function(){// this.result == arraybuffer
u?u[c]=this.result:a=this.result,// if nothing pending its callback time
--s||t(a)},l.readAsArrayBuffer(e)}if(o(e))// handle array
for(var f=0;f<e.length;f++)n(e[f],f,e);else if(e&&"object"==typeof e&&!r(e))// and object
for(var p in e)n(e[p],p,e)}var s=0,a=e;n(a),s||t(a)}},{isarray:41}],40:[function(e,t,n){/**
 * A socket.io Encoder instance
 *
 * @api public
 */
function r(){}/**
 * Encode packet as string.
 *
 * @param {Object} packet
 * @return {String} encoded
 * @api private
 */
function i(e){var t="",r=!1;// first is type
// attachments if we have them
// if we have a namespace other than `/`
// we append it followed by a comma `,`
// immediately followed by the id
// json data
return t+=e.type,(n.BINARY_EVENT==e.type||n.BINARY_ACK==e.type)&&(t+=e.attachments,t+="-"),e.nsp&&"/"!=e.nsp&&(r=!0,t+=e.nsp),null!=e.id&&(r&&(t+=",",r=!1),t+=e.id),null!=e.data&&(r&&(t+=","),t+=p.stringify(e.data)),f("encoded %j as %s",e,t),t}/**
 * Encode packet as 'buffer sequence' by removing blobs, and
 * deconstructing packet into object with placeholders and
 * a list of buffers.
 *
 * @param {Object} packet
 * @return {Buffer} encoded
 * @api private
 */
function o(e,t){function n(e){var n=d.deconstructPacket(e),r=i(n.packet),o=n.buffers;o.unshift(r),// add packet info to beginning of data list
t(o)}d.removeBlobs(e,n)}/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 * @api public
 */
function s(){this.reconstructor=null}/**
 * Decode a packet String (JSON data)
 *
 * @param {String} str
 * @return {Object} packet
 * @api private
 */
function a(e){var t={},r=0;if(// look up type
t.type=Number(e.charAt(0)),null==n.types[t.type])return u();// look up attachments if type binary
if(n.BINARY_EVENT==t.type||n.BINARY_ACK==t.type){for(t.attachments="";"-"!=e.charAt(++r);)t.attachments+=e.charAt(r);t.attachments=Number(t.attachments)}// look up namespace (if any)
if("/"==e.charAt(r+1))for(t.nsp="";++r;){var i=e.charAt(r);if(","==i)break;if(t.nsp+=i,r+1==e.length)break}else t.nsp="/";// look up id
var o=e.charAt(r+1);if(""!=o&&Number(o)==o){for(t.id="";++r;){var i=e.charAt(r);if(null==i||Number(i)!=i){--r;break}if(t.id+=e.charAt(r),r+1==e.length)break}t.id=Number(t.id)}// look up json data
if(e.charAt(++r))try{t.data=p.parse(e.substr(r))}catch(s){return u()}return f("decoded %s as %j",e,t),t}/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 * @api private
 */
function c(e){this.reconPack=e,this.buffers=[]}function u(){return{type:n.ERROR,data:"parser error"}}var l="undefined"!=typeof self?self:"undefined"!=typeof window?window:{},f=e("debug")("socket.io-parser"),p=e("json3"),h=(e("isarray"),e("emitter")),d=e("./binary");/**
 * Protocol version.
 *
 * @api public
 */
n.protocol=3,/**
 * Packet types.
 *
 * @api public
 */
n.types=["CONNECT","DISCONNECT","EVENT","BINARY_EVENT","ACK","BINARY_ACK","ERROR"],/**
 * Packet type `connect`.
 *
 * @api public
 */
n.CONNECT=0,/**
 * Packet type `disconnect`.
 *
 * @api public
 */
n.DISCONNECT=1,/**
 * Packet type `event`.
 *
 * @api public
 */
n.EVENT=2,/**
 * Packet type `ack`.
 *
 * @api public
 */
n.ACK=3,/**
 * Packet type `error`.
 *
 * @api public
 */
n.ERROR=4,/**
 * Packet type 'binary event'
 *
 * @api public
 */
n.BINARY_EVENT=5,/**
 * Packet type `binary ack`. For acks with binary arguments.
 *
 * @api public
 */
n.BINARY_ACK=6,n.Encoder=r,/**
 * Encode a packet as a single string if non-binary, or as a
 * buffer sequence, depending on packet type.
 *
 * @param {Object} obj - packet object
 * @param {Function} callback - function to handle encodings (likely engine.write)
 * @return Calls callback with Array of encodings
 * @api public
 */
r.prototype.encode=function(e,t){if(f("encoding packet %j",e),n.BINARY_EVENT==e.type||n.BINARY_ACK==e.type)o(e,t);else{var r=i(e);t([r])}},n.Decoder=s,/**
 * Mix in `Emitter` with Decoder.
 */
h(s.prototype),/**
 * Decodes an ecoded packet string into packet JSON.
 *
 * @param {String} obj - encoded packet
 * @return {Object} packet
 * @api public
 */
s.prototype.add=function(e){var t;if("string"==typeof e)t=a(e),n.BINARY_EVENT==t.type||n.BINARY_ACK==t.type?(// binary packet's json
this.reconstructor=new c(t),// no attachments, labeled binary but no binary data to follow
0==this.reconstructor.reconPack.attachments&&this.emit("decoded",t)):// non-binary full packet
this.emit("decoded",t);else{if(!(l.Buffer&&Buffer.isBuffer(e)||l.ArrayBuffer&&e instanceof ArrayBuffer||e.base64))throw new Error("Unknown type: "+e);// raw binary data
if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");t=this.reconstructor.takeBinaryData(e),t&&(// received final buffer
this.reconstructor=null,this.emit("decoded",t))}},/**
 * Deallocates a parser's resources
 *
 * @api public
 */
s.prototype.destroy=function(){this.reconstructor&&this.reconstructor.finishedReconstruction()},/**
 * Method to be called when binary data received from connection
 * after a BINARY_EVENT packet.
 *
 * @param {Buffer | ArrayBuffer} binData - the raw binary data received
 * @return {null | Object} returns null if more binary data is expected or
 *   a reconstructed packet object if all buffers have been received.
 * @api private
 */
c.prototype.takeBinaryData=function(e){if(this.buffers.push(e),this.buffers.length==this.reconPack.attachments){// done with buffer list
var t=d.reconstructPacket(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null},/**
 * Cleans up binary packet reconstruction variables.
 *
 * @api private
 */
c.prototype.finishedReconstruction=function(){this.reconPack=null,this.buffers=[]}},{"./binary":39,debug:9,emitter:10,isarray:41,json3:42}],41:[function(e,t){t.exports=e(33)},{}],42:[function(t,n,r){!function(t){// Internal: Determines whether the native `JSON.stringify` and `parse`
// implementations are spec-compliant. Based on work by Ken Snyder.
function n(e){if(n[e]!==s)// Return cached feature test result.
return n[e];var t;if("bug-string-char-index"==e)// IE <= 7 doesn't support accessing string characters using square
// bracket notation. IE 8 only supports this for primitives.
t="a"!="a"[0];else if("json"==e)// Indicates whether both `JSON.stringify` and `JSON.parse` are
// supported.
t=n("json-stringify")&&n("json-parse");else{var r,i='{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';// Test `JSON.stringify`.
if("json-stringify"==e){var o=l.stringify,c="function"==typeof o&&f;if(c){// A test function object with a custom `toJSON` method.
(r=function(){return 1}).toJSON=r;try{c=// Firefox 3.1b1 and b2 serialize string, number, and boolean
// primitives as object literals.
"0"===o(0)&&// FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
// literals.
"0"===o(new Number)&&'""'==o(new String)&&// FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
// does not define a canonical JSON representation (this applies to
// objects with `toJSON` properties as well, *unless* they are nested
// within an object or array).
o(a)===s&&// IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
// FF 3.1b3 pass this test.
o(s)===s&&// Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
// respectively, if the value is omitted entirely.
o()===s&&// FF 3.1b1, 2 throw an error if the given value is not a number,
// string, array, object, Boolean, or `null` literal. This applies to
// objects with custom `toJSON` methods as well, unless they are nested
// inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
// methods entirely.
"1"===o(r)&&"[1]"==o([r])&&// Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
// `"[null]"`.
"[null]"==o([s])&&// YUI 3.0.0b1 fails to serialize `null` literals.
"null"==o(null)&&// FF 3.1b1, 2 halts serialization if an array contains a function:
// `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
// elides non-JSON values from objects and arrays, unless they
// define custom `toJSON` methods.
"[null,null,null]"==o([s,a,null])&&// Simple serialization test. FF 3.1b1 uses Unicode escape sequences
// where character escape codes are expected (e.g., `\b` => `\u0008`).
o({a:[r,!0,!1,null,"\x00\b\n\f\r	"]})==i&&// FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
"1"===o(null,r)&&"[\n 1,\n 2\n]"==o([1,2],null,1)&&// JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
// serialize extended years.
'"-271821-04-20T00:00:00.000Z"'==o(new Date(-864e13))&&// The milliseconds are optional in ES 5, but required in 5.1.
'"+275760-09-13T00:00:00.000Z"'==o(new Date(864e13))&&// Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
// four-digit years instead of six-digit years. Credits: @Yaffle.
'"-000001-01-01T00:00:00.000Z"'==o(new Date(-621987552e5))&&// Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
// values less than 1000. Credits: @Yaffle.
'"1969-12-31T23:59:59.999Z"'==o(new Date(-1))}catch(u){c=!1}}t=c}// Test `JSON.parse`.
if("json-parse"==e){var p=l.parse;if("function"==typeof p)try{// FF 3.1b1, b2 will throw an exception if a bare literal is provided.
// Conforming implementations should also coerce the initial argument to
// a string prior to parsing.
if(0===p("0")&&!p(!1)){// Simple parsing test.
r=p(i);var h=5==r.a.length&&1===r.a[0];if(h){try{// Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
h=!p('"	"')}catch(u){}if(h)try{// FF 4.0 and 4.0.1 allow leading `+` signs and leading
// decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
// certain octal literals.
h=1!==p("01")}catch(u){}if(h)try{// FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
// points. These environments, along with FF 3.1b1 and 2,
// also allow trailing commas in JSON objects and arrays.
h=1!==p("1.")}catch(u){}}}}catch(u){h=!1}t=h}}return n[e]=!!t}// Convenience aliases.
var i,o,s,a={}.toString,c="function"==typeof e&&e.amd,u="object"==typeof JSON&&JSON,l="object"==typeof r&&r&&!r.nodeType&&r;l&&u?(// Explicitly delegate to the native `stringify` and `parse`
// implementations in CommonJS environments.
l.stringify=u.stringify,l.parse=u.parse):// Export for web browsers, JavaScript engines, and asynchronous module
// loaders, using the global `JSON` object if available.
l=t.JSON=u||{};// Test the `Date#getUTC*` methods. Based on work by @Yaffle.
var f=new Date(-0xc782b5b800cec);try{// The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
// results for certain dates in Opera >= 10.53.
f=-109252==f.getUTCFullYear()&&0===f.getUTCMonth()&&1===f.getUTCDate()&&// Safari < 2.0.2 stores the internal millisecond time value correctly,
// but clips the values returned by the date methods to the range of
// signed 32-bit integers ([-2 ** 31, 2 ** 31 - 1]).
10==f.getUTCHours()&&37==f.getUTCMinutes()&&6==f.getUTCSeconds()&&708==f.getUTCMilliseconds()}catch(p){}if(!n("json")){// Common `[[Class]]` name aliases.
var h="[object Function]",d="[object Date]",g="[object Number]",m="[object String]",y="[object Array]",v="[object Boolean]",b=n("bug-string-char-index");// Define additional utility methods if the `Date` methods are buggy.
if(!f)var w=Math.floor,x=[0,31,59,90,120,151,181,212,243,273,304,334],k=function(e,t){return x[t]+365*(e-1970)+w((e-1969+(t=+(t>1)))/4)-w((e-1901+t)/100)+w((e-1601+t)/400)};// Internal: Determines if a property is a direct property of the given
// object. Delegates to the native `Object#hasOwnProperty` method.
(i={}.hasOwnProperty)||(i=function(e){var t,n={};// Safari <= 2.0.3 doesn't implement `Object#hasOwnProperty`, but
// supports the mutable *proto* property.
// Capture a reference to the top-level `Object` constructor.
// Use the `constructor` property to simulate `Object#hasOwnProperty` in
// other environments.
return(n.__proto__=null,n.__proto__={// The *proto* property cannot be set multiple times in recent
// versions of Firefox and SeaMonkey.
toString:1},n).toString!=a?i=function(e){// Capture and break the object's prototype chain (see section 8.6.2
// of the ES 5.1 spec). The parenthesized expression prevents an
// unsafe transformation by the Closure Compiler.
var t=this.__proto__,n=e in(this.__proto__=null,this);// Restore the original prototype chain.
return this.__proto__=t,n}:(t=n.constructor,i=function(e){var n=(this.constructor||t).prototype;return e in this&&!(e in n&&this[e]===n[e])}),n=null,i.call(this,e)});// Internal: A set of primitive types used by `isHostType`.
var S={"boolean":1,number:1,string:1,undefined:1},C=function(e,t){var n=typeof e[t];return"object"==n?!!e[t]:!S[n]};// Public: Serializes a JavaScript `value` as a JSON string. The optional
// `filter` argument may specify either a function that alters how object and
// array members are serialized, or an array of strings and numbers that
// indicates which properties should be serialized. The optional `width`
// argument may be either a string or number that specifies the indentation
// level of the output.
if(// Internal: Normalizes the `for...in` iteration algorithm across
// environments. Each enumerated key is yielded to a `callback` function.
o=function(e,t){var n,r,s,c=0;// Tests for bugs in the current environment's `for...in` algorithm. The
// `valueOf` property inherits the non-enumerable flag from
// `Object.prototype` in older versions of IE, Netscape, and Mozilla.
(n=function(){this.valueOf=0}).prototype.valueOf=0,// Iterate over a new instance of the `Properties` class.
r=new n;for(s in r)// Ignore all properties inherited from `Object.prototype`.
i.call(r,s)&&c++;// Normalize the iteration algorithm.
// Safari <= 2.0.4 enumerates shadowed properties twice.
// A list of non-enumerable properties inherited from `Object.prototype`.
// IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
// properties.
return n=r=null,c?o=2==c?function(e,t){// Create a set of iterated properties.
var n,r={},o=a.call(e)==h;for(n in e)// Store each property name to prevent double enumeration. The
// `prototype` property of functions is not enumerated due to cross-
// environment inconsistencies.
o&&"prototype"==n||i.call(r,n)||!(r[n]=1)||!i.call(e,n)||t(n)}:function(e,t){var n,r,o=a.call(e)==h;for(n in e)o&&"prototype"==n||!i.call(e,n)||(r="constructor"===n)||t(n);// Manually invoke the callback for the `constructor` property due to
// cross-environment inconsistencies.
(r||i.call(e,n="constructor"))&&t(n)}:(r=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"],o=function(e,t){var n,o,s=a.call(e)==h,c=!s&&"function"!=typeof e.constructor&&C(e,"hasOwnProperty")?e.hasOwnProperty:i;for(n in e)// Gecko <= 1.0 enumerates the `prototype` property of functions under
// certain conditions; IE does not.
s&&"prototype"==n||!c.call(e,n)||t(n);// Manually invoke the callback for each non-enumerable property.
for(o=r.length;n=r[--o];c.call(e,n)&&t(n));}),o(e,t)},!n("json-stringify")){// Internal: A map of control characters and their escaped equivalents.
var T={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},A="000000",E=function(e,t){// The `|| 0` expression is necessary to work around a bug in
// Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
return(A+(t||0)).slice(-e)},N="\\u00",P=function(e){var t,n='"',r=0,i=e.length,o=i>10&&b;for(o&&(t=e.split(""));i>r;r++){var s=e.charCodeAt(r);// If the character is a control character, append its Unicode or
// shorthand escape sequence; otherwise, append the character as-is.
switch(s){case 8:case 9:case 10:case 12:case 13:case 34:case 92:n+=T[s];break;default:if(32>s){n+=N+E(2,s.toString(16));break}n+=o?t[r]:b?e.charAt(r):e[r]}}return n+'"'},j=function(e,t,n,r,c,u,l){var f,p,h,b,x,S,C,T,A,N,_,B,O,q,R,L;try{// Necessary for host object support.
f=t[e]}catch(H){}if("object"==typeof f&&f)if(p=a.call(f),p!=d||i.call(f,"toJSON"))"function"==typeof f.toJSON&&(p!=g&&p!=m&&p!=y||i.call(f,"toJSON"))&&(// Prototype <= 1.6.1 adds non-standard `toJSON` methods to the
// `Number`, `String`, `Date`, and `Array` prototypes. JSON 3
// ignores all `toJSON` methods on these objects unless they are
// defined directly on an instance.
f=f.toJSON(e));else if(f>-1/0&&1/0>f){// Dates are serialized according to the `Date#toJSON` method
// specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
// for the ISO 8601 date time string format.
if(k){for(// Manually compute the year, month, date, hours, minutes,
// seconds, and milliseconds if the `getUTC*` methods are
// buggy. Adapted from @Yaffle's `date-shim` project.
x=w(f/864e5),h=w(x/365.2425)+1970-1;k(h+1,0)<=x;h++);for(b=w((x-k(h,0))/30.42);k(h,b+1)<=x;b++);x=1+x-k(h,b),// The `time` value specifies the time within the day (see ES
// 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
// to compute `A modulo B`, as the `%` operator does not
// correspond to the `modulo` operation for negative numbers.
S=(f%864e5+864e5)%864e5,// The hours, minutes, seconds, and milliseconds are obtained by
// decomposing the time within the day. See section 15.9.1.10.
C=w(S/36e5)%24,T=w(S/6e4)%60,A=w(S/1e3)%60,N=S%1e3}else h=f.getUTCFullYear(),b=f.getUTCMonth(),x=f.getUTCDate(),C=f.getUTCHours(),T=f.getUTCMinutes(),A=f.getUTCSeconds(),N=f.getUTCMilliseconds();// Serialize extended years correctly.
f=(0>=h||h>=1e4?(0>h?"-":"+")+E(6,0>h?-h:h):E(4,h))+"-"+E(2,b+1)+"-"+E(2,x)+// Months, dates, hours, minutes, and seconds should have two
// digits; milliseconds should have three.
"T"+E(2,C)+":"+E(2,T)+":"+E(2,A)+// Milliseconds are optional in ES 5.0, but required in 5.1.
"."+E(3,N)+"Z"}else f=null;if(n&&(// If a replacement function was provided, call it to obtain the value
// for serialization.
f=n.call(t,e,f)),null===f)return"null";if(p=a.call(f),p==v)// Booleans are represented literally.
return""+f;if(p==g)// JSON numbers must be finite. `Infinity` and `NaN` are serialized as
// `"null"`.
return f>-1/0&&1/0>f?""+f:"null";if(p==m)// Strings are double-quoted and escaped.
return P(""+f);// Recursively serialize objects and arrays.
if("object"==typeof f){// Check for cyclic structures. This is a linear search; performance
// is inversely proportional to the number of unique nested objects.
for(q=l.length;q--;)if(l[q]===f)// Cyclic structures cannot be serialized by `JSON.stringify`.
throw TypeError();if(// Add the object to the stack of traversed objects.
l.push(f),_=[],// Save the current indentation level and indent one additional level.
R=u,u+=c,p==y){// Recursively serialize array elements.
for(O=0,q=f.length;q>O;O++)B=j(O,f,n,r,c,u,l),_.push(B===s?"null":B);L=_.length?c?"[\n"+u+_.join(",\n"+u)+"\n"+R+"]":"["+_.join(",")+"]":"[]"}else// Recursively serialize object members. Members are selected from
// either a user-specified list of property names, or the object
// itself.
o(r||f,function(e){var t=j(e,f,n,r,c,u,l);t!==s&&// According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
// is not the empty string, let `member` {quote(property) + ":"}
// be the concatenation of `member` and the `space` character."
// The "`space` character" refers to the literal space
// character, not the `space` {width} argument provided to
// `JSON.stringify`.
_.push(P(e)+":"+(c?" ":"")+t)}),L=_.length?c?"{\n"+u+_.join(",\n"+u)+"\n"+R+"}":"{"+_.join(",")+"}":"{}";// Remove the object from the traversed object stack.
return l.pop(),L}};// Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
l.stringify=function(e,t,n){var r,i,o,s;if("function"==typeof t||"object"==typeof t&&t)if((s=a.call(t))==h)i=t;else if(s==y){// Convert the property names array into a makeshift set.
o={};for(var c,u=0,l=t.length;l>u;c=t[u++],s=a.call(c),(s==m||s==g)&&(o[c]=1));}if(n)if((s=a.call(n))==g){// Convert the `width` to an integer and create a string containing
// `width` number of space characters.
if((n-=n%1)>0)for(r="",n>10&&(n=10);r.length<n;r+=" ");}else s==m&&(r=n.length<=10?n:n.slice(0,10));// Opera <= 7.54u2 discards the values associated with empty string keys
// (`""`) only if they are used directly within an object member list
// (e.g., `!("" in { "": 1})`).
return j("",(c={},c[""]=e,c),i,o,r,"",[])}}// Public: Parses a JSON source string.
if(!n("json-parse")){var _,B,O=String.fromCharCode,q={92:"\\",34:'"',47:"/",98:"\b",116:"	",110:"\n",102:"\f",114:"\r"},R=function(){throw _=B=null,SyntaxError()},L=function(){for(var e,t,n,r,i,o=B,s=o.length;s>_;)switch(i=o.charCodeAt(_)){case 9:case 10:case 13:case 32:// Skip whitespace tokens, including tabs, carriage returns, line
// feeds, and space characters.
_++;break;case 123:case 125:case 91:case 93:case 58:case 44:// Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
// the current position.
return e=b?o.charAt(_):o[_],_++,e;case 34:// `"` delimits a JSON string; advance to the next character and
// begin parsing the string. String tokens are prefixed with the
// sentinel `@` character to distinguish them from punctuators and
// end-of-string tokens.
for(e="@",_++;s>_;)if(i=o.charCodeAt(_),32>i)// Unescaped ASCII control characters (those with a code unit
// less than the space character) are not permitted.
R();else if(92==i)switch(// A reverse solidus (`\`) marks the beginning of an escaped
// control character (including `"`, `\`, and `/`) or Unicode
// escape sequence.
i=o.charCodeAt(++_)){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:// Revive escaped control characters.
e+=q[i],_++;break;case 117:for(// `\u` marks the beginning of a Unicode escape sequence.
// Advance to the first character and validate the
// four-digit code point.
t=++_,n=_+4;n>_;_++)i=o.charCodeAt(_),// A valid sequence comprises four hexdigits (case-
// insensitive) that form a single hexadecimal value.
i>=48&&57>=i||i>=97&&102>=i||i>=65&&70>=i||// Invalid Unicode escape sequence.
R();// Revive the escaped character.
e+=O("0x"+o.slice(t,_));break;default:// Invalid escape sequence.
R()}else{if(34==i)// An unescaped double-quote character marks the end of the
// string.
break;// Optimize for the common case where a string is valid.
for(i=o.charCodeAt(_),t=_;i>=32&&92!=i&&34!=i;)i=o.charCodeAt(++_);// Append the string as-is.
e+=o.slice(t,_)}if(34==o.charCodeAt(_))// Advance to the next character and return the revived string.
return _++,e;// Unterminated string.
R();default:// Parse an integer or floating-point value.
if(// Parse numbers and literals.
t=_,// Advance past the negative sign, if one is specified.
45==i&&(r=!0,i=o.charCodeAt(++_)),i>=48&&57>=i){// Parse the integer component.
for(// Leading zeroes are interpreted as octal literals.
48==i&&(i=o.charCodeAt(_+1),i>=48&&57>=i)&&// Illegal octal literal.
R(),r=!1;s>_&&(i=o.charCodeAt(_),i>=48&&57>=i);_++);// Floats cannot contain a leading decimal point; however, this
// case is already accounted for by the parser.
if(46==o.charCodeAt(_)){// Parse the decimal component.
for(n=++_;s>n&&(i=o.charCodeAt(n),i>=48&&57>=i);n++);n==_&&// Illegal trailing decimal.
R(),_=n}if(// Parse exponents. The `e` denoting the exponent is
// case-insensitive.
i=o.charCodeAt(_),101==i||69==i){// Parse the exponential component.
for(i=o.charCodeAt(++_),// Skip past the sign following the exponent, if one is
// specified.
(43==i||45==i)&&_++,n=_;s>n&&(i=o.charCodeAt(n),i>=48&&57>=i);n++);n==_&&// Illegal empty exponent.
R(),_=n}// Coerce the parsed value to a JavaScript number.
return+o.slice(t,_)}// `true`, `false`, and `null` literals.
if(// A negative sign may only precede numbers.
r&&R(),"true"==o.slice(_,_+4))return _+=4,!0;if("false"==o.slice(_,_+5))return _+=5,!1;if("null"==o.slice(_,_+4))return _+=4,null;// Unrecognized token.
R()}// Return the sentinel `$` character if the parser has reached the end
// of the source string.
return"$"},H=function(e){var t,n;if("$"==e&&// Unexpected end of input.
R(),"string"==typeof e){if("@"==(b?e.charAt(0):e[0]))// Remove the sentinel `@` character.
return e.slice(1);// Parse object and array literals.
if("["==e){for(// Parses a JSON array, returning a new JavaScript array.
t=[];e=L(),"]"!=e;n||(n=!0))// If the array literal contains elements, the current token
// should be a comma separating the previous element from the
// next.
n&&(","==e?(e=L(),"]"==e&&// Unexpected trailing `,` in array literal.
R()):// A `,` must separate each array element.
R()),// Elisions and leading commas are not permitted.
","==e&&R(),t.push(H(e));return t}if("{"==e){for(// Parses a JSON object, returning a new JavaScript object.
t={};e=L(),"}"!=e;n||(n=!0))// If the object literal contains members, the current token
// should be a comma separator.
n&&(","==e?(e=L(),"}"==e&&// Unexpected trailing `,` in object literal.
R()):// A `,` must separate each object member.
R()),// Leading commas are not permitted, object property names must be
// double-quoted strings, and a `:` must separate each property
// name and value.
(","==e||"string"!=typeof e||"@"!=(b?e.charAt(0):e[0])||":"!=L())&&R(),t[e.slice(1)]=H(L());return t}// Unexpected token encountered.
R()}return e},D=function(e,t,n){var r=I(e,t,n);r===s?delete e[t]:e[t]=r},I=function(e,t,n){var r,i=e[t];if("object"==typeof i&&i)// `forEach` can't be used to traverse an array in Opera <= 8.54
// because its `Object#hasOwnProperty` implementation returns `false`
// for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
if(a.call(i)==y)for(r=i.length;r--;)D(i,r,n);else o(i,function(e){D(i,e,n)});return n.call(e,t,i)};// Public: `JSON.parse`. See ES 5.1 section 15.12.2.
l.parse=function(e,t){var n,r;// If a JSON string contains multiple tokens, it is invalid.
// Reset the parser state.
return _=0,B=""+e,n=H(L()),"$"!=L()&&R(),_=B=null,t&&a.call(t)==h?I((r={},r[""]=n,r),"",t):n}}}// Export for asynchronous module loaders.
c&&e(function(){return l})}(this)},{}],43:[function(e,t){function n(e,t){var n=[];t=t||0;for(var r=t||0;r<e.length;r++)n[r-t]=e[r];return n}t.exports=n},{}]},{},[1])(1)}),define("js/magician",["require","jquery","velocity","underscore","js/constant","backbone","js/timer","js/token","socket-io"],function(e){function t(e,t){this.selection=t,this.el=e,this.$el=$(e),this.$avatar=this.$el.find(".magician-avatar"),this.$name=this.$el.find(".magician-name"),this.$accuracy=this.$el.find(".accuracy-percent"),this.selection.on("change:accuracy",s.bind(function(){console.log("accuracy changed:",this.selection.get("accuracy"));var e=this.selection.get("accuracy"),t=40+10*e+"%";this.$el.find(".frontend").css("height",t),this.$accuracy.html((e/6*100).toFixed(0)+"%")},this)),C.on("magician-swtiched",s.bind(function(){console.log("MagicianView: magician changed"),this.magician=C.get("magician"),this.$avatar.hide().attr("src",this.magician.get("avatar")).velocity("fadeIn"),this.$name.html(this.magician.get("name"))},this))}function n(e,t){this.cardSelection=t,this.el=e,this.$el=$(e),this.$cards=this.$el.find(".card");var n=this;C.on("magician-swtiched",s.bind(function(){this.magician=C.get("magician"),this.magician.once("score",s.bind(function(){var e=this.cardSelection.get(String(this.magician.get("id")));e||this.clearHighlight()},this)),this.magician.once("scored",s.bind(function(){var e=this.magician,t=this.cardSelection.get(String(e.get("id")));if(t&&-1!==this.magician.get("scores").indexOf(a.reverseScore(t))){var n=this.cardSelection.get("accuracy")||0;this.cardSelection.set("accuracy",n+1)}setTimeout(s.bind(function(){var t=this.cardSelection.get(String(e.get("id")));t&&this.$el.find("."+t).removeClass("highlighted").removeClass("selected").addClass("close")},this),2e3)},this))},this)),this.$el.find("div.card").click(function(){var e=$(this);if(!e.hasClass("close")){var t=n.magician&&n.magician.get("status")===a.MAGICIAN_PLAYING&&!n.cardSelection.has(String(n.magician.get("id")));if(t){var r=e.data("score");e.hasClass("highlighted")?n.cardSelection.set(String(n.magician.id),r):(n.$el.find(".highlighted").removeClass("highlighted"),e.addClass("highlighted"))}}}),this.cardSelection.on("change",s.bind(function(){if(this.magician){var e=this.cardSelection.get(String(this.magician.id));this.$el.find("."+e).addClass("highlighted").addClass("selected")}},this)),s.extend(this,c.Events)}function r(e){C.set("status",e.status),e.magician&&C.setMagician(new b(e.magician));var t=C.get("magician");if(t)switch(t.get("status")){case a.MAGICIAN_PLAYING:t.start();break;case a.MAGICIAN_PLAYING:t.score();break;case a.MAGICIAN_FINISHED:t.finish()}y.show()}function i(e){m.timing("final",e.end)}function o(){window.location="/score"}e("jquery"),e("velocity");var s=e("underscore"),a=e("js/constant"),c=e("backbone"),u=e("js/timer"),l=e("js/token"),f=e("socket-io"),p=window.location.hostname,h=f.connect("http://"+p+"/show"),d=function(e,t){this.selection=t,this.el=e,this.$el=$(e),this.$cards=this.$el.find(".card"),C.on("magician-swtiched",s.bind(function(){this.magician=C.get("magician"),this.magician.once("scored",s.bind(function(){var e=this.magician.get("scores");s.each(e,s.bind(function(e,t){var n=this.$el.find(".judge:eq("+t+")");e=a.score(e);var r="card "+e,i=this.selection.get(String(this.magician.id));i===e&&(r+=" bingo highlighted"),console.log("showScore, className:",r),n.find(".card")[0].className=r},this)),setTimeout(s.bind(function(){this.$cards.attr("class","card close")},this),2e3)},this))},this))},g=c.Model.extend({score:function(e,t){this.set(magicianId,t)},isScoreSelected:function(e){s.find(this.keys(),s.bind(function(t){return this.get(t)===e},this))}});n.prototype.clearHighlight=function(){this.$cards.removeClass("highlighted")};var m,y,v=c.Model.extend({setMagician:function(e){this.set("magician",e),this.trigger("magician-swtiched")}}),b=c.Model.extend({initialize:function(e){this.set(e)},start:function(){this.set("status",a.MAGICIAN_PLAYING),this.trigger("start")},score:function(){this.set("status",a.MAGICIAN_SCORE),this.trigger("score")},finish:function(){this.set("status",a.MAGICIAN_FINISHED),this.trigger("scored")}}),w="waiting",x="playing",k="score",S="finished",C=new v,T=new g;T.on("change",function(){});var A,E,N;$(function(){y=$("#show"),m=new u($(".timer")[0]),m.setShowModel(C),A=new n($(".cards-wrapper")[0],T),E=new d($(".judge-list")[0],T),N=new t($(".magician")[0],T);var e=!1;h.on("connect",function(){function t(e){var t=(new Date).getTime();h.emit("query",{data:"status",id:t}),n[String(t)]=e}if(e)return void console.error("Connect event is duplicated!");e=!0,console.log("socket connected");var n={};h.on("query",function(e){var t=n[String(e.id)];console.log("query callback",e.id,t),t&&(delete n[String(e.id)],t.call(null,e.result))}),t(function(e){switch(e.status){case w:window.location="/wait";break;case x:r(e);break;case k:i(e);break;case S:default:o()}}),h.on("score",function(e){console.log("score"),i(e)}),h.on("magician-changed",function(e){console.log("magician changed---------------"),console.log(e),C.setMagician(new b(e)),console.log("---------------magician changed")}),h.on("magician-start",function(e){console.log("magician start---------------"),console.log(e),C.get("magician").set(e),C.get("magician").start(),console.log("---------------magician start")}),h.on("magician-score",function(e){console.log(e),console.log("magician score---------------");try{console.log(C);var t=C.get("magician");t&&(t.set(e),t.score())}catch(n){console.error(n)}console.log("---------------magician score")}),h.on("magician-finish",function(e){console.log("magician finish-------------"),console.log(e),C.get("magician").set(e),C.get("magician").finish(),console.log("-------------magician finish")}),h.on("finish",function(){console.log("The show is finished"),o()})}),h.on("connect_error",function(e){console.error(e)}),h.on("connect_timeout",function(){console.error("connect timeout!")})})});