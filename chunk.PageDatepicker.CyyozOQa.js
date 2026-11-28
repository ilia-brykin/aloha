import{t as e}from"./chunk.AlohaPage.IS3NRfGI.js";import{t}from"./chunk.AlohaTableProps.-68XY4u1.js";import{t as n}from"./chunk.AlohaTableTranslate.Bs0gql66.js";import{Bt as r,Cn as i,Ht as a,Rt as o,Vt as s,Wt as c,an as l,gn as u,ln as d,pn as f,qt as p,sn as m}from"./chunk.vendor.SEynj6EJ.js";import{t as h}from"./chunk.AlohaExample.CDuUdjpI.js";import{gt as g,hn as _,mn as v,t as y}from"./bundle.index.DikcaTJ9.js";function b(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function x(){return{codeJs:`import {
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
};`}}var S={name:`PageDatepickerBasic`,components:{ADatepicker:g,AlohaExample:h},setup(){let e=u(`2022-10-18`),t=u(`2023-12-12`),n=u(void 0),{codeHtml:r}=b(),{codeJs:i}=x();return{codeHtml:r,codeJs:i,model1:e,model2:t,model3:n}}},C={class:`a_columns a_columns_count_12`},w={class:`a_column a_column_6 a_columns_count_12_touch`},ee={class:`a_columns a_columns_count_12`},te={class:`a_column a_column_6 a_columns_count_12_touch`},T={class:`a_columns a_columns_count_12`},E={class:`a_column a_column_6 a_columns_count_12_touch`};function D(e,t,n,r,o,c){let u=d(`a-datepicker`),m=d(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`label`]},{default:f(()=>[s(`div`,C,[s(`div`,w,[p(u,{modelValue:e.model1,"onUpdate:modelValue":t[0]||=t=>e.model1=t,label:`_PAGE_DATEPICKER_LBL_INPUT_1_`},null,8,[`modelValue`]),s(`div`,null,`model1: `+i(e.model1),1)])]),s(`div`,ee,[s(`div`,te,[p(u,{modelValue:e.model2,"onUpdate:modelValue":t[1]||=t=>e.model2=t,label:`_PAGE_DATEPICKER_LBL_INPUT_2_`},null,8,[`modelValue`]),s(`div`,null,`model2: `+i(e.model2),1)])]),s(`div`,T,[s(`div`,E,[p(u,{modelValue:e.model3,"onUpdate:modelValue":t[2]||=t=>e.model3=t,label:`_PAGE_DATEPICKER_LBL_INPUT_3_`},null,8,[`modelValue`]),s(`div`,null,`model3: `+i(e.model3),1)])])]),_:1},8,[`code-html`,`code-js`])}var O=y(S,[[`render`,D]]);function k(){return{codeHtml:`<a-datepicker
  v-model="model"
  :error-icon="errorIcon"
  errors="Aloha"
  label="Datepicker"
></a-datepicker>`}}function A(){return{codeJs:`import {
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
};`}}var j={name:`PageDatepickerErrorIcon`,components:{ADatepicker:g,AlohaExample:h},setup(){let e=u(`2022-10-18`),{codeHtml:t}=k(),{codeJs:n}=A();return{codeHtml:t,codeJs:n,errorIcon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.93 6.588 8.758 10.042a.5.5 0 0 1-.998 0L7.588 6.588a.5.5 0 1 1 .998 0M8 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>`,model:e}}};function M(e,t,n,r,i,o){let s=d(`a-datepicker`),c=d(`aloha-example`);return l(),a(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_ERROR_ICON_HEADER_`,description:`_A_UI_GROUP_ERROR_ICON_DESCRIPTION_`,props:[`errors`,`error-icon`]},{default:f(()=>[p(s,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"error-icon":e.errorIcon,errors:`Aloha`,label:`Datepicker`},null,8,[`modelValue`,`error-icon`])]),_:1},8,[`code-html`,`code-js`])}var N=y(j,[[`render`,M]]);function P(){return{codeHtml:`<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="model"
      label-position="top"
      label-description="_PAGE_DATEPICKER_TXT_ALOHA_"
      label="_PAGE_DATEPICKER_LBL_TYPE_DATE_"
    ></a-datepicker>
  </div>
</div>
`}}function F(){return{codeJs:`import {
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
};`}}var I={name:`PageDatepickerLabelDescription`,components:{ADatepicker:g,AlohaExample:h},setup(){let e=u(void 0),{codeHtml:t}=P(),{codeJs:n}=F();return{codeHtml:t,codeJs:n,model:e}}},L={class:`a_columns a_columns_count_12`},R={class:`a_column a_column_6 a_columns_count_12_touch`};function z(e,t,n,r,i,o){let c=d(`a-datepicker`),u=d(`aloha-example`);return l(),a(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_`,description:`_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_`,props:[`label-description`,`label-position`]},{default:f(()=>[s(`div`,L,[s(`div`,R,[p(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"label-position":`top`,"label-description":`_PAGE_DATEPICKER_TXT_ALOHA_`,label:`_PAGE_DATEPICKER_LBL_TYPE_DATE_`},null,8,[`modelValue`])])])]),_:1},8,[`code-html`,`code-js`])}var B=y(I,[[`render`,z]]);function V(){return{codeHtml:`<a-datepicker
  v-model="model"
  label="label-position: float"
  label-position="float"
></a-datepicker>
<a-datepicker
  v-model="model"
  label="label-position: inset"
  label-position="inset"
></a-datepicker>
<a-datepicker
  v-model="model"
  label="label-position: top"
  label-position="top"
></a-datepicker>
<div>model: {{ model }}</div>`}}function H(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ADatepicker,
} from "aloha-vue";

export default {
  name: "PageDatepickerLabelPosition",
  components: {
    ADatepicker,
  },
  setup() {
    const model = ref("2022-10-18");

    return {
      model,
    };
  },
};`}}var U={name:`PageDatepickerLabelPosition`,components:{AlohaExample:h,ADatepicker:g},setup(){let e=u(`2022-10-18`),t=[`float`,`inset`,`top`],{codeHtml:n}=V(),{codeJs:r}=H();return{codeHtml:n,codeJs:r,labelPositions:t,model:e}}},W={class:`a_columns a_columns_count_12`};function G(e,t,n,r,u,h){let g=d(`a-datepicker`),_=d(`aloha-example`);return l(),a(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_LABEL_POSITION_HEADER_`,description:`_A_UI_LABEL_POSITION_DESCRIPTION_`,props:[`label-position`]},{default:f(()=>[s(`div`,W,[(l(!0),c(o,null,m(e.labelPositions,n=>(l(),c(`div`,{class:`a_column a_column_4 a_columns_count_12_touch`,key:n},[p(g,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`label-position: ${n}`,"label-position":n},null,8,[`modelValue`,`label`,`label-position`])]))),128))]),s(`div`,null,`model: `+i(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var K=y(U,[[`render`,G]]);function q(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function J(){return{codeJs:`import {
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
};`}}var Y={name:`PageDatepickerMaxMinDate`,components:{ADatepicker:g,AlohaExample:h},setup(){let e=u(void 0),t=u(void 0),n=u(void 0),i=r(()=>{let e=new Date;return e.setDate(e.getDate()-1),e.toISOString()}),a=r(()=>{let e=new Date;return e.setDate(e.getDate()+1),e.toISOString()}),{codeHtml:o}=q(),{codeJs:s}=J();return{codeHtml:o,codeJs:s,dateTomorrow:a,dateYesterday:i,model1:e,model2:t,model3:n}}},X={class:`a_columns a_columns_count_12`},Z={class:`a_column a_column_6 a_columns_count_12_touch`},Q={class:`a_columns a_columns_count_12`},ne={class:`a_column a_column_6 a_columns_count_12_touch`},re={class:`a_columns a_columns_count_12`},ie={class:`a_column a_column_6 a_columns_count_12_touch`};function ae(e,t,n,r,o,c){let u=d(`a-datepicker`),m=d(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_PAGE_DATEPICKER_MAX_MIN_DATE_HEADER_`,description:`_PAGE_DATEPICKER_MAX_MIN_DATE_DESCRIPTION_`,props:[`max-date`,`min-date`]},{default:f(()=>[s(`div`,X,[s(`div`,Z,[p(u,{modelValue:e.model1,"onUpdate:modelValue":t[0]||=t=>e.model1=t,"min-date":e.dateYesterday,label:`_PAGE_DATEPICKER_LBL_WITH_MIN_DATE_`,type:`date`},null,8,[`modelValue`,`min-date`]),s(`div`,null,`model1: `+i(e.model1),1)])]),s(`div`,Q,[s(`div`,ne,[p(u,{class:`a_mt_3`,modelValue:e.model2,"onUpdate:modelValue":t[1]||=t=>e.model2=t,"max-date":e.dateTomorrow,label:`_PAGE_DATEPICKER_LBL_WITH_MAX_DATE_`,type:`date`},null,8,[`modelValue`,`max-date`]),s(`div`,null,`model2: `+i(e.model2),1)])]),s(`div`,re,[s(`div`,ie,[p(u,{class:`a_mt_3`,modelValue:e.model3,"onUpdate:modelValue":t[2]||=t=>e.model3=t,"max-date":e.dateTomorrow,"min-date":e.dateTomorrow,label:`_PAGE_DATEPICKER_LBL_WITH_MIN_AND_MAX_DATE_`,type:`date`},null,8,[`modelValue`,`max-date`,`min-date`]),s(`div`,null,`model3: `+i(e.model3),1)])])]),_:1},8,[`code-html`,`code-js`])}var oe=y(Y,[[`render`,ae]]);function se(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function ce(){return{codeJs:`import {
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
};`}}var le={name:`PageDatepickerPlaceholderDefault`,components:{ADatepicker:g,AlohaExample:h},setup(){let e=u(void 0),t=u(void 0),n=u(void 0),r=u(void 0),i=u(void 0),a={datetimeMinute:`_PAGE_DATEPICKER_PLACEHOLDER_CUSTOM_DATETIME_MINUTE_`,timeMinute:`_PAGE_DATEPICKER_PLACEHOLDER_CUSTOM_TIME_MINUTE_`},{codeHtml:o}=se(),{codeJs:s}=ce();return{codeHtml:o,codeJs:s,modelDate:e,modelTimeHour:t,modelTimeMinute:n,modelDatetimeSecond:r,modelOverride:i,placeholdersCustom:a}}},ue={class:`a_columns a_columns_count_12`},de={class:`a_column a_column_6 a_columns_count_12_touch`},fe={class:`a_columns a_columns_count_12`},pe={class:`a_column a_column_6 a_columns_count_12_touch`},me={class:`a_columns a_columns_count_12`},he={class:`a_column a_column_6 a_columns_count_12_touch`},ge={class:`a_columns a_columns_count_12`},_e={class:`a_column a_column_6 a_columns_count_12_touch`},ve={class:`a_columns a_columns_count_12`},ye={class:`a_column a_column_6 a_columns_count_12_touch`};function be(e,t,n,r,o,c){let u=d(`a-datepicker`),m=d(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_PAGE_DATEPICKER_PLACEHOLDER_DEFAULT_HEADER_`,description:`_PAGE_DATEPICKER_PLACEHOLDER_DEFAULT_DESCRIPTION_`,props:[`placeholder`,`placeholders-default`,`type`,`time-precision`]},{default:f(()=>[s(`div`,ue,[s(`div`,de,[p(u,{modelValue:e.modelDate,"onUpdate:modelValue":t[0]||=t=>e.modelDate=t,label:`_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_DATE_`,type:`date`},null,8,[`modelValue`]),s(`div`,null,`modelDate: `+i(e.modelDate),1)])]),s(`div`,fe,[s(`div`,pe,[p(u,{class:`a_mt_3`,modelValue:e.modelTimeHour,"onUpdate:modelValue":t[1]||=t=>e.modelTimeHour=t,label:`_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_TIME_HOUR_`,"time-precision":`hour`,type:`time`},null,8,[`modelValue`]),s(`div`,null,`modelTimeHour: `+i(e.modelTimeHour),1)])]),s(`div`,me,[s(`div`,he,[p(u,{class:`a_mt_3`,modelValue:e.modelTimeMinute,"onUpdate:modelValue":t[2]||=t=>e.modelTimeMinute=t,label:`_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_TIME_MINUTE_`,"time-precision":`minute`,type:`time`},null,8,[`modelValue`]),s(`div`,null,`modelTimeMinute: `+i(e.modelTimeMinute),1)])]),s(`div`,ge,[s(`div`,_e,[p(u,{class:`a_mt_3`,modelValue:e.modelDatetimeSecond,"onUpdate:modelValue":t[3]||=t=>e.modelDatetimeSecond=t,label:`_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_DATETIME_SECOND_`,"time-precision":`second`,type:`datetime`},null,8,[`modelValue`]),s(`div`,null,`modelDatetimeSecond: `+i(e.modelDatetimeSecond),1)])]),s(`div`,ve,[s(`div`,ye,[p(u,{class:`a_mt_3`,modelValue:e.modelOverride,"onUpdate:modelValue":t[4]||=t=>e.modelOverride=t,"placeholders-default":e.placeholdersCustom,label:`_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_OVERRIDE_`,"time-precision":`minute`,type:`datetime`},null,8,[`modelValue`,`placeholders-default`]),s(`div`,null,`modelOverride: `+i(e.modelOverride),1)])])]),_:1},8,[`code-html`,`code-js`])}var xe=y(le,[[`render`,be]]);function Se(){return{codeHtml:`<a-datepicker
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
></a-datepicker>`}}function Ce(){return{codeJs:`import {
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
};`}}var we={name:`PageDatepickerReadonly`,components:{ADatepicker:g,AlohaExample:h},setup(){let e=u(`2022-10-18`),t=u(`2023-12-12`),n=u(void 0),{codeHtml:r}=Se(),{codeJs:i}=Ce();return{codeHtml:r,codeJs:i,model1:e,model2:t,model3:n}}};function Te(e,t,n,r,i,o){let s=d(`a-datepicker`),c=d(`aloha-example`);return l(),a(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_READONLY_HEADER_`,description:`_A_UI_GROUP_READONLY_DESCRIPTION_`,props:[`readonly`,`readonly-default`]},{default:f(()=>[p(s,{"model-value":e.model1,readonly:!0,label:`_PAGE_DATEPICKER_LBL_INPUT_1_`},null,8,[`model-value`]),p(s,{class:`a_mt_3`,"model-value":e.model2,readonly:!0,label:`_PAGE_DATEPICKER_LBL_INPUT_2_`},null,8,[`model-value`]),p(s,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,label:`_PAGE_DATEPICKER_LBL_INPUT_3_`},null,8,[`model-value`]),p(s,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,label:`_PAGE_DATEPICKER_LBL_INPUT_4_`,"readonly-default":`-`,"help-text":`_PAGE_DATEPICKER_TXT_ALOHA_`},null,8,[`model-value`])]),_:1},8,[`code-html`,`code-js`])}var Ee=y(we,[[`render`,Te]]);function De(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function Oe(){return{codeJs:`import {
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
};`}}var ke={name:`PageDatepickerStartDate`,components:{ADatepicker:g,AlohaExample:h},setup(){let e=u(void 0),t=u(`2025-05-16`),n=u(`2025-05-16`),i=r(()=>{let e=new Date;return e.setFullYear(e.getFullYear()+1),e.toISOString()}),{codeHtml:a}=De(),{codeJs:o}=Oe();return{codeHtml:a,codeJs:o,dateNextYear:i,model1:e,model2:t,model3:n}}},Ae={class:`a_columns a_columns_count_12`},je={class:`a_column a_column_6 a_columns_count_12_touch`},Me={class:`a_columns a_columns_count_12`},Ne={class:`a_column a_column_6 a_columns_count_12_touch`},Pe={class:`a_columns a_columns_count_12`},Fe={class:`a_column a_column_6 a_columns_count_12_touch`};function Ie(e,t,n,r,o,c){let u=d(`a-datepicker`),m=d(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_PAGE_DATEPICKER_START_DATE_HEADER_`,description:`_PAGE_DATEPICKER_START_DATE_DESCRIPTION_`,props:[`start-date`,`focus-start-date`]},{default:f(()=>[s(`div`,Ae,[s(`div`,je,[p(u,{modelValue:e.model1,"onUpdate:modelValue":t[0]||=t=>e.model1=t,"start-date":e.dateNextYear,label:`_PAGE_DATEPICKER_LBL_START_DATE_NEXT_YEAR_`,type:`date`},null,8,[`modelValue`,`start-date`]),s(`div`,null,`model1: `+i(e.model1),1)])]),s(`div`,Me,[s(`div`,Ne,[p(u,{modelValue:e.model2,"onUpdate:modelValue":t[1]||=t=>e.model2=t,"start-date":e.dateNextYear,label:`_PAGE_DATEPICKER_LBL_START_DATE_NEXT_YEAR_AND_MODEL_`,type:`date`},null,8,[`modelValue`,`start-date`]),s(`div`,null,`model2: `+i(e.model2),1)])]),s(`div`,Pe,[s(`div`,Fe,[p(u,{modelValue:e.model3,"onUpdate:modelValue":t[2]||=t=>e.model3=t,"focus-start-date":!0,"start-date":e.dateNextYear,label:`_PAGE_DATEPICKER_LBL_START_DATE_NEXT_YEAR_AND_MODEL_AND_FOCUS_START_DATE_`,type:`date`},null,8,[`modelValue`,`start-date`]),s(`div`,null,`model3: `+i(e.model3),1)])])]),_:1},8,[`code-html`,`code-js`])}var Le=y(ke,[[`render`,Ie]]);function Re(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function ze(){return{codeJs:`import {
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
};`}}var Be={name:`PageDatepickerTimePrecision`,components:{ADatepicker:g,AlohaExample:h},setup(){let e=u(void 0),t=u(void 0),n=u(void 0),r=u(void 0),i=u(void 0),a=u(void 0),{codeHtml:o}=Re(),{codeJs:s}=ze();return{codeHtml:o,codeJs:s,modelDatetimeHour:e,modelDatetimeMinute:t,modelDatetimeSecond:n,modelTimeHour:r,modelTimeMinute:i,modelTimeSecond:a}}},Ve={class:`a_columns a_columns_count_12`},He={class:`a_column a_column_6 a_columns_count_12_touch`},Ue={class:`a_columns a_columns_count_12`},We={class:`a_column a_column_6 a_columns_count_12_touch`},Ge={class:`a_columns a_columns_count_12`},Ke={class:`a_column a_column_6 a_columns_count_12_touch`},qe={class:`a_columns a_columns_count_12`},Je={class:`a_column a_column_6 a_columns_count_12_touch`},Ye={class:`a_columns a_columns_count_12`},Xe={class:`a_column a_column_6 a_columns_count_12_touch`},Ze={class:`a_columns a_columns_count_12`},Qe={class:`a_column a_column_6 a_columns_count_12_touch`};function $e(e,t,n,r,o,c){let u=d(`a-datepicker`),m=d(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_PAGE_DATEPICKER_TIME_PRECISION_HEADER_`,description:`_PAGE_DATEPICKER_TIME_PRECISION_DESCRIPTION_`,props:[`type`,`time-precision`]},{default:f(()=>[s(`div`,Ve,[s(`div`,He,[p(u,{modelValue:e.modelDatetimeHour,"onUpdate:modelValue":t[0]||=t=>e.modelDatetimeHour=t,label:`_PAGE_DATEPICKER_LBL_TIME_PRECISION_DATETIME_HOUR_`,"time-precision":`hour`,type:`datetime`},null,8,[`modelValue`]),s(`div`,null,`modelDatetimeHour: `+i(e.modelDatetimeHour),1)])]),s(`div`,Ue,[s(`div`,We,[p(u,{class:`a_mt_3`,modelValue:e.modelDatetimeMinute,"onUpdate:modelValue":t[1]||=t=>e.modelDatetimeMinute=t,label:`_PAGE_DATEPICKER_LBL_TIME_PRECISION_DATETIME_MINUTE_`,"time-precision":`minute`,type:`datetime`},null,8,[`modelValue`]),s(`div`,null,`modelDatetimeMinute: `+i(e.modelDatetimeMinute),1)])]),s(`div`,Ge,[s(`div`,Ke,[p(u,{class:`a_mt_3`,modelValue:e.modelDatetimeSecond,"onUpdate:modelValue":t[2]||=t=>e.modelDatetimeSecond=t,label:`_PAGE_DATEPICKER_LBL_TIME_PRECISION_DATETIME_SECOND_`,"time-precision":`second`,type:`datetime`},null,8,[`modelValue`]),s(`div`,null,`modelDatetimeSecond: `+i(e.modelDatetimeSecond),1)])]),s(`div`,qe,[s(`div`,Je,[p(u,{class:`a_mt_3`,modelValue:e.modelTimeHour,"onUpdate:modelValue":t[3]||=t=>e.modelTimeHour=t,label:`_PAGE_DATEPICKER_LBL_TIME_PRECISION_TIME_HOUR_`,"time-precision":`hour`,type:`time`},null,8,[`modelValue`]),s(`div`,null,`modelTimeHour: `+i(e.modelTimeHour),1)])]),s(`div`,Ye,[s(`div`,Xe,[p(u,{class:`a_mt_3`,modelValue:e.modelTimeMinute,"onUpdate:modelValue":t[4]||=t=>e.modelTimeMinute=t,label:`_PAGE_DATEPICKER_LBL_TIME_PRECISION_TIME_MINUTE_`,"time-precision":`minute`,type:`time`},null,8,[`modelValue`]),s(`div`,null,`modelTimeMinute: `+i(e.modelTimeMinute),1)])]),s(`div`,Ze,[s(`div`,Qe,[p(u,{class:`a_mt_3`,modelValue:e.modelTimeSecond,"onUpdate:modelValue":t[5]||=t=>e.modelTimeSecond=t,label:`_PAGE_DATEPICKER_LBL_TIME_PRECISION_TIME_SECOND_`,"time-precision":`second`,type:`time`},null,8,[`modelValue`]),s(`div`,null,`modelTimeSecond: `+i(e.modelTimeSecond),1)])])]),_:1},8,[`code-html`,`code-js`])}var et=y(Be,[[`render`,$e]]);function tt(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function $(){return{codeJs:`import {
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
};`}}var nt={name:`PageDatepickerType`,components:{ADatepicker:g,AlohaExample:h},setup(){let e=u(`2025-05-16`),t=u(`2026-03-23T03:05:00.000+01:00`),n=u(void 0),{codeHtml:r}=tt(),{codeJs:i}=$();return{codeHtml:r,codeJs:i,model1:e,model2:t,model3:n}}},rt={class:`a_columns a_columns_count_12`},it={class:`a_column a_column_6 a_columns_count_12_touch`},at={class:`a_columns a_columns_count_12`},ot={class:`a_column a_column_6 a_columns_count_12_touch`},st={class:`a_columns a_columns_count_12`},ct={class:`a_column a_column_6 a_columns_count_12_touch`};function lt(e,t,n,r,o,c){let u=d(`a-datepicker`),m=d(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_PAGE_DATEPICKER_TYPE_HEADER_`,description:`_PAGE_DATEPICKER_TYPE_DESCRIPTION_`,props:[`type`]},{default:f(()=>[s(`div`,rt,[s(`div`,it,[p(u,{modelValue:e.model1,"onUpdate:modelValue":t[0]||=t=>e.model1=t,label:`_PAGE_DATEPICKER_LBL_TYPE_DATE_`,type:`date`},null,8,[`modelValue`]),s(`div`,null,`model1: `+i(e.model1),1)])]),s(`div`,at,[s(`div`,ot,[p(u,{modelValue:e.model2,"onUpdate:modelValue":t[1]||=t=>e.model2=t,"minute-step":1,format:`HH:mm`,label:`_PAGE_DATEPICKER_LBL_TYPE_TIME_`,type:`time`},null,8,[`modelValue`]),s(`div`,null,`model2: `+i(e.model2),1)])]),s(`div`,st,[s(`div`,ct,[p(u,{modelValue:e.model3,"onUpdate:modelValue":t[2]||=t=>e.model3=t,label:`_PAGE_DATEPICKER_LBL_TYPE_DATETIME_`,type:`datetime`},null,8,[`modelValue`]),s(`div`,null,`model3: `+i(e.model3),1)])])]),_:1},8,[`code-html`,`code-js`])}var ut=y(nt,[[`render`,lt]]);function dt(){return{dataEvents:[{name:`update:model-value`,description:`_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_`,type:`Function`},{name:`focus`,description:`_A_UI_EVENTS_FOCUS_DESCRIPTION_`,type:`Function`},{name:`blur`,description:`_A_UI_EVENTS_BLUR_DESCRIPTION_`,type:`Function`}]}}function ft(){let e=r(()=>_({placeholder:`_A_DATEPICKER_COMPONENT_NAME_`}));return{pageTitle:r(()=>`ADatepicker${e.value?` (${e.value})`:``}`)}}function pt(){return{dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`change`,description:`_A_UI_PROPS_CHANGE_DESCRIPTION_`,type:`Function`,default:`() => {}`,required:!1},{name:`append-to-body`,description:`_A_DATEPICKER_PROP_APPEND_TO_BODY_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`class`,description:`_A_DATEPICKER_PROP_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`clearable`,description:`_A_DATEPICKER_PROP_CLEARABLE_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`confirm`,description:`_A_DATEPICKER_PROP_CONFIRM_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`confirm-text`,description:`_A_DATEPICKER_PROP_CONFIRM_TEXT_DESCRIPTION_`,type:`String`,default:`"OK"`,required:!1},{name:`date-format`,description:`_A_DATEPICKER_PROP_DATE_FORMAT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`dependencies`,description:`_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_`,type:`Array / Object`,default:void 0,required:!1},{name:`disabled`,description:`_A_UI_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`editable`,description:`_A_DATEPICKER_PROP_EDITABLE_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`errors`,description:`_A_UI_PROPS_ERRORS_DESCRIPTION_`,type:`String / Array`,default:void 0,required:!1},{name:`error-icon`,description:`_A_UI_PROPS_ERROR_ICON_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`exclude-render-attributes`,description:`_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`extra`,description:`_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`first-day-of-week`,description:`_A_DATEPICKER_PROP_FIRST_DAY_OF_WEEK_DESCRIPTION_`,type:`Number`,default:1,required:!1},{name:`focus-start-date`,description:`_A_DATEPICKER_PROP_FOCUS_START_DATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`format`,description:`_A_DATEPICKER_PROP_FORMAT_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`format-save`,description:`_A_DATEPICKER_PROP_FORMAT_SAVE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`help-text`,description:`_A_UI_PROPS_HELP_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`html-id`,description:`_A_UI_PROPS_HTML_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`icon-day`,description:`_A_DATEPICKER_PROP_ICON_DAY_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`id`,description:`_A_UI_PROPS_ID_DESCRIPTION_`,type:`String / Number`,default:`() => uniqueId("a_ui_")`,required:!1},{name:`id-prefix`,description:`_A_UI_PROPS_ID_PREFIX_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`input-attr`,description:`_A_DATEPICKER_PROP_INPUT_ATTR_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`input-class`,description:`_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_`,type:`String / Number / Boolean / Array / Object / Date / Function / Symbol`,default:`"a_datepicker__input"`,required:!1},{name:`input-name`,description:`_A_DATEPICKER_PROP_INPUT_NAME_DESCRIPTION_`,type:`String`,default:`"date"`,required:!1},{name:`is-close-by-button-invisible-in-viewport`,description:`_A_GLOBAL_PROPS_IS_CLOSE_BY_BUTTON_INVISIBLE_IN_VIEWPORT_DESCRIPTION_`,type:`Boolean`,default:`true`,required:!1},{name:`is-hide`,description:`_A_UI_PROPS_IS_HIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-label-float`,description:`_A_UI_PROPS_IS_LABEL_FLOAT_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-render`,description:`_A_UI_PROPS_IS_RENDER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`label`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`label-class`,description:`_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`label-description`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`label-position`,description:`_A_UI_PROPS_LABEL_POSITION_DESCRIPTION_`,type:`"float" / "inset" / "top"`,default:`"float"`,required:!1},{name:`label-screen-reader`,description:`_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`max-date`,description:`_A_DATEPICKER_PROP_MAX_DATE_DESCRIPTION_`,type:`String / Date`,default:void 0,required:!1},{name:`min-date`,description:`_A_DATEPICKER_PROP_MIN_DATE_DESCRIPTION_`,type:`String / Date`,default:void 0,required:!1},{name:`minute-step`,description:`_A_DATEPICKER_PROP_MINUTE_STEP_DESCRIPTION_`,type:`Number`,default:0,required:!1},{name:`model-dependencies`,description:`_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`model-undefined`,description:`_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_`,type:`String / Number / Object / Array / Boolean`,default:void 0,required:!1},{name:`model-value`,description:`_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_`,type:`String / Number / Boolean / Array / Object / Date / Function / Symbol`,default:void 0,required:!1},{name:`placeholder`,description:`_A_UI_PROPS_PLACEHOLDER_DESCRIPTION_`,type:`String`,default:null,required:!1},{name:`placeholders-default`,description:`_A_DATEPICKER_PROP_PLACEHOLDERS_DEFAULT_DESCRIPTION_`,type:`Object`,default:`() => ({ date: '_A_DATEPICKER_PLACEHOLDER_DATE_', dateRange: '_A_DATEPICKER_PLACEHOLDER_DATE_RANGE_', timeHour: '_A_DATEPICKER_PLACEHOLDER_TIME_HOUR_', timeMinute: '_A_DATEPICKER_PLACEHOLDER_TIME_MINUTE_', timeSecond: '_A_DATEPICKER_PLACEHOLDER_TIME_SECOND_', datetimeHour: '_A_DATEPICKER_PLACEHOLDER_DATETIME_HOUR_', datetimeMinute: '_A_DATEPICKER_PLACEHOLDER_DATETIME_MINUTE_', datetimeSecond: '_A_DATEPICKER_PLACEHOLDER_DATETIME_SECOND_' })`,required:!1},{name:`placement`,description:`_A_DATEPICKER_PROP_PLACEMENT_DESCRIPTION_`,type:`String`,default:`"bottom-start"`,required:!1},{name:`popup-style`,description:`_A_DATEPICKER_PROP_POPUP_STYLE_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`range`,description:`_A_DATEPICKER_PROP_RANGE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`range-separator`,description:`_A_DATEPICKER_PROP_RANGE_SEPARATOR_DESCRIPTION_`,type:`String`,default:`"~"`,required:!1},{name:`readonly`,description:`_A_UI_PROPS_READONLY_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`readonly-default`,description:`_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_`,type:`String`,default:`""`,required:!1},{name:`required`,description:`_A_UI_PROPS_REQUIRED_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`shortcuts`,description:`_A_DATEPICKER_PROP_SHORTCUTS_DESCRIPTION_`,type:`Boolean / Array`,default:!0,required:!1},{name:`start-date`,description:`_A_DATEPICKER_PROP_START_DATE_DESCRIPTION_`,type:`String / Date`,default:void 0,required:!1},{name:`time-precision`,description:`_A_DATEPICKER_PROP_TIME_PRECISION_DESCRIPTION_`,type:`String`,default:`"minute"`,required:!1},{name:`type`,description:`_A_DATEPICKER_PROP_TYPE_DESCRIPTION_`,type:`String`,default:`"date"`,required:!1},{name:`value-type`,description:`_A_DATEPICKER_PROP_VALUE_TYPE_DESCRIPTION_`,type:`String / Object`,default:`"format"`,required:!1},{name:`width`,description:`_A_DATEPICKER_PROP_WIDTH_DESCRIPTION_`,type:`String / Number`,default:null,required:!1}]}}function mt(){return{dataTranslate:`_A_INPUT_SHOW_PASSWORD_._A_INPUT_HIDE_PASSWORD_._A_DATEPICKER_COMPONENT_NAME_._A_DATEPICKER_COMPONENT_DESCRIPTION_._A_DATEPICKER_PROP_APPEND_TO_BODY_DESCRIPTION_._A_DATEPICKER_PROP_CLASS_DESCRIPTION_._A_DATEPICKER_PROP_CLEARABLE_DESCRIPTION_._A_DATEPICKER_PROP_CONFIRM_DESCRIPTION_._A_DATEPICKER_PROP_CONFIRM_TEXT_DESCRIPTION_._A_DATEPICKER_PROP_DATE_FORMAT_DESCRIPTION_._A_DATEPICKER_PROP_EDITABLE_DESCRIPTION_._A_DATEPICKER_PROP_FIRST_DAY_OF_WEEK_DESCRIPTION_._A_DATEPICKER_PROP_FOCUS_START_DATE_DESCRIPTION_._A_DATEPICKER_PROP_FORMAT_DESCRIPTION_._A_DATEPICKER_PROP_FORMAT_SAVE_DESCRIPTION_._A_DATEPICKER_PROP_ICON_DAY_DESCRIPTION_._A_DATEPICKER_PROP_INPUT_ATTR_DESCRIPTION_._A_DATEPICKER_PROP_INPUT_NAME_DESCRIPTION_._A_DATEPICKER_PROP_MAX_DATE_DESCRIPTION_._A_DATEPICKER_PROP_MIN_DATE_DESCRIPTION_._A_DATEPICKER_PROP_MINUTE_STEP_DESCRIPTION_._A_DATEPICKER_PROP_PLACEMENT_DESCRIPTION_._A_DATEPICKER_PROP_PLACEHOLDERS_DEFAULT_DESCRIPTION_._A_DATEPICKER_PROP_POPUP_STYLE_DESCRIPTION_._A_DATEPICKER_PROP_RANGE_DESCRIPTION_._A_DATEPICKER_PROP_RANGE_SEPARATOR_DESCRIPTION_._A_DATEPICKER_PROP_SHORTCUTS_DESCRIPTION_._A_DATEPICKER_PROP_START_DATE_DESCRIPTION_._A_DATEPICKER_PROP_TIME_PRECISION_DESCRIPTION_._A_DATEPICKER_PROP_TYPE_DESCRIPTION_._A_DATEPICKER_PROP_VALUE_TYPE_DESCRIPTION_._A_DATEPICKER_PROP_WIDTH_DESCRIPTION_._PAGE_DATEPICKER_START_DATE_HEADER_._PAGE_DATEPICKER_START_DATE_DESCRIPTION_._PAGE_DATEPICKER_LBL_START_DATE_NEXT_YEAR_._PAGE_DATEPICKER_LBL_START_DATE_NEXT_YEAR_AND_MODEL_._PAGE_DATEPICKER_LBL_START_DATE_NEXT_YEAR_AND_MODEL_AND_FOCUS_START_DATE_._PAGE_DATEPICKER_MAX_MIN_DATE_HEADER_._PAGE_DATEPICKER_MAX_MIN_DATE_DESCRIPTION_._PAGE_DATEPICKER_LBL_WITH_MIN_DATE_._PAGE_DATEPICKER_LBL_WITH_MAX_DATE_._PAGE_DATEPICKER_LBL_WITH_MIN_AND_MAX_DATE_._PAGE_DATEPICKER_PLACEHOLDER_DEFAULT_HEADER_._PAGE_DATEPICKER_PLACEHOLDER_DEFAULT_DESCRIPTION_._PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_DATE_._PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_TIME_HOUR_._PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_TIME_MINUTE_._PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_DATETIME_SECOND_._PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_OVERRIDE_._PAGE_DATEPICKER_TYPE_HEADER_._PAGE_DATEPICKER_TYPE_DESCRIPTION_._PAGE_DATEPICKER_LBL_TYPE_DATE_._PAGE_DATEPICKER_LBL_TYPE_TIME_._PAGE_DATEPICKER_LBL_TYPE_DATETIME_._PAGE_DATEPICKER_TIME_PRECISION_HEADER_._PAGE_DATEPICKER_TIME_PRECISION_DESCRIPTION_._PAGE_DATEPICKER_LBL_TIME_PRECISION_DATETIME_HOUR_._PAGE_DATEPICKER_LBL_TIME_PRECISION_DATETIME_MINUTE_._PAGE_DATEPICKER_LBL_TIME_PRECISION_DATETIME_SECOND_._PAGE_DATEPICKER_LBL_TIME_PRECISION_TIME_HOUR_._PAGE_DATEPICKER_LBL_TIME_PRECISION_TIME_MINUTE_._PAGE_DATEPICKER_LBL_TIME_PRECISION_TIME_SECOND_._PAGE_DATEPICKER_LBL_INPUT_1_._PAGE_DATEPICKER_LBL_INPUT_2_._PAGE_DATEPICKER_LBL_INPUT_3_._PAGE_DATEPICKER_LBL_INPUT_4_._PAGE_DATEPICKER_TXT_ALOHA_`.split(`.`)}}var ht={name:`PageDatepicker`,components:{AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:v,PageDatepickerBasic:O,PageDatepickerLabelPosition:K,PageDatepickerErrorIcon:N,PageDatepickerLabelDescription:B,PageDatepickerMaxMinDate:oe,PageDatepickerPlaceholderDefault:xe,PageDatepickerReadonly:Ee,PageDatepickerStartDate:Le,PageDatepickerTimePrecision:et,PageDatepickerType:ut},setup(){let{pageTitle:e}=ft(),{dataProps:t}=pt(),{dataTranslate:n}=mt(),{dataEvents:r}=dt();return{dataEvents:r,dataProps:t,dataTranslate:n,pageTitle:e}}};function gt(e,t,n,r,i,o){let s=d(`a-translation`),c=d(`page-datepicker-basic`),u=d(`page-datepicker-label-position`),m=d(`page-datepicker-error-icon`),h=d(`page-datepicker-label-description`),g=d(`page-datepicker-readonly`),_=d(`page-datepicker-placeholder-default`),v=d(`page-datepicker-max-min-date`),y=d(`page-datepicker-start-date`),b=d(`page-datepicker-time-precision`),x=d(`page-datepicker-type`),S=d(`aloha-table-props`),C=d(`aloha-table-css-vars`),w=d(`aloha-page`);return l(),a(w,{"page-title":e.pageTitle},{body:f(()=>[p(s,{tag:`p`,html:`_A_DATEPICKER_COMPONENT_DESCRIPTION_`}),p(c),p(u),p(m),p(h),p(g),p(_),p(v),p(y),p(b),p(x),p(S,{data:e.dataProps},null,8,[`data`]),p(C,{files:`components/ui/ADatepicker`})]),_:1},8,[`page-title`])}var _t=y(ht,[[`render`,gt]]);export{_t as default};