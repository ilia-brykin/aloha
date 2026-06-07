import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import PageConfirmAsync from "./PageConfirmAsync/PageConfirmAsync.vue";
import PageConfirmBasic from "./PageConfirmBasic/PageConfirmBasic.vue";
import PageConfirmButtons from "./PageConfirmButtons/PageConfirmButtons.vue";
import PageConfirmFocus from "./PageConfirmFocus/PageConfirmFocus.vue";
import {
  ATranslation,
} from "aloha-vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";

export default {
  name: "PageConfirm",
  components: {
    AlohaPage,
    AlohaTableProps,
    ATranslation,
    PageConfirmAsync,
    PageConfirmBasic,
    PageConfirmButtons,
    PageConfirmFocus,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      dataProps,
    } = PropsAPI();

    return {
      dataProps,
      pageTitle,
    };
  },
};
