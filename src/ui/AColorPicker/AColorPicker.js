import {
  h,
  Teleport,
} from "vue";
import {
  AButton,
  AErrorsText,
  AFormElementBtnClear,
  AFormHelpText,
  AFormLabelDescription,
  AFormReadonly,
  AIcon,
  AInput,
  ALabel,
  ATranslation,
  UiAPI,
  UiClearButtonAPI,
  UiDisabledAPI,
  UIExcludeRenderAttributesAPI,
  UiStyleHideAPI,
} from "../../index";

import AColorPickerSaturation from "./AColorPickerSaturation/AColorPickerSaturation";
import AColorPickerSlider from "./AColorPickerSlider/AColorPickerSlider";

import ClearAPI from "./compositionAPI/ClearAPI";
import ColorStateAPI from "./compositionAPI/ColorStateAPI";
import ConfirmAPI from "./compositionAPI/ConfirmAPI";
import FormatAPI from "./compositionAPI/FormatAPI";
import IdAPI from "./compositionAPI/IdAPI";
import InputAPI from "./compositionAPI/InputAPI";
import PopoverAPI from "./compositionAPI/PopoverAPI";
import PredefineAPI from "./compositionAPI/PredefineAPI";
import ToggleClassAPI from "./compositionAPI/ToggleClassAPI";

import placements from "../../const/placements";
import {
  COLOR_FORMATS,
} from "./utils/colorUtils";
import {
  isArray,
  uniqueId,
} from "lodash-es";

const HUE_BACKGROUND = "linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)";

