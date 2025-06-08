import{A as b}from"./chunk.AlohaFormTypes.BUTTvgE8.js";import{A as R,a as g}from"./chunk.AlohaExample.R7LhbMEI.js";import{A as D}from"./chunk.AlohaTableProps.BSwGZ5gZ.js";import{Y as P,U as q,V as C,_,g as h,A as U}from"./bundle.index.CZxfLHGa.js";import{t as I,h as v,r as u,U as p,aS as f,e as l,V as c,Z as a,Y as y,aT as A,d as S}from"./chunk.vendor.COYgx38y.js";import"./chunk.vendor-lodash.DdGPhwvj.js";import"./chunk.AList.DBxlgByk.js";import"./chunk.APageTabTitle.TSVSk0Zw.js";import"./chunk.AlohaHighlightjs.CW1W2LCP.js";import"./chunk.ATable.B6MxQAGf.js";import"./chunk.translations-ar.CRFwteN1.js";import"./chunk.translations-de.CT_a-h9Y.js";import"./chunk.translations-en.Cc-CgU0K.js";import"./chunk.translations-es.CsqDVO6e.js";import"./chunk.translations-fr.C5Cpzf1_.js";import"./chunk.translations-hr.BU-lPWVN.js";import"./chunk.translations-it.BGVGkPpO.js";import"./chunk.translations-ru.BuJh6s8h.js";const O={name:"AFormElement",props:{alwaysTranslate:{type:Boolean,required:!1},change:{type:Function,required:!1,default:()=>{}},disabled:{type:Boolean,required:!1,default:void 0},errors:{type:[String,Array],required:!1,default:void 0},excludeRenderAttributes:{type:Array,required:!1,default:()=>[]},extra:{type:Object,required:!1,default:void 0},helpText:{type:String,required:!1,default:void 0},htmlId:{type:String,required:!1,default:void 0},id:{type:[String,Number],required:!1,default:void 0},idPrefix:{type:String,required:!1,default:void 0},isHide:{type:Boolean,required:!1,default:void 0},isRender:{type:Boolean,required:!1,default:!0},label:{type:[String,Number],required:!1,default:void 0},labelClass:{type:[String,Object],required:!1,default:void 0},labelScreenReader:{type:[String,Number],required:!1,default:void 0},modelDependencies:{type:Object,required:!1,default:()=>({})},modelValue:{required:!1,default:void 0},options:{type:Object,required:!1,default:()=>({})},readonly:{type:Boolean,required:!1},readonlyDefault:{type:String,required:!1,default:""},required:{type:Boolean,required:!1,default:!1},type:{type:String,required:!0}},emits:["update:modelValue"],setup(e,{emit:t,slots:o}){const r=I(e,"options"),m=I(e,"type"),i=()=>({...C,...q,...P.components,...P.containerComponents});return()=>{const n=i()[m.value];return v(n,{...e,...r.value,"onUpdate:modelValue":d=>t("update:modelValue",d)},o)}}};function L(){return{codeHtml:`<a-form-element
  v-model="model1"
  :required="true"
  label="Input"
  type="text"
></a-form-element>
<div>model1: {{ model1 }}</div>
<a-form-element
  v-model="model2"
  :required="true"
  class="a_mt_3"
  label="Checkbox"
  help-text="Aloha"
  type="oneCheckbox"
></a-form-element>
<div>model2: {{ model2 }}</div>`}}function x(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AFormElement,
} from "aloha-vue";
    
