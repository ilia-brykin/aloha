import{t as e}from"./chunk.AlohaPage.sulZ3BAz.js";import{t}from"./chunk.AlohaExample.Dh7-vA8e.js";import{Mt as n,et as r,jt as i}from"./bundle.index.Csp1_sOL.js";import{Ft as a,Lt as o,Nt as s,Rt as c,Xt as l,an as u,en as d,in as f,tn as p,zt as m}from"./chunk.vendor.Cx127fe1.js";import{t as h}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function g(){return{codeHtml:`<div
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
};`}}var v={name:`PageOnHooksExample`,components:{AlohaExample:t},directives:{AOnHooks:i},setup(){let{codeHtml:e}=g(),{codeJs:t}=_();return{codeHtml:e,codeJs:t,onBeforeMount:(e,t)=>{console.log(`beforeMount`,e,t)},onBeforeUnmount:(e,t)=>{console.log(`beforeUnmount`,e,t)},onCreated:(e,t)=>{console.log(`created`,e,t)},onMounted:(e,t)=>{console.log(`mounted`,e,t)},onUnmounted:(e,t)=>{console.log(`unmounted`,e,t)}}}};function y(e,t,n,r,i,s){let m=d(`aloha-example`),h=p(`a-on-hooks`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`},{default:f(()=>[u((l(),o(`div`,null,[...t[0]||=[c(`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,-1)]])),[[h,{created:e.onCreated,beforeMount:e.onBeforeMount,mounted:e.onMounted,beforeUnmount:e.onBeforeUnmount,unmounted:e.onUnmounted}]])]),_:1},8,[`code-html`,`code-js`])}var b=h(v,[[`render`,y]]);function x(){let e=s(()=>n({placeholder:`_A_ON_HOOKS_DIRECTIVE_NAME_`}));return{pageTitle:s(()=>`AOnHooks${e.value?` (${e.value})`:``}`)}}var S={name:`PageOnHooks`,components:{AlohaPage:e,ATranslation:r,PageOnHooksExample:b},setup(){let{pageTitle:e}=x();return{pageTitle:e}}};function C(e,t,n,r,i,o){let s=d(`a-translation`),c=d(`page-on-hooks-example`),u=d(`aloha-page`);return l(),a(u,{"page-title":e.pageTitle},{body:f(()=>[m(s,{tag:`p`,html:`_A_ON_HOOKS_DIRECTIVE_DESCRIPTION_`}),m(s,{class:`a_mt_3`,html:`_A_ON_HOOKS_DIRECTIVE_DESCRIPTION_LIST_`}),m(c)]),_:1},8,[`page-title`])}var w=h(S,[[`render`,C]]);export{w as default};