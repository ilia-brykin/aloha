import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  forEach,
} from "lodash-es";

export default function EventsAPI(props, {
  onToggle = () => {},
  onKeydown = () => {},
  onOpen = () => {},
  onClose = () => {},
  timerCloseHover = ref(undefined),
  triggerOpen = ref(undefined),
}) {
  const triggers = toRef(props, "triggers");

  const triggersObject = computed(() => {
    const TRIGGERS = {};
    forEach(triggers.value, trigger => {
      TRIGGERS[trigger] = true;
    });

    return TRIGGERS;
  });

  const eventsLocal = computed(() => {
    const EVENTS = {};
    if (triggersObject.value.click) {
      EVENTS.onClick = onToggle;
      EVENTS.onKeydown = onKeydown;
    }
    if (triggersObject.value.focus) {
      EVENTS.onFocus = () => onOpen({ trigger: "focus" });
    }
    if (triggersObject.value.hover) {
      EVENTS.onMouseenter = () => onOpen({ trigger: "hover" });
      EVENTS.onMouseleave = () => onClose({ trigger: "hover" });
    }

    return EVENTS;
  });

  const onMouseenterMenu = () => {
    if (triggerOpen.value === "hover") {
      clearTimeout(timerCloseHover.value);
    }
  };

  const onMouseleaveMenu = () => {
    onClose({ trigger: "hover" });
  };

  const eventsMenu = computed(() => {
    const EVENTS = {};
    if (triggersObject.value.hover) {
      EVENTS.onMouseenter = onMouseenterMenu;
      EVENTS.onMouseleave = onMouseleaveMenu;
    }
    return EVENTS;
  });

  return {
    eventsLocal,
    eventsMenu,
  };
}
