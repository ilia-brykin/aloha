import{t as e}from"./chunk.AlohaPage.D3Li-ZF0.js";import{t}from"./chunk.AlohaTableProps.CkfwW_YW.js";import{t as n}from"./chunk.AlohaTableTranslate.uomCHq9R.js";import{Bt as r,Ct as i,Ft as a,It as o,Jt as s,Lt as c,Mt as l,Pt as u,Qt as d,Rt as f,Vt as p,cn as m,en as h,mn as g,nn as _,on as v,zt as y}from"./chunk.vendor.CTxSDDRk.js";import{t as b}from"./chunk.AlohaExample.CxIYYMNm.js";import{Gt as x,O as S,Wt as C,Xt as w,h as T,it as E,jt as D,ut as ee}from"./bundle.index.B0QE_J15.js";import{t as O}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function k(){return{codeHtml:`<a-calendar
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
};`}}var j=`YYYY-MM-DD[T]HH:mm:ss.SSSZ`;function M(){let e=i().startOf(`month`),t=(t,n)=>{let r=e.clone().add(t-1,`days`);if(!n)return r.format(`YYYY-MM-DD`);let[i,a]=n.split(`:`);return r.hours(+i).minutes(+a).format(j)};return[{id:1,label:`Team meeting`,start:t(3,`10:00`),end:t(3,`11:00`),color:`primary`},{id:2,label:`Vacation`,start:t(8),end:t(14),color:`success`,isAllDay:!0},{id:3,label:`Dentist`,start:t(12,`08:30`),end:t(12,`09:15`),color:`warning`},{id:4,label:`Workshop`,start:t(12,`09:00`),end:t(13,`17:00`),color:`info`},{id:5,label:`Sprint review`,start:t(12,`14:00`),end:t(12,`15:00`),color:`secondary`},{id:6,label:`Release`,start:t(12,`16:00`),end:t(12,`16:30`),color:`danger`},{id:7,label:`Birthday`,start:t(20),color:`#8e44ad`,isAllDay:!0},{id:8,label:`Conference`,start:t(26),end:t(33),color:`tertiary`,isAllDay:!0}]}var N={name:`PageCalendarBasic`,components:{ACalendar:C,AlohaExample:b,ATranslation:E},setup(){let{codeHtml:e}=k(),{codeJs:t}=A();return{codeHtml:e,codeJs:t,events:m(M()),model:m(void 0)}}},P={class:`a_mt_3 a_mb_0`};function F(e,t,n,i,s,c){let l=_(`a-calendar`),u=_(`a-translation`),f=_(`aloha-example`);return d(),o(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,description:`_A_CALENDAR_BASIC_DESCRIPTION_`,props:[`events`,`model-value`]},{default:v(()=>[p(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,events:e.events},null,8,[`modelValue`,`events`]),a(`p`,P,[p(u,{tag:`strong`,text:`_A_CALENDAR_SELECTED_`}),r(`: `+g(e.model),1)])]),_:1},8,[`code-html`,`code-js`])}var I=O(N,[[`render`,F]]),L=`YYYY-MM-DD[T]HH:mm:ss.SSSZ`,R=`page_calendar_create_btn_delete`;function z(){let e=m(M().slice(0,3)),t=m({}),n=m(void 0),r=m(!1),a=[{type:`text`,id:`label`,label:`_A_CALENDAR_CREATE_LABEL_`,required:!0,classColumn:`a_column a_column_12`},{type:`datetime`,id:`start`,label:`_A_CALENDAR_CREATE_START_`},{type:`datetime`,id:`end`,label:`_A_CALENDAR_CREATE_END_`},{type:`select`,id:`color`,label:`_A_CALENDAR_CREATE_COLOR_`,data:[`primary`,`secondary`,`tertiary`,`success`,`info`,`warning`,`danger`,`gray`].map(e=>({label:e,value:e}))},{type:`oneCheckbox`,id:`isAllDay`,label:`_A_CALENDAR_CREATE_ALL_DAY_`}],o=u(()=>n.value!==void 0),c=u(()=>o.value?`_A_CALENDAR_CREATE_MODAL_EDIT_`:`_A_CALENDAR_CREATE_MODAL_NEW_`),l=u(()=>!t.value.label||!t.value.start),d=e=>{let a=i(e).hours(9).minutes(0);n.value=void 0,t.value={label:``,start:a.format(L),end:a.clone().add(1,`hour`).format(L),color:`primary`,isAllDay:!1},r.value=!0},f=({date:e})=>{d(e)},p=()=>{d(new Date)},h=({event:e})=>{n.value=e.id,t.value={...e},r.value=!0},g=()=>{r.value=!1},_=()=>{o.value?e.value=e.value.map(e=>e.id===n.value?{...t.value,id:n.value}:e):e.value=[...e.value,{...t.value,id:Date.now()}],g()},{closeConfirm:v,openConfirm:y}=S();return{btnDeleteId:R,closeModal:g,dataForm:a,deleteEvent:()=>{y({headerText:`_A_CALENDAR_CREATE_DELETE_CONFIRM_HEADER_`,bodyHtml:`_A_CALENDAR_CREATE_DELETE_CONFIRM_BODY_{{label}}_`,extra:{label:D(t.value.label)},saveButtonText:`_A_CALENDAR_CREATE_DELETE_`,saveButtonClass:`a_btn a_btn_danger`,save:()=>{e.value=e.value.filter(e=>e.id!==n.value),v(),g()},close:()=>{v(),s(()=>ee({selector:`#${R}`}))}})},events:e,headerText:c,isEditing:o,isModalVisible:r,isSaveDisabled:l,model:t,onDayClick:f,onEventClick:h,openModalNew:p,save:_}}function B(){return{codeHtml:`<a-button
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
      openModalNew,
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
      openModalNew,
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
    openModalNew,
    save,
  };
}`}}var H={name:`PageCalendarCreate`,components:{AButton:x,ACalendar:C,AlohaExample:b,AModalForm:T},setup(){let{codeHtml:e}=B(),{codeJs:t}=V(),{btnDeleteId:n,closeModal:r,dataForm:i,deleteEvent:a,events:o,headerText:s,isEditing:c,isModalVisible:l,isSaveDisabled:u,model:d,onDayClick:f,onEventClick:p,openModalNew:m,save:h}=z();return{btnDeleteId:n,closeModal:r,codeHtml:e,codeJs:t,dataForm:i,deleteEvent:a,events:o,headerText:s,isEditing:c,isModalVisible:l,isSaveDisabled:u,model:d,onDayClick:f,onEventClick:p,openModalNew:m,save:h}}};function U(e,t,n,r,i,a){let s=_(`a-button`),l=_(`a-calendar`),u=_(`a-modal-form`),f=_(`aloha-example`);return d(),o(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_CREATE_HEADER_`,description:`_A_CALENDAR_CREATE_DESCRIPTION_`},{default:v(()=>[p(s,{class:`a_btn a_btn_primary a_mb_3`,text:`_A_CALENDAR_CREATE_BTN_`,onClick:e.openModalNew},null,8,[`onClick`]),p(l,{events:e.events,onDayClick:e.onDayClick,onEventClick:e.onEventClick},null,8,[`events`,`onDayClick`,`onEventClick`]),e.isModalVisible?(d(),o(u,{key:0,modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"data-form":e.dataForm,"header-text":e.headerText,close:e.closeModal,save:e.save,"disabled-save":e.isSaveDisabled,"class-columns":`a_columns a_columns_count_12 a_columns_gap_3`,"class-column-default":`a_column a_column_6 a_column_12_touch`},y({_:2},[e.isEditing?{name:`modalFooterAppend`,fn:v(()=>[p(s,{class:`a_btn a_btn_outline_danger`,id:e.btnDeleteId,text:`_A_CALENDAR_CREATE_DELETE_`,onClick:e.deleteEvent},null,8,[`id`,`onClick`])]),key:`0`}:void 0]),1032,[`modelValue`,`data-form`,`header-text`,`close`,`save`,`disabled-save`])):c(``,!0)]),_:1},8,[`code-html`,`code-js`])}var W=O(H,[[`render`,U]]);function G(){return{codeHtml:`<a-calendar
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
</div>`}}function K(){return{codeJs:`import {
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
};`}}var q={name:`PageCalendarMaxEvents`,components:{ACalendar:C,AlohaExample:b,ATranslation:E},setup(){let{codeHtml:e}=G(),{codeJs:t}=K(),n=m(M()),r=m([]),i=m(void 0);return{codeHtml:e,codeJs:t,day:i,dayEvents:r,events:n,onMoreClick:({date:e,events:t})=>{i.value=e,r.value=t}}}},J={key:0,class:`a_mt_3`},Y={class:`a_mb_0`};function X(e,t,n,i,s,u){let m=_(`a-calendar`),y=_(`a-translation`),b=_(`aloha-example`);return d(),o(b,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_MAX_EVENTS_HEADER_`,description:`_A_CALENDAR_MAX_EVENTS_DESCRIPTION_`,props:[`max-events-per-day`]},{default:v(()=>[p(m,{events:e.events,"max-events-per-day":2,onMoreClick:e.onMoreClick},null,8,[`events`,`onMoreClick`]),e.day?(d(),f(`div`,J,[p(y,{tag:`strong`,text:`_A_CALENDAR_MAX_EVENTS_LIST_`}),r(`: `+g(e.day),1),a(`ul`,Y,[(d(!0),f(l,null,h(e.dayEvents,e=>(d(),f(`li`,{key:e.id},g(e.label),1))),128))])])):c(``,!0)]),_:1},8,[`code-html`,`code-js`])}var Z=O(q,[[`render`,X]]);function te(){return{codeHtml:`<a-calendar
  :events="events"
  :max-events-per-day="0"
/>`}}function Q(){return{codeJs:`import {
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
};`}}var ne={name:`PageCalendarMultiDay`,components:{ACalendar:C,AlohaExample:b},setup(){let{codeHtml:e}=te(),{codeJs:t}=Q();return{codeHtml:e,codeJs:t,events:m(M())}}};function re(e,t,n,r,i,a){let s=_(`a-calendar`),c=_(`aloha-example`);return d(),o(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_MULTI_DAY_HEADER_`,description:`_A_CALENDAR_MULTI_DAY_DESCRIPTION_`,props:[`max-events-per-day`,`color-default`]},{default:v(()=>[p(s,{events:e.events,"max-events-per-day":0},null,8,[`events`])]),_:1},8,[`code-html`,`code-js`])}var ie=O(ne,[[`render`,re]]);function ae(){return{codeHtml:`<a-calendar
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
</a-calendar>`}}function oe(){return{codeJs:`import {
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
};`}}var se={name:`PageCalendarSlots`,components:{AButton:x,ACalendar:C,AlohaExample:b},setup(){let{codeHtml:e}=ae(),{codeJs:t}=oe();return{codeHtml:e,codeJs:t,events:m(M())}}},ce={class:`a_d_flex a_align_items_center a_gap_2`},le={class:`a_m_0`},ue={key:0,class:`a_badge a_badge_secondary a_ml_auto`,"aria-hidden":`true`},de={key:0},fe={key:1};function pe(e,t,n,r,i,s){let l=_(`a-button`),u=_(`a-calendar`),m=_(`aloha-example`);return d(),o(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CALENDAR_SLOTS_HEADER_`,description:`_A_CALENDAR_SLOTS_DESCRIPTION_`},{default:v(()=>[p(u,{events:e.events},{header:v(({title:e,goToPreviousMonth:t,goToNextMonth:n})=>[a(`div`,ce,[p(l,{class:`a_btn a_btn_link`,text:`←`,"text-screen-reader":`_A_CALENDAR_PREVIOUS_MONTH_`,onClick:t},null,8,[`onClick`]),a(`h3`,le,g(e),1),p(l,{class:`a_btn a_btn_link`,text:`→`,"text-screen-reader":`_A_CALENDAR_NEXT_MONTH_`,onClick:n},null,8,[`onClick`])])]),day:v(({day:e,events:t})=>[a(`span`,null,g(e.day),1),t.length?(d(),f(`span`,ue,g(t.length),1)):c(``,!0)]),event:v(({event:e,isStart:t})=>[t?(d(),f(`strong`,de,g(e.label),1)):(d(),f(`span`,fe,`… `+g(e.label),1))]),_:1},8,[`events`])]),_:1},8,[`code-html`,`code-js`])}var $=O(se,[[`render`,pe]]);function me(){return{dataEvents:[{name:`day-click`,description:`_A_CALENDAR_EVENTS_DAY_CLICK_`},{name:`event-click`,description:`_A_CALENDAR_EVENTS_EVENT_CLICK_`},{name:`more-click`,description:`_A_CALENDAR_EVENTS_MORE_CLICK_`},{name:`range-change`,description:`_A_CALENDAR_EVENTS_RANGE_CHANGE_`},{name:`update:modelValue`,description:`_A_CALENDAR_EVENTS_UPDATE_MODEL_VALUE_`}]}}function he(){return{dataExposes:[{name:`focusDay`,description:`_A_CALENDAR_EXPOSES_FOCUS_DAY_`,type:`Function`},{name:`goToDate`,description:`_A_CALENDAR_EXPOSES_GO_TO_DATE_`,type:`Function`},{name:`goToNextMonth`,description:`_A_CALENDAR_EXPOSES_GO_TO_NEXT_MONTH_`,type:`Function`},{name:`goToPreviousMonth`,description:`_A_CALENDAR_EXPOSES_GO_TO_PREVIOUS_MONTH_`,type:`Function`},{name:`goToToday`,description:`_A_CALENDAR_EXPOSES_GO_TO_TODAY_`,type:`Function`}]}}function ge(){let e=u(()=>w({placeholder:`_A_CALENDAR_COMPONENT_NAME_`}));return{pageTitle:u(()=>`ACalendar${e.value?` (${e.value})`:``}`)}}function _e(){return{dataProps:[{name:`colorDefault`,description:`_A_CALENDAR_PROPS_COLOR_DEFAULT_`,type:`String`,default:`"primary"`,required:!1},{name:`events`,description:`_A_CALENDAR_PROPS_EVENTS_`,type:`Array`,default:`[]`,required:!1},{name:`firstDayOfWeek`,description:`_A_CALENDAR_PROPS_FIRST_DAY_OF_WEEK_`,type:`Number`,default:`1`,required:!1},{name:`id`,description:`_A_CALENDAR_PROPS_ID_`,type:`String`,default:`uniqueId("a_calendar_")`,required:!1},{name:`keyColor`,description:`_A_CALENDAR_PROPS_KEY_COLOR_`,type:`String | Function`,default:`"color"`,required:!1},{name:`keyEnd`,description:`_A_CALENDAR_PROPS_KEY_END_`,type:`String | Function`,default:`"end"`,required:!1},{name:`keyId`,description:`_A_CALENDAR_PROPS_KEY_ID_`,type:`String | Function`,default:`"id"`,required:!1},{name:`keyIsAllDay`,description:`_A_CALENDAR_PROPS_KEY_IS_ALL_DAY_`,type:`String | Function`,default:`"isAllDay"`,required:!1},{name:`keyLabel`,description:`_A_CALENDAR_PROPS_KEY_LABEL_`,type:`String | Function`,default:`"label"`,required:!1},{name:`keyStart`,description:`_A_CALENDAR_PROPS_KEY_START_`,type:`String | Function`,default:`"start"`,required:!1},{name:`maxEventsPerDay`,description:`_A_CALENDAR_PROPS_MAX_EVENTS_PER_DAY_`,type:`Number`,default:`3`,required:!1},{name:`modelValue`,description:`_A_CALENDAR_PROPS_MODEL_VALUE_`,type:`String | Date | Number`,default:`undefined`,required:!1}]}}function ve(){return{dataSlots:[{name:`day`,description:`_A_CALENDAR_SLOT_DAY_`},{name:`event`,description:`_A_CALENDAR_SLOT_EVENT_`},{name:`header`,description:`_A_CALENDAR_SLOT_HEADER_`}]}}function ye(){return{dataTranslate:[`_A_CALENDAR_PREVIOUS_MONTH_`,`_A_CALENDAR_NEXT_MONTH_`,`_A_CALENDAR_TODAY_`,`_A_CALENDAR_MORE_{{count}}_`,`_A_CALENDAR_EVENTS_{{count}}_`]}}var be={name:`PageCalendar`,components:{AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:E,PageCalendarBasic:I,PageCalendarCreate:W,PageCalendarMaxEvents:Z,PageCalendarMultiDay:ie,PageCalendarSlots:$},setup(){let{pageTitle:e}=ge(),{dataProps:t}=_e(),{dataEvents:n}=me(),{dataSlots:r}=ve(),{dataExposes:i}=he(),{dataTranslate:a}=ye();return{dataEvents:n,dataExposes:i,dataProps:t,dataSlots:r,dataTranslate:a,pageTitle:e}}};function xe(e,t,n,r,i,a){let s=_(`a-translation`),c=_(`page-calendar-basic`),l=_(`page-calendar-multi-day`),u=_(`page-calendar-max-events`),f=_(`page-calendar-slots`),m=_(`page-calendar-create`),h=_(`aloha-table-props`),g=_(`aloha-table-translate`),y=_(`aloha-table-css-vars`),b=_(`aloha-page`);return d(),o(b,{"page-title":e.pageTitle},{body:v(()=>[p(s,{tag:`p`,html:`_A_CALENDAR_COMPONENT_DESCRIPTION_`}),p(c),p(l),p(u),p(f),p(m),p(h,{"table-label":`ACalendar`,data:e.dataProps},null,8,[`data`]),p(h,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`description`]},null,8,[`data`]),p(h,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),p(h,{"table-label":`Exposes`,data:e.dataExposes,columns:[`name`,`type`,`description`]},null,8,[`data`]),p(g,{data:e.dataTranslate},null,8,[`data`]),p(y,{files:`components/ACalendar`})]),_:1},8,[`page-title`])}var Se=O(be,[[`render`,xe]]);export{Se as default};