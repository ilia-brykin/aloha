import{A as s}from"./chunk.AlohaExample.D4SaE4p9.js";import{t as n,d as a,R as p,e as c,U as i}from"./chunk.vendor.BBAqWnj3.js";import{_ as m}from"./bundle.index.BIdvGbaF.js";function u(e){const o=n(e,"functionName");return{codeJs:a(()=>`import { AFiltersAPI } from "aloha-vue";

export default {
  setup() {  
    const {
      ${o.value},
    } = AFiltersAPI();
  },
};`)}}const l={name:"PageFilterImportCompositionApi",components:{AlohaExample:s},props:{functionName:{type:String,required:!0}},setup(e){const{codeJs:o}=u(e);return{codeJs:o}}};function d(e,o,t,_,f,A){const r=c("aloha-example");return i(),p(r,{"code-js":e.codeJs,header:"_PAGE_FUNCTIONS_IMPORT_COMPOSITION_API_HEADER_","is-code-visible-default":!0},null,8,["code-js"])}const x=m(l,[["render",d]]);export{x as P};
