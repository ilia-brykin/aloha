import {
  ATranslation,
} from "aloha-vue";
import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import PageProgressCircleBasic from "./PageProgressCircleBasic/PageProgressCircleBasic.vue";
import PageProgressCircleIndeterminate from "./PageProgressCircleIndeterminate/PageProgressCircleIndeterminate.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import SlotsAPI from "./compositionAPI/SlotsAPI";

export default {
  name: "PageProgressCircle",
  components: {
    AlohaPage,
    AlohaTableProps,
    ATranslation,
    PageProgressCircleBasic,
    PageProgressCircleIndeterminate,
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

    return {
      dataProps,
      dataSlots,
      pageTitle,
    };
  },
};
