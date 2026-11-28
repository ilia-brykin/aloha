import{t as e}from"./chunk.AlohaPage.IS3NRfGI.js";import{t}from"./chunk.AlohaTableProps.-68XY4u1.js";import{t as n}from"./chunk.AlohaTableTranslate.Bs0gql66.js";import{Bt as r,Cn as i,Ht as a,Rt as ee,Vt as o,Wt as s,an as c,gn as l,ln as u,pn as d,qt as f,sn as p}from"./chunk.vendor.SEynj6EJ.js";import{t as m}from"./chunk.AlohaExample.CDuUdjpI.js";import{at as h,hn as g,mn as _,t as v}from"./bundle.index.DikcaTJ9.js";function y(){return{codeHtml:`<a-input
  v-model="model"
  label="Input"
></a-input>
<div>model: {{ model }}</div>`}}function b(){return{codeJs:`import {
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
};`}}var x={name:`PageInputBasic`,components:{AInput:h,AlohaExample:m},setup(){let e=l(`Aloha`),{codeHtml:t}=y(),{codeJs:n}=b();return{codeHtml:t,codeJs:n,model:e}}};function S(e,t,n,r,ee,s){let l=u(`a-input`),p=u(`aloha-example`);return c(),a(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`label`]},{default:d(()=>[f(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`Input`},null,8,[`modelValue`]),o(`div`,null,`model: `+i(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var C=v(x,[[`render`,S]]);function w(){return{codeHtml:`<a-input
  :change="changeModel"
  :model-value="model"
  label="Input"
></a-input>
<div>model: {{ model }}</div>`}}function T(){return{codeJs:`import {
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
};`}}var te={name:`PageInputChange`,components:{AInput:h,AlohaExample:m},setup(){let e=l(`Aloha`),t=({model:t,id:n,props:r})=>{e.value=t,console.log(n,r)},{codeHtml:n}=w(),{codeJs:r}=T();return{changeModel:t,codeHtml:n,codeJs:r,model:e}}};function E(e,t,n,r,ee,s){let l=u(`a-input`),p=u(`aloha-example`);return c(),a(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_CHANGE_HEADER_`,description:`_A_UI_GROUP_CHANGE_DESCRIPTION_`,props:[`change`,`model-value`]},{default:d(()=>[f(l,{change:e.changeModel,"model-value":e.model,label:`Input`},null,8,[`change`,`model-value`]),o(`div`,null,`model: `+i(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var D=v(te,[[`render`,E]]);function O(){return{codeHtml:`<a-input
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
};`}}var A={name:`PageInputErrorIcon`,components:{AInput:h,AlohaExample:m},setup(){let e=l(`Aloha`),{codeHtml:t}=O(),{codeJs:n}=k();return{codeHtml:t,codeJs:n,errorIcon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.93 6.588 8.758 10.042a.5.5 0 0 1-.998 0L7.588 6.588a.5.5 0 1 1 .998 0M8 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>`,model:e}}};function j(e,t,n,r,i,ee){let o=u(`a-input`),s=u(`aloha-example`);return c(),a(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_ERROR_ICON_HEADER_`,description:`_A_UI_GROUP_ERROR_ICON_DESCRIPTION_`,props:[`errors`,`error-icon`]},{default:d(()=>[f(o,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"error-icon":e.errorIcon,errors:`Aloha`,label:`Input`},null,8,[`modelValue`,`error-icon`])]),_:1},8,[`code-html`,`code-js`])}var M=v(A,[[`render`,j]]);function N(){return{codeHtml:`<a-input
  v-model="model"
  errors="Aloha"
  label="Input"
></a-input>`}}function P(){return{codeJs:`import {
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
};`}}var F={name:`PageInputErrors`,components:{AInput:h,AlohaExample:m},setup(){let e=l(`Aloha`),{codeHtml:t}=N(),{codeJs:n}=P();return{codeHtml:t,codeJs:n,model:e}}};function I(e,t,n,r,i,ee){let o=u(`a-input`),s=u(`aloha-example`);return c(),a(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_ERRORS_HEADER_`,description:`_A_UI_GROUP_ERRORS_DESCRIPTION_`,props:[`errors`]},{default:d(()=>[f(o,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,errors:`Aloha`,label:`Input`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var L=v(F,[[`render`,I]]);function R(){return{codeHtml:`<a-input
  v-model="model"
  help-text="Aloha"
  label="Input"
></a-input>`}}function z(){return{codeJs:`import {
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
};`}}var B={name:`PageInputHelpText`,components:{AInput:h,AlohaExample:m},setup(){let e=l(`Aloha`),{codeHtml:t}=R(),{codeJs:n}=z();return{codeHtml:t,codeJs:n,model:e}}};function V(e,t,n,r,i,ee){let o=u(`a-input`),s=u(`aloha-example`);return c(),a(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_HELP_TEXT_HEADER_`,description:`_A_UI_GROUP_HELP_TEXT_DESCRIPTION_`,props:[`help-text`]},{default:d(()=>[f(o,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"help-text":`Aloha`,label:`Input`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var H=v(B,[[`render`,V]]);function U(){return{codeHtml:`<a-input
  v-model="model"
  label-position="top"
  label="Input"
  label-description="Aloha"
></a-input>`}}function W(){return{codeJs:`import {
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
};`}}var G={name:`PageInputLabelDescription`,components:{AInput:h,AlohaExample:m},setup(){let e=l(`Aloha`),{codeHtml:t}=U(),{codeJs:n}=W();return{codeHtml:t,codeJs:n,model:e}}};function K(e,t,n,r,i,ee){let o=u(`a-input`),s=u(`aloha-example`);return c(),a(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_`,description:`_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_`,props:[`label-description`]},{default:d(()=>[f(o,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"label-position":`top`,label:`Input`,"label-description":`Aloha`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var q=v(G,[[`render`,K]]);function J(){return{codeHtml:`<a-input
  v-model="model"
  label="label-position: float"
  label-position="float"
></a-input>
<a-input
  v-model="model"
  label="label-position: inset"
  label-position="inset"
></a-input>
<a-input
  v-model="model"
  label="label-position: top"
  label-position="top"
></a-input>
<div>model: {{ model }}</div>`}}function Y(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AInput,
} from "aloha-vue";

export default {
  name: "PageInputLabelPosition",
  components: {
    AInput,
  },
  setup() {
    const model = ref("Aloha");

    return {
      model,
    };
  },
};`}}var X={name:`PageInputLabelPosition`,components:{AlohaExample:m,AInput:h},setup(){let e=l(`Aloha`),t=[`float`,`inset`,`top`],{codeHtml:n}=J(),{codeJs:r}=Y();return{codeHtml:n,codeJs:r,labelPositions:t,model:e}}},Z={class:`a_columns a_columns_count_12`};function Q(e,t,n,r,l,m){let h=u(`a-input`),g=u(`aloha-example`);return c(),a(g,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_LABEL_POSITION_HEADER_`,description:`_A_UI_LABEL_POSITION_DESCRIPTION_`,props:[`label-position`]},{default:d(()=>[o(`div`,Z,[(c(!0),s(ee,null,p(e.labelPositions,n=>(c(),s(`div`,{class:`a_column a_column_4 a_columns_count_12_touch`,key:n},[f(h,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`label-position: ${n}`,"label-position":n},null,8,[`modelValue`,`label`,`label-position`])]))),128))]),o(`div`,null,`model: `+i(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var ne=v(X,[[`render`,Q]]);function re(){return{codeHtml:`<a-input
  v-model="model"
  label="Input"
></a-input>
<a-input
  v-model="model"
  class="a_mt_3"
  label-screen-reader="Input"
></a-input>`}}function ie(){return{codeJs:`import {
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
};`}}var ae={name:`PageInputLabelScreenReader`,components:{AInput:h,AlohaExample:m},setup(){let e=l(`Aloha`),{codeHtml:t}=re(),{codeJs:n}=ie();return{codeHtml:t,codeJs:n,model:e}}};function oe(e,t,n,r,i,ee){let o=u(`a-input`),s=u(`aloha-example`);return c(),a(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_LABEL_SCREEN_READER_HEADER_`,description:`_A_UI_GROUP_LABEL_SCREEN_READER_DESCRIPTION_`,props:[`label-screen-reader`]},{default:d(()=>[f(o,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`Input`},null,8,[`modelValue`]),f(o,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,"label-screen-reader":`Input`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var se=v(ae,[[`render`,oe]]);function ce(){return{codeHtml:`<a-input
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
></a-input>`}}function le(){return{codeJs:`import {
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
};`}}var ue={name:`PageInputPassword`,components:{AInput:h,AlohaExample:m},setup(){let e=l(`Aloha`),{codeHtml:t}=ce(),{codeJs:n}=le();return{codeHtml:t,codeJs:n,model:e}}};function de(e,t,n,r,i,ee){let o=u(`a-input`),s=u(`aloha-example`);return c(),a(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_GROUP_PASSWORD_HEADER_`,description:`_A_INPUT_GROUP_PASSWORD_DESCRIPTION_`,props:[`type="password"`,`show-password`]},{default:d(()=>[f(o,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"show-password":!0,label:`Input`,type:`password`},null,8,[`modelValue`]),f(o,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,"show-password":!1,label:`Input`,type:`password`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var fe=v(ue,[[`render`,de]]);function pe(){return{codeHtml:`<a-input
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
></a-input>`}}function me(){return{codeJs:`import {
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
};`}}var he={name:`PageInputReadonly`,components:{AInput:h,AlohaExample:m},setup(){let e=l(`Aloha1`),t=l(`Aloha2`),n=l(void 0),{codeHtml:r}=pe(),{codeJs:i}=me();return{codeHtml:r,codeJs:i,model1:e,model2:t,model3:n}}};function ge(e,t,n,r,i,ee){let o=u(`a-input`),s=u(`aloha-example`);return c(),a(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_READONLY_HEADER_`,description:`_A_UI_GROUP_READONLY_DESCRIPTION_`,props:[`readonly`,`readonly-default`]},{default:d(()=>[f(o,{"model-value":e.model1,readonly:!0,label:`Input1`,type:`text`},null,8,[`model-value`]),f(o,{class:`a_mt_3`,"model-value":e.model2,readonly:!0,label:`Input2`,type:`text`},null,8,[`model-value`]),f(o,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,"help-text":`Aloha`,label:`Input3`,"readonly-default":`-`,type:`text`},null,8,[`model-value`])]),_:1},8,[`code-html`,`code-js`])}var _e=v(he,[[`render`,ge]]);function ve(){return{codeHtml:`<a-input
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
></a-input>`}}function ye(){return{codeJs:`import {
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
};`}}var be={name:`PageInputReadonlyPassword`,components:{AInput:h,AlohaExample:m},setup(){let e=l(`Aloha`),{codeHtml:t}=ve(),{codeJs:n}=ye();return{codeHtml:t,codeJs:n,model:e}}};function $(e,t,n,r,i,ee){let o=u(`a-input`),s=u(`aloha-example`);return c(),a(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_GROUP_READONLY_PASSWORD_HEADER_`,description:`_A_INPUT_GROUP_READONLY_PASSWORD_DESCRIPTION_`,props:[`readonly`,`readonly-password-length`,`readonly-password-symbol`,`show-password`,`type="password"`]},{default:d(()=>[f(o,{"model-value":e.model,readonly:!0,"show-password":!1,label:`Input1`,type:`password`},null,8,[`model-value`]),f(o,{class:`a_mt_3`,"model-value":e.model,"readonly-password-length":3,readonly:!0,"show-password":!1,label:`Input2`,type:`password`},null,8,[`model-value`]),f(o,{class:`a_mt_3`,"model-value":e.model,"readonly-password-length":3,readonly:!0,"show-password":!1,label:`Input3`,"readonly-password-symbol":`x`,type:`password`},null,8,[`model-value`]),f(o,{"model-value":e.model,readonly:!0,"show-password":!0,label:`Input4`,type:`password`},null,8,[`model-value`])]),_:1},8,[`code-html`,`code-js`])}var xe=v(be,[[`render`,$]]);function Se(){return{dataEvents:[{name:`update:model-value`,description:`_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_`,type:`Function`},{name:`focus`,description:`_A_UI_EVENTS_FOCUS_DESCRIPTION_`,type:`Function`},{name:`blur`,description:`_A_UI_EVENTS_BLUR_DESCRIPTION_`,type:`Function`}]}}function Ce(){let e=r(()=>g({placeholder:`_A_INPUT_COMPONENT_NAME_`}));return{pageTitle:r(()=>`AInput${e.value?` (${e.value})`:``}`)}}function we(){return{dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`autocomplete`,description:`_A_UI_PROPS_AUTOCOMPLETE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`change`,description:`_A_UI_PROPS_CHANGE_DESCRIPTION_`,type:`Function`,default:`() => {}`,required:!1},{name:`clear-button-class`,description:`_A_UI_PROPS_CLEAR_BUTTON_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`dependencies`,description:`_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_`,type:`Array / Object`,default:void 0,required:!1},{name:`disabled`,description:`_A_UI_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`errors`,description:`_A_UI_PROPS_ERRORS_DESCRIPTION_`,type:`String / Array`,default:void 0,required:!1},{name:`error-icon`,description:`_A_UI_PROPS_ERROR_ICON_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`exclude-render-attributes`,description:`_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`extra`,description:`_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`help-text`,description:`_A_UI_PROPS_HELP_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`html-id`,description:`_A_UI_PROPS_HTML_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`icon-prepend`,description:`_A_INPUT_PROPS_ICON_PREPEND_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`id`,description:`_A_UI_PROPS_ID_DESCRIPTION_`,type:`String / Number`,default:`() => uniqueId("a_input_")`,required:!1},{name:`id-prefix`,description:`_A_UI_PROPS_ID_PREFIX_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`input-attributes`,description:`_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`input-class`,description:`_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`is-clear-button`,description:`_A_UI_PROPS_IS_CLEAR_BUTTON_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-hide`,description:`_A_UI_PROPS_IS_HIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-label-float`,description:`_A_UI_PROPS_IS_LABEL_FLOAT_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-render`,description:`_A_UI_PROPS_IS_RENDER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`label`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`label-class`,description:`_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`label-description`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`label-position`,description:`_A_UI_PROPS_LABEL_POSITION_DESCRIPTION_`,type:`"float" / "inset" / "top"`,default:`"float"`,required:!1},{name:`label-screen-reader`,description:`_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`maxlength`,description:`_A_UI_PROPS_MAXLENGTH_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`model-dependencies`,description:`_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`model-undefined`,description:`_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_`,type:`String / Number / Object / Array / Boolean`,default:void 0,required:!1},{name:`model-value`,description:`_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`placeholder`,description:`_A_UI_PROPS_PLACEHOLDER_DESCRIPTION_`,type:`String / Number / Object`,default:void 0,required:!1},{name:`readonly`,description:`_A_UI_PROPS_READONLY_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`readonly-default`,description:`_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_`,type:`String`,default:``,required:!1},{name:`readonly-password-length`,description:`_A_INPUT_PROPS_READONLY_PASSWORD_LENGTH_DESCRIPTION_`,type:`Number`,default:8,required:!1},{name:`readonly-password-symbol`,description:`_A_INPUT_PROPS_READONLY_PASSWORD_SYMBOL_DESCRIPTION_`,type:`String`,default:`*`,required:!1},{name:`required`,description:`_A_UI_PROPS_REQUIRED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`show-password`,description:`_A_INPUT_PROPS_SHOW_PASSWORD_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`step`,description:`_A_INPUT_PROPS_STEP_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`type`,description:`_A_INPUT_PROPS_TYPE_DESCRIPTION_`,type:`String`,default:`text`,required:!1}]}}function Te(){return{dataTranslate:[`_A_INPUT_SHOW_PASSWORD_`,`_A_INPUT_HIDE_PASSWORD_`]}}var Ee={name:`PageInput`,components:{AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:_,PageInputBasic:C,PageInputLabelPosition:ne,PageInputChange:D,PageInputErrorIcon:M,PageInputErrors:L,PageInputHelpText:H,PageInputLabelDescription:q,PageInputLabelScreenReader:se,PageInputPassword:fe,PageInputReadonly:_e,PageInputReadonlyPassword:xe},setup(){let{pageTitle:e}=Ce(),{dataProps:t}=we(),{dataTranslate:n}=Te(),{dataEvents:r}=Se();return{dataEvents:r,dataProps:t,dataTranslate:n,pageTitle:e}}};function De(e,t,n,r,i,ee){let o=u(`a-translation`),s=u(`page-input-basic`),l=u(`page-input-label-position`),p=u(`page-input-change`),m=u(`page-input-help-text`),h=u(`page-input-errors`),g=u(`page-input-error-icon`),_=u(`page-input-label-description`),v=u(`page-input-label-screen-reader`),y=u(`page-input-password`),b=u(`page-input-readonly`),x=u(`page-input-readonly-password`),S=u(`aloha-table-props`),C=u(`aloha-table-translate`),w=u(`aloha-table-css-vars`),T=u(`aloha-page`);return c(),a(T,{"page-title":e.pageTitle},{body:d(()=>[f(o,{tag:`p`,html:`_A_INPUT_COMPONENT_DESCRIPTION_`}),f(s),f(l),f(p),f(m),f(h),f(g),f(_),f(v),f(y),f(b),f(x),f(S,{data:e.dataProps},null,8,[`data`]),f(S,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`]),f(C,{data:e.dataTranslate},null,8,[`data`]),f(w,{files:`components/ui/_form_control`})]),_:1},8,[`page-title`])}var Oe=v(Ee,[[`render`,De]]);export{Oe as default};