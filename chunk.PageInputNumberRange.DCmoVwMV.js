import{A as h,a as S}from"./chunk.AlohaExample.DBbDhVgH.js";import{A as O}from"./chunk.AlohaTableProps.rng3pRRf.js";import{A as y}from"./chunk.AlohaTableTranslate.nYnAK6t6.js";import{a8 as R,_ as c,g as $,A as L}from"./bundle.index.B8rwby-a.js";import{r as p,U as i,aS as A,e as o,V as g,Y as r,Z as t,aT as I,d as E}from"./chunk.vendor.w-kCrpQl.js";import"./chunk.vendor-lodash.GmlDDh1v.js";import"./chunk.APageTabTitle.Drw3yveG.js";import"./chunk.AlohaHighlightjs.Cjego80K.js";import"./chunk.ATable.Dr86PXSe.js";import"./chunk.translations-ar.C8xAF5pd.js";import"./chunk.translations-de.eUvDf8xn.js";import"./chunk.translations-en.DEpj9U8S.js";import"./chunk.translations-es.BUvs_K_5.js";import"./chunk.translations-fr.Qi6uRa8b.js";import"./chunk.translations-hr.hUcxziT-.js";import"./chunk.translations-it.DFfE6hGj.js";import"./chunk.translations-ru.CS-1tvJT.js";function C(){return{codeHtml:`<a-input-number-range
  v-model="model"
  label="Aloha"
></a-input-number-range>
<div class="a_mt_3">model: {{ model }}</div>`}}function U(){return{codeJs:`import {
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
};`}}const H={name:"PageInputNumberRangeBasic",components:{AlohaExample:h,AInputNumberRange:R},setup(){const{codeHtml:e}=C(),{codeJs:n}=U(),a=p(void 0);return{codeHtml:e,codeJs:n,model:a}}},D={class:"a_columns a_columns_count_12"},G={class:"a_column a_column_6 a_columns_count_12_touch"},B={class:"a_mt_3"};function J(e,n,a,u,m,s){const l=o("a-input-number-range"),_=o("aloha-example");return g(),i(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["v-model","label"]},{default:A(()=>[r("div",D,[r("div",G,[t(l,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=d=>e.model=d),label:"Aloha"},null,8,["modelValue"]),r("div",B,"model: "+I(e.model),1)])])]),_:1},8,["code-html","code-js"])}const V=c(H,[["render",J]]);function M(){return{codeHtml:`<a-input-number-range
  v-model="model"
  label="Aloha"
  placeholder-max="Max"
  placeholder-min="Min"
  type="integerRange"
></a-input-number-range>
<div class="a_mt_3">model: {{ model }}</div>`}}function j(){return{codeJs:`import {
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
};`}}const x={name:"PageInputNumberRangePlaceholder",components:{AlohaExample:h,AInputNumberRange:R},setup(){const{codeHtml:e}=M(),{codeJs:n}=j(),a=p(void 0);return{codeHtml:e,codeJs:n,model:a}}},q={class:"a_columns a_columns_count_12"},Y={class:"a_column a_column_6 a_columns_count_12_touch"},X={class:"a_mt_3"};function F(e,n,a,u,m,s){const l=o("a-input-number-range"),_=o("aloha-example");return g(),i(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_NUMBER_RANGE_GROUP_PLACEHOLDER_HEADER_",description:"_A_INPUT_NUMBER_RANGE_GROUP_PLACEHOLDER_DESCRIPTION_",props:["placeholder-max","placeholder-min"]},{default:A(()=>[r("div",q,[r("div",Y,[t(l,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=d=>e.model=d),label:"Aloha","placeholder-max":"Max","placeholder-min":"Min",type:"integerRange"},null,8,["modelValue"]),r("div",X,"model: "+I(e.model),1)])])]),_:1},8,["code-html","code-js"])}const k=c(x,[["render",F]]);function w(){return{codeHtml:`<a-input-number-range
  :model-value="model1"
  :readonly="true"
  label="Input 1"
></a-input-number-range>
<a-input-number-range
  :model-value="model2"
  :readonly="true"
  class="a_mt_3"
  label="Input 2"
></a-input-number-range>
<a-input-number-range
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  label="Input 3"
></a-input-number-range>
<a-input-number-range
  :model-value="model4"
  :readonly="true"
  class="a_mt_3"
  label="Input 4"
></a-input-number-range>
<a-input-number-range
  :model-value="model4"
  :readonly="true"
  class="a_mt_3"
  label="Input 5"
  readonly-default="-"
></a-input-number-range>
<a-input-number-range
  :model-value="model4"
  :readonly="true"
  class="a_mt_3"
  help-text="Aloha"
  label="Input 6"
  readonly-default-max="-"
  readonly-default-min="----"
></a-input-number-range>`}}function Z(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AInputNumberRange,
} from "aloha-vue";
    
export default {
  name: "PageInputNumberRangeReadonly",
  components: {
    AInputNumberRange,
  },
  setup() {
    const model1 = ref({ min: 3, max: 43 });
    const model2 = ref({ min: 3 });
    const model3 = ref({ max: 3 });
    const model4 = ref(undefined);

    return {
      data,
      model1,
      model2,
      model3,
      model4,
    };
  },
};`}}const z={name:"PageInputNumberRangeReadonly",components:{AlohaExample:h,AInputNumberRange:R},setup(){const{codeHtml:e}=w(),{codeJs:n}=Z(),a=p({min:3,max:43}),u=p({min:3}),m=p({max:3}),s=p(void 0);return{codeHtml:e,codeJs:n,model1:a,model2:u,model3:m,model4:s}}};function K(e,n,a,u,m,s){const l=o("a-input-number-range"),_=o("aloha-example");return g(),i(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default","readonly-default-max","readonly-default-min"]},{default:A(()=>[t(l,{"model-value":e.model1,readonly:!0,label:"Input 1"},null,8,["model-value"]),t(l,{class:"a_mt_3","model-value":e.model2,readonly:!0,label:"Input 2"},null,8,["model-value"]),t(l,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"Input 3"},null,8,["model-value"]),t(l,{class:"a_mt_3","model-value":e.model4,readonly:!0,label:"Input 4"},null,8,["model-value"]),t(l,{class:"a_mt_3","model-value":e.model4,readonly:!0,label:"Input 5","readonly-default":"-"},null,8,["model-value"]),t(l,{class:"a_mt_3","model-value":e.model4,readonly:!0,"help-text":"Aloha",label:"Input 6","readonly-default-max":"-","readonly-default-min":"----"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const Q=c(z,[["render",K]]);function W(){return{codeHtml:`<a-input-number-range
  v-model="model"
  label="Aloha"
  type="integerRange"
></a-input-number-range>
<div class="a_mt_3">model: {{ model }}</div>`}}function ee(){return{codeJs:`import {
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
};`}}const ne={name:"PageInputNumberRangeTypeInteger",components:{AlohaExample:h,AInputNumberRange:R},setup(){const{codeHtml:e}=W(),{codeJs:n}=ee(),a=p(void 0);return{codeHtml:e,codeJs:n,model:a}}},oe={class:"a_columns a_columns_count_12"},ae={class:"a_column a_column_6 a_columns_count_12_touch"},te={class:"a_mt_3"};function le(e,n,a,u,m,s){const l=o("a-input-number-range"),_=o("aloha-example");return g(),i(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_NUMBER_RANGE_GROUP_TYPE_INTEGER_HEADER_",description:"_A_INPUT_NUMBER_RANGE_GROUP_TYPE_INTEGER_DESCRIPTION_",props:"type='integerRange'"},{default:A(()=>[r("div",oe,[r("div",ae,[t(l,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=d=>e.model=d),label:"Aloha",type:"integerRange"},null,8,["modelValue"]),r("div",te,"model: "+I(e.model),1)])])]),_:1},8,["code-html","code-js"])}const re=c(ne,[["render",le]]);function _e(){return{codeHtml:`<a-input-number-range
  v-model="model"
  label="Aloha"
  type="integerNonNegativeRange"
></a-input-number-range>
<div class="a_mt_3">model: {{ model }}</div>`}}function de(){return{codeJs:`import {
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
};`}}const ue={name:"PageInputNumberRangeTypeIntegerNonNegative",components:{AlohaExample:h,AInputNumberRange:R},setup(){const{codeHtml:e}=_e(),{codeJs:n}=de(),a=p(void 0);return{codeHtml:e,codeJs:n,model:a}}},me={class:"a_columns a_columns_count_12"},se={class:"a_column a_column_6 a_columns_count_12_touch"},pe={class:"a_mt_3"};function ce(e,n,a,u,m,s){const l=o("a-input-number-range"),_=o("aloha-example");return g(),i(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_NUMBER_RANGE_GROUP_TYPE_INTEGER_NON_NEGATIVE_HEADER_",description:"_A_INPUT_NUMBER_RANGE_GROUP_TYPE_INTEGER_NON_NEGATIVE_DESCRIPTION_",props:"type='integerNonNegativeRange'"},{default:A(()=>[r("div",me,[r("div",se,[t(l,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=d=>e.model=d),label:"Aloha",type:"integerNonNegativeRange"},null,8,["modelValue"]),r("div",pe,"model: "+I(e.model),1)])])]),_:1},8,["code-html","code-js"])}const ie=c(ue,[["render",ce]]);function Ae(){return{codeHtml:`<a-input-number-range
  v-model="model"
  label="Aloha"
  type="integerPositiveRange"
></a-input-number-range>
<div class="a_mt_3">model: {{ model }}</div>`}}function ge(){return{codeJs:`import {
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
};`}}const he={name:"PageInputNumberRangeTypeIntegerPositive",components:{AlohaExample:h,AInputNumberRange:R},setup(){const{codeHtml:e}=Ae(),{codeJs:n}=ge(),a=p(void 0);return{codeHtml:e,codeJs:n,model:a}}},Re={class:"a_columns a_columns_count_12"},Ie={class:"a_column a_column_6 a_columns_count_12_touch"},Ee={class:"a_mt_3"};function fe(e,n,a,u,m,s){const l=o("a-input-number-range"),_=o("aloha-example");return g(),i(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_NUMBER_RANGE_GROUP_TYPE_INTEGER_POSITIVE_HEADER_",description:"_A_INPUT_NUMBER_RANGE_GROUP_TYPE_INTEGER_POSITIVE_DESCRIPTION_",props:"type='integerPositiveRange'"},{default:A(()=>[r("div",Re,[r("div",Ie,[t(l,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=d=>e.model=d),label:"Aloha",type:"integerPositiveRange"},null,8,["modelValue"]),r("div",Ee,"model: "+I(e.model),1)])])]),_:1},8,["code-html","code-js"])}const Pe=c(he,[["render",fe]]);function Ne(){return{dataEvents:[{name:"close",description:"_A_ALERT_EVENTS_CLOSE_DESCRIPTION_",type:"Function"}]}}function be(){return{dataExposes:[{name:"close",description:"_A_ALERT_EXPOSES_CLOSE_DESCRIPTION_",type:"Function"},{name:"isHidden",description:"_A_ALERT_EXPOSES_IS_HIDDEN_DESCRIPTION_",type:"Boolean"}]}}function Te(){const e=E(()=>$({placeholder:"_A_INPUT_NUMBER_RANGE_COMPONENT_NAME_"}));return{pageTitle:E(()=>`AInputNumberRange${e.value?` (${e.value})`:""}`)}}function ve(){return{dataProps:[{name:"alert-class",description:"_A_ALERT_PROPS_ALERT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"alert-content-class",description:"_A_ALERT_PROPS_ALERT_CONTENT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"btn-close-attributes",description:"_A_ALERT_PROPS_BTN_CLOSE_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"{}",required:!1},{name:"closable",description:"_A_ALERT_PROPS_CLOSABLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"show-icon",description:"_A_ALERT_PROPS_HAS_ICON_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"html",description:"_A_ALERT_PROPS_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon",description:"_A_ALERT_PROPS_ICON_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon-class",description:"_A_ALERT_PROPS_ICON_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-visible",description:"_A_ALERT_PROPS_IS_VISIBLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"removeAlertOnClose",description:"_A_ALERT_PROPS_REMOVE_ALERT_ON_CLOSE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"safe-html",description:"_A_ALERT_PROPS_SAFE_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text",description:"_A_ALERT_PROPS_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text-close",description:"_A_ALERT_PROPS_TEXT_CLOSE_DESCRIPTION_",type:"String",default:"_ALERT_CLOSE_",required:!1},{name:"type",description:"_A_ALERT_PROPS_TYPE_DESCRIPTION_",type:"String",default:"danger",required:!1}]}}function Se(){return{dataSlots:[{name:"default",description:"_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_"}]}}function Oe(){return{dataTranslate:["_A_INPUT_NUMBER_RANGE_LABEL_MIN_","_A_INPUT_NUMBER_RANGE_LABEL_MAX_"]}}const ye={name:"PageInputNumberRange",components:{AlohaPage:S,AlohaTableProps:O,AlohaTableTranslate:y,ATranslation:L,PageInputNumberRangeBasic:V,PageInputNumberRangePlaceholder:k,PageInputNumberRangeReadonly:Q,PageInputNumberRangeTypeInteger:re,PageInputNumberRangeTypeIntegerNonNegative:ie,PageInputNumberRangeTypeIntegerPositive:Pe},setup(){const{pageTitle:e}=Te(),{dataProps:n}=ve(),{dataSlots:a}=Se(),{dataEvents:u}=Ne(),{dataExposes:m}=be(),{dataTranslate:s}=Oe();return{dataEvents:u,dataExposes:m,dataProps:n,dataSlots:a,dataTranslate:s,pageTitle:e}},data(){return{model:void 0,modelArr:void 0,modelArr2:void 0,data:[{label:"Aloha 1",id:"aloha_1",group:"group 1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3",group:"group 1"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5",group:"group 2"},{label:"AlohaAlohaAlohaAlohaAlohaAlohaAl ohaAlohaAlohaAlohaAlohaAloha AlohaAlohaAlohaAlohaAlohaAlohaAloha 6",id:"aloha_6",group:"group 2"},{label:"AlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAloha 7",id:"aloha_7",group:"group 2"},{label:"AlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAloha 8",id:"aloha_8"}]}},methods:{getLabel({item:e}){return`callback: ${e.label}`}}};function $e(e,n,a,u,m,s){const l=o("a-translation"),_=o("page-input-number-range-basic"),d=o("page-input-number-range-type-integer"),f=o("page-input-number-range-type-integer-non-negative"),P=o("page-input-number-range-type-integer-positive"),N=o("page-input-number-range-placeholder"),b=o("page-input-number-range-readonly"),T=o("aloha-table-translate"),v=o("aloha-page");return g(),i(v,{"page-title":e.pageTitle},{body:A(()=>[t(l,{tag:"p",html:"_A_INPUT_NUMBER_RANGE_COMPONENT_DESCRIPTION_"}),t(_),t(d),t(f),t(P),t(N),t(b),t(T,{data:e.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const we=c(ye,[["render",$e]]);export{we as default};
