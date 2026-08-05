import {
  ref,
} from "vue";
import {
  describe,
  expect,
  it,
} from "@jest/globals";

import SelectedVisibleAPI from "../compositionAPI/SelectedVisibleAPI";

import {
  AKeyId,
} from "../../../const/AKeys";

const item = (id, label, extra = {}) => ({
  [AKeyId]: id,
  _a_label: label,
  ...extra,
});

describe("ASelect SelectedVisibleAPI", () => {
  it("filters selected values using matches from all data sources", () => {
    const dataSelected = ref([
      item(1, "Apple"),
      item(2, "Banana"),
      item(3, "Carrot"),
    ]);

    const {
      dataSelectedVisible,
    } = SelectedVisibleAPI({
      dataSelected,
      searching: ref(true),
      searchingElements: ref({ 2: true }),
      searchingElementsExtra: ref({ 3: true }),
    });

    expect(dataSelectedVisible.value.map(currentItem => currentItem[AKeyId]))
      .toEqual([2, 3]);
  });

  it("includes selected values when their nested group matches", () => {
    const dataSelected = ref([
      item(1, "Apple", { category: "Food", group: "Fruit" }),
      item(2, "Carrot", { category: "Food", group: "Vegetables" }),
    ]);

    const {
      dataSelectedVisible,
      searchingGroupsVisible,
    } = SelectedVisibleAPI({
      dataSelected,
      keyGroupArray: ref(["category", "group"]),
      searching: ref(true),
      searchingGroupsWithSearchInGroup: ref({ Food_Fruit: true }),
    });

    expect(dataSelectedVisible.value.map(currentItem => currentItem[AKeyId]))
      .toEqual([1]);
    expect(searchingGroupsVisible.value).toEqual({
      Food: true,
      Food_Fruit: true,
    });
  });

  it("does not expose a group matched only in another section", () => {
    const dataSelected = ref([
      item(2, "Banana", { group: "Fruit" }),
    ]);

    const {
      dataSelectedVisible,
      searchingGroupsVisible,
    } = SelectedVisibleAPI({
      dataSelected,
      keyGroupArray: ref(["group"]),
      searching: ref(true),
      searchingElements: ref({ 1: true }),
    });

    expect(dataSelectedVisible.value).toEqual([]);
    expect(searchingGroupsVisible.value).toEqual({});
  });

  it("returns all selected values when search is inactive", () => {
    const dataSelected = ref([item(1, "Apple"), item(2, "Banana")]);

    const {
      dataSelectedVisible,
    } = SelectedVisibleAPI({
      dataSelected,
      searching: ref(false),
    });

    expect(dataSelectedVisible.value).toBe(dataSelected.value);
  });
});
