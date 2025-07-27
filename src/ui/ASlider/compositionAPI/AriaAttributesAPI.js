import {
  computed,
  toRef,
} from "vue";

import {
  getTranslatedAttributes,
} from "../../../ATranslation/compositionAPI/UtilsAPI";

export default function AriaAttributesAPI(props, {
  firstValue = computed(() => 0),
  formatValueLocal = () => {},
  htmlIdLocal = computed(() => ""),
  maxValueDataLocal = computed(() => 0),
  minValueDataLocal = computed(() => 0),
  secondValue = computed(() => 0),
}) {
  const label = toRef(props, "label");
  const labelScreenReader = toRef(props, "labelScreenReader");
  const range = toRef(props, "range");
  const rangeFirstButtonAriaLabel = toRef(props, "rangeFirstButtonAriaLabel");
  const rangeSecondButtonAriaLabel = toRef(props, "rangeSecondButtonAriaLabel");
  const rangeAriaLabel = toRef(props, "rangeAriaLabel");
  const vertical = toRef(props, "vertical");

  const firstButtonAriaValueMin = computed(() => {
    return minValueDataLocal.value;
  });

  const firstButtonAriaValueMax = computed(() => {
    return range.value ?
      secondValue.value :
      maxValueDataLocal.value;
  });

  const firstButtonAriaLabelObj = computed(() => {
    if (range.value && rangeFirstButtonAriaLabel.value) {
      return getTranslatedAttributes({
        attr: "aria-label",
        placeholder: rangeFirstButtonAriaLabel.value,
        extra: {
          min: formatValueLocal({ value: minValueDataLocal.value }),
          max: formatValueLocal({ value: maxValueDataLocal.value }),
        },
      });
    }

    return {};
  });

  const secondButtonAriaValueMin = computed(() => {
    return firstValue.value;
  });

  const secondButtonAriaValueMax = computed(() => {
    return maxValueDataLocal.value;
  });

  const secondButtonAriaLabelObj = computed(() => {
    if (range.value && rangeSecondButtonAriaLabel.value) {
      return getTranslatedAttributes({
        attr: "aria-label",
        placeholder: rangeSecondButtonAriaLabel.value,
        extra: {
          min: formatValueLocal({ value: minValueDataLocal.value }),
          max: formatValueLocal({ value: maxValueDataLocal.value }),
        },
      });
    }

    return {};
  });

  const buttonAriaOrientation = computed(() => {
    return vertical.value ?
      "vertical" :
      "horizontal";
  });

  const buttonAriaLabelledby = computed(() => {
    if (label.value || labelScreenReader.value) {
      return `${ htmlIdLocal.value }_label`;
    }

    return undefined;
  });

  const sliderRole = computed(() => {
    return range.value ?
      "group" :
      undefined;
  });

  const sliderAriaLabelObj = computed(() => {
    if (range.value && rangeAriaLabel.value) {
      return getTranslatedAttributes({
        attr: "aria-label",
        placeholder: rangeAriaLabel.value,
        extra: {
          min: formatValueLocal({ value: minValueDataLocal.value }),
          max: formatValueLocal({ value: maxValueDataLocal.value }),
        },
      });
    }

    return {};
  });

  return {
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
  };
}
