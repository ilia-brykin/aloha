import{t as e}from"./chunk.AlohaPage.CMN_WHAF.js";import{t}from"./chunk.AlohaTableProps.CBzsMOuC.js";import{t as n}from"./chunk.AlohaTableTranslate.CE8CN3pN.js";import{Bt as r,Ct as i,Ft as a,It as o,Jt as s,Lt as c,Mt as l,Pt as u,Qt as d,Rt as f,Vt as p,cn as m,en as h,mn as g,nn as _,on as v,zt as y}from"./chunk.vendor.CTxSDDRk.js";import{t as b}from"./chunk.AlohaExample.yP2jFH0Q.js";import{Gt as x,O as S,Wt as C,Xt as w,h as T,it as E,jt as D,ut as ee}from"./bundle.index.CXjunDpM.js";import{t as O}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function k(){return{codeHtml:`<a-calendar
  v-model="model"
  :events="events"
/>
<p>
  <a-translation
    tag="strong"
    text="_A_CALENDAR_SELECTED_"
  />: {{ model }}
</p>`}}function A(){return{codeJs:`import {
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
};`}}var j=`YYYY-MM-DD[T]HH:mm:ss.SSSZ`;function M(e){return i().startOf(`month`).add(e-1,`days`).format(`YYYY-MM-DD`)}function N(){let e=i().startOf(`month`),t=(t,n)=>{let r=e.clone().add(t-1,`days`);if(!n)return r.format(`YYYY-MM-DD`);let[i,a]=n.split(`:`);return r.hours(+i).minutes(+a).format(j)};return[{id:1,label:`Team meeting`,start:t(3,`10:00`),end:t(3,`11:00`),color:`primary`},{id:2,label:`Vacation`,start:t(8),end:t(14),color:`success`,isAllDay:!0},{id:3,label:`Dentist`,start:t(12,`08:30`),end:t(12,`09:15`),color:`warning`},{id:4,label:`Workshop`,start:t(12,`09:00`),end:t(13,`17:00`),color:`info`},{id:5,label:`Sprint review`,start:t(12,`14:00`),end:t(12,`15:00`),color:`secondary`},{id:6,label:`Release`,start:t(12,`16:00`),end:t(12,`16:30`),color:`danger`},{id:9,label:`Lunch`,start:t(11,`12:00`),end:t(11,`13:00`),color:`success`},{id:10,label:`Customer call`,start:t(11,`12:30`),end:t(11,`13:30`),color:`info`},{id:11,label:`Planning`,start:t(11,`12:45`),end:t(11,`14:00`),color:`#8e44ad`},{id:7,label:`Birthday`,start:t(20),color:`#8e44ad`,isAllDay:!0},{id:8,label:`Conference`,start:t(26),end:t(33),color:`tertiary`,isAllDay:!0}]}var P={name:`PageCalendarBasic`,components:{ACalendar:C,AlohaExample:b,ATranslation:E},setup(){let{codeHtml:e}=k(),{codeJs:t}=A();return{codeHtml:e,codeJs:t,events:m(N()),model:m(void 0)}}},F={class:`a_mt_3 a_mb_0`};function I(e,t,n,i,s,c){let l=_(`a-calendar`),u=_(`a-translation`),f=_(`aloha-example`);return d(),o(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,description:`_A_CALENDAR_BASIC_DESCRIPTION_`,props:[`events`,`model-value`]},{default:v(()=>[p(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,events:e.events},null,8,[`modelValue`,`events`]),a(`p`,F,[p(u,{tag:`strong`,text:`_A_CALENDAR_SELECTED_`}),r(`: `+g(e.model),1)])]),_:1},8,[`code-html`,`code-js`])}var L=O(P,[[`render`,I]]),R=`YYYY-MM-DD[T]HH:mm:ss.SSSZ`,z=`page_calendar_create_btn_delete`;function B(){let e=m(N().slice(0,3)),t=m({}),n=m(void 0),r=m(!1),a=[{type:`text`,id:`label`,label:`_A_CALENDAR_CREATE_LABEL_`,required:!0,classColumn:`a_column a_column_12`},{type:`datetime`,id:`start`,label:`_A_CALENDAR_CREATE_START_`},{type:`datetime`,id:`end`,label:`_A_CALENDAR_CREATE_END_`},{type:`select`,id:`color`,label:`_A_CALENDAR_CREATE_COLOR_`,data:[`primary`,`secondary`,`tertiary`,`success`,`info`,`warning`,`danger`,`gray`].map(e=>({label:e,value:e}))},{type:`oneCheckbox`,id:`isAllDay`,label:`_A_CALENDAR_CREATE_ALL_DAY_`}],o=u(()=>n.value!==void 0),c=u(()=>o.value?`_A_CALENDAR_CREATE_MODAL_EDIT_`:`_A_CALENDAR_CREATE_MODAL_NEW_`),l=u(()=>!t.value.label||!t.value.start),d=({start:e,end:a})=>{n.value=void 0,t.value={label:``,start:i(e).format(R),end:i(a).format(R),color:`primary`,isAllDay:!1},r.value=!0},f=e=>{let t=i(e).hours(9).minutes(0);d({start:t,end:t.clone().add(1,`hour`)})},p=({date:e})=>{f(e)},h=({start:e})=>{d({start:e,end:i(e).add(1,`hour`)})},g=()=>{f(new Date)},_=({event:e})=>{n.value=e.id,t.value={...e},r.value=!0},v=()=>{r.value=!1},y=()=>{o.value?e.value=e.value.map(e=>e.id===n.value?{...t.value,id:n.value}:e):e.value=[...e.value,{...t.value,id:Date.now()}],v()},{closeConfirm:b,openConfirm:x}=S();return{btnDeleteId:z,closeModal:v,dataForm:a,deleteEvent:()=>{x({headerText:`_A_CALENDAR_CREATE_DELETE_CONFIRM_HEADER_`,bodyHtml:`_A_CALENDAR_CREATE_DELETE_CONFIRM_BODY_{{label}}_`,extra:{label:D(t.value.label)},saveButtonText:`_A_CALENDAR_CREATE_DELETE_`,saveButtonClass:`a_btn a_btn_danger`,save:()=>{e.value=e.value.filter(e=>e.id!==n.value),b(),v()},close:()=>{b(),s(()=>ee({selector:`#${z}`}))}})},events:e,headerText:c,isEditing:o,isModalVisible:r,isSaveDisabled:l,model:t,onDayClick:p,onEventClick:_,onTimeClick:h,openModalToday:g,save:y}}function V(){return{codeHtml:`<a-button
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
</a-modal-form>`}}function H(){return{codeJs:`// PageCalendarCreate.js
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
}`}}var U={name:`PageCalendarCreate`,components:{AButton:x,ACalendar:C,AlohaExample:b,AModalForm:T},setup(){let{codeHtml:e}=V(),{codeJs:t}=H(),{btnDeleteId:n,closeModal:r,dataForm:i,deleteEvent:a,events:o,headerText:s,isEditing:c,isModalVisible:l,isSaveDisabled:u,model:d,onDayClick:f,onEventClick:p,onTimeClick:m,openModalToday:h,save:g}=B();return{btnDeleteId:n,closeModal:r,codeHtml:e,codeJs:t,dataForm:i,deleteEvent:a,events:o,headerText:s,isEditing:c,isModalVisible:l,isSaveDisabled:u,model:d,onDayClick:f,onEventClick:p,onTimeClick:m,openModalToday:h,save:g}}};function W(e,t,n,r,i,a){let s=_(`a-button`),l=_(`a-calendar`),u=_(`a-modal-form`),f=_(`aloha-example`);return d(),o(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_CREATE_HEADER_`,description:`_A_CALENDAR_CREATE_DESCRIPTION_`},{default:v(()=>[p(s,{class:`a_btn a_btn_primary a_mb_3`,text:`_A_CALENDAR_CREATE_BTN_`,onClick:e.openModalToday},null,8,[`onClick`]),p(l,{events:e.events,onDayClick:e.onDayClick,onEventClick:e.onEventClick,onTimeClick:e.onTimeClick},null,8,[`events`,`onDayClick`,`onEventClick`,`onTimeClick`]),e.isModalVisible?(d(),o(u,{key:0,modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"data-form":e.dataForm,"header-text":e.headerText,close:e.closeModal,save:e.save,"disabled-save":e.isSaveDisabled,"class-columns":`a_columns a_columns_count_12 a_columns_gap_3`,"class-column-default":`a_column a_column_6 a_column_12_touch`},y({_:2},[e.isEditing?{name:`modalFooterAppend`,fn:v(()=>[p(s,{class:`a_btn a_btn_outline_danger`,id:e.btnDeleteId,text:`_A_CALENDAR_CREATE_DELETE_`,onClick:e.deleteEvent},null,8,[`id`,`onClick`])]),key:`0`}:void 0]),1032,[`modelValue`,`data-form`,`header-text`,`close`,`save`,`disabled-save`])):c(``,!0)]),_:1},8,[`code-html`,`code-js`])}var G=O(U,[[`render`,W]]);function K(){return{codeHtml:`<a-calendar
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
</div>`}}function q(){return{codeJs:`import {
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
};`}}var J={name:`PageCalendarMaxEvents`,components:{ACalendar:C,AlohaExample:b,ATranslation:E},setup(){let{codeHtml:e}=K(),{codeJs:t}=q(),n=m(N()),r=m([]),i=m(void 0);return{codeHtml:e,codeJs:t,day:i,dayEvents:r,events:n,onMoreClick:({date:e,events:t})=>{i.value=e,r.value=t}}}},Y={key:0,class:`a_mt_3`},X={class:`a_mb_0`};function Z(e,t,n,i,s,u){let m=_(`a-calendar`),y=_(`a-translation`),b=_(`aloha-example`);return d(),o(b,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_MAX_EVENTS_HEADER_`,description:`_A_CALENDAR_MAX_EVENTS_DESCRIPTION_`,props:[`max-events-per-day`]},{default:v(()=>[p(m,{events:e.events,"max-events-per-day":2,onMoreClick:e.onMoreClick},null,8,[`events`,`onMoreClick`]),e.day?(d(),f(`div`,Y,[p(y,{tag:`strong`,text:`_A_CALENDAR_MAX_EVENTS_LIST_`}),r(`: `+g(e.day),1),a(`ul`,X,[(d(!0),f(l,null,h(e.dayEvents,e=>(d(),f(`li`,{key:e.id},g(e.label),1))),128))])])):c(``,!0)]),_:1},8,[`code-html`,`code-js`])}var te=O(J,[[`render`,Z]]);function Q(){return{codeHtml:`<a-calendar
  :events="events"
  :max-events-per-day="0"
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
};`}}var re={name:`PageCalendarMultiDay`,components:{ACalendar:C,AlohaExample:b},setup(){let{codeHtml:e}=Q(),{codeJs:t}=ne();return{codeHtml:e,codeJs:t,events:m(N())}}};function ie(e,t,n,r,i,a){let s=_(`a-calendar`),c=_(`aloha-example`);return d(),o(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_MULTI_DAY_HEADER_`,description:`_A_CALENDAR_MULTI_DAY_DESCRIPTION_`,props:[`max-events-per-day`,`color-default`]},{default:v(()=>[p(s,{events:e.events,"max-events-per-day":0},null,8,[`events`])]),_:1},8,[`code-html`,`code-js`])}var ae=O(re,[[`render`,ie]]);function oe(){return{codeHtml:`<a-calendar
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
</a-calendar>`}}function se(){return{codeJs:`import {
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
};`}}var ce={name:`PageCalendarSlots`,components:{AButton:x,ACalendar:C,AlohaExample:b},setup(){let{codeHtml:e}=oe(),{codeJs:t}=se();return{codeHtml:e,codeJs:t,events:m(N())}}},le={class:`a_d_flex a_align_items_center a_gap_2`},ue={class:`a_m_0`},de={key:0,class:`a_badge a_badge_secondary a_ml_auto`,"aria-hidden":`true`},fe={key:0},pe={key:1};function me(e,t,n,r,i,s){let l=_(`a-button`),u=_(`a-calendar`),m=_(`aloha-example`);return d(),o(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_SLOTS_HEADER_`,description:`_A_CALENDAR_SLOTS_DESCRIPTION_`},{default:v(()=>[p(u,{events:e.events},{header:v(({title:e,goToPreviousMonth:t,goToNextMonth:n})=>[a(`div`,le,[p(l,{class:`a_btn a_btn_link`,text:`←`,"text-screen-reader":`_A_CALENDAR_PREVIOUS_MONTH_`,onClick:t},null,8,[`onClick`]),a(`h3`,ue,g(e),1),p(l,{class:`a_btn a_btn_link`,text:`→`,"text-screen-reader":`_A_CALENDAR_NEXT_MONTH_`,onClick:n},null,8,[`onClick`])])]),day:v(({day:e,events:t})=>[a(`span`,null,g(e.day),1),t.length?(d(),f(`span`,de,g(t.length),1)):c(``,!0)]),event:v(({event:e,isStart:t})=>[t?(d(),f(`strong`,fe,g(e.label),1)):(d(),f(`span`,pe,`… `+g(e.label),1))]),_:1},8,[`events`])]),_:1},8,[`code-html`,`code-js`])}var he=O(ce,[[`render`,me]]);function ge(){return{codeHtml:`<a-calendar
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
</p>`}}function _e(){return{codeJs:`import {
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
};`}}var ve={name:`PageCalendarWeek`,components:{ACalendar:C,AlohaExample:b,ATranslation:E},setup(){let{codeHtml:e}=ge(),{codeJs:t}=_e();return{codeHtml:e,codeJs:t,events:m(N()),model:m(M(11)),view:m(`week`)}}},ye={class:`a_mt_3 a_mb_0`};function be(e,t,n,i,s,c){let l=_(`a-calendar`),u=_(`a-translation`),f=_(`aloha-example`);return d(),o(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_WEEK_HEADER_`,description:`_A_CALENDAR_WEEK_DESCRIPTION_`,props:[`view`,`views`,`hour-start`,`hour-end`,`scroll-to-hour`,`time-step`]},{default:v(()=>[p(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,view:e.view,"onUpdate:view":t[1]||=t=>e.view=t,events:e.events,"hour-start":6,"hour-end":22},null,8,[`modelValue`,`view`,`events`]),a(`p`,ye,[p(u,{tag:`strong`,text:`_A_CALENDAR_VIEW_`}),r(`: `+g(e.view),1)])]),_:1},8,[`code-html`,`code-js`])}var $=O(ve,[[`render`,be]]);function xe(){return{dataEvents:[{name:`day-click`,description:`_A_CALENDAR_EVENTS_DAY_CLICK_`},{name:`event-click`,description:`_A_CALENDAR_EVENTS_EVENT_CLICK_`},{name:`more-click`,description:`_A_CALENDAR_EVENTS_MORE_CLICK_`},{name:`range-change`,description:`_A_CALENDAR_EVENTS_RANGE_CHANGE_`},{name:`time-click`,description:`_A_CALENDAR_EVENTS_TIME_CLICK_`},{name:`update:modelValue`,description:`_A_CALENDAR_EVENTS_UPDATE_MODEL_VALUE_`},{name:`update:view`,description:`_A_CALENDAR_EVENTS_UPDATE_VIEW_`}]}}function Se(){return{dataExposes:[{name:`changeView`,description:`_A_CALENDAR_EXPOSES_CHANGE_VIEW_`,type:`Function`},{name:`focusDay`,description:`_A_CALENDAR_EXPOSES_FOCUS_DAY_`,type:`Function`},{name:`goToDate`,description:`_A_CALENDAR_EXPOSES_GO_TO_DATE_`,type:`Function`},{name:`goToNext`,description:`_A_CALENDAR_EXPOSES_GO_TO_NEXT_`,type:`Function`},{name:`goToNextMonth`,description:`_A_CALENDAR_EXPOSES_GO_TO_NEXT_MONTH_`,type:`Function`},{name:`goToPrevious`,description:`_A_CALENDAR_EXPOSES_GO_TO_PREVIOUS_`,type:`Function`},{name:`goToPreviousMonth`,description:`_A_CALENDAR_EXPOSES_GO_TO_PREVIOUS_MONTH_`,type:`Function`},{name:`goToToday`,description:`_A_CALENDAR_EXPOSES_GO_TO_TODAY_`,type:`Function`}]}}function Ce(){let e=u(()=>w({placeholder:`_A_CALENDAR_COMPONENT_NAME_`}));return{pageTitle:u(()=>`ACalendar${e.value?` (${e.value})`:``}`)}}function we(){return{dataProps:[{name:`colorDefault`,description:`_A_CALENDAR_PROPS_COLOR_DEFAULT_`,type:`String`,default:`"primary"`,required:!1},{name:`events`,description:`_A_CALENDAR_PROPS_EVENTS_`,type:`Array`,default:`[]`,required:!1},{name:`firstDayOfWeek`,description:`_A_CALENDAR_PROPS_FIRST_DAY_OF_WEEK_`,type:`Number`,default:`1`,required:!1},{name:`hourEnd`,description:`_A_CALENDAR_PROPS_HOUR_END_`,type:`Number`,default:`24`,required:!1},{name:`hourStart`,description:`_A_CALENDAR_PROPS_HOUR_START_`,type:`Number`,default:`0`,required:!1},{name:`id`,description:`_A_CALENDAR_PROPS_ID_`,type:`String`,default:`uniqueId("a_calendar_")`,required:!1},{name:`keyColor`,description:`_A_CALENDAR_PROPS_KEY_COLOR_`,type:`String | Function`,default:`"color"`,required:!1},{name:`keyEnd`,description:`_A_CALENDAR_PROPS_KEY_END_`,type:`String | Function`,default:`"end"`,required:!1},{name:`keyId`,description:`_A_CALENDAR_PROPS_KEY_ID_`,type:`String | Function`,default:`"id"`,required:!1},{name:`keyIsAllDay`,description:`_A_CALENDAR_PROPS_KEY_IS_ALL_DAY_`,type:`String | Function`,default:`"isAllDay"`,required:!1},{name:`keyLabel`,description:`_A_CALENDAR_PROPS_KEY_LABEL_`,type:`String | Function`,default:`"label"`,required:!1},{name:`keyStart`,description:`_A_CALENDAR_PROPS_KEY_START_`,type:`String | Function`,default:`"start"`,required:!1},{name:`maxEventsPerDay`,description:`_A_CALENDAR_PROPS_MAX_EVENTS_PER_DAY_`,type:`Number`,default:`3`,required:!1},{name:`modelValue`,description:`_A_CALENDAR_PROPS_MODEL_VALUE_`,type:`String | Date | Number`,default:`undefined`,required:!1},{name:`scrollToHour`,description:`_A_CALENDAR_PROPS_SCROLL_TO_HOUR_`,type:`Number`,default:`8`,required:!1},{name:`timeStep`,description:`_A_CALENDAR_PROPS_TIME_STEP_`,type:`Number`,default:`30`,required:!1},{name:`view`,description:`_A_CALENDAR_PROPS_VIEW_`,type:`String`,default:`"month"`,required:!1},{name:`views`,description:`_A_CALENDAR_PROPS_VIEWS_`,type:`Array`,default:`["month", "week"]`,required:!1}]}}function Te(){return{dataSlots:[{name:`day`,description:`_A_CALENDAR_SLOT_DAY_`},{name:`event`,description:`_A_CALENDAR_SLOT_EVENT_`},{name:`header`,description:`_A_CALENDAR_SLOT_HEADER_`}]}}function Ee(){return{dataTranslate:[`_A_CALENDAR_PREVIOUS_MONTH_`,`_A_CALENDAR_NEXT_MONTH_`,`_A_CALENDAR_TODAY_`,`_A_CALENDAR_MORE_{{count}}_`,`_A_CALENDAR_EVENTS_{{count}}_`,`_A_CALENDAR_PREVIOUS_WEEK_`,`_A_CALENDAR_NEXT_WEEK_`,`_A_CALENDAR_VIEW_`,`_A_CALENDAR_VIEW_MONTH_`,`_A_CALENDAR_VIEW_WEEK_`,`_A_CALENDAR_ALL_DAY_`]}}var De={name:`PageCalendar`,components:{AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:E,PageCalendarBasic:L,PageCalendarCreate:G,PageCalendarMaxEvents:te,PageCalendarMultiDay:ae,PageCalendarSlots:he,PageCalendarWeek:$},setup(){let{pageTitle:e}=Ce(),{dataProps:t}=we(),{dataEvents:n}=xe(),{dataSlots:r}=Te(),{dataExposes:i}=Se(),{dataTranslate:a}=Ee();return{dataEvents:n,dataExposes:i,dataProps:t,dataSlots:r,dataTranslate:a,pageTitle:e}}};function Oe(e,t,n,r,i,a){let s=_(`a-translation`),c=_(`page-calendar-basic`),l=_(`page-calendar-multi-day`),u=_(`page-calendar-week`),f=_(`page-calendar-max-events`),m=_(`page-calendar-slots`),h=_(`page-calendar-create`),g=_(`aloha-table-props`),y=_(`aloha-table-translate`),b=_(`aloha-table-css-vars`),x=_(`aloha-page`);return d(),o(x,{"page-title":e.pageTitle},{body:v(()=>[p(s,{tag:`p`,html:`_A_CALENDAR_COMPONENT_DESCRIPTION_`}),p(c),p(l),p(u),p(f),p(m),p(h),p(g,{"table-label":`ACalendar`,data:e.dataProps},null,8,[`data`]),p(g,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`description`]},null,8,[`data`]),p(g,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),p(g,{"table-label":`Exposes`,data:e.dataExposes,columns:[`name`,`type`,`description`]},null,8,[`data`]),p(y,{data:e.dataTranslate},null,8,[`data`]),p(b,{files:`components/ACalendar`})]),_:1},8,[`page-title`])}var ke=O(De,[[`render`,Oe]]);export{ke as default};