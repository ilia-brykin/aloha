import{t as e}from"./chunk.AlohaPage.BIw9NYpI.js";import{t}from"./chunk.AlohaTableProps.9D5sSTzx.js";import{t as n}from"./chunk.AlohaTableTranslate.Dl6r_SFb.js";import{t as r}from"./chunk.AlohaExample.CEueonn8.js";import{L as i,V as a,at as o,hn as s,mn as c,sn as l,t as u,v as d}from"./bundle.index.Dor-y9Rj.js";import{Ht as f,Jt as p,Ut as m,Vt as h,Wt as g,_n as _,mn as v,on as y,un as b,wn as x}from"./chunk.vendor.Bjd2408Z.js";import{n as S,q as C}from"./chunk.vendor-lodash.BlbRpQpv.js";function w(){return{codeHtml:`<a-wizard
  :steps="wizardSteps"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>`}}function T(){return{codeJs:`import {
  ATranslation,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardBasic",
  components: {
    ATranslation,
    AWizard,
  },
  setup() {
    const wizardSteps = [
      {
        slot: "step1",
        label: "_A_WIZARD_STEP_1_",
        title: "_A_WIZARD_STEP_1_",
      },
      {
        slot: "step2",
        label: "_A_WIZARD_STEP_2_",
        title: "_A_WIZARD_STEP_2_",
      },
      {
        slot: "step3",
        label: "_A_WIZARD_STEP_3_",
        title: "_A_WIZARD_STEP_3_",
      },
      {
        slot: "step4",
        label: "_A_WIZARD_STEP_4_",
        title: "_A_WIZARD_STEP_4_",
      },
    ];
    const text = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent\`;

    return {
      text,
      wizardSteps,
    };
  },
};`}}var E={name:`PageWizardBasic`,components:{AlohaExample:r,ATranslation:c,AWizard:d},setup(){let{codeHtml:e}=w(),{codeJs:t}=T();return{codeHtml:e,codeJs:t,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:`step1`,label:`_A_WIZARD_STEP_1_`,title:`_A_WIZARD_STEP_1_`},{slot:`step2`,label:`_A_WIZARD_STEP_2_`,title:`_A_WIZARD_STEP_2_`},{slot:`step3`,label:`_A_WIZARD_STEP_3_`,title:`_A_WIZARD_STEP_3_`},{slot:`step4`,label:`_A_WIZARD_STEP_4_`,title:`_A_WIZARD_STEP_4_`}]}}};function D(e,t,n,r,i,a){let o=b(`a-translation`),s=b(`a-wizard`),c=b(`aloha-example`);return y(),m(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:`wizard-steps`},{default:v(()=>[p(s,{steps:e.wizardSteps},{step1:v(()=>[p(o,{tag:`h3`,text:`_A_WIZARD_STEP_1_`}),f(`p`,null,x(e.text),1)]),step2:v(()=>[p(o,{tag:`h3`,text:`_A_WIZARD_STEP_2_`}),f(`p`,null,x(e.text),1)]),step3:v(()=>[p(o,{tag:`h3`,text:`_A_WIZARD_STEP_3_`}),f(`p`,null,x(e.text),1)]),step4:v(()=>[p(o,{tag:`h3`,text:`_A_WIZARD_STEP_4_`}),f(`p`,null,x(e.text),1)]),_:1},8,[`steps`])]),_:1},8,[`code-html`,`code-js`])}var O=u(E,[[`render`,D]]);function k(){return{codeHtml:`<a-wizard
  :steps="wizardSteps"
  :back-button-attributes="{ stop: true }"
  back-button-class="a_btn a_btn_warning"
  back-button-icon-left="ChevronLeft"
  back-button-icon-right="ChevronLeft"
  back-button-text="_A_WIZARD_PAGE_BACK_BTN_TEXT_"
  back-button-title="_A_WIZARD_PAGE_BACK_BTN_TEXT_"
  :forward-button-attributes="{ stop: true }"
  forward-button-class="a_btn a_btn_primary"
  forward-button-icon-left="ChevronRight"
  forward-button-icon-right="ChevronRight"
  forward-button-text="_A_WIZARD_PAGE_FORWARD_BTN_TEXT_"
  forward-button-title="_A_WIZARD_PAGE_FORWARD_BTN_TEXT_"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>`}}function A(){return{codeJs:`import {
  ATranslation,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardButtons",
  components: {
    ATranslation,
    AWizard,
  },
  setup() {    
    const wizardSteps = [
      {
        slot: "step1",
        label: "_A_MODAL_WIZARD_STEP_1_",
        title: "_A_MODAL_WIZARD_STEP_1_",
      },
      {
        slot: "step2",
        label: "_A_MODAL_WIZARD_STEP_2_",
        title: "_A_MODAL_WIZARD_STEP_2_",
      },
      {
        slot: "step3",
        label: "_A_MODAL_WIZARD_STEP_3_",
        title: "_A_MODAL_WIZARD_STEP_3_",
      },
      {
        slot: "step4",
        label: "_A_MODAL_WIZARD_STEP_4_",
        title: "_A_MODAL_WIZARD_STEP_4_",
      },
    ];
    const text = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent\`;

    return {
      text,
      wizardSteps,
    };
  },
};`}}var j={name:`PageWizardButtons`,components:{AlohaExample:r,ATranslation:c,AWizard:d},setup(){let{codeHtml:e}=k(),{codeJs:t}=A();return{codeHtml:e,codeJs:t,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:`step1`,label:`_A_WIZARD_STEP_1_`,title:`_A_WIZARD_STEP_1_`},{slot:`step2`,label:`_A_WIZARD_STEP_2_`,title:`_A_WIZARD_STEP_2_`},{slot:`step3`,label:`_A_WIZARD_STEP_3_`,title:`_A_WIZARD_STEP_3_`},{slot:`step4`,label:`_A_WIZARD_STEP_4_`,title:`_A_WIZARD_STEP_4_`}]}}};function M(e,t,n,r,i,a){let o=b(`a-translation`),s=b(`a-wizard`),c=b(`aloha-example`);return y(),m(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_WIZARD_GROUP_BUTTONS_HEADER_`,description:`_A_WIZARD_GROUP_BUTTONS_DESCRIPTION_`,props:[`back-button-attributes`,`back-button-class`,`back-button-icon-left`,`back-button-icon-right`,`back-button-text`,`back-button-title`,`forward-button-attributes`,`forward-button-class`,`forward-button-icon-left`,`forward-button-icon-right`,`forward-button-text`,`forward-button-title`]},{default:v(()=>[p(s,{steps:e.wizardSteps,"back-button-attributes":{stop:!0},"back-button-class":`a_btn a_btn_warning`,"back-button-icon-left":`ChevronLeft`,"back-button-icon-right":`ChevronLeft`,"back-button-text":`_A_WIZARD_PAGE_BACK_BTN_TEXT_`,"back-button-title":`_A_WIZARD_PAGE_BACK_BTN_TEXT_`,"forward-button-attributes":{stop:!0},"forward-button-class":`a_btn a_btn_primary`,"forward-button-icon-left":`ChevronRight`,"forward-button-icon-right":`ChevronRight`,"forward-button-text":`_A_WIZARD_PAGE_FORWARD_BTN_TEXT_`,"forward-button-title":`_A_WIZARD_PAGE_FORWARD_BTN_TEXT_`},{step1:v(()=>[p(o,{tag:`h3`,text:`_A_WIZARD_STEP_1_`}),f(`p`,null,x(e.text),1)]),step2:v(()=>[p(o,{tag:`h3`,text:`_A_WIZARD_STEP_2_`}),f(`p`,null,x(e.text),1)]),step3:v(()=>[p(o,{tag:`h3`,text:`_A_WIZARD_STEP_3_`}),f(`p`,null,x(e.text),1)]),step4:v(()=>[p(o,{tag:`h3`,text:`_A_WIZARD_STEP_4_`}),f(`p`,null,x(e.text),1)]),_:1},8,[`steps`])]),_:1},8,[`code-html`,`code-js`])}var N=u(j,[[`render`,M]]);function P(){return{codeHtml:`<div
  class="a_columns a_columns_count_12"
>
  <div
    class="a_column.a_column_6 a_columns_count_12_touch a_mb_5"
  >
    <a-switch
      v-model="isBackButtonDisabled"
      label="is-back-button-disabled"
    ></a-switch>
    <a-switch
      v-model="isBackStepButtonDisabled"
      label="is-back-step-button-disabled"
    ></a-switch>
    <a-switch
      v-model="isForwardButtonDisabled"
      label="is-forward-button-disabled"
    ></a-switch>
    <a-switch
      v-model="isForwardStepButtonDisabled"
      label="is-forward-step-button-disabled"
    ></a-switch>
  </div>
</div>
<a-wizard
  :steps="wizardSteps"
  :is-back-button-disabled="isBackButtonDisabled"
  :is-back-step-button-disabled="isBackStepButtonDisabled"
  :is-forward-button-disabled="isForwardButtonDisabled"
  :is-forward-step-button-disabled="isForwardStepButtonDisabled"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>`}}function F(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ASwitch,
  ATranslation,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardButtonsDisabled",
  components: {
    ASwitch,
    ATranslation,
    AWizard,
  },
  setup() {
    const isBackButtonDisabled = ref(true);
    const isBackStepButtonDisabled = ref(true);
    const isForwardButtonDisabled = ref(true);
    const isForwardStepButtonDisabled = ref(true);
    const wizardSteps = [
      {
        slot: "step1",
        label: "_A_MODAL_WIZARD_STEP_1_",
        title: "_A_MODAL_WIZARD_STEP_1_",
      },
      {
        slot: "step2",
        label: "_A_MODAL_WIZARD_STEP_2_",
        title: "_A_MODAL_WIZARD_STEP_2_",
      },
      {
        slot: "step3",
        label: "_A_MODAL_WIZARD_STEP_3_",
        title: "_A_MODAL_WIZARD_STEP_3_",
      },
      {
        slot: "step4",
        label: "_A_MODAL_WIZARD_STEP_4_",
        title: "_A_MODAL_WIZARD_STEP_4_",
      },
    ];
    const text = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent\`;

    return {
      isBackButtonDisabled,
      isBackStepButtonDisabled,
      isForwardButtonDisabled,
      isForwardStepButtonDisabled,
      text,
      wizardSteps,
    };
  },
};`}}var I={name:`PageWizardButtonsDisabled`,components:{AlohaExample:r,ASwitch:i,ATranslation:c,AWizard:d},setup(){let{codeHtml:e}=P(),{codeJs:t}=F();return{codeHtml:e,codeJs:t,isBackButtonDisabled:_(!0),isBackStepButtonDisabled:_(!0),isForwardButtonDisabled:_(!0),isForwardStepButtonDisabled:_(!0),text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:`step1`,label:`_A_WIZARD_STEP_1_`,title:`_A_WIZARD_STEP_1_`},{slot:`step2`,label:`_A_WIZARD_STEP_2_`,title:`_A_WIZARD_STEP_2_`},{slot:`step3`,label:`_A_WIZARD_STEP_3_`,title:`_A_WIZARD_STEP_3_`},{slot:`step4`,label:`_A_WIZARD_STEP_4_`,title:`_A_WIZARD_STEP_4_`}]}}},L={class:`a_columns a_columns_count_12`},R={class:`a_column a_column_6 a_columns_count_12_touch a_mb_5`};function ee(e,t,n,r,i,a){let o=b(`a-switch`),s=b(`a-translation`),c=b(`a-wizard`),l=b(`aloha-example`);return y(),m(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_WIZARD_GROUP_BUTTONS_DISABLED_HEADER_`,description:`_A_WIZARD_GROUP_BUTTONS_DISABLED_DESCRIPTION_`,props:[`is-back-button-disabled`,`is-back-step-button-disabled`,`is-forward-button-disabled`,`is-forward-step-button-disabled`]},{default:v(()=>[f(`div`,L,[f(`div`,R,[p(o,{modelValue:e.isBackButtonDisabled,"onUpdate:modelValue":t[0]||=t=>e.isBackButtonDisabled=t,label:`is-back-button-disabled`},null,8,[`modelValue`]),p(o,{modelValue:e.isBackStepButtonDisabled,"onUpdate:modelValue":t[1]||=t=>e.isBackStepButtonDisabled=t,label:`is-back-step-button-disabled`},null,8,[`modelValue`]),p(o,{modelValue:e.isForwardButtonDisabled,"onUpdate:modelValue":t[2]||=t=>e.isForwardButtonDisabled=t,label:`is-forward-button-disabled`},null,8,[`modelValue`]),p(o,{modelValue:e.isForwardStepButtonDisabled,"onUpdate:modelValue":t[3]||=t=>e.isForwardStepButtonDisabled=t,label:`is-forward-step-button-disabled`},null,8,[`modelValue`])])]),p(c,{steps:e.wizardSteps,"is-back-button-disabled":e.isBackButtonDisabled,"is-back-step-button-disabled":e.isBackStepButtonDisabled,"is-forward-button-disabled":e.isForwardButtonDisabled,"is-forward-step-button-disabled":e.isForwardStepButtonDisabled},{step1:v(()=>[p(s,{tag:`h3`,text:`_A_WIZARD_STEP_1_`}),f(`p`,null,x(e.text),1)]),step2:v(()=>[p(s,{tag:`h3`,text:`_A_WIZARD_STEP_2_`}),f(`p`,null,x(e.text),1)]),step3:v(()=>[p(s,{tag:`h3`,text:`_A_WIZARD_STEP_3_`}),f(`p`,null,x(e.text),1)]),step4:v(()=>[p(s,{tag:`h3`,text:`_A_WIZARD_STEP_4_`}),f(`p`,null,x(e.text),1)]),_:1},8,[`steps`,`is-back-button-disabled`,`is-back-step-button-disabled`,`is-forward-button-disabled`,`is-forward-step-button-disabled`])]),_:1},8,[`code-html`,`code-js`])}var te=u(I,[[`render`,ee]]);function z(){return{codeHtml:`<div
  class="a_columns a_columns_count_12"
>
  <div
    class="a_column.a_column_6 a_columns_count_12_touch a_mb_5"
  >
    <a-switch
      v-model="isBackButtonHide"
      label="is-back-button-hide"
    ></a-switch>
    <a-switch
      v-model="isBackFirstButtonHide"
      label="is-back-first-button-hide"
    ></a-switch>
    <a-switch
      v-model="isForwardButtonHide"
      label="is-forward-button-hide"
    ></a-switch>
    <a-switch
      v-model="isForwardLastButtonHide"
      label="is-forward-last-button-hide"
    ></a-switch>
  </div>
</div>
<a-wizard
  :steps="wizardSteps"
  :is-back-button-hide="isBackButtonHide"
  :is-back-first-button-hide="isBackFirstButtonHide"
  :is-forward-button-hide="isForwardButtonHide"
  :is-forward-last-button-hide="isForwardLastButtonHide"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>`}}function B(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASwitch,
  ATranslation,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardButtonsHide",
  components: {
    ASwitch,
    ATranslation,
    AWizard,
  },
  setup() {
    const isBackButtonHide = ref(true);
    const isBackFirstButtonHide = ref(true);
    const isForwardButtonHide = ref(false);
    const isForwardLastButtonHide = ref(true);
    const wizardSteps = [
      {
        slot: "step1",
        label: "_A_MODAL_WIZARD_STEP_1_",
        title: "_A_MODAL_WIZARD_STEP_1_",
      },
      {
        slot: "step2",
        label: "_A_MODAL_WIZARD_STEP_2_",
        title: "_A_MODAL_WIZARD_STEP_2_",
      },
      {
        slot: "step3",
        label: "_A_MODAL_WIZARD_STEP_3_",
        title: "_A_MODAL_WIZARD_STEP_3_",
      },
      {
        slot: "step4",
        label: "_A_MODAL_WIZARD_STEP_4_",
        title: "_A_MODAL_WIZARD_STEP_4_",
      },
    ];
    const text = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent\`;

    return {
      isBackButtonHide,
      isBackFirstButtonHide,
      isForwardButtonHide,
      isForwardLastButtonHide,
      text,
      wizardSteps,
    };
  },
};`}}var V={name:`PageWizardButtonsHide`,components:{AlohaExample:r,ASwitch:i,ATranslation:c,AWizard:d},setup(){let{codeHtml:e}=z(),{codeJs:t}=B();return{codeHtml:e,codeJs:t,isBackButtonHide:_(!0),isBackFirstButtonHide:_(!0),isForwardButtonHide:_(!1),isForwardLastButtonHide:_(!0),text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:`step1`,label:`_A_WIZARD_STEP_1_`,title:`_A_WIZARD_STEP_1_`},{slot:`step2`,label:`_A_WIZARD_STEP_2_`,title:`_A_WIZARD_STEP_2_`},{slot:`step3`,label:`_A_WIZARD_STEP_3_`,title:`_A_WIZARD_STEP_3_`},{slot:`step4`,label:`_A_WIZARD_STEP_4_`,title:`_A_WIZARD_STEP_4_`}]}}},H={class:`a_columns a_columns_count_12`},U={class:`a_column a_column_6 a_columns_count_12_touch a_mb_5`};function W(e,t,n,r,i,a){let o=b(`a-switch`),s=b(`a-translation`),c=b(`a-wizard`),l=b(`aloha-example`);return y(),m(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_WIZARD_GROUP_BUTTONS_HIDE_HEADER_`,description:`_A_WIZARD_GROUP_BUTTONS_HIDE_DESCRIPTION_`,props:[`is-back-button-hide`,`is-back-first-button-hide`,`is-forward-button-hide`,`is-forward-last-button-hide`]},{default:v(()=>[f(`div`,H,[f(`div`,U,[p(o,{modelValue:e.isBackButtonHide,"onUpdate:modelValue":t[0]||=t=>e.isBackButtonHide=t,label:`is-back-button-hide`},null,8,[`modelValue`]),p(o,{modelValue:e.isBackFirstButtonHide,"onUpdate:modelValue":t[1]||=t=>e.isBackFirstButtonHide=t,label:`is-back-first-button-hide`},null,8,[`modelValue`]),p(o,{modelValue:e.isForwardButtonHide,"onUpdate:modelValue":t[2]||=t=>e.isForwardButtonHide=t,label:`is-forward-button-hide`},null,8,[`modelValue`]),p(o,{modelValue:e.isForwardLastButtonHide,"onUpdate:modelValue":t[3]||=t=>e.isForwardLastButtonHide=t,label:`is-forward-last-button-hide`},null,8,[`modelValue`])])]),p(c,{steps:e.wizardSteps,"is-back-button-hide":e.isBackButtonHide,"is-back-first-button-hide":e.isBackFirstButtonHide,"is-forward-button-hide":e.isForwardButtonHide,"is-forward-last-button-hide":e.isForwardLastButtonHide},{step1:v(()=>[p(s,{tag:`h3`,text:`_A_WIZARD_STEP_1_`}),f(`p`,null,x(e.text),1)]),step2:v(()=>[p(s,{tag:`h3`,text:`_A_WIZARD_STEP_2_`}),f(`p`,null,x(e.text),1)]),step3:v(()=>[p(s,{tag:`h3`,text:`_A_WIZARD_STEP_3_`}),f(`p`,null,x(e.text),1)]),step4:v(()=>[p(s,{tag:`h3`,text:`_A_WIZARD_STEP_4_`}),f(`p`,null,x(e.text),1)]),_:1},8,[`steps`,`is-back-button-hide`,`is-back-first-button-hide`,`is-forward-button-hide`,`is-forward-last-button-hide`])]),_:1},8,[`code-html`,`code-js`])}var G=u(V,[[`render`,W]]);function K(){return{codeHtml:`<div 
  class="a_columns a_columns_count_12"
>
  <div 
    class="a_column a_column_6 a_columns_count_12_touch a_mb_5"
  >
    <a-switch 
      v-model="isStepsJustified" 
      label="is-steps-justified"
    ></a-switch>
    <a-select 
      v-model="modelType" 
      class="a_mt_4" 
      label="_A_WIZARD_LABEL_TYPE_" 
      key-id="value" 
      key-label="label" 
      :data="types" 
      :deselectable="false" 
      :translate-data="true"
    ></a-select>
    <div 
      class="a_d_flex a_mt_4"
    >
      <a-input 
        v-model="modelStepName" 
        label="_A_WIZARD_STEP_NAME_" 
        :required="true"
      ></a-input>
      <a-button 
        class="a_btn a_btn_primary a_ml_2" 
        :disabled="!modelStepName" 
        text="_A_WIZARD_BTN_ADD_STEP_" 
        @click="addStep"
      ></a-button>
    </div>
    <div 
      class="a_d_flex a_mt_4"
    >
      <a-select 
        v-model="modelStepId" 
        label="_A_WIZARD_LABEL_STEPS_" 
        key-id="id" 
        key-label="label" 
        :data="wizardSteps" 
        :search="true"
      ></a-select>
      <a-button 
        class="a_btn a_btn_primary a_ml_2" 
        :disabled="!modelStepId || wizardSteps.length < 2" 
        text="_A_WIZARD_BTN_DELETE_STEP_" 
        @click="deleteStep"
      ></a-button>
    </div>
  </div>
</div>
<a-wizard
  key-id="id"
  :is-steps-justified="isStepsJustified"
  :steps="wizardSteps"
  :type="modelType"
>
  <template
    v-slot:step="{ step }"
  >
    <h2>{{ step.label }}</h2>
    <p>{{ text }}</p>
  </template>
</a-wizard>`}}function q(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AButton,
  AInput,
  ASelect,
  ASwitch,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardDemo",
  components: {
    AButton,
    AInput,
    ASelect,
    ASwitch,
    AWizard,
  },
  setup() {
    const modelType = ref("line");
    const modelStepName = ref("");
    const modelStepId = ref(undefined);
    const isStepsJustified = ref(true);
    const types = [
      {
        label: "_A_WIZARD_TYPE_BASIC_",
        value: "basic",
      },
      {
        label: "_A_WIZARD_TYPE_ARROWS_",
        value: "arrows",
      },
      {
        label: "_A_WIZARD_TYPE_LINE_",
        value: "line",
      },
      {
        label: "_A_WIZARD_TYPE_ROUND_",
        value: "round",
      },
    ];
    const wizardSteps = ref([
      {
        id: "1",
        slot: "step",
        label: "Lorem",
      },
      {
        id: "2",
        slot: "step",
        label: "ipsum",
      },
      {
        id: "3",
        slot: "step",
        label: "dolor",
      },
      {
        id: "4",
        slot: "step",
        label: "sit",
      },
      {
        id: "5",
        slot: "step",
        label: "amet",
      },
      {
        id: "6",
        slot: "step",
        label: "consectetur",
      },
      {
        id: "7",
        slot: "step",
        label: "adipiscing",
      },
      {
        id: "8",
        slot: "step",
        label: "elit",
      },
      {
        id: "9",
        slot: "step",
        label: "Quisque",
      },
      {
        id: "10",
        slot: "step",
        label: "nisl",
      },
    ]);
    const text = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent\`;

    const addStep = () => {
      wizardSteps.value.push({
        id: uniqueId("wizard_demo_"),
        slot: "step",
        label: modelStepName.value,
      });
    };

    const deleteStep = () => {
      const STEP_INDEX = findIndex(wizardSteps.value, ["id", modelStepId.value]);
      wizardSteps.value.splice(STEP_INDEX, 1);
      modelStepId.value = undefined;
    };

    return {
      addStep,
      deleteStep,
      isStepsJustified,
      modelStepId,
      modelStepName,
      modelType,
      text,
      types,
      wizardSteps,
    };
  },
};`}}var J={name:`PageWizardDemo`,components:{AButton:l,AInput:o,AlohaExample:r,ASelect:a,ASwitch:i,AWizard:d},setup(){let{codeHtml:e}=K(),{codeJs:t}=q(),n=_(`line`),r=_(``),i=_(void 0),a=_(!0),o=[{label:`_A_WIZARD_TYPE_BASIC_`,value:`basic`},{label:`_A_WIZARD_TYPE_ARROWS_`,value:`arrows`},{label:`_A_WIZARD_TYPE_LINE_`,value:`line`},{label:`_A_WIZARD_TYPE_ROUND_`,value:`round`}],s=_([{id:`1`,slot:`step`,label:`Lorem`},{id:`2`,slot:`step`,label:`ipsum`},{id:`3`,slot:`step`,label:`dolor`},{id:`4`,slot:`step`,label:`sit`},{id:`5`,slot:`step`,label:`amet`},{id:`6`,slot:`step`,label:`consectetur`},{id:`7`,slot:`step`,label:`adipiscing`},{id:`8`,slot:`step`,label:`elit`},{id:`9`,slot:`step`,label:`Quisque`},{id:`10`,slot:`step`,label:`nisl`}]);return{addStep:()=>{s.value.push({id:S(`wizard_demo_`),slot:`step`,label:r.value})},codeHtml:e,codeJs:t,deleteStep:()=>{let e=C(s.value,[`id`,i.value]);s.value.splice(e,1),i.value=void 0},isStepsJustified:a,modelStepId:i,modelStepName:r,modelType:n,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,types:o,wizardSteps:s}}},Y={class:`a_columns a_columns_count_12`},X={class:`a_column a_column_6 a_columns_count_12_touch a_mb_5`},Z={class:`a_d_flex a_mt_4`},Q={class:`a_d_flex a_mt_4`};function ne(e,t,n,r,i,a){let o=b(`a-switch`),s=b(`a-select`),c=b(`a-input`),l=b(`a-button`),u=b(`a-wizard`),d=b(`aloha-example`);return y(),m(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_WIZARD_GROUP_DEMO_HEADER_`,description:`_A_WIZARD_GROUP_DEMO_DESCRIPTION_`,props:[`steps`,`type`]},{default:v(()=>[f(`div`,Y,[f(`div`,X,[p(o,{modelValue:e.isStepsJustified,"onUpdate:modelValue":t[0]||=t=>e.isStepsJustified=t,label:`is-steps-justified`},null,8,[`modelValue`]),p(s,{class:`a_mt_4`,modelValue:e.modelType,"onUpdate:modelValue":t[1]||=t=>e.modelType=t,label:`_A_WIZARD_LABEL_TYPE_`,"key-id":`value`,"key-label":`label`,data:e.types,deselectable:!1,"translate-data":!0},null,8,[`modelValue`,`data`]),f(`div`,Z,[p(c,{modelValue:e.modelStepName,"onUpdate:modelValue":t[2]||=t=>e.modelStepName=t,label:`_A_WIZARD_STEP_NAME_`,required:!0},null,8,[`modelValue`]),p(l,{class:`a_btn a_btn_primary a_ml_2`,disabled:!e.modelStepName,text:`_A_WIZARD_BTN_ADD_STEP_`,onClick:e.addStep},null,8,[`disabled`,`onClick`])]),f(`div`,Q,[p(s,{modelValue:e.modelStepId,"onUpdate:modelValue":t[3]||=t=>e.modelStepId=t,label:`_A_WIZARD_LABEL_STEPS_`,"key-id":`id`,"key-label":`label`,data:e.wizardSteps,search:!0},null,8,[`modelValue`,`data`]),p(l,{class:`a_btn a_btn_primary a_ml_2`,disabled:!e.modelStepId||e.wizardSteps.length<2,text:`_A_WIZARD_BTN_DELETE_STEP_`,onClick:e.deleteStep},null,8,[`disabled`,`onClick`])])])]),p(u,{"key-id":`id`,"is-steps-justified":e.isStepsJustified,steps:e.wizardSteps,type:e.modelType},{step:v(({step:t})=>[f(`h2`,null,x(t.label),1),f(`p`,null,x(e.text),1)]),_:1},8,[`is-steps-justified`,`steps`,`type`])]),_:1},8,[`code-html`,`code-js`])}var re=u(J,[[`render`,ne]]);function ie(){return{codeHtml:`<div
  class="a_columns a_columns_count_12"
>
  <div
    class="a_column.a_column_6 a_columns_count_12_touch a_mb_5"
  >
    <a-switch
      v-model="hasFocusJump"
      label="has-focus-jump"
    ></a-switch>
  </div>
</div>
<a-wizard
  :steps="wizardSteps"
  :has-focus-jump="hasFocusJump"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>`}}function ae(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASwitch,
  ATranslation,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardHasFocusJump",
  components: {
    ASwitch,
    ATranslation,
    AWizard,
  },
  setup() {
    const hasFocusJump = ref(false);
    const wizardSteps = [
      {
        slot: "step1",
        label: "_A_MODAL_WIZARD_STEP_1_",
        title: "_A_MODAL_WIZARD_STEP_1_",
      },
      {
        slot: "step2",
        label: "_A_MODAL_WIZARD_STEP_2_",
        title: "_A_MODAL_WIZARD_STEP_2_",
      },
      {
        slot: "step3",
        label: "_A_MODAL_WIZARD_STEP_3_",
        title: "_A_MODAL_WIZARD_STEP_3_",
      },
      {
        slot: "step4",
        label: "_A_MODAL_WIZARD_STEP_4_",
        title: "_A_MODAL_WIZARD_STEP_4_",
      },
    ];
    const text = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent\`;

    return {
      hasFocusJump,
      text,
      wizardSteps,
    };
  },
};`}}var oe={name:`PageWizardHasFocusJump`,components:{AlohaExample:r,ASwitch:i,ATranslation:c,AWizard:d},setup(){let{codeHtml:e}=ie(),{codeJs:t}=ae();return{codeHtml:e,codeJs:t,hasFocusJump:_(!1),text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:`step1`,label:`_A_WIZARD_STEP_1_`,title:`_A_WIZARD_STEP_1_`},{slot:`step2`,label:`_A_WIZARD_STEP_2_`,title:`_A_WIZARD_STEP_2_`},{slot:`step3`,label:`_A_WIZARD_STEP_3_`,title:`_A_WIZARD_STEP_3_`},{slot:`step4`,label:`_A_WIZARD_STEP_4_`,title:`_A_WIZARD_STEP_4_`}]}}},se={class:`a_columns a_columns_count_12`},ce={class:`a_column a_column_6 a_columns_count_12_touch a_mb_5`};function le(e,t,n,r,i,a){let o=b(`a-switch`),s=b(`a-translation`),c=b(`a-wizard`),l=b(`aloha-example`);return y(),m(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_WIZARD_GROUP_HAS_FOCUS_JUMP_HEADER_`,description:`_A_WIZARD_GROUP_HAS_FOCUS_JUMP_DESCRIPTION_`,props:[`has-focus-jump`]},{default:v(()=>[f(`div`,se,[f(`div`,ce,[p(o,{modelValue:e.hasFocusJump,"onUpdate:modelValue":t[0]||=t=>e.hasFocusJump=t,label:`has-focus-jump`},null,8,[`modelValue`])])]),p(c,{steps:e.wizardSteps,"has-focus-jump":e.hasFocusJump},{step1:v(()=>[p(s,{tag:`h3`,text:`_A_WIZARD_STEP_1_`}),f(`p`,null,x(e.text),1)]),step2:v(()=>[p(s,{tag:`h3`,text:`_A_WIZARD_STEP_2_`}),f(`p`,null,x(e.text),1)]),step3:v(()=>[p(s,{tag:`h3`,text:`_A_WIZARD_STEP_3_`}),f(`p`,null,x(e.text),1)]),step4:v(()=>[p(s,{tag:`h3`,text:`_A_WIZARD_STEP_4_`}),f(`p`,null,x(e.text),1)]),_:1},8,[`steps`,`has-focus-jump`])]),_:1},8,[`code-html`,`code-js`])}var ue=u(oe,[[`render`,le]]);function de(){return{codeHtml:`<h3 class="a_my_3">type="basic"</h3>
<a-wizard
  :steps="wizardSteps"
  type="basic"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>

<h3 class="a_my_3">type="line"</h3>
<a-wizard
  :steps="wizardSteps"
  type="line"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>

<h3 class="a_my_3">type="round"</h3>
<a-wizard
  :steps="wizardSteps"
  type="round"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>

<h3 class="a_my_3">type="arrows"</h3>
<a-wizard
  :steps="wizardSteps"
  type="arrows"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>`}}function fe(){return{codeJs:`import {
  ATranslation,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardIcon",
  components: {
    ATranslation,
    AWizard,
  },
  setup() {
    const wizardSteps = [
      {
        slot: "step1",
        label: "_A_WIZARD_STEP_1_",
        title: "_A_WIZARD_STEP_1_",
        icon: "Gear",
      },
      {
        slot: "step2",
        label: "_A_WIZARD_STEP_2_",
        title: "_A_WIZARD_STEP_2_",
        icon: "Boxes",
      },
      {
        slot: "step3",
        label: "_A_WIZARD_STEP_3_",
        title: "_A_WIZARD_STEP_3_",
      },
      {
        slot: "step4",
        label: "_A_WIZARD_STEP_4_",
        title: "_A_WIZARD_STEP_4_",
      },
    ];
    const text = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent\`;

    return {
      text,
      wizardSteps,
    };
  },
};`}}var pe={name:`PageWizardIcon`,components:{AlohaExample:r,ATranslation:c,AWizard:d},setup(){let{codeHtml:e}=de(),{codeJs:t}=fe();return{codeHtml:e,codeJs:t,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:`step1`,label:`_A_WIZARD_STEP_1_`,title:`_A_WIZARD_STEP_1_`,icon:`Gear`},{slot:`step2`,label:`_A_WIZARD_STEP_2_`,title:`_A_WIZARD_STEP_2_`,icon:`Boxes`},{slot:`step3`,label:`_A_WIZARD_STEP_3_`,title:`_A_WIZARD_STEP_3_`},{slot:`step4`,label:`_A_WIZARD_STEP_4_`,title:`_A_WIZARD_STEP_4_`}]}}};function me(e,t,n,r,i,a){let o=b(`a-translation`),s=b(`a-wizard`),c=b(`aloha-example`);return y(),m(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_WIZARD_GROUP_ICON_HEADER_`,description:`_A_WIZARD_GROUP_ICON_DESCRIPTION_`,props:`steps.icon`},{default:v(()=>[t[0]||=f(`h3`,{class:`a_my_3`},`type="basic"`,-1),p(s,{steps:e.wizardSteps,type:`basic`},{step1:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_1_`}),f(`p`,null,x(e.text),1)]),step2:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_2_`}),f(`p`,null,x(e.text),1)]),step3:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_3_`}),f(`p`,null,x(e.text),1)]),step4:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_4_`}),f(`p`,null,x(e.text),1)]),_:1},8,[`steps`]),t[1]||=f(`h3`,{class:`a_my_3`},`type="line"`,-1),p(s,{steps:e.wizardSteps,type:`line`},{step1:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_1_`}),f(`p`,null,x(e.text),1)]),step2:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_2_`}),f(`p`,null,x(e.text),1)]),step3:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_3_`}),f(`p`,null,x(e.text),1)]),step4:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_4_`}),f(`p`,null,x(e.text),1)]),_:1},8,[`steps`]),t[2]||=f(`h3`,{class:`a_my_3`},`type="round"`,-1),p(s,{steps:e.wizardSteps,type:`round`},{step1:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_1_`}),f(`p`,null,x(e.text),1)]),step2:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_2_`}),f(`p`,null,x(e.text),1)]),step3:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_3_`}),f(`p`,null,x(e.text),1)]),step4:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_4_`}),f(`p`,null,x(e.text),1)]),_:1},8,[`steps`]),t[3]||=f(`h3`,{class:`a_my_3`},`type="arrows"`,-1),p(s,{steps:e.wizardSteps,type:`arrows`},{step1:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_1_`}),f(`p`,null,x(e.text),1)]),step2:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_2_`}),f(`p`,null,x(e.text),1)]),step3:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_3_`}),f(`p`,null,x(e.text),1)]),step4:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_4_`}),f(`p`,null,x(e.text),1)]),_:1},8,[`steps`])]),_:1},8,[`code-html`,`code-js`])}var he=u(pe,[[`render`,me]]);function ge(){return{codeHtml:`<div
  class="a_columns a_columns_count_12"
