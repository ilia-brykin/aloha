import{t as e}from"./chunk.AlohaPage.CGhnIZx5.js";import{t}from"./chunk.AlohaTableProps.BMz2Ai1Q.js";import{t as n}from"./chunk.AlohaTableTranslate.DBbeOkKL.js";import{$t as r,Bt as i,Ft as a,It as o,Mt as ee,Pt as s,Rt as c,Zt as l,an as u,pn as d,sn as f,tn as p}from"./chunk.vendor.H0cZuFAV.js";import{t as m}from"./chunk.AlohaExample.G_MpJRbw.js";import{$ as h,Wt as g,it as _}from"./bundle.index.DOd3SFOf.js";import{t as v}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function y(){return{codeHtml:`<a-input-currency
  v-model="model"
  label="Input"
></a-input-currency>
<div>model: {{ model }}</div>`}}function b(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AInputCurrency,
} from "aloha-vue";
    
export default {
  name: "PageInputCurrencyBasic",
  components: {
    AInputCurrency,
  },
  setup() {
    const model = ref(10.02);
    
    return {
      model,
    };
  },
};`}}var x={name:`PageInputCurrencyBasic`,components:{AInputCurrency:h,AlohaExample:m},setup(){let e=f(10.02),{codeHtml:t}=y(),{codeJs:n}=b();return{codeHtml:t,codeJs:n,model:e}}};function S(e,t,n,r,ee,s){let c=p(`a-input-currency`),f=p(`aloha-example`);return l(),o(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`label`]},{default:u(()=>[i(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`Input`},null,8,[`modelValue`]),a(`div`,null,`model: `+d(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var C=v(x,[[`render`,S]]);function w(){return{codeHtml:`<a-input-currency
  :change="changeModel"
  :model-value="model"
  label="Input"
