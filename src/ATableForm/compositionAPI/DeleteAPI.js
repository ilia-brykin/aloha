export default function DeleteAPI(props, { emit }) {
  const onDeleteRow = ({ row, rowIndex }) => {
    emit("deleteRow", { row, rowIndex });
  };

  return {
    onDeleteRow,
  };
}
