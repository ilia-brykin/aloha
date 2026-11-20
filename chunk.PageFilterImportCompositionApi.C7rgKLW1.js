import{t as e}from"./chunk.AlohaExample.C08Co4B1.js";import{$t as t,It as n,Pt as r,rn as i,un as a}from"./chunk.vendor.BvryzG0o.js";import{t as o}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function s(e){let t=a(e,`functionName`);return{codeJs:r(()=>`import { AFiltersAPI } from "aloha-vue";

export default {
  setup() {  
    const {
      ${t.value},
    } = AFiltersAPI();
  },
};`)}}var c={name:`PageFilterImportCompositionApi`,components:{AlohaExample:e},props:{functionName:{type:String,required:!0}},setup(e){let{codeJs:t}=s(e);return{codeJs:t}}};function l(e,r,a,o,s,c){let l=i(`aloha-example`);return t(),n(l,{"code-js":e.codeJs,header:`_PAGE_FUNCTIONS_IMPORT_COMPOSITION_API_HEADER_`,"is-code-visible-default":!0},null,8,[`code-js`])}var u=o(c,[[`render`,l]]);export{u as t};