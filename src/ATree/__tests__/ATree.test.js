import {
  h,
  nextTick,
} from "vue";
import {
  afterEach,
  describe,
  expect,
  it,
} from "vitest";
import {
  flushPromises,
  mount,
} from "@vue/test-utils";

import {
  getItemsFromJson,
} from "../utils/utils";

import ATree from "../ATree";

const DATA = [
  {
    id: "fruits",
    label: "Fruits",
    children: [
      { id: "apple", label: "Apple" },
      { id: "banana", label: "Banana" },
      { id: "cherry", label: "Cherry", disabled: true },
    ],
  },
  {
    id: "vegetables",
    label: "Vegetables",
    children: [
      { id: "carrot", label: "Carrot" },
    ],
  },
  { id: "bread", label: "Bread" },
];

const wrappers = [];

const mountTree = (props = {}, options = {}) => {
  const wrapper = mount(ATree, {
    props: {
      data: DATA,
      ariaLabel: "Food",
      "onUpdate:modelValue": model => wrapper.setProps({ modelValue: model }),
      "onUpdate:selected": key => wrapper.setProps({ selected: key }),
      ...props,
    },
    attachTo: document.body,
    ...options,
  });
  wrappers.push(wrapper);
  return wrapper;
};

const items = wrapper => wrapper.findAll("[role=treeitem]");
const item = (wrapper, label) => items(wrapper).find(node => node.get(".a_tree__node").text().includes(label));
const labels = wrapper => items(wrapper).map(node => node.get(".a_tree__label").text());
const press = async(element, key) => {
  await element.trigger("keydown", { key });
  await flushPromises();
};

afterEach(() => {
  wrappers.splice(0).forEach(wrapper => wrapper.unmount());
});

