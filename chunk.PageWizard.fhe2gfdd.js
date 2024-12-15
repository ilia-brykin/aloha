import{A as b,a as F}from"./chunk.AlohaExample.A9Ef-QbL.js";import{A as G}from"./chunk.AlohaTableProps.CpO8HcfR.js";import{A as Y}from"./chunk.AlohaTableTranslate.0W11qYzs.js";import{A as E,_ as I,b as O,e as Q,m as h,g as X}from"./bundle.index.Dn7qpWjQ.js";import{A as P}from"./chunk.AWizard.BhPWEQ9k.js";import{m as i,K as T,aK as s,J as R,P as e,O as a,aL as l,r as S,a as g}from"./chunk.vendor.DQz1Isc4.js";import{A as Z}from"./chunk.AForm.YXJwVyl2.js";import{u as K,a2 as tt}from"./chunk.vendor-lodash.Cgq9oNCy.js";import"./chunk.ATable.D_xPGUZc.js";import"./chunk.utilsMath.1mfWsA3R.js";import"./chunk.vendor-tinymce.cPIiul0H.js";import"./chunk.ADatepicker.CCF6HQX3.js";import"./chunk.UiMixinProps.BvCyZ1Ij.js";import"./chunk.AInputNumber.CRj1UTFu.js";import"./chunk.ATinymce.BwFOKtT3.js";function et(){return{codeHtml:`<a-wizard
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
</a-wizard>`}}function at(){return{codeJs:`import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
import AWizard from "aloha-vue/src/AWizard/AWizard";
    
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
};`}}const st={name:"PageWizardBasic",components:{AlohaExample:b,ATranslation:E,AWizard:P},setup(){const{codeHtml:t}=et(),{codeJs:_}=at();return{codeHtml:t,codeJs:_,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:"step1",label:"_A_WIZARD_STEP_1_",title:"_A_WIZARD_STEP_1_"},{slot:"step2",label:"_A_WIZARD_STEP_2_",title:"_A_WIZARD_STEP_2_"},{slot:"step3",label:"_A_WIZARD_STEP_3_",title:"_A_WIZARD_STEP_3_"},{slot:"step4",label:"_A_WIZARD_STEP_4_",title:"_A_WIZARD_STEP_4_"}]}}};function _t(t,_,r,u,A,c){const o=i("a-translation"),n=i("a-wizard"),p=i("aloha-example");return R(),T(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_BASIC_USAGE_",props:"wizard-steps"},{default:s(()=>[e(n,{steps:t.wizardSteps},{step1:s(()=>[e(o,{tag:"h3",text:"_A_WIZARD_STEP_1_"}),a("p",null,l(t.text),1)]),step2:s(()=>[e(o,{tag:"h3",text:"_A_WIZARD_STEP_2_"}),a("p",null,l(t.text),1)]),step3:s(()=>[e(o,{tag:"h3",text:"_A_WIZARD_STEP_3_"}),a("p",null,l(t.text),1)]),step4:s(()=>[e(o,{tag:"h3",text:"_A_WIZARD_STEP_4_"}),a("p",null,l(t.text),1)]),_:1},8,["steps"])]),_:1},8,["code-html","code-js"])}const ot=I(st,[["render",_t]]);function lt(){return{codeHtml:`<a-wizard
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
</a-wizard>`}}function it(){return{codeJs:`import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
import AWizard from "aloha-vue/src/AWizard/AWizard";
    
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
};`}}const nt={name:"PageWizardButtons",components:{AlohaExample:b,ATranslation:E,AWizard:P},setup(){const{codeHtml:t}=lt(),{codeJs:_}=it();return{codeHtml:t,codeJs:_,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:"step1",label:"_A_WIZARD_STEP_1_",title:"_A_WIZARD_STEP_1_"},{slot:"step2",label:"_A_WIZARD_STEP_2_",title:"_A_WIZARD_STEP_2_"},{slot:"step3",label:"_A_WIZARD_STEP_3_",title:"_A_WIZARD_STEP_3_"},{slot:"step4",label:"_A_WIZARD_STEP_4_",title:"_A_WIZARD_STEP_4_"}]}}};function rt(t,_,r,u,A,c){const o=i("a-translation"),n=i("a-wizard"),p=i("aloha-example");return R(),T(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_WIZARD_GROUP_BUTTONS_HEADER_",description:"_A_WIZARD_GROUP_BUTTONS_DESCRIPTION_",props:["back-button-attributes","back-button-class","back-button-icon-left","back-button-icon-right","back-button-text","back-button-title","forward-button-attributes","forward-button-class","forward-button-icon-left","forward-button-icon-right","forward-button-text","forward-button-title"]},{default:s(()=>[e(n,{steps:t.wizardSteps,"back-button-attributes":{stop:!0},"back-button-class":"a_btn a_btn_warning","back-button-icon-left":"ChevronLeft","back-button-icon-right":"ChevronLeft","back-button-text":"_A_WIZARD_PAGE_BACK_BTN_TEXT_","back-button-title":"_A_WIZARD_PAGE_BACK_BTN_TEXT_","forward-button-attributes":{stop:!0},"forward-button-class":"a_btn a_btn_primary","forward-button-icon-left":"ChevronRight","forward-button-icon-right":"ChevronRight","forward-button-text":"_A_WIZARD_PAGE_FORWARD_BTN_TEXT_","forward-button-title":"_A_WIZARD_PAGE_FORWARD_BTN_TEXT_"},{step1:s(()=>[e(o,{tag:"h3",text:"_A_WIZARD_STEP_1_"}),a("p",null,l(t.text),1)]),step2:s(()=>[e(o,{tag:"h3",text:"_A_WIZARD_STEP_2_"}),a("p",null,l(t.text),1)]),step3:s(()=>[e(o,{tag:"h3",text:"_A_WIZARD_STEP_3_"}),a("p",null,l(t.text),1)]),step4:s(()=>[e(o,{tag:"h3",text:"_A_WIZARD_STEP_4_"}),a("p",null,l(t.text),1)]),_:1},8,["steps"])]),_:1},8,["code-html","code-js"])}const pt=I(nt,[["render",rt]]);function ut(){return{codeHtml:`<div
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
</a-wizard>`}}function dt(){return{codeJs:`import {
  ref,
} from "vue";

import ASwitch from "aloha-vue/src/ui/ASwitch/ASwitch";
import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
import AWizard from "aloha-vue/src/AWizard/AWizard";
    
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
};`}}const At={name:"PageWizardButtonsDisabled",components:{AlohaExample:b,ASwitch:Z,ATranslation:E,AWizard:P},setup(){const{codeHtml:t}=ut(),{codeJs:_}=dt(),r=S(!0),u=S(!0),A=S(!0),c=S(!0);return{codeHtml:t,codeJs:_,isBackButtonDisabled:r,isBackStepButtonDisabled:u,isForwardButtonDisabled:A,isForwardStepButtonDisabled:c,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:"step1",label:"_A_WIZARD_STEP_1_",title:"_A_WIZARD_STEP_1_"},{slot:"step2",label:"_A_WIZARD_STEP_2_",title:"_A_WIZARD_STEP_2_"},{slot:"step3",label:"_A_WIZARD_STEP_3_",title:"_A_WIZARD_STEP_3_"},{slot:"step4",label:"_A_WIZARD_STEP_4_",title:"_A_WIZARD_STEP_4_"}]}}},ct={class:"a_columns a_columns_count_12"},mt={class:"a_column a_column_6 a_columns_count_12_touch a_mb_5"};function St(t,_,r,u,A,c){const o=i("a-switch"),n=i("a-translation"),p=i("a-wizard"),m=i("aloha-example");return R(),T(m,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_WIZARD_GROUP_BUTTONS_DISABLED_HEADER_",description:"_A_WIZARD_GROUP_BUTTONS_DISABLED_DESCRIPTION_",props:["is-back-button-disabled","is-back-step-button-disabled","is-forward-button-disabled","is-forward-step-button-disabled"]},{default:s(()=>[a("div",ct,[a("div",mt,[e(o,{modelValue:t.isBackButtonDisabled,"onUpdate:modelValue":_[0]||(_[0]=d=>t.isBackButtonDisabled=d),label:"is-back-button-disabled"},null,8,["modelValue"]),e(o,{modelValue:t.isBackStepButtonDisabled,"onUpdate:modelValue":_[1]||(_[1]=d=>t.isBackStepButtonDisabled=d),label:"is-back-step-button-disabled"},null,8,["modelValue"]),e(o,{modelValue:t.isForwardButtonDisabled,"onUpdate:modelValue":_[2]||(_[2]=d=>t.isForwardButtonDisabled=d),label:"is-forward-button-disabled"},null,8,["modelValue"]),e(o,{modelValue:t.isForwardStepButtonDisabled,"onUpdate:modelValue":_[3]||(_[3]=d=>t.isForwardStepButtonDisabled=d),label:"is-forward-step-button-disabled"},null,8,["modelValue"])])]),e(p,{steps:t.wizardSteps,"is-back-button-disabled":t.isBackButtonDisabled,"is-back-step-button-disabled":t.isBackStepButtonDisabled,"is-forward-button-disabled":t.isForwardButtonDisabled,"is-forward-step-button-disabled":t.isForwardStepButtonDisabled},{step1:s(()=>[e(n,{tag:"h3",text:"_A_WIZARD_STEP_1_"}),a("p",null,l(t.text),1)]),step2:s(()=>[e(n,{tag:"h3",text:"_A_WIZARD_STEP_2_"}),a("p",null,l(t.text),1)]),step3:s(()=>[e(n,{tag:"h3",text:"_A_WIZARD_STEP_3_"}),a("p",null,l(t.text),1)]),step4:s(()=>[e(n,{tag:"h3",text:"_A_WIZARD_STEP_4_"}),a("p",null,l(t.text),1)]),_:1},8,["steps","is-back-button-disabled","is-back-step-button-disabled","is-forward-button-disabled","is-forward-step-button-disabled"])]),_:1},8,["code-html","code-js"])}const Dt=I(At,[["render",St]]);function It(){return{codeHtml:`<div
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
</a-wizard>`}}function Tt(){return{codeJs:`import {
  ref,
} from "vue";

