import {
  h,
  nextTick,
  ref,
} from "vue";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import {
  mount,
} from "@vue/test-utils";
import {
  AModal,
} from "../../index";

import {
  setI18n,
  setLanguage,
  updateTranslation,
} from "../../ATranslation/compositionAPI/ATranslationAPI";

const wrappers = [];

const flush = async() => {
  await nextTick();
  await nextTick();
};

// a page with a button that opens the modal; the modal is rendered with v-if
const mountPage = ({ props = {}, slots = {} } = {}) => {
  const isOpen = ref(false);
  const close = vi.fn(() => {
    isOpen.value = false;
  });
  const wrapper = mount({
    setup: () => ({ isOpen, close }),
    render() {
      return h("div", { class: "page" }, [
        h("button", { id: "opener", type: "button", onClick: () => (this.isOpen = true) }, "Open"),
        this.isOpen && h(AModal, { id: "modal", headerText: "Title", close: this.close, ...props }, slots),
      ]);
    },
  }, { attachTo: document.body });
  wrappers.push(wrapper);
  return { wrapper, isOpen, close };
};

const modalEl = () => document.getElementById("modal");
const openModal = async isOpen => {
  document.getElementById("opener").focus();
  isOpen.value = true;
  await flush();
  vi.runOnlyPendingTimers();
};

