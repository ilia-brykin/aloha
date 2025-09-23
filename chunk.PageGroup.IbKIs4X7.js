import{A as m,a as S}from"./chunk.AlohaExample.I_T8ZN4A.js";import{A as f}from"./chunk.AlohaTableProps.HfVEufZi.js";import{A as E}from"./chunk.AlohaTableTranslate.Z_UvtTlb.js";import{am as A,_ as u,g as O,A as R}from"./bundle.index.BPjh6AGg.js";import{r as T,V as s,aT as p,e as n,W as c,_ as i,Z as N,aU as D,d as l}from"./chunk.vendor.DmOTRqbf.js";import"./chunk.vendor-lodash.DsZvX3G1.js";import"./chunk.APageTabTitle.BbOSMcnk.js";import"./chunk.AlohaHighlightjs.8HRkfNnH.js";import"./chunk.ATable.DpXpfRYO.js";import"./chunk.translations-ar.BiLIUuBX.js";import"./chunk.translations-de.Cy_u5T72.js";import"./chunk.translations-en.CWj0a7ej.js";import"./chunk.translations-es.D-4cj_p_.js";import"./chunk.translations-fr.LwkSu7L_.js";import"./chunk.translations-hr.G7gNG4Fu.js";import"./chunk.translations-it.BilXvddc.js";import"./chunk.translations-ru.XOcS94ap.js";function C(){return{codeHtml:`<a-group
  v-model="model"
  :children="childrenGroup"
></a-group>
<div>model: {{ model }}</div>`}}function U(){return{codeJs:`import {
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
};`}}const g={name:"PageGroupBasic",components:{AGroup:A,AlohaExample:m},setup(){const e=[{id:"text1",type:"text",label:"Input",labelClass:"a_column a_column_3 a_column_12_touch a_text_right",classColumn:"a_column a_column_5 a_column_12_touch"}],t=T({text1:"Aloha"}),{codeHtml:_}=C(),{codeJs:a}=U();return{childrenGroup:e,codeHtml:_,codeJs:a,model:t}}};function y(e,t,_,a,P,I){const r=n("a-group"),o=n("aloha-example");return c(),s(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","children"]},{default:p(()=>[i(r,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=d=>e.model=d),children:e.childrenGroup},null,8,["modelValue","children"]),N("div",null,"model: "+D(e.model),1)]),_:1},8,["code-html","code-js"])}const h=u(g,[["render",y]]);function b(){return{dataEvents:[{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"},{name:"focus",description:"_A_UI_EVENTS_FOCUS_DESCRIPTION_",type:"Function"},{name:"blur",description:"_A_UI_EVENTS_BLUR_DESCRIPTION_",type:"Function"}]}}function q(){const e=l(()=>O({placeholder:"_A_GROUP_COMPONENT_NAME_"}));return{pageTitle:l(()=>`AGroup${e.value?` (${e.value})`:""}`)}}function L(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"clear-button-class",description:"_A_UI_PROPS_CLEAR_BUTTON_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon-prepend",description:"_A_INPUT_PROPS_ICON_PREPEND_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_input_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"input-attributes",description:"_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"input-class",description:"_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"is-clear-button",description:"_A_UI_PROPS_IS_CLEAR_BUTTON_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-label-float",description:"_A_UI_PROPS_IS_LABEL_FLOAT_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"maxlength",description:"_A_UI_PROPS_MAXLENGTH_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-undefined",description:"_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"showPassword",description:"_A_INPUT_PROPS_SHOW_PASSWORD_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"step",description:"_A_INPUT_PROPS_STEP_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"type",description:"_A_INPUT_PROPS_TYPE_DESCRIPTION_",type:"String",default:"text",required:!1},{name:"use-flat-errors",description:"_A_PROPS_USE_FLAT_ERRORS_DESCRIPTION_",type:"Boolean",default:!0,required:!1}]}}function B(){return{dataTranslate:["_A_INPUT_SHOW_PASSWORD_","_A_INPUT_HIDE_PASSWORD_"]}}const G={name:"PageGroup",components:{AlohaPage:S,AlohaTableProps:f,AlohaTableTranslate:E,ATranslation:R,PageGroupBasic:h},setup(){const{pageTitle:e}=q(),{dataProps:t}=L(),{dataTranslate:_}=B(),{dataEvents:a}=b();return{dataEvents:a,dataProps:t,dataTranslate:_,pageTitle:e}}};function x(e,t,_,a,P,I){const r=n("a-translation"),o=n("page-group-basic"),d=n("aloha-page");return c(),s(d,{"page-title":e.pageTitle},{body:p(()=>[i(r,{tag:"p",html:"_A_GROUP_COMPONENT_DESCRIPTION_"}),i(o)]),_:1},8,["page-title"])}const ee=u(G,[["render",x]]);export{ee as default};
