import AlohaPage from "../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import ATranslation from "../../../../src/ATranslation/ATranslation";
import PageWizardBasic from "./PageWizardBasic/PageWizardBasic.vue";
import PageWizardButtons from "./PageWizardButtons/PageWizardButtons.vue";
import PageWizardButtonsDisabled from "./PageWizardButtonsDisabled/PageWizardButtonsDisabled.vue";
import PageWizardButtonsHide from "./PageWizardButtonsHide/PageWizardButtonsHide.vue";
import PageWizardDemo from "./PageWizardDemo/PageWizardDemo.vue";
import PageWizardHasFocusJump from "./PageWizardHasFocusJump/PageWizardHasFocusJump.vue";
import PageWizardIsButtonsLoading from "./PageWizardIsButtonsLoading/PageWizardIsButtonsLoading.vue";
import PageWizardIsControlOutside from "./PageWizardIsControlOutside/PageWizardIsControlOutside.vue";
import PageWizardIsStepNumberVisible from "./PageWizardIsStepNumberVisible/PageWizardIsStepNumberVisible.vue";
import PageWizardIsStepsJustified from "./PageWizardIsStepsJustified/PageWizardIsStepsJustified.vue";
import PageWizardIsToolbar from "./PageWizardIsToolbar/PageWizardIsToolbar.vue";
import PageWizardKeyId from "./PageWizardKeyId/PageWizardKeyId.vue";
import PageWizardShowOnlyActiveStepMobile from "./PageWizardShowOnlyActiveStepMobile/PageWizardShowOnlyActiveStepMobile.vue";
import PageWizardSlot from "./PageWizardSlot/PageWizardSlot.vue";
import PageWizardSlotLabel from "./PageWizardSlotLabel/PageWizardSlotLabel.vue";
import PageWizardSlotToolbar from "./PageWizardSlotToolbar/PageWizardSlotToolbar.vue";
import PageWizardStepActive from "./PageWizardStepActive/PageWizardStepActive.vue";
import PageWizardStepsErrors from "./PageWizardStepsErrors/PageWizardStepsErrors.vue";
import PageWizardStepsWarnings from "./PageWizardStepsWarnings/PageWizardStepsWarnings.vue";
import PageWizardType from "./PageWizardType/PageWizardType.vue";

import ExposesAPI from "./compositionAPI/ExposesAPI";
import EventsAPI from "./compositionAPI/EventsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import SlotsAPI from "./compositionAPI/SlotsAPI";
import TranslateAPI from "./compositionAPI/TranslateAPI";

export default {
  name: "PageWizard",
  components: {
    AlohaPage,
    AlohaTableProps,
    AlohaTableTranslate,
    ATranslation,
    PageWizardBasic,
    PageWizardButtons,
    PageWizardButtonsDisabled,
    PageWizardButtonsHide,
    PageWizardDemo,
    PageWizardHasFocusJump,
    PageWizardIsButtonsLoading,
    PageWizardIsControlOutside,
    PageWizardIsStepNumberVisible,
    PageWizardIsStepsJustified,
    PageWizardIsToolbar,
    PageWizardKeyId,
    PageWizardShowOnlyActiveStepMobile,
    PageWizardSlot,
    PageWizardSlotLabel,
    PageWizardSlotToolbar,
    PageWizardStepActive,
    PageWizardStepsErrors,
    PageWizardStepsWarnings,
    PageWizardType,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      dataProps,
    } = PropsAPI();

    const {
      dataSlots,
    } = SlotsAPI();

    const {
      dataExposes,
    } = ExposesAPI();

    const {
      dataEvents,
    } = EventsAPI();

    const {
      dataTranslate,
    } = TranslateAPI();

    return {
      dataExposes,
      dataEvents,
      dataProps,
      dataSlots,
      dataTranslate,
      pageTitle,
    };
  },
};
