import{$t as e,Ct as t,Tt as n,Ut as r,Yt as i,kt as a,qt as o,wt as s,zt as c}from"./chunk.vendor.CZPox1kV.js";import{Z as l,kt as u,t as d,w as f}from"./bundle.index.BmSiyQNH.js";import{n as p,t as m}from"./chunk.AlohaExample.CD4LlhAz.js";import{t as h}from"./chunk.AlohaTableProps.Dksi7fmb.js";import{t as g}from"./chunk.AlohaFormTypes.CPf50tmZ.js";function _(){return{codeHtml:`<a-form-element
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
};`}}var y={name:`PageFormElementBasic`,components:{AlohaExample:m,AFormElement:f},setup(){let e=i(`1234`),t=i(!0),{codeHtml:n}=_(),{codeJs:r}=v();return{codeHtml:n,codeJs:r,model1:e,model2:t}}};function b(t,i,l,u,d,f){let p=r(`a-form-element`),m=r(`aloha-example`);return c(),n(m,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`label`,`type`]},{default:o(()=>[a(p,{modelValue:t.model1,"onUpdate:modelValue":i[0]||=e=>t.model1=e,required:!0,label:`Input`,type:`text`},null,8,[`modelValue`]),s(`div`,null,`model1: `+e(t.model1),1),a(p,{class:`a_mt_3`,modelValue:t.model2,"onUpdate:modelValue":i[1]||=e=>t.model2=e,required:!0,label:`Checkbox`,"help-text":`Aloha`,type:`oneCheckbox`},null,8,[`modelValue`]),s(`div`,null,`model2: `+e(t.model2),1)]),_:1},8,[`code-html`,`code-js`])}var x=d(y,[[`render`,b]]);function S(){return{codeHtml:`<a-form-element
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
};`}}var w={name:`PageFormElementReadonly`,components:{AlohaExample:m,AFormElement:f},setup(){let e=i(`1234`),t=i(!0),n=i(void 0),{codeHtml:r}=S(),{codeJs:a}=C();return{codeHtml:r,codeJs:a,model1:e,model2:t,model3:n}}};function T(e,t,i,s,l,u){let d=r(`a-form-element`),f=r(`aloha-example`);return c(),n(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_READONLY_HEADER_`,description:`_A_UI_GROUP_READONLY_DESCRIPTION_`,props:[`readonly`,`readonly-default`]},{default:o(()=>[a(d,{"model-value":e.model1,readonly:!0,label:`Input`,type:`text`},null,8,[`model-value`]),a(d,{class:`a_mt_3`,"model-value":e.model2,readonly:!0,label:`Checkbox`,"help-text":`Aloha`,type:`oneCheckbox`},null,8,[`model-value`]),a(d,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,label:`Textarea`,"readonly-default":`-`,type:`textarea`},null,8,[`model-value`])]),_:1},8,[`code-html`,`code-js`])}var E=d(w,[[`render`,T]]);function D(){return{dataEvents:[{name:`update:model-value`,description:`_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_`,type:`Function`}]}}function O(){let e=t(()=>u({placeholder:`_A_FORM_ELEMENT_COMPONENT_NAME_`}));return{pageTitle:t(()=>`AFormElement${e.value?` (${e.value})`:``}`)}}function k(){return{dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`change`,description:`_A_UI_PROPS_CHANGE_DESCRIPTION_`,type:`Function`,default:`() => {}`,required:!1},{name:`disabled`,description:`_A_UI_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`errors`,description:`_A_UI_PROPS_ERRORS_DESCRIPTION_`,type:`String / Array`,default:void 0,required:!1},{name:`exclude-render-attributes`,description:`_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`extra`,description:`_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`help-text`,description:`_A_UI_PROPS_HELP_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`html-id`,description:`_A_UI_PROPS_HTML_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`id`,description:`_A_UI_PROPS_ID_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`id-prefix`,description:`_A_UI_PROPS_ID_PREFIX_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`is-hide`,description:`_A_UI_PROPS_IS_HIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-render`,description:`_A_UI_PROPS_IS_RENDER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`label`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`label-class`,description:`_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`label-description`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`label-screen-reader`,description:`_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`model-dependencies`,description:`_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`model-value`,description:`_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`options`,description:`_A_FORM_ELEMENT_PROPS_OPTIONS_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`required`,description:`_A_UI_PROPS_REQUIRED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`readonly`,description:`_A_UI_PROPS_READONLY_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`readonly-default`,description:`_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_`,type:`String`,default:``,required:!1},{name:`type`,description:`_A_FORM_ELEMENT_PROPS_TYPE_DESCRIPTION_`,type:`String`,default:`text`,required:!1}]}}var A={name:`PageFormElement`,components:{AlohaFormTypes:g,AlohaPage:p,AlohaTableProps:h,ATranslation:l,PageFormElementBasic:x,PageFormElementReadonly:E},setup(){let{pageTitle:e}=O(),{dataProps:t}=k(),{dataEvents:n}=D();return{dataEvents:n,dataProps:t,pageTitle:e}}};function j(e,t,i,s,l,u){let d=r(`a-translation`),f=r(`aloha-form-types`),p=r(`page-form-element-basic`),m=r(`page-form-element-readonly`),h=r(`aloha-table-props`),g=r(`aloha-page`);return c(),n(g,{"page-title":e.pageTitle},{body:o(()=>[a(d,{tag:`p`,html:`_A_FORM_ELEMENT_COMPONENT_DESCRIPTION_`}),a(f),a(p),a(m),a(h,{data:e.dataProps},null,8,[`data`]),a(h,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`])]),_:1},8,[`page-title`])}var M=d(A,[[`render`,j]]);export{M as default};