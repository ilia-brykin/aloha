import {
  cloneDeep,
  uniqueId,
} from "lodash-es";

export default {
  name: "ACollapse",
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      required: false,
      default: uniqueId("collapse_"),
    },
    idControl: {
      type: String,
      required: false,
      default: uniqueId("collapse_control_"),
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    label: {
      type: String,
      required: false,
    },
    tag: {
      type: String,
      default: "button",
    },
    tagControl: {
      type: String,
      default: "div",
    },
    attributesControl: {
      type: Object,
      required: false,
    },
    isOpen: {
      type: Boolean,
      required: false,
    },
    stop: {
      type: Boolean,
      required: false,
    },
    prevent: {
      type: Boolean,
      required: false,
    },
  },
  emits: ["toggle"],
  data() {
    return {
      isOpenLocal: this.isOpen || false,
    };
  },
  computed: {
    ariaExpanded() {
      return `${ this.isOpenLocal }`;
    },

    attributesLocal() {
      const ATTRIBUTES = cloneDeep(this.$attrs);
      if (this.tag === "button") {
        ATTRIBUTES.type = "button";
        if (this.disabled) {
          ATTRIBUTES.disabled = true;
        }
      } else {
        ATTRIBUTES.role = "button";
        if (this.disabled) {
          ATTRIBUTES["aria-disabled"] = true;
        }
      }
      return ATTRIBUTES;
    },
  },
  watch: {
    isOpen() {
      this.isOpenLocal = this.isOpen;
    },
  },
  methods: {
    toggle($event) {
      if (this.disabled) {
        return;
      }
      this.isOpenLocal = !this.isOpenLocal;
      this.$emit("toggle", {
        isOpen: this.isOpenLocal,
        id: this.id,
      });
      if (this.stop) {
        $event.stopPropagation();
      }
      if (this.prevent) {
        $event.preventDefault();
      }
    },
  },
};
