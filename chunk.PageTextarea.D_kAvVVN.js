import{A,a as U}from"./chunk.AlohaExample.Ch828iNY.js";import{A as D}from"./chunk.AlohaTableProps.C36Ex24p.js";import{A as C}from"./chunk.AlohaTableTranslate.HPqL3d0j.js";import{_ as c,g as $,A as v}from"./bundle.index.C5ESvXvL.js";import{c as f}from"./chunk.AForm.DSIL6mB0.js";import{r as T,m as t,C as u,L as p,B as i,G as n,F as P,M as E,a as R}from"./chunk.vendor.D-Y3mz6a.js";import"./chunk.vendor-lodash.ClBXVCWL.js";import"./chunk.ATable.C4VIyU-j.js";import"./chunk.utilsMath.7PmiGUbm.js";import"./chunk.vendor-tinymce.2RT9eEW9.js";import"./chunk.ADatepicker.DHZnNTS-.js";import"./chunk.UiMixinProps.BVfs3aDc.js";import"./chunk.AInputNumber.kHSOqT_P.js";import"./chunk.ATinymce.CslL0xeu.js";function H(){return{codeHtml:`<a-textarea
  v-model="model"
  label="Textarea"
></a-textarea>
<div>model:</div>
<pre>{{ model }}</pre>`}}function L(){return{codeJs:`import {
  ref,
} from "vue";

import ATextarea from "aloha-vue/src/ui/ATextarea/ATextarea";
    
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
};`}}const V={name:"PageTextareaBasic",components:{AlohaExample:A,ATextarea:f},setup(){const e=T("Aloha"),{codeHtml:a}=H(),{codeJs:o}=L();return{codeHtml:a,codeJs:o,model:e}}},y=P("div",null,"model:",-1);function J(e,a,o,s,_,m){const l=t("a-textarea"),d=t("aloha-example");return i(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","label"]},{default:p(()=>[n(l,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=r=>e.model=r),label:"Textarea"},null,8,["modelValue"]),y,P("pre",null,E(e.model),1)]),_:1},8,["code-html","code-js"])}const B=c(V,[["render",J]]);function q(){return{codeHtml:`<a-textarea
  :change="changeModel"
  :model-value="model"
  label="Textarea"
></a-textarea>
<div>model:</div>
<pre>{{ model }}</pre>`}}function j(){return{codeJs:`import {
  ref,
} from "vue";

import ATextarea from "aloha-vue/src/ui/ATextarea/ATextarea";
    
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
};`}}const z={name:"PageTextareaChange",components:{AlohaExample:A,ATextarea:f},setup(){const e=T("Aloha"),a=({model:_,id:m,props:l})=>{e.value=_,console.log(m,l)},{codeHtml:o}=q(),{codeJs:s}=j();return{changeModel:a,codeHtml:o,codeJs:s,model:e}}},G=P("div",null,"model:",-1);function M(e,a,o,s,_,m){const l=t("a-textarea"),d=t("aloha-example");return i(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CHANGE_HEADER_",description:"_A_UI_GROUP_CHANGE_DESCRIPTION_",props:["change","model-value"]},{default:p(()=>[n(l,{change:e.changeModel,"model-value":e.model,label:"Textarea"},null,8,["change","model-value"]),G,P("pre",null,E(e.model),1)]),_:1},8,["code-html","code-js"])}const X=c(z,[["render",M]]);function F(){return{codeHtml:`<a-textarea
  v-model="model"
  errors="Aloha"
  label="Textarea"
></a-textarea>`}}function w(){return{codeJs:`import {
  ref,
} from "vue";

import ATextarea from "aloha-vue/src/ui/ATextarea/ATextarea";
    
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
};`}}const Z={name:"PageTextareaErrors",components:{AlohaExample:A,ATextarea:f},setup(){const e=T("Aloha"),{codeHtml:a}=F(),{codeJs:o}=w();return{codeHtml:a,codeJs:o,model:e}}};function k(e,a,o,s,_,m){const l=t("a-textarea"),d=t("aloha-example");return i(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERRORS_HEADER_",description:"_A_UI_GROUP_ERRORS_DESCRIPTION_",props:["errors"]},{default:p(()=>[n(l,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=r=>e.model=r),errors:"Aloha",label:"Textarea"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const W=c(Z,[["render",k]]);function Q(){return{codeHtml:`<a-textarea
  v-model="model"
  help-text="Aloha"
  label="Textarea"
></a-textarea>`}}function Y(){return{codeJs:`import {
  ref,
} from "vue";

