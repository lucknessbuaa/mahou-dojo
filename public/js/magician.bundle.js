/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){function n(e){var t=e.length,n=K.type(e);return"function"===n||K.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e}function r(e,t,n){if(K.isFunction(t))return K.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return K.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(at.test(t))return K.filter(t,e,n);t=K.filter(t,e)}return K.grep(e,function(e){return U.call(t,e)>=0!==n})}function i(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function o(e){var t=dt[e]={};return K.each(e.match(pt)||[],function(e,n){t[n]=!0}),t}function s(){Z.removeEventListener("DOMContentLoaded",s,!1),e.removeEventListener("load",s,!1),K.ready()}function a(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=K.expando+Math.random()}function u(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(wt,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:bt.test(n)?K.parseJSON(n):n}catch(i){}vt.set(e,t,n)}else n=void 0;return n}function c(){return!0}function l(){return!1}function f(){try{return Z.activeElement}catch(e){}}function h(e,t){return K.nodeName(e,"table")&&K.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function p(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function d(e){var t=Lt.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function g(e,t){for(var n=0,r=e.length;r>n;n++)yt.set(e[n],"globalEval",!t||yt.get(t[n],"globalEval"))}function m(e,t){var n,r,i,o,s,a,u,c;if(1===t.nodeType){if(yt.hasData(e)&&(o=yt.access(e),s=yt.set(t,o),c=o.events)){delete s.handle,s.events={};for(i in c)for(n=0,r=c[i].length;r>n;n++)K.event.add(t,i,c[i][n])}vt.hasData(e)&&(a=vt.access(e),u=K.extend({},a),vt.set(t,u))}}function y(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return void 0===t||t&&K.nodeName(e,t)?K.merge([e],n):n}function v(e,t){var n=t.nodeName.toLowerCase();"input"===n&&St.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}function b(t,n){var r,i=K(n.createElement(t)).appendTo(n.body),o=e.getDefaultComputedStyle&&(r=e.getDefaultComputedStyle(i[0]))?r.display:K.css(i[0],"display");return i.detach(),o}function w(e){var t=Z,n=qt[e];return n||(n=b(e,t),"none"!==n&&n||(Ft=(Ft||K("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=Ft[0].contentDocument,t.write(),t.close(),n=b(e,t),Ft.detach()),qt[e]=n),n}function x(e,t,n){var r,i,o,s,a=e.style;return n=n||Vt(e),n&&(s=n.getPropertyValue(t)||n[t]),n&&(""!==s||K.contains(e.ownerDocument,e)||(s=K.style(e,t)),Rt.test(s)&&Yt.test(t)&&(r=a.width,i=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=r,a.minWidth=i,a.maxWidth=o)),void 0!==s?s+"":s}function _(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function k(e,t){if(t in e)return t;for(var n=t[0].toUpperCase()+t.slice(1),r=t,i=Xt.length;i--;)if(t=Xt[i]+n,t in e)return t;return r}function S(e,t,n){var r=Wt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function T(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;4>o;o+=2)"margin"===n&&(s+=K.css(e,n+_t[o],!0,i)),r?("content"===n&&(s-=K.css(e,"padding"+_t[o],!0,i)),"margin"!==n&&(s-=K.css(e,"border"+_t[o]+"Width",!0,i))):(s+=K.css(e,"padding"+_t[o],!0,i),"padding"!==n&&(s+=K.css(e,"border"+_t[o]+"Width",!0,i)));return s}function C(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Vt(e),s="border-box"===K.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=x(e,t,o),(0>i||null==i)&&(i=e.style[t]),Rt.test(i))return i;r=s&&(J.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0}return i+T(e,t,n||(s?"border":"content"),r,o)+"px"}function A(e,t){for(var n,r,i,o=[],s=0,a=e.length;a>s;s++)r=e[s],r.style&&(o[s]=yt.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&kt(r)&&(o[s]=yt.access(r,"olddisplay",w(r.nodeName)))):(i=kt(r),"none"===n&&i||yt.set(r,"olddisplay",i?n:K.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}function E(e,t,n,r,i){return new E.prototype.init(e,t,n,r,i)}function N(){return setTimeout(function(){Jt=void 0}),Jt=K.now()}function D(e,t){var n,r=0,i={height:e};for(t=t?1:0;4>r;r+=2-t)n=_t[r],i["margin"+n]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function P(e,t,n){for(var r,i=(nn[t]||[]).concat(nn["*"]),o=0,s=i.length;s>o;o++)if(r=i[o].call(n,t,e))return r}function M(e,t,n){var r,i,o,s,a,u,c,l,f=this,h={},p=e.style,d=e.nodeType&&kt(e),g=yt.get(e,"fxshow");n.queue||(a=K._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,f.always(function(){f.always(function(){a.unqueued--,K.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],c=K.css(e,"display"),l="none"===c?yt.get(e,"olddisplay")||w(e.nodeName):c,"inline"===l&&"none"===K.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",f.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Qt.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(d?"hide":"show")){if("show"!==i||!g||void 0===g[r])continue;d=!0}h[r]=g&&g[r]||K.style(e,r)}else c=void 0;if(K.isEmptyObject(h))"inline"===("none"===c?w(e.nodeName):c)&&(p.display=c);else{g?"hidden"in g&&(d=g.hidden):g=yt.access(e,"fxshow",{}),o&&(g.hidden=!d),d?K(e).show():f.done(function(){K(e).hide()}),f.done(function(){var t;yt.remove(e,"fxshow");for(t in h)K.style(e,t,h[t])});for(r in h)s=P(d?g[r]:0,r,f),r in g||(g[r]=s.start,d&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function j(e,t){var n,r,i,o,s;for(n in e)if(r=K.camelCase(n),i=t[r],o=e[n],K.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=K.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function O(e,t,n){var r,i,o=0,s=tn.length,a=K.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=Jt||N(),n=Math.max(0,c.startTime+c.duration-t),r=n/c.duration||0,o=1-r,s=0,u=c.tweens.length;u>s;s++)c.tweens[s].run(o);return a.notifyWith(e,[c,o,n]),1>o&&u?n:(a.resolveWith(e,[c]),!1)},c=a.promise({elem:e,props:K.extend({},t),opts:K.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Jt||N(),duration:n.duration,tweens:[],createTween:function(t,n){var r=K.Tween(e,c.opts,t,n,c.opts.specialEasing[t]||c.opts.easing);return c.tweens.push(r),r},stop:function(t){var n=0,r=t?c.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)c.tweens[n].run(1);return t?a.resolveWith(e,[c,t]):a.rejectWith(e,[c,t]),this}}),l=c.props;for(j(l,c.opts.specialEasing);s>o;o++)if(r=tn[o].call(c,e,l,c.opts))return r;return K.map(l,P,c),K.isFunction(c.opts.start)&&c.opts.start.call(e,c),K.fx.timer(K.extend(u,{elem:e,anim:c,queue:c.opts.queue})),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always)}function I(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(pt)||[];if(K.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function L(e,t,n,r){function i(a){var u;return o[a]=!0,K.each(e[a]||[],function(e,a){var c=a(t,n,r);return"string"!=typeof c||s||o[c]?s?!(u=c):void 0:(t.dataTypes.unshift(c),i(c),!1)}),u}var o={},s=e===_n;return i(t.dataTypes[0])||!o["*"]&&i("*")}function B(e,t){var n,r,i=K.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&K.extend(!0,e,r),e}function H(e,t,n){for(var r,i,o,s,a=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):void 0}function F(e,t,n,r){var i,o,s,a,u,c={},l=e.dataTypes.slice();if(l[1])for(s in e.converters)c[s.toLowerCase()]=e.converters[s];for(o=l.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=l.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=c[u+" "+o]||c["* "+o],!s)for(i in c)if(a=i.split(" "),a[1]===o&&(s=c[u+" "+a[0]]||c["* "+a[0]])){s===!0?s=c[i]:c[i]!==!0&&(o=a[0],l.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(f){return{state:"parsererror",error:s?f:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}function q(e,t,n,r){var i;if(K.isArray(t))K.each(t,function(t,i){n||Cn.test(e)?r(e,i):q(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==K.type(t))r(e,t);else for(i in t)q(e+"["+i+"]",t[i],n,r)}function Y(e){return K.isWindow(e)?e:9===e.nodeType&&e.defaultView}var R=[],V=R.slice,$=R.concat,W=R.push,U=R.indexOf,z={},G=z.toString,X=z.hasOwnProperty,J={},Z=e.document,Q="2.1.1",K=function(e,t){return new K.fn.init(e,t)},et=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,tt=/^-ms-/,nt=/-([\da-z])/gi,rt=function(e,t){return t.toUpperCase()};K.fn=K.prototype={jquery:Q,constructor:K,selector:"",length:0,toArray:function(){return V.call(this)},get:function(e){return null!=e?0>e?this[e+this.length]:this[e]:V.call(this)},pushStack:function(e){var t=K.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return K.each(this,e,t)},map:function(e){return this.pushStack(K.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(V.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:W,sort:R.sort,splice:R.splice},K.extend=K.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[a]||{},a++),"object"==typeof s||K.isFunction(s)||(s={}),a===u&&(s=this,a--);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(c&&r&&(K.isPlainObject(r)||(i=K.isArray(r)))?(i?(i=!1,o=n&&K.isArray(n)?n:[]):o=n&&K.isPlainObject(n)?n:{},s[t]=K.extend(c,o,r)):void 0!==r&&(s[t]=r));return s},K.extend({expando:"jQuery"+(Q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===K.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!K.isArray(e)&&e-parseFloat(e)>=0},isPlainObject:function(e){return"object"!==K.type(e)||e.nodeType||K.isWindow(e)?!1:e.constructor&&!X.call(e.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?z[G.call(e)]||"object":typeof e},globalEval:function(e){var t,n=eval;e=K.trim(e),e&&(1===e.indexOf("use strict")?(t=Z.createElement("script"),t.text=e,Z.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(tt,"ms-").replace(nt,rt)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,r){var i,o=0,s=e.length,a=n(e);if(r){if(a)for(;s>o&&(i=t.apply(e[o],r),i!==!1);o++);else for(o in e)if(i=t.apply(e[o],r),i===!1)break}else if(a)for(;s>o&&(i=t.call(e[o],o,e[o]),i!==!1);o++);else for(o in e)if(i=t.call(e[o],o,e[o]),i===!1)break;return e},trim:function(e){return null==e?"":(e+"").replace(et,"")},makeArray:function(e,t){var r=t||[];return null!=e&&(n(Object(e))?K.merge(r,"string"==typeof e?[e]:e):W.call(r,e)),r},inArray:function(e,t,n){return null==t?-1:U.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;n>r;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,s=e.length,a=!n;s>o;o++)r=!t(e[o],o),r!==a&&i.push(e[o]);return i},map:function(e,t,r){var i,o=0,s=e.length,a=n(e),u=[];if(a)for(;s>o;o++)i=t(e[o],o,r),null!=i&&u.push(i);else for(o in e)i=t(e[o],o,r),null!=i&&u.push(i);return $.apply([],u)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),K.isFunction(e)?(r=V.call(arguments,2),i=function(){return e.apply(t||this,r.concat(V.call(arguments)))},i.guid=e.guid=e.guid||K.guid++,i):void 0},now:Date.now,support:J}),K.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){z["[object "+t+"]"]=t.toLowerCase()});var it=function(e){function t(e,t,n,r){var i,o,s,a,u,c,f,p,d,g;if((t?t.ownerDocument||t:q)!==M&&P(t),t=t||M,n=n||[],!e||"string"!=typeof e)return n;if(1!==(a=t.nodeType)&&9!==a)return[];if(O&&!r){if(i=vt.exec(e))if(s=i[1]){if(9===a){if(o=t.getElementById(s),!o||!o.parentNode)return n;if(o.id===s)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(s))&&H(t,o)&&o.id===s)return n.push(o),n}else{if(i[2])return K.apply(n,t.getElementsByTagName(e)),n;if((s=i[3])&&x.getElementsByClassName&&t.getElementsByClassName)return K.apply(n,t.getElementsByClassName(s)),n}if(x.qsa&&(!I||!I.test(e))){if(p=f=F,d=t,g=9===a&&e,1===a&&"object"!==t.nodeName.toLowerCase()){for(c=T(e),(f=t.getAttribute("id"))?p=f.replace(wt,"\\$&"):t.setAttribute("id",p),p="[id='"+p+"'] ",u=c.length;u--;)c[u]=p+h(c[u]);d=bt.test(e)&&l(t.parentNode)||t,g=c.join(",")}if(g)try{return K.apply(n,d.querySelectorAll(g)),n}catch(m){}finally{f||t.removeAttribute("id")}}}return A(e.replace(ut,"$1"),t,n,r)}function n(){function e(n,r){return t.push(n+" ")>_.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[];return e}function r(e){return e[F]=!0,e}function i(e){var t=M.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),r=e.length;r--;)_.attrHandle[n[r]]=t}function s(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||G)-(~e.sourceIndex||G);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function a(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function u(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function c(e){return r(function(t){return t=+t,r(function(n,r){for(var i,o=e([],n.length,t),s=o.length;s--;)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}function l(e){return e&&typeof e.getElementsByTagName!==z&&e}function f(){}function h(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function p(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=R++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,s){var a,u,c=[Y,o];if(s){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,s))return!0}else for(;t=t[r];)if(1===t.nodeType||i){if(u=t[F]||(t[F]={}),(a=u[r])&&a[0]===Y&&a[1]===o)return c[2]=a[2];if(u[r]=c,c[2]=e(t,n,s))return!0}}}function d(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function g(e,n,r){for(var i=0,o=n.length;o>i;i++)t(e,n[i],r);return r}function m(e,t,n,r,i){for(var o,s=[],a=0,u=e.length,c=null!=t;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),c&&t.push(a));return s}function y(e,t,n,i,o,s){return i&&!i[F]&&(i=y(i)),o&&!o[F]&&(o=y(o,s)),r(function(r,s,a,u){var c,l,f,h=[],p=[],d=s.length,y=r||g(t||"*",a.nodeType?[a]:a,[]),v=!e||!r&&t?y:m(y,h,e,a,u),b=n?o||(r?e:d||i)?[]:s:v;if(n&&n(v,b,a,u),i)for(c=m(b,p),i(c,[],a,u),l=c.length;l--;)(f=c[l])&&(b[p[l]]=!(v[p[l]]=f));if(r){if(o||e){if(o){for(c=[],l=b.length;l--;)(f=b[l])&&c.push(v[l]=f);o(null,b=[],c,u)}for(l=b.length;l--;)(f=b[l])&&(c=o?tt.call(r,f):h[l])>-1&&(r[c]=!(s[c]=f))}}else b=m(b===s?b.splice(d,b.length):b),o?o(null,s,b,u):K.apply(s,b)})}function v(e){for(var t,n,r,i=e.length,o=_.relative[e[0].type],s=o||_.relative[" "],a=o?1:0,u=p(function(e){return e===t},s,!0),c=p(function(e){return tt.call(t,e)>-1},s,!0),l=[function(e,n,r){return!o&&(r||n!==E)||((t=n).nodeType?u(e,n,r):c(e,n,r))}];i>a;a++)if(n=_.relative[e[a].type])l=[p(d(l),n)];else{if(n=_.filter[e[a].type].apply(null,e[a].matches),n[F]){for(r=++a;i>r&&!_.relative[e[r].type];r++);return y(a>1&&d(l),a>1&&h(e.slice(0,a-1).concat({value:" "===e[a-2].type?"*":""})).replace(ut,"$1"),n,r>a&&v(e.slice(a,r)),i>r&&v(e=e.slice(r)),i>r&&h(e))}l.push(n)}return d(l)}function b(e,n){var i=n.length>0,o=e.length>0,s=function(r,s,a,u,c){var l,f,h,p=0,d="0",g=r&&[],y=[],v=E,b=r||o&&_.find.TAG("*",c),w=Y+=null==v?1:Math.random()||.1,x=b.length;for(c&&(E=s!==M&&s);d!==x&&null!=(l=b[d]);d++){if(o&&l){for(f=0;h=e[f++];)if(h(l,s,a)){u.push(l);break}c&&(Y=w)}i&&((l=!h&&l)&&p--,r&&g.push(l))}if(p+=d,i&&d!==p){for(f=0;h=n[f++];)h(g,y,s,a);if(r){if(p>0)for(;d--;)g[d]||y[d]||(y[d]=Z.call(u));y=m(y)}K.apply(u,y),c&&!r&&y.length>0&&p+n.length>1&&t.uniqueSort(u)}return c&&(Y=w,E=v),g};return i?r(s):s}var w,x,_,k,S,T,C,A,E,N,D,P,M,j,O,I,L,B,H,F="sizzle"+-new Date,q=e.document,Y=0,R=0,V=n(),$=n(),W=n(),U=function(e,t){return e===t&&(D=!0),0},z="undefined",G=1<<31,X={}.hasOwnProperty,J=[],Z=J.pop,Q=J.push,K=J.push,et=J.slice,tt=J.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1},nt="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",rt="[\\x20\\t\\r\\n\\f]",it="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ot=it.replace("w","w#"),st="\\["+rt+"*("+it+")(?:"+rt+"*([*^$|!~]?=)"+rt+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ot+"))|)"+rt+"*\\]",at=":("+it+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+st+")*)|.*)\\)|)",ut=new RegExp("^"+rt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+rt+"+$","g"),ct=new RegExp("^"+rt+"*,"+rt+"*"),lt=new RegExp("^"+rt+"*([>+~]|"+rt+")"+rt+"*"),ft=new RegExp("="+rt+"*([^\\]'\"]*?)"+rt+"*\\]","g"),ht=new RegExp(at),pt=new RegExp("^"+ot+"$"),dt={ID:new RegExp("^#("+it+")"),CLASS:new RegExp("^\\.("+it+")"),TAG:new RegExp("^("+it.replace("w","w*")+")"),ATTR:new RegExp("^"+st),PSEUDO:new RegExp("^"+at),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+rt+"*(even|odd|(([+-]|)(\\d*)n|)"+rt+"*(?:([+-]|)"+rt+"*(\\d+)|))"+rt+"*\\)|)","i"),bool:new RegExp("^(?:"+nt+")$","i"),needsContext:new RegExp("^"+rt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+rt+"*((?:-\\d)?\\d*)"+rt+"*\\)|)(?=[^-]|$)","i")},gt=/^(?:input|select|textarea|button)$/i,mt=/^h\d$/i,yt=/^[^{]+\{\s*\[native \w/,vt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,bt=/[+~]/,wt=/'|\\/g,xt=new RegExp("\\\\([\\da-f]{1,6}"+rt+"?|("+rt+")|.)","ig"),_t=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)};try{K.apply(J=et.call(q.childNodes),q.childNodes),J[q.childNodes.length].nodeType}catch(kt){K={apply:J.length?function(e,t){Q.apply(e,et.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}x=t.support={},S=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},P=t.setDocument=function(e){var t,n=e?e.ownerDocument||e:q,r=n.defaultView;return n!==M&&9===n.nodeType&&n.documentElement?(M=n,j=n.documentElement,O=!S(n),r&&r!==r.top&&(r.addEventListener?r.addEventListener("unload",function(){P()},!1):r.attachEvent&&r.attachEvent("onunload",function(){P()})),x.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),x.getElementsByTagName=i(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),x.getElementsByClassName=yt.test(n.getElementsByClassName)&&i(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),x.getById=i(function(e){return j.appendChild(e).id=F,!n.getElementsByName||!n.getElementsByName(F).length}),x.getById?(_.find.ID=function(e,t){if(typeof t.getElementById!==z&&O){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},_.filter.ID=function(e){var t=e.replace(xt,_t);return function(e){return e.getAttribute("id")===t}}):(delete _.find.ID,_.filter.ID=function(e){var t=e.replace(xt,_t);return function(e){var n=typeof e.getAttributeNode!==z&&e.getAttributeNode("id");return n&&n.value===t}}),_.find.TAG=x.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==z?t.getElementsByTagName(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},_.find.CLASS=x.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==z&&O?t.getElementsByClassName(e):void 0},L=[],I=[],(x.qsa=yt.test(n.querySelectorAll))&&(i(function(e){e.innerHTML="<select msallowclip=''><option selected=''></option></select>",e.querySelectorAll("[msallowclip^='']").length&&I.push("[*^$]="+rt+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||I.push("\\["+rt+"*(?:value|"+nt+")"),e.querySelectorAll(":checked").length||I.push(":checked")}),i(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&I.push("name"+rt+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||I.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),I.push(",.*:")})),(x.matchesSelector=yt.test(B=j.matches||j.webkitMatchesSelector||j.mozMatchesSelector||j.oMatchesSelector||j.msMatchesSelector))&&i(function(e){x.disconnectedMatch=B.call(e,"div"),B.call(e,"[s!='']:x"),L.push("!=",at)}),I=I.length&&new RegExp(I.join("|")),L=L.length&&new RegExp(L.join("|")),t=yt.test(j.compareDocumentPosition),H=t||yt.test(j.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},U=t?function(e,t){if(e===t)return D=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r?r:(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&r||!x.sortDetached&&t.compareDocumentPosition(e)===r?e===n||e.ownerDocument===q&&H(q,e)?-1:t===n||t.ownerDocument===q&&H(q,t)?1:N?tt.call(N,e)-tt.call(N,t):0:4&r?-1:1)}:function(e,t){if(e===t)return D=!0,0;var r,i=0,o=e.parentNode,a=t.parentNode,u=[e],c=[t];if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:N?tt.call(N,e)-tt.call(N,t):0;if(o===a)return s(e,t);for(r=e;r=r.parentNode;)u.unshift(r);for(r=t;r=r.parentNode;)c.unshift(r);for(;u[i]===c[i];)i++;return i?s(u[i],c[i]):u[i]===q?-1:c[i]===q?1:0},n):M},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==M&&P(e),n=n.replace(ft,"='$1']"),!(!x.matchesSelector||!O||L&&L.test(n)||I&&I.test(n)))try{var r=B.call(e,n);if(r||x.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return t(n,M,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==M&&P(e),H(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==M&&P(e);var n=_.attrHandle[t.toLowerCase()],r=n&&X.call(_.attrHandle,t.toLowerCase())?n(e,t,!O):void 0;return void 0!==r?r:x.attributes||!O?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],r=0,i=0;if(D=!x.detectDuplicates,N=!x.sortStable&&e.slice(0),e.sort(U),D){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return N=null,e},k=t.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=k(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=k(t);return n},_=t.selectors={cacheLength:50,createPseudo:r,match:dt,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(xt,_t),e[3]=(e[3]||e[4]||e[5]||"").replace(xt,_t),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return dt.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&ht.test(n)&&(t=T(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(xt,_t).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=V[e+" "];return t||(t=new RegExp("(^|"+rt+")"+e+"("+rt+"|$)"))&&V(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==z&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e);return null==o?"!="===n:n?(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o+" ").indexOf(r)>-1:"|="===n?o===r||o.slice(0,r.length+1)===r+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var c,l,f,h,p,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),v=!u&&!a;if(m){if(o){for(;g;){for(f=t;f=f[g];)if(a?f.nodeName.toLowerCase()===y:1===f.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&v){for(l=m[F]||(m[F]={}),c=l[e]||[],p=c[0]===Y&&c[1],h=c[0]===Y&&c[2],f=p&&m.childNodes[p];f=++p&&f&&f[g]||(h=p=0)||d.pop();)if(1===f.nodeType&&++h&&f===t){l[e]=[Y,p,h];break}}else if(v&&(c=(t[F]||(t[F]={}))[e])&&c[0]===Y)h=c[1];else for(;(f=++p&&f&&f[g]||(h=p=0)||d.pop())&&((a?f.nodeName.toLowerCase()!==y:1!==f.nodeType)||!++h||(v&&((f[F]||(f[F]={}))[e]=[Y,h]),f!==t)););return h-=i,h===r||h%r===0&&h/r>=0}}},PSEUDO:function(e,n){var i,o=_.pseudos[e]||_.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return o[F]?o(n):o.length>1?(i=[e,e,"",n],_.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),s=i.length;s--;)r=tt.call(e,i[s]),e[r]=!(t[r]=i[s])}):function(e){return o(e,0,i)}):o}},pseudos:{not:r(function(e){var t=[],n=[],i=C(e.replace(ut,"$1"));return i[F]?r(function(e,t,n,r){for(var o,s=i(e,null,r,[]),a=e.length;a--;)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return function(t){return(t.textContent||t.innerText||k(t)).indexOf(e)>-1}}),lang:r(function(e){return pt.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(xt,_t).toLowerCase(),function(t){var n;do if(n=O?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===j},focus:function(e){return e===M.activeElement&&(!M.hasFocus||M.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!_.pseudos.empty(e)},header:function(e){return mt.test(e.nodeName)},input:function(e){return gt.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:c(function(){return[0]}),last:c(function(e,t){return[t-1]}),eq:c(function(e,t,n){return[0>n?n+t:n]}),even:c(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:c(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:c(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:c(function(e,t,n){for(var r=0>n?n+t:n;++r<t;)e.push(r);return e})}},_.pseudos.nth=_.pseudos.eq;for(w in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})_.pseudos[w]=a(w);for(w in{submit:!0,reset:!0})_.pseudos[w]=u(w);return f.prototype=_.filters=_.pseudos,_.setFilters=new f,T=t.tokenize=function(e,n){var r,i,o,s,a,u,c,l=$[e+" "];if(l)return n?0:l.slice(0);for(a=e,u=[],c=_.preFilter;a;){(!r||(i=ct.exec(a)))&&(i&&(a=a.slice(i[0].length)||a),u.push(o=[])),r=!1,(i=lt.exec(a))&&(r=i.shift(),o.push({value:r,type:i[0].replace(ut," ")}),a=a.slice(r.length));for(s in _.filter)!(i=dt[s].exec(a))||c[s]&&!(i=c[s](i))||(r=i.shift(),o.push({value:r,type:s,matches:i}),a=a.slice(r.length));if(!r)break}return n?a.length:a?t.error(e):$(e,u).slice(0)},C=t.compile=function(e,t){var n,r=[],i=[],o=W[e+" "];if(!o){for(t||(t=T(e)),n=t.length;n--;)o=v(t[n]),o[F]?r.push(o):i.push(o);o=W(e,b(i,r)),o.selector=e}return o},A=t.select=function(e,t,n,r){var i,o,s,a,u,c="function"==typeof e&&e,f=!r&&T(e=c.selector||e);if(n=n||[],1===f.length){if(o=f[0]=f[0].slice(0),o.length>2&&"ID"===(s=o[0]).type&&x.getById&&9===t.nodeType&&O&&_.relative[o[1].type]){if(t=(_.find.ID(s.matches[0].replace(xt,_t),t)||[])[0],!t)return n;c&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=dt.needsContext.test(e)?0:o.length;i--&&(s=o[i],!_.relative[a=s.type]);)if((u=_.find[a])&&(r=u(s.matches[0].replace(xt,_t),bt.test(o[0].type)&&l(t.parentNode)||t))){if(o.splice(i,1),e=r.length&&h(o),!e)return K.apply(n,r),n;break}}return(c||C(e,f))(r,t,!O,n,bt.test(e)&&l(t.parentNode)||t),n},x.sortStable=F.split("").sort(U).join("")===F,x.detectDuplicates=!!D,P(),x.sortDetached=i(function(e){return 1&e.compareDocumentPosition(M.createElement("div"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),x.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(nt,function(e,t,n){var r;return n?void 0:e[t]===!0?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),t}(e);K.find=it,K.expr=it.selectors,K.expr[":"]=K.expr.pseudos,K.unique=it.uniqueSort,K.text=it.getText,K.isXMLDoc=it.isXML,K.contains=it.contains;var ot=K.expr.match.needsContext,st=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,at=/^.[^:#\[\.,]*$/;K.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?K.find.matchesSelector(r,e)?[r]:[]:K.find.matches(e,K.grep(t,function(e){return 1===e.nodeType}))},K.fn.extend({find:function(e){var t,n=this.length,r=[],i=this;if("string"!=typeof e)return this.pushStack(K(e).filter(function(){for(t=0;n>t;t++)if(K.contains(i[t],this))return!0
}));for(t=0;n>t;t++)K.find(e,i[t],r);return r=this.pushStack(n>1?K.unique(r):r),r.selector=this.selector?this.selector+" "+e:e,r},filter:function(e){return this.pushStack(r(this,e||[],!1))},not:function(e){return this.pushStack(r(this,e||[],!0))},is:function(e){return!!r(this,"string"==typeof e&&ot.test(e)?K(e):e||[],!1).length}});var ut,ct=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,lt=K.fn.init=function(e,t){var n,r;if(!e)return this;if("string"==typeof e){if(n="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:ct.exec(e),!n||!n[1]&&t)return!t||t.jquery?(t||ut).find(e):this.constructor(t).find(e);if(n[1]){if(t=t instanceof K?t[0]:t,K.merge(this,K.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:Z,!0)),st.test(n[1])&&K.isPlainObject(t))for(n in t)K.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n]);return this}return r=Z.getElementById(n[2]),r&&r.parentNode&&(this.length=1,this[0]=r),this.context=Z,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):K.isFunction(e)?"undefined"!=typeof ut.ready?ut.ready(e):e(K):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),K.makeArray(e,this))};lt.prototype=K.fn,ut=K(Z);var ft=/^(?:parents|prev(?:Until|All))/,ht={children:!0,contents:!0,next:!0,prev:!0};K.extend({dir:function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&K(e).is(n))break;r.push(e)}return r},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}}),K.fn.extend({has:function(e){var t=K(e,this),n=t.length;return this.filter(function(){for(var e=0;n>e;e++)if(K.contains(this,t[e]))return!0})},closest:function(e,t){for(var n,r=0,i=this.length,o=[],s=ot.test(e)||"string"!=typeof e?K(e,t||this.context):0;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&K.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?K.unique(o):o)},index:function(e){return e?"string"==typeof e?U.call(K(e),this[0]):U.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(K.unique(K.merge(this.get(),K(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),K.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return K.dir(e,"parentNode")},parentsUntil:function(e,t,n){return K.dir(e,"parentNode",n)},next:function(e){return i(e,"nextSibling")},prev:function(e){return i(e,"previousSibling")},nextAll:function(e){return K.dir(e,"nextSibling")},prevAll:function(e){return K.dir(e,"previousSibling")},nextUntil:function(e,t,n){return K.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return K.dir(e,"previousSibling",n)},siblings:function(e){return K.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return K.sibling(e.firstChild)},contents:function(e){return e.contentDocument||K.merge([],e.childNodes)}},function(e,t){K.fn[e]=function(n,r){var i=K.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=K.filter(r,i)),this.length>1&&(ht[e]||K.unique(i),ft.test(e)&&i.reverse()),this.pushStack(i)}});var pt=/\S+/g,dt={};K.Callbacks=function(e){e="string"==typeof e?dt[e]||o(e):K.extend({},e);var t,n,r,i,s,a,u=[],c=!e.once&&[],l=function(o){for(t=e.memory&&o,n=!0,a=i||0,i=0,s=u.length,r=!0;u&&s>a;a++)if(u[a].apply(o[0],o[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,u&&(c?c.length&&l(c.shift()):t?u=[]:f.disable())},f={add:function(){if(u){var n=u.length;!function o(t){K.each(t,function(t,n){var r=K.type(n);"function"===r?e.unique&&f.has(n)||u.push(n):n&&n.length&&"string"!==r&&o(n)})}(arguments),r?s=u.length:t&&(i=n,l(t))}return this},remove:function(){return u&&K.each(arguments,function(e,t){for(var n;(n=K.inArray(t,u,n))>-1;)u.splice(n,1),r&&(s>=n&&s--,a>=n&&a--)}),this},has:function(e){return e?K.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],s=0,this},disable:function(){return u=c=t=void 0,this},disabled:function(){return!u},lock:function(){return c=void 0,t||f.disable(),this},locked:function(){return!c},fireWith:function(e,t){return!u||n&&!c||(t=t||[],t=[e,t.slice?t.slice():t],r?c.push(t):l(t)),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!n}};return f},K.extend({Deferred:function(e){var t=[["resolve","done",K.Callbacks("once memory"),"resolved"],["reject","fail",K.Callbacks("once memory"),"rejected"],["notify","progress",K.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return K.Deferred(function(n){K.each(t,function(t,o){var s=K.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&K.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[o[0]+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?K.extend(e,r):r}},i={};return r.pipe=r.then,K.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=V.call(arguments),s=o.length,a=1!==s||e&&K.isFunction(e.promise)?s:0,u=1===a?e:K.Deferred(),c=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?V.call(arguments):i,r===t?u.notifyWith(n,r):--a||u.resolveWith(n,r)}};if(s>1)for(t=new Array(s),n=new Array(s),r=new Array(s);s>i;i++)o[i]&&K.isFunction(o[i].promise)?o[i].promise().done(c(i,r,o)).fail(u.reject).progress(c(i,n,t)):--a;return a||u.resolveWith(r,o),u.promise()}});var gt;K.fn.ready=function(e){return K.ready.promise().done(e),this},K.extend({isReady:!1,readyWait:1,holdReady:function(e){e?K.readyWait++:K.ready(!0)},ready:function(e){(e===!0?--K.readyWait:K.isReady)||(K.isReady=!0,e!==!0&&--K.readyWait>0||(gt.resolveWith(Z,[K]),K.fn.triggerHandler&&(K(Z).triggerHandler("ready"),K(Z).off("ready"))))}}),K.ready.promise=function(t){return gt||(gt=K.Deferred(),"complete"===Z.readyState?setTimeout(K.ready):(Z.addEventListener("DOMContentLoaded",s,!1),e.addEventListener("load",s,!1))),gt.promise(t)},K.ready.promise();var mt=K.access=function(e,t,n,r,i,o,s){var a=0,u=e.length,c=null==n;if("object"===K.type(n)){i=!0;for(a in n)K.access(e,t,a,n[a],!0,o,s)}else if(void 0!==r&&(i=!0,K.isFunction(r)||(s=!0),c&&(s?(t.call(e,r),t=null):(c=t,t=function(e,t,n){return c.call(K(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:c?t.call(e):u?t(e[0],n):o};K.acceptData=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType},a.uid=1,a.accepts=K.acceptData,a.prototype={key:function(e){if(!a.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=a.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,K.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(K.isEmptyObject(o))K.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return void 0===t?n:n[t]},access:function(e,t,n){var r;return void 0===t||t&&"string"==typeof t&&void 0===n?(r=this.get(e,t),void 0!==r?r:this.get(e,K.camelCase(t))):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(void 0===t)this.cache[o]={};else{K.isArray(t)?r=t.concat(t.map(K.camelCase)):(i=K.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(pt)||[])),n=r.length;for(;n--;)delete s[r[n]]}},hasData:function(e){return!K.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}};var yt=new a,vt=new a,bt=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,wt=/([A-Z])/g;K.extend({hasData:function(e){return vt.hasData(e)||yt.hasData(e)},data:function(e,t,n){return vt.access(e,t,n)},removeData:function(e,t){vt.remove(e,t)},_data:function(e,t,n){return yt.access(e,t,n)},_removeData:function(e,t){yt.remove(e,t)}}),K.fn.extend({data:function(e,t){var n,r,i,o=this[0],s=o&&o.attributes;if(void 0===e){if(this.length&&(i=vt.get(o),1===o.nodeType&&!yt.get(o,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&(r=s[n].name,0===r.indexOf("data-")&&(r=K.camelCase(r.slice(5)),u(o,r,i[r])));yt.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){vt.set(this,e)}):mt(this,function(t){var n,r=K.camelCase(e);if(o&&void 0===t){if(n=vt.get(o,e),void 0!==n)return n;if(n=vt.get(o,r),void 0!==n)return n;if(n=u(o,r,void 0),void 0!==n)return n}else this.each(function(){var n=vt.get(this,r);vt.set(this,r,t),-1!==e.indexOf("-")&&void 0!==n&&vt.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){vt.remove(this,e)})}}),K.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=yt.get(e,t),n&&(!r||K.isArray(n)?r=yt.access(e,t,K.makeArray(n)):r.push(n)),r||[]):void 0},dequeue:function(e,t){t=t||"fx";var n=K.queue(e,t),r=n.length,i=n.shift(),o=K._queueHooks(e,t),s=function(){K.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return yt.get(e,n)||yt.access(e,n,{empty:K.Callbacks("once memory").add(function(){yt.remove(e,[t+"queue",n])})})}}),K.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?K.queue(this[0],e):void 0===t?this:this.each(function(){var n=K.queue(this,e,t);K._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&K.dequeue(this,e)})},dequeue:function(e){return this.each(function(){K.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=K.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)n=yt.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var xt=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,_t=["Top","Right","Bottom","Left"],kt=function(e,t){return e=t||e,"none"===K.css(e,"display")||!K.contains(e.ownerDocument,e)},St=/^(?:checkbox|radio)$/i;!function(){var e=Z.createDocumentFragment(),t=e.appendChild(Z.createElement("div")),n=Z.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),J.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",J.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}();var Tt="undefined";J.focusinBubbles="onfocusin"in e;var Ct=/^key/,At=/^(?:mouse|pointer|contextmenu)|click/,Et=/^(?:focusinfocus|focusoutblur)$/,Nt=/^([^.]*)(?:\.(.+)|)$/;K.event={global:{},add:function(e,t,n,r,i){var o,s,a,u,c,l,f,h,p,d,g,m=yt.get(e);if(m)for(n.handler&&(o=n,n=o.handler,i=o.selector),n.guid||(n.guid=K.guid++),(u=m.events)||(u=m.events={}),(s=m.handle)||(s=m.handle=function(t){return typeof K!==Tt&&K.event.triggered!==t.type?K.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(pt)||[""],c=t.length;c--;)a=Nt.exec(t[c])||[],p=g=a[1],d=(a[2]||"").split(".").sort(),p&&(f=K.event.special[p]||{},p=(i?f.delegateType:f.bindType)||p,f=K.event.special[p]||{},l=K.extend({type:p,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&K.expr.match.needsContext.test(i),namespace:d.join(".")},o),(h=u[p])||(h=u[p]=[],h.delegateCount=0,f.setup&&f.setup.call(e,r,d,s)!==!1||e.addEventListener&&e.addEventListener(p,s,!1)),f.add&&(f.add.call(e,l),l.handler.guid||(l.handler.guid=n.guid)),i?h.splice(h.delegateCount++,0,l):h.push(l),K.event.global[p]=!0)},remove:function(e,t,n,r,i){var o,s,a,u,c,l,f,h,p,d,g,m=yt.hasData(e)&&yt.get(e);if(m&&(u=m.events)){for(t=(t||"").match(pt)||[""],c=t.length;c--;)if(a=Nt.exec(t[c])||[],p=g=a[1],d=(a[2]||"").split(".").sort(),p){for(f=K.event.special[p]||{},p=(r?f.delegateType:f.bindType)||p,h=u[p]||[],a=a[2]&&new RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=h.length;o--;)l=h[o],!i&&g!==l.origType||n&&n.guid!==l.guid||a&&!a.test(l.namespace)||r&&r!==l.selector&&("**"!==r||!l.selector)||(h.splice(o,1),l.selector&&h.delegateCount--,f.remove&&f.remove.call(e,l));s&&!h.length&&(f.teardown&&f.teardown.call(e,d,m.handle)!==!1||K.removeEvent(e,p,m.handle),delete u[p])}else for(p in u)K.event.remove(e,p+t[c],n,r,!0);K.isEmptyObject(u)&&(delete m.handle,yt.remove(e,"events"))}},trigger:function(t,n,r,i){var o,s,a,u,c,l,f,h=[r||Z],p=X.call(t,"type")?t.type:t,d=X.call(t,"namespace")?t.namespace.split("."):[];if(s=a=r=r||Z,3!==r.nodeType&&8!==r.nodeType&&!Et.test(p+K.event.triggered)&&(p.indexOf(".")>=0&&(d=p.split("."),p=d.shift(),d.sort()),c=p.indexOf(":")<0&&"on"+p,t=t[K.expando]?t:new K.Event(p,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=d.join("."),t.namespace_re=t.namespace?new RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:K.makeArray(n,[t]),f=K.event.special[p]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!K.isWindow(r)){for(u=f.delegateType||p,Et.test(u+p)||(s=s.parentNode);s;s=s.parentNode)h.push(s),a=s;a===(r.ownerDocument||Z)&&h.push(a.defaultView||a.parentWindow||e)}for(o=0;(s=h[o++])&&!t.isPropagationStopped();)t.type=o>1?u:f.bindType||p,l=(yt.get(s,"events")||{})[t.type]&&yt.get(s,"handle"),l&&l.apply(s,n),l=c&&s[c],l&&l.apply&&K.acceptData(s)&&(t.result=l.apply(s,n),t.result===!1&&t.preventDefault());return t.type=p,i||t.isDefaultPrevented()||f._default&&f._default.apply(h.pop(),n)!==!1||!K.acceptData(r)||c&&K.isFunction(r[p])&&!K.isWindow(r)&&(a=r[c],a&&(r[c]=null),K.event.triggered=p,r[p](),K.event.triggered=void 0,a&&(r[c]=a)),t.result}},dispatch:function(e){e=K.event.fix(e);var t,n,r,i,o,s=[],a=V.call(arguments),u=(yt.get(this,"events")||{})[e.type]||[],c=K.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){for(s=K.event.handlers.call(this,e,u),t=0;(i=s[t++])&&!e.isPropagationStopped();)for(e.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((K.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),void 0!==r&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",void 0===r[i]&&(r[i]=o.needsContext?K(i,this).index(u)>=0:K.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return a<t.length&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,o=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||Z,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},fix:function(e){if(e[K.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];for(s||(this.fixHooks[i]=s=At.test(i)?this.mouseHooks:Ct.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new K.Event(o),t=r.length;t--;)n=r[t],e[n]=o[n];return e.target||(e.target=Z),3===e.target.nodeType&&(e.target=e.target.parentNode),s.filter?s.filter(e,o):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==f()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===f()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&K.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(e){return K.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=K.extend(new K.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?K.event.trigger(i,null,t):K.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},K.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},K.Event=function(e,t){return this instanceof K.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?c:l):this.type=e,t&&K.extend(this,t),this.timeStamp=e&&e.timeStamp||K.now(),void(this[K.expando]=!0)):new K.Event(e,t)},K.Event.prototype={isDefaultPrevented:l,isPropagationStopped:l,isImmediatePropagationStopped:l,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=c,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=c,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=c,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},K.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){K.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!K.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),J.focusinBubbles||K.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){K.event.simulate(t,e.target,K.event.fix(e),!0)};K.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=yt.access(r,t);i||r.addEventListener(e,n,!0),yt.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=yt.access(r,t)-1;i?yt.access(r,t,i):(r.removeEventListener(e,n,!0),yt.remove(r,t))}}}),K.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=void 0);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=void 0):null==r&&("string"==typeof t?(r=n,n=void 0):(r=n,n=t,t=void 0)),r===!1)r=l;else if(!r)return this;return 1===i&&(o=r,r=function(e){return K().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=K.guid++)),this.each(function(){K.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,K(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=void 0),n===!1&&(n=l),this.each(function(){K.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){K.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?K.event.trigger(e,t,n,!0):void 0}});var Dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Pt=/<([\w:]+)/,Mt=/<|&#?\w+;/,jt=/<(?:script|style|link)/i,Ot=/checked\s*(?:[^=]|=\s*.checked.)/i,It=/^$|\/(?:java|ecma)script/i,Lt=/^true\/(.*)/,Bt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Ht={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Ht.optgroup=Ht.option,Ht.tbody=Ht.tfoot=Ht.colgroup=Ht.caption=Ht.thead,Ht.th=Ht.td,K.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=K.contains(e.ownerDocument,e);if(!(J.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||K.isXMLDoc(e)))for(s=y(a),o=y(e),r=0,i=o.length;i>r;r++)v(o[r],s[r]);if(t)if(n)for(o=o||y(e),s=s||y(a),r=0,i=o.length;i>r;r++)m(o[r],s[r]);else m(e,a);return s=y(a,"script"),s.length>0&&g(s,!u&&y(e,"script")),a},buildFragment:function(e,t,n,r){for(var i,o,s,a,u,c,l=t.createDocumentFragment(),f=[],h=0,p=e.length;p>h;h++)if(i=e[h],i||0===i)if("object"===K.type(i))K.merge(f,i.nodeType?[i]:i);else if(Mt.test(i)){for(o=o||l.appendChild(t.createElement("div")),s=(Pt.exec(i)||["",""])[1].toLowerCase(),a=Ht[s]||Ht._default,o.innerHTML=a[1]+i.replace(Dt,"<$1></$2>")+a[2],c=a[0];c--;)o=o.lastChild;K.merge(f,o.childNodes),o=l.firstChild,o.textContent=""}else f.push(t.createTextNode(i));for(l.textContent="",h=0;i=f[h++];)if((!r||-1===K.inArray(i,r))&&(u=K.contains(i.ownerDocument,i),o=y(l.appendChild(i),"script"),u&&g(o),n))for(c=0;i=o[c++];)It.test(i.type||"")&&n.push(i);return l},cleanData:function(e){for(var t,n,r,i,o=K.event.special,s=0;void 0!==(n=e[s]);s++){if(K.acceptData(n)&&(i=n[yt.expando],i&&(t=yt.cache[i]))){if(t.events)for(r in t.events)o[r]?K.event.remove(n,r):K.removeEvent(n,r,t.handle);yt.cache[i]&&delete yt.cache[i]}delete vt.cache[n[vt.expando]]}}}),K.fn.extend({text:function(e){return mt(this,function(e){return void 0===e?K.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=h(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=h(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,r=e?K.filter(e,this):this,i=0;null!=(n=r[i]);i++)t||1!==n.nodeType||K.cleanData(y(n)),n.parentNode&&(t&&K.contains(n.ownerDocument,n)&&g(y(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(K.cleanData(y(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return K.clone(this,e,t)})},html:function(e){return mt(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!jt.test(e)&&!Ht[(Pt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(Dt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(K.cleanData(y(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=arguments[0];return this.domManip(arguments,function(t){e=this.parentNode,K.cleanData(y(this)),e&&e.replaceChild(t,this)}),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=$.apply([],e);var n,r,i,o,s,a,u=0,c=this.length,l=this,f=c-1,h=e[0],g=K.isFunction(h);if(g||c>1&&"string"==typeof h&&!J.checkClone&&Ot.test(h))return this.each(function(n){var r=l.eq(n);g&&(e[0]=h.call(this,n,r.html())),r.domManip(e,t)});if(c&&(n=K.buildFragment(e,this[0].ownerDocument,!1,this),r=n.firstChild,1===n.childNodes.length&&(n=r),r)){for(i=K.map(y(n,"script"),p),o=i.length;c>u;u++)s=n,u!==f&&(s=K.clone(s,!0,!0),o&&K.merge(i,y(s,"script"))),t.call(this[u],s,u);if(o)for(a=i[i.length-1].ownerDocument,K.map(i,d),u=0;o>u;u++)s=i[u],It.test(s.type||"")&&!yt.access(s,"globalEval")&&K.contains(a,s)&&(s.src?K._evalUrl&&K._evalUrl(s.src):K.globalEval(s.textContent.replace(Bt,"")))}return this}}),K.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){K.fn[e]=function(e){for(var n,r=[],i=K(e),o=i.length-1,s=0;o>=s;s++)n=s===o?this:this.clone(!0),K(i[s])[t](n),W.apply(r,n.get());return this.pushStack(r)}});var Ft,qt={},Yt=/^margin/,Rt=new RegExp("^("+xt+")(?!px)[a-z%]+$","i"),Vt=function(e){return e.ownerDocument.defaultView.getComputedStyle(e,null)};!function(){function t(){s.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",s.innerHTML="",i.appendChild(o);var t=e.getComputedStyle(s,null);n="1%"!==t.top,r="4px"===t.width,i.removeChild(o)}var n,r,i=Z.documentElement,o=Z.createElement("div"),s=Z.createElement("div");s.style&&(s.style.backgroundClip="content-box",s.cloneNode(!0).style.backgroundClip="",J.clearCloneStyle="content-box"===s.style.backgroundClip,o.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",o.appendChild(s),e.getComputedStyle&&K.extend(J,{pixelPosition:function(){return t(),n},boxSizingReliable:function(){return null==r&&t(),r},reliableMarginRight:function(){var t,n=s.appendChild(Z.createElement("div"));return n.style.cssText=s.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",n.style.marginRight=n.style.width="0",s.style.width="1px",i.appendChild(o),t=!parseFloat(e.getComputedStyle(n,null).marginRight),i.removeChild(o),t}}))}(),K.swap=function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i};var $t=/^(none|table(?!-c[ea]).+)/,Wt=new RegExp("^("+xt+")(.*)$","i"),Ut=new RegExp("^([+-])=("+xt+")","i"),zt={position:"absolute",visibility:"hidden",display:"block"},Gt={letterSpacing:"0",fontWeight:"400"},Xt=["Webkit","O","Moz","ms"];K.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=x(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=K.camelCase(t),u=e.style;return t=K.cssProps[a]||(K.cssProps[a]=k(u,a)),s=K.cssHooks[t]||K.cssHooks[a],void 0===n?s&&"get"in s&&void 0!==(i=s.get(e,!1,r))?i:u[t]:(o=typeof n,"string"===o&&(i=Ut.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(K.css(e,t)),o="number"),void(null!=n&&n===n&&("number"!==o||K.cssNumber[a]||(n+="px"),J.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,r))||(u[t]=n))))}},css:function(e,t,n,r){var i,o,s,a=K.camelCase(t);return t=K.cssProps[a]||(K.cssProps[a]=k(e.style,a)),s=K.cssHooks[t]||K.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),void 0===i&&(i=x(e,t,r)),"normal"===i&&t in Gt&&(i=Gt[t]),""===n||n?(o=parseFloat(i),n===!0||K.isNumeric(o)?o||0:i):i}}),K.each(["height","width"],function(e,t){K.cssHooks[t]={get:function(e,n,r){return n?$t.test(K.css(e,"display"))&&0===e.offsetWidth?K.swap(e,zt,function(){return C(e,t,r)}):C(e,t,r):void 0},set:function(e,n,r){var i=r&&Vt(e);return S(e,n,r?T(e,t,r,"border-box"===K.css(e,"boxSizing",!1,i),i):0)}}}),K.cssHooks.marginRight=_(J.reliableMarginRight,function(e,t){return t?K.swap(e,{display:"inline-block"},x,[e,"marginRight"]):void 0}),K.each({margin:"",padding:"",border:"Width"},function(e,t){K.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];4>r;r++)i[e+_t[r]+t]=o[r]||o[r-2]||o[0];return i}},Yt.test(e)||(K.cssHooks[e+t].set=S)}),K.fn.extend({css:function(e,t){return mt(this,function(e,t,n){var r,i,o={},s=0;if(K.isArray(t)){for(r=Vt(e),i=t.length;i>s;s++)o[t[s]]=K.css(e,t[s],!1,r);return o}return void 0!==n?K.style(e,t,n):K.css(e,t)},e,t,arguments.length>1)},show:function(){return A(this,!0)},hide:function(){return A(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){kt(this)?K(this).show():K(this).hide()})}}),K.Tween=E,E.prototype={constructor:E,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(K.cssNumber[n]?"":"px")},cur:function(){var e=E.propHooks[this.prop];return e&&e.get?e.get(this):E.propHooks._default.get(this)},run:function(e){var t,n=E.propHooks[this.prop];return this.pos=t=this.options.duration?K.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):E.propHooks._default.set(this),this}},E.prototype.init.prototype=E.prototype,E.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=K.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){K.fx.step[e.prop]?K.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[K.cssProps[e.prop]]||K.cssHooks[e.prop])?K.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},E.propHooks.scrollTop=E.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},K.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},K.fx=E.prototype.init,K.fx.step={};var Jt,Zt,Qt=/^(?:toggle|show|hide)$/,Kt=new RegExp("^(?:([+-])=|)("+xt+")([a-z%]*)$","i"),en=/queueHooks$/,tn=[M],nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Kt.exec(t),o=i&&i[3]||(K.cssNumber[e]?"":"px"),s=(K.cssNumber[e]||"px"!==o&&+r)&&Kt.exec(K.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,K.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};K.Animation=K.extend(O,{tweener:function(e,t){K.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,r=0,i=e.length;i>r;r++)n=e[r],nn[n]=nn[n]||[],nn[n].unshift(t)},prefilter:function(e,t){t?tn.unshift(e):tn.push(e)}}),K.speed=function(e,t,n){var r=e&&"object"==typeof e?K.extend({},e):{complete:n||!n&&t||K.isFunction(e)&&e,duration:e,easing:n&&t||t&&!K.isFunction(t)&&t};return r.duration=K.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in K.fx.speeds?K.fx.speeds[r.duration]:K.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){K.isFunction(r.old)&&r.old.call(this),r.queue&&K.dequeue(this,r.queue)},r},K.fn.extend({fadeTo:function(e,t,n,r){return this.filter(kt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=K.isEmptyObject(e),o=K.speed(t,n,r),s=function(){var t=O(this,K.extend({},e),o);(i||yt.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=K.timers,s=yt.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&en.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&K.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=yt.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=K.timers,s=r?r.length:0;for(n.finish=!0,K.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),K.each(["toggle","show","hide"],function(e,t){var n=K.fn[t];
K.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(D(t,!0),e,r,i)}}),K.each({slideDown:D("show"),slideUp:D("hide"),slideToggle:D("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){K.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),K.timers=[],K.fx.tick=function(){var e,t=0,n=K.timers;for(Jt=K.now();t<n.length;t++)e=n[t],e()||n[t]!==e||n.splice(t--,1);n.length||K.fx.stop(),Jt=void 0},K.fx.timer=function(e){K.timers.push(e),e()?K.fx.start():K.timers.pop()},K.fx.interval=13,K.fx.start=function(){Zt||(Zt=setInterval(K.fx.tick,K.fx.interval))},K.fx.stop=function(){clearInterval(Zt),Zt=null},K.fx.speeds={slow:600,fast:200,_default:400},K.fn.delay=function(e,t){return e=K.fx?K.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},function(){var e=Z.createElement("input"),t=Z.createElement("select"),n=t.appendChild(Z.createElement("option"));e.type="checkbox",J.checkOn=""!==e.value,J.optSelected=n.selected,t.disabled=!0,J.optDisabled=!n.disabled,e=Z.createElement("input"),e.value="t",e.type="radio",J.radioValue="t"===e.value}();var rn,on,sn=K.expr.attrHandle;K.fn.extend({attr:function(e,t){return mt(this,K.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){K.removeAttr(this,e)})}}),K.extend({attr:function(e,t,n){var r,i,o=e.nodeType;return e&&3!==o&&8!==o&&2!==o?typeof e.getAttribute===Tt?K.prop(e,t,n):(1===o&&K.isXMLDoc(e)||(t=t.toLowerCase(),r=K.attrHooks[t]||(K.expr.match.bool.test(t)?on:rn)),void 0===n?r&&"get"in r&&null!==(i=r.get(e,t))?i:(i=K.find.attr(e,t),null==i?void 0:i):null!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n):void K.removeAttr(e,t)):void 0},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(pt);if(o&&1===e.nodeType)for(;n=o[i++];)r=K.propFix[n]||n,K.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!J.radioValue&&"radio"===t&&K.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}}}),on={set:function(e,t,n){return t===!1?K.removeAttr(e,n):e.setAttribute(n,n),n}},K.each(K.expr.match.bool.source.match(/\w+/g),function(e,t){var n=sn[t]||K.find.attr;sn[t]=function(e,t,r){var i,o;return r||(o=sn[t],sn[t]=i,i=null!=n(e,t,r)?t.toLowerCase():null,sn[t]=o),i}});var an=/^(?:input|select|textarea|button)$/i;K.fn.extend({prop:function(e,t){return mt(this,K.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[K.propFix[e]||e]})}}),K.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;return e&&3!==s&&8!==s&&2!==s?(o=1!==s||!K.isXMLDoc(e),o&&(t=K.propFix[t]||t,i=K.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]):void 0},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||an.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),J.optSelected||(K.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),K.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){K.propFix[this.toLowerCase()]=this});var un=/[\t\r\n\f]/g;K.fn.extend({addClass:function(e){var t,n,r,i,o,s,a="string"==typeof e&&e,u=0,c=this.length;if(K.isFunction(e))return this.each(function(t){K(this).addClass(e.call(this,t,this.className))});if(a)for(t=(e||"").match(pt)||[];c>u;u++)if(n=this[u],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(un," "):" ")){for(o=0;i=t[o++];)r.indexOf(" "+i+" ")<0&&(r+=i+" ");s=K.trim(r),n.className!==s&&(n.className=s)}return this},removeClass:function(e){var t,n,r,i,o,s,a=0===arguments.length||"string"==typeof e&&e,u=0,c=this.length;if(K.isFunction(e))return this.each(function(t){K(this).removeClass(e.call(this,t,this.className))});if(a)for(t=(e||"").match(pt)||[];c>u;u++)if(n=this[u],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(un," "):"")){for(o=0;i=t[o++];)for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ");s=e?K.trim(r):"",n.className!==s&&(n.className=s)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):this.each(K.isFunction(e)?function(n){K(this).toggleClass(e.call(this,n,this.className,t),t)}:function(){if("string"===n)for(var t,r=0,i=K(this),o=e.match(pt)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else(n===Tt||"boolean"===n)&&(this.className&&yt.set(this,"__className__",this.className),this.className=this.className||e===!1?"":yt.get(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(un," ").indexOf(t)>=0)return!0;return!1}});var cn=/\r/g;K.fn.extend({val:function(e){var t,n,r,i=this[0];return arguments.length?(r=K.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,K(this).val()):e,null==i?i="":"number"==typeof i?i+="":K.isArray(i)&&(i=K.map(i,function(e){return null==e?"":e+""})),t=K.valHooks[this.type]||K.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})):i?(t=K.valHooks[i.type]||K.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:(n=i.value,"string"==typeof n?n.replace(cn,""):null==n?"":n)):void 0}}),K.extend({valHooks:{option:{get:function(e){var t=K.find.attr(e,"value");return null!=t?t:K.trim(K.text(e))}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(J.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&K.nodeName(n.parentNode,"optgroup"))){if(t=K(n).val(),o)return t;s.push(t)}return s},set:function(e,t){for(var n,r,i=e.options,o=K.makeArray(t),s=i.length;s--;)r=i[s],(r.selected=K.inArray(r.value,o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),K.each(["radio","checkbox"],function(){K.valHooks[this]={set:function(e,t){return K.isArray(t)?e.checked=K.inArray(K(e).val(),t)>=0:void 0}},J.checkOn||(K.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){K.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),K.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var ln=K.now(),fn=/\?/;K.parseJSON=function(e){return JSON.parse(e+"")},K.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=void 0}return(!t||t.getElementsByTagName("parsererror").length)&&K.error("Invalid XML: "+e),t};var hn,pn,dn=/#.*$/,gn=/([?&])_=[^&]*/,mn=/^(.*?):[ \t]*([^\r\n]*)$/gm,yn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,bn=/^\/\//,wn=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,xn={},_n={},kn="*/".concat("*");try{pn=location.href}catch(Sn){pn=Z.createElement("a"),pn.href="",pn=pn.href}hn=wn.exec(pn.toLowerCase())||[],K.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:pn,type:"GET",isLocal:yn.test(hn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":kn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":K.parseJSON,"text xml":K.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?B(B(e,K.ajaxSettings),t):B(K.ajaxSettings,e)},ajaxPrefilter:I(xn),ajaxTransport:I(_n),ajax:function(e,t){function n(e,t,n,s){var u,l,y,v,w,_=t;2!==b&&(b=2,a&&clearTimeout(a),r=void 0,o=s||"",x.readyState=e>0?4:0,u=e>=200&&300>e||304===e,n&&(v=H(f,x,n)),v=F(f,v,x,u),u?(f.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(K.lastModified[i]=w),w=x.getResponseHeader("etag"),w&&(K.etag[i]=w)),204===e||"HEAD"===f.type?_="nocontent":304===e?_="notmodified":(_=v.state,l=v.data,y=v.error,u=!y)):(y=_,(e||!_)&&(_="error",0>e&&(e=0))),x.status=e,x.statusText=(t||_)+"",u?d.resolveWith(h,[l,_,x]):d.rejectWith(h,[x,_,y]),x.statusCode(m),m=void 0,c&&p.trigger(u?"ajaxSuccess":"ajaxError",[x,f,u?l:y]),g.fireWith(h,[x,_]),c&&(p.trigger("ajaxComplete",[x,f]),--K.active||K.event.trigger("ajaxStop")))}"object"==typeof e&&(t=e,e=void 0),t=t||{};var r,i,o,s,a,u,c,l,f=K.ajaxSetup({},t),h=f.context||f,p=f.context&&(h.nodeType||h.jquery)?K(h):K.event,d=K.Deferred(),g=K.Callbacks("once memory"),m=f.statusCode||{},y={},v={},b=0,w="canceled",x={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!s)for(s={};t=mn.exec(o);)s[t[1].toLowerCase()]=t[2];t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?o:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(f.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else x.always(e[x.status]);return this},abort:function(e){var t=e||w;return r&&r.abort(t),n(0,t),this}};if(d.promise(x).complete=g.add,x.success=x.done,x.error=x.fail,f.url=((e||f.url||pn)+"").replace(dn,"").replace(bn,hn[1]+"//"),f.type=t.method||t.type||f.method||f.type,f.dataTypes=K.trim(f.dataType||"*").toLowerCase().match(pt)||[""],null==f.crossDomain&&(u=wn.exec(f.url.toLowerCase()),f.crossDomain=!(!u||u[1]===hn[1]&&u[2]===hn[2]&&(u[3]||("http:"===u[1]?"80":"443"))===(hn[3]||("http:"===hn[1]?"80":"443")))),f.data&&f.processData&&"string"!=typeof f.data&&(f.data=K.param(f.data,f.traditional)),L(xn,f,t,x),2===b)return x;c=f.global,c&&0===K.active++&&K.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!vn.test(f.type),i=f.url,f.hasContent||(f.data&&(i=f.url+=(fn.test(i)?"&":"?")+f.data,delete f.data),f.cache===!1&&(f.url=gn.test(i)?i.replace(gn,"$1_="+ln++):i+(fn.test(i)?"&":"?")+"_="+ln++)),f.ifModified&&(K.lastModified[i]&&x.setRequestHeader("If-Modified-Since",K.lastModified[i]),K.etag[i]&&x.setRequestHeader("If-None-Match",K.etag[i])),(f.data&&f.hasContent&&f.contentType!==!1||t.contentType)&&x.setRequestHeader("Content-Type",f.contentType),x.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+kn+"; q=0.01":""):f.accepts["*"]);for(l in f.headers)x.setRequestHeader(l,f.headers[l]);if(f.beforeSend&&(f.beforeSend.call(h,x,f)===!1||2===b))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](f[l]);if(r=L(_n,f,t,x)){x.readyState=1,c&&p.trigger("ajaxSend",[x,f]),f.async&&f.timeout>0&&(a=setTimeout(function(){x.abort("timeout")},f.timeout));try{b=1,r.send(y,n)}catch(_){if(!(2>b))throw _;n(-1,_)}}else n(-1,"No Transport");return x},getJSON:function(e,t,n){return K.get(e,t,n,"json")},getScript:function(e,t){return K.get(e,void 0,t,"script")}}),K.each(["get","post"],function(e,t){K[t]=function(e,n,r,i){return K.isFunction(n)&&(i=i||r,r=n,n=void 0),K.ajax({url:e,type:t,dataType:i,data:n,success:r})}}),K.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){K.fn[t]=function(e){return this.on(t,e)}}),K._evalUrl=function(e){return K.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},K.fn.extend({wrapAll:function(e){var t;return K.isFunction(e)?this.each(function(t){K(this).wrapAll(e.call(this,t))}):(this[0]&&(t=K(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return this.each(K.isFunction(e)?function(t){K(this).wrapInner(e.call(this,t))}:function(){var t=K(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=K.isFunction(e);return this.each(function(n){K(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){K.nodeName(this,"body")||K(this).replaceWith(this.childNodes)}).end()}}),K.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0},K.expr.filters.visible=function(e){return!K.expr.filters.hidden(e)};var Tn=/%20/g,Cn=/\[\]$/,An=/\r?\n/g,En=/^(?:submit|button|image|reset|file)$/i,Nn=/^(?:input|select|textarea|keygen)/i;K.param=function(e,t){var n,r=[],i=function(e,t){t=K.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=K.ajaxSettings&&K.ajaxSettings.traditional),K.isArray(e)||e.jquery&&!K.isPlainObject(e))K.each(e,function(){i(this.name,this.value)});else for(n in e)q(n,e[n],t,i);return r.join("&").replace(Tn,"+")},K.fn.extend({serialize:function(){return K.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=K.prop(this,"elements");return e?K.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!K(this).is(":disabled")&&Nn.test(this.nodeName)&&!En.test(e)&&(this.checked||!St.test(e))}).map(function(e,t){var n=K(this).val();return null==n?null:K.isArray(n)?K.map(n,function(e){return{name:t.name,value:e.replace(An,"\r\n")}}):{name:t.name,value:n.replace(An,"\r\n")}}).get()}}),K.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var Dn=0,Pn={},Mn={0:200,1223:204},jn=K.ajaxSettings.xhr();e.ActiveXObject&&K(e).on("unload",function(){for(var e in Pn)Pn[e]()}),J.cors=!!jn&&"withCredentials"in jn,J.ajax=jn=!!jn,K.ajaxTransport(function(e){var t;return J.cors||jn&&!e.crossDomain?{send:function(n,r){var i,o=e.xhr(),s=++Dn;if(o.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)o[i]=e.xhrFields[i];e.mimeType&&o.overrideMimeType&&o.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)o.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete Pn[s],t=o.onload=o.onerror=null,"abort"===e?o.abort():"error"===e?r(o.status,o.statusText):r(Mn[o.status]||o.status,o.statusText,"string"==typeof o.responseText?{text:o.responseText}:void 0,o.getAllResponseHeaders()))}},o.onload=t(),o.onerror=t("error"),t=Pn[s]=t("abort");try{o.send(e.hasContent&&e.data||null)}catch(a){if(t)throw a}},abort:function(){t&&t()}}:void 0}),K.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return K.globalEval(e),e}}}),K.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),K.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=K("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),Z.head.appendChild(t[0])},abort:function(){n&&n()}}}});var On=[],In=/(=)\?(?=&|$)|\?\?/;K.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||K.expando+"_"+ln++;return this[e]=!0,e}}),K.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(In.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&In.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=K.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(In,"$1"+i):t.jsonp!==!1&&(t.url+=(fn.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||K.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,On.push(i)),s&&K.isFunction(o)&&o(s[0]),s=o=void 0}),"script"):void 0}),K.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||Z;var r=st.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=K.buildFragment([e],t,i),i&&i.length&&K(i).remove(),K.merge([],r.childNodes))};var Ln=K.fn.load;K.fn.load=function(e,t,n){if("string"!=typeof e&&Ln)return Ln.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=K.trim(e.slice(a)),e=e.slice(0,a)),K.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),s.length>0&&K.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?K("<div>").append(K.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},K.expr.filters.animated=function(e){return K.grep(K.timers,function(t){return e===t.elem}).length};var Bn=e.document.documentElement;K.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,c,l=K.css(e,"position"),f=K(e),h={};"static"===l&&(e.style.position="relative"),a=f.offset(),o=K.css(e,"top"),u=K.css(e,"left"),c=("absolute"===l||"fixed"===l)&&(o+u).indexOf("auto")>-1,c?(r=f.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),K.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(h.top=t.top-a.top+s),null!=t.left&&(h.left=t.left-a.left+i),"using"in t?t.using.call(e,h):f.css(h)}},K.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){K.offset.setOffset(this,e,t)});var t,n,r=this[0],i={top:0,left:0},o=r&&r.ownerDocument;return o?(t=o.documentElement,K.contains(t,r)?(typeof r.getBoundingClientRect!==Tt&&(i=r.getBoundingClientRect()),n=Y(o),{top:i.top+n.pageYOffset-t.clientTop,left:i.left+n.pageXOffset-t.clientLeft}):i):void 0},position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===K.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),K.nodeName(e[0],"html")||(r=e.offset()),r.top+=K.css(e[0],"borderTopWidth",!0),r.left+=K.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-K.css(n,"marginTop",!0),left:t.left-r.left-K.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||Bn;e&&!K.nodeName(e,"html")&&"static"===K.css(e,"position");)e=e.offsetParent;return e||Bn})}}),K.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;K.fn[t]=function(i){return mt(this,function(t,i,o){var s=Y(t);return void 0===o?s?s[n]:t[i]:void(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o)},t,i,arguments.length,null)}}),K.each(["top","left"],function(e,t){K.cssHooks[t]=_(J.pixelPosition,function(e,n){return n?(n=x(e,t),Rt.test(n)?K(e).position()[t]+"px":n):void 0})}),K.each({Height:"height",Width:"width"},function(e,t){K.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){K.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return mt(this,function(t,n,r){var i;return K.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===r?K.css(t,n,s):K.style(t,n,r,s)},t,o?r:void 0,o,null)}})}),K.fn.size=function(){return this.length},K.fn.andSelf=K.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return K});var Hn=e.jQuery,Fn=e.$;return K.noConflict=function(t){return e.$===K&&(e.$=Fn),t&&e.jQuery===K&&(e.jQuery=Hn),K},typeof t===Tt&&(e.jQuery=e.$=K),K}),//# sourceMappingURL=jquery.min.map;
/*!
* Velocity.js: Accelerated JavaScript animation.
* @version 0.10.0
* @docs http://velocityjs.org
* @license Copyright 2014 Julian Shapiro. MIT License: http://en.wikipedia.org/wiki/MIT_License
*/
!function(e,t,n,r){function i(e){for(var t=-1,n=e?e.length:0,r=[];++t<n;){var i=e[t];i&&r.push(i)}return r}function o(e){var t=y.data(e,l);return null===t?r:t}function s(e){return function(t){return Math.round(t*e)*(1/e)}}function a(e,t){var n=e;return m.isString(e)?v.Easings[e]||(n=!1):n=m.isArray(e)&&1===e.length?s.apply(null,e):m.isArray(e)&&2===e.length?w.apply(null,e.concat([t])):m.isArray(e)&&4===e.length?b.apply(null,e):!1,n===!1&&(n=v.Easings[v.defaults.easing]?v.defaults.easing:h),n}function u(e){if(e)for(var t=(new Date).getTime(),n=0,i=v.State.calls.length;i>n;n++)if(v.State.calls[n]){var s=v.State.calls[n],a=s[0],l=s[2],f=s[3];f||(f=v.State.calls[n][3]=t-16);for(var h=Math.min((t-f)/l.duration,1),p=0,d=a.length;d>p;p++){var y=a[p],b=y.element;if(o(b)){var w=!1;l.display&&"none"!==l.display&&x.setPropertyValue(b,"display",l.display),l.visibility&&"hidden"!==l.visibility&&x.setPropertyValue(b,"visibility",l.visibility);for(var _ in y)if("element"!==_){var k,S=y[_],T=m.isString(S.easing)?v.Easings[S.easing]:S.easing;if(k=1===h?S.endValue:S.startValue+(S.endValue-S.startValue)*T(h),S.currentValue=k,x.Hooks.registered[_]){var C=x.Hooks.getRoot(_),A=o(b).rootPropertyValueCache[C];A&&(S.rootPropertyValue=A)}var E=x.setPropertyValue(b,_,S.currentValue+(0===parseFloat(k)?"":S.unitType),S.rootPropertyValue,S.scrollData);x.Hooks.registered[_]&&(o(b).rootPropertyValueCache[C]=x.Normalizations.registered[C]?x.Normalizations.registered[C]("extract",null,E[1]):E[1]),"transform"===E[0]&&(w=!0)}l.mobileHA&&o(b).transformCache.translate3d===r&&(o(b).transformCache.translate3d="(0px, 0px, 0px)",w=!0),w&&x.flushTransformCache(b)}}l.display&&"none"!==l.display&&(v.State.calls[n][2].display=!1),l.visibility&&"hidden"!==l.visibility&&(v.State.calls[n][2].visibility=!1),l.progress&&l.progress.call(s[1],s[1],h,Math.max(0,f+l.duration-t),f),1===h&&c(n)}v.State.isTicking&&g(u)}function c(e,t){if(!v.State.calls[e])return!1;for(var n=v.State.calls[e][0],i=v.State.calls[e][1],s=v.State.calls[e][2],a=v.State.calls[e][4],u=!1,c=0,l=n.length;l>c;c++){var f=n[c].element;if(t||s.loop||("none"===s.display&&x.setPropertyValue(f,"display",s.display),"hidden"===s.visibility&&x.setPropertyValue(f,"visibility",s.visibility)),(y.queue(f)[1]===r||!/\.velocityQueueEntryFlag/i.test(y.queue(f)[1]))&&o(f)){o(f).isAnimating=!1,o(f).rootPropertyValueCache={};var h=!1;y.each(o(f).transformCache,function(e,t){var n=/^scale/.test(e)?1:0;new RegExp("^\\("+n+"[^.]").test(t)&&(h=!0,delete o(f).transformCache[e])}),s.mobileHA&&(h=!0,delete o(f).transformCache.translate3d),h&&x.flushTransformCache(f),x.Values.removeClass(f,"velocity-animating")}if(!t&&s.complete&&!s.loop&&c===l-1)try{s.complete.call(i,i)}catch(p){setTimeout(function(){throw p},1)}a&&s.loop!==!0&&a(i),s.loop!==!0||t||v.animate(f,"reverse",{loop:!0,delay:s.delay}),s.queue!==!1&&y.dequeue(f,s.queue)}v.State.calls[e]=!1;for(var d=0,g=v.State.calls.length;g>d;d++)if(v.State.calls[d]!==!1){u=!0;break}u===!1&&(v.State.isTicking=!1,delete v.State.calls,v.State.calls=[])}var l="velocity",f=400,h="swing",p=function(){if(n.documentMode)return n.documentMode;for(var e=7;e>4;e--){var t=n.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e}return r}(),d=function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var n,r=(new Date).getTime();return n=Math.max(0,16-(r-e)),e=r+n,setTimeout(function(){t(r+n)},n)}}(),g=t.requestAnimationFrame||d,m={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==r&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||t.Zepto&&t.Zepto.zepto.isZ(e))},isSVG:function(e){return t.SVGElement&&e instanceof SVGElement},isEmptyObject:function(e){var t;for(t in e)return!1;return!0}},y=t.jQuery||e.Velocity&&e.Velocity.Utilities;if(!y)throw new Error("Velocity: Either jQuery or Velocity's jQuery shim must first be loaded.");if(e.Velocity!==r&&!e.Velocity.Utilities)throw new Error("Velocity: Namespace is occupied.");if(7>=p){if(t.jQuery)return void(t.jQuery.fn.velocity=t.jQuery.fn.animate);throw new Error("Velocity: For IE<=7, Velocity falls back to jQuery, which must first be loaded.")}if(8===p&&!t.jQuery)throw new Error("Velocity: For IE8, Velocity requires jQuery to be loaded. (Velocity's jQuery shim does not work with IE8.)");var v=e.Velocity=e.velocity=y.extend({State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:n.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:t.jQuery,Sequences:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:f,easing:h,begin:null,complete:null,progress:null,display:null,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},animate:function(){},mock:!1,version:{major:0,minor:10,patch:0},debug:!1},t.Velocity);t.pageYOffset!==r?(v.State.scrollAnchor=t,v.State.scrollPropertyLeft="pageXOffset",v.State.scrollPropertyTop="pageYOffset"):(v.State.scrollAnchor=n.documentElement||n.body.parentNode||n.body,v.State.scrollPropertyLeft="scrollLeft",v.State.scrollPropertyTop="scrollTop"),v.State.isMobile||n.hidden===r||n.addEventListener("visibilitychange",function(){n.hidden?(g=function(e){return setTimeout(function(){e(!0)},16)},u()):g=t.requestAnimationFrame||d});var b=function(){function e(e,t){return 1-3*t+3*e}function t(e,t){return 3*t-6*e}function n(e){return 3*e}function r(r,i,o){return((e(i,o)*r+t(i,o))*r+n(i))*r}function i(r,i,o){return 3*e(i,o)*r*r+2*t(i,o)*r+n(i)}return function(e,t,n,o){function s(t){for(var o=t,s=0;8>s;++s){var a=i(o,e,n);if(0===a)return o;var u=r(o,e,n)-t;o-=u/a}return o}if(4!==arguments.length)return!1;for(var a=0;4>a;++a)if("number"!=typeof arguments[a]||isNaN(arguments[a])||!isFinite(arguments[a]))return!1;return e=Math.min(e,1),n=Math.min(n,1),e=Math.max(e,0),n=Math.max(n,0),function(i){return e===t&&n===o?i:r(s(i),t,o)}}}(),w=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,n,r){var i={x:t.x+r.dx*n,v:t.v+r.dv*n,tension:t.tension,friction:t.friction};return{dx:i.v,dv:e(i)}}function n(n,r){var i={dx:n.v,dv:e(n)},o=t(n,.5*r,i),s=t(n,.5*r,o),a=t(n,r,s),u=1/6*(i.dx+2*(o.dx+s.dx)+a.dx),c=1/6*(i.dv+2*(o.dv+s.dv)+a.dv);return n.x=n.x+u*r,n.v=n.v+c*r,n}return function r(e,t,i){var o,s,a,u={x:-1,v:0,tension:null,friction:null},c=[0],l=0,f=1e-4,h=.016;for(e=parseFloat(e)||500,t=parseFloat(t)||20,i=i||null,u.tension=e,u.friction=t,o=null!==i,o?(l=r(e,t),s=l/i*h):s=h;a=n(a||u,s),c.push(1+a.x),l+=16,Math.abs(a.x)>f&&Math.abs(a.v)>f;);return o?function(e){return c[e*(c.length-1)|0]}:l}}();!function(){v.Easings.linear=function(e){return e},v.Easings.swing=function(e){return.5-Math.cos(e*Math.PI)/2},v.Easings.spring=function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)},v.Easings.ease=b(.25,.1,.25,1),v.Easings["ease-in"]=b(.42,0,1,1),v.Easings["ease-out"]=b(0,0,.58,1),v.Easings["ease-in-out"]=b(.42,0,.58,1);var e={};y.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,n){e[n]=function(e){return Math.pow(e,t+2)}}),y.extend(e,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,n=4;e<((t=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*t-2)/22-e,2)}}),y.each(e,function(e,t){v.Easings["easeIn"+e]=t,v.Easings["easeOut"+e]=function(e){return 1-t(1-e)},v.Easings["easeInOut"+e]=function(e){return.5>e?t(2*e)/2:1-t(-2*e+2)/2}})}();var x=v.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<x.Lists.colors.length;e++)x.Hooks.templates[x.Lists.colors[e]]=["Red Green Blue Alpha","255 255 255 1"];var t,n,r;if(p)for(t in x.Hooks.templates){n=x.Hooks.templates[t],r=n[0].split(" ");var i=n[1].match(x.RegEx.valueSplit);"Color"===r[0]&&(r.push(r.shift()),i.push(i.shift()),x.Hooks.templates[t]=[r.join(" "),i.join(" ")])}for(t in x.Hooks.templates){n=x.Hooks.templates[t],r=n[0].split(" ");for(var e in r){var o=t+r[e],s=e;x.Hooks.registered[o]=[t,s]}}},getRoot:function(e){var t=x.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return x.RegEx.valueUnwrap.test(t)&&(t=t.match(x.Hooks.RegEx.valueUnwrap)[1]),x.Values.isCSSNullValue(t)&&(t=x.Hooks.templates[e][1]),t},extractValue:function(e,t){var n=x.Hooks.registered[e];if(n){var r=n[0],i=n[1];return t=x.Hooks.cleanRootPropertyValue(r,t),t.toString().match(x.RegEx.valueSplit)[i]}return t},injectValue:function(e,t,n){var r=x.Hooks.registered[e];if(r){var i,o,s=r[0],a=r[1];return n=x.Hooks.cleanRootPropertyValue(s,n),i=n.toString().match(x.RegEx.valueSplit),i[a]=t,o=i.join(" ")}return n}},Normalizations:{registered:{clip:function(e,t,n){switch(e){case"name":return"clip";case"extract":var r;return x.RegEx.wrappedValueAlreadyExtracted.test(n)?r=n:(r=n.toString().match(x.RegEx.valueUnwrap),r=r?r[1].replace(/,(\s+)?/g," "):n),r;case"inject":return"rect("+n+")"}},opacity:function(e,t,n){if(8>=p)switch(e){case"name":return"filter";case"extract":var r=n.toString().match(/alpha\(opacity=(.*)\)/i);return n=r?r[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(n)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(n),10)+")"}else switch(e){case"name":return"opacity";case"extract":return n;case"inject":return n}}},register:function(){9>=p||v.State.isGingerbread||(x.Lists.transformsBase=x.Lists.transformsBase.concat(x.Lists.transforms3D));for(var e=0;e<x.Lists.transformsBase.length;e++)!function(){var t=x.Lists.transformsBase[e];x.Normalizations.registered[t]=function(e,n,i){switch(e){case"name":return"transform";case"extract":return o(n).transformCache[t]===r?/^scale/i.test(t)?1:0:o(n).transformCache[t].replace(/[()]/g,"");case"inject":var s=!1;switch(t.substr(0,t.length-1)){case"translate":s=!/(%|px|em|rem|vw|vh|\d)$/i.test(i);break;case"scal":case"scale":v.State.isAndroid&&o(n).transformCache[t]===r&&1>i&&(i=1),s=!/(\d)$/i.test(i);break;case"skew":s=!/(deg|\d)$/i.test(i);break;case"rotate":s=!/(deg|\d)$/i.test(i)}return s||(o(n).transformCache[t]="("+i+")"),o(n).transformCache[t]}}}();for(var e=0;e<x.Lists.colors.length;e++)!function(){var t=x.Lists.colors[e];x.Normalizations.registered[t]=function(e,n,i){switch(e){case"name":return t;case"extract":var o;if(x.RegEx.wrappedValueAlreadyExtracted.test(i))o=i;else{var s,a={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(i)?s=a[i]!==r?a[i]:a.black:x.RegEx.isHex.test(i)?s="rgb("+x.Values.hexToRgb(i).join(" ")+")":/^rgba?\(/i.test(i)||(s=a.black),o=(s||i).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=p||3!==o.split(" ").length||(o+=" 1"),o;case"inject":return 8>=p?4===i.split(" ").length&&(i=i.split(/\s+/).slice(0,3).join(" ")):3===i.split(" ").length&&(i+=" 1"),(8>=p?"rgb":"rgba")+"("+i.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(p||v.State.isAndroid&&!v.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(v.State.prefixMatches[e])return[v.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],n=0,r=t.length;r>n;n++){var i;if(i=0===n?e:t[n]+e.replace(/^\w/,function(e){return e.toUpperCase()}),m.isString(v.State.prefixElement.style[i]))return v.State.prefixMatches[e]=i,[i,!0]}return[e,!1]}},Values:{hexToRgb:function(e){var t,n=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return e=e.replace(n,function(e,t,n,r){return t+t+n+n+r+r}),t=r.exec(e),t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,n,i,s){function a(e,n){function i(){c&&x.setPropertyValue(e,"display","none")}var u=0;if(8>=p)u=y.css(e,n);else{var c=!1;if(/^(width|height)$/.test(n)&&0===x.getPropertyValue(e,"display")&&(c=!0,x.setPropertyValue(e,"display",x.Values.getDisplayType(e))),!s){if("height"===n&&"border-box"!==x.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var l=e.offsetHeight-(parseFloat(x.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(x.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(x.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(x.getPropertyValue(e,"paddingBottom"))||0);return i(),l}if("width"===n&&"border-box"!==x.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var f=e.offsetWidth-(parseFloat(x.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(x.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(x.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(x.getPropertyValue(e,"paddingRight"))||0);return i(),f}}var h;h=o(e)===r?t.getComputedStyle(e,null):o(e).computedStyle?o(e).computedStyle:o(e).computedStyle=t.getComputedStyle(e,null),(p||v.State.isFirefox)&&"borderColor"===n&&(n="borderTopColor"),u=9===p&&"filter"===n?h.getPropertyValue(n):h[n],(""===u||null===u)&&(u=e.style[n]),i()}if("auto"===u&&/^(top|right|bottom|left)$/i.test(n)){var d=a(e,"position");("fixed"===d||"absolute"===d&&/top|left/i.test(n))&&(u=y(e).position()[n]+"px")}return u}var u;if(x.Hooks.registered[n]){var c=n,l=x.Hooks.getRoot(c);i===r&&(i=x.getPropertyValue(e,x.Names.prefixCheck(l)[0])),x.Normalizations.registered[l]&&(i=x.Normalizations.registered[l]("extract",e,i)),u=x.Hooks.extractValue(c,i)}else if(x.Normalizations.registered[n]){var f,h;f=x.Normalizations.registered[n]("name",e),"transform"!==f&&(h=a(e,x.Names.prefixCheck(f)[0]),x.Values.isCSSNullValue(h)&&x.Hooks.templates[n]&&(h=x.Hooks.templates[n][1])),u=x.Normalizations.registered[n]("extract",e,h)}return/^[\d-]/.test(u)||(u=o(e)&&o(e).isSVG&&x.Names.SVGAttribute(n)?/^(height|width)$/i.test(n)?e.getBBox()[n]:e.getAttribute(n):a(e,x.Names.prefixCheck(n)[0])),x.Values.isCSSNullValue(u)&&(u=0),v.debug>=2&&console.log("Get "+n+": "+u),u},setPropertyValue:function(e,n,r,i,s){var a=n;if("scroll"===n)s.container?s.container["scroll"+s.direction]=r:"Left"===s.direction?t.scrollTo(r,s.alternateValue):t.scrollTo(s.alternateValue,r);else if(x.Normalizations.registered[n]&&"transform"===x.Normalizations.registered[n]("name",e))x.Normalizations.registered[n]("inject",e,r),a="transform",r=o(e).transformCache[n];else{if(x.Hooks.registered[n]){var u=n,c=x.Hooks.getRoot(n);i=i||x.getPropertyValue(e,c),r=x.Hooks.injectValue(u,r,i),n=c}if(x.Normalizations.registered[n]&&(r=x.Normalizations.registered[n]("inject",e,r),n=x.Normalizations.registered[n]("name",e)),a=x.Names.prefixCheck(n)[0],8>=p)try{e.style[a]=r}catch(l){v.debug&&console.log("Browser does not support ["+r+"] for ["+a+"]")}else o(e)&&o(e).isSVG&&x.Names.SVGAttribute(n)?e.setAttribute(n,r):e.style[a]=r;v.debug>=2&&console.log("Set "+n+" ("+a+"): "+r)}return[a,r]},flushTransformCache:function(e){function t(t){return parseFloat(x.getPropertyValue(e,t))}var n="";if((p||v.State.isAndroid&&!v.State.isChrome)&&o(e).isSVG){var r={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};y.each(o(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),r[e]&&(n+=e+"("+r[e].join(" ")+") ",delete r[e])})}else{var i,s;y.each(o(e).transformCache,function(t){return i=o(e).transformCache[t],"transformPerspective"===t?(s=i,!0):(9===p&&"rotateZ"===t&&(t="rotate"),void(n+=t+i+" "))}),s&&(n="perspective"+s+" "+n)}x.setPropertyValue(e,"transform",n)}};x.Hooks.register(),x.Normalizations.register(),v.animate=function(){function e(){return h?E.promise||null:d}function s(){function e(){function e(e,t){var n=r,i=r,o=r;return m.isArray(e)?(n=e[0],!m.isArray(e[1])&&/^[\d-]/.test(e[1])||m.isFunction(e[1])||x.RegEx.isHex.test(e[1])?o=e[1]:(m.isString(e[1])&&!x.RegEx.isHex.test(e[1])||m.isArray(e[1]))&&(i=t?e[1]:a(e[1],c.duration),e[2]!==r&&(o=e[2]))):n=e,i=i||c.easing,m.isFunction(n)&&(n=n.call(s,T,S)),m.isFunction(o)&&(o=o.call(s,T,S)),[n||0,i,o]}function l(e,t){var n,r;return r=(t||0).toString().toLowerCase().replace(/[%A-z]+$/,function(e){return n=e,""}),n||(n=x.Values.getUnitType(e)),[r,n]}function f(){var e={parent:s.parentNode,position:x.getPropertyValue(s,"position"),fontSize:x.getPropertyValue(s,"fontSize")},r=e.position===O.lastPosition&&e.parent===O.lastParent,i=e.fontSize===O.lastFontSize&&e.parent===O.lastParent;O.lastParent=e.parent,O.lastPosition=e.position,O.lastFontSize=e.fontSize,null===O.remToPx&&(O.remToPx=parseFloat(x.getPropertyValue(n.body,"fontSize"))||16),null===O.vwToPx&&(O.vwToPx=parseFloat(t.innerWidth)/100,O.vhToPx=parseFloat(t.innerHeight)/100);var a={overflowX:null,overflowY:null,boxSizing:null,width:null,minWidth:null,maxWidth:null,height:null,minHeight:null,maxHeight:null,paddingLeft:null},u={},c=10;if(u.remToPx=O.remToPx,u.vwToPx=O.vwToPx,u.vhToPx=O.vhToPx,p&&!o(s).isSVG)var l=/^auto$/i.test(s.currentStyle.width),f=/^auto$/i.test(s.currentStyle.height);r&&i||(o(s).isSVG||(a.overflowX=x.getPropertyValue(s,"overflowX"),a.overflowY=x.getPropertyValue(s,"overflowY"),a.boxSizing=x.getPropertyValue(s,"boxSizing"),a.minWidth=x.getPropertyValue(s,"minWidth"),a.maxWidth=x.getPropertyValue(s,"maxWidth")||"none",a.minHeight=x.getPropertyValue(s,"minHeight"),a.maxHeight=x.getPropertyValue(s,"maxHeight")||"none",a.paddingLeft=x.getPropertyValue(s,"paddingLeft")),a.width=x.getPropertyValue(s,"width",null,!0),a.height=x.getPropertyValue(s,"height",null,!0)),r?(u.percentToPxRatioWidth=O.lastPercentToPxWidth,u.percentToPxRatioHeight=O.lastPercentToPxHeight):(o(s).isSVG||(x.setPropertyValue(s,"overflowX","hidden"),x.setPropertyValue(s,"overflowY","hidden"),x.setPropertyValue(s,"boxSizing","content-box"),x.setPropertyValue(s,"minWidth",c+"%"),x.setPropertyValue(s,"maxWidth",c+"%"),x.setPropertyValue(s,"minHeight",c+"%"),x.setPropertyValue(s,"maxHeight",c+"%")),x.setPropertyValue(s,"width",c+"%"),x.setPropertyValue(s,"height",c+"%")),i?u.emToPx=O.lastEmToPx:o(s).isSVG||x.setPropertyValue(s,"paddingLeft",c+"em"),r||(u.percentToPxRatioWidth=O.lastPercentToPxWidth=(parseFloat(x.getPropertyValue(s,"width",null,!0))||1)/c,u.percentToPxRatioHeight=O.lastPercentToPxHeight=(parseFloat(x.getPropertyValue(s,"height",null,!0))||1)/c),i||(u.emToPx=O.lastEmToPx=(parseFloat(x.getPropertyValue(s,"paddingLeft"))||1)/c);for(var h in a)null!==a[h]&&x.setPropertyValue(s,h,a[h]);return o(s).isSVG||(p?(l&&x.setPropertyValue(s,"width","auto"),f&&x.setPropertyValue(s,"height","auto")):(x.setPropertyValue(s,"height","auto"),a.height!==x.getPropertyValue(s,"height",null,!0)&&x.setPropertyValue(s,"height",a.height),x.setPropertyValue(s,"width","auto"),a.width!==x.getPropertyValue(s,"width",null,!0)&&x.setPropertyValue(s,"width",a.width))),v.debug>=1&&console.log("Unit ratios: "+JSON.stringify(u),s),u}if(c.begin&&0===T)try{c.begin.call(b,b)}catch(d){setTimeout(function(){throw d},1)}if("scroll"===N){var g,k,C,A=/^x$/i.test(c.axis)?"Left":"Top",D=parseFloat(c.offset)||0;c.container?c.container.jquery||m.isNode(c.container)?(c.container=c.container[0]||c.container,g=c.container["scroll"+A],C=g+y(s).position()[A.toLowerCase()]+D):c.container=null:(g=v.State.scrollAnchor[v.State["scrollProperty"+A]],k=v.State.scrollAnchor[v.State["scrollProperty"+("Left"===A?"Top":"Left")]],C=y(s).offset()[A.toLowerCase()]+D),h={scroll:{rootPropertyValue:!1,startValue:g,currentValue:g,endValue:C,unitType:"",easing:c.easing,scrollData:{container:c.container,direction:A,alternateValue:k}},element:s},v.debug&&console.log("tweensContainer (scroll): ",h.scroll,s)}else if("reverse"===N){if(!o(s).tweensContainer)return void y.dequeue(s,c.queue);"none"===o(s).opts.display&&(o(s).opts.display="block"),"hidden"===o(s).opts.visibility&&(o(s).opts.visibility="visible"),o(s).opts.loop=!1,o(s).opts.begin=null,o(s).opts.complete=null,_.easing||delete c.easing,_.duration||delete c.duration,c=y.extend({},o(s).opts,c);var P=y.extend(!0,{},o(s).tweensContainer);for(var M in P)if("element"!==M){var j=P[M].startValue;P[M].startValue=P[M].currentValue=P[M].endValue,P[M].endValue=j,m.isEmptyObject(_)||(P[M].easing=c.easing),v.debug&&console.log("reverse tweensContainer ("+M+"): "+JSON.stringify(P[M]),s)}h=P}else if("start"===N){var P;o(s).tweensContainer&&o(s).isAnimating===!0&&(P=o(s).tweensContainer),y.each(w,function(t,n){var i=e(n,!0),o=i[0],s=i[1],a=i[2];if(RegExp(x.Lists.colors.join("|")).test(t)&&x.RegEx.isHex.test(o)){for(var u=["Red","Green","Blue"],c=x.Values.hexToRgb(o),l=a?x.Values.hexToRgb(a):r,f=0;f<u.length;f++)w[t+u[f]]=[c[f],s,l?l[f]:l];delete w[t]}});for(var L in w){var B=e(w[L]),H=B[0],F=B[1],q=B[2];L=x.Names.camelCase(L);var Y=x.Hooks.getRoot(L),R=!1;if(o(s).isSVG||x.Names.prefixCheck(Y)[1]!==!1||x.Normalizations.registered[Y]!==r){(c.display&&"none"!==c.display||c.visibility&&"hidden"!==c.visibility)&&/opacity|filter/.test(L)&&!q&&0!==H&&(q=0),c._cacheValues&&P&&P[L]?(q===r&&(q=P[L].endValue+P[L].unitType),R=o(s).rootPropertyValueCache[Y]):x.Hooks.registered[L]?q===r?(R=x.getPropertyValue(s,Y),q=x.getPropertyValue(s,L,R)):R=x.Hooks.templates[Y][1]:q===r&&(q=x.getPropertyValue(s,L));var V,$,W,U=!1;V=l(L,q),q=V[0],W=V[1],V=l(L,H),H=V[0].replace(/^([+-\/*])=/,function(e,t){return U=t,""}),$=V[1],q=parseFloat(q)||0,H=parseFloat(H)||0;var z;if("%"===$&&(/^(fontSize|lineHeight)$/.test(L)?(H/=100,$="em"):/^scale/.test(L)?(H/=100,$=""):/(Red|Green|Blue)$/i.test(L)&&(H=H/100*255,$="")),/[\/*]/.test(U))$=W;else if(W!==$&&0!==q)if(0===H)$=W;else{z=z||f();var G=/margin|padding|left|right|width|text|word|letter/i.test(L)||/X$/.test(L)?"x":"y";switch(W){case"%":q*="x"===G?z.percentToPxRatioWidth:z.percentToPxRatioHeight;break;case"px":break;default:q*=z[W+"ToPx"]}switch($){case"%":q*=1/("x"===G?z.percentToPxRatioWidth:z.percentToPxRatioHeight);break;case"px":break;default:q*=1/z[$+"ToPx"]}}switch(U){case"+":H=q+H;break;case"-":H=q-H;break;case"*":H=q*H;break;case"/":H=q/H}h[L]={rootPropertyValue:R,startValue:q,currentValue:q,endValue:H,unitType:$,easing:F},v.debug&&console.log("tweensContainer ("+L+"): "+JSON.stringify(h[L]),s)}else v.debug&&console.log("Skipping ["+Y+"] due to a lack of browser support.")}h.element=s}h.element&&(x.Values.addClass(s,"velocity-animating"),I.push(h),o(s).tweensContainer=h,o(s).opts=c,o(s).isAnimating=!0,T===S-1?(v.State.calls.length>1e4&&(v.State.calls=i(v.State.calls)),v.State.calls.push([I,b,c,null,E.resolver]),v.State.isTicking===!1&&(v.State.isTicking=!0,u())):T++)}var s=this,c=y.extend({},v.defaults,_),h={};if(o(s)===r&&y.data(s,l,{isSVG:m.isSVG(s),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}}),parseFloat(c.delay)&&c.queue!==!1&&y.queue(s,c.queue,function(e){v.velocityQueueEntryFlag=!0,o(s).delayTimer={setTimeout:setTimeout(e,parseFloat(c.delay)),next:e}}),v.mock===!0)c.duration=1;else switch(c.duration.toString().toLowerCase()){case"fast":c.duration=200;break;case"normal":c.duration=f;break;case"slow":c.duration=600;break;default:c.duration=parseFloat(c.duration)||1}c.easing=a(c.easing,c.duration),c.begin&&!m.isFunction(c.begin)&&(c.begin=null),c.progress&&!m.isFunction(c.progress)&&(c.progress=null),c.complete&&!m.isFunction(c.complete)&&(c.complete=null),c.display&&(c.display=c.display.toString().toLowerCase(),"auto"===c.display&&(c.display=v.CSS.Values.getDisplayType(s))),c.visibility&&(c.visibility=c.visibility.toString().toLowerCase()),c.mobileHA=c.mobileHA&&v.State.isMobile&&!v.State.isGingerbread,c.queue===!1?c.delay?setTimeout(e,c.delay):e():y.queue(s,c.queue,function(t,n){return n===!0?(E.promise&&E.resolver(b),!0):(v.velocityQueueEntryFlag=!0,void e(t))}),""!==c.queue&&"fx"!==c.queue||"inprogress"===y.queue(s)[0]||y.dequeue(s)}var h,d,g,b,w,_,k=arguments[0]&&(y.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||m.isString(arguments[0].properties));if(m.isWrapped(this)?(h=!1,g=0,b=this,d=this):(h=!0,g=1,b=k?arguments[0].elements:arguments[0]),b=m.isWrapped(b)?[].slice.call(b):b){k?(w=arguments[0].properties,_=arguments[0].options):(w=arguments[g],_=arguments[g+1]);var S=m.isArray(b)||m.isNodeList(b)?b.length:1,T=0;if("stop"!==w&&!y.isPlainObject(_)){var C=g+1;_={};for(var A=C;A<arguments.length;A++)!m.isArray(arguments[A])&&/^\d/.test(arguments[A])?_.duration=parseFloat(arguments[A]):m.isString(arguments[A])||m.isArray(arguments[A])?_.easing=arguments[A]:m.isFunction(arguments[A])&&(_.complete=arguments[A])}var E={promise:null,resolver:null,rejecter:null};h&&v.Promise&&(E.promise=new v.Promise(function(e,t){E.resolver=e,E.rejecter=t}));var N;switch(w){case"scroll":N="scroll";break;case"reverse":N="reverse";break;case"stop":y.each(m.isNode(b)?[b]:b,function(e,t){o(t)&&o(t).delayTimer&&(clearTimeout(o(t).delayTimer.setTimeout),o(t).delayTimer.next&&o(t).delayTimer.next(),delete o(t).delayTimer)});var D=[];return y.each(v.State.calls,function(e,t){t&&y.each(m.isNode(t[1])?[t[1]]:t[1],function(t,n){y.each(m.isNode(b)?[b]:b,function(t,r){if(r===n){if(o(r)&&y.each(o(r).tweensContainer,function(e,t){t.endValue=t.currentValue}),_===!0||m.isString(_)){var i=m.isString(_)?_:"";y.each(y.queue(r,i),function(e,t){m.isFunction(t)&&t(null,!0)}),y.queue(r,i,[])}D.push(e)}})})}),y.each(D,function(e,t){c(t,!0)}),E.promise&&E.resolver(b),e();default:if(!y.isPlainObject(w)||m.isEmptyObject(w)){if(m.isString(w)&&v.Sequences[w]){var P=_.duration,M=_.delay||0;return _.backwards===!0&&(b=(b.jquery?[].slice.call(b):b).reverse()),y.each(b,function(e,t){parseFloat(_.stagger)?_.delay=M+parseFloat(_.stagger)*e:m.isFunction(_.stagger)&&(_.delay=M+_.stagger.call(t,e,S)),_.drag&&(_.duration=parseFloat(P)||(/^(callout|transition)/.test(w)?1e3:f),_.duration=Math.max(_.duration*(_.backwards?1-e/S:(e+1)/S),.75*_.duration,200)),v.Sequences[w].call(t,t,_||{},e,S,b,E.promise?E:r)}),e()}var j="Velocity: First argument ("+w+") was not a property map, a known action, or a registered sequence. Aborting.";return E.promise?E.rejecter(new Error(j)):console.log(j),e()}N="start"}var O={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},I=[];y.each(m.isNode(b)?[b]:b,function(e,t){m.isNode(t)&&s.call(t)});var L,B=y.extend({},v.defaults,_);if(B.loop=parseInt(B.loop),L=2*B.loop-1,B.loop)for(var H=0;L>H;H++){var F={delay:B.delay};H===L-1&&(F.display=B.display,F.visibility=B.visibility,F.complete=B.complete),v.animate(b,"reverse",F)}return e()}};var _=t.jQuery||t.Zepto;_&&(_.fn.velocity=v.animate,_.fn.velocity.defaults=v.defaults),"undefined"!=typeof define&&define.amd?define("velocity",[],function(){return v}):"undefined"!=typeof module&&module.exports&&(module.exports=v),y.each(["Down","Up"],function(e,t){v.Sequences["slide"+t]=function(e,n,r,i,o,s){var a=y.extend({},n),u={height:null,marginTop:null,marginBottom:null,paddingTop:null,paddingBottom:null,overflow:null,overflowX:null,overflowY:null},c=a.begin,l=a.complete,f=!1;null!==a.display&&(a.display="Down"===t?a.display||"auto":a.display||"none"),a.begin=function(){function n(){u.height=parseFloat(v.CSS.getPropertyValue(e,"height")),e.style.height="auto",parseFloat(v.CSS.getPropertyValue(e,"height"))===u.height&&(f=!0),v.CSS.setPropertyValue(e,"height",u.height+"px")}if("Down"===t){u.overflow=[v.CSS.getPropertyValue(e,"overflow"),0],u.overflowX=[v.CSS.getPropertyValue(e,"overflowX"),0],u.overflowY=[v.CSS.getPropertyValue(e,"overflowY"),0],e.style.overflow="hidden",e.style.overflowX="visible",e.style.overflowY="hidden",n();for(var r in u)if(!/^overflow/.test(r)){var i=v.CSS.getPropertyValue(e,r);"height"===r&&(i=parseFloat(i)),u[r]=[i,0]}}else{n();for(var r in u){var i=v.CSS.getPropertyValue(e,r);"height"===r&&(i=parseFloat(i)),u[r]=[0,i]}e.style.overflow="hidden",e.style.overflowX="visible",e.style.overflowY="hidden"}c&&c.call(e,e)},a.complete=function(e){var n="Down"===t?0:1;f===!0?u.height[n]="auto":u.height[n]+="px";for(var r in u)e.style[r]=u[r][n];l&&l.call(e,e),s&&s.resolver(o||e)},v.animate(e,u,a)}}),y.each(["In","Out"],function(e,t){v.Sequences["fade"+t]=function(e,n,r,i,o,s){var a=y.extend({},n),u={opacity:"In"===t?1:0};if(r!==i-1)a.complete=a.begin=null;else{var c=a.complete;a.complete=function(){c&&c.call(e,e),s&&s.resolver(o||e)}}null!==a.display&&(a.display=a.display||("In"===t?"auto":"none")),v.animate(this,u,a)}})}(window.jQuery||window.Zepto||window,window,document),//! moment.js
//! version : 2.8.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
function(e){function t(e,t,n){switch(arguments.length){case 2:return null!=e?e:t;case 3:return null!=e?e:null!=t?t:n;default:throw new Error("Implement me")}}function n(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function r(e){yt.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function i(e,t){var n=!0;return f(function(){return n&&(r(e),n=!1),t.apply(this,arguments)},t)}function o(e,t){dn[e]||(r(t),dn[e]=!0)}function s(e,t){return function(n){return d(e.call(this,n),t)}}function a(e,t){return function(n){return this.localeData().ordinal(e.call(this,n),t)}}function u(){}function c(e,t){t!==!1&&D(e),h(this,e),this._d=new Date(+e._d)}function l(e){var t=k(e),n=t.year||0,r=t.quarter||0,i=t.month||0,o=t.week||0,s=t.day||0,a=t.hour||0,u=t.minute||0,c=t.second||0,l=t.millisecond||0;this._milliseconds=+l+1e3*c+6e4*u+36e5*a,this._days=+s+7*o,this._months=+i+3*r+12*n,this._data={},this._locale=yt.localeData(),this._bubble()}function f(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return t.hasOwnProperty("toString")&&(e.toString=t.toString),t.hasOwnProperty("valueOf")&&(e.valueOf=t.valueOf),e}function h(e,t){var n,r,i;if("undefined"!=typeof t._isAMomentObject&&(e._isAMomentObject=t._isAMomentObject),"undefined"!=typeof t._i&&(e._i=t._i),"undefined"!=typeof t._f&&(e._f=t._f),"undefined"!=typeof t._l&&(e._l=t._l),"undefined"!=typeof t._strict&&(e._strict=t._strict),"undefined"!=typeof t._tzm&&(e._tzm=t._tzm),"undefined"!=typeof t._isUTC&&(e._isUTC=t._isUTC),"undefined"!=typeof t._offset&&(e._offset=t._offset),"undefined"!=typeof t._pf&&(e._pf=t._pf),"undefined"!=typeof t._locale&&(e._locale=t._locale),Pt.length>0)for(n in Pt)r=Pt[n],i=t[r],"undefined"!=typeof i&&(e[r]=i);return e}function p(e){return 0>e?Math.ceil(e):Math.floor(e)}function d(e,t,n){for(var r=""+Math.abs(e),i=e>=0;r.length<t;)r="0"+r;return(i?n?"+":"":"-")+r}function g(e,t){var n={milliseconds:0,months:0};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function m(e,t){var n;return t=I(t,e),e.isBefore(t)?n=g(e,t):(n=g(t,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n}function y(e,t){return function(n,r){var i,s;return null===r||isNaN(+r)||(o(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period)."),s=n,n=r,r=s),n="string"==typeof n?+n:n,i=yt.duration(n,r),v(this,i,e),this}}function v(e,t,n,r){var i=t._milliseconds,o=t._days,s=t._months;r=null==r?!0:r,i&&e._d.setTime(+e._d+i*n),o&&ft(e,"Date",lt(e,"Date")+o*n),s&&ct(e,lt(e,"Month")+s*n),r&&yt.updateOffset(e,o||s)}function b(e){return"[object Array]"===Object.prototype.toString.call(e)}function w(e){return"[object Date]"===Object.prototype.toString.call(e)||e instanceof Date}function x(e,t,n){var r,i=Math.min(e.length,t.length),o=Math.abs(e.length-t.length),s=0;for(r=0;i>r;r++)(n&&e[r]!==t[r]||!n&&T(e[r])!==T(t[r]))&&s++;return s+o}function _(e){if(e){var t=e.toLowerCase().replace(/(.)s$/,"$1");e=an[e]||un[t]||t}return e}function k(e){var t,n,r={};for(n in e)e.hasOwnProperty(n)&&(t=_(n),t&&(r[t]=e[n]));return r}function S(t){var n,r;if(0===t.indexOf("week"))n=7,r="day";else{if(0!==t.indexOf("month"))return;n=12,r="month"}yt[t]=function(i,o){var s,a,u=yt._locale[t],c=[];if("number"==typeof i&&(o=i,i=e),a=function(e){var t=yt().utc().set(r,e);return u.call(yt._locale,t,i||"")},null!=o)return a(o);for(s=0;n>s;s++)c.push(a(s));return c}}function T(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=t>=0?Math.floor(t):Math.ceil(t)),n}function C(e,t){return new Date(Date.UTC(e,t+1,0)).getUTCDate()}function A(e,t,n){return ot(yt([e,11,31+t-n]),t,n).week}function E(e){return N(e)?366:365}function N(e){return e%4===0&&e%100!==0||e%400===0}function D(e){var t;e._a&&-2===e._pf.overflow&&(t=e._a[St]<0||e._a[St]>11?St:e._a[Tt]<1||e._a[Tt]>C(e._a[kt],e._a[St])?Tt:e._a[Ct]<0||e._a[Ct]>23?Ct:e._a[At]<0||e._a[At]>59?At:e._a[Et]<0||e._a[Et]>59?Et:e._a[Nt]<0||e._a[Nt]>999?Nt:-1,e._pf._overflowDayOfYear&&(kt>t||t>Tt)&&(t=Tt),e._pf.overflow=t)}function P(e){return null==e._isValid&&(e._isValid=!isNaN(e._d.getTime())&&e._pf.overflow<0&&!e._pf.empty&&!e._pf.invalidMonth&&!e._pf.nullInput&&!e._pf.invalidFormat&&!e._pf.userInvalidated,e._strict&&(e._isValid=e._isValid&&0===e._pf.charsLeftOver&&0===e._pf.unusedTokens.length)),e._isValid}function M(e){return e?e.toLowerCase().replace("_","-"):e}function j(e){for(var t,n,r,i,o=0;o<e.length;){for(i=M(e[o]).split("-"),t=i.length,n=M(e[o+1]),n=n?n.split("-"):null;t>0;){if(r=O(i.slice(0,t).join("-")))return r;if(n&&n.length>=t&&x(i,n,!0)>=t-1)break;t--}o++}return null}function O(e){var t=null;if(!Dt[e]&&Mt)try{t=yt.locale(),require("./locale/"+e),yt.locale(t)}catch(n){}return Dt[e]}function I(e,t){return t._isUTC?yt(e).zone(t._offset||0):yt(e).local()}function L(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function B(e){var t,n,r=e.match(Lt);for(t=0,n=r.length;n>t;t++)r[t]=pn[r[t]]?pn[r[t]]:L(r[t]);return function(i){var o="";for(t=0;n>t;t++)o+=r[t]instanceof Function?r[t].call(i,e):r[t];return o}}function H(e,t){return e.isValid()?(t=F(t,e.localeData()),cn[t]||(cn[t]=B(t)),cn[t](e)):e.localeData().invalidDate()}function F(e,t){function n(e){return t.longDateFormat(e)||e}var r=5;for(Bt.lastIndex=0;r>=0&&Bt.test(e);)e=e.replace(Bt,n),Bt.lastIndex=0,r-=1;return e}function q(e,t){var n,r=t._strict;switch(e){case"Q":return Gt;case"DDDD":return Jt;case"YYYY":case"GGGG":case"gggg":return r?Zt:qt;case"Y":case"G":case"g":return Kt;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return r?Qt:Yt;case"S":if(r)return Gt;case"SS":if(r)return Xt;case"SSS":if(r)return Jt;case"DDD":return Ft;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return Vt;case"a":case"A":return t._locale._meridiemParse;case"X":return Ut;case"Z":case"ZZ":return $t;case"T":return Wt;case"SSSS":return Rt;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return r?Xt:Ht;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return Ht;case"Do":return zt;default:return n=new RegExp(X(G(e.replace("\\","")),"i"))}}function Y(e){e=e||"";var t=e.match($t)||[],n=t[t.length-1]||[],r=(n+"").match(on)||["-",0,0],i=+(60*r[1])+T(r[2]);return"+"===r[0]?-i:i}function R(e,t,n){var r,i=n._a;switch(e){case"Q":null!=t&&(i[St]=3*(T(t)-1));break;case"M":case"MM":null!=t&&(i[St]=T(t)-1);break;case"MMM":case"MMMM":r=n._locale.monthsParse(t),null!=r?i[St]=r:n._pf.invalidMonth=t;break;case"D":case"DD":null!=t&&(i[Tt]=T(t));break;case"Do":null!=t&&(i[Tt]=T(parseInt(t,10)));break;case"DDD":case"DDDD":null!=t&&(n._dayOfYear=T(t));break;case"YY":i[kt]=yt.parseTwoDigitYear(t);break;case"YYYY":case"YYYYY":case"YYYYYY":i[kt]=T(t);break;case"a":case"A":n._isPm=n._locale.isPM(t);break;case"H":case"HH":case"h":case"hh":i[Ct]=T(t);break;case"m":case"mm":i[At]=T(t);break;case"s":case"ss":i[Et]=T(t);break;case"S":case"SS":case"SSS":case"SSSS":i[Nt]=T(1e3*("0."+t));break;case"X":n._d=new Date(1e3*parseFloat(t));break;case"Z":case"ZZ":n._useUTC=!0,n._tzm=Y(t);break;case"dd":case"ddd":case"dddd":r=n._locale.weekdaysParse(t),null!=r?(n._w=n._w||{},n._w.d=r):n._pf.invalidWeekday=t;break;case"w":case"ww":case"W":case"WW":case"d":case"e":case"E":e=e.substr(0,1);case"gggg":case"GGGG":case"GGGGG":e=e.substr(0,2),t&&(n._w=n._w||{},n._w[e]=T(t));break;case"gg":case"GG":n._w=n._w||{},n._w[e]=yt.parseTwoDigitYear(t)}}function V(e){var n,r,i,o,s,a,u;n=e._w,null!=n.GG||null!=n.W||null!=n.E?(s=1,a=4,r=t(n.GG,e._a[kt],ot(yt(),1,4).year),i=t(n.W,1),o=t(n.E,1)):(s=e._locale._week.dow,a=e._locale._week.doy,r=t(n.gg,e._a[kt],ot(yt(),s,a).year),i=t(n.w,1),null!=n.d?(o=n.d,s>o&&++i):o=null!=n.e?n.e+s:s),u=st(r,i,o,a,s),e._a[kt]=u.year,e._dayOfYear=u.dayOfYear}function $(e){var n,r,i,o,s=[];if(!e._d){for(i=U(e),e._w&&null==e._a[Tt]&&null==e._a[St]&&V(e),e._dayOfYear&&(o=t(e._a[kt],i[kt]),e._dayOfYear>E(o)&&(e._pf._overflowDayOfYear=!0),r=tt(o,0,e._dayOfYear),e._a[St]=r.getUTCMonth(),e._a[Tt]=r.getUTCDate()),n=0;3>n&&null==e._a[n];++n)e._a[n]=s[n]=i[n];for(;7>n;n++)e._a[n]=s[n]=null==e._a[n]?2===n?1:0:e._a[n];e._d=(e._useUTC?tt:et).apply(null,s),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()+e._tzm)}}function W(e){var t;e._d||(t=k(e._i),e._a=[t.year,t.month,t.day,t.hour,t.minute,t.second,t.millisecond],$(e))}function U(e){var t=new Date;return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function z(e){if(e._f===yt.ISO_8601)return void Z(e);e._a=[],e._pf.empty=!0;var t,n,r,i,o,s=""+e._i,a=s.length,u=0;for(r=F(e._f,e._locale).match(Lt)||[],t=0;t<r.length;t++)i=r[t],n=(s.match(q(i,e))||[])[0],n&&(o=s.substr(0,s.indexOf(n)),o.length>0&&e._pf.unusedInput.push(o),s=s.slice(s.indexOf(n)+n.length),u+=n.length),pn[i]?(n?e._pf.empty=!1:e._pf.unusedTokens.push(i),R(i,n,e)):e._strict&&!n&&e._pf.unusedTokens.push(i);e._pf.charsLeftOver=a-u,s.length>0&&e._pf.unusedInput.push(s),e._isPm&&e._a[Ct]<12&&(e._a[Ct]+=12),e._isPm===!1&&12===e._a[Ct]&&(e._a[Ct]=0),$(e),D(e)}function G(e){return e.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,r,i){return t||n||r||i})}function X(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function J(e){var t,r,i,o,s;if(0===e._f.length)return e._pf.invalidFormat=!0,void(e._d=new Date(0/0));for(o=0;o<e._f.length;o++)s=0,t=h({},e),t._pf=n(),t._f=e._f[o],z(t),P(t)&&(s+=t._pf.charsLeftOver,s+=10*t._pf.unusedTokens.length,t._pf.score=s,(null==i||i>s)&&(i=s,r=t));f(e,r||t)}function Z(e){var t,n,r=e._i,i=en.exec(r);if(i){for(e._pf.iso=!0,t=0,n=nn.length;n>t;t++)if(nn[t][1].exec(r)){e._f=nn[t][0]+(i[6]||" ");break}for(t=0,n=rn.length;n>t;t++)if(rn[t][1].exec(r)){e._f+=rn[t][0];break}r.match($t)&&(e._f+="Z"),z(e)}else e._isValid=!1}function Q(e){Z(e),e._isValid===!1&&(delete e._isValid,yt.createFromInputFallback(e))}function K(t){var n,r=t._i;r===e?t._d=new Date:w(r)?t._d=new Date(+r):null!==(n=jt.exec(r))?t._d=new Date(+n[1]):"string"==typeof r?Q(t):b(r)?(t._a=r.slice(0),$(t)):"object"==typeof r?W(t):"number"==typeof r?t._d=new Date(r):yt.createFromInputFallback(t)}function et(e,t,n,r,i,o,s){var a=new Date(e,t,n,r,i,o,s);return 1970>e&&a.setFullYear(e),a}function tt(e){var t=new Date(Date.UTC.apply(null,arguments));return 1970>e&&t.setUTCFullYear(e),t}function nt(e,t){if("string"==typeof e)if(isNaN(e)){if(e=t.weekdaysParse(e),"number"!=typeof e)return null}else e=parseInt(e,10);return e}function rt(e,t,n,r,i){return i.relativeTime(t||1,!!n,e,r)}function it(e,t,n){var r=yt.duration(e).abs(),i=_t(r.as("s")),o=_t(r.as("m")),s=_t(r.as("h")),a=_t(r.as("d")),u=_t(r.as("M")),c=_t(r.as("y")),l=i<ln.s&&["s",i]||1===o&&["m"]||o<ln.m&&["mm",o]||1===s&&["h"]||s<ln.h&&["hh",s]||1===a&&["d"]||a<ln.d&&["dd",a]||1===u&&["M"]||u<ln.M&&["MM",u]||1===c&&["y"]||["yy",c];return l[2]=t,l[3]=+e>0,l[4]=n,rt.apply({},l)}function ot(e,t,n){var r,i=n-t,o=n-e.day();return o>i&&(o-=7),i-7>o&&(o+=7),r=yt(e).add(o,"d"),{week:Math.ceil(r.dayOfYear()/7),year:r.year()}}function st(e,t,n,r,i){var o,s,a=tt(e,0,1).getUTCDay();return a=0===a?7:a,n=null!=n?n:i,o=i-a+(a>r?7:0)-(i>a?7:0),s=7*(t-1)+(n-i)+o+1,{year:s>0?e:e-1,dayOfYear:s>0?s:E(e-1)+s}}function at(t){var n=t._i,r=t._f;return t._locale=t._locale||yt.localeData(t._l),null===n||r===e&&""===n?yt.invalid({nullInput:!0}):("string"==typeof n&&(t._i=n=t._locale.preparse(n)),yt.isMoment(n)?new c(n,!0):(r?b(r)?J(t):z(t):K(t),new c(t)))}function ut(e,t){var n,r;if(1===t.length&&b(t[0])&&(t=t[0]),!t.length)return yt();for(n=t[0],r=1;r<t.length;++r)t[r][e](n)&&(n=t[r]);return n}function ct(e,t){var n;return"string"==typeof t&&(t=e.localeData().monthsParse(t),"number"!=typeof t)?e:(n=Math.min(e.date(),C(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e)}function lt(e,t){return e._d["get"+(e._isUTC?"UTC":"")+t]()}function ft(e,t,n){return"Month"===t?ct(e,n):e._d["set"+(e._isUTC?"UTC":"")+t](n)}function ht(e,t){return function(n){return null!=n?(ft(this,e,n),yt.updateOffset(this,t),this):lt(this,e)}}function pt(e){return 400*e/146097}function dt(e){return 146097*e/400}function gt(e){yt.duration.fn[e]=function(){return this._data[e]}}function mt(e){"undefined"==typeof ender&&(vt=xt.moment,xt.moment=e?i("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.",yt):yt)}for(var yt,vt,bt,wt="2.8.0",xt="undefined"!=typeof global?global:this,_t=Math.round,kt=0,St=1,Tt=2,Ct=3,At=4,Et=5,Nt=6,Dt={},Pt=[],Mt="undefined"!=typeof module&&module.exports,jt=/^\/?Date\((\-?\d+)/i,Ot=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,It=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,Lt=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,Bt=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,Ht=/\d\d?/,Ft=/\d{1,3}/,qt=/\d{1,4}/,Yt=/[+\-]?\d{1,6}/,Rt=/\d+/,Vt=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,$t=/Z|[\+\-]\d\d:?\d\d/gi,Wt=/T/i,Ut=/[\+\-]?\d+(\.\d{1,3})?/,zt=/\d{1,2}/,Gt=/\d/,Xt=/\d\d/,Jt=/\d{3}/,Zt=/\d{4}/,Qt=/[+-]?\d{6}/,Kt=/[+-]?\d+/,en=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,tn="YYYY-MM-DDTHH:mm:ssZ",nn=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],rn=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],on=/([\+\-]|\d\d)/gi,sn=("Date|Hours|Minutes|Seconds|Milliseconds".split("|"),{Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6}),an={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},un={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},cn={},ln={s:45,m:45,h:22,d:26,M:11},fn="DDD w W M D d".split(" "),hn="M D H h m s w W".split(" "),pn={M:function(){return this.month()+1},MMM:function(e){return this.localeData().monthsShort(this,e)},MMMM:function(e){return this.localeData().months(this,e)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(e){return this.localeData().weekdaysMin(this,e)},ddd:function(e){return this.localeData().weekdaysShort(this,e)},dddd:function(e){return this.localeData().weekdays(this,e)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return d(this.year()%100,2)},YYYY:function(){return d(this.year(),4)},YYYYY:function(){return d(this.year(),5)},YYYYYY:function(){var e=this.year(),t=e>=0?"+":"-";return t+d(Math.abs(e),6)},gg:function(){return d(this.weekYear()%100,2)},gggg:function(){return d(this.weekYear(),4)},ggggg:function(){return d(this.weekYear(),5)},GG:function(){return d(this.isoWeekYear()%100,2)},GGGG:function(){return d(this.isoWeekYear(),4)},GGGGG:function(){return d(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return T(this.milliseconds()/100)},SS:function(){return d(T(this.milliseconds()/10),2)},SSS:function(){return d(this.milliseconds(),3)},SSSS:function(){return d(this.milliseconds(),3)},Z:function(){var e=-this.zone(),t="+";return 0>e&&(e=-e,t="-"),t+d(T(e/60),2)+":"+d(T(e)%60,2)},ZZ:function(){var e=-this.zone(),t="+";return 0>e&&(e=-e,t="-"),t+d(T(e/60),2)+d(T(e)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()},Q:function(){return this.quarter()}},dn={},gn=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];fn.length;)bt=fn.pop(),pn[bt+"o"]=a(pn[bt],bt);for(;hn.length;)bt=hn.pop(),pn[bt+bt]=s(pn[bt],2);pn.DDDD=s(pn.DDD,3),f(u.prototype,{set:function(e){var t,n;for(n in e)t=e[n],"function"==typeof t?this[n]=t:this["_"+n]=t},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(e){return this._months[e.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(e){return this._monthsShort[e.month()]},monthsParse:function(e){var t,n,r;for(this._monthsParse||(this._monthsParse=[]),t=0;12>t;t++)if(this._monthsParse[t]||(n=yt.utc([2e3,t]),r="^"+this.months(n,"")+"|^"+this.monthsShort(n,""),this._monthsParse[t]=new RegExp(r.replace(".",""),"i")),this._monthsParse[t].test(e))return t},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(e){return this._weekdays[e.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(e){return this._weekdaysShort[e.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(e){return this._weekdaysMin[e.day()]},weekdaysParse:function(e){var t,n,r;for(this._weekdaysParse||(this._weekdaysParse=[]),t=0;7>t;t++)if(this._weekdaysParse[t]||(n=yt([2e3,1]).day(t),r="^"+this.weekdays(n,"")+"|^"+this.weekdaysShort(n,"")+"|^"+this.weekdaysMin(n,""),this._weekdaysParse[t]=new RegExp(r.replace(".",""),"i")),this._weekdaysParse[t].test(e))return t},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM D, YYYY LT"},longDateFormat:function(e){var t=this._longDateFormat[e];return!t&&this._longDateFormat[e.toUpperCase()]&&(t=this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e]=t),t},isPM:function(e){return"p"===(e+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(e,t){var n=this._calendar[e];return"function"==typeof n?n.apply(t):n},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(e,t,n,r){var i=this._relativeTime[n];return"function"==typeof i?i(e,t,n,r):i.replace(/%d/i,e)},pastFuture:function(e,t){var n=this._relativeTime[e>0?"future":"past"];return"function"==typeof n?n(t):n.replace(/%s/i,t)},ordinal:function(e){return this._ordinal.replace("%d",e)},_ordinal:"%d",preparse:function(e){return e},postformat:function(e){return e},week:function(e){return ot(e,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),yt=function(t,r,i,o){var s;return"boolean"==typeof i&&(o=i,i=e),s={},s._isAMomentObject=!0,s._i=t,s._f=r,s._l=i,s._strict=o,s._isUTC=!1,s._pf=n(),at(s)},yt.suppressDeprecationWarnings=!1,yt.createFromInputFallback=i("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(e){e._d=new Date(e._i)}),yt.min=function(){var e=[].slice.call(arguments,0);return ut("isBefore",e)},yt.max=function(){var e=[].slice.call(arguments,0);return ut("isAfter",e)},yt.utc=function(t,r,i,o){var s;return"boolean"==typeof i&&(o=i,i=e),s={},s._isAMomentObject=!0,s._useUTC=!0,s._isUTC=!0,s._l=i,s._i=t,s._f=r,s._strict=o,s._pf=n(),at(s).utc()},yt.unix=function(e){return yt(1e3*e)},yt.duration=function(e,t){var n,r,i,o,s=e,a=null;return yt.isDuration(e)?s={ms:e._milliseconds,d:e._days,M:e._months}:"number"==typeof e?(s={},t?s[t]=e:s.milliseconds=e):(a=Ot.exec(e))?(n="-"===a[1]?-1:1,s={y:0,d:T(a[Tt])*n,h:T(a[Ct])*n,m:T(a[At])*n,s:T(a[Et])*n,ms:T(a[Nt])*n}):(a=It.exec(e))?(n="-"===a[1]?-1:1,i=function(e){var t=e&&parseFloat(e.replace(",","."));return(isNaN(t)?0:t)*n},s={y:i(a[2]),M:i(a[3]),d:i(a[4]),h:i(a[5]),m:i(a[6]),s:i(a[7]),w:i(a[8])}):"object"==typeof s&&("from"in s||"to"in s)&&(o=m(yt(s.from),yt(s.to)),s={},s.ms=o.milliseconds,s.M=o.months),r=new l(s),yt.isDuration(e)&&e.hasOwnProperty("_locale")&&(r._locale=e._locale),r},yt.version=wt,yt.defaultFormat=tn,yt.ISO_8601=function(){},yt.momentProperties=Pt,yt.updateOffset=function(){},yt.relativeTimeThreshold=function(t,n){return ln[t]===e?!1:n===e?ln[t]:(ln[t]=n,!0)},yt.lang=i("moment.lang is deprecated. Use moment.locale instead.",function(e,t){return yt.locale(e,t)}),yt.locale=function(e,t){var n;return e&&(n="undefined"!=typeof t?yt.defineLocale(e,t):yt.localeData(e),n&&(yt.duration._locale=yt._locale=n)),yt._locale._abbr},yt.defineLocale=function(e,t){return null!==t?(t.abbr=e,Dt[e]||(Dt[e]=new u),Dt[e].set(t),yt.locale(e),Dt[e]):(delete Dt[e],null)},yt.langData=i("moment.langData is deprecated. Use moment.localeData instead.",function(e){return yt.localeData(e)}),yt.localeData=function(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return yt._locale;if(!b(e)){if(t=O(e))return t;e=[e]}return j(e)},yt.isMoment=function(e){return e instanceof c||null!=e&&e.hasOwnProperty("_isAMomentObject")},yt.isDuration=function(e){return e instanceof l};for(bt=gn.length-1;bt>=0;--bt)S(gn[bt]);yt.normalizeUnits=function(e){return _(e)},yt.invalid=function(e){var t=yt.utc(0/0);return null!=e?f(t._pf,e):t._pf.userInvalidated=!0,t},yt.parseZone=function(){return yt.apply(null,arguments).parseZone()},yt.parseTwoDigitYear=function(e){return T(e)+(T(e)>68?1900:2e3)},f(yt.fn=c.prototype,{clone:function(){return yt(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var e=yt(this).utc();return 0<e.year()&&e.year()<=9999?H(e,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):H(e,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var e=this;return[e.year(),e.month(),e.date(),e.hours(),e.minutes(),e.seconds(),e.milliseconds()]},isValid:function(){return P(this)},isDSTShifted:function(){return this._a?this.isValid()&&x(this._a,(this._isUTC?yt.utc(this._a):yt(this._a)).toArray())>0:!1},parsingFlags:function(){return f({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(e){return this.zone(0,e)},local:function(e){return this._isUTC&&(this.zone(0,e),this._isUTC=!1,e&&this.add(this._d.getTimezoneOffset(),"m")),this},format:function(e){var t=H(this,e||yt.defaultFormat);return this.localeData().postformat(t)},add:y(1,"add"),subtract:y(-1,"subtract"),diff:function(e,t,n){var r,i,o=I(e,this),s=6e4*(this.zone()-o.zone());return t=_(t),"year"===t||"month"===t?(r=432e5*(this.daysInMonth()+o.daysInMonth()),i=12*(this.year()-o.year())+(this.month()-o.month()),i+=(this-yt(this).startOf("month")-(o-yt(o).startOf("month")))/r,i-=6e4*(this.zone()-yt(this).startOf("month").zone()-(o.zone()-yt(o).startOf("month").zone()))/r,"year"===t&&(i/=12)):(r=this-o,i="second"===t?r/1e3:"minute"===t?r/6e4:"hour"===t?r/36e5:"day"===t?(r-s)/864e5:"week"===t?(r-s)/6048e5:r),n?i:p(i)},from:function(e,t){return yt.duration({to:this,from:e}).locale(this.locale()).humanize(!t)},fromNow:function(e){return this.from(yt(),e)},calendar:function(e){var t=e||yt(),n=I(t,this).startOf("day"),r=this.diff(n,"days",!0),i=-6>r?"sameElse":-1>r?"lastWeek":0>r?"lastDay":1>r?"sameDay":2>r?"nextDay":7>r?"nextWeek":"sameElse";return this.format(this.localeData().calendar(i,this))},isLeapYear:function(){return N(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(e){var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(e=nt(e,this.localeData()),this.add(e-t,"d")):t},month:ht("Month",!0),startOf:function(e){switch(e=_(e)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===e?this.weekday(0):"isoWeek"===e&&this.isoWeekday(1),"quarter"===e&&this.month(3*Math.floor(this.month()/3)),this},endOf:function(e){return e=_(e),this.startOf(e).add(1,"isoWeek"===e?"week":e).subtract(1,"ms")},isAfter:function(e,t){return t="undefined"!=typeof t?t:"millisecond",+this.clone().startOf(t)>+yt(e).startOf(t)},isBefore:function(e,t){return t="undefined"!=typeof t?t:"millisecond",+this.clone().startOf(t)<+yt(e).startOf(t)},isSame:function(e,t){return t=t||"ms",+this.clone().startOf(t)===+I(e,this).startOf(t)},min:i("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(e){return e=yt.apply(null,arguments),this>e?this:e}),max:i("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(e){return e=yt.apply(null,arguments),e>this?this:e}),zone:function(e,t){var n,r=this._offset||0;return null==e?this._isUTC?r:this._d.getTimezoneOffset():("string"==typeof e&&(e=Y(e)),Math.abs(e)<16&&(e=60*e),!this._isUTC&&t&&(n=this._d.getTimezoneOffset()),this._offset=e,this._isUTC=!0,null!=n&&this.subtract(n,"m"),r!==e&&(!t||this._changeInProgress?v(this,yt.duration(r-e,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,yt.updateOffset(this,!0),this._changeInProgress=null)),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.zone(this._tzm):"string"==typeof this._i&&this.zone(this._i),this},hasAlignedHourOffset:function(e){return e=e?yt(e).zone():0,(this.zone()-e)%60===0},daysInMonth:function(){return C(this.year(),this.month())},dayOfYear:function(e){var t=_t((yt(this).startOf("day")-yt(this).startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")},quarter:function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},weekYear:function(e){var t=ot(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==e?t:this.add(e-t,"y")},isoWeekYear:function(e){var t=ot(this,1,4).year;return null==e?t:this.add(e-t,"y")},week:function(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")},isoWeek:function(e){var t=ot(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")},weekday:function(e){var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")},isoWeekday:function(e){return null==e?this.day()||7:this.day(this.day()%7?e:e-7)},isoWeeksInYear:function(){return A(this.year(),1,4)},weeksInYear:function(){var e=this.localeData()._week;return A(this.year(),e.dow,e.doy)},get:function(e){return e=_(e),this[e]()},set:function(e,t){return e=_(e),"function"==typeof this[e]&&this[e](t),this},locale:function(t){return t===e?this._locale._abbr:(this._locale=yt.localeData(t),this)},lang:i("moment().lang() is deprecated. Use moment().localeData() instead.",function(e){return this.localeData(e)}),localeData:function(){return this._locale}}),yt.fn.millisecond=yt.fn.milliseconds=ht("Milliseconds",!1),yt.fn.second=yt.fn.seconds=ht("Seconds",!1),yt.fn.minute=yt.fn.minutes=ht("Minutes",!1),yt.fn.hour=yt.fn.hours=ht("Hours",!0),yt.fn.date=ht("Date",!0),yt.fn.dates=i("dates accessor is deprecated. Use date instead.",ht("Date",!0)),yt.fn.year=ht("FullYear",!0),yt.fn.years=i("years accessor is deprecated. Use year instead.",ht("FullYear",!0)),yt.fn.days=yt.fn.day,yt.fn.months=yt.fn.month,yt.fn.weeks=yt.fn.week,yt.fn.isoWeeks=yt.fn.isoWeek,yt.fn.quarters=yt.fn.quarter,yt.fn.toJSON=yt.fn.toISOString,f(yt.duration.fn=l.prototype,{_bubble:function(){var e,t,n,r=this._milliseconds,i=this._days,o=this._months,s=this._data,a=0;s.milliseconds=r%1e3,e=p(r/1e3),s.seconds=e%60,t=p(e/60),s.minutes=t%60,n=p(t/60),s.hours=n%24,i+=p(n/24),a=p(pt(i)),i-=p(dt(a)),o+=p(i/30),i%=30,a+=p(o/12),o%=12,s.days=i,s.months=o,s.years=a},abs:function(){return this._milliseconds=Math.abs(this._milliseconds),this._days=Math.abs(this._days),this._months=Math.abs(this._months),this._data.milliseconds=Math.abs(this._data.milliseconds),this._data.seconds=Math.abs(this._data.seconds),this._data.minutes=Math.abs(this._data.minutes),this._data.hours=Math.abs(this._data.hours),this._data.months=Math.abs(this._data.months),this._data.years=Math.abs(this._data.years),this},weeks:function(){return p(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*T(this._months/12)},humanize:function(e){var t=it(this,!e,this.localeData());return e&&(t=this.localeData().pastFuture(+this,t)),this.localeData().postformat(t)},add:function(e,t){var n=yt.duration(e,t);return this._milliseconds+=n._milliseconds,this._days+=n._days,this._months+=n._months,this._bubble(),this},subtract:function(e,t){var n=yt.duration(e,t);return this._milliseconds-=n._milliseconds,this._days-=n._days,this._months-=n._months,this._bubble(),this},get:function(e){return e=_(e),this[e.toLowerCase()+"s"]()},as:function(e){var t,n;if(e=_(e),t=this._days+this._milliseconds/864e5,"month"===e||"year"===e)return n=this._months+12*pt(t),"month"===e?n:n/12;switch(t+=dt(this._months/12),e){case"week":return t/7;case"day":return t;case"hour":return 24*t;case"minute":return 24*t*60;case"second":return 24*t*60*60;case"millisecond":return 24*t*60*60*1e3;default:throw new Error("Unknown unit "+e)}},lang:yt.fn.lang,locale:yt.fn.locale,toIsoString:i("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",function(){return this.toISOString()}),toISOString:function(){var e=Math.abs(this.years()),t=Math.abs(this.months()),n=Math.abs(this.days()),r=Math.abs(this.hours()),i=Math.abs(this.minutes()),o=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(e?e+"Y":"")+(t?t+"M":"")+(n?n+"D":"")+(r||i||o?"T":"")+(r?r+"H":"")+(i?i+"M":"")+(o?o+"S":""):"P0D"},localeData:function(){return this._locale}});for(bt in sn)sn.hasOwnProperty(bt)&&gt(bt.toLowerCase());yt.duration.fn.asMilliseconds=function(){return this.as("ms")},yt.duration.fn.asSeconds=function(){return this.as("s")},yt.duration.fn.asMinutes=function(){return this.as("m")},yt.duration.fn.asHours=function(){return this.as("h")},yt.duration.fn.asDays=function(){return this.as("d")},yt.duration.fn.asWeeks=function(){return this.as("weeks")},yt.duration.fn.asMonths=function(){return this.as("M")},yt.duration.fn.asYears=function(){return this.as("y")},yt.locale("en",{ordinal:function(e){var t=e%10,n=1===T(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n}}),Mt?module.exports=yt:"function"==typeof define&&define.amd?(define("moment",["require","exports","module"],function(e,t,n){return n.config&&n.config()&&n.config().noGlobal===!0&&(xt.moment=vt),yt}),mt(!0)):mt()}.call(this),//     Underscore.js 1.6.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
function(){// Baseline setup
// --------------
// Establish the root object, `window` in the browser, or `exports` on the server.
var e=this,t=e._,n={},r=Array.prototype,i=Object.prototype,o=Function.prototype,s=r.push,a=r.slice,u=r.concat,c=i.toString,l=i.hasOwnProperty,f=r.forEach,h=r.map,p=r.reduce,d=r.reduceRight,g=r.filter,m=r.every,y=r.some,v=r.indexOf,b=r.lastIndexOf,w=Array.isArray,x=Object.keys,_=o.bind,k=function(e){return e instanceof k?e:this instanceof k?void(this._wrapped=e):new k(e)};// Export the Underscore object for **Node.js**, with
// backwards-compatibility for the old `require()` API. If we're in
// the browser, add `_` as a global object via a string identifier,
// for Closure Compiler "advanced" mode.
"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=k),exports._=k):e._=k,// Current version.
k.VERSION="1.6.0";// Collection Functions
// --------------------
// The cornerstone, an `each` implementation, aka `forEach`.
// Handles objects with the built-in `forEach`, arrays, and raw objects.
// Delegates to **ECMAScript 5**'s native `forEach` if available.
var S=k.each=k.forEach=function(e,t,r){if(null==e)return e;if(f&&e.forEach===f)e.forEach(t,r);else if(e.length===+e.length){for(var i=0,o=e.length;o>i;i++)if(t.call(r,e[i],i,e)===n)return}else for(var s=k.keys(e),i=0,o=s.length;o>i;i++)if(t.call(r,e[s[i]],s[i],e)===n)return;return e};// Return the results of applying the iterator to each element.
// Delegates to **ECMAScript 5**'s native `map` if available.
k.map=k.collect=function(e,t,n){var r=[];return null==e?r:h&&e.map===h?e.map(t,n):(S(e,function(e,i,o){r.push(t.call(n,e,i,o))}),r)};var T="Reduce of empty array with no initial value";// **Reduce** builds up a single result from a list of values, aka `inject`,
// or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
k.reduce=k.foldl=k.inject=function(e,t,n,r){var i=arguments.length>2;if(null==e&&(e=[]),p&&e.reduce===p)return r&&(t=k.bind(t,r)),i?e.reduce(t,n):e.reduce(t);if(S(e,function(e,o,s){i?n=t.call(r,n,e,o,s):(n=e,i=!0)}),!i)throw new TypeError(T);return n},// The right-associative version of reduce, also known as `foldr`.
// Delegates to **ECMAScript 5**'s native `reduceRight` if available.
k.reduceRight=k.foldr=function(e,t,n,r){var i=arguments.length>2;if(null==e&&(e=[]),d&&e.reduceRight===d)return r&&(t=k.bind(t,r)),i?e.reduceRight(t,n):e.reduceRight(t);var o=e.length;if(o!==+o){var s=k.keys(e);o=s.length}if(S(e,function(a,u,c){u=s?s[--o]:--o,i?n=t.call(r,n,e[u],u,c):(n=e[u],i=!0)}),!i)throw new TypeError(T);return n},// Return the first value which passes a truth test. Aliased as `detect`.
k.find=k.detect=function(e,t,n){var r;return C(e,function(e,i,o){return t.call(n,e,i,o)?(r=e,!0):void 0}),r},// Return all the elements that pass a truth test.
// Delegates to **ECMAScript 5**'s native `filter` if available.
// Aliased as `select`.
k.filter=k.select=function(e,t,n){var r=[];return null==e?r:g&&e.filter===g?e.filter(t,n):(S(e,function(e,i,o){t.call(n,e,i,o)&&r.push(e)}),r)},// Return all the elements for which a truth test fails.
k.reject=function(e,t,n){return k.filter(e,function(e,r,i){return!t.call(n,e,r,i)},n)},// Determine whether all of the elements match a truth test.
// Delegates to **ECMAScript 5**'s native `every` if available.
// Aliased as `all`.
k.every=k.all=function(e,t,r){t||(t=k.identity);var i=!0;return null==e?i:m&&e.every===m?e.every(t,r):(S(e,function(e,o,s){return(i=i&&t.call(r,e,o,s))?void 0:n}),!!i)};// Determine if at least one element in the object matches a truth test.
// Delegates to **ECMAScript 5**'s native `some` if available.
// Aliased as `any`.
var C=k.some=k.any=function(e,t,r){t||(t=k.identity);var i=!1;return null==e?i:y&&e.some===y?e.some(t,r):(S(e,function(e,o,s){return i||(i=t.call(r,e,o,s))?n:void 0}),!!i)};// Determine if the array or object contains a given value (using `===`).
// Aliased as `include`.
k.contains=k.include=function(e,t){return null==e?!1:v&&e.indexOf===v?-1!=e.indexOf(t):C(e,function(e){return e===t})},// Invoke a method (with arguments) on every item in a collection.
k.invoke=function(e,t){var n=a.call(arguments,2),r=k.isFunction(t);return k.map(e,function(e){return(r?t:e[t]).apply(e,n)})},// Convenience version of a common use case of `map`: fetching a property.
k.pluck=function(e,t){return k.map(e,k.property(t))},// Convenience version of a common use case of `filter`: selecting only objects
// containing specific `key:value` pairs.
k.where=function(e,t){return k.filter(e,k.matches(t))},// Convenience version of a common use case of `find`: getting the first object
// containing specific `key:value` pairs.
k.findWhere=function(e,t){return k.find(e,k.matches(t))},// Return the maximum element or (element-based computation).
// Can't optimize arrays of integers longer than 65,535 elements.
// See [WebKit Bug 80797](https://bugs.webkit.org/show_bug.cgi?id=80797)
k.max=function(e,t,n){if(!t&&k.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.max.apply(Math,e);var r=-1/0,i=-1/0;return S(e,function(e,o,s){var a=t?t.call(n,e,o,s):e;a>i&&(r=e,i=a)}),r},// Return the minimum element (or element-based computation).
k.min=function(e,t,n){if(!t&&k.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.min.apply(Math,e);var r=1/0,i=1/0;return S(e,function(e,o,s){var a=t?t.call(n,e,o,s):e;i>a&&(r=e,i=a)}),r},// Shuffle an array, using the modern version of the
// [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
k.shuffle=function(e){var t,n=0,r=[];return S(e,function(e){t=k.random(n++),r[n-1]=r[t],r[t]=e}),r},// Sample **n** random values from a collection.
// If **n** is not specified, returns a single random element.
// The internal `guard` argument allows it to work with `map`.
k.sample=function(e,t,n){return null==t||n?(e.length!==+e.length&&(e=k.values(e)),e[k.random(e.length-1)]):k.shuffle(e).slice(0,Math.max(0,t))};// An internal function to generate lookup iterators.
var A=function(e){return null==e?k.identity:k.isFunction(e)?e:k.property(e)};// Sort the object's values by a criterion produced by an iterator.
k.sortBy=function(e,t,n){return t=A(t),k.pluck(k.map(e,function(e,r,i){return{value:e,index:r,criteria:t.call(n,e,r,i)}}).sort(function(e,t){var n=e.criteria,r=t.criteria;if(n!==r){if(n>r||void 0===n)return 1;if(r>n||void 0===r)return-1}return e.index-t.index}),"value")};// An internal function used for aggregate "group by" operations.
var E=function(e){return function(t,n,r){var i={};return n=A(n),S(t,function(o,s){var a=n.call(r,o,s,t);e(i,a,o)}),i}};// Groups the object's values by a criterion. Pass either a string attribute
// to group by, or a function that returns the criterion.
k.groupBy=E(function(e,t,n){k.has(e,t)?e[t].push(n):e[t]=[n]}),// Indexes the object's values by a criterion, similar to `groupBy`, but for
// when you know that your index values will be unique.
k.indexBy=E(function(e,t,n){e[t]=n}),// Counts instances of an object that group by a certain criterion. Pass
// either a string attribute to count by, or a function that returns the
// criterion.
k.countBy=E(function(e,t){k.has(e,t)?e[t]++:e[t]=1}),// Use a comparator function to figure out the smallest index at which
// an object should be inserted so as to maintain order. Uses binary search.
k.sortedIndex=function(e,t,n,r){n=A(n);for(var i=n.call(r,t),o=0,s=e.length;s>o;){var a=o+s>>>1;n.call(r,e[a])<i?o=a+1:s=a}return o},// Safely create a real, live array from anything iterable.
k.toArray=function(e){return e?k.isArray(e)?a.call(e):e.length===+e.length?k.map(e,k.identity):k.values(e):[]},// Return the number of elements in an object.
k.size=function(e){return null==e?0:e.length===+e.length?e.length:k.keys(e).length},// Array Functions
// ---------------
// Get the first element of an array. Passing **n** will return the first N
// values in the array. Aliased as `head` and `take`. The **guard** check
// allows it to work with `_.map`.
k.first=k.head=k.take=function(e,t,n){return null==e?void 0:null==t||n?e[0]:0>t?[]:a.call(e,0,t)},// Returns everything but the last entry of the array. Especially useful on
// the arguments object. Passing **n** will return all the values in
// the array, excluding the last N. The **guard** check allows it to work with
// `_.map`.
k.initial=function(e,t,n){return a.call(e,0,e.length-(null==t||n?1:t))},// Get the last element of an array. Passing **n** will return the last N
// values in the array. The **guard** check allows it to work with `_.map`.
k.last=function(e,t,n){return null==e?void 0:null==t||n?e[e.length-1]:a.call(e,Math.max(e.length-t,0))},// Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
// Especially useful on the arguments object. Passing an **n** will return
// the rest N values in the array. The **guard**
// check allows it to work with `_.map`.
k.rest=k.tail=k.drop=function(e,t,n){return a.call(e,null==t||n?1:t)},// Trim out all falsy values from an array.
k.compact=function(e){return k.filter(e,k.identity)};// Internal implementation of a recursive `flatten` function.
var N=function(e,t,n){return t&&k.every(e,k.isArray)?u.apply(n,e):(S(e,function(e){k.isArray(e)||k.isArguments(e)?t?s.apply(n,e):N(e,t,n):n.push(e)}),n)};// Flatten out an array, either recursively (by default), or just one level.
k.flatten=function(e,t){return N(e,t,[])},// Return a version of the array that does not contain the specified value(s).
k.without=function(e){return k.difference(e,a.call(arguments,1))},// Split an array into two arrays: one whose elements all satisfy the given
// predicate, and one whose elements all do not satisfy the predicate.
k.partition=function(e,t){var n=[],r=[];return S(e,function(e){(t(e)?n:r).push(e)}),[n,r]},// Produce a duplicate-free version of the array. If the array has already
// been sorted, you have the option of using a faster algorithm.
// Aliased as `unique`.
k.uniq=k.unique=function(e,t,n,r){k.isFunction(t)&&(r=n,n=t,t=!1);var i=n?k.map(e,n,r):e,o=[],s=[];return S(i,function(n,r){(t?r&&s[s.length-1]===n:k.contains(s,n))||(s.push(n),o.push(e[r]))}),o},// Produce an array that contains the union: each distinct element from all of
// the passed-in arrays.
k.union=function(){return k.uniq(k.flatten(arguments,!0))},// Produce an array that contains every item shared between all the
// passed-in arrays.
k.intersection=function(e){var t=a.call(arguments,1);return k.filter(k.uniq(e),function(e){return k.every(t,function(t){return k.contains(t,e)})})},// Take the difference between one array and a number of other arrays.
// Only the elements present in just the first array will remain.
k.difference=function(e){var t=u.apply(r,a.call(arguments,1));return k.filter(e,function(e){return!k.contains(t,e)})},// Zip together multiple lists into a single array -- elements that share
// an index go together.
k.zip=function(){for(var e=k.max(k.pluck(arguments,"length").concat(0)),t=new Array(e),n=0;e>n;n++)t[n]=k.pluck(arguments,""+n);return t},// Converts lists into objects. Pass either a single array of `[key, value]`
// pairs, or two parallel arrays of the same length -- one of keys, and one of
// the corresponding values.
k.object=function(e,t){if(null==e)return{};for(var n={},r=0,i=e.length;i>r;r++)t?n[e[r]]=t[r]:n[e[r][0]]=e[r][1];return n},// If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
// we need this function. Return the position of the first occurrence of an
// item in an array, or -1 if the item is not included in the array.
// Delegates to **ECMAScript 5**'s native `indexOf` if available.
// If the array is large and already in sort order, pass `true`
// for **isSorted** to use binary search.
k.indexOf=function(e,t,n){if(null==e)return-1;var r=0,i=e.length;if(n){if("number"!=typeof n)return r=k.sortedIndex(e,t),e[r]===t?r:-1;r=0>n?Math.max(0,i+n):n}if(v&&e.indexOf===v)return e.indexOf(t,n);for(;i>r;r++)if(e[r]===t)return r;return-1},// Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
k.lastIndexOf=function(e,t,n){if(null==e)return-1;var r=null!=n;if(b&&e.lastIndexOf===b)return r?e.lastIndexOf(t,n):e.lastIndexOf(t);for(var i=r?n:e.length;i--;)if(e[i]===t)return i;return-1},// Generate an integer Array containing an arithmetic progression. A port of
// the native Python `range()` function. See
// [the Python documentation](http://docs.python.org/library/functions.html#range).
k.range=function(e,t,n){arguments.length<=1&&(t=e||0,e=0),n=arguments[2]||1;for(var r=Math.max(Math.ceil((t-e)/n),0),i=0,o=new Array(r);r>i;)o[i++]=e,e+=n;return o};// Function (ahem) Functions
// ------------------
// Reusable constructor function for prototype setting.
var D=function(){};// Create a function bound to a given object (assigning `this`, and arguments,
// optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
// available.
k.bind=function(e,t){var n,r;if(_&&e.bind===_)return _.apply(e,a.call(arguments,1));if(!k.isFunction(e))throw new TypeError;return n=a.call(arguments,2),r=function(){if(!(this instanceof r))return e.apply(t,n.concat(a.call(arguments)));D.prototype=e.prototype;var i=new D;D.prototype=null;var o=e.apply(i,n.concat(a.call(arguments)));return Object(o)===o?o:i}},// Partially apply a function by creating a version that has had some of its
// arguments pre-filled, without changing its dynamic `this` context. _ acts
// as a placeholder, allowing any combination of arguments to be pre-filled.
k.partial=function(e){var t=a.call(arguments,1);return function(){for(var n=0,r=t.slice(),i=0,o=r.length;o>i;i++)r[i]===k&&(r[i]=arguments[n++]);for(;n<arguments.length;)r.push(arguments[n++]);return e.apply(this,r)}},// Bind a number of an object's methods to that object. Remaining arguments
// are the method names to be bound. Useful for ensuring that all callbacks
// defined on an object belong to it.
k.bindAll=function(e){var t=a.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return S(t,function(t){e[t]=k.bind(e[t],e)}),e},// Memoize an expensive function by storing its results.
k.memoize=function(e,t){var n={};return t||(t=k.identity),function(){var r=t.apply(this,arguments);return k.has(n,r)?n[r]:n[r]=e.apply(this,arguments)}},// Delays a function for the given number of milliseconds, and then calls
// it with the arguments supplied.
k.delay=function(e,t){var n=a.call(arguments,2);return setTimeout(function(){return e.apply(null,n)},t)},// Defers a function, scheduling it to run after the current call stack has
// cleared.
k.defer=function(e){return k.delay.apply(k,[e,1].concat(a.call(arguments,1)))},// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.
k.throttle=function(e,t,n){var r,i,o,s=null,a=0;n||(n={});var u=function(){a=n.leading===!1?0:k.now(),s=null,o=e.apply(r,i),r=i=null};return function(){var c=k.now();a||n.leading!==!1||(a=c);var l=t-(c-a);return r=this,i=arguments,0>=l?(clearTimeout(s),s=null,a=c,o=e.apply(r,i),r=i=null):s||n.trailing===!1||(s=setTimeout(u,l)),o}},// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
k.debounce=function(e,t,n){var r,i,o,s,a,u=function(){var c=k.now()-s;t>c?r=setTimeout(u,t-c):(r=null,n||(a=e.apply(o,i),o=i=null))};return function(){o=this,i=arguments,s=k.now();var c=n&&!r;return r||(r=setTimeout(u,t)),c&&(a=e.apply(o,i),o=i=null),a}},// Returns a function that will be executed at most one time, no matter how
// often you call it. Useful for lazy initialization.
k.once=function(e){var t,n=!1;return function(){return n?t:(n=!0,t=e.apply(this,arguments),e=null,t)}},// Returns the first function passed as an argument to the second,
// allowing you to adjust arguments, run code before and after, and
// conditionally execute the original function.
k.wrap=function(e,t){return k.partial(t,e)},// Returns a function that is the composition of a list of functions, each
// consuming the return value of the function that follows.
k.compose=function(){var e=arguments;return function(){for(var t=arguments,n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},// Returns a function that will only be executed after being called N times.
k.after=function(e,t){return function(){return--e<1?t.apply(this,arguments):void 0}},// Object Functions
// ----------------
// Retrieve the names of an object's properties.
// Delegates to **ECMAScript 5**'s native `Object.keys`
k.keys=function(e){if(!k.isObject(e))return[];if(x)return x(e);var t=[];for(var n in e)k.has(e,n)&&t.push(n);return t},// Retrieve the values of an object's properties.
k.values=function(e){for(var t=k.keys(e),n=t.length,r=new Array(n),i=0;n>i;i++)r[i]=e[t[i]];return r},// Convert an object into a list of `[key, value]` pairs.
k.pairs=function(e){for(var t=k.keys(e),n=t.length,r=new Array(n),i=0;n>i;i++)r[i]=[t[i],e[t[i]]];return r},// Invert the keys and values of an object. The values must be serializable.
k.invert=function(e){for(var t={},n=k.keys(e),r=0,i=n.length;i>r;r++)t[e[n[r]]]=n[r];return t},// Return a sorted list of the function names available on the object.
// Aliased as `methods`
k.functions=k.methods=function(e){var t=[];for(var n in e)k.isFunction(e[n])&&t.push(n);return t.sort()},// Extend a given object with all the properties in passed-in object(s).
k.extend=function(e){return S(a.call(arguments,1),function(t){if(t)for(var n in t)e[n]=t[n]}),e},// Return a copy of the object only containing the whitelisted properties.
k.pick=function(e){var t={},n=u.apply(r,a.call(arguments,1));return S(n,function(n){n in e&&(t[n]=e[n])}),t},// Return a copy of the object without the blacklisted properties.
k.omit=function(e){var t={},n=u.apply(r,a.call(arguments,1));for(var i in e)k.contains(n,i)||(t[i]=e[i]);return t},// Fill in a given object with default properties.
k.defaults=function(e){return S(a.call(arguments,1),function(t){if(t)for(var n in t)void 0===e[n]&&(e[n]=t[n])}),e},// Create a (shallow-cloned) duplicate of an object.
k.clone=function(e){return k.isObject(e)?k.isArray(e)?e.slice():k.extend({},e):e},// Invokes interceptor with the obj, and then returns obj.
// The primary purpose of this method is to "tap into" a method chain, in
// order to perform operations on intermediate results within the chain.
k.tap=function(e,t){return t(e),e};// Internal recursive comparison function for `isEqual`.
var P=function(e,t,n,r){// Identical objects are equal. `0 === -0`, but they aren't identical.
// See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
if(e===t)return 0!==e||1/e==1/t;// A strict comparison is necessary because `null == undefined`.
if(null==e||null==t)return e===t;// Unwrap any wrapped objects.
e instanceof k&&(e=e._wrapped),t instanceof k&&(t=t._wrapped);// Compare `[[Class]]` names.
var i=c.call(e);if(i!=c.call(t))return!1;switch(i){// Strings, numbers, dates, and booleans are compared by value.
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
var s=e.constructor,a=t.constructor;if(s!==a&&!(k.isFunction(s)&&s instanceof s&&k.isFunction(a)&&a instanceof a)&&"constructor"in e&&"constructor"in t)return!1;// Add the first object to the stack of traversed objects.
n.push(e),r.push(t);var u=0,l=!0;// Recursively compare objects and arrays.
if("[object Array]"==i){if(// Compare array lengths to determine if a deep comparison is necessary.
u=e.length,l=u==t.length)// Deep compare the contents, ignoring non-numeric properties.
for(;u--&&(l=P(e[u],t[u],n,r)););}else{// Deep compare objects.
for(var f in e)if(k.has(e,f)&&(// Count the expected number of properties.
u++,!(l=k.has(t,f)&&P(e[f],t[f],n,r))))break;// Ensure that both objects contain the same number of properties.
if(l){for(f in t)if(k.has(t,f)&&!u--)break;l=!u}}// Remove the first object from the stack of traversed objects.
return n.pop(),r.pop(),l};// Perform a deep comparison to check if two objects are equal.
k.isEqual=function(e,t){return P(e,t,[],[])},// Is a given array, string, or object empty?
// An "empty" object has no enumerable own-properties.
k.isEmpty=function(e){if(null==e)return!0;if(k.isArray(e)||k.isString(e))return 0===e.length;for(var t in e)if(k.has(e,t))return!1;return!0},// Is a given value a DOM element?
k.isElement=function(e){return!(!e||1!==e.nodeType)},// Is a given value an array?
// Delegates to ECMA5's native Array.isArray
k.isArray=w||function(e){return"[object Array]"==c.call(e)},// Is a given variable an object?
k.isObject=function(e){return e===Object(e)},// Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
S(["Arguments","Function","String","Number","Date","RegExp"],function(e){k["is"+e]=function(t){return c.call(t)=="[object "+e+"]"}}),// Define a fallback version of the method in browsers (ahem, IE), where
// there isn't any inspectable "Arguments" type.
k.isArguments(arguments)||(k.isArguments=function(e){return!(!e||!k.has(e,"callee"))}),// Optimize `isFunction` if appropriate.
"function"!=typeof/./&&(k.isFunction=function(e){return"function"==typeof e}),// Is a given object a finite number?
k.isFinite=function(e){return isFinite(e)&&!isNaN(parseFloat(e))},// Is the given value `NaN`? (NaN is the only number which does not equal itself).
k.isNaN=function(e){return k.isNumber(e)&&e!=+e},// Is a given value a boolean?
k.isBoolean=function(e){return e===!0||e===!1||"[object Boolean]"==c.call(e)},// Is a given value equal to null?
k.isNull=function(e){return null===e},// Is a given variable undefined?
k.isUndefined=function(e){return void 0===e},// Shortcut function for checking if an object has a given property directly
// on itself (in other words, not on a prototype).
k.has=function(e,t){return l.call(e,t)},// Utility Functions
// -----------------
// Run Underscore.js in *noConflict* mode, returning the `_` variable to its
// previous owner. Returns a reference to the Underscore object.
k.noConflict=function(){return e._=t,this},// Keep the identity function around for default iterators.
k.identity=function(e){return e},k.constant=function(e){return function(){return e}},k.property=function(e){return function(t){return t[e]}},// Returns a predicate for checking whether an object has a given set of `key:value` pairs.
k.matches=function(e){return function(t){if(t===e)return!0;//avoid comparing an object to itself.
for(var n in e)if(e[n]!==t[n])return!1;return!0}},// Run a function **n** times.
k.times=function(e,t,n){for(var r=Array(Math.max(0,e)),i=0;e>i;i++)r[i]=t.call(n,i);return r},// Return a random integer between min and max (inclusive).
k.random=function(e,t){return null==t&&(t=e,e=0),e+Math.floor(Math.random()*(t-e+1))},// A (possibly faster) way to get the current timestamp as an integer.
k.now=Date.now||function(){return(new Date).getTime()};// List of HTML entities for escaping.
var M={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};M.unescape=k.invert(M.escape);// Regexes containing the keys and values listed immediately above.
var j={escape:new RegExp("["+k.keys(M.escape).join("")+"]","g"),unescape:new RegExp("("+k.keys(M.unescape).join("|")+")","g")};// Functions for escaping and unescaping strings to/from HTML interpolation.
k.each(["escape","unescape"],function(e){k[e]=function(t){return null==t?"":(""+t).replace(j[e],function(t){return M[e][t]})}}),// If the value of the named `property` is a function then invoke it with the
// `object` as context; otherwise, return it.
k.result=function(e,t){if(null==e)return void 0;var n=e[t];return k.isFunction(n)?n.call(e):n},// Add your own custom functions to the Underscore object.
k.mixin=function(e){S(k.functions(e),function(t){var n=k[t]=e[t];k.prototype[t]=function(){var e=[this._wrapped];return s.apply(e,arguments),H.call(this,n.apply(k,e))}})};// Generate a unique integer id (unique within the entire client session).
// Useful for temporary DOM ids.
var O=0;k.uniqueId=function(e){var t=++O+"";return e?e+t:t},// By default, Underscore uses ERB-style template delimiters, change the
// following template settings to use alternative delimiters.
k.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};// When customizing `templateSettings`, if you don't want to define an
// interpolation, evaluation or escaping regex, we need one that is
// guaranteed not to match.
var I=/(.)^/,L={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},B=/\\|'|\r|\n|\t|\u2028|\u2029/g;// JavaScript micro-templating, similar to John Resig's implementation.
// Underscore templating handles arbitrary delimiters, preserves whitespace,
// and correctly escapes quotes within interpolated code.
k.template=function(e,t,n){var r;n=k.defaults({},n,k.templateSettings);// Combine delimiters into one regular expression via alternation.
var i=new RegExp([(n.escape||I).source,(n.interpolate||I).source,(n.evaluate||I).source].join("|")+"|$","g"),o=0,s="__p+='";e.replace(i,function(t,n,r,i,a){return s+=e.slice(o,a).replace(B,function(e){return"\\"+L[e]}),n&&(s+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'"),r&&(s+="'+\n((__t=("+r+"))==null?'':__t)+\n'"),i&&(s+="';\n"+i+"\n__p+='"),o=a+t.length,t}),s+="';\n",// If a variable is not specified, place data values in local scope.
n.variable||(s="with(obj||{}){\n"+s+"}\n"),s="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+s+"return __p;\n";try{r=new Function(n.variable||"obj","_",s)}catch(a){throw a.source=s,a}if(t)return r(t,k);var u=function(e){return r.call(this,e,k)};// Provide the compiled function source as a convenience for precompilation.
return u.source="function("+(n.variable||"obj")+"){\n"+s+"}",u},// Add a "chain" function, which will delegate to the wrapper.
k.chain=function(e){return k(e).chain()};// OOP
// ---------------
// If Underscore is called as a function, it returns a wrapped object that
// can be used OO-style. This wrapper holds altered versions of all the
// underscore functions. Wrapped objects may be chained.
// Helper function to continue chaining intermediate results.
var H=function(e){return this._chain?k(e).chain():e};// Add all of the Underscore functions to the wrapper object.
k.mixin(k),// Add all mutator Array functions to the wrapper.
S(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=r[e];k.prototype[e]=function(){var n=this._wrapped;return t.apply(n,arguments),"shift"!=e&&"splice"!=e||0!==n.length||delete n[0],H.call(this,n)}}),// Add all accessor Array functions to the wrapper.
S(["concat","join","slice"],function(e){var t=r[e];k.prototype[e]=function(){return H.call(this,t.apply(this._wrapped,arguments))}}),k.extend(k.prototype,{// Start chaining a wrapped Underscore object.
chain:function(){return this._chain=!0,this},// Extracts the result from a wrapped and chained object.
value:function(){return this._wrapped}}),// AMD registration happens at the end for compatibility with AMD loaders
// that may not enforce next-turn semantics on modules. Even though general
// practice for AMD registration is to be anonymous, underscore registers
// as a named module because, like jQuery, it is a base library that is
// popular enough to be bundled in a third party lib, but not be part of
// an AMD load request. Those cases could generate an error when an
// anonymous define() is called outside of a loader request.
"function"==typeof define&&define.amd&&define("underscore",[],function(){return k})}.call(this),define("js/constant",[],function(){return{SHOW_WAITING:"waiting",SHOW_PLAYING:"playing",SHOW_SCORE:"score",SHOW_FINISHED:"finished",MAGICIAN_WAITING:"waiting",MAGICIAN_PLAYING:"playing",MAGICIAN_SCORE:"score",MAGICIAN_FINISHED:"finished",scores:{ACE:1,THREE:3,FIVE:5,SEVEN:7,NINE:9,JACK:11,KING:13},score:function(e){for(var t=Object.keys(this.scores),n=0;n<t.length;n++){var r=t[n];if(this.scores[r]===e)return r.toLowerCase()}},reverseScore:function(e){return this.scores[e.toUpperCase()]}}}),//     Backbone.js 1.1.2
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
on:function(e,t,n){if(!c(this,"on",e,[t,n])||!t)return this;this._events||(this._events={});var r=this._events[e]||(this._events[e]=[]);return r.push({callback:t,context:n,ctx:n||this}),this},// Bind an event to only be triggered a single time. After the first time
// the callback is invoked, it will be removed.
once:function(e,t,r){if(!c(this,"once",e,[t,r])||!t)return this;var i=this,o=n.once(function(){i.off(e,o),t.apply(this,arguments)});return o._callback=t,this.on(e,o,r)},// Remove one or many callbacks. If `context` is null, removes all
// callbacks with that function. If `callback` is null, removes all
// callbacks for the event. If `name` is null, removes all bound
// callbacks for all events.
off:function(e,t,r){var i,o,s,a,u,l,f,h;if(!this._events||!c(this,"off",e,[t,r]))return this;if(!e&&!t&&!r)return this._events=void 0,this;for(a=e?[e]:n.keys(this._events),u=0,l=a.length;l>u;u++)if(e=a[u],s=this._events[e]){if(this._events[e]=i=[],t||r)for(f=0,h=s.length;h>f;f++)o=s[f],(t&&t!==o.callback&&t!==o.callback._callback||r&&r!==o.context)&&i.push(o);i.length||delete this._events[e]}return this},// Trigger one or many events, firing all bound callbacks. Callbacks are
// passed the same arguments as `trigger` is, apart from the event name
// (unless you're listening on `"all"`, which will cause your callback to
// receive the true name of the event as the first argument).
trigger:function(e){if(!this._events)return this;var t=s.call(arguments,1);if(!c(this,"trigger",e,t))return this;var n=this._events[e],r=this._events.all;return n&&l(n,t),r&&l(r,arguments),this},// Tell this object to stop listening to either specific events ... or
// to every object it's currently listening to.
stopListening:function(e,t,r){var i=this._listeningTo;if(!i)return this;var o=!t&&!r;r||"object"!=typeof t||(r=this),e&&((i={})[e._listenId]=e);for(var s in i)e=i[s],e.off(t,r,this),(o||n.isEmpty(e._events))&&delete this._listeningTo[s];return this}},u=/\s+/,c=function(e,t,n,r){if(!n)return!0;// Handle event maps.
if("object"==typeof n){for(var i in n)e[t].apply(e,[i,n[i]].concat(r));return!1}// Handle space separated event names.
if(u.test(n)){for(var o=n.split(u),s=0,a=o.length;a>s;s++)e[t].apply(e,[o[s]].concat(r));return!1}return!0},l=function(e,t){var n,r=-1,i=e.length,o=t[0],s=t[1],a=t[2];switch(t.length){case 0:for(;++r<i;)(n=e[r]).callback.call(n.ctx);return;case 1:for(;++r<i;)(n=e[r]).callback.call(n.ctx,o);return;case 2:for(;++r<i;)(n=e[r]).callback.call(n.ctx,o,s);return;case 3:for(;++r<i;)(n=e[r]).callback.call(n.ctx,o,s,a);return;default:for(;++r<i;)(n=e[r]).callback.apply(n.ctx,t);return}},f={listenTo:"on",listenToOnce:"once"};// Inversion-of-control versions of `on` and `once`. Tell *this* object to
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
var h=t.Model=function(e,t){var r=e||{};t||(t={}),this.cid=n.uniqueId("c"),this.attributes={},t.collection&&(this.collection=t.collection),t.parse&&(r=this.parse(r,t)||{}),r=n.defaults({},r,n.result(this,"defaults")),this.set(r,t),this.changed={},this.initialize.apply(this,arguments)};// Attach all inheritable methods to the Model prototype.
n.extend(h.prototype,a,{// A hash of attributes whose current and previous value differ.
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
set:function(e,t,r){var i,o,s,a,u,c,l,f;if(null==e)return this;// Run validation.
if(// Handle both `"key", value` and `{key: value}` -style arguments.
"object"==typeof e?(o=e,r=t):(o={})[e]=t,r||(r={}),!this._validate(o,r))return!1;// Extract attributes and options.
s=r.unset,u=r.silent,a=[],c=this._changing,this._changing=!0,c||(this._previousAttributes=n.clone(this.attributes),this.changed={}),f=this.attributes,l=this._previousAttributes,// Check for changes of `id`.
this.idAttribute in o&&(this.id=o[this.idAttribute]);// For each `set` attribute, update or delete the current value.
for(i in o)t=o[i],n.isEqual(f[i],t)||a.push(i),n.isEqual(l[i],t)?delete this.changed[i]:this.changed[i]=t,s?delete f[i]:f[i]=t;// Trigger all relevant attribute changes.
if(!u){a.length&&(this._pending=r);for(var h=0,p=a.length;p>h;h++)this.trigger("change:"+a[h],this,f[a[h]],r)}// You might be wondering why there's a `while` loop here. Changes can
// be recursively nested within `"change"` events.
if(c)return this;if(!u)for(;this._pending;)r=this._pending,this._pending=!1,this.trigger("change",this,r);return this._pending=!1,this._changing=!1,this},// Remove an attribute from the model, firing `"change"`. `unset` is a noop
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
fetch:function(e){e=e?n.clone(e):{},void 0===e.parse&&(e.parse=!0);var t=this,r=e.success;return e.success=function(n){return t.set(t.parse(n,e),e)?(r&&r(t,n,e),void t.trigger("sync",t,n,e)):!1},B(this,e),this.sync("read",this,e)},// Set a hash of model attributes, and sync the model to the server.
// If the server returns an attributes hash that differs, the model's
// state will be `set` again.
save:function(e,t,r){var i,o,s,a=this.attributes;// If we're not waiting and attributes exist, save acts as
// `set(attr).save(null, opts)` with validation. Otherwise, check if
// the model will be valid when the attributes, if any, are set.
if(// Handle both `"key", value` and `{key: value}` -style arguments.
null==e||"object"==typeof e?(i=e,r=t):(i={})[e]=t,r=n.extend({validate:!0},r),i&&!r.wait){if(!this.set(i,r))return!1}else if(!this._validate(i,r))return!1;// Set temporary attributes if `{wait: true}`.
i&&r.wait&&(this.attributes=n.extend({},a,i)),// After a successful server-side save, the client is (optionally)
// updated with the server-side state.
void 0===r.parse&&(r.parse=!0);var u=this,c=r.success;// Restore attributes.
return r.success=function(e){// Ensure attributes are restored during synchronous saves.
u.attributes=a;var t=u.parse(e,r);return r.wait&&(t=n.extend(i||{},t)),n.isObject(t)&&!u.set(t,r)?!1:(c&&c(u,e,r),void u.trigger("sync",u,e,r))},B(this,r),o=this.isNew()?"create":r.patch?"patch":"update","patch"===o&&(r.attrs=i),s=this.sync(o,this,r),i&&r.wait&&(this.attributes=a),s},// Destroy this model on the server if it was already persisted.
// Optimistically removes the model from its collection, if it has one.
// If `wait: true` is passed, waits for the server to respond before removal.
destroy:function(e){e=e?n.clone(e):{};var t=this,r=e.success,i=function(){t.trigger("destroy",t,t.collection,e)};if(e.success=function(n){(e.wait||t.isNew())&&i(),r&&r(t,n,e),t.isNew()||t.trigger("sync",t,n,e)},this.isNew())return e.success(),!1;B(this,e);var o=this.sync("delete",this,e);return e.wait||i(),o},// Default URL for the model's representation on the server -- if you're
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
var p=["keys","values","pairs","invert","pick","omit"];// Mix in each Underscore method as a proxy to `Model#attributes`.
n.each(p,function(e){h.prototype[e]=function(){var t=s.call(arguments);return t.unshift(this.attributes),n[e].apply(n,t)}});// Backbone.Collection
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
model:h,// Initialize is an empty function by default. Override it with your own
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
set:function(e,t){t=n.defaults({},t,g),t.parse&&(e=this.parse(e,t));var r=!n.isArray(e);e=r?e?[e]:[]:n.clone(e);var i,o,s,a,u,c,l,f=t.at,p=this.model,d=this.comparator&&null==f&&t.sort!==!1,m=n.isString(this.comparator)?this.comparator:null,y=[],v=[],b={},w=t.add,x=t.merge,_=t.remove,k=!d&&w&&_?[]:!1;// Turn bare objects into model references, and prevent invalid models
// from being added.
for(i=0,o=e.length;o>i;i++){// If a duplicate is found, prevent it from being added and
// optionally merge it into the existing model.
if(u=e[i]||{},s=u instanceof h?a=u:u[p.prototype.idAttribute||"id"],c=this.get(s))_&&(b[c.cid]=!0),x&&(u=u===a?a.attributes:u,t.parse&&(u=c.parse(u,t)),c.set(u,t),d&&!l&&c.hasChanged(m)&&(l=!0)),e[i]=c;else if(w){if(a=e[i]=this._prepareModel(u,t),!a)continue;y.push(a),this._addReference(a,t)}// Do not add multiple models with the same `id`.
a=c||a,!k||!a.isNew()&&b[a.id]||k.push(a),b[a.id]=!0}// Remove nonexistent models if appropriate.
if(_){for(i=0,o=this.length;o>i;++i)b[(a=this.models[i]).cid]||v.push(a);v.length&&this.remove(v,t)}// See if sorting is needed, update `length` and splice in new models.
if(y.length||k&&k.length)if(d&&(l=!0),this.length+=y.length,null!=f)for(i=0,o=y.length;o>i;i++)this.models.splice(f+i,0,y[i]);else{k&&(this.models.length=0);var S=k||y;for(i=0,o=S.length;o>i;i++)this.models.push(S[i])}// Unless silenced, it's time to fire all appropriate add/sort events.
if(// Silently sort the collection if appropriate.
l&&this.sort({silent:!0}),!t.silent){for(i=0,o=y.length;o>i;i++)(a=y[i]).trigger("add",a,this,t);(l||k&&k.length)&&this.trigger("sort",this,t)}// Return the added (or merged) model (or models).
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
fetch:function(e){e=e?n.clone(e):{},void 0===e.parse&&(e.parse=!0);var t=e.success,r=this;return e.success=function(n){var i=e.reset?"reset":"set";r[i](n,e),t&&t(r,n,e),r.trigger("sync",r,n,e)},B(this,e),this.sync("read",this,e)},// Create a new instance of a model in this collection. Add the model to the
// collection immediately, unless `wait: true` is passed, in which case we
// wait for the server to agree.
create:function(e,t){if(t=t?n.clone(t):{},!(e=this._prepareModel(e,t)))return!1;t.wait||this.add(e,t);var r=this,i=t.success;return t.success=function(e,n){t.wait&&r.add(e,t),i&&i(e,n,t)},e.save(null,t),e},// **parse** converts a response into a list of models to be added to the
// collection. The default implementation is just to pass it through.
parse:function(e){return e},// Create a new collection with an identical list of models as this one.
clone:function(){return new this.constructor(this.models)},// Private method to reset all internal state. Called when the collection
// is first initialized or reset.
_reset:function(){this.length=0,this.models=[],this._byId={}},// Prepare a hash of attributes (or other model) to be added to this
// collection.
_prepareModel:function(e,t){if(e instanceof h)return e;t=t?n.clone(t):{},t.collection=this;var r=new this.model(e,t);return r.validationError?(this.trigger("invalid",this,r.validationError,t),!1):r},// Internal method to create a model's ties to a collection.
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
t.sync=function(e,r,i){var o=k[e];// Default options, unless specified.
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
"PATCH"===s.type&&_&&(s.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")});// Make the request, allowing the user to override any Ajax options.
var u=i.xhr=t.ajax(n.extend(s,i));return r.trigger("request",r,u,i),u};var _=!("undefined"==typeof window||!window.ActiveXObject||window.XMLHttpRequest&&(new XMLHttpRequest).dispatchEvent),k={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};// Set the default implementation of `Backbone.ajax` to proxy through to `$`.
// Override this if you'd like to use a different library.
t.ajax=function(){return t.$.ajax.apply(t.$,arguments)};// Backbone.Router
// ---------------
// Routers map faux-URLs to actions, and fire events when routes are
// matched. Creating a new one sets its `routes` hash, if not set statically.
var S=t.Router=function(e){e||(e={}),e.routes&&(this.routes=e.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},T=/\((.*?)\)/g,C=/(\(\?)?:\w+/g,A=/\*\w+/g,E=/[\-{}\[\]+?.,\\\^$|#\s]/g;// Set up all inheritable **Backbone.Router** properties and methods.
n.extend(S.prototype,a,{// Initialize is an empty function by default. Override it with your own
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
_routeToRegExp:function(e){return e=e.replace(E,"\\$&").replace(T,"(?:$1)?").replace(C,function(e,t){return t?e:"([^/?]+)"}).replace(A,"([^?]*?)"),new RegExp("^"+e+"(?:\\?([\\s\\S]*))?$")},// Given a route, and a URL fragment that it matches, return the array of
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
var N=t.History=function(){this.handlers=[],n.bindAll(this,"checkUrl"),// Ensure that `History` can be used outside of the browser.
"undefined"!=typeof window&&(this.location=window.location,this.history=window.history)},D=/^[#\/]|\s+$/g,P=/^\/+|\/+$/g,M=/msie [\w.]+/,j=/\/$/,O=/#.*$/;// Has the history handling already been started?
N.started=!1,// Set up all inheritable **Backbone.History** properties and methods.
n.extend(N.prototype,a,{// The default interval to poll for hash changes, if necessary, is
// twenty times a second.
interval:50,// Are we at the app root?
atRoot:function(){return this.location.pathname.replace(/[^\/]$/,"$&/")===this.root},// Gets the true hash value. Cannot use location.hash directly due to bug
// in Firefox where location.hash will always be decoded.
getHash:function(e){var t=(e||this).location.href.match(/#(.*)$/);return t?t[1]:""},// Get the cross-browser normalized URL fragment, either from the URL,
// the hash, or the override.
getFragment:function(e,t){if(null==e)if(this._hasPushState||!this._wantsHashChange||t){e=decodeURI(this.location.pathname+this.location.search);var n=this.root.replace(j,"");e.indexOf(n)||(e=e.slice(n.length))}else e=this.getHash();return e.replace(D,"")},// Start the hash change handling, returning `true` if the current URL matches
// an existing route, and `false` otherwise.
start:function(e){if(N.started)throw new Error("Backbone.history has already been started");N.started=!0,// Figure out the initial configuration. Do we need an iframe?
// Is pushState desired ... is it available?
this.options=n.extend({root:"/"},this.options,e),this.root=this.options.root,this._wantsHashChange=this.options.hashChange!==!1,this._wantsPushState=!!this.options.pushState,this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var r=this.getFragment(),i=document.documentMode,o=M.exec(navigator.userAgent.toLowerCase())&&(!i||7>=i);if(// Normalize root to always include a leading and trailing slash.
this.root=("/"+this.root+"/").replace(P,"/"),o&&this._wantsHashChange){var s=t.$('<iframe src="javascript:0" tabindex="-1">');this.iframe=s.hide().appendTo("body")[0].contentWindow,this.navigate(r)}// Depending on whether we're using pushState or hashes, and whether
// 'onhashchange' is supported, determine how we check the URL state.
this._hasPushState?t.$(window).on("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!o?t.$(window).on("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),// Determine if we need to change the base url, for a pushState link
// opened by a non-pushState browser.
this.fragment=r;var a=this.location;// Transition from hashChange to pushState or vice versa if both are
// requested.
if(this._wantsHashChange&&this._wantsPushState){// If we've started off with a route from a `pushState`-enabled
// browser, but we're currently in a browser that doesn't support it...
if(!this._hasPushState&&!this.atRoot())// Return immediately as browser will do redirect to new url
return this.fragment=this.getFragment(null,!0),this.location.replace(this.root+"#"+this.fragment),!0;this._hasPushState&&this.atRoot()&&a.hash&&(this.fragment=this.getHash().replace(D,""),this.history.replaceState({},document.title,this.root+this.fragment))}return this.options.silent?void 0:this.loadUrl()},// Disable Backbone.history, perhaps temporarily. Not useful in a real app,
// but possibly useful for unit testing Routers.
stop:function(){t.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl),this._checkUrlInterval&&clearInterval(this._checkUrlInterval),N.started=!1},// Add a route to be tested when the fragment changes. Routes added later
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
navigate:function(e,t){if(!N.started)return!1;t&&t!==!0||(t={trigger:!!t});var n=this.root+(e=this.getFragment(e||""));if(// Strip the hash for matching.
e=e.replace(O,""),this.fragment!==e){// If pushState is available, we use it to set the fragment as a real URL.
if(this.fragment=e,// Don't include a trailing slash on the root.
""===e&&"/"!==n&&(n=n.slice(0,-1)),this._hasPushState)this.history[t.replace?"replaceState":"pushState"]({},document.title,n);else{if(!this._wantsHashChange)return this.location.assign(n);this._updateHash(this.location,e,t.replace),this.iframe&&e!==this.getFragment(this.getHash(this.iframe))&&(// Opening and closing the iframe tricks IE7 and earlier to push a
// history entry on hash-tag change.  When replace is true, we don't
// want this.
t.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,e,t.replace))}return t.trigger?this.loadUrl(e):void 0}},// Update the hash location, either replacing the current entry, or adding
// a new one to the browser history.
_updateHash:function(e,t,n){if(n){var r=e.href.replace(/(javascript:|#).*$/,"");e.replace(r+"#"+t)}else// Some browsers require that `hash` contains a leading #.
e.hash="#"+t}}),// Create the default Backbone.history.
t.history=new N;// Helpers
// -------
// Helper function to correctly set up the prototype chain, for subclasses.
// Similar to `goog.inherits`, but uses a hash of prototype properties and
// class properties to be extended.
var I=function(e,t){var r,i=this;// The constructor function for the new subclass is either defined by you
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
h.extend=d.extend=S.extend=b.extend=N.extend=I;// Throw an error when a URL is needed, and none is supplied.
var L=function(){throw new Error('A "url" property or function must be specified')},B=function(e,t){var n=t.error;t.error=function(r){n&&n(e,r,t),e.trigger("error",e,r,t)}};return t}),define("js/timer",["require","js/constant"],function(e){function t(e){this.el=e,this.$el=$(e),this.$inner=this.$el.find(".timer-inner"),setInterval(this.ensure.bind(this),1e3)}var n=e("js/constant");return t.prototype.ensure=function(){if(!this.type)return this.$inner.empty();var e,t,n=new Date;this.time<n.getTime()?(e=0,t=0):(e=Math.floor((this.time-n.getTime())/1e3),t=Math.floor(e/60)%60,e%=60),this.$inner.html(this.pad(t)+":"+this.pad(e))},t.prototype.pad=function(e){return 10>e?"0"+e:String(e)},t.prototype.timing=function(e,t){console.log("type:",e,"time:",t),this.el.className="timer "+e,this.type=e,this.time=t},t.prototype.setShowModel=function(e){this.showModel=e,this.showModel.on("magician-switched",_.bind(function(){switch(this.magician=e.get("magician"),this.magician.get("status")){case n.MAGICIAN_WAITING:var t=this.magician.get("first");this.timing(t?"wait":"wait-magician",this.magician.get("start"));break;case n.MAGICIAN_PLAYING:case n.MAGICIAN_SCORE:this.timing("playing",this.magician.get("end"))}this.magician.once("start",_.bind(function(){var e=this.magician.get("end");console.log(new Date(e)),this.timing("playing",e)},this))},this))},t}),//     uuid.js
//
//     Copyright (c) 2010-2012 Robert Kieffer
//     MIT License - http://opensource.org/licenses/mit-license.php
function(){// **`parse()` - Parse a UUID into it's component bytes**
function e(e,t,n){var r=t&&n||0,i=0;// Zero out remaining bytes if string was short
for(t=t||[],e.toLowerCase().replace(/[0-9a-f]{2}/g,function(e){16>i&&(// Don't overflow!
t[r+i++]=h[e])});16>i;)t[r+i++]=0;return t}// **`unparse()` - Convert UUID byte array (ala parse()) into a string**
function t(e,t){var n=t||0,r=f;return r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]}// See https://github.com/broofa/node-uuid for API details
function n(e,n,r){var i=n&&r||0,o=n||[];e=e||{};var s=null!=e.clockseq?e.clockseq:m,a=null!=e.msecs?e.msecs:(new Date).getTime(),u=null!=e.nsecs?e.nsecs:v+1,c=a-y+(u-v)/1e4;// Per 4.2.1.2 Throw error if too many uuids are requested
if(// Per 4.2.1.2, Bump clockseq on clock regression
0>c&&null==e.clockseq&&(s=s+1&16383),// Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
// time interval
(0>c||a>y)&&null==e.nsecs&&(u=0),u>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");y=a,v=u,m=s,// Per 4.1.4 - Convert from unix epoch to Gregorian epoch
a+=122192928e5;// `time_low`
var l=(1e4*(268435455&a)+u)%4294967296;o[i++]=l>>>24&255,o[i++]=l>>>16&255,o[i++]=l>>>8&255,o[i++]=255&l;// `time_mid`
var f=a/4294967296*1e4&268435455;o[i++]=f>>>8&255,o[i++]=255&f,// `time_high_and_version`
o[i++]=f>>>24&15|16,// include version
o[i++]=f>>>16&255,// `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
o[i++]=s>>>8|128,// `clock_seq_low`
o[i++]=255&s;for(var h=e.node||g,p=0;6>p;p++)o[i+p]=h[p];return n?n:t(o)}// **`v4()` - Generate random UUID**
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
var u=new Uint8Array(16);i=function(){return crypto.getRandomValues(u),u}}if(!i){// Math.random()-based (RNG)
//
// If all else fails, use Math.random().  It's fast, but is of unspecified
// quality.
var c=new Array(16);i=function(){for(var e,t=0;16>t;t++)0===(3&t)&&(e=4294967296*Math.random()),c[t]=e>>>((3&t)<<3)&255;return c}}for(var l="function"==typeof Buffer?Buffer:Array,f=[],h={},p=0;256>p;p++)f[p]=(p+256).toString(16).substr(1),h[f[p]]=p;// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
// random #'s we need to init node and clockseq
var d=i(),g=[1|d[0],d[1],d[2],d[3],d[4],d[5]],m=16383&(d[6]<<8|d[7]),y=0,v=0,b=r;if(b.v1=n,b.v4=r,b.parse=e,b.unparse=t,b.BufferClass=l,"function"==typeof define&&define.amd)// Publish as AMD module
define("uuid",[],function(){return b});else if("undefined"!=typeof module&&module.exports)// Publish as node.js module
module.exports=b;else{// Publish as global (in browsers)
var w=o.uuid;// **`noConflict()` - (browser only) to reset global 'uuid' var**
b.noConflict=function(){return o.uuid=w,b},o.uuid=b}}.call(this),define("js/token",["require","uuid"],function(e){var t=e("uuid"),n=localStorage.getItem("audience-token");return n||(n=t.v4(),localStorage.setItem("audience-token",n)),n}),!function(e){"object"==typeof exports?module.exports=e():"function"==typeof define&&define.amd?define("socket-io",e):"undefined"!=typeof window?window.io=e():"undefined"!=typeof global?global.io=e():"undefined"!=typeof self&&(self.io=e())}(function(){var e;return function t(e,n,r){function i(s,a){if(!n[s]){if(!e[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(o)return o(s,!0);throw new Error("Cannot find module '"+s+"'")}var c=n[s]={exports:{}};e[s][0].call(c.exports,function(t){var n=e[s][1][t];return i(n?n:t)},c,c.exports,t,e,n,r)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(e,t){t.exports=e("./lib/")},{"./lib/":2}],2:[function(e,t,n){/**
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
function r(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var n,r=i(e),o=r.source,c=r.id;return t.forceNew||t["force new connection"]||!1===t.multiplex?(a("ignoring socket cache for %s",o),n=s(o,t)):(u[c]||(a("new io instance for %s",o),u[c]=s(o,t)),n=u[c]),n.socket(r.path)}/**
 * Module dependencies.
 */
var i=e("./url"),o=e("socket.io-parser"),s=e("./manager"),a=e("debug")("socket.io-client");/**
 * Module exports.
 */
t.exports=n=r;/**
 * Managers cache.
 */
var u=n.managers={};/**
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
var r=(e("./url"),e("engine.io-client")),i=e("./socket"),o=e("component-emitter"),s=e("socket.io-parser"),a=e("./on"),u=e("component-bind"),c=(e("object-component"),e("debug")("socket.io-client:manager"));/**
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
n.prototype.open=n.prototype.connect=function(e){if(c("readyState %s",this.readyState),~this.readyState.indexOf("open"))return this;c("opening %s",this.uri),this.engine=r(this.uri,this.opts);var t=this.engine,n=this;this.readyState="opening";// emit `open`
var i=a(t,"open",function(){n.onopen(),e&&e()}),o=a(t,"error",function(t){if(c("connect_error"),n.cleanup(),n.readyState="closed",n.emitAll("connect_error",t),e){var r=new Error("Connection error");r.data=t,e(r)}n.maybeReconnectOnOpen()});// emit `connect_timeout`
if(!1!==this._timeout){var s=this._timeout;c("connect attempt will timeout after %d",s);// set timer
var u=setTimeout(function(){c("connect attempt timed out after %d",s),i.destroy(),t.close(),t.emit("error","timeout"),n.emitAll("connect_timeout",s)},s);this.subs.push({destroy:function(){clearTimeout(u)}})}return this.subs.push(i),this.subs.push(o),this},/**
 * Called upon transport open.
 *
 * @api private
 */
n.prototype.onopen=function(){c("open"),// clear old subs
this.cleanup(),// mark as open
this.readyState="open",this.emit("open");// add new subs
var e=this.engine;this.subs.push(a(e,"data",u(this,"ondata"))),this.subs.push(a(this.decoder,"decoded",u(this,"ondecoded"))),this.subs.push(a(e,"error",u(this,"onerror"))),this.subs.push(a(e,"close",u(this,"onclose")))},/**
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
n.prototype.onerror=function(e){c("error",e),this.emitAll("error",e)},/**
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
n.prototype.packet=function(e){c("writing packet %j",e);var t=this;t.encoding?// add packet to the queue
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
n.prototype.onclose=function(e){c("close"),this.cleanup(),this.readyState="closed",this.emit("close",e),this._reconnection&&!this.skipReconnect&&this.reconnect()},/**
 * Attempt a reconnection.
 *
 * @api private
 */
n.prototype.reconnect=function(){if(this.reconnecting)return this;var e=this;if(this.attempts++,this.attempts>this._reconnectionAttempts)c("reconnect failed"),this.emitAll("reconnect_failed"),this.reconnecting=!1;else{var t=this.attempts*this.reconnectionDelay();t=Math.min(t,this.reconnectionDelayMax()),c("will wait %dms before reconnect attempt",t),this.reconnecting=!0;var n=setTimeout(function(){c("attempting reconnect"),e.emitAll("reconnect_attempt",e.attempts),e.emitAll("reconnecting",e.attempts),e.open(function(t){t?(c("reconnect attempt error"),e.reconnecting=!1,e.reconnect(),e.emitAll("reconnect_error",t.data)):(c("reconnect success"),e.onreconnect())})},t);this.subs.push({destroy:function(){clearTimeout(n)}})}},/**
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
{var i=e("socket.io-parser"),o=e("component-emitter"),s=e("to-array"),a=e("./on"),u=e("component-bind"),c=e("debug")("socket.io-client:socket"),l=e("has-binary-data");e("indexof")}/**
 * Module exports.
 */
t.exports=n=r;/**
 * Internal events (blacklisted).
 * These events can't be emitted by the user.
 *
 * @api private
 */
var f={connect:1,connect_error:1,connect_timeout:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1},h=o.prototype.emit;/**
 * Mix in `Emitter`.
 */
o(r.prototype),/**
 * Subscribe to open, close and packet events
 *
 * @api private
 */
r.prototype.subEvents=function(){var e=this.io;this.subs=[a(e,"open",u(this,"onopen")),a(e,"packet",u(this,"onpacket")),a(e,"close",u(this,"onclose"))]},/**
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
r.prototype.emit=function(e){if(f.hasOwnProperty(e))return h.apply(this,arguments),this;var t=s(arguments),n=i.EVENT;// default
l(t)&&(n=i.BINARY_EVENT);// binary
var r={type:n,data:t};// event ack callback
return"function"==typeof t[t.length-1]&&(c("emitting packet with ack id %d",this.ids),this.acks[this.ids]=t.pop(),r.id=this.ids++),this.connected?this.packet(r):this.sendBuffer.push(r),this},/**
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
r.prototype.onopen=function(){c("transport is open - connecting"),// write connect packet if necessary
"/"!=this.nsp&&this.packet({type:i.CONNECT})},/**
 * Called upon engine `close`.
 *
 * @param {String} reason
 * @api private
 */
r.prototype.onclose=function(e){c("close (%s)",e),this.connected=!1,this.disconnected=!0,this.emit("disconnect",e)},/**
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
r.prototype.onevent=function(e){var t=e.data||[];c("emitting event %j",t),null!=e.id&&(c("attaching ack callback to event"),t.push(this.ack(e.id))),this.connected?h.apply(this,t):this.receiveBuffer.push(t)},/**
 * Produces an ack callback to emit with an event.
 *
 * @api private
 */
r.prototype.ack=function(e){var t=this,n=!1;return function(){// prevent double callbacks
if(!n){n=!0;var r=s(arguments);c("sending ack %j",r);var o=l(r)?i.BINARY_ACK:i.ACK;t.packet({type:o,id:e,data:r})}}},/**
 * Called upon a server acknowlegement.
 *
 * @param {Object} packet
 * @api private
 */
r.prototype.onack=function(e){c("calling ack %s with %j",e.id,e.data);var t=this.acks[e.id];t.apply(this,e.data),delete this.acks[e.id]},/**
 * Called upon server connect.
 *
 * @api private
 */
r.prototype.onconnect=function(){this.connected=!0,this.disconnected=!1,this.emit("connect"),this.emitBuffered()},/**
 * Emit buffered events (received and emitted).
 *
 * @api private
 */
r.prototype.emitBuffered=function(){var e;for(e=0;e<this.receiveBuffer.length;e++)h.apply(this,this.receiveBuffer[e]);for(this.receiveBuffer=[],e=0;e<this.sendBuffer.length;e++)this.packet(this.sendBuffer[e]);this.sendBuffer=[]},/**
 * Called upon server disconnect.
 *
 * @api private
 */
r.prototype.ondisconnect=function(){c("server disconnect (%s)",this.nsp),this.destroy(),this.onclose("io server disconnect")},/**
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
return this.connected?(c("performing disconnect (%s)",this.nsp),this.packet({type:i.DISCONNECT}),this.destroy(),this.onclose("io client disconnect"),this):this}},{"./on":4,"component-bind":7,"component-emitter":8,debug:9,"has-binary-data":32,indexof:36,"socket.io-parser":40,"to-array":43}],6:[function(e,t){/**
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
function n(e,t){if(!(this instanceof n))return new n(e,t);if(t=t||{},e&&"object"==typeof e&&(t=e,e=null),e&&(e=l(e),t.host=e.host,t.secure="https"==e.protocol||"wss"==e.protocol,t.port=e.port,e.query&&(t.query=e.query)),this.secure=null!=t.secure?t.secure:i.location&&"https:"==location.protocol,t.host){var r=t.host.split(":");t.hostname=r.shift(),r.length&&(t.port=r.pop())}this.agent=t.agent||!1,this.hostname=t.hostname||(i.location?location.hostname:"localhost"),this.port=t.port||(i.location&&location.port?location.port:this.secure?443:80),this.query=t.query||{},"string"==typeof this.query&&(this.query=h.decode(this.query)),this.upgrade=!1!==t.upgrade,this.path=(t.path||"/engine.io").replace(/\/$/,"")+"/",this.forceJSONP=!!t.forceJSONP,this.forceBase64=!!t.forceBase64,this.timestampParam=t.timestampParam||"t",this.timestampRequests=t.timestampRequests,this.transports=t.transports||["polling","websocket"],this.readyState="",this.writeBuffer=[],this.callbackBuffer=[],this.policyPort=t.policyPort||843,this.rememberUpgrade=t.rememberUpgrade||!1,this.open(),this.binaryType=null,this.onlyBinaryUpgrades=t.onlyBinaryUpgrades}function r(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}var i="undefined"!=typeof self?self:"undefined"!=typeof window?window:{},o=e("./transports"),s=e("component-emitter"),a=e("debug")("engine.io-client:socket"),u=e("indexof"),c=e("engine.io-parser"),l=e("parseuri"),f=e("parsejson"),h=e("parseqs");/**
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
n.protocol=c.protocol,// this is an int
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
t.EIO=c.protocol,// transport name
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
n.prototype.probe=function(e){function t(){if(h.onlyBinaryUpgrades){var t=!this.supportsBinary&&h.transport.supportsBinary;f=f||t}f||(a('probe transport "%s" opened',e),l.send([{type:"ping",data:"probe"}]),l.once("packet",function(t){if(!f)if("pong"==t.type&&"probe"==t.data)a('probe transport "%s" pong',e),h.upgrading=!0,h.emit("upgrading",l),n.priorWebsocketSuccess="websocket"==l.name,a('pausing current transport "%s"',h.transport.name),h.transport.pause(function(){f||"closed"!=h.readyState&&"closing"!=h.readyState&&(a("changing transport and sending upgrade packet"),c(),h.setTransport(l),l.send([{type:"upgrade"}]),h.emit("upgrade",l),l=null,h.upgrading=!1,h.flush())});else{a('probe transport "%s" failed',e);var r=new Error("probe error");r.transport=l.name,h.emit("upgradeError",r)}}))}function r(){f||(// Any callback called by transport should be ignored since now
f=!0,c(),l.close(),l=null)}//Handle any error that happens while probing
function i(t){var n=new Error("probe error: "+t);n.transport=l.name,r(),a('probe transport "%s" failed because of error: %s',e,t),h.emit("upgradeError",n)}function o(){i("transport closed")}//When the socket is closed while we're probing
function s(){i("socket closed")}//When the socket is upgraded while we're probing
function u(e){l&&e.name!=l.name&&(a('"%s" works - aborting "%s"',e.name,l.name),r())}//Remove all listeners on the transport and on self
function c(){l.removeListener("open",t),l.removeListener("error",i),l.removeListener("close",o),h.removeListener("close",s),h.removeListener("upgrading",u)}a('probing transport "%s"',e);var l=this.createTransport(e,{probe:1}),f=!1,h=this;n.priorWebsocketSuccess=!1,l.once("open",t),l.once("error",i),l.once("close",o),this.once("close",s),this.once("upgrading",u),l.open()},/**
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
n.prototype.filterUpgrades=function(e){for(var t=[],n=0,r=e.length;r>n;n++)~u(this.transports,e[n])&&t.push(e[n]);return t}},{"./transport":14,"./transports":15,"component-emitter":8,debug:9,"engine.io-parser":22,indexof:36,parsejson:29,parseqs:30,parseuri:38}],14:[function(e,t){/**
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
function r(e){var t,n=!1;if(i.location){var r="https:"==location.protocol,u=location.port;// some user agents have empty `location.port`
u||(u=r?443:80),n=e.hostname!=location.hostname||u!=e.port}return e.xdomain=n,t=new o(e),"open"in t&&!e.forceJSONP?new s(e):new a(e)}var i="undefined"!=typeof self?self:"undefined"!=typeof window?window:{},o=e("xmlhttprequest"),s=e("./polling-xhr"),a=e("./polling-jsonp"),u=e("./websocket");/**
 * Export transports.
 */
n.polling=r,n.websocket=u},{"./polling-jsonp":16,"./polling-xhr":17,"./websocket":19,xmlhttprequest:20}],16:[function(e,t){/**
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
var a,u=/\n/g,c=/\\n/g;/**
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
e=e.replace(c,"\\\n"),this.area.value=e.replace(u,"\\n");try{this.form.submit()}catch(f){}this.iframe.attachEvent?this.iframe.onreadystatechange=function(){"complete"==i.iframe.readyState&&n()}:this.iframe.onload=n}},{"./polling":18,"component-inherit":21}],17:[function(e,t){/**
 * Empty function
 */
function n(){}/**
 * XHR Polling constructor.
 *
 * @param {Object} opts
 * @api public
 */
function r(e){if(u.call(this,e),s.location){var t="https:"==location.protocol,n=location.port;// some user agents have empty `location.port`
n||(n=t?443:80),this.xd=e.hostname!=s.location.hostname||n!=e.port}}/**
 * Request constructor
 *
 * @param {Object} options
 * @api public
 */
function i(e){this.method=e.method||"GET",this.uri=e.uri,this.xd=!!e.xd,this.async=!1!==e.async,this.data=void 0!=e.data?e.data:null,this.agent=e.agent,this.create(e.isBinary,e.supportsBinary)}function o(){for(var e in i.requests)i.requests.hasOwnProperty(e)&&i.requests[e].abort()}var s="undefined"!=typeof self?self:"undefined"!=typeof window?window:{},a=e("xmlhttprequest"),u=e("./polling"),c=e("component-emitter"),l=e("component-inherit"),f=e("debug")("engine.io-client:polling-xhr");/**
 * Module exports.
 */
t.exports=r,t.exports.Request=i,/**
 * Inherits from Polling.
 */
l(r,u),/**
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
c(i.prototype),/**
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
function n(e){var t=e&&e.forceBase64;(!u||t)&&(this.supportsBinary=!1),r.call(this,e)}/**
 * Module dependencies.
 */
var r=e("../transport"),i=e("parseqs"),o=e("engine.io-parser"),s=e("component-inherit"),a=e("debug")("engine.io-client:polling");/**
 * Module exports.
 */
t.exports=n;/**
 * Is XHR2 supported?
 */
var u=function(){var t=e("xmlhttprequest"),n=new t({agent:this.agent,xdomain:!1});return null!=n.responseType}();/**
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
var r=e("../transport"),i=e("engine.io-parser"),o=e("parseqs"),s=e("component-inherit"),a=e("debug")("engine.io-client:websocket"),u=e("ws");/**
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
n.prototype.doOpen=function(){if(this.check()){var e=this.uri(),t=void 0,n={agent:this.agent};this.ws=new u(e,t,n),void 0===this.ws.binaryType&&(this.supportsBinary=!1),this.ws.binaryType="arraybuffer",this.addEventListeners()}},/**
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
n.prototype.check=function(){return!(!u||"__initialize"in u&&this.name===n.prototype.name)}},{"../transport":14,"component-inherit":21,debug:9,"engine.io-parser":22,parseqs:30,ws:31}],20:[function(e,t){// browser shim for xmlhttprequest module
var n=e("has-cors");t.exports=function(e){var t=e.xdomain;// XMLHttpRequest can be disabled on IE
try{if("undefined"!=typeof XMLHttpRequest&&(!t||n))return new XMLHttpRequest}catch(r){}if(!t)try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(r){}}},{"has-cors":34}],21:[function(e,t){t.exports=function(e,t){var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},{}],22:[function(e,t,n){/**
 * Encode packet helpers for binary types
 */
function r(e,t,r){if(!t)return n.encodeBase64Packet(e,r);var i=e.data,o=new Uint8Array(i),s=new Uint8Array(1+i.byteLength);s[0]=d[e.type];for(var a=0;a<o.length;a++)s[a+1]=o[a];return r(s.buffer)}function i(e,t,r){if(!t)return n.encodeBase64Packet(e,r);var i=new FileReader;return i.onload=function(){e.data=i.result,n.encodePacket(e,t,r)},i.readAsArrayBuffer(e.data)}function o(e,t,r){if(!t)return n.encodeBase64Packet(e,r);if(p)return i(e,t,r);var o=new Uint8Array(1);o[0]=d[e.type];var s=new y([o.buffer,e.data]);return r(s)}/**
 * Async array map using after
 */
function s(e,t,n){for(var r=new Array(e.length),i=f(e.length,n),o=function(e,n,i){t(n,function(t,n){r[e]=n,i(t,r)})},s=0;s<e.length;s++)o(s,e[s],i)}var a="undefined"!=typeof self?self:"undefined"!=typeof window?window:{},u=e("./keys"),c=e("arraybuffer.slice"),l=e("base64-arraybuffer"),f=e("after"),h=e("utf8"),p=navigator.userAgent.match(/Android/i);/**
 * Current protocol version.
 */
n.protocol=2;/**
 * Packet types.
 */
var d=n.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6},g=u(d),m={type:"error",data:"parser error"},y=e("blob");/**
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
return void 0!==e.data&&(s+=h.encode(String(e.data))),n(""+s)},/**
 * Encodes a packet with binary data in a base64 string
 *
 * @param {Object} packet, has `type` and `data`
 * @return {String} base64 encoded message
 */
n.encodeBase64Packet=function(e,t){var r="b"+n.packets[e.type];if(y&&e.data instanceof y){var i=new FileReader;return i.onload=function(){var e=i.result.split(",")[1];t(r+e)},i.readAsDataURL(e.data)}var o;try{o=String.fromCharCode.apply(null,new Uint8Array(e.data))}catch(s){for(var u=new Uint8Array(e.data),c=new Array(u.length),l=0;l<u.length;l++)c[l]=u[l];o=String.fromCharCode.apply(null,c)}return r+=a.btoa(o),t(r)},/**
 * Decodes a packet. Changes format to Blob if requested.
 *
 * @return {Object} with `type` and `data` (if any)
 * @api private
 */
n.decodePacket=function(e,t){// String data
if("string"==typeof e||void 0===e){if("b"==e.charAt(0))return n.decodeBase64Packet(e.substr(1),t);e=h.decode(e);var r=e.charAt(0);return Number(r)==r&&g[r]?e.length>1?{type:g[r],data:e.substring(1)}:{type:g[r]}:m}var i=new Uint8Array(e),r=i[0],o=c(e,1);return y&&"blob"===t&&(o=new y([o])),{type:g[r],data:o}},/**
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
n.encodePayload=function(e,t,r){function i(e){return e.length+":"+e}function o(e,r){n.encodePacket(e,t,function(e){r(null,i(e))})}return"function"==typeof t&&(r=t,t=null),t?y&&!p?n.encodePayloadAsBlob(e,r):n.encodePayloadAsArrayBuffer(e,r):e.length?void s(e,o,function(e,t){return r(t.join(""))}):r("0:")},/*
 * Decodes data when a payload is maybe expected. Possible binary contents are
 * decoded from their base64 representation
 *
 * @param {String} data, callback method
 * @api public
 */
n.decodePayload=function(e,t,r){if("string"!=typeof e)return n.decodePayloadAsBinary(e,t,r);"function"==typeof t&&(r=t,t=null);var i;if(""==e)// parser error - ignoring payload
return r(m,0,1);for(var o,s,a="",u=0,c=e.length;c>u;u++){var l=e.charAt(u);if(":"!=l)a+=l;else{if(""==a||a!=(o=Number(a)))// parser error - ignoring payload
return r(m,0,1);if(s=e.substr(u+1,o),a!=s.length)// parser error - ignoring payload
return r(m,0,1);if(s.length){if(i=n.decodePacket(s,t),m.type==i.type&&m.data==i.data)// parser error in individual packet - ignoring payload
return r(m,0,1);var f=r(i,u+o,c);if(!1===f)return}// advance cursor
u+=o,a=""}}return""!=a?r(m,0,1):void 0},/**
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
n.encodePayloadAsBlob=function(e,t){function r(e,t){n.encodePacket(e,!0,function(e){var n=new Uint8Array(1);if(n[0]=1,"string"==typeof e){for(var r=new Uint8Array(e.length),i=0;i<e.length;i++)r[i]=e.charCodeAt(i);e=r.buffer,n[0]=0}for(var o=e instanceof ArrayBuffer?e.byteLength:e.size,s=o.toString(),a=new Uint8Array(s.length+1),i=0;i<s.length;i++)a[i]=parseInt(s[i]);if(a[s.length]=255,y){var u=new y([n.buffer,a.buffer,e]);t(null,u)}})}s(e,r,function(e,n){return t(new y(n))})},/*
 * Decodes data when a payload is maybe expected. Strings are decoded by
 * interpreting each byte as a key code for entries marked to start with 0. See
 * description of encodePayloadAsBinary
 *
 * @param {ArrayBuffer} data, callback method
 * @api public
 */
n.decodePayloadAsBinary=function(e,t,r){"function"==typeof t&&(r=t,t=null);for(var i=e,o=[];i.byteLength>0;){for(var s=new Uint8Array(i),a=0===s[0],u="",l=1;255!=s[l];l++)u+=s[l];i=c(i,2+u.length),u=parseInt(u);var f=c(i,0,u);if(a)try{f=String.fromCharCode.apply(null,new Uint8Array(f))}catch(h){// iPhone Safari doesn't let you apply to typed arrays
var p=new Uint8Array(f);f="";for(var l=0;l<p.length;l++)f+=String.fromCharCode(p[l])}o.push(f),i=c(i,u)}var d=o.length;o.forEach(function(e,i){r(n.decodePacket(e,t),i,d)})}},{"./keys":23,after:24,"arraybuffer.slice":25,"base64-arraybuffer":26,blob:27,utf8:28}],23:[function(e,t){/**
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
!function(e){n.encode=function(t){var n,r=new Uint8Array(t),i=r.length,o="";for(n=0;i>n;n+=3)o+=e[r[n]>>2],o+=e[(3&r[n])<<4|r[n+1]>>4],o+=e[(15&r[n+1])<<2|r[n+2]>>6],o+=e[63&r[n+2]];return i%3===2?o=o.substring(0,o.length-1)+"=":i%3===1&&(o=o.substring(0,o.length-2)+"=="),o},n.decode=function(t){var n,r,i,o,s,a=.75*t.length,u=t.length,c=0;"="===t[t.length-1]&&(a--,"="===t[t.length-2]&&a--);var l=new ArrayBuffer(a),f=new Uint8Array(l);for(n=0;u>n;n+=4)r=e.indexOf(t[n]),i=e.indexOf(t[n+1]),o=e.indexOf(t[n+2]),s=e.indexOf(t[n+3]),f[c++]=r<<2|i>>4,f[c++]=(15&i)<<4|o>>2,f[c++]=(3&o)<<6|63&s;return l}}("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")},{}],27:[function(e,t){function n(e,t){t=t||{};for(var n=new i,r=0;r<e.length;r++)n.append(e[r]);return t.type?n.getBlob(t.type):n.getBlob()}var r="undefined"!=typeof self?self:"undefined"!=typeof window?window:{},i=r.BlobBuilder||r.WebKitBlobBuilder||r.MSBlobBuilder||r.MozBlobBuilder,o=function(){try{var e=new Blob(["hi"]);return 2==e.size}catch(t){return!1}}(),s=i&&i.prototype.append&&i.prototype.getBlob;t.exports=function(){return o?r.Blob:s?n:void 0}()},{}],28:[function(t,n,r){var i="undefined"!=typeof self?self:"undefined"!=typeof window?window:{};!function(t){// Taken from http://mths.be/punycode
function o(e){for(var t,n,r=[],i=0,o=e.length;o>i;)t=e.charCodeAt(i++),t>=55296&&56319>=t&&o>i?(// high surrogate, and there is a next character
n=e.charCodeAt(i++),56320==(64512&n)?// low surrogate
r.push(((1023&t)<<10)+(1023&n)+65536):(// unmatched surrogate; only append this code unit, in case the next
// code unit is the high surrogate of a surrogate pair
r.push(t),i--)):r.push(t);return r}// Taken from http://mths.be/punycode
function s(e){for(var t,n=e.length,r=-1,i="";++r<n;)t=e[r],t>65535&&(t-=65536,i+=b(t>>>10&1023|55296),t=56320|1023&t),i+=b(t);return i}/*--------------------------------------------------------------------------*/
function a(e,t){return b(e>>t&63|128)}function u(e){if(0==(4294967168&e))// 1-byte sequence
return b(e);var t="";// 2-byte sequence
// 3-byte sequence
// 4-byte sequence
return 0==(4294965248&e)?t=b(e>>6&31|192):0==(4294901760&e)?(t=b(e>>12&15|224),t+=a(e,6)):0==(4292870144&e)&&(t=b(e>>18&7|240),t+=a(e,12),t+=a(e,6)),t+=b(63&e|128)}function c(e){for(var t,n=o(e),r=n.length,i=-1,s="";++i<r;)t=n[i],s+=u(t);return s}/*--------------------------------------------------------------------------*/
function l(){if(v>=y)throw Error("Invalid byte index");var e=255&m[v];if(v++,128==(192&e))return 63&e;// If we end up here, it’s not a continuation byte
throw Error("Invalid continuation byte")}function f(){var e,t,n,r,i;if(v>y)throw Error("Invalid byte index");if(v==y)return!1;// 1-byte sequence (no continuation bytes)
if(// Read first byte
e=255&m[v],v++,0==(128&e))return e;// 2-byte sequence
if(192==(224&e)){var t=l();if(i=(31&e)<<6|t,i>=128)return i;throw Error("Invalid continuation byte")}// 3-byte sequence (may include unpaired surrogates)
if(224==(240&e)){if(t=l(),n=l(),i=(15&e)<<12|t<<6|n,i>=2048)return i;throw Error("Invalid continuation byte")}// 4-byte sequence
if(240==(248&e)&&(t=l(),n=l(),r=l(),i=(15&e)<<18|t<<12|n<<6|r,i>=65536&&1114111>=i))return i;throw Error("Invalid UTF-8 detected")}function h(e){m=o(e),y=m.length,v=0;for(var t,n=[];(t=f())!==!1;)n.push(t);return s(n)}// Detect free variables `exports`
var p="object"==typeof r&&r,d="object"==typeof n&&n&&n.exports==p&&n,g="object"==typeof i&&i;(g.global===g||g.window===g)&&(t=g);/*--------------------------------------------------------------------------*/
var m,y,v,b=String.fromCharCode,w={version:"2.0.0",encode:c,decode:h};// Some AMD build optimizers, like r.js, check for specific condition patterns
// like the following:
if("function"==typeof e&&"object"==typeof e.amd&&e.amd)e(function(){return w});else if(p&&!p.nodeType)if(d)// in Node.js or RingoJS v0.8.0+
d.exports=w;else{// in Narwhal or RingoJS v0.7.0-
var x={},_=x.hasOwnProperty;for(var k in w)_.call(w,k)&&(p[k]=w[k])}else// in Rhino or a web browser
t.utf8=w}(this)},{}],29:[function(e,t){var n="undefined"!=typeof self?self:"undefined"!=typeof window?window:{},r=/^[\],:{}\s]*$/,i=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,o=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,s=/(?:^|:|,)(?:\s*\[)+/g,a=/^\s+/,u=/\s+$/;t.exports=function(e){// Attempt to parse using the native JSON parser first
return"string"==typeof e&&e?(e=e.replace(a,"").replace(u,""),n.JSON&&JSON.parse?JSON.parse(e):r.test(e.replace(i,"@").replace(o,"]").replace(s,""))?new Function("return "+e)():void 0):null}},{}],30:[function(e,t,n){/**
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
var r={_placeholder:!0,num:n.length};return n.push(e),r}if(o(e)){for(var s=new Array(e.length),a=0;a<e.length;a++)s[a]=t(e[a]);return s}if("object"==typeof e&&!(e instanceof Date)){var s={};for(var u in e)s[u]=t(e[u]);return s}return e}var n=[],r=e.data,s=e;// number of binary 'attachments'
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
n.removeBlobs=function(e,t){function n(e,u,c){if(!e)return e;// convert any blob
if(i.Blob&&e instanceof Blob||i.File&&e instanceof File){s++;// async filereader
var l=new FileReader;l.onload=function(){// this.result == arraybuffer
c?c[u]=this.result:a=this.result,// if nothing pending its callback time
--s||t(a)},l.readAsArrayBuffer(e)}if(o(e))// handle array
for(var f=0;f<e.length;f++)n(e[f],f,e);else if(e&&"object"==typeof e&&!r(e))// and object
for(var h in e)n(e[h],h,e)}var s=0,a=e;n(a),s||t(a)}},{isarray:41}],40:[function(e,t,n){/**
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
return t+=e.type,(n.BINARY_EVENT==e.type||n.BINARY_ACK==e.type)&&(t+=e.attachments,t+="-"),e.nsp&&"/"!=e.nsp&&(r=!0,t+=e.nsp),null!=e.id&&(r&&(t+=",",r=!1),t+=e.id),null!=e.data&&(r&&(t+=","),t+=h.stringify(e.data)),f("encoded %j as %s",e,t),t}/**
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
t.type=Number(e.charAt(0)),null==n.types[t.type])return c();// look up attachments if type binary
if(n.BINARY_EVENT==t.type||n.BINARY_ACK==t.type){for(t.attachments="";"-"!=e.charAt(++r);)t.attachments+=e.charAt(r);t.attachments=Number(t.attachments)}// look up namespace (if any)
if("/"==e.charAt(r+1))for(t.nsp="";++r;){var i=e.charAt(r);if(","==i)break;if(t.nsp+=i,r+1==e.length)break}else t.nsp="/";// look up id
var o=e.charAt(r+1);if(""!=o&&Number(o)==o){for(t.id="";++r;){var i=e.charAt(r);if(null==i||Number(i)!=i){--r;break}if(t.id+=e.charAt(r),r+1==e.length)break}t.id=Number(t.id)}// look up json data
if(e.charAt(++r))try{t.data=h.parse(e.substr(r))}catch(s){return c()}return f("decoded %s as %j",e,t),t}/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 * @api private
 */
function u(e){this.reconPack=e,this.buffers=[]}function c(){return{type:n.ERROR,data:"parser error"}}var l="undefined"!=typeof self?self:"undefined"!=typeof window?window:{},f=e("debug")("socket.io-parser"),h=e("json3"),p=(e("isarray"),e("emitter")),d=e("./binary");/**
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
p(s.prototype),/**
 * Decodes an ecoded packet string into packet JSON.
 *
 * @param {String} obj - encoded packet
 * @return {Object} packet
 * @api public
 */
s.prototype.add=function(e){var t;if("string"==typeof e)t=a(e),n.BINARY_EVENT==t.type||n.BINARY_ACK==t.type?(// binary packet's json
this.reconstructor=new u(t),// no attachments, labeled binary but no binary data to follow
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
u.prototype.takeBinaryData=function(e){if(this.buffers.push(e),this.buffers.length==this.reconPack.attachments){// done with buffer list
var t=d.reconstructPacket(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null},/**
 * Cleans up binary packet reconstruction variables.
 *
 * @api private
 */
u.prototype.finishedReconstruction=function(){this.reconPack=null,this.buffers=[]}},{"./binary":39,debug:9,emitter:10,isarray:41,json3:42}],41:[function(e,t){t.exports=e(33)},{}],42:[function(t,n,r){!function(t){// Internal: Determines whether the native `JSON.stringify` and `parse`
// implementations are spec-compliant. Based on work by Ken Snyder.
function n(e){if(n[e]!==s)// Return cached feature test result.
return n[e];var t;if("bug-string-char-index"==e)// IE <= 7 doesn't support accessing string characters using square
// bracket notation. IE 8 only supports this for primitives.
t="a"!="a"[0];else if("json"==e)// Indicates whether both `JSON.stringify` and `JSON.parse` are
// supported.
t=n("json-stringify")&&n("json-parse");else{var r,i='{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';// Test `JSON.stringify`.
if("json-stringify"==e){var o=l.stringify,u="function"==typeof o&&f;if(u){// A test function object with a custom `toJSON` method.
(r=function(){return 1}).toJSON=r;try{u=// Firefox 3.1b1 and b2 serialize string, number, and boolean
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
'"1969-12-31T23:59:59.999Z"'==o(new Date(-1))}catch(c){u=!1}}t=u}// Test `JSON.parse`.
if("json-parse"==e){var h=l.parse;if("function"==typeof h)try{// FF 3.1b1, b2 will throw an exception if a bare literal is provided.
// Conforming implementations should also coerce the initial argument to
// a string prior to parsing.
if(0===h("0")&&!h(!1)){// Simple parsing test.
r=h(i);var p=5==r.a.length&&1===r.a[0];if(p){try{// Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
p=!h('"	"')}catch(c){}if(p)try{// FF 4.0 and 4.0.1 allow leading `+` signs and leading
// decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
// certain octal literals.
p=1!==h("01")}catch(c){}if(p)try{// FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
// points. These environments, along with FF 3.1b1 and 2,
// also allow trailing commas in JSON objects and arrays.
p=1!==h("1.")}catch(c){}}}}catch(c){p=!1}t=p}}return n[e]=!!t}// Convenience aliases.
var i,o,s,a={}.toString,u="function"==typeof e&&e.amd,c="object"==typeof JSON&&JSON,l="object"==typeof r&&r&&!r.nodeType&&r;l&&c?(// Explicitly delegate to the native `stringify` and `parse`
// implementations in CommonJS environments.
l.stringify=c.stringify,l.parse=c.parse):// Export for web browsers, JavaScript engines, and asynchronous module
// loaders, using the global `JSON` object if available.
l=t.JSON=c||{};// Test the `Date#getUTC*` methods. Based on work by @Yaffle.
var f=new Date(-0xc782b5b800cec);try{// The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
// results for certain dates in Opera >= 10.53.
f=-109252==f.getUTCFullYear()&&0===f.getUTCMonth()&&1===f.getUTCDate()&&// Safari < 2.0.2 stores the internal millisecond time value correctly,
// but clips the values returned by the date methods to the range of
// signed 32-bit integers ([-2 ** 31, 2 ** 31 - 1]).
10==f.getUTCHours()&&37==f.getUTCMinutes()&&6==f.getUTCSeconds()&&708==f.getUTCMilliseconds()}catch(h){}if(!n("json")){// Common `[[Class]]` name aliases.
var p="[object Function]",d="[object Date]",g="[object Number]",m="[object String]",y="[object Array]",v="[object Boolean]",b=n("bug-string-char-index");// Define additional utility methods if the `Date` methods are buggy.
if(!f)var w=Math.floor,x=[0,31,59,90,120,151,181,212,243,273,304,334],_=function(e,t){return x[t]+365*(e-1970)+w((e-1969+(t=+(t>1)))/4)-w((e-1901+t)/100)+w((e-1601+t)/400)};// Internal: Determines if a property is a direct property of the given
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
var k={"boolean":1,number:1,string:1,undefined:1},S=function(e,t){var n=typeof e[t];return"object"==n?!!e[t]:!k[n]};// Public: Serializes a JavaScript `value` as a JSON string. The optional
// `filter` argument may specify either a function that alters how object and
// array members are serialized, or an array of strings and numbers that
// indicates which properties should be serialized. The optional `width`
// argument may be either a string or number that specifies the indentation
// level of the output.
if(// Internal: Normalizes the `for...in` iteration algorithm across
// environments. Each enumerated key is yielded to a `callback` function.
o=function(e,t){var n,r,s,u=0;// Tests for bugs in the current environment's `for...in` algorithm. The
// `valueOf` property inherits the non-enumerable flag from
// `Object.prototype` in older versions of IE, Netscape, and Mozilla.
(n=function(){this.valueOf=0}).prototype.valueOf=0,// Iterate over a new instance of the `Properties` class.
r=new n;for(s in r)// Ignore all properties inherited from `Object.prototype`.
i.call(r,s)&&u++;// Normalize the iteration algorithm.
// Safari <= 2.0.4 enumerates shadowed properties twice.
// A list of non-enumerable properties inherited from `Object.prototype`.
// IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
// properties.
return n=r=null,u?o=2==u?function(e,t){// Create a set of iterated properties.
var n,r={},o=a.call(e)==p;for(n in e)// Store each property name to prevent double enumeration. The
// `prototype` property of functions is not enumerated due to cross-
// environment inconsistencies.
o&&"prototype"==n||i.call(r,n)||!(r[n]=1)||!i.call(e,n)||t(n)}:function(e,t){var n,r,o=a.call(e)==p;for(n in e)o&&"prototype"==n||!i.call(e,n)||(r="constructor"===n)||t(n);// Manually invoke the callback for the `constructor` property due to
// cross-environment inconsistencies.
(r||i.call(e,n="constructor"))&&t(n)}:(r=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"],o=function(e,t){var n,o,s=a.call(e)==p,u=!s&&"function"!=typeof e.constructor&&S(e,"hasOwnProperty")?e.hasOwnProperty:i;for(n in e)// Gecko <= 1.0 enumerates the `prototype` property of functions under
// certain conditions; IE does not.
s&&"prototype"==n||!u.call(e,n)||t(n);// Manually invoke the callback for each non-enumerable property.
for(o=r.length;n=r[--o];u.call(e,n)&&t(n));}),o(e,t)},!n("json-stringify")){// Internal: A map of control characters and their escaped equivalents.
var T={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},C="000000",A=function(e,t){// The `|| 0` expression is necessary to work around a bug in
// Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
return(C+(t||0)).slice(-e)},E="\\u00",N=function(e){var t,n='"',r=0,i=e.length,o=i>10&&b;for(o&&(t=e.split(""));i>r;r++){var s=e.charCodeAt(r);// If the character is a control character, append its Unicode or
// shorthand escape sequence; otherwise, append the character as-is.
switch(s){case 8:case 9:case 10:case 12:case 13:case 34:case 92:n+=T[s];break;default:if(32>s){n+=E+A(2,s.toString(16));break}n+=o?t[r]:b?e.charAt(r):e[r]}}return n+'"'},D=function(e,t,n,r,u,c,l){var f,h,p,b,x,k,S,T,C,E,P,M,j,O,I,L;try{// Necessary for host object support.
f=t[e]}catch(B){}if("object"==typeof f&&f)if(h=a.call(f),h!=d||i.call(f,"toJSON"))"function"==typeof f.toJSON&&(h!=g&&h!=m&&h!=y||i.call(f,"toJSON"))&&(// Prototype <= 1.6.1 adds non-standard `toJSON` methods to the
// `Number`, `String`, `Date`, and `Array` prototypes. JSON 3
// ignores all `toJSON` methods on these objects unless they are
// defined directly on an instance.
f=f.toJSON(e));else if(f>-1/0&&1/0>f){// Dates are serialized according to the `Date#toJSON` method
// specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
// for the ISO 8601 date time string format.
if(_){for(// Manually compute the year, month, date, hours, minutes,
// seconds, and milliseconds if the `getUTC*` methods are
// buggy. Adapted from @Yaffle's `date-shim` project.
x=w(f/864e5),p=w(x/365.2425)+1970-1;_(p+1,0)<=x;p++);for(b=w((x-_(p,0))/30.42);_(p,b+1)<=x;b++);x=1+x-_(p,b),// The `time` value specifies the time within the day (see ES
// 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
// to compute `A modulo B`, as the `%` operator does not
// correspond to the `modulo` operation for negative numbers.
k=(f%864e5+864e5)%864e5,// The hours, minutes, seconds, and milliseconds are obtained by
// decomposing the time within the day. See section 15.9.1.10.
S=w(k/36e5)%24,T=w(k/6e4)%60,C=w(k/1e3)%60,E=k%1e3}else p=f.getUTCFullYear(),b=f.getUTCMonth(),x=f.getUTCDate(),S=f.getUTCHours(),T=f.getUTCMinutes(),C=f.getUTCSeconds(),E=f.getUTCMilliseconds();// Serialize extended years correctly.
f=(0>=p||p>=1e4?(0>p?"-":"+")+A(6,0>p?-p:p):A(4,p))+"-"+A(2,b+1)+"-"+A(2,x)+// Months, dates, hours, minutes, and seconds should have two
// digits; milliseconds should have three.
"T"+A(2,S)+":"+A(2,T)+":"+A(2,C)+// Milliseconds are optional in ES 5.0, but required in 5.1.
"."+A(3,E)+"Z"}else f=null;if(n&&(// If a replacement function was provided, call it to obtain the value
// for serialization.
f=n.call(t,e,f)),null===f)return"null";if(h=a.call(f),h==v)// Booleans are represented literally.
return""+f;if(h==g)// JSON numbers must be finite. `Infinity` and `NaN` are serialized as
// `"null"`.
return f>-1/0&&1/0>f?""+f:"null";if(h==m)// Strings are double-quoted and escaped.
return N(""+f);// Recursively serialize objects and arrays.
if("object"==typeof f){// Check for cyclic structures. This is a linear search; performance
// is inversely proportional to the number of unique nested objects.
for(O=l.length;O--;)if(l[O]===f)// Cyclic structures cannot be serialized by `JSON.stringify`.
throw TypeError();if(// Add the object to the stack of traversed objects.
l.push(f),P=[],// Save the current indentation level and indent one additional level.
I=c,c+=u,h==y){// Recursively serialize array elements.
for(j=0,O=f.length;O>j;j++)M=D(j,f,n,r,u,c,l),P.push(M===s?"null":M);L=P.length?u?"[\n"+c+P.join(",\n"+c)+"\n"+I+"]":"["+P.join(",")+"]":"[]"}else// Recursively serialize object members. Members are selected from
// either a user-specified list of property names, or the object
// itself.
o(r||f,function(e){var t=D(e,f,n,r,u,c,l);t!==s&&// According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
// is not the empty string, let `member` {quote(property) + ":"}
// be the concatenation of `member` and the `space` character."
// The "`space` character" refers to the literal space
// character, not the `space` {width} argument provided to
// `JSON.stringify`.
P.push(N(e)+":"+(u?" ":"")+t)}),L=P.length?u?"{\n"+c+P.join(",\n"+c)+"\n"+I+"}":"{"+P.join(",")+"}":"{}";// Remove the object from the traversed object stack.
return l.pop(),L}};// Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
l.stringify=function(e,t,n){var r,i,o,s;if("function"==typeof t||"object"==typeof t&&t)if((s=a.call(t))==p)i=t;else if(s==y){// Convert the property names array into a makeshift set.
o={};for(var u,c=0,l=t.length;l>c;u=t[c++],s=a.call(u),(s==m||s==g)&&(o[u]=1));}if(n)if((s=a.call(n))==g){// Convert the `width` to an integer and create a string containing
// `width` number of space characters.
if((n-=n%1)>0)for(r="",n>10&&(n=10);r.length<n;r+=" ");}else s==m&&(r=n.length<=10?n:n.slice(0,10));// Opera <= 7.54u2 discards the values associated with empty string keys
// (`""`) only if they are used directly within an object member list
// (e.g., `!("" in { "": 1})`).
return D("",(u={},u[""]=e,u),i,o,r,"",[])}}// Public: Parses a JSON source string.
if(!n("json-parse")){var P,M,j=String.fromCharCode,O={92:"\\",34:'"',47:"/",98:"\b",116:"	",110:"\n",102:"\f",114:"\r"},I=function(){throw P=M=null,SyntaxError()},L=function(){for(var e,t,n,r,i,o=M,s=o.length;s>P;)switch(i=o.charCodeAt(P)){case 9:case 10:case 13:case 32:// Skip whitespace tokens, including tabs, carriage returns, line
// feeds, and space characters.
P++;break;case 123:case 125:case 91:case 93:case 58:case 44:// Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
// the current position.
return e=b?o.charAt(P):o[P],P++,e;case 34:// `"` delimits a JSON string; advance to the next character and
// begin parsing the string. String tokens are prefixed with the
// sentinel `@` character to distinguish them from punctuators and
// end-of-string tokens.
for(e="@",P++;s>P;)if(i=o.charCodeAt(P),32>i)// Unescaped ASCII control characters (those with a code unit
// less than the space character) are not permitted.
I();else if(92==i)switch(// A reverse solidus (`\`) marks the beginning of an escaped
// control character (including `"`, `\`, and `/`) or Unicode
// escape sequence.
i=o.charCodeAt(++P)){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:// Revive escaped control characters.
e+=O[i],P++;break;case 117:for(// `\u` marks the beginning of a Unicode escape sequence.
// Advance to the first character and validate the
// four-digit code point.
t=++P,n=P+4;n>P;P++)i=o.charCodeAt(P),// A valid sequence comprises four hexdigits (case-
// insensitive) that form a single hexadecimal value.
i>=48&&57>=i||i>=97&&102>=i||i>=65&&70>=i||// Invalid Unicode escape sequence.
I();// Revive the escaped character.
e+=j("0x"+o.slice(t,P));break;default:// Invalid escape sequence.
I()}else{if(34==i)// An unescaped double-quote character marks the end of the
// string.
break;// Optimize for the common case where a string is valid.
for(i=o.charCodeAt(P),t=P;i>=32&&92!=i&&34!=i;)i=o.charCodeAt(++P);// Append the string as-is.
e+=o.slice(t,P)}if(34==o.charCodeAt(P))// Advance to the next character and return the revived string.
return P++,e;// Unterminated string.
I();default:// Parse an integer or floating-point value.
if(// Parse numbers and literals.
t=P,// Advance past the negative sign, if one is specified.
45==i&&(r=!0,i=o.charCodeAt(++P)),i>=48&&57>=i){// Parse the integer component.
for(// Leading zeroes are interpreted as octal literals.
48==i&&(i=o.charCodeAt(P+1),i>=48&&57>=i)&&// Illegal octal literal.
I(),r=!1;s>P&&(i=o.charCodeAt(P),i>=48&&57>=i);P++);// Floats cannot contain a leading decimal point; however, this
// case is already accounted for by the parser.
if(46==o.charCodeAt(P)){// Parse the decimal component.
for(n=++P;s>n&&(i=o.charCodeAt(n),i>=48&&57>=i);n++);n==P&&// Illegal trailing decimal.
I(),P=n}if(// Parse exponents. The `e` denoting the exponent is
// case-insensitive.
i=o.charCodeAt(P),101==i||69==i){// Parse the exponential component.
for(i=o.charCodeAt(++P),// Skip past the sign following the exponent, if one is
// specified.
(43==i||45==i)&&P++,n=P;s>n&&(i=o.charCodeAt(n),i>=48&&57>=i);n++);n==P&&// Illegal empty exponent.
I(),P=n}// Coerce the parsed value to a JavaScript number.
return+o.slice(t,P)}// `true`, `false`, and `null` literals.
if(// A negative sign may only precede numbers.
r&&I(),"true"==o.slice(P,P+4))return P+=4,!0;if("false"==o.slice(P,P+5))return P+=5,!1;if("null"==o.slice(P,P+4))return P+=4,null;// Unrecognized token.
I()}// Return the sentinel `$` character if the parser has reached the end
// of the source string.
return"$"},B=function(e){var t,n;if("$"==e&&// Unexpected end of input.
I(),"string"==typeof e){if("@"==(b?e.charAt(0):e[0]))// Remove the sentinel `@` character.
return e.slice(1);// Parse object and array literals.
if("["==e){for(// Parses a JSON array, returning a new JavaScript array.
t=[];e=L(),"]"!=e;n||(n=!0))// If the array literal contains elements, the current token
// should be a comma separating the previous element from the
// next.
n&&(","==e?(e=L(),"]"==e&&// Unexpected trailing `,` in array literal.
I()):// A `,` must separate each array element.
I()),// Elisions and leading commas are not permitted.
","==e&&I(),t.push(B(e));return t}if("{"==e){for(// Parses a JSON object, returning a new JavaScript object.
t={};e=L(),"}"!=e;n||(n=!0))// If the object literal contains members, the current token
// should be a comma separator.
n&&(","==e?(e=L(),"}"==e&&// Unexpected trailing `,` in object literal.
I()):// A `,` must separate each object member.
I()),// Leading commas are not permitted, object property names must be
// double-quoted strings, and a `:` must separate each property
// name and value.
(","==e||"string"!=typeof e||"@"!=(b?e.charAt(0):e[0])||":"!=L())&&I(),t[e.slice(1)]=B(L());return t}// Unexpected token encountered.
I()}return e},H=function(e,t,n){var r=F(e,t,n);r===s?delete e[t]:e[t]=r},F=function(e,t,n){var r,i=e[t];if("object"==typeof i&&i)// `forEach` can't be used to traverse an array in Opera <= 8.54
// because its `Object#hasOwnProperty` implementation returns `false`
// for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
if(a.call(i)==y)for(r=i.length;r--;)H(i,r,n);else o(i,function(e){H(i,e,n)});return n.call(e,t,i)};// Public: `JSON.parse`. See ES 5.1 section 15.12.2.
l.parse=function(e,t){var n,r;// If a JSON string contains multiple tokens, it is invalid.
// Reset the parser state.
return P=0,M=""+e,n=B(L()),"$"!=L()&&I(),P=M=null,t&&a.call(t)==p?F((r={},r[""]=n,r),"",t):n}}}// Export for asynchronous module loaders.
u&&e(function(){return l})}(this)},{}],43:[function(e,t){function n(e,t){var n=[];t=t||0;for(var r=t||0;r<e.length;r++)n[r-t]=e[r];return n}t.exports=n},{}]},{},[1])(1)}),define("js/magician",["require","jquery","velocity","moment","underscore","js/constant","backbone","js/timer","js/token","socket-io"],function(e){function t(e){return function(){try{e.apply(this,arguments)}catch(t){throw console.error(t),t}}}function n(e,t){this.selection=t,this.el=e,this.$el=$(e),this.$avatar=this.$el.find(".magician-avatar"),this.$name=this.$el.find(".magician-name"),this.$accuracy=this.$el.find(".accuracy-percent"),this.ensureAccuracy(),this.selection.on("change:accuracy",l.bind(function(){console.log("accuracy changed:",this.selection.get("accuracy")),this.ensureAccuracy()},this)),N.on("magician-switched",l.bind(function(){console.log("MagicianView: magician changed"),this.magician=N.get("magician"),this.magician.on("start",l.bind(function(){this.showMagician()},this)),this.magician.on("score",l.bind(function(){"none"===this.$avatar.css("display")&&this.showMagician()},this)),this.magician.on("scored",l.bind(function(){"none"===this.$avatar.css("display")&&this.showMagician();var e=this.selection.get("accuracy")||0,t=this.selection.get(String(this.magician.get("id")));l.each(this.magician.get("scores"),function(n){t===f.score(n)&&e++}),this.selection.set("accuracy",e)},this))},this))}function r(){var e="scores-"+c().format("YYYY-MM-DD")+d;localStorage.setItem(e,JSON.stringify(D.toJSON())),v.emit("score",{token:d,score:D.toJSON()})}function i(){var e="scores-"+c().format("YYYY-MM-DD")+d,t=localStorage.getItem(e);return t?JSON.parse(t):{}}function o(e,t){function n(){var e=$(this);if(!e.hasClass("close")){var t=r.magician&&(r.magician.isPlaying()||r.magician.isScoring())&&!r.cardSelection.has(String(r.magician.get("id")));if(t){var n=e.data("score");e.hasClass("highlighted")?r.cardSelection.score(r.magician.id,n):(r.$el.find(".highlighted").removeClass("highlighted"),e.addClass("highlighted"))}}}this.cardSelection=t,this.el=e,this.$el=$(e),this.$cards=this.$el.find(".card");var r=this;this.ensureCards(),N.on("magician-switched",l.bind(function(){this.magician;this.magician=N.get("magician"),this.magician.once("start",l.bind(function(){this.ensureCards()},this)),this.magician.once("scored",l.bind(function(){this.ensureCards()},this))},this)),this.$cards.tap?this.$cards.tap(n):this.$cards.click(n),this.cardSelection.on("change",l.bind(function(){this.magician&&this.ensureCards()},this)),l.extend(this,h.Events)}function s(e){N.set("status",e.status),e.magician&&N.setMagician(new S(e.magician));var t=N.get("magician");if(t)switch(t.get("status")){case f.MAGICIAN_PLAYING:t.start();break;case f.MAGICIAN_SCORE:t.score();break;case f.MAGICIAN_FINISHED:t.finish()}_.show()}function a(e){x.timing("final",e.end)}function u(){window.location="/score"}e("jquery"),e("velocity");var c=e("moment"),l=e("underscore"),f=e("js/constant"),h=e("backbone"),p=e("js/timer"),d=e("js/token"),g=e("socket-io"),m=[],y=window.location.hostname,v=g.connect("http://"+y+"/show");n.prototype.ensureAccuracy=function(){var e=this.selection.get("accuracy")||0,t=40+e/18*60+"%";this.$el.find(".frontend").hide().css("height",t).show(),this.$accuracy.html((e/18*100).toFixed(1)+"%")},n.prototype.showMagician=function(){this.$avatar.hide().attr("src",this.magician.get("avatar")).velocity("fadeIn"),this.$name.html(this.magician.get("name"))};var b=function(e,t){this.selection=t,this.el=e,this.$el=$(e),this.$cards=this.$el.find(".card"),N.on("magician-switched",l.bind(function(){var e=this.magician;this.magician=N.get("magician"),this.magician.once("start",l.bind(function(){e&&this.$cards.attr("class","card close")},this)),this.magician.once("scored",l.bind(function(){var e=this.magician.get("scores");l.each(e,l.bind(function(e,t){var n=this.$el.find(".judge:eq("+t+")");e=f.score(e);var r="card "+e,i=this.selection.get(String(this.magician.id));i===e&&(r+=" bingo highlighted"),console.log("showScore, className:",r),n.find(".card")[0].className=r},this))},this))},this))},w=h.Model.extend({score:function(e,t){this.set(String(e),t)},findScore:function(e){return l.find(this.keys(),l.bind(function(t){return"accuracy"!==t&&this.get(t)===e},this))}});o.prototype.ensureCards=function(){this.$cards.removeClass("highlighted").removeClass("selected"),[f.scores.ACE,f.scores.THREE,f.scores.FIVE,f.scores.SEVEN,f.scores.NINE,f.scores.JACK,f.scores.KING].forEach(l.bind(function(e){e=f.score(e);var t=this.cardSelection.findScore(e);t&&(this.magician&&this.magician.get("id")==t&&this.magician.get("status")!==f.MAGICIAN_WAITING?this.$el.find("."+e).removeClass("close").addClass("highlighted").addClass("selected"):this.$el.find("."+e).removeClass("highlighted").removeClass("selected").addClass("close"))},this))},o.prototype.clearHighlight=function(){this.$cards.removeClass("highlighted")};var x,_,k=h.Model.extend({setMagician:function(e){this.set("magician",e),this.trigger("magician-switched")}}),S=h.Model.extend({initialize:function(e){this.set(e)},isPlaying:function(){return this.get("status")===f.MAGICIAN_PLAYING},isScoring:function(){return this.get("status")===f.MAGICIAN_SCORE},start:function(){this.set("status",f.MAGICIAN_PLAYING),this.trigger("start")},score:function(){this.set("status",f.MAGICIAN_SCORE),this.trigger("score")},finish:function(){this.set("status",f.MAGICIAN_FINISHED),this.trigger("scored")}}),T="waiting",C="playing",A="score",E="finished",N=new k,D=new w;D.set(i()),D.on("change",function(){r()});var P,M,j;$(function(){_=$("#show"),x=new p($(".timer")[0]),x.setShowModel(N),P=new o($(".cards-wrapper")[0],D),M=new b($(".judge-list")[0],D),j=new n($(".magician")[0],D);var e=!1;v.on("connect",function(){function n(e){var t=(new Date).getTime();v.emit("query",{data:"status",id:t}),r[String(t)]=e}if(e)return void console.error("Connect event is duplicated!");e=!0,console.log("socket connected");var r={};v.on("query",function(e){var t=r[String(e.id)];console.log("query callback",e.id,t),t&&(delete r[String(e.id)],t.call(null,e.result))}),n(function(e){switch(e.status){case T:window.location="/wait";break;case C:s(e);break;case A:a(e);break;case E:default:u()}}),v.on("score",t(function(e){console.log("score"),a(e)})),v.on("magician-changed",t(function(e){console.log("magician changed---------------");var t=N.get("magician");t&&m.push(t),console.log(e),N.setMagician(new S(e)),console.log("---------------magician changed")})),v.on("magician-start",t(function(e){console.log("magician start---------------"),console.log(e),N.get("magician").set(e),N.get("magician").start(),console.log("---------------magician start")})),v.on("magician-score",t(function(e){console.log(e),console.log("magician score---------------");try{console.log(N);var t=N.get("magician");t&&(t.set(e),t.score())}catch(n){console.error(n)}console.log("---------------magician score")})),v.on("magician-finish",t(function(e){console.log("magician finish-------------"),console.log(e),N.get("magician").set(e),N.get("magician").finish(),console.log("-------------magician finish")})),v.on("finish",t(function(){console.log("The show is finished"),u()}))}),v.on("connect_error",function(e){console.error(e)}),v.on("connect_timeout",function(){console.error("connect timeout!")})})});