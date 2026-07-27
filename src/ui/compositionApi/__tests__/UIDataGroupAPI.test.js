import {
  computed,
  nextTick,
} from "vue";
import {
  beforeAll,
  describe,
  expect,
  it,
} from "@jest/globals";

import UIDataGroupAPI from "../UIDataGroupAPI";
import {
  setI18n,
  setLanguage,
} from "../../../ATranslation/compositionAPI/ATranslationAPI";

import {
  AKeyId,
} from "../../../const/AKeys";

describe("UIDataGroupAPI", () => {
  beforeAll(async() => {
    setI18n({
      uiDataGroupApiTest: {
        _GROUP_: "Translated group",
        _GROUP_FROM_CALLBACK_: "Translated callback group",
      },
    });
    setLanguage("uiDataGroupApiTest");
    await nextTick();
  });

  it("translates a group label without changing its key", () => {
    const props = {
      alwaysTranslate: true,
      keyGroup: "group",
      keyGroupLabelCallback: undefined,
      searchTextInHtml: false,
      sortOrderGroup: undefined,
      translateGroup: true,
    };
    const data = computed(() => [{
      [AKeyId]: "item_1",
      group: "_GROUP_",
    }]);

    const {
      groupsForLever,
    } = UIDataGroupAPI(props, {
      data,
    });

    expect(groupsForLever.value[0][0]).toEqual(expect.objectContaining({
      allGroupKeys: "_GROUP_",
      groupKey: "_GROUP_",
      groupLabel: "Translated group",
    }));
  });

  it("does not translate a group label when translateGroup is false", () => {
    const props = {
      alwaysTranslate: true,
      keyGroup: "group",
      keyGroupLabelCallback: undefined,
      searchTextInHtml: false,
      sortOrderGroup: undefined,
      translateGroup: false,
    };
    const data = computed(() => [{
      [AKeyId]: "item_1",
      group: "_GROUP_",
    }]);

    const {
      groupsForLever,
    } = UIDataGroupAPI(props, {
      data,
    });

    expect(groupsForLever.value[0][0].groupLabel).toBe("_GROUP_");
  });

  it("translates a group label returned by keyGroupLabelCallback", () => {
    const props = {
      alwaysTranslate: true,
      keyGroup: "group",
      keyGroupLabelCallback: () => "_GROUP_FROM_CALLBACK_",
      searchTextInHtml: false,
      sortOrderGroup: undefined,
      translateGroup: true,
    };
    const data = computed(() => [{
      [AKeyId]: "item_1",
      group: "group_1",
    }]);

    const {
      groupsForLever,
    } = UIDataGroupAPI(props, {
      data,
    });

    expect(groupsForLever.value[0][0].groupLabel).toBe("Translated callback group");
  });
});
