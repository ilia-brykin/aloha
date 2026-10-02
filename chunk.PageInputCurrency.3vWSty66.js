import{$t as e,Ct as t,Tt as n,Ut as r,Yt as i,kt as a,qt as o,wt as s,zt as c}from"./chunk.vendor.CZPox1kV.js";import{Z as ee,kt as te,q as l,t as u}from"./bundle.index.CLtYDDlb.js";import{n as d,t as f}from"./chunk.AlohaExample.BFgfeYtr.js";import{t as p}from"./chunk.AlohaTableProps.CiFmD1UR.js";import{t as m}from"./chunk.AlohaTableTranslate.SVFm06b7.js";function h(){return{codeHtml:`<a-input-currency
  v-model="model"
  label="Input"
></a-input-currency>
<div>model: {{ model }}</div>`}}function g(){return{codeJs:`import {
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
};`}}var _={name:`PageInputCurrencyBasic`,components:{AInputCurrency:l,AlohaExample:f},setup(){let e=i(10.02),{codeHtml:t}=h(),{codeJs:n}=g();return{codeHtml:t,codeJs:n,model:e}}};function v(t,i,ee,te,l,u){let d=r(`a-input-currency`),f=r(`aloha-example`);return c(),n(f,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`label`]},{default:o(()=>[a(d,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,label:`Input`},null,8,[`modelValue`]),s(`div`,null,`model: `+e(t.model),1)]),_:1},8,[`code-html`,`code-js`])}var y=u(_,[[`render`,v]]);function b(){return{codeHtml:`<a-input-currency
  :change="changeModel"
  :model-value="model"
  label="Input"
></a-input-currency>
<div>model: {{ model }}</div>`}}function x(){return{codeJs:`import {
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
};`}}var S={name:`PageInputCurrencyChange`,components:{AInputCurrency:l,AlohaExample:f},setup(){let e=i(10.02),t=({model:t,id:n,props:r})=>{e.value=t,console.log(n,r)},{codeHtml:n}=b(),{codeJs:r}=x();return{changeModel:t,codeHtml:n,codeJs:r,model:e}}};function C(t,i,ee,te,l,u){let d=r(`a-input-currency`),f=r(`aloha-example`);return c(),n(f,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_UI_GROUP_CHANGE_HEADER_`,description:`_A_UI_GROUP_CHANGE_DESCRIPTION_`,props:[`change`,`model-value`]},{default:o(()=>[a(d,{change:t.changeModel,"model-value":t.model,label:`Input`},null,8,[`change`,`model-value`]),s(`div`,null,`model: `+e(t.model),1)]),_:1},8,[`code-html`,`code-js`])}var w=u(S,[[`render`,C]]);function T(){return{codeHtml:`<a-input-currency
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
<div>model: {{ model }}</div>`}}function E(){return{codeJs:`import {
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
};`}}var D={name:`PageInputCurrencyControlsType`,components:{AInputCurrency:l,AlohaExample:f},setup(){let e=i(10.02),{codeHtml:t}=T(),{codeJs:n}=E();return{codeHtml:t,codeJs:n,model:e}}};function O(t,i,ee,te,l,u){let d=r(`a-input-currency`),f=r(`aloha-example`);return c(),n(f,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_INPUT_CURRENCY_GROUP_CONTROLS_TYPE_HEADER_`,description:`_A_INPUT_CURRENCY_GROUP_CONTROLS_TYPE_DESCRIPTION_`,props:[`controls-type`]},{default:o(()=>[a(d,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,"controls-type":`none`,label:`Input`},null,8,[`modelValue`]),a(d,{class:`a_mt_3`,modelValue:t.model,"onUpdate:modelValue":i[1]||=e=>t.model=e,"controls-type":`plus-minus`,label:`Input`},null,8,[`modelValue`]),s(`div`,null,`model: `+e(t.model),1)]),_:1},8,[`code-html`,`code-js`])}var k=u(D,[[`render`,O]]);function A(){return{codeHtml:`<a-input-currency
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
<div>model: {{ model }}</div>`}}function j(){return{codeJs:`import {
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
};`}}var M={name:`PageInputCurrencyDecimalDivider`,components:{AInputCurrency:l,AlohaExample:f},setup(){let e=i(10.02),{codeHtml:t}=A(),{codeJs:n}=j();return{codeHtml:t,codeJs:n,model:e}}};function N(t,i,ee,te,l,u){let d=r(`a-input-currency`),f=r(`aloha-example`);return c(),n(f,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_INPUT_CURRENCY_GROUP_DECIMAL_DIVIDER_HEADER_`,description:`_A_INPUT_CURRENCY_GROUP_DECIMAL_DIVIDER_DESCRIPTION_`,props:[`decimal-divider`]},{default:o(()=>[a(d,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,"decimal-divider":`,`,"thousand-divider":`.`,label:`Input`},null,8,[`modelValue`]),a(d,{class:`a_mt_3`,modelValue:t.model,"onUpdate:modelValue":i[1]||=e=>t.model=e,"decimal-divider":`.`,"thousand-divider":`,`,label:`Input`},null,8,[`modelValue`]),s(`div`,null,`model: `+e(t.model),1)]),_:1},8,[`code-html`,`code-js`])}var P=u(M,[[`render`,N]]);function F(){return{codeHtml:`<a-input-currency
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
<div>model: {{ model }}</div>`}}function I(){return{codeJs:`import {
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
};`}}var L={name:`PageInputCurrencyDecimalPartLength`,components:{AInputCurrency:l,AlohaExample:f},setup(){let e=i(10.02),{codeHtml:t}=F(),{codeJs:n}=I();return{codeHtml:t,codeJs:n,model:e}}};function R(t,i,ee,te,l,u){let d=r(`a-input-currency`),f=r(`aloha-example`);return c(),n(f,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_INPUT_CURRENCY_GROUP_DECIMAL_PART_LENGTH_HEADER_`,description:`_A_INPUT_CURRENCY_GROUP_DECIMAL_PART_LENGTH_DESCRIPTION_`,props:[`decimal-part-length`]},{default:o(()=>[a(d,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,"decimal-part-length":0,label:`decimal-part-length 0`},null,8,[`modelValue`]),a(d,{class:`a_mt_3`,modelValue:t.model,"onUpdate:modelValue":i[1]||=e=>t.model=e,"decimal-part-length":1,label:`decimal-part-length 1`},null,8,[`modelValue`]),a(d,{class:`a_mt_3`,modelValue:t.model,"onUpdate:modelValue":i[2]||=e=>t.model=e,"decimal-part-length":2,label:`decimal-part-length 2`},null,8,[`modelValue`]),a(d,{class:`a_mt_3`,modelValue:t.model,"onUpdate:modelValue":i[3]||=e=>t.model=e,"decimal-part-length":4,label:`decimal-part-length 4`},null,8,[`modelValue`]),s(`div`,null,`model: `+e(t.model),1)]),_:1},8,[`code-html`,`code-js`])}var z=u(L,[[`render`,R]]);function B(){return{codeHtml:`<a-input-currency
  v-model="model"
  :error-icon="errorIcon"
  errors="Aloha"
  label="Input currency"
></a-input-currency>`}}function V(){return{codeJs:`import {
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
};`}}var H={name:`PageInputCurrencyErrorIcon`,components:{AInputCurrency:l,AlohaExample:f},setup(){let e=i(245),{codeHtml:t}=B(),{codeJs:n}=V();return{codeHtml:t,codeJs:n,errorIcon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.93 6.588 8.758 10.042a.5.5 0 0 1-.998 0L7.588 6.588a.5.5 0 1 1 .998 0M8 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>`,model:e}}};function U(e,t,i,s,ee,te){let l=r(`a-input-currency`),u=r(`aloha-example`);return c(),n(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_ERROR_ICON_HEADER_`,description:`_A_UI_GROUP_ERROR_ICON_DESCRIPTION_`,props:[`errors`,`error-icon`]},{default:o(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"error-icon":e.errorIcon,errors:`Aloha`,label:`Input currency`},null,8,[`modelValue`,`error-icon`])]),_:1},8,[`code-html`,`code-js`])}var W=u(H,[[`render`,U]]);function G(){return{codeHtml:`<a-input-currency
  v-model="model"
  errors="Aloha"
  label="Input"
></a-input-currency>
<div>model: {{ model }}</div>`}}function K(){return{codeJs:`import {
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
};`}}var q={name:`PageInputCurrencyErrors`,components:{AInputCurrency:l,AlohaExample:f},setup(){let e=i(10.02),{codeHtml:t}=G(),{codeJs:n}=K();return{codeHtml:t,codeJs:n,model:e}}};function J(t,i,ee,te,l,u){let d=r(`a-input-currency`),f=r(`aloha-example`);return c(),n(f,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_UI_GROUP_ERRORS_HEADER_`,description:`_A_UI_GROUP_ERRORS_DESCRIPTION_`,props:[`errors`]},{default:o(()=>[a(d,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,errors:`Aloha`,label:`Input`},null,8,[`modelValue`]),s(`div`,null,`model: `+e(t.model),1)]),_:1},8,[`code-html`,`code-js`])}var Y=u(q,[[`render`,J]]);function X(){return{codeHtml:`<a-input-currency
  v-model="model"
  help-text="Aloha"
  label="Input"
></a-input-currency>
<div>model: {{ model }}</div>`}}function Z(){return{codeJs:`import {
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
};`}}var Q={name:`PageInputCurrencyHelpText`,components:{AInputCurrency:l,AlohaExample:f},setup(){let e=i(10.02),{codeHtml:t}=X(),{codeJs:n}=Z();return{codeHtml:t,codeJs:n,model:e}}};function ne(t,i,ee,te,l,u){let d=r(`a-input-currency`),f=r(`aloha-example`);return c(),n(f,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_UI_GROUP_HELP_TEXT_HEADER_`,description:`_A_UI_GROUP_HELP_TEXT_DESCRIPTION_`,props:[`help-text`]},{default:o(()=>[a(d,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,"help-text":`Aloha`,label:`Input`},null,8,[`modelValue`]),s(`div`,null,`model: `+e(t.model),1)]),_:1},8,[`code-html`,`code-js`])}var re=u(Q,[[`render`,ne]]);function ie(){return{codeHtml:`<a-input-currency
  v-model="model"
  :is-label-float="false"
  label="Input"
  label-description="Aloha"
></a-input-currency>
<div>model: {{ model }}</div>`}}function ae(){return{codeJs:`import {
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
};`}}var oe={name:`PageInputCurrencyLabelDescription`,components:{AInputCurrency:l,AlohaExample:f},setup(){let e=i(10.02),{codeHtml:t}=ie(),{codeJs:n}=ae();return{codeHtml:t,codeJs:n,model:e}}};function se(t,i,ee,te,l,u){let d=r(`a-input-currency`),f=r(`aloha-example`);return c(),n(f,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_`,description:`_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_`,props:[`label-description`]},{default:o(()=>[a(d,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,"is-label-float":!1,label:`Input`,"label-description":`Aloha`},null,8,[`modelValue`]),s(`div`,null,`model: `+e(t.model),1)]),_:1},8,[`code-html`,`code-js`])}var ce=u(oe,[[`render`,se]]);function le(){return{codeHtml:`<a-input-currency
  v-model="model"
  :is-label-float="false"
  label="Input"
></a-input-currency>
<a-input-currency
  v-model="model"
  :is-label-float="true"
  label="Input"
></a-input-currency>
<div>model: {{ model }}</div>`}}function ue(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AInputCurrency,
} from "aloha-vue";
    
export default {
  name: "PageInputCurrencyLabelFloat",
  components: {
    AInputCurrency,
  },
  setup() {
    const model = ref(10.02);
    
    return {
      model,
    };
  },
};`}}var de={name:`PageInputCurrencyLabelFloat`,components:{AInputCurrency:l,AlohaExample:f},setup(){let e=i(10.02),{codeHtml:t}=le(),{codeJs:n}=ue();return{codeHtml:t,codeJs:n,model:e}}};function fe(t,i,ee,te,l,u){let d=r(`a-input-currency`),f=r(`aloha-example`);return c(),n(f,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_UI_GROUP_IS_LABEL_FLOAT_HEADER_`,description:`_A_UI_GROUP_IS_LABEL_FLOAT_DESCRIPTION_`,props:[`is-label-float`]},{default:o(()=>[a(d,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,"is-label-float":!1,label:`Input`},null,8,[`modelValue`]),a(d,{class:`a_mt_3`,modelValue:t.model,"onUpdate:modelValue":i[1]||=e=>t.model=e,"is-label-float":!0,label:`Input`},null,8,[`modelValue`]),s(`div`,null,`model: `+e(t.model),1)]),_:1},8,[`code-html`,`code-js`])}var pe=u(de,[[`render`,fe]]);function me(){return{codeHtml:`<a-input-currency
  v-model="model"
  label="Input"
></a-input-currency>
<a-input-currency
  v-model="model"
  class="a_mt_3"
  label-screen-reader="Input"
></a-input-currency>
<div>model: {{ model }}</div>`}}function he(){return{codeJs:`import {
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
};`}}var ge={name:`PageInputCurrencyLabelScreenReader`,components:{AInputCurrency:l,AlohaExample:f},setup(){let e=i(10.02),{codeHtml:t}=me(),{codeJs:n}=he();return{codeHtml:t,codeJs:n,model:e}}};function _e(t,i,ee,te,l,u){let d=r(`a-input-currency`),f=r(`aloha-example`);return c(),n(f,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_UI_GROUP_LABEL_SCREEN_READER_HEADER_`,description:`_A_UI_GROUP_LABEL_SCREEN_READER_DESCRIPTION_`,props:[`label-screen-reader`]},{default:o(()=>[a(d,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,label:`Input`},null,8,[`modelValue`]),a(d,{class:`a_mt_3`,modelValue:t.model,"onUpdate:modelValue":i[1]||=e=>t.model=e,"label-screen-reader":`Input`},null,8,[`modelValue`]),s(`div`,null,`model: `+e(t.model),1)]),_:1},8,[`code-html`,`code-js`])}var ve=u(ge,[[`render`,_e]]);function ye(){return{codeHtml:`<a-input-currency
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
<div>model: {{ model }}</div>`}}function be(){return{codeJs:`import {
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
};`}}var xe={name:`PageInputCurrencyMaxMin`,components:{AInputCurrency:l,AlohaExample:f},setup(){let e=i(10.02),t=i(10.02),{codeHtml:n}=ye(),{codeJs:r}=be();return{codeHtml:n,codeJs:r,model1:e,model2:t}}};function Se(t,i,ee,te,l,u){let d=r(`a-input-currency`),f=r(`aloha-example`);return c(),n(f,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_INPUT_CURRENCY_GROUP_MAX_MIN_HEADER_`,description:`_A_INPUT_CURRENCY_GROUP_MAX_MIN_DESCRIPTION_`,props:[`max`,`min`]},{default:o(()=>[a(d,{modelValue:t.model1,"onUpdate:modelValue":i[0]||=e=>t.model1=e,max:20,min:1,label:`1 - 20`},null,8,[`modelValue`]),s(`div`,null,`model: `+e(t.model1),1),a(d,{class:`a_mt_3`,modelValue:t.model2,"onUpdate:modelValue":i[1]||=e=>t.model2=e,max:19.05,min:-10.05,label:`-10.05 - 19.05`},null,8,[`modelValue`]),s(`div`,null,`model: `+e(t.model2),1)]),_:1},8,[`code-html`,`code-js`])}var Ce=u(xe,[[`render`,Se]]);function we(){return{codeHtml:`<a-input-currency
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
<div>model: {{ model }}</div>`}}function Te(){return{codeJs:`import {
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
};`}}var Ee={name:`PageInputCurrencyModelType`,components:{AInputCurrency:l,AlohaExample:f},setup(){let e=i(10.02),{codeHtml:t}=we(),{codeJs:n}=Te();return{codeHtml:t,codeJs:n,model:e}}};function De(t,i,ee,te,l,u){let d=r(`a-input-currency`),f=r(`aloha-example`);return c(),n(f,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_INPUT_CURRENCY_GROUP_MODEL_TYPE_HEADER_`,description:`_A_INPUT_CURRENCY_GROUP_MODEL_TYPE_DESCRIPTION_`,props:[`model-type`]},{default:o(()=>[a(d,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,label:`number`,"model-type":`number`},null,8,[`modelValue`]),a(d,{class:`a_mt_3`,modelValue:t.model,"onUpdate:modelValue":i[1]||=e=>t.model=e,label:`string`,"model-type":`string`},null,8,[`modelValue`]),s(`div`,null,`model: `+e(t.model),1)]),_:1},8,[`code-html`,`code-js`])}var Oe=u(Ee,[[`render`,De]]);function ke(){return{codeHtml:`<a-input-currency
  v-model="model"
  help-text="Aloha"
  label="Input"
></a-input-currency>
<div>model: {{ model }}</div>`}}function Ae(){return{codeJs:`import {
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
};`}}var je={name:`PageInputCurrencyReadonly`,components:{AInputCurrency:l,AlohaExample:f},setup(){let e=i(10.02),t=i(1e4),n=i(void 0),{codeHtml:r}=ke(),{codeJs:a}=Ae();return{codeHtml:r,codeJs:a,model1:e,model2:t,model3:n}}};function Me(e,t,i,s,ee,te){let l=r(`a-input-currency`),u=r(`aloha-example`);return c(),n(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_READONLY_HEADER_`,description:`_A_UI_GROUP_READONLY_DESCRIPTION_`,props:[`readonly`,`readonly-default`]},{default:o(()=>[a(l,{"model-value":e.model1,readonly:!0,label:`Input 1`},null,8,[`model-value`]),a(l,{class:`a_mt_3`,"model-value":e.model2,readonly:!0,label:`Input 2`},null,8,[`model-value`]),a(l,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,label:`Input 3`},null,8,[`model-value`]),a(l,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,"help-text":`Aloha`,label:`Input 4`,"readonly-default":`-`},null,8,[`model-value`])]),_:1},8,[`code-html`,`code-js`])}var Ne=u(je,[[`render`,Me]]);function Pe(){return{codeHtml:`<a-input-currency
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
<div>model: {{ model }}</div>`}}function Fe(){return{codeJs:`import {
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
};`}}var Ie={name:`PageInputCurrencyStep`,components:{AInputCurrency:l,AlohaExample:f},setup(){let e=i(10.02),{codeHtml:t}=Pe(),{codeJs:n}=Fe();return{codeHtml:t,codeJs:n,model:e}}};function Le(t,i,ee,te,l,u){let d=r(`a-input-currency`),f=r(`aloha-example`);return c(),n(f,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_INPUT_CURRENCY_GROUP_STEP_HEADER_`,description:`_A_INPUT_CURRENCY_GROUP_STEP_DESCRIPTION_`,props:[`step`,`controls-type`]},{default:o(()=>[a(d,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,step:2,"controls-type":`plus-minus`,label:`step 2`},null,8,[`modelValue`]),a(d,{class:`a_mt_3`,modelValue:t.model,"onUpdate:modelValue":i[1]||=e=>t.model=e,step:.01,"controls-type":`plus-minus`,label:`step 0.01`},null,8,[`modelValue`]),s(`div`,null,`model: `+e(t.model),1)]),_:1},8,[`code-html`,`code-js`])}var Re=u(Ie,[[`render`,Le]]);function ze(){return{codeHtml:`<a-input-currency
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
<div>model: {{ model }}</div>`}}function Be(){return{codeJs:`import {
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
};`}}var Ve={name:`PageInputCurrencySymbol`,components:{AInputCurrency:l,AlohaExample:f},setup(){let e=i(10.02),{codeHtml:t}=ze(),{codeJs:n}=Be();return{codeHtml:t,codeJs:n,model:e}}};function He(t,i,ee,te,l,u){let d=r(`a-input-currency`),f=r(`aloha-example`);return c(),n(f,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_INPUT_CURRENCY_GROUP_SYMBOL_HEADER_`,description:`_A_INPUT_CURRENCY_GROUP_SYMBOL_DESCRIPTION_`,props:[`currency-symbol`,`currency-symbol-position`]},{default:o(()=>[a(d,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,"currency-symbol-position":`right`,"currency-symbol":`%`,label:`Input`},null,8,[`modelValue`]),a(d,{class:`a_mt_3`,modelValue:t.model,"onUpdate:modelValue":i[1]||=e=>t.model=e,"currency-symbol-position":`left`,"currency-symbol":`$`,label:`Input`},null,8,[`modelValue`]),s(`div`,null,`model: `+e(t.model),1)]),_:1},8,[`code-html`,`code-js`])}var Ue=u(Ve,[[`render`,He]]);function We(){return{codeHtml:`<a-input-currency
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
<div>model: {{ model }}</div>`}}function Ge(){return{codeJs:`import {
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
};`}}var Ke={name:`PageInputCurrencyThousandDivider`,components:{AInputCurrency:l,AlohaExample:f},setup(){let e=i(10.02),{codeHtml:t}=We(),{codeJs:n}=Ge();return{codeHtml:t,codeJs:n,model:e}}};function qe(t,i,ee,te,l,u){let d=r(`a-input-currency`),f=r(`aloha-example`);return c(),n(f,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_INPUT_CURRENCY_GROUP_THOUSAND_DIVIDER_HEADER_`,description:`_A_INPUT_CURRENCY_GROUP_THOUSAND_DIVIDER_DESCRIPTION_`,props:[`thousand-divider`]},{default:o(()=>[a(d,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,"thousand-divider":`,`,"decimal-divider":`.`,label:`thousand-divider=','`},null,8,[`modelValue`]),a(d,{class:`a_mt_3`,modelValue:t.model,"onUpdate:modelValue":i[1]||=e=>t.model=e,"thousand-divider":`.`,"decimal-divider":`,`,label:`thousand-divider='.'`},null,8,[`modelValue`]),a(d,{class:`a_mt_3`,modelValue:t.model,"onUpdate:modelValue":i[2]||=e=>t.model=e,"thousand-divider":` `,label:`thousand-divider=' '`},null,8,[`modelValue`]),s(`div`,null,`model: `+e(t.model),1)]),_:1},8,[`code-html`,`code-js`])}var Je=u(Ke,[[`render`,qe]]);function $(){return{codeHtml:`<a-input-currency
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
<div>model: {{ model }}</div>`}}function Ye(){return{codeJs:`import {
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
};`}}var Xe={name:`PageInputCurrencyValidationOnChange`,components:{AInputCurrency:l,AlohaExample:f},setup(){let e=i(10.02),{codeHtml:t}=$(),{codeJs:n}=Ye();return{codeHtml:t,codeJs:n,model:e}}};function Ze(t,i,ee,te,l,u){let d=r(`a-input-currency`),f=r(`aloha-example`);return c(),n(f,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_INPUT_CURRENCY_GROUP_VALIDATION_ON_CHANGE_HEADER_`,description:`_A_INPUT_CURRENCY_GROUP_VALIDATION_ON_CHANGE_DESCRIPTION_`,props:[`validation-on-change`]},{default:o(()=>[a(d,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,"validation-on-change":!1,label:`validation-on-change=false`},null,8,[`modelValue`]),a(d,{class:`a_mt_3`,modelValue:t.model,"onUpdate:modelValue":i[1]||=e=>t.model=e,"validation-on-change":!0,label:`validation-on-change=true`},null,8,[`modelValue`]),s(`div`,null,`model: `+e(t.model),1)]),_:1},8,[`code-html`,`code-js`])}var Qe=u(Xe,[[`render`,Ze]]);function $e(){return{dataEvents:[{name:`update:model-value`,description:`_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_`,type:`Function`},{name:`focus`,description:`_A_UI_EVENTS_FOCUS_DESCRIPTION_`,type:`Function`},{name:`blur`,description:`_A_UI_EVENTS_BLUR_DESCRIPTION_`,type:`Function`}]}}function et(){let e=t(()=>te({placeholder:`_A_INPUT_CURRENCY_COMPONENT_NAME_`}));return{pageTitle:t(()=>`AInputCurrency${e.value?` (${e.value})`:``}`)}}function tt(){return{dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`autocomplete`,description:`_A_UI_PROPS_AUTOCOMPLETE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`change`,description:`_A_UI_PROPS_CHANGE_DESCRIPTION_`,type:`Function`,default:`() => {}`,required:!1},{name:`clear-button-class`,description:`_A_UI_PROPS_CLEAR_BUTTON_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`controls-type`,description:`_A_INPUT_CURRENCY_PROPS_CONTROLS_TYPE_DESCRIPTION_`,type:`String`,default:`none`,required:!1},{name:`currency-symbol`,description:`_A_INPUT_CURRENCY_PROPS_CURRENCY_SYMBOL_DESCRIPTION_`,type:`String`,default:`€`,required:!1},{name:`currency-symbol-position`,description:`_A_INPUT_CURRENCY_PROPS_CURRENCY_SYMBOL_POSITION_DESCRIPTION_`,type:`String`,default:`right`,required:!1},{name:`decimal-divider`,description:`_A_INPUT_CURRENCY_PROPS_DECIMAL_DIVIDER_DESCRIPTION_`,type:`String`,default:`,`,required:!1},{name:`decimal-part-length`,description:`_A_INPUT_CURRENCY_PROPS_DECIMAL_PART_LENGTH_DESCRIPTION_`,type:`Number`,default:2,required:!1},{name:`dependencies`,description:`_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_`,type:`Array / Object`,default:void 0,required:!1},{name:`disabled`,description:`_A_UI_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`errors`,description:`_A_UI_PROPS_ERRORS_DESCRIPTION_`,type:`String / Array`,default:void 0,required:!1},{name:`error-icon`,description:`_A_UI_PROPS_ERROR_ICON_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`exclude-render-attributes`,description:`_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`extra`,description:`_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`help-text`,description:`_A_UI_PROPS_HELP_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`html-id`,description:`_A_UI_PROPS_HTML_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`icon-prepend`,description:`_A_INPUT_PROPS_ICON_PREPEND_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`id`,description:`_A_UI_PROPS_ID_DESCRIPTION_`,type:`String / Number`,default:`() => uniqueId("a_input_currency_")`,required:!1},{name:`id-prefix`,description:`_A_UI_PROPS_ID_PREFIX_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`input-attributes`,description:`_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`input-class`,description:`_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`input-width`,description:`_A_INPUT_CURRENCY_PROPS_INPUT_WIDTH_DESCRIPTION_`,type:`String`,default:200,required:!1},{name:`integer-part-max-length`,description:`_A_INPUT_CURRENCY_PROPS_INTEGER_PART_MAX_LENGTH_DESCRIPTION_`,type:`Number`,default:15,required:!1},{name:`is-clear-button`,description:`_A_UI_PROPS_IS_CLEAR_BUTTON_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-hide`,description:`_A_UI_PROPS_IS_HIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-label-float`,description:`_A_UI_PROPS_IS_LABEL_FLOAT_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-render`,description:`_A_UI_PROPS_IS_RENDER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`label`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`label-class`,description:`_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`label-description`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`label-screen-reader`,description:`_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`max`,description:`_A_INPUT_CURRENCY_PROPS_MAX_DESCRIPTION_`,type:`Number`,default:void 0,required:!1},{name:`min`,description:`_A_INPUT_CURRENCY_PROPS_MIN_DESCRIPTION_`,type:`Number`,default:void 0,required:!1},{name:`model-dependencies`,description:`_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`model-type`,description:`_A_INPUT_CURRENCY_PROPS_MODEL_TYPE_DESCRIPTION_`,type:`String`,default:`number`,required:!1},{name:`model-undefined`,description:`_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_`,type:`String / Number / Object / Array / Boolean`,default:void 0,required:!1},{name:`model-value`,description:`_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`placeholder`,description:`_A_UI_PROPS_PLACEHOLDER_DESCRIPTION_`,type:`String / Number / Object`,default:void 0,required:!1},{name:`readonly`,description:`_A_UI_PROPS_READONLY_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`readonly-default`,description:`_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_`,type:`String`,default:``,required:!1},{name:`required`,description:`_A_UI_PROPS_REQUIRED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`step`,description:`_A_INPUT_PROPS_STEP_DESCRIPTION_`,type:`Number`,default:1,required:!1},{name:`thousand-divider`,description:`_A_INPUT_CURRENCY_PROPS_THOUSAND_DIVIDER_DESCRIPTION_`,type:`String`,default:`.`,required:!1},{name:`validation-on-change`,description:`_A_INPUT_CURRENCY_PROPS_VALIDATION_ON_CHANGE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1}]}}var nt={name:`PageInputCurrency`,components:{AlohaPage:d,AlohaTableProps:p,AlohaTableTranslate:m,ATranslation:ee,PageInputCurrencyBasic:y,PageInputCurrencyChange:w,PageInputCurrencyControlsType:k,PageInputCurrencyDecimalDivider:P,PageInputCurrencyDecimalPartLength:z,PageInputCurrencyErrorIcon:W,PageInputCurrencyErrors:Y,PageInputCurrencyHelpText:re,PageInputCurrencyLabelDescription:ce,PageInputCurrencyLabelFloat:pe,PageInputCurrencyLabelScreenReader:ve,PageInputCurrencyMaxMin:Ce,PageInputCurrencyModelType:Oe,PageInputCurrencyReadonly:Ne,PageInputCurrencyStep:Re,PageInputCurrencySymbol:Ue,PageInputCurrencyThousandDivider:Je,PageInputCurrencyValidationOnChange:Qe},setup(){let{pageTitle:e}=et(),{dataProps:t}=tt(),{dataEvents:n}=$e();return{dataEvents:n,dataProps:t,pageTitle:e}}};function rt(e,t,i,s,ee,te){let l=r(`a-translation`),u=r(`page-input-currency-basic`),d=r(`page-input-currency-change`),f=r(`page-input-currency-help-text`),p=r(`page-input-currency-error-icon`),m=r(`page-input-currency-errors`),h=r(`page-input-currency-label-description`),g=r(`page-input-currency-label-screen-reader`),_=r(`page-input-currency-label-float`),v=r(`page-input-currency-symbol`),y=r(`page-input-currency-controls-type`),b=r(`page-input-currency-decimal-divider`),x=r(`page-input-currency-max-min`),S=r(`page-input-currency-model-type`),C=r(`page-input-currency-step`),w=r(`page-input-currency-decimal-part-length`),T=r(`page-input-currency-thousand-divider`),E=r(`page-input-currency-validation-on-change`),D=r(`page-input-currency-readonly`),O=r(`aloha-table-props`),k=r(`aloha-page`);return c(),n(k,{"page-title":e.pageTitle},{body:o(()=>[a(l,{tag:`p`,html:`_A_INPUT_CURRENCY_COMPONENT_DESCRIPTION_`}),a(u),a(d),a(f),a(p),a(m),a(h),a(g),a(_),a(v),a(y),a(b),a(x),a(S),a(C),a(w),a(T),a(E),a(D),a(O,{data:e.dataProps},null,8,[`data`]),a(O,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`])]),_:1},8,[`page-title`])}var it=u(nt,[[`render`,rt]]);export{it as default};