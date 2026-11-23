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
}
