import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import PageInputFileBasic from "./PageInputFileBasic/PageInputFileBasic.vue";
import PageInputFileDisabled from "./PageInputFileDisabled/PageInputFileDisabled.vue";
import PageInputFileDropzone from "./PageInputFileDropzone/PageInputFileDropzone.vue";
import PageInputFileForm from "./PageInputFileForm/PageInputFileForm.vue";
import PageInputFileHelpText from "./PageInputFileHelpText/PageInputFileHelpText.vue";
import PageInputFileLinks from "./PageInputFileLinks/PageInputFileLinks.vue";
import PageInputFileMultiple from "./PageInputFileMultiple/PageInputFileMultiple.vue";
import PageInputFilePreview from "./PageInputFilePreview/PageInputFilePreview.vue";
import PageInputFileRestrictions from "./PageInputFileRestrictions/PageInputFileRestrictions.vue";
import PageInputFileUpload from "./PageInputFileUpload/PageInputFileUpload.vue";
import {
  ATranslation,
} from "aloha-vue";

import EventsAPI from "./compositionAPI/EventsAPI";
import ModelAPI from "./compositionAPI/ModelAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import TranslateAPI from "./compositionAPI/TranslateAPI";

export default {
  name: "PageInputFile",
  components: {
    AlohaPage,
    AlohaTableProps,
    AlohaTableTranslate,
    ATranslation,
    PageInputFileBasic,
    PageInputFileDisabled,
    PageInputFileDropzone,
    PageInputFileForm,
    PageInputFileHelpText,
    PageInputFileLinks,
    PageInputFileMultiple,
    PageInputFilePreview,
    PageInputFileRestrictions,
    PageInputFileUpload,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      dataProps,
    } = PropsAPI();

    const {
      dataEvents,
    } = EventsAPI();

    const {
      dataModel,
    } = ModelAPI();

    const {
      dataTranslate,
    } = TranslateAPI();

    return {
      dataEvents,
      dataModel,
      dataProps,
      dataTranslate,
      pageTitle,
    };
  },
};
