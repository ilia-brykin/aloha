import{ak as f,_ as i,A}from"./bundle.index.tyK-QPw4.js";import{A as g,a as P}from"./chunk.AlohaExample.VAIg8M-3.js";import{A as h}from"./chunk.AlohaTableProps.CdtFZPLy.js";import{A as I}from"./chunk.AlohaTableTranslate.D-TxReP7.js";import{r as T,R as m,aR as c,e as a,U as u,Y as p,W as k,aS as C}from"./chunk.vendor.CDkHfsNc.js";import{P as v,T as R,a as $,E as b}from"./chunk.TranslateAPI.MaTDW7BY.js";import"./chunk.vendor-lodash.OlSEBnWT.js";import"./chunk.translations-ar.BW4YNjOf.js";import"./chunk.translations-de.pnZGXXfR.js";import"./chunk.translations-en.CzHrEMzS.js";import"./chunk.translations-es.CVdE8egl.js";import"./chunk.translations-fr.hqb9JGfS.js";import"./chunk.translations-hr.DYwzCGFq.js";import"./chunk.translations-it.C5e5-FF3.js";import"./chunk.translations-ru.eTKud94F.js";import"./chunk.APageTabTitle.mnjEtrln.js";import"./chunk.AlohaHighlightjs.DI9-5vSP.js";import"./chunk.ATable.B4yUR6Sq.js";function E(){return{codeHtml:`<a-input
  v-model="model"
  label="Input"
></a-input>
<div>model: {{ model }}</div>`}}function N(){return{codeJs:`import {
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
};`}}const B={name:"PageRouterLinkConfigBasic",components:{AlohaExample:g,ARouterLinkConfig:f},setup(){const o=T({route:"NotFoundTest",query:{key:"Aloha"}}),{codeHtml:e}=E(),{codeJs:t}=N();return{codeHtml:e,codeJs:t,model:o}}};function L(o,e,t,n,d,_){const r=a("a-router-link-config"),s=a("aloha-example");return u(),m(s,{"code-html":o.codeHtml,"code-js":o.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","label"]},{default:c(()=>[p(r,{modelValue:o.model,"onUpdate:modelValue":e[0]||(e[0]=l=>o.model=l),label:"Aloha",required:!0},null,8,["modelValue"]),k("div",null,"model: "+C(o.model),1)]),_:1},8,["code-html","code-js"])}const H=i(B,[["render",L]]),J={name:"PageRouterLinkConfig",components:{AlohaPage:P,AlohaTableProps:h,AlohaTableTranslate:I,ATranslation:A,PageRouterLinkConfigBasic:H},setup(){const{pageTitle:o}=v(),{dataProps:e}=$(),{dataTranslate:t}=R(),{dataEvents:n}=b();return{dataEvents:n,dataProps:e,dataTranslate:t,pageTitle:o}}};function O(o,e,t,n,d,_){const r=a("a-translation"),s=a("page-router-link-config-basic"),l=a("aloha-page");return u(),m(l,{"page-title":o.pageTitle},{body:c(()=>[p(r,{tag:"p",html:"_A_ROUTER_LINK_CONFIG_COMPONENT_DESCRIPTION_"}),p(s)]),_:1},8,["page-title"])}const Z=i(J,[["render",O]]);export{Z as default};
