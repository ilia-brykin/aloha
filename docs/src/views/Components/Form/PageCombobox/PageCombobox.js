import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import PageComboboxBasic from "./PageComboboxBasic/PageComboboxBasic.vue";
import PageComboboxForm from "./PageComboboxForm/PageComboboxForm.vue";
import PageComboboxOptions from "./PageComboboxOptions/PageComboboxOptions.vue";
import PageComboboxServer from "./PageComboboxServer/PageComboboxServer.vue";
import {
  ATranslation,
} from "aloha-vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";

export default {
  name: "PageCombobox",
  components: {
    AlohaPage,
    AlohaTableProps,
    AlohaTableTranslate,
    ATranslation,
    PageComboboxBasic,
    PageComboboxOptions,
    PageComboboxServer,
    PageComboboxForm,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      dataEvents,
      dataProps,
      dataTranslate,
    } = PropsAPI();

    return {
      dataEvents,
      dataProps,
      dataTranslate,
      pageTitle,
    };
  },
};