import ASwitch from "aloha-vue/src/ui/ASwitch/ASwitch";
import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
import AWizard from "aloha-vue/src/AWizard/AWizard";
    
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
};`}}const Rt={name:"PageWizardButtonsHide",components:{AlohaExample:b,ASwitch:Z,ATranslation:E,AWizard:P},setup(){const{codeHtml:t}=It(),{codeJs:_}=Tt(),r=S(!0),u=S(!0),A=S(!1),c=S(!0);return{codeHtml:t,codeJs:_,isBackButtonHide:r,isBackFirstButtonHide:u,isForwardButtonHide:A,isForwardLastButtonHide:c,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:"step1",label:"_A_WIZARD_STEP_1_",title:"_A_WIZARD_STEP_1_"},{slot:"step2",label:"_A_WIZARD_STEP_2_",title:"_A_WIZARD_STEP_2_"},{slot:"step3",label:"_A_WIZARD_STEP_3_",title:"_A_WIZARD_STEP_3_"},{slot:"step4",label:"_A_WIZARD_STEP_4_",title:"_A_WIZARD_STEP_4_"}]}}},bt={class:"a_columns a_columns_count_12"},Pt={class:"a_column a_column_6 a_columns_count_12_touch a_mb_5"};function Et(t,_,r,u,A,c){const o=i("a-switch"),n=i("a-translation"),p=i("a-wizard"),m=i("aloha-example");return R(),T(m,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_WIZARD_GROUP_BUTTONS_HIDE_HEADER_",description:"_A_WIZARD_GROUP_BUTTONS_HIDE_DESCRIPTION_",props:["is-back-button-hide","is-back-first-button-hide","is-forward-button-hide","is-forward-last-button-hide"]},{default:s(()=>[a("div",bt,[a("div",Pt,[e(o,{modelValue:t.isBackButtonHide,"onUpdate:modelValue":_[0]||(_[0]=d=>t.isBackButtonHide=d),label:"is-back-button-hide"},null,8,["modelValue"]),e(o,{modelValue:t.isBackFirstButtonHide,"onUpdate:modelValue":_[1]||(_[1]=d=>t.isBackFirstButtonHide=d),label:"is-back-first-button-hide"},null,8,["modelValue"]),e(o,{modelValue:t.isForwardButtonHide,"onUpdate:modelValue":_[2]||(_[2]=d=>t.isForwardButtonHide=d),label:"is-forward-button-hide"},null,8,["modelValue"]),e(o,{modelValue:t.isForwardLastButtonHide,"onUpdate:modelValue":_[3]||(_[3]=d=>t.isForwardLastButtonHide=d),label:"is-forward-last-button-hide"},null,8,["modelValue"])])]),e(p,{steps:t.wizardSteps,"is-back-button-hide":t.isBackButtonHide,"is-back-first-button-hide":t.isBackFirstButtonHide,"is-forward-button-hide":t.isForwardButtonHide,"is-forward-last-button-hide":t.isForwardLastButtonHide},{step1:s(()=>[e(n,{tag:"h3",text:"_A_WIZARD_STEP_1_"}),a("p",null,l(t.text),1)]),step2:s(()=>[e(n,{tag:"h3",text:"_A_WIZARD_STEP_2_"}),a("p",null,l(t.text),1)]),step3:s(()=>[e(n,{tag:"h3",text:"_A_WIZARD_STEP_3_"}),a("p",null,l(t.text),1)]),step4:s(()=>[e(n,{tag:"h3",text:"_A_WIZARD_STEP_4_"}),a("p",null,l(t.text),1)]),_:1},8,["steps","is-back-button-hide","is-back-first-button-hide","is-forward-button-hide","is-forward-last-button-hide"])]),_:1},8,["code-html","code-js"])}const Wt=I(Rt,[["render",Et]]);function Zt(){return{codeHtml:`<div 
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
</a-wizard>`}}function ht(){return{codeJs:`import {
  ref,
} from "vue";

import AButton from "aloha-vue/src/AButton/AButton";
import AInput from "aloha-vue/src/ui/AInput/AInput";
import ASelect from "aloha-vue/src/ui/ASelect/ASelect";
import ASwitch from "aloha-vue/src/ui/ASwitch/ASwitch";
import AWizard from "aloha-vue/src/AWizard/AWizard";
    
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
};`}}const wt={name:"PageWizardDemo",components:{AButton:O,AInput:Q,AlohaExample:b,ASelect:h,ASwitch:Z,AWizard:P},setup(){const{codeHtml:t}=Zt(),{codeJs:_}=ht(),r=S("line"),u=S(""),A=S(void 0),c=S(!0),o=[{label:"_A_WIZARD_TYPE_BASIC_",value:"basic"},{label:"_A_WIZARD_TYPE_ARROWS_",value:"arrows"},{label:"_A_WIZARD_TYPE_LINE_",value:"line"},{label:"_A_WIZARD_TYPE_ROUND_",value:"round"}],n=S([{id:"1",slot:"step",label:"Lorem"},{id:"2",slot:"step",label:"ipsum"},{id:"3",slot:"step",label:"dolor"},{id:"4",slot:"step",label:"sit"},{id:"5",slot:"step",label:"amet"},{id:"6",slot:"step",label:"consectetur"},{id:"7",slot:"step",label:"adipiscing"},{id:"8",slot:"step",label:"elit"},{id:"9",slot:"step",label:"Quisque"},{id:"10",slot:"step",label:"nisl"}]);return{addStep:()=>{n.value.push({id:K("wizard_demo_"),slot:"step",label:u.value})},codeHtml:t,codeJs:_,deleteStep:()=>{const D=tt(n.value,["id",A.value]);n.value.splice(D,1),A.value=void 0},isStepsJustified:c,modelStepId:A,modelStepName:u,modelType:r,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,types:o,wizardSteps:n}}},ft={class:"a_columns a_columns_count_12"},gt={class:"a_column a_column_6 a_columns_count_12_touch a_mb_5"},Ot={class:"a_d_flex a_mt_4"},vt={class:"a_d_flex a_mt_4"};function zt(t,_,r,u,A,c){const o=i("a-switch"),n=i("a-select"),p=i("a-input"),m=i("a-button"),d=i("a-wizard"),D=i("aloha-example");return R(),T(D,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_WIZARD_GROUP_DEMO_HEADER_",description:"_A_WIZARD_GROUP_DEMO_DESCRIPTION_",props:["steps","type"]},{default:s(()=>[a("div",ft,[a("div",gt,[e(o,{modelValue:t.isStepsJustified,"onUpdate:modelValue":_[0]||(_[0]=W=>t.isStepsJustified=W),label:"is-steps-justified"},null,8,["modelValue"]),e(n,{class:"a_mt_4",modelValue:t.modelType,"onUpdate:modelValue":_[1]||(_[1]=W=>t.modelType=W),label:"_A_WIZARD_LABEL_TYPE_","key-id":"value","key-label":"label",data:t.types,deselectable:!1,"translate-data":!0},null,8,["modelValue","data"]),a("div",Ot,[e(p,{modelValue:t.modelStepName,"onUpdate:modelValue":_[2]||(_[2]=W=>t.modelStepName=W),label:"_A_WIZARD_STEP_NAME_",required:!0},null,8,["modelValue"]),e(m,{class:"a_btn a_btn_primary a_ml_2",disabled:!t.modelStepName,text:"_A_WIZARD_BTN_ADD_STEP_",onClick:t.addStep},null,8,["disabled","onClick"])]),a("div",vt,[e(n,{modelValue:t.modelStepId,"onUpdate:modelValue":_[3]||(_[3]=W=>t.modelStepId=W),label:"_A_WIZARD_LABEL_STEPS_","key-id":"id","key-label":"label",data:t.wizardSteps,search:!0},null,8,["modelValue","data"]),e(m,{class:"a_btn a_btn_primary a_ml_2",disabled:!t.modelStepId||t.wizardSteps.length<2,text:"_A_WIZARD_BTN_DELETE_STEP_",onClick:t.deleteStep},null,8,["disabled","onClick"])])])]),e(d,{"key-id":"id","is-steps-justified":t.isStepsJustified,steps:t.wizardSteps,type:t.modelType},{step:s(({step:W})=>[a("h2",null,l(W.label),1),a("p",null,l(t.text),1)]),_:1},8,["is-steps-justified","steps","type"])]),_:1},8,["code-html","code-js"])}const xt=I(wt,[["render",zt]]);function Lt(){return{codeHtml:`<div
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
</a-wizard>`}}function Bt(){return{codeJs:`import {
  ref,
} from "vue";

