export default function ChangeModelAPI({ emit }) {
  const onChangeModelValue = arg => {
    emit("changeModelValue", arg);
  };

  return {
    onChangeModelValue,
  };
}
