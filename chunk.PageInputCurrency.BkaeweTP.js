import{A as f,a as L}from"./chunk.AlohaExample.Ch828iNY.js";import{A as J}from"./chunk.AlohaTableProps.C36Ex24p.js";import{A as Y}from"./chunk.AlohaTableTranslate.HPqL3d0j.js";import{_,g as M,A as q}from"./bundle.index.C5ESvXvL.js";import{k as C}from"./chunk.AForm.DSIL6mB0.js";import{r as p,m as t,C as I,L as y,B as P,G as a,F as s,M as i,a as R}from"./chunk.vendor.D-Y3mz6a.js";import"./chunk.vendor-lodash.ClBXVCWL.js";import"./chunk.ATable.C4VIyU-j.js";import"./chunk.utilsMath.7PmiGUbm.js";import"./chunk.vendor-tinymce.2RT9eEW9.js";import"./chunk.ADatepicker.DHZnNTS-.js";import"./chunk.UiMixinProps.BVfs3aDc.js";import"./chunk.AInputNumber.kHSOqT_P.js";import"./chunk.ATinymce.CslL0xeu.js";function G(){return{codeHtml:`<a-input-currency
  v-model="model"
  label="Input"
></a-input-currency>
<div>model: {{ model }}</div>`}}function j(){return{codeJs:`import {
  ref,
} from "vue";

import AInputCurrency from "aloha-vue/src/ui/AInputCurrency/AInputCurrency";
    
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
};`}}const B={name:"PageInputCurrencyBasic",components:{AInputCurrency:C,AlohaExample:f},setup(){const e=p(10.02),{codeHtml:n}=G(),{codeJs:r}=j();return{codeHtml:n,codeJs:r,model:e}}};function F(e,n,r,d,c,m){const l=t("a-input-currency"),u=t("aloha-example");return P(),I(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","label"]},{default:y(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=o=>e.model=o),label:"Input"},null,8,["modelValue"]),s("div",null,"model: "+i(e.model),1)]),_:1},8,["code-html","code-js"])}const X=_(B,[["render",F]]);function k(){return{codeHtml:`<a-input-currency
  :change="changeModel"
  :model-value="model"
  label="Input"
></a-input-currency>
<div>model: {{ model }}</div>`}}function w(){return{codeJs:`import {
  ref,
} from "vue";

import AInput from "aloha-vue/src/ui/AInput/AInput";
    
export default {
  name: "PageInputCurrencyChange",
  components: {
    AInput,
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
};`}}const W={name:"PageInputCurrencyChange",components:{AInputCurrency:C,AlohaExample:f},setup(){const e=p(10.02),n=({model:c,id:m,props:l})=>{e.value=c,console.log(m,l)},{codeHtml:r}=k(),{codeJs:d}=w();return{changeModel:n,codeHtml:r,codeJs:d,model:e}}};function Q(e,n,r,d,c,m){const l=t("a-input-currency"),u=t("aloha-example");return P(),I(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CHANGE_HEADER_",description:"_A_UI_GROUP_CHANGE_DESCRIPTION_",props:["change","model-value"]},{default:y(()=>[a(l,{change:e.changeModel,"model-value":e.model,label:"Input"},null,8,["change","model-value"]),s("div",null,"model: "+i(e.model),1)]),_:1},8,["code-html","code-js"])}const z=_(W,[["render",Q]]);function K(){return{codeHtml:`<a-input-currency
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
<div>model: {{ model }}</div>`}}function Z(){return{codeJs:`import {
  ref,
} from "vue";

import AInputCurrency from "aloha-vue/src/ui/AInputCurrency/AInputCurrency";
    
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
};`}}const x={name:"PageInputCurrencyControlsType",components:{AInputCurrency:C,AlohaExample:f},setup(){const e=p(10.02),{codeHtml:n}=K(),{codeJs:r}=Z();return{codeHtml:n,codeJs:r,model:e}}};function ee(e,n,r,d,c,m){const l=t("a-input-currency"),u=t("aloha-example");return P(),I(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_CURRENCY_GROUP_CONTROLS_TYPE_HEADER_",description:"_A_INPUT_CURRENCY_GROUP_CONTROLS_TYPE_DESCRIPTION_",props:["controls-type"]},{default:y(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=o=>e.model=o),"controls-type":"none",label:"Input"},null,8,["modelValue"]),a(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[1]||(n[1]=o=>e.model=o),"controls-type":"plus-minus",label:"Input"},null,8,["modelValue"]),s("div",null,"model: "+i(e.model),1)]),_:1},8,["code-html","code-js"])}const ne=_(x,[["render",ee]]);function oe(){return{codeHtml:`<a-input-currency
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
<div>model: {{ model }}</div>`}}function te(){return{codeJs:`import {
  ref,
} from "vue";

import AInputCurrency from "aloha-vue/src/ui/AInputCurrency/AInputCurrency";
    
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
};`}}const re={name:"PageInputCurrencyDecimalDivider",components:{AInputCurrency:C,AlohaExample:f},setup(){const e=p(10.02),{codeHtml:n}=oe(),{codeJs:r}=te();return{codeHtml:n,codeJs:r,model:e}}};function le(e,n,r,d,c,m){const l=t("a-input-currency"),u=t("aloha-example");return P(),I(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_CURRENCY_GROUP_DECIMAL_DIVIDER_HEADER_",description:"_A_INPUT_CURRENCY_GROUP_DECIMAL_DIVIDER_DESCRIPTION_",props:["decimal-divider"]},{default:y(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=o=>e.model=o),"decimal-divider":",","thousand-divider":".",label:"Input"},null,8,["modelValue"]),a(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[1]||(n[1]=o=>e.model=o),"decimal-divider":".","thousand-divider":",",label:"Input"},null,8,["modelValue"]),s("div",null,"model: "+i(e.model),1)]),_:1},8,["code-html","code-js"])}const ae=_(re,[["render",le]]);function ue(){return{codeHtml:`<a-input-currency
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
<div>model: {{ model }}</div>`}}function de(){return{codeJs:`import {
  ref,
} from "vue";

import AInputCurrency from "aloha-vue/src/ui/AInputCurrency/AInputCurrency";
    
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
};`}}const ce={name:"PageInputCurrencyDecimalPartLength",components:{AInputCurrency:C,AlohaExample:f},setup(){const e=p(10.02),{codeHtml:n}=ue(),{codeJs:r}=de();return{codeHtml:n,codeJs:r,model:e}}};function me(e,n,r,d,c,m){const l=t("a-input-currency"),u=t("aloha-example");return P(),I(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_CURRENCY_GROUP_DECIMAL_PART_LENGTH_HEADER_",description:"_A_INPUT_CURRENCY_GROUP_DECIMAL_PART_LENGTH_DESCRIPTION_",props:["decimal-part-length"]},{default:y(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=o=>e.model=o),"decimal-part-length":0,label:"decimal-part-length 0"},null,8,["modelValue"]),a(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[1]||(n[1]=o=>e.model=o),"decimal-part-length":1,label:"decimal-part-length 1"},null,8,["modelValue"]),a(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[2]||(n[2]=o=>e.model=o),"decimal-part-length":2,label:"decimal-part-length 2"},null,8,["modelValue"]),a(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[3]||(n[3]=o=>e.model=o),"decimal-part-length":4,label:"decimal-part-length 4"},null,8,["modelValue"]),s("div",null,"model: "+i(e.model),1)]),_:1},8,["code-html","code-js"])}const pe=_(ce,[["render",me]]);function se(){return{codeHtml:`<a-input-currency
  v-model="model"
  errors="Aloha"
  label="Input"
