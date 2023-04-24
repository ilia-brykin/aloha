import AlohaPage from "../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AShowMore from "../../../../src/AShowMore/AShowMore";

import PropsAPI from "./compositionAPI/PropsAPI";

export default {
  name: "PageShowMore",
  components: {
    AlohaPage,
    AlohaTableProps,
    AShowMore,
  },
  setup() {
    const {
      dataProps,
    } = PropsAPI();

    return {
      dataProps,
    };
  },
};
