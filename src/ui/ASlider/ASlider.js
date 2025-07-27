import {
  h,
  onBeforeUnmount,
  onMounted,
} from "vue";
import {
  AErrorsText,
  AFormHelpText,
  AFormLabelDescription,
  AFormReadonly,
  ALabel,
  UiAPI,
  UiDisabledAPI,
  UIExcludeRenderAttributesAPI,
  UiStyleHideAPI,
} from "../../index";

import AElement from "../../AElement/AElement";

import AriaAttributesAPI from "./compositionAPI/AriaAttributesAPI";
import AttributesAPI from "./compositionAPI/AttributesAPI";
import DataAPI from "./compositionAPI/DataAPI";
import DragAndDropAPI from "./compositionAPI/DragAndDropAPI";
import LabelAPI from "./compositionAPI/LabelAPI";
import MarksAPI from "./compositionAPI/MarksAPI";
import SliderAPI from "./compositionAPI/SliderAPI";
import StopsAPI from "./compositionAPI/StopsAPI";
import StylesAPI from "./compositionAPI/StylesAPI";
import TitleAPI from "./compositionAPI/TitleAPI";

import {
  uniqueId,
} from "lodash-es";

export default {
  name: "ASlider",
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
    data: {
      type: Array,
      required: false,
      default: undefined,
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
    formatValue: {
      type: Function,
      required: false,
      default: undefined,
    },
    height: {
      type: String,
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
      default: () => uniqueId("a_slider_"),
    },
    idPrefix: {
      type: String,
      required: false,
      default: undefined,
    },
    isDataSimpleArray: {
      type: Boolean,
      required: false,
    },
    isHide: {
      type: Boolean,
      required: false,
    },
    isRender: {
      type: Boolean,
      required: false,
      default: true,
    },
    isTitleHtml: {
      type: Boolean,
      required: false,
      default: true,
    },
    keyId: {
      type: String,
      required: false,
      default: undefined,
    },
    keyLabel: {
      type: String,
      required: false,
      default: undefined,
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
    marks: {
      type: Object,
      required: false,
      default: undefined,
    },
    max: {
      type: Number,
      required: false,
      default: 100,
    },
    min: {
      type: Number,
      required: false,
      default: 0,
    },
    modelDependencies: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    modelUndefined: {
      type: [Number, Array],
      required: false,
      default: 0,
    },
    modelValue: {
      type: [String, Number, Array],
      required: false,
      default: undefined,
    },
    range: {
      type: Boolean,
      required: false,
      default: false,
    },
    rangeAriaLabel: {
      type: String,
      required: false,
      default: "_A_SLIDER_RANGE_ARIA_LABEL_{{min}}_{{max}}_",
    },
    rangeFirstButtonAriaLabel: {
      type: String,
      required: false,
      default: "_A_SLIDER_RANGE_FIRST_BUTTON_ARIA_LABEL_",
    },
    rangeSecondButtonAriaLabel: {
      type: String,
      required: false,
      default: "_A_SLIDER_RANGE_SECOND_BUTTON_ARIA_LABEL_",
    },
    rangeAllowCross: {
      type: Boolean,
      required: false,
      default: false,
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
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    showStops: {
      type: Boolean,
      required: false,
    },
    step: {
      type: Number,
      required: false,
      default: 1,
    },
    vertical: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: [
    "update:modelValue",
    "input",
    "change",
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
    } = UiAPI(props, context);

    const {
      secondButtonHtmlId,
    } = AttributesAPI(props, {
      htmlIdLocal,
    });

    const {
      dataLocal,
      maxValueDataLocal,
      minValueDataLocal,
    } = DataAPI(props);

    const {
      clickLabel,
    } = LabelAPI();

    const {
      dragging,
      firstButtonRef,
      firstValue,
      getPosition,
      initSlider,
      maxValue,
      minValue,
      modelValueLocal,
      onButtonKeyDown,
      onMarkerClick,
      onSliderClick,
      resetSize,
      secondButtonRef,
      secondValue,
      setPosition,
      sliderRef,
      sliderSize,
    } = SliderAPI(props, {
      changeModel,
      dataLocal,
      maxValueDataLocal,
      minValueDataLocal,
    });

    const {
      firstButtonTitle,
      formatValueLocal,
      secondButtonTitle,
    } = TitleAPI(props, {
      firstValue,
      secondValue,
    });

    const {
      draggingFirst,
      draggingSecond,
      hoveringFirst,
      hoveringSecond,
      onButtonMouseDown,
      onButtonMouseEnter,
      onButtonMouseLeave,
      removeEventListenersFirstButton,
      removeEventListenersSecondButton,
    } = DragAndDropAPI(props, {
      dragging,
      firstValue,
      getPosition,
      htmlIdLocal,
      resetSize,
      secondButtonHtmlId,
      secondValue,
      setPosition,
      sliderSize,
    });

    const {
      markList,
    } = MarksAPI(props);

    const {
      barStyle,
      firstButtonStyle,
      runwayStyle,
      secondButtonStyle,
    } = StylesAPI(props, {
      firstValue,
      getPosition,
      secondValue,
    });

    const {
      buttonAriaLabelledby,
      buttonAriaOrientation,
      firstButtonAriaLabelObj,
      firstButtonAriaValueMax,
      firstButtonAriaValueMin,
      secondButtonAriaLabelObj,
      secondButtonAriaValueMax,
      secondButtonAriaValueMin,
      sliderAriaLabelObj,
      sliderRole,
    } = AriaAttributesAPI(props, {
      firstValue,
      formatValueLocal,
      htmlIdLocal,
      maxValueDataLocal,
      minValueDataLocal,
      secondValue,
    });

    const {
      getStopStyle,
      stops,
    } = StopsAPI(props, {
      firstValue,
      maxValue,
      minValue,
    });

    // Format the model value for readonly display
    const modelValueReadonly = () => {
      if (!isModel.value) {
        return props.readonlyDefault;
      }

      if (props.range && Array.isArray(modelValueLocal.value)) {
        return `${ formatValueLocal(modelValueLocal.value[0]) } - ${ formatValueLocal(modelValueLocal.value[1]) }`;
      }

      return formatValueLocal(modelValueLocal.value);
    };

    onMounted(() => {
      initSlider();
    });

    onBeforeUnmount(() => {
      removeEventListenersFirstButton();
      removeEventListenersSecondButton();
    });

    return {
      buttonAriaLabelledby,
      buttonAriaOrientation,
      firstButtonAriaValueMax,
      firstButtonAriaValueMin,
      sliderAriaLabelObj,
      draggingFirst,
      draggingSecond,
      sliderRole,
      ariaDescribedbyLocal,
      clickLabel,
      attributesToExcludeFromRender,
      barStyle,
      componentStyleHide,
      dataLocal,
      disabledAttribut,
      firstButtonAriaLabelObj,
      errorsId,
      firstButtonRef,
      firstButtonStyle,
      firstButtonTitle,
      secondButtonAriaLabelObj,
      firstValue,
      secondButtonAriaValueMax,
      secondButtonAriaValueMin,
      formatValueLocal,
      secondButtonHtmlId,
      getStopStyle,
      helpTextId,
      hoveringFirst,
      hoveringSecond,
      htmlIdLocal,
      isErrors,
      isModel,
      labelDescriptionId,
      markList,
      maxValue,
      minValue,
      modelValueLocal,
      modelValueReadonly,
      onBlur,
      onButtonKeyDown,
      onButtonMouseDown,
      onButtonMouseEnter,
      onButtonMouseLeave,
      onFocus,
      onMarkerClick,
      onSliderClick,
      resetSize,
      runwayStyle,
      secondButtonRef,
      secondButtonStyle,
      secondButtonTitle,
      secondValue,
      sliderRef,
      stops,
    };
  },
  render() {
    if (!this.isRender) {
      return null;
    }

    if (this.readonly) {
      return h(AFormReadonly, {
        ...this.$attrs,
        id: this.htmlIdLocal,
        alwaysTranslate: this.alwaysTranslate,
        excludeRenderAttributes: this.excludeRenderAttributes,
        extra: this.extra,
        helpText: this.helpText,
        label: this.label,
        labelClass: this.labelClass,
        labelScreenReader: this.labelScreenReader,
        modelValue: this.modelValueReadonly(),
        readonlyDefault: this.readonlyDefault,
        required: this.required,
        style: this.componentStyleHide,
      });
    }

    return h("div", {
      ...this.$attrs,
      style: this.componentStyleHide,
      ...this.attributesToExcludeFromRender,
    }, [
      h("div", {
        class: ["a_form_element__parent", {
          a_form_element__parent_not_empty: this.isModel,
        }],
      }, [
        (this.label || this.labelScreenReader) ?
          h(ALabel, {
            id: this.htmlIdLocal,
            alwaysTranslate: this.alwaysTranslate,
            clickLabel: this.clickLabel,
            extra: this.extra,
            hideFor: true,
            isError: this.isErrors,
            label: this.label,
            labelClass: this.labelClass,
            labelScreenReader: this.labelScreenReader,
            required: this.required,
            tag: "div",
          }) :
          "",
        h(AFormLabelDescription, {
          id: this.labelDescriptionId,
          alwaysTranslate: this.alwaysTranslate,
          html: this.labelDescription,
          extra: this.extra,
          isLabelFloat: false,
        }),
        h("div", {
          class: "a_form_element",
        }, [
          // Slider component
          h("div", {
            class: ["a_slider", {
              "a_slider--vertical": this.vertical,
              a_slider_disabled: this.disabled,
              a_slider_invalid: this.isErrors,
            }],
            role: this.sliderRole,
            ...this.sliderAriaLabelObj,
          }, [
            // Slider runway (track)
            h("div", {
              ref: "sliderRef",
              class: "a_slider__runway",
              style: this.runwayStyle,
              onClick: this.onSliderClick,
            }, [
              // Slider bar (filled portion)
              h("div", {
                class: "a_slider__bar",
                style: this.barStyle,
              }),

              // First button (handle)
              h(AElement, {
                ref: "firstButtonRef",
                id: this.htmlIdLocal,
                type: "button",
                tag: "div",
                ariaDisabled: this.disabled,
                classDefault: "",
                class: ["a_slider__button", {
                  a_slider__button_dragging: this.draggingFirst,
                  a_slider__button_hover: this.hoveringFirst,
                }],
                style: this.firstButtonStyle,
                tabindex: this.disabled ? -1 : 0,
                title: this.firstButtonTitle,
                isTitleHtml: this.isTitleHtml,
                role: "slider",
                "aria-valuemin": this.firstButtonAriaValueMin,
                "aria-valuemax": this.firstButtonAriaValueMax,
                "aria-valuenow": this.firstValue,
                "aria-valuetext": this.firstButtonTitle,
                "aria-orientation": this.buttonAriaOrientation,
                "aria-disabled": this.disabledAttribut,
                ...this.firstButtonAriaLabelObj,
                onMousedown: event => this.onButtonMouseDown(event, true),
                onMouseenter: () => this.onButtonMouseEnter(true),
                onMouseleave: () => this.onButtonMouseLeave(true),
                onKeydown: event => this.onButtonKeyDown(event, true),
              }, () => [
                h("div", {
                  class: "a_slider__button__child",
                }),
              ]),

              // Second button (handle) for range mode
              this.range && h(AElement, {
                ref: "secondButtonRef",
                id: this.secondButtonHtmlId,
                type: "button",
                tag: "div",
                ariaDisabled: this.disabled,
                classDefault: "",
                class: ["a_slider__button", {
                  a_slider__button_dragging: this.draggingSecond,
                  a_slider__button_hover: this.hoveringSecond,
                }],
                style: this.secondButtonStyle,
                tabindex: this.disabled ? -1 : 0,
                title: this.secondButtonTitle,
                isTitleHtml: this.isTitleHtml,
                role: "slider",
                "aria-valuemin": this.secondButtonAriaValueMin,
                "aria-valuemax": this.secondButtonAriaValueMax,
                "aria-valuenow": this.secondValue,
                "aria-valuetext": this.secondButtonTitle,
                "aria-orientation": this.buttonAriaOrientation,
                "aria-disabled": this.disabledAttribut,
                ...this.secondButtonAriaLabelObj,
                onMousedown: event => this.onButtonMouseDown(event, false),
                onMouseenter: () => this.onButtonMouseEnter(false),
                onMouseleave: () => this.onButtonMouseLeave(false),
                onKeydown: event => this.onButtonKeyDown(event, false),
              }, () => [
                h("div", {
                  class: "a_slider__button__child",
                }),
              ]),

              // Stops (step markers)
              this.showStops && this.stops.length > 0 && h("div", {
                class: "a_slider__stops",
              }, this.stops.map(position => {
                return h("div", {
                  class: "a_slider__stop",
                  style: this.getStopStyle(position),
                });
              })),

              // Marks (labeled positions)
              this.markList.length > 0 && [
                // Mark stops
                h("div", {
                  class: "a_slider__stops",
                }, this.markList.map(mark => {
                  return h("div", {
                    class: ["a_slider__stop", "a_slider__marks-stop"],
                    style: this.getStopStyle(mark.position),
                  });
                })),

                // Mark labels
                h("div", {
                  class: "a_slider__marks",
                }, this.markList.map(mark => {
                  return h("div", {
                    class: "a_slider__marks-text",
                    style: this.getStopStyle(mark.position),
                    onClick: () => this.onMarkerClick(mark.position),
                  }, mark.mark);
                })),
              ],
            ]),
          ]),
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
        }),
      ]),
    ]);
  },
};
