import{f as I,_ as u,g as b,A as C}from"./bundle.index.B2aaR4xj.js";import{r as P,O as m,aR as i,b as o,Q as c,V as a,U as S,aS as R,a as E}from"./chunk.vendor.G4HJ_FUy.js";import"./chunk.vendor-lodash.DUClg1O3.js";import{A as f,a as $}from"./chunk.AlohaExample.B8t5sXI5.js";import{A as H}from"./chunk.AlohaTableProps.C3B90-mm.js";import{A as L}from"./chunk.AlohaTableTranslate.Bp7kES1N.js";import"./chunk.translations-ar.Bm_TIgmU.js";import"./chunk.translations-de.hQOurFbu.js";import"./chunk.translations-en.C27usO-8.js";import"./chunk.translations-es.CWd7slww.js";import"./chunk.translations-fr.DDfPHPkk.js";import"./chunk.translations-hr.CtnKD3az.js";import"./chunk.translations-it.Cf9ZYxei.js";import"./chunk.translations-ru.CZ8Ez0gt.js";import"./chunk.APageTabTitle.6ZuxfiZq.js";import"./chunk.AlohaHighlightjs.Bnb6Sejr.js";import"./chunk.ATable.DhxfPDli.js";function y(){return{codeHtml:`<a-input
  v-model="model"
  label="Input"
></a-input>
<div>model: {{ model }}</div>`}}function v(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AInput,
} from "aloha-vue";
    
export default {
  name: "PageInputBasic",
  components: {
    AInput,
  },
  setup() {
    const model = ref("Aloha");
    
    return {
      model,
    };
  },
};`}}const J={name:"PageInputBasic",components:{AInput:I,AlohaExample:f},setup(){const e=P("Aloha"),{codeHtml:t}=y(),{codeJs:n}=v();return{codeHtml:t,codeJs:n,model:e}}};function V(e,t,n,s,p,_){const l=o("a-input"),r=o("aloha-example");return c(),m(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","label"]},{default:i(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=d=>e.model=d),label:"Input"},null,8,["modelValue"]),S("div",null,"model: "+R(e.model),1)]),_:1},8,["code-html","code-js"])}const q=u(J,[["render",V]]);function B(){return{codeHtml:`<a-input
  :change="changeModel"
  :model-value="model"
  label="Input"
