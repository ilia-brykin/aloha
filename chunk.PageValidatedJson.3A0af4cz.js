import{t as e}from"./chunk.AlohaPage.BvUvrvQ4.js";import{t}from"./chunk.AlohaTableProps.BIN1mKDB.js";import{Bt as n,Cn as r,Ht as i,Vt as a,an as o,gn as s,ln as c,pn as l,qt as u}from"./chunk.vendor.SEynj6EJ.js";import{t as d}from"./chunk.AlohaExample.Bx3NX4bX.js";import{P as f,hn as p,mn as m,t as h}from"./bundle.index.LlT2KVEy.js";function g(){return{codeHtml:`<a-select-icon
  v-model="model1"
  label="Select"
  type="select"
></a-select-icon>
<div>model1: {{ model1 }}</div>
<a-select-icon
  v-model="model2"
  class="a_mt_3"
  label="Multiselect"
  type="multiselect"
></a-select-icon>
<div>model2: {{ model2 }}</div>`}}function _(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelectIcon,
} from "aloha-vue";
    
export default {
  name: "PageValidatedJsonModeList",
  components: {
    ASelectIcon,
  },
  setup() {
    const model1 = ref(undefined);
    const model2 = ref(undefined);

    return {
      model1,
      model2,
    };
  },
};`}}var v={name:`PageValidatedJsonModeJson`,components:{AlohaExample:d,AValidatedJson:f},setup(){let{codeHtml:e}=g(),{codeJs:t}=_();return{children:[{type:`text`,label:`Key`,id:`key`,required:!0},{type:`oneCheckbox`,label:`Checkbox`,id:`checkbox`},{type:`currency`,label:`Currency`,id:`currency`}],codeHtml:e,codeJs:t,model1:s({aloha1:{key:`aloha1`}}),model2:s(void 0)}}};function y(e,t,n,s,d,f){let p=c(`a-validated-json`),m=c(`aloha-example`);return o(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`type`]},{default:l(()=>[u(p,{modelValue:e.model1,"onUpdate:modelValue":t[0]||=t=>e.model1=t,"id-prefix":`aloha4`,children:e.children,"key-id":`key`,"unique-children-ids":[`key`],label:`_A_VALIDATED_JSON_COMPONENT_LABEL_JSON_`,mode:`json`},null,8,[`modelValue`,`children`]),t[2]||=a(`div`,null,`model1:`,-1),a(`pre`,null,r(e.model1),1),u(p,{modelValue:e.model2,"onUpdate:modelValue":t[1]||=t=>e.model2=t,"id-prefix":`aloha5`,children:e.children,"unique-children-ids":[`key`],label:`_A_VALIDATED_JSON_COMPONENT_LABEL_JSON_`,mode:`json`},null,8,[`modelValue`,`children`]),t[3]||=a(`div`,null,`model2:`,-1),a(`pre`,null,r(e.model2),1)]),_:1},8,[`code-html`,`code-js`])}var b=h(v,[[`render`,y]]);function x(){return{codeHtml:`<a-select-icon
  v-model="model1"
  label="Select"
  type="select"
></a-select-icon>
<div>model1: {{ model1 }}</div>
<a-select-icon
  v-model="model2"
  class="a_mt_3"
  label="Multiselect"
  type="multiselect"
