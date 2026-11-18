import{t as e}from"./chunk.AlohaPage.ChkpVQK6.js";import{t}from"./chunk.AlohaTableProps.Bfv18lY9.js";import{$t as n,Bt as r,Ft as i,It as a,Mt as o,Pt as s,Rt as c,Zt as l,an as u,pn as d,sn as f,tn as p}from"./chunk.vendor.H0cZuFAV.js";import{t as m}from"./chunk.AlohaExample.yCYNeej2.js";import{It as h,R as g,et as _}from"./bundle.index.DgEnxzUz.js";import{t as v}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function y(){return{codeHtml:`<a-select-icon
  v-model="model1"
  label="Select"
  type="select"
></a-select-icon>
<div>model1: {{ model1 }}</div>
<a-select-icon
  v-model="model2"
  class="a_mt_3"
  label="Multiselect"
  type="multiselect"
></a-select-icon>
<div>model2: {{ model2 }}</div>`}}function b(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelectIcon,
} from "aloha-vue";
    
export default {
  name: "PageSelectIconBasic",
  components: {
    ASelectIcon,
  },
  setup() {
    const model1 = ref(undefined);
    const model2 = ref(undefined);

    return {
      model1,
      model2,
    };
  },
};`}}var x={name:`PageSelectIconBasic`,components:{AlohaExample:m,ASelectIcon:g},setup(){let{codeHtml:e}=y(),{codeJs:t}=b();return{codeHtml:e,codeJs:t,model1:f(void 0),model2:f(void 0)}}};function S(e,t,n,o,s,c){let f=p(`a-select-icon`),m=p(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`type`]},{default:u(()=>[r(f,{modelValue:e.model1,"onUpdate:modelValue":t[0]||=t=>e.model1=t,label:`Select`,type:`select`},null,8,[`modelValue`]),i(`div`,null,`model1: `+d(e.model1),1),r(f,{class:`a_mt_3`,modelValue:e.model2,"onUpdate:modelValue":t[1]||=t=>e.model2=t,label:`Multiselect`,type:`multiselect`},null,8,[`modelValue`]),i(`div`,null,`model2: `+d(e.model2),1)]),_:1},8,[`code-html`,`code-js`])}var C=v(x,[[`render`,S]]);function w(){return{codeHtml:`<a-select-icon
  :change="changeModel1"
  :model-value="model1"
  label="Select 1"
></a-select-icon>
<div>model1: {{ model1 }}</div>
<a-select-icon
  :change="changeModel2"
  :model-value="model2"
  class="a_mt_3"
  label="Select 2"
  type="multiselect"
