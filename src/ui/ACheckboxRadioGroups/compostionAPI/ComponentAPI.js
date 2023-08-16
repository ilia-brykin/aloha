import {
  computed,
  toRef,
} from "vue";

import ACheckboxItem from "../../ACheckbox/ACheckboxItem/ACheckboxItem";
import ARadioItem from "../../ARadio/ARadioItem/ARadioItem";
import ASelectElement from "../../ASelect/ASelectElement/ASelectElement";

export default function ComponentAPI(props) {
  const type = toRef(props, "type");

  const isComponentSelect = computed(() => {
    return type.value === "select" ||
      type.value === "multiselect";
  });

  const currentComponent = computed(() => {
    if (type.value === "radio") {
      return ARadioItem;
    }
    if (type.value === "checkbox") {
      return ACheckboxItem;
    }
    if (isComponentSelect.value) {
      return ASelectElement;
    }
    return "";
  });

  return {
    currentComponent,
    isComponentSelect,
  };
}
