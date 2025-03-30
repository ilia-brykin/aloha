import{A as S,a as h}from"./chunk.AlohaExample.F_cyV5WT.js";import{A as N}from"./chunk.AlohaTableProps.BVXKew06.js";import{A as b}from"./chunk.AlohaTableTranslate.DYnxjE8-.js";import{a3 as I,_ as c,g as y,A as U}from"./bundle.index.CW6wq-G7.js";import{r as u,U as E,aS as m,e as l,V as p,Z as o,Y as P,aT as A,d as R}from"./chunk.vendor.DOoIAE1K.js";import"./chunk.vendor-lodash.BAE3VvPy.js";import"./chunk.APageTabTitle.Bj99E2_4.js";import"./chunk.AlohaHighlightjs.BbO2lEkw.js";import"./chunk.ATable.BK7XJPiD.js";import"./chunk.translations-ar.B3XbQD-F.js";import"./chunk.translations-de.BU3I7i25.js";import"./chunk.translations-en.Dz5VXJqd.js";import"./chunk.translations-es.BKlBZ5Wd.js";import"./chunk.translations-fr.CMF_fLGD.js";import"./chunk.translations-hr.C5ZK4YvJ.js";import"./chunk.translations-it.CAxOY8kK.js";import"./chunk.translations-ru.C-L7Lrhy.js";function g(){return{codeHtml:`<a-multiselect-ordered
  v-model="model1"
  :data="data"
  key-id="value"
  key-label="label"
  label="Select 1"
></a-multiselect-ordered>
<div>model1: {{ model1 }}</div>
<a-multiselect-ordered
  v-model="model2"
  :data="data"
  class="a_mt_3"
  key-id="value"
  key-label="label"
  label="Select 2"
></a-multiselect-ordered>
<div>model2: {{ model2 }}</div>`}}function v(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AMultiselectOrdered,
} from "aloha-vue";
    
export default {
  name: "PageMultiselectOrderedBasic",
  components: {
    AMultiselectOrdered,
  },
  setup() {
    const data = [
      {
        value: "aloha_1",
        label: "Aloha 1",
      },
      {
        value: "aloha_2",
        label: "Aloha 2",
      },
      {
        value: "aloha_3",
        label: "Aloha 3",
      },
      {
        value: "aloha_4",
        label: "Aloha 4",
      },
    ];
    const model1 = ref(["aloha_4", "aloha_2"]);
    const model2 = ref(undefined);
    
    return {
      data,
      model1,
      model2,
    };
  },
};`}}const M={name:"PageMultiselectOrderedBasic",components:{AlohaExample:S,AMultiselectOrdered:I},setup(){const e=[{value:"aloha_1",label:"Aloha 1"},{value:"aloha_2",label:"Aloha 2"},{value:"aloha_3",label:"Aloha 3"},{value:"aloha_4",label:"Aloha 4"}],a=u(["aloha_4","aloha_2"]),t=u(void 0),{codeHtml:_}=g(),{codeJs:s}=v();return{codeHtml:_,codeJs:s,data:e,model1:a,model2:t}}};function q(e,a,t,_,s,i){const d=l("a-multiselect-ordered"),n=l("aloha-example");return p(),E(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["data","model-value","label"]},{default:m(()=>[o(d,{modelValue:e.model1,"onUpdate:modelValue":a[0]||(a[0]=r=>e.model1=r),data:e.data,"key-id":"value","key-label":"label",label:"Select 1"},null,8,["modelValue","data"]),P("div",null,"model1: "+A(e.model1),1),o(d,{class:"a_mt_3",modelValue:e.model2,"onUpdate:modelValue":a[1]||(a[1]=r=>e.model2=r),data:e.data,"key-id":"value","key-label":"label",label:"Select 2"},null,8,["modelValue","data"]),P("div",null,"model2: "+A(e.model2),1)]),_:1},8,["code-html","code-js"])}const B=c(M,[["render",q]]);function H(){return{codeHtml:`<a-multiselect-ordered
  :change="changeModel"
  :model-value="model"
  :data="data"
  key-id="value"
  key-label="label"
  label="Select"