></a-input-currency>
<div>model: {{ model }}</div>`}}function ie(){return{codeJs:`import {
  ref,
} from "vue";

import AInputCurrency from "aloha-vue/src/ui/AInputCurrency/AInputCurrency";
    
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
};`}}const _e={name:"PageInputCurrencyErrors",components:{AInputCurrency:C,AlohaExample:f},setup(){const e=p(10.02),{codeHtml:n}=se(),{codeJs:r}=ie();return{codeHtml:n,codeJs:r,model:e}}};function Ie(e,n,r,d,c,m){const l=t("a-input-currency"),u=t("aloha-example");return P(),I(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERRORS_HEADER_",description:"_A_UI_GROUP_ERRORS_DESCRIPTION_",props:["errors"]},{default:y(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=o=>e.model=o),errors:"Aloha",label:"Input"},null,8,["modelValue"]),s("div",null,"model: "+i(e.model),1)]),_:1},8,["code-html","code-js"])}const ye=_(_e,[["render",Ie]]);function Pe(){return{codeHtml:`<a-input-currency
  v-model="model"
  help-text="Aloha"
  label="Input"
></a-input-currency>
<div>model: {{ model }}</div>`}}function fe(){return{codeJs:`import {
  ref,
} from "vue";

import AInputCurrency from "aloha-vue/src/ui/AInputCurrency/AInputCurrency";
    
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
};`}}const Ce={name:"PageInputCurrencyHelpText",components:{AInputCurrency:C,AlohaExample:f},setup(){const e=p(10.02),{codeHtml:n}=Pe(),{codeJs:r}=fe();return{codeHtml:n,codeJs:r,model:e}}};function Ae(e,n,r,d,c,m){const l=t("a-input-currency"),u=t("aloha-example");return P(),I(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_HELP_TEXT_HEADER_",description:"_A_UI_GROUP_HELP_TEXT_DESCRIPTION_",props:["help-text"]},{default:y(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=o=>e.model=o),"help-text":"Aloha",label:"Input"},null,8,["modelValue"]),s("div",null,"model: "+i(e.model),1)]),_:1},8,["code-html","code-js"])}const Re=_(Ce,[["render",Ae]]);function Ee(){return{codeHtml:`<a-input-currency
  v-model="model"
  :is-label-float="false"
  label="Input"
