import{t as e}from"./chunk.AlohaPage.BX4p4AoC.js";import{t}from"./chunk.AlohaTableProps.sRecubwD.js";import{t as n}from"./chunk.AlohaTableTranslate.msf_ftSR.js";import{$t as r,Bt as i,Ct as a,Ft as o,It as s,Lt as c,Mt as l,Pt as u,Rt as d,Zt as f,an as p,pn as m,sn as h,tn as g,zt as _}from"./chunk.vendor.C763F6L5.js";import{t as v}from"./chunk.AlohaExample.Dv0nVKNW.js";import{Ut as y,Wt as b,Yt as x,h as S,it as C}from"./bundle.index.TygFUoMz.js";import{t as w}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function ee(){return{codeHtml:`<a-calendar
  v-model="model"
  :events="events"
/>
<p>
  <a-translation
    tag="strong"
    text="_A_CALENDAR_SELECTED_"
  />: {{ model }}
</p>`}}function T(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ACalendar,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    ACalendar,
    ATranslation,
  },
  setup() {
    const events = ref([
      { id: 1, label: "Team meeting", start: "2026-03-03T10:00:00", end: "2026-03-03T11:00:00", color: "primary" },
      { id: 2, label: "Vacation", start: "2026-03-08", end: "2026-03-14", color: "success", isAllDay: true },
      { id: 3, label: "Workshop", start: "2026-03-12T09:00:00", end: "2026-03-13T17:00:00", color: "info" },
      { id: 4, label: "Birthday", start: "2026-03-20", color: "#8e44ad", isAllDay: true },
    ]);
    const model = ref(undefined);

    return {
      events,
      model,
    };
  },
};`}}var E=`YYYY-MM-DD[T]HH:mm:ss.SSSZ`;function D(){let e=a().startOf(`month`),t=(t,n)=>{let r=e.clone().add(t-1,`days`);if(!n)return r.format(`YYYY-MM-DD`);let[i,a]=n.split(`:`);return r.hours(+i).minutes(+a).format(E)};return[{id:1,label:`Team meeting`,start:t(3,`10:00`),end:t(3,`11:00`),color:`primary`},{id:2,label:`Vacation`,start:t(8),end:t(14),color:`success`,isAllDay:!0},{id:3,label:`Dentist`,start:t(12,`08:30`),end:t(12,`09:15`),color:`warning`},{id:4,label:`Workshop`,start:t(12,`09:00`),end:t(13,`17:00`),color:`info`},{id:5,label:`Sprint review`,start:t(12,`14:00`),end:t(12,`15:00`),color:`secondary`},{id:6,label:`Release`,start:t(12,`16:00`),end:t(12,`16:30`),color:`danger`},{id:7,label:`Birthday`,start:t(20),color:`#8e44ad`,isAllDay:!0},{id:8,label:`Conference`,start:t(26),end:t(33),color:`tertiary`,isAllDay:!0}]}var O={name:`PageCalendarBasic`,components:{ACalendar:y,AlohaExample:v,ATranslation:C},setup(){let{codeHtml:e}=ee(),{codeJs:t}=T();return{codeHtml:e,codeJs:t,events:h(D()),model:h(void 0)}}},k={class:`a_mt_3 a_mb_0`};function A(e,t,n,r,a,c){let l=g(`a-calendar`),u=g(`a-translation`),d=g(`aloha-example`);return f(),s(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,description:`_A_CALENDAR_BASIC_DESCRIPTION_`,props:[`events`,`model-value`]},{default:p(()=>[i(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,events:e.events},null,8,[`modelValue`,`events`]),o(`p`,k,[i(u,{tag:`strong`,text:`_A_CALENDAR_SELECTED_`}),_(`: `+m(e.model),1)])]),_:1},8,[`code-html`,`code-js`])}var j=w(O,[[`render`,A]]),M=`YYYY-MM-DD[T]HH:mm:ss.SSSZ`;function N(){let e=h(D().slice(0,3)),t=h({}),n=h(void 0),r=h(!1),i=[{type:`text`,id:`label`,label:`_A_CALENDAR_CREATE_LABEL_`,required:!0,classColumn:`a_column a_column_12`},{type:`datetime`,id:`start`,label:`_A_CALENDAR_CREATE_START_`},{type:`datetime`,id:`end`,label:`_A_CALENDAR_CREATE_END_`},{type:`select`,id:`color`,label:`_A_CALENDAR_CREATE_COLOR_`,data:[`primary`,`secondary`,`tertiary`,`success`,`info`,`warning`,`danger`,`gray`].map(e=>({label:e,value:e}))},{type:`oneCheckbox`,id:`isAllDay`,label:`_A_CALENDAR_CREATE_ALL_DAY_`}],o=u(()=>n.value===void 0?`_A_CALENDAR_CREATE_MODAL_NEW_`:`_A_CALENDAR_CREATE_MODAL_EDIT_`),s=u(()=>!t.value.label||!t.value.start),c=e=>{let i=a(e).hours(9).minutes(0);n.value=void 0,t.value={label:``,start:i.format(M),end:i.clone().add(1,`hour`).format(M),color:`primary`,isAllDay:!1},r.value=!0},l=({date:e})=>{c(e)},d=()=>{c(new Date)},f=({event:e})=>{n.value=e.id,t.value={...e},r.value=!0},p=()=>{r.value=!1};return{closeModal:p,dataForm:i,events:e,headerText:o,isModalVisible:r,isSaveDisabled:s,model:t,onDayClick:l,onEventClick:f,openModalNew:d,save:()=>{n.value===void 0?e.value=[...e.value,{...t.value,id:Date.now()}]:e.value=e.value.map(e=>e.id===n.value?{...t.value,id:n.value}:e),p()}}}function P(){return{codeHtml:`<a-button
  class="a_btn a_btn_primary"
  text="_A_CALENDAR_CREATE_BTN_"
  @click="openModalNew"
