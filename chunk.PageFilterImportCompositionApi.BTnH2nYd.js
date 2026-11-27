import{t as e}from"./chunk.AlohaExample.NZuewB4M.js";import{Ut as t,Vt as n,on as r,un as i,yn as a}from"./chunk.vendor.Bjd2408Z.js";import{t as o}from"./bundle.index.DHnbMku0.js";function s(e){let t=a(e,`functionName`);return{codeJs:n(()=>`import { AFiltersAPI } from "aloha-vue";

export default {
  setup() {  
    const {
      ${t.value},
    } = AFiltersAPI();
  },
};`)}}var c={name:`PageFilterImportCompositionApi`,components:{AlohaExample:e},props:{functionName:{type:String,required:!0}},setup(e){let{codeJs:t}=s(e);return{codeJs:t}}};function l(e,n,a,o,s,c){let l=i(`aloha-example`);return r(),t(l,{"code-js":e.codeJs,header:`_PAGE_FUNCTIONS_IMPORT_COMPOSITION_API_HEADER_`,"is-code-visible-default":!0},null,8,[`code-js`])}var u=o(c,[[`render`,l]]);export{u as t};