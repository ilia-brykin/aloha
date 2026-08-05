import {
  computed,
  toRef,
} from "vue";

import {
  AKeyId,
} from "../../../const/AKeys";
import {
  isArray,
  isNil,
} from "lodash-es";

export default function SelectedFirstAPI(props, {
  data = computed(() => []),
  dataExtra = computed(() => []),
  exclusiveOption = computed(() => undefined),
}) {
  const modelValue = toRef(props, "modelValue");
  const showSelectedFirst = toRef(props, "showSelectedFirst");
  const type = toRef(props, "type");

  const selectedValues = computed(() => {
    if (!showSelectedFirst.value || isNil(modelValue.value)) {
      return [];
    }

    if (type.value === "multiselect") {
      return isArray(modelValue.value) ? [...new Set(modelValue.value)] : [];
    }

    return [modelValue.value];
  });

  const selectedValuesSet = computed(() => new Set(selectedValues.value));

  const dataSelected = computed(() => {
    const ADDED_VALUES = new Set();

    return [exclusiveOption.value, ...dataExtra.value, ...data.value]
      .filter(item => {
        if (!item ||
          !selectedValuesSet.value.has(item[AKeyId]) ||
          ADDED_VALUES.has(item[AKeyId])) {
          return false;
        }

        ADDED_VALUES.add(item[AKeyId]);
        return true;
      });
  });

  const filterSelected = currentData => {
    if (!showSelectedFirst.value || !selectedValuesSet.value.size) {
      return currentData;
    }

    return currentData.filter(item => !selectedValuesSet.value.has(item[AKeyId]));
  };

  const dataWithoutSelected = computed(() => filterSelected(data.value));
  const dataExtraWithoutSelected = computed(() => filterSelected(dataExtra.value));
  const exclusiveOptionWithoutSelected = computed(() => {
    if (!exclusiveOption.value ||
      !selectedValuesSet.value.has(exclusiveOption.value[AKeyId])) {
      return exclusiveOption.value;
    }

    return undefined;
  });

  return {
    dataExtraWithoutSelected,
    dataSelected,
    dataWithoutSelected,
    exclusiveOptionWithoutSelected,
  };
}
