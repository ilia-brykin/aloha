import {
  computed,
  ref,
  toRef,
} from "vue";

export default function BtnAttributesAPI(props, {
  isOpen = ref(false),
}) {
  const btnIconLeftLess = toRef(props, "btnIconLeftLess");
  const btnIconLeftMore = toRef(props, "btnIconLeftMore");
  const btnIconRightLess = toRef(props, "btnIconRightLess");
  const btnIconRightMore = toRef(props, "btnIconRightMore");
  const btnTextLess = toRef(props, "btnTextLess");
  const btnTextMore = toRef(props, "btnTextMore");

  const btnText = computed(() => {
    return isOpen.value ?
      btnTextLess.value :
      btnTextMore.value;
  });

  const btnIconLeft = computed(() => {
    return isOpen.value ?
      btnIconLeftLess.value :
      btnIconLeftMore.value;
  });

  const btnIconRight = computed(() => {
    return isOpen.value ?
      btnIconRightLess.value :
      btnIconRightMore.value;
  });

  return {
    btnIconLeft,
    btnIconRight,
    btnText,
  };
}
