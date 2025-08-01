import{A as s}from"./chunk.AlohaExample.CsdlTcyL.js";import{t as n,d as a,V as p,e as c,W as i}from"./chunk.vendor.DOXCeh_m.js";import{_ as m}from"./bundle.index.DoeLPn5y.js";function u(e){const o=n(e,"functionName");return{codeJs:a(()=>`import { AFiltersAPI } from "aloha-vue";

export default {
  setup() {  
    const {
      ${o.value},
    } = AFiltersAPI();
  },
};`)}}const l={name:"PageFilterImportCompositionApi",components:{AlohaExample:s},props:{functionName:{type:String,required:!0}},setup(e){const{codeJs:o}=u(e);return{codeJs:o}}};function d(e,o,t,_,f,A){const r=c("aloha-example");return i(),p(r,{"code-js":e.codeJs,header:"_PAGE_FUNCTIONS_IMPORT_COMPOSITION_API_HEADER_","is-code-visible-default":!0},null,8,["code-js"])}const x=m(l,[["render",d]]);export{x as P};
