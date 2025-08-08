import{A as I,a as y}from"./chunk.AlohaExample.DMfJ8IzN.js";import{A as L}from"./chunk.AlohaTableProps.CpDsOUFI.js";import{$ as E,_ as u,g,A as h}from"./bundle.index.BEPV3T-Y.js";import{r as s,V as m,aT as p,e as l,W as S,_ as n,Z as A,aU as O,d as T}from"./chunk.vendor.Daji9SX9.js";import"./chunk.vendor-lodash.B3VVIBC-.js";import"./chunk.APageTabTitle.Va209jVg.js";import"./chunk.AlohaHighlightjs.BMm9LXzJ.js";import"./chunk.ATable.DnZRSQ59.js";import"./chunk.translations-ar.BojwqMl_.js";import"./chunk.translations-de.Cs8AX5zd.js";import"./chunk.translations-en.B6SbFZD7.js";import"./chunk.translations-es.Bq5-ThmB.js";import"./chunk.translations-fr.CNUiPhMd.js";import"./chunk.translations-hr.BHL5VI6-.js";import"./chunk.translations-it.CT6ME8Ab.js";import"./chunk.translations-ru.-V16kngL.js";function U(){return{codeHtml:`<a-select-icon
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
};`}}const v={name:"PageSelectIconBasic",components:{AlohaExample:I,ASelectIcon:E},setup(){const{codeHtml:e}=U(),{codeJs:t}=b(),a=s(void 0),c=s(void 0);return{codeHtml:e,codeJs:t,model1:a,model2:c}}};function q(e,t,a,c,r,i){const o=l("a-select-icon"),_=l("aloha-example");return S(),m(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","type"]},{default:p(()=>[n(o,{modelValue:e.model1,"onUpdate:modelValue":t[0]||(t[0]=d=>e.model1=d),label:"Select",type:"select"},null,8,["modelValue"]),A("div",null,"model1: "+O(e.model1),1),n(o,{class:"a_mt_3",modelValue:e.model2,"onUpdate:modelValue":t[1]||(t[1]=d=>e.model2=d),label:"Multiselect",type:"multiselect"},null,8,["modelValue"]),A("div",null,"model2: "+O(e.model2),1)]),_:1},8,["code-html","code-js"])}const B=u(v,[["render",q]]);function H(){return{codeHtml:`<a-select-icon
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
<div>model1: {{ model1 }}</div>`}}function $(){return{codeJs:`import {
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
};`}}const M={name:"PageSelectIconChange",components:{AlohaExample:I,ASelectIcon:E},setup(){const e=s(void 0),t=s(void 0),a=({model:o,id:_,props:d,item:P,currentModel:f})=>{e.value=o,console.log(_,d,P,f)},c=({model:o,id:_,props:d,item:P,currentModel:f})=>{t.value=o,console.log(_,d,P,f)},{codeHtml:r}=H(),{codeJs:i}=$();return{changeModel1:a,changeModel2:c,codeHtml:r,codeJs:i,model1:e,model2:t}}};function J(e,t,a,c,r,i){const o=l("a-select-icon"),_=l("aloha-example");return S(),m(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CHANGE_HEADER_",description:"_A_UI_GROUP_CHANGE_DESCRIPTION_",props:["change","model-value"]},{default:p(()=>[n(o,{change:e.changeModel1,"model-value":e.model1,label:"Select 1"},null,8,["change","model-value"]),A("div",null,"model1: "+O(e.model1),1),n(o,{class:"a_mt_3",change:e.changeModel2,"model-value":e.model2,label:"Select 2",type:"multiselect"},null,8,["change","model-value"]),A("div",null,"model2: "+O(e.model2),1)]),_:1},8,["code-html","code-js"])}const V=u(M,[["render",J]]);function j(){return{codeHtml:`<a-select-icon
  v-model="model"
  errors="Aloha"
  label="Select"
></a-select-icon>`}}function G(){return{codeJs:`import {
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
};`}}const Y={name:"PageSelectIconErrors",components:{AlohaExample:I,ASelectIcon:E},setup(){const e=s(void 0),{codeHtml:t}=j(),{codeJs:a}=G();return{codeHtml:t,codeJs:a,model:e}}};function k(e,t,a,c,r,i){const o=l("a-select-icon"),_=l("aloha-example");return S(),m(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERRORS_HEADER_",description:"_A_UI_GROUP_ERRORS_DESCRIPTION_",props:["errors"]},{default:p(()=>[n(o,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=d=>e.model=d),errors:"Aloha",label:"Select"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const x=u(Y,[["render",k]]);function F(){return{codeHtml:`<a-select-icon
  v-model="model"
  help-text="Aloha"
  label="Select"
></a-select-icon>`}}function K(){return{codeJs:`import {
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
};`}}const X={name:"PageSelectIconHelpText",components:{AlohaExample:I,ASelectIcon:E},setup(){const e=s(void 0),{codeHtml:t}=F(),{codeJs:a}=K();return{codeHtml:t,codeJs:a,model:e}}};function w(e,t,a,c,r,i){const o=l("a-select-icon"),_=l("aloha-example");return S(),m(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_HELP_TEXT_HEADER_",description:"_A_UI_GROUP_HELP_TEXT_DESCRIPTION_",props:["help-text"]},{default:p(()=>[n(o,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=d=>e.model=d),"help-text":"Aloha",label:"Select"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const W=u(X,[["render",w]]);function Q(){return{codeHtml:`<a-select-icon
  v-model="model"
  :is-label-float="false"
  label="Select"
  label-description="Aloha"
></a-select-icon>`}}function Z(){return{codeJs:`import {
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
};`}}const z={name:"PageSelectIconLabelDescription",components:{AlohaExample:I,ASelectIcon:E},setup(){const e=s(void 0),{codeHtml:t}=Q(),{codeJs:a}=Z();return{codeHtml:t,codeJs:a,model:e}}};function ee(e,t,a,c,r,i){const o=l("a-select-icon"),_=l("aloha-example");return S(),m(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_",description:"_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_",props:["label-description"]},{default:p(()=>[n(o,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=d=>e.model=d),"is-label-float":!1,label:"Select","label-description":"Aloha"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const te=u(z,[["render",ee]]);function oe(){return{codeHtml:`<a-select-icon
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
></a-select-icon>`}}function le(){return{codeJs:`import {
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
};`}}const ne={name:"PageSelectIconReadonly",components:{AlohaExample:I,ASelectIcon:E},setup(){const{codeHtml:e}=oe(),{codeJs:t}=le(),a=s("ArrowRightCircle"),c=s(["Boxes","ChevronBarExpand"]),r=s(void 0);return{codeHtml:e,codeJs:t,model1:a,model2:c,model3:r}}};function ae(e,t,a,c,r,i){const o=l("a-select-icon"),_=l("aloha-example");return S(),m(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default"]},{default:p(()=>[n(o,{"model-value":e.model1,readonly:!0,label:"Select 1",type:"select"},null,8,["model-value"]),n(o,{class:"a_mt_3","model-value":e.model2,readonly:!0,label:"Select 2",type:"multiselect"},null,8,["model-value"]),n(o,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"Select 3",type:"select"},null,8,["model-value"]),n(o,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"Select 4",type:"multiselect"},null,8,["model-value"]),n(o,{class:"a_mt_3","model-value":e.model3,readonly:!0,"help-text":"Aloha",label:"Select 5","readonly-default":"-",type:"select"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const _e=u(ne,[["render",ae]]);function de(){return{dataEvents:[{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"},{name:"focus",description:"_A_UI_EVENTS_FOCUS_DESCRIPTION_",type:"Function"},{name:"blur",description:"_A_UI_EVENTS_BLUR_DESCRIPTION_",type:"Function"},{name:"open",description:"_A_SELECT_EVENTS_OPEN_DESCRIPTION_",type:"Function"}]}}function ce(){const e=T(()=>g({placeholder:"_A_SELECT_ICON_COMPONENT_NAME_"}));return{pageTitle:T(()=>`ASelectIcon${e.value?` (${e.value})`:""}`)}}function re(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"button-class",description:"_A_SELECT_PROPS_BUTTON_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"button-class-default",description:"_A_SELECT_PROPS_BUTTON_CLASS_DEFAULT_DESCRIPTION_",type:"String / Object",default:"a_form_control a_select_toggle",required:!1},{name:"caret-icon",description:"_A_SELECT_PROPS_CARET_ICON_DESCRIPTION_",type:"String / Object",default:"ChevronDown",required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"class",description:"_A_SELECT_PROPS_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"count-multiselect",description:"_A_SELECT_PROPS_COUNT_MULTISELECT_DESCRIPTION_",type:"Number",default:4,required:!1},{name:"data",description:"_A_UI_PROPS_DATA_DESCRIPTION_",type:"Array",default:void 0,required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"deselectable",description:"_A_SELECT_PROPS_DESELECTABLE_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exceeded-items-deletable",description:"_A_SELECT_PROPS_EXCEEDED_ITEMS_DELETABLE_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"has-caret",description:"_A_SELECT_PROPS_HAS_CARET_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_select_icon_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"in-body",description:"_A_SELECT_PROPS_IN_BODY_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-close-by-click",description:"_A_SELECT_PROPS_IS_CLOSE_BY_CLICK_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-deselect-all",description:"_A_SELECT_PROPS_IS_DESELECT_ALL_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-label-float",description:"_A_UI_PROPS_IS_LABEL_FLOAT_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-select-all",description:"_A_SELECT_PROPS_IS_SELECT_ALL_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-selection-closeable",description:"_A_SELECT_PROPS_IS_SELECTION_CLOSEABLE_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"key-disabled",description:"_A_UI_PROPS_KEY_DISABLED_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"key-disabled-callback",description:"_A_UI_PROPS_KEY_DISABLED_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"key-group",description:"_A_UI_PROPS_KEY_GROUP_DESCRIPTION_",type:"String / Number / Array",default:'() => ["groupName", "subGroupName"]',required:!1},{name:"key-group-label-callback",description:"_A_UI_PROPS_KEY_GROUP_LABEL_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"key-id",description:"_A_UI_PROPS_KEY_ID_DESCRIPTION_",type:"String",default:"value",required:!1},{name:"key-label",description:"_A_UI_PROPS_KEY_LABEL_DESCRIPTION_",type:"String",default:"label",required:!1},{name:"key-label-callback",description:"_A_UI_PROPS_KEY_LABEL_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"key-title",description:"_A_UI_PROPS_KEY_TITLE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"key-title-callback",description:"_A_UI_PROPS_KEY_TITLE_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-description",description:"_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"max-count-multiselect",description:"_A_SELECT_PROPS_MAX_COUNT_MULTISELECT_DESCRIPTION_",type:"Number",default:void 0,required:!1},{name:"menu-width-type",description:"_A_SELECT_PROPS_MENU_WIDTH_TYPE_DESCRIPTION_",type:"String",default:"as_button",required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"options",description:"_A_UI_PROPS_OPTIONS_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"placeholder",description:"_A_UI_PROPS_PLACEHOLDER_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"placement",description:"_A_UI_PROPS_PLACEMENT_DESCRIPTION_",type:"String",default:"bottom-end",required:!1},{name:"popper-container-id",description:"_A_UI_PROPS_POPPER_CONTAINER_ID_DESCRIPTION_",type:"String",default:"a_select_container",required:!1},{name:"readonly",description:"_A_UI_PROPS_READONLY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"readonly-default",description:"_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_",type:"String",default:"",required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search",description:"_A_UI_PROPS_SEARCH_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search-text-in-html",description:"_A_UI_PROPS_SEARCH_TEXT_IN_HTML_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search-timeout",description:"_A_UI_PROPS_SEARCH_TIMEOUT_DESCRIPTION_",type:"Number",default:0,required:!1},{name:"select-menu-class",description:"_A_SELECT_PROPS_SELECT_MENU_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"slot-name",description:"_A_UI_PROPS_SLOT_NAME_DESCRIPTION_",type:"String",default:"icon",required:!1},{name:"sort-order",description:"_A_UI_PROPS_SORT_ORDER_DESCRIPTION_",type:"String",default:"asc",required:!1},{name:"text-deselect-all",description:"_A_SELECT_PROPS_TEXT_DESELECT_ALL_DESCRIPTION_",type:"String",default:"_A_SELECT_DESELECT_ALL_",required:!1},{name:"text-select-all",description:"_A_SELECT_PROPS_TEXT_SELECT_ALL_DESCRIPTION_",type:"String",default:"_A_SELECT_SELECT_ALL_",required:!1},{name:"type",description:"_A_SELECT_ICON_PROPS_TYPE_DESCRIPTION_",type:"String",default:"select",required:!1}]}}const se={name:"PageSelectIcon",components:{AlohaPage:y,AlohaTableProps:L,ATranslation:h,PageSelectIconBasic:B,PageSelectIconChange:V,PageSelectIconErrors:x,PageSelectIconHelpText:W,PageSelectIconLabelDescription:te,PageSelectIconReadonly:_e},setup(){const{pageTitle:e}=ce(),{dataProps:t}=re(),{dataEvents:a}=de();return{dataEvents:a,dataProps:t,pageTitle:e}}};function ie(e,t,a,c,r,i){const o=l("a-translation"),_=l("page-select-icon-basic"),d=l("page-select-icon-change"),P=l("page-select-icon-help-text"),f=l("page-select-icon-errors"),C=l("page-select-icon-label-description"),N=l("page-select-icon-readonly"),R=l("aloha-table-props"),D=l("aloha-page");return S(),m(D,{"page-title":e.pageTitle},{body:p(()=>[n(o,{tag:"p",html:"_A_SELECT_ICON_COMPONENT_DESCRIPTION_"}),n(_),n(d),n(P),n(f),n(C),n(N),n(R,{data:e.dataProps},null,8,["data"]),n(R,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"])]),_:1},8,["page-title"])}const Le=u(se,[["render",ie]]);export{Le as default};
