import {
  h,
  Teleport,
  withDirectives,
} from "vue";

import ContainerAPI from "./compositionAPI/ContainerAPI";
import ToggleAPI from "./compositionAPI/ToggleAPI";

import AOnHooks from "../directives/AOnHooks";
import placements from "../const/placements";

export default {
  name: "APopup",
  props: {
    containerParentId: {
      type: String,
      required: false,
      default: "a_popup_container",
    },
    containerAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    containerClass: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    containerTag: {
      type: String,
      required: false,
      default: "div",
    },
    elementsForArrows: {
      type: String,
      required: false,
      default: "button:not([disabled]), input:not([disabled]), a",
    },
    id: {
      type: String,
      required: true,
    },
    inBody: {
      type: Boolean,
      required: false,
    },
    persist: {
      type: Boolean,
      required: false,
      default: true,
    },
    placement: {
      type: [String, Array],
      required: false,
      default: "auto",
      validator: placement => placements.indexOf(placement) !== -1,
    },
    useDirective: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    const {
      addPopperContainerInBody,
      containerParentIdSelector,
    } = ContainerAPI(props);

    const {
      isOpenComputed,
    } = ToggleAPI();

    addPopperContainerInBody();

    return {
      containerParentIdSelector,
      isOpenComputed,
    };
  },
  render() {
    if (!this.isOpenComputed) {
      return null;
    }

    h(Teleport, {
      to: this.containerParentIdSelector,
      disabled: !this.inBody,
    }, [
      withDirectives(h(
        this.containerTag,
        {
          class: this.containerClass,
          ...this.containerAttributes,
        },
        [
          this.$slots.default && this.$slots.default(),
        ],
      ), [
        [AOnHooks, {
          mounted: this.startPopup,
        }],
      ]),
    ]);
  },
};
