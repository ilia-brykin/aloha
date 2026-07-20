import{A as I,a as K}from"./chunk.AlohaExample.Do4N6Gou.js";import{A as U}from"./chunk.AlohaTableProps.BqV8h4l1.js";import{A as h}from"./chunk.AlohaTableTranslate.CqaBRHLt.js";import{am as p,_ as r,g as H,A as k}from"./bundle.index.CpueeaOY.js";import{r as i,Y as P,W as A,aU as T,f as n,_ as o,$ as d,aV as E,d as D}from"./chunk.vendor.CWr53wb5.js";import"./chunk.vendor-lodash.CWoM99Se.js";import"./chunk.APageTabTitle.DGTxREmI.js";import"./chunk.AlohaHighlightjs.Cyb5M4zM.js";import"./chunk.ATable.BS6rHAzX.js";import"./chunk.translations-ar.DRto1jDw.js";import"./chunk.translations-de.CEjcANRo.js";import"./chunk.translations-en.BjlQK_tj.js";import"./chunk.translations-es.BcLAUo0L.js";import"./chunk.translations-fr.DINmPQrz.js";import"./chunk.translations-hr.BU9Fw-5f.js";import"./chunk.translations-it.Cu9SxZzh.js";import"./chunk.translations-ru.Cs_zBe4-.js";function y(){return{codeHtml:`<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="model1"
      label="_PAGE_DATEPICKER_LBL_INPUT_1_"
    ></a-datepicker>
    <div>model1: {{ model1 }}</div>
  </div>
</div>
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="model2"
      label="_PAGE_DATEPICKER_LBL_INPUT_2_"
    ></a-datepicker>
    <div>model2: {{ model2 }}</div>
  </div>
</div>
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="model3"
      label="_PAGE_DATEPICKER_LBL_INPUT_3_"
    ></a-datepicker>
    <div>model3: {{ model3 }}</div>
  </div>
</div>`}}function B(){return{codeJs:`import {
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
};`}}const G={name:"PageDatepickerBasic",components:{ADatepicker:p,AlohaExample:I},setup(){const e=i("2022-10-18"),_=i("2023-12-12"),m=i(void 0),{codeHtml:c}=y(),{codeJs:s}=B();return{codeHtml:c,codeJs:s,model1:e,model2:_,model3:m}}},g={class:"a_columns a_columns_count_12"},b={class:"a_column a_column_6 a_columns_count_12_touch"},$={class:"a_columns a_columns_count_12"},V={class:"a_column a_column_6 a_columns_count_12_touch"},Y={class:"a_columns a_columns_count_12"},q={class:"a_column a_column_6 a_columns_count_12_touch"};function F(e,_,m,c,s,u){const a=n("a-datepicker"),l=n("aloha-example");return P(),A(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","label"]},{default:T(()=>[o("div",g,[o("div",b,[d(a,{modelValue:e.model1,"onUpdate:modelValue":_[0]||(_[0]=t=>e.model1=t),label:"_PAGE_DATEPICKER_LBL_INPUT_1_"},null,8,["modelValue"]),o("div",null,"model1: "+E(e.model1),1)])]),o("div",$,[o("div",V,[d(a,{modelValue:e.model2,"onUpdate:modelValue":_[1]||(_[1]=t=>e.model2=t),label:"_PAGE_DATEPICKER_LBL_INPUT_2_"},null,8,["modelValue"]),o("div",null,"model2: "+E(e.model2),1)])]),o("div",Y,[o("div",q,[d(a,{modelValue:e.model3,"onUpdate:modelValue":_[2]||(_[2]=t=>e.model3=t),label:"_PAGE_DATEPICKER_LBL_INPUT_3_"},null,8,["modelValue"]),o("div",null,"model3: "+E(e.model3),1)])])]),_:1},8,["code-html","code-js"])}const J=r(G,[["render",F]]);function j(){return{codeHtml:`<a-datepicker
  v-model="model"
  :error-icon="errorIcon"
  errors="Aloha"
  label="Datepicker"
></a-datepicker>`}}function X(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ADatepicker,
} from "aloha-vue";
    
export default {
  name: "PageDatepickerErrorIcon",
  components: {
    ADatepicker,
  },
  setup() {
    const model = ref("2022-10-18");
    const errorIcon = "<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"16\\" height=\\"16\\" fill=\\"currentColor\\" viewBox=\\"0 0 16 16\\"><path d=\\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.93 6.588 8.758 10.042a.5.5 0 0 1-.998 0L7.588 6.588a.5.5 0 1 1 .998 0M8 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2\\"/></svg>";
    
    return {
      errorIcon,
      model,
    };
  },
};`}}const w={name:"PageDatepickerErrorIcon",components:{ADatepicker:p,AlohaExample:I},setup(){const e=i("2022-10-18"),_='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.93 6.588 8.758 10.042a.5.5 0 0 1-.998 0L7.588 6.588a.5.5 0 1 1 .998 0M8 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>',{codeHtml:m}=j(),{codeJs:c}=X();return{codeHtml:m,codeJs:c,errorIcon:_,model:e}}};function W(e,_,m,c,s,u){const a=n("a-datepicker"),l=n("aloha-example");return P(),A(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERROR_ICON_HEADER_",description:"_A_UI_GROUP_ERROR_ICON_DESCRIPTION_",props:["errors","error-icon"]},{default:T(()=>[d(a,{modelValue:e.model,"onUpdate:modelValue":_[0]||(_[0]=t=>e.model=t),"error-icon":e.errorIcon,errors:"Aloha",label:"Datepicker"},null,8,["modelValue","error-icon"])]),_:1},8,["code-html","code-js"])}const Z=r(w,[["render",W]]);function Q(){return{codeHtml:`<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="model"
      :is-label-float="false"
      label-description="_PAGE_DATEPICKER_TXT_ALOHA_"
      label="_PAGE_DATEPICKER_LBL_TYPE_DATE_"
    ></a-datepicker>
  </div>
</div>
`}}function z(){return{codeJs:`import {
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
      model,
    };
  },
};`}}const x={name:"PageDatepickerLabelDescription",components:{ADatepicker:p,AlohaExample:I},setup(){const e=i(void 0),{codeHtml:_}=Q(),{codeJs:m}=z();return{codeHtml:_,codeJs:m,model:e}}},ee={class:"a_columns a_columns_count_12"},_e={class:"a_column a_column_6 a_columns_count_12_touch"};function oe(e,_,m,c,s,u){const a=n("a-datepicker"),l=n("aloha-example");return P(),A(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_",description:"_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_",props:["label-description","is-label-float"]},{default:T(()=>[o("div",ee,[o("div",_e,[d(a,{modelValue:e.model,"onUpdate:modelValue":_[0]||(_[0]=t=>e.model=t),"is-label-float":!1,"label-description":"_PAGE_DATEPICKER_TXT_ALOHA_",label:"_PAGE_DATEPICKER_LBL_TYPE_DATE_"},null,8,["modelValue"])])])]),_:1},8,["code-html","code-js"])}const te=r(x,[["render",oe]]);function ae(){return{codeHtml:`<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="model1"
      :min-date="dateYesterday"
      label="_PAGE_DATEPICKER_LBL_WITH_MIN_DATE_"
      type="date"
    ></a-datepicker>
    <div>model1: {{ model1 }}</div>
  </div>
