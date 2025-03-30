import {
  h,
} from "vue";
import {
  AElement,
} from "../../../index";

import AttributesAPI from "./compositionAPI/AttributesAPI";
import EventsAPI from "./compositionAPI/EventsAPI";

import ASelectLabelElement from "../../ASelect/ASelectLabelElement";

export default {
  name: "AMultiselectOrderedItem",
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    btnDeleteClass: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    btnDeleteIcon: {
      type: String,
      required: false,
      default: undefined,
    },
    btnDeleteTitle: {
      type: String,
      required: false,
      default: undefined,
    },
    btnDownClass: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    btnDownIcon: {
      type: String,
      required: false,
      default: undefined,
    },
    btnDownTitle: {
      type: String,
      required: false,
      default: undefined,
    },
    btnGroupAriaLabel: {
      type: String,
      required: false,
      default: undefined,
    },
    btnGroupClass: {
      type: [String, Object, Array],
      required: false,
      default: undefined,
    },
    btnUpClass: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    btnUpIcon: {
      type: String,
      required: false,
      default: undefined,
    },
    btnUpTitle: {
      type: String,
      required: false,
      default: undefined,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    id: {
      type: String,
      required: true,
    },
    listItemClass: {
      type: [String, Object, Array],
      required: false,
      default: undefined,
    },
    data: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    isLastItem: {
      type: Boolean,
      required: true,
    },
    modelValue: {
      type: null,
      required: true,
    },
    slotName: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  emits: [
    "deleteItem",
    "downItem",
    "upItem",
  ],
  setup(props, context) {
    const {
      ariaLabelAttributes,
      getIdBtnDown,
      getIdBtnUp,
      idBtnDelete,
      idBtnDown,
      idBtnUp,
      idSelectLabel,
    } = AttributesAPI(props);

    const {
      deleteItem,
      isFirstItem,
      onDownItem,
      onUpItem,
    } = EventsAPI(props, context, {
      getIdBtnDown,
      getIdBtnUp,
    });

    return {
      ariaLabelAttributes,
      deleteItem,
      idBtnDelete,
      idBtnDown,
      idBtnUp,
      idSelectLabel,
      isFirstItem,
      onDownItem,
      onUpItem,
    };
  },
  render() {
    return h("li", {
      class: this.listItemClass,
    }, [
      h(ASelectLabelElement, {
        id: this.idSelectLabel,
        alwaysTranslate: this.alwaysTranslate,
        data: this.data,
        slotName: this.slotName,
      }, this.$slots),
      h("div", {
        class: this.btnGroupClass,
        role: "group",
        "aria-describedBy": this.idSelectLabel,
        ...this.ariaLabelAttributes,
      }, [
        h(AElement, {
          id: this.idBtnUp,
          ariaDisabled: this.disabled || this.isFirstItem,
          class: [
            this.btnUpClass,
            {
              disabled: this.disabled || this.isFirstItem,
            },
          ],
          iconLeft: this.btnUpIcon,
          textScreenReader: this.btnUpTitle,
          title: this.btnUpTitle,
          type: "button",
          onClick: this.onUpItem,
        }),
        h(AElement, {
          id: this.idBtnDown,
          ariaDisabled: this.disabled || this.isLastItem,
          class: [
            this.btnDownClass,
            {
              disabled: this.disabled || this.isLastItem,
            },
          ],
          iconLeft: this.btnDownIcon,
          textScreenReader: this.btnDownTitle,
          title: this.btnDownTitle,
          type: "button",
          onClick: this.onDownItem,
        }),
        h(AElement, {
          id: this.idBtnDelete,
          ariaDisabled: this.disabled,
          class: [
            this.btnDeleteClass,
            {
              disabled: this.disabled,
            },
          ],
          iconLeft: this.btnDeleteIcon,
          textScreenReader: this.btnDeleteTitle,
          title: this.btnDeleteTitle,
          type: "button",
          onClick: this.deleteItem,
        }),
      ]),
    ]);
  },
};
