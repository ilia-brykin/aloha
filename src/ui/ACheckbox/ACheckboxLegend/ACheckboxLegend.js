import {
  h,
} from "vue";

import AElement from "../../../AElement/AElement";
import ATranslation from "../../../ATranslation/ATranslation";

import CheckedAPI from "./compositionAPI/CheckedAPI";
import EventsAPI from "./compositionAPI/EventsAPI";
import IdAPI from "./compositionAPI/IdAPI";

export default {
  name: "ACheckboxLegend",
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    data: {
      type: Array,
      required: false,
      default: () => [],
    },
    dataKeyByKeyId: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    hasControlCheckbox: {
      type: Boolean,
      required: false,
      default: false,
    },
    id: {
      type: String,
      required: true,
    },
    isErrors: {
      type: Boolean,
      required: false,
    },
    label: {
      type: String,
      required: false,
      default: undefined,
    },
    legendClass: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    main: {
      type: Boolean,
      required: false,
    },
    modelValue: {
      type: [String, Number, Boolean, Array],
      required: false,
      default: () => [],
    },
    modelValueObj: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    textAfterLabel: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  emits: [
    "changeModelValue",
  ],
  setup(props, context) {
    const {
      idGroup,
      idLocal,
    } = IdAPI(props);

    const {
      isCheckedAll,
      isIndeterminate,
    } = CheckedAPI(props);

    const {
      onClick,
      onKeydown,
    } = EventsAPI(props, context, {
      isCheckedAll,
      isIndeterminate,
    });

    return {
      idGroup,
      idLocal,
      isCheckedAll,
      isIndeterminate,
      onClick,
      onKeydown,
    };
  },
  render() {
    if (this.hasControlCheckbox) {
      return h("legend", {
        class: [
          "a_legend",
          {
            a_legend_invalid: this.isErrors,
          },
          this.legendClass,
        ],
      }, [
        h("div", {
          class: ["a_custom_control a_custom_checkbox", {
            a_custom_control_invalid: this.isErrors,
          }],
        }, [
          h("input", {
            id: this.idLocal,
            "aria-controls": this.idGroup,
            checked: this.isCheckedAll,
            class: "a_custom_control_input",
            disabled: this.disabled,
            indeterminate: this.isIndeterminate,
            type: "checkbox",
            onClick: this.onClick,
            onKeydown: this.onKeydown,
          }),
          h(AElement, {
            alwaysTranslate: this.alwaysTranslate,
            class: "a_custom_control_label a_custom_control_label_width_auto",
            classDefault: "",
            for: this.idLocal,
            html: this.label,
            tag: "label",
            textAfter: this.textAfterLabel,
            textClass: "a_custom_control_label__text",
            type: "text",
          }),
        ]),
      ]);
    }

    return h(ATranslation, {
      id: this.idLocal,
      tag: "legend",
      class: [
        "a_legend",
        {
          a_legend_invalid: this.isErrors,
        },
        this.legendClass,
      ],
      html: this.label,
      textAfter: this.textAfterLabel,
    });
  },
};
