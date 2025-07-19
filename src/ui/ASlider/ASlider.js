import {
  h,
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

import ModelAPI from "./compositionAPI/ModelAPI";
import SliderAPI from "./compositionAPI/SliderAPI";

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
    formatTooltip: {
      type: Function,
      required: false,
      default: undefined,
    },
    helpText: {
      type: String,
      required: false,
      default: undefined,
    },
    height: {
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
    isHide: {
      type: Boolean,
      required: false,
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
      default: false,
    },
    showTooltip: {
      type: Boolean,
      required: false,
      default: true,
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
      modelValueLocal,
      onInput,
      onChange,
    } = ModelAPI(props, {
      changeModel,
    });

    const {
      sliderRef,
      firstButtonRef,
      secondButtonRef,
      firstValue,
      secondValue,
      minValue,
      maxValue,
      precision,
      dragging,
      hovering,
      tooltipVisible,
      runwayStyle,
      barStyle,
      firstButtonStyle,
      secondButtonStyle,
      stops,
      getStopStyle,
      markList,
      formatValue,
      resetSize,
      onSliderClick,
      onButtonMouseDown,
      onButtonMouseEnter,
      onButtonMouseLeave,
      onMarkerClick,
      onButtonKeyDown,
    } = SliderAPI(props, {
      modelValueLocal,
      changeModel,
    });

    // Format the model value for readonly display
    const modelValueReadonly = () => {
      if (!isModel.value) {
        return props.readonlyDefault;
      }

      if (props.range && Array.isArray(modelValueLocal.value)) {
        return `${ formatValue(modelValueLocal.value[0]) } - ${ formatValue(modelValueLocal.value[1]) }`;
      }

      return formatValue(modelValueLocal.value);
    };

    return {
      ariaDescribedbyLocal,
      attributesToExcludeFromRender,
      barStyle,
      componentStyleHide,
      disabledAttribut,
      dragging,
      errorsId,
      firstButtonRef,
      firstButtonStyle,
      firstValue,
      formatValue,
      getStopStyle,
      helpTextId,
      hovering,
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
      onChange,
      onFocus,
      onInput,
      onMarkerClick,
      onSliderClick,
      placeholderAttributes,
      precision,
      resetSize,
      runwayStyle,
      secondButtonRef,
      secondButtonStyle,
      secondValue,
      sliderRef,
      stops,
      tooltipVisible,
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
            extra: this.extra,
            isError: this.isErrors,
            label: this.label,
            labelClass: this.labelClass,
            labelScreenReader: this.labelScreenReader,
            required: this.required,
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
              "a_slider--disabled": this.disabledAttribut,
            }],
            role: this.range ? "group" : undefined,
            "aria-label": this.range ? `Range slider between ${ this.min } and ${ this.max }` : undefined,
          }, [
            // Slider runway (track)
            h("div", {
              ref: "sliderRef",
              class: ["a_slider__runway", {
                "is-disabled": this.disabledAttribut,
              }],
              style: this.runwayStyle,
              onClick: this.onSliderClick,
            }, [
              // Slider bar (filled portion)
              h("div", {
                class: "a_slider__bar",
                style: this.barStyle,
              }),

              // First button (handle)
              h("div", {
                ref: "firstButtonRef",
                class: ["a_slider__button-wrapper", {
                  dragging: this.dragging,
                  hover: this.hovering,
                }],
                style: this.firstButtonStyle,
                tabindex: this.disabledAttribut ? -1 : 0,
                role: "slider",
                "aria-valuemin": this.min,
                "aria-valuemax": this.range ? this.secondValue : this.max,
                "aria-valuenow": this.firstValue,
                "aria-valuetext": this.formatValue(this.firstValue),
                "aria-orientation": this.vertical ? "vertical" : "horizontal",
                "aria-disabled": this.disabledAttribut,
                "aria-label": this.range ? "Minimum value" : "Value",
                onMousedown: event => this.onButtonMouseDown(event, true),
                onMouseenter: this.onButtonMouseEnter,
                onMouseleave: this.onButtonMouseLeave,
                onKeydown: event => this.onButtonKeyDown(event, true),
                onFocus: this.onFocus,
                onBlur: this.onBlur,
              }, [
                h("div", {
                  class: "a_slider__button",
                }),
                // Tooltip for first button
                this.showTooltip && h("div", {
                  class: ["a_slider__tooltip", {
                    "is-visible": this.tooltipVisible,
                  }],
                }, this.formatValue(this.firstValue)),
              ]),

              // Second button (handle) for range mode
              this.range && h("div", {
                ref: "secondButtonRef",
                class: ["a_slider__button-wrapper", {
                  dragging: this.dragging,
                  hover: this.hovering,
                }],
                style: this.secondButtonStyle,
                tabindex: this.disabledAttribut ? -1 : 0,
                role: "slider",
                "aria-valuemin": this.firstValue,
                "aria-valuemax": this.max,
                "aria-valuenow": this.secondValue,
                "aria-valuetext": this.formatValue(this.secondValue),
                "aria-orientation": this.vertical ? "vertical" : "horizontal",
                "aria-disabled": this.disabledAttribut,
                "aria-label": "Maximum value",
                onMousedown: event => this.onButtonMouseDown(event, false),
                onMouseenter: this.onButtonMouseEnter,
                onMouseleave: this.onButtonMouseLeave,
                onKeydown: event => this.onButtonKeyDown(event, false),
                onFocus: this.onFocus,
                onBlur: this.onBlur,
              }, [
                h("div", {
                  class: "a_slider__button",
                }),
                // Tooltip for second button
                this.showTooltip && h("div", {
                  class: ["a_slider__tooltip", {
                    "is-visible": this.tooltipVisible,
                  }],
                }, this.formatValue(this.secondValue)),
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