import ATextarea from "aloha-vue/src/ui/ATextarea/ATextarea";
    
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
};`}}const K={name:"PageTextareaHelpText",components:{AlohaExample:A,ATextarea:f},setup(){const e=T("Aloha"),{codeHtml:a}=Q(),{codeJs:o}=Y();return{codeHtml:a,codeJs:o,model:e}}};function ee(e,a,o,s,_,m){const l=t("a-textarea"),d=t("aloha-example");return i(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_HELP_TEXT_HEADER_",description:"_A_UI_GROUP_HELP_TEXT_DESCRIPTION_",props:["help-text"]},{default:p(()=>[n(l,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=r=>e.model=r),"help-text":"Aloha",label:"Textarea"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const ae=c(K,[["render",ee]]);function te(){return{codeHtml:`<a-textarea
  v-model="model"
  :is-scalable="true"
  label="Textarea"
></a-textarea>
<div>model:</div>
<pre>{{ model }}</pre>`}}function oe(){return{codeJs:`import {
  ref,
} from "vue";

import ATextarea from "aloha-vue/src/ui/ATextarea/ATextarea";
    
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
};`}}const re={name:"PageTextareaIsScalable",components:{AlohaExample:A,ATextarea:f},setup(){const e=T("Aloha"),{codeHtml:a}=te(),{codeJs:o}=oe();return{codeHtml:a,codeJs:o,model:e}}},le=P("div",null,"model:",-1);function ne(e,a,o,s,_,m){const l=t("a-textarea"),d=t("aloha-example");return i(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TEXTAREA_GROUP_IS_SCALABLE_HEADER_",description:"_A_TEXTAREA_GROUP_IS_SCALABLE_DESCRIPTION_",props:["is-scalable"]},{default:p(()=>[n(l,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=r=>e.model=r),"is-scalable":!0,label:"Textarea"},null,8,["modelValue"]),le,P("pre",null,E(e.model),1)]),_:1},8,["code-html","code-js"])}const de=c(re,[["render",ne]]);function se(){return{codeHtml:`<a-textarea
  v-model="model"
  :is-label-float="false"
  label="Textarea"
></a-textarea>
<a-textarea
  v-model="model"
  :is-label-float="true"
  label="Textarea"
></a-textarea>`}}function _e(){return{codeJs:`import {
  ref,
} from "vue";

import ATextarea from "aloha-vue/src/ui/ATextarea/ATextarea";
    
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
};`}}const me={name:"PageTextareaLabelFloat",components:{AlohaExample:A,ATextarea:f},setup(){const e=T("Aloha"),{codeHtml:a}=se(),{codeJs:o}=_e();return{codeHtml:a,codeJs:o,model:e}}};function ce(e,a,o,s,_,m){const l=t("a-textarea"),d=t("aloha-example");return i(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_IS_LABEL_FLOAT_HEADER_",description:"_A_UI_GROUP_IS_LABEL_FLOAT_DESCRIPTION_",props:["is-label-float"]},{default:p(()=>[n(l,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=r=>e.model=r),"is-label-float":!1,label:"Textarea"},null,8,["modelValue"]),n(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":a[1]||(a[1]=r=>e.model=r),"is-label-float":!0,label:"Textarea"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const ue=c(me,[["render",ce]]);function pe(){return{codeHtml:`<a-textarea
  v-model="model"
  label="Textarea"
></a-textarea>
<a-textarea
  v-model="model"
  class="a_mt_3"
  label-screen-reader="Textarea"
></a-textarea>`}}function ie(){return{codeJs:`import {
  ref,
} from "vue";

import ATextarea from "aloha-vue/src/ui/ATextarea/ATextarea";
    
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
};`}}const Ae={name:"PageTextareaLabelScreenReader",components:{AlohaExample:A,ATextarea:f},setup(){const e=T("Aloha"),{codeHtml:a}=pe(),{codeJs:o}=ie();return{codeHtml:a,codeJs:o,model:e}}};function fe(e,a,o,s,_,m){const l=t("a-textarea"),d=t("aloha-example");return i(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_SCREEN_READER_HEADER_",description:"_A_UI_GROUP_LABEL_SCREEN_READER_DESCRIPTION_",props:["label-screen-reader"]},{default:p(()=>[n(l,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=r=>e.model=r),label:"Textarea"},null,8,["modelValue"]),n(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":a[1]||(a[1]=r=>e.model=r),"label-screen-reader":"Textarea"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const Te=c(Ae,[["render",fe]]);function Pe(){return{codeHtml:`<a-textarea
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
<pre>{{ model }}</pre>`}}function Ee(){return{codeJs:`import {
  ref,
} from "vue";

