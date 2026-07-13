import{A,a as v}from"./chunk.AlohaExample.xudyL0cv.js";import{A as C}from"./chunk.AlohaTableProps.P7fIgDcf.js";import{A as H}from"./chunk.AlohaTableTranslate.DmutBgvf.js";import{ac as P,_ as p,g as L,A as y}from"./bundle.index.Bieqwk88.js";import{r as c,Y as u,W as i,aU as f,f as o,$ as l,_ as I,aV as T,d as R}from"./chunk.vendor.CWr53wb5.js";import"./chunk.vendor-lodash.CWoM99Se.js";import"./chunk.APageTabTitle.C0BZ4lV4.js";import"./chunk.AlohaHighlightjs.Cyb5M4zM.js";import"./chunk.ATable.Cap8jupk.js";import"./chunk.translations-ar.CE_3yjUF.js";import"./chunk.translations-de.R0YWY91X.js";import"./chunk.translations-en.DQ0Z316F.js";import"./chunk.translations-es.XN0jVhL-.js";import"./chunk.translations-fr.D5Z6d0-l.js";import"./chunk.translations-hr.BRYjTgZh.js";import"./chunk.translations-it.D6SsMt4V.js";import"./chunk.translations-ru.BfK09XlZ.js";function J(){return{codeHtml:`<a-textarea
  v-model="model"
  label="Textarea"
></a-textarea>
<div>model:</div>
<pre>{{ model }}</pre>`}}function V(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ATextarea,
} from "aloha-vue";
    
export default {
  name: "PageTextareaBasic",
  components: {
    ATextarea,
  },
  setup() {
    const model = ref("Aloha");
    
    return {
      model,
    };
  },
};`}}const B={name:"PageTextareaBasic",components:{AlohaExample:A,ATextarea:P},setup(){const e=c("Aloha"),{codeHtml:a}=J(),{codeJs:t}=V();return{codeHtml:a,codeJs:t,model:e}}};function q(e,a,t,s,_,m){const r=o("a-textarea"),d=o("aloha-example");return u(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","label"]},{default:f(()=>[l(r,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=n=>e.model=n),label:"Textarea"},null,8,["modelValue"]),a[1]||(a[1]=I("div",null,"model:",-1)),I("pre",null,T(e.model),1)]),_:1},8,["code-html","code-js"])}const j=p(B,[["render",q]]);function G(){return{codeHtml:`<a-textarea
  :change="changeModel"
  :model-value="model"
  label="Textarea"
