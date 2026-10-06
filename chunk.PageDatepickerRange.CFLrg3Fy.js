import{$t as e,Ct as t,Tt as n,Ut as r,Yt as i,kt as a,qt as o,wt as s,zt as c}from"./chunk.vendor.CZPox1kV.js";import{r as l}from"./chunk.vendor-lodash.BnpO4xCi.js";import{Z as u,et as d,kt as f,t as p}from"./bundle.index.BmSiyQNH.js";import{n as m,t as h}from"./chunk.AlohaExample.CD4LlhAz.js";import{t as g}from"./chunk.AlohaTableProps.Dksi7fmb.js";import{t as _}from"./chunk.AlohaTableTranslate.C-b2Nle9.js";function v(){return{codeHtml:`<a-datepicker-range
  v-model="model"
  label="Aloha"
</a-datepicker-range>
<div class="a_mt_3">model: {{ model }}</div>`}}function y(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ADatepickerRange,
} from "aloha-vue";

export default {
  name: "PageDatepickerRangeBasic",
  components: {
    ADatepickerRange,
  },
  setup() {
    const model = ref(undefined);

    return {
      model,
    };
  },
};`}}var b={name:`PageDatepickerRangeBasic`,components:{ADatepickerRange:d,AlohaExample:h},setup(){let{codeHtml:e}=v(),{codeJs:t}=y();return{codeHtml:e,codeJs:t,model:i(void 0)}}},x={class:`a_mt_3`};function S(t,i,l,u,d,f){let p=r(`a-datepicker-range`),m=r(`aloha-example`);return c(),n(m,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_PAGE_DATEPICKER_RANGE_BASIC_HEADER_`,description:`_PAGE_DATEPICKER_RANGE_BASIC_DESCRIPTION_`,props:[`v-model`,`label`]},{default:o(()=>[a(p,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,label:`Aloha`},null,8,[`modelValue`]),s(`div`,x,`model: `+e(t.model),1)]),_:1},8,[`code-html`,`code-js`])}var C=p(b,[[`render`,S]]);function w(){return{codeHtml:`<a-datepicker-range
  v-model="model"
  label="_PAGE_DATEPICKER_RANGE_CUSTOM_FIRST_DAY_EXAMPLE_"
  first-day-of-week=4
</a-datepicker-range>`}}function T(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ADatepickerRange,
} from "aloha-vue";

