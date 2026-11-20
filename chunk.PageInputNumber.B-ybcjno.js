import{t as e}from"./chunk.AlohaPage.DvXMtBHm.js";import{t}from"./chunk.AlohaTableProps.C3P1ftdF.js";import{t as n}from"./chunk.AlohaTableTranslate.Df4zbt7o.js";import{$t as r,Ft as i,It as a,Mt as o,Rt as s,Vt as c,hn as l,ln as u,rn as d,sn as f,tn as p}from"./chunk.vendor.BvryzG0o.js";import{t as m}from"./chunk.AlohaExample.CuZ02843.js";import{J as h,qt as g}from"./bundle.index.DHKLH29U.js";import{t as _}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";import{i as v,n as y,r as b,t as x}from"./chunk.TranslateAPI.DLeDY_CI.js";function S(){return{codeHtml:`<a-input-number
  v-model="model1"
  label="Input 1"
></a-input-number>
<div class="a_mb_3">model1: {{ model1 }}</div>
<a-input-number
  v-model="model2"
  label="Input 2"
></a-input-number>
<div class="a_mb_3">model2: {{ model2 }}</div>
<a-input-number
  v-model="model3"
  label="Input 3"
></a-input-number>
<div>model3: {{ model3 }}</div>`}}function C(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AInputNumber,
} from "aloha-vue";
    
export default {
  name: "PageInputNumberBasic",
  components: {
    AInputNumber,
  },
  setup() {
    const model1 = ref(10);
    const model2 = ref(10000);
    const model3 = ref(10000.98);
    
    return {
      model1,
      model2,
      model3,
    };
  },
};`}}var w={name:`PageInputNumberBasic`,components:{AInputNumber:h,AlohaExample:m},setup(){let e=u(10),t=u(1e4),n=u(10000.98),{codeHtml:r}=S(),{codeJs:i}=C();return{codeHtml:r,codeJs:i,model1:e,model2:t,model3:n}}},T={class:`a_mb_3`},E={class:`a_mb_3`};function D(e,t,n,o,s,u){let p=d(`a-input-number`),m=d(`aloha-example`);return r(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`label`]},{default:f(()=>[c(p,{modelValue:e.model1,"onUpdate:modelValue":t[0]||=t=>e.model1=t,label:`Input 1`},null,8,[`modelValue`]),i(`div`,T,`model1: `+l(e.model1),1),c(p,{modelValue:e.model2,"onUpdate:modelValue":t[1]||=t=>e.model2=t,label:`Input 2`},null,8,[`modelValue`]),i(`div`,E,`model2: `+l(e.model2),1),c(p,{modelValue:e.model3,"onUpdate:modelValue":t[2]||=t=>e.model3=t,label:`Input 3`},null,8,[`modelValue`]),i(`div`,null,`model3: `+l(e.model3),1)]),_:1},8,[`code-html`,`code-js`])}var O=_(w,[[`render`,D]]);function k(){return{codeHtml:`<a-input-number
  v-model="model"
  :error-icon="errorIcon"
  errors="Aloha"
  label="Input number"
></a-input-number>`}}function A(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AInputNumber,
} from "aloha-vue";

