import{t as e}from"./chunk.AlohaPage.C_AWyoed.js";import{t}from"./chunk.AlohaTableProps.BrkQYKm5.js";import{t as n}from"./chunk.AlohaTableTranslate.39dY6EQ4.js";import{Bt as r,Ct as i,Ft as a,It as o,Lt as s,Mt as c,Pt as l,Qt as u,Rt as d,Vt as f,cn as p,en as m,mn as h,nn as g,on as _,zt as v}from"./chunk.vendor.CTxSDDRk.js";import{t as y}from"./chunk.AlohaExample.C1ql1MDy.js";import{Ut as b,Wt as x,Yt as S,h as C,it as w}from"./bundle.index.C6WaRsOC.js";import{t as T}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function ee(){return{codeHtml:`<a-calendar
  v-model="model"
  :events="events"
/>
<p>
  <a-translation
    tag="strong"
    text="_A_CALENDAR_SELECTED_"
  />: {{ model }}
</p>`}}function E(){return{codeJs:`import {
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
};`}}var D=`YYYY-MM-DD[T]HH:mm:ss.SSSZ`;function O(){let e=i().startOf(`month`),t=(t,n)=>{let r=e.clone().add(t-1,`days`);if(!n)return r.format(`YYYY-MM-DD`);let[i,a]=n.split(`:`);return r.hours(+i).minutes(+a).format(D)};return[{id:1,label:`Team meeting`,start:t(3,`10:00`),end:t(3,`11:00`),color:`primary`},{id:2,label:`Vacation`,start:t(8),end:t(14),color:`success`,isAllDay:!0},{id:3,label:`Dentist`,start:t(12,`08:30`),end:t(12,`09:15`),color:`warning`},{id:4,label:`Workshop`,start:t(12,`09:00`),end:t(13,`17:00`),color:`info`},{id:5,label:`Sprint review`,start:t(12,`14:00`),end:t(12,`15:00`),color:`secondary`},{id:6,label:`Release`,start:t(12,`16:00`),end:t(12,`16:30`),color:`danger`},{id:7,label:`Birthday`,start:t(20),color:`#8e44ad`,isAllDay:!0},{id:8,label:`Conference`,start:t(26),end:t(33),color:`tertiary`,isAllDay:!0}]}var k={name:`PageCalendarBasic`,components:{ACalendar:b,AlohaExample:y,ATranslation:w},setup(){let{codeHtml:e}=ee(),{codeJs:t}=E();return{codeHtml:e,codeJs:t,events:p(O()),model:p(void 0)}}},A={class:`a_mt_3 a_mb_0`};function j(e,t,n,i,s,c){let l=g(`a-calendar`),d=g(`a-translation`),p=g(`aloha-example`);return u(),o(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,description:`_A_CALENDAR_BASIC_DESCRIPTION_`,props:[`events`,`model-value`]},{default:_(()=>[f(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,events:e.events},null,8,[`modelValue`,`events`]),a(`p`,A,[f(d,{tag:`strong`,text:`_A_CALENDAR_SELECTED_`}),r(`: `+h(e.model),1)])]),_:1},8,[`code-html`,`code-js`])}var M=T(k,[[`render`,j]]),N=`YYYY-MM-DD[T]HH:mm:ss.SSSZ`;function P(){let e=p(O().slice(0,3)),t=p({}),n=p(void 0),r=p(!1),a=[{type:`text`,id:`label`,label:`_A_CALENDAR_CREATE_LABEL_`,required:!0,classColumn:`a_column a_column_12`},{type:`datetime`,id:`start`,label:`_A_CALENDAR_CREATE_START_`},{type:`datetime`,id:`end`,label:`_A_CALENDAR_CREATE_END_`},{type:`select`,id:`color`,label:`_A_CALENDAR_CREATE_COLOR_`,data:[`primary`,`secondary`,`tertiary`,`success`,`info`,`warning`,`danger`,`gray`].map(e=>({label:e,value:e}))},{type:`oneCheckbox`,id:`isAllDay`,label:`_A_CALENDAR_CREATE_ALL_DAY_`}],o=l(()=>n.value!==void 0),s=l(()=>o.value?`_A_CALENDAR_CREATE_MODAL_EDIT_`:`_A_CALENDAR_CREATE_MODAL_NEW_`),c=l(()=>!t.value.label||!t.value.start),u=e=>{let a=i(e).hours(9).minutes(0);n.value=void 0,t.value={label:``,start:a.format(N),end:a.clone().add(1,`hour`).format(N),color:`primary`,isAllDay:!1},r.value=!0},d=({date:e})=>{u(e)},f=()=>{u(new Date)},m=({event:e})=>{n.value=e.id,t.value={...e},r.value=!0},h=()=>{r.value=!1};return{closeModal:h,dataForm:a,deleteEvent:()=>{e.value=e.value.filter(e=>e.id!==n.value),h()},events:e,headerText:s,isEditing:o,isModalVisible:r,isSaveDisabled:c,model:t,onDayClick:d,onEventClick:m,openModalNew:f,save:()=>{o.value?e.value=e.value.map(e=>e.id===n.value?{...t.value,id:n.value}:e):e.value=[...e.value,{...t.value,id:Date.now()}],h()}}}function F(){return{codeHtml:`<a-button
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
>
  <template
    v-if="isEditing"
    v-slot:modalFooterAppend
  >
    <a-button
      class="a_btn a_btn_outline_danger"
      text="_A_CALENDAR_CREATE_DELETE_"
      @click="deleteEvent"
    />
  </template>
</a-modal-form>`}}function I(){return{codeJs:`// PageCalendarCreate.js
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
      deleteEvent,
      events,
      headerText,
      isEditing,
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
      deleteEvent,
      events,
      headerText,
      isEditing,
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

  const isEditing = computed(() => editedId.value !== undefined);

  const headerText = computed(() => {
    return isEditing.value ? "_A_CALENDAR_CREATE_MODAL_EDIT_" : "_A_CALENDAR_CREATE_MODAL_NEW_";
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
    if (!isEditing.value) {
      events.value = [...events.value, { ...model.value, id: Date.now() }];
    } else {
      events.value = events.value.map(event => event.id === editedId.value ? { ...model.value, id: editedId.value } : event);
    }
    closeModal();
  };

  const deleteEvent = () => {
    events.value = events.value.filter(event => event.id !== editedId.value);
    closeModal();
  };

  return {
    closeModal,
    dataForm,
    deleteEvent,
    events,
    headerText,
    isEditing,
    isModalVisible,
    isSaveDisabled,
    model,
    onDayClick,
    onEventClick,
    openModalNew,
    save,
  };
}`}}var L={name:`PageCalendarCreate`,components:{AButton:x,ACalendar:b,AlohaExample:y,AModalForm:C},setup(){let{codeHtml:e}=F(),{codeJs:t}=I(),{closeModal:n,dataForm:r,deleteEvent:i,events:a,headerText:o,isEditing:s,isModalVisible:c,isSaveDisabled:l,model:u,onDayClick:d,onEventClick:f,openModalNew:p,save:m}=P();return{closeModal:n,codeHtml:e,codeJs:t,dataForm:r,deleteEvent:i,events:a,headerText:o,isEditing:s,isModalVisible:c,isSaveDisabled:l,model:u,onDayClick:d,onEventClick:f,openModalNew:p,save:m}}};function R(e,t,n,r,i,a){let c=g(`a-button`),l=g(`a-calendar`),d=g(`a-modal-form`),p=g(`aloha-example`);return u(),o(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_CREATE_HEADER_`,description:`_A_CALENDAR_CREATE_DESCRIPTION_`},{default:_(()=>[f(c,{class:`a_btn a_btn_primary a_mb_3`,text:`_A_CALENDAR_CREATE_BTN_`,onClick:e.openModalNew},null,8,[`onClick`]),f(l,{events:e.events,onDayClick:e.onDayClick,onEventClick:e.onEventClick},null,8,[`events`,`onDayClick`,`onEventClick`]),e.isModalVisible?(u(),o(d,{key:0,modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"data-form":e.dataForm,"header-text":e.headerText,close:e.closeModal,save:e.save,"disabled-save":e.isSaveDisabled,"class-columns":`a_columns a_columns_count_12 a_columns_gap_3`,"class-column-default":`a_column a_column_6 a_column_12_touch`},v({_:2},[e.isEditing?{name:`modalFooterAppend`,fn:_(()=>[f(c,{class:`a_btn a_btn_outline_danger`,text:`_A_CALENDAR_CREATE_DELETE_`,onClick:e.deleteEvent},null,8,[`onClick`])]),key:`0`}:void 0]),1032,[`modelValue`,`data-form`,`header-text`,`close`,`save`,`disabled-save`])):s(``,!0)]),_:1},8,[`code-html`,`code-js`])}var z=T(L,[[`render`,R]]);function B(){return{codeHtml:`<a-calendar
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
</div>`}}function V(){return{codeJs:`import {
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
};`}}var H={name:`PageCalendarMaxEvents`,components:{ACalendar:b,AlohaExample:y,ATranslation:w},setup(){let{codeHtml:e}=B(),{codeJs:t}=V(),n=p(O()),r=p([]),i=p(void 0);return{codeHtml:e,codeJs:t,day:i,dayEvents:r,events:n,onMoreClick:({date:e,events:t})=>{i.value=e,r.value=t}}}},U={key:0,class:`a_mt_3`},W={class:`a_mb_0`};function G(e,t,n,i,l,p){let v=g(`a-calendar`),y=g(`a-translation`),b=g(`aloha-example`);return u(),o(b,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_MAX_EVENTS_HEADER_`,description:`_A_CALENDAR_MAX_EVENTS_DESCRIPTION_`,props:[`max-events-per-day`]},{default:_(()=>[f(v,{events:e.events,"max-events-per-day":2,onMoreClick:e.onMoreClick},null,8,[`events`,`onMoreClick`]),e.day?(u(),d(`div`,U,[f(y,{tag:`strong`,text:`_A_CALENDAR_MAX_EVENTS_LIST_`}),r(`: `+h(e.day),1),a(`ul`,W,[(u(!0),d(c,null,m(e.dayEvents,e=>(u(),d(`li`,{key:e.id},h(e.label),1))),128))])])):s(``,!0)]),_:1},8,[`code-html`,`code-js`])}var te=T(H,[[`render`,G]]);function K(){return{codeHtml:`<a-calendar
  :events="events"
  :max-events-per-day="0"
/>`}}function q(){return{codeJs:`import {
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
};`}}var J={name:`PageCalendarMultiDay`,components:{ACalendar:b,AlohaExample:y},setup(){let{codeHtml:e}=K(),{codeJs:t}=q();return{codeHtml:e,codeJs:t,events:p(O())}}};function Y(e,t,n,r,i,a){let s=g(`a-calendar`),c=g(`aloha-example`);return u(),o(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_MULTI_DAY_HEADER_`,description:`_A_CALENDAR_MULTI_DAY_DESCRIPTION_`,props:[`max-events-per-day`,`color-default`]},{default:_(()=>[f(s,{events:e.events,"max-events-per-day":0},null,8,[`events`])]),_:1},8,[`code-html`,`code-js`])}var X=T(J,[[`render`,Y]]);function Z(){return{codeHtml:`<a-calendar
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
</a-calendar>`}}function Q(){return{codeJs:`import {
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
};`}}var ne={name:`PageCalendarSlots`,components:{AButton:x,ACalendar:b,AlohaExample:y},setup(){let{codeHtml:e}=Z(),{codeJs:t}=Q();return{codeHtml:e,codeJs:t,events:p(O())}}},re={class:`a_d_flex a_align_items_center a_gap_2`},ie={class:`a_m_0`},ae={key:0,class:`a_badge a_badge_secondary a_ml_auto`,"aria-hidden":`true`},oe={key:0},se={key:1};function ce(e,t,n,r,i,c){let l=g(`a-button`),p=g(`a-calendar`),m=g(`aloha-example`);return u(),o(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_SLOTS_HEADER_`,description:`_A_CALENDAR_SLOTS_DESCRIPTION_`},{default:_(()=>[f(p,{events:e.events},{header:_(({title:e,goToPreviousMonth:t,goToNextMonth:n})=>[a(`div`,re,[f(l,{class:`a_btn a_btn_link`,text:`←`,"text-screen-reader":`_A_CALENDAR_PREVIOUS_MONTH_`,onClick:t},null,8,[`onClick`]),a(`h3`,ie,h(e),1),f(l,{class:`a_btn a_btn_link`,text:`→`,"text-screen-reader":`_A_CALENDAR_NEXT_MONTH_`,onClick:n},null,8,[`onClick`])])]),day:_(({day:e,events:t})=>[a(`span`,null,h(e.day),1),t.length?(u(),d(`span`,ae,h(t.length),1)):s(``,!0)]),event:_(({event:e,isStart:t})=>[t?(u(),d(`strong`,oe,h(e.label),1)):(u(),d(`span`,se,`… `+h(e.label),1))]),_:1},8,[`events`])]),_:1},8,[`code-html`,`code-js`])}var le=T(ne,[[`render`,ce]]);function ue(){return{dataEvents:[{name:`day-click`,description:`_A_CALENDAR_EVENTS_DAY_CLICK_`},{name:`event-click`,description:`_A_CALENDAR_EVENTS_EVENT_CLICK_`},{name:`more-click`,description:`_A_CALENDAR_EVENTS_MORE_CLICK_`},{name:`range-change`,description:`_A_CALENDAR_EVENTS_RANGE_CHANGE_`},{name:`update:modelValue`,description:`_A_CALENDAR_EVENTS_UPDATE_MODEL_VALUE_`}]}}function de(){return{dataExposes:[{name:`focusDay`,description:`_A_CALENDAR_EXPOSES_FOCUS_DAY_`,type:`Function`},{name:`goToDate`,description:`_A_CALENDAR_EXPOSES_GO_TO_DATE_`,type:`Function`},{name:`goToNextMonth`,description:`_A_CALENDAR_EXPOSES_GO_TO_NEXT_MONTH_`,type:`Function`},{name:`goToPreviousMonth`,description:`_A_CALENDAR_EXPOSES_GO_TO_PREVIOUS_MONTH_`,type:`Function`},{name:`goToToday`,description:`_A_CALENDAR_EXPOSES_GO_TO_TODAY_`,type:`Function`}]}}function fe(){let e=l(()=>S({placeholder:`_A_CALENDAR_COMPONENT_NAME_`}));return{pageTitle:l(()=>`ACalendar${e.value?` (${e.value})`:``}`)}}function pe(){return{dataProps:[{name:`colorDefault`,description:`_A_CALENDAR_PROPS_COLOR_DEFAULT_`,type:`String`,default:`"primary"`,required:!1},{name:`events`,description:`_A_CALENDAR_PROPS_EVENTS_`,type:`Array`,default:`[]`,required:!1},{name:`firstDayOfWeek`,description:`_A_CALENDAR_PROPS_FIRST_DAY_OF_WEEK_`,type:`Number`,default:`1`,required:!1},{name:`id`,description:`_A_CALENDAR_PROPS_ID_`,type:`String`,default:`uniqueId("a_calendar_")`,required:!1},{name:`keyColor`,description:`_A_CALENDAR_PROPS_KEY_COLOR_`,type:`String | Function`,default:`"color"`,required:!1},{name:`keyEnd`,description:`_A_CALENDAR_PROPS_KEY_END_`,type:`String | Function`,default:`"end"`,required:!1},{name:`keyId`,description:`_A_CALENDAR_PROPS_KEY_ID_`,type:`String | Function`,default:`"id"`,required:!1},{name:`keyIsAllDay`,description:`_A_CALENDAR_PROPS_KEY_IS_ALL_DAY_`,type:`String | Function`,default:`"isAllDay"`,required:!1},{name:`keyLabel`,description:`_A_CALENDAR_PROPS_KEY_LABEL_`,type:`String | Function`,default:`"label"`,required:!1},{name:`keyStart`,description:`_A_CALENDAR_PROPS_KEY_START_`,type:`String | Function`,default:`"start"`,required:!1},{name:`maxEventsPerDay`,description:`_A_CALENDAR_PROPS_MAX_EVENTS_PER_DAY_`,type:`Number`,default:`3`,required:!1},{name:`modelValue`,description:`_A_CALENDAR_PROPS_MODEL_VALUE_`,type:`String | Date | Number`,default:`undefined`,required:!1}]}}function $(){return{dataSlots:[{name:`day`,description:`_A_CALENDAR_SLOT_DAY_`},{name:`event`,description:`_A_CALENDAR_SLOT_EVENT_`},{name:`header`,description:`_A_CALENDAR_SLOT_HEADER_`}]}}function me(){return{dataTranslate:[`_A_CALENDAR_PREVIOUS_MONTH_`,`_A_CALENDAR_NEXT_MONTH_`,`_A_CALENDAR_TODAY_`,`_A_CALENDAR_MORE_{{count}}_`,`_A_CALENDAR_EVENTS_{{count}}_`]}}var he={name:`PageCalendar`,components:{AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:w,PageCalendarBasic:M,PageCalendarCreate:z,PageCalendarMaxEvents:te,PageCalendarMultiDay:X,PageCalendarSlots:le},setup(){let{pageTitle:e}=fe(),{dataProps:t}=pe(),{dataEvents:n}=ue(),{dataSlots:r}=$(),{dataExposes:i}=de(),{dataTranslate:a}=me();return{dataEvents:n,dataExposes:i,dataProps:t,dataSlots:r,dataTranslate:a,pageTitle:e}}};function ge(e,t,n,r,i,a){let s=g(`a-translation`),c=g(`page-calendar-basic`),l=g(`page-calendar-multi-day`),d=g(`page-calendar-max-events`),p=g(`page-calendar-slots`),m=g(`page-calendar-create`),h=g(`aloha-table-props`),v=g(`aloha-table-translate`),y=g(`aloha-table-css-vars`),b=g(`aloha-page`);return u(),o(b,{"page-title":e.pageTitle},{body:_(()=>[f(s,{tag:`p`,html:`_A_CALENDAR_COMPONENT_DESCRIPTION_`}),f(c),f(l),f(d),f(p),f(m),f(h,{"table-label":`ACalendar`,data:e.dataProps},null,8,[`data`]),f(h,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`description`]},null,8,[`data`]),f(h,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),f(h,{"table-label":`Exposes`,data:e.dataExposes,columns:[`name`,`type`,`description`]},null,8,[`data`]),f(v,{data:e.dataTranslate},null,8,[`data`]),f(y,{files:`components/ACalendar`})]),_:1},8,[`page-title`])}var _e=T(he,[[`render`,ge]]);export{_e as default};