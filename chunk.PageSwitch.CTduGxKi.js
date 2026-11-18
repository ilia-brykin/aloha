import{t as e}from"./chunk.AlohaPage.DqkPByuO.js";import{t}from"./chunk.AlohaTableProps.BCBHdgTD.js";import{t as n}from"./chunk.AlohaTableTranslate.BWxFIn1s.js";import{Bt as r,Ft as i,It as a,Pt as o,Zt as s,an as c,pn as l,sn as u,tn as d}from"./chunk.vendor.H0cZuFAV.js";import{t as f}from"./chunk.AlohaExample.CxBeInGL.js";import{L as p,Ut as m,rt as h}from"./bundle.index.DW19MCJk.js";import{t as g}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function _(){return{codeHtml:`<a-switch
  v-model="model"
></a-switch>
<div>model: {{ model }}</div>`}}function v(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASwitch,
} from "aloha-vue";
    
export default {
  name: "PageSwitchBasic",
  components: {
    ASwitch,
  },
  setup() {
    const model = ref(false);
    
    return {
      model,
    };
  },
};`}}var y={name:`PageSwitchBasic`,components:{AlohaExample:f,ASwitch:p},setup(){let e=u(!1),{codeHtml:t}=_(),{codeJs:n}=v();return{codeHtml:t,codeJs:n,model:e}}};function b(e,t,n,o,u,f){let p=d(`a-switch`),m=d(`aloha-example`);return s(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`]},{default:c(()=>[r(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t},null,8,[`modelValue`]),i(`div`,null,`model: `+l(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var x=g(y,[[`render`,b]]);function S(){return{codeHtml:`<a-switch
  :change="changeModel"
  :model-value="model"
></a-switch>
<div>model: {{ model }}</div>`}}function C(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASwitch,
} from "aloha-vue";
    
export default {
  name: "PageSwitchChange",
  components: {
    ASwitch,
  },
  setup() {
    const model = ref(false);
    
    const changeModel = ({ model: _model, id, props }) => {
      model.value = _model;
      console.log(id, props);
    };
    
    return {
      changeModel,
      model,
    };
  },
};`}}var w={name:`PageSwitchChange`,components:{AlohaExample:f,ASwitch:p},setup(){let e=u(!1),t=({model:t,id:n,props:r})=>{e.value=t,console.log(n,r)},{codeHtml:n}=S(),{codeJs:r}=C();return{changeModel:t,codeHtml:n,codeJs:r,model:e}}};function T(e,t,n,o,u,f){let p=d(`a-switch`),m=d(`aloha-example`);return s(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_CHANGE_HEADER_`,description:`_A_UI_GROUP_CHANGE_DESCRIPTION_`,props:[`change`,`model-value`]},{default:c(()=>[r(p,{change:e.changeModel,"model-value":e.model},null,8,[`change`,`model-value`]),i(`div`,null,`model: `+l(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var E=g(w,[[`render`,T]]);function D(){return{codeHtml:`<a-switch
  v-model="model"
  :change="changeModel"
  :default="true"
></a-switch>
<div>model: {{ model }}</div>`}}function O(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASwitch,
} from "aloha-vue";
    
export default {
  name: "PageSwitchChange",
  components: {
    ASwitch,
  },
  setup() {
    const model = ref(undefined);

    const changeModel = ({ init }) => {
      console.log("changeModel init", init);
    };
    
    return {
      changeModel,
      model,
    };
  },
};`}}var ee={name:`PageSwitchDefault`,components:{AlohaExample:f,ASwitch:p},setup(){let e=u(void 0),t=({init:e})=>{console.log(`changeModel init`,e)},{codeHtml:n}=D(),{codeJs:r}=O();return{changeModel:t,codeHtml:n,codeJs:r,model:e}}};function te(e,t,n,o,u,f){let p=d(`a-switch`),m=d(`aloha-example`);return s(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_DEFAULT_HEADER_`,description:`_A_UI_GROUP_DEFAULT_DESCRIPTION_`,props:[`default`]},{default:c(()=>[r(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,change:e.changeModel,default:!0},null,8,[`modelValue`,`change`]),i(`div`,null,`model: `+l(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var k=g(ee,[[`render`,te]]);function A(){return{codeHtml:`<a-switch
  v-model="model"
  :error-icon="errorIcon"
  errors="Aloha"
  label="ASwitch"
></a-switch>`}}function j(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ASwitch,
} from "aloha-vue";

export default {
  name: "PageSwitchErrorIcon",
  components: {
    ASwitch,
  },
  setup() {
    const model = ref(false);
    const errorIcon = "<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"16\\" height=\\"16\\" fill=\\"currentColor\\" viewBox=\\"0 0 16 16\\"><path d=\\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.93 6.588 8.758 10.042a.5.5 0 0 1-.998 0L7.588 6.588a.5.5 0 1 1 .998 0M8 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2\\"/></svg>";

    return {
      errorIcon,
      model,
    };
  },
};`}}var M={name:`PageSwitchErrorIcon`,components:{AlohaExample:f,ASwitch:p},setup(){let e=u(!1),{codeHtml:t}=A(),{codeJs:n}=j();return{codeHtml:t,codeJs:n,errorIcon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.93 6.588 8.758 10.042a.5.5 0 0 1-.998 0L7.588 6.588a.5.5 0 1 1 .998 0M8 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>`,model:e}}};function N(e,t,n,i,o,l){let u=d(`a-switch`),f=d(`aloha-example`);return s(),a(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_ERROR_ICON_HEADER_`,description:`_A_UI_GROUP_ERROR_ICON_DESCRIPTION_`,props:[`errors`,`error-icon`]},{default:c(()=>[r(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"error-icon":e.errorIcon,errors:`Aloha`,label:`ASwitch`},null,8,[`modelValue`,`error-icon`])]),_:1},8,[`code-html`,`code-js`])}var P=g(M,[[`render`,N]]);function F(){return{codeHtml:`<a-switch
  v-model="model"
  errors="Aloha"
  label="ASwitch"
></a-switch>`}}function I(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASwitch,
} from "aloha-vue";
    
export default {
  name: "PageSwitchErrors",
  components: {
    ASwitch,
  },
  setup() {
    const model = ref(false);
    
    return {
      model,
    };
  },
};`}}var L={name:`PageSwitchErrors`,components:{AlohaExample:f,ASwitch:p},setup(){let e=u(!1),{codeHtml:t}=F(),{codeJs:n}=I();return{codeHtml:t,codeJs:n,model:e}}};function R(e,t,n,i,o,l){let u=d(`a-switch`),f=d(`aloha-example`);return s(),a(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_ERRORS_HEADER_`,description:`_A_UI_GROUP_ERRORS_DESCRIPTION_`,props:[`errors`,`label`]},{default:c(()=>[r(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,errors:`Aloha`,label:`ASwitch`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var z=g(L,[[`render`,R]]);function B(){return{codeHtml:`<a-switch
  v-model="model"
  help-text="Aloha"
></a-switch>`}}function V(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASwitch,
} from "aloha-vue";
    
export default {
  name: "PageSwitchHelpText",
  components: {
    ASwitch,
  },
  setup() {
    const model = ref(false);
    
    return {
      model,
    };
  },
};`}}var H={name:`PageSwitchHelpText`,components:{AlohaExample:f,ASwitch:p},setup(){let e=u(!1),{codeHtml:t}=B(),{codeJs:n}=V();return{codeHtml:t,codeJs:n,model:e}}};function U(e,t,n,i,o,l){let u=d(`a-switch`),f=d(`aloha-example`);return s(),a(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_HELP_TEXT_HEADER_`,description:`_A_UI_GROUP_HELP_TEXT_DESCRIPTION_`,props:[`help-text`]},{default:c(()=>[r(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"help-text":`Aloha`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var W=g(H,[[`render`,U]]);function G(){return{codeHtml:`<a-switch
  v-model="model"
  label="Switch"
  label-description="Aloha"
></a-switch>`}}function K(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASwitch,
} from "aloha-vue";
    
export default {
  name: "PageSwitchLabelDescription",
  components: {
    ASwitch,
  },
  setup() {
    const model = ref(false);
    
    return {
      model,
    };
  },
};`}}var q={name:`PageSwitchLabelDescription`,components:{AlohaExample:f,ASwitch:p},setup(){let e=u(!1),{codeHtml:t}=G(),{codeJs:n}=K();return{codeHtml:t,codeJs:n,model:e}}};function J(e,t,n,i,o,l){let u=d(`a-switch`),f=d(`aloha-example`);return s(),a(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_`,description:`_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_`,props:[`label-description`]},{default:c(()=>[r(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`Switch`,"label-description":`Aloha`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var Y=g(q,[[`render`,J]]);function X(){return{codeHtml:`<a-switch
  v-model="model"
  label="ASwitch"
></a-switch>
<a-switch
  v-model="model"
  class="a_mt_3"
  label-screen-reader="ASwitch"
></a-switch>`}}function Z(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASwitch,
} from "aloha-vue";
    
export default {
  name: "PageSwitchLabelScreenReader",
  components: {
    ASwitch,
  },
  setup() {
    const model = ref(false);
    
    return {
      model,
    };
  },
};`}}var Q={name:`PageSwitchLabelScreenReader`,components:{AlohaExample:f,ASwitch:p},setup(){let e=u(!1),{codeHtml:t}=X(),{codeJs:n}=Z();return{codeHtml:t,codeJs:n,model:e}}};function ne(e,t,n,i,o,l){let u=d(`a-switch`),f=d(`aloha-example`);return s(),a(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_LABEL_SCREEN_READER_HEADER_`,description:`_A_UI_GROUP_LABEL_SCREEN_READER_DESCRIPTION_`,props:[`label-screen-reader`]},{default:c(()=>[r(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`ASwitch`},null,8,[`modelValue`]),r(u,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,"label-screen-reader":`ASwitch`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var re=g(Q,[[`render`,ne]]);function ie(){return{codeHtml:`<a-switch
  :model-value="model1"
  :readonly="true"
  label="Switch 1"
></a-switch>
<a-switch
  :model-value="model2"
  :readonly="true"
  class="a_mt_3"
  label="Switch 2"
></a-switch>
<a-switch
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  label="Switch 3"
></a-switch>
<a-switch
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  help-text="Aloha"
  label="Switch 4"
  readonly-default="-"
></a-switch>`}}function ae(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASwitch,
} from "aloha-vue";
    
export default {
  name: "PageSwitchReadonly",
  components: {
    ASwitch,
  },
  setup() {
    const model1 = ref(false);
    const model2 = ref(true);
    const model3 = ref(undefined);
    
    return {
      model1,
      model2,
      model3,
    };
  },
};`}}var oe={name:`PageSwitchReadonly`,components:{AlohaExample:f,ASwitch:p},setup(){let e=u(!1),t=u(!0),n=u(void 0),{codeHtml:r}=ie(),{codeJs:i}=ae();return{codeHtml:r,codeJs:i,model1:e,model2:t,model3:n}}};function se(e,t,n,i,o,l){let u=d(`a-switch`),f=d(`aloha-example`);return s(),a(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_READONLY_HEADER_`,description:`_A_UI_GROUP_READONLY_DESCRIPTION_`,props:[`readonly`,`readonly-default`]},{default:c(()=>[r(u,{"model-value":e.model1,readonly:!0,label:`Switch 1`},null,8,[`model-value`]),r(u,{class:`a_mt_3`,"model-value":e.model2,readonly:!0,label:`Switch 2`},null,8,[`model-value`]),r(u,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,label:`Switch 3`},null,8,[`model-value`]),r(u,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,"help-text":`Aloha`,label:`Switch 4`,"readonly-default":`-`},null,8,[`model-value`])]),_:1},8,[`code-html`,`code-js`])}var ce=g(oe,[[`render`,se]]);function le(){return{codeHtml:`<a-switch
  v-model="model"
  :default-value="null"
  :is-three-state="true"
  default-label="Default"
></a-switch>
<div>model: {{ model }}</div>`}}function ue(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASwitch,
} from "aloha-vue";
    
export default {
  name: "PageSwitchThreeState",
  components: {
    ASwitch,
  },
  setup() {
    const model = ref(null);
    
    return {
      model,
    };
  },
};`}}var de={name:`PageSwitchThreeState`,components:{AlohaExample:f,ASwitch:p},setup(){let e=u(null),{codeHtml:t}=le(),{codeJs:n}=ue();return{codeHtml:t,codeJs:n,model:e}}};function fe(e,t,n,o,u,f){let p=d(`a-switch`),m=d(`aloha-example`);return s(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_SWITCH_GROUP_THREE_STATE_HEADER_`,description:`_A_SWITCH_GROUP_THREE_STATE_DESCRIPTION_`,props:[`is-three-state`,`default-value`,`default-label`]},{default:c(()=>[r(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"default-value":null,"is-three-state":!0,"default-label":`Default`},null,8,[`modelValue`]),i(`div`,null,`model: `+l(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var pe=g(de,[[`render`,fe]]);function me(){return{codeHtml:`<a-switch
  v-model="model"
  :is-title-html="true"
  title="Aloha"
></a-switch>
<a-switch
  v-model="model"
  :is-title-html="false"
  class="a_mt_3"
  title="Aloha"
></a-switch>`}}function he(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASwitch,
} from "aloha-vue";
    
export default {
  name: "PageSwitchTitle",
  components: {
    ASwitch,
  },
  setup() {
    const model = ref(0);
    
    return {
      model,
    };
  },
};`}}var ge={name:`PageSwitchTitle`,components:{AlohaExample:f,ASwitch:p},setup(){let e=u(0),{codeHtml:t}=me(),{codeJs:n}=he();return{codeHtml:t,codeJs:n,model:e}}};function _e(e,t,n,i,o,l){let u=d(`a-switch`),f=d(`aloha-example`);return s(),a(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_SWITCH_GROUP_TITLE_HEADER_`,description:`_A_SWITCH_GROUP_TITLE_DESCRIPTION_`,props:[`title`,`is-title-html`]},{default:c(()=>[r(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"is-title-html":!0,title:`Aloha`},null,8,[`modelValue`]),r(u,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,"is-title-html":!1,title:`Aloha`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var ve=g(ge,[[`render`,_e]]);function ye(){return{codeHtml:`<a-switch
  v-model="model"
  false-label="0"
  true-label="1"
></a-switch>`}}function be(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASwitch,
} from "aloha-vue";
    
export default {
  name: "PageSwitchTrueFalseLabel",
  components: {
    ASwitch,
  },
  setup() {
    const model = ref(false);
    
    return {
      model,
    };
  },
};`}}var xe={name:`PageSwitchTrueFalseLabel`,components:{AlohaExample:f,ASwitch:p},setup(){let e=u(!1),{codeHtml:t}=ye(),{codeJs:n}=be();return{codeHtml:t,codeJs:n,model:e}}};function Se(e,t,n,i,o,l){let u=d(`a-switch`),f=d(`aloha-example`);return s(),a(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_SWITCH_GROUP_TRUE_FALSE_LABEL_HEADER_`,description:`_A_SWITCH_GROUP_TRUE_FALSE_LABEL_DESCRIPTION_`,props:[`false-label`,`true-label`]},{default:c(()=>[r(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"false-label":`0`,"true-label":`1`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var Ce=g(xe,[[`render`,Se]]);function we(){return{codeHtml:`<a-switch
  v-model="model"
  :false-value="0"
  :true-value="1"
></a-switch>
<div>model: {{ model }}</div>`}}function Te(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASwitch,
} from "aloha-vue";
    
export default {
  name: "PageSwitchTrueFalseValue",
  components: {
    ASwitch,
  },
  setup() {
    const model = ref(0);
    
    return {
      model,
    };
  },
};`}}var Ee={name:`PageSwitchTrueFalseValue`,components:{AlohaExample:f,ASwitch:p},setup(){let e=u(0),{codeHtml:t}=we(),{codeJs:n}=Te();return{codeHtml:t,codeJs:n,model:e}}};function De(e,t,n,o,u,f){let p=d(`a-switch`),m=d(`aloha-example`);return s(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_SWITCH_GROUP_TRUE_FALSE_VALUE_HEADER_`,description:`_A_SWITCH_GROUP_TRUE_FALSE_VALUE_DESCRIPTION_`,props:[`false-value`,`true-value`]},{default:c(()=>[r(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"false-value":0,"true-value":1},null,8,[`modelValue`]),i(`div`,null,`model: `+l(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var $=g(Ee,[[`render`,De]]);function Oe(){return{dataEvents:[{name:`update:model-value`,description:`_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_`,type:`Function`},{name:`focus`,description:`_A_UI_EVENTS_FOCUS_DESCRIPTION_`,type:`Function`},{name:`blur`,description:`_A_UI_EVENTS_BLUR_DESCRIPTION_`,type:`Function`}]}}function ke(){let e=o(()=>m({placeholder:`_A_SWITCH_COMPONENT_NAME_`}));return{pageTitle:o(()=>`ASwitch${e.value?` (${e.value})`:``}`)}}function Ae(){return{dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`change`,description:`_A_UI_PROPS_CHANGE_DESCRIPTION_`,type:`Function`,default:`() => {}`,required:!1},{name:`default`,description:`_A_UI_PROPS_DEFAULT_DESCRIPTION_`,type:`Boolean / String / Number`,default:void 0,required:!1},{name:`default-label`,description:`_A_SWITCH_PROPS_DEFAULT_LABEL_DESCRIPTION_`,type:`String`,default:`_A_SWITCH_DEFAULT_LABEL_`,required:!1},{name:`default-value`,description:`_A_SWITCH_PROPS_DEFAULT_VALUE_DESCRIPTION_`,type:`Boolean / String / Number`,default:void 0,required:!1},{name:`dependencies`,description:`_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_`,type:`Array / Object`,default:void 0,required:!1},{name:`disabled`,description:`_A_UI_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`errors`,description:`_A_UI_PROPS_ERRORS_DESCRIPTION_`,type:`String / Array`,default:void 0,required:!1},{name:`error-icon`,description:`_A_UI_PROPS_ERROR_ICON_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`exclude-render-attributes`,description:`_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`extra`,description:`_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`false-label`,description:`_A_SWITCH_PROPS_FALSE_LABEL_DESCRIPTION_`,type:`String`,default:`_A_SWITCH_FALSE_LABEL_`,required:!1},{name:`false-value`,description:`_A_SWITCH_PROPS_FALSE_VALUE_DESCRIPTION_`,type:`Boolean / String / Number`,default:!1,required:!1},{name:`full-width`,description:`_A_SWITCH_PROPS_FULL_WIDTH_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`help-text`,description:`_A_UI_PROPS_HELP_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`html-id`,description:`_A_UI_PROPS_HTML_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`id`,description:`_A_UI_PROPS_ID_DESCRIPTION_`,type:`String / Number`,default:`() => uniqueId("a_switch_")`,required:!1},{name:`id-prefix`,description:`_A_UI_PROPS_ID_PREFIX_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`input-attributes`,description:`_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`input-class`,description:`_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`is-hide`,description:`_A_UI_PROPS_IS_HIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-render`,description:`_A_UI_PROPS_IS_RENDER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-three-state`,description:`_A_SWITCH_PROPS_IS_THREE_STATE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-title-html`,description:`_A_GLOBAL_PROPS_IS_TITLE_HTML_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`label`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`label-class`,description:`_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`label-description`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`label-screen-reader`,description:`_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`model-dependencies`,description:`_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`model-undefined`,description:`_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_`,type:`String / Number / Object / Array / Boolean`,default:void 0,required:!1},{name:`model-value`,description:`_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_`,type:`Boolean / String / Number`,default:void 0,required:!1},{name:`readonly`,description:`_A_UI_PROPS_READONLY_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`readonly-default`,description:`_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_`,type:`String`,default:``,required:!1},{name:`required`,description:`_A_UI_PROPS_REQUIRED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`title`,description:`_A_GLOBAL_PROPS_TITLE_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`title-placement`,description:`_A_GLOBAL_PROPS_TITLE_PLACEMENT_DESCRIPTION_`,type:`String`,default:`top`,required:!1},{name:`true-label`,description:`_A_SWITCH_PROPS_TRUE_LABEL_DESCRIPTION_`,type:`String`,default:`_A_SWITCH_TRUE_LABEL_`,required:!1},{name:`true-value`,description:`_A_SWITCH_PROPS_TRUE_VALUE_DESCRIPTION_`,type:`Boolean / String / Number`,default:!0,required:!1}]}}function je(){return{dataTranslate:[`_A_SWITCH_DEFAULT_LABEL_`,`_A_SWITCH_FALSE_LABEL_`,`_A_SWITCH_TRUE_LABEL_`]}}var Me={name:`PageSwitch`,components:{AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:h,PageSwitchBasic:x,PageSwitchChange:E,PageSwitchDefault:k,PageSwitchErrorIcon:P,PageSwitchErrors:z,PageSwitchHelpText:W,PageSwitchLabelDescription:Y,PageSwitchLabelScreenReader:re,PageSwitchReadonly:ce,PageSwitchThreeState:pe,PageSwitchTitle:ve,PageSwitchTrueFalseLabel:Ce,PageSwitchTrueFalseValue:$},setup(){let{pageTitle:e}=ke(),{dataProps:t}=Ae(),{dataTranslate:n}=je(),{dataEvents:r}=Oe();return{dataEvents:r,dataProps:t,dataTranslate:n,pageTitle:e}}};function Ne(e,t,n,i,o,l){let u=d(`a-translation`),f=d(`page-switch-basic`),p=d(`page-switch-change`),m=d(`page-switch-help-text`),h=d(`page-switch-error-icon`),g=d(`page-switch-errors`),_=d(`page-switch-label-description`),v=d(`page-switch-default`),y=d(`page-switch-label-screen-reader`),b=d(`page-switch-true-false-label`),x=d(`page-switch-true-false-value`),S=d(`page-switch-three-state`),C=d(`page-switch-title`),w=d(`page-switch-readonly`),T=d(`aloha-table-props`),E=d(`aloha-table-translate`),D=d(`aloha-table-css-vars`),O=d(`aloha-page`);return s(),a(O,{"page-title":e.pageTitle},{body:c(()=>[r(u,{tag:`p`,html:`_A_SWITCH_COMPONENT_DESCRIPTION_`}),r(f),r(p),r(m),r(h),r(g),r(_),r(v),r(y),r(b),r(x),r(S),r(C),r(w),r(T,{data:e.dataProps},null,8,[`data`]),r(T,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`]),r(E,{data:e.dataTranslate},null,8,[`data`]),r(D,{files:`components/ui/ASwitch`})]),_:1},8,[`page-title`])}var Pe=g(Me,[[`render`,Ne]]);export{Pe as default};