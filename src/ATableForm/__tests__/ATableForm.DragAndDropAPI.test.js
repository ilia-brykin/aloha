import {
  computed,
  reactive,
} from "vue";
import {
  describe,
  expect,
  it,
  vi,
} from "vitest";
import {
  mount,
} from "@vue/test-utils";

import AIcon from "../../AIcon/AIcon";
import ATableFormCellDnd from "../ATableFormCellDnd/ATableFormCellDnd";

import DragAndDropAPI from "../compositionAPI/DragAndDropAPI";

import GripVertical from "aloha-svg/dist/js/bootstrap/GripVertical";
import LockFill from "aloha-svg/dist/js/bootstrap/LockFill";

vi.mock("../../AButton/AButton", async() => {
  const {
    h,
  } = await vi.importActual("vue");

  return {
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
vi.mock("aloha-svg/dist/js/bootstrap/ChevronDown", () => ({
  default: "ChevronDown",
}));
vi.mock("aloha-svg/dist/js/bootstrap/ChevronUp", () => ({
  default: "ChevronUp",
}));
vi.mock("aloha-svg/dist/js/bootstrap/GripVertical", () => ({
  default: "GripVertical",
}));
vi.mock("aloha-svg/dist/js/bootstrap/LockFill", () => ({
  default: "LockFill",
}));

describe("ATableForm DragAndDropAPI", () => {
  it("temporarily disables DND without marking rows as locked", () => {
    const props = reactive({
      actionsDisabledCallback: {},
      focusAfterMove: false,
      id: "table",
      isDragAndDrop: true,
      rows: [{ id: 1 }],
    });
    const {
      isDndDisabledForRow,
      isDndLockedForRow,
    } = DragAndDropAPI(props, { emit: vi.fn() }, {
      isDndDisabled: computed(() => true),
    });

    expect(isDndDisabledForRow(0)).toBe(true);
    expect(isDndLockedForRow(0)).toBe(false);
  });

  it("prevents dragging, dropping on, and moving across a disabled row", () => {
    const emit = vi.fn();
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
      isDndLockedForRow,
      moveRowDown,
      onDragover,
      onDragstart,
      onDrop,
    } = DragAndDropAPI(props, { emit }, {
      isDndDisabled: computed(() => false),
    });

    expect(isDndDisabledForRow(0)).toBe(false);
    expect(isDndDisabledForRow(1)).toBe(true);
    expect(isDndLockedForRow(0)).toBe(false);
    expect(isDndLockedForRow(1)).toBe(true);

    onDragstart({}, 1);
    expect(draggedRowIndex.value).toBeUndefined();

    onDragstart({}, 0);
    expect(draggedRowIndex.value).toBe(0);

    const preventDefaultDisabled = vi.fn();
    onDragover({
      preventDefault: preventDefaultDisabled,
    }, 1);
    onDrop({
      preventDefault: preventDefaultDisabled,
    }, 1);

    expect(preventDefaultDisabled).not.toHaveBeenCalled();
    expect(emit).not.toHaveBeenCalled();

    const preventDefaultAfterLock = vi.fn();
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
        isDndLocked: true,
        isDragAndDrop: true,
        moveRowDown: vi.fn(),
        moveRowUp: vi.fn(),
        onDragend: vi.fn(),
        onDragstart: vi.fn(),
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

  it("keeps the drag handle icon while DND is temporarily disabled", () => {
    const wrapper = mount(ATableFormCellDnd, {
      props: {
        canMoveRowDown: () => true,
        canMoveRowUp: () => true,
        id: "table_1",
        isDndDisabled: true,
        isDragAndDrop: true,
        moveRowDown: vi.fn(),
        moveRowUp: vi.fn(),
        onDragend: vi.fn(),
        onDragstart: vi.fn(),
        rowIndex: 1,
        widths: {
          dndColumn: 56,
        },
      },
    });

    expect(wrapper.findComponent(AIcon).props("icon")).toBe(GripVertical);
    expect(wrapper.find(".a_table_form__reorder_handle").attributes("draggable")).toBe("false");
    expect(wrapper.findAll("button").every(button => button.attributes("disabled") !== undefined)).toBe(true);
  });
});
