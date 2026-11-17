import{t as e}from"./chunk.AlohaFormTypes.BL08KIow.js";import{t}from"./chunk.AlohaPage.CtPiWSGW.js";import{t as n}from"./chunk.AlohaTableProps.DfVbg0QG.js";import{$t as r,Dt as i,Et as a,Mt as o,Ot as s,Ut as c,Zt as l,an as u,qt as d}from"./chunk.vendor.BLRpG40B.js";import{t as f}from"./chunk.AlohaExample.Bs_TZ3nZ.js";import{$ as p,T as m,jt as h}from"./bundle.index.Dik8P8_q.js";import{t as g}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function _(){return{codeHtml:`<a-form-element
  v-model="model1"
  :required="true"
  label="Input"
  type="text"
></a-form-element>
<div>model1: {{ model1 }}</div>
<a-form-element
  v-model="model2"
  :required="true"
  class="a_mt_3"
  label="Checkbox"
  help-text="Aloha"
  type="oneCheckbox"
></a-form-element>
<div>model2: {{ model2 }}</div>`}}function v(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AFormElement,
} from "aloha-vue";
    
export default {
  name: "PageFormElementBasic",
  components: {
    AFormElement,
  },
  setup() {
    const model1 = ref("1234");
    const model2 = ref(true);
    
    return {
      model1,
      model2,
    };
  },
};`}}var y={name:`PageFormElementBasic`,components:{AlohaExample:f,AFormElement:m},setup(){let e=r(`1234`),t=r(!0),{codeHtml:n}=_(),{codeJs:i}=v();return{codeHtml:n,codeJs:i,model1:e,model2:t}}};function b(e,t,n,r,a,f){let p=d(`a-form-element`),m=d(`aloha-example`);return c(),s(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`label`,`type`]},{default:l(()=>[o(p,{modelValue:e.model1,"onUpdate:modelValue":t[0]||=t=>e.model1=t,required:!0,label:`Input`,type:`text`},null,8,[`modelValue`]),i(`div`,null,`model1: `+u(e.model1),1),o(p,{class:`a_mt_3`,modelValue:e.model2,"onUpdate:modelValue":t[1]||=t=>e.model2=t,required:!0,label:`Checkbox`,"help-text":`Aloha`,type:`oneCheckbox`},null,8,[`modelValue`]),i(`div`,null,`model2: `+u(e.model2),1)]),_:1},8,[`code-html`,`code-js`])}var x=g(y,[[`render`,b]]);function S(){return{codeHtml:`<a-form-element
  :model-value="model1"
  :readonly="true"
  label="Input"
  type="text"
></a-form-element>
<a-form-element
  :model-value="model2"
  :readonly="true"
  class="a_mt_3"
  label="Checkbox"
  help-text="Aloha"
  type="oneCheckbox"
></a-form-element>
<a-form-element
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  label="Textarea"
  readonly-default="-"
  type="textarea"
></a-form-element>`}}function C(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AFormElement,
} from "aloha-vue";
    
export default {
  name: "PageFormElementReadonly",
  components: {
    AFormElement,
  },
  setup() {
    const model1 = ref("1234");
    const model2 = ref(true);
    const model3 = ref(undefined);
    
    return {
      model1,
      model2,
      model3,
    };
  },
};`}}var w={name:`PageFormElementReadonly`,components:{AlohaExample:f,AFormElement:m},setup(){let e=r(`1234`),t=r(!0),n=r(void 0),{codeHtml:i}=S(),{codeJs:a}=C();return{codeHtml:i,codeJs:a,model1:e,model2:t,model3:n}}};function T(e,t,n,r,i,a){let u=d(`a-form-element`),f=d(`aloha-example`);return c(),s(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_READONLY_HEADER_`,description:`_A_UI_GROUP_READONLY_DESCRIPTION_`,props:[`readonly`,`readonly-default`]},{default:l(()=>[o(u,{"model-value":e.model1,readonly:!0,label:`Input`,type:`text`},null,8,[`model-value`]),o(u,{class:`a_mt_3`,"model-value":e.model2,readonly:!0,label:`Checkbox`,"help-text":`Aloha`,type:`oneCheckbox`},null,8,[`model-value`]),o(u,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,label:`Textarea`,"readonly-default":`-`,type:`textarea`},null,8,[`model-value`])]),_:1},8,[`code-html`,`code-js`])}var E=g(w,[[`render`,T]]);function D(){return{dataEvents:[{name:`update:model-value`,description:`_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_`,type:`Function`}]}}function O(){let e=a(()=>h({placeholder:`_A_FORM_ELEMENT_COMPONENT_NAME_`}));return{pageTitle:a(()=>`AFormElement${e.value?` (${e.value})`:``}`)}}function k(){return{dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`change`,description:`_A_UI_PROPS_CHANGE_DESCRIPTION_`,type:`Function`,default:`() => {}`,required:!1},{name:`disabled`,description:`_A_UI_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`errors`,description:`_A_UI_PROPS_ERRORS_DESCRIPTION_`,type:`String / Array`,default:void 0,required:!1},{name:`exclude-render-attributes`,description:`_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`extra`,description:`_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`help-text`,description:`_A_UI_PROPS_HELP_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`html-id`,description:`_A_UI_PROPS_HTML_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`id`,description:`_A_UI_PROPS_ID_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`id-prefix`,description:`_A_UI_PROPS_ID_PREFIX_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`is-hide`,description:`_A_UI_PROPS_IS_HIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-render`,description:`_A_UI_PROPS_IS_RENDER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`label`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`label-class`,description:`_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`label-description`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`label-screen-reader`,description:`_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`model-dependencies`,description:`_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`model-value`,description:`_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`options`,description:`_A_FORM_ELEMENT_PROPS_OPTIONS_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`required`,description:`_A_UI_PROPS_REQUIRED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`readonly`,description:`_A_UI_PROPS_READONLY_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`readonly-default`,description:`_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_`,type:`String`,default:``,required:!1},{name:`type`,description:`_A_FORM_ELEMENT_PROPS_TYPE_DESCRIPTION_`,type:`String`,default:`text`,required:!1}]}}var A={name:`PageFormElement`,components:{AlohaFormTypes:e,AlohaPage:t,AlohaTableProps:n,ATranslation:p,PageFormElementBasic:x,PageFormElementReadonly:E},setup(){let{pageTitle:e}=O(),{dataProps:t}=k(),{dataEvents:n}=D();return{dataEvents:n,dataProps:t,pageTitle:e}}};function j(e,t,n,r,i,a){let u=d(`a-translation`),f=d(`aloha-form-types`),p=d(`page-form-element-basic`),m=d(`page-form-element-readonly`),h=d(`aloha-table-props`),g=d(`aloha-page`);return c(),s(g,{"page-title":e.pageTitle},{body:l(()=>[o(u,{tag:`p`,html:`_A_FORM_ELEMENT_COMPONENT_DESCRIPTION_`}),o(f),o(p),o(m),o(h,{data:e.dataProps},null,8,[`data`]),o(h,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`])]),_:1},8,[`page-title`])}var M=g(A,[[`render`,j]]);export{M as default};