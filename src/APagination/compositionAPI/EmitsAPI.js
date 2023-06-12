export default function EmitsAPI(props, { emit }) {
  const updateOffset = offset => {
    emit("update:offset", offset);
  };

  const updateLimit = limit => {
    emit("update:limit", limit);
  };

  return {
    updateLimit,
    updateOffset,
  };
}
