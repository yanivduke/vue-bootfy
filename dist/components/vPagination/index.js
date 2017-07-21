/*!
* Vue-Bootfy v0.0.1
* Made with Nick Lim
* Released under the MIT License.
*/   
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueBootfy=t():e.VueBootfy=t()})(this,(function(){return (function(e){function t(r){if(n[r])return n[r].exports;var s=n[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=123)})({0:function(e,t){e.exports=function(e,t,n,r,s){var a,i=e=e||{},o=typeof e.default;"object"!==o&&"function"!==o||(a=e,i=e.default);var l="function"==typeof i?i.options:i;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns),r&&(l._scopeId=r);var u;if(s?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=u):n&&(u=n),u){var c=l.functional,f=c?l.render:l.beforeCreate;c?l.render=function(e,t){return u.call(t),f(e,t)}:l.beforeCreate=f?[].concat(f,u):[u]}return{esModule:a,exports:i,options:l}}},123:function(e,t,n){e.exports=n(14)},14:function(e,t,n){"use strict";function r(e){e.component("v-pagination",a.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var s=n(66),a=(function(e){return e&&e.__esModule?e:{default:e}})(s);e.exports=t.default},33:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{title:{type:String,default:null},size:{type:String,default:null}},computed:{sizeClass:function(){switch(this.size){case"large":return"pagination-lg";case"small":return"pagination-sm"}}}},e.exports=t.default},66:function(e,t,n){var r=n(0)(n(33),n(69),null,null,null);e.exports=r.exports},69:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{attrs:{"aria-label":e.title}},[n("ul",{class:["pagination",e.sizeClass]},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4)])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"}},[n("span",{attrs:{"aria-hidden":"true"}},[e._v("«")]),e._v(" "),n("span",{staticClass:"sr-only"},[e._v("Previous")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link",attrs:{href:"#"}},[e._v("1")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link",attrs:{href:"#"}},[e._v("2")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link",attrs:{href:"#"}},[e._v("3")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"}},[n("span",{attrs:{"aria-hidden":"true"}},[e._v("»")]),e._v(" "),n("span",{staticClass:"sr-only"},[e._v("Next")])])])}]}}})}));