</div>
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="model2"
      :max-date="dateTomorrow"
      class="a_mt_3"
      label="_PAGE_DATEPICKER_LBL_WITH_MAX_DATE_"
      type="date"
    ></a-datepicker>
    <div>model2: {{ model2 }}</div>
  </div>
</div>
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="model3"
      :max-date="dateTomorrow"
      :min-date="dateTomorrow"
      class="a_mt_3"
      label="_PAGE_DATEPICKER_LBL_WITH_MIN_AND_MAX_DATE_"
      type="date"
    ></a-datepicker>
    <div>model3: {{ model3 }}</div>
  </div>
</div>`}}function de(){return{codeJs:`import {
  computed,
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
};`}}const le={name:"PageDatepickerMaxMinDate",components:{ADatepicker:p,AlohaExample:I},setup(){const e=i(void 0),_=i(void 0),m=i(void 0),c=D(()=>{const l=new Date;return l.setDate(l.getDate()-1),l.toISOString()}),s=D(()=>{const l=new Date;return l.setDate(l.getDate()+1),l.toISOString()}),{codeHtml:u}=ae(),{codeJs:a}=de();return{codeHtml:u,codeJs:a,dateTomorrow:s,dateYesterday:c,model1:e,model2:_,model3:m}}},ne={class:"a_columns a_columns_count_12"},me={class:"a_column a_column_6 a_columns_count_12_touch"},ie={class:"a_columns a_columns_count_12"},ce={class:"a_column a_column_6 a_columns_count_12_touch"},se={class:"a_columns a_columns_count_12"},Ee={class:"a_column a_column_6 a_columns_count_12_touch"};function ue(e,_,m,c,s,u){const a=n("a-datepicker"),l=n("aloha-example");return P(),A(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_PAGE_DATEPICKER_MAX_MIN_DATE_HEADER_",description:"_PAGE_DATEPICKER_MAX_MIN_DATE_DESCRIPTION_",props:["max-date","min-date"]},{default:T(()=>[o("div",ne,[o("div",me,[d(a,{modelValue:e.model1,"onUpdate:modelValue":_[0]||(_[0]=t=>e.model1=t),"min-date":e.dateYesterday,label:"_PAGE_DATEPICKER_LBL_WITH_MIN_DATE_",type:"date"},null,8,["modelValue","min-date"]),o("div",null,"model1: "+E(e.model1),1)])]),o("div",ie,[o("div",ce,[d(a,{class:"a_mt_3",modelValue:e.model2,"onUpdate:modelValue":_[1]||(_[1]=t=>e.model2=t),"max-date":e.dateTomorrow,label:"_PAGE_DATEPICKER_LBL_WITH_MAX_DATE_",type:"date"},null,8,["modelValue","max-date"]),o("div",null,"model2: "+E(e.model2),1)])]),o("div",se,[o("div",Ee,[d(a,{class:"a_mt_3",modelValue:e.model3,"onUpdate:modelValue":_[2]||(_[2]=t=>e.model3=t),"max-date":e.dateTomorrow,"min-date":e.dateTomorrow,label:"_PAGE_DATEPICKER_LBL_WITH_MIN_AND_MAX_DATE_",type:"date"},null,8,["modelValue","max-date","min-date"]),o("div",null,"model3: "+E(e.model3),1)])])]),_:1},8,["code-html","code-js"])}const re=r(le,[["render",ue]]);function Pe(){return{codeHtml:`<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="modelDate"
      label="_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_DATE_"
      type="date"
    ></a-datepicker>
    <div>modelDate: {{ modelDate }}</div>
  </div>
</div>
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="modelTimeHour"
      class="a_mt_3"
      label="_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_TIME_HOUR_"
      time-precision="hour"
      type="time"
    ></a-datepicker>
    <div>modelTimeHour: {{ modelTimeHour }}</div>
  </div>
</div>
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="modelTimeMinute"
      class="a_mt_3"
      label="_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_TIME_MINUTE_"
      time-precision="minute"
      type="time"
    ></a-datepicker>
    <div>modelTimeMinute: {{ modelTimeMinute }}</div>
  </div>
