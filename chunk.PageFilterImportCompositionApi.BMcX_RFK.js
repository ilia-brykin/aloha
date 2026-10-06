import{Ct as e,Tt as t,Ut as n,Xt as r,zt as i}from"./chunk.vendor.CZPox1kV.js";import{t as a}from"./bundle.index.BmSiyQNH.js";import{t as o}from"./chunk.AlohaExample.CD4LlhAz.js";function s(t){let n=r(t,`functionName`);return{codeJs:e(()=>`import { AFiltersAPI } from "aloha-vue";

export default {
  setup() {  
    const {
      ${n.value},
    } = AFiltersAPI();
  },
};`)}}var c={name:`PageFilterImportCompositionApi`,components:{AlohaExample:o},props:{functionName:{type:String,required:!0}},setup(e){let{codeJs:t}=s(e);return{codeJs:t}}};function l(e,r,a,o,s,c){let l=n(`aloha-example`);return i(),t(l,{"code-js":e.codeJs,header:`_PAGE_FUNCTIONS_IMPORT_COMPOSITION_API_HEADER_`,"is-code-visible-default":!0},null,8,[`code-js`])}var u=a(c,[[`render`,l]]);export{u as t};