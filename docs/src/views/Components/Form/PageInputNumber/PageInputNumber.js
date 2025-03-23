import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import PageInputNumberBasic from "./PageInputNumberBasic/PageInputNumberBasic.vue";
import PageInputNumberReadonly from "./PageInputNumberReadonly/PageInputNumberReadonly.vue";
import {
  AInputNumber,
  ATranslation,
} from "aloha-vue";

import EventsAPI from "../PageRouterLinkConfig/compositionAPI/EventsAPI";
import PageTitleAPI from "../PageRouterLinkConfig/compositionAPI/PageTitleAPI";
import PropsAPI from "../PageRouterLinkConfig/compositionAPI/PropsAPI";
import TranslateAPI from "../PageRouterLinkConfig/compositionAPI/TranslateAPI";

export default {
  name: "PageInputNumber",
  components: {
    AInputNumber,
    AlohaPage,
    AlohaTableProps,
    AlohaTableTranslate,
    ATranslation,
    PageInputNumberBasic,
    PageInputNumberReadonly,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      dataProps,
    } = PropsAPI();

    const {
      dataTranslate,
    } = TranslateAPI();

    const {
      dataEvents,
    } = EventsAPI();

    return {
      dataEvents,
      dataProps,
      dataTranslate,
      pageTitle,
    };
  },
  data() {
    return {
      model1: 10,
      model2: 123,
      model3: 321,
      model4: 432,
    };
  },
  methods: {
    changeModel1(arg) {
      console.log("arg", arg);
    },
  },
};
