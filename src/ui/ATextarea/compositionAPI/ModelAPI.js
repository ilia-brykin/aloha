import {
  toRef,
} from "vue";

export default function ModelAPI(props, {
  changeModel = () => {},
  updateAutosize = () => {},
}) {
  const disabled = toRef(props, "disabled");
  const modelUndefined = toRef(props, "modelUndefined");

  const onInput = $event => {
    if (disabled.value) {
      return;
    }

    const value = $event.target.value;
    changeModel({
      model: value,
    });
  };

  const clearModel = () => {
    if (disabled.value) {
      return;
    }
    changeModel({
      model: modelUndefined.value,
    });
    updateAutosize();
  };

  return {
    clearModel,
    onInput,
  };
}