></a-multiselect-ordered>
<div>model: {{ model }}</div>`}}function k(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AMultiselectOrdered,
} from "aloha-vue";
    
export default {
  name: "PageMultiselectOrderedChange",
  components: {
    AMultiselectOrdered,
  },
  setup() {
    const data = [
      {
        value: "aloha_1",
        label: "Aloha 1",
      },
      {
        value: "aloha_2",
        label: "Aloha 2",
      },
      {
        value: "aloha_3",
        label: "Aloha 3",
      },
      {
        value: "aloha_4",
        label: "Aloha 4",
      },
    ];
    const model = ref(["aloha_4", "aloha_2"]);
    
    const changeModel = ({ model: _model, id, props }) => {
      model.value = _model;
      console.log(id, props);
    };
    
    return {
      changeModel,
      data,
      model,
    };
  },
};`}}const $={name:"PageMultiselectOrderedChange",components:{AlohaExample:S,AMultiselectOrdered:I},setup(){const e=[{value:"aloha_1",label:"Aloha 1"},{value:"aloha_2",label:"Aloha 2"},{value:"aloha_3",label:"Aloha 3"},{value:"aloha_4",label:"Aloha 4"}],a=u(["aloha_4","aloha_2"]),t=({model:i,id:d,props:n})=>{a.value=i,console.log(d,n)},{codeHtml:_}=H(),{codeJs:s}=k();return{changeModel:t,codeHtml:_,codeJs:s,data:e,model:a}}};function V(e,a,t,_,s,i){const d=l("a-multiselect-ordered"),n=l("aloha-example");return p(),E(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CHANGE_HEADER_",description:"_A_UI_GROUP_CHANGE_DESCRIPTION_",props:["change","model-value"]},{default:m(()=>[o(d,{change:e.changeModel,"model-value":e.model,data:e.data,"key-id":"value","key-label":"label",label:"Select"},null,8,["change","model-value","data"]),P("div",null,"model: "+A(e.model),1)]),_:1},8,["code-html","code-js"])}const j=c($,[["render",V]]);function J(){return{codeHtml:`<a-multiselect-ordered
  v-model="model"
  :data="data"
  errors="Aloha"
  key-id="value"
  key-label="label"
  label="Select"
></a-multiselect-ordered>`}}function G(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AMultiselectOrdered,
} from "aloha-vue";
    
export default {
  name: "PageMultiselectOrderedErrors",
  components: {
    AMultiselectOrdered,
  },
  setup() {
    const data = [
      {
        value: "aloha_1",
        label: "Aloha 1",
      },
      {
        value: "aloha_2",
        label: "Aloha 2",
      },
      {
        value: "aloha_3",
        label: "Aloha 3",
      },
      {
        value: "aloha_4",
        label: "Aloha 4",
      },
    ];
    const model = ref(["aloha_4", "aloha_2"]);
    
    return {
      data,
      model,
    };
  },
};`}}const Y={name:"PageMultiselectOrderedErrors",components:{AlohaExample:S,AMultiselectOrdered:I},setup(){const e=[{value:"aloha_1",label:"Aloha 1"},{value:"aloha_2",label:"Aloha 2"},{value:"aloha_3",label:"Aloha 3"},{value:"aloha_4",label:"Aloha 4"}],a=u(["aloha_4","aloha_2"]),{codeHtml:t}=J(),{codeJs:_}=G();return{codeHtml:t,codeJs:_,data:e,model:a}}};function F(e,a,t,_,s,i){const d=l("a-multiselect-ordered"),n=l("aloha-example");return p(),E(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERRORS_HEADER_",description:"_A_UI_GROUP_ERRORS_DESCRIPTION_",props:["errors"]},{default:m(()=>[o(d,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=r=>e.model=r),data:e.data,errors:"Aloha","key-id":"value","key-label":"label",label:"Select"},null,8,["modelValue","data"])]),_:1},8,["code-html","code-js"])}const K=c(Y,[["render",F]]);function X(){return{codeHtml:`<a-multiselect-ordered
  v-model="model"
  :data="data"
  help-text="Aloha"
  key-id="value"
  key-label="label"
  label="Select"
></a-multiselect-ordered>`}}function w(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AMultiselectOrdered,
} from "aloha-vue";
    
export default {
  name: "PageMultiselectOrderedHelpText",
  components: {
    AMultiselectOrdered,
  },
  setup() {
    const data = [
      {
        value: "aloha_1",
        label: "Aloha 1",
      },
      {
        value: "aloha_2",
        label: "Aloha 2",
      },
      {
        value: "aloha_3",
        label: "Aloha 3",
      },
      {
        value: "aloha_4",
        label: "Aloha 4",
      },
    ];
    const model = ref(["aloha_4", "aloha_2"]);
    
    return {
      data,
      model,
    };
  },
};`}}const W={name:"PageMultiselectOrderedHelpText",components:{AlohaExample:S,AMultiselectOrdered:I},setup(){const e=[{value:"aloha_1",label:"Aloha 1"},{value:"aloha_2",label:"Aloha 2"},{value:"aloha_3",label:"Aloha 3"},{value:"aloha_4",label:"Aloha 4"}],a=u(["aloha_4","aloha_2"]),{codeHtml:t}=X(),{codeJs:_}=w();return{codeHtml:t,codeJs:_,data:e,model:a}}};function x(e,a,t,_,s,i){const d=l("a-multiselect-ordered"),n=l("aloha-example");return p(),E(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_HELP_TEXT_HEADER_",description:"_A_UI_GROUP_HELP_TEXT_DESCRIPTION_",props:["help-text"]},{default:m(()=>[o(d,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=r=>e.model=r),data:e.data,"help-text":"Aloha","key-id":"value","key-label":"label",label:"Select"},null,8,["modelValue","data"])]),_:1},8,["code-html","code-js"])}const Q=c(W,[["render",x]]);function Z(){return{codeHtml:`<a-multiselect-ordered
  v-model="model1"
  :data="data"
  :readonly="true"
  key-id="value"
  key-label="label"
  label="Select 1"
></a-multiselect-ordered>
<a-multiselect-ordered
  v-model="model2"
  :data="data"
  :readonly="true"
  class="a_mt_3"
  key-id="value"
  key-label="label"
  label="Select 2"
></a-multiselect-ordered>
<a-multiselect-ordered
  v-model="model2"
  :data="data"
  :readonly="true"
  class="a_mt_3"
  key-id="value"
  key-label="label"
  label="Select 3"
  readonly-default="-"
></a-multiselect-ordered>`}}function z(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AMultiselectOrdered,
} from "aloha-vue";
    
export default {
  name: "PageMultiselectOrderedReadonly",
  components: {
    AMultiselectOrdered,
  },
  setup() {
    const data = [
      {
        value: "aloha_1",
        label: "Aloha 1",
      },
      {
        value: "aloha_2",
        label: "Aloha 2",
      },
      {
        value: "aloha_3",
        label: "Aloha 3",
      },
      {
        value: "aloha_4",
        label: "Aloha 4",
      },
    ];
    const model1 = ref(["aloha_4", "aloha_2"]);
    const model2 = ref(undefined);
    
    return {
      data,
      model1,
      model2,
    };
  },
};`}}const ee={name:"PageMultiselectOrderedReadonly",components:{AlohaExample:S,AMultiselectOrdered:I},setup(){const e=[{value:"aloha_1",label:"Aloha 1"},{value:"aloha_2",label:"Aloha 2"},{value:"aloha_3",label:"Aloha 3"},{value:"aloha_4",label:"Aloha 4"}],a=u(["aloha_4","aloha_2"]),t=u(void 0),{codeHtml:_}=Z(),{codeJs:s}=z();return{codeHtml:_,codeJs:s,data:e,model1:a,model2:t}}};function ae(e,a,t,_,s,i){const d=l("a-multiselect-ordered"),n=l("aloha-example");return p(),E(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default"]},{default:m(()=>[o(d,{modelValue:e.model1,"onUpdate:modelValue":a[0]||(a[0]=r=>e.model1=r),data:e.data,readonly:!0,"key-id":"value","key-label":"label",label:"Select 1"},null,8,["modelValue","data"]),o(d,{class:"a_mt_3",modelValue:e.model2,"onUpdate:modelValue":a[1]||(a[1]=r=>e.model2=r),data:e.data,readonly:!0,"key-id":"value","key-label":"label",label:"Select 2"},null,8,["modelValue","data"]),o(d,{class:"a_mt_3",modelValue:e.model2,"onUpdate:modelValue":a[2]||(a[2]=r=>e.model2=r),data:e.data,readonly:!0,"key-id":"value","key-label":"label",label:"Select 3","readonly-default":"-"},null,8,["modelValue","data"])]),_:1},8,["code-html","code-js"])}const le=c(ee,[["render",ae]]);function te(){return{dataEvents:[{name:"on-search-outside",description:"_A_UI_EVENTS_ON_SEARCH_OUTSIDE_DESCRIPTION_",type:"Function"},{name:"update-data",description:"_A_UI_EVENTS_UPDATE_DATA_DESCRIPTION_",type:"Function"},{name:"toggle-collapse",description:"_A_UI_EVENTS_TOGGLE_COLLAPSE_DESCRIPTION_",type:"Function"},{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"}]}}function _e(){const e=R(()=>y({placeholder:"_A_MULTISELECT_ORDERED_COMPONENT_NAME_"}));return{pageTitle:R(()=>`AMultiselectOrdered${e.value?` (${e.value})`:""}`)}}function de(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"api-save-id",description:"_A_UI_PROPS_API_SAVE_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"btn-delete-class",description:"_A_MULTISELECT_ORDERED_PROPS_BTN_DELETE_CLASS_DESCRIPTION_",type:"String / Object",default:"a_btn a_btn_primary",required:!1},{name:"btn-delete-icon",description:"_A_MULTISELECT_ORDERED_PROPS_BTN_DELETE_ICON_DESCRIPTION_",type:"String",default:"Trash",required:!1},{name:"btn-delete-title",description:"_A_MULTISELECT_ORDERED_PROPS_BTN_DELETE_TITLE_DESCRIPTION_",type:"String",default:"_A_MULTISELECT_ORDERED_BTN_DELETE_",required:!1},{name:"btn-down-class",description:"_A_MULTISELECT_ORDERED_PROPS_BTN_DOWN_CLASS_DESCRIPTION_",type:"String / Object",default:"a_btn a_btn_outline_secondary",required:!1},{name:"btn-down-icon",description:"_A_MULTISELECT_ORDERED_PROPS_BTN_DOWN_ICON_DESCRIPTION_",type:"String",default:"ChevronDown",required:!1},{name:"btn-down-title",description:"_A_MULTISELECT_ORDERED_PROPS_BTN_DOWN_TITLE_DESCRIPTION_",type:"String",default:"_A_MULTISELECT_ORDERED_BTN_DOWN_",required:!1},{name:"btn-group-aria-label",description:"_A_MULTISELECT_ORDERED_PROPS_BTN_GROUP_ARIA_LABEL_DESCRIPTION_",type:"String",default:"_A_MULTISELECT_ORDERED_BTN_GROUP_ARIA_LABEL_",required:!1},{name:"btn-group-class",description:"_A_MULTISELECT_ORDERED_PROPS_BTN_GROUP_CLASS_DESCRIPTION_",type:"String",default:"a_btn_group",required:!1},{name:"btn-up-class",description:"_A_MULTISELECT_ORDERED_PROPS_BTN_UP_CLASS_DESCRIPTION_",type:"String / Object",default:"a_btn a_btn_outline_secondary",required:!1},{name:"btn-up-icon",description:"_A_MULTISELECT_ORDERED_PROPS_BTN_UP_ICON_DESCRIPTION_",type:"String",default:"ChevronUp",required:!1},{name:"btn-up-title",description:"_A_MULTISELECT_ORDERED_PROPS_BTN_UP_TITLE_DESCRIPTION_",type:"String",default:"_A_MULTISELECT_ORDERED_BTN_UP_",required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"class-fieldset",description:"_A_UI_PROPS_CLASS_FIELDSET_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"class-fieldset",description:"_A_UI_PROPS_CLASS_FIELDSET_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"data",description:"_A_UI_PROPS_DATA_DESCRIPTION_",type:"Array",default:void 0,required:!1},{name:"data-extra",description:"_A_UI_PROPS_DATA_EXTRA_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"has-border",description:"_A_UI_PROPS_HAS_BORDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_m_select_ordered_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-data-simple-array",description:"_A_UI_PROPS_IS_DATA_SIMPLE_ARRAY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-select-all",description:"_A_UI_PROPS_IS_SELECT_ALL_DESCRIPTION_",type:"String",default:!1,required:!1},{name:"key-disabled",description:"_A_UI_PROPS_KEY_DISABLED_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"key-disabled-callback",description:"_A_UI_PROPS_KEY_DISABLED_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"key-group",description:"_A_UI_PROPS_KEY_GROUP_DESCRIPTION_",type:"String / Number / Array",default:void 0,required:!1},{name:"key-group-label-callback",description:"_A_UI_PROPS_KEY_GROUP_LABEL_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"key-id",description:"_A_UI_PROPS_KEY_ID_DESCRIPTION_",type:"String",default:"value",required:!1},{name:"key-label",description:"_A_UI_PROPS_KEY_LABEL_DESCRIPTION_",type:"String",default:"label",required:!1},{name:"key-label-callback",description:"_A_UI_PROPS_KEY_LABEL_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"list-item-class",description:"_A_MULTISELECT_ORDERED_PROPS_LIST_ITEM_CLASS_DESCRIPTION_",type:"String / Object / Array",default:"a_list_group__item",required:!1},{name:"loading",description:"_A_UI_PROPS_LOADING_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"Array",default:void 0,required:!1},{name:"options",description:"_A_UI_PROPS_OPTIONS_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"readonly",description:"_A_UI_PROPS_READONLY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"readonly-default",description:"_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_",type:"String",default:"",required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search",description:"_A_UI_PROPS_SEARCH_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search-api",description:"_A_UI_PROPS_SEARCH_API_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search-api-key",description:"_A_UI_PROPS_SEARCH_API_KEY_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"search-in-group",description:"_A_UI_PROPS_SEARCH_IN_GROUP_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search-outside",description:"_A_UI_PROPS_SEARCH_OUTSIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search-timeout",description:"_A_UI_PROPS_SEARCH_TIMEOUT_DESCRIPTION_",type:"Number",default:0,required:!1},{name:"select-button-class",description:"_A_SELECT_PROPS_BUTTON_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"select-button-class-default",description:"_A_SELECT_PROPS_BUTTON_CLASS_DEFAULT_DESCRIPTION_",type:"String / Object",default:"a_form_control a_select_toggle",required:!1},{name:"select-caret-icon",description:"_A_SELECT_PROPS_CARET_ICON_DESCRIPTION_",type:"String / Object",default:"ChevronDown",required:!1},{name:"select-has-caret",description:"_A_SELECT_PROPS_HAS_CARET_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"select-in-body",description:"_A_SELECT_PROPS_IN_BODY_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"select-is-close-by-click",description:"_A_SELECT_PROPS_IS_CLOSE_BY_CLICK_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"select-is-label-float",description:"_A_SELECT_PROPS_IS_LABEL_FLOAT_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"select-is-selection-closeable",description:"_A_SELECT_PROPS_IS_SELECTION_CLOSEABLE_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"select-label",description:"_A_SELECT_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:"_A_MULTISELECT_ORDERED_LABEL_SELECT_",required:!1},{name:"select-label-class",description:"_A_SELECT_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"select-label-screenreader",description:"_A_SELECT_PROPS_LABEL_SCREENREADER_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"select-menu-class",description:"_A_SELECT_PROPS_MENU_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"select-menu-width-type",description:"_A_SELECT_PROPS_MENU_WIDTH_TYPE_DESCRIPTION_",type:"String",default:"as_button",required:!1},{name:"select-placeholder",description:"_A_SELECT_PROPS_PLACEHOLDER_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"select-placement",description:"_A_SELECT_PROPS_PLACEMENT_DESCRIPTION_",type:"String",default:"bottom-end",required:!1},{name:"select-popper-container-id",description:"_A_SELECT_PROPS_POPPER_CONTAINER_ID_DESCRIPTION_",type:"String",default:"a_select_container",required:!1},{name:"slot-name",description:"_A_UI_PROPS_SLOT_NAME_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"sort-order",description:"_A_UI_PROPS_SORT_ORDER_DESCRIPTION_",type:"String",default:"asc",required:!1},{name:"sort-order-group",description:"_A_UI_PROPS_SORT_ORDER_GROUP_DESCRIPTION_",type:"String",default:"asc",required:!1},{name:"text-model-empty",description:"_A_MULTISELECT_ORDERED_PROPS_TEXT_MODEL_EMPTY_DESCRIPTION_",type:"String",default:"_A_MULTISELECT_ORDERED_MODEL_EMPTY_",required:!1},{name:"text-select-all",description:"_A_MULTISELECT_ORDERED_PROPS_TEXT_SELECT_ALL_DESCRIPTION_",type:"String",default:"_A_MULTISELECT_ORDERED_SELECT_ALL_",required:!1},{name:"translate-data",description:"_A_UI_PROPS_TRANSLATE_DATA_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"url",description:"_A_UI_PROPS_URL_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"url-params",description:"_A_UI_PROPS_URL_PARAMS_DESCRIPTION_",type:"Object",default:void 0,required:!1}]}}function oe(){return{dataTranslate:["_A_MULTISELECT_ORDERED_BTN_DELETE_","_A_MULTISELECT_ORDERED_BTN_DOWN_","_A_MULTISELECT_ORDERED_BTN_GROUP_ARIA_LABEL_","_A_MULTISELECT_ORDERED_BTN_UP_","_A_MULTISELECT_ORDERED_LABEL_SELECT_","_A_MULTISELECT_ORDERED_MODEL_EMPTY_","_A_MULTISELECT_ORDERED_SELECT_ALL_"]}}const re={name:"PageMultiselectOrdered",components:{AlohaPage:h,AlohaTableProps:N,AlohaTableTranslate:b,ATranslation:U,PageMultiselectOrderedBasic:B,PageMultiselectOrderedChange:j,PageMultiselectOrderedErrors:K,PageMultiselectOrderedHelpText:Q,PageMultiselectOrderedReadonly:le},setup(){const{pageTitle:e}=_e(),{dataProps:a}=de(),{dataTranslate:t}=oe(),{dataEvents:_}=te();return{dataEvents:_,dataProps:a,dataTranslate:t,pageTitle:e}}};function ne(e,a,t,_,s,i){const d=l("a-translation"),n=l("page-multiselect-ordered-basic"),r=l("page-multiselect-ordered-change"),O=l("page-multiselect-ordered-help-text"),T=l("page-multiselect-ordered-errors"),f=l("page-multiselect-ordered-readonly"),D=l("aloha-table-props"),C=l("aloha-table-translate"),L=l("aloha-page");return p(),E(L,{"page-title":e.pageTitle},{body:m(()=>[o(d,{tag:"p",html:"_A_MULTISELECT_ORDERED_DESCRIPTION_"}),o(n),o(r),o(O),o(T),o(f),o(D,{data:e.dataProps},null,8,["data"]),o(C,{data:e.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const Le=c(re,[["render",ne]]);export{Le as default};
