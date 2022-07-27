import PuxPopover from "../PuxPopover/PuxPopover.vue";

import {
  cloneDeep,
  forEach,
} from "lodash-es";

const ELEMENTS_FOR_ARROWS = `button:not([disabled]), input:not([disabled]), a`;
const KEY_CODE_ESCAPE = 27;
const AVAILABLE_POSITIONS = [
  "auto",
  "auto-start",
  "auto-end",
  "top",
  "top-start",
  "top-end",
  "right",
  "right-start",
  "right-end",
  "bottom",
  "bottom-start",
  "bottom-end",
  "left",
  "left-start",
  "left-end",
];

// @vue/component
export default {
  name: "PuxDropdown",
  components: {
    PuxPopover,
  },
  props: {
    htmlId: {
      type: String,
      required: true,
      info: "HTML-ID",
    },
    buttonTag: {
      type: String,
      required: false,
      default: "button",
      info: "HTML-Tag für Click-Element",
    },
    buttonClass: {
      type: String,
      required: false,
      default: "btn btn-default dropdown_button",
      info: "CSS-Class für Click-Element",
    },
    buttonAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
      info: "Zusätzliche HTML-Attribute",
    },
    listClass: {
      type: String,
      required: false,
      default: undefined,
      info: "CSS-Class für Liste",
    },
    listTag: {
      type: String,
      required: false,
      default: "div",
    },
    inBody: {
      type: Boolean,
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    isListWidthSameWithButton: {
      type: Boolean,
      required: false,
    },
    classForTooltipInner: {
      type: [String, Object],
      required: false,
      default: "position-relative p-0 font_family_inherit",
    },
    placement: {
      type: String,
      required: false,
      default: "bottom",
      validator: placement => AVAILABLE_POSITIONS.indexOf(placement) !== -1,
    },
  },
  data() {
    return {
      statusExpanded: false,
      statusEventPressArrows: false,
      buttonWidth: undefined,
    };
  },
  computed: {
    ariaExpanded() {
      return `${ this.statusExpanded }`;
    },

    idForPopover() {
      return `${ this.htmlId }_popover`;
    },

    buttonAttributesLocal() {
      const BUTTON_ATTRIBUTES = cloneDeep(this.buttonAttributes);
      if (this.disabled) {
        if (this.buttonTag === "button") {
          BUTTON_ATTRIBUTES.disabled = true;
        } else if (this.buttonTag === "a") {
          BUTTON_ATTRIBUTES["aria-disabled"] = "true";
        }
      }
      return BUTTON_ATTRIBUTES;
    },

    stylesForTooltipInner() {
      if (this.buttonWidth) {
        return `min-width: ${ this.buttonWidth }px; max-width: ${ this.buttonWidth }px;`;
      }
      return "";
    },
  },
  beforeUnmount() {
    this.destroyEventClickOutside();
    this.destroyEventPressArrows();
  },
  methods: {
    onToggle() {
      if (this.disabled) {
        return;
      }
      this.statusExpanded = !this.statusExpanded;
      if (this.statusExpanded) {
        this.setButtonWidth();
        this.initEventPressArrows();
        setTimeout(() => {
          this.setEventClickOutside();
          this.setFocusToFirstElement();
        });
      } else {
        this.destroyEventClickOutside();
        this.destroyEventPressArrows();
      }
    },

    setButtonWidth() {
      if (this.isListWidthSameWithButton) {
        this.buttonWidth = this.$refs.dropdown_button.clientWidth;
      }
    },

    setEventClickOutside() {
      document.addEventListener("click", this.clickOutsideEvent);
    },

    destroyEventClickOutside() {
      document.removeEventListener("click", this.clickOutsideEvent);
    },

    clickOutsideEvent($event) {
      // here I check that click was outside the el and his children
      // if (!(this.$el === $event.target || this.$el.contains($event.target))) {
      if (!(this.$el === $event.target || this.$el.contains($event.target))) {
        // and if it did, call method provided in attribute value
        this.onClose();
      }
    },

    onClose() {
      this.statusExpanded = false;
      this.destroyEventClickOutside();
    },

    initEventPressArrows() {
      if (this.statusEventPressArrows) { // Event ist schon installiert
        return;
      }
      this.statusEventPressArrows = true;
      document.body.addEventListener("keydown", this.pressButton);
    },

    destroyEventPressArrows() {
      if (!this.statusEventPressArrows) { // Event ist schon zestört
        return;
      }
      this.statusEventPressArrows = false;
      document.body.removeEventListener("keydown", this.pressButton);
    },

    pressButton($event) {
      const EVENT = $event || window.$event;
      if (EVENT.keyCode === 40 || EVENT.keyCode === 38) { // arrow down or up
        const DOWN = EVENT.keyCode === 40;
        this.pressArrows({ down: DOWN });
        $event.preventDefault();
        $event.stopPropagation();
      } else if (EVENT.keyCode === KEY_CODE_ESCAPE) {
        this.onClose();
        this.$refs.dropdown_button.focus();
        $event.preventDefault();
        $event.stopPropagation();
      }
    },

    pressArrows({ down }) {
      const ELEMENTS = this.$refs.dropdown_menu.querySelectorAll(ELEMENTS_FOR_ARROWS);
      if (ELEMENTS.length === 0) {
        return;
      }
      forEach(ELEMENTS, (element, index) => {
        if (element === document.activeElement) {
          if (down) {
            if (index < ELEMENTS.length - 1) {
              ELEMENTS[index + 1].focus();
            }
          } else {
            if (index > 0) {
              ELEMENTS[index - 1].focus();
            }
          }
          return false;
        }
      });
    },

    setFocusToFirstElement() {
      const ELEMENTS = this.$refs.dropdown_menu.querySelectorAll(ELEMENTS_FOR_ARROWS);
      if (ELEMENTS.length === 0) {
        return;
      }
      ELEMENTS[0].focus();
    },
  },
};
