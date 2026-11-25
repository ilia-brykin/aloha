import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import PageJsonEditorBasic from "./PageJsonEditorBasic/PageJsonEditorBasic.vue";
import PageJsonEditorBig from "./PageJsonEditorBig/PageJsonEditorBig.vue";
import PageJsonEditorForm from "./PageJsonEditorForm/PageJsonEditorForm.vue";
import PageJsonEditorFormat from "./PageJsonEditorFormat/PageJsonEditorFormat.vue";
import PageJsonEditorHistory from "./PageJsonEditorHistory/PageJsonEditorHistory.vue";
import PageJsonEditorHooks from "./PageJsonEditorHooks/PageJsonEditorHooks.vue";
import PageJsonEditorModelString from "./PageJsonEditorModelString/PageJsonEditorModelString.vue";
import PageJsonEditorPlugin from "./PageJsonEditorPlugin/PageJsonEditorPlugin.vue";
import PageJsonEditorReadonly from "./PageJsonEditorReadonly/PageJsonEditorReadonly.vue";
import PageJsonEditorRights from "./PageJsonEditorRights/PageJsonEditorRights.vue";
import PageJsonEditorRules from "./PageJsonEditorRules/PageJsonEditorRules.vue";
import PageJsonEditorSchema from "./PageJsonEditorSchema/PageJsonEditorSchema.vue";
import PageJsonEditorSearch from "./PageJsonEditorSearch/PageJsonEditorSearch.vue";
import PageJsonEditorSlots from "./PageJsonEditorSlots/PageJsonEditorSlots.vue";
import PageJsonEditorVariables from "./PageJsonEditorVariables/PageJsonEditorVariables.vue";
import {
  ATranslation,
} from "aloha-vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";

export default {
  name: "PageJsonEditor",
  components: {
    AlohaPage,
    AlohaTableProps,
    AlohaTableTranslate,
    ATranslation,
    PageJsonEditorBasic,
    PageJsonEditorHistory,
    PageJsonEditorSearch,
    PageJsonEditorVariables,
    PageJsonEditorRules,
    PageJsonEditorSchema,
    PageJsonEditorFormat,
    PageJsonEditorModelString,
    PageJsonEditorHooks,
    PageJsonEditorPlugin,
    PageJsonEditorRights,
    PageJsonEditorReadonly,
    PageJsonEditorBig,
    PageJsonEditorForm,
    PageJsonEditorSlots,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      dataEvents,
      dataMethods,
      dataProps,
      dataSlots,
      dataTranslate,
    } = PropsAPI();

    return {
      dataEvents,
      dataMethods,
      dataProps,
      dataSlots,
      dataTranslate,
      pageTitle,
    };
  },
};
