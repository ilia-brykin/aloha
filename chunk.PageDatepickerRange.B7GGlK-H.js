import{A as R,a as N}from"./chunk.AlohaExample.CjncY9yb.js";import{A as O}from"./chunk.AlohaTableProps.DjKAjPAL.js";import{_ as i,A as C}from"./bundle.index.D9gcatRx.js";import{d as A}from"./chunk.AForm.D7gs2-jc.js";import{r as u,k as t,J as l,aJ as s,H as p,O as _,N as g,aK as S}from"./chunk.vendor.Ca3-nzbX.js";import{u as k}from"./chunk.vendor-lodash.-viuv_rg.js";import"./chunk.ATable.BbEiHoGB.js";import"./chunk.utilsMath.DoITS5e9.js";import"./chunk.ADatepicker.xMcjIPGU.js";import"./chunk.UiMixinProps.SXpQQH-L.js";import"./chunk.AInputNumber.BVsa2dH8.js";function G(){return{codeHtml:`<a-datepicker-range
  v-model="model"
  label="Aloha"
</a-datepicker-range>
<div class="a_mt_3">model: {{ model }}</div>`}}function y(){return{codeJs:`import {
  ref,
} from "vue";

import ADatepickerRange from "aloha-vue/ui/ADatepickerRange/ADatepickerRange";

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
};`}}const K={name:"PageDatepickerRangeBasic",components:{ADatepickerRange:A,AlohaExample:R},setup(){const{codeHtml:e}=G(),{codeJs:a}=y(),n=u(void 0);return{codeHtml:e,codeJs:a,model:n}}},b={class:"a_mt_3"};function h(e,a,n,E,c,m){const r=t("a-datepicker-range"),d=t("aloha-example");return p(),l(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_PAGE_DATEPICKER_RANGE_BASIC_HEADER_",description:"_PAGE_DATEPICKER_RANGE_BASIC_DESCRIPTION_",props:["v-model","label"]},{default:s(()=>[_(r,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=o=>e.model=o),label:"Aloha"},null,8,["modelValue"]),g("div",b,"model: "+S(e.model),1)]),_:1},8,["code-html","code-js"])}const q=i(K,[["render",h]]);function H(){return{codeHtml:`<a-datepicker-range
  v-model="model"
  label="_PAGE_DATEPICKER_RANGE_CUSTOM_FIRST_DAY_EXAMPLE_"
  first-day-of-week=4
</a-datepicker-range>`}}function L(){return{codeJs:`import {
  ref,
} from "vue";

import ADatepickerRange from "aloha-vue/ui/ADatepickerRange/ADatepickerRange";

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
};`}}const $={name:"PageDatepickerRangeCustomFirstDay",components:{ADatepickerRange:A,AlohaExample:R},setup(){const{codeHtml:e}=H(),{codeJs:a}=L(),n=u(void 0);return{codeHtml:e,codeJs:a,model:n}}};function U(e,a,n,E,c,m){const r=t("a-datepicker-range"),d=t("aloha-example");return p(),l(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_PAGE_DATEPICKER_RANGE_CUSTOM_FIRST_DAY_HEADER_",description:"_PAGE_DATEPICKER_RANGE_CUSTOM_FIRST_DAY_DESCRIPTION_",props:["v-model","label","firstDayOfWeek"]},{default:s(()=>[_(r,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=o=>e.model=o),label:"_PAGE_DATEPICKER_RANGE_CUSTOM_FIRST_DAY_EXAMPLE_","first-day-of-week":4},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const B=i($,[["render",U]]);function M(){return{codeHtml:`<a-datepicker-range
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

import ADatepickerRange from "aloha-vue/ui/ADatepickerRange/ADatepickerRange";

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
};`}}const F={name:"PageDatepickerRangeDisabledVariants",components:{ADatepickerRange:A,AlohaExample:R},setup(){const{codeHtml:e}=M(),{codeJs:a}=v(),n=u(void 0);return{codeHtml:e,codeJs:a,model:n}}};function V(e,a,n,E,c,m){const r=t("a-datepicker-range"),d=t("aloha-example");return p(),l(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_PAGE_DATEPICKER_RANGE_DISABLED_VARIANTS_HEADER_",description:"_PAGE_DATEPICKER_RANGE_DISABLED_VARIANTS_DESCRIPTION_",props:["v-model","disabled","disabledFrom","disabledUntil"]},{default:s(()=>[_(r,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=o=>e.model=o),disabled:!0},null,8,["modelValue"]),_(r,{modelValue:e.model,"onUpdate:modelValue":a[1]||(a[1]=o=>e.model=o),"disabled-from":!0},null,8,["modelValue"]),_(r,{modelValue:e.model,"onUpdate:modelValue":a[2]||(a[2]=o=>e.model=o),"disabled-until":!0},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const Y=i(F,[["render",V]]);function J(){return{codeHtml:`<a-datepicker-range
  v-model="model"
  format="DD.MM.YY"
  format-save="YY-MM-DD"
