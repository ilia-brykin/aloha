import{A as f,a as b}from"./chunk.AlohaExample.CVhdg5lH.js";import{ap as h,_ as p,g as O,A}from"./bundle.index.B0BAYlA6.js";import{V as _,aT as g,e as s,bo as k,W as l,w as H,Y as M,aV as T,d as u,_ as r}from"./chunk.vendor.D7UxhUfn.js";import"./chunk.vendor-lodash.BbaK34MN.js";import"./chunk.APageTabTitle.BUYjg9PU.js";import"./chunk.AlohaHighlightjs.dFk8X2lo.js";import"./chunk.translations-ar.BXWv90e-.js";import"./chunk.translations-de.JSU2GZ-A.js";import"./chunk.translations-en.CviwQZZj.js";import"./chunk.translations-es.D2AGpadl.js";import"./chunk.translations-fr.DQLlT60U.js";import"./chunk.translations-hr.EjwgafbT.js";import"./chunk.translations-it.fnRPaBQW.js";import"./chunk.translations-ru.DfHWC88K.js";function U(){return{codeHtml:`<div
  v-a-on-hooks="{ created: onCreated, beforeMount: onBeforeMount, mounted: onMounted, beforeUnmount: onBeforeUnmount, unmounted: onUnmounted }"
>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>`}}function B(){return{codeJs:`import {
  AOnHooks,
} from "aloha-vue";
    
export default {
  name: "PageOnHooksExample",
  directives: {
    AOnHooks,
  },
  setup() {
    const onCreated = (el, binding) => {
      console.log("created", el, binding);
    };
    
    const onBeforeMount = (el, binding) => {
      console.log("beforeMount", el, binding);
    };
    
    const onMounted = (el, binding) => {
      console.log("mounted", el, binding);
    };
    
    const onBeforeUnmount = (el, binding) => {
      console.log("beforeUnmount", el, binding);
    }; 
    
    const onUnmounted = (el, binding) => {
      console.log("unmounted", el, binding);
    };

    return {
      onBeforeMount,
      onBeforeUnmount,
      onCreated,
      onMounted,
      onUnmounted,
    };
  },
};`}}const E={name:"PageOnHooksExample",components:{AlohaExample:f},directives:{AOnHooks:h},setup(){const{codeHtml:o}=U(),{codeJs:t}=B();return{codeHtml:o,codeJs:t,onBeforeMount:(e,n)=>{console.log("beforeMount",e,n)},onBeforeUnmount:(e,n)=>{console.log("beforeUnmount",e,n)},onCreated:(e,n)=>{console.log("created",e,n)},onMounted:(e,n)=>{console.log("mounted",e,n)},onUnmounted:(e,n)=>{console.log("unmounted",e,n)}}}};function I(o,t,m,c,i,d){const a=s("aloha-example"),e=k("a-on-hooks");return l(),_(a,{"code-html":o.codeHtml,"code-js":o.codeJs,header:"_A_BASIC_USAGE_"},{default:g(()=>[H((l(),M("div",null,t[0]||(t[0]=[T("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")]))),[[e,{created:o.onCreated,beforeMount:o.onBeforeMount,mounted:o.onMounted,beforeUnmount:o.onBeforeUnmount,unmounted:o.onUnmounted}]])]),_:1},8,["code-html","code-js"])}const v=p(E,[["render",I]]);function C(){const o=u(()=>O({placeholder:"_A_ON_HOOKS_DIRECTIVE_NAME_"}));return{pageTitle:u(()=>`AOnHooks${o.value?` (${o.value})`:""}`)}}const P={name:"PageOnHooks",components:{AlohaPage:b,ATranslation:A,PageOnHooksExample:v},setup(){const{pageTitle:o}=C();return{pageTitle:o}}};function $(o,t,m,c,i,d){const a=s("a-translation"),e=s("page-on-hooks-example"),n=s("aloha-page");return l(),_(n,{"page-title":o.pageTitle},{body:g(()=>[r(a,{tag:"p",html:"_A_ON_HOOKS_DIRECTIVE_DESCRIPTION_"}),r(a,{class:"a_mt_3",html:"_A_ON_HOOKS_DIRECTIVE_DESCRIPTION_LIST_"}),r(e)]),_:1},8,["page-title"])}const Y=p(P,[["render",$]]);export{Y as default};
