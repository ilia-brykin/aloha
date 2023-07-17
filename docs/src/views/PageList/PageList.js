import AlohaPage from "../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../global/components/AlohaTableProps/AlohaTableProps.vue";
import ATranslation from "../../../../src/ATranslation/ATranslation";
import AList from "../../../../src/AList/AList";
import PageListClassGroup from "./PageListClassGroup/PageListClassGroup.vue";

import EventsAPI from "./compositionAPI/EventsAPI";
import ExposesAPI from "./compositionAPI/ExposesAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import SlotsAPI from "./compositionAPI/SlotsAPI";

export default {
  name: "PageList",
  components: {
    AlohaPage,
    AlohaTableProps,
    ATranslation,
    AList,
    PageListClassGroup,
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
      dataEvents,
    } = EventsAPI();

    const {
      dataExposes,
    } = ExposesAPI();

    return {
      dataEvents,
      dataExposes,
      dataProps,
      dataSlots,
      pageTitle,
    };
  },
  data() {
    return {
      items: [
        {
          label: "label 1",
          items: [
            {
              label: "label 1.1",
              items: [
                {
                  label: "label 1.1.1",
                },
                {
                  label: "label 1.1.2",
                },
                {
                  label: "label 1.1.3",
                },
              ],
            },
            {
              label: "label 1.2",
            },
            {
              label: "label 1.3",
              items: [
                {
                  label: "label 1.3.1",
                },
                {
                  label: "label 1.3.2",
                },
                {
                  label: "label 1.3.3",
                },
              ],
            },
          ],
        },
        {
          label: "level 2",
        },
        {
          label: "level 3",
        },
      ],
    };
  },
};
