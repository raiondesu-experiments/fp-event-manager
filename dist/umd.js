!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((n=n||self).eventhoven={})}(this,function(n){"use strict";function t(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}function r(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){if(!(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n)))return;var r=[],e=!0,o=!1,u=void 0;try{for(var i,c=n[Symbol.iterator]();!(e=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);e=!0);}catch(n){o=!0,u=n}finally{try{e||null==c.return||c.return()}finally{if(o)throw u}}return r}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function e(n){return function(n){if(Array.isArray(n)){for(var t=0,r=new Array(n.length);t<n.length;t++)r[t]=n[t];return r}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o,u=function(n,t){return[].concat(e(Object.keys(n)),e(Object.getOwnPropertySymbols(n))).reduce(function(n,r){return n[r]=t(r),n},{})},i=function(n){return u(n,function(t){return(new Map).set(n[t],function(){})})},c=i((t(o={},"EMIT",function(n,t,r,e){}),t(o,"SUBSCRIBE",function(n,t,r,e){}),t(o,"UNSUBSCRIBE",function(n,t,r,e){}),o)),f=function(n){return function(t){return function(){for(var o=arguments.length,u=new Array(o),i=0;i<o;i++)u[i]=arguments[i];return a("EMIT")(n,t,u).then(function(o){return Promise.all(e(n[t]||[]).map(function(n){var e=r(n,2),o=e[0],i=e[1];return o&&o.apply(void 0,[{event:t,unsubscribe:i}].concat(u))}))})}}},a=function(n){return function(){return(arguments.length<=0?void 0:arguments[0])!==c?f(c)(n).apply(void 0,arguments):Promise.resolve([])}},l=function(n){return function(t){return function(){for(var r=arguments.length,e=new Array(r),o=0;o<r;o++)e[o]=arguments[o];if(t in n){var u=!0,i=!1,c=void 0;try{for(var f,l=(e.length>0?e:n[t].keys())[Symbol.iterator]();!(u=(f=l.next()).done);u=!0){var s=f.value;a("UNSUBSCRIBE")(n,t,s),n[t].delete(s)}}catch(n){i=!0,c=n}finally{try{u||null==l.return||l.return()}finally{if(i)throw c}}}}}},s=l,y=function(n){return function(t){var r=function(){for(var r=arguments.length,e=new Array(r),o=0;o<r;o++)e[o]=arguments[o];return function(){return l(n)(t).apply(void 0,e)}};return function(){for(var o=arguments.length,u=new Array(o),i=0;i<o;i++)u[i]=arguments[i];return r.apply(void 0,e(u.map(function(e){return a("SUBSCRIBE")(n,t,e),t in n&&n[t].set(e,r(e)),e})))}}},b=y,v=function(n){return function(t){return u(t,n(t))}},p=v(f),d=v(y),m=v(l),h=function(n){return function(t){return function(){for(var r=arguments.length,e=new Array(r),o=0;o<r;o++)e[o]=arguments[o];u(t,function(r){return n(t)(r).apply(void 0,e)})}}},g=h(y),A=g,w=h(l),S=w,j=A(c),I=S(c),O=function(n){return function(t){return(t?j:I)(n)}},E=O(function(n,t,r,e){var o=n.event;return console.log((new Date).toJSON().substr(14,9),"[".concat(o,' "').concat(String(r),'"').concat(r in t?"":" (INVALID)","] -"),e)}),B=function(n){return function(t){for(var r=arguments.length,e=new Array(r>1?r-1:0),o=1;o<r;o++)e[o-1]=arguments[o];return t.unsubscribe(),n.apply(void 0,[t].concat(e))}},C=function(n){return function(t){return new Promise(function(r){return y(n)(t)(B(function(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),o=1;o<t;o++)e[o-1]=arguments[o];return r(e)}))})}};n.customDebug=O,n.debug=E,n.emit=f,n.emitAll=function(n){return function(t){return u(n,function(r){return f(n)(r).apply(void 0,e(t[r]))})}},n.emitCollection=p,n.emitMeta=a,n.eventCollection=function(n){return{emit:p(n),subscribe:d(n),unsubscribe:m(n)}},n.eventMap=i,n.harmonicWait=function(n){return function(t){return function(){return C(n)(t)}}},n.metaEvents=c,n.off=s,n.offAll=S,n.on=b,n.onAll=A,n.once=B,n.subscribe=y,n.subscribeCollection=d,n.subscribeToAll=g,n.unsubscribe=l,n.unsubscribeCollection=m,n.unsubscribeFromAll=w,n.wait=C,Object.defineProperty(n,"__esModule",{value:!0})});
//# sourceMappingURL=umd.js.map
