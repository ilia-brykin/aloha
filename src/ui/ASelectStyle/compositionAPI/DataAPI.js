import {
  computed,
  toRef,
} from "vue";

import {
  ASelectStylePluginOptions,
} from "../../../plugins/ASelectStylesPlugin";
import {
  filter,
  includes,
  isArray,
  isPlainObject,
} from "lodash-es";

export default function DataAPI(props) {
  const data = toRef(props, "data");
  const dataExtended = toRef(props, "dataExtended");
  const filterGroups = toRef(props, "filterGroups");

  const dataLocal = computed(() => {
    if (data.value) {
      return [
        ...data.value,
        ...dataExtended.value,
      ];
    }

    const STYLES = [
      ...ASelectStylePluginOptions.cssClasses,
      ...dataExtended.value,
    ];

    if (!filterGroups.value) {
      return STYLES;
    }

    if (isArray(filterGroups.value)) {
      return filter(STYLES, item => {
        return includes(filterGroups.value, item.group);
      });
    }

    if (isPlainObject(filterGroups.value)) {
      return filter(STYLES, item => {
        const group = item.group;
        const subGroup = item.subGroup;
        if (group in filterGroups.value) {
          if (filterGroups.value[group] === true) {
            return true;
          }

          if (isArray(filterGroups.value[group])) {
            return includes(filterGroups.value[group], subGroup);
          }

          return false;
        }
      });
    }

    return [];
  });

  return {
    dataLocal,
  };
}
