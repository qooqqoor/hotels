(this.webpackJsonpadaless=this.webpackJsonpadaless||[]).push([[4],{61:function(t,e,r){t.exports=r(63)},62:function(t,e,r){"use strict";function n(t,e,r,n,a,o,i){try{var c=t[o](i),u=c.value}catch(l){return void r(l)}c.done?e(u):Promise.resolve(u).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var i=t.apply(e,r);function c(t){n(i,a,o,c,u,"next",t)}function u(t){n(i,a,o,c,u,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return a}))},63:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(j){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof h?e:h,o=Object.create(a.prototype),i=new L(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return O()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(j){return{type:"throw",arg:j}}}t.wrap=u;var s={};function h(){}function f(){}function p(){}var m={};m[a]=function(){return this};var d=Object.getPrototypeOf,v=d&&d(d(N([])));v&&v!==e&&r.call(v,a)&&(m=v);var y=p.prototype=h.prototype=Object.create(m);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,c){var u=l(t[a],t,o);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"===typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(h).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function b(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return f.prototype=y.constructor=p,p.constructor=f,f.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(w.prototype),w.prototype[o]=function(){return this},t.AsyncIterator=w,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new w(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(y),c(y,i,"Generator"),y[a]=function(){return this},y.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),b(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;b(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},64:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(0),a=r.n(n),o=(r(65),r(13)),i=function(t){var e=t.children,r=t.className;return a.a.createElement("div",{className:"textStyle ".concat(r)},a.a.createElement(o.b,{to:"/",className:"indexLink"},a.a.createElement("h1",null,a.a.createElement("span",null,e))))}},65:function(t,e,r){},66:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(18),a=r.n(n),o="https://challenge.thef2e.com/api/thef2e2019/stage6/rooms",i="https://challenge.thef2e.com/api/thef2e2019/stage6/room",c=function(t,e){var r=o;switch(t){case"allHotels":r=o;break;case"onceHotels":r=i+"/"+e}return a.a.get(r).then((function(t){return t.data})).catch((function(t){console.log(t)}))}},67:function(t,e,r){},68:function(t,e,r){},69:function(t,e,r){},86:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return g}));var n=r(61),a=r.n(n),o=r(62),i=r(9),c=r(10),u=r(12),l=r(11),s=r(0),h=r.n(s),f=(r(67),r(66)),p=r(64),m=r(17),d=(r(68),function(){return h.a.createElement("div",{className:"footer-box"},h.a.createElement("div",{className:"address"},h.a.createElement("i",{className:"ic ic-address"}),h.a.createElement("span",null,"\u53f0\u4e2d\u5e02\u897f\u5c6f\u5340\u5e02\u653f\u8def588\u865f\u8c50\u9091\u5927\u6a13")),h.a.createElement("div",{className:"phone"},h.a.createElement("i",{className:"ic ic-phone"}),h.a.createElement("span",null,"04-22541496-19")),h.a.createElement("div",{className:"mail"},h.a.createElement("i",{className:"ic ic-mail"}),h.a.createElement("span",null,"ada.lew@link8tech.tw")))}),v=(r(69),r(13)),y=function(t){var e=t.data;return h.a.createElement("div",{className:"hotelsboxs"},e.length>0?h.a.createElement(h.a.Fragment,null,e.map((function(t,e){return h.a.createElement(v.b,{className:"hotexbox",to:{pathname:"/room",search:"?id="+t.id},key:t.id,style:{animationDelay:"".concat(e/5,"s")}},h.a.createElement("div",{className:"hotexbox-img"},h.a.createElement("div",{style:{backgroundImage:'url("'.concat(t.imageUrl,'")')},alt:""})),h.a.createElement("div",{className:"hotexbox-text"},h.a.createElement("span",null,t.name),h.a.createElement("span",null,"$ ",t.normalDayPrice),h.a.createElement("span",null,"$ ",t.holidayPrice)))}))):"")},g=function(t){Object(u.a)(r,t);var e=Object(l.a)(r);function r(){var t;Object(i.a)(this,r);for(var n=arguments.length,c=new Array(n),u=0;u<n;u++)c[u]=arguments[u];return(t=e.call.apply(e,[this].concat(c))).state={data:"",loading:!1},t.successHotels=Object(o.a)(a.a.mark((function e(){var r,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)("allHotels");case 2:return r=e.sent,n=r.items,t.setState({loading:!0}),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)}))),t.componentDidMount=Object(o.a)(a.a.mark((function e(){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.successHotels();case 2:r=e.sent,t.setState({data:r});case 4:case"end":return e.stop()}}),e)}))),t}return Object(c.a)(r,[{key:"render",value:function(){var t=this.state.data,e=this.state.loading;return h.a.createElement(h.a.Fragment,null,h.a.createElement("div",{className:"homepages"},h.a.createElement(p.a,{className:"title"},"WHITE  INN"),e?"":h.a.createElement(m.a,null),h.a.createElement(y,{data:t}),h.a.createElement("div",{className:"footer"},h.a.createElement(d,null))))}}]),r}(h.a.Component)}}]);
//# sourceMappingURL=4.eb8fc585.chunk.js.map