export default {
  name: "PageDatepickerRangeCustomFirstDay",
  components: {
    ADatepickerRange,
  },
  setup() {
    const model = ref(undefined);

    return {
      model,
    };
  },
};`}}var E={name:`PageDatepickerRangeCustomFirstDay`,components:{ADatepickerRange:d,AlohaExample:h},setup(){let{codeHtml:e}=w(),{codeJs:t}=T();return{codeHtml:e,codeJs:t,model:i(void 0)}}};function D(e,t,i,s,l,u){let d=r(`a-datepicker-range`),f=r(`aloha-example`);return c(),n(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_PAGE_DATEPICKER_RANGE_CUSTOM_FIRST_DAY_HEADER_`,description:`_PAGE_DATEPICKER_RANGE_CUSTOM_FIRST_DAY_DESCRIPTION_`,props:[`v-model`,`label`,`firstDayOfWeek`]},{default:o(()=>[a(d,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`_PAGE_DATEPICKER_RANGE_CUSTOM_FIRST_DAY_EXAMPLE_`,"first-day-of-week":4},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var O=p(E,[[`render`,D]]);function k(){return{codeHtml:`<a-datepicker-range
 v-model="model"
  :disabled="true">
</a-datepicker-range>
<a-datepicker-range
 v-model="model"
  :disabled-from="true">
</a-datepicker-range>
<a-datepicker-range
 v-model="model"
  :disabled-until="true">
</a-datepicker-range>`}}function A(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ADatepickerRange,
} from "aloha-vue";

export default {
  name: "PageDatepickerRangeDisabledVariants",
  components: {
    ADatepickerRange,
  },
  setup() {
    const model = ref(undefined);

    return {
      model,
    };
  },
};`}}var j={name:`PageDatepickerRangeDisabledVariants`,components:{ADatepickerRange:d,AlohaExample:h},setup(){let{codeHtml:e}=k(),{codeJs:t}=A();return{codeHtml:e,codeJs:t,model:i(void 0)}}};function M(e,t,i,s,l,u){let d=r(`a-datepicker-range`),f=r(`aloha-example`);return c(),n(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_PAGE_DATEPICKER_RANGE_DISABLED_VARIANTS_HEADER_`,description:`_PAGE_DATEPICKER_RANGE_DISABLED_VARIANTS_DESCRIPTION_`,props:[`v-model`,`disabled`,`disabledFrom`,`disabledUntil`]},{default:o(()=>[a(d,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,disabled:!0},null,8,[`modelValue`]),a(d,{modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,"disabled-from":!0},null,8,[`modelValue`]),a(d,{modelValue:e.model,"onUpdate:modelValue":t[2]||=t=>e.model=t,"disabled-until":!0},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var N=p(j,[[`render`,M]]);function P(){return{codeHtml:`<a-datepicker-range
  v-model="model"
  format="DD.MM.YY"
  format-save="YY-MM-DD"
</a-datepicker-range>`}}function F(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ADatepickerRange,
} from "aloha-vue";

export default {
  name: "PageDatepickerRangeBasic",
  components: {
    ADatepickerRange,
  },
  setup() {
    const model = ref(undefined);

    return {
      model,
    };
  },
};`}}var I={name:`PageDatepickerRangeFormatCustomization`,components:{ADatepickerRange:d,AlohaExample:h},setup(){let{codeHtml:e}=P(),{codeJs:t}=F();return{codeHtml:e,codeJs:t,model:i(void 0)}}};function L(e,t,i,s,l,u){let d=r(`a-datepicker-range`),f=r(`aloha-example`);return c(),n(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_PAGE_DATEPICKER_RANGE_FORMAT_CUSTOMIZATION_HEADER_`,description:`_PAGE_DATEPICKER_RANGE_FORMAT_CUSTOMIZATION_DESCRIPTION_`,props:[`v-model`,`format`,`formatSave`]},{default:o(()=>[a(d,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,format:`DD.MM.YY`,"format-save":`YY-MM-DD`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var R=p(I,[[`render`,L]]);function z(){return{codeHtml:`<a-datepicker-range
  v-model="model"
  label="Aloha"
  help-text="Aloha helpText"
</a-datepicker-range>`}}function ee(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ADatepickerRange,
} from "aloha-vue";

export default {
  name: "PageDatepickerRangeHelpText",
  components: {
    ADatepickerRange,
  },
  setup() {
    const model = ref(undefined);

    return {
      model,
    };
  },
};`}}var B={name:`PageDatepickerRangeHelpText`,components:{ADatepickerRange:d,AlohaExample:h},setup(){let{codeHtml:e}=z(),{codeJs:t}=ee();return{codeHtml:e,codeJs:t,model:i(void 0)}}};function V(e,t,i,s,l,u){let d=r(`a-datepicker-range`),f=r(`aloha-example`);return c(),n(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_PAGE_DATEPICKER_RANGE_HELP_TEXT_HEADER_`,description:`_PAGE_DATEPICKER_RANGE_HELP_TEXT_DESCRIPTION_`,props:[`v-model`,`label`,`helpText`]},{default:o(()=>[a(d,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`Aloha`,"help-text":`Aloha helpText`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var H=p(B,[[`render`,V]]);function U(){return{codeHtml:`<a-datepicker-range
  v-model="model"
  label="Date"
  label-description="Aloha"
></a-datepicker-range>`}}function W(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ADatepickerRange,
} from "aloha-vue";
    
export default {
  name: "PageDatepickerRangeLabelDescription",
  components: {
    ADatepickerRange,
  },
  setup() {
    const model = ref([]);
    
    return {
      data,
      model,
    };
  },
};`}}var G={name:`PageDatepickerRangeLabelDescription`,components:{ADatepickerRange:d,AlohaExample:h},setup(){let e=i(void 0),{codeHtml:t}=U(),{codeJs:n}=W();return{codeHtml:t,codeJs:n,model:e}}};function K(e,t,i,s,l,u){let d=r(`a-datepicker-range`),f=r(`aloha-example`);return c(),n(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_`,description:`_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_`,props:[`label-description`]},{default:o(()=>[a(d,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`Date`,"label-description":`Aloha`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var q=p(G,[[`render`,K]]);function J(){return{codeHtml:`<a-datepicker-range
  :model-value="model1"
  :readonly="true"
  label="Input 1"
</a-datepicker-range>
<a-datepicker-range
  :model-value="model2"
  :readonly="true"
  class="a_mt_3"
  label="Input 2"
  readonly-default-until="-"
</a-datepicker-range>
<a-datepicker-range
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  label="Input 3"
  readonly-default-from="-"
</a-datepicker-range>
<a-datepicker-range
  :model-value="model4"
  :readonly="true"
  class="a_mt_3"
  label="Input 4"
</a-datepicker-range>
<a-datepicker-range
  :model-value="model4"
  :readonly="true"
  class="a_mt_3"
  help-text="Aloha"
  label="Input 5"
  readonly-default="-"
</a-datepicker-range>`}}function Y(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ADatepickerRange,
} from "aloha-vue";

export default {
  name: "PageDatepickerRangeReadonly",
  components: {
    ADatepickerRange,
  },
  setup() {
    const model1 = ref({ from: "2025-03-05", until: "2025-03-12" });
    const model2 = ref({ from: "2025-03-05" });
    const model3 = ref({ until: "2025-03-12" });
    const model4 = ref(undefined);

    return {
      model1,
      model2,
      model3,
      model4,
    };
  },
};`}}var X={name:`PageDatepickerRangeReadonly`,components:{ADatepickerRange:d,AlohaExample:h},setup(){let{codeHtml:e}=J(),{codeJs:t}=Y();return{codeHtml:e,codeJs:t,model1:i({from:`2025-03-05`,until:`2025-03-12`}),model2:i({from:`2025-03-05`}),model3:i({until:`2025-03-12`}),model4:i(void 0)}}};function Z(e,t,i,s,l,u){let d=r(`a-datepicker-range`),f=r(`aloha-example`);return c(),n(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_READONLY_HEADER_`,description:`_A_UI_GROUP_READONLY_DESCRIPTION_`,props:[`readonly`,`readonly-default`,`readonly-default-from`,`readonly-default-from`]},{default:o(()=>[a(d,{"model-value":e.model1,readonly:!0,label:`Input 1`},null,8,[`model-value`]),a(d,{class:`a_mt_3`,"model-value":e.model2,readonly:!0,label:`Input 2`,"readonly-default-until":`-`},null,8,[`model-value`]),a(d,{class:`a_mt_3`,"model-value":e.model3,readonly:!0,label:`Input 3`,"readonly-default-from":`-`},null,8,[`model-value`]),a(d,{class:`a_mt_3`,"model-value":e.model4,readonly:!0,label:`Input 4`},null,8,[`model-value`]),a(d,{class:`a_mt_3`,"model-value":e.model4,readonly:!0,"help-text":`Aloha`,label:`Input 5`,"readonly-default":`-`},null,8,[`model-value`])]),_:1},8,[`code-html`,`code-js`])}var Q=p(X,[[`render`,Z]]);function $(){let e=t(()=>f({placeholder:`_A_DATEPICKER_RANGE_COMPONENT_NAME_`}));return{pageTitle:t(()=>`ADatepickerRange${e.value?` (${e.value})`:``}`)}}function te(){return{dataProps:[{name:`id`,description:`_A_DATEPICKER_RANGE_DESCRIPTION_PROP_ID_`,type:`[String, Number]`,default:()=>l(`a_ui_`),required:!1},{name:`htmlId`,description:`_A_DATEPICKER_RANGE_DESCRIPTION_PROP_HTML_ID_`,type:`String`,default:void 0,required:!1},{name:`idPrefix`,description:`_A_DATEPICKER_RANGE_DESCRIPTION_PROP_ID_PREFIX_`,type:`String`,default:void 0,required:!1},{name:`appendToBody`,description:`_A_DATEPICKER_RANGE_DESCRIPTION_PROP_APPEND_TO_BODY_`,type:`Boolean`,default:!1,required:!1},{name:`change`,description:`_A_DATEPICKER_RANGE_DESCRIPTION_PROP_CHANGE_`,type:`Function`,default:()=>{},required:!1},{name:`clearable`,description:`_A_DATEPICKER_RANGE_DESCRIPTION_PROP_CLEARABLE_`,type:`Boolean`,default:!0,required:!1},{name:`disabled`,description:`_A_DATEPICKER_RANGE_DESCRIPTION_PROP_DISABLED_`,type:`Boolean`,default:!1,required:!1},{name:`disabledFrom`,description:`_A_DATEPICKER_RANGE_DESCRIPTION_PROP_DISABLED_FROM_`,type:`Boolean`,default:!1,required:!1},{name:`disabledUntil`,description:`_A_DATEPICKER_RANGE_DESCRIPTION_PROP_DISABLED_UNTIL_`,type:`Boolean`,default:!1,required:!1},{name:`errors`,description:`_A_DATEPICKER_RANGE_DESCRIPTION_PROP_ERRORS_`,type:`[String, Array]`,default:void 0,required:!1},{name:`errorsAll`,description:`_A_DATEPICKER_RANGE_DESCRIPTION_PROP_ERRORS_ALL_`,type:`Object`,default:()=>({}),required:!1},{name:`extra`,description:`_A_DATEPICKER_RANGE_DESCRIPTION_PROP_EXTRA_`,type:`Object`,default:void 0,required:!1},{name:`firstDayOfWeek`,description:`_A_DATEPICKER_RANGE_DESCRIPTION_PROP_FIRST_DAY_OF_WEEK_`,type:`Number`,default:1,required:!1},{name:`format`,description:`_A_DATEPICKER_RANGE_DESCRIPTION_PROP_FORMAT_`,type:`[String, Object]`,default:`DD.MM.YYYY`,required:!1},{name:`formatSave`,description:`_A_DATEPICKER_RANGE_DESCRIPTION_PROP_FORMAT_SAVE_`,type:`String`,default:`YYYY-MM-DD`,required:!1},{name:`helpText`,description:`_A_DATEPICKER_RANGE_DESCRIPTION_PROP_HELP_TEXT_`,type:`String`,default:void 0,required:!1},{name:`iconDay`,description:`_A_DATEPICKER_RANGE_DESCRIPTION_PROP_ICON_DAY_`,type:`[Number, String]`,default:void 0,required:!1},{name:`inputAttributes`,description:`_A_DATEPICKER_RANGE_DESCRIPTION_PROP_INPUT_ATTRIBUTES_`,type:`Object`,default:()=>({}),required:!1},{name:`inputAttributesFrom`,description:`_A_DATEPICKER_RANGE_DESCRIPTION_PROP_INPUT_ATTRIBUTES_FROM_`,type:`Object`,default:()=>({}),required:!1},{name:`inputAttributesUntil`,description:`_A_DATEPICKER_RANGE_DESCRIPTION_PROP_INPUT_ATTRIBUTES_UNTIL_`,type:`Object`,default:()=>({}),required:!1},{name:`inputClass`,description:`_A_DATEPICKER_RANGE_DESCRIPTION_PROP_INPUT_CLASS_`,type:`[String, Number, Boolean, Array, Object, Date, Function, Symbol]`,default:`pux_datepicker__input`,required:!1},{name:`inputName`,description:`_A_DATEPICKER_RANGE_DESCRIPTION_PROP_INPUT_NAME_`,type:`String`,default:`date`,required:!1},{name:`inputWidth`,description:`_A_DATEPICKER_RANGE_DESCRIPTION_PROP_INPUT_WIDTH_`,type:`Number`,default:270,required:!1},{name:`isHide`,description:`_A_DATEPICKER_RANGE_DESCRIPTION_PROP_IS_HIDE_`,type:`Boolean`,default:void 0,required:!1},{name:`isRender`,description:`_A_DATEPICKER_RANGE_DESCRIPTION_PROP_IS_RENDER_`,type:`Boolean`,default:!0,required:!1},{name:`keyFrom`,description:`_A_DATEPICKER_RANGE_DESCRIPTION_PROP_KEY_FROM_`,type:`String`,default:`from`,required:!1},{name:`keyUntil`,description:`_A_DATEPICKER_RANGE_DESCRIPTION_PROP_KEY_UNTIL_`,type:`String`,default:`until`,required:!1},{name:`label`,description:`_A_DATEPICKER_RANGE_DESCRIPTION_PROP_LABEL_`,type:`[String, Number]`,default:void 0,required:!1},{name:`label-class`,description:`_A_DATEPICKER_RANGE_DESCRIPTION_PROP_LABEL_CLASS_`,type:``,default:void 0,required:!1},{name:`label-description`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`label-from`,description:`_A_DATEPICKER_RANGE_DESCRIPTION_PROP_LABEL_FROM_`,type:String,default:`_A_DATEPICKER_RANGE_FROM_`,required:!1},{name:`label-until`,description:`_A_DATEPICKER_RANGE_DESCRIPTION_PROP_LABEL_UNTIL_`,type:String,default:`_A_DATEPICKER_RANGE_UNTIL_`,required:!1},{name:`lang`,description:`_A_DATEPICKER_RANGE_DESCRIPTION_PROP_LANG_`,type:`String`,default:`de`,required:!1},{name:`modelUndefined`,description:`_A_DATEPICKER_RANGE_DESCRIPTION_PROP_MODEL_UNDEFINED_`,type:``,default:void 0,required:!1},{name:`modelValue`,description:`_A_DATEPICKER_RANGE_DESCRIPTION_PROP_MODEL_VALUE_`,type:`Object`,default:()=>({}),required:!1},{name:`options`,description:`_A_DATEPICKER_RANGE_DESCRIPTION_PROP_OPTIONS_`,type:`Object`,default:()=>({}),required:!1},{name:`placeholderFrom`,description:`_A_DATEPICKER_RANGE_DESCRIPTION_PROP_PLACEHOLDER_FROM_`,type:`[String, Number]`,default:void 0,required:!1},{name:`placeholderUntil`,description:`_A_DATEPICKER_RANGE_DESCRIPTION_PROP_PLACEHOLDER_UNTIL_`,type:`[String, Number]`,default:void 0,required:!1},{name:`placement`,description:`_A_DATEPICKER_RANGE_DESCRIPTION_PROP_PLACEMENT_`,type:`String`,default:`bottom-start`,required:!1},{name:`popupStyle`,description:`_A_DATEPICKER_RANGE_DESCRIPTION_PROP_POPUP_STYLE_`,type:`Object`,default:()=>({}),required:!1},{name:`readonly`,description:`_A_UI_PROPS_READONLY_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`readonly-default`,description:`_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_`,type:`String`,default:``,required:!1},{name:`required`,description:`_A_DATEPICKER_RANGE_DESCRIPTION_PROP_REQUIRED_`,type:`Boolean`,default:!1,required:!1},{name:`shortcuts`,description:`_A_DATEPICKER_RANGE_DESCRIPTION_PROP_SHORTSCUTS_`,type:`[Boolean, Array]`,default:void 0,required:!1},{name:`type`,description:`_A_DATEPICKER_RANGE_DESCRIPTION_PROP_TYPE_`,type:`String`,default:`dateRange`,required:!1}]}}function ne(){return{dataTranslate:[`_A_DATEPICKER_RANGE_FROM_`,`_A_DATEPICKER_RANGE_UNTIL_`]}}var re={name:`PageDatepickerRange`,components:{AlohaPage:m,AlohaTableProps:g,AlohaTableTranslate:_,ATranslation:u,PageDatepickerRangeBasic:C,PageDatepickerRangeCustomFirstDay:O,PageDatepickerRangeDisabledVariants:N,PageDatepickerRangeFormatCustomization:R,PageDatepickerRangeHelpText:H,PageDatepickerRangeLabelDescription:q,PageDatepickerRangeReadonly:Q},setup(){let{pageTitle:e}=$(),{dataProps:t}=te(),{dataTranslate:n}=ne();return{dataProps:t,dataTranslate:n,pageTitle:e}}};function ie(e,t,i,s,l,u){let d=r(`a-translation`),f=r(`page-datepicker-range-basic`),p=r(`page-datepicker-range-custom-first-day`),m=r(`page-datepicker-range-disabled-variants`),h=r(`page-datepicker-range-format-customization`),g=r(`page-datepicker-range-help-text`),_=r(`page-datepicker-range-label-description`),v=r(`page-datepicker-range-readonly`),y=r(`aloha-table-props`),b=r(`aloha-table-translate`),x=r(`aloha-page`);return c(),n(x,{"page-title":e.pageTitle},{body:o(()=>[a(d,{tag:`p`,html:`_A_DATEPICKER_RANGE_DESCRIPTION_`}),a(f),a(p),a(m),a(h),a(g),a(_),a(v),a(y,{data:e.dataProps},null,8,[`data`]),a(b,{data:e.dataTranslate},null,8,[`data`])]),_:1},8,[`page-title`])}var ae=p(re,[[`render`,ie]]);export{ae as default};