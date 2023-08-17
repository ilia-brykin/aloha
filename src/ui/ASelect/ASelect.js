import {
  h,
  Teleport,
  withDirectives,
} from "vue";

import AButton from "../../AButton/AButton";
import ACheckboxRadioGroup from "../ACheckboxRadioGroups/ACheckboxRadioGroups";
import AErrorsText from "../AErrorsText/AErrorsText";
import AIcon from "../../AIcon/AIcon";
import AInput from "../AInput/AInput";
import ALabel from "../ALabel/ALabel";
import ASelectElement from "./ASelectElement/ASelectElement";
import ASelectLabelElement from "./ASelectLabelElement";
import ASelectValueCloseable from "./ASelectValueCloseable";
import ATranslation from "../../ATranslation/ATranslation";

import ASafeHtml from "../../directives/ASafeHtml";

import AttributesAPI from "./compositionAPI/AttributesAPI";
import DividerAPI from "./compositionAPI/DividerAPI";
import ModelAPI from "./compositionAPI/ModelAPI";
import ModelChangeAPI from "./compositionAPI/ModelChangeAPI";
import PopperContainerAPI from "../../ATooltip/compositionAPI/PopperContainerAPI";
import SelectedTitleAPI from "./compositionAPI/SelectedTitleAPI";
import ToggleAPI from "./compositionAPI/ToggleAPI";
import UiAPI from "../compositionApi/UiAPI";
import UIDataGroupAPI from "../compositionApi/UIDataGroupAPI";
import UiDataSortAPI from "../compositionApi/UiDataSortAPI";
import UiDataWatchEmitAPI from "../compositionApi/UiDataWatchEmitAPI";
import UiDataWithKeyIdAndLabelAPI from "../compositionApi/UiDataWithKeyIdAndLabelAPI";
import UiSearchAPI from "../compositionApi/UiSearchAPI";
import UiStyleHideAPI from "../compositionApi/UiStyleHideAPI";


import AKeyId from "../const/AKeyId";
import placements from "../../const/placements";
import {
  selectPluginOptions,
} from "../../plugins/ASelectPlugin";
import {
  uniqueId,
} from "lodash-es";

