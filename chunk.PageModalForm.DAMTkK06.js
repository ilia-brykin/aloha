import{t as e}from"./chunk.AlohaPage.D8jsTY5m.js";import{t}from"./chunk.AlohaTableProps.CEJuqblo.js";import{Gt as n,Ht as r,Jt as i,Ut as a,Vt as o,Wt as s,_n as c,mn as l,on as u,un as d,wn as f}from"./chunk.vendor.Bjd2408Z.js";import{t as p}from"./chunk.AlohaExample.B-5omd3W.js";import{hn as m,mn as h,sn as g,t as _,y as v}from"./bundle.index.Cwpafk10.js";import{n as y,r as b,t as x}from"./chunk.SlotsAPI.CvmKxOcW.js";import{n as S,t as C}from"./chunk.SlotsAPI.sQJI1B9c.js";function w(){return{codeHtml:`<a-button
  id="btn_modal_form_columns"
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
/>

<a-modal-form
  v-if="isModalVisible"
  selector-close-ids="btn_modal_form_columns"
  v-model="model"
  :data-form="dataForm"
  :close="closeModal"
  :is-save-button-hide="true"
  header-text="_A_MODAL_FORM_COLUMNS_HEADER_"
  size="large"
  class-columns="a_columns a_columns_count_12 a_columns_gap_3"
  class-column-default="a_column a_column_6 a_column_12_touch"
/>
<pre>{{ model }}</pre>`}}function T(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AButton,
  AModalForm,
} from "aloha-vue";

