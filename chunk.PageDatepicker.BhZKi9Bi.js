import{A as E,a as T}from"./chunk.AlohaExample.Cdl7tyIE.js";import{A as N}from"./chunk.AlohaTableProps.DQWCws6v.js";import{A as y}from"./chunk.AlohaTableTranslate.BbFFmlS9.js";import{a6 as S,_ as u,g as U,A as C}from"./bundle.index.ChYq-zZ0.js";import{r as _,V as c,aT as P,e as l,W as I,_ as o,Z as m,aU as s,d as A}from"./chunk.vendor.BxCHGHAU.js";import"./chunk.vendor-lodash.BMPrua2s.js";import"./chunk.APageTabTitle.BGuLIDVB.js";import"./chunk.AlohaHighlightjs.B3F2oL8_.js";import"./chunk.ATable.Ct11V4vF.js";import"./chunk.translations-ar.D8MQqUIX.js";import"./chunk.translations-de.DF2fp9fz.js";import"./chunk.translations-en.Cabsq1fv.js";import"./chunk.translations-es.CTtyunpM.js";import"./chunk.translations-fr.tpgV9obb.js";import"./chunk.translations-hr.v7YKJpdX.js";import"./chunk.translations-it.Dqw3KhB-.js";import"./chunk.translations-ru.ofMcR8E8.js";function b(){return{codeHtml:`<a-datepicker
  v-model="model1"
  label="Input 1"
></a-datepicker>
<div>model1: {{ model1 }}</div>
<a-datepicker
  v-model="model2"
  label="Input 2"
></a-datepicker>
<div>model2: {{ model2 }}</div>
<a-datepicker
  v-model="model3"
  label="Input 3"
></a-datepicker>
<div>model3: {{ model3 }}</div>`}}function k(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ADatepicker,
} from "aloha-vue";
    
export default {
  name: "PageDatepickerBasic",
  components: {
    ADatepicker,
  },
  setup() {
    const model1 = ref("2022-10-18");
    const model2 = ref("2023-12-12");
    const model3 = ref(undefined);
    
    return {
      model1,
      model2,
      model3,
    };
  },
};`}}const g={name:"PageDatepickerBasic",components:{ADatepicker:S,AlohaExample:E},setup(){const e=_("2022-10-18"),t=_("2023-12-12"),n=_(void 0),{codeHtml:r}=b(),{codeJs:i}=k();return{codeHtml:r,codeJs:i,model1:e,model2:t,model3:n}}};function v(e,t,n,r,i,f){const a=l("a-datepicker"),p=l("aloha-example");return I(),c(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","label"]},{default:P(()=>[o(a,{modelValue:e.model1,"onUpdate:modelValue":t[0]||(t[0]=d=>e.model1=d),label:"Input 1"},null,8,["modelValue"]),m("div",null,"model1: "+s(e.model1),1),o(a,{modelValue:e.model2,"onUpdate:modelValue":t[1]||(t[1]=d=>e.model2=d),label:"Input 2"},null,8,["modelValue"]),m("div",null,"model2: "+s(e.model2),1),o(a,{modelValue:e.model3,"onUpdate:modelValue":t[2]||(t[2]=d=>e.model3=d),label:"Input 3"},null,8,["modelValue"]),m("div",null,"model3: "+s(e.model3),1)]),_:1},8,["code-html","code-js"])}const L=u(g,[["render",v]]);function q(){return{codeHtml:`<a-datepicker
  v-model="model"
  label="Date"
  label-description="Aloha"
