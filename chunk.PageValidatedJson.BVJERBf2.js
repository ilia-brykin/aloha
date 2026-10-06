import{$t as e,Ct as t,Tt as n,Ut as r,Yt as i,kt as a,qt as o,wt as s,zt as c}from"./chunk.vendor.CZPox1kV.js";import{N as l,Z as u,kt as d,t as f}from"./bundle.index.BmSiyQNH.js";import{n as p,t as m}from"./chunk.AlohaExample.CD4LlhAz.js";import{t as h}from"./chunk.AlohaTableProps.Dksi7fmb.js";function g(){return{codeHtml:`<a-select-icon
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
};`}}var v={name:`PageValidatedJsonModeJson`,components:{AlohaExample:m,AValidatedJson:l},setup(){let{codeHtml:e}=g(),{codeJs:t}=_();return{children:[{type:`text`,label:`Key`,id:`key`,required:!0},{type:`oneCheckbox`,label:`Checkbox`,id:`checkbox`},{type:`currency`,label:`Currency`,id:`currency`}],codeHtml:e,codeJs:t,model1:i({aloha1:{key:`aloha1`}}),model2:i(void 0)}}};function y(t,i,l,u,d,f){let p=r(`a-validated-json`),m=r(`aloha-example`);return c(),n(m,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`type`]},{default:o(()=>[a(p,{modelValue:t.model1,"onUpdate:modelValue":i[0]||=e=>t.model1=e,"id-prefix":`aloha4`,children:t.children,"key-id":`key`,"unique-children-ids":[`key`],label:`_A_VALIDATED_JSON_COMPONENT_LABEL_JSON_`,mode:`json`},null,8,[`modelValue`,`children`]),i[2]||=s(`div`,null,`model1:`,-1),s(`pre`,null,e(t.model1),1),a(p,{modelValue:t.model2,"onUpdate:modelValue":i[1]||=e=>t.model2=e,"id-prefix":`aloha5`,children:t.children,"unique-children-ids":[`key`],label:`_A_VALIDATED_JSON_COMPONENT_LABEL_JSON_`,mode:`json`},null,8,[`modelValue`,`children`]),i[3]||=s(`div`,null,`model2:`,-1),s(`pre`,null,e(t.model2),1)]),_:1},8,[`code-html`,`code-js`])}var b=f(v,[[`render`,y]]);function x(){return{codeHtml:`<a-select-icon
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
};`}}var C={name:`PageValidatedJsonModeList`,components:{AlohaExample:m,AValidatedJson:l},setup(){let{codeHtml:e}=x(),{codeJs:t}=S();return{children:[{type:`text`,label:`Text`,id:`text`,required:!0},{type:`oneCheckbox`,label:`Checkbox`,id:`checkbox`},{type:`currency`,label:`Currency`,id:`currency`}],codeHtml:e,codeJs:t,model1:i([{text:`Aloha1`},{text:`Aloha2`}]),model2:i(void 0)}}};function w(t,i,l,u,d,f){let p=r(`a-validated-json`),m=r(`aloha-example`);return c(),n(m,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`type`]},{default:o(()=>[a(p,{modelValue:t.model1,"onUpdate:modelValue":i[0]||=e=>t.model1=e,"id-prefix":`aloha1`,children:t.children,"unique-children-ids":[`text`],label:`_A_VALIDATED_JSON_COMPONENT_LABEL_LIST_`,mode:`list`},null,8,[`modelValue`,`children`]),i[2]||=s(`div`,null,`model1:`,-1),s(`pre`,null,e(t.model1),1),a(p,{modelValue:t.model1,"onUpdate:modelValue":i[1]||=e=>t.model1=e,"id-prefix":`aloha2`,children:t.children,readonly:!0,label:`_A_VALIDATED_JSON_COMPONENT_LABEL_LIST_`,mode:`list`},null,8,[`modelValue`,`children`])]),_:1},8,[`code-html`,`code-js`])}var T=f(C,[[`render`,w]]);function E(){return{codeHtml:`<a-select-icon
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
};`}}var O={name:`PageValidatedJsonModeListTyped`,components:{AlohaExample:m,AValidatedJson:l},setup(){let{codeHtml:e}=E(),{codeJs:t}=D();return{children:[{type:`select`,label:`Aloha`,id:`aloha`,required:!0,data:[{label:`Foo`,value:`foo`},{label:`Bar`,value:`bar`}],keyLabel:`label`,keyId:`value`},{type:`oneCheckbox`,label:`Checkbox`,id:`checkbox`},{type:`currency`,label:`Currency`,id:`currency`}],codeHtml:e,codeJs:t,model1:i(void 0),typedChildren:{foo:[{id:`text_foo`,type:`text`,label:`Text foo`},{type:`oneCheckbox`,label:`Checkbox foo`,id:`checkbox_foo`}],bar:[{id:`text_bar`,type:`text`,label:`Text bar`}]}}}};function k(t,i,l,u,d,f){let p=r(`a-validated-json`),m=r(`aloha-example`);return c(),n(m,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`type`]},{default:o(()=>[a(p,{modelValue:t.model1,"onUpdate:modelValue":i[0]||=e=>t.model1=e,"id-prefix":`aloha1`,children:t.children,"typed-children":t.typedChildren,"unique-children-ids":[`text`],label:`_A_VALIDATED_JSON_COMPONENT_LABEL_LIST_`,mode:`list`,"typed-base-id":`aloha`},null,8,[`modelValue`,`children`,`typed-children`]),i[1]||=s(`div`,null,`model1:`,-1),s(`pre`,null,e(t.model1),1)]),_:1},8,[`code-html`,`code-js`])}var A=f(O,[[`render`,k]]);function j(){return{codeHtml:`<a-select-icon
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
<div>model2: {{ model2 }}</div>`}}function M(){return{codeJs:`import {
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
};`}}var N={name:`PageValidatedJsonModeSingle`,components:{AlohaExample:m,AValidatedJson:l},setup(){let{codeHtml:e}=j(),{codeJs:t}=M();return{children:[{type:`text`,label:`Text`,id:`text`},{type:`oneCheckbox`,label:`Checkbox`,id:`checkbox`},{type:`currency`,label:`Currency`,id:`currency`},{type:`validatedJson`,mode:`single`,id:`validated_json`,children:[{type:`text`,label:`Text`,id:`text`},{type:`oneCheckbox`,label:`Checkbox`,id:`checkbox`},{type:`currency`,label:`Currency`,id:`currency`}]}],codeHtml:e,codeJs:t,model1:i(void 0),model2:i(void 0),model3:i(void 0),model4:i({text:`s`})}}};function P(t,i,l,u,d,f){let p=r(`a-validated-json`),m=r(`aloha-example`);return c(),n(m,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`type`]},{default:o(()=>[a(p,{modelValue:t.model1,"onUpdate:modelValue":i[0]||=e=>t.model1=e,"id-prefix":`aloha1`,children:t.children,label:`_A_VALIDATED_JSON_COMPONENT_LABEL_SINGLE_`,mode:`single`},null,8,[`modelValue`,`children`]),i[4]||=s(`div`,null,`model1:`,-1),s(`pre`,null,e(t.model1),1),a(p,{class:`a_mt_5`,modelValue:t.model2,"onUpdate:modelValue":i[1]||=e=>t.model2=e,"id-prefix":`aloha2`,children:t.children,required:!0,label:`_A_VALIDATED_JSON_COMPONENT_LABEL_SINGLE_`,mode:`single`},null,8,[`modelValue`,`children`]),i[5]||=s(`div`,null,`model2:`,-1),s(`pre`,null,e(t.model2),1),a(p,{class:`a_mt_5`,modelValue:t.model3,"onUpdate:modelValue":i[2]||=e=>t.model3=e,"id-prefix":`aloha3`,children:t.children,"mode-options":{optionalSingleDefault:!0},label:`_A_VALIDATED_JSON_COMPONENT_LABEL_SINGLE_`,mode:`single`},null,8,[`modelValue`,`children`]),i[6]||=s(`div`,null,`model3:`,-1),s(`pre`,null,e(t.model3),1),a(p,{class:`a_mt_5`,modelValue:t.model4,"onUpdate:modelValue":i[3]||=e=>t.model4=e,"id-prefix":`aloha3`,children:t.children,label:`_A_VALIDATED_JSON_COMPONENT_LABEL_SINGLE_`,mode:`single`},null,8,[`modelValue`,`children`]),i[7]||=s(`div`,null,`model4:`,-1),s(`pre`,null,e(t.model4),1)]),_:1},8,[`code-html`,`code-js`])}var F=f(N,[[`render`,P]]);function I(){return{dataEvents:[{name:`close`,description:`_A_ALERT_EVENTS_CLOSE_DESCRIPTION_`,type:`Function`}]}}function L(){let e=t(()=>d({placeholder:`_A_VALIDATED_JSON_COMPONENT_NAME_`}));return{pageTitle:t(()=>`AValidatedJson${e.value?` (${e.value})`:``}`)}}function R(){return{dataProps:[{name:`alert-class`,description:`_A_ALERT_PROPS_ALERT_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`alert-content-class`,description:`_A_ALERT_PROPS_ALERT_CONTENT_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`btn-close-attributes`,description:`_A_ALERT_PROPS_BTN_CLOSE_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`{}`,required:!1},{name:`closable`,description:`_A_ALERT_PROPS_CLOSABLE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`show-icon`,description:`_A_ALERT_PROPS_HAS_ICON_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`html`,description:`_A_ALERT_PROPS_HTML_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`icon`,description:`_A_ALERT_PROPS_ICON_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`icon-class`,description:`_A_ALERT_PROPS_ICON_CLASS_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`is-visible`,description:`_A_ALERT_PROPS_IS_VISIBLE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`removeAlertOnClose`,description:`_A_ALERT_PROPS_REMOVE_ALERT_ON_CLOSE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`safe-html`,description:`_A_ALERT_PROPS_SAFE_HTML_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`text`,description:`_A_ALERT_PROPS_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`text-close`,description:`_A_ALERT_PROPS_TEXT_CLOSE_DESCRIPTION_`,type:`String`,default:`_ALERT_CLOSE_`,required:!1},{name:`type`,description:`_A_ALERT_PROPS_TYPE_DESCRIPTION_`,type:`String`,default:`danger`,required:!1}]}}function z(){return{dataSlots:[{name:`default`,description:`_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_`}]}}var B={name:`PageValidatedJson`,components:{AlohaPage:p,AlohaTableProps:h,ATranslation:u,PageValidatedJsonModeJson:b,PageValidatedJsonModeList:T,PageValidatedJsonModeListTyped:A,PageValidatedJsonModeSingle:F},setup(){let{pageTitle:e}=L(),{dataProps:t}=R(),{dataSlots:n}=z(),{dataEvents:r}=I();return{dataEvents:r,dataProps:t,dataSlots:n,pageTitle:e}}};function V(e,t,i,s,l,u){let d=r(`a-translation`),f=r(`page-validated-json-mode-single`),p=r(`page-validated-json-mode-list`),m=r(`page-validated-json-mode-list-typed`),h=r(`page-validated-json-mode-json`),g=r(`aloha-page`);return c(),n(g,{"page-title":e.pageTitle},{body:o(()=>[a(d,{tag:`p`,html:`_A_VALIDATED_JSON_COMPONENT_DESCRIPTION_`}),a(f),a(p),a(m),a(h)]),_:1},8,[`page-title`])}var H=f(B,[[`render`,V]]);export{H as default};