import ASwitch from "aloha-vue/src/ui/ASwitch/ASwitch";
import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
import AWizard from "aloha-vue/src/AWizard/AWizard";
    
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
};`}}const Mt={name:"PageWizardHasFocusJump",components:{AlohaExample:b,ASwitch:Z,ATranslation:E,AWizard:P},setup(){const{codeHtml:t}=Lt(),{codeJs:_}=Bt(),r=S(!1);return{codeHtml:t,codeJs:_,hasFocusJump:r,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:"step1",label:"_A_WIZARD_STEP_1_",title:"_A_WIZARD_STEP_1_"},{slot:"step2",label:"_A_WIZARD_STEP_2_",title:"_A_WIZARD_STEP_2_"},{slot:"step3",label:"_A_WIZARD_STEP_3_",title:"_A_WIZARD_STEP_3_"},{slot:"step4",label:"_A_WIZARD_STEP_4_",title:"_A_WIZARD_STEP_4_"}]}}},yt={class:"a_columns a_columns_count_12"},qt={class:"a_column a_column_6 a_columns_count_12_touch a_mb_5"};function Nt(t,_,r,u,A,c){const o=i("a-switch"),n=i("a-translation"),p=i("a-wizard"),m=i("aloha-example");return R(),T(m,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_WIZARD_GROUP_HAS_FOCUS_JUMP_HEADER_",description:"_A_WIZARD_GROUP_HAS_FOCUS_JUMP_DESCRIPTION_",props:["has-focus-jump"]},{default:s(()=>[a("div",yt,[a("div",qt,[e(o,{modelValue:t.hasFocusJump,"onUpdate:modelValue":_[0]||(_[0]=d=>t.hasFocusJump=d),label:"has-focus-jump"},null,8,["modelValue"])])]),e(p,{steps:t.wizardSteps,"has-focus-jump":t.hasFocusJump},{step1:s(()=>[e(n,{tag:"h3",text:"_A_WIZARD_STEP_1_"}),a("p",null,l(t.text),1)]),step2:s(()=>[e(n,{tag:"h3",text:"_A_WIZARD_STEP_2_"}),a("p",null,l(t.text),1)]),step3:s(()=>[e(n,{tag:"h3",text:"_A_WIZARD_STEP_3_"}),a("p",null,l(t.text),1)]),step4:s(()=>[e(n,{tag:"h3",text:"_A_WIZARD_STEP_4_"}),a("p",null,l(t.text),1)]),_:1},8,["steps","has-focus-jump"])]),_:1},8,["code-html","code-js"])}const $t=I(Mt,[["render",Nt]]);function Ct(){return{codeHtml:`<h3 class="a_my_3">type="basic"</h3>
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
</a-wizard>`}}function Ht(){return{codeJs:`import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
import AWizard from "aloha-vue/src/AWizard/AWizard";
    
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
};`}}const Jt={name:"PageWizardIcon",components:{AlohaExample:b,ATranslation:E,AWizard:P},setup(){const{codeHtml:t}=Ct(),{codeJs:_}=Ht();return{codeHtml:t,codeJs:_,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:"step1",label:"_A_WIZARD_STEP_1_",title:"_A_WIZARD_STEP_1_",icon:"Gear"},{slot:"step2",label:"_A_WIZARD_STEP_2_",title:"_A_WIZARD_STEP_2_",icon:"Boxes"},{slot:"step3",label:"_A_WIZARD_STEP_3_",title:"_A_WIZARD_STEP_3_"},{slot:"step4",label:"_A_WIZARD_STEP_4_",title:"_A_WIZARD_STEP_4_"}]}}},Ut=a("h3",{class:"a_my_3"},'type="basic"',-1),kt=a("h3",{class:"a_my_3"},'type="line"',-1),Vt=a("h3",{class:"a_my_3"},'type="round"',-1),jt=a("h3",{class:"a_my_3"},'type="arrows"',-1);function Ft(t,_,r,u,A,c){const o=i("a-translation"),n=i("a-wizard"),p=i("aloha-example");return R(),T(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_WIZARD_GROUP_ICON_HEADER_",description:"_A_WIZARD_GROUP_ICON_DESCRIPTION_",props:"steps.icon"},{default:s(()=>[Ut,e(n,{steps:t.wizardSteps,type:"basic"},{step1:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_1_"}),a("p",null,l(t.text),1)]),step2:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_2_"}),a("p",null,l(t.text),1)]),step3:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_3_"}),a("p",null,l(t.text),1)]),step4:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_4_"}),a("p",null,l(t.text),1)]),_:1},8,["steps"]),kt,e(n,{steps:t.wizardSteps,type:"line"},{step1:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_1_"}),a("p",null,l(t.text),1)]),step2:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_2_"}),a("p",null,l(t.text),1)]),step3:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_3_"}),a("p",null,l(t.text),1)]),step4:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_4_"}),a("p",null,l(t.text),1)]),_:1},8,["steps"]),Vt,e(n,{steps:t.wizardSteps,type:"round"},{step1:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_1_"}),a("p",null,l(t.text),1)]),step2:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_2_"}),a("p",null,l(t.text),1)]),step3:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_3_"}),a("p",null,l(t.text),1)]),step4:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_4_"}),a("p",null,l(t.text),1)]),_:1},8,["steps"]),jt,e(n,{steps:t.wizardSteps,type:"arrows"},{step1:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_1_"}),a("p",null,l(t.text),1)]),step2:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_2_"}),a("p",null,l(t.text),1)]),step3:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_3_"}),a("p",null,l(t.text),1)]),step4:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_4_"}),a("p",null,l(t.text),1)]),_:1},8,["steps"])]),_:1},8,["code-html","code-js"])}const Gt=I(Jt,[["render",Ft]]);function Yt(){return{codeHtml:`<div
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
</a-wizard>`}}function Qt(){return{codeJs:`import {
  ref,
} from "vue";

import ASwitch from "aloha-vue/src/ui/ASwitch/ASwitch";
import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
import AWizard from "aloha-vue/src/AWizard/AWizard";
    
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
};`}}const Xt={name:"PageWizardIsButtonsLoading",components:{AlohaExample:b,ASwitch:Z,ATranslation:E,AWizard:P},setup(){const{codeHtml:t}=Yt(),{codeJs:_}=Qt(),r=S(!1);return{codeHtml:t,codeJs:_,isButtonsLoading:r,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:"step1",label:"_A_WIZARD_STEP_1_",title:"_A_WIZARD_STEP_1_"},{slot:"step2",label:"_A_WIZARD_STEP_2_",title:"_A_WIZARD_STEP_2_"},{slot:"step3",label:"_A_WIZARD_STEP_3_",title:"_A_WIZARD_STEP_3_"},{slot:"step4",label:"_A_WIZARD_STEP_4_",title:"_A_WIZARD_STEP_4_"}]}}},Kt={class:"a_columns a_columns_count_12"},te={class:"a_column a_column_6 a_columns_count_12_touch a_mb_5"};function ee(t,_,r,u,A,c){const o=i("a-switch"),n=i("a-translation"),p=i("a-wizard"),m=i("aloha-example");return R(),T(m,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_WIZARD_GROUP_IS_BUTTONS_LOADING_HEADER_",description:"_A_WIZARD_GROUP_IS_BUTTONS_LOADING_DESCRIPTION_",props:["is-buttons-loading"]},{default:s(()=>[a("div",Kt,[a("div",te,[e(o,{modelValue:t.isButtonsLoading,"onUpdate:modelValue":_[0]||(_[0]=d=>t.isButtonsLoading=d),label:"is-buttons-loading"},null,8,["modelValue"])])]),e(p,{steps:t.wizardSteps,"is-buttons-loading":t.isButtonsLoading},{step1:s(()=>[e(n,{tag:"h3",text:"_A_WIZARD_STEP_1_"}),a("p",null,l(t.text),1)]),step2:s(()=>[e(n,{tag:"h3",text:"_A_WIZARD_STEP_2_"}),a("p",null,l(t.text),1)]),step3:s(()=>[e(n,{tag:"h3",text:"_A_WIZARD_STEP_3_"}),a("p",null,l(t.text),1)]),step4:s(()=>[e(n,{tag:"h3",text:"_A_WIZARD_STEP_4_"}),a("p",null,l(t.text),1)]),_:1},8,["steps","is-buttons-loading"])]),_:1},8,["code-html","code-js"])}const ae=I(Xt,[["render",ee]]);function se(){return{codeHtml:`<a-wizard
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
</a-wizard>`}}function _e(){return{codeJs:`import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
import AWizard from "aloha-vue/src/AWizard/AWizard";
    
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
};`}}const oe={name:"PageWizardIsControlOutside",components:{AlohaExample:b,ATranslation:E,AWizard:P},setup(){const{codeHtml:t}=se(),{codeJs:_}=_e(),r=S(0),u=S({0:!0});return{codeHtml:t,codeJs:_,goStepBack:({targetStepIndex:p,currentStepIndex:m,step:d})=>{console.log("currentStepIndex",m),console.log("step",d),r.value=p,u.value[p]=!0},goStepForward:({targetStepIndex:p,currentStepIndex:m,step:d})=>{console.log("currentStepIndex",m),console.log("step",d),r.value=p,u.value[p]=!0},stepActive:r,stepsVisited:u,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:"step1",label:"_A_WIZARD_STEP_1_",title:"_A_WIZARD_STEP_1_"},{slot:"step2",label:"_A_WIZARD_STEP_2_",title:"_A_WIZARD_STEP_2_"},{slot:"step3",label:"_A_WIZARD_STEP_3_",title:"_A_WIZARD_STEP_3_"},{slot:"step4",label:"_A_WIZARD_STEP_4_",title:"_A_WIZARD_STEP_4_"}]}}};function le(t,_,r,u,A,c){const o=i("a-translation"),n=i("a-wizard"),p=i("aloha-example");return R(),T(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_WIZARD_GROUP_IS_CONTROL_OUTSIDE_HEADER_",description:"_A_WIZARD_GROUP_IS_CONTROL_OUTSIDE_DESCRIPTION_",props:["is-control-outside","step-active","steps-visited"],emits:["go-step-back","go-step-forward"]},{default:s(()=>[e(n,{steps:t.wizardSteps,"is-control-outside":!0,"step-active":t.stepActive,"steps-visited":t.stepsVisited,onGoStepBack:t.goStepBack,onGoStepForward:t.goStepForward},{step1:s(()=>[e(o,{tag:"h3",text:"_A_WIZARD_STEP_1_"}),a("p",null,l(t.text),1)]),step2:s(()=>[e(o,{tag:"h3",text:"_A_WIZARD_STEP_2_"}),a("p",null,l(t.text),1)]),step3:s(()=>[e(o,{tag:"h3",text:"_A_WIZARD_STEP_3_"}),a("p",null,l(t.text),1)]),step4:s(()=>[e(o,{tag:"h3",text:"_A_WIZARD_STEP_4_"}),a("p",null,l(t.text),1)]),_:1},8,["steps","step-active","steps-visited","onGoStepBack","onGoStepForward"])]),_:1},8,["code-html","code-js"])}const ie=I(oe,[["render",le]]);function ne(){return{codeHtml:`<div
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
</a-wizard>`}}function re(){return{codeJs:`import {
  ref,
} from "vue";

