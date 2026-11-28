import{t as e}from"./chunk.AlohaPage.BvUvrvQ4.js";import{t}from"./chunk.AlohaTableProps.BIN1mKDB.js";import{t as n}from"./chunk.AlohaTableTranslate.ZCrkGUQc.js";import{Cn as r,Ht as i,Rt as a,Vt as o,Wt as s,an as c,gn as l,ln as u,pn as d,qt as f,sn as p}from"./chunk.vendor.SEynj6EJ.js";import{t as m}from"./chunk.AlohaExample.Bx3NX4bX.js";import{$ as h,mn as g,t as _}from"./bundle.index.LlT2KVEy.js";import{i as v,n as y,r as b,t as x}from"./chunk.TranslateAPI.B0AK0HwU.js";function S(){return{codeHtml:`<a-input-number
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
};`}}var w={name:`PageInputNumberBasic`,components:{AInputNumber:h,AlohaExample:m},setup(){let e=l(10),t=l(1e4),n=l(10000.98),{codeHtml:r}=S(),{codeJs:i}=C();return{codeHtml:r,codeJs:i,model1:e,model2:t,model3:n}}},T={class:`a_mb_3`},E={class:`a_mb_3`};function D(e,t,n,a,s,l){let p=u(`a-input-number`),m=u(`aloha-example`);return c(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`label`]},{default:d(()=>[f(p,{modelValue:e.model1,"onUpdate:modelValue":t[0]||=t=>e.model1=t,label:`Input 1`},null,8,[`modelValue`]),o(`div`,T,`model1: `+r(e.model1),1),f(p,{modelValue:e.model2,"onUpdate:modelValue":t[1]||=t=>e.model2=t,label:`Input 2`},null,8,[`modelValue`]),o(`div`,E,`model2: `+r(e.model2),1),f(p,{modelValue:e.model3,"onUpdate:modelValue":t[2]||=t=>e.model3=t,label:`Input 3`},null,8,[`modelValue`]),o(`div`,null,`model3: `+r(e.model3),1)]),_:1},8,[`code-html`,`code-js`])}var O=_(w,[[`render`,D]]);function k(){return{codeHtml:`<a-input-number
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
};`}}var j={name:`PageInputNumberErrorIcon`,components:{AInputNumber:h,AlohaExample:m},setup(){let e=l(25),{codeHtml:t}=k(),{codeJs:n}=A();return{codeHtml:t,codeJs:n,errorIcon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.93 6.588 8.758 10.042a.5.5 0 0 1-.998 0L7.588 6.588a.5.5 0 1 1 .998 0M8 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>`,model:e}}};function M(e,t,n,r,a,o){let s=u(`a-input-number`),l=u(`aloha-example`);return c(),i(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_ERROR_ICON_HEADER_`,description:`_A_UI_GROUP_ERROR_ICON_DESCRIPTION_`,props:[`errors`,`error-icon`]},{default:d(()=>[f(s,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"error-icon":e.errorIcon,errors:`Aloha`,label:`Input number`},null,8,[`modelValue`,`error-icon`])]),_:1},8,[`code-html`,`code-js`])}var N=_(j,[[`render`,M]]);function P(){return{codeHtml:`<a-input-number
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
};`}}var I={name:`PageInputNumberLabelDescription`,components:{AInputNumber:h,AlohaExample:m},setup(){let e=l(10),{codeHtml:t}=P(),{codeJs:n}=F();return{codeHtml:t,codeJs:n,model:e}}};function L(e,t,n,a,s,l){let p=u(`a-input-number`),m=u(`aloha-example`);return c(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_`,description:`_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_`,props:[`label-description`]},{default:d(()=>[f(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"label-position":`top`,label:`Input`,"label-description":`Aloha`},null,8,[`modelValue`]),o(`div`,null,`model: `+r(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var R=_(I,[[`render`,L]]);function z(){return{codeHtml:`<a-input-number
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
};`}}var V={name:`PageInputNumberLabelPosition`,components:{AlohaExample:m,AInputNumber:h},setup(){let e=l(10),t=[`float`,`inset`,`top`],{codeHtml:n}=z(),{codeJs:r}=B();return{codeHtml:n,codeJs:r,labelPositions:t,model:e}}},H={class:`a_columns a_columns_count_12`};function U(e,t,n,l,m,h){let g=u(`a-input-number`),_=u(`aloha-example`);return c(),i(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_LABEL_POSITION_HEADER_`,description:`_A_UI_LABEL_POSITION_DESCRIPTION_`,props:[`label-position`]},{default:d(()=>[o(`div`,H,[(c(!0),s(a,null,p(e.labelPositions,n=>(c(),s(`div`,{class:`a_column a_column_4 a_columns_count_12_touch`,key:n},[f(g,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`label-position: ${n}`,"label-position":n},null,8,[`modelValue`,`label`,`label-position`])]))),128))]),o(`div`,null,`model: `+r(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var W=_(V,[[`render`,U]]);function G(){return{codeHtml:`<a-input-number
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
};`}}var q={name:`PageInputNumberReadonly`,components:{AInputNumber:h,AlohaExample:m},setup(){let e=l(10),t=l(1e4),n=l(void 0),{codeHtml:r}=G(),{codeJs:i}=K();return{codeHtml:r,codeJs:i,model1:e,model2:t,model3:n}}};function J(e,t,n,r,a,o){let s=u(`a-input-number`),l=u(`aloha-example`);return c(),i(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_READONLY_HEADER_`,description:`_A_UI_GROUP_READONLY_DESCRIPTION_`,props:[`readonly`,`readonly-default`]},{default:d(()=>[f(s,{"model-value":e.model1,readonly:!0,label:`Input 1`},null,8,[`model-value`]),f(s,{class:`a_mt_3`,"model-value":e.model2,readonly:!0,label:`Input 2`},null,8,[`model-value`]),f(s,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,label:`Input 3`},null,8,[`model-value`]),f(s,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,"help-text":`Aloha`,label:`Input 4`,"readonly-default":`-`},null,8,[`model-value`])]),_:1},8,[`code-html`,`code-js`])}var Y={name:`PageInputNumber`,components:{AInputNumber:h,AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:g,PageInputNumberBasic:O,PageInputNumberLabelPosition:W,PageInputNumberErrorIcon:N,PageInputNumberLabelDescription:R,PageInputNumberReadonly:_(q,[[`render`,J]])},setup(){let{pageTitle:e}=b(),{dataProps:t}=y(),{dataTranslate:n}=x(),{dataEvents:r}=v();return{dataEvents:r,dataProps:t,dataTranslate:n,pageTitle:e}},data(){return{model1:10,model2:123,model3:321,model4:432}},methods:{changeModel1(e){console.log(`arg`,e)}}};function X(e,t,n,a,s,l){let p=u(`a-translation`),m=u(`page-input-number-basic`),h=u(`page-input-number-label-position`),g=u(`page-input-number-error-icon`),_=u(`page-input-number-label-description`),v=u(`page-input-number-readonly`),y=u(`aloha-table-props`),b=u(`aloha-table-translate`),x=u(`a-input-number`),S=u(`aloha-table-css-vars`),C=u(`aloha-page`);return c(),i(C,{"page-title":e.pageTitle},{body:d(()=>[f(p,{tag:`p`,html:`_A_INPUT_NUMBER_COMPONENT_DESCRIPTION_`}),f(m),f(h),f(g),f(_),f(v),f(y,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`]),f(b,{data:e.dataTranslate},null,8,[`data`]),f(x,{id:`input1`,modelValue:e.model1,"onUpdate:modelValue":t[0]||=t=>e.model1=t,type:`number`,label:`Input langeeeeeeeeeeeeeeeeeee textdffdgfdgdsfdsfdsfdsfdsfdsfsdfsfdd`,required:!0,step:2,errors:`not valid`},null,8,[`modelValue`]),o(`div`,null,`model1: `+r(e.model1),1),t[4]||=o(`h2`,null,`type "integerNonNegative"`,-1),f(x,{id:`input2`,modelValue:e.model2,"onUpdate:modelValue":t[1]||=t=>e.model2=t,type:`integerNonNegative`,label:`Input 2`,required:!0,step:2,disabled:!0},null,8,[`modelValue`]),o(`div`,null,`model2: `+r(e.model2),1),t[5]||=o(`h2`,null,`type "integerPositive"`,-1),f(x,{id:`input3`,modelValue:e.model3,"onUpdate:modelValue":t[2]||=t=>e.model3=t,type:`integerPositive`,label:`Input 3`,required:!0,step:3,"controls-type":`none`},null,8,[`modelValue`]),o(`div`,null,`model3: `+r(e.model3),1),t[6]||=o(`h2`,null,`type "integer"`,-1),f(x,{id:`input4`,modelValue:e.model4,"onUpdate:modelValue":t[3]||=t=>e.model4=t,type:`integer`,label:`Input 4`,required:!0,step:4},null,8,[`modelValue`]),o(`div`,null,`model4: `+r(e.model4),1),t[7]||=o(`input`,{type:`number`},null,-1),t[8]||=o(`button`,{class:`a_btn a_btn_primary`},`Temp`,-1),f(S,{files:`components/ui/AInputNumber`})]),_:1},8,[`page-title`])}var Z=_(Y,[[`render`,X]]);export{Z as default};