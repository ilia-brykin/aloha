import{A as R,a as S}from"./chunk.AlohaExample.I_T8ZN4A.js";import{A as k}from"./chunk.AlohaTableProps.HfVEufZi.js";import{A as y}from"./chunk.AlohaTableTranslate.Z_UvtTlb.js";import{t as A,_ as c,g as b,A as G}from"./bundle.index.BPjh6AGg.js";import{r as _,V as m,aT as u,e as t,W as E,_ as n,Z as h,aU as K,d as P}from"./chunk.vendor.DmOTRqbf.js";import{u as $}from"./chunk.vendor-lodash.DsZvX3G1.js";import"./chunk.APageTabTitle.BbOSMcnk.js";import"./chunk.AlohaHighlightjs.8HRkfNnH.js";import"./chunk.ATable.DpXpfRYO.js";import"./chunk.translations-ar.BiLIUuBX.js";import"./chunk.translations-de.Cy_u5T72.js";import"./chunk.translations-en.CWj0a7ej.js";import"./chunk.translations-es.D-4cj_p_.js";import"./chunk.translations-fr.LwkSu7L_.js";import"./chunk.translations-hr.G7gNG4Fu.js";import"./chunk.translations-it.BilXvddc.js";import"./chunk.translations-ru.XOcS94ap.js";function H(){return{codeHtml:`<a-datepicker-range
  v-model="model"
  label="Aloha"
</a-datepicker-range>
<div class="a_mt_3">model: {{ model }}</div>`}}function L(){return{codeJs:`import {
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
};`}}const v={name:"PageDatepickerRangeBasic",components:{ADatepickerRange:A,AlohaExample:R},setup(){const{codeHtml:e}=H(),{codeJs:a}=L(),o=_(void 0);return{codeHtml:e,codeJs:a,model:o}}},U={class:"a_mt_3"};function q(e,a,o,i,s,p){const r=t("a-datepicker-range"),l=t("aloha-example");return E(),m(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_PAGE_DATEPICKER_RANGE_BASIC_HEADER_",description:"_PAGE_DATEPICKER_RANGE_BASIC_DESCRIPTION_",props:["v-model","label"]},{default:u(()=>[n(r,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=d=>e.model=d),label:"Aloha"},null,8,["modelValue"]),h("div",U,"model: "+K(e.model),1)]),_:1},8,["code-html","code-js"])}const B=c(v,[["render",q]]);function M(){return{codeHtml:`<a-datepicker-range
  v-model="model"
  label="_PAGE_DATEPICKER_RANGE_CUSTOM_FIRST_DAY_EXAMPLE_"
  first-day-of-week=4
</a-datepicker-range>`}}function J(){return{codeJs:`import {
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
};`}}const V={name:"PageDatepickerRangeCustomFirstDay",components:{ADatepickerRange:A,AlohaExample:R},setup(){const{codeHtml:e}=M(),{codeJs:a}=J(),o=_(void 0);return{codeHtml:e,codeJs:a,model:o}}};function F(e,a,o,i,s,p){const r=t("a-datepicker-range"),l=t("aloha-example");return E(),m(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_PAGE_DATEPICKER_RANGE_CUSTOM_FIRST_DAY_HEADER_",description:"_PAGE_DATEPICKER_RANGE_CUSTOM_FIRST_DAY_DESCRIPTION_",props:["v-model","label","firstDayOfWeek"]},{default:u(()=>[n(r,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=d=>e.model=d),label:"_PAGE_DATEPICKER_RANGE_CUSTOM_FIRST_DAY_EXAMPLE_","first-day-of-week":4},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const Y=c(V,[["render",F]]);function j(){return{codeHtml:`<a-datepicker-range
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
</a-datepicker-range>`}}function x(){return{codeJs:`import {
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
};`}}const X={name:"PageDatepickerRangeDisabledVariants",components:{ADatepickerRange:A,AlohaExample:R},setup(){const{codeHtml:e}=j(),{codeJs:a}=x(),o=_(void 0);return{codeHtml:e,codeJs:a,model:o}}};function W(e,a,o,i,s,p){const r=t("a-datepicker-range"),l=t("aloha-example");return E(),m(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_PAGE_DATEPICKER_RANGE_DISABLED_VARIANTS_HEADER_",description:"_PAGE_DATEPICKER_RANGE_DISABLED_VARIANTS_DESCRIPTION_",props:["v-model","disabled","disabledFrom","disabledUntil"]},{default:u(()=>[n(r,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=d=>e.model=d),disabled:!0},null,8,["modelValue"]),n(r,{modelValue:e.model,"onUpdate:modelValue":a[1]||(a[1]=d=>e.model=d),"disabled-from":!0},null,8,["modelValue"]),n(r,{modelValue:e.model,"onUpdate:modelValue":a[2]||(a[2]=d=>e.model=d),"disabled-until":!0},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const z=c(X,[["render",W]]);function w(){return{codeHtml:`<a-datepicker-range
  v-model="model"
  format="DD.MM.YY"
  format-save="YY-MM-DD"
</a-datepicker-range>`}}function Z(){return{codeJs:`import {
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
};`}}const Q={name:"PageDatepickerRangeFormatCustomization",components:{ADatepickerRange:A,AlohaExample:R},setup(){const{codeHtml:e}=w(),{codeJs:a}=Z(),o=_(void 0);return{codeHtml:e,codeJs:a,model:o}}};function ee(e,a,o,i,s,p){const r=t("a-datepicker-range"),l=t("aloha-example");return E(),m(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_PAGE_DATEPICKER_RANGE_FORMAT_CUSTOMIZATION_HEADER_",description:"_PAGE_DATEPICKER_RANGE_FORMAT_CUSTOMIZATION_DESCRIPTION_",props:["v-model","format","formatSave"]},{default:u(()=>[n(r,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=d=>e.model=d),format:"DD.MM.YY","format-save":"YY-MM-DD"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const ae=c(Q,[["render",ee]]);function te(){return{codeHtml:`<a-datepicker-range
  v-model="model"
  label="Aloha"
  help-text="Aloha helpText"
</a-datepicker-range>`}}function oe(){return{codeJs:`import {
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
};`}}const ne={name:"PageDatepickerRangeHelpText",components:{ADatepickerRange:A,AlohaExample:R},setup(){const{codeHtml:e}=te(),{codeJs:a}=oe(),o=_(void 0);return{codeHtml:e,codeJs:a,model:o}}};function re(e,a,o,i,s,p){const r=t("a-datepicker-range"),l=t("aloha-example");return E(),m(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_PAGE_DATEPICKER_RANGE_HELP_TEXT_HEADER_",description:"_PAGE_DATEPICKER_RANGE_HELP_TEXT_DESCRIPTION_",props:["v-model","label","helpText"]},{default:u(()=>[n(r,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=d=>e.model=d),label:"Aloha","help-text":"Aloha helpText"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const de=c(ne,[["render",re]]);function le(){return{codeHtml:`<a-datepicker-range
  v-model="model"
  label="Date"
  label-description="Aloha"
></a-datepicker-range>`}}function _e(){return{codeJs:`import {
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
};`}}const ie={name:"PageDatepickerRangeLabelDescription",components:{ADatepickerRange:A,AlohaExample:R},setup(){const e=_(void 0),{codeHtml:a}=le(),{codeJs:o}=_e();return{codeHtml:a,codeJs:o,model:e}}};function se(e,a,o,i,s,p){const r=t("a-datepicker-range"),l=t("aloha-example");return E(),m(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_",description:"_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_",props:["label-description"]},{default:u(()=>[n(r,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=d=>e.model=d),label:"Date","label-description":"Aloha"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const pe=c(ie,[["render",se]]);function ce(){return{codeHtml:`<a-datepicker-range
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
</a-datepicker-range>`}}function me(){return{codeJs:`import {
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
};`}}const ue={name:"PageDatepickerRangeReadonly",components:{ADatepickerRange:A,AlohaExample:R},setup(){const{codeHtml:e}=ce(),{codeJs:a}=me(),o=_({from:"2025-03-05",until:"2025-03-12"}),i=_({from:"2025-03-05"}),s=_({until:"2025-03-12"}),p=_(void 0);return{codeHtml:e,codeJs:a,model1:o,model2:i,model3:s,model4:p}}};function Ee(e,a,o,i,s,p){const r=t("a-datepicker-range"),l=t("aloha-example");return E(),m(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default","readonly-default-from","readonly-default-from"]},{default:u(()=>[n(r,{"model-value":e.model1,readonly:!0,label:"Input 1"},null,8,["model-value"]),n(r,{class:"a_mt_3","model-value":e.model2,readonly:!0,label:"Input 2","readonly-default-until":"-"},null,8,["model-value"]),n(r,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"Input 3","readonly-default-from":"-"},null,8,["model-value"]),n(r,{class:"a_mt_3","model-value":e.model4,readonly:!0,label:"Input 4"},null,8,["model-value"]),n(r,{class:"a_mt_3","model-value":e.model4,readonly:!0,"help-text":"Aloha",label:"Input 5","readonly-default":"-"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const Re=c(ue,[["render",Ee]]);function Ae(){const e=P(()=>b({placeholder:"_A_DATEPICKER_RANGE_COMPONENT_NAME_"}));return{pageTitle:P(()=>`ADatepickerRange${e.value?` (${e.value})`:""}`)}}function Pe(){return{dataProps:[{name:"id",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_ID_",type:"[String, Number]",default:()=>$("a_ui_"),required:!1},{name:"htmlId",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_HTML_ID_",type:"String",default:void 0,required:!1},{name:"idPrefix",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_ID_PREFIX_",type:"String",default:void 0,required:!1},{name:"appendToBody",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_APPEND_TO_BODY_",type:"Boolean",default:!1,required:!1},{name:"change",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_CHANGE_",type:"Function",default:()=>{},required:!1},{name:"clearable",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_CLEARABLE_",type:"Boolean",default:!0,required:!1},{name:"disabled",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_DISABLED_",type:"Boolean",default:!1,required:!1},{name:"disabledFrom",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_DISABLED_FROM_",type:"Boolean",default:!1,required:!1},{name:"disabledUntil",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_DISABLED_UNTIL_",type:"Boolean",default:!1,required:!1},{name:"errors",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_ERRORS_",type:"[String, Array]",default:void 0,required:!1},{name:"errorsAll",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_ERRORS_ALL_",type:"Object",default:()=>({}),required:!1},{name:"extra",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_EXTRA_",type:"Object",default:void 0,required:!1},{name:"firstDayOfWeek",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_FIRST_DAY_OF_WEEK_",type:"Number",default:1,required:!1},{name:"format",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_FORMAT_",type:"[String, Object]",default:"DD.MM.YYYY",required:!1},{name:"formatSave",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_FORMAT_SAVE_",type:"String",default:"YYYY-MM-DD",required:!1},{name:"helpText",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_HELP_TEXT_",type:"String",default:void 0,required:!1},{name:"iconDay",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_ICON_DAY_",type:"[Number, String]",default:void 0,required:!1},{name:"inputAttributes",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_INPUT_ATTRIBUTES_",type:"Object",default:()=>({}),required:!1},{name:"inputAttributesFrom",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_INPUT_ATTRIBUTES_FROM_",type:"Object",default:()=>({}),required:!1},{name:"inputAttributesUntil",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_INPUT_ATTRIBUTES_UNTIL_",type:"Object",default:()=>({}),required:!1},{name:"inputClass",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_INPUT_CLASS_",type:"[String, Number, Boolean, Array, Object, Date, Function, Symbol]",default:"pux_datepicker__input",required:!1},{name:"inputName",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_INPUT_NAME_",type:"String",default:"date",required:!1},{name:"inputWidth",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_INPUT_WIDTH_",type:"Number",default:270,required:!1},{name:"isHide",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_IS_HIDE_",type:"Boolean",default:void 0,required:!1},{name:"isRender",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_IS_RENDER_",type:"Boolean",default:!0,required:!1},{name:"keyFrom",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_KEY_FROM_",type:"String",default:"from",required:!1},{name:"keyUntil",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_KEY_UNTIL_",type:"String",default:"until",required:!1},{name:"label",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_LABEL_",type:"[String, Number]",default:void 0,required:!1},{name:"label-class",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_LABEL_CLASS_",type:"",default:void 0,required:!1},{name:"label-description",description:"_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"label-from",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_LABEL_FROM_",type:String,default:"_A_DATEPICKER_RANGE_FROM_",required:!1},{name:"label-until",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_LABEL_UNTIL_",type:String,default:"_A_DATEPICKER_RANGE_UNTIL_",required:!1},{name:"lang",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_LANG_",type:"String",default:"de",required:!1},{name:"modelUndefined",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_MODEL_UNDEFINED_",type:"",default:void 0,required:!1},{name:"modelValue",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_MODEL_VALUE_",type:"Object",default:()=>({}),required:!1},{name:"options",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_OPTIONS_",type:"Object",default:()=>({}),required:!1},{name:"placeholderFrom",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_PLACEHOLDER_FROM_",type:"[String, Number]",default:void 0,required:!1},{name:"placeholderUntil",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_PLACEHOLDER_UNTIL_",type:"[String, Number]",default:void 0,required:!1},{name:"placement",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_PLACEMENT_",type:"String",default:"bottom-start",required:!1},{name:"popupStyle",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_POPUP_STYLE_",type:"Object",default:()=>({}),required:!1},{name:"readonly",description:"_A_UI_PROPS_READONLY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"readonly-default",description:"_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_",type:"String",default:"",required:!1},{name:"required",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_REQUIRED_",type:"Boolean",default:!1,required:!1},{name:"shortcuts",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_SHORTSCUTS_",type:"[Boolean, Array]",default:void 0,required:!1},{name:"type",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_TYPE_",type:"String",default:"dateRange",required:!1}]}}function fe(){return{dataTranslate:["_A_DATEPICKER_RANGE_FROM_","_A_DATEPICKER_RANGE_UNTIL_"]}}const Ie={name:"PageDatepickerRange",components:{AlohaPage:S,AlohaTableProps:k,AlohaTableTranslate:y,ATranslation:G,PageDatepickerRangeBasic:B,PageDatepickerRangeCustomFirstDay:Y,PageDatepickerRangeDisabledVariants:z,PageDatepickerRangeFormatCustomization:ae,PageDatepickerRangeHelpText:de,PageDatepickerRangeLabelDescription:pe,PageDatepickerRangeReadonly:Re},setup(){const{pageTitle:e}=Ae(),{dataProps:a}=Pe(),{dataTranslate:o}=fe();return{dataProps:a,dataTranslate:o,pageTitle:e}}};function De(e,a,o,i,s,p){const r=t("a-translation"),l=t("page-datepicker-range-basic"),d=t("page-datepicker-range-custom-first-day"),f=t("page-datepicker-range-disabled-variants"),I=t("page-datepicker-range-format-customization"),D=t("page-datepicker-range-help-text"),T=t("page-datepicker-range-label-description"),g=t("page-datepicker-range-readonly"),N=t("aloha-table-props"),O=t("aloha-table-translate"),C=t("aloha-page");return E(),m(C,{"page-title":e.pageTitle},{body:u(()=>[n(r,{tag:"p",html:"_A_DATEPICKER_RANGE_DESCRIPTION_"}),n(l),n(d),n(f),n(I),n(D),n(T),n(g),n(N,{data:e.dataProps},null,8,["data"]),n(O,{data:e.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const qe=c(Ie,[["render",De]]);export{qe as default};
