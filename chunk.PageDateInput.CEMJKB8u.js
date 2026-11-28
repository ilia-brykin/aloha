import{t as e}from"./chunk.AlohaPage.BvUvrvQ4.js";import{t}from"./chunk.AlohaTableProps.BIN1mKDB.js";import{t as n}from"./chunk.AlohaTableTranslate.ZCrkGUQc.js";import{Bt as r,Cn as i,Ht as a,Rt as ee,Ut as o,Vt as s,Wt as c,an as l,gn as u,ln as d,pn as f,qt as p}from"./chunk.vendor.SEynj6EJ.js";import{t as m}from"./chunk.AlohaExample.Bx3NX4bX.js";import{D as h,hn as g,mn as _,mt as v,sn as y,t as b}from"./bundle.index.LlT2KVEy.js";function x(){return{codeHtml:`<a-date-input
  v-model="model"
  label="_A_DATE_INPUT_EXAMPLE_BIRTHDAY_"
  help-text="_A_DATE_INPUT_EXAMPLE_BIRTHDAY_HELP_"
  max="2025-12-31"
/>
<pre>{{ model }}</pre>`}}function S(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ADateInput,
} from "aloha-vue";

export default {
  components: {
    ADateInput,
  },
  setup() {
    const model = ref("1990-05-17");

    return {
      model,
    };
  },
};`}}var C={name:`PageDateInputBasic`,components:{ADateInput:v,AlohaExample:m},setup(){let{codeHtml:e}=x(),{codeJs:t}=S();return{codeHtml:e,codeJs:t,model:u(`1990-05-17`)}}},w={class:`a_mt_3`};function T(e,t,n,r,ee,o){let c=d(`a-date-input`),u=d(`aloha-example`);return l(),a(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,description:`_A_DATE_INPUT_BASIC_DESCRIPTION_`},{default:f(()=>[p(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`_A_DATE_INPUT_EXAMPLE_BIRTHDAY_`,"help-text":`_A_DATE_INPUT_EXAMPLE_BIRTHDAY_HELP_`,max:`2025-12-31`},null,8,[`modelValue`]),s(`pre`,w,i(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var E=b(C,[[`render`,T]]);function D(){return{codeHtml:`<a-date-input
  v-model="model"
  range
  label="_A_DATE_INPUT_EXAMPLE_STAY_"
  :months="2"
  :min-days="1"
  :max-days="14"
  show-today
  show-week-numbers