></a-input-currency>
<a-input-currency
  v-model="model"
  :is-label-float="true"
  label="Input"
></a-input-currency>
<div>model: {{ model }}</div>`}}function Ne(){return{codeJs:`import {
  ref,
} from "vue";

import AInputCurrency from "aloha-vue/src/ui/AInputCurrency/AInputCurrency";
    
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
};`}}const Oe={name:"PageInputCurrencyLabelFloat",components:{AInputCurrency:C,AlohaExample:f},setup(){const e=p(10.02),{codeHtml:n}=Ee(),{codeJs:r}=Ne();return{codeHtml:n,codeJs:r,model:e}}};function Ue(e,n,r,d,c,m){const l=t("a-input-currency"),u=t("aloha-example");return P(),I(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_IS_LABEL_FLOAT_HEADER_",description:"_A_UI_GROUP_IS_LABEL_FLOAT_DESCRIPTION_",props:["is-label-float"]},{default:y(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=o=>e.model=o),"is-label-float":!1,label:"Input"},null,8,["modelValue"]),a(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[1]||(n[1]=o=>e.model=o),"is-label-float":!0,label:"Input"},null,8,["modelValue"]),s("div",null,"model: "+i(e.model),1)]),_:1},8,["code-html","code-js"])}const Te=_(Oe,[["render",Ue]]);function Se(){return{codeHtml:`<a-input-currency
  v-model="model"
  label="Input"
></a-input-currency>
<a-input-currency
  v-model="model"
  class="a_mt_3"
  label-screen-reader="Input"
></a-input-currency>
<div>model: {{ model }}</div>`}}function ge(){return{codeJs:`import {
  ref,
} from "vue";

import AInputCurrency from "aloha-vue/src/ui/AInputCurrency/AInputCurrency";
    
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
};`}}const ve={name:"PageInputCurrencyLabelScreenReader",components:{AInputCurrency:C,AlohaExample:f},setup(){const e=p(10.02),{codeHtml:n}=Se(),{codeJs:r}=ge();return{codeHtml:n,codeJs:r,model:e}}};function he(e,n,r,d,c,m){const l=t("a-input-currency"),u=t("aloha-example");return P(),I(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_SCREEN_READER_HEADER_",description:"_A_UI_GROUP_LABEL_SCREEN_READER_DESCRIPTION_",props:["label-screen-reader"]},{default:y(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=o=>e.model=o),label:"Input"},null,8,["modelValue"]),a(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[1]||(n[1]=o=>e.model=o),"label-screen-reader":"Input"},null,8,["modelValue"]),s("div",null,"model: "+i(e.model),1)]),_:1},8,["code-html","code-js"])}const be=_(ve,[["render",he]]);function De(){return{codeHtml:`<a-input-currency
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
<div>model: {{ model }}</div>`}}function $e(){return{codeJs:`import {
  ref,
} from "vue";

