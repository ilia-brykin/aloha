import{A as s}from"./chunk.AlohaExample.DQald-L_.js";import{bo as n,aN as a,bc as c,aQ as p,bi as i}from"./chunk.vendor.B7xidcyX.js";import{ah as m}from"./bundle.index.D1OA29U_.js";function u(e){const o=n(e,"functionName");return{codeJs:a(()=>`import { AFiltersAPI } from "aloha-vue";

export default {
  setup() {  
    const {
      ${o.value},
    } = AFiltersAPI();
  },
};`)}}const l={name:"PageFilterImportCompositionApi",components:{AlohaExample:s},props:{functionName:{type:String,required:!0}},setup(e){const{codeJs:o}=u(e);return{codeJs:o}}};function d(e,o,t,_,f,A){const r=i("aloha-example");return c(),p(r,{"code-js":e.codeJs,header:"_PAGE_FUNCTIONS_IMPORT_COMPOSITION_API_HEADER_","is-code-visible-default":!0},null,8,["code-js"])}const N=m(l,[["render",d]]);export{N as P};
