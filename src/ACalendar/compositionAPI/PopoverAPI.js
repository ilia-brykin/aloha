import {
  nextTick,
  ref,
  toRef,
  watch,
} from "vue";

import {
  getOccurrenceInfo,
} from "../utils/utils";

/**
 * isEventPopover: a click on an event opens its details at the event. The calendar remembers the clicked element
 * to give the focus back to it when the popover is closed.
 */
export default function PopoverAPI(props, {
  eventsNormalized = ref([]),
}) {
  const isEventPopover = toRef(props, "isEventPopover");

  const popover = ref(undefined);

  const openPopover = ({ event, $event }) => {
    if (!isEventPopover.value) {
      return;
    }
    popover.value = {
      event,
      occurrence: getOccurrenceInfo(event),
      anchor: $event.currentTarget,
    };
  };

  const closePopover = async({ isFocusAnchor = false } = {}) => {
    const ANCHOR = popover.value?.anchor;
    popover.value = undefined;
    if (isFocusAnchor && ANCHOR?.isConnected) {
      await nextTick();
      ANCHOR.focus();
    }
  };

  // The event was deleted or changed: the popover would show old data
  watch(eventsNormalized, () => {
    if (popover.value && !eventsNormalized.value.some(event => event.key === popover.value.event.key)) {
      closePopover();
    }
  });

  return {
    closePopover,
    openPopover,
    popover,
  };
}
