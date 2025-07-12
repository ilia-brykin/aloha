import{A as m,a as N}from"./chunk.AlohaExample.mqgHAR20.js";import{A as y}from"./chunk.AlohaTableProps.DtyZj2AM.js";import{A as D}from"./chunk.AlohaTableTranslate.C-b3Zf5k.js";import{a0 as p,_ as r,g,A as G}from"./bundle.index.Dz4pr8dg.js";import{r as A,V as c,aT as s,e as E,W as i,_ as S,Z as C,aU as u,d as R}from"./chunk.vendor.BxCHGHAU.js";import"./chunk.vendor-lodash.BMPrua2s.js";import{A as B}from"./chunk.AList.Beub5WZM.js";import"./chunk.APageTabTitle.BbnxdnBK.js";import"./chunk.AlohaHighlightjs.B3F2oL8_.js";import"./chunk.ATable.BDwZCsTV.js";import"./chunk.translations-ar.D8MQqUIX.js";import"./chunk.translations-de.Cn_yzXHt.js";import"./chunk.translations-en.Cabsq1fv.js";import"./chunk.translations-es.CTtyunpM.js";import"./chunk.translations-fr.tpgV9obb.js";import"./chunk.translations-hr.v7YKJpdX.js";import"./chunk.translations-it.Dqw3KhB-.js";import"./chunk.translations-ru.Cm34nVPu.js";function b(){return{codeHtml:`<a-select-style
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
<div>model2: {{ model2 }}</div>`}}function M(){return{codeJs:`import {
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
};`}}const h={name:"PageSelectStyleBasic",components:{AlohaExample:m,ASelectStyle:p},setup(){const{codeHtml:_}=b(),{codeJs:e}=M(),l=A(void 0),T=A(void 0);return{codeHtml:_,codeJs:e,model1:l,model2:T}}};function H(_,e,l,T,a,n){const t=E("a-select-style"),L=E("aloha-example");return i(),c(L,{"code-html":_.codeHtml,"code-js":_.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","type"]},{default:s(()=>[S(t,{modelValue:_.model1,"onUpdate:modelValue":e[0]||(e[0]=o=>_.model1=o),label:"Select",type:"select"},null,8,["modelValue"]),C("div",null,"model1: "+u(_.model1),1),S(t,{class:"a_mt_3",modelValue:_.model2,"onUpdate:modelValue":e[1]||(e[1]=o=>_.model2=o),label:"Multiselect",type:"multiselect"},null,8,["modelValue"]),C("div",null,"model2: "+u(_.model2),1)]),_:1},8,["code-html","code-js"])}const v=r(h,[["render",H]]);function F(){return{codeHtml:`<a-select-style
  :change="changeModel1"
  :model-value="model1"
  label="Select 1"
></a-select-style>
<div>model1: {{ model1 }}</div>
<a-select-style
  :change="changeModel2"
  :model-value="model2"
  class="a_mt_3"
  label="Select 2"
  type="multiselect"
></a-select-style>
<div>model1: {{ model1 }}</div>`}}function X(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelectStyle,
} from "aloha-vue";
    
export default {
  name: "PageSelectStyleChange",
  components: {
    ASelectStyle,
  },
  setup() {
    const model1 = ref(undefined);
    const model2 = ref(undefined);

    const changeModel1 = ({ model: _model, id, props, item, currentModel }) => {
      model1.value = _model;
      console.log(id, props, item, currentModel);
    };
    const changeModel2 = ({ model: _model, id, props, item, currentModel }) => {
      model2.value = _model;
      console.log(id, props, item, currentModel);
    };
    
    return {
      changeModel1,
      changeModel2,
      model1,
      model2,
    };
  },
};`}}const q={name:"PageSelectStyleChange",components:{AlohaExample:m,ASelectStyle:p},setup(){const _=A(void 0),e=A(void 0),l=({model:t,id:L,props:o,item:d,currentModel:U})=>{_.value=t,console.log(L,o,d,U)},T=({model:t,id:L,props:o,item:d,currentModel:U})=>{e.value=t,console.log(L,o,d,U)},{codeHtml:a}=F(),{codeJs:n}=X();return{changeModel1:l,changeModel2:T,codeHtml:a,codeJs:n,model1:_,model2:e}}};function $(_,e,l,T,a,n){const t=E("a-select-style"),L=E("aloha-example");return i(),c(L,{"code-html":_.codeHtml,"code-js":_.codeJs,header:"_A_UI_GROUP_CHANGE_HEADER_",description:"_A_UI_GROUP_CHANGE_DESCRIPTION_",props:["change","model-value"]},{default:s(()=>[S(t,{change:_.changeModel1,"model-value":_.model1,label:"Select 1"},null,8,["change","model-value"]),C("div",null,"model1: "+u(_.model1),1),S(t,{class:"a_mt_3",change:_.changeModel2,"model-value":_.model2,label:"Select 2",type:"multiselect"},null,8,["change","model-value"]),C("div",null,"model2: "+u(_.model2),1)]),_:1},8,["code-html","code-js"])}const J=r(q,[["render",$]]);function j(){return{codeHtml:`<a-select-style
  v-model="model1"
  :data-extended="dataExtended"
  :filter-groups="['display', 'color']"
  label="Select"
  type="select"
></a-select-style>
<div>model1: {{ model1 }}</div>`}}function x(){return{codeJs:`import {
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
};`}}const K={name:"PageSelectStyleDataExtended",components:{AlohaExample:m,ASelectStyle:p},setup(){const{codeHtml:_}=j(),{codeJs:e}=x(),l=[{label:"_A_SELECT_STYLES_VALUE_BG_ALOHA_",value:"a_bg_aloha",group:"background_color",groupName:"_A_SELECT_STYLES_GROUP_BACKGROUND_COLOR_"}],T=A(void 0);return{codeHtml:_,codeJs:e,dataExtended:l,model1:T}}};function k(_,e,l,T,a,n){const t=E("a-select-style"),L=E("aloha-example");return i(),c(L,{"code-html":_.codeHtml,"code-js":_.codeJs,header:"_A_SELECT_STYLE_GROUP_DATA_EXTENDED_HEADER_",description:"_A_SELECT_STYLE_GROUP_DATA_EXTENDED_DESCRIPTION_",props:["data-extended"]},{default:s(()=>[S(t,{modelValue:_.model1,"onUpdate:modelValue":e[0]||(e[0]=o=>_.model1=o),"data-extended":_.dataExtended,"filter-groups":["background_color"],label:"Select",type:"select"},null,8,["modelValue","data-extended"]),C("div",null,"model1: "+u(_.model1),1)]),_:1},8,["code-html","code-js"])}const W=r(K,[["render",k]]);function w(){return{codeHtml:`<a-select-style
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
<div>model2: {{ model2 }}</div>`}}function Z(){return{codeJs:`import {
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
};`}}const z={name:"PageSelectStyleFilterGroups",components:{AList:B,AlohaExample:m,ASelectStyle:p},setup(){const{codeHtml:_}=w(),{codeJs:e}=Z(),l=[["display",["mobile","tablet","touch","desktop","widescreen","fullhd","large"]],["flex",["flex_direction","justify_content","align_items","align_self","justify_self","flex_wrap","align_content"]],["text_align",["mobile","tablet","touch","desktop","widescreen","fullhd","large"]],["button",["basic","outline","transparent","size"]],"text_wrapping","line_limiting","text_transform","font_weight","line_height","font_size","margin","padding","color","background_color"],T=A(void 0),a=A(void 0);return{codeHtml:_,codeJs:e,groups:l,model1:T,model2:a}}};function Q(_,e,l,T,a,n){const t=E("a-list"),L=E("a-select-style"),o=E("aloha-example");return i(),c(o,{"code-html":_.codeHtml,"code-js":_.codeJs,header:"_A_SELECT_STYLE_GROUP_FILTER_GROUPS_HEADER_",description:"_A_SELECT_STYLE_GROUP_FILTER_GROUPS_DESCRIPTION_",props:["filter-groups"]},{prepend:s(()=>[S(t,{data:_.groups,"is-data-simple-array":!0},null,8,["data"])]),default:s(()=>[S(L,{modelValue:_.model1,"onUpdate:modelValue":e[0]||(e[0]=d=>_.model1=d),"filter-groups":["display","color"],label:"Select",type:"select"},null,8,["modelValue"]),C("div",null,"model1: "+u(_.model1),1),S(L,{class:"a_mt_3",modelValue:_.model2,"onUpdate:modelValue":e[1]||(e[1]=d=>_.model2=d),"filter-groups":{flex:["align_items","justify_content"],background_color:!0},label:"Multiselect",type:"multiselect"},null,8,["modelValue"]),C("div",null,"model2: "+u(_.model2),1)]),_:1},8,["code-html","code-js"])}const __=r(z,[["render",Q]]);function e_(){return{codeHtml:`<a-select-style
  v-model="model"
  help-text="Aloha"
  label="Select"
></a-select-style>`}}function E_(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelectStyle,
} from "aloha-vue";
    
export default {
  name: "PageSelectStyleHelpText",
  components: {
    ASelectStyle,
  },
  setup() {
    const model = ref(undefined);
    
    return {
      model,
    };
  },
};`}}const S_={name:"PageSelectStyleHelpText",components:{AlohaExample:m,ASelectStyle:p},setup(){const _=A(void 0),{codeHtml:e}=e_(),{codeJs:l}=E_();return{codeHtml:e,codeJs:l,model:_}}};function t_(_,e,l,T,a,n){const t=E("a-select-style"),L=E("aloha-example");return i(),c(L,{"code-html":_.codeHtml,"code-js":_.codeJs,header:"_A_UI_GROUP_HELP_TEXT_HEADER_",description:"_A_UI_GROUP_HELP_TEXT_DESCRIPTION_",props:["help-text"]},{default:s(()=>[S(t,{modelValue:_.model,"onUpdate:modelValue":e[0]||(e[0]=o=>_.model=o),"help-text":"Aloha",label:"Select"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const l_=r(S_,[["render",t_]]);function L_(){return{codeHtml:`<a-select-style
  v-model="model"
  :is-label-float="false"
  label="Select"
  label-description="Aloha"
  type="select"
></a-select-style>`}}function T_(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelectStyle,
} from "aloha-vue";
    
export default {
  name: "PageSelectStyleLabelDescription",
  components: {
    ASelectStyle,
  },
  setup() {
    const model = ref(undefined);

    return {
      model,
    };
  },
};`}}const o_={name:"PageSelectStyleLabelDescription",components:{AlohaExample:m,ASelectStyle:p},setup(){const{codeHtml:_}=L_(),{codeJs:e}=T_(),l=A(void 0);return{codeHtml:_,codeJs:e,model:l}}};function a_(_,e,l,T,a,n){const t=E("a-select-style"),L=E("aloha-example");return i(),c(L,{"code-html":_.codeHtml,"code-js":_.codeJs,header:"_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_",description:"_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_",props:["label-description"]},{default:s(()=>[S(t,{modelValue:_.model,"onUpdate:modelValue":e[0]||(e[0]=o=>_.model=o),"is-label-float":!1,label:"Select","label-description":"Aloha",type:"select"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const A_=r(o_,[["render",a_]]);function n_(){return{codeHtml:`<a-select-style
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
></a-select-style>`}}function d_(){return{codeJs:`import {
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
};`}}const s_={name:"PageSelectStyleReadonly",components:{AlohaExample:m,ASelectStyle:p},setup(){const{codeHtml:_}=n_(),{codeJs:e}=d_(),l=A("a_color_primary"),T=A(["a_d_flex","a_bg_secondary"]),a=A(void 0);return{codeHtml:_,codeJs:e,model1:l,model2:T,model3:a}}};function r_(_,e,l,T,a,n){const t=E("a-select-style"),L=E("aloha-example");return i(),c(L,{"code-html":_.codeHtml,"code-js":_.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default"]},{default:s(()=>[S(t,{"model-value":_.model1,readonly:!0,label:"Select 1",type:"select"},null,8,["model-value"]),S(t,{class:"a_mt_3","model-value":_.model2,readonly:!0,label:"Select 2",type:"multiselect"},null,8,["model-value"]),S(t,{class:"a_mt_3","model-value":_.model3,readonly:!0,label:"Select 3",type:"select"},null,8,["model-value"]),S(t,{class:"a_mt_3","model-value":_.model3,readonly:!0,label:"Select 4",type:"multiselect"},null,8,["model-value"]),S(t,{class:"a_mt_3","model-value":_.model3,readonly:!0,"help-text":"Aloha",label:"Select 5","readonly-default":"-",type:"select"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const c_=r(s_,[["render",r_]]);function i_(){return{dataEvents:[{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"},{name:"focus",description:"_A_UI_EVENTS_FOCUS_DESCRIPTION_",type:"Function"},{name:"blur",description:"_A_UI_EVENTS_BLUR_DESCRIPTION_",type:"Function"},{name:"open",description:"_A_SELECT_EVENTS_OPEN_DESCRIPTION_",type:"Function"}]}}function C_(){const _=R(()=>g({placeholder:"_A_SELECT_STYLE_COMPONENT_NAME_"}));return{pageTitle:R(()=>`ASelectStyle${_.value?` (${_.value})`:""}`)}}function u_(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"button-class",description:"_A_SELECT_PROPS_BUTTON_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"button-class-default",description:"_A_SELECT_PROPS_BUTTON_CLASS_DEFAULT_DESCRIPTION_",type:"String / Object",default:"a_form_control a_select_toggle",required:!1},{name:"caret-icon",description:"_A_SELECT_PROPS_CARET_ICON_DESCRIPTION_",type:"String / Object",default:"ChevronDown",required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"class",description:"_A_SELECT_PROPS_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"count-multiselect",description:"_A_SELECT_PROPS_COUNT_MULTISELECT_DESCRIPTION_",type:"Number",default:4,required:!1},{name:"data",description:"_A_UI_PROPS_DATA_DESCRIPTION_",type:"Array",default:void 0,required:!1},{name:"data-extended",description:"_A_SELECT_STYLE_PROPS_DATA_EXTENDED_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"deselectable",description:"_A_SELECT_PROPS_DESELECTABLE_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exceeded-items-deletable",description:"_A_SELECT_PROPS_EXCEEDED_ITEMS_DELETABLE_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"filter-groups",description:"_A_SELECT_STYLE_PROPS_FILTER_GROUPS_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"has-caret",description:"_A_SELECT_PROPS_HAS_CARET_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_select_styles_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"in-body",description:"_A_SELECT_PROPS_IN_BODY_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-close-by-click",description:"_A_SELECT_PROPS_IS_CLOSE_BY_CLICK_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-deselect-all",description:"_A_SELECT_PROPS_IS_DESELECT_ALL_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-label-float",description:"_A_UI_PROPS_IS_LABEL_FLOAT_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-select-all",description:"_A_SELECT_PROPS_IS_SELECT_ALL_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-selection-closeable",description:"_A_SELECT_PROPS_IS_SELECTION_CLOSEABLE_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"key-disabled",description:"_A_UI_PROPS_KEY_DISABLED_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"key-disabled-callback",description:"_A_UI_PROPS_KEY_DISABLED_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"key-group",description:"_A_UI_PROPS_KEY_GROUP_DESCRIPTION_",type:"String / Number / Array",default:'() => ["groupName", "subGroupName"]',required:!1},{name:"key-group-label-callback",description:"_A_UI_PROPS_KEY_GROUP_LABEL_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"key-id",description:"_A_UI_PROPS_KEY_ID_DESCRIPTION_",type:"String",default:"value",required:!1},{name:"key-label",description:"_A_UI_PROPS_KEY_LABEL_DESCRIPTION_",type:"String",default:"label",required:!1},{name:"key-label-callback",description:"_A_UI_PROPS_KEY_LABEL_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"key-title-callback",description:"_A_UI_PROPS_KEY_TITLE_CALLBACK_DESCRIPTION_",type:"Function",default:`({ item }) => getTranslatedText({
        placeholder: item.label,
      })`,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-description",description:"_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"max-count-multiselect",description:"_A_SELECT_PROPS_MAX_COUNT_MULTISELECT_DESCRIPTION_",type:"Number",default:void 0,required:!1},{name:"menu-width-type",description:"_A_SELECT_PROPS_MENU_WIDTH_TYPE_DESCRIPTION_",type:"String",default:"as_button",required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"options",description:"_A_UI_PROPS_OPTIONS_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"placeholder",description:"_A_UI_PROPS_PLACEHOLDER_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"placement",description:"_A_UI_PROPS_PLACEMENT_DESCRIPTION_",type:"String",default:"bottom-end",required:!1},{name:"popper-container-id",description:"_A_UI_PROPS_POPPER_CONTAINER_ID_DESCRIPTION_",type:"String",default:"a_select_container",required:!1},{name:"readonly",description:"_A_UI_PROPS_READONLY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"readonly-default",description:"_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_",type:"String",default:"",required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search",description:"_A_UI_PROPS_SEARCH_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search-timeout",description:"_A_UI_PROPS_SEARCH_TIMEOUT_DESCRIPTION_",type:"Number",default:0,required:!1},{name:"select-menu-class",description:"_A_SELECT_PROPS_SELECT_MENU_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"slot-name",description:"_A_UI_PROPS_SLOT_NAME_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"sort-order",description:"_A_UI_PROPS_SORT_ORDER_DESCRIPTION_",type:"String",default:"asc",required:!1},{name:"sort-order-group",description:"_A_UI_PROPS_SORT_ORDER_GROUP_DESCRIPTION_",type:"String",default:"asc",required:!1},{name:"text-deselect-all",description:"_A_SELECT_PROPS_TEXT_DESELECT_ALL_DESCRIPTION_",type:"String",default:"_A_SELECT_DESELECT_ALL_",required:!1},{name:"text-select-all",description:"_A_SELECT_PROPS_TEXT_SELECT_ALL_DESCRIPTION_",type:"String",default:"_A_SELECT_SELECT_ALL_",required:!1},{name:"type",description:"_A_SELECT_STYLE_PROPS_TYPE_DESCRIPTION_",type:"String",default:"select",required:!1}]}}function m_(){return{dataTranslate:["_A_SELECT_STYLES_GROUP_DISPLAY_","_A_SELECT_STYLES_SUB_GROUP_MOBILE_","_A_SELECT_STYLES_SUB_GROUP_TABLET_","_A_SELECT_STYLES_SUB_GROUP_TOUCH_","_A_SELECT_STYLES_SUB_GROUP_DESKTOP_","_A_SELECT_STYLES_SUB_GROUP_WIDESCREEN_","_A_SELECT_STYLES_SUB_GROUP_FULLHD_","_A_SELECT_STYLES_SUB_GROUP_LARGE_","_A_SELECT_STYLES_GROUP_FLEX_","_A_SELECT_STYLES_SUB_GROUP_FLEX_DIRECTION_","_A_SELECT_STYLES_SUB_GROUP_JUSTIFY_CONTENT_","_A_SELECT_STYLES_SUB_GROUP_ALIGN_ITEMS_","_A_SELECT_STYLES_SUB_GROUP_ALIGN_SELF_","_A_SELECT_STYLES_SUB_GROUP_JUSTIFY_SELF_","_A_SELECT_STYLES_SUB_GROUP_FLEX_WRAP_","_A_SELECT_STYLES_SUB_GROUP_ALIGN_CONTENT_","_A_SELECT_STYLES_GROUP_TEXT_ALIGN_","_A_SELECT_STYLES_GROUP_TEXT_WRAPPING_","_A_SELECT_STYLES_GROUP_LINE_LIMITING_","_A_SELECT_STYLES_GROUP_TEXT_TRANSFORM_","_A_SELECT_STYLES_GROUP_FONT_WEIGHT_","_A_SELECT_STYLES_GROUP_LINE_HEIGHT_","_A_SELECT_STYLES_GROUP_FONT_SIZE_","_A_SELECT_STYLES_GROUP_MARGIN_","_A_SELECT_STYLES_GROUP_PADDING_","_A_SELECT_STYLES_GROUP_COLOR_","_A_SELECT_STYLES_GROUP_BACKGROUND_COLOR_","_A_SELECT_STYLES_VALUE_D_INLINE_","_A_SELECT_STYLES_VALUE_D_INLINE_BLOCK_","_A_SELECT_STYLES_VALUE_D_BLOCK_","_A_SELECT_STYLES_VALUE_D_FLEX_","_A_SELECT_STYLES_VALUE_D_INLINE_FLEX_","_A_SELECT_STYLES_VALUE_D_NONE_","_A_SELECT_STYLES_VALUE_FLEX_ROW_","_A_SELECT_STYLES_VALUE_FLEX_COLUMN_","_A_SELECT_STYLES_VALUE_FLEX_ROW_REVERSE_","_A_SELECT_STYLES_VALUE_FLEX_COLUMN_REVERSE_","_A_SELECT_STYLES_VALUE_JUSTIFY_CONTENT_START_","_A_SELECT_STYLES_VALUE_JUSTIFY_CONTENT_END_","_A_SELECT_STYLES_VALUE_JUSTIFY_CONTENT_CENTER_","_A_SELECT_STYLES_VALUE_JUSTIFY_CONTENT_BETWEEN_","_A_SELECT_STYLES_VALUE_JUSTIFY_CONTENT_AROUND_","_A_SELECT_STYLES_VALUE_JUSTIFY_CONTENT_EVENLY_","_A_SELECT_STYLES_VALUE_ALIGN_ITEMS_START_","_A_SELECT_STYLES_VALUE_ALIGN_ITEMS_END_","_A_SELECT_STYLES_VALUE_ALIGN_ITEMS_CENTER_","_A_SELECT_STYLES_VALUE_ALIGN_ITEMS_BASELINE_","_A_SELECT_STYLES_VALUE_ALIGN_ITEMS_STRETCH_","_A_SELECT_STYLES_VALUE_ALIGN_SELF_AUTO_","_A_SELECT_STYLES_VALUE_ALIGN_SELF_START_","_A_SELECT_STYLES_VALUE_ALIGN_SELF_END_","_A_SELECT_STYLES_VALUE_ALIGN_SELF_CENTER_","_A_SELECT_STYLES_VALUE_ALIGN_SELF_BASELINE_","_A_SELECT_STYLES_VALUE_ALIGN_SELF_STRETCH_","_A_SELECT_STYLES_VALUE_JUSTIFY_SELF_AUTO_","_A_SELECT_STYLES_VALUE_JUSTIFY_SELF_START_","_A_SELECT_STYLES_VALUE_JUSTIFY_SELF_END_","_A_SELECT_STYLES_VALUE_JUSTIFY_SELF_CENTER_","_A_SELECT_STYLES_VALUE_JUSTIFY_SELF_BASELINE_","_A_SELECT_STYLES_VALUE_JUSTIFY_SELF_STRETCH_","_A_SELECT_STYLES_VALUE_FLEX_WRAP_","_A_SELECT_STYLES_VALUE_FLEX_NOWRAP_","_A_SELECT_STYLES_VALUE_FLEX_WRAP_REVERSE_","_A_SELECT_STYLES_VALUE_ALIGN_CONTENT_START_","_A_SELECT_STYLES_VALUE_ALIGN_CONTENT_END_","_A_SELECT_STYLES_VALUE_ALIGN_CONTENT_CENTER_","_A_SELECT_STYLES_VALUE_ALIGN_CONTENT_BETWEEN_","_A_SELECT_STYLES_VALUE_ALIGN_CONTENT_AROUND_","_A_SELECT_STYLES_VALUE_ALIGN_CONTENT_STRETCH_","_A_SELECT_STYLES_VALUE_TEXT_LEFT_","_A_SELECT_STYLES_VALUE_TEXT_CENTER_","_A_SELECT_STYLES_VALUE_TEXT_RIGHT_","_A_SELECT_STYLES_VALUE_TEXT_JUSTIFY_","_A_SELECT_STYLES_VALUE_TEXT_WRAP_","_A_SELECT_STYLES_VALUE_TEXT_NOWRAP_","_A_SELECT_STYLES_VALUE_TEXT_BREAK_","_A_SELECT_STYLES_VALUE_TEXT_WRAP_HYPHENS_","_A_SELECT_STYLES_VALUE_TEXT_TRUNCATE_","_A_SELECT_STYLES_VALUE_TEXT_CLAMP_","_A_SELECT_STYLES_VALUE_TEXT_CLAMP_2_","_A_SELECT_STYLES_VALUE_TEXT_CLAMP_3_","_A_SELECT_STYLES_VALUE_TEXT_CLAMP_4_","_A_SELECT_STYLES_VALUE_TEXT_CLAMP_5_","_A_SELECT_STYLES_VALUE_TEXT_LOWERCASE_","_A_SELECT_STYLES_VALUE_TEXT_UPPERCASE_","_A_SELECT_STYLES_VALUE_TEXT_CAPITALIZE_","_A_SELECT_STYLES_VALUE_TEXT_UNDERLINE_","_A_SELECT_STYLES_VALUE_TEXT_LINE_THROUGH_","_A_SELECT_STYLES_VALUE_TEXT_DECORATION_NONE_","_A_SELECT_STYLES_VALUE_TEXT_BOLD_","_A_SELECT_STYLES_VALUE_TEXT_BOLDER_","_A_SELECT_STYLES_VALUE_TEXT_SEMIBOLD_","_A_SELECT_STYLES_VALUE_TEXT_LIGHT_","_A_SELECT_STYLES_VALUE_TEXT_LIGHTER_","_A_SELECT_STYLES_VALUE_TEXT_ITALIC_","_A_SELECT_STYLES_VALUE_TEXT_NORMAL_","_A_SELECT_STYLES_VALUE_LINE_HEIGHT_1_","_A_SELECT_STYLES_VALUE_LINE_HEIGHT_SMALL_","_A_SELECT_STYLES_VALUE_LINE_HEIGHT_BASE_","_A_SELECT_STYLES_VALUE_LINE_HEIGHT_LARGE_","_A_SELECT_STYLES_VALUE_FS_1_","_A_SELECT_STYLES_VALUE_FS_2_","_A_SELECT_STYLES_VALUE_FS_3_","_A_SELECT_STYLES_VALUE_FS_4_","_A_SELECT_STYLES_VALUE_FS_5_","_A_SELECT_STYLES_VALUE_FS_6_","_A_SELECT_STYLES_VALUE_FS_7_","_A_SELECT_STYLES_VALUE_P_1_","_A_SELECT_STYLES_VALUE_PT_1_","_A_SELECT_STYLES_VALUE_PR_1_","_A_SELECT_STYLES_VALUE_PB_1_","_A_SELECT_STYLES_VALUE_PL_1_","_A_SELECT_STYLES_VALUE_PX_1_","_A_SELECT_STYLES_VALUE_PY_1_","_A_SELECT_STYLES_VALUE_P_2_","_A_SELECT_STYLES_VALUE_PT_2_","_A_SELECT_STYLES_VALUE_PR_2_","_A_SELECT_STYLES_VALUE_PB_2_","_A_SELECT_STYLES_VALUE_PL_2_","_A_SELECT_STYLES_VALUE_PX_2_","_A_SELECT_STYLES_VALUE_PY_2_","_A_SELECT_STYLES_VALUE_P_3_","_A_SELECT_STYLES_VALUE_PT_3_","_A_SELECT_STYLES_VALUE_PR_3_","_A_SELECT_STYLES_VALUE_PB_3_","_A_SELECT_STYLES_VALUE_PL_3_","_A_SELECT_STYLES_VALUE_PX_3_","_A_SELECT_STYLES_VALUE_PY_3_","_A_SELECT_STYLES_VALUE_P_4_","_A_SELECT_STYLES_VALUE_PT_4_","_A_SELECT_STYLES_VALUE_PR_4_","_A_SELECT_STYLES_VALUE_PB_4_","_A_SELECT_STYLES_VALUE_PL_4_","_A_SELECT_STYLES_VALUE_PX_4_","_A_SELECT_STYLES_VALUE_PY_4_","_A_SELECT_STYLES_VALUE_P_5_","_A_SELECT_STYLES_VALUE_PT_5_","_A_SELECT_STYLES_VALUE_PR_5_","_A_SELECT_STYLES_VALUE_PB_5_","_A_SELECT_STYLES_VALUE_PL_5_","_A_SELECT_STYLES_VALUE_PX_5_","_A_SELECT_STYLES_VALUE_PY_5_","_A_SELECT_STYLES_VALUE_P_6_","_A_SELECT_STYLES_VALUE_PT_6_","_A_SELECT_STYLES_VALUE_PR_6_","_A_SELECT_STYLES_VALUE_PB_6_","_A_SELECT_STYLES_VALUE_PL_6_","_A_SELECT_STYLES_VALUE_PX_6_","_A_SELECT_STYLES_VALUE_PY_6_","_A_SELECT_STYLES_VALUE_P_AUTO_","_A_SELECT_STYLES_VALUE_PT_AUTO_","_A_SELECT_STYLES_VALUE_PR_AUTO_","_A_SELECT_STYLES_VALUE_PB_AUTO_","_A_SELECT_STYLES_VALUE_PL_AUTO_","_A_SELECT_STYLES_VALUE_PX_AUTO_","_A_SELECT_STYLES_VALUE_PY_AUTO_","_A_SELECT_STYLES_VALUE_P_0_","_A_SELECT_STYLES_VALUE_PT_0_","_A_SELECT_STYLES_VALUE_PR_0_","_A_SELECT_STYLES_VALUE_PB_0_","_A_SELECT_STYLES_VALUE_PL_0_","_A_SELECT_STYLES_VALUE_PX_0_","_A_SELECT_STYLES_VALUE_PY_0_","_A_SELECT_STYLES_VALUE_M_1_","_A_SELECT_STYLES_VALUE_MT_1_","_A_SELECT_STYLES_VALUE_MR_1_","_A_SELECT_STYLES_VALUE_MB_1_","_A_SELECT_STYLES_VALUE_ML_1_","_A_SELECT_STYLES_VALUE_MX_1_","_A_SELECT_STYLES_VALUE_MY_1_","_A_SELECT_STYLES_VALUE_M_2_","_A_SELECT_STYLES_VALUE_MT_2_","_A_SELECT_STYLES_VALUE_MR_2_","_A_SELECT_STYLES_VALUE_MB_2_","_A_SELECT_STYLES_VALUE_ML_2_","_A_SELECT_STYLES_VALUE_MX_2_","_A_SELECT_STYLES_VALUE_MY_2_","_A_SELECT_STYLES_VALUE_M_3_","_A_SELECT_STYLES_VALUE_MT_3_","_A_SELECT_STYLES_VALUE_MR_3_","_A_SELECT_STYLES_VALUE_MB_3_","_A_SELECT_STYLES_VALUE_ML_3_","_A_SELECT_STYLES_VALUE_MX_3_","_A_SELECT_STYLES_VALUE_MY_3_","_A_SELECT_STYLES_VALUE_M_4_","_A_SELECT_STYLES_VALUE_MT_4_","_A_SELECT_STYLES_VALUE_MR_4_","_A_SELECT_STYLES_VALUE_MB_4_","_A_SELECT_STYLES_VALUE_ML_4_","_A_SELECT_STYLES_VALUE_MX_4_","_A_SELECT_STYLES_VALUE_MY_4_","_A_SELECT_STYLES_VALUE_M_5_","_A_SELECT_STYLES_VALUE_MT_5_","_A_SELECT_STYLES_VALUE_MR_5_","_A_SELECT_STYLES_VALUE_MB_5_","_A_SELECT_STYLES_VALUE_ML_5_","_A_SELECT_STYLES_VALUE_MX_5_","_A_SELECT_STYLES_VALUE_MY_5_","_A_SELECT_STYLES_VALUE_M_6_","_A_SELECT_STYLES_VALUE_MT_6_","_A_SELECT_STYLES_VALUE_MR_6_","_A_SELECT_STYLES_VALUE_MB_6_","_A_SELECT_STYLES_VALUE_ML_6_","_A_SELECT_STYLES_VALUE_MX_6_","_A_SELECT_STYLES_VALUE_MY_6_","_A_SELECT_STYLES_VALUE_M_AUTO_","_A_SELECT_STYLES_VALUE_MT_AUTO_","_A_SELECT_STYLES_VALUE_MR_AUTO_","_A_SELECT_STYLES_VALUE_MB_AUTO_","_A_SELECT_STYLES_VALUE_ML_AUTO_","_A_SELECT_STYLES_VALUE_MX_AUTO_","_A_SELECT_STYLES_VALUE_MY_AUTO_","_A_SELECT_STYLES_VALUE_M_0_","_A_SELECT_STYLES_VALUE_MT_0_","_A_SELECT_STYLES_VALUE_MR_0_","_A_SELECT_STYLES_VALUE_MB_0_","_A_SELECT_STYLES_VALUE_ML_0_","_A_SELECT_STYLES_VALUE_MX_0_","_A_SELECT_STYLES_VALUE_MY_0_","_A_SELECT_STYLES_VALUE_COLOR_PRIMARY_","_A_SELECT_STYLES_VALUE_COLOR_SECONDARY_","_A_SELECT_STYLES_VALUE_COLOR_TERTIARY_","_A_SELECT_STYLES_VALUE_COLOR_TEXT_","_A_SELECT_STYLES_VALUE_COLOR_INFO_","_A_SELECT_STYLES_VALUE_COLOR_SUCCESS_","_A_SELECT_STYLES_VALUE_COLOR_WARNING_","_A_SELECT_STYLES_VALUE_COLOR_DANGER_","_A_SELECT_STYLES_VALUE_COLOR_LINK_","_A_SELECT_STYLES_VALUE_COLOR_WHITE_","_A_SELECT_STYLES_VALUE_COLOR_BLACK_","_A_SELECT_STYLES_VALUE_COLOR_GRAY_100_","_A_SELECT_STYLES_VALUE_COLOR_GRAY_200_","_A_SELECT_STYLES_VALUE_COLOR_GRAY_300_","_A_SELECT_STYLES_VALUE_COLOR_GRAY_400_","_A_SELECT_STYLES_VALUE_COLOR_GRAY_500_","_A_SELECT_STYLES_VALUE_COLOR_GRAY_600_","_A_SELECT_STYLES_VALUE_COLOR_GRAY_700_","_A_SELECT_STYLES_VALUE_COLOR_GRAY_800_","_A_SELECT_STYLES_VALUE_COLOR_GRAY_900_","_A_SELECT_STYLES_VALUE_COLOR_TRANSPARENT_","_A_SELECT_STYLES_VALUE_BG_PRIMARY_","_A_SELECT_STYLES_VALUE_BG_SECONDARY_","_A_SELECT_STYLES_VALUE_BG_TERTIARY_","_A_SELECT_STYLES_VALUE_BG_TEXT_","_A_SELECT_STYLES_VALUE_BG_INFO_","_A_SELECT_STYLES_VALUE_BG_SUCCESS_","_A_SELECT_STYLES_VALUE_BG_WARNING_","_A_SELECT_STYLES_VALUE_BG_DANGER_","_A_SELECT_STYLES_VALUE_BG_LINK_","_A_SELECT_STYLES_VALUE_BG_WHITE_","_A_SELECT_STYLES_VALUE_BG_BLACK_","_A_SELECT_STYLES_VALUE_BG_GRAY_100_","_A_SELECT_STYLES_VALUE_BG_GRAY_200_","_A_SELECT_STYLES_VALUE_BG_GRAY_300_","_A_SELECT_STYLES_VALUE_BG_GRAY_400_","_A_SELECT_STYLES_VALUE_BG_GRAY_500_","_A_SELECT_STYLES_VALUE_BG_GRAY_600_","_A_SELECT_STYLES_VALUE_BG_GRAY_700_","_A_SELECT_STYLES_VALUE_BG_GRAY_800_","_A_SELECT_STYLES_VALUE_BG_GRAY_900_","_A_SELECT_STYLES_VALUE_BG_TRANSPARENT_"]}}const p_={name:"PageSelectStyle",components:{AlohaPage:N,AlohaTableProps:y,AlohaTableTranslate:D,ATranslation:G,PageSelectStyleBasic:v,PageSelectStyleChange:J,PageSelectStyleDataExtended:W,PageSelectStyleFilterGroups:__,PageSelectStyleHelpText:l_,PageSelectStyleLabelDescription:A_,PageSelectStyleReadonly:c_},setup(){const{pageTitle:_}=C_(),{dataProps:e}=u_(),{dataTranslate:l}=m_(),{dataEvents:T}=i_();return{dataEvents:T,dataProps:e,dataTranslate:l,pageTitle:_}}};function U_(_,e,l,T,a,n){const t=E("a-translation"),L=E("page-select-style-basic"),o=E("page-select-style-change"),d=E("page-select-style-help-text"),U=E("page-select-style-label-description"),I=E("page-select-style-filter-groups"),Y=E("page-select-style-data-extended"),O=E("page-select-style-readonly"),P=E("aloha-table-props"),f=E("aloha-table-translate"),V=E("aloha-page");return i(),c(V,{"page-title":_.pageTitle},{body:s(()=>[S(t,{tag:"p",html:"_A_SELECT_STYLE_COMPONENT_DESCRIPTION_"}),S(L),S(o),S(d),S(U),S(I),S(Y),S(O),S(P,{data:_.dataProps},null,8,["data"]),S(P,{"table-label":"Events",data:_.dataEvents,columns:["name","type","description"]},null,8,["data"]),S(f,{data:_.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const F_=r(p_,[["render",U_]]);export{F_ as default};
