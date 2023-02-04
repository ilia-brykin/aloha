import {
  computed,
  h,
  toRef,
  withDirectives,
} from "vue";

import ACheckboxItem from "./ACheckboxItem/ACheckboxItem";
import ACheckboxRadioGroup from "../ACheckboxRadioGroups/ACheckboxRadioGroups";
import AErrorsText from "../AErrorsText/AErrorsText";
import ATranslation from "../../ATranslation/ATranslation";

import ASafeHtml from "../../directives/ASafeHtml";

import UiMixinProps from "../mixins/UiMixinProps";

import UiAPI from "../compositionApi/UiAPI";
import UIDataGroupAPI from "../compositionApi/UIDataGroupAPI";
import UiDataSortAPI from "../compositionApi/UiDataSortAPI";
import UiDataWatchEmitAPI from "../compositionApi/UiDataWatchEmitAPI";
import UiDataWithKeyIdAndLabelAPI from "../compositionApi/UiDataWithKeyIdAndLabelAPI";
import UiStyleHideAPI from "../compositionApi/UiStyleHideAPI";

import {
  uniqueId,
} from "lodash-es";

export default {
  name: "ACheckbox",
  mixins: [
    UiMixinProps,
  ],
  props: {
    classButtonGroupDefault: {
      type: [String, Object, Array],
      required: false,
      default: "a_btn a_btn_outline_primary",
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
    hasBorder: {
      type: Boolean,
      required: false,
      default: true,
    },
    id: {
      type: [String, Number],
      required: false,
      default: () => uniqueId("a_checkbox_"),
    },
    isButtonGroup: {
      type: Boolean,
      required: false,
    },
    isDataSimpleArray: {
      type: Boolean,
      required: false,
    },
    isWidthAuto: {
      type: Boolean,
      required: false,
    },
    keyGroup: {
      type: [String, Array],
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
    modelValue: {
      type: Array,
      required: false,
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
  },
  emits: [
    "updateData",
  ],
  setup(props, context) {
    const required = toRef(props, "required");

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
      dataLocal,
      dataKeyByKeyIdLocal,
    } = UiDataWithKeyIdAndLabelAPI(props);

    UiDataWatchEmitAPI(props, context, {
      dataKeyByKeyIdLocal,
    });

    const textAfterLabel = computed(() => {
      return required.value ? "*" : "";
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
    } = UIDataGroupAPI(props, {
      data: dataSort,
    });

    const disabled = toRef(props, "disabled");
    const onChangeModelValue = ({ model, $event }) => {
      if (disabled.value) {
        return;
      }
      setTimeout(() => {
        changeModel({
          model,
          $event,
        });
      });
    };

    return {
      ariaDescribedbyLocal,
      componentStyleHide,
      dataGrouped,
      dataSort,
      errorsId,
      groupsForLever,
      hasKeyGroup,
      helpTextId,
      htmlIdLocal,
      isErrors,
      onBlur,
      onChangeModelValue,
      onFocus,
      textAfterLabel,
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
            h("div", {
              class: {
                a_btn_group: this.isButtonGroup,
              },
            }, this.hasKeyGroup ?
              [
                h(ACheckboxRadioGroup, {
                  id: `${ this.htmlIdLocal }_lev_0`,
                  dataGrouped: this.dataGrouped,
                  disabled: this.disabled,
                  groupsForLever: this.groupsForLever,
                  isErrors: this.isErrors,
                  isWidthAuto: this.isWidthAuto,
                  levelIndex: 0,
                  modelValue: this.modelValue,
                  slotName: this.slotName,
                  type: "checkbox",
                  onChangeModelValue: this.onChangeModelValue,
                }, this.$slots),
              ] :
              [...this.dataSort.map((item, itemIndex) => {
                return h(ACheckboxItem, {
                  id: this.htmlIdLocal,
                  key: itemIndex,
                  dataItem: item,
                  itemIndex,
                  modelValue: this.modelValue,
                  onChangeModelValue: this.onChangeModelValue,
                  disabled: this.disabled,
                  isWidthAuto: this.isWidthAuto,
                  isErrors: this.isErrors,
                  isButtonGroup: this.isButtonGroup,
                  classButtonGroupDefault: this.classButtonGroupDefault,
                  slotName: this.slotName,
                }, this.$slots);
              })]),
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
