import {
  afterEach,
  describe,
  expect,
  it,
} from "vitest";
import {
  mount,
} from "@vue/test-utils";

import ASpinner from "../../ASpinner/ASpinner";

import APropsDefaultPlugin, {
  getPropDefault,
  propsDefaultPluginOptions,
} from "../APropsDefaultPlugin";

afterEach(() => {
  Object.keys(propsDefaultPluginOptions).forEach(key => delete propsDefaultPluginOptions[key]);
});

describe("APropsDefaultPlugin", () => {
  it("merges the props per component on every install", () => {
    APropsDefaultPlugin.install(undefined, { AModal: { useEscape: false } });
    APropsDefaultPlugin.install(undefined, { AModal: { size: "large" }, ASelect: { keyId: "id" } });
    expect(propsDefaultPluginOptions).toEqual({
      AModal: { useEscape: false, size: "large" },
      ASelect: { keyId: "id" },
    });
  });

  it("getPropDefault: the plugin value, an explicit undefined or the default of the component", () => {
    APropsDefaultPlugin.install(undefined, { AModal: { useEscape: false, teleportSelector: undefined } });
    expect(getPropDefault("AModal", "useEscape", true)).toBe(false);
    expect(getPropDefault("AModal", "teleportSelector", "body")).toBeUndefined();
    expect(getPropDefault("AModal", "headerTag", "h2")).toBe("h2");
    expect(getPropDefault("ASelect", "keyId", "value")).toBe("value");
  });

  it("the component uses the default from the plugin, the prop wins", () => {
    APropsDefaultPlugin.install(undefined, { ASpinner: { tag: "div" } });
    expect(mount(ASpinner).element.tagName).toBe("DIV");
    expect(mount(ASpinner, { props: { tag: "i" } }).element.tagName).toBe("I");
    delete propsDefaultPluginOptions.ASpinner;
    expect(mount(ASpinner).element.tagName).toBe("SPAN");
  });
});
