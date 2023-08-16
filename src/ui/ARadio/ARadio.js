import {
  h,
  withDirectives,
} from "vue";

import AButton from "../../AButton/AButton";
import ACheckboxRadioGroup from "../ACheckboxRadioGroups/ACheckboxRadioGroups";
import AErrorsText from "../AErrorsText/AErrorsText";
import AInput from "../AInput/AInput";
import ARadioItem from "./ARadioItem/ARadioItem";
import ATranslation from "../../ATranslation/ATranslation";

import ASafeHtml from "../../directives/ASafeHtml";

import ChangeAPI from "../ACheckbox/compositionAPI/ChangeAPI";
import TextAfterLabelAPI from "../ACheckbox/compositionAPI/TextAfterLabelAPI";
import UiAPI from "../compositionApi/UiAPI";
import UIDataGroupAPI from "../compositionApi/UIDataGroupAPI";
import UiDataSortAPI from "../compositionApi/UiDataSortAPI";
import UiDataWatchEmitAPI from "../compositionApi/UiDataWatchEmitAPI";
import UiDataWithKeyIdAndLabelAPI from "../compositionApi/UiDataWithKeyIdAndLabelAPI";
import UiSearchAPI from "../compositionApi/UiSearchAPI";
import UiStyleHideAPI from "../compositionApi/UiStyleHideAPI";

import AKeyId from "../const/AKeyId";
import {
  uniqueId,
} from "lodash-es";

