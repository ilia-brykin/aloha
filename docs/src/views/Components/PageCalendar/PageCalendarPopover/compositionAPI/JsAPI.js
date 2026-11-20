export default function JsAPI() {
  const codeJs = `// PageCalendarPopover.js
import {
  AButton,
  ACalendar,
  ATranslation,
} from "aloha-vue";

import PopoverAPI from "./compositionAPI/PopoverAPI";

export default {
  components: {
    AButton,
    ACalendar,
    ATranslation,
  },
  setup() {
    const {
      deleteEvent,
      editEvent,
      events,
      lastAction,
    } = PopoverAPI({
      events: [
        { id: 1, label: "Team meeting", start: "2026-03-10T10:00:00", end: "2026-03-10T11:00:00", location: "Room 3" },
        { id: 2, label: "Workshop", start: "2026-03-12T09:00:00", end: "2026-03-13T17:00:00", description: "Bring the laptop." },
      ],
    });

    return {
      deleteEvent,
      editEvent,
      events,
      lastAction,
    };
  },
};

// compositionAPI/PopoverAPI.js
import {
  ref,
} from "vue";

export default function PopoverAPI({ events: eventsStart = [] }) {
  const events = ref(eventsStart);
  const lastAction = ref("");

  const editEvent = ({ event, close }) => {
    lastAction.value = event.label;
    close();
  };

  const deleteEvent = ({ event }) => {
    // The popover closes itself when its event is deleted
    events.value = events.value.filter(item => item.id !== event.id);
  };

  return {
    deleteEvent,
    editEvent,
    events,
    lastAction,
  };
}`;

  return {
    codeJs,
  };
}