</div>
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="modelDatetimeSecond"
      class="a_mt_3"
      label="_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_DATETIME_SECOND_"
      time-precision="second"
      type="datetime"
    ></a-datepicker>
    <div>modelDatetimeSecond: {{ modelDatetimeSecond }}</div>
  </div>
</div>
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="modelOverride"
      :placeholders-default="placeholdersCustom"
      class="a_mt_3"
      label="_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_OVERRIDE_"
      time-precision="minute"
      type="datetime"
    ></a-datepicker>
    <div>modelOverride: {{ modelOverride }}</div>
  </div>
</div>`}}function Ae(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ADatepicker,
} from "aloha-vue";

export default {
  name: "PageDatepickerPlaceholderDefault",
  components: {
    ADatepicker,
  },
  setup() {
    const modelDate = ref(undefined);
    const modelTimeHour = ref(undefined);
    const modelTimeMinute = ref(undefined);
    const modelDatetimeSecond = ref(undefined);
    const modelOverride = ref(undefined);

    const placeholdersCustom = {
      datetimeMinute: "_PAGE_DATEPICKER_PLACEHOLDER_CUSTOM_DATETIME_MINUTE_",
      timeMinute: "_PAGE_DATEPICKER_PLACEHOLDER_CUSTOM_TIME_MINUTE_",
    };
    
    return {
      modelDate,
      modelTimeHour,
      modelTimeMinute,
      modelDatetimeSecond,
      modelOverride,
      placeholdersCustom,
    };
  },
};`}}const Te={name:"PageDatepickerPlaceholderDefault",components:{ADatepicker:p,AlohaExample:I},setup(){const e=i(void 0),_=i(void 0),m=i(void 0),c=i(void 0),s=i(void 0),u={datetimeMinute:"_PAGE_DATEPICKER_PLACEHOLDER_CUSTOM_DATETIME_MINUTE_",timeMinute:"_PAGE_DATEPICKER_PLACEHOLDER_CUSTOM_TIME_MINUTE_"},{codeHtml:a}=Pe(),{codeJs:l}=Ae();return{codeHtml:a,codeJs:l,modelDate:e,modelTimeHour:_,modelTimeMinute:m,modelDatetimeSecond:c,modelOverride:s,placeholdersCustom:u}}},Ie={class:"a_columns a_columns_count_12"},pe={class:"a_column a_column_6 a_columns_count_12_touch"},De={class:"a_columns a_columns_count_12"},Re={class:"a_column a_column_6 a_columns_count_12_touch"},Ce={class:"a_columns a_columns_count_12"},Oe={class:"a_column a_column_6 a_columns_count_12_touch"},fe={class:"a_columns a_columns_count_12"},Se={class:"a_column a_column_6 a_columns_count_12_touch"},Le={class:"a_columns a_columns_count_12"},ve={class:"a_column a_column_6 a_columns_count_12_touch"};function Ne(e,_,m,c,s,u){const a=n("a-datepicker"),l=n("aloha-example");return P(),A(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_PAGE_DATEPICKER_PLACEHOLDER_DEFAULT_HEADER_",description:"_PAGE_DATEPICKER_PLACEHOLDER_DEFAULT_DESCRIPTION_",props:["placeholder","placeholders-default","type","time-precision"]},{default:T(()=>[o("div",Ie,[o("div",pe,[d(a,{modelValue:e.modelDate,"onUpdate:modelValue":_[0]||(_[0]=t=>e.modelDate=t),label:"_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_DATE_",type:"date"},null,8,["modelValue"]),o("div",null,"modelDate: "+E(e.modelDate),1)])]),o("div",De,[o("div",Re,[d(a,{class:"a_mt_3",modelValue:e.modelTimeHour,"onUpdate:modelValue":_[1]||(_[1]=t=>e.modelTimeHour=t),label:"_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_TIME_HOUR_","time-precision":"hour",type:"time"},null,8,["modelValue"]),o("div",null,"modelTimeHour: "+E(e.modelTimeHour),1)])]),o("div",Ce,[o("div",Oe,[d(a,{class:"a_mt_3",modelValue:e.modelTimeMinute,"onUpdate:modelValue":_[2]||(_[2]=t=>e.modelTimeMinute=t),label:"_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_TIME_MINUTE_","time-precision":"minute",type:"time"},null,8,["modelValue"]),o("div",null,"modelTimeMinute: "+E(e.modelTimeMinute),1)])]),o("div",fe,[o("div",Se,[d(a,{class:"a_mt_3",modelValue:e.modelDatetimeSecond,"onUpdate:modelValue":_[3]||(_[3]=t=>e.modelDatetimeSecond=t),label:"_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_DATETIME_SECOND_","time-precision":"second",type:"datetime"},null,8,["modelValue"]),o("div",null,"modelDatetimeSecond: "+E(e.modelDatetimeSecond),1)])]),o("div",Le,[o("div",ve,[d(a,{class:"a_mt_3",modelValue:e.modelOverride,"onUpdate:modelValue":_[4]||(_[4]=t=>e.modelOverride=t),"placeholders-default":e.placeholdersCustom,label:"_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_OVERRIDE_","time-precision":"minute",type:"datetime"},null,8,["modelValue","placeholders-default"]),o("div",null,"modelOverride: "+E(e.modelOverride),1)])])]),_:1},8,["code-html","code-js"])}const Me=r(Te,[["render",Ne]]);function Ke(){return{codeHtml:`<a-datepicker
  :model-value="model1"
  :readonly="true"
  label="_PAGE_DATEPICKER_LBL_INPUT_1_"
></a-datepicker>
<a-datepicker
  :model-value="model2"
  :readonly="true"
  class="a_mt_3"
  label="_PAGE_DATEPICKER_LBL_INPUT_2_"
></a-datepicker>
<a-datepicker
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  label="_PAGE_DATEPICKER_LBL_INPUT_3_"
></a-datepicker>
<a-datepicker
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  label="_PAGE_DATEPICKER_LBL_INPUT_4_"
  readonly-default="-"
  help-text="_PAGE_DATEPICKER_TXT_ALOHA_"
></a-datepicker>`}}function Ue(){return{codeJs:`import {
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
};`}}const he={name:"PageDatepickerReadonly",components:{ADatepicker:p,AlohaExample:I},setup(){const e=i("2022-10-18"),_=i("2023-12-12"),m=i(void 0),{codeHtml:c}=Ke(),{codeJs:s}=Ue();return{codeHtml:c,codeJs:s,model1:e,model2:_,model3:m}}};function He(e,_,m,c,s,u){const a=n("a-datepicker"),l=n("aloha-example");return P(),A(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default"]},{default:T(()=>[d(a,{"model-value":e.model1,readonly:!0,label:"_PAGE_DATEPICKER_LBL_INPUT_1_"},null,8,["model-value"]),d(a,{class:"a_mt_3","model-value":e.model2,readonly:!0,label:"_PAGE_DATEPICKER_LBL_INPUT_2_"},null,8,["model-value"]),d(a,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"_PAGE_DATEPICKER_LBL_INPUT_3_"},null,8,["model-value"]),d(a,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"_PAGE_DATEPICKER_LBL_INPUT_4_","readonly-default":"-","help-text":"_PAGE_DATEPICKER_TXT_ALOHA_"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const ke=r(he,[["render",He]]);function ye(){return{codeHtml:`<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="model1"
      :start-date="dateNextYear"
      label="_PAGE_DATEPICKER_LBL_START_DATE_NEXT_YEAR_"
      type="date"
    ></a-datepicker>
    <div>model1: {{ model1 }}</div>
  </div>
</div>
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="model2"
      :start-date="dateNextYear"
      label="_PAGE_DATEPICKER_LBL_START_DATE_NEXT_YEAR_AND_MODEL_"
      type="date"
    ></a-datepicker>
    <div>model2: {{ model2 }}</div>
  </div>
</div>
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="model3"
      :focus-start-date="true"
      :start-date="dateNextYear"
      label="_PAGE_DATEPICKER_LBL_START_DATE_NEXT_YEAR_AND_MODEL_AND_FOCUS_START_DATE_"
      type="date"
    ></a-datepicker>
    <div>model3: {{ model3 }}</div>
  </div>
</div>`}}function Be(){return{codeJs:`import {
  computed,
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
    const model2 = ref("2025-05-16");
    const model3 = ref("2025-05-16");

    const dateNextYear = computed(() => {
      const date = new Date();
      date.setFullYear(date.getFullYear() + 1);

      return date.toISOString();
    });
    
    return {
      dateNextYear,
      model1,
      model2,
      model3,
    };
  },
};`}}const Ge={name:"PageDatepickerStartDate",components:{ADatepicker:p,AlohaExample:I},setup(){const e=i(void 0),_=i("2025-05-16"),m=i("2025-05-16"),c=D(()=>{const a=new Date;return a.setFullYear(a.getFullYear()+1),a.toISOString()}),{codeHtml:s}=ye(),{codeJs:u}=Be();return{codeHtml:s,codeJs:u,dateNextYear:c,model1:e,model2:_,model3:m}}},ge={class:"a_columns a_columns_count_12"},be={class:"a_column a_column_6 a_columns_count_12_touch"},$e={class:"a_columns a_columns_count_12"},Ve={class:"a_column a_column_6 a_columns_count_12_touch"},Ye={class:"a_columns a_columns_count_12"},qe={class:"a_column a_column_6 a_columns_count_12_touch"};function Fe(e,_,m,c,s,u){const a=n("a-datepicker"),l=n("aloha-example");return P(),A(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_PAGE_DATEPICKER_START_DATE_HEADER_",description:"_PAGE_DATEPICKER_START_DATE_DESCRIPTION_",props:["start-date","focus-start-date"]},{default:T(()=>[o("div",ge,[o("div",be,[d(a,{modelValue:e.model1,"onUpdate:modelValue":_[0]||(_[0]=t=>e.model1=t),"start-date":e.dateNextYear,label:"_PAGE_DATEPICKER_LBL_START_DATE_NEXT_YEAR_",type:"date"},null,8,["modelValue","start-date"]),o("div",null,"model1: "+E(e.model1),1)])]),o("div",$e,[o("div",Ve,[d(a,{modelValue:e.model2,"onUpdate:modelValue":_[1]||(_[1]=t=>e.model2=t),"start-date":e.dateNextYear,label:"_PAGE_DATEPICKER_LBL_START_DATE_NEXT_YEAR_AND_MODEL_",type:"date"},null,8,["modelValue","start-date"]),o("div",null,"model2: "+E(e.model2),1)])]),o("div",Ye,[o("div",qe,[d(a,{modelValue:e.model3,"onUpdate:modelValue":_[2]||(_[2]=t=>e.model3=t),"focus-start-date":!0,"start-date":e.dateNextYear,label:"_PAGE_DATEPICKER_LBL_START_DATE_NEXT_YEAR_AND_MODEL_AND_FOCUS_START_DATE_",type:"date"},null,8,["modelValue","start-date"]),o("div",null,"model3: "+E(e.model3),1)])])]),_:1},8,["code-html","code-js"])}const Je=r(Ge,[["render",Fe]]);function je(){return{codeHtml:`<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="modelDatetimeHour"
      label="_PAGE_DATEPICKER_LBL_TIME_PRECISION_DATETIME_HOUR_"
      time-precision="hour"
      type="datetime"
    ></a-datepicker>
    <div>modelDatetimeHour: {{ modelDatetimeHour }}</div>
  </div>
</div>
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="modelDatetimeMinute"
      class="a_mt_3"
      label="_PAGE_DATEPICKER_LBL_TIME_PRECISION_DATETIME_MINUTE_"
      time-precision="minute"
      type="datetime"
    ></a-datepicker>
    <div>modelDatetimeMinute: {{ modelDatetimeMinute }}</div>
  </div>
</div>
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="modelDatetimeSecond"
      class="a_mt_3"
      label="_PAGE_DATEPICKER_LBL_TIME_PRECISION_DATETIME_SECOND_"
      time-precision="second"
      type="datetime"
    ></a-datepicker>
    <div>modelDatetimeSecond: {{ modelDatetimeSecond }}</div>
  </div>
</div>
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="modelTimeHour"
      class="a_mt_3"
      label="_PAGE_DATEPICKER_LBL_TIME_PRECISION_TIME_HOUR_"
      time-precision="hour"
      type="time"
    ></a-datepicker>
    <div>modelTimeHour: {{ modelTimeHour }}</div>
  </div>
</div>
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="modelTimeMinute"
      class="a_mt_3"
      label="_PAGE_DATEPICKER_LBL_TIME_PRECISION_TIME_MINUTE_"
      time-precision="minute"
      type="time"
    ></a-datepicker>
    <div>modelTimeMinute: {{ modelTimeMinute }}</div>
  </div>
</div>
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="modelTimeSecond"
      class="a_mt_3"
      label="_PAGE_DATEPICKER_LBL_TIME_PRECISION_TIME_SECOND_"
      time-precision="second"
      type="time"
    ></a-datepicker>
    <div>modelTimeSecond: {{ modelTimeSecond }}</div>
  </div>
</div>`}}function Xe(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ADatepicker,
} from "aloha-vue";

export default {
  name: "PageDatepickerTimePrecision",
  components: {
    ADatepicker,
  },
  setup() {
    const modelDatetimeHour = ref(undefined);
    const modelDatetimeMinute = ref(undefined);
    const modelDatetimeSecond = ref(undefined);
    const modelTimeHour = ref(undefined);
    const modelTimeMinute = ref(undefined);
    const modelTimeSecond = ref(undefined);
    
    return {
      modelDatetimeHour,
      modelDatetimeMinute,
      modelDatetimeSecond,
      modelTimeHour,
      modelTimeMinute,
      modelTimeSecond,
    };
  },
};`}}const we={name:"PageDatepickerTimePrecision",components:{ADatepicker:p,AlohaExample:I},setup(){const e=i(void 0),_=i(void 0),m=i(void 0),c=i(void 0),s=i(void 0),u=i(void 0),{codeHtml:a}=je(),{codeJs:l}=Xe();return{codeHtml:a,codeJs:l,modelDatetimeHour:e,modelDatetimeMinute:_,modelDatetimeSecond:m,modelTimeHour:c,modelTimeMinute:s,modelTimeSecond:u}}},We={class:"a_columns a_columns_count_12"},Ze={class:"a_column a_column_6 a_columns_count_12_touch"},Qe={class:"a_columns a_columns_count_12"},ze={class:"a_column a_column_6 a_columns_count_12_touch"},xe={class:"a_columns a_columns_count_12"},e_={class:"a_column a_column_6 a_columns_count_12_touch"},__={class:"a_columns a_columns_count_12"},o_={class:"a_column a_column_6 a_columns_count_12_touch"},t_={class:"a_columns a_columns_count_12"},a_={class:"a_column a_column_6 a_columns_count_12_touch"},d_={class:"a_columns a_columns_count_12"},l_={class:"a_column a_column_6 a_columns_count_12_touch"};function n_(e,_,m,c,s,u){const a=n("a-datepicker"),l=n("aloha-example");return P(),A(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_PAGE_DATEPICKER_TIME_PRECISION_HEADER_",description:"_PAGE_DATEPICKER_TIME_PRECISION_DESCRIPTION_",props:["type","time-precision"]},{default:T(()=>[o("div",We,[o("div",Ze,[d(a,{modelValue:e.modelDatetimeHour,"onUpdate:modelValue":_[0]||(_[0]=t=>e.modelDatetimeHour=t),label:"_PAGE_DATEPICKER_LBL_TIME_PRECISION_DATETIME_HOUR_","time-precision":"hour",type:"datetime"},null,8,["modelValue"]),o("div",null,"modelDatetimeHour: "+E(e.modelDatetimeHour),1)])]),o("div",Qe,[o("div",ze,[d(a,{class:"a_mt_3",modelValue:e.modelDatetimeMinute,"onUpdate:modelValue":_[1]||(_[1]=t=>e.modelDatetimeMinute=t),label:"_PAGE_DATEPICKER_LBL_TIME_PRECISION_DATETIME_MINUTE_","time-precision":"minute",type:"datetime"},null,8,["modelValue"]),o("div",null,"modelDatetimeMinute: "+E(e.modelDatetimeMinute),1)])]),o("div",xe,[o("div",e_,[d(a,{class:"a_mt_3",modelValue:e.modelDatetimeSecond,"onUpdate:modelValue":_[2]||(_[2]=t=>e.modelDatetimeSecond=t),label:"_PAGE_DATEPICKER_LBL_TIME_PRECISION_DATETIME_SECOND_","time-precision":"second",type:"datetime"},null,8,["modelValue"]),o("div",null,"modelDatetimeSecond: "+E(e.modelDatetimeSecond),1)])]),o("div",__,[o("div",o_,[d(a,{class:"a_mt_3",modelValue:e.modelTimeHour,"onUpdate:modelValue":_[3]||(_[3]=t=>e.modelTimeHour=t),label:"_PAGE_DATEPICKER_LBL_TIME_PRECISION_TIME_HOUR_","time-precision":"hour",type:"time"},null,8,["modelValue"]),o("div",null,"modelTimeHour: "+E(e.modelTimeHour),1)])]),o("div",t_,[o("div",a_,[d(a,{class:"a_mt_3",modelValue:e.modelTimeMinute,"onUpdate:modelValue":_[4]||(_[4]=t=>e.modelTimeMinute=t),label:"_PAGE_DATEPICKER_LBL_TIME_PRECISION_TIME_MINUTE_","time-precision":"minute",type:"time"},null,8,["modelValue"]),o("div",null,"modelTimeMinute: "+E(e.modelTimeMinute),1)])]),o("div",d_,[o("div",l_,[d(a,{class:"a_mt_3",modelValue:e.modelTimeSecond,"onUpdate:modelValue":_[5]||(_[5]=t=>e.modelTimeSecond=t),label:"_PAGE_DATEPICKER_LBL_TIME_PRECISION_TIME_SECOND_","time-precision":"second",type:"time"},null,8,["modelValue"]),o("div",null,"modelTimeSecond: "+E(e.modelTimeSecond),1)])])]),_:1},8,["code-html","code-js"])}const m_=r(we,[["render",n_]]);function i_(){return{codeHtml:`<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="model1"
      label="_PAGE_DATEPICKER_LBL_TYPE_DATE_"
      type="date"
    ></a-datepicker>
    <div>model1: {{ model1 }}</div>
  </div>
</div>
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="model2"
      :minute-step="1"
      format="HH:mm"
      label="_PAGE_DATEPICKER_LBL_TYPE_TIME_"
      type="time"
    ></a-datepicker>
    <div>model2: {{ model2 }}</div>
  </div>
</div>
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="model3"
      label="_PAGE_DATEPICKER_LBL_TYPE_DATETIME_"
      type="datetime"
    ></a-datepicker>
    <div>model3: {{ model3 }}</div>
  </div>
</div>`}}function c_(){return{codeJs:`import {
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
};`}}const s_={name:"PageDatepickerType",components:{ADatepicker:p,AlohaExample:I},setup(){const e=i("2025-05-16"),_=i("2026-03-23T03:05:00.000+01:00"),m=i(void 0),{codeHtml:c}=i_(),{codeJs:s}=c_();return{codeHtml:c,codeJs:s,model1:e,model2:_,model3:m}}},E_={class:"a_columns a_columns_count_12"},u_={class:"a_column a_column_6 a_columns_count_12_touch"},r_={class:"a_columns a_columns_count_12"},P_={class:"a_column a_column_6 a_columns_count_12_touch"},A_={class:"a_columns a_columns_count_12"},T_={class:"a_column a_column_6 a_columns_count_12_touch"};function I_(e,_,m,c,s,u){const a=n("a-datepicker"),l=n("aloha-example");return P(),A(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_PAGE_DATEPICKER_TYPE_HEADER_",description:"_PAGE_DATEPICKER_TYPE_DESCRIPTION_",props:["type"]},{default:T(()=>[o("div",E_,[o("div",u_,[d(a,{modelValue:e.model1,"onUpdate:modelValue":_[0]||(_[0]=t=>e.model1=t),label:"_PAGE_DATEPICKER_LBL_TYPE_DATE_",type:"date"},null,8,["modelValue"]),o("div",null,"model1: "+E(e.model1),1)])]),o("div",r_,[o("div",P_,[d(a,{modelValue:e.model2,"onUpdate:modelValue":_[1]||(_[1]=t=>e.model2=t),"minute-step":1,format:"HH:mm",label:"_PAGE_DATEPICKER_LBL_TYPE_TIME_",type:"time"},null,8,["modelValue"]),o("div",null,"model2: "+E(e.model2),1)])]),o("div",A_,[o("div",T_,[d(a,{modelValue:e.model3,"onUpdate:modelValue":_[2]||(_[2]=t=>e.model3=t),label:"_PAGE_DATEPICKER_LBL_TYPE_DATETIME_",type:"datetime"},null,8,["modelValue"]),o("div",null,"model3: "+E(e.model3),1)])])]),_:1},8,["code-html","code-js"])}const p_=r(s_,[["render",I_]]);function D_(){return{dataEvents:[{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"},{name:"focus",description:"_A_UI_EVENTS_FOCUS_DESCRIPTION_",type:"Function"},{name:"blur",description:"_A_UI_EVENTS_BLUR_DESCRIPTION_",type:"Function"}]}}function R_(){const e=D(()=>H({placeholder:"_A_DATEPICKER_COMPONENT_NAME_"}));return{pageTitle:D(()=>`ADatepicker${e.value?` (${e.value})`:""}`)}}function C_(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"append-to-body",description:"_A_DATEPICKER_PROP_APPEND_TO_BODY_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"class",description:"_A_DATEPICKER_PROP_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"clearable",description:"_A_DATEPICKER_PROP_CLEARABLE_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"confirm",description:"_A_DATEPICKER_PROP_CONFIRM_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"confirm-text",description:"_A_DATEPICKER_PROP_CONFIRM_TEXT_DESCRIPTION_",type:"String",default:'"OK"',required:!1},{name:"date-format",description:"_A_DATEPICKER_PROP_DATE_FORMAT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"editable",description:"_A_DATEPICKER_PROP_EDITABLE_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"error-icon",description:"_A_UI_PROPS_ERROR_ICON_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"first-day-of-week",description:"_A_DATEPICKER_PROP_FIRST_DAY_OF_WEEK_DESCRIPTION_",type:"Number",default:1,required:!1},{name:"focus-start-date",description:"_A_DATEPICKER_PROP_FOCUS_START_DATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"format",description:"_A_DATEPICKER_PROP_FORMAT_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"format-save",description:"_A_DATEPICKER_PROP_FORMAT_SAVE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon-day",description:"_A_DATEPICKER_PROP_ICON_DAY_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_ui_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"input-attr",description:"_A_DATEPICKER_PROP_INPUT_ATTR_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"input-class",description:"_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_",type:"String / Number / Boolean / Array / Object / Date / Function / Symbol",default:'"pux_datepicker__input"',required:!1},{name:"input-name",description:"_A_DATEPICKER_PROP_INPUT_NAME_DESCRIPTION_",type:"String",default:'"date"',required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-label-float",description:"_A_UI_PROPS_IS_LABEL_FLOAT_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-description",description:"_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"max-date",description:"_A_DATEPICKER_PROP_MAX_DATE_DESCRIPTION_",type:"String / Date",default:void 0,required:!1},{name:"min-date",description:"_A_DATEPICKER_PROP_MIN_DATE_DESCRIPTION_",type:"String / Date",default:void 0,required:!1},{name:"minute-step",description:"_A_DATEPICKER_PROP_MINUTE_STEP_DESCRIPTION_",type:"Number",default:0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-undefined",description:"_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"String / Number / Boolean / Array / Object / Date / Function / Symbol",default:void 0,required:!1},{name:"placeholder",description:"_A_UI_PROPS_PLACEHOLDER_DESCRIPTION_",type:"String",default:null,required:!1},{name:"placeholders-default",description:"_A_DATEPICKER_PROP_PLACEHOLDERS_DEFAULT_DESCRIPTION_",type:"Object",default:"() => ({ date: '_A_DATEPICKER_PLACEHOLDER_DATE_', dateRange: '_A_DATEPICKER_PLACEHOLDER_DATE_RANGE_', timeHour: '_A_DATEPICKER_PLACEHOLDER_TIME_HOUR_', timeMinute: '_A_DATEPICKER_PLACEHOLDER_TIME_MINUTE_', timeSecond: '_A_DATEPICKER_PLACEHOLDER_TIME_SECOND_', datetimeHour: '_A_DATEPICKER_PLACEHOLDER_DATETIME_HOUR_', datetimeMinute: '_A_DATEPICKER_PLACEHOLDER_DATETIME_MINUTE_', datetimeSecond: '_A_DATEPICKER_PLACEHOLDER_DATETIME_SECOND_' })",required:!1},{name:"placement",description:"_A_DATEPICKER_PROP_PLACEMENT_DESCRIPTION_",type:"String",default:'"bottom-start"',required:!1},{name:"popup-style",description:"_A_DATEPICKER_PROP_POPUP_STYLE_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"range",description:"_A_DATEPICKER_PROP_RANGE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"range-separator",description:"_A_DATEPICKER_PROP_RANGE_SEPARATOR_DESCRIPTION_",type:"String",default:'"~"',required:!1},{name:"readonly",description:"_A_UI_PROPS_READONLY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"readonly-default",description:"_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_",type:"String",default:'""',required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"shortcuts",description:"_A_DATEPICKER_PROP_SHORTCUTS_DESCRIPTION_",type:"Boolean / Array",default:!0,required:!1},{name:"start-date",description:"_A_DATEPICKER_PROP_START_DATE_DESCRIPTION_",type:"String / Date",default:void 0,required:!1},{name:"time-precision",description:"_A_DATEPICKER_PROP_TIME_PRECISION_DESCRIPTION_",type:"String",default:'"minute"',required:!1},{name:"type",description:"_A_DATEPICKER_PROP_TYPE_DESCRIPTION_",type:"String",default:'"date"',required:!1},{name:"value-type",description:"_A_DATEPICKER_PROP_VALUE_TYPE_DESCRIPTION_",type:"String / Object",default:'"format"',required:!1},{name:"width",description:"_A_DATEPICKER_PROP_WIDTH_DESCRIPTION_",type:"String / Number",default:null,required:!1}]}}function O_(){return{dataTranslate:["_A_INPUT_SHOW_PASSWORD_","_A_INPUT_HIDE_PASSWORD_","_A_DATEPICKER_COMPONENT_NAME_","_A_DATEPICKER_COMPONENT_DESCRIPTION_","_A_DATEPICKER_PROP_APPEND_TO_BODY_DESCRIPTION_","_A_DATEPICKER_PROP_CLASS_DESCRIPTION_","_A_DATEPICKER_PROP_CLEARABLE_DESCRIPTION_","_A_DATEPICKER_PROP_CONFIRM_DESCRIPTION_","_A_DATEPICKER_PROP_CONFIRM_TEXT_DESCRIPTION_","_A_DATEPICKER_PROP_DATE_FORMAT_DESCRIPTION_","_A_DATEPICKER_PROP_EDITABLE_DESCRIPTION_","_A_DATEPICKER_PROP_FIRST_DAY_OF_WEEK_DESCRIPTION_","_A_DATEPICKER_PROP_FOCUS_START_DATE_DESCRIPTION_","_A_DATEPICKER_PROP_FORMAT_DESCRIPTION_","_A_DATEPICKER_PROP_FORMAT_SAVE_DESCRIPTION_","_A_DATEPICKER_PROP_ICON_DAY_DESCRIPTION_","_A_DATEPICKER_PROP_INPUT_ATTR_DESCRIPTION_","_A_DATEPICKER_PROP_INPUT_NAME_DESCRIPTION_","_A_DATEPICKER_PROP_MAX_DATE_DESCRIPTION_","_A_DATEPICKER_PROP_MIN_DATE_DESCRIPTION_","_A_DATEPICKER_PROP_MINUTE_STEP_DESCRIPTION_","_A_DATEPICKER_PROP_PLACEMENT_DESCRIPTION_","_A_DATEPICKER_PROP_PLACEHOLDERS_DEFAULT_DESCRIPTION_","_A_DATEPICKER_PROP_POPUP_STYLE_DESCRIPTION_","_A_DATEPICKER_PROP_RANGE_DESCRIPTION_","_A_DATEPICKER_PROP_RANGE_SEPARATOR_DESCRIPTION_","_A_DATEPICKER_PROP_SHORTCUTS_DESCRIPTION_","_A_DATEPICKER_PROP_START_DATE_DESCRIPTION_","_A_DATEPICKER_PROP_TIME_PRECISION_DESCRIPTION_","_A_DATEPICKER_PROP_TYPE_DESCRIPTION_","_A_DATEPICKER_PROP_VALUE_TYPE_DESCRIPTION_","_A_DATEPICKER_PROP_WIDTH_DESCRIPTION_","_PAGE_DATEPICKER_START_DATE_HEADER_","_PAGE_DATEPICKER_START_DATE_DESCRIPTION_","_PAGE_DATEPICKER_LBL_START_DATE_NEXT_YEAR_","_PAGE_DATEPICKER_LBL_START_DATE_NEXT_YEAR_AND_MODEL_","_PAGE_DATEPICKER_LBL_START_DATE_NEXT_YEAR_AND_MODEL_AND_FOCUS_START_DATE_","_PAGE_DATEPICKER_MAX_MIN_DATE_HEADER_","_PAGE_DATEPICKER_MAX_MIN_DATE_DESCRIPTION_","_PAGE_DATEPICKER_LBL_WITH_MIN_DATE_","_PAGE_DATEPICKER_LBL_WITH_MAX_DATE_","_PAGE_DATEPICKER_LBL_WITH_MIN_AND_MAX_DATE_","_PAGE_DATEPICKER_PLACEHOLDER_DEFAULT_HEADER_","_PAGE_DATEPICKER_PLACEHOLDER_DEFAULT_DESCRIPTION_","_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_DATE_","_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_TIME_HOUR_","_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_TIME_MINUTE_","_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_DATETIME_SECOND_","_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_OVERRIDE_","_PAGE_DATEPICKER_TYPE_HEADER_","_PAGE_DATEPICKER_TYPE_DESCRIPTION_","_PAGE_DATEPICKER_LBL_TYPE_DATE_","_PAGE_DATEPICKER_LBL_TYPE_TIME_","_PAGE_DATEPICKER_LBL_TYPE_DATETIME_","_PAGE_DATEPICKER_TIME_PRECISION_HEADER_","_PAGE_DATEPICKER_TIME_PRECISION_DESCRIPTION_","_PAGE_DATEPICKER_LBL_TIME_PRECISION_DATETIME_HOUR_","_PAGE_DATEPICKER_LBL_TIME_PRECISION_DATETIME_MINUTE_","_PAGE_DATEPICKER_LBL_TIME_PRECISION_DATETIME_SECOND_","_PAGE_DATEPICKER_LBL_TIME_PRECISION_TIME_HOUR_","_PAGE_DATEPICKER_LBL_TIME_PRECISION_TIME_MINUTE_","_PAGE_DATEPICKER_LBL_TIME_PRECISION_TIME_SECOND_","_PAGE_DATEPICKER_LBL_INPUT_1_","_PAGE_DATEPICKER_LBL_INPUT_2_","_PAGE_DATEPICKER_LBL_INPUT_3_","_PAGE_DATEPICKER_LBL_INPUT_4_","_PAGE_DATEPICKER_TXT_ALOHA_"]}}const f_={name:"PageDatepicker",components:{AlohaPage:K,AlohaTableProps:U,AlohaTableTranslate:h,ATranslation:k,PageDatepickerBasic:J,PageDatepickerErrorIcon:Z,PageDatepickerLabelDescription:te,PageDatepickerMaxMinDate:re,PageDatepickerPlaceholderDefault:Me,PageDatepickerReadonly:ke,PageDatepickerStartDate:Je,PageDatepickerTimePrecision:m_,PageDatepickerType:p_},setup(){const{pageTitle:e}=R_(),{dataProps:_}=C_(),{dataTranslate:m}=O_(),{dataEvents:c}=D_();return{dataEvents:c,dataProps:_,dataTranslate:m,pageTitle:e}}};function S_(e,_,m,c,s,u){const a=n("a-translation"),l=n("page-datepicker-basic"),t=n("page-datepicker-error-icon"),R=n("page-datepicker-label-description"),C=n("page-datepicker-readonly"),O=n("page-datepicker-placeholder-default"),f=n("page-datepicker-max-min-date"),S=n("page-datepicker-start-date"),L=n("page-datepicker-time-precision"),v=n("page-datepicker-type"),N=n("aloha-table-props"),M=n("aloha-page");return P(),A(M,{"page-title":e.pageTitle},{body:T(()=>[d(a,{tag:"p",html:"_A_DATEPICKER_COMPONENT_DESCRIPTION_"}),d(l),d(t),d(R),d(C),d(O),d(f),d(S),d(L),d(v),d(N,{data:e.dataProps},null,8,["data"])]),_:1},8,["page-title"])}const q_=r(f_,[["render",S_]]);export{q_ as default};