import AInputCurrency from "aloha-vue/src/ui/AInputCurrency/AInputCurrency";
    
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
};`}}const He={name:"PageInputCurrencyMaxMin",components:{AInputCurrency:C,AlohaExample:f},setup(){const e=p(10.02),n=p(10.02),{codeHtml:r}=De(),{codeJs:d}=$e();return{codeHtml:r,codeJs:d,model1:e,model2:n}}};function Ve(e,n,r,d,c,m){const l=t("a-input-currency"),u=t("aloha-example");return P(),I(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_CURRENCY_GROUP_MAX_MIN_HEADER_",description:"_A_INPUT_CURRENCY_GROUP_MAX_MIN_DESCRIPTION_",props:["max","min"]},{default:y(()=>[a(l,{modelValue:e.model1,"onUpdate:modelValue":n[0]||(n[0]=o=>e.model1=o),max:20,min:1,label:"1 - 20"},null,8,["modelValue"]),s("div",null,"model: "+i(e.model1),1),a(l,{class:"a_mt_3",modelValue:e.model2,"onUpdate:modelValue":n[1]||(n[1]=o=>e.model2=o),max:19.05,min:-10.05,label:"-10.05 - 19.05"},null,8,["modelValue"]),s("div",null,"model: "+i(e.model2),1)]),_:1},8,["code-html","code-js"])}const Le=_(He,[["render",Ve]]);function Je(){return{codeHtml:`<a-input-currency
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
<div>model: {{ model }}</div>`}}function Ye(){return{codeJs:`import {
  ref,
} from "vue";

import AInputCurrency from "aloha-vue/src/ui/AInputCurrency/AInputCurrency";
    
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
};`}}const Me={name:"PageInputCurrencyModelType",components:{AInputCurrency:C,AlohaExample:f},setup(){const e=p(10.02),{codeHtml:n}=Je(),{codeJs:r}=Ye();return{codeHtml:n,codeJs:r,model:e}}};function qe(e,n,r,d,c,m){const l=t("a-input-currency"),u=t("aloha-example");return P(),I(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_CURRENCY_GROUP_MODEL_TYPE_HEADER_",description:"_A_INPUT_CURRENCY_GROUP_MODEL_TYPE_DESCRIPTION_",props:["model-type"]},{default:y(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=o=>e.model=o),label:"number","model-type":"number"},null,8,["modelValue"]),a(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[1]||(n[1]=o=>e.model=o),label:"string","model-type":"string"},null,8,["modelValue"]),s("div",null,"model: "+i(e.model),1)]),_:1},8,["code-html","code-js"])}const Ge=_(Me,[["render",qe]]);function je(){return{codeHtml:`<a-input-currency
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
<div>model: {{ model }}</div>`}}function Be(){return{codeJs:`import {
  ref,
} from "vue";

import AInputCurrency from "aloha-vue/src/ui/AInputCurrency/AInputCurrency";
    
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
};`}}const Fe={name:"PageInputCurrencyStep",components:{AInputCurrency:C,AlohaExample:f},setup(){const e=p(10.02),{codeHtml:n}=je(),{codeJs:r}=Be();return{codeHtml:n,codeJs:r,model:e}}};function Xe(e,n,r,d,c,m){const l=t("a-input-currency"),u=t("aloha-example");return P(),I(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_CURRENCY_GROUP_STEP_HEADER_",description:"_A_INPUT_CURRENCY_GROUP_STEP_DESCRIPTION_",props:["step","controls-type"]},{default:y(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=o=>e.model=o),step:2,"controls-type":"plus-minus",label:"step 2"},null,8,["modelValue"]),a(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[1]||(n[1]=o=>e.model=o),step:.01,"controls-type":"plus-minus",label:"step 0.01"},null,8,["modelValue"]),s("div",null,"model: "+i(e.model),1)]),_:1},8,["code-html","code-js"])}const ke=_(Fe,[["render",Xe]]);function we(){return{codeHtml:`<a-input-currency
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

import AInputCurrency from "aloha-vue/src/ui/AInputCurrency/AInputCurrency";
    
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
};`}}const Qe={name:"PageInputCurrencySymbol",components:{AInputCurrency:C,AlohaExample:f},setup(){const e=p(10.02),{codeHtml:n}=we(),{codeJs:r}=We();return{codeHtml:n,codeJs:r,model:e}}};function ze(e,n,r,d,c,m){const l=t("a-input-currency"),u=t("aloha-example");return P(),I(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_CURRENCY_GROUP_SYMBOL_HEADER_",description:"_A_INPUT_CURRENCY_GROUP_SYMBOL_DESCRIPTION_",props:["currency-symbol","currency-symbol-position"]},{default:y(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=o=>e.model=o),"currency-symbol-position":"right","currency-symbol":"%",label:"Input"},null,8,["modelValue"]),a(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[1]||(n[1]=o=>e.model=o),"currency-symbol-position":"left","currency-symbol":"$",label:"Input"},null,8,["modelValue"]),s("div",null,"model: "+i(e.model),1)]),_:1},8,["code-html","code-js"])}const Ke=_(Qe,[["render",ze]]);function Ze(){return{codeHtml:`<a-input-currency
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
<div>model: {{ model }}</div>`}}function xe(){return{codeJs:`import {
  ref,
} from "vue";

