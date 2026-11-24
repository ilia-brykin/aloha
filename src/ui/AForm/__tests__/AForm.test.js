import {
  nextTick,
} from "vue";
import {
  afterEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import {
  mount,
} from "@vue/test-utils";
import {
  AForm,
  AModalForm,
} from "../../../index";

const DATA = [{ id: "name", label: "Name", type: "text" }];

const wrappers = [];

afterEach(() => {
  wrappers.splice(0).forEach(wrapper => wrapper.unmount());
});

const submit = form => {
  const EVENT = new Event("submit", { bubbles: true, cancelable: true });
  form.dispatchEvent(EVENT);
  return EVENT;
};

describe("AForm", () => {
  it("does not reload the page on submit (Enter in a field) and emits submit", () => {
    const wrapper = mount(AForm, { props: { data: DATA, modelValue: {} }, attachTo: document.body });
    wrappers.push(wrapper);

    const EVENT = submit(wrapper.element);
    expect(EVENT.defaultPrevented).toBe(true);
    expect(wrapper.emitted("submit")[0][0]).toBe(EVENT);
  });

  it("has no submit handling with another tag", () => {
    const wrapper = mount(AForm, { props: { data: DATA, modelValue: {}, tag: "div" }, attachTo: document.body });
    wrappers.push(wrapper);

    expect(wrapper.element.tagName).toBe("DIV");
    expect(submit(wrapper.element).defaultPrevented).toBe(false);
  });
});

describe("AModalForm", () => {
  const mountModalForm = (props = {}) => {
    const save = vi.fn();
    const wrapper = mount(AModalForm, {
      props: { close: () => {}, save, dataForm: DATA, modelValue: {}, headerText: "Form", ...props },
      attachTo: document.body,
    });
    wrappers.push(wrapper);
    return { save, wrapper };
  };

  it("saves with Enter in a field (submit of the form)", async() => {
    const { save } = mountModalForm();
    await nextTick();

    submit(document.querySelector(".a_modal form.a_form"));
    expect(save).toHaveBeenCalledTimes(1);
  });

  it("does not save with Enter when saving is disabled or loading", async() => {
    const disabled = mountModalForm({ disabledSave: true });
    await nextTick();
    submit(document.querySelector(".a_modal form.a_form"));
    expect(disabled.save).not.toHaveBeenCalled();
    wrappers.splice(0).forEach(wrapper => wrapper.unmount());

    const loading = mountModalForm({ loading: true });
    await nextTick();
    submit(document.querySelector(".a_modal form.a_form"));
    expect(loading.save).not.toHaveBeenCalled();
  });
});
