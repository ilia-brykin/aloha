import TooltipContent from "../PuxTooltip/TooltipContent/TooltipContent.vue";

import {
  createPopper,
} from "popperjs";
import {
  get,
} from "lodash-es";

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
  name: "PuxPopover",
  components: {
    TooltipContent,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    popoverElementId: {
      type: String,
      required: true,
    },
    isOpen: {
      type: Boolean,
      required: false,
    },
    isOpenRender: {
      type: Boolean,
      required: false,
      default: true,
      info: "Wenn isOpenLocal === false && isOpen === false, wird die Komponente nicht gerendert",
    },
    placement: {
      type: String,
      required: false,
      default: "top",
      validator: placement => AVAILABLE_POSITIONS.indexOf(placement) !== -1,
    },
    inBody: {
      type: Boolean,
      required: false,
      default: true,
    },
    classForTooltipInner: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    parentClass: {
      type: String,
      required: false,
      default: "",
    },
    stylesForTooltipInner: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    offset: {
      type: Array,
      required: false,
      default: () => [0, -5],
    },
    autoHide: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: [
    "close",
    "hide",
    "show",
  ],
  data() {
    return {
      popper: undefined,
    };
  },
  computed: {
    idForTeleport() {
      return this.inBody ? undefined : "";
    },

    isOpenLocal() {
      if (this.isOpenRender) {
        return this.isOpen;
      }
      return true;
    },

    styleTooltipContent() {
      if (!this.isOpen) {
        return "display: none;";
      }
      return "";
    },
  },
  watch: {
    isOpen: {
      immediate: true,
      handler() {
        if (this.isOpen) {
          this.openPopover();
        } else {
          this.destroyPopover();
          this.closePopover();
        }
      },
    },
  },
  beforeUnmount() {
    this.destroyPopover();
    this.destroyEventClickOutside();
  },
  methods: {
    openPopover() {
      setTimeout(() => {
        if (!this.popper) {
          const TARGET_ELEMENT = document.getElementById(this.popoverElementId);
          const TOOLTIP_ELEMENT = document.getElementById(this.id);
          if (TARGET_ELEMENT && TOOLTIP_ELEMENT) {
            this.popper = createPopper(
              TARGET_ELEMENT,
              TOOLTIP_ELEMENT,
              {
                placement: this.placement,
                removeOnDestroy: true,
                modifiers: [
                  {
                    name: "offset",
                    options: {
                      offset: this.offset,
                    },
                  },
                ],
              },
            );
          }
          this.setEventClickOutside();
        }
        this.$emit("show");
      });
    },

    destroyPopover() {
      if (this.popper) {
        this.popper.destroy();
        this.popper = undefined;
      }
    },

    closePopover() {
      this.$emit("close");
      this.$emit("hide");
      this.destroyEventClickOutside();
    },

    setEventClickOutside() {
      if (this.autoHide) {
        document.addEventListener("click", this.clickOutsideEvent);
      }
    },

    destroyEventClickOutside() {
      document.removeEventListener("click", this.clickOutsideEvent);
    },

    clickOutsideEvent($event) {
      const TOOLTIP_PARENT = get(this.$refs, "tooltipContent.$refs.tooltip");
      if (!(this.$el === $event.target ||
        (TOOLTIP_PARENT && TOOLTIP_PARENT.contains($event.target)))) {
        this.closePopover();
      }
    },
  },
};
