import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import PageNotificationActions from "./PageNotificationActions/PageNotificationActions.vue";
import PageNotificationBasic from "./PageNotificationBasic/PageNotificationBasic.vue";
import PageNotificationDeduplicate from "./PageNotificationDeduplicate/PageNotificationDeduplicate.vue";
import PageNotificationOwnComponent from "./PageNotificationOwnComponent/PageNotificationOwnComponent.vue";
import PageNotificationPlacement from "./PageNotificationPlacement/PageNotificationPlacement.vue";
import PageNotificationProgress from "./PageNotificationProgress/PageNotificationProgress.vue";
import PageNotificationRemove from "./PageNotificationRemove/PageNotificationRemove.vue";
import PageNotificationTitle from "./PageNotificationTitle/PageNotificationTitle.vue";
import {
  ATranslation,
} from "aloha-vue";

import FunctionsAPI from "./compositionAPI/FunctionsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";

export default {
  name: "PageNotification",
  components: {
    AlohaPage,
    AlohaTableProps,
    ATranslation,
    PageNotificationBasic,
    PageNotificationTitle,
    PageNotificationActions,
    PageNotificationPlacement,
    PageNotificationProgress,
    PageNotificationDeduplicate,
    PageNotificationRemove,
    PageNotificationOwnComponent,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      dataProps,
    } = PropsAPI();

    const {
      dataFunctions,
      dataOptions,
    } = FunctionsAPI();

    return {
      dataFunctions,
      dataOptions,
      dataProps,
      pageTitle,
    };
  },
};