></a-select-icon>
<div>model2: {{ model2 }}</div>`}}function S(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelectIcon,
} from "aloha-vue";
    
export default {
  name: "PageValidatedJsonModeList",
  components: {
    ASelectIcon,
  },
  setup() {
    const model1 = ref(undefined);
    const model2 = ref(undefined);

    return {
      model1,
      model2,
    };
  },
};`}}var C={name:`PageValidatedJsonModeList`,components:{AlohaExample:d,AValidatedJson:f},setup(){let{codeHtml:e}=x(),{codeJs:t}=S();return{children:[{type:`text`,label:`Text`,id:`text`,required:!0},{type:`oneCheckbox`,label:`Checkbox`,id:`checkbox`},{type:`currency`,label:`Currency`,id:`currency`}],codeHtml:e,codeJs:t,model1:s([{text:`Aloha1`},{text:`Aloha2`}]),model2:s(void 0)}}};function w(e,t,n,s,d,f){let p=c(`a-validated-json`),m=c(`aloha-example`);return o(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`type`]},{default:l(()=>[u(p,{modelValue:e.model1,"onUpdate:modelValue":t[0]||=t=>e.model1=t,"id-prefix":`aloha1`,children:e.children,"unique-children-ids":[`text`],label:`_A_VALIDATED_JSON_COMPONENT_LABEL_LIST_`,mode:`list`},null,8,[`modelValue`,`children`]),t[2]||=a(`div`,null,`model1:`,-1),a(`pre`,null,r(e.model1),1),u(p,{modelValue:e.model1,"onUpdate:modelValue":t[1]||=t=>e.model1=t,"id-prefix":`aloha2`,children:e.children,readonly:!0,label:`_A_VALIDATED_JSON_COMPONENT_LABEL_LIST_`,mode:`list`},null,8,[`modelValue`,`children`])]),_:1},8,[`code-html`,`code-js`])}var T=h(C,[[`render`,w]]);function E(){return{codeHtml:`<a-select-icon
  v-model="model1"
  label="Select"
  type="select"
></a-select-icon>
<div>model1: {{ model1 }}</div>
<a-select-icon
  v-model="model2"
  class="a_mt_3"
  label="Multiselect"
  type="multiselect"
></a-select-icon>
<div>model2: {{ model2 }}</div>`}}function D(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelectIcon,
} from "aloha-vue";
    
export default {
  name: "PageValidatedJsonModeList",
  components: {
    ASelectIcon,
  },
  setup() {
    const model1 = ref(undefined);
    const model2 = ref(undefined);

    return {
      model1,
      model2,
    };
  },
};`}}var O={name:`PageValidatedJsonModeListTyped`,components:{AlohaExample:d,AValidatedJson:f},setup(){let{codeHtml:e}=E(),{codeJs:t}=D();return{children:[{type:`select`,label:`Aloha`,id:`aloha`,required:!0,data:[{label:`Foo`,value:`foo`},{label:`Bar`,value:`bar`}],keyLabel:`label`,keyId:`value`},{type:`oneCheckbox`,label:`Checkbox`,id:`checkbox`},{type:`currency`,label:`Currency`,id:`currency`}],codeHtml:e,codeJs:t,model1:s(void 0),typedChildren:{foo:[{id:`text_foo`,type:`text`,label:`Text foo`},{type:`oneCheckbox`,label:`Checkbox foo`,id:`checkbox_foo`}],bar:[{id:`text_bar`,type:`text`,label:`Text bar`}]}}}};function k(e,t,n,s,d,f){let p=c(`a-validated-json`),m=c(`aloha-example`);return o(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`type`]},{default:l(()=>[u(p,{modelValue:e.model1,"onUpdate:modelValue":t[0]||=t=>e.model1=t,"id-prefix":`aloha1`,children:e.children,"typed-children":e.typedChildren,"unique-children-ids":[`text`],label:`_A_VALIDATED_JSON_COMPONENT_LABEL_LIST_`,mode:`list`,"typed-base-id":`aloha`},null,8,[`modelValue`,`children`,`typed-children`]),t[1]||=a(`div`,null,`model1:`,-1),a(`pre`,null,r(e.model1),1)]),_:1},8,[`code-html`,`code-js`])}var A=h(O,[[`render`,k]]);function j(){return{codeHtml:`<a-validated-json
  v-model="model"
  mode="list"
  value-key="value"
  :children="children"
  :unique-children-ids="['value']"
  element-template="{{ value }}"
/>`}}function M(){return{codeJs:`import { ref } from "vue";
import { AValidatedJson } from "aloha-vue";

