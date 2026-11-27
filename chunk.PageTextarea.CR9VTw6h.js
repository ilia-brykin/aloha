import{t as e}from"./chunk.AlohaPage.BIw9NYpI.js";import{t}from"./chunk.AlohaTableProps.9D5sSTzx.js";import{t as n}from"./chunk.AlohaTableTranslate.Dl6r_SFb.js";import{Gt as r,Ht as i,Jt as a,Ut as o,Vt as s,_n as c,cn as l,mn as u,on as d,un as f,wn as p,zt as m}from"./chunk.vendor.Bjd2408Z.js";import{t as h}from"./chunk.AlohaExample.CEueonn8.js";import{F as g,hn as _,mn as v,t as y}from"./bundle.index.Dor-y9Rj.js";function b(){return{codeHtml:`<a-textarea
  v-model="model"
  label="Textarea"
></a-textarea>
<div>model:</div>
<pre>{{ model }}</pre>`}}function x(){return{codeJs:`import {
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
};`}}var S={name:`PageTextareaBasic`,components:{AlohaExample:h,ATextarea:g},setup(){let e=c(`Aloha`),{codeHtml:t}=b(),{codeJs:n}=x();return{codeHtml:t,codeJs:n,model:e}}};function C(e,t,n,r,s,c){let l=f(`a-textarea`),m=f(`aloha-example`);return d(),o(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`label`]},{default:u(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`Textarea`},null,8,[`modelValue`]),t[1]||=i(`div`,null,`model:`,-1),i(`pre`,null,p(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var w=y(S,[[`render`,C]]);function ee(){return{codeHtml:`<a-textarea
  :change="changeModel"
  :model-value="model"
  label="Textarea"
></a-textarea>
<div>model:</div>
<pre>{{ model }}</pre>`}}function T(){return{codeJs:`import {
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
};`}}var E={name:`PageTextareaChange`,components:{AlohaExample:h,ATextarea:g},setup(){let e=c(`Aloha`),t=({model:t,id:n,props:r})=>{e.value=t,console.log(n,r)},{codeHtml:n}=ee(),{codeJs:r}=T();return{changeModel:t,codeHtml:n,codeJs:r,model:e}}};function D(e,t,n,r,s,c){let l=f(`a-textarea`),m=f(`aloha-example`);return d(),o(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_CHANGE_HEADER_`,description:`_A_UI_GROUP_CHANGE_DESCRIPTION_`,props:[`change`,`model-value`]},{default:u(()=>[a(l,{change:e.changeModel,"model-value":e.model,label:`Textarea`},null,8,[`change`,`model-value`]),t[0]||=i(`div`,null,`model:`,-1),i(`pre`,null,p(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var O=y(E,[[`render`,D]]);function k(){return{codeHtml:`<a-textarea
  v-model="model"
  :error-icon="errorIcon"
  errors="Aloha"
  label="Textarea"
></a-textarea>`}}function A(){return{codeJs:`import {
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
};`}}var j={name:`PageTextareaErrorIcon`,components:{AlohaExample:h,ATextarea:g},setup(){let e=c(`Aloha`),{codeHtml:t}=k(),{codeJs:n}=A();return{codeHtml:t,codeJs:n,errorIcon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.93 6.588 8.758 10.042a.5.5 0 0 1-.998 0L7.588 6.588a.5.5 0 1 1 .998 0M8 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>`,model:e}}};function M(e,t,n,r,i,s){let c=f(`a-textarea`),l=f(`aloha-example`);return d(),o(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_ERROR_ICON_HEADER_`,description:`_A_UI_GROUP_ERROR_ICON_DESCRIPTION_`,props:[`errors`,`error-icon`]},{default:u(()=>[a(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"error-icon":e.errorIcon,errors:`Aloha`,label:`Textarea`},null,8,[`modelValue`,`error-icon`])]),_:1},8,[`code-html`,`code-js`])}var N=y(j,[[`render`,M]]);function P(){return{codeHtml:`<a-textarea
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
};`}}var I={name:`PageTextareaErrors`,components:{AlohaExample:h,ATextarea:g},setup(){let e=c(`Aloha`),{codeHtml:t}=P(),{codeJs:n}=F();return{codeHtml:t,codeJs:n,model:e}}};function L(e,t,n,r,i,s){let c=f(`a-textarea`),l=f(`aloha-example`);return d(),o(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_ERRORS_HEADER_`,description:`_A_UI_GROUP_ERRORS_DESCRIPTION_`,props:[`errors`]},{default:u(()=>[a(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,errors:`Aloha`,label:`Textarea`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var R=y(I,[[`render`,L]]);function z(){return{codeHtml:`<a-textarea
  v-model="model"
  help-text="Aloha"
  label="Textarea"
></a-textarea>`}}function B(){return{codeJs:`import {
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
};`}}var V={name:`PageTextareaHelpText`,components:{AlohaExample:h,ATextarea:g},setup(){let e=c(`Aloha`),{codeHtml:t}=z(),{codeJs:n}=B();return{codeHtml:t,codeJs:n,model:e}}};function H(e,t,n,r,i,s){let c=f(`a-textarea`),l=f(`aloha-example`);return d(),o(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_HELP_TEXT_HEADER_`,description:`_A_UI_GROUP_HELP_TEXT_DESCRIPTION_`,props:[`help-text`]},{default:u(()=>[a(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"help-text":`Aloha`,label:`Textarea`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var U=y(V,[[`render`,H]]);function W(){return{codeHtml:`<a-textarea
  v-model="model"
  :is-scalable="true"
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
};`}}var K={name:`PageTextareaIsScalable`,components:{AlohaExample:h,ATextarea:g},setup(){let e=c(`Aloha`),{codeHtml:t}=W(),{codeJs:n}=G();return{codeHtml:t,codeJs:n,model:e}}};function q(e,t,n,r,s,c){let l=f(`a-textarea`),m=f(`aloha-example`);return d(),o(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TEXTAREA_GROUP_IS_SCALABLE_HEADER_`,description:`_A_TEXTAREA_GROUP_IS_SCALABLE_DESCRIPTION_`,props:[`is-scalable`]},{default:u(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"is-scalable":!0,label:`Textarea`},null,8,[`modelValue`]),t[1]||=i(`div`,null,`model:`,-1),i(`pre`,null,p(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var J=y(K,[[`render`,q]]);function Y(){return{codeHtml:`<a-textarea
  v-model="model"
  label-position="top"
  label="Textarea"
  label-description="Aloha"
></a-textarea>`}}function X(){return{codeJs:`import {
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
};`}}var Z={name:`PageTextareaLabelDescription`,components:{AlohaExample:h,ATextarea:g},setup(){let e=c(`Aloha`),{codeHtml:t}=Y(),{codeJs:n}=X();return{codeHtml:t,codeJs:n,model:e}}};function Q(e,t,n,r,i,s){let c=f(`a-textarea`),l=f(`aloha-example`);return d(),o(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_`,description:`_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_`,props:[`label-description`]},{default:u(()=>[a(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"label-position":`top`,label:`Textarea`,"label-description":`Aloha`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var te=y(Z,[[`render`,Q]]);function ne(){return{codeHtml:`<a-textarea
  v-model="model"
  label="label-position: float"
  label-position="float"
></a-textarea>
<a-textarea
  v-model="model"
  label="label-position: inset"
  label-position="inset"
></a-textarea>
<a-textarea
  v-model="model"
  label="label-position: top"
  label-position="top"
></a-textarea>
<div>model: {{ model }}</div>`}}function re(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ATextarea,
} from "aloha-vue";

export default {
  name: "PageTextareaLabelPosition",
  components: {
    ATextarea,
  },
  setup() {
    const model = ref("Aloha");

    return {
      model,
    };
  },
};`}}var ie={name:`PageTextareaLabelPosition`,components:{AlohaExample:h,ATextarea:g},setup(){let e=c(`Aloha`),t=[`float`,`inset`,`top`],{codeHtml:n}=ne(),{codeJs:r}=re();return{codeHtml:n,codeJs:r,labelPositions:t,model:e}}},ae={class:`a_columns a_columns_count_12`};function oe(e,t,n,s,c,h){let g=f(`a-textarea`),_=f(`aloha-example`);return d(),o(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_LABEL_POSITION_HEADER_`,description:`_A_UI_LABEL_POSITION_DESCRIPTION_`,props:[`label-position`]},{default:u(()=>[i(`div`,ae,[(d(!0),r(m,null,l(e.labelPositions,n=>(d(),r(`div`,{class:`a_column a_column_4 a_columns_count_12_touch`,key:n},[a(g,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`label-position: ${n}`,"label-position":n},null,8,[`modelValue`,`label`,`label-position`])]))),128))]),i(`div`,null,`model: `+p(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var se=y(ie,[[`render`,oe]]);function ce(){return{codeHtml:`<a-textarea
  v-model="model"
  label="Textarea"
></a-textarea>
<a-textarea
  v-model="model"
  class="a_mt_3"
  label-screen-reader="Textarea"
></a-textarea>`}}function le(){return{codeJs:`import {
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
};`}}var ue={name:`PageTextareaLabelScreenReader`,components:{AlohaExample:h,ATextarea:g},setup(){let e=c(`Aloha`),{codeHtml:t}=ce(),{codeJs:n}=le();return{codeHtml:t,codeJs:n,model:e}}};function de(e,t,n,r,i,s){let c=f(`a-textarea`),l=f(`aloha-example`);return d(),o(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_LABEL_SCREEN_READER_HEADER_`,description:`_A_UI_GROUP_LABEL_SCREEN_READER_DESCRIPTION_`,props:[`label-screen-reader`]},{default:u(()=>[a(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`Textarea`},null,8,[`modelValue`]),a(c,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,"label-screen-reader":`Textarea`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var fe=y(ue,[[`render`,de]]);function pe(){return{codeHtml:`<a-textarea
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
></a-textarea>`}}function me(){return{codeJs:`import {
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
};`}}var he={name:`PageTextareaReadonly`,components:{AlohaExample:h,ATextarea:g},setup(){let e=c(`Aloha
Hola`),t=c(void 0),{codeHtml:n}=pe(),{codeJs:r}=me();return{codeHtml:n,codeJs:r,model1:e,model2:t}}};function ge(e,t,n,r,i,s){let c=f(`a-textarea`),l=f(`aloha-example`);return d(),o(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_READONLY_HEADER_`,description:`_A_UI_GROUP_READONLY_DESCRIPTION_`,props:[`readonly`,`readonly-default`]},{default:u(()=>[a(c,{"model-value":e.model1,readonly:!0,label:`Textarea 1`},null,8,[`model-value`]),a(c,{class:`a_mt_3`,"model-value":e.model2,readonly:!0,label:`Textarea 2`},null,8,[`model-value`]),a(c,{class:`a_mt_3`,"model-value":e.model2,readonly:!0,"help-text":`Aloha`,label:`Textarea 3`,"readonly-default":`-`},null,8,[`model-value`])]),_:1},8,[`code-html`,`code-js`])}var _e=y(he,[[`render`,ge]]);function ve(){return{codeHtml:`<a-textarea
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
<pre>{{ model }}</pre>`}}function ye(){return{codeJs:`import {
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
};`}}var be={name:`PageTextareaResize`,components:{AlohaExample:h,ATextarea:g},setup(){let e=c(`Aloha`),{codeHtml:t}=ve(),{codeJs:n}=ye();return{codeHtml:t,codeJs:n,model:e}}};function $(e,t,n,r,s,c){let l=f(`a-textarea`),m=f(`aloha-example`);return d(),o(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TEXTAREA_GROUP_RESIZE_HEADER_`,description:`_A_TEXTAREA_GROUP_RESIZE_DESCRIPTION_`,props:[`resize`]},{default:u(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`resize='v'`,resize:`v`},null,8,[`modelValue`]),a(l,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,label:`resize='h'`,resize:`h`},null,8,[`modelValue`]),a(l,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[2]||=t=>e.model=t,label:`resize='none'`,resize:`none`},null,8,[`modelValue`]),a(l,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[3]||=t=>e.model=t,label:`resize='auto'`,resize:`auto`},null,8,[`modelValue`]),t[4]||=i(`div`,null,`model:`,-1),i(`pre`,null,p(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var xe=y(be,[[`render`,$]]);function Se(){return{dataEvents:[{name:`update:model-value`,description:`_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_`,type:`Function`},{name:`focus`,description:`_A_UI_EVENTS_FOCUS_DESCRIPTION_`,type:`Function`},{name:`blur`,description:`_A_UI_EVENTS_BLUR_DESCRIPTION_`,type:`Function`}]}}function Ce(){let e=s(()=>_({placeholder:`_A_TEXTAREA_COMPONENT_NAME_`}));return{pageTitle:s(()=>`ATextarea${e.value?` (${e.value})`:``}`)}}function we(){return{dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`autocomplete`,description:`_A_UI_PROPS_AUTOCOMPLETE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`change`,description:`_A_UI_PROPS_CHANGE_DESCRIPTION_`,type:`Function`,default:`() => {}`,required:!1},{name:`clear-button-class`,description:`_A_UI_PROPS_CLEAR_BUTTON_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`dependencies`,description:`_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_`,type:`Array / Object`,default:void 0,required:!1},{name:`disabled`,description:`_A_UI_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`errors`,description:`_A_UI_PROPS_ERRORS_DESCRIPTION_`,type:`String / Array`,default:void 0,required:!1},{name:`error-icon`,description:`_A_UI_PROPS_ERROR_ICON_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`exclude-render-attributes`,description:`_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`extra`,description:`_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`help-text`,description:`_A_UI_PROPS_HELP_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`html-id`,description:`_A_UI_PROPS_HTML_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`id`,description:`_A_UI_PROPS_ID_DESCRIPTION_`,type:`String / Number`,default:`() => uniqueId("a_textarea_")`,required:!1},{name:`id-prefix`,description:`_A_UI_PROPS_ID_PREFIX_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`input-attributes`,description:`_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`input-class`,description:`_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`is-clear-button`,description:`_A_UI_PROPS_IS_CLEAR_BUTTON_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-hide`,description:`_A_UI_PROPS_IS_HIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-label-float`,description:`_A_UI_PROPS_IS_LABEL_FLOAT_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-render`,description:`_A_UI_PROPS_IS_RENDER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-scalable`,description:`_A_TEXTAREA_PROPS_IS_SCALABLE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`label`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`label-class`,description:`_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`label-description`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`label-position`,description:`_A_UI_PROPS_LABEL_POSITION_DESCRIPTION_`,type:`"float" / "inset" / "top"`,default:`"float"`,required:!1},{name:`label-screen-reader`,description:`_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`maxlength`,description:`_A_UI_PROPS_MAXLENGTH_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`model-dependencies`,description:`_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`model-undefined`,description:`_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_`,type:`String / Number / Object / Array / Boolean`,default:void 0,required:!1},{name:`model-value`,description:`_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`placeholder`,description:`_A_UI_PROPS_PLACEHOLDER_DESCRIPTION_`,type:`String / Number / Object`,default:void 0,required:!1},{name:`readonly`,description:`_A_UI_PROPS_READONLY_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`readonly-default`,description:`_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_`,type:`String`,default:``,required:!1},{name:`required`,description:`_A_UI_PROPS_REQUIRED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`resize`,description:`_A_TEXTAREA_PROPS_RESIZE_DESCRIPTION_`,type:`String`,default:`v`,required:!1},{name:`rows`,description:`_A_TEXTAREA_PROPS_ROWS_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1}]}}var Te={name:`PageTextarea`,components:{AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:v,PageTextareaBasic:w,PageTextareaLabelPosition:se,PageTextareaChange:O,PageTextareaErrors:R,PageTextareaErrorIcon:N,PageTextareaHelpText:U,PageTextareaIsScalable:J,PageTextareaLabelDescription:te,PageTextareaLabelScreenReader:fe,PageTextareaReadonly:_e,PageTextareaResize:xe},setup(){let{pageTitle:e}=Ce(),{dataProps:t}=we(),{dataEvents:n}=Se();return{dataEvents:n,dataProps:t,pageTitle:e}}};function Ee(e,t,n,r,i,s){let c=f(`a-translation`),l=f(`page-textarea-basic`),p=f(`page-textarea-label-position`),m=f(`page-textarea-change`),h=f(`page-textarea-help-text`),g=f(`page-textarea-errors`),_=f(`page-textarea-error-icon`),v=f(`page-textarea-label-description`),y=f(`page-textarea-label-screen-reader`),b=f(`page-textarea-is-scalable`),x=f(`page-textarea-resize`),S=f(`page-textarea-readonly`),C=f(`aloha-table-props`),w=f(`aloha-page`);return d(),o(w,{"page-title":e.pageTitle},{body:u(()=>[a(c,{tag:`p`,html:`_A_TEXTAREA_COMPONENT_DESCRIPTION_`}),a(l),a(p),a(m),a(h),a(g),a(_),a(v),a(y),a(b),a(x),a(S),a(C,{data:e.dataProps},null,8,[`data`]),a(C,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`])]),_:1},8,[`page-title`])}var De=y(Te,[[`render`,Ee]]);export{De as default};