import{ao as g,_ as i,A as R}from"./bundle.index.Bq7R9qMY.js";import{A as y,a as h}from"./chunk.AlohaExample.LckwFw80.js";import{A as P}from"./chunk.AlohaTableProps.Dld4SDKo.js";import{A as v}from"./chunk.AlohaTableTranslate.SdVYuRZ6.js";import{r as s,U as c,aS as p,e as l,V as f,Z as a,Y as b,aT as C}from"./chunk.vendor.bx9jdKRu.js";import{P as T,T as $,a as I,E as L}from"./chunk.TranslateAPI.D8zpfUf6.js";import"./chunk.vendor-lodash.DXsmYJeZ.js";import"./chunk.translations-ar.B1tU3Thi.js";import"./chunk.translations-de.6bqr14hf.js";import"./chunk.translations-en.kS_X1Dpm.js";import"./chunk.translations-es.Bh18-jGc.js";import"./chunk.translations-fr.DCACfn4Y.js";import"./chunk.translations-hr.CK0n_g9T.js";import"./chunk.translations-it.BjZrT9vw.js";import"./chunk.translations-ru.XVlwDvpe.js";import"./chunk.APageTabTitle.CN8oLE0x.js";import"./chunk.AlohaHighlightjs.ZYRFUDZw.js";import"./chunk.ATable.CUuC0VUz.js";function N(){return{codeHtml:`<a-router-link-config
  v-model="model"
  :required="true"
  label="Aloha"
></a-router-link-config>
<div>model: {{ model }}</div>`}}function E(){return{codeJs:`import {
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
};`}}const H={name:"PageRouterLinkConfigBasic",components:{AlohaExample:y,ARouterLinkConfig:g},setup(){const e=s({route:"NotFoundTest",query:{key:"Aloha"}}),{codeHtml:o}=N(),{codeJs:n}=E();return{codeHtml:o,codeJs:n,model:e}}};function J(e,o,n,r,u,_){const t=l("a-router-link-config"),d=l("aloha-example");return f(),c(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","label"]},{default:p(()=>[a(t,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=m=>e.model=m),required:!0,label:"Aloha"},null,8,["modelValue"]),b("div",null,"model: "+C(e.model),1)]),_:1},8,["code-html","code-js"])}const O=i(H,[["render",J]]);function q(){return{codeHtml:`<a-router-link-config
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
></a-router-link-config>`}}function S(){return{codeJs:`import {
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
};`}}const U={name:"PageRouterLinkConfigReadonly",components:{AlohaExample:y,ARouterLinkConfig:g},setup(){const e=s({route:"NotFoundTest",param:{id:123},query:{key:"Aloha"},target:"_self"}),o=s({route:"PageQuickStart"}),n=s(void 0),{codeHtml:r}=q(),{codeJs:u}=S();return{codeHtml:r,codeJs:u,model1:e,model2:o,model3:n}}};function B(e,o,n,r,u,_){const t=l("a-router-link-config"),d=l("aloha-example");return f(),c(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default","readonly-default-route","readonly-default-param","readonly-default-query","readonly-default-target"]},{default:p(()=>[a(t,{"model-value":e.model1,readonly:!0,label:"Router 1","readonly-default-param":"-"},null,8,["model-value"]),a(t,{class:"a_mt_3","model-value":e.model2,readonly:!0,label:"Router 2","readonly-default-query":"-","readonly-default-target":"-"},null,8,["model-value"]),a(t,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"Router 3"},null,8,["model-value"]),a(t,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"Router 4","readonly-default":"-"},null,8,["model-value"]),a(t,{class:"a_mt_3","model-value":e.model3,readonly:!0,"help-text":"Aloha",label:"Router 5","readonly-default-route":"-"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const D=i(U,[["render",B]]),V={name:"PageRouterLinkConfig",components:{AlohaPage:h,AlohaTableProps:P,AlohaTableTranslate:v,ATranslation:R,PageRouterLinkConfigBasic:O,PageRouterLinkConfigReadonly:D},setup(){const{pageTitle:e}=T(),{dataProps:o}=I(),{dataTranslate:n}=$(),{dataEvents:r}=L();return{dataEvents:r,dataProps:o,dataTranslate:n,pageTitle:e}}};function F(e,o,n,r,u,_){const t=l("a-translation"),d=l("page-router-link-config-basic"),m=l("page-router-link-config-readonly"),k=l("aloha-table-translate"),A=l("aloha-page");return f(),c(A,{"page-title":e.pageTitle},{body:p(()=>[a(t,{tag:"p",html:"_A_ROUTER_LINK_CONFIG_COMPONENT_DESCRIPTION_"}),a(d),a(m),a(k,{data:e.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const re=i(V,[["render",F]]);export{re as default};
