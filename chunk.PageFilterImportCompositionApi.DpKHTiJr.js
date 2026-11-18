import{t as e}from"./chunk.AlohaExample.G_MpJRbw.js";import{It as t,Pt as n,Zt as r,cn as i,tn as a}from"./chunk.vendor.H0cZuFAV.js";import{t as o}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function s(e){let t=i(e,`functionName`);return{codeJs:n(()=>`import { AFiltersAPI } from "aloha-vue";

export default {
  setup() {  
    const {
      ${t.value},
    } = AFiltersAPI();
  },
};`)}}var c={name:`PageFilterImportCompositionApi`,components:{AlohaExample:e},props:{functionName:{type:String,required:!0}},setup(e){let{codeJs:t}=s(e);return{codeJs:t}}};function l(e,n,i,o,s,c){let l=a(`aloha-example`);return r(),t(l,{"code-js":e.codeJs,header:`_PAGE_FUNCTIONS_IMPORT_COMPOSITION_API_HEADER_`,"is-code-visible-default":!0},null,8,[`code-js`])}var u=o(c,[[`render`,l]]);export{u as t};