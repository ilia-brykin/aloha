import{A as f,a as b}from"./chunk.AlohaExample.DwwyPnI9.js";import{a6 as h,_ as p,g as O,A}from"./bundle.index.CBN060hU.js";import{U as _,aS as g,e as s,bn as U,V as l,w as k,W as H,aU as M,d as u,Z as r}from"./chunk.vendor.DOoIAE1K.js";import"./chunk.vendor-lodash.BAE3VvPy.js";import"./chunk.APageTabTitle.B7cA4VS4.js";import"./chunk.AlohaHighlightjs.BbO2lEkw.js";import"./chunk.translations-ar.B3XbQD-F.js";import"./chunk.translations-de.BU3I7i25.js";import"./chunk.translations-en.Dz5VXJqd.js";import"./chunk.translations-es.BKlBZ5Wd.js";import"./chunk.translations-fr.CMF_fLGD.js";import"./chunk.translations-hr.C5ZK4YvJ.js";import"./chunk.translations-it.CAxOY8kK.js";import"./chunk.translations-ru.C-L7Lrhy.js";function B(){return{codeHtml:`<div
  v-a-on-hooks="{ created: onCreated, beforeMount: onBeforeMount, mounted: onMounted, beforeUnmount: onBeforeUnmount, unmounted: onUnmounted }"
>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>`}}function T(){return{codeJs:`import {
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
};`}}const E={name:"PageOnHooksExample",components:{AlohaExample:f},directives:{AOnHooks:h},setup(){const{codeHtml:o}=B(),{codeJs:t}=T();return{codeHtml:o,codeJs:t,onBeforeMount:(e,n)=>{console.log("beforeMount",e,n)},onBeforeUnmount:(e,n)=>{console.log("beforeUnmount",e,n)},onCreated:(e,n)=>{console.log("created",e,n)},onMounted:(e,n)=>{console.log("mounted",e,n)},onUnmounted:(e,n)=>{console.log("unmounted",e,n)}}}};function I(o,t,m,c,i,d){const a=s("aloha-example"),e=U("a-on-hooks");return l(),_(a,{"code-html":o.codeHtml,"code-js":o.codeJs,header:"_A_BASIC_USAGE_"},{default:g(()=>[k((l(),H("div",null,t[0]||(t[0]=[M("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")]))),[[e,{created:o.onCreated,beforeMount:o.onBeforeMount,mounted:o.onMounted,beforeUnmount:o.onBeforeUnmount,unmounted:o.onUnmounted}]])]),_:1},8,["code-html","code-js"])}const v=p(E,[["render",I]]);function C(){const o=u(()=>O({placeholder:"_A_ON_HOOKS_DIRECTIVE_NAME_"}));return{pageTitle:u(()=>`AOnHooks${o.value?` (${o.value})`:""}`)}}const P={name:"PageOnHooks",components:{AlohaPage:b,ATranslation:A,PageOnHooksExample:v},setup(){const{pageTitle:o}=C();return{pageTitle:o}}};function $(o,t,m,c,i,d){const a=s("a-translation"),e=s("page-on-hooks-example"),n=s("aloha-page");return l(),_(n,{"page-title":o.pageTitle},{body:g(()=>[r(a,{tag:"p",html:"_A_ON_HOOKS_DIRECTIVE_DESCRIPTION_"}),r(a,{class:"a_mt_3",html:"_A_ON_HOOKS_DIRECTIVE_DESCRIPTION_LIST_"}),r(e)]),_:1},8,["page-title"])}const Z=p(P,[["render",$]]);export{Z as default};
