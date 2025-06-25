import{A as U,a as I}from"./chunk.AlohaExample.DLehf_8H.js";import{A as V}from"./chunk.AlohaTableProps.CG-ExIuM.js";import{A as f}from"./chunk.AlohaTableTranslate.PATjLrxT.js";import{Z as u,_ as r,g as N,A as y}from"./bundle.index.Dsb3-Sd7.js";import{r as a,U as s,aS as C,e as S,V as i,Z as E,Y as d,aT as n,d as Y}from"./chunk.vendor.COYgx38y.js";import"./chunk.vendor-lodash.xyEKcfD7.js";import"./chunk.APageTabTitle.D6GsiyeY.js";import"./chunk.AlohaHighlightjs.CW1W2LCP.js";import"./chunk.ATable.B6I59_W6.js";import"./chunk.translations-ar.Ba3-jBbd.js";import"./chunk.translations-de.BkjBBp2O.js";import"./chunk.translations-en.BXMPX4Pv.js";import"./chunk.translations-es.C_lJjw9A.js";import"./chunk.translations-fr.Duvlphhj.js";import"./chunk.translations-hr.BcoPLaR6.js";import"./chunk.translations-it.B0l4u3QD.js";import"./chunk.translations-ru.BBvNAu0E.js";function D(){return{codeHtml:`<a-select-style
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
<div>model2: {{ model2 }}</div>`}}function G(){return{codeJs:`import {
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
};`}}const B={name:"PageSelectStyleBasic",components:{AlohaExample:U,ASelectStyle:u},setup(){const{codeHtml:_}=D(),{codeJs:e}=G(),T=a(void 0),t=a(void 0);return{codeHtml:_,codeJs:e,model1:T,model2:t}}};function M(_,e,T,t,o,c){const L=S("a-select-style"),l=S("aloha-example");return i(),s(l,{"code-html":_.codeHtml,"code-js":_.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","type"]},{default:C(()=>[E(L,{modelValue:_.model1,"onUpdate:modelValue":e[0]||(e[0]=A=>_.model1=A),label:"Select",type:"select"},null,8,["modelValue"]),d("div",null,"model1: "+n(_.model1),1),E(L,{class:"a_mt_3",modelValue:_.model2,"onUpdate:modelValue":e[1]||(e[1]=A=>_.model2=A),label:"Multiselect",type:"multiselect"},null,8,["modelValue"]),d("div",null,"model2: "+n(_.model2),1)]),_:1},8,["code-html","code-js"])}const g=r(B,[["render",M]]);function b(){return{codeHtml:`<a-select-style
  v-model="model1"
  :data-extended="dataExtended"
  :filter-groups="['display', 'color']"
  label="Select"
  type="select"
></a-select-style>
<div>model1: {{ model1 }}</div>`}}function F(){return{codeJs:`import {
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
};`}}const X={name:"PageSelectStyleDataExtended",components:{AlohaExample:U,ASelectStyle:u},setup(){const{codeHtml:_}=b(),{codeJs:e}=F(),T=[{label:"_A_SELECT_STYLES_VALUE_BG_ALOHA_",value:"a_bg_aloha",group:"background_color",groupName:"_A_SELECT_STYLES_GROUP_BACKGROUND_COLOR_"}],t=a(void 0);return{codeHtml:_,codeJs:e,dataExtended:T,model1:t}}};function q(_,e,T,t,o,c){const L=S("a-select-style"),l=S("aloha-example");return i(),s(l,{"code-html":_.codeHtml,"code-js":_.codeJs,header:"_A_SELECT_STYLE_GROUP_DATA_EXTENDED_HEADER_",description:"_A_SELECT_STYLE_GROUP_DATA_EXTENDED_DESCRIPTION_",props:["data-extended"]},{default:C(()=>[E(L,{modelValue:_.model1,"onUpdate:modelValue":e[0]||(e[0]=A=>_.model1=A),"data-extended":_.dataExtended,"filter-groups":["background_color"],label:"Select",type:"select"},null,8,["modelValue","data-extended"]),d("div",null,"model1: "+n(_.model1),1)]),_:1},8,["code-html","code-js"])}const H=r(X,[["render",q]]);function v(){return{codeHtml:`<a-select-style
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
<div>model2: {{ model2 }}</div>`}}function h(){return{codeJs:`import {
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
};`}}const $={name:"PageSelectStyleFilterGroups",components:{AlohaExample:U,ASelectStyle:u},setup(){const{codeHtml:_}=v(),{codeJs:e}=h(),T=a(void 0),t=a(void 0);return{codeHtml:_,codeJs:e,model1:T,model2:t}}};function J(_,e,T,t,o,c){const L=S("a-select-style"),l=S("aloha-example");return i(),s(l,{"code-html":_.codeHtml,"code-js":_.codeJs,header:"_A_SELECT_STYLE_GROUP_FILTER_GROUPS_HEADER_",description:"_A_SELECT_STYLE_GROUP_FILTER_GROUPS_DESCRIPTION_",props:["filter-groups"]},{default:C(()=>[E(L,{modelValue:_.model1,"onUpdate:modelValue":e[0]||(e[0]=A=>_.model1=A),"filter-groups":["display","color"],label:"Select",type:"select"},null,8,["modelValue"]),d("div",null,"model1: "+n(_.model1),1),E(L,{class:"a_mt_3",modelValue:_.model2,"onUpdate:modelValue":e[1]||(e[1]=A=>_.model2=A),"filter-groups":{flex:["align_items","justify_content"],background_color:!0},label:"Multiselect",type:"multiselect"},null,8,["modelValue"]),d("div",null,"model2: "+n(_.model2),1)]),_:1},8,["code-html","code-js"])}const K=r($,[["render",J]]);function W(){return{codeHtml:`<a-select-style
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
></a-select-style>`}}function j(){return{codeJs:`import {
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
};`}}const k={name:"PageSelectStyleReadonly",components:{AlohaExample:U,ASelectStyle:u},setup(){const{codeHtml:_}=W(),{codeJs:e}=j(),T=a("a_color_primary"),t=a(["a_d_flex","a_bg_secondary"]),o=a(void 0);return{codeHtml:_,codeJs:e,model1:T,model2:t,model3:o}}};function x(_,e,T,t,o,c){const L=S("a-select-style"),l=S("aloha-example");return i(),s(l,{"code-html":_.codeHtml,"code-js":_.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default"]},{default:C(()=>[E(L,{"model-value":_.model1,readonly:!0,label:"Select 1",type:"select"},null,8,["model-value"]),E(L,{class:"a_mt_3","model-value":_.model2,readonly:!0,label:"Select 2",type:"multiselect"},null,8,["model-value"]),E(L,{class:"a_mt_3","model-value":_.model3,readonly:!0,label:"Select 3",type:"select"},null,8,["model-value"]),E(L,{class:"a_mt_3","model-value":_.model3,readonly:!0,label:"Select 4",type:"multiselect"},null,8,["model-value"]),E(L,{class:"a_mt_3","model-value":_.model3,readonly:!0,"help-text":"Aloha",label:"Select 5","readonly-default":"-",type:"select"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const w=r(k,[["render",x]]);function Z(){return{dataEvents:[{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"},{name:"focus",description:"_A_UI_EVENTS_FOCUS_DESCRIPTION_",type:"Function"},{name:"blur",description:"_A_UI_EVENTS_BLUR_DESCRIPTION_",type:"Function"}]}}function Q(){const _=Y(()=>N({placeholder:"_A_SELECT_STYLE_COMPONENT_NAME_"}));return{pageTitle:Y(()=>`ASelectStyle${_.value?` (${_.value})`:""}`)}}function z(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"button-class",description:"_A_SELECT_PROPS_BUTTON_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"button-class-default",description:"_A_SELECT_PROPS_BUTTON_CLASS_DEFAULT_DESCRIPTION_",type:"String / Object",default:"a_form_control a_select_toggle",required:!1},{name:"caret-icon",description:"_A_SELECT_PROPS_CARET_ICON_DESCRIPTION_",type:"String / Object",default:"ChevronDown",required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"class",description:"_A_SELECT_PROPS_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"count-multiselect",description:"_A_SELECT_PROPS_COUNT_MULTISELECT_DESCRIPTION_",type:"Number",default:4,required:!1},{name:"data",description:"_A_UI_PROPS_DATA_DESCRIPTION_",type:"Array",default:void 0,required:!1},{name:"data-extended",description:"_A_SELECT_STYLE_PROPS_DATA_EXTENDED_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"deselectable",description:"_A_SELECT_PROPS_DESELECTABLE_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exceeded-items-deletable",description:"_A_SELECT_PROPS_EXCEEDED_ITEMS_DELETABLE_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"filter-groups",description:"_A_SELECT_STYLE_PROPS_FILTER_GROUPS_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"has-caret",description:"_A_SELECT_PROPS_HAS_CARET_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_select_styles_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"in-body",description:"_A_SELECT_PROPS_IN_BODY_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-close-by-click",description:"_A_SELECT_PROPS_IS_CLOSE_BY_CLICK_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-deselect-all",description:"_A_SELECT_PROPS_IS_DESELECT_ALL_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-label-float",description:"_A_UI_PROPS_IS_LABEL_FLOAT_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-select-all",description:"_A_SELECT_PROPS_IS_SELECT_ALL_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-selection-closeable",description:"_A_SELECT_PROPS_IS_SELECTION_CLOSEABLE_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"key-disabled",description:"_A_UI_PROPS_KEY_DISABLED_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"key-disabled-callback",description:"_A_UI_PROPS_KEY_DISABLED_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"key-group",description:"_A_UI_PROPS_KEY_GROUP_DESCRIPTION_",type:"String / Number / Array",default:'() => ["groupName", "subGroupName"]',required:!1},{name:"key-group-label-callback",description:"_A_UI_PROPS_KEY_GROUP_LABEL_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"key-id",description:"_A_UI_PROPS_KEY_ID_DESCRIPTION_",type:"String",default:"value",required:!1},{name:"key-label",description:"_A_UI_PROPS_KEY_LABEL_DESCRIPTION_",type:"String",default:"label",required:!1},{name:"key-label-callback",description:"_A_UI_PROPS_KEY_LABEL_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"key-title-callback",description:"_A_UI_PROPS_KEY_TITLE_CALLBACK_DESCRIPTION_",type:"Function",default:`({ item }) => getTranslatedText({
        placeholder: item.label,
      })`,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"max-count-multiselect",description:"_A_SELECT_PROPS_MAX_COUNT_MULTISELECT_DESCRIPTION_",type:"Number",default:void 0,required:!1},{name:"menu-width-type",description:"_A_SELECT_PROPS_MENU_WIDTH_TYPE_DESCRIPTION_",type:"String",default:"as_button",required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"Array",default:void 0,required:!1},{name:"options",description:"_A_UI_PROPS_OPTIONS_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"placeholder",description:"_A_UI_PROPS_PLACEHOLDER_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"placeholder",description:"_A_UI_PROPS_PLACEMENT_DESCRIPTION_",type:"String",default:"bottom-end",required:!1},{name:"popper-container-id",description:"_A_UI_PROPS_POPPER_CONTAINER_ID_DESCRIPTION_",type:"String",default:"a_select_container",required:!1},{name:"readonly",description:"_A_UI_PROPS_READONLY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"readonly-default",description:"_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_",type:"String",default:"",required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search",description:"_A_UI_PROPS_SEARCH_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search-timeout",description:"_A_UI_PROPS_SEARCH_TIMEOUT_DESCRIPTION_",type:"Number",default:0,required:!1},{name:"select-menu-class",description:"_A_SELECT_PROPS_SELECT_MENU_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"slot-name",description:"_A_UI_PROPS_SLOT_NAME_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"sort-order",description:"_A_UI_PROPS_SORT_ORDER_DESCRIPTION_",type:"String",default:"asc",required:!1},{name:"sort-order-group",description:"_A_UI_PROPS_SORT_ORDER_GROUP_DESCRIPTION_",type:"String",default:"asc",required:!1},{name:"text-deselect-all",description:"_A_SELECT_PROPS_TEXT_DESELECT_ALL_DESCRIPTION_",type:"String",default:"_A_SELECT_DESELECT_ALL_",required:!1},{name:"text-select-all",description:"_A_SELECT_PROPS_TEXT_SELECT_ALL_DESCRIPTION_",type:"String",default:"_A_SELECT_SELECT_ALL_",required:!1},{name:"type",description:"_A_SELECT_STYLE_PROPS_TYPE_DESCRIPTION_",type:"String",default:"select",required:!1}]}}function __(){return{dataTranslate:["_A_SELECT_STYLES_GROUP_DISPLAY_","_A_SELECT_STYLES_SUB_GROUP_MOBILE_","_A_SELECT_STYLES_SUB_GROUP_TABLET_","_A_SELECT_STYLES_SUB_GROUP_TOUCH_","_A_SELECT_STYLES_SUB_GROUP_DESKTOP_","_A_SELECT_STYLES_SUB_GROUP_WIDESCREEN_","_A_SELECT_STYLES_SUB_GROUP_FULLHD_","_A_SELECT_STYLES_SUB_GROUP_LARGE_","_A_SELECT_STYLES_GROUP_FLEX_","_A_SELECT_STYLES_SUB_GROUP_FLEX_DIRECTION_","_A_SELECT_STYLES_SUB_GROUP_JUSTIFY_CONTENT_","_A_SELECT_STYLES_SUB_GROUP_ALIGN_ITEMS_","_A_SELECT_STYLES_SUB_GROUP_ALIGN_SELF_","_A_SELECT_STYLES_SUB_GROUP_JUSTIFY_SELF_","_A_SELECT_STYLES_SUB_GROUP_FLEX_WRAP_","_A_SELECT_STYLES_SUB_GROUP_ALIGN_CONTENT_","_A_SELECT_STYLES_GROUP_TEXT_ALIGN_","_A_SELECT_STYLES_GROUP_TEXT_WRAPPING_","_A_SELECT_STYLES_GROUP_LINE_LIMITING_","_A_SELECT_STYLES_GROUP_TEXT_TRANSFORM_","_A_SELECT_STYLES_GROUP_FONT_WEIGHT_","_A_SELECT_STYLES_GROUP_LINE_HEIGHT_","_A_SELECT_STYLES_GROUP_FONT_SIZE_","_A_SELECT_STYLES_GROUP_MARGIN_","_A_SELECT_STYLES_GROUP_PADDING_","_A_SELECT_STYLES_GROUP_COLOR_","_A_SELECT_STYLES_GROUP_BACKGROUND_COLOR_","_A_SELECT_STYLES_VALUE_D_INLINE_","_A_SELECT_STYLES_VALUE_D_INLINE_BLOCK_","_A_SELECT_STYLES_VALUE_D_BLOCK_","_A_SELECT_STYLES_VALUE_D_FLEX_","_A_SELECT_STYLES_VALUE_D_INLINE_FLEX_","_A_SELECT_STYLES_VALUE_D_NONE_","_A_SELECT_STYLES_VALUE_FLEX_ROW_","_A_SELECT_STYLES_VALUE_FLEX_COLUMN_","_A_SELECT_STYLES_VALUE_FLEX_ROW_REVERSE_","_A_SELECT_STYLES_VALUE_FLEX_COLUMN_REVERSE_","_A_SELECT_STYLES_VALUE_JUSTIFY_CONTENT_START_","_A_SELECT_STYLES_VALUE_JUSTIFY_CONTENT_END_","_A_SELECT_STYLES_VALUE_JUSTIFY_CONTENT_CENTER_","_A_SELECT_STYLES_VALUE_JUSTIFY_CONTENT_BETWEEN_","_A_SELECT_STYLES_VALUE_JUSTIFY_CONTENT_AROUND_","_A_SELECT_STYLES_VALUE_JUSTIFY_CONTENT_EVENLY_","_A_SELECT_STYLES_VALUE_ALIGN_ITEMS_START_","_A_SELECT_STYLES_VALUE_ALIGN_ITEMS_END_","_A_SELECT_STYLES_VALUE_ALIGN_ITEMS_CENTER_","_A_SELECT_STYLES_VALUE_ALIGN_ITEMS_BASELINE_","_A_SELECT_STYLES_VALUE_ALIGN_ITEMS_STRETCH_","_A_SELECT_STYLES_VALUE_ALIGN_SELF_AUTO_","_A_SELECT_STYLES_VALUE_ALIGN_SELF_START_","_A_SELECT_STYLES_VALUE_ALIGN_SELF_END_","_A_SELECT_STYLES_VALUE_ALIGN_SELF_CENTER_","_A_SELECT_STYLES_VALUE_ALIGN_SELF_BASELINE_","_A_SELECT_STYLES_VALUE_ALIGN_SELF_STRETCH_","_A_SELECT_STYLES_VALUE_JUSTIFY_SELF_AUTO_","_A_SELECT_STYLES_VALUE_JUSTIFY_SELF_START_","_A_SELECT_STYLES_VALUE_JUSTIFY_SELF_END_","_A_SELECT_STYLES_VALUE_JUSTIFY_SELF_CENTER_","_A_SELECT_STYLES_VALUE_JUSTIFY_SELF_BASELINE_","_A_SELECT_STYLES_VALUE_JUSTIFY_SELF_STRETCH_","_A_SELECT_STYLES_VALUE_FLEX_WRAP_","_A_SELECT_STYLES_VALUE_FLEX_NOWRAP_","_A_SELECT_STYLES_VALUE_FLEX_WRAP_REVERSE_","_A_SELECT_STYLES_VALUE_ALIGN_CONTENT_START_","_A_SELECT_STYLES_VALUE_ALIGN_CONTENT_END_","_A_SELECT_STYLES_VALUE_ALIGN_CONTENT_CENTER_","_A_SELECT_STYLES_VALUE_ALIGN_CONTENT_BETWEEN_","_A_SELECT_STYLES_VALUE_ALIGN_CONTENT_AROUND_","_A_SELECT_STYLES_VALUE_ALIGN_CONTENT_STRETCH_","_A_SELECT_STYLES_VALUE_TEXT_LEFT_","_A_SELECT_STYLES_VALUE_TEXT_CENTER_","_A_SELECT_STYLES_VALUE_TEXT_RIGHT_","_A_SELECT_STYLES_VALUE_TEXT_JUSTIFY_","_A_SELECT_STYLES_VALUE_TEXT_WRAP_","_A_SELECT_STYLES_VALUE_TEXT_NOWRAP_","_A_SELECT_STYLES_VALUE_TEXT_BREAK_","_A_SELECT_STYLES_VALUE_TEXT_WRAP_HYPHENS_","_A_SELECT_STYLES_VALUE_TEXT_TRUNCATE_","_A_SELECT_STYLES_VALUE_TEXT_CLAMP_","_A_SELECT_STYLES_VALUE_TEXT_CLAMP_2_","_A_SELECT_STYLES_VALUE_TEXT_CLAMP_3_","_A_SELECT_STYLES_VALUE_TEXT_CLAMP_4_","_A_SELECT_STYLES_VALUE_TEXT_CLAMP_5_","_A_SELECT_STYLES_VALUE_TEXT_LOWERCASE_","_A_SELECT_STYLES_VALUE_TEXT_UPPERCASE_","_A_SELECT_STYLES_VALUE_TEXT_CAPITALIZE_","_A_SELECT_STYLES_VALUE_TEXT_UNDERLINE_","_A_SELECT_STYLES_VALUE_TEXT_LINE_THROUGH_","_A_SELECT_STYLES_VALUE_TEXT_DECORATION_NONE_","_A_SELECT_STYLES_VALUE_TEXT_BOLD_","_A_SELECT_STYLES_VALUE_TEXT_BOLDER_","_A_SELECT_STYLES_VALUE_TEXT_SEMIBOLD_","_A_SELECT_STYLES_VALUE_TEXT_LIGHT_","_A_SELECT_STYLES_VALUE_TEXT_LIGHTER_","_A_SELECT_STYLES_VALUE_TEXT_ITALIC_","_A_SELECT_STYLES_VALUE_TEXT_NORMAL_","_A_SELECT_STYLES_VALUE_LINE_HEIGHT_1_","_A_SELECT_STYLES_VALUE_LINE_HEIGHT_SMALL_","_A_SELECT_STYLES_VALUE_LINE_HEIGHT_BASE_","_A_SELECT_STYLES_VALUE_LINE_HEIGHT_LARGE_","_A_SELECT_STYLES_VALUE_FS_1_","_A_SELECT_STYLES_VALUE_FS_2_","_A_SELECT_STYLES_VALUE_FS_3_","_A_SELECT_STYLES_VALUE_FS_4_","_A_SELECT_STYLES_VALUE_FS_5_","_A_SELECT_STYLES_VALUE_FS_6_","_A_SELECT_STYLES_VALUE_FS_7_","_A_SELECT_STYLES_VALUE_P_1_","_A_SELECT_STYLES_VALUE_PT_1_","_A_SELECT_STYLES_VALUE_PR_1_","_A_SELECT_STYLES_VALUE_PB_1_","_A_SELECT_STYLES_VALUE_PL_1_","_A_SELECT_STYLES_VALUE_PX_1_","_A_SELECT_STYLES_VALUE_PY_1_","_A_SELECT_STYLES_VALUE_P_2_","_A_SELECT_STYLES_VALUE_PT_2_","_A_SELECT_STYLES_VALUE_PR_2_","_A_SELECT_STYLES_VALUE_PB_2_","_A_SELECT_STYLES_VALUE_PL_2_","_A_SELECT_STYLES_VALUE_PX_2_","_A_SELECT_STYLES_VALUE_PY_2_","_A_SELECT_STYLES_VALUE_P_3_","_A_SELECT_STYLES_VALUE_PT_3_","_A_SELECT_STYLES_VALUE_PR_3_","_A_SELECT_STYLES_VALUE_PB_3_","_A_SELECT_STYLES_VALUE_PL_3_","_A_SELECT_STYLES_VALUE_PX_3_","_A_SELECT_STYLES_VALUE_PY_3_","_A_SELECT_STYLES_VALUE_P_4_","_A_SELECT_STYLES_VALUE_PT_4_","_A_SELECT_STYLES_VALUE_PR_4_","_A_SELECT_STYLES_VALUE_PB_4_","_A_SELECT_STYLES_VALUE_PL_4_","_A_SELECT_STYLES_VALUE_PX_4_","_A_SELECT_STYLES_VALUE_PY_4_","_A_SELECT_STYLES_VALUE_P_5_","_A_SELECT_STYLES_VALUE_PT_5_","_A_SELECT_STYLES_VALUE_PR_5_","_A_SELECT_STYLES_VALUE_PB_5_","_A_SELECT_STYLES_VALUE_PL_5_","_A_SELECT_STYLES_VALUE_PX_5_","_A_SELECT_STYLES_VALUE_PY_5_","_A_SELECT_STYLES_VALUE_P_6_","_A_SELECT_STYLES_VALUE_PT_6_","_A_SELECT_STYLES_VALUE_PR_6_","_A_SELECT_STYLES_VALUE_PB_6_","_A_SELECT_STYLES_VALUE_PL_6_","_A_SELECT_STYLES_VALUE_PX_6_","_A_SELECT_STYLES_VALUE_PY_6_","_A_SELECT_STYLES_VALUE_P_AUTO_","_A_SELECT_STYLES_VALUE_PT_AUTO_","_A_SELECT_STYLES_VALUE_PR_AUTO_","_A_SELECT_STYLES_VALUE_PB_AUTO_","_A_SELECT_STYLES_VALUE_PL_AUTO_","_A_SELECT_STYLES_VALUE_PX_AUTO_","_A_SELECT_STYLES_VALUE_PY_AUTO_","_A_SELECT_STYLES_VALUE_P_0_","_A_SELECT_STYLES_VALUE_PT_0_","_A_SELECT_STYLES_VALUE_PR_0_","_A_SELECT_STYLES_VALUE_PB_0_","_A_SELECT_STYLES_VALUE_PL_0_","_A_SELECT_STYLES_VALUE_PX_0_","_A_SELECT_STYLES_VALUE_PY_0_","_A_SELECT_STYLES_VALUE_M_1_","_A_SELECT_STYLES_VALUE_MT_1_","_A_SELECT_STYLES_VALUE_MR_1_","_A_SELECT_STYLES_VALUE_MB_1_","_A_SELECT_STYLES_VALUE_ML_1_","_A_SELECT_STYLES_VALUE_MX_1_","_A_SELECT_STYLES_VALUE_MY_1_","_A_SELECT_STYLES_VALUE_M_2_","_A_SELECT_STYLES_VALUE_MT_2_","_A_SELECT_STYLES_VALUE_MR_2_","_A_SELECT_STYLES_VALUE_MB_2_","_A_SELECT_STYLES_VALUE_ML_2_","_A_SELECT_STYLES_VALUE_MX_2_","_A_SELECT_STYLES_VALUE_MY_2_","_A_SELECT_STYLES_VALUE_M_3_","_A_SELECT_STYLES_VALUE_MT_3_","_A_SELECT_STYLES_VALUE_MR_3_","_A_SELECT_STYLES_VALUE_MB_3_","_A_SELECT_STYLES_VALUE_ML_3_","_A_SELECT_STYLES_VALUE_MX_3_","_A_SELECT_STYLES_VALUE_MY_3_","_A_SELECT_STYLES_VALUE_M_4_","_A_SELECT_STYLES_VALUE_MT_4_","_A_SELECT_STYLES_VALUE_MR_4_","_A_SELECT_STYLES_VALUE_MB_4_","_A_SELECT_STYLES_VALUE_ML_4_","_A_SELECT_STYLES_VALUE_MX_4_","_A_SELECT_STYLES_VALUE_MY_4_","_A_SELECT_STYLES_VALUE_M_5_","_A_SELECT_STYLES_VALUE_MT_5_","_A_SELECT_STYLES_VALUE_MR_5_","_A_SELECT_STYLES_VALUE_MB_5_","_A_SELECT_STYLES_VALUE_ML_5_","_A_SELECT_STYLES_VALUE_MX_5_","_A_SELECT_STYLES_VALUE_MY_5_","_A_SELECT_STYLES_VALUE_M_6_","_A_SELECT_STYLES_VALUE_MT_6_","_A_SELECT_STYLES_VALUE_MR_6_","_A_SELECT_STYLES_VALUE_MB_6_","_A_SELECT_STYLES_VALUE_ML_6_","_A_SELECT_STYLES_VALUE_MX_6_","_A_SELECT_STYLES_VALUE_MY_6_","_A_SELECT_STYLES_VALUE_M_AUTO_","_A_SELECT_STYLES_VALUE_MT_AUTO_","_A_SELECT_STYLES_VALUE_MR_AUTO_","_A_SELECT_STYLES_VALUE_MB_AUTO_","_A_SELECT_STYLES_VALUE_ML_AUTO_","_A_SELECT_STYLES_VALUE_MX_AUTO_","_A_SELECT_STYLES_VALUE_MY_AUTO_","_A_SELECT_STYLES_VALUE_M_0_","_A_SELECT_STYLES_VALUE_MT_0_","_A_SELECT_STYLES_VALUE_MR_0_","_A_SELECT_STYLES_VALUE_MB_0_","_A_SELECT_STYLES_VALUE_ML_0_","_A_SELECT_STYLES_VALUE_MX_0_","_A_SELECT_STYLES_VALUE_MY_0_","_A_SELECT_STYLES_VALUE_COLOR_PRIMARY_","_A_SELECT_STYLES_VALUE_COLOR_SECONDARY_","_A_SELECT_STYLES_VALUE_COLOR_TERTIARY_","_A_SELECT_STYLES_VALUE_COLOR_TEXT_","_A_SELECT_STYLES_VALUE_COLOR_INFO_","_A_SELECT_STYLES_VALUE_COLOR_SUCCESS_","_A_SELECT_STYLES_VALUE_COLOR_WARNING_","_A_SELECT_STYLES_VALUE_COLOR_DANGER_","_A_SELECT_STYLES_VALUE_COLOR_LINK_","_A_SELECT_STYLES_VALUE_COLOR_WHITE_","_A_SELECT_STYLES_VALUE_COLOR_BLACK_","_A_SELECT_STYLES_VALUE_COLOR_GRAY_100_","_A_SELECT_STYLES_VALUE_COLOR_GRAY_200_","_A_SELECT_STYLES_VALUE_COLOR_GRAY_300_","_A_SELECT_STYLES_VALUE_COLOR_GRAY_400_","_A_SELECT_STYLES_VALUE_COLOR_GRAY_500_","_A_SELECT_STYLES_VALUE_COLOR_GRAY_600_","_A_SELECT_STYLES_VALUE_COLOR_GRAY_700_","_A_SELECT_STYLES_VALUE_COLOR_GRAY_800_","_A_SELECT_STYLES_VALUE_COLOR_GRAY_900_","_A_SELECT_STYLES_VALUE_COLOR_TRANSPARENT_","_A_SELECT_STYLES_VALUE_BG_PRIMARY_","_A_SELECT_STYLES_VALUE_BG_SECONDARY_","_A_SELECT_STYLES_VALUE_BG_TERTIARY_","_A_SELECT_STYLES_VALUE_BG_TEXT_","_A_SELECT_STYLES_VALUE_BG_INFO_","_A_SELECT_STYLES_VALUE_BG_SUCCESS_","_A_SELECT_STYLES_VALUE_BG_WARNING_","_A_SELECT_STYLES_VALUE_BG_DANGER_","_A_SELECT_STYLES_VALUE_BG_LINK_","_A_SELECT_STYLES_VALUE_BG_WHITE_","_A_SELECT_STYLES_VALUE_BG_BLACK_","_A_SELECT_STYLES_VALUE_BG_GRAY_100_","_A_SELECT_STYLES_VALUE_BG_GRAY_200_","_A_SELECT_STYLES_VALUE_BG_GRAY_300_","_A_SELECT_STYLES_VALUE_BG_GRAY_400_","_A_SELECT_STYLES_VALUE_BG_GRAY_500_","_A_SELECT_STYLES_VALUE_BG_GRAY_600_","_A_SELECT_STYLES_VALUE_BG_GRAY_700_","_A_SELECT_STYLES_VALUE_BG_GRAY_800_","_A_SELECT_STYLES_VALUE_BG_GRAY_900_","_A_SELECT_STYLES_VALUE_BG_TRANSPARENT_"]}}const e_={name:"PageSelectStyle",components:{AlohaPage:I,AlohaTableProps:V,AlohaTableTranslate:f,ATranslation:y,PageSelectStyleBasic:g,PageSelectStyleDataExtended:H,PageSelectStyleFilterGroups:K,PageSelectStyleReadonly:w},setup(){const{pageTitle:_}=Q(),{dataProps:e}=z(),{dataTranslate:T}=__(),{dataEvents:t}=Z();return{dataEvents:t,dataProps:e,dataTranslate:T,pageTitle:_}}};function E_(_,e,T,t,o,c){const L=S("a-translation"),l=S("page-select-style-basic"),A=S("page-select-style-filter-groups"),R=S("page-select-style-data-extended"),m=S("page-select-style-readonly"),P=S("aloha-table-props"),p=S("aloha-table-translate"),O=S("aloha-page");return i(),s(O,{"page-title":_.pageTitle},{body:C(()=>[E(L,{tag:"p",html:"_A_SELECT_STYLE_COMPONENT_DESCRIPTION_"}),E(l),E(A),E(R),E(m),E(P,{data:_.dataProps},null,8,["data"]),E(P,{"table-label":"Events",data:_.dataEvents,columns:["name","type","description"]},null,8,["data"]),E(p,{data:_.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const P_=r(e_,[["render",E_]]);export{P_ as default};
