import {
  computed,
  reactive,
} from "vue";
import {
  describe,
  expect,
  it,
  jest,
} from "@jest/globals";
import {
  mount,
} from "@vue/test-utils";

import AIcon from "../../AIcon/AIcon";
import ATableFormCellDnd from "../ATableFormCellDnd/ATableFormCellDnd";

import DragAndDropAPI from "../compositionAPI/DragAndDropAPI";

import LockFill from "aloha-svg/dist/js/bootstrap/LockFill";

jest.mock("../../AButton/AButton", () => {
  const {
    h,
  } = require("vue");

  return {
    __esModule: true,
    default: {
      name: "AButton",
      inheritAttrs: false,
      props: {
        disabled: Boolean,
        textScreenReader: String,
      },
      render() {
        return h("button", {
          disabled: this.disabled,
        }, this.textScreenReader);
      },
    },
  };
});
jest.mock("aloha-svg/dist/js/bootstrap/ChevronDown", () => ({
  __esModule: true,
  default: "ChevronDown",
}));
jest.mock("aloha-svg/dist/js/bootstrap/ChevronUp", () => ({
  __esModule: true,
  default: "ChevronUp",
}));
jest.mock("aloha-svg/dist/js/bootstrap/GripVertical", () => ({
  __esModule: true,
  default: "GripVertical",
}));
jest.mock("aloha-svg/dist/js/bootstrap/LockFill", () => ({
  __esModule: true,
  default: "LockFill",
}));

describe("ATableForm DragAndDropAPI", () => {
  it("prevents dragging, dropping on, and moving across a disabled row", () => {
    const emit = jest.fn();
    const props = reactive({
      actionsDisabledCallback: {
        dnd: ({ row }) => row.dndDisabled,
      },
      focusAfterMove: false,
      id: "table",
      isDragAndDrop: true,
      rows: [
        { id: 1 },
        { dndDisabled: true, id: 2 },
        { id: 3 },
        { id: 4 },
      ],
    });
    const {
      draggedRowIndex,
      isDndDisabledForRow,
      moveRowDown,
      onDragover,
      onDragstart,
      onDrop,
    } = DragAndDropAPI(props, { emit }, {
      isDndDisabled: computed(() => false),
    });

    expect(isDndDisabledForRow(0)).toBe(false);
    expect(isDndDisabledForRow(1)).toBe(true);

    onDragstart({}, 1);
    expect(draggedRowIndex.value).toBeUndefined();

    onDragstart({}, 0);
    expect(draggedRowIndex.value).toBe(0);

    const preventDefaultDisabled = jest.fn();
    onDragover({
      preventDefault: preventDefaultDisabled,
    }, 1);
    onDrop({
      preventDefault: preventDefaultDisabled,
    }, 1);

    expect(preventDefaultDisabled).not.toHaveBeenCalled();
    expect(emit).not.toHaveBeenCalled();

    const preventDefaultAfterLock = jest.fn();
    onDragover({
      currentTarget: undefined,
      preventDefault: preventDefaultAfterLock,
    }, 2);
    onDrop({
      preventDefault: preventDefaultAfterLock,
    }, 2);

    expect(preventDefaultAfterLock).toHaveBeenCalledTimes(2);
    expect(emit).not.toHaveBeenCalled();

    moveRowDown(2);

    expect(emit).toHaveBeenCalledWith("updateRows", expect.objectContaining({
      fromIndex: 2,
      toIndex: 3,
      trigger: "moveRowDown",
    }));
  });
});

describe("ATableFormCellDnd", () => {
  it("shows a lock and disables move buttons for a disabled row", () => {
    const wrapper = mount(ATableFormCellDnd, {
      props: {
        canMoveRowDown: () => true,
        canMoveRowUp: () => true,
        id: "table_1",
        isDndDisabled: true,
        isDragAndDrop: true,
        moveRowDown: jest.fn(),
        moveRowUp: jest.fn(),
        onDragend: jest.fn(),
        onDragstart: jest.fn(),
        rowIndex: 1,
        texts: {
          reorderDisabled: "Row reordering disabled",
          reorderDown: "Move row down",
          reorderHandle: "Drag row to reorder",
          reorderUp: "Move row up",
        },
        widths: {
          dndColumn: 56,
        },
      },
    });

    expect(wrapper.findComponent(AIcon).props("icon")).toBe(LockFill);
    expect(wrapper.find(".a_table_form__reorder_handle").attributes("draggable")).toBe("false");
    expect(wrapper.find(".a_table_form__reorder_handle_disabled").exists()).toBe(true);
    expect(wrapper.text()).toContain("Row reordering disabled");
    expect(wrapper.findAll("button")).toHaveLength(2);
    expect(wrapper.findAll("button").every(button => button.attributes("disabled") !== undefined)).toBe(true);
  });
});