></a-textarea>
<div>model:</div>
<pre>{{ model }}</pre>`}}function z(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ATextarea,
} from "aloha-vue";
    
export default {
  name: "PageTextareaChange",
  components: {
    ATextarea,
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
};`}}const M={name:"PageTextareaChange",components:{AlohaExample:A,ATextarea:P},setup(){const e=c("Aloha"),a=({model:_,id:m,props:r})=>{e.value=_,console.log(m,r)},{codeHtml:t}=G(),{codeJs:s}=z();return{changeModel:a,codeHtml:t,codeJs:s,model:e}}};function X(e,a,t,s,_,m){const r=o("a-textarea"),d=o("aloha-example");return u(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CHANGE_HEADER_",description:"_A_UI_GROUP_CHANGE_DESCRIPTION_",props:["change","model-value"]},{default:f(()=>[l(r,{change:e.changeModel,"model-value":e.model,label:"Textarea"},null,8,["change","model-value"]),a[0]||(a[0]=I("div",null,"model:",-1)),I("pre",null,T(e.model),1)]),_:1},8,["code-html","code-js"])}const w=p(M,[["render",X]]);function F(){return{codeHtml:`<a-textarea
  v-model="model"
  errors="Aloha"
  label="Textarea"
></a-textarea>`}}function Y(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ATextarea,
} from "aloha-vue";
    
export default {
  name: "PageTextareaErrors",
  components: {
    ATextarea,
  },
  setup() {
    const model = ref("Aloha");
    
    return {
      model,
    };
  },
};`}}const W={name:"PageTextareaErrors",components:{AlohaExample:A,ATextarea:P},setup(){const e=c("Aloha"),{codeHtml:a}=F(),{codeJs:t}=Y();return{codeHtml:a,codeJs:t,model:e}}};function Z(e,a,t,s,_,m){const r=o("a-textarea"),d=o("aloha-example");return u(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERRORS_HEADER_",description:"_A_UI_GROUP_ERRORS_DESCRIPTION_",props:["errors"]},{default:f(()=>[l(r,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=n=>e.model=n),errors:"Aloha",label:"Textarea"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const k=p(W,[["render",Z]]);function Q(){return{codeHtml:`<a-textarea
  v-model="model"
  :error-icon="errorIcon"
  errors="Aloha"
  label="Textarea"
></a-textarea>`}}function K(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ATextarea,
} from "aloha-vue";
    
export default {
  name: "PageTextareaErrorIcon",
  components: {
    ATextarea,
  },
  setup() {
    const model = ref("Aloha");
    const errorIcon = "<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"16\\" height=\\"16\\" fill=\\"currentColor\\" viewBox=\\"0 0 16 16\\"><path d=\\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.93 6.588 8.758 10.042a.5.5 0 0 1-.998 0L7.588 6.588a.5.5 0 1 1 .998 0M8 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2\\"/></svg>";
    
    return {
      errorIcon,
      model,
    };
  },
};`}}const ee={name:"PageTextareaErrorIcon",components:{AlohaExample:A,ATextarea:P},setup(){const e=c("Aloha"),a='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.93 6.588 8.758 10.042a.5.5 0 0 1-.998 0L7.588 6.588a.5.5 0 1 1 .998 0M8 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>',{codeHtml:t}=Q(),{codeJs:s}=K();return{codeHtml:t,codeJs:s,errorIcon:a,model:e}}};function ae(e,a,t,s,_,m){const r=o("a-textarea"),d=o("aloha-example");return u(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERROR_ICON_HEADER_",description:"_A_UI_GROUP_ERROR_ICON_DESCRIPTION_",props:["errors","error-icon"]},{default:f(()=>[l(r,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=n=>e.model=n),"error-icon":e.errorIcon,errors:"Aloha",label:"Textarea"},null,8,["modelValue","error-icon"])]),_:1},8,["code-html","code-js"])}const oe=p(ee,[["render",ae]]);function te(){return{codeHtml:`<a-textarea
  v-model="model"
  help-text="Aloha"
  label="Textarea"
></a-textarea>`}}function re(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ATextarea,
} from "aloha-vue";
    
export default {
  name: "PageTextareaHelpText",
  components: {
    ATextarea,
  },
  setup() {
    const model = ref("Aloha");
    
    return {
      model,
    };
  },
};`}}const le={name:"PageTextareaHelpText",components:{AlohaExample:A,ATextarea:P},setup(){const e=c("Aloha"),{codeHtml:a}=te(),{codeJs:t}=re();return{codeHtml:a,codeJs:t,model:e}}};function ne(e,a,t,s,_,m){const r=o("a-textarea"),d=o("aloha-example");return u(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_HELP_TEXT_HEADER_",description:"_A_UI_GROUP_HELP_TEXT_DESCRIPTION_",props:["help-text"]},{default:f(()=>[l(r,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=n=>e.model=n),"help-text":"Aloha",label:"Textarea"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const de=p(le,[["render",ne]]);function se(){return{codeHtml:`<a-textarea
  v-model="model"
  :is-scalable="true"
  label="Textarea"
></a-textarea>
<div>model:</div>
<pre>{{ model }}</pre>`}}function _e(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ATextarea,
} from "aloha-vue";
    
export default {
  name: "PageTextareaIsScalable",
  components: {
    ATextarea,
  },
  setup() {
    const model = ref("Aloha");
    
    return {
      model,
    };
  },
};`}}const me={name:"PageTextareaIsScalable",components:{AlohaExample:A,ATextarea:P},setup(){const e=c("Aloha"),{codeHtml:a}=se(),{codeJs:t}=_e();return{codeHtml:a,codeJs:t,model:e}}};function ce(e,a,t,s,_,m){const r=o("a-textarea"),d=o("aloha-example");return u(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TEXTAREA_GROUP_IS_SCALABLE_HEADER_",description:"_A_TEXTAREA_GROUP_IS_SCALABLE_DESCRIPTION_",props:["is-scalable"]},{default:f(()=>[l(r,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=n=>e.model=n),"is-scalable":!0,label:"Textarea"},null,8,["modelValue"]),a[1]||(a[1]=I("div",null,"model:",-1)),I("pre",null,T(e.model),1)]),_:1},8,["code-html","code-js"])}const pe=p(me,[["render",ce]]);function ue(){return{codeHtml:`<a-textarea
  v-model="model"
  :is-label-float="false"
  label="Textarea"
  label-description="Aloha"
></a-textarea>`}}function ie(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ATextarea,
} from "aloha-vue";
    
export default {
  name: "PageTextareaLabelDescription",
  components: {
    ATextarea,
  },
  setup() {
    const model = ref("Aloha");
    
    return {
      model,
    };
  },
};`}}const fe={name:"PageTextareaLabelDescription",components:{AlohaExample:A,ATextarea:P},setup(){const e=c("Aloha"),{codeHtml:a}=ue(),{codeJs:t}=ie();return{codeHtml:a,codeJs:t,model:e}}};function Ae(e,a,t,s,_,m){const r=o("a-textarea"),d=o("aloha-example");return u(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_",description:"_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_",props:["label-description"]},{default:f(()=>[l(r,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=n=>e.model=n),"is-label-float":!1,label:"Textarea","label-description":"Aloha"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const Pe=p(fe,[["render",Ae]]);function Ie(){return{codeHtml:`<a-textarea
  v-model="model"
  :is-label-float="false"
  label="Textarea"
></a-textarea>
<a-textarea
  v-model="model"
  :is-label-float="true"
  label="Textarea"
></a-textarea>`}}function Te(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ATextarea,
} from "aloha-vue";
    
export default {
  name: "PageTextareaLabelFloat",
  components: {
    ATextarea,
  },
  setup() {
    const model = ref("Aloha");
    
    return {
      model,
    };
  },
};`}}const Ee={name:"PageTextareaLabelFloat",components:{AlohaExample:A,ATextarea:P},setup(){const e=c("Aloha"),{codeHtml:a}=Ie(),{codeJs:t}=Te();return{codeHtml:a,codeJs:t,model:e}}};function Re(e,a,t,s,_,m){const r=o("a-textarea"),d=o("aloha-example");return u(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_IS_LABEL_FLOAT_HEADER_",description:"_A_UI_GROUP_IS_LABEL_FLOAT_DESCRIPTION_",props:["is-label-float"]},{default:f(()=>[l(r,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=n=>e.model=n),"is-label-float":!1,label:"Textarea"},null,8,["modelValue"]),l(r,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":a[1]||(a[1]=n=>e.model=n),"is-label-float":!0,label:"Textarea"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const xe=p(Ee,[["render",Re]]);function Se(){return{codeHtml:`<a-textarea
  v-model="model"
  label="Textarea"
></a-textarea>
<a-textarea
  v-model="model"
  class="a_mt_3"
  label-screen-reader="Textarea"
></a-textarea>`}}function Oe(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ATextarea,
} from "aloha-vue";
    
export default {
  name: "PageTextareaLabelScreenReader",
  components: {
    ATextarea,
  },
  setup() {
    const model = ref("Aloha");
    
    return {
      model,
    };
  },
};`}}const he={name:"PageTextareaLabelScreenReader",components:{AlohaExample:A,ATextarea:P},setup(){const e=c("Aloha"),{codeHtml:a}=Se(),{codeJs:t}=Oe();return{codeHtml:a,codeJs:t,model:e}}};function ge(e,a,t,s,_,m){const r=o("a-textarea"),d=o("aloha-example");return u(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_SCREEN_READER_HEADER_",description:"_A_UI_GROUP_LABEL_SCREEN_READER_DESCRIPTION_",props:["label-screen-reader"]},{default:f(()=>[l(r,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=n=>e.model=n),label:"Textarea"},null,8,["modelValue"]),l(r,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":a[1]||(a[1]=n=>e.model=n),"label-screen-reader":"Textarea"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const be=p(he,[["render",ge]]);function Ue(){return{codeHtml:`<a-textarea
  :model-value="model1"
  :readonly="true"
  label="Textarea 1"
></a-textarea>
<a-textarea
  :model-value="model2"
  :readonly="true"
  class="a_mt_3"
  label="Textarea 2"
></a-textarea>
<a-textarea
  :model-value="model2"
  :readonly="true"
  class="a_mt_3"
  help-text="Aloha"
  label="Textarea 3"
  readonly-default="-"
></a-textarea>`}}function Ne(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ATextarea,
} from "aloha-vue";
    
export default {
  name: "PageTextareaReadonly",
  components: {
    ATextarea,
  },
  setup() {
    const model1 = ref("Aloha\\nHola");
    const model2 = ref(undefined);
    
    return {
      model1,
      model2,
    };
  },
};`}}const De={name:"PageTextareaReadonly",components:{AlohaExample:A,ATextarea:P},setup(){const e=c(`Aloha
Hola`),a=c(void 0),{codeHtml:t}=Ue(),{codeJs:s}=Ne();return{codeHtml:t,codeJs:s,model1:e,model2:a}}};function $e(e,a,t,s,_,m){const r=o("a-textarea"),d=o("aloha-example");return u(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default"]},{default:f(()=>[l(r,{"model-value":e.model1,readonly:!0,label:"Textarea 1"},null,8,["model-value"]),l(r,{class:"a_mt_3","model-value":e.model2,readonly:!0,label:"Textarea 2"},null,8,["model-value"]),l(r,{class:"a_mt_3","model-value":e.model2,readonly:!0,"help-text":"Aloha",label:"Textarea 3","readonly-default":"-"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const ve=p(De,[["render",$e]]);function Ce(){return{codeHtml:`<a-textarea
  v-model="model"
  label="resize='v'"
  resize="v"
></a-textarea>
<a-textarea
  v-model="model"
  class="a_mt_3"
  label="resize='h'"
  resize="h"
></a-textarea>
<a-textarea
  v-model="model"
  class="a_mt_3"
  label="resize='none'"
  resize="none"
></a-textarea>
<a-textarea
  v-model="model"
  class="a_mt_3"
  label="resize='auto'"
  resize="auto"
></a-textarea>
<div>model:</div>
<pre>{{ model }}</pre>`}}function He(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ATextarea,
} from "aloha-vue";
    
export default {
  name: "PageTextareaResize",
  components: {
    ATextarea,
  },
  setup() {
    const model = ref("Aloha");
    
    return {
      model,
    };
  },
};`}}const Le={name:"PageTextareaResize",components:{AlohaExample:A,ATextarea:P},setup(){const e=c("Aloha"),{codeHtml:a}=Ce(),{codeJs:t}=He();return{codeHtml:a,codeJs:t,model:e}}};function ye(e,a,t,s,_,m){const r=o("a-textarea"),d=o("aloha-example");return u(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TEXTAREA_GROUP_RESIZE_HEADER_",description:"_A_TEXTAREA_GROUP_RESIZE_DESCRIPTION_",props:["resize"]},{default:f(()=>[l(r,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=n=>e.model=n),label:"resize='v'",resize:"v"},null,8,["modelValue"]),l(r,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":a[1]||(a[1]=n=>e.model=n),label:"resize='h'",resize:"h"},null,8,["modelValue"]),l(r,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":a[2]||(a[2]=n=>e.model=n),label:"resize='none'",resize:"none"},null,8,["modelValue"]),l(r,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":a[3]||(a[3]=n=>e.model=n),label:"resize='auto'",resize:"auto"},null,8,["modelValue"]),a[4]||(a[4]=I("div",null,"model:",-1)),I("pre",null,T(e.model),1)]),_:1},8,["code-html","code-js"])}const Je=p(Le,[["render",ye]]);function Ve(){return{dataEvents:[{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"},{name:"focus",description:"_A_UI_EVENTS_FOCUS_DESCRIPTION_",type:"Function"},{name:"blur",description:"_A_UI_EVENTS_BLUR_DESCRIPTION_",type:"Function"}]}}function Be(){const e=R(()=>L({placeholder:"_A_TEXTAREA_COMPONENT_NAME_"}));return{pageTitle:R(()=>`ATextarea${e.value?` (${e.value})`:""}`)}}function qe(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"autocomplete",description:"_A_UI_PROPS_AUTOCOMPLETE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"clear-button-class",description:"_A_UI_PROPS_CLEAR_BUTTON_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"error-icon",description:"_A_UI_PROPS_ERROR_ICON_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_textarea_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"input-attributes",description:"_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"input-class",description:"_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"is-clear-button",description:"_A_UI_PROPS_IS_CLEAR_BUTTON_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-label-float",description:"_A_UI_PROPS_IS_LABEL_FLOAT_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-scalable",description:"_A_TEXTAREA_PROPS_IS_SCALABLE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-description",description:"_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"maxlength",description:"_A_UI_PROPS_MAXLENGTH_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-undefined",description:"_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"placeholder",description:"_A_UI_PROPS_PLACEHOLDER_DESCRIPTION_",type:"String / Number / Object",default:void 0,required:!1},{name:"readonly",description:"_A_UI_PROPS_READONLY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"readonly-default",description:"_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_",type:"String",default:"",required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"resize",description:"_A_TEXTAREA_PROPS_RESIZE_DESCRIPTION_",type:"String",default:"v",required:!1},{name:"rows",description:"_A_TEXTAREA_PROPS_ROWS_DESCRIPTION_",type:"String / Number",default:void 0,required:!1}]}}const je={name:"PageTextarea",components:{AlohaPage:v,AlohaTableProps:C,AlohaTableTranslate:H,ATranslation:y,PageTextareaBasic:j,PageTextareaChange:w,PageTextareaErrors:k,PageTextareaErrorIcon:oe,PageTextareaHelpText:de,PageTextareaIsScalable:pe,PageTextareaLabelDescription:Pe,PageTextareaLabelFloat:xe,PageTextareaLabelScreenReader:be,PageTextareaReadonly:ve,PageTextareaResize:Je},setup(){const{pageTitle:e}=Be(),{dataProps:a}=qe(),{dataEvents:t}=Ve();return{dataEvents:t,dataProps:a,pageTitle:e}}};function Ge(e,a,t,s,_,m){const r=o("a-translation"),d=o("page-textarea-basic"),n=o("page-textarea-change"),x=o("page-textarea-help-text"),S=o("page-textarea-errors"),O=o("page-textarea-error-icon"),h=o("page-textarea-label-description"),g=o("page-textarea-label-screen-reader"),b=o("page-textarea-label-float"),U=o("page-textarea-is-scalable"),N=o("page-textarea-resize"),D=o("page-textarea-readonly"),E=o("aloha-table-props"),$=o("aloha-page");return u(),i($,{"page-title":e.pageTitle},{body:f(()=>[l(r,{tag:"p",html:"_A_TEXTAREA_COMPONENT_DESCRIPTION_"}),l(d),l(n),l(x),l(S),l(O),l(h),l(g),l(b),l(U),l(N),l(D),l(E,{data:e.dataProps},null,8,["data"]),l(E,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"])]),_:1},8,["page-title"])}const na=p(je,[["render",Ge]]);export{na as default};
