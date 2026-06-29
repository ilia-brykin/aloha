import{A as T}from"./chunk.AlohaFormTypes.CyH_iQjz.js";import{A as R,a as N}from"./chunk.AlohaExample.CE8y3gMY.js";import{A as D}from"./chunk.AlohaTableProps.BzGpzGuH.js";import{_ as i,g as C,A as h}from"./bundle.index.ChCjitYk.js";import{r as _,Y as p,W as u,aU as c,f as a,$ as o,_ as P,aV as I,d as A}from"./chunk.vendor.BAXy2grE.js";import"./chunk.vendor-lodash.CCzoES9g.js";import{A as S}from"./chunk.AFormElement.8U2jXKHv.js";import"./chunk.AList.Cv5ocgnV.js";import"./chunk.APageTabTitle.CiRmUmgI.js";import"./chunk.AlohaHighlightjs.BK8yZFUI.js";import"./chunk.ATable.bPcVMXkj.js";import"./chunk.translations-ar.B2OoBNnE.js";import"./chunk.translations-de.UgGe9j4v.js";import"./chunk.translations-en.0stqcWf2.js";import"./chunk.translations-es.BwgNL0Sc.js";import"./chunk.translations-fr.C2YYR8Jb.js";import"./chunk.translations-hr.B965uVG9.js";import"./chunk.translations-it.qkDQbydY.js";import"./chunk.translations-ru.x6UIBrxX.js";function b(){return{codeHtml:`<a-form-element
  v-model="model1"
  :required="true"
  label="Input"
  type="text"
></a-form-element>
<div>model1: {{ model1 }}</div>
<a-form-element
  v-model="model2"
  :required="true"
  class="a_mt_3"
  label="Checkbox"
  help-text="Aloha"
  type="oneCheckbox"
></a-form-element>
<div>model2: {{ model2 }}</div>`}}function g(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AFormElement,
} from "aloha-vue";
    
export default {
  name: "PageFormElementBasic",
  components: {
    AFormElement,
  },
  setup() {
    const model1 = ref("1234");
    const model2 = ref(true);
    
    return {
      model1,
      model2,
    };
  },
};`}}const U={name:"PageFormElementBasic",components:{AlohaExample:R,AFormElement:S},setup(){const e=_("1234"),t=_(!0),{codeHtml:n}=b(),{codeJs:r}=g();return{codeHtml:n,codeJs:r,model1:e,model2:t}}};function v(e,t,n,r,s,f){const l=a("a-form-element"),d=a("aloha-example");return p(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","label","type"]},{default:c(()=>[o(l,{modelValue:e.model1,"onUpdate:modelValue":t[0]||(t[0]=m=>e.model1=m),required:!0,label:"Input",type:"text"},null,8,["modelValue"]),P("div",null,"model1: "+I(e.model1),1),o(l,{class:"a_mt_3",modelValue:e.model2,"onUpdate:modelValue":t[1]||(t[1]=m=>e.model2=m),required:!0,label:"Checkbox","help-text":"Aloha",type:"oneCheckbox"},null,8,["modelValue"]),P("div",null,"model2: "+I(e.model2),1)]),_:1},8,["code-html","code-js"])}const L=i(U,[["render",v]]);function q(){return{codeHtml:`<a-form-element
  :model-value="model1"
  :readonly="true"
  label="Input"
  type="text"
></a-form-element>
<a-form-element
  :model-value="model2"
  :readonly="true"
  class="a_mt_3"
  label="Checkbox"
  help-text="Aloha"
  type="oneCheckbox"
></a-form-element>
<a-form-element
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  label="Textarea"
  readonly-default="-"
  type="textarea"
></a-form-element>`}}function x(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AFormElement,
} from "aloha-vue";
    
export default {
  name: "PageFormElementReadonly",
  components: {
    AFormElement,
  },
  setup() {
    const model1 = ref("1234");
    const model2 = ref(true);
    const model3 = ref(undefined);
    
    return {
      model1,
      model2,
      model3,
    };
  },
};`}}const F={name:"PageFormElementReadonly",components:{AlohaExample:R,AFormElement:S},setup(){const e=_("1234"),t=_(!0),n=_(void 0),{codeHtml:r}=q(),{codeJs:s}=x();return{codeHtml:r,codeJs:s,model1:e,model2:t,model3:n}}};function $(e,t,n,r,s,f){const l=a("a-form-element"),d=a("aloha-example");return p(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default"]},{default:c(()=>[o(l,{"model-value":e.model1,readonly:!0,label:"Input",type:"text"},null,8,["model-value"]),o(l,{class:"a_mt_3","model-value":e.model2,readonly:!0,label:"Checkbox","help-text":"Aloha",type:"oneCheckbox"},null,8,["model-value"]),o(l,{class:"a_mt_3","model-value":e.model3,readonly:!0,label:"Textarea","readonly-default":"-",type:"textarea"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const B=i(F,[["render",$]]);function H(){return{dataEvents:[{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"}]}}function M(){const e=A(()=>C({placeholder:"_A_FORM_ELEMENT_COMPONENT_NAME_"}));return{pageTitle:A(()=>`AFormElement${e.value?` (${e.value})`:""}`)}}function V(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-description",description:"_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"options",description:"_A_FORM_ELEMENT_PROPS_OPTIONS_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"readonly",description:"_A_UI_PROPS_READONLY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"readonly-default",description:"_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_",type:"String",default:"",required:!1},{name:"type",description:"_A_FORM_ELEMENT_PROPS_TYPE_DESCRIPTION_",type:"String",default:"text",required:!1}]}}const k={name:"PageFormElement",components:{AlohaFormTypes:T,AlohaPage:N,AlohaTableProps:D,ATranslation:h,PageFormElementBasic:L,PageFormElementReadonly:B},setup(){const{pageTitle:e}=M(),{dataProps:t}=V(),{dataEvents:n}=H();return{dataEvents:n,dataProps:t,pageTitle:e}}};function J(e,t,n,r,s,f){const l=a("a-translation"),d=a("aloha-form-types"),m=a("page-form-element-basic"),O=a("page-form-element-readonly"),E=a("aloha-table-props"),y=a("aloha-page");return p(),u(y,{"page-title":e.pageTitle},{body:c(()=>[o(l,{tag:"p",html:"_A_FORM_ELEMENT_COMPONENT_DESCRIPTION_"}),o(d),o(m),o(O),o(E,{data:e.dataProps},null,8,["data"]),o(E,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"])]),_:1},8,["page-title"])}const _e=i(k,[["render",J]]);export{_e as default};
