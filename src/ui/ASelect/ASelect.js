import {
  computed,
  h,
  Teleport,
  toRef,
} from "vue";

import AErrorsText from "../AErrorsText/AErrorsText";
import ALabel from "../ALabel/ALabel";
import AIcon from "../../AIcon/AIcon";
import AInput from "../AInput/AInput";
import ASelectGroup from "./ASelectGroup";
import ASelectElement from "./ASelectElement";
import ASelectLabelElement from "./ASelectLabelElement";
import ASelectValueCloseable from "./ASelectValueCloseable";
import ASlot from "../../ASlot/ASlot";

import UiMixinProps from "../mixins/UiMixinProps";

import ASelectDataAPI from "./compositionAPI/ASelectDataAPI";
import ASelectModelChangeAPI from "./compositionAPI/ASelectModelChangeAPI";
import ASelectSearchAPI from "./compositionAPI/ASelectSearchAPI";
import ASelectToggleAPI from "./compositionAPI/ASelectToggleAPI";
import UiAPI from "../compositionApi/UiAPI";
import UiDataWithKeyIdAndLabelAPI from "../compositionApi/UiDataWithKeyIdAndLabelAPI";
import UiDependenciesAPI from "../compositionApi/UiDependenciesAPI";

import AKeyId from "../const/AKeyId";
import {
  isNil,
} from "lodash-es";