import ATextarea from "aloha-vue/src/ui/ATextarea/ATextarea";
    
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
};`}}const Ie={name:"PageTextareaResize",components:{AlohaExample:A,ATextarea:f},setup(){const e=T("Aloha"),{codeHtml:a}=Pe(),{codeJs:o}=Ee();return{codeHtml:a,codeJs:o,model:e}}},Re=P("div",null,"model:",-1);function xe(e,a,o,s,_,m){const l=t("a-textarea"),d=t("aloha-example");return i(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TEXTAREA_GROUP_RESIZE_HEADER_",description:"_A_TEXTAREA_GROUP_RESIZE_DESCRIPTION_",props:["resize"]},{default:p(()=>[n(l,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=r=>e.model=r),label:"resize='v'",resize:"v"},null,8,["modelValue"]),n(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":a[1]||(a[1]=r=>e.model=r),label:"resize='h'",resize:"h"},null,8,["modelValue"]),n(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":a[2]||(a[2]=r=>e.model=r),label:"resize='none'",resize:"none"},null,8,["modelValue"]),n(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":a[3]||(a[3]=r=>e.model=r),label:"resize='auto'",resize:"auto"},null,8,["modelValue"]),Re,P("pre",null,E(e.model),1)]),_:1},8,["code-html","code-js"])}const Se=c(Ie,[["render",xe]]);function Oe(){return{dataEvents:[{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"},{name:"focus",description:"_A_UI_EVENTS_FOCUS_DESCRIPTION_",type:"Function"},{name:"blur",description:"_A_UI_EVENTS_BLUR_DESCRIPTION_",type:"Function"}]}}function he(){const e=R(()=>$({placeholder:"_A_TEXTAREA_COMPONENT_NAME_"}));return{pageTitle:R(()=>`ATextarea${e.value?` (${e.value})`:""}`)}}function ge(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"autocomplete",description:"_A_UI_PROPS_AUTOCOMPLETE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"clear-button-class",description:"_A_UI_PROPS_CLEAR_BUTTON_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_textarea_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"input-attributes",description:"_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"input-class",description:"_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"is-clear-button",description:"_A_UI_PROPS_IS_CLEAR_BUTTON_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-label-float",description:"_A_UI_PROPS_IS_LABEL_FLOAT_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-scalable",description:"_A_TEXTAREA_PROPS_IS_SCALABLE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"maxlength",description:"_A_UI_PROPS_MAXLENGTH_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-undefined",description:"_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"placeholder",description:"_A_UI_PROPS_PLACEHOLDER_DESCRIPTION_",type:"String / Number / Object",default:void 0,required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"resize",description:"_A_TEXTAREA_PROPS_RESIZE_DESCRIPTION_",type:"String",default:"v",required:!1},{name:"rows",description:"_A_TEXTAREA_PROPS_ROWS_DESCRIPTION_",type:"String / Number",default:void 0,required:!1}]}}const be={name:"PageTextarea",components:{AlohaPage:U,AlohaTableProps:D,AlohaTableTranslate:C,ATranslation:v,PageTextareaBasic:B,PageTextareaChange:X,PageTextareaErrors:W,PageTextareaHelpText:ae,PageTextareaIsScalable:de,PageTextareaLabelFloat:ue,PageTextareaLabelScreenReader:Te,PageTextareaResize:Se},setup(){const{pageTitle:e}=he(),{dataProps:a}=ge(),{dataEvents:o}=Oe();return{dataEvents:o,dataProps:a,pageTitle:e}}};function Ne(e,a,o,s,_,m){const l=t("a-translation"),d=t("page-textarea-basic"),r=t("page-textarea-change"),x=t("page-textarea-help-text"),S=t("page-textarea-errors"),O=t("page-textarea-label-screen-reader"),h=t("page-textarea-label-float"),g=t("page-textarea-is-scalable"),b=t("page-textarea-resize"),I=t("aloha-table-props"),N=t("aloha-page");return i(),u(N,{"page-title":e.pageTitle},{body:p(()=>[n(l,{tag:"p",html:"_A_TEXTAREA_COMPONENT_DESCRIPTION_"}),n(d),n(r),n(x),n(S),n(O),n(h),n(g),n(b),n(I,{data:e.dataProps},null,8,["data"]),n(I,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"])]),_:1},8,["page-title"])}const Ge=c(be,[["render",Ne]]);export{Ge as default};
