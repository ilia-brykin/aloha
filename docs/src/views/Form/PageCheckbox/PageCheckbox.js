import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import ACheckbox from "../../../../../src/ui/ACheckbox/ACheckbox";
import AOneCheckbox from "../../../../../src/ui/AOneCheckbox/AOneCheckbox";
import PageCheckboxSearch from "./PageCheckboxSearch/PageCheckboxSearch.vue";
import PageCheckboxKeyDisabled from "./PageCheckboxKeyDisabled/PageCheckboxKeyDisabled.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import SlotsAPI from "./compositionAPI/SlotsAPI";
import EventsAPI from "./compositionAPI/EventsAPI";
import ExposesAPI from "./compositionAPI/ExposesAPI";

export default {
  name: "PageCheckbox",
  components: {
    AlohaPage,
    AlohaTableProps,
    ATranslation,
    ACheckbox,
    AOneCheckbox,
    PageCheckboxSearch,
    PageCheckboxKeyDisabled,
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
      model: false,
      model1: false,
      modelArr: undefined,
      data: [
        {
          label: "Aloha 0",
          id: "aloha_0",
          aloha: "",
          alohaBR: "Köln",
        },
        {
          label: "Aloha 1",
          id: "aloha_1",
          aloha: "Buba",
          alohaBR: "Köln",
        },
        {
          label: "Aloha 2",
          id: "aloha_2",
          aloha: "Buba",
          alohaBR: "Köln",
        },
        {
          label: "Aloha 3",
          id: "aloha_3",
          aloha: "Sandra",
          alohaBR: "Köln",
        },
        {
          label: "Aloha 4",
          id: "aloha_4",
          aloha: "Sandra",
          alohaBR: "Köln",
        },
        {
          label: "Aloha 5",
          id: "aloha_5",
          aloha: "Coco",
          alohaBR: "Düsseldorf",
        },
        {
          label: "Aloha 6",
          id: "aloha_6",
          aloha: "Coco",
          alohaBR: "Düsseldorf",
        },
        {
          label: "Aloha 7",
          id: "aloha_7",
          aloha: "Alex",
          alohaBR: "Düsseldorf",
        },
        {
          label: "Aloha 8",
          id: "aloha_8",
          aloha: "Alex",
          alohaBR: "Düsseldorf",
        },
      ],
    };
  },
};