/>
<a-calendar
  :events="events"
  @day-click="onDayClick"
  @event-click="onEventClick"
/>
<a-modal-form
  v-if="isModalVisible"
  v-model="model"
  :data-form="dataForm"
  :header-text="headerText"
  :close="closeModal"
  :save="save"
  :disabled-save="isSaveDisabled"
  class-columns="a_columns a_columns_count_12 a_columns_gap_3"
  class-column-default="a_column a_column_6 a_column_12_touch"
/>`}}function F(){return{codeJs:`// PageCalendarCreate.js
import {
  AButton,
  ACalendar,
  AModalForm,
} from "aloha-vue";

import CreateAPI from "./compositionAPI/CreateAPI";

export default {
  components: {
    AButton,
    ACalendar,
    AModalForm,
  },
  setup() {
    const {
      closeModal,
      dataForm,
      events,
      headerText,
      isModalVisible,
      isSaveDisabled,
      model,
      onDayClick,
      onEventClick,
      openModalNew,
      save,
    } = CreateAPI();

    return {
      closeModal,
      dataForm,
      events,
      headerText,
      isModalVisible,
      isSaveDisabled,
      model,
      onDayClick,
      onEventClick,
      openModalNew,
      save,
    };
  },
};

// compositionAPI/CreateAPI.js
import {
  computed,
  ref,
} from "vue";

import moment from "moment";

const DATETIME_FORMAT = "YYYY-MM-DD[T]HH:mm:ss.SSSZ";

