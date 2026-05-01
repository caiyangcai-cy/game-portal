(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();var Gl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},bo={},kl;function Ph(){return kl||(kl=1,(function(){var i;function t(o){var u=0;return function(){return u<o.length?{done:!1,value:o[u++]}:{done:!0}}}var e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,m){return o==Array.prototype||o==Object.prototype||(o[u]=m.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gl=="object"&&Gl];for(var u=0;u<o.length;++u){var m=o[u];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)t:{var m=r;o=o.split(".");for(var x=0;x<o.length-1;x++){var C=o[x];if(!(C in m))break t;m=m[C]}o=o[o.length-1],x=m[o],u=u(x),u!=x&&u!=null&&e(m,o,{configurable:!0,writable:!0,value:u})}}s("Symbol",function(o){function u(U){if(this instanceof u)throw new TypeError("Symbol is not a constructor");return new m(x+(U||"")+"_"+C++,U)}function m(U,D){this.h=U,e(this,"description",{configurable:!0,writable:!0,value:D})}if(o)return o;m.prototype.toString=function(){return this.h};var x="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",C=0;return u}),s("Symbol.iterator",function(o){if(o)return o;o=Symbol("Symbol.iterator");for(var u="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),m=0;m<u.length;m++){var x=r[u[m]];typeof x=="function"&&typeof x.prototype[o]!="function"&&e(x.prototype,o,{configurable:!0,writable:!0,value:function(){return a(t(this))}})}return o});function a(o){return o={next:o},o[Symbol.iterator]=function(){return this},o}function l(o){var u=typeof Symbol<"u"&&Symbol.iterator&&o[Symbol.iterator];return u?u.call(o):{next:t(o)}}function h(o){if(!(o instanceof Array)){o=l(o);for(var u,m=[];!(u=o.next()).done;)m.push(u.value);o=m}return o}var c=typeof Object.assign=="function"?Object.assign:function(o,u){for(var m=1;m<arguments.length;m++){var x=arguments[m];if(x)for(var C in x)Object.prototype.hasOwnProperty.call(x,C)&&(o[C]=x[C])}return o};s("Object.assign",function(o){return o||c});var f=typeof Object.create=="function"?Object.create:function(o){function u(){}return u.prototype=o,new u},p;if(typeof Object.setPrototypeOf=="function")p=Object.setPrototypeOf;else{var g;t:{var v={a:!0},M={};try{M.__proto__=v,g=M.a;break t}catch{}g=!1}p=g?function(o,u){if(o.__proto__=u,o.__proto__!==u)throw new TypeError(o+" is not extensible");return o}:null}var E=p;function _(o,u){if(o.prototype=f(u.prototype),o.prototype.constructor=o,E)E(o,u);else for(var m in u)if(m!="prototype")if(Object.defineProperties){var x=Object.getOwnPropertyDescriptor(u,m);x&&Object.defineProperty(o,m,x)}else o[m]=u[m];o.ya=u.prototype}function d(){this.m=!1,this.j=null,this.i=void 0,this.h=1,this.v=this.s=0,this.l=null}function P(o){if(o.m)throw new TypeError("Generator is already running");o.m=!0}d.prototype.u=function(o){this.i=o};function w(o,u){o.l={ma:u,na:!0},o.h=o.s||o.v}d.prototype.return=function(o){this.l={return:o},this.h=this.v};function A(o,u,m){return o.h=m,{value:u}}function N(o){this.h=new d,this.i=o}function R(o,u){P(o.h);var m=o.h.j;return m?O(o,"return"in m?m.return:function(x){return{value:x,done:!0}},u,o.h.return):(o.h.return(u),B(o))}function O(o,u,m,x){try{var C=u.call(o.h.j,m);if(!(C instanceof Object))throw new TypeError("Iterator result "+C+" is not an object");if(!C.done)return o.h.m=!1,C;var U=C.value}catch(D){return o.h.j=null,w(o.h,D),B(o)}return o.h.j=null,x.call(o.h,U),B(o)}function B(o){for(;o.h.h;)try{var u=o.i(o.h);if(u)return o.h.m=!1,{value:u.value,done:!1}}catch(m){o.h.i=void 0,w(o.h,m)}if(o.h.m=!1,o.h.l){if(u=o.h.l,o.h.l=null,u.na)throw u.ma;return{value:u.return,done:!0}}return{value:void 0,done:!0}}function y(o){this.next=function(u){return P(o.h),o.h.j?u=O(o,o.h.j.next,u,o.h.u):(o.h.u(u),u=B(o)),u},this.throw=function(u){return P(o.h),o.h.j?u=O(o,o.h.j.throw,u,o.h.u):(w(o.h,u),u=B(o)),u},this.return=function(u){return R(o,u)},this[Symbol.iterator]=function(){return this}}function T(o){function u(x){return o.next(x)}function m(x){return o.throw(x)}return new Promise(function(x,C){function U(D){D.done?x(D.value):Promise.resolve(D.value).then(u,m).then(U,C)}U(o.next())})}function F(o){return T(new y(new N(o)))}s("Promise",function(o){function u(D){this.i=0,this.j=void 0,this.h=[],this.u=!1;var H=this.l();try{D(H.resolve,H.reject)}catch(Z){H.reject(Z)}}function m(){this.h=null}function x(D){return D instanceof u?D:new u(function(H){H(D)})}if(o)return o;m.prototype.i=function(D){if(this.h==null){this.h=[];var H=this;this.j(function(){H.m()})}this.h.push(D)};var C=r.setTimeout;m.prototype.j=function(D){C(D,0)},m.prototype.m=function(){for(;this.h&&this.h.length;){var D=this.h;this.h=[];for(var H=0;H<D.length;++H){var Z=D[H];D[H]=null;try{Z()}catch(at){this.l(at)}}}this.h=null},m.prototype.l=function(D){this.j(function(){throw D})},u.prototype.l=function(){function D(at){return function(mt){Z||(Z=!0,at.call(H,mt))}}var H=this,Z=!1;return{resolve:D(this.I),reject:D(this.m)}},u.prototype.I=function(D){if(D===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(D instanceof u)this.L(D);else{t:switch(typeof D){case"object":var H=D!=null;break t;case"function":H=!0;break t;default:H=!1}H?this.F(D):this.s(D)}},u.prototype.F=function(D){var H=void 0;try{H=D.then}catch(Z){this.m(Z);return}typeof H=="function"?this.M(H,D):this.s(D)},u.prototype.m=function(D){this.v(2,D)},u.prototype.s=function(D){this.v(1,D)},u.prototype.v=function(D,H){if(this.i!=0)throw Error("Cannot settle("+D+", "+H+"): Promise already settled in state"+this.i);this.i=D,this.j=H,this.i===2&&this.K(),this.H()},u.prototype.K=function(){var D=this;C(function(){if(D.D()){var H=r.console;typeof H<"u"&&H.error(D.j)}},1)},u.prototype.D=function(){if(this.u)return!1;var D=r.CustomEvent,H=r.Event,Z=r.dispatchEvent;return typeof Z>"u"?!0:(typeof D=="function"?D=new D("unhandledrejection",{cancelable:!0}):typeof H=="function"?D=new H("unhandledrejection",{cancelable:!0}):(D=r.document.createEvent("CustomEvent"),D.initCustomEvent("unhandledrejection",!1,!0,D)),D.promise=this,D.reason=this.j,Z(D))},u.prototype.H=function(){if(this.h!=null){for(var D=0;D<this.h.length;++D)U.i(this.h[D]);this.h=null}};var U=new m;return u.prototype.L=function(D){var H=this.l();D.T(H.resolve,H.reject)},u.prototype.M=function(D,H){var Z=this.l();try{D.call(H,Z.resolve,Z.reject)}catch(at){Z.reject(at)}},u.prototype.then=function(D,H){function Z(Ft,St){return typeof Ft=="function"?function(Wt){try{at(Ft(Wt))}catch(ne){mt(ne)}}:St}var at,mt,kt=new u(function(Ft,St){at=Ft,mt=St});return this.T(Z(D,at),Z(H,mt)),kt},u.prototype.catch=function(D){return this.then(void 0,D)},u.prototype.T=function(D,H){function Z(){switch(at.i){case 1:D(at.j);break;case 2:H(at.j);break;default:throw Error("Unexpected state: "+at.i)}}var at=this;this.h==null?U.i(Z):this.h.push(Z),this.u=!0},u.resolve=x,u.reject=function(D){return new u(function(H,Z){Z(D)})},u.race=function(D){return new u(function(H,Z){for(var at=l(D),mt=at.next();!mt.done;mt=at.next())x(mt.value).T(H,Z)})},u.all=function(D){var H=l(D),Z=H.next();return Z.done?x([]):new u(function(at,mt){function kt(Wt){return function(ne){Ft[Wt]=ne,St--,St==0&&at(Ft)}}var Ft=[],St=0;do Ft.push(void 0),St++,x(Z.value).T(kt(Ft.length-1),mt),Z=H.next();while(!Z.done)})},u});function k(o,u){o instanceof String&&(o+="");var m=0,x=!1,C={next:function(){if(!x&&m<o.length){var U=m++;return{value:u(U,o[U]),done:!1}}return x=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.keys",function(o){return o||function(){return k(this,function(u){return u})}}),s("Array.prototype.fill",function(o){return o||function(u,m,x){var C=this.length||0;for(0>m&&(m=Math.max(0,C+m)),(x==null||x>C)&&(x=C),x=Number(x),0>x&&(x=Math.max(0,C+x)),m=Number(m||0);m<x;m++)this[m]=u;return this}});function X(o){return o||Array.prototype.fill}s("Int8Array.prototype.fill",X),s("Uint8Array.prototype.fill",X),s("Uint8ClampedArray.prototype.fill",X),s("Int16Array.prototype.fill",X),s("Uint16Array.prototype.fill",X),s("Int32Array.prototype.fill",X),s("Uint32Array.prototype.fill",X),s("Float32Array.prototype.fill",X),s("Float64Array.prototype.fill",X),s("Object.is",function(o){return o||function(u,m){return u===m?u!==0||1/u===1/m:u!==u&&m!==m}}),s("Array.prototype.includes",function(o){return o||function(u,m){var x=this;x instanceof String&&(x=String(x));var C=x.length;for(m=m||0,0>m&&(m=Math.max(m+C,0));m<C;m++){var U=x[m];if(U===u||Object.is(U,u))return!0}return!1}}),s("String.prototype.includes",function(o){return o||function(u,m){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(u instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(u,m||0)!==-1}});var Y=this||self;function Q(o,u){o=o.split(".");var m=Y;o[0]in m||typeof m.execScript>"u"||m.execScript("var "+o[0]);for(var x;o.length&&(x=o.shift());)o.length||u===void 0?m[x]&&m[x]!==Object.prototype[x]?m=m[x]:m=m[x]={}:m[x]=u}function $(o){var u;t:{if((u=Y.navigator)&&(u=u.userAgent))break t;u=""}return u.indexOf(o)!=-1}var st=Array.prototype.map?function(o,u){return Array.prototype.map.call(o,u,void 0)}:function(o,u){for(var m=o.length,x=Array(m),C=typeof o=="string"?o.split(""):o,U=0;U<m;U++)U in C&&(x[U]=u.call(void 0,C[U],U,o));return x},K={},ft=null;function yt(o){var u=o.length,m=3*u/4;m%3?m=Math.floor(m):"=.".indexOf(o[u-1])!=-1&&(m="=.".indexOf(o[u-2])!=-1?m-2:m-1);var x=new Uint8Array(m),C=0;return Lt(o,function(U){x[C++]=U}),C!==m?x.subarray(0,C):x}function Lt(o,u){function m(Z){for(;x<o.length;){var at=o.charAt(x++),mt=ft[at];if(mt!=null)return mt;if(!/^[\s\xa0]*$/.test(at))throw Error("Unknown base64 encoding at char: "+at)}return Z}jt();for(var x=0;;){var C=m(-1),U=m(0),D=m(64),H=m(64);if(H===64&&C===-1)break;u(C<<2|U>>4),D!=64&&(u(U<<4&240|D>>2),H!=64&&u(D<<6&192|H))}}function jt(){if(!ft){ft={};for(var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),u=["+/=","+/","-_=","-_.","-_"],m=0;5>m;m++){var x=o.concat(u[m].split(""));K[m]=x;for(var C=0;C<x.length;C++){var U=x[C];ft[U]===void 0&&(ft[U]=C)}}}}var le=typeof Uint8Array<"u",Me=!($("Trident")||$("MSIE"))&&typeof Y.btoa=="function";function ce(o){if(!Me){var u;u===void 0&&(u=0),jt(),u=K[u];for(var m=Array(Math.floor(o.length/3)),x=u[64]||"",C=0,U=0;C<o.length-2;C+=3){var D=o[C],H=o[C+1],Z=o[C+2],at=u[D>>2];D=u[(D&3)<<4|H>>4],H=u[(H&15)<<2|Z>>6],Z=u[Z&63],m[U++]=at+D+H+Z}switch(at=0,Z=x,o.length-C){case 2:at=o[C+1],Z=u[(at&15)<<2]||x;case 1:o=o[C],m[U]=u[o>>2]+u[(o&3)<<4|at>>4]+Z+x}return m.join("")}for(u="";10240<o.length;)u+=String.fromCharCode.apply(null,o.subarray(0,10240)),o=o.subarray(10240);return u+=String.fromCharCode.apply(null,o),btoa(u)}var nt=RegExp("[-_.]","g");function ot(o){switch(o){case"-":return"+";case"_":return"/";case".":return"=";default:return""}}function At(o){if(!Me)return yt(o);nt.test(o)&&(o=o.replace(nt,ot)),o=atob(o);for(var u=new Uint8Array(o.length),m=0;m<o.length;m++)u[m]=o.charCodeAt(m);return u}var Gt;function Ut(){return Gt||(Gt=new Uint8Array(0))}var Qt={},Be=typeof Uint8Array.prototype.slice=="function",I=0,$t=0;function Yt(o){var u=0>o;o=Math.abs(o);var m=o>>>0;o=Math.floor((o-m)/4294967296),u&&(m=l(Rt(m,o)),u=m.next().value,o=m.next().value,m=u),I=m>>>0,$t=o>>>0}var Vt=typeof BigInt=="function";function Rt(o,u){return u=~u,o?o=~o+1:u+=1,[o,u]}function Se(o,u){this.i=o>>>0,this.h=u>>>0}function Ct(o){if(!o)return Kt||(Kt=new Se(0,0));if(!/^-?\d+$/.test(o))return null;if(16>o.length)Yt(Number(o));else if(Vt)o=BigInt(o),I=Number(o&BigInt(4294967295))>>>0,$t=Number(o>>BigInt(32)&BigInt(4294967295));else{var u=+(o[0]==="-");$t=I=0;for(var m=o.length,x=u,C=(m-u)%6+u;C<=m;x=C,C+=6)x=Number(o.slice(x,C)),$t*=1e6,I=1e6*I+x,4294967296<=I&&($t+=I/4294967296|0,I%=4294967296);u&&(u=l(Rt(I,$t)),o=u.next().value,u=u.next().value,I=o,$t=u)}return new Se(I,$t)}var Kt;function De(o,u){return Error("Invalid wire type: "+o+" (at position "+u+")")}function we(){return Error("Failed to read varint, encoding is invalid.")}function L(o,u){return Error("Tried to read past the end of the data "+u+" > "+o)}function S(){throw Error("Invalid UTF8")}function q(o,u){return u=String.fromCharCode.apply(null,u),o==null?u:o+u}var et=void 0,rt,tt=typeof TextDecoder<"u",It,dt=typeof TextEncoder<"u",Pt;function Dt(o){if(o!==Qt)throw Error("illegal external caller")}function ct(o,u){if(Dt(u),this.V=o,o!=null&&o.length===0)throw Error("ByteString should be constructed with non-empty values")}function vt(){return Pt||(Pt=new ct(null,Qt))}function Ht(o){Dt(Qt);var u=o.V;return u=u==null||le&&u!=null&&u instanceof Uint8Array?u:typeof u=="string"?At(u):null,u==null?u:o.V=u}function Nt(o){if(typeof o=="string")return{buffer:At(o),C:!1};if(Array.isArray(o))return{buffer:new Uint8Array(o),C:!1};if(o.constructor===Uint8Array)return{buffer:o,C:!1};if(o.constructor===ArrayBuffer)return{buffer:new Uint8Array(o),C:!1};if(o.constructor===ct)return{buffer:Ht(o)||Ut(),C:!0};if(o instanceof Uint8Array)return{buffer:new Uint8Array(o.buffer,o.byteOffset,o.byteLength),C:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function gt(o,u){this.i=null,this.m=!1,this.h=this.j=this.l=0,qt(this,o,u)}function qt(o,u,m){m=m===void 0?{}:m,o.S=m.S===void 0?!1:m.S,u&&(u=Nt(u),o.i=u.buffer,o.m=u.C,o.l=0,o.j=o.i.length,o.h=o.l)}gt.prototype.reset=function(){this.h=this.l};function z(o,u){if(o.h=u,u>o.j)throw L(o.j,u)}function ut(o){var u=o.i,m=o.h,x=u[m++],C=x&127;if(x&128&&(x=u[m++],C|=(x&127)<<7,x&128&&(x=u[m++],C|=(x&127)<<14,x&128&&(x=u[m++],C|=(x&127)<<21,x&128&&(x=u[m++],C|=x<<28,x&128&&u[m++]&128&&u[m++]&128&&u[m++]&128&&u[m++]&128&&u[m++]&128)))))throw we();return z(o,m),C}function pt(o,u){if(0>u)throw Error("Tried to read a negative byte length: "+u);var m=o.h,x=m+u;if(x>o.j)throw L(u,o.j-m);return o.h=x,m}var Tt=[];function lt(){this.h=[]}lt.prototype.length=function(){return this.h.length},lt.prototype.end=function(){var o=this.h;return this.h=[],o};function it(o,u,m){for(;0<m||127<u;)o.h.push(u&127|128),u=(u>>>7|m<<25)>>>0,m>>>=7;o.h.push(u)}function Et(o,u){for(;127<u;)o.h.push(u&127|128),u>>>=7;o.h.push(u)}function Xt(o,u){if(Tt.length){var m=Tt.pop();qt(m,o,u),o=m}else o=new gt(o,u);this.h=o,this.j=this.h.h,this.i=this.l=-1,this.setOptions(u)}Xt.prototype.setOptions=function(o){o=o===void 0?{}:o,this.ca=o.ca===void 0?!1:o.ca},Xt.prototype.reset=function(){this.h.reset(),this.j=this.h.h,this.i=this.l=-1};function de(o){var u=o.h;if(u.h==u.j)return!1;o.j=o.h.h;var m=ut(o.h)>>>0;if(u=m>>>3,m&=7,!(0<=m&&5>=m))throw De(m,o.j);if(1>u)throw Error("Invalid field number: "+u+" (at position "+o.j+")");return o.l=u,o.i=m,!0}function re(o){switch(o.i){case 0:if(o.i!=0)re(o);else t:{o=o.h;for(var u=o.h,m=u+10,x=o.i;u<m;)if((x[u++]&128)===0){z(o,u);break t}throw we()}break;case 1:o=o.h,z(o,o.h+8);break;case 2:o.i!=2?re(o):(u=ut(o.h)>>>0,o=o.h,z(o,o.h+u));break;case 5:o=o.h,z(o,o.h+4);break;case 3:u=o.l;do{if(!de(o))throw Error("Unmatched start-group tag: stream EOF");if(o.i==4){if(o.l!=u)throw Error("Unmatched end-group tag");break}re(o)}while(!0);break;default:throw De(o.i,o.j)}}var sn=[];function En(){this.j=[],this.i=0,this.h=new lt}function jn(o,u){u.length!==0&&(o.j.push(u),o.i+=u.length)}function Kn(o,u){if(u=u.R){jn(o,o.h.end());for(var m=0;m<u.length;m++)jn(o,Ht(u[m])||Ut())}}var un=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():void 0;function Vn(o,u){return un?o[un]|=u:o.A!==void 0?o.A|=u:(Object.defineProperties(o,{A:{value:u,configurable:!0,writable:!0,enumerable:!1}}),u)}function Or(o,u){un?o[un]&&(o[un]&=~u):o.A!==void 0&&(o.A&=~u)}function ye(o){var u;return un?u=o[un]:u=o.A,u??0}function hn(o,u){un?o[un]=u:o.A!==void 0?o.A=u:Object.defineProperties(o,{A:{value:u,configurable:!0,writable:!0,enumerable:!1}})}function ui(o){return Vn(o,1),o}function ps(o,u){hn(u,(o|0)&-51)}function Ri(o,u){hn(u,(o|18)&-41)}var Br={};function ji(o){return o!==null&&typeof o=="object"&&!Array.isArray(o)&&o.constructor===Object}var Ci,ms=[];hn(ms,23),Ci=Object.freeze(ms);function zr(o){if(ye(o.o)&2)throw Error("Cannot mutate an immutable Message")}function Hr(o){var u=o.length;(u=u?o[u-1]:void 0)&&ji(u)?u.g=1:(u={},o.push((u.g=1,u)))}function b(o){var u=o.i+o.G;return o.B||(o.B=o.o[u]={})}function V(o,u){return u===-1?null:u>=o.i?o.B?o.B[u]:void 0:o.o[u+o.G]}function j(o,u,m,x){zr(o),J(o,u,m,x)}function J(o,u,m,x){o.j&&(o.j=void 0),u>=o.i||x?b(o)[u]=m:(o.o[u+o.G]=m,(o=o.B)&&u in o&&delete o[u])}function W(o,u,m,x){var C=V(o,u);Array.isArray(C)||(C=Ci);var U=ye(C);if(U&1||ui(C),x)U&2||Vn(C,2),m&1||Object.freeze(C);else{x=!(m&2);var D=U&2;m&1||!D?x&&U&16&&!D&&Or(C,16):(C=ui(Array.prototype.slice.call(C)),J(o,u,C))}return C}function ht(o,u){var m=V(o,u),x=m==null?m:typeof m=="number"||m==="NaN"||m==="Infinity"||m==="-Infinity"?Number(m):void 0;return x!=null&&x!==m&&J(o,u,x),x}function xt(o,u,m,x,C){o.h||(o.h={});var U=o.h[m],D=W(o,m,3,C);if(!U){var H=D;U=[];var Z=!!(ye(o.o)&16);D=!!(ye(H)&2);var at=H;!C&&D&&(H=Array.prototype.slice.call(H));for(var mt=D,kt=0;kt<H.length;kt++){var Ft=H[kt],St=u,Wt=!1;if(Wt=Wt===void 0?!1:Wt,Ft=Array.isArray(Ft)?new St(Ft):Wt?new St:void 0,Ft!==void 0){St=Ft.o;var ne=Wt=ye(St);D&&(ne|=2),Z&&(ne|=16),ne!=Wt&&hn(St,ne),St=ne,mt=mt||!!(2&St),U.push(Ft)}}return o.h[m]=U,Z=ye(H),u=Z|33,u=mt?u&-9:u|8,Z!=u&&(mt=H,Object.isFrozen(mt)&&(mt=Array.prototype.slice.call(mt)),hn(mt,u),H=mt),at!==H&&J(o,m,H),(C||x&&D)&&Vn(U,2),x&&Object.freeze(U),U}return C||(C=Object.isFrozen(U),x&&!C?Object.freeze(U):!x&&C&&(U=Array.prototype.slice.call(U),o.h[m]=U)),U}function bt(o,u,m){var x=!!(ye(o.o)&2);if(u=xt(o,u,m,x,x),o=W(o,m,3,x),!(x||ye(o)&8)){for(x=0;x<u.length;x++){if(m=u[x],ye(m.o)&2){var C=Zn(m,!1);C.j=m}else C=m;m!==C&&(u[x]=C,o[x]=C.o)}Vn(o,8)}return u}function _t(o,u,m){if(m!=null&&typeof m!="number")throw Error("Value of float/double field must be a number|null|undefined, found "+typeof m+": "+m);j(o,u,m)}function Bt(o,u,m,x,C){zr(o);var U=xt(o,m,u,!1,!1);return m=x??new m,o=W(o,u,2,!1),C!=null?(U.splice(C,0,m),o.splice(C,0,m.o)):(U.push(m),o.push(m.o)),m.C()&&Or(o,8),m}function zt(o,u){return o??u}function wt(o,u,m){return m=m===void 0?0:m,zt(ht(o,u),m)}var Zt;function fe(o){switch(typeof o){case"number":return isFinite(o)?o:String(o);case"object":if(o)if(Array.isArray(o)){if((ye(o)&128)!==0)return o=Array.prototype.slice.call(o),Hr(o),o}else{if(le&&o!=null&&o instanceof Uint8Array)return ce(o);if(o instanceof ct){var u=o.V;return u==null?"":typeof u=="string"?u:o.V=ce(u)}}}return o}function Re(o,u,m,x){if(o!=null){if(Array.isArray(o))o=pe(o,u,m,x!==void 0);else if(ji(o)){var C={},U;for(U in o)C[U]=Re(o[U],u,m,x);o=C}else o=u(o,x);return o}}function pe(o,u,m,x){var C=ye(o);x=x?!!(C&16):void 0,o=Array.prototype.slice.call(o);for(var U=0;U<o.length;U++)o[U]=Re(o[U],u,m,x);return m(C,o),o}function me(o){return o.ja===Br?o.toJSON():fe(o)}function Ot(o,u){o&128&&Hr(u)}function Ee(o,u,m){if(m=m===void 0?Ri:m,o!=null){if(le&&o instanceof Uint8Array)return o.length?new ct(new Uint8Array(o),Qt):vt();if(Array.isArray(o)){var x=ye(o);return x&2?o:u&&!(x&32)&&(x&16||x===0)?(hn(o,x|2),o):(o=pe(o,Ee,x&4?Ri:m,!0),u=ye(o),u&4&&u&2&&Object.freeze(o),o)}return o.ja===Br?qe(o):o}}function se(o,u,m,x,C,U,D){if(o=o.h&&o.h[m]){if(x=ye(o),x&2?x=o:(U=st(o,qe),Ri(x,U),Object.freeze(U),x=U),zr(u),D=x==null?Ci:ui([]),x!=null){for(U=!!x.length,o=0;o<x.length;o++){var H=x[o];U=U&&!(ye(H.o)&2),D[o]=H.o}U=(U?8:0)|1,o=ye(D),(o&U)!==U&&(Object.isFrozen(D)&&(D=Array.prototype.slice.call(D)),hn(D,o|U)),u.h||(u.h={}),u.h[m]=x}else u.h&&(u.h[m]=void 0);J(u,m,D,C)}else j(u,m,Ee(x,U,D),C)}function qe(o){return ye(o.o)&2||(o=Zn(o,!0),Vn(o.o,2)),o}function Zn(o,u){var m=o.o,x=[];Vn(x,16);var C=o.constructor.h;if(C&&x.push(C),C=o.B,C){x.length=m.length,x.fill(void 0,x.length,m.length);var U={};x[x.length-1]=U}(ye(m)&128)!==0&&Hr(x),u=u||o.C()?Ri:ps,U=o.constructor,Zt=x,x=new U(x),Zt=void 0,o.R&&(x.R=o.R.slice()),U=!!(ye(m)&16);for(var D=C?m.length-1:m.length,H=0;H<D;H++)se(o,x,H-o.G,m[H],!1,U,u);if(C)for(var Z in C)se(o,x,+Z,C[Z],!0,U,u);return x}function ge(o,u,m){o==null&&(o=Zt),Zt=void 0;var x=this.constructor.i||0,C=0<x,U=this.constructor.h,D=!1;if(o==null){o=U?[U]:[];var H=48,Z=!0;C&&(x=0,H|=128),hn(o,H)}else{if(!Array.isArray(o)||U&&U!==o[0])throw Error();var at=H=Vn(o,0);if((Z=(16&at)!==0)&&((D=(32&at)!==0)||(at|=32)),C){if(128&at)x=0;else if(0<o.length){var mt=o[o.length-1];if(ji(mt)&&"g"in mt){x=0,at|=128,delete mt.g;var kt=!0,Ft;for(Ft in mt){kt=!1;break}kt&&o.pop()}}}else if(128&at)throw Error();H!==at&&hn(o,at)}this.G=(U?0:-1)-x,this.h=void 0,this.o=o;t:{if(U=this.o.length,x=U-1,U&&(U=this.o[x],ji(U))){this.B=U,this.i=x-this.G;break t}u!==void 0&&-1<u?(this.i=Math.max(u,x+1-this.G),this.B=void 0):this.i=Number.MAX_VALUE}if(!C&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(m){u=Z&&!D&&!0,C=this.i;var St;for(Z=0;Z<m.length;Z++)D=m[Z],D<C?(D+=this.G,(x=o[D])?hi(x,u):o[D]=Ci):(St||(St=b(this)),(x=St[D])?hi(x,u):St[D]=Ci)}}ge.prototype.toJSON=function(){return pe(this.o,me,Ot)},ge.prototype.C=function(){return!!(ye(this.o)&2)};function hi(o,u){if(Array.isArray(o)){var m=ye(o),x=1;!u||m&2||(x|=16),(m&x)!==x&&hn(o,m|x)}}ge.prototype.ja=Br,ge.prototype.toString=function(){return this.o.toString()};function Te(o,u,m){if(m){var x={},C;for(C in m){var U=m[C],D=U.qa;D||(x.J=U.wa||U.oa.W,U.ia?(x.aa=yl(U.ia),D=(function(H){return function(Z,at,mt){return H.J(Z,at,mt,H.aa)}})(x)):U.ka?(x.Z=El(U.da.P,U.ka),D=(function(H){return function(Z,at,mt){return H.J(Z,at,mt,H.Z)}})(x)):D=x.J,U.qa=D),D(u,o,U.da),x={J:x.J,aa:x.aa,Z:x.Z}}}Kn(u,o)}var Ve=Symbol();function en(o,u,m){return o[Ve]||(o[Ve]=function(x,C){return u(x,C,m)})}function ze(o){var u=o[Ve];if(!u){var m=xo(o);u=function(x,C){return Tl(x,C,m)},o[Ve]=u}return u}function je(o){var u=o.ia;if(u)return ze(u);if(u=o.va)return en(o.da.P,u,o.ka)}function Vr(o){var u=je(o),m=o.da,x=o.oa.U;return u?function(C,U){return x(C,U,m,u)}:function(C,U){return x(C,U,m)}}function Gn(o,u){var m=o[u];return typeof m=="function"&&m.length===0&&(m=m(),o[u]=m),Array.isArray(m)&&(kr in m||Gr in m||0<m.length&&typeof m[0]=="function")?m:void 0}function Sl(o,u,m,x,C,U){u.P=o[0];var D=1;if(o.length>D&&typeof o[D]!="number"){var H=o[D++];m(u,H)}for(;D<o.length;){m=o[D++];for(var Z=D+1;Z<o.length&&typeof o[Z]!="number";)Z++;switch(H=o[D++],Z-=D,Z){case 0:x(u,m,H);break;case 1:(Z=Gn(o,D))?(D++,C(u,m,H,Z)):x(u,m,H,o[D++]);break;case 2:Z=D++,Z=Gn(o,Z),C(u,m,H,Z,o[D++]);break;case 3:U(u,m,H,o[D++],o[D++],o[D++]);break;case 4:U(u,m,H,o[D++],o[D++],o[D++],o[D++]);break;default:throw Error("unexpected number of binary field arguments: "+Z)}}return u}var gs=Symbol();function yl(o){var u=o[gs];if(!u){var m=vo(o);u=function(x,C){return bl(x,C,m)},o[gs]=u}return u}function El(o,u){var m=o[gs];return m||(m=function(x,C){return Te(x,C,u)},o[gs]=m),m}var Gr=Symbol();function th(o,u){o.push(u)}function eh(o,u,m){o.push(u,m.W)}function nh(o,u,m,x){var C=yl(x),U=vo(x).P,D=m.W;o.push(u,function(H,Z,at){return D(H,Z,at,U,C)})}function ih(o,u,m,x,C,U){var D=El(x,U),H=m.W;o.push(u,function(Z,at,mt){return H(Z,at,mt,x,D)})}function vo(o){var u=o[Gr];return u||(u=Sl(o,o[Gr]=[],th,eh,nh,ih),kr in o&&Gr in o&&(o.length=0),u)}var kr=Symbol();function rh(o,u){o[0]=u}function sh(o,u,m,x){var C=m.U;o[u]=x?function(U,D,H){return C(U,D,H,x)}:C}function oh(o,u,m,x,C){var U=m.U,D=ze(x),H=xo(x).P;o[u]=function(Z,at,mt){return U(Z,at,mt,H,D,C)}}function ah(o,u,m,x,C,U,D){var H=m.U,Z=en(x,C,U);o[u]=function(at,mt,kt){return H(at,mt,kt,x,Z,D)}}function xo(o){var u=o[kr];return u||(u=Sl(o,o[kr]={},rh,sh,oh,ah),kr in o&&Gr in o&&(o.length=0),u)}function Tl(o,u,m){for(;de(u)&&u.i!=4;){var x=u.l,C=m[x];if(!C){var U=m[0];U&&(U=U[x])&&(C=m[x]=Vr(U))}if(!C||!C(u,o,x)){C=u,x=o,U=C.j,re(C);var D=C;if(!D.ca){if(C=D.h.h-U,D.h.h=U,D=D.h,C==0)C=vt();else{if(U=pt(D,C),D.S&&D.m)C=D.i.subarray(U,U+C);else{D=D.i;var H=U;C=U+C,C=H===C?Ut():Be?D.slice(H,C):new Uint8Array(D.subarray(H,C))}C=C.length==0?vt():new ct(C,Qt)}(U=x.R)?U.push(C):x.R=[C]}}}return o}function bl(o,u,m){for(var x=m.length,C=x%2==1,U=C?1:0;U<x;U+=2)(0,m[U+1])(u,o,m[U]);Te(o,u,C?m[0]:void 0)}function Wr(o,u){return{U:o,W:u}}var Pn=Wr(function(o,u,m){if(o.i!==5)return!1;o=o.h;var x=o.i,C=o.h,U=x[C],D=x[C+1],H=x[C+2];return x=x[C+3],z(o,o.h+4),D=(U<<0|D<<8|H<<16|x<<24)>>>0,o=2*(D>>31)+1,U=D>>>23&255,D&=8388607,j(u,m,U==255?D?NaN:1/0*o:U==0?o*Math.pow(2,-149)*D:o*Math.pow(2,U-150)*(D+Math.pow(2,23))),!0},function(o,u,m){if(u=ht(u,m),u!=null){Et(o.h,8*m+5),o=o.h;var x=+u;x===0?0<1/x?I=$t=0:($t=0,I=2147483648):isNaN(x)?($t=0,I=2147483647):(x=(m=0>x?-2147483648:0)?-x:x,34028234663852886e22<x?($t=0,I=(m|2139095040)>>>0):11754943508222875e-54>x?(x=Math.round(x/Math.pow(2,-149)),$t=0,I=(m|x)>>>0):(u=Math.floor(Math.log(x)/Math.LN2),x*=Math.pow(2,-u),x=Math.round(8388608*x),16777216<=x&&++u,$t=0,I=(m|u+127<<23|x&8388607)>>>0)),m=I,o.h.push(m>>>0&255),o.h.push(m>>>8&255),o.h.push(m>>>16&255),o.h.push(m>>>24&255)}}),lh=Wr(function(o,u,m){if(o.i!==0)return!1;var x=o.h,C=0,U=o=0,D=x.i,H=x.h;do{var Z=D[H++];C|=(Z&127)<<U,U+=7}while(32>U&&Z&128);for(32<U&&(o|=(Z&127)>>4),U=3;32>U&&Z&128;U+=7)Z=D[H++],o|=(Z&127)<<U;if(z(x,H),128>Z)x=C>>>0,Z=o>>>0,(o=Z&2147483648)&&(x=~x+1>>>0,Z=~Z>>>0,x==0&&(Z=Z+1>>>0)),x=4294967296*Z+(x>>>0);else throw we();return j(u,m,o?-x:x),!0},function(o,u,m){u=V(u,m),u!=null&&(typeof u=="string"&&Ct(u),u!=null&&(Et(o.h,8*m),typeof u=="number"?(o=o.h,Yt(u),it(o,I,$t)):(m=Ct(u),it(o.h,m.i,m.h))))}),ch=Wr(function(o,u,m){return o.i!==0?!1:(j(u,m,ut(o.h)),!0)},function(o,u,m){if(u=V(u,m),u!=null&&u!=null)if(Et(o.h,8*m),o=o.h,m=u,0<=m)Et(o,m);else{for(u=0;9>u;u++)o.h.push(m&127|128),m>>=7;o.h.push(1)}}),Al=Wr(function(o,u,m){if(o.i!==2)return!1;var x=ut(o.h)>>>0;o=o.h;var C=pt(o,x);if(o=o.i,tt){var U=o,D;(D=rt)||(D=rt=new TextDecoder("utf-8",{fatal:!0})),o=C+x,U=C===0&&o===U.length?U:U.subarray(C,o);try{var H=D.decode(U)}catch(kt){if(et===void 0){try{D.decode(new Uint8Array([128]))}catch{}try{D.decode(new Uint8Array([97])),et=!0}catch{et=!1}}throw!et&&(rt=void 0),kt}}else{H=C,x=H+x,C=[];for(var Z=null,at,mt;H<x;)at=o[H++],128>at?C.push(at):224>at?H>=x?S():(mt=o[H++],194>at||(mt&192)!==128?(H--,S()):C.push((at&31)<<6|mt&63)):240>at?H>=x-1?S():(mt=o[H++],(mt&192)!==128||at===224&&160>mt||at===237&&160<=mt||((U=o[H++])&192)!==128?(H--,S()):C.push((at&15)<<12|(mt&63)<<6|U&63)):244>=at?H>=x-2?S():(mt=o[H++],(mt&192)!==128||(at<<28)+(mt-144)>>30!==0||((U=o[H++])&192)!==128||((D=o[H++])&192)!==128?(H--,S()):(at=(at&7)<<18|(mt&63)<<12|(U&63)<<6|D&63,at-=65536,C.push((at>>10&1023)+55296,(at&1023)+56320))):S(),8192<=C.length&&(Z=q(Z,C),C.length=0);H=q(Z,C)}return j(u,m,H),!0},function(o,u,m){if(u=V(u,m),u!=null){var x=!1;if(x=x===void 0?!1:x,dt){if(x&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(u))throw Error("Found an unpaired surrogate");u=(It||(It=new TextEncoder)).encode(u)}else{for(var C=0,U=new Uint8Array(3*u.length),D=0;D<u.length;D++){var H=u.charCodeAt(D);if(128>H)U[C++]=H;else{if(2048>H)U[C++]=H>>6|192;else{if(55296<=H&&57343>=H){if(56319>=H&&D<u.length){var Z=u.charCodeAt(++D);if(56320<=Z&&57343>=Z){H=1024*(H-55296)+Z-56320+65536,U[C++]=H>>18|240,U[C++]=H>>12&63|128,U[C++]=H>>6&63|128,U[C++]=H&63|128;continue}else D--}if(x)throw Error("Found an unpaired surrogate");H=65533}U[C++]=H>>12|224,U[C++]=H>>6&63|128}U[C++]=H&63|128}}u=C===U.length?U:U.subarray(0,C)}Et(o.h,8*m+2),Et(o.h,u.length),jn(o,o.h.end()),jn(o,u)}}),wl=Wr(function(o,u,m,x,C){if(o.i!==2)return!1;u=Bt(u,m,x),m=o.h.j,x=ut(o.h)>>>0;var U=o.h.h+x,D=U-m;if(0>=D&&(o.h.j=U,C(u,o,void 0,void 0,void 0),D=U-o.h.h),D)throw Error("Message parsing ended unexpectedly. Expected to read "+(x+" bytes, instead read "+(x-D)+" bytes, either the data ended unexpectedly or the message misreported its own length"));return o.h.h=U,o.h.j=m,!0},function(o,u,m,x,C){if(u=bt(u,x,m),u!=null)for(x=0;x<u.length;x++){var U=o;Et(U.h,8*m+2);var D=U.h.end();jn(U,D),D.push(U.i),U=D,C(u[x],o),D=o;var H=U.pop();for(H=D.i+D.h.length()-H;127<H;)U.push(H&127|128),H>>>=7,D.i++;U.push(H),D.i++}});function Mo(o){return function(u,m){t:{if(sn.length){var x=sn.pop();x.setOptions(m),qt(x.h,u,m),u=x}else u=new Xt(u,m);try{var C=xo(o),U=Tl(new C.P,u,C);break t}finally{C=u.h,C.i=null,C.m=!1,C.l=0,C.j=0,C.h=0,C.S=!1,u.l=-1,u.i=-1,100>sn.length&&sn.push(u)}U=void 0}return U}}function So(o){return function(){var u=new En;bl(this,u,vo(o)),jn(u,u.h.end());for(var m=new Uint8Array(u.i),x=u.j,C=x.length,U=0,D=0;D<C;D++){var H=x[D];m.set(H,U),U+=H.length}return u.j=[m],m}}function Ki(o){ge.call(this,o)}_(Ki,ge);var Rl=[Ki,1,ch,2,Pn,3,Al,4,Al];Ki.prototype.l=So(Rl);function yo(o){ge.call(this,o,-1,uh)}_(yo,ge),yo.prototype.addClassification=function(o,u){return Bt(this,1,Ki,o,u),this};var uh=[1],Cl=Mo([yo,1,wl,Rl]);function Zi(o){ge.call(this,o)}_(Zi,ge);var Pl=[Zi,1,Pn,2,Pn,3,Pn,4,Pn,5,Pn];Zi.prototype.l=So(Pl);function Ll(o){ge.call(this,o,-1,hh)}_(Ll,ge);var hh=[1],Dl=Mo([Ll,1,wl,Pl]);function _s(o){ge.call(this,o)}_(_s,ge);var Ul=[_s,1,Pn,2,Pn,3,Pn,4,Pn,5,Pn,6,lh],fh=Mo(Ul);_s.prototype.l=So(Ul);function Il(o,u,m){if(m=o.createShader(m===0?o.VERTEX_SHADER:o.FRAGMENT_SHADER),o.shaderSource(m,u),o.compileShader(m),!o.getShaderParameter(m,o.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+o.getShaderInfoLog(m));return m}function Nl(o){return bt(o,Ki,1).map(function(u){var m=V(u,1);return{index:m??0,score:wt(u,2),label:V(u,3)!=null?zt(V(u,3),""):void 0,displayName:V(u,4)!=null?zt(V(u,4),""):void 0}})}function Fl(o){return{x:wt(o,1),y:wt(o,2),z:wt(o,3),visibility:ht(o,4)!=null?wt(o,4):void 0}}function Ol(o){return o.map(function(u){return bt(Dl(u),Zi,1).map(Fl)})}function Eo(o,u){this.i=o,this.h=u,this.m=0}function Bl(o,u,m){return dh(o,u),typeof o.h.canvas.transferToImageBitmap=="function"?Promise.resolve(o.h.canvas.transferToImageBitmap()):m?Promise.resolve(o.h.canvas):typeof createImageBitmap=="function"?createImageBitmap(o.h.canvas):(o.j===void 0&&(o.j=document.createElement("canvas")),new Promise(function(x){o.j.height=o.h.canvas.height,o.j.width=o.h.canvas.width,o.j.getContext("2d",{}).drawImage(o.h.canvas,0,0,o.h.canvas.width,o.h.canvas.height),x(o.j)}))}function dh(o,u){var m=o.h;if(o.s===void 0){var x=Il(m,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),C=Il(m,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),U=m.createProgram();if(m.attachShader(U,x),m.attachShader(U,C),m.linkProgram(U),!m.getProgramParameter(U,m.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+m.getProgramInfoLog(U));x=o.s=U,m.useProgram(x),C=m.getUniformLocation(x,"sampler0"),o.l={O:m.getAttribLocation(x,"aVertex"),N:m.getAttribLocation(x,"aTex"),xa:C},o.v=m.createBuffer(),m.bindBuffer(m.ARRAY_BUFFER,o.v),m.enableVertexAttribArray(o.l.O),m.vertexAttribPointer(o.l.O,2,m.FLOAT,!1,0,0),m.bufferData(m.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),m.STATIC_DRAW),m.bindBuffer(m.ARRAY_BUFFER,null),o.u=m.createBuffer(),m.bindBuffer(m.ARRAY_BUFFER,o.u),m.enableVertexAttribArray(o.l.N),m.vertexAttribPointer(o.l.N,2,m.FLOAT,!1,0,0),m.bufferData(m.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),m.STATIC_DRAW),m.bindBuffer(m.ARRAY_BUFFER,null),m.uniform1i(C,0)}x=o.l,m.useProgram(o.s),m.canvas.width=u.width,m.canvas.height=u.height,m.viewport(0,0,u.width,u.height),m.activeTexture(m.TEXTURE0),o.i.bindTexture2d(u.glName),m.enableVertexAttribArray(x.O),m.bindBuffer(m.ARRAY_BUFFER,o.v),m.vertexAttribPointer(x.O,2,m.FLOAT,!1,0,0),m.enableVertexAttribArray(x.N),m.bindBuffer(m.ARRAY_BUFFER,o.u),m.vertexAttribPointer(x.N,2,m.FLOAT,!1,0,0),m.bindFramebuffer(m.DRAW_FRAMEBUFFER?m.DRAW_FRAMEBUFFER:m.FRAMEBUFFER,null),m.clearColor(0,0,0,0),m.clear(m.COLOR_BUFFER_BIT),m.colorMask(!0,!0,!0,!0),m.drawArrays(m.TRIANGLE_FAN,0,4),m.disableVertexAttribArray(x.O),m.disableVertexAttribArray(x.N),m.bindBuffer(m.ARRAY_BUFFER,null),o.i.bindTexture2d(0)}function ph(o){this.h=o}var mh=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function gh(o,u){return u+o}function zl(o,u){window[o]=u}function _h(o){var u=document.createElement("script");return u.setAttribute("src",o),u.setAttribute("crossorigin","anonymous"),new Promise(function(m){u.addEventListener("load",function(){m()},!1),u.addEventListener("error",function(){m()},!1),document.body.appendChild(u)})}function vh(){return F(function(o){switch(o.h){case 1:return o.s=2,A(o,WebAssembly.instantiate(mh),4);case 4:o.h=3,o.s=0;break;case 2:return o.s=0,o.l=null,o.return(!1);case 3:return o.return(!0)}})}function To(o){if(this.h=o,this.listeners={},this.l={},this.L={},this.s={},this.v={},this.M=this.u=this.ga=!0,this.I=Promise.resolve(),this.fa="",this.D={},this.locateFile=o&&o.locateFile||gh,typeof window=="object")var u=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")u=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.ha=u,o.options){u=l(Object.keys(o.options));for(var m=u.next();!m.done;m=u.next()){m=m.value;var x=o.options[m].default;x!==void 0&&(this.l[m]=typeof x=="function"?x():x)}}}i=To.prototype,i.close=function(){return this.j&&this.j.delete(),Promise.resolve()};function xh(o){var u,m,x,C,U,D,H,Z,at,mt,kt;return F(function(Ft){switch(Ft.h){case 1:return o.ga?(u=o.h.files===void 0?[]:typeof o.h.files=="function"?o.h.files(o.l):o.h.files,A(Ft,vh(),2)):Ft.return();case 2:if(m=Ft.i,typeof window=="object")return zl("createMediapipeSolutionsWasm",{locateFile:o.locateFile}),zl("createMediapipeSolutionsPackedAssets",{locateFile:o.locateFile}),D=u.filter(function(St){return St.data!==void 0}),H=u.filter(function(St){return St.data===void 0}),Z=Promise.all(D.map(function(St){var Wt=vs(o,St.url);if(St.path!==void 0){var ne=St.path;Wt=Wt.then(function(Ce){return o.overrideFile(ne,Ce),Promise.resolve(Ce)})}return Wt})),at=Promise.all(H.map(function(St){return St.simd===void 0||St.simd&&m||!St.simd&&!m?_h(o.locateFile(St.url,o.ha)):Promise.resolve()})).then(function(){var St,Wt,ne;return F(function(Ce){if(Ce.h==1)return St=window.createMediapipeSolutionsWasm,Wt=window.createMediapipeSolutionsPackedAssets,ne=o,A(Ce,St(Wt),2);ne.i=Ce.i,Ce.h=0})}),mt=(function(){return F(function(St){return o.h.graph&&o.h.graph.url?St=A(St,vs(o,o.h.graph.url),0):(St.h=0,St=void 0),St})})(),A(Ft,Promise.all([at,Z,mt]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return x=u.filter(function(St){return St.simd===void 0||St.simd&&m||!St.simd&&!m}).map(function(St){return o.locateFile(St.url,o.ha)}),importScripts.apply(null,h(x)),C=o,A(Ft,createMediapipeSolutionsWasm(Module),6);case 6:C.i=Ft.i,o.m=new OffscreenCanvas(1,1),o.i.canvas=o.m,U=o.i.GL.createContext(o.m,{antialias:!1,alpha:!1,ua:typeof WebGL2RenderingContext<"u"?2:1}),o.i.GL.makeContextCurrent(U),Ft.h=4;break;case 7:if(o.m=document.createElement("canvas"),kt=o.m.getContext("webgl2",{}),!kt&&(kt=o.m.getContext("webgl",{}),!kt))return alert("Failed to create WebGL canvas context when passing video frame."),Ft.return();o.K=kt,o.i.canvas=o.m,o.i.createContext(o.m,!0,!0,{});case 4:o.j=new o.i.SolutionWasm,o.ga=!1,Ft.h=0}})}function Mh(o){var u,m,x,C,U,D,H,Z;return F(function(at){if(at.h==1){if(o.h.graph&&o.h.graph.url&&o.fa===o.h.graph.url)return at.return();if(o.u=!0,!o.h.graph||!o.h.graph.url){at.h=2;return}return o.fa=o.h.graph.url,A(at,vs(o,o.h.graph.url),3)}for(at.h!=2&&(u=at.i,o.j.loadGraph(u)),m=l(Object.keys(o.D)),x=m.next();!x.done;x=m.next())C=x.value,o.j.overrideFile(C,o.D[C]);if(o.D={},o.h.listeners)for(U=l(o.h.listeners),D=U.next();!D.done;D=U.next())H=D.value,Th(o,H);Z=o.l,o.l={},o.setOptions(Z),at.h=0})}i.reset=function(){var o=this;return F(function(u){o.j&&(o.j.reset(),o.s={},o.v={}),u.h=0})},i.setOptions=function(o,u){var m=this;if(u=u||this.h.options){for(var x=[],C=[],U={},D=l(Object.keys(o)),H=D.next();!H.done;U={X:U.X,Y:U.Y},H=D.next())if(H=H.value,!(H in this.l&&this.l[H]===o[H])){this.l[H]=o[H];var Z=u[H];Z!==void 0&&(Z.onChange&&(U.X=Z.onChange,U.Y=o[H],x.push((function(at){return function(){var mt;return F(function(kt){if(kt.h==1)return A(kt,at.X(at.Y),2);mt=kt.i,mt===!0&&(m.u=!0),kt.h=0})}})(U))),Z.graphOptionXref&&(H=Object.assign({},{calculatorName:"",calculatorIndex:0},Z.graphOptionXref,{valueNumber:Z.type===1?o[H]:0,valueBoolean:Z.type===0?o[H]:!1,valueString:Z.type===2?o[H]:""}),C.push(H)))}(x.length!==0||C.length!==0)&&(this.u=!0,this.H=(this.H===void 0?[]:this.H).concat(C),this.F=(this.F===void 0?[]:this.F).concat(x))}};function Sh(o){var u,m,x,C,U,D,H;return F(function(Z){switch(Z.h){case 1:if(!o.u)return Z.return();if(!o.F){Z.h=2;break}u=l(o.F),m=u.next();case 3:if(m.done){Z.h=5;break}return x=m.value,A(Z,x(),4);case 4:m=u.next(),Z.h=3;break;case 5:o.F=void 0;case 2:if(o.H){for(C=new o.i.GraphOptionChangeRequestList,U=l(o.H),D=U.next();!D.done;D=U.next())H=D.value,C.push_back(H);o.j.changeOptions(C),C.delete(),o.H=void 0}o.u=!1,Z.h=0}})}i.initialize=function(){var o=this;return F(function(u){return u.h==1?A(u,xh(o),2):u.h!=3?A(u,Mh(o),3):A(u,Sh(o),0)})};function vs(o,u){var m,x;return F(function(C){return u in o.L?C.return(o.L[u]):(m=o.locateFile(u,""),x=fetch(m).then(function(U){return U.arrayBuffer()}),o.L[u]=x,C.return(x))})}i.overrideFile=function(o,u){this.j?this.j.overrideFile(o,u):this.D[o]=u},i.clearOverriddenFiles=function(){this.D={},this.j&&this.j.clearOverriddenFiles()},i.send=function(o,u){var m=this,x,C,U,D,H,Z,at,mt,kt;return F(function(Ft){switch(Ft.h){case 1:return m.h.inputs?(x=1e3*(u??performance.now()),A(Ft,m.I,2)):Ft.return();case 2:return A(Ft,m.initialize(),3);case 3:for(C=new m.i.PacketDataList,U=l(Object.keys(o)),D=U.next();!D.done;D=U.next())if(H=D.value,Z=m.h.inputs[H]){t:{var St=o[H];switch(Z.type){case"video":var Wt=m.s[Z.stream];if(Wt||(Wt=new Eo(m.i,m.K),m.s[Z.stream]=Wt),Wt.m===0&&(Wt.m=Wt.i.createTexture()),typeof HTMLVideoElement<"u"&&St instanceof HTMLVideoElement)var ne=St.videoWidth,Ce=St.videoHeight;else typeof HTMLImageElement<"u"&&St instanceof HTMLImageElement?(ne=St.naturalWidth,Ce=St.naturalHeight):(ne=St.width,Ce=St.height);Ce={glName:Wt.m,width:ne,height:Ce},ne=Wt.h,ne.canvas.width=Ce.width,ne.canvas.height=Ce.height,ne.activeTexture(ne.TEXTURE0),Wt.i.bindTexture2d(Wt.m),ne.texImage2D(ne.TEXTURE_2D,0,ne.RGBA,ne.RGBA,ne.UNSIGNED_BYTE,St),Wt.i.bindTexture2d(0),Wt=Ce;break t;case"detections":for(Wt=m.s[Z.stream],Wt||(Wt=new ph(m.i),m.s[Z.stream]=Wt),Wt.data||(Wt.data=new Wt.h.DetectionListData),Wt.data.reset(St.length),Ce=0;Ce<St.length;++Ce){ne=St[Ce];var be=Wt.data,Ge=be.setBoundingBox,Tn=Ce,on=ne.la,ue=new _s;if(_t(ue,1,on.ra),_t(ue,2,on.sa),_t(ue,3,on.height),_t(ue,4,on.width),_t(ue,5,on.rotation),j(ue,6,on.pa),on=ue.l(),Ge.call(be,Tn,on),ne.ea)for(be=0;be<ne.ea.length;++be){ue=ne.ea[be],Ge=Wt.data,Tn=Ge.addNormalizedLandmark,on=Ce,ue=Object.assign({},ue,{visibility:ue.visibility?ue.visibility:0});var ke=new Zi;_t(ke,1,ue.x),_t(ke,2,ue.y),_t(ke,3,ue.z),ue.visibility&&_t(ke,4,ue.visibility),ue=ke.l(),Tn.call(Ge,on,ue)}if(ne.ba)for(be=0;be<ne.ba.length;++be)Ge=Wt.data,Tn=Ge.addClassification,on=Ce,ue=ne.ba[be],ke=new Ki,_t(ke,2,ue.score),ue.index&&j(ke,1,ue.index),ue.label&&j(ke,3,ue.label),ue.displayName&&j(ke,4,ue.displayName),ue=ke.l(),Tn.call(Ge,on,ue)}Wt=Wt.data;break t;default:Wt={}}}switch(at=Wt,mt=Z.stream,Z.type){case"video":C.pushTexture2d(Object.assign({},at,{stream:mt,timestamp:x}));break;case"detections":kt=at,kt.stream=mt,kt.timestamp=x,C.pushDetectionList(kt);break;default:throw Error("Unknown input config type: '"+Z.type+"'")}}return m.j.send(C),A(Ft,m.I,4);case 4:C.delete(),Ft.h=0}})};function yh(o,u,m){var x,C,U,D,H,Z,at,mt,kt,Ft,St,Wt,ne,Ce;return F(function(be){switch(be.h){case 1:if(!m)return be.return(u);for(x={},C=0,U=l(Object.keys(m)),D=U.next();!D.done;D=U.next())H=D.value,Z=m[H],typeof Z!="string"&&Z.type==="texture"&&u[Z.stream]!==void 0&&++C;1<C&&(o.M=!1),at=l(Object.keys(m)),D=at.next();case 2:if(D.done){be.h=4;break}if(mt=D.value,kt=m[mt],typeof kt=="string")return ne=x,Ce=mt,A(be,Eh(o,mt,u[kt]),14);if(Ft=u[kt.stream],kt.type==="detection_list"){if(Ft){for(var Ge=Ft.getRectList(),Tn=Ft.getLandmarksList(),on=Ft.getClassificationsList(),ue=[],ke=0;ke<Ge.size();++ke){var fi=fh(Ge.get(ke)),bh=wt(fi,1),Ah=wt(fi,2),wh=wt(fi,3),Rh=wt(fi,4),Ch=wt(fi,5,0),xs=void 0;xs=xs===void 0?0:xs,fi={la:{ra:bh,sa:Ah,height:wh,width:Rh,rotation:Ch,pa:zt(V(fi,6),xs)},ea:bt(Dl(Tn.get(ke)),Zi,1).map(Fl),ba:Nl(Cl(on.get(ke)))},ue.push(fi)}Ge=ue}else Ge=[];x[mt]=Ge,be.h=7;break}if(kt.type==="proto_list"){if(Ft){for(Ge=Array(Ft.size()),Tn=0;Tn<Ft.size();Tn++)Ge[Tn]=Ft.get(Tn);Ft.delete()}else Ge=[];x[mt]=Ge,be.h=7;break}if(Ft===void 0){be.h=3;break}if(kt.type==="float_list"){x[mt]=Ft,be.h=7;break}if(kt.type==="proto"){x[mt]=Ft,be.h=7;break}if(kt.type!=="texture")throw Error("Unknown output config type: '"+kt.type+"'");return St=o.v[mt],St||(St=new Eo(o.i,o.K),o.v[mt]=St),A(be,Bl(St,Ft,o.M),13);case 13:Wt=be.i,x[mt]=Wt;case 7:kt.transform&&x[mt]&&(x[mt]=kt.transform(x[mt])),be.h=3;break;case 14:ne[Ce]=be.i;case 3:D=at.next(),be.h=2;break;case 4:return be.return(x)}})}function Eh(o,u,m){var x;return F(function(C){return typeof m=="number"||m instanceof Uint8Array||m instanceof o.i.Uint8BlobList?C.return(m):m instanceof o.i.Texture2dDataOut?(x=o.v[u],x||(x=new Eo(o.i,o.K),o.v[u]=x),C.return(Bl(x,m,o.M))):C.return(void 0)})}function Th(o,u){for(var m=u.name||"$",x=[].concat(h(u.wants)),C=new o.i.StringList,U=l(u.wants),D=U.next();!D.done;D=U.next())C.push_back(D.value);U=o.i.PacketListener.implement({onResults:function(H){for(var Z={},at=0;at<u.wants.length;++at)Z[x[at]]=H.get(at);var mt=o.listeners[m];mt&&(o.I=yh(o,Z,u.outs).then(function(kt){kt=mt(kt);for(var Ft=0;Ft<u.wants.length;++Ft){var St=Z[x[Ft]];typeof St=="object"&&St.hasOwnProperty&&St.hasOwnProperty("delete")&&St.delete()}kt&&(o.I=kt)}))}}),o.j.attachMultiListener(C,U),C.delete()}i.onResults=function(o,u){this.listeners[u||"$"]=o},Q("Solution",To),Q("OptionType",{BOOL:0,NUMBER:1,ta:2,0:"BOOL",1:"NUMBER",2:"STRING"});function Hl(o){return o===void 0&&(o=0),o===1?"hand_landmark_full.tflite":"hand_landmark_lite.tflite"}function Vl(o){var u=this;o=o||{},this.h=new To({locateFile:o.locateFile,files:function(m){return[{url:"hands_solution_packed_assets_loader.js"},{simd:!1,url:"hands_solution_wasm_bin.js"},{simd:!0,url:"hands_solution_simd_wasm_bin.js"},{data:!0,url:Hl(m.modelComplexity)}]},graph:{url:"hands.binarypb"},inputs:{image:{type:"video",stream:"input_frames_gpu"}},listeners:[{wants:["multi_hand_landmarks","multi_hand_world_landmarks","image_transformed","multi_handedness"],outs:{image:"image_transformed",multiHandLandmarks:{type:"proto_list",stream:"multi_hand_landmarks",transform:Ol},multiHandWorldLandmarks:{type:"proto_list",stream:"multi_hand_world_landmarks",transform:Ol},multiHandedness:{type:"proto_list",stream:"multi_handedness",transform:function(m){return m.map(function(x){return Nl(Cl(x))[0]})}}}}],options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window!="object"||window.navigator===void 0?!1:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumHands:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculator",fieldName:"int_value"}},modelComplexity:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelComplexity",fieldName:"int_value"},onChange:function(m){var x,C,U;return F(function(D){return D.h==1?(x=Hl(m),C="third_party/mediapipe/modules/hand_landmark/"+x,A(D,vs(u.h,x),2)):(U=D.i,u.h.overrideFile(C,U),D.return(!0))})}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"handlandmarktrackinggpu__palmdetectiongpu__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"handlandmarktrackinggpu__handlandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}}}})}i=Vl.prototype,i.close=function(){return this.h.close(),Promise.resolve()},i.onResults=function(o){this.h.onResults(o)},i.initialize=function(){var o=this;return F(function(u){return A(u,o.h.initialize(),0)})},i.reset=function(){this.h.reset()},i.send=function(o){var u=this;return F(function(m){return A(m,u.h.send(o),0)})},i.setOptions=function(o){this.h.setOptions(o)},Q("Hands",Vl),Q("HAND_CONNECTIONS",[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]]),Q("VERSION","0.4.1675469240")}).call(bo)),bo}var Lh=Ph();const Dh="/assets/user_flat_orb_0-uUpbpm1w.png",Uh="/assets/user_flat_orb_1-C_XMHob1.png",Ih="/assets/user_flat_orb_2-Bb-i91ht.png",Nh="/assets/user_flat_orb_3-lPcpCCr2.png",Fh="/assets/user_flat_orb_4-Bk6GwopL.png";const sl="180",Oh=0,Wl=1,Bh=2,hu=1,zh=2,ni=3,wi=0,ln=1,xn=2,Ti=0,Mr=1,pn=2,Xl=3,Yl=4,Hh=5,Bi=100,Vh=101,Gh=102,kh=103,Wh=104,Xh=200,Yh=201,qh=202,jh=203,fa=204,da=205,Kh=206,Zh=207,Jh=208,Qh=209,$h=210,tf=211,ef=212,nf=213,rf=214,pa=0,ma=1,ga=2,Rr=3,_a=4,va=5,xa=6,Ma=7,fu=0,sf=1,of=2,bi=0,af=1,lf=2,cf=3,du=4,uf=5,hf=6,ff=7,pu=300,Cr=301,Pr=302,Sa=303,ya=304,fo=306,Ea=1e3,Hi=1001,Ta=1002,Hn=1003,df=1004,Ms=1005,Fn=1006,Ao=1007,yi=1008,Yn=1009,mu=1010,gu=1011,is=1012,ol=1013,Wi=1014,si=1015,cs=1016,al=1017,ll=1018,rs=1020,_u=35902,vu=35899,xu=1021,Mu=1022,On=1023,ss=1026,os=1027,Su=1028,cl=1029,yu=1030,ul=1031,hl=1033,Js=33776,Qs=33777,$s=33778,to=33779,ba=35840,Aa=35841,wa=35842,Ra=35843,Ca=36196,Pa=37492,La=37496,Da=37808,Ua=37809,Ia=37810,Na=37811,Fa=37812,Oa=37813,Ba=37814,za=37815,Ha=37816,Va=37817,Ga=37818,ka=37819,Wa=37820,Xa=37821,Ya=36492,qa=36494,ja=36495,Ka=36283,Za=36284,Ja=36285,Qa=36286,pf=3200,mf=3201,gf=0,_f=1,Mi="",_n="srgb",Lr="srgb-linear",io="linear",_e="srgb",Ji=7680,ql=519,vf=512,xf=513,Mf=514,Eu=515,Sf=516,yf=517,Ef=518,Tf=519,$a=35044,jl="300 es",Xn=2e3,ro=2001;class Ir{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wo=Math.PI/180,so=180/Math.PI;function Ai(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]).toLowerCase()}function oe(i,t,e){return Math.max(t,Math.min(e,i))}function bf(i,t){return(i%t+t)%t}function Ro(i,t,e){return(1-e)*i+e*t}function Wn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ee{constructor(t=0,e=0){ee.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nr{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,l){let h=n[r+0],c=n[r+1],f=n[r+2],p=n[r+3];const g=s[a+0],v=s[a+1],M=s[a+2],E=s[a+3];if(l===0){t[e+0]=h,t[e+1]=c,t[e+2]=f,t[e+3]=p;return}if(l===1){t[e+0]=g,t[e+1]=v,t[e+2]=M,t[e+3]=E;return}if(p!==E||h!==g||c!==v||f!==M){let _=1-l;const d=h*g+c*v+f*M+p*E,P=d>=0?1:-1,w=1-d*d;if(w>Number.EPSILON){const N=Math.sqrt(w),R=Math.atan2(N,d*P);_=Math.sin(_*R)/N,l=Math.sin(l*R)/N}const A=l*P;if(h=h*_+g*A,c=c*_+v*A,f=f*_+M*A,p=p*_+E*A,_===1-l){const N=1/Math.sqrt(h*h+c*c+f*f+p*p);h*=N,c*=N,f*=N,p*=N}}t[e]=h,t[e+1]=c,t[e+2]=f,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,r,s,a){const l=n[r],h=n[r+1],c=n[r+2],f=n[r+3],p=s[a],g=s[a+1],v=s[a+2],M=s[a+3];return t[e]=l*M+f*p+h*v-c*g,t[e+1]=h*M+f*g+c*p-l*v,t[e+2]=c*M+f*v+l*g-h*p,t[e+3]=f*M-l*p-h*g-c*v,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,l=Math.cos,h=Math.sin,c=l(n/2),f=l(r/2),p=l(s/2),g=h(n/2),v=h(r/2),M=h(s/2);switch(a){case"XYZ":this._x=g*f*p+c*v*M,this._y=c*v*p-g*f*M,this._z=c*f*M+g*v*p,this._w=c*f*p-g*v*M;break;case"YXZ":this._x=g*f*p+c*v*M,this._y=c*v*p-g*f*M,this._z=c*f*M-g*v*p,this._w=c*f*p+g*v*M;break;case"ZXY":this._x=g*f*p-c*v*M,this._y=c*v*p+g*f*M,this._z=c*f*M+g*v*p,this._w=c*f*p-g*v*M;break;case"ZYX":this._x=g*f*p-c*v*M,this._y=c*v*p+g*f*M,this._z=c*f*M-g*v*p,this._w=c*f*p+g*v*M;break;case"YZX":this._x=g*f*p+c*v*M,this._y=c*v*p+g*f*M,this._z=c*f*M-g*v*p,this._w=c*f*p-g*v*M;break;case"XZY":this._x=g*f*p-c*v*M,this._y=c*v*p-g*f*M,this._z=c*f*M+g*v*p,this._w=c*f*p+g*v*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],l=e[5],h=e[9],c=e[2],f=e[6],p=e[10],g=n+l+p;if(g>0){const v=.5/Math.sqrt(g+1);this._w=.25/v,this._x=(f-h)*v,this._y=(s-c)*v,this._z=(a-r)*v}else if(n>l&&n>p){const v=2*Math.sqrt(1+n-l-p);this._w=(f-h)/v,this._x=.25*v,this._y=(r+a)/v,this._z=(s+c)/v}else if(l>p){const v=2*Math.sqrt(1+l-n-p);this._w=(s-c)/v,this._x=(r+a)/v,this._y=.25*v,this._z=(h+f)/v}else{const v=2*Math.sqrt(1+p-n-l);this._w=(a-r)/v,this._x=(s+c)/v,this._y=(h+f)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,l=e._x,h=e._y,c=e._z,f=e._w;return this._x=n*f+a*l+r*c-s*h,this._y=r*f+a*h+s*l-n*c,this._z=s*f+a*c+n*h-r*l,this._w=a*f-n*l-r*h-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let l=a*t._w+n*t._x+r*t._y+s*t._z;if(l<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,l=-l):this.copy(t),l>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const h=1-l*l;if(h<=Number.EPSILON){const v=1-e;return this._w=v*a+e*this._w,this._x=v*n+e*this._x,this._y=v*r+e*this._y,this._z=v*s+e*this._z,this.normalize(),this}const c=Math.sqrt(h),f=Math.atan2(c,l),p=Math.sin((1-e)*f)/c,g=Math.sin(e*f)/c;return this._w=a*p+this._w*g,this._x=n*p+this._x*g,this._y=r*p+this._y*g,this._z=s*p+this._z*g,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(t=0,e=0,n=0){G.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Kl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Kl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,l=t.z,h=t.w,c=2*(a*r-l*n),f=2*(l*e-s*r),p=2*(s*n-a*e);return this.x=e+h*c+a*p-l*f,this.y=n+h*f+l*c-s*p,this.z=r+h*p+s*f-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,l=e.y,h=e.z;return this.x=r*h-s*l,this.y=s*a-n*h,this.z=n*l-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Co.copy(this).projectOnVector(t),this.sub(Co)}reflect(t){return this.sub(Co.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Co=new G,Kl=new Nr;class Jt{constructor(t,e,n,r,s,a,l,h,c){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,l,h,c)}set(t,e,n,r,s,a,l,h,c){const f=this.elements;return f[0]=t,f[1]=r,f[2]=l,f[3]=e,f[4]=s,f[5]=h,f[6]=n,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],l=n[3],h=n[6],c=n[1],f=n[4],p=n[7],g=n[2],v=n[5],M=n[8],E=r[0],_=r[3],d=r[6],P=r[1],w=r[4],A=r[7],N=r[2],R=r[5],O=r[8];return s[0]=a*E+l*P+h*N,s[3]=a*_+l*w+h*R,s[6]=a*d+l*A+h*O,s[1]=c*E+f*P+p*N,s[4]=c*_+f*w+p*R,s[7]=c*d+f*A+p*O,s[2]=g*E+v*P+M*N,s[5]=g*_+v*w+M*R,s[8]=g*d+v*A+M*O,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],l=t[5],h=t[6],c=t[7],f=t[8];return e*a*f-e*l*c-n*s*f+n*l*h+r*s*c-r*a*h}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],l=t[5],h=t[6],c=t[7],f=t[8],p=f*a-l*c,g=l*h-f*s,v=c*s-a*h,M=e*p+n*g+r*v;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return t[0]=p*E,t[1]=(r*c-f*n)*E,t[2]=(l*n-r*a)*E,t[3]=g*E,t[4]=(f*e-r*h)*E,t[5]=(r*s-l*e)*E,t[6]=v*E,t[7]=(n*h-c*e)*E,t[8]=(a*e-n*s)*E,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,l){const h=Math.cos(s),c=Math.sin(s);return this.set(n*h,n*c,-n*(h*a+c*l)+a+t,-r*c,r*h,-r*(-c*a+h*l)+l+e,0,0,1),this}scale(t,e){return this.premultiply(Po.makeScale(t,e)),this}rotate(t){return this.premultiply(Po.makeRotation(-t)),this}translate(t,e){return this.premultiply(Po.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Po=new Jt;function Tu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function as(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Af(){const i=as("canvas");return i.style.display="block",i}const Zl={};function ls(i){i in Zl||(Zl[i]=!0,console.warn(i))}function wf(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const Jl=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ql=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rf(){const i={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===_e&&(r.r=oi(r.r),r.g=oi(r.g),r.b=oi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_e&&(r.r=Sr(r.r),r.g=Sr(r.g),r.b=Sr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Mi?io:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ls("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ls("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Lr]:{primaries:t,whitePoint:n,transfer:io,toXYZ:Jl,fromXYZ:Ql,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:_n},outputColorSpaceConfig:{drawingBufferColorSpace:_n}},[_n]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:Jl,fromXYZ:Ql,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:_n}}}),i}const he=Rf();function oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Sr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Qi;class Cf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Qi===void 0&&(Qi=as("canvas")),Qi.width=t.width,Qi.height=t.height;const r=Qi.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Qi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=as("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=oi(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(oi(e[n]/255)*255):e[n]=oi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Pf=0;class fl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Ai(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?s.push(Lo(r[a].image)):s.push(Lo(r[a]))}else s=Lo(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Lo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Cf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lf=0;const Do=new G;class tn extends Ir{constructor(t=tn.DEFAULT_IMAGE,e=tn.DEFAULT_MAPPING,n=Hi,r=Hi,s=Fn,a=yi,l=On,h=Yn,c=tn.DEFAULT_ANISOTROPY,f=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=Ai(),this.name="",this.source=new fl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=l,this.internalFormat=null,this.type=h,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Do).x}get height(){return this.source.getSize(Do).y}get depth(){return this.source.getSize(Do).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ea:t.x=t.x-Math.floor(t.x);break;case Hi:t.x=t.x<0?0:1;break;case Ta:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ea:t.y=t.y-Math.floor(t.y);break;case Hi:t.y=t.y<0?0:1;break;case Ta:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=pu;tn.DEFAULT_ANISOTROPY=1;class xe{constructor(t=0,e=0,n=0,r=1){xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const h=t.elements,c=h[0],f=h[4],p=h[8],g=h[1],v=h[5],M=h[9],E=h[2],_=h[6],d=h[10];if(Math.abs(f-g)<.01&&Math.abs(p-E)<.01&&Math.abs(M-_)<.01){if(Math.abs(f+g)<.1&&Math.abs(p+E)<.1&&Math.abs(M+_)<.1&&Math.abs(c+v+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,A=(v+1)/2,N=(d+1)/2,R=(f+g)/4,O=(p+E)/4,B=(M+_)/4;return w>A&&w>N?w<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(w),r=R/n,s=O/n):A>N?A<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),n=R/r,s=B/r):N<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),n=O/s,r=B/s),this.set(n,r,s,e),this}let P=Math.sqrt((_-M)*(_-M)+(p-E)*(p-E)+(g-f)*(g-f));return Math.abs(P)<.001&&(P=1),this.x=(_-M)/P,this.y=(p-E)/P,this.z=(g-f)/P,this.w=Math.acos((c+v+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this.w=oe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this.w=oe(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Df extends Ir{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);const r={width:t,height:e,depth:n.depth},s=new tn(r);this.textures=[];const a=n.count;for(let l=0;l<a;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new fl(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends Df{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class bu extends tn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Uf extends tn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class us{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,l=s.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,Ln):Ln.fromBufferAttribute(s,a),Ln.applyMatrix4(t.matrixWorld),this.expandByPoint(Ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ss.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ss.copy(n.boundingBox)),Ss.applyMatrix4(t.matrixWorld),this.union(Ss)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ln),Ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xr),ys.subVectors(this.max,Xr),$i.subVectors(t.a,Xr),tr.subVectors(t.b,Xr),er.subVectors(t.c,Xr),di.subVectors(tr,$i),pi.subVectors(er,tr),Pi.subVectors($i,er);let e=[0,-di.z,di.y,0,-pi.z,pi.y,0,-Pi.z,Pi.y,di.z,0,-di.x,pi.z,0,-pi.x,Pi.z,0,-Pi.x,-di.y,di.x,0,-pi.y,pi.x,0,-Pi.y,Pi.x,0];return!Uo(e,$i,tr,er,ys)||(e=[1,0,0,0,1,0,0,0,1],!Uo(e,$i,tr,er,ys))?!1:(Es.crossVectors(di,pi),e=[Es.x,Es.y,Es.z],Uo(e,$i,tr,er,ys))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Jn=[new G,new G,new G,new G,new G,new G,new G,new G],Ln=new G,Ss=new us,$i=new G,tr=new G,er=new G,di=new G,pi=new G,Pi=new G,Xr=new G,ys=new G,Es=new G,Li=new G;function Uo(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Li.fromArray(i,s);const l=r.x*Math.abs(Li.x)+r.y*Math.abs(Li.y)+r.z*Math.abs(Li.z),h=t.dot(Li),c=e.dot(Li),f=n.dot(Li);if(Math.max(-Math.max(h,c,f),Math.min(h,c,f))>l)return!1}return!0}const If=new us,Yr=new G,Io=new G;class hs{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):If.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yr.subVectors(t,this.center);const e=Yr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Yr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Io.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yr.copy(t.center).add(Io)),this.expandByPoint(Yr.copy(t.center).sub(Io))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Qn=new G,No=new G,Ts=new G,mi=new G,Fo=new G,bs=new G,Oo=new G;class dl{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qn.copy(this.origin).addScaledVector(this.direction,e),Qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){No.copy(t).add(e).multiplyScalar(.5),Ts.copy(e).sub(t).normalize(),mi.copy(this.origin).sub(No);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Ts),l=mi.dot(this.direction),h=-mi.dot(Ts),c=mi.lengthSq(),f=Math.abs(1-a*a);let p,g,v,M;if(f>0)if(p=a*h-l,g=a*l-h,M=s*f,p>=0)if(g>=-M)if(g<=M){const E=1/f;p*=E,g*=E,v=p*(p+a*g+2*l)+g*(a*p+g+2*h)+c}else g=s,p=Math.max(0,-(a*g+l)),v=-p*p+g*(g+2*h)+c;else g=-s,p=Math.max(0,-(a*g+l)),v=-p*p+g*(g+2*h)+c;else g<=-M?(p=Math.max(0,-(-a*s+l)),g=p>0?-s:Math.min(Math.max(-s,-h),s),v=-p*p+g*(g+2*h)+c):g<=M?(p=0,g=Math.min(Math.max(-s,-h),s),v=g*(g+2*h)+c):(p=Math.max(0,-(a*s+l)),g=p>0?s:Math.min(Math.max(-s,-h),s),v=-p*p+g*(g+2*h)+c);else g=a>0?-s:s,p=Math.max(0,-(a*g+l)),v=-p*p+g*(g+2*h)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(No).addScaledVector(Ts,g),v}intersectSphere(t,e){Qn.subVectors(t.center,this.origin);const n=Qn.dot(this.direction),r=Qn.dot(Qn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),l=n-a,h=n+a;return h<0?null:l<0?this.at(h,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,l,h;const c=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,g=this.origin;return c>=0?(n=(t.min.x-g.x)*c,r=(t.max.x-g.x)*c):(n=(t.max.x-g.x)*c,r=(t.min.x-g.x)*c),f>=0?(s=(t.min.y-g.y)*f,a=(t.max.y-g.y)*f):(s=(t.max.y-g.y)*f,a=(t.min.y-g.y)*f),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),p>=0?(l=(t.min.z-g.z)*p,h=(t.max.z-g.z)*p):(l=(t.max.z-g.z)*p,h=(t.min.z-g.z)*p),n>h||l>r)||((l>n||n!==n)&&(n=l),(h<r||r!==r)&&(r=h),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Qn)!==null}intersectTriangle(t,e,n,r,s){Fo.subVectors(e,t),bs.subVectors(n,t),Oo.crossVectors(Fo,bs);let a=this.direction.dot(Oo),l;if(a>0){if(r)return null;l=1}else if(a<0)l=-1,a=-a;else return null;mi.subVectors(this.origin,t);const h=l*this.direction.dot(bs.crossVectors(mi,bs));if(h<0)return null;const c=l*this.direction.dot(Fo.cross(mi));if(c<0||h+c>a)return null;const f=-l*mi.dot(Oo);return f<0?null:this.at(f/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ae{constructor(t,e,n,r,s,a,l,h,c,f,p,g,v,M,E,_){Ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,l,h,c,f,p,g,v,M,E,_)}set(t,e,n,r,s,a,l,h,c,f,p,g,v,M,E,_){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=l,d[13]=h,d[2]=c,d[6]=f,d[10]=p,d[14]=g,d[3]=v,d[7]=M,d[11]=E,d[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/nr.setFromMatrixColumn(t,0).length(),s=1/nr.setFromMatrixColumn(t,1).length(),a=1/nr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),l=Math.sin(n),h=Math.cos(r),c=Math.sin(r),f=Math.cos(s),p=Math.sin(s);if(t.order==="XYZ"){const g=a*f,v=a*p,M=l*f,E=l*p;e[0]=h*f,e[4]=-h*p,e[8]=c,e[1]=v+M*c,e[5]=g-E*c,e[9]=-l*h,e[2]=E-g*c,e[6]=M+v*c,e[10]=a*h}else if(t.order==="YXZ"){const g=h*f,v=h*p,M=c*f,E=c*p;e[0]=g+E*l,e[4]=M*l-v,e[8]=a*c,e[1]=a*p,e[5]=a*f,e[9]=-l,e[2]=v*l-M,e[6]=E+g*l,e[10]=a*h}else if(t.order==="ZXY"){const g=h*f,v=h*p,M=c*f,E=c*p;e[0]=g-E*l,e[4]=-a*p,e[8]=M+v*l,e[1]=v+M*l,e[5]=a*f,e[9]=E-g*l,e[2]=-a*c,e[6]=l,e[10]=a*h}else if(t.order==="ZYX"){const g=a*f,v=a*p,M=l*f,E=l*p;e[0]=h*f,e[4]=M*c-v,e[8]=g*c+E,e[1]=h*p,e[5]=E*c+g,e[9]=v*c-M,e[2]=-c,e[6]=l*h,e[10]=a*h}else if(t.order==="YZX"){const g=a*h,v=a*c,M=l*h,E=l*c;e[0]=h*f,e[4]=E-g*p,e[8]=M*p+v,e[1]=p,e[5]=a*f,e[9]=-l*f,e[2]=-c*f,e[6]=v*p+M,e[10]=g-E*p}else if(t.order==="XZY"){const g=a*h,v=a*c,M=l*h,E=l*c;e[0]=h*f,e[4]=-p,e[8]=c*f,e[1]=g*p+E,e[5]=a*f,e[9]=v*p-M,e[2]=M*p-v,e[6]=l*f,e[10]=E*p+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nf,t,Ff)}lookAt(t,e,n){const r=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),gi.crossVectors(n,fn),gi.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),gi.crossVectors(n,fn)),gi.normalize(),As.crossVectors(fn,gi),r[0]=gi.x,r[4]=As.x,r[8]=fn.x,r[1]=gi.y,r[5]=As.y,r[9]=fn.y,r[2]=gi.z,r[6]=As.z,r[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],l=n[4],h=n[8],c=n[12],f=n[1],p=n[5],g=n[9],v=n[13],M=n[2],E=n[6],_=n[10],d=n[14],P=n[3],w=n[7],A=n[11],N=n[15],R=r[0],O=r[4],B=r[8],y=r[12],T=r[1],F=r[5],k=r[9],X=r[13],Y=r[2],Q=r[6],$=r[10],st=r[14],K=r[3],ft=r[7],yt=r[11],Lt=r[15];return s[0]=a*R+l*T+h*Y+c*K,s[4]=a*O+l*F+h*Q+c*ft,s[8]=a*B+l*k+h*$+c*yt,s[12]=a*y+l*X+h*st+c*Lt,s[1]=f*R+p*T+g*Y+v*K,s[5]=f*O+p*F+g*Q+v*ft,s[9]=f*B+p*k+g*$+v*yt,s[13]=f*y+p*X+g*st+v*Lt,s[2]=M*R+E*T+_*Y+d*K,s[6]=M*O+E*F+_*Q+d*ft,s[10]=M*B+E*k+_*$+d*yt,s[14]=M*y+E*X+_*st+d*Lt,s[3]=P*R+w*T+A*Y+N*K,s[7]=P*O+w*F+A*Q+N*ft,s[11]=P*B+w*k+A*$+N*yt,s[15]=P*y+w*X+A*st+N*Lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],l=t[5],h=t[9],c=t[13],f=t[2],p=t[6],g=t[10],v=t[14],M=t[3],E=t[7],_=t[11],d=t[15];return M*(+s*h*p-r*c*p-s*l*g+n*c*g+r*l*v-n*h*v)+E*(+e*h*v-e*c*g+s*a*g-r*a*v+r*c*f-s*h*f)+_*(+e*c*p-e*l*v-s*a*p+n*a*v+s*l*f-n*c*f)+d*(-r*l*f-e*h*p+e*l*g+r*a*p-n*a*g+n*h*f)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],l=t[5],h=t[6],c=t[7],f=t[8],p=t[9],g=t[10],v=t[11],M=t[12],E=t[13],_=t[14],d=t[15],P=p*_*c-E*g*c+E*h*v-l*_*v-p*h*d+l*g*d,w=M*g*c-f*_*c-M*h*v+a*_*v+f*h*d-a*g*d,A=f*E*c-M*p*c+M*l*v-a*E*v-f*l*d+a*p*d,N=M*p*h-f*E*h-M*l*g+a*E*g+f*l*_-a*p*_,R=e*P+n*w+r*A+s*N;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/R;return t[0]=P*O,t[1]=(E*g*s-p*_*s-E*r*v+n*_*v+p*r*d-n*g*d)*O,t[2]=(l*_*s-E*h*s+E*r*c-n*_*c-l*r*d+n*h*d)*O,t[3]=(p*h*s-l*g*s-p*r*c+n*g*c+l*r*v-n*h*v)*O,t[4]=w*O,t[5]=(f*_*s-M*g*s+M*r*v-e*_*v-f*r*d+e*g*d)*O,t[6]=(M*h*s-a*_*s-M*r*c+e*_*c+a*r*d-e*h*d)*O,t[7]=(a*g*s-f*h*s+f*r*c-e*g*c-a*r*v+e*h*v)*O,t[8]=A*O,t[9]=(M*p*s-f*E*s-M*n*v+e*E*v+f*n*d-e*p*d)*O,t[10]=(a*E*s-M*l*s+M*n*c-e*E*c-a*n*d+e*l*d)*O,t[11]=(f*l*s-a*p*s-f*n*c+e*p*c+a*n*v-e*l*v)*O,t[12]=N*O,t[13]=(f*E*r-M*p*r+M*n*g-e*E*g-f*n*_+e*p*_)*O,t[14]=(M*l*r-a*E*r-M*n*h+e*E*h+a*n*_-e*l*_)*O,t[15]=(a*p*r-f*l*r+f*n*h-e*p*h-a*n*g+e*l*g)*O,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,l=t.y,h=t.z,c=s*a,f=s*l;return this.set(c*a+n,c*l-r*h,c*h+r*l,0,c*l+r*h,f*l+n,f*h-r*a,0,c*h-r*l,f*h+r*a,s*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,l=e._z,h=e._w,c=s+s,f=a+a,p=l+l,g=s*c,v=s*f,M=s*p,E=a*f,_=a*p,d=l*p,P=h*c,w=h*f,A=h*p,N=n.x,R=n.y,O=n.z;return r[0]=(1-(E+d))*N,r[1]=(v+A)*N,r[2]=(M-w)*N,r[3]=0,r[4]=(v-A)*R,r[5]=(1-(g+d))*R,r[6]=(_+P)*R,r[7]=0,r[8]=(M+w)*O,r[9]=(_-P)*O,r[10]=(1-(g+E))*O,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=nr.set(r[0],r[1],r[2]).length();const a=nr.set(r[4],r[5],r[6]).length(),l=nr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Dn.copy(this);const c=1/s,f=1/a,p=1/l;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=f,Dn.elements[5]*=f,Dn.elements[6]*=f,Dn.elements[8]*=p,Dn.elements[9]*=p,Dn.elements[10]*=p,e.setFromRotationMatrix(Dn),n.x=s,n.y=a,n.z=l,this}makePerspective(t,e,n,r,s,a,l=Xn,h=!1){const c=this.elements,f=2*s/(e-t),p=2*s/(n-r),g=(e+t)/(e-t),v=(n+r)/(n-r);let M,E;if(h)M=s/(a-s),E=a*s/(a-s);else if(l===Xn)M=-(a+s)/(a-s),E=-2*a*s/(a-s);else if(l===ro)M=-a/(a-s),E=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=f,c[4]=0,c[8]=g,c[12]=0,c[1]=0,c[5]=p,c[9]=v,c[13]=0,c[2]=0,c[6]=0,c[10]=M,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,a,l=Xn,h=!1){const c=this.elements,f=2/(e-t),p=2/(n-r),g=-(e+t)/(e-t),v=-(n+r)/(n-r);let M,E;if(h)M=1/(a-s),E=a/(a-s);else if(l===Xn)M=-2/(a-s),E=-(a+s)/(a-s);else if(l===ro)M=-1/(a-s),E=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=f,c[4]=0,c[8]=0,c[12]=g,c[1]=0,c[5]=p,c[9]=0,c[13]=v,c[2]=0,c[6]=0,c[10]=M,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const nr=new G,Dn=new Ae,Nf=new G(0,0,0),Ff=new G(1,1,1),gi=new G,As=new G,fn=new G,$l=new Ae,tc=new Nr;class li{constructor(t=0,e=0,n=0,r=li.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],l=r[8],h=r[1],c=r[5],f=r[9],p=r[2],g=r[6],v=r[10];switch(e){case"XYZ":this._y=Math.asin(oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,v),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(g,c),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(l,v),this._z=Math.atan2(h,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(oe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-p,v),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(h,s));break;case"ZYX":this._y=Math.asin(-oe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(g,v),this._z=Math.atan2(h,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(oe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(l,v));break;case"XZY":this._z=Math.asin(-oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(g,c),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-f,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return $l.makeRotationFromQuaternion(t),this.setFromRotationMatrix($l,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return tc.setFromEuler(this),this.setFromQuaternion(tc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}li.DEFAULT_ORDER="XYZ";class Au{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Of=0;const ec=new G,ir=new Nr,$n=new Ae,ws=new G,qr=new G,Bf=new G,zf=new Nr,nc=new G(1,0,0),ic=new G(0,1,0),rc=new G(0,0,1),sc={type:"added"},Hf={type:"removed"},rr={type:"childadded",child:null},Bo={type:"childremoved",child:null};class Ne extends Ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new G,e=new li,n=new Nr,r=new G(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ae},normalMatrix:{value:new Jt}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Au,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ir.setFromAxisAngle(t,e),this.quaternion.multiply(ir),this}rotateOnWorldAxis(t,e){return ir.setFromAxisAngle(t,e),this.quaternion.premultiply(ir),this}rotateX(t){return this.rotateOnAxis(nc,t)}rotateY(t){return this.rotateOnAxis(ic,t)}rotateZ(t){return this.rotateOnAxis(rc,t)}translateOnAxis(t,e){return ec.copy(t).applyQuaternion(this.quaternion),this.position.add(ec.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nc,t)}translateY(t){return this.translateOnAxis(ic,t)}translateZ(t){return this.translateOnAxis(rc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ws.copy(t):ws.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(qr,ws,this.up):$n.lookAt(ws,qr,this.up),this.quaternion.setFromRotationMatrix($n),r&&($n.extractRotation(r.matrixWorld),ir.setFromRotationMatrix($n),this.quaternion.premultiply(ir.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sc),rr.child=t,this.dispatchEvent(rr),rr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hf),Bo.child=t,this.dispatchEvent(Bo),Bo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sc),rr.child=t,this.dispatchEvent(rr),rr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,t,Bf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,zf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(l,h){return l[h.uuid]===void 0&&(l[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const h=l.shapes;if(Array.isArray(h))for(let c=0,f=h.length;c<f;c++){const p=h[c];s(t.shapes,p)}else s(t.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let h=0,c=this.material.length;h<c;h++)l.push(s(t.materials,this.material[h]));r.material=l}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const h=this.animations[l];r.animations.push(s(t.animations,h))}}if(e){const l=a(t.geometries),h=a(t.materials),c=a(t.textures),f=a(t.images),p=a(t.shapes),g=a(t.skeletons),v=a(t.animations),M=a(t.nodes);l.length>0&&(n.geometries=l),h.length>0&&(n.materials=h),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),p.length>0&&(n.shapes=p),g.length>0&&(n.skeletons=g),v.length>0&&(n.animations=v),M.length>0&&(n.nodes=M)}return n.object=r,n;function a(l){const h=[];for(const c in l){const f=l[c];delete f.metadata,h.push(f)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Ne.DEFAULT_UP=new G(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new G,ti=new G,zo=new G,ei=new G,sr=new G,or=new G,oc=new G,Ho=new G,Vo=new G,Go=new G,ko=new xe,Wo=new xe,Xo=new xe;class Rn{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Un.subVectors(t,e),r.cross(Un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Un.subVectors(r,e),ti.subVectors(n,e),zo.subVectors(t,e);const a=Un.dot(Un),l=Un.dot(ti),h=Un.dot(zo),c=ti.dot(ti),f=ti.dot(zo),p=a*c-l*l;if(p===0)return s.set(0,0,0),null;const g=1/p,v=(c*h-l*f)*g,M=(a*f-l*h)*g;return s.set(1-v-M,M,v)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(t,e,n,r,s,a,l,h){return this.getBarycoord(t,e,n,r,ei)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(s,ei.x),h.addScaledVector(a,ei.y),h.addScaledVector(l,ei.z),h)}static getInterpolatedAttribute(t,e,n,r,s,a){return ko.setScalar(0),Wo.setScalar(0),Xo.setScalar(0),ko.fromBufferAttribute(t,e),Wo.fromBufferAttribute(t,n),Xo.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(ko,s.x),a.addScaledVector(Wo,s.y),a.addScaledVector(Xo,s.z),a}static isFrontFacing(t,e,n,r){return Un.subVectors(n,e),ti.subVectors(t,e),Un.cross(ti).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Un.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Un.cross(ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Rn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Rn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,l;sr.subVectors(r,n),or.subVectors(s,n),Ho.subVectors(t,n);const h=sr.dot(Ho),c=or.dot(Ho);if(h<=0&&c<=0)return e.copy(n);Vo.subVectors(t,r);const f=sr.dot(Vo),p=or.dot(Vo);if(f>=0&&p<=f)return e.copy(r);const g=h*p-f*c;if(g<=0&&h>=0&&f<=0)return a=h/(h-f),e.copy(n).addScaledVector(sr,a);Go.subVectors(t,s);const v=sr.dot(Go),M=or.dot(Go);if(M>=0&&v<=M)return e.copy(s);const E=v*c-h*M;if(E<=0&&c>=0&&M<=0)return l=c/(c-M),e.copy(n).addScaledVector(or,l);const _=f*M-v*p;if(_<=0&&p-f>=0&&v-M>=0)return oc.subVectors(s,r),l=(p-f)/(p-f+(v-M)),e.copy(r).addScaledVector(oc,l);const d=1/(_+E+g);return a=E*d,l=g*d,e.copy(n).addScaledVector(sr,a).addScaledVector(or,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const wu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Rs={h:0,s:0,l:0};function Yo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ie{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_n){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=he.workingColorSpace){if(t=bf(t,1),e=oe(e,0,1),n=oe(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Yo(a,s,t+1/3),this.g=Yo(a,s,t),this.b=Yo(a,s,t-1/3)}return he.colorSpaceToWorking(this,r),this}setStyle(t,e=_n){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_n){const n=wu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=oi(t.r),this.g=oi(t.g),this.b=oi(t.b),this}copyLinearToSRGB(t){return this.r=Sr(t.r),this.g=Sr(t.g),this.b=Sr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_n){return he.workingToColorSpace(Ze.copy(this),t),Math.round(oe(Ze.r*255,0,255))*65536+Math.round(oe(Ze.g*255,0,255))*256+Math.round(oe(Ze.b*255,0,255))}getHexString(t=_n){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(Ze.copy(this),e);const n=Ze.r,r=Ze.g,s=Ze.b,a=Math.max(n,r,s),l=Math.min(n,r,s);let h,c;const f=(l+a)/2;if(l===a)h=0,c=0;else{const p=a-l;switch(c=f<=.5?p/(a+l):p/(2-a-l),a){case n:h=(r-s)/p+(r<s?6:0);break;case r:h=(s-n)/p+2;break;case s:h=(n-r)/p+4;break}h/=6}return t.h=h,t.s=c,t.l=f,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=_n){he.workingToColorSpace(Ze.copy(this),t);const e=Ze.r,n=Ze.g,r=Ze.b;return t!==_n?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(_i),this.setHSL(_i.h+t,_i.s+e,_i.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_i),t.getHSL(Rs);const n=Ro(_i.h,Rs.h,e),r=Ro(_i.s,Rs.s,e),s=Ro(_i.l,Rs.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ze=new ie;ie.NAMES=wu;let Vf=0;class qi extends Ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=Mr,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fa,this.blendDst=da,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ie(0,0,0),this.blendAlpha=0,this.depthFunc=Rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ql,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mr&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fa&&(n.blendSrc=this.blendSrc),this.blendDst!==da&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Rr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ql&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const l in s){const h=s[l];delete h.metadata,a.push(h)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class gr extends qi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=fu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ue=new G,Cs=new ee;let Gf=0;class Xe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$a,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Cs.fromBufferAttribute(this,e),Cs.applyMatrix3(t),this.setXY(e,Cs.x,Cs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Wn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Wn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Wn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Wn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),r=ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),r=ve(r,this.array),s=ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$a&&(t.usage=this.usage),t}}class Ru extends Xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Cu extends Xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class cn extends Xe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let kf=0;const bn=new Ae,qo=new Ne,ar=new G,dn=new us,jr=new us,He=new G;class $e extends Ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Tu(t)?Cu:Ru)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return bn.makeRotationFromQuaternion(t),this.applyMatrix4(bn),this}rotateX(t){return bn.makeRotationX(t),this.applyMatrix4(bn),this}rotateY(t){return bn.makeRotationY(t),this.applyMatrix4(bn),this}rotateZ(t){return bn.makeRotationZ(t),this.applyMatrix4(bn),this}translate(t,e,n){return bn.makeTranslation(t,e,n),this.applyMatrix4(bn),this}scale(t,e,n){return bn.makeScale(t,e,n),this.applyMatrix4(bn),this}lookAt(t){return qo.lookAt(t),qo.updateMatrix(),this.applyMatrix4(qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ar).negate(),this.translate(ar.x,ar.y,ar.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new cn(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new us);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const l=e[s];jr.setFromBufferAttribute(l),this.morphTargetsRelative?(He.addVectors(dn.min,jr.min),dn.expandByPoint(He),He.addVectors(dn.max,jr.max),dn.expandByPoint(He)):(dn.expandByPoint(jr.min),dn.expandByPoint(jr.max))}dn.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)He.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(He));if(e)for(let s=0,a=e.length;s<a;s++){const l=e[s],h=this.morphTargetsRelative;for(let c=0,f=l.count;c<f;c++)He.fromBufferAttribute(l,c),h&&(ar.fromBufferAttribute(t,c),He.add(ar)),r=Math.max(r,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),l=[],h=[];for(let B=0;B<n.count;B++)l[B]=new G,h[B]=new G;const c=new G,f=new G,p=new G,g=new ee,v=new ee,M=new ee,E=new G,_=new G;function d(B,y,T){c.fromBufferAttribute(n,B),f.fromBufferAttribute(n,y),p.fromBufferAttribute(n,T),g.fromBufferAttribute(s,B),v.fromBufferAttribute(s,y),M.fromBufferAttribute(s,T),f.sub(c),p.sub(c),v.sub(g),M.sub(g);const F=1/(v.x*M.y-M.x*v.y);isFinite(F)&&(E.copy(f).multiplyScalar(M.y).addScaledVector(p,-v.y).multiplyScalar(F),_.copy(p).multiplyScalar(v.x).addScaledVector(f,-M.x).multiplyScalar(F),l[B].add(E),l[y].add(E),l[T].add(E),h[B].add(_),h[y].add(_),h[T].add(_))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let B=0,y=P.length;B<y;++B){const T=P[B],F=T.start,k=T.count;for(let X=F,Y=F+k;X<Y;X+=3)d(t.getX(X+0),t.getX(X+1),t.getX(X+2))}const w=new G,A=new G,N=new G,R=new G;function O(B){N.fromBufferAttribute(r,B),R.copy(N);const y=l[B];w.copy(y),w.sub(N.multiplyScalar(N.dot(y))).normalize(),A.crossVectors(R,y);const F=A.dot(h[B])<0?-1:1;a.setXYZW(B,w.x,w.y,w.z,F)}for(let B=0,y=P.length;B<y;++B){const T=P[B],F=T.start,k=T.count;for(let X=F,Y=F+k;X<Y;X+=3)O(t.getX(X+0)),O(t.getX(X+1)),O(t.getX(X+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let g=0,v=n.count;g<v;g++)n.setXYZ(g,0,0,0);const r=new G,s=new G,a=new G,l=new G,h=new G,c=new G,f=new G,p=new G;if(t)for(let g=0,v=t.count;g<v;g+=3){const M=t.getX(g+0),E=t.getX(g+1),_=t.getX(g+2);r.fromBufferAttribute(e,M),s.fromBufferAttribute(e,E),a.fromBufferAttribute(e,_),f.subVectors(a,s),p.subVectors(r,s),f.cross(p),l.fromBufferAttribute(n,M),h.fromBufferAttribute(n,E),c.fromBufferAttribute(n,_),l.add(f),h.add(f),c.add(f),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(E,h.x,h.y,h.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let g=0,v=e.count;g<v;g+=3)r.fromBufferAttribute(e,g+0),s.fromBufferAttribute(e,g+1),a.fromBufferAttribute(e,g+2),f.subVectors(a,s),p.subVectors(r,s),f.cross(p),n.setXYZ(g+0,f.x,f.y,f.z),n.setXYZ(g+1,f.x,f.y,f.z),n.setXYZ(g+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(l,h){const c=l.array,f=l.itemSize,p=l.normalized,g=new c.constructor(h.length*f);let v=0,M=0;for(let E=0,_=h.length;E<_;E++){l.isInterleavedBufferAttribute?v=h[E]*l.data.stride+l.offset:v=h[E]*f;for(let d=0;d<f;d++)g[M++]=c[v++]}return new Xe(g,f,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new $e,n=this.index.array,r=this.attributes;for(const l in r){const h=r[l],c=t(h,n);e.setAttribute(l,c)}const s=this.morphAttributes;for(const l in s){const h=[],c=s[l];for(let f=0,p=c.length;f<p;f++){const g=c[f],v=t(g,n);h.push(v)}e.morphAttributes[l]=h}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,h=a.length;l<h;l++){const c=a[l];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const c in h)h[c]!==void 0&&(t[c]=h[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const h in n){const c=n[h];t.data.attributes[h]=c.toJSON(t.data)}const r={};let s=!1;for(const h in this.morphAttributes){const c=this.morphAttributes[h],f=[];for(let p=0,g=c.length;p<g;p++){const v=c[p];f.push(v.toJSON(t.data))}f.length>0&&(r[h]=f,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(e))}const s=t.morphAttributes;for(const c in s){const f=[],p=s[c];for(let g=0,v=p.length;g<v;g++)f.push(p[g].clone(e));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,f=a.length;c<f;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ac=new Ae,Di=new dl,Ps=new hs,lc=new G,Ls=new G,Ds=new G,Us=new G,jo=new G,Is=new G,cc=new G,Ns=new G;class yn extends Ne{constructor(t=new $e,e=new gr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const l=this.morphTargetInfluences;if(s&&l){Is.set(0,0,0);for(let h=0,c=s.length;h<c;h++){const f=l[h],p=s[h];f!==0&&(jo.fromBufferAttribute(p,t),a?Is.addScaledVector(jo,f):Is.addScaledVector(jo.sub(e),f))}e.add(Is)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(s),Di.copy(t.ray).recast(t.near),!(Ps.containsPoint(Di.origin)===!1&&(Di.intersectSphere(Ps,lc)===null||Di.origin.distanceToSquared(lc)>(t.far-t.near)**2))&&(ac.copy(s).invert(),Di.copy(t.ray).applyMatrix4(ac),!(n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Di)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,l=s.index,h=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,g=s.groups,v=s.drawRange;if(l!==null)if(Array.isArray(a))for(let M=0,E=g.length;M<E;M++){const _=g[M],d=a[_.materialIndex],P=Math.max(_.start,v.start),w=Math.min(l.count,Math.min(_.start+_.count,v.start+v.count));for(let A=P,N=w;A<N;A+=3){const R=l.getX(A),O=l.getX(A+1),B=l.getX(A+2);r=Fs(this,d,t,n,c,f,p,R,O,B),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=_.materialIndex,e.push(r))}}else{const M=Math.max(0,v.start),E=Math.min(l.count,v.start+v.count);for(let _=M,d=E;_<d;_+=3){const P=l.getX(_),w=l.getX(_+1),A=l.getX(_+2);r=Fs(this,a,t,n,c,f,p,P,w,A),r&&(r.faceIndex=Math.floor(_/3),e.push(r))}}else if(h!==void 0)if(Array.isArray(a))for(let M=0,E=g.length;M<E;M++){const _=g[M],d=a[_.materialIndex],P=Math.max(_.start,v.start),w=Math.min(h.count,Math.min(_.start+_.count,v.start+v.count));for(let A=P,N=w;A<N;A+=3){const R=A,O=A+1,B=A+2;r=Fs(this,d,t,n,c,f,p,R,O,B),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=_.materialIndex,e.push(r))}}else{const M=Math.max(0,v.start),E=Math.min(h.count,v.start+v.count);for(let _=M,d=E;_<d;_+=3){const P=_,w=_+1,A=_+2;r=Fs(this,a,t,n,c,f,p,P,w,A),r&&(r.faceIndex=Math.floor(_/3),e.push(r))}}}}function Wf(i,t,e,n,r,s,a,l){let h;if(t.side===ln?h=n.intersectTriangle(a,s,r,!0,l):h=n.intersectTriangle(r,s,a,t.side===wi,l),h===null)return null;Ns.copy(l),Ns.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ns);return c<e.near||c>e.far?null:{distance:c,point:Ns.clone(),object:i}}function Fs(i,t,e,n,r,s,a,l,h,c){i.getVertexPosition(l,Ls),i.getVertexPosition(h,Ds),i.getVertexPosition(c,Us);const f=Wf(i,t,e,n,Ls,Ds,Us,cc);if(f){const p=new G;Rn.getBarycoord(cc,Ls,Ds,Us,p),r&&(f.uv=Rn.getInterpolatedAttribute(r,l,h,c,p,new ee)),s&&(f.uv1=Rn.getInterpolatedAttribute(s,l,h,c,p,new ee)),a&&(f.normal=Rn.getInterpolatedAttribute(a,l,h,c,p,new G),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const g={a:l,b:h,c,normal:new G,materialIndex:0};Rn.getNormal(Ls,Ds,Us,g.normal),f.face=g,f.barycoord=p}return f}class fs extends $e{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const l=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const h=[],c=[],f=[],p=[];let g=0,v=0;M("z","y","x",-1,-1,n,e,t,a,s,0),M("z","y","x",1,-1,n,e,-t,a,s,1),M("x","z","y",1,1,t,n,e,r,a,2),M("x","z","y",1,-1,t,n,-e,r,a,3),M("x","y","z",1,-1,t,e,n,r,s,4),M("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(h),this.setAttribute("position",new cn(c,3)),this.setAttribute("normal",new cn(f,3)),this.setAttribute("uv",new cn(p,2));function M(E,_,d,P,w,A,N,R,O,B,y){const T=A/O,F=N/B,k=A/2,X=N/2,Y=R/2,Q=O+1,$=B+1;let st=0,K=0;const ft=new G;for(let yt=0;yt<$;yt++){const Lt=yt*F-X;for(let jt=0;jt<Q;jt++){const le=jt*T-k;ft[E]=le*P,ft[_]=Lt*w,ft[d]=Y,c.push(ft.x,ft.y,ft.z),ft[E]=0,ft[_]=0,ft[d]=R>0?1:-1,f.push(ft.x,ft.y,ft.z),p.push(jt/O),p.push(1-yt/B),st+=1}}for(let yt=0;yt<B;yt++)for(let Lt=0;Lt<O;Lt++){const jt=g+Lt+Q*yt,le=g+Lt+Q*(yt+1),Me=g+(Lt+1)+Q*(yt+1),ce=g+(Lt+1)+Q*yt;h.push(jt,le,ce),h.push(le,Me,ce),K+=6}l.addGroup(v,K,y),v+=K,g+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Dr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function rn(i){const t={};for(let e=0;e<i.length;e++){const n=Dr(i[e]);for(const r in n)t[r]=n[r]}return t}function Xf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Pu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const Yf={clone:Dr,merge:rn};var qf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ci extends qi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qf,this.fragmentShader=jf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Dr(t.uniforms),this.uniformsGroups=Xf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Lu extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vi=new G,uc=new ee,hc=new ee;class an extends Lu{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=so*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(wo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return so*2*Math.atan(Math.tan(wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vi.x,vi.y).multiplyScalar(-t/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-t/vi.z)}getViewSize(t,e){return this.getViewBounds(t,uc,hc),e.subVectors(hc,uc)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(wo*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const h=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/h,e-=a.offsetY*n/c,r*=a.width/h,n*=a.height/c}const l=this.filmOffset;l!==0&&(s+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const lr=-90,cr=1;class Kf extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new an(lr,cr,t,e);r.layers=this.layers,this.add(r);const s=new an(lr,cr,t,e);s.layers=this.layers,this.add(s);const a=new an(lr,cr,t,e);a.layers=this.layers,this.add(a);const l=new an(lr,cr,t,e);l.layers=this.layers,this.add(l);const h=new an(lr,cr,t,e);h.layers=this.layers,this.add(h);const c=new an(lr,cr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,l,h]=e;for(const c of e)this.remove(c);if(t===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===ro)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,l,h,c,f]=this.children,p=t.getRenderTarget(),g=t.getActiveCubeFace(),v=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,l),t.setRenderTarget(n,3,r),t.render(e,h),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=E,t.setRenderTarget(n,5,r),t.render(e,f),t.setRenderTarget(p,g,v),t.xr.enabled=M,n.texture.needsPMREMUpdate=!0}}class Du extends tn{constructor(t=[],e=Cr,n,r,s,a,l,h,c,f){super(t,e,n,r,s,a,l,h,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Zf extends Xi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Du(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new fs(5,5,5),s=new ci({name:"CubemapFromEquirect",uniforms:Dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:Ti});s.uniforms.tEquirect.value=e;const a=new yn(r,s),l=e.minFilter;return e.minFilter===yi&&(e.minFilter=Fn),new Kf(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}class Ei extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jf={type:"move"};class Ko{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const l=this._targetRay,h=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const E of t.hand.values()){const _=e.getJointPose(E,n),d=this._getHandJoint(c,E);_!==null&&(d.matrix.fromArray(_.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=_.radius),d.visible=_!==null}const f=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],g=f.position.distanceTo(p.position),v=.02,M=.005;c.inputState.pinching&&g>v+M?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&g<=v-M&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1));l!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Jf)))}return l!==null&&(l.visible=r!==null),h!==null&&(h.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ei;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Qf extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class $f{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=$a,this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const nn=new G;class oo{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Wn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Wn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Wn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Wn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),r=ve(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),r=ve(r,this.array),s=ve(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Xe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new oo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ts extends qi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ur;const Kr=new G,hr=new G,fr=new G,dr=new ee,Zr=new ee,Uu=new Ae,Os=new G,Jr=new G,Bs=new G,fc=new ee,Zo=new ee,dc=new ee;class zs extends Ne{constructor(t=new ts){if(super(),this.isSprite=!0,this.type="Sprite",ur===void 0){ur=new $e;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new $f(e,5);ur.setIndex([0,1,2,0,2,3]),ur.setAttribute("position",new oo(n,3,0,!1)),ur.setAttribute("uv",new oo(n,2,3,!1))}this.geometry=ur,this.material=t,this.center=new ee(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),hr.setFromMatrixScale(this.matrixWorld),Uu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),fr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&hr.multiplyScalar(-fr.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;Hs(Os.set(-.5,-.5,0),fr,a,hr,r,s),Hs(Jr.set(.5,-.5,0),fr,a,hr,r,s),Hs(Bs.set(.5,.5,0),fr,a,hr,r,s),fc.set(0,0),Zo.set(1,0),dc.set(1,1);let l=t.ray.intersectTriangle(Os,Jr,Bs,!1,Kr);if(l===null&&(Hs(Jr.set(-.5,.5,0),fr,a,hr,r,s),Zo.set(0,1),l=t.ray.intersectTriangle(Os,Bs,Jr,!1,Kr),l===null))return;const h=t.ray.origin.distanceTo(Kr);h<t.near||h>t.far||e.push({distance:h,point:Kr.clone(),uv:Rn.getInterpolation(Kr,Os,Jr,Bs,fc,Zo,dc,new ee),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Hs(i,t,e,n,r,s){dr.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(Zr.x=s*dr.x-r*dr.y,Zr.y=r*dr.x+s*dr.y):Zr.copy(dr),i.copy(t),i.x+=Zr.x,i.y+=Zr.y,i.applyMatrix4(Uu)}const Jo=new G,td=new G,ed=new Jt;class Fi{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Jo.subVectors(n,e).cross(td.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Jo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ed.getNormalMatrix(t),r=this.coplanarPoint(Jo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new hs,nd=new ee(.5,.5),Vs=new G;class pl{constructor(t=new Fi,e=new Fi,n=new Fi,r=new Fi,s=new Fi,a=new Fi){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(r),l[4].copy(s),l[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Xn,n=!1){const r=this.planes,s=t.elements,a=s[0],l=s[1],h=s[2],c=s[3],f=s[4],p=s[5],g=s[6],v=s[7],M=s[8],E=s[9],_=s[10],d=s[11],P=s[12],w=s[13],A=s[14],N=s[15];if(r[0].setComponents(c-a,v-f,d-M,N-P).normalize(),r[1].setComponents(c+a,v+f,d+M,N+P).normalize(),r[2].setComponents(c+l,v+p,d+E,N+w).normalize(),r[3].setComponents(c-l,v-p,d-E,N-w).normalize(),n)r[4].setComponents(h,g,_,A).normalize(),r[5].setComponents(c-h,v-g,d-_,N-A).normalize();else if(r[4].setComponents(c-h,v-g,d-_,N-A).normalize(),e===Xn)r[5].setComponents(c+h,v+g,d+_,N+A).normalize();else if(e===ro)r[5].setComponents(h,g,_,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(t){Ui.center.set(0,0,0);const e=nd.distanceTo(t.center);return Ui.radius=.7071067811865476+e,Ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Vs.x=r.normal.x>0?t.max.x:t.min.x,Vs.y=r.normal.y>0?t.max.y:t.min.y,Vs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Vs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class tl extends qi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ao=new G,lo=new G,pc=new Ae,Qr=new dl,Gs=new hs,Qo=new G,mc=new G;class gc extends Ne{constructor(t=new $e,e=new tl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)ao.fromBufferAttribute(e,r-1),lo.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=ao.distanceTo(lo);t.setAttribute("lineDistance",new cn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(r),Gs.radius+=s,t.ray.intersectsSphere(Gs)===!1)return;pc.copy(r).invert(),Qr.copy(t.ray).applyMatrix4(pc);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,c=this.isLineSegments?2:1,f=n.index,g=n.attributes.position;if(f!==null){const v=Math.max(0,a.start),M=Math.min(f.count,a.start+a.count);for(let E=v,_=M-1;E<_;E+=c){const d=f.getX(E),P=f.getX(E+1),w=ks(this,t,Qr,h,d,P,E);w&&e.push(w)}if(this.isLineLoop){const E=f.getX(M-1),_=f.getX(v),d=ks(this,t,Qr,h,E,_,M-1);d&&e.push(d)}}else{const v=Math.max(0,a.start),M=Math.min(g.count,a.start+a.count);for(let E=v,_=M-1;E<_;E+=c){const d=ks(this,t,Qr,h,E,E+1,E);d&&e.push(d)}if(this.isLineLoop){const E=ks(this,t,Qr,h,M-1,v,M-1);E&&e.push(E)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function ks(i,t,e,n,r,s,a){const l=i.geometry.attributes.position;if(ao.fromBufferAttribute(l,r),lo.fromBufferAttribute(l,s),e.distanceSqToSegment(ao,lo,Qo,mc)>n)return;Qo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Qo);if(!(c<t.near||c>t.far))return{distance:c,point:mc.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}class Iu extends qi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const _c=new Ae,el=new dl,Ws=new hs,Xs=new G;class vc extends Ne{constructor(t=new $e,e=new Iu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(r),Ws.radius+=s,t.ray.intersectsSphere(Ws)===!1)return;_c.copy(r).invert(),el.copy(t.ray).applyMatrix4(_c);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,c=n.index,p=n.attributes.position;if(c!==null){const g=Math.max(0,a.start),v=Math.min(c.count,a.start+a.count);for(let M=g,E=v;M<E;M++){const _=c.getX(M);Xs.fromBufferAttribute(p,_),xc(Xs,_,h,r,t,e,this)}}else{const g=Math.max(0,a.start),v=Math.min(p.count,a.start+a.count);for(let M=g,E=v;M<E;M++)Xs.fromBufferAttribute(p,M),xc(Xs,M,h,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function xc(i,t,e,n,r,s,a){const l=el.distanceSqToPoint(i);if(l<e){const h=new G;el.closestPointToPoint(i,h),h.applyMatrix4(n);const c=r.ray.origin.distanceTo(h);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(l),point:h,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Mc extends tn{constructor(t,e,n,r,s,a,l,h,c){super(t,e,n,r,s,a,l,h,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Nu extends tn{constructor(t,e,n=Wi,r,s,a,l=Hn,h=Hn,c,f=ss,p=1){if(f!==ss&&f!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:e,depth:p};super(g,r,s,a,l,h,f,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new fl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Fu extends tn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ml extends $e{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,l=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:l,thetaLength:h};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],p=[],g=[],v=[];let M=0;const E=[],_=n/2;let d=0;P(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(f),this.setAttribute("position",new cn(p,3)),this.setAttribute("normal",new cn(g,3)),this.setAttribute("uv",new cn(v,2));function P(){const A=new G,N=new G;let R=0;const O=(e-t)/n;for(let B=0;B<=s;B++){const y=[],T=B/s,F=T*(e-t)+t;for(let k=0;k<=r;k++){const X=k/r,Y=X*h+l,Q=Math.sin(Y),$=Math.cos(Y);N.x=F*Q,N.y=-T*n+_,N.z=F*$,p.push(N.x,N.y,N.z),A.set(Q,O,$).normalize(),g.push(A.x,A.y,A.z),v.push(X,1-T),y.push(M++)}E.push(y)}for(let B=0;B<r;B++)for(let y=0;y<s;y++){const T=E[y][B],F=E[y+1][B],k=E[y+1][B+1],X=E[y][B+1];(t>0||y!==0)&&(f.push(T,F,X),R+=3),(e>0||y!==s-1)&&(f.push(F,k,X),R+=3)}c.addGroup(d,R,0),d+=R}function w(A){const N=M,R=new ee,O=new G;let B=0;const y=A===!0?t:e,T=A===!0?1:-1;for(let k=1;k<=r;k++)p.push(0,_*T,0),g.push(0,T,0),v.push(.5,.5),M++;const F=M;for(let k=0;k<=r;k++){const Y=k/r*h+l,Q=Math.cos(Y),$=Math.sin(Y);O.x=y*$,O.y=_*T,O.z=y*Q,p.push(O.x,O.y,O.z),g.push(0,T,0),R.x=Q*.5+.5,R.y=$*.5*T+.5,v.push(R.x,R.y),M++}for(let k=0;k<r;k++){const X=N+k,Y=F+k;A===!0?f.push(Y,Y+1,X):f.push(Y+1,Y,X),B+=3}c.addGroup(d,B,A===!0?1:2),d+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ml(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ds extends $e{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,l=Math.floor(n),h=Math.floor(r),c=l+1,f=h+1,p=t/l,g=e/h,v=[],M=[],E=[],_=[];for(let d=0;d<f;d++){const P=d*g-a;for(let w=0;w<c;w++){const A=w*p-s;M.push(A,-P,0),E.push(0,0,1),_.push(w/l),_.push(1-d/h)}}for(let d=0;d<h;d++)for(let P=0;P<l;P++){const w=P+c*d,A=P+c*(d+1),N=P+1+c*(d+1),R=P+1+c*d;v.push(w,A,R),v.push(A,N,R)}this.setIndex(v),this.setAttribute("position",new cn(M,3)),this.setAttribute("normal",new cn(E,3)),this.setAttribute("uv",new cn(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ds(t.width,t.height,t.widthSegments,t.heightSegments)}}class co extends $e{constructor(t=.5,e=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const l=[],h=[],c=[],f=[];let p=t;const g=(e-t)/r,v=new G,M=new ee;for(let E=0;E<=r;E++){for(let _=0;_<=n;_++){const d=s+_/n*a;v.x=p*Math.cos(d),v.y=p*Math.sin(d),h.push(v.x,v.y,v.z),c.push(0,0,1),M.x=(v.x/e+1)/2,M.y=(v.y/e+1)/2,f.push(M.x,M.y)}p+=g}for(let E=0;E<r;E++){const _=E*(n+1);for(let d=0;d<n;d++){const P=d+_,w=P,A=P+n+1,N=P+n+2,R=P+1;l.push(w,A,R),l.push(A,N,R)}}this.setIndex(l),this.setAttribute("position",new cn(h,3)),this.setAttribute("normal",new cn(c,3)),this.setAttribute("uv",new cn(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new co(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class id extends qi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class rd extends qi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const $o={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class sd{constructor(t,e,n){const r=this;let s=!1,a=0,l=0,h;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(f){l++,s===!1&&r.onStart!==void 0&&r.onStart(f,a,l),s=!0},this.itemEnd=function(f){a++,r.onProgress!==void 0&&r.onProgress(f,a,l),a===l&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return h?h(f):f},this.setURLModifier=function(f){return h=f,this},this.addHandler=function(f,p){return c.push(f,p),this},this.removeHandler=function(f){const p=c.indexOf(f);return p!==-1&&c.splice(p,2),this},this.getHandler=function(f){for(let p=0,g=c.length;p<g;p+=2){const v=c[p],M=c[p+1];if(v.global&&(v.lastIndex=0),v.test(f))return M}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const od=new sd;class gl{constructor(t){this.manager=t!==void 0?t:od,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}gl.DEFAULT_MATERIAL_NAME="__DEFAULT";const pr=new WeakMap;class ad extends gl{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=$o.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0);else{let p=pr.get(a);p===void 0&&(p=[],pr.set(a,p)),p.push({onLoad:e,onError:r})}return a}const l=as("img");function h(){f(),e&&e(this);const p=pr.get(this)||[];for(let g=0;g<p.length;g++){const v=p[g];v.onLoad&&v.onLoad(this)}pr.delete(this),s.manager.itemEnd(t)}function c(p){f(),r&&r(p),$o.remove(`image:${t}`);const g=pr.get(this)||[];for(let v=0;v<g.length;v++){const M=g[v];M.onError&&M.onError(p)}pr.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function f(){l.removeEventListener("load",h,!1),l.removeEventListener("error",c,!1)}return l.addEventListener("load",h,!1),l.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),$o.add(`image:${t}`,l),s.manager.itemStart(t),l.src=t,l}}class ld extends gl{constructor(t){super(t)}load(t,e,n,r){const s=new tn,a=new ad(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(l){s.image=l,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}}class Ou extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ie(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const ta=new Ae,Sc=new G,yc=new G;class Bu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.mapType=Yn,this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pl,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Sc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sc),yc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yc),e.updateMatrixWorld(),ta.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ta,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ta)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class cd extends Bu{constructor(){super(new an(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=so*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;(n!==e.fov||r!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=r,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class ud extends Ou{constructor(t,e,n=0,r=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new cd}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Ec=new Ae,$r=new G,ea=new G;class hd extends Bu{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ee(4,2),this._viewportCount=6,this._viewports=[new xe(2,1,1,1),new xe(0,1,1,1),new xe(3,1,1,1),new xe(1,1,1,1),new xe(3,0,1,1),new xe(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),$r.setFromMatrixPosition(t.matrixWorld),n.position.copy($r),ea.copy(n.position),ea.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ea),n.updateMatrixWorld(),r.makeTranslation(-$r.x,-$r.y,-$r.z),Ec.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ec,n.coordinateSystem,n.reversedDepth)}}class na extends Ou{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new hd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class fd extends Lu{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,l=r+e,h=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,l-=f*this.view.offsetY,h=l-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,l,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class dd extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Tc(i,t,e,n){const r=pd(n);switch(e){case xu:return i*t;case Su:return i*t/r.components*r.byteLength;case cl:return i*t/r.components*r.byteLength;case yu:return i*t*2/r.components*r.byteLength;case ul:return i*t*2/r.components*r.byteLength;case Mu:return i*t*3/r.components*r.byteLength;case On:return i*t*4/r.components*r.byteLength;case hl:return i*t*4/r.components*r.byteLength;case Js:case Qs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $s:case to:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Aa:case Ra:return Math.max(i,16)*Math.max(t,8)/4;case ba:case wa:return Math.max(i,8)*Math.max(t,8)/2;case Ca:case Pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case La:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ua:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ia:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Na:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case za:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Va:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ka:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Wa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Xa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ya:case qa:case ja:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ka:case Za:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ja:case Qa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function pd(i){switch(i){case Yn:case mu:return{byteLength:1,components:1};case is:case gu:case cs:return{byteLength:2,components:1};case al:case ll:return{byteLength:2,components:4};case Wi:case ol:case si:return{byteLength:4,components:1};case _u:case vu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sl);function zu(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function md(i){const t=new WeakMap;function e(l,h){const c=l.array,f=l.usage,p=c.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,c,f),l.onUploadCallback();let v;if(c instanceof Float32Array)v=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)v=i.HALF_FLOAT;else if(c instanceof Uint16Array)l.isFloat16BufferAttribute?v=i.HALF_FLOAT:v=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)v=i.SHORT;else if(c instanceof Uint32Array)v=i.UNSIGNED_INT;else if(c instanceof Int32Array)v=i.INT;else if(c instanceof Int8Array)v=i.BYTE;else if(c instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:g,type:v,bytesPerElement:c.BYTES_PER_ELEMENT,version:l.version,size:p}}function n(l,h,c){const f=h.array,p=h.updateRanges;if(i.bindBuffer(c,l),p.length===0)i.bufferSubData(c,0,f);else{p.sort((v,M)=>v.start-M.start);let g=0;for(let v=1;v<p.length;v++){const M=p[g],E=p[v];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++g,p[g]=E)}p.length=g+1;for(let v=0,M=p.length;v<M;v++){const E=p[v];i.bufferSubData(c,E.start*f.BYTES_PER_ELEMENT,f,E.start,E.count)}h.clearUpdateRanges()}h.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=t.get(l);h&&(i.deleteBuffer(h.buffer),t.delete(l))}function a(l,h){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const f=t.get(l);(!f||f.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const c=t.get(l);if(c===void 0)t.set(l,e(l,h));else if(c.version<l.version){if(c.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,l,h),c.version=l.version}}return{get:r,remove:s,update:a}}var gd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_d=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Md=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ed=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Td=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,bd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ad=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Cd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Pd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,zd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Hd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Vd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Gd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yd="gl_FragColor = linearToOutputTexel( gl_FragColor );",qd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Kd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$d=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ep=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,np=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ip=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,op=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ap=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,up=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,pp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_p=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ep=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ap=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Dp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Up=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ip=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Op=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Xp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Qp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$p=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,tm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,em=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,im=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,om=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,am=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,um=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,pm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ym=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Em=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Tm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Am=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Pm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Um=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Im=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Fm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Om=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Hm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,km=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Wm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ym=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,te={alphahash_fragment:gd,alphahash_pars_fragment:_d,alphamap_fragment:vd,alphamap_pars_fragment:xd,alphatest_fragment:Md,alphatest_pars_fragment:Sd,aomap_fragment:yd,aomap_pars_fragment:Ed,batching_pars_vertex:Td,batching_vertex:bd,begin_vertex:Ad,beginnormal_vertex:wd,bsdfs:Rd,iridescence_fragment:Cd,bumpmap_pars_fragment:Pd,clipping_planes_fragment:Ld,clipping_planes_pars_fragment:Dd,clipping_planes_pars_vertex:Ud,clipping_planes_vertex:Id,color_fragment:Nd,color_pars_fragment:Fd,color_pars_vertex:Od,color_vertex:Bd,common:zd,cube_uv_reflection_fragment:Hd,defaultnormal_vertex:Vd,displacementmap_pars_vertex:Gd,displacementmap_vertex:kd,emissivemap_fragment:Wd,emissivemap_pars_fragment:Xd,colorspace_fragment:Yd,colorspace_pars_fragment:qd,envmap_fragment:jd,envmap_common_pars_fragment:Kd,envmap_pars_fragment:Zd,envmap_pars_vertex:Jd,envmap_physical_pars_fragment:lp,envmap_vertex:Qd,fog_vertex:$d,fog_pars_vertex:tp,fog_fragment:ep,fog_pars_fragment:np,gradientmap_pars_fragment:ip,lightmap_pars_fragment:rp,lights_lambert_fragment:sp,lights_lambert_pars_fragment:op,lights_pars_begin:ap,lights_toon_fragment:cp,lights_toon_pars_fragment:up,lights_phong_fragment:hp,lights_phong_pars_fragment:fp,lights_physical_fragment:dp,lights_physical_pars_fragment:pp,lights_fragment_begin:mp,lights_fragment_maps:gp,lights_fragment_end:_p,logdepthbuf_fragment:vp,logdepthbuf_pars_fragment:xp,logdepthbuf_pars_vertex:Mp,logdepthbuf_vertex:Sp,map_fragment:yp,map_pars_fragment:Ep,map_particle_fragment:Tp,map_particle_pars_fragment:bp,metalnessmap_fragment:Ap,metalnessmap_pars_fragment:wp,morphinstance_vertex:Rp,morphcolor_vertex:Cp,morphnormal_vertex:Pp,morphtarget_pars_vertex:Lp,morphtarget_vertex:Dp,normal_fragment_begin:Up,normal_fragment_maps:Ip,normal_pars_fragment:Np,normal_pars_vertex:Fp,normal_vertex:Op,normalmap_pars_fragment:Bp,clearcoat_normal_fragment_begin:zp,clearcoat_normal_fragment_maps:Hp,clearcoat_pars_fragment:Vp,iridescence_pars_fragment:Gp,opaque_fragment:kp,packing:Wp,premultiplied_alpha_fragment:Xp,project_vertex:Yp,dithering_fragment:qp,dithering_pars_fragment:jp,roughnessmap_fragment:Kp,roughnessmap_pars_fragment:Zp,shadowmap_pars_fragment:Jp,shadowmap_pars_vertex:Qp,shadowmap_vertex:$p,shadowmask_pars_fragment:tm,skinbase_vertex:em,skinning_pars_vertex:nm,skinning_vertex:im,skinnormal_vertex:rm,specularmap_fragment:sm,specularmap_pars_fragment:om,tonemapping_fragment:am,tonemapping_pars_fragment:lm,transmission_fragment:cm,transmission_pars_fragment:um,uv_pars_fragment:hm,uv_pars_vertex:fm,uv_vertex:dm,worldpos_vertex:pm,background_vert:mm,background_frag:gm,backgroundCube_vert:_m,backgroundCube_frag:vm,cube_vert:xm,cube_frag:Mm,depth_vert:Sm,depth_frag:ym,distanceRGBA_vert:Em,distanceRGBA_frag:Tm,equirect_vert:bm,equirect_frag:Am,linedashed_vert:wm,linedashed_frag:Rm,meshbasic_vert:Cm,meshbasic_frag:Pm,meshlambert_vert:Lm,meshlambert_frag:Dm,meshmatcap_vert:Um,meshmatcap_frag:Im,meshnormal_vert:Nm,meshnormal_frag:Fm,meshphong_vert:Om,meshphong_frag:Bm,meshphysical_vert:zm,meshphysical_frag:Hm,meshtoon_vert:Vm,meshtoon_frag:Gm,points_vert:km,points_frag:Wm,shadow_vert:Xm,shadow_frag:Ym,sprite_vert:qm,sprite_frag:jm},Mt={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},kn={basic:{uniforms:rn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:rn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new ie(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:rn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:rn([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:rn([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new ie(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:rn([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:rn([Mt.points,Mt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:rn([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:rn([Mt.common,Mt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:rn([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:rn([Mt.sprite,Mt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:rn([Mt.common,Mt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:rn([Mt.lights,Mt.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};kn.physical={uniforms:rn([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const Ys={r:0,b:0,g:0},Ii=new li,Km=new Ae;function Zm(i,t,e,n,r,s,a){const l=new ie(0);let h=s===!0?0:1,c,f,p=null,g=0,v=null;function M(w){let A=w.isScene===!0?w.background:null;return A&&A.isTexture&&(A=(w.backgroundBlurriness>0?e:t).get(A)),A}function E(w){let A=!1;const N=M(w);N===null?d(l,h):N&&N.isColor&&(d(N,1),A=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(w,A){const N=M(A);N&&(N.isCubeTexture||N.mapping===fo)?(f===void 0&&(f=new yn(new fs(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:Dr(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(R,O,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Ii.copy(A.backgroundRotation),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),f.material.uniforms.envMap.value=N,f.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Km.makeRotationFromEuler(Ii)),f.material.toneMapped=he.getTransfer(N.colorSpace)!==_e,(p!==N||g!==N.version||v!==i.toneMapping)&&(f.material.needsUpdate=!0,p=N,g=N.version,v=i.toneMapping),f.layers.enableAll(),w.unshift(f,f.geometry,f.material,0,0,null)):N&&N.isTexture&&(c===void 0&&(c=new yn(new ds(2,2),new ci({name:"BackgroundMaterial",uniforms:Dr(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=N,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=he.getTransfer(N.colorSpace)!==_e,N.matrixAutoUpdate===!0&&N.updateMatrix(),c.material.uniforms.uvTransform.value.copy(N.matrix),(p!==N||g!==N.version||v!==i.toneMapping)&&(c.material.needsUpdate=!0,p=N,g=N.version,v=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function d(w,A){w.getRGB(Ys,Pu(i)),n.buffers.color.setClear(Ys.r,Ys.g,Ys.b,A,a)}function P(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return l},setClearColor:function(w,A=1){l.set(w),h=A,d(l,h)},getClearAlpha:function(){return h},setClearAlpha:function(w){h=w,d(l,h)},render:E,addToRenderList:_,dispose:P}}function Jm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=g(null);let s=r,a=!1;function l(T,F,k,X,Y){let Q=!1;const $=p(X,k,F);s!==$&&(s=$,c(s.object)),Q=v(T,X,k,Y),Q&&M(T,X,k,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,A(T,F,k,X),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function h(){return i.createVertexArray()}function c(T){return i.bindVertexArray(T)}function f(T){return i.deleteVertexArray(T)}function p(T,F,k){const X=k.wireframe===!0;let Y=n[T.id];Y===void 0&&(Y={},n[T.id]=Y);let Q=Y[F.id];Q===void 0&&(Q={},Y[F.id]=Q);let $=Q[X];return $===void 0&&($=g(h()),Q[X]=$),$}function g(T){const F=[],k=[],X=[];for(let Y=0;Y<e;Y++)F[Y]=0,k[Y]=0,X[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:k,attributeDivisors:X,object:T,attributes:{},index:null}}function v(T,F,k,X){const Y=s.attributes,Q=F.attributes;let $=0;const st=k.getAttributes();for(const K in st)if(st[K].location>=0){const yt=Y[K];let Lt=Q[K];if(Lt===void 0&&(K==="instanceMatrix"&&T.instanceMatrix&&(Lt=T.instanceMatrix),K==="instanceColor"&&T.instanceColor&&(Lt=T.instanceColor)),yt===void 0||yt.attribute!==Lt||Lt&&yt.data!==Lt.data)return!0;$++}return s.attributesNum!==$||s.index!==X}function M(T,F,k,X){const Y={},Q=F.attributes;let $=0;const st=k.getAttributes();for(const K in st)if(st[K].location>=0){let yt=Q[K];yt===void 0&&(K==="instanceMatrix"&&T.instanceMatrix&&(yt=T.instanceMatrix),K==="instanceColor"&&T.instanceColor&&(yt=T.instanceColor));const Lt={};Lt.attribute=yt,yt&&yt.data&&(Lt.data=yt.data),Y[K]=Lt,$++}s.attributes=Y,s.attributesNum=$,s.index=X}function E(){const T=s.newAttributes;for(let F=0,k=T.length;F<k;F++)T[F]=0}function _(T){d(T,0)}function d(T,F){const k=s.newAttributes,X=s.enabledAttributes,Y=s.attributeDivisors;k[T]=1,X[T]===0&&(i.enableVertexAttribArray(T),X[T]=1),Y[T]!==F&&(i.vertexAttribDivisor(T,F),Y[T]=F)}function P(){const T=s.newAttributes,F=s.enabledAttributes;for(let k=0,X=F.length;k<X;k++)F[k]!==T[k]&&(i.disableVertexAttribArray(k),F[k]=0)}function w(T,F,k,X,Y,Q,$){$===!0?i.vertexAttribIPointer(T,F,k,Y,Q):i.vertexAttribPointer(T,F,k,X,Y,Q)}function A(T,F,k,X){E();const Y=X.attributes,Q=k.getAttributes(),$=F.defaultAttributeValues;for(const st in Q){const K=Q[st];if(K.location>=0){let ft=Y[st];if(ft===void 0&&(st==="instanceMatrix"&&T.instanceMatrix&&(ft=T.instanceMatrix),st==="instanceColor"&&T.instanceColor&&(ft=T.instanceColor)),ft!==void 0){const yt=ft.normalized,Lt=ft.itemSize,jt=t.get(ft);if(jt===void 0)continue;const le=jt.buffer,Me=jt.type,ce=jt.bytesPerElement,nt=Me===i.INT||Me===i.UNSIGNED_INT||ft.gpuType===ol;if(ft.isInterleavedBufferAttribute){const ot=ft.data,At=ot.stride,Gt=ft.offset;if(ot.isInstancedInterleavedBuffer){for(let Ut=0;Ut<K.locationSize;Ut++)d(K.location+Ut,ot.meshPerAttribute);T.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Ut=0;Ut<K.locationSize;Ut++)_(K.location+Ut);i.bindBuffer(i.ARRAY_BUFFER,le);for(let Ut=0;Ut<K.locationSize;Ut++)w(K.location+Ut,Lt/K.locationSize,Me,yt,At*ce,(Gt+Lt/K.locationSize*Ut)*ce,nt)}else{if(ft.isInstancedBufferAttribute){for(let ot=0;ot<K.locationSize;ot++)d(K.location+ot,ft.meshPerAttribute);T.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let ot=0;ot<K.locationSize;ot++)_(K.location+ot);i.bindBuffer(i.ARRAY_BUFFER,le);for(let ot=0;ot<K.locationSize;ot++)w(K.location+ot,Lt/K.locationSize,Me,yt,Lt*ce,Lt/K.locationSize*ot*ce,nt)}}else if($!==void 0){const yt=$[st];if(yt!==void 0)switch(yt.length){case 2:i.vertexAttrib2fv(K.location,yt);break;case 3:i.vertexAttrib3fv(K.location,yt);break;case 4:i.vertexAttrib4fv(K.location,yt);break;default:i.vertexAttrib1fv(K.location,yt)}}}}P()}function N(){B();for(const T in n){const F=n[T];for(const k in F){const X=F[k];for(const Y in X)f(X[Y].object),delete X[Y];delete F[k]}delete n[T]}}function R(T){if(n[T.id]===void 0)return;const F=n[T.id];for(const k in F){const X=F[k];for(const Y in X)f(X[Y].object),delete X[Y];delete F[k]}delete n[T.id]}function O(T){for(const F in n){const k=n[F];if(k[T.id]===void 0)continue;const X=k[T.id];for(const Y in X)f(X[Y].object),delete X[Y];delete k[T.id]}}function B(){y(),a=!0,s!==r&&(s=r,c(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:B,resetDefaultState:y,dispose:N,releaseStatesOfGeometry:R,releaseStatesOfProgram:O,initAttributes:E,enableAttribute:_,disableUnusedAttributes:P}}function Qm(i,t,e){let n;function r(c){n=c}function s(c,f){i.drawArrays(n,c,f),e.update(f,n,1)}function a(c,f,p){p!==0&&(i.drawArraysInstanced(n,c,f,p),e.update(f,n,p))}function l(c,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,f,0,p);let v=0;for(let M=0;M<p;M++)v+=f[M];e.update(v,n,1)}function h(c,f,p,g){if(p===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let M=0;M<c.length;M++)a(c[M],f[M],g[M]);else{v.multiDrawArraysInstancedWEBGL(n,c,0,f,0,g,0,p);let M=0;for(let E=0;E<p;E++)M+=f[E]*g[E];e.update(M,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=l,this.renderMultiDrawInstances=h}function $m(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(O){return!(O!==On&&n.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(O){const B=O===cs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==Yn&&n.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==si&&!B)}function h(O){if(O==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const f=h(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const p=e.logarithmicDepthBuffer===!0,g=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),v=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),P=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=M>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:h,textureFormatReadable:a,textureTypeReadable:l,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:g,maxTextures:v,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:_,maxAttributes:d,maxVertexUniforms:P,maxVaryings:w,maxFragmentUniforms:A,vertexTextures:N,maxSamples:R}}function tg(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new Fi,l=new Jt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(p,g){const v=p.length!==0||g||n!==0||r;return r=g,n=p.length,v},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,g){e=f(p,g,0)},this.setState=function(p,g,v){const M=p.clippingPlanes,E=p.clipIntersection,_=p.clipShadows,d=i.get(p);if(!r||M===null||M.length===0||s&&!_)s?f(null):c();else{const P=s?0:n,w=P*4;let A=d.clippingState||null;h.value=A,A=f(M,g,w,v);for(let N=0;N!==w;++N)A[N]=e[N];d.clippingState=A,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=P}};function c(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(p,g,v,M){const E=p!==null?p.length:0;let _=null;if(E!==0){if(_=h.value,M!==!0||_===null){const d=v+E*4,P=g.matrixWorldInverse;l.getNormalMatrix(P),(_===null||_.length<d)&&(_=new Float32Array(d));for(let w=0,A=v;w!==E;++w,A+=4)a.copy(p[w]).applyMatrix4(P,l),a.normal.toArray(_,A),_[A+3]=a.constant}h.value=_,h.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,_}}function eg(i){let t=new WeakMap;function e(a,l){return l===Sa?a.mapping=Cr:l===ya&&(a.mapping=Pr),a}function n(a){if(a&&a.isTexture){const l=a.mapping;if(l===Sa||l===ya)if(t.has(a)){const h=t.get(a).texture;return e(h,a.mapping)}else{const h=a.image;if(h&&h.height>0){const c=new Zf(h.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const l=a.target;l.removeEventListener("dispose",r);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const _r=4,bc=[.125,.215,.35,.446,.526,.582],zi=20,ia=new fd,Ac=new ie;let ra=null,sa=0,oa=0,aa=!1;const Oi=(1+Math.sqrt(5))/2,mr=1/Oi,wc=[new G(-Oi,mr,0),new G(Oi,mr,0),new G(-mr,0,Oi),new G(mr,0,Oi),new G(0,Oi,-mr),new G(0,Oi,mr),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)],ng=new G;class Rc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100,s={}){const{size:a=256,position:l=ng}=s;ra=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),oa=this._renderer.getActiveMipmapLevel(),aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,n,r,h,l),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ra,sa,oa),this._renderer.xr.enabled=aa,t.scissorTest=!1,qs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Cr||t.mapping===Pr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ra=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),oa=this._renderer.getActiveMipmapLevel(),aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:cs,format:On,colorSpace:Lr,depthBuffer:!1},r=Cc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ig(s)),this._blurMaterial=rg(s,t,e)}return r}_compileMaterial(t){const e=new yn(this._lodPlanes[0],t);this._renderer.compile(e,ia)}_sceneToCubeUV(t,e,n,r,s){const h=new an(90,1,e,n),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,v=p.toneMapping;p.getClearColor(Ac),p.toneMapping=bi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null));const E=new gr({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),_=new yn(new fs,E);let d=!1;const P=t.background;P?P.isColor&&(E.color.copy(P),t.background=null,d=!0):(E.color.copy(Ac),d=!0);for(let w=0;w<6;w++){const A=w%3;A===0?(h.up.set(0,c[w],0),h.position.set(s.x,s.y,s.z),h.lookAt(s.x+f[w],s.y,s.z)):A===1?(h.up.set(0,0,c[w]),h.position.set(s.x,s.y,s.z),h.lookAt(s.x,s.y+f[w],s.z)):(h.up.set(0,c[w],0),h.position.set(s.x,s.y,s.z),h.lookAt(s.x,s.y,s.z+f[w]));const N=this._cubeSize;qs(r,A*N,w>2?N:0,N,N),p.setRenderTarget(r),d&&p.render(_,h),p.render(t,h)}_.geometry.dispose(),_.material.dispose(),p.toneMapping=v,p.autoClear=g,t.background=P}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Cr||t.mapping===Pr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new yn(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=t;const h=this._cubeSize;qs(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(a,ia)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),l=wc[(r-s-1)%wc.length];this._blur(t,s-1,s,a,l)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,l){const h=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,p=new yn(this._lodPlanes[r],c),g=c.uniforms,v=this._sizeLods[n]-1,M=isFinite(s)?Math.PI/(2*v):2*Math.PI/(2*zi-1),E=s/M,_=isFinite(s)?1+Math.floor(f*E):zi;_>zi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${zi}`);const d=[];let P=0;for(let O=0;O<zi;++O){const B=O/E,y=Math.exp(-B*B/2);d.push(y),O===0?P+=y:O<_&&(P+=2*y)}for(let O=0;O<d.length;O++)d[O]=d[O]/P;g.envMap.value=t.texture,g.samples.value=_,g.weights.value=d,g.latitudinal.value=a==="latitudinal",l&&(g.poleAxis.value=l);const{_lodMax:w}=this;g.dTheta.value=M,g.mipInt.value=w-n;const A=this._sizeLods[r],N=3*A*(r>w-_r?r-w+_r:0),R=4*(this._cubeSize-A);qs(e,N,R,3*A,2*A),h.setRenderTarget(e),h.render(p,ia)}}function ig(i){const t=[],e=[],n=[];let r=i;const s=i-_r+1+bc.length;for(let a=0;a<s;a++){const l=Math.pow(2,r);e.push(l);let h=1/l;a>i-_r?h=bc[a-i+_r-1]:a===0&&(h=0),n.push(h);const c=1/(l-2),f=-c,p=1+c,g=[f,f,p,f,p,p,f,f,p,p,f,p],v=6,M=6,E=3,_=2,d=1,P=new Float32Array(E*M*v),w=new Float32Array(_*M*v),A=new Float32Array(d*M*v);for(let R=0;R<v;R++){const O=R%3*2/3-1,B=R>2?0:-1,y=[O,B,0,O+2/3,B,0,O+2/3,B+1,0,O,B,0,O+2/3,B+1,0,O,B+1,0];P.set(y,E*M*R),w.set(g,_*M*R);const T=[R,R,R,R,R,R];A.set(T,d*M*R)}const N=new $e;N.setAttribute("position",new Xe(P,E)),N.setAttribute("uv",new Xe(w,_)),N.setAttribute("faceIndex",new Xe(A,d)),t.push(N),r>_r&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Cc(i,t,e){const n=new Xi(i,t,e);return n.texture.mapping=fo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qs(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function rg(i,t,e){const n=new Float32Array(zi),r=new G(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Pc(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Lc(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function _l(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sg(i){let t=new WeakMap,e=null;function n(l){if(l&&l.isTexture){const h=l.mapping,c=h===Sa||h===ya,f=h===Cr||h===Pr;if(c||f){let p=t.get(l);const g=p!==void 0?p.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==g)return e===null&&(e=new Rc(i)),p=c?e.fromEquirectangular(l,p):e.fromCubemap(l,p),p.texture.pmremVersion=l.pmremVersion,t.set(l,p),p.texture;if(p!==void 0)return p.texture;{const v=l.image;return c&&v&&v.height>0||f&&v&&r(v)?(e===null&&(e=new Rc(i)),p=c?e.fromEquirectangular(l):e.fromCubemap(l),p.texture.pmremVersion=l.pmremVersion,t.set(l,p),l.addEventListener("dispose",s),p.texture):null}}}return l}function r(l){let h=0;const c=6;for(let f=0;f<c;f++)l[f]!==void 0&&h++;return h===c}function s(l){const h=l.target;h.removeEventListener("dispose",s);const c=t.get(h);c!==void 0&&(t.delete(h),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function og(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&ls("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function ag(i,t,e,n){const r={},s=new WeakMap;function a(p){const g=p.target;g.index!==null&&t.remove(g.index);for(const M in g.attributes)t.remove(g.attributes[M]);g.removeEventListener("dispose",a),delete r[g.id];const v=s.get(g);v&&(t.remove(v),s.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function l(p,g){return r[g.id]===!0||(g.addEventListener("dispose",a),r[g.id]=!0,e.memory.geometries++),g}function h(p){const g=p.attributes;for(const v in g)t.update(g[v],i.ARRAY_BUFFER)}function c(p){const g=[],v=p.index,M=p.attributes.position;let E=0;if(v!==null){const P=v.array;E=v.version;for(let w=0,A=P.length;w<A;w+=3){const N=P[w+0],R=P[w+1],O=P[w+2];g.push(N,R,R,O,O,N)}}else if(M!==void 0){const P=M.array;E=M.version;for(let w=0,A=P.length/3-1;w<A;w+=3){const N=w+0,R=w+1,O=w+2;g.push(N,R,R,O,O,N)}}else return;const _=new(Tu(g)?Cu:Ru)(g,1);_.version=E;const d=s.get(p);d&&t.remove(d),s.set(p,_)}function f(p){const g=s.get(p);if(g){const v=p.index;v!==null&&g.version<v.version&&c(p)}else c(p);return s.get(p)}return{get:l,update:h,getWireframeAttribute:f}}function lg(i,t,e){let n;function r(g){n=g}let s,a;function l(g){s=g.type,a=g.bytesPerElement}function h(g,v){i.drawElements(n,v,s,g*a),e.update(v,n,1)}function c(g,v,M){M!==0&&(i.drawElementsInstanced(n,v,s,g*a,M),e.update(v,n,M))}function f(g,v,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,v,0,s,g,0,M);let _=0;for(let d=0;d<M;d++)_+=v[d];e.update(_,n,1)}function p(g,v,M,E){if(M===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let d=0;d<g.length;d++)c(g[d]/a,v[d],E[d]);else{_.multiDrawElementsInstancedWEBGL(n,v,0,s,g,0,E,0,M);let d=0;for(let P=0;P<M;P++)d+=v[P]*E[P];e.update(d,n,1)}}this.setMode=r,this.setIndex=l,this.render=h,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function cg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,l){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=l*(s/3);break;case i.LINES:e.lines+=l*(s/2);break;case i.LINE_STRIP:e.lines+=l*(s-1);break;case i.LINE_LOOP:e.lines+=l*s;break;case i.POINTS:e.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function ug(i,t,e){const n=new WeakMap,r=new xe;function s(a,l,h){const c=a.morphTargetInfluences,f=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,p=f!==void 0?f.length:0;let g=n.get(l);if(g===void 0||g.count!==p){let y=function(){O.dispose(),n.delete(l),l.removeEventListener("dispose",y)};g!==void 0&&g.texture.dispose();const v=l.morphAttributes.position!==void 0,M=l.morphAttributes.normal!==void 0,E=l.morphAttributes.color!==void 0,_=l.morphAttributes.position||[],d=l.morphAttributes.normal||[],P=l.morphAttributes.color||[];let w=0;v===!0&&(w=1),M===!0&&(w=2),E===!0&&(w=3);let A=l.attributes.position.count*w,N=1;A>t.maxTextureSize&&(N=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const R=new Float32Array(A*N*4*p),O=new bu(R,A,N,p);O.type=si,O.needsUpdate=!0;const B=w*4;for(let T=0;T<p;T++){const F=_[T],k=d[T],X=P[T],Y=A*N*4*T;for(let Q=0;Q<F.count;Q++){const $=Q*B;v===!0&&(r.fromBufferAttribute(F,Q),R[Y+$+0]=r.x,R[Y+$+1]=r.y,R[Y+$+2]=r.z,R[Y+$+3]=0),M===!0&&(r.fromBufferAttribute(k,Q),R[Y+$+4]=r.x,R[Y+$+5]=r.y,R[Y+$+6]=r.z,R[Y+$+7]=0),E===!0&&(r.fromBufferAttribute(X,Q),R[Y+$+8]=r.x,R[Y+$+9]=r.y,R[Y+$+10]=r.z,R[Y+$+11]=X.itemSize===4?r.w:1)}}g={count:p,texture:O,size:new ee(A,N)},n.set(l,g),l.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let v=0;for(let E=0;E<c.length;E++)v+=c[E];const M=l.morphTargetsRelative?1:1-v;h.getUniforms().setValue(i,"morphTargetBaseInfluence",M),h.getUniforms().setValue(i,"morphTargetInfluences",c)}h.getUniforms().setValue(i,"morphTargetsTexture",g.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:s}}function hg(i,t,e,n){let r=new WeakMap;function s(h){const c=n.render.frame,f=h.geometry,p=t.get(h,f);if(r.get(p)!==c&&(t.update(p),r.set(p,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),r.get(h)!==c&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,c))),h.isSkinnedMesh){const g=h.skeleton;r.get(g)!==c&&(g.update(),r.set(g,c))}return p}function a(){r=new WeakMap}function l(h){const c=h.target;c.removeEventListener("dispose",l),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const Hu=new tn,Dc=new Nu(1,1),Vu=new bu,Gu=new Uf,ku=new Du,Uc=[],Ic=[],Nc=new Float32Array(16),Fc=new Float32Array(9),Oc=new Float32Array(4);function Fr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Uc[r];if(s===void 0&&(s=new Float32Array(r),Uc[r]=s),t!==0){n.toArray(s,0);for(let a=1,l=0;a!==t;++a)l+=e,i[a].toArray(s,l)}return s}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function po(i,t){let e=Ic[t];e===void 0&&(e=new Int32Array(t),Ic[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function fg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function dg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),Oe(e,t)}}function pg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),Oe(e,t)}}function mg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),Oe(e,t)}}function gg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Oc.set(n),i.uniformMatrix2fv(this.addr,!1,Oc),Oe(e,n)}}function _g(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Fc.set(n),i.uniformMatrix3fv(this.addr,!1,Fc),Oe(e,n)}}function vg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Nc.set(n),i.uniformMatrix4fv(this.addr,!1,Nc),Oe(e,n)}}function xg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Mg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),Oe(e,t)}}function Sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),Oe(e,t)}}function yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),Oe(e,t)}}function Eg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),Oe(e,t)}}function bg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),Oe(e,t)}}function Ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),Oe(e,t)}}function wg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Dc.compareFunction=Eu,s=Dc):s=Hu,e.setTexture2D(t||s,r)}function Rg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Gu,r)}function Cg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||ku,r)}function Pg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Vu,r)}function Lg(i){switch(i){case 5126:return fg;case 35664:return dg;case 35665:return pg;case 35666:return mg;case 35674:return gg;case 35675:return _g;case 35676:return vg;case 5124:case 35670:return xg;case 35667:case 35671:return Mg;case 35668:case 35672:return Sg;case 35669:case 35673:return yg;case 5125:return Eg;case 36294:return Tg;case 36295:return bg;case 36296:return Ag;case 35678:case 36198:case 36298:case 36306:case 35682:return wg;case 35679:case 36299:case 36307:return Rg;case 35680:case 36300:case 36308:case 36293:return Cg;case 36289:case 36303:case 36311:case 36292:return Pg}}function Dg(i,t){i.uniform1fv(this.addr,t)}function Ug(i,t){const e=Fr(t,this.size,2);i.uniform2fv(this.addr,e)}function Ig(i,t){const e=Fr(t,this.size,3);i.uniform3fv(this.addr,e)}function Ng(i,t){const e=Fr(t,this.size,4);i.uniform4fv(this.addr,e)}function Fg(i,t){const e=Fr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Og(i,t){const e=Fr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Bg(i,t){const e=Fr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function zg(i,t){i.uniform1iv(this.addr,t)}function Hg(i,t){i.uniform2iv(this.addr,t)}function Vg(i,t){i.uniform3iv(this.addr,t)}function Gg(i,t){i.uniform4iv(this.addr,t)}function kg(i,t){i.uniform1uiv(this.addr,t)}function Wg(i,t){i.uniform2uiv(this.addr,t)}function Xg(i,t){i.uniform3uiv(this.addr,t)}function Yg(i,t){i.uniform4uiv(this.addr,t)}function qg(i,t,e){const n=this.cache,r=t.length,s=po(e,r);Fe(n,s)||(i.uniform1iv(this.addr,s),Oe(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Hu,s[a])}function jg(i,t,e){const n=this.cache,r=t.length,s=po(e,r);Fe(n,s)||(i.uniform1iv(this.addr,s),Oe(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Gu,s[a])}function Kg(i,t,e){const n=this.cache,r=t.length,s=po(e,r);Fe(n,s)||(i.uniform1iv(this.addr,s),Oe(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||ku,s[a])}function Zg(i,t,e){const n=this.cache,r=t.length,s=po(e,r);Fe(n,s)||(i.uniform1iv(this.addr,s),Oe(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Vu,s[a])}function Jg(i){switch(i){case 5126:return Dg;case 35664:return Ug;case 35665:return Ig;case 35666:return Ng;case 35674:return Fg;case 35675:return Og;case 35676:return Bg;case 5124:case 35670:return zg;case 35667:case 35671:return Hg;case 35668:case 35672:return Vg;case 35669:case 35673:return Gg;case 5125:return kg;case 36294:return Wg;case 36295:return Xg;case 36296:return Yg;case 35678:case 36198:case 36298:case 36306:case 35682:return qg;case 35679:case 36299:case 36307:return jg;case 35680:case 36300:case 36308:case 36293:return Kg;case 36289:case 36303:case 36311:case 36292:return Zg}}class Qg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Lg(e.type)}}class $g{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jg(e.type)}}class t0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const l=r[s];l.setValue(t,e[l.id],n)}}}const la=/(\w+)(\])?(\[|\.)?/g;function Bc(i,t){i.seq.push(t),i.map[t.id]=t}function e0(i,t,e){const n=i.name,r=n.length;for(la.lastIndex=0;;){const s=la.exec(n),a=la.lastIndex;let l=s[1];const h=s[2]==="]",c=s[3];if(h&&(l=l|0),c===void 0||c==="["&&a+2===r){Bc(e,c===void 0?new Qg(l,i,t):new $g(l,i,t));break}else{let p=e.map[l];p===void 0&&(p=new t0(l),Bc(e,p)),e=p}}}class eo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);e0(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const l=e[s],h=n[l.id];h.needsUpdate!==!1&&l.setValue(t,h.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function zc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const n0=37297;let i0=0;function r0(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const l=a+1;n.push(`${l===t?">":" "} ${l}: ${e[a]}`)}return n.join(`
`)}const Hc=new Jt;function s0(i){he._getMatrix(Hc,he.workingColorSpace,i);const t=`mat3( ${Hc.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(i)){case io:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Vc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const l=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+r0(i.getShaderSource(t),l)}else return s}function o0(i,t){const e=s0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function a0(i,t){let e;switch(t){case af:e="Linear";break;case lf:e="Reinhard";break;case cf:e="Cineon";break;case du:e="ACESFilmic";break;case hf:e="AgX";break;case ff:e="Neutral";break;case uf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const js=new G;function l0(){he.getLuminanceCoefficients(js);const i=js.x.toFixed(4),t=js.y.toFixed(4),e=js.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function c0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(es).join(`
`)}function u0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function h0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let l=1;s.type===i.FLOAT_MAT2&&(l=2),s.type===i.FLOAT_MAT3&&(l=3),s.type===i.FLOAT_MAT4&&(l=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:l}}return e}function es(i){return i!==""}function Gc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const f0=/^[ \t]*#include +<([\w\d./]+)>/gm;function nl(i){return i.replace(f0,p0)}const d0=new Map;function p0(i,t){let e=te[t];if(e===void 0){const n=d0.get(t);if(n!==void 0)e=te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return nl(e)}const m0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wc(i){return i.replace(m0,g0)}function g0(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function _0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===zh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ni&&(t="SHADOWMAP_TYPE_VSM"),t}function v0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Cr:case Pr:t="ENVMAP_TYPE_CUBE";break;case fo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function x0(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Pr&&(t="ENVMAP_MODE_REFRACTION"),t}function M0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case fu:t="ENVMAP_BLENDING_MULTIPLY";break;case sf:t="ENVMAP_BLENDING_MIX";break;case of:t="ENVMAP_BLENDING_ADD";break}return t}function S0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function y0(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,l=e.fragmentShader;const h=_0(e),c=v0(e),f=x0(e),p=M0(e),g=S0(e),v=c0(e),M=u0(s),E=r.createProgram();let _,d,P=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(es).join(`
`),_.length>0&&(_+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(es).join(`
`),d.length>0&&(d+=`
`)):(_=[Xc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(es).join(`
`),d=[Xc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",e.envMap?"#define "+p:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bi?"#define TONE_MAPPING":"",e.toneMapping!==bi?te.tonemapping_pars_fragment:"",e.toneMapping!==bi?a0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,o0("linearToOutputTexel",e.outputColorSpace),l0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(es).join(`
`)),a=nl(a),a=Gc(a,e),a=kc(a,e),l=nl(l),l=Gc(l,e),l=kc(l,e),a=Wc(a),l=Wc(l),e.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,_=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,d=["#define varying in",e.glslVersion===jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const w=P+_+a,A=P+d+l,N=zc(r,r.VERTEX_SHADER,w),R=zc(r,r.FRAGMENT_SHADER,A);r.attachShader(E,N),r.attachShader(E,R),e.index0AttributeName!==void 0?r.bindAttribLocation(E,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function O(F){if(i.debug.checkShaderErrors){const k=r.getProgramInfoLog(E)||"",X=r.getShaderInfoLog(N)||"",Y=r.getShaderInfoLog(R)||"",Q=k.trim(),$=X.trim(),st=Y.trim();let K=!0,ft=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,E,N,R);else{const yt=Vc(r,N,"vertex"),Lt=Vc(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+Q+`
`+yt+`
`+Lt)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):($===""||st==="")&&(ft=!1);ft&&(F.diagnostics={runnable:K,programLog:Q,vertexShader:{log:$,prefix:_},fragmentShader:{log:st,prefix:d}})}r.deleteShader(N),r.deleteShader(R),B=new eo(r,E),y=h0(r,E)}let B;this.getUniforms=function(){return B===void 0&&O(this),B};let y;this.getAttributes=function(){return y===void 0&&O(this),y};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(E,n0)),T},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=i0++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=N,this.fragmentShader=R,this}let E0=0;class T0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new b0(t),e.set(t,n)),n}}class b0{constructor(t){this.id=E0++,this.code=t,this.usedTimes=0}}function A0(i,t,e,n,r,s,a){const l=new Au,h=new T0,c=new Set,f=[],p=r.logarithmicDepthBuffer,g=r.vertexTextures;let v=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(y){return c.add(y),y===0?"uv":`uv${y}`}function _(y,T,F,k,X){const Y=k.fog,Q=X.geometry,$=y.isMeshStandardMaterial?k.environment:null,st=(y.isMeshStandardMaterial?e:t).get(y.envMap||$),K=st&&st.mapping===fo?st.image.height:null,ft=M[y.type];y.precision!==null&&(v=r.getMaxPrecision(y.precision),v!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",v,"instead."));const yt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Lt=yt!==void 0?yt.length:0;let jt=0;Q.morphAttributes.position!==void 0&&(jt=1),Q.morphAttributes.normal!==void 0&&(jt=2),Q.morphAttributes.color!==void 0&&(jt=3);let le,Me,ce,nt;if(ft){const re=kn[ft];le=re.vertexShader,Me=re.fragmentShader}else le=y.vertexShader,Me=y.fragmentShader,h.update(y),ce=h.getVertexShaderID(y),nt=h.getFragmentShaderID(y);const ot=i.getRenderTarget(),At=i.state.buffers.depth.getReversed(),Gt=X.isInstancedMesh===!0,Ut=X.isBatchedMesh===!0,Qt=!!y.map,Be=!!y.matcap,I=!!st,$t=!!y.aoMap,Yt=!!y.lightMap,Vt=!!y.bumpMap,Rt=!!y.normalMap,Se=!!y.displacementMap,Ct=!!y.emissiveMap,Kt=!!y.metalnessMap,De=!!y.roughnessMap,we=y.anisotropy>0,L=y.clearcoat>0,S=y.dispersion>0,q=y.iridescence>0,et=y.sheen>0,rt=y.transmission>0,tt=we&&!!y.anisotropyMap,It=L&&!!y.clearcoatMap,dt=L&&!!y.clearcoatNormalMap,Pt=L&&!!y.clearcoatRoughnessMap,Dt=q&&!!y.iridescenceMap,ct=q&&!!y.iridescenceThicknessMap,vt=et&&!!y.sheenColorMap,Ht=et&&!!y.sheenRoughnessMap,Nt=!!y.specularMap,gt=!!y.specularColorMap,qt=!!y.specularIntensityMap,z=rt&&!!y.transmissionMap,ut=rt&&!!y.thicknessMap,pt=!!y.gradientMap,Tt=!!y.alphaMap,lt=y.alphaTest>0,it=!!y.alphaHash,Et=!!y.extensions;let Xt=bi;y.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Xt=i.toneMapping);const de={shaderID:ft,shaderType:y.type,shaderName:y.name,vertexShader:le,fragmentShader:Me,defines:y.defines,customVertexShaderID:ce,customFragmentShaderID:nt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:v,batching:Ut,batchingColor:Ut&&X._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&X.instanceColor!==null,instancingMorph:Gt&&X.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Lr,alphaToCoverage:!!y.alphaToCoverage,map:Qt,matcap:Be,envMap:I,envMapMode:I&&st.mapping,envMapCubeUVHeight:K,aoMap:$t,lightMap:Yt,bumpMap:Vt,normalMap:Rt,displacementMap:g&&Se,emissiveMap:Ct,normalMapObjectSpace:Rt&&y.normalMapType===_f,normalMapTangentSpace:Rt&&y.normalMapType===gf,metalnessMap:Kt,roughnessMap:De,anisotropy:we,anisotropyMap:tt,clearcoat:L,clearcoatMap:It,clearcoatNormalMap:dt,clearcoatRoughnessMap:Pt,dispersion:S,iridescence:q,iridescenceMap:Dt,iridescenceThicknessMap:ct,sheen:et,sheenColorMap:vt,sheenRoughnessMap:Ht,specularMap:Nt,specularColorMap:gt,specularIntensityMap:qt,transmission:rt,transmissionMap:z,thicknessMap:ut,gradientMap:pt,opaque:y.transparent===!1&&y.blending===Mr&&y.alphaToCoverage===!1,alphaMap:Tt,alphaTest:lt,alphaHash:it,combine:y.combine,mapUv:Qt&&E(y.map.channel),aoMapUv:$t&&E(y.aoMap.channel),lightMapUv:Yt&&E(y.lightMap.channel),bumpMapUv:Vt&&E(y.bumpMap.channel),normalMapUv:Rt&&E(y.normalMap.channel),displacementMapUv:Se&&E(y.displacementMap.channel),emissiveMapUv:Ct&&E(y.emissiveMap.channel),metalnessMapUv:Kt&&E(y.metalnessMap.channel),roughnessMapUv:De&&E(y.roughnessMap.channel),anisotropyMapUv:tt&&E(y.anisotropyMap.channel),clearcoatMapUv:It&&E(y.clearcoatMap.channel),clearcoatNormalMapUv:dt&&E(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pt&&E(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&E(y.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&E(y.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&E(y.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&E(y.sheenRoughnessMap.channel),specularMapUv:Nt&&E(y.specularMap.channel),specularColorMapUv:gt&&E(y.specularColorMap.channel),specularIntensityMapUv:qt&&E(y.specularIntensityMap.channel),transmissionMapUv:z&&E(y.transmissionMap.channel),thicknessMapUv:ut&&E(y.thicknessMap.channel),alphaMapUv:Tt&&E(y.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Rt||we),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!Q.attributes.uv&&(Qt||Tt),fog:!!Y,useFog:y.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:At,skinning:X.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:jt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xt,decodeVideoTexture:Qt&&y.map.isVideoTexture===!0&&he.getTransfer(y.map.colorSpace)===_e,decodeVideoTextureEmissive:Ct&&y.emissiveMap.isVideoTexture===!0&&he.getTransfer(y.emissiveMap.colorSpace)===_e,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===xn,flipSided:y.side===ln,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Et&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&y.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return de.vertexUv1s=c.has(1),de.vertexUv2s=c.has(2),de.vertexUv3s=c.has(3),c.clear(),de}function d(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const F in y.defines)T.push(F),T.push(y.defines[F]);return y.isRawShaderMaterial===!1&&(P(T,y),w(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function P(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function w(y,T){l.disableAll(),T.supportsVertexTextures&&l.enable(0),T.instancing&&l.enable(1),T.instancingColor&&l.enable(2),T.instancingMorph&&l.enable(3),T.matcap&&l.enable(4),T.envMap&&l.enable(5),T.normalMapObjectSpace&&l.enable(6),T.normalMapTangentSpace&&l.enable(7),T.clearcoat&&l.enable(8),T.iridescence&&l.enable(9),T.alphaTest&&l.enable(10),T.vertexColors&&l.enable(11),T.vertexAlphas&&l.enable(12),T.vertexUv1s&&l.enable(13),T.vertexUv2s&&l.enable(14),T.vertexUv3s&&l.enable(15),T.vertexTangents&&l.enable(16),T.anisotropy&&l.enable(17),T.alphaHash&&l.enable(18),T.batching&&l.enable(19),T.dispersion&&l.enable(20),T.batchingColor&&l.enable(21),T.gradientMap&&l.enable(22),y.push(l.mask),l.disableAll(),T.fog&&l.enable(0),T.useFog&&l.enable(1),T.flatShading&&l.enable(2),T.logarithmicDepthBuffer&&l.enable(3),T.reversedDepthBuffer&&l.enable(4),T.skinning&&l.enable(5),T.morphTargets&&l.enable(6),T.morphNormals&&l.enable(7),T.morphColors&&l.enable(8),T.premultipliedAlpha&&l.enable(9),T.shadowMapEnabled&&l.enable(10),T.doubleSided&&l.enable(11),T.flipSided&&l.enable(12),T.useDepthPacking&&l.enable(13),T.dithering&&l.enable(14),T.transmission&&l.enable(15),T.sheen&&l.enable(16),T.opaque&&l.enable(17),T.pointsUvs&&l.enable(18),T.decodeVideoTexture&&l.enable(19),T.decodeVideoTextureEmissive&&l.enable(20),T.alphaToCoverage&&l.enable(21),y.push(l.mask)}function A(y){const T=M[y.type];let F;if(T){const k=kn[T];F=Yf.clone(k.uniforms)}else F=y.uniforms;return F}function N(y,T){let F;for(let k=0,X=f.length;k<X;k++){const Y=f[k];if(Y.cacheKey===T){F=Y,++F.usedTimes;break}}return F===void 0&&(F=new y0(i,T,y,s),f.push(F)),F}function R(y){if(--y.usedTimes===0){const T=f.indexOf(y);f[T]=f[f.length-1],f.pop(),y.destroy()}}function O(y){h.remove(y)}function B(){h.dispose()}return{getParameters:_,getProgramCacheKey:d,getUniforms:A,acquireProgram:N,releaseProgram:R,releaseShaderCache:O,programs:f,dispose:B}}function w0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function r(a,l,h){i.get(a)[l]=h}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function R0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Yc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function qc(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(p,g,v,M,E,_){let d=i[t];return d===void 0?(d={id:p.id,object:p,geometry:g,material:v,groupOrder:M,renderOrder:p.renderOrder,z:E,group:_},i[t]=d):(d.id=p.id,d.object=p,d.geometry=g,d.material=v,d.groupOrder=M,d.renderOrder=p.renderOrder,d.z=E,d.group=_),t++,d}function l(p,g,v,M,E,_){const d=a(p,g,v,M,E,_);v.transmission>0?n.push(d):v.transparent===!0?r.push(d):e.push(d)}function h(p,g,v,M,E,_){const d=a(p,g,v,M,E,_);v.transmission>0?n.unshift(d):v.transparent===!0?r.unshift(d):e.unshift(d)}function c(p,g){e.length>1&&e.sort(p||R0),n.length>1&&n.sort(g||Yc),r.length>1&&r.sort(g||Yc)}function f(){for(let p=t,g=i.length;p<g;p++){const v=i[p];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:l,unshift:h,finish:f,sort:c}}function C0(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new qc,i.set(n,[a])):r>=s.length?(a=new qc,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function P0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new G,color:new ie};break;case"SpotLight":e={position:new G,direction:new G,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new ie,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":e={color:new ie,position:new G,halfWidth:new G,halfHeight:new G};break}return i[t.id]=e,e}}}function L0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let D0=0;function U0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function I0(i){const t=new P0,e=L0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);const r=new G,s=new Ae,a=new Ae;function l(c){let f=0,p=0,g=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let v=0,M=0,E=0,_=0,d=0,P=0,w=0,A=0,N=0,R=0,O=0;c.sort(U0);for(let y=0,T=c.length;y<T;y++){const F=c[y],k=F.color,X=F.intensity,Y=F.distance,Q=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)f+=k.r*X,p+=k.g*X,g+=k.b*X;else if(F.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(F.sh.coefficients[$],X);O++}else if(F.isDirectionalLight){const $=t.get(F);if($.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const st=F.shadow,K=e.get(F);K.shadowIntensity=st.intensity,K.shadowBias=st.bias,K.shadowNormalBias=st.normalBias,K.shadowRadius=st.radius,K.shadowMapSize=st.mapSize,n.directionalShadow[v]=K,n.directionalShadowMap[v]=Q,n.directionalShadowMatrix[v]=F.shadow.matrix,P++}n.directional[v]=$,v++}else if(F.isSpotLight){const $=t.get(F);$.position.setFromMatrixPosition(F.matrixWorld),$.color.copy(k).multiplyScalar(X),$.distance=Y,$.coneCos=Math.cos(F.angle),$.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),$.decay=F.decay,n.spot[E]=$;const st=F.shadow;if(F.map&&(n.spotLightMap[N]=F.map,N++,st.updateMatrices(F),F.castShadow&&R++),n.spotLightMatrix[E]=st.matrix,F.castShadow){const K=e.get(F);K.shadowIntensity=st.intensity,K.shadowBias=st.bias,K.shadowNormalBias=st.normalBias,K.shadowRadius=st.radius,K.shadowMapSize=st.mapSize,n.spotShadow[E]=K,n.spotShadowMap[E]=Q,A++}E++}else if(F.isRectAreaLight){const $=t.get(F);$.color.copy(k).multiplyScalar(X),$.halfWidth.set(F.width*.5,0,0),$.halfHeight.set(0,F.height*.5,0),n.rectArea[_]=$,_++}else if(F.isPointLight){const $=t.get(F);if($.color.copy(F.color).multiplyScalar(F.intensity),$.distance=F.distance,$.decay=F.decay,F.castShadow){const st=F.shadow,K=e.get(F);K.shadowIntensity=st.intensity,K.shadowBias=st.bias,K.shadowNormalBias=st.normalBias,K.shadowRadius=st.radius,K.shadowMapSize=st.mapSize,K.shadowCameraNear=st.camera.near,K.shadowCameraFar=st.camera.far,n.pointShadow[M]=K,n.pointShadowMap[M]=Q,n.pointShadowMatrix[M]=F.shadow.matrix,w++}n.point[M]=$,M++}else if(F.isHemisphereLight){const $=t.get(F);$.skyColor.copy(F.color).multiplyScalar(X),$.groundColor.copy(F.groundColor).multiplyScalar(X),n.hemi[d]=$,d++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=p,n.ambient[2]=g;const B=n.hash;(B.directionalLength!==v||B.pointLength!==M||B.spotLength!==E||B.rectAreaLength!==_||B.hemiLength!==d||B.numDirectionalShadows!==P||B.numPointShadows!==w||B.numSpotShadows!==A||B.numSpotMaps!==N||B.numLightProbes!==O)&&(n.directional.length=v,n.spot.length=E,n.rectArea.length=_,n.point.length=M,n.hemi.length=d,n.directionalShadow.length=P,n.directionalShadowMap.length=P,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=P,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=A+N-R,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=O,B.directionalLength=v,B.pointLength=M,B.spotLength=E,B.rectAreaLength=_,B.hemiLength=d,B.numDirectionalShadows=P,B.numPointShadows=w,B.numSpotShadows=A,B.numSpotMaps=N,B.numLightProbes=O,n.version=D0++)}function h(c,f){let p=0,g=0,v=0,M=0,E=0;const _=f.matrixWorldInverse;for(let d=0,P=c.length;d<P;d++){const w=c[d];if(w.isDirectionalLight){const A=n.directional[p];A.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(_),p++}else if(w.isSpotLight){const A=n.spot[v];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(_),A.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(_),v++}else if(w.isRectAreaLight){const A=n.rectArea[M];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(_),a.identity(),s.copy(w.matrixWorld),s.premultiply(_),a.extractRotation(s),A.halfWidth.set(w.width*.5,0,0),A.halfHeight.set(0,w.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),M++}else if(w.isPointLight){const A=n.point[g];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(_),g++}else if(w.isHemisphereLight){const A=n.hemi[E];A.direction.setFromMatrixPosition(w.matrixWorld),A.direction.transformDirection(_),E++}}}return{setup:l,setupView:h,state:n}}function jc(i){const t=new I0(i),e=[],n=[];function r(f){c.camera=f,e.length=0,n.length=0}function s(f){e.push(f)}function a(f){n.push(f)}function l(){t.setup(e)}function h(f){t.setupView(e,f)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:l,setupLightsView:h,pushLight:s,pushShadow:a}}function N0(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let l;return a===void 0?(l=new jc(i),t.set(r,[l])):s>=a.length?(l=new jc(i),a.push(l)):l=a[s],l}function n(){t=new WeakMap}return{get:e,dispose:n}}const F0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function B0(i,t,e){let n=new pl;const r=new ee,s=new ee,a=new xe,l=new id({depthPacking:mf}),h=new rd,c={},f=e.maxTextureSize,p={[wi]:ln,[ln]:wi,[xn]:xn},g=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:F0,fragmentShader:O0}),v=g.clone();v.defines.HORIZONTAL_PASS=1;const M=new $e;M.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new yn(M,g),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hu;let d=this.type;this.render=function(R,O,B){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||R.length===0)return;const y=i.getRenderTarget(),T=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Ti),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const X=d!==ni&&this.type===ni,Y=d===ni&&this.type!==ni;for(let Q=0,$=R.length;Q<$;Q++){const st=R[Q],K=st.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);const ft=K.getFrameExtents();if(r.multiply(ft),s.copy(K.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/ft.x),r.x=s.x*ft.x,K.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/ft.y),r.y=s.y*ft.y,K.mapSize.y=s.y)),K.map===null||X===!0||Y===!0){const Lt=this.type!==ni?{minFilter:Hn,magFilter:Hn}:{};K.map!==null&&K.map.dispose(),K.map=new Xi(r.x,r.y,Lt),K.map.texture.name=st.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();const yt=K.getViewportCount();for(let Lt=0;Lt<yt;Lt++){const jt=K.getViewport(Lt);a.set(s.x*jt.x,s.y*jt.y,s.x*jt.z,s.y*jt.w),k.viewport(a),K.updateMatrices(st,Lt),n=K.getFrustum(),A(O,B,K.camera,st,this.type)}K.isPointLightShadow!==!0&&this.type===ni&&P(K,B),K.needsUpdate=!1}d=this.type,_.needsUpdate=!1,i.setRenderTarget(y,T,F)};function P(R,O){const B=t.update(E);g.defines.VSM_SAMPLES!==R.blurSamples&&(g.defines.VSM_SAMPLES=R.blurSamples,v.defines.VSM_SAMPLES=R.blurSamples,g.needsUpdate=!0,v.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Xi(r.x,r.y)),g.uniforms.shadow_pass.value=R.map.texture,g.uniforms.resolution.value=R.mapSize,g.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(O,null,B,g,E,null),v.uniforms.shadow_pass.value=R.mapPass.texture,v.uniforms.resolution.value=R.mapSize,v.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(O,null,B,v,E,null)}function w(R,O,B,y){let T=null;const F=B.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(F!==void 0)T=F;else if(T=B.isPointLight===!0?h:l,i.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const k=T.uuid,X=O.uuid;let Y=c[k];Y===void 0&&(Y={},c[k]=Y);let Q=Y[X];Q===void 0&&(Q=T.clone(),Y[X]=Q,O.addEventListener("dispose",N)),T=Q}if(T.visible=O.visible,T.wireframe=O.wireframe,y===ni?T.side=O.shadowSide!==null?O.shadowSide:O.side:T.side=O.shadowSide!==null?O.shadowSide:p[O.side],T.alphaMap=O.alphaMap,T.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,T.map=O.map,T.clipShadows=O.clipShadows,T.clippingPlanes=O.clippingPlanes,T.clipIntersection=O.clipIntersection,T.displacementMap=O.displacementMap,T.displacementScale=O.displacementScale,T.displacementBias=O.displacementBias,T.wireframeLinewidth=O.wireframeLinewidth,T.linewidth=O.linewidth,B.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const k=i.properties.get(T);k.light=B}return T}function A(R,O,B,y,T){if(R.visible===!1)return;if(R.layers.test(O.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&T===ni)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,R.matrixWorld);const X=t.update(R),Y=R.material;if(Array.isArray(Y)){const Q=X.groups;for(let $=0,st=Q.length;$<st;$++){const K=Q[$],ft=Y[K.materialIndex];if(ft&&ft.visible){const yt=w(R,ft,y,T);R.onBeforeShadow(i,R,O,B,X,yt,K),i.renderBufferDirect(B,null,X,yt,R,K),R.onAfterShadow(i,R,O,B,X,yt,K)}}}else if(Y.visible){const Q=w(R,Y,y,T);R.onBeforeShadow(i,R,O,B,X,Q,null),i.renderBufferDirect(B,null,X,Q,R,null),R.onAfterShadow(i,R,O,B,X,Q,null)}}const k=R.children;for(let X=0,Y=k.length;X<Y;X++)A(k[X],O,B,y,T)}function N(R){R.target.removeEventListener("dispose",N);for(const B in c){const y=c[B],T=R.target.uuid;T in y&&(y[T].dispose(),delete y[T])}}}const z0={[pa]:ma,[ga]:xa,[_a]:Ma,[Rr]:va,[ma]:pa,[xa]:ga,[Ma]:_a,[va]:Rr};function H0(i,t){function e(){let z=!1;const ut=new xe;let pt=null;const Tt=new xe(0,0,0,0);return{setMask:function(lt){pt!==lt&&!z&&(i.colorMask(lt,lt,lt,lt),pt=lt)},setLocked:function(lt){z=lt},setClear:function(lt,it,Et,Xt,de){de===!0&&(lt*=Xt,it*=Xt,Et*=Xt),ut.set(lt,it,Et,Xt),Tt.equals(ut)===!1&&(i.clearColor(lt,it,Et,Xt),Tt.copy(ut))},reset:function(){z=!1,pt=null,Tt.set(-1,0,0,0)}}}function n(){let z=!1,ut=!1,pt=null,Tt=null,lt=null;return{setReversed:function(it){if(ut!==it){const Et=t.get("EXT_clip_control");it?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),ut=it;const Xt=lt;lt=null,this.setClear(Xt)}},getReversed:function(){return ut},setTest:function(it){it?ot(i.DEPTH_TEST):At(i.DEPTH_TEST)},setMask:function(it){pt!==it&&!z&&(i.depthMask(it),pt=it)},setFunc:function(it){if(ut&&(it=z0[it]),Tt!==it){switch(it){case pa:i.depthFunc(i.NEVER);break;case ma:i.depthFunc(i.ALWAYS);break;case ga:i.depthFunc(i.LESS);break;case Rr:i.depthFunc(i.LEQUAL);break;case _a:i.depthFunc(i.EQUAL);break;case va:i.depthFunc(i.GEQUAL);break;case xa:i.depthFunc(i.GREATER);break;case Ma:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Tt=it}},setLocked:function(it){z=it},setClear:function(it){lt!==it&&(ut&&(it=1-it),i.clearDepth(it),lt=it)},reset:function(){z=!1,pt=null,Tt=null,lt=null,ut=!1}}}function r(){let z=!1,ut=null,pt=null,Tt=null,lt=null,it=null,Et=null,Xt=null,de=null;return{setTest:function(re){z||(re?ot(i.STENCIL_TEST):At(i.STENCIL_TEST))},setMask:function(re){ut!==re&&!z&&(i.stencilMask(re),ut=re)},setFunc:function(re,sn,En){(pt!==re||Tt!==sn||lt!==En)&&(i.stencilFunc(re,sn,En),pt=re,Tt=sn,lt=En)},setOp:function(re,sn,En){(it!==re||Et!==sn||Xt!==En)&&(i.stencilOp(re,sn,En),it=re,Et=sn,Xt=En)},setLocked:function(re){z=re},setClear:function(re){de!==re&&(i.clearStencil(re),de=re)},reset:function(){z=!1,ut=null,pt=null,Tt=null,lt=null,it=null,Et=null,Xt=null,de=null}}}const s=new e,a=new n,l=new r,h=new WeakMap,c=new WeakMap;let f={},p={},g=new WeakMap,v=[],M=null,E=!1,_=null,d=null,P=null,w=null,A=null,N=null,R=null,O=new ie(0,0,0),B=0,y=!1,T=null,F=null,k=null,X=null,Y=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,st=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(K)[1]),$=st>=1):K.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),$=st>=2);let ft=null,yt={};const Lt=i.getParameter(i.SCISSOR_BOX),jt=i.getParameter(i.VIEWPORT),le=new xe().fromArray(Lt),Me=new xe().fromArray(jt);function ce(z,ut,pt,Tt){const lt=new Uint8Array(4),it=i.createTexture();i.bindTexture(z,it),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Et=0;Et<pt;Et++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(ut,0,i.RGBA,1,1,Tt,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(ut+Et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return it}const nt={};nt[i.TEXTURE_2D]=ce(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),l.setClear(0),ot(i.DEPTH_TEST),a.setFunc(Rr),Vt(!1),Rt(Wl),ot(i.CULL_FACE),$t(Ti);function ot(z){f[z]!==!0&&(i.enable(z),f[z]=!0)}function At(z){f[z]!==!1&&(i.disable(z),f[z]=!1)}function Gt(z,ut){return p[z]!==ut?(i.bindFramebuffer(z,ut),p[z]=ut,z===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=ut),z===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=ut),!0):!1}function Ut(z,ut){let pt=v,Tt=!1;if(z){pt=g.get(ut),pt===void 0&&(pt=[],g.set(ut,pt));const lt=z.textures;if(pt.length!==lt.length||pt[0]!==i.COLOR_ATTACHMENT0){for(let it=0,Et=lt.length;it<Et;it++)pt[it]=i.COLOR_ATTACHMENT0+it;pt.length=lt.length,Tt=!0}}else pt[0]!==i.BACK&&(pt[0]=i.BACK,Tt=!0);Tt&&i.drawBuffers(pt)}function Qt(z){return M!==z?(i.useProgram(z),M=z,!0):!1}const Be={[Bi]:i.FUNC_ADD,[Vh]:i.FUNC_SUBTRACT,[Gh]:i.FUNC_REVERSE_SUBTRACT};Be[kh]=i.MIN,Be[Wh]=i.MAX;const I={[Xh]:i.ZERO,[Yh]:i.ONE,[qh]:i.SRC_COLOR,[fa]:i.SRC_ALPHA,[$h]:i.SRC_ALPHA_SATURATE,[Jh]:i.DST_COLOR,[Kh]:i.DST_ALPHA,[jh]:i.ONE_MINUS_SRC_COLOR,[da]:i.ONE_MINUS_SRC_ALPHA,[Qh]:i.ONE_MINUS_DST_COLOR,[Zh]:i.ONE_MINUS_DST_ALPHA,[tf]:i.CONSTANT_COLOR,[ef]:i.ONE_MINUS_CONSTANT_COLOR,[nf]:i.CONSTANT_ALPHA,[rf]:i.ONE_MINUS_CONSTANT_ALPHA};function $t(z,ut,pt,Tt,lt,it,Et,Xt,de,re){if(z===Ti){E===!0&&(At(i.BLEND),E=!1);return}if(E===!1&&(ot(i.BLEND),E=!0),z!==Hh){if(z!==_||re!==y){if((d!==Bi||A!==Bi)&&(i.blendEquation(i.FUNC_ADD),d=Bi,A=Bi),re)switch(z){case Mr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pn:i.blendFunc(i.ONE,i.ONE);break;case Xl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Mr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Xl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}P=null,w=null,N=null,R=null,O.set(0,0,0),B=0,_=z,y=re}return}lt=lt||ut,it=it||pt,Et=Et||Tt,(ut!==d||lt!==A)&&(i.blendEquationSeparate(Be[ut],Be[lt]),d=ut,A=lt),(pt!==P||Tt!==w||it!==N||Et!==R)&&(i.blendFuncSeparate(I[pt],I[Tt],I[it],I[Et]),P=pt,w=Tt,N=it,R=Et),(Xt.equals(O)===!1||de!==B)&&(i.blendColor(Xt.r,Xt.g,Xt.b,de),O.copy(Xt),B=de),_=z,y=!1}function Yt(z,ut){z.side===xn?At(i.CULL_FACE):ot(i.CULL_FACE);let pt=z.side===ln;ut&&(pt=!pt),Vt(pt),z.blending===Mr&&z.transparent===!1?$t(Ti):$t(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),s.setMask(z.colorWrite);const Tt=z.stencilWrite;l.setTest(Tt),Tt&&(l.setMask(z.stencilWriteMask),l.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),l.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ct(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):At(i.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(z){T!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),T=z)}function Rt(z){z!==Oh?(ot(i.CULL_FACE),z!==F&&(z===Wl?i.cullFace(i.BACK):z===Bh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):At(i.CULL_FACE),F=z}function Se(z){z!==k&&($&&i.lineWidth(z),k=z)}function Ct(z,ut,pt){z?(ot(i.POLYGON_OFFSET_FILL),(X!==ut||Y!==pt)&&(i.polygonOffset(ut,pt),X=ut,Y=pt)):At(i.POLYGON_OFFSET_FILL)}function Kt(z){z?ot(i.SCISSOR_TEST):At(i.SCISSOR_TEST)}function De(z){z===void 0&&(z=i.TEXTURE0+Q-1),ft!==z&&(i.activeTexture(z),ft=z)}function we(z,ut,pt){pt===void 0&&(ft===null?pt=i.TEXTURE0+Q-1:pt=ft);let Tt=yt[pt];Tt===void 0&&(Tt={type:void 0,texture:void 0},yt[pt]=Tt),(Tt.type!==z||Tt.texture!==ut)&&(ft!==pt&&(i.activeTexture(pt),ft=pt),i.bindTexture(z,ut||nt[z]),Tt.type=z,Tt.texture=ut)}function L(){const z=yt[ft];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function q(){try{i.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function et(){try{i.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function rt(){try{i.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function tt(){try{i.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function It(){try{i.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function dt(){try{i.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Pt(){try{i.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Dt(){try{i.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ct(){try{i.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function vt(z){le.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),le.copy(z))}function Ht(z){Me.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),Me.copy(z))}function Nt(z,ut){let pt=c.get(ut);pt===void 0&&(pt=new WeakMap,c.set(ut,pt));let Tt=pt.get(z);Tt===void 0&&(Tt=i.getUniformBlockIndex(ut,z.name),pt.set(z,Tt))}function gt(z,ut){const Tt=c.get(ut).get(z);h.get(ut)!==Tt&&(i.uniformBlockBinding(ut,Tt,z.__bindingPointIndex),h.set(ut,Tt))}function qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ft=null,yt={},p={},g=new WeakMap,v=[],M=null,E=!1,_=null,d=null,P=null,w=null,A=null,N=null,R=null,O=new ie(0,0,0),B=0,y=!1,T=null,F=null,k=null,X=null,Y=null,le.set(0,0,i.canvas.width,i.canvas.height),Me.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),l.reset()}return{buffers:{color:s,depth:a,stencil:l},enable:ot,disable:At,bindFramebuffer:Gt,drawBuffers:Ut,useProgram:Qt,setBlending:$t,setMaterial:Yt,setFlipSided:Vt,setCullFace:Rt,setLineWidth:Se,setPolygonOffset:Ct,setScissorTest:Kt,activeTexture:De,bindTexture:we,unbindTexture:L,compressedTexImage2D:S,compressedTexImage3D:q,texImage2D:Dt,texImage3D:ct,updateUBOMapping:Nt,uniformBlockBinding:gt,texStorage2D:dt,texStorage3D:Pt,texSubImage2D:et,texSubImage3D:rt,compressedTexSubImage2D:tt,compressedTexSubImage3D:It,scissor:vt,viewport:Ht,reset:qt}}function V0(i,t,e,n,r,s,a){const l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ee,f=new WeakMap;let p;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(L,S){return v?new OffscreenCanvas(L,S):as("canvas")}function E(L,S,q){let et=1;const rt=we(L);if((rt.width>q||rt.height>q)&&(et=q/Math.max(rt.width,rt.height)),et<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const tt=Math.floor(et*rt.width),It=Math.floor(et*rt.height);p===void 0&&(p=M(tt,It));const dt=S?M(tt,It):p;return dt.width=tt,dt.height=It,dt.getContext("2d").drawImage(L,0,0,tt,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+tt+"x"+It+")."),dt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),L;return L}function _(L){return L.generateMipmaps}function d(L){i.generateMipmap(L)}function P(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(L,S,q,et,rt=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let tt=S;if(S===i.RED&&(q===i.FLOAT&&(tt=i.R32F),q===i.HALF_FLOAT&&(tt=i.R16F),q===i.UNSIGNED_BYTE&&(tt=i.R8)),S===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(tt=i.R8UI),q===i.UNSIGNED_SHORT&&(tt=i.R16UI),q===i.UNSIGNED_INT&&(tt=i.R32UI),q===i.BYTE&&(tt=i.R8I),q===i.SHORT&&(tt=i.R16I),q===i.INT&&(tt=i.R32I)),S===i.RG&&(q===i.FLOAT&&(tt=i.RG32F),q===i.HALF_FLOAT&&(tt=i.RG16F),q===i.UNSIGNED_BYTE&&(tt=i.RG8)),S===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(tt=i.RG8UI),q===i.UNSIGNED_SHORT&&(tt=i.RG16UI),q===i.UNSIGNED_INT&&(tt=i.RG32UI),q===i.BYTE&&(tt=i.RG8I),q===i.SHORT&&(tt=i.RG16I),q===i.INT&&(tt=i.RG32I)),S===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),q===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),q===i.UNSIGNED_INT&&(tt=i.RGB32UI),q===i.BYTE&&(tt=i.RGB8I),q===i.SHORT&&(tt=i.RGB16I),q===i.INT&&(tt=i.RGB32I)),S===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),q===i.UNSIGNED_INT&&(tt=i.RGBA32UI),q===i.BYTE&&(tt=i.RGBA8I),q===i.SHORT&&(tt=i.RGBA16I),q===i.INT&&(tt=i.RGBA32I)),S===i.RGB&&(q===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(tt=i.R11F_G11F_B10F)),S===i.RGBA){const It=rt?io:he.getTransfer(et);q===i.FLOAT&&(tt=i.RGBA32F),q===i.HALF_FLOAT&&(tt=i.RGBA16F),q===i.UNSIGNED_BYTE&&(tt=It===_e?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function A(L,S){let q;return L?S===null||S===Wi||S===rs?q=i.DEPTH24_STENCIL8:S===si?q=i.DEPTH32F_STENCIL8:S===is&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Wi||S===rs?q=i.DEPTH_COMPONENT24:S===si?q=i.DEPTH_COMPONENT32F:S===is&&(q=i.DEPTH_COMPONENT16),q}function N(L,S){return _(L)===!0||L.isFramebufferTexture&&L.minFilter!==Hn&&L.minFilter!==Fn?Math.log2(Math.max(S.width,S.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?S.mipmaps.length:1}function R(L){const S=L.target;S.removeEventListener("dispose",R),B(S),S.isVideoTexture&&f.delete(S)}function O(L){const S=L.target;S.removeEventListener("dispose",O),T(S)}function B(L){const S=n.get(L);if(S.__webglInit===void 0)return;const q=L.source,et=g.get(q);if(et){const rt=et[S.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&y(L),Object.keys(et).length===0&&g.delete(q)}n.remove(L)}function y(L){const S=n.get(L);i.deleteTexture(S.__webglTexture);const q=L.source,et=g.get(q);delete et[S.__cacheKey],a.memory.textures--}function T(L){const S=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(S.__webglFramebuffer[et]))for(let rt=0;rt<S.__webglFramebuffer[et].length;rt++)i.deleteFramebuffer(S.__webglFramebuffer[et][rt]);else i.deleteFramebuffer(S.__webglFramebuffer[et]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[et])}else{if(Array.isArray(S.__webglFramebuffer))for(let et=0;et<S.__webglFramebuffer.length;et++)i.deleteFramebuffer(S.__webglFramebuffer[et]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let et=0;et<S.__webglColorRenderbuffer.length;et++)S.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[et]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const q=L.textures;for(let et=0,rt=q.length;et<rt;et++){const tt=n.get(q[et]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),a.memory.textures--),n.remove(q[et])}n.remove(L)}let F=0;function k(){F=0}function X(){const L=F;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),F+=1,L}function Y(L){const S=[];return S.push(L.wrapS),S.push(L.wrapT),S.push(L.wrapR||0),S.push(L.magFilter),S.push(L.minFilter),S.push(L.anisotropy),S.push(L.internalFormat),S.push(L.format),S.push(L.type),S.push(L.generateMipmaps),S.push(L.premultiplyAlpha),S.push(L.flipY),S.push(L.unpackAlignment),S.push(L.colorSpace),S.join()}function Q(L,S){const q=n.get(L);if(L.isVideoTexture&&Kt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&q.__version!==L.version){const et=L.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(q,L,S);return}}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+S)}function $(L,S){const q=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){nt(q,L,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+S)}function st(L,S){const q=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){nt(q,L,S);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+S)}function K(L,S){const q=n.get(L);if(L.version>0&&q.__version!==L.version){ot(q,L,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+S)}const ft={[Ea]:i.REPEAT,[Hi]:i.CLAMP_TO_EDGE,[Ta]:i.MIRRORED_REPEAT},yt={[Hn]:i.NEAREST,[df]:i.NEAREST_MIPMAP_NEAREST,[Ms]:i.NEAREST_MIPMAP_LINEAR,[Fn]:i.LINEAR,[Ao]:i.LINEAR_MIPMAP_NEAREST,[yi]:i.LINEAR_MIPMAP_LINEAR},Lt={[vf]:i.NEVER,[Tf]:i.ALWAYS,[xf]:i.LESS,[Eu]:i.LEQUAL,[Mf]:i.EQUAL,[Ef]:i.GEQUAL,[Sf]:i.GREATER,[yf]:i.NOTEQUAL};function jt(L,S){if(S.type===si&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Fn||S.magFilter===Ao||S.magFilter===Ms||S.magFilter===yi||S.minFilter===Fn||S.minFilter===Ao||S.minFilter===Ms||S.minFilter===yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,ft[S.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,ft[S.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,ft[S.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,yt[S.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,yt[S.minFilter]),S.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,Lt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Hn||S.minFilter!==Ms&&S.minFilter!==yi||S.type===si&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function le(L,S){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,S.addEventListener("dispose",R));const et=S.source;let rt=g.get(et);rt===void 0&&(rt={},g.set(et,rt));const tt=Y(S);if(tt!==L.__cacheKey){rt[tt]===void 0&&(rt[tt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),rt[tt].usedTimes++;const It=rt[L.__cacheKey];It!==void 0&&(rt[L.__cacheKey].usedTimes--,It.usedTimes===0&&y(S)),L.__cacheKey=tt,L.__webglTexture=rt[tt].texture}return q}function Me(L,S,q){return Math.floor(Math.floor(L/q)/S)}function ce(L,S,q,et){const tt=L.updateRanges;if(tt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,q,et,S.data);else{tt.sort((ct,vt)=>ct.start-vt.start);let It=0;for(let ct=1;ct<tt.length;ct++){const vt=tt[It],Ht=tt[ct],Nt=vt.start+vt.count,gt=Me(Ht.start,S.width,4),qt=Me(vt.start,S.width,4);Ht.start<=Nt+1&&gt===qt&&Me(Ht.start+Ht.count-1,S.width,4)===gt?vt.count=Math.max(vt.count,Ht.start+Ht.count-vt.start):(++It,tt[It]=Ht)}tt.length=It+1;const dt=i.getParameter(i.UNPACK_ROW_LENGTH),Pt=i.getParameter(i.UNPACK_SKIP_PIXELS),Dt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let ct=0,vt=tt.length;ct<vt;ct++){const Ht=tt[ct],Nt=Math.floor(Ht.start/4),gt=Math.ceil(Ht.count/4),qt=Nt%S.width,z=Math.floor(Nt/S.width),ut=gt,pt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,qt),i.pixelStorei(i.UNPACK_SKIP_ROWS,z),e.texSubImage2D(i.TEXTURE_2D,0,qt,z,ut,pt,q,et,S.data)}L.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,dt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Pt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Dt)}}function nt(L,S,q){let et=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(et=i.TEXTURE_3D);const rt=le(L,S),tt=S.source;e.bindTexture(et,L.__webglTexture,i.TEXTURE0+q);const It=n.get(tt);if(tt.version!==It.__version||rt===!0){e.activeTexture(i.TEXTURE0+q);const dt=he.getPrimaries(he.workingColorSpace),Pt=S.colorSpace===Mi?null:he.getPrimaries(S.colorSpace),Dt=S.colorSpace===Mi||dt===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let ct=E(S.image,!1,r.maxTextureSize);ct=De(S,ct);const vt=s.convert(S.format,S.colorSpace),Ht=s.convert(S.type);let Nt=w(S.internalFormat,vt,Ht,S.colorSpace,S.isVideoTexture);jt(et,S);let gt;const qt=S.mipmaps,z=S.isVideoTexture!==!0,ut=It.__version===void 0||rt===!0,pt=tt.dataReady,Tt=N(S,ct);if(S.isDepthTexture)Nt=A(S.format===os,S.type),ut&&(z?e.texStorage2D(i.TEXTURE_2D,1,Nt,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,Nt,ct.width,ct.height,0,vt,Ht,null));else if(S.isDataTexture)if(qt.length>0){z&&ut&&e.texStorage2D(i.TEXTURE_2D,Tt,Nt,qt[0].width,qt[0].height);for(let lt=0,it=qt.length;lt<it;lt++)gt=qt[lt],z?pt&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,gt.width,gt.height,vt,Ht,gt.data):e.texImage2D(i.TEXTURE_2D,lt,Nt,gt.width,gt.height,0,vt,Ht,gt.data);S.generateMipmaps=!1}else z?(ut&&e.texStorage2D(i.TEXTURE_2D,Tt,Nt,ct.width,ct.height),pt&&ce(S,ct,vt,Ht)):e.texImage2D(i.TEXTURE_2D,0,Nt,ct.width,ct.height,0,vt,Ht,ct.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){z&&ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Nt,qt[0].width,qt[0].height,ct.depth);for(let lt=0,it=qt.length;lt<it;lt++)if(gt=qt[lt],S.format!==On)if(vt!==null)if(z){if(pt)if(S.layerUpdates.size>0){const Et=Tc(gt.width,gt.height,S.format,S.type);for(const Xt of S.layerUpdates){const de=gt.data.subarray(Xt*Et/gt.data.BYTES_PER_ELEMENT,(Xt+1)*Et/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,Xt,gt.width,gt.height,1,vt,de)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,gt.width,gt.height,ct.depth,vt,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,lt,Nt,gt.width,gt.height,ct.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?pt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,gt.width,gt.height,ct.depth,vt,Ht,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,lt,Nt,gt.width,gt.height,ct.depth,0,vt,Ht,gt.data)}else{z&&ut&&e.texStorage2D(i.TEXTURE_2D,Tt,Nt,qt[0].width,qt[0].height);for(let lt=0,it=qt.length;lt<it;lt++)gt=qt[lt],S.format!==On?vt!==null?z?pt&&e.compressedTexSubImage2D(i.TEXTURE_2D,lt,0,0,gt.width,gt.height,vt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,lt,Nt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?pt&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,gt.width,gt.height,vt,Ht,gt.data):e.texImage2D(i.TEXTURE_2D,lt,Nt,gt.width,gt.height,0,vt,Ht,gt.data)}else if(S.isDataArrayTexture)if(z){if(ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Nt,ct.width,ct.height,ct.depth),pt)if(S.layerUpdates.size>0){const lt=Tc(ct.width,ct.height,S.format,S.type);for(const it of S.layerUpdates){const Et=ct.data.subarray(it*lt/ct.data.BYTES_PER_ELEMENT,(it+1)*lt/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,it,ct.width,ct.height,1,vt,Ht,Et)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,vt,Ht,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,ct.width,ct.height,ct.depth,0,vt,Ht,ct.data);else if(S.isData3DTexture)z?(ut&&e.texStorage3D(i.TEXTURE_3D,Tt,Nt,ct.width,ct.height,ct.depth),pt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,vt,Ht,ct.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,ct.width,ct.height,ct.depth,0,vt,Ht,ct.data);else if(S.isFramebufferTexture){if(ut)if(z)e.texStorage2D(i.TEXTURE_2D,Tt,Nt,ct.width,ct.height);else{let lt=ct.width,it=ct.height;for(let Et=0;Et<Tt;Et++)e.texImage2D(i.TEXTURE_2D,Et,Nt,lt,it,0,vt,Ht,null),lt>>=1,it>>=1}}else if(qt.length>0){if(z&&ut){const lt=we(qt[0]);e.texStorage2D(i.TEXTURE_2D,Tt,Nt,lt.width,lt.height)}for(let lt=0,it=qt.length;lt<it;lt++)gt=qt[lt],z?pt&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,vt,Ht,gt):e.texImage2D(i.TEXTURE_2D,lt,Nt,vt,Ht,gt);S.generateMipmaps=!1}else if(z){if(ut){const lt=we(ct);e.texStorage2D(i.TEXTURE_2D,Tt,Nt,lt.width,lt.height)}pt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,Ht,ct)}else e.texImage2D(i.TEXTURE_2D,0,Nt,vt,Ht,ct);_(S)&&d(et),It.__version=tt.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function ot(L,S,q){if(S.image.length!==6)return;const et=le(L,S),rt=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+q);const tt=n.get(rt);if(rt.version!==tt.__version||et===!0){e.activeTexture(i.TEXTURE0+q);const It=he.getPrimaries(he.workingColorSpace),dt=S.colorSpace===Mi?null:he.getPrimaries(S.colorSpace),Pt=S.colorSpace===Mi||It===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const Dt=S.isCompressedTexture||S.image[0].isCompressedTexture,ct=S.image[0]&&S.image[0].isDataTexture,vt=[];for(let it=0;it<6;it++)!Dt&&!ct?vt[it]=E(S.image[it],!0,r.maxCubemapSize):vt[it]=ct?S.image[it].image:S.image[it],vt[it]=De(S,vt[it]);const Ht=vt[0],Nt=s.convert(S.format,S.colorSpace),gt=s.convert(S.type),qt=w(S.internalFormat,Nt,gt,S.colorSpace),z=S.isVideoTexture!==!0,ut=tt.__version===void 0||et===!0,pt=rt.dataReady;let Tt=N(S,Ht);jt(i.TEXTURE_CUBE_MAP,S);let lt;if(Dt){z&&ut&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,qt,Ht.width,Ht.height);for(let it=0;it<6;it++){lt=vt[it].mipmaps;for(let Et=0;Et<lt.length;Et++){const Xt=lt[Et];S.format!==On?Nt!==null?z?pt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Et,0,0,Xt.width,Xt.height,Nt,Xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Et,qt,Xt.width,Xt.height,0,Xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Et,0,0,Xt.width,Xt.height,Nt,gt,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Et,qt,Xt.width,Xt.height,0,Nt,gt,Xt.data)}}}else{if(lt=S.mipmaps,z&&ut){lt.length>0&&Tt++;const it=we(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,qt,it.width,it.height)}for(let it=0;it<6;it++)if(ct){z?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,vt[it].width,vt[it].height,Nt,gt,vt[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,qt,vt[it].width,vt[it].height,0,Nt,gt,vt[it].data);for(let Et=0;Et<lt.length;Et++){const de=lt[Et].image[it].image;z?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Et+1,0,0,de.width,de.height,Nt,gt,de.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Et+1,qt,de.width,de.height,0,Nt,gt,de.data)}}else{z?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Nt,gt,vt[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,qt,Nt,gt,vt[it]);for(let Et=0;Et<lt.length;Et++){const Xt=lt[Et];z?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Et+1,0,0,Nt,gt,Xt.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Et+1,qt,Nt,gt,Xt.image[it])}}}_(S)&&d(i.TEXTURE_CUBE_MAP),tt.__version=rt.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function At(L,S,q,et,rt,tt){const It=s.convert(q.format,q.colorSpace),dt=s.convert(q.type),Pt=w(q.internalFormat,It,dt,q.colorSpace),Dt=n.get(S),ct=n.get(q);if(ct.__renderTarget=S,!Dt.__hasExternalTextures){const vt=Math.max(1,S.width>>tt),Ht=Math.max(1,S.height>>tt);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,tt,Pt,vt,Ht,S.depth,0,It,dt,null):e.texImage2D(rt,tt,Pt,vt,Ht,0,It,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),Ct(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,rt,ct.__webglTexture,0,Se(S)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,rt,ct.__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(L,S,q){if(i.bindRenderbuffer(i.RENDERBUFFER,L),S.depthBuffer){const et=S.depthTexture,rt=et&&et.isDepthTexture?et.type:null,tt=A(S.stencilBuffer,rt),It=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=Se(S);Ct(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,tt,S.width,S.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,tt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,tt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,L)}else{const et=S.textures;for(let rt=0;rt<et.length;rt++){const tt=et[rt],It=s.convert(tt.format,tt.colorSpace),dt=s.convert(tt.type),Pt=w(tt.internalFormat,It,dt,tt.colorSpace),Dt=Se(S);q&&Ct(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,Pt,S.width,S.height):Ct(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt,Pt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Pt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(L,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const et=n.get(S.depthTexture);et.__renderTarget=S,(!et.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Q(S.depthTexture,0);const rt=et.__webglTexture,tt=Se(S);if(S.depthTexture.format===ss)Ct(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0);else if(S.depthTexture.format===os)Ct(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function Qt(L){const S=n.get(L),q=L.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==L.depthTexture){const et=L.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),et){const rt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,et.removeEventListener("dispose",rt)};et.addEventListener("dispose",rt),S.__depthDisposeCallback=rt}S.__boundDepthTexture=et}if(L.depthTexture&&!S.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");const et=L.texture.mipmaps;et&&et.length>0?Ut(S.__webglFramebuffer[0],L):Ut(S.__webglFramebuffer,L)}else if(q){S.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[et]),S.__webglDepthbuffer[et]===void 0)S.__webglDepthbuffer[et]=i.createRenderbuffer(),Gt(S.__webglDepthbuffer[et],L,!1);else{const rt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=S.__webglDepthbuffer[et];i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,tt)}}else{const et=L.texture.mipmaps;if(et&&et.length>0?e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Gt(S.__webglDepthbuffer,L,!1);else{const rt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,tt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(L,S,q){const et=n.get(L);S!==void 0&&At(et.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Qt(L)}function I(L){const S=L.texture,q=n.get(L),et=n.get(S);L.addEventListener("dispose",O);const rt=L.textures,tt=L.isWebGLCubeRenderTarget===!0,It=rt.length>1;if(It||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=S.version,a.memory.textures++),tt){q.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(S.mipmaps&&S.mipmaps.length>0){q.__webglFramebuffer[dt]=[];for(let Pt=0;Pt<S.mipmaps.length;Pt++)q.__webglFramebuffer[dt][Pt]=i.createFramebuffer()}else q.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){q.__webglFramebuffer=[];for(let dt=0;dt<S.mipmaps.length;dt++)q.__webglFramebuffer[dt]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(It)for(let dt=0,Pt=rt.length;dt<Pt;dt++){const Dt=n.get(rt[dt]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&Ct(L)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let dt=0;dt<rt.length;dt++){const Pt=rt[dt];q.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[dt]);const Dt=s.convert(Pt.format,Pt.colorSpace),ct=s.convert(Pt.type),vt=w(Pt.internalFormat,Dt,ct,Pt.colorSpace,L.isXRRenderTarget===!0),Ht=Se(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,vt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,q.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Gt(q.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),jt(i.TEXTURE_CUBE_MAP,S);for(let dt=0;dt<6;dt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Pt=0;Pt<S.mipmaps.length;Pt++)At(q.__webglFramebuffer[dt][Pt],L,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Pt);else At(q.__webglFramebuffer[dt],L,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);_(S)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let dt=0,Pt=rt.length;dt<Pt;dt++){const Dt=rt[dt],ct=n.get(Dt);let vt=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(vt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,ct.__webglTexture),jt(vt,Dt),At(q.__webglFramebuffer,L,Dt,i.COLOR_ATTACHMENT0+dt,vt,0),_(Dt)&&d(vt)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(dt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,et.__webglTexture),jt(dt,S),S.mipmaps&&S.mipmaps.length>0)for(let Pt=0;Pt<S.mipmaps.length;Pt++)At(q.__webglFramebuffer[Pt],L,S,i.COLOR_ATTACHMENT0,dt,Pt);else At(q.__webglFramebuffer,L,S,i.COLOR_ATTACHMENT0,dt,0);_(S)&&d(dt),e.unbindTexture()}L.depthBuffer&&Qt(L)}function $t(L){const S=L.textures;for(let q=0,et=S.length;q<et;q++){const rt=S[q];if(_(rt)){const tt=P(L),It=n.get(rt).__webglTexture;e.bindTexture(tt,It),d(tt),e.unbindTexture()}}}const Yt=[],Vt=[];function Rt(L){if(L.samples>0){if(Ct(L)===!1){const S=L.textures,q=L.width,et=L.height;let rt=i.COLOR_BUFFER_BIT;const tt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=n.get(L),dt=S.length>1;if(dt)for(let Dt=0;Dt<S.length;Dt++)e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer);const Pt=L.texture.mipmaps;Pt&&Pt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Dt=0;Dt<S.length;Dt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,It.__webglColorRenderbuffer[Dt]);const ct=n.get(S[Dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ct,0)}i.blitFramebuffer(0,0,q,et,0,0,q,et,rt,i.NEAREST),h===!0&&(Yt.length=0,Vt.length=0,Yt.push(i.COLOR_ATTACHMENT0+Dt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Yt.push(tt),Vt.push(tt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Vt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Yt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let Dt=0;Dt<S.length;Dt++){e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,It.__webglColorRenderbuffer[Dt]);const ct=n.get(S[Dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,ct,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&h){const S=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Se(L){return Math.min(r.maxSamples,L.samples)}function Ct(L){const S=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Kt(L){const S=a.render.frame;f.get(L)!==S&&(f.set(L,S),L.update())}function De(L,S){const q=L.colorSpace,et=L.format,rt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==Lr&&q!==Mi&&(he.getTransfer(q)===_e?(et!==On||rt!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),S}function we(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=k,this.setTexture2D=Q,this.setTexture2DArray=$,this.setTexture3D=st,this.setTextureCube=K,this.rebindTextures=Be,this.setupRenderTarget=I,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=Qt,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Ct}function G0(i,t){function e(n,r=Mi){let s;const a=he.getTransfer(r);if(n===Yn)return i.UNSIGNED_BYTE;if(n===al)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ll)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_u)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===vu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===mu)return i.BYTE;if(n===gu)return i.SHORT;if(n===is)return i.UNSIGNED_SHORT;if(n===ol)return i.INT;if(n===Wi)return i.UNSIGNED_INT;if(n===si)return i.FLOAT;if(n===cs)return i.HALF_FLOAT;if(n===xu)return i.ALPHA;if(n===Mu)return i.RGB;if(n===On)return i.RGBA;if(n===ss)return i.DEPTH_COMPONENT;if(n===os)return i.DEPTH_STENCIL;if(n===Su)return i.RED;if(n===cl)return i.RED_INTEGER;if(n===yu)return i.RG;if(n===ul)return i.RG_INTEGER;if(n===hl)return i.RGBA_INTEGER;if(n===Js||n===Qs||n===$s||n===to)if(a===_e)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Js)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===to)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Js)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$s)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===to)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ba||n===Aa||n===wa||n===Ra)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ba)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Aa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ra)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ca||n===Pa||n===La)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ca||n===Pa)return a===_e?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===La)return a===_e?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Da||n===Ua||n===Ia||n===Na||n===Fa||n===Oa||n===Ba||n===za||n===Ha||n===Va||n===Ga||n===ka||n===Wa||n===Xa)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Da)return a===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ua)return a===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ia)return a===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Na)return a===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fa)return a===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oa)return a===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ba)return a===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===za)return a===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ha)return a===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Va)return a===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ga)return a===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ka)return a===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wa)return a===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xa)return a===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ya||n===qa||n===ja)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Ya)return a===_e?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ja)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ka||n===Za||n===Ja||n===Qa)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ka)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Za)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ja)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const k0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,W0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class X0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Fu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ci({vertexShader:k0,fragmentShader:W0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new yn(new ds(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Y0 extends Ir{constructor(t,e){super();const n=this;let r=null,s=1,a=null,l="local-floor",h=1,c=null,f=null,p=null,g=null,v=null,M=null;const E=typeof XRWebGLBinding<"u",_=new X0,d={},P=e.getContextAttributes();let w=null,A=null;const N=[],R=[],O=new ee;let B=null;const y=new an;y.viewport=new xe;const T=new an;T.viewport=new xe;const F=[y,T],k=new dd;let X=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ot=N[nt];return ot===void 0&&(ot=new Ko,N[nt]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(nt){let ot=N[nt];return ot===void 0&&(ot=new Ko,N[nt]=ot),ot.getGripSpace()},this.getHand=function(nt){let ot=N[nt];return ot===void 0&&(ot=new Ko,N[nt]=ot),ot.getHandSpace()};function Q(nt){const ot=R.indexOf(nt.inputSource);if(ot===-1)return;const At=N[ot];At!==void 0&&(At.update(nt.inputSource,nt.frame,c||a),At.dispatchEvent({type:nt.type,data:nt.inputSource}))}function $(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",st);for(let nt=0;nt<N.length;nt++){const ot=R[nt];ot!==null&&(R[nt]=null,N[nt].disconnect(ot))}X=null,Y=null,_.reset();for(const nt in d)delete d[nt];t.setRenderTarget(w),v=null,g=null,p=null,r=null,A=null,ce.stop(),n.isPresenting=!1,t.setPixelRatio(B),t.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){s=nt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){l=nt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(nt){c=nt},this.getBaseLayer=function(){return g!==null?g:v},this.getBinding=function(){return p===null&&E&&(p=new XRWebGLBinding(r,e)),p},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(nt){if(r=nt,r!==null){if(w=t.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",$),r.addEventListener("inputsourceschange",st),P.xrCompatible!==!0&&await e.makeXRCompatible(),B=t.getPixelRatio(),t.getSize(O),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,Gt=null,Ut=null;P.depth&&(Ut=P.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,At=P.stencil?os:ss,Gt=P.stencil?rs:Wi);const Qt={colorFormat:e.RGBA8,depthFormat:Ut,scaleFactor:s};p=this.getBinding(),g=p.createProjectionLayer(Qt),r.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),A=new Xi(g.textureWidth,g.textureHeight,{format:On,type:Yn,depthTexture:new Nu(g.textureWidth,g.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:P.stencil,colorSpace:t.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const At={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:s};v=new XRWebGLLayer(r,e,At),r.updateRenderState({baseLayer:v}),t.setPixelRatio(1),t.setSize(v.framebufferWidth,v.framebufferHeight,!1),A=new Xi(v.framebufferWidth,v.framebufferHeight,{format:On,type:Yn,colorSpace:t.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(h),c=null,a=await r.requestReferenceSpace(l),ce.setContext(r),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function st(nt){for(let ot=0;ot<nt.removed.length;ot++){const At=nt.removed[ot],Gt=R.indexOf(At);Gt>=0&&(R[Gt]=null,N[Gt].disconnect(At))}for(let ot=0;ot<nt.added.length;ot++){const At=nt.added[ot];let Gt=R.indexOf(At);if(Gt===-1){for(let Qt=0;Qt<N.length;Qt++)if(Qt>=R.length){R.push(At),Gt=Qt;break}else if(R[Qt]===null){R[Qt]=At,Gt=Qt;break}if(Gt===-1)break}const Ut=N[Gt];Ut&&Ut.connect(At)}}const K=new G,ft=new G;function yt(nt,ot,At){K.setFromMatrixPosition(ot.matrixWorld),ft.setFromMatrixPosition(At.matrixWorld);const Gt=K.distanceTo(ft),Ut=ot.projectionMatrix.elements,Qt=At.projectionMatrix.elements,Be=Ut[14]/(Ut[10]-1),I=Ut[14]/(Ut[10]+1),$t=(Ut[9]+1)/Ut[5],Yt=(Ut[9]-1)/Ut[5],Vt=(Ut[8]-1)/Ut[0],Rt=(Qt[8]+1)/Qt[0],Se=Be*Vt,Ct=Be*Rt,Kt=Gt/(-Vt+Rt),De=Kt*-Vt;if(ot.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(De),nt.translateZ(Kt),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Ut[10]===-1)nt.projectionMatrix.copy(ot.projectionMatrix),nt.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const we=Be+Kt,L=I+Kt,S=Se-De,q=Ct+(Gt-De),et=$t*I/L*we,rt=Yt*I/L*we;nt.projectionMatrix.makePerspective(S,q,et,rt,we,L),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function Lt(nt,ot){ot===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ot.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(r===null)return;let ot=nt.near,At=nt.far;_.texture!==null&&(_.depthNear>0&&(ot=_.depthNear),_.depthFar>0&&(At=_.depthFar)),k.near=T.near=y.near=ot,k.far=T.far=y.far=At,(X!==k.near||Y!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),X=k.near,Y=k.far),k.layers.mask=nt.layers.mask|6,y.layers.mask=k.layers.mask&3,T.layers.mask=k.layers.mask&5;const Gt=nt.parent,Ut=k.cameras;Lt(k,Gt);for(let Qt=0;Qt<Ut.length;Qt++)Lt(Ut[Qt],Gt);Ut.length===2?yt(k,y,T):k.projectionMatrix.copy(y.projectionMatrix),jt(nt,k,Gt)};function jt(nt,ot,At){At===null?nt.matrix.copy(ot.matrixWorld):(nt.matrix.copy(At.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ot.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ot.projectionMatrix),nt.projectionMatrixInverse.copy(ot.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=so*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(g===null&&v===null))return h},this.setFoveation=function(nt){h=nt,g!==null&&(g.fixedFoveation=nt),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=nt)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(k)},this.getCameraTexture=function(nt){return d[nt]};let le=null;function Me(nt,ot){if(f=ot.getViewerPose(c||a),M=ot,f!==null){const At=f.views;v!==null&&(t.setRenderTargetFramebuffer(A,v.framebuffer),t.setRenderTarget(A));let Gt=!1;At.length!==k.cameras.length&&(k.cameras.length=0,Gt=!0);for(let I=0;I<At.length;I++){const $t=At[I];let Yt=null;if(v!==null)Yt=v.getViewport($t);else{const Rt=p.getViewSubImage(g,$t);Yt=Rt.viewport,I===0&&(t.setRenderTargetTextures(A,Rt.colorTexture,Rt.depthStencilTexture),t.setRenderTarget(A))}let Vt=F[I];Vt===void 0&&(Vt=new an,Vt.layers.enable(I),Vt.viewport=new xe,F[I]=Vt),Vt.matrix.fromArray($t.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray($t.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),I===0&&(k.matrix.copy(Vt.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Gt===!0&&k.cameras.push(Vt)}const Ut=r.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){p=n.getBinding();const I=p.getDepthInformation(At[0]);I&&I.isValid&&I.texture&&_.init(I,r.renderState)}if(Ut&&Ut.includes("camera-access")&&E){t.state.unbindTexture(),p=n.getBinding();for(let I=0;I<At.length;I++){const $t=At[I].camera;if($t){let Yt=d[$t];Yt||(Yt=new Fu,d[$t]=Yt);const Vt=p.getCameraImage($t);Yt.sourceTexture=Vt}}}}for(let At=0;At<N.length;At++){const Gt=R[At],Ut=N[At];Gt!==null&&Ut!==void 0&&Ut.update(Gt,ot,c||a)}le&&le(nt,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),M=null}const ce=new zu;ce.setAnimationLoop(Me),this.setAnimationLoop=function(nt){le=nt},this.dispose=function(){}}}const Ni=new li,q0=new Ae;function j0(i,t){function e(_,d){_.matrixAutoUpdate===!0&&_.updateMatrix(),d.value.copy(_.matrix)}function n(_,d){d.color.getRGB(_.fogColor.value,Pu(i)),d.isFog?(_.fogNear.value=d.near,_.fogFar.value=d.far):d.isFogExp2&&(_.fogDensity.value=d.density)}function r(_,d,P,w,A){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(_,d):d.isMeshToonMaterial?(s(_,d),p(_,d)):d.isMeshPhongMaterial?(s(_,d),f(_,d)):d.isMeshStandardMaterial?(s(_,d),g(_,d),d.isMeshPhysicalMaterial&&v(_,d,A)):d.isMeshMatcapMaterial?(s(_,d),M(_,d)):d.isMeshDepthMaterial?s(_,d):d.isMeshDistanceMaterial?(s(_,d),E(_,d)):d.isMeshNormalMaterial?s(_,d):d.isLineBasicMaterial?(a(_,d),d.isLineDashedMaterial&&l(_,d)):d.isPointsMaterial?h(_,d,P,w):d.isSpriteMaterial?c(_,d):d.isShadowMaterial?(_.color.value.copy(d.color),_.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(_,d){_.opacity.value=d.opacity,d.color&&_.diffuse.value.copy(d.color),d.emissive&&_.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(_.map.value=d.map,e(d.map,_.mapTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,e(d.alphaMap,_.alphaMapTransform)),d.bumpMap&&(_.bumpMap.value=d.bumpMap,e(d.bumpMap,_.bumpMapTransform),_.bumpScale.value=d.bumpScale,d.side===ln&&(_.bumpScale.value*=-1)),d.normalMap&&(_.normalMap.value=d.normalMap,e(d.normalMap,_.normalMapTransform),_.normalScale.value.copy(d.normalScale),d.side===ln&&_.normalScale.value.negate()),d.displacementMap&&(_.displacementMap.value=d.displacementMap,e(d.displacementMap,_.displacementMapTransform),_.displacementScale.value=d.displacementScale,_.displacementBias.value=d.displacementBias),d.emissiveMap&&(_.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,_.emissiveMapTransform)),d.specularMap&&(_.specularMap.value=d.specularMap,e(d.specularMap,_.specularMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest);const P=t.get(d),w=P.envMap,A=P.envMapRotation;w&&(_.envMap.value=w,Ni.copy(A),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),_.envMapRotation.value.setFromMatrix4(q0.makeRotationFromEuler(Ni)),_.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=d.reflectivity,_.ior.value=d.ior,_.refractionRatio.value=d.refractionRatio),d.lightMap&&(_.lightMap.value=d.lightMap,_.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,_.lightMapTransform)),d.aoMap&&(_.aoMap.value=d.aoMap,_.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,_.aoMapTransform))}function a(_,d){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,d.map&&(_.map.value=d.map,e(d.map,_.mapTransform))}function l(_,d){_.dashSize.value=d.dashSize,_.totalSize.value=d.dashSize+d.gapSize,_.scale.value=d.scale}function h(_,d,P,w){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,_.size.value=d.size*P,_.scale.value=w*.5,d.map&&(_.map.value=d.map,e(d.map,_.uvTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,e(d.alphaMap,_.alphaMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest)}function c(_,d){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,_.rotation.value=d.rotation,d.map&&(_.map.value=d.map,e(d.map,_.mapTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,e(d.alphaMap,_.alphaMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest)}function f(_,d){_.specular.value.copy(d.specular),_.shininess.value=Math.max(d.shininess,1e-4)}function p(_,d){d.gradientMap&&(_.gradientMap.value=d.gradientMap)}function g(_,d){_.metalness.value=d.metalness,d.metalnessMap&&(_.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,_.metalnessMapTransform)),_.roughness.value=d.roughness,d.roughnessMap&&(_.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,_.roughnessMapTransform)),d.envMap&&(_.envMapIntensity.value=d.envMapIntensity)}function v(_,d,P){_.ior.value=d.ior,d.sheen>0&&(_.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),_.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(_.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,_.sheenColorMapTransform)),d.sheenRoughnessMap&&(_.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,_.sheenRoughnessMapTransform))),d.clearcoat>0&&(_.clearcoat.value=d.clearcoat,_.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(_.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,_.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(_.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ln&&_.clearcoatNormalScale.value.negate())),d.dispersion>0&&(_.dispersion.value=d.dispersion),d.iridescence>0&&(_.iridescence.value=d.iridescence,_.iridescenceIOR.value=d.iridescenceIOR,_.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(_.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,_.iridescenceMapTransform)),d.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),d.transmission>0&&(_.transmission.value=d.transmission,_.transmissionSamplerMap.value=P.texture,_.transmissionSamplerSize.value.set(P.width,P.height),d.transmissionMap&&(_.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,_.transmissionMapTransform)),_.thickness.value=d.thickness,d.thicknessMap&&(_.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=d.attenuationDistance,_.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(_.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(_.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=d.specularIntensity,_.specularColor.value.copy(d.specularColor),d.specularColorMap&&(_.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,_.specularColorMapTransform)),d.specularIntensityMap&&(_.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,_.specularIntensityMapTransform))}function M(_,d){d.matcap&&(_.matcap.value=d.matcap)}function E(_,d){const P=t.get(d).light;_.referencePosition.value.setFromMatrixPosition(P.matrixWorld),_.nearDistance.value=P.shadow.camera.near,_.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function K0(i,t,e,n){let r={},s={},a=[];const l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(P,w){const A=w.program;n.uniformBlockBinding(P,A)}function c(P,w){let A=r[P.id];A===void 0&&(M(P),A=f(P),r[P.id]=A,P.addEventListener("dispose",_));const N=w.program;n.updateUBOMapping(P,N);const R=t.render.frame;s[P.id]!==R&&(g(P),s[P.id]=R)}function f(P){const w=p();P.__bindingPointIndex=w;const A=i.createBuffer(),N=P.__size,R=P.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,N,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,A),A}function p(){for(let P=0;P<l;P++)if(a.indexOf(P)===-1)return a.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(P){const w=r[P.id],A=P.uniforms,N=P.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let R=0,O=A.length;R<O;R++){const B=Array.isArray(A[R])?A[R]:[A[R]];for(let y=0,T=B.length;y<T;y++){const F=B[y];if(v(F,R,y,N)===!0){const k=F.__offset,X=Array.isArray(F.value)?F.value:[F.value];let Y=0;for(let Q=0;Q<X.length;Q++){const $=X[Q],st=E($);typeof $=="number"||typeof $=="boolean"?(F.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,k+Y,F.__data)):$.isMatrix3?(F.__data[0]=$.elements[0],F.__data[1]=$.elements[1],F.__data[2]=$.elements[2],F.__data[3]=0,F.__data[4]=$.elements[3],F.__data[5]=$.elements[4],F.__data[6]=$.elements[5],F.__data[7]=0,F.__data[8]=$.elements[6],F.__data[9]=$.elements[7],F.__data[10]=$.elements[8],F.__data[11]=0):($.toArray(F.__data,Y),Y+=st.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function v(P,w,A,N){const R=P.value,O=w+"_"+A;if(N[O]===void 0)return typeof R=="number"||typeof R=="boolean"?N[O]=R:N[O]=R.clone(),!0;{const B=N[O];if(typeof R=="number"||typeof R=="boolean"){if(B!==R)return N[O]=R,!0}else if(B.equals(R)===!1)return B.copy(R),!0}return!1}function M(P){const w=P.uniforms;let A=0;const N=16;for(let O=0,B=w.length;O<B;O++){const y=Array.isArray(w[O])?w[O]:[w[O]];for(let T=0,F=y.length;T<F;T++){const k=y[T],X=Array.isArray(k.value)?k.value:[k.value];for(let Y=0,Q=X.length;Y<Q;Y++){const $=X[Y],st=E($),K=A%N,ft=K%st.boundary,yt=K+ft;A+=ft,yt!==0&&N-yt<st.storage&&(A+=N-yt),k.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=A,A+=st.storage}}}const R=A%N;return R>0&&(A+=N-R),P.__size=A,P.__cache={},this}function E(P){const w={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(w.boundary=4,w.storage=4):P.isVector2?(w.boundary=8,w.storage=8):P.isVector3||P.isColor?(w.boundary=16,w.storage=12):P.isVector4?(w.boundary=16,w.storage=16):P.isMatrix3?(w.boundary=48,w.storage=48):P.isMatrix4?(w.boundary=64,w.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),w}function _(P){const w=P.target;w.removeEventListener("dispose",_);const A=a.indexOf(w.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function d(){for(const P in r)i.deleteBuffer(r[P]);a=[],r={},s={}}return{bind:h,update:c,dispose:d}}class Z0{constructor(t={}){const{canvas:e=Af(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:g=!1}=t;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;const M=new Uint32Array(4),E=new Int32Array(4);let _=null,d=null;const P=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let N=!1;this._outputColorSpace=_n;let R=0,O=0,B=null,y=-1,T=null;const F=new xe,k=new xe;let X=null;const Y=new ie(0);let Q=0,$=e.width,st=e.height,K=1,ft=null,yt=null;const Lt=new xe(0,0,$,st),jt=new xe(0,0,$,st);let le=!1;const Me=new pl;let ce=!1,nt=!1;const ot=new Ae,At=new G,Gt=new xe,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qt=!1;function Be(){return B===null?K:1}let I=n;function $t(b,V){return e.getContext(b,V)}try{const b={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:h,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${sl}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",lt,!1),I===null){const V="webgl2";if(I=$t(V,b),I===null)throw $t(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Yt,Vt,Rt,Se,Ct,Kt,De,we,L,S,q,et,rt,tt,It,dt,Pt,Dt,ct,vt,Ht,Nt,gt,qt;function z(){Yt=new og(I),Yt.init(),Nt=new G0(I,Yt),Vt=new $m(I,Yt,t,Nt),Rt=new H0(I,Yt),Vt.reversedDepthBuffer&&g&&Rt.buffers.depth.setReversed(!0),Se=new cg(I),Ct=new w0,Kt=new V0(I,Yt,Rt,Ct,Vt,Nt,Se),De=new eg(A),we=new sg(A),L=new md(I),gt=new Jm(I,L),S=new ag(I,L,Se,gt),q=new hg(I,S,L,Se),ct=new ug(I,Vt,Kt),dt=new tg(Ct),et=new A0(A,De,we,Yt,Vt,gt,dt),rt=new j0(A,Ct),tt=new C0,It=new N0(Yt),Dt=new Zm(A,De,we,Rt,q,v,h),Pt=new B0(A,q,Vt),qt=new K0(I,Se,Vt,Rt),vt=new Qm(I,Yt,Se),Ht=new lg(I,Yt,Se),Se.programs=et.programs,A.capabilities=Vt,A.extensions=Yt,A.properties=Ct,A.renderLists=tt,A.shadowMap=Pt,A.state=Rt,A.info=Se}z();const ut=new Y0(A,I);this.xr=ut,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const b=Yt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Yt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(b){b!==void 0&&(K=b,this.setSize($,st,!1))},this.getSize=function(b){return b.set($,st)},this.setSize=function(b,V,j=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=b,st=V,e.width=Math.floor(b*K),e.height=Math.floor(V*K),j===!0&&(e.style.width=b+"px",e.style.height=V+"px"),this.setViewport(0,0,b,V)},this.getDrawingBufferSize=function(b){return b.set($*K,st*K).floor()},this.setDrawingBufferSize=function(b,V,j){$=b,st=V,K=j,e.width=Math.floor(b*j),e.height=Math.floor(V*j),this.setViewport(0,0,b,V)},this.getCurrentViewport=function(b){return b.copy(F)},this.getViewport=function(b){return b.copy(Lt)},this.setViewport=function(b,V,j,J){b.isVector4?Lt.set(b.x,b.y,b.z,b.w):Lt.set(b,V,j,J),Rt.viewport(F.copy(Lt).multiplyScalar(K).round())},this.getScissor=function(b){return b.copy(jt)},this.setScissor=function(b,V,j,J){b.isVector4?jt.set(b.x,b.y,b.z,b.w):jt.set(b,V,j,J),Rt.scissor(k.copy(jt).multiplyScalar(K).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(b){Rt.setScissorTest(le=b)},this.setOpaqueSort=function(b){ft=b},this.setTransparentSort=function(b){yt=b},this.getClearColor=function(b){return b.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(b=!0,V=!0,j=!0){let J=0;if(b){let W=!1;if(B!==null){const ht=B.texture.format;W=ht===hl||ht===ul||ht===cl}if(W){const ht=B.texture.type,xt=ht===Yn||ht===Wi||ht===is||ht===rs||ht===al||ht===ll,bt=Dt.getClearColor(),_t=Dt.getClearAlpha(),Bt=bt.r,zt=bt.g,wt=bt.b;xt?(M[0]=Bt,M[1]=zt,M[2]=wt,M[3]=_t,I.clearBufferuiv(I.COLOR,0,M)):(E[0]=Bt,E[1]=zt,E[2]=wt,E[3]=_t,I.clearBufferiv(I.COLOR,0,E))}else J|=I.COLOR_BUFFER_BIT}V&&(J|=I.DEPTH_BUFFER_BIT),j&&(J|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),Dt.dispose(),tt.dispose(),It.dispose(),Ct.dispose(),De.dispose(),we.dispose(),q.dispose(),gt.dispose(),qt.dispose(),et.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",En),ut.removeEventListener("sessionend",jn),Kn.stop()};function pt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const b=Se.autoReset,V=Pt.enabled,j=Pt.autoUpdate,J=Pt.needsUpdate,W=Pt.type;z(),Se.autoReset=b,Pt.enabled=V,Pt.autoUpdate=j,Pt.needsUpdate=J,Pt.type=W}function lt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function it(b){const V=b.target;V.removeEventListener("dispose",it),Et(V)}function Et(b){Xt(b),Ct.remove(b)}function Xt(b){const V=Ct.get(b).programs;V!==void 0&&(V.forEach(function(j){et.releaseProgram(j)}),b.isShaderMaterial&&et.releaseShaderCache(b))}this.renderBufferDirect=function(b,V,j,J,W,ht){V===null&&(V=Ut);const xt=W.isMesh&&W.matrixWorld.determinant()<0,bt=Br(b,V,j,J,W);Rt.setMaterial(J,xt);let _t=j.index,Bt=1;if(J.wireframe===!0){if(_t=S.getWireframeAttribute(j),_t===void 0)return;Bt=2}const zt=j.drawRange,wt=j.attributes.position;let Zt=zt.start*Bt,fe=(zt.start+zt.count)*Bt;ht!==null&&(Zt=Math.max(Zt,ht.start*Bt),fe=Math.min(fe,(ht.start+ht.count)*Bt)),_t!==null?(Zt=Math.max(Zt,0),fe=Math.min(fe,_t.count)):wt!=null&&(Zt=Math.max(Zt,0),fe=Math.min(fe,wt.count));const Re=fe-Zt;if(Re<0||Re===1/0)return;gt.setup(W,J,bt,j,_t);let pe,me=vt;if(_t!==null&&(pe=L.get(_t),me=Ht,me.setIndex(pe)),W.isMesh)J.wireframe===!0?(Rt.setLineWidth(J.wireframeLinewidth*Be()),me.setMode(I.LINES)):me.setMode(I.TRIANGLES);else if(W.isLine){let Ot=J.linewidth;Ot===void 0&&(Ot=1),Rt.setLineWidth(Ot*Be()),W.isLineSegments?me.setMode(I.LINES):W.isLineLoop?me.setMode(I.LINE_LOOP):me.setMode(I.LINE_STRIP)}else W.isPoints?me.setMode(I.POINTS):W.isSprite&&me.setMode(I.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)ls("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),me.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Yt.get("WEBGL_multi_draw"))me.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ot=W._multiDrawStarts,Ee=W._multiDrawCounts,se=W._multiDrawCount,qe=_t?L.get(_t).bytesPerElement:1,Zn=Ct.get(J).currentProgram.getUniforms();for(let ge=0;ge<se;ge++)Zn.setValue(I,"_gl_DrawID",ge),me.render(Ot[ge]/qe,Ee[ge])}else if(W.isInstancedMesh)me.renderInstances(Zt,Re,W.count);else if(j.isInstancedBufferGeometry){const Ot=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ee=Math.min(j.instanceCount,Ot);me.renderInstances(Zt,Re,Ee)}else me.render(Zt,Re)};function de(b,V,j){b.transparent===!0&&b.side===xn&&b.forceSinglePass===!1?(b.side=ln,b.needsUpdate=!0,ui(b,V,j),b.side=wi,b.needsUpdate=!0,ui(b,V,j),b.side=xn):ui(b,V,j)}this.compile=function(b,V,j=null){j===null&&(j=b),d=It.get(j),d.init(V),w.push(d),j.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(d.pushLight(W),W.castShadow&&d.pushShadow(W))}),b!==j&&b.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(d.pushLight(W),W.castShadow&&d.pushShadow(W))}),d.setupLights();const J=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const ht=W.material;if(ht)if(Array.isArray(ht))for(let xt=0;xt<ht.length;xt++){const bt=ht[xt];de(bt,j,W),J.add(bt)}else de(ht,j,W),J.add(ht)}),d=w.pop(),J},this.compileAsync=function(b,V,j=null){const J=this.compile(b,V,j);return new Promise(W=>{function ht(){if(J.forEach(function(xt){Ct.get(xt).currentProgram.isReady()&&J.delete(xt)}),J.size===0){W(b);return}setTimeout(ht,10)}Yt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let re=null;function sn(b){re&&re(b)}function En(){Kn.stop()}function jn(){Kn.start()}const Kn=new zu;Kn.setAnimationLoop(sn),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(b){re=b,ut.setAnimationLoop(b),b===null?Kn.stop():Kn.start()},ut.addEventListener("sessionstart",En),ut.addEventListener("sessionend",jn),this.render=function(b,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(V),V=ut.getCamera()),b.isScene===!0&&b.onBeforeRender(A,b,V,B),d=It.get(b,w.length),d.init(V),w.push(d),ot.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Me.setFromProjectionMatrix(ot,Xn,V.reversedDepth),nt=this.localClippingEnabled,ce=dt.init(this.clippingPlanes,nt),_=tt.get(b,P.length),_.init(),P.push(_),ut.enabled===!0&&ut.isPresenting===!0){const ht=A.xr.getDepthSensingMesh();ht!==null&&un(ht,V,-1/0,A.sortObjects)}un(b,V,0,A.sortObjects),_.finish(),A.sortObjects===!0&&_.sort(ft,yt),Qt=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,Qt&&Dt.addToRenderList(_,b),this.info.render.frame++,ce===!0&&dt.beginShadows();const j=d.state.shadowsArray;Pt.render(j,b,V),ce===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=_.opaque,W=_.transmissive;if(d.setupLights(),V.isArrayCamera){const ht=V.cameras;if(W.length>0)for(let xt=0,bt=ht.length;xt<bt;xt++){const _t=ht[xt];Or(J,W,b,_t)}Qt&&Dt.render(b);for(let xt=0,bt=ht.length;xt<bt;xt++){const _t=ht[xt];Vn(_,b,_t,_t.viewport)}}else W.length>0&&Or(J,W,b,V),Qt&&Dt.render(b),Vn(_,b,V);B!==null&&O===0&&(Kt.updateMultisampleRenderTarget(B),Kt.updateRenderTargetMipmap(B)),b.isScene===!0&&b.onAfterRender(A,b,V),gt.resetDefaultState(),y=-1,T=null,w.pop(),w.length>0?(d=w[w.length-1],ce===!0&&dt.setGlobalState(A.clippingPlanes,d.state.camera)):d=null,P.pop(),P.length>0?_=P[P.length-1]:_=null};function un(b,V,j,J){if(b.visible===!1)return;if(b.layers.test(V.layers)){if(b.isGroup)j=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(V);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Me.intersectsSprite(b)){J&&Gt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ot);const xt=q.update(b),bt=b.material;bt.visible&&_.push(b,xt,bt,j,Gt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Me.intersectsObject(b))){const xt=q.update(b),bt=b.material;if(J&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Gt.copy(b.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Gt.copy(xt.boundingSphere.center)),Gt.applyMatrix4(b.matrixWorld).applyMatrix4(ot)),Array.isArray(bt)){const _t=xt.groups;for(let Bt=0,zt=_t.length;Bt<zt;Bt++){const wt=_t[Bt],Zt=bt[wt.materialIndex];Zt&&Zt.visible&&_.push(b,xt,Zt,j,Gt.z,wt)}}else bt.visible&&_.push(b,xt,bt,j,Gt.z,null)}}const ht=b.children;for(let xt=0,bt=ht.length;xt<bt;xt++)un(ht[xt],V,j,J)}function Vn(b,V,j,J){const W=b.opaque,ht=b.transmissive,xt=b.transparent;d.setupLightsView(j),ce===!0&&dt.setGlobalState(A.clippingPlanes,j),J&&Rt.viewport(F.copy(J)),W.length>0&&ye(W,V,j),ht.length>0&&ye(ht,V,j),xt.length>0&&ye(xt,V,j),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function Or(b,V,j,J){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[J.id]===void 0&&(d.state.transmissionRenderTarget[J.id]=new Xi(1,1,{generateMipmaps:!0,type:Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float")?cs:Yn,minFilter:yi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));const ht=d.state.transmissionRenderTarget[J.id],xt=J.viewport||F;ht.setSize(xt.z*A.transmissionResolutionScale,xt.w*A.transmissionResolutionScale);const bt=A.getRenderTarget(),_t=A.getActiveCubeFace(),Bt=A.getActiveMipmapLevel();A.setRenderTarget(ht),A.getClearColor(Y),Q=A.getClearAlpha(),Q<1&&A.setClearColor(16777215,.5),A.clear(),Qt&&Dt.render(j);const zt=A.toneMapping;A.toneMapping=bi;const wt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),d.setupLightsView(J),ce===!0&&dt.setGlobalState(A.clippingPlanes,J),ye(b,j,J),Kt.updateMultisampleRenderTarget(ht),Kt.updateRenderTargetMipmap(ht),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let fe=0,Re=V.length;fe<Re;fe++){const pe=V[fe],me=pe.object,Ot=pe.geometry,Ee=pe.material,se=pe.group;if(Ee.side===xn&&me.layers.test(J.layers)){const qe=Ee.side;Ee.side=ln,Ee.needsUpdate=!0,hn(me,j,J,Ot,Ee,se),Ee.side=qe,Ee.needsUpdate=!0,Zt=!0}}Zt===!0&&(Kt.updateMultisampleRenderTarget(ht),Kt.updateRenderTargetMipmap(ht))}A.setRenderTarget(bt,_t,Bt),A.setClearColor(Y,Q),wt!==void 0&&(J.viewport=wt),A.toneMapping=zt}function ye(b,V,j){const J=V.isScene===!0?V.overrideMaterial:null;for(let W=0,ht=b.length;W<ht;W++){const xt=b[W],bt=xt.object,_t=xt.geometry,Bt=xt.group;let zt=xt.material;zt.allowOverride===!0&&J!==null&&(zt=J),bt.layers.test(j.layers)&&hn(bt,V,j,_t,zt,Bt)}}function hn(b,V,j,J,W,ht){b.onBeforeRender(A,V,j,J,W,ht),b.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(A,V,j,J,b,ht),W.transparent===!0&&W.side===xn&&W.forceSinglePass===!1?(W.side=ln,W.needsUpdate=!0,A.renderBufferDirect(j,V,J,W,b,ht),W.side=wi,W.needsUpdate=!0,A.renderBufferDirect(j,V,J,W,b,ht),W.side=xn):A.renderBufferDirect(j,V,J,W,b,ht),b.onAfterRender(A,V,j,J,W,ht)}function ui(b,V,j){V.isScene!==!0&&(V=Ut);const J=Ct.get(b),W=d.state.lights,ht=d.state.shadowsArray,xt=W.state.version,bt=et.getParameters(b,W.state,ht,V,j),_t=et.getProgramCacheKey(bt);let Bt=J.programs;J.environment=b.isMeshStandardMaterial?V.environment:null,J.fog=V.fog,J.envMap=(b.isMeshStandardMaterial?we:De).get(b.envMap||J.environment),J.envMapRotation=J.environment!==null&&b.envMap===null?V.environmentRotation:b.envMapRotation,Bt===void 0&&(b.addEventListener("dispose",it),Bt=new Map,J.programs=Bt);let zt=Bt.get(_t);if(zt!==void 0){if(J.currentProgram===zt&&J.lightsStateVersion===xt)return Ri(b,bt),zt}else bt.uniforms=et.getUniforms(b),b.onBeforeCompile(bt,A),zt=et.acquireProgram(bt,_t),Bt.set(_t,zt),J.uniforms=bt.uniforms;const wt=J.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(wt.clippingPlanes=dt.uniform),Ri(b,bt),J.needsLights=Ci(b),J.lightsStateVersion=xt,J.needsLights&&(wt.ambientLightColor.value=W.state.ambient,wt.lightProbe.value=W.state.probe,wt.directionalLights.value=W.state.directional,wt.directionalLightShadows.value=W.state.directionalShadow,wt.spotLights.value=W.state.spot,wt.spotLightShadows.value=W.state.spotShadow,wt.rectAreaLights.value=W.state.rectArea,wt.ltc_1.value=W.state.rectAreaLTC1,wt.ltc_2.value=W.state.rectAreaLTC2,wt.pointLights.value=W.state.point,wt.pointLightShadows.value=W.state.pointShadow,wt.hemisphereLights.value=W.state.hemi,wt.directionalShadowMap.value=W.state.directionalShadowMap,wt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,wt.spotShadowMap.value=W.state.spotShadowMap,wt.spotLightMatrix.value=W.state.spotLightMatrix,wt.spotLightMap.value=W.state.spotLightMap,wt.pointShadowMap.value=W.state.pointShadowMap,wt.pointShadowMatrix.value=W.state.pointShadowMatrix),J.currentProgram=zt,J.uniformsList=null,zt}function ps(b){if(b.uniformsList===null){const V=b.currentProgram.getUniforms();b.uniformsList=eo.seqWithValue(V.seq,b.uniforms)}return b.uniformsList}function Ri(b,V){const j=Ct.get(b);j.outputColorSpace=V.outputColorSpace,j.batching=V.batching,j.batchingColor=V.batchingColor,j.instancing=V.instancing,j.instancingColor=V.instancingColor,j.instancingMorph=V.instancingMorph,j.skinning=V.skinning,j.morphTargets=V.morphTargets,j.morphNormals=V.morphNormals,j.morphColors=V.morphColors,j.morphTargetsCount=V.morphTargetsCount,j.numClippingPlanes=V.numClippingPlanes,j.numIntersection=V.numClipIntersection,j.vertexAlphas=V.vertexAlphas,j.vertexTangents=V.vertexTangents,j.toneMapping=V.toneMapping}function Br(b,V,j,J,W){V.isScene!==!0&&(V=Ut),Kt.resetTextureUnits();const ht=V.fog,xt=J.isMeshStandardMaterial?V.environment:null,bt=B===null?A.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Lr,_t=(J.isMeshStandardMaterial?we:De).get(J.envMap||xt),Bt=J.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,zt=!!j.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),wt=!!j.morphAttributes.position,Zt=!!j.morphAttributes.normal,fe=!!j.morphAttributes.color;let Re=bi;J.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Re=A.toneMapping);const pe=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,me=pe!==void 0?pe.length:0,Ot=Ct.get(J),Ee=d.state.lights;if(ce===!0&&(nt===!0||b!==T)){const ze=b===T&&J.id===y;dt.setState(J,b,ze)}let se=!1;J.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Ee.state.version||Ot.outputColorSpace!==bt||W.isBatchedMesh&&Ot.batching===!1||!W.isBatchedMesh&&Ot.batching===!0||W.isBatchedMesh&&Ot.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ot.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ot.instancing===!1||!W.isInstancedMesh&&Ot.instancing===!0||W.isSkinnedMesh&&Ot.skinning===!1||!W.isSkinnedMesh&&Ot.skinning===!0||W.isInstancedMesh&&Ot.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ot.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ot.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ot.instancingMorph===!1&&W.morphTexture!==null||Ot.envMap!==_t||J.fog===!0&&Ot.fog!==ht||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==dt.numPlanes||Ot.numIntersection!==dt.numIntersection)||Ot.vertexAlphas!==Bt||Ot.vertexTangents!==zt||Ot.morphTargets!==wt||Ot.morphNormals!==Zt||Ot.morphColors!==fe||Ot.toneMapping!==Re||Ot.morphTargetsCount!==me)&&(se=!0):(se=!0,Ot.__version=J.version);let qe=Ot.currentProgram;se===!0&&(qe=ui(J,V,W));let Zn=!1,ge=!1,hi=!1;const Te=qe.getUniforms(),Ve=Ot.uniforms;if(Rt.useProgram(qe.program)&&(Zn=!0,ge=!0,hi=!0),J.id!==y&&(y=J.id,ge=!0),Zn||T!==b){Rt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Te.setValue(I,"projectionMatrix",b.projectionMatrix),Te.setValue(I,"viewMatrix",b.matrixWorldInverse);const je=Te.map.cameraPosition;je!==void 0&&je.setValue(I,At.setFromMatrixPosition(b.matrixWorld)),Vt.logarithmicDepthBuffer&&Te.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Te.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),T!==b&&(T=b,ge=!0,hi=!0)}if(W.isSkinnedMesh){Te.setOptional(I,W,"bindMatrix"),Te.setOptional(I,W,"bindMatrixInverse");const ze=W.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),Te.setValue(I,"boneTexture",ze.boneTexture,Kt))}W.isBatchedMesh&&(Te.setOptional(I,W,"batchingTexture"),Te.setValue(I,"batchingTexture",W._matricesTexture,Kt),Te.setOptional(I,W,"batchingIdTexture"),Te.setValue(I,"batchingIdTexture",W._indirectTexture,Kt),Te.setOptional(I,W,"batchingColorTexture"),W._colorsTexture!==null&&Te.setValue(I,"batchingColorTexture",W._colorsTexture,Kt));const en=j.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&ct.update(W,j,qe),(ge||Ot.receiveShadow!==W.receiveShadow)&&(Ot.receiveShadow=W.receiveShadow,Te.setValue(I,"receiveShadow",W.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Ve.envMap.value=_t,Ve.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&V.environment!==null&&(Ve.envMapIntensity.value=V.environmentIntensity),ge&&(Te.setValue(I,"toneMappingExposure",A.toneMappingExposure),Ot.needsLights&&ji(Ve,hi),ht&&J.fog===!0&&rt.refreshFogUniforms(Ve,ht),rt.refreshMaterialUniforms(Ve,J,K,st,d.state.transmissionRenderTarget[b.id]),eo.upload(I,ps(Ot),Ve,Kt)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(eo.upload(I,ps(Ot),Ve,Kt),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Te.setValue(I,"center",W.center),Te.setValue(I,"modelViewMatrix",W.modelViewMatrix),Te.setValue(I,"normalMatrix",W.normalMatrix),Te.setValue(I,"modelMatrix",W.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const ze=J.uniformsGroups;for(let je=0,Vr=ze.length;je<Vr;je++){const Gn=ze[je];qt.update(Gn,qe),qt.bind(Gn,qe)}}return qe}function ji(b,V){b.ambientLightColor.needsUpdate=V,b.lightProbe.needsUpdate=V,b.directionalLights.needsUpdate=V,b.directionalLightShadows.needsUpdate=V,b.pointLights.needsUpdate=V,b.pointLightShadows.needsUpdate=V,b.spotLights.needsUpdate=V,b.spotLightShadows.needsUpdate=V,b.rectAreaLights.needsUpdate=V,b.hemisphereLights.needsUpdate=V}function Ci(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(b,V,j){const J=Ct.get(b);J.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Ct.get(b.texture).__webglTexture=V,Ct.get(b.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:j,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,V){const j=Ct.get(b);j.__webglFramebuffer=V,j.__useDefaultFramebuffer=V===void 0};const ms=I.createFramebuffer();this.setRenderTarget=function(b,V=0,j=0){B=b,R=V,O=j;let J=!0,W=null,ht=!1,xt=!1;if(b){const _t=Ct.get(b);if(_t.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(I.FRAMEBUFFER,null),J=!1;else if(_t.__webglFramebuffer===void 0)Kt.setupRenderTarget(b);else if(_t.__hasExternalTextures)Kt.rebindTextures(b,Ct.get(b.texture).__webglTexture,Ct.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const wt=b.depthTexture;if(_t.__boundDepthTexture!==wt){if(wt!==null&&Ct.has(wt)&&(b.width!==wt.image.width||b.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Kt.setupDepthRenderbuffer(b)}}const Bt=b.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(xt=!0);const zt=Ct.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(zt[V])?W=zt[V][j]:W=zt[V],ht=!0):b.samples>0&&Kt.useMultisampledRTT(b)===!1?W=Ct.get(b).__webglMultisampledFramebuffer:Array.isArray(zt)?W=zt[j]:W=zt,F.copy(b.viewport),k.copy(b.scissor),X=b.scissorTest}else F.copy(Lt).multiplyScalar(K).floor(),k.copy(jt).multiplyScalar(K).floor(),X=le;if(j!==0&&(W=ms),Rt.bindFramebuffer(I.FRAMEBUFFER,W)&&J&&Rt.drawBuffers(b,W),Rt.viewport(F),Rt.scissor(k),Rt.setScissorTest(X),ht){const _t=Ct.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+V,_t.__webglTexture,j)}else if(xt){const _t=V;for(let Bt=0;Bt<b.textures.length;Bt++){const zt=Ct.get(b.textures[Bt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Bt,zt.__webglTexture,j,_t)}}else if(b!==null&&j!==0){const _t=Ct.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,_t.__webglTexture,j)}y=-1},this.readRenderTargetPixels=function(b,V,j,J,W,ht,xt,bt=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=Ct.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xt!==void 0&&(_t=_t[xt]),_t){Rt.bindFramebuffer(I.FRAMEBUFFER,_t);try{const Bt=b.textures[bt],zt=Bt.format,wt=Bt.type;if(!Vt.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=b.width-J&&j>=0&&j<=b.height-W&&(b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+bt),I.readPixels(V,j,J,W,Nt.convert(zt),Nt.convert(wt),ht))}finally{const Bt=B!==null?Ct.get(B).__webglFramebuffer:null;Rt.bindFramebuffer(I.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(b,V,j,J,W,ht,xt,bt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=Ct.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xt!==void 0&&(_t=_t[xt]),_t)if(V>=0&&V<=b.width-J&&j>=0&&j<=b.height-W){Rt.bindFramebuffer(I.FRAMEBUFFER,_t);const Bt=b.textures[bt],zt=Bt.format,wt=Bt.type;if(!Vt.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Zt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Zt),I.bufferData(I.PIXEL_PACK_BUFFER,ht.byteLength,I.STREAM_READ),b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+bt),I.readPixels(V,j,J,W,Nt.convert(zt),Nt.convert(wt),0);const fe=B!==null?Ct.get(B).__webglFramebuffer:null;Rt.bindFramebuffer(I.FRAMEBUFFER,fe);const Re=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await wf(I,Re,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Zt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ht),I.deleteBuffer(Zt),I.deleteSync(Re),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,V=null,j=0){const J=Math.pow(2,-j),W=Math.floor(b.image.width*J),ht=Math.floor(b.image.height*J),xt=V!==null?V.x:0,bt=V!==null?V.y:0;Kt.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,j,0,0,xt,bt,W,ht),Rt.unbindTexture()};const zr=I.createFramebuffer(),Hr=I.createFramebuffer();this.copyTextureToTexture=function(b,V,j=null,J=null,W=0,ht=null){ht===null&&(W!==0?(ls("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ht=W,W=0):ht=0);let xt,bt,_t,Bt,zt,wt,Zt,fe,Re;const pe=b.isCompressedTexture?b.mipmaps[ht]:b.image;if(j!==null)xt=j.max.x-j.min.x,bt=j.max.y-j.min.y,_t=j.isBox3?j.max.z-j.min.z:1,Bt=j.min.x,zt=j.min.y,wt=j.isBox3?j.min.z:0;else{const en=Math.pow(2,-W);xt=Math.floor(pe.width*en),bt=Math.floor(pe.height*en),b.isDataArrayTexture?_t=pe.depth:b.isData3DTexture?_t=Math.floor(pe.depth*en):_t=1,Bt=0,zt=0,wt=0}J!==null?(Zt=J.x,fe=J.y,Re=J.z):(Zt=0,fe=0,Re=0);const me=Nt.convert(V.format),Ot=Nt.convert(V.type);let Ee;V.isData3DTexture?(Kt.setTexture3D(V,0),Ee=I.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(Kt.setTexture2DArray(V,0),Ee=I.TEXTURE_2D_ARRAY):(Kt.setTexture2D(V,0),Ee=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,V.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,V.unpackAlignment);const se=I.getParameter(I.UNPACK_ROW_LENGTH),qe=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Zn=I.getParameter(I.UNPACK_SKIP_PIXELS),ge=I.getParameter(I.UNPACK_SKIP_ROWS),hi=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,pe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,pe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Bt),I.pixelStorei(I.UNPACK_SKIP_ROWS,zt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,wt);const Te=b.isDataArrayTexture||b.isData3DTexture,Ve=V.isDataArrayTexture||V.isData3DTexture;if(b.isDepthTexture){const en=Ct.get(b),ze=Ct.get(V),je=Ct.get(en.__renderTarget),Vr=Ct.get(ze.__renderTarget);Rt.bindFramebuffer(I.READ_FRAMEBUFFER,je.__webglFramebuffer),Rt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Vr.__webglFramebuffer);for(let Gn=0;Gn<_t;Gn++)Te&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ct.get(b).__webglTexture,W,wt+Gn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ct.get(V).__webglTexture,ht,Re+Gn)),I.blitFramebuffer(Bt,zt,xt,bt,Zt,fe,xt,bt,I.DEPTH_BUFFER_BIT,I.NEAREST);Rt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(W!==0||b.isRenderTargetTexture||Ct.has(b)){const en=Ct.get(b),ze=Ct.get(V);Rt.bindFramebuffer(I.READ_FRAMEBUFFER,zr),Rt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Hr);for(let je=0;je<_t;je++)Te?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,en.__webglTexture,W,wt+je):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,en.__webglTexture,W),Ve?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ze.__webglTexture,ht,Re+je):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ze.__webglTexture,ht),W!==0?I.blitFramebuffer(Bt,zt,xt,bt,Zt,fe,xt,bt,I.COLOR_BUFFER_BIT,I.NEAREST):Ve?I.copyTexSubImage3D(Ee,ht,Zt,fe,Re+je,Bt,zt,xt,bt):I.copyTexSubImage2D(Ee,ht,Zt,fe,Bt,zt,xt,bt);Rt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Ve?b.isDataTexture||b.isData3DTexture?I.texSubImage3D(Ee,ht,Zt,fe,Re,xt,bt,_t,me,Ot,pe.data):V.isCompressedArrayTexture?I.compressedTexSubImage3D(Ee,ht,Zt,fe,Re,xt,bt,_t,me,pe.data):I.texSubImage3D(Ee,ht,Zt,fe,Re,xt,bt,_t,me,Ot,pe):b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ht,Zt,fe,xt,bt,me,Ot,pe.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ht,Zt,fe,pe.width,pe.height,me,pe.data):I.texSubImage2D(I.TEXTURE_2D,ht,Zt,fe,xt,bt,me,Ot,pe);I.pixelStorei(I.UNPACK_ROW_LENGTH,se),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,qe),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Zn),I.pixelStorei(I.UNPACK_SKIP_ROWS,ge),I.pixelStorei(I.UNPACK_SKIP_IMAGES,hi),ht===0&&V.generateMipmaps&&I.generateMipmap(Ee),Rt.unbindTexture()},this.initRenderTarget=function(b){Ct.get(b).__webglFramebuffer===void 0&&Kt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Kt.setTextureCube(b,0):b.isData3DTexture?Kt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Kt.setTexture2DArray(b,0):Kt.setTexture2D(b,0),Rt.unbindTexture()},this.resetState=function(){R=0,O=0,B=null,Rt.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}}class J0{constructor({size:t=512,mobile:e=!1}={}){this.size=t,this.mobile=e,this.canvas=document.createElement("canvas"),this.canvas.width=t,this.canvas.height=t,this.renderer=new Z0({canvas:this.canvas,alpha:!0,antialias:!this.mobile,powerPreference:"high-performance",preserveDrawingBuffer:!1}),this.renderer.setSize(t,t,!1),this.renderer.setPixelRatio(this.mobile?Math.min(window.devicePixelRatio,2):window.devicePixelRatio),this.renderer.toneMapping=du,this.renderer.toneMappingExposure=1.15,this.scene=new Qf,this.camera=new an(80,1,.1,100),this.camera.position.set(0,0,30),this.camera.lookAt(0,0,0),this.rootGroup=new Ei,this.rootGroup.rotation.x=.3,this.scene.add(this.rootGroup),this._buildMagicArray()}_makeAura(t,e,n,r=!1){const s=document.createElement("canvas");s.width=256,s.height=256;const a=s.getContext("2d"),l=a.createRadialGradient(128,128,0,128,128,128);return r?(l.addColorStop(0,`rgba(${t},${e},${n},0.85)`),l.addColorStop(.2,`rgba(${t},${e},${n},0.5)`),l.addColorStop(.45,`rgba(${t},${e},${n},0.12)`),l.addColorStop(1,"rgba(0,0,0,0)")):(l.addColorStop(0,`rgba(${t},${e},${n},0.75)`),l.addColorStop(.15,`rgba(${t},${e},${n},0.3)`),l.addColorStop(.4,`rgba(${t},${e},${n},0.06)`),l.addColorStop(1,"rgba(0,0,0,0)")),a.fillStyle=l,a.fillRect(0,0,256,256),new Mc(s)}_makeRuneCircle(){const e=document.createElement("canvas");e.width=1024,e.height=1024;const n=e.getContext("2d"),r=1024/2,s=1024/2;n.strokeStyle="#ffeeaa",n.fillStyle="#ffeeaa",n.shadowColor="#ff8800",n.shadowBlur=18,n.beginPath(),n.arc(r,s,15,0,Math.PI*2),n.fill();const a=(c,f,p)=>{n.beginPath();for(let g=0;g<c*2;g++){const v=g%2===0?f:p,M=g/(c*2)*Math.PI*2-Math.PI/2;g===0?n.moveTo(r+Math.cos(M)*v,s+Math.sin(M)*v):n.lineTo(r+Math.cos(M)*v,s+Math.sin(M)*v)}n.closePath(),n.fill(),n.stroke()};n.lineWidth=2,a(4,150,25),n.save(),n.translate(r,s),n.rotate(Math.PI/4),n.translate(-r,-s),a(4,100,25),n.restore(),n.lineWidth=5,n.beginPath(),n.arc(r,s,160,0,Math.PI*2),n.stroke(),n.lineWidth=1,n.beginPath(),n.arc(r,s,175,0,Math.PI*2),n.stroke(),n.lineWidth=3;const l=(c,f)=>{n.save(),n.translate(r,s),n.rotate(f),n.beginPath(),n.rect(-c,-c,c*2,c*2),n.stroke(),n.restore()};l(180,0),l(180,Math.PI/4),n.lineWidth=2,n.beginPath(),n.arc(r,s,260,0,Math.PI*2),n.stroke(),n.lineWidth=6,n.beginPath(),n.arc(r,s,275,0,Math.PI*2),n.stroke();for(let c=0;c<24;c++){const f=c/24*Math.PI*2,p=325;n.beginPath(),n.arc(r+Math.cos(f)*p,s+Math.sin(f)*p,c%2===0?6:3,0,Math.PI*2),n.fill()}n.lineWidth=4,n.beginPath(),n.arc(r,s,370,0,Math.PI*2),n.stroke(),n.lineWidth=15,n.beginPath(),n.arc(r,s,395,0,Math.PI*2),n.stroke(),n.lineWidth=2,n.beginPath(),n.arc(r,s,415,0,Math.PI*2),n.stroke();const h=new Mc(e);return h.anisotropy=4,h}_buildMagicArray(){this.orbitRadius=7.5,this.orbsGroup=new Ei,this.rootGroup.add(this.orbsGroup);const t=new ld,e=[{idx:0,angle:0,glow:43775,ptype:"drops",ringColor:52479},{idx:1,angle:Math.PI*2/5,glow:16733440,ptype:"sparks",ringColor:16724736},{idx:2,angle:Math.PI*4/5,glow:16763904,ptype:"dust",ringColor:16759552},{idx:3,angle:Math.PI*6/5,glow:65416,ptype:"feathers",ringColor:65450},{idx:4,angle:Math.PI*8/5,glow:11141375,ptype:"electrons",ringColor:13369599}];this.orbs=[],e.forEach((r,s)=>{const a=new Ei,l=new URL(Object.assign({"../textures/user_flat_orb_0.png":Dh,"../textures/user_flat_orb_1.png":Uh,"../textures/user_flat_orb_2.png":Ih,"../textures/user_flat_orb_3.png":Nh,"../textures/user_flat_orb_4.png":Fh})[`../textures/user_flat_orb_${r.idx}.png`],import.meta.url).href,h=t.load(l);h.minFilter=yi,h.magFilter=Fn,h.anisotropy=this.mobile?4:16,h.colorSpace=_n;const c=new ts({map:h,transparent:!0,depthWrite:!1}),f=new zs(c);f.scale.set(2.8,2.8,1),a.add(f);const p=new ts({map:h,transparent:!0,blending:pn,opacity:.1,depthWrite:!1}),g=new zs(p);g.scale.set(3,3,1),a.add(g);const v=this._makeAura(r.glow>>16&255,r.glow>>8&255,r.glow&255),M=new zs(new ts({map:v,transparent:!0,blending:pn,depthWrite:!1,opacity:.06}));M.scale.set(5,5,1),a.add(M);const E=new na(r.glow,.6,10);a.add(E);const _=new $e,d=30,P=new Float32Array(d*3);_.setAttribute("position",new Xe(P,3));const w=new tl({color:r.glow,transparent:!0,opacity:.6,blending:pn}),A=new gc(_,w);this.rootGroup.add(A);const N=new $e,R=new Float32Array(6);N.setAttribute("position",new Xe(R,3));const O=new tl({color:r.glow,transparent:!0,opacity:.4,blending:pn}),B=new gc(N,O);this.rootGroup.add(B);const y=new Ei,T=new yn(new co(1.5,1.7,64),new gr({color:r.ringColor,transparent:!0,opacity:.7,side:xn,blending:pn,depthWrite:!1}));T.rotation.x=-Math.PI/2,y.add(T);const F=new yn(new co(.9,1.3,64),new gr({color:r.ringColor,transparent:!0,opacity:.9,side:xn,blending:pn,depthWrite:!1}));F.rotation.x=-Math.PI/2,F.position.y=-.3,y.add(F);const k=new yn(new ml(1.6,.4,1.5,64,1,!0),new gr({color:r.ringColor,transparent:!0,opacity:.15,side:xn,blending:pn,depthWrite:!1}));k.position.y=.75,y.add(k),y.position.y=-1.9,a.add(y);const X=this.mobile?20:40,Y=new $e,Q=new Float32Array(X*3);for(let K=0;K<X;K++)Q[K*3]=(Math.random()-.5)*5,Q[K*3+1]=(Math.random()-.5)*5,Q[K*3+2]=(Math.random()-.5)*5;Y.setAttribute("position",new Xe(Q,3));const $=new Iu({color:16777215,size:.35,map:v,transparent:!0,blending:pn,depthWrite:!1}),st=new vc(Y,$);a.add(st),this.orbsGroup.add(a),this.orbs.push({group:a,sprite:f,innerGlow:g,aura:M,ptLight:E,angle:r.angle,ptype:r.ptype,trail:A,trailPos:P,beam:B,particles:st,pedestal:y,pCount:X})});const n=this._makeAura(255,200,100,!0);this.centerCore=new zs(new ts({map:n,transparent:!0,blending:pn,depthWrite:!1,opacity:.25})),this.centerCore.scale.set(5,5,1),this.centerCore.position.y=-.5,this.rootGroup.add(this.centerCore),this.centerLight=new na(16755285,1,16),this.centerLight.position.y=-.5,this.rootGroup.add(this.centerLight),this.magicRing=new yn(new ds(24,24),new gr({map:this._makeRuneCircle(),color:16768392,transparent:!0,opacity:.9,blending:pn,side:xn,depthWrite:!1})),this.magicRing.rotation.x=-Math.PI/2,this.magicRing.position.y=-2.5,this.rootGroup.add(this.magicRing),this.ringLight=new na(16755268,2.2,18),this.ringLight.position.set(0,-3,0),this.rootGroup.add(this.ringLight),this.ringSpotLight=new ud(16764006,3),this.ringSpotLight.position.set(0,-4,0),this.ringSpotLight.target=this.magicRing,this.ringSpotLight.angle=Math.PI/3,this.ringSpotLight.penumbra=.5,this.ringSpotLight.distance=25,this.rootGroup.add(this.ringSpotLight),this.rootGroup.add(this.ringSpotLight.target),this.explodeState="NORMAL",this.explodeT=0,this._openness=1,this.explosionSystem=null,this.explosionVel=null,this._exCount=this.mobile?8e3:12e3}_ensureExplosion(){if(this.explosionSystem)return;const t=this._exCount,e=new $e,n=new Float32Array(t*3),r=new Float32Array(t*3),s=new Float32Array(t);e.setAttribute("position",new Xe(n,3)),e.setAttribute("customColor",new Xe(r,3)),e.setAttribute("size",new Xe(s,1));const a=this._makeAura(255,255,255),l=new ci({uniforms:{map:{value:a},globalOpacity:{value:1}},vertexShader:`
            attribute float size;
            attribute vec3 customColor;
            varying vec3 vColor;
            void main() {
                vColor = customColor;
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                gl_PointSize = size * (200.0 / -mvPosition.z);
                gl_Position = projectionMatrix * mvPosition;
            }
        `,fragmentShader:`
            uniform float globalOpacity;
            varying vec3 vColor;
            void main() {
                vec2 pt = gl_PointCoord - vec2(0.5);
                float dist = length(pt);
                if (dist > 0.5) discard;
                float alpha = smoothstep(0.5, 0.1, dist);
                gl_FragColor = vec4(vColor * alpha * globalOpacity, alpha * globalOpacity);
            }
        `,blending:pn,depthWrite:!1,transparent:!0});this.explosionSystem=new vc(e,l),this.explosionVel=new Float32Array(t*3),this.scene.add(this.explosionSystem)}_resetExplosionParticles(){this._ensureExplosion();const e=this.explosionSystem.geometry.getAttribute("position").array,n=this.explosionSystem.geometry.getAttribute("customColor").array,r=this.explosionSystem.geometry.getAttribute("size").array,s=this.explosionVel;if(!s)return;const a=new ie(16777215),l=new ie(8969727),h=new ie(26367);for(let c=0;c<this._exCount;c++){e[c*3]=0,e[c*3+1]=0,e[c*3+2]=0;const f=Math.random(),p=Math.random(),g=f*2*Math.PI,v=Math.acos(2*p-1),M=Math.pow(Math.random(),2.5),E=M*7.5+.8;s[c*3]=Math.sin(v)*Math.cos(g)*E,s[c*3+1]=Math.sin(v)*Math.sin(g)*E;const _=Math.cos(v);s[c*3+2]=_*E-Math.random()*2.5;const d=new ie;M>.6?d.copy(h):M>.2?d.lerpColors(l,h,Math.random()):d.lerpColors(a,l,Math.random()),n[c*3]=d.r,n[c*3+1]=d.g,n[c*3+2]=d.b,r[c]=(Math.random()*2.2+.8)*(1-M*.2)}this.explosionSystem.geometry.getAttribute("position").needsUpdate=!0,this.explosionSystem.geometry.getAttribute("customColor").needsUpdate=!0,this.explosionSystem.geometry.getAttribute("size").needsUpdate=!0,this.explosionSystem.material.uniforms.globalOpacity.value=1}_updateExplosion(t){if(!this.explosionSystem||!this.explosionVel)return;const e=this.explosionSystem.geometry.getAttribute("position"),n=e.array,r=this.explosionVel;for(let s=0;s<this._exCount;s++)n[s*3]+=r[s*3],n[s*3+1]+=r[s*3+1],n[s*3+2]+=r[s*3+2],r[s*3]*=.96,r[s*3+1]*=.96,r[s*3+2]*=.96,r[s*3+2]-=.008,r[s*3+1]-=.004,r[s*3]+=Math.sin(n[s*3+1]*1.5+t*5)*.01,r[s*3+2]+=Math.cos(n[s*3+1]*1.5+t*5)*.01;e.needsUpdate=!0}explode(){this._ensureExplosion(),this.explodeState="EXPLODING",this.explodeT=0,this.rootGroup.visible=!1;for(const t of this.orbs)t.group.visible=!1;this._resetExplosionParticles(),this.explosionSystem&&(this.explosionSystem.visible=!0,this.explosionSystem.material.uniforms.globalOpacity.value=1),this.camera.position.z=70}resummon(){this.explodeState="NORMAL",this.explodeT=0,this.rootGroup.visible=!0;for(const t of this.orbs)t.group.visible=!0;this.explosionSystem&&(this.explosionSystem.visible=!1,this.explosionSystem.material.uniforms.globalOpacity.value=0),this._openness=1,this.camera.position.z=26}get isExplodedOrHidden(){return this.explodeState==="EXPLODING"||this.explodeState==="HIDDEN"}_updateHandRotation(t,e){if(!t||t.length<21){this.rootGroup.rotation.x+=(.3-this.rootGroup.rotation.x)*.1,this.rootGroup.rotation.y+=(0-this.rootGroup.rotation.y)*.1,this.rootGroup.rotation.z+=(0-this.rootGroup.rotation.z)*.1;return}const n=new G(t[0].x,t[0].y,t[0].z),r=new G(t[5].x,t[5].y,t[5].z),s=new G(t[9].x,t[9].y,t[9].z),a=new G(t[17].x,t[17].y,t[17].z),l=w=>new G(w.x,-w.y,w.z),h=l(n),c=l(r),f=l(s),p=l(a),g=new G().subVectors(c,p).normalize();e<0&&g.negate();const v=new G().subVectors(f,h).normalize(),M=new G().crossVectors(g,v).normalize().negate(),E=v,_=new G().crossVectors(M,E).normalize(),d=new Ae;d.makeBasis(_,M,E);const P=new Nr().setFromRotationMatrix(d);this.rootGroup.quaternion.slerp(P,.12)}render({t,intensity:e=1,landmarks:n=null,openness:r=1,handedness:s=1}={}){const a=.15+Math.pow(Math.min(1,e),1.5)*.85;if(this.explodeState==="EXPLODING"){this._updateExplosion(t),this.explodeT+=.024;const _=Math.max(0,1-this.explodeT*.8);return this.explosionSystem&&(this.explosionSystem.material.uniforms.globalOpacity.value=_),_<=.02&&(this.explodeState="HIDDEN"),this.renderer.render(this.scene,this.camera),this.canvas}if(this.explodeState==="HIDDEN")return this.explosionSystem&&(this.explosionSystem.material.uniforms.globalOpacity.value=0),this.renderer.render(this.scene,this.camera),this.canvas;this._openness+=(r-this._openness)*.15;const l=this._openness;this.explosionSystem&&(this.explosionSystem.visible=!1),this._updateHandRotation(n,s);const h=1.45;this.rootGroup.scale.set(h,h,h),this.orbsGroup.rotation.y=t*.18,this.magicRing.rotation.z=-t*.08;const c=1,f=1+Math.sin(t*4)*.15,p=Math.max(.02,f*(1-l)*4);this.centerCore.scale.set(p,p,1);const g=-.5+Math.sin(t*2)*.2;this.centerCore.position.y=g,this.centerCore.position.z=.8*c,this.centerLight.position.y=g,this.centerLight.position.z=.8*c;const v=1+Math.sin(t*2.5)*.2;this.magicRing.material.opacity=.9*a*v,this.ringLight.intensity=2.2*a*v,this.ringSpotLight.intensity=3*a*v;const M=-1.5*c;this.magicRing.position.z=M,this.ringLight.position.z=M,this.ringSpotLight.position.z=M;const E=this.orbitRadius*l;return this.orbs.forEach((_,d)=>{const P=Math.sin(t*1.5+_.angle)*.6*(.3+l*.7),w=Math.cos(_.angle)*E,A=Math.sin(_.angle)*E*c;_.group.position.set(w,P,A);const N=new G;_.group.getWorldPosition(N);for(let Y=_.trailPos.length-1;Y>=3;Y--)_.trailPos[Y]=_.trailPos[Y-3];const R=N.clone();this.rootGroup.worldToLocal(R),_.trailPos[0]=R.x,_.trailPos[1]=R.y,_.trailPos[2]=R.z,_.trail.geometry.attributes.position.needsUpdate=!0,_.trail.material.opacity=.6*a*(.15+l*.85);const O=new G;this.centerCore.getWorldPosition(O);const B=_.beam.geometry.attributes.position.array,y=O.clone();this.rootGroup.worldToLocal(y),B[0]=y.x,B[1]=y.y,B[2]=y.z,B[3]=R.x,B[4]=R.y-1,B[5]=R.z,_.beam.geometry.attributes.position.needsUpdate=!0,_.beam.material.opacity=(.3+Math.sin(t*6+d)*.3)*a*(.2+l*.8);const T=1+Math.sin(t*3+d)*.1,F=6*T;_.aura.scale.set(F,F,1),_.ptLight.intensity=(1+Math.sin(t*3+d)*.3)*a;const k=2.8*T;_.sprite.scale.set(k,k,1),_.innerGlow.scale.set(k*1.15,k*1.15,1),_.sprite.material.opacity=a,_.innerGlow.material.opacity=.1*a,_.pedestal.rotation.y=t*1.2;const X=_.particles.geometry.attributes.position.array;for(let Y=0;Y<_.pCount;Y++)if(_.ptype==="sparks")X[Y*3+1]+=.04,X[Y*3+1]>2.5&&(X[Y*3+1]=-2.5,X[Y*3]=(Math.random()-.5)*4);else if(_.ptype==="dust")X[Y*3+1]-=.02,X[Y*3+1]<-2.5&&(X[Y*3+1]=2.5);else if(_.ptype==="electrons")Math.random()>.88&&(X[Y*3]=(Math.random()-.5)*5,X[Y*3+1]=(Math.random()-.5)*5,X[Y*3+2]=(Math.random()-.5)*5);else{const Q=X[Y*3],$=X[Y*3+2],st=Math.atan2($,Q)+.02,K=Math.sqrt(Q*Q+$*$);X[Y*3]=Math.cos(st)*K,X[Y*3+2]=Math.sin(st)*K,X[Y*3+1]+=Math.sin(t*3+Y)*.015}_.particles.geometry.attributes.position.needsUpdate=!0}),this.renderer.render(this.scene,this.camera),this.canvas}}const Wu="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAkCAYAAADl9UilAAAMy0lEQVR4nJVYa2xcx3k9M3Mfu3ffy5dIWWJE6mFJjm3BieU4sUkFRuDGtWM3kFQLKQIDBYLCje2iTRAgbUjWRQr0iQBF/xQ1nBZ2UBGIG9RuEreN7LRAZNhR7NqUowcpkqIoPpZL7nv33jszxTd3d/Ww0KaXXHC59+7Mme873/nODMMtLj0BzqagClqnw1efG2+sXRkRgldjex8403//V88wO4aVf37mqdryhcdatVLaiiU23YHRH+14/K+/yxgLbjnmyaOCHZuW+BUv9lFQE5xNPa/mXnnuOK5+8LzjhHuchAUVSDTLgR9mhl9UjXp/WhQfF/kkeExANX0EhToCkX0rdu+JL/UfPLq4/vo37qteuRT3BkfKAw//6buMsUZnwf9vYJ1VLb72ByfiK++9JAY92MODSjiO1kqxsFjizQ/mIRlH4pP7lJNOgCkN+gmrTa0uLIjVNb0MzcupWPN2cAbpK0jtzIUDt3979Im/+ftTY8oaH4eanALGJ8b4+sF+fewWkewC01ozMIZy6Wx+5cWnL+R3p7OZQ/ukrNQtSA3GGDRjeunHP1e9h/ciMZAXQb0ZDaA0rLiDZrWpVl9/m+cO3gZn56ASTEAFPvzVApeXt1Byhr+z58svP4du0CI8FElMas0Y0x08VufNG5Pj4ggQzv/gLx7uybCcO7pDynLN0jQ1A7jFUbtcYFxw4fVkIBstcMENKM1piRyl9xe4M5RXybv2QtdanKIpXA9OflTVM2va+2Dx2XN/+8hI2ConXMGYlR08bw/tf4k99Ef/iSlmgtMBR0PecIW14oNuPqEdx9YUKa5g0sU4h1+qwKb0CUEhNqAINf0f+gEaa5tIj27nuulzHUhoBiiloBot7vbkRL3lq4y39ejOu/s+238gdySXLHwlOP+jn86+8BsvL5WWegiUydz1ERs/+KZBylrlXh7LmpvduLbfh5UmRCJuQBGu6FMNzi34xSq0YLAzCSBUJvURcEDEbKydPgdmWzw7dkjS1CYuSuns9hLT5+efXP+n3x3RWn92+hhraa3VtYjN0CwcilkZSl0HuWYEQkMRwYMQdtw1ZNe6zROagDMElRrsmAPh2ICkMEe3OecIay3Ul4rouWsETCqhK02hak2hmoEV780I557bW33u5uFzLxyfPDYNSbS6IZUnT0qhpOJa0YoBYVkQcQciGYPlOrRCcEuA2xasmNuNJWcMYaUBEXfBeIQoKhaAuxYaG2UgJhDrTUFKBWYLQmyeU80Alht32K4hJSpXn758+h9vOzL1ZmjuUnTeeAP82DEmmdablmVD2A6CZosIj43/voTln7wHf7OO4swcFl/9GSoLaxAEtn0F9RZ4zIkCpc2Y3VQ2rm4ilktB2HaXIATcpBsMquUzZ6BH9fXHvNr7PzxhONatBG6Hy6//4Vj9w5/uXvvwsvbPrbCw0QRsATfpwc0kkfjkXlieg9ZWFWvvnIcMQmT3DEWpDRTspB1xhzjEGBSjrCr4pSqSw9ugpYSmQoq4Eq3ItcxiOBizcgmtV9c/B8b/zJqcpFLYzMy9+JUX5OypJ5ycBeb1I531WDyfgpWMgVMVWgJaSehQIbEtBzvmYv3tC0gM98P2XOhQm+eMdHTSKbgBH7YCOLlkBIqz6K9Js43yxavQjCOzd4gjk2RMFe7YLM5mrT/+E1ud2P7b/zCQ3npU3zUSxpJJISxB34YKFbRUkO3SZ2AmOr6UiG3LQdgCQbEKNxmDUmGUJBMpo9WGe7Lhg2SHIk2AKL2mW5iC1qjNXoXTT/WmGUt4sGzWX/jxd0b4/PSzX4iH64+yg6NBPJextJRM+gFkK4AKpaGE4QM1BtBk3GgapUVR9XXKRwioMALHaFa6pzSUL6PvU53ReG3eMQ7Iuo8wkEiODkbfc2yVSNtM++X9vLE2d9zbltKxTIqrht8m5A3dyqy+87mCNpVavbRqBrPzSVNpdsZDWG1EgkwtLGKSKQLiGf3tjEG4aXH0vG6FqFxYQW1xnapau44FVi8Nc96q9tmey3SoqCdEyA1BoxFoQG3yEhHVTsRQm1vDxswieu7bBzfumnZFnGusbEEqCdikh9qQ38154BZD0GgBgiLfLltboL5RNs+E9YaRDeIxdx2oVn27Bc024IcUFRKkiJztxixiromWbqehVayicO4KSheX4fZnjaA21iuoXimgfH4JkBLrb1/Etnv3QVABCIba5XUEpQZqCwUkD/dA6iYYARQcpYsrSO/fib47hxHUmlB+YDSOyUbO4o53OiiVj7sknlRVbZ2hSG2enTc+TDZChOUa/HodbsrF4Cd2onq1hOV/P2MqUAiO/O4eOJ6DtfdXMPevZXg9aYSNFlobJWSG86gQcMaR3T0IGYYonLkAWAyZkX74pZqZT1gWAwWB8T4r8fEH/m3rve/7sVLVsTIpqCAwPOmIZlBrwU7EzYq8gRSSfUlwLtC7b8DQ0JS+4KaCKfWDn9iB6moZfrUKx7GQ/fh2xFIO4pk4NuauoHZp2bQzJ5/C0Pidppgo7YY6RBchIGXgMCZsnP2rB09vP5g5HNu9S4a1hjDCwBi4IwxRueeg+PNZbLx7CVZPElQkZvCYBa83hWR/EsLlpgKp1QjL+KBI1UMJFYTglD7XQigZRCwOO581UqSpUg1fNLjnquaFRX71g623LC0DcK//X/y19cPWcEBtoJ1KBdkkI0eSppDY0YvCzCIG7t0LOxVDa6uGVqGCymIBWwtFZIbSyI72Gi6GTT8CRpVIL8sCUglwLwWn3SNJjro9lVZPv1KCkXlUQdM85e6775XNgq+am2VBqzIPtnXCNGWp4Hgu+g59zIg6d2x4fRn0HNiJnQ/djYH7D6BSbOLyO5ehkkmIXAaMCsfzwPNZ2IMDENlcVN0kHarjYEl82hap41QCBeY4mk9MgA8/8MyHgXTfYRslBkvIbh9rF4FZodbI7t5u+qYm8fVDQ27iZGJbFsO/dg/cTApLp34JJNJwBgdh5XvAUhlobgEBiXVnwZTxtgR1PiJFEFxTejlzKnxyfIxTE49l+l+Wm1Xq9N10dh0AVQpnCKWE1MpokXm17+sgNCkcevAAEr1pLL/+C+NcKTpo34sGVMbfmf5GnUSLiComlVGbMpyz7Escb4ybuGbvPf5Kcb3V8AtbnLl25BJpQUTaDpWZaYDXWzgo0fmMmaLov3+/Gbx4dsHYINMSOwuFAGuHSemoG3QvanNKIqwHYJZ7lrOpKXXyJET+jscWldv/Pb2wwjVnMmrY17xVdwh9Ay4TOU3AKAiIXEP+0Ci2Lq4Yx0sONgpF1EVu+G57xaZ90Vav3hTlzaaEnX7HkH9mZkIT12574ulvbhT5Rn1m1mJxR5mKMs04alO33CJ3W1YEjtTbI+ehNGpXNozbNT2zA940SnpFxI/aoNnsKL1ZRjPgl50v/91ZA2xqakpNTk4gOXBkxdl1+IuVxXKr/OEcZ56raEDj+9utit2Ei1bLCbSZj/gSWZ7cncORT5MKqt2eqHFHmmVW1B2B3ioGpQslMJ58bSfjja7nZ2xK0U585+eff1Pv+PQTldnNRvn9ixwxRxpukVdX1+xyZDna3CNcJAOmUJgBk9m1DTEyh1KSO72BAmSYI8cSRZzbAv7mFitvNGGNHH7J7CNuWP2xaXlqYsza9di3f6hGj/x6bb5aqp45K2DxkDa3TF5LZ9c4trljwEcVEtlqPzQAO6pOZtGYxMjggZEhI8jUnwUPMbckqir9/T1fmPrZyZNHb9wl0UU7lFOnxqzdj0z9BPc8fqS2qhZqb521wkAGwrXbVQbwTlF0Spbmu97D8chQdm22eaSzISCzEN1ncUfWZi6IjQKK7t1P/r7Wih2dOWAc+keuI0feDE3kPv3sL4KHfu8z5ar3X823ZuzaWlHyuKOotIm6nVSayo3K91qRtMl+vahGqhFpGu3C4Nhh5d1zorzc0sGesd/a9akn56dPHjVK8ZFjqFud/pzX2rW+e+Ivrcri097HehHfsyMUMZurQHLWtssRn69tzYwot/lH/su84UxzTttWppqFLa5nl3hxSxfCkbGn9j78rVevP0P7X4FdOy+bMiI8+8ozX9RXfvnn+VS4iw/lIbbltePFFVkVIxpReo2EG+cgJdValHwpGbUyWa6BZGFrtQFppadbdz7y9f2f+p35mw/2/k9g7UAwTIOzY5BFrTNb33vqq3pj6UtCBPuSOReW5wKWBUYHKLQhIYfh+9ABncswhL6GH1DzRolxZ5676f+whw9N7/jct06TSBLZbz4j+5WA3ZzaCKz2rr72tQfrKwufUbXKbmHxXgkdAGJVxLz1QPBlwdyCFc8HoWpsimR2KzN813L+jt9c6hw10bnYJCaMjt482f8AVvSuEa34j+UAAAAASUVORK5CYII=",Xu="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAkCAYAAAAD3IPhAAAJyklEQVR4nL1Ya2xcxRX+zsy9d3fttb1+xI4fcWwTHBxCSKEtLQ21IwSFpqVB4FAJVdDCjyoVLYi2UgXqeluJVqI/itSqTcKjQGlLLKAqCj8ipXkQgiqgVMRJeSTEIbZjJ/Frbe/j3jtzqplrmxiSYvKDI63Xu/femW++Od93zixwYUFnf+B0Wpj34Ve31Z187Jt/PrNl/cHBR7/15NC725fY65wWnO50dqfh7E53Oosa9JOCASLzRg4G//S9dcQFUX/Hk/tBxGCWx/9w40vLO+LX5WpSKDk9gf53ijtavv/STWSu28c/Ms5H4rwozxHUkwa93sNO9bab/pqqGLiFBNC/9eu7WphvOPHEdzsqKvm64kUNyhESxbIYxY4f2XDkic2NzHxq5MlbfuJxcXVWVO2gO555mlkT0UJAlt7FxO50p8xkoGu23HrbsibcIq9cHoorWoKWNvfaI9u+vUFNjTYma+JsuNY5XxBIOJ6Er0vE4GM3ba1r41+Wr03d1lg59tTRbTffZ4Dw9m55QWCAvRE9weTXZH2ZJpIAE6E6qZEfXe06Tr1T4hEJwWZUCYYKdDYZ99cKZ+Z2v2VpqBuX+Fi5RItg7P6+PvZoU69iC/9Tguk6PEspqRQcKTjUUSYIIQRUOQl/KWJulAlkBmaoUI8iO9yRqi+VmkiobM6FdIXjUSx4raeEmQnoFnOAFp0zvRESCOElzBAm7CCOgOvF60ggAcckQYSGwhDQYkZrvyNWEUdAgs29olgkUjSduvbOwmxiq7mxPsU2RUHEymKRIlqOIGitKplVHRwJ0oJICobSRmCBpFwrJeNAyAQhmXxltu94a2troe/AtqriC/ddxszS5NCimem2fxms1Ax09B1rTRaU4BpNrCElYL4DkQpCCDglXKrrdDxmniPhOJoKPjR7B4/t/EVH+bvP78zFVdPpR2/417vP/fTWRYPZsyoigpimoNgYBWtAaCEhHNkIDUuZzQNJ8AsKWulaN0FJ7bog34BkhJM5KK+qL3bswCNVX6hoKtbXBql3Tlx17L99D58TDJsBezdFW3hoFVMmo7vQaRWllZ5AqKxtkQaFIENIA7NCYL6zEiMEAQOFmUqnrBKWMZibtTM6kg8lJ6qdZNhZXFKtyVdSVZdr4R9b+zEw6XRaEJGeSywT27sh0bCSDBgh49MWDLPZErDjQqi8q1UAuC6gGTCi8kPo3DhkqsHeyoJYqpB0gU8SildVNld4BKHNNOyHgllmF4AxGU2U0SMjfUnekfkyh0EMSy7vq78500+9W60n9D/CMzrQsLlvfN0hYyrQvgZJCSoaoIDKB4DnwqtMWtBGSWpyGqTj2nUKXxS1S6FCReRJjZwP0s4b4qPF7oMX71+tXrz/32VL8jvLGsMXxeT+Qye2bNj25itP1Zo8EawLdvU2jN0yvKZKxJprjKDnzMgyI8vicErj4FBDSEH58TyCQtDkVoqlXFoChJqgNBVH86BY+d55ML2HM2R0zwN9v6pfU3Gxc2Wr76xuVuVXt5Y0rvTurv3PU/uO7X4i5Wg9KaR5zNAC6EChpL0eydVNQBCChWEpRKKtFqmrLwZUCJvwDISTRSA7IuPNVca9jS2w9IsieyY/yW3r9s2D6e41gjVJWViGygrFRSVRVJKky/6KxqD+itRKHHz676qyZk3AGqw50pOJQIMCPV/1WGtQwoVTlrCsGNDMjGBsBk5NEl5tOXQxMCrUTjaHIC9fbbnxxyfnwexJd5qdB+vEyzw4KuEKNrRDM3Hed/2mWl19SXknRo7+MO84kJ6UIuGBhKl42i7UTGgGFFZpbJRnLcleUwrJy5eh/Esr7DVTss1GhCPGKbznAf2hA+9Bl8kESqy4/qHBvskRjIw7nJDa8muSpRCK2Mp6nWivRP7wEMb3vY2pw4NQMz5EScw6sVFNJEG2gOxrrmkKFbxUCbzyhAVptojzBef0UD5Aw9qds5jPUpORdSajjz597zXJ4lu7Kta1CsRiAkqRjqQGch2EE9PWvPyxaQRnpuFWlaLssmaQI8HWg85upWwNiQDZYhbVL+E5yhnPyhP7hw8sv2f3V/jnSiyoTQaIaQ8v+s5vX572azbrgwOSTXZYcgytkUqc8hKUtNQi9fk2VK+/xAyM07sOIczmIVxpnrBY5l/WaOyGzRZSa+WMbB6aY/8EK7zRcKWVxYKgzN7QAtr83KPDA+oFeXxYUsJTUeNoSmskZ2UKXj6wK019rgUVa5Zh9MA7CHNFI2O7u3ODn7Maa6bCRAFg5w3zcWooaYR4rugy05HT2HXPqcNjU5jOCZhKbNpf85ptQCxTTAiniyhprkZZez0mX3sfZNa4MAHmXClKeFtPlZjOhqwTNe/bGXu69DnBUCajjbqaNz04WMzHHneGRok8oSJfj2jnubbaAJICYS5AckWdZaE4NG63zlrFfM7MNUHWvVkoTf5MMJ6tWf1BdKHnfMwAXbPq8pZe/vszx7IBikXBJEw62FIY8R+BOXvt8WVVKAxPQJhrhkUDxK7hwzOBFELLvA8V4OjajfdORilJ5wdDmYxGd7dYdvtv3puZkn+TQ+NCJNyInbl7LLJoyywuZjjJBMKpIvR8yZgFMpvIUdG0yctKy1dst2c97pN64FWr2LQTseVffeDUW6NZjE8KirumhbMgtCmArCOxEln/cCoSKO1oiIqjJSd6twTOKTJUIjcyTVRab/wFuLSWF3WI4+3d0nTx7z92+6Zad/hZ5+q20Pg4hSFpYVrPKI/svGYiU3KkBAfhArOxIIzzelKLiSwN7R/uL17/x46L29v9WSDn36a5MEDMkbTtrme2j4wnHsTr/Q6rQLHnslXV7Hz2zXw2HmOB2KctCFvFbQZam1X6yBkKRdVD7e3tRSOUudPloo+3u9Nw1mdE+MHvvvFQVeX0z+SaJoiqihCmMQpDYja7b7Yk6vWs0c3mQXQOsaeDwHt7wOt/T+1q2bzjOvT0kM3NeeifIrgbknpJ9W/ddFdMDT9cfVFFJepT0AnPtJbmvGqKUnTosMVwvuUhZKele3wUQ8fVPr3hgY3Ny6+ZmBUYXxCYuRZ0Uy9U3z9+3VwxsP8HoNxGEaO2kqTruJ6AF5NwSj1QzIloCTUKp3MYG8xPqHjNlqN3PtuznqhghDF7bsIFgzk7qe3/zM7AX37UylPD9bqQLxcO1bIqNmutmoRAgnU4It3km3rtxl3L1909NPvMx4CcKxYNLp1Oi//3W8v5FnH22fqCJz9f2MF70oRLD9ux9hw6RV22PzKxF+aIY/7v6tmjPpENQ5n5ZWl4eLhufPxky9jYWMX8JJ9xOLYJN+2iOC3EjD9V3mi65oVZ/lnF/wBfzfS0KGIfDQAAAABJRU5ErkJggg==",Q0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAkCAYAAADsHujfAAAI10lEQVR4nNVYf2xdVR3/fM+5P957/d2uXbe1Zd2YK9sEBRQyVNagZGY6NVpCiBES/tgIYlRIjGjyVv9SExYkhoIkigSiWc34ESMkKIIhm8gy2BwjQN3KSje20rV9bd/ru/ee8zXfc9/rOjahS9DE0972vvvOPedzPt/P+Xy/9wLnacwgBmj+8y5ouTbKnJsY6LmvOLD0QGFg9cPHnrmnWfpxPq+kz8K++Oiaj6nHtqw5vuuO1hSTwnu/XD3Az6xkc7CX+bm1PP6Lrt15ZpWClt8AC/BfUFPnMMGgsRefqJsY6HwyMK++3jzzhzdOP3TZTXk2ytez38SaHqtaWhO7qscGdeZr2x/Y3DXIrMYfWL+z9EDzK4WBzsdOPf3dZQIunz97/EUDwQ5oImK7764fNK71tga9n+bwmp4mHZ24//bf3XaZCpUFaWVni1omyjX44JmJXO+Dl25vXl36Xqb30k/UXdF4E725+xFZ1Y4LZSRlIq9wGAzy4Om5z6N9mYGxZHKNtmZZroFOv3w1MxdBEgICKc1KKQRK1VI09mV0dRrUNka2fZXxa/i6kwNf6qZ+WNHPooAICCIwUb+lQZi8jZTn+RqJceIjgHVDlimeWQmbRAKdqytQBOSCFdpHB3SoTWnOg4EKcx7p4ommCsuLY0RAHGIOooevumLoke1t/eRZxOXTsAbsZlVAGJAldEMFGlaCQrDMFBsDFE82+qFuhecDVnBbMtbCeLn4goCMP/79zq6Brr2UG923PPrjgbEnfrjWGnMEJgEpYmWYkMmCzGw7KVJuYzNBKY9iK9pGN4KgEUqDQFBkYeM4sp4/lU7Rv0hGju3+Sd0l2ctV78Zy9vK2dj3yaN74LcdRLolDwFom9gN42bCHKKgTRigVCqC0gSlfrGrDgKFFYICwZDCTW9lXqDDCiwICnr0CzUusKiUemlewysW91ob1PDknVCswE4cZkCq3sI1zbMUnhBUDBcXKV5/0GjISRhYGkRjYkj3RsOW2SZlAQr84IBSUECfKWkusQgoas23KFLvmZoxRIAW2QJiFQlGhVFBMngOS/pBHyewa5GoAywRNjGgONuFRIo939aVuu7jQWHoD5bLjxrLlTHuD0hRt4NjOgaPUMLUHlcuCjXXhml+Djckrn9JUWwuSkCjFKM8BRh0ROvvWgXhXn3a2n4fiPLz/ZP8evJqDmC7JsODEkm1uAocne8wciegAyoiHgerqYE+dTgGIRBXBRsKWD8plgJihQg0U52Bie4SZSXYM3TBo4IiR+RNb0W4lvguAWK91b3nsbQ5MomEAqqlHUMvKjI7BxhugQwWOYngrljhAjjoxi9jCW7kCammTKCUNlGi4GIMoOOW0wWzeW/qpr3vm5FcDD0tMovZN9Wy7t+MLd49X/esMkE0/PTj3l2+cCMul5carYS2Bv6gD8dFRIIlBmdAB8Zc0I2htBUdJqsA4QtDeKuGoXFOw1pBKDFS2ZvjdvQ8tzd7X9fv6Dr0Jne1ANgtMjG0u779/87E9ez63Y8fGMlcMs0KRh4mdLU82XnvRVixZYRAZzWyRTE7Ca2p0k8JWiRQzU2d0IiFylzSsEBBo5v2HMDO74U5z8sVbWzYuX286ViVkPVLWwPraqr//w58YDj/bfNebL4p26AaJg3PqBKwyL6Ew48QmICT+fltzOrHbrhVPl4NsCorT0sABcytiuY3ickQ08tzO5qs719uOVUYVjUflWHNktEoSVS5ZxDo7427qWxAa+WP9pft4YhyUxOmostBIBFP1jNRNncTcpep5Sq6V78XoJEKZDMIrO0Fd3RbFsmatoawFajIxhl73p0/S0213vnqAJ0nSi3A9v07Y2uXDs1Mly6asCEp0l042H5JKFOWa5J40Z6f4JPdIRwGdxAg29CBc8zFwMVKstFuEyYYGw0N+Yf+pV8NNP/qW9H1/CnJDZry20zbiWbIsKSsdeP6o5Fq3+vRgUUT1o5CjGEpLaSBeCyBOXHhJfCfwrT4+omf3vXs02vDjLfVXbnsP+Tz1959hYx7IZPcts2wwLS7KWnJI6s3psaB6df9FI2c8yZ3J9mWpJc585XAGPmN6ErMvDRWm2zdvbb3+juNicNTffxYIB0Sm6bpmU4ljO46kDCLNaaqvgHEnQn11r1U33AIkFcmkCVEYNU68rK2lf76lCkn3d5bd+OtD/NdrvdTgzm0KfeJQBiahYcxFwuiZaRz/KaBUtxXRnkWHOmtLu1sEd+gZPfqOHn87/vPyOw/8Vuydel9IzgciHWWdy90gXXsIMzNpNnf0V7RSEa7DIEJdACKN3gIA7hBQGtbEKB0eZTRddrfLWev7PjALq2oH6zc8a45PkU2SijHIgJWwsCzk7HGcnTsAgrsqagkbg2vDWA3/SxenM4+2bnv25dS4zh+S+fFcNkxpDyZ2th1uuu7ilah3Vq5cTVoJT5o0JTVWPaTCVgWQaxawNVmjR4/o6T0jQ4WNP796xZ9unpDi6MPqElezPp93jxFlzi7/GYZGlNU2STVatXR9NgA3Y1Uz1cOCc2GiR9/Wxb3Dp2bar9/acdXN44stjuaXI0VM3y7miXu7n2rq0Vuwfl0EQx7HRlJrxU0roXJ1SSpQUh7b0JM6zuqjQ15x/7snTtd/5oudtz5+wG3VDwnJOUCqIXqLuW7pry4drG+Zuh6rO2Eampg8zzq/lQwrtaKVGlKs3RIlVtH0FHBkBIXR5G/F7htvWfaVe44uTGgXBKQKhoRGL4ux+z5+eyY+9u2g2esJGkMg0KkoJQdV3JYji+nJKLbT/AqC1gebbj/wG9lGwu4Ng4sHcQ6QKhjxEplKnne6H9p0uS0cXT2n/EYiKnmE6SSS0gzwsvWFsOGSo9lbnhqCLaf356HkCQ8fVePKa4b/Vv/3tw98h8Cim8E+hdcG5/s9j2sBvODON4kHvbaOz5c7/m8b/S8mYWaS1x1TU++0MPuNSplCXd0y8ZhgZGSEstmst+gXKR9Fs7bGGBNHVbseHh5GbW1t4Hme/jfWNmiuVrzTLQAAAABJRU5ErkJggg==",$0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAkCAYAAAAKNyObAAAIzElEQVR4nLVYbYxcVRl+3nPuvXPvzOxnd9ptd7fbdpdt0wr0G0yELsZo+GEQwxSNJhJ/GGOiaJT4Q2S6UaIx/sIEDMYPEiOyC0YiASHGUgJYkBLTdDdCWzbbbfejOzuzM7szc+fee85rzp0FMZR2p9iTzGQ+7rnv834973MP4SpXLpcTIyMjevrp79ycLE/dRxxhJdXz09b+3QWaeOb7OgjT5VT/E/1ffPRpZk1ExM3aoKsBNjqaldnDYzr/7Hf328Xxv6cGOtMWAXMTF5clk5/Z3pHRjgV/soBi0PmF3i//4QkezUo6PKaasWNdDbjs+BgTBM/Nvf3jrhu60mH/5iBgLVuXKi1cC1rqg9uUIK2Sru0sv3rhh8w8BpBu1o5odgMzE41An594ch3D/3i9tY11pW4jVDIImcNUiklpqVYCW7kuhE0dJ078xSUyW5vLVNPgMHY43uO8+eddLa1OCzsOm5oCGLrmk/TcGABZkoWOnanv2/fZ4GqKqHlwmYuxCVVfuTnZ4YFsS5tS50hD1yOQ5wKaASEYiqEViiTtiAGKPbim4B4+1jCg/YPUlgQJ0TAbRNCRhkytgiMChREYomgQItd88zULjmgMipktIfQNKpU0ERPmLqpWB0iAEjZYa0AQI4ogIBfigO26xuA4l4sNXHzu/n6SemvkOIDWRFKCqz6kLU2twaQTpjdDBRWp2Xjz+KFrHLldEw0D+andHetcC7ajWK02Q7UK6dpxmjkuLQbqETTEfLxnuFlozYJbbQYKlvZZnUnAspjAICKoFR+U8uLPcQ0awEEETqRW+OghCzVPNguuORJ+8ZgpJoDDg5zyjH2DJCYwrgWQnW1gJhCbItQUVUPI5PqTdNtTEYCmO3bNkTMEash3fn42DcHXRwkPbOrdsKuJUM2HTCdXTRtuYVFZCVgXZ7+68NidP8r/6ZufNlOlGbZrIq05igG+lLvOcSmjki4LR5BIOIAUEJk2UNKN+Y4SFlS5SsFSmTI7vHu6tqfuT+t3np/+zR2/ZWZh5uz/Fdzph16zTZD00tyBtr52giAVnJtFbXIGqlRFcvd2yLYUhGuBwxDLx8fh7hkE7RxQ9U0bIt4zGPb24Z6pX3/uG0YA8GjWuZLNNYWYczlBIyP6FLPT/avbn3c9/9AK2Vo6toQkwA9ASkN4LqzeLoTTCzAEnd43BF2uAiqCaEkquVhC/qXTZ0o3HbllaO+tC5yDMKVy1eDeBTbz5L23euW3H0Gad2JDhhPdnSRTCRCreDLoqo9wsYwwX4KaLcL7WD/c7X1Q1TqEIxEtlFB68wy7aZd0gHxZdf5g2z2PP8q5B+L7Nw2OOSdAI5w/+uB2MXXsROvOTDLa2KMlkeBQgVkbEm4UhzQEbDoZ0LU6Vl45Cff6ASR6uhDOL6H8yikkDw7B6VnPolCk4OQ0Crrvlv4vPfryh2m9y9bci0deFIYYwrNvfK9zsDOpt24LqK6F9kNAR4ZEQLYd34YVg+sKuhbAak9DtqWhlqswTqwcH0dy/xC83o2gakDc0RmmB7pYlKa/HtsZH7tkkC4L7raRYyqWQ1HlgOpoY66FFhsJQgxyTZcSovIyYBGEa0N4DkTaRTA5F0fL6d+A5ZdPwe7vhre5G7oSGLVinBKc9Igo2GTsDDeG3dpJOBaVRLy4eLpV2qJbW4I4jlY81BHMF+CfnUFUXI5TarUkY0rRpQrYD5H61B5EswWoIETLjQPQlTpYCAjj0NIynCgChKwaW2MTaDZyjet5YYKF0ExkpJGpLcPxGvWZRViZNrR/Zi+8gW4E5xdgr2+HO9QL0eIiHJ+E//pbSO0dNNMiJmbLs1A9+Q6qZy8wwggIrTPGRnbnpUXBFXluascdfhhEFdIMwUZAahg2btk9gORgL0gJeNs3I717G9RcEe6OPqQP7EBi60bQulaEMwWQY4EcifLxCfgXC2g5sAO6uAKRSL1xOdsfCi7W/ADtJyvU2l6AX2toNFMxRND1EDoI41TpaoDEwCaolSr8MzMQaQ/Wulak9g+ifmEB+Rf+icLfTiCs+mj75F6QH1mF2YoO2ja/GRs7Mqybj1zukBFnIOm+KpYqgDR4G+ObpVwd46v3JYLT14VgvggytVdTkK6L9uE9SA30IH3jADo+cQOkFFqWSwhr+p189uenG1tHPiAGzJi7PLhd6+NNon3bH5fPlaDrdWHULjSDDL8ZrPEFDa0h0ylwtQ5WxiEz64wvGl5vJxJdLQ2BQELLQplB6aP7icKjubgpL6lULgsunoE5iI13P/T6csV6wbkwJ8izo0bCKaaFhq40bwLk2CDPib8ayjF+mMdVjqL4ZbqZfV9ULpRJd/b+ztgY3pW9JDAi0msY/DkwK8KWm75VnMjXOJ8XcB0dd2AMShkkYKUhO1vi9FH0LtkbuRcjRPz06FjKmVsQxUX9Us9dD/0jnq2XOQW4Irh3517v7Q+8VWsf+pr617TAYkFQKhHFbNxgicYTV5zqVcymacxGbYDDRFRjsYDSv/Pg3v33xWcnu7L00SUTn7LnT42m++5+5PcFsfkr1demVuyz0xaCOsGxFaWciJJ2ZD5DCh3PNTbxNOQmNbxEpOYWiE6dk0tO772bP/+T19dydrI2yTQ56WKLK8cOb/QPj0FN/vXBHclzx4+wqN7evj7dmmhPAmacWQI6YUO7CRiEpmlEzYeYL6IwE9SXklu/PZj9xS959K41HeqQGVPvfVnDMdV/PSbkX324J3r75YORXxpUHPVLwBTcIFnIkIRHmuoU8JR2Op4Lbz38WP912fHRLKRxENdqcS4njJEP/iMMP8mZZx/MzD5+75b5Z37WjfddNppdmzx/b1Wri32l8+fXVasz/cxs9E9TB4g8mpWcO2QdzR2yTPf9jxPmeaEytcn8Nzo6ekVg78+iWVQuz93JLOpKRZkwlE9t2LCh8mGkuJbFjWdF4MgRwvCwwNCQQz09sfpoehUKhbZyeSYzPz/fbTy9WlAfdTEftWq12a3v//E/CPVavwG+ORcAAAAASUVORK5CYII=",ae=i=>document.querySelector(i),t_=ae("#screen-start"),e_=ae("#screen-ar"),Yu=ae("#screen-poster"),n_=ae("#btn-start"),Kc=ae("#btn-info-start"),Zc=ae("#btn-info-ar"),yr=ae("#info-modal"),Jc=ae("#btn-info-close"),Qc=ae("#info-modal-backdrop");function qu(){yr&&(yr.classList.remove("hidden"),yr.style.display="flex")}function ju(){yr&&(yr.classList.add("hidden"),yr.style.display="none")}Kc&&Kc.addEventListener("click",qu);Zc&&Zc.addEventListener("click",qu);Jc&&Jc.addEventListener("click",ju);Qc&&Qc.addEventListener("click",ju);const $c=ae("#btn-reset"),tu=ae("#btn-switch-camera"),Ur=ae("#btn-photo"),Vi=ae("#btn-lock-manual"),i_=ae("#poster-img"),ca=ae("#freeze-flash"),r_=ae("#btn-back"),s_=ae("#btn-download"),mn=ae("#bottomPanel"),no=ae("#resultOverlay"),Mn=ae("#result-ethereal"),o_=ae("#ethereal-name"),eu=ae("#ethereal-stars"),nu=ae("#ethereal-tier"),a_=ae("#ethereal-desc"),In=ae("#hud-title"),vn=ae("#hud-desc"),Er=ae("#gather-effect-layer"),xi=ae("#burst-flash");ae("#full-screen-flash");ae("#lens-flare");ae("#screen-ar");let An={x:0,y:0,tracking:!1};function iu(i,t){if(Le!==Pe.RESULT||!Mn.classList.contains("show")||!i)return;const e=xl(i);let n=1;for(let c=0;c<21;c++)i[c].y<n&&(n=i[c].y);const r=Ie({x:e.x,y:n}),s=Math.min(2,window.devicePixelRatio||1),a=r.x/s;let l=r.y/s-90;l<80&&(l=80),An.tracking||(An.x=a,An.y=l,An.tracking=!0,Mn.style.transition="opacity 0.6s"),An.x+=(a-An.x)*.15,An.y+=(l-An.y)*.15;const h=Math.sin(t*3)*10;Mn.style.left=`${An.x}px`,Mn.style.top=`${An.y}px`,Mn.style.transform=`translate(-50%, -50%) translateY(${h}px) scale(1)`}const Cn=ae("#input-video"),Je=ae("#output-canvas"),We=Je.getContext("2d"),qn=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&Math.min(window.screen.width,window.screen.height)<900,Pe={PLAY:"play",WAIT_OPEN_RESULT:"wait_open",RESULT:"result"},Ku=10,l_=2,c_=350,u_=.12,h_=60,f_=.015,ru=.065;let Le=Pe.PLAY,Sn=null,Tr=null,Zu=0,wn=0,ii=null,uo="other",ns=0,br=1,gn=[],vr=0,Ks=0,Ar=!1,su=!1;const ri={active:!1,particles:[],startX:0,startY:0};function d_(i,t){ri.active=!0,ri.startX=i,ri.startY=t,ri.particles=[];const e=qn?180:400;for(let n=0;n<e;n++){const r=Math.random()*Math.PI*2,s=150+Math.random()*350;let a="255,255,255";const l=Math.random();l>.6?a="0,102,255":l>.25&&(a="136,221,255");const h=.5+Math.random()*.5,c=Math.random()*.3;ri.particles.push({ox:Math.cos(r)*s,oy:Math.sin(r)*s,sz:.5+Math.random()*1.5,color:a,life:0,duration:h,delay:c})}}function p_(i,t,e,n){if(!ri.active)return;i.save(),i.globalCompositeOperation="lighter";let r=!0;for(const s of ri.particles){if(s.delay>0){s.delay-=n,r=!1;continue}s.life<1&&(r=!1,s.life+=n/s.duration,s.life>1&&(s.life=1));const a=Math.pow(s.life,4),l=Math.sin(s.life*Math.PI)*40*(1-s.life),h=-s.oy*l*.01,c=s.ox*l*.01,f=s.ox*(1-a)+h,p=s.oy*(1-a)+c;let g=1;if(s.life<.2&&(g=s.life/.2),s.life>.95&&(g=(1-s.life)/.05),g>0){const v=t+f,M=e+p;i.beginPath(),i.arc(v,M,s.sz*2,0,Math.PI*2),i.fillStyle=`rgba(${s.color}, ${g*.8})`,i.fill(),i.beginPath(),i.arc(v,M,s.sz*6,0,Math.PI*2),i.fillStyle=`rgba(${s.color}, ${g*.15})`,i.fill()}}i.restore(),r&&(ri.active=!1)}let xr=qn?"environment":"user",ki=null,Bn=null,wr=null,il=!1,Si=0;const m_=qn?384:512,Nn=new J0({size:m_,mobile:qn}),ou=qn?640:1280,au=qn?480:720,Zs=[{id:"chaos",name:"混沌灵根",tier:"传说体质",stars:"★★★★★★",rarity:"绝无仅有",destiny:"天道见你都要绕路走",weight:1,color:"#C7B6FF"},{id:"dao_body",name:"先天道体",tier:"传说体质",stars:"★★★★★★",rarity:"绝无仅有",destiny:"还没修炼就已无敌",weight:1,color:"#FFD37A"},{id:"gold",name:"天金灵根",tier:"单灵根",stars:"★★★★★",rarity:"寥若晨星",destiny:"一剑破万法，财运也不差",weight:2,color:"#FFD37A"},{id:"wood",name:"天木灵根",tier:"单灵根",stars:"★★★★★",rarity:"寥若晨星",destiny:"打不死的奶妈，炼丹界的爹",weight:2,color:"#00FF88"},{id:"water",name:"天水灵根",tier:"单灵根",stars:"★★★★★",rarity:"寥若晨星",destiny:"上善若水，悟道最快",weight:2,color:"#52D5FF"},{id:"fire",name:"天火灵根",tier:"单灵根",stars:"★★★★★",rarity:"寥若晨星",destiny:"不是在炸炉，就是在去炸的路上",weight:1,color:"#FF6B6B"},{id:"earth",name:"天土灵根",tier:"单灵根",stars:"★★★★★",rarity:"寥若晨星",destiny:"打我啊，你打不动的",weight:1,color:"#E7B85B"},{id:"thunder",name:"天雷灵根",tier:"异灵根",stars:"★★★★★",rarity:"凤毛麟角",destiny:"天雷淬体，渡劫当加餐",weight:1.5,color:"#B692FF"},{id:"ice",name:"天冰灵根",tier:"异灵根",stars:"★★★★★",rarity:"凤毛麟角",destiny:"自带中央空调的修仙界顶流",weight:2,color:"#98D9FF"},{id:"wind",name:"天风灵根",tier:"异灵根",stars:"★★★★★",rarity:"凤毛麟角",destiny:"天下武功唯快不破（主要是跑得快）",weight:1.5,color:"#9BFFCA"},{id:"dual",name:"双灵根",tier:"双灵根",stars:"★★★★",rarity:"不可多得",destiny:"双系兼修，元婴可期",weight:10,color:"#E7E2FF"},{id:"triple",name:"三灵根",tier:"三灵根",stars:"★★★",rarity:"屈指可数",destiny:"稳扎稳打，金丹有望",weight:10,color:"#D6D0FF"},{id:"quad",name:"四灵根",tier:"四灵根",stars:"★★",rarity:"屡见不鲜",destiny:"资质平庸？莫欺少年穷！",weight:13,color:"#B8B8C8"},{id:"penta",name:"五灵根",tier:"五灵根",stars:"★",rarity:"比比皆是",destiny:"修炼是不可能修炼的，盘个铺子吧",weight:12,color:"#9A9AA8"},{id:"koi",name:"锦鲤灵根",tier:"彩蛋灵根",stars:"★★★★★★",rarity:"隐藏彩蛋·百年难遇",destiny:"掉下悬崖都能捡到神功",weight:10,color:"#FF8A7A"},{id:"slacker",name:"摸鱼灵根",tier:"彩蛋灵根",stars:"★",rarity:"隐藏彩蛋·百年难遇",destiny:"苟到最后就是赢",weight:10,color:"#6AF0D9"},{id:"worker",name:"打工灵根",tier:"彩蛋灵根",stars:"★",rarity:"隐藏彩蛋·百年难遇",destiny:"宗门牛马，但五险一金齐全",weight:8,color:"#9BE7D3"},{id:"none",name:"无灵根",tier:"彩蛋灵根",stars:"☆☆☆☆☆",rarity:"隐藏彩蛋·百年难遇",destiny:"修仙界也需要NPC，比如你",weight:5,color:"#A0A0A0"}];function ai(i){vn&&(vn.textContent=i)}function g_(i,t,e="操作超时"){return new Promise((n,r)=>{const s=setTimeout(()=>r(new Error(e)),t);Promise.resolve(i).then(a=>{clearTimeout(s),n(a)},a=>{clearTimeout(s),r(a)})})}async function __(){const i=new URL("mediapipe/hands/hands.binarypb",window.location.origin+"/").toString(),t=await fetch(i,{cache:"no-store"});if(!t.ok)throw new Error(`${i} 返回 ${t.status}：请检查 dev 服务是否同目录、是否已跑过 npm install（会复制 public/mediapipe）`)}function v_(){il=!0,Si&&cancelAnimationFrame(Si);const i=()=>{if(!il){Si=0;return}vl();const t=Cn.videoWidth,e=Cn.videoHeight;if(We.fillStyle="#000",We.fillRect(0,0,Je.width,Je.height),t>0&&e>0){Ju(t,e);try{We.drawImage(Cn,Qe.dx,Qe.dy,Qe.dw,Qe.dh)}catch{}}Si=requestAnimationFrame(i)};Si=requestAnimationFrame(i)}function lu(){il=!1,Si&&(cancelAnimationFrame(Si),Si=0)}let Qe={dx:0,dy:0,dw:0,dh:0,iw:0,ih:0};function vl(){const i=Math.min(2,window.devicePixelRatio||1),t=Je.clientWidth||window.innerWidth,e=Je.clientHeight||window.innerHeight,n=Math.max(1,Math.floor(t*i)),r=Math.max(1,Math.floor(e*i));(Je.width!==n||Je.height!==r)&&(Je.width=n,Je.height=r)}function Ju(i,t){const e=Je.width,n=Je.height,r=Math.max(e/i,n/t),s=i*r,a=t*r,l=(e-s)/2,h=(n-a)/2;Qe={dx:l,dy:h,dw:s,dh:a,iw:i,ih:t}}function Ie(i){return{x:Qe.dx+i.x*Qe.dw,y:Qe.dy+i.y*Qe.dh}}function Ye(i,t){return Math.sqrt((i.x-t.x)**2+(i.y-t.y)**2)}function rl(i,t){const e=(i.z??0)-(t.z??0);return Math.hypot(i.x-t.x,i.y-t.y,e)}function x_(i){const t=[0,5,9,13,17];let e=0;for(const n of t)e+=i[n].z;return e/t.length}function cu(i,t,e,n,r,s){return{x:t*s-e*r,y:e*n-i*s,z:i*r-t*n}}function M_(i,t=1){const e=i[0],n=i[9].x-e.x,r=i[9].y-e.y,s=i[9].z-e.z,a=i[5].x-e.x,l=i[5].y-e.y,h=i[5].z-e.z;let c=cu(n,r,s,a,l,h),f=Math.hypot(c.x,c.y,c.z)||1e-8,p=c.z/f*t;if(Math.abs(p)<.035){const g=i[13].x-e.x,v=i[13].y-e.y,M=i[13].z-e.z;c=cu(n,r,s,g,v,M),f=Math.hypot(c.x,c.y,c.z)||1e-8,p=c.z/f*t}return p}function S_(i,t,e){const n={x:i.x-t.x,y:i.y-t.y},r={x:e.x-t.x,y:e.y-t.y},s=n.x*r.x+n.y*r.y,a=n.x*r.y-n.y*r.x;return Math.abs(Math.atan2(a,s)*(180/Math.PI))}function zn(i,t,e,n=0){return Ye(i[t],i[n])>Ye(i[e],i[n])}function y_(i){const t=zn(i,16,14,0),e=zn(i,20,18,0);if(t&&e)return!1;const n=Math.max(Ye(i[5],i[17]),.05)+1e-6;if(!zn(i,8,6,0))return!1;const r=rl(i[4],i[8]),s=rl(i[4],i[6]);return Math.min(r,s)<n*.3}function E_(i){const t=zn(i,16,14,0),e=zn(i,20,18,0);if(t&&e)return!1;const n=Math.max(Ye(i[5],i[17]),.05)+1e-6,r=zn(i,8,6,0),s=zn(i,12,10,0),a=Ye(i[8],i[0]),l=Ye(i[12],i[0]),h=Ye(i[6],i[0]),c=Ye(i[10],i[0]),f=rl(i[8],i[12])/n,p=a>h*.92&&l>c*.92,g=i[8].x-i[5].x,v=i[8].y-i[5].y,M=(i[8].z??0)-(i[5].z??0),E=i[12].x-i[9].x,_=i[12].y-i[9].y,d=(i[12].z??0)-(i[9].z??0),P=Math.hypot(g,v,M)+1e-8,w=Math.hypot(E,_,d)+1e-8,A=(g*E+v*_+M*d)/(P*w),N=f<.42,R=A>.88,O=f<.26,B=A>.82;return N&&(R||O&&B)&&p&&(r&&s?!0:O&&(r||s))}function T_(i){return E_(i)||y_(i)}function b_(i){const t=zn(i,8,6,0),e=zn(i,12,10,0),n=zn(i,16,14,0),r=zn(i,20,18,0);return t&&e&&n&&r?"open_palm":!t&&!e&&!n&&!r?"fist":T_(i)?"spell":"other"}function A_(i){const t=i[0],e=Ye(i[12],t),n=Ye(i[9],t),r=e/(n+.001),s=Math.max(0,Math.min(1,(r-1)/.8));return br+=(s-br)*.15,br}function w_(i,t=Ku){return i===uo?ns++:(uo=i,ns=0),ns>=t?i:"other"}function R_(i){const t=Ye(i[0],i[9]),e=Ye(i[8],i[20]),n=S_(i[1],i[2],i[4]),r=(t*1e3+e*1e3+n)%100/100,s=Zs.reduce((l,h)=>l+h.weight,0);let a=(Math.random()*.7+r*.3)*s;for(const l of Zs)if(a-=l.weight,a<=0)return l;return Zs[Zs.length-1]}function C_(){return Array.from({length:21},(i,t)=>({x:.48+t%4*.008,y:.46+Math.floor(t/7)*.02,z:0}))}function Qu(i){Tr=R_(i),Le=Pe.WAIT_OPEN_RESULT,Zu=performance.now(),gn=[];try{navigator.vibrate?.(80)}catch{}Ie(i[4]),Ie(i[16]),Ie(i[20]);const t=Ie(i[12]),e=Ie(i[10]),n=t.x-e.x,r=t.y-e.y,s=t.x+n*.25,a=t.y+r*.25;d_(s,a),Yi()}function P_(i){const t=Ie(i[9]),e=Ie(i[12]),n=t.x,r=Math.min(e.y,t.y)-80;return{x:n,y:r}}const ho={initialized:!1,particles:null,ringRadius:null,particleCount:48,rotationSpeed:3.2,wobbleAmp:2,lastSpawnTime:-999,sparkles:[]};function L_(){if(ho.initialized)return;const i=ho;i.particles=[];for(let t=0;t<i.particleCount;t++){const e=Math.PI*2/i.particleCount*t;i.particles.push({baseAng:e,rOffset:(Math.random()-.5)*3,sz:1+Math.random()*2,bright:.6+Math.random()*.4,phase:Math.random()*Math.PI*2,twinkleSpd:4+Math.random()*6})}i.initialized=!0}function D_(i,t,e){ho.initialized||L_();const n=ho,r=Ie(t[8]),s=Ie(t[12]),a=Ie(t[5]),l=Ie(t[9]),h=(r.x+s.x)/2,c=(r.y+s.y)/2,f=(a.x+l.x)/2,p=(a.y+l.y)/2;let g=h-f,v=c-p;const M=Math.hypot(g,v)||1;g/=M,v/=M;const E=Math.hypot(s.x-r.x,s.y-r.y);n.ringRadius=Math.max(18,E*.85);const _=h+g*(n.ringRadius*.4),d=c+v*(n.ringRadius*.4);i.save(),i.globalCompositeOperation="lighter";const P=e*n.rotationSpeed;for(const N of n.particles){const R=N.baseAng+P,O=Math.sin(e*N.twinkleSpd+N.phase)*n.wobbleAmp,B=n.ringRadius+N.rOffset+O,y=-v,T=g,F=Math.sin(R)*.38,k=F>=0?Math.max(.22,F):Math.min(-.22,F),X=_+Math.cos(R)*B*y+Math.sin(R)*B*k*g,Y=d+Math.cos(R)*B*T+Math.sin(R)*B*k*v,Q=Math.sin(R),$=.55+.45*Math.abs(Math.sin(e*N.twinkleSpd+N.phase)),st=N.bright*$*(Q>0?.75:1),K=Q>0?.82:1;i.beginPath(),i.arc(X,Y,N.sz*2.2*K,0,Math.PI*2),i.fillStyle=`rgba(255,180,50,${Math.min(.06,st*.1)})`,i.fill(),i.beginPath(),i.arc(X,Y,N.sz*1.4*K,0,Math.PI*2),i.fillStyle=`rgba(255,210,100,${Math.min(.22,st*.38)})`,i.fill(),i.beginPath(),i.arc(X,Y,N.sz*K,0,Math.PI*2),i.fillStyle=`rgba(255,245,200,${Math.min(.75,st)})`,i.fill()}const w=n.ringRadius*1.8,A=i.createRadialGradient(_,d,0,_,d,w);if(A.addColorStop(0,"rgba(255,240,180,0.18)"),A.addColorStop(.25,"rgba(255,215,120,0.10)"),A.addColorStop(.55,"rgba(255,185,60,0.04)"),A.addColorStop(1,"rgba(255,160,30,0)"),i.fillStyle=A,i.fillRect(_-w,d-w,w*2,w*2),e-n.lastSpawnTime>.15+Math.random()*.2){n.lastSpawnTime=e;const N=Math.random()*Math.PI*2;n.sparkles.push({x:_+Math.cos(N)*n.ringRadius,y:d+Math.sin(N)*n.ringRadius*.35,vx:Math.cos(N)*(40+Math.random()*60),vy:Math.sin(N)*(15+Math.random()*25),life:1,sz:.8+Math.random()*1.2,bright:.7+Math.random()*.3})}for(let N=n.sparkles.length-1;N>=0;N--){const R=n.sparkles[N];if(R.life-=.03,R.life<=0){n.sparkles.splice(N,1);continue}R.x+=R.vx*.016,R.y+=R.vy*.016,R.vx*=.96,R.vy*=.96;const O=R.life,B=Math.min(.55,R.bright*O*O);i.beginPath(),i.arc(R.x,R.y,R.sz*2,0,Math.PI*2),i.fillStyle=`rgba(255,190,70,${Math.min(.05,B*.08)})`,i.fill(),i.beginPath(),i.arc(R.x,R.y,R.sz*1.3,0,Math.PI*2),i.fillStyle=`rgba(255,225,130,${Math.min(.2,B*.35)})`,i.fill(),i.beginPath(),i.arc(R.x,R.y,R.sz,0,Math.PI*2),i.fillStyle=`rgba(255,250,220,${B})`,i.fill()}i.restore()}const Gi={initialized:!1,coreParticles:null,shellParticles:null,lightBeams:[],shockwaves:[],embers:[],lastBeamTime:-999,lastWaveTime:-999,lastEmberTime:-999,lastInitTime:0};function U_(){if(Gi.initialized)return;const i=Gi;i.coreParticles=[];for(let n=0;n<180;n++){const r=Math.random()*Math.PI*2,s=Math.pow(Math.random(),.7)*18;i.coreParticles.push({baseX:Math.cos(r)*s,baseY:Math.sin(r)*s,sz:.8+Math.random()*2.2,bright:.7+Math.random()*.3,phase:Math.random()*Math.PI*2,heartPhase:Math.random()*Math.PI*2,jitterAmp:.5+Math.random()*4,turbSpd:3+Math.random()*6})}i.shellParticles=[];const t=320,e=Math.PI*(3-Math.sqrt(5));for(let n=0;n<t;n++){const r=1-n/(t-1)*2,s=Math.sqrt(Math.max(0,1-r*r)),a=e*n;i.shellParticles.push({x3:Math.cos(a)*s,y3:r,z3:Math.sin(a)*s,sz:.6+Math.random()*2,bright:.45+Math.random()*.55,phase:Math.random()*Math.PI*2,turbPhaseX:Math.random()*Math.PI*2,turbPhaseY:Math.random()*Math.PI*2,turbPhaseZ:Math.random()*Math.PI*2,turbAmp:1+Math.random()*4,turbSpd:3+Math.random()*6,ejectV:0})}i.initialized=!0}function I_(i){const t=.5+.5*Math.sin(i*6),e=Math.sin(i*17)*Math.sin(i*13),n=Math.pow(Math.max(0,Math.sin(i*2.3)),8);return t*.5+e*.25+n*.4}function N_(i,t,e,n,r,s){const a=Gi;if(i-a.lastBeamTime>.4+Math.random()*.4){const l=2+Math.floor(Math.random()*4);for(let h=0;h<l;h++){const c=Math.random()*Math.PI*2,f=c+(Math.sign(Math.sin(c))||-1)*(Math.random()*.3);a.lightBeams.push({angle:f,len:(50+Math.random()*140)*s,width:1+Math.random()*3,life:1,maxLife:.25+Math.random()*.4,brightness:.7+Math.random()*.3,delay:Math.random()*.04})}a.lastBeamTime=i}if(i-a.lastWaveTime>.6+Math.random()*.7){const l=30+Math.floor(Math.random()*20),h=[];for(let c=0;c<l;c++){const f=Math.PI*2/l*c+(Math.random()-.5)*.15;h.push({ang:f,rOffset:(Math.random()-.5)*3,sz:.8+Math.random()*1.5,bright:.4+Math.random()*.4,phase:Math.random()*Math.PI*2,trail:[],spinSpeed:(Math.random()-.5)*.4})}a.shockwaves.push({r:24,maxR:(38+Math.random()*22)*s,speed:100+Math.random()*80,life:1,alpha:(.25+Math.random()*.18)*s,particles:h}),a.lastWaveTime=i,a.lastEmberTime=i}}function ua(i,t,e,n=!1){Gi.initialized||U_();const r=Math.max(0,Math.min(1,1-e/.3));if(r<=.02)return;const s=performance.now()/1e3,a=Math.min(.033,s-(Gi.lastInitTime||s));Gi.lastInitTime=s;const l=s,h=t.x,c=t.y,f=I_(l),p=Gi;i.save(),i.globalCompositeOperation="lighter";const g=l%1;let v;if(g<.08)v=1+g/.08*.35;else if(g<.16)v=1.35-(g-.08)/.08*.2;else if(g<.22)v=1.15+(g-.16)/.06*.25;else if(g<.32)v=1.4-(g-.22)/.1*.28;else{const P=(g-.32)/.68;v=1.12+Math.sin(P*Math.PI*4+l*25)*.06*f}const M=Math.pow(Math.max(0,Math.sin(l*3.7+Math.cos(l*7))),12);v+=M*f*.6;const E=v*(1+f*.15);N_(l,a,h,c,f,r);for(let P=p.embers.length-1;P>=0;P--){const w=p.embers[P];if(w.life-=a/w.maxLife,w.life<=0){p.embers.splice(P,1);continue}w.vy+=w.gravity*a,w.vx*=w.drag,w.vy*=w.drag,w.x+=w.vx*a,w.y+=w.vy*a;const A=w.life,N=Math.min(.65,w.bright*A*A*r);let R=w.sz*(.5+A*.5);i.beginPath(),i.arc(w.x,w.y,R*3,0,Math.PI*2),i.fillStyle=`rgba(255,180,60,${Math.min(.06,N*.08)})`,i.fill(),i.beginPath(),i.arc(w.x,w.y,R*1.5,0,Math.PI*2),i.fillStyle=`rgba(255,225,130,${Math.min(.35,N*.5)})`,i.fill(),i.beginPath(),i.arc(w.x,w.y,R,0,Math.PI*2),i.fillStyle=`rgba(255,250,210,${N})`,i.fill()}for(let P=p.shockwaves.length-1;P>=0;P--){const w=p.shockwaves[P];if(w.r+=w.speed*a,w.life-=a/.7,w.life<=0||w.r>w.maxR){p.shockwaves.splice(P,1);continue}const A=w.life,N=Math.min(.35,w.alpha*A*A)*r;for(const R of w.particles){const O=Math.sin(l*3+R.phase)*.3,B=w.r+R.rOffset+O,y=h+Math.cos(R.ang+w.r*R.spinSpeed*.015)*B,T=c+Math.sin(R.ang+w.r*R.spinSpeed*.015)*B,F=R.sz*(.4+A*.6)*r,k=Math.min(.28,R.bright*A*A*r);i.beginPath(),i.arc(y,T,F*2,0,Math.PI*2),i.fillStyle=`rgba(255,200,70,${Math.min(.04,N*R.bright*.12)})`,i.fill(),i.beginPath(),i.arc(y,T,F*1.3,0,Math.PI*2),i.fillStyle=`rgba(255,225,120,${Math.min(.14,N*R.bright*.35)})`,i.fill(),i.beginPath(),i.arc(y,T,F,0,Math.PI*2),i.fillStyle=`rgba(255,248,215,${Math.min(.55,k)})`,i.fill()}}if(!n){const P=l*.5,w=l*.22,A=42*(1+f*.12),N=[...p.shellParticles].sort((y,T)=>{const F=y.z3*Math.cos(P)-y.x3*Math.sin(P),k=T.z3*Math.cos(P)-T.x3*Math.sin(P);return F-k});for(const y of N){let T=y.x3,F=y.y3,k=y.z3;const X=l*y.turbSpd;if(T+=Math.sin(X+y.turbPhaseX)*y.turbAmp*.04*f,F+=Math.cos(X*1.17+y.turbPhaseY)*y.turbAmp*.04*f,k+=Math.sin(X*.73+y.turbPhaseZ)*y.turbAmp*.04*f,y.ejectV>0){y.ejectV*=.96;const le=y._ejectAng||0;T+=Math.cos(le)*y.ejectV*.02,F+=Math.sin(le)*y.ejectV*.02,k+=y.ejectV*.015}let Y=T*Math.cos(P)+k*Math.sin(P),Q=-T*Math.sin(P)+k*Math.cos(P);T=Y,k=Q;let $=F*Math.cos(w)-k*Math.sin(w);Q=F*Math.sin(w)+k*Math.cos(w),F=$,k=Q;const st=1+k*.18,K=h+T*A*st,ft=c+F*A*st;if(k<-.75)continue;const yt=(k+1)/2;let Lt=y.sz*(.4+yt*.85)*(.7+.5*Math.abs(Math.sin(l*7+y.phase)))*r,jt=Math.min(.5,y.bright*(.25+yt*.65)*(.55+.45*Math.abs(Math.sin(l*5+y.phase)))*r);i.beginPath(),i.arc(K,ft,Lt*2.2,0,Math.PI*2),i.fillStyle=`rgba(255,205,85,${Math.min(.04,jt*.08)})`,i.fill(),i.beginPath(),i.arc(K,ft,Lt*1.4,0,Math.PI*2),i.fillStyle=`rgba(255,225,125,${Math.min(.18,jt*.25)})`,i.fill(),i.beginPath(),i.arc(K,ft,Lt,0,Math.PI*2),i.fillStyle=`rgba(255,248,215,${Math.min(.7,jt)})`,i.fill()}const R=82*E*(1+f*.4)*r,O=Math.min(.25,.45+f*.35)*E*r,B=i.createRadialGradient(h,c,0,h,c,R);B.addColorStop(0,`rgba(255,250,220,${Math.min(.25,O)})`),B.addColorStop(.15,`rgba(255,230,150,${Math.min(.18,O*.65)})`),B.addColorStop(.35,`rgba(255,200,80,${Math.min(.08,O*.3)})`),B.addColorStop(.6,`rgba(255,160,30,${Math.min(.02,O*.08)})`),B.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=B,i.fillRect(h-R,c-R,R*2,R*2);for(const y of p.coreParticles){const T=y.jitterAmp*(E-1)*2.5,F=Math.sin(l*y.turbSpd+y.turbPhaseX)*y.jitterAmp*f*2,k=Math.cos(l*y.turbSpd*1.3+y.turbPhaseY)*y.jitterAmp*f*2,X=h+y.baseX*E*T+F,Y=c+y.baseY*E*T+k;let Q=y.sz*E*(.6+f*1.2)*r;Q*=.5+1*Math.abs(Math.sin(l*8+y.heartPhase));let $=Math.min(.5,y.bright*(.4+f*.9))*r;$*=.3+.7*Math.pow(Math.abs(Math.sin(l*12+y.phase)),.5),i.beginPath(),i.arc(X,Y,Q*2.5,0,Math.PI*2),i.fillStyle=`rgba(255,235,140,${Math.min(.08,$*.15)})`,i.fill(),i.beginPath(),i.arc(X,Y,Q*1.3,0,Math.PI*2),i.fillStyle=`rgba(255,245,190,${Math.min(.25,$*.5)})`,i.fill(),i.beginPath(),i.arc(X,Y,Q,0,Math.PI*2),i.fillStyle=`rgba(255,255,245,${Math.min(.8,$)})`,i.fill()}}const _=15*E*(1+f*.5)*r,d=i.createRadialGradient(h,c,0,h,c,_);d.addColorStop(0,`rgba(255,255,255,${Math.min(.9,r)})`),d.addColorStop(.15,`rgba(255,255,252,${Math.min(.5,.92*f*r+.08)})`),d.addColorStop(.4,`rgba(255,248,210,${Math.min(.3,.55*f*r+.15)})`),d.addColorStop(.75,`rgba(255,230,160,${Math.min(.1,.2*f*r)})`),d.addColorStop(1,"rgba(255,200,100,0)"),i.beginPath(),i.arc(h,c,_,0,Math.PI*2),i.fillStyle=d,i.fill();for(let P=p.lightBeams.length-1;P>=0;P--){const w=p.lightBeams[P];if(w.delay>0){w.delay-=a;continue}if(w.life-=a/w.maxLife,w.life<=0){p.lightBeams.splice(P,1);continue}const A=w.life,N=.5+.5*Math.sin(l*50+P*7),R=w.len*A*(.8+N*.4)*r,O=Math.min(.55,w.brightness*A*N*f*1.5*r),B=h+Math.cos(w.angle)*R,y=c+Math.sin(w.angle)*R,T=i.createLinearGradient(h,c,B,y);T.addColorStop(0,`rgba(255,255,250,${O})`),T.addColorStop(.05,`rgba(255,250,230,${Math.min(.48,O*.85)})`),T.addColorStop(.3,`rgba(255,240,180,${Math.min(.22,O*.4)})`),T.addColorStop(1,"rgba(255,220,100,0)"),i.beginPath(),i.moveTo(h,c),i.lineTo(B,y),i.strokeStyle=T,i.lineWidth=w.width*(1+Math.sin(l*20+P)*.3),i.stroke(),i.strokeStyle=`rgba(255,245,200,${Math.min(.08,O*.15)})`,i.lineWidth=w.width*4,i.stroke()}i.restore()}function xl(i){const t=(i[5].x+i[9].x+i[13].x+i[17].x)/4,e=(i[5].y+i[9].y+i[13].y+i[17].y)/4;return{x:t+(i[0].x-t)*.35,y:e+(i[0].y-e)*.35}}function ha(i,t,e,n,r=1,s=1,a=1){const l=xl(t),h=Ie(l),c=h.x,f=h.y,p=Ye(t[5],t[17])*Qe.dw,g=Math.max(260,Math.min(600,p*3.8)),v=Nn.render({t:e,color:n?.color??"#FFD37A",intensity:r,landmarks:t,openness:s,handedness:a});i.save(),i.globalCompositeOperation="screen",i.globalAlpha=Math.min(1,r*1.1);let M=g;(Nn.explodeState==="EXPLODING"||Nn.explodeState==="HIDDEN")&&(M=g*2.5),i.drawImage(v,c-M/2,f-M/2,M,M),i.restore()}function Yi(){Vi&&Vi.classList.toggle("hidden",Le!==Pe.PLAY||wn<3),Le===Pe.PLAY&&(mn.classList.remove("hidden"),no.classList.remove("active"),Mn.classList.remove("show"),Er&&(Er.innerHTML="",Er.classList.add("hidden")),xi&&xi.classList.remove("play"),In.textContent="第一步：聚气",wn=0,vn.innerHTML=`<img src="${Wu}" class="gesture-icon"> 试试握拳，感受灵力凝聚`,mo()),Le===Pe.WAIT_OPEN_RESULT&&(mn.classList.remove("hidden"),no.classList.remove("active"),Mn.classList.remove("show"),In.textContent="最后一步：揭晓",vn.innerHTML=`<img src="${Xu}" class="gesture-icon"> 掌心张开，灵根自显！`),Le===Pe.RESULT&&(mn.classList.add("hidden"),no.classList.add("active"),Sn&&(o_.innerHTML=Sn.name,eu&&(eu.innerHTML=Sn.stars),nu&&(nu.innerHTML=`稀有度：${Sn.rarity}`),a_.textContent=`“${Sn.destiny}”`,Mn.classList.add("show")),Ur&&(Ur.disabled=Ar))}function F_(){ca.classList.remove("play"),ca.offsetHeight,ca.classList.add("play")}function O_(i){i_.src=i,s_.href=i,Yu.classList.remove("hidden")}function mo(){Yu.classList.add("hidden")}function B_(){return Je.toDataURL("image/png",1)}const z_="https://cyougames.site",H_={chaos:`灵根融合为一，能驾驭天地万物之气。
不论何种法则，皆在你的掌握之中。`,dao_body:`天生近道，无需刻意修炼便能引气入体。
你是天地间的宠儿，万法自然。`,gold:`锐利无双的灵力，如同出鞘的利剑。
一往无前，破尽世间一切万法。`,wood:`生生不息的灵力，能感受草木荣枯。
虽不擅杀伐，但绵延不绝后劲无穷。`,water:`灵力绵长，如滴水穿石般坚韧。
能滋养万物，亦能掀起惊涛骇浪。`,fire:`狂暴灼热的灵力，破坏力极强。
一出手便是焚天灭地，霸道无匹。`,earth:`厚重坚实的灵力，防御力惊人。
哪怕山崩地裂，亦能岿然不动。`,thunder:`灵力至刚至阳，速度与爆发兼具。
天罚之威，足以让邪魔外道胆寒。`,ice:`灵力冰寒刺骨，能冻结世间万物。
性格往往清冷如雪，不惹凡尘。`,wind:`灵力灵动飘逸，行踪诡秘莫测。
可化作微风拂面，亦可化作九天罡风。`,dual:`双色灵力相辅相成，比单根更具变化。
修炼速度极快，未来大有可期。`,triple:`三种灵气交织，修行虽然较为缓慢。
但若能三花聚顶，便可大器晚成。`,quad:`灵气驳杂修炼吃力。但传奇话本里，
天命之子皆废柴开局，你的逆袭将至。`,penta:`五行俱全，却相互牵制导致修行艰难。
唯有大毅力者，方能打破桎梏。`,koi:`灵气虽然平平无奇，但福缘深厚。
机缘总是自己找上门，羡煞旁人。`,slacker:`佛系修仙，讲究缘分。
修为全靠随缘，主打一个心态平和。`,worker:`修仙界第一卷王，起得比鸡早睡得比狗晚。
靠努力打破资质的壁垒。`,none:`身上感受不到一丝灵气波动。
也许你只是一位路过的普通百姓。`};function V_(i){return new Promise((t,e)=>{const n=new Image;n.onload=()=>t(n),n.onerror=e,n.src=i})}function G_(i,t,e,n,r,s){const a=String(t).split(`
`);let l=n;i.textAlign="center";for(const h of a){const c=[...h];let f="";for(const p of c){const g=f+p;i.measureText(g).width>r&&f?(i.fillText(f,e,l),f=p,l+=s):f=g}f&&(i.fillText(f,e,l),l+=s)}}async function k_({arShotDataUrl:i,root:t}){const r=document.createElement("canvas");r.width=1080,r.height=1920;const s=r.getContext("2d");s.fillStyle="#F0EDE5",s.fillRect(0,0,1080,1920);const a=60;s.save(),s.strokeStyle="#31302C",s.lineWidth=3,s.strokeRect(a,a,1080-a*2,1920-a*2);const l=40,h=a+15;s.lineWidth=4,s.beginPath(),s.moveTo(h,h+l),s.lineTo(h,h),s.lineTo(h+l,h),s.moveTo(1080-h-l,h),s.lineTo(1080-h,h),s.lineTo(1080-h,h+l),s.moveTo(h,1920-h-l),s.lineTo(h,1920-h),s.lineTo(h+l,1920-h),s.moveTo(1080-h-l,1920-h),s.lineTo(1080-h,1920-h),s.lineTo(1080-h,1920-h-l),s.stroke(),s.restore(),s.save(),s.fillStyle="#31302C",s.font='normal 64px "Songti SC", "STSong", "Noto Serif CJK SC", serif',s.textAlign="center",s.fillText("一掌鉴灵根",1080/2,220),s.fillStyle="#7A766F",s.font='normal 28px "Songti SC", "STSong", serif',s.letterSpacing="8px",s.fillText("伸 出 手 掌 · 解 锁 你 的 灵 根",1080/2,280),s.restore();const c=140,f=360,p=800,g=800;s.save(),s.fillStyle="#C4C2B9",s.fillRect(c,f,p,g);try{const P=await V_(i),w=P.width/P.height,A=p/g;let N=0,R=0,O=P.width,B=P.height;w>A?(O=P.height*A,N=(P.width-O)/2):(B=P.width/A,R=(P.height-B)/2),s.drawImage(P,N,R,O,B,c,f,p,g)}catch{}s.restore();const v=f+g+130,M=t?.name??"未知";s.save(),s.textAlign="center",s.fillStyle="#31302C",s.font='normal 100px "Songti SC", "STSong", serif';const E=s.measureText(M).width;s.fillText(M,1080/2,v),s.fillStyle="#D6B85A",s.font='normal 36px "Songti SC", "STSong", serif',s.fillText(t?.stars??"",1080/2,v+65),s.fillStyle="#FFC107",s.font='normal 32px "Songti SC", "STSong", serif',s.fillText(`稀有度：${t?.rarity??""}`,1080/2,v+125),s.restore(),s.save(),s.textAlign="center",s.fillStyle="#31302C",s.font='bold 46px "Songti SC", "STSong", serif',s.fillText(`"${t?.destiny??""}"`,1080/2,v+240),s.fillStyle="#31302C",s.font='normal 32px "Songti SC", "STSong", serif';const _=H_[t?.id]??"天道茫茫，机缘未定";G_(s,_,1080/2,v+310,p-40,56),s.restore(),s.save(),s.translate(1080/2+E/2+60,v-40),s.rotate(-10*Math.PI/180),s.strokeStyle="#C46D5E",s.lineWidth=4,s.strokeRect(-50,-50,100,100),s.fillStyle="#C46D5E",s.font='bold 34px "Songti SC", "STSong", serif',s.textAlign="center",s.textBaseline="middle",s.fillText("天道",0,-20),s.fillText("认证",0,20),s.restore();const d=1920-a-120;return s.save(),s.strokeStyle="#C0BDB4",s.lineWidth=2,s.beginPath(),s.moveTo(a+80,d-50),s.lineTo(1080-a-80,d-50),s.stroke(),s.fillStyle="#31302C",s.font='normal 26px "Songti SC", "STSong", serif',s.textAlign="center",s.fillText("来测测你的专属灵根",1080/2,d),s.font="normal 24px -apple-system, sans-serif",s.fillText(z_,1080/2,d+50),s.restore(),r.toDataURL("image/png",1)}function W_(i){vl(),We.save(),We.clearRect(0,0,Je.width,Je.height),Ju(i.image.width,i.image.height),We.fillStyle="#000",We.fillRect(0,0,Je.width,Je.height),We.drawImage(i.image,Qe.dx,Qe.dy,Qe.dw,Qe.dh);const t=performance.now()/1e3,e=performance.now();if(vr>0&&vr--,i.multiHandLandmarks?.length){const n=i.multiHandLandmarks[0],r=i.multiHandedness?.[0]?.label==="Left"?-1:1;ii=n;const s=b_(n),l=w_(s,s==="spell"?l_:Ku),h=A_(n);P_(n);const c=Ie(xl(n)),f=Ye(n[5],n[17])*Qe.dw;if(Le===Pe.PLAY&&(Math.max(0,Math.min(1,(Ye(n[12],n[0])/(Ye(n[9],n[0])+.001)-1)/.8)),wn===0&&l==="fist"?(wn=1,In&&(In.textContent="第二步：唤醒"),vn&&(vn.innerHTML=`<img src="${Xu}" class="gesture-icon"> 张开手心，唤醒五灵珠`)):wn===1&&l==="open_palm"?(wn=2,In&&(In.textContent="第三步：引爆"),vn&&(vn.innerHTML=`<img src="${Q0}" class="gesture-icon"> 向前推掌，引爆灵珠！`)):wn===2&&Nn.explodeState!=="NORMAL"&&(wn=3,In&&(In.textContent="第四步：锁灵"),vn&&(vn.innerHTML=`<img src="${$0}" class="gesture-icon"> 剑指，锁定灵根`))),Le===Pe.PLAY&&Nn.explodeState==="NORMAL"){const p=x_(n),g=M_(n,r);if(!(g>ru))Ks=0,gn=[];else{Ks++;const _=Ye(n[0],n[9])*Qe.dh;gn.push({w:f,h:_,t:e,z:p,nzFace:g,openness:h}),gn=gn.filter(d=>e-d.t<c_)}if(wn>=2&&Ks>=18&&gn.length>=6&&h>.7&&vr===0){const _=gn[0],d=gn[gn.length-1],P=(_.w-d.w)/(_.w+1e-4),w=(_.h-d.h)/(_.h+1e-4),A=(P+w)/2,N=Math.min(P,w),O=d.z-_.z>=f_,B=Math.abs(d.nzFace-_.nzFace),y=g>ru,T=B<.35;if(y&&A>u_&&N>.05&&T&&O){vr=h_,gn=[],Ks=0,Nn.explode();try{navigator.vibrate?.([120,50,120])}catch{}}}}if(Le===Pe.PLAY&&Nn.explodeState==="HIDDEN"&&h<.2&&Nn.resummon(),Le===Pe.PLAY){l==="spell"&&wn>=3&&Qu(n);const p=.32+h*.58;wn>=2&&ha(We,n,t,null,p,h,r),h<.3&&(l==="spell"?D_(We,n,t):ua(We,c,h))}else if(Le===Pe.WAIT_OPEN_RESULT){Ie(n[4]),Ie(n[16]),Ie(n[20]);const p=Ie(n[12]),g=Ie(n[10]),v=p.x-g.x,M=p.y-g.y,E=p.x+v*.25,_=p.y+M*.25;if(ua(We,{x:E,y:_},0,!1),ua(We,{x:E,y:_},0,!0),p_(We,E,_,.033),l==="open_palm"&&e-Zu>1e3){Nn.resummon(),Sn=Tr,Tr=null,Le=Pe.RESULT,ri.active=!1;const d=Math.min(2,window.devicePixelRatio||1);j_({x:E/d,y:_/d});try{navigator.vibrate?.([150,50,200])}catch{}Yi()}}else Le===Pe.RESULT&&ha(We,n,t,Sn,1,h,r);iu(n,t)}else Le===Pe.PLAY&&(gn=[]),Le===Pe.WAIT_OPEN_RESULT&&(Le=Pe.PLAY,Tr=null,Yi()),Le!==Pe.RESULT&&(ii=null),Le===Pe.RESULT&&Sn&&ii&&ha(We,ii,t,Sn,1,br,1),iu(ii,t);We.restore()}function $u(){if(ki){for(const i of ki.getTracks())i.stop();ki=null}Cn.srcObject=null}async function X_(){if(!(Ar||Le!==Pe.RESULT||!Sn)){Ar=!0,Ur&&(Ur.disabled=!0),ai("正在生成分享页…");try{su=!0;try{Bn&&Cn.readyState>=2&&ki&&await Bn.send({image:Cn})}catch(e){console.warn("pre-capture hands.send",e)}const i=B_();F_(),Ml(),$u();const t=await k_({arShotDataUrl:i,root:Sn});O_(t)}catch(i){console.error(i),ai("生成失败，请重试");try{await go(),Bn&&_o(Bn)}catch{}}finally{su=!1,Ar=!1,Yi()}}}async function go(){if($u(),!navigator.mediaDevices?.getUserMedia)throw new Error("当前浏览器不支持摄像头（缺少 mediaDevices）");if(!window.isSecureContext)throw new Error("摄像头仅在「安全上下文」可用：手机请用 https://电脑局域网IP:端口 打开本页，勿用 http://（本仓库已配置 dev HTTPS，见启动日志里的 Network 地址）。");const i={audio:!1,video:{width:{ideal:ou},height:{ideal:au},facingMode:{ideal:xr}}};if(qn){try{const t=await navigator.mediaDevices.getUserMedia({audio:!1,video:!0});for(const e of t.getTracks())e.stop()}catch{}try{const e=(await navigator.mediaDevices.enumerateDevices()).filter(n=>n.kind==="videoinput");if(e.length>0){const n=xr==="environment",a=n?["back","rear","environment","后","后置","背"]:["front","user","前","前置","面"];let l=null;for(const h of a){const c=e.find(f=>(f.label||"").toLowerCase().includes(h));if(c){l=c.deviceId;break}}l||(l=n?e[e.length-1].deviceId:e[0].deviceId),i.video={deviceId:{exact:l},width:{ideal:ou},height:{ideal:au}}}}catch{}}try{ki=await navigator.mediaDevices.getUserMedia(i)}catch{ki=await navigator.mediaDevices.getUserMedia({audio:!1,video:!0})}Cn.srcObject=ki,Cn.setAttribute("playsinline",""),Cn.muted=!0,await Cn.play()}function _o(i){wr&&cancelAnimationFrame(wr);let t=0;const e=qn?1:0;async function n(){if(wr=requestAnimationFrame(n),!(Cn.readyState<2)&&(t++,t%(e+1)===0))try{await i.send({image:Cn})}catch(r){console.warn("hands.send error:",r)}}n()}function Ml(){wr&&(cancelAnimationFrame(wr),wr=null)}async function Y_(){const i=new Lh.Hands({locateFile:t=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1675469240/${t}`});return i.setOptions({maxNumHands:1,modelComplexity:qn?0:1,minDetectionConfidence:.55,minTrackingConfidence:.5}),i.onResults(W_),await i.initialize(),i}function q_(){Le=Pe.PLAY,Sn=null,Tr=null,ii=null,uo="other",ns=0,br=1,gn=[],vr=0,Ar=!1,An.tracking=!1,Mn.style.left="",Mn.style.top="",Mn.style.transform="",Mn.style.transition="",Er&&(Er.innerHTML="",Er.classList.add("hidden")),Nn.resummon(),mo(),Yi()}n_.addEventListener("click",async()=>{t_.classList.add("hidden"),e_.classList.remove("hidden"),In&&(In.textContent=""),vn&&(vn.innerHTML="正在连接摄像头…"),mn&&(mn.style.transition="none",mn.classList.remove("hidden"),mn.offsetHeight,mn.style.transition=""),Vi&&Vi.classList.add("hidden");try{if(ai("正在连接摄像头…"),await go(),Le=Pe.PLAY,Sn=null,Tr=null,ii=null,uo="other",ns=0,br=1,gn=[],vr=0,Ar=!1,An.tracking=!1,wn=0,Vi&&Vi.classList.add("hidden"),mn&&(mn.style.transition="none",mn.classList.remove("hidden"),mn.offsetHeight,mn.style.transition=""),no.classList.remove("active"),Mn.classList.remove("show"),mo(),Nn.resummon(),In.textContent="第一步：聚气",vn.innerHTML=`<img src="${Wu}" class="gesture-icon"> 试试握拳，感受灵力凝聚`,!Bn){v_();try{await __();const i=qn?12e4:6e4;Bn=await g_(Y_(),i,"MediaPipe 初始化超时")}finally{lu()}}_o(Bn)}catch(i){console.error(i),lu();let t="摄像头或模型加载失败：请检查权限与网络";String(i?.message||"").includes("MediaPipe 初始化超时")?t="手势模型加载超时：请确认(1)手机与电脑同一 Wi‑Fi(2)用系统浏览器打开 Vite 终端里 https 的 Network 地址(3)在 Safari 信任自签证书。勿用企业微信/应用内 WebView。":String(i?.message||"").includes("hands.binarypb")||String(i?.message||"").includes("public/mediapipe")?t=i.message:window.isSecureContext?i?.name==="NotAllowedError"||i?.name==="PermissionDeniedError"?t="摄像头权限被拒绝：请在系统设置或浏览器地址栏旁重新允许摄像头。":i?.message&&String(i.message).includes("安全上下文")?t=i.message:/MicroMessenger/i.test(navigator.userAgent)?t+=" 若在微信内打开，可换 Safari / Chrome 打开同一 https 链接再试。":i?.message&&(t=`${t} 详情：${i.message}`):t="请用 https:// 访问本页（手机不要用 http://局域网地址）。终端运行 npm run dev 后，用 https:// 开头的 Network 链接。",ai(t)}});$c&&$c.addEventListener("click",()=>{q_()});Vi?.addEventListener("click",()=>{if(Le!==Pe.PLAY)return;const i=!ii,t=ii??C_();Qu(t),i&&ai("未检测到手，灵根随机；手掌入画后张掌揭晓")});Ur&&Ur.addEventListener("click",()=>{X_()});r_.addEventListener("click",async()=>{mo();try{Ml(),await go(),Bn&&_o(Bn),Yi()}catch(i){console.error(i),ai("返回AR失败，请重试")}});tu&&tu.addEventListener("click",async()=>{xr=xr==="environment"?"user":"environment",ai(xr==="environment"?"切换到后摄…":"切换到前摄…");try{Ml(),await go(),Bn&&_o(Bn),ai(xr==="environment"?"已切换到后摄":"已切换到前摄")}catch(i){console.error(i),ai("切换失败，请重试")}});window.addEventListener("resize",()=>{vl()});const uu=ae("#note-https");uu&&window.isSecureContext&&location.protocol==="https:"&&(uu.style.display="none");Yi();function j_(i){xi&&(xi.classList.remove("play"),xi.offsetHeight,i&&(xi.style.left=`${i.x}px`,xi.style.top=`${i.y}px`),xi.classList.add("play"))}
