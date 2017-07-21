/*!
* Vue-Bootfy v0.0.1
* Made with Nick Lim
* Released under the MIT License.
*/   
!(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueBootfy=e():t.VueBootfy=e()})(this,(function(){return (function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=115)})({0:function(t,e){t.exports=function(t,e,n,r,o){var s,i=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(s=t,i=t.default);var u="function"==typeof i?i.options:i;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),r&&(u._scopeId=r);var l;if(o?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=l):n&&(l=n),l){var d=u.functional,c=d?u.render:u.beforeCreate;d?u.render=function(t,e){return l.call(e),c(t,e)}:u.beforeCreate=c?[].concat(c,l):[l]}return{esModule:s,exports:i,options:u}}},115:function(t,e,n){t.exports=n(9)},25:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{vStyle:{type:String,default:null},size:{type:String,default:null},id:{type:String,default:null},title:{type:String,default:"Select Item"},items:{type:Array,default:null},split:{type:Boolean,default:!1},up:{type:Boolean,default:!1},rightAlign:{type:Boolean,default:!1}},data:function(){return{expanded:!1}},computed:{show:function(){if(this.expanded)return"show"},className:function(){switch(this.vStyle){case"primary":return"btn-primary";case"secondary":return"btn-secondary";case"success":return"btn-success";case"info":return"btn-info";case"warning":return"btn-warning";case"danger":return"btn-danger"}},sizeClassName:function(){return"sm"===this.size?"btn-sm":"md"===this.size?"btn-md":"lg"===this.size?"btn-lg":void 0},upClassName:function(){if(this.up)return"dropup"},rightAlignClassName:function(){if(this.rightAlign)return"dropdown-menu-right"}},methods:{onClick:function(){this.expanded=!this.expanded}}},t.exports=e.default},53:function(t,e,n){var r=n(0)(n(25),n(82),null,null,null);t.exports=r.exports},54:function(t,e,n){var r=n(0)(null,n(76),null,null,null);t.exports=r.exports},55:function(t,e,n){var r=n(0)(null,n(83),null,null,null);t.exports=r.exports},76:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"dropdown-divider"})},staticRenderFns:[]}},82:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["btn-group",t.show,t.upClassName]},[t.split?n("button",{class:["btn",t.className,t.sizeClassName],attrs:{type:"button",id:t.id,"data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":t.expanded}},[t._v("\n    "+t._s(t.title)+"\n  ")]):t._e(),t._v(" "),t.split?n("button",{class:["btn",t.className,t.sizeClassName,"dropdown-toggle","dropdown-toggle-split"],attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},on:{click:t.onClick}},[n("span",{staticClass:"sr-only"},[t._v("Toggle Dropdown")])]):n("button",{class:["btn",t.className,t.sizeClassName,"dropdown-toggle"],attrs:{type:"button",id:t.id,"data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":t.expanded},on:{click:t.onClick}},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("div",{class:["dropdown-menu",t.rightAlignClassName]},[t._t("default")],2)])},staticRenderFns:[]}},83:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"dropdown-item",attrs:{type:"button"},on:{click:function(e){t.$emit("click")}}},[t._t("default")],2)},staticRenderFns:[]}},9:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){t.component("v-dropdown",i.default),t.component("v-dropdown-divider",u.default),t.component("v-dropdown-item",d.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var s=n(53),i=r(s),a=n(54),u=r(a),l=n(55),d=r(l);t.exports=e.default}})}));