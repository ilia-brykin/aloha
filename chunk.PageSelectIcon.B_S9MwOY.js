import{A as P,a as y}from"./chunk.AlohaExample.D3Vpchcx.js";import{A as D}from"./chunk.AlohaTableProps.DYLjXwAN.js";import{$ as f,_ as u,g as L,A as g}from"./bundle.index.COyZfTcf.js";import{r as s,V as m,aT as p,e as n,W as S,_ as o,Z as A,aU as O,d as T}from"./chunk.vendor.BxCHGHAU.js";import"./chunk.vendor-lodash.BMPrua2s.js";import"./chunk.APageTabTitle._tjG36jq.js";import"./chunk.AlohaHighlightjs.B3F2oL8_.js";import"./chunk.ATable.CRwy2Rv9.js";import"./chunk.translations-ar.DEWt73y8.js";import"./chunk.translations-de.CN5eAU-4.js";import"./chunk.translations-en.CPCEcTAP.js";import"./chunk.translations-es.BKTK5PUv.js";import"./chunk.translations-fr.CslimZmU.js";import"./chunk.translations-hr.CiJ7_Y2m.js";import"./chunk.translations-it.H45F8miC.js";import"./chunk.translations-ru.BBPhVNwB.js";function h(){return{codeHtml:`<a-select-icon
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
<div>model2: {{ model2 }}</div>`}}function U(){return{codeJs:`import {
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
};`}}const b={name:"PageSelectIconBasic",components:{AlohaExample:P,ASelectIcon:f},setup(){const{codeHtml:e}=h(),{codeJs:t}=U(),a=s(void 0),r=s(void 0);return{codeHtml:e,codeJs:t,model1:a,model2:r}}};function v(e,t,a,r,c,i){const l=n("a-select-icon"),_=n("aloha-example");return S(),m(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","type"]},{default:p(()=>[o(l,{modelValue:e.model1,"onUpdate:modelValue":t[0]||(t[0]=d=>e.model1=d),label:"Select",type:"select"},null,8,["modelValue"]),A("div",null,"model1: "+O(e.model1),1),o(l,{class:"a_mt_3",modelValue:e.model2,"onUpdate:modelValue":t[1]||(t[1]=d=>e.model2=d),label:"Multiselect",type:"multiselect"},null,8,["modelValue"]),A("div",null,"model2: "+O(e.model2),1)]),_:1},8,["code-html","code-js"])}const q=u(b,[["render",v]]);function B(){return{codeHtml:`<a-a-select-icon
  :change="changeModel1"
  :model-value="model1"
  label="Select 1"
></a-a-select-icon>
<div>model1: {{ model1 }}</div>
<a-a-select-icon
  :change="changeModel2"
  :model-value="model2"
  class="a_mt_3"
  label="Select 2"
  type="multiselect"
></a-a-select-icon>
<div>model1: {{ model1 }}</div>`}}function H(){return{codeJs:`import {
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
};`}}const $={name:"PageSelectIconChange",components:{AlohaExample:P,ASelectIcon:f},setup(){const e=s(void 0),t=s(void 0),a=({model:l,id:_,props:d,item:E,currentModel:I})=>{e.value=l,console.log(_,d,E,I)},r=({model:l,id:_,props:d,item:E,currentModel:I})=>{t.value=l,console.log(_,d,E,I)},{codeHtml:c}=B(),{codeJs:i}=H();return{changeModel1:a,changeModel2:r,codeHtml:c,codeJs:i,model1:e,model2:t}}};function M(e,t,a,r,c,i){const l=n("a-select-icon"),_=n("aloha-example");return S(),m(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CHANGE_HEADER_",description:"_A_UI_GROUP_CHANGE_DESCRIPTION_",props:["change","model-value"]},{default:p(()=>[o(l,{change:e.changeModel1,"model-value":e.model1,label:"Select 1"},null,8,["change","model-value"]),A("div",null,"model1: "+O(e.model1),1),o(l,{class:"a_mt_3",change:e.changeModel2,"model-value":e.model2,label:"Select 2",type:"multiselect"},null,8,["change","model-value"]),A("div",null,"model2: "+O(e.model2),1)]),_:1},8,["code-html","code-js"])}const J=u($,[["render",M]]);function V(){return{codeHtml:`<a-select-icon
  v-model="model"
  errors="Aloha"
  label="Select"
></a-select-icon>`}}function j(){return{codeJs:`import {
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
};`}}const Y={name:"PageSelectIconErrors",components:{AlohaExample:P,ASelectIcon:f},setup(){const e=s(void 0),{codeHtml:t}=V(),{codeJs:a}=j();return{codeHtml:t,codeJs:a,model:e}}};function k(e,t,a,r,c,i){const l=n("a-select-icon"),_=n("aloha-example");return S(),m(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERRORS_HEADER_",description:"_A_UI_GROUP_ERRORS_DESCRIPTION_",props:["errors"]},{default:p(()=>[o(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=d=>e.model=d),errors:"Aloha",label:"Select"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const G=u(Y,[["render",k]]);function x(){return{codeHtml:`<a-select-icon
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
};`}}const K={name:"PageSelectIconHelpText",components:{AlohaExample:P,ASelectIcon:f},setup(){const e=s(void 0),{codeHtml:t}=x(),{codeJs:a}=F();return{codeHtml:t,codeJs:a,model:e}}};function X(e,t,a,r,c,i){const l=n("a-select-icon"),_=n("aloha-example");return S(),m(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_HELP_TEXT_HEADER_",description:"_A_UI_GROUP_HELP_TEXT_DESCRIPTION_",props:["help-text"]},{default:p(()=>[o(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=d=>e.model=d),"help-text":"Aloha",label:"Select"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const w=u(K,[["render",X]]);function W(){return{codeHtml:`<a-select-icon
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
></a-select-icon>`}}function Q(){return{codeJs:`import {
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
};`}}const Z={name:"PageSelectIconReadonly",components:{AlohaExample:P,ASelectIcon:f},setup(){const{codeHtml:e}=W(),{codeJs:t}=Q(),a=s("ArrowRightCircle"),r=s(["Boxes","ChevronBarExpand"]),c=s(void 0);return{codeHtml:e,codeJs:t,model1:a,model2:r,model3:c}}};function z(e,t,a,r,c,i){const l=n("a-select-icon"),_=n("aloha-example");return S(),m(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default"]},{default:p(()=>[o(l,{"model-value":e.model1,readonly:!0,label:"Select 1",type:"select"},null,8,["model-value"]),o(l,{class:"a_mt_3","model-value":e.model2,readonly:!0,label:"Select 2",type:"multiselect"},null,8,["model-value"]),o(l,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"Select 3",type:"select"},null,8,["model-value"]),o(l,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"Select 4",type:"multiselect"},null,8,["model-value"]),o(l,{class:"a_mt_3","model-value":e.model3,readonly:!0,"help-text":"Aloha",label:"Select 5","readonly-default":"-",type:"select"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const ee=u(Z,[["render",z]]);function te(){return{dataEvents:[{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"},{name:"focus",description:"_A_UI_EVENTS_FOCUS_DESCRIPTION_",type:"Function"},{name:"blur",description:"_A_UI_EVENTS_BLUR_DESCRIPTION_",type:"Function"},{name:"open",description:"_A_SELECT_EVENTS_OPEN_DESCRIPTION_",type:"Function"}]}}function le(){const e=T(()=>L({placeholder:"_A_SELECT_ICON_COMPONENT_NAME_"}));return{pageTitle:T(()=>`ASelectIcon${e.value?` (${e.value})`:""}`)}}function oe(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"button-class",description:"_A_SELECT_PROPS_BUTTON_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"button-class-default",description:"_A_SELECT_PROPS_BUTTON_CLASS_DEFAULT_DESCRIPTION_",type:"String / Object",default:"a_form_control a_select_toggle",required:!1},{name:"caret-icon",description:"_A_SELECT_PROPS_CARET_ICON_DESCRIPTION_",type:"String / Object",default:"ChevronDown",required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"class",description:"_A_SELECT_PROPS_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"count-multiselect",description:"_A_SELECT_PROPS_COUNT_MULTISELECT_DESCRIPTION_",type:"Number",default:4,required:!1},{name:"data",description:"_A_UI_PROPS_DATA_DESCRIPTION_",type:"Array",default:void 0,required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"deselectable",description:"_A_SELECT_PROPS_DESELECTABLE_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exceeded-items-deletable",description:"_A_SELECT_PROPS_EXCEEDED_ITEMS_DELETABLE_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"has-caret",description:"_A_SELECT_PROPS_HAS_CARET_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_select_icon_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"in-body",description:"_A_SELECT_PROPS_IN_BODY_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-close-by-click",description:"_A_SELECT_PROPS_IS_CLOSE_BY_CLICK_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-deselect-all",description:"_A_SELECT_PROPS_IS_DESELECT_ALL_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-label-float",description:"_A_UI_PROPS_IS_LABEL_FLOAT_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-select-all",description:"_A_SELECT_PROPS_IS_SELECT_ALL_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-selection-closeable",description:"_A_SELECT_PROPS_IS_SELECTION_CLOSEABLE_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"key-disabled",description:"_A_UI_PROPS_KEY_DISABLED_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"key-disabled-callback",description:"_A_UI_PROPS_KEY_DISABLED_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"key-group",description:"_A_UI_PROPS_KEY_GROUP_DESCRIPTION_",type:"String / Number / Array",default:'() => ["groupName", "subGroupName"]',required:!1},{name:"key-group-label-callback",description:"_A_UI_PROPS_KEY_GROUP_LABEL_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"key-id",description:"_A_UI_PROPS_KEY_ID_DESCRIPTION_",type:"String",default:"value",required:!1},{name:"key-label",description:"_A_UI_PROPS_KEY_LABEL_DESCRIPTION_",type:"String",default:"label",required:!1},{name:"key-label-callback",description:"_A_UI_PROPS_KEY_LABEL_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"key-title",description:"_A_UI_PROPS_KEY_TITLE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"key-title-callback",description:"_A_UI_PROPS_KEY_TITLE_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"max-count-multiselect",description:"_A_SELECT_PROPS_MAX_COUNT_MULTISELECT_DESCRIPTION_",type:"Number",default:void 0,required:!1},{name:"menu-width-type",description:"_A_SELECT_PROPS_MENU_WIDTH_TYPE_DESCRIPTION_",type:"String",default:"as_button",required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"options",description:"_A_UI_PROPS_OPTIONS_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"placeholder",description:"_A_UI_PROPS_PLACEHOLDER_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"placement",description:"_A_UI_PROPS_PLACEMENT_DESCRIPTION_",type:"String",default:"bottom-end",required:!1},{name:"popper-container-id",description:"_A_UI_PROPS_POPPER_CONTAINER_ID_DESCRIPTION_",type:"String",default:"a_select_container",required:!1},{name:"readonly",description:"_A_UI_PROPS_READONLY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"readonly-default",description:"_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_",type:"String",default:"",required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search",description:"_A_UI_PROPS_SEARCH_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search-text-in-html",description:"_A_UI_PROPS_SEARCH_TEXT_IN_HTML_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search-timeout",description:"_A_UI_PROPS_SEARCH_TIMEOUT_DESCRIPTION_",type:"Number",default:0,required:!1},{name:"select-menu-class",description:"_A_SELECT_PROPS_SELECT_MENU_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"slot-name",description:"_A_UI_PROPS_SLOT_NAME_DESCRIPTION_",type:"String",default:"icon",required:!1},{name:"sort-order",description:"_A_UI_PROPS_SORT_ORDER_DESCRIPTION_",type:"String",default:"asc",required:!1},{name:"text-deselect-all",description:"_A_SELECT_PROPS_TEXT_DESELECT_ALL_DESCRIPTION_",type:"String",default:"_A_SELECT_DESELECT_ALL_",required:!1},{name:"text-select-all",description:"_A_SELECT_PROPS_TEXT_SELECT_ALL_DESCRIPTION_",type:"String",default:"_A_SELECT_SELECT_ALL_",required:!1},{name:"type",description:"_A_SELECT_ICON_PROPS_TYPE_DESCRIPTION_",type:"String",default:"select",required:!1}]}}const ne={name:"PageSelectIcon",components:{AlohaPage:y,AlohaTableProps:D,ATranslation:g,PageSelectIconBasic:q,PageSelectIconChange:J,PageSelectIconErrors:G,PageSelectIconHelpText:w,PageSelectIconReadonly:ee},setup(){const{pageTitle:e}=le(),{dataProps:t}=oe(),{dataEvents:a}=te();return{dataEvents:a,dataProps:t,pageTitle:e}}};function ae(e,t,a,r,c,i){const l=n("a-translation"),_=n("page-select-icon-basic"),d=n("page-select-icon-change"),E=n("page-select-icon-help-text"),I=n("page-select-icon-errors"),C=n("page-select-icon-readonly"),R=n("aloha-table-props"),N=n("aloha-page");return S(),m(N,{"page-title":e.pageTitle},{body:p(()=>[o(l,{tag:"p",html:"_A_SELECT_ICON_COMPONENT_DESCRIPTION_"}),o(_),o(d),o(E),o(I),o(C),o(R,{data:e.dataProps},null,8,["data"]),o(R,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"])]),_:1},8,["page-title"])}const Re=u(ne,[["render",ae]]);export{Re as default};
