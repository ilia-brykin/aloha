import{A as h,a as g}from"./chunk.AlohaExample.CicgCsbJ.js";import{A as U}from"./chunk.AlohaTableProps.Cx6sI4wP.js";import{m as O,_ as p,f as H,g as D,A as $}from"./bundle.index.BlTXutOO.js";import{r as _,U as i,aS as u,e as n,V as f,Z as t,Y as E,aT as A,a_ as y,d as k}from"./chunk.vendor.COYgx38y.js";import"./chunk.vendor-lodash.DdGPhwvj.js";import"./chunk.APageTabTitle.B2aZEah9.js";import"./chunk.AlohaHighlightjs.CW1W2LCP.js";import"./chunk.ATable.BoZhyTzW.js";import"./chunk.translations-ar._uz0yDwl.js";import"./chunk.translations-de.COE9j2lD.js";import"./chunk.translations-en.CkuqRVlP.js";import"./chunk.translations-es.Be1FWYUt.js";import"./chunk.translations-fr.DQ2na-o9.js";import"./chunk.translations-hr.PH2dXFBk.js";import"./chunk.translations-it.DG_WjIxj.js";import"./chunk.translations-ru.BJehrSwI.js";function J(){return{codeHtml:`<a-one-checkbox
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
};`}}const B={name:"PageJsonBasic",components:{AlohaExample:h,AOneCheckbox:O},setup(){const e=_(void 0),{codeHtml:o}=J(),{codeJs:a}=V();return{codeHtml:o,codeJs:a,model:e}}};function L(e,o,a,r,s,m){const l=n("a-one-checkbox"),d=n("aloha-example");return f(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","label"]},{default:u(()=>[t(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=c=>e.model=c),label:"Aloha"},null,8,["modelValue"]),E("div",null,"model: "+A(e.model),1)]),_:1},8,["code-html","code-js"])}const q=p(B,[["render",L]]);function j(){return{codeHtml:`<a-one-checkbox
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
};`}}const X={name:"PageOneCheckboxChange",components:{AlohaExample:h,AOneCheckbox:O},setup(){const e=_(void 0),o=({model:s,id:m,props:l})=>{e.value=s,console.log(m,l)},{codeHtml:a}=j(),{codeJs:r}=G();return{changeModel:o,codeHtml:a,codeJs:r,model:e}}};function M(e,o,a,r,s,m){const l=n("a-one-checkbox"),d=n("aloha-example");return f(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CHANGE_HEADER_",description:"_A_UI_GROUP_CHANGE_DESCRIPTION_",props:["change","model-value"]},{default:u(()=>[t(l,{change:e.changeModel,"model-value":e.model,label:"Aloha"},null,8,["change","model-value"]),E("div",null,"model: "+A(e.model),1)]),_:1},8,["code-html","code-js"])}const K=p(X,[["render",M]]);function w(){return{codeHtml:`<a-one-checkbox
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
    AInput,
  },
  setup() {
    const model = ref(undefined);
    
    return {
      model,
    };
  },
};`}}const W={name:"PageOneCheckboxErrors",components:{AlohaExample:h,AOneCheckbox:O},setup(){const e=_(void 0),{codeHtml:o}=w(),{codeJs:a}=F();return{codeHtml:o,codeJs:a,model:e}}};function Y(e,o,a,r,s,m){const l=n("a-one-checkbox"),d=n("aloha-example");return f(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERRORS_HEADER_",description:"_A_UI_GROUP_ERRORS_DESCRIPTION_",props:["errors"]},{default:u(()=>[t(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=c=>e.model=c),errors:"Aloha",label:"Aloha"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const z=p(W,[["render",Y]]);function Q(){return{codeHtml:`<a-one-checkbox
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
    AInput,
  },
  setup() {
    const model1 = ref(true);
    const model2 = ref(true);
    
    return {
      model1,
      model2,
    };
  },
};`}}const ee={name:"PageOneCheckboxFalseValue",components:{AlohaExample:h,AOneCheckbox:O},setup(){const e=_(!0),o=_(!0),{codeHtml:a}=Q(),{codeJs:r}=Z();return{codeHtml:a,codeJs:r,model1:e,model2:o}}};function oe(e,o,a,r,s,m){const l=n("a-one-checkbox"),d=n("aloha-example");return f(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ONE_CHECKBOX_GROUP_FALSE_VALUE_HEADER_",description:"_A_ONE_CHECKBOX_GROUP_FALSE_VALUE_DESCRIPTION_",props:["false-value"]},{default:u(()=>[t(l,{modelValue:e.model1,"onUpdate:modelValue":o[0]||(o[0]=c=>e.model1=c),"false-value":!1,label:"false-value='false'"},null,8,["modelValue"]),E("div",null,"model1: "+A(e.model1),1),t(l,{class:"a_mt_3",modelValue:e.model2,"onUpdate:modelValue":o[1]||(o[1]=c=>e.model2=c),"false-value":0,label:"false-value='0'"},null,8,["modelValue"]),E("div",null,"model2: "+A(e.model2),1)]),_:1},8,["code-html","code-js"])}const ne=p(ee,[["render",oe]]);function ae(){return{codeHtml:`<a-one-checkbox
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
};`}}const le={name:"PageOneCheckboxHelpText",components:{AlohaExample:h,AOneCheckbox:O},setup(){const e=_(void 0),{codeHtml:o}=ae(),{codeJs:a}=te();return{codeHtml:o,codeJs:a,model:e}}};function de(e,o,a,r,s,m){const l=n("a-one-checkbox"),d=n("aloha-example");return f(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_HELP_TEXT_HEADER_",description:"_A_UI_GROUP_HELP_TEXT_DESCRIPTION_",props:["help-text"]},{default:u(()=>[t(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=c=>e.model=c),"help-text":"Aloha",label:"Aloha"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const ce=p(le,[["render",de]]);function re(){return{codeHtml:`<a-one-checkbox
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
    AInput,
  },
  setup() {
    const model = ref(undefined);
    
    return {
      model,
    };
  },
};`}}const _e={name:"PageOneCheckboxIndeterminate",components:{AlohaExample:h,AOneCheckbox:O},setup(){const e=_(void 0),{codeHtml:o}=re(),{codeJs:a}=se();return{codeHtml:o,codeJs:a,model:e}}};function me(e,o,a,r,s,m){const l=n("a-one-checkbox"),d=n("aloha-example");return f(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ONE_CHECKBOX_GROUP_INDETERMINATE_HEADER_",description:"_A_ONE_CHECKBOX_GROUP_INDETERMINATE_DESCRIPTION_",props:["indeterminate"]},{default:u(()=>[t(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=c=>e.model=c),indeterminate:!0,label:"Aloha"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const ue=p(_e,[["render",me]]);function pe(){return{codeHtml:`<a-one-checkbox
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
></a-one-checkbox>`}}function ie(){return{codeJs:`import {
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
};`}}const fe={name:"PageOneCheckboxReadonly",components:{AlohaExample:h,AOneCheckbox:O},setup(){const e=_(!0),o=_(!1),a=_(void 0),{codeHtml:r}=pe(),{codeJs:s}=ie();return{codeHtml:r,codeJs:s,model1:e,model2:o,model3:a}}};function he(e,o,a,r,s,m){const l=n("a-one-checkbox"),d=n("aloha-example");return f(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default"]},{default:u(()=>[t(l,{"model-value":e.model1,readonly:!0,label:"Checkbox 1"},null,8,["model-value"]),t(l,{class:"a_mt_3","false-value":!1,"model-value":e.model2,readonly:!0,label:"Checkbox 2"},null,8,["model-value"]),t(l,{class:"a_mt_3","false-value":!1,"model-value":e.model3,readonly:!0,label:"Checkbox 3"},null,8,["model-value"]),t(l,{class:"a_mt_3","false-value":!1,"model-value":e.model3,readonly:!0,"help-text":"Aloha",label:"Checkbox 4","readonly-default":"-"},null,8,["model-value"])]),_:1},8,["code-html","code-js"])}const Oe=p(fe,[["render",he]]);function Ee(){return{codeHtml:`<a-one-checkbox
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
</a-one-checkbox>`}}function Ae(){return{codeJs:`import {
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
};`}}const be={name:"PageOneCheckboxSlotName",components:{AElement:H,AlohaExample:h,AOneCheckbox:O},setup(){const e=_(void 0),{codeHtml:o}=Ee(),{codeJs:a}=Ae();return{codeHtml:o,codeJs:a,model:e}}};function Pe(e,o,a,r,s,m){const l=n("a-element"),d=n("a-one-checkbox"),c=n("aloha-example");return f(),i(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_SLOT_NAME_HEADER_",description:"_A_UI_GROUP_SLOT_NAME_DESCRIPTION_",props:["slot-name"]},{default:u(()=>[t(d,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=b=>e.model=b),label:"Aloha","slot-name":"aloha"},{aloha:u(({id:b,labelClass:P,label:I,labelScreenReader:C,required:R,props:x})=>[E("span",{class:y(P)},[E("span",null,A(I),1),t(l,{class:"a_ml_2","is-title-html":!0,"icon-left":"Window",tabindex:"0","text-screen-reader":"Aloha",title:"Aloha",type:"text"})],2)]),_:1},8,["modelValue"])]),_:1},8,["code-html","code-js"])}const Ie=p(be,[["render",Pe]]);function Ce(){return{codeHtml:`<a-one-checkbox
  v-model="model"
  :true-value="1"
  class="a_mt_3"
  label="Aloha"
