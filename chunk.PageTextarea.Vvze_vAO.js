import{k as f,_ as p,g as U,A as D}from"./bundle.index.Df3v2TOg.js";import{r as P,O as u,aR as i,b as t,Q as c,V as n,U as A,aS as I,a as R}from"./chunk.vendor.CjhiT8UL.js";import"./chunk.vendor-lodash.DyQEPI1B.js";import{A as E,a as C}from"./chunk.AlohaExample.DeTL3OXT.js";import{A as $}from"./chunk.AlohaTableProps.sV5sBN5-.js";import{A as v}from"./chunk.AlohaTableTranslate.Do3adyqR.js";import"./chunk.translations-ar.r8R_9-3y.js";import"./chunk.translations-de.CZJei0la.js";import"./chunk.translations-en.Dg0gWvNs.js";import"./chunk.translations-es.CUN1v5ud.js";import"./chunk.translations-fr.9SIObey9.js";import"./chunk.translations-hr.ycQ9IFNE.js";import"./chunk.translations-it.C3EQWHGi.js";import"./chunk.translations-ru.BPJsanBh.js";import"./chunk.APageTabTitle.DIMo_hMW.js";import"./chunk.AlohaHighlightjs.rF1jvLhM.js";import"./chunk.ATable.DsNy-pVt.js";function H(){return{codeHtml:`<a-textarea
  v-model="model"
  label="Textarea"
></a-textarea>
<div>model:</div>
<pre>{{ model }}</pre>`}}function L(){return{codeJs:`import {
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
};`}}const V={name:"PageTextareaBasic",components:{AlohaExample:E,ATextarea:f},setup(){const e=P("Aloha"),{codeHtml:a}=H(),{codeJs:o}=L();return{codeHtml:a,codeJs:o,model:e}}};function y(e,a,o,s,_,m){const r=t("a-textarea"),d=t("aloha-example");return c(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","label"]},{default:i(()=>[n(r,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=l=>e.model=l),label:"Textarea"},null,8,["modelValue"]),a[1]||(a[1]=A("div",null,"model:",-1)),A("pre",null,I(e.model),1)]),_:1},8,["code-html","code-js"])}const J=p(V,[["render",y]]);function B(){return{codeHtml:`<a-textarea
  :change="changeModel"
  :model-value="model"
  label="Textarea"
></a-textarea>
<div>model:</div>
<pre>{{ model }}</pre>`}}function q(){return{codeJs:`import {
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
};`}}const j={name:"PageTextareaChange",components:{AlohaExample:E,ATextarea:f},setup(){const e=P("Aloha"),a=({model:_,id:m,props:r})=>{e.value=_,console.log(m,r)},{codeHtml:o}=B(),{codeJs:s}=q();return{changeModel:a,codeHtml:o,codeJs:s,model:e}}};function z(e,a,o,s,_,m){const r=t("a-textarea"),d=t("aloha-example");return c(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CHANGE_HEADER_",description:"_A_UI_GROUP_CHANGE_DESCRIPTION_",props:["change","model-value"]},{default:i(()=>[n(r,{change:e.changeModel,"model-value":e.model,label:"Textarea"},null,8,["change","model-value"]),a[0]||(a[0]=A("div",null,"model:",-1)),A("pre",null,I(e.model),1)]),_:1},8,["code-html","code-js"])}const G=p(j,[["render",z]]);function X(){return{codeHtml:`<a-textarea
  v-model="model"
  errors="Aloha"
  label="Textarea"
></a-textarea>`}}function M(){return{codeJs:`import {
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
};`}}const F={name:"PageTextareaErrors",components:{AlohaExample:E,ATextarea:f},setup(){const e=P("Aloha"),{codeHtml:a}=X(),{codeJs:o}=M();return{codeHtml:a,codeJs:o,model:e}}};function k(e,a,o,s,_,m){const r=t("a-textarea"),d=t("aloha-example");return c(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERRORS_HEADER_",description:"_A_UI_GROUP_ERRORS_DESCRIPTION_",props:["errors"]},{default:i(()=>[n(r,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=l=>e.model=l),errors:"Aloha",label:"Textarea"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const w=p(F,[["render",k]]);function Z(){return{codeHtml:`<a-textarea
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
};`}}const W={name:"PageTextareaHelpText",components:{AlohaExample:E,ATextarea:f},setup(){const e=P("Aloha"),{codeHtml:a}=Z(),{codeJs:o}=Q();return{codeHtml:a,codeJs:o,model:e}}};function Y(e,a,o,s,_,m){const r=t("a-textarea"),d=t("aloha-example");return c(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_HELP_TEXT_HEADER_",description:"_A_UI_GROUP_HELP_TEXT_DESCRIPTION_",props:["help-text"]},{default:i(()=>[n(r,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=l=>e.model=l),"help-text":"Aloha",label:"Textarea"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const K=p(W,[["render",Y]]);function ee(){return{codeHtml:`<a-textarea
  v-model="model"
  :is-scalable="true"
  label="Textarea"
></a-textarea>
<div>model:</div>
<pre>{{ model }}</pre>`}}function ae(){return{codeJs:`import {
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
};`}}const te={name:"PageTextareaIsScalable",components:{AlohaExample:E,ATextarea:f},setup(){const e=P("Aloha"),{codeHtml:a}=ee(),{codeJs:o}=ae();return{codeHtml:a,codeJs:o,model:e}}};function oe(e,a,o,s,_,m){const r=t("a-textarea"),d=t("aloha-example");return c(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TEXTAREA_GROUP_IS_SCALABLE_HEADER_",description:"_A_TEXTAREA_GROUP_IS_SCALABLE_DESCRIPTION_",props:["is-scalable"]},{default:i(()=>[n(r,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=l=>e.model=l),"is-scalable":!0,label:"Textarea"},null,8,["modelValue"]),a[1]||(a[1]=A("div",null,"model:",-1)),A("pre",null,I(e.model),1)]),_:1},8,["code-html","code-js"])}const le=p(te,[["render",oe]]);function re(){return{codeHtml:`<a-textarea
  v-model="model"
  :is-label-float="false"
  label="Textarea"
></a-textarea>
<a-textarea
  v-model="model"
  :is-label-float="true"
  label="Textarea"
></a-textarea>`}}function ne(){return{codeJs:`import {
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
};`}}const de={name:"PageTextareaLabelFloat",components:{AlohaExample:E,ATextarea:f},setup(){const e=P("Aloha"),{codeHtml:a}=re(),{codeJs:o}=ne();return{codeHtml:a,codeJs:o,model:e}}};function se(e,a,o,s,_,m){const r=t("a-textarea"),d=t("aloha-example");return c(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_IS_LABEL_FLOAT_HEADER_",description:"_A_UI_GROUP_IS_LABEL_FLOAT_DESCRIPTION_",props:["is-label-float"]},{default:i(()=>[n(r,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=l=>e.model=l),"is-label-float":!1,label:"Textarea"},null,8,["modelValue"]),n(r,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":a[1]||(a[1]=l=>e.model=l),"is-label-float":!0,label:"Textarea"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const _e=p(de,[["render",se]]);function me(){return{codeHtml:`<a-textarea
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
};`}}const ue={name:"PageTextareaLabelScreenReader",components:{AlohaExample:E,ATextarea:f},setup(){const e=P("Aloha"),{codeHtml:a}=me(),{codeJs:o}=pe();return{codeHtml:a,codeJs:o,model:e}}};function ie(e,a,o,s,_,m){const r=t("a-textarea"),d=t("aloha-example");return c(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_SCREEN_READER_HEADER_",description:"_A_UI_GROUP_LABEL_SCREEN_READER_DESCRIPTION_",props:["label-screen-reader"]},{default:i(()=>[n(r,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=l=>e.model=l),label:"Textarea"},null,8,["modelValue"]),n(r,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":a[1]||(a[1]=l=>e.model=l),"label-screen-reader":"Textarea"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const ce=p(ue,[["render",ie]]);function Ae(){return{codeHtml:`<a-textarea
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
<pre>{{ model }}</pre>`}}function fe(){return{codeJs:`import {
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
};`}}const Pe={name:"PageTextareaResize",components:{AlohaExample:E,ATextarea:f},setup(){const e=P("Aloha"),{codeHtml:a}=Ae(),{codeJs:o}=fe();return{codeHtml:a,codeJs:o,model:e}}};function Ee(e,a,o,s,_,m){const r=t("a-textarea"),d=t("aloha-example");return c(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TEXTAREA_GROUP_RESIZE_HEADER_",description:"_A_TEXTAREA_GROUP_RESIZE_DESCRIPTION_",props:["resize"]},{default:i(()=>[n(r,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=l=>e.model=l),label:"resize='v'",resize:"v"},null,8,["modelValue"]),n(r,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":a[1]||(a[1]=l=>e.model=l),label:"resize='h'",resize:"h"},null,8,["modelValue"]),n(r,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":a[2]||(a[2]=l=>e.model=l),label:"resize='none'",resize:"none"},null,8,["modelValue"]),n(r,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":a[3]||(a[3]=l=>e.model=l),label:"resize='auto'",resize:"auto"},null,8,["modelValue"]),a[4]||(a[4]=A("div",null,"model:",-1)),A("pre",null,I(e.model),1)]),_:1},8,["code-html","code-js"])}const Ie=p(Pe,[["render",Ee]]);function Te(){return{dataEvents:[{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"},{name:"focus",description:"_A_UI_EVENTS_FOCUS_DESCRIPTION_",type:"Function"},{name:"blur",description:"_A_UI_EVENTS_BLUR_DESCRIPTION_",type:"Function"}]}}function Re(){const e=R(()=>U({placeholder:"_A_TEXTAREA_COMPONENT_NAME_"}));return{pageTitle:R(()=>`ATextarea${e.value?` (${e.value})`:""}`)}}function Se(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"autocomplete",description:"_A_UI_PROPS_AUTOCOMPLETE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"clear-button-class",description:"_A_UI_PROPS_CLEAR_BUTTON_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_textarea_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"input-attributes",description:"_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"input-class",description:"_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"is-clear-button",description:"_A_UI_PROPS_IS_CLEAR_BUTTON_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-label-float",description:"_A_UI_PROPS_IS_LABEL_FLOAT_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-scalable",description:"_A_TEXTAREA_PROPS_IS_SCALABLE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"maxlength",description:"_A_UI_PROPS_MAXLENGTH_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-undefined",description:"_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"placeholder",description:"_A_UI_PROPS_PLACEHOLDER_DESCRIPTION_",type:"String / Number / Object",default:void 0,required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"resize",description:"_A_TEXTAREA_PROPS_RESIZE_DESCRIPTION_",type:"String",default:"v",required:!1},{name:"rows",description:"_A_TEXTAREA_PROPS_ROWS_DESCRIPTION_",type:"String / Number",default:void 0,required:!1}]}}const xe={name:"PageTextarea",components:{AlohaPage:C,AlohaTableProps:$,AlohaTableTranslate:v,ATranslation:D,PageTextareaBasic:J,PageTextareaChange:G,PageTextareaErrors:w,PageTextareaHelpText:K,PageTextareaIsScalable:le,PageTextareaLabelFloat:_e,PageTextareaLabelScreenReader:ce,PageTextareaResize:Ie},setup(){const{pageTitle:e}=Re(),{dataProps:a}=Se(),{dataEvents:o}=Te();return{dataEvents:o,dataProps:a,pageTitle:e}}};function Oe(e,a,o,s,_,m){const r=t("a-translation"),d=t("page-textarea-basic"),l=t("page-textarea-change"),S=t("page-textarea-help-text"),x=t("page-textarea-errors"),O=t("page-textarea-label-screen-reader"),g=t("page-textarea-label-float"),b=t("page-textarea-is-scalable"),h=t("page-textarea-resize"),T=t("aloha-table-props"),N=t("aloha-page");return c(),u(N,{"page-title":e.pageTitle},{body:i(()=>[n(r,{tag:"p",html:"_A_TEXTAREA_COMPONENT_DESCRIPTION_"}),n(d),n(l),n(S),n(x),n(O),n(g),n(b),n(h),n(T,{data:e.dataProps},null,8,["data"]),n(T,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"])]),_:1},8,["page-title"])}const ze=p(xe,[["render",Oe]]);export{ze as default};
