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
} from "vitest";
import {
  mount,
} from "@vue/test-utils";
import {
  ACheckbox,
  ADatepicker,
  ADatepickerRange,
  AFieldset,
  AForm,
  AFormElement,
  AGroup,
  AInput,
  AInputCurrency,
  AInputFile,
  AInputNumber,
  AInputNumberRange,
  AJson,
  AMultiselectOrdered,
  AOneCheckbox,
  ARadio,
  ARouterLinkConfig,
  ASelect,
  ASelectIcon,
  ASelectStyle,
  ASlider,
  ASwitch,
  ATemplate,
  ATextarea,
  AValidatedJson,
} from "../../index";

import ACheckboxItem from "../ACheckbox/ACheckboxItem/ACheckboxItem";
import ARadioItem from "../ARadio/ARadioItem/ARadioItem";

import {
  setI18n,
  updateTranslation,
} from "../../ATranslation/compositionAPI/ATranslationAPI";

const wrappers = [];

beforeEach(async() => {
  setI18n({ de: {} });
  updateTranslation();
  await nextTick();
});

afterEach(() => {
  wrappers.forEach(wrapper => wrapper.unmount());
  wrappers.length = 0;
});

function mountReadonly(component, props = {}, slots = {}) {
  const wrapper = mount(component, {
    props: {
      id: "test",
      readonly: true,
      readonlyValueParentClass: ["custom_value", { custom_object: true }],
      ...props,
    },
    slots,
  });
  wrappers.push(wrapper);
  return wrapper;
}

describe("readonlyValueParentClass", () => {
  it.each([
    ACheckbox,
    ADatepicker,
    ADatepickerRange,
    AFieldset,
    AInput,
    AInputCurrency,
    AInputFile,
    AInputNumber,
    AInputNumberRange,
    AJson,
    AMultiselectOrdered,
    AOneCheckbox,
    ARadio,
    ASelect,
    ASelectIcon,
    ASelectStyle,
    ASlider,
    ASwitch,
    ATextarea,
  ])("styles the value wrapper in $name and reacts to class/readonly changes", async component => {
    const wrapper = mountReadonly(component);
    await nextTick();
    const value = wrapper.get(".a_form_element_readonly_value");
    expect(value.classes()).toContain("custom_value");
    expect(value.classes()).toContain("custom_object");
    expect(wrapper.classes()).not.toContain("custom_value");
    await wrapper.setProps({ readonlyValueParentClass: "updated_value" });
    expect(value.classes()).toContain("updated_value");
    expect(value.classes()).not.toContain("custom_value");
    await wrapper.setProps({ readonly: false });
    expect(wrapper.find(".updated_value").exists()).toBe(false);
  });

  it.each([ADatepickerRange, AInputNumberRange])("preserves range layout in $name", component => {
    const wrapper = mountReadonly(component);
    expect(wrapper.get(".custom_value").classes()).toContain("a_form_element_readonly_value_range");
  });

  it("preserves fieldset columns and propagates defaults with per-child overrides", () => {
    const wrapper = mountReadonly(AFieldset, {
      children: [
        { id: "first", type: "text" },
        { id: "second", type: "text", readonlyValueParentClass: "child_value" },
      ],
      modelValue: {},
    });
    const value = wrapper.get(".a_form_element_readonly_value");
    expect(value.classes()).toContain("a_columns");
    const inputs = wrapper.findAllComponents(AInput);
    expect(inputs[0].get(".a_form_element_readonly_value").classes()).toContain("custom_value");
    expect(inputs[1].get(".a_form_element_readonly_value").classes()).toContain("child_value");
    expect(inputs[1].get(".a_form_element_readonly_value").classes()).not.toContain("custom_value");
  });

  it("propagates defaults through AForm and nested groups", () => {
    const wrapper = mountReadonly(AForm, {
      modelValue: { group: {} },
      data: [{
        id: "group",
        type: "group",
        children: [
          { id: "first", type: "text" },
          { id: "second", type: "text", readonlyValueParentClass: "child_value" },
        ],
      }],
    });
    const group = wrapper.findComponent(AGroup);
    expect(group.get(".a_columns").classes()).toContain("custom_value");
    const inputs = group.findAllComponents(AInput);
    expect(inputs[0].get(".a_form_element_readonly_value").classes()).toContain("custom_value");
    expect(inputs[1].get(".a_form_element_readonly_value").classes()).toContain("child_value");
  });

  it("passes the class through AFormElement", () => {
    const wrapper = mountReadonly(AFormElement, { type: "text" });
    expect(wrapper.get(".a_form_element_readonly_value").classes()).toContain("custom_value");
  });

  it.each(["routerLinkConfig", "selectRoute", "multiselectRoute"])("passes the class through ARouterLinkConfig (%s)", async type => {
    const wrapper = mountReadonly(ARouterLinkConfig, { type });
    await nextTick();
    expect(wrapper.get(".a_form_element_readonly_value").classes()).toContain("custom_value");
  });

  it("styles template HTML and slot content only in readonly mode", async() => {
    const wrapper = mountReadonly(ATemplate, { html: "Value", slotName: "content" }, {
      content: () => h("span", "Slot"),
    });
    expect(wrapper.findAll(".a_template.custom_value")).toHaveLength(2);
    await wrapper.setProps({ readonly: false });
    expect(wrapper.find(".custom_value").exists()).toBe(false);
  });

  it.each(["list", "json"])("styles AValidatedJson values and previews in %s mode", async mode => {
    const wrapper = mountReadonly(AValidatedJson, {
      mode,
      children: [{ id: "value", type: "text" }],
      modelValue: mode === "list" ? [{ value: "Hello" }] : { first: { value: "Hello" } },
    });
    expect(wrapper.get("ul.a_list_group").classes()).toContain("custom_value");
    await wrapper.get(".test_toggle_details").trigger("click");
    expect(wrapper.get(".a_form_element_readonly_value").classes()).toContain("custom_value");
    await wrapper.setProps({ readonly: false });
    expect(wrapper.get("ul.a_list_group").classes()).not.toContain("custom_value");
  });

  it("styles AValidatedJson values in single mode", () => {
    const wrapper = mountReadonly(AValidatedJson, {
      mode: "single",
      children: [{ id: "value", type: "text" }],
      modelValue: { value: "Hello" },
    });
    expect(wrapper.get(".a_form_element_readonly_value").classes()).toContain("custom_value");
  });

  it.each([ACheckboxItem, ARadioItem])("styles standalone readonly $name", async component => {
    const wrapper = mountReadonly(component, { itemIndex: 0, dataItem: { label: "Value", value: 1 } });
    expect(wrapper.classes()).toContain("custom_value");
    await wrapper.setProps({ readonly: false });
    expect(wrapper.find(".custom_value").exists()).toBe(false);
  });

  it.each([false, true])("shows file names without file input (multiple: %s)", isMultiple => {
    const files = [{ name: "<first>.txt" }, { name: "second.txt" }];
    const wrapper = mountReadonly(AInputFile, {
      isMultiple,
      modelValue: isMultiple ? files : files[0],
    });
    expect(wrapper.findAll("li").map(item => item.text())).toEqual(isMultiple ? ["<first>.txt", "second.txt"] : ["<first>.txt"]);
    expect(wrapper.find("input[type=file]").exists()).toBe(false);
    expect(wrapper.find("first").exists()).toBe(false);
  });

  it("shows readonlyDefault for an empty file value", () => {
    const wrapper = mountReadonly(AInputFile, { readonlyDefault: "No files" });
    expect(wrapper.get(".a_form_element_readonly_value").text()).toBe("No files");
  });
});