export default {
  components: {
    AButton,
    AModalForm,
  },
  setup() {
    const model = ref({ name: "Aloha", email: "aloha@example.com", notes: "" });
    const dataForm = [
      {
        type: "text",
        id: "name",
        label: "_A_FORM_EXAMPLE_NAME_",
      },
      {
        type: "email",
        id: "email",
        label: "_A_FORM_EXAMPLE_EMAIL_",
      },
      {
        type: "textarea",
        id: "notes",
        label: "_A_FORM_EXAMPLE_NOTES_",
        classColumn: "a_column a_column_12",
      },
    ];
    const isModalVisible = ref(false);

    const openModal = () => {
      isModalVisible.value = true;
    };

    const closeModal = () => {
      isModalVisible.value = false;
    };

    return {
      closeModal,
      dataForm,
      isModalVisible,
      model,
      openModal,
    };
  },
};`}}var E={name:`PageModalFormColumns`,components:{AButton:g,AlohaExample:p,AModalForm:v},setup(){let{codeHtml:e}=w(),{codeJs:t}=T(),n=c({name:`Aloha`,email:`aloha@example.com`,notes:``}),r=[{type:`text`,id:`name`,label:`_A_FORM_EXAMPLE_NAME_`},{type:`email`,id:`email`,label:`_A_FORM_EXAMPLE_EMAIL_`},{type:`textarea`,id:`notes`,label:`_A_FORM_EXAMPLE_NOTES_`,classColumn:`a_column a_column_12`}],i=c(!1);return{closeModal:()=>{i.value=!1},dataForm:r,isModalVisible:i,model:n,openModal:()=>{i.value=!0},codeHtml:e,codeJs:t}}};function D(e,t,n,o,c,p){let m=d(`a-button`),h=d(`a-modal-form`),g=d(`aloha-example`);return u(),a(g,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_MODAL_FORM_COLUMNS_HEADER_`,description:`_A_MODAL_FORM_COLUMNS_DESCRIPTION_`,props:[`class-columns`,`class-column-default`]},{default:l(()=>[i(m,{class:`a_btn a_btn_primary`,id:`btn_modal_form_columns`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,onClick:e.openModal},null,8,[`onClick`]),e.isModalVisible?(u(),a(h,{key:0,"selector-close-ids":`btn_modal_form_columns`,modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"data-form":e.dataForm,close:e.closeModal,"is-save-button-hide":!0,"header-text":`_A_MODAL_FORM_COLUMNS_HEADER_`,size:`large`,"class-columns":`a_columns a_columns_count_12 a_columns_gap_3`,"class-column-default":`a_column a_column_6 a_column_12_touch`},null,8,[`modelValue`,`data-form`,`close`])):s(``,!0),r(`pre`,null,f(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var O=_(E,[[`render`,D]]);function k(){return{codeHtml:`<a-button
  id="btn_modal_form_delete"
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
/>

<a-modal-form
  v-if="isModalVisible"
  selector-close-ids="btn_modal_form_delete"
  v-model="model"
  :data-form="dataForm"
  :close="closeModal"
  :save="save"
  header-text="_A_MODAL_FORM_DELETE_HEADER_"
  size="large"
  class-columns="a_columns a_columns_count_12 a_columns_gap_3"
  class-column-default="a_column a_column_6 a_column_12_mobile"
>
  <template v-slot:modalFooterPrepend>
    <a-button
      class="a_btn a_btn_outline_danger"
      text="_A_MODAL_FORM_EXAMPLE_BTN_DELETE_"
      @click="remove"
    />
  </template>
</a-modal-form>

<a-translation
  v-if="status"
  class="a_mt_3"
  tag="p"
  role="status"
  :text="status"
/>`}}function A(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AButton,
  AModalForm,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    AButton,
    AModalForm,
    ATranslation,
  },
  setup() {
    const model = ref({
      title: "Release 3.0",
      priority: "high",
      period: undefined,
      hours: 8,
      progress: 40,
      done: false,
    });
    const status = ref(undefined);
    const dataForm = [
      {
        type: "text",
        id: "title",
        label: "_A_FORM_EXAMPLE_TITLE_",
        required: true,
      },
      {
        type: "select",
        id: "priority",
        label: "_A_MODAL_FORM_EXAMPLE_PRIORITY_",
        data: [
          { label: "_A_MODAL_FORM_EXAMPLE_PRIORITY_LOW_", value: "low" },
          { label: "_A_MODAL_FORM_EXAMPLE_PRIORITY_MEDIUM_", value: "medium" },
          { label: "_A_MODAL_FORM_EXAMPLE_PRIORITY_HIGH_", value: "high" },
        ],
      },
      {
        type: "dateRange",
        id: "period",
        label: "_A_FORM_EXAMPLE_PERIOD_",
        classColumn: "a_column a_column_12",
      },
      {
        type: "integerNonNegative",
        id: "hours",
        label: "_A_MODAL_FORM_EXAMPLE_HOURS_",
      },
      {
        type: "slider",
        id: "progress",
        label: "_A_MODAL_FORM_EXAMPLE_PROGRESS_",
        step: 10,
      },
      {
        type: "oneCheckbox",
        id: "done",
        label: "_A_MODAL_FORM_EXAMPLE_DONE_",
        classColumn: "a_column a_column_12",
      },
    ];
    const isModalVisible = ref(false);

    const openModal = () => {
      isModalVisible.value = true;
    };

    const closeModal = () => {
      isModalVisible.value = false;
    };

    const save = () => {
      status.value = "_A_MODAL_FORM_EXAMPLE_STATUS_SAVED_";
      closeModal();
    };

    const remove = () => {
      status.value = "_A_MODAL_FORM_EXAMPLE_STATUS_DELETED_";
      closeModal();
    };

    return {
      closeModal,
      dataForm,
      isModalVisible,
      model,
      openModal,
      remove,
      save,
      status,
    };
  },
};`}}var j={name:`PageModalFormDelete`,components:{AButton:g,AlohaExample:p,AModalForm:v,ATranslation:h},setup(){let{codeHtml:e}=k(),{codeJs:t}=A(),n=c({title:`Release 3.0`,priority:`high`,period:void 0,hours:8,progress:40,done:!1}),r=c(void 0),i=[{type:`text`,id:`title`,label:`_A_FORM_EXAMPLE_TITLE_`,required:!0},{type:`select`,id:`priority`,label:`_A_MODAL_FORM_EXAMPLE_PRIORITY_`,data:[{label:`_A_MODAL_FORM_EXAMPLE_PRIORITY_LOW_`,value:`low`},{label:`_A_MODAL_FORM_EXAMPLE_PRIORITY_MEDIUM_`,value:`medium`},{label:`_A_MODAL_FORM_EXAMPLE_PRIORITY_HIGH_`,value:`high`}]},{type:`dateRange`,id:`period`,label:`_A_FORM_EXAMPLE_PERIOD_`,classColumn:`a_column a_column_12`},{type:`integerNonNegative`,id:`hours`,label:`_A_MODAL_FORM_EXAMPLE_HOURS_`},{type:`slider`,id:`progress`,label:`_A_MODAL_FORM_EXAMPLE_PROGRESS_`,step:10},{type:`oneCheckbox`,id:`done`,label:`_A_MODAL_FORM_EXAMPLE_DONE_`,classColumn:`a_column a_column_12`}],a=c(!1),o=()=>{a.value=!0},s=()=>{a.value=!1};return{closeModal:s,codeHtml:e,codeJs:t,dataForm:i,isModalVisible:a,model:n,openModal:o,remove:()=>{r.value=`_A_MODAL_FORM_EXAMPLE_STATUS_DELETED_`,s()},save:()=>{r.value=`_A_MODAL_FORM_EXAMPLE_STATUS_SAVED_`,s()},status:r}}};function M(e,t,n,r,o,c){let f=d(`a-button`),p=d(`a-modal-form`),m=d(`a-translation`),h=d(`aloha-example`);return u(),a(h,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_MODAL_FORM_DELETE_HEADER_`,description:`_A_MODAL_FORM_DELETE_DESCRIPTION_`,props:[`save`,`size`]},{default:l(()=>[i(f,{class:`a_btn a_btn_primary`,id:`btn_modal_form_delete`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,onClick:e.openModal},null,8,[`onClick`]),e.isModalVisible?(u(),a(p,{key:0,"selector-close-ids":`btn_modal_form_delete`,modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"data-form":e.dataForm,close:e.closeModal,save:e.save,"header-text":`_A_MODAL_FORM_DELETE_HEADER_`,size:`large`,"class-columns":`a_columns a_columns_count_12 a_columns_gap_3`,"class-column-default":`a_column a_column_6 a_column_12_mobile`},{modalFooterPrepend:l(()=>[i(f,{class:`a_btn a_btn_outline_danger`,text:`_A_MODAL_FORM_EXAMPLE_BTN_DELETE_`,onClick:e.remove},null,8,[`onClick`])]),_:1},8,[`modelValue`,`data-form`,`close`,`save`])):s(``,!0),e.status?(u(),a(m,{key:1,class:`a_mt_3`,tag:`p`,role:`status`,text:e.status},null,8,[`text`])):s(``,!0)]),_:1},8,[`code-html`,`code-js`])}var N=_(j,[[`render`,M]]);function P(){return{codeHtml:`<a-button
  id="btn_modal_form_elements"
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
/>

<a-modal-form
  v-if="isModalVisible"
  selector-close-ids="btn_modal_form_elements"
  v-model="model"
  :data-form="dataForm"
  :close="closeModal"
  :save="save"
  header-text="_A_MODAL_FORM_ELEMENTS_HEADER_"
  size="xl"
  class-columns="a_columns a_columns_count_12 a_columns_gap_3"
  class-column-default="a_column a_column_4 a_column_6_tablet a_column_12_mobile"
/>
<pre v-if="modelSaved">{{ modelSaved }}</pre>`}}function F(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AButton,
  AModalForm,
} from "aloha-vue";

export default {
  components: {
    AButton,
    AModalForm,
  },
  setup() {
    const model = ref({
      name: "Aloha",
      email: "aloha@example.com",
      birthday: undefined,
      country: "de",
      budget: 1500,
      contact: "email",
      interests: ["music"],
      notifications: true,
      notes: "",
    });
    const modelSaved = ref(undefined);
    const dataForm = [
      {
        type: "text",
        id: "name",
        label: "_A_FORM_EXAMPLE_NAME_",
        required: true,
      },
      {
        type: "email",
        id: "email",
        label: "_A_FORM_EXAMPLE_EMAIL_",
      },
      {
        type: "date",
        id: "birthday",
        label: "_A_MODAL_FORM_EXAMPLE_BIRTHDAY_",
      },
      {
        type: "select",
        id: "country",
        label: "_A_FORM_EXAMPLE_COUNTRY_",
        data: [
          { label: "Deutschland", value: "de" },
          { label: "France", value: "fr" },
          { label: "Italia", value: "it" },
        ],
      },
      {
        type: "currency",
        id: "budget",
        label: "_A_MODAL_FORM_EXAMPLE_BUDGET_",
      },
      {
        type: "radio",
        id: "contact",
        label: "_A_MODAL_FORM_EXAMPLE_CONTACT_",
        data: [
          { label: "_A_MODAL_FORM_EXAMPLE_CONTACT_EMAIL_", value: "email" },
          { label: "_A_MODAL_FORM_EXAMPLE_CONTACT_PHONE_", value: "phone" },
        ],
      },
      {
        type: "checkbox",
        id: "interests",
        label: "_A_MODAL_FORM_EXAMPLE_INTERESTS_",
        data: [
          { label: "_A_MODAL_FORM_EXAMPLE_INTEREST_MUSIC_", value: "music" },
          { label: "_A_MODAL_FORM_EXAMPLE_INTEREST_SPORT_", value: "sport" },
          { label: "_A_MODAL_FORM_EXAMPLE_INTEREST_TRAVEL_", value: "travel" },
        ],
      },
      {
        type: "switch",
        id: "notifications",
        label: "_A_FORM_EXAMPLE_NOTIFICATIONS_",
      },
      {
        type: "textarea",
        id: "notes",
        label: "_A_FORM_EXAMPLE_NOTES_",
        classColumn: "a_column a_column_12",
      },
    ];
    const isModalVisible = ref(false);

    const openModal = () => {
      isModalVisible.value = true;
    };

    const closeModal = () => {
      isModalVisible.value = false;
    };

    const save = () => {
      modelSaved.value = { ...model.value };
      closeModal();
    };

    return {
      closeModal,
      dataForm,
      isModalVisible,
      model,
      modelSaved,
      openModal,
      save,
    };
  },
};`}}var I={name:`PageModalFormElements`,components:{AButton:g,AlohaExample:p,AModalForm:v},setup(){let{codeHtml:e}=P(),{codeJs:t}=F(),n=c({name:`Aloha`,email:`aloha@example.com`,birthday:void 0,country:`de`,budget:1500,contact:`email`,interests:[`music`],notifications:!0,notes:``}),r=c(void 0),i=[{type:`text`,id:`name`,label:`_A_FORM_EXAMPLE_NAME_`,required:!0},{type:`email`,id:`email`,label:`_A_FORM_EXAMPLE_EMAIL_`},{type:`date`,id:`birthday`,label:`_A_MODAL_FORM_EXAMPLE_BIRTHDAY_`},{type:`select`,id:`country`,label:`_A_FORM_EXAMPLE_COUNTRY_`,data:[{label:`Deutschland`,value:`de`},{label:`France`,value:`fr`},{label:`Italia`,value:`it`}]},{type:`currency`,id:`budget`,label:`_A_MODAL_FORM_EXAMPLE_BUDGET_`},{type:`radio`,id:`contact`,label:`_A_MODAL_FORM_EXAMPLE_CONTACT_`,data:[{label:`_A_MODAL_FORM_EXAMPLE_CONTACT_EMAIL_`,value:`email`},{label:`_A_MODAL_FORM_EXAMPLE_CONTACT_PHONE_`,value:`phone`}]},{type:`checkbox`,id:`interests`,label:`_A_MODAL_FORM_EXAMPLE_INTERESTS_`,data:[{label:`_A_MODAL_FORM_EXAMPLE_INTEREST_MUSIC_`,value:`music`},{label:`_A_MODAL_FORM_EXAMPLE_INTEREST_SPORT_`,value:`sport`},{label:`_A_MODAL_FORM_EXAMPLE_INTEREST_TRAVEL_`,value:`travel`}]},{type:`switch`,id:`notifications`,label:`_A_FORM_EXAMPLE_NOTIFICATIONS_`},{type:`textarea`,id:`notes`,label:`_A_FORM_EXAMPLE_NOTES_`,classColumn:`a_column a_column_12`}],a=c(!1),o=()=>{a.value=!0},s=()=>{a.value=!1};return{closeModal:s,codeHtml:e,codeJs:t,dataForm:i,isModalVisible:a,model:n,modelSaved:r,openModal:o,save:()=>{r.value={...n.value},s()}}}},ee={key:1};function L(e,t,r,o,c,p){let m=d(`a-button`),h=d(`a-modal-form`),g=d(`aloha-example`);return u(),a(g,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_MODAL_FORM_ELEMENTS_HEADER_`,description:`_A_MODAL_FORM_ELEMENTS_DESCRIPTION_`,props:[`data-form`,`save`,`size`]},{default:l(()=>[i(m,{class:`a_btn a_btn_primary`,id:`btn_modal_form_elements`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,onClick:e.openModal},null,8,[`onClick`]),e.isModalVisible?(u(),a(h,{key:0,"selector-close-ids":`btn_modal_form_elements`,modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"data-form":e.dataForm,close:e.closeModal,save:e.save,"header-text":`_A_MODAL_FORM_ELEMENTS_HEADER_`,size:`xl`,"class-columns":`a_columns a_columns_count_12 a_columns_gap_3`,"class-column-default":`a_column a_column_4 a_column_6_tablet a_column_12_mobile`},null,8,[`modelValue`,`data-form`,`close`,`save`])):s(``,!0),e.modelSaved?(u(),n(`pre`,ee,f(e.modelSaved),1)):s(``,!0)]),_:1},8,[`code-html`,`code-js`])}var R=_(I,[[`render`,L]]);function z(){return{codeHtml:`<a-button
  id="btn_modal_form_enter"
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
/>

<a-modal-form
  v-if="isModalVisible"
  v-model="model"
  :data-form="dataForm"
  :close="closeModal"
  :save="save"
  header-text="_A_MODAL_FORM_ENTER_HEADER_"
/>
<p
  v-if="saved"
  class="a_mt_3"
>{{ saved }}</p>`}}function B(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AButton,
  AModalForm,
} from "aloha-vue";

