import{t as e}from"./chunk.AlohaPage.01_65sYq.js";import{t}from"./chunk.AlohaTableProps.DLAMj2a0.js";import{t as n}from"./chunk.AlohaTableTranslate.xM59LH5u.js";import{Bt as r,Ct as i,Ft as a,It as o,Jt as s,Lt as c,Mt as l,Pt as u,Qt as d,Rt as f,Vt as p,cn as m,en as h,mn as g,nn as _,on as v,zt as y}from"./chunk.vendor.CTxSDDRk.js";import{t as b}from"./chunk.AlohaExample.DMDNc2GO.js";import{Gt as x,O as S,Wt as C,Xt as w,h as T,it as E,jt as D,ut as O}from"./bundle.index.DciiaRRT.js";import{t as k}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function A(){return{codeHtml:`<a-calendar
  v-model="model"
  :events="events"
/>
<p>
  <a-translation
    tag="strong"
    text="_A_CALENDAR_SELECTED_"
  />: {{ model }}
</p>`}}function ee(){return{codeJs:`import {
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
};`}}var te=`YYYY-MM-DD[T]HH:mm:ss.SSSZ`;function j(e){return i().startOf(`month`).add(e-1,`days`).format(`YYYY-MM-DD`)}function M(){let e=i().startOf(`month`),t=(t,n)=>{let r=e.clone().add(t-1,`days`);if(!n)return r.format(`YYYY-MM-DD`);let[i,a]=n.split(`:`);return r.hours(+i).minutes(+a).format(te)};return[{id:1,label:`Team meeting`,start:t(3,`10:00`),end:t(3,`11:00`),color:`primary`},{id:2,label:`Vacation`,start:t(8),end:t(14),color:`success`,isAllDay:!0},{id:3,label:`Dentist`,start:t(12,`08:30`),end:t(12,`09:15`),color:`warning`},{id:4,label:`Workshop`,start:t(12,`09:00`),end:t(13,`17:00`),color:`info`},{id:5,label:`Sprint review`,start:t(12,`14:00`),end:t(12,`15:00`),color:`secondary`},{id:6,label:`Release`,start:t(12,`16:00`),end:t(12,`16:30`),color:`danger`},{id:9,label:`Lunch`,start:t(11,`12:00`),end:t(11,`13:00`),color:`success`},{id:10,label:`Customer call`,start:t(11,`12:30`),end:t(11,`13:30`),color:`info`},{id:11,label:`Planning`,start:t(11,`12:45`),end:t(11,`14:00`),color:`#8e44ad`},{id:7,label:`Birthday`,start:t(20),color:`#8e44ad`,isAllDay:!0},{id:8,label:`Conference`,start:t(26),end:t(33),color:`tertiary`,isAllDay:!0}]}var N={name:`PageCalendarBasic`,components:{ACalendar:C,AlohaExample:b,ATranslation:E},setup(){let{codeHtml:e}=A(),{codeJs:t}=ee();return{codeHtml:e,codeJs:t,events:m(M()),model:m(void 0)}}},P={class:`a_mt_3 a_mb_0`};function F(e,t,n,i,s,c){let l=_(`a-calendar`),u=_(`a-translation`),f=_(`aloha-example`);return d(),o(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,description:`_A_CALENDAR_BASIC_DESCRIPTION_`,props:[`events`,`model-value`]},{default:v(()=>[p(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,events:e.events},null,8,[`modelValue`,`events`]),a(`p`,P,[p(u,{tag:`strong`,text:`_A_CALENDAR_SELECTED_`}),r(`: `+g(e.model),1)])]),_:1},8,[`code-html`,`code-js`])}var I=k(N,[[`render`,F]]),L=`YYYY-MM-DD[T]HH:mm:ss.SSSZ`,R=`page_calendar_create_btn_delete`;function z(){let e=m(M().slice(0,3)),t=m({}),n=m(void 0),r=m(!1),a=[{type:`text`,id:`label`,label:`_A_CALENDAR_CREATE_LABEL_`,required:!0,classColumn:`a_column a_column_12`},{type:`datetime`,id:`start`,label:`_A_CALENDAR_CREATE_START_`},{type:`datetime`,id:`end`,label:`_A_CALENDAR_CREATE_END_`},{type:`select`,id:`color`,label:`_A_CALENDAR_CREATE_COLOR_`,data:[`primary`,`secondary`,`tertiary`,`success`,`info`,`warning`,`danger`,`gray`].map(e=>({label:e,value:e}))},{type:`oneCheckbox`,id:`isAllDay`,label:`_A_CALENDAR_CREATE_ALL_DAY_`},{type:`select`,id:`repeat`,label:`_A_CALENDAR_CREATE_REPEAT_`,translateData:!0,data:[``,`daily`,`weekly`,`monthly`,`yearly`].map(e=>({label:`_A_CALENDAR_CREATE_REPEAT_${(e||`none`).toUpperCase()}_`,value:e}))}],o=u(()=>n.value!==void 0),c=u(()=>o.value?`_A_CALENDAR_CREATE_MODAL_EDIT_`:`_A_CALENDAR_CREATE_MODAL_NEW_`),l=u(()=>!t.value.label||!t.value.start),d=({start:e,end:a})=>{n.value=void 0,t.value={label:``,start:i(e).format(L),end:i(a).format(L),color:`primary`,isAllDay:!1,repeat:``},r.value=!0},f=e=>{let t=i(e).hours(9).minutes(0);d({start:t,end:t.clone().add(1,`hour`)})},p=({date:e})=>{f(e)},h=({start:e})=>{d({start:e,end:i(e).add(1,`hour`)})},g=()=>{f(new Date)},_=({event:e})=>{n.value=e.id,t.value={...e,repeat:e.recurrence?.frequency||``},r.value=!0},v=()=>{r.value=!1},y=e=>{let{repeat:n,...r}=t.value;return{...r,id:e,recurrence:n?{...r.recurrence,frequency:n}:void 0}},b=()=>{o.value?e.value=e.value.map(e=>e.id===n.value?y(n.value):e):e.value=[...e.value,y(Date.now())],v()},{closeConfirm:x,openConfirm:C}=S();return{btnDeleteId:R,closeModal:v,dataForm:a,deleteEvent:()=>{C({headerText:`_A_CALENDAR_CREATE_DELETE_CONFIRM_HEADER_`,bodyHtml:`_A_CALENDAR_CREATE_DELETE_CONFIRM_BODY_{{label}}_`,extra:{label:D(t.value.label)},saveButtonText:`_A_CALENDAR_CREATE_DELETE_`,saveButtonClass:`a_btn a_btn_danger`,save:()=>{e.value=e.value.filter(e=>e.id!==n.value),x(),v()},close:()=>{x(),s(()=>O({selector:`#${R}`}))}})},events:e,headerText:c,isEditing:o,isModalVisible:r,isSaveDisabled:l,model:t,onDayClick:p,onEventClick:_,onTimeClick:h,openModalToday:g,save:b}}function B(){return{codeHtml:`<a-button
  class="a_btn a_btn_primary"
  text="_A_CALENDAR_CREATE_BTN_"
  @click="openModalToday"
/>
<a-calendar
  :events="events"
  @day-click="onDayClick"
  @event-click="onEventClick"
  @time-click="onTimeClick"
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
      :id="btnDeleteId"
      class="a_btn a_btn_outline_danger"
      text="_A_CALENDAR_CREATE_DELETE_"
      @click="deleteEvent"
    />
  </template>
</a-modal-form>`}}function V(){return{codeJs:`// PageCalendarCreate.js
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
      btnDeleteId,
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
      onTimeClick,
      openModalToday,
      save,
    } = CreateAPI();

    return {
      btnDeleteId,
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
      onTimeClick,
      openModalToday,
      save,
    };
  },
};

// compositionAPI/CreateAPI.js
import {
  computed,
  nextTick,
  ref,
} from "vue";

import {
  AConfirmAPI,
  filterEscapeHtml,
  setFocusToElement,
} from "aloha-vue";

import moment from "moment";

const DATETIME_FORMAT = "YYYY-MM-DD[T]HH:mm:ss.SSSZ";
const BTN_DELETE_ID = "page_calendar_create_btn_delete";

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
    {
      type: "select",
      id: "repeat",
      label: "_A_CALENDAR_CREATE_REPEAT_",
      translateData: true,
      data: ["", "daily", "weekly", "monthly", "yearly"].map(frequency => ({
        label: \`_A_CALENDAR_CREATE_REPEAT_\${ (frequency || "none").toUpperCase() }_\`,
        value: frequency,
      })),
    },
  ];

  const isEditing = computed(() => editedId.value !== undefined);

  const headerText = computed(() => {
    return isEditing.value ? "_A_CALENDAR_CREATE_MODAL_EDIT_" : "_A_CALENDAR_CREATE_MODAL_NEW_";
  });

  const isSaveDisabled = computed(() => !model.value.label || !model.value.start);

  const openModalNew = ({ start, end }) => {
    editedId.value = undefined;
    model.value = {
      label: "",
      start: moment(start).format(DATETIME_FORMAT),
      end: moment(end).format(DATETIME_FORMAT),
      color: "primary",
      isAllDay: false,
      repeat: "",
    };
    isModalVisible.value = true;
  };

  const openModalForDate = date => {
    const START = moment(date).hours(9).minutes(0);
    openModalNew({ start: START, end: START.clone().add(1, "hour") });
  };

  // Month view and the heads of the days in the week view
  const onDayClick = ({ date }) => {
    openModalForDate(date);
  };

  // Week view: a click on a time (the event lasts one hour, not one timeStep)
  const onTimeClick = ({ start }) => {
    openModalNew({ start, end: moment(start).add(1, "hour") });
  };

  const openModalToday = () => {
    openModalForDate(new Date());
  };

  // An occurrence of a series opens the whole series
  const onEventClick = ({ event }) => {
    editedId.value = event.id;
    model.value = { ...event, repeat: event.recurrence?.frequency || "" };
    isModalVisible.value = true;
  };

  const closeModal = () => {
    isModalVisible.value = false;
  };

  // "repeat" of the form becomes the rule of the series (recurrence)
  const getEventFromModel = id => {
    const { repeat, ...EVENT } = model.value;
    return {
      ...EVENT,
      id,
      recurrence: repeat ? { ...EVENT.recurrence, frequency: repeat } : undefined,
    };
  };

  const save = () => {
    if (!isEditing.value) {
      events.value = [...events.value, getEventFromModel(Date.now())];
    } else {
      events.value = events.value.map(event => event.id === editedId.value ? getEventFromModel(editedId.value) : event);
    }
    closeModal();
  };

  const {
    closeConfirm,
    openConfirm,
  } = AConfirmAPI();

  // The title is typed by the user and the body of the confirm is HTML
  const deleteEvent = () => {
    openConfirm({
      headerText: "_A_CALENDAR_CREATE_DELETE_CONFIRM_HEADER_",
      bodyHtml: "_A_CALENDAR_CREATE_DELETE_CONFIRM_BODY_{{label}}_",
      extra: {
        label: filterEscapeHtml(model.value.label),
      },
      saveButtonText: "_A_CALENDAR_CREATE_DELETE_",
      saveButtonClass: "a_btn a_btn_danger",
      save: () => {
        events.value = events.value.filter(event => event.id !== editedId.value);
        closeConfirm();
        closeModal();
      },
      // Cancel: the focus goes back to the button "Delete" of the form
      close: () => {
        closeConfirm();
        nextTick(() => setFocusToElement({ selector: \`#\${ BTN_DELETE_ID }\` }));
      },
    });
  };

  return {
    btnDeleteId: BTN_DELETE_ID,
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
    onTimeClick,
    openModalToday,
    save,
  };
}`}}var H={name:`PageCalendarCreate`,components:{AButton:x,ACalendar:C,AlohaExample:b,AModalForm:T},setup(){let{codeHtml:e}=B(),{codeJs:t}=V(),{btnDeleteId:n,closeModal:r,dataForm:i,deleteEvent:a,events:o,headerText:s,isEditing:c,isModalVisible:l,isSaveDisabled:u,model:d,onDayClick:f,onEventClick:p,onTimeClick:m,openModalToday:h,save:g}=z();return{btnDeleteId:n,closeModal:r,codeHtml:e,codeJs:t,dataForm:i,deleteEvent:a,events:o,headerText:s,isEditing:c,isModalVisible:l,isSaveDisabled:u,model:d,onDayClick:f,onEventClick:p,onTimeClick:m,openModalToday:h,save:g}}};function U(e,t,n,r,i,a){let s=_(`a-button`),l=_(`a-calendar`),u=_(`a-modal-form`),f=_(`aloha-example`);return d(),o(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_CREATE_HEADER_`,description:`_A_CALENDAR_CREATE_DESCRIPTION_`},{default:v(()=>[p(s,{class:`a_btn a_btn_primary a_mb_3`,text:`_A_CALENDAR_CREATE_BTN_`,onClick:e.openModalToday},null,8,[`onClick`]),p(l,{events:e.events,onDayClick:e.onDayClick,onEventClick:e.onEventClick,onTimeClick:e.onTimeClick},null,8,[`events`,`onDayClick`,`onEventClick`,`onTimeClick`]),e.isModalVisible?(d(),o(u,{key:0,modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"data-form":e.dataForm,"header-text":e.headerText,close:e.closeModal,save:e.save,"disabled-save":e.isSaveDisabled,"class-columns":`a_columns a_columns_count_12 a_columns_gap_3`,"class-column-default":`a_column a_column_6 a_column_12_touch`},y({_:2},[e.isEditing?{name:`modalFooterAppend`,fn:v(()=>[p(s,{class:`a_btn a_btn_outline_danger`,id:e.btnDeleteId,text:`_A_CALENDAR_CREATE_DELETE_`,onClick:e.deleteEvent},null,8,[`id`,`onClick`])]),key:`0`}:void 0]),1032,[`modelValue`,`data-form`,`header-text`,`close`,`save`,`disabled-save`])):c(``,!0)]),_:1},8,[`code-html`,`code-js`])}var W=k(H,[[`render`,U]]);function G(){return{codeHtml:`<a-calendar
  v-model="model"
  v-model:view="view"
  :events="events"
  :views="['day', 'week']"
  :hour-start="7"
  :hour-end="20"
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
      { id: 1, label: "Lunch", start: "2026-03-11T12:00:00", end: "2026-03-11T13:00:00", color: "success" },
      { id: 2, label: "Customer call", start: "2026-03-11T12:30:00", end: "2026-03-11T13:30:00", color: "info" },
      { id: 3, label: "Planning", start: "2026-03-11T12:45:00", end: "2026-03-11T14:00:00", color: "#8e44ad" },
    ]);
    const model = ref("2026-03-11");
    const view = ref("day");

    return {
      events,
      model,
      view,
    };
  },
};`}}var q={name:`PageCalendarDay`,components:{ACalendar:C,AlohaExample:b},setup(){let{codeHtml:e}=G(),{codeJs:t}=K();return{codeHtml:e,codeJs:t,events:m(M()),model:m(j(11)),view:m(`day`)}}};function J(e,t,n,r,i,a){let s=_(`a-calendar`),c=_(`aloha-example`);return d(),o(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_DAY_HEADER_`,description:`_A_CALENDAR_DAY_DESCRIPTION_`,props:[`view`,`views`]},{default:v(()=>[p(s,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,view:e.view,"onUpdate:view":t[1]||=t=>e.view=t,events:e.events,views:[`day`,`week`],"hour-start":7,"hour-end":20},null,8,[`modelValue`,`view`,`events`])]),_:1},8,[`code-html`,`code-js`])}var Y=k(q,[[`render`,J]]),X=`YYYY-MM-DD[T]HH:mm:ss.SSSZ`;function Z({events:e=[],date:t}){let n=m(e),r=m(t),a=m(`week`),o=m(``);return{events:n,isDraggable:e=>!e.isLocked,lastDrop:o,model:r,onEventChange:({event:e,start:t,end:r})=>{let a=e.isAllDay?`YYYY-MM-DD`:X;n.value=n.value.map(n=>n.id===e.id?{...n,start:i(t).format(a),end:i(r).format(a)}:n),o.value=`${e.label}: ${i(t).format(`DD.MM.YYYY HH:mm`)} – ${i(r).format(`DD.MM.YYYY HH:mm`)}`},view:a}}function Q(){return{codeHtml:`<a-calendar
  v-model="model"
  v-model:view="view"
  :events="events"
  :is-draggable="isDraggable"
  :is-resizable="isDraggable"
  @event-drop="onEventChange"
  @event-resize="onEventChange"
/>
<p v-if="lastDrop">
  <a-translation
    tag="strong"
    text="_A_CALENDAR_DRAG_LAST_"
  />: {{ lastDrop }}
</p>`}}function ne(){return{codeJs:`// PageCalendarDragDrop.js
import {
  ACalendar,
  ATranslation,
} from "aloha-vue";

import DragDropAPI from "./compositionAPI/DragDropAPI";

export default {
  components: {
    ACalendar,
    ATranslation,
  },
  setup() {
    const {
      events,
      isDraggable,
      lastDrop,
      model,
      onEventChange,
      view,
    } = DragDropAPI({
      events: [
        { id: 1, label: "Team meeting", start: "2026-03-10T10:00:00", end: "2026-03-10T11:00:00", color: "primary" },
        { id: 2, label: "Workshop", start: "2026-03-12T09:00:00", end: "2026-03-13T17:00:00", color: "info" },
        { id: 3, label: "Birthday", start: "2026-03-14", color: "#8e44ad", isAllDay: true, isLocked: true },
      ],
      date: "2026-03-11",
    });

    return {
      events,
      isDraggable,
      lastDrop,
      model,
      onEventChange,
      view,
    };
  },
};

// compositionAPI/DragDropAPI.js
import {
  ref,
} from "vue";

import moment from "moment";

const DATETIME_FORMAT = "YYYY-MM-DD[T]HH:mm:ss.SSSZ";

export default function DragDropAPI({ events: eventsStart = [], date }) {
  const events = ref(eventsStart);
  const model = ref(date);
  const view = ref("week");
  const lastDrop = ref("");

  // Events with isLocked cannot be dragged
  const isDraggable = event => !event.isLocked;

  // event-drop and event-resize: the calendar does not change the events, the new start and end are saved here
  const onEventChange = ({ event, start, end }) => {
    const FORMAT = event.isAllDay ? "YYYY-MM-DD" : DATETIME_FORMAT;
    events.value = events.value.map(item => item.id === event.id ? {
      ...item,
      start: moment(start).format(FORMAT),
      end: moment(end).format(FORMAT),
    } : item);
    lastDrop.value = \`\${ event.label }: \${ moment(start).format("DD.MM.YYYY HH:mm") } – \${ moment(end).format("DD.MM.YYYY HH:mm") }\`;
  };

  return {
    events,
    isDraggable,
    lastDrop,
    model,
    onEventChange,
    view,
  };
}`}}var re={name:`PageCalendarDragDrop`,components:{ACalendar:C,AlohaExample:b,ATranslation:E},setup(){let{codeHtml:e}=Q(),{codeJs:t}=ne(),{events:n,isDraggable:r,lastDrop:i,model:a,onEventChange:o,view:s}=Z({events:M().map(e=>e.id===7?{...e,isLocked:!0}:e),date:j(11)});return{codeHtml:e,codeJs:t,events:n,isDraggable:r,lastDrop:i,model:a,onEventChange:o,view:s}}},ie={key:0,class:`a_mt_3 a_mb_0`};function ae(e,t,n,i,a,s){let l=_(`a-calendar`),u=_(`a-translation`),m=_(`aloha-example`);return d(),o(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_DRAG_HEADER_`,description:`_A_CALENDAR_DRAG_DESCRIPTION_`,props:[`is-draggable`,`is-resizable`]},{default:v(()=>[p(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,view:e.view,"onUpdate:view":t[1]||=t=>e.view=t,events:e.events,"is-draggable":e.isDraggable,"is-resizable":e.isDraggable,onEventDrop:e.onEventChange,onEventResize:e.onEventChange},null,8,[`modelValue`,`view`,`events`,`is-draggable`,`is-resizable`,`onEventDrop`,`onEventResize`]),e.lastDrop?(d(),f(`p`,ie,[p(u,{tag:`strong`,text:`_A_CALENDAR_DRAG_LAST_`}),r(`: `+g(e.lastDrop),1)])):c(``,!0)]),_:1},8,[`code-html`,`code-js`])}var oe=k(re,[[`render`,ae]]);function se(){return{codeHtml:`<a-calendar
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
</div>`}}function ce(){return{codeJs:`import {
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
};`}}var le={name:`PageCalendarMaxEvents`,components:{ACalendar:C,AlohaExample:b,ATranslation:E},setup(){let{codeHtml:e}=se(),{codeJs:t}=ce(),n=m(M()),r=m([]),i=m(void 0);return{codeHtml:e,codeJs:t,day:i,dayEvents:r,events:n,onMoreClick:({date:e,events:t})=>{i.value=e,r.value=t}}}},ue={key:0,class:`a_mt_3`},de={class:`a_mb_0`};function fe(e,t,n,i,s,u){let m=_(`a-calendar`),y=_(`a-translation`),b=_(`aloha-example`);return d(),o(b,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_MAX_EVENTS_HEADER_`,description:`_A_CALENDAR_MAX_EVENTS_DESCRIPTION_`,props:[`max-events-per-day`]},{default:v(()=>[p(m,{events:e.events,"max-events-per-day":2,onMoreClick:e.onMoreClick},null,8,[`events`,`onMoreClick`]),e.day?(d(),f(`div`,ue,[p(y,{tag:`strong`,text:`_A_CALENDAR_MAX_EVENTS_LIST_`}),r(`: `+g(e.day),1),a(`ul`,de,[(d(!0),f(l,null,h(e.dayEvents,e=>(d(),f(`li`,{key:e.id},g(e.label),1))),128))])])):c(``,!0)]),_:1},8,[`code-html`,`code-js`])}var pe=k(le,[[`render`,fe]]);function me(){return{codeHtml:`<a-calendar
  :events="events"
  :max-events-per-day="0"
/>`}}function he(){return{codeJs:`import {
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
};`}}var ge={name:`PageCalendarMultiDay`,components:{ACalendar:C,AlohaExample:b},setup(){let{codeHtml:e}=me(),{codeJs:t}=he();return{codeHtml:e,codeJs:t,events:m(M())}}};function _e(e,t,n,r,i,a){let s=_(`a-calendar`),c=_(`aloha-example`);return d(),o(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_MULTI_DAY_HEADER_`,description:`_A_CALENDAR_MULTI_DAY_DESCRIPTION_`,props:[`max-events-per-day`,`color-default`]},{default:v(()=>[p(s,{events:e.events,"max-events-per-day":0},null,8,[`events`])]),_:1},8,[`code-html`,`code-js`])}var ve=k(ge,[[`render`,_e]]);function ye(){return{codeHtml:`<a-calendar
  :events="events"
  @event-click="onEventClick"
/>
<p v-if="lastClick">
  <a-translation
    tag="strong"
    text="_A_CALENDAR_REC_CLICK_"
  />: {{ lastClick }}
</p>`}}function be(){return{codeJs:`// PageCalendarRecurring.js
import {
  ACalendar,
  ATranslation,
} from "aloha-vue";

import RecurringAPI from "./compositionAPI/RecurringAPI";

export default {
  components: {
    ACalendar,
    ATranslation,
  },
  setup() {
    const {
      events,
      lastClick,
      onEventClick,
    } = RecurringAPI({
      events: [
        // Monday to Friday, not on the 12th
        { id: 1, label: "Standup", start: "2026-03-02T09:00:00", end: "2026-03-02T09:15:00", color: "info", recurrence: { frequency: "weekly", weekdays: [1, 2, 3, 4, 5], exceptions: ["2026-03-12"] } },
        // Every second week
        { id: 2, label: "Team meeting", start: "2026-03-05T14:00:00", end: "2026-03-05T15:00:00", color: "primary", recurrence: { frequency: "weekly", interval: 2 } },
        // Every month, six times
        { id: 3, label: "Report", start: "2026-03-15", color: "warning", isAllDay: true, recurrence: { frequency: "monthly", count: 6 } },
        // Every year
        { id: 4, label: "Birthday", start: "2026-03-20", color: "#8e44ad", isAllDay: true, recurrence: { frequency: "yearly" } },
      ],
    });

    return {
      events,
      lastClick,
      onEventClick,
    };
  },
};

// compositionAPI/RecurringAPI.js
import {
  ref,
} from "vue";

export default function RecurringAPI({ events: eventsStart = [] }) {
  const events = ref(eventsStart);
  const lastClick = ref("");

  // The calendar sends the item of the series and the clicked occurrence
  const onEventClick = ({ event, occurrence }) => {
    lastClick.value = \`\${ event.label }: \${ occurrence ? occurrence.date : "-" }\`;
  };

  return {
    events,
    lastClick,
    onEventClick,
  };
}`}}function xe({events:e=[]}){let t=m(e),n=m(``);return{events:t,lastClick:n,onEventClick:({event:e,occurrence:t})=>{n.value=`${e.label}: ${t?t.date:`-`}`}}}var Se={name:`PageCalendarRecurring`,components:{ACalendar:C,AlohaExample:b,ATranslation:E},setup(){let{codeHtml:e}=ye(),{codeJs:t}=be(),{events:n,lastClick:r,onEventClick:i}=xe({events:[{id:1,label:`Standup`,start:`${j(1)}T09:00:00`,end:`${j(1)}T09:15:00`,color:`info`,recurrence:{frequency:`weekly`,weekdays:[1,2,3,4,5],exceptions:[j(12)]}},{id:2,label:`Team meeting`,start:`${j(5)}T14:00:00`,end:`${j(5)}T15:00:00`,color:`primary`,recurrence:{frequency:`weekly`,interval:2}},{id:3,label:`Report`,start:j(15),color:`warning`,isAllDay:!0,recurrence:{frequency:`monthly`,count:6}},{id:4,label:`Birthday`,start:j(20),color:`#8e44ad`,isAllDay:!0,recurrence:{frequency:`yearly`}}]});return{codeHtml:e,codeJs:t,events:n,lastClick:r,onEventClick:i}}},Ce={key:0,class:`a_mt_3 a_mb_0`};function we(e,t,n,i,a,s){let l=_(`a-calendar`),u=_(`a-translation`),m=_(`aloha-example`);return d(),o(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_REC_HEADER_`,description:`_A_CALENDAR_REC_DESCRIPTION_`,props:[`key-recurrence`]},{default:v(()=>[p(l,{events:e.events,onEventClick:e.onEventClick},null,8,[`events`,`onEventClick`]),e.lastClick?(d(),f(`p`,Ce,[p(u,{tag:`strong`,text:`_A_CALENDAR_REC_CLICK_`}),r(`: `+g(e.lastClick),1)])):c(``,!0)]),_:1},8,[`code-html`,`code-js`])}var Te=k(Se,[[`render`,we]]);function Ee(){return{codeHtml:`<a-calendar
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
</a-calendar>`}}function De(){return{codeJs:`import {
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
};`}}var Oe={name:`PageCalendarSlots`,components:{AButton:x,ACalendar:C,AlohaExample:b},setup(){let{codeHtml:e}=Ee(),{codeJs:t}=De();return{codeHtml:e,codeJs:t,events:m(M())}}},ke={class:`a_d_flex a_align_items_center a_gap_2`},Ae={class:`a_m_0`},je={key:0,class:`a_badge a_badge_secondary a_ml_auto`,"aria-hidden":`true`},Me={key:0},Ne={key:1};function Pe(e,t,n,r,i,s){let l=_(`a-button`),u=_(`a-calendar`),m=_(`aloha-example`);return d(),o(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_SLOTS_HEADER_`,description:`_A_CALENDAR_SLOTS_DESCRIPTION_`},{default:v(()=>[p(u,{events:e.events},{header:v(({title:e,goToPreviousMonth:t,goToNextMonth:n})=>[a(`div`,ke,[p(l,{class:`a_btn a_btn_link`,text:`←`,"text-screen-reader":`_A_CALENDAR_PREVIOUS_MONTH_`,onClick:t},null,8,[`onClick`]),a(`h3`,Ae,g(e),1),p(l,{class:`a_btn a_btn_link`,text:`→`,"text-screen-reader":`_A_CALENDAR_NEXT_MONTH_`,onClick:n},null,8,[`onClick`])])]),day:v(({day:e,events:t})=>[a(`span`,null,g(e.day),1),t.length?(d(),f(`span`,je,g(t.length),1)):c(``,!0)]),event:v(({event:e,isStart:t})=>[t?(d(),f(`strong`,Me,g(e.label),1)):(d(),f(`span`,Ne,`… `+g(e.label),1))]),_:1},8,[`events`])]),_:1},8,[`code-html`,`code-js`])}var Fe=k(Oe,[[`render`,Pe]]);function Ie(){return{codeHtml:`<a-calendar
  v-model="model"
  v-model:view="view"
  :events="events"
  :hour-start="6"
  :hour-end="22"
/>
<p>
  <a-translation
    tag="strong"
    text="_A_CALENDAR_VIEW_"
  />: {{ view }}
</p>`}}function Le(){return{codeJs:`import {
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
      // all day and over several days: in the row above the hours
      { id: 1, label: "Vacation", start: "2026-03-08", end: "2026-03-14", color: "success", isAllDay: true },
      { id: 2, label: "Workshop", start: "2026-03-12T09:00:00", end: "2026-03-13T17:00:00", color: "info" },
      // with a time: in the time grid, overlapping events share the width of the day
      { id: 3, label: "Lunch", start: "2026-03-11T12:00:00", end: "2026-03-11T13:00:00", color: "success" },
      { id: 4, label: "Customer call", start: "2026-03-11T12:30:00", end: "2026-03-11T13:30:00", color: "info" },
      { id: 5, label: "Planning", start: "2026-03-11T12:45:00", end: "2026-03-11T14:00:00", color: "#8e44ad" },
    ]);
    const model = ref("2026-03-11");
    const view = ref("week");

    return {
      events,
      model,
      view,
    };
  },
};`}}var Re={name:`PageCalendarWeek`,components:{ACalendar:C,AlohaExample:b,ATranslation:E},setup(){let{codeHtml:e}=Ie(),{codeJs:t}=Le();return{codeHtml:e,codeJs:t,events:m(M()),model:m(j(11)),view:m(`week`)}}},ze={class:`a_mt_3 a_mb_0`};function Be(e,t,n,i,s,c){let l=_(`a-calendar`),u=_(`a-translation`),f=_(`aloha-example`);return d(),o(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_WEEK_HEADER_`,description:`_A_CALENDAR_WEEK_DESCRIPTION_`,props:[`view`,`views`,`hour-start`,`hour-end`,`scroll-to-hour`,`time-step`]},{default:v(()=>[p(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,view:e.view,"onUpdate:view":t[1]||=t=>e.view=t,events:e.events,"hour-start":6,"hour-end":22},null,8,[`modelValue`,`view`,`events`]),a(`p`,ze,[p(u,{tag:`strong`,text:`_A_CALENDAR_VIEW_`}),r(`: `+g(e.view),1)])]),_:1},8,[`code-html`,`code-js`])}var Ve=k(Re,[[`render`,Be]]);function $(){return{dataEvents:[{name:`day-click`,description:`_A_CALENDAR_EVENTS_DAY_CLICK_`},{name:`event-click`,description:`_A_CALENDAR_EVENTS_EVENT_CLICK_`},{name:`event-drop`,description:`_A_CALENDAR_EVENTS_EVENT_DROP_`},{name:`event-resize`,description:`_A_CALENDAR_EVENTS_EVENT_RESIZE_`},{name:`more-click`,description:`_A_CALENDAR_EVENTS_MORE_CLICK_`},{name:`range-change`,description:`_A_CALENDAR_EVENTS_RANGE_CHANGE_`},{name:`time-click`,description:`_A_CALENDAR_EVENTS_TIME_CLICK_`},{name:`update:modelValue`,description:`_A_CALENDAR_EVENTS_UPDATE_MODEL_VALUE_`},{name:`update:view`,description:`_A_CALENDAR_EVENTS_UPDATE_VIEW_`}]}}function He(){return{dataExposes:[{name:`changeView`,description:`_A_CALENDAR_EXPOSES_CHANGE_VIEW_`,type:`Function`},{name:`focusDay`,description:`_A_CALENDAR_EXPOSES_FOCUS_DAY_`,type:`Function`},{name:`goToDate`,description:`_A_CALENDAR_EXPOSES_GO_TO_DATE_`,type:`Function`},{name:`goToNext`,description:`_A_CALENDAR_EXPOSES_GO_TO_NEXT_`,type:`Function`},{name:`goToNextMonth`,description:`_A_CALENDAR_EXPOSES_GO_TO_NEXT_MONTH_`,type:`Function`},{name:`goToPrevious`,description:`_A_CALENDAR_EXPOSES_GO_TO_PREVIOUS_`,type:`Function`},{name:`goToPreviousMonth`,description:`_A_CALENDAR_EXPOSES_GO_TO_PREVIOUS_MONTH_`,type:`Function`},{name:`goToToday`,description:`_A_CALENDAR_EXPOSES_GO_TO_TODAY_`,type:`Function`}]}}function Ue(){let e=u(()=>w({placeholder:`_A_CALENDAR_COMPONENT_NAME_`}));return{pageTitle:u(()=>`ACalendar${e.value?` (${e.value})`:``}`)}}function We(){return{dataProps:[{name:`colorDefault`,description:`_A_CALENDAR_PROPS_COLOR_DEFAULT_`,type:`String`,default:`"primary"`,required:!1},{name:`events`,description:`_A_CALENDAR_PROPS_EVENTS_`,type:`Array`,default:`[]`,required:!1},{name:`firstDayOfWeek`,description:`_A_CALENDAR_PROPS_FIRST_DAY_OF_WEEK_`,type:`Number`,default:`1`,required:!1},{name:`hourEnd`,description:`_A_CALENDAR_PROPS_HOUR_END_`,type:`Number`,default:`24`,required:!1},{name:`hourStart`,description:`_A_CALENDAR_PROPS_HOUR_START_`,type:`Number`,default:`0`,required:!1},{name:`id`,description:`_A_CALENDAR_PROPS_ID_`,type:`String`,default:`uniqueId("a_calendar_")`,required:!1},{name:`isDraggable`,description:`_A_CALENDAR_PROPS_IS_DRAGGABLE_`,type:`Boolean | Function`,default:`false`,required:!1},{name:`isResizable`,description:`_A_CALENDAR_PROPS_IS_RESIZABLE_`,type:`Boolean | Function`,default:`false`,required:!1},{name:`keyColor`,description:`_A_CALENDAR_PROPS_KEY_COLOR_`,type:`String | Function`,default:`"color"`,required:!1},{name:`keyEnd`,description:`_A_CALENDAR_PROPS_KEY_END_`,type:`String | Function`,default:`"end"`,required:!1},{name:`keyId`,description:`_A_CALENDAR_PROPS_KEY_ID_`,type:`String | Function`,default:`"id"`,required:!1},{name:`keyIsAllDay`,description:`_A_CALENDAR_PROPS_KEY_IS_ALL_DAY_`,type:`String | Function`,default:`"isAllDay"`,required:!1},{name:`keyLabel`,description:`_A_CALENDAR_PROPS_KEY_LABEL_`,type:`String | Function`,default:`"label"`,required:!1},{name:`keyRecurrence`,description:`_A_CALENDAR_PROPS_KEY_RECURRENCE_`,type:`String | Function`,default:`"recurrence"`,required:!1},{name:`keyStart`,description:`_A_CALENDAR_PROPS_KEY_START_`,type:`String | Function`,default:`"start"`,required:!1},{name:`maxEventsPerDay`,description:`_A_CALENDAR_PROPS_MAX_EVENTS_PER_DAY_`,type:`Number`,default:`3`,required:!1},{name:`modelValue`,description:`_A_CALENDAR_PROPS_MODEL_VALUE_`,type:`String | Date | Number`,default:`undefined`,required:!1},{name:`scrollToHour`,description:`_A_CALENDAR_PROPS_SCROLL_TO_HOUR_`,type:`Number`,default:`8`,required:!1},{name:`timeStep`,description:`_A_CALENDAR_PROPS_TIME_STEP_`,type:`Number`,default:`30`,required:!1},{name:`view`,description:`_A_CALENDAR_PROPS_VIEW_`,type:`String`,default:`"month"`,required:!1},{name:`views`,description:`_A_CALENDAR_PROPS_VIEWS_`,type:`Array`,default:`["month", "week", "day"]`,required:!1}]}}function Ge(){return{dataSlots:[{name:`day`,description:`_A_CALENDAR_SLOT_DAY_`},{name:`event`,description:`_A_CALENDAR_SLOT_EVENT_`},{name:`header`,description:`_A_CALENDAR_SLOT_HEADER_`}]}}function Ke(){return{dataTranslate:[`_A_CALENDAR_PREVIOUS_MONTH_`,`_A_CALENDAR_NEXT_MONTH_`,`_A_CALENDAR_TODAY_`,`_A_CALENDAR_MORE_{{count}}_`,`_A_CALENDAR_EVENTS_{{count}}_`,`_A_CALENDAR_PREVIOUS_WEEK_`,`_A_CALENDAR_NEXT_WEEK_`,`_A_CALENDAR_VIEW_`,`_A_CALENDAR_VIEW_MONTH_`,`_A_CALENDAR_VIEW_WEEK_`,`_A_CALENDAR_ALL_DAY_`,`_A_CALENDAR_PREVIOUS_DAY_`,`_A_CALENDAR_NEXT_DAY_`,`_A_CALENDAR_VIEW_DAY_`,`_A_CALENDAR_RECURRING_`]}}var qe={name:`PageCalendar`,components:{AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:E,PageCalendarBasic:I,PageCalendarCreate:W,PageCalendarDay:Y,PageCalendarDragDrop:oe,PageCalendarMaxEvents:pe,PageCalendarMultiDay:ve,PageCalendarRecurring:Te,PageCalendarSlots:Fe,PageCalendarWeek:Ve},setup(){let{pageTitle:e}=Ue(),{dataProps:t}=We(),{dataEvents:n}=$(),{dataSlots:r}=Ge(),{dataExposes:i}=He(),{dataTranslate:a}=Ke();return{dataEvents:n,dataExposes:i,dataProps:t,dataSlots:r,dataTranslate:a,pageTitle:e}}};function Je(e,t,n,r,i,a){let s=_(`a-translation`),c=_(`page-calendar-basic`),l=_(`page-calendar-multi-day`),u=_(`page-calendar-recurring`),f=_(`page-calendar-week`),m=_(`page-calendar-day`),h=_(`page-calendar-max-events`),g=_(`page-calendar-slots`),y=_(`page-calendar-create`),b=_(`page-calendar-drag-drop`),x=_(`aloha-table-props`),S=_(`aloha-table-translate`),C=_(`aloha-table-css-vars`),w=_(`aloha-page`);return d(),o(w,{"page-title":e.pageTitle},{body:v(()=>[p(s,{tag:`p`,html:`_A_CALENDAR_COMPONENT_DESCRIPTION_`}),p(c),p(l),p(u),p(f),p(m),p(h),p(g),p(y),p(b),p(x,{"table-label":`ACalendar`,data:e.dataProps},null,8,[`data`]),p(x,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`description`]},null,8,[`data`]),p(x,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),p(x,{"table-label":`Exposes`,data:e.dataExposes,columns:[`name`,`type`,`description`]},null,8,[`data`]),p(S,{data:e.dataTranslate},null,8,[`data`]),p(C,{files:`components/ACalendar`})]),_:1},8,[`page-title`])}var Ye=k(qe,[[`render`,Je]]);export{Ye as default};