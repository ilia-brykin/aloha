import{A as s}from"./chunk.AlohaExample.CY0fG0Xz.js";import{t as n,d as a,W as p,V as c,e as i}from"./chunk.vendor.CVk5hDWp.js";import{_ as m}from"./bundle.index.cJHvYkjp.js";function u(e){const o=n(e,"functionName");return{codeJs:a(()=>`import { AFiltersAPI } from "aloha-vue";

export default {
  setup() {  
    const {
      ${o.value},
    } = AFiltersAPI();
  },
};`)}}const l={name:"PageFilterImportCompositionApi",components:{AlohaExample:s},props:{functionName:{type:String,required:!0}},setup(e){const{codeJs:o}=u(e);return{codeJs:o}}};function d(e,o,t,_,f,A){const r=i("aloha-example");return p(),c(r,{"code-js":e.codeJs,header:"_PAGE_FUNCTIONS_IMPORT_COMPOSITION_API_HEADER_","is-code-visible-default":!0},null,8,["code-js"])}const x=m(l,[["render",d]]);export{x as P};