import ASwitch from "aloha-vue/src/ui/ASwitch/ASwitch";
import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
import AWizard from "aloha-vue/src/AWizard/AWizard";
    
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
};`}}const pe={name:"PageWizardIsStepNumberVisible",components:{AlohaExample:b,ASwitch:Z,ATranslation:E,AWizard:P},setup(){const{codeHtml:t}=ne(),{codeJs:_}=re(),r=S(!1);return{codeHtml:t,codeJs:_,isStepNumberVisible:r,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:"step1",label:"_A_WIZARD_STEP_1_",title:"_A_WIZARD_STEP_1_"},{slot:"step2",label:"_A_WIZARD_STEP_2_",title:"_A_WIZARD_STEP_2_"},{slot:"step3",label:"_A_WIZARD_STEP_3_",title:"_A_WIZARD_STEP_3_"},{slot:"step4",label:"_A_WIZARD_STEP_4_",title:"_A_WIZARD_STEP_4_"}]}}},ue={class:"a_columns a_columns_count_12"},de={class:"a_column a_column_6 a_columns_count_12_touch a_mb_5"};function Ae(t,_,r,u,A,c){const o=i("a-switch"),n=i("a-translation"),p=i("a-wizard"),m=i("aloha-example");return R(),T(m,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_WIZARD_GROUP_IS_STEP_NUMBER_VISIBLE_HEADER_",description:"_A_WIZARD_GROUP_IS_STEP_NUMBER_VISIBLE_DESCRIPTION_",props:["is-step-number-visible"]},{default:s(()=>[a("div",ue,[a("div",de,[e(o,{modelValue:t.isStepNumberVisible,"onUpdate:modelValue":_[0]||(_[0]=d=>t.isStepNumberVisible=d),label:"is-step-number-visible"},null,8,["modelValue"])])]),e(p,{steps:t.wizardSteps,"is-step-number-visible":t.isStepNumberVisible},{step1:s(()=>[e(n,{tag:"h3",text:"_A_WIZARD_STEP_1_"}),a("p",null,l(t.text),1)]),step2:s(()=>[e(n,{tag:"h3",text:"_A_WIZARD_STEP_2_"}),a("p",null,l(t.text),1)]),step3:s(()=>[e(n,{tag:"h3",text:"_A_WIZARD_STEP_3_"}),a("p",null,l(t.text),1)]),step4:s(()=>[e(n,{tag:"h3",text:"_A_WIZARD_STEP_4_"}),a("p",null,l(t.text),1)]),_:1},8,["steps","is-step-number-visible"])]),_:1},8,["code-html","code-js"])}const ce=I(pe,[["render",Ae]]);function me(){return{codeHtml:`<div
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
</a-wizard>`}}function Se(){return{codeJs:`import {
  ref,
} from "vue";

import ASwitch from "aloha-vue/src/ui/ASwitch/ASwitch";
import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
import AWizard from "aloha-vue/src/AWizard/AWizard";
    
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
};`}}const De={name:"PageWizardIsStepsJustified",components:{AlohaExample:b,ASwitch:Z,ATranslation:E,AWizard:P},setup(){const{codeHtml:t}=me(),{codeJs:_}=Se(),r=S(!1);return{codeHtml:t,codeJs:_,isStepsJustified:r,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:"step1",label:"_A_WIZARD_STEP_1_",title:"_A_WIZARD_STEP_1_"},{slot:"step2",label:"_A_WIZARD_STEP_2_",title:"_A_WIZARD_STEP_2_"},{slot:"step3",label:"_A_WIZARD_STEP_3_",title:"_A_WIZARD_STEP_3_"},{slot:"step4",label:"_A_WIZARD_STEP_4_",title:"_A_WIZARD_STEP_4_"}]}}},Ie={class:"a_columns a_columns_count_12"},Te={class:"a_column a_column_6 a_columns_count_12_touch a_mb_5"};function Re(t,_,r,u,A,c){const o=i("a-switch"),n=i("a-translation"),p=i("a-wizard"),m=i("aloha-example");return R(),T(m,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_WIZARD_GROUP_IS_STEPS_JUSTIFIED_HEADER_",description:"_A_WIZARD_GROUP_IS_STEPS_JUSTIFIED_DESCRIPTION_",props:["is-steps-justified"]},{default:s(()=>[a("div",Ie,[a("div",Te,[e(o,{modelValue:t.isStepsJustified,"onUpdate:modelValue":_[0]||(_[0]=d=>t.isStepsJustified=d),label:"is-steps-justified"},null,8,["modelValue"])])]),e(p,{steps:t.wizardSteps,"is-steps-justified":t.isStepsJustified},{step1:s(()=>[e(n,{tag:"h3",text:"_A_WIZARD_STEP_1_"}),a("p",null,l(t.text),1)]),step2:s(()=>[e(n,{tag:"h3",text:"_A_WIZARD_STEP_2_"}),a("p",null,l(t.text),1)]),step3:s(()=>[e(n,{tag:"h3",text:"_A_WIZARD_STEP_3_"}),a("p",null,l(t.text),1)]),step4:s(()=>[e(n,{tag:"h3",text:"_A_WIZARD_STEP_4_"}),a("p",null,l(t.text),1)]),_:1},8,["steps","is-steps-justified"])]),_:1},8,["code-html","code-js"])}const be=I(De,[["render",Re]]);function Pe(){return{codeHtml:`<div
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
</a-wizard>`}}function Ee(){return{codeJs:`import {
  ref,
} from "vue";

import ASwitch from "aloha-vue/src/ui/ASwitch/ASwitch";
import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
import AWizard from "aloha-vue/src/AWizard/AWizard";
    
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
};`}}const We={name:"PageWizardIsToolbar",components:{AlohaExample:b,ASwitch:Z,ATranslation:E,AWizard:P},setup(){const{codeHtml:t}=Pe(),{codeJs:_}=Ee(),r=S(!0),u=S(!0);return{codeHtml:t,codeJs:_,isToolbarBottom:r,isToolbarTop:u,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:"step1",label:"_A_WIZARD_STEP_1_",title:"_A_WIZARD_STEP_1_"},{slot:"step2",label:"_A_WIZARD_STEP_2_",title:"_A_WIZARD_STEP_2_"},{slot:"step3",label:"_A_WIZARD_STEP_3_",title:"_A_WIZARD_STEP_3_"},{slot:"step4",label:"_A_WIZARD_STEP_4_",title:"_A_WIZARD_STEP_4_"}]}}},Ze={class:"a_columns a_columns_count_12"},he={class:"a_column a_column_6 a_columns_count_12_touch a_mb_5"};function we(t,_,r,u,A,c){const o=i("a-switch"),n=i("a-translation"),p=i("a-wizard"),m=i("aloha-example");return R(),T(m,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_WIZARD_GROUP_IS_TOOLBAR_HEADER_",description:"_A_WIZARD_GROUP_IS_TOOLBAR_DESCRIPTION_",props:["is-toolbar-bottom","is-toolbar-top"]},{default:s(()=>[a("div",Ze,[a("div",he,[e(o,{modelValue:t.isToolbarBottom,"onUpdate:modelValue":_[0]||(_[0]=d=>t.isToolbarBottom=d),label:"is-toolbar-bottom"},null,8,["modelValue"]),e(o,{modelValue:t.isToolbarTop,"onUpdate:modelValue":_[1]||(_[1]=d=>t.isToolbarTop=d),label:"is-toolbar-top"},null,8,["modelValue"])])]),e(p,{steps:t.wizardSteps,"is-toolbar-bottom":t.isToolbarBottom,"is-toolbar-top":t.isToolbarTop},{step1:s(()=>[e(n,{tag:"h3",text:"_A_WIZARD_STEP_1_"}),a("p",null,l(t.text),1)]),step2:s(()=>[e(n,{tag:"h3",text:"_A_WIZARD_STEP_2_"}),a("p",null,l(t.text),1)]),step3:s(()=>[e(n,{tag:"h3",text:"_A_WIZARD_STEP_3_"}),a("p",null,l(t.text),1)]),step4:s(()=>[e(n,{tag:"h3",text:"_A_WIZARD_STEP_4_"}),a("p",null,l(t.text),1)]),_:1},8,["steps","is-toolbar-bottom","is-toolbar-top"])]),_:1},8,["code-html","code-js"])}const fe=I(We,[["render",we]]);function ge(){return{codeHtml:`<a-wizard
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
</a-wizard>`}}function Oe(){return{codeJs:`import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
import AWizard from "aloha-vue/src/AWizard/AWizard";
    
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
};`}}const ve={name:"PageWizardKeyId",components:{AlohaExample:b,ATranslation:E,AWizard:P},setup(){const{codeHtml:t}=ge(),{codeJs:_}=Oe();return{codeHtml:t,codeJs:_,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{id:"0",slot:"step1",label:"_A_WIZARD_STEP_1_",title:"_A_WIZARD_STEP_1_"},{id:"1",slot:"step2",label:"_A_WIZARD_STEP_2_",title:"_A_WIZARD_STEP_2_"},{id:"2",slot:"step3",label:"_A_WIZARD_STEP_3_",title:"_A_WIZARD_STEP_3_"},{id:"3",slot:"step4",label:"_A_WIZARD_STEP_4_",title:"_A_WIZARD_STEP_4_"}]}}};function ze(t,_,r,u,A,c){const o=i("a-translation"),n=i("a-wizard"),p=i("aloha-example");return R(),T(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_WIZARD_GROUP_KEY_ID_HEADER_",description:"_A_WIZARD_GROUP_KEY_ID_DESCRIPTION_",props:["key-id"]},{default:s(()=>[e(n,{steps:t.wizardSteps,"key-id":"id"},{step1:s(()=>[e(o,{tag:"h3",text:"_A_WIZARD_STEP_1_"}),a("p",null,l(t.text),1)]),step2:s(()=>[e(o,{tag:"h3",text:"_A_WIZARD_STEP_2_"}),a("p",null,l(t.text),1)]),step3:s(()=>[e(o,{tag:"h3",text:"_A_WIZARD_STEP_3_"}),a("p",null,l(t.text),1)]),step4:s(()=>[e(o,{tag:"h3",text:"_A_WIZARD_STEP_4_"}),a("p",null,l(t.text),1)]),_:1},8,["steps"])]),_:1},8,["code-html","code-js"])}const xe=I(ve,[["render",ze]]);function Le(){return{codeHtml:`<div
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
</a-wizard>`}}function Be(){return{codeJs:`import {
  ref,
} from "vue";

