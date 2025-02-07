import{m as R,_ as l,A as N}from"./bundle.index.BBIMvqHY.js";import{r as u,O as i,aR as s,b as t,Q as p,V as _,U as O,aS as C}from"./chunk.vendor.CjhiT8UL.js";import{u as g}from"./chunk.vendor-lodash.DyQEPI1B.js";import{A,a as S}from"./chunk.AlohaExample.DyGlJAKb.js";import{A as k}from"./chunk.AlohaTableProps.DdZyVSou.js";import"./chunk.translations-ar.DWwaQC1L.js";import"./chunk.translations-de.Bm_NRjKi.js";import"./chunk.translations-en.CfLmKpaQ.js";import"./chunk.translations-es.C_tSILxJ.js";import"./chunk.translations-fr.acyQpqB8.js";import"./chunk.translations-hr.wGAqklkF.js";import"./chunk.translations-it.CSGg6_Uy.js";import"./chunk.translations-ru.VBYVnDIE.js";import"./chunk.APageTabTitle.B8oRDfz3.js";import"./chunk.AlohaHighlightjs.rF1jvLhM.js";import"./chunk.ATable.CZ3i1xXH.js";function G(){return{codeHtml:`<a-datepicker-range
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
};`}}const b={name:"PageDatepickerRangeBasic",components:{ADatepickerRange:R,AlohaExample:A},setup(){const{codeHtml:e}=G(),{codeJs:a}=y(),o=u(void 0);return{codeHtml:e,codeJs:a,model:o}}},K={class:"a_mt_3"};function h(e,a,o,E,m,c){const r=t("a-datepicker-range"),d=t("aloha-example");return p(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_PAGE_DATEPICKER_RANGE_BASIC_HEADER_",description:"_PAGE_DATEPICKER_RANGE_BASIC_DESCRIPTION_",props:["v-model","label"]},{default:s(()=>[_(r,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=n=>e.model=n),label:"Aloha"},null,8,["modelValue"]),O("div",K,"model: "+C(e.model),1)]),_:1},8,["code-html","code-js"])}const q=l(b,[["render",h]]);function H(){return{codeHtml:`<a-datepicker-range
  v-model="model"
  label="_PAGE_DATEPICKER_RANGE_CUSTOM_FIRST_DAY_EXAMPLE_"
  first-day-of-week=4
</a-datepicker-range>`}}function L(){return{codeJs:`import {
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
};`}}const $={name:"PageDatepickerRangeCustomFirstDay",components:{ADatepickerRange:R,AlohaExample:A},setup(){const{codeHtml:e}=H(),{codeJs:a}=L(),o=u(void 0);return{codeHtml:e,codeJs:a,model:o}}};function U(e,a,o,E,m,c){const r=t("a-datepicker-range"),d=t("aloha-example");return p(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_PAGE_DATEPICKER_RANGE_CUSTOM_FIRST_DAY_HEADER_",description:"_PAGE_DATEPICKER_RANGE_CUSTOM_FIRST_DAY_DESCRIPTION_",props:["v-model","label","firstDayOfWeek"]},{default:s(()=>[_(r,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=n=>e.model=n),label:"_PAGE_DATEPICKER_RANGE_CUSTOM_FIRST_DAY_EXAMPLE_","first-day-of-week":4},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const B=l($,[["render",U]]);function M(){return{codeHtml:`<a-datepicker-range
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
</a-datepicker-range>`}}function v(){return{codeJs:`import {
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
};`}}const V={name:"PageDatepickerRangeDisabledVariants",components:{ADatepickerRange:R,AlohaExample:A},setup(){const{codeHtml:e}=M(),{codeJs:a}=v(),o=u(void 0);return{codeHtml:e,codeJs:a,model:o}}};function F(e,a,o,E,m,c){const r=t("a-datepicker-range"),d=t("aloha-example");return p(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_PAGE_DATEPICKER_RANGE_DISABLED_VARIANTS_HEADER_",description:"_PAGE_DATEPICKER_RANGE_DISABLED_VARIANTS_DESCRIPTION_",props:["v-model","disabled","disabledFrom","disabledUntil"]},{default:s(()=>[_(r,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=n=>e.model=n),disabled:!0},null,8,["modelValue"]),_(r,{modelValue:e.model,"onUpdate:modelValue":a[1]||(a[1]=n=>e.model=n),"disabled-from":!0},null,8,["modelValue"]),_(r,{modelValue:e.model,"onUpdate:modelValue":a[2]||(a[2]=n=>e.model=n),"disabled-until":!0},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const Y=l(V,[["render",F]]);function J(){return{codeHtml:`<a-datepicker-range
  v-model="model"
  format="DD.MM.YY"
  format-save="YY-MM-DD"
</a-datepicker-range>`}}function j(){return{codeJs:`import {
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
};`}}const x={name:"PageDatepickerRangeFormatCustomization",components:{ADatepickerRange:R,AlohaExample:A},setup(){const{codeHtml:e}=J(),{codeJs:a}=j(),o=u(void 0);return{codeHtml:e,codeJs:a,model:o}}};function X(e,a,o,E,m,c){const r=t("a-datepicker-range"),d=t("aloha-example");return p(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_PAGE_DATEPICKER_RANGE_FORMAT_CUSTOMIZATION_HEADER_",description:"_PAGE_DATEPICKER_RANGE_FORMAT_CUSTOMIZATION_DESCRIPTION_",props:["v-model","format","formatSave"]},{default:s(()=>[_(r,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=n=>e.model=n),format:"DD.MM.YY","format-save":"YY-MM-DD"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const W=l(x,[["render",X]]);function z(){return{codeHtml:`<a-datepicker-range
  v-model="model"
  label="Aloha"
  help-text="Aloha helpText"
</a-datepicker-range>`}}function w(){return{codeJs:`import {
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
};`}}const Q={name:"PageDatepickerRangeHelpText",components:{ADatepickerRange:R,AlohaExample:A},setup(){const{codeHtml:e}=z(),{codeJs:a}=w(),o=u(void 0);return{codeHtml:e,codeJs:a,model:o}}};function Z(e,a,o,E,m,c){const r=t("a-datepicker-range"),d=t("aloha-example");return p(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_PAGE_DATEPICKER_RANGE_HELP_TEXT_HEADER_",description:"_PAGE_DATEPICKER_RANGE_HELP_TEXT_DESCRIPTION_",props:["v-model","label","helpText"]},{default:s(()=>[_(r,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=n=>e.model=n),label:"Aloha","help-text":"Aloha helpText"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const ee=l(Q,[["render",Z]]);function ae(){return{dataProps:[{name:"id",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_ID_",type:"[String, Number]",default:()=>g("a_ui_"),required:!1},{name:"htmlId",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_HTML_ID_",type:"String",default:void 0,required:!1},{name:"idPrefix",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_ID_PREFIX_",type:"String",default:void 0,required:!1},{name:"appendToBody",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_APPEND_TO_BODY_",type:"Boolean",default:!1,required:!1},{name:"change",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_CHANGE_",type:"Function",default:()=>{},required:!1},{name:"clearable",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_CLEARABLE_",type:"Boolean",default:!0,required:!1},{name:"disabled",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_DISABLED_",type:"Boolean",default:!1,required:!1},{name:"disabledFrom",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_DISABLED_FROM_",type:"Boolean",default:!1,required:!1},{name:"disabledUntil",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_DISABLED_UNTIL_",type:"Boolean",default:!1,required:!1},{name:"errors",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_ERRORS_",type:"[String, Array]",default:void 0,required:!1},{name:"errorsAll",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_ERRORS_ALL_",type:"Object",default:()=>({}),required:!1},{name:"extra",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_EXTRA_",type:"Object",default:void 0,required:!1},{name:"firstDayOfWeek",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_FIRST_DAY_OF_WEEK_",type:"Number",default:1,required:!1},{name:"format",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_FORMAT_",type:"[String, Object]",default:"DD.MM.YYYY",required:!1},{name:"formatSave",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_FORMAT_SAVE_",type:"String",default:"YYYY-MM-DD",required:!1},{name:"helpText",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_HELP_TEXT_",type:"String",default:void 0,required:!1},{name:"iconDay",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_ICON_DAY_",type:"[Number, String]",default:void 0,required:!1},{name:"inputAttributes",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_INPUT_ATTRIBUTES_",type:"Object",default:()=>({}),required:!1},{name:"inputAttributesFrom",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_INPUT_ATTRIBUTES_FROM_",type:"Object",default:()=>({}),required:!1},{name:"inputAttributesUntil",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_INPUT_ATTRIBUTES_UNTIL_",type:"Object",default:()=>({}),required:!1},{name:"inputClass",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_INPUT_CLASS_",type:"[String, Number, Boolean, Array, Object, Date, Function, Symbol]",default:"pux_datepicker__input",required:!1},{name:"inputName",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_INPUT_NAME_",type:"String",default:"date",required:!1},{name:"inputWidth",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_INPUT_WIDTH_",type:"Number",default:270,required:!1},{name:"isHide",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_IS_HIDE_",type:"Boolean",default:void 0,required:!1},{name:"isRender",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_IS_RENDER_",type:"Boolean",default:!0,required:!1},{name:"keyFrom",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_KEY_FROM_",type:"String",default:"from",required:!1},{name:"keyUntil",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_KEY_UNTIL_",type:"String",default:"until",required:!1},{name:"label",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_LABEL_",type:"[String, Number]",default:void 0,required:!1},{name:"labelClass",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_LABEL_CLASS_",type:"",default:void 0,required:!1},{name:"labelFrom",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_LABEL_FROM_",type:String,default:"_A_DATEPICKER_RANGE_FROM_",required:!1},{name:"labelUntil",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_LABEL_UNTIL_",type:String,default:"_A_DATEPICKER_RANGE_UNTIL_",required:!1},{name:"lang",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_LANG_",type:"String",default:"de",required:!1},{name:"modelUndefined",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_MODEL_UNDEFINED_",type:"",default:void 0,required:!1},{name:"modelValue",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_MODEL_VALUE_",type:"Object",default:()=>({}),required:!1},{name:"options",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_OPTIONS_",type:"Object",default:()=>({}),required:!1},{name:"placeholderFrom",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_PLACEHOLDER_FROM_",type:"[String, Number]",default:void 0,required:!1},{name:"placeholderUntil",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_PLACEHOLDER_UNTIL_",type:"[String, Number]",default:void 0,required:!1},{name:"placement",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_PLACEMENT_",type:"String",default:"bottom-start",required:!1},{name:"popupStyle",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_POPUP_STYLE_",type:"Object",default:()=>({}),required:!1},{name:"readonly",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_READONLY_",type:"Boolean",default:void 0,required:!1},{name:"required",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_REQUIRED_",type:"Boolean",default:!1,required:!1},{name:"shortcuts",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_SHORTSCUTS_",type:"[Boolean, Array]",default:void 0,required:!1},{name:"type",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_TYPE_",type:"String",default:"dateRange",required:!1}]}}const te={name:"PageDatepickerRange",components:{AlohaPage:S,AlohaTableProps:k,ATranslation:N,PageDatepickerRangeBasic:q,PageDatepickerRangeCustomFirstDay:B,PageDatepickerRangeDisabledVariants:Y,PageDatepickerRangeFormatCustomization:W,PageDatepickerRangeHelpText:ee},setup(){const{dataProps:e}=ae();return{dataProps:e}}};function oe(e,a,o,E,m,c){const r=t("a-translation"),d=t("page-datepicker-range-basic"),n=t("page-datepicker-range-custom-first-day"),P=t("page-datepicker-range-disabled-variants"),I=t("page-datepicker-range-format-customization"),f=t("page-datepicker-range-help-text"),D=t("aloha-table-props"),T=t("aloha-page");return p(),i(T,{"page-title":"DatepickerRange"},{body:s(()=>[_(r,{tag:"p",html:"_A_DATEPICKER_RANGE_DESCRIPTION_"}),_(d),_(n),_(P),_(I),_(f),_(D,{data:e.dataProps},null,8,["data"])]),_:1})}const fe=l(te,[["render",oe]]);export{fe as default};
