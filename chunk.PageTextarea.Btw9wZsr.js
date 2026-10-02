import{$t as e,Ct as t,Tt as n,Ut as r,Yt as i,kt as a,qt as o,wt as s,zt as c}from"./chunk.vendor.CZPox1kV.js";import{P as l,Z as ee,kt as u,t as d}from"./bundle.index.CLtYDDlb.js";import{n as f,t as p}from"./chunk.AlohaExample.BFgfeYtr.js";import{t as m}from"./chunk.AlohaTableProps.CiFmD1UR.js";import{t as h}from"./chunk.AlohaTableTranslate.SVFm06b7.js";function g(){return{codeHtml:`<a-textarea
  v-model="model"
  label="Textarea"
></a-textarea>
<div>model:</div>
<pre>{{ model }}</pre>`}}function _(){return{codeJs:`import {
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
};`}}var v={name:`PageTextareaBasic`,components:{AlohaExample:p,ATextarea:l},setup(){let e=i(`Aloha`),{codeHtml:t}=g(),{codeJs:n}=_();return{codeHtml:t,codeJs:n,model:e}}};function y(t,i,l,ee,u,d){let f=r(`a-textarea`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`label`]},{default:o(()=>[a(f,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,label:`Textarea`},null,8,[`modelValue`]),i[1]||=s(`div`,null,`model:`,-1),s(`pre`,null,e(t.model),1)]),_:1},8,[`code-html`,`code-js`])}var b=d(v,[[`render`,y]]);function x(){return{codeHtml:`<a-textarea
  :change="changeModel"
  :model-value="model"
  label="Textarea"
></a-textarea>
<div>model:</div>
<pre>{{ model }}</pre>`}}function S(){return{codeJs:`import {
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
};`}}var C={name:`PageTextareaChange`,components:{AlohaExample:p,ATextarea:l},setup(){let e=i(`Aloha`),t=({model:t,id:n,props:r})=>{e.value=t,console.log(n,r)},{codeHtml:n}=x(),{codeJs:r}=S();return{changeModel:t,codeHtml:n,codeJs:r,model:e}}};function w(t,i,l,ee,u,d){let f=r(`a-textarea`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_UI_GROUP_CHANGE_HEADER_`,description:`_A_UI_GROUP_CHANGE_DESCRIPTION_`,props:[`change`,`model-value`]},{default:o(()=>[a(f,{change:t.changeModel,"model-value":t.model,label:`Textarea`},null,8,[`change`,`model-value`]),i[0]||=s(`div`,null,`model:`,-1),s(`pre`,null,e(t.model),1)]),_:1},8,[`code-html`,`code-js`])}var T=d(C,[[`render`,w]]);function E(){return{codeHtml:`<a-textarea
  v-model="model"
  :error-icon="errorIcon"
  errors="Aloha"
  label="Textarea"
></a-textarea>`}}function D(){return{codeJs:`import {
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
};`}}var O={name:`PageTextareaErrorIcon`,components:{AlohaExample:p,ATextarea:l},setup(){let e=i(`Aloha`),{codeHtml:t}=E(),{codeJs:n}=D();return{codeHtml:t,codeJs:n,errorIcon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.93 6.588 8.758 10.042a.5.5 0 0 1-.998 0L7.588 6.588a.5.5 0 1 1 .998 0M8 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>`,model:e}}};function k(e,t,i,s,l,ee){let u=r(`a-textarea`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_ERROR_ICON_HEADER_`,description:`_A_UI_GROUP_ERROR_ICON_DESCRIPTION_`,props:[`errors`,`error-icon`]},{default:o(()=>[a(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"error-icon":e.errorIcon,errors:`Aloha`,label:`Textarea`},null,8,[`modelValue`,`error-icon`])]),_:1},8,[`code-html`,`code-js`])}var A=d(O,[[`render`,k]]);function j(){return{codeHtml:`<a-textarea
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
};`}}var N={name:`PageTextareaErrors`,components:{AlohaExample:p,ATextarea:l},setup(){let e=i(`Aloha`),{codeHtml:t}=j(),{codeJs:n}=M();return{codeHtml:t,codeJs:n,model:e}}};function P(e,t,i,s,l,ee){let u=r(`a-textarea`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_ERRORS_HEADER_`,description:`_A_UI_GROUP_ERRORS_DESCRIPTION_`,props:[`errors`]},{default:o(()=>[a(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,errors:`Aloha`,label:`Textarea`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var F=d(N,[[`render`,P]]);function I(){return{codeHtml:`<a-textarea
  v-model="model"
  help-text="Aloha"
  label="Textarea"
></a-textarea>`}}function L(){return{codeJs:`import {
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
};`}}var R={name:`PageTextareaHelpText`,components:{AlohaExample:p,ATextarea:l},setup(){let e=i(`Aloha`),{codeHtml:t}=I(),{codeJs:n}=L();return{codeHtml:t,codeJs:n,model:e}}};function z(e,t,i,s,l,ee){let u=r(`a-textarea`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_HELP_TEXT_HEADER_`,description:`_A_UI_GROUP_HELP_TEXT_DESCRIPTION_`,props:[`help-text`]},{default:o(()=>[a(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"help-text":`Aloha`,label:`Textarea`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var B=d(R,[[`render`,z]]);function V(){return{codeHtml:`<a-textarea
  v-model="model"
  :is-scalable="true"
  label="Textarea"
></a-textarea>
<div>model:</div>
<pre>{{ model }}</pre>`}}function H(){return{codeJs:`import {
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
};`}}var U={name:`PageTextareaIsScalable`,components:{AlohaExample:p,ATextarea:l},setup(){let e=i(`Aloha`),{codeHtml:t}=V(),{codeJs:n}=H();return{codeHtml:t,codeJs:n,model:e}}};function W(t,i,l,ee,u,d){let f=r(`a-textarea`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_TEXTAREA_GROUP_IS_SCALABLE_HEADER_`,description:`_A_TEXTAREA_GROUP_IS_SCALABLE_DESCRIPTION_`,props:[`is-scalable`]},{default:o(()=>[a(f,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,"is-scalable":!0,label:`Textarea`},null,8,[`modelValue`]),i[1]||=s(`div`,null,`model:`,-1),s(`pre`,null,e(t.model),1)]),_:1},8,[`code-html`,`code-js`])}var G=d(U,[[`render`,W]]);function K(){return{codeHtml:`<a-textarea
  v-model="model"
  :is-label-float="false"
  label="Textarea"
  label-description="Aloha"
></a-textarea>`}}function q(){return{codeJs:`import {
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
};`}}var te={name:`PageTextareaLabelDescription`,components:{AlohaExample:p,ATextarea:l},setup(){let e=i(`Aloha`),{codeHtml:t}=K(),{codeJs:n}=q();return{codeHtml:t,codeJs:n,model:e}}};function J(e,t,i,s,l,ee){let u=r(`a-textarea`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_`,description:`_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_`,props:[`label-description`]},{default:o(()=>[a(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"is-label-float":!1,label:`Textarea`,"label-description":`Aloha`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var Y=d(te,[[`render`,J]]);function X(){return{codeHtml:`<a-textarea
  v-model="model"
  :is-label-float="false"
  label="Textarea"
></a-textarea>
<a-textarea
  v-model="model"
  :is-label-float="true"
  label="Textarea"
></a-textarea>`}}function Z(){return{codeJs:`import {
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
};`}}var Q={name:`PageTextareaLabelFloat`,components:{AlohaExample:p,ATextarea:l},setup(){let e=i(`Aloha`),{codeHtml:t}=X(),{codeJs:n}=Z();return{codeHtml:t,codeJs:n,model:e}}};function ne(e,t,i,s,l,ee){let u=r(`a-textarea`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_IS_LABEL_FLOAT_HEADER_`,description:`_A_UI_GROUP_IS_LABEL_FLOAT_DESCRIPTION_`,props:[`is-label-float`]},{default:o(()=>[a(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"is-label-float":!1,label:`Textarea`},null,8,[`modelValue`]),a(u,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,"is-label-float":!0,label:`Textarea`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var re=d(Q,[[`render`,ne]]);function ie(){return{codeHtml:`<a-textarea
  v-model="model"
  label="Textarea"
></a-textarea>
<a-textarea
  v-model="model"
  class="a_mt_3"
  label-screen-reader="Textarea"
></a-textarea>`}}function ae(){return{codeJs:`import {
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
};`}}var oe={name:`PageTextareaLabelScreenReader`,components:{AlohaExample:p,ATextarea:l},setup(){let e=i(`Aloha`),{codeHtml:t}=ie(),{codeJs:n}=ae();return{codeHtml:t,codeJs:n,model:e}}};function se(e,t,i,s,l,ee){let u=r(`a-textarea`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_LABEL_SCREEN_READER_HEADER_`,description:`_A_UI_GROUP_LABEL_SCREEN_READER_DESCRIPTION_`,props:[`label-screen-reader`]},{default:o(()=>[a(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`Textarea`},null,8,[`modelValue`]),a(u,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,"label-screen-reader":`Textarea`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var ce=d(oe,[[`render`,se]]);function le(){return{codeHtml:`<a-textarea
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
></a-textarea>`}}function ue(){return{codeJs:`import {
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
};`}}var de={name:`PageTextareaReadonly`,components:{AlohaExample:p,ATextarea:l},setup(){let e=i(`Aloha
Hola`),t=i(void 0),{codeHtml:n}=le(),{codeJs:r}=ue();return{codeHtml:n,codeJs:r,model1:e,model2:t}}};function fe(e,t,i,s,l,ee){let u=r(`a-textarea`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_READONLY_HEADER_`,description:`_A_UI_GROUP_READONLY_DESCRIPTION_`,props:[`readonly`,`readonly-default`]},{default:o(()=>[a(u,{"model-value":e.model1,readonly:!0,label:`Textarea 1`},null,8,[`model-value`]),a(u,{class:`a_mt_3`,"model-value":e.model2,readonly:!0,label:`Textarea 2`},null,8,[`model-value`]),a(u,{class:`a_mt_3`,"model-value":e.model2,readonly:!0,"help-text":`Aloha`,label:`Textarea 3`,"readonly-default":`-`},null,8,[`model-value`])]),_:1},8,[`code-html`,`code-js`])}var pe=d(de,[[`render`,fe]]);function $(){return{codeHtml:`<a-textarea
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
<pre>{{ model }}</pre>`}}function me(){return{codeJs:`import {
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
};`}}var he={name:`PageTextareaResize`,components:{AlohaExample:p,ATextarea:l},setup(){let e=i(`Aloha`),{codeHtml:t}=$(),{codeJs:n}=me();return{codeHtml:t,codeJs:n,model:e}}};function ge(t,i,l,ee,u,d){let f=r(`a-textarea`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_TEXTAREA_GROUP_RESIZE_HEADER_`,description:`_A_TEXTAREA_GROUP_RESIZE_DESCRIPTION_`,props:[`resize`]},{default:o(()=>[a(f,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,label:`resize='v'`,resize:`v`},null,8,[`modelValue`]),a(f,{class:`a_mt_3`,modelValue:t.model,"onUpdate:modelValue":i[1]||=e=>t.model=e,label:`resize='h'`,resize:`h`},null,8,[`modelValue`]),a(f,{class:`a_mt_3`,modelValue:t.model,"onUpdate:modelValue":i[2]||=e=>t.model=e,label:`resize='none'`,resize:`none`},null,8,[`modelValue`]),a(f,{class:`a_mt_3`,modelValue:t.model,"onUpdate:modelValue":i[3]||=e=>t.model=e,label:`resize='auto'`,resize:`auto`},null,8,[`modelValue`]),i[4]||=s(`div`,null,`model:`,-1),s(`pre`,null,e(t.model),1)]),_:1},8,[`code-html`,`code-js`])}var _e=d(he,[[`render`,ge]]);function ve(){return{dataEvents:[{name:`update:model-value`,description:`_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_`,type:`Function`},{name:`focus`,description:`_A_UI_EVENTS_FOCUS_DESCRIPTION_`,type:`Function`},{name:`blur`,description:`_A_UI_EVENTS_BLUR_DESCRIPTION_`,type:`Function`}]}}function ye(){let e=t(()=>u({placeholder:`_A_TEXTAREA_COMPONENT_NAME_`}));return{pageTitle:t(()=>`ATextarea${e.value?` (${e.value})`:``}`)}}function be(){return{dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`autocomplete`,description:`_A_UI_PROPS_AUTOCOMPLETE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`change`,description:`_A_UI_PROPS_CHANGE_DESCRIPTION_`,type:`Function`,default:`() => {}`,required:!1},{name:`clear-button-class`,description:`_A_UI_PROPS_CLEAR_BUTTON_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`dependencies`,description:`_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_`,type:`Array / Object`,default:void 0,required:!1},{name:`disabled`,description:`_A_UI_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`errors`,description:`_A_UI_PROPS_ERRORS_DESCRIPTION_`,type:`String / Array`,default:void 0,required:!1},{name:`error-icon`,description:`_A_UI_PROPS_ERROR_ICON_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`exclude-render-attributes`,description:`_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`extra`,description:`_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`help-text`,description:`_A_UI_PROPS_HELP_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`html-id`,description:`_A_UI_PROPS_HTML_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`id`,description:`_A_UI_PROPS_ID_DESCRIPTION_`,type:`String / Number`,default:`() => uniqueId("a_textarea_")`,required:!1},{name:`id-prefix`,description:`_A_UI_PROPS_ID_PREFIX_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`input-attributes`,description:`_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`input-class`,description:`_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`is-clear-button`,description:`_A_UI_PROPS_IS_CLEAR_BUTTON_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-hide`,description:`_A_UI_PROPS_IS_HIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-label-float`,description:`_A_UI_PROPS_IS_LABEL_FLOAT_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-render`,description:`_A_UI_PROPS_IS_RENDER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-scalable`,description:`_A_TEXTAREA_PROPS_IS_SCALABLE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`label`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`label-class`,description:`_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`label-description`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`label-screen-reader`,description:`_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`maxlength`,description:`_A_UI_PROPS_MAXLENGTH_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`model-dependencies`,description:`_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`model-undefined`,description:`_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_`,type:`String / Number / Object / Array / Boolean`,default:void 0,required:!1},{name:`model-value`,description:`_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`placeholder`,description:`_A_UI_PROPS_PLACEHOLDER_DESCRIPTION_`,type:`String / Number / Object`,default:void 0,required:!1},{name:`readonly`,description:`_A_UI_PROPS_READONLY_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`readonly-default`,description:`_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_`,type:`String`,default:``,required:!1},{name:`required`,description:`_A_UI_PROPS_REQUIRED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`resize`,description:`_A_TEXTAREA_PROPS_RESIZE_DESCRIPTION_`,type:`String`,default:`v`,required:!1},{name:`rows`,description:`_A_TEXTAREA_PROPS_ROWS_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1}]}}var xe={name:`PageTextarea`,components:{AlohaPage:f,AlohaTableProps:m,AlohaTableTranslate:h,ATranslation:ee,PageTextareaBasic:b,PageTextareaChange:T,PageTextareaErrors:F,PageTextareaErrorIcon:A,PageTextareaHelpText:B,PageTextareaIsScalable:G,PageTextareaLabelDescription:Y,PageTextareaLabelFloat:re,PageTextareaLabelScreenReader:ce,PageTextareaReadonly:pe,PageTextareaResize:_e},setup(){let{pageTitle:e}=ye(),{dataProps:t}=be(),{dataEvents:n}=ve();return{dataEvents:n,dataProps:t,pageTitle:e}}};function Se(e,t,i,s,l,ee){let u=r(`a-translation`),d=r(`page-textarea-basic`),f=r(`page-textarea-change`),p=r(`page-textarea-help-text`),m=r(`page-textarea-errors`),h=r(`page-textarea-error-icon`),g=r(`page-textarea-label-description`),_=r(`page-textarea-label-screen-reader`),v=r(`page-textarea-label-float`),y=r(`page-textarea-is-scalable`),b=r(`page-textarea-resize`),x=r(`page-textarea-readonly`),S=r(`aloha-table-props`),C=r(`aloha-page`);return c(),n(C,{"page-title":e.pageTitle},{body:o(()=>[a(u,{tag:`p`,html:`_A_TEXTAREA_COMPONENT_DESCRIPTION_`}),a(d),a(f),a(p),a(m),a(h),a(g),a(_),a(v),a(y),a(b),a(x),a(S,{data:e.dataProps},null,8,[`data`]),a(S,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`])]),_:1},8,[`page-title`])}var Ce=d(xe,[[`render`,Se]]);export{Ce as default};