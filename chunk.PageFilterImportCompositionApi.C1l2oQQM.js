import{A as s}from"./chunk.AlohaExample.bHGij63B.js";import{t as n,a,m as c,K as p,J as i}from"./chunk.vendor.D6eG-XyB.js";import{_ as m}from"./bundle.index.C_5YVLtW.js";function l(o){const e=n(o,"functionName");return{codeJs:a(()=>`import AFiltersAPI from "aloha-vue/src/compositionAPI/AFiltersAPI";

export default {
  setup() {  
    const {
      ${e.value},
    } = AFiltersAPI();
  },
};`)}}const u={name:"PageFilterImportCompositionApi",components:{AlohaExample:s},props:{functionName:{type:String,required:!0}},setup(o){const{codeJs:e}=l(o);return{codeJs:e}}};function _(o,e,t,d,A,f){const r=c("aloha-example");return i(),p(r,{"code-js":o.codeJs,header:"_PAGE_FUNCTIONS_IMPORT_COMPOSITION_API_HEADER_","is-code-visible-default":!0},null,8,["code-js"])}const x=m(u,[["render",_]]);export{x as P};