></a-input-currency>
<div>model: {{ model }}</div>`}}function T(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AInputCurrency,
} from "aloha-vue";
    
export default {
  name: "PageInputCurrencyChange",
  components: {
    AInputCurrency,
  },
  setup() {
    const model = ref(10.02);
    
    const changeModel = ({ model: _model, id, props }) => {
      model.value = _model;
      console.log(id, props);
    };
    
    return {
      changeModel,
      model,
    };
  },
};`}}var E={name:`PageInputCurrencyChange`,components:{AInputCurrency:h,AlohaExample:m},setup(){let e=f(10.02),t=({model:t,id:n,props:r})=>{e.value=t,console.log(n,r)},{codeHtml:n}=w(),{codeJs:r}=T();return{changeModel:t,codeHtml:n,codeJs:r,model:e}}};function D(e,t,n,r,ee,s){let c=p(`a-input-currency`),f=p(`aloha-example`);return l(),o(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_CHANGE_HEADER_`,description:`_A_UI_GROUP_CHANGE_DESCRIPTION_`,props:[`change`,`model-value`]},{default:u(()=>[i(c,{change:e.changeModel,"model-value":e.model,label:`Input`},null,8,[`change`,`model-value`]),a(`div`,null,`model: `+d(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var O=v(E,[[`render`,D]]);function k(){return{codeHtml:`<a-input-currency
  v-model="model"
  controls-type="none"
  label="Input"
></a-input-currency>
<a-input-currency
  v-model="model"
  class="a_mt_3"
  controls-type="plus-minus"
  label="Input"
></a-input-currency>
<div>model: {{ model }}</div>`}}function A(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AInputCurrency,
} from "aloha-vue";
    
export default {
  name: "PageInputCurrencyControlsType",
  components: {
    AInputCurrency,
  },
  setup() {
    const model = ref(10.02);
    
    return {
      model,
    };
  },
};`}}var te={name:`PageInputCurrencyControlsType`,components:{AInputCurrency:h,AlohaExample:m},setup(){let e=f(10.02),{codeHtml:t}=k(),{codeJs:n}=A();return{codeHtml:t,codeJs:n,model:e}}};function j(e,t,n,r,ee,s){let c=p(`a-input-currency`),f=p(`aloha-example`);return l(),o(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_CURRENCY_GROUP_CONTROLS_TYPE_HEADER_`,description:`_A_INPUT_CURRENCY_GROUP_CONTROLS_TYPE_DESCRIPTION_`,props:[`controls-type`]},{default:u(()=>[i(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"controls-type":`none`,label:`Input`},null,8,[`modelValue`]),i(c,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,"controls-type":`plus-minus`,label:`Input`},null,8,[`modelValue`]),a(`div`,null,`model: `+d(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var M=v(te,[[`render`,j]]);function N(){return{codeHtml:`<a-input-currency
  v-model="model"
  decimal-divider=","
  thousand-divider="."
  label="Input"
></a-input-currency>
<a-input-currency
  v-model="model"
  class="a_mt_3"
  decimal-divider="."
  thousand-divider=","
  label="Input"
></a-input-currency>
<div>model: {{ model }}</div>`}}function P(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AInputCurrency,
} from "aloha-vue";
    
export default {
  name: "PageInputCurrencyDecimalDivider",
  components: {
    AInputCurrency,
  },
  setup() {
    const model = ref(10.02);
    
    return {
      model,
    };
  },
};`}}var F={name:`PageInputCurrencyDecimalDivider`,components:{AInputCurrency:h,AlohaExample:m},setup(){let e=f(10.02),{codeHtml:t}=N(),{codeJs:n}=P();return{codeHtml:t,codeJs:n,model:e}}};function I(e,t,n,r,ee,s){let c=p(`a-input-currency`),f=p(`aloha-example`);return l(),o(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_CURRENCY_GROUP_DECIMAL_DIVIDER_HEADER_`,description:`_A_INPUT_CURRENCY_GROUP_DECIMAL_DIVIDER_DESCRIPTION_`,props:[`decimal-divider`]},{default:u(()=>[i(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"decimal-divider":`,`,"thousand-divider":`.`,label:`Input`},null,8,[`modelValue`]),i(c,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,"decimal-divider":`.`,"thousand-divider":`,`,label:`Input`},null,8,[`modelValue`]),a(`div`,null,`model: `+d(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var L=v(F,[[`render`,I]]);function R(){return{codeHtml:`<a-input-currency
  v-model="model"
  :decimal-part-length="0"
  label="decimal-part-length 0"
></a-input-currency>
<a-input-currency
  v-model="model"
  :decimal-part-length="1"
  class="a_mt_3"
  label="decimal-part-length 1"
></a-input-currency>
<a-input-currency
  v-model="model"
  :decimal-part-length="2"
  class="a_mt_3"
  label="decimal-part-length 2"
></a-input-currency>
<a-input-currency
  v-model="model"
  :decimal-part-length="4"
  class="a_mt_3"
  label="decimal-part-length 4"
></a-input-currency>
<div>model: {{ model }}</div>`}}function z(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AInputCurrency,
} from "aloha-vue";
    
export default {
  name: "PageInputCurrencyDecimalPartLength",
  components: {
    AInputCurrency,
  },
  setup() {
    const model = ref(10.02);
    
    return {
      model,
    };
  },
};`}}var B={name:`PageInputCurrencyDecimalPartLength`,components:{AInputCurrency:h,AlohaExample:m},setup(){let e=f(10.02),{codeHtml:t}=R(),{codeJs:n}=z();return{codeHtml:t,codeJs:n,model:e}}};function V(e,t,n,r,ee,s){let c=p(`a-input-currency`),f=p(`aloha-example`);return l(),o(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_CURRENCY_GROUP_DECIMAL_PART_LENGTH_HEADER_`,description:`_A_INPUT_CURRENCY_GROUP_DECIMAL_PART_LENGTH_DESCRIPTION_`,props:[`decimal-part-length`]},{default:u(()=>[i(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"decimal-part-length":0,label:`decimal-part-length 0`},null,8,[`modelValue`]),i(c,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,"decimal-part-length":1,label:`decimal-part-length 1`},null,8,[`modelValue`]),i(c,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[2]||=t=>e.model=t,"decimal-part-length":2,label:`decimal-part-length 2`},null,8,[`modelValue`]),i(c,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[3]||=t=>e.model=t,"decimal-part-length":4,label:`decimal-part-length 4`},null,8,[`modelValue`]),a(`div`,null,`model: `+d(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var H=v(B,[[`render`,V]]);function U(){return{codeHtml:`<a-input-currency
  v-model="model"
  :error-icon="errorIcon"
  errors="Aloha"
  label="Input currency"
></a-input-currency>`}}function W(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AInputCurrency,
} from "aloha-vue";

export default {
  name: "PageInputCurrencyErrorIcon",
  components: {
    AInputCurrency,
  },
  setup() {
    const model = ref(245);
    const errorIcon = "<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"16\\" height=\\"16\\" fill=\\"currentColor\\" viewBox=\\"0 0 16 16\\"><path d=\\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.93 6.588 8.758 10.042a.5.5 0 0 1-.998 0L7.588 6.588a.5.5 0 1 1 .998 0M8 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2\\"/></svg>";

    return {
      errorIcon,
      model,
    };
  },
};`}}var G={name:`PageInputCurrencyErrorIcon`,components:{AInputCurrency:h,AlohaExample:m},setup(){let e=f(245),{codeHtml:t}=U(),{codeJs:n}=W();return{codeHtml:t,codeJs:n,errorIcon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.93 6.588 8.758 10.042a.5.5 0 0 1-.998 0L7.588 6.588a.5.5 0 1 1 .998 0M8 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>`,model:e}}};function K(e,t,n,r,a,ee){let s=p(`a-input-currency`),c=p(`aloha-example`);return l(),o(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_ERROR_ICON_HEADER_`,description:`_A_UI_GROUP_ERROR_ICON_DESCRIPTION_`,props:[`errors`,`error-icon`]},{default:u(()=>[i(s,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"error-icon":e.errorIcon,errors:`Aloha`,label:`Input currency`},null,8,[`modelValue`,`error-icon`])]),_:1},8,[`code-html`,`code-js`])}var q=v(G,[[`render`,K]]);function J(){return{codeHtml:`<a-input-currency
  v-model="model"
  errors="Aloha"
  label="Input"
></a-input-currency>
<div>model: {{ model }}</div>`}}function Y(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AInputCurrency,
} from "aloha-vue";
    
