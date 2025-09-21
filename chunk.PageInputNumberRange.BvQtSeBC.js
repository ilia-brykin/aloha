import{A as I,a as S}from"./chunk.AlohaExample.DAwGRLOD.js";import{A as $}from"./chunk.AlohaTableProps.CofNQYPM.js";import{A as y}from"./chunk.AlohaTableTranslate.DaGMZ5uI.js";import{ao as h,_ as c,g as L,A as U}from"./bundle.index.DOYlq4PO.js";import{r as p,V as i,aT as A,e as o,W as g,Z as r,_ as t,aU as R,d as f}from"./chunk.vendor.DmOTRqbf.js";import"./chunk.vendor-lodash.DsZvX3G1.js";import"./chunk.APageTabTitle.bBVoQaY3.js";import"./chunk.AlohaHighlightjs.8HRkfNnH.js";import"./chunk.ATable.GmmBiQ5t.js";import"./chunk.translations-ar.BiLIUuBX.js";import"./chunk.translations-de.Cy_u5T72.js";import"./chunk.translations-en.CWj0a7ej.js";import"./chunk.translations-es.D-4cj_p_.js";import"./chunk.translations-fr.LwkSu7L_.js";import"./chunk.translations-hr.G7gNG4Fu.js";import"./chunk.translations-it.BilXvddc.js";import"./chunk.translations-ru.XOcS94ap.js";function C(){return{codeHtml:`<a-input-number-range
  v-model="model"
  label="Aloha"
></a-input-number-range>
<div class="a_mt_3">model: {{ model }}</div>`}}function H(){return{codeJs:`import {
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
};`}}const D={name:"PageInputNumberRangeBasic",components:{AlohaExample:I,AInputNumberRange:h},setup(){const{codeHtml:e}=C(),{codeJs:n}=H(),a=p(void 0);return{codeHtml:e,codeJs:n,model:a}}},J={class:"a_columns a_columns_count_12"},G={class:"a_column a_column_6 a_columns_count_12_touch"},B={class:"a_mt_3"};function V(e,n,a,u,m,s){const l=o("a-input-number-range"),d=o("aloha-example");return g(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["v-model","label"]},{default:A(()=>[r("div",J,[r("div",G,[t(l,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=_=>e.model=_),label:"Aloha"},null,8,["modelValue"]),r("div",B,"model: "+R(e.model),1)])])]),_:1},8,["code-html","code-js"])}const M=c(D,[["render",V]]);function j(){return{codeHtml:`<a-input-number-range
  v-model="model"
  label="Input"
  label-description="Aloha"
></a-input-number-range>
<div class="a_mt_3">model: {{ model }}</div>`}}function q(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AInputNumberRange,
} from "aloha-vue";
    
export default {
  name: "PageInputNumberRangeLabelDescription",
  components: {
    AInputNumberRange,
  },
  setup() {
    const model = ref(undefined);

    return {
      model,
    };
  },
};`}}const x={name:"PageInputNumberRangeLabelDescription",components:{AlohaExample:I,AInputNumberRange:h},setup(){const{codeHtml:e}=j(),{codeJs:n}=q(),a=p(void 0);return{codeHtml:e,codeJs:n,model:a}}},Y={class:"a_mt_3"};function X(e,n,a,u,m,s){const l=o("a-input-number-range"),d=o("aloha-example");return g(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_",description:"_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_",props:["label-description"]},{default:A(()=>[t(l,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=_=>e.model=_),label:"Input","label-description":"Aloha"},null,8,["modelValue"]),r("div",Y,"model: "+R(e.model),1)]),_:1},8,["code-html","code-js"])}const F=c(x,[["render",X]]);function k(){return{codeHtml:`<a-input-number-range
  v-model="model"
  label="Aloha"
  placeholder-max="Max"
  placeholder-min="Min"
  type="integerRange"
