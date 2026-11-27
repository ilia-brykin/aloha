import{t as e}from"./chunk.AlohaPage.BIw9NYpI.js";import{t}from"./chunk.AlohaTableProps.9D5sSTzx.js";import{t as n}from"./chunk.AlohaTableTranslate.Dl6r_SFb.js";import{Ht as r,Jt as i,Ut as a,Vt as o,_n as s,mn as c,on as l,un as u,wn as d}from"./chunk.vendor.Bjd2408Z.js";import{t as f}from"./chunk.AlohaExample.CEueonn8.js";import{M as p,hn as m,mn as h,t as g}from"./bundle.index.Dor-y9Rj.js";function _(){return{codeHtml:`<a-fieldset
  v-model="model"
  :children="children"
  label="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>`}}function v(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AFieldset,
} from "aloha-vue";
    
export default {
  name: "PageFieldsetBasic",
  components: {
    AFieldset,
  },
  setup() {
    const children = [
      {
        type: "text",
        label: "Text",
        id: "aloha.text",
      },
      {
        type: "oneCheckbox",
        label: "Checkbox",
        id: "aloha.checkbox",
      },
    ];
    const model = ref(undefined);
    
    return {
      children,
      model,
    };
  },
};`}}var y={name:`PageFieldsetBasic`,components:{AFieldset:p,AlohaExample:f},setup(){let e=[{type:`text`,label:`Text`,id:`aloha.text`},{type:`oneCheckbox`,label:`Checkbox`,id:`aloha.checkbox`}],t=s(void 0),{codeHtml:n}=_(),{codeJs:r}=v();return{children:e,codeHtml:n,codeJs:r,model:t}}};function b(e,t,n,o,s,f){let p=u(`a-fieldset`),m=u(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`label`,`children`]},{default:c(()=>[i(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,children:e.children,label:`Fieldset`},null,8,[`modelValue`,`children`]),r(`div`,null,`model: `+d(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var x=g(y,[[`render`,b]]);function S(){return{codeHtml:`<a-fieldset
  :change="changeModel"
  :children="children"
  :model-value="model"
  label="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>`}}function C(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AFieldset,
} from "aloha-vue";
    
