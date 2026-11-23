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

import ASkipLink from "../ASkipLink";
import {
  en as i18nEN,
} from "../../i18n/allLanguages";

const wrappers = [];
let main;

const mountSkipLink = props => {
  const wrapper = mount(ASkipLink, {
    props,
    attachTo: document.body,
  });
  wrappers.push(wrapper);
  return wrapper;
};

describe("ASkipLink", () => {
  beforeEach(async() => {
    setI18n({ en: { ...i18nEN, _TO_CONTENT_: "Skip to {{ name }}" } });
    setLanguage("en");
    updateTranslation();
    await nextTick();
    main = document.createElement("main");
    main.id = "main";
    document.body.appendChild(main);
  });

  afterEach(async() => {
    wrappers.splice(0).forEach(wrapper => wrapper.unmount());
    main.remove();
    setI18n({});
    setLanguage("de");
    updateTranslation();
    await nextTick();
  });

  it("renders a link to the main content with the default text", () => {
    const link = mountSkipLink().get("a.a_skip_link");

    expect(link.attributes("href")).toBe("#main");
    expect(link.text()).toBe("Skip to main content");
  });

  it("moves the focus to the target without changing the URL hash", () => {
    const link = mountSkipLink().get("a");
    const event = new MouseEvent("click", { bubbles: true, cancelable: true });

    link.element.dispatchEvent(event);

    expect(event.defaultPrevented).toBe(true);
    expect(document.activeElement).toBe(main);
    expect(main.getAttribute("tabindex")).toBe("-1");

    // tabindex is only needed for this focus
    main.blur();
    expect(main.hasAttribute("tabindex")).toBe(false);
  });

  it("keeps an own tabindex of the target", () => {
    main.setAttribute("tabindex", "0");
    mountSkipLink().get("a").element.click();

    expect(document.activeElement).toBe(main);
    main.blur();
    expect(main.getAttribute("tabindex")).toBe("0");
  });

  it("uses target-id, text and extra", () => {
    const content = document.createElement("div");
    content.id = "content";
    document.body.appendChild(content);

    const link = mountSkipLink({ targetId: "content", text: "_TO_CONTENT_", extra: { name: "results" } }).get("a");
    expect(link.attributes("href")).toBe("#content");
    expect(link.text()).toBe("Skip to results");

    link.element.click();
    expect(document.activeElement).toBe(content);
    content.remove();
  });

  it("falls back to the native link when the target does not exist", () => {
    const link = mountSkipLink({ targetId: "missing" }).get("a");
    const event = new MouseEvent("click", { bubbles: true, cancelable: true });

    link.element.dispatchEvent(event);

    expect(event.defaultPrevented).toBe(false);
  });
});
