import {
  ATranslation,
} from "aloha-vue";
import AlohaPage from "../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import PageLoadingAlign from "./PageLoadingAlign/PageLoadingAlign.vue";
import PageLoadingBasic from "./PageLoadingBasic/PageLoadingBasic.vue";
import PageLoadingSizes from "./PageLoadingSizes/PageLoadingSizes.vue";
import PageLoadingText from "./PageLoadingText/PageLoadingText.vue";
import PageLoadingTextAlign from "./PageLoadingTextAlign/PageLoadingTextAlign.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import TranslateAPI from "./compositionAPI/TranslateAPI";

export default {
  name: "PageLoading",
  components: {
    AlohaPage,
    AlohaTableProps,
    AlohaTableTranslate,
    ATranslation,
    PageLoadingAlign,
    PageLoadingBasic,
    PageLoadingSizes,
    PageLoadingText,
    PageLoadingTextAlign,
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
