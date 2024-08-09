import {
  computed,
  ref,
  toRef,
} from "vue";


export default function TypeAPI(props) {
  const type = toRef(props, "type");

  const typeLocal = ref(undefined);

  const typeForInput = computed(() => {
    if (typeLocal.value === "integer") {
      return "text";
    }
    return typeLocal.value;
  });

  const setTypeLocal = ({ type: _type } = {}) => {
    if (_type) {
      typeLocal.value = _type;
    } else {
      typeLocal.value = type.value;
    }
  };

  return {
    setTypeLocal,
    typeForInput,
  };
}
