import{a5 as g,_ as m,g as b,A as S}from"./bundle.index.VWeDPPTP.js";import{r as h,O as p,aR as i,b as a,Q as c,U as t,V as s,aS as R,a as P}from"./chunk.vendor.G4HJ_FUy.js";import"./chunk.vendor-lodash.DUClg1O3.js";import{A as E,a as O}from"./chunk.AlohaExample.pz_QK9vq.js";import{A as v}from"./chunk.AlohaTableProps.BfEfDLBl.js";import"./chunk.translations-ar.C-NNZ74u.js";import"./chunk.translations-de.DwcQ1j-I.js";import"./chunk.translations-en.CpaURLZT.js";import"./chunk.translations-es.BlLUKL-T.js";import"./chunk.translations-fr.CBV_DS4p.js";import"./chunk.translations-hr.CNqGGqH_.js";import"./chunk.translations-it.Csqv_psg.js";import"./chunk.translations-ru.D8ZNuRSu.js";import"./chunk.APageTabTitle.DvqMiiyW.js";import"./chunk.AlohaHighlightjs.Bnb6Sejr.js";import"./chunk.ATable.DC2Wf9Tn.js";function $(){return{codeHtml:`<a-input-number-range
  v-model="model"
  label="Aloha"
></a-input-number-range>
<div class="a_mt_3">model: {{ model }}</div>`}}function y(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AInputNumberRange,
} from "aloha-vue";
    
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
};`}}const C={name:"PageInputNumberRangeBasic",components:{AlohaExample:E,AInputNumberRange:g},setup(){const{codeHtml:e}=$(),{codeJs:o}=y(),n=h(void 0);return{codeHtml:e,codeJs:o,model:n}}},L={class:"a_columns a_columns_count_12"},U={class:"a_column a_column_6 a_columns_count_12_touch"},H={class:"a_mt_3"};function D(e,o,n,d,u,A){const l=a("a-input-number-range"),_=a("aloha-example");return c(),p(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["v-model","label"]},{default:i(()=>[t("div",L,[t("div",U,[s(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=r=>e.model=r),label:"Aloha"},null,8,["modelValue"]),t("div",H,"model: "+R(e.model),1)])])]),_:1},8,["code-html","code-js"])}const G=m(C,[["render",D]]);function B(){return{codeHtml:`<a-input-number-range
  v-model="model"
  label="Aloha"
  placeholder-max="Max"
  placeholder-min="Min"
  type="integerRange"
