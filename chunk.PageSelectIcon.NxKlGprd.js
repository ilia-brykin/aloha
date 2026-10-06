import{$t as e,Ct as t,Tt as n,Ut as r,Yt as i,kt as a,qt as o,wt as s,zt as c}from"./chunk.vendor.CZPox1kV.js";import{R as l,Z as u,kt as d,t as f}from"./bundle.index.BmSiyQNH.js";import{n as p,t as m}from"./chunk.AlohaExample.CD4LlhAz.js";import{t as h}from"./chunk.AlohaTableProps.Dksi7fmb.js";function g(){return{codeHtml:`<a-select-icon
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
<div>model2: {{ model2 }}</div>`}}function _(){return{codeJs:`import {
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
};`}}var v={name:`PageSelectIconBasic`,components:{AlohaExample:m,ASelectIcon:l},setup(){let{codeHtml:e}=g(),{codeJs:t}=_();return{codeHtml:e,codeJs:t,model1:i(void 0),model2:i(void 0)}}};function y(t,i,l,u,d,f){let p=r(`a-select-icon`),m=r(`aloha-example`);return c(),n(m,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`type`]},{default:o(()=>[a(p,{modelValue:t.model1,"onUpdate:modelValue":i[0]||=e=>t.model1=e,label:`Select`,type:`select`},null,8,[`modelValue`]),s(`div`,null,`model1: `+e(t.model1),1),a(p,{class:`a_mt_3`,modelValue:t.model2,"onUpdate:modelValue":i[1]||=e=>t.model2=e,label:`Multiselect`,type:`multiselect`},null,8,[`modelValue`]),s(`div`,null,`model2: `+e(t.model2),1)]),_:1},8,[`code-html`,`code-js`])}var b=f(v,[[`render`,y]]);function x(){return{codeHtml:`<a-select-icon
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
<div>model1: {{ model1 }}</div>`}}function S(){return{codeJs:`import {
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
};`}}var C={name:`PageSelectIconChange`,components:{AlohaExample:m,ASelectIcon:l},setup(){let e=i(void 0),t=i(void 0),n=({model:t,id:n,props:r,item:i,currentModel:a})=>{e.value=t,console.log(n,r,i,a)},r=({model:e,id:n,props:r,item:i,currentModel:a})=>{t.value=e,console.log(n,r,i,a)},{codeHtml:a}=x(),{codeJs:o}=S();return{changeModel1:n,changeModel2:r,codeHtml:a,codeJs:o,model1:e,model2:t}}};function w(t,i,l,u,d,f){let p=r(`a-select-icon`),m=r(`aloha-example`);return c(),n(m,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_UI_GROUP_CHANGE_HEADER_`,description:`_A_UI_GROUP_CHANGE_DESCRIPTION_`,props:[`change`,`model-value`]},{default:o(()=>[a(p,{change:t.changeModel1,"model-value":t.model1,label:`Select 1`},null,8,[`change`,`model-value`]),s(`div`,null,`model1: `+e(t.model1),1),a(p,{class:`a_mt_3`,change:t.changeModel2,"model-value":t.model2,label:`Select 2`,type:`multiselect`},null,8,[`change`,`model-value`]),s(`div`,null,`model2: `+e(t.model2),1)]),_:1},8,[`code-html`,`code-js`])}var T=f(C,[[`render`,w]]);function E(){return{codeHtml:`<a-select-icon
  v-model="model"
  errors="Aloha"
  label="Select"
></a-select-icon>`}}function D(){return{codeJs:`import {
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
};`}}var O={name:`PageSelectIconErrors`,components:{AlohaExample:m,ASelectIcon:l},setup(){let e=i(void 0),{codeHtml:t}=E(),{codeJs:n}=D();return{codeHtml:t,codeJs:n,model:e}}};function k(e,t,i,s,l,u){let d=r(`a-select-icon`),f=r(`aloha-example`);return c(),n(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_ERRORS_HEADER_`,description:`_A_UI_GROUP_ERRORS_DESCRIPTION_`,props:[`errors`]},{default:o(()=>[a(d,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,errors:`Aloha`,label:`Select`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var A=f(O,[[`render`,k]]);function j(){return{codeHtml:`<a-select-icon
  v-model="model"
  help-text="Aloha"
  label="Select"
></a-select-icon>`}}function M(){return{codeJs:`import {
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
};`}}var N={name:`PageSelectIconHelpText`,components:{AlohaExample:m,ASelectIcon:l},setup(){let e=i(void 0),{codeHtml:t}=j(),{codeJs:n}=M();return{codeHtml:t,codeJs:n,model:e}}};function P(e,t,i,s,l,u){let d=r(`a-select-icon`),f=r(`aloha-example`);return c(),n(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_HELP_TEXT_HEADER_`,description:`_A_UI_GROUP_HELP_TEXT_DESCRIPTION_`,props:[`help-text`]},{default:o(()=>[a(d,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"help-text":`Aloha`,label:`Select`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var F=f(N,[[`render`,P]]);function I(){return{codeHtml:`<a-select-icon
  v-model="model"
  :is-label-float="false"
  label="Select"
  label-description="Aloha"
></a-select-icon>`}}function L(){return{codeJs:`import {
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
};`}}var R={name:`PageSelectIconLabelDescription`,components:{AlohaExample:m,ASelectIcon:l},setup(){let e=i(void 0),{codeHtml:t}=I(),{codeJs:n}=L();return{codeHtml:t,codeJs:n,model:e}}};function z(e,t,i,s,l,u){let d=r(`a-select-icon`),f=r(`aloha-example`);return c(),n(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_`,description:`_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_`,props:[`label-description`]},{default:o(()=>[a(d,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"is-label-float":!1,label:`Select`,"label-description":`Aloha`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var B=f(R,[[`render`,z]]);function V(){return{codeHtml:`<a-select-icon
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
></a-select-icon>`}}function H(){return{codeJs:`import {
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
};`}}var U={name:`PageSelectIconReadonly`,components:{AlohaExample:m,ASelectIcon:l},setup(){let{codeHtml:e}=V(),{codeJs:t}=H();return{codeHtml:e,codeJs:t,model1:i(`ArrowRightCircle`),model2:i([`Boxes`,`ChevronBarExpand`]),model3:i(void 0)}}};function W(e,t,i,s,l,u){let d=r(`a-select-icon`),f=r(`aloha-example`);return c(),n(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_READONLY_HEADER_`,description:`_A_UI_GROUP_READONLY_DESCRIPTION_`,props:[`readonly`,`readonly-default`]},{default:o(()=>[a(d,{"model-value":e.model1,readonly:!0,label:`Select 1`,type:`select`},null,8,[`model-value`]),a(d,{class:`a_mt_3`,"model-value":e.model2,readonly:!0,label:`Select 2`,type:`multiselect`},null,8,[`model-value`]),a(d,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,label:`Select 3`,type:`select`},null,8,[`model-value`]),a(d,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,label:`Select 4`,type:`multiselect`},null,8,[`model-value`]),a(d,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,"help-text":`Aloha`,label:`Select 5`,"readonly-default":`-`,type:`select`},null,8,[`model-value`])]),_:1},8,[`code-html`,`code-js`])}var G=f(U,[[`render`,W]]);function K(){return{dataEvents:[{name:`update:model-value`,description:`_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_`,type:`Function`},{name:`focus`,description:`_A_UI_EVENTS_FOCUS_DESCRIPTION_`,type:`Function`},{name:`blur`,description:`_A_UI_EVENTS_BLUR_DESCRIPTION_`,type:`Function`},{name:`open`,description:`_A_SELECT_EVENTS_OPEN_DESCRIPTION_`,type:`Function`}]}}function q(){let e=t(()=>d({placeholder:`_A_SELECT_ICON_COMPONENT_NAME_`}));return{pageTitle:t(()=>`ASelectIcon${e.value?` (${e.value})`:``}`)}}function J(){return{dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`button-class`,description:`_A_SELECT_PROPS_BUTTON_CLASS_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`button-class-default`,description:`_A_SELECT_PROPS_BUTTON_CLASS_DEFAULT_DESCRIPTION_`,type:`String / Object`,default:`a_form_control a_select_toggle`,required:!1},{name:`caret-icon`,description:`_A_SELECT_PROPS_CARET_ICON_DESCRIPTION_`,type:`String / Object`,default:`ChevronDown`,required:!1},{name:`change`,description:`_A_UI_PROPS_CHANGE_DESCRIPTION_`,type:`Function`,default:`() => {}`,required:!1},{name:`class`,description:`_A_SELECT_PROPS_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`count-multiselect`,description:`_A_SELECT_PROPS_COUNT_MULTISELECT_DESCRIPTION_`,type:`Number`,default:4,required:!1},{name:`data`,description:`_A_UI_PROPS_DATA_DESCRIPTION_`,type:`Array`,default:void 0,required:!1},{name:`dependencies`,description:`_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_`,type:`Array / Object`,default:void 0,required:!1},{name:`deselectable`,description:`_A_SELECT_PROPS_DESELECTABLE_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`disabled`,description:`_A_UI_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`errors`,description:`_A_UI_PROPS_ERRORS_DESCRIPTION_`,type:`String / Array`,default:void 0,required:!1},{name:`exceeded-items-deletable`,description:`_A_SELECT_PROPS_EXCEEDED_ITEMS_DELETABLE_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`exclude-render-attributes`,description:`_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`extra`,description:`_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`has-caret`,description:`_A_SELECT_PROPS_HAS_CARET_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`help-text`,description:`_A_UI_PROPS_HELP_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`html-id`,description:`_A_UI_PROPS_HTML_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`id`,description:`_A_UI_PROPS_ID_DESCRIPTION_`,type:`String / Number`,default:`() => uniqueId("a_select_icon_")`,required:!1},{name:`id-prefix`,description:`_A_UI_PROPS_ID_PREFIX_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`in-body`,description:`_A_SELECT_PROPS_IN_BODY_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-close-by-click`,description:`_A_SELECT_PROPS_IS_CLOSE_BY_CLICK_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-deselect-all`,description:`_A_SELECT_PROPS_IS_DESELECT_ALL_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-hide`,description:`_A_UI_PROPS_IS_HIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-label-float`,description:`_A_UI_PROPS_IS_LABEL_FLOAT_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-render`,description:`_A_UI_PROPS_IS_RENDER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-select-all`,description:`_A_SELECT_PROPS_IS_SELECT_ALL_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-selection-closeable`,description:`_A_SELECT_PROPS_IS_SELECTION_CLOSEABLE_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`key-disabled`,description:`_A_UI_PROPS_KEY_DISABLED_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`key-disabled-callback`,description:`_A_UI_PROPS_KEY_DISABLED_CALLBACK_DESCRIPTION_`,type:`Function`,default:void 0,required:!1},{name:`key-group`,description:`_A_UI_PROPS_KEY_GROUP_DESCRIPTION_`,type:`String / Number / Array`,default:`() => ["groupName", "subGroupName"]`,required:!1},{name:`key-group-label-callback`,description:`_A_UI_PROPS_KEY_GROUP_LABEL_CALLBACK_DESCRIPTION_`,type:`Function`,default:void 0,required:!1},{name:`key-id`,description:`_A_UI_PROPS_KEY_ID_DESCRIPTION_`,type:`String`,default:`value`,required:!1},{name:`key-label`,description:`_A_UI_PROPS_KEY_LABEL_DESCRIPTION_`,type:`String`,default:`label`,required:!1},{name:`key-label-callback`,description:`_A_UI_PROPS_KEY_LABEL_CALLBACK_DESCRIPTION_`,type:`Function`,default:void 0,required:!1},{name:`key-title`,description:`_A_UI_PROPS_KEY_TITLE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`key-title-callback`,description:`_A_UI_PROPS_KEY_TITLE_CALLBACK_DESCRIPTION_`,type:`Function`,default:void 0,required:!1},{name:`label`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`label-class`,description:`_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`label-description`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`label-screen-reader`,description:`_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`max-count-multiselect`,description:`_A_SELECT_PROPS_MAX_COUNT_MULTISELECT_DESCRIPTION_`,type:`Number`,default:void 0,required:!1},{name:`menu-width-type`,description:`_A_SELECT_PROPS_MENU_WIDTH_TYPE_DESCRIPTION_`,type:`String`,default:`as_button`,required:!1},{name:`model-dependencies`,description:`_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`model-value`,description:`_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_`,type:`String / Array`,default:void 0,required:!1},{name:`options`,description:`_A_UI_PROPS_OPTIONS_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`placeholder`,description:`_A_UI_PROPS_PLACEHOLDER_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`placement`,description:`_A_UI_PROPS_PLACEMENT_DESCRIPTION_`,type:`String`,default:`bottom-end`,required:!1},{name:`popper-container-id`,description:`_A_UI_PROPS_POPPER_CONTAINER_ID_DESCRIPTION_`,type:`String`,default:`a_select_container`,required:!1},{name:`readonly`,description:`_A_UI_PROPS_READONLY_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`readonly-default`,description:`_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_`,type:`String`,default:``,required:!1},{name:`required`,description:`_A_UI_PROPS_REQUIRED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`search`,description:`_A_UI_PROPS_SEARCH_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`search-text-in-html`,description:`_A_UI_PROPS_SEARCH_TEXT_IN_HTML_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`search-timeout`,description:`_A_UI_PROPS_SEARCH_TIMEOUT_DESCRIPTION_`,type:`Number`,default:0,required:!1},{name:`select-menu-class`,description:`_A_SELECT_PROPS_SELECT_MENU_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`slot-name`,description:`_A_UI_PROPS_SLOT_NAME_DESCRIPTION_`,type:`String`,default:`icon`,required:!1},{name:`sort-order`,description:`_A_UI_PROPS_SORT_ORDER_DESCRIPTION_`,type:`String`,default:`asc`,required:!1},{name:`text-deselect-all`,description:`_A_SELECT_PROPS_TEXT_DESELECT_ALL_DESCRIPTION_`,type:`String`,default:`_A_SELECT_DESELECT_ALL_`,required:!1},{name:`text-select-all`,description:`_A_SELECT_PROPS_TEXT_SELECT_ALL_DESCRIPTION_`,type:`String`,default:`_A_SELECT_SELECT_ALL_`,required:!1},{name:`type`,description:`_A_SELECT_ICON_PROPS_TYPE_DESCRIPTION_`,type:`String`,default:`select`,required:!1}]}}var Y={name:`PageSelectIcon`,components:{AlohaPage:p,AlohaTableProps:h,ATranslation:u,PageSelectIconBasic:b,PageSelectIconChange:T,PageSelectIconErrors:A,PageSelectIconHelpText:F,PageSelectIconLabelDescription:B,PageSelectIconReadonly:G},setup(){let{pageTitle:e}=q(),{dataProps:t}=J(),{dataEvents:n}=K();return{dataEvents:n,dataProps:t,pageTitle:e}}};function X(e,t,i,s,l,u){let d=r(`a-translation`),f=r(`page-select-icon-basic`),p=r(`page-select-icon-change`),m=r(`page-select-icon-help-text`),h=r(`page-select-icon-errors`),g=r(`page-select-icon-label-description`),_=r(`page-select-icon-readonly`),v=r(`aloha-table-props`),y=r(`aloha-page`);return c(),n(y,{"page-title":e.pageTitle},{body:o(()=>[a(d,{tag:`p`,html:`_A_SELECT_ICON_COMPONENT_DESCRIPTION_`}),a(f),a(p),a(m),a(h),a(g),a(_),a(v,{data:e.dataProps},null,8,[`data`]),a(v,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`])]),_:1},8,[`page-title`])}var Z=f(Y,[[`render`,X]]);export{Z as default};