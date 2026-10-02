import{$t as e,Ct as t,Tt as n,Ut as r,Yt as i,kt as a,qt as o,wt as s,zt as c}from"./chunk.vendor.CZPox1kV.js";import{I as l,Z as ee,kt as u,t as d}from"./bundle.index.CLtYDDlb.js";import{n as f,t as p}from"./chunk.AlohaExample.BFgfeYtr.js";import{t as m}from"./chunk.AlohaTableProps.CiFmD1UR.js";import{t as h}from"./chunk.AlohaTableTranslate.SVFm06b7.js";function g(){return{codeHtml:`<a-switch
  v-model="model"
></a-switch>
<div>model: {{ model }}</div>`}}function _(){return{codeJs:`import {
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
};`}}var v={name:`PageSwitchBasic`,components:{AlohaExample:p,ASwitch:l},setup(){let e=i(!1),{codeHtml:t}=g(),{codeJs:n}=_();return{codeHtml:t,codeJs:n,model:e}}};function y(t,i,l,ee,u,d){let f=r(`a-switch`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`]},{default:o(()=>[a(f,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e},null,8,[`modelValue`]),s(`div`,null,`model: `+e(t.model),1)]),_:1},8,[`code-html`,`code-js`])}var b=d(v,[[`render`,y]]);function x(){return{codeHtml:`<a-switch
  :change="changeModel"
  :model-value="model"
></a-switch>
<div>model: {{ model }}</div>`}}function S(){return{codeJs:`import {
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
};`}}var C={name:`PageSwitchChange`,components:{AlohaExample:p,ASwitch:l},setup(){let e=i(!1),t=({model:t,id:n,props:r})=>{e.value=t,console.log(n,r)},{codeHtml:n}=x(),{codeJs:r}=S();return{changeModel:t,codeHtml:n,codeJs:r,model:e}}};function w(t,i,l,ee,u,d){let f=r(`a-switch`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_UI_GROUP_CHANGE_HEADER_`,description:`_A_UI_GROUP_CHANGE_DESCRIPTION_`,props:[`change`,`model-value`]},{default:o(()=>[a(f,{change:t.changeModel,"model-value":t.model},null,8,[`change`,`model-value`]),s(`div`,null,`model: `+e(t.model),1)]),_:1},8,[`code-html`,`code-js`])}var T=d(C,[[`render`,w]]);function E(){return{codeHtml:`<a-switch
  v-model="model"
  :change="changeModel"
  :default="true"
></a-switch>
<div>model: {{ model }}</div>`}}function te(){return{codeJs:`import {
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
};`}}var D={name:`PageSwitchDefault`,components:{AlohaExample:p,ASwitch:l},setup(){let e=i(void 0),t=({init:e})=>{console.log(`changeModel init`,e)},{codeHtml:n}=E(),{codeJs:r}=te();return{changeModel:t,codeHtml:n,codeJs:r,model:e}}};function O(t,i,l,ee,u,d){let f=r(`a-switch`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_UI_GROUP_DEFAULT_HEADER_`,description:`_A_UI_GROUP_DEFAULT_DESCRIPTION_`,props:[`default`]},{default:o(()=>[a(f,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,change:t.changeModel,default:!0},null,8,[`modelValue`,`change`]),s(`div`,null,`model: `+e(t.model),1)]),_:1},8,[`code-html`,`code-js`])}var k=d(D,[[`render`,O]]);function A(){return{codeHtml:`<a-switch
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
};`}}var M={name:`PageSwitchErrorIcon`,components:{AlohaExample:p,ASwitch:l},setup(){let e=i(!1),{codeHtml:t}=A(),{codeJs:n}=j();return{codeHtml:t,codeJs:n,errorIcon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.93 6.588 8.758 10.042a.5.5 0 0 1-.998 0L7.588 6.588a.5.5 0 1 1 .998 0M8 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>`,model:e}}};function N(e,t,i,s,l,ee){let u=r(`a-switch`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_ERROR_ICON_HEADER_`,description:`_A_UI_GROUP_ERROR_ICON_DESCRIPTION_`,props:[`errors`,`error-icon`]},{default:o(()=>[a(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"error-icon":e.errorIcon,errors:`Aloha`,label:`ASwitch`},null,8,[`modelValue`,`error-icon`])]),_:1},8,[`code-html`,`code-js`])}var P=d(M,[[`render`,N]]);function F(){return{codeHtml:`<a-switch
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
};`}}var L={name:`PageSwitchErrors`,components:{AlohaExample:p,ASwitch:l},setup(){let e=i(!1),{codeHtml:t}=F(),{codeJs:n}=I();return{codeHtml:t,codeJs:n,model:e}}};function R(e,t,i,s,l,ee){let u=r(`a-switch`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_ERRORS_HEADER_`,description:`_A_UI_GROUP_ERRORS_DESCRIPTION_`,props:[`errors`,`label`]},{default:o(()=>[a(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,errors:`Aloha`,label:`ASwitch`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var z=d(L,[[`render`,R]]);function B(){return{codeHtml:`<a-switch
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
};`}}var H={name:`PageSwitchHelpText`,components:{AlohaExample:p,ASwitch:l},setup(){let e=i(!1),{codeHtml:t}=B(),{codeJs:n}=V();return{codeHtml:t,codeJs:n,model:e}}};function U(e,t,i,s,l,ee){let u=r(`a-switch`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_HELP_TEXT_HEADER_`,description:`_A_UI_GROUP_HELP_TEXT_DESCRIPTION_`,props:[`help-text`]},{default:o(()=>[a(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"help-text":`Aloha`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var W=d(H,[[`render`,U]]);function G(){return{codeHtml:`<a-switch
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
};`}}var q={name:`PageSwitchLabelDescription`,components:{AlohaExample:p,ASwitch:l},setup(){let e=i(!1),{codeHtml:t}=G(),{codeJs:n}=K();return{codeHtml:t,codeJs:n,model:e}}};function J(e,t,i,s,l,ee){let u=r(`a-switch`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_`,description:`_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_`,props:[`label-description`]},{default:o(()=>[a(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`Switch`,"label-description":`Aloha`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var Y=d(q,[[`render`,J]]);function X(){return{codeHtml:`<a-switch
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
};`}}var Q={name:`PageSwitchLabelScreenReader`,components:{AlohaExample:p,ASwitch:l},setup(){let e=i(!1),{codeHtml:t}=X(),{codeJs:n}=Z();return{codeHtml:t,codeJs:n,model:e}}};function ne(e,t,i,s,l,ee){let u=r(`a-switch`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_LABEL_SCREEN_READER_HEADER_`,description:`_A_UI_GROUP_LABEL_SCREEN_READER_DESCRIPTION_`,props:[`label-screen-reader`]},{default:o(()=>[a(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`ASwitch`},null,8,[`modelValue`]),a(u,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,"label-screen-reader":`ASwitch`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var re=d(Q,[[`render`,ne]]);function ie(){return{codeHtml:`<a-switch
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
};`}}var oe={name:`PageSwitchReadonly`,components:{AlohaExample:p,ASwitch:l},setup(){let e=i(!1),t=i(!0),n=i(void 0),{codeHtml:r}=ie(),{codeJs:a}=ae();return{codeHtml:r,codeJs:a,model1:e,model2:t,model3:n}}};function se(e,t,i,s,l,ee){let u=r(`a-switch`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_READONLY_HEADER_`,description:`_A_UI_GROUP_READONLY_DESCRIPTION_`,props:[`readonly`,`readonly-default`]},{default:o(()=>[a(u,{"model-value":e.model1,readonly:!0,label:`Switch 1`},null,8,[`model-value`]),a(u,{class:`a_mt_3`,"model-value":e.model2,readonly:!0,label:`Switch 2`},null,8,[`model-value`]),a(u,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,label:`Switch 3`},null,8,[`model-value`]),a(u,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,"help-text":`Aloha`,label:`Switch 4`,"readonly-default":`-`},null,8,[`model-value`])]),_:1},8,[`code-html`,`code-js`])}var ce=d(oe,[[`render`,se]]);function le(){return{codeHtml:`<a-switch
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
};`}}var de={name:`PageSwitchThreeState`,components:{AlohaExample:p,ASwitch:l},setup(){let e=i(null),{codeHtml:t}=le(),{codeJs:n}=ue();return{codeHtml:t,codeJs:n,model:e}}};function fe(t,i,l,ee,u,d){let f=r(`a-switch`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_SWITCH_GROUP_THREE_STATE_HEADER_`,description:`_A_SWITCH_GROUP_THREE_STATE_DESCRIPTION_`,props:[`is-three-state`,`default-value`,`default-label`]},{default:o(()=>[a(f,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,"default-value":null,"is-three-state":!0,"default-label":`Default`},null,8,[`modelValue`]),s(`div`,null,`model: `+e(t.model),1)]),_:1},8,[`code-html`,`code-js`])}var pe=d(de,[[`render`,fe]]);function me(){return{codeHtml:`<a-switch
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
};`}}var ge={name:`PageSwitchTitle`,components:{AlohaExample:p,ASwitch:l},setup(){let e=i(0),{codeHtml:t}=me(),{codeJs:n}=he();return{codeHtml:t,codeJs:n,model:e}}};function _e(e,t,i,s,l,ee){let u=r(`a-switch`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_SWITCH_GROUP_TITLE_HEADER_`,description:`_A_SWITCH_GROUP_TITLE_DESCRIPTION_`,props:[`title`,`is-title-html`]},{default:o(()=>[a(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"is-title-html":!0,title:`Aloha`},null,8,[`modelValue`]),a(u,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,"is-title-html":!1,title:`Aloha`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var ve=d(ge,[[`render`,_e]]);function ye(){return{codeHtml:`<a-switch
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
};`}}var xe={name:`PageSwitchTrueFalseLabel`,components:{AlohaExample:p,ASwitch:l},setup(){let e=i(!1),{codeHtml:t}=ye(),{codeJs:n}=be();return{codeHtml:t,codeJs:n,model:e}}};function Se(e,t,i,s,l,ee){let u=r(`a-switch`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_SWITCH_GROUP_TRUE_FALSE_LABEL_HEADER_`,description:`_A_SWITCH_GROUP_TRUE_FALSE_LABEL_DESCRIPTION_`,props:[`false-label`,`true-label`]},{default:o(()=>[a(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"false-label":`0`,"true-label":`1`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var Ce=d(xe,[[`render`,Se]]);function we(){return{codeHtml:`<a-switch
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
};`}}var Ee={name:`PageSwitchTrueFalseValue`,components:{AlohaExample:p,ASwitch:l},setup(){let e=i(0),{codeHtml:t}=we(),{codeJs:n}=Te();return{codeHtml:t,codeJs:n,model:e}}};function De(t,i,l,ee,u,d){let f=r(`a-switch`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_SWITCH_GROUP_TRUE_FALSE_VALUE_HEADER_`,description:`_A_SWITCH_GROUP_TRUE_FALSE_VALUE_DESCRIPTION_`,props:[`false-value`,`true-value`]},{default:o(()=>[a(f,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,"false-value":0,"true-value":1},null,8,[`modelValue`]),s(`div`,null,`model: `+e(t.model),1)]),_:1},8,[`code-html`,`code-js`])}var $=d(Ee,[[`render`,De]]);function Oe(){return{dataEvents:[{name:`update:model-value`,description:`_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_`,type:`Function`},{name:`focus`,description:`_A_UI_EVENTS_FOCUS_DESCRIPTION_`,type:`Function`},{name:`blur`,description:`_A_UI_EVENTS_BLUR_DESCRIPTION_`,type:`Function`}]}}function ke(){let e=t(()=>u({placeholder:`_A_SWITCH_COMPONENT_NAME_`}));return{pageTitle:t(()=>`ASwitch${e.value?` (${e.value})`:``}`)}}function Ae(){return{dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`change`,description:`_A_UI_PROPS_CHANGE_DESCRIPTION_`,type:`Function`,default:`() => {}`,required:!1},{name:`default`,description:`_A_UI_PROPS_DEFAULT_DESCRIPTION_`,type:`Boolean / String / Number`,default:void 0,required:!1},{name:`default-label`,description:`_A_SWITCH_PROPS_DEFAULT_LABEL_DESCRIPTION_`,type:`String`,default:`_A_SWITCH_DEFAULT_LABEL_`,required:!1},{name:`default-value`,description:`_A_SWITCH_PROPS_DEFAULT_VALUE_DESCRIPTION_`,type:`Boolean / String / Number`,default:void 0,required:!1},{name:`dependencies`,description:`_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_`,type:`Array / Object`,default:void 0,required:!1},{name:`disabled`,description:`_A_UI_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`errors`,description:`_A_UI_PROPS_ERRORS_DESCRIPTION_`,type:`String / Array`,default:void 0,required:!1},{name:`error-icon`,description:`_A_UI_PROPS_ERROR_ICON_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`exclude-render-attributes`,description:`_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`extra`,description:`_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`false-label`,description:`_A_SWITCH_PROPS_FALSE_LABEL_DESCRIPTION_`,type:`String`,default:`_A_SWITCH_FALSE_LABEL_`,required:!1},{name:`false-value`,description:`_A_SWITCH_PROPS_FALSE_VALUE_DESCRIPTION_`,type:`Boolean / String / Number`,default:!1,required:!1},{name:`full-width`,description:`_A_SWITCH_PROPS_FULL_WIDTH_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`help-text`,description:`_A_UI_PROPS_HELP_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`html-id`,description:`_A_UI_PROPS_HTML_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`id`,description:`_A_UI_PROPS_ID_DESCRIPTION_`,type:`String / Number`,default:`() => uniqueId("a_switch_")`,required:!1},{name:`id-prefix`,description:`_A_UI_PROPS_ID_PREFIX_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`input-attributes`,description:`_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`input-class`,description:`_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`is-hide`,description:`_A_UI_PROPS_IS_HIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-render`,description:`_A_UI_PROPS_IS_RENDER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-three-state`,description:`_A_SWITCH_PROPS_IS_THREE_STATE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-title-html`,description:`_A_GLOBAL_PROPS_IS_TITLE_HTML_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`label`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`label-class`,description:`_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`label-description`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`label-screen-reader`,description:`_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`model-dependencies`,description:`_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`model-undefined`,description:`_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_`,type:`String / Number / Object / Array / Boolean`,default:void 0,required:!1},{name:`model-value`,description:`_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_`,type:`Boolean / String / Number`,default:void 0,required:!1},{name:`readonly`,description:`_A_UI_PROPS_READONLY_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`readonly-default`,description:`_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_`,type:`String`,default:``,required:!1},{name:`required`,description:`_A_UI_PROPS_REQUIRED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`title`,description:`_A_GLOBAL_PROPS_TITLE_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`title-placement`,description:`_A_GLOBAL_PROPS_TITLE_PLACEMENT_DESCRIPTION_`,type:`String`,default:`top`,required:!1},{name:`true-label`,description:`_A_SWITCH_PROPS_TRUE_LABEL_DESCRIPTION_`,type:`String`,default:`_A_SWITCH_TRUE_LABEL_`,required:!1},{name:`true-value`,description:`_A_SWITCH_PROPS_TRUE_VALUE_DESCRIPTION_`,type:`Boolean / String / Number`,default:!0,required:!1}]}}function je(){return{dataTranslate:[`_A_SWITCH_DEFAULT_LABEL_`,`_A_SWITCH_FALSE_LABEL_`,`_A_SWITCH_TRUE_LABEL_`]}}var Me={name:`PageSwitch`,components:{AlohaPage:f,AlohaTableProps:m,AlohaTableTranslate:h,ATranslation:ee,PageSwitchBasic:b,PageSwitchChange:T,PageSwitchDefault:k,PageSwitchErrorIcon:P,PageSwitchErrors:z,PageSwitchHelpText:W,PageSwitchLabelDescription:Y,PageSwitchLabelScreenReader:re,PageSwitchReadonly:ce,PageSwitchThreeState:pe,PageSwitchTitle:ve,PageSwitchTrueFalseLabel:Ce,PageSwitchTrueFalseValue:$},setup(){let{pageTitle:e}=ke(),{dataProps:t}=Ae(),{dataTranslate:n}=je(),{dataEvents:r}=Oe();return{dataEvents:r,dataProps:t,dataTranslate:n,pageTitle:e}}};function Ne(e,t,i,s,l,ee){let u=r(`a-translation`),d=r(`page-switch-basic`),f=r(`page-switch-change`),p=r(`page-switch-help-text`),m=r(`page-switch-error-icon`),h=r(`page-switch-errors`),g=r(`page-switch-label-description`),_=r(`page-switch-default`),v=r(`page-switch-label-screen-reader`),y=r(`page-switch-true-false-label`),b=r(`page-switch-true-false-value`),x=r(`page-switch-three-state`),S=r(`page-switch-title`),C=r(`page-switch-readonly`),w=r(`aloha-table-props`),T=r(`aloha-table-translate`),E=r(`aloha-page`);return c(),n(E,{"page-title":e.pageTitle},{body:o(()=>[a(u,{tag:`p`,html:`_A_SWITCH_COMPONENT_DESCRIPTION_`}),a(d),a(f),a(p),a(m),a(h),a(g),a(_),a(v),a(y),a(b),a(x),a(S),a(C),a(w,{data:e.dataProps},null,8,[`data`]),a(w,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`]),a(T,{data:e.dataTranslate},null,8,[`data`])]),_:1},8,[`page-title`])}var Pe=d(Me,[[`render`,Ne]]);export{Pe as default};