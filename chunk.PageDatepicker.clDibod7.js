import{A as E,a as y}from"./chunk.AlohaExample.Df0hry5G.js";import{A as k}from"./chunk.AlohaTableProps.DglM_ctG.js";import{A as C}from"./chunk.AlohaTableTranslate.DbDiH5Am.js";import{af as f,_ as c,g,A as v}from"./bundle.index.DARcGWQg.js";import{r as i,V as I,aT as P,e as r,W as A,_ as o,Z as s,aU as p,d as D}from"./chunk.vendor.D7UxhUfn.js";import"./chunk.vendor-lodash.BXqI5TOP.js";import"./chunk.APageTabTitle.Hh8sjLMM.js";import"./chunk.AlohaHighlightjs.dFk8X2lo.js";import"./chunk.ATable.BCOO8ogi.js";import"./chunk.translations-ar.COHWTLjj.js";import"./chunk.translations-de.CMsDi58c.js";import"./chunk.translations-en.Dg6d-iTX.js";import"./chunk.translations-es.BLJ15RYR.js";import"./chunk.translations-fr.tH5K_M0t.js";import"./chunk.translations-hr.DsOKZruz.js";import"./chunk.translations-it.B_6_ZtEA.js";import"./chunk.translations-ru.BTxZGSVv.js";function U(){return{codeHtml:`<a-datepicker
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
};`}}const L={name:"PageDatepickerBasic",components:{ADatepicker:f,AlohaExample:E},setup(){const e=i("2022-10-18"),t=i("2023-12-12"),n=i(void 0),{codeHtml:_}=U(),{codeJs:m}=b();return{codeHtml:_,codeJs:m,model1:e,model2:t,model3:n}}};function H(e,t,n,_,m,u){const a=r("a-datepicker"),l=r("aloha-example");return A(),I(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","label"]},{default:P(()=>[o(a,{modelValue:e.model1,"onUpdate:modelValue":t[0]||(t[0]=d=>e.model1=d),label:"Input 1"},null,8,["modelValue"]),s("div",null,"model1: "+p(e.model1),1),o(a,{modelValue:e.model2,"onUpdate:modelValue":t[1]||(t[1]=d=>e.model2=d),label:"Input 2"},null,8,["modelValue"]),s("div",null,"model2: "+p(e.model2),1),o(a,{modelValue:e.model3,"onUpdate:modelValue":t[2]||(t[2]=d=>e.model3=d),label:"Input 3"},null,8,["modelValue"]),s("div",null,"model3: "+p(e.model3),1)]),_:1},8,["code-html","code-js"])}const $=c(L,[["render",H]]);function V(){return{codeHtml:`<a-datepicker
  v-model="model"
  label="Date"
  label-description="Aloha"
></a-datepicker>`}}function B(){return{codeJs:`import {
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
};`}}const h={name:"PageDatepickerLabelDescription",components:{ADatepicker:f,AlohaExample:E},setup(){const e=i(void 0),{codeHtml:t}=V(),{codeJs:n}=B();return{codeHtml:t,codeJs:n,model:e}}};function q(e,t,n,_,m,u){const a=r("a-datepicker"),l=r("aloha-example");return A(),I(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_",description:"_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_",props:["label-description"]},{default:P(()=>[o(a,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=d=>e.model=d),label:"Date","label-description":"Aloha"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const M=c(h,[["render",q]]);function J(){return{codeHtml:`<a-datepicker
  v-model="model1"
  :min-date="dateYesterday"
  label="_PAGE_DATEPICKER_LBL_WITH_MIN_DATE_"
  type="date"
></a-datepicker>
<div>model1: {{ model1 }}</div>
<a-datepicker
  v-model="model2"
  :max-date="dateTomorrow"
  class="a_mt_3"
  label="_PAGE_DATEPICKER_LBL_WITH_MAX_DATE_"
  type="date"
></a-datepicker>
<div>model2: {{ model2 }}</div>
<a-datepicker
  v-model="model3"
  :max-date="dateTomorrow"
  :min-date="dateTomorrow"
  class="a_mt_3"
  label="_PAGE_DATEPICKER_LBL_WITH_MIN_AND_MAX_DATE_"
  type="date"
></a-datepicker>
<div>model3: {{ model3 }}</div>`}}function Y(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ADatepicker,
} from "aloha-vue";
    
export default {
  name: "PageDatepickerMaxMinDate",
  components: {
    ADatepicker,
  },
  setup() {
    const model1 = ref(undefined);
    const model2 = ref(undefined);
    const model3 = ref(undefined);

    const dateYesterday = computed(() => {
      const date = new Date();
      date.setDate(date.getDate() - 1);

      return date.toISOString();
    });

    const dateTomorrow = computed(() => {
      const date = new Date();
      date.setDate(date.getDate() + 1);

      return date.toISOString();
    });
    
    return {
      dateTomorrow,
      dateYesterday,
      model1,
      model2,
      model3,
    };
  },
};`}}const w={name:"PageDatepickerMaxMinDate",components:{ADatepicker:f,AlohaExample:E},setup(){const e=i(void 0),t=i(void 0),n=i(void 0),_=D(()=>{const l=new Date;return l.setDate(l.getDate()-1),l.toISOString()}),m=D(()=>{const l=new Date;return l.setDate(l.getDate()+1),l.toISOString()}),{codeHtml:u}=J(),{codeJs:a}=Y();return{codeHtml:u,codeJs:a,dateTomorrow:m,dateYesterday:_,model1:e,model2:t,model3:n}}};function G(e,t,n,_,m,u){const a=r("a-datepicker"),l=r("aloha-example");return A(),I(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_PAGE_DATEPICKER_MAX_MIN_DATE_HEADER_",description:"_PAGE_DATEPICKER_MAX_MIN_DATE_DESCRIPTION_",props:["max-date","min-date"]},{default:P(()=>[o(a,{modelValue:e.model1,"onUpdate:modelValue":t[0]||(t[0]=d=>e.model1=d),"min-date":e.dateYesterday,label:"_PAGE_DATEPICKER_LBL_WITH_MIN_DATE_",type:"date"},null,8,["modelValue","min-date"]),s("div",null,"model1: "+p(e.model1),1),o(a,{class:"a_mt_3",modelValue:e.model2,"onUpdate:modelValue":t[1]||(t[1]=d=>e.model2=d),"max-date":e.dateTomorrow,label:"_PAGE_DATEPICKER_LBL_WITH_MAX_DATE_",type:"date"},null,8,["modelValue","max-date"]),s("div",null,"model2: "+p(e.model2),1),o(a,{class:"a_mt_3",modelValue:e.model3,"onUpdate:modelValue":t[2]||(t[2]=d=>e.model3=d),"max-date":e.dateTomorrow,"min-date":e.dateTomorrow,label:"_PAGE_DATEPICKER_LBL_WITH_MIN_AND_MAX_DATE_",type:"date"},null,8,["modelValue","max-date","min-date"]),s("div",null,"model3: "+p(e.model3),1)]),_:1},8,["code-html","code-js"])}const j=c(w,[["render",G]]);function K(){return{codeHtml:`<a-datepicker
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
></a-datepicker>`}}function W(){return{codeJs:`import {
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
};`}}const X={name:"PageDatepickerReadonly",components:{ADatepicker:f,AlohaExample:E},setup(){const e=i("2022-10-18"),t=i("2023-12-12"),n=i(void 0),{codeHtml:_}=K(),{codeJs:m}=W();return{codeHtml:_,codeJs:m,model1:e,model2:t,model3:n}}};function F(e,t,n,_,m,u){const a=r("a-datepicker"),l=r("aloha-example");return A(),I(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default"]},{default:P(()=>[o(a,{"model-value":e.model1,readonly:!0,label:"Input 1"},null,8,["model-value"]),o(a,{class:"a_mt_3","model-value":e.model2,readonly:!0,label:"Input 2"},null,8,["model-value"]),o(a,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"Input 3"},null,8,["model-value"]),o(a,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"Input 4","readonly-default":"-","help-text":"Aloha"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const Z=c(X,[["render",F]]);function Q(){return{codeHtml:`<a-datepicker
  v-model="model1"
  :min-date="dateYesterday"
  label="_PAGE_DATEPICKER_LBL_WITH_MIN_DATE_"
  type="date"
></a-datepicker>
<div>model1: {{ model1 }}</div>
<a-datepicker
  v-model="model2"
  :max-date="dateTomorrow"
  class="a_mt_3"
  label="_PAGE_DATEPICKER_LBL_WITH_MAX_DATE_"
  type="date"
></a-datepicker>
<div>model2: {{ model2 }}</div>
<a-datepicker
  v-model="model3"
  :max-date="dateTomorrow"
  :min-date="dateTomorrow"
  class="a_mt_3"
  label="_PAGE_DATEPICKER_LBL_WITH_MIN_AND_MAX_DATE_"
  type="date"
></a-datepicker>
<div>model3: {{ model3 }}</div>`}}function z(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ADatepicker,
} from "aloha-vue";
    
export default {
  name: "PageDatepickerStartDate",
  components: {
    ADatepicker,
  },
  setup() {
    const model1 = ref(undefined);
    const model2 = ref(undefined);
    const model3 = ref(undefined);

    const dateYesterday = computed(() => {
      const date = new Date();
      date.setDate(date.getDate() - 1);

      return date.toISOString();
    });

    const dateTomorrow = computed(() => {
      const date = new Date();
      date.setDate(date.getDate() + 1);

      return date.toISOString();
    });
    
    return {
      dateTomorrow,
      dateYesterday,
      model1,
      model2,
      model3,
    };
  },
};`}}const x={name:"PageDatepickerStartDate",components:{ADatepicker:f,AlohaExample:E},setup(){const e=i(void 0),t=i("2025-05-16T06:03:05.000Z"),n=i("2025-05-16T06:03:05.000Z"),_=D(()=>{const a=new Date;return a.setFullYear(a.getFullYear()+1),a.toISOString()}),{codeHtml:m}=Q(),{codeJs:u}=z();return{codeHtml:m,codeJs:u,dateNextYear:_,model1:e,model2:t,model3:n}}};function ee(e,t,n,_,m,u){const a=r("a-datepicker"),l=r("aloha-example");return A(),I(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_PAGE_DATEPICKER_START_DATE_HEADER_",description:"_PAGE_DATEPICKER_START_DATE_DESCRIPTION_",props:["start-date","focus-start-date"]},{default:P(()=>[o(a,{modelValue:e.model1,"onUpdate:modelValue":t[0]||(t[0]=d=>e.model1=d),"start-date":e.dateNextYear,label:"_PAGE_DATEPICKER_LBL_START_DATE_NEXT_YEAR_",type:"date"},null,8,["modelValue","start-date"]),s("div",null,"model1: "+p(e.model1),1),o(a,{modelValue:e.model2,"onUpdate:modelValue":t[1]||(t[1]=d=>e.model2=d),"start-date":e.dateNextYear,label:"_PAGE_DATEPICKER_LBL_START_DATE_NEXT_YEAR_AND_MODEL_",type:"date"},null,8,["modelValue","start-date"]),s("div",null,"model2: "+p(e.model2),1),o(a,{modelValue:e.model3,"onUpdate:modelValue":t[2]||(t[2]=d=>e.model3=d),"focus-start-date":!0,"start-date":e.dateNextYear,label:"_PAGE_DATEPICKER_LBL_START_DATE_NEXT_YEAR_AND_MODEL_AND_FOCUS_START_DATE_",type:"date"},null,8,["modelValue","start-date"]),s("div",null,"model3: "+p(e.model3),1)]),_:1},8,["code-html","code-js"])}const te=c(x,[["render",ee]]);function ae(){return{codeHtml:`<a-datepicker
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
<div>model3: {{ model3 }}</div>`}}function de(){return{codeJs:`import {
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
};`}}const oe={name:"PageDatepickerType",components:{ADatepicker:f,AlohaExample:E},setup(){const e=i("2025-05-16T06:03:05.000Z"),t=i("2025-05-16T06:03:05.000Z"),n=i(void 0),{codeHtml:_}=ae(),{codeJs:m}=de();return{codeHtml:_,codeJs:m,model1:e,model2:t,model3:n}}};function le(e,t,n,_,m,u){const a=r("a-datepicker"),l=r("aloha-example");return A(),I(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_PAGE_DATEPICKER_TYPE_HEADER_",description:"_PAGE_DATEPICKER_TYPE_DESCRIPTION_",props:["type"]},{default:P(()=>[o(a,{modelValue:e.model1,"onUpdate:modelValue":t[0]||(t[0]=d=>e.model1=d),label:"Date",type:"date"},null,8,["modelValue"]),s("div",null,"model1: "+p(e.model1),1),o(a,{modelValue:e.model2,"onUpdate:modelValue":t[1]||(t[1]=d=>e.model2=d),"minute-step":1,format:"HH:mm",label:"Time",type:"time"},null,8,["modelValue"]),s("div",null,"model2: "+p(e.model2),1),o(a,{modelValue:e.model3,"onUpdate:modelValue":t[2]||(t[2]=d=>e.model3=d),label:"Datetime",type:"datetime"},null,8,["modelValue"]),s("div",null,"model3: "+p(e.model3),1)]),_:1},8,["code-html","code-js"])}const ne=c(oe,[["render",le]]);function re(){return{dataEvents:[{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"},{name:"focus",description:"_A_UI_EVENTS_FOCUS_DESCRIPTION_",type:"Function"},{name:"blur",description:"_A_UI_EVENTS_BLUR_DESCRIPTION_",type:"Function"}]}}function _e(){const e=D(()=>g({placeholder:"_A_DATEPICKER_COMPONENT_NAME_"}));return{pageTitle:D(()=>`ADatepicker${e.value?` (${e.value})`:""}`)}}function me(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"autocomplete",description:"_A_UI_PROPS_AUTOCOMPLETE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"clear-button-class",description:"_A_UI_PROPS_CLEAR_BUTTON_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon-prepend",description:"_A_INPUT_PROPS_ICON_PREPEND_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_input_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"input-attributes",description:"_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"input-class",description:"_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"is-clear-button",description:"_A_UI_PROPS_IS_CLEAR_BUTTON_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-label-float",description:"_A_UI_PROPS_IS_LABEL_FLOAT_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-description",description:"_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"maxlength",description:"_A_UI_PROPS_MAXLENGTH_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-undefined",description:"_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"placeholder",description:"_A_UI_PROPS_PLACEHOLDER_DESCRIPTION_",type:"String / Number / Object",default:void 0,required:!1},{name:"readonly",description:"_A_UI_PROPS_READONLY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"readonly-default",description:"_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_",type:"String",default:"",required:!1},{name:"readonly-password-length",description:"_A_INPUT_PROPS_READONLY_PASSWORD_LENGTH_DESCRIPTION_",type:"Number",default:8,required:!1},{name:"readonly-password-symbol",description:"_A_INPUT_PROPS_READONLY_PASSWORD_SYMBOL_DESCRIPTION_",type:"String",default:"*",required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"show-password",description:"_A_INPUT_PROPS_SHOW_PASSWORD_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"step",description:"_A_INPUT_PROPS_STEP_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"type",description:"_A_INPUT_PROPS_TYPE_DESCRIPTION_",type:"String",default:"text",required:!1}]}}function ie(){return{dataTranslate:["_A_INPUT_SHOW_PASSWORD_","_A_INPUT_HIDE_PASSWORD_"]}}const se={name:"PageDatepicker",components:{AlohaPage:y,AlohaTableProps:k,AlohaTableTranslate:C,ATranslation:v,PageDatepickerBasic:$,PageDatepickerLabelDescription:M,PageDatepickerMaxMinDate:j,PageDatepickerReadonly:Z,PageDatepickerStartDate:te,PageDatepickerType:ne},setup(){const{pageTitle:e}=_e(),{dataProps:t}=me(),{dataTranslate:n}=ie(),{dataEvents:_}=re();return{dataEvents:_,dataProps:t,dataTranslate:n,pageTitle:e}}};function pe(e,t,n,_,m,u){const a=r("a-translation"),l=r("page-datepicker-basic"),d=r("page-datepicker-label-description"),T=r("page-datepicker-readonly"),S=r("page-datepicker-max-min-date"),R=r("page-datepicker-start-date"),O=r("page-datepicker-type"),N=r("aloha-page");return A(),I(N,{"page-title":e.pageTitle},{body:P(()=>[o(a,{tag:"p",html:"_A_DATEPICKER_COMPONENT_DESCRIPTION_"}),o(l),o(d),o(T),o(S),o(R),o(O)]),_:1},8,["page-title"])}const ve=c(se,[["render",pe]]);export{ve as default};
