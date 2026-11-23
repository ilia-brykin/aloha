import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AButton,
  ACalendar,
  AInputFile,
  ATranslation,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import ImportAPI from "./compositionAPI/ImportAPI";
import JsAPI from "./compositionAPI/JsAPI";

import {
  getSampleIcs,
} from "./utils/sampleIcs";

export default {
  name: "PageCalendarImport",
  components: {
    AButton,
    ACalendar,
    AInputFile,
    AlohaExample,
    ATranslation,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    const {
      calendarEvents,
      file,
      getCodeText,
      imported,
      save,
      skipped,
      useSample,
      warnings,
    } = ImportAPI({ getSampleIcs });

    return {
      calendarEvents,
      codeHtml,
      codeJs,
      file,
      getCodeText,
      imported,
      save,
      skipped,
      useSample,
      warnings,
    };
  },
};
