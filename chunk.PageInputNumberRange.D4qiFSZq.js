import{A as g,a as b}from"./chunk.AlohaExample.CyUlGLtF.js";import{A as S}from"./chunk.AlohaTableProps.pdFwqyjt.js";import{_ as m,g as O,A as v}from"./bundle.index.nIhxAj4P.js";import{n as R}from"./chunk.AForm.DQGeW1Bh.js";import{r as h,m as a,C as p,L as c,B as i,F as t,G as s,M as I,a as E}from"./chunk.vendor.D-Y3mz6a.js";import"./chunk.vendor-lodash.ClBXVCWL.js";import"./chunk.ATable.CQRSk7Vg.js";import"./chunk.utilsMath.7PmiGUbm.js";import"./chunk.vendor-tinymce.2RT9eEW9.js";import"./chunk.ADatepicker.CgTK6HZB.js";import"./chunk.UiMixinProps.BVfs3aDc.js";import"./chunk.AInputNumber.ehw7dUaS.js";import"./chunk.ATinymce.CED0CXMl.js";function $(){return{codeHtml:`<a-input-number-range
  v-model="model"
  label="Aloha"
></a-input-number-range>
<div class="a_mt_3">model: {{ model }}</div>`}}function y(){return{codeJs:`import {
  ref,
} from "vue";

import AInputNumberRange from "aloha-vue/src/ui/AInputNumberRange/AInputNumberRange";
    
export default {
  name: "PageInputNumberRangeBasic",
  components: {
    AInputNumberRange,
  },
  setup() {
    const model = ref(undefined);

    return {
      model,
    };
  },
};`}}const C={name:"PageInputNumberRangeBasic",components:{AlohaExample:g,AInputNumberRange:R},setup(){const{codeHtml:e}=$(),{codeJs:n}=y(),o=h(void 0);return{codeHtml:e,codeJs:n,model:o}}},L={class:"a_columns a_columns_count_12"},H={class:"a_column a_column_6 a_columns_count_12_touch"},U={class:"a_mt_3"};function D(e,n,o,u,d,A){const l=a("a-input-number-range"),_=a("aloha-example");return i(),p(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["v-model","label"]},{default:c(()=>[t("div",L,[t("div",H,[s(l,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=r=>e.model=r),label:"Aloha"},null,8,["modelValue"]),t("div",U,"model: "+I(e.model),1)])])]),_:1},8,["code-html","code-js"])}const G=m(C,[["render",D]]);function B(){return{codeHtml:`<a-input-number-range
  v-model="model"
  label="Aloha"
  placeholder-max="Max"
  placeholder-min="Min"
  type="integerRange"
></a-input-number-range>
<div class="a_mt_3">model: {{ model }}</div>`}}function J(){return{codeJs:`import {
  ref,
} from "vue";

import AInputNumberRange from "aloha-vue/src/ui/AInputNumberRange/AInputNumberRange";
    
export default {
  name: "PageInputNumberRangePlaceholder",
  components: {
    AInputNumberRange,
  },
  setup() {
    const model = ref(undefined);

    return {
      data,
      model,
    };
  },
};`}}const V={name:"PageInputNumberRangePlaceholder",components:{AlohaExample:g,AInputNumberRange:R},setup(){const{codeHtml:e}=B(),{codeJs:n}=J(),o=h(void 0);return{codeHtml:e,codeJs:n,model:o}}},M={class:"a_columns a_columns_count_12"},q={class:"a_column a_column_6 a_columns_count_12_touch"},j={class:"a_mt_3"};function x(e,n,o,u,d,A){const l=a("a-input-number-range"),_=a("aloha-example");return i(),p(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_NUMBER_RANGE_GROUP_PLACEHOLDER_HEADER_",description:"_A_INPUT_NUMBER_RANGE_GROUP_PLACEHOLDER_DESCRIPTION_",props:["placeholder-max","placeholder-min"]},{default:c(()=>[t("div",M,[t("div",q,[s(l,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=r=>e.model=r),label:"Aloha","placeholder-max":"Max","placeholder-min":"Min",type:"integerRange"},null,8,["modelValue"]),t("div",j,"model: "+I(e.model),1)])])]),_:1},8,["code-html","code-js"])}const Y=m(V,[["render",x]]);function F(){return{codeHtml:`<a-input-number-range
  v-model="model"
  label="Aloha"
  type="integerRange"
></a-input-number-range>
<div class="a_mt_3">model: {{ model }}</div>`}}function X(){return{codeJs:`import {
  ref,
} from "vue";

import AInputNumberRange from "aloha-vue/src/ui/AInputNumberRange/AInputNumberRange";
    
export default {
  name: "PageInputNumberRangeTypeInteger",
  components: {
    AInputNumberRange,
  },
  setup() {
    const model = ref(undefined);

    return {
      data,
      model,
    };
  },
};`}}const k={name:"PageInputNumberRangeTypeInteger",components:{AlohaExample:g,AInputNumberRange:R},setup(){const{codeHtml:e}=F(),{codeJs:n}=X(),o=h(void 0);return{codeHtml:e,codeJs:n,model:o}}},w={class:"a_columns a_columns_count_12"},z={class:"a_column a_column_6 a_columns_count_12_touch"},K={class:"a_mt_3"};function Q(e,n,o,u,d,A){const l=a("a-input-number-range"),_=a("aloha-example");return i(),p(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_NUMBER_RANGE_GROUP_TYPE_INTEGER_HEADER_",description:"_A_INPUT_NUMBER_RANGE_GROUP_TYPE_INTEGER_DESCRIPTION_",props:"type='integerRange'"},{default:c(()=>[t("div",w,[t("div",z,[s(l,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=r=>e.model=r),label:"Aloha",type:"integerRange"},null,8,["modelValue"]),t("div",K,"model: "+I(e.model),1)])])]),_:1},8,["code-html","code-js"])}const W=m(k,[["render",Q]]);function Z(){return{codeHtml:`<a-input-number-range
  v-model="model"
  label="Aloha"
  type="integerNonNegativeRange"
></a-input-number-range>
<div class="a_mt_3">model: {{ model }}</div>`}}function ee(){return{codeJs:`import {
  ref,
} from "vue";

import AInputNumberRange from "aloha-vue/src/ui/AInputNumberRange/AInputNumberRange";
    
export default {
  name: "PageInputNumberRangeTypeIntegerNonNegative",
  components: {
    AInputNumberRange,
  },
  setup() {
    const model = ref(undefined);

    return {
      data,
      model,
    };
  },
};`}}const ne={name:"PageInputNumberRangeTypeIntegerNonNegative",components:{AlohaExample:g,AInputNumberRange:R},setup(){const{codeHtml:e}=Z(),{codeJs:n}=ee(),o=h(void 0);return{codeHtml:e,codeJs:n,model:o}}},oe={class:"a_columns a_columns_count_12"},ae={class:"a_column a_column_6 a_columns_count_12_touch"},te={class:"a_mt_3"};function le(e,n,o,u,d,A){const l=a("a-input-number-range"),_=a("aloha-example");return i(),p(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_NUMBER_RANGE_GROUP_TYPE_INTEGER_NON_NEGATIVE_HEADER_",description:"_A_INPUT_NUMBER_RANGE_GROUP_TYPE_INTEGER_NON_NEGATIVE_DESCRIPTION_",props:"type='integerNonNegativeRange'"},{default:c(()=>[t("div",oe,[t("div",ae,[s(l,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=r=>e.model=r),label:"Aloha",type:"integerNonNegativeRange"},null,8,["modelValue"]),t("div",te,"model: "+I(e.model),1)])])]),_:1},8,["code-html","code-js"])}const _e=m(ne,[["render",le]]);function re(){return{codeHtml:`<a-input-number-range
  v-model="model"
  label="Aloha"
  type="integerPositiveRange"
></a-input-number-range>
<div class="a_mt_3">model: {{ model }}</div>`}}function se(){return{codeJs:`import {
  ref,
} from "vue";

import AInputNumberRange from "aloha-vue/src/ui/AInputNumberRange/AInputNumberRange";
    
export default {
  name: "PageInputNumberRangeTypeIntegerPositive",
  components: {
    AInputNumberRange,
  },
  setup() {
    const model = ref(undefined);

    return {
      data,
      model,
    };
  },
};`}}const ue={name:"PageInputNumberRangeTypeIntegerPositive",components:{AlohaExample:g,AInputNumberRange:R},setup(){const{codeHtml:e}=re(),{codeJs:n}=se(),o=h(void 0);return{codeHtml:e,codeJs:n,model:o}}},de={class:"a_columns a_columns_count_12"},me={class:"a_column a_column_6 a_columns_count_12_touch"},pe={class:"a_mt_3"};function ce(e,n,o,u,d,A){const l=a("a-input-number-range"),_=a("aloha-example");return i(),p(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_NUMBER_RANGE_GROUP_TYPE_INTEGER_POSITIVE_HEADER_",description:"_A_INPUT_NUMBER_RANGE_GROUP_TYPE_INTEGER_POSITIVE_DESCRIPTION_",props:"type='integerPositiveRange'"},{default:c(()=>[t("div",de,[t("div",me,[s(l,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=r=>e.model=r),label:"Aloha",type:"integerPositiveRange"},null,8,["modelValue"]),t("div",pe,"model: "+I(e.model),1)])])]),_:1},8,["code-html","code-js"])}const ie=m(ue,[["render",ce]]);function Ae(){const e=E(()=>O({placeholder:"_A_INPUT_NUMBER_RANGE_COMPONENT_NAME_"}));return{pageTitle:E(()=>`AInputNumberRange${e.value?` (${e.value})`:""}`)}}function ge(){return{dataProps:[{name:"alert-class",description:"_A_ALERT_PROPS_ALERT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"alert-content-class",description:"_A_ALERT_PROPS_ALERT_CONTENT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"btn-close-attributes",description:"_A_ALERT_PROPS_BTN_CLOSE_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"{}",required:!1},{name:"closable",description:"_A_ALERT_PROPS_CLOSABLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"show-icon",description:"_A_ALERT_PROPS_HAS_ICON_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"html",description:"_A_ALERT_PROPS_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon",description:"_A_ALERT_PROPS_ICON_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon-class",description:"_A_ALERT_PROPS_ICON_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-visible",description:"_A_ALERT_PROPS_IS_VISIBLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"removeAlertOnClose",description:"_A_ALERT_PROPS_REMOVE_ALERT_ON_CLOSE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"safe-html",description:"_A_ALERT_PROPS_SAFE_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text",description:"_A_ALERT_PROPS_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text-close",description:"_A_ALERT_PROPS_TEXT_CLOSE_DESCRIPTION_",type:"String",default:"_ALERT_CLOSE_",required:!1},{name:"type",description:"_A_ALERT_PROPS_TYPE_DESCRIPTION_",type:"String",default:"danger",required:!1}]}}function Re(){return{dataSlots:[{name:"default",description:"_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_"}]}}function he(){return{dataEvents:[{name:"close",description:"_A_ALERT_EVENTS_CLOSE_DESCRIPTION_",type:"Function"}]}}function Ie(){return{dataExposes:[{name:"close",description:"_A_ALERT_EXPOSES_CLOSE_DESCRIPTION_",type:"Function"},{name:"isHidden",description:"_A_ALERT_EXPOSES_IS_HIDDEN_DESCRIPTION_",type:"Boolean"}]}}const Ee={name:"PageInputNumberRange",components:{AlohaPage:b,AlohaTableProps:S,ATranslation:v,PageInputNumberRangeBasic:G,PageInputNumberRangePlaceholder:Y,PageInputNumberRangeTypeInteger:W,PageInputNumberRangeTypeIntegerNonNegative:_e,PageInputNumberRangeTypeIntegerPositive:ie},setup(){const{pageTitle:e}=Ae(),{dataProps:n}=ge(),{dataSlots:o}=Re(),{dataEvents:u}=he(),{dataExposes:d}=Ie();return{dataEvents:u,dataExposes:d,dataProps:n,dataSlots:o,pageTitle:e}},data(){return{model:void 0,modelArr:void 0,modelArr2:void 0,data:[{label:"Aloha 1",id:"aloha_1",group:"group 1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3",group:"group 1"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5",group:"group 2"},{label:"AlohaAlohaAlohaAlohaAlohaAlohaAl ohaAlohaAlohaAlohaAlohaAloha AlohaAlohaAlohaAlohaAlohaAlohaAloha 6",id:"aloha_6",group:"group 2"},{label:"AlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAloha 7",id:"aloha_7",group:"group 2"},{label:"AlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAloha 8",id:"aloha_8"}]}},methods:{getLabel({item:e}){return`callback: ${e.label}`}}};function Ne(e,n,o,u,d,A){const l=a("a-translation"),_=a("page-input-number-range-basic"),r=a("page-input-number-range-type-integer"),N=a("page-input-number-range-type-integer-non-negative"),P=a("page-input-number-range-type-integer-positive"),f=a("page-input-number-range-placeholder"),T=a("aloha-page");return i(),p(T,{"page-title":e.pageTitle},{body:c(()=>[s(l,{tag:"p",html:"_A_INPUT_NUMBER_RANGE_COMPONENT_DESCRIPTION_"}),s(_),s(r),s(N),s(P),s(f)]),_:1},8,["page-title"])}const De=m(Ee,[["render",Ne]]);export{De as default};