export default {
  name: "ARadio",
  props: {
    change: {
      type: Function,
      required: false,
      default: () => {},
    },
    classButtonGroupDefault: {
      type: [String, Object, Array],
      required: false,
      default: "a_btn a_btn_outline_primary",
    },
    classColumn: {
      type: String,
      required: false,
      default: undefined,
    },
    classFieldset: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    data: {
      type: Array,
      required: false,
      default: () => [],
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
    hasBorder: {
      type: Boolean,
      required: false,
      default: true,
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
      default: () => uniqueId("a_radio_"),
    },
    idPrefix: {
      type: String,
      required: false,
      default: undefined,
    },
    inputAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    inputClass: {
      required: false,
    },
    isButtonGroup: {
      type: Boolean,
      required: false,
    },
    isDataSimpleArray: {
      type: Boolean,
      required: false,
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
    isWidthAuto: {
      type: Boolean,
      required: false,
    },
    keyDisabled: {
      type: String,
      required: false,
      default: undefined,
    },
    keyGroup: {
      type: [String, Number, Array],
      required: false,
      default: undefined,
    },
    keyGroupCallback: {
      type: Function,
      required: false,
      default: undefined,
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
    label: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    labelClass: {
      required: false,
      default: undefined,
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
      type: [String, Number, Boolean],
      required: false,
    },
    options: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    search: {
      type: Boolean,
      required: false,
    },
    searchOutside: {
      type: Boolean,
      required: false,
    },
    searchTimeout: {
      type: Number,
      required: false,
      default: 0,
    },
    slotName: {
      type: String,
      required: false,
      default: undefined,
    },
    sortOrder: {
      type: String,
      required: false,
      default: undefined,
      validator: value => ["asc", "desc"].indexOf(value) !== -1,
    },
    sortOrderGroup: {
      type: String,
      required: false,
      default: undefined,
      validator: value => ["asc", "desc"].indexOf(value) !== -1,
    },
    type: {
      type: String,
      required: false,
    },
  },
  emits: [
    "onSearchOutside",
    "updateData",
    "update:modelValue",
  ],
  setup(props, context) {
    const {
      componentStyleHide,
    } = UiStyleHideAPI(props);

    const {
      ariaDescribedbyLocal,
      changeModel,
      errorsId,
      helpTextId,
      htmlIdLocal,
      isErrors,
      onBlur,
      onFocus,
    } = UiAPI(props, context);

    const {
      textAfterLabel,
    } = TextAfterLabelAPI(props);

    const {
      dataLocal,
      dataKeyByKeyIdLocal,
    } = UiDataWithKeyIdAndLabelAPI(props);

    UiDataWatchEmitAPI(props, context, {
      dataKeyByKeyIdLocal,
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
      hasKeyGroup,
      htmlIdLocal,
      keyGroupArray,
    });

    const {
      onChangeModelValue,
    } = ChangeAPI(props, {
      changeModel,
    });

    return {
      ariaDescribedbyLocal,
      componentStyleHide,
      dataGrouped,
      dataSort,
      elementsVisibleWithSearch,
      errorsId,
      groupsForLever,
      hasKeyGroup,
      hasNotElementsWithSearch,
      helpTextId,
      htmlIdLocal,
      idForButtonSearchOutside,
      isErrors,
      modelSearch,
      modelSearchLowerCase,
      modelSearchOutside,
      onBlur,
      onChangeModelValue,
      onFocus,
      onSearchOutside,
      searchOutsideRef,
      textAfterLabel,
      updateModelSearch,
      updateModelSearchOutside,
    };
  },
  render() {
    return this.isRender && h("div", {
      style: this.componentStyleHide,
    }, [
      h("div", {
        class: ["a_form_element__parent"],
      }, [
        h("div", {
          class: "a_form_element",
        }, [
          h("fieldset", {
            id: this.htmlIdLocal,
            tabindex: -1,
            class: [
              "a_fieldset",
              this.classFieldset,
              {
                a_fieldset_no_border: !this.hasBorder,
                a_fieldset_invalid: this.isErrors,
              }
            ],
            "aria-describedby": this.ariaDescribedbyLocal,
          }, [
            this.label && h(ATranslation, {
              tag: "legend",
              class: ["a_legend", {
                a_legend_invalid: this.isErrors,
              }],
              html: this.label,
              textAfter: this.textAfterLabel,
            }),
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
                    class: "a_btn a_btn_primary",
                    type: "submit",
                    iconLeft: "Search",
                  }),
                ]),
              ]),
            ]),
            this.search && h(AInput, {
              label: "_A_RADIO_SEARCH_",
              modelValue: this.modelSearch,
              modelUndefined: "",
              "onUpdate:modelValue": this.updateModelSearch,
            }),
            h("div", {}, this.hasKeyGroup ?
              [
                h(ACheckboxRadioGroup, {
                  id: `${ this.htmlIdLocal }_lev_0`,
                  classButtonGroupDefault: this.classButtonGroupDefault,
                  dataGrouped: this.dataGrouped,
                  disabled: this.disabled,
                  elementsVisibleWithSearch: this.elementsVisibleWithSearch,
                  groupsForLever: this.groupsForLever,
                  isButtonGroup: this.isButtonGroup,
                  isErrors: this.isErrors,
                  isWidthAuto: this.isWidthAuto,
                  keyDisabled: this.keyDisabled,
                  levelIndex: 0,
                  modelSearch: this.modelSearchLowerCase,
                  modelValue: this.modelValue,
                  slotName: this.slotName,
                  type: "radio",
                  onChangeModelValue: this.onChangeModelValue,
                }, this.$slots),
              ] :
              [
                h("div", {
                  class: {
                    a_btn_group: this.isButtonGroup,
                  },
                }, [
                  ...this.dataSort.map((item, itemIndex) => {
                    return h(ARadioItem, {
                      key: item[AKeyId],
                      id: this.htmlIdLocal,
                      classButtonGroupDefault: this.classButtonGroupDefault,
                      dataItem: item,
                      disabled: this.disabled,
                      elementsVisibleWithSearch: this.elementsVisibleWithSearch,
                      isButtonGroup: this.isButtonGroup,
                      isErrors: this.isErrors,
                      isWidthAuto: this.isWidthAuto,
                      itemIndex,
                      keyDisabled: this.keyDisabled,
                      modelSearch: this.modelSearchLowerCase,
                      modelValue: this.modelValue,
                      slotName: this.slotName,
                      onChangeModelValue: this.onChangeModelValue,
                    }, this.$slots);
                  })
                ]),
              ]),
            this.hasNotElementsWithSearch && h(ATranslation, {
              class: "a_form__not_elements",
              text: "_A_RADIO_HAS_NOT_ELEMENTS_WITH_SEARCH_",
            }),
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
