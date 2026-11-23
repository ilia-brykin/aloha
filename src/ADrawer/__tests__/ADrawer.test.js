import {
  afterEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import {
  mount,
} from "@vue/test-utils";

import ADrawer from "../ADrawer";

const wrappers = [];

const mountDrawer = (props = {}, slots = {}) => {
  const wrapper = mount(ADrawer, {
    props: {
      headerText: "Details",
      close: () => {},
      ...props,
    },
    slots,
    attachTo: document.body,
    global: {
      stubs: {
        teleport: true,
      },
    },
  });
  wrappers.push(wrapper);
  return wrapper;
};

afterEach(() => {
  wrappers.splice(0).forEach(wrapper => wrapper.unmount());
});

describe("ADrawer", () => {
  it("is a modal dialog at the right edge by default", () => {
    const wrapper = mountDrawer({}, { modalBody: "<p>Body</p>" });
    const dialog = wrapper.get(".a_modal");

    expect(dialog.classes()).toEqual(expect.arrayContaining(["a_drawer", "a_drawer_right"]));
    expect(dialog.attributes("role")).toBe("dialog");
    expect(dialog.attributes("aria-modal")).toBe("true");
    expect(wrapper.get(".a_modal_title").text()).toBe("Details");
    expect(wrapper.get(".a_modal_body").text()).toContain("Body");
  });

  it("opens at the left edge with placement=left", () => {
    const dialog = mountDrawer({ placement: "left" }).get(".a_modal");

    expect(dialog.classes()).toContain("a_drawer_left");
    expect(dialog.classes()).not.toContain("a_drawer_right");
  });

  it("keeps the own modal-class as a string or an object", () => {
    expect(mountDrawer({ modalClass: "my_drawer" }).get(".a_modal").classes()).toEqual(expect.arrayContaining(["a_drawer", "my_drawer"]));

    const classes = mountDrawer({ modalClass: { my_on: true, my_off: false } }).get(".a_modal").classes();
    expect(classes).toContain("my_on");
    expect(classes).not.toContain("my_off");
  });

  it("passes the props of AModal through, e.g. size and close", async() => {
    const close = vi.fn();
    const wrapper = mountDrawer({ size: "large", close });

    expect(wrapper.get(".a_modal_dialog").classes()).toContain("a_modal_large");

    await wrapper.get(".a_modal_header .a_btn_close").trigger("click");
    expect(close).toHaveBeenCalled();
  });

  it("accepts only left and right as placement", () => {
    const validator = ADrawer.props.placement.validator;

    expect(validator("left")).toBe(true);
    expect(validator("right")).toBe(true);
    expect(validator("top")).toBe(false);
  });
});
