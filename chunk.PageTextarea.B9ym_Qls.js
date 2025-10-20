import{A,a as $}from"./chunk.AlohaExample.BW2_Vff_.js";import{A as C}from"./chunk.AlohaTableProps.DBPRxhsH.js";import{A as v}from"./chunk.AlohaTableTranslate.CqH73r3v.js";import{q as P,_ as u,g as H,A as L}from"./bundle.index.Bw4CbrP7.js";import{r as p,V as c,aT as i,e as t,W as f,_ as r,Z as I,aU as T,d as R}from"./chunk.vendor.D7UxhUfn.js";import"./chunk.vendor-lodash.BXqI5TOP.js";import"./chunk.APageTabTitle.CGHssToA.js";import"./chunk.AlohaHighlightjs.dFk8X2lo.js";import"./chunk.ATable.FHHrSff0.js";import"./chunk.translations-ar.COHWTLjj.js";import"./chunk.translations-de.CMsDi58c.js";import"./chunk.translations-en.Dg6d-iTX.js";import"./chunk.translations-es.BLJ15RYR.js";import"./chunk.translations-fr.tH5K_M0t.js";import"./chunk.translations-hr.DsOKZruz.js";import"./chunk.translations-it.B_6_ZtEA.js";import"./chunk.translations-ru.BTxZGSVv.js";function y(){return{codeHtml:`<a-textarea
  v-model="model"
  label="Textarea"
></a-textarea>
<div>model:</div>
<pre>{{ model }}</pre>`}}function J(){return{codeJs:`import {
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
};`}}const V={name:"PageTextareaBasic",components:{AlohaExample:A,ATextarea:P},setup(){const e=p("Aloha"),{codeHtml:a}=y(),{codeJs:o}=J();return{codeHtml:a,codeJs:o,model:e}}};function B(e,a,o,s,_,m){const l=t("a-textarea"),d=t("aloha-example");return f(),c(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","label"]},{default:i(()=>[r(l,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=n=>e.model=n),label:"Textarea"},null,8,["modelValue"]),a[1]||(a[1]=I("div",null,"model:",-1)),I("pre",null,T(e.model),1)]),_:1},8,["code-html","code-js"])}const q=u(V,[["render",B]]);function j(){return{codeHtml:`<a-textarea
  :change="changeModel"
  :model-value="model"
  label="Textarea"
></a-textarea>
<div>model:</div>
<pre>{{ model }}</pre>`}}function G(){return{codeJs:`import {
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
};`}}const z={name:"PageTextareaChange",components:{AlohaExample:A,ATextarea:P},setup(){const e=p("Aloha"),a=({model:_,id:m,props:l})=>{e.value=_,console.log(m,l)},{codeHtml:o}=j(),{codeJs:s}=G();return{changeModel:a,codeHtml:o,codeJs:s,model:e}}};function X(e,a,o,s,_,m){const l=t("a-textarea"),d=t("aloha-example");return f(),c(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CHANGE_HEADER_",description:"_A_UI_GROUP_CHANGE_DESCRIPTION_",props:["change","model-value"]},{default:i(()=>[r(l,{change:e.changeModel,"model-value":e.model,label:"Textarea"},null,8,["change","model-value"]),a[0]||(a[0]=I("div",null,"model:",-1)),I("pre",null,T(e.model),1)]),_:1},8,["code-html","code-js"])}const M=u(z,[["render",X]]);function F(){return{codeHtml:`<a-textarea
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
};`}}const Z={name:"PageTextareaErrors",components:{AlohaExample:A,ATextarea:P},setup(){const e=p("Aloha"),{codeHtml:a}=F(),{codeJs:o}=Y();return{codeHtml:a,codeJs:o,model:e}}};function w(e,a,o,s,_,m){const l=t("a-textarea"),d=t("aloha-example");return f(),c(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERRORS_HEADER_",description:"_A_UI_GROUP_ERRORS_DESCRIPTION_",props:["errors"]},{default:i(()=>[r(l,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=n=>e.model=n),errors:"Aloha",label:"Textarea"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const W=u(Z,[["render",w]]);function k(){return{codeHtml:`<a-textarea
  v-model="model"
  help-text="Aloha"
  label="Textarea"
></a-textarea>`}}function Q(){return{codeJs:`import {
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
};`}}const K={name:"PageTextareaHelpText",components:{AlohaExample:A,ATextarea:P},setup(){const e=p("Aloha"),{codeHtml:a}=k(),{codeJs:o}=Q();return{codeHtml:a,codeJs:o,model:e}}};function ee(e,a,o,s,_,m){const l=t("a-textarea"),d=t("aloha-example");return f(),c(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_HELP_TEXT_HEADER_",description:"_A_UI_GROUP_HELP_TEXT_DESCRIPTION_",props:["help-text"]},{default:i(()=>[r(l,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=n=>e.model=n),"help-text":"Aloha",label:"Textarea"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const ae=u(K,[["render",ee]]);function te(){return{codeHtml:`<a-textarea
  v-model="model"
  :is-scalable="true"
  label="Textarea"
></a-textarea>
<div>model:</div>
<pre>{{ model }}</pre>`}}function oe(){return{codeJs:`import {
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
};`}}const le={name:"PageTextareaIsScalable",components:{AlohaExample:A,ATextarea:P},setup(){const e=p("Aloha"),{codeHtml:a}=te(),{codeJs:o}=oe();return{codeHtml:a,codeJs:o,model:e}}};function re(e,a,o,s,_,m){const l=t("a-textarea"),d=t("aloha-example");return f(),c(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TEXTAREA_GROUP_IS_SCALABLE_HEADER_",description:"_A_TEXTAREA_GROUP_IS_SCALABLE_DESCRIPTION_",props:["is-scalable"]},{default:i(()=>[r(l,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=n=>e.model=n),"is-scalable":!0,label:"Textarea"},null,8,["modelValue"]),a[1]||(a[1]=I("div",null,"model:",-1)),I("pre",null,T(e.model),1)]),_:1},8,["code-html","code-js"])}const ne=u(le,[["render",re]]);function de(){return{codeHtml:`<a-textarea
  v-model="model"
  :is-label-float="false"
  label="Textarea"
  label-description="Aloha"
></a-textarea>`}}function se(){return{codeJs:`import {
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
};`}}const _e={name:"PageTextareaLabelDescription",components:{AlohaExample:A,ATextarea:P},setup(){const e=p("Aloha"),{codeHtml:a}=de(),{codeJs:o}=se();return{codeHtml:a,codeJs:o,model:e}}};function me(e,a,o,s,_,m){const l=t("a-textarea"),d=t("aloha-example");return f(),c(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_",description:"_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_",props:["label-description"]},{default:i(()=>[r(l,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=n=>e.model=n),"is-label-float":!1,label:"Textarea","label-description":"Aloha"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const pe=u(_e,[["render",me]]);function ue(){return{codeHtml:`<a-textarea
  v-model="model"
  :is-label-float="false"
  label="Textarea"
></a-textarea>
<a-textarea
  v-model="model"
  :is-label-float="true"
  label="Textarea"
></a-textarea>`}}function ce(){return{codeJs:`import {
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
};`}}const ie={name:"PageTextareaLabelFloat",components:{AlohaExample:A,ATextarea:P},setup(){const e=p("Aloha"),{codeHtml:a}=ue(),{codeJs:o}=ce();return{codeHtml:a,codeJs:o,model:e}}};function fe(e,a,o,s,_,m){const l=t("a-textarea"),d=t("aloha-example");return f(),c(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_IS_LABEL_FLOAT_HEADER_",description:"_A_UI_GROUP_IS_LABEL_FLOAT_DESCRIPTION_",props:["is-label-float"]},{default:i(()=>[r(l,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=n=>e.model=n),"is-label-float":!1,label:"Textarea"},null,8,["modelValue"]),r(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":a[1]||(a[1]=n=>e.model=n),"is-label-float":!0,label:"Textarea"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const Ae=u(ie,[["render",fe]]);function Pe(){return{codeHtml:`<a-textarea
  v-model="model"
  label="Textarea"
></a-textarea>
<a-textarea
  v-model="model"
  class="a_mt_3"
  label-screen-reader="Textarea"
></a-textarea>`}}function Ie(){return{codeJs:`import {
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
};`}}const Te={name:"PageTextareaLabelScreenReader",components:{AlohaExample:A,ATextarea:P},setup(){const e=p("Aloha"),{codeHtml:a}=Pe(),{codeJs:o}=Ie();return{codeHtml:a,codeJs:o,model:e}}};function Ee(e,a,o,s,_,m){const l=t("a-textarea"),d=t("aloha-example");return f(),c(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_SCREEN_READER_HEADER_",description:"_A_UI_GROUP_LABEL_SCREEN_READER_DESCRIPTION_",props:["label-screen-reader"]},{default:i(()=>[r(l,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=n=>e.model=n),label:"Textarea"},null,8,["modelValue"]),r(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":a[1]||(a[1]=n=>e.model=n),"label-screen-reader":"Textarea"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const Re=u(Te,[["render",Ee]]);function xe(){return{codeHtml:`<a-textarea
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
></a-textarea>`}}function Se(){return{codeJs:`import {
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
};`}}const Oe={name:"PageTextareaReadonly",components:{AlohaExample:A,ATextarea:P},setup(){const e=p(`Aloha
Hola`),a=p(void 0),{codeHtml:o}=xe(),{codeJs:s}=Se();return{codeHtml:o,codeJs:s,model1:e,model2:a}}};function be(e,a,o,s,_,m){const l=t("a-textarea"),d=t("aloha-example");return f(),c(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default"]},{default:i(()=>[r(l,{"model-value":e.model1,readonly:!0,label:"Textarea 1"},null,8,["model-value"]),r(l,{class:"a_mt_3","model-value":e.model2,readonly:!0,label:"Textarea 2"},null,8,["model-value"]),r(l,{class:"a_mt_3","model-value":e.model2,readonly:!0,"help-text":"Aloha",label:"Textarea 3","readonly-default":"-"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const he=u(Oe,[["render",be]]);function ge(){return{codeHtml:`<a-textarea
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
<pre>{{ model }}</pre>`}}function Ne(){return{codeJs:`import {
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
};`}}const Ue={name:"PageTextareaResize",components:{AlohaExample:A,ATextarea:P},setup(){const e=p("Aloha"),{codeHtml:a}=ge(),{codeJs:o}=Ne();return{codeHtml:a,codeJs:o,model:e}}};function De(e,a,o,s,_,m){const l=t("a-textarea"),d=t("aloha-example");return f(),c(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TEXTAREA_GROUP_RESIZE_HEADER_",description:"_A_TEXTAREA_GROUP_RESIZE_DESCRIPTION_",props:["resize"]},{default:i(()=>[r(l,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=n=>e.model=n),label:"resize='v'",resize:"v"},null,8,["modelValue"]),r(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":a[1]||(a[1]=n=>e.model=n),label:"resize='h'",resize:"h"},null,8,["modelValue"]),r(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":a[2]||(a[2]=n=>e.model=n),label:"resize='none'",resize:"none"},null,8,["modelValue"]),r(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":a[3]||(a[3]=n=>e.model=n),label:"resize='auto'",resize:"auto"},null,8,["modelValue"]),a[4]||(a[4]=I("div",null,"model:",-1)),I("pre",null,T(e.model),1)]),_:1},8,["code-html","code-js"])}const $e=u(Ue,[["render",De]]);function Ce(){return{dataEvents:[{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"},{name:"focus",description:"_A_UI_EVENTS_FOCUS_DESCRIPTION_",type:"Function"},{name:"blur",description:"_A_UI_EVENTS_BLUR_DESCRIPTION_",type:"Function"}]}}function ve(){const e=R(()=>H({placeholder:"_A_TEXTAREA_COMPONENT_NAME_"}));return{pageTitle:R(()=>`ATextarea${e.value?` (${e.value})`:""}`)}}function He(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"autocomplete",description:"_A_UI_PROPS_AUTOCOMPLETE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"clear-button-class",description:"_A_UI_PROPS_CLEAR_BUTTON_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_textarea_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"input-attributes",description:"_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"input-class",description:"_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"is-clear-button",description:"_A_UI_PROPS_IS_CLEAR_BUTTON_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-label-float",description:"_A_UI_PROPS_IS_LABEL_FLOAT_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-scalable",description:"_A_TEXTAREA_PROPS_IS_SCALABLE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-description",description:"_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"maxlength",description:"_A_UI_PROPS_MAXLENGTH_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-undefined",description:"_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"placeholder",description:"_A_UI_PROPS_PLACEHOLDER_DESCRIPTION_",type:"String / Number / Object",default:void 0,required:!1},{name:"readonly",description:"_A_UI_PROPS_READONLY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"readonly-default",description:"_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_",type:"String",default:"",required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"resize",description:"_A_TEXTAREA_PROPS_RESIZE_DESCRIPTION_",type:"String",default:"v",required:!1},{name:"rows",description:"_A_TEXTAREA_PROPS_ROWS_DESCRIPTION_",type:"String / Number",default:void 0,required:!1}]}}const Le={name:"PageTextarea",components:{AlohaPage:$,AlohaTableProps:C,AlohaTableTranslate:v,ATranslation:L,PageTextareaBasic:q,PageTextareaChange:M,PageTextareaErrors:W,PageTextareaHelpText:ae,PageTextareaIsScalable:ne,PageTextareaLabelDescription:pe,PageTextareaLabelFloat:Ae,PageTextareaLabelScreenReader:Re,PageTextareaReadonly:he,PageTextareaResize:$e},setup(){const{pageTitle:e}=ve(),{dataProps:a}=He(),{dataEvents:o}=Ce();return{dataEvents:o,dataProps:a,pageTitle:e}}};function ye(e,a,o,s,_,m){const l=t("a-translation"),d=t("page-textarea-basic"),n=t("page-textarea-change"),x=t("page-textarea-help-text"),S=t("page-textarea-errors"),O=t("page-textarea-label-description"),b=t("page-textarea-label-screen-reader"),h=t("page-textarea-label-float"),g=t("page-textarea-is-scalable"),N=t("page-textarea-resize"),U=t("page-textarea-readonly"),E=t("aloha-table-props"),D=t("aloha-page");return f(),c(D,{"page-title":e.pageTitle},{body:i(()=>[r(l,{tag:"p",html:"_A_TEXTAREA_COMPONENT_DESCRIPTION_"}),r(d),r(n),r(x),r(S),r(O),r(b),r(h),r(g),r(N),r(U),r(E,{data:e.dataProps},null,8,["data"]),r(E,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"])]),_:1},8,["page-title"])}const ea=u(Le,[["render",ye]]);export{ea as default};