></a-a-select-icon>
<div>model1: {{ model1 }}</div>`}}function T(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelectIcon,
} from "aloha-vue";
    
export default {
  name: "PageSelectIconChange",
  components: {
    ASelectIcon,
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
};`}}var E={name:`PageSelectIconChange`,components:{AlohaExample:m,ASelectIcon:g},setup(){let e=f(void 0),t=f(void 0),n=({model:t,id:n,props:r,item:i,currentModel:a})=>{e.value=t,console.log(n,r,i,a)},r=({model:e,id:n,props:r,item:i,currentModel:a})=>{t.value=e,console.log(n,r,i,a)},{codeHtml:i}=w(),{codeJs:a}=T();return{changeModel1:n,changeModel2:r,codeHtml:i,codeJs:a,model1:e,model2:t}}};function D(e,t,n,o,s,c){let f=p(`a-select-icon`),m=p(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_CHANGE_HEADER_`,description:`_A_UI_GROUP_CHANGE_DESCRIPTION_`,props:[`change`,`model-value`]},{default:u(()=>[r(f,{change:e.changeModel1,"model-value":e.model1,label:`Select 1`},null,8,[`change`,`model-value`]),i(`div`,null,`model1: `+d(e.model1),1),r(f,{class:`a_mt_3`,change:e.changeModel2,"model-value":e.model2,label:`Select 2`,type:`multiselect`},null,8,[`change`,`model-value`]),i(`div`,null,`model2: `+d(e.model2),1)]),_:1},8,[`code-html`,`code-js`])}var O=v(E,[[`render`,D]]);function k(){return{codeHtml:`<a-select-icon
  v-model="model"
  errors="Aloha"
  label="Select"
></a-select-icon>`}}function A(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelectIcon,
} from "aloha-vue";
    
export default {
  name: "PageSelectIconErrors",
  components: {
    ASelectIcon,
  },
  setup() {
    const model = ref(undefined);
    
    return {
      model,
    };
  },
};`}}var j={name:`PageSelectIconErrors`,components:{AlohaExample:m,ASelectIcon:g},setup(){let e=f(void 0),{codeHtml:t}=k(),{codeJs:n}=A();return{codeHtml:t,codeJs:n,model:e}}};function M(e,t,n,i,o,s){let c=p(`a-select-icon`),d=p(`aloha-example`);return l(),a(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_ERRORS_HEADER_`,description:`_A_UI_GROUP_ERRORS_DESCRIPTION_`,props:[`errors`]},{default:u(()=>[r(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,errors:`Aloha`,label:`Select`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var N=v(j,[[`render`,M]]);function P(){return{codeHtml:`<a-select-icon
  v-model="model"
  help-text="Aloha"
  label="Select"
></a-select-icon>`}}function F(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelectIcon,
} from "aloha-vue";
    
export default {
  name: "PageSelectIconHelpText",
  components: {
    ASelectIcon,
  },
  setup() {
    const model = ref(undefined);
    
    return {
      model,
    };
  },
};`}}var I={name:`PageSelectIconHelpText`,components:{AlohaExample:m,ASelectIcon:g},setup(){let e=f(void 0),{codeHtml:t}=P(),{codeJs:n}=F();return{codeHtml:t,codeJs:n,model:e}}};function L(e,t,n,i,o,s){let c=p(`a-select-icon`),d=p(`aloha-example`);return l(),a(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_HELP_TEXT_HEADER_`,description:`_A_UI_GROUP_HELP_TEXT_DESCRIPTION_`,props:[`help-text`]},{default:u(()=>[r(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"help-text":`Aloha`,label:`Select`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var R=v(I,[[`render`,L]]);function z(){return{codeHtml:`<a-select-icon
  v-model="model"
  label-position="top"
  label="Select"
  label-description="Aloha"
></a-select-icon>`}}function B(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelectIcon,
} from "aloha-vue";
    
export default {
  name: "PageSelectIconLabelDescription",
  components: {
    ASelectIcon,
  },
  setup() {
    const model = ref(undefined);
    
    return {
      model,
    };
  },
};`}}var ee={name:`PageSelectIconLabelDescription`,components:{AlohaExample:m,ASelectIcon:g},setup(){let e=f(void 0),{codeHtml:t}=z(),{codeJs:n}=B();return{codeHtml:t,codeJs:n,model:e}}};function V(e,t,n,i,o,s){let c=p(`a-select-icon`),d=p(`aloha-example`);return l(),a(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_`,description:`_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_`,props:[`label-description`]},{default:u(()=>[r(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"label-position":`top`,label:`Select`,"label-description":`Aloha`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var H=v(ee,[[`render`,V]]);function U(){return{codeHtml:`<a-select-icon
  v-model="model"
  label="label-position: float"
  label-position="float"
  type="select"
></a-select-icon>
<a-select-icon
  v-model="model"
  label="label-position: inset"
  label-position="inset"
  type="select"
></a-select-icon>
<a-select-icon
  v-model="model"
  label="label-position: top"
  label-position="top"
  type="select"
></a-select-icon>
<div>model: {{ model }}</div>`}}function W(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ASelectIcon,
} from "aloha-vue";

export default {
  name: "PageSelectIconLabelPosition",
  components: {
    ASelectIcon,
  },
  setup() {
    const model = ref(undefined);

    return {
      model,
    };
  },
};`}}var G={name:`PageSelectIconLabelPosition`,components:{AlohaExample:m,ASelectIcon:g},setup(){let e=f(void 0),t=[`float`,`inset`,`top`],{codeHtml:n}=U(),{codeJs:r}=W();return{codeHtml:n,codeJs:r,labelPositions:t,model:e}}},K={class:`a_columns a_columns_count_12`};function q(e,t,s,f,m,h){let g=p(`a-select-icon`),_=p(`aloha-example`);return l(),a(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_LABEL_POSITION_HEADER_`,description:`_A_UI_LABEL_POSITION_DESCRIPTION_`,props:[`label-position`]},{default:u(()=>[i(`div`,K,[(l(!0),c(o,null,n(e.labelPositions,n=>(l(),c(`div`,{class:`a_column a_column_4 a_columns_count_12_touch`,key:n},[r(g,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`label-position: ${n}`,"label-position":n,type:`select`},null,8,[`modelValue`,`label`,`label-position`])]))),128))]),i(`div`,null,`model: `+d(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var J=v(G,[[`render`,q]]);function Y(){return{codeHtml:`<a-select-icon
  :model-value="model1"
  :readonly="true"
  label="Select 1"
  type="select"
></a-select-icon>
<a-select-icon
  :model-value="model2"
  :readonly="true"
  class="a_mt_3"
  label="Select 2"
  type="multiselect"
></a-select-icon>
<a-select-icon
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  label="Select 3"
  type="select"
></a-select-icon>
<a-select-icon
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  label="Select 4"
  type="multiselect"
></a-select-icon>
<a-select-icon
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  help-text="Aloha"
  label="Select 5"
  readonly-default="-"
  type="select"
></a-select-icon>`}}function X(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelectIcon,
} from "aloha-vue";
    
export default {
  name: "PageSelectIconReadonly",
  components: {
    ASelectIcon,
  },
  setup() {
    const model1 = ref("ArrowRightCircle");
    const model2 = ref(["Boxes", "ChevronBarExpand"]);
    const model3 = ref(undefined);

    return {
      model1,
      model2,
      model3,
    };
  },
};`}}var Z={name:`PageSelectIconReadonly`,components:{AlohaExample:m,ASelectIcon:g},setup(){let{codeHtml:e}=Y(),{codeJs:t}=X();return{codeHtml:e,codeJs:t,model1:f(`ArrowRightCircle`),model2:f([`Boxes`,`ChevronBarExpand`]),model3:f(void 0)}}};function Q(e,t,n,i,o,s){let c=p(`a-select-icon`),d=p(`aloha-example`);return l(),a(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_READONLY_HEADER_`,description:`_A_UI_GROUP_READONLY_DESCRIPTION_`,props:[`readonly`,`readonly-default`]},{default:u(()=>[r(c,{"model-value":e.model1,readonly:!0,label:`Select 1`,type:`select`},null,8,[`model-value`]),r(c,{class:`a_mt_3`,"model-value":e.model2,readonly:!0,label:`Select 2`,type:`multiselect`},null,8,[`model-value`]),r(c,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,label:`Select 3`,type:`select`},null,8,[`model-value`]),r(c,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,label:`Select 4`,type:`multiselect`},null,8,[`model-value`]),r(c,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,"help-text":`Aloha`,label:`Select 5`,"readonly-default":`-`,type:`select`},null,8,[`model-value`])]),_:1},8,[`code-html`,`code-js`])}var $=v(Z,[[`render`,Q]]);function te(){return{dataEvents:[{name:`update:model-value`,description:`_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_`,type:`Function`},{name:`focus`,description:`_A_UI_EVENTS_FOCUS_DESCRIPTION_`,type:`Function`},{name:`blur`,description:`_A_UI_EVENTS_BLUR_DESCRIPTION_`,type:`Function`},{name:`open`,description:`_A_SELECT_EVENTS_OPEN_DESCRIPTION_`,type:`Function`}]}}function ne(){let e=s(()=>h({placeholder:`_A_SELECT_ICON_COMPONENT_NAME_`}));return{pageTitle:s(()=>`ASelectIcon${e.value?` (${e.value})`:``}`)}}function re(){return{dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`button-class`,description:`_A_SELECT_PROPS_BUTTON_CLASS_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`button-class-default`,description:`_A_SELECT_PROPS_BUTTON_CLASS_DEFAULT_DESCRIPTION_`,type:`String / Object`,default:`a_form_control a_select_toggle`,required:!1},{name:`caret-icon`,description:`_A_SELECT_PROPS_CARET_ICON_DESCRIPTION_`,type:`String / Object`,default:`ChevronDown`,required:!1},{name:`change`,description:`_A_UI_PROPS_CHANGE_DESCRIPTION_`,type:`Function`,default:`() => {}`,required:!1},{name:`class`,description:`_A_SELECT_PROPS_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`count-multiselect`,description:`_A_SELECT_PROPS_COUNT_MULTISELECT_DESCRIPTION_`,type:`Number`,default:4,required:!1},{name:`data`,description:`_A_UI_PROPS_DATA_DESCRIPTION_`,type:`Array`,default:void 0,required:!1},{name:`dependencies`,description:`_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_`,type:`Array / Object`,default:void 0,required:!1},{name:`deselectable`,description:`_A_SELECT_PROPS_DESELECTABLE_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`disabled`,description:`_A_UI_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`errors`,description:`_A_UI_PROPS_ERRORS_DESCRIPTION_`,type:`String / Array`,default:void 0,required:!1},{name:`exceeded-items-deletable`,description:`_A_SELECT_PROPS_EXCEEDED_ITEMS_DELETABLE_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`exclude-render-attributes`,description:`_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`extra`,description:`_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`has-caret`,description:`_A_SELECT_PROPS_HAS_CARET_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`help-text`,description:`_A_UI_PROPS_HELP_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`html-id`,description:`_A_UI_PROPS_HTML_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`id`,description:`_A_UI_PROPS_ID_DESCRIPTION_`,type:`String / Number`,default:`() => uniqueId("a_select_icon_")`,required:!1},{name:`id-prefix`,description:`_A_UI_PROPS_ID_PREFIX_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`in-body`,description:`_A_SELECT_PROPS_IN_BODY_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-close-by-click`,description:`_A_SELECT_PROPS_IS_CLOSE_BY_CLICK_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-deselect-all`,description:`_A_SELECT_PROPS_IS_DESELECT_ALL_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-hide`,description:`_A_UI_PROPS_IS_HIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-label-float`,description:`_A_UI_PROPS_IS_LABEL_FLOAT_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-render`,description:`_A_UI_PROPS_IS_RENDER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-select-all`,description:`_A_SELECT_PROPS_IS_SELECT_ALL_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-selection-closeable`,description:`_A_SELECT_PROPS_IS_SELECTION_CLOSEABLE_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`key-disabled`,description:`_A_UI_PROPS_KEY_DISABLED_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`key-disabled-callback`,description:`_A_UI_PROPS_KEY_DISABLED_CALLBACK_DESCRIPTION_`,type:`Function`,default:void 0,required:!1},{name:`key-group`,description:`_A_UI_PROPS_KEY_GROUP_DESCRIPTION_`,type:`String / Number / Array`,default:`() => ["groupName", "subGroupName"]`,required:!1},{name:`key-group-label-callback`,description:`_A_UI_PROPS_KEY_GROUP_LABEL_CALLBACK_DESCRIPTION_`,type:`Function`,default:void 0,required:!1},{name:`key-id`,description:`_A_UI_PROPS_KEY_ID_DESCRIPTION_`,type:`String`,default:`value`,required:!1},{name:`key-label`,description:`_A_UI_PROPS_KEY_LABEL_DESCRIPTION_`,type:`String`,default:`label`,required:!1},{name:`key-label-callback`,description:`_A_UI_PROPS_KEY_LABEL_CALLBACK_DESCRIPTION_`,type:`Function`,default:void 0,required:!1},{name:`key-title`,description:`_A_UI_PROPS_KEY_TITLE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`key-title-callback`,description:`_A_UI_PROPS_KEY_TITLE_CALLBACK_DESCRIPTION_`,type:`Function`,default:void 0,required:!1},{name:`label`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`label-class`,description:`_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`label-description`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`label-position`,description:`_A_UI_PROPS_LABEL_POSITION_DESCRIPTION_`,type:`"float" / "inset" / "top"`,default:`"float"`,required:!1},{name:`label-screen-reader`,description:`_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`max-count-multiselect`,description:`_A_SELECT_PROPS_MAX_COUNT_MULTISELECT_DESCRIPTION_`,type:`Number`,default:void 0,required:!1},{name:`menu-width-type`,description:`_A_SELECT_PROPS_MENU_WIDTH_TYPE_DESCRIPTION_`,type:`String`,default:`as_button`,required:!1},{name:`model-dependencies`,description:`_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`model-value`,description:`_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_`,type:`String / Array`,default:void 0,required:!1},{name:`options`,description:`_A_UI_PROPS_OPTIONS_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`placeholder`,description:`_A_UI_PROPS_PLACEHOLDER_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`placement`,description:`_A_UI_PROPS_PLACEMENT_DESCRIPTION_`,type:`String`,default:`bottom-end`,required:!1},{name:`popper-container-id`,description:`_A_UI_PROPS_POPPER_CONTAINER_ID_DESCRIPTION_`,type:`String`,default:`a_select_container`,required:!1},{name:`readonly`,description:`_A_UI_PROPS_READONLY_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`readonly-default`,description:`_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_`,type:`String`,default:``,required:!1},{name:`required`,description:`_A_UI_PROPS_REQUIRED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`search`,description:`_A_UI_PROPS_SEARCH_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`search-text-in-html`,description:`_A_UI_PROPS_SEARCH_TEXT_IN_HTML_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`search-timeout`,description:`_A_UI_PROPS_SEARCH_TIMEOUT_DESCRIPTION_`,type:`Number`,default:0,required:!1},{name:`select-menu-class`,description:`_A_SELECT_PROPS_SELECT_MENU_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`slot-name`,description:`_A_UI_PROPS_SLOT_NAME_DESCRIPTION_`,type:`String`,default:`icon`,required:!1},{name:`sort-order`,description:`_A_UI_PROPS_SORT_ORDER_DESCRIPTION_`,type:`String`,default:`asc`,required:!1},{name:`text-deselect-all`,description:`_A_SELECT_PROPS_TEXT_DESELECT_ALL_DESCRIPTION_`,type:`String`,default:`_A_SELECT_DESELECT_ALL_`,required:!1},{name:`text-select-all`,description:`_A_SELECT_PROPS_TEXT_SELECT_ALL_DESCRIPTION_`,type:`String`,default:`_A_SELECT_SELECT_ALL_`,required:!1},{name:`type`,description:`_A_SELECT_ICON_PROPS_TYPE_DESCRIPTION_`,type:`String`,default:`select`,required:!1}]}}var ie={name:`PageSelectIcon`,components:{AlohaPage:e,AlohaTableProps:t,ATranslation:_,PageSelectIconBasic:C,PageSelectIconLabelPosition:J,PageSelectIconChange:O,PageSelectIconErrors:N,PageSelectIconHelpText:R,PageSelectIconLabelDescription:H,PageSelectIconReadonly:$},setup(){let{pageTitle:e}=ne(),{dataProps:t}=re(),{dataEvents:n}=te();return{dataEvents:n,dataProps:t,pageTitle:e}}};function ae(e,t,n,i,o,s){let c=p(`a-translation`),d=p(`page-select-icon-basic`),f=p(`page-select-icon-label-position`),m=p(`page-select-icon-change`),h=p(`page-select-icon-help-text`),g=p(`page-select-icon-errors`),_=p(`page-select-icon-label-description`),v=p(`page-select-icon-readonly`),y=p(`aloha-table-props`),b=p(`aloha-page`);return l(),a(b,{"page-title":e.pageTitle},{body:u(()=>[r(c,{tag:`p`,html:`_A_SELECT_ICON_COMPONENT_DESCRIPTION_`}),r(d),r(f),r(m),r(h),r(g),r(_),r(v),r(y,{data:e.dataProps},null,8,[`data`]),r(y,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`])]),_:1},8,[`page-title`])}var oe=v(ie,[[`render`,ae]]);export{oe as default};