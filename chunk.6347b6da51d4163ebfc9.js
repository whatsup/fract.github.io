(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{129:function(e,t,n){var r=n(9),a=n(7).f,o=Function.prototype,u=o.toString,i=/^\s*function ([^ (]*)/;r&&!("name"in o)&&a(o,"name",{configurable:!0,get:function(){try{return u.call(this).match(i)[1]}catch(e){return""}}})},130:function(e,t,n){var r=n(13),a=n(136);r({target:"Array",stat:!0,forced:!n(96)((function(e){Array.from(e)}))},{from:a})},131:function(e,t,n){"use strict";var r=n(14),a=n(8),o=n(6),u=n(137),i=RegExp.prototype,c=i.toString,f=o((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),l="toString"!=c.name;(f||l)&&r(RegExp.prototype,"toString",(function(){var e=a(this),t=String(e.source),n=e.flags;return"/"+t+"/"+String(void 0===n&&e instanceof RegExp&&!("flags"in i)?u.call(e):n)}),{unsafe:!0})},136:function(e,t,n){"use strict";var r=n(31),a=n(30),o=n(95),u=n(93),i=n(22),c=n(90),f=n(94);e.exports=function(e){var t,n,l,s,d,p,m=a(e),b="function"==typeof this?this:Array,y=arguments.length,g=y>1?arguments[1]:void 0,v=void 0!==g,h=f(m),w=0;if(v&&(g=r(g,y>2?arguments[2]:void 0,2)),null==h||b==Array&&u(h))for(n=new b(t=i(m.length));t>w;w++)p=v?g(m[w],w):m[w],c(n,w,p);else for(d=(s=h.call(m)).next,n=new b;!(l=d.call(s)).done;w++)p=v?o(s,g,[l.value,w],!0):l.value,c(n,w,p);return n.length=w,n}},137:function(e,t,n){"use strict";var r=n(8);e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(11),a=Object(r.b)()},149:function(e,t,n){"use strict";n.r(t),t.default=n.p+"70bd1a8e0cb02a7dcf5efd1a62107da9.jpg"},150:function(e,t,n){"use strict";n.r(t),t.default=n.p+"9aa08134223a67f62ad7dda9e2f16283.jpg"},151:function(e,t,n){"use strict";n.r(t),t.default=n.p+"c842646e8d81ec128c96a9849f896edc.jpg"},152:function(e,t,n){"use strict";n.r(t),t.default=n.p+"2f5a23b4a047f123fd07a0bd8fe011ce.jpg"},153:function(e,t,n){"use strict";n.r(t),t.default=n.p+"e26522f35c09ef6ebf5bb4dec2024287.jpg"},154:function(e,t,n){"use strict";n.r(t),t.default=n.p+"cca4f83b40b4c3d1c05f629573e0d014.jpg"},155:function(e,t,n){"use strict";n.r(t),t.default=n.p+"535dc6614d7cc6d7dc404c9bce3295f1.jpg"},156:function(e,t,n){"use strict";n.r(t),t.default=n.p+"7ddb50bb207b7dbc0e530903ee2e0d4e.jpg"},157:function(e,t,n){"use strict";n.r(t),t.default=n.p+"466891cc3547a55b7be1f64c074eb483.jpg"},158:function(e,t,n){"use strict";n.r(t),t.default=n.p+"dc09abea8da091897a6b28a439bdebc8.jpg"},159:function(e,t,n){"use strict";n.r(t),t.default=n.p+"33ac78864ee41b0bdcff80fc7c73351a.jpg"},160:function(e,t,n){"use strict";n.r(t),t.default=n.p+"3c56d9334163ded6efbdd7ccce49e6f3.jpg"},179:function(e,t,n){"use strict";n.r(t),n.d(t,"Loadable",(function(){return O}));n(79),n(80),n(87),n(81),n(130),n(48),n(47),n(129),n(49),n(82),n(83),n(131),n(84),n(85),n(86);var r=n(0),a=n.n(r),o=n(3),u=n(11);function i(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t,n,r,a,o,u){try{var i=e[o](u),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,a)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function u(e){f(o,r,a,u,i,"next",e)}function i(e){f(o,r,a,u,i,"throw",e)}u(void 0)}))}}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r,a,o,u,c,f,d;return t=e,(n=[{key:"loadMenuIds",value:(d=l(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:return e.abrupt("return",i(Array(b.menu.length).keys()));case 3:case"end":return e.stop()}}),e)}))),function(){return d.apply(this,arguments)})},{key:"loadGroupIds",value:(f=l(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:return e.abrupt("return",i(Array(b.groups.length).keys()));case 3:case"end":return e.stop()}}),e)}))),function(){return f.apply(this,arguments)})},{key:"loadFriendIds",value:(c=l(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:return e.abrupt("return",i(Array(b.friends.length).keys()));case 3:case"end":return e.stop()}}),e)}))),function(){return c.apply(this,arguments)})},{key:"loadMenuItem",value:(u=l(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:return e.abrupt("return",b.menu[t]);case 3:case"end":return e.stop()}}),e)}))),function(e){return u.apply(this,arguments)})},{key:"loadGroup",value:(o=l(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:return n=b.groups[t],e.next=5,p(n.image);case 5:return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)}))),function(e){return o.apply(this,arguments)})},{key:"loadFriend",value:(a=l(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:return n=b.friends[t],e.next=5,p(n.avatar);case 5:return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)}))),function(e){return a.apply(this,arguments)})}])&&s(t.prototype,n),r&&s(t,r),e}();function p(e){return new Promise((function(t){var n=new Image;n.onload=t,n.src=e}))}function m(){return new Promise((function(e){return setTimeout(e,700+1e3*Math.random())}))}var b={menu:[{name:"Contacts"},{name:"Cards"},{name:"Trends"},{name:"Tags"},{name:"Settings"},{name:"Files"}],groups:[{name:"Mandelbrot",image:n(149).default},{name:"Flower",image:n(150).default},{name:"Spiral",image:n(151).default},{name:"Tonnel",image:n(152).default},{name:"Turbulence",image:n(153).default},{name:"Other",image:n(154).default}],friends:[{name:"Mary Miller",job:"Designer",avatar:n(155).default},{name:"Ellen Paul",job:"Web Designer",avatar:n(156).default},{name:"Daniel Walters",job:"Fractal Developer",avatar:n(157).default},{name:"William Hamilton",job:"Contributor",avatar:n(158).default},{name:"Rebecca Cain",job:"Product Manager",avatar:n(159).default},{name:"Frank Bates",job:"Product Manager",avatar:n(160).default}]},y=n(143);function g(){var e=w(["\n    font-size: 23px;\n    font-weight: 500;\n    color: #363636;\n    grid-column: 3/4;\n    grid-row: 2/3;\n"]);return g=function(){return e},e}function v(){var e=w(["\n    color: #039be5;\n    font-weight: 300;\n    font-size: 34px;\n    grid-column: 2/3;\n    grid-row: 1/2;\n    display: flex;\n    align-items: center;\n    padding-left: 40px;\n"]);return v=function(){return e},e}function h(){var e=w(["\n    width: 100%;\n    min-height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr minmax(min-content, 230px) minmax(min-content, 660px) minmax(min-content, 230px) 1fr;\n    grid-template-rows: 90px 50px 1fr;\n    grid-column-gap: 30px;\n"]);return h=function(){return e},e}function w(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function k(e){var t,n;function r(t,n){try{var o=e[t](n),u=o.value,i=u instanceof A;Promise.resolve(i?u.wrapped:u).then((function(e){i?r("return"===t?"return":"next",e):a(o.done?"return":"normal",e)}),(function(e){r("throw",e)}))}catch(e){a("throw",e)}}function a(e,a){switch(e){case"return":t.resolve({value:a,done:!0});break;case"throw":t.reject(a);break;default:t.resolve({value:a,done:!1})}(t=t.next)?r(t.key,t.arg):n=null}this._invoke=function(e,a){return new Promise((function(o,u){var i={key:e,arg:a,resolve:o,reject:u,next:null};n?n=n.next=i:(t=n=i,r(e,a))}))},"function"!=typeof e.return&&(this.return=void 0)}function S(e){return new A(e)}function A(e){this.wrapped=e}function R(e){var t;if("undefined"!=typeof Symbol){if(Symbol.asyncIterator&&null!=(t=e[Symbol.asyncIterator]))return t.call(e);if(Symbol.iterator&&null!=(t=e[Symbol.iterator]))return t.call(e)}throw new TypeError("Object is not async iterable")}function I(e,t){var n={},r=!1;function a(n,a){return r=!0,a=new Promise((function(t){t(e[n](a))})),{done:!1,value:t(a)}}return"function"==typeof Symbol&&Symbol.iterator&&(n[Symbol.iterator]=function(){return this}),n.next=function(e){return r?(r=!1,e):a("next",e)},"function"==typeof e.throw&&(n.throw=function(e){if(r)throw r=!1,e;return a("throw",e)}),"function"==typeof e.return&&(n.return=function(e){return r?(r=!1,e):a("return",e)}),n}"function"==typeof Symbol&&Symbol.asyncIterator&&(k.prototype[Symbol.asyncIterator]=function(){return this}),k.prototype.next=function(e){return this._invoke("next",e)},k.prototype.throw=function(e){return this._invoke("throw",e)},k.prototype.return=function(e){return this._invoke("return",e)};var O=Object(u.c)(function(){var e,t=(e=regeneratorRuntime.mark((function e(){var t,r,o,u,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(Promise.all([n.e(5).then(n.bind(null,178)),n.e(4).then(n.bind(null,175)),n.e(3).then(n.bind(null,176))]));case 2:return t=e.sent,r=x(t,3),o=r[0].Menu,u=r[1].Groups,i=r[2].Friends,e.delegateYield(I(R(Object(y.a)(new d)),S),"t0",8);case 8:return e.t1=a.a,e.t2=P,e.t3=a.a.createElement(E,null,"Loadable"),e.delegateYield(I(R(o),S),"t4",13);case 13:return e.t5=e.t4,e.t6=a.a.createElement(M,null,"Fractal sets"),e.delegateYield(I(R(u),S),"t7",16);case 16:return e.t8=e.t7,e.delegateYield(I(R(i),S),"t9",18);case 18:return e.t10=e.t9,e.next=21,e.t1.createElement.call(e.t1,e.t2,null,e.t3,e.t5,e.t6,e.t8,e.t10);case 21:e.next=8;break;case 23:case"end":return e.stop()}}),e)})),function(){return new k(e.apply(this,arguments))});return function(){return t.apply(this,arguments)}}()),P=o.c.section(h()),E=o.c.div(v()),M=o.c.div(g())}}]);
//# sourceMappingURL=chunk.6347b6da51d4163ebfc9.js.map