import{$t as e,Ct as t,Tt as n,Ut as r,Yt as i,kt as a,qt as o,wt as s,zt as c}from"./chunk.vendor.CZPox1kV.js";import{A as l,Z as u,kt as d,t as f}from"./bundle.index.BmSiyQNH.js";import{n as p,t as m}from"./chunk.AlohaExample.CD4LlhAz.js";import{t as h}from"./chunk.AlohaTableProps.Dksi7fmb.js";import{t as g}from"./chunk.AlohaTableTranslate.C-b2Nle9.js";function _(){return{codeHtml:`<a-group
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
};`}}var y={name:`PageGroupBasic`,components:{AGroup:l,AlohaExample:m},setup(){let e=[{id:`text1`,type:`text`,label:`Input`,labelClass:`a_column a_column_3 a_column_12_touch a_text_right`,classColumn:`a_column a_column_5 a_column_12_touch`}],t=i({text1:`Aloha`}),{codeHtml:n}=_(),{codeJs:r}=v();return{childrenGroup:e,codeHtml:n,codeJs:r,model:t}}};function b(t,i,l,u,d,f){let p=r(`a-group`),m=r(`aloha-example`);return c(),n(m,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`children`]},{default:o(()=>[a(p,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,children:t.childrenGroup},null,8,[`modelValue`,`children`]),s(`div`,null,`model: `+e(t.model),1)]),_:1},8,[`code-html`,`code-js`])}var x=f(y,[[`render`,b]]);function S(){return{dataEvents:[{name:`update:model-value`,description:`_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_`,type:`Function`},{name:`focus`,description:`_A_UI_EVENTS_FOCUS_DESCRIPTION_`,type:`Function`},{name:`blur`,description:`_A_UI_EVENTS_BLUR_DESCRIPTION_`,type:`Function`}]}}function C(){let e=t(()=>d({placeholder:`_A_GROUP_COMPONENT_NAME_`}));return{pageTitle:t(()=>`AGroup${e.value?` (${e.value})`:``}`)}}function w(){return{dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`change`,description:`_A_UI_PROPS_CHANGE_DESCRIPTION_`,type:`Function`,default:`() => {}`,required:!1},{name:`clear-button-class`,description:`_A_UI_PROPS_CLEAR_BUTTON_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`dependencies`,description:`_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_`,type:`Array / Object`,default:void 0,required:!1},{name:`disabled`,description:`_A_UI_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`errors`,description:`_A_UI_PROPS_ERRORS_DESCRIPTION_`,type:`String / Array`,default:void 0,required:!1},{name:`exclude-render-attributes`,description:`_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`extra`,description:`_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`help-text`,description:`_A_UI_PROPS_HELP_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`html-id`,description:`_A_UI_PROPS_HTML_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`icon-prepend`,description:`_A_INPUT_PROPS_ICON_PREPEND_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`id`,description:`_A_UI_PROPS_ID_DESCRIPTION_`,type:`String / Number`,default:`() => uniqueId("a_input_")`,required:!1},{name:`id-prefix`,description:`_A_UI_PROPS_ID_PREFIX_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`input-attributes`,description:`_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`input-class`,description:`_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`is-clear-button`,description:`_A_UI_PROPS_IS_CLEAR_BUTTON_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-hide`,description:`_A_UI_PROPS_IS_HIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-label-float`,description:`_A_UI_PROPS_IS_LABEL_FLOAT_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-render`,description:`_A_UI_PROPS_IS_RENDER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`label`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`label-class`,description:`_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`label-screen-reader`,description:`_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`maxlength`,description:`_A_UI_PROPS_MAXLENGTH_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`model-dependencies`,description:`_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`model-undefined`,description:`_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_`,type:`String / Number / Object / Array / Boolean`,default:void 0,required:!1},{name:`model-value`,description:`_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`required`,description:`_A_UI_PROPS_REQUIRED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`showPassword`,description:`_A_INPUT_PROPS_SHOW_PASSWORD_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`step`,description:`_A_INPUT_PROPS_STEP_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`type`,description:`_A_INPUT_PROPS_TYPE_DESCRIPTION_`,type:`String`,default:`text`,required:!1},{name:`use-flat-errors`,description:`_A_PROPS_USE_FLAT_ERRORS_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`use-flat-model`,description:`_A_PROPS_USE_FLAT_MODEL_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`use-html-id-as-key`,description:`_A_PROPS_USE_HTML_ID_AS_KEY_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1}]}}function T(){return{dataTranslate:[`_A_INPUT_SHOW_PASSWORD_`,`_A_INPUT_HIDE_PASSWORD_`]}}var E={name:`PageGroup`,components:{AlohaPage:p,AlohaTableProps:h,AlohaTableTranslate:g,ATranslation:u,PageGroupBasic:x},setup(){let{pageTitle:e}=C(),{dataProps:t}=w(),{dataTranslate:n}=T(),{dataEvents:r}=S();return{dataEvents:r,dataProps:t,dataTranslate:n,pageTitle:e}}};function D(e,t,i,s,l,u){let d=r(`a-translation`),f=r(`page-group-basic`),p=r(`aloha-page`);return c(),n(p,{"page-title":e.pageTitle},{body:o(()=>[a(d,{tag:`p`,html:`_A_GROUP_COMPONENT_DESCRIPTION_`}),a(f)]),_:1},8,[`page-title`])}var O=f(E,[[`render`,D]]);export{O as default};