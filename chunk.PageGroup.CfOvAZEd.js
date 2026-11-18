import{t as e}from"./chunk.AlohaPage.D7DhFNcw.js";import{t}from"./chunk.AlohaTableProps.DV2Sn4dJ.js";import{t as n}from"./chunk.AlohaTableTranslate.C44ajV_2.js";import{Bt as r,Ft as i,It as a,Pt as o,Zt as s,an as c,pn as l,sn as u,tn as d}from"./chunk.vendor.H0cZuFAV.js";import{t as f}from"./chunk.AlohaExample.B4lEPEM8.js";import{M as p,Wt as m,it as h}from"./bundle.index.C3m7sagw.js";import{t as g}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function _(){return{codeHtml:`<a-group
  v-model="model"
  :children="childrenGroup"
></a-group>
<div>model: {{ model }}</div>`}}function v(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AGroup,
} from "aloha-vue";
    
export default {
  name: "PageGroupBasic",
  components: {
    AGroup,
  },
  setup() {
    const childrenGroup = [
      {
        id: "text1",
        type: "text",
        label: "Input",
        labelClass: "a_column a_column_3 a_column_12_touch a_text_right",
        classColumn: "a_column a_column_5 a_column_12_touch",
      },
    ];
    const model = ref({
      text1: "Aloha",
    });
    
    return {
      childrenGroup,
      model,
    };
  },
};`}}var y={name:`PageGroupBasic`,components:{AGroup:p,AlohaExample:f},setup(){let e=[{id:`text1`,type:`text`,label:`Input`,labelClass:`a_column a_column_3 a_column_12_touch a_text_right`,classColumn:`a_column a_column_5 a_column_12_touch`}],t=u({text1:`Aloha`}),{codeHtml:n}=_(),{codeJs:r}=v();return{childrenGroup:e,codeHtml:n,codeJs:r,model:t}}};function b(e,t,n,o,u,f){let p=d(`a-group`),m=d(`aloha-example`);return s(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`children`]},{default:c(()=>[r(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,children:e.childrenGroup},null,8,[`modelValue`,`children`]),i(`div`,null,`model: `+l(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var x=g(y,[[`render`,b]]);function S(){return{dataEvents:[{name:`update:model-value`,description:`_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_`,type:`Function`},{name:`focus`,description:`_A_UI_EVENTS_FOCUS_DESCRIPTION_`,type:`Function`},{name:`blur`,description:`_A_UI_EVENTS_BLUR_DESCRIPTION_`,type:`Function`}]}}function C(){let e=o(()=>m({placeholder:`_A_GROUP_COMPONENT_NAME_`}));return{pageTitle:o(()=>`AGroup${e.value?` (${e.value})`:``}`)}}function w(){return{dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`change`,description:`_A_UI_PROPS_CHANGE_DESCRIPTION_`,type:`Function`,default:`() => {}`,required:!1},{name:`clear-button-class`,description:`_A_UI_PROPS_CLEAR_BUTTON_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`dependencies`,description:`_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_`,type:`Array / Object`,default:void 0,required:!1},{name:`disabled`,description:`_A_UI_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`errors`,description:`_A_UI_PROPS_ERRORS_DESCRIPTION_`,type:`String / Array`,default:void 0,required:!1},{name:`exclude-render-attributes`,description:`_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`extra`,description:`_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`help-text`,description:`_A_UI_PROPS_HELP_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`html-id`,description:`_A_UI_PROPS_HTML_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`icon-prepend`,description:`_A_INPUT_PROPS_ICON_PREPEND_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`id`,description:`_A_UI_PROPS_ID_DESCRIPTION_`,type:`String / Number`,default:`() => uniqueId("a_input_")`,required:!1},{name:`id-prefix`,description:`_A_UI_PROPS_ID_PREFIX_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`input-attributes`,description:`_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`input-class`,description:`_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`is-clear-button`,description:`_A_UI_PROPS_IS_CLEAR_BUTTON_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-hide`,description:`_A_UI_PROPS_IS_HIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-label-float`,description:`_A_UI_PROPS_IS_LABEL_FLOAT_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-render`,description:`_A_UI_PROPS_IS_RENDER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`label`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`label-class`,description:`_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`label-screen-reader`,description:`_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`maxlength`,description:`_A_UI_PROPS_MAXLENGTH_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`model-dependencies`,description:`_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`model-undefined`,description:`_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_`,type:`String / Number / Object / Array / Boolean`,default:void 0,required:!1},{name:`model-value`,description:`_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`required`,description:`_A_UI_PROPS_REQUIRED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`showPassword`,description:`_A_INPUT_PROPS_SHOW_PASSWORD_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`step`,description:`_A_INPUT_PROPS_STEP_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`type`,description:`_A_INPUT_PROPS_TYPE_DESCRIPTION_`,type:`String`,default:`text`,required:!1},{name:`use-flat-errors`,description:`_A_PROPS_USE_FLAT_ERRORS_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`use-flat-model`,description:`_A_PROPS_USE_FLAT_MODEL_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`use-html-id-as-key`,description:`_A_PROPS_USE_HTML_ID_AS_KEY_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1}]}}function T(){return{dataTranslate:[`_A_INPUT_SHOW_PASSWORD_`,`_A_INPUT_HIDE_PASSWORD_`]}}var E={name:`PageGroup`,components:{AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:h,PageGroupBasic:x},setup(){let{pageTitle:e}=C(),{dataProps:t}=w(),{dataTranslate:n}=T(),{dataEvents:r}=S();return{dataEvents:r,dataProps:t,dataTranslate:n,pageTitle:e}}};function D(e,t,n,i,o,l){let u=d(`a-translation`),f=d(`page-group-basic`),p=d(`aloha-page`);return s(),a(p,{"page-title":e.pageTitle},{body:c(()=>[r(u,{tag:`p`,html:`_A_GROUP_COMPONENT_DESCRIPTION_`}),r(f)]),_:1},8,[`page-title`])}var O=g(E,[[`render`,D]]);export{O as default};