></a-input-number-range>
<div class="a_mt_3">model: {{ model }}</div>`}}function w(){return{codeJs:`import {
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
};`}}const W={name:"PageInputNumberRangePlaceholder",components:{AlohaExample:I,AInputNumberRange:h},setup(){const{codeHtml:e}=k(),{codeJs:n}=w(),a=p(void 0);return{codeHtml:e,codeJs:n,model:a}}},Z={class:"a_columns a_columns_count_12"},z={class:"a_column a_column_6 a_columns_count_12_touch"},K={class:"a_mt_3"};function Q(e,n,a,u,m,s){const l=o("a-input-number-range"),d=o("aloha-example");return g(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_NUMBER_RANGE_GROUP_PLACEHOLDER_HEADER_",description:"_A_INPUT_NUMBER_RANGE_GROUP_PLACEHOLDER_DESCRIPTION_",props:["placeholder-max","placeholder-min"]},{default:A(()=>[r("div",Z,[r("div",z,[t(l,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=_=>e.model=_),label:"Aloha","placeholder-max":"Max","placeholder-min":"Min",type:"integerRange"},null,8,["modelValue"]),r("div",K,"model: "+R(e.model),1)])])]),_:1},8,["code-html","code-js"])}const ee=c(W,[["render",Q]]);function ne(){return{codeHtml:`<a-input-number-range
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
></a-input-number-range>`}}function oe(){return{codeJs:`import {
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
};`}}const ae={name:"PageInputNumberRangeReadonly",components:{AlohaExample:I,AInputNumberRange:h},setup(){const{codeHtml:e}=ne(),{codeJs:n}=oe(),a=p({min:3,max:43}),u=p({min:3}),m=p({max:3}),s=p(void 0);return{codeHtml:e,codeJs:n,model1:a,model2:u,model3:m,model4:s}}};function te(e,n,a,u,m,s){const l=o("a-input-number-range"),d=o("aloha-example");return g(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default","readonly-default-max","readonly-default-min"]},{default:A(()=>[t(l,{"model-value":e.model1,readonly:!0,label:"Input 1"},null,8,["model-value"]),t(l,{class:"a_mt_3","model-value":e.model2,readonly:!0,label:"Input 2"},null,8,["model-value"]),t(l,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"Input 3"},null,8,["model-value"]),t(l,{class:"a_mt_3","model-value":e.model4,readonly:!0,label:"Input 4"},null,8,["model-value"]),t(l,{class:"a_mt_3","model-value":e.model4,readonly:!0,label:"Input 5","readonly-default":"-"},null,8,["model-value"]),t(l,{class:"a_mt_3","model-value":e.model4,readonly:!0,"help-text":"Aloha",label:"Input 6","readonly-default-max":"-","readonly-default-min":"----"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const le=c(ae,[["render",te]]);function re(){return{codeHtml:`<a-input-number-range
  v-model="model"
  label="Aloha"
  type="integerRange"
></a-input-number-range>
<div class="a_mt_3">model: {{ model }}</div>`}}function de(){return{codeJs:`import {
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
};`}}const _e={name:"PageInputNumberRangeTypeInteger",components:{AlohaExample:I,AInputNumberRange:h},setup(){const{codeHtml:e}=re(),{codeJs:n}=de(),a=p(void 0);return{codeHtml:e,codeJs:n,model:a}}},ue={class:"a_columns a_columns_count_12"},me={class:"a_column a_column_6 a_columns_count_12_touch"},se={class:"a_mt_3"};function pe(e,n,a,u,m,s){const l=o("a-input-number-range"),d=o("aloha-example");return g(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_NUMBER_RANGE_GROUP_TYPE_INTEGER_HEADER_",description:"_A_INPUT_NUMBER_RANGE_GROUP_TYPE_INTEGER_DESCRIPTION_",props:"type='integerRange'"},{default:A(()=>[r("div",ue,[r("div",me,[t(l,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=_=>e.model=_),label:"Aloha",type:"integerRange"},null,8,["modelValue"]),r("div",se,"model: "+R(e.model),1)])])]),_:1},8,["code-html","code-js"])}const ce=c(_e,[["render",pe]]);function ie(){return{codeHtml:`<a-input-number-range
  v-model="model"
  label="Aloha"
  type="integerNonNegativeRange"
