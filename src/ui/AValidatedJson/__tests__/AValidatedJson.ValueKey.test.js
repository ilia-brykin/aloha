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
  AFieldset,
  AForm,
  AValidatedJson,
} from "../../../index";

import AValidatedJsonItem from "../AValidatedJsonItem/AValidatedJsonItem";
import AValidatedJsonModalCreateOrUpdate from "../AValidatedJsonModalCreateOrUpdate/AValidatedJsonModalCreateOrUpdate";

import {
  setI18n,
  updateTranslation,
} from "../../../ATranslation/compositionAPI/ATranslationAPI";

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

function mountList(props = {}) {
  const wrapper = mount(AValidatedJson, {
    props: {
      id: "values",
      mode: "list",
      valueKey: "value",
      modelValue: ["Aloha", "Vue"],
      elementTemplate: "{{ value }}",
      children: [{ id: "value", type: "text", label: "Value", required: true }],
      ...props,
    },
    global: {
      stubs: {
        AModalForm: { render() {
          return h("div");
        } },
      },
    },
  });
  wrappers.push(wrapper);
  return wrapper;
}

describe("AValidatedJson valueKey rendering", () => {
  it("displays primitive values in readonly labels and previews", async() => {
    const wrapper = mountList({ readonly: true });
    expect(wrapper.findAll("strong").map(label => label.text())).toEqual(["1. Aloha", "2. Vue"]);
    expect(wrapper.find(".test_add").exists()).toBe(false);
    expect(wrapper.findAllComponents(AValidatedJsonItem)[0].props("modelItem")).toEqual({ value: "Aloha" });
    await wrapper.find(".test_toggle_details").trigger("click");
    const preview = wrapper.findComponent(AValidatedJsonItem).findComponent(AFieldset);
    expect(preview.props("readonly")).toBe(true);
    expect(preview.props("modelValue")).toEqual({ value: "Aloha" });
  });

  it("supplies object models to editing and emits primitive arrays", async() => {
    const wrapper = mountList({ errors: { 0: ["Invalid value"] } });
    const item = wrapper.findAllComponents(AValidatedJsonItem)[0];
    expect(item.props("errors")).toEqual({ value: ["Invalid value"] });
    item.vm.openModalUpdate();
    await wrapper.vm.$nextTick();
    const modal = wrapper.findComponent(AValidatedJsonModalCreateOrUpdate);
    expect(modal.props("currentModel")).toEqual({ value: "Aloha" });
    modal.props("close")({ model: { value: "Updated" } });
    expect(wrapper.emitted("update:modelValue").at(-1)).toEqual([["Updated", "Vue"]]);
  });

  it("checks uniqueness against the wrapped primitive values", async() => {
    const wrapper = mountList({ uniqueChildrenIds: ["value"] });
    await wrapper.find(".test_add").trigger("click");
    const modal = wrapper.findComponent(AValidatedJsonModalCreateOrUpdate);
    expect(modal.props("modelAll")).toEqual([{ value: "Aloha" }, { value: "Vue" }]);
    modal.vm.changeDataForm({ fullModel: { value: "Aloha" } });
    await modal.vm.$nextTick();
    modal.vm.save();
    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
    modal.vm.changeDataForm({ fullModel: { value: "New" } });
    await modal.vm.$nextTick();
    modal.vm.save();
    expect(wrapper.emitted("update:modelValue").at(-1)).toEqual([["Aloha", "Vue", "New"]]);
  });

  it("works through AForm without registering a wrapper component", () => {
    const wrapper = mount(AForm, {
      props: {
        modelValue: { tags: ["Aloha"] },
        data: [{
          id: "tags",
          type: "validatedJson",
          mode: "list",
          valueKey: "value",
          children: [{ id: "value", type: "text" }],
        }],
      },
    });
    wrappers.push(wrapper);
    const list = wrapper.findComponent(AValidatedJson);
    expect(list.findComponent(AValidatedJsonItem).props("modelItem")).toEqual({ value: "Aloha" });
    list.vm.closeModalCreateListMode({ model: { value: "Vue" } });
    expect(wrapper.emitted("update:modelValue").at(-1)).toEqual([{ tags: ["Aloha", "Vue"] }]);
  });
});
