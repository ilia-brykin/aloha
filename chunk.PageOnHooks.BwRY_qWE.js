import{Ct as e,Dt as t,Jt as n,Ot as r,Tt as i,Ut as a,Wt as o,kt as s,qt as c,zt as l}from"./chunk.vendor.CZPox1kV.js";import{Ot as u,Z as d,kt as f,t as p}from"./bundle.index.CLtYDDlb.js";import{n as m,t as h}from"./chunk.AlohaExample.BFgfeYtr.js";function g(){return{codeHtml:`<div
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
};`}}var v={name:`PageOnHooksExample`,components:{AlohaExample:h},directives:{AOnHooks:u},setup(){let{codeHtml:e}=g(),{codeJs:t}=_();return{codeHtml:e,codeJs:t,onBeforeMount:(e,t)=>{console.log(`beforeMount`,e,t)},onBeforeUnmount:(e,t)=>{console.log(`beforeUnmount`,e,t)},onCreated:(e,t)=>{console.log(`created`,e,t)},onMounted:(e,t)=>{console.log(`mounted`,e,t)},onUnmounted:(e,t)=>{console.log(`unmounted`,e,t)}}}};function y(e,s,u,d,f,p){let m=a(`aloha-example`),h=o(`a-on-hooks`);return l(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`},{default:c(()=>[n((l(),t(`div`,null,[...s[0]||=[r(`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,-1)]])),[[h,{created:e.onCreated,beforeMount:e.onBeforeMount,mounted:e.onMounted,beforeUnmount:e.onBeforeUnmount,unmounted:e.onUnmounted}]])]),_:1},8,[`code-html`,`code-js`])}var b=p(v,[[`render`,y]]);function x(){let t=e(()=>f({placeholder:`_A_ON_HOOKS_DIRECTIVE_NAME_`}));return{pageTitle:e(()=>`AOnHooks${t.value?` (${t.value})`:``}`)}}var S={name:`PageOnHooks`,components:{AlohaPage:m,ATranslation:d,PageOnHooksExample:b},setup(){let{pageTitle:e}=x();return{pageTitle:e}}};function C(e,t,n,r,o,u){let d=a(`a-translation`),f=a(`page-on-hooks-example`),p=a(`aloha-page`);return l(),i(p,{"page-title":e.pageTitle},{body:c(()=>[s(d,{tag:`p`,html:`_A_ON_HOOKS_DIRECTIVE_DESCRIPTION_`}),s(d,{class:`a_mt_3`,html:`_A_ON_HOOKS_DIRECTIVE_DESCRIPTION_LIST_`}),s(f)]),_:1},8,[`page-title`])}var w=p(S,[[`render`,C]]);export{w as default};