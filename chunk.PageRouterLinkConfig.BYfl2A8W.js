import{al as g,_ as i,A}from"./bundle.index.Dz-YwCqT.js";import{A as y,a as R}from"./chunk.AlohaExample.B8qG2wOT.js";import{A as h}from"./chunk.AlohaTableProps.C88wTQOY.js";import{A as P}from"./chunk.AlohaTableTranslate.B6IVbVse.js";import{r as m,U as c,aS as p,e as r,V as f,Z as t,Y as v,aT as C}from"./chunk.vendor.CJgiAfkr.js";import{P as T,T as b,a as $,E as I}from"./chunk.TranslateAPI.DM58T0Zp.js";import"./chunk.vendor-lodash.UgDJRseT.js";import"./chunk.translations-ar.C215GjCi.js";import"./chunk.translations-de.2OTgW6Cj.js";import"./chunk.translations-en.BDnCg_Z9.js";import"./chunk.translations-es.BP9eJkFz.js";import"./chunk.translations-fr.BOe55yrn.js";import"./chunk.translations-hr.B3s_PrJE.js";import"./chunk.translations-it.Cc3k7wyX.js";import"./chunk.translations-ru.D-swuOFG.js";import"./chunk.APageTabTitle.qzXTT9-v.js";import"./chunk.AlohaHighlightjs.CS2rrB7v.js";import"./chunk.ATable.hIomCNZp.js";function L(){return{codeHtml:`<a-router-link-config
  v-model="model"
  :required="true"
  label="Aloha"
></a-router-link-config>
<div>model: {{ model }}</div>`}}function N(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ARouterLinkConfig,
} from "aloha-vue";
    
export default {
  name: "PageRouterLinkConfigReadonly",
  components: {
    ARouterLinkConfig,
  },
  setup() {
    const model = ref({
      route: "NotFoundTest",
      query: {
        key: "Aloha",
      },
    });
    
    return {
      model,
    };
  },
};`}}const E={name:"PageRouterLinkConfigBasic",components:{AlohaExample:y,ARouterLinkConfig:g},setup(){const e=m({route:"NotFoundTest",query:{key:"Aloha"}}),{codeHtml:o}=L(),{codeJs:l}=N();return{codeHtml:o,codeJs:l,model:e}}};function H(e,o,l,n,u,_){const a=r("a-router-link-config"),d=r("aloha-example");return f(),c(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","label"]},{default:p(()=>[t(a,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=s=>e.model=s),required:!0,label:"Aloha"},null,8,["modelValue"]),v("div",null,"model: "+C(e.model),1)]),_:1},8,["code-html","code-js"])}const J=i(E,[["render",H]]);function O(){return{codeHtml:`<a-router-link-config
  :model-value="model1"
  :readonly="true"
  label="Router 1"
  readonly-default-param="-"
></a-router-link-config>
<a-router-link-config
  :model-value="model2"
  :readonly="true"
  class="a_mt_3"
  label="Router 2"
  readonly-default-query="-"
  readonly-default-target="-"
></a-router-link-config>
<a-router-link-config
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  label="Router 3"
></a-router-link-config>
<a-router-link-config
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  label="Router 4"
  readonly-default="-"
></a-router-link-config>
<a-router-link-config
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  help-text="Aloha"
  label="Router 5"
  readonly-default-route="-"
></a-router-link-config>`}}function q(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ARouterLinkConfig,
} from "aloha-vue";
    
export default {
  name: "PageRouterLinkConfigReadonly",
  components: {
    ARouterLinkConfig,
  },
  setup() {
    const model1 = ref({
      route: "NotFoundTest",
      param: {
        id: 123,
      },
      query: {
        key: "Aloha",
      },
      target: "_self",
    });
    const model2 = ref({
      route: "PageQuickStart",
    });
    const model3 = ref(undefined);
    
    return {
      model1,
      model2,
      model3,
    };
  },
};`}}const S={name:"PageRouterLinkConfigReadonly",components:{AlohaExample:y,ARouterLinkConfig:g},setup(){const e=m({route:"NotFoundTest",param:{id:123},query:{key:"Aloha"},target:"_self"}),o=m({route:"PageQuickStart"}),l=m(void 0),{codeHtml:n}=O(),{codeJs:u}=q();return{codeHtml:n,codeJs:u,model1:e,model2:o,model3:l}}};function U(e,o,l,n,u,_){const a=r("a-router-link-config"),d=r("aloha-example");return f(),c(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default","readonly-default-route","readonly-default-param","readonly-default-query","readonly-default-target"]},{default:p(()=>[t(a,{"model-value":e.model1,readonly:!0,label:"Router 1","readonly-default-param":"-"},null,8,["model-value"]),t(a,{class:"a_mt_3","model-value":e.model2,readonly:!0,label:"Router 2","readonly-default-query":"-","readonly-default-target":"-"},null,8,["model-value"]),t(a,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"Router 3"},null,8,["model-value"]),t(a,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"Router 4","readonly-default":"-"},null,8,["model-value"]),t(a,{class:"a_mt_3","model-value":e.model3,readonly:!0,"help-text":"Aloha",label:"Router 5","readonly-default-route":"-"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const B=i(S,[["render",U]]),D={name:"PageRouterLinkConfig",components:{AlohaPage:R,AlohaTableProps:h,AlohaTableTranslate:P,ATranslation:A,PageRouterLinkConfigBasic:J,PageRouterLinkConfigReadonly:B},setup(){const{pageTitle:e}=T(),{dataProps:o}=$(),{dataTranslate:l}=b(),{dataEvents:n}=I();return{dataEvents:n,dataProps:o,dataTranslate:l,pageTitle:e}}};function V(e,o,l,n,u,_){const a=r("a-translation"),d=r("page-router-link-config-basic"),s=r("page-router-link-config-readonly"),k=r("aloha-page");return f(),c(k,{"page-title":e.pageTitle},{body:p(()=>[t(a,{tag:"p",html:"_A_ROUTER_LINK_CONFIG_COMPONENT_DESCRIPTION_"}),t(d),t(s)]),_:1},8,["page-title"])}const re=i(D,[["render",V]]);export{re as default};
