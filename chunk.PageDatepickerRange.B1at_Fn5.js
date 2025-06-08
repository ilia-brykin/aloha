import{A as R,a as C}from"./chunk.AlohaExample.HXctZIAi.js";import{A as S}from"./chunk.AlohaTableProps.DPW5Y9T_.js";import{A as y}from"./chunk.AlohaTableTranslate.DmWsr6qM.js";import{p as A,_ as m,g as k,A as G}from"./bundle.index.DpDJz0hx.js";import{r as l,U as c,aS as u,e as t,V as E,Z as o,Y as b,aT as h,d as P}from"./chunk.vendor.COYgx38y.js";import{u as K}from"./chunk.vendor-lodash.DdGPhwvj.js";import"./chunk.APageTabTitle.CTx786xT.js";import"./chunk.AlohaHighlightjs.CW1W2LCP.js";import"./chunk.ATable.WmNL2I6D.js";import"./chunk.translations-ar.DikNrS15.js";import"./chunk.translations-de.C_kdcvw1.js";import"./chunk.translations-en.DzH5pXDU.js";import"./chunk.translations-es.DvU66HNm.js";import"./chunk.translations-fr.Co6-FjqY.js";import"./chunk.translations-hr.j96alxtH.js";import"./chunk.translations-it.CfXK7oRn.js";import"./chunk.translations-ru.BqZq3ibW.js";function $(){return{codeHtml:`<a-datepicker-range
  v-model="model"
  label="Aloha"
</a-datepicker-range>
<div class="a_mt_3">model: {{ model }}</div>`}}function v(){return{codeJs:`import {
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
};`}}const H={name:"PageDatepickerRangeBasic",components:{ADatepickerRange:A,AlohaExample:R},setup(){const{codeHtml:e}=$(),{codeJs:a}=v(),n=l(void 0);return{codeHtml:e,codeJs:a,model:n}}},U={class:"a_mt_3"};function L(e,a,n,i,s,p){const r=t("a-datepicker-range"),_=t("aloha-example");return E(),c(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_PAGE_DATEPICKER_RANGE_BASIC_HEADER_",description:"_PAGE_DATEPICKER_RANGE_BASIC_DESCRIPTION_",props:["v-model","label"]},{default:u(()=>[o(r,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=d=>e.model=d),label:"Aloha"},null,8,["modelValue"]),b("div",U,"model: "+h(e.model),1)]),_:1},8,["code-html","code-js"])}const q=m(H,[["render",L]]);function M(){return{codeHtml:`<a-datepicker-range
  v-model="model"
  label="_PAGE_DATEPICKER_RANGE_CUSTOM_FIRST_DAY_EXAMPLE_"
  first-day-of-week=4
</a-datepicker-range>`}}function B(){return{codeJs:`import {
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
};`}}const F={name:"PageDatepickerRangeCustomFirstDay",components:{ADatepickerRange:A,AlohaExample:R},setup(){const{codeHtml:e}=M(),{codeJs:a}=B(),n=l(void 0);return{codeHtml:e,codeJs:a,model:n}}};function V(e,a,n,i,s,p){const r=t("a-datepicker-range"),_=t("aloha-example");return E(),c(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_PAGE_DATEPICKER_RANGE_CUSTOM_FIRST_DAY_HEADER_",description:"_PAGE_DATEPICKER_RANGE_CUSTOM_FIRST_DAY_DESCRIPTION_",props:["v-model","label","firstDayOfWeek"]},{default:u(()=>[o(r,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=d=>e.model=d),label:"_PAGE_DATEPICKER_RANGE_CUSTOM_FIRST_DAY_EXAMPLE_","first-day-of-week":4},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const Y=m(F,[["render",V]]);function J(){return{codeHtml:`<a-datepicker-range
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
</a-datepicker-range>`}}function j(){return{codeJs:`import {
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
};`}}const x={name:"PageDatepickerRangeDisabledVariants",components:{ADatepickerRange:A,AlohaExample:R},setup(){const{codeHtml:e}=J(),{codeJs:a}=j(),n=l(void 0);return{codeHtml:e,codeJs:a,model:n}}};function X(e,a,n,i,s,p){const r=t("a-datepicker-range"),_=t("aloha-example");return E(),c(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_PAGE_DATEPICKER_RANGE_DISABLED_VARIANTS_HEADER_",description:"_PAGE_DATEPICKER_RANGE_DISABLED_VARIANTS_DESCRIPTION_",props:["v-model","disabled","disabledFrom","disabledUntil"]},{default:u(()=>[o(r,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=d=>e.model=d),disabled:!0},null,8,["modelValue"]),o(r,{modelValue:e.model,"onUpdate:modelValue":a[1]||(a[1]=d=>e.model=d),"disabled-from":!0},null,8,["modelValue"]),o(r,{modelValue:e.model,"onUpdate:modelValue":a[2]||(a[2]=d=>e.model=d),"disabled-until":!0},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const W=m(x,[["render",X]]);function z(){return{codeHtml:`<a-datepicker-range
  v-model="model"
  format="DD.MM.YY"
  format-save="YY-MM-DD"
</a-datepicker-range>`}}function w(){return{codeJs:`import {
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
};`}}const Z={name:"PageDatepickerRangeFormatCustomization",components:{ADatepickerRange:A,AlohaExample:R},setup(){const{codeHtml:e}=z(),{codeJs:a}=w(),n=l(void 0);return{codeHtml:e,codeJs:a,model:n}}};function Q(e,a,n,i,s,p){const r=t("a-datepicker-range"),_=t("aloha-example");return E(),c(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_PAGE_DATEPICKER_RANGE_FORMAT_CUSTOMIZATION_HEADER_",description:"_PAGE_DATEPICKER_RANGE_FORMAT_CUSTOMIZATION_DESCRIPTION_",props:["v-model","format","formatSave"]},{default:u(()=>[o(r,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=d=>e.model=d),format:"DD.MM.YY","format-save":"YY-MM-DD"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const ee=m(Z,[["render",Q]]);function ae(){return{codeHtml:`<a-datepicker-range
  v-model="model"
  label="Aloha"
  help-text="Aloha helpText"
</a-datepicker-range>`}}function te(){return{codeJs:`import {
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
};`}}const oe={name:"PageDatepickerRangeHelpText",components:{ADatepickerRange:A,AlohaExample:R},setup(){const{codeHtml:e}=ae(),{codeJs:a}=te(),n=l(void 0);return{codeHtml:e,codeJs:a,model:n}}};function ne(e,a,n,i,s,p){const r=t("a-datepicker-range"),_=t("aloha-example");return E(),c(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_PAGE_DATEPICKER_RANGE_HELP_TEXT_HEADER_",description:"_PAGE_DATEPICKER_RANGE_HELP_TEXT_DESCRIPTION_",props:["v-model","label","helpText"]},{default:u(()=>[o(r,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=d=>e.model=d),label:"Aloha","help-text":"Aloha helpText"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const re=m(oe,[["render",ne]]);function de(){return{codeHtml:`<a-datepicker-range
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
</a-datepicker-range>`}}function _e(){return{codeJs:`import {
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
};`}}const le={name:"PageDatepickerRangeReadonly",components:{ADatepickerRange:A,AlohaExample:R},setup(){const{codeHtml:e}=de(),{codeJs:a}=_e(),n=l({from:"2025-03-05",until:"2025-03-12"}),i=l({from:"2025-03-05"}),s=l({until:"2025-03-12"}),p=l(void 0);return{codeHtml:e,codeJs:a,model1:n,model2:i,model3:s,model4:p}}};function ie(e,a,n,i,s,p){const r=t("a-datepicker-range"),_=t("aloha-example");return E(),c(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default","readonly-default-from","readonly-default-from"]},{default:u(()=>[o(r,{"model-value":e.model1,readonly:!0,label:"Input 1"},null,8,["model-value"]),o(r,{class:"a_mt_3","model-value":e.model2,readonly:!0,label:"Input 2","readonly-default-until":"-"},null,8,["model-value"]),o(r,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"Input 3","readonly-default-from":"-"},null,8,["model-value"]),o(r,{class:"a_mt_3","model-value":e.model4,readonly:!0,label:"Input 4"},null,8,["model-value"]),o(r,{class:"a_mt_3","model-value":e.model4,readonly:!0,"help-text":"Aloha",label:"Input 5","readonly-default":"-"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const se=m(le,[["render",ie]]);function pe(){const e=P(()=>k({placeholder:"_A_DATEPICKER_RANGE_COMPONENT_NAME_"}));return{pageTitle:P(()=>`ADatepickerRange${e.value?` (${e.value})`:""}`)}}function me(){return{dataProps:[{name:"id",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_ID_",type:"[String, Number]",default:()=>K("a_ui_"),required:!1},{name:"htmlId",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_HTML_ID_",type:"String",default:void 0,required:!1},{name:"idPrefix",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_ID_PREFIX_",type:"String",default:void 0,required:!1},{name:"appendToBody",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_APPEND_TO_BODY_",type:"Boolean",default:!1,required:!1},{name:"change",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_CHANGE_",type:"Function",default:()=>{},required:!1},{name:"clearable",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_CLEARABLE_",type:"Boolean",default:!0,required:!1},{name:"disabled",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_DISABLED_",type:"Boolean",default:!1,required:!1},{name:"disabledFrom",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_DISABLED_FROM_",type:"Boolean",default:!1,required:!1},{name:"disabledUntil",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_DISABLED_UNTIL_",type:"Boolean",default:!1,required:!1},{name:"errors",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_ERRORS_",type:"[String, Array]",default:void 0,required:!1},{name:"errorsAll",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_ERRORS_ALL_",type:"Object",default:()=>({}),required:!1},{name:"extra",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_EXTRA_",type:"Object",default:void 0,required:!1},{name:"firstDayOfWeek",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_FIRST_DAY_OF_WEEK_",type:"Number",default:1,required:!1},{name:"format",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_FORMAT_",type:"[String, Object]",default:"DD.MM.YYYY",required:!1},{name:"formatSave",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_FORMAT_SAVE_",type:"String",default:"YYYY-MM-DD",required:!1},{name:"helpText",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_HELP_TEXT_",type:"String",default:void 0,required:!1},{name:"iconDay",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_ICON_DAY_",type:"[Number, String]",default:void 0,required:!1},{name:"inputAttributes",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_INPUT_ATTRIBUTES_",type:"Object",default:()=>({}),required:!1},{name:"inputAttributesFrom",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_INPUT_ATTRIBUTES_FROM_",type:"Object",default:()=>({}),required:!1},{name:"inputAttributesUntil",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_INPUT_ATTRIBUTES_UNTIL_",type:"Object",default:()=>({}),required:!1},{name:"inputClass",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_INPUT_CLASS_",type:"[String, Number, Boolean, Array, Object, Date, Function, Symbol]",default:"pux_datepicker__input",required:!1},{name:"inputName",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_INPUT_NAME_",type:"String",default:"date",required:!1},{name:"inputWidth",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_INPUT_WIDTH_",type:"Number",default:270,required:!1},{name:"isHide",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_IS_HIDE_",type:"Boolean",default:void 0,required:!1},{name:"isRender",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_IS_RENDER_",type:"Boolean",default:!0,required:!1},{name:"keyFrom",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_KEY_FROM_",type:"String",default:"from",required:!1},{name:"keyUntil",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_KEY_UNTIL_",type:"String",default:"until",required:!1},{name:"label",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_LABEL_",type:"[String, Number]",default:void 0,required:!1},{name:"labelClass",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_LABEL_CLASS_",type:"",default:void 0,required:!1},{name:"labelFrom",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_LABEL_FROM_",type:String,default:"_A_DATEPICKER_RANGE_FROM_",required:!1},{name:"labelUntil",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_LABEL_UNTIL_",type:String,default:"_A_DATEPICKER_RANGE_UNTIL_",required:!1},{name:"lang",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_LANG_",type:"String",default:"de",required:!1},{name:"modelUndefined",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_MODEL_UNDEFINED_",type:"",default:void 0,required:!1},{name:"modelValue",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_MODEL_VALUE_",type:"Object",default:()=>({}),required:!1},{name:"options",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_OPTIONS_",type:"Object",default:()=>({}),required:!1},{name:"placeholderFrom",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_PLACEHOLDER_FROM_",type:"[String, Number]",default:void 0,required:!1},{name:"placeholderUntil",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_PLACEHOLDER_UNTIL_",type:"[String, Number]",default:void 0,required:!1},{name:"placement",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_PLACEMENT_",type:"String",default:"bottom-start",required:!1},{name:"popupStyle",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_POPUP_STYLE_",type:"Object",default:()=>({}),required:!1},{name:"readonly",description:"_A_UI_PROPS_READONLY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"readonly-default",description:"_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_",type:"String",default:"",required:!1},{name:"required",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_REQUIRED_",type:"Boolean",default:!1,required:!1},{name:"shortcuts",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_SHORTSCUTS_",type:"[Boolean, Array]",default:void 0,required:!1},{name:"type",description:"_A_DATEPICKER_RANGE_DESCRIPTION_PROP_TYPE_",type:"String",default:"dateRange",required:!1}]}}function ce(){return{dataTranslate:["_A_DATEPICKER_RANGE_FROM_","_A_DATEPICKER_RANGE_UNTIL_"]}}const ue={name:"PageDatepickerRange",components:{AlohaPage:C,AlohaTableProps:S,AlohaTableTranslate:y,ATranslation:G,PageDatepickerRangeBasic:q,PageDatepickerRangeCustomFirstDay:Y,PageDatepickerRangeDisabledVariants:W,PageDatepickerRangeFormatCustomization:ee,PageDatepickerRangeHelpText:re,PageDatepickerRangeReadonly:se},setup(){const{pageTitle:e}=pe(),{dataProps:a}=me(),{dataTranslate:n}=ce();return{dataProps:a,dataTranslate:n,pageTitle:e}}};function Ee(e,a,n,i,s,p){const r=t("a-translation"),_=t("page-datepicker-range-basic"),d=t("page-datepicker-range-custom-first-day"),f=t("page-datepicker-range-disabled-variants"),I=t("page-datepicker-range-format-customization"),D=t("page-datepicker-range-help-text"),T=t("page-datepicker-range-readonly"),N=t("aloha-table-props"),g=t("aloha-table-translate"),O=t("aloha-page");return E(),c(O,{"page-title":e.pageTitle},{body:u(()=>[o(r,{tag:"p",html:"_A_DATEPICKER_RANGE_DESCRIPTION_"}),o(_),o(d),o(f),o(I),o(D),o(T),o(N,{data:e.dataProps},null,8,["data"]),o(g,{data:e.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const Ke=m(ue,[["render",Ee]]);export{Ke as default};
