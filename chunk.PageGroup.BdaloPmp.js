import{A as f,a as E}from"./chunk.AlohaExample.CWEhazAT.js";import{A}from"./chunk.AlohaTableProps.DyoP8PzS.js";import{A as O}from"./chunk.AlohaTableTranslate.Cg0Ldzq8.js";import{a6 as R,_ as s,g as T,A as N}from"./bundle.index.DyrqDYDX.js";import{r as D,U as u,aS as p,e as a,V as c,Z as n,Y as C,aT as U,d as i}from"./chunk.vendor.w-kCrpQl.js";import"./chunk.vendor-lodash.GmlDDh1v.js";import"./chunk.APageTabTitle.BYDxTY-n.js";import"./chunk.AlohaHighlightjs.Cjego80K.js";import"./chunk.ATable.DsQC2Vvp.js";import"./chunk.translations-ar.C8xAF5pd.js";import"./chunk.translations-de.eUvDf8xn.js";import"./chunk.translations-en.DEpj9U8S.js";import"./chunk.translations-es.BUvs_K_5.js";import"./chunk.translations-fr.Qi6uRa8b.js";import"./chunk.translations-hr.hUcxziT-.js";import"./chunk.translations-it.DFfE6hGj.js";import"./chunk.translations-ru.CS-1tvJT.js";function g(){return{codeHtml:`<a-group
  v-model="model"
  :children="childrenGroup"
></a-group>
<div>model: {{ model }}</div>`}}function y(){return{codeJs:`import {
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
};`}}const h={name:"PageGroupBasic",components:{AGroup:R,AlohaExample:f},setup(){const e=[{id:"text1",type:"text",label:"Input",labelClass:"a_column a_column_3 a_column_12_touch a_text_right",classColumn:"a_column a_column_5 a_column_12_touch"}],t=D({text1:"Aloha"}),{codeHtml:_}=g(),{codeJs:r}=y();return{childrenGroup:e,codeHtml:_,codeJs:r,model:t}}};function b(e,t,_,r,P,m){const d=a("a-group"),l=a("aloha-example");return c(),u(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","children"]},{default:p(()=>[n(d,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=o=>e.model=o),children:e.childrenGroup},null,8,["modelValue","children"]),C("div",null,"model: "+U(e.model),1)]),_:1},8,["code-html","code-js"])}const q=s(h,[["render",b]]);function L(){return{dataEvents:[{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"},{name:"focus",description:"_A_UI_EVENTS_FOCUS_DESCRIPTION_",type:"Function"},{name:"blur",description:"_A_UI_EVENTS_BLUR_DESCRIPTION_",type:"Function"}]}}function B(){const e=i(()=>T({placeholder:"_A_GROUP_COMPONENT_NAME_"}));return{pageTitle:i(()=>`AGroup${e.value?` (${e.value})`:""}`)}}function G(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"clear-button-class",description:"_A_UI_PROPS_CLEAR_BUTTON_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon-prepend",description:"_A_INPUT_PROPS_ICON_PREPEND_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_input_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"input-attributes",description:"_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"input-class",description:"_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"is-clear-button",description:"_A_UI_PROPS_IS_CLEAR_BUTTON_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-label-float",description:"_A_UI_PROPS_IS_LABEL_FLOAT_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"maxlength",description:"_A_UI_PROPS_MAXLENGTH_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-undefined",description:"_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"showPassword",description:"_A_INPUT_PROPS_SHOW_PASSWORD_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"step",description:"_A_INPUT_PROPS_STEP_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"type",description:"_A_INPUT_PROPS_TYPE_DESCRIPTION_",type:"String",default:"text",required:!1}]}}function v(){return{dataTranslate:["_A_INPUT_SHOW_PASSWORD_","_A_INPUT_HIDE_PASSWORD_"]}}const x={name:"PageGroup",components:{AlohaPage:E,AlohaTableProps:A,AlohaTableTranslate:O,ATranslation:N,PageGroupBasic:q},setup(){const{pageTitle:e}=B(),{dataProps:t}=G(),{dataTranslate:_}=v(),{dataEvents:r}=L();return{dataEvents:r,dataProps:t,dataTranslate:_,pageTitle:e}}};function H(e,t,_,r,P,m){const d=a("a-translation"),l=a("page-group-basic"),o=a("aloha-table-props"),I=a("aloha-table-translate"),S=a("aloha-page");return c(),u(S,{"page-title":e.pageTitle},{body:p(()=>[n(d,{tag:"p",html:"_A_GROUP_COMPONENT_DESCRIPTION_"}),n(l),n(o,{data:e.dataProps},null,8,["data"]),n(o,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"]),n(I,{data:e.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const ae=s(x,[["render",H]]);export{ae as default};
