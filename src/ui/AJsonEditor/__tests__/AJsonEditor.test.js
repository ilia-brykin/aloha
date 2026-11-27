import {
  h,
  nextTick,
} from "vue";
import {
  afterEach,
  beforeAll,
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
  AJsonEditor,
  AJsonEditorPluginOptions,
  AJsonEditorPlugins,
  AJsonEditorSwitchPlugin,
} from "../../../index";

import {
  setI18n,
  setLanguage,
  updateTranslation,
} from "../../../ATranslation/compositionAPI/ATranslationAPI";

import AUiComponents from "../../AUiComponents";
import {
  componentsPluginOptions,
} from "../../../plugins/AComponentsPlugin";
import {
  en as i18nEN,
} from "../../../i18n/allLanguages";
import {
  getRowId,
} from "../utils/ids";

const wrappers = [];

const DATA = {
  name: "Anna",
  age: 30,
  active: true,
  tags: ["vue", "a11y"],
  address: { city: "Bonn", zip: "53111" },
};

const mountEditor = (props = {}, options = {}) => {
  const wrapper = mount(AJsonEditor, {
    props: {
      id: "editor",
      label: "Settings",
      modelValue: DATA,
      "onUpdate:modelValue": model => wrapper.setProps({ modelValue: model }),
      ...props,
    },
    attachTo: document.body,
    ...options,
  });
  wrappers.push(wrapper);
  return wrapper;
};

const flush = async() => {
  for (let i = 0; i < 6; i++) {
    // eslint-disable-next-line no-await-in-loop
    await nextTick();
  }
};

const row = pointer => document.getElementById(getRowId("editor", pointer));
const rowsPointers = wrapper => wrapper.findAll("[role=\"row\"]").map(item => item.attributes("id"));
const key = async(element, keyName, options = {}) => {
  const EVENT = new KeyboardEvent("keydown", { key: keyName, bubbles: true, cancelable: true, ...options });
  element.dispatchEvent(EVENT);
  await flush();
  return EVENT;
};
const lastModel = wrapper => wrapper.emitted("update:modelValue")?.at(-1)[0];
const status = wrapper => wrapper.find(".a_json_editor [role=\"status\"]:last-child").text();
const tool = (wrapper, text) => wrapper.findAll(".a_json_editor__tool").find(button => button.attributes("title")?.startsWith(text));
const typeInto = async(input, text) => {
  input.value = text;
  input.dispatchEvent(new Event("input", { bubbles: true }));
  await flush();
};

