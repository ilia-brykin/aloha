import {
  h,
} from "vue";

import ATranslation from "../ATranslation/ATranslation";

import {
  cloneDeep,
  forEach,
  uniqueId,
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

export default {
  name: "ADropdown",
  components: {
    ATranslation,
  },
  props: {
    id: {
      type: String,
      required: false,
      default: () => uniqueId("a_dropdown_btn_"),
    },
    tag: {
      type: String,
      required: false,
      default: "div",
    },
    buttonTag: {
      type: String,
      required: false,
      default: "button",
    },
    buttonClass: {
      type: String,
      required: false,
      default: "btn btn-default dropdown_button",
    },
    buttonAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    dropdownClass: {
      type: String,
      required: false,
      default: undefined,
    },
    dropdownTag: {
      type: String,
      required: false,
      default: "ul",
    },
    dropdownAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
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

    idLocal() {
      return this.buttonAttributes.id || this.id;
    },

    buttonAttributesLocal() {
      const BUTTON_ATTRIBUTES = cloneDeep(this.buttonAttributes);
      BUTTON_ATTRIBUTES.id = this.idLocal;
      BUTTON_ATTRIBUTES.ref = "dropdown_button";
      BUTTON_ATTRIBUTES["aria-haspopup"] = "true";
      BUTTON_ATTRIBUTES["aria-expanded"] = this.ariaExpanded;
      BUTTON_ATTRIBUTES.class = this.buttonClass;
      BUTTON_ATTRIBUTES.onClick = this.onToggle;
      BUTTON_ATTRIBUTES.onKeydown = this.onKeydown;

      if (this.buttonTag === "button") {
        BUTTON_ATTRIBUTES.type = BUTTON_ATTRIBUTES.type || "button";
      }
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

    dropdownAttributesLocal() {
      const DROPDOWN_ATTRIBUTES = cloneDeep(this.dropdownAttributes);
      DROPDOWN_ATTRIBUTES.ref = "dropdown";
      DROPDOWN_ATTRIBUTES["aria-labelledby"] = this.idLocal;
      DROPDOWN_ATTRIBUTES.class = ["a_dropdown__menu", this.dropdownClass, {
        a_dropdown__menu_show: this.statusExpanded,
      }];
      return DROPDOWN_ATTRIBUTES;
    },
  },
  beforeUnmount() {
    this.destroyEventClickOutside();
    this.destroyEventPressArrows();
  },
  methods: {
    onKeydown($event) {
      if ($event.key !== "Enter" ||
        $event.key !== "Space" ||
        $event.key !== "Up" ||
        $event.key !== "Down") {
        this.onToggle();
      }
    },

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
      const ELEMENTS = this.$refs.dropdown.querySelectorAll(ELEMENTS_FOR_ARROWS);
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
      const ELEMENTS = this.$refs.dropdown.querySelectorAll(ELEMENTS_FOR_ARROWS);
      if (ELEMENTS.length === 0) {
        return;
      }
      ELEMENTS[0].focus();
    },
  },
  render() {
    return h(
      this.tag,
      {
        class: "a_dropdown",
      },
      [
        h(
          this.buttonTag,
          this.buttonAttributesLocal, 
          [
            this.$slots.button && this.$slots.button(),
          ]
        ),
        h(
          this.dropdownTag,
          this.dropdownAttributesLocal,
          [
            this.$slots.dropdown && this.$slots.dropdown(),
          ]
        ),
      ],
    );
  },
};