/>
<pre>{{ model }}</pre>`}}function O(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ADateInput,
} from "aloha-vue";

export default {
  components: {
    ADateInput,
  },
  setup() {
    const model = ref(null);

    return {
      model,
    };
  },
};`}}var k={name:`PageDateInputBooking`,components:{ADateInput:v,AlohaExample:m},setup(){let{codeHtml:e}=D(),{codeJs:t}=O();return{codeHtml:e,codeJs:t,model:u(null)}}},A={class:`a_mt_3`};function j(e,t,n,r,ee,o){let c=d(`a-date-input`),u=d(`aloha-example`);return l(),a(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DATE_INPUT_BOOKING_HEADER_`,description:`_A_DATE_INPUT_BOOKING_DESCRIPTION_`},{default:f(()=>[p(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,range:``,label:`_A_DATE_INPUT_EXAMPLE_STAY_`,months:2,"min-days":1,"max-days":14,"show-today":``,"show-week-numbers":``},null,8,[`modelValue`]),s(`pre`,A,i(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var M=b(k,[[`render`,j]]);function te(){return{codeHtml:`<a-date-input
  ref="dateInputRef"
  v-model="model"
  label="_A_DATE_INPUT_EXAMPLE_BIRTHDAY_"
  @open="onOpen"
  @close="onClose"
/>
<a-button
  class="a_btn a_btn_outline_primary"
  text="_A_DATE_INPUT_EXAMPLE_OPEN_CALENDAR_"
  @click="openCalendar"
/>
<pre>{{ events }}</pre>`}}function N(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AButton,
  ADateInput,
} from "aloha-vue";

export default {
  components: {
    AButton,
    ADateInput,
  },
  setup() {
    const dateInputRef = ref(undefined);
    const model = ref(null);
    const events = ref([]);

    const onOpen = ({ index }) => events.value.push(\`open \${ index }\`);
    const onClose = ({ index }) => events.value.push(\`close \${ index }\`);
    // the method open() of the component; the focus goes into the calendar
    const openCalendar = () => dateInputRef.value.open();

    return {
      dateInputRef,
      events,
      model,
      onClose,
      onOpen,
      openCalendar,
    };
  },
};`}}var P={name:`PageDateInputEvents`,components:{AButton:y,ADateInput:v,AlohaExample:m},setup(){let{codeHtml:e}=te(),{codeJs:t}=N(),n=u(void 0),r=u(null),i=u([]);return{codeHtml:e,codeJs:t,dateInputRef:n,events:i,model:r,onClose:({index:e})=>i.value.push(`close ${e}`),onOpen:({index:e})=>i.value.push(`open ${e}`),openCalendar:()=>n.value.open()}}},F={class:`a_mt_3`};function I(e,t,n,r,ee,o){let c=d(`a-date-input`),u=d(`a-button`),m=d(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DATE_INPUT_EVENTS_HEADER_`,description:`_A_DATE_INPUT_EVENTS_DESCRIPTION_`},{default:f(()=>[p(c,{ref:`dateInputRef`,modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`_A_DATE_INPUT_EXAMPLE_BIRTHDAY_`,onOpen:e.onOpen,onClose:e.onClose},null,8,[`modelValue`,`onOpen`,`onClose`]),p(u,{class:`a_mt_3 a_btn a_btn_outline_primary`,text:`_A_DATE_INPUT_EXAMPLE_OPEN_CALENDAR_`,onClick:e.openCalendar},null,8,[`onClick`]),s(`pre`,F,i(e.events),1)]),_:1},8,[`code-html`,`code-js`])}var L=b(P,[[`render`,I]]);function R(){return{codeHtml:`<a-date-input
  v-model="model"
  label="_A_DATE_INPUT_EXAMPLE_DELIVERY_"
>
  <template v-slot:footer>
    <a-translation
      class="a_mb_0 a_mr_auto"
      tag="p"
      text="_A_DATE_INPUT_EXAMPLE_FOOTER_TEXT_"
    />
  </template>
</a-date-input>
<pre>{{ model }}</pre>`}}function z(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ADateInput,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    ADateInput,
    ATranslation,
  },
  setup() {
    const model = ref(null);

    return {
      model,
    };
  },
};`}}var B={name:`PageDateInputFooter`,components:{ADateInput:v,ATranslation:_,AlohaExample:m},setup(){let{codeHtml:e}=R(),{codeJs:t}=z();return{codeHtml:e,codeJs:t,model:u(null)}}},V={class:`a_mt_3`};function H(e,t,n,r,ee,o){let c=d(`a-translation`),u=d(`a-date-input`),m=d(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DATE_INPUT_FOOTER_HEADER_`,description:`_A_DATE_INPUT_FOOTER_DESCRIPTION_`},{default:f(()=>[p(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`_A_DATE_INPUT_EXAMPLE_DELIVERY_`},{footer:f(()=>[p(c,{class:`a_mb_0 a_mr_auto`,tag:`p`,text:`_A_DATE_INPUT_EXAMPLE_FOOTER_TEXT_`})]),_:1},8,[`modelValue`]),s(`pre`,V,i(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var U=b(B,[[`render`,H]]);function W(){return{codeHtml:`<a-form
  v-model="model"
  :data="dataForm"
/>
<pre>{{ model }}</pre>`}}function G(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AForm,
} from "aloha-vue";

export default {
  components: {
    AForm,
  },
  setup() {
    const dataForm = [
      {
        type: "text",
        id: "title",
        label: "_A_FORM_EXAMPLE_TITLE_",
      },
      {
        type: "dateInput",
        id: "period",
        label: "_A_DATE_INPUT_EXAMPLE_TRAVEL_",
        range: true,
        required: true,
      },
    ];
    const model = ref({
      title: "Aloha",
      period: null,
    });

    return {
      dataForm,
      model,
    };
  },
};`}}var K={name:`PageDateInputForm`,components:{AForm:h,AlohaExample:m},setup(){let{codeHtml:e}=W(),{codeJs:t}=G();return{codeHtml:e,codeJs:t,dataForm:[{type:`text`,id:`title`,label:`_A_FORM_EXAMPLE_TITLE_`},{type:`dateInput`,id:`period`,label:`_A_DATE_INPUT_EXAMPLE_TRAVEL_`,range:!0,required:!0}],model:u({title:`Aloha`,period:null})}}},q={class:`a_mt_3`};function J(e,t,n,r,ee,o){let c=d(`a-form`),u=d(`aloha-example`);return l(),a(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DATE_INPUT_FORM_HEADER_`,description:`_A_DATE_INPUT_FORM_DESCRIPTION_`},{default:f(()=>[p(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.dataForm},null,8,[`modelValue`,`data`]),s(`pre`,q,i(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var Y=b(K,[[`render`,J]]);function X(){return{codeHtml:`<a-date-input
  v-model="model"
  inline
  range
  label="_A_DATE_INPUT_EXAMPLE_TRAVEL_"
/>
<pre>{{ model }}</pre>`}}function Z(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ADateInput,
} from "aloha-vue";

export default {
  components: {
    ADateInput,
  },
  setup() {
    const model = ref(null);

    return {
      model,
    };
  },
};`}}var Q={name:`PageDateInputInline`,components:{ADateInput:v,AlohaExample:m},setup(){let{codeHtml:e}=X(),{codeJs:t}=Z();return{codeHtml:e,codeJs:t,model:u(null)}}},ne={class:`a_mt_3`};function re(e,t,n,r,ee,o){let c=d(`a-date-input`),u=d(`aloha-example`);return l(),a(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DATE_INPUT_INLINE_HEADER_`,description:`_A_DATE_INPUT_INLINE_DESCRIPTION_`},{default:f(()=>[p(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,inline:``,range:``,label:`_A_DATE_INPUT_EXAMPLE_TRAVEL_`},null,8,[`modelValue`]),s(`pre`,ne,i(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var ie=b(Q,[[`render`,re]]);function ae(){return{codeHtml:`<a-date-input
  v-model="model"
  label-position="float"
  label="_A_DATE_INPUT_EXAMPLE_FLOAT_"
/>
<a-date-input
  v-model="model"
  label-position="inset"
  label="_A_DATE_INPUT_EXAMPLE_INSET_"
/>
<a-date-input
  v-model="model"
  label-position="top"
  label="_A_DATE_INPUT_EXAMPLE_TOP_"
/>`}}function oe(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ADateInput,
} from "aloha-vue";

export default {
  components: {
    ADateInput,
  },
  setup() {
    const model = ref(null);

    return {
      model,
    };
  },
};`}}var se={name:`PageDateInputLabelPosition`,components:{ADateInput:v,AlohaExample:m},setup(){let{codeHtml:e}=ae(),{codeJs:t}=oe();return{codeHtml:e,codeJs:t,model:u(null)}}};function ce(e,t,n,r,i,ee){let o=d(`a-date-input`),s=d(`aloha-example`);return l(),a(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DATE_INPUT_LABEL_HEADER_`,description:`_A_DATE_INPUT_LABEL_DESCRIPTION_`},{default:f(()=>[p(o,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"label-position":`float`,label:`_A_DATE_INPUT_EXAMPLE_FLOAT_`},null,8,[`modelValue`]),p(o,{class:`a_mt_4`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,"label-position":`inset`,label:`_A_DATE_INPUT_EXAMPLE_INSET_`},null,8,[`modelValue`]),p(o,{class:`a_mt_4`,modelValue:e.model,"onUpdate:modelValue":t[2]||=t=>e.model=t,"label-position":`top`,label:`_A_DATE_INPUT_EXAMPLE_TOP_`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var le=b(se,[[`render`,ce]]);function ue(){return{codeHtml:`<a-date-input
  v-model="model"
  label="_A_DATE_INPUT_EXAMPLE_DELIVERY_"
  :min="min"
  :max="max"
  :is-date-disabled="isWeekend"
/>
<pre>{{ model }}</pre>`}}function de(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ADateInput,
} from "aloha-vue";

export default {
  components: {
    ADateInput,
  },
  setup() {
    const model = ref(null);
    const TODAY = new Date();
    const toIso = date => \`\${ date.getFullYear() }-\${ \`\${ date.getMonth() + 1 }\`.padStart(2, "0") }-\${ \`\${ date.getDate() }\`.padStart(2, "0") }\`;
    const min = toIso(TODAY);
    const max = toIso(new Date(TODAY.getFullYear(), TODAY.getMonth() + 2, TODAY.getDate()));
    // the model is "YYYY-MM-DD"; new Date(year, month - 1, day) gives the day of the week without time zone shifts
    const isWeekend = iso => {
      const [YEAR, MONTH, DAY] = iso.split("-").map(Number);
      const WEEKDAY = new Date(YEAR, MONTH - 1, DAY).getDay();
      return WEEKDAY === 0 || WEEKDAY === 6;
    };

    return {
      isWeekend,
      max,
      min,
      model,
    };
  },
};`}}var fe={name:`PageDateInputLimits`,components:{ADateInput:v,AlohaExample:m},setup(){let{codeHtml:e}=ue(),{codeJs:t}=de(),n=u(null),r=new Date,i=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,a=i(r);return{codeHtml:e,codeJs:t,isWeekend:e=>{let[t,n,r]=e.split(`-`).map(Number),i=new Date(t,n-1,r).getDay();return i===0||i===6},max:i(new Date(r.getFullYear(),r.getMonth()+2,r.getDate())),min:a,model:n}}},pe={class:`a_mt_3`};function me(e,t,n,r,ee,o){let c=d(`a-date-input`),u=d(`aloha-example`);return l(),a(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DATE_INPUT_LIMITS_HEADER_`,description:`_A_DATE_INPUT_LIMITS_DESCRIPTION_`},{default:f(()=>[p(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`_A_DATE_INPUT_EXAMPLE_DELIVERY_`,min:e.min,max:e.max,"is-date-disabled":e.isWeekend},null,8,[`modelValue`,`min`,`max`,`is-date-disabled`]),s(`pre`,pe,i(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var he=b(fe,[[`render`,me]]);function ge(){return{codeHtml:`<a-date-input
  v-model="modelUtc"
  mode="datetime"
  utc
  label="_A_DATE_INPUT_EXAMPLE_UTC_"
/>
<pre>{{ modelUtc }}</pre>
<a-date-input
  v-model="modelTokens"
  model-format="DD.MM.YYYY"
  label="_A_DATE_INPUT_EXAMPLE_TOKENS_"
/>
<pre>{{ modelTokens }}</pre>
<a-date-input
  v-model="modelTimestamp"
  mode="datetime"
  model-format="timestamp"
  label="_A_DATE_INPUT_EXAMPLE_TIMESTAMP_"
/>
<pre>{{ modelTimestamp }}</pre>`}}function _e(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ADateInput,
} from "aloha-vue";

export default {
  components: {
    ADateInput,
  },
  setup() {
    const modelUtc = ref("2025-03-05T13:30:00Z");
    const modelTokens = ref("05.03.2025");
    const modelTimestamp = ref(Date.now());

    return {
      modelTimestamp,
      modelTokens,
      modelUtc,
    };
  },
};`}}var ve={name:`PageDateInputModelFormat`,components:{ADateInput:v,AlohaExample:m},setup(){let{codeHtml:e}=ge(),{codeJs:t}=_e(),n=u(`2025-03-05T13:30:00Z`),r=u(`05.03.2025`);return{codeHtml:e,codeJs:t,modelTimestamp:u(Date.now()),modelTokens:r,modelUtc:n}}},ye={class:`a_mt_3`},be={class:`a_mt_3`},xe={class:`a_mt_3`};function Se(e,t,n,r,ee,o){let c=d(`a-date-input`),u=d(`aloha-example`);return l(),a(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DATE_INPUT_MODEL_FORMAT_HEADER_`,description:`_A_DATE_INPUT_MODEL_FORMAT_DESCRIPTION_`},{default:f(()=>[p(c,{modelValue:e.modelUtc,"onUpdate:modelValue":t[0]||=t=>e.modelUtc=t,mode:`datetime`,utc:``,label:`_A_DATE_INPUT_EXAMPLE_UTC_`},null,8,[`modelValue`]),s(`pre`,ye,i(e.modelUtc),1),p(c,{class:`a_mt_4`,modelValue:e.modelTokens,"onUpdate:modelValue":t[1]||=t=>e.modelTokens=t,"model-format":`DD.MM.YYYY`,label:`_A_DATE_INPUT_EXAMPLE_TOKENS_`},null,8,[`modelValue`]),s(`pre`,be,i(e.modelTokens),1),p(c,{class:`a_mt_4`,modelValue:e.modelTimestamp,"onUpdate:modelValue":t[2]||=t=>e.modelTimestamp=t,mode:`datetime`,"model-format":`timestamp`,label:`_A_DATE_INPUT_EXAMPLE_TIMESTAMP_`},null,8,[`modelValue`]),s(`pre`,xe,i(e.modelTimestamp),1)]),_:1},8,[`code-html`,`code-js`])}var Ce=b(ve,[[`render`,Se]]);function we(){return{codeHtml:`<a-date-input
  v-model="modelMonth"
  mode="month"
  label="_A_DATE_INPUT_EXAMPLE_BILLING_MONTH_"
/>
<pre>{{ modelMonth }}</pre>
<a-date-input
  v-model="modelYear"
  mode="year"
  label="_A_DATE_INPUT_EXAMPLE_CONSTRUCTION_YEAR_"
  max="2030"
/>
<pre>{{ modelYear }}</pre>`}}function Te(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ADateInput,
} from "aloha-vue";

export default {
  components: {
    ADateInput,
  },
  setup() {
    const modelMonth = ref("2025-03");
    const modelYear = ref("1998");

    return {
      modelMonth,
      modelYear,
    };
  },
};`}}var Ee={name:`PageDateInputMonth`,components:{ADateInput:v,AlohaExample:m},setup(){let{codeHtml:e}=we(),{codeJs:t}=Te();return{codeHtml:e,codeJs:t,modelMonth:u(`2025-03`),modelYear:u(`1998`)}}},De={class:`a_mt_3`},Oe={class:`a_mt_3`};function ke(e,t,n,r,ee,o){let c=d(`a-date-input`),u=d(`aloha-example`);return l(),a(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DATE_INPUT_MONTH_HEADER_`,description:`_A_DATE_INPUT_MONTH_DESCRIPTION_`},{default:f(()=>[p(c,{modelValue:e.modelMonth,"onUpdate:modelValue":t[0]||=t=>e.modelMonth=t,mode:`month`,label:`_A_DATE_INPUT_EXAMPLE_BILLING_MONTH_`},null,8,[`modelValue`]),s(`pre`,De,i(e.modelMonth),1),p(c,{class:`a_mt_4`,modelValue:e.modelYear,"onUpdate:modelValue":t[1]||=t=>e.modelYear=t,mode:`year`,label:`_A_DATE_INPUT_EXAMPLE_CONSTRUCTION_YEAR_`,max:`2030`},null,8,[`modelValue`]),s(`pre`,Oe,i(e.modelYear),1)]),_:1},8,[`code-html`,`code-js`])}var Ae=b(Ee,[[`render`,ke]]);function je(){return{codeHtml:`<a-date-input
  v-model="model"
  mode="quarter"
  range
  label="_A_DATE_INPUT_EXAMPLE_QUARTER_"
/>
<pre>{{ model }}</pre>`}}function Me(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ADateInput,
} from "aloha-vue";

export default {
  components: {
    ADateInput,
  },
  setup() {
    const model = ref(["2025-Q1", "2025-Q2"]);

    return {
      model,
    };
  },
};`}}var Ne={name:`PageDateInputQuarter`,components:{ADateInput:v,AlohaExample:m},setup(){let{codeHtml:e}=je(),{codeJs:t}=Me();return{codeHtml:e,codeJs:t,model:u([`2025-Q1`,`2025-Q2`])}}},Pe={class:`a_mt_3`};function Fe(e,t,n,r,ee,o){let c=d(`a-date-input`),u=d(`aloha-example`);return l(),a(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DATE_INPUT_QUARTER_HEADER_`,description:`_A_DATE_INPUT_QUARTER_DESCRIPTION_`},{default:f(()=>[p(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,mode:`quarter`,range:``,label:`_A_DATE_INPUT_EXAMPLE_QUARTER_`},null,8,[`modelValue`]),s(`pre`,Pe,i(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var Ie=b(Ne,[[`render`,Fe]]);function Le(){return{codeHtml:`<a-date-input
  v-model="modelRange"
  range
  label="_A_DATE_INPUT_EXAMPLE_TRAVEL_"
/>
<pre>{{ modelRange }}</pre>
<a-date-input
  v-model="modelRangeDatetime"
  range
  mode="datetime"
  label="_A_DATE_INPUT_EXAMPLE_EVENT_"
  :default-time="['00:00', '23:59']"
/>
<pre>{{ modelRangeDatetime }}</pre>`}}function Re(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ADateInput,
} from "aloha-vue";

export default {
  components: {
    ADateInput,
  },
  setup() {
    const modelRange = ref(["2025-07-01", "2025-07-14"]);
    const modelRangeDatetime = ref(null);

    return {
      modelRange,
      modelRangeDatetime,
    };
  },
};`}}var ze={name:`PageDateInputRange`,components:{ADateInput:v,AlohaExample:m},setup(){let{codeHtml:e}=Le(),{codeJs:t}=Re();return{codeHtml:e,codeJs:t,modelRange:u([`2025-07-01`,`2025-07-14`]),modelRangeDatetime:u(null)}}},Be={class:`a_mt_3`},Ve={class:`a_mt_3`};function He(e,t,n,r,ee,o){let c=d(`a-date-input`),u=d(`aloha-example`);return l(),a(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DATE_INPUT_RANGE_HEADER_`,description:`_A_DATE_INPUT_RANGE_DESCRIPTION_`},{default:f(()=>[p(c,{modelValue:e.modelRange,"onUpdate:modelValue":t[0]||=t=>e.modelRange=t,range:``,label:`_A_DATE_INPUT_EXAMPLE_TRAVEL_`},null,8,[`modelValue`]),s(`pre`,Be,i(e.modelRange),1),p(c,{class:`a_mt_4`,modelValue:e.modelRangeDatetime,"onUpdate:modelValue":t[1]||=t=>e.modelRangeDatetime=t,range:``,mode:`datetime`,label:`_A_DATE_INPUT_EXAMPLE_EVENT_`,"default-time":[`00:00`,`23:59`]},null,8,[`modelValue`]),s(`pre`,Ve,i(e.modelRangeDatetime),1)]),_:1},8,[`code-html`,`code-js`])}var Ue=b(ze,[[`render`,He]]);function We(){return{codeHtml:`<a-date-input
  v-model="model"
  range
  clearable
  label="_A_DATE_INPUT_EXAMPLE_REPORT_PERIOD_"
  :shortcuts="shortcuts"
/>
<pre>{{ model }}</pre>`}}function Ge(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ADateInput,
} from "aloha-vue";

export default {
  components: {
    ADateInput,
  },
  setup() {
    const toIso = date => \`\${ date.getFullYear() }-\${ \`\${ date.getMonth() + 1 }\`.padStart(2, "0") }-\${ \`\${ date.getDate() }\`.padStart(2, "0") }\`;
    // functions: the dates are calculated when the button is clicked
    const shortcuts = [
      {
        label: "_A_DATE_INPUT_EXAMPLE_LAST_7_DAYS_",
        value: () => {
          const TODAY = new Date();
          return [toIso(new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() - 6)), toIso(TODAY)];
        },
      },
      {
        label: "_A_DATE_INPUT_EXAMPLE_THIS_MONTH_",
        value: () => {
          const TODAY = new Date();
          return [toIso(new Date(TODAY.getFullYear(), TODAY.getMonth(), 1)), toIso(new Date(TODAY.getFullYear(), TODAY.getMonth() + 1, 0))];
        },
      },
      {
        label: "_A_DATE_INPUT_EXAMPLE_LAST_MONTH_",
        value: () => {
          const TODAY = new Date();
          return [toIso(new Date(TODAY.getFullYear(), TODAY.getMonth() - 1, 1)), toIso(new Date(TODAY.getFullYear(), TODAY.getMonth(), 0))];
        },
      },
    ];
    const model = ref(null);

    return {
      model,
      shortcuts,
    };
  },
};`}}var Ke={name:`PageDateInputShortcuts`,components:{ADateInput:v,AlohaExample:m},setup(){let{codeHtml:e}=We(),{codeJs:t}=Ge(),n=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`;return{codeHtml:e,codeJs:t,model:u(null),shortcuts:[{label:`_A_DATE_INPUT_EXAMPLE_LAST_7_DAYS_`,value:()=>{let e=new Date;return[n(new Date(e.getFullYear(),e.getMonth(),e.getDate()-6)),n(e)]}},{label:`_A_DATE_INPUT_EXAMPLE_THIS_MONTH_`,value:()=>{let e=new Date;return[n(new Date(e.getFullYear(),e.getMonth(),1)),n(new Date(e.getFullYear(),e.getMonth()+1,0))]}},{label:`_A_DATE_INPUT_EXAMPLE_LAST_MONTH_`,value:()=>{let e=new Date;return[n(new Date(e.getFullYear(),e.getMonth()-1,1)),n(new Date(e.getFullYear(),e.getMonth(),0))]}}]}}},qe={class:`a_mt_3`};function Je(e,t,n,r,ee,o){let c=d(`a-date-input`),u=d(`aloha-example`);return l(),a(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DATE_INPUT_SHORTCUTS_HEADER_`,description:`_A_DATE_INPUT_SHORTCUTS_DESCRIPTION_`},{default:f(()=>[p(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,range:``,clearable:``,label:`_A_DATE_INPUT_EXAMPLE_REPORT_PERIOD_`,shortcuts:e.shortcuts},null,8,[`modelValue`,`shortcuts`]),s(`pre`,qe,i(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var Ye=b(Ke,[[`render`,Je]]);function Xe(){return{codeHtml:`<a-date-input
  v-model="model"
  label="_A_DATE_INPUT_EXAMPLE_VACATION_"
>
  <template v-slot:day="{ date }">
    <template v-if="holidays.includes(date)">
      <!-- a mark for the eyes and a text for screen readers -->
      <span class="a_color_danger" aria-hidden="true">•</span>
      <a-translation class="a_sr_only" tag="span" text="_A_DATE_INPUT_EXAMPLE_HOLIDAY_" />
    </template>
  </template>
</a-date-input>
<pre>{{ model }}</pre>`}}function Ze(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ADateInput,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    ADateInput,
    ATranslation,
  },
  setup() {
    const YEAR = new Date().getFullYear();
    const holidays = [\`\${ YEAR }-12-24\`, \`\${ YEAR }-12-25\`, \`\${ YEAR }-12-26\`, \`\${ YEAR }-12-31\`];
    const model = ref(\`\${ YEAR }-12-01\`);

    return {
      holidays,
      model,
    };
  },
};`}}var Qe={name:`PageDateInputSlot`,components:{ADateInput:v,ATranslation:_,AlohaExample:m},setup(){let{codeHtml:e}=Xe(),{codeJs:t}=Ze(),n=new Date().getFullYear();return{codeHtml:e,codeJs:t,holidays:[`${n}-12-24`,`${n}-12-25`,`${n}-12-26`,`${n}-12-31`],model:u(`${n}-12-01`)}}},$e={class:`a_mt_3`};function et(e,t,n,r,u,m){let h=d(`a-translation`),g=d(`a-date-input`),_=d(`aloha-example`);return l(),a(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DATE_INPUT_SLOT_HEADER_`,description:`_A_DATE_INPUT_SLOT_DESCRIPTION_`},{default:f(()=>[p(g,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`_A_DATE_INPUT_EXAMPLE_VACATION_`},{day:f(({date:n})=>[e.holidays.includes(n)?(l(),c(ee,{key:0},[t[1]||=s(`span`,{class:`a_color_danger`,"aria-hidden":`true`},`•`,-1),p(h,{class:`a_sr_only`,tag:`span`,text:`_A_DATE_INPUT_EXAMPLE_HOLIDAY_`})],64)):o(``,!0)]),_:1},8,[`modelValue`]),s(`pre`,$e,i(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var tt=b(Qe,[[`render`,et]]);function nt(){return{codeHtml:`<a-date-input
  v-model="modelDatetime"
  mode="datetime"
  label="_A_DATE_INPUT_EXAMPLE_APPOINTMENT_"
/>
<pre>{{ modelDatetime }}</pre>
<a-date-input
  v-model="modelTime"
  mode="time"
  label="_A_DATE_INPUT_EXAMPLE_START_TIME_"
/>
<pre>{{ modelTime }}</pre>`}}function rt(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ADateInput,
} from "aloha-vue";

export default {
  components: {
    ADateInput,
  },
  setup() {
    const modelDatetime = ref("2025-03-05T14:30");
    const modelTime = ref("09:00");

    return {
      modelDatetime,
      modelTime,
    };
  },
};`}}var it={name:`PageDateInputTime`,components:{ADateInput:v,AlohaExample:m},setup(){let{codeHtml:e}=nt(),{codeJs:t}=rt();return{codeHtml:e,codeJs:t,modelDatetime:u(`2025-03-05T14:30`),modelTime:u(`09:00`)}}},at={class:`a_mt_3`},ot={class:`a_mt_3`};function st(e,t,n,r,ee,o){let c=d(`a-date-input`),u=d(`aloha-example`);return l(),a(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DATE_INPUT_TIME_HEADER_`,description:`_A_DATE_INPUT_TIME_DESCRIPTION_`},{default:f(()=>[p(c,{modelValue:e.modelDatetime,"onUpdate:modelValue":t[0]||=t=>e.modelDatetime=t,mode:`datetime`,label:`_A_DATE_INPUT_EXAMPLE_APPOINTMENT_`},null,8,[`modelValue`]),s(`pre`,at,i(e.modelDatetime),1),p(c,{class:`a_mt_4`,modelValue:e.modelTime,"onUpdate:modelValue":t[1]||=t=>e.modelTime=t,mode:`time`,label:`_A_DATE_INPUT_EXAMPLE_START_TIME_`},null,8,[`modelValue`]),s(`pre`,ot,i(e.modelTime),1)]),_:1},8,[`code-html`,`code-js`])}var ct=b(it,[[`render`,st]]);function lt(){return{codeHtml:`<a-date-input
  v-model="modelAppointment"
  mode="datetime"
  label="_A_DATE_INPUT_EXAMPLE_APPOINTMENT_"
  :minute-step="15"
  min-time="08:00"
  max-time="18:00"
/>
<pre>{{ modelAppointment }}</pre>
<a-date-input
  v-model="modelMeasurement"
  mode="time"
  with-seconds
  label="_A_DATE_INPUT_EXAMPLE_MEASUREMENT_"
/>
<pre>{{ modelMeasurement }}</pre>`}}function ut(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ADateInput,
} from "aloha-vue";

export default {
  components: {
    ADateInput,
  },
  setup() {
    const modelAppointment = ref("2025-03-05T09:30");
    const modelMeasurement = ref("14:30:15");

    return {
      modelAppointment,
      modelMeasurement,
    };
  },
};`}}var dt={name:`PageDateInputTimeRules`,components:{ADateInput:v,AlohaExample:m},setup(){let{codeHtml:e}=lt(),{codeJs:t}=ut();return{codeHtml:e,codeJs:t,modelAppointment:u(`2025-03-05T09:30`),modelMeasurement:u(`14:30:15`)}}},ft={class:`a_mt_3`},pt={class:`a_mt_3`};function mt(e,t,n,r,ee,o){let c=d(`a-date-input`),u=d(`aloha-example`);return l(),a(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DATE_INPUT_TIME_RULES_HEADER_`,description:`_A_DATE_INPUT_TIME_RULES_DESCRIPTION_`},{default:f(()=>[p(c,{modelValue:e.modelAppointment,"onUpdate:modelValue":t[0]||=t=>e.modelAppointment=t,mode:`datetime`,label:`_A_DATE_INPUT_EXAMPLE_APPOINTMENT_`,"minute-step":15,"min-time":`08:00`,"max-time":`18:00`},null,8,[`modelValue`]),s(`pre`,ft,i(e.modelAppointment),1),p(c,{class:`a_mt_4`,modelValue:e.modelMeasurement,"onUpdate:modelValue":t[1]||=t=>e.modelMeasurement=t,mode:`time`,"with-seconds":``,label:`_A_DATE_INPUT_EXAMPLE_MEASUREMENT_`},null,8,[`modelValue`]),s(`pre`,pt,i(e.modelMeasurement),1)]),_:1},8,[`code-html`,`code-js`])}var ht=b(dt,[[`render`,mt]]);function gt(){return{codeHtml:`<a-date-input
  v-model="model"
  mode="datetime"
  auto-format
  show-time-list
  label="_A_DATE_INPUT_EXAMPLE_PICKUP_"
  :minute-step="30"
  min-time="08:00"
  max-time="18:00"
  :is-time-disabled="isLunch"
/>
<pre>{{ model }}</pre>`}}function _t(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ADateInput,
} from "aloha-vue";

export default {
  components: {
    ADateInput,
  },
  setup() {
    const model = ref(null);
    // time "HH:mm", date "YYYY-MM-DD" or null
    const isLunch = time => time >= "12:00" && time < "13:00";

    return {
      isLunch,
      model,
    };
  },
};`}}var vt={name:`PageDateInputTyping`,components:{ADateInput:v,AlohaExample:m},setup(){let{codeHtml:e}=gt(),{codeJs:t}=_t();return{codeHtml:e,codeJs:t,isLunch:e=>e>=`12:00`&&e<`13:00`,model:u(null)}}},yt={class:`a_mt_3`};function bt(e,t,n,r,ee,o){let c=d(`a-date-input`),u=d(`aloha-example`);return l(),a(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DATE_INPUT_TYPING_HEADER_`,description:`_A_DATE_INPUT_TYPING_DESCRIPTION_`},{default:f(()=>[p(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,mode:`datetime`,"auto-format":``,"show-time-list":``,label:`_A_DATE_INPUT_EXAMPLE_PICKUP_`,"minute-step":30,"min-time":`08:00`,"max-time":`18:00`,"is-time-disabled":e.isLunch},null,8,[`modelValue`,`is-time-disabled`]),s(`pre`,yt,i(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var xt=b(vt,[[`render`,bt]]);function St(){return{codeHtml:`<a-date-input
  v-model="model"
  mode="week"
  label="_A_DATE_INPUT_EXAMPLE_WEEK_"
  show-today
/>
<pre>{{ model }}</pre>`}}function Ct(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ADateInput,
} from "aloha-vue";

export default {
  components: {
    ADateInput,
  },
  setup() {
    const model = ref("2025-W10");

    return {
      model,
    };
  },
};`}}var wt={name:`PageDateInputWeek`,components:{ADateInput:v,AlohaExample:m},setup(){let{codeHtml:e}=St(),{codeJs:t}=Ct();return{codeHtml:e,codeJs:t,model:u(`2025-W10`)}}},Tt={class:`a_mt_3`};function Et(e,t,n,r,ee,o){let c=d(`a-date-input`),u=d(`aloha-example`);return l(),a(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_DATE_INPUT_WEEK_HEADER_`,description:`_A_DATE_INPUT_WEEK_DESCRIPTION_`},{default:f(()=>[p(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,mode:`week`,label:`_A_DATE_INPUT_EXAMPLE_WEEK_`,"show-today":``},null,8,[`modelValue`]),s(`pre`,Tt,i(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var $=b(wt,[[`render`,Et]]);function Dt(){return{dataEvents:[{name:`close`,description:`_A_DATE_INPUT_EVENTS_CLOSE_DESCRIPTION_`,type:`Function`},{name:`open`,description:`_A_DATE_INPUT_EVENTS_OPEN_DESCRIPTION_`,type:`Function`},{name:`update:modelValue`,description:`_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_`,type:`Function`}]}}function Ot(){let e=r(()=>g({placeholder:`_A_DATE_INPUT_COMPONENT_NAME_`}));return{pageTitle:r(()=>`ADateInput${e.value?` (${e.value})`:``}`)}}var kt=[[`always-translate`,`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,`Boolean`,void 0],[`change`,`_A_UI_PROPS_CHANGE_DESCRIPTION_`,`Function`,`() => {}`],[`dependencies`,`_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_`,`Array / Object`,void 0],[`disabled`,`_A_UI_PROPS_DISABLED_DESCRIPTION_`,`Boolean`,void 0],[`errors`,`_A_UI_PROPS_ERRORS_DESCRIPTION_`,`String / Array`,void 0],[`exclude-render-attributes`,`_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_`,`Array`,`[]`],[`extra`,`_A_TRANSLATION_PROPS_EXTRA_DESCRIPTION_`,`Object`,void 0],[`help-text`,`_A_UI_PROPS_HELP_TEXT_DESCRIPTION_`,`String`,void 0],[`html-id`,`_A_UI_PROPS_HTML_ID_DESCRIPTION_`,`String`,void 0],[`id`,`_A_UI_PROPS_ID_DESCRIPTION_`,`String / Number`,`uniqueId("a_date_input_")`],[`id-prefix`,`_A_UI_PROPS_ID_PREFIX_DESCRIPTION_`,`String`,void 0],[`input-attributes`,`_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_`,`Object`,`{}`],[`input-class`,`_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_`,`String / Object`,void 0],[`is-hide`,`_A_UI_PROPS_IS_HIDE_DESCRIPTION_`,`Boolean`,void 0],[`is-render`,`_A_UI_PROPS_IS_RENDER_DESCRIPTION_`,`Boolean`,`true`],[`label`,`_A_UI_PROPS_LABEL_DESCRIPTION_`,`String / Number`,void 0],[`label-class`,`_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_`,`String / Object`,void 0],[`label-description`,`_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_`,`String`,void 0],[`label-screen-reader`,`_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_`,`String / Number`,void 0],[`model-dependencies`,`_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_`,`Object`,`{}`],[`model-undefined`,`_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_`,`Array / Object / String`,`null`],[`model-value`,`_A_DATE_INPUT_PROPS_MODEL_VALUE_DESCRIPTION_`,`String / Array / Number / Date`,void 0],[`placeholder`,`_A_UI_PROPS_PLACEHOLDER_DESCRIPTION_`,`String`,void 0],[`readonly`,`_A_UI_PROPS_READONLY_DESCRIPTION_`,`Boolean`,void 0],[`readonly-default`,`_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_`,`String`,`""`],[`required`,`_A_UI_PROPS_REQUIRED_DESCRIPTION_`,`Boolean`,`false`]],At=[[`auto-format`,`_A_DATE_INPUT_PROPS_AUTO_FORMAT_DESCRIPTION_`,`Boolean`,`false`],[`in-body`,`_A_DATE_INPUT_PROPS_IN_BODY_DESCRIPTION_`,`Boolean`,`true`],[`inline`,`_A_DATE_INPUT_PROPS_INLINE_DESCRIPTION_`,`Boolean`,`false`],[`is-close-by-button-invisible-in-viewport`,`_A_GLOBAL_PROPS_IS_CLOSE_BY_BUTTON_INVISIBLE_IN_VIEWPORT_DESCRIPTION_`,`Boolean`,`true`],[`is-time-disabled`,`_A_DATE_INPUT_PROPS_IS_TIME_DISABLED_DESCRIPTION_`,`Function`,void 0],[`popper-container-id`,`_A_DATE_INPUT_PROPS_POPPER_CONTAINER_ID_DESCRIPTION_`,`String`,`"a_date_input_container"`],[`show-time-list`,`_A_DATE_INPUT_PROPS_SHOW_TIME_LIST_DESCRIPTION_`,`Boolean`,`false`],[`is-label-float`,`_A_UI_PROPS_IS_LABEL_FLOAT_DESCRIPTION_`,`Boolean`,void 0],[`label-position`,`_A_UI_PROPS_LABEL_POSITION_DESCRIPTION_`,`String`,void 0],[`max-days`,`_A_DATE_INPUT_PROPS_MAX_DAYS_DESCRIPTION_`,`Number`,void 0],[`max-time`,`_A_DATE_INPUT_PROPS_MAX_TIME_DESCRIPTION_`,`String`,void 0],[`min-days`,`_A_DATE_INPUT_PROPS_MIN_DAYS_DESCRIPTION_`,`Number`,void 0],[`min-time`,`_A_DATE_INPUT_PROPS_MIN_TIME_DESCRIPTION_`,`String`,void 0],[`minute-step`,`_A_DATE_INPUT_PROPS_MINUTE_STEP_DESCRIPTION_`,`Number`,`1`],[`model-format`,`_A_DATE_INPUT_PROPS_MODEL_FORMAT_DESCRIPTION_`,`String`,`"iso"`],[`months`,`_A_DATE_INPUT_PROPS_MONTHS_DESCRIPTION_`,`Number`,`1`],[`show-today`,`_A_DATE_INPUT_PROPS_SHOW_TODAY_DESCRIPTION_`,`Boolean`,`false`],[`show-week-numbers`,`_A_DATE_INPUT_PROPS_SHOW_WEEK_NUMBERS_DESCRIPTION_`,`Boolean`,`false`],[`utc`,`_A_DATE_INPUT_PROPS_UTC_DESCRIPTION_`,`Boolean`,`false`],[`with-seconds`,`_A_DATE_INPUT_PROPS_WITH_SECONDS_DESCRIPTION_`,`Boolean`,`false`],[`clearable`,`_A_DATE_INPUT_PROPS_CLEARABLE_DESCRIPTION_`,`Boolean`,`false`],[`default-time`,`_A_DATE_INPUT_PROPS_DEFAULT_TIME_DESCRIPTION_`,`String / Array`,void 0],[`first-day-of-week`,`_A_DATE_INPUT_PROPS_FIRST_DAY_OF_WEEK_DESCRIPTION_`,`Number`,void 0],[`is-date-disabled`,`_A_DATE_INPUT_PROPS_IS_DATE_DISABLED_DESCRIPTION_`,`Function`,void 0],[`locale`,`_A_DATE_INPUT_PROPS_LOCALE_DESCRIPTION_`,`String`,void 0],[`max`,`_A_DATE_INPUT_PROPS_MAX_DESCRIPTION_`,`String`,void 0],[`min`,`_A_DATE_INPUT_PROPS_MIN_DESCRIPTION_`,`String`,void 0],[`mode`,`_A_DATE_INPUT_PROPS_MODE_DESCRIPTION_`,`String`,`"date"`],[`range`,`_A_DATE_INPUT_PROPS_RANGE_DESCRIPTION_`,`Boolean`,`false`],[`shortcuts`,`_A_DATE_INPUT_PROPS_SHORTCUTS_DESCRIPTION_`,`Array`,`[]`],[`type`,`_A_DATE_INPUT_PROPS_TYPE_DESCRIPTION_`,`String`,`"dateInput"`]];function jt(){return{dataMethods:[{name:`close`,description:`_A_DATE_INPUT_METHODS_CLOSE_DESCRIPTION_`},{name:`focus`,description:`_A_DATE_INPUT_METHODS_FOCUS_DESCRIPTION_`},{name:`open`,description:`_A_DATE_INPUT_METHODS_OPEN_DESCRIPTION_`}],dataProps:[...kt,...At].map(([e,t,n,r])=>({name:e,description:t,type:n,default:r,required:!1})).sort((e,t)=>e.name.localeCompare(t.name)),dataTranslate:`_A_DATE_INPUT_CHANGE_DATE_._A_DATE_INPUT_CHOOSE_DATE_._A_DATE_INPUT_CLOSE_._A_DATE_INPUT_DATE_._A_DATE_INPUT_DAY_LETTERS_._A_DATE_INPUT_END_DATE_._A_DATE_INPUT_END_TIME_._A_DATE_INPUT_ERROR_DATE_._A_DATE_INPUT_ERROR_DISABLED_._A_DATE_INPUT_ERROR_MAX_._A_DATE_INPUT_ERROR_MIN_._A_DATE_INPUT_ERROR_RANGE_._A_DATE_INPUT_ERROR_TIME_._A_DATE_INPUT_FORMAT_._A_DATE_INPUT_FROM_._A_DATE_INPUT_KEYBOARD_HINT_._A_DATE_INPUT_MONTH_LETTERS_._A_DATE_INPUT_NEXT_MONTH_._A_DATE_INPUT_NEXT_YEAR_._A_DATE_INPUT_PREV_MONTH_._A_DATE_INPUT_PREV_YEAR_._A_DATE_INPUT_START_DATE_._A_DATE_INPUT_START_TIME_._A_DATE_INPUT_TIME_._A_DATE_INPUT_TIME_LETTERS_._A_DATE_INPUT_TO_._A_DATE_INPUT_YEAR_LETTERS_`.split(`.`)}}function Mt(){return{dataSlots:[{name:`day`,description:`_A_DATE_INPUT_SLOTS_DAY_DESCRIPTION_`},{name:`footer`,description:`_A_DATE_INPUT_SLOTS_FOOTER_DESCRIPTION_`}]}}var Nt={name:`PageDateInput`,components:{AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:_,PageDateInputBasic:E,PageDateInputLimits:he,PageDateInputTime:ct,PageDateInputMonth:Ae,PageDateInputRange:Ue,PageDateInputShortcuts:Ye,PageDateInputSlot:tt,PageDateInputTimeRules:ht,PageDateInputBooking:M,PageDateInputWeek:$,PageDateInputModelFormat:Ce,PageDateInputEvents:L,PageDateInputLabelPosition:le,PageDateInputTyping:xt,PageDateInputInline:ie,PageDateInputQuarter:Ie,PageDateInputFooter:U,PageDateInputForm:Y},setup(){let{dataEvents:e}=Dt(),{pageTitle:t}=Ot(),{dataMethods:n,dataProps:r,dataTranslate:i}=jt(),{dataSlots:a}=Mt();return{dataEvents:e,dataMethods:n,dataProps:r,dataSlots:a,dataTranslate:i,pageTitle:t}}};function Pt(e,t,n,r,i,ee){let o=d(`a-translation`),s=d(`page-date-input-basic`),c=d(`page-date-input-limits`),u=d(`page-date-input-time`),m=d(`page-date-input-range`),h=d(`page-date-input-shortcuts`),g=d(`page-date-input-month`),_=d(`page-date-input-slot`),v=d(`page-date-input-time-rules`),y=d(`page-date-input-booking`),b=d(`page-date-input-week`),x=d(`page-date-input-model-format`),S=d(`page-date-input-events`),C=d(`page-date-input-label-position`),w=d(`page-date-input-typing`),T=d(`page-date-input-inline`),E=d(`page-date-input-quarter`),D=d(`page-date-input-footer`),O=d(`page-date-input-form`),k=d(`aloha-table-props`),A=d(`aloha-table-translate`),j=d(`aloha-table-css-vars`),M=d(`aloha-page`);return l(),a(M,{"page-title":e.pageTitle},{body:f(()=>[p(o,{tag:`p`,html:`_A_DATE_INPUT_COMPONENT_DESCRIPTION_`}),p(o,{class:`a_mb_4`,tag:`div`,html:`_A_DATE_INPUT_ACCESSIBILITY_DESCRIPTION_`}),p(s),p(c),p(u),p(m),p(h),p(g),p(_),p(v),p(y),p(b),p(x),p(S),p(C),p(w),p(T),p(E),p(D),p(O),p(k,{data:e.dataProps},null,8,[`data`]),p(k,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`]),p(k,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),p(k,{"table-label":`Methods`,data:e.dataMethods,columns:[`name`,`description`]},null,8,[`data`]),p(A,{data:e.dataTranslate},null,8,[`data`]),p(j,{files:`components/ui/ADateInput`})]),_:1},8,[`page-title`])}var Ft=b(Nt,[[`render`,Pt]]);export{Ft as default};