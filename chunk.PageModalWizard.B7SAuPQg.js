import{t as e}from"./chunk.AlohaPage.BIw9NYpI.js";import{t}from"./chunk.AlohaTableProps.9D5sSTzx.js";import{Ht as n,Jt as r,Ut as i,Vt as a,Wt as o,_n as s,mn as c,on as l,un as u,wn as d}from"./chunk.vendor.Bjd2408Z.js";import{t as f}from"./chunk.AlohaExample.CEueonn8.js";import{_ as p,hn as m,mn as h,sn as g,t as _}from"./bundle.index.Dor-y9Rj.js";function v(){return{codeHtml:`<a-button
  id="wizard_basic"
  class="a_btn a_btn_primary"
  text="open"
  @click="openModalWizard"
></a-button>
<a-modal-wizard
  v-if="isModalWizardVisible"
  size="xxl"
  selector-close-ids="wizard_basic"
  header-text="Wizard"
  :close="closeModalWizard"
  :steps="wizardSteps"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h2"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h2"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h2"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h2"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-modal-wizard>`}}function y(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AButton, 
  AModalWizard, 
  ATranslation,
} from "aloha-vue";
    
export default {
  name: "PageModalWizardBasic",
  components: {
    AButton,
    AModalWizard,
    ATranslation,
  },
  setup() {
    const isModalWizardVisible = ref(undefined);

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

    const openModalWizard = () => {
      isModalWizardVisible.value = true;
    };

    const closeModalWizard = () => {
      isModalWizardVisible.value = false;
    };

    return {
      closeModalWizard,
      isModalWizardVisible,
      openModalWizard,
      text,
      wizardSteps,
    };
  },
};`}}var b={name:`PageModalWizardBasic`,components:{AButton:g,AlohaExample:f,AModalWizard:p,ATranslation:h},setup(){let{codeHtml:e}=v(),{codeJs:t}=y(),n=s(void 0);return{closeModalWizard:()=>{n.value=!1},codeHtml:e,codeJs:t,isModalWizardVisible:n,openModalWizard:()=>{n.value=!0},text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:`step1`,label:`_A_MODAL_WIZARD_STEP_1_`,title:`_A_MODAL_WIZARD_STEP_1_`},{slot:`step2`,label:`_A_MODAL_WIZARD_STEP_2_`,title:`_A_MODAL_WIZARD_STEP_2_`},{slot:`step3`,label:`_A_MODAL_WIZARD_STEP_3_`,title:`_A_MODAL_WIZARD_STEP_3_`},{slot:`step4`,label:`_A_MODAL_WIZARD_STEP_4_`,title:`_A_MODAL_WIZARD_STEP_4_`}]}}};function x(e,t,a,s,f,p){let m=u(`a-button`),h=u(`a-translation`),g=u(`a-modal-wizard`),_=u(`aloha-example`);return l(),i(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:`steps`},{default:c(()=>[r(m,{class:`a_btn a_btn_primary`,id:`wizard_basic`,text:`open`,onClick:e.openModalWizard},null,8,[`onClick`]),e.isModalWizardVisible?(l(),i(g,{key:0,size:`xxl`,"selector-close-ids":`wizard_basic`,"header-text":`Wizard`,close:e.closeModalWizard,steps:e.wizardSteps},{step1:c(()=>[r(h,{tag:`h2`,text:`_A_MODAL_WIZARD_STEP_1_`}),n(`p`,null,d(e.text),1)]),step2:c(()=>[r(h,{tag:`h2`,text:`_A_MODAL_WIZARD_STEP_2_`}),n(`p`,null,d(e.text),1)]),step3:c(()=>[r(h,{tag:`h2`,text:`_A_MODAL_WIZARD_STEP_3_`}),n(`p`,null,d(e.text),1)]),step4:c(()=>[r(h,{tag:`h2`,text:`_A_MODAL_WIZARD_STEP_4_`}),n(`p`,null,d(e.text),1)]),_:1},8,[`close`,`steps`])):o(``,!0)]),_:1},8,[`code-html`,`code-js`])}var S=_(b,[[`render`,x]]);function C(){return{codeHtml:`<a-button
  id="wizard_last_step"
  class="a_btn a_btn_primary"
  text="_A_MODAL_WIZARD_EXAMPLE_OPEN_"
  @click="openModalWizard"
/>
<a-modal-wizard
  v-if="isModalWizardVisible"
  selector-close-ids="wizard_last_step"
  header-text="_A_MODAL_WIZARD_EXAMPLE_HEADER_"
  is-save-button-last-step-only
  :close="closeModalWizard"
  :save="closeModalWizard"
  :steps="wizardSteps"
