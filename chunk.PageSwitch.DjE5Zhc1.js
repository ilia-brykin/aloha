import{A as f,a as v}from"./chunk.AlohaExample.YBEkNJHM.js";import{A as b}from"./chunk.AlohaTableProps.Cjf-vv9O.js";import{A as y}from"./chunk.AlohaTableTranslate.Cg0N-OFa.js";import{a as S,_ as m,g as J,A as V}from"./bundle.index.Bn4EAoUB.js";import{r as i,V as u,aT as p,e as o,W as h,_ as l,Z as A,aU as P,d as E}from"./chunk.vendor.tcMGz7j_.js";import"./chunk.vendor-lodash.rFt76tyK.js";import"./chunk.APageTabTitle.Cvp9tCUS.js";import"./chunk.AlohaHighlightjs.BwPt1uu6.js";import"./chunk.ATable.BW5NWBn-.js";import"./chunk.translations-ar.gQA2bIDx.js";import"./chunk.translations-de.Cs1lbELY.js";import"./chunk.translations-en.Dggm7bm6.js";import"./chunk.translations-es.B0VpZMt0.js";import"./chunk.translations-fr.zQdXa2f4.js";import"./chunk.translations-hr.BVkkSNp1.js";import"./chunk.translations-it.BH0mwprS.js";import"./chunk.translations-ru.CM_kaKL2.js";function B(){return{codeHtml:`<a-switch
  v-model="model"
></a-switch>
<div>model: {{ model }}</div>`}}function q(){return{codeJs:`import {
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
};`}}const j={name:"PageSwitchBasic",components:{AlohaExample:f,ASwitch:S},setup(){const e=i(!1),{codeHtml:t}=B(),{codeJs:a}=q();return{codeHtml:t,codeJs:a,model:e}}};function F(e,t,a,r,c,_){const n=o("a-switch"),d=o("aloha-example");return h(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value"]},{default:p(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=s=>e.model=s)},null,8,["modelValue"]),A("div",null,"model: "+P(e.model),1)]),_:1},8,["code-html","code-js"])}const G=m(j,[["render",F]]);function W(){return{codeHtml:`<a-switch
  :change="changeModel"
  :model-value="model"
></a-switch>
<div>model: {{ model }}</div>`}}function M(){return{codeJs:`import {
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
};`}}const X={name:"PageSwitchChange",components:{AlohaExample:f,ASwitch:S},setup(){const e=i(!1),t=({model:c,id:_,props:n})=>{e.value=c,console.log(_,n)},{codeHtml:a}=W(),{codeJs:r}=M();return{changeModel:t,codeHtml:a,codeJs:r,model:e}}};function Y(e,t,a,r,c,_){const n=o("a-switch"),d=o("aloha-example");return h(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CHANGE_HEADER_",description:"_A_UI_GROUP_CHANGE_DESCRIPTION_",props:["change","model-value"]},{default:p(()=>[l(n,{change:e.changeModel,"model-value":e.model},null,8,["change","model-value"]),A("div",null,"model: "+P(e.model),1)]),_:1},8,["code-html","code-js"])}const x=m(X,[["render",Y]]);function k(){return{codeHtml:`<a-switch
  v-model="model"
  :change="changeModel"
  :default="true"
></a-switch>
<div>model: {{ model }}</div>`}}function Q(){return{codeJs:`import {
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
};`}}const Z={name:"PageSwitchDefault",components:{AlohaExample:f,ASwitch:S},setup(){const e=i(void 0),t=({init:c})=>{console.log("changeModel init",c)},{codeHtml:a}=k(),{codeJs:r}=Q();return{changeModel:t,codeHtml:a,codeJs:r,model:e}}};function z(e,t,a,r,c,_){const n=o("a-switch"),d=o("aloha-example");return h(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_DEFAULT_HEADER_",description:"_A_UI_GROUP_DEFAULT_DESCRIPTION_",props:["default"]},{default:p(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=s=>e.model=s),change:e.changeModel,default:!0},null,8,["modelValue","change"]),A("div",null,"model: "+P(e.model),1)]),_:1},8,["code-html","code-js"])}const K=m(Z,[["render",z]]);function ee(){return{codeHtml:`<a-switch
  v-model="model"
  errors="Aloha"
  label="ASwitch"
></a-switch>`}}function te(){return{codeJs:`import {
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
};`}}const oe={name:"PageSwitchErrors",components:{AlohaExample:f,ASwitch:S},setup(){const e=i(!1),{codeHtml:t}=ee(),{codeJs:a}=te();return{codeHtml:t,codeJs:a,model:e}}};function ae(e,t,a,r,c,_){const n=o("a-switch"),d=o("aloha-example");return h(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERRORS_HEADER_",description:"_A_UI_GROUP_ERRORS_DESCRIPTION_",props:["errors","label"]},{default:p(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=s=>e.model=s),errors:"Aloha",label:"ASwitch"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const le=m(oe,[["render",ae]]);function ne(){return{codeHtml:`<a-switch
  v-model="model"
  help-text="Aloha"
></a-switch>`}}function de(){return{codeJs:`import {
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
};`}}const se={name:"PageSwitchHelpText",components:{AlohaExample:f,ASwitch:S},setup(){const e=i(!1),{codeHtml:t}=ne(),{codeJs:a}=de();return{codeHtml:t,codeJs:a,model:e}}};function re(e,t,a,r,c,_){const n=o("a-switch"),d=o("aloha-example");return h(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_HELP_TEXT_HEADER_",description:"_A_UI_GROUP_HELP_TEXT_DESCRIPTION_",props:["help-text"]},{default:p(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=s=>e.model=s),"help-text":"Aloha"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const ce=m(se,[["render",re]]);function _e(){return{codeHtml:`<a-switch
  v-model="model"
  label="Switch"
  label-description="Aloha"
></a-switch>`}}function ie(){return{codeJs:`import {
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
};`}}const me={name:"PageSwitchLabelDescription",components:{AlohaExample:f,ASwitch:S},setup(){const e=i(!1),{codeHtml:t}=_e(),{codeJs:a}=ie();return{codeHtml:t,codeJs:a,model:e}}};function ue(e,t,a,r,c,_){const n=o("a-switch"),d=o("aloha-example");return h(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_",description:"_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_",props:["label-description"]},{default:p(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=s=>e.model=s),label:"Switch","label-description":"Aloha"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const pe=m(me,[["render",ue]]);function he(){return{codeHtml:`<a-switch
  v-model="model"
  label="ASwitch"
></a-switch>
<a-switch
  v-model="model"
  class="a_mt_3"
  label-screen-reader="ASwitch"
></a-switch>`}}function fe(){return{codeJs:`import {
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
};`}}const Se={name:"PageSwitchLabelScreenReader",components:{AlohaExample:f,ASwitch:S},setup(){const e=i(!1),{codeHtml:t}=he(),{codeJs:a}=fe();return{codeHtml:t,codeJs:a,model:e}}};function Ae(e,t,a,r,c,_){const n=o("a-switch"),d=o("aloha-example");return h(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_SCREEN_READER_HEADER_",description:"_A_UI_GROUP_LABEL_SCREEN_READER_DESCRIPTION_",props:["label-screen-reader"]},{default:p(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=s=>e.model=s),label:"ASwitch"},null,8,["modelValue"]),l(n,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":t[1]||(t[1]=s=>e.model=s),"label-screen-reader":"ASwitch"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const Pe=m(Se,[["render",Ae]]);function Ie(){return{codeHtml:`<a-switch
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
></a-switch>`}}function Ee(){return{codeJs:`import {
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
};`}}const Re={name:"PageSwitchReadonly",components:{AlohaExample:f,ASwitch:S},setup(){const e=i(!1),t=i(!0),a=i(void 0),{codeHtml:r}=Ie(),{codeJs:c}=Ee();return{codeHtml:r,codeJs:c,model1:e,model2:t,model3:a}}};function Te(e,t,a,r,c,_){const n=o("a-switch"),d=o("aloha-example");return h(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default"]},{default:p(()=>[l(n,{"model-value":e.model1,readonly:!0,label:"Switch 1"},null,8,["model-value"]),l(n,{class:"a_mt_3","model-value":e.model2,readonly:!0,label:"Switch 2"},null,8,["model-value"]),l(n,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"Switch 3"},null,8,["model-value"]),l(n,{class:"a_mt_3","model-value":e.model3,readonly:!0,"help-text":"Aloha",label:"Switch 4","readonly-default":"-"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const we=m(Re,[["render",Te]]);function Oe(){return{codeHtml:`<a-switch
  v-model="model"
  :default-value="null"
  :is-three-state="true"
  default-label="Default"
></a-switch>
<div>model: {{ model }}</div>`}}function ge(){return{codeJs:`import {
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
};`}}const De={name:"PageSwitchThreeState",components:{AlohaExample:f,ASwitch:S},setup(){const e=i(null),{codeHtml:t}=Oe(),{codeJs:a}=ge();return{codeHtml:t,codeJs:a,model:e}}};function He(e,t,a,r,c,_){const n=o("a-switch"),d=o("aloha-example");return h(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SWITCH_GROUP_THREE_STATE_HEADER_",description:"_A_SWITCH_GROUP_THREE_STATE_DESCRIPTION_",props:["is-three-state","default-value","default-label"]},{default:p(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=s=>e.model=s),"default-value":null,"is-three-state":!0,"default-label":"Default"},null,8,["modelValue"]),A("div",null,"model: "+P(e.model),1)]),_:1},8,["code-html","code-js"])}const Ue=m(De,[["render",He]]);function Le(){return{codeHtml:`<a-switch
  v-model="model"
  :is-title-html="true"
  title="Aloha"
></a-switch>
<a-switch
  v-model="model"
  :is-title-html="false"
  class="a_mt_3"
  title="Aloha"
></a-switch>`}}function Ce(){return{codeJs:`import {
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
};`}}const Ne={name:"PageSwitchTitle",components:{AlohaExample:f,ASwitch:S},setup(){const e=i(0),{codeHtml:t}=Le(),{codeJs:a}=Ce();return{codeHtml:t,codeJs:a,model:e}}};function $e(e,t,a,r,c,_){const n=o("a-switch"),d=o("aloha-example");return h(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SWITCH_GROUP_TITLE_HEADER_",description:"_A_SWITCH_GROUP_TITLE_DESCRIPTION_",props:["title","is-title-html"]},{default:p(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=s=>e.model=s),"is-title-html":!0,title:"Aloha"},null,8,["modelValue"]),l(n,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":t[1]||(t[1]=s=>e.model=s),"is-title-html":!1,title:"Aloha"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const ve=m(Ne,[["render",$e]]);function be(){return{codeHtml:`<a-switch
  v-model="model"
  false-label="0"
  true-label="1"
></a-switch>`}}function ye(){return{codeJs:`import {
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
};`}}const Je={name:"PageSwitchTrueFalseLabel",components:{AlohaExample:f,ASwitch:S},setup(){const e=i(!1),{codeHtml:t}=be(),{codeJs:a}=ye();return{codeHtml:t,codeJs:a,model:e}}};function Ve(e,t,a,r,c,_){const n=o("a-switch"),d=o("aloha-example");return h(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SWITCH_GROUP_TRUE_FALSE_LABEL_HEADER_",description:"_A_SWITCH_GROUP_TRUE_FALSE_LABEL_DESCRIPTION_",props:["false-label","true-label"]},{default:p(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=s=>e.model=s),"false-label":"0","true-label":"1"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const Be=m(Je,[["render",Ve]]);function qe(){return{codeHtml:`<a-switch
  v-model="model"
  :false-value="0"
  :true-value="1"
></a-switch>
<div>model: {{ model }}</div>`}}function je(){return{codeJs:`import {
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
};`}}const Fe={name:"PageSwitchTrueFalseValue",components:{AlohaExample:f,ASwitch:S},setup(){const e=i(0),{codeHtml:t}=qe(),{codeJs:a}=je();return{codeHtml:t,codeJs:a,model:e}}};function Ge(e,t,a,r,c,_){const n=o("a-switch"),d=o("aloha-example");return h(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SWITCH_GROUP_TRUE_FALSE_VALUE_HEADER_",description:"_A_SWITCH_GROUP_TRUE_FALSE_VALUE_DESCRIPTION_",props:["false-value","true-value"]},{default:p(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=s=>e.model=s),"false-value":0,"true-value":1},null,8,["modelValue"]),A("div",null,"model: "+P(e.model),1)]),_:1},8,["code-html","code-js"])}const We=m(Fe,[["render",Ge]]);function Me(){return{dataEvents:[{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"},{name:"focus",description:"_A_UI_EVENTS_FOCUS_DESCRIPTION_",type:"Function"},{name:"blur",description:"_A_UI_EVENTS_BLUR_DESCRIPTION_",type:"Function"}]}}function Xe(){const e=E(()=>J({placeholder:"_A_SWITCH_COMPONENT_NAME_"}));return{pageTitle:E(()=>`ASwitch${e.value?` (${e.value})`:""}`)}}function Ye(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"default",description:"_A_UI_PROPS_DEFAULT_DESCRIPTION_",type:"Boolean / String / Number",default:void 0,required:!1},{name:"default-label",description:"_A_SWITCH_PROPS_DEFAULT_LABEL_DESCRIPTION_",type:"String",default:"_A_SWITCH_DEFAULT_LABEL_",required:!1},{name:"default-value",description:"_A_SWITCH_PROPS_DEFAULT_VALUE_DESCRIPTION_",type:"Boolean / String / Number",default:void 0,required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"false-label",description:"_A_SWITCH_PROPS_FALSE_LABEL_DESCRIPTION_",type:"String",default:"_A_SWITCH_FALSE_LABEL_",required:!1},{name:"false-value",description:"_A_SWITCH_PROPS_FALSE_VALUE_DESCRIPTION_",type:"Boolean / String / Number",default:!1,required:!1},{name:"full-width",description:"_A_SWITCH_PROPS_FULL_WIDTH_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_switch_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"input-attributes",description:"_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"input-class",description:"_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-three-state",description:"_A_SWITCH_PROPS_IS_THREE_STATE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-title-html",description:"_A_GLOBAL_PROPS_IS_TITLE_HTML_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-description",description:"_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-undefined",description:"_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"Boolean / String / Number",default:void 0,required:!1},{name:"readonly",description:"_A_UI_PROPS_READONLY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"readonly-default",description:"_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_",type:"String",default:"",required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"title",description:"_A_GLOBAL_PROPS_TITLE_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"title-placement",description:"_A_GLOBAL_PROPS_TITLE_PLACEMENT_DESCRIPTION_",type:"String",default:"top",required:!1},{name:"true-label",description:"_A_SWITCH_PROPS_TRUE_LABEL_DESCRIPTION_",type:"String",default:"_A_SWITCH_TRUE_LABEL_",required:!1},{name:"true-value",description:"_A_SWITCH_PROPS_TRUE_VALUE_DESCRIPTION_",type:"Boolean / String / Number",default:!0,required:!1}]}}function xe(){return{dataTranslate:["_A_SWITCH_DEFAULT_LABEL_","_A_SWITCH_FALSE_LABEL_","_A_SWITCH_TRUE_LABEL_"]}}const ke={name:"PageSwitch",components:{AlohaPage:v,AlohaTableProps:b,AlohaTableTranslate:y,ATranslation:V,PageSwitchBasic:G,PageSwitchChange:x,PageSwitchDefault:K,PageSwitchErrors:le,PageSwitchHelpText:ce,PageSwitchLabelDescription:pe,PageSwitchLabelScreenReader:Pe,PageSwitchReadonly:we,PageSwitchThreeState:Ue,PageSwitchTitle:ve,PageSwitchTrueFalseLabel:Be,PageSwitchTrueFalseValue:We},setup(){const{pageTitle:e}=Xe(),{dataProps:t}=Ye(),{dataTranslate:a}=xe(),{dataEvents:r}=Me();return{dataEvents:r,dataProps:t,dataTranslate:a,pageTitle:e}}};function Qe(e,t,a,r,c,_){const n=o("a-translation"),d=o("page-switch-basic"),s=o("page-switch-change"),R=o("page-switch-help-text"),T=o("page-switch-errors"),w=o("page-switch-label-description"),O=o("page-switch-default"),g=o("page-switch-label-screen-reader"),D=o("page-switch-true-false-label"),H=o("page-switch-true-false-value"),U=o("page-switch-three-state"),L=o("page-switch-title"),C=o("page-switch-readonly"),I=o("aloha-table-props"),N=o("aloha-table-translate"),$=o("aloha-page");return h(),u($,{"page-title":e.pageTitle},{body:p(()=>[l(n,{tag:"p",html:"_A_SWITCH_COMPONENT_DESCRIPTION_"}),l(d),l(s),l(R),l(T),l(w),l(O),l(g),l(D),l(H),l(U),l(L),l(C),l(I,{data:e.dataProps},null,8,["data"]),l(I,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"]),l(N,{data:e.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const pt=m(ke,[["render",Qe]]);export{pt as default};