</a-datepicker-range>`}}function j(){return{codeJs:`import {
  ref,
} from "vue";

import ADatepickerRange from "aloha-vue/ui/ADatepickerRange/ADatepickerRange";

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
};`}}const x={name:"PageDatepickerRangeFormatCustomization",components:{ADatepickerRange:A,AlohaExample:R},setup(){const{codeHtml:e}=J(),{codeJs:a}=j(),n=u(void 0);return{codeHtml:e,codeJs:a,model:n}}};function X(e,a,n,E,c,m){const r=t("a-datepicker-range"),d=t("aloha-example");return p(),l(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_PAGE_DATEPICKER_RANGE_FORMAT_CUSTOMIZATION_HEADER_",description:"_PAGE_DATEPICKER_RANGE_FORMAT_CUSTOMIZATION_DESCRIPTION_",props:["v-model","format","formatSave"]},{default:s(()=>[_(r,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=o=>e.model=o),format:"DD.MM.YY","format-save":"YY-MM-DD"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const W=i(x,[["render",X]]);function z(){return{codeHtml:`<a-datepicker-range
  v-model="model"
  label="Aloha"
  help-text="Aloha helpText"
</a-datepicker-range>`}}function w(){return{codeJs:`import {
  ref,
} from "vue";

import ADatepickerRange from "aloha-vue/ui/ADatepickerRange/ADatepickerRange";

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
};`}}const Z={name:"PageDatepickerRangeHelpText",components:{ADatepickerRange:A,AlohaExample:R},setup(){const{codeHtml:e}=z(),{codeJs:a}=w(),n=u(void 0);return{codeHtml:e,codeJs:a,model:n}}};function Q(e,a,n,E,c,m){const r=t("a-datepicker-range"),d=t("aloha-example");return p(),l(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_PAGE_DATEPICKER_RANGE_HELP_TEXT_HEADER_",description:"_PAGE_DATEPICKER_RANGE_HELP_TEXT_DESCRIPTION_",props:["v-model","label","helpText"]},{default:s(()=>[_(r,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=o=>e.model=o),label:"Aloha","help-text":"Aloha helpText"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const ee=i(Z,[["render",Q]]);function ae(){return{dataProps:[{name:"id",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_ID_",type:"[String, Number]",default:()=>k("a_ui_"),required:!1},{name:"htmlId",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_HTML_ID_",type:"String",default:void 0,required:!1},{name:"idPrefix",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_ID_PREFIX_",type:"String",default:void 0,required:!1},{name:"appendToBody",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_APPEND_TO_BODY_",type:"Boolean",default:!1,required:!1},{name:"change",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_CHANGE_",type:"Function",default:()=>{},required:!1},{name:"clearable",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_CLEARABLE_",type:"Boolean",default:!0,required:!1},{name:"disabled",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_DISABLED_",type:"Boolean",default:!1,required:!1},{name:"disabledFrom",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_DISABLED_FROM_",type:"Boolean",default:!1,required:!1},{name:"disabledUntil",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_DISABLED_UNTIL_",type:"Boolean",default:!1,required:!1},{name:"errors",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_ERRORS_",type:"[String, Array]",default:void 0,required:!1},{name:"errorsAll",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_ERRORS_ALL_",type:"Object",default:()=>({}),required:!1},{name:"extra",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_EXTRA_",type:"Object",default:void 0,required:!1},{name:"firstDayOfWeek",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_FIRST_DAY_OF_WEEK_",type:"Number",default:1,required:!1},{name:"format",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_FORMAT_",type:"[String, Object]",default:"DD.MM.YYYY",required:!1},{name:"formatSave",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_FORMAT_SAVE_",type:"String",default:"YYYY-MM-DD",required:!1},{name:"helpText",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_HELP_TEXT_",type:"String",default:void 0,required:!1},{name:"iconDay",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_ICON_DAY_",type:"[Number, String]",default:void 0,required:!1},{name:"inputAttributes",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_INPUT_ATTRIBUTES_",type:"Object",default:()=>({}),required:!1},{name:"inputAttributesFrom",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_INPUT_ATTRIBUTES_FROM_",type:"Object",default:()=>({}),required:!1},{name:"inputAttributesUntil",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_INPUT_ATTRIBUTES_UNTIL_",type:"Object",default:()=>({}),required:!1},{name:"inputClass",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_INPUT_CLASS_",type:"[String, Number, Boolean, Array, Object, Date, Function, Symbol]",default:"pux_datepicker__input",required:!1},{name:"inputName",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_INPUT_NAME_",type:"String",default:"date",required:!1},{name:"inputWidth",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_INPUT_WIDTH_",type:"Number",default:270,required:!1},{name:"isHide",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_IS_HIDE_",type:"Boolean",default:void 0,required:!1},{name:"isRender",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_IS_RENDER_",type:"Boolean",default:!0,required:!1},{name:"keyFrom",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_KEY_FROM_",type:"String",default:"from",required:!1},{name:"keyUntil",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_KEY_UNTIL_",type:"String",default:"until",required:!1},{name:"label",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_LABEL_",type:"[String, Number]",default:void 0,required:!1},{name:"labelClass",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_LABEL_CLASS_",type:"",default:void 0,required:!1},{name:"labelFrom",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_LABEL_FROM_",type:String,default:"_A_DATEPICKER_RANGE_FROM_",required:!1},{name:"labelUntil",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_LABEL_UNTIL_",type:String,default:"_A_DATEPICKER_RANGE_UNTIL_",required:!1},{name:"lang",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_LANG_",type:"String",default:"de",required:!1},{name:"modelUndefined",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_MODEL_UNDEFINED_",type:"",default:void 0,required:!1},{name:"modelValue",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_MODEL_VALUE_",type:"Object",default:()=>({}),required:!1},{name:"options",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_OPTIONS_",type:"Object",default:()=>({}),required:!1},{name:"placeholderFrom",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_PLACEHOLDER_FROM_",type:"[String, Number]",default:void 0,required:!1},{name:"placeholderUntil",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_PLACEHOLDER_UNTIL_",type:"[String, Number]",default:void 0,required:!1},{name:"placement",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_PLACEMENT_",type:"String",default:"bottom-start",required:!1},{name:"popupStyle",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_POPUP_STYLE_",type:"Object",default:()=>({}),required:!1},{name:"readonly",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_READONLY_",type:"Boolean",default:void 0,required:!1},{name:"required",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_REQUIRED_",type:"Boolean",default:!1,required:!1},{name:"shortcuts",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_SHORTSCUTS_",type:"[Boolean, Array]",default:void 0,required:!1},{name:"type",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_TYPE_",type:"String",default:"dateRange",required:!1}]}}const te={name:"PageDatepickerRange",components:{AlohaPage:N,AlohaTableProps:O,ATranslation:C,PageDatepickerRangeBasic:q,PageDatepickerRangeCustomFirstDay:B,PageDatepickerRangeDisabledVariants:Y,PageDatepickerRangeFormatCustomization:W,PageDatepickerRangeHelpText:ee},setup(){const{dataProps:e}=ae();return{dataProps:e}}};function ne(e,a,n,E,c,m){const r=t("a-translation"),d=t("page-datepicker-range-basic"),o=t("page-datepicker-range-custom-first-day"),P=t("page-datepicker-range-disabled-variants"),I=t("page-datepicker-range-format-customization"),D=t("page-datepicker-range-help-text"),f=t("aloha-table-props"),T=t("aloha-page");return p(),l(T,{"page-title":"DatepickerRange"},{body:s(()=>[_(r,{tag:"p",html:"_A_DATEPICKER_RANGE_DESCRIPTION_"}),_(d),_(o),_(P),_(I),_(D),_(f,{data:e.dataProps},null,8,["data"])]),_:1})}const Re=i(te,[["render",ne]]);export{Re as default};
