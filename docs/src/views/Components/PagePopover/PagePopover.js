import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableCssVars from "../../../global/components/AlohaTableCssVars/AlohaTableCssVars.vue";
import AlohaTableProps from "../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import PagePopoverBasic from "./PagePopoverBasic/PagePopoverBasic.vue";
import PagePopoverForm from "./PagePopoverForm/PagePopoverForm.vue";
import PagePopoverHover from "./PagePopoverHover/PagePopoverHover.vue";
import PagePopoverIcon from "./PagePopoverIcon/PagePopoverIcon.vue";
import PagePopoverModel from "./PagePopoverModel/PagePopoverModel.vue";
import PagePopoverNested from "./PagePopoverNested/PagePopoverNested.vue";
import PagePopoverPlacement from "./PagePopoverPlacement/PagePopoverPlacement.vue";
import PagePopoverTrigger from "./PagePopoverTrigger/PagePopoverTrigger.vue";
import {
  ATranslation,
} from "aloha-vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";

export default {
  name: "PagePopover",
  components: {
    AlohaPage,
    AlohaTableCssVars,
    AlohaTableProps,
    AlohaTableTranslate,
    ATranslation,
    PagePopoverBasic,
    PagePopoverForm,
    PagePopoverIcon,
    PagePopoverPlacement,
    PagePopoverHover,
    PagePopoverModel,
    PagePopoverTrigger,
    PagePopoverNested,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      dataEvents,
      dataMethods,
      dataProps,
      dataSlots,
      dataTranslate,
    } = PropsAPI();

    return {
      dataEvents,
      dataMethods,
      dataProps,
      dataSlots,
      dataTranslate,
      pageTitle,
    };
  },
};
