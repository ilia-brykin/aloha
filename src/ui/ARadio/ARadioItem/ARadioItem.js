import {
  h,
  withDirectives,
} from "vue";

import AElement from "../../../AElement/AElement";

import ASafeHtml from "../../../directives/ASafeHtml";

import ButtonGroupAPI from "../../ACheckbox/ACheckboxItem/compositionAPI/ButtonGroupAPI";
import CheckedAPI from "./compositionAPI/CheckedAPI";
import EventsAPI from "./compositionAPI/EventsAPI";
import UiCheckboxRadioItemAPI from "../../compositionApi/UiCheckboxRadioItemAPI";
import UiDisabledElementAPI from "../../compositionApi/UiDisabledElementAPI";
import UiTitleElementAPI from "../../compositionApi/UiTitleElementAPI";
import UiVisibleElementWithSearchAPI from "../../compositionApi/UiVisibleElementWithSearchAPI";

export default {
  name: "ARadioItem",
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
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
    id: {
      type: String,
      required: true,
    },
    idSuffix: {
      type: String,
      required: false,
      default: undefined,
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
    keyDisabled: {
      type: String,
      required: false,
      default: undefined,
    },
    keyTitle: {
      type: String,
      required: false,
      default: undefined,
    },
    keyTitleCallback: {
      type: Function,
      required: false,
      default: undefined,
    },
    modelSearch: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [String, Number, Boolean, Array],
      required: false,
    },
    searching: {
      type: Boolean,
      required: false,
    },
    searchingElements: {
      type: Object,
      required: true,
    },
    showElementWennGroupFound: {
      type: Boolean,
      required: false,
    },
    slotAppendName: {
      type: String,
      required: false,
      default: undefined,
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
      disabledElement,
    } = UiDisabledElementAPI(props);

    const {
      onClick,
      onKeydown,
    } = EventsAPI(props, context, {
      disabledElement,
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

    const {
      titleLocal,
    } = UiTitleElementAPI(props);

    return {
      classButton,
      currentLabelFiltered,
      disabledElement,
      idLocal,
      isChecked,
      labelLocal,
      onClick,
      onKeydown,
      styleWithSearch,
      titleLocal,
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
          disabled: this.disabledElement,
          name: this.id,
          style: this.styleWithSearch,
          type: "radio",
          value: this.valueLocal,
          onClick: this.onClick,
          onKeydown: this.onKeydown,
        }),
        h(AElement, {
          alwaysTranslate: this.alwaysTranslate,
          class: this.classButton,
          classDefault: "",
          extra: {
            label: this.labelLocal,
            labelFiltered: this.currentLabelFiltered,
          },
          for: this.idLocal,
          tag: "label",
          title: this.titleLocal,
          type: "button",
        }, () => [
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
    return [
      h("div", {
        class: ["a_custom_control a_custom_radio", {
          a_custom_control_invalid: this.isErrors,
        }],
        style: this.styleWithSearch,
      }, [
        h("input", {
          id: this.idLocal,
          checked: this.isChecked,
          class: "a_custom_control_input",
          disabled: this.disabledElement,
          name: this.id,
          type: "radio",
          value: this.valueLocal,
          onClick: this.onClick,
          onKeydown: this.onKeydown,
        }),
        h(AElement, {
          alwaysTranslate: this.alwaysTranslate,
          class: {
            a_custom_control_label: true,
            a_custom_control_label_width_auto: this.isWidthAuto,
          },
          classDefault: "",
          extra: {
            label: this.labelLocal,
            labelFiltered: this.currentLabelFiltered,
          },
          for: this.idLocal,
          tag: "label",
          title: this.titleLocal,
          type: "button",
        }, () => [
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
      ]),
      this.slotAppendName && this.$slots[this.slotAppendName] ?
        this.$slots[this.slotAppendName]({
          id: this.id,
          item: this.dataItem,
          itemIndex: this.itemIndex,
          isChecked: this.isChecked,
          label: this.labelLocal,
          labelFiltered: this.currentLabelFiltered,
        })
: "",
    ];
  },
};
