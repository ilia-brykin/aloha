import{t as e}from"./chunk.AlohaFormTypes.DOrmQUBu.js";import{t}from"./chunk.AlohaPage.CYlv3kxV.js";import{t as n}from"./chunk.AlohaTableProps.C8KqO-_J.js";import{$t as r,Ft as i,It as a,Pt as o,Vt as s,hn as c,ln as l,rn as u,sn as d}from"./chunk.vendor.BvryzG0o.js";import{t as f}from"./chunk.AlohaExample.BB5AqaXZ.js";import{$t as p,C as m,qt as h}from"./bundle.index.as44OnM9.js";import{t as g}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function _(){return{codeHtml:`<a-form-element
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
};`}}var y={name:`PageFormElementBasic`,components:{AlohaExample:f,AFormElement:m},setup(){let e=l(`1234`),t=l(!0),{codeHtml:n}=_(),{codeJs:r}=v();return{codeHtml:n,codeJs:r,model1:e,model2:t}}};function b(e,t,n,o,l,f){let p=u(`a-form-element`),m=u(`aloha-example`);return r(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`label`,`type`]},{default:d(()=>[s(p,{modelValue:e.model1,"onUpdate:modelValue":t[0]||=t=>e.model1=t,required:!0,label:`Input`,type:`text`},null,8,[`modelValue`]),i(`div`,null,`model1: `+c(e.model1),1),s(p,{class:`a_mt_3`,modelValue:e.model2,"onUpdate:modelValue":t[1]||=t=>e.model2=t,required:!0,label:`Checkbox`,"help-text":`Aloha`,type:`oneCheckbox`},null,8,[`modelValue`]),i(`div`,null,`model2: `+c(e.model2),1)]),_:1},8,[`code-html`,`code-js`])}var x=g(y,[[`render`,b]]);function S(){return{codeHtml:`<a-form-element
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
};`}}var w={name:`PageFormElementReadonly`,components:{AlohaExample:f,AFormElement:m},setup(){let e=l(`1234`),t=l(!0),n=l(void 0),{codeHtml:r}=S(),{codeJs:i}=C();return{codeHtml:r,codeJs:i,model1:e,model2:t,model3:n}}};function T(e,t,n,i,o,c){let l=u(`a-form-element`),f=u(`aloha-example`);return r(),a(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_READONLY_HEADER_`,description:`_A_UI_GROUP_READONLY_DESCRIPTION_`,props:[`readonly`,`readonly-default`]},{default:d(()=>[s(l,{"model-value":e.model1,readonly:!0,label:`Input`,type:`text`},null,8,[`model-value`]),s(l,{class:`a_mt_3`,"model-value":e.model2,readonly:!0,label:`Checkbox`,"help-text":`Aloha`,type:`oneCheckbox`},null,8,[`model-value`]),s(l,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,label:`Textarea`,"readonly-default":`-`,type:`textarea`},null,8,[`model-value`])]),_:1},8,[`code-html`,`code-js`])}var E=g(w,[[`render`,T]]);function D(){return{dataEvents:[{name:`update:model-value`,description:`_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_`,type:`Function`}]}}function O(){let e=o(()=>p({placeholder:`_A_FORM_ELEMENT_COMPONENT_NAME_`}));return{pageTitle:o(()=>`AFormElement${e.value?` (${e.value})`:``}`)}}function k(){return{dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`change`,description:`_A_UI_PROPS_CHANGE_DESCRIPTION_`,type:`Function`,default:`() => {}`,required:!1},{name:`disabled`,description:`_A_UI_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`errors`,description:`_A_UI_PROPS_ERRORS_DESCRIPTION_`,type:`String / Array`,default:void 0,required:!1},{name:`exclude-render-attributes`,description:`_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`extra`,description:`_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`help-text`,description:`_A_UI_PROPS_HELP_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`html-id`,description:`_A_UI_PROPS_HTML_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`id`,description:`_A_UI_PROPS_ID_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`id-prefix`,description:`_A_UI_PROPS_ID_PREFIX_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`is-hide`,description:`_A_UI_PROPS_IS_HIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-render`,description:`_A_UI_PROPS_IS_RENDER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`label`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`label-class`,description:`_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`label-description`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`label-screen-reader`,description:`_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`model-dependencies`,description:`_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`model-value`,description:`_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`options`,description:`_A_FORM_ELEMENT_PROPS_OPTIONS_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`required`,description:`_A_UI_PROPS_REQUIRED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`readonly`,description:`_A_UI_PROPS_READONLY_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`readonly-default`,description:`_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_`,type:`String`,default:``,required:!1},{name:`type`,description:`_A_FORM_ELEMENT_PROPS_TYPE_DESCRIPTION_`,type:`String`,default:`text`,required:!1}]}}var A={name:`PageFormElement`,components:{AlohaFormTypes:e,AlohaPage:t,AlohaTableProps:n,ATranslation:h,PageFormElementBasic:x,PageFormElementReadonly:E},setup(){let{pageTitle:e}=O(),{dataProps:t}=k(),{dataEvents:n}=D();return{dataEvents:n,dataProps:t,pageTitle:e}}};function j(e,t,n,i,o,c){let l=u(`a-translation`),f=u(`aloha-form-types`),p=u(`page-form-element-basic`),m=u(`page-form-element-readonly`),h=u(`aloha-table-props`),g=u(`aloha-page`);return r(),a(g,{"page-title":e.pageTitle},{body:d(()=>[s(l,{tag:`p`,html:`_A_FORM_ELEMENT_COMPONENT_DESCRIPTION_`}),s(f),s(p),s(m),s(h,{data:e.dataProps},null,8,[`data`]),s(h,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`])]),_:1},8,[`page-title`])}var M=g(A,[[`render`,j]]);export{M as default};