describe("AJsonEditor", () => {
  beforeAll(() => {
    globalThis.ResizeObserver = globalThis.ResizeObserver || class {
      observe() {
      }
      unobserve() {
      }
      disconnect() {
      }
    };
  });

  beforeEach(async() => {
    setI18n({ en: { ...i18nEN } });
    setLanguage("en");
    updateTranslation();
    await nextTick();
  });

  afterEach(async() => {
    wrappers.splice(0).forEach(wrapper => wrapper.unmount());
    AJsonEditorPluginOptions.plugins = [];
    vi.useRealTimers();
    setI18n({});
    setLanguage("de");
    updateTranslation();
    await nextTick();
  });

  it("is a named treegrid with levels, sets, expanded state and one tab stop", async() => {
    const wrapper = mountEditor();
    await flush();
    const TREE = wrapper.get("[role=\"treegrid\"]");
    expect(TREE.attributes("aria-labelledby")).toBe("editor_label");
    expect(TREE.attributes("aria-describedby")).toBe("editor_keyboard_hint");
    expect(wrapper.find("[role=\"application\"]").exists()).toBe(false);

    const ROOT = row("");
    expect(ROOT.getAttribute("aria-level")).toBe("1");
    expect(ROOT.getAttribute("aria-expanded")).toBe("true");
    expect(ROOT.getAttribute("tabindex")).toBe("0");
    const NAME = row("/name");
    expect(NAME.getAttribute("aria-level")).toBe("2");
    expect(NAME.getAttribute("aria-posinset")).toBe("1");
    expect(NAME.getAttribute("aria-setsize")).toBe("5");
    expect(NAME.getAttribute("aria-label")).toBe("name: Anna, String");
    expect(NAME.getAttribute("tabindex")).toBe("-1");
    expect(row("/address").getAttribute("aria-expanded")).toBe("false");
    expect(row("/address").getAttribute("aria-label")).toBe("address, Object, 2 keys");
    expect(row("/address/city")).toBeNull();
    expect(wrapper.findAll("[role=\"row\"][tabindex=\"0\"]")).toHaveLength(1);
  });

  it("moves with the keys of the treegrid", async() => {
    const wrapper = mountEditor();
    await flush();
    row("").focus();
    await key(row(""), "ArrowDown");
    expect(document.activeElement.id).toBe(getRowId("editor", "/name"));
    await key(document.activeElement, "End");
    expect(document.activeElement.id).toBe(getRowId("editor", "/address"));
    await key(document.activeElement, "ArrowRight");
    expect(row("/address").getAttribute("aria-expanded")).toBe("true");
    await key(document.activeElement, "ArrowRight");
    expect(document.activeElement.id).toBe(getRowId("editor", "/address/city"));
    await key(document.activeElement, "ArrowLeft");
    expect(document.activeElement.id).toBe(getRowId("editor", "/address"));
    await key(document.activeElement, "ArrowLeft");
    expect(row("/address").getAttribute("aria-expanded")).toBe("false");
    await key(document.activeElement, "Home");
    expect(document.activeElement.id).toBe(getRowId("editor", ""));
    // * expands all siblings
    await key(row(""), "ArrowDown");
    await key(document.activeElement, "*");
    expect(row("/tags").getAttribute("aria-expanded")).toBe("true");
    expect(row("/address").getAttribute("aria-expanded")).toBe("true");
    expect(wrapper.emitted("select").at(-1)[0].path).toBe("/name");
  });

  it("edits a value with Enter, Escape cancels, a wrong number shows an error", async() => {
    const wrapper = mountEditor();
    await flush();
    row("/name").focus();
    await key(row("/name"), "Enter");
    const INPUT = row("/name").querySelector("input, textarea");
    expect(INPUT.getAttribute("aria-label")).toBe("Value of name");
    expect(document.activeElement).toBe(INPUT);
    await typeInto(INPUT, "Berta");
    await key(INPUT, "Enter");
    expect(lastModel(wrapper).name).toBe("Berta");
    expect(document.activeElement.id).toBe(getRowId("editor", "/name"));

    await key(row("/name"), "F2");
    await typeInto(row("/name").querySelector("input, textarea"), "Xaver");
    await key(row("/name").querySelector("input, textarea"), "Escape");
    expect(lastModel(wrapper).name).toBe("Berta");

    row("/age").focus();
    await key(row("/age"), "F2");
    const AGE = row("/age").querySelector("input, textarea");
    await typeInto(AGE, "abc");
    await key(AGE, "Enter");
    expect(AGE.getAttribute("aria-invalid")).toBe("true");
    expect(row("/age").querySelector("[role=\"alert\"]").textContent).toBe("Enter a number");
    await typeInto(AGE, "31,5");
    await key(AGE, "Enter");
    expect(lastModel(wrapper).age).toBe(31.5);
  });

  it("renames a key in its place, an existing key is an error", async() => {
    const wrapper = mountEditor();
    await flush();
    row("/name").focus();
    await key(row("/name"), "F2", { shiftKey: true });
    const INPUT = row("/name").querySelector("input, textarea");
    expect(INPUT.getAttribute("aria-label")).toBe("Key of name");
    await typeInto(INPUT, "age");
    await key(INPUT, "Enter");
    expect(INPUT.getAttribute("aria-invalid")).toBe("true");
    expect(row("/name").textContent).toContain("The key age already exists");
    await typeInto(INPUT, "firstName");
    await key(INPUT, "Enter");
    expect(Object.keys(lastModel(wrapper))).toEqual(["firstName", "age", "active", "tags", "address"]);
    expect(document.activeElement.id).toBe(getRowId("editor", "/firstName"));
  });

  it("changes the type with Alt+F2", async() => {
    const wrapper = mountEditor();
    await flush();
    row("/age").focus();
    await key(row("/age"), "F2", { altKey: true });
    const SELECT = row("/age").querySelector("select");
    expect(SELECT.getAttribute("aria-label")).toBe("Type of age");
    SELECT.value = "string";
    SELECT.dispatchEvent(new Event("change"));
    await flush();
    expect(lastModel(wrapper).age).toBe("30");
  });

  it("adds with Insert, removes with Delete, the status bar can undo the removal", async() => {
    const wrapper = mountEditor();
    await flush();
    row("/tags").focus();
    await key(row("/tags"), "Insert");
    expect(lastModel(wrapper).tags).toEqual(["vue", "a11y", ""]);
    expect(document.activeElement.id).toBe(getRowId("editor", "/tags/2"));
    expect(status(wrapper)).toBe("Added: root.tags[2]");

    await key(document.activeElement, "Delete");
    expect(lastModel(wrapper).tags).toEqual(["vue", "a11y"]);
    expect(document.activeElement.id).toBe(getRowId("editor", "/tags/1"));
    expect(status(wrapper)).toBe("Removed: root.tags[2]. Ctrl+Z undoes it.");
    const UNDO = wrapper.get(".a_json_editor__status__removed button");
    await UNDO.trigger("click");
    await flush();
    expect(lastModel(wrapper).tags).toEqual(["vue", "a11y", ""]);
  });

  it("history: undo, redo, reset and the list of the steps", async() => {
    const wrapper = mountEditor();
    await flush();
    expect(tool(wrapper, "Undo").attributes("disabled")).toBeDefined();
    expect(tool(wrapper, "Reset").attributes("disabled")).toBeDefined();
    row("/name").focus();
    await key(row("/name"), "Delete");
    row("/age").focus();
    await key(row("/age"), "Delete");
    expect(Object.keys(lastModel(wrapper))).toEqual(["active", "tags", "address"]);

    await key(row("/active"), "z", { ctrlKey: true });
    expect(Object.keys(lastModel(wrapper))).toEqual(["age", "active", "tags", "address"]);
    expect(status(wrapper)).toBe("Undone: Removed: root.name");
    await tool(wrapper, "Redo").trigger("click");
    await flush();
    expect(Object.keys(lastModel(wrapper))).toEqual(["active", "tags", "address"]);

    await tool(wrapper, "History").trigger("click");
    await flush();
    expect(tool(wrapper, "History").attributes("aria-expanded")).toBe("true");
    const STEPS = wrapper.findAll(".a_json_editor__history__button");
    expect(STEPS.map(step => step.find(".a_json_editor__history__label").text())).toEqual(["Start", "Removed: root.name", "Removed: root.age"]);
    expect(STEPS[2].attributes("aria-current")).toBe("step");
    await STEPS[0].trigger("click");
    await flush();
    expect(lastModel(wrapper)).toEqual(DATA);
    expect(wrapper.findAll(".a_json_editor__history__button")[0].attributes("aria-current")).toBe("step");

    await wrapper.findAll(".a_json_editor__history__button")[2].trigger("click");
    await flush();
    await tool(wrapper, "Reset").trigger("click");
    await flush();
    expect(lastModel(wrapper)).toEqual(DATA);
    expect(status(wrapper)).toBe("Reset to the start. Ctrl+Z undoes it.");
    // reset is a step too
    await tool(wrapper, "Undo").trigger("click");
    await flush();
    expect(Object.keys(lastModel(wrapper))).toEqual(["active", "tags", "address"]);
  });

  it("expands and collapses all with the toolbar", async() => {
    const wrapper = mountEditor();
    await flush();
    await tool(wrapper, "Expand all").trigger("click");
    await flush();
    expect(row("/address/city")).not.toBeNull();
    expect(status(wrapper)).toBe("All nodes expanded");
    await tool(wrapper, "Collapse all").trigger("click");
    await flush();
    expect(rowsPointers(wrapper)).toHaveLength(6);
    expect(row("/tags").getAttribute("aria-expanded")).toBe("false");
  });

  it("searches keys and values, also in collapsed nodes, with count, next and filter", async() => {
    vi.useFakeTimers();
    const wrapper = mountEditor();
    await flush();
    const SEARCH = wrapper.get("#editor_search");
    expect(SEARCH.attributes("aria-label")).toBe("Search keys and values");
    SEARCH.element.value = "bo";
    await SEARCH.trigger("input");
    vi.runAllTimers();
    await flush();
    expect(wrapper.get("#editor_search_count").text()).toBe("1 of 1");
    // the match in the collapsed address is visible
    expect(row("/address/city").querySelector("mark").textContent).toBe("Bo");
    await SEARCH.trigger("keydown", { key: "Enter" });
    await flush();
    expect(document.activeElement.id).toBe(getRowId("editor", "/address/city"));

    SEARCH.element.value = "a";
    await SEARCH.trigger("input");
    vi.runAllTimers();
    await flush();
    const COUNT = wrapper.vm.$.setupState.API.matches.value.length;
    expect(COUNT).toBeGreaterThan(2);
    const FILTER = wrapper.findAll(".a_json_editor__search_option").find(button => button.text() === "Only matches");
    await FILTER.trigger("click");
    await flush();
    expect(FILTER.attributes("aria-pressed")).toBe("true");
    expect(row("/tags/0")).toBeNull();
    expect(row("/address/zip")).toBeNull();

    const REGEX = wrapper.findAll(".a_json_editor__search_option").find(button => button.text() === "Regular expression");
    await REGEX.trigger("click");
    SEARCH.element.value = "(";
    await SEARCH.trigger("input");
    vi.runAllTimers();
    await flush();
    expect(SEARCH.attributes("aria-invalid")).toBe("true");
    expect(wrapper.get("#editor_search_count").text()).toBe("Invalid regular expression");
  });

  it("variables: chips, unknown names with a suggestion, the combobox and the values", async() => {
    const wrapper = mountEditor({
      modelValue: { greeting: "Hi {{ user.name }}", total: "{{ order.total }}", wrong: "{{ user.nmae }}" },
      variables: [
        { name: "user.name", label: "Name of the user", type: "string", example: "Anna" },
        { name: "order.total", type: "number", example: 12.5 },
      ],
      variableValues: { user: { name: "Anna" }, "order.total": 12.5 },
    });
    await flush();
    expect(row("/greeting").querySelector(".a_json_editor__variable").textContent).toBe("user.name");
    expect(row("/total").getAttribute("aria-label")).toBe("total: {{ order.total }}, Variable");
    expect(row("/wrong").textContent).toContain("Unknown variable user.nmae, did you mean user.name?");
    expect(row("/wrong").getAttribute("aria-describedby")).toBe(`${ getRowId("editor", "/wrong") }_errors`);

    row("/greeting").focus();
    await key(row("/greeting"), "Enter");
    const INPUT = row("/greeting").querySelector("input, textarea");
    expect(INPUT.getAttribute("role")).toBe("combobox");
    INPUT.value = "Hi {{ ord";
    INPUT.setSelectionRange(9, 9);
    INPUT.dispatchEvent(new Event("input", { bubbles: true }));
    await flush();
    expect(INPUT.getAttribute("aria-expanded")).toBe("true");
    const OPTIONS = row("/greeting").querySelectorAll("[role=\"option\"]");
    expect(OPTIONS).toHaveLength(1);
    expect(INPUT.getAttribute("aria-activedescendant")).toBe(OPTIONS[0].id);
    await key(INPUT, "Enter");
    expect(INPUT.value).toBe("Hi {{ order.total }}");
    expect(INPUT.getAttribute("aria-expanded")).toBe("false");
    await key(INPUT, "Enter");
    expect(lastModel(wrapper).greeting).toBe("Hi {{ order.total }}");

    await tool(wrapper, "Show with the values of the variables").trigger("click");
    await flush();
    expect(row("/greeting").textContent).toContain("Hi 12.5");
    expect(row("/total").textContent).toContain("12.5");
  });

  it("validation: rules, row errors, summary links, F8 and errors inside collapsed nodes", async() => {
    const wrapper = mountEditor({
      rules: {
        "/name": { minLength: 5 },
        "/address/zip": { pattern: "^\\d{4}$", message: "Four digits" },
        "/email": { required: true },
      },
    });
    await flush();
    expect(row("/name").textContent).toContain("At least 5 characters");
    expect(row("/address").getAttribute("aria-label")).toContain("1 errors inside");
    const SUMMARY = wrapper.get(".a_json_editor__summary");
    expect(SUMMARY.get(".a_json_editor__summary__title").text()).toBe("3 errors, 0 warnings");
    const LINK = SUMMARY.findAll("button").find(button => button.text().startsWith("root.address.zip"));
    await LINK.trigger("click");
    await flush();
    expect(document.activeElement.id).toBe(getRowId("editor", "/address/zip"));
    await key(document.activeElement, "F8");
    expect(wrapper.emitted("validate").at(-1)[0].isValid).toBe(false);
    expect(await wrapper.vm.validate()).toMatchObject({ isValid: false });
  });

  it("formats the text with the props, minify, a syntax error keeps the model", async() => {
    const wrapper = mountEditor({ mode: "code", indent: 4, sortKeys: true, modelValue: { b: 1, a: [1, 2] }, inlineArrays: true });
    await flush();
    const TEXTAREA = wrapper.get("textarea");
    expect(TEXTAREA.element.value).toBe("{\n    \"a\": [1, 2],\n    \"b\": 1\n}");
    expect(wrapper.find("[role=\"treegrid\"]").exists()).toBe(false);
    await wrapper.findAll(".a_json_editor__code__toolbar button")[1].trigger("click");
    expect(TEXTAREA.element.value).toBe("{\"a\":[1,2],\"b\":1}");

    TEXTAREA.element.value = "{\n  \"a\": 1,\n  \"b\": x\n}";
    await TEXTAREA.trigger("input");
    await flush();
    expect(wrapper.get(".a_json_editor__code__error").text()).toContain("Syntax error in line 3, column 8");
    expect(TEXTAREA.attributes("aria-invalid")).toBe("true");
    expect(wrapper.emitted("update:modelValue")).toBeUndefined();

    TEXTAREA.element.value = "{\"a\": 2}";
    await TEXTAREA.trigger("input");
    await flush();
    expect(lastModel(wrapper)).toEqual({ a: 2 });
  });

  it("model-type string: the model is JSON text with the format options", async() => {
    const wrapper = mountEditor({ modelType: "string", modelValue: "{\"a\":1}", indent: "tab" });
    await flush();
    row("/a").focus();
    await key(row("/a"), "Enter");
    await typeInto(row("/a").querySelector("input, textarea"), "2");
    await key(row("/a").querySelector("input, textarea"), "Enter");
    expect(lastModel(wrapper)).toBe("{\n\t\"a\": 2\n}");
  });

  it("hooks: before-remove cancels, before-add gives the value, after-change, validate-node, own actions", async() => {
    const afterChange = vi.fn();
    const wrapper = mountEditor({
      beforeRemove: ({ key: removedKey }) => removedKey !== "name",
      beforeAdd: ({ tokens }) => (tokens[0] === "tags" ? "new tag" : undefined),
      afterChange,
      validateNode: ({ value }) => (value === "a11y" ? { level: "warning", message: "Write accessibility" } : null),
      getNodeActions: ({ value }) => (typeof value === "string" ? [{ id: "upper", label: "Upper case", run: ({ value: text }) => text.toUpperCase() }] : []),
    });
    await flush();
    row("/name").focus();
    await key(row("/name"), "Delete");
    expect(wrapper.emitted("update:modelValue")).toBeUndefined();

    row("/tags").focus();
    await key(row("/tags"), "Insert");
    expect(lastModel(wrapper).tags).toEqual(["vue", "a11y", "new tag"]);
    expect(afterChange).toHaveBeenCalledWith(expect.objectContaining({ operation: "add", path: "/tags/2" }));
    expect(row("/tags/1").textContent).toContain("Write accessibility");
    expect(row("/tags/1").classList.contains("a_json_editor__row_warning")).toBe(true);

    row("/name").focus();
    await flush();
    await key(row("/name"), "F10", { shiftKey: true });
    const ITEM = Array.from(document.querySelectorAll("[role=\"menuitem\"]")).find(item => item.textContent.includes("Upper case"));
    ITEM.click();
    await flush();
    expect(lastModel(wrapper).name).toBe("ANNA");
  });

  it("plugins: an own type with detection, view and validation, global and by props", async() => {
    AJsonEditorPluginOptions.plugins = [{
      name: "color",
      types: [{
        name: "color",
        label: "Color",
        detect: value => typeof value === "string" && /^#[0-9a-f]{6}$/i.test(value),
        view: { props: ["value"],
                render() {
                  return h("span", { class: "color_chip" }, this.value);
                } },
        validate: value => (value === "#000000" ? "Black is not allowed" : null),
      }],
    }];
    const wrapper = mountEditor({
      modelValue: { main: "#ff0000", text: "#000000" },
      plugins: [{ name: "upper", toolbar: [{ id: "clear", label: "Clear all", run: ({ replaceDocument }) => replaceDocument({}) }] }],
    });
    await flush();
    expect(row("/main").querySelector(".color_chip").textContent).toBe("#ff0000");
    expect(row("/main").getAttribute("aria-label")).toBe("main: #ff0000, Color");
    expect(row("/text").textContent).toContain("Black is not allowed");
    await wrapper.findAll(".a_json_editor__tool").find(button => button.text() === "Clear all").trigger("click");
    await flush();
    expect(lastModel(wrapper)).toEqual({});
  });

  it("readonly, readonly-paths, locked-keys and max-depth", async() => {
    const READONLY = mountEditor({ id: "readonly", readonly: true });
    await flush();
    expect(READONLY.get("[role=\"treegrid\"]").attributes("aria-readonly")).toBe("true");
    expect(READONLY.findAll(".a_json_editor__tool").some(button => button.attributes("title")?.startsWith("Undo"))).toBe(false);

    const wrapper = mountEditor({ readonlyPaths: ["/address"], lockedKeys: ["/name"], maxDepth: 1 });
    await flush();
    row("/name").focus();
    await key(row("/name"), "Delete");
    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
    await key(row("/name"), "F2", { shiftKey: true });
    expect(row("/name").querySelector("input, textarea")).toBeNull();
    // max-depth 1: nothing inside "tags" (level 2), the new key goes next to it
    row("/tags").focus();
    await key(row("/tags"), "Insert");
    expect(lastModel(wrapper).tags).toEqual(["vue", "a11y"]);
    expect(Object.keys(lastModel(wrapper))).toEqual(["name", "age", "active", "tags", "key", "address"]);
    expect(row("/address").getAttribute("aria-label")).toContain("read only");
    // inside a readonly path nothing can be changed
    row("/address").focus();
    await key(row("/address"), "Delete");
    expect(Object.keys(lastModel(wrapper))).toContain("address");
  });

  it("big documents: virtual rows with aria-rowcount and aria-rowindex, show more in big arrays", async() => {
    const LIST = Array.from({ length: 500 }, (_, index) => `item ${ index }`);
    const wrapper = mountEditor({ modelValue: { list: LIST }, expandLevel: 2, virtualThreshold: 100, arrayPageSize: 1000 });
    await flush();
    const TREE = wrapper.get("[role=\"treegrid\"]");
    expect(TREE.attributes("aria-rowcount")).toBe("502");
    expect(wrapper.findAll("[role=\"row\"]").length).toBeLessThan(100);
    row("").focus();
    await key(row(""), "End");
    expect(document.activeElement.id).toBe(getRowId("editor", "/list/499"));
    expect(document.activeElement.getAttribute("aria-rowindex")).toBe("502");

    const PAGED = mountEditor({ id: "paged", modelValue: { list: [1, 2, 3, 4, 5] }, expandLevel: 2, arrayPageSize: 2 });
    await flush();
    const MORE = PAGED.get(".a_json_editor__row_more");
    expect(MORE.text()).toBe("Show 2 more");
    await MORE.trigger("click");
    await flush();
    expect(PAGED.get(".a_json_editor__row_more").text()).toBe("Show 1 more");
    await PAGED.get(".a_json_editor__row_more").trigger("click");
    await flush();
    expect(PAGED.find(".a_json_editor__row_more").exists()).toBe(false);
  });

  it("moves with Alt+arrows, drag and drop, copy and paste", async() => {
    const wrapper = mountEditor();
    await flush();
    row("/tags").focus();
    await key(row("/tags"), "ArrowRight");
    row("/tags/0").focus();
    await key(row("/tags/0"), "ArrowDown", { altKey: true });
    expect(lastModel(wrapper).tags).toEqual(["a11y", "vue"]);
    expect(document.activeElement.id).toBe(getRowId("editor", "/tags/1"));

    // drag "name" before "tags"
    const dataTransfer = { setData: () => {}, effectAllowed: "" };
    const drag = (element, type) => {
      const EVENT = new Event(type, { bubbles: true, cancelable: true });
      EVENT.dataTransfer = dataTransfer;
      element.dispatchEvent(EVENT);
    };
    drag(row("/name"), "dragstart");
    drag(row("/tags"), "dragover");
    drag(row("/tags"), "drop");
    await flush();
    expect(Object.keys(lastModel(wrapper))).toEqual(["age", "active", "name", "tags", "address"]);

    row("/age").focus();
    await key(row("/age"), "c", { ctrlKey: true });
    row("/address").focus();
    await key(row("/address"), "ArrowRight");
    await key(row("/address"), "v", { ctrlKey: true });
    expect(lastModel(wrapper).address).toEqual({ city: "Bonn", zip: "53111", age: 30 });
  });

  it("is available in AForm as type jsonEditor and has the methods", async() => {
    expect(AUiComponents.jsonEditor).toBe(AJsonEditor);
    const wrapper = mountEditor();
    await flush();
    wrapper.vm.set("/name", "Carl");
    await flush();
    expect(lastModel(wrapper).name).toBe("Carl");
    expect(wrapper.vm.get("/address/city")).toBe("Bonn");
    wrapper.vm.focusPath("/address/zip");
    await flush();
    expect(document.activeElement.id).toBe(getRowId("editor", "/address/zip"));
    wrapper.vm.undo();
    await flush();
    expect(lastModel(wrapper).name).toBe("Anna");
  });
  it("selects many rows with Space, Shift+arrows, Ctrl+click, Shift+click and Ctrl+A, Escape clears", async() => {
    const wrapper = mountEditor();
    await flush();
    const API = wrapper.vm.$.setupState.API;
    expect(wrapper.get("[role=\"treegrid\"]").attributes("aria-multiselectable")).toBe("true");
    expect(row("/name").getAttribute("aria-selected")).toBe("false");
    expect(row("").hasAttribute("aria-selected")).toBe(false);

    row("/name").focus();
    await key(row("/name"), " ");
    expect(row("/name").getAttribute("aria-selected")).toBe("true");
    await key(row("/name"), "ArrowDown", { shiftKey: true });
    expect(document.activeElement.id).toBe(getRowId("editor", "/age"));
    expect(row("/age").getAttribute("aria-selected")).toBe("true");
    expect(status(wrapper)).toBe("2 selected");
    expect(wrapper.get(".a_json_editor__status__selection").text()).toContain("2 selected");

    await key(document.activeElement, "Escape");
    expect(row("/name").getAttribute("aria-selected")).toBe("false");

    await wrapper.get(`#${ getRowId("editor", "/active") }`).trigger("click", { ctrlKey: true });
    await wrapper.get(`#${ getRowId("editor", "/address") }`).trigger("click", { ctrlKey: true });
    expect(API.selected.value.size).toBe(2);
    await wrapper.get(`#${ getRowId("editor", "/name") }`).trigger("click", { shiftKey: true });
    // the range from the anchor (address) to name
    expect([...API.selected.value]).toEqual(["/name", "/age", "/active", "/tags", "/address"]);
    await wrapper.get(`#${ getRowId("editor", "/age") }`).trigger("click");
    expect(API.selected.value.size).toBe(0);

    row("/age").focus();
    await key(row("/age"), "a", { ctrlKey: true });
    expect(API.selected.value.size).toBe(5);
    expect(wrapper.emitted("selectionChange").at(-1)[0].paths).toHaveLength(5);
  });

  it("removes, moves, copies and pastes the selected rows as one step", async() => {
    const wrapper = mountEditor();
    await flush();
    row("/name").focus();
    await key(row("/name"), " ");
    await key(row("/name"), "ArrowDown", { shiftKey: true });
    // move both down together
    await key(document.activeElement, "ArrowDown", { altKey: true });
    expect(Object.keys(lastModel(wrapper))).toEqual(["active", "name", "age", "tags", "address"]);
    expect(row("/name").getAttribute("aria-selected")).toBe("true");
    expect(status(wrapper)).toBe("Moved: 2 nodes");

    // copy both and paste them into the open address
    await key(document.activeElement, "c", { ctrlKey: true });
    expect(status(wrapper)).toBe("Copied: 2 nodes");
    row("/address").focus();
    await key(row("/address"), "ArrowRight");
    await key(row("/address"), "v", { ctrlKey: true });
    expect(lastModel(wrapper).address).toEqual({ city: "Bonn", zip: "53111", name: "Anna", age: 30 });

    // remove both: one step of the history
    await key(document.activeElement, "Escape");
    expect(wrapper.vm.$.setupState.API.selected.value.size).toBe(0);
    await wrapper.get(`#${ getRowId("editor", "/name") }`).trigger("click", { ctrlKey: true });
    await wrapper.get(`#${ getRowId("editor", "/age") }`).trigger("click", { ctrlKey: true });
    row("/age").focus();
    await key(row("/age"), "Delete");
    expect(Object.keys(lastModel(wrapper))).toEqual(["active", "tags", "address"]);
    expect(status(wrapper)).toBe("Removed: 2 nodes. Ctrl+Z undoes it.");
    expect(wrapper.vm.$.setupState.API.selected.value.size).toBe(0);
    await tool(wrapper, "Undo").trigger("click");
    await flush();
    expect(Object.keys(lastModel(wrapper))).toEqual(["active", "name", "age", "tags", "address"]);
  });

  it("multiline strings: a textarea, Shift+Enter adds a line, the view shows the first lines", async() => {
    const wrapper = mountEditor({ modelValue: { note: "one" }, multilineMaxRows: 4 });
    await flush();
    row("/note").focus();
    await key(row("/note"), "Enter");
    const AREA = row("/note").querySelector("textarea");
    expect(AREA).not.toBeNull();
    expect(AREA.getAttribute("rows")).toBe("1");
    const EVENT = await key(AREA, "Enter", { shiftKey: true });
    expect(EVENT.defaultPrevented).toBe(false);
    expect(row("/note").querySelector("textarea")).not.toBeNull();
    await typeInto(AREA, "1\n2\n3\n4\n5");
    expect(AREA.getAttribute("rows")).toBe("4");
    await key(AREA, "Enter");
    expect(lastModel(wrapper).note).toBe("1\n2\n3\n4\n5");
    expect(row("/note").querySelector(".a_json_editor__value_multiline").textContent).toBe("1\n2\n3 +2 lines");
    expect(row("/note").getAttribute("aria-label")).toBe("note: 1 2 3 4 5, String, 5 lines");

    mountEditor({ id: "single", modelValue: { note: "one" }, multilineStrings: false });
    await flush();
    const SINGLE = document.getElementById(getRowId("single", "/note"));
    SINGLE.focus();
    await key(SINGLE, "Enter");
    expect(SINGLE.querySelector("textarea")).toBeNull();
    expect(SINGLE.querySelector("input")).not.toBeNull();
  });

  it("takes the defaults of AComponentsPlugin", async() => {
    componentsPluginOptions.AJsonEditor = { props: { density: "compact", showTypes: false, allowFullscreen: false } };
    try {
      const wrapper = mountEditor();
      await flush();
      expect(wrapper.get(".a_json_editor").classes()).toContain("a_json_editor_compact");
      expect(wrapper.find(".a_json_editor__cell_type").exists()).toBe(false);
      expect(wrapper.find(".a_json_editor__tool_fullscreen").exists()).toBe(false);
      // a prop wins
      const OWN = mountEditor({ id: "own", density: "normal" });
      await flush();
      expect(OWN.get(".a_json_editor").classes()).toContain("a_json_editor_normal");
    } finally {
      delete componentsPluginOptions.AJsonEditor;
    }
  });

  it("full screen: the Fullscreen API, else a layer that Escape ends", async() => {
    const wrapper = mountEditor();
    await flush();
    const BUTTON = wrapper.get(".a_json_editor__tool_fullscreen");
    expect(BUTTON.attributes("aria-pressed")).toBe("false");
    await BUTTON.trigger("click");
    await flush();
    expect(BUTTON.attributes("aria-pressed")).toBe("true");
    expect(wrapper.get(".a_json_editor").classes()).toContain("a_json_editor_fullscreen");
    expect(document.documentElement.classList.contains("a_json_editor_fullscreen_open")).toBe(true);
    expect(status(wrapper)).toBe("Full screen. Escape ends it.");
    expect(wrapper.emitted("fullscreen")[0][0]).toEqual({ isFullscreen: true });
    row("").focus();
    await key(row(""), "Escape");
    expect(BUTTON.attributes("aria-pressed")).toBe("false");
    expect(document.documentElement.classList.contains("a_json_editor_fullscreen_open")).toBe(false);

    // with the Fullscreen API
    const requestFullscreen = vi.fn(() => Promise.resolve());
    HTMLElement.prototype.requestFullscreen = requestFullscreen;
    try {
      await BUTTON.trigger("click");
      await flush();
      expect(requestFullscreen).toHaveBeenCalledTimes(1);
      expect(document.documentElement.classList.contains("a_json_editor_fullscreen_open")).toBe(false);
    } finally {
      delete HTMLElement.prototype.requestFullscreen;
    }
  });

  it("repair: the changes before, apply is one step of the history", async() => {
    const wrapper = mountEditor({ mode: "code", modelValue: { a: 1 } });
    await flush();
    const TEXTAREA = wrapper.get("textarea");
    await typeInto(TEXTAREA.element, "{a: 'x', b: [1 2],}");
    expect(wrapper.find(".a_json_editor__repair").exists()).toBe(false);
    const REPAIR = wrapper.get(".a_json_editor__repair_button");
    expect(REPAIR.attributes("aria-expanded")).toBe("false");
    await REPAIR.trigger("click");
    await flush();
    expect(REPAIR.attributes("aria-expanded")).toBe("true");
    expect(REPAIR.attributes("aria-controls")).toBe("editor_code_repair");
    const HEADING = wrapper.get(".a_json_editor__repair__heading");
    expect(document.activeElement).toBe(HEADING.element);
    expect(HEADING.text()).toBe("Suggested changes: 5");
    const ITEMS = wrapper.findAll(".a_json_editor__repair__item").map(item => item.text());
    expect(ITEMS).toContain("Line 1: Missing comma added");
    expect(ITEMS).toContain("Line 1: Single quotes replaced");
    expect(wrapper.get(".a_json_editor__repair__result").text()).toBe("{\"a\": \"x\", \"b\": [1, 2]}");
    // nothing changes before "Apply"
    expect(wrapper.emitted("update:modelValue")).toBeUndefined();

    await wrapper.findAll(".a_json_editor__repair__actions button")[0].trigger("click");
    await flush();
    expect(lastModel(wrapper)).toEqual({ a: "x", b: [1, 2] });
    expect(TEXTAREA.element.value).toBe("{\n  \"a\": \"x\",\n  \"b\": [\n    1,\n    2\n  ]\n}");
    expect(wrapper.find(".a_json_editor__code__error").exists()).toBe(false);
    expect(wrapper.find(".a_json_editor__repair").exists()).toBe(false);
    expect(status(wrapper)).toBe("Repaired: 5 changes. Ctrl+Z undoes it.");
    expect(document.activeElement).toBe(TEXTAREA.element);
    wrapper.vm.undo();
    await flush();
    expect(lastModel(wrapper)).toEqual({ a: 1 });
  });

  it("repair: a text that can not be repaired, cancel, a string model that is no JSON", async() => {
    const wrapper = mountEditor({ mode: "code", modelValue: { a: 1 } });
    await flush();
    const TEXTAREA = wrapper.get("textarea");
    await typeInto(TEXTAREA.element, "{\"a\" 1}");
    await wrapper.get(".a_json_editor__repair_button").trigger("click");
    await flush();
    expect(wrapper.get(".a_json_editor__repair__heading").text()).toBe("The text could not be repaired.");
    expect(wrapper.findAll(".a_json_editor__repair__actions button")).toHaveLength(1);
    await wrapper.get(".a_json_editor__repair__actions button").trigger("click");
    await flush();
    expect(wrapper.find(".a_json_editor__repair").exists()).toBe(false);
    expect(document.activeElement).toBe(TEXTAREA.element);

    const STRING = mountEditor({ id: "string", mode: "code", modelType: "string", modelValue: "{a: 1, // one\n}" });
    await flush();
    const STRING_TEXTAREA = STRING.get("textarea");
    expect(STRING_TEXTAREA.element.value).toBe("{a: 1, // one\n}");
    expect(STRING_TEXTAREA.attributes("aria-invalid")).toBe("true");
    await STRING.get(".a_json_editor__repair_button").trigger("click");
    await flush();
    await STRING.findAll(".a_json_editor__repair__actions button")[0].trigger("click");
    await flush();
    expect(lastModel(STRING)).toBe("{\n  \"a\": 1\n}");
  });

  it("replace: the current match, all matches as one step, read-only and existing keys are skipped", async() => {
    const wrapper = mountEditor({
      modelValue: { title: "old title", note: "old", count: 5, oldKey: "x", old_b: 1, new_b: 2, list: ["old"] },
      readonlyPaths: ["/note"],
    });
    await flush();
    const TOGGLE = wrapper.get("#editor_replace_toggle");
    expect(TOGGLE.attributes("aria-expanded")).toBe("false");
    row("").focus();
    await key(row(""), "h", { ctrlKey: true });
    expect(TOGGLE.attributes("aria-expanded")).toBe("true");
    expect(TOGGLE.attributes("aria-controls")).toBe("editor_replace_group");
    expect(document.activeElement.id).toBe("editor_replace");
    expect(wrapper.get("#editor_replace_group").attributes("role")).toBe("group");
    expect(wrapper.get("label[for=\"editor_replace\"]").text()).toBe("Replace with");

    wrapper.vm.search("old");
    await flush();
    const REPLACE = document.getElementById("editor_replace");
    await typeInto(REPLACE, "new");
    // Enter: the current match (the first one)
    await key(REPLACE, "Enter");
    expect(lastModel(wrapper).title).toBe("new title");
    expect(lastModel(wrapper).oldKey).toBe("x");
    expect(status(wrapper)).toBe("Replaced: 1");
    // the place stays: the next match is the current one
    expect(wrapper.get("#editor_search_count").text()).toBe("1 of 4");
    wrapper.vm.$.setupState.API.goToMatch(1);
    await flush();
    await key(REPLACE, "Enter");
    expect(lastModel(wrapper).newKey).toBe("x");
    expect(wrapper.get("#editor_search_count").text()).toBe("2 of 3");

    // Ctrl+Enter: all matches; /note is read-only, "new_b" exists already
    await key(REPLACE, "Enter", { ctrlKey: true });
    const MODEL = lastModel(wrapper);
    expect(MODEL).toEqual({ title: "new title", note: "old", count: 5, newKey: "x", old_b: 1, new_b: 2, list: ["new"] });
    expect(Object.keys(MODEL)).toEqual(["title", "note", "count", "newKey", "old_b", "new_b", "list"]);
    expect(status(wrapper)).toBe("Replaced: 1, skipped: 2 (read-only, locked or the key exists)");
    const HISTORY = wrapper.vm.$.setupState.API.history.value;
    expect(HISTORY.at(-1).label).toBe("_A_JSON_EDITOR_HISTORY_REPLACE_");

    wrapper.vm.undo();
    await flush();
    expect(lastModel(wrapper).list).toEqual(["old"]);
    expect(lastModel(wrapper).newKey).toBe("x");

    await key(REPLACE, "Escape");
    expect(TOGGLE.attributes("aria-expanded")).toBe("false");
    expect(document.activeElement).toBe(TOGGLE.element);
  });

  it("replace: with a regular expression $1 inserts a group, the method replace, not in readonly", async() => {
    const wrapper = mountEditor({ modelValue: { a: "2025-03-05", b: "x $ y", k1: 1, k2: 2 } });
    await flush();
    await wrapper.findAll(".a_json_editor__search_option").find(button => button.text() === "Regular expression").trigger("click");
    wrapper.vm.search("(\\d{4})-(\\d{2})-(\\d{2})");
    await flush();
    expect(await wrapper.vm.replace("$3.$2.$1")).toEqual({ count: 1, skipped: 0 });
    await flush();
    expect(lastModel(wrapper).a).toBe("05.03.2025");

    // two keys can not get the same new key
    wrapper.vm.search("^k\\d$");
    await flush();
    expect(await wrapper.vm.replace("k")).toEqual({ count: 1, skipped: 1 });
    await flush();
    expect(Object.keys(lastModel(wrapper))).toEqual(["a", "b", "k1", "k"]);

    // without regex "$" stays as it is
    await wrapper.findAll(".a_json_editor__search_option").find(button => button.text() === "Regular expression").trigger("click");
    wrapper.vm.search("x");
    await flush();
    await wrapper.vm.replace("[$&]");
    await flush();
    expect(lastModel(wrapper).b).toBe("[$&] $ y");

    const READONLY = mountEditor({ id: "readonly", readonly: true });
    await flush();
    expect(READONLY.find("#readonly_replace_toggle").exists()).toBe(false);
  });

  it("ready plugins: color, date, url, image and boolean as a switch", async() => {
    const wrapper = mountEditor({
      modelValue: {
        color: "#ff0000",
        day: "2025-03-05",
        at: "2025-03-05T13:30:00",
        site: "https://example.com/a",
        logo: "https://example.com/logo.png",
        on: true,
        name: "Anna",
      },
      plugins: AJsonEditorPlugins,
    });
    await flush();
    expect(row("/color").getAttribute("aria-label")).toBe("color: #ff0000, Color");
    expect(row("/color").querySelector(".a_json_editor__plugin_color__swatch").getAttribute("aria-hidden")).toBe("true");
    const DAY = row("/day").querySelector("time");
    expect(DAY.getAttribute("datetime")).toBe("2025-03-05");
    expect(DAY.textContent).toBe("05.03.2025");
    expect(row("/day").getAttribute("aria-label")).toBe("day: 2025-03-05, Date");
    expect(row("/at").querySelector("time").textContent).toBe("05.03.2025 13:30");
    const LINK = row("/site").querySelector("a");
    expect(LINK.getAttribute("href")).toBe("https://example.com/a");
    expect(LINK.getAttribute("target")).toBe("_blank");
    expect(LINK.getAttribute("rel")).toBe("noopener noreferrer");
    expect(LINK.getAttribute("tabindex")).toBe("-1");
    expect(LINK.textContent).toBe("https://example.com/a (opens in a new window)");
    expect(row("/logo").querySelector("img").getAttribute("alt")).toBe("");
    expect(row("/logo").getAttribute("aria-label")).toBe("logo: https://example.com/logo.png, Image");
    expect(row("/name").querySelector(".a_json_editor__plugin_color, a, time")).toBeNull();
    // no functions as attributes of the views
    expect(row("/color").querySelector("[setvalue], [translate]")).toBeNull();

    const SWITCH = row("/on").querySelector("[role=\"switch\"]");
    expect(SWITCH.getAttribute("aria-checked")).toBe("true");
    SWITCH.click();
    await flush();
    expect(lastModel(wrapper).on).toBe(false);

    // the color picker as the editor, the focus is in it
    row("/color").focus();
    await key(row("/color"), "Enter");
    const EDITOR = row("/color").querySelector(".a_json_editor__edit_plugin");
    expect(EDITOR).not.toBeNull();
    expect(EDITOR.contains(document.activeElement)).toBe(true);

    mountEditor({ id: "readonly", readonly: true, modelValue: { on: true }, plugins: [AJsonEditorSwitchPlugin] });
    await flush();
    expect(document.getElementById(getRowId("readonly", "/on")).querySelector("[role=\"switch\"]").disabled).toBe(true);
  });

  it("enum of the schema and of the rules: a select of the allowed values", async() => {
    const wrapper = mountEditor({
      modelValue: { size: "m", level: 9 },
      schema: { type: "object", properties: { size: { enum: ["s", "m", "l"] } } },
      rules: { "/level": { enum: [1, 2, 3] } },
    });
    await flush();
    row("/size").focus();
    await key(row("/size"), "Enter");
    const SELECT = row("/size").querySelector("select");
    expect([...SELECT.options].map(option => option.textContent)).toEqual(["s", "m", "l"]);
    expect(SELECT.value).toBe("1");
    expect(SELECT.getAttribute("aria-label")).toBe("Value of size");
    SELECT.value = "2";
    SELECT.dispatchEvent(new Event("change"));
    await key(SELECT, "Enter");
    expect(lastModel(wrapper).size).toBe("l");

    row("/level").focus();
    await key(row("/level"), "Enter");
    const LEVEL = row("/level").querySelector("select");
    expect([...LEVEL.options].map(option => option.textContent)).toEqual(["9 (not allowed)", "1", "2", "3"]);
    LEVEL.value = "2";
    LEVEL.dispatchEvent(new Event("change"));
    await key(LEVEL, "Enter");
    expect(lastModel(wrapper).level).toBe(2);
  });

  it("big numbers: warn, bigint and string", async() => {
    const TEXT = "{\"id\": 12345678901234567890, \"n\": 1}";
    const WARN = mountEditor({ modelType: "string", modelValue: TEXT });
    await flush();
    expect(row("/id").textContent).toContain("The number is not exact in JavaScript (rounded).");
    expect(row("/n").textContent).not.toContain("not exact");
    row("/n").focus();
    await key(row("/n"), "Enter");
    await typeInto(row("/n").querySelector("input"), "98765432109876543210");
    await key(row("/n").querySelector("input"), "Enter");
    expect(row("/n").textContent).toContain("The number has too many digits for JavaScript and would be rounded.");
    expect(WARN.emitted("update:modelValue")).toBeUndefined();
    await key(row("/n").querySelector("input"), "Escape");
    WARN.unmount();
    wrappers.splice(wrappers.indexOf(WARN), 1);

    const BIGINT = mountEditor({ modelType: "string", modelValue: TEXT, bigNumbers: "bigint" });
    await flush();
    expect(row("/id").textContent).toContain("12345678901234567890");
    expect(row("/id").textContent).not.toContain("not exact");
    row("/n").focus();
    await key(row("/n"), "Enter");
    await typeInto(row("/n").querySelector("input"), "98765432109876543210");
    await key(row("/n").querySelector("input"), "Enter");
    expect(lastModel(BIGINT)).toBe("{\n  \"id\": 12345678901234567890,\n  \"n\": 98765432109876543210\n}");
    // copy, duplicate with BigInt
    row("/n").focus();
    await key(row("/n"), "d", { ctrlKey: true });
    expect(lastModel(BIGINT)).toContain("\"n_1\": 98765432109876543210");
    BIGINT.unmount();
    wrappers.splice(wrappers.indexOf(BIGINT), 1);

    mountEditor({ modelType: "string", modelValue: TEXT, bigNumbers: "string" });
    await flush();
    expect(row("/id").getAttribute("aria-label")).toBe("id: 12345678901234567890, String");
  });
});
