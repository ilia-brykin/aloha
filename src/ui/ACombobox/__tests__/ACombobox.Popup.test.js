import {
  afterEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import {
  flushPromises,
  mount,
} from "@vue/test-utils";
import {
  ACombobox,
} from "../../../index";

import {
  isMobileWidth,
} from "../../../compositionAPI/AMobileAPI";

const CITIES = [
  { id: 1, label: "Berlin" },
  { id: 2, label: "Bern" },
  { id: 3, label: "Hamburg" },
];

const WRAPPERS = [];
const mountCombobox = (props = {}) => {
  const wrapper = mount(ACombobox, {
    props: {
      id: "city",
      label: "City",
      data: CITIES,
      modelValue: "",
      "onUpdate:modelValue": value => wrapper.setProps({ modelValue: value }),
      ...props,
    },
    attachTo: document.body,
  });
  WRAPPERS.push(wrapper);
  return wrapper;
};
const getPopup = () => document.querySelector(".a_combobox__popup");
const type = async(wrapper, text) => {
  await wrapper.find("input").setValue(text);
  await flushPromises();
};

afterEach(() => {
  // before the shared isMobileWidth changes: no update of a component without DOM
  WRAPPERS.splice(0).forEach(wrapper => wrapper.unmount());
  isMobileWidth.value = undefined;
  delete window.visualViewport;
  document.body.innerHTML = "";
});

describe("ACombobox: in-body", () => {
  it("the list is in the container in body, aria-controls finds it, the position comes from floating-ui", async() => {
    const wrapper = mountCombobox();
    await flushPromises();
    await type(wrapper, "ber");
    await flushPromises();
    const POPUP = getPopup();

    expect(document.getElementById("a_tooltip_container").contains(POPUP)).toBe(true);
    expect(wrapper.element.contains(POPUP)).toBe(false);
    expect(POPUP.classList.contains("a_combobox__popup_in_body")).toBe(true);
    expect(document.getElementById(wrapper.find("input").attributes("aria-controls")).getAttribute("role")).toBe("listbox");
    expect(document.querySelectorAll("#a_tooltip_container [role='option']")).toHaveLength(2);
    // size: as wide as the field, top / left from computePosition
    expect(POPUP.style.width).not.toBe("");
    expect(POPUP.style.top).not.toBe("");
  });

  it("a mousedown in the list keeps the focus in the input, a click takes the option", async() => {
    const wrapper = mountCombobox();
    await flushPromises();
    await type(wrapper, "ham");

    const DOWN = new MouseEvent("mousedown", { bubbles: true, cancelable: true });
    getPopup().dispatchEvent(DOWN);
    expect(DOWN.defaultPrevented).toBe(true);
    document.querySelector("[role='option']").click();
    await flushPromises();
    expect(wrapper.props("modelValue")).toBe("Hamburg");
  });

  it("in-body false: the list is in the field without styles of the position", async() => {
    const wrapper = mountCombobox({ inBody: false });
    await flushPromises();
    await type(wrapper, "ber");

    expect(wrapper.element.contains(getPopup())).toBe(true);
    expect(getPopup().style.top).toBe("");
  });
});

describe("ACombobox: bottom sheet on mobile", () => {
  it("AMobilePlugin, small screen: a sheet in body above the virtual keyboard, also with in-body false", async() => {
    window.visualViewport = {
      height: window.innerHeight - 300,
      offsetTop: 0,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    };
    isMobileWidth.value = true;
    const wrapper = mountCombobox({ inBody: false });
    await flushPromises();
    await type(wrapper, "ber");
    await flushPromises();
    const POPUP = getPopup();

    expect(POPUP.classList.contains("a_combobox__popup_sheet")).toBe(true);
    expect(POPUP.classList.contains("a_combobox__popup_in_body")).toBe(false);
    expect(document.getElementById("a_tooltip_container").contains(POPUP)).toBe(true);
    expect(POPUP.style.bottom).toBe("300px");
    expect(window.visualViewport.addEventListener).toHaveBeenCalledWith("resize", expect.any(Function));

    // the keyboard is closed
    window.visualViewport.height = window.innerHeight;
    window.visualViewport.addEventListener.mock.calls[0][1]();
    await flushPromises();
    expect(POPUP.style.bottom).toBe("0px");

    await wrapper.find("input").trigger("blur");
    await flushPromises();
    expect(window.visualViewport.removeEventListener).toHaveBeenCalledWith("resize", expect.any(Function));
  });

  it("the window gets small while the list is open: no position of floating-ui on the sheet", async() => {
    const wrapper = mountCombobox();
    await flushPromises();
    await type(wrapper, "ber");
    await flushPromises();
    expect(getPopup().style.top).not.toBe("");

    isMobileWidth.value = true;
    await flushPromises();
    expect(getPopup().classList.contains("a_combobox__popup_sheet")).toBe(true);
    expect(getPopup().style.top).toBe("");
    expect(getPopup().style.width).toBe("");
  });

  it("the field hidden by the sheet is scrolled above it (WCAG 2.4.11), a visible field not", async() => {
    const SCROLL = vi.spyOn(window, "scrollBy").mockImplementation(() => {});
    isMobileWidth.value = true;
    const wrapper = mountCombobox();
    await flushPromises();
    const INPUT = wrapper.find("input").element;
    let inputBottom = 700;
    INPUT.getBoundingClientRect = () => ({ bottom: inputBottom });
    const POPUP = getPopup();
    POPUP.getBoundingClientRect = () => ({ top: 500 });

    await type(wrapper, "ber");
    await flushPromises();
    // 700 - 500 + 8 px of space
    expect(SCROLL).toHaveBeenCalledWith({ top: 208 });

    SCROLL.mockClear();
    inputBottom = 300;
    await wrapper.find("input").trigger("blur");
    await type(wrapper, "bern");
    await flushPromises();
    expect(SCROLL).not.toHaveBeenCalled();
    SCROLL.mockRestore();
  });

  it("z-index: the prop sets the token on the list, without it the CSS token stays", async() => {
    const wrapper = mountCombobox();
    await flushPromises();
    await type(wrapper, "ber");
    expect(getPopup().style.getPropertyValue("--a_combobox_z_index")).toBe("");

    await wrapper.setProps({ zIndex: 1040 });
    expect(getPopup().style.getPropertyValue("--a_combobox_z_index")).toBe("1040");
  });

  it("is-bottom-sheet-on-mobile false: the normal list", async() => {
    isMobileWidth.value = true;
    const wrapper = mountCombobox({ isBottomSheetOnMobile: false });
    await flushPromises();
    await type(wrapper, "ber");

    expect(getPopup().classList.contains("a_combobox__popup_sheet")).toBe(false);
    expect(getPopup().classList.contains("a_combobox__popup_in_body")).toBe(true);
  });
});