export default {
  name: "ASelect",
  props: {
    buttonClass: {
      type: String,
      required: false,
      default: () => selectPluginOptions.value.propsDefault.buttonClass,
    },
    change: {
      type: Function,
      required: false,
      default: () => {},
    },
    classColumn: {
      type: String,
      required: false,
      default: undefined,
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
    dependencies: {
      type: [Array, Object],
      required: false,
      default: undefined,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    errors: {
      type: [String, Array],
      required: false,
      default: undefined,
    },
    errorsAll: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    helpText: {
      type: String,
      required: false,
    },
    htmlId: {
      type: String,
      required: false,
      default: undefined,
    },
    id: {
      type: [String, Number],
      required: false,
      default: () => uniqueId("a_ui_"),
    },
    idPrefix: {
      type: String,
      required: false,
      default: undefined,
    },
    inBody: {
      type: Boolean,
      required: false,
      default: () => selectPluginOptions.value.propsDefault.inBody,
    },
    inputAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    inputClass: {
      required: false,
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
    isHide: {
      type: Boolean,
      required: false,
    },
    isLabelFloat: {
      type: Boolean,
      required: false,
      default: true,
    },
    isRender: {
      type: Boolean,
      required: false,
      default: true,
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
    keyDisabled: {
      type: String,
      required: false,
      default: () => selectPluginOptions.value.propsDefault.keyDisabled,
    },
    keyGroup: {
      type: [String, Number, Array],
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
    label: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    labelClass: {
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
    modelDependencies: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    modelUndefined: {
      required: false,
      default: null,
    },
    modelValue: {
      type: [String, Number, Boolean, Array],
      required: false,
      default: () => selectPluginOptions.value.propsDefault.modelValue,
    },
    options: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    placement: {
      type: String,
      required: false,
      default: () => selectPluginOptions.value.propsDefault.placement,
      validator: placement => placements.indexOf(placement) !== -1,
    },
    popperContainerId: {
      type: String,
      required: false,
      default: () => selectPluginOptions.value.propsDefault.popperContainerId,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
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
    searchTimeout: {
      type: Number,
      required: false,
      default: () => selectPluginOptions.value.propsDefault.searchTimeout,
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
    "blur",
    "focus",
    "onSearchOutside",
    "open",
    "update:modelValue",
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

    const {
      isModelLengthLimitExceeded,
      isModelValue,
      isMultiselect,
      modelValueLength,
    } = ModelAPI(props);

    const {
      ariaLabelledby,
      attributesDisabled,
      containerId,
      idForList,
      tabindex,
    } = AttributesAPI(props, {
      htmlIdLocal,
    });

    const {
      dataSort,
    } = UiDataSortAPI(props, {
      data: dataLocal,
    });

    const {
      dataGrouped,
      groupsForLever,
      hasKeyGroup,
      keyGroupArray,
    } = UIDataGroupAPI(props, {
      data: dataSort,
    });

    const {
      elementsVisibleWithSearch,
      hasNotElementsWithSearch,
      idForButtonSearchOutside,
      modelSearch,
      modelSearchLowerCase,
      modelSearchOutside,
      onSearchOutside,
      searchOutsideRef,
      updateModelSearch,
      updateModelSearchOutside,
    } = UiSearchAPI(props, context, {
      data: dataSort,
      htmlIdLocal:
      hasKeyGroup,
      keyGroupArray,
    });

    const {
      buttonRef,
      handleKeydown,
      isOpen,
      menuParentRef,
      menuRef,
      togglePopover,
    } = ToggleAPI(props, context);
    
    const {
      onChangeModelValue,
      onDeselectAll,
      onKeydownDeselectAll,
      onKeydownSelectAll,
      onSelectAll,
    } = ModelChangeAPI(props, {
      isMultiselect,
      changeModel,
      togglePopover,
      dataLocal,
      dataKeyByKeyIdLocal,
    });

    const {
      hasSelectedTitle,
      selectedTitle,
    } = SelectedTitleAPI(props, {
      isModelValue,
      isMultiselect,
      isModelLengthLimitExceeded,
      modelValueLength,
      dataKeyByKeyIdLocal,
    });

    const {
      isDividerSelectDeselectVisible,
    } = DividerAPI(props, {
      isMultiselect,
    });

    addPopperContainerInBody();

    return {
      ariaDescribedbyLocal,
      ariaLabelledby,
      attributesDisabled,
      buttonRef,
      clearModel,
      componentStyleHide,
      containerId,
      dataGrouped,
      dataKeyByKeyIdLocal,
      dataLocal,
      dataSort,
      elementsVisibleWithSearch,
      errorsId,
      groupsForLever,
      handleKeydown,
      hasKeyGroup,
      hasNotElementsWithSearch,
      hasSelectedTitle,
      helpTextId,
      htmlIdLocal,
      idForButtonSearchOutside,
      idForList,
      isDividerSelectDeselectVisible,
      isErrors,
      isModelLengthLimitExceeded,
      isModelValue,
      isMultiselect,
      isOpen,
      menuParentRef,
      menuRef,
      modelSearch,
      modelSearchLowerCase,
      modelSearchOutside,
      modelValueLength,
      onBlur,
      onChangeModelValue,
      onDeselectAll,
      onFocus,
      onKeydownDeselectAll,
      onKeydownSelectAll,
      onSearchOutside,
      onSelectAll,
      popperContainerIdSelector,
      searchOutsideRef,
      selectedTitle,
      tabindex,
      togglePopover,
      updateModelSearch,
      updateModelSearchOutside,
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
            class: "a_select",
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
                            label: "_A_SELECT_SEARCH_",
                            inputClass: "a_select__element_clickable",
                            modelValue: this.modelSearchOutside,
                            modelUndefined: "",
                            "onUpdate:modelValue": this.updateModelSearchOutside,
                          }),
                          h(AButton, {
                            disabled: this.disabled,
                            class: "a_btn a_btn_primary a_select__element_clickable",
                            type: "submit",
                            iconLeft: "Search",
                          }),
                        ]),
                      ]),
                    ]),
                    this.search && h("div", {
                      class: "a_select__search",
                    }, [
                      h(AInput, {
                        label: "_A_SELECT_SEARCH_",
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
                      h("div", {}, this.hasKeyGroup ?
                        [
                          h(ACheckboxRadioGroup, {
                            id: `${ this.htmlIdLocal }_lev_0`,
                            dataGrouped: this.dataGrouped,
                            disabled: this.disabled,
                            elementsVisibleWithSearch: this.elementsVisibleWithSearch,
                            groupsForLever: this.groupsForLever,
                            isErrors: this.isErrors,
                            keyDisabled: this.keyDisabled,
                            levelIndex: 0,
                            modelSearch: this.modelSearchLowerCase,
                            modelValue: this.modelValue,
                            slotName: this.slotName,
                            type: this.type,
                            onChangeModelValue: this.onChangeModelValue,
                          }, this.$slots),
                        ] :
                        [
                          h("div", {}, [
                            ...this.dataSort.map((item, itemIndex) => {
                              return h(ASelectElement, {
                                key: item[AKeyId],
                                id: this.htmlIdLocal,
                                dataItem: item,
                                disabled: this.disabled,
                                elementsVisibleWithSearch: this.elementsVisibleWithSearch,
                                itemIndex,
                                keyDisabled: this.keyDisabled,
                                modelSearch: this.modelSearchLowerCase,
                                modelValue: this.modelValue,
                                slotName: this.slotName,
                                type: this.type,
                                onChangeModelValue: this.onChangeModelValue,
                              }, this.$slots);
                            })
                          ]),
                        ]),
                      this.hasNotElementsWithSearch && h(ATranslation, {
                        class: "a_form__not_elements",
                        text: "_A_SELECT_HAS_NOT_ELEMENTS_WITH_SEARCH_",
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
