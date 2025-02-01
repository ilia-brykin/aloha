import {
  describe,
  expect,
  it,
} from "@jest/globals";
import {
  computed,
  ref,
} from "vue";

import FormAPI from "../compositionAPI/FormAPI";

import {
  keyBy,
} from "lodash-es";

describe("ATableSortingAdditional FormAPI", () => {
  it("initDataForForm correctly initializes dataForForm", () => {
    const unappliedModelSort = ref([{ sortId: "1", sortMode: "asc" }]);
    const columnsAll = computed(() => {
      return [
        { label: "Column 1", sortId: "1" },
      ];
    });
    const columnsAllKeyBySortId = computed(() => {
      return {
        1: { label: "Column 1", sortId: "1" },
      };
    });

    const {
      dataForForm,
      initDataForForm,
    } = FormAPI({}, {
      columnsAll,
      columnsAllKeyBySortId,
      unappliedModelSort,
    });

    initDataForForm();

    expect(dataForForm.value).toHaveLength(1);
    expect(dataForForm.value[0].children).toHaveLength(2); // Check that there are two elements: for sortId and sortMode
    expect(dataForForm.value[0].children[0].data[0].label).toBe("Column 1"); // Checking that the first data element contains the correct label
  });

  it("initializes dataForForm with correct fieldset and column data", () => {
    const unappliedModelSort = ref([
      { sortId: "1", sortMode: "asc" },
      { sortId: "2", sortMode: "asc" },
      { sortId: undefined, sortMode: "asc" },
    ]);
    const columnsAll = computed(() => {
      return [
        { label: "Column 1", sortId: "1" },
        { label: "Column 2", sortId: "2" },
        { label: "Column 3", sortId: "3" },
        { label: "Column 4", sortId: "4" },
      ];
    });
    const columnsAllKeyBySortId = computed(() => {
      return keyBy(columnsAll.value, "sortId");
    });

    const {
      dataForForm,
      initDataForForm,
    } = FormAPI({}, {
      columnsAll,
      columnsAllKeyBySortId,
      unappliedModelSort,
    });

    initDataForForm();

    expect(dataForForm.value).toHaveLength(3); // 3 fieldset
    expect(dataForForm.value[0].label).toBe("_A_TABLE_SORT_ADDITIONAL_SORT_BY_");
    expect(dataForForm.value[1].label).toBe("_A_TABLE_SORT_ADDITIONAL_THEN_BY_");
    expect(dataForForm.value[2].label).toBe("_A_TABLE_SORT_ADDITIONAL_THEN_BY_");
    expect(dataForForm.value[0].children[0].data).toStrictEqual([
      { label: "Column 1", sortId: "1" },
      { label: "Column 3", sortId: "3" },
      { label: "Column 4", sortId: "4" },
    ]);
    expect(dataForForm.value[1].children[0].data).toStrictEqual([
      { label: "Column 2", sortId: "2" },
      { label: "Column 3", sortId: "3" },
      { label: "Column 4", sortId: "4" },
    ]);
    expect(dataForForm.value[2].children[0].data).toStrictEqual([
      { label: "Column 3", sortId: "3" },
      { label: "Column 4", sortId: "4" },
    ]);
  });
});
