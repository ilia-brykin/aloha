import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import PageColorPickerBasic from "./PageColorPickerBasic/PageColorPickerBasic.vue";
import PageColorPickerColorFormat from "./PageColorPickerColorFormat/PageColorPickerColorFormat.vue";
import PageColorPickerDisabled from "./PageColorPickerDisabled/PageColorPickerDisabled.vue";
import PageColorPickerErrors from "./PageColorPickerErrors/PageColorPickerErrors.vue";
import PageColorPickerForm from "./PageColorPickerForm/PageColorPickerForm.vue";
import PageColorPickerHelpText from "./PageColorPickerHelpText/PageColorPickerHelpText.vue";
import PageColorPickerLabelPosition from "./PageColorPickerLabelPosition/PageColorPickerLabelPosition.vue";
import PageColorPickerPredefine from "./PageColorPickerPredefine/PageColorPickerPredefine.vue";
import PageColorPickerShowAlpha from "./PageColorPickerShowAlpha/PageColorPickerShowAlpha.vue";
import {
  ATranslation,
} from "aloha-vue";

import EventsAPI from "./compositionAPI/EventsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import TranslateAPI from "./compositionAPI/TranslateAPI";

export default {
  name: "PageColorPicker",
  components: {
    AlohaPage,
    AlohaTableProps,
    AlohaTableTranslate,
    ATranslation,
    PageColorPickerBasic,
    PageColorPickerLabelPosition,
    PageColorPickerShowAlpha,
    PageColorPickerColorFormat,
    PageColorPickerPredefine,
    PageColorPickerHelpText,
    PageColorPickerErrors,
    PageColorPickerDisabled,
    PageColorPickerForm,
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
