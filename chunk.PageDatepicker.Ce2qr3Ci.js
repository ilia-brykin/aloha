import{A as S,a as T}from"./chunk.AlohaExample.DjqKdDWo.js";import{A as D}from"./chunk.AlohaTableProps.CmFH3ivt.js";import{A as N}from"./chunk.AlohaTableTranslate.CiNiL0Rg.js";import{a1 as E,_ as u,g as y,A as U}from"./bundle.index.CS5iw1kz.js";import{r as i,U as c,aS as P,e as r,V as I,Z as d,Y as m,aT as s,d as A}from"./chunk.vendor.COYgx38y.js";import"./chunk.vendor-lodash.DB6s1oac.js";import"./chunk.APageTabTitle.Dn_m5Rog.js";import"./chunk.AlohaHighlightjs.CW1W2LCP.js";import"./chunk.ATable.DfV8sC7y.js";import"./chunk.translations-ar.BHcacQS4.js";import"./chunk.translations-de.BrqZ4DnZ.js";import"./chunk.translations-en.BxW0tsA8.js";import"./chunk.translations-es.BFGc66dt.js";import"./chunk.translations-fr.Brd-erqy.js";import"./chunk.translations-hr.CzLDvybY.js";import"./chunk.translations-it.DFHL-15C.js";import"./chunk.translations-ru.CvsrSaN8.js";function C(){return{codeHtml:`<a-datepicker
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
<div>model3: {{ model3 }}</div>`}}function b(){return{codeJs:`import {
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
};`}}const g={name:"PageDatepickerBasic",components:{ADatepicker:E,AlohaExample:S},setup(){const e=i("2022-10-18"),t=i("2023-12-12"),l=i(void 0),{codeHtml:n}=C(),{codeJs:_}=b();return{codeHtml:n,codeJs:_,model1:e,model2:t,model3:l}}};function k(e,t,l,n,_,f){const a=r("a-datepicker"),p=r("aloha-example");return I(),c(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","label"]},{default:P(()=>[d(a,{modelValue:e.model1,"onUpdate:modelValue":t[0]||(t[0]=o=>e.model1=o),label:"Input 1"},null,8,["modelValue"]),m("div",null,"model1: "+s(e.model1),1),d(a,{modelValue:e.model2,"onUpdate:modelValue":t[1]||(t[1]=o=>e.model2=o),label:"Input 2"},null,8,["modelValue"]),m("div",null,"model2: "+s(e.model2),1),d(a,{modelValue:e.model3,"onUpdate:modelValue":t[2]||(t[2]=o=>e.model3=o),label:"Input 3"},null,8,["modelValue"]),m("div",null,"model3: "+s(e.model3),1)]),_:1},8,["code-html","code-js"])}const v=u(g,[["render",k]]);function L(){return{codeHtml:`<a-datepicker
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
></a-datepicker>`}}function q(){return{codeJs:`import {
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
};`}}const h={name:"PageDatepickerReadonly",components:{ADatepicker:E,AlohaExample:S},setup(){const e=i("2022-10-18"),t=i("2023-12-12"),l=i(void 0),{codeHtml:n}=L(),{codeJs:_}=q();return{codeHtml:n,codeJs:_,model1:e,model2:t,model3:l}}};function H(e,t,l,n,_,f){const a=r("a-datepicker"),p=r("aloha-example");return I(),c(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default"]},{default:P(()=>[d(a,{"model-value":e.model1,readonly:!0,label:"Input 1"},null,8,["model-value"]),d(a,{class:"a_mt_3","model-value":e.model2,readonly:!0,label:"Input 2"},null,8,["model-value"]),d(a,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"Input 3"},null,8,["model-value"]),d(a,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"Input 4","readonly-default":"-","help-text":"Aloha"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const B=u(h,[["render",H]]);function $(){return{codeHtml:`<a-datepicker
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
<div>model3: {{ model3 }}</div>`}}function V(){return{codeJs:`import {
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
};`}}const j={name:"PageDatepickerType",components:{ADatepicker:E,AlohaExample:S},setup(){const e=i("2025-05-16T06:03:05.000Z"),t=i("2025-05-16T06:03:05.000Z"),l=i(void 0),{codeHtml:n}=$(),{codeJs:_}=V();return{codeHtml:n,codeJs:_,model1:e,model2:t,model3:l}}};function J(e,t,l,n,_,f){const a=r("a-datepicker"),p=r("aloha-example");return I(),c(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_PAGE_DATEPICKER_TYPE_HEADER_",description:"_PAGE_DATEPICKER_TYPE_DESCRIPTION_",props:["type"]},{default:P(()=>[d(a,{modelValue:e.model1,"onUpdate:modelValue":t[0]||(t[0]=o=>e.model1=o),label:"Date",type:"date"},null,8,["modelValue"]),m("div",null,"model1: "+s(e.model1),1),d(a,{modelValue:e.model2,"onUpdate:modelValue":t[1]||(t[1]=o=>e.model2=o),"minute-step":1,format:"HH:mm",label:"Time",type:"time"},null,8,["modelValue"]),m("div",null,"model2: "+s(e.model2),1),d(a,{modelValue:e.model3,"onUpdate:modelValue":t[2]||(t[2]=o=>e.model3=o),label:"Datetime",type:"datetime"},null,8,["modelValue"]),m("div",null,"model3: "+s(e.model3),1)]),_:1},8,["code-html","code-js"])}const Y=u(j,[["render",J]]);function M(){return{dataEvents:[{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"},{name:"focus",description:"_A_UI_EVENTS_FOCUS_DESCRIPTION_",type:"Function"},{name:"blur",description:"_A_UI_EVENTS_BLUR_DESCRIPTION_",type:"Function"}]}}function F(){const e=A(()=>y({placeholder:"_A_DATEPICKER_COMPONENT_NAME_"}));return{pageTitle:A(()=>`ADatepicker${e.value?` (${e.value})`:""}`)}}function G(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"autocomplete",description:"_A_UI_PROPS_AUTOCOMPLETE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"clear-button-class",description:"_A_UI_PROPS_CLEAR_BUTTON_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon-prepend",description:"_A_INPUT_PROPS_ICON_PREPEND_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_input_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"input-attributes",description:"_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"input-class",description:"_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"is-clear-button",description:"_A_UI_PROPS_IS_CLEAR_BUTTON_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-label-float",description:"_A_UI_PROPS_IS_LABEL_FLOAT_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"maxlength",description:"_A_UI_PROPS_MAXLENGTH_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-undefined",description:"_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"placeholder",description:"_A_UI_PROPS_PLACEHOLDER_DESCRIPTION_",type:"String / Number / Object",default:void 0,required:!1},{name:"readonly",description:"_A_UI_PROPS_READONLY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"readonly-default",description:"_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_",type:"String",default:"",required:!1},{name:"readonly-password-length",description:"_A_INPUT_PROPS_READONLY_PASSWORD_LENGTH_DESCRIPTION_",type:"Number",default:8,required:!1},{name:"readonly-password-symbol",description:"_A_INPUT_PROPS_READONLY_PASSWORD_SYMBOL_DESCRIPTION_",type:"String",default:"*",required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"show-password",description:"_A_INPUT_PROPS_SHOW_PASSWORD_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"step",description:"_A_INPUT_PROPS_STEP_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"type",description:"_A_INPUT_PROPS_TYPE_DESCRIPTION_",type:"String",default:"text",required:!1}]}}function W(){return{dataTranslate:["_A_INPUT_SHOW_PASSWORD_","_A_INPUT_HIDE_PASSWORD_"]}}const w={name:"PageDatepicker",components:{AlohaPage:T,AlohaTableProps:D,AlohaTableTranslate:N,ATranslation:U,PageDatepickerBasic:v,PageDatepickerReadonly:B,PageDatepickerType:Y},setup(){const{pageTitle:e}=F(),{dataProps:t}=G(),{dataTranslate:l}=W(),{dataEvents:n}=M();return{dataEvents:n,dataProps:t,dataTranslate:l,pageTitle:e}}};function X(e,t,l,n,_,f){const a=r("a-translation"),p=r("page-datepicker-basic"),o=r("page-datepicker-readonly"),R=r("page-datepicker-type"),O=r("aloha-page");return I(),c(O,{"page-title":e.pageTitle},{body:P(()=>[d(a,{tag:"p",html:"_A_DATEPICKER_COMPONENT_DESCRIPTION_"}),d(p),d(o),d(R)]),_:1},8,["page-title"])}const se=u(w,[["render",X]]);export{se as default};
