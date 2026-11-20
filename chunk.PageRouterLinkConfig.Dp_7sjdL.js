import{H as e,it as t}from"./bundle.index.TygFUoMz.js";import{t as n}from"./chunk.AlohaPage.BX4p4AoC.js";import{t as r}from"./chunk.AlohaTableProps.sRecubwD.js";import{t as i}from"./chunk.AlohaTableTranslate.msf_ftSR.js";import{Bt as a,Ft as o,It as s,Zt as c,an as l,pn as u,sn as d,tn as f}from"./chunk.vendor.C763F6L5.js";import{t as p}from"./chunk.AlohaExample.Dv0nVKNW.js";import{t as m}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";import{i as h,n as g,r as _,t as v}from"./chunk.TranslateAPI.C9osHCB5.js";function y(){return{codeHtml:`<a-router-link-config
  v-model="model"
  :required="true"
  label="Aloha"
></a-router-link-config>
<div>model: {{ model }}</div>`}}function b(){return{codeJs:`import {
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
};`}}var x={name:`PageRouterLinkConfigBasic`,components:{AlohaExample:p,ARouterLinkConfig:e},setup(){let e=d({route:`NotFoundTest`,query:{key:`Aloha`}}),{codeHtml:t}=y(),{codeJs:n}=b();return{codeHtml:t,codeJs:n,model:e}}};function S(e,t,n,r,i,d){let p=f(`a-router-link-config`),m=f(`aloha-example`);return c(),s(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`label`]},{default:l(()=>[a(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,required:!0,label:`Aloha`},null,8,[`modelValue`]),o(`div`,null,`model: `+u(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var C=m(x,[[`render`,S]]);function w(){return{codeHtml:`<a-router-link-config
  v-model="model"
  label="Router"
  label-description="Aloha"
></a-router-link-config>
<div>model: {{ model }}</div>`}}function T(){return{codeJs:`import {
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
};`}}var E={name:`PageRouterLinkConfigLabelDescription`,components:{AlohaExample:p,ARouterLinkConfig:e},setup(){let e=d({route:`NotFoundTest`,query:{key:`Aloha`}}),{codeHtml:t}=w(),{codeJs:n}=T();return{codeHtml:t,codeJs:n,model:e}}};function D(e,t,n,r,i,d){let p=f(`a-router-link-config`),m=f(`aloha-example`);return c(),s(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_`,description:`_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_`,props:[`label-description`]},{default:l(()=>[a(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`Router`,"label-description":`Aloha`},null,8,[`modelValue`]),o(`div`,null,`model: `+u(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var O=m(E,[[`render`,D]]);function k(){return{codeHtml:`<a-router-link-config
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
></a-router-link-config>`}}function A(){return{codeJs:`import {
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
};`}}var j={name:`PageRouterLinkConfigReadonly`,components:{AlohaExample:p,ARouterLinkConfig:e},setup(){let e=d({route:`NotFoundTest`,param:{id:123},query:{key:`Aloha`},target:`_self`}),t=d({route:`PageQuickStart`}),n=d(void 0),{codeHtml:r}=k(),{codeJs:i}=A();return{codeHtml:r,codeJs:i,model1:e,model2:t,model3:n}}};function M(e,t,n,r,i,o){let u=f(`a-router-link-config`),d=f(`aloha-example`);return c(),s(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_READONLY_HEADER_`,description:`_A_UI_GROUP_READONLY_DESCRIPTION_`,props:[`readonly`,`readonly-default`,`readonly-default-route`,`readonly-default-param`,`readonly-default-query`,`readonly-default-target`]},{default:l(()=>[a(u,{"model-value":e.model1,readonly:!0,label:`Router 1`,"readonly-default-param":`-`},null,8,[`model-value`]),a(u,{class:`a_mt_3`,"model-value":e.model2,readonly:!0,label:`Router 2`,"readonly-default-query":`-`,"readonly-default-target":`-`},null,8,[`model-value`]),a(u,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,label:`Router 3`},null,8,[`model-value`]),a(u,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,label:`Router 4`,"readonly-default":`-`},null,8,[`model-value`]),a(u,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,"help-text":`Aloha`,label:`Router 5`,"readonly-default-route":`-`},null,8,[`model-value`])]),_:1},8,[`code-html`,`code-js`])}var N=m(j,[[`render`,M]]);function P(){return{codeHtml:`<a-router-link-config
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
<div>model2: {{ model2 }}</div>`}}function F(){return{codeJs:`import {
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
};`}}var I={name:`PageRouterLinkConfigType`,components:{AlohaExample:p,ARouterLinkConfig:e},setup(){let e=d(void 0),t=d(void 0),{codeHtml:n}=P(),{codeJs:r}=F();return{codeHtml:n,codeJs:r,model1:e,model2:t}}};function L(e,t,n,r,i,d){let p=f(`a-router-link-config`),m=f(`aloha-example`);return c(),s(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_ROUTER_LINK_CONFIG_GROUP_READONLY_HEADER_`,description:`_A_ROUTER_LINK_CONFIG_GROUP_READONLY_DESCRIPTION_`,props:[`type`]},{default:l(()=>[a(p,{modelValue:e.model1,"onUpdate:modelValue":t[0]||=t=>e.model1=t,required:!0,label:`Select`,type:`selectRoute`},null,8,[`modelValue`]),o(`div`,null,`model1: `+u(e.model1),1),a(p,{class:`a_mt_3`,modelValue:e.model2,"onUpdate:modelValue":t[1]||=t=>e.model2=t,required:!0,label:`Select`,type:`multiselectRoute`},null,8,[`modelValue`]),o(`div`,null,`model2: `+u(e.model2),1)]),_:1},8,[`code-html`,`code-js`])}var R={name:`PageRouterLinkConfig`,components:{AlohaPage:n,AlohaTableProps:r,AlohaTableTranslate:i,ATranslation:t,PageRouterLinkConfigBasic:C,PageRouterLinkConfigLabelDescription:O,PageRouterLinkConfigReadonly:N,PageRouterLinkConfigType:m(I,[[`render`,L]])},setup(){let{pageTitle:e}=_(),{dataProps:t}=g(),{dataTranslate:n}=v(),{dataEvents:r}=h();return{dataEvents:r,dataProps:t,dataTranslate:n,pageTitle:e}}};function z(e,t,n,r,i,o){let u=f(`a-translation`),d=f(`page-router-link-config-basic`),p=f(`page-router-link-config-label-description`),m=f(`page-router-link-config-type`),h=f(`page-router-link-config-readonly`),g=f(`aloha-table-translate`),_=f(`aloha-page`);return c(),s(_,{"page-title":e.pageTitle},{body:l(()=>[a(u,{tag:`p`,html:`_A_ROUTER_LINK_CONFIG_COMPONENT_DESCRIPTION_`}),a(d),a(p),a(m),a(h),a(g,{data:e.dataTranslate},null,8,[`data`])]),_:1},8,[`page-title`])}var B=m(R,[[`render`,z]]);export{B as default};