export default {
  components: {
    AButton,
    AModalForm,
  },
  setup() {
    const dataForm = [
      {
        type: "text",
        id: "title",
        label: "_A_MODAL_FORM_ENTER_FIELD_",
      },
    ];
    const isModalVisible = ref(false);
    const model = ref({});
    const saved = ref("");

    const openModal = () => {
      isModalVisible.value = true;
    };

    const closeModal = () => {
      isModalVisible.value = false;
    };

    // the save button and Enter in the field
    const save = () => {
      saved.value = model.value.title || "";
      closeModal();
    };

    return {
      closeModal,
      dataForm,
      isModalVisible,
      model,
      openModal,
      save,
      saved,
    };
  },
};`}}var V={name:`PageModalFormEnter`,components:{AlohaExample:p,AButton:g,AModalForm:v},setup(){let{codeHtml:e}=z(),{codeJs:t}=B(),n=[{type:`text`,id:`title`,label:`_A_MODAL_FORM_ENTER_FIELD_`}],r=c(!1),i=c({}),a=c(``),o=()=>{r.value=!0},s=()=>{r.value=!1};return{codeHtml:e,codeJs:t,closeModal:s,dataForm:n,isModalVisible:r,model:i,openModal:o,save:()=>{a.value=i.value.title||``,s()},saved:a}}},H={key:1,class:`a_mt_3`};function U(e,t,r,o,c,p){let m=d(`a-button`),h=d(`a-modal-form`),g=d(`aloha-example`);return u(),a(g,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_MODAL_FORM_ENTER_HEADER_`,description:`_A_MODAL_FORM_ENTER_DESCRIPTION_`,props:[`save`]},{default:l(()=>[i(m,{class:`a_btn a_btn_primary`,id:`btn_modal_form_enter`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,onClick:e.openModal},null,8,[`onClick`]),e.isModalVisible?(u(),a(h,{key:0,modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"data-form":e.dataForm,close:e.closeModal,save:e.save,"header-text":`_A_MODAL_FORM_ENTER_HEADER_`},null,8,[`modelValue`,`data-form`,`close`,`save`])):s(``,!0),e.saved?(u(),n(`p`,H,f(e.saved),1)):s(``,!0)]),_:1},8,[`code-html`,`code-js`])}var W=_(V,[[`render`,U]]);function G(){let e=o(()=>m({placeholder:`_A_MODAL_FORM_COMPONENT_NAME_`}));return{pageTitle:o(()=>`AModalForm${e.value?` (${e.value})`:``}`)}}var K=[`close-button-attributes`,`save-button-attributes`,`show-close-button-header`],q=[`class-column-default`,`class-columns`,`errors`,`id-prefix`,`is-required`,`model-value`,`text-error-header`,`text-required`,`use-flat-errors`,`use-flat-model`,`use-html-id-as-key`],J={data:`data-form`,"is-hide":`is-data-form-hide`,"is-render":`is-data-form-render`};function Y(){let{dataProps:e}=S(),{dataProps:t}=y();return{dataProps:[...e.filter(e=>!K.includes(e.name)),...t.filter(e=>q.includes(e.name)),...t.filter(e=>J[e.name]).map(e=>({...e,name:J[e.name]}))].sort((e,t)=>e.name.localeCompare(t.name))}}function X(){let{dataSlots:e}=C(),{dataSlots:t}=x();return{dataSlots:[...e.filter(e=>e.name!==`modalBody`),{name:`modalBodyPrepend`,description:`_A_MODAL_FORM_SLOTS_MODAL_BODY_PREPEND_DESCRIPTION_`},{name:`modalBodyAppend`,description:`_A_MODAL_FORM_SLOTS_MODAL_BODY_APPEND_DESCRIPTION_`},...t]}}var Z={name:`PageModalForm`,components:{PageModalFormEnter:W,AlohaPage:e,AlohaTableProps:t,ATranslation:h,PageModalFormColumns:O,PageModalFormDelete:N,PageModalFormElements:R},setup(){let{pageTitle:e}=G(),{dataProps:t}=Y(),{dataEvents:n}=b(),{dataSlots:r}=X();return{dataEvents:n,dataProps:t,dataSlots:r,pageTitle:e}}};function Q(e,t,n,r,o,s){let c=d(`a-translation`),f=d(`page-modal-form-columns`),p=d(`page-modal-form-elements`),m=d(`page-modal-form-delete`),h=d(`page-modal-form-enter`),g=d(`aloha-table-props`),_=d(`aloha-page`);return u(),a(_,{"page-title":e.pageTitle},{body:l(()=>[i(c,{tag:`p`,html:`_A_MODAL_FORM_COMPONENT_DESCRIPTION_`}),i(f),i(p),i(m),i(h),i(g,{data:e.dataProps},null,8,[`data`]),i(g,{"table-label":`Emits`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`]),i(g,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`])]),_:1},8,[`page-title`])}var $=_(Z,[[`render`,Q]]);export{$ as default};