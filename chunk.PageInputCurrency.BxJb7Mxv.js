import{A as f,a as Y}from"./chunk.AlohaExample.DMfJ8IzN.js";import{A as q}from"./chunk.AlohaTableProps.CpDsOUFI.js";import{A as G}from"./chunk.AlohaTableTranslate.vZ1I0CaB.js";import{a9 as R,_ as s,g as j,A as M}from"./bundle.index.BEPV3T-Y.js";import{r as m,V as _,aT as i,e as l,W as I,_ as r,Z as P,aU as y,d as A}from"./chunk.vendor.Daji9SX9.js";import"./chunk.vendor-lodash.B3VVIBC-.js";import"./chunk.APageTabTitle.Va209jVg.js";import"./chunk.AlohaHighlightjs.BMm9LXzJ.js";import"./chunk.ATable.DnZRSQ59.js";import"./chunk.translations-ar.BojwqMl_.js";import"./chunk.translations-de.Cs8AX5zd.js";import"./chunk.translations-en.B6SbFZD7.js";import"./chunk.translations-es.Bq5-ThmB.js";import"./chunk.translations-fr.CNUiPhMd.js";import"./chunk.translations-hr.BHL5VI6-.js";import"./chunk.translations-it.CT6ME8Ab.js";import"./chunk.translations-ru.-V16kngL.js";function B(){return{codeHtml:`<a-input-currency
  v-model="model"
  label="Input"
></a-input-currency>
<div>model: {{ model }}</div>`}}function F(){return{codeJs:`import {
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
};`}}const X={name:"PageInputCurrencyBasic",components:{AInputCurrency:R,AlohaExample:f},setup(){const e=m(10.02),{codeHtml:n}=B(),{codeJs:a}=F();return{codeHtml:n,codeJs:a,model:e}}};function w(e,n,a,u,c,p){const t=l("a-input-currency"),d=l("aloha-example");return I(),_(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","label"]},{default:i(()=>[r(t,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=o=>e.model=o),label:"Input"},null,8,["modelValue"]),P("div",null,"model: "+y(e.model),1)]),_:1},8,["code-html","code-js"])}const W=s(X,[["render",w]]);function k(){return{codeHtml:`<a-input-currency
  :change="changeModel"
  :model-value="model"
  label="Input"
></a-input-currency>
<div>model: {{ model }}</div>`}}function Q(){return{codeJs:`import {
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
};`}}const Z={name:"PageInputCurrencyChange",components:{AInputCurrency:R,AlohaExample:f},setup(){const e=m(10.02),n=({model:c,id:p,props:t})=>{e.value=c,console.log(p,t)},{codeHtml:a}=k(),{codeJs:u}=Q();return{changeModel:n,codeHtml:a,codeJs:u,model:e}}};function z(e,n,a,u,c,p){const t=l("a-input-currency"),d=l("aloha-example");return I(),_(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CHANGE_HEADER_",description:"_A_UI_GROUP_CHANGE_DESCRIPTION_",props:["change","model-value"]},{default:i(()=>[r(t,{change:e.changeModel,"model-value":e.model,label:"Input"},null,8,["change","model-value"]),P("div",null,"model: "+y(e.model),1)]),_:1},8,["code-html","code-js"])}const K=s(Z,[["render",z]]);function x(){return{codeHtml:`<a-input-currency
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
<div>model: {{ model }}</div>`}}function ee(){return{codeJs:`import {
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
};`}}const ne={name:"PageInputCurrencyControlsType",components:{AInputCurrency:R,AlohaExample:f},setup(){const e=m(10.02),{codeHtml:n}=x(),{codeJs:a}=ee();return{codeHtml:n,codeJs:a,model:e}}};function oe(e,n,a,u,c,p){const t=l("a-input-currency"),d=l("aloha-example");return I(),_(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_CURRENCY_GROUP_CONTROLS_TYPE_HEADER_",description:"_A_INPUT_CURRENCY_GROUP_CONTROLS_TYPE_DESCRIPTION_",props:["controls-type"]},{default:i(()=>[r(t,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=o=>e.model=o),"controls-type":"none",label:"Input"},null,8,["modelValue"]),r(t,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[1]||(n[1]=o=>e.model=o),"controls-type":"plus-minus",label:"Input"},null,8,["modelValue"]),P("div",null,"model: "+y(e.model),1)]),_:1},8,["code-html","code-js"])}const te=s(ne,[["render",oe]]);function le(){return{codeHtml:`<a-input-currency
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
<div>model: {{ model }}</div>`}}function re(){return{codeJs:`import {
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
};`}}const ae={name:"PageInputCurrencyDecimalDivider",components:{AInputCurrency:R,AlohaExample:f},setup(){const e=m(10.02),{codeHtml:n}=le(),{codeJs:a}=re();return{codeHtml:n,codeJs:a,model:e}}};function de(e,n,a,u,c,p){const t=l("a-input-currency"),d=l("aloha-example");return I(),_(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_CURRENCY_GROUP_DECIMAL_DIVIDER_HEADER_",description:"_A_INPUT_CURRENCY_GROUP_DECIMAL_DIVIDER_DESCRIPTION_",props:["decimal-divider"]},{default:i(()=>[r(t,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=o=>e.model=o),"decimal-divider":",","thousand-divider":".",label:"Input"},null,8,["modelValue"]),r(t,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[1]||(n[1]=o=>e.model=o),"decimal-divider":".","thousand-divider":",",label:"Input"},null,8,["modelValue"]),P("div",null,"model: "+y(e.model),1)]),_:1},8,["code-html","code-js"])}const ue=s(ae,[["render",de]]);function ce(){return{codeHtml:`<a-input-currency
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
<div>model: {{ model }}</div>`}}function me(){return{codeJs:`import {
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
};`}}const pe={name:"PageInputCurrencyDecimalPartLength",components:{AInputCurrency:R,AlohaExample:f},setup(){const e=m(10.02),{codeHtml:n}=ce(),{codeJs:a}=me();return{codeHtml:n,codeJs:a,model:e}}};function se(e,n,a,u,c,p){const t=l("a-input-currency"),d=l("aloha-example");return I(),_(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_CURRENCY_GROUP_DECIMAL_PART_LENGTH_HEADER_",description:"_A_INPUT_CURRENCY_GROUP_DECIMAL_PART_LENGTH_DESCRIPTION_",props:["decimal-part-length"]},{default:i(()=>[r(t,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=o=>e.model=o),"decimal-part-length":0,label:"decimal-part-length 0"},null,8,["modelValue"]),r(t,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[1]||(n[1]=o=>e.model=o),"decimal-part-length":1,label:"decimal-part-length 1"},null,8,["modelValue"]),r(t,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[2]||(n[2]=o=>e.model=o),"decimal-part-length":2,label:"decimal-part-length 2"},null,8,["modelValue"]),r(t,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[3]||(n[3]=o=>e.model=o),"decimal-part-length":4,label:"decimal-part-length 4"},null,8,["modelValue"]),P("div",null,"model: "+y(e.model),1)]),_:1},8,["code-html","code-js"])}const _e=s(pe,[["render",se]]);function ie(){return{codeHtml:`<a-input-currency
  v-model="model"
  errors="Aloha"
  label="Input"
></a-input-currency>
<div>model: {{ model }}</div>`}}function Ie(){return{codeJs:`import {
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
};`}}const Pe={name:"PageInputCurrencyErrors",components:{AInputCurrency:R,AlohaExample:f},setup(){const e=m(10.02),{codeHtml:n}=ie(),{codeJs:a}=Ie();return{codeHtml:n,codeJs:a,model:e}}};function ye(e,n,a,u,c,p){const t=l("a-input-currency"),d=l("aloha-example");return I(),_(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERRORS_HEADER_",description:"_A_UI_GROUP_ERRORS_DESCRIPTION_",props:["errors"]},{default:i(()=>[r(t,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=o=>e.model=o),errors:"Aloha",label:"Input"},null,8,["modelValue"]),P("div",null,"model: "+y(e.model),1)]),_:1},8,["code-html","code-js"])}const fe=s(Pe,[["render",ye]]);function Re(){return{codeHtml:`<a-input-currency
  v-model="model"
  help-text="Aloha"
  label="Input"
></a-input-currency>
<div>model: {{ model }}</div>`}}function Ce(){return{codeJs:`import {
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
};`}}const Ae={name:"PageInputCurrencyHelpText",components:{AInputCurrency:R,AlohaExample:f},setup(){const e=m(10.02),{codeHtml:n}=Re(),{codeJs:a}=Ce();return{codeHtml:n,codeJs:a,model:e}}};function Ee(e,n,a,u,c,p){const t=l("a-input-currency"),d=l("aloha-example");return I(),_(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_HELP_TEXT_HEADER_",description:"_A_UI_GROUP_HELP_TEXT_DESCRIPTION_",props:["help-text"]},{default:i(()=>[r(t,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=o=>e.model=o),"help-text":"Aloha",label:"Input"},null,8,["modelValue"]),P("div",null,"model: "+y(e.model),1)]),_:1},8,["code-html","code-js"])}const Ne=s(Ae,[["render",Ee]]);function Oe(){return{codeHtml:`<a-input-currency
  v-model="model"
  :is-label-float="false"
  label="Input"
  label-description="Aloha"
></a-input-currency>
<div>model: {{ model }}</div>`}}function Ue(){return{codeJs:`import {
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
};`}}const ge={name:"PageInputCurrencyLabelDescription",components:{AInputCurrency:R,AlohaExample:f},setup(){const e=m(10.02),{codeHtml:n}=Oe(),{codeJs:a}=Ue();return{codeHtml:n,codeJs:a,model:e}}};function Te(e,n,a,u,c,p){const t=l("a-input-currency"),d=l("aloha-example");return I(),_(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_",description:"_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_",props:["label-description"]},{default:i(()=>[r(t,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=o=>e.model=o),"is-label-float":!1,label:"Input","label-description":"Aloha"},null,8,["modelValue"]),P("div",null,"model: "+y(e.model),1)]),_:1},8,["code-html","code-js"])}const ve=s(ge,[["render",Te]]);function Se(){return{codeHtml:`<a-input-currency
  v-model="model"
  :is-label-float="false"
  label="Input"
></a-input-currency>
<a-input-currency
  v-model="model"
  :is-label-float="true"
  label="Input"
></a-input-currency>
<div>model: {{ model }}</div>`}}function he(){return{codeJs:`import {
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
};`}}const be={name:"PageInputCurrencyLabelFloat",components:{AInputCurrency:R,AlohaExample:f},setup(){const e=m(10.02),{codeHtml:n}=Se(),{codeJs:a}=he();return{codeHtml:n,codeJs:a,model:e}}};function De(e,n,a,u,c,p){const t=l("a-input-currency"),d=l("aloha-example");return I(),_(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_IS_LABEL_FLOAT_HEADER_",description:"_A_UI_GROUP_IS_LABEL_FLOAT_DESCRIPTION_",props:["is-label-float"]},{default:i(()=>[r(t,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=o=>e.model=o),"is-label-float":!1,label:"Input"},null,8,["modelValue"]),r(t,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[1]||(n[1]=o=>e.model=o),"is-label-float":!0,label:"Input"},null,8,["modelValue"]),P("div",null,"model: "+y(e.model),1)]),_:1},8,["code-html","code-js"])}const $e=s(be,[["render",De]]);function He(){return{codeHtml:`<a-input-currency
  v-model="model"
  label="Input"
></a-input-currency>
<a-input-currency
  v-model="model"
  class="a_mt_3"
  label-screen-reader="Input"
></a-input-currency>
<div>model: {{ model }}</div>`}}function Ve(){return{codeJs:`import {
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
};`}}const Le={name:"PageInputCurrencyLabelScreenReader",components:{AInputCurrency:R,AlohaExample:f},setup(){const e=m(10.02),{codeHtml:n}=He(),{codeJs:a}=Ve();return{codeHtml:n,codeJs:a,model:e}}};function Je(e,n,a,u,c,p){const t=l("a-input-currency"),d=l("aloha-example");return I(),_(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_SCREEN_READER_HEADER_",description:"_A_UI_GROUP_LABEL_SCREEN_READER_DESCRIPTION_",props:["label-screen-reader"]},{default:i(()=>[r(t,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=o=>e.model=o),label:"Input"},null,8,["modelValue"]),r(t,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[1]||(n[1]=o=>e.model=o),"label-screen-reader":"Input"},null,8,["modelValue"]),P("div",null,"model: "+y(e.model),1)]),_:1},8,["code-html","code-js"])}const Ye=s(Le,[["render",Je]]);function qe(){return{codeHtml:`<a-input-currency
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
<div>model: {{ model }}</div>`}}function Ge(){return{codeJs:`import {
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
};`}}const je={name:"PageInputCurrencyMaxMin",components:{AInputCurrency:R,AlohaExample:f},setup(){const e=m(10.02),n=m(10.02),{codeHtml:a}=qe(),{codeJs:u}=Ge();return{codeHtml:a,codeJs:u,model1:e,model2:n}}};function Me(e,n,a,u,c,p){const t=l("a-input-currency"),d=l("aloha-example");return I(),_(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_CURRENCY_GROUP_MAX_MIN_HEADER_",description:"_A_INPUT_CURRENCY_GROUP_MAX_MIN_DESCRIPTION_",props:["max","min"]},{default:i(()=>[r(t,{modelValue:e.model1,"onUpdate:modelValue":n[0]||(n[0]=o=>e.model1=o),max:20,min:1,label:"1 - 20"},null,8,["modelValue"]),P("div",null,"model: "+y(e.model1),1),r(t,{class:"a_mt_3",modelValue:e.model2,"onUpdate:modelValue":n[1]||(n[1]=o=>e.model2=o),max:19.05,min:-10.05,label:"-10.05 - 19.05"},null,8,["modelValue"]),P("div",null,"model: "+y(e.model2),1)]),_:1},8,["code-html","code-js"])}const Be=s(je,[["render",Me]]);function Fe(){return{codeHtml:`<a-input-currency
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
<div>model: {{ model }}</div>`}}function Xe(){return{codeJs:`import {
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
};`}}const we={name:"PageInputCurrencyModelType",components:{AInputCurrency:R,AlohaExample:f},setup(){const e=m(10.02),{codeHtml:n}=Fe(),{codeJs:a}=Xe();return{codeHtml:n,codeJs:a,model:e}}};function We(e,n,a,u,c,p){const t=l("a-input-currency"),d=l("aloha-example");return I(),_(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_CURRENCY_GROUP_MODEL_TYPE_HEADER_",description:"_A_INPUT_CURRENCY_GROUP_MODEL_TYPE_DESCRIPTION_",props:["model-type"]},{default:i(()=>[r(t,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=o=>e.model=o),label:"number","model-type":"number"},null,8,["modelValue"]),r(t,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[1]||(n[1]=o=>e.model=o),label:"string","model-type":"string"},null,8,["modelValue"]),P("div",null,"model: "+y(e.model),1)]),_:1},8,["code-html","code-js"])}const ke=s(we,[["render",We]]);function Qe(){return{codeHtml:`<a-input-currency
  v-model="model"
  help-text="Aloha"
  label="Input"
></a-input-currency>
<div>model: {{ model }}</div>`}}function Ze(){return{codeJs:`import {
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
};`}}const ze={name:"PageInputCurrencyReadonly",components:{AInputCurrency:R,AlohaExample:f},setup(){const e=m(10.02),n=m(1e4),a=m(void 0),{codeHtml:u}=Qe(),{codeJs:c}=Ze();return{codeHtml:u,codeJs:c,model1:e,model2:n,model3:a}}};function Ke(e,n,a,u,c,p){const t=l("a-input-currency"),d=l("aloha-example");return I(),_(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default"]},{default:i(()=>[r(t,{"model-value":e.model1,readonly:!0,label:"Input 1"},null,8,["model-value"]),r(t,{class:"a_mt_3","model-value":e.model2,readonly:!0,label:"Input 2"},null,8,["model-value"]),r(t,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"Input 3"},null,8,["model-value"]),r(t,{class:"a_mt_3","model-value":e.model3,readonly:!0,"help-text":"Aloha",label:"Input 4","readonly-default":"-"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const xe=s(ze,[["render",Ke]]);function en(){return{codeHtml:`<a-input-currency
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
<div>model: {{ model }}</div>`}}function nn(){return{codeJs:`import {
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
};`}}const on={name:"PageInputCurrencyStep",components:{AInputCurrency:R,AlohaExample:f},setup(){const e=m(10.02),{codeHtml:n}=en(),{codeJs:a}=nn();return{codeHtml:n,codeJs:a,model:e}}};function tn(e,n,a,u,c,p){const t=l("a-input-currency"),d=l("aloha-example");return I(),_(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_CURRENCY_GROUP_STEP_HEADER_",description:"_A_INPUT_CURRENCY_GROUP_STEP_DESCRIPTION_",props:["step","controls-type"]},{default:i(()=>[r(t,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=o=>e.model=o),step:2,"controls-type":"plus-minus",label:"step 2"},null,8,["modelValue"]),r(t,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[1]||(n[1]=o=>e.model=o),step:.01,"controls-type":"plus-minus",label:"step 0.01"},null,8,["modelValue"]),P("div",null,"model: "+y(e.model),1)]),_:1},8,["code-html","code-js"])}const ln=s(on,[["render",tn]]);function rn(){return{codeHtml:`<a-input-currency
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
<div>model: {{ model }}</div>`}}function an(){return{codeJs:`import {
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
};`}}const dn={name:"PageInputCurrencySymbol",components:{AInputCurrency:R,AlohaExample:f},setup(){const e=m(10.02),{codeHtml:n}=rn(),{codeJs:a}=an();return{codeHtml:n,codeJs:a,model:e}}};function un(e,n,a,u,c,p){const t=l("a-input-currency"),d=l("aloha-example");return I(),_(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_CURRENCY_GROUP_SYMBOL_HEADER_",description:"_A_INPUT_CURRENCY_GROUP_SYMBOL_DESCRIPTION_",props:["currency-symbol","currency-symbol-position"]},{default:i(()=>[r(t,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=o=>e.model=o),"currency-symbol-position":"right","currency-symbol":"%",label:"Input"},null,8,["modelValue"]),r(t,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[1]||(n[1]=o=>e.model=o),"currency-symbol-position":"left","currency-symbol":"$",label:"Input"},null,8,["modelValue"]),P("div",null,"model: "+y(e.model),1)]),_:1},8,["code-html","code-js"])}const cn=s(dn,[["render",un]]);function mn(){return{codeHtml:`<a-input-currency
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
<div>model: {{ model }}</div>`}}function pn(){return{codeJs:`import {
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
};`}}const sn={name:"PageInputCurrencyThousandDivider",components:{AInputCurrency:R,AlohaExample:f},setup(){const e=m(10.02),{codeHtml:n}=mn(),{codeJs:a}=pn();return{codeHtml:n,codeJs:a,model:e}}};function _n(e,n,a,u,c,p){const t=l("a-input-currency"),d=l("aloha-example");return I(),_(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_CURRENCY_GROUP_THOUSAND_DIVIDER_HEADER_",description:"_A_INPUT_CURRENCY_GROUP_THOUSAND_DIVIDER_DESCRIPTION_",props:["thousand-divider"]},{default:i(()=>[r(t,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=o=>e.model=o),"thousand-divider":",","decimal-divider":".",label:"thousand-divider=','"},null,8,["modelValue"]),r(t,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[1]||(n[1]=o=>e.model=o),"thousand-divider":".","decimal-divider":",",label:"thousand-divider='.'"},null,8,["modelValue"]),r(t,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[2]||(n[2]=o=>e.model=o),"thousand-divider":" ",label:"thousand-divider=' '"},null,8,["modelValue"]),P("div",null,"model: "+y(e.model),1)]),_:1},8,["code-html","code-js"])}const In=s(sn,[["render",_n]]);function Pn(){return{codeHtml:`<a-input-currency
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
<div>model: {{ model }}</div>`}}function yn(){return{codeJs:`import {
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
};`}}const fn={name:"PageInputCurrencyValidationOnChange",components:{AInputCurrency:R,AlohaExample:f},setup(){const e=m(10.02),{codeHtml:n}=Pn(),{codeJs:a}=yn();return{codeHtml:n,codeJs:a,model:e}}};function Rn(e,n,a,u,c,p){const t=l("a-input-currency"),d=l("aloha-example");return I(),_(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_CURRENCY_GROUP_VALIDATION_ON_CHANGE_HEADER_",description:"_A_INPUT_CURRENCY_GROUP_VALIDATION_ON_CHANGE_DESCRIPTION_",props:["validation-on-change"]},{default:i(()=>[r(t,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=o=>e.model=o),"validation-on-change":!1,label:"validation-on-change=false"},null,8,["modelValue"]),r(t,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[1]||(n[1]=o=>e.model=o),"validation-on-change":!0,label:"validation-on-change=true"},null,8,["modelValue"]),P("div",null,"model: "+y(e.model),1)]),_:1},8,["code-html","code-js"])}const Cn=s(fn,[["render",Rn]]);function An(){return{dataEvents:[{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"},{name:"focus",description:"_A_UI_EVENTS_FOCUS_DESCRIPTION_",type:"Function"},{name:"blur",description:"_A_UI_EVENTS_BLUR_DESCRIPTION_",type:"Function"}]}}function En(){const e=A(()=>j({placeholder:"_A_INPUT_CURRENCY_COMPONENT_NAME_"}));return{pageTitle:A(()=>`AInputCurrency${e.value?` (${e.value})`:""}`)}}function Nn(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"autocomplete",description:"_A_UI_PROPS_AUTOCOMPLETE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"clear-button-class",description:"_A_UI_PROPS_CLEAR_BUTTON_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"controls-type",description:"_A_INPUT_CURRENCY_PROPS_CONTROLS_TYPE_DESCRIPTION_",type:"String",default:"none",required:!1},{name:"currency-symbol",description:"_A_INPUT_CURRENCY_PROPS_CURRENCY_SYMBOL_DESCRIPTION_",type:"String",default:"€",required:!1},{name:"currency-symbol-position",description:"_A_INPUT_CURRENCY_PROPS_CURRENCY_SYMBOL_POSITION_DESCRIPTION_",type:"String",default:"right",required:!1},{name:"decimal-divider",description:"_A_INPUT_CURRENCY_PROPS_DECIMAL_DIVIDER_DESCRIPTION_",type:"String",default:",",required:!1},{name:"decimal-part-length",description:"_A_INPUT_CURRENCY_PROPS_DECIMAL_PART_LENGTH_DESCRIPTION_",type:"Number",default:2,required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon-prepend",description:"_A_INPUT_PROPS_ICON_PREPEND_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_input_currency_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"input-attributes",description:"_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"input-class",description:"_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"input-width",description:"_A_INPUT_CURRENCY_PROPS_INPUT_WIDTH_DESCRIPTION_",type:"String",default:200,required:!1},{name:"integer-part-max-length",description:"_A_INPUT_CURRENCY_PROPS_INTEGER_PART_MAX_LENGTH_DESCRIPTION_",type:"Number",default:15,required:!1},{name:"is-clear-button",description:"_A_UI_PROPS_IS_CLEAR_BUTTON_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-label-float",description:"_A_UI_PROPS_IS_LABEL_FLOAT_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-description",description:"_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"max",description:"_A_INPUT_CURRENCY_PROPS_MAX_DESCRIPTION_",type:"Number",default:void 0,required:!1},{name:"min",description:"_A_INPUT_CURRENCY_PROPS_MIN_DESCRIPTION_",type:"Number",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-type",description:"_A_INPUT_CURRENCY_PROPS_MODEL_TYPE_DESCRIPTION_",type:"String",default:"number",required:!1},{name:"model-undefined",description:"_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"placeholder",description:"_A_UI_PROPS_PLACEHOLDER_DESCRIPTION_",type:"String / Number / Object",default:void 0,required:!1},{name:"readonly",description:"_A_UI_PROPS_READONLY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"readonly-default",description:"_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_",type:"String",default:"",required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"step",description:"_A_INPUT_PROPS_STEP_DESCRIPTION_",type:"Number",default:1,required:!1},{name:"thousand-divider",description:"_A_INPUT_CURRENCY_PROPS_THOUSAND_DIVIDER_DESCRIPTION_",type:"String",default:".",required:!1},{name:"validation-on-change",description:"_A_INPUT_CURRENCY_PROPS_VALIDATION_ON_CHANGE_DESCRIPTION_",type:"Boolean",default:!1,required:!1}]}}const On={name:"PageInputCurrency",components:{AlohaPage:Y,AlohaTableProps:q,AlohaTableTranslate:G,ATranslation:M,PageInputCurrencyBasic:W,PageInputCurrencyChange:K,PageInputCurrencyControlsType:te,PageInputCurrencyDecimalDivider:ue,PageInputCurrencyDecimalPartLength:_e,PageInputCurrencyErrors:fe,PageInputCurrencyHelpText:Ne,PageInputCurrencyLabelDescription:ve,PageInputCurrencyLabelFloat:$e,PageInputCurrencyLabelScreenReader:Ye,PageInputCurrencyMaxMin:Be,PageInputCurrencyModelType:ke,PageInputCurrencyReadonly:xe,PageInputCurrencyStep:ln,PageInputCurrencySymbol:cn,PageInputCurrencyThousandDivider:In,PageInputCurrencyValidationOnChange:Cn},setup(){const{pageTitle:e}=En(),{dataProps:n}=Nn(),{dataEvents:a}=An();return{dataEvents:a,dataProps:n,pageTitle:e}}};function Un(e,n,a,u,c,p){const t=l("a-translation"),d=l("page-input-currency-basic"),o=l("page-input-currency-change"),E=l("page-input-currency-help-text"),N=l("page-input-currency-errors"),O=l("page-input-currency-label-description"),U=l("page-input-currency-label-screen-reader"),g=l("page-input-currency-label-float"),T=l("page-input-currency-symbol"),v=l("page-input-currency-controls-type"),S=l("page-input-currency-decimal-divider"),h=l("page-input-currency-max-min"),b=l("page-input-currency-model-type"),D=l("page-input-currency-step"),$=l("page-input-currency-decimal-part-length"),H=l("page-input-currency-thousand-divider"),V=l("page-input-currency-validation-on-change"),L=l("page-input-currency-readonly"),C=l("aloha-table-props"),J=l("aloha-page");return I(),_(J,{"page-title":e.pageTitle},{body:i(()=>[r(t,{tag:"p",html:"_A_INPUT_CURRENCY_COMPONENT_DESCRIPTION_"}),r(d),r(o),r(E),r(N),r(O),r(U),r(g),r(T),r(v),r(S),r(h),r(b),r(D),r($),r(H),r(V),r(L),r(C,{data:e.dataProps},null,8,["data"]),r(C,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"])]),_:1},8,["page-title"])}const Bn=s(On,[["render",Un]]);export{Bn as default};
