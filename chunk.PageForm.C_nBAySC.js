import{t as e}from"./chunk.AlohaFormTypes.Dpl_iNgL.js";import{t}from"./chunk.AlohaPage.D7DhFNcw.js";import{t as n}from"./chunk.AlohaTableProps.DV2Sn4dJ.js";import{Bt as r,Ft as i,It as a,Pt as o,Zt as s,an as c,pn as l,sn as u,tn as d}from"./chunk.vendor.H0cZuFAV.js";import{t as f}from"./chunk.AlohaExample.B4lEPEM8.js";import{D as p,Wt as m,it as h,zt as g}from"./bundle.index.C3m7sagw.js";import{t as _}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function v(){return{codeHtml:`<a-form
  v-model="model"
  :data="data"
  :show-errors="false"
  :show-required-text="false"
></a-form>
<pre>{{ model }}</pre>`}}function y(){return{codeJs:`import { ref } from "vue";
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
};`}}var b={name:`PageFormBasic`,components:{AForm:p,AlohaExample:f},setup(){let e=[{type:`text`,id:`name`,label:`_A_FORM_EXAMPLE_NAME_`,required:!0,classColumn:`a_column a_column_6 a_column_12_touch`},{type:`email`,id:`email`,label:`_A_FORM_EXAMPLE_EMAIL_`,classColumn:`a_column a_column_6 a_column_12_touch`},{type:`select`,id:`country`,label:`_A_FORM_EXAMPLE_COUNTRY_`,data:[{label:`Deutschland`,value:`de`},{label:`France`,value:`fr`},{label:`Italia`,value:`it`}],classColumn:`a_column a_column_6 a_column_12_touch`},{type:`switch`,id:`notifications`,label:`_A_FORM_EXAMPLE_NOTIFICATIONS_`,classColumn:`a_column a_column_6 a_column_12_touch`}],t=u({name:`Aloha`,email:`aloha@example.com`,country:`de`,notifications:!0}),{codeHtml:n}=v(),{codeJs:r}=y();return{codeHtml:n,codeJs:r,data:e,model:t}}};function x(e,t,n,o,u,f){let p=d(`a-form`),m=d(`aloha-example`);return s(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_FORM_BASIC_HEADER_`,description:`_A_FORM_BASIC_DESCRIPTION_`,props:[`data`,`model-value`,`class-columns`,`class-column-default`],emits:`update:model-value`},{default:c(()=>[r(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"show-errors":!1,"show-required-text":!1},null,8,[`modelValue`,`data`]),i(`pre`,null,l(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var S=_(b,[[`render`,x]]);function C(){return{codeHtml:`<a-form
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
};`}}var T={name:`PageFormDependencies`,components:{AForm:p,AlohaExample:f},setup(){let e=[{type:`switch`,id:`hasDetails`,label:`_A_FORM_EXAMPLE_SHOW_DETAILS_`},{type:`radio`,id:`detailsType`,label:`_A_FORM_EXAMPLE_DETAILS_TYPE_`,translateData:!0,data:[{label:`_A_FORM_EXAMPLE_BASIC_`,value:`basic`},{label:`_A_FORM_EXAMPLE_ADVANCED_`,value:`advanced`}]},{type:`text`,id:`details`,label:`_A_FORM_EXAMPLE_DETAILS_`,dependencies:{id:`hasDetails`,value:!0}},{type:`dateRange`,id:`period`,label:`_A_FORM_EXAMPLE_PERIOD_`,dependencies:[{id:`hasDetails`,value:!0},{id:`detailsType`,value:`advanced`}]}],t=u({hasDetails:!1,detailsType:`basic`}),{codeHtml:n}=C(),{codeJs:r}=w();return{codeHtml:n,codeJs:r,data:e,model:t}}};function E(e,t,n,o,u,f){let p=d(`a-form`),m=d(`aloha-example`);return s(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_FORM_DEPENDENCIES_HEADER_`,description:`_A_FORM_DEPENDENCIES_DESCRIPTION_`,props:[`data`,`model-value`,`dependencies`]},{default:c(()=>[r(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"show-errors":!1,"show-required-text":!1},null,8,[`modelValue`,`data`]),i(`pre`,null,l(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var D=_(T,[[`render`,E]]);function O(){return{codeHtml:`<a-form
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
<pre>{{ lastEvent }}</pre>`}}function k(){return{codeJs:`import { ref } from "vue";
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
};`}}var A={name:`PageFormEventsSlots`,components:{AForm:p,AlohaExample:f,ATranslation:h},setup(){let e=[{type:`text`,id:`title`,label:`_A_FORM_EXAMPLE_TITLE_`,required:!0}],t=u(void 0),n=u({title:``}),r=({id:e,model:n,fullModel:r})=>{t.value={event:`change`,id:e,model:n,fullModel:r}},i=e=>{t.value={event:`update:modelValue`,model:e}},{codeHtml:a}=O(),{codeJs:o}=k();return{codeHtml:a,codeJs:o,data:e,lastEvent:t,model:n,onChange:r,onUpdateModelValue:i}}};function j(e,t,n,o,u,f){let p=d(`a-translation`),m=d(`a-form`),h=d(`aloha-example`);return s(),a(h,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_FORM_EVENTS_SLOTS_HEADER_`,description:`_A_FORM_EVENTS_SLOTS_DESCRIPTION_`,emits:[`update:model-value`,`change`],slots:[`formPrepend`,`formPrependAfterRequired`,`formDataPrepend`,`formDataAppend`,`formAppend`]},{default:c(()=>[r(m,{modelValue:e.model,"onUpdate:modelValue":[t[0]||=t=>e.model=t,e.onUpdateModelValue],data:e.data,"show-errors":!1,onChange:e.onChange},{formPrepend:c(()=>[r(p,{class:`a_mb_2`,tag:`strong`,text:`_A_FORM_EXAMPLE_SLOT_FORM_PREPEND_`})]),formPrependAfterRequired:c(()=>[r(p,{class:`a_mb_2`,tag:`div`,text:`_A_FORM_EXAMPLE_SLOT_AFTER_REQUIRED_`})]),formDataPrepend:c(()=>[r(p,{class:`a_column a_column_12`,tag:`div`,text:`_A_FORM_EXAMPLE_SLOT_DATA_PREPEND_`})]),formDataAppend:c(()=>[r(p,{class:`a_column a_column_12`,tag:`div`,text:`_A_FORM_EXAMPLE_SLOT_DATA_APPEND_`})]),formAppend:c(()=>[r(p,{class:`a_mt_2`,tag:`strong`,text:`_A_FORM_EXAMPLE_SLOT_FORM_APPEND_`})]),_:1},8,[`modelValue`,`data`,`onUpdate:modelValue`,`onChange`]),i(`pre`,null,l(e.lastEvent),1)]),_:1},8,[`code-html`,`code-js`])}var M=_(A,[[`render`,j]]);function N(){return{codeHtml:`<a-button text="Validate" @click="validate"></a-button>
<a-button text="Clear errors" @click="clearErrors"></a-button>
<a-button :text="readonly ? 'Edit' : 'Read only'" @click="toggleReadonly"></a-button>

<a-form
  v-model="model"
  :data="data"
  :errors="errors"
  :readonly="readonly"
  text-error-header="Please correct the following fields"
  text-required="Required fields are marked"
></a-form>`}}function P(){return{codeJs:`import { ref } from "vue";
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
};`}}var F={name:`PageFormValidationReadonly`,components:{AButton:g,AForm:p,AlohaExample:f},setup(){let e=[{type:`text`,id:`name`,label:`_A_FORM_EXAMPLE_NAME_`,required:!0},{type:`email`,id:`email`,label:`_A_FORM_EXAMPLE_EMAIL_`,required:!0},{type:`textarea`,id:`notes`,label:`_A_FORM_EXAMPLE_NOTES_`}],t=u({}),n=u({name:``,email:``,notes:``}),r=u(!1),i=()=>{t.value={}},a=()=>{r.value=!r.value},o=()=>{let e={};n.value.name||(e.name=`_A_FORM_EXAMPLE_REQUIRED_ERROR_`),n.value.email||(e.email=`_A_FORM_EXAMPLE_REQUIRED_ERROR_`),t.value=e},{codeHtml:s}=N(),{codeJs:c}=P();return{clearErrors:i,codeHtml:s,codeJs:c,data:e,errors:t,model:n,readonly:r,toggleReadonly:a,validate:o}}},I={class:`a_btn_group a_mb_3`};function L(e,t,n,o,l,u){let f=d(`a-button`),p=d(`a-form`),m=d(`aloha-example`);return s(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_FORM_VALIDATION_READONLY_HEADER_`,description:`_A_FORM_VALIDATION_READONLY_DESCRIPTION_`,props:[`errors`,`readonly`,`show-errors`,`show-required-text`,`text-error-header`,`text-required`]},{default:c(()=>[i(`div`,I,[r(f,{text:`_A_FORM_EXAMPLE_VALIDATE_`,onClick:e.validate},null,8,[`onClick`]),r(f,{text:`_A_FORM_EXAMPLE_CLEAR_ERRORS_`,onClick:e.clearErrors},null,8,[`onClick`]),r(f,{text:e.readonly?`_A_FORM_EXAMPLE_EDIT_`:`_A_FORM_EXAMPLE_READONLY_`,onClick:e.toggleReadonly},null,8,[`text`,`onClick`])]),r(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,errors:e.errors,readonly:e.readonly,"text-error-header":`_A_FORM_EXAMPLE_ERROR_HEADER_`,"text-required":`_A_FORM_EXAMPLE_REQUIRED_TEXT_`},null,8,[`modelValue`,`data`,`errors`,`readonly`])]),_:1},8,[`code-html`,`code-js`])}var R=_(F,[[`render`,L]]);function z(){return{dataEvents:[{name:`update:model-value`,description:`_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_`,type:`Function`},{name:`change`,description:`_A_FORM_EVENTS_CHANGE_DESCRIPTION_`,type:`Function`}]}}function B(){let e=o(()=>m({placeholder:`_A_FORM_COMPONENT_NAME_`}));return{pageTitle:o(()=>`AForm${e.value?` (${e.value})`:``}`)}}function V(){return{dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`class-column-default`,description:`_A_FORM_PROPS_CLASS_COLUMN_DEFAULT_DESCRIPTION_`,type:`String / Object`,default:`a_column a_column_12`,required:!1},{name:`class-columns`,description:`_A_FORM_PROPS_CLASS_COLUMNS_DESCRIPTION_`,type:`String / Object`,default:`a_columns a_columns_count_12 a_columns_gap_2`,required:!1},{name:`data`,description:`_A_FORM_PROPS_DATA_DESCRIPTION_`,type:`Array`,default:void 0,required:!0},{name:`errors`,description:`_A_FORM_PROPS_ERRORS_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`exclude-render-attributes`,description:`_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`id-prefix`,description:`_A_UI_PROPS_ID_PREFIX_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`is-hide`,description:`_A_UI_PROPS_IS_HIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-render`,description:`_A_UI_PROPS_IS_RENDER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-required`,description:`_A_FORM_PROPS_IS_REQUIRED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`model-value`,description:`_A_FORM_PROPS_MODEL_VALUE_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`readonly`,description:`_A_UI_PROPS_READONLY_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`readonly-default`,description:`_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_`,type:`String`,default:``,required:!1},{name:`show-errors`,description:`_A_FORM_PROPS_SHOW_ERRORS_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`show-required-text`,description:`_A_FORM_PROPS_SHOW_REQUIRED_TEXT_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`tag`,description:`_A_FORM_PROPS_TAG_DESCRIPTION_`,type:`String`,default:`form`,required:!1},{name:`text-error-header`,description:`_A_FORM_PROPS_TEXT_ERROR_HEADER_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`text-required`,description:`_A_FORM_PROPS_TEXT_REQUIRED_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`use-flat-errors`,description:`_A_FORM_PROPS_USE_FLAT_ERRORS_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`use-flat-model`,description:`_A_FORM_PROPS_USE_FLAT_MODEL_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`use-html-id-as-key`,description:`_A_FORM_PROPS_USE_HTML_ID_AS_KEY_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1}]}}function H(){return{dataSlots:[{name:`formPrepend`,description:`_A_FORM_SLOTS_FORM_PREPEND_DESCRIPTION_`},{name:`formPrependAfterRequired`,description:`_A_FORM_SLOTS_FORM_PREPEND_AFTER_REQUIRED_DESCRIPTION_`},{name:`formDataPrepend`,description:`_A_FORM_SLOTS_FORM_DATA_PREPEND_DESCRIPTION_`},{name:`formDataAppend`,description:`_A_FORM_SLOTS_FORM_DATA_APPEND_DESCRIPTION_`},{name:`formAppend`,description:`_A_FORM_SLOTS_FORM_APPEND_DESCRIPTION_`}]}}var U={name:`PageForm`,components:{AlohaFormTypes:e,AlohaPage:t,AlohaTableProps:n,ATranslation:h,PageFormBasic:S,PageFormDependencies:D,PageFormEventsSlots:M,PageFormValidationReadonly:R},setup(){let{dataEvents:e}=z(),{pageTitle:t}=B(),{dataProps:n}=V(),{dataSlots:r}=H();return{dataEvents:e,dataProps:n,dataSlots:r,pageTitle:t}}};function W(e,t,n,i,o,l){let u=d(`a-translation`),f=d(`aloha-form-types`),p=d(`page-form-basic`),m=d(`page-form-dependencies`),h=d(`page-form-validation-readonly`),g=d(`page-form-events-slots`),_=d(`aloha-table-props`),v=d(`aloha-page`);return s(),a(v,{"page-title":e.pageTitle},{body:c(()=>[r(u,{tag:`p`,html:`_A_FORM_COMPONENT_DESCRIPTION_`}),r(f),r(p),r(m),r(h),r(g),r(_,{data:e.dataProps},null,8,[`data`]),r(_,{"table-label":`Emits`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`]),r(_,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`])]),_:1},8,[`page-title`])}var G=_(U,[[`render`,W]]);export{G as default};