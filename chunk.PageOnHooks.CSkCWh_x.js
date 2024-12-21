import{A as f,a as O}from"./chunk.AlohaExample.BFCDVDbq.js";import{a4 as b,_ as p,g as h,A as k}from"./bundle.index.Dezbw901.js";import{k as s,bk as A,J as _,aO as g,H as l,w as H,M,aQ as U,a as u,O as r}from"./chunk.vendor.CwuJ9Ljq.js";import"./chunk.vendor-lodash.BBRAkY5X.js";import"./chunk.translations-ar.CGH9gktb.js";import"./chunk.translations-de.S4PF1KYg.js";import"./chunk.translations-en.Ck05aPwN.js";import"./chunk.translations-es.CN4IYWAw.js";import"./chunk.translations-fr.CCwWtZH3.js";import"./chunk.translations-hr.C7fo1LlO.js";import"./chunk.translations-it.BFH_rAJL.js";import"./chunk.translations-ru.C3zXigta.js";function B(){return{codeHtml:`<div
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
};`}}const E={name:"PageOnHooksExample",components:{AlohaExample:f},directives:{AOnHooks:b},setup(){const{codeHtml:o}=B(),{codeJs:t}=T();return{codeHtml:o,codeJs:t,onBeforeMount:(e,n)=>{console.log("beforeMount",e,n)},onBeforeUnmount:(e,n)=>{console.log("beforeUnmount",e,n)},onCreated:(e,n)=>{console.log("created",e,n)},onMounted:(e,n)=>{console.log("mounted",e,n)},onUnmounted:(e,n)=>{console.log("unmounted",e,n)}}}};function I(o,t,c,m,d,i){const a=s("aloha-example"),e=A("a-on-hooks");return l(),_(a,{"code-html":o.codeHtml,"code-js":o.codeJs,header:"_A_BASIC_USAGE_"},{default:g(()=>[H((l(),M("div",null,t[0]||(t[0]=[U("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")]))),[[e,{created:o.onCreated,beforeMount:o.onBeforeMount,mounted:o.onMounted,beforeUnmount:o.onBeforeUnmount,unmounted:o.onUnmounted}]])]),_:1},8,["code-html","code-js"])}const v=p(E,[["render",I]]);function C(){const o=u(()=>h({placeholder:"_A_ON_HOOKS_DIRECTIVE_NAME_"}));return{pageTitle:u(()=>`AOnHooks${o.value?` (${o.value})`:""}`)}}const P={name:"PageOnHooks",components:{AlohaPage:O,ATranslation:k,PageOnHooksExample:v},setup(){const{pageTitle:o}=C();return{pageTitle:o}}};function $(o,t,c,m,d,i){const a=s("a-translation"),e=s("page-on-hooks-example"),n=s("aloha-page");return l(),_(n,{"page-title":o.pageTitle},{body:g(()=>[r(a,{tag:"p",html:"_A_ON_HOOKS_DIRECTIVE_DESCRIPTION_"}),r(a,{class:"a_mt_3",html:"_A_ON_HOOKS_DIRECTIVE_DESCRIPTION_LIST_"}),r(e)]),_:1},8,["page-title"])}const G=p(P,[["render",$]]);export{G as default};