export default {
  components: { AValidatedJson },
  setup() {
    const model = ref(["Aloha", "Vue"]);
    const children = [{ id: "value", type: "text", label: "_A_VALIDATED_JSON_COMPONENT_LABEL_VALUE_", required: true }];
    return { model, children };
  },
};`}}var N={name:`PageValidatedJsonModePrimitiveList`,components:{AlohaExample:d,AValidatedJson:f},setup(){let e=s([`Aloha`,`Vue`]),t=[{id:`value`,type:`text`,label:`_A_VALIDATED_JSON_COMPONENT_LABEL_VALUE_`,required:!0}],{codeHtml:n}=j(),{codeJs:r}=M();return{children:t,codeHtml:n,codeJs:r,model:e}}};function P(e,t,n,s,d,f){let p=c(`a-validated-json`),m=c(`aloha-example`);return o(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_VALIDATED_JSON_COMPONENT_PRIMITIVE_LIST_HEADER_`,description:`_A_VALIDATED_JSON_COMPONENT_PRIMITIVE_LIST_DESCRIPTION_`,props:[`mode`,`value-key`,`children`,`unique-children-ids`]},{default:l(()=>[u(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,id:`primitive-list`,mode:`list`,"value-key":`value`,children:e.children,"unique-children-ids":[`value`],"element-template":`{{ value }}`,label:`_A_VALIDATED_JSON_COMPONENT_LABEL_LIST_`},null,8,[`modelValue`,`children`]),a(`pre`,null,r(e.model),1),u(p,{modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,id:`primitive-list-readonly`,mode:`list`,"value-key":`value`,children:e.children,readonly:!0,"element-template":`{{ value }}`,label:`_A_VALIDATED_JSON_COMPONENT_LABEL_LIST_`},null,8,[`modelValue`,`children`])]),_:1},8,[`code-html`,`code-js`])}var F=h(N,[[`render`,P]]);function I(){return{codeHtml:`<a-select-icon
  v-model="model1"
  label="Select"
  type="select"
></a-select-icon>
<div>model1: {{ model1 }}</div>
<a-select-icon
  v-model="model2"
  class="a_mt_3"
  label="Multiselect"
  type="multiselect"
></a-select-icon>
<div>model2: {{ model2 }}</div>`}}function L(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelectIcon,
} from "aloha-vue";
    
