import {
  computed,
  toRef,
} from "vue";

import ACheckboxItem from "../../ACheckbox/ACheckboxItem/ACheckboxItem";
import ARadioItem from "../../ARadio/ARadioItem/ARadioItem";

export default function ComponentAPI(props) {
  const type = toRef(props, "type");

  const currentComponent = computed(() => {
    if (type.value === "radio") {
      return ARadioItem;
    }
    if (type.value === "checkbox") {
      return ACheckboxItem;
    }
    return "";
  });

  return {
    currentComponent,
  };
}
