import{A as f,a as $}from"./chunk.AlohaExample.DHlzmucl.js";import{A as v}from"./chunk.AlohaTableProps.DYV-7ECi.js";import{A as b}from"./chunk.AlohaTableTranslate.DaEWTzw8.js";import{a as S,_ as m,g as y,A as J}from"./bundle.index.3zGyH1MQ.js";import{r as i,V as u,aT as p,e as o,W as h,_ as l,Z as A,aU as P,d as E}from"./chunk.vendor.BAPLGb06.js";import"./chunk.vendor-lodash.CStjNiQe.js";import"./chunk.APageTabTitle.B43eMfkP.js";import"./chunk.AlohaHighlightjs.BZkAdeSp.js";import"./chunk.ATable.BNTmC9NZ.js";import"./chunk.translations-ar.BiLIUuBX.js";import"./chunk.translations-de.fV51pdAO.js";import"./chunk.translations-en.CWj0a7ej.js";import"./chunk.translations-es.D-4cj_p_.js";import"./chunk.translations-fr.LwkSu7L_.js";import"./chunk.translations-hr.G7gNG4Fu.js";import"./chunk.translations-it.BilXvddc.js";import"./chunk.translations-ru.XOcS94ap.js";function V(){return{codeHtml:`<a-switch
  v-model="model"
></a-switch>
<div>model: {{ model }}</div>`}}function B(){return{codeJs:`import {
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
};`}}const q={name:"PageSwitchBasic",components:{AlohaExample:f,ASwitch:S},setup(){const e=i(!1),{codeHtml:t}=V(),{codeJs:a}=B();return{codeHtml:t,codeJs:a,model:e}}};function j(e,t,a,r,c,_){const n=o("a-switch"),d=o("aloha-example");return h(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value"]},{default:p(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=s=>e.model=s)},null,8,["modelValue"]),A("div",null,"model: "+P(e.model),1)]),_:1},8,["code-html","code-js"])}const G=m(q,[["render",j]]);function F(){return{codeHtml:`<a-switch
  :change="changeModel"
  :model-value="model"
></a-switch>
<div>model: {{ model }}</div>`}}function W(){return{codeJs:`import {
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
};`}}const M={name:"PageSwitchChange",components:{AlohaExample:f,ASwitch:S},setup(){const e=i(!1),t=({model:c,id:_,props:n})=>{e.value=c,console.log(_,n)},{codeHtml:a}=F(),{codeJs:r}=W();return{changeModel:t,codeHtml:a,codeJs:r,model:e}}};function x(e,t,a,r,c,_){const n=o("a-switch"),d=o("aloha-example");return h(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CHANGE_HEADER_",description:"_A_UI_GROUP_CHANGE_DESCRIPTION_",props:["change","model-value"]},{default:p(()=>[l(n,{change:e.changeModel,"model-value":e.model},null,8,["change","model-value"]),A("div",null,"model: "+P(e.model),1)]),_:1},8,["code-html","code-js"])}const X=m(M,[["render",x]]);function Y(){return{codeHtml:`<a-switch
  v-model="model"
  errors="Aloha"
  label="ASwitch"
></a-switch>`}}function k(){return{codeJs:`import {
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
};`}}const Q={name:"PageSwitchErrors",components:{AlohaExample:f,ASwitch:S},setup(){const e=i(!1),{codeHtml:t}=Y(),{codeJs:a}=k();return{codeHtml:t,codeJs:a,model:e}}};function Z(e,t,a,r,c,_){const n=o("a-switch"),d=o("aloha-example");return h(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERRORS_HEADER_",description:"_A_UI_GROUP_ERRORS_DESCRIPTION_",props:["errors","label"]},{default:p(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=s=>e.model=s),errors:"Aloha",label:"ASwitch"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const z=m(Q,[["render",Z]]);function K(){return{codeHtml:`<a-switch
  v-model="model"
  help-text="Aloha"
></a-switch>`}}function ee(){return{codeJs:`import {
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
};`}}const te={name:"PageSwitchHelpText",components:{AlohaExample:f,ASwitch:S},setup(){const e=i(!1),{codeHtml:t}=K(),{codeJs:a}=ee();return{codeHtml:t,codeJs:a,model:e}}};function oe(e,t,a,r,c,_){const n=o("a-switch"),d=o("aloha-example");return h(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_HELP_TEXT_HEADER_",description:"_A_UI_GROUP_HELP_TEXT_DESCRIPTION_",props:["help-text"]},{default:p(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=s=>e.model=s),"help-text":"Aloha"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const ae=m(te,[["render",oe]]);function le(){return{codeHtml:`<a-switch
  v-model="model"
  label="Switch"
  label-description="Aloha"
></a-switch>`}}function ne(){return{codeJs:`import {
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
};`}}const de={name:"PageSwitchLabelDescription",components:{AlohaExample:f,ASwitch:S},setup(){const e=i(!1),{codeHtml:t}=le(),{codeJs:a}=ne();return{codeHtml:t,codeJs:a,model:e}}};function se(e,t,a,r,c,_){const n=o("a-switch"),d=o("aloha-example");return h(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_",description:"_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_",props:["label-description"]},{default:p(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=s=>e.model=s),label:"Switch","label-description":"Aloha"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const re=m(de,[["render",se]]);function ce(){return{codeHtml:`<a-switch
  v-model="model"
  label="ASwitch"
></a-switch>
<a-switch
  v-model="model"
  class="a_mt_3"
  label-screen-reader="ASwitch"
></a-switch>`}}function _e(){return{codeJs:`import {
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
};`}}const ie={name:"PageSwitchLabelScreenReader",components:{AlohaExample:f,ASwitch:S},setup(){const e=i(!1),{codeHtml:t}=ce(),{codeJs:a}=_e();return{codeHtml:t,codeJs:a,model:e}}};function me(e,t,a,r,c,_){const n=o("a-switch"),d=o("aloha-example");return h(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_SCREEN_READER_HEADER_",description:"_A_UI_GROUP_LABEL_SCREEN_READER_DESCRIPTION_",props:["label-screen-reader"]},{default:p(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=s=>e.model=s),label:"ASwitch"},null,8,["modelValue"]),l(n,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":t[1]||(t[1]=s=>e.model=s),"label-screen-reader":"ASwitch"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const ue=m(ie,[["render",me]]);function pe(){return{codeHtml:`<a-switch
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
></a-switch>`}}function he(){return{codeJs:`import {
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
};`}}const fe={name:"PageSwitchReadonly",components:{AlohaExample:f,ASwitch:S},setup(){const e=i(!1),t=i(!0),a=i(void 0),{codeHtml:r}=pe(),{codeJs:c}=he();return{codeHtml:r,codeJs:c,model1:e,model2:t,model3:a}}};function Se(e,t,a,r,c,_){const n=o("a-switch"),d=o("aloha-example");return h(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default"]},{default:p(()=>[l(n,{"model-value":e.model1,readonly:!0,label:"Switch 1"},null,8,["model-value"]),l(n,{class:"a_mt_3","model-value":e.model2,readonly:!0,label:"Switch 2"},null,8,["model-value"]),l(n,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"Switch 3"},null,8,["model-value"]),l(n,{class:"a_mt_3","model-value":e.model3,readonly:!0,"help-text":"Aloha",label:"Switch 4","readonly-default":"-"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const Ae=m(fe,[["render",Se]]);function Pe(){return{codeHtml:`<a-switch
  v-model="model"
  :default-value="null"
  :is-three-state="true"
  default-label="Default"
></a-switch>
<div>model: {{ model }}</div>`}}function Ie(){return{codeJs:`import {
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
};`}}const Ee={name:"PageSwitchThreeState",components:{AlohaExample:f,ASwitch:S},setup(){const e=i(null),{codeHtml:t}=Pe(),{codeJs:a}=Ie();return{codeHtml:t,codeJs:a,model:e}}};function Re(e,t,a,r,c,_){const n=o("a-switch"),d=o("aloha-example");return h(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SWITCH_GROUP_THREE_STATE_HEADER_",description:"_A_SWITCH_GROUP_THREE_STATE_DESCRIPTION_",props:["is-three-state","default-value","default-label"]},{default:p(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=s=>e.model=s),"default-value":null,"is-three-state":!0,"default-label":"Default"},null,8,["modelValue"]),A("div",null,"model: "+P(e.model),1)]),_:1},8,["code-html","code-js"])}const Te=m(Ee,[["render",Re]]);function we(){return{codeHtml:`<a-switch
  v-model="model"
  :is-title-html="true"
  title="Aloha"
></a-switch>
<a-switch
  v-model="model"
  :is-title-html="false"
  class="a_mt_3"
  title="Aloha"
></a-switch>`}}function Oe(){return{codeJs:`import {
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
};`}}const ge={name:"PageSwitchTitle",components:{AlohaExample:f,ASwitch:S},setup(){const e=i(0),{codeHtml:t}=we(),{codeJs:a}=Oe();return{codeHtml:t,codeJs:a,model:e}}};function He(e,t,a,r,c,_){const n=o("a-switch"),d=o("aloha-example");return h(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SWITCH_GROUP_TITLE_HEADER_",description:"_A_SWITCH_GROUP_TITLE_DESCRIPTION_",props:["title","is-title-html"]},{default:p(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=s=>e.model=s),"is-title-html":!0,title:"Aloha"},null,8,["modelValue"]),l(n,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":t[1]||(t[1]=s=>e.model=s),"is-title-html":!1,title:"Aloha"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const Le=m(ge,[["render",He]]);function De(){return{codeHtml:`<a-switch
  v-model="model"
  false-label="0"
  true-label="1"
></a-switch>`}}function Ue(){return{codeJs:`import {
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
};`}}const Ce={name:"PageSwitchTrueFalseLabel",components:{AlohaExample:f,ASwitch:S},setup(){const e=i(!1),{codeHtml:t}=De(),{codeJs:a}=Ue();return{codeHtml:t,codeJs:a,model:e}}};function Ne(e,t,a,r,c,_){const n=o("a-switch"),d=o("aloha-example");return h(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SWITCH_GROUP_TRUE_FALSE_LABEL_HEADER_",description:"_A_SWITCH_GROUP_TRUE_FALSE_LABEL_DESCRIPTION_",props:["false-label","true-label"]},{default:p(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=s=>e.model=s),"false-label":"0","true-label":"1"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const $e=m(Ce,[["render",Ne]]);function ve(){return{codeHtml:`<a-switch
  v-model="model"
  :false-value="0"
  :true-value="1"
></a-switch>
<div>model: {{ model }}</div>`}}function be(){return{codeJs:`import {
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
};`}}const ye={name:"PageSwitchTrueFalseValue",components:{AlohaExample:f,ASwitch:S},setup(){const e=i(0),{codeHtml:t}=ve(),{codeJs:a}=be();return{codeHtml:t,codeJs:a,model:e}}};function Je(e,t,a,r,c,_){const n=o("a-switch"),d=o("aloha-example");return h(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SWITCH_GROUP_TRUE_FALSE_VALUE_HEADER_",description:"_A_SWITCH_GROUP_TRUE_FALSE_VALUE_DESCRIPTION_",props:["false-value","true-value"]},{default:p(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=s=>e.model=s),"false-value":0,"true-value":1},null,8,["modelValue"]),A("div",null,"model: "+P(e.model),1)]),_:1},8,["code-html","code-js"])}const Ve=m(ye,[["render",Je]]);function Be(){return{dataEvents:[{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"},{name:"focus",description:"_A_UI_EVENTS_FOCUS_DESCRIPTION_",type:"Function"},{name:"blur",description:"_A_UI_EVENTS_BLUR_DESCRIPTION_",type:"Function"}]}}function qe(){const e=E(()=>y({placeholder:"_A_SWITCH_COMPONENT_NAME_"}));return{pageTitle:E(()=>`ASwitch${e.value?` (${e.value})`:""}`)}}function je(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"default-label",description:"_A_SWITCH_PROPS_DEFAULT_LABEL_DESCRIPTION_",type:"String",default:"_A_SWITCH_DEFAULT_LABEL_",required:!1},{name:"default-value",description:"_A_SWITCH_PROPS_DEFAULT_VALUE_DESCRIPTION_",type:"Boolean / String / Number",default:void 0,required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"false-label",description:"_A_SWITCH_PROPS_FALSE_LABEL_DESCRIPTION_",type:"String",default:"_A_SWITCH_FALSE_LABEL_",required:!1},{name:"false-value",description:"_A_SWITCH_PROPS_FALSE_VALUE_DESCRIPTION_",type:"Boolean / String / Number",default:!1,required:!1},{name:"full-width",description:"_A_SWITCH_PROPS_FULL_WIDTH_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_switch_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"input-attributes",description:"_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"input-class",description:"_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-three-state",description:"_A_SWITCH_PROPS_IS_THREE_STATE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-title-html",description:"_A_GLOBAL_PROPS_IS_TITLE_HTML_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-description",description:"_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-undefined",description:"_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"Boolean / String / Number",default:void 0,required:!1},{name:"readonly",description:"_A_UI_PROPS_READONLY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"readonly-default",description:"_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_",type:"String",default:"",required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"title",description:"_A_GLOBAL_PROPS_TITLE_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"title-placement",description:"_A_GLOBAL_PROPS_TITLE_PLACEMENT_DESCRIPTION_",type:"String",default:"top",required:!1},{name:"true-label",description:"_A_SWITCH_PROPS_TRUE_LABEL_DESCRIPTION_",type:"String",default:"_A_SWITCH_TRUE_LABEL_",required:!1},{name:"true-value",description:"_A_SWITCH_PROPS_TRUE_VALUE_DESCRIPTION_",type:"Boolean / String / Number",default:!0,required:!1}]}}function Ge(){return{dataTranslate:["_A_SWITCH_DEFAULT_LABEL_","_A_SWITCH_FALSE_LABEL_","_A_SWITCH_TRUE_LABEL_"]}}const Fe={name:"PageSwitch",components:{AlohaPage:$,AlohaTableProps:v,AlohaTableTranslate:b,ATranslation:J,PageSwitchBasic:G,PageSwitchChange:X,PageSwitchErrors:z,PageSwitchHelpText:ae,PageSwitchLabelDescription:re,PageSwitchLabelScreenReader:ue,PageSwitchReadonly:Ae,PageSwitchThreeState:Te,PageSwitchTitle:Le,PageSwitchTrueFalseLabel:$e,PageSwitchTrueFalseValue:Ve},setup(){const{pageTitle:e}=qe(),{dataProps:t}=je(),{dataTranslate:a}=Ge(),{dataEvents:r}=Be();return{dataEvents:r,dataProps:t,dataTranslate:a,pageTitle:e}}};function We(e,t,a,r,c,_){const n=o("a-translation"),d=o("page-switch-basic"),s=o("page-switch-change"),R=o("page-switch-help-text"),T=o("page-switch-errors"),w=o("page-switch-label-description"),O=o("page-switch-label-screen-reader"),g=o("page-switch-true-false-label"),H=o("page-switch-true-false-value"),L=o("page-switch-three-state"),D=o("page-switch-title"),U=o("page-switch-readonly"),I=o("aloha-table-props"),C=o("aloha-table-translate"),N=o("aloha-page");return h(),u(N,{"page-title":e.pageTitle},{body:p(()=>[l(n,{tag:"p",html:"_A_SWITCH_COMPONENT_DESCRIPTION_"}),l(d),l(s),l(R),l(T),l(w),l(O),l(g),l(H),l(L),l(D),l(U),l(I,{data:e.dataProps},null,8,["data"]),l(I,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"]),l(C,{data:e.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const rt=m(Fe,[["render",We]]);export{rt as default};
