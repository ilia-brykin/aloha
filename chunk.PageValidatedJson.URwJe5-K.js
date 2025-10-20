import{A as E,a as h}from"./chunk.AlohaExample.BW2_Vff_.js";import{A as L}from"./chunk.AlohaTableProps.DBPRxhsH.js";import{aa as T,_ as p,g as v,A as b}from"./bundle.index.Bw4CbrP7.js";import{r as c,V as A,aT as f,e as i,W as S,_ as s,Z as t,aU as u,d as P}from"./chunk.vendor.D7UxhUfn.js";import"./chunk.vendor-lodash.BXqI5TOP.js";import"./chunk.APageTabTitle.CGHssToA.js";import"./chunk.AlohaHighlightjs.dFk8X2lo.js";import"./chunk.ATable.FHHrSff0.js";import"./chunk.translations-ar.COHWTLjj.js";import"./chunk.translations-de.CMsDi58c.js";import"./chunk.translations-en.Dg6d-iTX.js";import"./chunk.translations-es.BLJ15RYR.js";import"./chunk.translations-fr.tH5K_M0t.js";import"./chunk.translations-hr.DsOKZruz.js";import"./chunk.translations-it.B_6_ZtEA.js";import"./chunk.translations-ru.BTxZGSVv.js";function C(){return{codeHtml:`<a-select-icon
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
<div>model2: {{ model2 }}</div>`}}function N(){return{codeJs:`import {
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
};`}}const V={name:"PageValidatedJsonModeJson",components:{AlohaExample:E,AValidatedJson:T},setup(){const{codeHtml:e}=C(),{codeJs:o}=N(),n=[{type:"text",label:"Key",id:"key",required:!0},{type:"oneCheckbox",label:"Checkbox",id:"checkbox"},{type:"currency",label:"Currency",id:"currency"}],a=c({aloha1:{key:"aloha1"}}),r=c(void 0);return{children:n,codeHtml:e,codeJs:o,model1:a,model2:r}}};function g(e,o,n,a,r,_){const d=i("a-validated-json"),m=i("aloha-example");return S(),A(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","type"]},{default:f(()=>[s(d,{modelValue:e.model1,"onUpdate:modelValue":o[0]||(o[0]=l=>e.model1=l),"id-prefix":"aloha4",children:e.children,"key-id":"key","unique-children-ids":["key"],label:"_A_VALIDATED_JSON_COMPONENT_LABEL_JSON_",mode:"json"},null,8,["modelValue","children"]),o[2]||(o[2]=t("div",null,"model1:",-1)),t("pre",null,u(e.model1),1),s(d,{modelValue:e.model2,"onUpdate:modelValue":o[1]||(o[1]=l=>e.model2=l),"id-prefix":"aloha5",children:e.children,"unique-children-ids":["key"],label:"_A_VALIDATED_JSON_COMPONENT_LABEL_JSON_",mode:"json"},null,8,["modelValue","children"]),o[3]||(o[3]=t("div",null,"model2:",-1)),t("pre",null,u(e.model2),1)]),_:1},8,["code-html","code-js"])}const R=p(V,[["render",g]]);function J(){return{codeHtml:`<a-select-icon
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
};`}}const $={name:"PageValidatedJsonModeList",components:{AlohaExample:E,AValidatedJson:T},setup(){const{codeHtml:e}=J(),{codeJs:o}=D(),n=[{type:"text",label:"Text",id:"text",required:!0},{type:"oneCheckbox",label:"Checkbox",id:"checkbox"},{type:"currency",label:"Currency",id:"currency"}],a=c([{text:"Aloha1"},{text:"Aloha2"}]),r=c(void 0);return{children:n,codeHtml:e,codeJs:o,model1:a,model2:r}}};function j(e,o,n,a,r,_){const d=i("a-validated-json"),m=i("aloha-example");return S(),A(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","type"]},{default:f(()=>[s(d,{modelValue:e.model1,"onUpdate:modelValue":o[0]||(o[0]=l=>e.model1=l),"id-prefix":"aloha1",children:e.children,"unique-children-ids":["text"],label:"_A_VALIDATED_JSON_COMPONENT_LABEL_LIST_",mode:"list"},null,8,["modelValue","children"]),o[2]||(o[2]=t("div",null,"model1:",-1)),t("pre",null,u(e.model1),1),s(d,{modelValue:e.model1,"onUpdate:modelValue":o[1]||(o[1]=l=>e.model1=l),"id-prefix":"aloha2",children:e.children,readonly:!0,label:"_A_VALIDATED_JSON_COMPONENT_LABEL_LIST_",mode:"list"},null,8,["modelValue","children"])]),_:1},8,["code-html","code-js"])}const M=p($,[["render",j]]);function k(){return{codeHtml:`<a-select-icon
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
<div>model2: {{ model2 }}</div>`}}function x(){return{codeJs:`import {
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
};`}}const B={name:"PageValidatedJsonModeListTyped",components:{AlohaExample:E,AValidatedJson:T},setup(){const{codeHtml:e}=k(),{codeJs:o}=x(),n=[{type:"select",label:"Aloha",id:"aloha",required:!0,data:[{label:"Foo",value:"foo"},{label:"Bar",value:"bar"}],keyLabel:"label",keyId:"value"},{type:"oneCheckbox",label:"Checkbox",id:"checkbox"},{type:"currency",label:"Currency",id:"currency"}],a=c(void 0);return{children:n,codeHtml:e,codeJs:o,model1:a,typedChildren:{foo:[{id:"text_foo",type:"text",label:"Text foo"},{type:"oneCheckbox",label:"Checkbox foo",id:"checkbox_foo"}],bar:[{id:"text_bar",type:"text",label:"Text bar"}]}}}};function H(e,o,n,a,r,_){const d=i("a-validated-json"),m=i("aloha-example");return S(),A(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","type"]},{default:f(()=>[s(d,{modelValue:e.model1,"onUpdate:modelValue":o[0]||(o[0]=l=>e.model1=l),"id-prefix":"aloha1",children:e.children,"typed-children":e.typedChildren,"unique-children-ids":["text"],label:"_A_VALIDATED_JSON_COMPONENT_LABEL_LIST_",mode:"list","typed-base-id":"aloha"},null,8,["modelValue","children","typed-children"]),o[1]||(o[1]=t("div",null,"model1:",-1)),t("pre",null,u(e.model1),1)]),_:1},8,["code-html","code-js"])}const q=p(B,[["render",H]]);function U(){return{codeHtml:`<a-select-icon
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
};`}}const F={name:"PageValidatedJsonModeSingle",components:{AlohaExample:E,AValidatedJson:T},setup(){const{codeHtml:e}=U(),{codeJs:o}=G(),n=[{type:"text",label:"Text",id:"text"},{type:"oneCheckbox",label:"Checkbox",id:"checkbox"},{type:"currency",label:"Currency",id:"currency"},{type:"validatedJson",mode:"single",id:"validated_json",children:[{type:"text",label:"Text",id:"text"},{type:"oneCheckbox",label:"Checkbox",id:"checkbox"},{type:"currency",label:"Currency",id:"currency"}]}],a=c(void 0),r=c(void 0),_=c(void 0),d=c({text:"s"});return{children:n,codeHtml:e,codeJs:o,model1:a,model2:r,model3:_,model4:d}}};function w(e,o,n,a,r,_){const d=i("a-validated-json"),m=i("aloha-example");return S(),A(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","type"]},{default:f(()=>[s(d,{modelValue:e.model1,"onUpdate:modelValue":o[0]||(o[0]=l=>e.model1=l),"id-prefix":"aloha1",children:e.children,label:"_A_VALIDATED_JSON_COMPONENT_LABEL_SINGLE_",mode:"single"},null,8,["modelValue","children"]),o[4]||(o[4]=t("div",null,"model1:",-1)),t("pre",null,u(e.model1),1),s(d,{class:"a_mt_5",modelValue:e.model2,"onUpdate:modelValue":o[1]||(o[1]=l=>e.model2=l),"id-prefix":"aloha2",children:e.children,required:!0,label:"_A_VALIDATED_JSON_COMPONENT_LABEL_SINGLE_",mode:"single"},null,8,["modelValue","children"]),o[5]||(o[5]=t("div",null,"model2:",-1)),t("pre",null,u(e.model2),1),s(d,{class:"a_mt_5",modelValue:e.model3,"onUpdate:modelValue":o[2]||(o[2]=l=>e.model3=l),"id-prefix":"aloha3",children:e.children,"mode-options":{optionalSingleDefault:!0},label:"_A_VALIDATED_JSON_COMPONENT_LABEL_SINGLE_",mode:"single"},null,8,["modelValue","children"]),o[6]||(o[6]=t("div",null,"model3:",-1)),t("pre",null,u(e.model3),1),s(d,{class:"a_mt_5",modelValue:e.model4,"onUpdate:modelValue":o[3]||(o[3]=l=>e.model4=l),"id-prefix":"aloha3",children:e.children,label:"_A_VALIDATED_JSON_COMPONENT_LABEL_SINGLE_",mode:"single"},null,8,["modelValue","children"]),o[7]||(o[7]=t("div",null,"model4:",-1)),t("pre",null,u(e.model4),1)]),_:1},8,["code-html","code-js"])}const X=p(F,[["render",w]]);function K(){return{dataEvents:[{name:"close",description:"_A_ALERT_EVENTS_CLOSE_DESCRIPTION_",type:"Function"}]}}function W(){const e=P(()=>v({placeholder:"_A_VALIDATED_JSON_COMPONENT_NAME_"}));return{pageTitle:P(()=>`AValidatedJson${e.value?` (${e.value})`:""}`)}}function Y(){return{dataProps:[{name:"alert-class",description:"_A_ALERT_PROPS_ALERT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"alert-content-class",description:"_A_ALERT_PROPS_ALERT_CONTENT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"btn-close-attributes",description:"_A_ALERT_PROPS_BTN_CLOSE_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"{}",required:!1},{name:"closable",description:"_A_ALERT_PROPS_CLOSABLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"show-icon",description:"_A_ALERT_PROPS_HAS_ICON_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"html",description:"_A_ALERT_PROPS_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon",description:"_A_ALERT_PROPS_ICON_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon-class",description:"_A_ALERT_PROPS_ICON_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-visible",description:"_A_ALERT_PROPS_IS_VISIBLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"removeAlertOnClose",description:"_A_ALERT_PROPS_REMOVE_ALERT_ON_CLOSE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"safe-html",description:"_A_ALERT_PROPS_SAFE_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text",description:"_A_ALERT_PROPS_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text-close",description:"_A_ALERT_PROPS_TEXT_CLOSE_DESCRIPTION_",type:"String",default:"_ALERT_CLOSE_",required:!1},{name:"type",description:"_A_ALERT_PROPS_TYPE_DESCRIPTION_",type:"String",default:"danger",required:!1}]}}function Z(){return{dataSlots:[{name:"default",description:"_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_"}]}}const z={name:"PageValidatedJson",components:{AlohaPage:h,AlohaTableProps:L,ATranslation:b,PageValidatedJsonModeJson:R,PageValidatedJsonModeList:M,PageValidatedJsonModeListTyped:q,PageValidatedJsonModeSingle:X},setup(){const{pageTitle:e}=W(),{dataProps:o}=Y(),{dataSlots:n}=Z(),{dataEvents:a}=K();return{dataEvents:a,dataProps:o,dataSlots:n,pageTitle:e}}};function Q(e,o,n,a,r,_){const d=i("a-translation"),m=i("page-validated-json-mode-single"),l=i("page-validated-json-mode-list"),I=i("page-validated-json-mode-list-typed"),y=i("page-validated-json-mode-json"),O=i("aloha-page");return S(),A(O,{"page-title":e.pageTitle},{body:f(()=>[s(d,{tag:"p",html:"_A_VALIDATED_JSON_COMPONENT_DESCRIPTION_"}),s(m),s(l),s(I),s(y)]),_:1},8,["page-title"])}const fe=p(z,[["render",Q]]);export{fe as default};
