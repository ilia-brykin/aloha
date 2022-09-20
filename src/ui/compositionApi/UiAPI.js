import {
  computed,
  ref,
  toRef,
} from "vue";

import UiErrorsAPI from "./UiErrorsAPI";

export default function UiAPI(props, { emit }) {
  const id = toRef(props, "id");
  const idPrefix = toRef(props, "idPrefix");
  const htmlId = toRef(props, "htmlId");
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

  const change = toRef(props, "change");
  const changeModel = ({ model, currentModel, item }) => {
    emit("update:modelValue", model);
    change.value({
      model,
      props,
      currentModel,
      item,
    });
  };

  const modelValue = toRef(props, "modelValue");
  const isModel = computed(() => {
    return !!(modelValue.value || modelValue.value === 0);
  });

  const disabled = toRef(props, "disabled");
  const modelUndefined = toRef(props, "modelUndefined");
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

  const helpText = toRef(props, "helpText");
  const ariaDescribedbyLocal = computed(() => {
    let ariaDescribedby = "";
    if (helpText.value) {
      ariaDescribedby += helpTextId.value;
    }
    if (isErrors.value) {
      if (ariaDescribedby) {
        ariaDescribedby += " ";
      }
      ariaDescribedby += helpTextId.value;
    }
    return ariaDescribedby;
  });

  const isFocus = ref(false);
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

  return {
    ariaDescribedbyLocal,
    changeModel,
    clearModel,
    errorsId,
    helpTextId,
    htmlIdLocal,
    isErrors,
    isFocus,
    isModel,
    onBlur,
    onFocus,
  };
}

export function getHtmlId({ id, idPrefix, htmlId }) {
  if (htmlId) {
    return htmlId;
  }
  return `${ idPrefix || "" }${ id }`;
}
