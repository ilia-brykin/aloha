import {
  computed,
  toRef,
} from "vue";

import EventBus from "../../../../utils/EventBus";

export default function PanelAPI(props, {
  destroyListenerForPressButtonsCallback = () => {},
  idForFocus = computed(() => ""),
  pressButton = () => {},
}) {
  const id = toRef(props, "id");

  const idForHeader = computed(() => {
    return `${ id.value }_header`;
  });

  const attributesForMainElement = computed(() => {
    if (idForFocus.value) {
      return {
        "aria-activedescendant": idForFocus.value,
      };
    }
    return {};
  });

  const nameForEventBusDestroyKeyDownEvent = computed(() => {
    return `${ id.value }DestroyKeyDown`;
  });

  const destroyListenerForPressButtons = () => {
    document.removeEventListener("keydown", pressButton);
    destroyListenerForPressButtonsCallback();
  };

  const setEventBus = () => {
    EventBus.$on(nameForEventBusDestroyKeyDownEvent.value, destroyListenerForPressButtons);
  };

  const destroyEventBus = () => {
    EventBus.$off(nameForEventBusDestroyKeyDownEvent.value, destroyListenerForPressButtons);
  };

  const setListenerForPressButtons = () => {
    document.addEventListener("keydown", pressButton);
  };

  return {
    attributesForMainElement,
    destroyEventBus,
    destroyListenerForPressButtons,
    idForHeader,
    setEventBus,
    setListenerForPressButtons,
  };
}
