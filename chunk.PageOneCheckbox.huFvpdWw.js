import{A as h,a as N}from"./chunk.AlohaExample.A9Ef-QbL.js";import{A as g}from"./chunk.AlohaTableProps.CpO8HcfR.js";import{_ as u,g as v,A as U}from"./bundle.index.Dn7qpWjQ.js";import{b as O}from"./chunk.AForm.YXJwVyl2.js";import{r as m,m as n,K as i,aK as p,J as f,P as l,O as A,aL as E,a as I}from"./chunk.vendor.DQz1Isc4.js";import"./chunk.vendor-lodash.Cgq9oNCy.js";import"./chunk.ATable.D_xPGUZc.js";import"./chunk.utilsMath.1mfWsA3R.js";import"./chunk.vendor-tinymce.cPIiul0H.js";import"./chunk.ADatepicker.CCF6HQX3.js";import"./chunk.UiMixinProps.BvCyZ1Ij.js";import"./chunk.AInputNumber.CRj1UTFu.js";import"./chunk.ATinymce.BwFOKtT3.js";function H(){return{codeHtml:`<a-one-checkbox
  v-model="model"
  label="Aloha"
></a-one-checkbox>
<div>model: {{ model }}</div>`}}function D(){return{codeJs:`import {
  ref,
} from "vue";

import AOneCheckbox from "aloha-vue/src/ui/AOneCheckbox/AOneCheckbox";
    
export default {
  name: "PageOneCheckboxBasic",
  components: {
    AOneCheckbox,
  },
  setup() {
    const model = ref(undefined);
    
    return {
      model,
    };
  },
};`}}const $={name:"PageJsonBasic",components:{AlohaExample:h,AOneCheckbox:O},setup(){const e=m(void 0),{codeHtml:o}=H(),{codeJs:t}=D();return{codeHtml:o,codeJs:t,model:e}}};function V(e,o,t,r,s,_){const a=n("a-one-checkbox"),c=n("aloha-example");return f(),i(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","label"]},{default:p(()=>[l(a,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=d=>e.model=d),label:"Aloha"},null,8,["modelValue"]),A("div",null,"model: "+E(e.model),1)]),_:1},8,["code-html","code-js"])}const B=u($,[["render",V]]);function J(){return{codeHtml:`<a-one-checkbox
  :change="changeModel"
  :model-value="model"
  label="Aloha"
></a-one-checkbox>
<div>model: {{ model }}</div>`}}function L(){return{codeJs:`import {
  ref,
} from "vue";

import AOneCheckbox from "aloha-vue/src/ui/AOneCheckbox/AOneCheckbox";
    
export default {
  name: "PageOneCheckboxChange",
  components: {
    AOneCheckbox,
  },
  setup() {
    const model = ref(undefined);
    
    const changeModel = ({ model: _model, id, props }) => {
      model.value = _model;
      console.log(id, props);
    };
    
    return {
      changeModel,
      model,
    };
  },
};`}}const y={name:"PageOneCheckboxChange",components:{AlohaExample:h,AOneCheckbox:O},setup(){const e=m(void 0),o=({model:s,id:_,props:a})=>{e.value=s,console.log(_,a)},{codeHtml:t}=J(),{codeJs:r}=L();return{changeModel:o,codeHtml:t,codeJs:r,model:e}}};function q(e,o,t,r,s,_){const a=n("a-one-checkbox"),c=n("aloha-example");return f(),i(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CHANGE_HEADER_",description:"_A_UI_GROUP_CHANGE_DESCRIPTION_",props:["change","model-value"]},{default:p(()=>[l(a,{change:e.changeModel,"model-value":e.model,label:"Aloha"},null,8,["change","model-value"]),A("div",null,"model: "+E(e.model),1)]),_:1},8,["code-html","code-js"])}const j=u(y,[["render",q]]);function X(){return{codeHtml:`<a-one-checkbox
  v-model="model"
  errors="Aloha"
  label="Aloha"
></a-one-checkbox>`}}function G(){return{codeJs:`import {
  ref,
} from "vue";

import AOneCheckbox from "aloha-vue/src/ui/AOneCheckbox/AOneCheckbox";
    
export default {
  name: "PageOneCheckboxErrors",
  components: {
    AInput,
  },
  setup() {
    const model = ref(undefined);
    
    return {
      model,
    };
  },
};`}}const K={name:"PageOneCheckboxErrors",components:{AlohaExample:h,AOneCheckbox:O},setup(){const e=m(void 0),{codeHtml:o}=X(),{codeJs:t}=G();return{codeHtml:o,codeJs:t,model:e}}};function M(e,o,t,r,s,_){const a=n("a-one-checkbox"),c=n("aloha-example");return f(),i(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERRORS_HEADER_",description:"_A_UI_GROUP_ERRORS_DESCRIPTION_",props:["errors"]},{default:p(()=>[l(a,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=d=>e.model=d),errors:"Aloha",label:"Aloha"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const w=u(K,[["render",M]]);function F(){return{codeHtml:`<a-one-checkbox
  v-model="model1"
  :false-value="false"
  label="false-value='false'"
></a-one-checkbox>
<div>model1: {{ model1 }}</div>
<a-one-checkbox
  v-model="model2"
  :false-value="0"
  class="a_mt_3"
  label="false-value='0'"
></a-one-checkbox>
<div>model2: {{ model2 }}</div>`}}function W(){return{codeJs:`import {
  ref,
} from "vue";

import AOneCheckbox from "aloha-vue/src/ui/AOneCheckbox/AOneCheckbox";
    
export default {
  name: "PageOneCheckboxFalseValue",
  components: {
    AInput,
  },
  setup() {
    const model1 = ref(true);
    const model2 = ref(true);
    
    return {
      model1,
      model2,
    };
  },
};`}}const Q={name:"PageOneCheckboxFalseValue",components:{AlohaExample:h,AOneCheckbox:O},setup(){const e=m(!0),o=m(!0),{codeHtml:t}=F(),{codeJs:r}=W();return{codeHtml:t,codeJs:r,model1:e,model2:o}}};function Y(e,o,t,r,s,_){const a=n("a-one-checkbox"),c=n("aloha-example");return f(),i(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ONE_CHECKBOX_GROUP_FALSE_VALUE_HEADER_",description:"_A_ONE_CHECKBOX_GROUP_FALSE_VALUE_DESCRIPTION_",props:["false-value"]},{default:p(()=>[l(a,{modelValue:e.model1,"onUpdate:modelValue":o[0]||(o[0]=d=>e.model1=d),"false-value":!1,label:"false-value='false'"},null,8,["modelValue"]),A("div",null,"model1: "+E(e.model1),1),l(a,{class:"a_mt_3",modelValue:e.model2,"onUpdate:modelValue":o[1]||(o[1]=d=>e.model2=d),"false-value":0,label:"false-value='0'"},null,8,["modelValue"]),A("div",null,"model2: "+E(e.model2),1)]),_:1},8,["code-html","code-js"])}const z=u(Q,[["render",Y]]);function Z(){return{codeHtml:`<a-one-checkbox
  v-model="model"
  help-text="Aloha"
  label="Aloha"
></a-one-checkbox>`}}function ee(){return{codeJs:`import {
  ref,
} from "vue";

import AOneCheckbox from "aloha-vue/src/ui/AOneCheckbox/AOneCheckbox";
    
export default {
  name: "PageOneCheckboxHelpText",
  components: {
    AOneCheckbox,
  },
  setup() {
    const model = ref(undefined);
    
    return {
      model,
    };
  },
};`}}const oe={name:"PageOneCheckboxHelpText",components:{AlohaExample:h,AOneCheckbox:O},setup(){const e=m(void 0),{codeHtml:o}=Z(),{codeJs:t}=ee();return{codeHtml:o,codeJs:t,model:e}}};function ne(e,o,t,r,s,_){const a=n("a-one-checkbox"),c=n("aloha-example");return f(),i(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_HELP_TEXT_HEADER_",description:"_A_UI_GROUP_HELP_TEXT_DESCRIPTION_",props:["help-text"]},{default:p(()=>[l(a,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=d=>e.model=d),"help-text":"Aloha",label:"Aloha"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const te=u(oe,[["render",ne]]);function ae(){return{codeHtml:`<a-one-checkbox
  v-model="model1"
  :false-value="false"
  label="false-value='false'"
></a-one-checkbox>
<div>model1: {{ model1 }}</div>
<a-one-checkbox
  v-model="model2"
  :false-value="0"
  class="a_mt_3"
  label="false-value='0'"
></a-one-checkbox>
<div>model2: {{ model2 }}</div>`}}function le(){return{codeJs:`import {
  ref,
} from "vue";

import AOneCheckbox from "aloha-vue/src/ui/AOneCheckbox/AOneCheckbox";
    
export default {
  name: "PageOneCheckboxIndeterminate",
  components: {
    AInput,
  },
  setup() {
    const model = ref(undefined);
    
    return {
      model,
    };
  },
};`}}const de={name:"PageOneCheckboxIndeterminate",components:{AlohaExample:h,AOneCheckbox:O},setup(){const e=m(void 0),{codeHtml:o}=ae(),{codeJs:t}=le();return{codeHtml:o,codeJs:t,model:e}}};function ce(e,o,t,r,s,_){const a=n("a-one-checkbox"),c=n("aloha-example");return f(),i(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ONE_CHECKBOX_GROUP_INDETERMINATE_HEADER_",description:"_A_ONE_CHECKBOX_GROUP_INDETERMINATE_DESCRIPTION_",props:["indeterminate"]},{default:p(()=>[l(a,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=d=>e.model=d),indeterminate:!0,label:"Aloha"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const re=u(de,[["render",ce]]);function se(){return{codeHtml:`<a-one-checkbox
  v-model="model"
  :true-value="1"
  class="a_mt_3"
  label="Aloha"
></a-one-checkbox>
<div>model: {{ model }}</div>`}}function _e(){return{codeJs:`import {
  ref,
} from "vue";

import AOneCheckbox from "aloha-vue/src/ui/AOneCheckbox/AOneCheckbox";
    
export default {
  name: "PageOneCheckboxTrueValue",
  components: {
    AInput,
  },
  setup() {
    const model = ref(undefined);
    
    return {
      model,
    };
  },
};`}}const me={name:"PageOneCheckboxTrueValue",components:{AlohaExample:h,AOneCheckbox:O},setup(){const e=m(void 0),{codeHtml:o}=se(),{codeJs:t}=_e();return{codeHtml:o,codeJs:t,model:e}}};function ue(e,o,t,r,s,_){const a=n("a-one-checkbox"),c=n("aloha-example");return f(),i(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ONE_CHECKBOX_GROUP_TRUE_VALUE_HEADER_",description:"_A_ONE_CHECKBOX_GROUP_TRUE_VALUE_DESCRIPTION_",props:["true-value"]},{default:p(()=>[l(a,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=d=>e.model=d),"true-value":1,label:"Aloha"},null,8,["modelValue"]),A("div",null,"model: "+E(e.model),1)]),_:1},8,["code-html","code-js"])}const ie=u(me,[["render",ue]]);function pe(){return{codeHtml:`<a-one-checkbox
  v-model="model"
  :is-width-auto="true"
  label="is-width-auto='true'"
></a-one-checkbox>
<a-one-checkbox
  v-model="model"
  :is-width-auto="false"
  class="a_mt_3"
  label="is-width-auto='false'"
></a-one-checkbox>`}}function fe(){return{codeJs:`import {
  ref,
} from "vue";

import AOneCheckbox from "aloha-vue/src/ui/AOneCheckbox/AOneCheckbox";
    
export default {
  name: "PageOneCheckboxWidthAuto",
  components: {
    AInput,
  },
  setup() {
    const model = ref(undefined);
    
    return {
      model,
    };
  },
};`}}const he={name:"PageOneCheckboxWidthAuto",components:{AlohaExample:h,AOneCheckbox:O},setup(){const e=m(void 0),{codeHtml:o}=pe(),{codeJs:t}=fe();return{codeHtml:o,codeJs:t,model:e}}};function Oe(e,o,t,r,s,_){const a=n("a-one-checkbox"),c=n("aloha-example");return f(),i(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ONE_CHECKBOX_GROUP_WIDTH_AUTO_HEADER_",description:"_A_ONE_CHECKBOX_GROUP_WIDTH_AUTO_DESCRIPTION_",props:["is-width-auto"]},{default:p(()=>[l(a,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=d=>e.model=d),"is-width-auto":!0,label:"is-width-auto='true'"},null,8,["modelValue"]),l(a,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":o[1]||(o[1]=d=>e.model=d),"is-width-auto":!1,label:"is-width-auto='false'"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const Ae=u(he,[["render",Oe]]);function Ee(){return{dataEvents:[{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"},{name:"focus",description:"_A_UI_EVENTS_FOCUS_DESCRIPTION_",type:"Function"},{name:"blur",description:"_A_UI_EVENTS_BLUR_DESCRIPTION_",type:"Function"}]}}function Pe(){const e=I(()=>v({placeholder:"_A_ONE_CHECKBOX_COMPONENT_NAME_"}));return{pageTitle:I(()=>`AOneCheckbox${e.value?` (${e.value})`:""}`)}}function Ie(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"false-value",description:"_A_ONE_CHECKBOX_PROPS_FALSE_VALUE_DESCRIPTION_",type:"Boolean / String / Number",default:void 0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_one_checkbox_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"indeterminate",description:"_A_ONE_CHECKBOX_PROPS_INDETERMINATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"input-attributes",description:"_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"input-class",description:"_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"isLabelTitle",description:"_A_ONE_CHECKBOX_PROPS_IS_LABEL_TITLE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-width-auto",description:"_A_ONE_CHECKBOX_PROPS_IS_WIDTH_AUTO_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-undefined",description:"_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"Boolean / String / Number",default:void 0,required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"trueValue",description:"_A_ONE_CHECKBOX_PROPS_TRUE_VALUE_DESCRIPTION_",type:"Boolean / String / Number",default:!0,required:!1}]}}const be={name:"PageOneCheckbox",components:{AlohaPage:N,AlohaTableProps:g,ATranslation:U,PageOneCheckboxBasic:B,PageOneCheckboxChange:j,PageOneCheckboxErrors:w,PageOneCheckboxFalseValue:z,PageOneCheckboxHelpText:te,PageOneCheckboxIndeterminate:re,PageOneCheckboxTrueValue:ie,PageOneCheckboxWidthAuto:Ae},setup(){const{pageTitle:e}=Pe(),{dataProps:o}=Ie(),{dataEvents:t}=Ee();return{dataEvents:t,dataProps:o,pageTitle:e}}};function Ce(e,o,t,r,s,_){const a=n("a-translation"),c=n("page-one-checkbox-basic"),d=n("page-one-checkbox-change"),b=n("page-one-checkbox-help-text"),C=n("page-one-checkbox-errors"),R=n("page-one-checkbox-width-auto"),x=n("page-one-checkbox-false-value"),k=n("page-one-checkbox-true-value"),S=n("page-one-checkbox-indeterminate"),P=n("aloha-table-props"),T=n("aloha-page");return f(),i(T,{"page-title":e.pageTitle},{body:p(()=>[l(a,{tag:"p",html:"_A_ONE_CHECKBOX_COMPONENT_DESCRIPTION_"}),l(c),l(d),l(b),l(C),l(R),l(x),l(k),l(S),l(P,{data:e.dataProps},null,8,["data"]),l(P,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"])]),_:1},8,["page-title"])}const Be=u(be,[["render",Ce]]);export{Be as default};