export default function CreateAPI() {
  const events = ref([]);
  const model = ref({});
  const editedId = ref(undefined);
  const isModalVisible = ref(false);

  const dataForm = [
    { type: "text", id: "label", label: "_A_CALENDAR_CREATE_LABEL_", required: true, classColumn: "a_column a_column_12" },
    { type: "datetime", id: "start", label: "_A_CALENDAR_CREATE_START_" },
    { type: "datetime", id: "end", label: "_A_CALENDAR_CREATE_END_" },
    {
      type: "select",
      id: "color",
      label: "_A_CALENDAR_CREATE_COLOR_",
      data: ["primary", "secondary", "tertiary", "success", "info", "warning", "danger", "gray"].map(color => ({ label: color, value: color })),
    },
    { type: "oneCheckbox", id: "isAllDay", label: "_A_CALENDAR_CREATE_ALL_DAY_" },
  ];

  const headerText = computed(() => {
    return editedId.value === undefined ? "_A_CALENDAR_CREATE_MODAL_NEW_" : "_A_CALENDAR_CREATE_MODAL_EDIT_";
  });

  const isSaveDisabled = computed(() => !model.value.label || !model.value.start);

  const openModalForDate = date => {
    const START = moment(date).hours(9).minutes(0);
    editedId.value = undefined;
    model.value = {
      label: "",
      start: START.format(DATETIME_FORMAT),
      end: START.clone().add(1, "hour").format(DATETIME_FORMAT),
      color: "primary",
      isAllDay: false,
    };
    isModalVisible.value = true;
  };

  const onDayClick = ({ date }) => {
    openModalForDate(date);
  };

  const openModalNew = () => {
    openModalForDate(new Date());
  };

  const onEventClick = ({ event }) => {
    editedId.value = event.id;
    model.value = { ...event };
    isModalVisible.value = true;
  };

  const closeModal = () => {
    isModalVisible.value = false;
  };

  const save = () => {
    if (editedId.value === undefined) {
      events.value = [...events.value, { ...model.value, id: Date.now() }];
    } else {
      events.value = events.value.map(event => event.id === editedId.value ? { ...model.value, id: editedId.value } : event);
    }
    closeModal();
  };

  return {
    closeModal,
    dataForm,
    events,
    headerText,
    isModalVisible,
    isSaveDisabled,
    model,
    onDayClick,
    onEventClick,
    openModalNew,
    save,
  };
}`}}var I={name:`PageCalendarCreate`,components:{AButton:b,ACalendar:y,AlohaExample:v,AModalForm:S},setup(){let{codeHtml:e}=P(),{codeJs:t}=F(),{closeModal:n,dataForm:r,events:i,headerText:a,isModalVisible:o,isSaveDisabled:s,model:c,onDayClick:l,onEventClick:u,openModalNew:d,save:f}=N();return{closeModal:n,codeHtml:e,codeJs:t,dataForm:r,events:i,headerText:a,isModalVisible:o,isSaveDisabled:s,model:c,onDayClick:l,onEventClick:u,openModalNew:d,save:f}}};function L(e,t,n,r,a,o){let l=g(`a-button`),u=g(`a-calendar`),d=g(`a-modal-form`),m=g(`aloha-example`);return f(),s(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_CREATE_HEADER_`,description:`_A_CALENDAR_CREATE_DESCRIPTION_`},{default:p(()=>[i(l,{class:`a_btn a_btn_primary a_mb_3`,text:`_A_CALENDAR_CREATE_BTN_`,onClick:e.openModalNew},null,8,[`onClick`]),i(u,{events:e.events,onDayClick:e.onDayClick,onEventClick:e.onEventClick},null,8,[`events`,`onDayClick`,`onEventClick`]),e.isModalVisible?(f(),s(d,{key:0,modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"data-form":e.dataForm,"header-text":e.headerText,close:e.closeModal,save:e.save,"disabled-save":e.isSaveDisabled,"class-columns":`a_columns a_columns_count_12 a_columns_gap_3`,"class-column-default":`a_column a_column_6 a_column_12_touch`},null,8,[`modelValue`,`data-form`,`header-text`,`close`,`save`,`disabled-save`])):c(``,!0)]),_:1},8,[`code-html`,`code-js`])}var R=w(I,[[`render`,L]]);function z(){return{codeHtml:`<a-calendar
  :events="events"
  :max-events-per-day="2"
  @more-click="onMoreClick"
/>
<div v-if="day">
  <a-translation
    tag="strong"
    text="_A_CALENDAR_MAX_EVENTS_LIST_"
  />: {{ day }}
  <ul>
    <li
      v-for="event in dayEvents"
      :key="event.id"
    >{{ event.label }}</li>
  </ul>
</div>`}}function B(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ACalendar,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    ACalendar,
    ATranslation,
  },
  setup() {
    const events = ref([
      { id: 1, label: "Team meeting", start: "2026-03-03T10:00:00", end: "2026-03-03T11:00:00", color: "primary" },
      { id: 2, label: "Vacation", start: "2026-03-08", end: "2026-03-14", color: "success", isAllDay: true },
      { id: 3, label: "Workshop", start: "2026-03-12T09:00:00", end: "2026-03-13T17:00:00", color: "info" },
      { id: 4, label: "Birthday", start: "2026-03-20", color: "#8e44ad", isAllDay: true },
    ]);
    const dayEvents = ref([]);
    const day = ref(undefined);

    const onMoreClick = ({ date, events: eventsOfDay }) => {
      day.value = date;
      dayEvents.value = eventsOfDay;
    };

    return {
      day,
      dayEvents,
      events,
      onMoreClick,
    };
  },
};`}}var V={name:`PageCalendarMaxEvents`,components:{ACalendar:y,AlohaExample:v,ATranslation:C},setup(){let{codeHtml:e}=z(),{codeJs:t}=B(),n=h(D()),r=h([]),i=h(void 0);return{codeHtml:e,codeJs:t,day:i,dayEvents:r,events:n,onMoreClick:({date:e,events:t})=>{i.value=e,r.value=t}}}},H={key:0,class:`a_mt_3`},U={class:`a_mb_0`};function W(e,t,n,a,u,h){let v=g(`a-calendar`),y=g(`a-translation`),b=g(`aloha-example`);return f(),s(b,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_MAX_EVENTS_HEADER_`,description:`_A_CALENDAR_MAX_EVENTS_DESCRIPTION_`,props:[`max-events-per-day`]},{default:p(()=>[i(v,{events:e.events,"max-events-per-day":2,onMoreClick:e.onMoreClick},null,8,[`events`,`onMoreClick`]),e.day?(f(),d(`div`,H,[i(y,{tag:`strong`,text:`_A_CALENDAR_MAX_EVENTS_LIST_`}),_(`: `+m(e.day),1),o(`ul`,U,[(f(!0),d(l,null,r(e.dayEvents,e=>(f(),d(`li`,{key:e.id},m(e.label),1))),128))])])):c(``,!0)]),_:1},8,[`code-html`,`code-js`])}var te=w(V,[[`render`,W]]);function G(){return{codeHtml:`<a-calendar
  :events="events"
  :max-events-per-day="0"
/>`}}function K(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ACalendar,
} from "aloha-vue";