import ASwitch from "aloha-vue/src/ui/ASwitch/ASwitch";
import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
import AWizard from "aloha-vue/src/AWizard/AWizard";
    
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
};`}}const Me={name:"PageWizardShowOnlyActiveStepMobile",components:{AlohaExample:b,ASelect:h,ASwitch:Z,AWizard:P},setup(){const{codeHtml:t}=Le(),{codeJs:_}=Be(),r=S(!0),u=S("line");return{codeHtml:t,codeJs:_,modelType:u,showOnlyActiveStepMobile:r,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,types:[{label:"_A_WIZARD_TYPE_BASIC_",value:"basic"},{label:"_A_WIZARD_TYPE_ARROWS_",value:"arrows"},{label:"_A_WIZARD_TYPE_LINE_",value:"line"},{label:"_A_WIZARD_TYPE_ROUND_",value:"round"}],wizardSteps:[{id:"1",slot:"step",label:"Lorem"},{id:"2",slot:"step",label:"ipsum"},{id:"3",slot:"step",label:"dolor"},{id:"4",slot:"step",label:"sit"},{id:"5",slot:"step",label:"amet"},{id:"6",slot:"step",label:"consectetur"},{id:"7",slot:"step",label:"adipiscing"},{id:"8",slot:"step",label:"elit"},{id:"9",slot:"step",label:"Quisque"},{id:"10",slot:"step",label:"nisl"}]}}},ye={class:"a_columns a_columns_count_12"},qe={class:"a_column a_column_6 a_columns_count_12_touch a_mb_5"};function Ne(t,_,r,u,A,c){const o=i("a-switch"),n=i("a-select"),p=i("a-wizard"),m=i("aloha-example");return R(),T(m,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_WIZARD_GROUP_SHOW_ONLY_ACTIVE_STEP_MOBILE_HEADER_",description:"_A_WIZARD_GROUP_SHOW_ONLY_ACTIVE_STEP_MOBILE_DESCRIPTION_",props:["show-only-active-step-mobile","is-mobile"]},{default:s(()=>[a("div",ye,[a("div",qe,[e(o,{modelValue:t.showOnlyActiveStepMobile,"onUpdate:modelValue":_[0]||(_[0]=d=>t.showOnlyActiveStepMobile=d),label:"show-only-active-step-mobile"},null,8,["modelValue"]),e(n,{class:"a_mt_4",modelValue:t.modelType,"onUpdate:modelValue":_[1]||(_[1]=d=>t.modelType=d),label:"_A_WIZARD_LABEL_TYPE_","key-id":"value","key-label":"label",data:t.types,deselectable:!1,"translate-data":!0},null,8,["modelValue","data"])])]),e(p,{steps:t.wizardSteps,"is-mobile":!0,"show-only-active-step-mobile":t.showOnlyActiveStepMobile,type:t.modelType},{step:s(({step:d})=>[a("h2",null,l(d.label),1),a("p",null,l(t.text),1)]),_:1},8,["steps","show-only-active-step-mobile","type"])]),_:1},8,["code-html","code-js"])}const $e=I(Me,[["render",Ne]]);function Ce(){return{codeHtml:`<a-wizard
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
</a-wizard>`}}function He(){return{codeJs:`import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
import AWizard from "aloha-vue/src/AWizard/AWizard";
    
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
};`}}const Je={name:"PageWizardSlot",components:{AlohaExample:b,ATranslation:E,AWizard:P},setup(){const{codeHtml:t}=Ce(),{codeJs:_}=He();return{codeHtml:t,codeJs:_,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:"step",label:"_A_WIZARD_STEP_1_",title:"_A_WIZARD_STEP_1_"},{slot:"step",label:"_A_WIZARD_STEP_2_",title:"_A_WIZARD_STEP_2_"},{slot:"step",label:"_A_WIZARD_STEP_3_",title:"_A_WIZARD_STEP_3_"},{slot:"step4",label:"_A_WIZARD_STEP_4_",title:"_A_WIZARD_STEP_4_"}]}}},Ue=a("h2",null,"ALOHA",-1);function ke(t,_,r,u,A,c){const o=i("a-translation"),n=i("a-wizard"),p=i("aloha-example");return R(),T(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_WIZARD_GROUP_SLOT_HEADER_",description:"_A_WIZARD_GROUP_SLOT_DESCRIPTION_",slots:["slot"],props:"steps.slot"},{default:s(()=>[e(n,{steps:t.wizardSteps},{step:s(({step:m,stepIndex:d})=>[e(o,{tag:"h3",text:m.label},null,8,["text"]),a("p",null,l(t.text),1)]),step4:s(()=>[Ue,a("p",null,l(t.text),1)]),_:1},8,["steps"])]),_:1},8,["code-html","code-js"])}const Ve=I(Je,[["render",ke]]);function je(){return{codeHtml:`<a-wizard
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
</a-wizard>`}}function Fe(){return{codeJs:`import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
import AWizard from "aloha-vue/src/AWizard/AWizard";
    
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
};`}}const Ge={name:"PageWizardSlotLabel",components:{AlohaExample:b,ATranslation:E,AWizard:P},setup(){const{codeHtml:t}=je(),{codeJs:_}=Fe();return{codeHtml:t,codeJs:_,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:"step1",slotLabel:"stepLabel",label:"_A_WIZARD_STEP_1_",title:"_A_WIZARD_STEP_1_"},{slotLabel:"stepLabel",slot:"step2",label:"_A_WIZARD_STEP_2_",title:"_A_WIZARD_STEP_2_"},{slotLabel:"stepLabel",slot:"step3",label:"_A_WIZARD_STEP_3_",title:"_A_WIZARD_STEP_3_"},{slotLabel:"stepLabel4",slot:"step4",label:"_A_WIZARD_STEP_4_",title:"_A_WIZARD_STEP_4_"}]}}},Ye=a("span",null,"ALOHA",-1);function Qe(t,_,r,u,A,c){const o=i("a-translation"),n=i("a-wizard"),p=i("aloha-example");return R(),T(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_WIZARD_GROUP_SLOT_LABEL_HEADER_",description:"_A_WIZARD_GROUP_SLOT_LABEL_DESCRIPTION_",slots:["slotLabel"],props:"steps.slotLabel"},{default:s(()=>[e(n,{steps:t.wizardSteps},{stepLabel:s(({step:m,stepNumber:d,stepIndex:D,isStepDisabled:W,isStepActive:f})=>[e(o,{tag:"span",text:m.label},null,8,["text"])]),stepLabel4:s(()=>[Ye]),step1:s(()=>[e(o,{tag:"h3",text:"_A_WIZARD_STEP_1_"}),a("p",null,l(t.text),1)]),step2:s(()=>[e(o,{tag:"h3",text:"_A_WIZARD_STEP_2_"}),a("p",null,l(t.text),1)]),step3:s(()=>[e(o,{tag:"h3",text:"_A_WIZARD_STEP_3_"}),a("p",null,l(t.text),1)]),step4:s(()=>[e(o,{tag:"h3",text:"_A_WIZARD_STEP_4_"}),a("p",null,l(t.text),1)]),_:1},8,["steps"])]),_:1},8,["code-html","code-js"])}const Xe=I(Ge,[["render",Qe]]);function Ke(){return{codeHtml:`<a-wizard
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
</a-wizard>`}}function ta(){return{codeJs:`import AButton from "aloha-vue/src/AButton/AButton";
import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
import AWizard from "aloha-vue/src/AWizard/AWizard";
    
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
};`}}const ea={name:"PageWizardSlotToolbar",components:{AButton:O,AlohaExample:b,ATranslation:E,AWizard:P},setup(){const{codeHtml:t}=Ke(),{codeJs:_}=ta();return{codeHtml:t,codeJs:_,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:"step1",label:"_A_WIZARD_STEP_1_",title:"_A_WIZARD_STEP_1_"},{slot:"step2",label:"_A_WIZARD_STEP_2_",title:"_A_WIZARD_STEP_2_"},{slot:"step3",label:"_A_WIZARD_STEP_3_",title:"_A_WIZARD_STEP_3_"},{slot:"step4",label:"_A_WIZARD_STEP_4_",title:"_A_WIZARD_STEP_4_"}]}}};function aa(t,_,r,u,A,c){const o=i("a-button"),n=i("a-translation"),p=i("a-wizard"),m=i("aloha-example");return R(),T(m,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_WIZARD_GROUP_SLOT_TOOLBAR_HEADER_",description:"_A_WIZARD_GROUP_SLOT_TOOLBAR_DESCRIPTION_",slots:["toolbar"]},{default:s(()=>[e(p,{steps:t.wizardSteps},{toolbar:s(()=>[e(o,{class:"a_btn a_btn_primary",text:"aloha"})]),step1:s(()=>[e(n,{tag:"h3",text:"_A_WIZARD_STEP_1_"}),a("p",null,l(t.text),1)]),step2:s(()=>[e(n,{tag:"h3",text:"_A_WIZARD_STEP_2_"}),a("p",null,l(t.text),1)]),step3:s(()=>[e(n,{tag:"h3",text:"_A_WIZARD_STEP_3_"}),a("p",null,l(t.text),1)]),step4:s(()=>[e(n,{tag:"h3",text:"_A_WIZARD_STEP_4_"}),a("p",null,l(t.text),1)]),_:1},8,["steps"])]),_:1},8,["code-html","code-js"])}const sa=I(ea,[["render",aa]]);function _a(){return{codeHtml:`<a-wizard
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
</a-wizard>`}}function oa(){return{codeJs:`import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
import AWizard from "aloha-vue/src/AWizard/AWizard";
    
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
};`}}const la={name:"PageWizardStepActive",components:{AlohaExample:b,ATranslation:E,AWizard:P},setup(){const{codeHtml:t}=_a(),{codeJs:_}=oa();return{codeHtml:t,codeJs:_,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:"step1",label:"_A_WIZARD_STEP_1_",title:"_A_WIZARD_STEP_1_"},{slot:"step2",label:"_A_WIZARD_STEP_2_",title:"_A_WIZARD_STEP_2_"},{slot:"step3",label:"_A_WIZARD_STEP_3_",title:"_A_WIZARD_STEP_3_"},{slot:"step4",label:"_A_WIZARD_STEP_4_",title:"_A_WIZARD_STEP_4_"}]}}};function ia(t,_,r,u,A,c){const o=i("a-translation"),n=i("a-wizard"),p=i("aloha-example");return R(),T(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_WIZARD_GROUP_STEP_ACTIVE_HEADER_",description:"_A_WIZARD_GROUP_STEP_ACTIVE_DESCRIPTION_",props:["step-active"]},{default:s(()=>[e(n,{steps:t.wizardSteps,"step-active":2},{step1:s(()=>[e(o,{tag:"h3",text:"_A_WIZARD_STEP_1_"}),a("p",null,l(t.text),1)]),step2:s(()=>[e(o,{tag:"h3",text:"_A_WIZARD_STEP_2_"}),a("p",null,l(t.text),1)]),step3:s(()=>[e(o,{tag:"h3",text:"_A_WIZARD_STEP_3_"}),a("p",null,l(t.text),1)]),step4:s(()=>[e(o,{tag:"h3",text:"_A_WIZARD_STEP_4_"}),a("p",null,l(t.text),1)]),_:1},8,["steps"])]),_:1},8,["code-html","code-js"])}const na=I(la,[["render",ia]]);function ra(){return{codeHtml:`<div
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
</a-wizard>`}}function pa(){return{codeJs:`import {
  ref,
} from "vue";

