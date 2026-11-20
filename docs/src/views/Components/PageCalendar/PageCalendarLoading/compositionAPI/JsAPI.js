export default function JsAPI() {
  const codeJs = `// PageCalendarLoading.js
import {
  ACalendar,
} from "aloha-vue";

import LoadingAPI from "./compositionAPI/LoadingAPI";

export default {
  components: {
    ACalendar,
  },
  setup() {
    const {
      events,
      isLoading,
      loadEvents,
    } = LoadingAPI();

    return {
      events,
      isLoading,
      loadEvents,
    };
  },
};

// compositionAPI/LoadingAPI.js
import {
  ref,
} from "vue";

import moment from "moment";

export default function LoadingAPI() {
  const events = ref([]);
  const isLoading = ref(false);

  // A server would return the events of the shown days: here every day gets an event after a short time
  const loadEvents = ({ start, end }) => {
    isLoading.value = true;
    setTimeout(() => {
      const EVENTS = [];
      for (const DAY = moment(start); DAY.format("YYYY-MM-DD") <= end; DAY.add(3, "days")) {
        EVENTS.push({ id: DAY.format("YYYY-MM-DD"), label: \`Loaded \${ DAY.format("DD.MM.") }\`, start: DAY.format("YYYY-MM-DD[T]10:00:00") });
      }
      events.value = EVENTS;
      isLoading.value = false;
    }, 800);
  };

  return {
    events,
    isLoading,
    loadEvents,
  };
}`;

  return {
    codeJs,
  };
}
