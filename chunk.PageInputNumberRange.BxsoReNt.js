import{$t as e,Ct as t,Tt as n,Ut as r,Yt as i,kt as a,qt as o,wt as s,zt as c}from"./chunk.vendor.CZPox1kV.js";import{G as l,Z as ee,kt as u,t as d}from"./bundle.index.CLtYDDlb.js";import{n as f,t as p}from"./chunk.AlohaExample.BFgfeYtr.js";import{t as m}from"./chunk.AlohaTableProps.CiFmD1UR.js";import{t as h}from"./chunk.AlohaTableTranslate.SVFm06b7.js";function g(){return{codeHtml:`<a-input-number-range
  v-model="model"
  label="Aloha"
></a-input-number-range>
<div class="a_mt_3">model: {{ model }}</div>`}}function _(){return{codeJs:`import {
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
};`}}var v={name:`PageInputNumberRangeBasic`,components:{AlohaExample:p,AInputNumberRange:l},setup(){let{codeHtml:e}=g(),{codeJs:t}=_();return{codeHtml:e,codeJs:t,model:i(void 0)}}},y={class:`a_columns a_columns_count_12`},b={class:`a_column a_column_6 a_columns_count_12_touch`},x={class:`a_mt_3`};function S(t,i,l,ee,u,d){let f=r(`a-input-number-range`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_BASIC_USAGE_`,props:[`v-model`,`label`]},{default:o(()=>[s(`div`,y,[s(`div`,b,[a(f,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,label:`Aloha`},null,8,[`modelValue`]),s(`div`,x,`model: `+e(t.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var C=d(v,[[`render`,S]]);function w(){return{codeHtml:`<a-input-number-range
  v-model="model"
  label="Input"
  label-description="Aloha"
></a-input-number-range>
<div class="a_mt_3">model: {{ model }}</div>`}}function T(){return{codeJs:`import {
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
};`}}var E={name:`PageInputNumberRangeLabelDescription`,components:{AlohaExample:p,AInputNumberRange:l},setup(){let{codeHtml:e}=w(),{codeJs:t}=T();return{codeHtml:e,codeJs:t,model:i(void 0)}}},D={class:`a_mt_3`};function O(t,i,l,ee,u,d){let f=r(`a-input-number-range`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_`,description:`_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_`,props:[`label-description`]},{default:o(()=>[a(f,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,label:`Input`,"label-description":`Aloha`},null,8,[`modelValue`]),s(`div`,D,`model: `+e(t.model),1)]),_:1},8,[`code-html`,`code-js`])}var k=d(E,[[`render`,O]]);function A(){return{codeHtml:`<a-input-number-range
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
};`}}var M={name:`PageInputNumberRangePlaceholder`,components:{AlohaExample:p,AInputNumberRange:l},setup(){let{codeHtml:e}=A(),{codeJs:t}=j();return{codeHtml:e,codeJs:t,model:i(void 0)}}},N={class:`a_columns a_columns_count_12`},P={class:`a_column a_column_6 a_columns_count_12_touch`},F={class:`a_mt_3`};function I(t,i,l,ee,u,d){let f=r(`a-input-number-range`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_INPUT_NUMBER_RANGE_GROUP_PLACEHOLDER_HEADER_`,description:`_A_INPUT_NUMBER_RANGE_GROUP_PLACEHOLDER_DESCRIPTION_`,props:[`placeholder-max`,`placeholder-min`]},{default:o(()=>[s(`div`,N,[s(`div`,P,[a(f,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,label:`Aloha`,"placeholder-max":`Max`,"placeholder-min":`Min`,type:`integerRange`},null,8,[`modelValue`]),s(`div`,F,`model: `+e(t.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var L=d(M,[[`render`,I]]);function R(){return{codeHtml:`<a-input-number-range
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
></a-input-number-range>`}}function z(){return{codeJs:`import {
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
};`}}var B={name:`PageInputNumberRangeReadonly`,components:{AlohaExample:p,AInputNumberRange:l},setup(){let{codeHtml:e}=R(),{codeJs:t}=z();return{codeHtml:e,codeJs:t,model1:i({min:3,max:43}),model2:i({min:3}),model3:i({max:3}),model4:i(void 0)}}};function V(e,t,i,s,l,ee){let u=r(`a-input-number-range`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_READONLY_HEADER_`,description:`_A_UI_GROUP_READONLY_DESCRIPTION_`,props:[`readonly`,`readonly-default`,`readonly-default-max`,`readonly-default-min`]},{default:o(()=>[a(u,{"model-value":e.model1,readonly:!0,label:`Input 1`},null,8,[`model-value`]),a(u,{class:`a_mt_3`,"model-value":e.model2,readonly:!0,label:`Input 2`},null,8,[`model-value`]),a(u,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,label:`Input 3`},null,8,[`model-value`]),a(u,{class:`a_mt_3`,"model-value":e.model4,readonly:!0,label:`Input 4`},null,8,[`model-value`]),a(u,{class:`a_mt_3`,"model-value":e.model4,readonly:!0,label:`Input 5`,"readonly-default":`-`},null,8,[`model-value`]),a(u,{class:`a_mt_3`,"model-value":e.model4,readonly:!0,"help-text":`Aloha`,label:`Input 6`,"readonly-default-max":`-`,"readonly-default-min":`----`},null,8,[`model-value`])]),_:1},8,[`code-html`,`code-js`])}var H=d(B,[[`render`,V]]);function U(){return{codeHtml:`<a-input-number-range
  v-model="model"
  label="Aloha"
  type="integerRange"
></a-input-number-range>
<div class="a_mt_3">model: {{ model }}</div>`}}function W(){return{codeJs:`import {
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
};`}}var G={name:`PageInputNumberRangeTypeInteger`,components:{AlohaExample:p,AInputNumberRange:l},setup(){let{codeHtml:e}=U(),{codeJs:t}=W();return{codeHtml:e,codeJs:t,model:i(void 0)}}},K={class:`a_columns a_columns_count_12`},q={class:`a_column a_column_6 a_columns_count_12_touch`},te={class:`a_mt_3`};function J(t,i,l,ee,u,d){let f=r(`a-input-number-range`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_INPUT_NUMBER_RANGE_GROUP_TYPE_INTEGER_HEADER_`,description:`_A_INPUT_NUMBER_RANGE_GROUP_TYPE_INTEGER_DESCRIPTION_`,props:`type='integerRange'`},{default:o(()=>[s(`div`,K,[s(`div`,q,[a(f,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,label:`Aloha`,type:`integerRange`},null,8,[`modelValue`]),s(`div`,te,`model: `+e(t.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var Y=d(G,[[`render`,J]]);function X(){return{codeHtml:`<a-input-number-range
  v-model="model"
  label="Aloha"
  type="integerNonNegativeRange"
></a-input-number-range>
<div class="a_mt_3">model: {{ model }}</div>`}}function Z(){return{codeJs:`import {
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
};`}}var Q={name:`PageInputNumberRangeTypeIntegerNonNegative`,components:{AlohaExample:p,AInputNumberRange:l},setup(){let{codeHtml:e}=X(),{codeJs:t}=Z();return{codeHtml:e,codeJs:t,model:i(void 0)}}},ne={class:`a_columns a_columns_count_12`},re={class:`a_column a_column_6 a_columns_count_12_touch`},ie={class:`a_mt_3`};function ae(t,i,l,ee,u,d){let f=r(`a-input-number-range`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_INPUT_NUMBER_RANGE_GROUP_TYPE_INTEGER_NON_NEGATIVE_HEADER_`,description:`_A_INPUT_NUMBER_RANGE_GROUP_TYPE_INTEGER_NON_NEGATIVE_DESCRIPTION_`,props:`type='integerNonNegativeRange'`},{default:o(()=>[s(`div`,ne,[s(`div`,re,[a(f,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,label:`Aloha`,type:`integerNonNegativeRange`},null,8,[`modelValue`]),s(`div`,ie,`model: `+e(t.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var oe=d(Q,[[`render`,ae]]);function se(){return{codeHtml:`<a-input-number-range
  v-model="model"
  label="Aloha"
  type="integerPositiveRange"
></a-input-number-range>
<div class="a_mt_3">model: {{ model }}</div>`}}function ce(){return{codeJs:`import {
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
};`}}var le={name:`PageInputNumberRangeTypeIntegerPositive`,components:{AlohaExample:p,AInputNumberRange:l},setup(){let{codeHtml:e}=se(),{codeJs:t}=ce();return{codeHtml:e,codeJs:t,model:i(void 0)}}},ue={class:`a_columns a_columns_count_12`},de={class:`a_column a_column_6 a_columns_count_12_touch`},fe={class:`a_mt_3`};function pe(t,i,l,ee,u,d){let f=r(`a-input-number-range`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_INPUT_NUMBER_RANGE_GROUP_TYPE_INTEGER_POSITIVE_HEADER_`,description:`_A_INPUT_NUMBER_RANGE_GROUP_TYPE_INTEGER_POSITIVE_DESCRIPTION_`,props:`type='integerPositiveRange'`},{default:o(()=>[s(`div`,ue,[s(`div`,de,[a(f,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,label:`Aloha`,type:`integerPositiveRange`},null,8,[`modelValue`]),s(`div`,fe,`model: `+e(t.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var $=d(le,[[`render`,pe]]);function me(){return{dataEvents:[{name:`close`,description:`_A_ALERT_EVENTS_CLOSE_DESCRIPTION_`,type:`Function`}]}}function he(){return{dataExposes:[{name:`close`,description:`_A_ALERT_EXPOSES_CLOSE_DESCRIPTION_`,type:`Function`},{name:`isHidden`,description:`_A_ALERT_EXPOSES_IS_HIDDEN_DESCRIPTION_`,type:`Boolean`}]}}function ge(){let e=t(()=>u({placeholder:`_A_INPUT_NUMBER_RANGE_COMPONENT_NAME_`}));return{pageTitle:t(()=>`AInputNumberRange${e.value?` (${e.value})`:``}`)}}function _e(){return{dataProps:[{name:`alert-class`,description:`_A_ALERT_PROPS_ALERT_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`alert-content-class`,description:`_A_ALERT_PROPS_ALERT_CONTENT_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`btn-close-attributes`,description:`_A_ALERT_PROPS_BTN_CLOSE_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`{}`,required:!1},{name:`closable`,description:`_A_ALERT_PROPS_CLOSABLE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`show-icon`,description:`_A_ALERT_PROPS_HAS_ICON_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`html`,description:`_A_ALERT_PROPS_HTML_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`icon`,description:`_A_ALERT_PROPS_ICON_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`icon-class`,description:`_A_ALERT_PROPS_ICON_CLASS_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`is-visible`,description:`_A_ALERT_PROPS_IS_VISIBLE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`removeAlertOnClose`,description:`_A_ALERT_PROPS_REMOVE_ALERT_ON_CLOSE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`safe-html`,description:`_A_ALERT_PROPS_SAFE_HTML_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`text`,description:`_A_ALERT_PROPS_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`text-close`,description:`_A_ALERT_PROPS_TEXT_CLOSE_DESCRIPTION_`,type:`String`,default:`_ALERT_CLOSE_`,required:!1},{name:`type`,description:`_A_ALERT_PROPS_TYPE_DESCRIPTION_`,type:`String`,default:`danger`,required:!1}]}}function ve(){return{dataSlots:[{name:`default`,description:`_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_`}]}}function ye(){return{dataTranslate:[`_A_INPUT_NUMBER_RANGE_LABEL_MIN_`,`_A_INPUT_NUMBER_RANGE_LABEL_MAX_`]}}var be={name:`PageInputNumberRange`,components:{AlohaPage:f,AlohaTableProps:m,AlohaTableTranslate:h,ATranslation:ee,PageInputNumberRangeBasic:C,PageInputNumberRangeLabelDescription:k,PageInputNumberRangePlaceholder:L,PageInputNumberRangeReadonly:H,PageInputNumberRangeTypeInteger:Y,PageInputNumberRangeTypeIntegerNonNegative:oe,PageInputNumberRangeTypeIntegerPositive:$},setup(){let{pageTitle:e}=ge(),{dataProps:t}=_e(),{dataSlots:n}=ve(),{dataEvents:r}=me(),{dataExposes:i}=he(),{dataTranslate:a}=ye();return{dataEvents:r,dataExposes:i,dataProps:t,dataSlots:n,dataTranslate:a,pageTitle:e}},data(){return{model:void 0,modelArr:void 0,modelArr2:void 0,data:[{label:`Aloha 1`,id:`aloha_1`,group:`group 1`},{label:`Aloha 2`,id:`aloha_2`},{label:`Aloha 3`,id:`aloha_3`,group:`group 1`},{label:`Aloha 4`,id:`aloha_4`},{label:`Aloha 5`,id:`aloha_5`,group:`group 2`},{label:`AlohaAlohaAlohaAlohaAlohaAlohaAl ohaAlohaAlohaAlohaAlohaAloha AlohaAlohaAlohaAlohaAlohaAlohaAloha 6`,id:`aloha_6`,group:`group 2`},{label:`AlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAloha 7`,id:`aloha_7`,group:`group 2`},{label:`AlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAloha 8`,id:`aloha_8`}]}},methods:{getLabel({item:e}){return`callback: ${e.label}`}}};function xe(e,t,i,s,l,ee){let u=r(`a-translation`),d=r(`page-input-number-range-basic`),f=r(`page-input-number-range-label-description`),p=r(`page-input-number-range-type-integer`),m=r(`page-input-number-range-type-integer-non-negative`),h=r(`page-input-number-range-type-integer-positive`),g=r(`page-input-number-range-placeholder`),_=r(`page-input-number-range-readonly`),v=r(`aloha-table-translate`),y=r(`aloha-page`);return c(),n(y,{"page-title":e.pageTitle},{body:o(()=>[a(u,{tag:`p`,html:`_A_INPUT_NUMBER_RANGE_COMPONENT_DESCRIPTION_`}),a(d),a(f),a(p),a(m),a(h),a(g),a(_),a(v,{data:e.dataTranslate},null,8,[`data`])]),_:1},8,[`page-title`])}var Se=d(be,[[`render`,xe]]);export{Se as default};