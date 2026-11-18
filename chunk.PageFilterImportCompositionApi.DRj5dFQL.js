import{t as e}from"./chunk.AlohaExample.Dh7-vA8e.js";import{Ft as t,Nt as n,Xt as r,en as i,sn as a}from"./chunk.vendor.Cx127fe1.js";import{t as o}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function s(e){let t=a(e,`functionName`);return{codeJs:n(()=>`import { AFiltersAPI } from "aloha-vue";

export default {
  setup() {  
    const {
      ${t.value},
    } = AFiltersAPI();
  },
};`)}}var c={name:`PageFilterImportCompositionApi`,components:{AlohaExample:e},props:{functionName:{type:String,required:!0}},setup(e){let{codeJs:t}=s(e);return{codeJs:t}}};function l(e,n,a,o,s,c){let l=i(`aloha-example`);return r(),t(l,{"code-js":e.codeJs,header:`_PAGE_FUNCTIONS_IMPORT_COMPOSITION_API_HEADER_`,"is-code-visible-default":!0},null,8,[`code-js`])}var u=o(c,[[`render`,l]]);export{u as t};