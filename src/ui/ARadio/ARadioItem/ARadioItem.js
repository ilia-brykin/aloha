import {
  h,
  withDirectives,
} from "vue";

import UiCheckboxRadioItemAPI from "../../compositionApi/UiCheckboxRadioItemAPI";

import ASafeHtml from "../../../directives/ASafeHtml";

import ButtonGroupAPI from "../../ACheckbox/ACheckboxItem/compositionAPI/ButtonGroupAPI";
import CheckedAPI from "./compositionAPI/CheckedAPI";
import EventsAPI from "./compositionAPI/EventsAPI";
import UiVisibleElementWithSearchAPI from "../../compositionApi/UiVisibleElementWithSearchAPI";

export default {
  name: "ARadioItem",
  props: {
    classButtonGroupDefault: {
      type: [String, Object, Array],
      required: false,
      default: undefined,
    },
    dataItem: {
      type: Object,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    elementsVisibleWithSearch: {
      type: Object,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    isButtonGroup: {
      type: Boolean,
      required: false,
    },
    isErrors: {
      type: Boolean,
      required: false,
    },
    isHiddenWithSearch: {
      type: Boolean,
      required: false,
    },
    isWidthAuto: {
      type: Boolean,
      required: false,
    },
    itemIndex: {
      type: Number,
      required: true,
    },
    modelSearch: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [String, Number, Boolean],
      required: false,
    },
    slotName: {
      type: String,
      required: false,
      default: undefined,
    },
    type: {
      type: String,
      required: false,
    },
  },
  emits: [
    "changeModelValue",
  ],
  setup(props, context) {
    const {
      idLocal,
      labelLocal,
      valueLocal,
    } = UiCheckboxRadioItemAPI(props);

    const {
      classButton,
    } = ButtonGroupAPI(props);

    const {
      isChecked,
    } = CheckedAPI(props, {
      valueLocal,
    });

    const {
      onClick,
      onKeydown,
    } = EventsAPI(props, context, {
      isChecked,
      valueLocal,
    });

    const {
      currentLabelFiltered,
      styleWithSearch,
    } = UiVisibleElementWithSearchAPI(props, {
      labelLocal,
      valueLocal,
    });

    return {
      classButton,
      currentLabelFiltered,
      idLocal,
      isChecked,
      labelLocal,
      onClick,
      onKeydown,
      styleWithSearch,
      valueLocal,
    };
  },
  render() {
    if (this.isButtonGroup) {
      return [
        h("input", {
          id: this.idLocal,
          checked: this.isChecked,
          class: "a_btn_check",
          disabled: this.disabled,
          name: this.id,
          style: this.styleWithSearch,
          type: "radio",
          value: this.valueLocal,
          onClick: this.onClick,
          onKeydown: this.onKeydown,
        }),
        h("label", {
          for: this.idLocal,
          class: this.classButton,
        }, [
          this.slotName && this.$slots[this.slotName] ?
            this.$slots[this.slotName]({
              id: this.id,
              item: this.dataItem,
              itemIndex: this.itemIndex,
              label: this.labelLocal,
              labelFiltered: this.currentLabelFiltered,
            }) :
            this.labelLocal && withDirectives(h("span", {}), [
              [ASafeHtml, this.currentLabelFiltered],
            ]),
        ]),
      ];
    }
    return h("div", {
      class: ["a_custom_control a_custom_radio", {
        a_custom_control_invalid: this.isErrors,
      }],
      style: this.styleWithSearch,
    }, [
      h("input", {
        id: this.idLocal,
        checked: this.isChecked,
        class: "a_custom_control_input",
        disabled: this.disabled,
        name: this.id,
        type: "radio",
        value: this.valueLocal,
        onClick: this.onClick,
        onKeydown: this.onKeydown,
      }),
      h("label", {
        for: this.idLocal,
        class: ["a_custom_control_label", {
          a_custom_control_label_width_auto: this.isWidthAuto,
        }],
      }, [
        this.slotName && this.$slots[this.slotName] ?
          this.$slots[this.slotName]({
            id: this.id,
            item: this.dataItem,
            itemIndex: this.itemIndex,
            label: this.labelLocal,
            labelFiltered: this.currentLabelFiltered,
          }) :
          this.labelLocal && withDirectives(h("span", {
            class: "a_custom_control_label__text",
          }), [
            [ASafeHtml, this.currentLabelFiltered],
          ]),
      ]),
    ]);
  },
};
