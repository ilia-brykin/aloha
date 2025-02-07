import{a as f,_ as i,g as D,A as N}from"./bundle.index.BBIMvqHY.js";import{r as S,O as m,aR as u,b as o,Q as p,V as l,U as A,aS as P,a as I}from"./chunk.vendor.CjhiT8UL.js";import"./chunk.vendor-lodash.DyQEPI1B.js";import{A as h,a as $}from"./chunk.AlohaExample.DyGlJAKb.js";import{A as v}from"./chunk.AlohaTableProps.DdZyVSou.js";import{A as b}from"./chunk.AlohaTableTranslate.FWJN5X4x.js";import"./chunk.translations-ar.DWwaQC1L.js";import"./chunk.translations-de.Bm_NRjKi.js";import"./chunk.translations-en.CfLmKpaQ.js";import"./chunk.translations-es.C_tSILxJ.js";import"./chunk.translations-fr.acyQpqB8.js";import"./chunk.translations-hr.wGAqklkF.js";import"./chunk.translations-it.CSGg6_Uy.js";import"./chunk.translations-ru.VBYVnDIE.js";import"./chunk.APageTabTitle.B8oRDfz3.js";import"./chunk.AlohaHighlightjs.rF1jvLhM.js";import"./chunk.ATable.CZ3i1xXH.js";function V(){return{codeHtml:`<a-switch
  v-model="model"
></a-switch>
<div>model: {{ model }}</div>`}}function y(){return{codeJs:`import {
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
};`}}const J={name:"PageSwitchBasic",components:{AlohaExample:h,ASwitch:f},setup(){const e=S(!1),{codeHtml:t}=V(),{codeJs:a}=y();return{codeHtml:t,codeJs:a,model:e}}};function B(e,t,a,d,_,c){const n=o("a-switch"),r=o("aloha-example");return p(),m(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value"]},{default:u(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=s=>e.model=s)},null,8,["modelValue"]),A("div",null,"model: "+P(e.model),1)]),_:1},8,["code-html","code-js"])}const q=i(J,[["render",B]]);function j(){return{codeHtml:`<a-switch
  :change="changeModel"
  :model-value="model"
></a-switch>
<div>model: {{ model }}</div>`}}function F(){return{codeJs:`import {
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
};`}}const W={name:"PageSwitchChange",components:{AlohaExample:h,ASwitch:f},setup(){const e=S(!1),t=({model:_,id:c,props:n})=>{e.value=_,console.log(c,n)},{codeHtml:a}=j(),{codeJs:d}=F();return{changeModel:t,codeHtml:a,codeJs:d,model:e}}};function G(e,t,a,d,_,c){const n=o("a-switch"),r=o("aloha-example");return p(),m(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CHANGE_HEADER_",description:"_A_UI_GROUP_CHANGE_DESCRIPTION_",props:["change","model-value"]},{default:u(()=>[l(n,{change:e.changeModel,"model-value":e.model},null,8,["change","model-value"]),A("div",null,"model: "+P(e.model),1)]),_:1},8,["code-html","code-js"])}const M=i(W,[["render",G]]);function x(){return{codeHtml:`<a-switch
  v-model="model"
  errors="Aloha"
  label="ASwitch"
></a-switch>`}}function X(){return{codeJs:`import {
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
};`}}const k={name:"PageSwitchErrors",components:{AlohaExample:h,ASwitch:f},setup(){const e=S(!1),{codeHtml:t}=x(),{codeJs:a}=X();return{codeHtml:t,codeJs:a,model:e}}};function Q(e,t,a,d,_,c){const n=o("a-switch"),r=o("aloha-example");return p(),m(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERRORS_HEADER_",description:"_A_UI_GROUP_ERRORS_DESCRIPTION_",props:["errors","label"]},{default:u(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=s=>e.model=s),errors:"Aloha",label:"ASwitch"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const Y=i(k,[["render",Q]]);function z(){return{codeHtml:`<a-switch
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
};`}}const Z={name:"PageSwitchHelpText",components:{AlohaExample:h,ASwitch:f},setup(){const e=S(!1),{codeHtml:t}=z(),{codeJs:a}=K();return{codeHtml:t,codeJs:a,model:e}}};function ee(e,t,a,d,_,c){const n=o("a-switch"),r=o("aloha-example");return p(),m(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_HELP_TEXT_HEADER_",description:"_A_UI_GROUP_HELP_TEXT_DESCRIPTION_",props:["help-text"]},{default:u(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=s=>e.model=s),"help-text":"Aloha"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const te=i(Z,[["render",ee]]);function oe(){return{codeHtml:`<a-switch
  v-model="model"
  label="ASwitch"
></a-switch>
<a-switch
  v-model="model"
  class="a_mt_3"
  label-screen-reader="ASwitch"
></a-switch>`}}function ae(){return{codeJs:`import {
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
};`}}const le={name:"PageSwitchLabelScreenReader",components:{AlohaExample:h,ASwitch:f},setup(){const e=S(!1),{codeHtml:t}=oe(),{codeJs:a}=ae();return{codeHtml:t,codeJs:a,model:e}}};function ne(e,t,a,d,_,c){const n=o("a-switch"),r=o("aloha-example");return p(),m(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_SCREEN_READER_HEADER_",description:"_A_UI_GROUP_LABEL_SCREEN_READER_DESCRIPTION_",props:["label-screen-reader"]},{default:u(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=s=>e.model=s),label:"ASwitch"},null,8,["modelValue"]),l(n,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":t[1]||(t[1]=s=>e.model=s),"label-screen-reader":"ASwitch"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const se=i(le,[["render",ne]]);function re(){return{codeHtml:`<a-switch
  v-model="model"
  :default-value="null"
  :is-three-state="true"
  default-label="Default"
></a-switch>
<div>model: {{ model }}</div>`}}function de(){return{codeJs:`import {
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
};`}}const _e={name:"PageSwitchThreeState",components:{AlohaExample:h,ASwitch:f},setup(){const e=S(null),{codeHtml:t}=re(),{codeJs:a}=de();return{codeHtml:t,codeJs:a,model:e}}};function ce(e,t,a,d,_,c){const n=o("a-switch"),r=o("aloha-example");return p(),m(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SWITCH_GROUP_THREE_STATE_HEADER_",description:"_A_SWITCH_GROUP_THREE_STATE_DESCRIPTION_",props:["is-three-state","default-value","default-label"]},{default:u(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=s=>e.model=s),"default-value":null,"is-three-state":!0,"default-label":"Default"},null,8,["modelValue"]),A("div",null,"model: "+P(e.model),1)]),_:1},8,["code-html","code-js"])}const ie=i(_e,[["render",ce]]);function me(){return{codeHtml:`<a-switch
  v-model="model"
  :is-title-html="true"
  title="Aloha"
></a-switch>
<a-switch
  v-model="model"
  :is-title-html="false"
  class="a_mt_3"
  title="Aloha"
></a-switch>`}}function ue(){return{codeJs:`import {
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
};`}}const pe={name:"PageSwitchTitle",components:{AlohaExample:h,ASwitch:f},setup(){const e=S(0),{codeHtml:t}=me(),{codeJs:a}=ue();return{codeHtml:t,codeJs:a,model:e}}};function fe(e,t,a,d,_,c){const n=o("a-switch"),r=o("aloha-example");return p(),m(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SWITCH_GROUP_TITLE_HEADER_",description:"_A_SWITCH_GROUP_TITLE_DESCRIPTION_",props:["title","is-title-html"]},{default:u(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=s=>e.model=s),"is-title-html":!0,title:"Aloha"},null,8,["modelValue"]),l(n,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":t[1]||(t[1]=s=>e.model=s),"is-title-html":!1,title:"Aloha"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const Se=i(pe,[["render",fe]]);function he(){return{codeHtml:`<a-switch
  v-model="model"
  false-label="0"
  true-label="1"
></a-switch>`}}function Ae(){return{codeJs:`import {
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
};`}}const Pe={name:"PageSwitchTrueFalseLabel",components:{AlohaExample:h,ASwitch:f},setup(){const e=S(!1),{codeHtml:t}=he(),{codeJs:a}=Ae();return{codeHtml:t,codeJs:a,model:e}}};function Ee(e,t,a,d,_,c){const n=o("a-switch"),r=o("aloha-example");return p(),m(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SWITCH_GROUP_TRUE_FALSE_LABEL_HEADER_",description:"_A_SWITCH_GROUP_TRUE_FALSE_LABEL_DESCRIPTION_",props:["false-label","true-label"]},{default:u(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=s=>e.model=s),"false-label":"0","true-label":"1"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const Ie=i(Pe,[["render",Ee]]);function Te(){return{codeHtml:`<a-switch
  v-model="model"
  :false-value="0"
  :true-value="1"
></a-switch>
<div>model: {{ model }}</div>`}}function Re(){return{codeJs:`import {
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
};`}}const Oe={name:"PageSwitchTrueFalseValue",components:{AlohaExample:h,ASwitch:f},setup(){const e=S(0),{codeHtml:t}=Te(),{codeJs:a}=Re();return{codeHtml:t,codeJs:a,model:e}}};function we(e,t,a,d,_,c){const n=o("a-switch"),r=o("aloha-example");return p(),m(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SWITCH_GROUP_TRUE_FALSE_VALUE_HEADER_",description:"_A_SWITCH_GROUP_TRUE_FALSE_VALUE_DESCRIPTION_",props:["false-value","true-value"]},{default:u(()=>[l(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=s=>e.model=s),"false-value":0,"true-value":1},null,8,["modelValue"]),A("div",null,"model: "+P(e.model),1)]),_:1},8,["code-html","code-js"])}const ge=i(Oe,[["render",we]]);function He(){return{dataEvents:[{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"},{name:"focus",description:"_A_UI_EVENTS_FOCUS_DESCRIPTION_",type:"Function"},{name:"blur",description:"_A_UI_EVENTS_BLUR_DESCRIPTION_",type:"Function"}]}}function Ce(){const e=I(()=>D({placeholder:"_A_SWITCH_COMPONENT_NAME_"}));return{pageTitle:I(()=>`ASwitch${e.value?` (${e.value})`:""}`)}}function Le(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"default-label",description:"_A_SWITCH_PROPS_DEFAULT_LABEL_DESCRIPTION_",type:"String",default:"_A_SWITCH_DEFAULT_LABEL_",required:!1},{name:"default-value",description:"_A_SWITCH_PROPS_DEFAULT_VALUE_DESCRIPTION_",type:"Boolean / String / Number",default:void 0,required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"false-label",description:"_A_SWITCH_PROPS_FALSE_LABEL_DESCRIPTION_",type:"String",default:"_A_SWITCH_FALSE_LABEL_",required:!1},{name:"false-value",description:"_A_SWITCH_PROPS_FALSE_VALUE_DESCRIPTION_",type:"Boolean / String / Number",default:!1,required:!1},{name:"full-width",description:"_A_SWITCH_PROPS_FULL_WIDTH_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_switch_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"input-attributes",description:"_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"input-class",description:"_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-three-state",description:"_A_SWITCH_PROPS_IS_THREE_STATE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-title-html",description:"_A_GLOBAL_PROPS_IS_TITLE_HTML_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-undefined",description:"_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"Boolean / String / Number",default:void 0,required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"title",description:"_A_GLOBAL_PROPS_TITLE_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"title-placement",description:"_A_GLOBAL_PROPS_TITLE_PLACEMENT_DESCRIPTION_",type:"String",default:"top",required:!1},{name:"true-label",description:"_A_SWITCH_PROPS_TRUE_LABEL_DESCRIPTION_",type:"String",default:"_A_SWITCH_TRUE_LABEL_",required:!1},{name:"true-value",description:"_A_SWITCH_PROPS_TRUE_VALUE_DESCRIPTION_",type:"Boolean / String / Number",default:!0,required:!1}]}}function Ue(){return{dataTranslate:["_A_SWITCH_DEFAULT_LABEL_","_A_SWITCH_FALSE_LABEL_","_A_SWITCH_TRUE_LABEL_"]}}const De={name:"PageSwitch",components:{AlohaPage:$,AlohaTableProps:v,AlohaTableTranslate:b,ATranslation:N,PageSwitchBasic:q,PageSwitchChange:M,PageSwitchErrors:Y,PageSwitchHelpText:te,PageSwitchLabelScreenReader:se,PageSwitchThreeState:ie,PageSwitchTitle:Se,PageSwitchTrueFalseLabel:Ie,PageSwitchTrueFalseValue:ge},setup(){const{pageTitle:e}=Ce(),{dataProps:t}=Le(),{dataTranslate:a}=Ue(),{dataEvents:d}=He();return{dataEvents:d,dataProps:t,dataTranslate:a,pageTitle:e}}};function Ne(e,t,a,d,_,c){const n=o("a-translation"),r=o("page-switch-basic"),s=o("page-switch-change"),T=o("page-switch-help-text"),R=o("page-switch-errors"),O=o("page-switch-label-screen-reader"),w=o("page-switch-true-false-label"),g=o("page-switch-true-false-value"),H=o("page-switch-three-state"),C=o("page-switch-title"),E=o("aloha-table-props"),L=o("aloha-table-translate"),U=o("aloha-page");return p(),m(U,{"page-title":e.pageTitle},{body:u(()=>[l(n,{tag:"p",html:"_A_SWITCH_COMPONENT_DESCRIPTION_"}),l(r),l(s),l(T),l(R),l(O),l(w),l(g),l(H),l(C),l(E,{data:e.dataProps},null,8,["data"]),l(E,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"]),l(L,{data:e.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const Ye=i(De,[["render",Ne]]);export{Ye as default};
