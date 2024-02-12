export default function EmitsAPI(props, { emit }) {
  const clickEmit = arg => {
    emit("click", arg);
  };

  return {
    clickEmit,
  };
}
