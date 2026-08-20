import {
  beforeAll,
  describe,
  expect,
  it,
} from "@jest/globals";

import {
  mockVueInject,
} from "../../../utilsTests/utilsTests";

describe("ATable row IDs", () => {
  let AttributesAPI;
  let RowActionsAPI;

  beforeAll(async() => {
    mockVueInject({
      columnActionsOnePlusDropdownOptions: {},
      rowActions: [],
      tableId: "aloha",
    });

    AttributesAPI = (await import("../ATableTr/compositionAPI/AttributesAPI")).default;
    RowActionsAPI = (await import("../compositionAPI/RowActionsAPI")).default;
  });

  it("uses the complete tree index path for a child row ID", () => {
    const {
      rowHtmlId,
    } = AttributesAPI({
      rowIndex: 1,
      rowIndexPath: "0_1",
    }, {});

    expect(rowHtmlId.value).toBe("aloha_0_1");
  });

  it("uses the complete tree index path for a child actions ID", () => {
    const {
      buttonActionsId,
    } = RowActionsAPI({
      row: {},
      rowIndex: 1,
      rowIndexPath: "0_1",
    });

    expect(buttonActionsId.value).toBe("aloha_action_0_1");
  });

  it("keeps the existing ID format when no tree index path is provided", () => {
    const {
      rowHtmlId,
    } = AttributesAPI({
      rowIndex: 2,
    }, {});
    const {
      buttonActionsId,
    } = RowActionsAPI({
      row: {},
      rowIndex: 2,
    });

    expect(rowHtmlId.value).toBe("aloha_2");
    expect(buttonActionsId.value).toBe("aloha_action_2");
  });
});
