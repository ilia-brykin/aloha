import{A as E,a as R}from"./chunk.AlohaExample.AXt4sjdn.js";import{A as T}from"./chunk.AlohaTableProps.jlYblHrH.js";import{A as D}from"./chunk.AlohaTableTranslate.DD1uuUEF.js";import{Z as A,_ as m,g as N,A as y}from"./bundle.index.RoneU1c1.js";import{r as i,U as c,aS as I,e as r,V as P,Z as n,Y as u,aT as p,d as S}from"./chunk.vendor.w-kCrpQl.js";import"./chunk.vendor-lodash.GmlDDh1v.js";import"./chunk.APageTabTitle.BGiXiNez.js";import"./chunk.AlohaHighlightjs.Cjego80K.js";import"./chunk.ATable.CCEFZYuC.js";import"./chunk.translations-ar.7kyFlj_7.js";import"./chunk.translations-de.BMzqk4tK.js";import"./chunk.translations-en.CYLIQ7pD.js";import"./chunk.translations-es.D962VZ2D.js";import"./chunk.translations-fr.CcjuPFMN.js";import"./chunk.translations-hr.D1P_Fjd9.js";import"./chunk.translations-it.BsI54FWd.js";import"./chunk.translations-ru.hctQRJz1.js";function U(){return{codeHtml:`<a-datepicker
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
<div>model3: {{ model3 }}</div>`}}function C(){return{codeJs:`import {
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
};`}}const b={name:"PageDatepickerBasic",components:{ADatepicker:A,AlohaExample:E},setup(){const e=i("2022-10-18"),t=i("2023-12-12"),d=i(void 0),{codeHtml:o}=U(),{codeJs:_}=C();return{codeHtml:o,codeJs:_,model1:e,model2:t,model3:d}}};function g(e,t,d,o,_,f){const a=r("a-datepicker"),s=r("aloha-example");return P(),c(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","label"]},{default:I(()=>[n(a,{modelValue:e.model1,"onUpdate:modelValue":t[0]||(t[0]=l=>e.model1=l),label:"Input 1"},null,8,["modelValue"]),u("div",null,"model1: "+p(e.model1),1),n(a,{modelValue:e.model2,"onUpdate:modelValue":t[1]||(t[1]=l=>e.model2=l),label:"Input 2"},null,8,["modelValue"]),u("div",null,"model2: "+p(e.model2),1),n(a,{modelValue:e.model3,"onUpdate:modelValue":t[2]||(t[2]=l=>e.model3=l),label:"Input 3"},null,8,["modelValue"]),u("div",null,"model3: "+p(e.model3),1)]),_:1},8,["code-html","code-js"])}const L=m(b,[["render",g]]);function k(){return{codeHtml:`<a-datepicker
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
};`}}const v={name:"PageDatepickerReadonly",components:{ADatepicker:A,AlohaExample:E},setup(){const e=i("2022-10-18"),t=i("2023-12-12"),d=i(void 0),{codeHtml:o}=k(),{codeJs:_}=q();return{codeHtml:o,codeJs:_,model1:e,model2:t,model3:d}}};function h(e,t,d,o,_,f){const a=r("a-datepicker"),s=r("aloha-example");return P(),c(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default"]},{default:I(()=>[n(a,{"model-value":e.model1,readonly:!0,label:"Input 1"},null,8,["model-value"]),n(a,{class:"a_mt_3","model-value":e.model2,readonly:!0,label:"Input 2"},null,8,["model-value"]),n(a,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"Input 3"},null,8,["model-value"]),n(a,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"Input 4","readonly-default":"-","help-text":"Aloha"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const B=m(v,[["render",h]]);function H(){return{dataEvents:[{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"},{name:"focus",description:"_A_UI_EVENTS_FOCUS_DESCRIPTION_",type:"Function"},{name:"blur",description:"_A_UI_EVENTS_BLUR_DESCRIPTION_",type:"Function"}]}}function $(){const e=S(()=>N({placeholder:"_A_DATEPICKER_COMPONENT_NAME_"}));return{pageTitle:S(()=>`ADatepicker${e.value?` (${e.value})`:""}`)}}function V(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"autocomplete",description:"_A_UI_PROPS_AUTOCOMPLETE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"clear-button-class",description:"_A_UI_PROPS_CLEAR_BUTTON_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon-prepend",description:"_A_INPUT_PROPS_ICON_PREPEND_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_input_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"input-attributes",description:"_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"input-class",description:"_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"is-clear-button",description:"_A_UI_PROPS_IS_CLEAR_BUTTON_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-label-float",description:"_A_UI_PROPS_IS_LABEL_FLOAT_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"maxlength",description:"_A_UI_PROPS_MAXLENGTH_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-undefined",description:"_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"placeholder",description:"_A_UI_PROPS_PLACEHOLDER_DESCRIPTION_",type:"String / Number / Object",default:void 0,required:!1},{name:"readonly",description:"_A_UI_PROPS_READONLY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"readonly-default",description:"_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_",type:"String",default:"",required:!1},{name:"readonly-password-length",description:"_A_INPUT_PROPS_READONLY_PASSWORD_LENGTH_DESCRIPTION_",type:"Number",default:8,required:!1},{name:"readonly-password-symbol",description:"_A_INPUT_PROPS_READONLY_PASSWORD_SYMBOL_DESCRIPTION_",type:"String",default:"*",required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"show-password",description:"_A_INPUT_PROPS_SHOW_PASSWORD_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"step",description:"_A_INPUT_PROPS_STEP_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"type",description:"_A_INPUT_PROPS_TYPE_DESCRIPTION_",type:"String",default:"text",required:!1}]}}function j(){return{dataTranslate:["_A_INPUT_SHOW_PASSWORD_","_A_INPUT_HIDE_PASSWORD_"]}}const M={name:"PageDatepicker",components:{AlohaPage:R,AlohaTableProps:T,AlohaTableTranslate:D,ATranslation:y,PageDatepickerBasic:L,PageDatepickerReadonly:B},setup(){const{pageTitle:e}=$(),{dataProps:t}=V(),{dataTranslate:d}=j(),{dataEvents:o}=H();return{dataEvents:o,dataProps:t,dataTranslate:d,pageTitle:e}}};function J(e,t,d,o,_,f){const a=r("a-translation"),s=r("page-datepicker-basic"),l=r("page-datepicker-readonly"),O=r("aloha-page");return P(),c(O,{"page-title":e.pageTitle},{body:I(()=>[n(a,{tag:"p",html:"_A_DATEPICKER_COMPONENT_DESCRIPTION_"}),n(s),n(l)]),_:1},8,["page-title"])}const re=m(M,[["render",J]]);export{re as default};
