import{A as P,a as C}from"./chunk.AlohaExample.CE8y3gMY.js";import{A as H}from"./chunk.AlohaTableProps.BzGpzGuH.js";import{A as w}from"./chunk.AlohaTableTranslate.DcEm3n05.js";import{I as f,_ as m,g as L,A as J}from"./bundle.index.ChCjitYk.js";import{r as _,Y as c,W as i,aU as I,f as t,$ as a,_ as E,aV as S,d as R}from"./chunk.vendor.BAXy2grE.js";import"./chunk.vendor-lodash.CCzoES9g.js";import"./chunk.APageTabTitle.CiRmUmgI.js";import"./chunk.AlohaHighlightjs.BK8yZFUI.js";import"./chunk.ATable.bPcVMXkj.js";import"./chunk.translations-ar.B2OoBNnE.js";import"./chunk.translations-de.UgGe9j4v.js";import"./chunk.translations-en.0stqcWf2.js";import"./chunk.translations-es.BwgNL0Sc.js";import"./chunk.translations-fr.C2YYR8Jb.js";import"./chunk.translations-hr.B965uVG9.js";import"./chunk.translations-it.qkDQbydY.js";import"./chunk.translations-ru.x6UIBrxX.js";function V(){return{codeHtml:`<a-input
  v-model="model"
  label="Input"
></a-input>
<div>model: {{ model }}</div>`}}function q(){return{codeJs:`import {
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
};`}}const B={name:"PageInputBasic",components:{AInput:f,AlohaExample:P},setup(){const e=_("Aloha"),{codeHtml:o}=V(),{codeJs:n}=q();return{codeHtml:o,codeJs:n,model:e}}};function j(e,o,n,s,p,u){const l=t("a-input"),r=t("aloha-example");return c(),i(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","label"]},{default:I(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=d=>e.model=d),label:"Input"},null,8,["modelValue"]),E("div",null,"model: "+S(e.model),1)]),_:1},8,["code-html","code-js"])}const G=m(B,[["render",j]]);function M(){return{codeHtml:`<a-input
  :change="changeModel"
  :model-value="model"
  label="Input"
></a-input>
<div>model: {{ model }}</div>`}}function x(){return{codeJs:`import {
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
};`}}const F={name:"PageInputChange",components:{AInput:f,AlohaExample:P},setup(){const e=_("Aloha"),o=({model:p,id:u,props:l})=>{e.value=p,console.log(u,l)},{codeHtml:n}=M(),{codeJs:s}=x();return{changeModel:o,codeHtml:n,codeJs:s,model:e}}};function W(e,o,n,s,p,u){const l=t("a-input"),r=t("aloha-example");return c(),i(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CHANGE_HEADER_",description:"_A_UI_GROUP_CHANGE_DESCRIPTION_",props:["change","model-value"]},{default:I(()=>[a(l,{change:e.changeModel,"model-value":e.model,label:"Input"},null,8,["change","model-value"]),E("div",null,"model: "+S(e.model),1)]),_:1},8,["code-html","code-js"])}const Y=m(F,[["render",W]]);function X(){return{codeHtml:`<a-input
  v-model="model"
  :error-icon="errorIcon"
  errors="Aloha"
  label="Input"
></a-input>`}}function k(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AInput,
} from "aloha-vue";

export default {
  name: "PageInputErrorIcon",
  components: {
    AInput,
  },
  setup() {
    const model = ref("Aloha");
    const errorIcon = "<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"16\\" height=\\"16\\" fill=\\"currentColor\\" viewBox=\\"0 0 16 16\\"><path d=\\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.93 6.588 8.758 10.042a.5.5 0 0 1-.998 0L7.588 6.588a.5.5 0 1 1 .998 0M8 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2\\"/></svg>";

    return {
      errorIcon,
      model,
    };
  },
};`}}const Q={name:"PageInputErrorIcon",components:{AInput:f,AlohaExample:P},setup(){const e=_("Aloha"),o='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.93 6.588 8.758 10.042a.5.5 0 0 1-.998 0L7.588 6.588a.5.5 0 1 1 .998 0M8 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>',{codeHtml:n}=X(),{codeJs:s}=k();return{codeHtml:n,codeJs:s,errorIcon:o,model:e}}};function z(e,o,n,s,p,u){const l=t("a-input"),r=t("aloha-example");return c(),i(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERROR_ICON_HEADER_",description:"_A_UI_GROUP_ERROR_ICON_DESCRIPTION_",props:["errors","error-icon"]},{default:I(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=d=>e.model=d),"error-icon":e.errorIcon,errors:"Aloha",label:"Input"},null,8,["modelValue","error-icon"])]),_:1},8,["code-html","code-js"])}const K=m(Q,[["render",z]]);function Z(){return{codeHtml:`<a-input
  v-model="model"
  errors="Aloha"
  label="Input"
></a-input>`}}function ee(){return{codeJs:`import {
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
};`}}const oe={name:"PageInputErrors",components:{AInput:f,AlohaExample:P},setup(){const e=_("Aloha"),{codeHtml:o}=Z(),{codeJs:n}=ee();return{codeHtml:o,codeJs:n,model:e}}};function te(e,o,n,s,p,u){const l=t("a-input"),r=t("aloha-example");return c(),i(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERRORS_HEADER_",description:"_A_UI_GROUP_ERRORS_DESCRIPTION_",props:["errors"]},{default:I(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=d=>e.model=d),errors:"Aloha",label:"Input"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const ne=m(oe,[["render",te]]);function ae(){return{codeHtml:`<a-input
  v-model="model"
  help-text="Aloha"
  label="Input"
></a-input>`}}function le(){return{codeJs:`import {
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
};`}}const re={name:"PageInputHelpText",components:{AInput:f,AlohaExample:P},setup(){const e=_("Aloha"),{codeHtml:o}=ae(),{codeJs:n}=le();return{codeHtml:o,codeJs:n,model:e}}};function de(e,o,n,s,p,u){const l=t("a-input"),r=t("aloha-example");return c(),i(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_HELP_TEXT_HEADER_",description:"_A_UI_GROUP_HELP_TEXT_DESCRIPTION_",props:["help-text"]},{default:I(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=d=>e.model=d),"help-text":"Aloha",label:"Input"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const se=m(re,[["render",de]]);function pe(){return{codeHtml:`<a-input
  v-model="model"
  :is-label-float="false"
  label="Input"
  label-description="Aloha"
></a-input>`}}function ue(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AInput,
} from "aloha-vue";
    
export default {
  name: "PageInputLabelDescription",
  components: {
    AInput,
  },
  setup() {
    const model = ref("Aloha");
    
    return {
      model,
    };
  },
};`}}const _e={name:"PageInputLabelDescription",components:{AInput:f,AlohaExample:P},setup(){const e=_("Aloha"),{codeHtml:o}=pe(),{codeJs:n}=ue();return{codeHtml:o,codeJs:n,model:e}}};function me(e,o,n,s,p,u){const l=t("a-input"),r=t("aloha-example");return c(),i(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_",description:"_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_",props:["label-description"]},{default:I(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=d=>e.model=d),"is-label-float":!1,label:"Input","label-description":"Aloha"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const ce=m(_e,[["render",me]]);function ie(){return{codeHtml:`<a-input
  v-model="model"
  :is-label-float="false"
  label="Input"
></a-input>
<a-input
  v-model="model"
  :is-label-float="true"
  label="Input"
></a-input>`}}function Ie(){return{codeJs:`import {
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
};`}}const Pe={name:"PageInputLabelFloat",components:{AInput:f,AlohaExample:P},setup(){const e=_("Aloha"),{codeHtml:o}=ie(),{codeJs:n}=Ie();return{codeHtml:o,codeJs:n,model:e}}};function fe(e,o,n,s,p,u){const l=t("a-input"),r=t("aloha-example");return c(),i(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_IS_LABEL_FLOAT_HEADER_",description:"_A_UI_GROUP_IS_LABEL_FLOAT_DESCRIPTION_",props:["is-label-float"]},{default:I(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=d=>e.model=d),"is-label-float":!1,label:"Input"},null,8,["modelValue"]),a(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":o[1]||(o[1]=d=>e.model=d),"is-label-float":!0,label:"Input"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const Ae=m(Pe,[["render",fe]]);function Re(){return{codeHtml:`<a-input
  v-model="model"
  label="Input"
></a-input>
<a-input
  v-model="model"
  class="a_mt_3"
  label-screen-reader="Input"
></a-input>`}}function Ee(){return{codeJs:`import {
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
};`}}const Se={name:"PageInputLabelScreenReader",components:{AInput:f,AlohaExample:P},setup(){const e=_("Aloha"),{codeHtml:o}=Re(),{codeJs:n}=Ee();return{codeHtml:o,codeJs:n,model:e}}};function Oe(e,o,n,s,p,u){const l=t("a-input"),r=t("aloha-example");return c(),i(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_SCREEN_READER_HEADER_",description:"_A_UI_GROUP_LABEL_SCREEN_READER_DESCRIPTION_",props:["label-screen-reader"]},{default:I(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=d=>e.model=d),label:"Input"},null,8,["modelValue"]),a(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":o[1]||(o[1]=d=>e.model=d),"label-screen-reader":"Input"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const he=m(Se,[["render",Oe]]);function Te(){return{codeHtml:`<a-input
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
></a-input>`}}function ge(){return{codeJs:`import {
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
};`}}const Ne={name:"PageInputPassword",components:{AInput:f,AlohaExample:P},setup(){const e=_("Aloha"),{codeHtml:o}=Te(),{codeJs:n}=ge();return{codeHtml:o,codeJs:n,model:e}}};function ye(e,o,n,s,p,u){const l=t("a-input"),r=t("aloha-example");return c(),i(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_GROUP_PASSWORD_HEADER_",description:"_A_INPUT_GROUP_PASSWORD_DESCRIPTION_",props:['type="password"',"show-password"]},{default:I(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=d=>e.model=d),"show-password":!0,label:"Input",type:"password"},null,8,["modelValue"]),a(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":o[1]||(o[1]=d=>e.model=d),"show-password":!1,label:"Input",type:"password"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const De=m(Ne,[["render",ye]]);function be(){return{codeHtml:`<a-input
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
  help-text="Aloha"
  label="Input3"
  readonly-default="-"
  type="text"
></a-input>`}}function Ue(){return{codeJs:`import {
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
};`}}const $e={name:"PageInputReadonly",components:{AInput:f,AlohaExample:P},setup(){const e=_("Aloha1"),o=_("Aloha2"),n=_(void 0),{codeHtml:s}=be(),{codeJs:p}=Ue();return{codeHtml:s,codeJs:p,model1:e,model2:o,model3:n}}};function ve(e,o,n,s,p,u){const l=t("a-input"),r=t("aloha-example");return c(),i(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default"]},{default:I(()=>[a(l,{"model-value":e.model1,readonly:!0,label:"Input1",type:"text"},null,8,["model-value"]),a(l,{class:"a_mt_3","model-value":e.model2,readonly:!0,label:"Input2",type:"text"},null,8,["model-value"]),a(l,{class:"a_mt_3","model-value":e.model3,readonly:!0,"help-text":"Aloha",label:"Input3","readonly-default":"-",type:"text"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const Ce=m($e,[["render",ve]]);function He(){return{codeHtml:`<a-input
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
></a-input>`}}function we(){return{codeJs:`import {
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
};`}}const Le={name:"PageInputReadonlyPassword",components:{AInput:f,AlohaExample:P},setup(){const e=_("Aloha"),{codeHtml:o}=He(),{codeJs:n}=we();return{codeHtml:o,codeJs:n,model:e}}};function Je(e,o,n,s,p,u){const l=t("a-input"),r=t("aloha-example");return c(),i(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_GROUP_READONLY_PASSWORD_HEADER_",description:"_A_INPUT_GROUP_READONLY_PASSWORD_DESCRIPTION_",props:["readonly","readonly-password-length","readonly-password-symbol","show-password",'type="password"']},{default:I(()=>[a(l,{"model-value":e.model,readonly:!0,"show-password":!1,label:"Input1",type:"password"},null,8,["model-value"]),a(l,{class:"a_mt_3","model-value":e.model,"readonly-password-length":3,readonly:!0,"show-password":!1,label:"Input2",type:"password"},null,8,["model-value"]),a(l,{class:"a_mt_3","model-value":e.model,"readonly-password-length":3,readonly:!0,"show-password":!1,label:"Input3","readonly-password-symbol":"x",type:"password"},null,8,["model-value"]),a(l,{"model-value":e.model,readonly:!0,"show-password":!0,label:"Input4",type:"password"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const Ve=m(Le,[["render",Je]]);function qe(){return{dataEvents:[{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"},{name:"focus",description:"_A_UI_EVENTS_FOCUS_DESCRIPTION_",type:"Function"},{name:"blur",description:"_A_UI_EVENTS_BLUR_DESCRIPTION_",type:"Function"}]}}function Be(){const e=R(()=>L({placeholder:"_A_INPUT_COMPONENT_NAME_"}));return{pageTitle:R(()=>`AInput${e.value?` (${e.value})`:""}`)}}function je(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"autocomplete",description:"_A_UI_PROPS_AUTOCOMPLETE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"clear-button-class",description:"_A_UI_PROPS_CLEAR_BUTTON_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"error-icon",description:"_A_UI_PROPS_ERROR_ICON_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon-prepend",description:"_A_INPUT_PROPS_ICON_PREPEND_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_input_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"input-attributes",description:"_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"input-class",description:"_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"is-clear-button",description:"_A_UI_PROPS_IS_CLEAR_BUTTON_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-label-float",description:"_A_UI_PROPS_IS_LABEL_FLOAT_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-description",description:"_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"maxlength",description:"_A_UI_PROPS_MAXLENGTH_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-undefined",description:"_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"placeholder",description:"_A_UI_PROPS_PLACEHOLDER_DESCRIPTION_",type:"String / Number / Object",default:void 0,required:!1},{name:"readonly",description:"_A_UI_PROPS_READONLY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"readonly-default",description:"_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_",type:"String",default:"",required:!1},{name:"readonly-password-length",description:"_A_INPUT_PROPS_READONLY_PASSWORD_LENGTH_DESCRIPTION_",type:"Number",default:8,required:!1},{name:"readonly-password-symbol",description:"_A_INPUT_PROPS_READONLY_PASSWORD_SYMBOL_DESCRIPTION_",type:"String",default:"*",required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"show-password",description:"_A_INPUT_PROPS_SHOW_PASSWORD_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"step",description:"_A_INPUT_PROPS_STEP_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"type",description:"_A_INPUT_PROPS_TYPE_DESCRIPTION_",type:"String",default:"text",required:!1}]}}function Ge(){return{dataTranslate:["_A_INPUT_SHOW_PASSWORD_","_A_INPUT_HIDE_PASSWORD_"]}}const Me={name:"PageInput",components:{AlohaPage:C,AlohaTableProps:H,AlohaTableTranslate:w,ATranslation:J,PageInputBasic:G,PageInputChange:Y,PageInputErrorIcon:K,PageInputErrors:ne,PageInputHelpText:se,PageInputLabelDescription:ce,PageInputLabelFloat:Ae,PageInputLabelScreenReader:he,PageInputPassword:De,PageInputReadonly:Ce,PageInputReadonlyPassword:Ve},setup(){const{pageTitle:e}=Be(),{dataProps:o}=je(),{dataTranslate:n}=Ge(),{dataEvents:s}=qe();return{dataEvents:s,dataProps:o,dataTranslate:n,pageTitle:e}}};function xe(e,o,n,s,p,u){const l=t("a-translation"),r=t("page-input-basic"),d=t("page-input-change"),O=t("page-input-help-text"),h=t("page-input-errors"),T=t("page-input-error-icon"),g=t("page-input-label-description"),N=t("page-input-label-screen-reader"),y=t("page-input-label-float"),D=t("page-input-password"),b=t("page-input-readonly"),U=t("page-input-readonly-password"),A=t("aloha-table-props"),$=t("aloha-table-translate"),v=t("aloha-page");return c(),i(v,{"page-title":e.pageTitle},{body:I(()=>[a(l,{tag:"p",html:"_A_INPUT_COMPONENT_DESCRIPTION_"}),a(r),a(d),a(O),a(h),a(T),a(g),a(N),a(y),a(D),a(b),a(U),a(A,{data:e.dataProps},null,8,["data"]),a(A,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"]),a($,{data:e.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const po=m(Me,[["render",xe]]);export{po as default};
