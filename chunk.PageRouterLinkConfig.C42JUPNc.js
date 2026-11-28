import{H as e,mn as t,t as n}from"./bundle.index.D-5bYXwk.js";import{t as r}from"./chunk.AlohaPage.BSfHVC43.js";import{t as i}from"./chunk.AlohaTableProps.BlCiBCEj.js";import{t as a}from"./chunk.AlohaTableTranslate.CZ7cJb8v.js";import{Ht as o,Jt as s,Ut as c,_n as l,mn as u,on as d,un as f,wn as p}from"./chunk.vendor.DL09mhUf.js";import{t as m}from"./chunk.AlohaExample.VTWuqY0j.js";import{i as h,n as g,r as _,t as v}from"./chunk.TranslateAPI.CC5ySRBx.js";function y(){return{codeHtml:`<a-router-link-config
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
};`}}var x={name:`PageRouterLinkConfigBasic`,components:{AlohaExample:m,ARouterLinkConfig:e},setup(){let e=l({route:`NotFoundTest`,query:{key:`Aloha`}}),{codeHtml:t}=y(),{codeJs:n}=b();return{codeHtml:t,codeJs:n,model:e}}};function S(e,t,n,r,i,a){let l=f(`a-router-link-config`),m=f(`aloha-example`);return d(),c(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`label`]},{default:u(()=>[s(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,required:!0,label:`Aloha`},null,8,[`modelValue`]),o(`div`,null,`model: `+p(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var C=n(x,[[`render`,S]]);function w(){return{codeHtml:`<a-router-link-config
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
};`}}var E={name:`PageRouterLinkConfigLabelDescription`,components:{AlohaExample:m,ARouterLinkConfig:e},setup(){let e=l({route:`NotFoundTest`,query:{key:`Aloha`}}),{codeHtml:t}=w(),{codeJs:n}=T();return{codeHtml:t,codeJs:n,model:e}}};function D(e,t,n,r,i,a){let l=f(`a-router-link-config`),m=f(`aloha-example`);return d(),c(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_`,description:`_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_`,props:[`label-description`]},{default:u(()=>[s(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`Router`,"label-description":`Aloha`},null,8,[`modelValue`]),o(`div`,null,`model: `+p(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var O=n(E,[[`render`,D]]);function k(){return{codeHtml:`<a-router-link-config
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
};`}}var j={name:`PageRouterLinkConfigReadonly`,components:{AlohaExample:m,ARouterLinkConfig:e},setup(){let e=l({route:`NotFoundTest`,param:{id:123},query:{key:`Aloha`},target:`_self`}),t=l({route:`PageQuickStart`}),n=l(void 0),{codeHtml:r}=k(),{codeJs:i}=A();return{codeHtml:r,codeJs:i,model1:e,model2:t,model3:n}}};function M(e,t,n,r,i,a){let o=f(`a-router-link-config`),l=f(`aloha-example`);return d(),c(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_READONLY_HEADER_`,description:`_A_UI_GROUP_READONLY_DESCRIPTION_`,props:[`readonly`,`readonly-default`,`readonly-default-route`,`readonly-default-param`,`readonly-default-query`,`readonly-default-target`]},{default:u(()=>[s(o,{"model-value":e.model1,readonly:!0,label:`Router 1`,"readonly-default-param":`-`},null,8,[`model-value`]),s(o,{class:`a_mt_3`,"model-value":e.model2,readonly:!0,label:`Router 2`,"readonly-default-query":`-`,"readonly-default-target":`-`},null,8,[`model-value`]),s(o,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,label:`Router 3`},null,8,[`model-value`]),s(o,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,label:`Router 4`,"readonly-default":`-`},null,8,[`model-value`]),s(o,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,"help-text":`Aloha`,label:`Router 5`,"readonly-default-route":`-`},null,8,[`model-value`])]),_:1},8,[`code-html`,`code-js`])}var N=n(j,[[`render`,M]]);function P(){return{codeHtml:`<a-router-link-config
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
};`}}var I={name:`PageRouterLinkConfigType`,components:{AlohaExample:m,ARouterLinkConfig:e},setup(){let e=l(void 0),t=l(void 0),{codeHtml:n}=P(),{codeJs:r}=F();return{codeHtml:n,codeJs:r,model1:e,model2:t}}};function L(e,t,n,r,i,a){let l=f(`a-router-link-config`),m=f(`aloha-example`);return d(),c(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_ROUTER_LINK_CONFIG_GROUP_READONLY_HEADER_`,description:`_A_ROUTER_LINK_CONFIG_GROUP_READONLY_DESCRIPTION_`,props:[`type`]},{default:u(()=>[s(l,{modelValue:e.model1,"onUpdate:modelValue":t[0]||=t=>e.model1=t,required:!0,label:`Select`,type:`selectRoute`},null,8,[`modelValue`]),o(`div`,null,`model1: `+p(e.model1),1),s(l,{class:`a_mt_3`,modelValue:e.model2,"onUpdate:modelValue":t[1]||=t=>e.model2=t,required:!0,label:`Select`,type:`multiselectRoute`},null,8,[`modelValue`]),o(`div`,null,`model2: `+p(e.model2),1)]),_:1},8,[`code-html`,`code-js`])}var R={name:`PageRouterLinkConfig`,components:{AlohaPage:r,AlohaTableProps:i,AlohaTableTranslate:a,ATranslation:t,PageRouterLinkConfigBasic:C,PageRouterLinkConfigLabelDescription:O,PageRouterLinkConfigReadonly:N,PageRouterLinkConfigType:n(I,[[`render`,L]])},setup(){let{pageTitle:e}=_(),{dataProps:t}=g(),{dataTranslate:n}=v(),{dataEvents:r}=h();return{dataEvents:r,dataProps:t,dataTranslate:n,pageTitle:e}}};function z(e,t,n,r,i,a){let o=f(`a-translation`),l=f(`page-router-link-config-basic`),p=f(`page-router-link-config-label-description`),m=f(`page-router-link-config-type`),h=f(`page-router-link-config-readonly`),g=f(`aloha-table-translate`),_=f(`aloha-page`);return d(),c(_,{"page-title":e.pageTitle},{body:u(()=>[s(o,{tag:`p`,html:`_A_ROUTER_LINK_CONFIG_COMPONENT_DESCRIPTION_`}),s(l),s(p),s(m),s(h),s(g,{data:e.dataTranslate},null,8,[`data`])]),_:1},8,[`page-title`])}var B=n(R,[[`render`,z]]);export{B as default};