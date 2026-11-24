import {
  h,
  nextTick,
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
  AErrors,
} from "../../../index";

import {
  countErrors,
} from "../compositionAPI/ErrorsAPI";
import {
  getHtmlId,
} from "../../compositionApi/UiAPI";
import {
  setI18n,
  setLanguage,
  updateTranslation,
} from "../../../ATranslation/compositionAPI/ATranslationAPI";

const OPTIONS = [
  { id: "email", label: "E-mail", type: "text" },
  { id: "name", label: "Name", type: "text" },
];
const ERRORS = { email: ["Required", "Invalid"], name: "Too short" };

const wrappers = [];

const mountErrors = (props = {}) => {
  const wrapper = mount({
    render: () => h("div", [
      h("input", { id: getHtmlId({ id: "email" }) }),
      h("button", { id: "save" }, "Save"),
      h(AErrors, { errors: ERRORS, optionsList: OPTIONS, ...props }),
    ]),
  }, { attachTo: document.body });
  wrappers.push(wrapper);
  return wrapper;
};

const summary = () => document.querySelector(".a_alert__parent");
const flush = async() => {
  await nextTick();
  vi.runAllTimers();
  await nextTick();
};

describe("AErrors", () => {
  beforeEach(async() => {
    vi.useFakeTimers();
    setI18n({ en: { _A_ERRORS_TEXT_HEADER_: "Please check your entries. Errors: {{ count }}" } });
    setLanguage("en");
    updateTranslation();
    await nextTick();
  });

  afterEach(async() => {
    wrappers.splice(0).forEach(wrapper => wrapper.unmount());
    vi.useRealTimers();
    setI18n({});
    setLanguage("de");
    updateTranslation();
    await nextTick();
  });

  it("shows the number of the fields with errors in the text, without a heading", async() => {
    mountErrors();
    await flush();

    const HEADER = summary().querySelector(".a_errors__header");
    expect(HEADER.tagName).toBe("DIV");
    expect(HEADER.textContent).toBe("Please check your entries. Errors: 2");
    expect(summary().querySelector("h1, h2, h3, h4, h5, h6")).toBeNull();
  });

  it("is a list (ul / li) also for several errors of a field", async() => {
    mountErrors();
    await flush();

    const LIST = summary().querySelector("ul.a_errors__list");
    expect(Array.from(LIST.children).every(item => item.tagName === "LI")).toBe(true);
    expect(LIST.children).toHaveLength(2);
    expect(LIST.querySelector("ul.a_errors__list").children).toHaveLength(2);
  });

  it("gets the focus without role alert with auto-focus, so it is read once", async() => {
    mountErrors();
    await flush();

    expect(document.activeElement).toBe(summary());
    expect(summary().querySelector("[role=\"alert\"]")).toBeNull();
  });

  it("is an alert without auto-focus", async() => {
    mountErrors({ autoFocus: false });
    await flush();

    expect(document.activeElement).not.toBe(summary());
    expect(summary().querySelector("[role=\"alert\"]")).not.toBeNull();
  });

  it("gets the focus again with new errors (a second submit)", async() => {
    const wrapper = mount(AErrors, {
      props: { errors: ERRORS, optionsList: OPTIONS },
      attachTo: document.body,
    });
    wrappers.push(wrapper);
    await flush();
    expect(document.activeElement).toBe(summary());

    document.body.focus();
    summary().blur();
    await wrapper.setProps({ errors: { name: "Too short" } });
    await flush();
    expect(document.activeElement).toBe(summary());
  });

  it("links to the field with a real link and puts the focus on the field", async() => {
    mountErrors();
    await flush();

    const LINK = summary().querySelector("a.a_errors__label");
    const FIELD_ID = getHtmlId({ id: "email" });
    expect(LINK.getAttribute("href")).toBe(`#${ FIELD_ID }`);
    expect(LINK.textContent).toBe("E-mail:");

    const EVENT = new MouseEvent("click", { bubbles: true, cancelable: true });
    LINK.dispatchEvent(EVENT);
    expect(EVENT.defaultPrevented).toBe(true);
    expect(document.activeElement.id).toBe(FIELD_ID);
  });

  it("does not fail when it is unmounted before the focus", () => {
    const wrapper = mountErrors();
    wrappers.splice(0);
    wrapper.unmount();

    expect(() => vi.runAllTimers()).not.toThrow();
  });

  it("counts the fields with errors", () => {
    expect(countErrors({})).toBe(0);
    expect(countErrors({ a: "x", b: ["y", "z"] })).toBe(2);
    expect(countErrors({ a: { b: "x", c: ["y"] }, d: [] })).toBe(2);
    expect(countErrors({ list: [{ a: "x" }, { a: "y", b: "z" }] })).toBe(3);
  });
});
