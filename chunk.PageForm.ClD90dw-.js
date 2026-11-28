import{t as e}from"./chunk.AlohaFormTypes.CH2ot-6p.js";import{t}from"./chunk.AlohaPage.BSfHVC43.js";import{t as n}from"./chunk.AlohaTableProps.BlCiBCEj.js";import{Gt as r,Ht as i,Jt as a,Ut as o,Vt as s,Wt as c,_n as l,mn as u,on as d,un as f,wn as p}from"./chunk.vendor.DL09mhUf.js";import{t as m}from"./chunk.AlohaExample.VTWuqY0j.js";import{D as h,hn as g,mn as _,sn as v,t as y}from"./bundle.index.D-5bYXwk.js";import{n as b,r as x,t as S}from"./chunk.SlotsAPI.CvmKxOcW.js";function C(){return{codeHtml:`<a-form
  v-model="model"
  :data="data"
  :show-errors="false"
  :show-required-text="false"
></a-form>
<pre>{{ model }}</pre>`}}function w(){return{codeJs:`import { ref } from "vue";
import { AForm } from "aloha-vue";

export default {
  components: { AForm },
  setup() {
    const data = [
      {
        type: "text",
        id: "name",
        label: "Name",
        required: true,
        classColumn: "a_column a_column_6 a_column_12_touch",
      },
      {
        type: "email",
        id: "email",
        label: "Email",
        classColumn: "a_column a_column_6 a_column_12_touch",
      },
      {
        type: "select",
        id: "country",
        label: "Country",
        data: [
          { label: "Deutschland", value: "de" },
          { label: "France", value: "fr" },
          { label: "Italia", value: "it" },
        ],
        classColumn: "a_column a_column_6 a_column_12_touch",
      },
      {
        type: "switch",
        id: "notifications",
        label: "Notifications",
        classColumn: "a_column a_column_6 a_column_12_touch",
      },
    ];
    const model = ref({
      name: "Aloha",
      email: "aloha@example.com",
      country: "de",
      notifications: true,
    });

    return { data, model };
  },
};`}}var T={name:`PageFormBasic`,components:{AForm:h,AlohaExample:m},setup(){let e=[{type:`text`,id:`name`,label:`_A_FORM_EXAMPLE_NAME_`,required:!0,classColumn:`a_column a_column_6 a_column_12_touch`},{type:`email`,id:`email`,label:`_A_FORM_EXAMPLE_EMAIL_`,classColumn:`a_column a_column_6 a_column_12_touch`},{type:`select`,id:`country`,label:`_A_FORM_EXAMPLE_COUNTRY_`,data:[{label:`Deutschland`,value:`de`},{label:`France`,value:`fr`},{label:`Italia`,value:`it`}],classColumn:`a_column a_column_6 a_column_12_touch`},{type:`switch`,id:`notifications`,label:`_A_FORM_EXAMPLE_NOTIFICATIONS_`,classColumn:`a_column a_column_6 a_column_12_touch`}],t=l({name:`Aloha`,email:`aloha@example.com`,country:`de`,notifications:!0}),{codeHtml:n}=C(),{codeJs:r}=w();return{codeHtml:n,codeJs:r,data:e,model:t}}};function E(e,t,n,r,s,c){let l=f(`a-form`),m=f(`aloha-example`);return d(),o(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_FORM_BASIC_HEADER_`,description:`_A_FORM_BASIC_DESCRIPTION_`,props:[`data`,`model-value`,`class-columns`,`class-column-default`],emits:`update:model-value`},{default:u(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"show-errors":!1,"show-required-text":!1},null,8,[`modelValue`,`data`]),i(`pre`,null,p(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var D=y(T,[[`render`,E]]);function O(){return{codeHtml:`<a-form
  v-model="model"
  :data="data"
  :show-errors="false"
  :show-required-text="false"
></a-form>
<pre>{{ model }}</pre>`}}function k(){return{codeJs:`import { ref } from "vue";
import { AForm } from "aloha-vue";

export default {
  components: { AForm },
  setup() {
    const data = [
      {
        type: "switch",
        id: "hasDetails",
        label: "Show details",
      },
      {
        type: "radio",
        id: "detailsType",
        label: "Detail type",
        data: [
          { label: "Basic", value: "basic" },
          { label: "Advanced", value: "advanced" },
        ],
      },
      {
        type: "text",
        id: "details",
        label: "Details",
        dependencies: { id: "hasDetails", value: true },
      },
      {
        type: "dateRange",
        id: "period",
        label: "Period",
        dependencies: [
          { id: "hasDetails", value: true },
          { id: "detailsType", value: "advanced" },
        ],
      },
    ];
    const model = ref({
      hasDetails: false,
      detailsType: "basic",
    });

    return { data, model };
  },
};`}}var A={name:`PageFormDependencies`,components:{AForm:h,AlohaExample:m},setup(){let e=[{type:`switch`,id:`hasDetails`,label:`_A_FORM_EXAMPLE_SHOW_DETAILS_`},{type:`radio`,id:`detailsType`,label:`_A_FORM_EXAMPLE_DETAILS_TYPE_`,translateData:!0,data:[{label:`_A_FORM_EXAMPLE_BASIC_`,value:`basic`},{label:`_A_FORM_EXAMPLE_ADVANCED_`,value:`advanced`}]},{type:`text`,id:`details`,label:`_A_FORM_EXAMPLE_DETAILS_`,dependencies:{id:`hasDetails`,value:!0}},{type:`dateRange`,id:`period`,label:`_A_FORM_EXAMPLE_PERIOD_`,dependencies:[{id:`hasDetails`,value:!0},{id:`detailsType`,value:`advanced`}]}],t=l({hasDetails:!1,detailsType:`basic`}),{codeHtml:n}=O(),{codeJs:r}=k();return{codeHtml:n,codeJs:r,data:e,model:t}}};function j(e,t,n,r,s,c){let l=f(`a-form`),m=f(`aloha-example`);return d(),o(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_FORM_DEPENDENCIES_HEADER_`,description:`_A_FORM_DEPENDENCIES_DESCRIPTION_`,props:[`data`,`model-value`,`dependencies`]},{default:u(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"show-errors":!1,"show-required-text":!1},null,8,[`modelValue`,`data`]),i(`pre`,null,p(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var M=y(A,[[`render`,j]]);function N(){return{codeHtml:`<a-form
  v-model="model"
  :data="data"
  :show-errors="false"
  @update:model-value="onUpdateModelValue"
  @change="onChange"
>
  <template #formPrepend><strong>Before form content</strong></template>
  <template #formPrependAfterRequired><div>After required notice</div></template>
  <template #formDataPrepend><div>Before fields</div></template>
  <template #formDataAppend><div>After fields</div></template>
  <template #formAppend><strong>After form content</strong></template>
</a-form>
<pre>{{ lastEvent }}</pre>`}}function P(){return{codeJs:`import { ref } from "vue";
import { AForm } from "aloha-vue";

export default {
  components: { AForm },
  setup() {
    const data = [
      { type: "text", id: "title", label: "Title", required: true },
    ];
    const model = ref({ title: "" });
    const lastEvent = ref();

    const onUpdateModelValue = modelUpdated => {
      lastEvent.value = { event: "update:modelValue", model: modelUpdated };
    };
    const onChange = ({ id, model: modelField, fullModel }) => {
      lastEvent.value = {
        event: "change",
        id,
        model: modelField,
        fullModel,
      };
    };

    return {
      data,
      lastEvent,
      model,
      onChange,
      onUpdateModelValue,
    };
  },
};`}}var F={name:`PageFormEventsSlots`,components:{AForm:h,AlohaExample:m,ATranslation:_},setup(){let e=[{type:`text`,id:`title`,label:`_A_FORM_EXAMPLE_TITLE_`,required:!0}],t=l(void 0),n=l({title:``}),r=({id:e,model:n,fullModel:r})=>{t.value={event:`change`,id:e,model:n,fullModel:r}},i=e=>{t.value={event:`update:modelValue`,model:e}},{codeHtml:a}=N(),{codeJs:o}=P();return{codeHtml:a,codeJs:o,data:e,lastEvent:t,model:n,onChange:r,onUpdateModelValue:i}}};function I(e,t,n,r,s,c){let l=f(`a-translation`),m=f(`a-form`),h=f(`aloha-example`);return d(),o(h,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_FORM_EVENTS_SLOTS_HEADER_`,description:`_A_FORM_EVENTS_SLOTS_DESCRIPTION_`,emits:[`update:model-value`,`change`],slots:[`formPrepend`,`formPrependAfterRequired`,`formDataPrepend`,`formDataAppend`,`formAppend`]},{default:u(()=>[a(m,{modelValue:e.model,"onUpdate:modelValue":[t[0]||=t=>e.model=t,e.onUpdateModelValue],data:e.data,"show-errors":!1,onChange:e.onChange},{formPrepend:u(()=>[a(l,{class:`a_mb_2`,tag:`strong`,text:`_A_FORM_EXAMPLE_SLOT_FORM_PREPEND_`})]),formPrependAfterRequired:u(()=>[a(l,{class:`a_mb_2`,tag:`div`,text:`_A_FORM_EXAMPLE_SLOT_AFTER_REQUIRED_`})]),formDataPrepend:u(()=>[a(l,{class:`a_column a_column_12`,tag:`div`,text:`_A_FORM_EXAMPLE_SLOT_DATA_PREPEND_`})]),formDataAppend:u(()=>[a(l,{class:`a_column a_column_12`,tag:`div`,text:`_A_FORM_EXAMPLE_SLOT_DATA_APPEND_`})]),formAppend:u(()=>[a(l,{class:`a_mt_2`,tag:`strong`,text:`_A_FORM_EXAMPLE_SLOT_FORM_APPEND_`})]),_:1},8,[`modelValue`,`data`,`onUpdate:modelValue`,`onChange`]),i(`pre`,null,p(e.lastEvent),1)]),_:1},8,[`code-html`,`code-js`])}var L=y(F,[[`render`,I]]);function R(){return{codeHtml:`<a-form
  v-model="model"
  :data="data"
  @submit="onSubmit"
/>
<p
  v-if="countSubmit"
  class="a_mt_3"
>submit: {{ countSubmit }}</p>`}}function z(){return{codeJs:`import {
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
    const data = [
      {
        type: "text",
        id: "search",
        label: "_A_FORM_EXAMPLE_SEARCH_",
      },
    ];
    const model = ref({});
    const countSubmit = ref(0);

    // Enter in the field: the page is not reloaded
    const onSubmit = () => {
      countSubmit.value++;
    };

    return {
      countSubmit,
      data,
      model,
      onSubmit,
    };
  },
};`}}var B={name:`PageFormSubmit`,components:{AlohaExample:m,AForm:h},setup(){let{codeHtml:e}=R(),{codeJs:t}=z(),n=[{type:`text`,id:`search`,label:`_A_FORM_EXAMPLE_SEARCH_`}],r=l({}),i=l(0);return{codeHtml:e,codeJs:t,countSubmit:i,data:n,model:r,onSubmit:()=>{i.value++}}}},V={key:0,class:`a_mt_3`};function H(e,t,n,i,s,l){let m=f(`a-form`),h=f(`aloha-example`);return d(),o(h,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_FORM_SUBMIT_HEADER_`,description:`_A_FORM_SUBMIT_DESCRIPTION_`,props:[`tag`]},{default:u(()=>[a(m,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,onSubmit:e.onSubmit},null,8,[`modelValue`,`data`,`onSubmit`]),e.countSubmit?(d(),r(`p`,V,`submit: `+p(e.countSubmit),1)):c(``,!0)]),_:1},8,[`code-html`,`code-js`])}var U=y(B,[[`render`,H]]);function W(){return{codeHtml:`<a-button text="Validate" @click="validate"></a-button>
<a-button text="Clear errors" @click="clearErrors"></a-button>
<a-button :text="readonly ? 'Edit' : 'Read only'" @click="toggleReadonly"></a-button>

<a-form
  v-model="model"
  :data="data"
  :errors="errors"
  :readonly="readonly"
  text-error-header="Please correct the following fields"
  text-required="Required fields are marked"
></a-form>`}}function G(){return{codeJs:`import { ref } from "vue";
import { AButton, AForm } from "aloha-vue";

export default {
  components: { AButton, AForm },
  setup() {
    const data = [
      { type: "text", id: "name", label: "Name", required: true },
      { type: "email", id: "email", label: "Email", required: true },
      { type: "textarea", id: "notes", label: "Notes" },
    ];
    const model = ref({ name: "", email: "", notes: "" });
    const errors = ref({});
    const readonly = ref(false);

    const validate = () => {
      const errorsLocal = {};
      if (!model.value.name) errorsLocal.name = "This field is required.";
      if (!model.value.email) errorsLocal.email = "This field is required.";
      errors.value = errorsLocal;
    };
    const clearErrors = () => {
      errors.value = {};
    };
    const toggleReadonly = () => {
      readonly.value = !readonly.value;
    };

    return {
      clearErrors,
      data,
      errors,
      model,
      readonly,
      toggleReadonly,
      validate,
    };
  },
};`}}var K={name:`PageFormValidationReadonly`,components:{AButton:v,AForm:h,AlohaExample:m},setup(){let e=[{type:`text`,id:`name`,label:`_A_FORM_EXAMPLE_NAME_`,required:!0},{type:`email`,id:`email`,label:`_A_FORM_EXAMPLE_EMAIL_`,required:!0},{type:`textarea`,id:`notes`,label:`_A_FORM_EXAMPLE_NOTES_`}],t=l({}),n=l({name:``,email:``,notes:``}),r=l(!1),i=()=>{t.value={}},a=()=>{r.value=!r.value},o=()=>{let e={};n.value.name||(e.name=`_A_FORM_EXAMPLE_REQUIRED_ERROR_`),n.value.email||(e.email=`_A_FORM_EXAMPLE_REQUIRED_ERROR_`),t.value=e},{codeHtml:s}=W(),{codeJs:c}=G();return{clearErrors:i,codeHtml:s,codeJs:c,data:e,errors:t,model:n,readonly:r,toggleReadonly:a,validate:o}}},q={class:`a_btn_group a_mb_3`};function J(e,t,n,r,s,c){let l=f(`a-button`),p=f(`a-form`),m=f(`aloha-example`);return d(),o(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_FORM_VALIDATION_READONLY_HEADER_`,description:`_A_FORM_VALIDATION_READONLY_DESCRIPTION_`,props:[`errors`,`readonly`,`show-errors`,`show-required-text`,`text-error-header`,`text-required`]},{default:u(()=>[i(`div`,q,[a(l,{text:`_A_FORM_EXAMPLE_VALIDATE_`,onClick:e.validate},null,8,[`onClick`]),a(l,{text:`_A_FORM_EXAMPLE_CLEAR_ERRORS_`,onClick:e.clearErrors},null,8,[`onClick`]),a(l,{text:e.readonly?`_A_FORM_EXAMPLE_EDIT_`:`_A_FORM_EXAMPLE_READONLY_`,onClick:e.toggleReadonly},null,8,[`text`,`onClick`])]),a(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,errors:e.errors,readonly:e.readonly,"text-error-header":`_A_FORM_EXAMPLE_ERROR_HEADER_`,"text-required":`_A_FORM_EXAMPLE_REQUIRED_TEXT_`},null,8,[`modelValue`,`data`,`errors`,`readonly`])]),_:1},8,[`code-html`,`code-js`])}var Y=y(K,[[`render`,J]]);function X(){let e=s(()=>g({placeholder:`_A_FORM_COMPONENT_NAME_`}));return{pageTitle:s(()=>`AForm${e.value?` (${e.value})`:``}`)}}var Z={name:`PageForm`,components:{PageFormSubmit:U,AlohaFormTypes:e,AlohaPage:t,AlohaTableProps:n,ATranslation:_,PageFormBasic:D,PageFormDependencies:M,PageFormEventsSlots:L,PageFormValidationReadonly:Y},setup(){let{dataEvents:e}=x(),{pageTitle:t}=X(),{dataProps:n}=b(),{dataSlots:r}=S();return{dataEvents:e,dataProps:n,dataSlots:r,pageTitle:t}}};function Q(e,t,n,r,i,s){let c=f(`a-translation`),l=f(`aloha-form-types`),p=f(`page-form-basic`),m=f(`page-form-dependencies`),h=f(`page-form-validation-readonly`),g=f(`page-form-submit`),_=f(`page-form-events-slots`),v=f(`aloha-table-props`),y=f(`aloha-page`);return d(),o(y,{"page-title":e.pageTitle},{body:u(()=>[a(c,{tag:`p`,html:`_A_FORM_COMPONENT_DESCRIPTION_`}),a(c,{tag:`p`,html:`_A_FORM_A11Y_DESCRIPTION_`}),a(l),a(p),a(m),a(h),a(g),a(_),a(v,{data:e.dataProps},null,8,[`data`]),a(v,{"table-label":`Emits`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`]),a(v,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`])]),_:1},8,[`page-title`])}var $=y(Z,[[`render`,Q]]);export{$ as default};