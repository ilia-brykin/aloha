import{t as e}from"./chunk.AlohaPage.CqjE0MZc.js";import{t}from"./chunk.AlohaExample.BkAbsrja.js";import{$t as n,Bt as r,qt as i}from"./bundle.index.DrnKDfVL.js";import{$t as a,Bt as o,It as s,Pt as c,Rt as l,Vt as u,cn as d,in as f,rn as p,sn as m}from"./chunk.vendor.BvryzG0o.js";import{t as h}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function g(){return{codeHtml:`<div
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
};`}}var v={name:`PageOnHooksExample`,components:{AlohaExample:t},directives:{AOnHooks:r},setup(){let{codeHtml:e}=g(),{codeJs:t}=_();return{codeHtml:e,codeJs:t,onBeforeMount:(e,t)=>{console.log(`beforeMount`,e,t)},onBeforeUnmount:(e,t)=>{console.log(`beforeUnmount`,e,t)},onCreated:(e,t)=>{console.log(`created`,e,t)},onMounted:(e,t)=>{console.log(`mounted`,e,t)},onUnmounted:(e,t)=>{console.log(`unmounted`,e,t)}}}};function y(e,t,n,r,i,c){let u=p(`aloha-example`),h=f(`a-on-hooks`);return a(),s(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`},{default:m(()=>[d((a(),l(`div`,null,[...t[0]||=[o(`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,-1)]])),[[h,{created:e.onCreated,beforeMount:e.onBeforeMount,mounted:e.onMounted,beforeUnmount:e.onBeforeUnmount,unmounted:e.onUnmounted}]])]),_:1},8,[`code-html`,`code-js`])}var b=h(v,[[`render`,y]]);function x(){let e=c(()=>n({placeholder:`_A_ON_HOOKS_DIRECTIVE_NAME_`}));return{pageTitle:c(()=>`AOnHooks${e.value?` (${e.value})`:``}`)}}var S={name:`PageOnHooks`,components:{AlohaPage:e,ATranslation:i,PageOnHooksExample:b},setup(){let{pageTitle:e}=x();return{pageTitle:e}}};function C(e,t,n,r,i,o){let c=p(`a-translation`),l=p(`page-on-hooks-example`),d=p(`aloha-page`);return a(),s(d,{"page-title":e.pageTitle},{body:m(()=>[u(c,{tag:`p`,html:`_A_ON_HOOKS_DIRECTIVE_DESCRIPTION_`}),u(c,{class:`a_mt_3`,html:`_A_ON_HOOKS_DIRECTIVE_DESCRIPTION_LIST_`}),u(l)]),_:1},8,[`page-title`])}var w=h(S,[[`render`,C]]);export{w as default};