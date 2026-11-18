import{t as e}from"./chunk.AlohaPage.D7DhFNcw.js";import{t}from"./chunk.AlohaTableProps.DV2Sn4dJ.js";import{Bt as n,Ft as r,It as i,Pt as a,Zt as o,an as s,pn as c,sn as l,tn as u}from"./chunk.vendor.H0cZuFAV.js";import{t as d}from"./chunk.AlohaExample.B4lEPEM8.js";import{F as f,Wt as p,it as m}from"./bundle.index.C3m7sagw.js";import{t as h}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function g(){return{codeHtml:`<a-select-icon
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
};`}}var v={name:`PageValidatedJsonModeJson`,components:{AlohaExample:d,AValidatedJson:f},setup(){let{codeHtml:e}=g(),{codeJs:t}=_();return{children:[{type:`text`,label:`Key`,id:`key`,required:!0},{type:`oneCheckbox`,label:`Checkbox`,id:`checkbox`},{type:`currency`,label:`Currency`,id:`currency`}],codeHtml:e,codeJs:t,model1:l({aloha1:{key:`aloha1`}}),model2:l(void 0)}}};function y(e,t,a,l,d,f){let p=u(`a-validated-json`),m=u(`aloha-example`);return o(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`type`]},{default:s(()=>[n(p,{modelValue:e.model1,"onUpdate:modelValue":t[0]||=t=>e.model1=t,"id-prefix":`aloha4`,children:e.children,"key-id":`key`,"unique-children-ids":[`key`],label:`_A_VALIDATED_JSON_COMPONENT_LABEL_JSON_`,mode:`json`},null,8,[`modelValue`,`children`]),t[2]||=r(`div`,null,`model1:`,-1),r(`pre`,null,c(e.model1),1),n(p,{modelValue:e.model2,"onUpdate:modelValue":t[1]||=t=>e.model2=t,"id-prefix":`aloha5`,children:e.children,"unique-children-ids":[`key`],label:`_A_VALIDATED_JSON_COMPONENT_LABEL_JSON_`,mode:`json`},null,8,[`modelValue`,`children`]),t[3]||=r(`div`,null,`model2:`,-1),r(`pre`,null,c(e.model2),1)]),_:1},8,[`code-html`,`code-js`])}var b=h(v,[[`render`,y]]);function x(){return{codeHtml:`<a-select-icon
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
};`}}var C={name:`PageValidatedJsonModeList`,components:{AlohaExample:d,AValidatedJson:f},setup(){let{codeHtml:e}=x(),{codeJs:t}=S();return{children:[{type:`text`,label:`Text`,id:`text`,required:!0},{type:`oneCheckbox`,label:`Checkbox`,id:`checkbox`},{type:`currency`,label:`Currency`,id:`currency`}],codeHtml:e,codeJs:t,model1:l([{text:`Aloha1`},{text:`Aloha2`}]),model2:l(void 0)}}};function w(e,t,a,l,d,f){let p=u(`a-validated-json`),m=u(`aloha-example`);return o(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`type`]},{default:s(()=>[n(p,{modelValue:e.model1,"onUpdate:modelValue":t[0]||=t=>e.model1=t,"id-prefix":`aloha1`,children:e.children,"unique-children-ids":[`text`],label:`_A_VALIDATED_JSON_COMPONENT_LABEL_LIST_`,mode:`list`},null,8,[`modelValue`,`children`]),t[2]||=r(`div`,null,`model1:`,-1),r(`pre`,null,c(e.model1),1),n(p,{modelValue:e.model1,"onUpdate:modelValue":t[1]||=t=>e.model1=t,"id-prefix":`aloha2`,children:e.children,readonly:!0,label:`_A_VALIDATED_JSON_COMPONENT_LABEL_LIST_`,mode:`list`},null,8,[`modelValue`,`children`])]),_:1},8,[`code-html`,`code-js`])}var T=h(C,[[`render`,w]]);function E(){return{codeHtml:`<a-select-icon
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
};`}}var O={name:`PageValidatedJsonModeListTyped`,components:{AlohaExample:d,AValidatedJson:f},setup(){let{codeHtml:e}=E(),{codeJs:t}=D();return{children:[{type:`select`,label:`Aloha`,id:`aloha`,required:!0,data:[{label:`Foo`,value:`foo`},{label:`Bar`,value:`bar`}],keyLabel:`label`,keyId:`value`},{type:`oneCheckbox`,label:`Checkbox`,id:`checkbox`},{type:`currency`,label:`Currency`,id:`currency`}],codeHtml:e,codeJs:t,model1:l(void 0),typedChildren:{foo:[{id:`text_foo`,type:`text`,label:`Text foo`},{type:`oneCheckbox`,label:`Checkbox foo`,id:`checkbox_foo`}],bar:[{id:`text_bar`,type:`text`,label:`Text bar`}]}}}};function k(e,t,a,l,d,f){let p=u(`a-validated-json`),m=u(`aloha-example`);return o(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`type`]},{default:s(()=>[n(p,{modelValue:e.model1,"onUpdate:modelValue":t[0]||=t=>e.model1=t,"id-prefix":`aloha1`,children:e.children,"typed-children":e.typedChildren,"unique-children-ids":[`text`],label:`_A_VALIDATED_JSON_COMPONENT_LABEL_LIST_`,mode:`list`,"typed-base-id":`aloha`},null,8,[`modelValue`,`children`,`typed-children`]),t[1]||=r(`div`,null,`model1:`,-1),r(`pre`,null,c(e.model1),1)]),_:1},8,[`code-html`,`code-js`])}var A=h(O,[[`render`,k]]);function j(){return{codeHtml:`<a-validated-json
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
};`}}var N={name:`PageValidatedJsonModePrimitiveList`,components:{AlohaExample:d,AValidatedJson:f},setup(){let e=l([`Aloha`,`Vue`]),t=[{id:`value`,type:`text`,label:`_A_VALIDATED_JSON_COMPONENT_LABEL_VALUE_`,required:!0}],{codeHtml:n}=j(),{codeJs:r}=M();return{children:t,codeHtml:n,codeJs:r,model:e}}};function P(e,t,a,l,d,f){let p=u(`a-validated-json`),m=u(`aloha-example`);return o(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_VALIDATED_JSON_COMPONENT_PRIMITIVE_LIST_HEADER_`,description:`_A_VALIDATED_JSON_COMPONENT_PRIMITIVE_LIST_DESCRIPTION_`,props:[`mode`,`value-key`,`children`,`unique-children-ids`]},{default:s(()=>[n(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,id:`primitive-list`,mode:`list`,"value-key":`value`,children:e.children,"unique-children-ids":[`value`],"element-template":`{{ value }}`,label:`_A_VALIDATED_JSON_COMPONENT_LABEL_LIST_`},null,8,[`modelValue`,`children`]),r(`pre`,null,c(e.model),1),n(p,{modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,id:`primitive-list-readonly`,mode:`list`,"value-key":`value`,children:e.children,readonly:!0,"element-template":`{{ value }}`,label:`_A_VALIDATED_JSON_COMPONENT_LABEL_LIST_`},null,8,[`modelValue`,`children`])]),_:1},8,[`code-html`,`code-js`])}var F=h(N,[[`render`,P]]);function I(){return{codeHtml:`<a-select-icon
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
};`}}var R={name:`PageValidatedJsonModeSingle`,components:{AlohaExample:d,AValidatedJson:f},setup(){let{codeHtml:e}=I(),{codeJs:t}=L();return{children:[{type:`text`,label:`Text`,id:`text`},{type:`oneCheckbox`,label:`Checkbox`,id:`checkbox`},{type:`currency`,label:`Currency`,id:`currency`},{type:`validatedJson`,mode:`single`,id:`validated_json`,children:[{type:`text`,label:`Text`,id:`text`},{type:`oneCheckbox`,label:`Checkbox`,id:`checkbox`},{type:`currency`,label:`Currency`,id:`currency`}]}],codeHtml:e,codeJs:t,model1:l(void 0),model2:l(void 0),model3:l(void 0),model4:l({text:`s`})}}};function z(e,t,a,l,d,f){let p=u(`a-validated-json`),m=u(`aloha-example`);return o(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`type`]},{default:s(()=>[n(p,{modelValue:e.model1,"onUpdate:modelValue":t[0]||=t=>e.model1=t,"id-prefix":`aloha1`,children:e.children,label:`_A_VALIDATED_JSON_COMPONENT_LABEL_SINGLE_`,mode:`single`},null,8,[`modelValue`,`children`]),t[4]||=r(`div`,null,`model1:`,-1),r(`pre`,null,c(e.model1),1),n(p,{class:`a_mt_5`,modelValue:e.model2,"onUpdate:modelValue":t[1]||=t=>e.model2=t,"id-prefix":`aloha2`,children:e.children,required:!0,label:`_A_VALIDATED_JSON_COMPONENT_LABEL_SINGLE_`,mode:`single`},null,8,[`modelValue`,`children`]),t[5]||=r(`div`,null,`model2:`,-1),r(`pre`,null,c(e.model2),1),n(p,{class:`a_mt_5`,modelValue:e.model3,"onUpdate:modelValue":t[2]||=t=>e.model3=t,"id-prefix":`aloha3`,children:e.children,"mode-options":{optionalSingleDefault:!0},label:`_A_VALIDATED_JSON_COMPONENT_LABEL_SINGLE_`,mode:`single`},null,8,[`modelValue`,`children`]),t[6]||=r(`div`,null,`model3:`,-1),r(`pre`,null,c(e.model3),1),n(p,{class:`a_mt_5`,modelValue:e.model4,"onUpdate:modelValue":t[3]||=t=>e.model4=t,"id-prefix":`aloha3`,children:e.children,label:`_A_VALIDATED_JSON_COMPONENT_LABEL_SINGLE_`,mode:`single`},null,8,[`modelValue`,`children`]),t[7]||=r(`div`,null,`model4:`,-1),r(`pre`,null,c(e.model4),1)]),_:1},8,[`code-html`,`code-js`])}var B=h(R,[[`render`,z]]);function V(){return{dataEvents:[{name:`close`,description:`_A_ALERT_EVENTS_CLOSE_DESCRIPTION_`,type:`Function`}]}}function H(){let e=a(()=>p({placeholder:`_A_VALIDATED_JSON_COMPONENT_NAME_`}));return{pageTitle:a(()=>`AValidatedJson${e.value?` (${e.value})`:``}`)}}function U(){return{dataProps:[{name:`alert-class`,description:`_A_ALERT_PROPS_ALERT_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`alert-content-class`,description:`_A_ALERT_PROPS_ALERT_CONTENT_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`btn-close-attributes`,description:`_A_ALERT_PROPS_BTN_CLOSE_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`{}`,required:!1},{name:`closable`,description:`_A_ALERT_PROPS_CLOSABLE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`show-icon`,description:`_A_ALERT_PROPS_HAS_ICON_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`html`,description:`_A_ALERT_PROPS_HTML_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`icon`,description:`_A_ALERT_PROPS_ICON_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`icon-class`,description:`_A_ALERT_PROPS_ICON_CLASS_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`is-visible`,description:`_A_ALERT_PROPS_IS_VISIBLE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`removeAlertOnClose`,description:`_A_ALERT_PROPS_REMOVE_ALERT_ON_CLOSE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`safe-html`,description:`_A_ALERT_PROPS_SAFE_HTML_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`text`,description:`_A_ALERT_PROPS_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`text-close`,description:`_A_ALERT_PROPS_TEXT_CLOSE_DESCRIPTION_`,type:`String`,default:`_ALERT_CLOSE_`,required:!1},{name:`type`,description:`_A_ALERT_PROPS_TYPE_DESCRIPTION_`,type:`String`,default:`danger`,required:!1}]}}function W(){return{dataSlots:[{name:`default`,description:`_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_`}]}}var G={name:`PageValidatedJson`,components:{AlohaPage:e,AlohaTableProps:t,ATranslation:m,PageValidatedJsonModeJson:b,PageValidatedJsonModeList:T,PageValidatedJsonModeListTyped:A,PageValidatedJsonModePrimitiveList:F,PageValidatedJsonModeSingle:B},setup(){let{pageTitle:e}=H(),{dataProps:t}=U(),{dataSlots:n}=W(),{dataEvents:r}=V();return{dataEvents:r,dataProps:t,dataSlots:n,pageTitle:e}}};function K(e,t,r,a,c,l){let d=u(`a-translation`),f=u(`page-validated-json-mode-single`),p=u(`page-validated-json-mode-list`),m=u(`page-validated-json-mode-primitive-list`),h=u(`page-validated-json-mode-list-typed`),g=u(`page-validated-json-mode-json`),_=u(`aloha-page`);return o(),i(_,{"page-title":e.pageTitle},{body:s(()=>[n(d,{tag:`p`,html:`_A_VALIDATED_JSON_COMPONENT_DESCRIPTION_`}),n(f),n(p),n(m),n(h),n(g)]),_:1},8,[`page-title`])}var q=h(G,[[`render`,K]]);export{q as default};