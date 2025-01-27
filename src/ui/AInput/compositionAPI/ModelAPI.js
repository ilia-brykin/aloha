import {
  ref,
  toRef,
} from "vue";

export default function ModelAPI(props, {
  changeModel = () => {
  },
}) {
  const disabled = toRef(props, "disabled");
  const type = toRef(props, "type");

  const inputRef = ref(undefined);

  const onInput = $event => {
    if (disabled.value) {
      return;
    }
    let value = $event.target.value;
    if (type.value === "integer") {
      value = value.replace(/\D/g, "");
      if (value !== "") {
        value = +value;
      }
      inputRef.value.value = value;
    }
    if (type.value === "number") {
      if (value !== "") {
        value = +value;
      }
    }
    changeModel({
      model: value,
    });
  };

  return {
    inputRef,
    onInput,
  };
}
