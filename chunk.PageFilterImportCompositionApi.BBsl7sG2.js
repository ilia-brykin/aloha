import{t as e}from"./chunk.AlohaExample.Bs_TZ3nZ.js";import{Et as t,Ot as n,Ut as r,en as i,qt as a}from"./chunk.vendor.BLRpG40B.js";import{t as o}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function s(e){let n=i(e,`functionName`);return{codeJs:t(()=>`import { AFiltersAPI } from "aloha-vue";

export default {
  setup() {  
    const {
      ${n.value},
    } = AFiltersAPI();
  },
};`)}}var c={name:`PageFilterImportCompositionApi`,components:{AlohaExample:e},props:{functionName:{type:String,required:!0}},setup(e){let{codeJs:t}=s(e);return{codeJs:t}}};function l(e,t,i,o,s,c){let l=a(`aloha-example`);return r(),n(l,{"code-js":e.codeJs,header:`_PAGE_FUNCTIONS_IMPORT_COMPOSITION_API_HEADER_`,"is-code-visible-default":!0},null,8,[`code-js`])}var u=o(c,[[`render`,l]]);export{u as t};