import{t as e}from"./chunk.AlohaPage.1DFen3a5.js";import{t}from"./chunk.AlohaTableProps.BqrQ-2bd.js";import{Ft as n,It as r,Pt as i,Qt as a,Vt as o,cn as s,fn as ee,mn as c,nn as l,on as u}from"./chunk.vendor.CTxSDDRk.js";import{t as d}from"./chunk.AlohaExample.zAlCDWQM.js";import{G as f,Vt as p,Xt as m,it as h}from"./bundle.index.BvA5sOPX.js";import{t as g}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function _(){return{codeHtml:`<a-one-checkbox
  v-model="model"
  label="Aloha"
></a-one-checkbox>
<div>model: {{ model }}</div>`}}function v(){return{codeJs:`import {
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
};`}}var y={name:`PageJsonBasic`,components:{AlohaExample:d,AOneCheckbox:f},setup(){let e=s(void 0),{codeHtml:t}=_(),{codeJs:n}=v();return{codeHtml:t,codeJs:n,model:e}}};function b(e,t,i,s,ee,d){let f=l(`a-one-checkbox`),p=l(`aloha-example`);return a(),r(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`label`]},{default:u(()=>[o(f,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`Aloha`},null,8,[`modelValue`]),n(`div`,null,`model: `+c(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var x=g(y,[[`render`,b]]);function S(){return{codeHtml:`<a-one-checkbox
  :change="changeModel"
  :model-value="model"
  label="Aloha"
></a-one-checkbox>
<div>model: {{ model }}</div>`}}function C(){return{codeJs:`import {
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
};`}}var w={name:`PageOneCheckboxChange`,components:{AlohaExample:d,AOneCheckbox:f},setup(){let e=s(void 0),t=({model:t,id:n,props:r})=>{e.value=t,console.log(n,r)},{codeHtml:n}=S(),{codeJs:r}=C();return{changeModel:t,codeHtml:n,codeJs:r,model:e}}};function T(e,t,i,s,ee,d){let f=l(`a-one-checkbox`),p=l(`aloha-example`);return a(),r(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_CHANGE_HEADER_`,description:`_A_UI_GROUP_CHANGE_DESCRIPTION_`,props:[`change`,`model-value`]},{default:u(()=>[o(f,{change:e.changeModel,"model-value":e.model,label:`Aloha`},null,8,[`change`,`model-value`]),n(`div`,null,`model: `+c(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var E=g(w,[[`render`,T]]);function D(){return{codeHtml:`<a-one-checkbox
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
};`}}var k={name:`PageOneCheckboxErrors`,components:{AlohaExample:d,AOneCheckbox:f},setup(){let e=s(void 0),{codeHtml:t}=D(),{codeJs:n}=O();return{codeHtml:t,codeJs:n,model:e}}};function A(e,t,n,i,s,ee){let c=l(`a-one-checkbox`),d=l(`aloha-example`);return a(),r(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_ERRORS_HEADER_`,description:`_A_UI_GROUP_ERRORS_DESCRIPTION_`,props:[`errors`]},{default:u(()=>[o(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,errors:`Aloha`,label:`Aloha`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var j=g(k,[[`render`,A]]);function M(){return{codeHtml:`<a-one-checkbox
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
};`}}var P={name:`PageOneCheckboxFalseValue`,components:{AlohaExample:d,AOneCheckbox:f},setup(){let e=s(!0),t=s(!0),{codeHtml:n}=M(),{codeJs:r}=N();return{codeHtml:n,codeJs:r,model1:e,model2:t}}};function F(e,t,i,s,ee,d){let f=l(`a-one-checkbox`),p=l(`aloha-example`);return a(),r(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_ONE_CHECKBOX_GROUP_FALSE_VALUE_HEADER_`,description:`_A_ONE_CHECKBOX_GROUP_FALSE_VALUE_DESCRIPTION_`,props:[`false-value`]},{default:u(()=>[o(f,{modelValue:e.model1,"onUpdate:modelValue":t[0]||=t=>e.model1=t,"false-value":!1,label:`false-value='false'`},null,8,[`modelValue`]),n(`div`,null,`model1: `+c(e.model1),1),o(f,{class:`a_mt_3`,modelValue:e.model2,"onUpdate:modelValue":t[1]||=t=>e.model2=t,"false-value":0,label:`false-value='0'`},null,8,[`modelValue`]),n(`div`,null,`model2: `+c(e.model2),1)]),_:1},8,[`code-html`,`code-js`])}var I=g(P,[[`render`,F]]);function L(){return{codeHtml:`<a-one-checkbox
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
};`}}var z={name:`PageOneCheckboxHelpText`,components:{AlohaExample:d,AOneCheckbox:f},setup(){let e=s(void 0),{codeHtml:t}=L(),{codeJs:n}=R();return{codeHtml:t,codeJs:n,model:e}}};function B(e,t,n,i,s,ee){let c=l(`a-one-checkbox`),d=l(`aloha-example`);return a(),r(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_HELP_TEXT_HEADER_`,description:`_A_UI_GROUP_HELP_TEXT_DESCRIPTION_`,props:[`help-text`]},{default:u(()=>[o(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"help-text":`Aloha`,label:`Aloha`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var V=g(z,[[`render`,B]]);function H(){return{codeHtml:`<a-one-checkbox
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
};`}}var W={name:`PageOneCheckboxIndeterminate`,components:{AlohaExample:d,AOneCheckbox:f},setup(){let e=s(void 0),{codeHtml:t}=H(),{codeJs:n}=U();return{codeHtml:t,codeJs:n,model:e}}};function G(e,t,n,i,s,ee){let c=l(`a-one-checkbox`),d=l(`aloha-example`);return a(),r(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_ONE_CHECKBOX_GROUP_INDETERMINATE_HEADER_`,description:`_A_ONE_CHECKBOX_GROUP_INDETERMINATE_DESCRIPTION_`,props:[`indeterminate`]},{default:u(()=>[o(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,indeterminate:!0,label:`Aloha`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var K=g(W,[[`render`,G]]);function te(){return{codeHtml:`<a-one-checkbox
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
></a-one-checkbox>`}}function q(){return{codeJs:`import {
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
};`}}var J={name:`PageOneCheckboxReadonly`,components:{AlohaExample:d,AOneCheckbox:f},setup(){let e=s(!0),t=s(!1),n=s(void 0),{codeHtml:r}=te(),{codeJs:i}=q();return{codeHtml:r,codeJs:i,model1:e,model2:t,model3:n}}};function Y(e,t,n,i,s,ee){let c=l(`a-one-checkbox`),d=l(`aloha-example`);return a(),r(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_READONLY_HEADER_`,description:`_A_UI_GROUP_READONLY_DESCRIPTION_`,props:[`readonly`,`readonly-default`]},{default:u(()=>[o(c,{"model-value":e.model1,readonly:!0,label:`Checkbox 1`},null,8,[`model-value`]),o(c,{class:`a_mt_3`,"false-value":!1,"model-value":e.model2,readonly:!0,label:`Checkbox 2`},null,8,[`model-value`]),o(c,{class:`a_mt_3`,"false-value":!1,"model-value":e.model3,readonly:!0,label:`Checkbox 3`},null,8,[`model-value`]),o(c,{class:`a_mt_3`,"false-value":!1,"model-value":e.model3,readonly:!0,"help-text":`Aloha`,label:`Checkbox 4`,"readonly-default":`-`},null,8,[`model-value`])]),_:1},8,[`code-html`,`code-js`])}var X=g(J,[[`render`,Y]]);function Z(){return{codeHtml:`<a-one-checkbox
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
};`}}var ne={name:`PageOneCheckboxSlotName`,components:{AElement:p,AlohaExample:d,AOneCheckbox:f},setup(){let e=s(void 0),{codeHtml:t}=Z(),{codeJs:n}=Q();return{codeHtml:t,codeJs:n,model:e}}};function re(e,t,i,s,d,f){let p=l(`a-element`),m=l(`a-one-checkbox`),h=l(`aloha-example`);return a(),r(h,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_SLOT_NAME_HEADER_`,description:`_A_UI_GROUP_SLOT_NAME_DESCRIPTION_`,props:[`slot-name`]},{default:u(()=>[o(m,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`Aloha`,"slot-name":`aloha`},{aloha:u(({id:e,labelClass:t,label:r,labelScreenReader:i,required:a,props:s})=>[n(`span`,{class:ee(t)},[n(`span`,null,c(r),1),o(p,{class:`a_ml_2`,"is-title-html":!0,"icon-left":`Window`,tabindex:`0`,"text-screen-reader":`Aloha`,title:`Aloha`,type:`text`})],2)]),_:1},8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var ie=g(ne,[[`render`,re]]);function ae(){return{codeHtml:`<a-one-checkbox
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
};`}}var se={name:`PageOneCheckboxTrueValue`,components:{AlohaExample:d,AOneCheckbox:f},setup(){let e=s(void 0),{codeHtml:t}=ae(),{codeJs:n}=oe();return{codeHtml:t,codeJs:n,model:e}}};function ce(e,t,i,s,ee,d){let f=l(`a-one-checkbox`),p=l(`aloha-example`);return a(),r(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_ONE_CHECKBOX_GROUP_TRUE_VALUE_HEADER_`,description:`_A_ONE_CHECKBOX_GROUP_TRUE_VALUE_DESCRIPTION_`,props:[`true-value`]},{default:u(()=>[o(f,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"true-value":1,label:`Aloha`},null,8,[`modelValue`]),n(`div`,null,`model: `+c(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var le=g(se,[[`render`,ce]]);function ue(){return{codeHtml:`<a-one-checkbox
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
};`}}var fe={name:`PageOneCheckboxWidthAuto`,components:{AlohaExample:d,AOneCheckbox:f},setup(){let e=s(void 0),{codeHtml:t}=ue(),{codeJs:n}=de();return{codeHtml:t,codeJs:n,model:e}}};function pe(e,t,n,i,s,ee){let c=l(`a-one-checkbox`),d=l(`aloha-example`);return a(),r(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_ONE_CHECKBOX_GROUP_WIDTH_AUTO_HEADER_`,description:`_A_ONE_CHECKBOX_GROUP_WIDTH_AUTO_DESCRIPTION_`,props:[`is-width-auto`]},{default:u(()=>[o(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"is-width-auto":!0,label:`is-width-auto='true'`},null,8,[`modelValue`]),o(c,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,"is-width-auto":!1,label:`is-width-auto='false'`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var $=g(fe,[[`render`,pe]]);function me(){return{dataEvents:[{name:`update:model-value`,description:`_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_`,type:`Function`},{name:`focus`,description:`_A_UI_EVENTS_FOCUS_DESCRIPTION_`,type:`Function`},{name:`blur`,description:`_A_UI_EVENTS_BLUR_DESCRIPTION_`,type:`Function`}]}}function he(){let e=i(()=>m({placeholder:`_A_ONE_CHECKBOX_COMPONENT_NAME_`}));return{pageTitle:i(()=>`AOneCheckbox${e.value?` (${e.value})`:``}`)}}function ge(){return{dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`change`,description:`_A_UI_PROPS_CHANGE_DESCRIPTION_`,type:`Function`,default:`() => {}`,required:!1},{name:`dependencies`,description:`_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_`,type:`Array / Object`,default:void 0,required:!1},{name:`disabled`,description:`_A_UI_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`errors`,description:`_A_UI_PROPS_ERRORS_DESCRIPTION_`,type:`String / Array`,default:void 0,required:!1},{name:`exclude-render-attributes`,description:`_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`extra`,description:`_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`false-value`,description:`_A_ONE_CHECKBOX_PROPS_FALSE_VALUE_DESCRIPTION_`,type:`Boolean / String / Number`,default:void 0,required:!1},{name:`help-text`,description:`_A_UI_PROPS_HELP_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`html-id`,description:`_A_UI_PROPS_HTML_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`id`,description:`_A_UI_PROPS_ID_DESCRIPTION_`,type:`String / Number`,default:`() => uniqueId("a_one_checkbox_")`,required:!1},{name:`id-prefix`,description:`_A_UI_PROPS_ID_PREFIX_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`indeterminate`,description:`_A_ONE_CHECKBOX_PROPS_INDETERMINATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`input-attributes`,description:`_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`input-class`,description:`_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`is-hide`,description:`_A_UI_PROPS_IS_HIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-label-title`,description:`_A_ONE_CHECKBOX_PROPS_IS_LABEL_TITLE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-render`,description:`_A_UI_PROPS_IS_RENDER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-width-auto`,description:`_A_ONE_CHECKBOX_PROPS_IS_WIDTH_AUTO_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`label`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`label-attributes`,description:`_A_ONE_CHECKBOX_PROPS_LABEL_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`{}`,required:!1},{name:`label-class`,description:`_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`label-screen-reader`,description:`_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`model-dependencies`,description:`_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`model-undefined`,description:`_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_`,type:`String / Number / Object / Array / Boolean`,default:void 0,required:!1},{name:`model-value`,description:`_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_`,type:`Boolean / String / Number`,default:void 0,required:!1},{name:`readonly`,description:`_A_UI_PROPS_READONLY_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`readonly-default`,description:`_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_`,type:`String`,default:``,required:!1},{name:`required`,description:`_A_UI_PROPS_REQUIRED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`slot-name`,description:`_A_ONE_CHECKBOX_PROPS_SLOT_NAME_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`true-value`,description:`_A_ONE_CHECKBOX_PROPS_TRUE_VALUE_DESCRIPTION_`,type:`Boolean / String / Number`,default:!0,required:!1}]}}var _e={name:`PageOneCheckbox`,components:{AlohaPage:e,AlohaTableProps:t,ATranslation:h,PageOneCheckboxBasic:x,PageOneCheckboxChange:E,PageOneCheckboxErrors:j,PageOneCheckboxFalseValue:I,PageOneCheckboxHelpText:V,PageOneCheckboxIndeterminate:K,PageOneCheckboxReadonly:X,PageOneCheckboxSlotName:ie,PageOneCheckboxTrueValue:le,PageOneCheckboxWidthAuto:$},setup(){let{pageTitle:e}=he(),{dataProps:t}=ge(),{dataEvents:n}=me();return{dataEvents:n,dataProps:t,pageTitle:e}}};function ve(e,t,n,i,s,ee){let c=l(`a-translation`),d=l(`page-one-checkbox-basic`),f=l(`page-one-checkbox-change`),p=l(`page-one-checkbox-help-text`),m=l(`page-one-checkbox-errors`),h=l(`page-one-checkbox-width-auto`),g=l(`page-one-checkbox-false-value`),_=l(`page-one-checkbox-true-value`),v=l(`page-one-checkbox-indeterminate`),y=l(`page-one-checkbox-slot-name`),b=l(`page-one-checkbox-readonly`),x=l(`aloha-table-props`),S=l(`aloha-page`);return a(),r(S,{"page-title":e.pageTitle},{body:u(()=>[o(c,{tag:`p`,html:`_A_ONE_CHECKBOX_COMPONENT_DESCRIPTION_`}),o(d),o(f),o(p),o(m),o(h),o(g),o(_),o(v),o(y),o(b),o(x,{data:e.dataProps},null,8,[`data`]),o(x,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`])]),_:1},8,[`page-title`])}var ye=g(_e,[[`render`,ve]]);export{ye as default};