describe("ATree", () => {
  it("renders a tree with ARIA attributes and a roving tabindex", async() => {
    const wrapper = mountTree();
    await nextTick();
    const TREE = wrapper.get("[role=tree]");
    expect(TREE.attributes("aria-label")).toBe("Food");
    expect(labels(wrapper)).toEqual(["Fruits", "Vegetables", "Bread"]);
    const FRUITS = item(wrapper, "Fruits");
    expect(FRUITS.attributes()).toMatchObject({
      "aria-level": "1",
      "aria-setsize": "3",
      "aria-posinset": "1",
      "aria-expanded": "false",
      "aria-selected": "false",
      tabindex: "0",
    });
    expect(wrapper.get(`#${ FRUITS.attributes("aria-labelledby") }`).text()).toBe("Fruits");
    expect(item(wrapper, "Bread").attributes("aria-expanded")).toBeUndefined();
    expect(item(wrapper, "Bread").attributes("tabindex")).toBe("-1");
  });

  it("expands with a click, by level and with isExpandAll", async() => {
    const wrapper = mountTree();
    await nextTick();
    await item(wrapper, "Fruits").get(".a_tree__node").trigger("click");
    expect(labels(wrapper)).toEqual(["Fruits", "Apple", "Banana", "Cherry", "Vegetables", "Bread"]);
    expect(item(wrapper, "Apple").attributes("aria-level")).toBe("2");
    expect(wrapper.emitted("update:expanded").at(-1)[0]).toEqual(["fruits"]);
    expect(wrapper.emitted("update:selected").at(-1)[0]).toBe("fruits");

    const all = mountTree({ isExpandAll: true });
    await nextTick();
    expect(items(all)).toHaveLength(7);
    expect(all.emitted("update:expanded")[0][0]).toEqual(["fruits", "vegetables"]);
  });

  it("keeps only one node per level open with isAccordion", async() => {
    const wrapper = mountTree({ isAccordion: true });
    await nextTick();
    await item(wrapper, "Fruits").get(".a_tree__toggle").trigger("click");
    await item(wrapper, "Vegetables").get(".a_tree__toggle").trigger("click");
    expect(labels(wrapper)).toEqual(["Fruits", "Vegetables", "Carrot", "Bread"]);
  });

  it("moves with the keyboard like a WAI-ARIA tree", async() => {
    const wrapper = mountTree();
    await nextTick();
    const FRUITS = item(wrapper, "Fruits");
    FRUITS.element.focus();
    await press(FRUITS, "ArrowRight");
    expect(FRUITS.attributes("aria-expanded")).toBe("true");
    await press(FRUITS, "ArrowRight");
    expect(document.activeElement).toBe(item(wrapper, "Apple").element);
    await press(item(wrapper, "Apple"), "ArrowDown");
    expect(document.activeElement).toBe(item(wrapper, "Banana").element);
    expect(item(wrapper, "Banana").attributes("tabindex")).toBe("0");
    await press(item(wrapper, "Banana"), "ArrowLeft");
    expect(document.activeElement).toBe(FRUITS.element);
    await press(FRUITS, "ArrowLeft");
    expect(FRUITS.attributes("aria-expanded")).toBe("false");
    await press(FRUITS, "End");
    expect(document.activeElement).toBe(item(wrapper, "Bread").element);
    await press(item(wrapper, "Bread"), "v");
    expect(document.activeElement).toBe(item(wrapper, "Vegetables").element);
    await press(item(wrapper, "Vegetables"), "Enter");
    expect(item(wrapper, "Vegetables").attributes("aria-selected")).toBe("true");
    await press(item(wrapper, "Vegetables"), "*");
    expect(labels(wrapper)).toHaveLength(7);
  });

  it("checks children and parents and shows the mixed state", async() => {
    const wrapper = mountTree({ isCheckbox: true, isExpandAll: true, modelValue: [] });
    await nextTick();
    await item(wrapper, "Apple").get(".a_tree__checkbox").trigger("click");
    expect(item(wrapper, "Fruits").attributes("aria-checked")).toBe("mixed");
    await item(wrapper, "Banana").get(".a_tree__checkbox").trigger("click");
    // Cherry is disabled, so Fruits is checked
    expect(wrapper.props("modelValue")).toEqual(["apple", "banana", "fruits"]);
    expect(item(wrapper, "Fruits").attributes("aria-checked")).toBe("true");

    item(wrapper, "Vegetables").element.focus();
    await press(item(wrapper, "Vegetables"), " ");
    expect(wrapper.props("modelValue")).toEqual(expect.arrayContaining(["vegetables", "carrot"]));
    expect(wrapper.emitted("check").at(-1)[0]).toMatchObject({ key: "vegetables", checked: true });
    expect(wrapper.vm.getCheckedItems({ isLeafOnly: true }).map(node => node.id)).toEqual(["apple", "banana", "carrot"]);
  });

  it("checks only the node with isCheckStrictly", async() => {
    const wrapper = mountTree({ isCheckbox: true, isCheckStrictly: true, isExpandAll: true, modelValue: [] });
    await nextTick();
    await item(wrapper, "Fruits").get(".a_tree__checkbox").trigger("click");
    expect(wrapper.props("modelValue")).toEqual(["fruits"]);
    expect(item(wrapper, "Apple").attributes("aria-checked")).toBe("false");
  });

  it("filters and highlights nodes and opens their parents", async() => {
    const wrapper = mountTree({ searchModel: "an" });
    await nextTick();
    expect(labels(wrapper)).toEqual(["Fruits", "Banana"]);
    expect(wrapper.findAll("mark").map(mark => mark.text())).toEqual(["an", "an"]);
    expect(wrapper.get("[aria-live]").text()).toBe("_A_TREE_FOUND_{{count}}_");

    await wrapper.setProps({ searchModel: "xyz" });
    expect(wrapper.get(".a_tree__empty").text()).toBe("_A_TREE_NOTHING_FOUND_");
  });

  it("loads children lazily and keeps the node closed after an error", async() => {
    let isError = true;
    const load = ({ item: parent }) => {
      if (isError) {
        return Promise.reject(new Error("network"));
      }
      return Promise.resolve([{ id: `${ parent.id }_child`, label: "Child", isLeaf: true }]);
    };
    const wrapper = mountTree({ data: [{ id: "root", label: "Root" }], load });
    await nextTick();
    await item(wrapper, "Root").get(".a_tree__toggle").trigger("click");
    await flushPromises();
    expect(item(wrapper, "Root").attributes("aria-expanded")).toBe("false");
    expect(wrapper.emitted("load-error")).toHaveLength(1);

    isError = false;
    await item(wrapper, "Root").get(".a_tree__toggle").trigger("click");
    await flushPromises();
    expect(labels(wrapper)).toEqual(["Root", "Child"]);
    expect(item(wrapper, "Child").attributes("aria-expanded")).toBeUndefined();
  });

  it("uses other keys and a slot for the content", async() => {
    const wrapper = mountTree({
      data: [{ code: "A", meta: { title: "Alpha" }, items: [{ code: "B", meta: { title: "Beta" } }] }],
      keyId: "code",
      keyLabel: "meta.title",
      keyChildren: "items",
      isExpandAll: true,
    }, {
      slots: {
        node: ({ label, level }) => h("b", { class: "custom" }, `${ level }: ${ label }`),
      },
    });
    await nextTick();
    expect(wrapper.findAll(".custom").map(node => node.text())).toEqual(["1: Alpha", "2: Beta"]);
  });

  it("shows any JSON value", async() => {
    const wrapper = mountTree({
      data: undefined,
      json: { name: "Anna", age: 30, active: true, roles: ["admin", "user"], address: null },
      defaultExpandLevel: 1,
    });
    await nextTick();
    const TEXTS = items(wrapper).map(node => node.get(".a_tree__node").text());
    expect(TEXTS).toEqual(["name: \"Anna\"", "age: 30", "active: true", "roles: [2]", "0: \"admin\"", "1: \"user\"", "address: null"]);
    expect(wrapper.find(".a_tree__json_value_number").exists()).toBe(true);
    expect(getItemsFromJson({ "a-b": { c: [1] } })[0].children[0].children[0].jsonPath).toBe("$[\"a-b\"].c[0]");
  });
});
