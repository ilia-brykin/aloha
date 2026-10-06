import{$t as e,Ct as t,Tt as n,Ut as r,Yt as i,kt as a,qt as o,wt as s,zt as c}from"./chunk.vendor.CZPox1kV.js";import{Z as ee,kt as te,t as l,tt as u}from"./bundle.index.BmSiyQNH.js";import{n as d,t as f}from"./chunk.AlohaExample.CD4LlhAz.js";import{t as p}from"./chunk.AlohaTableProps.Dksi7fmb.js";import{t as m}from"./chunk.AlohaTableTranslate.C-b2Nle9.js";function h(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function g(){return{codeJs:`import {
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
};`}}var _={name:`PageDatepickerBasic`,components:{ADatepicker:u,AlohaExample:f},setup(){let e=i(`2022-10-18`),t=i(`2023-12-12`),n=i(void 0),{codeHtml:r}=h(),{codeJs:a}=g();return{codeHtml:r,codeJs:a,model1:e,model2:t,model3:n}}},v={class:`a_columns a_columns_count_12`},y={class:`a_column a_column_6 a_columns_count_12_touch`},b={class:`a_columns a_columns_count_12`},x={class:`a_column a_column_6 a_columns_count_12_touch`},S={class:`a_columns a_columns_count_12`},C={class:`a_column a_column_6 a_columns_count_12_touch`};function w(t,i,ee,te,l,u){let d=r(`a-datepicker`),f=r(`aloha-example`);return c(),n(f,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`label`]},{default:o(()=>[s(`div`,v,[s(`div`,y,[a(d,{modelValue:t.model1,"onUpdate:modelValue":i[0]||=e=>t.model1=e,label:`_PAGE_DATEPICKER_LBL_INPUT_1_`},null,8,[`modelValue`]),s(`div`,null,`model1: `+e(t.model1),1)])]),s(`div`,b,[s(`div`,x,[a(d,{modelValue:t.model2,"onUpdate:modelValue":i[1]||=e=>t.model2=e,label:`_PAGE_DATEPICKER_LBL_INPUT_2_`},null,8,[`modelValue`]),s(`div`,null,`model2: `+e(t.model2),1)])]),s(`div`,S,[s(`div`,C,[a(d,{modelValue:t.model3,"onUpdate:modelValue":i[2]||=e=>t.model3=e,label:`_PAGE_DATEPICKER_LBL_INPUT_3_`},null,8,[`modelValue`]),s(`div`,null,`model3: `+e(t.model3),1)])])]),_:1},8,[`code-html`,`code-js`])}var T=l(_,[[`render`,w]]);function E(){return{codeHtml:`<a-datepicker
  v-model="model"
  :error-icon="errorIcon"
  errors="Aloha"
  label="Datepicker"
></a-datepicker>`}}function D(){return{codeJs:`import {
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
};`}}var O={name:`PageDatepickerErrorIcon`,components:{ADatepicker:u,AlohaExample:f},setup(){let e=i(`2022-10-18`),{codeHtml:t}=E(),{codeJs:n}=D();return{codeHtml:t,codeJs:n,errorIcon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.93 6.588 8.758 10.042a.5.5 0 0 1-.998 0L7.588 6.588a.5.5 0 1 1 .998 0M8 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>`,model:e}}};function k(e,t,i,s,ee,te){let l=r(`a-datepicker`),u=r(`aloha-example`);return c(),n(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_ERROR_ICON_HEADER_`,description:`_A_UI_GROUP_ERROR_ICON_DESCRIPTION_`,props:[`errors`,`error-icon`]},{default:o(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"error-icon":e.errorIcon,errors:`Aloha`,label:`Datepicker`},null,8,[`modelValue`,`error-icon`])]),_:1},8,[`code-html`,`code-js`])}var A=l(O,[[`render`,k]]);function j(){return{codeHtml:`<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="model"
      :is-label-float="false"
      label-description="_PAGE_DATEPICKER_TXT_ALOHA_"
      label="_PAGE_DATEPICKER_LBL_TYPE_DATE_"
    ></a-datepicker>
  </div>
</div>
`}}function M(){return{codeJs:`import {
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
};`}}var N={name:`PageDatepickerLabelDescription`,components:{ADatepicker:u,AlohaExample:f},setup(){let e=i(void 0),{codeHtml:t}=j(),{codeJs:n}=M();return{codeHtml:t,codeJs:n,model:e}}},P={class:`a_columns a_columns_count_12`},F={class:`a_column a_column_6 a_columns_count_12_touch`};function I(e,t,i,ee,te,l){let u=r(`a-datepicker`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_`,description:`_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_`,props:[`label-description`,`is-label-float`]},{default:o(()=>[s(`div`,P,[s(`div`,F,[a(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"is-label-float":!1,"label-description":`_PAGE_DATEPICKER_TXT_ALOHA_`,label:`_PAGE_DATEPICKER_LBL_TYPE_DATE_`},null,8,[`modelValue`])])])]),_:1},8,[`code-html`,`code-js`])}var L=l(N,[[`render`,I]]);function R(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function z(){return{codeJs:`import {
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
};`}}var B={name:`PageDatepickerMaxMinDate`,components:{ADatepicker:u,AlohaExample:f},setup(){let e=i(void 0),n=i(void 0),r=i(void 0),a=t(()=>{let e=new Date;return e.setDate(e.getDate()-1),e.toISOString()}),o=t(()=>{let e=new Date;return e.setDate(e.getDate()+1),e.toISOString()}),{codeHtml:s}=R(),{codeJs:c}=z();return{codeHtml:s,codeJs:c,dateTomorrow:o,dateYesterday:a,model1:e,model2:n,model3:r}}},V={class:`a_columns a_columns_count_12`},H={class:`a_column a_column_6 a_columns_count_12_touch`},U={class:`a_columns a_columns_count_12`},W={class:`a_column a_column_6 a_columns_count_12_touch`},G={class:`a_columns a_columns_count_12`},K={class:`a_column a_column_6 a_columns_count_12_touch`};function q(t,i,ee,te,l,u){let d=r(`a-datepicker`),f=r(`aloha-example`);return c(),n(f,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_PAGE_DATEPICKER_MAX_MIN_DATE_HEADER_`,description:`_PAGE_DATEPICKER_MAX_MIN_DATE_DESCRIPTION_`,props:[`max-date`,`min-date`]},{default:o(()=>[s(`div`,V,[s(`div`,H,[a(d,{modelValue:t.model1,"onUpdate:modelValue":i[0]||=e=>t.model1=e,"min-date":t.dateYesterday,label:`_PAGE_DATEPICKER_LBL_WITH_MIN_DATE_`,type:`date`},null,8,[`modelValue`,`min-date`]),s(`div`,null,`model1: `+e(t.model1),1)])]),s(`div`,U,[s(`div`,W,[a(d,{class:`a_mt_3`,modelValue:t.model2,"onUpdate:modelValue":i[1]||=e=>t.model2=e,"max-date":t.dateTomorrow,label:`_PAGE_DATEPICKER_LBL_WITH_MAX_DATE_`,type:`date`},null,8,[`modelValue`,`max-date`]),s(`div`,null,`model2: `+e(t.model2),1)])]),s(`div`,G,[s(`div`,K,[a(d,{class:`a_mt_3`,modelValue:t.model3,"onUpdate:modelValue":i[2]||=e=>t.model3=e,"max-date":t.dateTomorrow,"min-date":t.dateTomorrow,label:`_PAGE_DATEPICKER_LBL_WITH_MIN_AND_MAX_DATE_`,type:`date`},null,8,[`modelValue`,`max-date`,`min-date`]),s(`div`,null,`model3: `+e(t.model3),1)])])]),_:1},8,[`code-html`,`code-js`])}var J=l(B,[[`render`,q]]);function Y(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function X(){return{codeJs:`import {
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
};`}}var Z={name:`PageDatepickerPlaceholderDefault`,components:{ADatepicker:u,AlohaExample:f},setup(){let e=i(void 0),t=i(void 0),n=i(void 0),r=i(void 0),a=i(void 0),o={datetimeMinute:`_PAGE_DATEPICKER_PLACEHOLDER_CUSTOM_DATETIME_MINUTE_`,timeMinute:`_PAGE_DATEPICKER_PLACEHOLDER_CUSTOM_TIME_MINUTE_`},{codeHtml:s}=Y(),{codeJs:c}=X();return{codeHtml:s,codeJs:c,modelDate:e,modelTimeHour:t,modelTimeMinute:n,modelDatetimeSecond:r,modelOverride:a,placeholdersCustom:o}}},Q={class:`a_columns a_columns_count_12`},ne={class:`a_column a_column_6 a_columns_count_12_touch`},re={class:`a_columns a_columns_count_12`},ie={class:`a_column a_column_6 a_columns_count_12_touch`},ae={class:`a_columns a_columns_count_12`},oe={class:`a_column a_column_6 a_columns_count_12_touch`},se={class:`a_columns a_columns_count_12`},ce={class:`a_column a_column_6 a_columns_count_12_touch`},le={class:`a_columns a_columns_count_12`},ue={class:`a_column a_column_6 a_columns_count_12_touch`};function de(t,i,ee,te,l,u){let d=r(`a-datepicker`),f=r(`aloha-example`);return c(),n(f,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_PAGE_DATEPICKER_PLACEHOLDER_DEFAULT_HEADER_`,description:`_PAGE_DATEPICKER_PLACEHOLDER_DEFAULT_DESCRIPTION_`,props:[`placeholder`,`placeholders-default`,`type`,`time-precision`]},{default:o(()=>[s(`div`,Q,[s(`div`,ne,[a(d,{modelValue:t.modelDate,"onUpdate:modelValue":i[0]||=e=>t.modelDate=e,label:`_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_DATE_`,type:`date`},null,8,[`modelValue`]),s(`div`,null,`modelDate: `+e(t.modelDate),1)])]),s(`div`,re,[s(`div`,ie,[a(d,{class:`a_mt_3`,modelValue:t.modelTimeHour,"onUpdate:modelValue":i[1]||=e=>t.modelTimeHour=e,label:`_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_TIME_HOUR_`,"time-precision":`hour`,type:`time`},null,8,[`modelValue`]),s(`div`,null,`modelTimeHour: `+e(t.modelTimeHour),1)])]),s(`div`,ae,[s(`div`,oe,[a(d,{class:`a_mt_3`,modelValue:t.modelTimeMinute,"onUpdate:modelValue":i[2]||=e=>t.modelTimeMinute=e,label:`_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_TIME_MINUTE_`,"time-precision":`minute`,type:`time`},null,8,[`modelValue`]),s(`div`,null,`modelTimeMinute: `+e(t.modelTimeMinute),1)])]),s(`div`,se,[s(`div`,ce,[a(d,{class:`a_mt_3`,modelValue:t.modelDatetimeSecond,"onUpdate:modelValue":i[3]||=e=>t.modelDatetimeSecond=e,label:`_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_DATETIME_SECOND_`,"time-precision":`second`,type:`datetime`},null,8,[`modelValue`]),s(`div`,null,`modelDatetimeSecond: `+e(t.modelDatetimeSecond),1)])]),s(`div`,le,[s(`div`,ue,[a(d,{class:`a_mt_3`,modelValue:t.modelOverride,"onUpdate:modelValue":i[4]||=e=>t.modelOverride=e,"placeholders-default":t.placeholdersCustom,label:`_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_OVERRIDE_`,"time-precision":`minute`,type:`datetime`},null,8,[`modelValue`,`placeholders-default`]),s(`div`,null,`modelOverride: `+e(t.modelOverride),1)])])]),_:1},8,[`code-html`,`code-js`])}var fe=l(Z,[[`render`,de]]);function pe(){return{codeHtml:`<a-datepicker
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
></a-datepicker>`}}function me(){return{codeJs:`import {
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
};`}}var he={name:`PageDatepickerReadonly`,components:{ADatepicker:u,AlohaExample:f},setup(){let e=i(`2022-10-18`),t=i(`2023-12-12`),n=i(void 0),{codeHtml:r}=pe(),{codeJs:a}=me();return{codeHtml:r,codeJs:a,model1:e,model2:t,model3:n}}};function ge(e,t,i,s,ee,te){let l=r(`a-datepicker`),u=r(`aloha-example`);return c(),n(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_READONLY_HEADER_`,description:`_A_UI_GROUP_READONLY_DESCRIPTION_`,props:[`readonly`,`readonly-default`]},{default:o(()=>[a(l,{"model-value":e.model1,readonly:!0,label:`_PAGE_DATEPICKER_LBL_INPUT_1_`},null,8,[`model-value`]),a(l,{class:`a_mt_3`,"model-value":e.model2,readonly:!0,label:`_PAGE_DATEPICKER_LBL_INPUT_2_`},null,8,[`model-value`]),a(l,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,label:`_PAGE_DATEPICKER_LBL_INPUT_3_`},null,8,[`model-value`]),a(l,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,label:`_PAGE_DATEPICKER_LBL_INPUT_4_`,"readonly-default":`-`,"help-text":`_PAGE_DATEPICKER_TXT_ALOHA_`},null,8,[`model-value`])]),_:1},8,[`code-html`,`code-js`])}var _e=l(he,[[`render`,ge]]);function ve(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function ye(){return{codeJs:`import {
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
};`}}var be={name:`PageDatepickerStartDate`,components:{ADatepicker:u,AlohaExample:f},setup(){let e=i(void 0),n=i(`2025-05-16`),r=i(`2025-05-16`),a=t(()=>{let e=new Date;return e.setFullYear(e.getFullYear()+1),e.toISOString()}),{codeHtml:o}=ve(),{codeJs:s}=ye();return{codeHtml:o,codeJs:s,dateNextYear:a,model1:e,model2:n,model3:r}}},xe={class:`a_columns a_columns_count_12`},Se={class:`a_column a_column_6 a_columns_count_12_touch`},Ce={class:`a_columns a_columns_count_12`},we={class:`a_column a_column_6 a_columns_count_12_touch`},Te={class:`a_columns a_columns_count_12`},Ee={class:`a_column a_column_6 a_columns_count_12_touch`};function De(t,i,ee,te,l,u){let d=r(`a-datepicker`),f=r(`aloha-example`);return c(),n(f,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_PAGE_DATEPICKER_START_DATE_HEADER_`,description:`_PAGE_DATEPICKER_START_DATE_DESCRIPTION_`,props:[`start-date`,`focus-start-date`]},{default:o(()=>[s(`div`,xe,[s(`div`,Se,[a(d,{modelValue:t.model1,"onUpdate:modelValue":i[0]||=e=>t.model1=e,"start-date":t.dateNextYear,label:`_PAGE_DATEPICKER_LBL_START_DATE_NEXT_YEAR_`,type:`date`},null,8,[`modelValue`,`start-date`]),s(`div`,null,`model1: `+e(t.model1),1)])]),s(`div`,Ce,[s(`div`,we,[a(d,{modelValue:t.model2,"onUpdate:modelValue":i[1]||=e=>t.model2=e,"start-date":t.dateNextYear,label:`_PAGE_DATEPICKER_LBL_START_DATE_NEXT_YEAR_AND_MODEL_`,type:`date`},null,8,[`modelValue`,`start-date`]),s(`div`,null,`model2: `+e(t.model2),1)])]),s(`div`,Te,[s(`div`,Ee,[a(d,{modelValue:t.model3,"onUpdate:modelValue":i[2]||=e=>t.model3=e,"focus-start-date":!0,"start-date":t.dateNextYear,label:`_PAGE_DATEPICKER_LBL_START_DATE_NEXT_YEAR_AND_MODEL_AND_FOCUS_START_DATE_`,type:`date`},null,8,[`modelValue`,`start-date`]),s(`div`,null,`model3: `+e(t.model3),1)])])]),_:1},8,[`code-html`,`code-js`])}var Oe=l(be,[[`render`,De]]);function ke(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function Ae(){return{codeJs:`import {
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
};`}}var je={name:`PageDatepickerTimePrecision`,components:{ADatepicker:u,AlohaExample:f},setup(){let e=i(void 0),t=i(void 0),n=i(void 0),r=i(void 0),a=i(void 0),o=i(void 0),{codeHtml:s}=ke(),{codeJs:c}=Ae();return{codeHtml:s,codeJs:c,modelDatetimeHour:e,modelDatetimeMinute:t,modelDatetimeSecond:n,modelTimeHour:r,modelTimeMinute:a,modelTimeSecond:o}}},Me={class:`a_columns a_columns_count_12`},Ne={class:`a_column a_column_6 a_columns_count_12_touch`},Pe={class:`a_columns a_columns_count_12`},Fe={class:`a_column a_column_6 a_columns_count_12_touch`},Ie={class:`a_columns a_columns_count_12`},Le={class:`a_column a_column_6 a_columns_count_12_touch`},Re={class:`a_columns a_columns_count_12`},ze={class:`a_column a_column_6 a_columns_count_12_touch`},Be={class:`a_columns a_columns_count_12`},Ve={class:`a_column a_column_6 a_columns_count_12_touch`},He={class:`a_columns a_columns_count_12`},Ue={class:`a_column a_column_6 a_columns_count_12_touch`};function We(t,i,ee,te,l,u){let d=r(`a-datepicker`),f=r(`aloha-example`);return c(),n(f,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_PAGE_DATEPICKER_TIME_PRECISION_HEADER_`,description:`_PAGE_DATEPICKER_TIME_PRECISION_DESCRIPTION_`,props:[`type`,`time-precision`]},{default:o(()=>[s(`div`,Me,[s(`div`,Ne,[a(d,{modelValue:t.modelDatetimeHour,"onUpdate:modelValue":i[0]||=e=>t.modelDatetimeHour=e,label:`_PAGE_DATEPICKER_LBL_TIME_PRECISION_DATETIME_HOUR_`,"time-precision":`hour`,type:`datetime`},null,8,[`modelValue`]),s(`div`,null,`modelDatetimeHour: `+e(t.modelDatetimeHour),1)])]),s(`div`,Pe,[s(`div`,Fe,[a(d,{class:`a_mt_3`,modelValue:t.modelDatetimeMinute,"onUpdate:modelValue":i[1]||=e=>t.modelDatetimeMinute=e,label:`_PAGE_DATEPICKER_LBL_TIME_PRECISION_DATETIME_MINUTE_`,"time-precision":`minute`,type:`datetime`},null,8,[`modelValue`]),s(`div`,null,`modelDatetimeMinute: `+e(t.modelDatetimeMinute),1)])]),s(`div`,Ie,[s(`div`,Le,[a(d,{class:`a_mt_3`,modelValue:t.modelDatetimeSecond,"onUpdate:modelValue":i[2]||=e=>t.modelDatetimeSecond=e,label:`_PAGE_DATEPICKER_LBL_TIME_PRECISION_DATETIME_SECOND_`,"time-precision":`second`,type:`datetime`},null,8,[`modelValue`]),s(`div`,null,`modelDatetimeSecond: `+e(t.modelDatetimeSecond),1)])]),s(`div`,Re,[s(`div`,ze,[a(d,{class:`a_mt_3`,modelValue:t.modelTimeHour,"onUpdate:modelValue":i[3]||=e=>t.modelTimeHour=e,label:`_PAGE_DATEPICKER_LBL_TIME_PRECISION_TIME_HOUR_`,"time-precision":`hour`,type:`time`},null,8,[`modelValue`]),s(`div`,null,`modelTimeHour: `+e(t.modelTimeHour),1)])]),s(`div`,Be,[s(`div`,Ve,[a(d,{class:`a_mt_3`,modelValue:t.modelTimeMinute,"onUpdate:modelValue":i[4]||=e=>t.modelTimeMinute=e,label:`_PAGE_DATEPICKER_LBL_TIME_PRECISION_TIME_MINUTE_`,"time-precision":`minute`,type:`time`},null,8,[`modelValue`]),s(`div`,null,`modelTimeMinute: `+e(t.modelTimeMinute),1)])]),s(`div`,He,[s(`div`,Ue,[a(d,{class:`a_mt_3`,modelValue:t.modelTimeSecond,"onUpdate:modelValue":i[5]||=e=>t.modelTimeSecond=e,label:`_PAGE_DATEPICKER_LBL_TIME_PRECISION_TIME_SECOND_`,"time-precision":`second`,type:`time`},null,8,[`modelValue`]),s(`div`,null,`modelTimeSecond: `+e(t.modelTimeSecond),1)])])]),_:1},8,[`code-html`,`code-js`])}var Ge=l(je,[[`render`,We]]);function Ke(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function qe(){return{codeJs:`import {
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
};`}}var Je={name:`PageDatepickerType`,components:{ADatepicker:u,AlohaExample:f},setup(){let e=i(`2025-05-16`),t=i(`2026-03-23T03:05:00.000+01:00`),n=i(void 0),{codeHtml:r}=Ke(),{codeJs:a}=qe();return{codeHtml:r,codeJs:a,model1:e,model2:t,model3:n}}},$={class:`a_columns a_columns_count_12`},Ye={class:`a_column a_column_6 a_columns_count_12_touch`},Xe={class:`a_columns a_columns_count_12`},Ze={class:`a_column a_column_6 a_columns_count_12_touch`},Qe={class:`a_columns a_columns_count_12`},$e={class:`a_column a_column_6 a_columns_count_12_touch`};function et(t,i,ee,te,l,u){let d=r(`a-datepicker`),f=r(`aloha-example`);return c(),n(f,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_PAGE_DATEPICKER_TYPE_HEADER_`,description:`_PAGE_DATEPICKER_TYPE_DESCRIPTION_`,props:[`type`]},{default:o(()=>[s(`div`,$,[s(`div`,Ye,[a(d,{modelValue:t.model1,"onUpdate:modelValue":i[0]||=e=>t.model1=e,label:`_PAGE_DATEPICKER_LBL_TYPE_DATE_`,type:`date`},null,8,[`modelValue`]),s(`div`,null,`model1: `+e(t.model1),1)])]),s(`div`,Xe,[s(`div`,Ze,[a(d,{modelValue:t.model2,"onUpdate:modelValue":i[1]||=e=>t.model2=e,"minute-step":1,format:`HH:mm`,label:`_PAGE_DATEPICKER_LBL_TYPE_TIME_`,type:`time`},null,8,[`modelValue`]),s(`div`,null,`model2: `+e(t.model2),1)])]),s(`div`,Qe,[s(`div`,$e,[a(d,{modelValue:t.model3,"onUpdate:modelValue":i[2]||=e=>t.model3=e,label:`_PAGE_DATEPICKER_LBL_TYPE_DATETIME_`,type:`datetime`},null,8,[`modelValue`]),s(`div`,null,`model3: `+e(t.model3),1)])])]),_:1},8,[`code-html`,`code-js`])}var tt=l(Je,[[`render`,et]]);function nt(){return{dataEvents:[{name:`update:model-value`,description:`_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_`,type:`Function`},{name:`focus`,description:`_A_UI_EVENTS_FOCUS_DESCRIPTION_`,type:`Function`},{name:`blur`,description:`_A_UI_EVENTS_BLUR_DESCRIPTION_`,type:`Function`}]}}function rt(){let e=t(()=>te({placeholder:`_A_DATEPICKER_COMPONENT_NAME_`}));return{pageTitle:t(()=>`ADatepicker${e.value?` (${e.value})`:``}`)}}function it(){return{dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`change`,description:`_A_UI_PROPS_CHANGE_DESCRIPTION_`,type:`Function`,default:`() => {}`,required:!1},{name:`append-to-body`,description:`_A_DATEPICKER_PROP_APPEND_TO_BODY_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`class`,description:`_A_DATEPICKER_PROP_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`clearable`,description:`_A_DATEPICKER_PROP_CLEARABLE_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`confirm`,description:`_A_DATEPICKER_PROP_CONFIRM_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`confirm-text`,description:`_A_DATEPICKER_PROP_CONFIRM_TEXT_DESCRIPTION_`,type:`String`,default:`"OK"`,required:!1},{name:`date-format`,description:`_A_DATEPICKER_PROP_DATE_FORMAT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`dependencies`,description:`_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_`,type:`Array / Object`,default:void 0,required:!1},{name:`disabled`,description:`_A_UI_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`editable`,description:`_A_DATEPICKER_PROP_EDITABLE_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`errors`,description:`_A_UI_PROPS_ERRORS_DESCRIPTION_`,type:`String / Array`,default:void 0,required:!1},{name:`error-icon`,description:`_A_UI_PROPS_ERROR_ICON_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`exclude-render-attributes`,description:`_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`extra`,description:`_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`first-day-of-week`,description:`_A_DATEPICKER_PROP_FIRST_DAY_OF_WEEK_DESCRIPTION_`,type:`Number`,default:1,required:!1},{name:`focus-start-date`,description:`_A_DATEPICKER_PROP_FOCUS_START_DATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`format`,description:`_A_DATEPICKER_PROP_FORMAT_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`format-save`,description:`_A_DATEPICKER_PROP_FORMAT_SAVE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`help-text`,description:`_A_UI_PROPS_HELP_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`html-id`,description:`_A_UI_PROPS_HTML_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`icon-day`,description:`_A_DATEPICKER_PROP_ICON_DAY_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`id`,description:`_A_UI_PROPS_ID_DESCRIPTION_`,type:`String / Number`,default:`() => uniqueId("a_ui_")`,required:!1},{name:`id-prefix`,description:`_A_UI_PROPS_ID_PREFIX_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`input-attr`,description:`_A_DATEPICKER_PROP_INPUT_ATTR_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`input-class`,description:`_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_`,type:`String / Number / Boolean / Array / Object / Date / Function / Symbol`,default:`"pux_datepicker__input"`,required:!1},{name:`input-name`,description:`_A_DATEPICKER_PROP_INPUT_NAME_DESCRIPTION_`,type:`String`,default:`"date"`,required:!1},{name:`is-hide`,description:`_A_UI_PROPS_IS_HIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-label-float`,description:`_A_UI_PROPS_IS_LABEL_FLOAT_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-render`,description:`_A_UI_PROPS_IS_RENDER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`label`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`label-class`,description:`_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`label-description`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`label-screen-reader`,description:`_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`max-date`,description:`_A_DATEPICKER_PROP_MAX_DATE_DESCRIPTION_`,type:`String / Date`,default:void 0,required:!1},{name:`min-date`,description:`_A_DATEPICKER_PROP_MIN_DATE_DESCRIPTION_`,type:`String / Date`,default:void 0,required:!1},{name:`minute-step`,description:`_A_DATEPICKER_PROP_MINUTE_STEP_DESCRIPTION_`,type:`Number`,default:0,required:!1},{name:`model-dependencies`,description:`_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`model-undefined`,description:`_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_`,type:`String / Number / Object / Array / Boolean`,default:void 0,required:!1},{name:`model-value`,description:`_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_`,type:`String / Number / Boolean / Array / Object / Date / Function / Symbol`,default:void 0,required:!1},{name:`placeholder`,description:`_A_UI_PROPS_PLACEHOLDER_DESCRIPTION_`,type:`String`,default:null,required:!1},{name:`placeholders-default`,description:`_A_DATEPICKER_PROP_PLACEHOLDERS_DEFAULT_DESCRIPTION_`,type:`Object`,default:`() => ({ date: '_A_DATEPICKER_PLACEHOLDER_DATE_', dateRange: '_A_DATEPICKER_PLACEHOLDER_DATE_RANGE_', timeHour: '_A_DATEPICKER_PLACEHOLDER_TIME_HOUR_', timeMinute: '_A_DATEPICKER_PLACEHOLDER_TIME_MINUTE_', timeSecond: '_A_DATEPICKER_PLACEHOLDER_TIME_SECOND_', datetimeHour: '_A_DATEPICKER_PLACEHOLDER_DATETIME_HOUR_', datetimeMinute: '_A_DATEPICKER_PLACEHOLDER_DATETIME_MINUTE_', datetimeSecond: '_A_DATEPICKER_PLACEHOLDER_DATETIME_SECOND_' })`,required:!1},{name:`placement`,description:`_A_DATEPICKER_PROP_PLACEMENT_DESCRIPTION_`,type:`String`,default:`"bottom-start"`,required:!1},{name:`popup-style`,description:`_A_DATEPICKER_PROP_POPUP_STYLE_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`range`,description:`_A_DATEPICKER_PROP_RANGE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`range-separator`,description:`_A_DATEPICKER_PROP_RANGE_SEPARATOR_DESCRIPTION_`,type:`String`,default:`"~"`,required:!1},{name:`readonly`,description:`_A_UI_PROPS_READONLY_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`readonly-default`,description:`_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_`,type:`String`,default:`""`,required:!1},{name:`required`,description:`_A_UI_PROPS_REQUIRED_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`shortcuts`,description:`_A_DATEPICKER_PROP_SHORTCUTS_DESCRIPTION_`,type:`Boolean / Array`,default:!0,required:!1},{name:`start-date`,description:`_A_DATEPICKER_PROP_START_DATE_DESCRIPTION_`,type:`String / Date`,default:void 0,required:!1},{name:`time-precision`,description:`_A_DATEPICKER_PROP_TIME_PRECISION_DESCRIPTION_`,type:`String`,default:`"minute"`,required:!1},{name:`type`,description:`_A_DATEPICKER_PROP_TYPE_DESCRIPTION_`,type:`String`,default:`"date"`,required:!1},{name:`value-type`,description:`_A_DATEPICKER_PROP_VALUE_TYPE_DESCRIPTION_`,type:`String / Object`,default:`"format"`,required:!1},{name:`width`,description:`_A_DATEPICKER_PROP_WIDTH_DESCRIPTION_`,type:`String / Number`,default:null,required:!1}]}}function at(){return{dataTranslate:`_A_INPUT_SHOW_PASSWORD_._A_INPUT_HIDE_PASSWORD_._A_DATEPICKER_COMPONENT_NAME_._A_DATEPICKER_COMPONENT_DESCRIPTION_._A_DATEPICKER_PROP_APPEND_TO_BODY_DESCRIPTION_._A_DATEPICKER_PROP_CLASS_DESCRIPTION_._A_DATEPICKER_PROP_CLEARABLE_DESCRIPTION_._A_DATEPICKER_PROP_CONFIRM_DESCRIPTION_._A_DATEPICKER_PROP_CONFIRM_TEXT_DESCRIPTION_._A_DATEPICKER_PROP_DATE_FORMAT_DESCRIPTION_._A_DATEPICKER_PROP_EDITABLE_DESCRIPTION_._A_DATEPICKER_PROP_FIRST_DAY_OF_WEEK_DESCRIPTION_._A_DATEPICKER_PROP_FOCUS_START_DATE_DESCRIPTION_._A_DATEPICKER_PROP_FORMAT_DESCRIPTION_._A_DATEPICKER_PROP_FORMAT_SAVE_DESCRIPTION_._A_DATEPICKER_PROP_ICON_DAY_DESCRIPTION_._A_DATEPICKER_PROP_INPUT_ATTR_DESCRIPTION_._A_DATEPICKER_PROP_INPUT_NAME_DESCRIPTION_._A_DATEPICKER_PROP_MAX_DATE_DESCRIPTION_._A_DATEPICKER_PROP_MIN_DATE_DESCRIPTION_._A_DATEPICKER_PROP_MINUTE_STEP_DESCRIPTION_._A_DATEPICKER_PROP_PLACEMENT_DESCRIPTION_._A_DATEPICKER_PROP_PLACEHOLDERS_DEFAULT_DESCRIPTION_._A_DATEPICKER_PROP_POPUP_STYLE_DESCRIPTION_._A_DATEPICKER_PROP_RANGE_DESCRIPTION_._A_DATEPICKER_PROP_RANGE_SEPARATOR_DESCRIPTION_._A_DATEPICKER_PROP_SHORTCUTS_DESCRIPTION_._A_DATEPICKER_PROP_START_DATE_DESCRIPTION_._A_DATEPICKER_PROP_TIME_PRECISION_DESCRIPTION_._A_DATEPICKER_PROP_TYPE_DESCRIPTION_._A_DATEPICKER_PROP_VALUE_TYPE_DESCRIPTION_._A_DATEPICKER_PROP_WIDTH_DESCRIPTION_._PAGE_DATEPICKER_START_DATE_HEADER_._PAGE_DATEPICKER_START_DATE_DESCRIPTION_._PAGE_DATEPICKER_LBL_START_DATE_NEXT_YEAR_._PAGE_DATEPICKER_LBL_START_DATE_NEXT_YEAR_AND_MODEL_._PAGE_DATEPICKER_LBL_START_DATE_NEXT_YEAR_AND_MODEL_AND_FOCUS_START_DATE_._PAGE_DATEPICKER_MAX_MIN_DATE_HEADER_._PAGE_DATEPICKER_MAX_MIN_DATE_DESCRIPTION_._PAGE_DATEPICKER_LBL_WITH_MIN_DATE_._PAGE_DATEPICKER_LBL_WITH_MAX_DATE_._PAGE_DATEPICKER_LBL_WITH_MIN_AND_MAX_DATE_._PAGE_DATEPICKER_PLACEHOLDER_DEFAULT_HEADER_._PAGE_DATEPICKER_PLACEHOLDER_DEFAULT_DESCRIPTION_._PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_DATE_._PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_TIME_HOUR_._PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_TIME_MINUTE_._PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_DATETIME_SECOND_._PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_OVERRIDE_._PAGE_DATEPICKER_TYPE_HEADER_._PAGE_DATEPICKER_TYPE_DESCRIPTION_._PAGE_DATEPICKER_LBL_TYPE_DATE_._PAGE_DATEPICKER_LBL_TYPE_TIME_._PAGE_DATEPICKER_LBL_TYPE_DATETIME_._PAGE_DATEPICKER_TIME_PRECISION_HEADER_._PAGE_DATEPICKER_TIME_PRECISION_DESCRIPTION_._PAGE_DATEPICKER_LBL_TIME_PRECISION_DATETIME_HOUR_._PAGE_DATEPICKER_LBL_TIME_PRECISION_DATETIME_MINUTE_._PAGE_DATEPICKER_LBL_TIME_PRECISION_DATETIME_SECOND_._PAGE_DATEPICKER_LBL_TIME_PRECISION_TIME_HOUR_._PAGE_DATEPICKER_LBL_TIME_PRECISION_TIME_MINUTE_._PAGE_DATEPICKER_LBL_TIME_PRECISION_TIME_SECOND_._PAGE_DATEPICKER_LBL_INPUT_1_._PAGE_DATEPICKER_LBL_INPUT_2_._PAGE_DATEPICKER_LBL_INPUT_3_._PAGE_DATEPICKER_LBL_INPUT_4_._PAGE_DATEPICKER_TXT_ALOHA_`.split(`.`)}}var ot={name:`PageDatepicker`,components:{AlohaPage:d,AlohaTableProps:p,AlohaTableTranslate:m,ATranslation:ee,PageDatepickerBasic:T,PageDatepickerErrorIcon:A,PageDatepickerLabelDescription:L,PageDatepickerMaxMinDate:J,PageDatepickerPlaceholderDefault:fe,PageDatepickerReadonly:_e,PageDatepickerStartDate:Oe,PageDatepickerTimePrecision:Ge,PageDatepickerType:tt},setup(){let{pageTitle:e}=rt(),{dataProps:t}=it(),{dataTranslate:n}=at(),{dataEvents:r}=nt();return{dataEvents:r,dataProps:t,dataTranslate:n,pageTitle:e}}};function st(e,t,i,s,ee,te){let l=r(`a-translation`),u=r(`page-datepicker-basic`),d=r(`page-datepicker-error-icon`),f=r(`page-datepicker-label-description`),p=r(`page-datepicker-readonly`),m=r(`page-datepicker-placeholder-default`),h=r(`page-datepicker-max-min-date`),g=r(`page-datepicker-start-date`),_=r(`page-datepicker-time-precision`),v=r(`page-datepicker-type`),y=r(`aloha-table-props`),b=r(`aloha-page`);return c(),n(b,{"page-title":e.pageTitle},{body:o(()=>[a(l,{tag:`p`,html:`_A_DATEPICKER_COMPONENT_DESCRIPTION_`}),a(u),a(d),a(f),a(p),a(m),a(h),a(g),a(_),a(v),a(y,{data:e.dataProps},null,8,[`data`])]),_:1},8,[`page-title`])}var ct=l(ot,[[`render`,st]]);export{ct as default};