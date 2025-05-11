import{A as h,a as N}from"./chunk.AlohaExample.B1mEBcfV.js";import{A as v}from"./chunk.AlohaTableProps.HHtqFI6A.js";import{A as $}from"./chunk.AlohaTableTranslate.rqeBBfzi.js";import{a as S,_ as m,g as b,A as y}from"./bundle.index.BPS_5RKq.js";import{r as i,U as u,aS as p,e as o,V as f,Z as l,Y as A,aT as P,d as E}from"./chunk.vendor.w-kCrpQl.js";import"./chunk.vendor-lodash.GmlDDh1v.js";import"./chunk.APageTabTitle.CncMv4RQ.js";import"./chunk.AlohaHighlightjs.Cjego80K.js";import"./chunk.ATable.DtMcrs8_.js";import"./chunk.translations-ar.7kyFlj_7.js";import"./chunk.translations-de.BMzqk4tK.js";import"./chunk.translations-en.CYLIQ7pD.js";import"./chunk.translations-es.D962VZ2D.js";import"./chunk.translations-fr.CcjuPFMN.js";import"./chunk.translations-hr.D1P_Fjd9.js";import"./chunk.translations-it.BsI54FWd.js";import"./chunk.translations-ru.hctQRJz1.js";function J(){return{codeHtml:`<a-switch
  v-model="model"
></a-switch>
<div>model: {{ model }}</div>`}}function V(){return{codeJs:`import {
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
};`}}const B={name:"PageSwitchBasic",components:{AlohaExample:h,ASwitch:S},setup(){const e=i(!1),{codeHtml:t}=J(),{codeJs:a}=V();return{codeHtml:t,codeJs:a,model:e}}};function q(e,t,a,r,_,c){const n=o("a-switch"),d=o("aloha-example");return f(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value"]},{default:p(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=s=>e.model=s)},null,8,["modelValue"]),A("div",null,"model: "+P(e.model),1)]),_:1},8,["code-html","code-js"])}const j=m(B,[["render",q]]);function F(){return{codeHtml:`<a-switch
  :change="changeModel"
  :model-value="model"
></a-switch>
<div>model: {{ model }}</div>`}}function G(){return{codeJs:`import {
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
};`}}const W={name:"PageSwitchChange",components:{AlohaExample:h,ASwitch:S},setup(){const e=i(!1),t=({model:_,id:c,props:n})=>{e.value=_,console.log(c,n)},{codeHtml:a}=F(),{codeJs:r}=G();return{changeModel:t,codeHtml:a,codeJs:r,model:e}}};function M(e,t,a,r,_,c){const n=o("a-switch"),d=o("aloha-example");return f(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CHANGE_HEADER_",description:"_A_UI_GROUP_CHANGE_DESCRIPTION_",props:["change","model-value"]},{default:p(()=>[l(n,{change:e.changeModel,"model-value":e.model},null,8,["change","model-value"]),A("div",null,"model: "+P(e.model),1)]),_:1},8,["code-html","code-js"])}const x=m(W,[["render",M]]);function X(){return{codeHtml:`<a-switch
  v-model="model"
  errors="Aloha"
  label="ASwitch"
></a-switch>`}}function Y(){return{codeJs:`import {
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
};`}}const k={name:"PageSwitchErrors",components:{AlohaExample:h,ASwitch:S},setup(){const e=i(!1),{codeHtml:t}=X(),{codeJs:a}=Y();return{codeHtml:t,codeJs:a,model:e}}};function Q(e,t,a,r,_,c){const n=o("a-switch"),d=o("aloha-example");return f(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERRORS_HEADER_",description:"_A_UI_GROUP_ERRORS_DESCRIPTION_",props:["errors","label"]},{default:p(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=s=>e.model=s),errors:"Aloha",label:"ASwitch"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const Z=m(k,[["render",Q]]);function z(){return{codeHtml:`<a-switch
  v-model="model"
  help-text="Aloha"
></a-switch>`}}function K(){return{codeJs:`import {
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
};`}}const ee={name:"PageSwitchHelpText",components:{AlohaExample:h,ASwitch:S},setup(){const e=i(!1),{codeHtml:t}=z(),{codeJs:a}=K();return{codeHtml:t,codeJs:a,model:e}}};function te(e,t,a,r,_,c){const n=o("a-switch"),d=o("aloha-example");return f(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_HELP_TEXT_HEADER_",description:"_A_UI_GROUP_HELP_TEXT_DESCRIPTION_",props:["help-text"]},{default:p(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=s=>e.model=s),"help-text":"Aloha"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const oe=m(ee,[["render",te]]);function ae(){return{codeHtml:`<a-switch
  v-model="model"
  label="ASwitch"
></a-switch>
<a-switch
  v-model="model"
  class="a_mt_3"
  label-screen-reader="ASwitch"
></a-switch>`}}function le(){return{codeJs:`import {
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
};`}}const ne={name:"PageSwitchLabelScreenReader",components:{AlohaExample:h,ASwitch:S},setup(){const e=i(!1),{codeHtml:t}=ae(),{codeJs:a}=le();return{codeHtml:t,codeJs:a,model:e}}};function de(e,t,a,r,_,c){const n=o("a-switch"),d=o("aloha-example");return f(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_SCREEN_READER_HEADER_",description:"_A_UI_GROUP_LABEL_SCREEN_READER_DESCRIPTION_",props:["label-screen-reader"]},{default:p(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=s=>e.model=s),label:"ASwitch"},null,8,["modelValue"]),l(n,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":t[1]||(t[1]=s=>e.model=s),"label-screen-reader":"ASwitch"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const se=m(ne,[["render",de]]);function re(){return{codeHtml:`<a-switch
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
></a-switch>`}}function _e(){return{codeJs:`import {
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
};`}}const ce={name:"PageSwitchReadonly",components:{AlohaExample:h,ASwitch:S},setup(){const e=i(!1),t=i(!0),a=i(void 0),{codeHtml:r}=re(),{codeJs:_}=_e();return{codeHtml:r,codeJs:_,model1:e,model2:t,model3:a}}};function ie(e,t,a,r,_,c){const n=o("a-switch"),d=o("aloha-example");return f(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default"]},{default:p(()=>[l(n,{"model-value":e.model1,readonly:!0,label:"Switch 1"},null,8,["model-value"]),l(n,{class:"a_mt_3","model-value":e.model2,readonly:!0,label:"Switch 2"},null,8,["model-value"]),l(n,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"Switch 3"},null,8,["model-value"]),l(n,{class:"a_mt_3","model-value":e.model3,readonly:!0,"help-text":"Aloha",label:"Switch 4","readonly-default":"-"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const me=m(ce,[["render",ie]]);function ue(){return{codeHtml:`<a-switch
  v-model="model"
  :default-value="null"
  :is-three-state="true"
  default-label="Default"
></a-switch>
<div>model: {{ model }}</div>`}}function pe(){return{codeJs:`import {
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
};`}}const fe={name:"PageSwitchThreeState",components:{AlohaExample:h,ASwitch:S},setup(){const e=i(null),{codeHtml:t}=ue(),{codeJs:a}=pe();return{codeHtml:t,codeJs:a,model:e}}};function he(e,t,a,r,_,c){const n=o("a-switch"),d=o("aloha-example");return f(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SWITCH_GROUP_THREE_STATE_HEADER_",description:"_A_SWITCH_GROUP_THREE_STATE_DESCRIPTION_",props:["is-three-state","default-value","default-label"]},{default:p(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=s=>e.model=s),"default-value":null,"is-three-state":!0,"default-label":"Default"},null,8,["modelValue"]),A("div",null,"model: "+P(e.model),1)]),_:1},8,["code-html","code-js"])}const Se=m(fe,[["render",he]]);function Ae(){return{codeHtml:`<a-switch
  v-model="model"
  :is-title-html="true"
  title="Aloha"
></a-switch>
<a-switch
  v-model="model"
  :is-title-html="false"
  class="a_mt_3"
  title="Aloha"
></a-switch>`}}function Pe(){return{codeJs:`import {
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
};`}}const Ie={name:"PageSwitchTitle",components:{AlohaExample:h,ASwitch:S},setup(){const e=i(0),{codeHtml:t}=Ae(),{codeJs:a}=Pe();return{codeHtml:t,codeJs:a,model:e}}};function Ee(e,t,a,r,_,c){const n=o("a-switch"),d=o("aloha-example");return f(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SWITCH_GROUP_TITLE_HEADER_",description:"_A_SWITCH_GROUP_TITLE_DESCRIPTION_",props:["title","is-title-html"]},{default:p(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=s=>e.model=s),"is-title-html":!0,title:"Aloha"},null,8,["modelValue"]),l(n,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":t[1]||(t[1]=s=>e.model=s),"is-title-html":!1,title:"Aloha"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const Te=m(Ie,[["render",Ee]]);function Re(){return{codeHtml:`<a-switch
  v-model="model"
  false-label="0"
  true-label="1"
></a-switch>`}}function we(){return{codeJs:`import {
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
};`}}const Oe={name:"PageSwitchTrueFalseLabel",components:{AlohaExample:h,ASwitch:S},setup(){const e=i(!1),{codeHtml:t}=Re(),{codeJs:a}=we();return{codeHtml:t,codeJs:a,model:e}}};function ge(e,t,a,r,_,c){const n=o("a-switch"),d=o("aloha-example");return f(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SWITCH_GROUP_TRUE_FALSE_LABEL_HEADER_",description:"_A_SWITCH_GROUP_TRUE_FALSE_LABEL_DESCRIPTION_",props:["false-label","true-label"]},{default:p(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=s=>e.model=s),"false-label":"0","true-label":"1"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const He=m(Oe,[["render",ge]]);function Ue(){return{codeHtml:`<a-switch
  v-model="model"
  :false-value="0"
  :true-value="1"
></a-switch>
<div>model: {{ model }}</div>`}}function Le(){return{codeJs:`import {
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
};`}}const De={name:"PageSwitchTrueFalseValue",components:{AlohaExample:h,ASwitch:S},setup(){const e=i(0),{codeHtml:t}=Ue(),{codeJs:a}=Le();return{codeHtml:t,codeJs:a,model:e}}};function Ce(e,t,a,r,_,c){const n=o("a-switch"),d=o("aloha-example");return f(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SWITCH_GROUP_TRUE_FALSE_VALUE_HEADER_",description:"_A_SWITCH_GROUP_TRUE_FALSE_VALUE_DESCRIPTION_",props:["false-value","true-value"]},{default:p(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=s=>e.model=s),"false-value":0,"true-value":1},null,8,["modelValue"]),A("div",null,"model: "+P(e.model),1)]),_:1},8,["code-html","code-js"])}const Ne=m(De,[["render",Ce]]);function ve(){return{dataEvents:[{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"},{name:"focus",description:"_A_UI_EVENTS_FOCUS_DESCRIPTION_",type:"Function"},{name:"blur",description:"_A_UI_EVENTS_BLUR_DESCRIPTION_",type:"Function"}]}}function $e(){const e=E(()=>b({placeholder:"_A_SWITCH_COMPONENT_NAME_"}));return{pageTitle:E(()=>`ASwitch${e.value?` (${e.value})`:""}`)}}function be(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"default-label",description:"_A_SWITCH_PROPS_DEFAULT_LABEL_DESCRIPTION_",type:"String",default:"_A_SWITCH_DEFAULT_LABEL_",required:!1},{name:"default-value",description:"_A_SWITCH_PROPS_DEFAULT_VALUE_DESCRIPTION_",type:"Boolean / String / Number",default:void 0,required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"false-label",description:"_A_SWITCH_PROPS_FALSE_LABEL_DESCRIPTION_",type:"String",default:"_A_SWITCH_FALSE_LABEL_",required:!1},{name:"false-value",description:"_A_SWITCH_PROPS_FALSE_VALUE_DESCRIPTION_",type:"Boolean / String / Number",default:!1,required:!1},{name:"full-width",description:"_A_SWITCH_PROPS_FULL_WIDTH_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_switch_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"input-attributes",description:"_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"input-class",description:"_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-three-state",description:"_A_SWITCH_PROPS_IS_THREE_STATE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-title-html",description:"_A_GLOBAL_PROPS_IS_TITLE_HTML_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-undefined",description:"_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"Boolean / String / Number",default:void 0,required:!1},{name:"readonly",description:"_A_UI_PROPS_READONLY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"readonly-default",description:"_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_",type:"String",default:"",required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"title",description:"_A_GLOBAL_PROPS_TITLE_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"title-placement",description:"_A_GLOBAL_PROPS_TITLE_PLACEMENT_DESCRIPTION_",type:"String",default:"top",required:!1},{name:"true-label",description:"_A_SWITCH_PROPS_TRUE_LABEL_DESCRIPTION_",type:"String",default:"_A_SWITCH_TRUE_LABEL_",required:!1},{name:"true-value",description:"_A_SWITCH_PROPS_TRUE_VALUE_DESCRIPTION_",type:"Boolean / String / Number",default:!0,required:!1}]}}function ye(){return{dataTranslate:["_A_SWITCH_DEFAULT_LABEL_","_A_SWITCH_FALSE_LABEL_","_A_SWITCH_TRUE_LABEL_"]}}const Je={name:"PageSwitch",components:{AlohaPage:N,AlohaTableProps:v,AlohaTableTranslate:$,ATranslation:y,PageSwitchBasic:j,PageSwitchChange:x,PageSwitchErrors:Z,PageSwitchHelpText:oe,PageSwitchLabelScreenReader:se,PageSwitchReadonly:me,PageSwitchThreeState:Se,PageSwitchTitle:Te,PageSwitchTrueFalseLabel:He,PageSwitchTrueFalseValue:Ne},setup(){const{pageTitle:e}=$e(),{dataProps:t}=be(),{dataTranslate:a}=ye(),{dataEvents:r}=ve();return{dataEvents:r,dataProps:t,dataTranslate:a,pageTitle:e}}};function Ve(e,t,a,r,_,c){const n=o("a-translation"),d=o("page-switch-basic"),s=o("page-switch-change"),T=o("page-switch-help-text"),R=o("page-switch-errors"),w=o("page-switch-label-screen-reader"),O=o("page-switch-true-false-label"),g=o("page-switch-true-false-value"),H=o("page-switch-three-state"),U=o("page-switch-title"),L=o("page-switch-readonly"),I=o("aloha-table-props"),D=o("aloha-table-translate"),C=o("aloha-page");return f(),u(C,{"page-title":e.pageTitle},{body:p(()=>[l(n,{tag:"p",html:"_A_SWITCH_COMPONENT_DESCRIPTION_"}),l(d),l(s),l(T),l(R),l(w),l(O),l(g),l(H),l(U),l(L),l(I,{data:e.dataProps},null,8,["data"]),l(I,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"]),l(D,{data:e.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const ot=m(Je,[["render",Ve]]);export{ot as default};