export default {
  name: "ASelect",
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
    keyGroup: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    keyGroupCallback: {
      type: Function,
      required: false,
      default: undefined,
    },
    sortOrderGroup: {
      type: String,
      required: false,
      validator: value => ["asc", "desc"].indexOf(value) !== -1,
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
    isSelectionCloseable: {
      type: Boolean,
      required: false,
      default: true,
    },
    loading: {
      type: Boolean,
      required: false,
    },
  },
  emits: [
    "onSearchOutside",
    "open",
  ],
  setup(props, context) {
    const {
      componentStyleHideDependencies,
    } = UiDependenciesAPI(props);

    const {
      ariaDescribedbyLocal,
      changeModel,
      clearModel,
      errorsId,
      helpTextId,
      htmlIdLocal,
      isErrors,
      onBlur,
      onFocus,
    } = UiAPI(props, context);

    const {
      dataKeyByKeyIdLocal,
      dataLocal,
    } = UiDataWithKeyIdAndLabelAPI(props);

    const disabled = toRef(props, "disabled");
    const onInput = $event => {
      if (disabled.value) {
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

    const isModelLengthLimitExceeded = computed(() => {
      return modelValueLength.value > countMultiselect.value;
    });

    const containerId = computed(() => {
      return `${ htmlIdLocal.value }_container`;
    });

    const idForList = computed(() => {
      return `${ htmlIdLocal.value }_list`;
    });

    const ariaLabelledby = computed(() => {
      return `${ htmlIdLocal.value }_label`;
    });

    const tabindex = computed(() => {
      return disabled.value ? undefined : 0;
    });

    const menuRightLocal = true;

    const {
      dataFiltered,
      dataGrouped,
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
    } = ASelectToggleAPI(props, context);
    
    const {
      onChangeModelValue,
      onDeselectAll,
      onKeydownDeselectAll,
      onKeydownSelectAll,
      onSelectAll,
    } = ASelectModelChangeAPI(props, {
      isMultiselect,
      changeModel,
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
      searchOutsideRef,
      updateModelSearch,
      updateModelSearchOutside,
    } = ASelectSearchAPI(props, context, {
      htmlIdLocal,
      dataLocal,
    });

    const isSelectAll = toRef(props, "isSelectAll");
    const isDeselectAll = toRef(props, "isDeselectAll");
    const isDividerSelectDeselectVisible = computed(() => {
      return isMultiselect.value && (isSelectAll.value || isDeselectAll.value);
    });

    const attributesDisabled = computed(() => {
      const ATTRIBUTES = {};
      if (disabled.value) {
        ATTRIBUTES.disabled = true;
      }
      return ATTRIBUTES;
    });

    return {
      componentStyleHideDependencies,

      ariaDescribedbyLocal,
      clearModel,
      errorsId,
      helpTextId,
      htmlIdLocal,
      isErrors,

      dataKeyByKeyIdLocal,
      dataLocal,

      onInput,

      attributesDisabled,
      isModelValue,
      modelValueLength,
      isModelLengthLimitExceeded,
      onFocus,
      onBlur,
      isMultiselect,
      containerId,
      ariaLabelledby,
      tabindex,
      idForList,
      menuRightLocal,
      isDividerSelectDeselectVisible,

      dataFiltered,
      dataGrouped,

      elementsHiddenWithSearch,
      idForButtonSearchOutside,
      isAllElementsHidden,
      modelSearch,
      modelSearchOutside,
      onSearchOutside,
      searchOutsideRef,
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
      style: this.componentStyleHideDependencies,
    }, [
      h("div", {
        class: ["a_form_element__parent", {
          a_form_element__parent_float: this.isLabelFloat,
          a_form_element__parent_not_empty: this.isModelValue || this.isOpen,
        }],
      }, [
        this.label && h(ALabel, {
          id: this.id,
          label: this.label,
          labelClass: this.labelClass,
          required: this.required,
          isLabelFloat: this.isLabelFloat,
          type: this.type,
          clickLabel: this.togglePopover,
          loading: this.loading,
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
              id: this.htmlIdLocal,
              class: ["a_form_control a_select_toggle a_caret", this.buttonClass, {
                disabled: this.disabled,
                a_select_toggle_closeable: this.isMultiselect && this.isSelectionCloseable,
                a_form_control_invalid: this.isErrors,
              }],
              ariaLabelledby: this.ariaLabelledby,
              role: "combobox",
              tabindex: this.tabindex,
              ariaHaspopup: "listbox",
              ariaExpanded: this.isOpen,
              ariaRequired: this.required,
              ariaDisabled: this.disabled,
              ariaInvalid: this.isErrors,
              "aria-describedby": this.ariaDescribedbyLocal,
              onClick: this.togglePopover,
              onKeydown: this.handleKeydown,
              onFocus: this.onFocus,
              onBlur: this.onBlur,
              ...this.attributesDisabled,
            }, [
              this.isModelValue ?
                this.isMultiselect ?
                  this.isSelectionCloseable ?
                    h("ul", {
                      class: "a_select__ul_closeable",
                    }, [
                      this.modelValue.map((item, index) => {
                        return h(ASelectValueCloseable, {
                          key: index,
                          data: this.dataKeyByKeyIdLocal[item] || {},
                          onChangeModelValue: this.onChangeModelValue,
                        });
                      }),
                    ]) :
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
                              data: this.dataKeyByKeyIdLocal[item] || {},
                            }),
                          ]);
                        }),
                    ]) :
                  h(ASelectLabelElement, {
                    data: this.dataKeyByKeyIdLocal[this.modelValue] || {},
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
                    ariaLabelledby: this.htmlIdLocal,
                  }, [
                    this.searchOutside && h("div", {
                      class: "a_select_search",
                    }, [
                      h("form", {
                        onSubmit: this.onSearchOutside,
                      }, [
                        h("div", {
                          class: "input-group",
                        }, [
                          h(AInput, {
                            label: this.textSearch,
                            inputClass: "a_select__element_clickable",
                            modelValue: this.modelSearchOutside,
                            modelUndefined: "",
                            "onUpdate:modelValue": this.updateModelSearchOutside,
                          }),
                          h("button", {
                            disabled: this.disabled,
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
                    this.search && h("div", {
                      class: "a_select__search",
                    }, [
                      h(AInput, {
                        label: this.textSearch,
                        inputClass: "a_select__element_clickable",
                        modelValue: this.modelSearch,
                        modelUndefined: "",
                        "onUpdate:modelValue": this.updateModelSearch,
                      }),
                    ]),
                    (this.searchOutside || this.search) && h("div", {
                      class: "a_select__divider",
                      ariaHidden: true,
                    }),
                    h("div", {
                      class: "a_select_menu__child",
                    }, [
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
                      this.keyGroup && h(ASlot, null, () => [
                        ...this.dataGrouped.dataKeyByGroup._not_grouped.map(item => {
                          return h(ASelectElement, {
                            data: item,
                            modelValue: this.modelValue,
                            modelSearch: this.modelSearch,
                            isElementHiddenWithSearch: this.elementsHiddenWithSearch[item[AKeyId]],
                            isSelected: false,
                            isMultiselect: this.isMultiselect,
                            disabled: this.disabled,
                            onChangeModelValue: this.onChangeModelValue,
                          });
                        }),
                        ...this.dataGrouped.groups.map((groupItem, groupIndex) => {
                          return h(ASelectGroup, {
                            id: this.htmlIdLocal,
                            groupElements: this.dataGrouped.dataKeyByGroup[groupItem.groupKey],
                            groupLabel: groupItem.groupLabel,
                            groupIndex: groupIndex,
                            modelValue: this.modelValue,
                            modelSearch: this.modelSearch,
                            elementsHiddenWithSearch: this.elementsHiddenWithSearch,
                            isSelected: false,
                            isMultiselect: this.isMultiselect,
                            disabled: this.disabled,
                            onChangeModelValue: this.onChangeModelValue,
                          });
                        }),
                      ]),
                      !this.keyGroup && h(ASlot, null, () => [
                        ...this.dataFiltered.map(item => {
                          return h(ASelectElement, {
                            data: item,
                            modelValue: this.modelValue,
                            modelSearch: this.modelSearch,
                            isElementHiddenWithSearch: this.elementsHiddenWithSearch[item[AKeyId]],
                            isSelected: false,
                            isMultiselect: this.isMultiselect,
                            disabled: this.disabled,
                            onChangeModelValue: this.onChangeModelValue,
                          });
                        }),
                      ]),
                      this.isAllElementsHidden && h("span", {
                        class: "a_select_not_items",
                      }, "[Keine Auswahl]"),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
        this.helpText && h("div", {
          id: this.helpTextId,
          class: "a_form_element__help_text",
          innerHTML: this.helpText,
        }),
        this.isErrors && h(AErrorsText, {
          id: this.errorsId,
          errors: this.errors,
        }),
      ]),
    ]);
  },
};
