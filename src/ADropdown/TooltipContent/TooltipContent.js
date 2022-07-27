const KEY_CODE_ESCAPE = 27;

// @vue/component
export default {
  name: "TooltipContent",
  props: {
    idTeleport: {
      type: String,
      required: false,
      default: "tooltip_container",
    },
    classForTooltipInner: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    parentClass: {
      type: String,
      required: false,
      default: "tooltip_content tooltip vue-tooltip-theme",
    },
    stylesForTooltipInner: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
  },
  emits: [
    "closeComponent",
    "mouseEnter",
    "mouseLeave",
  ],
  data() {
    return {
      contentSymbolsLength: 0,
    };
  },
  computed: {
    stylesForTooltipInnerLocal() {
      if (this.stylesForTooltipInner) {
        return this.stylesForTooltipInner;
      }
      if (this.contentSymbolsLength > 400) {
        return "min-width: 400px !important;";
      }
      if (this.contentSymbolsLength > 250) {
        return "min-width: 300px !important;";
      }
      if (this.contentSymbolsLength > 100) {
        return "min-width: 250px !important;";
      }
      if (this.contentSymbolsLength > 50) {
        return "min-width: 200px !important;";
      }
      return "";
    },

    toForTeleport() {
      if (this.idTeleport) {
        return `#${ this.idTeleport }`;
      }
      return undefined;
    },

    disabledTeleport() {
      return !this.toForTeleport;
    },
  },
  created() {
    this.setListenerForPressEscapeButton();
  },
  mounted() {
    this.setContentSymbolsLength();
  },
  beforeUnmount() {
    this.removeListenerForPressEscapeButton();
  },
  methods: {
    setListenerForPressEscapeButton() {
      document.addEventListener("keydown", this.pressEscapeButton);
    },

    pressEscapeButton($event) {
      const EVENT = $event || window.$event;
      if (EVENT.key === "Escape" || EVENT.keyCode === KEY_CODE_ESCAPE) {
        this.$emit("closeComponent");
      }
    },

    setContentSymbolsLength() {
      if (this.$refs.tooltip) {
        const TEXT_CONTENT = this.$refs.tooltip.textContent || "";
        this.contentSymbolsLength = TEXT_CONTENT.length;
      }
    },

    removeListenerForPressEscapeButton() {
      document.removeEventListener("keydown", this.pressEscapeButton);
    },

    mouseenterLocal() {
      this.$emit("mouseEnter");
    },

    mouseleaveLocal() {
      this.$emit("mouseLeave");
    },
  },
};
