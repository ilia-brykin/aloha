import {
  afterEach,
  describe,
  expect,
  it,
} from "vitest";
import {
  mount,
} from "@vue/test-utils";

import AAlert from "../../AAlert/AAlert";
import ASpinner from "../../ASpinner/ASpinner";

import AComponentsPlugin, {
  componentsPluginOptions,
  getComponentOption,
  getPropDefault,
} from "../AComponentsPlugin";

afterEach(() => {
  Object.keys(componentsPluginOptions).forEach(key => delete componentsPluginOptions[key]);
});

describe("AComponentsPlugin", () => {
  it("merges objects (props, icons) per component on every install, other values are replaced", () => {
    AComponentsPlugin.install(undefined, { AModal: { props: { useEscape: false } }, ASelectStyle: { cssClasses: [{ value: "a" }] } });
    AComponentsPlugin.install(undefined, { AModal: { props: { size: "large" } }, ASelectStyle: { cssClasses: [{ value: "b" }] } });
    expect(componentsPluginOptions).toEqual({
      AModal: { props: { useEscape: false, size: "large" } },
      ASelectStyle: { cssClasses: [{ value: "b" }] },
    });
  });

  it("getPropDefault: the plugin value, an explicit undefined or the default of the component", () => {
    AComponentsPlugin.install(undefined, { AModal: { props: { useEscape: false, teleportSelector: undefined } } });
    expect(getPropDefault("AModal", "useEscape", true)).toBe(false);
    expect(getPropDefault("AModal", "teleportSelector", "body")).toBeUndefined();
    expect(getPropDefault("AModal", "headerTag", "h2")).toBe("h2");
    expect(getPropDefault("ASelect", "keyId", "value")).toBe("value");
  });

  it("inherits prop defaults from the parent, the component wins", () => {
    AComponentsPlugin.install(undefined, {
      AModal: { props: { closeButtonClass: "parent", useEscape: false } },
      AModalForm: { props: { closeButtonClass: "own" } },
    });
    expect(getPropDefault("AModalForm", "closeButtonClass", "default")).toBe("own");
    expect(getPropDefault("AModalForm", "useEscape", true)).toBe(false);
    expect(getPropDefault("AModalWizard", "closeButtonClass", "default")).toBe("parent");
  });

  it("extends: own parents, null switches the inheritance off, cycles stop", () => {
    AComponentsPlugin.install(undefined, {
      MyBase: { props: { size: "large" } },
      MyComponent: { extends: "MyBase" },
      AModal: { props: { size: "xl" } },
      AModalForm: { extends: null },
      CycleA: { extends: "CycleB" },
      CycleB: { extends: "CycleA" },
    });
    expect(getPropDefault("MyComponent", "size", "small")).toBe("large");
    expect(getPropDefault("AModalForm", "size", "default")).toBe("default");
    expect(getPropDefault("CycleA", "size", "default")).toBe("default");
  });

  it("getComponentOption is not inherited", () => {
    AComponentsPlugin.install(undefined, { ATable: { config: { isHtmlTitleSort: true } } });
    expect(getComponentOption("ATable", "config")).toEqual({ isHtmlTitleSort: true });
    expect(getComponentOption("ATable", "icons", {})).toEqual({});
  });

  it("the components use the settings, the prop wins", () => {
    AComponentsPlugin.install(undefined, {
      ASpinner: { props: { tag: "div" } },
      AAlert: { icons: { info: "<svg class=\"my_icon\"></svg>" } },
    });
    expect(mount(ASpinner).element.tagName).toBe("DIV");
    expect(mount(ASpinner, { props: { tag: "i" } }).element.tagName).toBe("I");
    const ALERT = mount(AAlert, { props: { isVisible: true, showIcon: true, type: "info", text: "Text" } });
    expect(ALERT.find(".my_icon").exists()).toBe(true);
    delete componentsPluginOptions.ASpinner;
    expect(mount(ASpinner).element.tagName).toBe("SPAN");
  });
});
