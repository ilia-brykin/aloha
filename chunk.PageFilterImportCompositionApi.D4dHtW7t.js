import{t as e}from"./chunk.AlohaExample.Bx3NX4bX.js";import{Bt as t,Ht as n,an as r,ln as i,vn as a}from"./chunk.vendor.SEynj6EJ.js";import{t as o}from"./bundle.index.LlT2KVEy.js";function s(e){let n=a(e,`functionName`);return{codeJs:t(()=>`import { AFiltersAPI } from "aloha-vue";

export default {
  setup() {  
    const {
      ${n.value},
    } = AFiltersAPI();
  },
};`)}}var c={name:`PageFilterImportCompositionApi`,components:{AlohaExample:e},props:{functionName:{type:String,required:!0}},setup(e){let{codeJs:t}=s(e);return{codeJs:t}}};function l(e,t,a,o,s,c){let l=i(`aloha-example`);return r(),n(l,{"code-js":e.codeJs,header:`_PAGE_FUNCTIONS_IMPORT_COMPOSITION_API_HEADER_`,"is-code-visible-default":!0},null,8,[`code-js`])}var u=o(c,[[`render`,l]]);export{u as t};