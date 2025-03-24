import{ak as f,_ as i,A}from"./bundle.index.BA134r8I.js";import{A as g,a as P}from"./chunk.AlohaExample.CJx5aa9S.js";import{A as h}from"./chunk.AlohaTableProps.BXFA29CT.js";import{A as I}from"./chunk.AlohaTableTranslate.DaGRhmbn.js";import{r as T,U as m,aS as c,e as a,V as u,Z as p,Y as k,aT as C}from"./chunk.vendor.CIvNY63D.js";import{P as v,T as $,a as b,E}from"./chunk.TranslateAPI.Be3trlT1.js";import"./chunk.vendor-lodash.CZF8DJKw.js";import"./chunk.translations-ar.BW4YNjOf.js";import"./chunk.translations-de.pnZGXXfR.js";import"./chunk.translations-en.CzHrEMzS.js";import"./chunk.translations-es.CVdE8egl.js";import"./chunk.translations-fr.hqb9JGfS.js";import"./chunk.translations-hr.DYwzCGFq.js";import"./chunk.translations-it.C5e5-FF3.js";import"./chunk.translations-ru.eTKud94F.js";import"./chunk.APageTabTitle.D_3Ku-YZ.js";import"./chunk.AlohaHighlightjs.B74icLx2.js";import"./chunk.ATable.qbeZvcB8.js";function N(){return{codeHtml:`<a-input
  v-model="model"
  label="Input"
></a-input>
<div>model: {{ model }}</div>`}}function R(){return{codeJs:`import {
  ref,
} from "vue";

import AInput from "aloha-vue/src/ui/AInput/AInput";
    
export default {
  name: "PageInputBasic",
  components: {
    AInput,
  },
  setup() {
    const model = ref("Aloha");
    
    return {
      model,
    };
  },
};`}}const B={name:"PageRouterLinkConfigBasic",components:{AlohaExample:g,ARouterLinkConfig:f},setup(){const o=T({route:"NotFoundTest",query:{key:"Aloha"}}),{codeHtml:e}=N(),{codeJs:t}=R();return{codeHtml:e,codeJs:t,model:o}}};function L(o,e,t,n,d,_){const r=a("a-router-link-config"),s=a("aloha-example");return u(),m(s,{"code-html":o.codeHtml,"code-js":o.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","label"]},{default:c(()=>[p(r,{modelValue:o.model,"onUpdate:modelValue":e[0]||(e[0]=l=>o.model=l),label:"Aloha",required:!0},null,8,["modelValue"]),k("div",null,"model: "+C(o.model),1)]),_:1},8,["code-html","code-js"])}const V=i(B,[["render",L]]),H={name:"PageRouterLinkConfig",components:{AlohaPage:P,AlohaTableProps:h,AlohaTableTranslate:I,ATranslation:A,PageRouterLinkConfigBasic:V},setup(){const{pageTitle:o}=v(),{dataProps:e}=b(),{dataTranslate:t}=$(),{dataEvents:n}=E();return{dataEvents:n,dataProps:e,dataTranslate:t,pageTitle:o}}};function J(o,e,t,n,d,_){const r=a("a-translation"),s=a("page-router-link-config-basic"),l=a("aloha-page");return u(),m(l,{"page-title":o.pageTitle},{body:c(()=>[p(r,{tag:"p",html:"_A_ROUTER_LINK_CONFIG_COMPONENT_DESCRIPTION_"}),p(s)]),_:1},8,["page-title"])}const X=i(H,[["render",J]]);export{X as default};
