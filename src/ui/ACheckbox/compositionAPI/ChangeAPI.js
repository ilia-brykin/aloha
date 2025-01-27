import {
  toRef,
} from "vue";

export default function ChangeAPI(props, {
  changeModel = () => {
  },
}) {
  const disabled = toRef(props, "disabled");

  const onChangeModelValue = ({ model, $event }) => {
    if (disabled.value) {
      return;
    }
    setTimeout(() => {
      changeModel({
        model,
        $event,
      });
    });
  };

  return {
    onChangeModelValue,
  };
}
