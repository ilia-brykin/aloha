import{A as b}from"./chunk.AlohaFormTypes.Cgt4Gga6.js";import{A as R,a as D}from"./chunk.AlohaExample.DozHWKJ1.js";import{A as g}from"./chunk.AlohaTableProps.CJOZ-4up.js";import{ab as P,X as q,Y as C,_,g as h,A as U}from"./bundle.index.9cZuhpuk.js";import{t as I,h as v,r as s,V as p,aT as f,e as l,W as c,_ as a,Z as y,aU as A,d as S}from"./chunk.vendor.DmOTRqbf.js";import"./chunk.vendor-lodash.DsZvX3G1.js";import"./chunk.AList.DMP0_jYO.js";import"./chunk.APageTabTitle.C2hE3IJI.js";import"./chunk.AlohaHighlightjs.8HRkfNnH.js";import"./chunk.ATable.DLFRIUf9.js";import"./chunk.translations-ar.BiLIUuBX.js";import"./chunk.translations-de.Cy_u5T72.js";import"./chunk.translations-en.CWj0a7ej.js";import"./chunk.translations-es.D-4cj_p_.js";import"./chunk.translations-fr.LwkSu7L_.js";import"./chunk.translations-hr.G7gNG4Fu.js";import"./chunk.translations-it.BilXvddc.js";import"./chunk.translations-ru.XOcS94ap.js";const O={name:"AFormElement",props:{alwaysTranslate:{type:Boolean,required:!1},change:{type:Function,required:!1,default:()=>{}},disabled:{type:Boolean,required:!1,default:void 0},errors:{type:[String,Array],required:!1,default:void 0},excludeRenderAttributes:{type:Array,required:!1,default:()=>[]},extra:{type:Object,required:!1,default:void 0},helpText:{type:String,required:!1,default:void 0},htmlId:{type:String,required:!1,default:void 0},id:{type:[String,Number],required:!1,default:void 0},idPrefix:{type:String,required:!1,default:void 0},isHide:{type:Boolean,required:!1,default:void 0},isRender:{type:Boolean,required:!1,default:!0},label:{type:[String,Number],required:!1,default:void 0},labelClass:{type:[String,Object],required:!1,default:void 0},labelDescription:{type:String,required:!1,default:void 0},labelScreenReader:{type:[String,Number],required:!1,default:void 0},modelDependencies:{type:Object,required:!1,default:()=>({})},modelValue:{required:!1,default:void 0},options:{type:Object,required:!1,default:()=>({})},readonly:{type:Boolean,required:!1},readonlyDefault:{type:String,required:!1,default:""},required:{type:Boolean,required:!1,default:!1},type:{type:String,required:!0}},emits:["update:modelValue"],setup(e,{emit:t,slots:n}){const r=I(e,"options"),i=I(e,"type"),u=()=>({...C,...q,...P.components,...P.containerComponents});return()=>{const o=u()[i.value];return v(o,{...e,...r.value,"onUpdate:modelValue":d=>t("update:modelValue",d)},n)}}};function L(){return{codeHtml:`<a-form-element
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
};`}}const B={name:"PageFormElementBasic",components:{AlohaExample:R,AFormElement:O},setup(){const e=s("1234"),t=s(!0),{codeHtml:n}=L(),{codeJs:r}=x();return{codeHtml:n,codeJs:r,model1:e,model2:t}}};function F(e,t,n,r,i,u){const o=l("a-form-element"),d=l("aloha-example");return c(),p(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","label","type"]},{default:f(()=>[a(o,{modelValue:e.model1,"onUpdate:modelValue":t[0]||(t[0]=m=>e.model1=m),required:!0,label:"Input",type:"text"},null,8,["modelValue"]),y("div",null,"model1: "+A(e.model1),1),a(o,{class:"a_mt_3",modelValue:e.model2,"onUpdate:modelValue":t[1]||(t[1]=m=>e.model2=m),required:!0,label:"Checkbox","help-text":"Aloha",type:"oneCheckbox"},null,8,["modelValue"]),y("div",null,"model2: "+A(e.model2),1)]),_:1},8,["code-html","code-js"])}const $=_(B,[["render",F]]);function M(){return{codeHtml:`<a-form-element
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
></a-form-element>`}}function H(){return{codeJs:`import {
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
};`}}const V={name:"PageFormElementReadonly",components:{AlohaExample:R,AFormElement:O},setup(){const e=s("1234"),t=s(!0),n=s(void 0),{codeHtml:r}=M(),{codeJs:i}=H();return{codeHtml:r,codeJs:i,model1:e,model2:t,model3:n}}};function j(e,t,n,r,i,u){const o=l("a-form-element"),d=l("aloha-example");return c(),p(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default"]},{default:f(()=>[a(o,{"model-value":e.model1,readonly:!0,label:"Input",type:"text"},null,8,["model-value"]),a(o,{class:"a_mt_3","model-value":e.model2,readonly:!0,label:"Checkbox","help-text":"Aloha",type:"oneCheckbox"},null,8,["model-value"]),a(o,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"Textarea","readonly-default":"-",type:"textarea"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const k=_(V,[["render",j]]);function J(){return{dataEvents:[{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"}]}}function Y(){const e=S(()=>h({placeholder:"_A_FORM_ELEMENT_COMPONENT_NAME_"}));return{pageTitle:S(()=>`AFormElement${e.value?` (${e.value})`:""}`)}}function G(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-description",description:"_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"options",description:"_A_FORM_ELEMENT_PROPS_OPTIONS_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"readonly",description:"_A_UI_PROPS_READONLY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"readonly-default",description:"_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_",type:"String",default:"",required:!1},{name:"type",description:"_A_FORM_ELEMENT_PROPS_TYPE_DESCRIPTION_",type:"String",default:"text",required:!1}]}}const X={name:"PageFormElement",components:{AlohaFormTypes:b,AlohaPage:D,AlohaTableProps:g,ATranslation:U,PageFormElementBasic:$,PageFormElementReadonly:k},setup(){const{pageTitle:e}=Y(),{dataProps:t}=G(),{dataEvents:n}=J();return{dataEvents:n,dataProps:t,pageTitle:e}}};function w(e,t,n,r,i,u){const o=l("a-translation"),d=l("aloha-form-types"),m=l("page-form-element-basic"),T=l("page-form-element-readonly"),E=l("aloha-table-props"),N=l("aloha-page");return c(),p(N,{"page-title":e.pageTitle},{body:f(()=>[a(o,{tag:"p",html:"_A_FORM_ELEMENT_COMPONENT_DESCRIPTION_"}),a(d),a(m),a(T),a(E,{data:e.dataProps},null,8,["data"]),a(E,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"])]),_:1},8,["page-title"])}const pe=_(X,[["render",w]]);export{pe as default};
