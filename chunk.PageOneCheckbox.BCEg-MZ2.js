import{t as e}from"./chunk.AlohaPage.B2JXMr8i.js";import{t}from"./chunk.AlohaTableProps.BF__w4H9.js";import{$t as n,Ft as r,It as i,Pt as a,Vt as o,hn as s,ln as c,pn as l,rn as u,sn as d}from"./chunk.vendor.BvryzG0o.js";import{t as f}from"./chunk.AlohaExample.CdQ6SjdT.js";import{$t as p,Rt as m,U as h,qt as g}from"./bundle.index.BaX-GPsX.js";import{t as _}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function v(){return{codeHtml:`<a-one-checkbox
  v-model="model"
  label="Aloha"
></a-one-checkbox>
<div>model: {{ model }}</div>`}}function y(){return{codeJs:`import {
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
};`}}var b={name:`PageJsonBasic`,components:{AlohaExample:f,AOneCheckbox:h},setup(){let e=c(void 0),{codeHtml:t}=v(),{codeJs:n}=y();return{codeHtml:t,codeJs:n,model:e}}};function x(e,t,a,c,l,f){let p=u(`a-one-checkbox`),m=u(`aloha-example`);return n(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`label`]},{default:d(()=>[o(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`Aloha`},null,8,[`modelValue`]),r(`div`,null,`model: `+s(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var S=_(b,[[`render`,x]]);function C(){return{codeHtml:`<a-one-checkbox
  :change="changeModel"
  :model-value="model"
  label="Aloha"
></a-one-checkbox>
<div>model: {{ model }}</div>`}}function ee(){return{codeJs:`import {
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
};`}}var w={name:`PageOneCheckboxChange`,components:{AlohaExample:f,AOneCheckbox:h},setup(){let e=c(void 0),t=({model:t,id:n,props:r})=>{e.value=t,console.log(n,r)},{codeHtml:n}=C(),{codeJs:r}=ee();return{changeModel:t,codeHtml:n,codeJs:r,model:e}}};function T(e,t,a,c,l,f){let p=u(`a-one-checkbox`),m=u(`aloha-example`);return n(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_CHANGE_HEADER_`,description:`_A_UI_GROUP_CHANGE_DESCRIPTION_`,props:[`change`,`model-value`]},{default:d(()=>[o(p,{change:e.changeModel,"model-value":e.model,label:`Aloha`},null,8,[`change`,`model-value`]),r(`div`,null,`model: `+s(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var E=_(w,[[`render`,T]]);function D(){return{codeHtml:`<a-one-checkbox
  v-model="model"
  errors="Aloha"
  label="Aloha"
></a-one-checkbox>`}}function O(){return{codeJs:`import {
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
};`}}var k={name:`PageOneCheckboxErrors`,components:{AlohaExample:f,AOneCheckbox:h},setup(){let e=c(void 0),{codeHtml:t}=D(),{codeJs:n}=O();return{codeHtml:t,codeJs:n,model:e}}};function A(e,t,r,a,s,c){let l=u(`a-one-checkbox`),f=u(`aloha-example`);return n(),i(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_ERRORS_HEADER_`,description:`_A_UI_GROUP_ERRORS_DESCRIPTION_`,props:[`errors`]},{default:d(()=>[o(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,errors:`Aloha`,label:`Aloha`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var j=_(k,[[`render`,A]]);function M(){return{codeHtml:`<a-one-checkbox
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
<div>model2: {{ model2 }}</div>`}}function N(){return{codeJs:`import {
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
};`}}var P={name:`PageOneCheckboxFalseValue`,components:{AlohaExample:f,AOneCheckbox:h},setup(){let e=c(!0),t=c(!0),{codeHtml:n}=M(),{codeJs:r}=N();return{codeHtml:n,codeJs:r,model1:e,model2:t}}};function F(e,t,a,c,l,f){let p=u(`a-one-checkbox`),m=u(`aloha-example`);return n(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_ONE_CHECKBOX_GROUP_FALSE_VALUE_HEADER_`,description:`_A_ONE_CHECKBOX_GROUP_FALSE_VALUE_DESCRIPTION_`,props:[`false-value`]},{default:d(()=>[o(p,{modelValue:e.model1,"onUpdate:modelValue":t[0]||=t=>e.model1=t,"false-value":!1,label:`false-value='false'`},null,8,[`modelValue`]),r(`div`,null,`model1: `+s(e.model1),1),o(p,{class:`a_mt_3`,modelValue:e.model2,"onUpdate:modelValue":t[1]||=t=>e.model2=t,"false-value":0,label:`false-value='0'`},null,8,[`modelValue`]),r(`div`,null,`model2: `+s(e.model2),1)]),_:1},8,[`code-html`,`code-js`])}var I=_(P,[[`render`,F]]);function L(){return{codeHtml:`<a-one-checkbox
  v-model="model"
  help-text="Aloha"
  label="Aloha"
></a-one-checkbox>`}}function R(){return{codeJs:`import {
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
};`}}var z={name:`PageOneCheckboxHelpText`,components:{AlohaExample:f,AOneCheckbox:h},setup(){let e=c(void 0),{codeHtml:t}=L(),{codeJs:n}=R();return{codeHtml:t,codeJs:n,model:e}}};function B(e,t,r,a,s,c){let l=u(`a-one-checkbox`),f=u(`aloha-example`);return n(),i(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_HELP_TEXT_HEADER_`,description:`_A_UI_GROUP_HELP_TEXT_DESCRIPTION_`,props:[`help-text`]},{default:d(()=>[o(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"help-text":`Aloha`,label:`Aloha`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var V=_(z,[[`render`,B]]);function H(){return{codeHtml:`<a-one-checkbox
  v-model="model"
    :indeterminate="true"
    label="Aloha"
></a-one-checkbox>`}}function U(){return{codeJs:`import {
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
};`}}var W={name:`PageOneCheckboxIndeterminate`,components:{AlohaExample:f,AOneCheckbox:h},setup(){let e=c(void 0),{codeHtml:t}=H(),{codeJs:n}=U();return{codeHtml:t,codeJs:n,model:e}}};function G(e,t,r,a,s,c){let l=u(`a-one-checkbox`),f=u(`aloha-example`);return n(),i(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_ONE_CHECKBOX_GROUP_INDETERMINATE_HEADER_`,description:`_A_ONE_CHECKBOX_GROUP_INDETERMINATE_DESCRIPTION_`,props:[`indeterminate`]},{default:d(()=>[o(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,indeterminate:!0,label:`Aloha`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var K=_(W,[[`render`,G]]);function q(){return{codeHtml:`<a-one-checkbox
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
></a-one-checkbox>`}}function te(){return{codeJs:`import {
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
};`}}var J={name:`PageOneCheckboxReadonly`,components:{AlohaExample:f,AOneCheckbox:h},setup(){let e=c(!0),t=c(!1),n=c(void 0),{codeHtml:r}=q(),{codeJs:i}=te();return{codeHtml:r,codeJs:i,model1:e,model2:t,model3:n}}};function Y(e,t,r,a,s,c){let l=u(`a-one-checkbox`),f=u(`aloha-example`);return n(),i(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_READONLY_HEADER_`,description:`_A_UI_GROUP_READONLY_DESCRIPTION_`,props:[`readonly`,`readonly-default`]},{default:d(()=>[o(l,{"model-value":e.model1,readonly:!0,label:`Checkbox 1`},null,8,[`model-value`]),o(l,{class:`a_mt_3`,"false-value":!1,"model-value":e.model2,readonly:!0,label:`Checkbox 2`},null,8,[`model-value`]),o(l,{class:`a_mt_3`,"false-value":!1,"model-value":e.model3,readonly:!0,label:`Checkbox 3`},null,8,[`model-value`]),o(l,{class:`a_mt_3`,"false-value":!1,"model-value":e.model3,readonly:!0,"help-text":`Aloha`,label:`Checkbox 4`,"readonly-default":`-`},null,8,[`model-value`])]),_:1},8,[`code-html`,`code-js`])}var X=_(J,[[`render`,Y]]);function Z(){return{codeHtml:`<a-one-checkbox
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
</a-one-checkbox>`}}function Q(){return{codeJs:`import {
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
};`}}var ne={name:`PageOneCheckboxSlotName`,components:{AElement:m,AlohaExample:f,AOneCheckbox:h},setup(){let e=c(void 0),{codeHtml:t}=Z(),{codeJs:n}=Q();return{codeHtml:t,codeJs:n,model:e}}};function re(e,t,a,c,f,p){let m=u(`a-element`),h=u(`a-one-checkbox`),g=u(`aloha-example`);return n(),i(g,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_SLOT_NAME_HEADER_`,description:`_A_UI_GROUP_SLOT_NAME_DESCRIPTION_`,props:[`slot-name`]},{default:d(()=>[o(h,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`Aloha`,"slot-name":`aloha`},{aloha:d(({id:e,labelClass:t,label:n,labelScreenReader:i,required:a,props:c})=>[r(`span`,{class:l(t)},[r(`span`,null,s(n),1),o(m,{class:`a_ml_2`,"is-title-html":!0,"icon-left":`Window`,tabindex:`0`,"text-screen-reader":`Aloha`,title:`Aloha`,type:`text`})],2)]),_:1},8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var ie=_(ne,[[`render`,re]]);function ae(){return{codeHtml:`<a-one-checkbox
  v-model="model"
  :true-value="1"
  class="a_mt_3"
  label="Aloha"
></a-one-checkbox>
<div>model: {{ model }}</div>`}}function oe(){return{codeJs:`import {
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
};`}}var se={name:`PageOneCheckboxTrueValue`,components:{AlohaExample:f,AOneCheckbox:h},setup(){let e=c(void 0),{codeHtml:t}=ae(),{codeJs:n}=oe();return{codeHtml:t,codeJs:n,model:e}}};function ce(e,t,a,c,l,f){let p=u(`a-one-checkbox`),m=u(`aloha-example`);return n(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_ONE_CHECKBOX_GROUP_TRUE_VALUE_HEADER_`,description:`_A_ONE_CHECKBOX_GROUP_TRUE_VALUE_DESCRIPTION_`,props:[`true-value`]},{default:d(()=>[o(p,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"true-value":1,label:`Aloha`},null,8,[`modelValue`]),r(`div`,null,`model: `+s(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var le=_(se,[[`render`,ce]]);function ue(){return{codeHtml:`<a-one-checkbox
  v-model="model"
  :is-width-auto="true"
  label="is-width-auto='true'"
></a-one-checkbox>
<a-one-checkbox
  v-model="model"
  :is-width-auto="false"
  class="a_mt_3"
  label="is-width-auto='false'"
></a-one-checkbox>`}}function de(){return{codeJs:`import {
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
};`}}var fe={name:`PageOneCheckboxWidthAuto`,components:{AlohaExample:f,AOneCheckbox:h},setup(){let e=c(void 0),{codeHtml:t}=ue(),{codeJs:n}=de();return{codeHtml:t,codeJs:n,model:e}}};function pe(e,t,r,a,s,c){let l=u(`a-one-checkbox`),f=u(`aloha-example`);return n(),i(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_ONE_CHECKBOX_GROUP_WIDTH_AUTO_HEADER_`,description:`_A_ONE_CHECKBOX_GROUP_WIDTH_AUTO_DESCRIPTION_`,props:[`is-width-auto`]},{default:d(()=>[o(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"is-width-auto":!0,label:`is-width-auto='true'`},null,8,[`modelValue`]),o(l,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,"is-width-auto":!1,label:`is-width-auto='false'`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var $=_(fe,[[`render`,pe]]);function me(){return{dataEvents:[{name:`update:model-value`,description:`_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_`,type:`Function`},{name:`focus`,description:`_A_UI_EVENTS_FOCUS_DESCRIPTION_`,type:`Function`},{name:`blur`,description:`_A_UI_EVENTS_BLUR_DESCRIPTION_`,type:`Function`}]}}function he(){let e=a(()=>p({placeholder:`_A_ONE_CHECKBOX_COMPONENT_NAME_`}));return{pageTitle:a(()=>`AOneCheckbox${e.value?` (${e.value})`:``}`)}}function ge(){return{dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`change`,description:`_A_UI_PROPS_CHANGE_DESCRIPTION_`,type:`Function`,default:`() => {}`,required:!1},{name:`dependencies`,description:`_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_`,type:`Array / Object`,default:void 0,required:!1},{name:`disabled`,description:`_A_UI_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`errors`,description:`_A_UI_PROPS_ERRORS_DESCRIPTION_`,type:`String / Array`,default:void 0,required:!1},{name:`exclude-render-attributes`,description:`_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`extra`,description:`_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`false-value`,description:`_A_ONE_CHECKBOX_PROPS_FALSE_VALUE_DESCRIPTION_`,type:`Boolean / String / Number`,default:void 0,required:!1},{name:`help-text`,description:`_A_UI_PROPS_HELP_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`html-id`,description:`_A_UI_PROPS_HTML_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`id`,description:`_A_UI_PROPS_ID_DESCRIPTION_`,type:`String / Number`,default:`() => uniqueId("a_one_checkbox_")`,required:!1},{name:`id-prefix`,description:`_A_UI_PROPS_ID_PREFIX_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`indeterminate`,description:`_A_ONE_CHECKBOX_PROPS_INDETERMINATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`input-attributes`,description:`_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`input-class`,description:`_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`is-hide`,description:`_A_UI_PROPS_IS_HIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-label-title`,description:`_A_ONE_CHECKBOX_PROPS_IS_LABEL_TITLE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-render`,description:`_A_UI_PROPS_IS_RENDER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-width-auto`,description:`_A_ONE_CHECKBOX_PROPS_IS_WIDTH_AUTO_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`label`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`label-attributes`,description:`_A_ONE_CHECKBOX_PROPS_LABEL_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`{}`,required:!1},{name:`label-class`,description:`_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`label-screen-reader`,description:`_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`model-dependencies`,description:`_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`model-undefined`,description:`_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_`,type:`String / Number / Object / Array / Boolean`,default:void 0,required:!1},{name:`model-value`,description:`_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_`,type:`Boolean / String / Number`,default:void 0,required:!1},{name:`readonly`,description:`_A_UI_PROPS_READONLY_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`readonly-default`,description:`_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_`,type:`String`,default:``,required:!1},{name:`required`,description:`_A_UI_PROPS_REQUIRED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`slot-name`,description:`_A_ONE_CHECKBOX_PROPS_SLOT_NAME_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`true-value`,description:`_A_ONE_CHECKBOX_PROPS_TRUE_VALUE_DESCRIPTION_`,type:`Boolean / String / Number`,default:!0,required:!1}]}}var _e={name:`PageOneCheckbox`,components:{AlohaPage:e,AlohaTableProps:t,ATranslation:g,PageOneCheckboxBasic:S,PageOneCheckboxChange:E,PageOneCheckboxErrors:j,PageOneCheckboxFalseValue:I,PageOneCheckboxHelpText:V,PageOneCheckboxIndeterminate:K,PageOneCheckboxReadonly:X,PageOneCheckboxSlotName:ie,PageOneCheckboxTrueValue:le,PageOneCheckboxWidthAuto:$},setup(){let{pageTitle:e}=he(),{dataProps:t}=ge(),{dataEvents:n}=me();return{dataEvents:n,dataProps:t,pageTitle:e}}};function ve(e,t,r,a,s,c){let l=u(`a-translation`),f=u(`page-one-checkbox-basic`),p=u(`page-one-checkbox-change`),m=u(`page-one-checkbox-help-text`),h=u(`page-one-checkbox-errors`),g=u(`page-one-checkbox-width-auto`),_=u(`page-one-checkbox-false-value`),v=u(`page-one-checkbox-true-value`),y=u(`page-one-checkbox-indeterminate`),b=u(`page-one-checkbox-slot-name`),x=u(`page-one-checkbox-readonly`),S=u(`aloha-table-props`),C=u(`aloha-page`);return n(),i(C,{"page-title":e.pageTitle},{body:d(()=>[o(l,{tag:`p`,html:`_A_ONE_CHECKBOX_COMPONENT_DESCRIPTION_`}),o(f),o(p),o(m),o(h),o(g),o(_),o(v),o(y),o(b),o(x),o(S,{data:e.dataProps},null,8,[`data`]),o(S,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`])]),_:1},8,[`page-title`])}var ye=_(_e,[[`render`,ve]]);export{ye as default};