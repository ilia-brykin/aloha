import {
  computed,
  toRef,
} from "vue";

import {
  cloneDeep,
  forEach,
} from "lodash-es";

export default function FormAPI(props) {
  const filtersGroup = toRef(props, "filtersGroup");
  const filtersVisible = toRef(props, "filtersVisible");

  const dataForForm = computed(() => {
    const DATA = [];
    forEach(filtersGroup.value.alwaysVisible, filter => {
      const FILTER = cloneDeep(filter);
      FILTER.labelClass = "a_column a_column_12_touch a_column_3_fullhd a_column_3_widescreen a_column_3_desktop";
      FILTER.classColumn = "a_column a_column_12_touch a_column_9_fullhd a_column_9_widescreen a_column_9_desktop";

      DATA.push({
        type: "group",
        id: `group_${ filter.id }`,
        children: [
          FILTER
        ],
      });
    });

    forEach(filtersVisible.value, filter => {
      const FILTER = cloneDeep(filter);
      FILTER.labelClass = "a_column a_column_12_touch a_column_3_fullhd a_column_3_widescreen a_column_3_desktop";
      FILTER.classColumn = "a_column a_column_12_touch a_column_9_fullhd a_column_9_widescreen a_column_9_desktop a_d_flex a_align_items_center";
      FILTER.slotAppend = "groupAppend";
      FILTER.class = "a_width_100";

      DATA.push({
        type: "group",
        id: `group_${ filter.id }`,
        children: [
          FILTER
        ],
      });
    });

    return DATA;
  });

  return {
    dataForForm,
  };
}
