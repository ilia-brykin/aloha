import{A,a as D}from"./chunk.AlohaExample.DAMktf5j.js";import{A as $}from"./chunk.AlohaTableProps.CHf7xDAF.js";import{A as v}from"./chunk.AlohaTableTranslate.DqUQLf0r.js";import{k as P,_ as p,g as C,A as H}from"./bundle.index.CMneLX-5.js";import{r as u,R as c,aR as i,e as t,U as f,Y as r,W as T,aS as I,d as R}from"./chunk.vendor.C8MJL5OZ.js";import"./chunk.vendor-lodash.D7ZMGyiW.js";import"./chunk.APageTabTitle.B00Zi6zV.js";import"./chunk.AlohaHighlightjs.BioRad36.js";import"./chunk.ATable.veXP_Ckr.js";import"./chunk.translations-ar.CSRM3YJ8.js";import"./chunk.translations-de.Cdlrfk3w.js";import"./chunk.translations-en.BVrNHVVQ.js";import"./chunk.translations-es.DXEdiuYo.js";import"./chunk.translations-fr.CVKEU5Mu.js";import"./chunk.translations-hr.DL1l5v8s.js";import"./chunk.translations-it.BKw_NW0S.js";import"./chunk.translations-ru.CQ8apMH7.js";function L(){return{codeHtml:`<a-textarea
  v-model="model"
  label="Textarea"
></a-textarea>
<div>model:</div>
<pre>{{ model }}</pre>`}}function y(){return{codeJs:`import {
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
};`}}const J={name:"PageTextareaBasic",components:{AlohaExample:A,ATextarea:P},setup(){const e=u("Aloha"),{codeHtml:a}=L(),{codeJs:o}=y();return{codeHtml:a,codeJs:o,model:e}}};function V(e,a,o,s,_,m){const l=t("a-textarea"),d=t("aloha-example");return f(),c(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","label"]},{default:i(()=>[r(l,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=n=>e.model=n),label:"Textarea"},null,8,["modelValue"]),a[1]||(a[1]=T("div",null,"model:",-1)),T("pre",null,I(e.model),1)]),_:1},8,["code-html","code-js"])}const q=p(J,[["render",V]]);function B(){return{codeHtml:`<a-textarea
  :change="changeModel"
  :model-value="model"
  label="Textarea"
></a-textarea>
<div>model:</div>
<pre>{{ model }}</pre>`}}function j(){return{codeJs:`import {
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
};`}}const z={name:"PageTextareaChange",components:{AlohaExample:A,ATextarea:P},setup(){const e=u("Aloha"),a=({model:_,id:m,props:l})=>{e.value=_,console.log(m,l)},{codeHtml:o}=B(),{codeJs:s}=j();return{changeModel:a,codeHtml:o,codeJs:s,model:e}}};function G(e,a,o,s,_,m){const l=t("a-textarea"),d=t("aloha-example");return f(),c(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CHANGE_HEADER_",description:"_A_UI_GROUP_CHANGE_DESCRIPTION_",props:["change","model-value"]},{default:i(()=>[r(l,{change:e.changeModel,"model-value":e.model,label:"Textarea"},null,8,["change","model-value"]),a[0]||(a[0]=T("div",null,"model:",-1)),T("pre",null,I(e.model),1)]),_:1},8,["code-html","code-js"])}const X=p(z,[["render",G]]);function M(){return{codeHtml:`<a-textarea
  v-model="model"
  errors="Aloha"
  label="Textarea"
></a-textarea>`}}function F(){return{codeJs:`import {
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
};`}}const Y={name:"PageTextareaErrors",components:{AlohaExample:A,ATextarea:P},setup(){const e=u("Aloha"),{codeHtml:a}=M(),{codeJs:o}=F();return{codeHtml:a,codeJs:o,model:e}}};function k(e,a,o,s,_,m){const l=t("a-textarea"),d=t("aloha-example");return f(),c(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERRORS_HEADER_",description:"_A_UI_GROUP_ERRORS_DESCRIPTION_",props:["errors"]},{default:i(()=>[r(l,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=n=>e.model=n),errors:"Aloha",label:"Textarea"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const w=p(Y,[["render",k]]);function W(){return{codeHtml:`<a-textarea
  v-model="model"
  help-text="Aloha"
  label="Textarea"
></a-textarea>`}}function Z(){return{codeJs:`import {
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
};`}}const Q={name:"PageTextareaHelpText",components:{AlohaExample:A,ATextarea:P},setup(){const e=u("Aloha"),{codeHtml:a}=W(),{codeJs:o}=Z();return{codeHtml:a,codeJs:o,model:e}}};function K(e,a,o,s,_,m){const l=t("a-textarea"),d=t("aloha-example");return f(),c(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_HELP_TEXT_HEADER_",description:"_A_UI_GROUP_HELP_TEXT_DESCRIPTION_",props:["help-text"]},{default:i(()=>[r(l,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=n=>e.model=n),"help-text":"Aloha",label:"Textarea"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const ee=p(Q,[["render",K]]);function ae(){return{codeHtml:`<a-textarea
  v-model="model"
  :is-scalable="true"
  label="Textarea"
></a-textarea>
<div>model:</div>
<pre>{{ model }}</pre>`}}function te(){return{codeJs:`import {
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
};`}}const oe={name:"PageTextareaIsScalable",components:{AlohaExample:A,ATextarea:P},setup(){const e=u("Aloha"),{codeHtml:a}=ae(),{codeJs:o}=te();return{codeHtml:a,codeJs:o,model:e}}};function le(e,a,o,s,_,m){const l=t("a-textarea"),d=t("aloha-example");return f(),c(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TEXTAREA_GROUP_IS_SCALABLE_HEADER_",description:"_A_TEXTAREA_GROUP_IS_SCALABLE_DESCRIPTION_",props:["is-scalable"]},{default:i(()=>[r(l,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=n=>e.model=n),"is-scalable":!0,label:"Textarea"},null,8,["modelValue"]),a[1]||(a[1]=T("div",null,"model:",-1)),T("pre",null,I(e.model),1)]),_:1},8,["code-html","code-js"])}const re=p(oe,[["render",le]]);function ne(){return{codeHtml:`<a-textarea
  v-model="model"
  :is-label-float="false"
  label="Textarea"
></a-textarea>
<a-textarea
  v-model="model"
  :is-label-float="true"
  label="Textarea"
></a-textarea>`}}function de(){return{codeJs:`import {
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
};`}}const se={name:"PageTextareaLabelFloat",components:{AlohaExample:A,ATextarea:P},setup(){const e=u("Aloha"),{codeHtml:a}=ne(),{codeJs:o}=de();return{codeHtml:a,codeJs:o,model:e}}};function _e(e,a,o,s,_,m){const l=t("a-textarea"),d=t("aloha-example");return f(),c(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_IS_LABEL_FLOAT_HEADER_",description:"_A_UI_GROUP_IS_LABEL_FLOAT_DESCRIPTION_",props:["is-label-float"]},{default:i(()=>[r(l,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=n=>e.model=n),"is-label-float":!1,label:"Textarea"},null,8,["modelValue"]),r(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":a[1]||(a[1]=n=>e.model=n),"is-label-float":!0,label:"Textarea"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const me=p(se,[["render",_e]]);function ue(){return{codeHtml:`<a-textarea
  v-model="model"
  label="Textarea"
></a-textarea>
<a-textarea
  v-model="model"
  class="a_mt_3"
  label-screen-reader="Textarea"
></a-textarea>`}}function pe(){return{codeJs:`import {
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
};`}}const ce={name:"PageTextareaLabelScreenReader",components:{AlohaExample:A,ATextarea:P},setup(){const e=u("Aloha"),{codeHtml:a}=ue(),{codeJs:o}=pe();return{codeHtml:a,codeJs:o,model:e}}};function ie(e,a,o,s,_,m){const l=t("a-textarea"),d=t("aloha-example");return f(),c(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_SCREEN_READER_HEADER_",description:"_A_UI_GROUP_LABEL_SCREEN_READER_DESCRIPTION_",props:["label-screen-reader"]},{default:i(()=>[r(l,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=n=>e.model=n),label:"Textarea"},null,8,["modelValue"]),r(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":a[1]||(a[1]=n=>e.model=n),"label-screen-reader":"Textarea"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const fe=p(ce,[["render",ie]]);function Ae(){return{codeHtml:`<a-textarea
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
  label="Textarea 3"
  readonly-default="-"
></a-textarea>`}}function Pe(){return{codeJs:`import {
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
};`}}const Te={name:"PageTextareaReadonly",components:{AlohaExample:A,ATextarea:P},setup(){const e=u(`Aloha
Hola`),a=u(void 0),{codeHtml:o}=Ae(),{codeJs:s}=Pe();return{codeHtml:o,codeJs:s,model1:e,model2:a}}};function Ie(e,a,o,s,_,m){const l=t("a-textarea"),d=t("aloha-example");return f(),c(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default"]},{default:i(()=>[r(l,{"model-value":e.model1,readonly:!0,label:"Textarea 1"},null,8,["model-value"]),r(l,{class:"a_mt_3","model-value":e.model2,readonly:!0,label:"Textarea 2"},null,8,["model-value"]),r(l,{class:"a_mt_3","model-value":e.model2,readonly:!0,label:"Textarea 3","readonly-default":"-"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const Ee=p(Te,[["render",Ie]]);function Re(){return{codeHtml:`<a-textarea
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
<pre>{{ model }}</pre>`}}function Se(){return{codeJs:`import {
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
};`}}const xe={name:"PageTextareaResize",components:{AlohaExample:A,ATextarea:P},setup(){const e=u("Aloha"),{codeHtml:a}=Re(),{codeJs:o}=Se();return{codeHtml:a,codeJs:o,model:e}}};function Oe(e,a,o,s,_,m){const l=t("a-textarea"),d=t("aloha-example");return f(),c(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TEXTAREA_GROUP_RESIZE_HEADER_",description:"_A_TEXTAREA_GROUP_RESIZE_DESCRIPTION_",props:["resize"]},{default:i(()=>[r(l,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=n=>e.model=n),label:"resize='v'",resize:"v"},null,8,["modelValue"]),r(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":a[1]||(a[1]=n=>e.model=n),label:"resize='h'",resize:"h"},null,8,["modelValue"]),r(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":a[2]||(a[2]=n=>e.model=n),label:"resize='none'",resize:"none"},null,8,["modelValue"]),r(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":a[3]||(a[3]=n=>e.model=n),label:"resize='auto'",resize:"auto"},null,8,["modelValue"]),a[4]||(a[4]=T("div",null,"model:",-1)),T("pre",null,I(e.model),1)]),_:1},8,["code-html","code-js"])}const ge=p(xe,[["render",Oe]]);function be(){return{dataEvents:[{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"},{name:"focus",description:"_A_UI_EVENTS_FOCUS_DESCRIPTION_",type:"Function"},{name:"blur",description:"_A_UI_EVENTS_BLUR_DESCRIPTION_",type:"Function"}]}}function he(){const e=R(()=>C({placeholder:"_A_TEXTAREA_COMPONENT_NAME_"}));return{pageTitle:R(()=>`ATextarea${e.value?` (${e.value})`:""}`)}}function Ne(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"autocomplete",description:"_A_UI_PROPS_AUTOCOMPLETE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"clear-button-class",description:"_A_UI_PROPS_CLEAR_BUTTON_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_textarea_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"input-attributes",description:"_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"input-class",description:"_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"is-clear-button",description:"_A_UI_PROPS_IS_CLEAR_BUTTON_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-label-float",description:"_A_UI_PROPS_IS_LABEL_FLOAT_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-scalable",description:"_A_TEXTAREA_PROPS_IS_SCALABLE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"maxlength",description:"_A_UI_PROPS_MAXLENGTH_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-undefined",description:"_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"placeholder",description:"_A_UI_PROPS_PLACEHOLDER_DESCRIPTION_",type:"String / Number / Object",default:void 0,required:!1},{name:"readonly",description:"_A_UI_PROPS_READONLY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"readonly-default",description:"_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_",type:"String",default:"",required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"resize",description:"_A_TEXTAREA_PROPS_RESIZE_DESCRIPTION_",type:"String",default:"v",required:!1},{name:"rows",description:"_A_TEXTAREA_PROPS_ROWS_DESCRIPTION_",type:"String / Number",default:void 0,required:!1}]}}const Ue={name:"PageTextarea",components:{AlohaPage:D,AlohaTableProps:$,AlohaTableTranslate:v,ATranslation:H,PageTextareaBasic:q,PageTextareaChange:X,PageTextareaErrors:w,PageTextareaHelpText:ee,PageTextareaIsScalable:re,PageTextareaLabelFloat:me,PageTextareaLabelScreenReader:fe,PageTextareaReadonly:Ee,PageTextareaResize:ge},setup(){const{pageTitle:e}=he(),{dataProps:a}=Ne(),{dataEvents:o}=be();return{dataEvents:o,dataProps:a,pageTitle:e}}};function De(e,a,o,s,_,m){const l=t("a-translation"),d=t("page-textarea-basic"),n=t("page-textarea-change"),S=t("page-textarea-help-text"),x=t("page-textarea-errors"),O=t("page-textarea-label-screen-reader"),g=t("page-textarea-label-float"),b=t("page-textarea-is-scalable"),h=t("page-textarea-resize"),N=t("page-textarea-readonly"),E=t("aloha-table-props"),U=t("aloha-page");return f(),c(U,{"page-title":e.pageTitle},{body:i(()=>[r(l,{tag:"p",html:"_A_TEXTAREA_COMPONENT_DESCRIPTION_"}),r(d),r(n),r(S),r(x),r(O),r(g),r(b),r(h),r(N),r(E,{data:e.dataProps},null,8,["data"]),r(E,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"])]),_:1},8,["page-title"])}const ke=p(Ue,[["render",De]]);export{ke as default};
