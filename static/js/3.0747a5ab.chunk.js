(this.webpackJsonpadaless=this.webpackJsonpadaless||[]).push([[3],{61:function(e,t,a){e.exports=a(63)},62:function(e,t,a){"use strict";function n(e,t,a,n,r,o,c){try{var i=e[o](c),s=i.value}catch(l){return void a(l)}i.done?t(s):Promise.resolve(s).then(n,r)}function r(e){return function(){var t=this,a=arguments;return new Promise((function(r,o){var c=e.apply(t,a);function i(e){n(c,r,o,i,s,"next",e)}function s(e){n(c,r,o,i,s,"throw",e)}i(void 0)}))}}a.d(t,"a",(function(){return r}))},63:function(e,t,a){var n=function(e){"use strict";var t=Object.prototype,a=t.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function i(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(C){i=function(e,t,a){return e[t]=a}}function s(e,t,a,n){var r=t&&t.prototype instanceof d?t:d,o=Object.create(r.prototype),c=new N(n||[]);return o._invoke=function(e,t,a){var n="suspendedStart";return function(r,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw o;return S()}for(a.method=r,a.arg=o;;){var c=a.delegate;if(c){var i=y(c,a);if(i){if(i===u)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var s=l(e,t,a);if("normal"===s.type){if(n=a.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(n="completed",a.method="throw",a.arg=s.arg)}}}(e,a,c),o}function l(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(C){return{type:"throw",arg:C}}}e.wrap=s;var u={};function d(){}function m(){}function h(){}var f={};f[r]=function(){return this};var p=Object.getPrototypeOf,b=p&&p(p(w([])));b&&b!==t&&a.call(b,r)&&(f=b);var v=h.prototype=d.prototype=Object.create(f);function x(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function g(e,t){var n;this._invoke=function(r,o){function c(){return new t((function(n,c){!function n(r,o,c,i){var s=l(e[r],e,o);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"===typeof d&&a.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,c,i)}),(function(e){n("throw",e,c,i)})):t.resolve(d).then((function(e){u.value=e,c(u)}),(function(e){return n("throw",e,c,i)}))}i(s.arg)}(r,o,n,c)}))}return n=n?n.then(c,c):c()}}function y(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,y(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=l(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var r=n.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function w(e){if(e){var t=e[r];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return m.prototype=v.constructor=h,h.constructor=m,m.displayName=i(h,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,i(e,c,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},x(g.prototype),g.prototype[o]=function(){return this},e.AsyncIterator=g,e.async=function(t,a,n,r,o){void 0===o&&(o=Promise);var c=new g(s(t,a,n,r),o);return e.isGeneratorFunction(a)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},x(v),i(v,c,"Generator"),v[r]=function(){return this},v.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var n=t.pop();if(n in e)return a.value=n,a.done=!1,a}return a.done=!0,a}},e.values=w,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return c.type="throw",c.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],c=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=a.call(o,"catchLoc"),s=a.call(o,"finallyLoc");if(i&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),E(a),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;E(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:w(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),u}},e}(e.exports);try{regeneratorRuntime=n}catch(r){Function("r","regeneratorRuntime = r")(n)}},64:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),r=a.n(n),o=(a(65),a(13)),c=function(e){var t=e.children,a=e.className;return r.a.createElement("div",{className:"textStyle ".concat(a)},r.a.createElement(o.b,{to:"/",className:"indexLink"},r.a.createElement("h1",null,r.a.createElement("span",null,t))))}},65:function(e,t,a){},66:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return s}));var n=a(18),r=a.n(n),o="https://challenge.thef2e.com/api/thef2e2019/stage6/rooms",c="https://challenge.thef2e.com/api/thef2e2019/stage6/room",i=function(e,t){var a=o;switch(e){case"allHotels":a=o;break;case"onceHotels":a=c+"/"+t}return r.a.get(a).then((function(e){return e.data})).catch((function(e){console.log(e)}))},s=function(e,t){var a=c+"/"+e;return r.a.post(a,t).then((function(e){return e.data})).catch((function(e){console.log(e)}))}},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){e.exports=a.p+"static/media/RepeatGrid1.8959ff72.svg"},81:function(e,t,a){e.exports=a.p+"static/media/Union1.e2e702d3.svg"},82:function(e,t,a){e.exports=a.p+"static/media/left.f5505904.svg"},83:function(e,t,a){e.exports=a.p+"static/media/right.6ac80b3d.svg"},84:function(e,t,a){},85:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function r(e,t){if(e){if("string"===typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}function o(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=r(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o,c=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){i=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(i)throw o}}}}a.r(t),a.d(t,"default",(function(){return R}));var c=a(61),i=a.n(c),s=a(62),l=a(9),u=a(10),d=a(12),m=a(11),h=a(0),f=a.n(h),p=a(66),b=a(17),v=a(64);function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(s){r=!0,o=s}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}return a}}(e,t)||r(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a(70),a(71);var g=function(e){var t=e.item,a=e.className,n=(e.changeTitleImage,e.onClick);return f.a.createElement("div",{className:"imglist"},f.a.createElement("div",{className:a,style:{backgroundImage:"url(".concat(t,")")},onClick:function(){return n()}}))},y=(a(72),function(e){var t=e.changeTitleImage;return f.a.createElement(f.a.Fragment,null,f.a.createElement("div",{className:"lightbox-btn open",onClick:function(e){return function(e){e.stopPropagation(),t()}(e)}}))}),k=function(e){var t=e.titleImage,a=e.listImage,n=e.changeTitleImage,r=x(Object(h.useState)({leight:!1,checkImage:""}),2),o=r[0],c=r[1];return f.a.createElement(f.a.Fragment,null,f.a.createElement("div",{className:"room-image "},f.a.createElement("div",{className:"img-title "},t&&f.a.createElement("div",{className:"img-title-box imagefadein",style:{backgroundImage:"url(".concat(t,")")},onClick:function(){return c({leight:!0,checkImage:t})}},f.a.createElement(y,{titleImage:t,changeTitleImage:n}))),o.leight&&f.a.createElement("div",{className:"lightbox"},f.a.createElement("div",null,f.a.createElement("img",{src:o.checkImage,alt:""}),f.a.createElement("div",{className:"lightbox-btn close",onClick:function(){return c({leight:!1})}}))),a.length>0?f.a.createElement("div",{className:"img-list"},a.map((function(e,a){if(e!=t)return f.a.createElement(g,{item:e,key:e,className:"imglist-box imagefadein",onClick:function(){return c({leight:!0,checkImage:e})}})}))):""))},E=(a(73),a(13)),N=function(e){var t=e.alldata,a=e.oncedata,n=e.changeTitle;return f.a.createElement("div",{className:"text-title"},t&&t.length>0&&t.map((function(e){if(a!=e.name)return f.a.createElement(E.b,{key:e.id,to:{pathname:"/room/"+e.id},className:"text-p",onClick:function(){return n(e.id)}},f.a.createElement("p",{key:e.id},e.name))})))},w=(a(74),a(75),function(e){var t=e.children,a=e.checkimg;return f.a.createElement("div",{className:"checkbox"},f.a.createElement("i",{className:"checkbox-icon ".concat(a?"checked":"nochecked")}),f.a.createElement("span",null,t))}),S=function(e){var t=e.oncedata;return f.a.createElement("div",{className:"text-footer"},f.a.createElement("div",{className:"first"},f.a.createElement(w,{checkimg:t.room[0].amenities["Wi-Fi"]},"wifi"),f.a.createElement(w,{checkimg:t.room[0].amenities["Room-Service"]},"Room Service"),f.a.createElement(w,{checkimg:t.room[0].amenities.Refrigerator},"\u51b0\u7bb1"),f.a.createElement(w,{checkimg:t.room[0].amenities["Smoke-Free"]},"\u7981\u6b62\u5438\u7159")),f.a.createElement("div",{className:"second"},f.a.createElement(w,{checkimg:t.room[0].amenities.Breakfast},"\u65e9\u9910"),f.a.createElement(w,{checkimg:t.room[0].amenities.Television},"\u96fb\u8a71"),f.a.createElement(w,{checkimg:t.room[0].amenities.Sofa},"\u6c99\u767c"),f.a.createElement(w,{checkimg:t.room[0].amenities["Child-Friendly"]},"\u9069\u5408\u5152\u7ae5")),f.a.createElement("div",{className:"thired"},f.a.createElement(w,{checkimg:t.room[0].amenities["Mini-Bar"]},"Mini Bar"),f.a.createElement(w,{checkimg:t.room[0].amenities["Air-Conditioner"]},"\u7a7a\u8abf"),f.a.createElement(w,{checkimg:t.room[0].amenities["Great-View"]},"\u6f02\u4eae\u7684\u8996\u91ce"),f.a.createElement(w,{checkimg:t.room[0].amenities["Smoke-Free"]},"\u5bf5\u7269\u651c\u5e36")))},C=(a(76),a(77),function(e){var t=e.onClick,a=e.children;return f.a.createElement("div",{className:"species-btnBox",onClick:t},a)}),I=function(){var e=new Date;return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()},O=function(e){return new Date(e)},D=function(e){e.getMonth();return e.getMonth()},j=function(e){return e.getFullYear()},P=function(e){return e.getDate()},L=function(e){var t=O(e);return t.setMonth(t.getMonth()+1,0),t.getDate()},A=function(e){var t=O(e);t.setMonth(t.getMonth()+1,0);var a=L(t);t.setDate(1);for(var n=new Array,r=0,o=1;o<42;o++)o>=t.getDay()&&r<=a&&r++,r<=a&&(n[o]=r);return n},M=function(e){return["\u661f\u671f\u65e5","\u661f\u671f\u4e00","\u661f\u671f\u4e8c","\u661f\u671f\u4e09","\u661f\u671f\u56db","\u661f\u671f\u4e94","\u661f\u671f\u516d"][O(e).getDay()]},B=function(e,t){return(O(t)-O(e))/864e5},T=function(e){return e<10?"0"+e:e},F=function(e,t){var a=O(e||t),n=O(t||e),r=new Array;if(n>=a)for(r.push(j(a)+"-"+T(D(a)+1)+"-"+T(P(a)));j(a)+"-"+T(D(a)+1)+"-"+T(P(a))!=j(n)+"-"+T(D(n)+1)+"-"+T(P(n));)a.setDate(P(a)+1),r.push(j(a)+"-"+T(D(a)+1)+"-"+T(P(a)));return r},G=function(e){var t=e.oncedata,a=e.setCheckinBox,n=e.dateboxcheck1,r=e.dateboxcheck2,o=e.checkInEarly,c=e.checkOut,i=e.normalDayPrice,s=e.holidayPrice,l=e.parameSubmit;return f.a.createElement("div",{className:"check-bg"},f.a.createElement("div",{className:"check-box"},t&&f.a.createElement(f.a.Fragment,null,f.a.createElement("div",{className:"check-box-title"},t.room[0].name),f.a.createElement("div",{className:"check-box-center"},f.a.createElement("div",{className:"check-box-center-title"},f.a.createElement("div",null,f.a.createElement("div",{className:"border-gray"},"\u5165\u4f4f"),f.a.createElement("p",null,n," ",M(n),"\uff08",o," \u8d77\uff09")),f.a.createElement("div",null,f.a.createElement("div",{className:"border-gray"},"\u9000\u623f"),f.a.createElement("p",null,r," ",M(r),"\uff08",c," \u524d\uff09"))),f.a.createElement("div",{className:"check-box-center-total"},B(n,r),"\u665a / ",function(e,t,a,n){for(var r=[a,a,a,a,a,n,n],o=B(e,t),c=O(e).getDay(),i=0,s=0;s<o;s++)c<7?(i+=r[c],c++):(i+=r[c=0],c++);return i}(n,r,i,s),"\u5143")),f.a.createElement("div",{className:"check-box-btn"},f.a.createElement(C,{onClick:function(){return l()}},"\u78ba\u5b9a")),f.a.createElement("div",{className:"check-colse-btn",onClick:a}))))},_=(a(78),function(e){var t=e.oncedata,a=e.checkBed;return f.a.createElement("div",{className:"caption"},f.a.createElement("div",{className:"caption-title"},f.a.createElement("h2",null,t&&t.room[0].name)),f.a.createElement("div",{className:"caption-center"},f.a.createElement("span",null,t&&t.room[0].description)),f.a.createElement("div",{className:"caption-footer"},t&&f.a.createElement(f.a.Fragment,null,f.a.createElement("p",null,"\u623f\u5ba2\u4eba\u6578\u9650\u5236\uff1a",t.room[0].descriptionShort.GuestMin==t.room[0].descriptionShort.GuestMax?t.room[0].descriptionShort.GuestMin:t.room[0].descriptionShort.GuestMin+"-"+t.room[0].descriptionShort.GuestMax,"\u4eba"),f.a.createElement("p",null,"\u5e8a\u578b\uff1a",t.room[0].descriptionShort.Bed.map((function(e,n){return n!=t.room[0].descriptionShort.Bed.length-1?a(e)+"/":a(e)}))),f.a.createElement("p",null,"\u885b\u6d74\u6578\u91cf\uff1a",t.room[0].descriptionShort["Private-Bath"],"\u9593"),f.a.createElement("p",null,"\u623f\u9593\u5927\u5c0f\uff1a",t.room[0].descriptionShort.Footage,"\u5e73\u65b9\u516c\u5c3a"),f.a.createElement("p",null,"checkIn \u6642\u9593\uff1a",t.room[0].checkInAndOut.checkInEarly,"~",t.room[0].checkInAndOut.checkInLate),f.a.createElement("p",null,"checkOut \u6642\u9593\uff1a",t.room[0].checkInAndOut.checkOut),f.a.createElement("br",null))))}),U=(a(79),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;Object(l.a)(this,n),(a=t.call(this,e)).setDatebox2date=function(e){(0,a.props.setDateboxdate)(j(a.state.dateboxdateCopy)+"/"+(D(a.state.dateboxdateCopy)+1)+"/"+e)},a.steMonthAdd=function(){a.state.dateboxdateCopy.setMonth(D(a.state.dateboxdateCopy)+1,1),a.setState({dateboxdateCopy:a.state.dateboxdateCopy,totalday:L(a.state.dateboxdateCopy),dayArray:A(a.state.dateboxdateCopy)})},a.steMonthMinus=function(){a.state.dateboxdateCopy.setMonth(D(a.state.dateboxdateCopy)-1,1),a.setState({dateboxdateCopy:a.state.dateboxdateCopy,totalday:L(a.state.dateboxdateCopy),dayArray:A(a.state.dateboxdateCopy)})},a.SetDatebox1=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,a.props.setDatebox1)(),t.stopPropagation();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var r=a.props.dateboxdate,o=A(r);return a.state={dateboxdate:r,dateboxdateCopy:r,totalday:L(r),dayArray:o},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e,t,a){var n=this.props.dateboxdate;e.dateboxdate!=n&&this.setState({dateboxdateCopy:O(n),dayArray:A(this.state.dateboxdateCopy)})}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=t.inputBox,o=t.datebox,c=t.dateboxcheck,i=t.dateboxlist,s=t.afterdate,l=t.booking;return f.a.createElement(f.a.Fragment,null,f.a.createElement("input",{className:n,type:"text",onFocus:function(t){e.SetDatebox1(t)},onClick:function(e){return e.stopPropagation()},value:c}),o&&f.a.createElement(f.a.Fragment,null,f.a.createElement("div",{className:"data-box",onClick:function(e){return e.stopPropagation()}},"RepeatGrid1"==r&&f.a.createElement("img",{src:a(80),alt:""}),"Union1"==r&&f.a.createElement("img",{src:a(81),alt:""}),f.a.createElement("div",{className:"datelist"},f.a.createElement("div",{className:"date-title"},f.a.createElement("img",{src:a(82),alt:"",onClick:function(){return e.steMonthMinus()}}),f.a.createElement("p",null,j(this.state.dateboxdateCopy)," / ",D(this.state.dateboxdateCopy)+1),f.a.createElement("img",{src:a(83),alt:"",onClick:function(){return e.steMonthAdd()}})),f.a.createElement("div",{className:"date-center"},f.a.createElement("div",{className:"date-center-table"},f.a.createElement("div",null,"MON"),f.a.createElement("div",null,"TUE"),f.a.createElement("div",null,"WED"),f.a.createElement("div",null,"THU"),f.a.createElement("div",null,"FRI"),f.a.createElement("div",{className:"bord"},"SAT"),f.a.createElement("div",{className:"bord"},"SUN"),this.state.dayArray.map((function(t,a){if(0!=t){var n=j(e.state.dateboxdateCopy)+"-"+T(D(e.state.dateboxdateCopy)+1)+"-"+T(t),r=j(e.state.dateboxdateCopy)+"-"+(D(e.state.dateboxdateCopy)+1)+"-"+t,o="";i&&i.map((function(e){n==e&&(o+=" checked")})),7!=a&&6!=a&&14!=a&&13!=a&&21!=a&&20!=a&&28!=a&&27!=a&&35!=a&&34!=a||(o+=" bord");var c=!1;return l.map((function(e){n==e&&(c=!0)})),O(s)>=O(r)?f.a.createElement("div",{key:a,className:"afterdate ".concat(o)},t):c?f.a.createElement("div",{key:a,className:"booking ".concat(o)},t):f.a.createElement("div",{key:a,className:"dadd ".concat(o),onClick:function(){return e.setDatebox2date(t)}},t)}return f.a.createElement("div",{key:a})}))))))))}}]),n}(f.a.Component)),R=(a(84),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={data:"",loading:!1,oncedata:"",oncedataroom:"",alldatas:"",checkinBox:!1,speciesName:"",speciesPhone:"",datebox1:!1,datebox2:!1,datebox1date:I(),datebox2date:I(),dateboxcheck1:"",dateboxcheck2:"",dateboxlist:"",booking:""},n.onceHotels=function(){var e=Object(s.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.b)("onceHotels",t);case 2:return a=e.sent,e.next=5,Object(p.b)("allHotels");case 5:return n=e.sent,e.abrupt("return",{items:a,allitems:n});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.setDatebox1date=function(){var e=Object(s.a)(i.a.mark((function e(t){var a,r,c,s,l,u,d,m,h,f,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((a=O(t)).setDate(a.getDate()+1),r=j(a)+"/"+(D(a)+1)+"/"+P(a),!(O(n.state.dateboxcheck2)<=O(t))&&n.state.dateboxcheck2){e.next=6;break}return e.next=6,n.setState({datebox2date:t,dateboxcheck2:r});case 6:!n.state.dateboxcheck2&&n.setState({datebox2date:t}),c=F(t,n.state.dateboxcheck2),s=n.state.booking,l=!0,u=o(c),e.prev=11,u.s();case 13:if((d=u.n()).done){e.next=37;break}m=d.value,h=o(s),e.prev=16,h.s();case 18:if((f=h.n()).done){e.next=27;break}if(p=f.value,m!=p){e.next=25;break}return alert("\u9810\u7d04\u671f\u9593\u5df2\u6709\u5176\u4ed6\u9810\u7d04\uff0c\u8acb\u66f4\u6539\u6642\u9593\uff01"),l=!1,n.setState({datebox2date:m,dateboxcheck2:"",datebox1date:m,dateboxcheck1:"",dateboxlist:""},(function(){n.setState({dateboxlist:F(n.state.dateboxcheck1,n.state.dateboxcheck2)})})),e.abrupt("return");case 25:e.next=18;break;case 27:e.next=32;break;case 29:e.prev=29,e.t0=e.catch(16),h.e(e.t0);case 32:return e.prev=32,h.f(),e.finish(32);case 35:e.next=13;break;case 37:e.next=42;break;case 39:e.prev=39,e.t1=e.catch(11),u.e(e.t1);case 42:return e.prev=42,u.f(),e.finish(42);case 45:l&&n.setState({datebox1date:t,dateboxcheck1:t,datebox1:!1,datebox2:!1},(function(){n.setState({dateboxlist:F(n.state.dateboxcheck1,n.state.dateboxcheck2)})}));case 46:case"end":return e.stop()}}),e,null,[[11,39,42,45],[16,29,32,35]])})));return function(t){return e.apply(this,arguments)}}(),n.setDatebox2date=function(){var e=Object(s.a)(i.a.mark((function e(t){var a,r,c,s,l,u,d,m,h;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=F(n.state.dateboxcheck1,t),r=n.state.booking,c=!0,s=o(a),e.prev=4,s.s();case 6:if((l=s.n()).done){e.next=30;break}u=l.value,d=o(r),e.prev=9,d.s();case 11:if((m=d.n()).done){e.next=20;break}if(h=m.value,u!=h){e.next=18;break}return alert("\u9810\u7d04\u671f\u9593\u5df2\u6709\u5176\u4ed6\u9810\u7d04\uff0c\u8acb\u66f4\u6539\u6642\u9593\uff01"),c=!1,n.setState({datebox2date:u,dateboxcheck2:"",datebox1date:u,dateboxcheck1:"",dateboxlist:""}),e.abrupt("return");case 18:e.next=11;break;case 20:e.next=25;break;case 22:e.prev=22,e.t0=e.catch(9),d.e(e.t0);case 25:return e.prev=25,d.f(),e.finish(25);case 28:e.next=6;break;case 30:e.next=35;break;case 32:e.prev=32,e.t1=e.catch(4),s.e(e.t1);case 35:return e.prev=35,s.f(),e.finish(35);case 38:c&&n.setState({datebox2date:t,dateboxcheck2:t,datebox1:!1,datebox2:!1},(function(){n.setState({dateboxlist:F(n.state.dateboxcheck1,n.state.dateboxcheck2)})}));case 39:case"end":return e.stop()}}),e,null,[[4,32,35,38],[9,22,25,28]])})));return function(t){return e.apply(this,arguments)}}(),n.setCheckinBox=function(){n.setState({checkinBox:!1})},n.changeTitleImage=function(){var e=n.state.totalImage,t=e[0];e.shift(),e.push(t),n.setState({totalImage:e})},n.changeTitle=function(){var e=Object(s.a)(i.a.mark((function e(t){var a,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setState({loading:!1});case 2:return e.next=4,n.onceHotels(t);case 4:return a=e.sent,r=a.items,o=a.allitems,e.next=9,n.setState({loading:!0,oncedata:r,totalImage:r.room[0].imageUrl,alldatas:o.items});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.checkBed=function(e){switch(e){case"Double":return"\u96d9\u4eba\u5e8a";case"Single":return"\u55ae\u4eba\u5e8a";case"Queen":return"\u52a0\u5927\u5e8a";case"Small Double":return"\u5c0f\u96d9\u4eba\u5e8a";default:return e}},n.checkinBox=function(){""==n.state.speciesName?alert("\u8acb\u8f38\u5165\u59d3\u540d\uff01"):""==n.state.speciesPhone?alert("\u8acb\u8f38\u5165\u96fb\u8a71\uff01"):""==n.state.dateboxcheck1?alert("\u8acb\u8f38\u5165\u5165\u4f4f\u65e5\u671f\uff01"):""==n.state.dateboxcheck2?alert("\u8acb\u8f38\u5165\u9000\u623f\u65e5\u671f\uff01"):n.setState({checkinBox:!0})},n.setTextValue=function(e){n.setState({speciesName:e.target.value})},n.setPhoneValue=function(e){n.setState({speciesPhone:e.target.value})},n.setDatebox1=function(e,t){n.setState({datebox1:e,datebox2:t})},n.parameSubmit=Object(s.a)(i.a.mark((function e(){var t,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({checkinBox:!1,loading:!1}),t={name:n.state.speciesName,tel:n.state.speciesPhone,date:n.state.dateboxlist},e.next=4,Object(p.a)(n.props.match.params.id,t);case 4:a=e.sent,r=a.success,console.log(r),r&&alert("\u9810\u7d04\u6210\u529f\uff01"),window.history.go(0);case 9:case"end":return e.stop()}}),e)}))),n.componentDidMount=Object(s.a)(i.a.mark((function e(){var t,a,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.match.params.id,e.next=3,n.onceHotels(t);case 3:a=e.sent,r=a.items,o=a.allitems,n.setState({loading:!0,oncedata:r,totalImage:r.room[0].imageUrl,alldatas:o.items},(function(){var e=n.state.oncedata.booking.map((function(e){return e.date}));n.setState({booking:e})}));case 7:case"end":return e.stop()}}),e)}))),n.Name=f.a.createRef(),n.Phone=f.a.createRef(),n}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.state.loading,a=this.state.alldatas,n=this.state.oncedata;return f.a.createElement(f.a.Fragment,null,f.a.createElement("div",{className:"room",onClick:function(){return(e.state.datebox1||e.state.datebox2)&&e.setDatebox1(!1,!1)}},f.a.createElement(v.a,{className:"title"},"WHITE  INN"),t?"":f.a.createElement(b.a,null),this.state.checkinBox&&f.a.createElement(G,{setCheckinBox:this.setCheckinBox,oncedata:n&&n,speciesName:this.state.speciesName,speciesPhone:this.state.speciesPhone,dateboxcheck1:this.state.dateboxcheck1,dateboxcheck2:this.state.dateboxcheck2,checkInEarly:n.room[0].checkInAndOut.checkInEarly,checkOut:n.room[0].checkInAndOut.checkOut,normalDayPrice:n&&n.room[0].normalDayPrice,holidayPrice:n&&n.room[0].holidayPrice,parameSubmit:this.parameSubmit}),f.a.createElement("div",{className:"body"},f.a.createElement(k,{titleImage:n&&this.state.totalImage[0],listImage:n&&this.state.totalImage,changeTitleImage:this.changeTitleImage}),f.a.createElement("div",{className:"room-text"},f.a.createElement(N,{alldata:a,oncedata:n&&n.room[0].name,changeTitle:this.changeTitle}),f.a.createElement("div",{className:"text-body"},f.a.createElement(_,{oncedata:n,checkBed:this.checkBed}),f.a.createElement("div",{className:"species"},f.a.createElement("div",{className:"species-title"},f.a.createElement("p",null,"\u5e73\u65e5(\u4e00~\u56db)\u50f9\u683c\uff1a",f.a.createElement("span",null,n&&n.room[0].normalDayPrice)),f.a.createElement("p",null,"\u5047\u65e5(\u4e94~\u65e5)\u50f9\u683c\uff1a",f.a.createElement("span",null,n&&n.room[0].holidayPrice))),f.a.createElement("div",{className:"species-bodys"},f.a.createElement("input",{className:"species-input ".concat(this.state.speciesName?"":"species-name"),type:"text",onKeyUp:function(t){return e.setTextValue(t)},ref:this.Name}),f.a.createElement("input",{className:"species-input ".concat(this.state.speciesPhone?"":"species-phone"),type:"text",onKeyUp:function(t){return e.setPhoneValue(t)},ref:this.Phone}),f.a.createElement("div",{className:"species-date"},f.a.createElement(U,{className:"".concat(!this.state.dateboxcheck1&&"date-start"),inputBox:"RepeatGrid1",datebox:this.state.datebox1,dateboxdate:O(this.state.datebox1date),setDatebox1:function(){return e.setDatebox1(!0,!1)},setDateboxdate:this.setDatebox1date,dateboxcheck:this.state.dateboxcheck1,afterdate:I(),dateboxlist:this.state.dateboxlist,booking:this.state.booking}),f.a.createElement(U,{className:"".concat(!this.state.dateboxcheck2&&"date-end"),inputBox:"Union1",datebox:this.state.datebox2,dateboxdate:O(this.state.datebox2date),setDatebox1:function(){return e.setDatebox1(!1,!0)},setDateboxdate:this.setDatebox2date,dateboxcheck:this.state.dateboxcheck2,afterdate:this.state.dateboxcheck1?this.state.dateboxcheck1:I(),dateboxlist:this.state.dateboxlist,booking:this.state.booking}))),f.a.createElement("div",{className:"species-btn"},f.a.createElement(C,{onClick:function(){return e.checkinBox()}},"\u9810\u7d04")))),n&&f.a.createElement(S,{oncedata:n})))))}}]),a}(f.a.Component))}}]);
//# sourceMappingURL=3.0747a5ab.chunk.js.map