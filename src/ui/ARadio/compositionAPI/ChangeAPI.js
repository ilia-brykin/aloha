import {
  computed,
  toRef,
} from "vue";

import {
  forEach,
} from "lodash-es";

export default function ChangeAPI(props, {
  changeModel = () => {
  },
  dataKeyByKeyIdLocal = computed(() => ({})),
}) {
  const disabled = toRef(props, "disabled");
  const isModelArray = toRef(props, "isModelArray");
  const modelValue = toRef(props, "modelValue");

  const onChangeModelValue = ({ model, $event }) => {
    if (disabled.value) {
      return;
    }
    if (isModelArray.value) {
      if (!modelValue.value || modelValue.value.length === 0) {
        setTimeout(() => {
          changeModel({
            model: [model],
            $event,
          });
        });
      } else {
        setTimeout(() => {
          const MODEL = [];
          forEach(modelValue.value, modelItem => {
            if (!dataKeyByKeyIdLocal.value[modelItem]) {
              MODEL.push(modelItem);
            }
          });
          MODEL.push(model);
          changeModel({
            model: MODEL,
            $event,
          });
        });
      }
    } else {
      setTimeout(() => {
        changeModel({
          model,
          $event,
        });
      });
    }
  };

  return {
    onChangeModelValue,
  };
}