export default {
  name: "PageInputCurrencyErrors",
  components: {
    AInputCurrency,
  },
  setup() {
    const model = ref(10.02);
    
    return {
      model,
    };
  },
};`}}var X={name:`PageInputCurrencyErrors`,components:{AInputCurrency:h,AlohaExample:m},setup(){let e=f(10.02),{codeHtml:t}=J(),{codeJs:n}=Y();return{codeHtml:t,codeJs:n,model:e}}};function Z(e,t,n,r,ee,s){let c=p(`a-input-currency`),f=p(`aloha-example`);return l(),o(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_ERRORS_HEADER_`,description:`_A_UI_GROUP_ERRORS_DESCRIPTION_`,props:[`errors`]},{default:u(()=>[i(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,errors:`Aloha`,label:`Input`},null,8,[`modelValue`]),a(`div`,null,`model: `+d(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var Q=v(X,[[`render`,Z]]);function ne(){return{codeHtml:`<a-input-currency
  v-model="model"
  help-text="Aloha"
  label="Input"
></a-input-currency>
<div>model: {{ model }}</div>`}}function re(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AInputCurrency,
} from "aloha-vue";
    
export default {
  name: "PageInputCurrencyHelpText",
  components: {
    AInputCurrency,
  },
  setup() {
    const model = ref(10.02);
    
    return {
      model,
    };
  },
};`}}var ie={name:`PageInputCurrencyHelpText`,components:{AInputCurrency:h,AlohaExample:m},setup(){let e=f(10.02),{codeHtml:t}=ne(),{codeJs:n}=re();return{codeHtml:t,codeJs:n,model:e}}};function ae(e,t,n,r,ee,s){let c=p(`a-input-currency`),f=p(`aloha-example`);return l(),o(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_HELP_TEXT_HEADER_`,description:`_A_UI_GROUP_HELP_TEXT_DESCRIPTION_`,props:[`help-text`]},{default:u(()=>[i(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"help-text":`Aloha`,label:`Input`},null,8,[`modelValue`]),a(`div`,null,`model: `+d(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var oe=v(ie,[[`render`,ae]]);function se(){return{codeHtml:`<a-input-currency
  v-model="model"
  label-position="top"
  label="Input"
  label-description="Aloha"
></a-input-currency>
<div>model: {{ model }}</div>`}}function ce(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AInputCurrency,
} from "aloha-vue";
    
export default {
  name: "PageInputCurrencyLabelDescription",
  components: {
    AInputCurrency,
  },
  setup() {
    const model = ref(10.02);
    
    return {
      model,
    };
  },
};`}}var le={name:`PageInputCurrencyLabelDescription`,components:{AInputCurrency:h,AlohaExample:m},setup(){let e=f(10.02),{codeHtml:t}=se(),{codeJs:n}=ce();return{codeHtml:t,codeJs:n,model:e}}};function ue(e,t,n,r,ee,s){let c=p(`a-input-currency`),f=p(`aloha-example`);return l(),o(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_`,description:`_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_`,props:[`label-description`]},{default:u(()=>[i(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"label-position":`top`,label:`Input`,"label-description":`Aloha`},null,8,[`modelValue`]),a(`div`,null,`model: `+d(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var de=v(le,[[`render`,ue]]);function fe(){return{codeHtml:`<a-input-currency
  v-model="model"
  label="label-position: float"
  label-position="float"
></a-input-currency>
<a-input-currency
  v-model="model"
  label="label-position: inset"
  label-position="inset"
></a-input-currency>
<a-input-currency
  v-model="model"
  label="label-position: top"
  label-position="top"
></a-input-currency>
<div>model: {{ model }}</div>`}}function pe(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AInputCurrency,
} from "aloha-vue";

export default {
  name: "PageInputCurrencyLabelPosition",
  components: {
    AInputCurrency,
  },
  setup() {
    const model = ref(10.02);

    return {
      model,
    };
  },
};`}}var me={name:`PageInputCurrencyLabelPosition`,components:{AlohaExample:m,AInputCurrency:h},setup(){let e=f(10.02),t=[`float`,`inset`,`top`],{codeHtml:n}=fe(),{codeJs:r}=pe();return{codeHtml:n,codeJs:r,labelPositions:t,model:e}}},he={class:`a_columns a_columns_count_12`};function ge(e,t,n,s,f,m){let h=p(`a-input-currency`),g=p(`aloha-example`);return l(),o(g,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_LABEL_POSITION_HEADER_`,description:`_A_UI_LABEL_POSITION_DESCRIPTION_`,props:[`label-position`]},{default:u(()=>[a(`div`,he,[(l(!0),c(ee,null,r(e.labelPositions,n=>(l(),c(`div`,{class:`a_column a_column_4 a_columns_count_12_touch`,key:n},[i(h,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`label-position: ${n}`,"label-position":n},null,8,[`modelValue`,`label`,`label-position`])]))),128))]),a(`div`,null,`model: `+d(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var _e=v(me,[[`render`,ge]]);function ve(){return{codeHtml:`<a-input-currency
  v-model="model"
  label="Input"
></a-input-currency>
<a-input-currency
  v-model="model"
  class="a_mt_3"
  label-screen-reader="Input"
></a-input-currency>
<div>model: {{ model }}</div>`}}function ye(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AInputCurrency,
} from "aloha-vue";
    
export default {
  name: "PageInputCurrencyLabelScreenReader",
  components: {
    AInputCurrency,
  },
  setup() {
    const model = ref(10.02);
    
    return {
      model,
    };
  },
};`}}var be={name:`PageInputCurrencyLabelScreenReader`,components:{AInputCurrency:h,AlohaExample:m},setup(){let e=f(10.02),{codeHtml:t}=ve(),{codeJs:n}=ye();return{codeHtml:t,codeJs:n,model:e}}};function xe(e,t,n,r,ee,s){let c=p(`a-input-currency`),f=p(`aloha-example`);return l(),o(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_LABEL_SCREEN_READER_HEADER_`,description:`_A_UI_GROUP_LABEL_SCREEN_READER_DESCRIPTION_`,props:[`label-screen-reader`]},{default:u(()=>[i(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`Input`},null,8,[`modelValue`]),i(c,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,"label-screen-reader":`Input`},null,8,[`modelValue`]),a(`div`,null,`model: `+d(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var Se=v(be,[[`render`,xe]]);function Ce(){return{codeHtml:`<a-input-currency
  v-model="model"
  :max="20"
  :min="1"
  label="1 - 20"
></a-input-currency>
<a-input-currency
  v-model="model"
  :max="19.05"
  :min="-10.05"
  class="a_mt_3"
  label="-10.05 - 19.05"
></a-input-currency>
<div>model: {{ model }}</div>`}}function we(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AInputCurrency,
} from "aloha-vue";
    
export default {
  name: "PageInputCurrencyMaxMin",
  components: {
    AInputCurrency,
  },
  setup() {
    const model = ref(10.02);
    
    return {
      model,
    };
  },
};`}}var Te={name:`PageInputCurrencyMaxMin`,components:{AInputCurrency:h,AlohaExample:m},setup(){let e=f(10.02),t=f(10.02),{codeHtml:n}=Ce(),{codeJs:r}=we();return{codeHtml:n,codeJs:r,model1:e,model2:t}}};function Ee(e,t,n,r,ee,s){let c=p(`a-input-currency`),f=p(`aloha-example`);return l(),o(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_CURRENCY_GROUP_MAX_MIN_HEADER_`,description:`_A_INPUT_CURRENCY_GROUP_MAX_MIN_DESCRIPTION_`,props:[`max`,`min`]},{default:u(()=>[i(c,{modelValue:e.model1,"onUpdate:modelValue":t[0]||=t=>e.model1=t,max:20,min:1,label:`1 - 20`},null,8,[`modelValue`]),a(`div`,null,`model: `+d(e.model1),1),i(c,{class:`a_mt_3`,modelValue:e.model2,"onUpdate:modelValue":t[1]||=t=>e.model2=t,max:19.05,min:-10.05,label:`-10.05 - 19.05`},null,8,[`modelValue`]),a(`div`,null,`model: `+d(e.model2),1)]),_:1},8,[`code-html`,`code-js`])}var De=v(Te,[[`render`,Ee]]);function Oe(){return{codeHtml:`<a-input-currency
  v-model="model"
  label="number"
  model-type="number"
></a-input-currency>
<a-input-currency
  v-model="model"
  class="a_mt_3"
  label="string"
  model-type="string"
></a-input-currency>
<div>model: {{ model }}</div>`}}function ke(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AInputCurrency,
} from "aloha-vue";
    
export default {
  name: "PageInputCurrencyModelType",
  components: {
    AInputCurrency,
  },
  setup() {
    const model = ref(10.02);
    
    return {
      model,
    };
  },
};`}}var Ae={name:`PageInputCurrencyModelType`,components:{AInputCurrency:h,AlohaExample:m},setup(){let e=f(10.02),{codeHtml:t}=Oe(),{codeJs:n}=ke();return{codeHtml:t,codeJs:n,model:e}}};function je(e,t,n,r,ee,s){let c=p(`a-input-currency`),f=p(`aloha-example`);return l(),o(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_CURRENCY_GROUP_MODEL_TYPE_HEADER_`,description:`_A_INPUT_CURRENCY_GROUP_MODEL_TYPE_DESCRIPTION_`,props:[`model-type`]},{default:u(()=>[i(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`number`,"model-type":`number`},null,8,[`modelValue`]),i(c,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,label:`string`,"model-type":`string`},null,8,[`modelValue`]),a(`div`,null,`model: `+d(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var Me=v(Ae,[[`render`,je]]);function Ne(){return{codeHtml:`<a-input-currency
  v-model="model"
  help-text="Aloha"
  label="Input"
></a-input-currency>
<div>model: {{ model }}</div>`}}function Pe(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AInputCurrency,
} from "aloha-vue";
    
export default {
  name: "PageInputCurrencyReadonly",
  components: {
    AInputCurrency,
  },
  setup() {
    const model1 = ref(10.02);
    const model2 = ref(10000);
    const model3 = ref(undefined);
    
    return {
      model1,
      model2,
      model3,
    };
  },
};`}}var Fe={name:`PageInputCurrencyReadonly`,components:{AInputCurrency:h,AlohaExample:m},setup(){let e=f(10.02),t=f(1e4),n=f(void 0),{codeHtml:r}=Ne(),{codeJs:i}=Pe();return{codeHtml:r,codeJs:i,model1:e,model2:t,model3:n}}};function Ie(e,t,n,r,a,ee){let s=p(`a-input-currency`),c=p(`aloha-example`);return l(),o(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_READONLY_HEADER_`,description:`_A_UI_GROUP_READONLY_DESCRIPTION_`,props:[`readonly`,`readonly-default`]},{default:u(()=>[i(s,{"model-value":e.model1,readonly:!0,label:`Input 1`},null,8,[`model-value`]),i(s,{class:`a_mt_3`,"model-value":e.model2,readonly:!0,label:`Input 2`},null,8,[`model-value`]),i(s,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,label:`Input 3`},null,8,[`model-value`]),i(s,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,"help-text":`Aloha`,label:`Input 4`,"readonly-default":`-`},null,8,[`model-value`])]),_:1},8,[`code-html`,`code-js`])}var Le=v(Fe,[[`render`,Ie]]);function Re(){return{codeHtml:`<a-input-currency
  v-model="model"
  :step="2"
  controls-type="plus-minus"
  label="step 2"
></a-input-currency>
<a-input-currency
  v-model="model"
  :step="0.01"
  class="a_mt_3"
  controls-type="plus-minus"
  label="step 0.01"
></a-input-currency>
<div>model: {{ model }}</div>`}}function ze(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AInputCurrency,
} from "aloha-vue";
    
export default {
  name: "PageInputCurrencyStep",
  components: {
    AInputCurrency,
  },
  setup() {
    const model = ref(10.02);
    
    return {
      model,
    };
  },
};`}}var Be={name:`PageInputCurrencyStep`,components:{AInputCurrency:h,AlohaExample:m},setup(){let e=f(10.02),{codeHtml:t}=Re(),{codeJs:n}=ze();return{codeHtml:t,codeJs:n,model:e}}};function Ve(e,t,n,r,ee,s){let c=p(`a-input-currency`),f=p(`aloha-example`);return l(),o(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_CURRENCY_GROUP_STEP_HEADER_`,description:`_A_INPUT_CURRENCY_GROUP_STEP_DESCRIPTION_`,props:[`step`,`controls-type`]},{default:u(()=>[i(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,step:2,"controls-type":`plus-minus`,label:`step 2`},null,8,[`modelValue`]),i(c,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,step:.01,"controls-type":`plus-minus`,label:`step 0.01`},null,8,[`modelValue`]),a(`div`,null,`model: `+d(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var He=v(Be,[[`render`,Ve]]);function Ue(){return{codeHtml:`<a-input-currency
  v-model="model"
  currency-symbol-position="right"
  currency-symbol="%"
  label="Input"
></a-input-currency>
<a-input-currency
  v-model="model"
  class="a_mt_3"
  currency-symbol-position="left"
  currency-symbol="$"
  label="Input"
></a-input-currency>
<div>model: {{ model }}</div>`}}function We(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AInputCurrency,
} from "aloha-vue";
    
export default {
  name: "PageInputCurrencySymbol",
  components: {
    AInputCurrency,
  },
  setup() {
    const model = ref(10.02);
    
    return {
      model,
    };
  },
};`}}var Ge={name:`PageInputCurrencySymbol`,components:{AInputCurrency:h,AlohaExample:m},setup(){let e=f(10.02),{codeHtml:t}=Ue(),{codeJs:n}=We();return{codeHtml:t,codeJs:n,model:e}}};function Ke(e,t,n,r,ee,s){let c=p(`a-input-currency`),f=p(`aloha-example`);return l(),o(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_CURRENCY_GROUP_SYMBOL_HEADER_`,description:`_A_INPUT_CURRENCY_GROUP_SYMBOL_DESCRIPTION_`,props:[`currency-symbol`,`currency-symbol-position`]},{default:u(()=>[i(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"currency-symbol-position":`right`,"currency-symbol":`%`,label:`Input`},null,8,[`modelValue`]),i(c,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,"currency-symbol-position":`left`,"currency-symbol":`$`,label:`Input`},null,8,[`modelValue`]),a(`div`,null,`model: `+d(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var qe=v(Ge,[[`render`,Ke]]);function Je(){return{codeHtml:`<a-input-currency
  v-model="model"
  thousand-divider=","
  decimal-divider="."
  label="thousand-divider=','"
></a-input-currency>
<a-input-currency
  v-model="model"
  thousand-divider="."
  decimal-divider=","
  class="a_mt_3"
  label="thousand-divider='.'"
></a-input-currency>
<a-input-currency
  v-model="model"
  thousand-divider=" "
  class="a_mt_3"
  label="thousand-divider=' '"
></a-input-currency>
<div>model: {{ model }}</div>`}}function $(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AInputCurrency,
} from "aloha-vue";
    
export default {
  name: "PageInputCurrencyThousandDivider",
  components: {
    AInputCurrency,
  },
  setup() {
    const model = ref(10.02);
    
    return {
      model,
    };
  },
};`}}var Ye={name:`PageInputCurrencyThousandDivider`,components:{AInputCurrency:h,AlohaExample:m},setup(){let e=f(10.02),{codeHtml:t}=Je(),{codeJs:n}=$();return{codeHtml:t,codeJs:n,model:e}}};function Xe(e,t,n,r,ee,s){let c=p(`a-input-currency`),f=p(`aloha-example`);return l(),o(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_CURRENCY_GROUP_THOUSAND_DIVIDER_HEADER_`,description:`_A_INPUT_CURRENCY_GROUP_THOUSAND_DIVIDER_DESCRIPTION_`,props:[`thousand-divider`]},{default:u(()=>[i(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"thousand-divider":`,`,"decimal-divider":`.`,label:`thousand-divider=','`},null,8,[`modelValue`]),i(c,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,"thousand-divider":`.`,"decimal-divider":`,`,label:`thousand-divider='.'`},null,8,[`modelValue`]),i(c,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[2]||=t=>e.model=t,"thousand-divider":` `,label:`thousand-divider=' '`},null,8,[`modelValue`]),a(`div`,null,`model: `+d(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var Ze=v(Ye,[[`render`,Xe]]);function Qe(){return{codeHtml:`<a-input-currency
  v-model="model"
  :validation-on-change="false"
  label="validation-on-change=false"
></a-input-currency>
<a-input-currency
  v-model="model"
  :validation-on-change="true"
  class="a_mt_3"
  label="validation-on-change=true"
></a-input-currency>
<div>model: {{ model }}</div>`}}function $e(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AInputCurrency,
} from "aloha-vue";
    
export default {
  name: "PageInputCurrencyValidationOnChange",
  components: {
    AInputCurrency,
  },
  setup() {
    const model = ref(10.02);
    
    return {
      model,
    };
  },
};`}}var et={name:`PageInputCurrencyValidationOnChange`,components:{AInputCurrency:h,AlohaExample:m},setup(){let e=f(10.02),{codeHtml:t}=Qe(),{codeJs:n}=$e();return{codeHtml:t,codeJs:n,model:e}}};function tt(e,t,n,r,ee,s){let c=p(`a-input-currency`),f=p(`aloha-example`);return l(),o(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_CURRENCY_GROUP_VALIDATION_ON_CHANGE_HEADER_`,description:`_A_INPUT_CURRENCY_GROUP_VALIDATION_ON_CHANGE_DESCRIPTION_`,props:[`validation-on-change`]},{default:u(()=>[i(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"validation-on-change":!1,label:`validation-on-change=false`},null,8,[`modelValue`]),i(c,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,"validation-on-change":!0,label:`validation-on-change=true`},null,8,[`modelValue`]),a(`div`,null,`model: `+d(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var nt=v(et,[[`render`,tt]]);function rt(){return{dataEvents:[{name:`update:model-value`,description:`_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_`,type:`Function`},{name:`focus`,description:`_A_UI_EVENTS_FOCUS_DESCRIPTION_`,type:`Function`},{name:`blur`,description:`_A_UI_EVENTS_BLUR_DESCRIPTION_`,type:`Function`}]}}function it(){let e=s(()=>g({placeholder:`_A_INPUT_CURRENCY_COMPONENT_NAME_`}));return{pageTitle:s(()=>`AInputCurrency${e.value?` (${e.value})`:``}`)}}function at(){return{dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`autocomplete`,description:`_A_UI_PROPS_AUTOCOMPLETE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`change`,description:`_A_UI_PROPS_CHANGE_DESCRIPTION_`,type:`Function`,default:`() => {}`,required:!1},{name:`clear-button-class`,description:`_A_UI_PROPS_CLEAR_BUTTON_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`controls-type`,description:`_A_INPUT_CURRENCY_PROPS_CONTROLS_TYPE_DESCRIPTION_`,type:`String`,default:`none`,required:!1},{name:`currency-symbol`,description:`_A_INPUT_CURRENCY_PROPS_CURRENCY_SYMBOL_DESCRIPTION_`,type:`String`,default:`€`,required:!1},{name:`currency-symbol-position`,description:`_A_INPUT_CURRENCY_PROPS_CURRENCY_SYMBOL_POSITION_DESCRIPTION_`,type:`String`,default:`right`,required:!1},{name:`decimal-divider`,description:`_A_INPUT_CURRENCY_PROPS_DECIMAL_DIVIDER_DESCRIPTION_`,type:`String`,default:`,`,required:!1},{name:`decimal-part-length`,description:`_A_INPUT_CURRENCY_PROPS_DECIMAL_PART_LENGTH_DESCRIPTION_`,type:`Number`,default:2,required:!1},{name:`dependencies`,description:`_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_`,type:`Array / Object`,default:void 0,required:!1},{name:`disabled`,description:`_A_UI_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`errors`,description:`_A_UI_PROPS_ERRORS_DESCRIPTION_`,type:`String / Array`,default:void 0,required:!1},{name:`error-icon`,description:`_A_UI_PROPS_ERROR_ICON_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`exclude-render-attributes`,description:`_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`extra`,description:`_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`help-text`,description:`_A_UI_PROPS_HELP_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`html-id`,description:`_A_UI_PROPS_HTML_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`icon-prepend`,description:`_A_INPUT_PROPS_ICON_PREPEND_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`id`,description:`_A_UI_PROPS_ID_DESCRIPTION_`,type:`String / Number`,default:`() => uniqueId("a_input_currency_")`,required:!1},{name:`id-prefix`,description:`_A_UI_PROPS_ID_PREFIX_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`input-attributes`,description:`_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`input-class`,description:`_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`input-width`,description:`_A_INPUT_CURRENCY_PROPS_INPUT_WIDTH_DESCRIPTION_`,type:`String`,default:200,required:!1},{name:`integer-part-max-length`,description:`_A_INPUT_CURRENCY_PROPS_INTEGER_PART_MAX_LENGTH_DESCRIPTION_`,type:`Number`,default:15,required:!1},{name:`is-clear-button`,description:`_A_UI_PROPS_IS_CLEAR_BUTTON_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-hide`,description:`_A_UI_PROPS_IS_HIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-label-float`,description:`_A_UI_PROPS_IS_LABEL_FLOAT_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-render`,description:`_A_UI_PROPS_IS_RENDER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`label`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`label-class`,description:`_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`label-description`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`label-position`,description:`_A_UI_PROPS_LABEL_POSITION_DESCRIPTION_`,type:`"float" / "inset" / "top"`,default:`"float"`,required:!1},{name:`label-screen-reader`,description:`_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`max`,description:`_A_INPUT_CURRENCY_PROPS_MAX_DESCRIPTION_`,type:`Number`,default:void 0,required:!1},{name:`min`,description:`_A_INPUT_CURRENCY_PROPS_MIN_DESCRIPTION_`,type:`Number`,default:void 0,required:!1},{name:`model-dependencies`,description:`_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`model-type`,description:`_A_INPUT_CURRENCY_PROPS_MODEL_TYPE_DESCRIPTION_`,type:`String`,default:`number`,required:!1},{name:`model-undefined`,description:`_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_`,type:`String / Number / Object / Array / Boolean`,default:void 0,required:!1},{name:`model-value`,description:`_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`placeholder`,description:`_A_UI_PROPS_PLACEHOLDER_DESCRIPTION_`,type:`String / Number / Object`,default:void 0,required:!1},{name:`readonly`,description:`_A_UI_PROPS_READONLY_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`readonly-default`,description:`_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_`,type:`String`,default:``,required:!1},{name:`required`,description:`_A_UI_PROPS_REQUIRED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`step`,description:`_A_INPUT_PROPS_STEP_DESCRIPTION_`,type:`Number`,default:1,required:!1},{name:`thousand-divider`,description:`_A_INPUT_CURRENCY_PROPS_THOUSAND_DIVIDER_DESCRIPTION_`,type:`String`,default:`.`,required:!1},{name:`validation-on-change`,description:`_A_INPUT_CURRENCY_PROPS_VALIDATION_ON_CHANGE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1}]}}var ot={name:`PageInputCurrency`,components:{AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:_,PageInputCurrencyBasic:C,PageInputCurrencyLabelPosition:_e,PageInputCurrencyChange:O,PageInputCurrencyControlsType:M,PageInputCurrencyDecimalDivider:L,PageInputCurrencyDecimalPartLength:H,PageInputCurrencyErrorIcon:q,PageInputCurrencyErrors:Q,PageInputCurrencyHelpText:oe,PageInputCurrencyLabelDescription:de,PageInputCurrencyLabelScreenReader:Se,PageInputCurrencyMaxMin:De,PageInputCurrencyModelType:Me,PageInputCurrencyReadonly:Le,PageInputCurrencyStep:He,PageInputCurrencySymbol:qe,PageInputCurrencyThousandDivider:Ze,PageInputCurrencyValidationOnChange:nt},setup(){let{pageTitle:e}=it(),{dataProps:t}=at(),{dataEvents:n}=rt();return{dataEvents:n,dataProps:t,pageTitle:e}}};function st(e,t,n,r,a,ee){let s=p(`a-translation`),c=p(`page-input-currency-basic`),d=p(`page-input-currency-label-position`),f=p(`page-input-currency-change`),m=p(`page-input-currency-help-text`),h=p(`page-input-currency-error-icon`),g=p(`page-input-currency-errors`),_=p(`page-input-currency-label-description`),v=p(`page-input-currency-label-screen-reader`),y=p(`page-input-currency-symbol`),b=p(`page-input-currency-controls-type`),x=p(`page-input-currency-decimal-divider`),S=p(`page-input-currency-max-min`),C=p(`page-input-currency-model-type`),w=p(`page-input-currency-step`),T=p(`page-input-currency-decimal-part-length`),E=p(`page-input-currency-thousand-divider`),D=p(`page-input-currency-validation-on-change`),O=p(`page-input-currency-readonly`),k=p(`aloha-table-props`),A=p(`aloha-page`);return l(),o(A,{"page-title":e.pageTitle},{body:u(()=>[i(s,{tag:`p`,html:`_A_INPUT_CURRENCY_COMPONENT_DESCRIPTION_`}),i(c),i(d),i(f),i(m),i(h),i(g),i(_),i(v),i(y),i(b),i(x),i(S),i(C),i(w),i(T),i(E),i(D),i(O),i(k,{data:e.dataProps},null,8,[`data`]),i(k,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`])]),_:1},8,[`page-title`])}var ct=v(ot,[[`render`,st]]);export{ct as default};