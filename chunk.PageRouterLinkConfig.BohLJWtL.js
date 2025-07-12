import{at as g,_ as m,A as v}from"./bundle.index.2tepOL_G.js";import{A as k,a as b}from"./chunk.AlohaExample.DurYixDV.js";import{A as C}from"./chunk.AlohaTableProps.CK692rUA.js";import{A as L}from"./chunk.AlohaTableTranslate.BejZoM52.js";import{r as s,V as c,aT as p,e as t,W as _,_ as a,Z as A,aU as y}from"./chunk.vendor.BxCHGHAU.js";import{P as I,T as $,a as T,E}from"./chunk.TranslateAPI.BxUQVyfV.js";import"./chunk.vendor-lodash.BMPrua2s.js";import"./chunk.translations-ar.D8MQqUIX.js";import"./chunk.translations-de.Cn_yzXHt.js";import"./chunk.translations-en.Cabsq1fv.js";import"./chunk.translations-es.CTtyunpM.js";import"./chunk.translations-fr.tpgV9obb.js";import"./chunk.translations-hr.v7YKJpdX.js";import"./chunk.translations-it.Dqw3KhB-.js";import"./chunk.translations-ru.Cm34nVPu.js";import"./chunk.APageTabTitle.CkuBMxsN.js";import"./chunk.AlohaHighlightjs.B3F2oL8_.js";import"./chunk.ATable.Bf6CWlKm.js";function N(){return{codeHtml:`<a-router-link-config
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
};`}}const J={name:"PageRouterLinkConfigBasic",components:{AlohaExample:k,ARouterLinkConfig:g},setup(){const e=s({route:"NotFoundTest",query:{key:"Aloha"}}),{codeHtml:o}=N(),{codeJs:l}=H();return{codeHtml:o,codeJs:l,model:e}}};function O(e,o,l,r,u,f){const n=t("a-router-link-config"),d=t("aloha-example");return _(),c(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","label"]},{default:p(()=>[a(n,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=i=>e.model=i),required:!0,label:"Aloha"},null,8,["modelValue"]),A("div",null,"model: "+y(e.model),1)]),_:1},8,["code-html","code-js"])}const D=m(J,[["render",O]]);function U(){return{codeHtml:`<a-router-link-config
  v-model="model"
  label="Router"
  label-description="Aloha"
></a-router-link-config>
<div>model: {{ model }}</div>`}}function q(){return{codeJs:`import {
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
};`}}const S={name:"PageRouterLinkConfigLabelDescription",components:{AlohaExample:k,ARouterLinkConfig:g},setup(){const e=s({route:"NotFoundTest",query:{key:"Aloha"}}),{codeHtml:o}=U(),{codeJs:l}=q();return{codeHtml:o,codeJs:l,model:e}}};function V(e,o,l,r,u,f){const n=t("a-router-link-config"),d=t("aloha-example");return _(),c(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_",description:"_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_",props:["label-description"]},{default:p(()=>[a(n,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=i=>e.model=i),label:"Router","label-description":"Aloha"},null,8,["modelValue"]),A("div",null,"model: "+y(e.model),1)]),_:1},8,["code-html","code-js"])}const B=m(S,[["render",V]]);function F(){return{codeHtml:`<a-router-link-config
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
></a-router-link-config>`}}function j(){return{codeJs:`import {
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
};`}}const G={name:"PageRouterLinkConfigReadonly",components:{AlohaExample:k,ARouterLinkConfig:g},setup(){const e=s({route:"NotFoundTest",param:{id:123},query:{key:"Aloha"},target:"_self"}),o=s({route:"PageQuickStart"}),l=s(void 0),{codeHtml:r}=F(),{codeJs:u}=j();return{codeHtml:r,codeJs:u,model1:e,model2:o,model3:l}}};function Q(e,o,l,r,u,f){const n=t("a-router-link-config"),d=t("aloha-example");return _(),c(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default","readonly-default-route","readonly-default-param","readonly-default-query","readonly-default-target"]},{default:p(()=>[a(n,{"model-value":e.model1,readonly:!0,label:"Router 1","readonly-default-param":"-"},null,8,["model-value"]),a(n,{class:"a_mt_3","model-value":e.model2,readonly:!0,label:"Router 2","readonly-default-query":"-","readonly-default-target":"-"},null,8,["model-value"]),a(n,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"Router 3"},null,8,["model-value"]),a(n,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"Router 4","readonly-default":"-"},null,8,["model-value"]),a(n,{class:"a_mt_3","model-value":e.model3,readonly:!0,"help-text":"Aloha",label:"Router 5","readonly-default-route":"-"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const Y=m(G,[["render",Q]]),w={name:"PageRouterLinkConfig",components:{AlohaPage:b,AlohaTableProps:C,AlohaTableTranslate:L,ATranslation:v,PageRouterLinkConfigBasic:D,PageRouterLinkConfigLabelDescription:B,PageRouterLinkConfigReadonly:Y},setup(){const{pageTitle:e}=I(),{dataProps:o}=T(),{dataTranslate:l}=$(),{dataEvents:r}=E();return{dataEvents:r,dataProps:o,dataTranslate:l,pageTitle:e}}};function K(e,o,l,r,u,f){const n=t("a-translation"),d=t("page-router-link-config-basic"),i=t("page-router-link-config-label-description"),R=t("page-router-link-config-readonly"),h=t("aloha-table-translate"),P=t("aloha-page");return _(),c(P,{"page-title":e.pageTitle},{body:p(()=>[a(n,{tag:"p",html:"_A_ROUTER_LINK_CONFIG_COMPONENT_DESCRIPTION_"}),a(d),a(i),a(R),a(h,{data:e.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const ce=m(w,[["render",K]]);export{ce as default};
