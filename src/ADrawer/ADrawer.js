import {
  h,
} from "vue";

import AModal from "../AModal/AModal";

import {
  isPlainObject,
} from "lodash-es";

/*
 * A side panel at the edge of the window. It is a modal dialog (AModal) with another layout,
 * so the focus trap, Escape, the backdrop and the return of the focus stay one implementation.
 */
// @vue/component
export default {
  name: "ADrawer",
  props: {
    ...AModal.props,
    placement: {
      type: String,
      required: false,
      default: "right",
      validator: value => ["left", "right"].includes(value),
    },
  },
  render() {
    const {
      placement,
      modalClass,
      ...modalProps
    } = this.$props;

    // AModal accepts a string or an object here, the own class of the user is kept
    const MODAL_CLASS_USER = isPlainObject(modalClass) ?
      Object.keys(modalClass).filter(key => modalClass[key]).join(" ") :
      modalClass || "";

    return h(AModal, {
      ...modalProps,
      modalClass: `a_drawer a_drawer_${ placement } ${ MODAL_CLASS_USER }`.trim(),
    }, this.$slots);
  },
};