>
  <div
    class="a_column.a_column_6 a_columns_count_12_touch a_mb_5"
  >
    <a-switch
      v-model="isButtonsLoading"
      label="is-buttons-loading"
    ></a-switch>
  </div>
</div>
<a-wizard
  :steps="wizardSteps"
  :is-buttons-loading="isButtonsLoading"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>`}}function _e(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ASwitch,
  ATranslation,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardIsButtonsLoading",
  components: {
    ASwitch,
    ATranslation,
    AWizard,
  },
  setup() {
    const isButtonsLoading = ref(false);
    const wizardSteps = [
      {
        slot: "step1",
        label: "_A_MODAL_WIZARD_STEP_1_",
        title: "_A_MODAL_WIZARD_STEP_1_",
      },
      {
        slot: "step2",
        label: "_A_MODAL_WIZARD_STEP_2_",
        title: "_A_MODAL_WIZARD_STEP_2_",
      },
      {
        slot: "step3",
        label: "_A_MODAL_WIZARD_STEP_3_",
        title: "_A_MODAL_WIZARD_STEP_3_",
      },
      {
        slot: "step4",
        label: "_A_MODAL_WIZARD_STEP_4_",
        title: "_A_MODAL_WIZARD_STEP_4_",
      },
    ];
    const text = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent\`;

    return {
      isButtonsLoading,
      text,
      wizardSteps,
    };
  },
};`}}var ve={name:`PageWizardIsButtonsLoading`,components:{AlohaExample:r,ASwitch:i,ATranslation:c,AWizard:d},setup(){let{codeHtml:e}=ge(),{codeJs:t}=_e();return{codeHtml:e,codeJs:t,isButtonsLoading:_(!1),text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:`step1`,label:`_A_WIZARD_STEP_1_`,title:`_A_WIZARD_STEP_1_`},{slot:`step2`,label:`_A_WIZARD_STEP_2_`,title:`_A_WIZARD_STEP_2_`},{slot:`step3`,label:`_A_WIZARD_STEP_3_`,title:`_A_WIZARD_STEP_3_`},{slot:`step4`,label:`_A_WIZARD_STEP_4_`,title:`_A_WIZARD_STEP_4_`}]}}},ye={class:`a_columns a_columns_count_12`},be={class:`a_column a_column_6 a_columns_count_12_touch a_mb_5`};function xe(e,t,n,r,i,a){let o=b(`a-switch`),s=b(`a-translation`),c=b(`a-wizard`),l=b(`aloha-example`);return y(),m(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_WIZARD_GROUP_IS_BUTTONS_LOADING_HEADER_`,description:`_A_WIZARD_GROUP_IS_BUTTONS_LOADING_DESCRIPTION_`,props:[`is-buttons-loading`]},{default:v(()=>[f(`div`,ye,[f(`div`,be,[p(o,{modelValue:e.isButtonsLoading,"onUpdate:modelValue":t[0]||=t=>e.isButtonsLoading=t,label:`is-buttons-loading`},null,8,[`modelValue`])])]),p(c,{steps:e.wizardSteps,"is-buttons-loading":e.isButtonsLoading},{step1:v(()=>[p(s,{tag:`h3`,text:`_A_WIZARD_STEP_1_`}),f(`p`,null,x(e.text),1)]),step2:v(()=>[p(s,{tag:`h3`,text:`_A_WIZARD_STEP_2_`}),f(`p`,null,x(e.text),1)]),step3:v(()=>[p(s,{tag:`h3`,text:`_A_WIZARD_STEP_3_`}),f(`p`,null,x(e.text),1)]),step4:v(()=>[p(s,{tag:`h3`,text:`_A_WIZARD_STEP_4_`}),f(`p`,null,x(e.text),1)]),_:1},8,[`steps`,`is-buttons-loading`])]),_:1},8,[`code-html`,`code-js`])}var Se=u(ve,[[`render`,xe]]);function Ce(){return{codeHtml:`<a-wizard
  :steps="wizardSteps"
  :is-control-outside="true"
  :step-active="stepActive"
  :steps-visited="stepsVisited"
  @go-step-back="goStepBack"
  @go-step-forward="goStepForward"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>`}}function we(){return{codeJs:`import {
  ATranslation,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardIsControlOutside",
  components: {
    ATranslation,
    AWizard,
  },
  setup() {    
    const stepActive = ref(0);
    const stepsVisited = ref({
      0: true,
    });
    const wizardSteps = [
      {
        slot: "step1",
        label: "_A_WIZARD_STEP_1_",
        title: "_A_WIZARD_STEP_1_",
      },
      {
        slot: "step2",
        label: "_A_WIZARD_STEP_2_",
        title: "_A_WIZARD_STEP_2_",
      },
      {
        slot: "step3",
        label: "_A_WIZARD_STEP_3_",
        title: "_A_WIZARD_STEP_3_",
      },
      {
        slot: "step4",
        label: "_A_WIZARD_STEP_4_",
        title: "_A_WIZARD_STEP_4_",
      },
    ];
    const text = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent\`;

    const goStepBack = ({ targetStepIndex, currentStepIndex, step }) => {
      console.log("currentStepIndex", currentStepIndex);
      console.log("step", step);
      stepActive.value = targetStepIndex;
      stepsVisited.value[targetStepIndex] = true;
    };

    const goStepForward = ({ targetStepIndex, currentStepIndex, step }) => {
      console.log("currentStepIndex", currentStepIndex);
      console.log("step", step);
      stepActive.value = targetStepIndex;
      stepsVisited.value[targetStepIndex] = true;
    };

    return {
      goStepBack,
      goStepForward,
      stepActive,
      stepsVisited,
      text,
      wizardSteps,
    };
  },
};`}}var Te={name:`PageWizardIsControlOutside`,components:{AlohaExample:r,ATranslation:c,AWizard:d},setup(){let{codeHtml:e}=Ce(),{codeJs:t}=we(),n=_(0),r=_({0:!0});return{codeHtml:e,codeJs:t,goStepBack:({targetStepIndex:e,currentStepIndex:t,step:i})=>{console.log(`currentStepIndex`,t),console.log(`step`,i),n.value=e,r.value[e]=!0},goStepForward:({targetStepIndex:e,currentStepIndex:t,step:i})=>{console.log(`currentStepIndex`,t),console.log(`step`,i),n.value=e,r.value[e]=!0},stepActive:n,stepsVisited:r,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:`step1`,label:`_A_WIZARD_STEP_1_`,title:`_A_WIZARD_STEP_1_`},{slot:`step2`,label:`_A_WIZARD_STEP_2_`,title:`_A_WIZARD_STEP_2_`},{slot:`step3`,label:`_A_WIZARD_STEP_3_`,title:`_A_WIZARD_STEP_3_`},{slot:`step4`,label:`_A_WIZARD_STEP_4_`,title:`_A_WIZARD_STEP_4_`}]}}};function Ee(e,t,n,r,i,a){let o=b(`a-translation`),s=b(`a-wizard`),c=b(`aloha-example`);return y(),m(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_WIZARD_GROUP_IS_CONTROL_OUTSIDE_HEADER_`,description:`_A_WIZARD_GROUP_IS_CONTROL_OUTSIDE_DESCRIPTION_`,props:[`is-control-outside`,`step-active`,`steps-visited`],emits:[`go-step-back`,`go-step-forward`]},{default:v(()=>[p(s,{steps:e.wizardSteps,"is-control-outside":!0,"step-active":e.stepActive,"steps-visited":e.stepsVisited,onGoStepBack:e.goStepBack,onGoStepForward:e.goStepForward},{step1:v(()=>[p(o,{tag:`h3`,text:`_A_WIZARD_STEP_1_`}),f(`p`,null,x(e.text),1)]),step2:v(()=>[p(o,{tag:`h3`,text:`_A_WIZARD_STEP_2_`}),f(`p`,null,x(e.text),1)]),step3:v(()=>[p(o,{tag:`h3`,text:`_A_WIZARD_STEP_3_`}),f(`p`,null,x(e.text),1)]),step4:v(()=>[p(o,{tag:`h3`,text:`_A_WIZARD_STEP_4_`}),f(`p`,null,x(e.text),1)]),_:1},8,[`steps`,`step-active`,`steps-visited`,`onGoStepBack`,`onGoStepForward`])]),_:1},8,[`code-html`,`code-js`])}var De=u(Te,[[`render`,Ee]]);function Oe(){return{codeHtml:`<div
  class="a_columns a_columns_count_12"
>
  <div
    class="a_column.a_column_6 a_columns_count_12_touch a_mb_5"
  >
    <a-switch
      v-model="isStepNumberVisible"
      label="is-step-number-visible"
    ></a-switch>
  </div>
</div>
<a-wizard
  :steps="wizardSteps"
  :is-step-number-visible="isStepNumberVisible"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>`}}function ke(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASwitch,
  ATranslation,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardIsStepNumberVisible",
  components: {
    ASwitch,
    ATranslation,
    AWizard,
  },
  setup() {
    const isStepNumberVisible = ref(false);
    const wizardSteps = [
      {
        slot: "step1",
        label: "_A_MODAL_WIZARD_STEP_1_",
        title: "_A_MODAL_WIZARD_STEP_1_",
      },
      {
        slot: "step2",
        label: "_A_MODAL_WIZARD_STEP_2_",
        title: "_A_MODAL_WIZARD_STEP_2_",
      },
      {
        slot: "step3",
        label: "_A_MODAL_WIZARD_STEP_3_",
        title: "_A_MODAL_WIZARD_STEP_3_",
      },
      {
        slot: "step4",
        label: "_A_MODAL_WIZARD_STEP_4_",
        title: "_A_MODAL_WIZARD_STEP_4_",
      },
    ];
    const text = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent\`;

    return {
      isStepNumberVisible,
      text,
      wizardSteps,
    };
  },
};`}}var Ae={name:`PageWizardIsStepNumberVisible`,components:{AlohaExample:r,ASwitch:i,ATranslation:c,AWizard:d},setup(){let{codeHtml:e}=Oe(),{codeJs:t}=ke();return{codeHtml:e,codeJs:t,isStepNumberVisible:_(!1),text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:`step1`,label:`_A_WIZARD_STEP_1_`,title:`_A_WIZARD_STEP_1_`},{slot:`step2`,label:`_A_WIZARD_STEP_2_`,title:`_A_WIZARD_STEP_2_`},{slot:`step3`,label:`_A_WIZARD_STEP_3_`,title:`_A_WIZARD_STEP_3_`},{slot:`step4`,label:`_A_WIZARD_STEP_4_`,title:`_A_WIZARD_STEP_4_`}]}}},je={class:`a_columns a_columns_count_12`},Me={class:`a_column a_column_6 a_columns_count_12_touch a_mb_5`};function Ne(e,t,n,r,i,a){let o=b(`a-switch`),s=b(`a-translation`),c=b(`a-wizard`),l=b(`aloha-example`);return y(),m(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_WIZARD_GROUP_IS_STEP_NUMBER_VISIBLE_HEADER_`,description:`_A_WIZARD_GROUP_IS_STEP_NUMBER_VISIBLE_DESCRIPTION_`,props:[`is-step-number-visible`]},{default:v(()=>[f(`div`,je,[f(`div`,Me,[p(o,{modelValue:e.isStepNumberVisible,"onUpdate:modelValue":t[0]||=t=>e.isStepNumberVisible=t,label:`is-step-number-visible`},null,8,[`modelValue`])])]),p(c,{steps:e.wizardSteps,"is-step-number-visible":e.isStepNumberVisible},{step1:v(()=>[p(s,{tag:`h3`,text:`_A_WIZARD_STEP_1_`}),f(`p`,null,x(e.text),1)]),step2:v(()=>[p(s,{tag:`h3`,text:`_A_WIZARD_STEP_2_`}),f(`p`,null,x(e.text),1)]),step3:v(()=>[p(s,{tag:`h3`,text:`_A_WIZARD_STEP_3_`}),f(`p`,null,x(e.text),1)]),step4:v(()=>[p(s,{tag:`h3`,text:`_A_WIZARD_STEP_4_`}),f(`p`,null,x(e.text),1)]),_:1},8,[`steps`,`is-step-number-visible`])]),_:1},8,[`code-html`,`code-js`])}var Pe=u(Ae,[[`render`,Ne]]);function Fe(){return{codeHtml:`<div
  class="a_columns a_columns_count_12"
>
  <div
    class="a_column.a_column_6 a_columns_count_12_touch a_mb_5"
  >
    <a-switch
      v-model="isStepsJustified"
      label="is-steps-justified"
    ></a-switch>
  </div>
</div>
<a-wizard
  :steps="wizardSteps"
  :is-steps-justified="isStepsJustified"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>`}}function Ie(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ASwitch,
  ATranslation,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardIsStepsJustified",
  components: {
    ASwitch,
    ATranslation,
    AWizard,
  },
  setup() {
    const isStepsJustified = ref(false);
    const wizardSteps = [
      {
        slot: "step1",
        label: "_A_MODAL_WIZARD_STEP_1_",
        title: "_A_MODAL_WIZARD_STEP_1_",
      },
      {
        slot: "step2",
        label: "_A_MODAL_WIZARD_STEP_2_",
        title: "_A_MODAL_WIZARD_STEP_2_",
      },
      {
        slot: "step3",
        label: "_A_MODAL_WIZARD_STEP_3_",
        title: "_A_MODAL_WIZARD_STEP_3_",
      },
      {
        slot: "step4",
        label: "_A_MODAL_WIZARD_STEP_4_",
        title: "_A_MODAL_WIZARD_STEP_4_",
      },
    ];
    const text = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent\`;

    return {
      isStepsJustified,
      text,
      wizardSteps,
    };
  },
};`}}var Le={name:`PageWizardIsStepsJustified`,components:{AlohaExample:r,ASwitch:i,ATranslation:c,AWizard:d},setup(){let{codeHtml:e}=Fe(),{codeJs:t}=Ie();return{codeHtml:e,codeJs:t,isStepsJustified:_(!1),text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:`step1`,label:`_A_WIZARD_STEP_1_`,title:`_A_WIZARD_STEP_1_`},{slot:`step2`,label:`_A_WIZARD_STEP_2_`,title:`_A_WIZARD_STEP_2_`},{slot:`step3`,label:`_A_WIZARD_STEP_3_`,title:`_A_WIZARD_STEP_3_`},{slot:`step4`,label:`_A_WIZARD_STEP_4_`,title:`_A_WIZARD_STEP_4_`}]}}},Re={class:`a_columns a_columns_count_12`},ze={class:`a_column a_column_6 a_columns_count_12_touch a_mb_5`};function Be(e,t,n,r,i,a){let o=b(`a-switch`),s=b(`a-translation`),c=b(`a-wizard`),l=b(`aloha-example`);return y(),m(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_WIZARD_GROUP_IS_STEPS_JUSTIFIED_HEADER_`,description:`_A_WIZARD_GROUP_IS_STEPS_JUSTIFIED_DESCRIPTION_`,props:[`is-steps-justified`]},{default:v(()=>[f(`div`,Re,[f(`div`,ze,[p(o,{modelValue:e.isStepsJustified,"onUpdate:modelValue":t[0]||=t=>e.isStepsJustified=t,label:`is-steps-justified`},null,8,[`modelValue`])])]),p(c,{steps:e.wizardSteps,"is-steps-justified":e.isStepsJustified},{step1:v(()=>[p(s,{tag:`h3`,text:`_A_WIZARD_STEP_1_`}),f(`p`,null,x(e.text),1)]),step2:v(()=>[p(s,{tag:`h3`,text:`_A_WIZARD_STEP_2_`}),f(`p`,null,x(e.text),1)]),step3:v(()=>[p(s,{tag:`h3`,text:`_A_WIZARD_STEP_3_`}),f(`p`,null,x(e.text),1)]),step4:v(()=>[p(s,{tag:`h3`,text:`_A_WIZARD_STEP_4_`}),f(`p`,null,x(e.text),1)]),_:1},8,[`steps`,`is-steps-justified`])]),_:1},8,[`code-html`,`code-js`])}var Ve=u(Le,[[`render`,Be]]);function He(){return{codeHtml:`<div
  class="a_columns a_columns_count_12"
>
  <div
    class="a_column.a_column_6 a_columns_count_12_touch a_mb_5"
  >
    <a-switch
      v-model="isToolbarBottom"
      label="is-toolbar-bottom"
    ></a-switch>
    <a-switch
      v-model="isToolbarTop"
      label="is-toolbar-top"
    ></a-switch>
  </div>
</div>
<a-wizard
  :steps="wizardSteps"
  :is-toolbar-bottom="isToolbarBottom"
  :is-toolbar-top="isToolbarTop"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>`}}function Ue(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ASwitch,
  ATranslation,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardIsToolbar",
  components: {
    ASwitch,
    ATranslation,
    AWizard,
  },
  setup() {
    const isToolbarBottom = ref(true);
    const isToolbarTop = ref(true);
    const wizardSteps = [
      {
        slot: "step1",
        label: "_A_MODAL_WIZARD_STEP_1_",
        title: "_A_MODAL_WIZARD_STEP_1_",
      },
      {
        slot: "step2",
        label: "_A_MODAL_WIZARD_STEP_2_",
        title: "_A_MODAL_WIZARD_STEP_2_",
      },
      {
        slot: "step3",
        label: "_A_MODAL_WIZARD_STEP_3_",
        title: "_A_MODAL_WIZARD_STEP_3_",
      },
      {
        slot: "step4",
        label: "_A_MODAL_WIZARD_STEP_4_",
        title: "_A_MODAL_WIZARD_STEP_4_",
      },
    ];
    const text = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent\`;

    return {
      isToolbarBottom,
      isToolbarTop,
      text,
      wizardSteps,
    };
  },
};`}}var We={name:`PageWizardIsToolbar`,components:{AlohaExample:r,ASwitch:i,ATranslation:c,AWizard:d},setup(){let{codeHtml:e}=He(),{codeJs:t}=Ue();return{codeHtml:e,codeJs:t,isToolbarBottom:_(!0),isToolbarTop:_(!0),text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:`step1`,label:`_A_WIZARD_STEP_1_`,title:`_A_WIZARD_STEP_1_`},{slot:`step2`,label:`_A_WIZARD_STEP_2_`,title:`_A_WIZARD_STEP_2_`},{slot:`step3`,label:`_A_WIZARD_STEP_3_`,title:`_A_WIZARD_STEP_3_`},{slot:`step4`,label:`_A_WIZARD_STEP_4_`,title:`_A_WIZARD_STEP_4_`}]}}},Ge={class:`a_columns a_columns_count_12`},Ke={class:`a_column a_column_6 a_columns_count_12_touch a_mb_5`};function qe(e,t,n,r,i,a){let o=b(`a-switch`),s=b(`a-translation`),c=b(`a-wizard`),l=b(`aloha-example`);return y(),m(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_WIZARD_GROUP_IS_TOOLBAR_HEADER_`,description:`_A_WIZARD_GROUP_IS_TOOLBAR_DESCRIPTION_`,props:[`is-toolbar-bottom`,`is-toolbar-top`]},{default:v(()=>[f(`div`,Ge,[f(`div`,Ke,[p(o,{modelValue:e.isToolbarBottom,"onUpdate:modelValue":t[0]||=t=>e.isToolbarBottom=t,label:`is-toolbar-bottom`},null,8,[`modelValue`]),p(o,{modelValue:e.isToolbarTop,"onUpdate:modelValue":t[1]||=t=>e.isToolbarTop=t,label:`is-toolbar-top`},null,8,[`modelValue`])])]),p(c,{steps:e.wizardSteps,"is-toolbar-bottom":e.isToolbarBottom,"is-toolbar-top":e.isToolbarTop},{step1:v(()=>[p(s,{tag:`h3`,text:`_A_WIZARD_STEP_1_`}),f(`p`,null,x(e.text),1)]),step2:v(()=>[p(s,{tag:`h3`,text:`_A_WIZARD_STEP_2_`}),f(`p`,null,x(e.text),1)]),step3:v(()=>[p(s,{tag:`h3`,text:`_A_WIZARD_STEP_3_`}),f(`p`,null,x(e.text),1)]),step4:v(()=>[p(s,{tag:`h3`,text:`_A_WIZARD_STEP_4_`}),f(`p`,null,x(e.text),1)]),_:1},8,[`steps`,`is-toolbar-bottom`,`is-toolbar-top`])]),_:1},8,[`code-html`,`code-js`])}var Je=u(We,[[`render`,qe]]);function Ye(){return{codeHtml:`<a-wizard
  :steps="wizardSteps"
  key-id="id"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>`}}function Xe(){return{codeJs:`import {
  ATranslation,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardKeyId",
  components: {
    ATranslation,
    AWizard,
  },
  setup() {    
    const wizardSteps = [
      {
        id: "0",
        slot: "step1",
        label: "_A_WIZARD_STEP_1_",
        title: "_A_WIZARD_STEP_1_",
      },
      {
        id: "1",
        slot: "step2",
        label: "_A_WIZARD_STEP_2_",
        title: "_A_WIZARD_STEP_2_",
      },
      {
        id: "2",
        slot: "step3",
        label: "_A_WIZARD_STEP_3_",
        title: "_A_WIZARD_STEP_3_",
      },
      {
        id: "3",
        slot: "step4",
        label: "_A_WIZARD_STEP_4_",
        title: "_A_WIZARD_STEP_4_",
      },
    ];
    const text = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent\`;

    return {
      text,
      wizardSteps,
    };
  },
};`}}var Ze={name:`PageWizardKeyId`,components:{AlohaExample:r,ATranslation:c,AWizard:d},setup(){let{codeHtml:e}=Ye(),{codeJs:t}=Xe();return{codeHtml:e,codeJs:t,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{id:`0`,slot:`step1`,label:`_A_WIZARD_STEP_1_`,title:`_A_WIZARD_STEP_1_`},{id:`1`,slot:`step2`,label:`_A_WIZARD_STEP_2_`,title:`_A_WIZARD_STEP_2_`},{id:`2`,slot:`step3`,label:`_A_WIZARD_STEP_3_`,title:`_A_WIZARD_STEP_3_`},{id:`3`,slot:`step4`,label:`_A_WIZARD_STEP_4_`,title:`_A_WIZARD_STEP_4_`}]}}};function Qe(e,t,n,r,i,a){let o=b(`a-translation`),s=b(`a-wizard`),c=b(`aloha-example`);return y(),m(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_WIZARD_GROUP_KEY_ID_HEADER_`,description:`_A_WIZARD_GROUP_KEY_ID_DESCRIPTION_`,props:[`key-id`]},{default:v(()=>[p(s,{steps:e.wizardSteps,"key-id":`id`},{step1:v(()=>[p(o,{tag:`h3`,text:`_A_WIZARD_STEP_1_`}),f(`p`,null,x(e.text),1)]),step2:v(()=>[p(o,{tag:`h3`,text:`_A_WIZARD_STEP_2_`}),f(`p`,null,x(e.text),1)]),step3:v(()=>[p(o,{tag:`h3`,text:`_A_WIZARD_STEP_3_`}),f(`p`,null,x(e.text),1)]),step4:v(()=>[p(o,{tag:`h3`,text:`_A_WIZARD_STEP_4_`}),f(`p`,null,x(e.text),1)]),_:1},8,[`steps`])]),_:1},8,[`code-html`,`code-js`])}var $e=u(Ze,[[`render`,Qe]]);function et(){return{codeHtml:`<div
  class="a_columns a_columns_count_12"
>
  <div
    class="a_column.a_column_6 a_columns_count_12_touch a_mb_5"
  >
    <a-switch
      v-model="showOnlyActiveStepMobile"
        label="show-only-active-step-mobile"
    ></a-switch>
    <a-select
      v-model="modelType"
      class="a_mt_4"
      label="_A_WIZARD_LABEL_TYPE_"
      key-id="value"
      key-label="label"
      :data="types"
      :deselectable="false"
      :translate-data="true"
    ></a-select>
  </div>
</div>
<a-wizard
  :steps="wizardSteps"
  :is-mobile="true"
  :show-only-active-step-mobile="showOnlyActiveStepMobile"
  :type="modelType"
>
  <template
    v-slot:step="{ step }"
  >
    <h2>{{ step.label }}</h2>
    <p>{{ text }}</p>
  </template>
</a-wizard>`}}function tt(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ASwitch,
  ATranslation,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardShowOnlyActiveStepMobile",
  components: {
    ASwitch,
    ATranslation,
    AWizard,
  },
  setup() {
    const showOnlyActiveStepMobile = ref(true);
    const modelType = ref("line");
    const types = [
      {
        label: "_A_WIZARD_TYPE_BASIC_",
        value: "basic",
      },
      {
        label: "_A_WIZARD_TYPE_ARROWS_",
        value: "arrows",
      },
      {
        label: "_A_WIZARD_TYPE_LINE_",
        value: "line",
      },
      {
        label: "_A_WIZARD_TYPE_ROUND_",
        value: "round",
      },
    ];
    const wizardSteps = [
      {
        id: "1",
        slot: "step",
        label: "Lorem",
      },
      {
        id: "2",
        slot: "step",
        label: "ipsum",
      },
      {
        id: "3",
        slot: "step",
        label: "dolor",
      },
      {
        id: "4",
        slot: "step",
        label: "sit",
      },
      {
        id: "5",
        slot: "step",
        label: "amet",
      },
      {
        id: "6",
        slot: "step",
        label: "consectetur",
      },
      {
        id: "7",
        slot: "step",
        label: "adipiscing",
      },
      {
        id: "8",
        slot: "step",
        label: "elit",
      },
      {
        id: "9",
        slot: "step",
        label: "Quisque",
      },
      {
        id: "10",
        slot: "step",
        label: "nisl",
      },
    ];
    const text = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent\`;

    return {
      modelType,
      showOnlyActiveStepMobile,
      text,
      types,
      wizardSteps,
    };
  },
};`}}var nt={name:`PageWizardShowOnlyActiveStepMobile`,components:{AlohaExample:r,ASelect:a,ASwitch:i,AWizard:d},setup(){let{codeHtml:e}=et(),{codeJs:t}=tt(),n=_(!0);return{codeHtml:e,codeJs:t,modelType:_(`line`),showOnlyActiveStepMobile:n,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,types:[{label:`_A_WIZARD_TYPE_BASIC_`,value:`basic`},{label:`_A_WIZARD_TYPE_ARROWS_`,value:`arrows`},{label:`_A_WIZARD_TYPE_LINE_`,value:`line`},{label:`_A_WIZARD_TYPE_ROUND_`,value:`round`}],wizardSteps:[{id:`1`,slot:`step`,label:`Lorem`},{id:`2`,slot:`step`,label:`ipsum`},{id:`3`,slot:`step`,label:`dolor`},{id:`4`,slot:`step`,label:`sit`},{id:`5`,slot:`step`,label:`amet`},{id:`6`,slot:`step`,label:`consectetur`},{id:`7`,slot:`step`,label:`adipiscing`},{id:`8`,slot:`step`,label:`elit`},{id:`9`,slot:`step`,label:`Quisque`},{id:`10`,slot:`step`,label:`nisl`}]}}},rt={class:`a_columns a_columns_count_12`},it={class:`a_column a_column_6 a_columns_count_12_touch a_mb_5`};function at(e,t,n,r,i,a){let o=b(`a-switch`),s=b(`a-select`),c=b(`a-wizard`),l=b(`aloha-example`);return y(),m(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_WIZARD_GROUP_SHOW_ONLY_ACTIVE_STEP_MOBILE_HEADER_`,description:`_A_WIZARD_GROUP_SHOW_ONLY_ACTIVE_STEP_MOBILE_DESCRIPTION_`,props:[`show-only-active-step-mobile`,`is-mobile`]},{default:v(()=>[f(`div`,rt,[f(`div`,it,[p(o,{modelValue:e.showOnlyActiveStepMobile,"onUpdate:modelValue":t[0]||=t=>e.showOnlyActiveStepMobile=t,label:`show-only-active-step-mobile`},null,8,[`modelValue`]),p(s,{class:`a_mt_4`,modelValue:e.modelType,"onUpdate:modelValue":t[1]||=t=>e.modelType=t,label:`_A_WIZARD_LABEL_TYPE_`,"key-id":`value`,"key-label":`label`,data:e.types,deselectable:!1,"translate-data":!0},null,8,[`modelValue`,`data`])])]),p(c,{steps:e.wizardSteps,"is-mobile":!0,"show-only-active-step-mobile":e.showOnlyActiveStepMobile,type:e.modelType},{step:v(({step:t})=>[f(`h2`,null,x(t.label),1),f(`p`,null,x(e.text),1)]),_:1},8,[`steps`,`show-only-active-step-mobile`,`type`])]),_:1},8,[`code-html`,`code-js`])}var ot=u(nt,[[`render`,at]]);function st(){return{codeHtml:`<a-wizard
  :steps="wizardSteps"
>
  <template
    v-slot:step="{ step, stepIndex }"
  >
    <a-translation
      tag="h3"
      :text="step.label"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
 
  <template
    v-slot:step4
  >
    <h2>ALOHA</h2>
    <p>{{ text }}</p>
  </template>
</a-wizard>`}}function ct(){return{codeJs:`import {
  ATranslation,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardSlot",
  components: {
    ATranslation,
    AWizard,
  },
  setup() {    
    const wizardSteps = [
      {
        slot: "step",
        label: "_A_WIZARD_STEP_1_",
        title: "_A_WIZARD_STEP_1_",
      },
      {
        slot: "step",
        label: "_A_WIZARD_STEP_2_",
        title: "_A_WIZARD_STEP_2_",
      },
      {
        slot: "step",
        label: "_A_WIZARD_STEP_3_",
        title: "_A_WIZARD_STEP_3_",
      },
      {
        slot: "step4",
        label: "_A_WIZARD_STEP_4_",
        title: "_A_WIZARD_STEP_4_",
      },
    ];
    const text = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent\`;

    return {
      text,
      wizardSteps,
    };
  },
};`}}var lt={name:`PageWizardSlot`,components:{AlohaExample:r,ATranslation:c,AWizard:d},setup(){let{codeHtml:e}=st(),{codeJs:t}=ct();return{codeHtml:e,codeJs:t,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:`step`,label:`_A_WIZARD_STEP_1_`,title:`_A_WIZARD_STEP_1_`},{slot:`step`,label:`_A_WIZARD_STEP_2_`,title:`_A_WIZARD_STEP_2_`},{slot:`step`,label:`_A_WIZARD_STEP_3_`,title:`_A_WIZARD_STEP_3_`},{slot:`step4`,label:`_A_WIZARD_STEP_4_`,title:`_A_WIZARD_STEP_4_`}]}}};function ut(e,t,n,r,i,a){let o=b(`a-translation`),s=b(`a-wizard`),c=b(`aloha-example`);return y(),m(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_WIZARD_GROUP_SLOT_HEADER_`,description:`_A_WIZARD_GROUP_SLOT_DESCRIPTION_`,slots:[`slot`],props:`steps.slot`},{default:v(()=>[p(s,{steps:e.wizardSteps},{step:v(({step:t,stepIndex:n})=>[p(o,{tag:`h3`,text:t.label},null,8,[`text`]),f(`p`,null,x(e.text),1)]),step4:v(()=>[t[0]||=f(`h2`,null,`ALOHA`,-1),f(`p`,null,x(e.text),1)]),_:1},8,[`steps`])]),_:1},8,[`code-html`,`code-js`])}var dt=u(lt,[[`render`,ut]]);function ft(){return{codeHtml:`<a-wizard
  :steps="wizardSteps"
>
  <template
    v-slot:stepLabel="{ step, stepNumber, stepIndex, isStepDisabled, isStepActive }"
  >
    <a-translation
      tag="span"
      :text="step.label"
    ></a-translation>
  </template>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>`}}function pt(){return{codeJs:`import {
  ATranslation,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardSlotLabel",
  components: {
    ATranslation,
    AWizard,
  },
  setup() {    
    const wizardSteps = [
      {
        slot: "step1",
        slotLabel: "stepLabel",
        label: "_A_WIZARD_STEP_1_",
        title: "_A_WIZARD_STEP_1_",
      },
      {
        slotLabel: "stepLabel",
        slot: "step2",
        label: "_A_WIZARD_STEP_2_",
        title: "_A_WIZARD_STEP_2_",
      },
      {
        slotLabel: "stepLabel",
        slot: "step3",
        label: "_A_WIZARD_STEP_3_",
        title: "_A_WIZARD_STEP_3_",
      },
      {
        slotLabel: "stepLabel4",
        slot: "step4",
        label: "_A_WIZARD_STEP_4_",
        title: "_A_WIZARD_STEP_4_",
      },
    ];
    const text = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent\`;

    return {
      text,
      wizardSteps,
    };
  },
};`}}var mt={name:`PageWizardSlotLabel`,components:{AlohaExample:r,ATranslation:c,AWizard:d},setup(){let{codeHtml:e}=ft(),{codeJs:t}=pt();return{codeHtml:e,codeJs:t,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:`step1`,slotLabel:`stepLabel`,label:`_A_WIZARD_STEP_1_`,title:`_A_WIZARD_STEP_1_`},{slotLabel:`stepLabel`,slot:`step2`,label:`_A_WIZARD_STEP_2_`,title:`_A_WIZARD_STEP_2_`},{slotLabel:`stepLabel`,slot:`step3`,label:`_A_WIZARD_STEP_3_`,title:`_A_WIZARD_STEP_3_`},{slotLabel:`stepLabel4`,slot:`step4`,label:`_A_WIZARD_STEP_4_`,title:`_A_WIZARD_STEP_4_`}]}}};function ht(e,t,n,r,i,a){let o=b(`a-translation`),s=b(`a-wizard`),c=b(`aloha-example`);return y(),m(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_WIZARD_GROUP_SLOT_LABEL_HEADER_`,description:`_A_WIZARD_GROUP_SLOT_LABEL_DESCRIPTION_`,slots:[`slotLabel`],props:`steps.slotLabel`},{default:v(()=>[p(s,{steps:e.wizardSteps},{stepLabel:v(({step:e,stepNumber:t,stepIndex:n,isStepDisabled:r,isStepActive:i})=>[p(o,{tag:`span`,text:e.label},null,8,[`text`])]),stepLabel4:v(()=>[...t[0]||=[f(`span`,null,`ALOHA`,-1)]]),step1:v(()=>[p(o,{tag:`h3`,text:`_A_WIZARD_STEP_1_`}),f(`p`,null,x(e.text),1)]),step2:v(()=>[p(o,{tag:`h3`,text:`_A_WIZARD_STEP_2_`}),f(`p`,null,x(e.text),1)]),step3:v(()=>[p(o,{tag:`h3`,text:`_A_WIZARD_STEP_3_`}),f(`p`,null,x(e.text),1)]),step4:v(()=>[p(o,{tag:`h3`,text:`_A_WIZARD_STEP_4_`}),f(`p`,null,x(e.text),1)]),_:1},8,[`steps`])]),_:1},8,[`code-html`,`code-js`])}var gt=u(mt,[[`render`,ht]]);function _t(){return{codeHtml:`<a-wizard
  :steps="wizardSteps"
>
  <template
    v-slot:toolbar
  >
    <a-button
      class="a_btn a_btn_primary"
      text="aloha"
    ></a-button>
  </template>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>`}}function vt(){return{codeJs:`import {
  AButton,
  ATranslation,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardSlotToolbar",
  components: {
    AButton,
    ATranslation,
    AWizard,
  },
  setup() {    
    const wizardSteps = [
      {
        slot: "step1",
        label: "_A_MODAL_WIZARD_STEP_1_",
        title: "_A_MODAL_WIZARD_STEP_1_",
      },
      {
        slot: "step2",
        label: "_A_MODAL_WIZARD_STEP_2_",
        title: "_A_MODAL_WIZARD_STEP_2_",
      },
      {
        slot: "step3",
        label: "_A_MODAL_WIZARD_STEP_3_",
        title: "_A_MODAL_WIZARD_STEP_3_",
      },
      {
        slot: "step4",
        label: "_A_MODAL_WIZARD_STEP_4_",
        title: "_A_MODAL_WIZARD_STEP_4_",
      },
    ];
    const text = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent\`;

    return {
      text,
      wizardSteps,
    };
  },
};`}}var yt={name:`PageWizardSlotToolbar`,components:{AButton:l,AlohaExample:r,ATranslation:c,AWizard:d},setup(){let{codeHtml:e}=_t(),{codeJs:t}=vt();return{codeHtml:e,codeJs:t,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:`step1`,label:`_A_WIZARD_STEP_1_`,title:`_A_WIZARD_STEP_1_`},{slot:`step2`,label:`_A_WIZARD_STEP_2_`,title:`_A_WIZARD_STEP_2_`},{slot:`step3`,label:`_A_WIZARD_STEP_3_`,title:`_A_WIZARD_STEP_3_`},{slot:`step4`,label:`_A_WIZARD_STEP_4_`,title:`_A_WIZARD_STEP_4_`}]}}};function bt(e,t,n,r,i,a){let o=b(`a-button`),s=b(`a-translation`),c=b(`a-wizard`),l=b(`aloha-example`);return y(),m(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_WIZARD_GROUP_SLOT_TOOLBAR_HEADER_`,description:`_A_WIZARD_GROUP_SLOT_TOOLBAR_DESCRIPTION_`,slots:[`toolbar`]},{default:v(()=>[p(c,{steps:e.wizardSteps},{toolbar:v(()=>[p(o,{class:`a_btn a_btn_primary`,text:`aloha`})]),step1:v(()=>[p(s,{tag:`h3`,text:`_A_WIZARD_STEP_1_`}),f(`p`,null,x(e.text),1)]),step2:v(()=>[p(s,{tag:`h3`,text:`_A_WIZARD_STEP_2_`}),f(`p`,null,x(e.text),1)]),step3:v(()=>[p(s,{tag:`h3`,text:`_A_WIZARD_STEP_3_`}),f(`p`,null,x(e.text),1)]),step4:v(()=>[p(s,{tag:`h3`,text:`_A_WIZARD_STEP_4_`}),f(`p`,null,x(e.text),1)]),_:1},8,[`steps`])]),_:1},8,[`code-html`,`code-js`])}var xt=u(yt,[[`render`,bt]]);function St(){return{codeHtml:`<a-wizard
  :steps="wizardSteps"
  :step-active="2"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>`}}function Ct(){return{codeJs:`import {
  ATranslation,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardStepActive",
  components: {
    ATranslation,
    AWizard,
  },
  setup() {    
    const wizardSteps = [
      {
        slot: "step1",
        label: "_A_MODAL_WIZARD_STEP_1_",
        title: "_A_MODAL_WIZARD_STEP_1_",
      },
      {
        slot: "step2",
        label: "_A_MODAL_WIZARD_STEP_2_",
        title: "_A_MODAL_WIZARD_STEP_2_",
      },
      {
        slot: "step3",
        label: "_A_MODAL_WIZARD_STEP_3_",
        title: "_A_MODAL_WIZARD_STEP_3_",
      },
      {
        slot: "step4",
        label: "_A_MODAL_WIZARD_STEP_4_",
        title: "_A_MODAL_WIZARD_STEP_4_",
      },
    ];
    const text = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent\`;

    return {
      text,
      wizardSteps,
    };
  },
};`}}var wt={name:`PageWizardStepActive`,components:{AlohaExample:r,ATranslation:c,AWizard:d},setup(){let{codeHtml:e}=St(),{codeJs:t}=Ct();return{codeHtml:e,codeJs:t,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:`step1`,label:`_A_WIZARD_STEP_1_`,title:`_A_WIZARD_STEP_1_`},{slot:`step2`,label:`_A_WIZARD_STEP_2_`,title:`_A_WIZARD_STEP_2_`},{slot:`step3`,label:`_A_WIZARD_STEP_3_`,title:`_A_WIZARD_STEP_3_`},{slot:`step4`,label:`_A_WIZARD_STEP_4_`,title:`_A_WIZARD_STEP_4_`}]}}};function Tt(e,t,n,r,i,a){let o=b(`a-translation`),s=b(`a-wizard`),c=b(`aloha-example`);return y(),m(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_WIZARD_GROUP_STEP_ACTIVE_HEADER_`,description:`_A_WIZARD_GROUP_STEP_ACTIVE_DESCRIPTION_`,props:[`step-active`]},{default:v(()=>[p(s,{steps:e.wizardSteps,"step-active":2},{step1:v(()=>[p(o,{tag:`h3`,text:`_A_WIZARD_STEP_1_`}),f(`p`,null,x(e.text),1)]),step2:v(()=>[p(o,{tag:`h3`,text:`_A_WIZARD_STEP_2_`}),f(`p`,null,x(e.text),1)]),step3:v(()=>[p(o,{tag:`h3`,text:`_A_WIZARD_STEP_3_`}),f(`p`,null,x(e.text),1)]),step4:v(()=>[p(o,{tag:`h3`,text:`_A_WIZARD_STEP_4_`}),f(`p`,null,x(e.text),1)]),_:1},8,[`steps`])]),_:1},8,[`code-html`,`code-js`])}var Et=u(wt,[[`render`,Tt]]);function Dt(){return{codeHtml:`<div
  class="a_columns a_columns_count_12"
>
  <div
    class="a_column.a_column_6 a_columns_count_12_touch a_mb_5"
  >
    <a-select
      v-model="modelType"
      label="_A_WIZARD_LABEL_TYPE_"
      key-id="value"
      key-label="label"
      :data="types"
      :deselectable="false"
      :translate-data="true"
    ></a-select>
    <a-switch
      v-model="wizardSteps[0].error"
      label="_A_WIZARD_STEP_1_"
    ></a-switch>
    <a-switch
      v-model="wizardSteps[1].error"
      label="_A_WIZARD_STEP_2_"
    ></a-switch>
    <a-switch
      v-model="wizardSteps[2].error"
      label="_A_WIZARD_STEP_3_"
    ></a-switch>
    <a-switch
      v-model="wizardSteps[3].error"
      label="_A_WIZARD_STEP_4_"
    ></a-switch>
  </div>
</div>
<a-wizard
  :steps="wizardSteps"
  :type="modelType"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>`}}function Ot(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ASelect,
  ASwitch,
  ATranslation,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardStepsErrors",
  components: {
    ASelect,
    ASwitch,
    ATranslation,
    AWizard,
  },
  setup() {
    const modelType = ref("basic");
    const types = [
      {
        label: "_A_WIZARD_TYPE_BASIC_",
        value: "basic",
      },
      {
        label: "_A_WIZARD_TYPE_ARROWS_",
        value: "arrows",
      },
      {
        label: "_A_WIZARD_TYPE_LINE_",
        value: "line",
      },
      {
        label: "_A_WIZARD_TYPE_ROUND_",
        value: "round",
      },
    ];
    const wizardSteps = ref([
      {
        slot: "step1",
        label: "_A_WIZARD_STEP_1_",
        title: "_A_WIZARD_STEP_1_",
        error: false,
      },
      {
        slot: "step2",
        label: "_A_WIZARD_STEP_2_",
        title: "_A_WIZARD_STEP_2_",
        error: false,
      },
      {
        slot: "step3",
        label: "_A_WIZARD_STEP_3_",
        title: "_A_WIZARD_STEP_3_",
        error: true,
      },
      {
        slot: "step4",
        label: "_A_WIZARD_STEP_4_",
        title: "_A_WIZARD_STEP_4_",
        error: false,
      },
    ]);
    const text = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent\`;

    return {
      modelType,
      text,
      types,
      wizardSteps,
    };
  },
};`}}var kt={name:`PageWizardStepsErrors`,components:{AlohaExample:r,ASelect:a,ASwitch:i,ATranslation:c,AWizard:d},setup(){let{codeHtml:e}=Dt(),{codeJs:t}=Ot();return{codeHtml:e,codeJs:t,modelType:_(`basic`),text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,types:[{label:`_A_WIZARD_TYPE_BASIC_`,value:`basic`},{label:`_A_WIZARD_TYPE_ARROWS_`,value:`arrows`},{label:`_A_WIZARD_TYPE_LINE_`,value:`line`},{label:`_A_WIZARD_TYPE_ROUND_`,value:`round`}],wizardSteps:_([{slot:`step1`,label:`_A_WIZARD_STEP_1_`,title:`_A_WIZARD_STEP_1_`,error:!1},{slot:`step2`,label:`_A_WIZARD_STEP_2_`,title:`_A_WIZARD_STEP_2_`,error:!1},{slot:`step3`,label:`_A_WIZARD_STEP_3_`,title:`_A_WIZARD_STEP_3_`,error:!0},{slot:`step4`,label:`_A_WIZARD_STEP_4_`,title:`_A_WIZARD_STEP_4_`,error:!1}])}}},At={class:`a_columns a_columns_count_12`},jt={class:`a_column a_column_6 a_columns_count_12_touch a_mb_5`};function Mt(e,t,n,r,i,a){let o=b(`a-select`),s=b(`a-switch`),c=b(`a-translation`),l=b(`a-wizard`),u=b(`aloha-example`);return y(),m(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_WIZARD_GROUP_STEPS_ERRORS_HEADER_`,description:`_A_WIZARD_GROUP_STEPS_ERRORS_DESCRIPTION_`,props:`steps.error`},{default:v(()=>[f(`div`,At,[f(`div`,jt,[p(o,{modelValue:e.modelType,"onUpdate:modelValue":t[0]||=t=>e.modelType=t,label:`_A_WIZARD_LABEL_TYPE_`,"key-id":`value`,"key-label":`label`,data:e.types,deselectable:!1,"translate-data":!0},null,8,[`modelValue`,`data`]),p(s,{modelValue:e.wizardSteps[0].error,"onUpdate:modelValue":t[1]||=t=>e.wizardSteps[0].error=t,label:`_A_WIZARD_STEP_1_`},null,8,[`modelValue`]),p(s,{modelValue:e.wizardSteps[1].error,"onUpdate:modelValue":t[2]||=t=>e.wizardSteps[1].error=t,label:`_A_WIZARD_STEP_2_`},null,8,[`modelValue`]),p(s,{modelValue:e.wizardSteps[2].error,"onUpdate:modelValue":t[3]||=t=>e.wizardSteps[2].error=t,label:`_A_WIZARD_STEP_3_`},null,8,[`modelValue`]),p(s,{modelValue:e.wizardSteps[3].error,"onUpdate:modelValue":t[4]||=t=>e.wizardSteps[3].error=t,label:`_A_WIZARD_STEP_4_`},null,8,[`modelValue`])])]),p(l,{steps:e.wizardSteps,type:e.modelType},{step1:v(()=>[p(c,{tag:`h3`,text:`_A_WIZARD_STEP_1_`}),f(`p`,null,x(e.text),1)]),step2:v(()=>[p(c,{tag:`h3`,text:`_A_WIZARD_STEP_2_`}),f(`p`,null,x(e.text),1)]),step3:v(()=>[p(c,{tag:`h3`,text:`_A_WIZARD_STEP_3_`}),f(`p`,null,x(e.text),1)]),step4:v(()=>[p(c,{tag:`h3`,text:`_A_WIZARD_STEP_4_`}),f(`p`,null,x(e.text),1)]),_:1},8,[`steps`,`type`])]),_:1},8,[`code-html`,`code-js`])}var Nt=u(kt,[[`render`,Mt]]);function Pt(){return{codeHtml:`<div
  class="a_columns a_columns_count_12"
>
  <div
    class="a_column.a_column_6 a_columns_count_12_touch a_mb_5"
  >
    <a-select
      v-model="modelType"
      label="_A_WIZARD_LABEL_TYPE_"
      key-id="value"
      key-label="label"
      :data="types"
      :deselectable="false"
      :translate-data="true"
    ></a-select>
    <a-switch
      v-model="wizardSteps[0].warning"
      label="_A_WIZARD_STEP_1_"
    ></a-switch>
    <a-switch
      v-model="wizardSteps[1].warning"
      label="_A_WIZARD_STEP_2_"
    ></a-switch>
    <a-switch
      v-model="wizardSteps[2].warning"
      label="_A_WIZARD_STEP_3_"
    ></a-switch>
    <a-switch
      v-model="wizardSteps[3].warning"
      label="_A_WIZARD_STEP_4_"
    ></a-switch>
  </div>
</div>
<a-wizard
  :steps="wizardSteps"
  :type="modelType"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h3"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>`}}function Ft(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelect,
  ASwitch,
  ATranslation,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardStepsWarnings",
  components: {
    ASelect,
    ASwitch,
    ATranslation,
    AWizard,
  },
  setup() {
    const modelType = ref("basic");
    const types = [
      {
        label: "_A_WIZARD_TYPE_BASIC_",
        value: "basic",
      },
      {
        label: "_A_WIZARD_TYPE_ARROWS_",
        value: "arrows",
      },
      {
        label: "_A_WIZARD_TYPE_LINE_",
        value: "line",
      },
      {
        label: "_A_WIZARD_TYPE_ROUND_",
        value: "round",
      },
    ];
    const wizardSteps = ref([
      {
        slot: "step1",
        label: "_A_WIZARD_STEP_1_",
        title: "_A_WIZARD_STEP_1_",
        warning: false,
      },
      {
        slot: "step2",
        label: "_A_WIZARD_STEP_2_",
        title: "_A_WIZARD_STEP_2_",
        warning: false,
      },
      {
        slot: "step3",
        label: "_A_WIZARD_STEP_3_",
        title: "_A_WIZARD_STEP_3_",
        warning: true,
      },
      {
        slot: "step4",
        label: "_A_WIZARD_STEP_4_",
        title: "_A_WIZARD_STEP_4_",
        warning: false,
      },
    ]);
    const text = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent\`;

    return {
      modelType,
      text,
      types,
      wizardSteps,
    };
  },
};`}}var It={name:`PageWizardStepsWarnings`,components:{AlohaExample:r,ASelect:a,ASwitch:i,ATranslation:c,AWizard:d},setup(){let{codeHtml:e}=Pt(),{codeJs:t}=Ft();return{codeHtml:e,codeJs:t,modelType:_(`basic`),text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,types:[{label:`_A_WIZARD_TYPE_BASIC_`,value:`basic`},{label:`_A_WIZARD_TYPE_ARROWS_`,value:`arrows`},{label:`_A_WIZARD_TYPE_LINE_`,value:`line`},{label:`_A_WIZARD_TYPE_ROUND_`,value:`round`}],wizardSteps:_([{slot:`step1`,label:`_A_WIZARD_STEP_1_`,title:`_A_WIZARD_STEP_1_`,warning:!1},{slot:`step2`,label:`_A_WIZARD_STEP_2_`,title:`_A_WIZARD_STEP_2_`,warning:!1},{slot:`step3`,label:`_A_WIZARD_STEP_3_`,title:`_A_WIZARD_STEP_3_`,warning:!0},{slot:`step4`,label:`_A_WIZARD_STEP_4_`,title:`_A_WIZARD_STEP_4_`,warning:!1}])}}},Lt={class:`a_columns a_columns_count_12`},Rt={class:`a_column a_column_6 a_columns_count_12_touch a_mb_5`};function zt(e,t,n,r,i,a){let o=b(`a-select`),s=b(`a-switch`),c=b(`a-translation`),l=b(`a-wizard`),u=b(`aloha-example`);return y(),m(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_WIZARD_GROUP_STEPS_WARNINGS_HEADER_`,description:`_A_WIZARD_GROUP_STEPS_WARNINGS_DESCRIPTION_`,props:`steps.warning`},{default:v(()=>[f(`div`,Lt,[f(`div`,Rt,[p(o,{modelValue:e.modelType,"onUpdate:modelValue":t[0]||=t=>e.modelType=t,label:`_A_WIZARD_LABEL_TYPE_`,"key-id":`value`,"key-label":`label`,data:e.types,deselectable:!1,"translate-data":!0},null,8,[`modelValue`,`data`]),p(s,{modelValue:e.wizardSteps[0].warning,"onUpdate:modelValue":t[1]||=t=>e.wizardSteps[0].warning=t,label:`_A_WIZARD_STEP_1_`},null,8,[`modelValue`]),p(s,{modelValue:e.wizardSteps[1].warning,"onUpdate:modelValue":t[2]||=t=>e.wizardSteps[1].warning=t,label:`_A_WIZARD_STEP_2_`},null,8,[`modelValue`]),p(s,{modelValue:e.wizardSteps[2].warning,"onUpdate:modelValue":t[3]||=t=>e.wizardSteps[2].warning=t,label:`_A_WIZARD_STEP_3_`},null,8,[`modelValue`]),p(s,{modelValue:e.wizardSteps[3].warning,"onUpdate:modelValue":t[4]||=t=>e.wizardSteps[3].warning=t,label:`_A_WIZARD_STEP_4_`},null,8,[`modelValue`])])]),p(l,{steps:e.wizardSteps,type:e.modelType},{step1:v(()=>[p(c,{tag:`h3`,text:`_A_WIZARD_STEP_1_`}),f(`p`,null,x(e.text),1)]),step2:v(()=>[p(c,{tag:`h3`,text:`_A_WIZARD_STEP_2_`}),f(`p`,null,x(e.text),1)]),step3:v(()=>[p(c,{tag:`h3`,text:`_A_WIZARD_STEP_3_`}),f(`p`,null,x(e.text),1)]),step4:v(()=>[p(c,{tag:`h3`,text:`_A_WIZARD_STEP_4_`}),f(`p`,null,x(e.text),1)]),_:1},8,[`steps`,`type`])]),_:1},8,[`code-html`,`code-js`])}var Bt=u(It,[[`render`,zt]]);function Vt(){return{codeHtml:`<h3 class="a_my_3">type="line", sub-type="square"</h3>
<a-wizard
  :steps="wizardSteps"
  type="line"
  sub-type="square"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>

<h3 class="a_my_3">type="line", sub-type="circle"</h3>
<a-wizard
  :steps="wizardSteps"
  type="line"
  sub-type="circle"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>

<h3 class="a_my_3">type="line", sub-type="square-bordered"</h3>
<a-wizard
  :steps="wizardSteps"
  type="line"
  sub-type="square-bordered"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>

<h3 class="a_my_3">type="line", sub-type="circle-bordered"</h3>
<a-wizard
  :steps="wizardSteps"
  type="line"
  sub-type="circle-bordered"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>`}}function Ht(){return{codeJs:`import {
  ATranslation,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardSubType",
  components: {
    ATranslation,
    AWizard,
  },
  setup() {
    const wizardSteps = [
      {
        slot: "step1",
        label: "_A_MODAL_WIZARD_STEP_1_",
        title: "_A_MODAL_WIZARD_STEP_1_",
      },
      {
        slot: "step2",
        label: "_A_MODAL_WIZARD_STEP_2_",
        title: "_A_MODAL_WIZARD_STEP_2_",
      },
      {
        slot: "step3",
        label: "_A_MODAL_WIZARD_STEP_3_",
        title: "_A_MODAL_WIZARD_STEP_3_",
      },
      {
        slot: "step4",
        label: "_A_MODAL_WIZARD_STEP_4_",
        title: "_A_MODAL_WIZARD_STEP_4_",
      },
    ];
    const text = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent\`;

    return {
      text,
      wizardSteps,
    };
  },
};`}}var Ut={name:`PageWizardSubType`,components:{AlohaExample:r,ATranslation:c,AWizard:d},setup(){let{codeHtml:e}=Vt(),{codeJs:t}=Ht();return{codeHtml:e,codeJs:t,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:`step1`,label:`_A_WIZARD_STEP_1_`,title:`_A_WIZARD_STEP_1_`},{slot:`step2`,label:`_A_WIZARD_STEP_2_`,title:`_A_WIZARD_STEP_2_`},{slot:`step3`,label:`_A_WIZARD_STEP_3_`,title:`_A_WIZARD_STEP_3_`},{slot:`step4`,label:`_A_WIZARD_STEP_4_`,title:`_A_WIZARD_STEP_4_`}]}}};function Wt(e,t,n,r,i,a){let o=b(`a-translation`),s=b(`a-wizard`),c=b(`aloha-example`);return y(),m(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_WIZARD_GROUP_SUB_TYPE_HEADER_`,description:`_A_WIZARD_GROUP_SUB_TYPE_DESCRIPTION_`,props:[`sub-type`,`type`]},{default:v(()=>[t[0]||=f(`h3`,{class:`a_my_3`},`type="line", sub-type="square"`,-1),p(s,{steps:e.wizardSteps,type:`line`,"sub-type":`square`},{step1:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_1_`}),f(`p`,null,x(e.text),1)]),step2:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_2_`}),f(`p`,null,x(e.text),1)]),step3:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_3_`}),f(`p`,null,x(e.text),1)]),step4:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_4_`}),f(`p`,null,x(e.text),1)]),_:1},8,[`steps`]),t[1]||=f(`h3`,{class:`a_my_3`},`type="line", sub-type="circle"`,-1),p(s,{steps:e.wizardSteps,type:`line`,"sub-type":`circle`},{step1:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_1_`}),f(`p`,null,x(e.text),1)]),step2:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_2_`}),f(`p`,null,x(e.text),1)]),step3:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_3_`}),f(`p`,null,x(e.text),1)]),step4:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_4_`}),f(`p`,null,x(e.text),1)]),_:1},8,[`steps`]),t[2]||=f(`h3`,{class:`a_my_3`},`type="line", sub-type="square-bordered"`,-1),p(s,{steps:e.wizardSteps,type:`line`,"sub-type":`square-bordered`},{step1:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_1_`}),f(`p`,null,x(e.text),1)]),step2:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_2_`}),f(`p`,null,x(e.text),1)]),step3:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_3_`}),f(`p`,null,x(e.text),1)]),step4:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_4_`}),f(`p`,null,x(e.text),1)]),_:1},8,[`steps`]),t[3]||=f(`h3`,{class:`a_my_3`},`type="line", sub-type="circle-bordered"`,-1),p(s,{steps:e.wizardSteps,type:`line`,"sub-type":`circle-bordered`},{step1:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_1_`}),f(`p`,null,x(e.text),1)]),step2:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_2_`}),f(`p`,null,x(e.text),1)]),step3:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_3_`}),f(`p`,null,x(e.text),1)]),step4:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_4_`}),f(`p`,null,x(e.text),1)]),_:1},8,[`steps`])]),_:1},8,[`code-html`,`code-js`])}var Gt=u(Ut,[[`render`,Wt]]);function Kt(){return{codeHtml:`<h3 class="a_my_3">type="basic"</h3>
<a-wizard
  :steps="wizardSteps"
  type="basic"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>

