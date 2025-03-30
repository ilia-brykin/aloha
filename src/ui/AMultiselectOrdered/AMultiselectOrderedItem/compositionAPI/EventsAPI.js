import {
  computed,
  toRef,
} from "vue";

export default function EventsAPI(props, { emit }, {
  getIdBtnDown = () => {},
  getIdBtnUp = () => {},
}) {
  const id = toRef(props, "id");
  const index = toRef(props, "index");
  const isLastItem = toRef(props, "isLastItem");
  const modelValue = toRef(props, "modelValue");

  const isFirstItem = computed(() => {
    return index.value === 0;
  });

  const deleteItem = () => {
    emit("deleteItem", { modelValue: modelValue.value });
  };

  const onUpItem = () => {
    if (isFirstItem.value) {
      return;
    }

    emit("upItem", {
      index: index.value,
      idForFocus: getIdBtnUp({
        id: id.value,
        index: index.value - 1,
      }),
    });
  };

  const onDownItem = () => {
    if (isLastItem.value) {
      return;
    }

    emit("downItem", {
      index: index.value,
      idForFocus: getIdBtnDown({
        id: id.value,
        index: index.value + 1,
      }),
    });
  };

  return {
    deleteItem,
    isFirstItem,
    onDownItem,
    onUpItem,
  };
}