import ASelect from "aloha-vue/src/ui/ASelect/ASelect";
import ASwitch from "aloha-vue/src/ui/ASwitch/ASwitch";
import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
import AWizard from "aloha-vue/src/AWizard/AWizard";
    
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
};`}}const ua={name:"PageWizardStepsErrors",components:{AlohaExample:b,ASelect:h,ASwitch:Z,ATranslation:E,AWizard:P},setup(){const{codeHtml:t}=ra(),{codeJs:_}=pa(),r=S("basic"),u=[{label:"_A_WIZARD_TYPE_BASIC_",value:"basic"},{label:"_A_WIZARD_TYPE_ARROWS_",value:"arrows"},{label:"_A_WIZARD_TYPE_LINE_",value:"line"},{label:"_A_WIZARD_TYPE_ROUND_",value:"round"}],A=S([{slot:"step1",label:"_A_WIZARD_STEP_1_",title:"_A_WIZARD_STEP_1_",error:!1},{slot:"step2",label:"_A_WIZARD_STEP_2_",title:"_A_WIZARD_STEP_2_",error:!1},{slot:"step3",label:"_A_WIZARD_STEP_3_",title:"_A_WIZARD_STEP_3_",error:!0},{slot:"step4",label:"_A_WIZARD_STEP_4_",title:"_A_WIZARD_STEP_4_",error:!1}]);return{codeHtml:t,codeJs:_,modelType:r,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,types:u,wizardSteps:A}}},da={class:"a_columns a_columns_count_12"},Aa={class:"a_column a_column_6 a_columns_count_12_touch a_mb_5"};function ca(t,_,r,u,A,c){const o=i("a-select"),n=i("a-switch"),p=i("a-translation"),m=i("a-wizard"),d=i("aloha-example");return R(),T(d,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_WIZARD_GROUP_STEPS_ERRORS_HEADER_",description:"_A_WIZARD_GROUP_STEPS_ERRORS_DESCRIPTION_",props:"steps.error"},{default:s(()=>[a("div",da,[a("div",Aa,[e(o,{modelValue:t.modelType,"onUpdate:modelValue":_[0]||(_[0]=D=>t.modelType=D),label:"_A_WIZARD_LABEL_TYPE_","key-id":"value","key-label":"label",data:t.types,deselectable:!1,"translate-data":!0},null,8,["modelValue","data"]),e(n,{modelValue:t.wizardSteps[0].error,"onUpdate:modelValue":_[1]||(_[1]=D=>t.wizardSteps[0].error=D),label:"_A_WIZARD_STEP_1_"},null,8,["modelValue"]),e(n,{modelValue:t.wizardSteps[1].error,"onUpdate:modelValue":_[2]||(_[2]=D=>t.wizardSteps[1].error=D),label:"_A_WIZARD_STEP_2_"},null,8,["modelValue"]),e(n,{modelValue:t.wizardSteps[2].error,"onUpdate:modelValue":_[3]||(_[3]=D=>t.wizardSteps[2].error=D),label:"_A_WIZARD_STEP_3_"},null,8,["modelValue"]),e(n,{modelValue:t.wizardSteps[3].error,"onUpdate:modelValue":_[4]||(_[4]=D=>t.wizardSteps[3].error=D),label:"_A_WIZARD_STEP_4_"},null,8,["modelValue"])])]),e(m,{steps:t.wizardSteps,type:t.modelType},{step1:s(()=>[e(p,{tag:"h3",text:"_A_WIZARD_STEP_1_"}),a("p",null,l(t.text),1)]),step2:s(()=>[e(p,{tag:"h3",text:"_A_WIZARD_STEP_2_"}),a("p",null,l(t.text),1)]),step3:s(()=>[e(p,{tag:"h3",text:"_A_WIZARD_STEP_3_"}),a("p",null,l(t.text),1)]),step4:s(()=>[e(p,{tag:"h3",text:"_A_WIZARD_STEP_4_"}),a("p",null,l(t.text),1)]),_:1},8,["steps","type"])]),_:1},8,["code-html","code-js"])}const ma=I(ua,[["render",ca]]);function Sa(){return{codeHtml:`<div
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
</a-wizard>`}}function Da(){return{codeJs:`import {
  ref,
} from "vue";

