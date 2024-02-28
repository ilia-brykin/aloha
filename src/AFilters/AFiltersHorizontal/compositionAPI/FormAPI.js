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
  const updateDataKeyByIdFromFilter = toRef(props, "updateDataKeyByIdFromFilter");

  const LABEL_CLASS = "a_column a_column_12_touch a_column_3_fullhd a_column_3_widescreen a_column_3_desktop";
  const CLASS_COLUMNS = "a_columns a_columns_count_12 a_columns_gab_x_2 a_columns_gab_y_2 a_columns_gab_y_1_touch";
  const CLASS_COLUMN_DEFAULT = "a_filters__form_element a_column a_column_12_touch a_column_9_fullhd a_column_9_widescreen a_column_9_desktop";
  const TYPES_WITH_DATA = ["select", "multiselect", "radio", "checkbox", "group", "fieldset"];

  const updateDataLocal = ({ dataKeyByKeyId, item, filter }) => {
    let filterId = filter.id;
    if (item) {
      filterId = item.id;
    }
    updateDataKeyByIdFromFilter.value({
      filterId: filterId,
      dataKeyByKeyId,
    });
  };

  const dataForForm = computed(() => {
    const DATA = [];
    forEach(filtersGroup.value.alwaysVisible, filter => {
      const FILTER = cloneDeep(filter);
      FILTER.labelClass = LABEL_CLASS;
      FILTER.classColumn = CLASS_COLUMN_DEFAULT;
      if (TYPES_WITH_DATA.indexOf(filter.type) !== -1) {
        FILTER.onUpdateData = ({ dataKeyByKeyId, item }) => updateDataLocal({ dataKeyByKeyId, item, filter });
      }

      DATA.push({
        type: "group",
        id: `group_${ filter.id }`,
        classColumns: CLASS_COLUMNS,
        children: [
          FILTER
        ],
      });
    });

    forEach(filtersVisible.value, filter => {
      const FILTER = cloneDeep(filter);
      FILTER.labelClass = LABEL_CLASS;
      FILTER.classColumn = `${ CLASS_COLUMN_DEFAULT }  a_d_flex a_align_items_center`;
      FILTER.slotAppend = "groupAppend";
      FILTER.class = "a_width_100";
      if (TYPES_WITH_DATA.indexOf(filter.type) !== -1) {
        FILTER.onUpdateData = ({ dataKeyByKeyId, item }) => updateDataLocal({ dataKeyByKeyId, item, filter });
      }

      DATA.push({
        type: "group",
        id: `group_${ filter.id }`,
        classColumns: CLASS_COLUMNS,
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
