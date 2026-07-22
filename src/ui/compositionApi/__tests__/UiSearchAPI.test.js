import {
  computed,
} from "vue";
import {
  describe,
  expect,
  it,
} from "@jest/globals";

import UIDataGroupAPI from "../UIDataGroupAPI";
import UiSearchAPI from "../UiSearchAPI";

import {
  AKeyId,
  AKeyLabel,
} from "../../../const/AKeys";

describe("UiSearchAPI", () => {
  it("includes grouped dataExtra in item and group search", () => {
    const props = {
      keyGroup: "group",
      keyGroupLabelCallback: undefined,
      searchInGroup: true,
      searchOutside: false,
      searchTextInHtml: false,
      searchTimeout: 0,
      sortOrderGroup: undefined,
    };
    const dataExtra = computed(() => [
      {
        [AKeyId]: "extra_1",
        [AKeyLabel]: "Extra 1",
        group: "Recommended",
      },
      {
        [AKeyId]: "extra_2",
        [AKeyLabel]: "Extra 2",
        group: "Other",
      },
    ]);
    const {
      groupsForLever: groupsForLeverExtra,
      hasKeyGroup,
      keyGroupArray,
    } = UIDataGroupAPI(props, {
      data: dataExtra,
    });
    const {
      hasNotElementsWithSearch,
      searchingElementsExtra,
      searchingGroups,
      searchingGroupsWithSearchInGroup,
      updateModelSearch,
    } = UiSearchAPI(props, { emit: () => {} }, {
      dataExtra,
      groupsForLeverExtra,
      hasKeyGroup,
      keyGroupArray,
    });

    updateModelSearch("Extra 1");

    expect(searchingElementsExtra.value).toEqual({ extra_1: true });
    expect(searchingGroups.value).toEqual({ Recommended: true });

    updateModelSearch("Recommended");

    expect(searchingGroupsWithSearchInGroup.value).toEqual({ Recommended: true });
    expect(hasNotElementsWithSearch.value).toBe(false);
  });
});
