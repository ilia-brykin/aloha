import {
  computed,
  h,
  Teleport,
  toRef,
  withDirectives,
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
import ATranslation from "../../ATranslation/ATranslation";

import ASafeHtml from "../../directives/ASafeHtml";

import UiMixinProps from "../mixins/UiMixinProps";

import ASelectDataAPI from "./compositionAPI/ASelectDataAPI";
import ASelectModelChangeAPI from "./compositionAPI/ASelectModelChangeAPI";
import ASelectSearchAPI from "./compositionAPI/ASelectSearchAPI";
import ASelectSelectedTitleAPI from "./compositionAPI/ASelectSelectedTitleAPI";
import ASelectToggleAPI from "./compositionAPI/ASelectToggleAPI";
import PopperContainerAPI from "../../ATooltip/compositionAPI/PopperContainerAPI";
import UiAPI from "../compositionApi/UiAPI";
import UiDataWatchEmitAPI from "../compositionApi/UiDataWatchEmitAPI";
import UiDataWithKeyIdAndLabelAPI from "../compositionApi/UiDataWithKeyIdAndLabelAPI";
import UiStyleHideAPI from "../compositionApi/UiStyleHideAPI";

import AKeyId from "../const/AKeyId";
import {
  selectPluginOptions,
} from "../../plugins/ASelectPlugin";
import {
  isNil,
} from "lodash-es";

export default {
  name: "ASelect",
  mixins: [
    UiMixinProps,
  ],
  props: {
    buttonClass: {
      type: String,
      required: false,
      default: () => selectPluginOptions.value.propsDefault.buttonClass,
    },
    countMultiselect: {
      type: Number,
      required: false,
      default: () => selectPluginOptions.value.propsDefault.countMultiselect,
    },
    data: {
      type: Array,
      required: false,
      default: () => selectPluginOptions.value.propsDefault.data,
    },
    inBody: {
      type: Boolean,
      required: false,
      default: () => selectPluginOptions.value.propsDefault.inBody,
    },
    isCloseByClick: {
      type: Boolean,
      required: false,
      default: () => selectPluginOptions.value.propsDefault.isCloseByClick,
    },
    isDataSimpleArray: {
      type: Boolean,
      required: false,
      default: () => selectPluginOptions.value.propsDefault.isDataSimpleArray,
    },
    isDeselect: {
      type: Boolean,
      required: false,
      default: () => selectPluginOptions.value.propsDefault.isDeselect,
    },
    isDeselectAll: {
      type: Boolean,
      required: false,
      default: () => selectPluginOptions.value.propsDefault.isDeselectAll,
    },
    isSelectAll: {
      type: Boolean,
      required: false,
      default: () => selectPluginOptions.value.propsDefault.isSelectAll,
    },
    isSelectionCloseable: {
      type: Boolean,
      required: false,
      default: () => selectPluginOptions.value.propsDefault.isSelectionCloseable,
    },
    keyGroup: {
      type: [String, Number],
      required: false,
      default: () => selectPluginOptions.value.propsDefault.keyGroup,
    },
    keyGroupCallback: {
      type: Function,
      required: false,
      default: undefined,
    },
    keyId: {
      type: String,
      required: false,
      default: () => selectPluginOptions.value.propsDefault.keyId,
    },
    keyLabel: {
      type: String,
      required: false,
      default: () => selectPluginOptions.value.propsDefault.keyLabel,
    },
    keyLabelCallback: {
      type: Function,
      required: false,
      default: undefined,
    },
    loading: {
      type: Boolean,
      required: false,
      default: () => selectPluginOptions.value.propsDefault.loading,
    },
    maxCountMultiselect: {
      type: Number,
      required: false,
      default: () => selectPluginOptions.value.propsDefault.maxCountMultiselect,
      validator: value => value > 0,
    },
    menuWidthType: {
      type: String,
      required: false,
      default: () => selectPluginOptions.value.propsDefault.menuWidthType,
      validator: value => ["as_button", "by_content"].indexOf(value) !== -1,
    },
    modelValue: {
      type: [String, Number, Boolean, Array],
      required: false,
      default: () => selectPluginOptions.value.propsDefault.modelValue,
    },
    placement: {
      type: String,
      required: false,
      default: () => selectPluginOptions.value.propsDefault.placement,
      // bottom-start, top-start, top-end, left, right
    },
    popperContainerId: {
      type: String,
      required: false,
      default: () => selectPluginOptions.value.propsDefault.popperContainerId,
    },
    search: {
      type: Boolean,
      required: false,
      default: () => selectPluginOptions.value.propsDefault.search,
    },
    searchOutside: {
      type: Boolean,
      required: false,
      default: () => selectPluginOptions.value.propsDefault.searchOutside,
    },
    slotName: {
      type: String,
      required: false,
      default: () => selectPluginOptions.value.propsDefault.slotName,
    },
    sortOrder: {
      type: String,
      required: false,
      default: () => selectPluginOptions.value.propsDefault.sortOrder,
      validator: value => ["asc", "desc"].indexOf(value) !== -1,
    },
    sortOrderGroup: {
      type: String,
      required: false,
      default: () => selectPluginOptions.value.propsDefault.sortOrderGroup,
      validator: value => ["asc", "desc"].indexOf(value) !== -1,
    },
    textDeselectAll: {
      type: String,
      required: false,
      default: () => selectPluginOptions.value.propsDefault.textDeselectAll,
    },
    textEmpty: {
      type: String,
      required: false,
      default: () => selectPluginOptions.value.propsDefault.textEmpty,
    },
    textSearch: {
      type: String,
      required: false,
      default: () => selectPluginOptions.value.propsDefault.textSearch,
    },
    textSelectAll: {
      type: String,
      required: false,
      default: () => selectPluginOptions.value.propsDefault.textSelectAll,
    },
    type: {
      type: String,
      required: false,
      default: () => selectPluginOptions.value.propsDefault.type,
      validator: value => ["select", "multiselect"].indexOf(value) !== -1,
    },
  },
  emits: [
    "onSearchOutside",
    "open",
    "updateData",
  ],
  setup(props, context) {
    const {
      componentStyleHide,
    } = UiStyleHideAPI(props);

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

    const {
      addPopperContainerInBody,
      popperContainerIdSelector,
    } = PopperContainerAPI(props);

    UiDataWatchEmitAPI(props, context, {
      dataKeyByKeyIdLocal,
    });

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
      dataKeyByKeyIdLocal,
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

    const {
      hasSelectedTitle,
      selectedTitle,
    } = ASelectSelectedTitleAPI(props, {
      isModelValue,
      isMultiselect,
      isModelLengthLimitExceeded,
      modelValue,
      modelValueLength,
      dataKeyByKeyIdLocal,
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

    addPopperContainerInBody();

    return {
      popperContainerIdSelector,
      componentStyleHide,

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

      hasSelectedTitle,
      selectedTitle,

      buttonRef,
      handleKeydown,
      isOpen,
      menuParentRef,
      menuRef,
      togglePopover,
    };
  },
  render() {
    return this.isRender && h("div", {
      style: this.componentStyleHide,
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
              title: this.hasSelectedTitle ? this.selectedTitle : undefined, // TODO: title
              onClick: this.togglePopover,
              onKeydown: this.handleKeydown,
              onFocus: this.onFocus,
              onBlur: this.onBlur,
              ...this.attributesDisabled,
            }, [
              // this.hasSelectedTitle && h("span", {
              //   class: "a_position_absolute_all",
              //   ariaHidden: true,
              //   title: this.selectedTitle,
              // }),
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
                          slotName: this.slotName,
                          disabled: this.disabled,
                          onChangeModelValue: this.onChangeModelValue,
                        }, this.$slots);
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
                              slotName: this.slotName,
                            }, this.$slots),
                          ]);
                        }),
                    ]) :
                  h(ASelectLabelElement, {
                    data: this.dataKeyByKeyIdLocal[this.modelValue] || {},
                    class: "a_select__value__label",
                    slotName: this.slotName,
                  }, this.$slots)
                : "",
              h(Teleport, {
                to: this.popperContainerIdSelector,
                disabled: !this.inBody,
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
                      a_select_menu_by_content: this.menuWidthType === "by_content",
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
                            icon: "CheckLg",
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
                            slotName: this.slotName,
                            onChangeModelValue: this.onChangeModelValue,
                          }, this.$slots);
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
                            slotName: this.slotName,
                            onChangeModelValue: this.onChangeModelValue,
                          }, this.$slots);
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
                            slotName: this.slotName,
                            onChangeModelValue: this.onChangeModelValue,
                          }, this.$slots);
                        }),
                      ]),
                      this.isAllElementsHidden && h(ATranslation, {
                        tag: "span",
                        html: this.textEmpty,
                        class: "a_select_not_items",
                      }),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
        this.helpText && withDirectives(h("div", {
          id: this.helpTextId,
          class: "a_form_element__help_text",
        }), [
          [ASafeHtml, this.helpText],
        ]),
        this.isErrors && h(AErrorsText, {
          id: this.errorsId,
          errors: this.errors,
        }),
      ]),
    ]);
  },
};
