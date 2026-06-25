import{A as P,a as V}from"./chunk.AlohaExample.-d4xrnrJ.js";import{A as R}from"./chunk.AlohaTableProps.CEeNasf0.js";import{A as U}from"./chunk.AlohaTableTranslate.DKt-IplA.js";import{al as b,_,A as H}from"./bundle.index.BMbHS0r2.js";import{r as i,Y as I,W as f,aU as v,f as l,$ as n,_ as r,aV as s}from"./chunk.vendor.BAXy2grE.js";import"./chunk.vendor-lodash.CCzoES9g.js";import{P as J,T as O,a as T,E as D}from"./chunk.TranslateAPI.CHkAXHvc.js";import"./chunk.APageTabTitle.DuQktD6b.js";import"./chunk.AlohaHighlightjs.BK8yZFUI.js";import"./chunk.ATable.CfA0kccH.js";import"./chunk.translations-ar.B2OoBNnE.js";import"./chunk.translations-de.UgGe9j4v.js";import"./chunk.translations-en.0stqcWf2.js";import"./chunk.translations-es.BwgNL0Sc.js";import"./chunk.translations-fr.C2YYR8Jb.js";import"./chunk.translations-hr.B965uVG9.js";import"./chunk.translations-it.qkDQbydY.js";import"./chunk.translations-ru.x6UIBrxX.js";function C(){return{codeHtml:`<a-input-number
  v-model="model1"
  label="Input 1"
></a-input-number>
<div>model1: {{ model1 }}</div>
<a-input-number
  v-model="model2"
  label="Input 2"
></a-input-number>
<div>model2: {{ model2 }}</div>
<a-input-number
  v-model="model3"
  label="Input 3"
></a-input-number>
<div>model3: {{ model3 }}</div>`}}function w(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AInputNumber,
} from "aloha-vue";
    
export default {
  name: "PageInputNumberBasic",
  components: {
    AInputNumber,
  },
  setup() {
    const model1 = ref(10);
    const model2 = ref(10000);
    const model3 = ref(10000.98);
    
    return {
      model1,
      model2,
      model3,
    };
  },
};`}}const B={name:"PageInputNumberBasic",components:{AInputNumber:b,AlohaExample:P},setup(){const e=i(10),o=i(1e4),t=i(10000.98),{codeHtml:m}=C(),{codeJs:p}=w();return{codeHtml:m,codeJs:p,model1:e,model2:o,model3:t}}};function L(e,o,t,m,p,g){const a=l("a-input-number"),d=l("aloha-example");return I(),f(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","label"]},{default:v(()=>[n(a,{modelValue:e.model1,"onUpdate:modelValue":o[0]||(o[0]=u=>e.model1=u),label:"Input 1"},null,8,["modelValue"]),r("div",null,"model1: "+s(e.model1),1),n(a,{modelValue:e.model2,"onUpdate:modelValue":o[1]||(o[1]=u=>e.model2=u),label:"Input 2"},null,8,["modelValue"]),r("div",null,"model2: "+s(e.model2),1),n(a,{modelValue:e.model3,"onUpdate:modelValue":o[2]||(o[2]=u=>e.model3=u),label:"Input 3"},null,8,["modelValue"]),r("div",null,"model3: "+s(e.model3),1)]),_:1},8,["code-html","code-js"])}const M=_(B,[["render",L]]);function S(){return{codeHtml:`<a-input-number
  v-model="model"
  :error-icon="errorIcon"
  errors="Aloha"
  label="Input number"
