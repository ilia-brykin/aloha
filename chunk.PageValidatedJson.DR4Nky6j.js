import{A as E,a as L}from"./chunk.AlohaExample.CqMd1Yps.js";import{A as y}from"./chunk.AlohaTableProps.vIu34Bbg.js";import{a1 as T,_ as u,g as v,A as N}from"./bundle.index.CMHc948p.js";import{r as c,V as p,aT as A,e as a,W as f,_ as i,Z as s,aU as _,d as P}from"./chunk.vendor.D2EiI1BL.js";import"./chunk.vendor-lodash.FjHQi8Go.js";import"./chunk.APageTabTitle.Cl-1dUDP.js";import"./chunk.AlohaHighlightjs.B_1iuPG1.js";import"./chunk.ATable.oIOnUhvK.js";import"./chunk.translations-ar.DEWt73y8.js";import"./chunk.translations-de.CN5eAU-4.js";import"./chunk.translations-en.CPCEcTAP.js";import"./chunk.translations-es.BKTK5PUv.js";import"./chunk.translations-fr.CslimZmU.js";import"./chunk.translations-hr.CiJ7_Y2m.js";import"./chunk.translations-it.H45F8miC.js";import"./chunk.translations-ru.o-dOzdYz.js";function b(){return{codeHtml:`<a-select-icon
  v-model="model1"
  label="Select"
  type="select"
></a-select-icon>
<div>model1: {{ model1 }}</div>
<a-select-icon
  v-model="model2"
  class="a_mt_3"
  label="Multiselect"
  type="multiselect"
></a-select-icon>
<div>model2: {{ model2 }}</div>`}}function C(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelectIcon,
} from "aloha-vue";
    
export default {
  name: "PageValidatedJsonModeList",
  components: {
    ASelectIcon,
  },
  setup() {
    const model1 = ref(undefined);
    const model2 = ref(undefined);

    return {
      model1,
      model2,
    };
  },
};`}}const V={name:"PageValidatedJsonModeJson",components:{AlohaExample:E,AValidatedJson:T},setup(){const{codeHtml:e}=b(),{codeJs:o}=C(),d=[{type:"text",label:"Key",id:"key",required:!0},{type:"oneCheckbox",label:"Checkbox",id:"checkbox"},{type:"currency",label:"Currency",id:"currency"}],t=c({aloha1:{key:"aloha1"}}),r=c(void 0);return{children:d,codeHtml:e,codeJs:o,model1:t,model2:r}}};function g(e,o,d,t,r,S){const n=a("a-validated-json"),m=a("aloha-example");return f(),p(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","type"]},{default:A(()=>[i(n,{modelValue:e.model1,"onUpdate:modelValue":o[0]||(o[0]=l=>e.model1=l),"id-prefix":"aloha4",children:e.children,"key-id":"key","unique-children-ids":["key"],label:"_A_VALIDATED_JSON_COMPONENT_LABEL_JSON_",mode:"json"},null,8,["modelValue","children"]),o[2]||(o[2]=s("div",null,"model1:",-1)),s("pre",null,_(e.model1),1),i(n,{modelValue:e.model2,"onUpdate:modelValue":o[1]||(o[1]=l=>e.model2=l),"id-prefix":"aloha5",children:e.children,"unique-children-ids":["key"],label:"_A_VALIDATED_JSON_COMPONENT_LABEL_JSON_",mode:"json"},null,8,["modelValue","children"]),o[3]||(o[3]=s("div",null,"model2:",-1)),s("pre",null,_(e.model2),1)]),_:1},8,["code-html","code-js"])}const R=u(V,[["render",g]]);function J(){return{codeHtml:`<a-select-icon
  v-model="model1"
  label="Select"
  type="select"
></a-select-icon>
<div>model1: {{ model1 }}</div>
<a-select-icon
  v-model="model2"
  class="a_mt_3"
  label="Multiselect"
  type="multiselect"