export default {
  components: {
    ACalendar,
  },
  setup() {
    const events = ref([
      // color: a color of the theme
      { id: 1, label: "Vacation", start: "2026-03-08", end: "2026-03-14", color: "success", isAllDay: true },
      // no color: colorDefault ("primary")
      { id: 2, label: "Workshop", start: "2026-03-12T09:00:00", end: "2026-03-13T17:00:00" },
      // any CSS color
      { id: 3, label: "Birthday", start: "2026-03-20", color: "#8e44ad", isAllDay: true },
      // continues in the next month
      { id: 4, label: "Conference", start: "2026-03-26", end: "2026-04-02", color: "tertiary", isAllDay: true },
    ]);

    return {
      events,
    };
  },
};`}}var q={name:`PageCalendarMultiDay`,components:{ACalendar:y,AlohaExample:v},setup(){let{codeHtml:e}=G(),{codeJs:t}=K();return{codeHtml:e,codeJs:t,events:h(D())}}};function J(e,t,n,r,a,o){let c=g(`a-calendar`),l=g(`aloha-example`);return f(),s(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_MULTI_DAY_HEADER_`,description:`_A_CALENDAR_MULTI_DAY_DESCRIPTION_`,props:[`max-events-per-day`,`color-default`]},{default:p(()=>[i(c,{events:e.events,"max-events-per-day":0},null,8,[`events`])]),_:1},8,[`code-html`,`code-js`])}var Y=w(q,[[`render`,J]]);function X(){return{codeHtml:`<a-calendar
  :events="events"
>
  <template v-slot:header="{ title, goToPreviousMonth, goToNextMonth }">
    <div class="a_d_flex a_align_items_center a_gap_2">
      <a-button
        class="a_btn a_btn_link"
        text="←"
        text-screen-reader="_A_CALENDAR_PREVIOUS_MONTH_"
        @click="goToPreviousMonth"
      />
      <h3 class="a_m_0">{{ title }}</h3>
      <a-button
        class="a_btn a_btn_link"
        text="→"
        text-screen-reader="_A_CALENDAR_NEXT_MONTH_"
        @click="goToNextMonth"
      />
    </div>
  </template>
  <template v-slot:day="{ day, events: eventsOfDay }">
    <span>{{ day.day }}</span>
    <span
      v-if="eventsOfDay.length"
      class="a_badge a_badge_secondary a_ml_auto"
      aria-hidden="true"
    >{{ eventsOfDay.length }}</span>
  </template>
  <template v-slot:event="{ event, isStart }">
    <strong v-if="isStart">{{ event.label }}</strong>
    <span v-else>… {{ event.label }}</span>
  </template>
</a-calendar>`}}function Z(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AButton,
  ACalendar,
} from "aloha-vue";

