import{A as f,a as h}from"./chunk.AlohaExample.D19CN2wh.js";import{ao as O,_ as p,g as b,A}from"./bundle.index.Cv6dkyGa.js";import{m as s,bl as k,K as _,aK as g,J as c,w as H,N as M,aM as U,a as i,P as r}from"./chunk.vendor.DQz1Isc4.js";import"./chunk.vendor-lodash.Cgq9oNCy.js";import"./chunk.vendor-tinymce.cPIiul0H.js";function B(){return{codeHtml:`<div
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
};`}}const v={name:"PageOnHooksExample",components:{AlohaExample:f},directives:{AOnHooks:O},setup(){const{codeHtml:o}=B(),{codeJs:a}=T();return{codeHtml:o,codeJs:a,onBeforeMount:(e,n)=>{console.log("beforeMount",e,n)},onBeforeUnmount:(e,n)=>{console.log("beforeUnmount",e,n)},onCreated:(e,n)=>{console.log("created",e,n)},onMounted:(e,n)=>{console.log("mounted",e,n)},onUnmounted:(e,n)=>{console.log("unmounted",e,n)}}}};function E(o,a,l,d,u,m){const t=s("aloha-example"),e=k("a-on-hooks");return c(),_(t,{"code-html":o.codeHtml,"code-js":o.codeJs,header:"_A_BASIC_USAGE_"},{default:g(()=>[H((c(),M("div",null,[U("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")])),[[e,{created:o.onCreated,beforeMount:o.onBeforeMount,mounted:o.onMounted,beforeUnmount:o.onBeforeUnmount,unmounted:o.onUnmounted}]])]),_:1},8,["code-html","code-js"])}const I=p(v,[["render",E]]);function C(){const o=i(()=>b({placeholder:"_A_ON_HOOKS_DIRECTIVE_NAME_"}));return{pageTitle:i(()=>`AOnHooks${o.value?` (${o.value})`:""}`)}}const P={name:"PageOnHooks",components:{AlohaPage:h,ATranslation:A,PageOnHooksExample:I},setup(){const{pageTitle:o}=C();return{pageTitle:o}}};function $(o,a,l,d,u,m){const t=s("a-translation"),e=s("page-on-hooks-example"),n=s("aloha-page");return c(),_(n,{"page-title":o.pageTitle},{body:g(()=>[r(t,{tag:"p",html:"_A_ON_HOOKS_DIRECTIVE_DESCRIPTION_"}),r(t,{class:"a_mt_3",html:"_A_ON_HOOKS_DIRECTIVE_DESCRIPTION_LIST_"}),r(e)]),_:1},8,["page-title"])}const K=p(P,[["render",$]]);export{K as default};
