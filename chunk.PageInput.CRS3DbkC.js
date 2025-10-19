import{A as P,a as C}from"./chunk.AlohaExample.CTKSb6XT.js";import{A as H}from"./chunk.AlohaTableProps.DvUFs1xp.js";import{A as v}from"./chunk.AlohaTableTranslate.DXgAE2Nn.js";import{n as f,_ as m,g as L,A as w}from"./bundle.index.CzM26iZB.js";import{r as _,V as i,aT as c,e as t,W as I,_ as a,Z as R,aU as S,d as E}from"./chunk.vendor.jrGakw8v.js";import"./chunk.vendor-lodash.CAy_owSl.js";import"./chunk.APageTabTitle.BXI1b7YT.js";import"./chunk.AlohaHighlightjs.NfJqmXtA.js";import"./chunk.ATable.ahJG3J0R.js";import"./chunk.translations-ar.COHWTLjj.js";import"./chunk.translations-de.CMsDi58c.js";import"./chunk.translations-en.Dg6d-iTX.js";import"./chunk.translations-es.BLJ15RYR.js";import"./chunk.translations-fr.tH5K_M0t.js";import"./chunk.translations-hr.DsOKZruz.js";import"./chunk.translations-it.B_6_ZtEA.js";import"./chunk.translations-ru.BTxZGSVv.js";function J(){return{codeHtml:`<a-input
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
};`}}const V={name:"PageInputBasic",components:{AInput:f,AlohaExample:P},setup(){const e=_("Aloha"),{codeHtml:o}=J(),{codeJs:n}=q();return{codeHtml:o,codeJs:n,model:e}}};function B(e,o,n,s,p,u){const l=t("a-input"),d=t("aloha-example");return I(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","label"]},{default:c(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=r=>e.model=r),label:"Input"},null,8,["modelValue"]),R("div",null,"model: "+S(e.model),1)]),_:1},8,["code-html","code-js"])}const j=m(V,[["render",B]]);function G(){return{codeHtml:`<a-input
  :change="changeModel"
  :model-value="model"
  label="Input"
></a-input>
<div>model: {{ model }}</div>`}}function M(){return{codeJs:`import {
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
};`}}const x={name:"PageInputChange",components:{AInput:f,AlohaExample:P},setup(){const e=_("Aloha"),o=({model:p,id:u,props:l})=>{e.value=p,console.log(u,l)},{codeHtml:n}=G(),{codeJs:s}=M();return{changeModel:o,codeHtml:n,codeJs:s,model:e}}};function F(e,o,n,s,p,u){const l=t("a-input"),d=t("aloha-example");return I(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CHANGE_HEADER_",description:"_A_UI_GROUP_CHANGE_DESCRIPTION_",props:["change","model-value"]},{default:c(()=>[a(l,{change:e.changeModel,"model-value":e.model,label:"Input"},null,8,["change","model-value"]),R("div",null,"model: "+S(e.model),1)]),_:1},8,["code-html","code-js"])}const W=m(x,[["render",F]]);function Y(){return{codeHtml:`<a-input
  v-model="model"
  errors="Aloha"
  label="Input"
></a-input>`}}function X(){return{codeJs:`import {
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
};`}}const k={name:"PageInputErrors",components:{AInput:f,AlohaExample:P},setup(){const e=_("Aloha"),{codeHtml:o}=Y(),{codeJs:n}=X();return{codeHtml:o,codeJs:n,model:e}}};function Q(e,o,n,s,p,u){const l=t("a-input"),d=t("aloha-example");return I(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERRORS_HEADER_",description:"_A_UI_GROUP_ERRORS_DESCRIPTION_",props:["errors"]},{default:c(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=r=>e.model=r),errors:"Aloha",label:"Input"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const Z=m(k,[["render",Q]]);function z(){return{codeHtml:`<a-input
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
};`}}const ee={name:"PageInputHelpText",components:{AInput:f,AlohaExample:P},setup(){const e=_("Aloha"),{codeHtml:o}=z(),{codeJs:n}=K();return{codeHtml:o,codeJs:n,model:e}}};function oe(e,o,n,s,p,u){const l=t("a-input"),d=t("aloha-example");return I(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_HELP_TEXT_HEADER_",description:"_A_UI_GROUP_HELP_TEXT_DESCRIPTION_",props:["help-text"]},{default:c(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=r=>e.model=r),"help-text":"Aloha",label:"Input"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const te=m(ee,[["render",oe]]);function ne(){return{codeHtml:`<a-input
  v-model="model"
  :is-label-float="false"
  label="Input"
  label-description="Aloha"
></a-input>`}}function ae(){return{codeJs:`import {
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
};`}}const le={name:"PageInputLabelDescription",components:{AInput:f,AlohaExample:P},setup(){const e=_("Aloha"),{codeHtml:o}=ne(),{codeJs:n}=ae();return{codeHtml:o,codeJs:n,model:e}}};function de(e,o,n,s,p,u){const l=t("a-input"),d=t("aloha-example");return I(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_",description:"_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_",props:["label-description"]},{default:c(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=r=>e.model=r),"is-label-float":!1,label:"Input","label-description":"Aloha"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const re=m(le,[["render",de]]);function se(){return{codeHtml:`<a-input
  v-model="model"
  :is-label-float="false"
  label="Input"
></a-input>
<a-input
  v-model="model"
  :is-label-float="true"
  label="Input"
></a-input>`}}function pe(){return{codeJs:`import {
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
};`}}const ue={name:"PageInputLabelFloat",components:{AInput:f,AlohaExample:P},setup(){const e=_("Aloha"),{codeHtml:o}=se(),{codeJs:n}=pe();return{codeHtml:o,codeJs:n,model:e}}};function _e(e,o,n,s,p,u){const l=t("a-input"),d=t("aloha-example");return I(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_IS_LABEL_FLOAT_HEADER_",description:"_A_UI_GROUP_IS_LABEL_FLOAT_DESCRIPTION_",props:["is-label-float"]},{default:c(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=r=>e.model=r),"is-label-float":!1,label:"Input"},null,8,["modelValue"]),a(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":o[1]||(o[1]=r=>e.model=r),"is-label-float":!0,label:"Input"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const me=m(ue,[["render",_e]]);function ie(){return{codeHtml:`<a-input
  v-model="model"
  label="Input"
></a-input>
<a-input
  v-model="model"
  class="a_mt_3"
  label-screen-reader="Input"
></a-input>`}}function ce(){return{codeJs:`import {
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
};`}}const Ie={name:"PageInputLabelScreenReader",components:{AInput:f,AlohaExample:P},setup(){const e=_("Aloha"),{codeHtml:o}=ie(),{codeJs:n}=ce();return{codeHtml:o,codeJs:n,model:e}}};function Pe(e,o,n,s,p,u){const l=t("a-input"),d=t("aloha-example");return I(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_SCREEN_READER_HEADER_",description:"_A_UI_GROUP_LABEL_SCREEN_READER_DESCRIPTION_",props:["label-screen-reader"]},{default:c(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=r=>e.model=r),label:"Input"},null,8,["modelValue"]),a(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":o[1]||(o[1]=r=>e.model=r),"label-screen-reader":"Input"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const fe=m(Ie,[["render",Pe]]);function Ae(){return{codeHtml:`<a-input
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
></a-input>`}}function Ee(){return{codeJs:`import {
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
};`}}const Re={name:"PageInputPassword",components:{AInput:f,AlohaExample:P},setup(){const e=_("Aloha"),{codeHtml:o}=Ae(),{codeJs:n}=Ee();return{codeHtml:o,codeJs:n,model:e}}};function Se(e,o,n,s,p,u){const l=t("a-input"),d=t("aloha-example");return I(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_GROUP_PASSWORD_HEADER_",description:"_A_INPUT_GROUP_PASSWORD_DESCRIPTION_",props:['type="password"',"show-password"]},{default:c(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=r=>e.model=r),"show-password":!0,label:"Input",type:"password"},null,8,["modelValue"]),a(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":o[1]||(o[1]=r=>e.model=r),"show-password":!1,label:"Input",type:"password"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const Oe=m(Re,[["render",Se]]);function he(){return{codeHtml:`<a-input
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
></a-input>`}}function Te(){return{codeJs:`import {
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
};`}}const Ne={name:"PageInputReadonly",components:{AInput:f,AlohaExample:P},setup(){const e=_("Aloha1"),o=_("Aloha2"),n=_(void 0),{codeHtml:s}=he(),{codeJs:p}=Te();return{codeHtml:s,codeJs:p,model1:e,model2:o,model3:n}}};function ye(e,o,n,s,p,u){const l=t("a-input"),d=t("aloha-example");return I(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default"]},{default:c(()=>[a(l,{"model-value":e.model1,readonly:!0,label:"Input1",type:"text"},null,8,["model-value"]),a(l,{class:"a_mt_3","model-value":e.model2,readonly:!0,label:"Input2",type:"text"},null,8,["model-value"]),a(l,{class:"a_mt_3","model-value":e.model3,readonly:!0,"help-text":"Aloha",label:"Input3","readonly-default":"-",type:"text"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const ge=m(Ne,[["render",ye]]);function De(){return{codeHtml:`<a-input
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
></a-input>`}}function be(){return{codeJs:`import {
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
};`}}const Ue={name:"PageInputReadonlyPassword",components:{AInput:f,AlohaExample:P},setup(){const e=_("Aloha"),{codeHtml:o}=De(),{codeJs:n}=be();return{codeHtml:o,codeJs:n,model:e}}};function $e(e,o,n,s,p,u){const l=t("a-input"),d=t("aloha-example");return I(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_GROUP_READONLY_PASSWORD_HEADER_",description:"_A_INPUT_GROUP_READONLY_PASSWORD_DESCRIPTION_",props:["readonly","readonly-password-length","readonly-password-symbol","show-password",'type="password"']},{default:c(()=>[a(l,{"model-value":e.model,readonly:!0,"show-password":!1,label:"Input1",type:"password"},null,8,["model-value"]),a(l,{class:"a_mt_3","model-value":e.model,"readonly-password-length":3,readonly:!0,"show-password":!1,label:"Input2",type:"password"},null,8,["model-value"]),a(l,{class:"a_mt_3","model-value":e.model,"readonly-password-length":3,readonly:!0,"show-password":!1,label:"Input3","readonly-password-symbol":"x",type:"password"},null,8,["model-value"]),a(l,{"model-value":e.model,readonly:!0,"show-password":!0,label:"Input4",type:"password"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const Ce=m(Ue,[["render",$e]]);function He(){return{dataEvents:[{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"},{name:"focus",description:"_A_UI_EVENTS_FOCUS_DESCRIPTION_",type:"Function"},{name:"blur",description:"_A_UI_EVENTS_BLUR_DESCRIPTION_",type:"Function"}]}}function ve(){const e=E(()=>L({placeholder:"_A_INPUT_COMPONENT_NAME_"}));return{pageTitle:E(()=>`AInput${e.value?` (${e.value})`:""}`)}}function Le(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"autocomplete",description:"_A_UI_PROPS_AUTOCOMPLETE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"clear-button-class",description:"_A_UI_PROPS_CLEAR_BUTTON_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon-prepend",description:"_A_INPUT_PROPS_ICON_PREPEND_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_input_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"input-attributes",description:"_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"input-class",description:"_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"is-clear-button",description:"_A_UI_PROPS_IS_CLEAR_BUTTON_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-label-float",description:"_A_UI_PROPS_IS_LABEL_FLOAT_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-description",description:"_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"maxlength",description:"_A_UI_PROPS_MAXLENGTH_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-undefined",description:"_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"placeholder",description:"_A_UI_PROPS_PLACEHOLDER_DESCRIPTION_",type:"String / Number / Object",default:void 0,required:!1},{name:"readonly",description:"_A_UI_PROPS_READONLY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"readonly-default",description:"_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_",type:"String",default:"",required:!1},{name:"readonly-password-length",description:"_A_INPUT_PROPS_READONLY_PASSWORD_LENGTH_DESCRIPTION_",type:"Number",default:8,required:!1},{name:"readonly-password-symbol",description:"_A_INPUT_PROPS_READONLY_PASSWORD_SYMBOL_DESCRIPTION_",type:"String",default:"*",required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"show-password",description:"_A_INPUT_PROPS_SHOW_PASSWORD_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"step",description:"_A_INPUT_PROPS_STEP_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"type",description:"_A_INPUT_PROPS_TYPE_DESCRIPTION_",type:"String",default:"text",required:!1}]}}function we(){return{dataTranslate:["_A_INPUT_SHOW_PASSWORD_","_A_INPUT_HIDE_PASSWORD_"]}}const Je={name:"PageInput",components:{AlohaPage:C,AlohaTableProps:H,AlohaTableTranslate:v,ATranslation:w,PageInputBasic:j,PageInputChange:W,PageInputErrors:Z,PageInputHelpText:te,PageInputLabelDescription:re,PageInputLabelFloat:me,PageInputLabelScreenReader:fe,PageInputPassword:Oe,PageInputReadonly:ge,PageInputReadonlyPassword:Ce},setup(){const{pageTitle:e}=ve(),{dataProps:o}=Le(),{dataTranslate:n}=we(),{dataEvents:s}=He();return{dataEvents:s,dataProps:o,dataTranslate:n,pageTitle:e}}};function qe(e,o,n,s,p,u){const l=t("a-translation"),d=t("page-input-basic"),r=t("page-input-change"),O=t("page-input-help-text"),h=t("page-input-errors"),T=t("page-input-label-description"),N=t("page-input-label-screen-reader"),y=t("page-input-label-float"),g=t("page-input-password"),D=t("page-input-readonly"),b=t("page-input-readonly-password"),A=t("aloha-table-props"),U=t("aloha-table-translate"),$=t("aloha-page");return I(),i($,{"page-title":e.pageTitle},{body:c(()=>[a(l,{tag:"p",html:"_A_INPUT_COMPONENT_DESCRIPTION_"}),a(d),a(r),a(O),a(h),a(T),a(N),a(y),a(g),a(D),a(b),a(A,{data:e.dataProps},null,8,["data"]),a(A,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"]),a(U,{data:e.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const to=m(Je,[["render",qe]]);export{to as default};