></a-input-number-range>
<div class="a_mt_3">model: {{ model }}</div>`}}function Ae(){return{codeJs:`import {
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
};`}}const ge={name:"PageInputNumberRangeTypeIntegerNonNegative",components:{AlohaExample:I,AInputNumberRange:h},setup(){const{codeHtml:e}=ie(),{codeJs:n}=Ae(),a=p(void 0);return{codeHtml:e,codeJs:n,model:a}}},Ie={class:"a_columns a_columns_count_12"},he={class:"a_column a_column_6 a_columns_count_12_touch"},Re={class:"a_mt_3"};function fe(e,n,a,u,m,s){const l=o("a-input-number-range"),d=o("aloha-example");return g(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_NUMBER_RANGE_GROUP_TYPE_INTEGER_NON_NEGATIVE_HEADER_",description:"_A_INPUT_NUMBER_RANGE_GROUP_TYPE_INTEGER_NON_NEGATIVE_DESCRIPTION_",props:"type='integerNonNegativeRange'"},{default:A(()=>[r("div",Ie,[r("div",he,[t(l,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=_=>e.model=_),label:"Aloha",type:"integerNonNegativeRange"},null,8,["modelValue"]),r("div",Re,"model: "+R(e.model),1)])])]),_:1},8,["code-html","code-js"])}const Ee=c(ge,[["render",fe]]);function Pe(){return{codeHtml:`<a-input-number-range
  v-model="model"
  label="Aloha"
  type="integerPositiveRange"
