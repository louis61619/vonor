(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73643636"],{"122c":function(e,t,n){"use strict";n("c589")},"1ae4":function(e,t,n){e.exports=n.p+"img/logo.1829caec.svg"},"3fde":function(e,t,n){"use strict";n("42a8")},"42a8":function(e,t,n){},"5ef5":function(e,t,n){},"85d4":function(e,t,n){"use strict";n.r(t);var c=n("7574"),o={class:"main"},l={class:"page-info"};function a(e,t,n,a,r,u){var i=Object(c["resolveComponent"])("NavMenu"),s=Object(c["resolveComponent"])("el-aside"),d=Object(c["resolveComponent"])("NavHeader"),b=Object(c["resolveComponent"])("el-header"),O=Object(c["resolveComponent"])("router-view"),j=Object(c["resolveComponent"])("el-main"),p=Object(c["resolveComponent"])("el-container");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",o,[Object(c["createVNode"])(p,{class:"main-content"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(s,{width:e.isCollapse?"60px":"210px"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(i,{collapse:e.isCollapse,userMenus:e.userMenus,defaultValue:e.defaultValue},null,8,["collapse","userMenus","defaultValue"])]})),_:1},8,["width"]),Object(c["createVNode"])(p,{class:"page"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(b,{class:"page-header"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(d,{breadcrumbs:e.breadcrumb,collapse:e.isCollapse,onFoldChange:e.handleFoldChange},null,8,["breadcrumbs","collapse","onFoldChange"])]})),_:1}),Object(c["createVNode"])(j,{class:"page-content",ref:"mainRef"},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",l,[Object(c["createVNode"])(O)])]})),_:1},512)]})),_:1})]})),_:1})])}var r=n("fe7e"),u=n("0613"),i=n("0973"),s=function(e){return{all:e=e||new Map,on:function(t,n){var c=e.get(t);c?c.push(n):e.set(t,[n])},off:function(t,n){var c=e.get(t);c&&(n?c.splice(c.indexOf(n)>>>0,1):e.set(t,[]))},emit:function(t,n){var c=e.get(t);c&&c.slice().map((function(e){e(n)})),(c=e.get("*"))&&c.slice().map((function(e){e(t,n)}))}}},d=s(),b=d,O=(n("d74e"),n("1ae4")),j=n.n(O),p=function(e){return Object(c["pushScopeId"])("data-v-b4e3b958"),e=e(),Object(c["popScopeId"])(),e},m={class:"nav-menu"},f={class:"logo"},v=p((function(){return Object(c["createElementVNode"])("img",{class:"img",src:j.a,alt:""},null,-1)})),C={key:0,class:"title"};function k(e,t,n,o,l,a){var r=Object(c["resolveComponent"])("el-menu-item"),u=Object(c["resolveComponent"])("el-submenu"),i=Object(c["resolveComponent"])("el-menu");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",m,[Object(c["createElementVNode"])("div",f,[v,e.collapse?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",C,"Vue3+TS"))]),Object(c["createVNode"])(i,{class:"el-menu-vertical-demo","background-color":"#0c2135","text-color":"#b7bdc3","active-text-color":"#0a60bd",collapse:e.collapse,"default-active":e.defaultValue},{default:Object(c["withCtx"])((function(){return[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.userMenus,(function(t){return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],{key:t.id},[1===t.type?(Object(c["openBlock"])(),Object(c["createBlock"])(u,{key:0,index:t.id+""},{title:Object(c["withCtx"])((function(){return[t.icon?(Object(c["openBlock"])(),Object(c["createElementBlock"])("i",{key:0,class:Object(c["normalizeClass"])(t.icon)},null,2)):Object(c["createCommentVNode"])("",!0),Object(c["createElementVNode"])("span",null,Object(c["toDisplayString"])(t.name),1)]})),default:Object(c["withCtx"])((function(){return[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(t.children,(function(t){return Object(c["openBlock"])(),Object(c["createBlock"])(r,{key:t.id,index:t.id+"",onClick:function(n){return e.handleMenuItemClick(t)}},{default:Object(c["withCtx"])((function(){return[t.icon?(Object(c["openBlock"])(),Object(c["createElementBlock"])("i",{key:0,class:Object(c["normalizeClass"])(t.icon)},null,2)):Object(c["createCommentVNode"])("",!0),Object(c["createElementVNode"])("span",null,Object(c["toDisplayString"])(t.name),1)]})),_:2},1032,["index","onClick"])})),128))]})),_:2},1032,["index"])):Object(c["createCommentVNode"])("",!0),2===t.type?(Object(c["openBlock"])(),Object(c["createBlock"])(r,{key:1,index:t.id+"",onClick:function(n){return e.handleMenuItemClick(t)}},{default:Object(c["withCtx"])((function(){return[t.icon?(Object(c["openBlock"])(),Object(c["createElementBlock"])("i",{key:0,class:Object(c["normalizeClass"])(t.icon)},null,2)):Object(c["createCommentVNode"])("",!0),Object(c["createElementVNode"])("span",null,Object(c["toDisplayString"])(t.name),1)]})),_:2},1032,["index","onClick"])):Object(c["createCommentVNode"])("",!0)],64)})),128))]})),_:1},8,["collapse","default-active"])])}var h=Object(c["defineComponent"])({props:{collapse:Boolean,defaultValue:String,userMenus:Array},setup:function(){var e=Object(r["d"])(),t=function(t){t&&e.push(t.url)};return{handleMenuItemClick:t}}}),V=(n("a62e"),n("d8d3")),g=n.n(V);const N=g()(h,[["render",k],["__scopeId","data-v-b4e3b958"]]);var B=N,w=B,x={class:"nav-header"},E={class:"content"};function _(e,t,n,o,l,a){var r=Object(c["resolveComponent"])("BaseBreadcrumb"),u=Object(c["resolveComponent"])("UserInfo");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",x,[Object(c["createElementVNode"])("i",{class:Object(c["normalizeClass"])(["fold-menu",e.collapse?"el-icon-s-fold":"el-icon-s-unfold"]),onClick:t[0]||(t[0]=function(){return e.handleFoldClick&&e.handleFoldClick.apply(e,arguments)})},null,2),Object(c["createElementVNode"])("div",E,[Object(c["createVNode"])(r,{breadcrumbs:e.breadcrumbs},null,8,["breadcrumbs"]),Object(c["createElementVNode"])("div",null,[Object(c["createVNode"])(u)])])])}var y=n("2ba5"),I={class:"user-info"},M={class:"el-dropdown-link"},F=Object(c["createTextVNode"])(" 退出登錄 ");function S(e,t,n,o,l,a){var r=Object(c["resolveComponent"])("el-avatar"),u=Object(c["resolveComponent"])("el-dropdown-item"),i=Object(c["resolveComponent"])("el-dropdown-menu"),s=Object(c["resolveComponent"])("el-dropdown");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",I,[Object(c["createVNode"])(s,null,{dropdown:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(i,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(u,{icon:"el-icon-circle-close",onClick:e.logout},{default:Object(c["withCtx"])((function(){return[F]})),_:1},8,["onClick"])]})),_:1})]})),default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("span",M,[Object(c["createVNode"])(r,{size:"small",src:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"}),Object(c["createElementVNode"])("span",null,Object(c["toDisplayString"])(e.name),1)])]})),_:1})])}var z=n("d80c"),D=Object(c["defineComponent"])({setup:function(){var e=Object(u["c"])(),t=Object(r["d"])(),n=Object(c["computed"])((function(){return e.state.login.userInfo.name})),o=function(){z["a"].deleteCache("token"),t.push("/")};return{name:n,logout:o}}});n("122c");const T=g()(D,[["render",S],["__scopeId","data-v-70f53a03"]]);var A=T,H=Object(c["defineComponent"])({components:{UserInfo:A,BaseBreadcrumb:y["a"]},props:{collapse:Boolean,breadcrumbs:Array},emits:["foldChange"],setup:function(e,t){var n=t.emit,c=function(){n("foldChange",!e.collapse)};return{handleFoldClick:c}}});n("dba0");const J=g()(H,[["render",_],["__scopeId","data-v-7a826aca"]]);var L=J,R=L,U=Object(c["defineComponent"])({components:{NavMenu:w,NavHeader:R},setup:function(){var e=Object(c["ref"])(!1),t=Object(r["c"])(),n=Object(u["c"])(),o=Object(c["ref"])(),l=Object(c["ref"])([]),a=Object(c["ref"])(),s=Object(c["computed"])((function(){return n.state.login.userMenus}));Object(c["watchEffect"])((function(){var e=t.path;if("/login"!==e&&e&&s.value){a.value&&(a.value.$el.scrollTop=0);var n=Object(i["e"])(s.value,e),c=n.menu,r=n.breadcrumbs;c&&r&&(o.value=c.id+"",l.value=r)}}));var d=function(t){var n;e.value=t;var c=0;n=setInterval((function(){c++,b.emit("handleFoldChange"),c>7&&clearInterval(n)}),100)};return{isCollapse:e,handleFoldChange:d,defaultValue:o,userMenus:s,breadcrumb:l,mainRef:a}}});n("3fde");const $=g()(U,[["render",a],["__scopeId","data-v-b64617c0"]]);t["default"]=$},a62e:function(e,t,n){"use strict";n("5ef5")},c589:function(e,t,n){},dba0:function(e,t,n){"use strict";n("e6c4")},e6c4:function(e,t,n){}}]);
//# sourceMappingURL=chunk-73643636.00ec2801.js.map