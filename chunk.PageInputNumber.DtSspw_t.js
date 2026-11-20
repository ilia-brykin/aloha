import{t as e}from"./chunk.AlohaPage.yLRZ4vv4.js";import{t}from"./chunk.AlohaTableProps.CgAJv3yu.js";import{t as n}from"./chunk.AlohaTableTranslate.D8OjOT3u.js";import{Ft as r,It as i,Mt as a,Qt as o,Rt as s,Vt as c,cn as l,en as u,mn as d,nn as f,on as p}from"./chunk.vendor.CTxSDDRk.js";import{t as m}from"./chunk.AlohaExample.BUm8D4me.js";import{X as h,it as g}from"./bundle.index.DdSVYuNk.js";import{t as _}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";import{i as v,n as y,r as b,t as x}from"./chunk.TranslateAPI.CSAIRLsv.js";function S(){return{codeHtml:`<a-input-number
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
};`}}var w={name:`PageInputNumberBasic`,components:{AInputNumber:h,AlohaExample:m},setup(){let e=l(10),t=l(1e4),n=l(10000.98),{codeHtml:r}=S(),{codeJs:i}=C();return{codeHtml:r,codeJs:i,model1:e,model2:t,model3:n}}},T={class:`a_mb_3`},E={class:`a_mb_3`};function D(e,t,n,a,s,l){let u=f(`a-input-number`),m=f(`aloha-example`);return o(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`label`]},{default:p(()=>[c(u,{modelValue:e.model1,"onUpdate:modelValue":t[0]||=t=>e.model1=t,label:`Input 1`},null,8,[`modelValue`]),r(`div`,T,`model1: `+d(e.model1),1),c(u,{modelValue:e.model2,"onUpdate:modelValue":t[1]||=t=>e.model2=t,label:`Input 2`},null,8,[`modelValue`]),r(`div`,E,`model2: `+d(e.model2),1),c(u,{modelValue:e.model3,"onUpdate:modelValue":t[2]||=t=>e.model3=t,label:`Input 3`},null,8,[`modelValue`]),r(`div`,null,`model3: `+d(e.model3),1)]),_:1},8,[`code-html`,`code-js`])}var O=_(w,[[`render`,D]]);function k(){return{codeHtml:`<a-input-number
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
};`}}var j={name:`PageInputNumberErrorIcon`,components:{AInputNumber:h,AlohaExample:m},setup(){let e=l(25),{codeHtml:t}=k(),{codeJs:n}=A();return{codeHtml:t,codeJs:n,errorIcon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.93 6.588 8.758 10.042a.5.5 0 0 1-.998 0L7.588 6.588a.5.5 0 1 1 .998 0M8 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>`,model:e}}};function M(e,t,n,r,a,s){let l=f(`a-input-number`),u=f(`aloha-example`);return o(),i(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_ERROR_ICON_HEADER_`,description:`_A_UI_GROUP_ERROR_ICON_DESCRIPTION_`,props:[`errors`,`error-icon`]},{default:p(()=>[c(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"error-icon":e.errorIcon,errors:`Aloha`,label:`Input number`},null,8,[`modelValue`,`error-icon`])]),_:1},8,[`code-html`,`code-js`])}var N=_(j,[[`render`,M]]);function P(){return{codeHtml:`<a-input-number
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
};`}}var I={name:`PageInputNumberLabelDescription`,components:{AInputNumber:h,AlohaExample:m},setup(){let e=l(10),{codeHtml:t}=P(),{codeJs:n}=F();return{codeHtml:t,codeJs:n,model:e}}};function L(e,t,n,a,s,l){let u=f(`a-input-number`),m=f(`aloha-example`);return o(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_`,description:`_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_`,props:[`label-description`]},{default:p(()=>[c(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"label-position":`top`,label:`Input`,"label-description":`Aloha`},null,8,[`modelValue`]),r(`div`,null,`model: `+d(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var R=_(I,[[`render`,L]]);function z(){return{codeHtml:`<a-input-number
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
};`}}var V={name:`PageInputNumberLabelPosition`,components:{AlohaExample:m,AInputNumber:h},setup(){let e=l(10),t=[`float`,`inset`,`top`],{codeHtml:n}=z(),{codeJs:r}=B();return{codeHtml:n,codeJs:r,labelPositions:t,model:e}}},H={class:`a_columns a_columns_count_12`};function U(e,t,n,l,m,h){let g=f(`a-input-number`),_=f(`aloha-example`);return o(),i(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_LABEL_POSITION_HEADER_`,description:`_A_UI_LABEL_POSITION_DESCRIPTION_`,props:[`label-position`]},{default:p(()=>[r(`div`,H,[(o(!0),s(a,null,u(e.labelPositions,n=>(o(),s(`div`,{class:`a_column a_column_4 a_columns_count_12_touch`,key:n},[c(g,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`label-position: ${n}`,"label-position":n},null,8,[`modelValue`,`label`,`label-position`])]))),128))]),r(`div`,null,`model: `+d(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var W=_(V,[[`render`,U]]);function G(){return{codeHtml:`<a-input-number
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
};`}}var q={name:`PageInputNumberReadonly`,components:{AInputNumber:h,AlohaExample:m},setup(){let e=l(10),t=l(1e4),n=l(void 0),{codeHtml:r}=G(),{codeJs:i}=K();return{codeHtml:r,codeJs:i,model1:e,model2:t,model3:n}}};function J(e,t,n,r,a,s){let l=f(`a-input-number`),u=f(`aloha-example`);return o(),i(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_READONLY_HEADER_`,description:`_A_UI_GROUP_READONLY_DESCRIPTION_`,props:[`readonly`,`readonly-default`]},{default:p(()=>[c(l,{"model-value":e.model1,readonly:!0,label:`Input 1`},null,8,[`model-value`]),c(l,{class:`a_mt_3`,"model-value":e.model2,readonly:!0,label:`Input 2`},null,8,[`model-value`]),c(l,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,label:`Input 3`},null,8,[`model-value`]),c(l,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,"help-text":`Aloha`,label:`Input 4`,"readonly-default":`-`},null,8,[`model-value`])]),_:1},8,[`code-html`,`code-js`])}var Y={name:`PageInputNumber`,components:{AInputNumber:h,AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:g,PageInputNumberBasic:O,PageInputNumberLabelPosition:W,PageInputNumberErrorIcon:N,PageInputNumberLabelDescription:R,PageInputNumberReadonly:_(q,[[`render`,J]])},setup(){let{pageTitle:e}=b(),{dataProps:t}=y(),{dataTranslate:n}=x(),{dataEvents:r}=v();return{dataEvents:r,dataProps:t,dataTranslate:n,pageTitle:e}},data(){return{model1:10,model2:123,model3:321,model4:432}},methods:{changeModel1(e){console.log(`arg`,e)}}};function X(e,t,n,a,s,l){let u=f(`a-translation`),m=f(`page-input-number-basic`),h=f(`page-input-number-label-position`),g=f(`page-input-number-error-icon`),_=f(`page-input-number-label-description`),v=f(`page-input-number-readonly`),y=f(`aloha-table-props`),b=f(`aloha-table-translate`),x=f(`a-input-number`),S=f(`aloha-table-css-vars`),C=f(`aloha-page`);return o(),i(C,{"page-title":e.pageTitle},{body:p(()=>[c(u,{tag:`p`,html:`_A_INPUT_NUMBER_COMPONENT_DESCRIPTION_`}),c(m),c(h),c(g),c(_),c(v),c(y,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`]),c(b,{data:e.dataTranslate},null,8,[`data`]),c(x,{id:`input1`,modelValue:e.model1,"onUpdate:modelValue":t[0]||=t=>e.model1=t,type:`number`,label:`Input langeeeeeeeeeeeeeeeeeee textdffdgfdgdsfdsfdsfdsfdsfdsfsdfsfdd`,required:!0,step:2,errors:`not valid`},null,8,[`modelValue`]),r(`div`,null,`model1: `+d(e.model1),1),t[4]||=r(`h2`,null,`type "integerNonNegative"`,-1),c(x,{id:`input2`,modelValue:e.model2,"onUpdate:modelValue":t[1]||=t=>e.model2=t,type:`integerNonNegative`,label:`Input 2`,required:!0,step:2,disabled:!0},null,8,[`modelValue`]),r(`div`,null,`model2: `+d(e.model2),1),t[5]||=r(`h2`,null,`type "integerPositive"`,-1),c(x,{id:`input3`,modelValue:e.model3,"onUpdate:modelValue":t[2]||=t=>e.model3=t,type:`integerPositive`,label:`Input 3`,required:!0,step:3,"controls-type":`none`},null,8,[`modelValue`]),r(`div`,null,`model3: `+d(e.model3),1),t[6]||=r(`h2`,null,`type "integer"`,-1),c(x,{id:`input4`,modelValue:e.model4,"onUpdate:modelValue":t[3]||=t=>e.model4=t,type:`integer`,label:`Input 4`,required:!0,step:4},null,8,[`modelValue`]),r(`div`,null,`model4: `+d(e.model4),1),t[7]||=r(`input`,{type:`number`},null,-1),t[8]||=r(`button`,{class:`a_btn a_btn_primary`},`Temp`,-1),c(S,{files:`components/ui/AInputNumber`})]),_:1},8,[`page-title`])}var Z=_(Y,[[`render`,X]]);export{Z as default};