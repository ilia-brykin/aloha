import {
  computed,
  ref,
  toRef,
} from "vue";

export default function PointerAPI(props, {
  allowHalfLocal = computed(() => false),
  hoverValue = ref(undefined),
  setValue = () => {},
  valueLocal = computed(() => 0),
}) {
  const clearable = toRef(props, "clearable");
  const disabled = toRef(props, "disabled");

  const getValueFromPointer = ({ $event, index }) => {
    if (!allowHalfLocal.value) {
      return index + 1;
    }
    const ITEM = $event.currentTarget;
    const RECT = ITEM.getBoundingClientRect();
    const IS_RTL = getComputedStyle(ITEM).direction === "rtl";
    const OFFSET = IS_RTL ? RECT.right - $event.clientX : $event.clientX - RECT.left;
    return OFFSET < RECT.width / 2 ? index + 0.5 : index + 1;
  };

  const onPointermoveItem = ({ $event, index }) => {
    if (disabled.value) {
      return;
    }
    hoverValue.value = getValueFromPointer({ $event, index });
  };

  const onPointerleave = () => {
    hoverValue.value = undefined;
  };

  const onClickItem = ({ $event, index }) => {
    if (disabled.value) {
      return;
    }
    const VALUE = getValueFromPointer({ $event, index });
    if (clearable.value && VALUE === valueLocal.value) {
      setValue({ value: 0, triggerDetails: "clear" });
      hoverValue.value = undefined;
      return;
    }
    setValue({ value: VALUE, triggerDetails: "click" });
  };

  return {
    onClickItem,
    onPointerleave,
    onPointermoveItem,
  };
}