<h3 class="a_my_3">type="line"</h3>
<a-wizard
  :steps="wizardSteps"
  type="line"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>

<h3 class="a_my_3">type="round"</h3>
<a-wizard
  :steps="wizardSteps"
  type="round"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>

<h3 class="a_my_3">type="arrows"</h3>
<a-wizard
  :steps="wizardSteps"
  type="arrows"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>`}}function qt(){return{codeJs:`import {
  ATranslation,
  AWizard,
} from "aloha-vue";
    
export default {
  name: "PageWizardType",
  components: {
    ATranslation,
    AWizard,
  },
  setup() {
    const wizardSteps = [
      {
        slot: "step1",
        label: "_A_MODAL_WIZARD_STEP_1_",
        title: "_A_MODAL_WIZARD_STEP_1_",
      },
      {
        slot: "step2",
        label: "_A_MODAL_WIZARD_STEP_2_",
        title: "_A_MODAL_WIZARD_STEP_2_",
      },
      {
        slot: "step3",
        label: "_A_MODAL_WIZARD_STEP_3_",
        title: "_A_MODAL_WIZARD_STEP_3_",
      },
      {
        slot: "step4",
        label: "_A_MODAL_WIZARD_STEP_4_",
        title: "_A_MODAL_WIZARD_STEP_4_",
      },
    ];
    const text = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent\`;

    return {
      text,
      wizardSteps,
    };
  },
};`}}var $={name:`PageWizardType`,components:{AlohaExample:r,ATranslation:c,AWizard:d},setup(){let{codeHtml:e}=Kt(),{codeJs:t}=qt();return{codeHtml:e,codeJs:t,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:`step1`,label:`_A_WIZARD_STEP_1_`,title:`_A_WIZARD_STEP_1_`},{slot:`step2`,label:`_A_WIZARD_STEP_2_`,title:`_A_WIZARD_STEP_2_`},{slot:`step3`,label:`_A_WIZARD_STEP_3_`,title:`_A_WIZARD_STEP_3_`},{slot:`step4`,label:`_A_WIZARD_STEP_4_`,title:`_A_WIZARD_STEP_4_`}]}}};function Jt(e,t,n,r,i,a){let o=b(`a-translation`),s=b(`a-wizard`),c=b(`aloha-example`);return y(),m(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_WIZARD_GROUP_TYPE_HEADER_`,description:`_A_WIZARD_GROUP_TYPE_DESCRIPTION_`,props:`type`},{default:v(()=>[t[0]||=f(`h3`,{class:`a_my_3`},`type="basic"`,-1),p(s,{steps:e.wizardSteps,type:`basic`},{step1:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_1_`}),f(`p`,null,x(e.text),1)]),step2:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_2_`}),f(`p`,null,x(e.text),1)]),step3:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_3_`}),f(`p`,null,x(e.text),1)]),step4:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_4_`}),f(`p`,null,x(e.text),1)]),_:1},8,[`steps`]),t[1]||=f(`h3`,{class:`a_my_3`},`type="line"`,-1),p(s,{steps:e.wizardSteps,type:`line`},{step1:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_1_`}),f(`p`,null,x(e.text),1)]),step2:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_2_`}),f(`p`,null,x(e.text),1)]),step3:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_3_`}),f(`p`,null,x(e.text),1)]),step4:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_4_`}),f(`p`,null,x(e.text),1)]),_:1},8,[`steps`]),t[2]||=f(`h3`,{class:`a_my_3`},`type="round"`,-1),p(s,{steps:e.wizardSteps,type:`round`},{step1:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_1_`}),f(`p`,null,x(e.text),1)]),step2:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_2_`}),f(`p`,null,x(e.text),1)]),step3:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_3_`}),f(`p`,null,x(e.text),1)]),step4:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_4_`}),f(`p`,null,x(e.text),1)]),_:1},8,[`steps`]),t[3]||=f(`h3`,{class:`a_my_3`},`type="arrows"`,-1),p(s,{steps:e.wizardSteps,type:`arrows`},{step1:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_1_`}),f(`p`,null,x(e.text),1)]),step2:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_2_`}),f(`p`,null,x(e.text),1)]),step3:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_3_`}),f(`p`,null,x(e.text),1)]),step4:v(()=>[p(o,{tag:`h4`,text:`_A_WIZARD_STEP_4_`}),f(`p`,null,x(e.text),1)]),_:1},8,[`steps`])]),_:1},8,[`code-html`,`code-js`])}var Yt=u($,[[`render`,Jt]]);function Xt(){return{codeHtml:`<a-wizard
  :steps="wizardSteps"
  :before-step-change="beforeStepChange"
  is-step-heading-visible
  finish-button-text="_A_WIZARD_FINISH_"
  @finish="onFinish"
>
  <template v-slot:step1>
    <a-input
      v-model="name"
      label="_A_WIZARD_EXAMPLE_NAME_"
      required
      :errors="errors"
    />
  </template>
  <template v-slot:step2>
    <a-translation
      tag="p"
      text="_A_WIZARD_EXAMPLE_CHECK_"
    />
  </template>
</a-wizard>
<a-translation
  v-if="isFinished"
  tag="p"
  role="status"
  text="_A_WIZARD_EXAMPLE_FINISHED_"
/>`}}function Zt(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AInput,
  ATranslation,
  AWizard,
} from "aloha-vue";

