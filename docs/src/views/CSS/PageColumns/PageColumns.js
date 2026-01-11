
import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import PageColumnsBasic from "./PageColumnsBasic/PageColumnsBasic.vue";
import PageColumnsBreakpoints from "./PageColumnsBreakpoints/PageColumnsBreakpoints.vue";
import PageColumnsCount from "./PageColumnsCount/PageColumnsCount.vue";
import PageColumnsGap from "./PageColumnsGap/PageColumnsGap.vue";
import PageColumnsOffset from "./PageColumnsOffset/PageColumnsOffset.vue";
import {
  ATranslation,
} from "aloha-vue";

export default {
  name: "PageColumns",
  components: {
    AlohaPage,
    AlohaTableProps,
    ATranslation,
    PageColumnsBasic,
    PageColumnsBreakpoints,
    PageColumnsCount,
    PageColumnsGap,
    PageColumnsOffset,
  },
};