import AInputCurrency from "aloha-vue/src/ui/AInputCurrency/AInputCurrency";
    
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
};`}}const en={name:"PageInputCurrencyThousandDivider",components:{AInputCurrency:C,AlohaExample:f},setup(){const e=p(10.02),{codeHtml:n}=Ze(),{codeJs:r}=xe();return{codeHtml:n,codeJs:r,model:e}}};function nn(e,n,r,d,c,m){const l=t("a-input-currency"),u=t("aloha-example");return P(),I(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_CURRENCY_GROUP_THOUSAND_DIVIDER_HEADER_",description:"_A_INPUT_CURRENCY_GROUP_THOUSAND_DIVIDER_DESCRIPTION_",props:["thousand-divider"]},{default:y(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=o=>e.model=o),"thousand-divider":",","decimal-divider":".",label:"thousand-divider=','"},null,8,["modelValue"]),a(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[1]||(n[1]=o=>e.model=o),"thousand-divider":".","decimal-divider":",",label:"thousand-divider='.'"},null,8,["modelValue"]),a(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[2]||(n[2]=o=>e.model=o),"thousand-divider":" ",label:"thousand-divider=' '"},null,8,["modelValue"]),s("div",null,"model: "+i(e.model),1)]),_:1},8,["code-html","code-js"])}const on=_(en,[["render",nn]]);function tn(){return{codeHtml:`<a-input-currency
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
<div>model: {{ model }}</div>`}}function rn(){return{codeJs:`import {
  ref,
} from "vue";

