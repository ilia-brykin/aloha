import EventBus from "../../../utils/EventBus";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    idForHeader() {
      return `${ this.id }_header`;
    },

    nameForEventBusDestroyKeyDownEvent() {
      return `${ this.id }DestroyKeyDown`;
    },

    attributesForMainElement() {
      if (this.idForFocus) {
        return {
          "aria-activedescendant": this.idForFocus,
        };
      }
      return {};
    },
  },
  created() {
    this.setEventBus();
  },
  beforeUnmount() {
    this.destroyEventBus();
    this.destroyListenerForPressButtons();
  },
  methods: {
    setEventBus() {
      EventBus.$on(this.nameForEventBusDestroyKeyDownEvent, this.destroyListenerForPressButtons);
    },

    emitEventBusDestroyAllListenerForPressButtonsForPanels() {
      EventBus.$emit(this.nameForEventBusDestroyKeyDownEvent);
    },

    destroyEventBus() {
      EventBus.$off(this.nameForEventBusDestroyKeyDownEvent, this.destroyListenerForPressButtons);
    },

    setListenerForPressButtons() {
      document.addEventListener("keydown", this.pressButton);
    },

    destroyListenerForPressButtons() {
      document.removeEventListener("keydown", this.pressButton);
      this.destroyListenerForPressButtonsCallback();
    },

    stopCurrentEvent($event) {
      $event.preventDefault();
      $event.stopPropagation();
    },

    setFocusToElementWithTimeout(idForFocusElement) {
      setTimeout(() => {
        const ELEMENT = document.getElementById(idForFocusElement);
        if (ELEMENT) {
          ELEMENT.focus();
        }
      });
    },

    destroyListenerForPressButtonsCallback() {},
  },
};
