import{A as f,a as O}from"./chunk.AlohaExample.bHGij63B.js";import{ao as b,_ as p,g as h,A}from"./bundle.index.C_5YVLtW.js";import{m as s,bl as k,K as _,aK as g,J as l,w as H,N as M,aM as U,a as i,P as r}from"./chunk.vendor.D6eG-XyB.js";import"./chunk.vendor-lodash.4mRNCQpN.js";import"./chunk.vendor-tinymce.Dn8nHerG.js";function B(){return{codeHtml:`<div
  v-a-on-hooks="{ created: onCreated, beforeMount: onBeforeMount, mounted: onMounted, beforeUnmount: onBeforeUnmount, unmounted: onUnmounted }"
>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>`}}function T(){return{codeJs:`import AOnHooks from "aloha-vue/src/directives/AOnHooks";
    
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
};`}}const v={name:"PageOnHooksExample",components:{AlohaExample:f},directives:{AOnHooks:b},setup(){const{codeHtml:o}=B(),{codeJs:t}=T();return{codeHtml:o,codeJs:t,onBeforeMount:(e,n)=>{console.log("beforeMount",e,n)},onBeforeUnmount:(e,n)=>{console.log("beforeUnmount",e,n)},onCreated:(e,n)=>{console.log("created",e,n)},onMounted:(e,n)=>{console.log("mounted",e,n)},onUnmounted:(e,n)=>{console.log("unmounted",e,n)}}}};function E(o,t,c,d,u,m){const a=s("aloha-example"),e=k("a-on-hooks");return l(),_(a,{"code-html":o.codeHtml,"code-js":o.codeJs,header:"_A_BASIC_USAGE_"},{default:g(()=>[H((l(),M("div",null,t[0]||(t[0]=[U("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")]))),[[e,{created:o.onCreated,beforeMount:o.onBeforeMount,mounted:o.onMounted,beforeUnmount:o.onBeforeUnmount,unmounted:o.onUnmounted}]])]),_:1},8,["code-html","code-js"])}const I=p(v,[["render",E]]);function C(){const o=i(()=>h({placeholder:"_A_ON_HOOKS_DIRECTIVE_NAME_"}));return{pageTitle:i(()=>`AOnHooks${o.value?` (${o.value})`:""}`)}}const P={name:"PageOnHooks",components:{AlohaPage:O,ATranslation:A,PageOnHooksExample:I},setup(){const{pageTitle:o}=C();return{pageTitle:o}}};function $(o,t,c,d,u,m){const a=s("a-translation"),e=s("page-on-hooks-example"),n=s("aloha-page");return l(),_(n,{"page-title":o.pageTitle},{body:g(()=>[r(a,{tag:"p",html:"_A_ON_HOOKS_DIRECTIVE_DESCRIPTION_"}),r(a,{class:"a_mt_3",html:"_A_ON_HOOKS_DIRECTIVE_DESCRIPTION_LIST_"}),r(e)]),_:1},8,["page-title"])}const K=p(P,[["render",$]]);export{K as default};
