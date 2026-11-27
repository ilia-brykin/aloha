import {
  nextTick,
} from "vue";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
} from "vitest";
import {
  mount,
} from "@vue/test-utils";

import {
  setI18n,
  setLanguage,
  updateTranslation,
} from "../../ATranslation/compositionAPI/ATranslationAPI";

import ABreadcrumb from "../ABreadcrumb";
import {
  en as i18nEN,
} from "../../i18n/allLanguages";

const wrappers = [];

const mountBreadcrumb = props => {
  const wrapper = mount(ABreadcrumb, {
    props,
    attachTo: document.body,
  });
  wrappers.push(wrapper);
  return wrapper;
};

const TRAIL = ["Home", "Products", "Electronics", "Computers", "Laptops", "Book"].map((label, index, all) => ({
  label,
  href: index < all.length - 1 ? `/${ index }` : undefined,
}));

const visibleLabels = wrapper => wrapper.findAll(".a_breadcrumb__item")
  .map(item => item.find(".a_breadcrumb__link, .a_breadcrumb__text"))
  .filter(label => label.exists())
  .map(label => label.text());

describe("ABreadcrumb features", () => {
  beforeEach(async() => {
    setI18n({
      en: { ...i18nEN, _ORDER_: "Order {{ number }}", _PATH_: "Path of {{ number }}" },
    });
    setLanguage("en");
    updateTranslation();
    await nextTick();
  });

  afterEach(async() => {
    wrappers.splice(0).forEach(wrapper => wrapper.unmount());
    setI18n({});
    setLanguage("de");
    updateTranslation();
    await nextTick();
  });

  it("fills placeholders from extra; item.extra wins over the prop", () => {
    const wrapper = mountBreadcrumb({
      ariaLabel: "_PATH_",
      extra: { number: 7 },
      items: [
        { label: "_ORDER_", href: "/", extra: { number: 1 } },
        { label: "_ORDER_" },
      ],
    });

    expect(wrapper.get("nav").attributes("aria-label")).toBe("Path of 7");
    expect(wrapper.get("a").text()).toBe("Order 1");
    expect(wrapper.get("[aria-current=\"page\"]").text()).toBe("Order 7");
  });

  it("renders no separator element for an empty separator", () => {
    const wrapper = mountBreadcrumb({
      separator: "",
      items: [{ label: "Home", href: "/" }, { label: "Page" }],
    });

    expect(wrapper.find(".a_breadcrumb__separator").exists()).toBe(false);
  });

  it("shows decorative icons on links and on the current page", () => {
    const icon = "<svg viewBox=\"0 0 16 16\"><path d=\"M0 0h16v16H0z\"/></svg>";
    const wrapper = mountBreadcrumb({
      items: [{ label: "Home", href: "/", icon }, { label: "Page", icon }],
    });

    expect(wrapper.find(".a_breadcrumb__link svg").exists()).toBe(true);
    const currentIcon = wrapper.get(".a_breadcrumb__current .a_breadcrumb__icon");
    expect(currentIcon.attributes("aria-hidden")).toBe("true");
  });

  it("collapses a long trail to the first item, a button and the last max-items - 1 items", () => {
    const wrapper = mountBreadcrumb({ items: TRAIL, maxItems: 3 });

    expect(visibleLabels(wrapper)).toEqual(["Home", "Laptops", "Book"]);
    const button = wrapper.get("button.a_breadcrumb__more");
    expect(button.text()).toContain("Show hidden levels (3)");
    expect(wrapper.get("[aria-current=\"page\"]").text()).toBe("Book");
  });

  it("does not collapse when the trail is not longer than max-items", () => {
    const wrapper = mountBreadcrumb({ items: TRAIL.slice(-3), maxItems: 3 });

    expect(wrapper.find("button.a_breadcrumb__more").exists()).toBe(false);
    expect(visibleLabels(wrapper)).toHaveLength(3);
  });

  it("shows all items on click, moves the focus to the first hidden item and collapses a new trail again", async() => {
    const wrapper = mountBreadcrumb({ items: TRAIL, maxItems: 3 });

    await wrapper.get("button.a_breadcrumb__more").trigger("click");
    await nextTick();

    expect(visibleLabels(wrapper)).toEqual(TRAIL.map(item => item.label));
    expect(wrapper.find("button.a_breadcrumb__more").exists()).toBe(false);
    expect(document.activeElement.textContent).toBe("Products");

    await wrapper.setProps({ items: [...TRAIL] });
    expect(wrapper.find("button.a_breadcrumb__more").exists()).toBe(true);
  });
});
