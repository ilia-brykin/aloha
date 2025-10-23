import{A as P,a as E}from"./chunk.AlohaExample.v9nUR_ik.js";import{A as T}from"./chunk.AlohaTableProps.hi1nfWQi.js";import{A as U}from"./chunk.AlohaTableTranslate.CncrpYYt.js";import{ae as _,_ as f,A as h}from"./bundle.index.HAsJZXnO.js";import{r as b,V as I,aT as v,e as n,W as A,_ as l,Z as t,aU as r}from"./chunk.vendor.D7UxhUfn.js";import"./chunk.vendor-lodash.BXqI5TOP.js";import{P as H,T as R,a as J,E as D}from"./chunk.TranslateAPI.FZQ3IV3L.js";import"./chunk.APageTabTitle.C0vIrS6v.js";import"./chunk.AlohaHighlightjs.dFk8X2lo.js";import"./chunk.ATable.D2Shwxb8.js";import"./chunk.translations-ar.COHWTLjj.js";import"./chunk.translations-de.CMsDi58c.js";import"./chunk.translations-en.Dg6d-iTX.js";import"./chunk.translations-es.BLJ15RYR.js";import"./chunk.translations-fr.tH5K_M0t.js";import"./chunk.translations-hr.DsOKZruz.js";import"./chunk.translations-it.B_6_ZtEA.js";import"./chunk.translations-ru.BTxZGSVv.js";function O(){return{codeHtml:`<a-input-number
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
<div>model3: {{ model3 }}</div>`}}function B(){return{codeJs:`import {
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
};`}}const C={name:"PageInputNumberBasic",components:{AInputNumber:_,AlohaExample:P},setup(){const e=b(10),o=b(1e4),m=b(10000.98),{codeHtml:d}=O(),{codeJs:p}=B();return{codeHtml:d,codeJs:p,model1:e,model2:o,model3:m}}};function L(e,o,m,d,p,g){const a=n("a-input-number"),s=n("aloha-example");return A(),I(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","label"]},{default:v(()=>[l(a,{modelValue:e.model1,"onUpdate:modelValue":o[0]||(o[0]=u=>e.model1=u),label:"Input 1"},null,8,["modelValue"]),t("div",null,"model1: "+r(e.model1),1),l(a,{modelValue:e.model2,"onUpdate:modelValue":o[1]||(o[1]=u=>e.model2=u),label:"Input 2"},null,8,["modelValue"]),t("div",null,"model2: "+r(e.model2),1),l(a,{modelValue:e.model3,"onUpdate:modelValue":o[2]||(o[2]=u=>e.model3=u),label:"Input 3"},null,8,["modelValue"]),t("div",null,"model3: "+r(e.model3),1)]),_:1},8,["code-html","code-js"])}const S=f(C,[["render",L]]);function j(){return{codeHtml:`<a-input-number
  v-model="model"
  :is-label-float="false"
  label="Input"
  label-description="Aloha"
></a-input-number>
<div>model: {{ model }}</div>`}}function G(){return{codeJs:`import {
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
};`}}const q={name:"PageInputNumberLabelDescription",components:{AInputNumber:_,AlohaExample:P},setup(){const e=b(10),{codeHtml:o}=j(),{codeJs:m}=G();return{codeHtml:o,codeJs:m,model:e}}};function M(e,o,m,d,p,g){const a=n("a-input-number"),s=n("aloha-example");return A(),I(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_",description:"_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_",props:["label-description"]},{default:v(()=>[l(a,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=u=>e.model=u),"is-label-float":!1,label:"Input","label-description":"Aloha"},null,8,["modelValue"]),t("div",null,"model: "+r(e.model),1)]),_:1},8,["code-html","code-js"])}const k=f(q,[["render",M]]);function Y(){return{codeHtml:`<a-input-number
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
></a-input-number>`}}function w(){return{codeJs:`import {
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
};`}}const W={name:"PageInputNumberReadonly",components:{AInputNumber:_,AlohaExample:P},setup(){const e=b(10),o=b(1e4),m=b(void 0),{codeHtml:d}=Y(),{codeJs:p}=w();return{codeHtml:d,codeJs:p,model1:e,model2:o,model3:m}}};function Z(e,o,m,d,p,g){const a=n("a-input-number"),s=n("aloha-example");return A(),I(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default"]},{default:v(()=>[l(a,{"model-value":e.model1,readonly:!0,label:"Input 1"},null,8,["model-value"]),l(a,{class:"a_mt_3","model-value":e.model2,readonly:!0,label:"Input 2"},null,8,["model-value"]),l(a,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"Input 3"},null,8,["model-value"]),l(a,{class:"a_mt_3","model-value":e.model3,readonly:!0,"help-text":"Aloha",label:"Input 4","readonly-default":"-"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const z=f(W,[["render",Z]]),F={name:"PageInputNumber",components:{AInputNumber:_,AlohaPage:E,AlohaTableProps:T,AlohaTableTranslate:U,ATranslation:h,PageInputNumberBasic:S,PageInputNumberLabelDescription:k,PageInputNumberReadonly:z},setup(){const{pageTitle:e}=H(),{dataProps:o}=J(),{dataTranslate:m}=R(),{dataEvents:d}=D();return{dataEvents:d,dataProps:o,dataTranslate:m,pageTitle:e}},data(){return{model1:10,model2:123,model3:321,model4:432}},methods:{changeModel1(e){console.log("arg",e)}}};function K(e,o,m,d,p,g){const a=n("a-translation"),s=n("page-input-number-basic"),u=n("page-input-number-label-description"),N=n("page-input-number-readonly"),y=n("aloha-table-props"),V=n("aloha-table-translate"),c=n("a-input-number"),$=n("aloha-page");return A(),I($,{"page-title":e.pageTitle},{body:v(()=>[l(a,{tag:"p",html:"_A_INPUT_NUMBER_COMPONENT_DESCRIPTION_"}),l(s),l(u),l(N),l(y,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"]),l(V,{data:e.dataTranslate},null,8,["data"]),l(c,{id:"input1",modelValue:e.model1,"onUpdate:modelValue":o[0]||(o[0]=i=>e.model1=i),type:"number",label:"Input langeeeeeeeeeeeeeeeeeee textdffdgfdgdsfdsfdsfdsfdsfdsfsdfsfdd",required:!0,step:2,errors:"not valid"},null,8,["modelValue"]),t("div",null,"model1: "+r(e.model1),1),o[4]||(o[4]=t("h2",null,'type "integerNonNegative"',-1)),l(c,{id:"input2",modelValue:e.model2,"onUpdate:modelValue":o[1]||(o[1]=i=>e.model2=i),type:"integerNonNegative",label:"Input 2",required:!0,step:2,disabled:!0},null,8,["modelValue"]),t("div",null,"model2: "+r(e.model2),1),o[5]||(o[5]=t("h2",null,'type "integerPositive"',-1)),l(c,{id:"input3",modelValue:e.model3,"onUpdate:modelValue":o[2]||(o[2]=i=>e.model3=i),type:"integerPositive",label:"Input 3",required:!0,step:3,"controls-type":"none"},null,8,["modelValue"]),t("div",null,"model3: "+r(e.model3),1),o[6]||(o[6]=t("h2",null,'type "integer"',-1)),l(c,{id:"input4",modelValue:e.model4,"onUpdate:modelValue":o[3]||(o[3]=i=>e.model4=i),type:"integer",label:"Input 4",required:!0,step:4},null,8,["modelValue"]),t("div",null,"model4: "+r(e.model4),1),o[7]||(o[7]=t("input",{type:"number"},null,-1)),o[8]||(o[8]=t("button",{class:"a_btn a_btn_primary"},"Temp",-1))]),_:1},8,["page-title"])}const _e=f(F,[["render",K]]);export{_e as default};
