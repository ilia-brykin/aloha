import{t as e}from"./chunk.AlohaPage.CtPiWSGW.js";import{t}from"./chunk.AlohaExample.Bs_TZ3nZ.js";import{$ as n,At as r,jt as i}from"./bundle.index.Dik8P8_q.js";import{At as a,Et as o,Jt as s,Mt as c,Ot as l,Qt as u,Ut as d,Zt as f,jt as p,qt as m}from"./chunk.vendor.BLRpG40B.js";import{t as h}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function g(){return{codeHtml:`<div
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
};`}}var v={name:`PageOnHooksExample`,components:{AlohaExample:t},directives:{AOnHooks:r},setup(){let{codeHtml:e}=g(),{codeJs:t}=_();return{codeHtml:e,codeJs:t,onBeforeMount:(e,t)=>{console.log(`beforeMount`,e,t)},onBeforeUnmount:(e,t)=>{console.log(`beforeUnmount`,e,t)},onCreated:(e,t)=>{console.log(`created`,e,t)},onMounted:(e,t)=>{console.log(`mounted`,e,t)},onUnmounted:(e,t)=>{console.log(`unmounted`,e,t)}}}};function y(e,t,n,r,i,o){let c=m(`aloha-example`),h=s(`a-on-hooks`);return d(),l(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`},{default:f(()=>[u((d(),a(`div`,null,[...t[0]||=[p(`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,-1)]])),[[h,{created:e.onCreated,beforeMount:e.onBeforeMount,mounted:e.onMounted,beforeUnmount:e.onBeforeUnmount,unmounted:e.onUnmounted}]])]),_:1},8,[`code-html`,`code-js`])}var b=h(v,[[`render`,y]]);function x(){let e=o(()=>i({placeholder:`_A_ON_HOOKS_DIRECTIVE_NAME_`}));return{pageTitle:o(()=>`AOnHooks${e.value?` (${e.value})`:``}`)}}var S={name:`PageOnHooks`,components:{AlohaPage:e,ATranslation:n,PageOnHooksExample:b},setup(){let{pageTitle:e}=x();return{pageTitle:e}}};function C(e,t,n,r,i,a){let o=m(`a-translation`),s=m(`page-on-hooks-example`),u=m(`aloha-page`);return d(),l(u,{"page-title":e.pageTitle},{body:f(()=>[c(o,{tag:`p`,html:`_A_ON_HOOKS_DIRECTIVE_DESCRIPTION_`}),c(o,{class:`a_mt_3`,html:`_A_ON_HOOKS_DIRECTIVE_DESCRIPTION_LIST_`}),c(s)]),_:1},8,[`page-title`])}var w=h(S,[[`render`,C]]);export{w as default};