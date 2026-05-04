import{A as I,a as M}from"./chunk.AlohaExample.CUTlZck1.js";import{A as K}from"./chunk.AlohaTableProps.B08L-GoW.js";import{A as U}from"./chunk.AlohaTableTranslate.-EAOpsVC.js";import{ak as p,_ as r,g as H,A as h}from"./bundle.index.DUeuXsut.js";import{r as m,W as P,V as A,aT as T,e as n,Z as o,_ as d,aU as c,d as D}from"./chunk.vendor.7qYoMuVo.js";import"./chunk.vendor-lodash.CDw4fzB6.js";import"./chunk.APageTabTitle.DPtR5O_F.js";import"./chunk.AlohaHighlightjs.CqftpDCI.js";import"./chunk.ATable.CDEfrRxG.js";import"./chunk.translations-ar.McCs_fFr.js";import"./chunk.translations-de.BbOvqAJ_.js";import"./chunk.translations-en.D2Z6fxw-.js";import"./chunk.translations-es.CdNsJSkL.js";import"./chunk.translations-fr.DrnZiyDw.js";import"./chunk.translations-hr.DcJaeEil.js";import"./chunk.translations-it.BeIfmSIC.js";import"./chunk.translations-ru.CDl-kDqa.js";function y(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function k(){return{codeJs:`import {
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
};`}}const B={name:"PageDatepickerBasic",components:{ADatepicker:p,AlohaExample:I},setup(){const e=m("2022-10-18"),_=m("2023-12-12"),i=m(void 0),{codeHtml:s}=y(),{codeJs:E}=k();return{codeHtml:s,codeJs:E,model1:e,model2:_,model3:i}}},G={class:"a_columns a_columns_count_12"},b={class:"a_column a_column_6 a_columns_count_12_touch"},$={class:"a_columns a_columns_count_12"},g={class:"a_column a_column_6 a_columns_count_12_touch"},V={class:"a_columns a_columns_count_12"},Y={class:"a_column a_column_6 a_columns_count_12_touch"};function q(e,_,i,s,E,u){const a=n("a-datepicker"),l=n("aloha-example");return P(),A(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","label"]},{default:T(()=>[o("div",G,[o("div",b,[d(a,{modelValue:e.model1,"onUpdate:modelValue":_[0]||(_[0]=t=>e.model1=t),label:"_PAGE_DATEPICKER_LBL_INPUT_1_"},null,8,["modelValue"]),o("div",null,"model1: "+c(e.model1),1)])]),o("div",$,[o("div",g,[d(a,{modelValue:e.model2,"onUpdate:modelValue":_[1]||(_[1]=t=>e.model2=t),label:"_PAGE_DATEPICKER_LBL_INPUT_2_"},null,8,["modelValue"]),o("div",null,"model2: "+c(e.model2),1)])]),o("div",V,[o("div",Y,[d(a,{modelValue:e.model3,"onUpdate:modelValue":_[2]||(_[2]=t=>e.model3=t),label:"_PAGE_DATEPICKER_LBL_INPUT_3_"},null,8,["modelValue"]),o("div",null,"model3: "+c(e.model3),1)])])]),_:1},8,["code-html","code-js"])}const F=r(B,[["render",q]]);function J(){return{codeHtml:`<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="model"
      :is-label-float="false"
      label-description="_PAGE_DATEPICKER_TXT_ALOHA_"
      label="_PAGE_DATEPICKER_LBL_TYPE_DATE_"
    ></a-datepicker>
  </div>
</div>
`}}function X(){return{codeJs:`import {
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
};`}}const j={name:"PageDatepickerLabelDescription",components:{ADatepicker:p,AlohaExample:I},setup(){const e=m(void 0),{codeHtml:_}=J(),{codeJs:i}=X();return{codeHtml:_,codeJs:i,model:e}}},w={class:"a_columns a_columns_count_12"},W={class:"a_column a_column_6 a_columns_count_12_touch"};function Z(e,_,i,s,E,u){const a=n("a-datepicker"),l=n("aloha-example");return P(),A(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_",description:"_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_",props:["label-description","is-label-float"]},{default:T(()=>[o("div",w,[o("div",W,[d(a,{modelValue:e.model,"onUpdate:modelValue":_[0]||(_[0]=t=>e.model=t),"is-label-float":!1,"label-description":"_PAGE_DATEPICKER_TXT_ALOHA_",label:"_PAGE_DATEPICKER_LBL_TYPE_DATE_"},null,8,["modelValue"])])])]),_:1},8,["code-html","code-js"])}const Q=r(j,[["render",Z]]);function z(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function x(){return{codeJs:`import {
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
};`}}const ee={name:"PageDatepickerMaxMinDate",components:{ADatepicker:p,AlohaExample:I},setup(){const e=m(void 0),_=m(void 0),i=m(void 0),s=D(()=>{const l=new Date;return l.setDate(l.getDate()-1),l.toISOString()}),E=D(()=>{const l=new Date;return l.setDate(l.getDate()+1),l.toISOString()}),{codeHtml:u}=z(),{codeJs:a}=x();return{codeHtml:u,codeJs:a,dateTomorrow:E,dateYesterday:s,model1:e,model2:_,model3:i}}},_e={class:"a_columns a_columns_count_12"},oe={class:"a_column a_column_6 a_columns_count_12_touch"},te={class:"a_columns a_columns_count_12"},ae={class:"a_column a_column_6 a_columns_count_12_touch"},de={class:"a_columns a_columns_count_12"},le={class:"a_column a_column_6 a_columns_count_12_touch"};function ne(e,_,i,s,E,u){const a=n("a-datepicker"),l=n("aloha-example");return P(),A(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_PAGE_DATEPICKER_MAX_MIN_DATE_HEADER_",description:"_PAGE_DATEPICKER_MAX_MIN_DATE_DESCRIPTION_",props:["max-date","min-date"]},{default:T(()=>[o("div",_e,[o("div",oe,[d(a,{modelValue:e.model1,"onUpdate:modelValue":_[0]||(_[0]=t=>e.model1=t),"min-date":e.dateYesterday,label:"_PAGE_DATEPICKER_LBL_WITH_MIN_DATE_",type:"date"},null,8,["modelValue","min-date"]),o("div",null,"model1: "+c(e.model1),1)])]),o("div",te,[o("div",ae,[d(a,{class:"a_mt_3",modelValue:e.model2,"onUpdate:modelValue":_[1]||(_[1]=t=>e.model2=t),"max-date":e.dateTomorrow,label:"_PAGE_DATEPICKER_LBL_WITH_MAX_DATE_",type:"date"},null,8,["modelValue","max-date"]),o("div",null,"model2: "+c(e.model2),1)])]),o("div",de,[o("div",le,[d(a,{class:"a_mt_3",modelValue:e.model3,"onUpdate:modelValue":_[2]||(_[2]=t=>e.model3=t),"max-date":e.dateTomorrow,"min-date":e.dateTomorrow,label:"_PAGE_DATEPICKER_LBL_WITH_MIN_AND_MAX_DATE_",type:"date"},null,8,["modelValue","max-date","min-date"]),o("div",null,"model3: "+c(e.model3),1)])])]),_:1},8,["code-html","code-js"])}const me=r(ee,[["render",ne]]);function ie(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function se(){return{codeJs:`import {
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
};`}}const ce={name:"PageDatepickerPlaceholderDefault",components:{ADatepicker:p,AlohaExample:I},setup(){const e=m(void 0),_=m(void 0),i=m(void 0),s=m(void 0),E=m(void 0),u={datetimeMinute:"_PAGE_DATEPICKER_PLACEHOLDER_CUSTOM_DATETIME_MINUTE_",timeMinute:"_PAGE_DATEPICKER_PLACEHOLDER_CUSTOM_TIME_MINUTE_"},{codeHtml:a}=ie(),{codeJs:l}=se();return{codeHtml:a,codeJs:l,modelDate:e,modelTimeHour:_,modelTimeMinute:i,modelDatetimeSecond:s,modelOverride:E,placeholdersCustom:u}}},Ee={class:"a_columns a_columns_count_12"},ue={class:"a_column a_column_6 a_columns_count_12_touch"},re={class:"a_columns a_columns_count_12"},Pe={class:"a_column a_column_6 a_columns_count_12_touch"},Ae={class:"a_columns a_columns_count_12"},Te={class:"a_column a_column_6 a_columns_count_12_touch"},Ie={class:"a_columns a_columns_count_12"},pe={class:"a_column a_column_6 a_columns_count_12_touch"},De={class:"a_columns a_columns_count_12"},Re={class:"a_column a_column_6 a_columns_count_12_touch"};function Ce(e,_,i,s,E,u){const a=n("a-datepicker"),l=n("aloha-example");return P(),A(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_PAGE_DATEPICKER_PLACEHOLDER_DEFAULT_HEADER_",description:"_PAGE_DATEPICKER_PLACEHOLDER_DEFAULT_DESCRIPTION_",props:["placeholder","placeholders-default","type","time-precision"]},{default:T(()=>[o("div",Ee,[o("div",ue,[d(a,{modelValue:e.modelDate,"onUpdate:modelValue":_[0]||(_[0]=t=>e.modelDate=t),label:"_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_DATE_",type:"date"},null,8,["modelValue"]),o("div",null,"modelDate: "+c(e.modelDate),1)])]),o("div",re,[o("div",Pe,[d(a,{class:"a_mt_3",modelValue:e.modelTimeHour,"onUpdate:modelValue":_[1]||(_[1]=t=>e.modelTimeHour=t),label:"_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_TIME_HOUR_","time-precision":"hour",type:"time"},null,8,["modelValue"]),o("div",null,"modelTimeHour: "+c(e.modelTimeHour),1)])]),o("div",Ae,[o("div",Te,[d(a,{class:"a_mt_3",modelValue:e.modelTimeMinute,"onUpdate:modelValue":_[2]||(_[2]=t=>e.modelTimeMinute=t),label:"_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_TIME_MINUTE_","time-precision":"minute",type:"time"},null,8,["modelValue"]),o("div",null,"modelTimeMinute: "+c(e.modelTimeMinute),1)])]),o("div",Ie,[o("div",pe,[d(a,{class:"a_mt_3",modelValue:e.modelDatetimeSecond,"onUpdate:modelValue":_[3]||(_[3]=t=>e.modelDatetimeSecond=t),label:"_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_DATETIME_SECOND_","time-precision":"second",type:"datetime"},null,8,["modelValue"]),o("div",null,"modelDatetimeSecond: "+c(e.modelDatetimeSecond),1)])]),o("div",De,[o("div",Re,[d(a,{class:"a_mt_3",modelValue:e.modelOverride,"onUpdate:modelValue":_[4]||(_[4]=t=>e.modelOverride=t),"placeholders-default":e.placeholdersCustom,label:"_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_OVERRIDE_","time-precision":"minute",type:"datetime"},null,8,["modelValue","placeholders-default"]),o("div",null,"modelOverride: "+c(e.modelOverride),1)])])]),_:1},8,["code-html","code-js"])}const Oe=r(ce,[["render",Ce]]);function fe(){return{codeHtml:`<a-datepicker
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
></a-datepicker>`}}function Se(){return{codeJs:`import {
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
};`}}const Le={name:"PageDatepickerReadonly",components:{ADatepicker:p,AlohaExample:I},setup(){const e=m("2022-10-18"),_=m("2023-12-12"),i=m(void 0),{codeHtml:s}=fe(),{codeJs:E}=Se();return{codeHtml:s,codeJs:E,model1:e,model2:_,model3:i}}};function ve(e,_,i,s,E,u){const a=n("a-datepicker"),l=n("aloha-example");return P(),A(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default"]},{default:T(()=>[d(a,{"model-value":e.model1,readonly:!0,label:"_PAGE_DATEPICKER_LBL_INPUT_1_"},null,8,["model-value"]),d(a,{class:"a_mt_3","model-value":e.model2,readonly:!0,label:"_PAGE_DATEPICKER_LBL_INPUT_2_"},null,8,["model-value"]),d(a,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"_PAGE_DATEPICKER_LBL_INPUT_3_"},null,8,["model-value"]),d(a,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"_PAGE_DATEPICKER_LBL_INPUT_4_","readonly-default":"-","help-text":"_PAGE_DATEPICKER_TXT_ALOHA_"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const Ne=r(Le,[["render",ve]]);function Me(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function Ke(){return{codeJs:`import {
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
};`}}const Ue={name:"PageDatepickerStartDate",components:{ADatepicker:p,AlohaExample:I},setup(){const e=m(void 0),_=m("2025-05-16"),i=m("2025-05-16"),s=D(()=>{const a=new Date;return a.setFullYear(a.getFullYear()+1),a.toISOString()}),{codeHtml:E}=Me(),{codeJs:u}=Ke();return{codeHtml:E,codeJs:u,dateNextYear:s,model1:e,model2:_,model3:i}}},He={class:"a_columns a_columns_count_12"},he={class:"a_column a_column_6 a_columns_count_12_touch"},ye={class:"a_columns a_columns_count_12"},ke={class:"a_column a_column_6 a_columns_count_12_touch"},Be={class:"a_columns a_columns_count_12"},Ge={class:"a_column a_column_6 a_columns_count_12_touch"};function be(e,_,i,s,E,u){const a=n("a-datepicker"),l=n("aloha-example");return P(),A(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_PAGE_DATEPICKER_START_DATE_HEADER_",description:"_PAGE_DATEPICKER_START_DATE_DESCRIPTION_",props:["start-date","focus-start-date"]},{default:T(()=>[o("div",He,[o("div",he,[d(a,{modelValue:e.model1,"onUpdate:modelValue":_[0]||(_[0]=t=>e.model1=t),"start-date":e.dateNextYear,label:"_PAGE_DATEPICKER_LBL_START_DATE_NEXT_YEAR_",type:"date"},null,8,["modelValue","start-date"]),o("div",null,"model1: "+c(e.model1),1)])]),o("div",ye,[o("div",ke,[d(a,{modelValue:e.model2,"onUpdate:modelValue":_[1]||(_[1]=t=>e.model2=t),"start-date":e.dateNextYear,label:"_PAGE_DATEPICKER_LBL_START_DATE_NEXT_YEAR_AND_MODEL_",type:"date"},null,8,["modelValue","start-date"]),o("div",null,"model2: "+c(e.model2),1)])]),o("div",Be,[o("div",Ge,[d(a,{modelValue:e.model3,"onUpdate:modelValue":_[2]||(_[2]=t=>e.model3=t),"focus-start-date":!0,"start-date":e.dateNextYear,label:"_PAGE_DATEPICKER_LBL_START_DATE_NEXT_YEAR_AND_MODEL_AND_FOCUS_START_DATE_",type:"date"},null,8,["modelValue","start-date"]),o("div",null,"model3: "+c(e.model3),1)])])]),_:1},8,["code-html","code-js"])}const $e=r(Ue,[["render",be]]);function ge(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function Ve(){return{codeJs:`import {
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
};`}}const Ye={name:"PageDatepickerTimePrecision",components:{ADatepicker:p,AlohaExample:I},setup(){const e=m(void 0),_=m(void 0),i=m(void 0),s=m(void 0),E=m(void 0),u=m(void 0),{codeHtml:a}=ge(),{codeJs:l}=Ve();return{codeHtml:a,codeJs:l,modelDatetimeHour:e,modelDatetimeMinute:_,modelDatetimeSecond:i,modelTimeHour:s,modelTimeMinute:E,modelTimeSecond:u}}},qe={class:"a_columns a_columns_count_12"},Fe={class:"a_column a_column_6 a_columns_count_12_touch"},Je={class:"a_columns a_columns_count_12"},Xe={class:"a_column a_column_6 a_columns_count_12_touch"},je={class:"a_columns a_columns_count_12"},we={class:"a_column a_column_6 a_columns_count_12_touch"},We={class:"a_columns a_columns_count_12"},Ze={class:"a_column a_column_6 a_columns_count_12_touch"},Qe={class:"a_columns a_columns_count_12"},ze={class:"a_column a_column_6 a_columns_count_12_touch"},xe={class:"a_columns a_columns_count_12"},e_={class:"a_column a_column_6 a_columns_count_12_touch"};function __(e,_,i,s,E,u){const a=n("a-datepicker"),l=n("aloha-example");return P(),A(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_PAGE_DATEPICKER_TIME_PRECISION_HEADER_",description:"_PAGE_DATEPICKER_TIME_PRECISION_DESCRIPTION_",props:["type","time-precision"]},{default:T(()=>[o("div",qe,[o("div",Fe,[d(a,{modelValue:e.modelDatetimeHour,"onUpdate:modelValue":_[0]||(_[0]=t=>e.modelDatetimeHour=t),label:"_PAGE_DATEPICKER_LBL_TIME_PRECISION_DATETIME_HOUR_","time-precision":"hour",type:"datetime"},null,8,["modelValue"]),o("div",null,"modelDatetimeHour: "+c(e.modelDatetimeHour),1)])]),o("div",Je,[o("div",Xe,[d(a,{class:"a_mt_3",modelValue:e.modelDatetimeMinute,"onUpdate:modelValue":_[1]||(_[1]=t=>e.modelDatetimeMinute=t),label:"_PAGE_DATEPICKER_LBL_TIME_PRECISION_DATETIME_MINUTE_","time-precision":"minute",type:"datetime"},null,8,["modelValue"]),o("div",null,"modelDatetimeMinute: "+c(e.modelDatetimeMinute),1)])]),o("div",je,[o("div",we,[d(a,{class:"a_mt_3",modelValue:e.modelDatetimeSecond,"onUpdate:modelValue":_[2]||(_[2]=t=>e.modelDatetimeSecond=t),label:"_PAGE_DATEPICKER_LBL_TIME_PRECISION_DATETIME_SECOND_","time-precision":"second",type:"datetime"},null,8,["modelValue"]),o("div",null,"modelDatetimeSecond: "+c(e.modelDatetimeSecond),1)])]),o("div",We,[o("div",Ze,[d(a,{class:"a_mt_3",modelValue:e.modelTimeHour,"onUpdate:modelValue":_[3]||(_[3]=t=>e.modelTimeHour=t),label:"_PAGE_DATEPICKER_LBL_TIME_PRECISION_TIME_HOUR_","time-precision":"hour",type:"time"},null,8,["modelValue"]),o("div",null,"modelTimeHour: "+c(e.modelTimeHour),1)])]),o("div",Qe,[o("div",ze,[d(a,{class:"a_mt_3",modelValue:e.modelTimeMinute,"onUpdate:modelValue":_[4]||(_[4]=t=>e.modelTimeMinute=t),label:"_PAGE_DATEPICKER_LBL_TIME_PRECISION_TIME_MINUTE_","time-precision":"minute",type:"time"},null,8,["modelValue"]),o("div",null,"modelTimeMinute: "+c(e.modelTimeMinute),1)])]),o("div",xe,[o("div",e_,[d(a,{class:"a_mt_3",modelValue:e.modelTimeSecond,"onUpdate:modelValue":_[5]||(_[5]=t=>e.modelTimeSecond=t),label:"_PAGE_DATEPICKER_LBL_TIME_PRECISION_TIME_SECOND_","time-precision":"second",type:"time"},null,8,["modelValue"]),o("div",null,"modelTimeSecond: "+c(e.modelTimeSecond),1)])])]),_:1},8,["code-html","code-js"])}const o_=r(Ye,[["render",__]]);function t_(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function a_(){return{codeJs:`import {
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
};`}}const d_={name:"PageDatepickerType",components:{ADatepicker:p,AlohaExample:I},setup(){const e=m("2025-05-16"),_=m("2026-03-23T03:05:00.000+01:00"),i=m(void 0),{codeHtml:s}=t_(),{codeJs:E}=a_();return{codeHtml:s,codeJs:E,model1:e,model2:_,model3:i}}},l_={class:"a_columns a_columns_count_12"},n_={class:"a_column a_column_6 a_columns_count_12_touch"},m_={class:"a_columns a_columns_count_12"},i_={class:"a_column a_column_6 a_columns_count_12_touch"},s_={class:"a_columns a_columns_count_12"},c_={class:"a_column a_column_6 a_columns_count_12_touch"};function E_(e,_,i,s,E,u){const a=n("a-datepicker"),l=n("aloha-example");return P(),A(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_PAGE_DATEPICKER_TYPE_HEADER_",description:"_PAGE_DATEPICKER_TYPE_DESCRIPTION_",props:["type"]},{default:T(()=>[o("div",l_,[o("div",n_,[d(a,{modelValue:e.model1,"onUpdate:modelValue":_[0]||(_[0]=t=>e.model1=t),label:"_PAGE_DATEPICKER_LBL_TYPE_DATE_",type:"date"},null,8,["modelValue"]),o("div",null,"model1: "+c(e.model1),1)])]),o("div",m_,[o("div",i_,[d(a,{modelValue:e.model2,"onUpdate:modelValue":_[1]||(_[1]=t=>e.model2=t),"minute-step":1,format:"HH:mm",label:"_PAGE_DATEPICKER_LBL_TYPE_TIME_",type:"time"},null,8,["modelValue"]),o("div",null,"model2: "+c(e.model2),1)])]),o("div",s_,[o("div",c_,[d(a,{modelValue:e.model3,"onUpdate:modelValue":_[2]||(_[2]=t=>e.model3=t),label:"_PAGE_DATEPICKER_LBL_TYPE_DATETIME_",type:"datetime"},null,8,["modelValue"]),o("div",null,"model3: "+c(e.model3),1)])])]),_:1},8,["code-html","code-js"])}const u_=r(d_,[["render",E_]]);function r_(){return{dataEvents:[{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"},{name:"focus",description:"_A_UI_EVENTS_FOCUS_DESCRIPTION_",type:"Function"},{name:"blur",description:"_A_UI_EVENTS_BLUR_DESCRIPTION_",type:"Function"}]}}function P_(){const e=D(()=>H({placeholder:"_A_DATEPICKER_COMPONENT_NAME_"}));return{pageTitle:D(()=>`ADatepicker${e.value?` (${e.value})`:""}`)}}function A_(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"append-to-body",description:"_A_DATEPICKER_PROP_APPEND_TO_BODY_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"class",description:"_A_DATEPICKER_PROP_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"clearable",description:"_A_DATEPICKER_PROP_CLEARABLE_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"confirm",description:"_A_DATEPICKER_PROP_CONFIRM_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"confirm-text",description:"_A_DATEPICKER_PROP_CONFIRM_TEXT_DESCRIPTION_",type:"String",default:'"OK"',required:!1},{name:"date-format",description:"_A_DATEPICKER_PROP_DATE_FORMAT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"editable",description:"_A_DATEPICKER_PROP_EDITABLE_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"first-day-of-week",description:"_A_DATEPICKER_PROP_FIRST_DAY_OF_WEEK_DESCRIPTION_",type:"Number",default:1,required:!1},{name:"focus-start-date",description:"_A_DATEPICKER_PROP_FOCUS_START_DATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"format",description:"_A_DATEPICKER_PROP_FORMAT_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"format-save",description:"_A_DATEPICKER_PROP_FORMAT_SAVE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon-day",description:"_A_DATEPICKER_PROP_ICON_DAY_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_ui_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"input-attr",description:"_A_DATEPICKER_PROP_INPUT_ATTR_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"input-class",description:"_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_",type:"String / Number / Boolean / Array / Object / Date / Function / Symbol",default:'"pux_datepicker__input"',required:!1},{name:"input-name",description:"_A_DATEPICKER_PROP_INPUT_NAME_DESCRIPTION_",type:"String",default:'"date"',required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-label-float",description:"_A_UI_PROPS_IS_LABEL_FLOAT_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-description",description:"_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"max-date",description:"_A_DATEPICKER_PROP_MAX_DATE_DESCRIPTION_",type:"String / Date",default:void 0,required:!1},{name:"min-date",description:"_A_DATEPICKER_PROP_MIN_DATE_DESCRIPTION_",type:"String / Date",default:void 0,required:!1},{name:"minute-step",description:"_A_DATEPICKER_PROP_MINUTE_STEP_DESCRIPTION_",type:"Number",default:0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-undefined",description:"_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"String / Number / Boolean / Array / Object / Date / Function / Symbol",default:void 0,required:!1},{name:"placeholder",description:"_A_UI_PROPS_PLACEHOLDER_DESCRIPTION_",type:"String",default:null,required:!1},{name:"placeholders-default",description:"_A_DATEPICKER_PROP_PLACEHOLDERS_DEFAULT_DESCRIPTION_",type:"Object",default:"() => ({ date: '_A_DATEPICKER_PLACEHOLDER_DATE_', dateRange: '_A_DATEPICKER_PLACEHOLDER_DATE_RANGE_', timeHour: '_A_DATEPICKER_PLACEHOLDER_TIME_HOUR_', timeMinute: '_A_DATEPICKER_PLACEHOLDER_TIME_MINUTE_', timeSecond: '_A_DATEPICKER_PLACEHOLDER_TIME_SECOND_', datetimeHour: '_A_DATEPICKER_PLACEHOLDER_DATETIME_HOUR_', datetimeMinute: '_A_DATEPICKER_PLACEHOLDER_DATETIME_MINUTE_', datetimeSecond: '_A_DATEPICKER_PLACEHOLDER_DATETIME_SECOND_' })",required:!1},{name:"placement",description:"_A_DATEPICKER_PROP_PLACEMENT_DESCRIPTION_",type:"String",default:'"bottom-start"',required:!1},{name:"popup-style",description:"_A_DATEPICKER_PROP_POPUP_STYLE_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"range",description:"_A_DATEPICKER_PROP_RANGE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"range-separator",description:"_A_DATEPICKER_PROP_RANGE_SEPARATOR_DESCRIPTION_",type:"String",default:'"~"',required:!1},{name:"readonly",description:"_A_UI_PROPS_READONLY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"readonly-default",description:"_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_",type:"String",default:'""',required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"shortcuts",description:"_A_DATEPICKER_PROP_SHORTCUTS_DESCRIPTION_",type:"Boolean / Array",default:!0,required:!1},{name:"start-date",description:"_A_DATEPICKER_PROP_START_DATE_DESCRIPTION_",type:"String / Date",default:void 0,required:!1},{name:"time-precision",description:"_A_DATEPICKER_PROP_TIME_PRECISION_DESCRIPTION_",type:"String",default:'"minute"',required:!1},{name:"type",description:"_A_DATEPICKER_PROP_TYPE_DESCRIPTION_",type:"String",default:'"date"',required:!1},{name:"value-type",description:"_A_DATEPICKER_PROP_VALUE_TYPE_DESCRIPTION_",type:"String / Object",default:'"format"',required:!1},{name:"width",description:"_A_DATEPICKER_PROP_WIDTH_DESCRIPTION_",type:"String / Number",default:null,required:!1}]}}function T_(){return{dataTranslate:["_A_INPUT_SHOW_PASSWORD_","_A_INPUT_HIDE_PASSWORD_","_A_DATEPICKER_COMPONENT_NAME_","_A_DATEPICKER_COMPONENT_DESCRIPTION_","_A_DATEPICKER_PROP_APPEND_TO_BODY_DESCRIPTION_","_A_DATEPICKER_PROP_CLASS_DESCRIPTION_","_A_DATEPICKER_PROP_CLEARABLE_DESCRIPTION_","_A_DATEPICKER_PROP_CONFIRM_DESCRIPTION_","_A_DATEPICKER_PROP_CONFIRM_TEXT_DESCRIPTION_","_A_DATEPICKER_PROP_DATE_FORMAT_DESCRIPTION_","_A_DATEPICKER_PROP_EDITABLE_DESCRIPTION_","_A_DATEPICKER_PROP_FIRST_DAY_OF_WEEK_DESCRIPTION_","_A_DATEPICKER_PROP_FOCUS_START_DATE_DESCRIPTION_","_A_DATEPICKER_PROP_FORMAT_DESCRIPTION_","_A_DATEPICKER_PROP_FORMAT_SAVE_DESCRIPTION_","_A_DATEPICKER_PROP_ICON_DAY_DESCRIPTION_","_A_DATEPICKER_PROP_INPUT_ATTR_DESCRIPTION_","_A_DATEPICKER_PROP_INPUT_NAME_DESCRIPTION_","_A_DATEPICKER_PROP_MAX_DATE_DESCRIPTION_","_A_DATEPICKER_PROP_MIN_DATE_DESCRIPTION_","_A_DATEPICKER_PROP_MINUTE_STEP_DESCRIPTION_","_A_DATEPICKER_PROP_PLACEMENT_DESCRIPTION_","_A_DATEPICKER_PROP_PLACEHOLDERS_DEFAULT_DESCRIPTION_","_A_DATEPICKER_PROP_POPUP_STYLE_DESCRIPTION_","_A_DATEPICKER_PROP_RANGE_DESCRIPTION_","_A_DATEPICKER_PROP_RANGE_SEPARATOR_DESCRIPTION_","_A_DATEPICKER_PROP_SHORTCUTS_DESCRIPTION_","_A_DATEPICKER_PROP_START_DATE_DESCRIPTION_","_A_DATEPICKER_PROP_TIME_PRECISION_DESCRIPTION_","_A_DATEPICKER_PROP_TYPE_DESCRIPTION_","_A_DATEPICKER_PROP_VALUE_TYPE_DESCRIPTION_","_A_DATEPICKER_PROP_WIDTH_DESCRIPTION_","_PAGE_DATEPICKER_START_DATE_HEADER_","_PAGE_DATEPICKER_START_DATE_DESCRIPTION_","_PAGE_DATEPICKER_LBL_START_DATE_NEXT_YEAR_","_PAGE_DATEPICKER_LBL_START_DATE_NEXT_YEAR_AND_MODEL_","_PAGE_DATEPICKER_LBL_START_DATE_NEXT_YEAR_AND_MODEL_AND_FOCUS_START_DATE_","_PAGE_DATEPICKER_MAX_MIN_DATE_HEADER_","_PAGE_DATEPICKER_MAX_MIN_DATE_DESCRIPTION_","_PAGE_DATEPICKER_LBL_WITH_MIN_DATE_","_PAGE_DATEPICKER_LBL_WITH_MAX_DATE_","_PAGE_DATEPICKER_LBL_WITH_MIN_AND_MAX_DATE_","_PAGE_DATEPICKER_PLACEHOLDER_DEFAULT_HEADER_","_PAGE_DATEPICKER_PLACEHOLDER_DEFAULT_DESCRIPTION_","_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_DATE_","_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_TIME_HOUR_","_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_TIME_MINUTE_","_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_DATETIME_SECOND_","_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_OVERRIDE_","_PAGE_DATEPICKER_TYPE_HEADER_","_PAGE_DATEPICKER_TYPE_DESCRIPTION_","_PAGE_DATEPICKER_LBL_TYPE_DATE_","_PAGE_DATEPICKER_LBL_TYPE_TIME_","_PAGE_DATEPICKER_LBL_TYPE_DATETIME_","_PAGE_DATEPICKER_TIME_PRECISION_HEADER_","_PAGE_DATEPICKER_TIME_PRECISION_DESCRIPTION_","_PAGE_DATEPICKER_LBL_TIME_PRECISION_DATETIME_HOUR_","_PAGE_DATEPICKER_LBL_TIME_PRECISION_DATETIME_MINUTE_","_PAGE_DATEPICKER_LBL_TIME_PRECISION_DATETIME_SECOND_","_PAGE_DATEPICKER_LBL_TIME_PRECISION_TIME_HOUR_","_PAGE_DATEPICKER_LBL_TIME_PRECISION_TIME_MINUTE_","_PAGE_DATEPICKER_LBL_TIME_PRECISION_TIME_SECOND_","_PAGE_DATEPICKER_LBL_INPUT_1_","_PAGE_DATEPICKER_LBL_INPUT_2_","_PAGE_DATEPICKER_LBL_INPUT_3_","_PAGE_DATEPICKER_LBL_INPUT_4_","_PAGE_DATEPICKER_TXT_ALOHA_"]}}const I_={name:"PageDatepicker",components:{AlohaPage:M,AlohaTableProps:K,AlohaTableTranslate:U,ATranslation:h,PageDatepickerBasic:F,PageDatepickerLabelDescription:Q,PageDatepickerMaxMinDate:me,PageDatepickerPlaceholderDefault:Oe,PageDatepickerReadonly:Ne,PageDatepickerStartDate:$e,PageDatepickerTimePrecision:o_,PageDatepickerType:u_},setup(){const{pageTitle:e}=P_(),{dataProps:_}=A_(),{dataTranslate:i}=T_(),{dataEvents:s}=r_();return{dataEvents:s,dataProps:_,dataTranslate:i,pageTitle:e}}};function p_(e,_,i,s,E,u){const a=n("a-translation"),l=n("page-datepicker-basic"),t=n("page-datepicker-label-description"),R=n("page-datepicker-readonly"),C=n("page-datepicker-placeholder-default"),O=n("page-datepicker-max-min-date"),f=n("page-datepicker-start-date"),S=n("page-datepicker-time-precision"),L=n("page-datepicker-type"),v=n("aloha-table-props"),N=n("aloha-page");return P(),A(N,{"page-title":e.pageTitle},{body:T(()=>[d(a,{tag:"p",html:"_A_DATEPICKER_COMPONENT_DESCRIPTION_"}),d(l),d(t),d(R),d(C),d(O),d(f),d(S),d(L),d(v,{data:e.dataProps},null,8,["data"])]),_:1},8,["page-title"])}const G_=r(I_,[["render",p_]]);export{G_ as default};
