import {
  afterEach,
  describe,
  expect,
  it,
} from "vitest";
import {
  mount,
} from "@vue/test-utils";

import AAlert from "../AAlert";

const wrappers = [];

const mountAlert = (props = {}, attrs = {}) => {
  const wrapper = mount(AAlert, {
    props: {
      isVisible: true,
      text: "Aloha",
      ...props,
    },
    attrs,
  });
  wrappers.push(wrapper);
  return wrapper;
};

// the live region: the element that is always in the DOM around the content
const liveRegion = wrapper => wrapper.find(".a_alert__parent > div").element;
const attributes = wrapper => ({
  role: liveRegion(wrapper).getAttribute("role"),
  ariaAtomic: liveRegion(wrapper).getAttribute("aria-atomic"),
});

afterEach(() => {
  wrappers.splice(0).forEach(wrapper => wrapper.unmount());
});

describe("AAlert announce", () => {
  it("keeps the old behavior by default: role alert, aria-atomic true", () => {
    expect(attributes(mountAlert())).toEqual({ role: "alert", ariaAtomic: "true" });
  });

  it.each([
    ["alert-changes", { role: "alert", ariaAtomic: "false" }],
    ["status", { role: "status", ariaAtomic: "true" }],
    ["status-changes", { role: "status", ariaAtomic: "false" }],
    ["none", { role: null, ariaAtomic: null }],
  ])("announce=%s sets role and aria-atomic", (announce, expected) => {
    expect(attributes(mountAlert({ announce }))).toEqual(expected);
  });

  it("lets the props role and aria-atomic win over announce", () => {
    expect(attributes(mountAlert({ announce: "status", role: "alert" }))).toEqual({ role: "alert", ariaAtomic: "true" });
    expect(attributes(mountAlert({ announce: "alert", ariaAtomic: false }))).toEqual({ role: "alert", ariaAtomic: "false" });
    expect(attributes(mountAlert({ announce: "none", role: "status", ariaAtomic: true }))).toEqual({ role: "status", ariaAtomic: "true" });
  });

  it("lets the attributes role and aria-atomic win over announce", () => {
    expect(attributes(mountAlert({ announce: "alert" }, { role: "status", "aria-atomic": "false" }))).toEqual({ role: "status", ariaAtomic: "false" });
  });
});
