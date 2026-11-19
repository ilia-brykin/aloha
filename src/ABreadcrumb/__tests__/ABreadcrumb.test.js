import {
  describe,
  expect,
  it,
} from "vitest";
import {
  mount,
} from "@vue/test-utils";

import ABreadcrumb from "../ABreadcrumb";

describe("ABreadcrumb", () => {
  it("renders an ordered navigation trail with a single current page", () => {
    const wrapper = mount(ABreadcrumb, {
      props: {
        items: [
          { label: "Home", href: "/" },
          { label: "Reports", href: "/reports" },
          { label: "Current report", href: "/reports/1" },
        ],
      },
    });

    expect(wrapper.get("nav").attributes("aria-label")).toBe("Breadcrumb");
    expect(wrapper.findAll("ol > li")).toHaveLength(3);
    expect(wrapper.get(".a_breadcrumb__separator").text()).toBe("›");
    expect(wrapper.findAll("a").map(link => link.attributes("href"))).toEqual(["/", "/reports"]);
    expect(wrapper.findAll("[aria-current=\"page\"]")).toHaveLength(1);
    expect(wrapper.get("span[aria-current=\"page\"]").text()).toBe("Current report");
  });

  it("supports a custom navigation name and decorative separator", () => {
    const wrapper = mount(ABreadcrumb, {
      props: {
        ariaLabel: "Brotkrümelnavigation",
        items: [{ label: "Übersicht", href: "/" }, { label: "Berichte" }],
        separator: "/",
      },
    });

    expect(wrapper.get("nav").attributes("aria-label")).toBe("Brotkrümelnavigation");
    const separator = wrapper.get(".a_breadcrumb__separator");
    expect(separator.text()).toBe("/");
    expect(separator.attributes("aria-hidden")).toBe("true");
  });

  it("passes router destinations through the ALink implementation", () => {
    const to = { name: "reports", query: { page: "1" } };
    const wrapper = mount(ABreadcrumb, {
      props: {
        items: [{ label: "Reports", to }, { label: "Details" }],
      },
      global: {
        stubs: {
          RouterLink: {
            name: "RouterLink",
            props: ["to", "ariaCurrentValue"],
            template: "<a href=\"/reports?page=1\"><slot /></a>",
          },
        },
      },
    });

    const link = wrapper.getComponent({ name: "RouterLink" });
    expect(link.props("to")).toEqual(to);
    expect(link.props("ariaCurrentValue")).toBe("false");
    expect(link.text()).toBe("Reports");
  });

  it("omits empty trails and updates the current page as the trail changes", async() => {
    const wrapper = mount(ABreadcrumb);
    expect(wrapper.find("nav").exists()).toBe(false);

    await wrapper.setProps({ items: [{ label: "Home", href: "/" }] });
    expect(wrapper.get("[aria-current=\"page\"]").text()).toBe("Home");
    expect(wrapper.find("a").exists()).toBe(false);
    expect(wrapper.find(".a_breadcrumb__separator").exists()).toBe(false);

    await wrapper.setProps({ items: [{ label: "Home", href: "/" }, { label: "Reports" }] });
    expect(wrapper.get("a").text()).toBe("Home");
    expect(wrapper.get("[aria-current=\"page\"]").text()).toBe("Reports");
  });
});
