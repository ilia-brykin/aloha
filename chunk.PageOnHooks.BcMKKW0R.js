import{A as f,a as h}from"./chunk.AlohaExample.DP07rcYT.js";import{am as O,_ as p,g as A,A as b}from"./bundle.index.Bfjir3JZ.js";import{m as s,a0 as k,C as _,L as g,B as c,w as H,E as B,N as M,a as i,G as r}from"./chunk.vendor.D-Y3mz6a.js";import"./chunk.vendor-lodash.ClBXVCWL.js";import"./chunk.vendor-tinymce.2RT9eEW9.js";function U(){return{codeHtml:`<div
  v-a-on-hooks="{ created: onCreated, beforeMount: onBeforeMount, mounted: onMounted, beforeUnmount: onBeforeUnmount, unmounted: onUnmounted }"
>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>`}}function E(){return{codeJs:`import AOnHooks from "aloha-vue/src/directives/AOnHooks";
    
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
};`}}const T={name:"PageOnHooksExample",components:{AlohaExample:f},directives:{AOnHooks:O},setup(){const{codeHtml:o}=U(),{codeJs:a}=E();return{codeHtml:o,codeJs:a,onBeforeMount:(e,n)=>{console.log("beforeMount",e,n)},onBeforeUnmount:(e,n)=>{console.log("beforeUnmount",e,n)},onCreated:(e,n)=>{console.log("created",e,n)},onMounted:(e,n)=>{console.log("mounted",e,n)},onUnmounted:(e,n)=>{console.log("unmounted",e,n)}}}};function v(o,a,l,d,m,u){const t=s("aloha-example"),e=k("a-on-hooks");return c(),_(t,{"code-html":o.codeHtml,"code-js":o.codeJs,header:"_A_BASIC_USAGE_"},{default:g(()=>[H((c(),B("div",null,[M("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")])),[[e,{created:o.onCreated,beforeMount:o.onBeforeMount,mounted:o.onMounted,beforeUnmount:o.onBeforeUnmount,unmounted:o.onUnmounted}]])]),_:1},8,["code-html","code-js"])}const C=p(T,[["render",v]]);function I(){const o=i(()=>A({placeholder:"_A_ON_HOOKS_DIRECTIVE_NAME_"}));return{pageTitle:i(()=>`AOnHooks${o.value?` (${o.value})`:""}`)}}const P={name:"PageOnHooks",components:{AlohaPage:h,ATranslation:b,PageOnHooksExample:C},setup(){const{pageTitle:o}=I();return{pageTitle:o}}};function $(o,a,l,d,m,u){const t=s("a-translation"),e=s("page-on-hooks-example"),n=s("aloha-page");return c(),_(n,{"page-title":o.pageTitle},{body:g(()=>[r(t,{tag:"p",html:"_A_ON_HOOKS_DIRECTIVE_DESCRIPTION_"}),r(t,{class:"a_mt_3",html:"_A_ON_HOOKS_DIRECTIVE_DESCRIPTION_LIST_"}),r(e)]),_:1},8,["page-title"])}const R=p(P,[["render",$]]);export{R as default};