export default {
  name: "PageFormElementBasic",
  components: {
    AFormElement,
  },
  setup() {
    const model1 = ref("1234");
    const model2 = ref(true);
    
    return {
      model1,
      model2,
    };
  },
};`}}const F={name:"PageFormElementBasic",components:{AlohaExample:R,AFormElement:O},setup(){const e=u("1234"),t=u(!0),{codeHtml:o}=L(),{codeJs:r}=x();return{codeHtml:o,codeJs:r,model1:e,model2:t}}};function B(e,t,o,r,m,i){const n=l("a-form-element"),d=l("aloha-example");return c(),p(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","label","type"]},{default:f(()=>[a(n,{modelValue:e.model1,"onUpdate:modelValue":t[0]||(t[0]=s=>e.model1=s),required:!0,label:"Input",type:"text"},null,8,["modelValue"]),y("div",null,"model1: "+A(e.model1),1),a(n,{class:"a_mt_3",modelValue:e.model2,"onUpdate:modelValue":t[1]||(t[1]=s=>e.model2=s),required:!0,label:"Checkbox","help-text":"Aloha",type:"oneCheckbox"},null,8,["modelValue"]),y("div",null,"model2: "+A(e.model2),1)]),_:1},8,["code-html","code-js"])}const $=_(F,[["render",B]]);function M(){return{codeHtml:`<a-form-element
  :model-value="model1"
  :readonly="true"
  label="Input"
  type="text"
></a-form-element>
<a-form-element
  :model-value="model2"
  :readonly="true"
  class="a_mt_3"
  label="Checkbox"
  help-text="Aloha"
  type="oneCheckbox"
></a-form-element>
<a-form-element
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  label="Textarea"
  readonly-default="-"
  type="textarea"
></a-form-element>`}}function V(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AFormElement,
} from "aloha-vue";
    
export default {
  name: "PageFormElementReadonly",
  components: {
    AFormElement,
  },
  setup() {
    const model1 = ref("1234");
    const model2 = ref(true);
    const model3 = ref(undefined);
    
    return {
      model1,
      model2,
      model3,
    };
  },
};`}}const H={name:"PageFormElementReadonly",components:{AlohaExample:R,AFormElement:O},setup(){const e=u("1234"),t=u(!0),o=u(void 0),{codeHtml:r}=M(),{codeJs:m}=V();return{codeHtml:r,codeJs:m,model1:e,model2:t,model3:o}}};function j(e,t,o,r,m,i){const n=l("a-form-element"),d=l("aloha-example");return c(),p(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default"]},{default:f(()=>[a(n,{"model-value":e.model1,readonly:!0,label:"Input",type:"text"},null,8,["model-value"]),a(n,{class:"a_mt_3","model-value":e.model2,readonly:!0,label:"Checkbox","help-text":"Aloha",type:"oneCheckbox"},null,8,["model-value"]),a(n,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"Textarea","readonly-default":"-",type:"textarea"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const k=_(H,[["render",j]]);function J(){return{dataEvents:[{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"}]}}function Y(){const e=S(()=>h({placeholder:"_A_FORM_ELEMENT_COMPONENT_NAME_"}));return{pageTitle:S(()=>`AFormElement${e.value?` (${e.value})`:""}`)}}function G(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"options",description:"_A_FORM_ELEMENT_PROPS_OPTIONS_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"readonly",description:"_A_UI_PROPS_READONLY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"readonly-default",description:"_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_",type:"String",default:"",required:!1},{name:"type",description:"_A_FORM_ELEMENT_PROPS_TYPE_DESCRIPTION_",type:"String",default:"text",required:!1}]}}const X={name:"PageFormElement",components:{AlohaFormTypes:b,AlohaPage:g,AlohaTableProps:D,ATranslation:U,PageFormElementBasic:$,PageFormElementReadonly:k},setup(){const{pageTitle:e}=Y(),{dataProps:t}=G(),{dataEvents:o}=J();return{dataEvents:o,dataProps:t,pageTitle:e}}};function w(e,t,o,r,m,i){const n=l("a-translation"),d=l("aloha-form-types"),s=l("page-form-element-basic"),T=l("page-form-element-readonly"),E=l("aloha-table-props"),N=l("aloha-page");return c(),p(N,{"page-title":e.pageTitle},{body:f(()=>[a(n,{tag:"p",html:"_A_FORM_ELEMENT_COMPONENT_DESCRIPTION_"}),a(d),a(s),a(T),a(E,{data:e.dataProps},null,8,["data"]),a(E,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"])]),_:1},8,["page-title"])}const pe=_(X,[["render",w]]);export{pe as default};