></a-input>
<div>model: {{ model }}</div>`}}function w(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AInput,
} from "aloha-vue";
    
export default {
  name: "PageInputChange",
  components: {
    AInput,
  },
  setup() {
    const model = ref("Aloha");
    
    const changeModel = ({ model: _model, id, props }) => {
      model.value = _model;
      console.log(id, props);
    };
    
    return {
      changeModel,
      model,
    };
  },
};`}}const j={name:"PageInputChange",components:{AInput:I,AlohaExample:f},setup(){const e=P("Aloha"),t=({model:p,id:_,props:l})=>{e.value=p,console.log(_,l)},{codeHtml:n}=B(),{codeJs:s}=w();return{changeModel:t,codeHtml:n,codeJs:s,model:e}}};function G(e,t,n,s,p,_){const l=o("a-input"),r=o("aloha-example");return c(),m(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CHANGE_HEADER_",description:"_A_UI_GROUP_CHANGE_DESCRIPTION_",props:["change","model-value"]},{default:i(()=>[a(l,{change:e.changeModel,"model-value":e.model,label:"Input"},null,8,["change","model-value"]),S("div",null,"model: "+R(e.model),1)]),_:1},8,["code-html","code-js"])}const M=u(j,[["render",G]]);function F(){return{codeHtml:`<a-input
  v-model="model"
  errors="Aloha"
  label="Input"
></a-input>`}}function x(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AInput,
} from "aloha-vue";
    
export default {
  name: "PageInputErrors",
  components: {
    AInput,
  },
  setup() {
    const model = ref("Aloha");
    
    return {
      model,
    };
  },
};`}}const W={name:"PageInputErrors",components:{AInput:I,AlohaExample:f},setup(){const e=P("Aloha"),{codeHtml:t}=F(),{codeJs:n}=x();return{codeHtml:t,codeJs:n,model:e}}};function X(e,t,n,s,p,_){const l=o("a-input"),r=o("aloha-example");return c(),m(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERRORS_HEADER_",description:"_A_UI_GROUP_ERRORS_DESCRIPTION_",props:["errors"]},{default:i(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=d=>e.model=d),errors:"Aloha",label:"Input"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const k=u(W,[["render",X]]);function Q(){return{codeHtml:`<a-input
  v-model="model"
  help-text="Aloha"
  label="Input"
></a-input>`}}function Y(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AInput,
} from "aloha-vue";
    
export default {
  name: "PageInputHelpText",
  components: {
    AInput,
  },
  setup() {
    const model = ref("Aloha");
    
    return {
      model,
    };
  },
};`}}const z={name:"PageInputHelpText",components:{AInput:I,AlohaExample:f},setup(){const e=P("Aloha"),{codeHtml:t}=Q(),{codeJs:n}=Y();return{codeHtml:t,codeJs:n,model:e}}};function K(e,t,n,s,p,_){const l=o("a-input"),r=o("aloha-example");return c(),m(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_HELP_TEXT_HEADER_",description:"_A_UI_GROUP_HELP_TEXT_DESCRIPTION_",props:["help-text"]},{default:i(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=d=>e.model=d),"help-text":"Aloha",label:"Input"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const Z=u(z,[["render",K]]);function ee(){return{codeHtml:`<a-input
  v-model="model"
  :is-label-float="false"
  label="Input"
></a-input>
<a-input
  v-model="model"
  :is-label-float="true"
  label="Input"
></a-input>`}}function te(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AInput,
} from "aloha-vue";
    
export default {
  name: "PageInputLabelFloat",
  components: {
    AInput,
  },
  setup() {
    const model = ref("Aloha");
    
    return {
      model,
    };
  },
};`}}const oe={name:"PageInputLabelFloat",components:{AInput:I,AlohaExample:f},setup(){const e=P("Aloha"),{codeHtml:t}=ee(),{codeJs:n}=te();return{codeHtml:t,codeJs:n,model:e}}};function ne(e,t,n,s,p,_){const l=o("a-input"),r=o("aloha-example");return c(),m(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_IS_LABEL_FLOAT_HEADER_",description:"_A_UI_GROUP_IS_LABEL_FLOAT_DESCRIPTION_",props:["is-label-float"]},{default:i(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=d=>e.model=d),"is-label-float":!1,label:"Input"},null,8,["modelValue"]),a(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":t[1]||(t[1]=d=>e.model=d),"is-label-float":!0,label:"Input"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const ae=u(oe,[["render",ne]]);function le(){return{codeHtml:`<a-input
  v-model="model"
  label="Input"
></a-input>
<a-input
  v-model="model"
  class="a_mt_3"
  label-screen-reader="Input"
></a-input>`}}function de(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AInput,
} from "aloha-vue";
    
export default {
  name: "PageInputLabelScreenReader",
  components: {
    AInput,
  },
  setup() {
    const model = ref("Aloha");
    
    return {
      model,
    };
  },
};`}}const re={name:"PageInputLabelScreenReader",components:{AInput:I,AlohaExample:f},setup(){const e=P("Aloha"),{codeHtml:t}=le(),{codeJs:n}=de();return{codeHtml:t,codeJs:n,model:e}}};function se(e,t,n,s,p,_){const l=o("a-input"),r=o("aloha-example");return c(),m(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_SCREEN_READER_HEADER_",description:"_A_UI_GROUP_LABEL_SCREEN_READER_DESCRIPTION_",props:["label-screen-reader"]},{default:i(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=d=>e.model=d),label:"Input"},null,8,["modelValue"]),a(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":t[1]||(t[1]=d=>e.model=d),"label-screen-reader":"Input"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const pe=u(re,[["render",se]]);function _e(){return{codeHtml:`<a-input
  v-model="model"
  :show-password="true"
  label="Input"
  type="password"
></a-input>
<a-input
  v-model="model"
  :show-password="false"
  class="a_mt_3"
  label="Input"
  type="password"
></a-input>`}}function ue(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AInput,
} from "aloha-vue";
    
export default {
  name: "PageInputPassword",
  components: {
    AInput,
  },
  setup() {
    const model = ref("Aloha");
    
    return {
      model,
    };
  },
};`}}const me={name:"PageInputPassword",components:{AInput:I,AlohaExample:f},setup(){const e=P("Aloha"),{codeHtml:t}=_e(),{codeJs:n}=ue();return{codeHtml:t,codeJs:n,model:e}}};function ie(e,t,n,s,p,_){const l=o("a-input"),r=o("aloha-example");return c(),m(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_GROUP_PASSWORD_HEADER_",description:"_A_INPUT_GROUP_PASSWORD_DESCRIPTION_",props:['type="password"',"show-password"]},{default:i(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=d=>e.model=d),"show-password":!0,label:"Input",type:"password"},null,8,["modelValue"]),a(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":t[1]||(t[1]=d=>e.model=d),"show-password":!1,label:"Input",type:"password"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const ce=u(me,[["render",ie]]);function Ie(){return{dataEvents:[{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"},{name:"focus",description:"_A_UI_EVENTS_FOCUS_DESCRIPTION_",type:"Function"},{name:"blur",description:"_A_UI_EVENTS_BLUR_DESCRIPTION_",type:"Function"}]}}function Pe(){const e=E(()=>b({placeholder:"_A_INPUT_COMPONENT_NAME_"}));return{pageTitle:E(()=>`AInput${e.value?` (${e.value})`:""}`)}}function fe(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"autocomplete",description:"_A_UI_PROPS_AUTOCOMPLETE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"clear-button-class",description:"_A_UI_PROPS_CLEAR_BUTTON_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon-prepend",description:"_A_INPUT_PROPS_ICON_PREPEND_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_input_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"input-attributes",description:"_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"input-class",description:"_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"is-clear-button",description:"_A_UI_PROPS_IS_CLEAR_BUTTON_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-label-float",description:"_A_UI_PROPS_IS_LABEL_FLOAT_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"maxlength",description:"_A_UI_PROPS_MAXLENGTH_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-undefined",description:"_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"placeholder",description:"_A_UI_PROPS_PLACEHOLDER_DESCRIPTION_",type:"String / Number / Object",default:void 0,required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"showPassword",description:"_A_INPUT_PROPS_SHOW_PASSWORD_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"step",description:"_A_INPUT_PROPS_STEP_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"type",description:"_A_INPUT_PROPS_TYPE_DESCRIPTION_",type:"String",default:"text",required:!1}]}}function Ae(){return{dataTranslate:["_A_INPUT_SHOW_PASSWORD_","_A_INPUT_HIDE_PASSWORD_"]}}const Ee={name:"PageInput",components:{AlohaPage:$,AlohaTableProps:H,AlohaTableTranslate:L,ATranslation:C,PageInputBasic:q,PageInputChange:M,PageInputErrors:k,PageInputHelpText:Z,PageInputLabelFloat:ae,PageInputLabelScreenReader:pe,PageInputPassword:ce},setup(){const{pageTitle:e}=Pe(),{dataProps:t}=fe(),{dataTranslate:n}=Ae(),{dataEvents:s}=Ie();return{dataEvents:s,dataProps:t,dataTranslate:n,pageTitle:e}}};function Se(e,t,n,s,p,_){const l=o("a-translation"),r=o("page-input-basic"),d=o("page-input-change"),O=o("page-input-help-text"),T=o("page-input-errors"),N=o("page-input-label-screen-reader"),h=o("page-input-label-float"),g=o("page-input-password"),A=o("aloha-table-props"),U=o("aloha-table-translate"),D=o("aloha-page");return c(),m(D,{"page-title":e.pageTitle},{body:i(()=>[a(l,{tag:"p",html:"_A_INPUT_COMPONENT_DESCRIPTION_"}),a(r),a(d),a(O),a(T),a(N),a(h),a(g),a(A,{data:e.dataProps},null,8,["data"]),a(A,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"]),a(U,{data:e.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const qe=u(Ee,[["render",Se]]);export{qe as default};