></a-select-icon>
<div>model2: {{ model2 }}</div>`}}function D(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelectIcon,
} from "aloha-vue";
    
export default {
  name: "PageValidatedJsonModeList",
  components: {
    ASelectIcon,
  },
  setup() {
    const model1 = ref(undefined);
    const model2 = ref(undefined);

    return {
      model1,
      model2,
    };
  },
};`}}const $={name:"PageValidatedJsonModeList",components:{AlohaExample:E,AValidatedJson:T},setup(){const{codeHtml:e}=J(),{codeJs:o}=D(),d=[{type:"text",label:"Text",id:"text",required:!0},{type:"oneCheckbox",label:"Checkbox",id:"checkbox"},{type:"currency",label:"Currency",id:"currency"}],t=c([{text:"Aloha1"},{text:"Aloha2"}]),r=c(void 0);return{children:d,codeHtml:e,codeJs:o,model1:t,model2:r}}};function j(e,o,d,t,r,S){const n=a("a-validated-json"),m=a("aloha-example");return f(),p(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","type"]},{default:A(()=>[i(n,{modelValue:e.model1,"onUpdate:modelValue":o[0]||(o[0]=l=>e.model1=l),"id-prefix":"aloha1",children:e.children,"unique-children-ids":["text"],label:"_A_VALIDATED_JSON_COMPONENT_LABEL_LIST_",mode:"list"},null,8,["modelValue","children"]),o[2]||(o[2]=s("div",null,"model1:",-1)),s("pre",null,_(e.model1),1),i(n,{modelValue:e.model1,"onUpdate:modelValue":o[1]||(o[1]=l=>e.model1=l),"id-prefix":"aloha2",children:e.children,readonly:!0,label:"_A_VALIDATED_JSON_COMPONENT_LABEL_LIST_",mode:"list"},null,8,["modelValue","children"])]),_:1},8,["code-html","code-js"])}const M=u($,[["render",j]]);function B(){return{codeHtml:`<a-select-icon
  v-model="model1"
  label="Select"
  type="select"
></a-select-icon>
<div>model1: {{ model1 }}</div>
<a-select-icon
  v-model="model2"
  class="a_mt_3"
  label="Multiselect"
  type="multiselect"
></a-select-icon>
<div>model2: {{ model2 }}</div>`}}function k(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelectIcon,
} from "aloha-vue";
    
export default {
  name: "PageValidatedJsonModeList",
  components: {
    ASelectIcon,
  },
  setup() {
    const model1 = ref(undefined);
    const model2 = ref(undefined);

    return {
      model1,
      model2,
    };
  },
};`}}const x={name:"PageValidatedJsonModeListTyped",components:{AlohaExample:E,AValidatedJson:T},setup(){const{codeHtml:e}=B(),{codeJs:o}=k(),d=[{type:"select",label:"Aloha",id:"aloha",required:!0,data:[{label:"Foo",value:"foo"},{label:"Bar",value:"bar"}],keyLabel:"label",keyId:"value"},{type:"oneCheckbox",label:"Checkbox",id:"checkbox"},{type:"currency",label:"Currency",id:"currency"}],t=c(void 0);return{children:d,codeHtml:e,codeJs:o,model1:t,typedChildren:{foo:[{id:"text_foo",type:"text",label:"Text foo"},{type:"oneCheckbox",label:"Checkbox foo",id:"checkbox_foo"}],bar:[{id:"text_bar",type:"text",label:"Text bar"}]}}}};function H(e,o,d,t,r,S){const n=a("a-validated-json"),m=a("aloha-example");return f(),p(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","type"]},{default:A(()=>[i(n,{modelValue:e.model1,"onUpdate:modelValue":o[0]||(o[0]=l=>e.model1=l),"id-prefix":"aloha1",children:e.children,"typed-children":e.typedChildren,"unique-children-ids":["text"],label:"_A_VALIDATED_JSON_COMPONENT_LABEL_LIST_",mode:"list","typed-base-id":"aloha"},null,8,["modelValue","children","typed-children"]),o[1]||(o[1]=s("div",null,"model1:",-1)),s("pre",null,_(e.model1),1)]),_:1},8,["code-html","code-js"])}const q=u(x,[["render",H]]);function U(){return{codeHtml:`<a-select-icon
  v-model="model1"
  label="Select"
  type="select"
></a-select-icon>
<div>model1: {{ model1 }}</div>
<a-select-icon
  v-model="model2"
  class="a_mt_3"
  label="Multiselect"
  type="multiselect"
></a-select-icon>
<div>model2: {{ model2 }}</div>`}}function G(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelectIcon,
} from "aloha-vue";
    
export default {
  name: "PageSelectIconBasic",
  components: {
    ASelectIcon,
  },
  setup() {
    const model1 = ref(undefined);
    const model2 = ref(undefined);

    return {
      model1,
      model2,
    };
  },
};`}}const F={name:"PageValidatedJsonModeSingle",components:{AlohaExample:E,AValidatedJson:T},setup(){const{codeHtml:e}=U(),{codeJs:o}=G(),d=[{type:"text",label:"Text",id:"text"},{type:"oneCheckbox",label:"Checkbox",id:"checkbox"},{type:"currency",label:"Currency",id:"currency"}],t=c(void 0),r=c({text:"s"});return{children:d,codeHtml:e,codeJs:o,model1:t,model2:r}}};function w(e,o,d,t,r,S){const n=a("a-validated-json"),m=a("aloha-example");return f(),p(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","type"]},{default:A(()=>[i(n,{modelValue:e.model1,"onUpdate:modelValue":o[0]||(o[0]=l=>e.model1=l),"id-prefix":"aloha1",children:e.children,label:"_A_VALIDATED_JSON_COMPONENT_LABEL_SINGLE_",mode:"single"},null,8,["modelValue","children"]),i(n,{class:"a_mt_5",modelValue:e.model1,"onUpdate:modelValue":o[1]||(o[1]=l=>e.model1=l),"id-prefix":"aloha2",children:e.children,required:!0,label:"_A_VALIDATED_JSON_COMPONENT_LABEL_SINGLE_",mode:"single"},null,8,["modelValue","children"]),i(n,{class:"a_mt_5",modelValue:e.model1,"onUpdate:modelValue":o[2]||(o[2]=l=>e.model1=l),"id-prefix":"aloha3",children:e.children,"mode-options":{optionalSingleDefault:!0},label:"_A_VALIDATED_JSON_COMPONENT_LABEL_SINGLE_",mode:"single"},null,8,["modelValue","children"]),o[4]||(o[4]=s("div",null,"model1:",-1)),s("pre",null,_(e.model1),1),i(n,{class:"a_mt_5",modelValue:e.model2,"onUpdate:modelValue":o[3]||(o[3]=l=>e.model2=l),"id-prefix":"aloha3",children:e.children,label:"_A_VALIDATED_JSON_COMPONENT_LABEL_SINGLE_",mode:"single"},null,8,["modelValue","children"]),o[5]||(o[5]=s("div",null,"model2:",-1)),s("pre",null,_(e.model2),1)]),_:1},8,["code-html","code-js"])}const X=u(F,[["render",w]]);function K(){return{dataEvents:[{name:"close",description:"_A_ALERT_EVENTS_CLOSE_DESCRIPTION_",type:"Function"}]}}function W(){const e=P(()=>v({placeholder:"_A_VALIDATED_JSON_COMPONENT_NAME_"}));return{pageTitle:P(()=>`AValidatedJson${e.value?` (${e.value})`:""}`)}}function Y(){return{dataProps:[{name:"alert-class",description:"_A_ALERT_PROPS_ALERT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"alert-content-class",description:"_A_ALERT_PROPS_ALERT_CONTENT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"btn-close-attributes",description:"_A_ALERT_PROPS_BTN_CLOSE_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"{}",required:!1},{name:"closable",description:"_A_ALERT_PROPS_CLOSABLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"show-icon",description:"_A_ALERT_PROPS_HAS_ICON_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"html",description:"_A_ALERT_PROPS_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon",description:"_A_ALERT_PROPS_ICON_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon-class",description:"_A_ALERT_PROPS_ICON_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-visible",description:"_A_ALERT_PROPS_IS_VISIBLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"removeAlertOnClose",description:"_A_ALERT_PROPS_REMOVE_ALERT_ON_CLOSE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"safe-html",description:"_A_ALERT_PROPS_SAFE_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text",description:"_A_ALERT_PROPS_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text-close",description:"_A_ALERT_PROPS_TEXT_CLOSE_DESCRIPTION_",type:"String",default:"_ALERT_CLOSE_",required:!1},{name:"type",description:"_A_ALERT_PROPS_TYPE_DESCRIPTION_",type:"String",default:"danger",required:!1}]}}function Z(){return{dataSlots:[{name:"default",description:"_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_"}]}}const z={name:"PageValidatedJson",components:{AlohaPage:L,AlohaTableProps:y,ATranslation:N,PageValidatedJsonModeJson:R,PageValidatedJsonModeList:M,PageValidatedJsonModeListTyped:q,PageValidatedJsonModeSingle:X},setup(){const{pageTitle:e}=W(),{dataProps:o}=Y(),{dataSlots:d}=Z(),{dataEvents:t}=K();return{dataEvents:t,dataProps:o,dataSlots:d,pageTitle:e}}};function Q(e,o,d,t,r,S){const n=a("a-translation"),m=a("page-validated-json-mode-single"),l=a("page-validated-json-mode-list"),I=a("page-validated-json-mode-list-typed"),O=a("page-validated-json-mode-json"),h=a("aloha-page");return f(),p(h,{"page-title":e.pageTitle},{body:A(()=>[i(n,{tag:"p",html:"_A_VALIDATED_JSON_COMPONENT_DESCRIPTION_"}),i(m),i(l),i(I),i(O)]),_:1},8,["page-title"])}const fe=u(z,[["render",Q]]);export{fe as default};
