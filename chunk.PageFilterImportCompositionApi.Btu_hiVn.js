import{A as s}from"./chunk.AlohaExample.DAr9Tlnu.js";import{t as n,a,k as p,J as c,H as i}from"./chunk.vendor.DTe1dwcY.js";import{_ as m}from"./bundle.index.BKSIYICd.js";function u(e){const o=n(e,"functionName");return{codeJs:a(()=>`import { AFiltersAPI } from "aloha-vue";

export default {
  setup() {  
    const {
      ${o.value},
    } = AFiltersAPI();
  },
};`)}}const l={name:"PageFilterImportCompositionApi",components:{AlohaExample:s},props:{functionName:{type:String,required:!0}},setup(e){const{codeJs:o}=u(e);return{codeJs:o}}};function _(e,o,t,d,f,A){const r=p("aloha-example");return i(),c(r,{"code-js":e.codeJs,header:"_PAGE_FUNCTIONS_IMPORT_COMPOSITION_API_HEADER_","is-code-visible-default":!0},null,8,["code-js"])}const x=m(l,[["render",_]]);export{x as P};
