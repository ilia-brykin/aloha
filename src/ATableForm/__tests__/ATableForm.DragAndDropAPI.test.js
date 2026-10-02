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

const GripVertical = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
  <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg>`;
const LockFill = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"/>
</svg>`;


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
