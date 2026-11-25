export default function EmitsAPI(props, { emit }) {
  const updateOffset = offset => {
    emit("update:offset", offset);
  };

  // options: { loadMore: true } of the button "Load more"
  const updateLimit = (limit, options) => {
    emit("update:limit", limit, options);
  };

  return {
    updateLimit,
    updateOffset,
  };
}
