import{t as e}from"./chunk.AlohaPage.BvUvrvQ4.js";import{t}from"./chunk.AlohaExample.Bx3NX4bX.js";import{hn as n,mn as r,on as i,t as a}from"./bundle.index.LlT2KVEy.js";import{Bt as o,Ht as s,Kt as c,Wt as l,an as u,ln as d,mn as f,pn as p,qt as m,un as h}from"./chunk.vendor.SEynj6EJ.js";function g(){return{codeHtml:`<div
  v-a-on-hooks="{ created: onCreated, beforeMount: onBeforeMount, mounted: onMounted, beforeUnmount: onBeforeUnmount, unmounted: onUnmounted }"
>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>`}}function _(){return{codeJs:`import {
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
};`}}var v={name:`PageOnHooksExample`,components:{AlohaExample:t},directives:{AOnHooks:i},setup(){let{codeHtml:e}=g(),{codeJs:t}=_();return{codeHtml:e,codeJs:t,onBeforeMount:(e,t)=>{console.log(`beforeMount`,e,t)},onBeforeUnmount:(e,t)=>{console.log(`beforeUnmount`,e,t)},onCreated:(e,t)=>{console.log(`created`,e,t)},onMounted:(e,t)=>{console.log(`mounted`,e,t)},onUnmounted:(e,t)=>{console.log(`unmounted`,e,t)}}}};function y(e,t,n,r,i,a){let o=d(`aloha-example`),m=h(`a-on-hooks`);return u(),s(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`},{default:p(()=>[f((u(),l(`div`,null,[...t[0]||=[c(`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,-1)]])),[[m,{created:e.onCreated,beforeMount:e.onBeforeMount,mounted:e.onMounted,beforeUnmount:e.onBeforeUnmount,unmounted:e.onUnmounted}]])]),_:1},8,[`code-html`,`code-js`])}var b=a(v,[[`render`,y]]);function x(){let e=o(()=>n({placeholder:`_A_ON_HOOKS_DIRECTIVE_NAME_`}));return{pageTitle:o(()=>`AOnHooks${e.value?` (${e.value})`:``}`)}}var S={name:`PageOnHooks`,components:{AlohaPage:e,ATranslation:r,PageOnHooksExample:b},setup(){let{pageTitle:e}=x();return{pageTitle:e}}};function C(e,t,n,r,i,a){let o=d(`a-translation`),c=d(`page-on-hooks-example`),l=d(`aloha-page`);return u(),s(l,{"page-title":e.pageTitle},{body:p(()=>[m(o,{tag:`p`,html:`_A_ON_HOOKS_DIRECTIVE_DESCRIPTION_`}),m(o,{class:`a_mt_3`,html:`_A_ON_HOOKS_DIRECTIVE_DESCRIPTION_LIST_`}),m(c)]),_:1},8,[`page-title`])}var w=a(S,[[`render`,C]]);export{w as default};