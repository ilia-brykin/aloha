import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import PageInputNumberRangeBasic from "./PageInputNumberRangeBasic/PageInputNumberRangeBasic.vue";
import PageInputNumberRangePlaceholder from "./PageInputNumberRangePlaceholder/PageInputNumberRangePlaceholder.vue";
import PageInputNumberRangeTypeInteger from "./PageInputNumberRangeTypeInteger/PageInputNumberRangeTypeInteger.vue";
import PageInputNumberRangeTypeIntegerNonNegative from "./PageInputNumberRangeTypeIntegerNonNegative/PageInputNumberRangeTypeIntegerNonNegative.vue";
import PageInputNumberRangeTypeIntegerPositive from "./PageInputNumberRangeTypeIntegerPositive/PageInputNumberRangeTypeIntegerPositive.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import SlotsAPI from "./compositionAPI/SlotsAPI";
import EventsAPI from "./compositionAPI/EventsAPI";
import ExposesAPI from "./compositionAPI/ExposesAPI";

export default {
  name: "PageInputNumberRange",
  components: {
    AlohaPage,
    AlohaTableProps,
    ATranslation,
    PageInputNumberRangeBasic,
    PageInputNumberRangePlaceholder,
    PageInputNumberRangeTypeInteger,
    PageInputNumberRangeTypeIntegerNonNegative,
    PageInputNumberRangeTypeIntegerPositive,
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
      modelArr: undefined,
      modelArr2: undefined,
      data: [
        {
          label: "Aloha 1",
          id: "aloha_1",
          group: "group 1",
        },
        {
          label: "Aloha 2",
          id: "aloha_2",
        },
        {
          label: "Aloha 3",
          id: "aloha_3",
          group: "group 1",
        },
        {
          label: "Aloha 4",
          id: "aloha_4",
        },
        {
          label: "Aloha 5",
          id: "aloha_5",
          group: "group 2",
        },
        {
          label: "AlohaAlohaAlohaAlohaAlohaAlohaAl ohaAlohaAlohaAlohaAlohaAloha AlohaAlohaAlohaAlohaAlohaAlohaAloha 6",
          id: "aloha_6",
          group: "group 2",
        },
        {
          label: "AlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAloha 7",
          id: "aloha_7",
          group: "group 2",
        },
        {
          label: "AlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAloha 8",
          id: "aloha_8",
        },
      ],
    };
  },
  methods: {
    getLabel({ item }) {
      return `callback: ${ item.label }`;
    },
  },
};