import ASelect from "aloha-vue/src/ui/ASelect/ASelect";
import ASwitch from "aloha-vue/src/ui/ASwitch/ASwitch";
import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
import AWizard from "aloha-vue/src/AWizard/AWizard";
    
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
};`}}const Ia={name:"PageWizardStepsWarnings",components:{AlohaExample:b,ASelect:h,ASwitch:Z,ATranslation:E,AWizard:P},setup(){const{codeHtml:t}=Sa(),{codeJs:_}=Da(),r=S("basic"),u=[{label:"_A_WIZARD_TYPE_BASIC_",value:"basic"},{label:"_A_WIZARD_TYPE_ARROWS_",value:"arrows"},{label:"_A_WIZARD_TYPE_LINE_",value:"line"},{label:"_A_WIZARD_TYPE_ROUND_",value:"round"}],A=S([{slot:"step1",label:"_A_WIZARD_STEP_1_",title:"_A_WIZARD_STEP_1_",warning:!1},{slot:"step2",label:"_A_WIZARD_STEP_2_",title:"_A_WIZARD_STEP_2_",warning:!1},{slot:"step3",label:"_A_WIZARD_STEP_3_",title:"_A_WIZARD_STEP_3_",warning:!0},{slot:"step4",label:"_A_WIZARD_STEP_4_",title:"_A_WIZARD_STEP_4_",warning:!1}]);return{codeHtml:t,codeJs:_,modelType:r,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,types:u,wizardSteps:A}}},Ta={class:"a_columns a_columns_count_12"},Ra={class:"a_column a_column_6 a_columns_count_12_touch a_mb_5"};function ba(t,_,r,u,A,c){const o=i("a-select"),n=i("a-switch"),p=i("a-translation"),m=i("a-wizard"),d=i("aloha-example");return R(),T(d,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_WIZARD_GROUP_STEPS_WARNINGS_HEADER_",description:"_A_WIZARD_GROUP_STEPS_WARNINGS_DESCRIPTION_",props:"steps.warning"},{default:s(()=>[a("div",Ta,[a("div",Ra,[e(o,{modelValue:t.modelType,"onUpdate:modelValue":_[0]||(_[0]=D=>t.modelType=D),label:"_A_WIZARD_LABEL_TYPE_","key-id":"value","key-label":"label",data:t.types,deselectable:!1,"translate-data":!0},null,8,["modelValue","data"]),e(n,{modelValue:t.wizardSteps[0].warning,"onUpdate:modelValue":_[1]||(_[1]=D=>t.wizardSteps[0].warning=D),label:"_A_WIZARD_STEP_1_"},null,8,["modelValue"]),e(n,{modelValue:t.wizardSteps[1].warning,"onUpdate:modelValue":_[2]||(_[2]=D=>t.wizardSteps[1].warning=D),label:"_A_WIZARD_STEP_2_"},null,8,["modelValue"]),e(n,{modelValue:t.wizardSteps[2].warning,"onUpdate:modelValue":_[3]||(_[3]=D=>t.wizardSteps[2].warning=D),label:"_A_WIZARD_STEP_3_"},null,8,["modelValue"]),e(n,{modelValue:t.wizardSteps[3].warning,"onUpdate:modelValue":_[4]||(_[4]=D=>t.wizardSteps[3].warning=D),label:"_A_WIZARD_STEP_4_"},null,8,["modelValue"])])]),e(m,{steps:t.wizardSteps,type:t.modelType},{step1:s(()=>[e(p,{tag:"h3",text:"_A_WIZARD_STEP_1_"}),a("p",null,l(t.text),1)]),step2:s(()=>[e(p,{tag:"h3",text:"_A_WIZARD_STEP_2_"}),a("p",null,l(t.text),1)]),step3:s(()=>[e(p,{tag:"h3",text:"_A_WIZARD_STEP_3_"}),a("p",null,l(t.text),1)]),step4:s(()=>[e(p,{tag:"h3",text:"_A_WIZARD_STEP_4_"}),a("p",null,l(t.text),1)]),_:1},8,["steps","type"])]),_:1},8,["code-html","code-js"])}const Pa=I(Ia,[["render",ba]]);function Ea(){return{codeHtml:`<h3 class="a_my_3">type="line", sub-type="square"</h3>
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
</a-wizard>`}}function Wa(){return{codeJs:`import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
import AWizard from "aloha-vue/src/AWizard/AWizard";
    
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
};`}}const Za={name:"PageWizardSubType",components:{AlohaExample:b,ATranslation:E,AWizard:P},setup(){const{codeHtml:t}=Ea(),{codeJs:_}=Wa();return{codeHtml:t,codeJs:_,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:"step1",label:"_A_WIZARD_STEP_1_",title:"_A_WIZARD_STEP_1_"},{slot:"step2",label:"_A_WIZARD_STEP_2_",title:"_A_WIZARD_STEP_2_"},{slot:"step3",label:"_A_WIZARD_STEP_3_",title:"_A_WIZARD_STEP_3_"},{slot:"step4",label:"_A_WIZARD_STEP_4_",title:"_A_WIZARD_STEP_4_"}]}}},ha=a("h3",{class:"a_my_3"},'type="line", sub-type="square"',-1),wa=a("h3",{class:"a_my_3"},'type="line", sub-type="circle"',-1),fa=a("h3",{class:"a_my_3"},'type="line", sub-type="square-bordered"',-1),ga=a("h3",{class:"a_my_3"},'type="line", sub-type="circle-bordered"',-1);function Oa(t,_,r,u,A,c){const o=i("a-translation"),n=i("a-wizard"),p=i("aloha-example");return R(),T(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_WIZARD_GROUP_SUB_TYPE_HEADER_",description:"_A_WIZARD_GROUP_SUB_TYPE_DESCRIPTION_",props:["sub-type","type"]},{default:s(()=>[ha,e(n,{steps:t.wizardSteps,type:"line","sub-type":"square"},{step1:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_1_"}),a("p",null,l(t.text),1)]),step2:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_2_"}),a("p",null,l(t.text),1)]),step3:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_3_"}),a("p",null,l(t.text),1)]),step4:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_4_"}),a("p",null,l(t.text),1)]),_:1},8,["steps"]),wa,e(n,{steps:t.wizardSteps,type:"line","sub-type":"circle"},{step1:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_1_"}),a("p",null,l(t.text),1)]),step2:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_2_"}),a("p",null,l(t.text),1)]),step3:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_3_"}),a("p",null,l(t.text),1)]),step4:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_4_"}),a("p",null,l(t.text),1)]),_:1},8,["steps"]),fa,e(n,{steps:t.wizardSteps,type:"line","sub-type":"square-bordered"},{step1:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_1_"}),a("p",null,l(t.text),1)]),step2:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_2_"}),a("p",null,l(t.text),1)]),step3:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_3_"}),a("p",null,l(t.text),1)]),step4:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_4_"}),a("p",null,l(t.text),1)]),_:1},8,["steps"]),ga,e(n,{steps:t.wizardSteps,type:"line","sub-type":"circle-bordered"},{step1:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_1_"}),a("p",null,l(t.text),1)]),step2:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_2_"}),a("p",null,l(t.text),1)]),step3:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_3_"}),a("p",null,l(t.text),1)]),step4:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_4_"}),a("p",null,l(t.text),1)]),_:1},8,["steps"])]),_:1},8,["code-html","code-js"])}const va=I(Za,[["render",Oa]]);function za(){return{codeHtml:`<h3 class="a_my_3">type="basic"</h3>
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
</a-wizard>`}}function xa(){return{codeJs:`import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
import AWizard from "aloha-vue/src/AWizard/AWizard";
    
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
};`}}const La={name:"PageWizardType",components:{AlohaExample:b,ATranslation:E,AWizard:P},setup(){const{codeHtml:t}=za(),{codeJs:_}=xa();return{codeHtml:t,codeJs:_,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:"step1",label:"_A_WIZARD_STEP_1_",title:"_A_WIZARD_STEP_1_"},{slot:"step2",label:"_A_WIZARD_STEP_2_",title:"_A_WIZARD_STEP_2_"},{slot:"step3",label:"_A_WIZARD_STEP_3_",title:"_A_WIZARD_STEP_3_"},{slot:"step4",label:"_A_WIZARD_STEP_4_",title:"_A_WIZARD_STEP_4_"}]}}},Ba=a("h3",{class:"a_my_3"},'type="basic"',-1),Ma=a("h3",{class:"a_my_3"},'type="line"',-1),ya=a("h3",{class:"a_my_3"},'type="round"',-1),qa=a("h3",{class:"a_my_3"},'type="arrows"',-1);function Na(t,_,r,u,A,c){const o=i("a-translation"),n=i("a-wizard"),p=i("aloha-example");return R(),T(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_WIZARD_GROUP_TYPE_HEADER_",description:"_A_WIZARD_GROUP_TYPE_DESCRIPTION_",props:"type"},{default:s(()=>[Ba,e(n,{steps:t.wizardSteps,type:"basic"},{step1:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_1_"}),a("p",null,l(t.text),1)]),step2:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_2_"}),a("p",null,l(t.text),1)]),step3:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_3_"}),a("p",null,l(t.text),1)]),step4:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_4_"}),a("p",null,l(t.text),1)]),_:1},8,["steps"]),Ma,e(n,{steps:t.wizardSteps,type:"line"},{step1:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_1_"}),a("p",null,l(t.text),1)]),step2:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_2_"}),a("p",null,l(t.text),1)]),step3:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_3_"}),a("p",null,l(t.text),1)]),step4:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_4_"}),a("p",null,l(t.text),1)]),_:1},8,["steps"]),ya,e(n,{steps:t.wizardSteps,type:"round"},{step1:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_1_"}),a("p",null,l(t.text),1)]),step2:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_2_"}),a("p",null,l(t.text),1)]),step3:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_3_"}),a("p",null,l(t.text),1)]),step4:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_4_"}),a("p",null,l(t.text),1)]),_:1},8,["steps"]),qa,e(n,{steps:t.wizardSteps,type:"arrows"},{step1:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_1_"}),a("p",null,l(t.text),1)]),step2:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_2_"}),a("p",null,l(t.text),1)]),step3:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_3_"}),a("p",null,l(t.text),1)]),step4:s(()=>[e(o,{tag:"h4",text:"_A_WIZARD_STEP_4_"}),a("p",null,l(t.text),1)]),_:1},8,["steps"])]),_:1},8,["code-html","code-js"])}const $a=I(La,[["render",Na]]);function Ca(){return{dataExposes:[{name:"buttonRef",description:"_A_SHOW_MORE_EXPOSES_BUTTON_REF_DESCRIPTION_",type:"Object"},{name:"containerRef",description:"_A_SHOW_MORE_EXPOSES_CONTAINER_REF_DESCRIPTION_",type:"Object"},{name:"isButtonVisible",description:"_A_SHOW_MORE_EXPOSES_IS_BUTTON_VISIBLE_DESCRIPTION_",type:"Boolean"},{name:"isOpen",description:"_A_SHOW_MORE_EXPOSES_IS_OPEN_DESCRIPTION_",type:"Boolean"},{name:"toggleButton",description:"_A_SHOW_MORE_EXPOSES_TOGGLE_BUTTON_DESCRIPTION_",type:"Function"}]}}function Ha(){return{dataEvents:[{name:"go-step-back",description:"_A_WIZARD_EVENTS_GO_STEP_BACK_DESCRIPTION_",type:"Function"},{name:"go-step-forward",description:"_A_WIZARD_EVENTS_GO_STEP_FORWARD_DESCRIPTION_",type:"Function"}]}}function Ja(){const t=g(()=>X({placeholder:"_A_WIZARD_COMPONENT_NAME_"}));return{pageTitle:g(()=>`AWizard${t.value?` (${t.value})`:""}`)}}function Ua(){return{dataProps:[{name:"aria-label",description:"_A_WIZARD_PROPS_ARIA_LABEL_DESCRIPTION_",type:"String",default:"_A_WIZARD_ARIA_LABEL_",required:!1},{name:"aria-label-steps",description:"_A_WIZARD_PROPS_ARIA_LABEL_STEPS_DESCRIPTION_",type:"String",default:"_A_WIZARD_STEPS_ARIA_LABEL_",required:!1},{name:"back-button-attributes",description:"_A_WIZARD_PROPS_BACK_BUTTON_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"back-button-class",description:"_A_WIZARD_PROPS_BACK_BUTTON_CLASS_DESCRIPTION_",type:"String / Array / Object",default:"a_btn a_btn_secondary",required:!1},{name:"back-button-icon-left",description:"_A_WIZARD_PROPS_BACK_BUTTON_ICON_LEFT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"back-button-icon-right",description:"_A_WIZARD_PROPS_BACK_BUTTON_ICON_RIGHT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"back-button-text",description:"_A_WIZARD_PROPS_BACK_BUTTON_TEXT_DESCRIPTION_",type:"String",default:"_A_WIZARD_PREVIOUS_",required:!1},{name:"back-button-title",description:"_A_WIZARD_PROPS_BACK_BUTTON_TITLE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"extra",description:"_A_WIZARD_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"forward-button-attributes",description:"_A_WIZARD_PROPS_FORWARD_BUTTON_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"forward-button-class",description:"_A_WIZARD_PROPS_FORWARD_BUTTON_CLASS_DESCRIPTION_",type:"String / Array / Object",default:"a_btn a_btn_secondary",required:!1},{name:"forward-button-icon-left",description:"_A_WIZARD_PROPS_FORWARD_BUTTON_ICON_LEFT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"forward-button-icon-right",description:"_A_WIZARD_PROPS_FORWARD_BUTTON_ICON_RIGHT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"forward-button-text",description:"_A_WIZARD_PROPS_FORWARD_BUTTON_TEXT_DESCRIPTION_",type:"String",default:"_A_WIZARD_PREVIOUS_",required:!1},{name:"forward-button-title",description:"_A_WIZARD_PROPS_FORWARD_BUTTON_TITLE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"has-focus-jump",description:"_A_WIZARD_PROPS_HAS_FOCUS_JUMP_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"id",description:"_A_WIZARD_PROPS_ID_DESCRIPTION_",type:"String",default:'() => uniqueId("a_wizard_")',required:!1},{name:"is-back-button-disabled",description:"_A_WIZARD_PROPS_IS_BACK_BUTTON_DISABLED_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-back-button-hide",description:"_A_WIZARD_PROPS_IS_BACK_BUTTON_HIDE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-back-first-button-hide",description:"_A_WIZARD_PROPS_IS_BACK_FIRST_BUTTON_HIDE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-back-step-button-disabled",description:"_A_WIZARD_PROPS_IS_BACK_STEP_BUTTON_DISABLED_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-buttons-loading",description:"_A_WIZARD_PROPS_IS_BUTTONS_LOADING_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-control-outside",description:"_A_WIZARD_PROPS_IS_CONTROL_OUTSIDE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-forward-button-disabled",description:"_A_WIZARD_PROPS_IS_FORWARD_BUTTON_DISABLED_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-forward-button-hide",description:"_A_WIZARD_PROPS_IS_FORWARD_BUTTON_HIDE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-forward-last-button-hide",description:"_A_WIZARD_PROPS_IS_FORWARD_LAST_BUTTON_HIDE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-forward-step-button-disabled",description:"_A_WIZARD_PROPS_IS_FORWARD_STEP_BUTTON_DISABLED_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-mobile",description:"_A_WIZARD_PROPS_IS_MOBILE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-step-number-visible",description:"_A_WIZARD_PROPS_IS_STEP_NUMBER_VISIBLE_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-steps-justified",description:"_A_WIZARD_PROPS_IS_STEPS_JUSTIFIED_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-toolbar-bottom",description:"_A_WIZARD_PROPS_IS_TOOLBAR_BOTTOM_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-toolbar-top",description:"_A_WIZARD_PROPS_IS_TOOLBAR_TOP_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"key-id",description:"_A_WIZARD_PROPS_KEY_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"show-only-active-step-mobile",description:"_A_WIZARD_PROPS_SHOW_ONLY_ACTIVE_STEP_MOBILE_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"step-active",description:"_A_WIZARD_PROPS_STEP_ACTIVE_DESCRIPTION_",type:"Number",default:void 0,required:!1},{name:"steps-icon-error",description:"_A_WIZARD_PROPS_STEP_ICON_ERROR_DESCRIPTION_",type:"String",default:"AlertDanger",required:!1},{name:"steps-icon-error-text",description:"_A_WIZARD_PROPS_STEP_ICON_ERROR_TEXT_DESCRIPTION_",type:"String",default:"_A_WIZARD_STEP_ERROR_",required:!1},{name:"steps-icon-warning",description:"_A_WIZARD_PROPS_STEP_ICON_WARNING_DESCRIPTION_",type:"String",default:"AlertWarning",required:!1},{name:"steps-icon-warning-text",description:"_A_WIZARD_PROPS_STEP_ICON_WARNING_TEXT_DESCRIPTION_",type:"String",default:"_A_WIZARD_STEP_WARNING_",required:!1},{name:"steps",description:"_A_WIZARD_PROPS_STEPS_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"steps-progressbar-text",description:"_A_WIZARD_PROPS_STEP_PROGRESSBAR_TEXT_DESCRIPTION_",type:"String",default:"_A_WIZARD_STEPS_PROGRESSBAR_TEXT_{{stepActive}}_{{stepsCount}}_{{stepActiveLabel}}_",required:!1},{name:"steps-visited",description:"_A_WIZARD_PROPS_STEPS_VISITED_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"sub-type",description:"_A_WIZARD_PROPS_SUB_TYPE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"toolbar-bottom-teleport-id",description:"_A_WIZARD_PROPS_TOOLBAR_BOTTOM_TELEPORT_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"type",description:"_A_WIZARD_PROPS_TYPE_DESCRIPTION_",type:"String",default:"basic",required:!1}]}}function ka(){return{dataSlots:[{name:"toolbar",description:"_A_WIZARD_SLOTS_TOOLBAR_DESCRIPTION_"},{name:"slot",description:"_A_WIZARD_SLOTS_SLOT_DESCRIPTION_"},{name:"slotLabel",description:"_A_WIZARD_SLOTS_SLOT_LABEL_DESCRIPTION_"}]}}function Va(){return{dataTranslate:["_A_WIZARD_ARIA_LABEL_","_A_WIZARD_HEADER_STEP_SCREEN_READER_{{stepNumber}}_","_A_WIZARD_NEXT_","_A_WIZARD_NEXT_TITLE_","_A_WIZARD_PREVIOUS_","_A_WIZARD_PREVIOUS_TITLE_","_A_WIZARD_STEP_ACTIVE_","_A_WIZARD_STEP_ERROR_","_A_WIZARD_STEP_NUMBER_OF_{{stepActive}}_{{stepsCount}}_","_A_WIZARD_STEP_UPCOMING_","_A_WIZARD_STEP_VISITED_","_A_WIZARD_STEP_WARNING_","_A_WIZARD_STEPS_ARIA_LABEL_","_A_WIZARD_STEPS_PROGRESSBAR_TEXT_{{stepActive}}_{{stepsCount}}_"]}}const ja={name:"PageWizard",components:{AlohaPage:F,AlohaTableProps:G,AlohaTableTranslate:Y,ATranslation:E,PageWizardBasic:ot,PageWizardButtons:pt,PageWizardButtonsDisabled:Dt,PageWizardButtonsHide:Wt,PageWizardDemo:xt,PageWizardHasFocusJump:$t,PageWizardIcon:Gt,PageWizardIsButtonsLoading:ae,PageWizardIsControlOutside:ie,PageWizardIsStepNumberVisible:ce,PageWizardIsStepsJustified:be,PageWizardIsToolbar:fe,PageWizardKeyId:xe,PageWizardShowOnlyActiveStepMobile:$e,PageWizardSlot:Ve,PageWizardSlotLabel:Xe,PageWizardSlotToolbar:sa,PageWizardStepActive:na,PageWizardStepsErrors:ma,PageWizardStepsWarnings:Pa,PageWizardSubType:va,PageWizardType:$a},setup(){const{pageTitle:t}=Ja(),{dataProps:_}=Ua(),{dataSlots:r}=ka(),{dataExposes:u}=Ca(),{dataEvents:A}=Ha(),{dataTranslate:c}=Va();return{dataExposes:u,dataEvents:A,dataProps:_,dataSlots:r,dataTranslate:c,pageTitle:t}}};function Fa(t,_,r,u,A,c){const o=i("a-translation"),n=i("page-wizard-basic"),p=i("page-wizard-type"),m=i("page-wizard-sub-type"),d=i("page-wizard-icon"),D=i("page-wizard-buttons"),W=i("page-wizard-buttons-disabled"),f=i("page-wizard-buttons-hide"),v=i("page-wizard-is-steps-justified"),z=i("page-wizard-is-buttons-loading"),x=i("page-wizard-is-toolbar"),L=i("page-wizard-is-step-number-visible"),B=i("page-wizard-step-active"),M=i("page-wizard-steps-errors"),y=i("page-wizard-steps-warnings"),q=i("page-wizard-key-id"),N=i("page-wizard-has-focus-jump"),$=i("page-wizard-is-control-outside"),C=i("page-wizard-slot-toolbar"),H=i("page-wizard-slot-label"),J=i("page-wizard-slot"),U=i("page-wizard-show-only-active-step-mobile"),k=i("page-wizard-demo"),w=i("aloha-table-props"),V=i("aloha-table-translate"),j=i("aloha-page");return R(),T(j,{"page-title":t.pageTitle},{body:s(()=>[e(o,{tag:"p",html:"_A_WIZARD_COMPONENT_DESCRIPTION_"}),e(n),e(p),e(m),e(d),e(D),e(W),e(f),e(v),e(z),e(x),e(L),e(B),e(M),e(y),e(q),e(N),e($),e(C),e(H),e(J),e(U),e(k),e(w,{data:t.dataProps},null,8,["data"]),e(w,{"table-label":"Slots",data:t.dataSlots,columns:["name","description"]},null,8,["data"]),e(w,{"table-label":"Events",data:t.dataEvents,columns:["name","type","description"]},null,8,["data"]),e(V,{data:t.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const ps=I(ja,[["render",Fa]]);export{ps as default};