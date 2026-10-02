import{$t as e,Tt as t,Ut as n,Yt as r,kt as i,qt as a,wt as o,zt as s}from"./chunk.vendor.CZPox1kV.js";import{B as c,Z as l,t as u}from"./bundle.index.CLtYDDlb.js";import{n as d,t as f}from"./chunk.AlohaExample.BFgfeYtr.js";import{t as p}from"./chunk.AlohaTableProps.CiFmD1UR.js";import{t as m}from"./chunk.AlohaTableTranslate.SVFm06b7.js";import{i as h,n as g,r as _,t as v}from"./chunk.TranslateAPI.D-37WZtG.js";function y(){return{codeHtml:`<a-router-link-config
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
};`}}var x={name:`PageRouterLinkConfigBasic`,components:{AlohaExample:f,ARouterLinkConfig:c},setup(){let e=r({route:`NotFoundTest`,query:{key:`Aloha`}}),{codeHtml:t}=y(),{codeJs:n}=b();return{codeHtml:t,codeJs:n,model:e}}};function S(r,c,l,u,d,f){let p=n(`a-router-link-config`),m=n(`aloha-example`);return s(),t(m,{"code-html":r.codeHtml,"code-js":r.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`label`]},{default:a(()=>[i(p,{modelValue:r.model,"onUpdate:modelValue":c[0]||=e=>r.model=e,required:!0,label:`Aloha`},null,8,[`modelValue`]),o(`div`,null,`model: `+e(r.model),1)]),_:1},8,[`code-html`,`code-js`])}var C=u(x,[[`render`,S]]);function w(){return{codeHtml:`<a-router-link-config
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
};`}}var E={name:`PageRouterLinkConfigLabelDescription`,components:{AlohaExample:f,ARouterLinkConfig:c},setup(){let e=r({route:`NotFoundTest`,query:{key:`Aloha`}}),{codeHtml:t}=w(),{codeJs:n}=T();return{codeHtml:t,codeJs:n,model:e}}};function D(r,c,l,u,d,f){let p=n(`a-router-link-config`),m=n(`aloha-example`);return s(),t(m,{"code-html":r.codeHtml,"code-js":r.codeJs,header:`_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_`,description:`_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_`,props:[`label-description`]},{default:a(()=>[i(p,{modelValue:r.model,"onUpdate:modelValue":c[0]||=e=>r.model=e,label:`Router`,"label-description":`Aloha`},null,8,[`modelValue`]),o(`div`,null,`model: `+e(r.model),1)]),_:1},8,[`code-html`,`code-js`])}var O=u(E,[[`render`,D]]);function k(){return{codeHtml:`<a-router-link-config
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
};`}}var j={name:`PageRouterLinkConfigReadonly`,components:{AlohaExample:f,ARouterLinkConfig:c},setup(){let e=r({route:`NotFoundTest`,param:{id:123},query:{key:`Aloha`},target:`_self`}),t=r({route:`PageQuickStart`}),n=r(void 0),{codeHtml:i}=k(),{codeJs:a}=A();return{codeHtml:i,codeJs:a,model1:e,model2:t,model3:n}}};function M(e,r,o,c,l,u){let d=n(`a-router-link-config`),f=n(`aloha-example`);return s(),t(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_READONLY_HEADER_`,description:`_A_UI_GROUP_READONLY_DESCRIPTION_`,props:[`readonly`,`readonly-default`,`readonly-default-route`,`readonly-default-param`,`readonly-default-query`,`readonly-default-target`]},{default:a(()=>[i(d,{"model-value":e.model1,readonly:!0,label:`Router 1`,"readonly-default-param":`-`},null,8,[`model-value`]),i(d,{class:`a_mt_3`,"model-value":e.model2,readonly:!0,label:`Router 2`,"readonly-default-query":`-`,"readonly-default-target":`-`},null,8,[`model-value`]),i(d,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,label:`Router 3`},null,8,[`model-value`]),i(d,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,label:`Router 4`,"readonly-default":`-`},null,8,[`model-value`]),i(d,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,"help-text":`Aloha`,label:`Router 5`,"readonly-default-route":`-`},null,8,[`model-value`])]),_:1},8,[`code-html`,`code-js`])}var N=u(j,[[`render`,M]]);function P(){return{codeHtml:`<a-router-link-config
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
};`}}var I={name:`PageRouterLinkConfigType`,components:{AlohaExample:f,ARouterLinkConfig:c},setup(){let e=r(void 0),t=r(void 0),{codeHtml:n}=P(),{codeJs:i}=F();return{codeHtml:n,codeJs:i,model1:e,model2:t}}};function L(r,c,l,u,d,f){let p=n(`a-router-link-config`),m=n(`aloha-example`);return s(),t(m,{"code-html":r.codeHtml,"code-js":r.codeJs,header:`_A_ROUTER_LINK_CONFIG_GROUP_READONLY_HEADER_`,description:`_A_ROUTER_LINK_CONFIG_GROUP_READONLY_DESCRIPTION_`,props:[`type`]},{default:a(()=>[i(p,{modelValue:r.model1,"onUpdate:modelValue":c[0]||=e=>r.model1=e,required:!0,label:`Select`,type:`selectRoute`},null,8,[`modelValue`]),o(`div`,null,`model1: `+e(r.model1),1),i(p,{class:`a_mt_3`,modelValue:r.model2,"onUpdate:modelValue":c[1]||=e=>r.model2=e,required:!0,label:`Select`,type:`multiselectRoute`},null,8,[`modelValue`]),o(`div`,null,`model2: `+e(r.model2),1)]),_:1},8,[`code-html`,`code-js`])}var R={name:`PageRouterLinkConfig`,components:{AlohaPage:d,AlohaTableProps:p,AlohaTableTranslate:m,ATranslation:l,PageRouterLinkConfigBasic:C,PageRouterLinkConfigLabelDescription:O,PageRouterLinkConfigReadonly:N,PageRouterLinkConfigType:u(I,[[`render`,L]])},setup(){let{pageTitle:e}=_(),{dataProps:t}=g(),{dataTranslate:n}=v(),{dataEvents:r}=h();return{dataEvents:r,dataProps:t,dataTranslate:n,pageTitle:e}}};function z(e,r,o,c,l,u){let d=n(`a-translation`),f=n(`page-router-link-config-basic`),p=n(`page-router-link-config-label-description`),m=n(`page-router-link-config-type`),h=n(`page-router-link-config-readonly`),g=n(`aloha-table-translate`),_=n(`aloha-page`);return s(),t(_,{"page-title":e.pageTitle},{body:a(()=>[i(d,{tag:`p`,html:`_A_ROUTER_LINK_CONFIG_COMPONENT_DESCRIPTION_`}),i(f),i(p),i(m),i(h),i(g,{data:e.dataTranslate},null,8,[`data`])]),_:1},8,[`page-title`])}var B=u(R,[[`render`,z]]);export{B as default};