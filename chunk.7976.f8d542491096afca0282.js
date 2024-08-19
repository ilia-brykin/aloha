"use strict";(self.webpackChunkaloha_vue_docs=self.webpackChunkaloha_vue_docs||[]).push([[7976],{8818:(e,t,i)=>{i.r(t),i.d(t,{default:()=>R});var a=i(6365),r=i(8310),_=i(635),o=i(7791),n=i(9791),s=i(1912),d=i(9550),l=i(5205),u=i(760),p=i(2543);const A={name:"AModalWizard",inheritAttrs:!1,props:{alwaysTranslate:{type:Boolean,required:!1},backdropZIndex:{type:Number,required:!1,default:void 0},close:{type:Function,required:!0},closeButtonAttributes:{type:Object,required:!1,default:()=>({})},closeButtonClass:{type:[String,Array,Object],required:!1,default:()=>u.B.value.propsDefault.closeButtonClass},closeButtonId:{type:String,required:!1,default:void 0},closeButtonText:{type:String,required:!1,default:()=>u.B.value.propsDefault.closeButtonText},disabled:{type:Boolean,required:!1,default:!1},disabledSave:{type:Boolean,required:!1,default:!1},extra:{type:Object,required:!1,default:void 0},headerTag:{type:String,required:!1,default:()=>u.B.value.propsDefault.headerTag},headerText:{type:String,required:!1,default:void 0},isCloseButtonHide:{type:Boolean,required:!1,default:()=>u.B.value.propsDefault.isCloseButtonHide},isFooterSticky:{type:Boolean,required:!1,default:()=>u.B.value.propsDefault.isFooterSticky},isSaveButtonHide:{type:Boolean,required:!1,default:()=>u.B.value.propsDefault.isSaveButtonHide},loading:{type:Boolean,required:!1},modalClass:{type:[String,Object],required:!1,default:()=>u.B.value.propsDefault.modalClass},save:{type:Function,required:!1,default:void 0},saveButtonAttributes:{type:Object,required:!1,default:()=>({})},saveButtonClass:{type:[String,Array,Object],required:!1,default:()=>u.B.value.propsDefault.saveButtonClass},saveButtonId:{type:String,required:!1,default:void 0},saveButtonText:{type:String,required:!1,default:()=>u.B.value.propsDefault.saveButtonText},selectorClose:{type:[String,Array],required:!1,default:()=>u.B.value.propsDefault.selectorClose},selectorCloseIds:{type:[String,Array],required:!1,default:()=>u.B.value.propsDefault.selectorCloseIds},showCloseButton:{type:Boolean,required:!1,default:!0},size:{type:String,validator:e=>-1!==["small","large","xl","xxl","fullscreen"].indexOf(e),default:()=>u.B.value.propsDefault.size},stop:{type:Boolean,required:!1},useEscape:{type:Boolean,required:!1,default:()=>u.B.value.propsDefault.useEscape},zIndex:{type:Number,required:!1,default:void 0},ariaLabel:{type:String,required:!1,default:"_A_WIZARD_ARIA_LABEL_"},ariaLabelSteps:{type:String,required:!1,default:"_A_WIZARD_STEPS_ARIA_LABEL_"},backButtonAttributes:{type:Object,required:!1,default:()=>({})},backButtonClass:{type:[String,Array,Object],required:!1,default:"a_btn a_btn_secondary"},backButtonIconLeft:{type:String,required:!1,default:void 0},backButtonIconRight:{type:String,required:!1,default:void 0},backButtonText:{type:String,required:!1,default:"_A_WIZARD_PREVIOUS_"},backButtonTitle:{type:String,required:!1,default:"_A_WIZARD_PREVIOUS_TITLE_"},forwardButtonAttributes:{type:Object,required:!1,default:()=>({})},forwardButtonClass:{type:[String,Array,Object],required:!1,default:"a_btn a_btn_secondary"},forwardButtonIconLeft:{type:String,required:!1,default:void 0},forwardButtonIconRight:{type:String,required:!1,default:void 0},forwardButtonText:{type:String,required:!1,default:"_A_WIZARD_NEXT_"},forwardButtonTitle:{type:String,required:!1,default:"_A_WIZARD_NEXT_TITLE_"},hasFocusJump:{type:Boolean,required:!1,default:!0},id:{type:String,required:!1,default:()=>(0,p.uniqueId)("a_modal_wizard_")},isBackButtonDisabled:{type:Boolean,required:!1,default:!1},isBackButtonHide:{type:Boolean,required:!1},isBackFirstButtonHide:{type:Boolean,required:!1},isBackStepButtonDisabled:{type:Boolean,required:!1,default:!1},isButtonsLoading:{type:Boolean,required:!1},isControlOutside:{type:Boolean,required:!1,default:!1},isForwardButtonDisabled:{type:Boolean,required:!1,default:!1},isForwardButtonHide:{type:Boolean,required:!1},isForwardLastButtonHide:{type:Boolean,required:!1},isForwardStepButtonDisabled:{type:Boolean,required:!1,default:!0},isMobile:{type:Boolean,required:!1,default:!1},isStepNumberVisible:{type:Boolean,required:!1,default:!0},isStepsJustified:{type:Boolean,required:!1,default:!0},keyId:{type:String,required:!1,default:void 0},showOnlyActiveStepMobile:{type:Boolean,required:!1,default:!0},stepActive:{type:Number,default:void 0},stepIconError:{type:String,required:!1,default:"AlertDanger"},stepIconErrorText:{type:String,required:!1,default:"_A_WIZARD_STEP_ERROR_"},stepIconWarning:{type:String,required:!1,default:"AlertWarning"},stepIconWarningText:{type:String,required:!1,default:"_A_WIZARD_STEP_WARNING_"},steps:{type:Array,default:()=>[]},stepsProgressbarText:{type:String,required:!1,default:"_A_WIZARD_STEPS_PROGRESSBAR_TEXT_{{stepActive}}_{{stepsCount}}_"},subType:{type:String,required:!1,default:void 0,validator:(e,t)=>{const i={arrows:[],basic:[],line:["square","circle","square-bordered","circle-bordered"],round:[]};return t.type in i&&((0,p.isNil)(e)||-1!==i[t.type].indexOf(e))}},stepsVisited:{type:Object,default:void 0},type:{type:String,required:!1,default:"basic",validator:e=>-1!==["arrows","line","round","basic"].indexOf(e)}},emits:["goStepBack","goStepForward"],setup(e,t){const{goStepBackLocal:i,goStepForwardLocal:r}=function({emit:e}){return{goStepBackLocal:t=>{e("goStepBack",t)},goStepForwardLocal:t=>{e("goStepForward",t)}}}(t),{footerId:_,wizardId:o}=function(e){const t=(0,a.lW)(e,"id");return{footerId:(0,a.EW)((()=>`${t.value}_footer`)),wizardId:(0,a.EW)((()=>`${t.value}_wizard`))}}(e),{initWizard:n,isWizardVisible:s}=function(){const e=(0,a.KR)(void 0);return{initWizard:()=>{(0,a.dY)().then((()=>{e.value=!0}))},isWizardVisible:e}}();return n(),{footerId:_,goStepBackLocal:i,goStepForwardLocal:r,isWizardVisible:s,wizardId:o}},render(){return(0,a.h)(d.A,{alwaysTranslate:this.alwaysTranslate,backdropZIndex:this.backdropZIndex,close:this.close,closeButtonAttributes:this.closeButtonAttributes,closeButtonClass:this.closeButtonClass,closeButtonId:this.closeButtonId,closeButtonText:this.closeButtonText,disabled:this.disabled,disabledSave:this.disabledSave,extra:this.extra,headerTag:this.headerTag,headerText:this.headerText,id:this.id,isCloseButtonHide:this.isCloseButtonHide,isFooterSticky:this.isFooterSticky,isSaveButtonHide:this.isSaveButtonHide,loading:this.loading,modalClass:this.modalClass,save:this.save,saveButtonAttributes:this.saveButtonAttributes,saveButtonClass:this.saveButtonClass,saveButtonId:this.saveButtonId,saveButtonText:this.saveButtonText,selectorClose:this.selectorClose,selectorCloseIds:this.selectorCloseIds,showCloseButton:this.showCloseButton,size:this.size,stop:this.stop,useEscape:this.useEscape,zIndex:this.zIndex},{...this.$slots||{},modalBody:()=>[this.isWizardVisible&&(0,a.h)(l.A,{id:this.wizardId,ariaLabel:this.ariaLabel,ariaLabelSteps:this.ariaLabelSteps,backButtonAttributes:this.backButtonAttributes,backButtonClass:this.backButtonClass,backButtonIconLeft:this.backButtonIconLeft,backButtonIconRight:this.backButtonIconRight,backButtonText:this.backButtonText,backButtonTitle:this.backButtonTitle,forwardButtonAttributes:this.forwardButtonAttributes,forwardButtonClass:this.forwardButtonClass,forwardButtonIconLeft:this.forwardButtonIconLeft,forwardButtonIconRight:this.forwardButtonIconRight,forwardButtonText:this.forwardButtonText,forwardButtonTitle:this.forwardButtonTitle,hasFocusJump:this.hasFocusJump,extra:this.extra,isBackButtonDisabled:this.isBackButtonDisabled,isBackButtonHide:this.isBackButtonHide,isBackFirstButtonHide:this.isBackFirstButtonHide,isBackStepButtonDisabled:this.isBackStepButtonDisabled,isButtonsLoading:this.isButtonsLoading,isControlOutside:this.isControlOutside,isForwardButtonDisabled:this.isForwardButtonDisabled,isForwardButtonHide:this.isForwardButtonHide,isForwardLastButtonHide:this.isForwardLastButtonHide,isForwardStepButtonDisabled:this.isForwardStepButtonDisabled,isMobile:this.isMobile,isStepNumberVisible:this.isStepNumberVisible,isStepsJustified:this.isStepsJustified,keyId:this.keyId,isToolbarBottom:!0,isToolbarTop:!1,showOnlyActiveStepMobile:this.showOnlyActiveStepMobile,stepActive:this.stepActive,stepIconError:this.stepIconError,stepIconErrorText:this.stepIconErrorText,stepIconWarning:this.stepIconWarning,stepIconWarningText:this.stepIconWarningText,steps:this.steps,stepsProgressbarText:this.stepsProgressbarText,stepsVisited:this.stepsVisited,subType:this.subType,toolbarBottomTeleportId:this.footerId,type:this.type,onGoStepBack:this.goStepBackLocal,onGoStepForward:this.goStepForwardLocal},this.$slots)],modalFooterPrepend:()=>[this.$slots.modalWizardFooterPrepend&&this.$slots.modalWizardFooterPrepend(),(0,a.h)("div",{id:this.footerId}),this.$slots.modalWizardFooterAppend&&this.$slots.modalWizardFooterAppend()]})}},S={name:"PageModalWizardBasic",components:{AButton:n.A,AlohaExample:s.A,AModalWizard:A,ATranslation:o.A},setup(){const{codeHtml:e}={codeHtml:'<a-button\n  id="wizard_basic"\n  class="a_btn a_btn_primary"\n  text="open"\n  @click="openModalWizard"\n></a-button>\n<a-modal-wizard\n  v-if="isModalWizardVisible"\n  size="xxl"\n  selector-close-ids="wizard_basic"\n  header-text="Wizard"\n  :close="closeModalWizard"\n  :steps="wizardSteps"\n>\n  <template\n    v-slot:step1\n  >\n    <a-translation\n      tag="h2"\n      text="_A_MODAL_WIZARD_STEP_1_"\n    ></a-translation>\n    <p>{{ text }}</p>\n  </template>\n  <template\n    v-slot:step2\n  >\n    <a-translation\n      tag="h2"\n      text="_A_MODAL_WIZARD_STEP_2_"\n    ></a-translation>\n    <p>{{ text }}</p>\n  </template>\n  <template\n    v-slot:step3\n  >\n    <a-translation\n      tag="h2"\n      text="_A_MODAL_WIZARD_STEP_3_"\n    ></a-translation>\n    <p>{{ text }}</p>\n  </template>\n  <template\n    v-slot:step4\n  >\n    <a-translation\n      tag="h2"\n      text="_A_MODAL_WIZARD_STEP_4_"\n    ></a-translation>\n    <p>{{ text }}</p>\n  </template>\n</a-modal-wizard>'},{codeJs:t}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport AButton from "aloha-vue/src/AButton/AButton";\nimport AModalWizard from "aloha-vue/src/AModalWizard/AModalWizard";\nimport ATranslation from "aloha-vue/src/ATranslation/ATranslation";\n    \nexport default {\n  name: "PageModalWizardBasic",\n  components: {\n    AButton,\n    AModalWizard,\n    ATranslation,\n  },\n  setup() {\n    const isModalWizardVisible = ref(undefined);\n\n    const wizardSteps = [\n      {\n        slot: "step1",\n        label: "_A_MODAL_WIZARD_STEP_1_",\n        title: "_A_MODAL_WIZARD_STEP_1_",\n      },\n      {\n        slot: "step2",\n        label: "_A_MODAL_WIZARD_STEP_2_",\n        title: "_A_MODAL_WIZARD_STEP_2_",\n      },\n      {\n        slot: "step3",\n        label: "_A_MODAL_WIZARD_STEP_3_",\n        title: "_A_MODAL_WIZARD_STEP_3_",\n      },\n      {\n        slot: "step4",\n        label: "_A_MODAL_WIZARD_STEP_4_",\n        title: "_A_MODAL_WIZARD_STEP_4_",\n      },\n    ];\n    const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. \n        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, \n        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent`;\n\n    const openModalWizard = () => {\n      isModalWizardVisible.value = true;\n    };\n\n    const closeModalWizard = () => {\n      isModalWizardVisible.value = false;\n    };\n\n    return {\n      closeModalWizard,\n      isModalWizardVisible,\n      openModalWizard,\n      text,\n      wizardSteps,\n    };\n  },\n};'},i=(0,a.KR)(void 0);return{closeModalWizard:()=>{i.value=!1},codeHtml:e,codeJs:t,isModalWizardVisible:i,openModalWizard:()=>{i.value=!0},text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. \n        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, \n        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent",wizardSteps:[{slot:"step1",label:"_A_MODAL_WIZARD_STEP_1_",title:"_A_MODAL_WIZARD_STEP_1_"},{slot:"step2",label:"_A_MODAL_WIZARD_STEP_2_",title:"_A_MODAL_WIZARD_STEP_2_"},{slot:"step3",label:"_A_MODAL_WIZARD_STEP_3_",title:"_A_MODAL_WIZARD_STEP_3_"},{slot:"step4",label:"_A_MODAL_WIZARD_STEP_4_",title:"_A_MODAL_WIZARD_STEP_4_"}]}}};var I=i(6262);const c=(0,I.A)(S,[["render",function(e,t){const i=(0,a.g2)("a-button"),r=(0,a.g2)("a-translation"),_=(0,a.g2)("a-modal-wizard"),o=(0,a.g2)("aloha-example");return(0,a.uX)(),(0,a.Wv)(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:"steps"},{default:(0,a.k6)((()=>[(0,a.bF)(i,{class:"a_btn a_btn_primary",id:"wizard_basic",text:"open",onClick:e.openModalWizard},null,8,["onClick"]),e.isModalWizardVisible?((0,a.uX)(),(0,a.Wv)(_,{key:0,size:"xxl","selector-close-ids":"wizard_basic","header-text":"Wizard",close:e.closeModalWizard,steps:e.wizardSteps},{step1:(0,a.k6)((()=>[(0,a.bF)(r,{tag:"h2",text:"_A_MODAL_WIZARD_STEP_1_"}),(0,a.Lk)("p",null,(0,a.v_)(e.text),1)])),step2:(0,a.k6)((()=>[(0,a.bF)(r,{tag:"h2",text:"_A_MODAL_WIZARD_STEP_2_"}),(0,a.Lk)("p",null,(0,a.v_)(e.text),1)])),step3:(0,a.k6)((()=>[(0,a.bF)(r,{tag:"h2",text:"_A_MODAL_WIZARD_STEP_3_"}),(0,a.Lk)("p",null,(0,a.v_)(e.text),1)])),step4:(0,a.k6)((()=>[(0,a.bF)(r,{tag:"h2",text:"_A_MODAL_WIZARD_STEP_4_"}),(0,a.Lk)("p",null,(0,a.v_)(e.text),1)])),_:1},8,["close","steps"])):(0,a.Q3)("v-if",!0)])),_:1},8,["code-html","code-js"])}]]);var O=i(2187);const T={name:"PageModalWizard",components:{AlohaPage:r.A,AlohaTableProps:_.A,ATranslation:o.A,PageModalWizardBasic:c},setup(){const{pageTitle:e}=function(){const e=(0,a.EW)((()=>(0,O.a1)({placeholder:"_A_MODAL_WIZARD_COMPONENT_NAME_"})));return{pageTitle:(0,a.EW)((()=>"AModalWizard"+(e.value?` (${e.value})`:"")))}}(),{dataProps:t}={dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"backdrop-z-index",description:"_A_MODAL_PROPS_BACKDROP_Z_INDEX_DESCRIPTION_",type:"Number",default:void 0,required:!1},{name:"close",description:"_A_MODAL_PROPS_CLOSE_DESCRIPTION_",type:"Function",default:void 0,required:!0},{name:"close-button-attributes",description:"_A_MODAL_PROPS_CLOSE_BUTTON_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"close-button-class",description:"_A_MODAL_PROPS_CLOSE_BUTTON_CLASS_DESCRIPTION_",type:"String / Array / Object",default:"a_btn a_btn_secondary",required:!1},{name:"close-button-id",description:"_A_MODAL_PROPS_CLOSE_BUTTON_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"close-button-text",description:"_A_MODAL_PROPS_CLOSE_BUTTON_TEXT_DESCRIPTION_",type:"String",default:"_A_MODAL_BTN_CANCEL_",required:!1},{name:"disabled",description:"_A_MODAL_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"disabled-save",description:"_A_MODAL_PROPS_DISABLED_SAVE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"extra",description:"_A_MODAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"header-tag",description:"_A_MODAL_PROPS_HEADER_TAG_DESCRIPTION_",type:"String",default:"h2",required:!1},{name:"header-text",description:"_A_MODAL_PROPS_HEADER_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-close-button-hide",description:"_A_MODAL_PROPS_IS_CLOSE_BUTTON_HIDE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-footer-sticky",description:"_A_MODAL_PROPS_IS_FOOTER_STICKY_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-save-button-hide",description:"_A_MODAL_PROPS_IS_SAVE_BUTTON_HIDE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"loading",description:"_A_MODAL_PROPS_LOADING_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"modal-class",description:"_A_MODAL_PROPS_MODAL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"save",description:"_A_MODAL_PROPS_SAVE_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"save-button-attributes",description:"_A_MODAL_PROPS_SAVE_BUTTON_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"save-button-class",description:"_A_MODAL_PROPS_SAVE_BUTTON_CLASS_DESCRIPTION_",type:"String / Array / Object",default:"a_btn a_btn_primary",required:!1},{name:"save-button-id",description:"_A_MODAL_PROPS_SAVE_BUTTON_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"save-button-text",description:"_A_MODAL_PROPS_SAVE_BUTTON_TEXT_DESCRIPTION_",type:"String",default:"_A_MODAL_BTN_SAVE_",required:!1},{name:"selector-close",description:"_A_MODAL_PROPS_SELECTOR_CLOSE_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"selector-close-ids",description:"_A_MODAL_PROPS_SELECTOR_CLOSE_IDS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"show-close-button",description:"_A_MODAL_PROPS_SHOW_CLOSE_BUTTON_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"size",description:"_A_MODAL_PROPS_SIZE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"stop",description:"_A_MODAL_PROPS_STOP_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"use-escape",description:"_A_MODAL_PROPS_USE_ESCAPE_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"z-index",description:"_A_MODAL_PROPS_Z_INDEX_DESCRIPTION_",type:"Number",default:void 0,required:!1},{name:"aria-label",description:"_A_WIZARD_PROPS_ARIA_LABEL_DESCRIPTION_",type:"String",default:"_A_WIZARD_ARIA_LABEL_",required:!1},{name:"aria-label-steps",description:"_A_WIZARD_PROPS_ARIA_LABEL_STEPS_DESCRIPTION_",type:"String",default:"_A_WIZARD_STEPS_ARIA_LABEL_",required:!1},{name:"back-button-attributes",description:"_A_WIZARD_PROPS_BACK_BUTTON_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"back-button-class",description:"_A_WIZARD_PROPS_BACK_BUTTON_CLASS_DESCRIPTION_",type:"String / Array / Object",default:"a_btn a_btn_secondary",required:!1},{name:"back-button-icon-left",description:"_A_WIZARD_PROPS_BACK_BUTTON_ICON_LEFT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"back-button-icon-right",description:"_A_WIZARD_PROPS_BACK_BUTTON_ICON_RIGHT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"back-button-text",description:"_A_WIZARD_PROPS_BACK_BUTTON_TEXT_DESCRIPTION_",type:"String",default:"_A_WIZARD_PREVIOUS_",required:!1},{name:"back-button-title",description:"_A_WIZARD_PROPS_BACK_BUTTON_TITLE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"extra",description:"_A_WIZARD_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"forward-button-attributes",description:"_A_WIZARD_PROPS_FORWARD_BUTTON_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"forward-button-class",description:"_A_WIZARD_PROPS_FORWARD_BUTTON_CLASS_DESCRIPTION_",type:"String / Array / Object",default:"a_btn a_btn_secondary",required:!1},{name:"forward-button-icon-left",description:"_A_WIZARD_PROPS_FORWARD_BUTTON_ICON_LEFT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"forward-button-icon-right",description:"_A_WIZARD_PROPS_FORWARD_BUTTON_ICON_RIGHT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"forward-button-text",description:"_A_WIZARD_PROPS_FORWARD_BUTTON_TEXT_DESCRIPTION_",type:"String",default:"_A_WIZARD_PREVIOUS_",required:!1},{name:"forward-button-title",description:"_A_WIZARD_PROPS_FORWARD_BUTTON_TITLE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"has-focus-jump",description:"_A_WIZARD_PROPS_HAS_FOCUS_JUMP_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"id",description:"_A_WIZARD_PROPS_ID_DESCRIPTION_",type:"String",default:'() => uniqueId("a_modal_wizard_")',required:!1},{name:"is-back-button-disabled",description:"_A_WIZARD_PROPS_IS_BACK_BUTTON_DISABLED_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-back-button-hide",description:"_A_WIZARD_PROPS_IS_BACK_BUTTON_HIDE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-back-first-button-hide",description:"_A_WIZARD_PROPS_IS_BACK_FIRST_BUTTON_HIDE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-back-step-button-disabled",description:"_A_WIZARD_PROPS_IS_BACK_STEP_BUTTON_DISABLED_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-buttons-loading",description:"_A_WIZARD_PROPS_IS_BUTTONS_LOADING_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-control-outside",description:"_A_WIZARD_PROPS_IS_CONTROL_OUTSIDE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-forward-button-disabled",description:"_A_WIZARD_PROPS_IS_FORWARD_BUTTON_DISABLED_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-forward-button-hide",description:"_A_WIZARD_PROPS_IS_FORWARD_BUTTON_HIDE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-forward-last-button-hide",description:"_A_WIZARD_PROPS_IS_FORWARD_LAST_BUTTON_HIDE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-forward-step-button-disabled",description:"_A_WIZARD_PROPS_IS_FORWARD_STEP_BUTTON_DISABLED_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-mobile",description:"_A_WIZARD_PROPS_IS_MOBILE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-step-number-visible",description:"_A_WIZARD_PROPS_IS_STEP_NUMBER_VISIBLE_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-steps-justified",description:"_A_WIZARD_PROPS_IS_STEPS_JUSTIFIED_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"key-id",description:"_A_WIZARD_PROPS_KEY_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"show-only-active-step-mobile",description:"_A_WIZARD_PROPS_SHOW_ONLY_ACTIVE_STEP_MOBILE_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"step-active",description:"_A_WIZARD_PROPS_STEP_ACTIVE_DESCRIPTION_",type:"Number",default:void 0,required:!1},{name:"steps-icon-error",description:"_A_WIZARD_PROPS_STEP_ICON_ERROR_DESCRIPTION_",type:"String",default:"AlertDanger",required:!1},{name:"steps-icon-error-text",description:"_A_WIZARD_PROPS_STEP_ICON_ERROR_TEXT_DESCRIPTION_",type:"String",default:"_A_WIZARD_STEP_ERROR_",required:!1},{name:"steps-icon-warning",description:"_A_WIZARD_PROPS_STEP_ICON_WARNING_DESCRIPTION_",type:"String",default:"AlertWarning",required:!1},{name:"steps-icon-warning-text",description:"_A_WIZARD_PROPS_STEP_ICON_WARNING_TEXT_DESCRIPTION_",type:"String",default:"_A_WIZARD_STEP_WARNING_",required:!1},{name:"steps",description:"_A_WIZARD_PROPS_STEPS_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"steps-progressbar-text",description:"_A_WIZARD_PROPS_STEP_PROGRESSBAR_TEXT_DESCRIPTION_",type:"String",default:"_A_WIZARD_STEPS_PROGRESSBAR_TEXT_{{stepActive}}_{{stepsCount}}_{{stepActiveLabel}}_",required:!1},{name:"sub-type",description:"_A_WIZARD_PROPS_SUB_TYPE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"steps-visited",description:"_A_WIZARD_PROPS_STEPS_VISITED_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"type",description:"_A_WIZARD_PROPS_TYPE_DESCRIPTION_",type:"String",default:"basic",required:!1}]},{dataSlots:i}={dataSlots:[{name:"default",description:"_A_TRANSLATION_SLOT_DEFAULT_DESCRIPTION_"}]},{dataExposes:r}={dataExposes:[{name:"buttonRef",description:"_A_SHOW_MORE_EXPOSES_BUTTON_REF_DESCRIPTION_",type:"Object"},{name:"containerRef",description:"_A_SHOW_MORE_EXPOSES_CONTAINER_REF_DESCRIPTION_",type:"Object"},{name:"isButtonVisible",description:"_A_SHOW_MORE_EXPOSES_IS_BUTTON_VISIBLE_DESCRIPTION_",type:"Boolean"},{name:"isOpen",description:"_A_SHOW_MORE_EXPOSES_IS_OPEN_DESCRIPTION_",type:"Boolean"},{name:"toggleButton",description:"_A_SHOW_MORE_EXPOSES_TOGGLE_BUTTON_DESCRIPTION_",type:"Function"}]};return{dataExposes:r,dataProps:t,dataSlots:i,pageTitle:e}}},R=(0,I.A)(T,[["render",function(e,t){const i=(0,a.g2)("a-translation"),r=(0,a.g2)("page-modal-wizard-basic"),_=(0,a.g2)("aloha-table-props"),o=(0,a.g2)("aloha-page");return(0,a.uX)(),(0,a.Wv)(o,{"page-title":e.pageTitle},{body:(0,a.k6)((()=>[(0,a.bF)(i,{tag:"p",html:"_A_MODAL_WIZARD_COMPONENT_DESCRIPTION_"}),(0,a.bF)(r),(0,a.bF)(_,{data:e.dataProps},null,8,["data"]),(0,a.Q3)("aloha-table-props("),(0,a.Q3)('  table-label="Slots"'),(0,a.Q3)('  :data="dataSlots"'),(0,a.Q3)("  :columns=\"['name', 'description']\""),(0,a.Q3)(")")])),_:1},8,["page-title"])}]])}}]);
//# sourceMappingURL=chunk.7976.f8d542491096afca0282.js.map