export default {
  name: "AColorPicker",
  inheritAttrs: false,
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    change: {
      type: Function,
      required: false,
      default: () => {},
    },
    clearButtonClass: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    colorFormats: {
      type: [String, Array],
      required: false,
      default: "hex",
      validator: value => (isArray(value) ? value : [value]).every(format => COLOR_FORMATS.indexOf(format) !== -1),
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
    errorIcon: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    errors: {
      type: [String, Array],
      required: false,
      default: undefined,
    },
    errorsClass: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    excludeRenderAttributes: {
      type: Array,
      required: false,
      default: () => [],
    },
    extra: {
      type: Object,
      required: false,
      default: undefined,
    },
    helpText: {
      type: String,
      required: false,
      default: undefined,
    },
    htmlId: {
      type: String,
      required: false,
      default: undefined,
    },
    id: {
      type: [String, Number],
      required: false,
      default: () => uniqueId("a_color_picker_"),
    },
    idPrefix: {
      type: String,
      required: false,
      default: undefined,
    },
    isClearButton: {
      type: Boolean,
      required: false,
      default: true,
    },
    isHide: {
      type: Boolean,
      required: false,
    },
    isLabelFloat: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    labelPosition: {
      type: String,
      required: false,
      default: undefined,
      validator: value => ["float", "inset", "top"].indexOf(value) !== -1,
    },
    isRender: {
      type: Boolean,
      required: false,
      default: true,
    },
    label: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    labelClass: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    labelDescription: {
      type: String,
      required: false,
      default: undefined,
    },
    labelScreenReader: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    modelDependencies: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    modelUndefined: {
      type: [String, Number, Object, Array, Boolean],
      required: false,
      default: undefined,
    },
    modelValue: {
      type: String,
      required: false,
      default: undefined,
    },
    panelDefaultColor: {
      type: String,
      required: false,
      default: "#ff0000",
    },
    placement: {
      type: String,
      required: false,
      default: "bottom-start",
      validator: value => placements.indexOf(value) !== -1,
    },
    predefine: {
      type: Array,
      required: false,
      default: () => [],
    },
    readonly: {
      type: Boolean,
      required: false,
    },
    readonlyDefault: {
      type: String,
      required: false,
      default: "",
    },
    readonlyValueParentClass: {
      type: [String, Object, Array],
      required: false,
      default: undefined,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    showAlpha: {
      type: Boolean,
      required: false,
    },
    type: {
      type: String,
      required: false,
      default: "colorPicker",
    },
  },
  emits: [
    "blur",
    "close",
    "focus",
    "open",
    "update:modelValue",
  ],
  setup(props, context) {
    const {
      disabledAttribut,
    } = UiDisabledAPI(props);

    const {
      attributesToExcludeFromRender,
    } = UIExcludeRenderAttributesAPI(props);

    const {
      componentStyleHide,
    } = UiStyleHideAPI(props);

    const {
      currentFormat,
      isFormatSwitch,
      nextFormat,
      setFormatFromModel,
      switchFormat,
    } = FormatAPI(props);

    const {
      alphaBackground,
      alphaPercent,
      cssColorLocal,
      cssColorOpaqueLocal,
      hsva,
      hueCssColor,
      modelCssColor,
      modelTextColor,
      rgbaLocal,
      setAlphaPercent,
      setColor,
      setColorFromModel,
      setHue,
      setSaturationBrightness,
      valueLocal,
    } = ColorStateAPI(props, {
      currentFormat,
    });

    const {
      ariaDescribedbyLocal,
      changeModel,
      errorsId,
      helpTextId,
      htmlIdLocal,
      isErrors,
      isModel,
      labelDescriptionId,
      onBlur,
      onFocus,
      isLabelFloatLocal,
      isLabelInset,
    } = UiAPI(props, context);

    const {
      closePopover,
      isOpen,
      isPositioned,
      onPopupKeydown,
      onToggleKeydown,
      popupId,
      popupRef,
      toggleRef,
      togglePopover,
    } = PopoverAPI(props, context, {
      htmlIdLocal,
      setColorFromModel: () => {
        setFormatFromModel();
        setColorFromModel();
      },
    });

    const {
      applyInput,
      inputErrors,
      inputText,
      onInputChange,
      onInputKeydown,
    } = InputAPI({
      setColor,
      valueLocal,
    });

    const {
      clearColor,
      confirmColor,
    } = ConfirmAPI(props, {
      applyInput,
      changeModel,
      closePopover,
      valueLocal,
    });

    const {
      predefineLocal,
      selectPredefine,
    } = PredefineAPI(props, {
      rgbaLocal,
      setColor,
    });

    const {
      isClearButtonLocal,
    } = UiClearButtonAPI(props, {
      isModel,
    });

    const {
      hasErrorIcon,
      toggleClassBtns,
    } = ToggleClassAPI(props, {
      isClearButtonLocal,
      isErrors,
    });

    const {
      labelId,
      valueId,
    } = IdAPI({
      htmlIdLocal,
    });

    const {
      clearModelFromToggle,
    } = ClearAPI(props, {
      changeModel,
      toggleRef,
    });

    return {
      isLabelFloatLocal,
      isLabelInset,
      alphaBackground,
      alphaPercent,
      applyInput,
      ariaDescribedbyLocal,
      attributesToExcludeFromRender,
      clearColor,
      clearModelFromToggle,
      componentStyleHide,
      confirmColor,
      cssColorLocal,
      cssColorOpaqueLocal,
      currentFormat,
      disabledAttribut,
      errorsId,
      hasErrorIcon,
      helpTextId,
      hsva,
      htmlIdLocal,
      hueCssColor,
      inputErrors,
      inputText,
      isClearButtonLocal,
      isErrors,
      isFormatSwitch,
      isModel,
      isOpen,
      isPositioned,
      labelDescriptionId,
      labelId,
      modelCssColor,
      modelTextColor,
      nextFormat,
      onBlur,
      onFocus,
      onInputChange,
      onInputKeydown,
      onPopupKeydown,
      onToggleKeydown,
      popupId,
      popupRef,
      predefineLocal,
      selectPredefine,
      setAlphaPercent,
      setHue,
      setSaturationBrightness,
      switchFormat,
      toggleClassBtns,
      togglePopover,
      toggleRef,
      valueId,
      valueLocal,
    };
  },
  render() {
    if (!this.isRender) {
      return null;
    }

    if (this.readonly) {
      return h(AFormReadonly, {
        ...this.$attrs,
        valueParentClass: this.readonlyValueParentClass,
        id: this.htmlIdLocal,
        alwaysTranslate: this.alwaysTranslate,
        excludeRenderAttributes: this.excludeRenderAttributes,
        extra: this.extra,
        helpText: this.helpText,
        label: this.label,
        labelClass: this.labelClass,
        labelScreenReader: this.labelScreenReader,
        modelValue: undefined,
        readonlyDefault: this.readonlyDefault,
        required: this.required,
        style: this.componentStyleHide,
        type: this.type,
      }, this.isModel ?
        () => [
          h("span", {
            class: "a_color_picker__readonly",
          }, [
            h("span", {
              class: "a_color_picker__swatch",
              style: {
                "--a_color_picker_color": this.modelCssColor,
              },
              ariaHidden: true,
            }),
            h("span", {}, this.modelValue),
          ]),
        ] :
        "");
    }

    const hasLabel = !!(this.label || this.labelScreenReader);

    return h("div", {
      ...this.$attrs,
      style: this.componentStyleHide,
      ...this.attributesToExcludeFromRender,
    }, [
      h("div", {
        class: ["a_form_element__parent a_color_picker", {
          a_form_element__parent_float: this.isLabelFloatLocal,
          a_form_element__parent_inset: this.isLabelInset,
          a_form_element__parent_float_has_error_icon: this.hasErrorIcon,
          a_form_element__parent_not_empty: this.isModel,
          a_color_picker_has_color: this.isModel,
        }],
        style: this.isModel ?
          {
            "--a_color_picker_color": this.modelCssColor,
            "--a_color_picker_text_color": this.modelTextColor,
          } :
          undefined,
      }, [
        hasLabel ?
          h(ALabel, {
            id: this.htmlIdLocal,
            alwaysTranslate: this.alwaysTranslate,
            extra: this.extra,
            isError: this.isErrors,
            isLabelFloat: this.isLabelFloatLocal,
            label: this.label,
            labelClass: this.labelClass,
            labelScreenReader: this.labelScreenReader,
            required: this.required,
            type: this.type,
          }) :
          "",
        h(AFormLabelDescription, {
          id: this.labelDescriptionId,
          alwaysTranslate: this.alwaysTranslate,
          html: this.labelDescription,
          extra: this.extra,
          isLabelFloat: this.isLabelFloatLocal,
        }),
        h("div", {
          class: "a_form_element",
        }, [
          this.hasErrorIcon ?
            h(AIcon, {
              icon: this.errorIcon,
              class: "a_input__icon_error",
            }) :
            "",
          h("button", {
            ref: "toggleRef",
            id: this.htmlIdLocal,
            type: "button",
            class: [
              "a_form_control a_color_picker__toggle",
              this.toggleClassBtns,
              {
                a_form_control_invalid: this.isErrors,
                a_color_picker__toggle_empty: !this.isModel,
                a_color_picker__toggle_open: this.isOpen,
              },
            ],
            disabled: this.disabledAttribut,
            "aria-haspopup": "dialog",
            "aria-expanded": this.isOpen ? "true" : "false",
            "aria-controls": this.isOpen ? this.popupId : undefined,
            "aria-labelledby": hasLabel ? `${ this.labelId } ${ this.valueId }` : undefined,
            "aria-describedby": this.ariaDescribedbyLocal,
            "aria-invalid": this.isErrors ? "true" : undefined,
            onClick: this.togglePopover,
            onKeydown: this.onToggleKeydown,
            onFocus: this.onFocus,
            onBlur: this.onBlur,
          }, [
            this.isModel ?
              h("span", {
                id: this.valueId,
                class: "a_color_picker__toggle__value",
              }, this.modelValue) :
              h(ATranslation, {
                id: this.valueId,
                alwaysTranslate: this.alwaysTranslate,
                class: [
                  "a_color_picker__toggle__empty",
                  {
                    a_sr_only: this.isLabelFloatLocal && hasLabel,
                  },
                ],
                tag: "span",
                text: "_A_COLOR_PICKER_EMPTY_",
              }),
          ]),
          this.isClearButtonLocal ?
            h("div", {
              class: "a_form_control__actions",
            }, [
              h(AFormElementBtnClear, {
                alwaysTranslate: this.alwaysTranslate,
                disabled: this.disabled,
                class: this.clearButtonClass,
                onClear: this.clearModelFromToggle,
              }),
            ]) :
            "",
        ]),
        h(AFormHelpText, {
          id: this.helpTextId,
          alwaysTranslate: this.alwaysTranslate,
          html: this.helpText,
          extra: this.extra,
        }),
        this.isErrors && h(AErrorsText, {
          id: this.errorsId,
          alwaysTranslate: this.alwaysTranslate,
          errors: this.errors,
          errorsClass: this.errorsClass,
        }),
      ]),
      h(Teleport, {
        to: "body",
      }, [
        this.isOpen ?
          h("div", {
            ref: "popupRef",
            id: this.popupId,
            class: [
              "a_color_picker__popup",
              {
                a_color_picker__popup_positioning: !this.isPositioned,
              },
            ],
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": hasLabel ? this.labelId : undefined,
            onKeydown: this.onPopupKeydown,
          }, [
            hasLabel ?
              "" :
              h(ATranslation, {
                alwaysTranslate: this.alwaysTranslate,
                class: "a_sr_only",
                tag: "h2",
                text: "_A_COLOR_PICKER_DIALOG_",
              }),
            h(AColorPickerSaturation, {
              id: `${ this.htmlIdLocal }_saturation`,
              alwaysTranslate: this.alwaysTranslate,
              brightness: this.hsva.v,
              hue: this.hsva.h,
              saturation: this.hsva.s,
              thumbColor: this.cssColorOpaqueLocal,
              onChange: this.setSaturationBrightness,
            }),
            h("div", {
              class: "a_color_picker__controls",
            }, [
              h("div", {
                class: "a_color_picker__sliders",
              }, [
                h(AColorPickerSlider, {
                  id: `${ this.htmlIdLocal }_hue`,
                  alwaysTranslate: this.alwaysTranslate,
                  background: HUE_BACKGROUND,
                  class: "a_color_picker_slider_hue",
                  label: "_A_COLOR_PICKER_HUE_",
                  largeStep: 15,
                  max: 360,
                  modelValue: this.hsva.h,
                  thumbColor: this.hueCssColor,
                  valueText: `${ this.hsva.h }°`,
                  "onUpdate:modelValue": this.setHue,
                }),
                this.showAlpha ?
                  h(AColorPickerSlider, {
                    id: `${ this.htmlIdLocal }_alpha`,
                    alwaysTranslate: this.alwaysTranslate,
                    background: this.alphaBackground,
                    class: "a_color_picker_slider_alpha",
                    label: "_A_COLOR_PICKER_ALPHA_",
                    max: 100,
                    modelValue: this.alphaPercent,
                    thumbColor: this.cssColorLocal,
                    valueText: `${ this.alphaPercent } %`,
                    "onUpdate:modelValue": this.setAlphaPercent,
                  }) :
                  "",
              ]),
              h("span", {
                class: "a_color_picker__swatch a_color_picker__preview",
                style: {
                  "--a_color_picker_color": this.cssColorLocal,
                },
                ariaHidden: true,
              }),
            ]),
            h("div", {
              class: "a_color_picker__value",
            }, [
              h(AInput, {
                id: `${ this.htmlIdLocal }_input`,
                alwaysTranslate: this.alwaysTranslate,
                class: "a_color_picker__input",
                errors: this.inputErrors,
                inputAttributes: {
                  autocomplete: "off",
                  spellcheck: "false",
                  onKeydown: this.onInputKeydown,
                },
                extra: {
                  format: this.currentFormat.toUpperCase(),
                },
                isClearButton: false,
                label: "_A_COLOR_PICKER_INPUT_{{format}}_",
                modelValue: this.inputText,
                change: this.onInputChange,
                onBlur: this.applyInput,
              }),
              this.isFormatSwitch ?
                h(AButton, {
                  alwaysTranslate: this.alwaysTranslate,
                  ariaLabel: "_A_COLOR_PICKER_FORMAT_SWITCH_{{format}}_{{next}}_",
                  extra: {
                    format: this.currentFormat.toUpperCase(),
                    next: this.nextFormat.toUpperCase(),
                  },
                  class: "a_btn a_btn_outline_secondary a_btn_small a_color_picker__format",
                  text: this.currentFormat.toUpperCase(),
                  title: "_A_COLOR_PICKER_FORMAT_SWITCH_{{format}}_{{next}}_",
                  type: "button",
                  onClick: this.switchFormat,
                }) :
                "",
            ]),
            this.predefineLocal.length ?
              h("div", {
                class: "a_color_picker__predefine",
                role: "group",
                "aria-label": undefined,
                "aria-labelledby": `${ this.htmlIdLocal }_predefine_label`,
              }, [
                h(ATranslation, {
                  id: `${ this.htmlIdLocal }_predefine_label`,
                  alwaysTranslate: this.alwaysTranslate,
                  class: "a_sr_only",
                  tag: "span",
                  text: "_A_COLOR_PICKER_PREDEFINE_",
                }),
                this.predefineLocal.map(item => {
                  return h("button", {
                    key: item.value,
                    type: "button",
                    class: [
                      "a_color_picker__predefine__item",
                      {
                        a_color_picker__predefine__item_selected: item.isSelected,
                      },
                    ],
                    style: {
                      "--a_color_picker_color": item.cssColor,
                    },
                    title: item.value,
                    "aria-label": item.value,
                    "aria-pressed": item.isSelected ? "true" : "false",
                    onClick: () => this.selectPredefine(item),
                  });
                }),
              ]) :
              "",
            h("div", {
              class: "a_color_picker__footer",
            }, [
              h(AButton, {
                alwaysTranslate: this.alwaysTranslate,
                class: "a_btn a_btn_link a_btn_small",
                text: "_A_COLOR_PICKER_CLEAR_",
                type: "button",
                onClick: this.clearColor,
              }),
              h(AButton, {
                alwaysTranslate: this.alwaysTranslate,
                class: "a_btn a_btn_primary a_btn_small",
                text: "_A_COLOR_PICKER_CONFIRM_",
                type: "button",
                onClick: this.confirmColor,
              }),
            ]),
          ]) :
          "",
      ]),
    ]);
  },
};
