import{A as f,a as b}from"./chunk.AlohaExample.ZAPrMli1.js";import{A as y}from"./chunk.AlohaTableProps.CLXqX-Vq.js";import{A as J}from"./chunk.AlohaTableTranslate.l20Qse1b.js";import{a as S,_ as m,g as V,A as B}from"./bundle.index.CMxwleX_.js";import{r as i,Y as u,W as p,aU as h,f as o,$ as l,_ as A,aV as I,d as E}from"./chunk.vendor.CWr53wb5.js";import"./chunk.vendor-lodash.CWoM99Se.js";import"./chunk.APageTabTitle.CR9PH5HR.js";import"./chunk.AlohaHighlightjs.Cyb5M4zM.js";import"./chunk.ATable.DQ8hgEug.js";import"./chunk.translations-ar.CE_3yjUF.js";import"./chunk.translations-de.R0YWY91X.js";import"./chunk.translations-en.DQ0Z316F.js";import"./chunk.translations-es.XN0jVhL-.js";import"./chunk.translations-fr.D5Z6d0-l.js";import"./chunk.translations-hr.BRYjTgZh.js";import"./chunk.translations-it.D6SsMt4V.js";import"./chunk.translations-ru.BfK09XlZ.js";function q(){return{codeHtml:`<a-switch
  v-model="model"
></a-switch>
<div>model: {{ model }}</div>`}}function j(){return{codeJs:`import {
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
};`}}const G={name:"PageSwitchBasic",components:{AlohaExample:f,ASwitch:S},setup(){const e=i(!1),{codeHtml:t}=q(),{codeJs:a}=j();return{codeHtml:t,codeJs:a,model:e}}};function F(e,t,a,s,c,_){const n=o("a-switch"),d=o("aloha-example");return u(),p(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value"]},{default:h(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=r=>e.model=r)},null,8,["modelValue"]),A("div",null,"model: "+I(e.model),1)]),_:1},8,["code-html","code-js"])}const M=m(G,[["render",F]]);function W(){return{codeHtml:`<a-switch
  :change="changeModel"
  :model-value="model"
></a-switch>
<div>model: {{ model }}</div>`}}function x(){return{codeJs:`import {
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
};`}}const X={name:"PageSwitchChange",components:{AlohaExample:f,ASwitch:S},setup(){const e=i(!1),t=({model:c,id:_,props:n})=>{e.value=c,console.log(_,n)},{codeHtml:a}=W(),{codeJs:s}=x();return{changeModel:t,codeHtml:a,codeJs:s,model:e}}};function Y(e,t,a,s,c,_){const n=o("a-switch"),d=o("aloha-example");return u(),p(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CHANGE_HEADER_",description:"_A_UI_GROUP_CHANGE_DESCRIPTION_",props:["change","model-value"]},{default:h(()=>[l(n,{change:e.changeModel,"model-value":e.model},null,8,["change","model-value"]),A("div",null,"model: "+I(e.model),1)]),_:1},8,["code-html","code-js"])}const k=m(X,[["render",Y]]);function Q(){return{codeHtml:`<a-switch
  v-model="model"
  :change="changeModel"
  :default="true"
></a-switch>
<div>model: {{ model }}</div>`}}function z(){return{codeJs:`import {
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
};`}}const K={name:"PageSwitchDefault",components:{AlohaExample:f,ASwitch:S},setup(){const e=i(void 0),t=({init:c})=>{console.log("changeModel init",c)},{codeHtml:a}=Q(),{codeJs:s}=z();return{changeModel:t,codeHtml:a,codeJs:s,model:e}}};function Z(e,t,a,s,c,_){const n=o("a-switch"),d=o("aloha-example");return u(),p(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_DEFAULT_HEADER_",description:"_A_UI_GROUP_DEFAULT_DESCRIPTION_",props:["default"]},{default:h(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=r=>e.model=r),change:e.changeModel,default:!0},null,8,["modelValue","change"]),A("div",null,"model: "+I(e.model),1)]),_:1},8,["code-html","code-js"])}const ee=m(K,[["render",Z]]);function te(){return{codeHtml:`<a-switch
  v-model="model"
  :error-icon="errorIcon"
  errors="Aloha"
  label="ASwitch"
></a-switch>`}}function oe(){return{codeJs:`import {
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
};`}}const ae={name:"PageSwitchErrorIcon",components:{AlohaExample:f,ASwitch:S},setup(){const e=i(!1),t='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.93 6.588 8.758 10.042a.5.5 0 0 1-.998 0L7.588 6.588a.5.5 0 1 1 .998 0M8 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>',{codeHtml:a}=te(),{codeJs:s}=oe();return{codeHtml:a,codeJs:s,errorIcon:t,model:e}}};function le(e,t,a,s,c,_){const n=o("a-switch"),d=o("aloha-example");return u(),p(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERROR_ICON_HEADER_",description:"_A_UI_GROUP_ERROR_ICON_DESCRIPTION_",props:["errors","error-icon"]},{default:h(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=r=>e.model=r),"error-icon":e.errorIcon,errors:"Aloha",label:"ASwitch"},null,8,["modelValue","error-icon"])]),_:1},8,["code-html","code-js"])}const ne=m(ae,[["render",le]]);function de(){return{codeHtml:`<a-switch
  v-model="model"
  errors="Aloha"
  label="ASwitch"
></a-switch>`}}function re(){return{codeJs:`import {
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
};`}}const se={name:"PageSwitchErrors",components:{AlohaExample:f,ASwitch:S},setup(){const e=i(!1),{codeHtml:t}=de(),{codeJs:a}=re();return{codeHtml:t,codeJs:a,model:e}}};function ce(e,t,a,s,c,_){const n=o("a-switch"),d=o("aloha-example");return u(),p(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERRORS_HEADER_",description:"_A_UI_GROUP_ERRORS_DESCRIPTION_",props:["errors","label"]},{default:h(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=r=>e.model=r),errors:"Aloha",label:"ASwitch"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const _e=m(se,[["render",ce]]);function ie(){return{codeHtml:`<a-switch
  v-model="model"
  help-text="Aloha"
></a-switch>`}}function me(){return{codeJs:`import {
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
};`}}const ue={name:"PageSwitchHelpText",components:{AlohaExample:f,ASwitch:S},setup(){const e=i(!1),{codeHtml:t}=ie(),{codeJs:a}=me();return{codeHtml:t,codeJs:a,model:e}}};function pe(e,t,a,s,c,_){const n=o("a-switch"),d=o("aloha-example");return u(),p(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_HELP_TEXT_HEADER_",description:"_A_UI_GROUP_HELP_TEXT_DESCRIPTION_",props:["help-text"]},{default:h(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=r=>e.model=r),"help-text":"Aloha"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const he=m(ue,[["render",pe]]);function fe(){return{codeHtml:`<a-switch
  v-model="model"
  label="Switch"
  label-description="Aloha"
></a-switch>`}}function Se(){return{codeJs:`import {
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
};`}}const Ae={name:"PageSwitchLabelDescription",components:{AlohaExample:f,ASwitch:S},setup(){const e=i(!1),{codeHtml:t}=fe(),{codeJs:a}=Se();return{codeHtml:t,codeJs:a,model:e}}};function Ie(e,t,a,s,c,_){const n=o("a-switch"),d=o("aloha-example");return u(),p(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_",description:"_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_",props:["label-description"]},{default:h(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=r=>e.model=r),label:"Switch","label-description":"Aloha"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const Pe=m(Ae,[["render",Ie]]);function Ee(){return{codeHtml:`<a-switch
  v-model="model"
  label="ASwitch"
></a-switch>
<a-switch
  v-model="model"
  class="a_mt_3"
  label-screen-reader="ASwitch"
></a-switch>`}}function Re(){return{codeJs:`import {
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
};`}}const we={name:"PageSwitchLabelScreenReader",components:{AlohaExample:f,ASwitch:S},setup(){const e=i(!1),{codeHtml:t}=Ee(),{codeJs:a}=Re();return{codeHtml:t,codeJs:a,model:e}}};function Te(e,t,a,s,c,_){const n=o("a-switch"),d=o("aloha-example");return u(),p(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_SCREEN_READER_HEADER_",description:"_A_UI_GROUP_LABEL_SCREEN_READER_DESCRIPTION_",props:["label-screen-reader"]},{default:h(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=r=>e.model=r),label:"ASwitch"},null,8,["modelValue"]),l(n,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":t[1]||(t[1]=r=>e.model=r),"label-screen-reader":"ASwitch"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const Oe=m(we,[["render",Te]]);function ge(){return{codeHtml:`<a-switch
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
></a-switch>`}}function He(){return{codeJs:`import {
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
};`}}const Ue={name:"PageSwitchReadonly",components:{AlohaExample:f,ASwitch:S},setup(){const e=i(!1),t=i(!0),a=i(void 0),{codeHtml:s}=ge(),{codeJs:c}=He();return{codeHtml:s,codeJs:c,model1:e,model2:t,model3:a}}};function De(e,t,a,s,c,_){const n=o("a-switch"),d=o("aloha-example");return u(),p(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default"]},{default:h(()=>[l(n,{"model-value":e.model1,readonly:!0,label:"Switch 1"},null,8,["model-value"]),l(n,{class:"a_mt_3","model-value":e.model2,readonly:!0,label:"Switch 2"},null,8,["model-value"]),l(n,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"Switch 3"},null,8,["model-value"]),l(n,{class:"a_mt_3","model-value":e.model3,readonly:!0,"help-text":"Aloha",label:"Switch 4","readonly-default":"-"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const Le=m(Ue,[["render",De]]);function $e(){return{codeHtml:`<a-switch
  v-model="model"
  :default-value="null"
  :is-three-state="true"
  default-label="Default"
></a-switch>
<div>model: {{ model }}</div>`}}function Ce(){return{codeJs:`import {
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
};`}}const ve={name:"PageSwitchThreeState",components:{AlohaExample:f,ASwitch:S},setup(){const e=i(null),{codeHtml:t}=$e(),{codeJs:a}=Ce();return{codeHtml:t,codeJs:a,model:e}}};function Ne(e,t,a,s,c,_){const n=o("a-switch"),d=o("aloha-example");return u(),p(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SWITCH_GROUP_THREE_STATE_HEADER_",description:"_A_SWITCH_GROUP_THREE_STATE_DESCRIPTION_",props:["is-three-state","default-value","default-label"]},{default:h(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=r=>e.model=r),"default-value":null,"is-three-state":!0,"default-label":"Default"},null,8,["modelValue"]),A("div",null,"model: "+I(e.model),1)]),_:1},8,["code-html","code-js"])}const be=m(ve,[["render",Ne]]);function ye(){return{codeHtml:`<a-switch
  v-model="model"
  :is-title-html="true"
  title="Aloha"
></a-switch>
<a-switch
  v-model="model"
  :is-title-html="false"
  class="a_mt_3"
  title="Aloha"
></a-switch>`}}function Je(){return{codeJs:`import {
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
};`}}const Ve={name:"PageSwitchTitle",components:{AlohaExample:f,ASwitch:S},setup(){const e=i(0),{codeHtml:t}=ye(),{codeJs:a}=Je();return{codeHtml:t,codeJs:a,model:e}}};function Be(e,t,a,s,c,_){const n=o("a-switch"),d=o("aloha-example");return u(),p(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SWITCH_GROUP_TITLE_HEADER_",description:"_A_SWITCH_GROUP_TITLE_DESCRIPTION_",props:["title","is-title-html"]},{default:h(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=r=>e.model=r),"is-title-html":!0,title:"Aloha"},null,8,["modelValue"]),l(n,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":t[1]||(t[1]=r=>e.model=r),"is-title-html":!1,title:"Aloha"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const qe=m(Ve,[["render",Be]]);function je(){return{codeHtml:`<a-switch
  v-model="model"
  false-label="0"
  true-label="1"
></a-switch>`}}function Ge(){return{codeJs:`import {
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
};`}}const Fe={name:"PageSwitchTrueFalseLabel",components:{AlohaExample:f,ASwitch:S},setup(){const e=i(!1),{codeHtml:t}=je(),{codeJs:a}=Ge();return{codeHtml:t,codeJs:a,model:e}}};function Me(e,t,a,s,c,_){const n=o("a-switch"),d=o("aloha-example");return u(),p(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SWITCH_GROUP_TRUE_FALSE_LABEL_HEADER_",description:"_A_SWITCH_GROUP_TRUE_FALSE_LABEL_DESCRIPTION_",props:["false-label","true-label"]},{default:h(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=r=>e.model=r),"false-label":"0","true-label":"1"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const We=m(Fe,[["render",Me]]);function xe(){return{codeHtml:`<a-switch
  v-model="model"
  :false-value="0"
  :true-value="1"
></a-switch>
<div>model: {{ model }}</div>`}}function Xe(){return{codeJs:`import {
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
};`}}const Ye={name:"PageSwitchTrueFalseValue",components:{AlohaExample:f,ASwitch:S},setup(){const e=i(0),{codeHtml:t}=xe(),{codeJs:a}=Xe();return{codeHtml:t,codeJs:a,model:e}}};function ke(e,t,a,s,c,_){const n=o("a-switch"),d=o("aloha-example");return u(),p(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SWITCH_GROUP_TRUE_FALSE_VALUE_HEADER_",description:"_A_SWITCH_GROUP_TRUE_FALSE_VALUE_DESCRIPTION_",props:["false-value","true-value"]},{default:h(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=r=>e.model=r),"false-value":0,"true-value":1},null,8,["modelValue"]),A("div",null,"model: "+I(e.model),1)]),_:1},8,["code-html","code-js"])}const Qe=m(Ye,[["render",ke]]);function ze(){return{dataEvents:[{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"},{name:"focus",description:"_A_UI_EVENTS_FOCUS_DESCRIPTION_",type:"Function"},{name:"blur",description:"_A_UI_EVENTS_BLUR_DESCRIPTION_",type:"Function"}]}}function Ke(){const e=E(()=>V({placeholder:"_A_SWITCH_COMPONENT_NAME_"}));return{pageTitle:E(()=>`ASwitch${e.value?` (${e.value})`:""}`)}}function Ze(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"default",description:"_A_UI_PROPS_DEFAULT_DESCRIPTION_",type:"Boolean / String / Number",default:void 0,required:!1},{name:"default-label",description:"_A_SWITCH_PROPS_DEFAULT_LABEL_DESCRIPTION_",type:"String",default:"_A_SWITCH_DEFAULT_LABEL_",required:!1},{name:"default-value",description:"_A_SWITCH_PROPS_DEFAULT_VALUE_DESCRIPTION_",type:"Boolean / String / Number",default:void 0,required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"error-icon",description:"_A_UI_PROPS_ERROR_ICON_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"false-label",description:"_A_SWITCH_PROPS_FALSE_LABEL_DESCRIPTION_",type:"String",default:"_A_SWITCH_FALSE_LABEL_",required:!1},{name:"false-value",description:"_A_SWITCH_PROPS_FALSE_VALUE_DESCRIPTION_",type:"Boolean / String / Number",default:!1,required:!1},{name:"full-width",description:"_A_SWITCH_PROPS_FULL_WIDTH_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_switch_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"input-attributes",description:"_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"input-class",description:"_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-three-state",description:"_A_SWITCH_PROPS_IS_THREE_STATE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-title-html",description:"_A_GLOBAL_PROPS_IS_TITLE_HTML_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-description",description:"_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-undefined",description:"_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"Boolean / String / Number",default:void 0,required:!1},{name:"readonly",description:"_A_UI_PROPS_READONLY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"readonly-default",description:"_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_",type:"String",default:"",required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"title",description:"_A_GLOBAL_PROPS_TITLE_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"title-placement",description:"_A_GLOBAL_PROPS_TITLE_PLACEMENT_DESCRIPTION_",type:"String",default:"top",required:!1},{name:"true-label",description:"_A_SWITCH_PROPS_TRUE_LABEL_DESCRIPTION_",type:"String",default:"_A_SWITCH_TRUE_LABEL_",required:!1},{name:"true-value",description:"_A_SWITCH_PROPS_TRUE_VALUE_DESCRIPTION_",type:"Boolean / String / Number",default:!0,required:!1}]}}function et(){return{dataTranslate:["_A_SWITCH_DEFAULT_LABEL_","_A_SWITCH_FALSE_LABEL_","_A_SWITCH_TRUE_LABEL_"]}}const tt={name:"PageSwitch",components:{AlohaPage:b,AlohaTableProps:y,AlohaTableTranslate:J,ATranslation:B,PageSwitchBasic:M,PageSwitchChange:k,PageSwitchDefault:ee,PageSwitchErrorIcon:ne,PageSwitchErrors:_e,PageSwitchHelpText:he,PageSwitchLabelDescription:Pe,PageSwitchLabelScreenReader:Oe,PageSwitchReadonly:Le,PageSwitchThreeState:be,PageSwitchTitle:qe,PageSwitchTrueFalseLabel:We,PageSwitchTrueFalseValue:Qe},setup(){const{pageTitle:e}=Ke(),{dataProps:t}=Ze(),{dataTranslate:a}=et(),{dataEvents:s}=ze();return{dataEvents:s,dataProps:t,dataTranslate:a,pageTitle:e}}};function ot(e,t,a,s,c,_){const n=o("a-translation"),d=o("page-switch-basic"),r=o("page-switch-change"),R=o("page-switch-help-text"),w=o("page-switch-error-icon"),T=o("page-switch-errors"),O=o("page-switch-label-description"),g=o("page-switch-default"),H=o("page-switch-label-screen-reader"),U=o("page-switch-true-false-label"),D=o("page-switch-true-false-value"),L=o("page-switch-three-state"),$=o("page-switch-title"),C=o("page-switch-readonly"),P=o("aloha-table-props"),v=o("aloha-table-translate"),N=o("aloha-page");return u(),p(N,{"page-title":e.pageTitle},{body:h(()=>[l(n,{tag:"p",html:"_A_SWITCH_COMPONENT_DESCRIPTION_"}),l(d),l(r),l(R),l(w),l(T),l(O),l(g),l(H),l(U),l(D),l(L),l($),l(C),l(P,{data:e.dataProps},null,8,["data"]),l(P,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"]),l(v,{data:e.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const Pt=m(tt,[["render",ot]]);export{Pt as default};