></a-input-number>`}}function j(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AInputNumber,
} from "aloha-vue";

export default {
  name: "PageInputNumberErrorIcon",
  components: {
    AInputNumber,
  },
  setup() {
    const model = ref(25);
    const errorIcon = "<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"16\\" height=\\"16\\" fill=\\"currentColor\\" viewBox=\\"0 0 16 16\\"><path d=\\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.93 6.588 8.758 10.042a.5.5 0 0 1-.998 0L7.588 6.588a.5.5 0 1 1 .998 0M8 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2\\"/></svg>";

    return {
      errorIcon,
      model,
    };
  },
};`}}const G={name:"PageInputNumberErrorIcon",components:{AInputNumber:b,AlohaExample:P},setup(){const e=i(25),o='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.93 6.588 8.758 10.042a.5.5 0 0 1-.998 0L7.588 6.588a.5.5 0 1 1 .998 0M8 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>',{codeHtml:t}=S(),{codeJs:m}=j();return{codeHtml:t,codeJs:m,errorIcon:o,model:e}}};function q(e,o,t,m,p,g){const a=l("a-input-number"),d=l("aloha-example");return I(),f(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERROR_ICON_HEADER_",description:"_A_UI_GROUP_ERROR_ICON_DESCRIPTION_",props:["errors","error-icon"]},{default:v(()=>[n(a,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=u=>e.model=u),"error-icon":e.errorIcon,errors:"Aloha",label:"Input number"},null,8,["modelValue","error-icon"])]),_:1},8,["code-html","code-js"])}const Y=_(G,[["render",q]]);function k(){return{codeHtml:`<a-input-number
  v-model="model"
  :is-label-float="false"
  label="Input"
  label-description="Aloha"
></a-input-number>
<div>model: {{ model }}</div>`}}function W(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AInputNumber,
} from "aloha-vue";
    
export default {
  name: "PageInputNumberLabelDescription",
  components: {
    AInputNumber,
  },
  setup() {
    const model = ref(10);
    
    return {
      model,
    };
  },
};`}}const z={name:"PageInputNumberLabelDescription",components:{AInputNumber:b,AlohaExample:P},setup(){const e=i(10),{codeHtml:o}=k(),{codeJs:t}=W();return{codeHtml:o,codeJs:t,model:e}}};function F(e,o,t,m,p,g){const a=l("a-input-number"),d=l("aloha-example");return I(),f(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_",description:"_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_",props:["label-description"]},{default:v(()=>[n(a,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=u=>e.model=u),"is-label-float":!1,label:"Input","label-description":"Aloha"},null,8,["modelValue"]),r("div",null,"model: "+s(e.model),1)]),_:1},8,["code-html","code-js"])}const K=_(z,[["render",F]]);function Q(){return{codeHtml:`<a-input-number
  :model-value="model1"
  :readonly="true"
  label="Input 1"
></a-input-number>
<a-input-number
  :model-value="model2"
  :readonly="true"
  class="a_mt_3"
  label="Input 2"
></a-input-number>
<a-input-number
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  label="Input 3"
></a-input-number>
<a-input-number
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  help-text="Aloha"
  label="Input 4"
  readonly-default="-"
></a-input-number>`}}function X(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AInputNumber,
} from "aloha-vue";
    
export default {
  name: "PageInputNumberReadonly",
  components: {
    AInputNumber,
  },
  setup() {
    const model1 = ref(10);
    const model2 = ref(10000);
    const model3 = ref(undefined);
    
    return {
      model1,
      model2,
      model3,
    };
  },
};`}}const Z={name:"PageInputNumberReadonly",components:{AInputNumber:b,AlohaExample:P},setup(){const e=i(10),o=i(1e4),t=i(void 0),{codeHtml:m}=Q(),{codeJs:p}=X();return{codeHtml:m,codeJs:p,model1:e,model2:o,model3:t}}};function x(e,o,t,m,p,g){const a=l("a-input-number"),d=l("aloha-example");return I(),f(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default"]},{default:v(()=>[n(a,{"model-value":e.model1,readonly:!0,label:"Input 1"},null,8,["model-value"]),n(a,{class:"a_mt_3","model-value":e.model2,readonly:!0,label:"Input 2"},null,8,["model-value"]),n(a,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"Input 3"},null,8,["model-value"]),n(a,{class:"a_mt_3","model-value":e.model3,readonly:!0,"help-text":"Aloha",label:"Input 4","readonly-default":"-"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const ee=_(Z,[["render",x]]),oe={name:"PageInputNumber",components:{AInputNumber:b,AlohaPage:V,AlohaTableProps:R,AlohaTableTranslate:U,ATranslation:H,PageInputNumberBasic:M,PageInputNumberErrorIcon:Y,PageInputNumberLabelDescription:K,PageInputNumberReadonly:ee},setup(){const{pageTitle:e}=J(),{dataProps:o}=T(),{dataTranslate:t}=O(),{dataEvents:m}=D();return{dataEvents:m,dataProps:o,dataTranslate:t,pageTitle:e}},data(){return{model1:10,model2:123,model3:321,model4:432}},methods:{changeModel1(e){console.log("arg",e)}}};function ne(e,o,t,m,p,g){const a=l("a-translation"),d=l("page-input-number-basic"),u=l("page-input-number-error-icon"),N=l("page-input-number-label-description"),h=l("page-input-number-readonly"),$=l("aloha-table-props"),y=l("aloha-table-translate"),A=l("a-input-number"),E=l("aloha-page");return I(),f(E,{"page-title":e.pageTitle},{body:v(()=>[n(a,{tag:"p",html:"_A_INPUT_NUMBER_COMPONENT_DESCRIPTION_"}),n(d),n(u),n(N),n(h),n($,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"]),n(y,{data:e.dataTranslate},null,8,["data"]),n(A,{id:"input1",modelValue:e.model1,"onUpdate:modelValue":o[0]||(o[0]=c=>e.model1=c),type:"number",label:"Input langeeeeeeeeeeeeeeeeeee textdffdgfdgdsfdsfdsfdsfdsfdsfsdfsfdd",required:!0,step:2,errors:"not valid"},null,8,["modelValue"]),r("div",null,"model1: "+s(e.model1),1),o[4]||(o[4]=r("h2",null,'type "integerNonNegative"',-1)),n(A,{id:"input2",modelValue:e.model2,"onUpdate:modelValue":o[1]||(o[1]=c=>e.model2=c),type:"integerNonNegative",label:"Input 2",required:!0,step:2,disabled:!0},null,8,["modelValue"]),r("div",null,"model2: "+s(e.model2),1),o[5]||(o[5]=r("h2",null,'type "integerPositive"',-1)),n(A,{id:"input3",modelValue:e.model3,"onUpdate:modelValue":o[2]||(o[2]=c=>e.model3=c),type:"integerPositive",label:"Input 3",required:!0,step:3,"controls-type":"none"},null,8,["modelValue"]),r("div",null,"model3: "+s(e.model3),1),o[6]||(o[6]=r("h2",null,'type "integer"',-1)),n(A,{id:"input4",modelValue:e.model4,"onUpdate:modelValue":o[3]||(o[3]=c=>e.model4=c),type:"integer",label:"Input 4",required:!0,step:4},null,8,["modelValue"]),r("div",null,"model4: "+s(e.model4),1),o[7]||(o[7]=r("input",{type:"number"},null,-1)),o[8]||(o[8]=r("button",{class:"a_btn a_btn_primary"},"Temp",-1))]),_:1},8,["page-title"])}const Pe=_(oe,[["render",ne]]);export{Pe as default};
