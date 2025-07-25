import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import PageMultiselectOrderedBasic from "./PageMultiselectOrderedBasic/PageMultiselectOrderedBasic.vue";
import PageMultiselectOrderedChange from "./PageMultiselectOrderedChange/PageMultiselectOrderedChange.vue";
import PageMultiselectOrderedErrors from "./PageMultiselectOrderedErrors/PageMultiselectOrderedErrors.vue";
import PageMultiselectOrderedHelpText from "./PageMultiselectOrderedHelpText/PageMultiselectOrderedHelpText.vue";
import PageMultiselectOrderedLabelDescription from "./PageMultiselectOrderedLabelDescription/PageMultiselectOrderedLabelDescription.vue";
import PageMultiselectOrderedReadonly from "./PageMultiselectOrderedReadonly/PageMultiselectOrderedReadonly.vue";
import PageMultiselectOrderedSearchTextInHtml from "./PageMultiselectOrderedSearchTextInHtml/PageMultiselectOrderedSearchTextInHtml.vue";
import PageMultiselectOrderedSelectDeselectAll from "./PageMultiselectOrderedSelectDeselectAll/PageMultiselectOrderedSelectDeselectAll.vue";
import {
  ATranslation,
} from "aloha-vue";

import EventsAPI from "./compositionAPI/EventsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import TranslateAPI from "./compositionAPI/TranslateAPI";

export default {
  name: "PageMultiselectOrdered",
  components: {
    AlohaPage,
    AlohaTableProps,
    AlohaTableTranslate,
    ATranslation,
    PageMultiselectOrderedBasic,
    PageMultiselectOrderedChange,
    PageMultiselectOrderedErrors,
    PageMultiselectOrderedHelpText,
    PageMultiselectOrderedLabelDescription,
    PageMultiselectOrderedReadonly,
    PageMultiselectOrderedSearchTextInHtml,
    PageMultiselectOrderedSelectDeselectAll,
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
};
