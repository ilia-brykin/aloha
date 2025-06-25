import{A as f,a as C}from"./chunk.AlohaExample.CIA6MZWW.js";import{A as L}from"./chunk.AlohaTableProps.Cxz9ilWn.js";import{Z as I,_ as m,g as D,A as N}from"./bundle.index.CNwRIZDd.js";import{r as s,U as p,aS as S,e as _,V as E,Z as l,Y as c,aT as u,d as A}from"./chunk.vendor.COYgx38y.js";import"./chunk.vendor-lodash.xyEKcfD7.js";import"./chunk.APageTabTitle.CTgdS-Fo.js";import"./chunk.AlohaHighlightjs.CW1W2LCP.js";import"./chunk.ATable.DEyA8NFa.js";import"./chunk.translations-ar.Ba3-jBbd.js";import"./chunk.translations-de.BkjBBp2O.js";import"./chunk.translations-en.BXMPX4Pv.js";import"./chunk.translations-es.C_lJjw9A.js";import"./chunk.translations-fr.Duvlphhj.js";import"./chunk.translations-hr.BcoPLaR6.js";import"./chunk.translations-it.B0l4u3QD.js";import"./chunk.translations-ru.BBvNAu0E.js";function g(){return{codeHtml:`<a-select-style
  v-model="model1"
  label="Select"
  type="select"
></a-select-style>
<div>model1: {{ model1 }}</div>
<a-select-style
  v-model="model2"
  class="a_mt_3"
  label="Multiselect"
  type="multiselect"
></a-select-style>
<div>model2: {{ model2 }}</div>`}}function b(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelectStyle,
} from "aloha-vue";
    
export default {
  name: "PageSelectStyleBasic",
  components: {
    ASelectStyle,
  },
  setup() {
    const model1 = ref(undefined);
    const model2 = ref(undefined);

    return {
      model1,
      model2,
    };
  },
};`}}const U={name:"PageSelectStyleBasic",components:{AlohaExample:f,ASelectStyle:I},setup(){const{codeHtml:e}=g(),{codeJs:t}=b(),o=s(void 0),d=s(void 0);return{codeHtml:e,codeJs:t,model1:o,model2:d}}};function q(e,t,o,d,i,P){const a=_("a-select-style"),r=_("aloha-example");return E(),p(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","type"]},{default:S(()=>[l(a,{modelValue:e.model1,"onUpdate:modelValue":t[0]||(t[0]=n=>e.model1=n),label:"Select",type:"select"},null,8,["modelValue"]),c("div",null,"model1: "+u(e.model1),1),l(a,{class:"a_mt_3",modelValue:e.model2,"onUpdate:modelValue":t[1]||(t[1]=n=>e.model2=n),label:"Multiselect",type:"multiselect"},null,8,["modelValue"]),c("div",null,"model2: "+u(e.model2),1)]),_:1},8,["code-html","code-js"])}const v=m(U,[["render",q]]);function B(){return{codeHtml:`<a-select-style
  v-model="model1"
  :data-extended="dataExtended"
  :filter-groups="['display', 'color']"
  label="Select"
  type="select"
