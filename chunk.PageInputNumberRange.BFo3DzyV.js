import{t as e}from"./chunk.AlohaPage.DD83_mc4.js";import{t}from"./chunk.AlohaTableProps.B4p6jfYg.js";import{t as n}from"./chunk.AlohaTableTranslate.Ba_5qx59.js";import{Ft as r,It as i,Pt as a,Qt as o,Vt as s,cn as c,mn as l,nn as u,on as d}from"./chunk.vendor.CTxSDDRk.js";import{t as f}from"./chunk.AlohaExample.wt5BqruS.js";import{Xt as p,Y as m,it as h}from"./bundle.index.D6GIGImH.js";import{t as g}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function _(){return{codeHtml:`<a-input-number-range
  v-model="model"
  label="Aloha"
></a-input-number-range>
<div class="a_mt_3">model: {{ model }}</div>`}}function v(){return{codeJs:`import {
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
};`}}var y={name:`PageInputNumberRangeBasic`,components:{AlohaExample:f,AInputNumberRange:m},setup(){let{codeHtml:e}=_(),{codeJs:t}=v();return{codeHtml:e,codeJs:t,model:c(void 0)}}},b={class:`a_columns a_columns_count_12`},x={class:`a_column a_column_6 a_columns_count_12_touch`},ee={class:`a_mt_3`};function S(e,t,n,a,c,f){let p=u(`a-input-number-range`),m=u(`aloha-example`);return o(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`v-model`,`label`]},{default:d(()=>[r(`div`,b,[r(`div`,x,[s(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`Aloha`},null,8,[`modelValue`]),r(`div`,ee,`model: `+l(e.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var C=g(y,[[`render`,S]]);function w(){return{codeHtml:`<a-input-number-range
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
};`}}var E={name:`PageInputNumberRangeLabelDescription`,components:{AlohaExample:f,AInputNumberRange:m},setup(){let{codeHtml:e}=w(),{codeJs:t}=T();return{codeHtml:e,codeJs:t,model:c(void 0)}}},D={class:`a_mt_3`};function O(e,t,n,a,c,f){let p=u(`a-input-number-range`),m=u(`aloha-example`);return o(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_`,description:`_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_`,props:[`label-description`]},{default:d(()=>[s(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`Input`,"label-description":`Aloha`},null,8,[`modelValue`]),r(`div`,D,`model: `+l(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var k=g(E,[[`render`,O]]);function A(){return{codeHtml:`<a-input-number-range
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
};`}}var M={name:`PageInputNumberRangePlaceholder`,components:{AlohaExample:f,AInputNumberRange:m},setup(){let{codeHtml:e}=A(),{codeJs:t}=j();return{codeHtml:e,codeJs:t,model:c(void 0)}}},N={class:`a_columns a_columns_count_12`},P={class:`a_column a_column_6 a_columns_count_12_touch`},F={class:`a_mt_3`};function I(e,t,n,a,c,f){let p=u(`a-input-number-range`),m=u(`aloha-example`);return o(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_NUMBER_RANGE_GROUP_PLACEHOLDER_HEADER_`,description:`_A_INPUT_NUMBER_RANGE_GROUP_PLACEHOLDER_DESCRIPTION_`,props:[`placeholder-max`,`placeholder-min`]},{default:d(()=>[r(`div`,N,[r(`div`,P,[s(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`Aloha`,"placeholder-max":`Max`,"placeholder-min":`Min`,type:`integerRange`},null,8,[`modelValue`]),r(`div`,F,`model: `+l(e.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var L=g(M,[[`render`,I]]);function R(){return{codeHtml:`<a-input-number-range
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
};`}}var B={name:`PageInputNumberRangeReadonly`,components:{AlohaExample:f,AInputNumberRange:m},setup(){let{codeHtml:e}=R(),{codeJs:t}=z();return{codeHtml:e,codeJs:t,model1:c({min:3,max:43}),model2:c({min:3}),model3:c({max:3}),model4:c(void 0)}}};function V(e,t,n,r,a,c){let l=u(`a-input-number-range`),f=u(`aloha-example`);return o(),i(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_READONLY_HEADER_`,description:`_A_UI_GROUP_READONLY_DESCRIPTION_`,props:[`readonly`,`readonly-default`,`readonly-default-max`,`readonly-default-min`]},{default:d(()=>[s(l,{"model-value":e.model1,readonly:!0,label:`Input 1`},null,8,[`model-value`]),s(l,{class:`a_mt_3`,"model-value":e.model2,readonly:!0,label:`Input 2`},null,8,[`model-value`]),s(l,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,label:`Input 3`},null,8,[`model-value`]),s(l,{class:`a_mt_3`,"model-value":e.model4,readonly:!0,label:`Input 4`},null,8,[`model-value`]),s(l,{class:`a_mt_3`,"model-value":e.model4,readonly:!0,label:`Input 5`,"readonly-default":`-`},null,8,[`model-value`]),s(l,{class:`a_mt_3`,"model-value":e.model4,readonly:!0,"help-text":`Aloha`,label:`Input 6`,"readonly-default-max":`-`,"readonly-default-min":`----`},null,8,[`model-value`])]),_:1},8,[`code-html`,`code-js`])}var H=g(B,[[`render`,V]]);function U(){return{codeHtml:`<a-input-number-range
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
};`}}var G={name:`PageInputNumberRangeTypeInteger`,components:{AlohaExample:f,AInputNumberRange:m},setup(){let{codeHtml:e}=U(),{codeJs:t}=W();return{codeHtml:e,codeJs:t,model:c(void 0)}}},te={class:`a_columns a_columns_count_12`},K={class:`a_column a_column_6 a_columns_count_12_touch`},q={class:`a_mt_3`};function J(e,t,n,a,c,f){let p=u(`a-input-number-range`),m=u(`aloha-example`);return o(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_NUMBER_RANGE_GROUP_TYPE_INTEGER_HEADER_`,description:`_A_INPUT_NUMBER_RANGE_GROUP_TYPE_INTEGER_DESCRIPTION_`,props:`type='integerRange'`},{default:d(()=>[r(`div`,te,[r(`div`,K,[s(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`Aloha`,type:`integerRange`},null,8,[`modelValue`]),r(`div`,q,`model: `+l(e.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var Y=g(G,[[`render`,J]]);function X(){return{codeHtml:`<a-input-number-range
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
};`}}var Q={name:`PageInputNumberRangeTypeIntegerNonNegative`,components:{AlohaExample:f,AInputNumberRange:m},setup(){let{codeHtml:e}=X(),{codeJs:t}=Z();return{codeHtml:e,codeJs:t,model:c(void 0)}}},ne={class:`a_columns a_columns_count_12`},re={class:`a_column a_column_6 a_columns_count_12_touch`},ie={class:`a_mt_3`};function ae(e,t,n,a,c,f){let p=u(`a-input-number-range`),m=u(`aloha-example`);return o(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_NUMBER_RANGE_GROUP_TYPE_INTEGER_NON_NEGATIVE_HEADER_`,description:`_A_INPUT_NUMBER_RANGE_GROUP_TYPE_INTEGER_NON_NEGATIVE_DESCRIPTION_`,props:`type='integerNonNegativeRange'`},{default:d(()=>[r(`div`,ne,[r(`div`,re,[s(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`Aloha`,type:`integerNonNegativeRange`},null,8,[`modelValue`]),r(`div`,ie,`model: `+l(e.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var oe=g(Q,[[`render`,ae]]);function se(){return{codeHtml:`<a-input-number-range
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
};`}}var le={name:`PageInputNumberRangeTypeIntegerPositive`,components:{AlohaExample:f,AInputNumberRange:m},setup(){let{codeHtml:e}=se(),{codeJs:t}=ce();return{codeHtml:e,codeJs:t,model:c(void 0)}}},ue={class:`a_columns a_columns_count_12`},de={class:`a_column a_column_6 a_columns_count_12_touch`},fe={class:`a_mt_3`};function pe(e,t,n,a,c,f){let p=u(`a-input-number-range`),m=u(`aloha-example`);return o(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_NUMBER_RANGE_GROUP_TYPE_INTEGER_POSITIVE_HEADER_`,description:`_A_INPUT_NUMBER_RANGE_GROUP_TYPE_INTEGER_POSITIVE_DESCRIPTION_`,props:`type='integerPositiveRange'`},{default:d(()=>[r(`div`,ue,[r(`div`,de,[s(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`Aloha`,type:`integerPositiveRange`},null,8,[`modelValue`]),r(`div`,fe,`model: `+l(e.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var $=g(le,[[`render`,pe]]);function me(){return{dataEvents:[{name:`close`,description:`_A_ALERT_EVENTS_CLOSE_DESCRIPTION_`,type:`Function`}]}}function he(){return{dataExposes:[{name:`close`,description:`_A_ALERT_EXPOSES_CLOSE_DESCRIPTION_`,type:`Function`},{name:`isHidden`,description:`_A_ALERT_EXPOSES_IS_HIDDEN_DESCRIPTION_`,type:`Boolean`}]}}function ge(){let e=a(()=>p({placeholder:`_A_INPUT_NUMBER_RANGE_COMPONENT_NAME_`}));return{pageTitle:a(()=>`AInputNumberRange${e.value?` (${e.value})`:``}`)}}function _e(){return{dataProps:[{name:`alert-class`,description:`_A_ALERT_PROPS_ALERT_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`alert-content-class`,description:`_A_ALERT_PROPS_ALERT_CONTENT_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`btn-close-attributes`,description:`_A_ALERT_PROPS_BTN_CLOSE_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`{}`,required:!1},{name:`closable`,description:`_A_ALERT_PROPS_CLOSABLE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`show-icon`,description:`_A_ALERT_PROPS_HAS_ICON_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`html`,description:`_A_ALERT_PROPS_HTML_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`icon`,description:`_A_ALERT_PROPS_ICON_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`icon-class`,description:`_A_ALERT_PROPS_ICON_CLASS_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`is-visible`,description:`_A_ALERT_PROPS_IS_VISIBLE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`removeAlertOnClose`,description:`_A_ALERT_PROPS_REMOVE_ALERT_ON_CLOSE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`safe-html`,description:`_A_ALERT_PROPS_SAFE_HTML_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`text`,description:`_A_ALERT_PROPS_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`text-close`,description:`_A_ALERT_PROPS_TEXT_CLOSE_DESCRIPTION_`,type:`String`,default:`_ALERT_CLOSE_`,required:!1},{name:`type`,description:`_A_ALERT_PROPS_TYPE_DESCRIPTION_`,type:`String`,default:`danger`,required:!1}]}}function ve(){return{dataSlots:[{name:`default`,description:`_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_`}]}}function ye(){return{dataTranslate:[`_A_INPUT_NUMBER_RANGE_LABEL_MIN_`,`_A_INPUT_NUMBER_RANGE_LABEL_MAX_`]}}var be={name:`PageInputNumberRange`,components:{AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:h,PageInputNumberRangeBasic:C,PageInputNumberRangeLabelDescription:k,PageInputNumberRangePlaceholder:L,PageInputNumberRangeReadonly:H,PageInputNumberRangeTypeInteger:Y,PageInputNumberRangeTypeIntegerNonNegative:oe,PageInputNumberRangeTypeIntegerPositive:$},setup(){let{pageTitle:e}=ge(),{dataProps:t}=_e(),{dataSlots:n}=ve(),{dataEvents:r}=me(),{dataExposes:i}=he(),{dataTranslate:a}=ye();return{dataEvents:r,dataExposes:i,dataProps:t,dataSlots:n,dataTranslate:a,pageTitle:e}},data(){return{model:void 0,modelArr:void 0,modelArr2:void 0,data:[{label:`Aloha 1`,id:`aloha_1`,group:`group 1`},{label:`Aloha 2`,id:`aloha_2`},{label:`Aloha 3`,id:`aloha_3`,group:`group 1`},{label:`Aloha 4`,id:`aloha_4`},{label:`Aloha 5`,id:`aloha_5`,group:`group 2`},{label:`AlohaAlohaAlohaAlohaAlohaAlohaAl ohaAlohaAlohaAlohaAlohaAloha AlohaAlohaAlohaAlohaAlohaAlohaAloha 6`,id:`aloha_6`,group:`group 2`},{label:`AlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAloha 7`,id:`aloha_7`,group:`group 2`},{label:`AlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAloha 8`,id:`aloha_8`}]}},methods:{getLabel({item:e}){return`callback: ${e.label}`}}};function xe(e,t,n,r,a,c){let l=u(`a-translation`),f=u(`page-input-number-range-basic`),p=u(`page-input-number-range-label-description`),m=u(`page-input-number-range-type-integer`),h=u(`page-input-number-range-type-integer-non-negative`),g=u(`page-input-number-range-type-integer-positive`),_=u(`page-input-number-range-placeholder`),v=u(`page-input-number-range-readonly`),y=u(`aloha-table-translate`),b=u(`aloha-table-css-vars`),x=u(`aloha-page`);return o(),i(x,{"page-title":e.pageTitle},{body:d(()=>[s(l,{tag:`p`,html:`_A_INPUT_NUMBER_RANGE_COMPONENT_DESCRIPTION_`}),s(f),s(p),s(m),s(h),s(g),s(_),s(v),s(y,{data:e.dataTranslate},null,8,[`data`]),s(b,{files:`components/ui/AInputNumberRange`})]),_:1},8,[`page-title`])}var Se=g(be,[[`render`,xe]]);export{Se as default};