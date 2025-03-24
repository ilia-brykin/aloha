import{ak as g,_ as i,A}from"./bundle.index.Cs0BOohE.js";import{A as y,a as R}from"./chunk.AlohaExample.Cb4qj_YB.js";import{A as P}from"./chunk.AlohaTableProps.1t_QZHfb.js";import{A as h}from"./chunk.AlohaTableTranslate.0-c7gC_s.js";import{r as m,U as c,aS as p,e as r,V as f,Z as t,Y as v,aT as C}from"./chunk.vendor.BCr5dHHZ.js";import{P as T,T as b,a as $,E as I}from"./chunk.TranslateAPI.DaiZuaSj.js";import"./chunk.vendor-lodash.1bZ290WX.js";import"./chunk.translations-ar.BW4YNjOf.js";import"./chunk.translations-de.pnZGXXfR.js";import"./chunk.translations-en.CzHrEMzS.js";import"./chunk.translations-es.CVdE8egl.js";import"./chunk.translations-fr.hqb9JGfS.js";import"./chunk.translations-hr.DYwzCGFq.js";import"./chunk.translations-it.C5e5-FF3.js";import"./chunk.translations-ru.eTKud94F.js";import"./chunk.APageTabTitle.BM-NEyRI.js";import"./chunk.AlohaHighlightjs.YRvFUhHX.js";import"./chunk.ATable.3VG2oPBX.js";function L(){return{codeHtml:`<a-router-link-config
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
};`}}const S={name:"PageRouterLinkConfigReadonly",components:{AlohaExample:y,ARouterLinkConfig:g},setup(){const e=m({route:"NotFoundTest",param:{id:123},query:{key:"Aloha"},target:"_self"}),o=m({route:"PageQuickStart"}),l=m(void 0),{codeHtml:n}=O(),{codeJs:u}=q();return{codeHtml:n,codeJs:u,model1:e,model2:o,model3:l}}};function U(e,o,l,n,u,_){const a=r("a-router-link-config"),d=r("aloha-example");return f(),c(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default","readonly-default-route","readonly-default-param","readonly-default-query","readonly-default-target"]},{default:p(()=>[t(a,{"model-value":e.model1,readonly:!0,label:"Router 1","readonly-default-param":"-"},null,8,["model-value"]),t(a,{class:"a_mt_3","model-value":e.model2,readonly:!0,label:"Router 2","readonly-default-query":"-","readonly-default-target":"-"},null,8,["model-value"]),t(a,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"Router 3"},null,8,["model-value"]),t(a,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"Router 4","readonly-default":"-"},null,8,["model-value"]),t(a,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"Router 5","readonly-default-route":"-"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const B=i(S,[["render",U]]),D={name:"PageRouterLinkConfig",components:{AlohaPage:R,AlohaTableProps:P,AlohaTableTranslate:h,ATranslation:A,PageRouterLinkConfigBasic:J,PageRouterLinkConfigReadonly:B},setup(){const{pageTitle:e}=T(),{dataProps:o}=$(),{dataTranslate:l}=b(),{dataEvents:n}=I();return{dataEvents:n,dataProps:o,dataTranslate:l,pageTitle:e}}};function V(e,o,l,n,u,_){const a=r("a-translation"),d=r("page-router-link-config-basic"),s=r("page-router-link-config-readonly"),k=r("aloha-page");return f(),c(k,{"page-title":e.pageTitle},{body:p(()=>[t(a,{tag:"p",html:"_A_ROUTER_LINK_CONFIG_COMPONENT_DESCRIPTION_"}),t(d),t(s)]),_:1},8,["page-title"])}const re=i(D,[["render",V]]);export{re as default};
