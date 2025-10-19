import{aC as k,_ as s,A as C}from"./bundle.index.Bxt4qDi4.js";import{A,a as L}from"./chunk.AlohaExample.XTO5GYx1.js";import{A as I}from"./chunk.AlohaTableProps.BaKsftlt.js";import{A as b}from"./chunk.AlohaTableTranslate.CDenMMoC.js";import{r as i,V as c,aT as p,e as t,W as _,_ as l,Z as g,aU as R}from"./chunk.vendor.jrGakw8v.js";import{P as $,T,a as E,E as N}from"./chunk.TranslateAPI.BVH_C4-w.js";import"./chunk.vendor-lodash.CAy_owSl.js";import"./chunk.translations-ar.COHWTLjj.js";import"./chunk.translations-de.CMsDi58c.js";import"./chunk.translations-en.Dg6d-iTX.js";import"./chunk.translations-es.BLJ15RYR.js";import"./chunk.translations-fr.tH5K_M0t.js";import"./chunk.translations-hr.DsOKZruz.js";import"./chunk.translations-it.B_6_ZtEA.js";import"./chunk.translations-ru.BTxZGSVv.js";import"./chunk.APageTabTitle.gYlT_2wZ.js";import"./chunk.AlohaHighlightjs.NfJqmXtA.js";import"./chunk.ATable.DCwq9Ji0.js";function O(){return{codeHtml:`<a-router-link-config
  v-model="model"
  :required="true"
  label="Aloha"
></a-router-link-config>
<div>model: {{ model }}</div>`}}function H(){return{codeJs:`import {
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
};`}}const J={name:"PageRouterLinkConfigBasic",components:{AlohaExample:A,ARouterLinkConfig:k},setup(){const e=i({route:"NotFoundTest",query:{key:"Aloha"}}),{codeHtml:o}=O(),{codeJs:n}=H();return{codeHtml:o,codeJs:n,model:e}}};function U(e,o,n,r,m,f){const a=t("a-router-link-config"),d=t("aloha-example");return _(),c(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","label"]},{default:p(()=>[l(a,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=u=>e.model=u),required:!0,label:"Aloha"},null,8,["modelValue"]),g("div",null,"model: "+R(e.model),1)]),_:1},8,["code-html","code-js"])}const D=s(J,[["render",U]]);function q(){return{codeHtml:`<a-router-link-config
  v-model="model"
  label="Router"
  label-description="Aloha"
></a-router-link-config>
<div>model: {{ model }}</div>`}}function S(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ARouterLinkConfig,
} from "aloha-vue";
    
export default {
  name: "PageRouterLinkConfigLabelDescription",
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
};`}}const V={name:"PageRouterLinkConfigLabelDescription",components:{AlohaExample:A,ARouterLinkConfig:k},setup(){const e=i({route:"NotFoundTest",query:{key:"Aloha"}}),{codeHtml:o}=q(),{codeJs:n}=S();return{codeHtml:o,codeJs:n,model:e}}};function G(e,o,n,r,m,f){const a=t("a-router-link-config"),d=t("aloha-example");return _(),c(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_",description:"_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_",props:["label-description"]},{default:p(()=>[l(a,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=u=>e.model=u),label:"Router","label-description":"Aloha"},null,8,["modelValue"]),g("div",null,"model: "+R(e.model),1)]),_:1},8,["code-html","code-js"])}const F=s(V,[["render",G]]);function j(){return{codeHtml:`<a-router-link-config
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
></a-router-link-config>`}}function B(){return{codeJs:`import {
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
};`}}const Y={name:"PageRouterLinkConfigReadonly",components:{AlohaExample:A,ARouterLinkConfig:k},setup(){const e=i({route:"NotFoundTest",param:{id:123},query:{key:"Aloha"},target:"_self"}),o=i({route:"PageQuickStart"}),n=i(void 0),{codeHtml:r}=j(),{codeJs:m}=B();return{codeHtml:r,codeJs:m,model1:e,model2:o,model3:n}}};function K(e,o,n,r,m,f){const a=t("a-router-link-config"),d=t("aloha-example");return _(),c(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default","readonly-default-route","readonly-default-param","readonly-default-query","readonly-default-target"]},{default:p(()=>[l(a,{"model-value":e.model1,readonly:!0,label:"Router 1","readonly-default-param":"-"},null,8,["model-value"]),l(a,{class:"a_mt_3","model-value":e.model2,readonly:!0,label:"Router 2","readonly-default-query":"-","readonly-default-target":"-"},null,8,["model-value"]),l(a,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"Router 3"},null,8,["model-value"]),l(a,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"Router 4","readonly-default":"-"},null,8,["model-value"]),l(a,{class:"a_mt_3","model-value":e.model3,readonly:!0,"help-text":"Aloha",label:"Router 5","readonly-default-route":"-"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const Q=s(Y,[["render",K]]);function w(){return{codeHtml:`<a-router-link-config
  v-model="model1"
  :required="true"
  label="Select"
  type="selectRoute"
></a-router-link-config>
<div>model1: {{ model1 }}</div>
<a-router-link-config
  v-model="model2"
  :required="true"
  class="a_mt_3"
  label="Select"
  type="multiselectRoute"
></a-router-link-config>
<div>model2: {{ model2 }}</div>`}}function M(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ARouterLinkConfig,
} from "aloha-vue";
    
export default {
  name: "PageRouterLinkConfigType",
  components: {
    ARouterLinkConfig,
  },
  setup() {
    const model1 = ref(undefined);
    const model2 = ref(undefined);
    
    return {
      model1,
      model2,
    };
  },
};`}}const W={name:"PageRouterLinkConfigType",components:{AlohaExample:A,ARouterLinkConfig:k},setup(){const e=i(void 0),o=i(void 0),{codeHtml:n}=w(),{codeJs:r}=M();return{codeHtml:n,codeJs:r,model1:e,model2:o}}};function Z(e,o,n,r,m,f){const a=t("a-router-link-config"),d=t("aloha-example");return _(),c(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ROUTER_LINK_CONFIG_GROUP_READONLY_HEADER_",description:"_A_ROUTER_LINK_CONFIG_GROUP_READONLY_DESCRIPTION_",props:["type"]},{default:p(()=>[l(a,{modelValue:e.model1,"onUpdate:modelValue":o[0]||(o[0]=u=>e.model1=u),required:!0,label:"Select",type:"selectRoute"},null,8,["modelValue"]),g("div",null,"model1: "+R(e.model1),1),l(a,{class:"a_mt_3",modelValue:e.model2,"onUpdate:modelValue":o[1]||(o[1]=u=>e.model2=u),required:!0,label:"Select",type:"multiselectRoute"},null,8,["modelValue"]),g("div",null,"model2: "+R(e.model2),1)]),_:1},8,["code-html","code-js"])}const z=s(W,[["render",Z]]),X={name:"PageRouterLinkConfig",components:{AlohaPage:L,AlohaTableProps:I,AlohaTableTranslate:b,ATranslation:C,PageRouterLinkConfigBasic:D,PageRouterLinkConfigLabelDescription:F,PageRouterLinkConfigReadonly:Q,PageRouterLinkConfigType:z},setup(){const{pageTitle:e}=$(),{dataProps:o}=E(),{dataTranslate:n}=T(),{dataEvents:r}=N();return{dataEvents:r,dataProps:o,dataTranslate:n,pageTitle:e}}};function x(e,o,n,r,m,f){const a=t("a-translation"),d=t("page-router-link-config-basic"),u=t("page-router-link-config-label-description"),y=t("page-router-link-config-type"),P=t("page-router-link-config-readonly"),h=t("aloha-table-translate"),v=t("aloha-page");return _(),c(v,{"page-title":e.pageTitle},{body:p(()=>[l(a,{tag:"p",html:"_A_ROUTER_LINK_CONFIG_COMPONENT_DESCRIPTION_"}),l(d),l(u),l(y),l(P),l(h,{data:e.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const ke=s(X,[["render",x]]);export{ke as default};