export default {
  name: "PageInputNumberErrorIcon",
  components: {
    AInputNumber,
  },
  setup() {
    const model = ref(25);
    const errorIcon = "<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"16\\" height=\\"16\\" fill=\\"currentColor\\" viewBox=\\"0 0 16 16\\"><path d=\\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.93 6.588 8.758 10.042a.5.5 0 0 1-.998 0L7.588 6.588a.5.5 0 1 1 .998 0M8 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2\\"/></svg>";

    return {
      errorIcon,
      model,
    };
  },
};`}}var j={name:`PageInputNumberErrorIcon`,components:{AInputNumber:h,AlohaExample:m},setup(){let e=u(25),{codeHtml:t}=k(),{codeJs:n}=A();return{codeHtml:t,codeJs:n,errorIcon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.93 6.588 8.758 10.042a.5.5 0 0 1-.998 0L7.588 6.588a.5.5 0 1 1 .998 0M8 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>`,model:e}}};function M(e,t,n,i,o,s){let l=d(`a-input-number`),u=d(`aloha-example`);return r(),a(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_ERROR_ICON_HEADER_`,description:`_A_UI_GROUP_ERROR_ICON_DESCRIPTION_`,props:[`errors`,`error-icon`]},{default:f(()=>[c(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"error-icon":e.errorIcon,errors:`Aloha`,label:`Input number`},null,8,[`modelValue`,`error-icon`])]),_:1},8,[`code-html`,`code-js`])}var N=_(j,[[`render`,M]]);function P(){return{codeHtml:`<a-input-number
  v-model="model"
  label-position="top"
  label="Input"
  label-description="Aloha"
></a-input-number>
<div>model: {{ model }}</div>`}}function F(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AInputNumber,
} from "aloha-vue";
    
export default {
  name: "PageInputNumberLabelDescription",
  components: {
    AInputNumber,
  },
  setup() {
    const model = ref(10);
    
    return {
      model,
    };
  },
};`}}var I={name:`PageInputNumberLabelDescription`,components:{AInputNumber:h,AlohaExample:m},setup(){let e=u(10),{codeHtml:t}=P(),{codeJs:n}=F();return{codeHtml:t,codeJs:n,model:e}}};function L(e,t,n,o,s,u){let p=d(`a-input-number`),m=d(`aloha-example`);return r(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_`,description:`_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_`,props:[`label-description`]},{default:f(()=>[c(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"label-position":`top`,label:`Input`,"label-description":`Aloha`},null,8,[`modelValue`]),i(`div`,null,`model: `+l(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var R=_(I,[[`render`,L]]);function z(){return{codeHtml:`<a-input-number
  v-model="model"
  label="label-position: float"
  label-position="float"
></a-input-number>
<a-input-number
  v-model="model"
  label="label-position: inset"
  label-position="inset"
></a-input-number>
<a-input-number
  v-model="model"
  label="label-position: top"
  label-position="top"
></a-input-number>
<div>model: {{ model }}</div>`}}function B(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AInputNumber,
} from "aloha-vue";

export default {
  name: "PageInputNumberLabelPosition",
  components: {
    AInputNumber,
  },
  setup() {
    const model = ref(10);

    return {
      model,
    };
  },
};`}}var V={name:`PageInputNumberLabelPosition`,components:{AlohaExample:m,AInputNumber:h},setup(){let e=u(10),t=[`float`,`inset`,`top`],{codeHtml:n}=z(),{codeJs:r}=B();return{codeHtml:n,codeJs:r,labelPositions:t,model:e}}},H={class:`a_columns a_columns_count_12`};function U(e,t,n,u,m,h){let g=d(`a-input-number`),_=d(`aloha-example`);return r(),a(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_LABEL_POSITION_HEADER_`,description:`_A_UI_LABEL_POSITION_DESCRIPTION_`,props:[`label-position`]},{default:f(()=>[i(`div`,H,[(r(!0),s(o,null,p(e.labelPositions,n=>(r(),s(`div`,{class:`a_column a_column_4 a_columns_count_12_touch`,key:n},[c(g,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`label-position: ${n}`,"label-position":n},null,8,[`modelValue`,`label`,`label-position`])]))),128))]),i(`div`,null,`model: `+l(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var W=_(V,[[`render`,U]]);function G(){return{codeHtml:`<a-input-number
  :model-value="model1"
  :readonly="true"
  label="Input 1"
></a-input-number>
<a-input-number
  :model-value="model2"
  :readonly="true"
  class="a_mt_3"
  label="Input 2"
></a-input-number>
<a-input-number
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  label="Input 3"
></a-input-number>
<a-input-number
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  help-text="Aloha"
  label="Input 4"
  readonly-default="-"
></a-input-number>`}}function K(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AInputNumber,
} from "aloha-vue";
    
export default {
  name: "PageInputNumberReadonly",
  components: {
    AInputNumber,
  },
  setup() {
    const model1 = ref(10);
    const model2 = ref(10000);
    const model3 = ref(undefined);
    
    return {
      model1,
      model2,
      model3,
    };
  },
};`}}var q={name:`PageInputNumberReadonly`,components:{AInputNumber:h,AlohaExample:m},setup(){let e=u(10),t=u(1e4),n=u(void 0),{codeHtml:r}=G(),{codeJs:i}=K();return{codeHtml:r,codeJs:i,model1:e,model2:t,model3:n}}};function J(e,t,n,i,o,s){let l=d(`a-input-number`),u=d(`aloha-example`);return r(),a(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_READONLY_HEADER_`,description:`_A_UI_GROUP_READONLY_DESCRIPTION_`,props:[`readonly`,`readonly-default`]},{default:f(()=>[c(l,{"model-value":e.model1,readonly:!0,label:`Input 1`},null,8,[`model-value`]),c(l,{class:`a_mt_3`,"model-value":e.model2,readonly:!0,label:`Input 2`},null,8,[`model-value`]),c(l,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,label:`Input 3`},null,8,[`model-value`]),c(l,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,"help-text":`Aloha`,label:`Input 4`,"readonly-default":`-`},null,8,[`model-value`])]),_:1},8,[`code-html`,`code-js`])}var Y={name:`PageInputNumber`,components:{AInputNumber:h,AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:g,PageInputNumberBasic:O,PageInputNumberLabelPosition:W,PageInputNumberErrorIcon:N,PageInputNumberLabelDescription:R,PageInputNumberReadonly:_(q,[[`render`,J]])},setup(){let{pageTitle:e}=b(),{dataProps:t}=y(),{dataTranslate:n}=x(),{dataEvents:r}=v();return{dataEvents:r,dataProps:t,dataTranslate:n,pageTitle:e}},data(){return{model1:10,model2:123,model3:321,model4:432}},methods:{changeModel1(e){console.log(`arg`,e)}}};function X(e,t,n,o,s,u){let p=d(`a-translation`),m=d(`page-input-number-basic`),h=d(`page-input-number-label-position`),g=d(`page-input-number-error-icon`),_=d(`page-input-number-label-description`),v=d(`page-input-number-readonly`),y=d(`aloha-table-props`),b=d(`aloha-table-translate`),x=d(`a-input-number`),S=d(`aloha-table-css-vars`),C=d(`aloha-page`);return r(),a(C,{"page-title":e.pageTitle},{body:f(()=>[c(p,{tag:`p`,html:`_A_INPUT_NUMBER_COMPONENT_DESCRIPTION_`}),c(m),c(h),c(g),c(_),c(v),c(y,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`]),c(b,{data:e.dataTranslate},null,8,[`data`]),c(x,{id:`input1`,modelValue:e.model1,"onUpdate:modelValue":t[0]||=t=>e.model1=t,type:`number`,label:`Input langeeeeeeeeeeeeeeeeeee textdffdgfdgdsfdsfdsfdsfdsfdsfsdfsfdd`,required:!0,step:2,errors:`not valid`},null,8,[`modelValue`]),i(`div`,null,`model1: `+l(e.model1),1),t[4]||=i(`h2`,null,`type "integerNonNegative"`,-1),c(x,{id:`input2`,modelValue:e.model2,"onUpdate:modelValue":t[1]||=t=>e.model2=t,type:`integerNonNegative`,label:`Input 2`,required:!0,step:2,disabled:!0},null,8,[`modelValue`]),i(`div`,null,`model2: `+l(e.model2),1),t[5]||=i(`h2`,null,`type "integerPositive"`,-1),c(x,{id:`input3`,modelValue:e.model3,"onUpdate:modelValue":t[2]||=t=>e.model3=t,type:`integerPositive`,label:`Input 3`,required:!0,step:3,"controls-type":`none`},null,8,[`modelValue`]),i(`div`,null,`model3: `+l(e.model3),1),t[6]||=i(`h2`,null,`type "integer"`,-1),c(x,{id:`input4`,modelValue:e.model4,"onUpdate:modelValue":t[3]||=t=>e.model4=t,type:`integer`,label:`Input 4`,required:!0,step:4},null,8,[`modelValue`]),i(`div`,null,`model4: `+l(e.model4),1),t[7]||=i(`input`,{type:`number`},null,-1),t[8]||=i(`button`,{class:`a_btn a_btn_primary`},`Temp`,-1),c(S,{files:`components/ui/AInputNumber`})]),_:1},8,[`page-title`])}var Z=_(Y,[[`render`,X]]);export{Z as default};