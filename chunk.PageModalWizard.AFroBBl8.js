import{$t as e,Ct as t,Et as n,Tt as r,Ut as i,Yt as a,kt as o,qt as s,wt as c,zt as l}from"./chunk.vendor.CZPox1kV.js";import{At as u,Z as d,kt as f,m as p,t as m}from"./bundle.index.BmSiyQNH.js";import{n as h,t as g}from"./chunk.AlohaExample.CD4LlhAz.js";import{t as _}from"./chunk.AlohaTableProps.Dksi7fmb.js";function v(){return{codeHtml:`<a-button
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
};`}}var b={name:`PageModalWizardBasic`,components:{AButton:u,AlohaExample:g,AModalWizard:p,ATranslation:d},setup(){let{codeHtml:e}=v(),{codeJs:t}=y(),n=a(void 0);return{closeModalWizard:()=>{n.value=!1},codeHtml:e,codeJs:t,isModalWizardVisible:n,openModalWizard:()=>{n.value=!0},text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`,wizardSteps:[{slot:`step1`,label:`_A_MODAL_WIZARD_STEP_1_`,title:`_A_MODAL_WIZARD_STEP_1_`},{slot:`step2`,label:`_A_MODAL_WIZARD_STEP_2_`,title:`_A_MODAL_WIZARD_STEP_2_`},{slot:`step3`,label:`_A_MODAL_WIZARD_STEP_3_`,title:`_A_MODAL_WIZARD_STEP_3_`},{slot:`step4`,label:`_A_MODAL_WIZARD_STEP_4_`,title:`_A_MODAL_WIZARD_STEP_4_`}]}}};function x(t,a,u,d,f,p){let m=i(`a-button`),h=i(`a-translation`),g=i(`a-modal-wizard`),_=i(`aloha-example`);return l(),r(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_BASIC_USAGE_`,props:`steps`},{default:s(()=>[o(m,{class:`a_btn a_btn_primary`,id:`wizard_basic`,text:`open`,onClick:t.openModalWizard},null,8,[`onClick`]),t.isModalWizardVisible?(l(),r(g,{key:0,size:`xxl`,"selector-close-ids":`wizard_basic`,"header-text":`Wizard`,close:t.closeModalWizard,steps:t.wizardSteps},{step1:s(()=>[o(h,{tag:`h2`,text:`_A_MODAL_WIZARD_STEP_1_`}),c(`p`,null,e(t.text),1)]),step2:s(()=>[o(h,{tag:`h2`,text:`_A_MODAL_WIZARD_STEP_2_`}),c(`p`,null,e(t.text),1)]),step3:s(()=>[o(h,{tag:`h2`,text:`_A_MODAL_WIZARD_STEP_3_`}),c(`p`,null,e(t.text),1)]),step4:s(()=>[o(h,{tag:`h2`,text:`_A_MODAL_WIZARD_STEP_4_`}),c(`p`,null,e(t.text),1)]),_:1},8,[`close`,`steps`])):n(``,!0)]),_:1},8,[`code-html`,`code-js`])}var S=m(b,[[`render`,x]]);function C(){return{dataEvents:[{name:`change-step`,description:`_A_WIZARD_EVENTS_CHANGE_STEP_DESCRIPTION_`,type:`Function`},{name:`go-step-back`,description:`_A_WIZARD_EVENTS_GO_STEP_BACK_DESCRIPTION_`,type:`Function`},{name:`go-step-forward`,description:`_A_WIZARD_EVENTS_GO_STEP_FORWARD_DESCRIPTION_`,type:`Function`}]}}function w(){return{dataExposes:[{name:`buttonRef`,description:`_A_SHOW_MORE_EXPOSES_BUTTON_REF_DESCRIPTION_`,type:`Object`},{name:`containerRef`,description:`_A_SHOW_MORE_EXPOSES_CONTAINER_REF_DESCRIPTION_`,type:`Object`},{name:`isButtonVisible`,description:`_A_SHOW_MORE_EXPOSES_IS_BUTTON_VISIBLE_DESCRIPTION_`,type:`Boolean`},{name:`isOpen`,description:`_A_SHOW_MORE_EXPOSES_IS_OPEN_DESCRIPTION_`,type:`Boolean`},{name:`toggleButton`,description:`_A_SHOW_MORE_EXPOSES_TOGGLE_BUTTON_DESCRIPTION_`,type:`Function`}]}}function T(){let e=t(()=>f({placeholder:`_A_MODAL_WIZARD_COMPONENT_NAME_`}));return{pageTitle:t(()=>`AModalWizard${e.value?` (${e.value})`:``}`)}}function E(){return{dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`backdrop-z-index`,description:`_A_MODAL_PROPS_BACKDROP_Z_INDEX_DESCRIPTION_`,type:`Number`,default:void 0,required:!1},{name:`class-extra`,description:`_A_MODAL_PROPS_CLASS_EXTRA_DESCRIPTION_`,type:`String / Object`,default:`a_modal_class_extra`,required:!1},{name:`class-wizard-extra`,description:`_A_WIZARD_PROPS_CLASS_EXTRA_DESCRIPTION_`,type:`String / Object`,default:`a_wizard_class_extra`,required:!1},{name:`close`,description:`_A_MODAL_PROPS_CLOSE_DESCRIPTION_`,type:`Function`,default:void 0,required:!0},{name:`close-button-attributes`,description:`_A_MODAL_PROPS_CLOSE_BUTTON_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`close-button-class`,description:`_A_MODAL_PROPS_CLOSE_BUTTON_CLASS_DESCRIPTION_`,type:`String / Array / Object`,default:`a_btn a_btn_secondary`,required:!1},{name:`close-button-id`,description:`_A_MODAL_PROPS_CLOSE_BUTTON_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`close-button-text`,description:`_A_MODAL_PROPS_CLOSE_BUTTON_TEXT_DESCRIPTION_`,type:`String`,default:`_A_MODAL_BTN_CANCEL_`,required:!1},{name:`close-button-text-screen-reader-footer`,description:`_A_MODAL_PROPS_CLOSE_BUTTON_TEXT_SCREEN_READER_FOOTER_DESCRIPTION_`,type:`String`,default:`_A_MODAL_BTN_TEXT_SCREEN_READER_CLOSE_FOOTER_`,required:!1},{name:`close-button-text-screen-reader-header`,description:`_A_MODAL_PROPS_CLOSE_BUTTON_TEXT_SCREEN_READER_HEADER_DESCRIPTION_`,type:`String`,default:`_A_MODAL_BTN_TEXT_SCREEN_READER_CLOSE_HEADER_`,required:!1},{name:`disabled`,description:`_A_MODAL_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`disabled-save`,description:`_A_MODAL_PROPS_DISABLED_SAVE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`extra`,description:`_A_MODAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`focus-start-id`,description:`_A_MODAL_PROPS_FOCUS_START_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`header-tag`,description:`_A_MODAL_PROPS_HEADER_TAG_DESCRIPTION_`,type:`String`,default:`h2`,required:!1},{name:`header-text`,description:`_A_MODAL_PROPS_HEADER_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`hide-header`,description:`_A_MODAL_PROPS_HIDE_HEADER_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-close-button-hide`,description:`_A_MODAL_PROPS_IS_CLOSE_BUTTON_HIDE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-footer-sticky`,description:`_A_MODAL_PROPS_IS_FOOTER_STICKY_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-save-button-hide`,description:`_A_MODAL_PROPS_IS_SAVE_BUTTON_HIDE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`loading`,description:`_A_MODAL_PROPS_LOADING_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`modal-class`,description:`_A_MODAL_PROPS_MODAL_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`modal-style`,description:`_A_MODAL_PROPS_MODAL_STYLE_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`save`,description:`_A_MODAL_PROPS_SAVE_DESCRIPTION_`,type:`Function`,default:void 0,required:!1},{name:`save-button-attributes`,description:`_A_MODAL_PROPS_SAVE_BUTTON_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`save-button-class`,description:`_A_MODAL_PROPS_SAVE_BUTTON_CLASS_DESCRIPTION_`,type:`String / Array / Object`,default:`a_btn a_btn_primary`,required:!1},{name:`save-button-id`,description:`_A_MODAL_PROPS_SAVE_BUTTON_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`save-button-text`,description:`_A_MODAL_PROPS_SAVE_BUTTON_TEXT_DESCRIPTION_`,type:`String`,default:`_A_MODAL_BTN_SAVE_`,required:!1},{name:`save-button-text-screen-reader`,description:`_A_MODAL_PROPS_SAVE_BUTTON_TEXT_SCREEN_READER_DESCRIPTION_`,type:`String`,default:`_A_MODAL_BTN_TEXT_SCREEN_READER_SAVE_`,required:!1},{name:`selector-close`,description:`_A_MODAL_PROPS_SELECTOR_CLOSE_DESCRIPTION_`,type:`String / Array`,default:void 0,required:!1},{name:`selector-close-ids`,description:`_A_MODAL_PROPS_SELECTOR_CLOSE_IDS_DESCRIPTION_`,type:`String / Array`,default:void 0,required:!1},{name:`show-close-button-header`,description:`_A_MODAL_PROPS_SHOW_CLOSE_BUTTON_HEADER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`size`,description:`_A_MODAL_PROPS_SIZE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`stop`,description:`_A_MODAL_PROPS_STOP_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`use-escape`,description:`_A_MODAL_PROPS_USE_ESCAPE_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`use-focus-on-start`,description:`_A_MODAL_PROPS_USE_FOCUS_ON_START_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`z-index`,description:`_A_MODAL_PROPS_Z_INDEX_DESCRIPTION_`,type:`Number`,default:void 0,required:!1},{name:`aria-label`,description:`_A_WIZARD_PROPS_ARIA_LABEL_DESCRIPTION_`,type:`String`,default:`_A_WIZARD_ARIA_LABEL_`,required:!1},{name:`aria-label-steps`,description:`_A_WIZARD_PROPS_ARIA_LABEL_STEPS_DESCRIPTION_`,type:`String`,default:`_A_WIZARD_STEPS_ARIA_LABEL_`,required:!1},{name:`back-button-attributes`,description:`_A_WIZARD_PROPS_BACK_BUTTON_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`back-button-class`,description:`_A_WIZARD_PROPS_BACK_BUTTON_CLASS_DESCRIPTION_`,type:`String / Array / Object`,default:`a_btn a_btn_secondary`,required:!1},{name:`back-button-icon-left`,description:`_A_WIZARD_PROPS_BACK_BUTTON_ICON_LEFT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`back-button-icon-right`,description:`_A_WIZARD_PROPS_BACK_BUTTON_ICON_RIGHT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`back-button-text`,description:`_A_WIZARD_PROPS_BACK_BUTTON_TEXT_DESCRIPTION_`,type:`String`,default:`_A_WIZARD_PREVIOUS_`,required:!1},{name:`back-button-title`,description:`_A_WIZARD_PROPS_BACK_BUTTON_TITLE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`extra`,description:`_A_WIZARD_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`forward-button-attributes`,description:`_A_WIZARD_PROPS_FORWARD_BUTTON_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`forward-button-class`,description:`_A_WIZARD_PROPS_FORWARD_BUTTON_CLASS_DESCRIPTION_`,type:`String / Array / Object`,default:`a_btn a_btn_secondary`,required:!1},{name:`forward-button-icon-left`,description:`_A_WIZARD_PROPS_FORWARD_BUTTON_ICON_LEFT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`forward-button-icon-right`,description:`_A_WIZARD_PROPS_FORWARD_BUTTON_ICON_RIGHT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`forward-button-text`,description:`_A_WIZARD_PROPS_FORWARD_BUTTON_TEXT_DESCRIPTION_`,type:`String`,default:`_A_WIZARD_PREVIOUS_`,required:!1},{name:`forward-button-title`,description:`_A_WIZARD_PROPS_FORWARD_BUTTON_TITLE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`has-focus-jump`,description:`_A_WIZARD_PROPS_HAS_FOCUS_JUMP_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`id`,description:`_A_WIZARD_PROPS_ID_DESCRIPTION_`,type:`String`,default:`() => uniqueId("a_modal_wizard_")`,required:!1},{name:`is-back-button-disabled`,description:`_A_WIZARD_PROPS_IS_BACK_BUTTON_DISABLED_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-back-button-hide`,description:`_A_WIZARD_PROPS_IS_BACK_BUTTON_HIDE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-back-first-button-hide`,description:`_A_WIZARD_PROPS_IS_BACK_FIRST_BUTTON_HIDE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-back-step-button-disabled`,description:`_A_WIZARD_PROPS_IS_BACK_STEP_BUTTON_DISABLED_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-buttons-loading`,description:`_A_WIZARD_PROPS_IS_BUTTONS_LOADING_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-control-outside`,description:`_A_WIZARD_PROPS_IS_CONTROL_OUTSIDE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-forward-button-disabled`,description:`_A_WIZARD_PROPS_IS_FORWARD_BUTTON_DISABLED_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-forward-button-hide`,description:`_A_WIZARD_PROPS_IS_FORWARD_BUTTON_HIDE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-forward-last-button-hide`,description:`_A_WIZARD_PROPS_IS_FORWARD_LAST_BUTTON_HIDE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-forward-step-button-disabled`,description:`_A_WIZARD_PROPS_IS_FORWARD_STEP_BUTTON_DISABLED_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-mobile`,description:`_A_WIZARD_PROPS_IS_MOBILE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-step-number-visible`,description:`_A_WIZARD_PROPS_IS_STEP_NUMBER_VISIBLE_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-steps-justified`,description:`_A_WIZARD_PROPS_IS_STEPS_JUSTIFIED_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`key-id`,description:`_A_WIZARD_PROPS_KEY_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`scroll-to-top-on-step-change`,description:`_A_MODAL_WIZARD_PROPS_SCROLL_TO_TOP_ON_STEP_CHANGE_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`show-only-active-step-mobile`,description:`_A_WIZARD_PROPS_SHOW_ONLY_ACTIVE_STEP_MOBILE_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`step-active`,description:`_A_WIZARD_PROPS_STEP_ACTIVE_DESCRIPTION_`,type:`Number`,default:void 0,required:!1},{name:`steps-icon-error`,description:`_A_WIZARD_PROPS_STEP_ICON_ERROR_DESCRIPTION_`,type:`String`,default:`AlertDanger`,required:!1},{name:`steps-icon-error-text`,description:`_A_WIZARD_PROPS_STEP_ICON_ERROR_TEXT_DESCRIPTION_`,type:`String`,default:`_A_WIZARD_STEP_ERROR_`,required:!1},{name:`steps-icon-warning`,description:`_A_WIZARD_PROPS_STEP_ICON_WARNING_DESCRIPTION_`,type:`String`,default:`AlertWarning`,required:!1},{name:`steps-icon-warning-text`,description:`_A_WIZARD_PROPS_STEP_ICON_WARNING_TEXT_DESCRIPTION_`,type:`String`,default:`_A_WIZARD_STEP_WARNING_`,required:!1},{name:`steps`,description:`_A_WIZARD_PROPS_STEPS_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`steps-progressbar-text`,description:`_A_WIZARD_PROPS_STEP_PROGRESSBAR_TEXT_DESCRIPTION_`,type:`String`,default:`_A_WIZARD_STEPS_PROGRESSBAR_TEXT_{{stepActive}}_{{stepsCount}}_{{stepActiveLabel}}_`,required:!1},{name:`sub-type`,description:`_A_WIZARD_PROPS_SUB_TYPE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`steps-visited`,description:`_A_WIZARD_PROPS_STEPS_VISITED_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`type`,description:`_A_WIZARD_PROPS_TYPE_DESCRIPTION_`,type:`String`,default:`basic`,required:!1}]}}function D(){return{dataSlots:[{name:`default`,description:`_A_TRANSLATION_SLOT_DEFAULT_DESCRIPTION_`}]}}var O={name:`PageModalWizard`,components:{AlohaPage:h,AlohaTableProps:_,ATranslation:d,PageModalWizardBasic:S},setup(){let{pageTitle:e}=T(),{dataProps:t}=E(),{dataSlots:n}=D(),{dataExposes:r}=w(),{dataEvents:i}=C();return{dataEvents:i,dataExposes:r,dataProps:t,dataSlots:n,pageTitle:e}}};function k(e,t,n,a,c,u){let d=i(`a-translation`),f=i(`page-modal-wizard-basic`),p=i(`aloha-table-props`),m=i(`aloha-page`);return l(),r(m,{"page-title":e.pageTitle},{body:s(()=>[o(d,{tag:`p`,html:`_A_MODAL_WIZARD_COMPONENT_DESCRIPTION_`}),o(f),o(p,{data:e.dataProps},null,8,[`data`]),o(p,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`])]),_:1},8,[`page-title`])}var A=m(O,[[`render`,k]]);export{A as default};