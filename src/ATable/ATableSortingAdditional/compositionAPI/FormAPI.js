import {
  computed,
  ref,
} from "vue";

import {
  cloneDeep,
  filter,
  find,
  forEach,
} from "lodash-es";

export default function FormAPI(props, {
  columnsAll = computed(() => []),
  columnsAllKeyBySortId = computed(() => ({})),
  unappliedModelSort = ref([]),
}) {
  const dataForForm = ref([]);
  const DATA_MODES = [
    {
      label: "_A_TABLE_SORT_ADDITIONAL_DIRECTION_ASC_",
      id: "asc",
    },
    {
      label: "_A_TABLE_SORT_ADDITIONAL_DIRECTION_DESC_",
      id: "desc",
    },
  ];

  const columnsAllNotSelected = computed(() => {
    return filter(columnsAll.value, column => {
      return !find(unappliedModelSort.value, ["sortId", column.sortId]);
    });
  });

  const initDataForForm = () => {
    const DATA = [];
    forEach(unappliedModelSort.value, ({ sortId }, index) => {
      const isFirst = index === 0;
      const COLUMNS_FILTERED = cloneDeep(columnsAllNotSelected.value);
      if (sortId && columnsAllKeyBySortId.value[sortId]) {
        COLUMNS_FILTERED.unshift(columnsAllKeyBySortId.value[sortId]);
      }

      DATA.push({
        type: "fieldset",
        id: `group_${ sortId }`,
        label: isFirst ?
          "_A_TABLE_SORT_ADDITIONAL_SORT_BY_" :
          "_A_TABLE_SORT_ADDITIONAL_THEN_BY_",
        children: [
          {
            id: `[${ index }].sortId`,
            type: "select",
            classColumn: "a_column a_column_12_touch a_column_7_fullhd a_column_7_widescreen a_column_7_desktop",
            deselectable: false,
            data: COLUMNS_FILTERED,
            keyId: "sortId",
            keyLabel: "label",
            translateData: true,
            search: true,
            label: "_A_TABLE_SORT_ADDITIONAL_COLUMN_",
          },
          {
            id: `[${ index }].sortMode`,
            type: "select",
            classColumn: "a_column a_column_12_touch a_column_5_fullhd a_column_5_widescreen a_column_5_desktop a_d_flex a_align_items_center",
            class: "a_width_100",
            deselectable: false,
            data: DATA_MODES,
            keyId: "id",
            keyLabel: "label",
            translateData: true,
            search: false,
            label: "_A_TABLE_SORT_ADDITIONAL_DIRECTION_",
            slotAppend: "slotAppend",
            additionalProps: {
              index,
            },
          },
        ],
      });
    });

    dataForForm.value = DATA;
  };

  return {
    dataForForm,
    initDataForForm,
  };
}
