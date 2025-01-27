import {
  ATranslation,
} from "aloha-vue";
import AlohaPage from "../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import PageCloakAlign from "./PageCloakAlign/PageCloakAlign.vue";
import PageCloakBasic from "./PageCloakBasic/PageCloakBasic.vue";
import PageCloakSizes from "./PageCloakSizes/PageCloakSizes.vue";
import PageCloakText from "./PageCloakText/PageCloakText.vue";
import PageCloakTextAlign from "./PageCloakTextAlign/PageCloakTextAlign.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import TranslateAPI from "./compositionAPI/TranslateAPI";

export default {
  name: "PageCloak",
  components: {
    AlohaPage,
    AlohaTableProps,
    AlohaTableTranslate,
    ATranslation,
    PageCloakAlign,
    PageCloakBasic,
    PageCloakSizes,
    PageCloakText,
    PageCloakTextAlign,
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

    return {
      dataProps,
      dataTranslate,
      pageTitle,
    };
  },
};