export default {
  name: "PageFieldsetChange",
  components: {
    AFieldset,
  },
  setup() {
    const children = [
      {
        type: "text",
        label: "Text",
        id: "aloha.text",
      },
      {
        type: "oneCheckbox",
        label: "Checkbox",
        id: "aloha.checkbox",
      },
    ];
    const model = ref(undefined);
    
    const changeModel = ({ model: _model, id, props }) => {
      model.value = _model;
      console.log(id, props);
    };
    
    return {
      children,
      changeModel,
      model,
    };
  },
};`}}var ee={name:`PageFieldsetChange`,components:{AFieldset:p,AlohaExample:f},setup(){let e=[{type:`text`,label:`Text`,id:`aloha.text1`},{type:`oneCheckbox`,label:`Checkbox`,id:`aloha.checkbox1`}],t=s(void 0),n=({model:e,id:n,props:r})=>{t.value=e,console.log(n,r)},{codeHtml:r}=S(),{codeJs:i}=C();return{changeModel:n,children:e,codeHtml:r,codeJs:i,model:t}}};function w(e,t,n,o,s,f){let p=u(`a-fieldset`),m=u(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_CHANGE_HEADER_`,description:`_A_UI_GROUP_CHANGE_DESCRIPTION_`,props:[`change`,`model-value`]},{default:c(()=>[i(p,{change:e.changeModel,children:e.children,"model-value":e.model,label:`Fieldset`},null,8,[`change`,`children`,`model-value`]),r(`div`,null,`model: `+d(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var T=g(ee,[[`render`,w]]);function E(){return{codeHtml:`<a-fieldset
  v-model="model1"
  :children="children1"
  :collapsible="true"
  label="Aloha"
  @toggle-collapse="toggleCollapse"
></a-fieldset>
<div>model1: {{ model1 }}</div>
<a-fieldset
  v-model="model2"
  :children="children2"
  :collapsible="true"
  class="a_mt_3"
  label="Aloha"
  @toggle-collapse="toggleCollapse"
></a-fieldset>
<div>model2: {{ model2 }}</div>`}}function D(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AFieldset,
} from "aloha-vue";
    
export default {
  name: "PageFieldsetCollapse",
  components: {
    AFieldset,
  },
  setup() {
    const children1 = [
      {
        type: "text",
        label: "Text",
        id: "aloha1.text",
      },
    ];
    const children2 = [
      {
        type: "text",
        label: "Text",
        id: "aloha2.text",
      },
    ];
    const model1 = ref(undefined);
    const model2 = ref(undefined);
    
    const toggleCollapse = ({ isCollapsed, id, props }) => {
      console.log(isCollapsed, id, props);
    };

    return {
      children1,
      children2,
      model1,
      model2,
      toggleCollapse,
    };
  },
};`}}var O={name:`PageFieldsetCollapse`,components:{AFieldset:p,AlohaExample:f},setup(){let e=[{type:`text`,label:`Text`,id:`aloha1.text`}],t=[{type:`text`,label:`Text`,id:`aloha2.text`}],n=s(void 0),r=s(void 0),{codeHtml:i}=E(),{codeJs:a}=D();return{children1:e,children2:t,codeHtml:i,codeJs:a,model1:n,model2:r,toggleCollapse:({isCollapsed:e,id:t,props:n})=>{console.log(e,t,n)}}}},k={class:`a_columns a_columns_count_12`},A={class:`a_column a_column_6 a_columns_count_12_touch`};function j(e,t,n,o,s,f){let p=u(`a-fieldset`),m=u(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_COLLAPSE_HEADER_`,description:`_A_UI_GROUP_COLLAPSE_DESCRIPTION_`,props:[`collapsible`,`is-collapsed`],emits:[`toggle-collapse`]},{default:c(()=>[r(`div`,k,[r(`div`,A,[i(p,{modelValue:e.model1,"onUpdate:modelValue":t[0]||=t=>e.model1=t,children:e.children1,collapsible:!0,label:`Aloha`,onToggleCollapse:e.toggleCollapse},null,8,[`modelValue`,`children`,`onToggleCollapse`]),r(`div`,null,`model1: `+d(e.model1),1),i(p,{class:`a_mt_3`,modelValue:e.model2,"onUpdate:modelValue":t[1]||=t=>e.model2=t,children:e.children2,collapsible:!0,"is-collapsed":!0,label:`Aloha`,onToggleCollapse:e.toggleCollapse},null,8,[`modelValue`,`children`,`onToggleCollapse`]),r(`div`,null,`model2: `+d(e.model2),1)])])]),_:1},8,[`code-html`,`code-js`])}var M=g(O,[[`render`,j]]);function N(){return{codeHtml:`<a-fieldset
  v-model="model"
  :children="children"
  errors="Aloha"
  label="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>`}}function P(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AFieldset,
} from "aloha-vue";
    
export default {
  name: "PageFieldsetError",
  components: {
    AFieldset,
  },
  setup() {
    const children = [
      {
        type: "text",
        label: "Text",
        id: "aloha.text",
      },
      {
        type: "oneCheckbox",
        label: "Checkbox",
        id: "aloha.checkbox",
      },
    ];
    const model = ref(undefined);
    
    return {
      children,
      model,
    };
  },
};`}}var F={name:`PageFieldsetError`,components:{AFieldset:p,AlohaExample:f},setup(){let e=[{type:`text`,label:`Text`,id:`aloha.text`},{type:`oneCheckbox`,label:`Checkbox`,id:`aloha.checkbox`}],t=s(void 0),{codeHtml:n}=N(),{codeJs:r}=P();return{children:e,codeHtml:n,codeJs:r,model:t}}};function I(e,t,n,o,s,f){let p=u(`a-fieldset`),m=u(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_ERRORS_HEADER_`,description:`_A_UI_GROUP_ERRORS_DESCRIPTION_`,props:[`errors`]},{default:c(()=>[i(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,children:e.children,errors:`Aloha`,label:`Fieldset`},null,8,[`modelValue`,`children`]),r(`div`,null,`model: `+d(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var L=g(F,[[`render`,I]]);function R(){return{codeHtml:`<a-fieldset
  v-model="model"
  :children="children"
  :has-border="true"
  label="Fieldset"
></a-fieldset>
<a-fieldset
  v-model="model"
  :children="children"
  :has-border="false"
  class="a_mt_3"
  label="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>`}}function z(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AFieldset,
} from "aloha-vue";
    
export default {
  name: "PageFieldsetHasBorder",
  components: {
    AFieldset,
  },
  setup() {
    const children = [
      {
        type: "text",
        label: "Text",
        id: "border.text",
      },
      {
        type: "oneCheckbox",
        label: "Checkbox",
        id: "border.checkbox",
      },
    ];
    const model = ref(undefined);

    return {
      children,
      model,
    };
  },
};`}}var B={name:`PageFieldsetHasBorder`,components:{AFieldset:p,AlohaExample:f},setup(){let e=[{type:`text`,label:`Text`,id:`border.text`},{type:`oneCheckbox`,label:`Checkbox`,id:`border.checkbox`}],t=s(void 0),{codeHtml:n}=R(),{codeJs:r}=z();return{children:e,codeHtml:n,codeJs:r,model:t}}},V={class:`a_columns a_columns_count_12`},H={class:`a_column a_column_6 a_columns_count_12_touch`};function U(e,t,n,o,s,f){let p=u(`a-fieldset`),m=u(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_HAS_BORDER_HEADER_`,description:`_A_UI_GROUP_HAS_BORDER_DESCRIPTION_`,props:`has-border`},{default:c(()=>[r(`div`,V,[r(`div`,H,[i(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,children:e.children,"has-border":!0,label:`Fieldset`},null,8,[`modelValue`,`children`]),i(p,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,children:e.children,"has-border":!1,label:`Fieldset`},null,8,[`modelValue`,`children`]),r(`div`,null,`model: `+d(e.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var te=g(B,[[`render`,U]]);function W(){return{codeHtml:`<a-fieldset
  v-model="model"
  :children="children"
  help-text="Aloha"
  label="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>`}}function G(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AFieldset,
} from "aloha-vue";
    
export default {
  name: "PageFieldsetHelpText",
  components: {
    AFieldset,
  },
  setup() {
    const children = [
      {
        type: "text",
        label: "Text",
        id: "aloha.text2",
      },
      {
        type: "oneCheckbox",
        label: "Checkbox",
        id: "aloha.checkbox2",
      },
    ];
    const model = ref(undefined);
    
    return {
      children,
      model,
    };
  },
};`}}var K={name:`PageFieldsetHelpText`,components:{AFieldset:p,AlohaExample:f},setup(){let e=[{type:`text`,label:`Text`,id:`aloha.text2`},{type:`oneCheckbox`,label:`Checkbox`,id:`aloha.checkbox2`}],t=s(void 0),{codeHtml:n}=W(),{codeJs:r}=G();return{children:e,codeHtml:n,codeJs:r,model:t}}};function q(e,t,n,o,s,f){let p=u(`a-fieldset`),m=u(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_HELP_TEXT_HEADER_`,description:`_A_UI_GROUP_HELP_TEXT_DESCRIPTION_`,props:[`help-text`]},{default:c(()=>[i(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,children:e.children,"help-text":`Aloha`,label:`Fieldset`},null,8,[`modelValue`,`children`]),r(`div`,null,`model: `+d(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var J=g(K,[[`render`,q]]);function Y(){return{codeHtml:`<a-fieldset
  v-model="model"
  :children="children"
  label="Fieldset"
  label-description="Aloha"
></a-fieldset>
<div>model: {{ model }}</div>`}}function X(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AFieldset,
} from "aloha-vue";
    
export default {
  name: "PageFieldsetLabelDescription",
  components: {
    AFieldset,
  },
  setup() {
    const children = [
      {
        type: "text",
        label: "Text",
        id: "aloha.text2",
      },
      {
        type: "oneCheckbox",
        label: "Checkbox",
        id: "aloha.checkbox2",
      },
    ];
    const model = ref(undefined);
    
    return {
      children,
      model,
    };
  },
};`}}var Z={name:`PageFieldsetLabelDescription`,components:{AFieldset:p,AlohaExample:f},setup(){let e=[{type:`text`,label:`Text`,id:`aloha.text2`},{type:`oneCheckbox`,label:`Checkbox`,id:`aloha.checkbox2`}],t=s(void 0),{codeHtml:n}=Y(),{codeJs:r}=X();return{children:e,codeHtml:n,codeJs:r,model:t}}};function Q(e,t,n,o,s,f){let p=u(`a-fieldset`),m=u(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_`,description:`_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_`,props:[`label-description`]},{default:c(()=>[i(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,children:e.children,label:`Fieldset`,"label-description":`Aloha`},null,8,[`modelValue`,`children`]),r(`div`,null,`model: `+d(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var ne=g(Z,[[`render`,Q]]);function re(){return{codeHtml:`<a-fieldset
  v-model="model"
  :children="children"
  label="Fieldset"
></a-fieldset>
<a-fieldset
  v-model="model"
  :children="children"
  class="a_mt_3"
  label-screen-reader="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>`}}function ie(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AFieldset,
} from "aloha-vue";
    
export default {
  name: "PageFieldsetLabelScreenReader",
  components: {
    AFieldset,
  },
  setup() {
    const children = [
      {
        type: "text",
        label: "Text",
        id: "label.text",
      },
      {
        type: "oneCheckbox",
        label: "Checkbox",
        id: "label.checkbox",
      },
    ];
    const model = ref(undefined);

    return {
      children,
      model,
    };
  },
};`}}var ae={name:`PageFieldsetLabelScreenReader`,components:{AFieldset:p,AlohaExample:f},setup(){let e=[{type:`text`,label:`Text`,id:`label.text`},{type:`oneCheckbox`,label:`Checkbox`,id:`label.checkbox`}],t=s(void 0),{codeHtml:n}=re(),{codeJs:r}=ie();return{children:e,codeHtml:n,codeJs:r,model:t}}},oe={class:`a_columns a_columns_count_12`},$={class:`a_column a_column_6 a_columns_count_12_touch`};function se(e,t,n,o,s,f){let p=u(`a-fieldset`),m=u(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_LABEL_SCREEN_READER_HEADER_`,description:`_A_UI_GROUP_LABEL_SCREEN_READER_DESCRIPTION_`,props:[`label-screen-reader`]},{default:c(()=>[r(`div`,oe,[r(`div`,$,[i(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,children:e.children,label:`Fieldset`},null,8,[`modelValue`,`children`]),i(p,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,children:e.children,"label-screen-reader":`Fieldset`},null,8,[`modelValue`,`children`]),r(`div`,null,`model: `+d(e.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var ce=g(ae,[[`render`,se]]);function le(){return{dataEvents:[{name:`update-data`,description:`_A_UI_EVENTS_UPDATE_DATA_DESCRIPTION_`,type:`Function`},{name:`toggle-collapse`,description:`_A_UI_EVENTS_TOGGLE_COLLAPSE_DESCRIPTION_`,type:`Function`},{name:`update:model-value`,description:`_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_`,type:`Function`}]}}function ue(){let e=o(()=>m({placeholder:`_A_FIELDSET_COMPONENT_NAME_`}));return{pageTitle:o(()=>`AFieldset${e.value?` (${e.value})`:``}`)}}function de(){return{dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`attributes-fieldset`,description:`_A_UI_PROPS_ATTRIBUTES_FIELDSET_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`change`,description:`_A_UI_PROPS_CHANGE_DESCRIPTION_`,type:`Function`,default:`() => {}`,required:!1},{name:`children`,description:`_A_UI_PROPS_CHILDREN_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`class-column-default`,description:`_A_UI_PROPS_CLASS_COLUMN_DEFAULT_DESCRIPTION_`,type:`String / Object`,default:`a_column a_column_12`,required:!1},{name:`class-columns`,description:`_A_UI_PROPS_CLASS_COLUMNS_DESCRIPTION_`,type:`String / Object`,default:`a_columns a_columns_count_12`,required:!1},{name:`class-fieldset`,description:`_A_UI_PROPS_CLASS_FIELDSET_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`collapsible`,description:`_A_CHECKBOX_PROPS_COLLAPSIBLE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`dependencies`,description:`_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_`,type:`Array / Object`,default:void 0,required:!1},{name:`disabled`,description:`_A_UI_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`errors`,description:`_A_UI_PROPS_ERRORS_DESCRIPTION_`,type:`String / Array`,default:void 0,required:!1},{name:`errors-all`,description:`_A_UI_PROPS_ERRORS_ALL_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`exclude-render-attributes`,description:`_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`extra`,description:`_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`has-border`,description:`_A_UI_PROPS_HAS_BORDER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`help-text`,description:`_A_UI_PROPS_HELP_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`html-id`,description:`_A_UI_PROPS_HTML_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`id`,description:`_A_UI_PROPS_ID_DESCRIPTION_`,type:`String / Number`,default:`() => uniqueId("a_fieldset_")`,required:!1},{name:`id-prefix`,description:`_A_UI_PROPS_ID_PREFIX_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`is-collapsed`,description:`_A_CHECKBOX_PROPS_IS_COLLAPSED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-hide`,description:`_A_UI_PROPS_IS_HIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-render`,description:`_A_UI_PROPS_IS_RENDER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`label`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`label-class`,description:`_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`label-description`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`label-screen-reader`,description:`_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`model-dependencies`,description:`_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`model-value`,description:`_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`readonly`,description:`_A_UI_PROPS_READONLY_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`readonly-default`,description:`_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_`,type:`String`,default:``,required:!1},{name:`required`,description:`_A_UI_PROPS_REQUIRED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`slot-name`,description:`_A_UI_PROPS_SLOT_NAME_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`texts`,description:`_A_FIELDSET_PROPS_TEXTS_DESCRIPTION_`,type:`Object`,default:`() => ({
        collapseClose: "_A_FIELDSET_COLLAPSE_CLOSE_",
        collapseOpen: "_A_FIELDSET_COLLAPSE_OPEN_",
      })`,required:!1},{name:`use-flat-errors`,description:`_A_FORM_PROPS_USE_FLAT_ERRORS_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`use-flat-model`,description:`_A_FORM_PROPS_USE_FLAT_MODEL_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`use-html-id-as-key`,description:`_A_PROPS_USE_HTML_ID_AS_KEY_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1}]}}function fe(){return{dataTranslate:[`_A_FIELDSET_COLLAPSE_OPEN_`,`_A_FIELDSET_COLLAPSE_CLOSE_`]}}var pe={name:`PageFieldset`,components:{AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:h,PageFieldsetBasic:x,PageFieldsetChange:T,PageFieldsetCollapse:M,PageFieldsetError:L,PageFieldsetHasBorder:te,PageFieldsetHelpText:J,PageFieldsetLabelDescription:ne,PageFieldsetLabelScreenReader:ce},setup(){let{pageTitle:e}=ue(),{dataProps:t}=de(),{dataEvents:n}=le(),{dataTranslate:r}=fe();return{dataEvents:n,dataProps:t,dataTranslate:r,pageTitle:e}}};function me(e,t,n,r,o,s){let d=u(`a-translation`),f=u(`page-fieldset-basic`),p=u(`page-fieldset-change`),m=u(`page-fieldset-help-text`),h=u(`page-fieldset-error`),g=u(`page-fieldset-label-description`),_=u(`page-fieldset-label-screen-reader`),v=u(`page-fieldset-collapse`),y=u(`page-fieldset-has-border`),b=u(`aloha-table-props`),x=u(`aloha-table-translate`),S=u(`aloha-table-css-vars`),C=u(`aloha-page`);return l(),a(C,{"page-title":e.pageTitle},{body:c(()=>[i(d,{tag:`p`,html:`_A_FIELDSET_COMPONENT_DESCRIPTION_`}),i(f),i(p),i(m),i(h),i(g),i(_),i(v),i(y),i(b,{data:e.dataProps},null,8,[`data`]),i(b,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`]),i(x,{data:e.dataTranslate},null,8,[`data`]),i(S,{files:`components/ui/AFieldset`})]),_:1},8,[`page-title`])}var he=g(pe,[[`render`,me]]);export{he as default};