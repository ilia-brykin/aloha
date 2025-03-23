import{A as y,a as $}from"./chunk.AlohaExample.FXulhKLv.js";import{A as T}from"./chunk.AlohaTableProps.DTQQdQbF.js";import{A as E}from"./chunk.AlohaTableTranslate.BfnkABTd.js";import{X as I,_ as c,A as U}from"./bundle.index.Dg3km1_u.js";import{r as i,R as v,aR as _,e as t,U as g,Y as l,W as n,aS as p}from"./chunk.vendor.CDkHfsNc.js";import"./chunk.vendor-lodash.OlSEBnWT.js";import{P as R,T as h,a as H,E as J}from"./chunk.TranslateAPI.CS44smW7.js";import"./chunk.APageTabTitle.Cyh8N43-.js";import"./chunk.AlohaHighlightjs.DI9-5vSP.js";import"./chunk.ATable.D_dOG0Fc.js";import"./chunk.translations-ar.kBCJx-bM.js";import"./chunk.translations-de.CcH3uB05.js";import"./chunk.translations-en.CkfjxDk2.js";import"./chunk.translations-es.CpXwTaxM.js";import"./chunk.translations-fr.Dpmk0n6x.js";import"./chunk.translations-hr.U-WzYQZM.js";import"./chunk.translations-it.Omt4gBfb.js";import"./chunk.translations-ru.crR4rwWj.js";function B(){return{codeHtml:`<a-input-number
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
<div>model3: {{ model3 }}</div>`}}function O(){return{codeJs:`import {
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
};`}}const C={name:"PageInputNumberBasic",components:{AInputNumber:I,AlohaExample:y},setup(){const e=i(10),o=i(1e4),m=i(10000.98),{codeHtml:d}=B(),{codeJs:s}=O();return{codeHtml:d,codeJs:s,model1:e,model2:o,model3:m}}};function D(e,o,m,d,s,A){const a=t("a-input-number"),b=t("aloha-example");return g(),v(b,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","label"]},{default:_(()=>[l(a,{modelValue:e.model1,"onUpdate:modelValue":o[0]||(o[0]=u=>e.model1=u),label:"Input 1"},null,8,["modelValue"]),n("div",null,"model1: "+p(e.model1),1),l(a,{modelValue:e.model2,"onUpdate:modelValue":o[1]||(o[1]=u=>e.model2=u),label:"Input 2"},null,8,["modelValue"]),n("div",null,"model2: "+p(e.model2),1),l(a,{modelValue:e.model3,"onUpdate:modelValue":o[2]||(o[2]=u=>e.model3=u),label:"Input 3"},null,8,["modelValue"]),n("div",null,"model3: "+p(e.model3),1)]),_:1},8,["code-html","code-js"])}const S=c(C,[["render",D]]);function j(){return{codeHtml:`<a-input-number
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
></a-input-number>`}}function q(){return{codeJs:`import {
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
};`}}const G={name:"PageInputNumberReadonly",components:{AInputNumber:I,AlohaExample:y},setup(){const e=i(10),o=i(1e4),m=i(void 0),{codeHtml:d}=j(),{codeJs:s}=q();return{codeHtml:d,codeJs:s,model1:e,model2:o,model3:m}}};function M(e,o,m,d,s,A){const a=t("a-input-number"),b=t("aloha-example");return g(),v(b,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default"]},{default:_(()=>[l(a,{"model-value":e.model1,readonly:!0,label:"Input 1"},null,8,["model-value"]),l(a,{class:"a_mt_3","model-value":e.model2,readonly:!0,label:"Input 2"},null,8,["model-value"]),l(a,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"Input 3"},null,8,["model-value"]),l(a,{class:"a_mt_3","model-value":e.model3,readonly:!0,"help-text":"Aloha",label:"Input 4","readonly-default":"-"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const Y=c(G,[["render",M]]),k={name:"PageInputNumber",components:{AInputNumber:I,AlohaPage:$,AlohaTableProps:T,AlohaTableTranslate:E,ATranslation:U,PageInputNumberBasic:S,PageInputNumberReadonly:Y},setup(){const{pageTitle:e}=R(),{dataProps:o}=H(),{dataTranslate:m}=h(),{dataEvents:d}=J();return{dataEvents:d,dataProps:o,dataTranslate:m,pageTitle:e}},data(){return{model1:10,model2:123,model3:321,model4:432}},methods:{changeModel1(e){console.log("arg",e)}}};function L(e,o,m,d,s,A){const a=t("a-translation"),b=t("page-input-number-basic"),u=t("page-input-number-readonly"),P=t("aloha-table-props"),N=t("aloha-table-translate"),f=t("a-input-number"),V=t("aloha-page");return g(),v(V,{"page-title":e.pageTitle},{body:_(()=>[l(a,{tag:"p",html:"_A_INPUT_NUMBER_COMPONENT_DESCRIPTION_"}),l(b),l(u),l(P,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"]),l(N,{data:e.dataTranslate},null,8,["data"]),l(f,{id:"input1",modelValue:e.model1,"onUpdate:modelValue":o[0]||(o[0]=r=>e.model1=r),type:"number",label:"Input langeeeeeeeeeeeeeeeeeee textdffdgfdgdsfdsfdsfdsfdsfdsfsdfsfdd",required:!0,step:2,errors:"not valid"},null,8,["modelValue"]),n("div",null,"model1: "+p(e.model1),1),o[4]||(o[4]=n("h2",null,'type "integerNonNegative"',-1)),l(f,{id:"input2",modelValue:e.model2,"onUpdate:modelValue":o[1]||(o[1]=r=>e.model2=r),type:"integerNonNegative",label:"Input 2",required:!0,step:2,disabled:!0},null,8,["modelValue"]),n("div",null,"model2: "+p(e.model2),1),o[5]||(o[5]=n("h2",null,'type "integerPositive"',-1)),l(f,{id:"input3",modelValue:e.model3,"onUpdate:modelValue":o[2]||(o[2]=r=>e.model3=r),type:"integerPositive",label:"Input 3",required:!0,step:3,"controls-type":"none"},null,8,["modelValue"]),n("div",null,"model3: "+p(e.model3),1),o[6]||(o[6]=n("h2",null,'type "integer"',-1)),l(f,{id:"input4",modelValue:e.model4,"onUpdate:modelValue":o[3]||(o[3]=r=>e.model4=r),type:"integer",label:"Input 4",required:!0,step:4},null,8,["modelValue"]),n("div",null,"model4: "+p(e.model4),1),o[7]||(o[7]=n("input",{type:"number"},null,-1)),o[8]||(o[8]=n("button",{class:"a_btn a_btn_primary"},"Temp",-1))]),_:1},8,["page-title"])}const re=c(k,[["render",L]]);export{re as default};
