import {
  ref,
  toRef,
} from "vue";

import {
  cloneDeep,
} from "lodash-es";

export default function JsonAPI(props, {
  changeModel = () => {
  },
}) {
  const disabled = toRef(props, "disabled");
  const modelUndefined = toRef(props, "modelUndefined");
  const modelValue = toRef(props, "modelValue");

  const initialValue = ref(undefined);
  const jsonString = ref("");
  const jsonStringInput = ref("");
  const parseError = ref(undefined);

  const initInitialValue = () => {
    initialValue.value = cloneDeep(modelValue.value) || "";
  };

  const clearModel = () => {
    if (disabled.value) {
      return;
    }
    changeModel({
      model: modelUndefined.value,
    });
  };

  const JSONtoString = () => {
    try {
      if (modelValue.value) {
        jsonString.value = JSON.stringify(modelValue.value, undefined, 2);
      } else {
        jsonString.value = "";
      }
      jsonStringInput.value = jsonString.value;
      parseError.value = undefined;
    } catch (e) {
    }
  };

  const stringToJSON = $event => {
    if (disabled.value) {
      return;
    }

    if (!jsonStringInput.value || jsonStringInput.value.length === 0) {
      changeModel({
        $event,
        model: modelUndefined.value,
      });
    } else {
      try {
        const MODEL = JSON.parse(jsonStringInput.value);
        changeModel({
          $event,
          model: MODEL,
        });
        jsonString.value = JSON.stringify(MODEL, undefined, 2);
        parseError.value = null;
      } catch (e) {
        parseError.value = e.toString();
      }
    }
  };

  const onInput = $event => {
    if (disabled.value) {
      return;
    }

    jsonStringInput.value = $event.target.value;
    stringToJSON();
  };

  const formatJson = () => {
    try {
      jsonStringInput.value = JSON.stringify(JSON.parse(jsonStringInput.value), undefined, 2);
    } catch (e) {
      parseError.value = e.toString();
    }
  };

  const resetModel = () => {
    if (disabled.value) {
      return;
    }

    changeModel({
      model: initialValue.value,
    });
    setTimeout(() => {
      JSONtoString();
    });
  };

  return {
    clearModel,
    formatJson,
    initialValue,
    initInitialValue,
    jsonString,
    jsonStringInput,
    JSONtoString,
    onInput,
    parseError,
    resetModel,
    stringToJSON,
  };
}
