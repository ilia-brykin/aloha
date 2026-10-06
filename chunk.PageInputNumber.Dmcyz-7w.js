import{$t as e,Tt as t,Ut as n,Yt as r,kt as i,qt as a,wt as o,zt as s}from"./chunk.vendor.CZPox1kV.js";import{K as c,Z as l,t as u}from"./bundle.index.BmSiyQNH.js";import{n as d,t as f}from"./chunk.AlohaExample.CD4LlhAz.js";import{t as p}from"./chunk.AlohaTableProps.Dksi7fmb.js";import{t as m}from"./chunk.AlohaTableTranslate.C-b2Nle9.js";import{i as h,n as g,r as _,t as v}from"./chunk.TranslateAPI.DXP7YutG.js";function y(){return{codeHtml:`<a-input-number
  v-model="model1"
  label="Input 1"
></a-input-number>
<div>model1: {{ model1 }}</div>
<a-input-number
  v-model="model2"
  label="Input 2"
></a-input-number>
<div>model2: {{ model2 }}</div>
<a-input-number
  v-model="model3"
  label="Input 3"
></a-input-number>
<div>model3: {{ model3 }}</div>`}}function b(){return{codeJs:`import {
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
};`}}var x={name:`PageInputNumberBasic`,components:{AInputNumber:c,AlohaExample:f},setup(){let e=r(10),t=r(1e4),n=r(10000.98),{codeHtml:i}=y(),{codeJs:a}=b();return{codeHtml:i,codeJs:a,model1:e,model2:t,model3:n}}};function S(r,c,l,u,d,f){let p=n(`a-input-number`),m=n(`aloha-example`);return s(),t(m,{"code-html":r.codeHtml,"code-js":r.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`label`]},{default:a(()=>[i(p,{modelValue:r.model1,"onUpdate:modelValue":c[0]||=e=>r.model1=e,label:`Input 1`},null,8,[`modelValue`]),o(`div`,null,`model1: `+e(r.model1),1),i(p,{modelValue:r.model2,"onUpdate:modelValue":c[1]||=e=>r.model2=e,label:`Input 2`},null,8,[`modelValue`]),o(`div`,null,`model2: `+e(r.model2),1),i(p,{modelValue:r.model3,"onUpdate:modelValue":c[2]||=e=>r.model3=e,label:`Input 3`},null,8,[`modelValue`]),o(`div`,null,`model3: `+e(r.model3),1)]),_:1},8,[`code-html`,`code-js`])}var C=u(x,[[`render`,S]]);function w(){return{codeHtml:`<a-input-number
  v-model="model"
  :error-icon="errorIcon"
  errors="Aloha"
  label="Input number"
></a-input-number>`}}function T(){return{codeJs:`import {
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
};`}}var E={name:`PageInputNumberErrorIcon`,components:{AInputNumber:c,AlohaExample:f},setup(){let e=r(25),{codeHtml:t}=w(),{codeJs:n}=T();return{codeHtml:t,codeJs:n,errorIcon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.93 6.588 8.758 10.042a.5.5 0 0 1-.998 0L7.588 6.588a.5.5 0 1 1 .998 0M8 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>`,model:e}}};function D(e,r,o,c,l,u){let d=n(`a-input-number`),f=n(`aloha-example`);return s(),t(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_ERROR_ICON_HEADER_`,description:`_A_UI_GROUP_ERROR_ICON_DESCRIPTION_`,props:[`errors`,`error-icon`]},{default:a(()=>[i(d,{modelValue:e.model,"onUpdate:modelValue":r[0]||=t=>e.model=t,"error-icon":e.errorIcon,errors:`Aloha`,label:`Input number`},null,8,[`modelValue`,`error-icon`])]),_:1},8,[`code-html`,`code-js`])}var O=u(E,[[`render`,D]]);function k(){return{codeHtml:`<a-input-number
  v-model="model"
  :is-label-float="false"
  label="Input"
  label-description="Aloha"
></a-input-number>
<div>model: {{ model }}</div>`}}function A(){return{codeJs:`import {
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
};`}}var j={name:`PageInputNumberLabelDescription`,components:{AInputNumber:c,AlohaExample:f},setup(){let e=r(10),{codeHtml:t}=k(),{codeJs:n}=A();return{codeHtml:t,codeJs:n,model:e}}};function M(r,c,l,u,d,f){let p=n(`a-input-number`),m=n(`aloha-example`);return s(),t(m,{"code-html":r.codeHtml,"code-js":r.codeJs,header:`_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_`,description:`_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_`,props:[`label-description`]},{default:a(()=>[i(p,{modelValue:r.model,"onUpdate:modelValue":c[0]||=e=>r.model=e,"is-label-float":!1,label:`Input`,"label-description":`Aloha`},null,8,[`modelValue`]),o(`div`,null,`model: `+e(r.model),1)]),_:1},8,[`code-html`,`code-js`])}var N=u(j,[[`render`,M]]);function P(){return{codeHtml:`<a-input-number
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
></a-input-number>`}}function F(){return{codeJs:`import {
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
};`}}var I={name:`PageInputNumberReadonly`,components:{AInputNumber:c,AlohaExample:f},setup(){let e=r(10),t=r(1e4),n=r(void 0),{codeHtml:i}=P(),{codeJs:a}=F();return{codeHtml:i,codeJs:a,model1:e,model2:t,model3:n}}};function L(e,r,o,c,l,u){let d=n(`a-input-number`),f=n(`aloha-example`);return s(),t(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_READONLY_HEADER_`,description:`_A_UI_GROUP_READONLY_DESCRIPTION_`,props:[`readonly`,`readonly-default`]},{default:a(()=>[i(d,{"model-value":e.model1,readonly:!0,label:`Input 1`},null,8,[`model-value`]),i(d,{class:`a_mt_3`,"model-value":e.model2,readonly:!0,label:`Input 2`},null,8,[`model-value`]),i(d,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,label:`Input 3`},null,8,[`model-value`]),i(d,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,"help-text":`Aloha`,label:`Input 4`,"readonly-default":`-`},null,8,[`model-value`])]),_:1},8,[`code-html`,`code-js`])}var R={name:`PageInputNumber`,components:{AInputNumber:c,AlohaPage:d,AlohaTableProps:p,AlohaTableTranslate:m,ATranslation:l,PageInputNumberBasic:C,PageInputNumberErrorIcon:O,PageInputNumberLabelDescription:N,PageInputNumberReadonly:u(I,[[`render`,L]])},setup(){let{pageTitle:e}=_(),{dataProps:t}=g(),{dataTranslate:n}=v(),{dataEvents:r}=h();return{dataEvents:r,dataProps:t,dataTranslate:n,pageTitle:e}},data(){return{model1:10,model2:123,model3:321,model4:432}},methods:{changeModel1(e){console.log(`arg`,e)}}};function z(r,c,l,u,d,f){let p=n(`a-translation`),m=n(`page-input-number-basic`),h=n(`page-input-number-error-icon`),g=n(`page-input-number-label-description`),_=n(`page-input-number-readonly`),v=n(`aloha-table-props`),y=n(`aloha-table-translate`),b=n(`a-input-number`),x=n(`aloha-page`);return s(),t(x,{"page-title":r.pageTitle},{body:a(()=>[i(p,{tag:`p`,html:`_A_INPUT_NUMBER_COMPONENT_DESCRIPTION_`}),i(m),i(h),i(g),i(_),i(v,{"table-label":`Events`,data:r.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`]),i(y,{data:r.dataTranslate},null,8,[`data`]),i(b,{id:`input1`,modelValue:r.model1,"onUpdate:modelValue":c[0]||=e=>r.model1=e,type:`number`,label:`Input langeeeeeeeeeeeeeeeeeee textdffdgfdgdsfdsfdsfdsfdsfdsfsdfsfdd`,required:!0,step:2,errors:`not valid`},null,8,[`modelValue`]),o(`div`,null,`model1: `+e(r.model1),1),c[4]||=o(`h2`,null,`type "integerNonNegative"`,-1),i(b,{id:`input2`,modelValue:r.model2,"onUpdate:modelValue":c[1]||=e=>r.model2=e,type:`integerNonNegative`,label:`Input 2`,required:!0,step:2,disabled:!0},null,8,[`modelValue`]),o(`div`,null,`model2: `+e(r.model2),1),c[5]||=o(`h2`,null,`type "integerPositive"`,-1),i(b,{id:`input3`,modelValue:r.model3,"onUpdate:modelValue":c[2]||=e=>r.model3=e,type:`integerPositive`,label:`Input 3`,required:!0,step:3,"controls-type":`none`},null,8,[`modelValue`]),o(`div`,null,`model3: `+e(r.model3),1),c[6]||=o(`h2`,null,`type "integer"`,-1),i(b,{id:`input4`,modelValue:r.model4,"onUpdate:modelValue":c[3]||=e=>r.model4=e,type:`integer`,label:`Input 4`,required:!0,step:4},null,8,[`modelValue`]),o(`div`,null,`model4: `+e(r.model4),1),c[7]||=o(`input`,{type:`number`},null,-1),c[8]||=o(`button`,{class:`a_btn a_btn_primary`},`Temp`,-1)]),_:1},8,[`page-title`])}var B=u(R,[[`render`,z]]);export{B as default};