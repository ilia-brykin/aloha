import{A as h,a as g}from"./chunk.AlohaExample.D4SaE4p9.js";import{A as H}from"./chunk.AlohaTableProps.Ufe0zjLW.js";import{i as E,_ as i,j as U,g as v,A as D}from"./bundle.index.BIdvGbaF.js";import{r as u,R as p,aR as m,e as n,U as f,Y as a,W as O,aS as A,aZ as $,d as T}from"./chunk.vendor.BBAqWnj3.js";import"./chunk.vendor-lodash.DcJeCbOg.js";import"./chunk.APageTabTitle.D2d__OPV.js";import"./chunk.AlohaHighlightjs.CLW-CbN5.js";import"./chunk.ATable.Ccz-NYvK.js";import"./chunk.translations-ar.DEUMydUO.js";import"./chunk.translations-de.Cu1ohgZi.js";import"./chunk.translations-en.C0yymw0D.js";import"./chunk.translations-es.BOdupE53.js";import"./chunk.translations-fr.DA6ZjNfb.js";import"./chunk.translations-hr.9tXo0j2W.js";import"./chunk.translations-it.ChqBTVFj.js";import"./chunk.translations-ru.9b8s4Lgz.js";function V(){return{codeHtml:`<a-one-checkbox
  v-model="model"
  label="Aloha"
></a-one-checkbox>
<div>model: {{ model }}</div>`}}function B(){return{codeJs:`import {
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
};`}}const J={name:"PageJsonBasic",components:{AlohaExample:h,AOneCheckbox:E},setup(){const e=u(void 0),{codeHtml:o}=V(),{codeJs:t}=B();return{codeHtml:o,codeJs:t,model:e}}};function L(e,o,t,r,s,_){const l=n("a-one-checkbox"),c=n("aloha-example");return f(),p(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","label"]},{default:m(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=d=>e.model=d),label:"Aloha"},null,8,["modelValue"]),O("div",null,"model: "+A(e.model),1)]),_:1},8,["code-html","code-js"])}const y=i(J,[["render",L]]);function q(){return{codeHtml:`<a-one-checkbox
  :change="changeModel"
  :model-value="model"
  label="Aloha"
></a-one-checkbox>
<div>model: {{ model }}</div>`}}function j(){return{codeJs:`import {
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
};`}}const X={name:"PageOneCheckboxChange",components:{AlohaExample:h,AOneCheckbox:E},setup(){const e=u(void 0),o=({model:s,id:_,props:l})=>{e.value=s,console.log(_,l)},{codeHtml:t}=q(),{codeJs:r}=j();return{changeModel:o,codeHtml:t,codeJs:r,model:e}}};function G(e,o,t,r,s,_){const l=n("a-one-checkbox"),c=n("aloha-example");return f(),p(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CHANGE_HEADER_",description:"_A_UI_GROUP_CHANGE_DESCRIPTION_",props:["change","model-value"]},{default:m(()=>[a(l,{change:e.changeModel,"model-value":e.model,label:"Aloha"},null,8,["change","model-value"]),O("div",null,"model: "+A(e.model),1)]),_:1},8,["code-html","code-js"])}const M=i(X,[["render",G]]);function K(){return{codeHtml:`<a-one-checkbox
  v-model="model"
  errors="Aloha"
  label="Aloha"
></a-one-checkbox>`}}function w(){return{codeJs:`import {
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
};`}}const F={name:"PageOneCheckboxErrors",components:{AlohaExample:h,AOneCheckbox:E},setup(){const e=u(void 0),{codeHtml:o}=K(),{codeJs:t}=w();return{codeHtml:o,codeJs:t,model:e}}};function W(e,o,t,r,s,_){const l=n("a-one-checkbox"),c=n("aloha-example");return f(),p(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERRORS_HEADER_",description:"_A_UI_GROUP_ERRORS_DESCRIPTION_",props:["errors"]},{default:m(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=d=>e.model=d),errors:"Aloha",label:"Aloha"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const Y=i(F,[["render",W]]);function z(){return{codeHtml:`<a-one-checkbox
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
<div>model2: {{ model2 }}</div>`}}function Q(){return{codeJs:`import {
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
};`}}const Z={name:"PageOneCheckboxFalseValue",components:{AlohaExample:h,AOneCheckbox:E},setup(){const e=u(!0),o=u(!0),{codeHtml:t}=z(),{codeJs:r}=Q();return{codeHtml:t,codeJs:r,model1:e,model2:o}}};function ee(e,o,t,r,s,_){const l=n("a-one-checkbox"),c=n("aloha-example");return f(),p(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ONE_CHECKBOX_GROUP_FALSE_VALUE_HEADER_",description:"_A_ONE_CHECKBOX_GROUP_FALSE_VALUE_DESCRIPTION_",props:["false-value"]},{default:m(()=>[a(l,{modelValue:e.model1,"onUpdate:modelValue":o[0]||(o[0]=d=>e.model1=d),"false-value":!1,label:"false-value='false'"},null,8,["modelValue"]),O("div",null,"model1: "+A(e.model1),1),a(l,{class:"a_mt_3",modelValue:e.model2,"onUpdate:modelValue":o[1]||(o[1]=d=>e.model2=d),"false-value":0,label:"false-value='0'"},null,8,["modelValue"]),O("div",null,"model2: "+A(e.model2),1)]),_:1},8,["code-html","code-js"])}const oe=i(Z,[["render",ee]]);function ne(){return{codeHtml:`<a-one-checkbox
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
};`}}const ae={name:"PageOneCheckboxHelpText",components:{AlohaExample:h,AOneCheckbox:E},setup(){const e=u(void 0),{codeHtml:o}=ne(),{codeJs:t}=te();return{codeHtml:o,codeJs:t,model:e}}};function le(e,o,t,r,s,_){const l=n("a-one-checkbox"),c=n("aloha-example");return f(),p(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_HELP_TEXT_HEADER_",description:"_A_UI_GROUP_HELP_TEXT_DESCRIPTION_",props:["help-text"]},{default:m(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=d=>e.model=d),"help-text":"Aloha",label:"Aloha"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const de=i(ae,[["render",le]]);function ce(){return{codeHtml:`<a-one-checkbox
  v-model="model"
    :indeterminate="true"
    label="Aloha"
></a-one-checkbox>`}}function re(){return{codeJs:`import {
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
};`}}const se={name:"PageOneCheckboxIndeterminate",components:{AlohaExample:h,AOneCheckbox:E},setup(){const e=u(void 0),{codeHtml:o}=ce(),{codeJs:t}=re();return{codeHtml:o,codeJs:t,model:e}}};function _e(e,o,t,r,s,_){const l=n("a-one-checkbox"),c=n("aloha-example");return f(),p(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ONE_CHECKBOX_GROUP_INDETERMINATE_HEADER_",description:"_A_ONE_CHECKBOX_GROUP_INDETERMINATE_DESCRIPTION_",props:["indeterminate"]},{default:m(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=d=>e.model=d),indeterminate:!0,label:"Aloha"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const me=i(se,[["render",_e]]);function ue(){return{codeHtml:`<a-one-checkbox
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
</a-one-checkbox>`}}function ie(){return{codeJs:`import {
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
};`}}const pe={name:"PageOneCheckboxSlotName",components:{AElement:U,AlohaExample:h,AOneCheckbox:E},setup(){const e=u(void 0),{codeHtml:o}=ue(),{codeJs:t}=ie();return{codeHtml:o,codeJs:t,model:e}}};function fe(e,o,t,r,s,_){const l=n("a-element"),c=n("a-one-checkbox"),d=n("aloha-example");return f(),p(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_SLOT_NAME_HEADER_",description:"_A_UI_GROUP_SLOT_NAME_DESCRIPTION_",props:["slot-name"]},{default:m(()=>[a(c,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=P=>e.model=P),label:"Aloha","slot-name":"aloha"},{aloha:m(({id:P,labelClass:I,label:b,labelScreenReader:C,required:R,props:S})=>[O("span",{class:$(I)},[O("span",null,A(b),1),a(l,{class:"a_ml_2","is-title-html":!0,"icon-left":"Window",tabindex:"0","text-screen-reader":"Aloha",title:"Aloha",type:"text"})],2)]),_:1},8,["modelValue"])]),_:1},8,["code-html","code-js"])}const he=i(pe,[["render",fe]]);function Ee(){return{codeHtml:`<a-one-checkbox
  v-model="model"
  :true-value="1"
  class="a_mt_3"
  label="Aloha"
></a-one-checkbox>
<div>model: {{ model }}</div>`}}function Oe(){return{codeJs:`import {
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
};`}}const Ae={name:"PageOneCheckboxTrueValue",components:{AlohaExample:h,AOneCheckbox:E},setup(){const e=u(void 0),{codeHtml:o}=Ee(),{codeJs:t}=Oe();return{codeHtml:o,codeJs:t,model:e}}};function Pe(e,o,t,r,s,_){const l=n("a-one-checkbox"),c=n("aloha-example");return f(),p(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ONE_CHECKBOX_GROUP_TRUE_VALUE_HEADER_",description:"_A_ONE_CHECKBOX_GROUP_TRUE_VALUE_DESCRIPTION_",props:["true-value"]},{default:m(()=>[a(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=d=>e.model=d),"true-value":1,label:"Aloha"},null,8,["modelValue"]),O("div",null,"model: "+A(e.model),1)]),_:1},8,["code-html","code-js"])}const Ie=i(Ae,[["render",Pe]]);function be(){return{codeHtml:`<a-one-checkbox
  v-model="model"
  :is-width-auto="true"
  label="is-width-auto='true'"
></a-one-checkbox>
<a-one-checkbox
  v-model="model"
  :is-width-auto="false"
  class="a_mt_3"
  label="is-width-auto='false'"
></a-one-checkbox>`}}function Ce(){return{codeJs:`import {
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
};`}}const Re={name:"PageOneCheckboxWidthAuto",components:{AlohaExample:h,AOneCheckbox:E},setup(){const e=u(void 0),{codeHtml:o}=be(),{codeJs:t}=Ce();return{codeHtml:o,codeJs:t,model:e}}};function Se(e,o,t,r,s,_){const l=n("a-one-checkbox"),c=n("aloha-example");return f(),p(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ONE_CHECKBOX_GROUP_WIDTH_AUTO_HEADER_",description:"_A_ONE_CHECKBOX_GROUP_WIDTH_AUTO_DESCRIPTION_",props:["is-width-auto"]},{default:m(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=d=>e.model=d),"is-width-auto":!0,label:"is-width-auto='true'"},null,8,["modelValue"]),a(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":o[1]||(o[1]=d=>e.model=d),"is-width-auto":!1,label:"is-width-auto='false'"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const xe=i(Re,[["render",Se]]);function Te(){return{dataEvents:[{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"},{name:"focus",description:"_A_UI_EVENTS_FOCUS_DESCRIPTION_",type:"Function"},{name:"blur",description:"_A_UI_EVENTS_BLUR_DESCRIPTION_",type:"Function"}]}}function Ne(){const e=T(()=>v({placeholder:"_A_ONE_CHECKBOX_COMPONENT_NAME_"}));return{pageTitle:T(()=>`AOneCheckbox${e.value?` (${e.value})`:""}`)}}function ke(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"false-value",description:"_A_ONE_CHECKBOX_PROPS_FALSE_VALUE_DESCRIPTION_",type:"Boolean / String / Number",default:void 0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_one_checkbox_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"indeterminate",description:"_A_ONE_CHECKBOX_PROPS_INDETERMINATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"input-attributes",description:"_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"input-class",description:"_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-label-title",description:"_A_ONE_CHECKBOX_PROPS_IS_LABEL_TITLE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-width-auto",description:"_A_ONE_CHECKBOX_PROPS_IS_WIDTH_AUTO_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-attributes",description:"_A_ONE_CHECKBOX_PROPS_LABEL_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"{}",required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-undefined",description:"_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"Boolean / String / Number",default:void 0,required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"slot-name",description:"_A_ONE_CHECKBOX_PROPS_SLOT_NAME_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"true-value",description:"_A_ONE_CHECKBOX_PROPS_TRUE_VALUE_DESCRIPTION_",type:"Boolean / String / Number",default:!0,required:!1}]}}const ge={name:"PageOneCheckbox",components:{AlohaPage:g,AlohaTableProps:H,ATranslation:D,PageOneCheckboxBasic:y,PageOneCheckboxChange:M,PageOneCheckboxErrors:Y,PageOneCheckboxFalseValue:oe,PageOneCheckboxHelpText:de,PageOneCheckboxIndeterminate:me,PageOneCheckboxSlotName:he,PageOneCheckboxTrueValue:Ie,PageOneCheckboxWidthAuto:xe},setup(){const{pageTitle:e}=Ne(),{dataProps:o}=ke(),{dataEvents:t}=Te();return{dataEvents:t,dataProps:o,pageTitle:e}}};function He(e,o,t,r,s,_){const l=n("a-translation"),c=n("page-one-checkbox-basic"),d=n("page-one-checkbox-change"),P=n("page-one-checkbox-help-text"),I=n("page-one-checkbox-errors"),b=n("page-one-checkbox-width-auto"),C=n("page-one-checkbox-false-value"),R=n("page-one-checkbox-true-value"),S=n("page-one-checkbox-indeterminate"),N=n("page-one-checkbox-slot-name"),x=n("aloha-table-props"),k=n("aloha-page");return f(),p(k,{"page-title":e.pageTitle},{body:m(()=>[a(l,{tag:"p",html:"_A_ONE_CHECKBOX_COMPONENT_DESCRIPTION_"}),a(c),a(d),a(P),a(I),a(b),a(C),a(R),a(S),a(N),a(x,{data:e.dataProps},null,8,["data"]),a(x,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"])]),_:1},8,["page-title"])}const Fe=i(ge,[["render",He]]);export{Fe as default};
