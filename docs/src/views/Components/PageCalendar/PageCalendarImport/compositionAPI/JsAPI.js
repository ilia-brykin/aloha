export default function JsAPI() {
  const codeJs = `// PageCalendarImport.js
import {
  AButton,
  ACalendar,
  AInputFile,
  ATranslation,
} from "aloha-vue";

import ImportAPI from "./compositionAPI/ImportAPI";

export default {
  components: {
    AButton,
    ACalendar,
    AInputFile,
    ATranslation,
  },
  setup() {
    const {
      calendarEvents,
      file,
      getCodeText,
      imported,
      save,
      skipped,
      useSample,
      warnings,
    } = ImportAPI({
      getSampleIcs: () => "BEGIN:VCALENDAR\\r\\n...\\r\\nEND:VCALENDAR",
    });

    return {
      calendarEvents,
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

// compositionAPI/ImportAPI.js
import {
  computed,
  ref,
  watch,
} from "vue";

import {
  parseCalendarIcs,
} from "aloha-vue";

// The codes of parseCalendarIcs and their texts
const CODE_TEXTS = {
  cancelled: "_A_CALENDAR_IMPORT_CODE_CANCELLED_",
  noStart: "_A_CALENDAR_IMPORT_CODE_NO_START_",
  rruleNotSupported: "_A_CALENDAR_IMPORT_CODE_RRULE_NOT_SUPPORTED_",
  timeZoneUnknown: "_A_CALENDAR_IMPORT_CODE_TIME_ZONE_UNKNOWN_",
};

export default function ImportAPI({ getSampleIcs = () => "" } = {}) {
  // The saved events (here only in the page, in an application on the server)
  const events = ref([]);
  const file = ref(undefined);
  const imported = ref([]);
  const skipped = ref([]);
  const warnings = ref([]);

  // The calendar shows the saved events and the read events before they are saved
  const calendarEvents = computed(() => [...events.value, ...imported.value]);

  const readText = text => {
    const RESULT = parseCalendarIcs(text);
    imported.value = RESULT.events;
    skipped.value = RESULT.skipped;
    warnings.value = RESULT.warnings;
  };

  // AInputFile gives { name, size, type, file }
  watch(file, async value => {
    if (value?.file) {
      readText(await value.file.text());
    }
  });

  const useSample = () => {
    readText(getSampleIcs());
  };

  const getCodeText = code => CODE_TEXTS[code] || code;

  // In an application: send imported.value to the server and save it there
  const save = () => {
    events.value = [...events.value, ...imported.value];
    imported.value = [];
    skipped.value = [];
    warnings.value = [];
    file.value = undefined;
  };

  return {
    calendarEvents,
    file,
    getCodeText,
    imported,
    save,
    skipped,
    useSample,
    warnings,
  };
}`;

  return {
    codeJs,
  };
}
