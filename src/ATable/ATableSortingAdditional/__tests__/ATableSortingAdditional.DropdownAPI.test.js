import {
  computed,
} from "vue";
import {
  describe,
  expect,
  it,
} from "@jest/globals";

import DropdownAPI from "../compositionAPI/DropdownAPI";

describe("ATableSortingAdditional DropdownAPI", () => {
  it("hides the dropdown when there are no columns available", () => {
    const columnsAll = computed(() => {
      return [];
    });

    const {
      isDropdownVisible,
    } = DropdownAPI({}, {
      columnsAll,
    });

    expect(isDropdownVisible.value).toBe(false);
  });

  it("shows the dropdown when there are available columns", () => {
    const columnsAll = computed(() => {
      return [
        { label: "Column 1", sortId: "1" },
        { label: "Column 2", sortId: "2" },
        { label: "Column 3", sortId: "3" },
        { label: "Column 4", sortId: "4" },
      ];
    });

    const {
      isDropdownVisible,
    } = DropdownAPI({}, {
      columnsAll,
    });

    expect(isDropdownVisible.value).toBe(true);
  });
});