export default {
  components: {
    AButton,
    ACalendar,
  },
  setup() {
    const events = ref([
      { id: 1, label: "Team meeting", start: "2026-03-03T10:00:00", end: "2026-03-03T11:00:00", color: "primary" },
      { id: 2, label: "Vacation", start: "2026-03-08", end: "2026-03-14", color: "success", isAllDay: true },
      { id: 3, label: "Workshop", start: "2026-03-12T09:00:00", end: "2026-03-13T17:00:00", color: "info" },
      { id: 4, label: "Birthday", start: "2026-03-20", color: "#8e44ad", isAllDay: true },
    ]);

    return {
      events,
    };
  },
};`}}var Q={name:`PageCalendarSlots`,components:{AButton:b,ACalendar:y,AlohaExample:v},setup(){let{codeHtml:e}=X(),{codeJs:t}=Z();return{codeHtml:e,codeJs:t,events:h(D())}}},ne={class:`a_d_flex a_align_items_center a_gap_2`},re={class:`a_m_0`},ie={key:0,class:`a_badge a_badge_secondary a_ml_auto`,"aria-hidden":`true`},ae={key:0},oe={key:1};function $(e,t,n,r,a,l){let u=g(`a-button`),h=g(`a-calendar`),_=g(`aloha-example`);return f(),s(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_SLOTS_HEADER_`,description:`_A_CALENDAR_SLOTS_DESCRIPTION_`},{default:p(()=>[i(h,{events:e.events},{header:p(({title:e,goToPreviousMonth:t,goToNextMonth:n})=>[o(`div`,ne,[i(u,{class:`a_btn a_btn_link`,text:`←`,"text-screen-reader":`_A_CALENDAR_PREVIOUS_MONTH_`,onClick:t},null,8,[`onClick`]),o(`h3`,re,m(e),1),i(u,{class:`a_btn a_btn_link`,text:`→`,"text-screen-reader":`_A_CALENDAR_NEXT_MONTH_`,onClick:n},null,8,[`onClick`])])]),day:p(({day:e,events:t})=>[o(`span`,null,m(e.day),1),t.length?(f(),d(`span`,ie,m(t.length),1)):c(``,!0)]),event:p(({event:e,isStart:t})=>[t?(f(),d(`strong`,ae,m(e.label),1)):(f(),d(`span`,oe,`… `+m(e.label),1))]),_:1},8,[`events`])]),_:1},8,[`code-html`,`code-js`])}var se=w(Q,[[`render`,$]]);function ce(){return{dataEvents:[{name:`day-click`,description:`_A_CALENDAR_EVENTS_DAY_CLICK_`},{name:`event-click`,description:`_A_CALENDAR_EVENTS_EVENT_CLICK_`},{name:`more-click`,description:`_A_CALENDAR_EVENTS_MORE_CLICK_`},{name:`range-change`,description:`_A_CALENDAR_EVENTS_RANGE_CHANGE_`},{name:`update:modelValue`,description:`_A_CALENDAR_EVENTS_UPDATE_MODEL_VALUE_`}]}}function le(){return{dataExposes:[{name:`focusDay`,description:`_A_CALENDAR_EXPOSES_FOCUS_DAY_`,type:`Function`},{name:`goToDate`,description:`_A_CALENDAR_EXPOSES_GO_TO_DATE_`,type:`Function`},{name:`goToNextMonth`,description:`_A_CALENDAR_EXPOSES_GO_TO_NEXT_MONTH_`,type:`Function`},{name:`goToPreviousMonth`,description:`_A_CALENDAR_EXPOSES_GO_TO_PREVIOUS_MONTH_`,type:`Function`},{name:`goToToday`,description:`_A_CALENDAR_EXPOSES_GO_TO_TODAY_`,type:`Function`}]}}function ue(){let e=u(()=>x({placeholder:`_A_CALENDAR_COMPONENT_NAME_`}));return{pageTitle:u(()=>`ACalendar${e.value?` (${e.value})`:``}`)}}function de(){return{dataProps:[{name:`colorDefault`,description:`_A_CALENDAR_PROPS_COLOR_DEFAULT_`,type:`String`,default:`"primary"`,required:!1},{name:`events`,description:`_A_CALENDAR_PROPS_EVENTS_`,type:`Array`,default:`[]`,required:!1},{name:`firstDayOfWeek`,description:`_A_CALENDAR_PROPS_FIRST_DAY_OF_WEEK_`,type:`Number`,default:`1`,required:!1},{name:`id`,description:`_A_CALENDAR_PROPS_ID_`,type:`String`,default:`uniqueId("a_calendar_")`,required:!1},{name:`keyColor`,description:`_A_CALENDAR_PROPS_KEY_COLOR_`,type:`String | Function`,default:`"color"`,required:!1},{name:`keyEnd`,description:`_A_CALENDAR_PROPS_KEY_END_`,type:`String | Function`,default:`"end"`,required:!1},{name:`keyId`,description:`_A_CALENDAR_PROPS_KEY_ID_`,type:`String | Function`,default:`"id"`,required:!1},{name:`keyIsAllDay`,description:`_A_CALENDAR_PROPS_KEY_IS_ALL_DAY_`,type:`String | Function`,default:`"isAllDay"`,required:!1},{name:`keyLabel`,description:`_A_CALENDAR_PROPS_KEY_LABEL_`,type:`String | Function`,default:`"label"`,required:!1},{name:`keyStart`,description:`_A_CALENDAR_PROPS_KEY_START_`,type:`String | Function`,default:`"start"`,required:!1},{name:`maxEventsPerDay`,description:`_A_CALENDAR_PROPS_MAX_EVENTS_PER_DAY_`,type:`Number`,default:`3`,required:!1},{name:`modelValue`,description:`_A_CALENDAR_PROPS_MODEL_VALUE_`,type:`String | Date | Number`,default:`undefined`,required:!1}]}}function fe(){return{dataSlots:[{name:`day`,description:`_A_CALENDAR_SLOT_DAY_`},{name:`event`,description:`_A_CALENDAR_SLOT_EVENT_`},{name:`header`,description:`_A_CALENDAR_SLOT_HEADER_`}]}}function pe(){return{dataTranslate:[`_A_CALENDAR_PREVIOUS_MONTH_`,`_A_CALENDAR_NEXT_MONTH_`,`_A_CALENDAR_TODAY_`,`_A_CALENDAR_MORE_{{count}}_`,`_A_CALENDAR_EVENTS_{{count}}_`]}}var me={name:`PageCalendar`,components:{AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:C,PageCalendarBasic:j,PageCalendarCreate:R,PageCalendarMaxEvents:te,PageCalendarMultiDay:Y,PageCalendarSlots:se},setup(){let{pageTitle:e}=ue(),{dataProps:t}=de(),{dataEvents:n}=ce(),{dataSlots:r}=fe(),{dataExposes:i}=le(),{dataTranslate:a}=pe();return{dataEvents:n,dataExposes:i,dataProps:t,dataSlots:r,dataTranslate:a,pageTitle:e}}};function he(e,t,n,r,a,o){let c=g(`a-translation`),l=g(`page-calendar-basic`),u=g(`page-calendar-multi-day`),d=g(`page-calendar-max-events`),m=g(`page-calendar-slots`),h=g(`page-calendar-create`),_=g(`aloha-table-props`),v=g(`aloha-table-translate`),y=g(`aloha-table-css-vars`),b=g(`aloha-page`);return f(),s(b,{"page-title":e.pageTitle},{body:p(()=>[i(c,{tag:`p`,html:`_A_CALENDAR_COMPONENT_DESCRIPTION_`}),i(l),i(u),i(d),i(m),i(h),i(_,{"table-label":`ACalendar`,data:e.dataProps},null,8,[`data`]),i(_,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`description`]},null,8,[`data`]),i(_,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),i(_,{"table-label":`Exposes`,data:e.dataExposes,columns:[`name`,`type`,`description`]},null,8,[`data`]),i(v,{data:e.dataTranslate},null,8,[`data`]),i(y,{files:`components/ACalendar`})]),_:1},8,[`page-title`])}var ge=w(me,[[`render`,he]]);export{ge as default};