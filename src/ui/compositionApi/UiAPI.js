import {
  computed,
  ref,
  toRef,
  toRefs,
} from "vue";

import UiErrorsAPI from "./UiErrorsAPI";

export default function UiAPI(props, { emit }) {
  const change = toRef(props, "change");
  const disabled = toRef(props, "disabled");
  const helpText = toRef(props, "helpText");
  const htmlId = toRef(props, "htmlId");
  const id = toRef(props, "id");
  const idPrefix = toRef(props, "idPrefix");
  const isLabelFloat = toRef(props, "isLabelFloat");
  const labelDescription = toRef(props, "labelDescription");
  const modelUndefined = toRef(props, "modelUndefined");
  const modelValue = toRef(props, "modelValue");

  const isFocus = ref(false);
  const isFocusIn = ref(false);
  const rootRef = ref(undefined);

  const htmlIdLocal = computed(() => {
    return getHtmlId({
      id: id.value,
      idPrefix: idPrefix.value,
      htmlId: htmlId.value,
    });
  });

  const {
    errorsId,
    isErrors,
  } = UiErrorsAPI(props, {
    htmlIdLocal,
  });

  const changeModel = ({ model, currentModel, item }) => {
    emit("update:modelValue", model);
    change.value({
      currentModel,
      id: id.value,
      item,
      model,
      props: toRefs(props),
    });
  };

  const isModel = computed(() => {
    return !!(modelValue.value || modelValue.value === 0);
  });

  const clearModel = () => {
    if (disabled.value) {
      return;
    }
    changeModel({
      model: modelUndefined.value,
    });
  };

  const helpTextId = computed(() => {
    return `${ htmlIdLocal.value }_help_text`;
  });

  const labelDescriptionId = computed(() => {
    return `${ htmlIdLocal.value }_label_description`;
  });

  const ariaDescribedbyLocal = computed(() => {
    const ariaDescribedby = [];
    if (labelDescription.value && !isLabelFloat.value) {
      ariaDescribedby.push(labelDescriptionId.value);
    }
    if (helpText.value) {
      ariaDescribedby.push(helpTextId.value);
    }
    if (isErrors.value) {
      ariaDescribedby.push(errorsId.value);
    }

    return ariaDescribedby.join(" ") || undefined;
  });

  const onFocus = $event => {
    isFocus.value = true;
    emit("focus", {
      event: $event,
      props,
    });
  };

  const onBlur = $event => {
    isFocus.value = false;
    emit("blur", {
      event: $event,
      props,
    });
  };

  const onFocusin = $event => {
    if (!isFocusIn.value) {
      isFocusIn.value = true;
      emit("focusin", {
        event: $event,
        props,
      });
    }
  };

  const onFocusout = $event => {
    if (isFocusIn.value) {
      if (rootRef.value && !rootRef.value.contains($event.relatedTarget)) {
        isFocusIn.value = false;
        emit("focusout", {
          event: $event,
          props,
        });
      }
    }
  };


  return {
    ariaDescribedbyLocal,
    changeModel,
    clearModel,
    errorsId,
    helpTextId,
    htmlIdLocal,
    isErrors,
    isFocus,
    isFocusIn,
    isModel,
    labelDescriptionId,
    onBlur,
    onFocus,
    onFocusin,
    onFocusout,
    rootRef,
  };
}

export function getHtmlId({ id, idPrefix, htmlId }) {
  if (htmlId) {
    return htmlId;
  }
  return `${ idPrefix || "" }${ id }`;
}
