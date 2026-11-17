import {
  describe,
  expect,
  it,
} from "vitest";
import {
  mount,
} from "@vue/test-utils";

import AMenuButtonToggle from "../AMenuButtonToggle";

describe("AMenuButtonToggle", () => {
  it("has aria-controls and aria-expanded, which follows the menu state", async() => {
    const wrapper = mount(AMenuButtonToggle, {
      props: {
        canChangeBodyClass: false,
        menuId: "test_menu_toggle",
        onlyMobile: true,
      },
    });
    const button = wrapper.get("button");
    expect(button.attributes("aria-controls")).toBe("test_menu_toggle");
    const EXPANDED = button.attributes("aria-expanded");
    await button.trigger("click");
    expect(button.attributes("aria-expanded")).toBe(EXPANDED === "true" ? "false" : "true");
  });
});