>
  <template v-slot:step1>
    <a-translation tag="p" text="_A_MODAL_WIZARD_STEP_1_" />
  </template>
  <template v-slot:step2>
    <a-translation tag="p" text="_A_MODAL_WIZARD_STEP_2_" />
  </template>
  <template v-slot:step3>
    <a-translation tag="p" text="_A_MODAL_WIZARD_STEP_3_" />
  </template>
</a-modal-wizard>`}}function w(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AButton,
  AModalWizard,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    AButton,
    AModalWizard,
    ATranslation,
  },
  setup() {
    const isModalWizardVisible = ref(false);
    const wizardSteps = [
      {
        slot: "step1",
        label: "_A_MODAL_WIZARD_STEP_1_",
      },
      {
        slot: "step2",
        label: "_A_MODAL_WIZARD_STEP_2_",
      },
      {
        slot: "step3",
        label: "_A_MODAL_WIZARD_STEP_3_",
      },
    ];

    const openModalWizard = () => {
      isModalWizardVisible.value = true;
    };

    const closeModalWizard = () => {
      isModalWizardVisible.value = false;
    };

    return {
      closeModalWizard,
      isModalWizardVisible,
      openModalWizard,
      wizardSteps,
    };
  },
};`}}var T={name:`PageModalWizardLastStep`,components:{AButton:g,AModalWizard:p,ATranslation:h,AlohaExample:f},setup(){let{codeHtml:e}=C(),{codeJs:t}=w(),n=s(!1);return{codeHtml:e,codeJs:t,closeModalWizard:()=>{n.value=!1},isModalWizardVisible:n,openModalWizard:()=>{n.value=!0},wizardSteps:[{slot:`step1`,label:`_A_MODAL_WIZARD_STEP_1_`},{slot:`step2`,label:`_A_MODAL_WIZARD_STEP_2_`},{slot:`step3`,label:`_A_MODAL_WIZARD_STEP_3_`}]}}};function E(e,t,n,a,s,d){let f=u(`a-button`),p=u(`a-translation`),m=u(`a-modal-wizard`),h=u(`aloha-example`);return l(),i(h,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_MODAL_WIZARD_LAST_STEP_HEADER_`,description:`_A_MODAL_WIZARD_LAST_STEP_DESCRIPTION_`},{default:c(()=>[r(f,{class:`a_btn a_btn_primary`,id:`wizard_last_step`,text:`_A_MODAL_WIZARD_EXAMPLE_OPEN_`,onClick:e.openModalWizard},null,8,[`onClick`]),e.isModalWizardVisible?(l(),i(m,{key:0,"selector-close-ids":`wizard_last_step`,"header-text":`_A_MODAL_WIZARD_EXAMPLE_HEADER_`,"is-save-button-last-step-only":``,close:e.closeModalWizard,save:e.closeModalWizard,steps:e.wizardSteps},{step1:c(()=>[r(p,{tag:`p`,text:`_A_MODAL_WIZARD_STEP_1_`})]),step2:c(()=>[r(p,{tag:`p`,text:`_A_MODAL_WIZARD_STEP_2_`})]),step3:c(()=>[r(p,{tag:`p`,text:`_A_MODAL_WIZARD_STEP_3_`})]),_:1},8,[`close`,`save`,`steps`])):o(``,!0)]),_:1},8,[`code-html`,`code-js`])}var D=_(T,[[`render`,E]]);function O(){return{dataEvents:[{name:`change-step`,description:`_A_WIZARD_EVENTS_CHANGE_STEP_DESCRIPTION_`,type:`Function`},{name:`finish`,description:`_A_WIZARD_EVENTS_FINISH_DESCRIPTION_`,type:`Function`},{name:`go-step-back`,description:`_A_WIZARD_EVENTS_GO_STEP_BACK_DESCRIPTION_`,type:`Function`},{name:`go-step-forward`,description:`_A_WIZARD_EVENTS_GO_STEP_FORWARD_DESCRIPTION_`,type:`Function`}]}}function k(){return{dataExposes:[{name:`buttonRef`,description:`_A_SHOW_MORE_EXPOSES_BUTTON_REF_DESCRIPTION_`,type:`Object`},{name:`containerRef`,description:`_A_SHOW_MORE_EXPOSES_CONTAINER_REF_DESCRIPTION_`,type:`Object`},{name:`isButtonVisible`,description:`_A_SHOW_MORE_EXPOSES_IS_BUTTON_VISIBLE_DESCRIPTION_`,type:`Boolean`},{name:`isOpen`,description:`_A_SHOW_MORE_EXPOSES_IS_OPEN_DESCRIPTION_`,type:`Boolean`},{name:`toggleButton`,description:`_A_SHOW_MORE_EXPOSES_TOGGLE_BUTTON_DESCRIPTION_`,type:`Function`}]}}function A(){let e=a(()=>m({placeholder:`_A_MODAL_WIZARD_COMPONENT_NAME_`}));return{pageTitle:a(()=>`AModalWizard${e.value?` (${e.value})`:``}`)}}function j(){return{dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`backdrop-z-index`,description:`_A_MODAL_PROPS_BACKDROP_Z_INDEX_DESCRIPTION_`,type:`Number`,default:void 0,required:!1},{name:`before-step-change`,description:`_A_WIZARD_PROPS_BEFORE_STEP_CHANGE_DESCRIPTION_`,type:`Function`,default:void 0,required:!1},{name:`class-extra`,description:`_A_MODAL_PROPS_CLASS_EXTRA_DESCRIPTION_`,type:`String / Object`,default:`a_modal_class_extra`,required:!1},{name:`class-wizard-extra`,description:`_A_WIZARD_PROPS_CLASS_EXTRA_DESCRIPTION_`,type:`String / Object`,default:`a_wizard_class_extra`,required:!1},{name:`close`,description:`_A_MODAL_PROPS_CLOSE_DESCRIPTION_`,type:`Function`,default:void 0,required:!0},{name:`close-button-attributes`,description:`_A_MODAL_PROPS_CLOSE_BUTTON_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`close-button-class`,description:`_A_MODAL_PROPS_CLOSE_BUTTON_CLASS_DESCRIPTION_`,type:`String / Array / Object`,default:`a_btn a_btn_secondary`,required:!1},{name:`close-button-id`,description:`_A_MODAL_PROPS_CLOSE_BUTTON_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`close-button-text`,description:`_A_MODAL_PROPS_CLOSE_BUTTON_TEXT_DESCRIPTION_`,type:`String`,default:`_A_MODAL_BTN_CANCEL_`,required:!1},{name:`close-button-text-screen-reader-footer`,description:`_A_MODAL_PROPS_CLOSE_BUTTON_TEXT_SCREEN_READER_FOOTER_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`close-button-text-screen-reader-header`,description:`_A_MODAL_PROPS_CLOSE_BUTTON_TEXT_SCREEN_READER_HEADER_DESCRIPTION_`,type:`String`,default:`_A_MODAL_BTN_TEXT_SCREEN_READER_CLOSE_HEADER_`,required:!1},{name:`disabled`,description:`_A_MODAL_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`disabled-save`,description:`_A_MODAL_PROPS_DISABLED_SAVE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`extra`,description:`_A_MODAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`finish-button-attributes`,description:`_A_WIZARD_PROPS_FINISH_BUTTON_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`finish-button-class`,description:`_A_WIZARD_PROPS_FINISH_BUTTON_CLASS_DESCRIPTION_`,type:`String / Array / Object`,default:`a_btn a_btn_primary`,required:!1},{name:`finish-button-text`,description:`_A_WIZARD_PROPS_FINISH_BUTTON_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`focus-start-id`,description:`_A_MODAL_PROPS_FOCUS_START_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`header-tag`,description:`_A_MODAL_PROPS_HEADER_TAG_DESCRIPTION_`,type:`String`,default:`h2`,required:!1},{name:`header-text`,description:`_A_MODAL_PROPS_HEADER_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`hide-header`,description:`_A_MODAL_PROPS_HIDE_HEADER_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-close-button-hide`,description:`_A_MODAL_PROPS_IS_CLOSE_BUTTON_HIDE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-footer-sticky`,description:`_A_MODAL_PROPS_IS_FOOTER_STICKY_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-save-button-hide`,description:`_A_MODAL_PROPS_IS_SAVE_BUTTON_HIDE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-save-button-last-step-only`,description:`_A_MODAL_WIZARD_PROPS_IS_SAVE_BUTTON_LAST_STEP_ONLY_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-step-heading-visible`,description:`_A_WIZARD_PROPS_IS_STEP_HEADING_VISIBLE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`loading`,description:`_A_MODAL_PROPS_LOADING_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`modal-class`,description:`_A_MODAL_PROPS_MODAL_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`modal-style`,description:`_A_MODAL_PROPS_MODAL_STYLE_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`save`,description:`_A_MODAL_PROPS_SAVE_DESCRIPTION_`,type:`Function`,default:void 0,required:!1},{name:`save-button-attributes`,description:`_A_MODAL_PROPS_SAVE_BUTTON_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`save-button-class`,description:`_A_MODAL_PROPS_SAVE_BUTTON_CLASS_DESCRIPTION_`,type:`String / Array / Object`,default:`a_btn a_btn_primary`,required:!1},{name:`save-button-id`,description:`_A_MODAL_PROPS_SAVE_BUTTON_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`save-button-text`,description:`_A_MODAL_PROPS_SAVE_BUTTON_TEXT_DESCRIPTION_`,type:`String`,default:`_A_MODAL_BTN_SAVE_`,required:!1},{name:`save-button-text-screen-reader`,description:`_A_MODAL_PROPS_SAVE_BUTTON_TEXT_SCREEN_READER_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`selector-close`,description:`_A_MODAL_PROPS_SELECTOR_CLOSE_DESCRIPTION_`,type:`String / Array`,default:void 0,required:!1},{name:`selector-close-ids`,description:`_A_MODAL_PROPS_SELECTOR_CLOSE_IDS_DESCRIPTION_`,type:`String / Array`,default:void 0,required:!1},{name:`show-close-button-header`,description:`_A_MODAL_PROPS_SHOW_CLOSE_BUTTON_HEADER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`size`,description:`_A_MODAL_PROPS_SIZE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`step-heading-tag`,description:`_A_WIZARD_PROPS_STEP_HEADING_TAG_DESCRIPTION_`,type:`String`,default:`h3`,required:!1},{name:`stop`,description:`_A_MODAL_PROPS_STOP_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`use-escape`,description:`_A_MODAL_PROPS_USE_ESCAPE_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`use-focus-on-start`,description:`_A_MODAL_PROPS_USE_FOCUS_ON_START_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`z-index`,description:`_A_MODAL_PROPS_Z_INDEX_DESCRIPTION_`,type:`Number`,default:void 0,required:!1},{name:`aria-label`,description:`_A_MODAL_WIZARD_PROPS_ARIA_LABEL_DESCRIPTION_`,type:`String`,default:`""`,required:!1},{name:`aria-label-steps`,description:`_A_WIZARD_PROPS_ARIA_LABEL_STEPS_DESCRIPTION_`,type:`String`,default:`_A_WIZARD_STEPS_ARIA_LABEL_`,required:!1},{name:`back-button-attributes`,description:`_A_WIZARD_PROPS_BACK_BUTTON_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`back-button-class`,description:`_A_WIZARD_PROPS_BACK_BUTTON_CLASS_DESCRIPTION_`,type:`String / Array / Object`,default:`a_btn a_btn_secondary`,required:!1},{name:`back-button-icon-left`,description:`_A_WIZARD_PROPS_BACK_BUTTON_ICON_LEFT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`back-button-icon-right`,description:`_A_WIZARD_PROPS_BACK_BUTTON_ICON_RIGHT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`back-button-text`,description:`_A_WIZARD_PROPS_BACK_BUTTON_TEXT_DESCRIPTION_`,type:`String`,default:`_A_WIZARD_PREVIOUS_`,required:!1},{name:`back-button-title`,description:`_A_WIZARD_PROPS_BACK_BUTTON_TITLE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`extra`,description:`_A_WIZARD_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`forward-button-attributes`,description:`_A_WIZARD_PROPS_FORWARD_BUTTON_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`forward-button-class`,description:`_A_WIZARD_PROPS_FORWARD_BUTTON_CLASS_DESCRIPTION_`,type:`String / Array / Object`,default:`a_btn a_btn_secondary`,required:!1},{name:`forward-button-icon-left`,description:`_A_WIZARD_PROPS_FORWARD_BUTTON_ICON_LEFT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`forward-button-icon-right`,description:`_A_WIZARD_PROPS_FORWARD_BUTTON_ICON_RIGHT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`forward-button-text`,description:`_A_WIZARD_PROPS_FORWARD_BUTTON_TEXT_DESCRIPTION_`,type:`String`,default:`_A_WIZARD_PREVIOUS_`,required:!1},{name:`forward-button-title`,description:`_A_WIZARD_PROPS_FORWARD_BUTTON_TITLE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`has-focus-jump`,description:`_A_WIZARD_PROPS_HAS_FOCUS_JUMP_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`id`,description:`_A_WIZARD_PROPS_ID_DESCRIPTION_`,type:`String`,default:`() => uniqueId("a_modal_wizard_")`,required:!1},{name:`is-back-button-disabled`,description:`_A_WIZARD_PROPS_IS_BACK_BUTTON_DISABLED_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-back-button-hide`,description:`_A_WIZARD_PROPS_IS_BACK_BUTTON_HIDE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-back-first-button-hide`,description:`_A_WIZARD_PROPS_IS_BACK_FIRST_BUTTON_HIDE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-back-step-button-disabled`,description:`_A_WIZARD_PROPS_IS_BACK_STEP_BUTTON_DISABLED_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-buttons-loading`,description:`_A_WIZARD_PROPS_IS_BUTTONS_LOADING_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-control-outside`,description:`_A_WIZARD_PROPS_IS_CONTROL_OUTSIDE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-forward-button-disabled`,description:`_A_WIZARD_PROPS_IS_FORWARD_BUTTON_DISABLED_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-forward-button-hide`,description:`_A_WIZARD_PROPS_IS_FORWARD_BUTTON_HIDE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-forward-last-button-hide`,description:`_A_WIZARD_PROPS_IS_FORWARD_LAST_BUTTON_HIDE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-forward-step-button-disabled`,description:`_A_WIZARD_PROPS_IS_FORWARD_STEP_BUTTON_DISABLED_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-mobile`,description:`_A_WIZARD_PROPS_IS_MOBILE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-step-number-visible`,description:`_A_WIZARD_PROPS_IS_STEP_NUMBER_VISIBLE_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-steps-justified`,description:`_A_WIZARD_PROPS_IS_STEPS_JUSTIFIED_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`key-id`,description:`_A_WIZARD_PROPS_KEY_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`scroll-to-top-on-step-change`,description:`_A_MODAL_WIZARD_PROPS_SCROLL_TO_TOP_ON_STEP_CHANGE_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`show-only-active-step-mobile`,description:`_A_WIZARD_PROPS_SHOW_ONLY_ACTIVE_STEP_MOBILE_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`step-active`,description:`_A_WIZARD_PROPS_STEP_ACTIVE_DESCRIPTION_`,type:`Number`,default:void 0,required:!1},{name:`steps-icon-error`,description:`_A_WIZARD_PROPS_STEP_ICON_ERROR_DESCRIPTION_`,type:`String`,default:`AlertDanger`,required:!1},{name:`steps-icon-error-text`,description:`_A_WIZARD_PROPS_STEP_ICON_ERROR_TEXT_DESCRIPTION_`,type:`String`,default:`_A_WIZARD_STEP_ERROR_`,required:!1},{name:`steps-icon-warning`,description:`_A_WIZARD_PROPS_STEP_ICON_WARNING_DESCRIPTION_`,type:`String`,default:`AlertWarning`,required:!1},{name:`steps-icon-warning-text`,description:`_A_WIZARD_PROPS_STEP_ICON_WARNING_TEXT_DESCRIPTION_`,type:`String`,default:`_A_WIZARD_STEP_WARNING_`,required:!1},{name:`steps`,description:`_A_WIZARD_PROPS_STEPS_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`steps-progressbar-text`,description:`_A_WIZARD_PROPS_STEP_PROGRESSBAR_TEXT_DESCRIPTION_`,type:`String`,default:`_A_WIZARD_STEPS_PROGRESSBAR_TEXT_{{stepActive}}_{{stepsCount}}_{{stepActiveLabel}}_`,required:!1},{name:`sub-type`,description:`_A_WIZARD_PROPS_SUB_TYPE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`steps-visited`,description:`_A_WIZARD_PROPS_STEPS_VISITED_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`type`,description:`_A_WIZARD_PROPS_TYPE_DESCRIPTION_`,type:`String`,default:`basic`,required:!1}]}}function M(){return{dataSlots:[{name:`default`,description:`_A_TRANSLATION_SLOT_DEFAULT_DESCRIPTION_`}]}}var N={name:`PageModalWizard`,components:{AlohaPage:e,AlohaTableProps:t,ATranslation:h,PageModalWizardBasic:S,PageModalWizardLastStep:D},setup(){let{pageTitle:e}=A(),{dataProps:t}=j(),{dataSlots:n}=M(),{dataExposes:r}=k(),{dataEvents:i}=O();return{dataEvents:i,dataExposes:r,dataProps:t,dataSlots:n,pageTitle:e}}};function P(e,t,n,a,o,s){let d=u(`a-translation`),f=u(`page-modal-wizard-basic`),p=u(`page-modal-wizard-last-step`),m=u(`aloha-table-props`),h=u(`aloha-page`);return l(),i(h,{"page-title":e.pageTitle},{body:c(()=>[r(d,{tag:`p`,html:`_A_MODAL_WIZARD_COMPONENT_DESCRIPTION_`}),r(f),r(p),r(m,{data:e.dataProps},null,8,[`data`]),r(m,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`])]),_:1},8,[`page-title`])}var F=_(N,[[`render`,P]]);export{F as default};