></a-select-style>
<div>model1: {{ model1 }}</div>`}}function h(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelectStyle,
} from "aloha-vue";
    
export default {
  name: "PageSelectStyleDataExtended",
  components: {
    ASelectStyle,
  },
  setup() {
    const dataExtended = [
      {
        label: "_A_SELECT_STYLES_VALUE_BG_ALOHA_",
        value: "a_bg_aloha",
        group: "background_color",
        groupName: "_A_SELECT_STYLES_GROUP_BACKGROUND_COLOR_",
      },
    ];
    const model1 = ref(undefined);

    return {
      dataExtended,
      model1,
    };
  },
};`}}const $={name:"PageSelectStyleDataExtended",components:{AlohaExample:f,ASelectStyle:I},setup(){const{codeHtml:e}=B(),{codeJs:t}=h(),o=[{label:"_A_SELECT_STYLES_VALUE_BG_ALOHA_",value:"a_bg_aloha",group:"background_color",groupName:"_A_SELECT_STYLES_GROUP_BACKGROUND_COLOR_"}],d=s(void 0);return{codeHtml:e,codeJs:t,dataExtended:o,model1:d}}};function H(e,t,o,d,i,P){const a=_("a-select-style"),r=_("aloha-example");return E(),p(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SELECT_STYLE_GROUP_DATA_EXTENDED_HEADER_",description:"_A_SELECT_STYLE_GROUP_DATA_EXTENDED_DESCRIPTION_",props:["data-extended"]},{default:S(()=>[l(a,{modelValue:e.model1,"onUpdate:modelValue":t[0]||(t[0]=n=>e.model1=n),"data-extended":e.dataExtended,"filter-groups":["background_color"],label:"Select",type:"select"},null,8,["modelValue","data-extended"]),c("div",null,"model1: "+u(e.model1),1)]),_:1},8,["code-html","code-js"])}const Y=m($,[["render",H]]);function G(){return{codeHtml:`<a-select-style
  v-model="model1"
  :filter-groups="['display', 'color']"
  label="Select"
  type="select"
></a-select-style>
<div>model1: {{ model1 }}</div>
<a-select-style
  v-model="model2"
  :filter-groups="{ flex: ['align_items', 'justify_content'], background_color: true}"
  class="a_mt_3"
  label="Multiselect"
  type="multiselect"
></a-select-style>
<div>model2: {{ model2 }}</div>`}}function V(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelectStyle,
} from "aloha-vue";
    
export default {
  name: "PageSelectStyleFilterGroups",
  components: {
    ASelectStyle,
  },
  setup() {
    const model1 = ref(undefined);
    const model2 = ref(undefined);

    return {
      model1,
      model2,
    };
  },
};`}}const x={name:"PageSelectStyleFilterGroups",components:{AlohaExample:f,ASelectStyle:I},setup(){const{codeHtml:e}=G(),{codeJs:t}=V(),o=s(void 0),d=s(void 0);return{codeHtml:e,codeJs:t,model1:o,model2:d}}};function j(e,t,o,d,i,P){const a=_("a-select-style"),r=_("aloha-example");return E(),p(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SELECT_STYLE_GROUP_FILTER_GROUPS_HEADER_",description:"_A_SELECT_STYLE_GROUP_FILTER_GROUPS_DESCRIPTION_",props:["filter-groups"]},{default:S(()=>[l(a,{modelValue:e.model1,"onUpdate:modelValue":t[0]||(t[0]=n=>e.model1=n),"filter-groups":["display","color"],label:"Select",type:"select"},null,8,["modelValue"]),c("div",null,"model1: "+u(e.model1),1),l(a,{class:"a_mt_3",modelValue:e.model2,"onUpdate:modelValue":t[1]||(t[1]=n=>e.model2=n),"filter-groups":{flex:["align_items","justify_content"],background_color:!0},label:"Multiselect",type:"multiselect"},null,8,["modelValue"]),c("div",null,"model2: "+u(e.model2),1)]),_:1},8,["code-html","code-js"])}const k=m(x,[["render",j]]);function J(){return{codeHtml:`<a-select-style
  :model-value="model1"
  :readonly="true"
  label="Select 1"
  type="select"
></a-select-style>
<a-select-style
  :model-value="model2"
  :readonly="true"
  class="a_mt_3"
  label="Select 2"
  type="multiselect"
></a-select-style>
<a-select-style
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  label="Select 3"
  type="select"
></a-select-style>
<a-select-style
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  label="Select 4"
  type="multiselect"
></a-select-style>
<a-select-style
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  help-text="Aloha"
  label="Select 5"
  readonly-default="-"
  type="select"
></a-select-style>`}}function M(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelectStyle,
} from "aloha-vue";
    
export default {
  name: "PageSelectStyleReadonly",
  components: {
    ASelectStyle,
  },
  setup() {
    const model1 = ref("a_color_primary");
    const model2 = ref(["a_d_flex", "a_bg_secondary"]);
    const model3 = ref(undefined);

    return {
      model1,
      model2,
      model3,
    };
  },
};`}}const F={name:"PageSelectStyleReadonly",components:{AlohaExample:f,ASelectStyle:I},setup(){const{codeHtml:e}=J(),{codeJs:t}=M(),o=s("a_color_primary"),d=s(["a_d_flex","a_bg_secondary"]),i=s(void 0);return{codeHtml:e,codeJs:t,model1:o,model2:d,model3:i}}};function K(e,t,o,d,i,P){const a=_("a-select-style"),r=_("aloha-example");return E(),p(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default"]},{default:S(()=>[l(a,{"model-value":e.model1,readonly:!0,label:"Select 1",type:"select"},null,8,["model-value"]),l(a,{class:"a_mt_3","model-value":e.model2,readonly:!0,label:"Select 2",type:"multiselect"},null,8,["model-value"]),l(a,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"Select 3",type:"select"},null,8,["model-value"]),l(a,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"Select 4",type:"multiselect"},null,8,["model-value"]),l(a,{class:"a_mt_3","model-value":e.model3,readonly:!0,"help-text":"Aloha",label:"Select 5","readonly-default":"-",type:"select"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const X=m(F,[["render",K]]);function w(){return{dataEvents:[{name:"close",description:"_A_ALERT_EVENTS_CLOSE_DESCRIPTION_",type:"Function"}]}}function W(){const e=A(()=>D({placeholder:"_A_SELECT_STYLE_COMPONENT_NAME_"}));return{pageTitle:A(()=>`ASelectStyle${e.value?` (${e.value})`:""}`)}}function Z(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"button-class",description:"_A_SELECT_PROPS_BUTTON_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"button-class-default",description:"_A_SELECT_PROPS_BUTTON_CLASS_DEFAULT_DESCRIPTION_",type:"String / Object",default:"a_form_control a_select_toggle",required:!1},{name:"caret-icon",description:"_A_SELECT_PROPS_CARET_ICON_DESCRIPTION_",type:"String / Object",default:"ChevronDown",required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"class",description:"_A_SELECT_PROPS_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"count-multiselect",description:"_A_SELECT_PROPS_COUNT_MULTISELECT_DESCRIPTION_",type:"Number",default:4,required:!1},{name:"data",description:"_A_UI_PROPS_DATA_DESCRIPTION_",type:"Array",default:void 0,required:!1},{name:"data-extended",description:"_A_SELECT_STYLE_PROPS_DATA_EXTENDED_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"deselectable",description:"_A_SELECT_PROPS_DESELECTABLE_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exceeded-items-deletable",description:"_A_SELECT_PROPS_EXCEEDED_ITEMS_DELETABLE_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"filter-groups",description:"_A_SELECT_STYLE_PROPS_FILTER_GROUPS_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"has-caret",description:"_A_SELECT_PROPS_HAS_CARET_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_select_styles_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"in-body",description:"_A_SELECT_PROPS_IN_BODY_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-close-by-click",description:"_A_SELECT_PROPS_IS_CLOSE_BY_CLICK_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-deselect-all",description:"_A_SELECT_PROPS_IS_DESELECT_ALL_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-label-float",description:"_A_UI_PROPS_IS_LABEL_FLOAT_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-select-all",description:"_A_SELECT_PROPS_IS_SELECT_ALL_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-selection-closeable",description:"_A_SELECT_PROPS_IS_SELECTION_CLOSEABLE_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"key-disabled",description:"_A_UI_PROPS_KEY_DISABLED_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"key-disabled-callback",description:"_A_UI_PROPS_KEY_DISABLED_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"key-group",description:"_A_UI_PROPS_KEY_GROUP_DESCRIPTION_",type:"String / Number / Array",default:'() => ["groupName", "subGroupName"]',required:!1},{name:"key-group-label-callback",description:"_A_UI_PROPS_KEY_GROUP_LABEL_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"key-id",description:"_A_UI_PROPS_KEY_ID_DESCRIPTION_",type:"String",default:"value",required:!1},{name:"key-label",description:"_A_UI_PROPS_KEY_LABEL_DESCRIPTION_",type:"String",default:"label",required:!1},{name:"key-label-callback",description:"_A_UI_PROPS_KEY_LABEL_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"key-title-callback",description:"_A_UI_PROPS_KEY_TITLE_CALLBACK_DESCRIPTION_",type:"Function",default:`({ item }) => getTranslatedText({
        placeholder: item.label,
      })`,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"max-count-multiselect",description:"_A_SELECT_PROPS_MAX_COUNT_MULTISELECT_DESCRIPTION_",type:"Number",default:void 0,required:!1},{name:"menu-width-type",description:"_A_SELECT_PROPS_MENU_WIDTH_TYPE_DESCRIPTION_",type:"String",default:"as_button",required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"Array",default:void 0,required:!1},{name:"options",description:"_A_UI_PROPS_OPTIONS_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"placeholder",description:"_A_UI_PROPS_PLACEHOLDER_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"placeholder",description:"_A_UI_PROPS_PLACEMENT_DESCRIPTION_",type:"String",default:"bottom-end",required:!1},{name:"popper-container-id",description:"_A_UI_PROPS_POPPER_CONTAINER_ID_DESCRIPTION_",type:"String",default:"a_select_container",required:!1},{name:"readonly",description:"_A_UI_PROPS_READONLY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"readonly-default",description:"_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_",type:"String",default:"",required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search",description:"_A_UI_PROPS_SEARCH_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search-timeout",description:"_A_UI_PROPS_SEARCH_TIMEOUT_DESCRIPTION_",type:"Number",default:0,required:!1},{name:"select-menu-class",description:"_A_SELECT_PROPS_SELECT_MENU_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"slot-name",description:"_A_UI_PROPS_SLOT_NAME_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"sort-order",description:"_A_UI_PROPS_SORT_ORDER_DESCRIPTION_",type:"String",default:"asc",required:!1},{name:"sort-order-group",description:"_A_UI_PROPS_SORT_ORDER_GROUP_DESCRIPTION_",type:"String",default:"asc",required:!1},{name:"text-deselect-all",description:"_A_SELECT_PROPS_TEXT_DESELECT_ALL_DESCRIPTION_",type:"String",default:"_A_SELECT_DESELECT_ALL_",required:!1},{name:"text-select-all",description:"_A_SELECT_PROPS_TEXT_SELECT_ALL_DESCRIPTION_",type:"String",default:"_A_SELECT_SELECT_ALL_",required:!1},{name:"type",description:"_A_SELECT_STYLE_PROPS_TYPE_DESCRIPTION_",type:"String",default:"select",required:!1}]}}const Q={name:"PageSelectStyle",components:{AlohaPage:C,AlohaTableProps:L,ATranslation:N,PageSelectStyleBasic:v,PageSelectStyleDataExtended:Y,PageSelectStyleFilterGroups:k,PageSelectStyleReadonly:X},setup(){const{pageTitle:e}=W(),{dataProps:t}=Z(),{dataEvents:o}=w();return{dataEvents:o,dataProps:t,pageTitle:e}}};function z(e,t,o,d,i,P){const a=_("a-translation"),r=_("page-select-style-basic"),n=_("page-select-style-filter-groups"),y=_("page-select-style-data-extended"),O=_("page-select-style-readonly"),T=_("aloha-table-props"),R=_("aloha-page");return E(),p(R,{"page-title":e.pageTitle},{body:S(()=>[l(a,{tag:"p",html:"_A_SELECT_STYLE_COMPONENT_DESCRIPTION_"}),l(r),l(n),l(y),l(O),l(T,{data:e.dataProps},null,8,["data"])]),_:1},8,["page-title"])}const Ee=m(Q,[["render",z]]);export{Ee as default};
