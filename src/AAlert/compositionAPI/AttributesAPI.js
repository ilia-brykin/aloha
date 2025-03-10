import {
  computed,
  toRef,
} from "vue";

export default function AttributesAPI(props) {
  const ariaAtomic = toRef(props, "ariaAtomic");
  const role = toRef(props, "role");

  const ariaAtomicLocal = computed(() => {
    if (ariaAtomic.value) {
      return true;
    }

    return undefined;
  });

  const roleLocal = computed(() => {
    if (role.value) {
      return role.value;
    }

    return undefined;
  });

  return {
    ariaAtomicLocal,
    roleLocal,
  };
}