></a-datepicker>`}}function h(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ADatepicker,
} from "aloha-vue";
    
export default {
  name: "PageDatepickerLabelDescription",
  components: {
    ADatepicker,
  },
  setup() {
    const model = ref(undefined);
    
    return {
      data,
      model,
    };
  },
};`}}const H={name:"PageDatepickerLabelDescription",components:{ADatepicker:S,AlohaExample:E},setup(){const e=_(void 0),{codeHtml:t}=q(),{codeJs:n}=h();return{codeHtml:t,codeJs:n,model:e}}};function $(e,t,n,r,i,f){const a=l("a-datepicker"),p=l("aloha-example");return I(),c(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_",description:"_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_",props:["label-description"]},{default:P(()=>[o(a,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=d=>e.model=d),label:"Date","label-description":"Aloha"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const B=u(H,[["render",$]]);function V(){return{codeHtml:`<a-datepicker
  :model-value="model1"
  :readonly="true"
  label="Input 1"
></a-datepicker>
<a-datepicker
  :model-value="model2"
  :readonly="true"
  class="a_mt_3"
  label="Input 2"
></a-datepicker>
<a-datepicker
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  label="Input 3"
></a-datepicker>
<a-datepicker
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  label="Input 4"
  readonly-default="-"
  help-text="Aloha"
></a-datepicker>`}}function J(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ADatepicker,
} from "aloha-vue";
    
export default {
  name: "PageDatepickerReadonly",
  components: {
    ADatepicker,
  },
  setup() {
    const model1 = ref("2022-10-18");
    const model2 = ref("2023-12-12");
    const model3 = ref(undefined);
    
    return {
      model1,
      model2,
      model3,
    };
  },
};`}}const j={name:"PageDatepickerReadonly",components:{ADatepicker:S,AlohaExample:E},setup(){const e=_("2022-10-18"),t=_("2023-12-12"),n=_(void 0),{codeHtml:r}=V(),{codeJs:i}=J();return{codeHtml:r,codeJs:i,model1:e,model2:t,model3:n}}};function G(e,t,n,r,i,f){const a=l("a-datepicker"),p=l("aloha-example");return I(),c(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default"]},{default:P(()=>[o(a,{"model-value":e.model1,readonly:!0,label:"Input 1"},null,8,["model-value"]),o(a,{class:"a_mt_3","model-value":e.model2,readonly:!0,label:"Input 2"},null,8,["model-value"]),o(a,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"Input 3"},null,8,["model-value"]),o(a,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"Input 4","readonly-default":"-","help-text":"Aloha"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const M=u(j,[["render",G]]);function Y(){return{codeHtml:`<a-datepicker
  v-model="model1"
  label="Date"
  type="date"
></a-datepicker>
<div>model1: {{ model1 }}</div>
<a-datepicker
  v-model="model2"
  :minute-step="1"
  format="HH:mm"
  label="Time"
  type="time"
></a-datepicker>
<div>model2: {{ model2 }}</div>
<a-datepicker
  v-model="model3"
  label="Datetime"
  type="datetime"
></a-datepicker>
<div>model3: {{ model3 }}</div>`}}function F(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ADatepicker,
} from "aloha-vue";
    
export default {
  name: "PageDatepickerType",
  components: {
    ADatepicker,
  },
  setup() {
    const model1 = ref("2025-05-16T06:03:05.000Z");
    const model2 = ref("2025-05-16T06:03:05.000Z");
    const model3 = ref(undefined);
    
    return {
      model1,
      model2,
      model3,
    };
  },
};`}}const W={name:"PageDatepickerType",components:{ADatepicker:S,AlohaExample:E},setup(){const e=_("2025-05-16T06:03:05.000Z"),t=_("2025-05-16T06:03:05.000Z"),n=_(void 0),{codeHtml:r}=Y(),{codeJs:i}=F();return{codeHtml:r,codeJs:i,model1:e,model2:t,model3:n}}};function w(e,t,n,r,i,f){const a=l("a-datepicker"),p=l("aloha-example");return I(),c(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_PAGE_DATEPICKER_TYPE_HEADER_",description:"_PAGE_DATEPICKER_TYPE_DESCRIPTION_",props:["type"]},{default:P(()=>[o(a,{modelValue:e.model1,"onUpdate:modelValue":t[0]||(t[0]=d=>e.model1=d),label:"Date",type:"date"},null,8,["modelValue"]),m("div",null,"model1: "+s(e.model1),1),o(a,{modelValue:e.model2,"onUpdate:modelValue":t[1]||(t[1]=d=>e.model2=d),"minute-step":1,format:"HH:mm",label:"Time",type:"time"},null,8,["modelValue"]),m("div",null,"model2: "+s(e.model2),1),o(a,{modelValue:e.model3,"onUpdate:modelValue":t[2]||(t[2]=d=>e.model3=d),label:"Datetime",type:"datetime"},null,8,["modelValue"]),m("div",null,"model3: "+s(e.model3),1)]),_:1},8,["code-html","code-js"])}const X=u(W,[["render",w]]);function Z(){return{dataEvents:[{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"},{name:"focus",description:"_A_UI_EVENTS_FOCUS_DESCRIPTION_",type:"Function"},{name:"blur",description:"_A_UI_EVENTS_BLUR_DESCRIPTION_",type:"Function"}]}}function K(){const e=A(()=>U({placeholder:"_A_DATEPICKER_COMPONENT_NAME_"}));return{pageTitle:A(()=>`ADatepicker${e.value?` (${e.value})`:""}`)}}function Q(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"autocomplete",description:"_A_UI_PROPS_AUTOCOMPLETE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"clear-button-class",description:"_A_UI_PROPS_CLEAR_BUTTON_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon-prepend",description:"_A_INPUT_PROPS_ICON_PREPEND_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_input_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"input-attributes",description:"_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"input-class",description:"_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"is-clear-button",description:"_A_UI_PROPS_IS_CLEAR_BUTTON_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-label-float",description:"_A_UI_PROPS_IS_LABEL_FLOAT_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-description",description:"_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"maxlength",description:"_A_UI_PROPS_MAXLENGTH_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-undefined",description:"_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"placeholder",description:"_A_UI_PROPS_PLACEHOLDER_DESCRIPTION_",type:"String / Number / Object",default:void 0,required:!1},{name:"readonly",description:"_A_UI_PROPS_READONLY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"readonly-default",description:"_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_",type:"String",default:"",required:!1},{name:"readonly-password-length",description:"_A_INPUT_PROPS_READONLY_PASSWORD_LENGTH_DESCRIPTION_",type:"Number",default:8,required:!1},{name:"readonly-password-symbol",description:"_A_INPUT_PROPS_READONLY_PASSWORD_SYMBOL_DESCRIPTION_",type:"String",default:"*",required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"show-password",description:"_A_INPUT_PROPS_SHOW_PASSWORD_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"step",description:"_A_INPUT_PROPS_STEP_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"type",description:"_A_INPUT_PROPS_TYPE_DESCRIPTION_",type:"String",default:"text",required:!1}]}}function z(){return{dataTranslate:["_A_INPUT_SHOW_PASSWORD_","_A_INPUT_HIDE_PASSWORD_"]}}const x={name:"PageDatepicker",components:{AlohaPage:T,AlohaTableProps:N,AlohaTableTranslate:y,ATranslation:C,PageDatepickerBasic:L,PageDatepickerLabelDescription:B,PageDatepickerReadonly:M,PageDatepickerType:X},setup(){const{pageTitle:e}=K(),{dataProps:t}=Q(),{dataTranslate:n}=z(),{dataEvents:r}=Z();return{dataEvents:r,dataProps:t,dataTranslate:n,pageTitle:e}}};function ee(e,t,n,r,i,f){const a=l("a-translation"),p=l("page-datepicker-basic"),d=l("page-datepicker-label-description"),R=l("page-datepicker-readonly"),O=l("page-datepicker-type"),D=l("aloha-page");return I(),c(D,{"page-title":e.pageTitle},{body:P(()=>[o(a,{tag:"p",html:"_A_DATEPICKER_COMPONENT_DESCRIPTION_"}),o(p),o(d),o(R),o(O)]),_:1},8,["page-title"])}const Ee=u(x,[["render",ee]]);export{Ee as default};
