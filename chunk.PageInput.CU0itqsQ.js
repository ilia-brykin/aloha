import{t as e}from"./chunk.AlohaPage.CtPiWSGW.js";import{t}from"./chunk.AlohaTableProps.DfVbg0QG.js";import{t as n}from"./chunk.AlohaTableTranslate.DZzvjpZE.js";import{$t as r,At as i,Dt as a,Et as o,Gt as s,Mt as c,Ot as l,Ut as u,Zt as d,an as f,qt as p,wt as m}from"./chunk.vendor.BLRpG40B.js";import{t as h}from"./chunk.AlohaExample.Bs_TZ3nZ.js";import{$ as g,Z as _,jt as v}from"./bundle.index.Dik8P8_q.js";import{t as y}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function b(){return{codeHtml:`<a-input
  v-model="model"
  label="Input"
></a-input>
<div>model: {{ model }}</div>`}}function x(){return{codeJs:`import {
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
};`}}var S={name:`PageInputBasic`,components:{AInput:_,AlohaExample:h},setup(){let e=r(`Aloha`),{codeHtml:t}=b(),{codeJs:n}=x();return{codeHtml:t,codeJs:n,model:e}}};function C(e,t,n,r,i,o){let s=p(`a-input`),m=p(`aloha-example`);return u(),l(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`label`]},{default:d(()=>[c(s,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`Input`},null,8,[`modelValue`]),a(`div`,null,`model: `+f(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var w=y(S,[[`render`,C]]);function T(){return{codeHtml:`<a-input
  :change="changeModel"
  :model-value="model"
  label="Input"
></a-input>
<div>model: {{ model }}</div>`}}function E(){return{codeJs:`import {
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
};`}}var ee={name:`PageInputChange`,components:{AInput:_,AlohaExample:h},setup(){let e=r(`Aloha`),t=({model:t,id:n,props:r})=>{e.value=t,console.log(n,r)},{codeHtml:n}=T(),{codeJs:i}=E();return{changeModel:t,codeHtml:n,codeJs:i,model:e}}};function D(e,t,n,r,i,o){let s=p(`a-input`),m=p(`aloha-example`);return u(),l(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_CHANGE_HEADER_`,description:`_A_UI_GROUP_CHANGE_DESCRIPTION_`,props:[`change`,`model-value`]},{default:d(()=>[c(s,{change:e.changeModel,"model-value":e.model,label:`Input`},null,8,[`change`,`model-value`]),a(`div`,null,`model: `+f(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var O=y(ee,[[`render`,D]]);function k(){return{codeHtml:`<a-input
  v-model="model"
  :error-icon="errorIcon"
  errors="Aloha"
  label="Input"
></a-input>`}}function A(){return{codeJs:`import {
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
};`}}var j={name:`PageInputErrorIcon`,components:{AInput:_,AlohaExample:h},setup(){let e=r(`Aloha`),{codeHtml:t}=k(),{codeJs:n}=A();return{codeHtml:t,codeJs:n,errorIcon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.93 6.588 8.758 10.042a.5.5 0 0 1-.998 0L7.588 6.588a.5.5 0 1 1 .998 0M8 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>`,model:e}}};function M(e,t,n,r,i,a){let o=p(`a-input`),s=p(`aloha-example`);return u(),l(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_ERROR_ICON_HEADER_`,description:`_A_UI_GROUP_ERROR_ICON_DESCRIPTION_`,props:[`errors`,`error-icon`]},{default:d(()=>[c(o,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"error-icon":e.errorIcon,errors:`Aloha`,label:`Input`},null,8,[`modelValue`,`error-icon`])]),_:1},8,[`code-html`,`code-js`])}var N=y(j,[[`render`,M]]);function P(){return{codeHtml:`<a-input
  v-model="model"
  errors="Aloha"
  label="Input"
></a-input>`}}function F(){return{codeJs:`import {
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
};`}}var I={name:`PageInputErrors`,components:{AInput:_,AlohaExample:h},setup(){let e=r(`Aloha`),{codeHtml:t}=P(),{codeJs:n}=F();return{codeHtml:t,codeJs:n,model:e}}};function L(e,t,n,r,i,a){let o=p(`a-input`),s=p(`aloha-example`);return u(),l(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_ERRORS_HEADER_`,description:`_A_UI_GROUP_ERRORS_DESCRIPTION_`,props:[`errors`]},{default:d(()=>[c(o,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,errors:`Aloha`,label:`Input`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var R=y(I,[[`render`,L]]);function z(){return{codeHtml:`<a-input
  v-model="model"
  help-text="Aloha"
  label="Input"
></a-input>`}}function B(){return{codeJs:`import {
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
};`}}var V={name:`PageInputHelpText`,components:{AInput:_,AlohaExample:h},setup(){let e=r(`Aloha`),{codeHtml:t}=z(),{codeJs:n}=B();return{codeHtml:t,codeJs:n,model:e}}};function H(e,t,n,r,i,a){let o=p(`a-input`),s=p(`aloha-example`);return u(),l(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_HELP_TEXT_HEADER_`,description:`_A_UI_GROUP_HELP_TEXT_DESCRIPTION_`,props:[`help-text`]},{default:d(()=>[c(o,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"help-text":`Aloha`,label:`Input`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var U=y(V,[[`render`,H]]);function W(){return{codeHtml:`<a-input
  v-model="model"
  label-position="top"
  label="Input"
  label-description="Aloha"
></a-input>`}}function G(){return{codeJs:`import {
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
};`}}var K={name:`PageInputLabelDescription`,components:{AInput:_,AlohaExample:h},setup(){let e=r(`Aloha`),{codeHtml:t}=W(),{codeJs:n}=G();return{codeHtml:t,codeJs:n,model:e}}};function q(e,t,n,r,i,a){let o=p(`a-input`),s=p(`aloha-example`);return u(),l(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_`,description:`_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_`,props:[`label-description`]},{default:d(()=>[c(o,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"label-position":`top`,label:`Input`,"label-description":`Aloha`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var J=y(K,[[`render`,q]]);function Y(){return{codeHtml:`<a-input
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
<div>model: {{ model }}</div>`}}function X(){return{codeJs:`import {
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
};`}}var te={name:`PageInputLabelPosition`,components:{AlohaExample:h,AInput:_},setup(){let e=r(`Aloha`),t=[`float`,`inset`,`top`],{codeHtml:n}=Y(),{codeJs:i}=X();return{codeHtml:n,codeJs:i,labelPositions:t,model:e}}},Z={class:`a_columns a_columns_count_12`};function Q(e,t,n,r,o,h){let g=p(`a-input`),_=p(`aloha-example`);return u(),l(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_LABEL_POSITION_HEADER_`,description:`_A_UI_LABEL_POSITION_DESCRIPTION_`,props:[`label-position`]},{default:d(()=>[a(`div`,Z,[(u(!0),i(m,null,s(e.labelPositions,n=>(u(),i(`div`,{class:`a_column a_column_4 a_columns_count_12_touch`,key:n},[c(g,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`label-position: ${n}`,"label-position":n},null,8,[`modelValue`,`label`,`label-position`])]))),128))]),a(`div`,null,`model: `+f(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var ne=y(te,[[`render`,Q]]);function re(){return{codeHtml:`<a-input
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
};`}}var ae={name:`PageInputLabelScreenReader`,components:{AInput:_,AlohaExample:h},setup(){let e=r(`Aloha`),{codeHtml:t}=re(),{codeJs:n}=ie();return{codeHtml:t,codeJs:n,model:e}}};function oe(e,t,n,r,i,a){let o=p(`a-input`),s=p(`aloha-example`);return u(),l(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_LABEL_SCREEN_READER_HEADER_`,description:`_A_UI_GROUP_LABEL_SCREEN_READER_DESCRIPTION_`,props:[`label-screen-reader`]},{default:d(()=>[c(o,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`Input`},null,8,[`modelValue`]),c(o,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,"label-screen-reader":`Input`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var se=y(ae,[[`render`,oe]]);function ce(){return{codeHtml:`<a-input
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
};`}}var ue={name:`PageInputPassword`,components:{AInput:_,AlohaExample:h},setup(){let e=r(`Aloha`),{codeHtml:t}=ce(),{codeJs:n}=le();return{codeHtml:t,codeJs:n,model:e}}};function de(e,t,n,r,i,a){let o=p(`a-input`),s=p(`aloha-example`);return u(),l(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_GROUP_PASSWORD_HEADER_`,description:`_A_INPUT_GROUP_PASSWORD_DESCRIPTION_`,props:[`type="password"`,`show-password`]},{default:d(()=>[c(o,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"show-password":!0,label:`Input`,type:`password`},null,8,[`modelValue`]),c(o,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,"show-password":!1,label:`Input`,type:`password`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var fe=y(ue,[[`render`,de]]);function pe(){return{codeHtml:`<a-input
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
};`}}var he={name:`PageInputReadonly`,components:{AInput:_,AlohaExample:h},setup(){let e=r(`Aloha1`),t=r(`Aloha2`),n=r(void 0),{codeHtml:i}=pe(),{codeJs:a}=me();return{codeHtml:i,codeJs:a,model1:e,model2:t,model3:n}}};function ge(e,t,n,r,i,a){let o=p(`a-input`),s=p(`aloha-example`);return u(),l(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_READONLY_HEADER_`,description:`_A_UI_GROUP_READONLY_DESCRIPTION_`,props:[`readonly`,`readonly-default`]},{default:d(()=>[c(o,{"model-value":e.model1,readonly:!0,label:`Input1`,type:`text`},null,8,[`model-value`]),c(o,{class:`a_mt_3`,"model-value":e.model2,readonly:!0,label:`Input2`,type:`text`},null,8,[`model-value`]),c(o,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,"help-text":`Aloha`,label:`Input3`,"readonly-default":`-`,type:`text`},null,8,[`model-value`])]),_:1},8,[`code-html`,`code-js`])}var _e=y(he,[[`render`,ge]]);function ve(){return{codeHtml:`<a-input
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
};`}}var be={name:`PageInputReadonlyPassword`,components:{AInput:_,AlohaExample:h},setup(){let e=r(`Aloha`),{codeHtml:t}=ve(),{codeJs:n}=ye();return{codeHtml:t,codeJs:n,model:e}}};function $(e,t,n,r,i,a){let o=p(`a-input`),s=p(`aloha-example`);return u(),l(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_GROUP_READONLY_PASSWORD_HEADER_`,description:`_A_INPUT_GROUP_READONLY_PASSWORD_DESCRIPTION_`,props:[`readonly`,`readonly-password-length`,`readonly-password-symbol`,`show-password`,`type="password"`]},{default:d(()=>[c(o,{"model-value":e.model,readonly:!0,"show-password":!1,label:`Input1`,type:`password`},null,8,[`model-value`]),c(o,{class:`a_mt_3`,"model-value":e.model,"readonly-password-length":3,readonly:!0,"show-password":!1,label:`Input2`,type:`password`},null,8,[`model-value`]),c(o,{class:`a_mt_3`,"model-value":e.model,"readonly-password-length":3,readonly:!0,"show-password":!1,label:`Input3`,"readonly-password-symbol":`x`,type:`password`},null,8,[`model-value`]),c(o,{"model-value":e.model,readonly:!0,"show-password":!0,label:`Input4`,type:`password`},null,8,[`model-value`])]),_:1},8,[`code-html`,`code-js`])}var xe=y(be,[[`render`,$]]);function Se(){return{dataEvents:[{name:`update:model-value`,description:`_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_`,type:`Function`},{name:`focus`,description:`_A_UI_EVENTS_FOCUS_DESCRIPTION_`,type:`Function`},{name:`blur`,description:`_A_UI_EVENTS_BLUR_DESCRIPTION_`,type:`Function`}]}}function Ce(){let e=o(()=>v({placeholder:`_A_INPUT_COMPONENT_NAME_`}));return{pageTitle:o(()=>`AInput${e.value?` (${e.value})`:``}`)}}function we(){return{dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`autocomplete`,description:`_A_UI_PROPS_AUTOCOMPLETE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`change`,description:`_A_UI_PROPS_CHANGE_DESCRIPTION_`,type:`Function`,default:`() => {}`,required:!1},{name:`clear-button-class`,description:`_A_UI_PROPS_CLEAR_BUTTON_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`dependencies`,description:`_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_`,type:`Array / Object`,default:void 0,required:!1},{name:`disabled`,description:`_A_UI_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`errors`,description:`_A_UI_PROPS_ERRORS_DESCRIPTION_`,type:`String / Array`,default:void 0,required:!1},{name:`error-icon`,description:`_A_UI_PROPS_ERROR_ICON_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`exclude-render-attributes`,description:`_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`extra`,description:`_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`help-text`,description:`_A_UI_PROPS_HELP_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`html-id`,description:`_A_UI_PROPS_HTML_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`icon-prepend`,description:`_A_INPUT_PROPS_ICON_PREPEND_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`id`,description:`_A_UI_PROPS_ID_DESCRIPTION_`,type:`String / Number`,default:`() => uniqueId("a_input_")`,required:!1},{name:`id-prefix`,description:`_A_UI_PROPS_ID_PREFIX_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`input-attributes`,description:`_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`input-class`,description:`_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`is-clear-button`,description:`_A_UI_PROPS_IS_CLEAR_BUTTON_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-hide`,description:`_A_UI_PROPS_IS_HIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-label-float`,description:`_A_UI_PROPS_IS_LABEL_FLOAT_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-render`,description:`_A_UI_PROPS_IS_RENDER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`label`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`label-class`,description:`_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`label-description`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`label-position`,description:`_A_UI_PROPS_LABEL_POSITION_DESCRIPTION_`,type:`"float" / "inset" / "top"`,default:`"float"`,required:!1},{name:`label-screen-reader`,description:`_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`maxlength`,description:`_A_UI_PROPS_MAXLENGTH_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`model-dependencies`,description:`_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`model-undefined`,description:`_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_`,type:`String / Number / Object / Array / Boolean`,default:void 0,required:!1},{name:`model-value`,description:`_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`placeholder`,description:`_A_UI_PROPS_PLACEHOLDER_DESCRIPTION_`,type:`String / Number / Object`,default:void 0,required:!1},{name:`readonly`,description:`_A_UI_PROPS_READONLY_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`readonly-default`,description:`_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_`,type:`String`,default:``,required:!1},{name:`readonly-password-length`,description:`_A_INPUT_PROPS_READONLY_PASSWORD_LENGTH_DESCRIPTION_`,type:`Number`,default:8,required:!1},{name:`readonly-password-symbol`,description:`_A_INPUT_PROPS_READONLY_PASSWORD_SYMBOL_DESCRIPTION_`,type:`String`,default:`*`,required:!1},{name:`required`,description:`_A_UI_PROPS_REQUIRED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`show-password`,description:`_A_INPUT_PROPS_SHOW_PASSWORD_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`step`,description:`_A_INPUT_PROPS_STEP_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`type`,description:`_A_INPUT_PROPS_TYPE_DESCRIPTION_`,type:`String`,default:`text`,required:!1}]}}function Te(){return{dataTranslate:[`_A_INPUT_SHOW_PASSWORD_`,`_A_INPUT_HIDE_PASSWORD_`]}}var Ee={name:`PageInput`,components:{AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:g,PageInputBasic:w,PageInputLabelPosition:ne,PageInputChange:O,PageInputErrorIcon:N,PageInputErrors:R,PageInputHelpText:U,PageInputLabelDescription:J,PageInputLabelScreenReader:se,PageInputPassword:fe,PageInputReadonly:_e,PageInputReadonlyPassword:xe},setup(){let{pageTitle:e}=Ce(),{dataProps:t}=we(),{dataTranslate:n}=Te(),{dataEvents:r}=Se();return{dataEvents:r,dataProps:t,dataTranslate:n,pageTitle:e}}};function De(e,t,n,r,i,a){let o=p(`a-translation`),s=p(`page-input-basic`),f=p(`page-input-label-position`),m=p(`page-input-change`),h=p(`page-input-help-text`),g=p(`page-input-errors`),_=p(`page-input-error-icon`),v=p(`page-input-label-description`),y=p(`page-input-label-screen-reader`),b=p(`page-input-password`),x=p(`page-input-readonly`),S=p(`page-input-readonly-password`),C=p(`aloha-table-props`),w=p(`aloha-table-translate`),T=p(`aloha-table-css-vars`),E=p(`aloha-page`);return u(),l(E,{"page-title":e.pageTitle},{body:d(()=>[c(o,{tag:`p`,html:`_A_INPUT_COMPONENT_DESCRIPTION_`}),c(s),c(f),c(m),c(h),c(g),c(_),c(v),c(y),c(b),c(x),c(S),c(C,{data:e.dataProps},null,8,[`data`]),c(C,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`]),c(w,{data:e.dataTranslate},null,8,[`data`]),c(T,{files:`components/ui/ui`})]),_:1},8,[`page-title`])}var Oe=y(Ee,[[`render`,De]]);export{Oe as default};