describe("AModal", () => {
  beforeEach(async() => {
    vi.useFakeTimers();
    setI18n({ en: { _DIALOG_: "Settings dialog" } });
    setLanguage("en");
    updateTranslation();
    await nextTick();
  });

  afterEach(async() => {
    wrappers.splice(0).forEach(wrapper => wrapper.unmount());
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
    setI18n({});
    setLanguage("de");
    updateTranslation();
    await nextTick();
  });

  describe("attributes", () => {
    it("is a modal dialog with aria-modal and the header as name", async() => {
      const { isOpen } = mountPage();
      await openModal(isOpen);

      expect(modalEl().getAttribute("role")).toBe("dialog");
      expect(modalEl().getAttribute("aria-modal")).toBe("true");
      const HEADER = document.getElementById(modalEl().getAttribute("aria-labelledby"));
      expect(HEADER.textContent).toContain("Title");
    });

    it("uses aria-label (translated) when the header is hidden", async() => {
      const { isOpen } = mountPage({ props: { hideHeader: true, ariaLabel: "_DIALOG_" } });
      await openModal(isOpen);

      expect(modalEl().hasAttribute("aria-labelledby")).toBe(false);
      expect(modalEl().getAttribute("aria-label")).toBe("Settings dialog");
    });

    it("names the footer buttons with their visible text (WCAG 2.5.3)", async() => {
      const { isOpen } = mountPage({ props: { save: () => {}, saveButtonText: "Delete", closeButtonText: "Cancel" } });
      await openModal(isOpen);

      const [SAVE, CANCEL] = modalEl().querySelectorAll(".a_modal_footer button");
      expect(SAVE.textContent.trim()).toBe("Delete");
      expect(SAVE.querySelector("[aria-hidden=\"true\"]")).toBeNull();
      expect(CANCEL.textContent.trim()).toBe("Cancel");
      expect(CANCEL.querySelector("[aria-hidden=\"true\"]")).toBeNull();
    });

    it("uses the screen reader text of a footer button only when it is set", async() => {
      const { isOpen } = mountPage({ props: { save: () => {}, saveButtonText: "OK", saveButtonTextScreenReader: "Save the settings" } });
      await openModal(isOpen);

      const SAVE = modalEl().querySelector(".a_modal_footer button");
      expect(SAVE.textContent).toContain("Save the settings");
      expect(SAVE.querySelector("[aria-hidden=\"true\"]").textContent).toBe("OK");
    });
  });

  describe("focus", () => {
    const BODY = { modalBody: () => [h("input", { id: "field_1" }), h("input", { id: "field_2" })] };

    it("focuses the first element by default", async() => {
      const { isOpen } = mountPage({ slots: BODY });
      await openModal(isOpen);

      expect(modalEl().contains(document.activeElement)).toBe(true);
    });

    it("focuses the element of focus-start-id", async() => {
      const { isOpen } = mountPage({ props: { focusStartId: "field_2" }, slots: BODY });
      await openModal(isOpen);

      expect(document.activeElement.id).toBe("field_2");
    });

    it("does not move the focus with use-focus-on-start false", async() => {
      const { isOpen } = mountPage({ props: { useFocusOnStart: false }, slots: BODY });
      await openModal(isOpen);

      expect(document.activeElement.id).toBe("opener");
    });

    it("gives the focus back to the element that opened the modal", async() => {
      const { isOpen } = mountPage({ slots: BODY });
      await openModal(isOpen);
      expect(document.activeElement.id).not.toBe("opener");

      isOpen.value = false;
      await flush();
      vi.advanceTimersByTime(300);
      expect(document.activeElement.id).toBe("opener");
    });

    it("prefers selector-close-ids and falls back to the opener when it is not found", async() => {
      const OTHER = document.createElement("button");
      OTHER.id = "other";
      document.body.appendChild(OTHER);

      const first = mountPage({ props: { selectorCloseIds: "other" }, slots: BODY });
      await openModal(first.isOpen);
      first.isOpen.value = false;
      await flush();
      vi.advanceTimersByTime(300);
      expect(document.activeElement.id).toBe("other");
      wrappers.splice(0).forEach(wrapper => wrapper.unmount());

      const second = mountPage({ props: { selectorCloseIds: "not_there" }, slots: BODY });
      await openModal(second.isOpen);
      second.isOpen.value = false;
      await flush();
      vi.advanceTimersByTime(300);
      expect(document.activeElement.id).toBe("opener");
      OTHER.remove();
    });
  });

  describe("nested modals", () => {
    const mountNested = () => {
      const isInnerOpen = ref(false);
      const closeOuter = vi.fn();
      const closeInner = vi.fn(() => {
        isInnerOpen.value = false;
      });
      const wrapper = mount({
        render: () => h("div", [
          h(AModal, { id: "outer", headerText: "Outer", close: closeOuter }, {
            modalBody: () => h("button", { id: "open_inner", onClick: () => (isInnerOpen.value = true) }, "Open inner"),
          }),
          isInnerOpen.value && h(AModal, { id: "inner", headerText: "Inner", close: closeInner }),
        ]),
      }, { attachTo: document.body });
      wrappers.push(wrapper);
      return { closeInner, closeOuter, isInnerOpen };
    };

    it("closes only the top modal with Escape", async() => {
      const { closeInner, closeOuter, isInnerOpen } = mountNested();
      await flush();
      isInnerOpen.value = true;
      await flush();

      document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
      expect(closeInner).toHaveBeenCalledTimes(1);
      expect(closeOuter).not.toHaveBeenCalled();

      await flush();
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
      expect(closeOuter).toHaveBeenCalledTimes(1);
    });

    it("keeps the body class while the outer modal is open and puts the inner modal above", async() => {
      const { isInnerOpen } = mountNested();
      await flush();
      isInnerOpen.value = true;
      await flush();

      expect(document.getElementById("inner").style.getPropertyValue("--a_modal_z_index")).toBe("1056");
      isInnerOpen.value = false;
      await flush();
      expect(document.body.classList.contains("a_modal_open")).toBe(true);
    });

    it("makes the outer modal inert while the inner modal is open", async() => {
      const { isInnerOpen } = mountNested();
      await flush();
      const OUTER_WRAPPER = document.getElementById("outer").parentElement;
      expect(OUTER_WRAPPER.hasAttribute("inert")).toBe(false);

      isInnerOpen.value = true;
      await flush();
      expect(OUTER_WRAPPER.hasAttribute("inert")).toBe(true);

      isInnerOpen.value = false;
      await flush();
      expect(OUTER_WRAPPER.hasAttribute("inert")).toBe(false);
    });
  });

  describe("inert", () => {
    it.each([
      "a_popup_container",
      "a_select_container",
      "a_notification_parent",
      "a_datepicker__popup",
      "a_color_picker__popup",
    ])("makes the page inert while open, but not %s", async className => {
      const POPUP = document.createElement("div");
      POPUP.className = className;
      document.body.appendChild(POPUP);
      const { wrapper, isOpen } = mountPage();
      const PAGE_ROOT = wrapper.element.parentElement === document.body ? wrapper.element : wrapper.element.parentElement;

      await openModal(isOpen);
      expect(PAGE_ROOT.hasAttribute("inert")).toBe(true);
      expect(POPUP.hasAttribute("inert")).toBe(false);
      expect(document.body.classList.contains("a_modal_open")).toBe(true);

      isOpen.value = false;
      await flush();
      expect(PAGE_ROOT.hasAttribute("inert")).toBe(false);
      expect(document.body.classList.contains("a_modal_open")).toBe(false);
      POPUP.remove();
    });

    it("does not set inert with use-inert false", async() => {
      const { wrapper, isOpen } = mountPage({ props: { useInert: false } });
      const PAGE_ROOT = wrapper.element.parentElement === document.body ? wrapper.element : wrapper.element.parentElement;

      await openModal(isOpen);
      expect(PAGE_ROOT.hasAttribute("inert")).toBe(false);
    });
  });

  describe("close-on-backdrop", () => {
    const pointer = (target, type) => target.dispatchEvent(new MouseEvent(type, { bubbles: true }));

    it("closes with a click outside of the dialog", async() => {
      const { isOpen, close } = mountPage({ props: { closeOnBackdrop: true } });
      await openModal(isOpen);

      pointer(modalEl(), "mousedown");
      pointer(modalEl(), "click");
      expect(close).toHaveBeenCalledTimes(1);
    });

    it("does not close with a click in the dialog or when the mouse went down in the dialog", async() => {
      const { isOpen, close } = mountPage({ props: { closeOnBackdrop: true } });
      await openModal(isOpen);
      const DIALOG = modalEl().querySelector(".a_modal_dialog");

      pointer(DIALOG, "mousedown");
      pointer(DIALOG, "click");
      pointer(DIALOG, "mousedown");
      pointer(modalEl(), "click");
      expect(close).not.toHaveBeenCalled();
    });

    it("does not close without close-on-backdrop", async() => {
      const { isOpen, close } = mountPage();
      await openModal(isOpen);

      pointer(modalEl(), "mousedown");
      pointer(modalEl(), "click");
      expect(close).not.toHaveBeenCalled();
    });
  });
});
