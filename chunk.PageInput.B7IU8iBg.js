import{A as P,a as $}from"./chunk.AlohaExample.wjRzG7MJ.js";import{A as C}from"./chunk.AlohaTableProps.BxpZyA_k.js";import{A as v}from"./chunk.AlohaTableTranslate.DsHmgL9j.js";import{f,_ as m,g as H,A as w}from"./bundle.index.BhbL6qQY.js";import{r as _,R as i,aR as c,e as t,U as I,Y as n,W as E,aS as S,d as R}from"./chunk.vendor.CDkHfsNc.js";import"./chunk.vendor-lodash.BXW4-Hvb.js";import"./chunk.APageTabTitle.C_62-mUE.js";import"./chunk.AlohaHighlightjs.DI9-5vSP.js";import"./chunk.ATable.B-TQ7Hdl.js";import"./chunk.translations-ar.BW4YNjOf.js";import"./chunk.translations-de.pnZGXXfR.js";import"./chunk.translations-en.CzHrEMzS.js";import"./chunk.translations-es.CVdE8egl.js";import"./chunk.translations-fr.hqb9JGfS.js";import"./chunk.translations-hr.DYwzCGFq.js";import"./chunk.translations-it.C5e5-FF3.js";import"./chunk.translations-ru.eTKud94F.js";function L(){return{codeHtml:`<a-input
  v-model="model"
  label="Input"
></a-input>
<div>model: {{ model }}</div>`}}function J(){return{codeJs:`import {
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
};`}}const q={name:"PageInputBasic",components:{AInput:f,AlohaExample:P},setup(){const e=_("Aloha"),{codeHtml:o}=L(),{codeJs:a}=J();return{codeHtml:o,codeJs:a,model:e}}};function V(e,o,a,s,p,u){const l=t("a-input"),d=t("aloha-example");return I(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","label"]},{default:c(()=>[n(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=r=>e.model=r),label:"Input"},null,8,["modelValue"]),E("div",null,"model: "+S(e.model),1)]),_:1},8,["code-html","code-js"])}const B=m(q,[["render",V]]);function j(){return{codeHtml:`<a-input
  :change="changeModel"
  :model-value="model"
  label="Input"
></a-input>
<div>model: {{ model }}</div>`}}function G(){return{codeJs:`import {
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
};`}}const M={name:"PageInputChange",components:{AInput:f,AlohaExample:P},setup(){const e=_("Aloha"),o=({model:p,id:u,props:l})=>{e.value=p,console.log(u,l)},{codeHtml:a}=j(),{codeJs:s}=G();return{changeModel:o,codeHtml:a,codeJs:s,model:e}}};function F(e,o,a,s,p,u){const l=t("a-input"),d=t("aloha-example");return I(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CHANGE_HEADER_",description:"_A_UI_GROUP_CHANGE_DESCRIPTION_",props:["change","model-value"]},{default:c(()=>[n(l,{change:e.changeModel,"model-value":e.model,label:"Input"},null,8,["change","model-value"]),E("div",null,"model: "+S(e.model),1)]),_:1},8,["code-html","code-js"])}const x=m(M,[["render",F]]);function W(){return{codeHtml:`<a-input
  v-model="model"
  errors="Aloha"
  label="Input"
></a-input>`}}function Y(){return{codeJs:`import {
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
};`}}const X={name:"PageInputErrors",components:{AInput:f,AlohaExample:P},setup(){const e=_("Aloha"),{codeHtml:o}=W(),{codeJs:a}=Y();return{codeHtml:o,codeJs:a,model:e}}};function k(e,o,a,s,p,u){const l=t("a-input"),d=t("aloha-example");return I(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERRORS_HEADER_",description:"_A_UI_GROUP_ERRORS_DESCRIPTION_",props:["errors"]},{default:c(()=>[n(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=r=>e.model=r),errors:"Aloha",label:"Input"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const Q=m(X,[["render",k]]);function z(){return{codeHtml:`<a-input
  v-model="model"
  help-text="Aloha"
  label="Input"
></a-input>`}}function K(){return{codeJs:`import {
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
};`}}const Z={name:"PageInputHelpText",components:{AInput:f,AlohaExample:P},setup(){const e=_("Aloha"),{codeHtml:o}=z(),{codeJs:a}=K();return{codeHtml:o,codeJs:a,model:e}}};function ee(e,o,a,s,p,u){const l=t("a-input"),d=t("aloha-example");return I(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_HELP_TEXT_HEADER_",description:"_A_UI_GROUP_HELP_TEXT_DESCRIPTION_",props:["help-text"]},{default:c(()=>[n(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=r=>e.model=r),"help-text":"Aloha",label:"Input"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const oe=m(Z,[["render",ee]]);function te(){return{codeHtml:`<a-input
  v-model="model"
  :is-label-float="false"
  label="Input"
></a-input>
<a-input
  v-model="model"
  :is-label-float="true"
  label="Input"
></a-input>`}}function ne(){return{codeJs:`import {
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
};`}}const ae={name:"PageInputLabelFloat",components:{AInput:f,AlohaExample:P},setup(){const e=_("Aloha"),{codeHtml:o}=te(),{codeJs:a}=ne();return{codeHtml:o,codeJs:a,model:e}}};function le(e,o,a,s,p,u){const l=t("a-input"),d=t("aloha-example");return I(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_IS_LABEL_FLOAT_HEADER_",description:"_A_UI_GROUP_IS_LABEL_FLOAT_DESCRIPTION_",props:["is-label-float"]},{default:c(()=>[n(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=r=>e.model=r),"is-label-float":!1,label:"Input"},null,8,["modelValue"]),n(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":o[1]||(o[1]=r=>e.model=r),"is-label-float":!0,label:"Input"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const de=m(ae,[["render",le]]);function re(){return{codeHtml:`<a-input
  v-model="model"
  label="Input"
></a-input>
<a-input
  v-model="model"
  class="a_mt_3"
  label-screen-reader="Input"
></a-input>`}}function se(){return{codeJs:`import {
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
};`}}const pe={name:"PageInputLabelScreenReader",components:{AInput:f,AlohaExample:P},setup(){const e=_("Aloha"),{codeHtml:o}=re(),{codeJs:a}=se();return{codeHtml:o,codeJs:a,model:e}}};function ue(e,o,a,s,p,u){const l=t("a-input"),d=t("aloha-example");return I(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_SCREEN_READER_HEADER_",description:"_A_UI_GROUP_LABEL_SCREEN_READER_DESCRIPTION_",props:["label-screen-reader"]},{default:c(()=>[n(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=r=>e.model=r),label:"Input"},null,8,["modelValue"]),n(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":o[1]||(o[1]=r=>e.model=r),"label-screen-reader":"Input"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const _e=m(pe,[["render",ue]]);function me(){return{codeHtml:`<a-input
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
></a-input>`}}function ie(){return{codeJs:`import {
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
};`}}const ce={name:"PageInputPassword",components:{AInput:f,AlohaExample:P},setup(){const e=_("Aloha"),{codeHtml:o}=me(),{codeJs:a}=ie();return{codeHtml:o,codeJs:a,model:e}}};function Ie(e,o,a,s,p,u){const l=t("a-input"),d=t("aloha-example");return I(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_GROUP_PASSWORD_HEADER_",description:"_A_INPUT_GROUP_PASSWORD_DESCRIPTION_",props:['type="password"',"show-password"]},{default:c(()=>[n(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=r=>e.model=r),"show-password":!0,label:"Input",type:"password"},null,8,["modelValue"]),n(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":o[1]||(o[1]=r=>e.model=r),"show-password":!1,label:"Input",type:"password"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const Pe=m(ce,[["render",Ie]]);function fe(){return{codeHtml:`<a-input
  :model-value="model1"
  :readonly="true"
  label="Input1"
  type="text"
></a-input>
<a-input
  :model-value="model2"
  :readonly="true"
  class="a_mt_3"
  label="Input2"
  type="text"
></a-input>
<a-input
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  label="Input3"
  readonly-default="-"
  type="text"
></a-input>`}}function Ae(){return{codeJs:`import {
  ref,
} from "vue";
import { 
  AInput,
} from "aloha-vue";
    
export default {
  name: "PageInputReadonly",
  components: {
    AInput,
  },
  setup() {
    const model1 = ref("Aloha1");
    const model2 = ref("Aloha2");
    const model3 = ref(undefined);
    
    return {
      model1,
      model2,
      model3,
    };
  },
};`}}const Re={name:"PageInputReadonly",components:{AInput:f,AlohaExample:P},setup(){const e=_("Aloha1"),o=_("Aloha2"),a=_(void 0),{codeHtml:s}=fe(),{codeJs:p}=Ae();return{codeHtml:s,codeJs:p,model1:e,model2:o,model3:a}}};function Ee(e,o,a,s,p,u){const l=t("a-input"),d=t("aloha-example");return I(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default"]},{default:c(()=>[n(l,{"model-value":e.model1,readonly:!0,label:"Input1",type:"text"},null,8,["model-value"]),n(l,{class:"a_mt_3","model-value":e.model2,readonly:!0,label:"Input2",type:"text"},null,8,["model-value"]),n(l,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"Input3","readonly-default":"-",type:"text"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const Se=m(Re,[["render",Ee]]);function Oe(){return{codeHtml:`<a-input
  :model-value="model"
  :readonly="true"
  :show-password="false"
  label="Input1"
  type="password"
></a-input>
<a-input
  :model-value="model"
  :readonly-password-length="3"
  :readonly="true"
  :show-password="false"
  class="a_mt_3"
  label="Input2"
  type="password"
></a-input>
<a-input
  :model-value="model"
  :readonly-password-length="3"
  :readonly="true"
  :show-password="false"
  class="a_mt_3"
  label="Input3"
  readonly-password-symbol="x"
  type="password"
></a-input>
<a-input
  :model-value="model"
  :readonly="true"
  :show-password="true"
  label="Input4"
  type="password"
></a-input>`}}function he(){return{codeJs:`import {
  ref,
} from "vue";
import { 
  AInput,
} from "aloha-vue";
    
export default {
  name: "PageInputReadonlyPassword",
  components: {
    AInput,
  },
  setup() {
    const model1 = ref("Aloha");
    
    return {
      model,
    };
  },
};`}}const Te={name:"PageInputReadonlyPassword",components:{AInput:f,AlohaExample:P},setup(){const e=_("Aloha"),{codeHtml:o}=Oe(),{codeJs:a}=he();return{codeHtml:o,codeJs:a,model:e}}};function Ne(e,o,a,s,p,u){const l=t("a-input"),d=t("aloha-example");return I(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_GROUP_READONLY_PASSWORD_HEADER_",description:"_A_INPUT_GROUP_READONLY_PASSWORD_DESCRIPTION_",props:["readonly","readonly-password-length","readonly-password-symbol","show-password",'type="password"']},{default:c(()=>[n(l,{"model-value":e.model,readonly:!0,"show-password":!1,label:"Input1",type:"password"},null,8,["model-value"]),n(l,{class:"a_mt_3","model-value":e.model,"readonly-password-length":3,readonly:!0,"show-password":!1,label:"Input2",type:"password"},null,8,["model-value"]),n(l,{class:"a_mt_3","model-value":e.model,"readonly-password-length":3,readonly:!0,"show-password":!1,label:"Input3","readonly-password-symbol":"x",type:"password"},null,8,["model-value"]),n(l,{"model-value":e.model,readonly:!0,"show-password":!0,label:"Input4",type:"password"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const ye=m(Te,[["render",Ne]]);function ge(){return{dataEvents:[{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"},{name:"focus",description:"_A_UI_EVENTS_FOCUS_DESCRIPTION_",type:"Function"},{name:"blur",description:"_A_UI_EVENTS_BLUR_DESCRIPTION_",type:"Function"}]}}function De(){const e=R(()=>H({placeholder:"_A_INPUT_COMPONENT_NAME_"}));return{pageTitle:R(()=>`AInput${e.value?` (${e.value})`:""}`)}}function Ue(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"autocomplete",description:"_A_UI_PROPS_AUTOCOMPLETE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"clear-button-class",description:"_A_UI_PROPS_CLEAR_BUTTON_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon-prepend",description:"_A_INPUT_PROPS_ICON_PREPEND_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_input_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"input-attributes",description:"_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"input-class",description:"_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"is-clear-button",description:"_A_UI_PROPS_IS_CLEAR_BUTTON_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-label-float",description:"_A_UI_PROPS_IS_LABEL_FLOAT_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"maxlength",description:"_A_UI_PROPS_MAXLENGTH_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-undefined",description:"_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"placeholder",description:"_A_UI_PROPS_PLACEHOLDER_DESCRIPTION_",type:"String / Number / Object",default:void 0,required:!1},{name:"readonly",description:"_A_UI_PROPS_READONLY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"readonly-default",description:"_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_",type:"String",default:"",required:!1},{name:"readonly-password-length",description:"_A_INPUT_PROPS_READONLY_PASSWORD_LENGTH_DESCRIPTION_",type:"Number",default:8,required:!1},{name:"readonly-password-symbol",description:"_A_INPUT_PROPS_READONLY_PASSWORD_SYMBOL_DESCRIPTION_",type:"String",default:"*",required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"show-password",description:"_A_INPUT_PROPS_SHOW_PASSWORD_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"step",description:"_A_INPUT_PROPS_STEP_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"type",description:"_A_INPUT_PROPS_TYPE_DESCRIPTION_",type:"String",default:"text",required:!1}]}}function be(){return{dataTranslate:["_A_INPUT_SHOW_PASSWORD_","_A_INPUT_HIDE_PASSWORD_"]}}const $e={name:"PageInput",components:{AlohaPage:$,AlohaTableProps:C,AlohaTableTranslate:v,ATranslation:w,PageInputBasic:B,PageInputChange:x,PageInputErrors:Q,PageInputHelpText:oe,PageInputLabelFloat:de,PageInputLabelScreenReader:_e,PageInputPassword:Pe,PageInputReadonly:Se,PageInputReadonlyPassword:ye},setup(){const{pageTitle:e}=De(),{dataProps:o}=Ue(),{dataTranslate:a}=be(),{dataEvents:s}=ge();return{dataEvents:s,dataProps:o,dataTranslate:a,pageTitle:e}}};function Ce(e,o,a,s,p,u){const l=t("a-translation"),d=t("page-input-basic"),r=t("page-input-change"),O=t("page-input-help-text"),h=t("page-input-errors"),T=t("page-input-label-screen-reader"),N=t("page-input-label-float"),y=t("page-input-password"),g=t("page-input-readonly"),D=t("page-input-readonly-password"),A=t("aloha-table-props"),U=t("aloha-table-translate"),b=t("aloha-page");return I(),i(b,{"page-title":e.pageTitle},{body:c(()=>[n(l,{tag:"p",html:"_A_INPUT_COMPONENT_DESCRIPTION_"}),n(d),n(r),n(O),n(h),n(T),n(N),n(y),n(g),n(D),n(A,{data:e.dataProps},null,8,["data"]),n(A,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"]),n(U,{data:e.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const Qe=m($e,[["render",Ce]]);export{Qe as default};
