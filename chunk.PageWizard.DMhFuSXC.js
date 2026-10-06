import{$t as e,Ct as t,Tt as n,Ut as r,Yt as i,kt as a,qt as o,wt as s,zt as c}from"./chunk.vendor.CZPox1kV.js";import{B as ee,r as te}from"./chunk.vendor-lodash.BnpO4xCi.js";import{At as l,I as u,X as d,Z as f,h as p,kt as m,t as h,z as g}from"./bundle.index.BmSiyQNH.js";import{n as _,t as v}from"./chunk.AlohaExample.CD4LlhAz.js";import{t as y}from"./chunk.AlohaTableProps.Dksi7fmb.js";import{t as b}from"./chunk.AlohaTableTranslate.C-b2Nle9.js";function x(){return{codeHtml:`<a-wizard
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
</a-wizard>`}}function S(){return{codeJs:`import {
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
};`}}var C={name:`PageWizardBasic`,components:{AlohaExample:v,ATranslation:f,AWizard:p},setup(){let{codeHtml:e}=x(),{codeJs:t}=S();return{codeHtml:e,codeJs:t,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:`step1`,label:`_A_WIZARD_STEP_1_`,title:`_A_WIZARD_STEP_1_`},{slot:`step2`,label:`_A_WIZARD_STEP_2_`,title:`_A_WIZARD_STEP_2_`},{slot:`step3`,label:`_A_WIZARD_STEP_3_`,title:`_A_WIZARD_STEP_3_`},{slot:`step4`,label:`_A_WIZARD_STEP_4_`,title:`_A_WIZARD_STEP_4_`}]}}};function w(t,i,ee,te,l,u){let d=r(`a-translation`),f=r(`a-wizard`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_BASIC_USAGE_`,props:`wizard-steps`},{default:o(()=>[a(f,{steps:t.wizardSteps},{step1:o(()=>[a(d,{tag:`h3`,text:`_A_WIZARD_STEP_1_`}),s(`p`,null,e(t.text),1)]),step2:o(()=>[a(d,{tag:`h3`,text:`_A_WIZARD_STEP_2_`}),s(`p`,null,e(t.text),1)]),step3:o(()=>[a(d,{tag:`h3`,text:`_A_WIZARD_STEP_3_`}),s(`p`,null,e(t.text),1)]),step4:o(()=>[a(d,{tag:`h3`,text:`_A_WIZARD_STEP_4_`}),s(`p`,null,e(t.text),1)]),_:1},8,[`steps`])]),_:1},8,[`code-html`,`code-js`])}var T=h(C,[[`render`,w]]);function E(){return{codeHtml:`<a-wizard
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
</a-wizard>`}}function D(){return{codeJs:`import {
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
};`}}var O={name:`PageWizardButtons`,components:{AlohaExample:v,ATranslation:f,AWizard:p},setup(){let{codeHtml:e}=E(),{codeJs:t}=D();return{codeHtml:e,codeJs:t,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:`step1`,label:`_A_WIZARD_STEP_1_`,title:`_A_WIZARD_STEP_1_`},{slot:`step2`,label:`_A_WIZARD_STEP_2_`,title:`_A_WIZARD_STEP_2_`},{slot:`step3`,label:`_A_WIZARD_STEP_3_`,title:`_A_WIZARD_STEP_3_`},{slot:`step4`,label:`_A_WIZARD_STEP_4_`,title:`_A_WIZARD_STEP_4_`}]}}};function k(t,i,ee,te,l,u){let d=r(`a-translation`),f=r(`a-wizard`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_WIZARD_GROUP_BUTTONS_HEADER_`,description:`_A_WIZARD_GROUP_BUTTONS_DESCRIPTION_`,props:[`back-button-attributes`,`back-button-class`,`back-button-icon-left`,`back-button-icon-right`,`back-button-text`,`back-button-title`,`forward-button-attributes`,`forward-button-class`,`forward-button-icon-left`,`forward-button-icon-right`,`forward-button-text`,`forward-button-title`]},{default:o(()=>[a(f,{steps:t.wizardSteps,"back-button-attributes":{stop:!0},"back-button-class":`a_btn a_btn_warning`,"back-button-icon-left":`ChevronLeft`,"back-button-icon-right":`ChevronLeft`,"back-button-text":`_A_WIZARD_PAGE_BACK_BTN_TEXT_`,"back-button-title":`_A_WIZARD_PAGE_BACK_BTN_TEXT_`,"forward-button-attributes":{stop:!0},"forward-button-class":`a_btn a_btn_primary`,"forward-button-icon-left":`ChevronRight`,"forward-button-icon-right":`ChevronRight`,"forward-button-text":`_A_WIZARD_PAGE_FORWARD_BTN_TEXT_`,"forward-button-title":`_A_WIZARD_PAGE_FORWARD_BTN_TEXT_`},{step1:o(()=>[a(d,{tag:`h3`,text:`_A_WIZARD_STEP_1_`}),s(`p`,null,e(t.text),1)]),step2:o(()=>[a(d,{tag:`h3`,text:`_A_WIZARD_STEP_2_`}),s(`p`,null,e(t.text),1)]),step3:o(()=>[a(d,{tag:`h3`,text:`_A_WIZARD_STEP_3_`}),s(`p`,null,e(t.text),1)]),step4:o(()=>[a(d,{tag:`h3`,text:`_A_WIZARD_STEP_4_`}),s(`p`,null,e(t.text),1)]),_:1},8,[`steps`])]),_:1},8,[`code-html`,`code-js`])}var A=h(O,[[`render`,k]]);function j(){return{codeHtml:`<div
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
</a-wizard>`}}function M(){return{codeJs:`import {
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
};`}}var N={name:`PageWizardButtonsDisabled`,components:{AlohaExample:v,ASwitch:u,ATranslation:f,AWizard:p},setup(){let{codeHtml:e}=j(),{codeJs:t}=M();return{codeHtml:e,codeJs:t,isBackButtonDisabled:i(!0),isBackStepButtonDisabled:i(!0),isForwardButtonDisabled:i(!0),isForwardStepButtonDisabled:i(!0),text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:`step1`,label:`_A_WIZARD_STEP_1_`,title:`_A_WIZARD_STEP_1_`},{slot:`step2`,label:`_A_WIZARD_STEP_2_`,title:`_A_WIZARD_STEP_2_`},{slot:`step3`,label:`_A_WIZARD_STEP_3_`,title:`_A_WIZARD_STEP_3_`},{slot:`step4`,label:`_A_WIZARD_STEP_4_`,title:`_A_WIZARD_STEP_4_`}]}}},P={class:`a_columns a_columns_count_12`},F={class:`a_column a_column_6 a_columns_count_12_touch a_mb_5`};function I(t,i,ee,te,l,u){let d=r(`a-switch`),f=r(`a-translation`),p=r(`a-wizard`),m=r(`aloha-example`);return c(),n(m,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_WIZARD_GROUP_BUTTONS_DISABLED_HEADER_`,description:`_A_WIZARD_GROUP_BUTTONS_DISABLED_DESCRIPTION_`,props:[`is-back-button-disabled`,`is-back-step-button-disabled`,`is-forward-button-disabled`,`is-forward-step-button-disabled`]},{default:o(()=>[s(`div`,P,[s(`div`,F,[a(d,{modelValue:t.isBackButtonDisabled,"onUpdate:modelValue":i[0]||=e=>t.isBackButtonDisabled=e,label:`is-back-button-disabled`},null,8,[`modelValue`]),a(d,{modelValue:t.isBackStepButtonDisabled,"onUpdate:modelValue":i[1]||=e=>t.isBackStepButtonDisabled=e,label:`is-back-step-button-disabled`},null,8,[`modelValue`]),a(d,{modelValue:t.isForwardButtonDisabled,"onUpdate:modelValue":i[2]||=e=>t.isForwardButtonDisabled=e,label:`is-forward-button-disabled`},null,8,[`modelValue`]),a(d,{modelValue:t.isForwardStepButtonDisabled,"onUpdate:modelValue":i[3]||=e=>t.isForwardStepButtonDisabled=e,label:`is-forward-step-button-disabled`},null,8,[`modelValue`])])]),a(p,{steps:t.wizardSteps,"is-back-button-disabled":t.isBackButtonDisabled,"is-back-step-button-disabled":t.isBackStepButtonDisabled,"is-forward-button-disabled":t.isForwardButtonDisabled,"is-forward-step-button-disabled":t.isForwardStepButtonDisabled},{step1:o(()=>[a(f,{tag:`h3`,text:`_A_WIZARD_STEP_1_`}),s(`p`,null,e(t.text),1)]),step2:o(()=>[a(f,{tag:`h3`,text:`_A_WIZARD_STEP_2_`}),s(`p`,null,e(t.text),1)]),step3:o(()=>[a(f,{tag:`h3`,text:`_A_WIZARD_STEP_3_`}),s(`p`,null,e(t.text),1)]),step4:o(()=>[a(f,{tag:`h3`,text:`_A_WIZARD_STEP_4_`}),s(`p`,null,e(t.text),1)]),_:1},8,[`steps`,`is-back-button-disabled`,`is-back-step-button-disabled`,`is-forward-button-disabled`,`is-forward-step-button-disabled`])]),_:1},8,[`code-html`,`code-js`])}var L=h(N,[[`render`,I]]);function R(){return{codeHtml:`<div
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
</a-wizard>`}}function z(){return{codeJs:`import {
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
};`}}var B={name:`PageWizardButtonsHide`,components:{AlohaExample:v,ASwitch:u,ATranslation:f,AWizard:p},setup(){let{codeHtml:e}=R(),{codeJs:t}=z();return{codeHtml:e,codeJs:t,isBackButtonHide:i(!0),isBackFirstButtonHide:i(!0),isForwardButtonHide:i(!1),isForwardLastButtonHide:i(!0),text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:`step1`,label:`_A_WIZARD_STEP_1_`,title:`_A_WIZARD_STEP_1_`},{slot:`step2`,label:`_A_WIZARD_STEP_2_`,title:`_A_WIZARD_STEP_2_`},{slot:`step3`,label:`_A_WIZARD_STEP_3_`,title:`_A_WIZARD_STEP_3_`},{slot:`step4`,label:`_A_WIZARD_STEP_4_`,title:`_A_WIZARD_STEP_4_`}]}}},V={class:`a_columns a_columns_count_12`},H={class:`a_column a_column_6 a_columns_count_12_touch a_mb_5`};function U(t,i,ee,te,l,u){let d=r(`a-switch`),f=r(`a-translation`),p=r(`a-wizard`),m=r(`aloha-example`);return c(),n(m,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_WIZARD_GROUP_BUTTONS_HIDE_HEADER_`,description:`_A_WIZARD_GROUP_BUTTONS_HIDE_DESCRIPTION_`,props:[`is-back-button-hide`,`is-back-first-button-hide`,`is-forward-button-hide`,`is-forward-last-button-hide`]},{default:o(()=>[s(`div`,V,[s(`div`,H,[a(d,{modelValue:t.isBackButtonHide,"onUpdate:modelValue":i[0]||=e=>t.isBackButtonHide=e,label:`is-back-button-hide`},null,8,[`modelValue`]),a(d,{modelValue:t.isBackFirstButtonHide,"onUpdate:modelValue":i[1]||=e=>t.isBackFirstButtonHide=e,label:`is-back-first-button-hide`},null,8,[`modelValue`]),a(d,{modelValue:t.isForwardButtonHide,"onUpdate:modelValue":i[2]||=e=>t.isForwardButtonHide=e,label:`is-forward-button-hide`},null,8,[`modelValue`]),a(d,{modelValue:t.isForwardLastButtonHide,"onUpdate:modelValue":i[3]||=e=>t.isForwardLastButtonHide=e,label:`is-forward-last-button-hide`},null,8,[`modelValue`])])]),a(p,{steps:t.wizardSteps,"is-back-button-hide":t.isBackButtonHide,"is-back-first-button-hide":t.isBackFirstButtonHide,"is-forward-button-hide":t.isForwardButtonHide,"is-forward-last-button-hide":t.isForwardLastButtonHide},{step1:o(()=>[a(f,{tag:`h3`,text:`_A_WIZARD_STEP_1_`}),s(`p`,null,e(t.text),1)]),step2:o(()=>[a(f,{tag:`h3`,text:`_A_WIZARD_STEP_2_`}),s(`p`,null,e(t.text),1)]),step3:o(()=>[a(f,{tag:`h3`,text:`_A_WIZARD_STEP_3_`}),s(`p`,null,e(t.text),1)]),step4:o(()=>[a(f,{tag:`h3`,text:`_A_WIZARD_STEP_4_`}),s(`p`,null,e(t.text),1)]),_:1},8,[`steps`,`is-back-button-hide`,`is-back-first-button-hide`,`is-forward-button-hide`,`is-forward-last-button-hide`])]),_:1},8,[`code-html`,`code-js`])}var W=h(B,[[`render`,U]]);function G(){return{codeHtml:`<div 
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
</a-wizard>`}}function K(){return{codeJs:`import {
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
};`}}var q={name:`PageWizardDemo`,components:{AButton:l,AInput:d,AlohaExample:v,ASelect:g,ASwitch:u,AWizard:p},setup(){let{codeHtml:e}=G(),{codeJs:t}=K(),n=i(`line`),r=i(``),a=i(void 0),o=i(!0),s=[{label:`_A_WIZARD_TYPE_BASIC_`,value:`basic`},{label:`_A_WIZARD_TYPE_ARROWS_`,value:`arrows`},{label:`_A_WIZARD_TYPE_LINE_`,value:`line`},{label:`_A_WIZARD_TYPE_ROUND_`,value:`round`}],c=i([{id:`1`,slot:`step`,label:`Lorem`},{id:`2`,slot:`step`,label:`ipsum`},{id:`3`,slot:`step`,label:`dolor`},{id:`4`,slot:`step`,label:`sit`},{id:`5`,slot:`step`,label:`amet`},{id:`6`,slot:`step`,label:`consectetur`},{id:`7`,slot:`step`,label:`adipiscing`},{id:`8`,slot:`step`,label:`elit`},{id:`9`,slot:`step`,label:`Quisque`},{id:`10`,slot:`step`,label:`nisl`}]);return{addStep:()=>{c.value.push({id:te(`wizard_demo_`),slot:`step`,label:r.value})},codeHtml:e,codeJs:t,deleteStep:()=>{let e=ee(c.value,[`id`,a.value]);c.value.splice(e,1),a.value=void 0},isStepsJustified:o,modelStepId:a,modelStepName:r,modelType:n,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,types:s,wizardSteps:c}}},J={class:`a_columns a_columns_count_12`},Y={class:`a_column a_column_6 a_columns_count_12_touch a_mb_5`},X={class:`a_d_flex a_mt_4`},Z={class:`a_d_flex a_mt_4`};function Q(t,i,ee,te,l,u){let d=r(`a-switch`),f=r(`a-select`),p=r(`a-input`),m=r(`a-button`),h=r(`a-wizard`),g=r(`aloha-example`);return c(),n(g,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_WIZARD_GROUP_DEMO_HEADER_`,description:`_A_WIZARD_GROUP_DEMO_DESCRIPTION_`,props:[`steps`,`type`]},{default:o(()=>[s(`div`,J,[s(`div`,Y,[a(d,{modelValue:t.isStepsJustified,"onUpdate:modelValue":i[0]||=e=>t.isStepsJustified=e,label:`is-steps-justified`},null,8,[`modelValue`]),a(f,{class:`a_mt_4`,modelValue:t.modelType,"onUpdate:modelValue":i[1]||=e=>t.modelType=e,label:`_A_WIZARD_LABEL_TYPE_`,"key-id":`value`,"key-label":`label`,data:t.types,deselectable:!1,"translate-data":!0},null,8,[`modelValue`,`data`]),s(`div`,X,[a(p,{modelValue:t.modelStepName,"onUpdate:modelValue":i[2]||=e=>t.modelStepName=e,label:`_A_WIZARD_STEP_NAME_`,required:!0},null,8,[`modelValue`]),a(m,{class:`a_btn a_btn_primary a_ml_2`,disabled:!t.modelStepName,text:`_A_WIZARD_BTN_ADD_STEP_`,onClick:t.addStep},null,8,[`disabled`,`onClick`])]),s(`div`,Z,[a(f,{modelValue:t.modelStepId,"onUpdate:modelValue":i[3]||=e=>t.modelStepId=e,label:`_A_WIZARD_LABEL_STEPS_`,"key-id":`id`,"key-label":`label`,data:t.wizardSteps,search:!0},null,8,[`modelValue`,`data`]),a(m,{class:`a_btn a_btn_primary a_ml_2`,disabled:!t.modelStepId||t.wizardSteps.length<2,text:`_A_WIZARD_BTN_DELETE_STEP_`,onClick:t.deleteStep},null,8,[`disabled`,`onClick`])])])]),a(h,{"key-id":`id`,"is-steps-justified":t.isStepsJustified,steps:t.wizardSteps,type:t.modelType},{step:o(({step:n})=>[s(`h2`,null,e(n.label),1),s(`p`,null,e(t.text),1)]),_:1},8,[`is-steps-justified`,`steps`,`type`])]),_:1},8,[`code-html`,`code-js`])}var ne=h(q,[[`render`,Q]]);function re(){return{codeHtml:`<div
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
</a-wizard>`}}function ie(){return{codeJs:`import {
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
};`}}var ae={name:`PageWizardHasFocusJump`,components:{AlohaExample:v,ASwitch:u,ATranslation:f,AWizard:p},setup(){let{codeHtml:e}=re(),{codeJs:t}=ie();return{codeHtml:e,codeJs:t,hasFocusJump:i(!1),text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:`step1`,label:`_A_WIZARD_STEP_1_`,title:`_A_WIZARD_STEP_1_`},{slot:`step2`,label:`_A_WIZARD_STEP_2_`,title:`_A_WIZARD_STEP_2_`},{slot:`step3`,label:`_A_WIZARD_STEP_3_`,title:`_A_WIZARD_STEP_3_`},{slot:`step4`,label:`_A_WIZARD_STEP_4_`,title:`_A_WIZARD_STEP_4_`}]}}},oe={class:`a_columns a_columns_count_12`},se={class:`a_column a_column_6 a_columns_count_12_touch a_mb_5`};function ce(t,i,ee,te,l,u){let d=r(`a-switch`),f=r(`a-translation`),p=r(`a-wizard`),m=r(`aloha-example`);return c(),n(m,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_WIZARD_GROUP_HAS_FOCUS_JUMP_HEADER_`,description:`_A_WIZARD_GROUP_HAS_FOCUS_JUMP_DESCRIPTION_`,props:[`has-focus-jump`]},{default:o(()=>[s(`div`,oe,[s(`div`,se,[a(d,{modelValue:t.hasFocusJump,"onUpdate:modelValue":i[0]||=e=>t.hasFocusJump=e,label:`has-focus-jump`},null,8,[`modelValue`])])]),a(p,{steps:t.wizardSteps,"has-focus-jump":t.hasFocusJump},{step1:o(()=>[a(f,{tag:`h3`,text:`_A_WIZARD_STEP_1_`}),s(`p`,null,e(t.text),1)]),step2:o(()=>[a(f,{tag:`h3`,text:`_A_WIZARD_STEP_2_`}),s(`p`,null,e(t.text),1)]),step3:o(()=>[a(f,{tag:`h3`,text:`_A_WIZARD_STEP_3_`}),s(`p`,null,e(t.text),1)]),step4:o(()=>[a(f,{tag:`h3`,text:`_A_WIZARD_STEP_4_`}),s(`p`,null,e(t.text),1)]),_:1},8,[`steps`,`has-focus-jump`])]),_:1},8,[`code-html`,`code-js`])}var le=h(ae,[[`render`,ce]]);function ue(){return{codeHtml:`<h3 class="a_my_3">type="basic"</h3>
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
</a-wizard>`}}function de(){return{codeJs:`import {
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
};`}}var fe={name:`PageWizardIcon`,components:{AlohaExample:v,ATranslation:f,AWizard:p},setup(){let{codeHtml:e}=ue(),{codeJs:t}=de();return{codeHtml:e,codeJs:t,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:`step1`,label:`_A_WIZARD_STEP_1_`,title:`_A_WIZARD_STEP_1_`,icon:`Gear`},{slot:`step2`,label:`_A_WIZARD_STEP_2_`,title:`_A_WIZARD_STEP_2_`,icon:`Boxes`},{slot:`step3`,label:`_A_WIZARD_STEP_3_`,title:`_A_WIZARD_STEP_3_`},{slot:`step4`,label:`_A_WIZARD_STEP_4_`,title:`_A_WIZARD_STEP_4_`}]}}};function pe(t,i,ee,te,l,u){let d=r(`a-translation`),f=r(`a-wizard`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_WIZARD_GROUP_ICON_HEADER_`,description:`_A_WIZARD_GROUP_ICON_DESCRIPTION_`,props:`steps.icon`},{default:o(()=>[i[0]||=s(`h3`,{class:`a_my_3`},`type="basic"`,-1),a(f,{steps:t.wizardSteps,type:`basic`},{step1:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_1_`}),s(`p`,null,e(t.text),1)]),step2:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_2_`}),s(`p`,null,e(t.text),1)]),step3:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_3_`}),s(`p`,null,e(t.text),1)]),step4:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_4_`}),s(`p`,null,e(t.text),1)]),_:1},8,[`steps`]),i[1]||=s(`h3`,{class:`a_my_3`},`type="line"`,-1),a(f,{steps:t.wizardSteps,type:`line`},{step1:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_1_`}),s(`p`,null,e(t.text),1)]),step2:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_2_`}),s(`p`,null,e(t.text),1)]),step3:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_3_`}),s(`p`,null,e(t.text),1)]),step4:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_4_`}),s(`p`,null,e(t.text),1)]),_:1},8,[`steps`]),i[2]||=s(`h3`,{class:`a_my_3`},`type="round"`,-1),a(f,{steps:t.wizardSteps,type:`round`},{step1:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_1_`}),s(`p`,null,e(t.text),1)]),step2:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_2_`}),s(`p`,null,e(t.text),1)]),step3:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_3_`}),s(`p`,null,e(t.text),1)]),step4:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_4_`}),s(`p`,null,e(t.text),1)]),_:1},8,[`steps`]),i[3]||=s(`h3`,{class:`a_my_3`},`type="arrows"`,-1),a(f,{steps:t.wizardSteps,type:`arrows`},{step1:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_1_`}),s(`p`,null,e(t.text),1)]),step2:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_2_`}),s(`p`,null,e(t.text),1)]),step3:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_3_`}),s(`p`,null,e(t.text),1)]),step4:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_4_`}),s(`p`,null,e(t.text),1)]),_:1},8,[`steps`])]),_:1},8,[`code-html`,`code-js`])}var me=h(fe,[[`render`,pe]]);function he(){return{codeHtml:`<div
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
</a-wizard>`}}function ge(){return{codeJs:`import {
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
};`}}var _e={name:`PageWizardIsButtonsLoading`,components:{AlohaExample:v,ASwitch:u,ATranslation:f,AWizard:p},setup(){let{codeHtml:e}=he(),{codeJs:t}=ge();return{codeHtml:e,codeJs:t,isButtonsLoading:i(!1),text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:`step1`,label:`_A_WIZARD_STEP_1_`,title:`_A_WIZARD_STEP_1_`},{slot:`step2`,label:`_A_WIZARD_STEP_2_`,title:`_A_WIZARD_STEP_2_`},{slot:`step3`,label:`_A_WIZARD_STEP_3_`,title:`_A_WIZARD_STEP_3_`},{slot:`step4`,label:`_A_WIZARD_STEP_4_`,title:`_A_WIZARD_STEP_4_`}]}}},ve={class:`a_columns a_columns_count_12`},ye={class:`a_column a_column_6 a_columns_count_12_touch a_mb_5`};function be(t,i,ee,te,l,u){let d=r(`a-switch`),f=r(`a-translation`),p=r(`a-wizard`),m=r(`aloha-example`);return c(),n(m,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_WIZARD_GROUP_IS_BUTTONS_LOADING_HEADER_`,description:`_A_WIZARD_GROUP_IS_BUTTONS_LOADING_DESCRIPTION_`,props:[`is-buttons-loading`]},{default:o(()=>[s(`div`,ve,[s(`div`,ye,[a(d,{modelValue:t.isButtonsLoading,"onUpdate:modelValue":i[0]||=e=>t.isButtonsLoading=e,label:`is-buttons-loading`},null,8,[`modelValue`])])]),a(p,{steps:t.wizardSteps,"is-buttons-loading":t.isButtonsLoading},{step1:o(()=>[a(f,{tag:`h3`,text:`_A_WIZARD_STEP_1_`}),s(`p`,null,e(t.text),1)]),step2:o(()=>[a(f,{tag:`h3`,text:`_A_WIZARD_STEP_2_`}),s(`p`,null,e(t.text),1)]),step3:o(()=>[a(f,{tag:`h3`,text:`_A_WIZARD_STEP_3_`}),s(`p`,null,e(t.text),1)]),step4:o(()=>[a(f,{tag:`h3`,text:`_A_WIZARD_STEP_4_`}),s(`p`,null,e(t.text),1)]),_:1},8,[`steps`,`is-buttons-loading`])]),_:1},8,[`code-html`,`code-js`])}var xe=h(_e,[[`render`,be]]);function Se(){return{codeHtml:`<a-wizard
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
</a-wizard>`}}function Ce(){return{codeJs:`import {
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
};`}}var we={name:`PageWizardIsControlOutside`,components:{AlohaExample:v,ATranslation:f,AWizard:p},setup(){let{codeHtml:e}=Se(),{codeJs:t}=Ce(),n=i(0),r=i({0:!0});return{codeHtml:e,codeJs:t,goStepBack:({targetStepIndex:e,currentStepIndex:t,step:i})=>{console.log(`currentStepIndex`,t),console.log(`step`,i),n.value=e,r.value[e]=!0},goStepForward:({targetStepIndex:e,currentStepIndex:t,step:i})=>{console.log(`currentStepIndex`,t),console.log(`step`,i),n.value=e,r.value[e]=!0},stepActive:n,stepsVisited:r,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:`step1`,label:`_A_WIZARD_STEP_1_`,title:`_A_WIZARD_STEP_1_`},{slot:`step2`,label:`_A_WIZARD_STEP_2_`,title:`_A_WIZARD_STEP_2_`},{slot:`step3`,label:`_A_WIZARD_STEP_3_`,title:`_A_WIZARD_STEP_3_`},{slot:`step4`,label:`_A_WIZARD_STEP_4_`,title:`_A_WIZARD_STEP_4_`}]}}};function Te(t,i,ee,te,l,u){let d=r(`a-translation`),f=r(`a-wizard`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_WIZARD_GROUP_IS_CONTROL_OUTSIDE_HEADER_`,description:`_A_WIZARD_GROUP_IS_CONTROL_OUTSIDE_DESCRIPTION_`,props:[`is-control-outside`,`step-active`,`steps-visited`],emits:[`go-step-back`,`go-step-forward`]},{default:o(()=>[a(f,{steps:t.wizardSteps,"is-control-outside":!0,"step-active":t.stepActive,"steps-visited":t.stepsVisited,onGoStepBack:t.goStepBack,onGoStepForward:t.goStepForward},{step1:o(()=>[a(d,{tag:`h3`,text:`_A_WIZARD_STEP_1_`}),s(`p`,null,e(t.text),1)]),step2:o(()=>[a(d,{tag:`h3`,text:`_A_WIZARD_STEP_2_`}),s(`p`,null,e(t.text),1)]),step3:o(()=>[a(d,{tag:`h3`,text:`_A_WIZARD_STEP_3_`}),s(`p`,null,e(t.text),1)]),step4:o(()=>[a(d,{tag:`h3`,text:`_A_WIZARD_STEP_4_`}),s(`p`,null,e(t.text),1)]),_:1},8,[`steps`,`step-active`,`steps-visited`,`onGoStepBack`,`onGoStepForward`])]),_:1},8,[`code-html`,`code-js`])}var Ee=h(we,[[`render`,Te]]);function De(){return{codeHtml:`<div
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
</a-wizard>`}}function Oe(){return{codeJs:`import {
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
};`}}var ke={name:`PageWizardIsStepNumberVisible`,components:{AlohaExample:v,ASwitch:u,ATranslation:f,AWizard:p},setup(){let{codeHtml:e}=De(),{codeJs:t}=Oe();return{codeHtml:e,codeJs:t,isStepNumberVisible:i(!1),text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:`step1`,label:`_A_WIZARD_STEP_1_`,title:`_A_WIZARD_STEP_1_`},{slot:`step2`,label:`_A_WIZARD_STEP_2_`,title:`_A_WIZARD_STEP_2_`},{slot:`step3`,label:`_A_WIZARD_STEP_3_`,title:`_A_WIZARD_STEP_3_`},{slot:`step4`,label:`_A_WIZARD_STEP_4_`,title:`_A_WIZARD_STEP_4_`}]}}},Ae={class:`a_columns a_columns_count_12`},je={class:`a_column a_column_6 a_columns_count_12_touch a_mb_5`};function Me(t,i,ee,te,l,u){let d=r(`a-switch`),f=r(`a-translation`),p=r(`a-wizard`),m=r(`aloha-example`);return c(),n(m,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_WIZARD_GROUP_IS_STEP_NUMBER_VISIBLE_HEADER_`,description:`_A_WIZARD_GROUP_IS_STEP_NUMBER_VISIBLE_DESCRIPTION_`,props:[`is-step-number-visible`]},{default:o(()=>[s(`div`,Ae,[s(`div`,je,[a(d,{modelValue:t.isStepNumberVisible,"onUpdate:modelValue":i[0]||=e=>t.isStepNumberVisible=e,label:`is-step-number-visible`},null,8,[`modelValue`])])]),a(p,{steps:t.wizardSteps,"is-step-number-visible":t.isStepNumberVisible},{step1:o(()=>[a(f,{tag:`h3`,text:`_A_WIZARD_STEP_1_`}),s(`p`,null,e(t.text),1)]),step2:o(()=>[a(f,{tag:`h3`,text:`_A_WIZARD_STEP_2_`}),s(`p`,null,e(t.text),1)]),step3:o(()=>[a(f,{tag:`h3`,text:`_A_WIZARD_STEP_3_`}),s(`p`,null,e(t.text),1)]),step4:o(()=>[a(f,{tag:`h3`,text:`_A_WIZARD_STEP_4_`}),s(`p`,null,e(t.text),1)]),_:1},8,[`steps`,`is-step-number-visible`])]),_:1},8,[`code-html`,`code-js`])}var Ne=h(ke,[[`render`,Me]]);function Pe(){return{codeHtml:`<div
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
</a-wizard>`}}function Fe(){return{codeJs:`import {
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
};`}}var Ie={name:`PageWizardIsStepsJustified`,components:{AlohaExample:v,ASwitch:u,ATranslation:f,AWizard:p},setup(){let{codeHtml:e}=Pe(),{codeJs:t}=Fe();return{codeHtml:e,codeJs:t,isStepsJustified:i(!1),text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:`step1`,label:`_A_WIZARD_STEP_1_`,title:`_A_WIZARD_STEP_1_`},{slot:`step2`,label:`_A_WIZARD_STEP_2_`,title:`_A_WIZARD_STEP_2_`},{slot:`step3`,label:`_A_WIZARD_STEP_3_`,title:`_A_WIZARD_STEP_3_`},{slot:`step4`,label:`_A_WIZARD_STEP_4_`,title:`_A_WIZARD_STEP_4_`}]}}},Le={class:`a_columns a_columns_count_12`},Re={class:`a_column a_column_6 a_columns_count_12_touch a_mb_5`};function ze(t,i,ee,te,l,u){let d=r(`a-switch`),f=r(`a-translation`),p=r(`a-wizard`),m=r(`aloha-example`);return c(),n(m,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_WIZARD_GROUP_IS_STEPS_JUSTIFIED_HEADER_`,description:`_A_WIZARD_GROUP_IS_STEPS_JUSTIFIED_DESCRIPTION_`,props:[`is-steps-justified`]},{default:o(()=>[s(`div`,Le,[s(`div`,Re,[a(d,{modelValue:t.isStepsJustified,"onUpdate:modelValue":i[0]||=e=>t.isStepsJustified=e,label:`is-steps-justified`},null,8,[`modelValue`])])]),a(p,{steps:t.wizardSteps,"is-steps-justified":t.isStepsJustified},{step1:o(()=>[a(f,{tag:`h3`,text:`_A_WIZARD_STEP_1_`}),s(`p`,null,e(t.text),1)]),step2:o(()=>[a(f,{tag:`h3`,text:`_A_WIZARD_STEP_2_`}),s(`p`,null,e(t.text),1)]),step3:o(()=>[a(f,{tag:`h3`,text:`_A_WIZARD_STEP_3_`}),s(`p`,null,e(t.text),1)]),step4:o(()=>[a(f,{tag:`h3`,text:`_A_WIZARD_STEP_4_`}),s(`p`,null,e(t.text),1)]),_:1},8,[`steps`,`is-steps-justified`])]),_:1},8,[`code-html`,`code-js`])}var Be=h(Ie,[[`render`,ze]]);function Ve(){return{codeHtml:`<div
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
</a-wizard>`}}function He(){return{codeJs:`import {
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
};`}}var Ue={name:`PageWizardIsToolbar`,components:{AlohaExample:v,ASwitch:u,ATranslation:f,AWizard:p},setup(){let{codeHtml:e}=Ve(),{codeJs:t}=He();return{codeHtml:e,codeJs:t,isToolbarBottom:i(!0),isToolbarTop:i(!0),text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:`step1`,label:`_A_WIZARD_STEP_1_`,title:`_A_WIZARD_STEP_1_`},{slot:`step2`,label:`_A_WIZARD_STEP_2_`,title:`_A_WIZARD_STEP_2_`},{slot:`step3`,label:`_A_WIZARD_STEP_3_`,title:`_A_WIZARD_STEP_3_`},{slot:`step4`,label:`_A_WIZARD_STEP_4_`,title:`_A_WIZARD_STEP_4_`}]}}},We={class:`a_columns a_columns_count_12`},Ge={class:`a_column a_column_6 a_columns_count_12_touch a_mb_5`};function Ke(t,i,ee,te,l,u){let d=r(`a-switch`),f=r(`a-translation`),p=r(`a-wizard`),m=r(`aloha-example`);return c(),n(m,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_WIZARD_GROUP_IS_TOOLBAR_HEADER_`,description:`_A_WIZARD_GROUP_IS_TOOLBAR_DESCRIPTION_`,props:[`is-toolbar-bottom`,`is-toolbar-top`]},{default:o(()=>[s(`div`,We,[s(`div`,Ge,[a(d,{modelValue:t.isToolbarBottom,"onUpdate:modelValue":i[0]||=e=>t.isToolbarBottom=e,label:`is-toolbar-bottom`},null,8,[`modelValue`]),a(d,{modelValue:t.isToolbarTop,"onUpdate:modelValue":i[1]||=e=>t.isToolbarTop=e,label:`is-toolbar-top`},null,8,[`modelValue`])])]),a(p,{steps:t.wizardSteps,"is-toolbar-bottom":t.isToolbarBottom,"is-toolbar-top":t.isToolbarTop},{step1:o(()=>[a(f,{tag:`h3`,text:`_A_WIZARD_STEP_1_`}),s(`p`,null,e(t.text),1)]),step2:o(()=>[a(f,{tag:`h3`,text:`_A_WIZARD_STEP_2_`}),s(`p`,null,e(t.text),1)]),step3:o(()=>[a(f,{tag:`h3`,text:`_A_WIZARD_STEP_3_`}),s(`p`,null,e(t.text),1)]),step4:o(()=>[a(f,{tag:`h3`,text:`_A_WIZARD_STEP_4_`}),s(`p`,null,e(t.text),1)]),_:1},8,[`steps`,`is-toolbar-bottom`,`is-toolbar-top`])]),_:1},8,[`code-html`,`code-js`])}var qe=h(Ue,[[`render`,Ke]]);function Je(){return{codeHtml:`<a-wizard
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
</a-wizard>`}}function Ye(){return{codeJs:`import {
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
};`}}var Xe={name:`PageWizardKeyId`,components:{AlohaExample:v,ATranslation:f,AWizard:p},setup(){let{codeHtml:e}=Je(),{codeJs:t}=Ye();return{codeHtml:e,codeJs:t,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{id:`0`,slot:`step1`,label:`_A_WIZARD_STEP_1_`,title:`_A_WIZARD_STEP_1_`},{id:`1`,slot:`step2`,label:`_A_WIZARD_STEP_2_`,title:`_A_WIZARD_STEP_2_`},{id:`2`,slot:`step3`,label:`_A_WIZARD_STEP_3_`,title:`_A_WIZARD_STEP_3_`},{id:`3`,slot:`step4`,label:`_A_WIZARD_STEP_4_`,title:`_A_WIZARD_STEP_4_`}]}}};function Ze(t,i,ee,te,l,u){let d=r(`a-translation`),f=r(`a-wizard`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_WIZARD_GROUP_KEY_ID_HEADER_`,description:`_A_WIZARD_GROUP_KEY_ID_DESCRIPTION_`,props:[`key-id`]},{default:o(()=>[a(f,{steps:t.wizardSteps,"key-id":`id`},{step1:o(()=>[a(d,{tag:`h3`,text:`_A_WIZARD_STEP_1_`}),s(`p`,null,e(t.text),1)]),step2:o(()=>[a(d,{tag:`h3`,text:`_A_WIZARD_STEP_2_`}),s(`p`,null,e(t.text),1)]),step3:o(()=>[a(d,{tag:`h3`,text:`_A_WIZARD_STEP_3_`}),s(`p`,null,e(t.text),1)]),step4:o(()=>[a(d,{tag:`h3`,text:`_A_WIZARD_STEP_4_`}),s(`p`,null,e(t.text),1)]),_:1},8,[`steps`])]),_:1},8,[`code-html`,`code-js`])}var Qe=h(Xe,[[`render`,Ze]]);function $e(){return{codeHtml:`<div
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
</a-wizard>`}}function et(){return{codeJs:`import {
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
};`}}var tt={name:`PageWizardShowOnlyActiveStepMobile`,components:{AlohaExample:v,ASelect:g,ASwitch:u,AWizard:p},setup(){let{codeHtml:e}=$e(),{codeJs:t}=et(),n=i(!0);return{codeHtml:e,codeJs:t,modelType:i(`line`),showOnlyActiveStepMobile:n,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,types:[{label:`_A_WIZARD_TYPE_BASIC_`,value:`basic`},{label:`_A_WIZARD_TYPE_ARROWS_`,value:`arrows`},{label:`_A_WIZARD_TYPE_LINE_`,value:`line`},{label:`_A_WIZARD_TYPE_ROUND_`,value:`round`}],wizardSteps:[{id:`1`,slot:`step`,label:`Lorem`},{id:`2`,slot:`step`,label:`ipsum`},{id:`3`,slot:`step`,label:`dolor`},{id:`4`,slot:`step`,label:`sit`},{id:`5`,slot:`step`,label:`amet`},{id:`6`,slot:`step`,label:`consectetur`},{id:`7`,slot:`step`,label:`adipiscing`},{id:`8`,slot:`step`,label:`elit`},{id:`9`,slot:`step`,label:`Quisque`},{id:`10`,slot:`step`,label:`nisl`}]}}},nt={class:`a_columns a_columns_count_12`},rt={class:`a_column a_column_6 a_columns_count_12_touch a_mb_5`};function it(t,i,ee,te,l,u){let d=r(`a-switch`),f=r(`a-select`),p=r(`a-wizard`),m=r(`aloha-example`);return c(),n(m,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_WIZARD_GROUP_SHOW_ONLY_ACTIVE_STEP_MOBILE_HEADER_`,description:`_A_WIZARD_GROUP_SHOW_ONLY_ACTIVE_STEP_MOBILE_DESCRIPTION_`,props:[`show-only-active-step-mobile`,`is-mobile`]},{default:o(()=>[s(`div`,nt,[s(`div`,rt,[a(d,{modelValue:t.showOnlyActiveStepMobile,"onUpdate:modelValue":i[0]||=e=>t.showOnlyActiveStepMobile=e,label:`show-only-active-step-mobile`},null,8,[`modelValue`]),a(f,{class:`a_mt_4`,modelValue:t.modelType,"onUpdate:modelValue":i[1]||=e=>t.modelType=e,label:`_A_WIZARD_LABEL_TYPE_`,"key-id":`value`,"key-label":`label`,data:t.types,deselectable:!1,"translate-data":!0},null,8,[`modelValue`,`data`])])]),a(p,{steps:t.wizardSteps,"is-mobile":!0,"show-only-active-step-mobile":t.showOnlyActiveStepMobile,type:t.modelType},{step:o(({step:n})=>[s(`h2`,null,e(n.label),1),s(`p`,null,e(t.text),1)]),_:1},8,[`steps`,`show-only-active-step-mobile`,`type`])]),_:1},8,[`code-html`,`code-js`])}var at=h(tt,[[`render`,it]]);function ot(){return{codeHtml:`<a-wizard
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
</a-wizard>`}}function st(){return{codeJs:`import {
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
};`}}var ct={name:`PageWizardSlot`,components:{AlohaExample:v,ATranslation:f,AWizard:p},setup(){let{codeHtml:e}=ot(),{codeJs:t}=st();return{codeHtml:e,codeJs:t,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:`step`,label:`_A_WIZARD_STEP_1_`,title:`_A_WIZARD_STEP_1_`},{slot:`step`,label:`_A_WIZARD_STEP_2_`,title:`_A_WIZARD_STEP_2_`},{slot:`step`,label:`_A_WIZARD_STEP_3_`,title:`_A_WIZARD_STEP_3_`},{slot:`step4`,label:`_A_WIZARD_STEP_4_`,title:`_A_WIZARD_STEP_4_`}]}}};function lt(t,i,ee,te,l,u){let d=r(`a-translation`),f=r(`a-wizard`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_WIZARD_GROUP_SLOT_HEADER_`,description:`_A_WIZARD_GROUP_SLOT_DESCRIPTION_`,slots:[`slot`],props:`steps.slot`},{default:o(()=>[a(f,{steps:t.wizardSteps},{step:o(({step:n,stepIndex:r})=>[a(d,{tag:`h3`,text:n.label},null,8,[`text`]),s(`p`,null,e(t.text),1)]),step4:o(()=>[i[0]||=s(`h2`,null,`ALOHA`,-1),s(`p`,null,e(t.text),1)]),_:1},8,[`steps`])]),_:1},8,[`code-html`,`code-js`])}var ut=h(ct,[[`render`,lt]]);function dt(){return{codeHtml:`<a-wizard
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
</a-wizard>`}}function ft(){return{codeJs:`import {
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
};`}}var pt={name:`PageWizardSlotLabel`,components:{AlohaExample:v,ATranslation:f,AWizard:p},setup(){let{codeHtml:e}=dt(),{codeJs:t}=ft();return{codeHtml:e,codeJs:t,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:`step1`,slotLabel:`stepLabel`,label:`_A_WIZARD_STEP_1_`,title:`_A_WIZARD_STEP_1_`},{slotLabel:`stepLabel`,slot:`step2`,label:`_A_WIZARD_STEP_2_`,title:`_A_WIZARD_STEP_2_`},{slotLabel:`stepLabel`,slot:`step3`,label:`_A_WIZARD_STEP_3_`,title:`_A_WIZARD_STEP_3_`},{slotLabel:`stepLabel4`,slot:`step4`,label:`_A_WIZARD_STEP_4_`,title:`_A_WIZARD_STEP_4_`}]}}};function mt(t,i,ee,te,l,u){let d=r(`a-translation`),f=r(`a-wizard`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_WIZARD_GROUP_SLOT_LABEL_HEADER_`,description:`_A_WIZARD_GROUP_SLOT_LABEL_DESCRIPTION_`,slots:[`slotLabel`],props:`steps.slotLabel`},{default:o(()=>[a(f,{steps:t.wizardSteps},{stepLabel:o(({step:e,stepNumber:t,stepIndex:n,isStepDisabled:r,isStepActive:i})=>[a(d,{tag:`span`,text:e.label},null,8,[`text`])]),stepLabel4:o(()=>[...i[0]||=[s(`span`,null,`ALOHA`,-1)]]),step1:o(()=>[a(d,{tag:`h3`,text:`_A_WIZARD_STEP_1_`}),s(`p`,null,e(t.text),1)]),step2:o(()=>[a(d,{tag:`h3`,text:`_A_WIZARD_STEP_2_`}),s(`p`,null,e(t.text),1)]),step3:o(()=>[a(d,{tag:`h3`,text:`_A_WIZARD_STEP_3_`}),s(`p`,null,e(t.text),1)]),step4:o(()=>[a(d,{tag:`h3`,text:`_A_WIZARD_STEP_4_`}),s(`p`,null,e(t.text),1)]),_:1},8,[`steps`])]),_:1},8,[`code-html`,`code-js`])}var ht=h(pt,[[`render`,mt]]);function gt(){return{codeHtml:`<a-wizard
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
</a-wizard>`}}function _t(){return{codeJs:`import {
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
};`}}var vt={name:`PageWizardSlotToolbar`,components:{AButton:l,AlohaExample:v,ATranslation:f,AWizard:p},setup(){let{codeHtml:e}=gt(),{codeJs:t}=_t();return{codeHtml:e,codeJs:t,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:`step1`,label:`_A_WIZARD_STEP_1_`,title:`_A_WIZARD_STEP_1_`},{slot:`step2`,label:`_A_WIZARD_STEP_2_`,title:`_A_WIZARD_STEP_2_`},{slot:`step3`,label:`_A_WIZARD_STEP_3_`,title:`_A_WIZARD_STEP_3_`},{slot:`step4`,label:`_A_WIZARD_STEP_4_`,title:`_A_WIZARD_STEP_4_`}]}}};function yt(t,i,ee,te,l,u){let d=r(`a-button`),f=r(`a-translation`),p=r(`a-wizard`),m=r(`aloha-example`);return c(),n(m,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_WIZARD_GROUP_SLOT_TOOLBAR_HEADER_`,description:`_A_WIZARD_GROUP_SLOT_TOOLBAR_DESCRIPTION_`,slots:[`toolbar`]},{default:o(()=>[a(p,{steps:t.wizardSteps},{toolbar:o(()=>[a(d,{class:`a_btn a_btn_primary`,text:`aloha`})]),step1:o(()=>[a(f,{tag:`h3`,text:`_A_WIZARD_STEP_1_`}),s(`p`,null,e(t.text),1)]),step2:o(()=>[a(f,{tag:`h3`,text:`_A_WIZARD_STEP_2_`}),s(`p`,null,e(t.text),1)]),step3:o(()=>[a(f,{tag:`h3`,text:`_A_WIZARD_STEP_3_`}),s(`p`,null,e(t.text),1)]),step4:o(()=>[a(f,{tag:`h3`,text:`_A_WIZARD_STEP_4_`}),s(`p`,null,e(t.text),1)]),_:1},8,[`steps`])]),_:1},8,[`code-html`,`code-js`])}var bt=h(vt,[[`render`,yt]]);function xt(){return{codeHtml:`<a-wizard
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
</a-wizard>`}}function St(){return{codeJs:`import {
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
};`}}var Ct={name:`PageWizardStepActive`,components:{AlohaExample:v,ATranslation:f,AWizard:p},setup(){let{codeHtml:e}=xt(),{codeJs:t}=St();return{codeHtml:e,codeJs:t,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:`step1`,label:`_A_WIZARD_STEP_1_`,title:`_A_WIZARD_STEP_1_`},{slot:`step2`,label:`_A_WIZARD_STEP_2_`,title:`_A_WIZARD_STEP_2_`},{slot:`step3`,label:`_A_WIZARD_STEP_3_`,title:`_A_WIZARD_STEP_3_`},{slot:`step4`,label:`_A_WIZARD_STEP_4_`,title:`_A_WIZARD_STEP_4_`}]}}};function wt(t,i,ee,te,l,u){let d=r(`a-translation`),f=r(`a-wizard`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_WIZARD_GROUP_STEP_ACTIVE_HEADER_`,description:`_A_WIZARD_GROUP_STEP_ACTIVE_DESCRIPTION_`,props:[`step-active`]},{default:o(()=>[a(f,{steps:t.wizardSteps,"step-active":2},{step1:o(()=>[a(d,{tag:`h3`,text:`_A_WIZARD_STEP_1_`}),s(`p`,null,e(t.text),1)]),step2:o(()=>[a(d,{tag:`h3`,text:`_A_WIZARD_STEP_2_`}),s(`p`,null,e(t.text),1)]),step3:o(()=>[a(d,{tag:`h3`,text:`_A_WIZARD_STEP_3_`}),s(`p`,null,e(t.text),1)]),step4:o(()=>[a(d,{tag:`h3`,text:`_A_WIZARD_STEP_4_`}),s(`p`,null,e(t.text),1)]),_:1},8,[`steps`])]),_:1},8,[`code-html`,`code-js`])}var Tt=h(Ct,[[`render`,wt]]);function Et(){return{codeHtml:`<div
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
</a-wizard>`}}function Dt(){return{codeJs:`import {
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
};`}}var Ot={name:`PageWizardStepsErrors`,components:{AlohaExample:v,ASelect:g,ASwitch:u,ATranslation:f,AWizard:p},setup(){let{codeHtml:e}=Et(),{codeJs:t}=Dt();return{codeHtml:e,codeJs:t,modelType:i(`basic`),text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,types:[{label:`_A_WIZARD_TYPE_BASIC_`,value:`basic`},{label:`_A_WIZARD_TYPE_ARROWS_`,value:`arrows`},{label:`_A_WIZARD_TYPE_LINE_`,value:`line`},{label:`_A_WIZARD_TYPE_ROUND_`,value:`round`}],wizardSteps:i([{slot:`step1`,label:`_A_WIZARD_STEP_1_`,title:`_A_WIZARD_STEP_1_`,error:!1},{slot:`step2`,label:`_A_WIZARD_STEP_2_`,title:`_A_WIZARD_STEP_2_`,error:!1},{slot:`step3`,label:`_A_WIZARD_STEP_3_`,title:`_A_WIZARD_STEP_3_`,error:!0},{slot:`step4`,label:`_A_WIZARD_STEP_4_`,title:`_A_WIZARD_STEP_4_`,error:!1}])}}},kt={class:`a_columns a_columns_count_12`},At={class:`a_column a_column_6 a_columns_count_12_touch a_mb_5`};function jt(t,i,ee,te,l,u){let d=r(`a-select`),f=r(`a-switch`),p=r(`a-translation`),m=r(`a-wizard`),h=r(`aloha-example`);return c(),n(h,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_WIZARD_GROUP_STEPS_ERRORS_HEADER_`,description:`_A_WIZARD_GROUP_STEPS_ERRORS_DESCRIPTION_`,props:`steps.error`},{default:o(()=>[s(`div`,kt,[s(`div`,At,[a(d,{modelValue:t.modelType,"onUpdate:modelValue":i[0]||=e=>t.modelType=e,label:`_A_WIZARD_LABEL_TYPE_`,"key-id":`value`,"key-label":`label`,data:t.types,deselectable:!1,"translate-data":!0},null,8,[`modelValue`,`data`]),a(f,{modelValue:t.wizardSteps[0].error,"onUpdate:modelValue":i[1]||=e=>t.wizardSteps[0].error=e,label:`_A_WIZARD_STEP_1_`},null,8,[`modelValue`]),a(f,{modelValue:t.wizardSteps[1].error,"onUpdate:modelValue":i[2]||=e=>t.wizardSteps[1].error=e,label:`_A_WIZARD_STEP_2_`},null,8,[`modelValue`]),a(f,{modelValue:t.wizardSteps[2].error,"onUpdate:modelValue":i[3]||=e=>t.wizardSteps[2].error=e,label:`_A_WIZARD_STEP_3_`},null,8,[`modelValue`]),a(f,{modelValue:t.wizardSteps[3].error,"onUpdate:modelValue":i[4]||=e=>t.wizardSteps[3].error=e,label:`_A_WIZARD_STEP_4_`},null,8,[`modelValue`])])]),a(m,{steps:t.wizardSteps,type:t.modelType},{step1:o(()=>[a(p,{tag:`h3`,text:`_A_WIZARD_STEP_1_`}),s(`p`,null,e(t.text),1)]),step2:o(()=>[a(p,{tag:`h3`,text:`_A_WIZARD_STEP_2_`}),s(`p`,null,e(t.text),1)]),step3:o(()=>[a(p,{tag:`h3`,text:`_A_WIZARD_STEP_3_`}),s(`p`,null,e(t.text),1)]),step4:o(()=>[a(p,{tag:`h3`,text:`_A_WIZARD_STEP_4_`}),s(`p`,null,e(t.text),1)]),_:1},8,[`steps`,`type`])]),_:1},8,[`code-html`,`code-js`])}var Mt=h(Ot,[[`render`,jt]]);function Nt(){return{codeHtml:`<div
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
</a-wizard>`}}function Pt(){return{codeJs:`import {
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
};`}}var Ft={name:`PageWizardStepsWarnings`,components:{AlohaExample:v,ASelect:g,ASwitch:u,ATranslation:f,AWizard:p},setup(){let{codeHtml:e}=Nt(),{codeJs:t}=Pt();return{codeHtml:e,codeJs:t,modelType:i(`basic`),text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,types:[{label:`_A_WIZARD_TYPE_BASIC_`,value:`basic`},{label:`_A_WIZARD_TYPE_ARROWS_`,value:`arrows`},{label:`_A_WIZARD_TYPE_LINE_`,value:`line`},{label:`_A_WIZARD_TYPE_ROUND_`,value:`round`}],wizardSteps:i([{slot:`step1`,label:`_A_WIZARD_STEP_1_`,title:`_A_WIZARD_STEP_1_`,warning:!1},{slot:`step2`,label:`_A_WIZARD_STEP_2_`,title:`_A_WIZARD_STEP_2_`,warning:!1},{slot:`step3`,label:`_A_WIZARD_STEP_3_`,title:`_A_WIZARD_STEP_3_`,warning:!0},{slot:`step4`,label:`_A_WIZARD_STEP_4_`,title:`_A_WIZARD_STEP_4_`,warning:!1}])}}},It={class:`a_columns a_columns_count_12`},Lt={class:`a_column a_column_6 a_columns_count_12_touch a_mb_5`};function Rt(t,i,ee,te,l,u){let d=r(`a-select`),f=r(`a-switch`),p=r(`a-translation`),m=r(`a-wizard`),h=r(`aloha-example`);return c(),n(h,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_WIZARD_GROUP_STEPS_WARNINGS_HEADER_`,description:`_A_WIZARD_GROUP_STEPS_WARNINGS_DESCRIPTION_`,props:`steps.warning`},{default:o(()=>[s(`div`,It,[s(`div`,Lt,[a(d,{modelValue:t.modelType,"onUpdate:modelValue":i[0]||=e=>t.modelType=e,label:`_A_WIZARD_LABEL_TYPE_`,"key-id":`value`,"key-label":`label`,data:t.types,deselectable:!1,"translate-data":!0},null,8,[`modelValue`,`data`]),a(f,{modelValue:t.wizardSteps[0].warning,"onUpdate:modelValue":i[1]||=e=>t.wizardSteps[0].warning=e,label:`_A_WIZARD_STEP_1_`},null,8,[`modelValue`]),a(f,{modelValue:t.wizardSteps[1].warning,"onUpdate:modelValue":i[2]||=e=>t.wizardSteps[1].warning=e,label:`_A_WIZARD_STEP_2_`},null,8,[`modelValue`]),a(f,{modelValue:t.wizardSteps[2].warning,"onUpdate:modelValue":i[3]||=e=>t.wizardSteps[2].warning=e,label:`_A_WIZARD_STEP_3_`},null,8,[`modelValue`]),a(f,{modelValue:t.wizardSteps[3].warning,"onUpdate:modelValue":i[4]||=e=>t.wizardSteps[3].warning=e,label:`_A_WIZARD_STEP_4_`},null,8,[`modelValue`])])]),a(m,{steps:t.wizardSteps,type:t.modelType},{step1:o(()=>[a(p,{tag:`h3`,text:`_A_WIZARD_STEP_1_`}),s(`p`,null,e(t.text),1)]),step2:o(()=>[a(p,{tag:`h3`,text:`_A_WIZARD_STEP_2_`}),s(`p`,null,e(t.text),1)]),step3:o(()=>[a(p,{tag:`h3`,text:`_A_WIZARD_STEP_3_`}),s(`p`,null,e(t.text),1)]),step4:o(()=>[a(p,{tag:`h3`,text:`_A_WIZARD_STEP_4_`}),s(`p`,null,e(t.text),1)]),_:1},8,[`steps`,`type`])]),_:1},8,[`code-html`,`code-js`])}var zt=h(Ft,[[`render`,Rt]]);function Bt(){return{codeHtml:`<h3 class="a_my_3">type="line", sub-type="square"</h3>
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
</a-wizard>`}}function $(){return{codeJs:`import {
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
};`}}var Vt={name:`PageWizardSubType`,components:{AlohaExample:v,ATranslation:f,AWizard:p},setup(){let{codeHtml:e}=Bt(),{codeJs:t}=$();return{codeHtml:e,codeJs:t,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:`step1`,label:`_A_WIZARD_STEP_1_`,title:`_A_WIZARD_STEP_1_`},{slot:`step2`,label:`_A_WIZARD_STEP_2_`,title:`_A_WIZARD_STEP_2_`},{slot:`step3`,label:`_A_WIZARD_STEP_3_`,title:`_A_WIZARD_STEP_3_`},{slot:`step4`,label:`_A_WIZARD_STEP_4_`,title:`_A_WIZARD_STEP_4_`}]}}};function Ht(t,i,ee,te,l,u){let d=r(`a-translation`),f=r(`a-wizard`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_WIZARD_GROUP_SUB_TYPE_HEADER_`,description:`_A_WIZARD_GROUP_SUB_TYPE_DESCRIPTION_`,props:[`sub-type`,`type`]},{default:o(()=>[i[0]||=s(`h3`,{class:`a_my_3`},`type="line", sub-type="square"`,-1),a(f,{steps:t.wizardSteps,type:`line`,"sub-type":`square`},{step1:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_1_`}),s(`p`,null,e(t.text),1)]),step2:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_2_`}),s(`p`,null,e(t.text),1)]),step3:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_3_`}),s(`p`,null,e(t.text),1)]),step4:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_4_`}),s(`p`,null,e(t.text),1)]),_:1},8,[`steps`]),i[1]||=s(`h3`,{class:`a_my_3`},`type="line", sub-type="circle"`,-1),a(f,{steps:t.wizardSteps,type:`line`,"sub-type":`circle`},{step1:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_1_`}),s(`p`,null,e(t.text),1)]),step2:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_2_`}),s(`p`,null,e(t.text),1)]),step3:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_3_`}),s(`p`,null,e(t.text),1)]),step4:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_4_`}),s(`p`,null,e(t.text),1)]),_:1},8,[`steps`]),i[2]||=s(`h3`,{class:`a_my_3`},`type="line", sub-type="square-bordered"`,-1),a(f,{steps:t.wizardSteps,type:`line`,"sub-type":`square-bordered`},{step1:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_1_`}),s(`p`,null,e(t.text),1)]),step2:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_2_`}),s(`p`,null,e(t.text),1)]),step3:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_3_`}),s(`p`,null,e(t.text),1)]),step4:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_4_`}),s(`p`,null,e(t.text),1)]),_:1},8,[`steps`]),i[3]||=s(`h3`,{class:`a_my_3`},`type="line", sub-type="circle-bordered"`,-1),a(f,{steps:t.wizardSteps,type:`line`,"sub-type":`circle-bordered`},{step1:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_1_`}),s(`p`,null,e(t.text),1)]),step2:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_2_`}),s(`p`,null,e(t.text),1)]),step3:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_3_`}),s(`p`,null,e(t.text),1)]),step4:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_4_`}),s(`p`,null,e(t.text),1)]),_:1},8,[`steps`])]),_:1},8,[`code-html`,`code-js`])}var Ut=h(Vt,[[`render`,Ht]]);function Wt(){return{codeHtml:`<h3 class="a_my_3">type="basic"</h3>
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
</a-wizard>`}}function Gt(){return{codeJs:`import {
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
};`}}var Kt={name:`PageWizardType`,components:{AlohaExample:v,ATranslation:f,AWizard:p},setup(){let{codeHtml:e}=Wt(),{codeJs:t}=Gt();return{codeHtml:e,codeJs:t,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:`step1`,label:`_A_WIZARD_STEP_1_`,title:`_A_WIZARD_STEP_1_`},{slot:`step2`,label:`_A_WIZARD_STEP_2_`,title:`_A_WIZARD_STEP_2_`},{slot:`step3`,label:`_A_WIZARD_STEP_3_`,title:`_A_WIZARD_STEP_3_`},{slot:`step4`,label:`_A_WIZARD_STEP_4_`,title:`_A_WIZARD_STEP_4_`}]}}};function qt(t,i,ee,te,l,u){let d=r(`a-translation`),f=r(`a-wizard`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_WIZARD_GROUP_TYPE_HEADER_`,description:`_A_WIZARD_GROUP_TYPE_DESCRIPTION_`,props:`type`},{default:o(()=>[i[0]||=s(`h3`,{class:`a_my_3`},`type="basic"`,-1),a(f,{steps:t.wizardSteps,type:`basic`},{step1:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_1_`}),s(`p`,null,e(t.text),1)]),step2:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_2_`}),s(`p`,null,e(t.text),1)]),step3:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_3_`}),s(`p`,null,e(t.text),1)]),step4:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_4_`}),s(`p`,null,e(t.text),1)]),_:1},8,[`steps`]),i[1]||=s(`h3`,{class:`a_my_3`},`type="line"`,-1),a(f,{steps:t.wizardSteps,type:`line`},{step1:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_1_`}),s(`p`,null,e(t.text),1)]),step2:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_2_`}),s(`p`,null,e(t.text),1)]),step3:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_3_`}),s(`p`,null,e(t.text),1)]),step4:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_4_`}),s(`p`,null,e(t.text),1)]),_:1},8,[`steps`]),i[2]||=s(`h3`,{class:`a_my_3`},`type="round"`,-1),a(f,{steps:t.wizardSteps,type:`round`},{step1:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_1_`}),s(`p`,null,e(t.text),1)]),step2:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_2_`}),s(`p`,null,e(t.text),1)]),step3:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_3_`}),s(`p`,null,e(t.text),1)]),step4:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_4_`}),s(`p`,null,e(t.text),1)]),_:1},8,[`steps`]),i[3]||=s(`h3`,{class:`a_my_3`},`type="arrows"`,-1),a(f,{steps:t.wizardSteps,type:`arrows`},{step1:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_1_`}),s(`p`,null,e(t.text),1)]),step2:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_2_`}),s(`p`,null,e(t.text),1)]),step3:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_3_`}),s(`p`,null,e(t.text),1)]),step4:o(()=>[a(d,{tag:`h4`,text:`_A_WIZARD_STEP_4_`}),s(`p`,null,e(t.text),1)]),_:1},8,[`steps`])]),_:1},8,[`code-html`,`code-js`])}var Jt=h(Kt,[[`render`,qt]]);function Yt(){return{dataEvents:[{name:`change-step`,description:`_A_WIZARD_EVENTS_CHANGE_STEP_DESCRIPTION_`,type:`Function`},{name:`go-step-back`,description:`_A_WIZARD_EVENTS_GO_STEP_BACK_DESCRIPTION_`,type:`Function`},{name:`go-step-forward`,description:`_A_WIZARD_EVENTS_GO_STEP_FORWARD_DESCRIPTION_`,type:`Function`}]}}function Xt(){return{dataExposes:[{name:`buttonRef`,description:`_A_SHOW_MORE_EXPOSES_BUTTON_REF_DESCRIPTION_`,type:`Object`},{name:`containerRef`,description:`_A_SHOW_MORE_EXPOSES_CONTAINER_REF_DESCRIPTION_`,type:`Object`},{name:`isButtonVisible`,description:`_A_SHOW_MORE_EXPOSES_IS_BUTTON_VISIBLE_DESCRIPTION_`,type:`Boolean`},{name:`isOpen`,description:`_A_SHOW_MORE_EXPOSES_IS_OPEN_DESCRIPTION_`,type:`Boolean`},{name:`toggleButton`,description:`_A_SHOW_MORE_EXPOSES_TOGGLE_BUTTON_DESCRIPTION_`,type:`Function`}]}}function Zt(){let e=t(()=>m({placeholder:`_A_WIZARD_COMPONENT_NAME_`}));return{pageTitle:t(()=>`AWizard${e.value?` (${e.value})`:``}`)}}function Qt(){return{dataProps:[{name:`aria-label`,description:`_A_WIZARD_PROPS_ARIA_LABEL_DESCRIPTION_`,type:`String`,default:`_A_WIZARD_ARIA_LABEL_`,required:!1},{name:`aria-label-steps`,description:`_A_WIZARD_PROPS_ARIA_LABEL_STEPS_DESCRIPTION_`,type:`String`,default:`_A_WIZARD_STEPS_ARIA_LABEL_`,required:!1},{name:`back-button-attributes`,description:`_A_WIZARD_PROPS_BACK_BUTTON_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`back-button-class`,description:`_A_WIZARD_PROPS_BACK_BUTTON_CLASS_DESCRIPTION_`,type:`String / Array / Object`,default:`a_btn a_btn_secondary`,required:!1},{name:`back-button-icon-left`,description:`_A_WIZARD_PROPS_BACK_BUTTON_ICON_LEFT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`back-button-icon-right`,description:`_A_WIZARD_PROPS_BACK_BUTTON_ICON_RIGHT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`back-button-text`,description:`_A_WIZARD_PROPS_BACK_BUTTON_TEXT_DESCRIPTION_`,type:`String`,default:`_A_WIZARD_PREVIOUS_`,required:!1},{name:`back-button-title`,description:`_A_WIZARD_PROPS_BACK_BUTTON_TITLE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`class-extra`,description:`_A_WIZARD_PROPS_CLASS_EXTRA_DESCRIPTION_`,type:`String / Object`,default:`a_wizard_class_extra`,required:!1},{name:`extra`,description:`_A_WIZARD_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`forward-button-attributes`,description:`_A_WIZARD_PROPS_FORWARD_BUTTON_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`forward-button-class`,description:`_A_WIZARD_PROPS_FORWARD_BUTTON_CLASS_DESCRIPTION_`,type:`String / Array / Object`,default:`a_btn a_btn_secondary`,required:!1},{name:`forward-button-icon-left`,description:`_A_WIZARD_PROPS_FORWARD_BUTTON_ICON_LEFT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`forward-button-icon-right`,description:`_A_WIZARD_PROPS_FORWARD_BUTTON_ICON_RIGHT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`forward-button-text`,description:`_A_WIZARD_PROPS_FORWARD_BUTTON_TEXT_DESCRIPTION_`,type:`String`,default:`_A_WIZARD_PREVIOUS_`,required:!1},{name:`forward-button-title`,description:`_A_WIZARD_PROPS_FORWARD_BUTTON_TITLE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`has-focus-jump`,description:`_A_WIZARD_PROPS_HAS_FOCUS_JUMP_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`id`,description:`_A_WIZARD_PROPS_ID_DESCRIPTION_`,type:`String`,default:`() => uniqueId("a_wizard_")`,required:!1},{name:`is-back-button-disabled`,description:`_A_WIZARD_PROPS_IS_BACK_BUTTON_DISABLED_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-back-button-hide`,description:`_A_WIZARD_PROPS_IS_BACK_BUTTON_HIDE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-back-first-button-hide`,description:`_A_WIZARD_PROPS_IS_BACK_FIRST_BUTTON_HIDE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-back-step-button-disabled`,description:`_A_WIZARD_PROPS_IS_BACK_STEP_BUTTON_DISABLED_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-buttons-loading`,description:`_A_WIZARD_PROPS_IS_BUTTONS_LOADING_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-control-outside`,description:`_A_WIZARD_PROPS_IS_CONTROL_OUTSIDE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-forward-button-disabled`,description:`_A_WIZARD_PROPS_IS_FORWARD_BUTTON_DISABLED_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-forward-button-hide`,description:`_A_WIZARD_PROPS_IS_FORWARD_BUTTON_HIDE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-forward-last-button-hide`,description:`_A_WIZARD_PROPS_IS_FORWARD_LAST_BUTTON_HIDE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-forward-step-button-disabled`,description:`_A_WIZARD_PROPS_IS_FORWARD_STEP_BUTTON_DISABLED_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-mobile`,description:`_A_WIZARD_PROPS_IS_MOBILE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-step-number-visible`,description:`_A_WIZARD_PROPS_IS_STEP_NUMBER_VISIBLE_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-steps-justified`,description:`_A_WIZARD_PROPS_IS_STEPS_JUSTIFIED_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-toolbar-bottom`,description:`_A_WIZARD_PROPS_IS_TOOLBAR_BOTTOM_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-toolbar-top`,description:`_A_WIZARD_PROPS_IS_TOOLBAR_TOP_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`key-id`,description:`_A_WIZARD_PROPS_KEY_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`show-only-active-step-mobile`,description:`_A_WIZARD_PROPS_SHOW_ONLY_ACTIVE_STEP_MOBILE_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`step-active`,description:`_A_WIZARD_PROPS_STEP_ACTIVE_DESCRIPTION_`,type:`Number`,default:void 0,required:!1},{name:`steps-icon-error`,description:`_A_WIZARD_PROPS_STEP_ICON_ERROR_DESCRIPTION_`,type:`String`,default:`AlertDanger`,required:!1},{name:`steps-icon-error-text`,description:`_A_WIZARD_PROPS_STEP_ICON_ERROR_TEXT_DESCRIPTION_`,type:`String`,default:`_A_WIZARD_STEP_ERROR_`,required:!1},{name:`steps-icon-warning`,description:`_A_WIZARD_PROPS_STEP_ICON_WARNING_DESCRIPTION_`,type:`String`,default:`AlertWarning`,required:!1},{name:`steps-icon-warning-text`,description:`_A_WIZARD_PROPS_STEP_ICON_WARNING_TEXT_DESCRIPTION_`,type:`String`,default:`_A_WIZARD_STEP_WARNING_`,required:!1},{name:`steps`,description:`_A_WIZARD_PROPS_STEPS_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`steps-progressbar-text`,description:`_A_WIZARD_PROPS_STEP_PROGRESSBAR_TEXT_DESCRIPTION_`,type:`String`,default:`_A_WIZARD_STEPS_PROGRESSBAR_TEXT_{{stepActive}}_{{stepsCount}}_{{stepActiveLabel}}_`,required:!1},{name:`steps-visited`,description:`_A_WIZARD_PROPS_STEPS_VISITED_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`sub-type`,description:`_A_WIZARD_PROPS_SUB_TYPE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`toolbar-bottom-teleport-id`,description:`_A_WIZARD_PROPS_TOOLBAR_BOTTOM_TELEPORT_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`type`,description:`_A_WIZARD_PROPS_TYPE_DESCRIPTION_`,type:`String`,default:`basic`,required:!1}]}}function $t(){return{dataSlots:[{name:`toolbar`,description:`_A_WIZARD_SLOTS_TOOLBAR_DESCRIPTION_`},{name:`slot`,description:`_A_WIZARD_SLOTS_SLOT_DESCRIPTION_`},{name:`slotLabel`,description:`_A_WIZARD_SLOTS_SLOT_LABEL_DESCRIPTION_`}]}}function en(){return{dataTranslate:[`_A_WIZARD_ARIA_LABEL_`,`_A_WIZARD_HEADER_STEP_SCREEN_READER_{{stepNumber}}_`,`_A_WIZARD_NEXT_`,`_A_WIZARD_NEXT_TITLE_`,`_A_WIZARD_PREVIOUS_`,`_A_WIZARD_PREVIOUS_TITLE_`,`_A_WIZARD_STEP_ACTIVE_`,`_A_WIZARD_STEP_ERROR_`,`_A_WIZARD_STEP_NUMBER_OF_{{stepActive}}_{{stepsCount}}_`,`_A_WIZARD_STEP_UPCOMING_`,`_A_WIZARD_STEP_VISITED_`,`_A_WIZARD_STEP_WARNING_`,`_A_WIZARD_STEPS_ARIA_LABEL_`,`_A_WIZARD_STEPS_PROGRESSBAR_TEXT_{{stepActive}}_{{stepsCount}}_`]}}var tn={name:`PageWizard`,components:{AlohaPage:_,AlohaTableProps:y,AlohaTableTranslate:b,ATranslation:f,PageWizardBasic:T,PageWizardButtons:A,PageWizardButtonsDisabled:L,PageWizardButtonsHide:W,PageWizardDemo:ne,PageWizardHasFocusJump:le,PageWizardIcon:me,PageWizardIsButtonsLoading:xe,PageWizardIsControlOutside:Ee,PageWizardIsStepNumberVisible:Ne,PageWizardIsStepsJustified:Be,PageWizardIsToolbar:qe,PageWizardKeyId:Qe,PageWizardShowOnlyActiveStepMobile:at,PageWizardSlot:ut,PageWizardSlotLabel:ht,PageWizardSlotToolbar:bt,PageWizardStepActive:Tt,PageWizardStepsErrors:Mt,PageWizardStepsWarnings:zt,PageWizardSubType:Ut,PageWizardType:Jt},setup(){let{pageTitle:e}=Zt(),{dataProps:t}=Qt(),{dataSlots:n}=$t(),{dataExposes:r}=Xt(),{dataEvents:i}=Yt(),{dataTranslate:a}=en();return{dataExposes:r,dataEvents:i,dataProps:t,dataSlots:n,dataTranslate:a,pageTitle:e}}};function nn(e,t,i,s,ee,te){let l=r(`a-translation`),u=r(`page-wizard-basic`),d=r(`page-wizard-type`),f=r(`page-wizard-sub-type`),p=r(`page-wizard-icon`),m=r(`page-wizard-buttons`),h=r(`page-wizard-buttons-disabled`),g=r(`page-wizard-buttons-hide`),_=r(`page-wizard-is-steps-justified`),v=r(`page-wizard-is-buttons-loading`),y=r(`page-wizard-is-toolbar`),b=r(`page-wizard-is-step-number-visible`),x=r(`page-wizard-step-active`),S=r(`page-wizard-steps-errors`),C=r(`page-wizard-steps-warnings`),w=r(`page-wizard-key-id`),T=r(`page-wizard-has-focus-jump`),E=r(`page-wizard-is-control-outside`),D=r(`page-wizard-slot-toolbar`),O=r(`page-wizard-slot-label`),k=r(`page-wizard-slot`),A=r(`page-wizard-show-only-active-step-mobile`),j=r(`page-wizard-demo`),M=r(`aloha-table-props`),N=r(`aloha-table-translate`),P=r(`aloha-page`);return c(),n(P,{"page-title":e.pageTitle},{body:o(()=>[a(l,{tag:`p`,html:`_A_WIZARD_COMPONENT_DESCRIPTION_`}),a(u),a(d),a(f),a(p),a(m),a(h),a(g),a(_),a(v),a(y),a(b),a(x),a(S),a(C),a(w),a(T),a(E),a(D),a(O),a(k),a(A),a(j),a(M,{data:e.dataProps},null,8,[`data`]),a(M,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),a(M,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`]),a(N,{data:e.dataTranslate},null,8,[`data`])]),_:1},8,[`page-title`])}var rn=h(tn,[[`render`,nn]]);export{rn as default};