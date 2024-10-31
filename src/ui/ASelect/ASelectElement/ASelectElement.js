import {
  h,
  withDirectives,
} from "vue";

import AIcon from "../../../AIcon/AIcon";

import ASafeHtml from "../../../directives/ASafeHtml";

import CheckedAPI from "./compositionAPI/CheckedAPI";
import EventsAPI from "./compositionAPI/EventsAPI";
import UiCheckboxRadioItemAPI from "../../compositionApi/UiCheckboxRadioItemAPI";
import UiDisabledElementAPI from "../../compositionApi/UiDisabledElementAPI";
import UiVisibleElementWithSearchAPI from "../../compositionApi/UiVisibleElementWithSearchAPI";

export default {
  name: "ASelectElement",
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
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
    isHiddenWithSearch: {
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
    modelSearch: {
      type: String,
      required: false,
      default: undefined,
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
    slotName: {
      type: String,
      required: false,
      default: undefined,
    },
    type: {
      type: String,
      required: true,
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
      dataHideWithSearch,
      styleWithSearch,
    } = UiVisibleElementWithSearchAPI(props, {
      labelLocal,
      valueLocal,
    });

    return {
      currentLabelFiltered,
      dataHideWithSearch,
      disabledElement,
      idLocal,
      isChecked,
      labelLocal,
      onClick,
      onKeydown,
      styleWithSearch,
    };
  },
  render() {
    return h("div", {
      ariaSelected: this.isChecked,
      class: ["a_select__menu__link a_select__element_clickable", {
        a_select__menu__link_selected: this.isChecked,
        a_select__menu__link_disabled: this.disabledElement,
      }],
      "data-hide": this.dataHideWithSearch,
      disabled: this.disabledElement,
      role: "option",
      style: this.styleWithSearch,
      tabindex: "-1",
      onClick: this.onClick,
      onKeydown: this.onKeydown,
    }, [
      h("span", {
        class: "a_select__menu__link__icon_box",
      }, [
        this.isChecked && h(AIcon, {
          icon: "CheckLg",
        }),
      ]),
      this.slotName && this.$slots[this.slotName] ?
        this.$slots[this.slotName]({
          id: this.id,
          item: this.dataItem,
          itemIndex: this.itemIndex,
          label: this.labelLocal,
          labelFiltered: this.currentLabelFiltered,
          inDropdown: true,
        }) :
        withDirectives(h("span"), [
          [ASafeHtml, this.currentLabelFiltered],
        ]),
    ]);
  },
};
