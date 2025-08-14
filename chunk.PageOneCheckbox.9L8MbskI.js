import{A as f,a as g}from"./chunk.AlohaExample.BliScsiM.js";import{A as U}from"./chunk.AlohaTableProps.BjgIoxTR.js";import{p as O,_ as i,f as H,g as D,A as $}from"./bundle.index.rlyFjb7C.js";import{r as _,V as p,aT as u,e as n,W as h,_ as t,Z as b,aU as E,a$ as y,d as S}from"./chunk.vendor.Daji9SX9.js";import"./chunk.vendor-lodash.B3VVIBC-.js";import"./chunk.APageTabTitle.2aU46WhH.js";import"./chunk.AlohaHighlightjs.BMm9LXzJ.js";import"./chunk.ATable.BcAGERP3.js";import"./chunk.translations-ar.BojwqMl_.js";import"./chunk.translations-de.Cs8AX5zd.js";import"./chunk.translations-en.B6SbFZD7.js";import"./chunk.translations-es.Bq5-ThmB.js";import"./chunk.translations-fr.CNUiPhMd.js";import"./chunk.translations-hr.BHL5VI6-.js";import"./chunk.translations-it.CT6ME8Ab.js";import"./chunk.translations-ru.-V16kngL.js";function J(){return{codeHtml:`<a-one-checkbox
  v-model="model"
  label="Aloha"
></a-one-checkbox>
<div>model: {{ model }}</div>`}}function V(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AOneCheckbox,
} from "aloha-vue";
    
export default {
  name: "PageOneCheckboxBasic",
  components: {
    AOneCheckbox,
  },
  setup() {
    const model = ref(undefined);
    
    return {
      model,
    };
  },
};`}}const B={name:"PageJsonBasic",components:{AlohaExample:f,AOneCheckbox:O},setup(){const e=_(void 0),{codeHtml:o}=J(),{codeJs:a}=V();return{codeHtml:o,codeJs:a,model:e}}};function L(e,o,a,r,s,m){const l=n("a-one-checkbox"),d=n("aloha-example");return h(),p(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","label"]},{default:u(()=>[t(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=c=>e.model=c),label:"Aloha"},null,8,["modelValue"]),b("div",null,"model: "+E(e.model),1)]),_:1},8,["code-html","code-js"])}const q=i(B,[["render",L]]);function j(){return{codeHtml:`<a-one-checkbox
  :change="changeModel"
  :model-value="model"
  label="Aloha"
