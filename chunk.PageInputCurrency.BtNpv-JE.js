import{A as f,a as J}from"./chunk.AlohaExample.BnbJFGnI.js";import{A as Y}from"./chunk.AlohaTableProps.C9jc84eo.js";import{A as q}from"./chunk.AlohaTableTranslate.DSNrbu3z.js";import{a5 as R,_ as s,g as M,A as j}from"./bundle.index.lqk0Ptmi.js";import{r as m,U as _,aS as i,e as r,V as I,Z as l,Y as P,aT as y,d as A}from"./chunk.vendor.COYgx38y.js";import"./chunk.vendor-lodash.xyEKcfD7.js";import"./chunk.APageTabTitle.Lgkphhkn.js";import"./chunk.AlohaHighlightjs.CW1W2LCP.js";import"./chunk.ATable.Bx8KDZKa.js";import"./chunk.translations-ar.Byt7bLPX.js";import"./chunk.translations-de.Cz6tWTTe.js";import"./chunk.translations-en.DwjHOWt8.js";import"./chunk.translations-es.CZRHcyKX.js";import"./chunk.translations-fr.BmeiBwkS.js";import"./chunk.translations-hr.D73Vrczb.js";import"./chunk.translations-it.BbHXiHwT.js";import"./chunk.translations-ru.yy6gOKTP.js";function G(){return{codeHtml:`<a-input-currency
  v-model="model"
  label="Input"
></a-input-currency>
<div>model: {{ model }}</div>`}}function B(){return{codeJs:`import {
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
};`}}const F={name:"PageInputCurrencyBasic",components:{AInputCurrency:R,AlohaExample:f},setup(){const e=m(10.02),{codeHtml:n}=G(),{codeJs:a}=B();return{codeHtml:n,codeJs:a,model:e}}};function X(e,n,a,u,c,p){const t=r("a-input-currency"),d=r("aloha-example");return I(),_(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","label"]},{default:i(()=>[l(t,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=o=>e.model=o),label:"Input"},null,8,["modelValue"]),P("div",null,"model: "+y(e.model),1)]),_:1},8,["code-html","code-js"])}const w=s(F,[["render",X]]);function k(){return{codeHtml:`<a-input-currency
  :change="changeModel"
  :model-value="model"
  label="Input"
></a-input-currency>
<div>model: {{ model }}</div>`}}function W(){return{codeJs:`import {
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
};`}}const Q={name:"PageInputCurrencyChange",components:{AInputCurrency:R,AlohaExample:f},setup(){const e=m(10.02),n=({model:c,id:p,props:t})=>{e.value=c,console.log(p,t)},{codeHtml:a}=k(),{codeJs:u}=W();return{changeModel:n,codeHtml:a,codeJs:u,model:e}}};function Z(e,n,a,u,c,p){const t=r("a-input-currency"),d=r("aloha-example");return I(),_(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CHANGE_HEADER_",description:"_A_UI_GROUP_CHANGE_DESCRIPTION_",props:["change","model-value"]},{default:i(()=>[l(t,{change:e.changeModel,"model-value":e.model,label:"Input"},null,8,["change","model-value"]),P("div",null,"model: "+y(e.model),1)]),_:1},8,["code-html","code-js"])}const z=s(Q,[["render",Z]]);function K(){return{codeHtml:`<a-input-currency
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
<div>model: {{ model }}</div>`}}function x(){return{codeJs:`import {
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
};`}}const ee={name:"PageInputCurrencyControlsType",components:{AInputCurrency:R,AlohaExample:f},setup(){const e=m(10.02),{codeHtml:n}=K(),{codeJs:a}=x();return{codeHtml:n,codeJs:a,model:e}}};function ne(e,n,a,u,c,p){const t=r("a-input-currency"),d=r("aloha-example");return I(),_(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_CURRENCY_GROUP_CONTROLS_TYPE_HEADER_",description:"_A_INPUT_CURRENCY_GROUP_CONTROLS_TYPE_DESCRIPTION_",props:["controls-type"]},{default:i(()=>[l(t,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=o=>e.model=o),"controls-type":"none",label:"Input"},null,8,["modelValue"]),l(t,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[1]||(n[1]=o=>e.model=o),"controls-type":"plus-minus",label:"Input"},null,8,["modelValue"]),P("div",null,"model: "+y(e.model),1)]),_:1},8,["code-html","code-js"])}const oe=s(ee,[["render",ne]]);function te(){return{codeHtml:`<a-input-currency
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
<div>model: {{ model }}</div>`}}function le(){return{codeJs:`import {
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
};`}}const re={name:"PageInputCurrencyDecimalDivider",components:{AInputCurrency:R,AlohaExample:f},setup(){const e=m(10.02),{codeHtml:n}=te(),{codeJs:a}=le();return{codeHtml:n,codeJs:a,model:e}}};function ae(e,n,a,u,c,p){const t=r("a-input-currency"),d=r("aloha-example");return I(),_(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_CURRENCY_GROUP_DECIMAL_DIVIDER_HEADER_",description:"_A_INPUT_CURRENCY_GROUP_DECIMAL_DIVIDER_DESCRIPTION_",props:["decimal-divider"]},{default:i(()=>[l(t,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=o=>e.model=o),"decimal-divider":",","thousand-divider":".",label:"Input"},null,8,["modelValue"]),l(t,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[1]||(n[1]=o=>e.model=o),"decimal-divider":".","thousand-divider":",",label:"Input"},null,8,["modelValue"]),P("div",null,"model: "+y(e.model),1)]),_:1},8,["code-html","code-js"])}const de=s(re,[["render",ae]]);function ue(){return{codeHtml:`<a-input-currency
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
<div>model: {{ model }}</div>`}}function ce(){return{codeJs:`import {
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
};`}}const me={name:"PageInputCurrencyDecimalPartLength",components:{AInputCurrency:R,AlohaExample:f},setup(){const e=m(10.02),{codeHtml:n}=ue(),{codeJs:a}=ce();return{codeHtml:n,codeJs:a,model:e}}};function pe(e,n,a,u,c,p){const t=r("a-input-currency"),d=r("aloha-example");return I(),_(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_CURRENCY_GROUP_DECIMAL_PART_LENGTH_HEADER_",description:"_A_INPUT_CURRENCY_GROUP_DECIMAL_PART_LENGTH_DESCRIPTION_",props:["decimal-part-length"]},{default:i(()=>[l(t,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=o=>e.model=o),"decimal-part-length":0,label:"decimal-part-length 0"},null,8,["modelValue"]),l(t,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[1]||(n[1]=o=>e.model=o),"decimal-part-length":1,label:"decimal-part-length 1"},null,8,["modelValue"]),l(t,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[2]||(n[2]=o=>e.model=o),"decimal-part-length":2,label:"decimal-part-length 2"},null,8,["modelValue"]),l(t,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[3]||(n[3]=o=>e.model=o),"decimal-part-length":4,label:"decimal-part-length 4"},null,8,["modelValue"]),P("div",null,"model: "+y(e.model),1)]),_:1},8,["code-html","code-js"])}const se=s(me,[["render",pe]]);function _e(){return{codeHtml:`<a-input-currency
  v-model="model"
  errors="Aloha"
  label="Input"
></a-input-currency>
<div>model: {{ model }}</div>`}}function ie(){return{codeJs:`import {
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
};`}}const Ie={name:"PageInputCurrencyErrors",components:{AInputCurrency:R,AlohaExample:f},setup(){const e=m(10.02),{codeHtml:n}=_e(),{codeJs:a}=ie();return{codeHtml:n,codeJs:a,model:e}}};function Pe(e,n,a,u,c,p){const t=r("a-input-currency"),d=r("aloha-example");return I(),_(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERRORS_HEADER_",description:"_A_UI_GROUP_ERRORS_DESCRIPTION_",props:["errors"]},{default:i(()=>[l(t,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=o=>e.model=o),errors:"Aloha",label:"Input"},null,8,["modelValue"]),P("div",null,"model: "+y(e.model),1)]),_:1},8,["code-html","code-js"])}const ye=s(Ie,[["render",Pe]]);function fe(){return{codeHtml:`<a-input-currency
  v-model="model"
  help-text="Aloha"
  label="Input"
></a-input-currency>
<div>model: {{ model }}</div>`}}function Re(){return{codeJs:`import {
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
};`}}const Ce={name:"PageInputCurrencyHelpText",components:{AInputCurrency:R,AlohaExample:f},setup(){const e=m(10.02),{codeHtml:n}=fe(),{codeJs:a}=Re();return{codeHtml:n,codeJs:a,model:e}}};function Ae(e,n,a,u,c,p){const t=r("a-input-currency"),d=r("aloha-example");return I(),_(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_HELP_TEXT_HEADER_",description:"_A_UI_GROUP_HELP_TEXT_DESCRIPTION_",props:["help-text"]},{default:i(()=>[l(t,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=o=>e.model=o),"help-text":"Aloha",label:"Input"},null,8,["modelValue"]),P("div",null,"model: "+y(e.model),1)]),_:1},8,["code-html","code-js"])}const Ee=s(Ce,[["render",Ae]]);function Ne(){return{codeHtml:`<a-input-currency
  v-model="model"
  :is-label-float="false"
  label="Input"
></a-input-currency>
<a-input-currency
  v-model="model"
  :is-label-float="true"
  label="Input"
></a-input-currency>
<div>model: {{ model }}</div>`}}function Oe(){return{codeJs:`import {
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
};`}}const Ue={name:"PageInputCurrencyLabelFloat",components:{AInputCurrency:R,AlohaExample:f},setup(){const e=m(10.02),{codeHtml:n}=Ne(),{codeJs:a}=Oe();return{codeHtml:n,codeJs:a,model:e}}};function ve(e,n,a,u,c,p){const t=r("a-input-currency"),d=r("aloha-example");return I(),_(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_IS_LABEL_FLOAT_HEADER_",description:"_A_UI_GROUP_IS_LABEL_FLOAT_DESCRIPTION_",props:["is-label-float"]},{default:i(()=>[l(t,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=o=>e.model=o),"is-label-float":!1,label:"Input"},null,8,["modelValue"]),l(t,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[1]||(n[1]=o=>e.model=o),"is-label-float":!0,label:"Input"},null,8,["modelValue"]),P("div",null,"model: "+y(e.model),1)]),_:1},8,["code-html","code-js"])}const ge=s(Ue,[["render",ve]]);function Se(){return{codeHtml:`<a-input-currency
  v-model="model"
  label="Input"
></a-input-currency>
<a-input-currency
  v-model="model"
  class="a_mt_3"
  label-screen-reader="Input"
></a-input-currency>
<div>model: {{ model }}</div>`}}function Te(){return{codeJs:`import {
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
};`}}const he={name:"PageInputCurrencyLabelScreenReader",components:{AInputCurrency:R,AlohaExample:f},setup(){const e=m(10.02),{codeHtml:n}=Se(),{codeJs:a}=Te();return{codeHtml:n,codeJs:a,model:e}}};function De(e,n,a,u,c,p){const t=r("a-input-currency"),d=r("aloha-example");return I(),_(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_SCREEN_READER_HEADER_",description:"_A_UI_GROUP_LABEL_SCREEN_READER_DESCRIPTION_",props:["label-screen-reader"]},{default:i(()=>[l(t,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=o=>e.model=o),label:"Input"},null,8,["modelValue"]),l(t,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[1]||(n[1]=o=>e.model=o),"label-screen-reader":"Input"},null,8,["modelValue"]),P("div",null,"model: "+y(e.model),1)]),_:1},8,["code-html","code-js"])}const be=s(he,[["render",De]]);function $e(){return{codeHtml:`<a-input-currency
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
<div>model: {{ model }}</div>`}}function He(){return{codeJs:`import {
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
};`}}const Ve={name:"PageInputCurrencyMaxMin",components:{AInputCurrency:R,AlohaExample:f},setup(){const e=m(10.02),n=m(10.02),{codeHtml:a}=$e(),{codeJs:u}=He();return{codeHtml:a,codeJs:u,model1:e,model2:n}}};function Le(e,n,a,u,c,p){const t=r("a-input-currency"),d=r("aloha-example");return I(),_(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_CURRENCY_GROUP_MAX_MIN_HEADER_",description:"_A_INPUT_CURRENCY_GROUP_MAX_MIN_DESCRIPTION_",props:["max","min"]},{default:i(()=>[l(t,{modelValue:e.model1,"onUpdate:modelValue":n[0]||(n[0]=o=>e.model1=o),max:20,min:1,label:"1 - 20"},null,8,["modelValue"]),P("div",null,"model: "+y(e.model1),1),l(t,{class:"a_mt_3",modelValue:e.model2,"onUpdate:modelValue":n[1]||(n[1]=o=>e.model2=o),max:19.05,min:-10.05,label:"-10.05 - 19.05"},null,8,["modelValue"]),P("div",null,"model: "+y(e.model2),1)]),_:1},8,["code-html","code-js"])}const Je=s(Ve,[["render",Le]]);function Ye(){return{codeHtml:`<a-input-currency
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
<div>model: {{ model }}</div>`}}function qe(){return{codeJs:`import {
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
};`}}const Me={name:"PageInputCurrencyModelType",components:{AInputCurrency:R,AlohaExample:f},setup(){const e=m(10.02),{codeHtml:n}=Ye(),{codeJs:a}=qe();return{codeHtml:n,codeJs:a,model:e}}};function je(e,n,a,u,c,p){const t=r("a-input-currency"),d=r("aloha-example");return I(),_(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_CURRENCY_GROUP_MODEL_TYPE_HEADER_",description:"_A_INPUT_CURRENCY_GROUP_MODEL_TYPE_DESCRIPTION_",props:["model-type"]},{default:i(()=>[l(t,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=o=>e.model=o),label:"number","model-type":"number"},null,8,["modelValue"]),l(t,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[1]||(n[1]=o=>e.model=o),label:"string","model-type":"string"},null,8,["modelValue"]),P("div",null,"model: "+y(e.model),1)]),_:1},8,["code-html","code-js"])}const Ge=s(Me,[["render",je]]);function Be(){return{codeHtml:`<a-input-currency
  v-model="model"
  help-text="Aloha"
  label="Input"
></a-input-currency>
<div>model: {{ model }}</div>`}}function Fe(){return{codeJs:`import {
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
};`}}const Xe={name:"PageInputCurrencyReadonly",components:{AInputCurrency:R,AlohaExample:f},setup(){const e=m(10.02),n=m(1e4),a=m(void 0),{codeHtml:u}=Be(),{codeJs:c}=Fe();return{codeHtml:u,codeJs:c,model1:e,model2:n,model3:a}}};function we(e,n,a,u,c,p){const t=r("a-input-currency"),d=r("aloha-example");return I(),_(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default"]},{default:i(()=>[l(t,{"model-value":e.model1,readonly:!0,label:"Input 1"},null,8,["model-value"]),l(t,{class:"a_mt_3","model-value":e.model2,readonly:!0,label:"Input 2"},null,8,["model-value"]),l(t,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"Input 3"},null,8,["model-value"]),l(t,{class:"a_mt_3","model-value":e.model3,readonly:!0,"help-text":"Aloha",label:"Input 4","readonly-default":"-"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const ke=s(Xe,[["render",we]]);function We(){return{codeHtml:`<a-input-currency
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
<div>model: {{ model }}</div>`}}function Qe(){return{codeJs:`import {
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
};`}}const Ze={name:"PageInputCurrencyStep",components:{AInputCurrency:R,AlohaExample:f},setup(){const e=m(10.02),{codeHtml:n}=We(),{codeJs:a}=Qe();return{codeHtml:n,codeJs:a,model:e}}};function ze(e,n,a,u,c,p){const t=r("a-input-currency"),d=r("aloha-example");return I(),_(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_CURRENCY_GROUP_STEP_HEADER_",description:"_A_INPUT_CURRENCY_GROUP_STEP_DESCRIPTION_",props:["step","controls-type"]},{default:i(()=>[l(t,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=o=>e.model=o),step:2,"controls-type":"plus-minus",label:"step 2"},null,8,["modelValue"]),l(t,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[1]||(n[1]=o=>e.model=o),step:.01,"controls-type":"plus-minus",label:"step 0.01"},null,8,["modelValue"]),P("div",null,"model: "+y(e.model),1)]),_:1},8,["code-html","code-js"])}const Ke=s(Ze,[["render",ze]]);function xe(){return{codeHtml:`<a-input-currency
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
<div>model: {{ model }}</div>`}}function en(){return{codeJs:`import {
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
};`}}const nn={name:"PageInputCurrencySymbol",components:{AInputCurrency:R,AlohaExample:f},setup(){const e=m(10.02),{codeHtml:n}=xe(),{codeJs:a}=en();return{codeHtml:n,codeJs:a,model:e}}};function on(e,n,a,u,c,p){const t=r("a-input-currency"),d=r("aloha-example");return I(),_(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_CURRENCY_GROUP_SYMBOL_HEADER_",description:"_A_INPUT_CURRENCY_GROUP_SYMBOL_DESCRIPTION_",props:["currency-symbol","currency-symbol-position"]},{default:i(()=>[l(t,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=o=>e.model=o),"currency-symbol-position":"right","currency-symbol":"%",label:"Input"},null,8,["modelValue"]),l(t,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[1]||(n[1]=o=>e.model=o),"currency-symbol-position":"left","currency-symbol":"$",label:"Input"},null,8,["modelValue"]),P("div",null,"model: "+y(e.model),1)]),_:1},8,["code-html","code-js"])}const tn=s(nn,[["render",on]]);function ln(){return{codeHtml:`<a-input-currency
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
<div>model: {{ model }}</div>`}}function rn(){return{codeJs:`import {
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
};`}}const an={name:"PageInputCurrencyThousandDivider",components:{AInputCurrency:R,AlohaExample:f},setup(){const e=m(10.02),{codeHtml:n}=ln(),{codeJs:a}=rn();return{codeHtml:n,codeJs:a,model:e}}};function dn(e,n,a,u,c,p){const t=r("a-input-currency"),d=r("aloha-example");return I(),_(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_CURRENCY_GROUP_THOUSAND_DIVIDER_HEADER_",description:"_A_INPUT_CURRENCY_GROUP_THOUSAND_DIVIDER_DESCRIPTION_",props:["thousand-divider"]},{default:i(()=>[l(t,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=o=>e.model=o),"thousand-divider":",","decimal-divider":".",label:"thousand-divider=','"},null,8,["modelValue"]),l(t,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[1]||(n[1]=o=>e.model=o),"thousand-divider":".","decimal-divider":",",label:"thousand-divider='.'"},null,8,["modelValue"]),l(t,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[2]||(n[2]=o=>e.model=o),"thousand-divider":" ",label:"thousand-divider=' '"},null,8,["modelValue"]),P("div",null,"model: "+y(e.model),1)]),_:1},8,["code-html","code-js"])}const un=s(an,[["render",dn]]);function cn(){return{codeHtml:`<a-input-currency
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
<div>model: {{ model }}</div>`}}function mn(){return{codeJs:`import {
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
};`}}const pn={name:"PageInputCurrencyValidationOnChange",components:{AInputCurrency:R,AlohaExample:f},setup(){const e=m(10.02),{codeHtml:n}=cn(),{codeJs:a}=mn();return{codeHtml:n,codeJs:a,model:e}}};function sn(e,n,a,u,c,p){const t=r("a-input-currency"),d=r("aloha-example");return I(),_(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_CURRENCY_GROUP_VALIDATION_ON_CHANGE_HEADER_",description:"_A_INPUT_CURRENCY_GROUP_VALIDATION_ON_CHANGE_DESCRIPTION_",props:["validation-on-change"]},{default:i(()=>[l(t,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=o=>e.model=o),"validation-on-change":!1,label:"validation-on-change=false"},null,8,["modelValue"]),l(t,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[1]||(n[1]=o=>e.model=o),"validation-on-change":!0,label:"validation-on-change=true"},null,8,["modelValue"]),P("div",null,"model: "+y(e.model),1)]),_:1},8,["code-html","code-js"])}const _n=s(pn,[["render",sn]]);function In(){return{dataEvents:[{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"},{name:"focus",description:"_A_UI_EVENTS_FOCUS_DESCRIPTION_",type:"Function"},{name:"blur",description:"_A_UI_EVENTS_BLUR_DESCRIPTION_",type:"Function"}]}}function Pn(){const e=A(()=>M({placeholder:"_A_INPUT_CURRENCY_COMPONENT_NAME_"}));return{pageTitle:A(()=>`AInputCurrency${e.value?` (${e.value})`:""}`)}}function yn(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"autocomplete",description:"_A_UI_PROPS_AUTOCOMPLETE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"clear-button-class",description:"_A_UI_PROPS_CLEAR_BUTTON_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"controls-type",description:"_A_INPUT_CURRENCY_PROPS_CONTROLS_TYPE_DESCRIPTION_",type:"String",default:"none",required:!1},{name:"currency-symbol",description:"_A_INPUT_CURRENCY_PROPS_CURRENCY_SYMBOL_DESCRIPTION_",type:"String",default:"€",required:!1},{name:"currency-symbol-position",description:"_A_INPUT_CURRENCY_PROPS_CURRENCY_SYMBOL_POSITION_DESCRIPTION_",type:"String",default:"right",required:!1},{name:"decimal-divider",description:"_A_INPUT_CURRENCY_PROPS_DECIMAL_DIVIDER_DESCRIPTION_",type:"String",default:",",required:!1},{name:"decimal-part-length",description:"_A_INPUT_CURRENCY_PROPS_DECIMAL_PART_LENGTH_DESCRIPTION_",type:"Number",default:2,required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon-prepend",description:"_A_INPUT_PROPS_ICON_PREPEND_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_input_currency_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"input-attributes",description:"_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"input-class",description:"_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"input-width",description:"_A_INPUT_CURRENCY_PROPS_INPUT_WIDTH_DESCRIPTION_",type:"String",default:200,required:!1},{name:"is-clear-button",description:"_A_UI_PROPS_IS_CLEAR_BUTTON_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-label-float",description:"_A_UI_PROPS_IS_LABEL_FLOAT_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"max",description:"_A_INPUT_CURRENCY_PROPS_MAX_DESCRIPTION_",type:"Number",default:void 0,required:!1},{name:"min",description:"_A_INPUT_CURRENCY_PROPS_MIN_DESCRIPTION_",type:"Number",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-type",description:"_A_INPUT_CURRENCY_PROPS_MODEL_TYPE_DESCRIPTION_",type:"String",default:"number",required:!1},{name:"model-undefined",description:"_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"placeholder",description:"_A_UI_PROPS_PLACEHOLDER_DESCRIPTION_",type:"String / Number / Object",default:void 0,required:!1},{name:"readonly",description:"_A_UI_PROPS_READONLY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"readonly-default",description:"_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_",type:"String",default:"",required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"step",description:"_A_INPUT_PROPS_STEP_DESCRIPTION_",type:"Number",default:1,required:!1},{name:"thousand-divider",description:"_A_INPUT_CURRENCY_PROPS_THOUSAND_DIVIDER_DESCRIPTION_",type:"String",default:".",required:!1},{name:"validation-on-change",description:"_A_INPUT_CURRENCY_PROPS_VALIDATION_ON_CHANGE_DESCRIPTION_",type:"Boolean",default:!1,required:!1}]}}const fn={name:"PageInputCurrency",components:{AlohaPage:J,AlohaTableProps:Y,AlohaTableTranslate:q,ATranslation:j,PageInputCurrencyBasic:w,PageInputCurrencyChange:z,PageInputCurrencyControlsType:oe,PageInputCurrencyDecimalDivider:de,PageInputCurrencyDecimalPartLength:se,PageInputCurrencyErrors:ye,PageInputCurrencyHelpText:Ee,PageInputCurrencyLabelFloat:ge,PageInputCurrencyLabelScreenReader:be,PageInputCurrencyMaxMin:Je,PageInputCurrencyModelType:Ge,PageInputCurrencyReadonly:ke,PageInputCurrencyStep:Ke,PageInputCurrencySymbol:tn,PageInputCurrencyThousandDivider:un,PageInputCurrencyValidationOnChange:_n},setup(){const{pageTitle:e}=Pn(),{dataProps:n}=yn(),{dataEvents:a}=In();return{dataEvents:a,dataProps:n,pageTitle:e}}};function Rn(e,n,a,u,c,p){const t=r("a-translation"),d=r("page-input-currency-basic"),o=r("page-input-currency-change"),E=r("page-input-currency-help-text"),N=r("page-input-currency-errors"),O=r("page-input-currency-label-screen-reader"),U=r("page-input-currency-label-float"),v=r("page-input-currency-symbol"),g=r("page-input-currency-controls-type"),S=r("page-input-currency-decimal-divider"),T=r("page-input-currency-max-min"),h=r("page-input-currency-model-type"),D=r("page-input-currency-step"),b=r("page-input-currency-decimal-part-length"),$=r("page-input-currency-thousand-divider"),H=r("page-input-currency-validation-on-change"),V=r("page-input-currency-readonly"),C=r("aloha-table-props"),L=r("aloha-page");return I(),_(L,{"page-title":e.pageTitle},{body:i(()=>[l(t,{tag:"p",html:"_A_INPUT_CURRENCY_COMPONENT_DESCRIPTION_"}),l(d),l(o),l(E),l(N),l(O),l(U),l(v),l(g),l(S),l(T),l(h),l(D),l(b),l($),l(H),l(V),l(C,{data:e.dataProps},null,8,["data"]),l(C,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"])]),_:1},8,["page-title"])}const Jn=s(fn,[["render",Rn]]);export{Jn as default};
