import {
  computed,
  h,
  Teleport,
  toRef,
} from "vue";

import AFormElementBtnClear from "../../AFormElement/AFormElementBtnClear/AFormElementBtnClear";
import ALabel from "../ALabel/ALabel";
import AIcon from "../../AIcon/AIcon";
import AInput from "../AInput/AInput";
import ASelectElement from "./ASelectElement";
import ASelectLabelElement from "./ASelectLabelElement";
import ATranslation from "../../ATranslation/ATranslation";

import UiMixinProps from "../mixins/UiMixinProps";

import ASelectDataAPI from "./compositionAPI/ASelectDataAPI";
import ASelectModelChangeAPI from "./compositionAPI/ASelectModelChangeAPI";
import ASelectSearchAPI from "./compositionAPI/ASelectSearchAPI";
import ASelectToggleAPI from "./compositionAPI/ASelectToggleAPI";
import UiAPI from "../compositionApi/UiAPI";
import UiDataWithKeyIdAndLabelAPI from "../compositionApi/UiDataWithKeyIdAndLabelAPI";
import UiLabelFloatAPI from "../compositionApi/UiLabelFloatAPI";

import AKeyId from "../const/AKeyId";
import {
  isNil,
  isUndefined,
} from "lodash-es";

export default {
  name: "ASelect",
  components: {
    AFormElementBtnClear,
    ALabel,
    ATranslation,
  },
  mixins: [
    UiMixinProps,
  ],
  props: {
    modelValue: {
      type: [String, Number, Array],
      required: false,
    },
    type: {
      type: String,
      required: false,
      default: "select",
      validator: value => ["select", "multiselect"].indexOf(value) !== -1,
    },
    data: {
      type: Array,
      required: false,
      default: () => [],
    },
    keyId: {
      type: String,
      required: false,
      default: "value",
    },
    keyLabel: {
      type: String,
      required: false,
      default: "label",
    },
    keyLabelCallback: {
      type: Function,
      required: false,
      default: undefined,
    },
    isDataSimpleArray: {
      type: Boolean,
      required: false,
    },
    countMultiselect: {
      type: Number,
      required: false,
      default: 4,
    },
    buttonClass: {
      type: String,
      required: false,
      default: undefined,
    },
    search: {
      type: Boolean,
      required: false,
    },
    searchOutside: {
      type: Boolean,
      required: false,
    },
    textSearch: {
      type: String,
      required: false,
      default: "Suche",
    },
    isDeselect: {
      type: Boolean,
      required: false,
      default: true,
    },
    placement: {
      type: String,
      required: false,
      default: "bottom-end",
      // bottom-start, top-start, top-end, left, right
    },
    isMenuWidthAsButton: {
      type: Boolean,
      required: false,
      default: true,
    },
    isCloseByClick: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    isSelectAll: {
      type: Boolean,
      required: false,
    },
    isDeselectAll: {
      type: Boolean,
      required: false,
    },
    textSelectAll: {
      type: String,
      required: false,
      default: "Alle auswählen",
    },
    textDeselectAll: {
      type: String,
      required: false,
      default: "Alle abwählen",
    },
    sortOrder: {
      type: String,
      required: false,
      validator: value => ["asc", "desc"].indexOf(value) !== -1,
    },
  },
  emits: [
    "onSearchOutside",
    "open",
  ],
  setup(props, context) {
    const {
      ariaRequired,
      changeModel,
      clearModel,
      disabledLocal,
      idLocal,
      isError,
      labelLocal,
      onBlur,
      onFocus,
      requiredLocal,
    } = UiAPI(props, context);

    const {
      dataKeyByKeyIdLocal,
      dataLocal,
    } = UiDataWithKeyIdAndLabelAPI(props);

    const {
      isLabelFloatLocal,
    } = UiLabelFloatAPI(props);


    const onInput = $event => {
      if (disabledLocal.value) {
        return;
      }

      changeModel({
        model: $event,
      });
    };

    const type = toRef(props, "type");
    const isMultiselect = computed(() => {
      return type.value === "multiselect";
    });
    const options = toRef(props, "options");
    const modelValue = toRef(props, "modelValue");
    const isModelValue = computed(() => {
      if (isMultiselect.value) {
        return !!(modelValue.value && modelValue.value.length);
      }
      return !isNil(modelValue.value);
    });
    const modelValueLength = computed(() => {
      return modelValue.value ?
        modelValue.value.length :
        0;
    });
    const countMultiselect = toRef(props, "countMultiselect");
    const countMultiselectLocal = computed(() => {
      return "countMultiselect" in options.value ?
        options.value.countMultiselect :
        countMultiselect.value;
    });
    const isModelLengthLimitExceeded = computed(() => {
      return modelValueLength.value > countMultiselectLocal.value;
    });

    const isCloseByClick = toRef(props, "isCloseByClick");
    const isCloseByClickLocal = computed(() => {
      if (!isUndefined(isCloseByClick.value)) {
        return isCloseByClick.value;
      }
      return !isMultiselect.value;
    });


    const containerId = computed(() => {
      return `${ idLocal.value }_container`;
    });

    const idForList = computed(() => {
      return `${ idLocal.value }_list`;
    });

    const buttonClass = toRef(props, "buttonClass");
    const buttonClassLocal = computed(() => {
      return "buttonClass" in options.value ?
        options.value.buttonClass :
        buttonClass.value;
    });

    const ariaLabelledby = computed(() => {
      return `${ idLocal.value }_label`;
    });

    const tabindex = computed(() => {
      return disabledLocal.value ? undefined : 0;
    });

    const menuRightLocal = true;

    const {
      dataFiltered,
    } = ASelectDataAPI(props, {
      dataLocal,
    });

    const {
      buttonRef,
      handleKeydown,
      isOpen,
      menuParentRef,
      menuRef,
      togglePopover,
    } = ASelectToggleAPI(props, context, {
      disabledLocal,
    });
    
    const {
      onChangeModelValue,
      onDeselectAll,
      onKeydownDeselectAll,
      onKeydownSelectAll,
      onSelectAll,
    } = ASelectModelChangeAPI(props, {
      isMultiselect,
      changeModel,
      isCloseByClickLocal,
      togglePopover,
      dataLocal,
    });

    const {
      elementsHiddenWithSearch,
      idForButtonSearchOutside,
      isAllElementsHidden,
      modelSearch,
      modelSearchOutside,
      onSearchOutside,
      searchLocal,
      searchOutsideLocal,
      searchOutsideRef,
      textSearchLocal,
      updateModelSearch,
      updateModelSearchOutside,
    } = ASelectSearchAPI(props, context, {
      idLocal,
      dataLocal,
    });

    const isSelectAll = toRef(props, "isSelectAll");
    const isDeselectAll = toRef(props, "isDeselectAll");
    const isDividerSelectDeselectVisible = computed(() => {
      return isMultiselect.value && (isSelectAll.value || isDeselectAll.value);
    });

    return {
      ariaRequired,
      clearModel,
      disabledLocal,
      idLocal,
      isError,
      labelLocal,
      requiredLocal,

      dataKeyByKeyIdLocal,
      dataLocal,

      onInput,

      isModelValue,
      modelValueLength,
      isLabelFloatLocal,
      isModelLengthLimitExceeded,
      onFocus,
      onBlur,
      isMultiselect,
      containerId,
      buttonClassLocal,
      ariaLabelledby,
      tabindex,
      idForList,
      menuRightLocal,
      isDividerSelectDeselectVisible,

      dataFiltered,

      elementsHiddenWithSearch,
      idForButtonSearchOutside,
      isAllElementsHidden,
      modelSearch,
      modelSearchOutside,
      onSearchOutside,
      searchLocal,
      searchOutsideLocal,
      searchOutsideRef,
      textSearchLocal,
      updateModelSearch,
      updateModelSearchOutside,

      onChangeModelValue,
      onDeselectAll,
      onKeydownDeselectAll,
      onKeydownSelectAll,
      onSelectAll,

      buttonRef,
      handleKeydown,
      isOpen,
      menuParentRef,
      menuRef,
      togglePopover,
    };
  },
  render() {
    return h("div", {
      class: ["a_form_element__parent", {
        a_form_element__parent_float: this.isLabelFloatLocal,
        a_form_element__parent_not_empty: this.isModelValue || this.isOpen,
      }],
    }, [
      this.labelLocal && h(ALabel, {
        id: this.id,
        label: this.labelLocal,
        labelClass: this.labelClass,
        required: this.requiredLocal,
        isLabelFloat: this.isLabelFloatLocal,
      }),
      h("div", {
        class: "a_form_element",
      }, [
        h("div", {
          id: this.containerId,
          ref: "ui_select",
          class: "ui_select",
          role: "application",
        }, [
          h("div", {
            ref: "buttonRef",
            id: this.idLocal,
            class: ["a_form_control a_select_toggle a_select_toggle_caret", this.buttonClassLocal, {
              disabled: this.disabledLocal,
            }],
            ariaLabelledby: this.ariaLabelledby,
            role: "combobox",
            tabindex: this.tabindex,
            ariaHaspopup: "listbox",
            ariaExpanded: this.isOpen,
            ariaRequired: this.ariaRequired,
            ariaDisabled: this.disabledLocal,
            disabled: this.disabledLocal,
            onClick: this.togglePopover,
            onKeydown: this.handleKeydown,
            onFocus: this.onFocus,
            onBlur: this.onBlur,
          }, [
            this.isModelValue ?
              this.isMultiselect ?
                h("span", {
                  class: "a_select__value__label",
                }, [
                  this.isModelLengthLimitExceeded ?
                    h("span", null, `${ this.modelValueLength } ausgewählt`) :
                    this.modelValue.map((item, index) => {
                      return h("span", {
                        key: index,
                      }, [
                        h("span", null, index !== 0 ? ", " : ""),
                        h(ASelectLabelElement, {
                          data: this.dataKeyByKeyIdLocal[item],
                        }),
                      ]);
                    }),
                ]) :
                h(ASelectLabelElement, {
                  data: this.dataKeyByKeyIdLocal[this.modelValue],
                  class: "a_select__value__label",
                })
              : "",
            h(Teleport, {
              to: "body",
            }, [
              h("div", {
                ref: "menuParentRef",
                id: this.idForList,
                style: !this.isOpen ? "display: none;" : "",
                role: "application",
              }, [
                h("div", {
                  ref: "menuRef",
                  class: ["a_select_menu", {
                    a_select_menu_right: this.menuRightLocal,
                  }],
                  role: "listbox",
                  ariaLabelledby: this.idLocal,
                }, [
                  this.searchOutsideLocal && h("div", {
                    class: "a_select_search",
                  }, [
                    h("form", {
                      onSubmit: this.onSearchOutside,
                    }, [
                      h("div", {
                        class: "input-group",
                      }, [
                        h(AInput, {
                          label: this.textSearchLocal,
                          inputClass: "a_select__element_clickable",
                          modelValue: this.modelSearchOutside,
                          modelUndefined: "",
                          "onUpdate:modelValue": this.updateModelSearchOutside,
                        }),
                        h("button", {
                          disabled: this.disabledLocal,
                          class: "a_btn a_btn_primary a_select__element_clickable",
                          type: "submit",
                        }, [
                          h(AIcon, {
                            icon: "Search",
                          }),
                        ]),
                      ]),
                    ]),
                  ]),
                  this.searchLocal && h("div", {
                    class: "a_select__search",
                  }, [
                    h(AInput, {
                      label: this.textSearchLocal,
                      inputClass: "a_select__element_clickable",
                      modelValue: this.modelSearch,
                      modelUndefined: "",
                      "onUpdate:modelValue": this.updateModelSearch,
                    }),
                  ]),
                  (this.searchOutsideLocal || this.searchLocal) && h("div", {
                    class: "a_select__divider",
                    ariaHidden: true,
                  }),
                  (this.isMultiselect && this.isSelectAll) && h("div", {
                    class: "a_select__menu__link a_select__menu__link_selected a_select__element_clickable",
                    role: "option",
                    tabindex: "-1",
                    onClick: this.onSelectAll,
                    onKeydown: this.onKeydownSelectAll,
                  }, [
                    h("span", {
                      class: "a_select__menu__link__icon_box",
                    }, [
                      h(AIcon, {
                        icon: "Ok",
                      }),
                    ]),
                    h("span", null, this.textSelectAll),
                  ]),
                  (this.isMultiselect && this.isDeselectAll) && h("div", {
                    class: "a_select__menu__link a_select__menu__link_selected a_select__element_clickable",
                    role: "option",
                    tabindex: "-1",
                    onClick: this.onDeselectAll,
                    onKeydown: this.onKeydownDeselectAll,
                  }, [
                    h("span", {
                      class: "a_select__menu__link__icon_box",
                    }, [
                      h(AIcon, {
                        icon: "Close",
                      }),
                    ]),
                    h("span", null, this.textDeselectAll),
                  ]),
                  (this.isDividerSelectDeselectVisible) && h("div", {
                    class: "a_select__divider",
                    ariaHidden: true,
                  }),

                  ...this.dataFiltered.map(item => {
                    return h(ASelectElement, {
                      data: item,
                      modelValue: this.modelValue,
                      modelSearch: this.modelSearch,
                      isElementHiddenWithSearch: this.elementsHiddenWithSearch[item[AKeyId]],
                      isSelected: false,
                      isMultiselect: this.isMultiselect,
                      disabled: this.disabledLocal,
                      onChangeModelValue: this.onChangeModelValue,
                    });
                  }),
                  this.isAllElementsHidden && h("span", {
                    class: "a_select_not_items",
                  }, "[Keine Auswahl]"),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ]);
  },
};
