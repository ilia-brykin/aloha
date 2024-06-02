import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import PageRadioCollapse from "./PageRadioCollapse/PageRadioCollapse.vue";
import PageRadioDataExtra from "./PageRadioDataExtra/PageRadioDataExtra.vue";
import PageRadioInline from "./PageRadioInline/PageRadioInline.vue";
import PageRadioIsButtonGroup from "./PageRadioIsButtonGroup/PageRadioIsButtonGroup.vue";
import PageRadioIsModelArray from "./PageRadioIsModelArray/PageRadioIsModelArray.vue";
import PageRadioKeyDisabled from "./PageRadioKeyDisabled/PageRadioKeyDisabled.vue";
import PageRadioSearch from "./PageRadioSearch/PageRadioSearch.vue";
import PageRadioTranslateData from "./PageRadioTranslateData/PageRadioTranslateData.vue";
import PageRadioTwoColumns from "./PageRadioTwoColumns/PageRadioTwoColumns.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import SlotsAPI from "./compositionAPI/SlotsAPI";
import EventsAPI from "./compositionAPI/EventsAPI";
import ExposesAPI from "./compositionAPI/ExposesAPI";

export default {
  name: "PageRadio",
  components: {
    AlohaPage,
    AlohaTableProps,
    ATranslation,
    PageRadioCollapse,
    PageRadioDataExtra,
    PageRadioInline,
    PageRadioIsButtonGroup,
    PageRadioKeyDisabled,
    PageRadioSearch,
    PageRadioTranslateData,
    PageRadioTwoColumns,
    PageRadioIsModelArray,
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
      model: undefined,
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