import AInputCurrency from "aloha-vue/src/ui/AInputCurrency/AInputCurrency";
    
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
};`}}const ln={name:"PageInputCurrencyValidationOnChange",components:{AInputCurrency:C,AlohaExample:f},setup(){const e=p(10.02),{codeHtml:n}=tn(),{codeJs:r}=rn();return{codeHtml:n,codeJs:r,model:e}}};function an(e,n,r,d,c,m){const l=t("a-input-currency"),u=t("aloha-example");return P(),I(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_CURRENCY_GROUP_VALIDATION_ON_CHANGE_HEADER_",description:"_A_INPUT_CURRENCY_GROUP_VALIDATION_ON_CHANGE_DESCRIPTION_",props:["validation-on-change"]},{default:y(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=o=>e.model=o),"validation-on-change":!1,label:"validation-on-change=false"},null,8,["modelValue"]),a(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[1]||(n[1]=o=>e.model=o),"validation-on-change":!0,label:"validation-on-change=true"},null,8,["modelValue"]),s("div",null,"model: "+i(e.model),1)]),_:1},8,["code-html","code-js"])}const un=_(ln,[["render",an]]);function dn(){return{dataEvents:[{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"},{name:"focus",description:"_A_UI_EVENTS_FOCUS_DESCRIPTION_",type:"Function"},{name:"blur",description:"_A_UI_EVENTS_BLUR_DESCRIPTION_",type:"Function"}]}}function cn(){const e=R(()=>M({placeholder:"_A_INPUT_CURRENCY_COMPONENT_NAME_"}));return{pageTitle:R(()=>`AInputCurrency${e.value?` (${e.value})`:""}`)}}function mn(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"autocomplete",description:"_A_UI_PROPS_AUTOCOMPLETE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"clear-button-class",description:"_A_UI_PROPS_CLEAR_BUTTON_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"controls-type",description:"_A_INPUT_CURRENCY_PROPS_CONTROLS_TYPE_DESCRIPTION_",type:"String",default:"none",required:!1},{name:"currency-symbol",description:"_A_INPUT_CURRENCY_PROPS_CURRENCY_SYMBOL_DESCRIPTION_",type:"String",default:"€",required:!1},{name:"currency-symbol-position",description:"_A_INPUT_CURRENCY_PROPS_CURRENCY_SYMBOL_POSITION_DESCRIPTION_",type:"String",default:"right",required:!1},{name:"decimal-divider",description:"_A_INPUT_CURRENCY_PROPS_DECIMAL_DIVIDER_DESCRIPTION_",type:"String",default:",",required:!1},{name:"decimal-part-length",description:"_A_INPUT_CURRENCY_PROPS_DECIMAL_PART_LENGTH_DESCRIPTION_",type:"Number",default:2,required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon-prepend",description:"_A_INPUT_PROPS_ICON_PREPEND_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_input_currency_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"input-attributes",description:"_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"input-class",description:"_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"input-width",description:"_A_INPUT_CURRENCY_PROPS_INPUT_WIDTH_DESCRIPTION_",type:"String",default:200,required:!1},{name:"is-clear-button",description:"_A_UI_PROPS_IS_CLEAR_BUTTON_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-label-float",description:"_A_UI_PROPS_IS_LABEL_FLOAT_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"max",description:"_A_INPUT_CURRENCY_PROPS_MAX_DESCRIPTION_",type:"Number",default:void 0,required:!1},{name:"min",description:"_A_INPUT_CURRENCY_PROPS_MIN_DESCRIPTION_",type:"Number",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-type",description:"_A_INPUT_CURRENCY_PROPS_MODEL_TYPE_DESCRIPTION_",type:"String",default:"number",required:!1},{name:"model-undefined",description:"_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"placeholder",description:"_A_UI_PROPS_PLACEHOLDER_DESCRIPTION_",type:"String / Number / Object",default:void 0,required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"step",description:"_A_INPUT_PROPS_STEP_DESCRIPTION_",type:"Number",default:1,required:!1},{name:"thousand-divider",description:"_A_INPUT_CURRENCY_PROPS_THOUSAND_DIVIDER_DESCRIPTION_",type:"String",default:".",required:!1},{name:"validation-on-change",description:"_A_INPUT_CURRENCY_PROPS_VALIDATION_ON_CHANGE_DESCRIPTION_",type:"Boolean",default:!1,required:!1}]}}const pn={name:"PageInputCurrency",components:{AlohaPage:L,AlohaTableProps:J,AlohaTableTranslate:Y,ATranslation:q,PageInputCurrencyBasic:X,PageInputCurrencyChange:z,PageInputCurrencyControlsType:ne,PageInputCurrencyDecimalDivider:ae,PageInputCurrencyDecimalPartLength:pe,PageInputCurrencyErrors:ye,PageInputCurrencyHelpText:Re,PageInputCurrencyLabelFloat:Te,PageInputCurrencyLabelScreenReader:be,PageInputCurrencyMaxMin:Le,PageInputCurrencyModelType:Ge,PageInputCurrencyStep:ke,PageInputCurrencySymbol:Ke,PageInputCurrencyThousandDivider:on,PageInputCurrencyValidationOnChange:un},setup(){const{pageTitle:e}=cn(),{dataProps:n}=mn(),{dataEvents:r}=dn();return{dataEvents:r,dataProps:n,pageTitle:e}}};function sn(e,n,r,d,c,m){const l=t("a-translation"),u=t("page-input-currency-basic"),o=t("page-input-currency-change"),E=t("page-input-currency-help-text"),N=t("page-input-currency-errors"),O=t("page-input-currency-label-screen-reader"),U=t("page-input-currency-label-float"),T=t("page-input-currency-symbol"),S=t("page-input-currency-controls-type"),g=t("page-input-currency-decimal-divider"),v=t("page-input-currency-max-min"),h=t("page-input-currency-model-type"),b=t("page-input-currency-step"),D=t("page-input-currency-decimal-part-length"),$=t("page-input-currency-thousand-divider"),H=t("page-input-currency-validation-on-change"),A=t("aloha-table-props"),V=t("aloha-page");return P(),I(V,{"page-title":e.pageTitle},{body:y(()=>[a(l,{tag:"p",html:"_A_INPUT_CURRENCY_COMPONENT_DESCRIPTION_"}),a(u),a(o),a(E),a(N),a(O),a(U),a(T),a(S),a(g),a(v),a(h),a(b),a(D),a($),a(H),a(A,{data:e.dataProps},null,8,["data"]),a(A,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"])]),_:1},8,["page-title"])}const gn=_(pn,[["render",sn]]);export{gn as default};
