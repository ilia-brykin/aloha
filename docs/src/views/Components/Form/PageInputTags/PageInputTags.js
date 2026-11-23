import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import PageInputTagsBasic from "./PageInputTagsBasic/PageInputTagsBasic.vue";
import PageInputTagsEmails from "./PageInputTagsEmails/PageInputTagsEmails.vue";
import PageInputTagsForm from "./PageInputTagsForm/PageInputTagsForm.vue";
import {
  ATranslation,
} from "aloha-vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";

export default {
  name: "PageInputTags",
  components: {
    AlohaPage,
    AlohaTableProps,
    AlohaTableTranslate,
    ATranslation,
    PageInputTagsBasic,
    PageInputTagsEmails,
    PageInputTagsForm,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      dataMethods,
      dataProps,
      dataTranslate,
    } = PropsAPI();

    return {
      dataMethods,
      dataProps,
      dataTranslate,
      pageTitle,
    };
  },
};
