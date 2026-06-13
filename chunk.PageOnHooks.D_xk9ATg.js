import{A as f,a as b}from"./chunk.AlohaExample.DvEG2YnW.js";import{ar as h,_ as p,g as O,A}from"./bundle.index.BfnA4HIK.js";import{Y as l,W as _,aU as g,e as s,bp as U,w as k,Z as H,aW as M,d as u,$ as r}from"./chunk.vendor.N1c3KYO8.js";import"./chunk.vendor-lodash.DvfaiOPZ.js";import"./chunk.APageTabTitle.BwxAWwTE.js";import"./chunk.AlohaHighlightjs.C0HhAuqn.js";import"./chunk.translations-ar.CEE2zr9E.js";import"./chunk.translations-de.B5EkW3Bn.js";import"./chunk.translations-en.By5OazNK.js";import"./chunk.translations-es.BBwYsoM6.js";import"./chunk.translations-fr.sIUOe09m.js";import"./chunk.translations-hr.BW2q_4Qp.js";import"./chunk.translations-it.BpY7vfJm.js";import"./chunk.translations-ru.j7n72CSV.js";function B(){return{codeHtml:`<div
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
};`}}const E={name:"PageOnHooksExample",components:{AlohaExample:f},directives:{AOnHooks:h},setup(){const{codeHtml:o}=B(),{codeJs:t}=T();return{codeHtml:o,codeJs:t,onBeforeMount:(e,n)=>{console.log("beforeMount",e,n)},onBeforeUnmount:(e,n)=>{console.log("beforeUnmount",e,n)},onCreated:(e,n)=>{console.log("created",e,n)},onMounted:(e,n)=>{console.log("mounted",e,n)},onUnmounted:(e,n)=>{console.log("unmounted",e,n)}}}};function I(o,t,m,c,i,d){const a=s("aloha-example"),e=U("a-on-hooks");return l(),_(a,{"code-html":o.codeHtml,"code-js":o.codeJs,header:"_A_BASIC_USAGE_"},{default:g(()=>[k((l(),H("div",null,t[0]||(t[0]=[M("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")]))),[[e,{created:o.onCreated,beforeMount:o.onBeforeMount,mounted:o.onMounted,beforeUnmount:o.onBeforeUnmount,unmounted:o.onUnmounted}]])]),_:1},8,["code-html","code-js"])}const v=p(E,[["render",I]]);function C(){const o=u(()=>O({placeholder:"_A_ON_HOOKS_DIRECTIVE_NAME_"}));return{pageTitle:u(()=>`AOnHooks${o.value?` (${o.value})`:""}`)}}const $={name:"PageOnHooks",components:{AlohaPage:b,ATranslation:A,PageOnHooksExample:v},setup(){const{pageTitle:o}=C();return{pageTitle:o}}};function P(o,t,m,c,i,d){const a=s("a-translation"),e=s("page-on-hooks-example"),n=s("aloha-page");return l(),_(n,{"page-title":o.pageTitle},{body:g(()=>[r(a,{tag:"p",html:"_A_ON_HOOKS_DIRECTIVE_DESCRIPTION_"}),r(a,{class:"a_mt_3",html:"_A_ON_HOOKS_DIRECTIVE_DESCRIPTION_LIST_"}),r(e)]),_:1},8,["page-title"])}const Y=p($,[["render",P]]);export{Y as default};