></a-one-checkbox>
<div>model: {{ model }}</div>`}}function Re(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AOneCheckbox,
} from "aloha-vue";
    
export default {
  name: "PageOneCheckboxTrueValue",
  components: {
    AInput,
  },
  setup() {
    const model = ref(undefined);
    
    return {
      model,
    };
  },
};`}}const xe={name:"PageOneCheckboxTrueValue",components:{AlohaExample:h,AOneCheckbox:O},setup(){const e=_(void 0),{codeHtml:o}=Ce(),{codeJs:a}=Re();return{codeHtml:o,codeJs:a,model:e}}};function Se(e,o,a,r,s,m){const l=n("a-one-checkbox"),d=n("aloha-example");return f(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ONE_CHECKBOX_GROUP_TRUE_VALUE_HEADER_",description:"_A_ONE_CHECKBOX_GROUP_TRUE_VALUE_DESCRIPTION_",props:["true-value"]},{default:u(()=>[t(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=c=>e.model=c),"true-value":1,label:"Aloha"},null,8,["modelValue"]),E("div",null,"model: "+A(e.model),1)]),_:1},8,["code-html","code-js"])}const ke=p(xe,[["render",Se]]);function Ne(){return{codeHtml:`<a-one-checkbox
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
    AInput,
  },
  setup() {
    const model = ref(undefined);
    
    return {
      model,
    };
  },
};`}}const ve={name:"PageOneCheckboxWidthAuto",components:{AlohaExample:h,AOneCheckbox:O},setup(){const e=_(void 0),{codeHtml:o}=Ne(),{codeJs:a}=Te();return{codeHtml:o,codeJs:a,model:e}}};function ge(e,o,a,r,s,m){const l=n("a-one-checkbox"),d=n("aloha-example");return f(),i(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ONE_CHECKBOX_GROUP_WIDTH_AUTO_HEADER_",description:"_A_ONE_CHECKBOX_GROUP_WIDTH_AUTO_DESCRIPTION_",props:["is-width-auto"]},{default:u(()=>[t(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=c=>e.model=c),"is-width-auto":!0,label:"is-width-auto='true'"},null,8,["modelValue"]),t(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":o[1]||(o[1]=c=>e.model=c),"is-width-auto":!1,label:"is-width-auto='false'"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const Ue=p(ve,[["render",ge]]);function He(){return{dataEvents:[{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"},{name:"focus",description:"_A_UI_EVENTS_FOCUS_DESCRIPTION_",type:"Function"},{name:"blur",description:"_A_UI_EVENTS_BLUR_DESCRIPTION_",type:"Function"}]}}function De(){const e=k(()=>D({placeholder:"_A_ONE_CHECKBOX_COMPONENT_NAME_"}));return{pageTitle:k(()=>`AOneCheckbox${e.value?` (${e.value})`:""}`)}}function $e(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"false-value",description:"_A_ONE_CHECKBOX_PROPS_FALSE_VALUE_DESCRIPTION_",type:"Boolean / String / Number",default:void 0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_one_checkbox_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"indeterminate",description:"_A_ONE_CHECKBOX_PROPS_INDETERMINATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"input-attributes",description:"_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"input-class",description:"_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-label-title",description:"_A_ONE_CHECKBOX_PROPS_IS_LABEL_TITLE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-width-auto",description:"_A_ONE_CHECKBOX_PROPS_IS_WIDTH_AUTO_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-attributes",description:"_A_ONE_CHECKBOX_PROPS_LABEL_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"{}",required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-undefined",description:"_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"Boolean / String / Number",default:void 0,required:!1},{name:"readonly",description:"_A_UI_PROPS_READONLY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"readonly-default",description:"_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_",type:"String",default:"",required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"slot-name",description:"_A_ONE_CHECKBOX_PROPS_SLOT_NAME_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"true-value",description:"_A_ONE_CHECKBOX_PROPS_TRUE_VALUE_DESCRIPTION_",type:"Boolean / String / Number",default:!0,required:!1}]}}const ye={name:"PageOneCheckbox",components:{AlohaPage:g,AlohaTableProps:U,ATranslation:$,PageOneCheckboxBasic:q,PageOneCheckboxChange:K,PageOneCheckboxErrors:z,PageOneCheckboxFalseValue:ne,PageOneCheckboxHelpText:ce,PageOneCheckboxIndeterminate:ue,PageOneCheckboxReadonly:Oe,PageOneCheckboxSlotName:Ie,PageOneCheckboxTrueValue:ke,PageOneCheckboxWidthAuto:Ue},setup(){const{pageTitle:e}=De(),{dataProps:o}=$e(),{dataEvents:a}=He();return{dataEvents:a,dataProps:o,pageTitle:e}}};function Je(e,o,a,r,s,m){const l=n("a-translation"),d=n("page-one-checkbox-basic"),c=n("page-one-checkbox-change"),b=n("page-one-checkbox-help-text"),P=n("page-one-checkbox-errors"),I=n("page-one-checkbox-width-auto"),C=n("page-one-checkbox-false-value"),R=n("page-one-checkbox-true-value"),x=n("page-one-checkbox-indeterminate"),N=n("page-one-checkbox-slot-name"),T=n("page-one-checkbox-readonly"),S=n("aloha-table-props"),v=n("aloha-page");return f(),i(v,{"page-title":e.pageTitle},{body:u(()=>[t(l,{tag:"p",html:"_A_ONE_CHECKBOX_COMPONENT_DESCRIPTION_"}),t(d),t(c),t(b),t(P),t(I),t(C),t(R),t(x),t(N),t(T),t(S,{data:e.dataProps},null,8,["data"]),t(S,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"])]),_:1},8,["page-title"])}const eo=p(ye,[["render",Je]]);export{eo as default};