export default {
  components: {
    AInput,
    ATranslation,
    AWizard,
  },
  setup() {
    const wizardSteps = [
      {
        slot: "step1",
        label: "_A_WIZARD_EXAMPLE_STEP_PERSON_",
      },
      {
        slot: "step2",
        label: "_A_WIZARD_EXAMPLE_STEP_CHECK_",
      },
    ];
    const name = ref("");
    const errors = ref([]);
    const isFinished = ref(false);

    // false keeps the step, the focus goes to the invalid field; going back is always allowed
    const beforeStepChange = ({ direction, from }) => {
      if (direction === "back" || from !== 0) {
        return true;
      }
      errors.value = name.value.trim() ? [] : ["_A_WIZARD_EXAMPLE_NAME_REQUIRED_"];
      return errors.value.length === 0;
    };

    const onFinish = () => {
      isFinished.value = true;
    };

    return {
      beforeStepChange,
      errors,
      isFinished,
      name,
      onFinish,
      wizardSteps,
    };
  },
};`}}var Qt={name:`PageWizardValidation`,components:{AInput:o,ATranslation:c,AWizard:d,AlohaExample:r},setup(){let{codeHtml:e}=Xt(),{codeJs:t}=Zt(),n=[{slot:`step1`,label:`_A_WIZARD_EXAMPLE_STEP_PERSON_`},{slot:`step2`,label:`_A_WIZARD_EXAMPLE_STEP_CHECK_`}],r=_(``),i=_([]),a=_(!1);return{codeHtml:e,codeJs:t,beforeStepChange:({direction:e,from:t})=>e===`back`||t!==0||(i.value=r.value.trim()?[]:[`_A_WIZARD_EXAMPLE_NAME_REQUIRED_`],i.value.length===0),errors:i,isFinished:a,name:r,onFinish:()=>{a.value=!0},wizardSteps:n}}};function $t(e,t,n,r,i,a){let o=b(`a-input`),s=b(`a-translation`),c=b(`a-wizard`),l=b(`aloha-example`);return y(),m(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_WIZARD_VALIDATION_HEADER_`,description:`_A_WIZARD_VALIDATION_DESCRIPTION_`},{default:v(()=>[p(c,{steps:e.wizardSteps,"before-step-change":e.beforeStepChange,"is-step-heading-visible":``,"finish-button-text":`_A_WIZARD_FINISH_`,onFinish:e.onFinish},{step1:v(()=>[p(o,{modelValue:e.name,"onUpdate:modelValue":t[0]||=t=>e.name=t,label:`_A_WIZARD_EXAMPLE_NAME_`,required:``,errors:e.errors},null,8,[`modelValue`,`errors`])]),step2:v(()=>[p(s,{tag:`p`,text:`_A_WIZARD_EXAMPLE_CHECK_`})]),_:1},8,[`steps`,`before-step-change`,`onFinish`]),e.isFinished?(y(),m(s,{key:0,class:`a_mt_3`,tag:`p`,role:`status`,text:`_A_WIZARD_EXAMPLE_FINISHED_`})):g(``,!0)]),_:1},8,[`code-html`,`code-js`])}var en=u(Qt,[[`render`,$t]]);function tn(){return{dataEvents:[{name:`change-step`,description:`_A_WIZARD_EVENTS_CHANGE_STEP_DESCRIPTION_`,type:`Function`},{name:`finish`,description:`_A_WIZARD_EVENTS_FINISH_DESCRIPTION_`,type:`Function`},{name:`go-step-back`,description:`_A_WIZARD_EVENTS_GO_STEP_BACK_DESCRIPTION_`,type:`Function`},{name:`go-step-forward`,description:`_A_WIZARD_EVENTS_GO_STEP_FORWARD_DESCRIPTION_`,type:`Function`}]}}function nn(){return{dataExposes:[{name:`buttonRef`,description:`_A_SHOW_MORE_EXPOSES_BUTTON_REF_DESCRIPTION_`,type:`Object`},{name:`containerRef`,description:`_A_SHOW_MORE_EXPOSES_CONTAINER_REF_DESCRIPTION_`,type:`Object`},{name:`isButtonVisible`,description:`_A_SHOW_MORE_EXPOSES_IS_BUTTON_VISIBLE_DESCRIPTION_`,type:`Boolean`},{name:`isOpen`,description:`_A_SHOW_MORE_EXPOSES_IS_OPEN_DESCRIPTION_`,type:`Boolean`},{name:`toggleButton`,description:`_A_SHOW_MORE_EXPOSES_TOGGLE_BUTTON_DESCRIPTION_`,type:`Function`}]}}function rn(){let e=h(()=>s({placeholder:`_A_WIZARD_COMPONENT_NAME_`}));return{pageTitle:h(()=>`AWizard${e.value?` (${e.value})`:``}`)}}function an(){return{dataProps:[{name:`aria-label`,description:`_A_WIZARD_PROPS_ARIA_LABEL_DESCRIPTION_`,type:`String`,default:`_A_WIZARD_ARIA_LABEL_`,required:!1},{name:`aria-label-steps`,description:`_A_WIZARD_PROPS_ARIA_LABEL_STEPS_DESCRIPTION_`,type:`String`,default:`_A_WIZARD_STEPS_ARIA_LABEL_`,required:!1},{name:`back-button-attributes`,description:`_A_WIZARD_PROPS_BACK_BUTTON_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`back-button-class`,description:`_A_WIZARD_PROPS_BACK_BUTTON_CLASS_DESCRIPTION_`,type:`String / Array / Object`,default:`a_btn a_btn_secondary`,required:!1},{name:`back-button-icon-left`,description:`_A_WIZARD_PROPS_BACK_BUTTON_ICON_LEFT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`back-button-icon-right`,description:`_A_WIZARD_PROPS_BACK_BUTTON_ICON_RIGHT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`back-button-text`,description:`_A_WIZARD_PROPS_BACK_BUTTON_TEXT_DESCRIPTION_`,type:`String`,default:`_A_WIZARD_PREVIOUS_`,required:!1},{name:`back-button-title`,description:`_A_WIZARD_PROPS_BACK_BUTTON_TITLE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`before-step-change`,description:`_A_WIZARD_PROPS_BEFORE_STEP_CHANGE_DESCRIPTION_`,type:`Function`,default:void 0,required:!1},{name:`class-extra`,description:`_A_WIZARD_PROPS_CLASS_EXTRA_DESCRIPTION_`,type:`String / Object`,default:`a_wizard_class_extra`,required:!1},{name:`extra`,description:`_A_WIZARD_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`finish-button-attributes`,description:`_A_WIZARD_PROPS_FINISH_BUTTON_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`finish-button-class`,description:`_A_WIZARD_PROPS_FINISH_BUTTON_CLASS_DESCRIPTION_`,type:`String / Array / Object`,default:`a_btn a_btn_primary`,required:!1},{name:`finish-button-text`,description:`_A_WIZARD_PROPS_FINISH_BUTTON_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`forward-button-attributes`,description:`_A_WIZARD_PROPS_FORWARD_BUTTON_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`forward-button-class`,description:`_A_WIZARD_PROPS_FORWARD_BUTTON_CLASS_DESCRIPTION_`,type:`String / Array / Object`,default:`a_btn a_btn_secondary`,required:!1},{name:`forward-button-icon-left`,description:`_A_WIZARD_PROPS_FORWARD_BUTTON_ICON_LEFT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`forward-button-icon-right`,description:`_A_WIZARD_PROPS_FORWARD_BUTTON_ICON_RIGHT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`forward-button-text`,description:`_A_WIZARD_PROPS_FORWARD_BUTTON_TEXT_DESCRIPTION_`,type:`String`,default:`_A_WIZARD_PREVIOUS_`,required:!1},{name:`forward-button-title`,description:`_A_WIZARD_PROPS_FORWARD_BUTTON_TITLE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`has-focus-jump`,description:`_A_WIZARD_PROPS_HAS_FOCUS_JUMP_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`id`,description:`_A_WIZARD_PROPS_ID_DESCRIPTION_`,type:`String`,default:`() => uniqueId("a_wizard_")`,required:!1},{name:`is-back-button-disabled`,description:`_A_WIZARD_PROPS_IS_BACK_BUTTON_DISABLED_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-back-button-hide`,description:`_A_WIZARD_PROPS_IS_BACK_BUTTON_HIDE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-back-first-button-hide`,description:`_A_WIZARD_PROPS_IS_BACK_FIRST_BUTTON_HIDE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-back-step-button-disabled`,description:`_A_WIZARD_PROPS_IS_BACK_STEP_BUTTON_DISABLED_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-buttons-loading`,description:`_A_WIZARD_PROPS_IS_BUTTONS_LOADING_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-control-outside`,description:`_A_WIZARD_PROPS_IS_CONTROL_OUTSIDE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-forward-button-disabled`,description:`_A_WIZARD_PROPS_IS_FORWARD_BUTTON_DISABLED_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-forward-button-hide`,description:`_A_WIZARD_PROPS_IS_FORWARD_BUTTON_HIDE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-forward-last-button-hide`,description:`_A_WIZARD_PROPS_IS_FORWARD_LAST_BUTTON_HIDE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-forward-step-button-disabled`,description:`_A_WIZARD_PROPS_IS_FORWARD_STEP_BUTTON_DISABLED_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-mobile`,description:`_A_WIZARD_PROPS_IS_MOBILE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-step-heading-visible`,description:`_A_WIZARD_PROPS_IS_STEP_HEADING_VISIBLE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-step-number-visible`,description:`_A_WIZARD_PROPS_IS_STEP_NUMBER_VISIBLE_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-steps-justified`,description:`_A_WIZARD_PROPS_IS_STEPS_JUSTIFIED_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-toolbar-bottom`,description:`_A_WIZARD_PROPS_IS_TOOLBAR_BOTTOM_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-toolbar-top`,description:`_A_WIZARD_PROPS_IS_TOOLBAR_TOP_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`key-id`,description:`_A_WIZARD_PROPS_KEY_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`show-only-active-step-mobile`,description:`_A_WIZARD_PROPS_SHOW_ONLY_ACTIVE_STEP_MOBILE_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`step-active`,description:`_A_WIZARD_PROPS_STEP_ACTIVE_DESCRIPTION_`,type:`Number`,default:void 0,required:!1},{name:`step-heading-tag`,description:`_A_WIZARD_PROPS_STEP_HEADING_TAG_DESCRIPTION_`,type:`String`,default:`h3`,required:!1},{name:`steps-icon-error`,description:`_A_WIZARD_PROPS_STEP_ICON_ERROR_DESCRIPTION_`,type:`String`,default:`AlertDanger`,required:!1},{name:`steps-icon-error-text`,description:`_A_WIZARD_PROPS_STEP_ICON_ERROR_TEXT_DESCRIPTION_`,type:`String`,default:`_A_WIZARD_STEP_ERROR_`,required:!1},{name:`steps-icon-warning`,description:`_A_WIZARD_PROPS_STEP_ICON_WARNING_DESCRIPTION_`,type:`String`,default:`AlertWarning`,required:!1},{name:`steps-icon-warning-text`,description:`_A_WIZARD_PROPS_STEP_ICON_WARNING_TEXT_DESCRIPTION_`,type:`String`,default:`_A_WIZARD_STEP_WARNING_`,required:!1},{name:`steps`,description:`_A_WIZARD_PROPS_STEPS_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`steps-progressbar-text`,description:`_A_WIZARD_PROPS_STEP_PROGRESSBAR_TEXT_DESCRIPTION_`,type:`String`,default:`_A_WIZARD_STEPS_PROGRESSBAR_TEXT_{{stepActive}}_{{stepsCount}}_{{stepActiveLabel}}_`,required:!1},{name:`steps-visited`,description:`_A_WIZARD_PROPS_STEPS_VISITED_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`sub-type`,description:`_A_WIZARD_PROPS_SUB_TYPE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`toolbar-bottom-teleport-id`,description:`_A_WIZARD_PROPS_TOOLBAR_BOTTOM_TELEPORT_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`type`,description:`_A_WIZARD_PROPS_TYPE_DESCRIPTION_`,type:`String`,default:`basic`,required:!1}]}}function on(){return{dataSlots:[{name:`toolbar`,description:`_A_WIZARD_SLOTS_TOOLBAR_DESCRIPTION_`},{name:`slot`,description:`_A_WIZARD_SLOTS_SLOT_DESCRIPTION_`},{name:`slotLabel`,description:`_A_WIZARD_SLOTS_SLOT_LABEL_DESCRIPTION_`}]}}function sn(){return{dataTranslate:[`_A_WIZARD_ARIA_LABEL_`,`_A_WIZARD_FINISH_`,`_A_WIZARD_NEXT_`,`_A_WIZARD_NEXT_TITLE_`,`_A_WIZARD_PREVIOUS_`,`_A_WIZARD_PREVIOUS_TITLE_`,`_A_WIZARD_STEP_ACTIVE_`,`_A_WIZARD_STEP_ERROR_`,`_A_WIZARD_STEP_HEADING_{{stepNumber}}_{{stepsCount}}_{{label}}_`,`_A_WIZARD_STEP_NUMBER_OF_{{stepActive}}_{{stepsCount}}_`,`_A_WIZARD_STEP_UPCOMING_`,`_A_WIZARD_STEP_VISITED_`,`_A_WIZARD_STEP_WARNING_`,`_A_WIZARD_STEPS_ARIA_LABEL_`,`_A_WIZARD_STEPS_PROGRESSBAR_TEXT_{{stepActive}}_{{stepsCount}}_`]}}var cn={name:`PageWizard`,components:{AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:c,PageWizardBasic:O,PageWizardButtons:N,PageWizardButtonsDisabled:te,PageWizardButtonsHide:G,PageWizardDemo:re,PageWizardHasFocusJump:ue,PageWizardValidation:en,PageWizardIcon:he,PageWizardIsButtonsLoading:Se,PageWizardIsControlOutside:De,PageWizardIsStepNumberVisible:Pe,PageWizardIsStepsJustified:Ve,PageWizardIsToolbar:Je,PageWizardKeyId:$e,PageWizardShowOnlyActiveStepMobile:ot,PageWizardSlot:dt,PageWizardSlotLabel:gt,PageWizardSlotToolbar:xt,PageWizardStepActive:Et,PageWizardStepsErrors:Nt,PageWizardStepsWarnings:Bt,PageWizardSubType:Gt,PageWizardType:Yt},setup(){let{pageTitle:e}=rn(),{dataProps:t}=an(),{dataSlots:n}=on(),{dataExposes:r}=nn(),{dataEvents:i}=tn(),{dataTranslate:a}=sn();return{dataExposes:r,dataEvents:i,dataProps:t,dataSlots:n,dataTranslate:a,pageTitle:e}}};function ln(e,t,n,r,i,a){let o=b(`a-translation`),s=b(`page-wizard-basic`),c=b(`page-wizard-type`),l=b(`page-wizard-sub-type`),u=b(`page-wizard-icon`),d=b(`page-wizard-buttons`),f=b(`page-wizard-buttons-disabled`),h=b(`page-wizard-buttons-hide`),g=b(`page-wizard-is-steps-justified`),_=b(`page-wizard-is-buttons-loading`),x=b(`page-wizard-is-toolbar`),S=b(`page-wizard-is-step-number-visible`),C=b(`page-wizard-step-active`),w=b(`page-wizard-steps-errors`),T=b(`page-wizard-steps-warnings`),E=b(`page-wizard-key-id`),D=b(`page-wizard-has-focus-jump`),O=b(`page-wizard-validation`),k=b(`page-wizard-is-control-outside`),A=b(`page-wizard-slot-toolbar`),j=b(`page-wizard-slot-label`),M=b(`page-wizard-slot`),N=b(`page-wizard-show-only-active-step-mobile`),P=b(`page-wizard-demo`),F=b(`aloha-table-props`),I=b(`aloha-table-translate`),L=b(`aloha-table-css-vars`),R=b(`aloha-page`);return y(),m(R,{"page-title":e.pageTitle},{body:v(()=>[p(o,{tag:`p`,html:`_A_WIZARD_COMPONENT_DESCRIPTION_`}),p(o,{class:`a_mb_4`,tag:`div`,html:`_A_WIZARD_ACCESSIBILITY_DESCRIPTION_`}),p(s),p(c),p(l),p(u),p(d),p(f),p(h),p(g),p(_),p(x),p(S),p(C),p(w),p(T),p(E),p(D),p(O),p(k),p(A),p(j),p(M),p(N),p(P),p(F,{data:e.dataProps},null,8,[`data`]),p(F,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),p(F,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`]),p(I,{data:e.dataTranslate},null,8,[`data`]),p(L,{files:`components/AWizard`})]),_:1},8,[`page-title`])}var un=u(cn,[[`render`,ln]]);export{un as default};