></a-input-number-range>
<div class="a_mt_3">model: {{ model }}</div>`}}function J(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AInputNumberRange,
} from "aloha-vue";
    
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
};`}}const V={name:"PageInputNumberRangePlaceholder",components:{AlohaExample:E,AInputNumberRange:g},setup(){const{codeHtml:e}=B(),{codeJs:o}=J(),n=h(void 0);return{codeHtml:e,codeJs:o,model:n}}},M={class:"a_columns a_columns_count_12"},q={class:"a_column a_column_6 a_columns_count_12_touch"},j={class:"a_mt_3"};function x(e,o,n,d,u,A){const l=a("a-input-number-range"),_=a("aloha-example");return c(),p(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_NUMBER_RANGE_GROUP_PLACEHOLDER_HEADER_",description:"_A_INPUT_NUMBER_RANGE_GROUP_PLACEHOLDER_DESCRIPTION_",props:["placeholder-max","placeholder-min"]},{default:i(()=>[t("div",M,[t("div",q,[s(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=r=>e.model=r),label:"Aloha","placeholder-max":"Max","placeholder-min":"Min",type:"integerRange"},null,8,["modelValue"]),t("div",j,"model: "+R(e.model),1)])])]),_:1},8,["code-html","code-js"])}const Y=m(V,[["render",x]]);function F(){return{codeHtml:`<a-input-number-range
  v-model="model"
  label="Aloha"
  type="integerRange"
></a-input-number-range>
<div class="a_mt_3">model: {{ model }}</div>`}}function X(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AInputNumberRange,
} from "aloha-vue";
    
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
};`}}const k={name:"PageInputNumberRangeTypeInteger",components:{AlohaExample:E,AInputNumberRange:g},setup(){const{codeHtml:e}=F(),{codeJs:o}=X(),n=h(void 0);return{codeHtml:e,codeJs:o,model:n}}},w={class:"a_columns a_columns_count_12"},Q={class:"a_column a_column_6 a_columns_count_12_touch"},z={class:"a_mt_3"};function K(e,o,n,d,u,A){const l=a("a-input-number-range"),_=a("aloha-example");return c(),p(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_NUMBER_RANGE_GROUP_TYPE_INTEGER_HEADER_",description:"_A_INPUT_NUMBER_RANGE_GROUP_TYPE_INTEGER_DESCRIPTION_",props:"type='integerRange'"},{default:i(()=>[t("div",w,[t("div",Q,[s(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=r=>e.model=r),label:"Aloha",type:"integerRange"},null,8,["modelValue"]),t("div",z,"model: "+R(e.model),1)])])]),_:1},8,["code-html","code-js"])}const W=m(k,[["render",K]]);function Z(){return{codeHtml:`<a-input-number-range
  v-model="model"
  label="Aloha"
  type="integerNonNegativeRange"
></a-input-number-range>
<div class="a_mt_3">model: {{ model }}</div>`}}function ee(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AInputNumberRange,
} from "aloha-vue";
    
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
};`}}const oe={name:"PageInputNumberRangeTypeIntegerNonNegative",components:{AlohaExample:E,AInputNumberRange:g},setup(){const{codeHtml:e}=Z(),{codeJs:o}=ee(),n=h(void 0);return{codeHtml:e,codeJs:o,model:n}}},ne={class:"a_columns a_columns_count_12"},ae={class:"a_column a_column_6 a_columns_count_12_touch"},te={class:"a_mt_3"};function le(e,o,n,d,u,A){const l=a("a-input-number-range"),_=a("aloha-example");return c(),p(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_NUMBER_RANGE_GROUP_TYPE_INTEGER_NON_NEGATIVE_HEADER_",description:"_A_INPUT_NUMBER_RANGE_GROUP_TYPE_INTEGER_NON_NEGATIVE_DESCRIPTION_",props:"type='integerNonNegativeRange'"},{default:i(()=>[t("div",ne,[t("div",ae,[s(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=r=>e.model=r),label:"Aloha",type:"integerNonNegativeRange"},null,8,["modelValue"]),t("div",te,"model: "+R(e.model),1)])])]),_:1},8,["code-html","code-js"])}const _e=m(oe,[["render",le]]);function re(){return{codeHtml:`<a-input-number-range
  v-model="model"
  label="Aloha"
  type="integerPositiveRange"
></a-input-number-range>
<div class="a_mt_3">model: {{ model }}</div>`}}function se(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AInputNumberRange,
} from "aloha-vue";
    
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
};`}}const de={name:"PageInputNumberRangeTypeIntegerPositive",components:{AlohaExample:E,AInputNumberRange:g},setup(){const{codeHtml:e}=re(),{codeJs:o}=se(),n=h(void 0);return{codeHtml:e,codeJs:o,model:n}}},ue={class:"a_columns a_columns_count_12"},me={class:"a_column a_column_6 a_columns_count_12_touch"},pe={class:"a_mt_3"};function ie(e,o,n,d,u,A){const l=a("a-input-number-range"),_=a("aloha-example");return c(),p(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_NUMBER_RANGE_GROUP_TYPE_INTEGER_POSITIVE_HEADER_",description:"_A_INPUT_NUMBER_RANGE_GROUP_TYPE_INTEGER_POSITIVE_DESCRIPTION_",props:"type='integerPositiveRange'"},{default:i(()=>[t("div",ue,[t("div",me,[s(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=r=>e.model=r),label:"Aloha",type:"integerPositiveRange"},null,8,["modelValue"]),t("div",pe,"model: "+R(e.model),1)])])]),_:1},8,["code-html","code-js"])}const ce=m(de,[["render",ie]]);function Ae(){const e=P(()=>b({placeholder:"_A_INPUT_NUMBER_RANGE_COMPONENT_NAME_"}));return{pageTitle:P(()=>`AInputNumberRange${e.value?` (${e.value})`:""}`)}}function ge(){return{dataProps:[{name:"alert-class",description:"_A_ALERT_PROPS_ALERT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"alert-content-class",description:"_A_ALERT_PROPS_ALERT_CONTENT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"btn-close-attributes",description:"_A_ALERT_PROPS_BTN_CLOSE_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"{}",required:!1},{name:"closable",description:"_A_ALERT_PROPS_CLOSABLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"show-icon",description:"_A_ALERT_PROPS_HAS_ICON_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"html",description:"_A_ALERT_PROPS_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon",description:"_A_ALERT_PROPS_ICON_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon-class",description:"_A_ALERT_PROPS_ICON_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-visible",description:"_A_ALERT_PROPS_IS_VISIBLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"removeAlertOnClose",description:"_A_ALERT_PROPS_REMOVE_ALERT_ON_CLOSE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"safe-html",description:"_A_ALERT_PROPS_SAFE_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text",description:"_A_ALERT_PROPS_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text-close",description:"_A_ALERT_PROPS_TEXT_CLOSE_DESCRIPTION_",type:"String",default:"_ALERT_CLOSE_",required:!1},{name:"type",description:"_A_ALERT_PROPS_TYPE_DESCRIPTION_",type:"String",default:"danger",required:!1}]}}function he(){return{dataSlots:[{name:"default",description:"_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_"}]}}function Re(){return{dataEvents:[{name:"close",description:"_A_ALERT_EVENTS_CLOSE_DESCRIPTION_",type:"Function"}]}}function Ee(){return{dataExposes:[{name:"close",description:"_A_ALERT_EXPOSES_CLOSE_DESCRIPTION_",type:"Function"},{name:"isHidden",description:"_A_ALERT_EXPOSES_IS_HIDDEN_DESCRIPTION_",type:"Boolean"}]}}const Pe={name:"PageInputNumberRange",components:{AlohaPage:O,AlohaTableProps:v,ATranslation:S,PageInputNumberRangeBasic:G,PageInputNumberRangePlaceholder:Y,PageInputNumberRangeTypeInteger:W,PageInputNumberRangeTypeIntegerNonNegative:_e,PageInputNumberRangeTypeIntegerPositive:ce},setup(){const{pageTitle:e}=Ae(),{dataProps:o}=ge(),{dataSlots:n}=he(),{dataEvents:d}=Re(),{dataExposes:u}=Ee();return{dataEvents:d,dataExposes:u,dataProps:o,dataSlots:n,pageTitle:e}},data(){return{model:void 0,modelArr:void 0,modelArr2:void 0,data:[{label:"Aloha 1",id:"aloha_1",group:"group 1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3",group:"group 1"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5",group:"group 2"},{label:"AlohaAlohaAlohaAlohaAlohaAlohaAl ohaAlohaAlohaAlohaAlohaAloha AlohaAlohaAlohaAlohaAlohaAlohaAloha 6",id:"aloha_6",group:"group 2"},{label:"AlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAloha 7",id:"aloha_7",group:"group 2"},{label:"AlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAloha 8",id:"aloha_8"}]}},methods:{getLabel({item:e}){return`callback: ${e.label}`}}};function Ie(e,o,n,d,u,A){const l=a("a-translation"),_=a("page-input-number-range-basic"),r=a("page-input-number-range-type-integer"),I=a("page-input-number-range-type-integer-non-negative"),N=a("page-input-number-range-type-integer-positive"),f=a("page-input-number-range-placeholder"),T=a("aloha-page");return c(),p(T,{"page-title":e.pageTitle},{body:i(()=>[s(l,{tag:"p",html:"_A_INPUT_NUMBER_RANGE_COMPONENT_DESCRIPTION_"}),s(_),s(r),s(I),s(N),s(f)]),_:1},8,["page-title"])}const Je=m(Pe,[["render",Ie]]);export{Je as default};