></a-input-number-range>
<div class="a_mt_3">model: {{ model }}</div>`}}function be(){return{codeJs:`import {
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
};`}}const Ne={name:"PageInputNumberRangeTypeIntegerPositive",components:{AlohaExample:I,AInputNumberRange:h},setup(){const{codeHtml:e}=Pe(),{codeJs:n}=be(),a=p(void 0);return{codeHtml:e,codeJs:n,model:a}}},Te={class:"a_columns a_columns_count_12"},ve={class:"a_column a_column_6 a_columns_count_12_touch"},Oe={class:"a_mt_3"};function Se(e,n,a,u,m,s){const l=o("a-input-number-range"),d=o("aloha-example");return g(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_NUMBER_RANGE_GROUP_TYPE_INTEGER_POSITIVE_HEADER_",description:"_A_INPUT_NUMBER_RANGE_GROUP_TYPE_INTEGER_POSITIVE_DESCRIPTION_",props:"type='integerPositiveRange'"},{default:A(()=>[r("div",Te,[r("div",ve,[t(l,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=_=>e.model=_),label:"Aloha",type:"integerPositiveRange"},null,8,["modelValue"]),r("div",Oe,"model: "+R(e.model),1)])])]),_:1},8,["code-html","code-js"])}const $e=c(Ne,[["render",Se]]);function ye(){return{dataEvents:[{name:"close",description:"_A_ALERT_EVENTS_CLOSE_DESCRIPTION_",type:"Function"}]}}function Le(){return{dataExposes:[{name:"close",description:"_A_ALERT_EXPOSES_CLOSE_DESCRIPTION_",type:"Function"},{name:"isHidden",description:"_A_ALERT_EXPOSES_IS_HIDDEN_DESCRIPTION_",type:"Boolean"}]}}function Ue(){const e=f(()=>L({placeholder:"_A_INPUT_NUMBER_RANGE_COMPONENT_NAME_"}));return{pageTitle:f(()=>`AInputNumberRange${e.value?` (${e.value})`:""}`)}}function Ce(){return{dataProps:[{name:"alert-class",description:"_A_ALERT_PROPS_ALERT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"alert-content-class",description:"_A_ALERT_PROPS_ALERT_CONTENT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"btn-close-attributes",description:"_A_ALERT_PROPS_BTN_CLOSE_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"{}",required:!1},{name:"closable",description:"_A_ALERT_PROPS_CLOSABLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"show-icon",description:"_A_ALERT_PROPS_HAS_ICON_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"html",description:"_A_ALERT_PROPS_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon",description:"_A_ALERT_PROPS_ICON_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon-class",description:"_A_ALERT_PROPS_ICON_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-visible",description:"_A_ALERT_PROPS_IS_VISIBLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"removeAlertOnClose",description:"_A_ALERT_PROPS_REMOVE_ALERT_ON_CLOSE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"safe-html",description:"_A_ALERT_PROPS_SAFE_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text",description:"_A_ALERT_PROPS_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text-close",description:"_A_ALERT_PROPS_TEXT_CLOSE_DESCRIPTION_",type:"String",default:"_ALERT_CLOSE_",required:!1},{name:"type",description:"_A_ALERT_PROPS_TYPE_DESCRIPTION_",type:"String",default:"danger",required:!1}]}}function He(){return{dataSlots:[{name:"default",description:"_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_"}]}}function De(){return{dataTranslate:["_A_INPUT_NUMBER_RANGE_LABEL_MIN_","_A_INPUT_NUMBER_RANGE_LABEL_MAX_"]}}const Je={name:"PageInputNumberRange",components:{AlohaPage:S,AlohaTableProps:$,AlohaTableTranslate:y,ATranslation:U,PageInputNumberRangeBasic:M,PageInputNumberRangeLabelDescription:F,PageInputNumberRangePlaceholder:ee,PageInputNumberRangeReadonly:le,PageInputNumberRangeTypeInteger:ce,PageInputNumberRangeTypeIntegerNonNegative:Ee,PageInputNumberRangeTypeIntegerPositive:$e},setup(){const{pageTitle:e}=Ue(),{dataProps:n}=Ce(),{dataSlots:a}=He(),{dataEvents:u}=ye(),{dataExposes:m}=Le(),{dataTranslate:s}=De();return{dataEvents:u,dataExposes:m,dataProps:n,dataSlots:a,dataTranslate:s,pageTitle:e}},data(){return{model:void 0,modelArr:void 0,modelArr2:void 0,data:[{label:"Aloha 1",id:"aloha_1",group:"group 1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3",group:"group 1"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5",group:"group 2"},{label:"AlohaAlohaAlohaAlohaAlohaAlohaAl ohaAlohaAlohaAlohaAlohaAloha AlohaAlohaAlohaAlohaAlohaAlohaAloha 6",id:"aloha_6",group:"group 2"},{label:"AlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAloha 7",id:"aloha_7",group:"group 2"},{label:"AlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAloha 8",id:"aloha_8"}]}},methods:{getLabel({item:e}){return`callback: ${e.label}`}}};function Ge(e,n,a,u,m,s){const l=o("a-translation"),d=o("page-input-number-range-basic"),_=o("page-input-number-range-label-description"),E=o("page-input-number-range-type-integer"),P=o("page-input-number-range-type-integer-non-negative"),b=o("page-input-number-range-type-integer-positive"),N=o("page-input-number-range-placeholder"),T=o("page-input-number-range-readonly"),v=o("aloha-table-translate"),O=o("aloha-page");return g(),i(O,{"page-title":e.pageTitle},{body:A(()=>[t(l,{tag:"p",html:"_A_INPUT_NUMBER_RANGE_COMPONENT_DESCRIPTION_"}),t(d),t(_),t(E),t(P),t(b),t(N),t(T),t(v,{data:e.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const nn=c(Je,[["render",Ge]]);export{nn as default};
