import {
  ref,
} from "vue";

export default function TableColumnsVisibleAPI() {
  const modelColumnsVisibleLocal = ref({});

  return {
    modelColumnsVisibleLocal,
  };
}
