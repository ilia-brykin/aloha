import{$t as e,Ct as t,Tt as n,Ut as r,Yt as i,kt as a,qt as o,wt as s,zt as c}from"./chunk.vendor.CZPox1kV.js";import{X as l,Z as ee,kt as u,t as d}from"./bundle.index.CLtYDDlb.js";import{n as f,t as p}from"./chunk.AlohaExample.BFgfeYtr.js";import{t as m}from"./chunk.AlohaTableProps.CiFmD1UR.js";import{t as h}from"./chunk.AlohaTableTranslate.SVFm06b7.js";function g(){return{codeHtml:`<a-input
  v-model="model"
  label="Input"
></a-input>
<div>model: {{ model }}</div>`}}function _(){return{codeJs:`import {
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
};`}}var v={name:`PageInputBasic`,components:{AInput:l,AlohaExample:p},setup(){let e=i(`Aloha`),{codeHtml:t}=g(),{codeJs:n}=_();return{codeHtml:t,codeJs:n,model:e}}};function y(t,i,l,ee,u,d){let f=r(`a-input`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`label`]},{default:o(()=>[a(f,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,label:`Input`},null,8,[`modelValue`]),s(`div`,null,`model: `+e(t.model),1)]),_:1},8,[`code-html`,`code-js`])}var b=d(v,[[`render`,y]]);function x(){return{codeHtml:`<a-input
  :change="changeModel"
  :model-value="model"
  label="Input"
></a-input>
<div>model: {{ model }}</div>`}}function S(){return{codeJs:`import {
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
};`}}var C={name:`PageInputChange`,components:{AInput:l,AlohaExample:p},setup(){let e=i(`Aloha`),t=({model:t,id:n,props:r})=>{e.value=t,console.log(n,r)},{codeHtml:n}=x(),{codeJs:r}=S();return{changeModel:t,codeHtml:n,codeJs:r,model:e}}};function w(t,i,l,ee,u,d){let f=r(`a-input`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_UI_GROUP_CHANGE_HEADER_`,description:`_A_UI_GROUP_CHANGE_DESCRIPTION_`,props:[`change`,`model-value`]},{default:o(()=>[a(f,{change:t.changeModel,"model-value":t.model,label:`Input`},null,8,[`change`,`model-value`]),s(`div`,null,`model: `+e(t.model),1)]),_:1},8,[`code-html`,`code-js`])}var T=d(C,[[`render`,w]]);function E(){return{codeHtml:`<a-input
  v-model="model"
  :error-icon="errorIcon"
  errors="Aloha"
  label="Input"
></a-input>`}}function D(){return{codeJs:`import {
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
};`}}var O={name:`PageInputErrorIcon`,components:{AInput:l,AlohaExample:p},setup(){let e=i(`Aloha`),{codeHtml:t}=E(),{codeJs:n}=D();return{codeHtml:t,codeJs:n,errorIcon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.93 6.588 8.758 10.042a.5.5 0 0 1-.998 0L7.588 6.588a.5.5 0 1 1 .998 0M8 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>`,model:e}}};function k(e,t,i,s,l,ee){let u=r(`a-input`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_ERROR_ICON_HEADER_`,description:`_A_UI_GROUP_ERROR_ICON_DESCRIPTION_`,props:[`errors`,`error-icon`]},{default:o(()=>[a(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"error-icon":e.errorIcon,errors:`Aloha`,label:`Input`},null,8,[`modelValue`,`error-icon`])]),_:1},8,[`code-html`,`code-js`])}var A=d(O,[[`render`,k]]);function j(){return{codeHtml:`<a-input
  v-model="model"
  errors="Aloha"
  label="Input"
></a-input>`}}function M(){return{codeJs:`import {
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
};`}}var N={name:`PageInputErrors`,components:{AInput:l,AlohaExample:p},setup(){let e=i(`Aloha`),{codeHtml:t}=j(),{codeJs:n}=M();return{codeHtml:t,codeJs:n,model:e}}};function P(e,t,i,s,l,ee){let u=r(`a-input`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_ERRORS_HEADER_`,description:`_A_UI_GROUP_ERRORS_DESCRIPTION_`,props:[`errors`]},{default:o(()=>[a(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,errors:`Aloha`,label:`Input`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var F=d(N,[[`render`,P]]);function I(){return{codeHtml:`<a-input
  v-model="model"
  help-text="Aloha"
  label="Input"
></a-input>`}}function L(){return{codeJs:`import {
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
};`}}var R={name:`PageInputHelpText`,components:{AInput:l,AlohaExample:p},setup(){let e=i(`Aloha`),{codeHtml:t}=I(),{codeJs:n}=L();return{codeHtml:t,codeJs:n,model:e}}};function z(e,t,i,s,l,ee){let u=r(`a-input`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_HELP_TEXT_HEADER_`,description:`_A_UI_GROUP_HELP_TEXT_DESCRIPTION_`,props:[`help-text`]},{default:o(()=>[a(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"help-text":`Aloha`,label:`Input`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var B=d(R,[[`render`,z]]);function V(){return{codeHtml:`<a-input
  v-model="model"
  :is-label-float="false"
  label="Input"
  label-description="Aloha"
></a-input>`}}function H(){return{codeJs:`import {
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
};`}}var U={name:`PageInputLabelDescription`,components:{AInput:l,AlohaExample:p},setup(){let e=i(`Aloha`),{codeHtml:t}=V(),{codeJs:n}=H();return{codeHtml:t,codeJs:n,model:e}}};function W(e,t,i,s,l,ee){let u=r(`a-input`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_`,description:`_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_`,props:[`label-description`]},{default:o(()=>[a(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"is-label-float":!1,label:`Input`,"label-description":`Aloha`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var G=d(U,[[`render`,W]]);function K(){return{codeHtml:`<a-input
  v-model="model"
  :is-label-float="false"
  label="Input"
></a-input>
<a-input
  v-model="model"
  :is-label-float="true"
  label="Input"
></a-input>`}}function q(){return{codeJs:`import {
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
};`}}var J={name:`PageInputLabelFloat`,components:{AInput:l,AlohaExample:p},setup(){let e=i(`Aloha`),{codeHtml:t}=K(),{codeJs:n}=q();return{codeHtml:t,codeJs:n,model:e}}};function te(e,t,i,s,l,ee){let u=r(`a-input`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_IS_LABEL_FLOAT_HEADER_`,description:`_A_UI_GROUP_IS_LABEL_FLOAT_DESCRIPTION_`,props:[`is-label-float`]},{default:o(()=>[a(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"is-label-float":!1,label:`Input`},null,8,[`modelValue`]),a(u,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,"is-label-float":!0,label:`Input`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var Y=d(J,[[`render`,te]]);function X(){return{codeHtml:`<a-input
  v-model="model"
  label="Input"
></a-input>
<a-input
  v-model="model"
  class="a_mt_3"
  label-screen-reader="Input"
></a-input>`}}function Z(){return{codeJs:`import {
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
};`}}var Q={name:`PageInputLabelScreenReader`,components:{AInput:l,AlohaExample:p},setup(){let e=i(`Aloha`),{codeHtml:t}=X(),{codeJs:n}=Z();return{codeHtml:t,codeJs:n,model:e}}};function ne(e,t,i,s,l,ee){let u=r(`a-input`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_LABEL_SCREEN_READER_HEADER_`,description:`_A_UI_GROUP_LABEL_SCREEN_READER_DESCRIPTION_`,props:[`label-screen-reader`]},{default:o(()=>[a(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`Input`},null,8,[`modelValue`]),a(u,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,"label-screen-reader":`Input`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var re=d(Q,[[`render`,ne]]);function ie(){return{codeHtml:`<a-input
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
></a-input>`}}function ae(){return{codeJs:`import {
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
};`}}var oe={name:`PageInputPassword`,components:{AInput:l,AlohaExample:p},setup(){let e=i(`Aloha`),{codeHtml:t}=ie(),{codeJs:n}=ae();return{codeHtml:t,codeJs:n,model:e}}};function se(e,t,i,s,l,ee){let u=r(`a-input`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_GROUP_PASSWORD_HEADER_`,description:`_A_INPUT_GROUP_PASSWORD_DESCRIPTION_`,props:[`type="password"`,`show-password`]},{default:o(()=>[a(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"show-password":!0,label:`Input`,type:`password`},null,8,[`modelValue`]),a(u,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,"show-password":!1,label:`Input`,type:`password`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var ce=d(oe,[[`render`,se]]);function le(){return{codeHtml:`<a-input
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
></a-input>`}}function ue(){return{codeJs:`import {
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
};`}}var de={name:`PageInputReadonly`,components:{AInput:l,AlohaExample:p},setup(){let e=i(`Aloha1`),t=i(`Aloha2`),n=i(void 0),{codeHtml:r}=le(),{codeJs:a}=ue();return{codeHtml:r,codeJs:a,model1:e,model2:t,model3:n}}};function fe(e,t,i,s,l,ee){let u=r(`a-input`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_READONLY_HEADER_`,description:`_A_UI_GROUP_READONLY_DESCRIPTION_`,props:[`readonly`,`readonly-default`]},{default:o(()=>[a(u,{"model-value":e.model1,readonly:!0,label:`Input1`,type:`text`},null,8,[`model-value`]),a(u,{class:`a_mt_3`,"model-value":e.model2,readonly:!0,label:`Input2`,type:`text`},null,8,[`model-value`]),a(u,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,"help-text":`Aloha`,label:`Input3`,"readonly-default":`-`,type:`text`},null,8,[`model-value`])]),_:1},8,[`code-html`,`code-js`])}var pe=d(de,[[`render`,fe]]);function $(){return{codeHtml:`<a-input
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
></a-input>`}}function me(){return{codeJs:`import {
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
};`}}var he={name:`PageInputReadonlyPassword`,components:{AInput:l,AlohaExample:p},setup(){let e=i(`Aloha`),{codeHtml:t}=$(),{codeJs:n}=me();return{codeHtml:t,codeJs:n,model:e}}};function ge(e,t,i,s,l,ee){let u=r(`a-input`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_GROUP_READONLY_PASSWORD_HEADER_`,description:`_A_INPUT_GROUP_READONLY_PASSWORD_DESCRIPTION_`,props:[`readonly`,`readonly-password-length`,`readonly-password-symbol`,`show-password`,`type="password"`]},{default:o(()=>[a(u,{"model-value":e.model,readonly:!0,"show-password":!1,label:`Input1`,type:`password`},null,8,[`model-value`]),a(u,{class:`a_mt_3`,"model-value":e.model,"readonly-password-length":3,readonly:!0,"show-password":!1,label:`Input2`,type:`password`},null,8,[`model-value`]),a(u,{class:`a_mt_3`,"model-value":e.model,"readonly-password-length":3,readonly:!0,"show-password":!1,label:`Input3`,"readonly-password-symbol":`x`,type:`password`},null,8,[`model-value`]),a(u,{"model-value":e.model,readonly:!0,"show-password":!0,label:`Input4`,type:`password`},null,8,[`model-value`])]),_:1},8,[`code-html`,`code-js`])}var _e=d(he,[[`render`,ge]]);function ve(){return{dataEvents:[{name:`update:model-value`,description:`_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_`,type:`Function`},{name:`focus`,description:`_A_UI_EVENTS_FOCUS_DESCRIPTION_`,type:`Function`},{name:`blur`,description:`_A_UI_EVENTS_BLUR_DESCRIPTION_`,type:`Function`}]}}function ye(){let e=t(()=>u({placeholder:`_A_INPUT_COMPONENT_NAME_`}));return{pageTitle:t(()=>`AInput${e.value?` (${e.value})`:``}`)}}function be(){return{dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`autocomplete`,description:`_A_UI_PROPS_AUTOCOMPLETE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`change`,description:`_A_UI_PROPS_CHANGE_DESCRIPTION_`,type:`Function`,default:`() => {}`,required:!1},{name:`clear-button-class`,description:`_A_UI_PROPS_CLEAR_BUTTON_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`dependencies`,description:`_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_`,type:`Array / Object`,default:void 0,required:!1},{name:`disabled`,description:`_A_UI_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`errors`,description:`_A_UI_PROPS_ERRORS_DESCRIPTION_`,type:`String / Array`,default:void 0,required:!1},{name:`error-icon`,description:`_A_UI_PROPS_ERROR_ICON_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`exclude-render-attributes`,description:`_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`extra`,description:`_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`help-text`,description:`_A_UI_PROPS_HELP_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`html-id`,description:`_A_UI_PROPS_HTML_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`icon-prepend`,description:`_A_INPUT_PROPS_ICON_PREPEND_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`id`,description:`_A_UI_PROPS_ID_DESCRIPTION_`,type:`String / Number`,default:`() => uniqueId("a_input_")`,required:!1},{name:`id-prefix`,description:`_A_UI_PROPS_ID_PREFIX_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`input-attributes`,description:`_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`input-class`,description:`_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`is-clear-button`,description:`_A_UI_PROPS_IS_CLEAR_BUTTON_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-hide`,description:`_A_UI_PROPS_IS_HIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-label-float`,description:`_A_UI_PROPS_IS_LABEL_FLOAT_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-render`,description:`_A_UI_PROPS_IS_RENDER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`label`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`label-class`,description:`_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`label-description`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`label-screen-reader`,description:`_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`maxlength`,description:`_A_UI_PROPS_MAXLENGTH_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`model-dependencies`,description:`_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`model-undefined`,description:`_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_`,type:`String / Number / Object / Array / Boolean`,default:void 0,required:!1},{name:`model-value`,description:`_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`placeholder`,description:`_A_UI_PROPS_PLACEHOLDER_DESCRIPTION_`,type:`String / Number / Object`,default:void 0,required:!1},{name:`readonly`,description:`_A_UI_PROPS_READONLY_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`readonly-default`,description:`_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_`,type:`String`,default:``,required:!1},{name:`readonly-password-length`,description:`_A_INPUT_PROPS_READONLY_PASSWORD_LENGTH_DESCRIPTION_`,type:`Number`,default:8,required:!1},{name:`readonly-password-symbol`,description:`_A_INPUT_PROPS_READONLY_PASSWORD_SYMBOL_DESCRIPTION_`,type:`String`,default:`*`,required:!1},{name:`required`,description:`_A_UI_PROPS_REQUIRED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`show-password`,description:`_A_INPUT_PROPS_SHOW_PASSWORD_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`step`,description:`_A_INPUT_PROPS_STEP_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`type`,description:`_A_INPUT_PROPS_TYPE_DESCRIPTION_`,type:`String`,default:`text`,required:!1}]}}function xe(){return{dataTranslate:[`_A_INPUT_SHOW_PASSWORD_`,`_A_INPUT_HIDE_PASSWORD_`]}}var Se={name:`PageInput`,components:{AlohaPage:f,AlohaTableProps:m,AlohaTableTranslate:h,ATranslation:ee,PageInputBasic:b,PageInputChange:T,PageInputErrorIcon:A,PageInputErrors:F,PageInputHelpText:B,PageInputLabelDescription:G,PageInputLabelFloat:Y,PageInputLabelScreenReader:re,PageInputPassword:ce,PageInputReadonly:pe,PageInputReadonlyPassword:_e},setup(){let{pageTitle:e}=ye(),{dataProps:t}=be(),{dataTranslate:n}=xe(),{dataEvents:r}=ve();return{dataEvents:r,dataProps:t,dataTranslate:n,pageTitle:e}}};function Ce(e,t,i,s,l,ee){let u=r(`a-translation`),d=r(`page-input-basic`),f=r(`page-input-change`),p=r(`page-input-help-text`),m=r(`page-input-errors`),h=r(`page-input-error-icon`),g=r(`page-input-label-description`),_=r(`page-input-label-screen-reader`),v=r(`page-input-label-float`),y=r(`page-input-password`),b=r(`page-input-readonly`),x=r(`page-input-readonly-password`),S=r(`aloha-table-props`),C=r(`aloha-table-translate`),w=r(`aloha-page`);return c(),n(w,{"page-title":e.pageTitle},{body:o(()=>[a(u,{tag:`p`,html:`_A_INPUT_COMPONENT_DESCRIPTION_`}),a(d),a(f),a(p),a(m),a(h),a(g),a(_),a(v),a(y),a(b),a(x),a(S,{data:e.dataProps},null,8,[`data`]),a(S,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`]),a(C,{data:e.dataTranslate},null,8,[`data`])]),_:1},8,[`page-title`])}var we=d(Se,[[`render`,Ce]]);export{we as default};