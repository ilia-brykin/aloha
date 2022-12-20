import {
  h,
  Teleport,
} from "vue";

import AIcon from "../AIcon/AIcon";
import ATranslation from "../ATranslation/ATranslation";

import AKeysCode from "../const/AKeysCode";
import placements from "../const/placements";
import {
  createPopper,
} from "@popperjs/core";
import {
  cloneDeep,
  forEach,
  uniqueId,
} from "lodash-es";

const ELEMENTS_FOR_ARROWS = `button:not([disabled]), input:not([disabled]), a`;

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
      default: "a_btn a_btn_secondary dropdown_button",
    },
    buttonStyle: {
      type: [String, Object],
      required: false,
      default: undefined,
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
      default: "a_position_relative p-0 font_family_inherit",
    },
    placement: {
      type: String,
      required: false,
      default: "bottom-start",
      validator: placement => placements.indexOf(placement) !== -1,
    },
    isCaret: {
      type: Boolean,
      required: false,
      default: true,
    },
    isCloseByClickInside: {
      type: Boolean,
      required: false,
      default: true,
    },
    menuWidth: {
      type: Number,
      required: false,
      default: undefined,
    },
    isRenderDefault: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      statusExpanded: false,
      statusEventPressArrows: false,
      buttonWidth: undefined,
      popper: undefined,
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
      if (this.buttonClass) {
        BUTTON_ATTRIBUTES.class = this.buttonClass;
      }
      if (this.buttonStyle) {
        BUTTON_ATTRIBUTES.style = this.buttonStyle;
      }
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
      if (this.menuWidth) {
        DROPDOWN_ATTRIBUTES.style = `width: ${ this.menuWidth }px`;
      }
      return DROPDOWN_ATTRIBUTES;
    },

    isMenuRendered() {
      return this.isRenderDefault || this.statusExpanded;
    },
  },
  beforeUnmount() {
    this.destroyEventCloseClick();
    this.destroyEventPressArrows();
    this.destroyPopover();
  },
  methods: {
    onKeydown($event) {
      if ($event.keyCode === AKeysCode.enter ||
        $event.keyCode === AKeysCode.space ||
        $event.keyCode === AKeysCode.arrowUp ||
        $event.keyCode === AKeysCode.arrowDown) {
        this.onToggle();
        $event.stopPropagation();
        $event.preventDefault();
      }
    },

    onToggle() {
      if (this.disabled) {
        return;
      }
      if (this.statusExpanded) {
        this.onClose();
      } else {
        this.onOpen();
      }
    },

    onOpen() {
      this.setButtonWidth();
      this.initEventPressArrows();
      setTimeout(() => {
        this.openPopoverWithPopperjs();
        this.setEventCloseClick();
        setTimeout(() => {
          this.setFocusToFirstElement();
        });
      });
      this.statusExpanded = true;
    },

    setButtonWidth() {
      if (this.isListWidthSameWithButton) {
        this.buttonWidth = this.$refs.dropdown_button.clientWidth;
      }
    },

    setEventCloseClick() {
      document.addEventListener("click", this.onClickEvent);
    },

    destroyEventCloseClick() {
      document.removeEventListener("click", this.onClickEvent);
    },

    onClickEvent($event) {
      if (this.$refs.dropdown.contains($event.target)) {
        if (this.isCloseByClickInside) {
          this.onClose();
          this.setFocusToButton();
        }
      } else {
        this.onClose();
      }
    },

    onClose() {
      this.destroyEventCloseClick();
      this.destroyEventPressArrows();
      this.destroyPopover();
      this.statusExpanded = false;
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

    setFocusToButton() {
      this.$refs.dropdown_button.focus();
    },

    pressButton($event) {
      const EVENT = $event || window.$event;
      if (EVENT.keyCode === AKeysCode.arrowDown ||
        EVENT.keyCode === AKeysCode.arrowUp) { // arrow down or up
        const DOWN = EVENT.keyCode === AKeysCode.arrowDown;
        this.pressArrows({ down: DOWN });
        $event.preventDefault();
        $event.stopPropagation();
      } else if (EVENT.keyCode === AKeysCode.escape) {
        this.onClose();
        this.setFocusToButton();
        $event.preventDefault();
        $event.stopPropagation();
      } else if (EVENT.keyCode === AKeysCode.tab) {
        this.onClose();
        this.setFocusToButton();
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
      if (!this.$refs.dropdown) {
        return;
      }
      const ELEMENTS = this.$refs.dropdown.querySelectorAll(ELEMENTS_FOR_ARROWS);
      if (ELEMENTS.length === 0) {
        return;
      }
      ELEMENTS[0].focus();
    },

    openPopoverWithPopperjs() {
      if (!this.popper) {
        this.popper = createPopper(
          this.$refs.dropdown_button,
          this.$refs.dropdown,
          {
            placement: this.placement,
            removeOnDestroy: true,
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [0, 0],
                },
              },
            ],
          },
        );
      }
    },

    destroyPopover() {
      if (this.popper) {
        this.popper.destroy();
        this.popper = undefined;
      }
    },
  },
  render() {
    return h(
      this.tag,
      {
        class: "a_dropdown",
      },
      [
        h(this.buttonTag, this.buttonAttributesLocal, [
          this.$slots.button && this.$slots.button(),
          this.isCaret && h(AIcon, {
            class: "a_dropdown__caret",
            icon: "ChevronDown",
          }),
        ]),
        h(Teleport, {
          to: "body",
        }, [
          this.isMenuRendered && h("div", null, [
            h(
              this.dropdownTag,
              this.dropdownAttributesLocal,
              [
                this.$slots.dropdown && this.$slots.dropdown(),
              ],
            ),
          ]),
        ]),
      ],
    );
  },
};
