import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import PageSelectBasic from "./PageSelectBasic/PageSelectBasic.vue";
import PageSelectDataExtra from "./PageSelectDataExtra/PageSelectDataExtra.vue";
import PageSelectExclusiveOption from "./PageSelectExclusiveOption/PageSelectExclusiveOption.vue";
import PageSelectGroup from "./PageSelectGroup/PageSelectGroup.vue";
import PageSelectKeyDisabled from "./PageSelectKeyDisabled/PageSelectKeyDisabled.vue";
import PageSelectLabelDescription from "./PageSelectLabelDescription/PageSelectLabelDescription.vue";
import PageSelectReadonly from "./PageSelectReadonly/PageSelectReadonly.vue";
import PageSelectSearch from "./PageSelectSearch/PageSelectSearch.vue";
import PageSelectSearchTextInHtml from "./PageSelectSearchTextInHtml/PageSelectSearchTextInHtml.vue";
import PageSelectTranslateData from "./PageSelectTranslateData/PageSelectTranslateData.vue";
import {
  AIcon,
  ASelect,
  ATranslation,
} from "aloha-vue";

import EventsAPI from "./compositionAPI/EventsAPI";
import ExposesAPI from "./compositionAPI/ExposesAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import SlotsAPI from "./compositionAPI/SlotsAPI";

export default {
  name: "PageSelect",
  components: {
    AIcon,
    AlohaPage,
    AlohaTableProps,
    ASelect,
    ATranslation,
    PageSelectBasic,
    PageSelectDataExtra,
    PageSelectExclusiveOption,
    PageSelectGroup,
    PageSelectKeyDisabled,
    PageSelectLabelDescription,
    PageSelectReadonly,
    PageSelectSearch,
    PageSelectSearchTextInHtml,
    PageSelectTranslateData,
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