></a-one-checkbox>
<div>model: {{ model }}</div>`}}function G(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AOneCheckbox,
} from "aloha-vue";
    
export default {
  name: "PageOneCheckboxChange",
  components: {
    AOneCheckbox,
  },
  setup() {
    const model = ref(undefined);
    
    const changeModel = ({ model: _model, id, props }) => {
      model.value = _model;
      console.log(id, props);
    };
    
    return {
      changeModel,
      model,
    };
  },
};`}}const X={name:"PageOneCheckboxChange",components:{AlohaExample:f,AOneCheckbox:O},setup(){const e=_(void 0),o=({model:s,id:m,props:l})=>{e.value=s,console.log(m,l)},{codeHtml:a}=j(),{codeJs:r}=G();return{changeModel:o,codeHtml:a,codeJs:r,model:e}}};function M(e,o,a,r,s,m){const l=n("a-one-checkbox"),d=n("aloha-example");return h(),p(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CHANGE_HEADER_",description:"_A_UI_GROUP_CHANGE_DESCRIPTION_",props:["change","model-value"]},{default:u(()=>[t(l,{change:e.changeModel,"model-value":e.model,label:"Aloha"},null,8,["change","model-value"]),b("div",null,"model: "+E(e.model),1)]),_:1},8,["code-html","code-js"])}const K=i(X,[["render",M]]);function w(){return{codeHtml:`<a-one-checkbox
  v-model="model"
  errors="Aloha"
  label="Aloha"
></a-one-checkbox>`}}function F(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AOneCheckbox,
} from "aloha-vue";
    
export default {
  name: "PageOneCheckboxErrors",
  components: {
    AOneCheckbox,
  },
  setup() {
    const model = ref(undefined);
    
    return {
      model,
    };
  },
};`}}const W={name:"PageOneCheckboxErrors",components:{AlohaExample:f,AOneCheckbox:O},setup(){const e=_(void 0),{codeHtml:o}=w(),{codeJs:a}=F();return{codeHtml:o,codeJs:a,model:e}}};function Y(e,o,a,r,s,m){const l=n("a-one-checkbox"),d=n("aloha-example");return h(),p(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERRORS_HEADER_",description:"_A_UI_GROUP_ERRORS_DESCRIPTION_",props:["errors"]},{default:u(()=>[t(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=c=>e.model=c),errors:"Aloha",label:"Aloha"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const z=i(W,[["render",Y]]);function Q(){return{codeHtml:`<a-one-checkbox
  v-model="model1"
  :false-value="false"
  label="false-value='false'"
></a-one-checkbox>
<div>model1: {{ model1 }}</div>
<a-one-checkbox
  v-model="model2"
  :false-value="0"
  class="a_mt_3"
  label="false-value='0'"
></a-one-checkbox>
<div>model2: {{ model2 }}</div>`}}function Z(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AOneCheckbox,
} from "aloha-vue";
    
export default {
  name: "PageOneCheckboxFalseValue",
  components: {
    AOneCheckbox,
  },
  setup() {
    const model1 = ref(true);
    const model2 = ref(true);
    
    return {
      model1,
      model2,
    };
  },
};`}}const ee={name:"PageOneCheckboxFalseValue",components:{AlohaExample:f,AOneCheckbox:O},setup(){const e=_(!0),o=_(!0),{codeHtml:a}=Q(),{codeJs:r}=Z();return{codeHtml:a,codeJs:r,model1:e,model2:o}}};function oe(e,o,a,r,s,m){const l=n("a-one-checkbox"),d=n("aloha-example");return h(),p(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ONE_CHECKBOX_GROUP_FALSE_VALUE_HEADER_",description:"_A_ONE_CHECKBOX_GROUP_FALSE_VALUE_DESCRIPTION_",props:["false-value"]},{default:u(()=>[t(l,{modelValue:e.model1,"onUpdate:modelValue":o[0]||(o[0]=c=>e.model1=c),"false-value":!1,label:"false-value='false'"},null,8,["modelValue"]),b("div",null,"model1: "+E(e.model1),1),t(l,{class:"a_mt_3",modelValue:e.model2,"onUpdate:modelValue":o[1]||(o[1]=c=>e.model2=c),"false-value":0,label:"false-value='0'"},null,8,["modelValue"]),b("div",null,"model2: "+E(e.model2),1)]),_:1},8,["code-html","code-js"])}const ne=i(ee,[["render",oe]]);function ae(){return{codeHtml:`<a-one-checkbox
  v-model="model"
  help-text="Aloha"
  label="Aloha"
></a-one-checkbox>`}}function te(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AOneCheckbox,
} from "aloha-vue";
    
export default {
  name: "PageOneCheckboxHelpText",
  components: {
    AOneCheckbox,
  },
  setup() {
    const model = ref(undefined);
    
    return {
      model,
    };
  },
};`}}const le={name:"PageOneCheckboxHelpText",components:{AlohaExample:f,AOneCheckbox:O},setup(){const e=_(void 0),{codeHtml:o}=ae(),{codeJs:a}=te();return{codeHtml:o,codeJs:a,model:e}}};function de(e,o,a,r,s,m){const l=n("a-one-checkbox"),d=n("aloha-example");return h(),p(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_HELP_TEXT_HEADER_",description:"_A_UI_GROUP_HELP_TEXT_DESCRIPTION_",props:["help-text"]},{default:u(()=>[t(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=c=>e.model=c),"help-text":"Aloha",label:"Aloha"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const ce=i(le,[["render",de]]);function re(){return{codeHtml:`<a-one-checkbox
  v-model="model"
    :indeterminate="true"
    label="Aloha"
></a-one-checkbox>`}}function se(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AOneCheckbox,
} from "aloha-vue";
    
export default {
  name: "PageOneCheckboxIndeterminate",
  components: {
    AOneCheckbox,
  },
  setup() {
    const model = ref(undefined);
    
    return {
      model,
    };
  },
};`}}const _e={name:"PageOneCheckboxIndeterminate",components:{AlohaExample:f,AOneCheckbox:O},setup(){const e=_(void 0),{codeHtml:o}=re(),{codeJs:a}=se();return{codeHtml:o,codeJs:a,model:e}}};function me(e,o,a,r,s,m){const l=n("a-one-checkbox"),d=n("aloha-example");return h(),p(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ONE_CHECKBOX_GROUP_INDETERMINATE_HEADER_",description:"_A_ONE_CHECKBOX_GROUP_INDETERMINATE_DESCRIPTION_",props:["indeterminate"]},{default:u(()=>[t(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=c=>e.model=c),indeterminate:!0,label:"Aloha"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const ue=i(_e,[["render",me]]);function ie(){return{codeHtml:`<a-one-checkbox
  :model-value="model1"
  :readonly="true"
  label="Checkbox 1"
></a-one-checkbox>
<a-one-checkbox
  :false-value="false"
  :model-value="model2"
  :readonly="true"
  class="a_mt_3"
  label="Checkbox 2"
></a-one-checkbox>
<a-one-checkbox
  :false-value="false"
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  label="Checkbox 3"
></a-one-checkbox>
<a-one-checkbox
  :false-value="false"
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  help-text="Aloha"
  label="Checkbox 4"
  readonly-default="-"
></a-one-checkbox>`}}function pe(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AOneCheckbox,
} from "aloha-vue";
    
export default {
  name: "PageOneCheckboxReadonly",
  components: {
    AOneCheckbox,
  },
  setup() {
    const model1 = ref(true);
    const model2 = ref(false);
    const model3 = ref(undefined);
    
    return {
      model1,
      model2,
      model3,
    };
  },
};`}}const he={name:"PageOneCheckboxReadonly",components:{AlohaExample:f,AOneCheckbox:O},setup(){const e=_(!0),o=_(!1),a=_(void 0),{codeHtml:r}=ie(),{codeJs:s}=pe();return{codeHtml:r,codeJs:s,model1:e,model2:o,model3:a}}};function fe(e,o,a,r,s,m){const l=n("a-one-checkbox"),d=n("aloha-example");return h(),p(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default"]},{default:u(()=>[t(l,{"model-value":e.model1,readonly:!0,label:"Checkbox 1"},null,8,["model-value"]),t(l,{class:"a_mt_3","false-value":!1,"model-value":e.model2,readonly:!0,label:"Checkbox 2"},null,8,["model-value"]),t(l,{class:"a_mt_3","false-value":!1,"model-value":e.model3,readonly:!0,label:"Checkbox 3"},null,8,["model-value"]),t(l,{class:"a_mt_3","false-value":!1,"model-value":e.model3,readonly:!0,"help-text":"Aloha",label:"Checkbox 4","readonly-default":"-"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const Oe=i(he,[["render",fe]]);function be(){return{codeHtml:`<a-one-checkbox
  v-model="model"
  label="Aloha"
  slot-name="aloha"
>
  <template
    v-slot:aloha="{ id, labelClass, label, labelScreenReader, required, props }"
  >
    <span
      :class="labelClass"
    >
      <span>{{ label }}</span>
      <a-element
        :is-title-html="true"
        class="a_ml_2"
        icon-left="Window"
        tabindex="0"
        text-screen-reader="Aloha"
        title="Aloha"
        type="text"
      ></a-element>
    </span>
  </template>
</a-one-checkbox>`}}function Ee(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AElement,
  AOneCheckbox,
} from "aloha-vue";
    
export default {
  name: "PageOneCheckboxSlotName",
  components: {
    AElement,
    AOneCheckbox,
  },
  setup() {
    const model = ref(undefined);
    
    return {
      model,
    };
  },
};`}}const Ae={name:"PageOneCheckboxSlotName",components:{AElement:H,AlohaExample:f,AOneCheckbox:O},setup(){const e=_(void 0),{codeHtml:o}=be(),{codeJs:a}=Ee();return{codeHtml:o,codeJs:a,model:e}}};function Pe(e,o,a,r,s,m){const l=n("a-element"),d=n("a-one-checkbox"),c=n("aloha-example");return h(),p(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_SLOT_NAME_HEADER_",description:"_A_UI_GROUP_SLOT_NAME_DESCRIPTION_",props:["slot-name"]},{default:u(()=>[t(d,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=A=>e.model=A),label:"Aloha","slot-name":"aloha"},{aloha:u(({id:A,labelClass:P,label:I,labelScreenReader:C,required:x,props:R})=>[b("span",{class:y(P)},[b("span",null,E(I),1),t(l,{class:"a_ml_2","is-title-html":!0,"icon-left":"Window",tabindex:"0","text-screen-reader":"Aloha",title:"Aloha",type:"text"})],2)]),_:1},8,["modelValue"])]),_:1},8,["code-html","code-js"])}const Ie=i(Ae,[["render",Pe]]);function Ce(){return{codeHtml:`<a-one-checkbox
  v-model="model"
  :true-value="1"
  class="a_mt_3"
  label="Aloha"
></a-one-checkbox>
<div>model: {{ model }}</div>`}}function xe(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AOneCheckbox,
} from "aloha-vue";
    
export default {
  name: "PageOneCheckboxTrueValue",
  components: {
    AOneCheckbox,
  },
  setup() {
    const model = ref(undefined);
    
    return {
      model,
    };
  },
};`}}const Re={name:"PageOneCheckboxTrueValue",components:{AlohaExample:f,AOneCheckbox:O},setup(){const e=_(void 0),{codeHtml:o}=Ce(),{codeJs:a}=xe();return{codeHtml:o,codeJs:a,model:e}}};function ke(e,o,a,r,s,m){const l=n("a-one-checkbox"),d=n("aloha-example");return h(),p(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ONE_CHECKBOX_GROUP_TRUE_VALUE_HEADER_",description:"_A_ONE_CHECKBOX_GROUP_TRUE_VALUE_DESCRIPTION_",props:["true-value"]},{default:u(()=>[t(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=c=>e.model=c),"true-value":1,label:"Aloha"},null,8,["modelValue"]),b("div",null,"model: "+E(e.model),1)]),_:1},8,["code-html","code-js"])}const Se=i(Re,[["render",ke]]);function Ne(){return{codeHtml:`<a-one-checkbox
  v-model="model"
  :is-width-auto="true"
  label="is-width-auto='true'"
></a-one-checkbox>
<a-one-checkbox
  v-model="model"
  :is-width-auto="false"
  class="a_mt_3"
  label="is-width-auto='false'"
></a-one-checkbox>`}}function Te(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AOneCheckbox,
} from "aloha-vue";
    
export default {
  name: "PageOneCheckboxWidthAuto",
  components: {
    AOneCheckbox,
  },
  setup() {
    const model = ref(undefined);
    
    return {
      model,
    };
  },
};`}}const ve={name:"PageOneCheckboxWidthAuto",components:{AlohaExample:f,AOneCheckbox:O},setup(){const e=_(void 0),{codeHtml:o}=Ne(),{codeJs:a}=Te();return{codeHtml:o,codeJs:a,model:e}}};function ge(e,o,a,r,s,m){const l=n("a-one-checkbox"),d=n("aloha-example");return h(),p(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ONE_CHECKBOX_GROUP_WIDTH_AUTO_HEADER_",description:"_A_ONE_CHECKBOX_GROUP_WIDTH_AUTO_DESCRIPTION_",props:["is-width-auto"]},{default:u(()=>[t(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=c=>e.model=c),"is-width-auto":!0,label:"is-width-auto='true'"},null,8,["modelValue"]),t(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":o[1]||(o[1]=c=>e.model=c),"is-width-auto":!1,label:"is-width-auto='false'"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const Ue=i(ve,[["render",ge]]);function He(){return{dataEvents:[{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"},{name:"focus",description:"_A_UI_EVENTS_FOCUS_DESCRIPTION_",type:"Function"},{name:"blur",description:"_A_UI_EVENTS_BLUR_DESCRIPTION_",type:"Function"}]}}function De(){const e=S(()=>D({placeholder:"_A_ONE_CHECKBOX_COMPONENT_NAME_"}));return{pageTitle:S(()=>`AOneCheckbox${e.value?` (${e.value})`:""}`)}}function $e(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"false-value",description:"_A_ONE_CHECKBOX_PROPS_FALSE_VALUE_DESCRIPTION_",type:"Boolean / String / Number",default:void 0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_one_checkbox_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"indeterminate",description:"_A_ONE_CHECKBOX_PROPS_INDETERMINATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"input-attributes",description:"_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"input-class",description:"_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-label-title",description:"_A_ONE_CHECKBOX_PROPS_IS_LABEL_TITLE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-width-auto",description:"_A_ONE_CHECKBOX_PROPS_IS_WIDTH_AUTO_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-attributes",description:"_A_ONE_CHECKBOX_PROPS_LABEL_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"{}",required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-undefined",description:"_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"Boolean / String / Number",default:void 0,required:!1},{name:"readonly",description:"_A_UI_PROPS_READONLY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"readonly-default",description:"_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_",type:"String",default:"",required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"slot-name",description:"_A_ONE_CHECKBOX_PROPS_SLOT_NAME_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"true-value",description:"_A_ONE_CHECKBOX_PROPS_TRUE_VALUE_DESCRIPTION_",type:"Boolean / String / Number",default:!0,required:!1}]}}const ye={name:"PageOneCheckbox",components:{AlohaPage:g,AlohaTableProps:U,ATranslation:$,PageOneCheckboxBasic:q,PageOneCheckboxChange:K,PageOneCheckboxErrors:z,PageOneCheckboxFalseValue:ne,PageOneCheckboxHelpText:ce,PageOneCheckboxIndeterminate:ue,PageOneCheckboxReadonly:Oe,PageOneCheckboxSlotName:Ie,PageOneCheckboxTrueValue:Se,PageOneCheckboxWidthAuto:Ue},setup(){const{pageTitle:e}=De(),{dataProps:o}=$e(),{dataEvents:a}=He();return{dataEvents:a,dataProps:o,pageTitle:e}}};function Je(e,o,a,r,s,m){const l=n("a-translation"),d=n("page-one-checkbox-basic"),c=n("page-one-checkbox-change"),A=n("page-one-checkbox-help-text"),P=n("page-one-checkbox-errors"),I=n("page-one-checkbox-width-auto"),C=n("page-one-checkbox-false-value"),x=n("page-one-checkbox-true-value"),R=n("page-one-checkbox-indeterminate"),N=n("page-one-checkbox-slot-name"),T=n("page-one-checkbox-readonly"),k=n("aloha-table-props"),v=n("aloha-page");return h(),p(v,{"page-title":e.pageTitle},{body:u(()=>[t(l,{tag:"p",html:"_A_ONE_CHECKBOX_COMPONENT_DESCRIPTION_"}),t(d),t(c),t(A),t(P),t(I),t(C),t(x),t(R),t(N),t(T),t(k,{data:e.dataProps},null,8,["data"]),t(k,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"])]),_:1},8,["page-title"])}const eo=i(ye,[["render",Je]]);export{eo as default};
