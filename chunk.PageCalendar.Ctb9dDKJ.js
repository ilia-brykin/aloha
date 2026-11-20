import{t as e}from"./chunk.AlohaPage.Duws5BQX.js";import{t}from"./chunk.AlohaTableProps.B2-hzvZR.js";import{t as n}from"./chunk.AlohaTableTranslate.CyWQRBTY.js";import{Bt as r,Ct as i,Ft as a,It as o,Jt as s,Lt as c,Mt as l,Pt as u,Qt as d,Rt as f,Vt as p,an as m,cn as h,en as g,mn as _,nn as v,on as y,zt as b}from"./chunk.vendor.CTxSDDRk.js";import{t as x}from"./chunk.AlohaExample.hbfebTmY.js";import{Gt as S,Kt as C,O as w,Wt as T,Z as E,Zt as D,h as O,it as k,jt as A,ut as j}from"./bundle.index.Cwl2mAuh.js";import{t as M}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function ee(){return{codeHtml:`<a-calendar
  v-model="model"
  :events="events"
/>
<p>
  <a-translation
    tag="strong"
    text="_A_CALENDAR_SELECTED_"
  />: {{ model }}
</p>`}}function te(){return{codeJs:`import {
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
};`}}var ne=`YYYY-MM-DD[T]HH:mm:ss.SSSZ`;function N(e){return i().startOf(`month`).add(e-1,`days`).format(`YYYY-MM-DD`)}function P(){let e=i().startOf(`month`),t=(t,n)=>{let r=e.clone().add(t-1,`days`);if(!n)return r.format(`YYYY-MM-DD`);let[i,a]=n.split(`:`);return r.hours(+i).minutes(+a).format(ne)};return[{id:1,label:`Team meeting`,start:t(3,`10:00`),end:t(3,`11:00`),color:`primary`},{id:2,label:`Vacation`,start:t(8),end:t(14),color:`success`,isAllDay:!0},{id:3,label:`Dentist`,start:t(12,`08:30`),end:t(12,`09:15`),color:`warning`},{id:4,label:`Workshop`,start:t(12,`09:00`),end:t(13,`17:00`),color:`info`},{id:5,label:`Sprint review`,start:t(12,`14:00`),end:t(12,`15:00`),color:`secondary`},{id:6,label:`Release`,start:t(12,`16:00`),end:t(12,`16:30`),color:`danger`},{id:9,label:`Lunch`,start:t(11,`12:00`),end:t(11,`13:00`),color:`success`},{id:10,label:`Customer call`,start:t(11,`12:30`),end:t(11,`13:30`),color:`info`},{id:11,label:`Planning`,start:t(11,`12:45`),end:t(11,`14:00`),color:`#8e44ad`},{id:7,label:`Birthday`,start:t(20),color:`#8e44ad`,isAllDay:!0},{id:8,label:`Conference`,start:t(26),end:t(33),color:`tertiary`,isAllDay:!0}]}var F={name:`PageCalendarBasic`,components:{ACalendar:S,AlohaExample:x,ATranslation:k},setup(){let{codeHtml:e}=ee(),{codeJs:t}=te();return{codeHtml:e,codeJs:t,events:h(P()),model:h(void 0)}}},I={class:`a_mt_3 a_mb_0`};function L(e,t,n,i,s,c){let l=v(`a-calendar`),u=v(`a-translation`),f=v(`aloha-example`);return d(),o(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,description:`_A_CALENDAR_BASIC_DESCRIPTION_`,props:[`events`,`model-value`]},{default:y(()=>[p(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,events:e.events},null,8,[`modelValue`,`events`]),a(`p`,I,[p(u,{tag:`strong`,text:`_A_CALENDAR_SELECTED_`}),r(`: `+_(e.model),1)])]),_:1},8,[`code-html`,`code-js`])}var R=M(F,[[`render`,L]]),z=`YYYY-MM-DD[T]HH:mm:ss.SSSZ`,B=`page_calendar_create_btn_delete`;function V(){let e=h(P().slice(0,3)),t=h({}),n=h(void 0),r=h(!1),a=[{type:`text`,id:`label`,label:`_A_CALENDAR_CREATE_LABEL_`,required:!0,classColumn:`a_column a_column_12`},{type:`datetime`,id:`start`,label:`_A_CALENDAR_CREATE_START_`},{type:`datetime`,id:`end`,label:`_A_CALENDAR_CREATE_END_`},{type:`select`,id:`color`,label:`_A_CALENDAR_CREATE_COLOR_`,data:[`primary`,`secondary`,`tertiary`,`success`,`info`,`warning`,`danger`,`gray`].map(e=>({label:e,value:e}))},{type:`oneCheckbox`,id:`isAllDay`,label:`_A_CALENDAR_CREATE_ALL_DAY_`},{type:`select`,id:`repeat`,label:`_A_CALENDAR_CREATE_REPEAT_`,translateData:!0,data:[``,`daily`,`weekly`,`monthly`,`yearly`].map(e=>({label:`_A_CALENDAR_CREATE_REPEAT_${(e||`none`).toUpperCase()}_`,value:e}))}],o=u(()=>n.value!==void 0),c=u(()=>o.value?`_A_CALENDAR_CREATE_MODAL_EDIT_`:`_A_CALENDAR_CREATE_MODAL_NEW_`),l=u(()=>!t.value.label||!t.value.start),d=({start:e,end:a})=>{n.value=void 0,t.value={label:``,start:i(e).format(z),end:i(a).format(z),color:`primary`,isAllDay:!1,repeat:``},r.value=!0},f=e=>{let t=i(e).hours(9).minutes(0);d({start:t,end:t.clone().add(1,`hour`)})},p=({date:e})=>{f(e)},m=({start:e})=>{d({start:e,end:i(e).add(1,`hour`)})},g=()=>{f(new Date)},_=({event:e})=>{n.value=e.id,t.value={...e,repeat:e.recurrence?.frequency||``},r.value=!0},v=()=>{r.value=!1},y=e=>{let{repeat:n,...r}=t.value;return{...r,id:e,recurrence:n?{...r.recurrence,frequency:n}:void 0}},b=()=>{o.value?e.value=e.value.map(e=>e.id===n.value?y(n.value):e):e.value=[...e.value,y(Date.now())],v()},{closeConfirm:x,openConfirm:S}=w();return{btnDeleteId:B,closeModal:v,dataForm:a,deleteEvent:()=>{S({headerText:`_A_CALENDAR_CREATE_DELETE_CONFIRM_HEADER_`,bodyHtml:`_A_CALENDAR_CREATE_DELETE_CONFIRM_BODY_{{label}}_`,extra:{label:A(t.value.label)},saveButtonText:`_A_CALENDAR_CREATE_DELETE_`,saveButtonClass:`a_btn a_btn_danger`,save:()=>{e.value=e.value.filter(e=>e.id!==n.value),x(),v()},close:()=>{x(),s(()=>j({selector:`#${B}`}))}})},events:e,headerText:c,isEditing:o,isModalVisible:r,isSaveDisabled:l,model:t,onDayClick:p,onEventClick:_,onTimeClick:m,openModalToday:g,save:b}}function H(){return{codeHtml:`<a-button
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
</a-modal-form>`}}function U(){return{codeJs:`// PageCalendarCreate.js
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
}`}}var W={name:`PageCalendarCreate`,components:{AButton:C,ACalendar:S,AlohaExample:x,AModalForm:O},setup(){let{codeHtml:e}=H(),{codeJs:t}=U(),{btnDeleteId:n,closeModal:r,dataForm:i,deleteEvent:a,events:o,headerText:s,isEditing:c,isModalVisible:l,isSaveDisabled:u,model:d,onDayClick:f,onEventClick:p,onTimeClick:m,openModalToday:h,save:g}=V();return{btnDeleteId:n,closeModal:r,codeHtml:e,codeJs:t,dataForm:i,deleteEvent:a,events:o,headerText:s,isEditing:c,isModalVisible:l,isSaveDisabled:u,model:d,onDayClick:f,onEventClick:p,onTimeClick:m,openModalToday:h,save:g}}};function G(e,t,n,r,i,a){let s=v(`a-button`),l=v(`a-calendar`),u=v(`a-modal-form`),f=v(`aloha-example`);return d(),o(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_CREATE_HEADER_`,description:`_A_CALENDAR_CREATE_DESCRIPTION_`},{default:y(()=>[p(s,{class:`a_btn a_btn_primary a_mb_3`,text:`_A_CALENDAR_CREATE_BTN_`,onClick:e.openModalToday},null,8,[`onClick`]),p(l,{events:e.events,onDayClick:e.onDayClick,onEventClick:e.onEventClick,onTimeClick:e.onTimeClick},null,8,[`events`,`onDayClick`,`onEventClick`,`onTimeClick`]),e.isModalVisible?(d(),o(u,{key:0,modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"data-form":e.dataForm,"header-text":e.headerText,close:e.closeModal,save:e.save,"disabled-save":e.isSaveDisabled,"class-columns":`a_columns a_columns_count_12 a_columns_gap_3`,"class-column-default":`a_column a_column_6 a_column_12_touch`},b({_:2},[e.isEditing?{name:`modalFooterAppend`,fn:y(()=>[p(s,{class:`a_btn a_btn_outline_danger`,id:e.btnDeleteId,text:`_A_CALENDAR_CREATE_DELETE_`,onClick:e.deleteEvent},null,8,[`id`,`onClick`])]),key:`0`}:void 0]),1032,[`modelValue`,`data-form`,`header-text`,`close`,`save`,`disabled-save`])):c(``,!0)]),_:1},8,[`code-html`,`code-js`])}var K=M(W,[[`render`,G]]);function q(){return{codeHtml:`<a-calendar
  v-model="model"
  v-model:view="view"
  :events="events"
  :views="['day', 'week']"
  :hour-start="7"
  :hour-end="20"
/>`}}function J(){return{codeJs:`import {
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
};`}}var Y={name:`PageCalendarDay`,components:{ACalendar:S,AlohaExample:x},setup(){let{codeHtml:e}=q(),{codeJs:t}=J();return{codeHtml:e,codeJs:t,events:h(P()),model:h(N(11)),view:h(`day`)}}};function X(e,t,n,r,i,a){let s=v(`a-calendar`),c=v(`aloha-example`);return d(),o(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_DAY_HEADER_`,description:`_A_CALENDAR_DAY_DESCRIPTION_`,props:[`view`,`views`]},{default:y(()=>[p(s,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,view:e.view,"onUpdate:view":t[1]||=t=>e.view=t,events:e.events,views:[`day`,`week`],"hour-start":7,"hour-end":20},null,8,[`modelValue`,`view`,`events`])]),_:1},8,[`code-html`,`code-js`])}var Z=M(Y,[[`render`,X]]),re=`YYYY-MM-DD[T]HH:mm:ss.SSSZ`;function ie({events:e=[],date:t}){let n=h(e),r=h(t),a=h(`week`),o=h(``);return{events:n,isDraggable:e=>!e.isLocked,lastDrop:o,model:r,onEventChange:({event:e,start:t,end:r})=>{let a=e.isAllDay?`YYYY-MM-DD`:re;n.value=n.value.map(n=>n.id===e.id?{...n,start:i(t).format(a),end:i(r).format(a)}:n),o.value=`${e.label}: ${i(t).format(`DD.MM.YYYY HH:mm`)} – ${i(r).format(`DD.MM.YYYY HH:mm`)}`},view:a}}function ae(){return{codeHtml:`<a-calendar
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
</p>`}}function oe(){return{codeJs:`// PageCalendarDragDrop.js
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
}`}}var se={name:`PageCalendarDragDrop`,components:{ACalendar:S,AlohaExample:x,ATranslation:k},setup(){let{codeHtml:e}=ae(),{codeJs:t}=oe(),{events:n,isDraggable:r,lastDrop:i,model:a,onEventChange:o,view:s}=ie({events:P().map(e=>e.id===7?{...e,isLocked:!0}:e),date:N(11)});return{codeHtml:e,codeJs:t,events:n,isDraggable:r,lastDrop:i,model:a,onEventChange:o,view:s}}},ce={key:0,class:`a_mt_3 a_mb_0`};function le(e,t,n,i,a,s){let l=v(`a-calendar`),u=v(`a-translation`),m=v(`aloha-example`);return d(),o(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_DRAG_HEADER_`,description:`_A_CALENDAR_DRAG_DESCRIPTION_`,props:[`is-draggable`,`is-resizable`]},{default:y(()=>[p(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,view:e.view,"onUpdate:view":t[1]||=t=>e.view=t,events:e.events,"is-draggable":e.isDraggable,"is-resizable":e.isDraggable,onEventDrop:e.onEventChange,onEventResize:e.onEventChange},null,8,[`modelValue`,`view`,`events`,`is-draggable`,`is-resizable`,`onEventDrop`,`onEventResize`]),e.lastDrop?(d(),f(`p`,ce,[p(u,{tag:`strong`,text:`_A_CALENDAR_DRAG_LAST_`}),r(`: `+_(e.lastDrop),1)])):c(``,!0)]),_:1},8,[`code-html`,`code-js`])}var ue=M(se,[[`render`,le]]);function de({events:e=[]}){let t=h(e),n=h(void 0),r=h(``);return{calendarRef:n,download:()=>{n.value.downloadIcs({fileName:`aloha-calendar.ics`,calendarName:`Aloha`})},events:t,ics:r,showPreview:()=>{r.value=n.value.getIcs({calendarName:`Aloha`})}}}function fe(){return{codeHtml:`<div class="a_d_flex a_gap_2">
  <a-button
    class="a_btn a_btn_primary"
    text="_A_CALENDAR_EXPORT_DOWNLOAD_"
    @click="download"
  />
  <a-button
    class="a_btn a_btn_outline_secondary"
    text="_A_CALENDAR_EXPORT_PREVIEW_"
    @click="showPreview"
  />
</div>
<a-calendar
  ref="calendarRef"
  :events="events"
/>
<pre v-if="ics">{{ ics }}</pre>`}}function pe(){return{codeJs:`// PageCalendarExport.js
import {
  AButton,
  ACalendar,
} from "aloha-vue";

import ExportAPI from "./compositionAPI/ExportAPI";

export default {
  components: {
    AButton,
    ACalendar,
  },
  setup() {
    const {
      calendarRef,
      download,
      events,
      ics,
      showPreview,
    } = ExportAPI({
      events: [
        { id: 1, label: "Team meeting", start: "2026-03-03T10:00:00", end: "2026-03-03T11:00:00" },
        { id: 2, label: "Vacation", start: "2026-03-08", end: "2026-03-14", isAllDay: true },
        { id: "standup", label: "Standup", start: "2026-03-02T09:00:00", end: "2026-03-02T09:15:00", recurrence: { frequency: "weekly", weekdays: [1, 2, 3, 4, 5], exceptions: ["2026-03-12"] } },
      ],
    });

    return {
      calendarRef,
      download,
      events,
      ics,
      showPreview,
    };
  },
};

// compositionAPI/ExportAPI.js
import {
  ref,
} from "vue";

export default function ExportAPI({ events: eventsStart = [] }) {
  const events = ref(eventsStart);
  const calendarRef = ref(undefined);
  const ics = ref("");

  // All events, not only the shown days. A series is exported as RRULE.
  const download = () => {
    calendarRef.value.downloadIcs({ fileName: "aloha-calendar.ics", calendarName: "Aloha" });
  };

  const showPreview = () => {
    ics.value = calendarRef.value.getIcs({ calendarName: "Aloha" });
  };

  return {
    calendarRef,
    download,
    events,
    ics,
    showPreview,
  };
}

// Without the component, e.g. on a server:
// import { getCalendarIcs } from "aloha-vue";
// const ICS = getCalendarIcs({ events, calendarName: "Aloha", keyLabel: "title" });`}}var me={name:`PageCalendarExport`,components:{AButton:C,ACalendar:S,AlohaExample:x},setup(){let{codeHtml:e}=fe(),{codeJs:t}=pe(),{calendarRef:n,download:r,events:i,ics:a,showPreview:o}=de({events:[...P().slice(0,3),{id:`standup`,label:`Standup`,start:`${N(2)}T09:00:00`,end:`${N(2)}T09:15:00`,color:`info`,recurrence:{frequency:`weekly`,weekdays:[1,2,3,4,5],exceptions:[N(12)]}}]});return{calendarRef:n,codeHtml:e,codeJs:t,download:r,events:i,ics:a,showPreview:o}}},he={class:`a_d_flex a_gap_2 a_mb_3`},ge={key:0,class:`a_mt_3 a_mb_0`};function _e(e,t,n,r,i,s){let l=v(`a-button`),u=v(`a-calendar`),m=v(`aloha-example`);return d(),o(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_EXPORT_HEADER_`,description:`_A_CALENDAR_EXPORT_DESCRIPTION_`},{default:y(()=>[a(`div`,he,[p(l,{class:`a_btn a_btn_primary`,text:`_A_CALENDAR_EXPORT_DOWNLOAD_`,onClick:e.download},null,8,[`onClick`]),p(l,{class:`a_btn a_btn_outline_secondary`,text:`_A_CALENDAR_EXPORT_PREVIEW_`,onClick:e.showPreview},null,8,[`onClick`])]),p(u,{ref:`calendarRef`,events:e.events},null,8,[`events`]),e.ics?(d(),f(`pre`,ge,_(e.ics),1)):c(``,!0)]),_:1},8,[`code-html`,`code-js`])}var ve=M(me,[[`render`,_e]]);function ye(){return{codeHtml:`<div class="a_d_flex a_flex_wrap a_gap_3 a_align_items_end">
  <a-input-file
    v-model="file"
    :is-dropzone="true"
    accept=".ics,text/calendar"
    label="_A_CALENDAR_IMPORT_FILE_"
  />
  <a-button
    class="a_btn a_btn_outline_secondary"
    text="_A_CALENDAR_IMPORT_SAMPLE_"
    @click="useSample"
  />
</div>
<template v-if="imported.length || skipped.length || warnings.length">
  <div class="a_d_flex a_align_items_center a_gap_3">
    <a-translation
      tag="strong"
      text="_A_CALENDAR_IMPORT_READ_{{count}}_"
      :extra="{ count: imported.length }"
    />
    <a-button
      v-if="imported.length"
      class="a_btn a_btn_primary"
      text="_A_CALENDAR_IMPORT_SAVE_"
      @click="save"
    />
  </div>
  <div v-if="warnings.length">
    <a-translation
      tag="strong"
      text="_A_CALENDAR_IMPORT_WARNINGS_"
    />
    <ul>
      <li
        v-for="(warning, index) in warnings"
        :key="index"
      >
        <a-translation
          tag="span"
          :text="getCodeText(warning.code)"
          :extra="{ label: warning.label, value: warning.value }"
        />
      </li>
    </ul>
  </div>
  <div v-if="skipped.length">
    <a-translation
      tag="strong"
      text="_A_CALENDAR_IMPORT_SKIPPED_"
    />
    <ul>
      <li
        v-for="(item, index) in skipped"
        :key="index"
      >
        <a-translation
          tag="span"
          :text="getCodeText(item.code)"
          :extra="{ label: item.label }"
        />
      </li>
    </ul>
  </div>
</template>
<a-calendar
  :events="calendarEvents"
/>`}}var be={cancelled:`_A_CALENDAR_IMPORT_CODE_CANCELLED_`,noStart:`_A_CALENDAR_IMPORT_CODE_NO_START_`,rruleNotSupported:`_A_CALENDAR_IMPORT_CODE_RRULE_NOT_SUPPORTED_`,timeZoneUnknown:`_A_CALENDAR_IMPORT_CODE_TIME_ZONE_UNKNOWN_`};function xe({getSampleIcs:e=()=>``}={}){let t=h([]),n=h(void 0),r=h([]),i=h([]),a=h([]),o=u(()=>[...t.value,...r.value]),s=e=>{let t=T(e);r.value=t.events,i.value=t.skipped,a.value=t.warnings};return m(n,async e=>{e?.file&&s(await e.file.text())}),{calendarEvents:o,file:n,getCodeText:e=>be[e]||e,imported:r,save:()=>{t.value=[...t.value,...r.value],r.value=[],i.value=[],a.value=[],n.value=void 0},skipped:i,useSample:()=>{s(e())},warnings:a}}function Se(){return{codeJs:`// PageCalendarImport.js
import {
  AButton,
  ACalendar,
  AInputFile,
  ATranslation,
} from "aloha-vue";

import ImportAPI from "./compositionAPI/ImportAPI";

export default {
  components: {
    AButton,
    ACalendar,
    AInputFile,
    ATranslation,
  },
  setup() {
    const {
      calendarEvents,
      file,
      getCodeText,
      imported,
      save,
      skipped,
      useSample,
      warnings,
    } = ImportAPI({
      getSampleIcs: () => "BEGIN:VCALENDAR\\r\\n...\\r\\nEND:VCALENDAR",
    });

    return {
      calendarEvents,
      file,
      getCodeText,
      imported,
      save,
      skipped,
      useSample,
      warnings,
    };
  },
};

// compositionAPI/ImportAPI.js
import {
  computed,
  ref,
  watch,
} from "vue";

import {
  parseCalendarIcs,
} from "aloha-vue";

// The codes of parseCalendarIcs and their texts
const CODE_TEXTS = {
  cancelled: "_A_CALENDAR_IMPORT_CODE_CANCELLED_",
  noStart: "_A_CALENDAR_IMPORT_CODE_NO_START_",
  rruleNotSupported: "_A_CALENDAR_IMPORT_CODE_RRULE_NOT_SUPPORTED_",
  timeZoneUnknown: "_A_CALENDAR_IMPORT_CODE_TIME_ZONE_UNKNOWN_",
};

export default function ImportAPI({ getSampleIcs = () => "" } = {}) {
  // The saved events (here only in the page, in an application on the server)
  const events = ref([]);
  const file = ref(undefined);
  const imported = ref([]);
  const skipped = ref([]);
  const warnings = ref([]);

  // The calendar shows the saved events and the read events before they are saved
  const calendarEvents = computed(() => [...events.value, ...imported.value]);

  const readText = text => {
    const RESULT = parseCalendarIcs(text);
    imported.value = RESULT.events;
    skipped.value = RESULT.skipped;
    warnings.value = RESULT.warnings;
  };

  // AInputFile gives { name, size, type, file }
  watch(file, async value => {
    if (value?.file) {
      readText(await value.file.text());
    }
  });

  const useSample = () => {
    readText(getSampleIcs());
  };

  const getCodeText = code => CODE_TEXTS[code] || code;

  // In an application: send imported.value to the server and save it there
  const save = () => {
    events.value = [...events.value, ...imported.value];
    imported.value = [];
    skipped.value = [];
    warnings.value = [];
    file.value = undefined;
  };

  return {
    calendarEvents,
    file,
    getCodeText,
    imported,
    save,
    skipped,
    useSample,
    warnings,
  };
}`}}var Q=e=>N(e).replace(/-/g,``);function Ce(){return[`BEGIN:VCALENDAR`,`VERSION:2.0`,`PRODID:-//Example//Team//EN`,`BEGIN:VEVENT`,`UID:planning@example.com`,`SUMMARY:Planning call (New York)`,`DTSTART;TZID=America/New_York:${Q(4)}T100000`,`DTEND;TZID=America/New_York:${Q(4)}T110000`,`LOCATION:Zoom`,`END:VEVENT`,`BEGIN:VEVENT`,`UID:london@example.com`,`SUMMARY:Call London (Outlook)`,`DTSTART;TZID=GMT Standard Time:${Q(6)}T120000`,`DTEND;TZID=GMT Standard Time:${Q(6)}T123000`,`END:VEVENT`,`BEGIN:VEVENT`,`UID:yoga@example.com`,`SUMMARY:Yoga`,`DTSTART:${Q(2)}T180000`,`DTEND:${Q(2)}T190000`,`RRULE:FREQ=WEEKLY;BYDAY=MO,TH;COUNT=8`,`EXDATE:${Q(9)}T180000`,`END:VEVENT`,`BEGIN:VEVENT`,`UID:yoga@example.com`,`SUMMARY:Yoga (in the park)`,`RECURRENCE-ID:${Q(5)}T180000`,`DTSTART:${Q(5)}T170000`,`DTEND:${Q(5)}T180000`,`END:VEVENT`,`BEGIN:VEVENT`,`UID:trip@example.com`,`SUMMARY:Trip to Hamburg`,`DTSTART;VALUE=DATE:${Q(23)}`,`DTEND;VALUE=DATE:${Q(26)}`,`END:VEVENT`,`BEGIN:VEVENT`,`UID:board@example.com`,`SUMMARY:Board meeting`,`DTSTART:${Q(10)}T090000`,`DTEND:${Q(10)}T100000`,`RRULE:FREQ=MONTHLY;BYDAY=2TU`,`END:VEVENT`,`BEGIN:VEVENT`,`UID:lunch@example.com`,`SUMMARY:Team lunch`,`STATUS:CANCELLED`,`DTSTART:${Q(12)}T120000`,`END:VEVENT`,`END:VCALENDAR`].join(`\r
`)}var we={name:`PageCalendarImport`,components:{AButton:C,ACalendar:S,AInputFile:E,AlohaExample:x,ATranslation:k},setup(){let{codeHtml:e}=ye(),{codeJs:t}=Se(),{calendarEvents:n,file:r,getCodeText:i,imported:a,save:o,skipped:s,useSample:c,warnings:l}=xe({getSampleIcs:Ce});return{calendarEvents:n,codeHtml:e,codeJs:t,file:r,getCodeText:i,imported:a,save:o,skipped:s,useSample:c,warnings:l}}},Te={class:`a_d_flex a_flex_wrap a_gap_3 a_align_items_end a_mb_3`},Ee={class:`a_d_flex a_align_items_center a_gap_3 a_mb_3`},De={key:0},Oe={key:1};function ke(e,t,n,r,i,s){let u=v(`a-input-file`),m=v(`a-button`),h=v(`a-translation`),_=v(`a-calendar`),b=v(`aloha-example`);return d(),o(b,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_IMPORT_HEADER_`,description:`_A_CALENDAR_IMPORT_DESCRIPTION_`},{default:y(()=>[a(`div`,Te,[p(u,{modelValue:e.file,"onUpdate:modelValue":t[0]||=t=>e.file=t,"is-dropzone":!0,accept:`.ics,text/calendar`,label:`_A_CALENDAR_IMPORT_FILE_`},null,8,[`modelValue`]),p(m,{class:`a_btn a_btn_outline_secondary`,text:`_A_CALENDAR_IMPORT_SAMPLE_`,onClick:e.useSample},null,8,[`onClick`])]),e.imported.length||e.skipped.length||e.warnings.length?(d(),f(l,{key:0},[a(`div`,Ee,[p(h,{tag:`strong`,text:`_A_CALENDAR_IMPORT_READ_{{count}}_`,extra:{count:e.imported.length}},null,8,[`extra`]),e.imported.length?(d(),o(m,{key:0,class:`a_btn a_btn_primary`,text:`_A_CALENDAR_IMPORT_SAVE_`,onClick:e.save},null,8,[`onClick`])):c(``,!0)]),e.warnings.length?(d(),f(`div`,De,[p(h,{tag:`strong`,text:`_A_CALENDAR_IMPORT_WARNINGS_`}),a(`ul`,null,[(d(!0),f(l,null,g(e.warnings,(t,n)=>(d(),f(`li`,{key:n},[p(h,{tag:`span`,text:e.getCodeText(t.code),extra:{label:t.label,value:t.value}},null,8,[`text`,`extra`])]))),128))])])):c(``,!0),e.skipped.length?(d(),f(`div`,Oe,[p(h,{tag:`strong`,text:`_A_CALENDAR_IMPORT_SKIPPED_`}),a(`ul`,null,[(d(!0),f(l,null,g(e.skipped,(t,n)=>(d(),f(`li`,{key:n},[p(h,{tag:`span`,text:e.getCodeText(t.code),extra:{label:t.label}},null,8,[`text`,`extra`])]))),128))])])):c(``,!0)],64)):c(``,!0),p(_,{events:e.calendarEvents},null,8,[`events`])]),_:1},8,[`code-html`,`code-js`])}var Ae=M(we,[[`render`,ke]]);function je(){return{codeHtml:`<a-calendar
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
</div>`}}function Me(){return{codeJs:`import {
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
};`}}var Ne={name:`PageCalendarMaxEvents`,components:{ACalendar:S,AlohaExample:x,ATranslation:k},setup(){let{codeHtml:e}=je(),{codeJs:t}=Me(),n=h(P()),r=h([]),i=h(void 0);return{codeHtml:e,codeJs:t,day:i,dayEvents:r,events:n,onMoreClick:({date:e,events:t})=>{i.value=e,r.value=t}}}},Pe={key:0,class:`a_mt_3`},Fe={class:`a_mb_0`};function Ie(e,t,n,i,s,u){let m=v(`a-calendar`),h=v(`a-translation`),b=v(`aloha-example`);return d(),o(b,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_MAX_EVENTS_HEADER_`,description:`_A_CALENDAR_MAX_EVENTS_DESCRIPTION_`,props:[`max-events-per-day`]},{default:y(()=>[p(m,{events:e.events,"max-events-per-day":2,onMoreClick:e.onMoreClick},null,8,[`events`,`onMoreClick`]),e.day?(d(),f(`div`,Pe,[p(h,{tag:`strong`,text:`_A_CALENDAR_MAX_EVENTS_LIST_`}),r(`: `+_(e.day),1),a(`ul`,Fe,[(d(!0),f(l,null,g(e.dayEvents,e=>(d(),f(`li`,{key:e.id},_(e.label),1))),128))])])):c(``,!0)]),_:1},8,[`code-html`,`code-js`])}var Le=M(Ne,[[`render`,Ie]]);function Re(){return{codeHtml:`<a-calendar
  :events="events"
  :max-events-per-day="0"
/>`}}function ze(){return{codeJs:`import {
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
};`}}var Be={name:`PageCalendarMultiDay`,components:{ACalendar:S,AlohaExample:x},setup(){let{codeHtml:e}=Re(),{codeJs:t}=ze();return{codeHtml:e,codeJs:t,events:h(P())}}};function Ve(e,t,n,r,i,a){let s=v(`a-calendar`),c=v(`aloha-example`);return d(),o(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_MULTI_DAY_HEADER_`,description:`_A_CALENDAR_MULTI_DAY_DESCRIPTION_`,props:[`max-events-per-day`,`color-default`]},{default:y(()=>[p(s,{events:e.events,"max-events-per-day":0},null,8,[`events`])]),_:1},8,[`code-html`,`code-js`])}var He=M(Be,[[`render`,Ve]]);function Ue(){return{codeHtml:`<a-calendar
  :events="events"
  @event-click="onEventClick"
/>
<p v-if="lastClick">
  <a-translation
    tag="strong"
    text="_A_CALENDAR_REC_CLICK_"
  />: {{ lastClick }}
</p>`}}function We(){return{codeJs:`// PageCalendarRecurring.js
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
}`}}function Ge({events:e=[]}){let t=h(e),n=h(``);return{events:t,lastClick:n,onEventClick:({event:e,occurrence:t})=>{n.value=`${e.label}: ${t?t.date:`-`}`}}}var Ke={name:`PageCalendarRecurring`,components:{ACalendar:S,AlohaExample:x,ATranslation:k},setup(){let{codeHtml:e}=Ue(),{codeJs:t}=We(),{events:n,lastClick:r,onEventClick:i}=Ge({events:[{id:1,label:`Standup`,start:`${N(1)}T09:00:00`,end:`${N(1)}T09:15:00`,color:`info`,recurrence:{frequency:`weekly`,weekdays:[1,2,3,4,5],exceptions:[N(12)]}},{id:2,label:`Team meeting`,start:`${N(5)}T14:00:00`,end:`${N(5)}T15:00:00`,color:`primary`,recurrence:{frequency:`weekly`,interval:2}},{id:3,label:`Report`,start:N(15),color:`warning`,isAllDay:!0,recurrence:{frequency:`monthly`,count:6}},{id:4,label:`Birthday`,start:N(20),color:`#8e44ad`,isAllDay:!0,recurrence:{frequency:`yearly`}}]});return{codeHtml:e,codeJs:t,events:n,lastClick:r,onEventClick:i}}},qe={key:0,class:`a_mt_3 a_mb_0`};function Je(e,t,n,i,a,s){let l=v(`a-calendar`),u=v(`a-translation`),m=v(`aloha-example`);return d(),o(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_REC_HEADER_`,description:`_A_CALENDAR_REC_DESCRIPTION_`,props:[`key-recurrence`]},{default:y(()=>[p(l,{events:e.events,onEventClick:e.onEventClick},null,8,[`events`,`onEventClick`]),e.lastClick?(d(),f(`p`,qe,[p(u,{tag:`strong`,text:`_A_CALENDAR_REC_CLICK_`}),r(`: `+_(e.lastClick),1)])):c(``,!0)]),_:1},8,[`code-html`,`code-js`])}var Ye=M(Ke,[[`render`,Je]]);function Xe(){return{codeHtml:`<a-calendar
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
</a-calendar>`}}function Ze(){return{codeJs:`import {
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
};`}}var Qe={name:`PageCalendarSlots`,components:{AButton:C,ACalendar:S,AlohaExample:x},setup(){let{codeHtml:e}=Xe(),{codeJs:t}=Ze();return{codeHtml:e,codeJs:t,events:h(P())}}},$e={class:`a_d_flex a_align_items_center a_gap_2`},et={class:`a_m_0`},tt={key:0,class:`a_badge a_badge_secondary a_ml_auto`,"aria-hidden":`true`},nt={key:0},rt={key:1};function it(e,t,n,r,i,s){let l=v(`a-button`),u=v(`a-calendar`),m=v(`aloha-example`);return d(),o(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_SLOTS_HEADER_`,description:`_A_CALENDAR_SLOTS_DESCRIPTION_`},{default:y(()=>[p(u,{events:e.events},{header:y(({title:e,goToPreviousMonth:t,goToNextMonth:n})=>[a(`div`,$e,[p(l,{class:`a_btn a_btn_link`,text:`←`,"text-screen-reader":`_A_CALENDAR_PREVIOUS_MONTH_`,onClick:t},null,8,[`onClick`]),a(`h3`,et,_(e),1),p(l,{class:`a_btn a_btn_link`,text:`→`,"text-screen-reader":`_A_CALENDAR_NEXT_MONTH_`,onClick:n},null,8,[`onClick`])])]),day:y(({day:e,events:t})=>[a(`span`,null,_(e.day),1),t.length?(d(),f(`span`,tt,_(t.length),1)):c(``,!0)]),event:y(({event:e,isStart:t})=>[t?(d(),f(`strong`,nt,_(e.label),1)):(d(),f(`span`,rt,`… `+_(e.label),1))]),_:1},8,[`events`])]),_:1},8,[`code-html`,`code-js`])}var at=M(Qe,[[`render`,it]]);function ot(){return{codeHtml:`<a-calendar
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
</p>`}}function st(){return{codeJs:`import {
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
};`}}var ct={name:`PageCalendarWeek`,components:{ACalendar:S,AlohaExample:x,ATranslation:k},setup(){let{codeHtml:e}=ot(),{codeJs:t}=st();return{codeHtml:e,codeJs:t,events:h(P()),model:h(N(11)),view:h(`week`)}}},lt={class:`a_mt_3 a_mb_0`};function ut(e,t,n,i,s,c){let l=v(`a-calendar`),u=v(`a-translation`),f=v(`aloha-example`);return d(),o(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_WEEK_HEADER_`,description:`_A_CALENDAR_WEEK_DESCRIPTION_`,props:[`view`,`views`,`hour-start`,`hour-end`,`scroll-to-hour`,`time-step`]},{default:y(()=>[p(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,view:e.view,"onUpdate:view":t[1]||=t=>e.view=t,events:e.events,"hour-start":6,"hour-end":22},null,8,[`modelValue`,`view`,`events`]),a(`p`,lt,[p(u,{tag:`strong`,text:`_A_CALENDAR_VIEW_`}),r(`: `+_(e.view),1)])]),_:1},8,[`code-html`,`code-js`])}var dt=M(ct,[[`render`,ut]]);function ft(){return{dataEvents:[{name:`day-click`,description:`_A_CALENDAR_EVENTS_DAY_CLICK_`},{name:`event-click`,description:`_A_CALENDAR_EVENTS_EVENT_CLICK_`},{name:`event-drop`,description:`_A_CALENDAR_EVENTS_EVENT_DROP_`},{name:`event-resize`,description:`_A_CALENDAR_EVENTS_EVENT_RESIZE_`},{name:`more-click`,description:`_A_CALENDAR_EVENTS_MORE_CLICK_`},{name:`range-change`,description:`_A_CALENDAR_EVENTS_RANGE_CHANGE_`},{name:`time-click`,description:`_A_CALENDAR_EVENTS_TIME_CLICK_`},{name:`update:modelValue`,description:`_A_CALENDAR_EVENTS_UPDATE_MODEL_VALUE_`},{name:`update:view`,description:`_A_CALENDAR_EVENTS_UPDATE_VIEW_`}]}}function $(){return{dataExposes:[{name:`changeView`,description:`_A_CALENDAR_EXPOSES_CHANGE_VIEW_`,type:`Function`},{name:`downloadIcs`,description:`_A_CALENDAR_EXPOSES_DOWNLOAD_ICS_`,type:`Function`},{name:`focusDay`,description:`_A_CALENDAR_EXPOSES_FOCUS_DAY_`,type:`Function`},{name:`getIcs`,description:`_A_CALENDAR_EXPOSES_GET_ICS_`,type:`Function`},{name:`goToDate`,description:`_A_CALENDAR_EXPOSES_GO_TO_DATE_`,type:`Function`},{name:`goToNext`,description:`_A_CALENDAR_EXPOSES_GO_TO_NEXT_`,type:`Function`},{name:`goToNextMonth`,description:`_A_CALENDAR_EXPOSES_GO_TO_NEXT_MONTH_`,type:`Function`},{name:`goToPrevious`,description:`_A_CALENDAR_EXPOSES_GO_TO_PREVIOUS_`,type:`Function`},{name:`goToPreviousMonth`,description:`_A_CALENDAR_EXPOSES_GO_TO_PREVIOUS_MONTH_`,type:`Function`},{name:`goToToday`,description:`_A_CALENDAR_EXPOSES_GO_TO_TODAY_`,type:`Function`}]}}function pt(){let e=u(()=>D({placeholder:`_A_CALENDAR_COMPONENT_NAME_`}));return{pageTitle:u(()=>`ACalendar${e.value?` (${e.value})`:``}`)}}function mt(){return{dataProps:[{name:`colorDefault`,description:`_A_CALENDAR_PROPS_COLOR_DEFAULT_`,type:`String`,default:`"primary"`,required:!1},{name:`events`,description:`_A_CALENDAR_PROPS_EVENTS_`,type:`Array`,default:`[]`,required:!1},{name:`firstDayOfWeek`,description:`_A_CALENDAR_PROPS_FIRST_DAY_OF_WEEK_`,type:`Number`,default:`1`,required:!1},{name:`hourEnd`,description:`_A_CALENDAR_PROPS_HOUR_END_`,type:`Number`,default:`24`,required:!1},{name:`hourStart`,description:`_A_CALENDAR_PROPS_HOUR_START_`,type:`Number`,default:`0`,required:!1},{name:`id`,description:`_A_CALENDAR_PROPS_ID_`,type:`String`,default:`uniqueId("a_calendar_")`,required:!1},{name:`isDraggable`,description:`_A_CALENDAR_PROPS_IS_DRAGGABLE_`,type:`Boolean | Function`,default:`false`,required:!1},{name:`isResizable`,description:`_A_CALENDAR_PROPS_IS_RESIZABLE_`,type:`Boolean | Function`,default:`false`,required:!1},{name:`keyColor`,description:`_A_CALENDAR_PROPS_KEY_COLOR_`,type:`String | Function`,default:`"color"`,required:!1},{name:`keyEnd`,description:`_A_CALENDAR_PROPS_KEY_END_`,type:`String | Function`,default:`"end"`,required:!1},{name:`keyId`,description:`_A_CALENDAR_PROPS_KEY_ID_`,type:`String | Function`,default:`"id"`,required:!1},{name:`keyIsAllDay`,description:`_A_CALENDAR_PROPS_KEY_IS_ALL_DAY_`,type:`String | Function`,default:`"isAllDay"`,required:!1},{name:`keyLabel`,description:`_A_CALENDAR_PROPS_KEY_LABEL_`,type:`String | Function`,default:`"label"`,required:!1},{name:`keyRecurrence`,description:`_A_CALENDAR_PROPS_KEY_RECURRENCE_`,type:`String | Function`,default:`"recurrence"`,required:!1},{name:`keyStart`,description:`_A_CALENDAR_PROPS_KEY_START_`,type:`String | Function`,default:`"start"`,required:!1},{name:`maxEventsPerDay`,description:`_A_CALENDAR_PROPS_MAX_EVENTS_PER_DAY_`,type:`Number`,default:`3`,required:!1},{name:`modelValue`,description:`_A_CALENDAR_PROPS_MODEL_VALUE_`,type:`String | Date | Number`,default:`undefined`,required:!1},{name:`scrollToHour`,description:`_A_CALENDAR_PROPS_SCROLL_TO_HOUR_`,type:`Number`,default:`8`,required:!1},{name:`timeStep`,description:`_A_CALENDAR_PROPS_TIME_STEP_`,type:`Number`,default:`30`,required:!1},{name:`view`,description:`_A_CALENDAR_PROPS_VIEW_`,type:`String`,default:`"month"`,required:!1},{name:`views`,description:`_A_CALENDAR_PROPS_VIEWS_`,type:`Array`,default:`["month", "week", "day"]`,required:!1}]}}function ht(){return{dataSlots:[{name:`day`,description:`_A_CALENDAR_SLOT_DAY_`},{name:`event`,description:`_A_CALENDAR_SLOT_EVENT_`},{name:`header`,description:`_A_CALENDAR_SLOT_HEADER_`}]}}function gt(){return{dataTranslate:[`_A_CALENDAR_PREVIOUS_MONTH_`,`_A_CALENDAR_NEXT_MONTH_`,`_A_CALENDAR_TODAY_`,`_A_CALENDAR_MORE_{{count}}_`,`_A_CALENDAR_EVENTS_{{count}}_`,`_A_CALENDAR_PREVIOUS_WEEK_`,`_A_CALENDAR_NEXT_WEEK_`,`_A_CALENDAR_VIEW_`,`_A_CALENDAR_VIEW_MONTH_`,`_A_CALENDAR_VIEW_WEEK_`,`_A_CALENDAR_ALL_DAY_`,`_A_CALENDAR_PREVIOUS_DAY_`,`_A_CALENDAR_NEXT_DAY_`,`_A_CALENDAR_VIEW_DAY_`,`_A_CALENDAR_RECURRING_`]}}var _t={name:`PageCalendar`,components:{AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:k,PageCalendarBasic:R,PageCalendarCreate:K,PageCalendarDay:Z,PageCalendarDragDrop:ue,PageCalendarExport:ve,PageCalendarImport:Ae,PageCalendarMaxEvents:Le,PageCalendarMultiDay:He,PageCalendarRecurring:Ye,PageCalendarSlots:at,PageCalendarWeek:dt},setup(){let{pageTitle:e}=pt(),{dataProps:t}=mt(),{dataEvents:n}=ft(),{dataSlots:r}=ht(),{dataExposes:i}=$(),{dataTranslate:a}=gt();return{dataEvents:n,dataExposes:i,dataProps:t,dataSlots:r,dataTranslate:a,pageTitle:e}}};function vt(e,t,n,r,i,a){let s=v(`a-translation`),c=v(`page-calendar-basic`),l=v(`page-calendar-multi-day`),u=v(`page-calendar-recurring`),f=v(`page-calendar-week`),m=v(`page-calendar-day`),h=v(`page-calendar-max-events`),g=v(`page-calendar-slots`),_=v(`page-calendar-create`),b=v(`page-calendar-drag-drop`),x=v(`page-calendar-export`),S=v(`page-calendar-import`),C=v(`aloha-table-props`),w=v(`aloha-table-translate`),T=v(`aloha-table-css-vars`),E=v(`aloha-page`);return d(),o(E,{"page-title":e.pageTitle},{body:y(()=>[p(s,{tag:`p`,html:`_A_CALENDAR_COMPONENT_DESCRIPTION_`}),p(c),p(l),p(u),p(f),p(m),p(h),p(g),p(_),p(b),p(x),p(S),p(C,{"table-label":`ACalendar`,data:e.dataProps},null,8,[`data`]),p(C,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`description`]},null,8,[`data`]),p(C,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),p(C,{"table-label":`Exposes`,data:e.dataExposes,columns:[`name`,`type`,`description`]},null,8,[`data`]),p(w,{data:e.dataTranslate},null,8,[`data`]),p(T,{files:`components/ACalendar`})]),_:1},8,[`page-title`])}var yt=M(_t,[[`render`,vt]]);export{yt as default};