import {
  computed,
  h,
  toRef,
} from "vue";

import AIcon from "../../AIcon/AIcon";

import FiltersAPI from "../../compositionAPI/FiltersAPI";

import AKeyId from "../const/AKeyId";
import AKeyLabel from "../const/AKeyLabel";

const KEY_CODE_SPACE = 32;

export default {
  name: "ASelectElement",
  props: {
    data: {
      type: Object,
      required: true,
    },
    modelValue: {
      type: [String, Number, Array],
      required: false,
    },
    modelSearch: {
      type: String,
      required: true,
    },
    isSelected: {
      type: Boolean,
      required: true,
    },
    isMultiselect: {
      type: Boolean,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    isElementHiddenWithSearch: {
      type: Boolean,
      required: false,
    },
  },
  emits: [
    "changeModelValue",
  ],
  setup(props, { emit }) {
    const {
      filterSearchHighlight,
    } = FiltersAPI();

    const data = toRef(props, "data");
    const modelSearch = toRef(props, "modelSearch");

    const currentValue = computed(() => {
      return data.value[AKeyId];
    });

    const currentLabel = computed(() => {
      return data.value[AKeyLabel];
    });

    const currentLabelFiltered = computed(() => {
      return filterSearchHighlight(currentLabel.value, modelSearch.value);
    });

    const isMultiselect = toRef(props, "isMultiselect");
    const modelValue = toRef(props, "modelValue");
    const isSelected = toRef(props, "isSelected");
    const isSelectedLocal = computed(() => {
      if (isSelected.value) {
        return true;
      }
      if (isMultiselect.value) {
        return !!(modelValue.value && modelValue.value.indexOf(currentValue.value) !== -1);
      }
      return modelValue.value === currentValue.value;
    });

    const isElementHiddenWithSearch = toRef(props, "isElementHiddenWithSearch");
    const styleLocal = computed(() => {
      return isElementHiddenWithSearch.value ? "display: none;" : "";
    });

    const disabled = toRef(props, "disabled");
    const attributesDisabled = computed(() => {
      const ATTRIBUTES = {};
      if (disabled.value) {
        ATTRIBUTES.disabled = true;
      }

      return ATTRIBUTES;
    });

    const onClick = $event => {
      emit("changeModelValue", {
        currentValue: currentValue.value,
        $event,
        isSelected: isSelectedLocal.value,
      });
    };

    const onKeydown = $event => {
      if ($event.key === "Enter" ||
        $event.keyCode === KEY_CODE_SPACE) {
        onClick($event);
        $event.stopPropagation();
        $event.preventDefault();
      }
    };

    return {
      attributesDisabled,
      currentLabelFiltered,
      currentValue,
      isSelectedLocal,
      onClick,
      onKeydown,
      styleLocal,
    };
  },
  render() {
    return h("div", {
      class: ["a_select__menu__link a_select__element_clickable", {
        ui_select__menu__link_selected: this.isSelectedLocal,
      }],
      ariaSelected: this.isSelectedLocal,
      role: "option",
      tabindex: "-1",
      style: this.styleLocal,
      onClick: this.onClick,
      onKeydown: this.onKeydown,
      ...this.attributesDisabled
    }, [
      h("span", {
        class: "a_select__menu__link__icon_box",
      }, [
        this.isSelectedLocal && h(AIcon, {
          icon: "Ok",
        }),
      ]),
      h("span", {
        innerHTML: this.currentLabelFiltered,
      }),
    ]);
  },
};
