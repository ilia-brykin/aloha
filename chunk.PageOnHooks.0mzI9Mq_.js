import{t as e}from"./chunk.AlohaPage.D8jsTY5m.js";import{t}from"./chunk.AlohaExample.B-5omd3W.js";import{hn as n,mn as r,on as i,t as a}from"./bundle.index.Cwpafk10.js";import{Gt as o,Jt as s,Ut as c,Vt as l,dn as u,hn as d,mn as f,on as p,qt as m,un as h}from"./chunk.vendor.Bjd2408Z.js";function g(){return{codeHtml:`<div
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
};`}}var v={name:`PageOnHooksExample`,components:{AlohaExample:t},directives:{AOnHooks:i},setup(){let{codeHtml:e}=g(),{codeJs:t}=_();return{codeHtml:e,codeJs:t,onBeforeMount:(e,t)=>{console.log(`beforeMount`,e,t)},onBeforeUnmount:(e,t)=>{console.log(`beforeUnmount`,e,t)},onCreated:(e,t)=>{console.log(`created`,e,t)},onMounted:(e,t)=>{console.log(`mounted`,e,t)},onUnmounted:(e,t)=>{console.log(`unmounted`,e,t)}}}};function y(e,t,n,r,i,a){let s=h(`aloha-example`),l=u(`a-on-hooks`);return p(),c(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`},{default:f(()=>[d((p(),o(`div`,null,[...t[0]||=[m(`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,-1)]])),[[l,{created:e.onCreated,beforeMount:e.onBeforeMount,mounted:e.onMounted,beforeUnmount:e.onBeforeUnmount,unmounted:e.onUnmounted}]])]),_:1},8,[`code-html`,`code-js`])}var b=a(v,[[`render`,y]]);function x(){let e=l(()=>n({placeholder:`_A_ON_HOOKS_DIRECTIVE_NAME_`}));return{pageTitle:l(()=>`AOnHooks${e.value?` (${e.value})`:``}`)}}var S={name:`PageOnHooks`,components:{AlohaPage:e,ATranslation:r,PageOnHooksExample:b},setup(){let{pageTitle:e}=x();return{pageTitle:e}}};function C(e,t,n,r,i,a){let o=h(`a-translation`),l=h(`page-on-hooks-example`),u=h(`aloha-page`);return p(),c(u,{"page-title":e.pageTitle},{body:f(()=>[s(o,{tag:`p`,html:`_A_ON_HOOKS_DIRECTIVE_DESCRIPTION_`}),s(o,{class:`a_mt_3`,html:`_A_ON_HOOKS_DIRECTIVE_DESCRIPTION_LIST_`}),s(l)]),_:1},8,[`page-title`])}var w=a(S,[[`render`,C]]);export{w as default};