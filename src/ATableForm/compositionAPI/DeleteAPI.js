export default function DeleteAPI(props, { emit }) {
  const onDeleteRow = ({ row, rowIndex, rowId, btnDeleteId }) => {
    emit("deleteRow", { row, rowIndex, rowId, btnDeleteId });
  };

  return {
    onDeleteRow,
  };
}