export default {
  name: "PageSelectIconBasic",
  components: {
    ASelectIcon,
  },
  setup() {
    const model1 = ref(undefined);
    const model2 = ref(undefined);

    return {
      model1,
      model2,
    };
  },
};`}}var R={name:`PageValidatedJsonModeSingle`,components:{AlohaExample:d,AValidatedJson:f},setup(){let{codeHtml:e}=I(),{codeJs:t}=L();return{children:[{type:`text`,label:`Text`,id:`text`},{type:`oneCheckbox`,label:`Checkbox`,id:`checkbox`},{type:`currency`,label:`Currency`,id:`currency`},{type:`validatedJson`,mode:`single`,id:`validated_json`,children:[{type:`text`,label:`Text`,id:`text`},{type:`oneCheckbox`,label:`Checkbox`,id:`checkbox`},{type:`currency`,label:`Currency`,id:`currency`}]}],codeHtml:e,codeJs:t,model1:s(void 0),model2:s(void 0),model3:s(void 0),model4:s({text:`s`})}}};function z(e,t,n,s,d,f){let p=c(`a-validated-json`),m=c(`aloha-example`);return o(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`type`]},{default:l(()=>[u(p,{modelValue:e.model1,"onUpdate:modelValue":t[0]||=t=>e.model1=t,"id-prefix":`aloha1`,children:e.children,label:`_A_VALIDATED_JSON_COMPONENT_LABEL_SINGLE_`,mode:`single`},null,8,[`modelValue`,`children`]),t[4]||=a(`div`,null,`model1:`,-1),a(`pre`,null,r(e.model1),1),u(p,{class:`a_mt_5`,modelValue:e.model2,"onUpdate:modelValue":t[1]||=t=>e.model2=t,"id-prefix":`aloha2`,children:e.children,required:!0,label:`_A_VALIDATED_JSON_COMPONENT_LABEL_SINGLE_`,mode:`single`},null,8,[`modelValue`,`children`]),t[5]||=a(`div`,null,`model2:`,-1),a(`pre`,null,r(e.model2),1),u(p,{class:`a_mt_5`,modelValue:e.model3,"onUpdate:modelValue":t[2]||=t=>e.model3=t,"id-prefix":`aloha3`,children:e.children,"mode-options":{optionalSingleDefault:!0},label:`_A_VALIDATED_JSON_COMPONENT_LABEL_SINGLE_`,mode:`single`},null,8,[`modelValue`,`children`]),t[6]||=a(`div`,null,`model3:`,-1),a(`pre`,null,r(e.model3),1),u(p,{class:`a_mt_5`,modelValue:e.model4,"onUpdate:modelValue":t[3]||=t=>e.model4=t,"id-prefix":`aloha3`,children:e.children,label:`_A_VALIDATED_JSON_COMPONENT_LABEL_SINGLE_`,mode:`single`},null,8,[`modelValue`,`children`]),t[7]||=a(`div`,null,`model4:`,-1),a(`pre`,null,r(e.model4),1)]),_:1},8,[`code-html`,`code-js`])}var B=h(R,[[`render`,z]]);function V(){return{dataEvents:[{name:`close`,description:`_A_ALERT_EVENTS_CLOSE_DESCRIPTION_`,type:`Function`}]}}function H(){let e=n(()=>p({placeholder:`_A_VALIDATED_JSON_COMPONENT_NAME_`}));return{pageTitle:n(()=>`AValidatedJson${e.value?` (${e.value})`:``}`)}}function U(){return{dataProps:[{name:`alert-class`,description:`_A_ALERT_PROPS_ALERT_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`alert-content-class`,description:`_A_ALERT_PROPS_ALERT_CONTENT_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`btn-close-attributes`,description:`_A_ALERT_PROPS_BTN_CLOSE_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`{}`,required:!1},{name:`closable`,description:`_A_ALERT_PROPS_CLOSABLE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`show-icon`,description:`_A_ALERT_PROPS_SHOW_ICON_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`html`,description:`_A_ALERT_PROPS_HTML_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`icon`,description:`_A_ALERT_PROPS_ICON_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`icon-class`,description:`_A_ALERT_PROPS_ICON_CLASS_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`is-visible`,description:`_A_ALERT_PROPS_IS_VISIBLE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`removeAlertOnClose`,description:`_A_ALERT_PROPS_REMOVE_ALERT_ON_CLOSE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`safe-html`,description:`_A_ALERT_PROPS_SAFE_HTML_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`text`,description:`_A_ALERT_PROPS_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`text-close`,description:`_A_ALERT_PROPS_TEXT_CLOSE_DESCRIPTION_`,type:`String`,default:`_A_ALERT_CLOSE_`,required:!1},{name:`type`,description:`_A_ALERT_PROPS_TYPE_DESCRIPTION_`,type:`String`,default:`danger`,required:!1}]}}function W(){return{dataSlots:[{name:`default`,description:`_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_`}]}}var G={name:`PageValidatedJson`,components:{AlohaPage:e,AlohaTableProps:t,ATranslation:m,PageValidatedJsonModeJson:b,PageValidatedJsonModeList:T,PageValidatedJsonModeListTyped:A,PageValidatedJsonModePrimitiveList:F,PageValidatedJsonModeSingle:B},setup(){let{pageTitle:e}=H(),{dataProps:t}=U(),{dataSlots:n}=W(),{dataEvents:r}=V();return{dataEvents:r,dataProps:t,dataSlots:n,pageTitle:e}}};function K(e,t,n,r,a,s){let d=c(`a-translation`),f=c(`page-validated-json-mode-single`),p=c(`page-validated-json-mode-list`),m=c(`page-validated-json-mode-primitive-list`),h=c(`page-validated-json-mode-list-typed`),g=c(`page-validated-json-mode-json`),_=c(`aloha-page`);return o(),i(_,{"page-title":e.pageTitle},{body:l(()=>[u(d,{tag:`p`,html:`_A_VALIDATED_JSON_COMPONENT_DESCRIPTION_`}),u(f),u(p),u(m),u(h),u(g)]),_:1},8,[`page-title`])}var q=h(G,[[`render`,K]]);export{q as default};