import{t as e}from"./chunk.AlohaPage.DkILLbn5.js";import{t}from"./chunk.AlohaTableProps.BidXnizO.js";import{t as n}from"./chunk.AlohaTableTranslate.DPuVU1C6.js";import{$t as r,Bt as i,Ft as a,It as o,Jt as s,Lt as c,Mt as l,Pt as u,Rt as d,Vt as f,hn as p,ln as m,mt as h,on as g,rn as _,sn as v,tn as y,zt as b}from"./chunk.vendor.BvryzG0o.js";import{t as x}from"./chunk.AlohaExample.BXW-VBsT.js";import{$t as S,E as C,Ht as w,Jt as T,Ot as E,Ut as D,Vt as O,Wt as k,Y as A,g as j,h as M,qt as N,st as ee}from"./bundle.index.b2KYNVgN.js";import{t as P}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function te(){return{codeHtml:`<a-calendar
  view="agenda"
  :views="['month', 'agenda']"
  :events="events"
  :is-event-popover="true"
/>`}}function ne(){return{codeJs:`import {
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
      { id: 1, label: "Team meeting", start: "2026-03-10T10:00:00", end: "2026-03-10T11:00:00", location: "Room 3" },
      { id: 2, label: "Workshop", start: "2026-03-12T09:00:00", end: "2026-03-13T17:00:00", color: "info" },
    ]);

    return {
      events,
    };
  },
};`}}var re=`YYYY-MM-DD[T]HH:mm:ss.SSSZ`;function F(e){return h().startOf(`month`).add(e-1,`days`).format(`YYYY-MM-DD`)}function I(){let e=h().startOf(`month`),t=(t,n)=>{let r=e.clone().add(t-1,`days`);if(!n)return r.format(`YYYY-MM-DD`);let[i,a]=n.split(`:`);return r.hours(+i).minutes(+a).format(re)};return[{id:1,label:`Team meeting`,start:t(3,`10:00`),end:t(3,`11:00`),color:`primary`,location:`Room 3`},{id:2,label:`Vacation`,start:t(8),end:t(14),color:`success`,isAllDay:!0},{id:3,label:`Dentist`,start:t(12,`08:30`),end:t(12,`09:15`),color:`warning`},{id:4,label:`Workshop`,start:t(12,`09:00`),end:t(13,`17:00`),color:`info`,location:`Hamburg`,description:`Bring the laptop.
Lunch is included.`},{id:5,label:`Sprint review`,start:t(12,`14:00`),end:t(12,`15:00`),color:`secondary`},{id:6,label:`Release`,start:t(12,`16:00`),end:t(12,`16:30`),color:`danger`},{id:9,label:`Lunch`,start:t(11,`12:00`),end:t(11,`13:00`),color:`success`},{id:10,label:`Customer call`,start:t(11,`12:30`),end:t(11,`13:30`),color:`info`,location:`Zoom`},{id:11,label:`Planning`,start:t(11,`12:45`),end:t(11,`14:00`),color:`#8e44ad`},{id:7,label:`Birthday`,start:t(20),color:`#8e44ad`,isAllDay:!0},{id:8,label:`Conference`,start:t(26),end:t(33),color:`tertiary`,isAllDay:!0}]}var ie={name:`PageCalendarAgenda`,components:{ACalendar:k,AlohaExample:x},setup(){let{codeHtml:e}=te(),{codeJs:t}=ne();return{codeHtml:e,codeJs:t,events:m(I())}}};function L(e,t,n,i,a,s){let c=_(`a-calendar`),l=_(`aloha-example`);return r(),o(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_AGENDA_HEADER_`,description:`_A_CALENDAR_AGENDA_DESCRIPTION_`,props:[`view`,`key-location`]},{default:v(()=>[f(c,{view:`agenda`,views:[`month`,`agenda`],events:e.events,"is-event-popover":!0},null,8,[`events`])]),_:1},8,[`code-html`,`code-js`])}var R=P(ie,[[`render`,L]]);function z(){return{codeHtml:`<a-calendar
  v-model="model"
  :min-date="minDate"
  :max-date="maxDate"
  :disabled-dates="isHoliday"
/>
<p>
  <a-translation
    tag="strong"
    text="_A_CALENDAR_SELECTED_"
  />: {{ model }}
</p>`}}function B(){return{codeJs:`import {
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
    const model = ref(undefined);
    const minDate = "2026-03-03";
    const maxDate = "2026-03-25";
    // disabledDates: an array of dates or a function of the day ("YYYY-MM-DD")
    const HOLIDAYS = ["2026-03-12", "2026-03-19"];
    const isHoliday = day => HOLIDAYS.indexOf(day) !== -1;

    return {
      isHoliday,
      maxDate,
      minDate,
      model,
    };
  },
};`}}var V={name:`PageCalendarAvailability`,components:{ACalendar:k,AlohaExample:x,ATranslation:N},setup(){let{codeHtml:e}=z(),{codeJs:t}=B(),n=m(void 0),r=F(3),i=F(25),a=[F(12),F(19)];return{codeHtml:e,codeJs:t,isHoliday:e=>a.indexOf(e)!==-1,maxDate:i,minDate:r,model:n}}},H={class:`a_mt_3 a_mb_0`};function U(e,t,n,s,c,l){let u=_(`a-calendar`),d=_(`a-translation`),m=_(`aloha-example`);return r(),o(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_AVAILABILITY_HEADER_`,description:`_A_CALENDAR_AVAILABILITY_DESCRIPTION_`,props:[`min-date`,`max-date`,`disabled-dates`]},{default:v(()=>[f(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"min-date":e.minDate,"max-date":e.maxDate,"disabled-dates":e.isHoliday},null,8,[`modelValue`,`min-date`,`max-date`,`disabled-dates`]),a(`p`,H,[f(d,{tag:`strong`,text:`_A_CALENDAR_SELECTED_`}),i(`: `+p(e.model),1)])]),_:1},8,[`code-html`,`code-js`])}var W=P(V,[[`render`,U]]);function G(){return{codeHtml:`<a-calendar
  v-model="model"
  :events="events"
/>
<p>
  <a-translation
    tag="strong"
    text="_A_CALENDAR_SELECTED_"
  />: {{ model }}
</p>`}}function K(){return{codeJs:`import {
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
};`}}var q={name:`PageCalendarBasic`,components:{ACalendar:k,AlohaExample:x,ATranslation:N},setup(){let{codeHtml:e}=G(),{codeJs:t}=K();return{codeHtml:e,codeJs:t,events:m(I()),model:m(void 0)}}},J={class:`a_mt_3 a_mb_0`};function Y(e,t,n,s,c,l){let u=_(`a-calendar`),d=_(`a-translation`),m=_(`aloha-example`);return r(),o(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,description:`_A_CALENDAR_BASIC_DESCRIPTION_`,props:[`events`,`model-value`]},{default:v(()=>[f(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,events:e.events},null,8,[`modelValue`,`events`]),a(`p`,J,[f(d,{tag:`strong`,text:`_A_CALENDAR_SELECTED_`}),i(`: `+p(e.model),1)])]),_:1},8,[`code-html`,`code-js`])}var ae=P(q,[[`render`,Y]]),X=`YYYY-MM-DD[T]HH:mm:ss.SSSZ`,Z=`page_calendar_create_btn_delete`;function oe(){let e=m(I().slice(0,3)),t=m({}),n=m(void 0),r=m(!1),i=[{type:`text`,id:`label`,label:`_A_CALENDAR_CREATE_LABEL_`,required:!0,classColumn:`a_column a_column_12`},{type:`datetime`,id:`start`,label:`_A_CALENDAR_CREATE_START_`},{type:`datetime`,id:`end`,label:`_A_CALENDAR_CREATE_END_`},{type:`select`,id:`color`,label:`_A_CALENDAR_CREATE_COLOR_`,data:[`primary`,`secondary`,`tertiary`,`success`,`info`,`warning`,`danger`,`gray`].map(e=>({label:e,value:e}))},{type:`oneCheckbox`,id:`isAllDay`,label:`_A_CALENDAR_CREATE_ALL_DAY_`},{type:`select`,id:`repeat`,label:`_A_CALENDAR_CREATE_REPEAT_`,translateData:!0,data:[``,`daily`,`weekly`,`monthly`,`yearly`].map(e=>({label:`_A_CALENDAR_CREATE_REPEAT_${(e||`none`).toUpperCase()}_`,value:e}))}],a=u(()=>n.value!==void 0),o=u(()=>a.value?`_A_CALENDAR_CREATE_MODAL_EDIT_`:`_A_CALENDAR_CREATE_MODAL_NEW_`),c=u(()=>!t.value.label||!t.value.start),l=({start:e,end:i})=>{n.value=void 0,t.value={label:``,start:h(e).format(X),end:h(i).format(X),color:`primary`,isAllDay:!1,repeat:``},r.value=!0},d=e=>{let t=h(e).hours(9).minutes(0);l({start:t,end:t.clone().add(1,`hour`)})},f=({date:e})=>{d(e)},p=({start:e,end:t})=>{l({start:e,end:t})},g=({start:e,end:n})=>{l({start:e,end:n}),t.value.isAllDay=!0},_=({start:e})=>{l({start:e,end:h(e).add(1,`hour`)})},v=()=>{d(new Date)},y=({event:e})=>{n.value=e.id,t.value={...e,repeat:e.recurrence?.frequency||``},r.value=!0},b=()=>{r.value=!1},x=e=>{let{repeat:n,...r}=t.value;return{...r,id:e,recurrence:n?{...r.recurrence,frequency:n}:void 0}},S=()=>{a.value?e.value=e.value.map(e=>e.id===n.value?x(n.value):e):e.value=[...e.value,x(Date.now())],b()},{closeConfirm:w,openConfirm:T}=C();return{btnDeleteId:Z,closeModal:b,dataForm:i,deleteEvent:()=>{T({headerText:`_A_CALENDAR_CREATE_DELETE_CONFIRM_HEADER_`,bodyHtml:`_A_CALENDAR_CREATE_DELETE_CONFIRM_BODY_{{label}}_`,extra:{label:E(t.value.label)},saveButtonText:`_A_CALENDAR_CREATE_DELETE_`,saveButtonClass:`a_btn a_btn_danger`,save:()=>{e.value=e.value.filter(e=>e.id!==n.value),w(),b()},close:()=>{w(),s(()=>ee({selector:`#${Z}`}))}})},events:e,headerText:o,isEditing:a,isModalVisible:r,isSaveDisabled:c,model:t,onDayClick:f,onEventClick:y,onDaySelect:g,onTimeClick:_,onTimeSelect:p,openModalToday:v,save:S}}function se(){return{codeHtml:`<a-button
  class="a_btn a_btn_primary"
  text="_A_CALENDAR_CREATE_BTN_"
  @click="openModalToday"
/>
<a-calendar
  :events="events"
  @day-click="onDayClick"
  @event-click="onEventClick"
  @time-click="onTimeClick"
  :is-range-selectable="true"
  @time-select="onTimeSelect"
  @day-select="onDaySelect"
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
</a-modal-form>`}}function ce(){return{codeJs:`// PageCalendarCreate.js
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
      onDaySelect,
      onTimeClick,
      onTimeSelect,
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
      onDaySelect,
      onTimeClick,
      onTimeSelect,
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

  // Pulling the mouse over a time or over several days (isRangeSelectable)
  const onTimeSelect = ({ start, end }) => {
    openModalNew({ start, end });
  };

  const onDaySelect = ({ start, end }) => {
    openModalNew({ start, end });
    model.value.isAllDay = true;
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
    onDaySelect,
    onTimeClick,
    onTimeSelect,
    openModalToday,
    save,
  };
}`}}var le={name:`PageCalendarCreate`,components:{AButton:T,ACalendar:k,AlohaExample:x,AModalForm:M},setup(){let{codeHtml:e}=se(),{codeJs:t}=ce(),{btnDeleteId:n,closeModal:r,dataForm:i,deleteEvent:a,events:o,headerText:s,isEditing:c,isModalVisible:l,isSaveDisabled:u,model:d,onDayClick:f,onEventClick:p,onDaySelect:m,onTimeClick:h,onTimeSelect:g,openModalToday:_,save:v}=oe();return{btnDeleteId:n,closeModal:r,codeHtml:e,codeJs:t,dataForm:i,deleteEvent:a,events:o,headerText:s,isEditing:c,isModalVisible:l,isSaveDisabled:u,model:d,onDayClick:f,onEventClick:p,onDaySelect:m,onTimeClick:h,onTimeSelect:g,openModalToday:_,save:v}}};function ue(e,t,n,i,a,s){let l=_(`a-button`),u=_(`a-calendar`),d=_(`a-modal-form`),p=_(`aloha-example`);return r(),o(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_CREATE_HEADER_`,description:`_A_CALENDAR_CREATE_DESCRIPTION_`},{default:v(()=>[f(l,{class:`a_btn a_btn_primary a_mb_3`,text:`_A_CALENDAR_CREATE_BTN_`,onClick:e.openModalToday},null,8,[`onClick`]),f(u,{events:e.events,onDayClick:e.onDayClick,onEventClick:e.onEventClick,onTimeClick:e.onTimeClick,"is-range-selectable":!0,onTimeSelect:e.onTimeSelect,onDaySelect:e.onDaySelect},null,8,[`events`,`onDayClick`,`onEventClick`,`onTimeClick`,`onTimeSelect`,`onDaySelect`]),e.isModalVisible?(r(),o(d,{key:0,modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"data-form":e.dataForm,"header-text":e.headerText,close:e.closeModal,save:e.save,"disabled-save":e.isSaveDisabled,"class-columns":`a_columns a_columns_count_12 a_columns_gap_3`,"class-column-default":`a_column a_column_6 a_column_12_touch`},b({_:2},[e.isEditing?{name:`modalFooterAppend`,fn:v(()=>[f(l,{class:`a_btn a_btn_outline_danger`,id:e.btnDeleteId,text:`_A_CALENDAR_CREATE_DELETE_`,onClick:e.deleteEvent},null,8,[`id`,`onClick`])]),key:`0`}:void 0]),1032,[`modelValue`,`data-form`,`header-text`,`close`,`save`,`disabled-save`])):c(``,!0)]),_:1},8,[`code-html`,`code-js`])}var de=P(le,[[`render`,ue]]);function fe(){return{codeHtml:`<a-calendar
  v-model="model"
  v-model:view="view"
  :events="events"
  :views="['day', 'week']"
  :hour-start="7"
  :hour-end="20"
/>`}}function pe(){return{codeJs:`import {
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
};`}}var me={name:`PageCalendarDay`,components:{ACalendar:k,AlohaExample:x},setup(){let{codeHtml:e}=fe(),{codeJs:t}=pe();return{codeHtml:e,codeJs:t,events:m(I()),model:m(F(11)),view:m(`day`)}}};function he(e,t,n,i,a,s){let c=_(`a-calendar`),l=_(`aloha-example`);return r(),o(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_DAY_HEADER_`,description:`_A_CALENDAR_DAY_DESCRIPTION_`,props:[`view`,`views`]},{default:v(()=>[f(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,view:e.view,"onUpdate:view":t[1]||=t=>e.view=t,events:e.events,views:[`day`,`week`],"hour-start":7,"hour-end":20},null,8,[`modelValue`,`view`,`events`])]),_:1},8,[`code-html`,`code-js`])}var ge=P(me,[[`render`,he]]),_e=`YYYY-MM-DD[T]HH:mm:ss.SSSZ`;function ve({events:e=[],date:t}){let n=m(e),r=m(t),i=m(`week`),a=m(``),o=m(void 0),s=e=>!e.isLocked,c=(e,t)=>{n.value=[...n.value.filter(t=>t.id!==e),...t]},l=({event:e,start:t,end:n})=>{let r=e.isAllDay?`YYYY-MM-DD`:_e;c(e.id,[{...e,start:h(t).format(r),end:h(n).format(r)}]),a.value=`${e.label}: ${h(t).format(`DD.MM.YYYY HH:mm`)} – ${h(n).format(`DD.MM.YYYY HH:mm`)}`};return{changeOnlyThisOccurrence:()=>{let{series:e,event:t}=O({item:o.value.event,...o.value});c(e.id,[e,t]),a.value=t.label,o.value=void 0},changeWholeSeries:()=>{let e=w({item:o.value.event,...o.value});c(e.id,[e]),a.value=e.label,o.value=void 0},closeSeriesChange:()=>{o.value=void 0},events:n,isDraggable:s,lastDrop:a,model:r,onEventChange:e=>{e.occurrence?o.value=e:l(e)},seriesChange:o,view:i}}function ye(){return{codeHtml:`<a-calendar
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
</p>
<a-modal
  v-if="seriesChange"
  header-text="_A_CALENDAR_SERIES_QUESTION_HEADER_"
  body-html="_A_CALENDAR_SERIES_QUESTION_BODY_"
  :close="closeSeriesChange"
  :save="changeOnlyThisOccurrence"
  save-button-text="_A_CALENDAR_SERIES_ONLY_THIS_"
>
  <template v-slot:modalFooterAppend>
    <a-button
      class="a_btn a_btn_outline_primary"
      text="_A_CALENDAR_SERIES_ALL_"
      @click="changeWholeSeries"
    />
  </template>
</a-modal>`}}function be(){return{codeJs:`// PageCalendarDragDrop.js
import {
  AButton,
  ACalendar,
  AModal,
  ATranslation,
} from "aloha-vue";

import DragDropAPI from "./compositionAPI/DragDropAPI";

export default {
  components: {
    AButton,
    ACalendar,
    AModal,
    ATranslation,
  },
  setup() {
    const {
      changeOnlyThisOccurrence,
      changeWholeSeries,
      closeSeriesChange,
      events,
      isDraggable,
      lastDrop,
      model,
      onEventChange,
      seriesChange,
      view,
    } = DragDropAPI({
      events: [
        { id: 1, label: "Team meeting", start: "2026-03-10T10:00:00", end: "2026-03-10T11:00:00" },
        { id: 2, label: "Workshop", start: "2026-03-12T09:00:00", end: "2026-03-13T17:00:00", color: "info" },
        { id: 3, label: "Birthday", start: "2026-03-14", color: "#8e44ad", isAllDay: true, isLocked: true },
        { id: "standup", label: "Standup", start: "2026-03-02T08:30:00", end: "2026-03-02T08:45:00", recurrence: { frequency: "weekly", weekdays: [1, 2, 3, 4, 5] } },
      ],
      date: "2026-03-11",
    });

    return {
      changeOnlyThisOccurrence,
      changeWholeSeries,
      closeSeriesChange,
      events,
      isDraggable,
      lastDrop,
      model,
      onEventChange,
      seriesChange,
      view,
    };
  },
};

// compositionAPI/DragDropAPI.js
import {
  ref,
} from "vue";

import {
  detachCalendarOccurrence,
  moveCalendarSeries,
} from "aloha-vue";

import moment from "moment";

const DATETIME_FORMAT = "YYYY-MM-DD[T]HH:mm:ss.SSSZ";

export default function DragDropAPI({ events: eventsStart = [], date }) {
  const events = ref(eventsStart);
  const model = ref(date);
  const view = ref("week");
  const lastDrop = ref("");
  // An occurrence of a series was moved: the question "only this occurrence or the whole series"
  const seriesChange = ref(undefined);

  // Events with isLocked cannot be dragged
  const isDraggable = event => !event.isLocked;

  const replaceEvents = (id, items) => {
    events.value = [...events.value.filter(item => item.id !== id), ...items];
  };

  const saveEvent = ({ event, start, end }) => {
    const FORMAT = event.isAllDay ? "YYYY-MM-DD" : DATETIME_FORMAT;
    replaceEvents(event.id, [{ ...event, start: moment(start).format(FORMAT), end: moment(end).format(FORMAT) }]);
    lastDrop.value = \`\${ event.label }: \${ moment(start).format("DD.MM.YYYY HH:mm") } – \${ moment(end).format("DD.MM.YYYY HH:mm") }\`;
  };

  // event-drop and event-resize (also with the keyboard): the calendar does not change the events
  const onEventChange = change => {
    if (change.occurrence) {
      seriesChange.value = change;
      return;
    }
    saveEvent(change);
  };

  const changeOnlyThisOccurrence = () => {
    const { series, event } = detachCalendarOccurrence({ item: seriesChange.value.event, ...seriesChange.value });
    replaceEvents(series.id, [series, event]);
    lastDrop.value = event.label;
    seriesChange.value = undefined;
  };

  const changeWholeSeries = () => {
    const SERIES = moveCalendarSeries({ item: seriesChange.value.event, ...seriesChange.value });
    replaceEvents(SERIES.id, [SERIES]);
    lastDrop.value = SERIES.label;
    seriesChange.value = undefined;
  };

  const closeSeriesChange = () => {
    seriesChange.value = undefined;
  };

  return {
    changeOnlyThisOccurrence,
    changeWholeSeries,
    closeSeriesChange,
    events,
    isDraggable,
    lastDrop,
    model,
    onEventChange,
    seriesChange,
    view,
  };
}`}}var xe={name:`PageCalendarDragDrop`,components:{AButton:T,ACalendar:k,AlohaExample:x,AModal:j,ATranslation:N},setup(){let{codeHtml:e}=ye(),{codeJs:t}=be(),{changeOnlyThisOccurrence:n,changeWholeSeries:r,closeSeriesChange:i,events:a,isDraggable:o,lastDrop:s,model:c,onEventChange:l,seriesChange:u,view:d}=ve({events:[...I().map(e=>e.id===7?{...e,isLocked:!0}:e),{id:`standup`,label:`Standup`,start:`${F(2)}T08:30:00`,end:`${F(2)}T08:45:00`,color:`secondary`,recurrence:{frequency:`weekly`,weekdays:[1,2,3,4,5]}}],date:F(11)});return{changeOnlyThisOccurrence:n,changeWholeSeries:r,closeSeriesChange:i,codeHtml:e,codeJs:t,events:a,isDraggable:o,lastDrop:s,model:c,onEventChange:l,seriesChange:u,view:d}}},Se={key:0,class:`a_mt_3 a_mb_0`};function Ce(e,t,n,a,s,l){let u=_(`a-calendar`),m=_(`a-translation`),h=_(`a-button`),g=_(`a-modal`),y=_(`aloha-example`);return r(),o(y,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_DRAG_HEADER_`,description:`_A_CALENDAR_DRAG_DESCRIPTION_`,props:[`is-draggable`,`is-resizable`]},{default:v(()=>[f(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,view:e.view,"onUpdate:view":t[1]||=t=>e.view=t,events:e.events,"is-draggable":e.isDraggable,"is-resizable":e.isDraggable,onEventDrop:e.onEventChange,onEventResize:e.onEventChange},null,8,[`modelValue`,`view`,`events`,`is-draggable`,`is-resizable`,`onEventDrop`,`onEventResize`]),e.lastDrop?(r(),d(`p`,Se,[f(m,{tag:`strong`,text:`_A_CALENDAR_DRAG_LAST_`}),i(`: `+p(e.lastDrop),1)])):c(``,!0),e.seriesChange?(r(),o(g,{key:1,"header-text":`_A_CALENDAR_SERIES_QUESTION_HEADER_`,"body-html":`_A_CALENDAR_SERIES_QUESTION_BODY_`,close:e.closeSeriesChange,save:e.changeOnlyThisOccurrence,"save-button-text":`_A_CALENDAR_SERIES_ONLY_THIS_`},{modalFooterAppend:v(()=>[f(h,{class:`a_btn a_btn_outline_primary`,text:`_A_CALENDAR_SERIES_ALL_`,onClick:e.changeWholeSeries},null,8,[`onClick`])]),_:1},8,[`close`,`save`])):c(``,!0)]),_:1},8,[`code-html`,`code-js`])}var we=P(xe,[[`render`,Ce]]);function Te({events:e=[]}){let t=m(e),n=m(void 0),r=m(``);return{calendarRef:n,download:()=>{n.value.downloadIcs({fileName:`aloha-calendar.ics`,calendarName:`Aloha`})},events:t,ics:r,showPreview:()=>{r.value=n.value.getIcs({calendarName:`Aloha`})}}}function Ee(){return{codeHtml:`<div class="a_d_flex a_gap_2">
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
<pre v-if="ics">{{ ics }}</pre>`}}function De(){return{codeJs:`// PageCalendarExport.js
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
// const ICS = getCalendarIcs({ events, calendarName: "Aloha", keyLabel: "title" });`}}var Oe={name:`PageCalendarExport`,components:{AButton:T,ACalendar:k,AlohaExample:x},setup(){let{codeHtml:e}=Ee(),{codeJs:t}=De(),{calendarRef:n,download:r,events:i,ics:a,showPreview:o}=Te({events:[...I().slice(0,3),{id:`standup`,label:`Standup`,start:`${F(2)}T09:00:00`,end:`${F(2)}T09:15:00`,color:`info`,recurrence:{frequency:`weekly`,weekdays:[1,2,3,4,5],exceptions:[F(12)]}}]});return{calendarRef:n,codeHtml:e,codeJs:t,download:r,events:i,ics:a,showPreview:o}}},ke={class:`a_d_flex a_gap_2 a_mb_3`},Ae={key:0,class:`a_mt_3 a_mb_0`};function je(e,t,n,i,s,l){let u=_(`a-button`),m=_(`a-calendar`),h=_(`aloha-example`);return r(),o(h,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_EXPORT_HEADER_`,description:`_A_CALENDAR_EXPORT_DESCRIPTION_`},{default:v(()=>[a(`div`,ke,[f(u,{class:`a_btn a_btn_primary`,text:`_A_CALENDAR_EXPORT_DOWNLOAD_`,onClick:e.download},null,8,[`onClick`]),f(u,{class:`a_btn a_btn_outline_secondary`,text:`_A_CALENDAR_EXPORT_PREVIEW_`,onClick:e.showPreview},null,8,[`onClick`])]),f(m,{ref:`calendarRef`,events:e.events},null,8,[`events`]),e.ics?(r(),d(`pre`,Ae,p(e.ics),1)):c(``,!0)]),_:1},8,[`code-html`,`code-js`])}var Me=P(Oe,[[`render`,je]]);function Ne(){return{codeHtml:`<div class="a_d_flex a_flex_wrap a_gap_3 a_align_items_end">
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
/>`}}var Pe={cancelled:`_A_CALENDAR_IMPORT_CODE_CANCELLED_`,noStart:`_A_CALENDAR_IMPORT_CODE_NO_START_`,rruleNotSupported:`_A_CALENDAR_IMPORT_CODE_RRULE_NOT_SUPPORTED_`,timeZoneUnknown:`_A_CALENDAR_IMPORT_CODE_TIME_ZONE_UNKNOWN_`};function Fe({getSampleIcs:e=()=>``}={}){let t=m([]),n=m(void 0),r=m([]),i=m([]),a=m([]),o=u(()=>[...t.value,...r.value]),s=e=>{let t=D(e);r.value=t.events,i.value=t.skipped,a.value=t.warnings};return g(n,async e=>{e?.file&&s(await e.file.text())}),{calendarEvents:o,file:n,getCodeText:e=>Pe[e]||e,imported:r,save:()=>{t.value=[...t.value,...r.value],r.value=[],i.value=[],a.value=[],n.value=void 0},skipped:i,useSample:()=>{s(e())},warnings:a}}function Ie(){return{codeJs:`// PageCalendarImport.js
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
}`}}var Q=e=>F(e).replace(/-/g,``);function Le(){return[`BEGIN:VCALENDAR`,`VERSION:2.0`,`PRODID:-//Example//Team//EN`,`BEGIN:VEVENT`,`UID:planning@example.com`,`SUMMARY:Planning call (New York)`,`DTSTART;TZID=America/New_York:${Q(4)}T100000`,`DTEND;TZID=America/New_York:${Q(4)}T110000`,`LOCATION:Zoom`,`END:VEVENT`,`BEGIN:VEVENT`,`UID:london@example.com`,`SUMMARY:Call London (Outlook)`,`DTSTART;TZID=GMT Standard Time:${Q(6)}T120000`,`DTEND;TZID=GMT Standard Time:${Q(6)}T123000`,`END:VEVENT`,`BEGIN:VEVENT`,`UID:yoga@example.com`,`SUMMARY:Yoga`,`DTSTART:${Q(2)}T180000`,`DTEND:${Q(2)}T190000`,`RRULE:FREQ=WEEKLY;BYDAY=MO,TH;COUNT=8`,`EXDATE:${Q(9)}T180000`,`END:VEVENT`,`BEGIN:VEVENT`,`UID:yoga@example.com`,`SUMMARY:Yoga (in the park)`,`RECURRENCE-ID:${Q(5)}T180000`,`DTSTART:${Q(5)}T170000`,`DTEND:${Q(5)}T180000`,`END:VEVENT`,`BEGIN:VEVENT`,`UID:trip@example.com`,`SUMMARY:Trip to Hamburg`,`DTSTART;VALUE=DATE:${Q(23)}`,`DTEND;VALUE=DATE:${Q(26)}`,`END:VEVENT`,`BEGIN:VEVENT`,`UID:board@example.com`,`SUMMARY:Board meeting`,`DTSTART:${Q(10)}T090000`,`DTEND:${Q(10)}T100000`,`RRULE:FREQ=MONTHLY;BYDAY=2TU`,`END:VEVENT`,`BEGIN:VEVENT`,`UID:lunch@example.com`,`SUMMARY:Team lunch`,`STATUS:CANCELLED`,`DTSTART:${Q(12)}T120000`,`END:VEVENT`,`END:VCALENDAR`].join(`\r
`)}var Re={name:`PageCalendarImport`,components:{AButton:T,ACalendar:k,AInputFile:A,AlohaExample:x,ATranslation:N},setup(){let{codeHtml:e}=Ne(),{codeJs:t}=Ie(),{calendarEvents:n,file:r,getCodeText:i,imported:a,save:o,skipped:s,useSample:c,warnings:l}=Fe({getSampleIcs:Le});return{calendarEvents:n,codeHtml:e,codeJs:t,file:r,getCodeText:i,imported:a,save:o,skipped:s,useSample:c,warnings:l}}},ze={class:`a_d_flex a_flex_wrap a_gap_3 a_align_items_end a_mb_3`},Be={class:`a_d_flex a_align_items_center a_gap_3 a_mb_3`},Ve={key:0},He={key:1};function Ue(e,t,n,i,s,u){let p=_(`a-input-file`),m=_(`a-button`),h=_(`a-translation`),g=_(`a-calendar`),b=_(`aloha-example`);return r(),o(b,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_IMPORT_HEADER_`,description:`_A_CALENDAR_IMPORT_DESCRIPTION_`},{default:v(()=>[a(`div`,ze,[f(p,{modelValue:e.file,"onUpdate:modelValue":t[0]||=t=>e.file=t,"is-dropzone":!0,accept:`.ics,text/calendar`,label:`_A_CALENDAR_IMPORT_FILE_`},null,8,[`modelValue`]),f(m,{class:`a_btn a_btn_outline_secondary`,text:`_A_CALENDAR_IMPORT_SAMPLE_`,onClick:e.useSample},null,8,[`onClick`])]),e.imported.length||e.skipped.length||e.warnings.length?(r(),d(l,{key:0},[a(`div`,Be,[f(h,{tag:`strong`,text:`_A_CALENDAR_IMPORT_READ_{{count}}_`,extra:{count:e.imported.length}},null,8,[`extra`]),e.imported.length?(r(),o(m,{key:0,class:`a_btn a_btn_primary`,text:`_A_CALENDAR_IMPORT_SAVE_`,onClick:e.save},null,8,[`onClick`])):c(``,!0)]),e.warnings.length?(r(),d(`div`,Ve,[f(h,{tag:`strong`,text:`_A_CALENDAR_IMPORT_WARNINGS_`}),a(`ul`,null,[(r(!0),d(l,null,y(e.warnings,(t,n)=>(r(),d(`li`,{key:n},[f(h,{tag:`span`,text:e.getCodeText(t.code),extra:{label:t.label,value:t.value}},null,8,[`text`,`extra`])]))),128))])])):c(``,!0),e.skipped.length?(r(),d(`div`,He,[f(h,{tag:`strong`,text:`_A_CALENDAR_IMPORT_SKIPPED_`}),a(`ul`,null,[(r(!0),d(l,null,y(e.skipped,(t,n)=>(r(),d(`li`,{key:n},[f(h,{tag:`span`,text:e.getCodeText(t.code),extra:{label:t.label}},null,8,[`text`,`extra`])]))),128))])])):c(``,!0)],64)):c(``,!0),f(g,{events:e.calendarEvents},null,8,[`events`])]),_:1},8,[`code-html`,`code-js`])}var We=P(Re,[[`render`,Ue]]);function Ge(){return{codeHtml:`<a-calendar
  :events="events"
  :is-loading="isLoading"
  @range-change="loadEvents"
/>`}}function Ke(){return{codeJs:`// PageCalendarLoading.js
import {
  ACalendar,
} from "aloha-vue";

import LoadingAPI from "./compositionAPI/LoadingAPI";

export default {
  components: {
    ACalendar,
  },
  setup() {
    const {
      events,
      isLoading,
      loadEvents,
    } = LoadingAPI();

    return {
      events,
      isLoading,
      loadEvents,
    };
  },
};

// compositionAPI/LoadingAPI.js
import {
  ref,
} from "vue";

import moment from "moment";

export default function LoadingAPI() {
  const events = ref([]);
  const isLoading = ref(false);

  // A server would return the events of the shown days: here every day gets an event after a short time
  const loadEvents = ({ start, end }) => {
    isLoading.value = true;
    setTimeout(() => {
      const EVENTS = [];
      for (const DAY = moment(start); DAY.format("YYYY-MM-DD") <= end; DAY.add(3, "days")) {
        EVENTS.push({ id: DAY.format("YYYY-MM-DD"), label: \`Loaded \${ DAY.format("DD.MM.") }\`, start: DAY.format("YYYY-MM-DD[T]10:00:00") });
      }
      events.value = EVENTS;
      isLoading.value = false;
    }, 800);
  };

  return {
    events,
    isLoading,
    loadEvents,
  };
}`}}function qe(){let e=m([]),t=m(!1);return{events:e,isLoading:t,loadEvents:({start:n,end:r})=>{t.value=!0,setTimeout(()=>{let i=[];for(let e=h(n);e.format(`YYYY-MM-DD`)<=r;e.add(3,`days`))i.push({id:e.format(`YYYY-MM-DD`),label:`Loaded ${e.format(`DD.MM.`)}`,start:e.format(`YYYY-MM-DD[T]10:00:00`)});e.value=i,t.value=!1},800)}}}var Je={name:`PageCalendarLoading`,components:{ACalendar:k,AlohaExample:x},setup(){let{codeHtml:e}=Ge(),{codeJs:t}=Ke(),{events:n,isLoading:r,loadEvents:i}=qe();return{codeHtml:e,codeJs:t,events:n,isLoading:r,loadEvents:i}}};function Ye(e,t,n,i,a,s){let c=_(`a-calendar`),l=_(`aloha-example`);return r(),o(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_LOADING_HEADER_`,description:`_A_CALENDAR_LOADING_DESCRIPTION_`,props:[`is-loading`]},{default:v(()=>[f(c,{events:e.events,"is-loading":e.isLoading,onRangeChange:e.loadEvents},null,8,[`events`,`is-loading`,`onRangeChange`])]),_:1},8,[`code-html`,`code-js`])}var Xe=P(Je,[[`render`,Ye]]);function Ze(){return{codeHtml:`<a-calendar
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
</div>`}}function Qe(){return{codeJs:`import {
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
};`}}var $e={name:`PageCalendarMaxEvents`,components:{ACalendar:k,AlohaExample:x,ATranslation:N},setup(){let{codeHtml:e}=Ze(),{codeJs:t}=Qe(),n=m(I()),r=m([]),i=m(void 0);return{codeHtml:e,codeJs:t,day:i,dayEvents:r,events:n,onMoreClick:({date:e,events:t})=>{i.value=e,r.value=t}}}},et={key:0,class:`a_mt_3`},tt={class:`a_mb_0`};function nt(e,t,n,s,u,m){let h=_(`a-calendar`),g=_(`a-translation`),b=_(`aloha-example`);return r(),o(b,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_MAX_EVENTS_HEADER_`,description:`_A_CALENDAR_MAX_EVENTS_DESCRIPTION_`,props:[`max-events-per-day`]},{default:v(()=>[f(h,{events:e.events,"max-events-per-day":2,onMoreClick:e.onMoreClick},null,8,[`events`,`onMoreClick`]),e.day?(r(),d(`div`,et,[f(g,{tag:`strong`,text:`_A_CALENDAR_MAX_EVENTS_LIST_`}),i(`: `+p(e.day),1),a(`ul`,tt,[(r(!0),d(l,null,y(e.dayEvents,e=>(r(),d(`li`,{key:e.id},p(e.label),1))),128))])])):c(``,!0)]),_:1},8,[`code-html`,`code-js`])}var rt=P($e,[[`render`,nt]]);function it(){return{codeHtml:`<a-calendar
  :events="events"
  :max-events-per-day="0"
/>`}}function at(){return{codeJs:`import {
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
};`}}var ot={name:`PageCalendarMultiDay`,components:{ACalendar:k,AlohaExample:x},setup(){let{codeHtml:e}=it(),{codeJs:t}=at();return{codeHtml:e,codeJs:t,events:m(I())}}};function st(e,t,n,i,a,s){let c=_(`a-calendar`),l=_(`aloha-example`);return r(),o(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_MULTI_DAY_HEADER_`,description:`_A_CALENDAR_MULTI_DAY_DESCRIPTION_`,props:[`max-events-per-day`,`color-default`]},{default:v(()=>[f(c,{events:e.events,"max-events-per-day":0},null,8,[`events`])]),_:1},8,[`code-html`,`code-js`])}var ct=P(ot,[[`render`,st]]);function lt(){return{codeHtml:`<a-calendar
  :events="events"
  :is-event-popover="true"
>
  <template v-slot:popoverActions="{ event, close }">
    <a-button
      class="a_btn a_btn_outline_danger a_btn_small"
      text="_A_CALENDAR_DETAILS_DELETE_"
      @click="deleteEvent({ event })"
    />
    <a-button
      class="a_btn a_btn_primary a_btn_small"
      text="_A_CALENDAR_DETAILS_EDIT_"
      @click="editEvent({ event, close })"
    />
  </template>
</a-calendar>
<p v-if="lastAction">
  <a-translation
    tag="strong"
    text="_A_CALENDAR_DETAILS_LAST_"
  />: {{ lastAction }}
</p>`}}function ut(){return{codeJs:`// PageCalendarPopover.js
import {
  AButton,
  ACalendar,
  ATranslation,
} from "aloha-vue";

import PopoverAPI from "./compositionAPI/PopoverAPI";

export default {
  components: {
    AButton,
    ACalendar,
    ATranslation,
  },
  setup() {
    const {
      deleteEvent,
      editEvent,
      events,
      lastAction,
    } = PopoverAPI({
      events: [
        { id: 1, label: "Team meeting", start: "2026-03-10T10:00:00", end: "2026-03-10T11:00:00", location: "Room 3" },
        { id: 2, label: "Workshop", start: "2026-03-12T09:00:00", end: "2026-03-13T17:00:00", description: "Bring the laptop." },
      ],
    });

    return {
      deleteEvent,
      editEvent,
      events,
      lastAction,
    };
  },
};

// compositionAPI/PopoverAPI.js
import {
  ref,
} from "vue";

export default function PopoverAPI({ events: eventsStart = [] }) {
  const events = ref(eventsStart);
  const lastAction = ref("");

  const editEvent = ({ event, close }) => {
    lastAction.value = event.label;
    close();
  };

  const deleteEvent = ({ event }) => {
    // The popover closes itself when its event is deleted
    events.value = events.value.filter(item => item.id !== event.id);
  };

  return {
    deleteEvent,
    editEvent,
    events,
    lastAction,
  };
}`}}function dt({events:e=[]}){let t=m(e),n=m(``);return{deleteEvent:({event:e})=>{t.value=t.value.filter(t=>t.id!==e.id)},editEvent:({event:e,close:t})=>{n.value=e.label,t()},events:t,lastAction:n}}var ft={name:`PageCalendarPopover`,components:{AButton:T,ACalendar:k,AlohaExample:x,ATranslation:N},setup(){let{codeHtml:e}=lt(),{codeJs:t}=ut(),{deleteEvent:n,editEvent:r,events:i,lastAction:a}=dt({events:I()});return{codeHtml:e,codeJs:t,deleteEvent:n,editEvent:r,events:i,lastAction:a}}},pt={key:0,class:`a_mt_3 a_mb_0`};function mt(e,t,n,a,s,l){let u=_(`a-button`),m=_(`a-calendar`),h=_(`a-translation`),g=_(`aloha-example`);return r(),o(g,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_DETAILS_HEADER_`,description:`_A_CALENDAR_DETAILS_DESCRIPTION_`,props:[`is-event-popover`,`key-location`,`key-description`]},{default:v(()=>[f(m,{events:e.events,"is-event-popover":!0},{popoverActions:v(({event:t,close:n})=>[f(u,{class:`a_btn a_btn_outline_danger a_btn_small`,text:`_A_CALENDAR_DETAILS_DELETE_`,onClick:n=>e.deleteEvent({event:t})},null,8,[`onClick`]),f(u,{class:`a_btn a_btn_primary a_btn_small`,text:`_A_CALENDAR_DETAILS_EDIT_`,onClick:r=>e.editEvent({event:t,close:n})},null,8,[`onClick`])]),_:1},8,[`events`]),e.lastAction?(r(),d(`p`,pt,[f(h,{tag:`strong`,text:`_A_CALENDAR_DETAILS_LAST_`}),i(`: `+p(e.lastAction),1)])):c(``,!0)]),_:1},8,[`code-html`,`code-js`])}var ht=P(ft,[[`render`,mt]]);function gt(){return{codeHtml:`<a-calendar
  :events="events"
  @event-click="onEventClick"
/>
<p v-if="lastClick">
  <a-translation
    tag="strong"
    text="_A_CALENDAR_REC_CLICK_"
  />: {{ lastClick }}
</p>`}}function _t(){return{codeJs:`// PageCalendarRecurring.js
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
}`}}function vt({events:e=[]}){let t=m(e),n=m(``);return{events:t,lastClick:n,onEventClick:({event:e,occurrence:t})=>{n.value=`${e.label}: ${t?t.date:`-`}`}}}var yt={name:`PageCalendarRecurring`,components:{ACalendar:k,AlohaExample:x,ATranslation:N},setup(){let{codeHtml:e}=gt(),{codeJs:t}=_t(),{events:n,lastClick:r,onEventClick:i}=vt({events:[{id:1,label:`Standup`,start:`${F(1)}T09:00:00`,end:`${F(1)}T09:15:00`,color:`info`,recurrence:{frequency:`weekly`,weekdays:[1,2,3,4,5],exceptions:[F(12)]}},{id:2,label:`Team meeting`,start:`${F(5)}T14:00:00`,end:`${F(5)}T15:00:00`,color:`primary`,recurrence:{frequency:`weekly`,interval:2}},{id:3,label:`Report`,start:F(15),color:`warning`,isAllDay:!0,recurrence:{frequency:`monthly`,count:6}},{id:4,label:`Birthday`,start:F(20),color:`#8e44ad`,isAllDay:!0,recurrence:{frequency:`yearly`}}]});return{codeHtml:e,codeJs:t,events:n,lastClick:r,onEventClick:i}}},bt={key:0,class:`a_mt_3 a_mb_0`};function xt(e,t,n,a,s,l){let u=_(`a-calendar`),m=_(`a-translation`),h=_(`aloha-example`);return r(),o(h,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_REC_HEADER_`,description:`_A_CALENDAR_REC_DESCRIPTION_`,props:[`key-recurrence`]},{default:v(()=>[f(u,{events:e.events,onEventClick:e.onEventClick},null,8,[`events`,`onEventClick`]),e.lastClick?(r(),d(`p`,bt,[f(m,{tag:`strong`,text:`_A_CALENDAR_REC_CLICK_`}),i(`: `+p(e.lastClick),1)])):c(``,!0)]),_:1},8,[`code-html`,`code-js`])}var St=P(yt,[[`render`,xt]]);function Ct(){return{codeHtml:`<a-calendar
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
</a-calendar>`}}function wt(){return{codeJs:`import {
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
};`}}var Tt={name:`PageCalendarSlots`,components:{AButton:T,ACalendar:k,AlohaExample:x},setup(){let{codeHtml:e}=Ct(),{codeJs:t}=wt();return{codeHtml:e,codeJs:t,events:m(I())}}},Et={class:`a_d_flex a_align_items_center a_gap_2`},Dt={class:`a_m_0`},Ot={key:0,class:`a_badge a_badge_secondary a_ml_auto`,"aria-hidden":`true`},kt={key:0},At={key:1};function jt(e,t,n,i,s,l){let u=_(`a-button`),m=_(`a-calendar`),h=_(`aloha-example`);return r(),o(h,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_SLOTS_HEADER_`,description:`_A_CALENDAR_SLOTS_DESCRIPTION_`},{default:v(()=>[f(m,{events:e.events},{header:v(({title:e,goToPreviousMonth:t,goToNextMonth:n})=>[a(`div`,Et,[f(u,{class:`a_btn a_btn_link`,text:`←`,"text-screen-reader":`_A_CALENDAR_PREVIOUS_MONTH_`,onClick:t},null,8,[`onClick`]),a(`h3`,Dt,p(e),1),f(u,{class:`a_btn a_btn_link`,text:`→`,"text-screen-reader":`_A_CALENDAR_NEXT_MONTH_`,onClick:n},null,8,[`onClick`])])]),day:v(({day:e,events:t})=>[a(`span`,null,p(e.day),1),t.length?(r(),d(`span`,Ot,p(t.length),1)):c(``,!0)]),event:v(({event:e,isStart:t})=>[t?(r(),d(`strong`,kt,p(e.label),1)):(r(),d(`span`,At,`… `+p(e.label),1))]),_:1},8,[`events`])]),_:1},8,[`code-html`,`code-js`])}var Mt=P(Tt,[[`render`,jt]]);function Nt(){return{codeHtml:`<div style="max-width: 22rem;">
  <a-calendar
    :events="events"
    :views="['month', 'agenda']"
    :is-event-popover="true"
  />
</div>`}}function Pt(){return{codeJs:`import {
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
      { id: 1, label: "Team meeting", start: "2026-03-10T10:00:00", end: "2026-03-10T11:00:00", location: "Room 3" },
      { id: 2, label: "Workshop", start: "2026-03-12T09:00:00", end: "2026-03-13T17:00:00", color: "info" },
    ]);

    return {
      events,
    };
  },
};`}}var Ft={name:`PageCalendarSmall`,components:{ACalendar:k,AlohaExample:x},setup(){let{codeHtml:e}=Nt(),{codeJs:t}=Pt();return{codeHtml:e,codeJs:t,events:m(I())}}},It={style:{"max-width":`22rem`}};function Lt(e,t,n,i,s,c){let l=_(`a-calendar`),u=_(`aloha-example`);return r(),o(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_SMALL_HEADER_`,description:`_A_CALENDAR_SMALL_DESCRIPTION_`},{default:v(()=>[a(`div`,It,[f(l,{events:e.events,views:[`month`,`agenda`],"is-event-popover":!0},null,8,[`events`])])]),_:1},8,[`code-html`,`code-js`])}var Rt=P(Ft,[[`render`,Lt]]);function zt(){return{codeHtml:`<a-calendar
  v-model="model"
  view="week"
  :events="events"
/>`}}function Bt(){return{codeJs:`import {
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
      { id: 1, label: "Confirmed", start: "2026-03-09T09:00:00", end: "2026-03-09T10:00:00" },
      { id: 2, label: "Maybe", start: "2026-03-10T11:00:00", end: "2026-03-10T12:00:00", status: "tentative" },
      { id: 3, label: "Cancelled", start: "2026-03-11T14:00:00", end: "2026-03-11T15:00:00", status: "cancelled", color: "danger" },
    ]);
    const model = ref("2026-03-11");

    return {
      events,
      model,
    };
  },
};`}}var Vt={name:`PageCalendarStatus`,components:{ACalendar:k,AlohaExample:x},setup(){let{codeHtml:e}=zt(),{codeJs:t}=Bt(),n=(e,t)=>t?`${F(e)}T${t}:00`:F(e);return{codeHtml:e,codeJs:t,events:m([{id:1,label:`Confirmed`,start:n(9,`09:00`),end:n(9,`10:00`)},{id:2,label:`Maybe`,start:n(10,`11:00`),end:n(10,`12:00`),status:`tentative`},{id:3,label:`Cancelled`,start:n(11,`14:00`),end:n(11,`15:00`),status:`cancelled`,color:`danger`},{id:4,label:`Trip (tentative)`,start:n(12),end:n(13),isAllDay:!0,color:`success`,status:`tentative`}]),model:m(F(11))}}};function Ht(e,t,n,i,a,s){let c=_(`a-calendar`),l=_(`aloha-example`);return r(),o(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_STATUS_HEADER_`,description:`_A_CALENDAR_STATUS_DESCRIPTION_`,props:[`key-status`]},{default:v(()=>[f(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,view:`week`,events:e.events},null,8,[`modelValue`,`events`])]),_:1},8,[`code-html`,`code-js`])}var Ut=P(Vt,[[`render`,Ht]]);function Wt(){return{codeHtml:`<a-calendar
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
</p>`}}function Gt(){return{codeJs:`import {
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
};`}}var Kt={name:`PageCalendarWeek`,components:{ACalendar:k,AlohaExample:x,ATranslation:N},setup(){let{codeHtml:e}=Wt(),{codeJs:t}=Gt();return{codeHtml:e,codeJs:t,events:m(I()),model:m(F(11)),view:m(`week`)}}},qt={class:`a_mt_3 a_mb_0`};function $(e,t,n,s,c,l){let u=_(`a-calendar`),d=_(`a-translation`),m=_(`aloha-example`);return r(),o(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_WEEK_HEADER_`,description:`_A_CALENDAR_WEEK_DESCRIPTION_`,props:[`view`,`views`,`hour-start`,`hour-end`,`scroll-to-hour`,`time-step`]},{default:v(()=>[f(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,view:e.view,"onUpdate:view":t[1]||=t=>e.view=t,events:e.events,"hour-start":6,"hour-end":22},null,8,[`modelValue`,`view`,`events`]),a(`p`,qt,[f(d,{tag:`strong`,text:`_A_CALENDAR_VIEW_`}),i(`: `+p(e.view),1)])]),_:1},8,[`code-html`,`code-js`])}var Jt=P(Kt,[[`render`,$]]);function Yt(){return{codeHtml:`<a-calendar
  v-model="model"
  view="workweek"
  :views="['month', 'workweek']"
  :events="events"
  :is-week-numbers="true"
  :working-hours="{ start: 8, end: 18 }"
/>`}}function Xt(){return{codeJs:`import {
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
      { id: 1, label: "Team meeting", start: "2026-03-10T10:00:00", end: "2026-03-10T11:00:00", location: "Room 3" },
      { id: 2, label: "Workshop", start: "2026-03-12T09:00:00", end: "2026-03-13T17:00:00", color: "info" },
    ]);
    const model = ref("2026-03-11");

    return {
      events,
      model,
    };
  },
};`}}var Zt={name:`PageCalendarWorkWeek`,components:{ACalendar:k,AlohaExample:x},setup(){let{codeHtml:e}=Yt(),{codeJs:t}=Xt();return{codeHtml:e,codeJs:t,events:m(I()),model:m(F(11))}}};function Qt(e,t,n,i,a,s){let c=_(`a-calendar`),l=_(`aloha-example`);return r(),o(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_WORKWEEK_HEADER_`,description:`_A_CALENDAR_WORKWEEK_DESCRIPTION_`,props:[`work-week-days`,`is-week-numbers`,`working-hours`]},{default:v(()=>[f(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,view:`workweek`,views:[`month`,`workweek`],events:e.events,"is-week-numbers":!0,"working-hours":{start:8,end:18}},null,8,[`modelValue`,`events`])]),_:1},8,[`code-html`,`code-js`])}var $t=P(Zt,[[`render`,Qt]]);function en(){return{dataEvents:[{name:`day-click`,description:`_A_CALENDAR_EVENTS_DAY_CLICK_`},{name:`day-select`,description:`_A_CALENDAR_EVENTS_DAY_SELECT_`},{name:`event-click`,description:`_A_CALENDAR_EVENTS_EVENT_CLICK_`},{name:`event-drop`,description:`_A_CALENDAR_EVENTS_EVENT_DROP_`},{name:`event-resize`,description:`_A_CALENDAR_EVENTS_EVENT_RESIZE_`},{name:`more-click`,description:`_A_CALENDAR_EVENTS_MORE_CLICK_`},{name:`range-change`,description:`_A_CALENDAR_EVENTS_RANGE_CHANGE_`},{name:`time-click`,description:`_A_CALENDAR_EVENTS_TIME_CLICK_`},{name:`time-select`,description:`_A_CALENDAR_EVENTS_TIME_SELECT_`},{name:`update:modelValue`,description:`_A_CALENDAR_EVENTS_UPDATE_MODEL_VALUE_`},{name:`update:view`,description:`_A_CALENDAR_EVENTS_UPDATE_VIEW_`}]}}function tn(){return{dataExposes:[{name:`changeView`,description:`_A_CALENDAR_EXPOSES_CHANGE_VIEW_`,type:`Function`},{name:`closePopover`,description:`_A_CALENDAR_EXPOSES_CLOSE_POPOVER_`,type:`Function`},{name:`downloadIcs`,description:`_A_CALENDAR_EXPOSES_DOWNLOAD_ICS_`,type:`Function`},{name:`focusDay`,description:`_A_CALENDAR_EXPOSES_FOCUS_DAY_`,type:`Function`},{name:`getIcs`,description:`_A_CALENDAR_EXPOSES_GET_ICS_`,type:`Function`},{name:`goToDate`,description:`_A_CALENDAR_EXPOSES_GO_TO_DATE_`,type:`Function`},{name:`goToNext`,description:`_A_CALENDAR_EXPOSES_GO_TO_NEXT_`,type:`Function`},{name:`goToNextMonth`,description:`_A_CALENDAR_EXPOSES_GO_TO_NEXT_MONTH_`,type:`Function`},{name:`goToPrevious`,description:`_A_CALENDAR_EXPOSES_GO_TO_PREVIOUS_`,type:`Function`},{name:`goToPreviousMonth`,description:`_A_CALENDAR_EXPOSES_GO_TO_PREVIOUS_MONTH_`,type:`Function`},{name:`goToToday`,description:`_A_CALENDAR_EXPOSES_GO_TO_TODAY_`,type:`Function`}]}}function nn(){let e=u(()=>S({placeholder:`_A_CALENDAR_COMPONENT_NAME_`}));return{pageTitle:u(()=>`ACalendar${e.value?` (${e.value})`:``}`)}}function rn(){return{dataProps:[{name:`colorDefault`,description:`_A_CALENDAR_PROPS_COLOR_DEFAULT_`,type:`String`,default:`"primary"`,required:!1},{name:`disabledDates`,description:`_A_CALENDAR_PROPS_DISABLED_DATES_`,type:`Array | Function`,default:`undefined`,required:!1},{name:`events`,description:`_A_CALENDAR_PROPS_EVENTS_`,type:`Array`,default:`[]`,required:!1},{name:`firstDayOfWeek`,description:`_A_CALENDAR_PROPS_FIRST_DAY_OF_WEEK_`,type:`Number`,default:`1`,required:!1},{name:`hourEnd`,description:`_A_CALENDAR_PROPS_HOUR_END_`,type:`Number`,default:`24`,required:!1},{name:`hourStart`,description:`_A_CALENDAR_PROPS_HOUR_START_`,type:`Number`,default:`0`,required:!1},{name:`id`,description:`_A_CALENDAR_PROPS_ID_`,type:`String`,default:`uniqueId("a_calendar_")`,required:!1},{name:`isDraggable`,description:`_A_CALENDAR_PROPS_IS_DRAGGABLE_`,type:`Boolean | Function`,default:`false`,required:!1},{name:`isEventPopover`,description:`_A_CALENDAR_PROPS_IS_EVENT_POPOVER_`,type:`Boolean`,default:`false`,required:!1},{name:`isLoading`,description:`_A_CALENDAR_PROPS_IS_LOADING_`,type:`Boolean`,default:`false`,required:!1},{name:`isRangeSelectable`,description:`_A_CALENDAR_PROPS_IS_RANGE_SELECTABLE_`,type:`Boolean`,default:`false`,required:!1},{name:`isResizable`,description:`_A_CALENDAR_PROPS_IS_RESIZABLE_`,type:`Boolean | Function`,default:`false`,required:!1},{name:`isWeekNumbers`,description:`_A_CALENDAR_PROPS_IS_WEEK_NUMBERS_`,type:`Boolean`,default:`false`,required:!1},{name:`keyColor`,description:`_A_CALENDAR_PROPS_KEY_COLOR_`,type:`String | Function`,default:`"color"`,required:!1},{name:`keyDescription`,description:`_A_CALENDAR_PROPS_KEY_DESCRIPTION_`,type:`String | Function`,default:`"description"`,required:!1},{name:`keyEnd`,description:`_A_CALENDAR_PROPS_KEY_END_`,type:`String | Function`,default:`"end"`,required:!1},{name:`keyId`,description:`_A_CALENDAR_PROPS_KEY_ID_`,type:`String | Function`,default:`"id"`,required:!1},{name:`keyIsAllDay`,description:`_A_CALENDAR_PROPS_KEY_IS_ALL_DAY_`,type:`String | Function`,default:`"isAllDay"`,required:!1},{name:`keyLabel`,description:`_A_CALENDAR_PROPS_KEY_LABEL_`,type:`String | Function`,default:`"label"`,required:!1},{name:`keyLocation`,description:`_A_CALENDAR_PROPS_KEY_LOCATION_`,type:`String | Function`,default:`"location"`,required:!1},{name:`keyRecurrence`,description:`_A_CALENDAR_PROPS_KEY_RECURRENCE_`,type:`String | Function`,default:`"recurrence"`,required:!1},{name:`keyStart`,description:`_A_CALENDAR_PROPS_KEY_START_`,type:`String | Function`,default:`"start"`,required:!1},{name:`keyStatus`,description:`_A_CALENDAR_PROPS_KEY_STATUS_`,type:`String | Function`,default:`"status"`,required:!1},{name:`maxDate`,description:`_A_CALENDAR_PROPS_MAX_DATE_`,type:`String | Date | Number`,default:`undefined`,required:!1},{name:`maxEventsPerDay`,description:`_A_CALENDAR_PROPS_MAX_EVENTS_PER_DAY_`,type:`Number`,default:`3`,required:!1},{name:`minDate`,description:`_A_CALENDAR_PROPS_MIN_DATE_`,type:`String | Date | Number`,default:`undefined`,required:!1},{name:`modelValue`,description:`_A_CALENDAR_PROPS_MODEL_VALUE_`,type:`String | Date | Number`,default:`undefined`,required:!1},{name:`scrollToHour`,description:`_A_CALENDAR_PROPS_SCROLL_TO_HOUR_`,type:`Number`,default:`8`,required:!1},{name:`timeStep`,description:`_A_CALENDAR_PROPS_TIME_STEP_`,type:`Number`,default:`30`,required:!1},{name:`view`,description:`_A_CALENDAR_PROPS_VIEW_`,type:`String`,default:`"month"`,required:!1},{name:`views`,description:`_A_CALENDAR_PROPS_VIEWS_`,type:`Array`,default:`["month", "week", "day"]`,required:!1},{name:`workingHours`,description:`_A_CALENDAR_PROPS_WORKING_HOURS_`,type:`Object`,default:`undefined`,required:!1},{name:`workWeekDays`,description:`_A_CALENDAR_PROPS_WORK_WEEK_DAYS_`,type:`Array`,default:`[1, 2, 3, 4, 5]`,required:!1}]}}function an(){return{dataSlots:[{name:`day`,description:`_A_CALENDAR_SLOT_DAY_`},{name:`event`,description:`_A_CALENDAR_SLOT_EVENT_`},{name:`header`,description:`_A_CALENDAR_SLOT_HEADER_`},{name:`popover`,description:`_A_CALENDAR_SLOT_POPOVER_`},{name:`popoverActions`,description:`_A_CALENDAR_SLOT_POPOVER_ACTIONS_`}]}}function on(){return{dataTranslate:`_A_CALENDAR_PREVIOUS_MONTH_._A_CALENDAR_NEXT_MONTH_._A_CALENDAR_TODAY_._A_CALENDAR_MORE_{{count}}_._A_CALENDAR_EVENTS_{{count}}_._A_CALENDAR_PREVIOUS_WEEK_._A_CALENDAR_NEXT_WEEK_._A_CALENDAR_VIEW_._A_CALENDAR_VIEW_MONTH_._A_CALENDAR_VIEW_WEEK_._A_CALENDAR_ALL_DAY_._A_CALENDAR_PREVIOUS_DAY_._A_CALENDAR_NEXT_DAY_._A_CALENDAR_VIEW_DAY_._A_CALENDAR_RECURRING_._A_CALENDAR_VIEW_WORKWEEK_._A_CALENDAR_VIEW_AGENDA_._A_CALENDAR_AGENDA_EMPTY_._A_CALENDAR_WEEK_NUMBER_SHORT_._A_CALENDAR_WEEK_NUMBER_{{week}}_._A_CALENDAR_DAY_DISABLED_._A_CALENDAR_STATUS_TENTATIVE_._A_CALENDAR_STATUS_CANCELLED_._A_CALENDAR_LOADING_._A_CALENDAR_POPOVER_CLOSE_._A_CALENDAR_POPOVER_TIME_._A_CALENDAR_POPOVER_LOCATION_._A_CALENDAR_POPOVER_DESCRIPTION_._A_CALENDAR_KEYBOARD_HINT_._A_CALENDAR_KEYBOARD_MOVED_{{label}}_{{time}}_._A_CALENDAR_KEYBOARD_RESIZED_{{label}}_{{time}}_`.split(`.`)}}var sn={name:`PageCalendar`,components:{AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:N,PageCalendarAgenda:R,PageCalendarAvailability:W,PageCalendarBasic:ae,PageCalendarCreate:de,PageCalendarDay:ge,PageCalendarDragDrop:we,PageCalendarExport:Me,PageCalendarImport:We,PageCalendarLoading:Xe,PageCalendarMaxEvents:rt,PageCalendarMultiDay:ct,PageCalendarPopover:ht,PageCalendarRecurring:St,PageCalendarSlots:Mt,PageCalendarSmall:Rt,PageCalendarStatus:Ut,PageCalendarWeek:Jt,PageCalendarWorkWeek:$t},setup(){let{pageTitle:e}=nn(),{dataProps:t}=rn(),{dataEvents:n}=en(),{dataSlots:r}=an(),{dataExposes:i}=tn(),{dataTranslate:a}=on();return{dataEvents:n,dataExposes:i,dataProps:t,dataSlots:r,dataTranslate:a,pageTitle:e}}};function cn(e,t,n,i,a,s){let c=_(`a-translation`),l=_(`page-calendar-basic`),u=_(`page-calendar-multi-day`),d=_(`page-calendar-recurring`),p=_(`page-calendar-week`),m=_(`page-calendar-work-week`),h=_(`page-calendar-day`),g=_(`page-calendar-agenda`),y=_(`page-calendar-status`),b=_(`page-calendar-availability`),x=_(`page-calendar-max-events`),S=_(`page-calendar-slots`),C=_(`page-calendar-popover`),w=_(`page-calendar-create`),T=_(`page-calendar-drag-drop`),E=_(`page-calendar-loading`),D=_(`page-calendar-small`),O=_(`page-calendar-export`),k=_(`page-calendar-import`),A=_(`aloha-table-props`),j=_(`aloha-table-translate`),M=_(`aloha-table-css-vars`),N=_(`aloha-page`);return r(),o(N,{"page-title":e.pageTitle},{body:v(()=>[f(c,{tag:`p`,html:`_A_CALENDAR_COMPONENT_DESCRIPTION_`}),f(l),f(u),f(d),f(p),f(m),f(h),f(g),f(y),f(b),f(x),f(S),f(C),f(w),f(T),f(E),f(D),f(O),f(k),f(A,{"table-label":`ACalendar`,data:e.dataProps},null,8,[`data`]),f(A,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`description`]},null,8,[`data`]),f(A,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),f(A,{"table-label":`Exposes`,data:e.dataExposes,columns:[`name`,`type`,`description`]},null,8,[`data`]),f(j,{data:e.dataTranslate},null,8,[`data`]),f(M,{files:`components/ACalendar`})]),_:1},8,[`page-title`])}var ln=P(sn,[[`render`,cn]]);export{ln as default};