import {
  h,
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

import ASkeletonItem from "../ASkeletonItem/ASkeletonItem";

import ASkeleton from "../ASkeleton";

describe("ASkeleton", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders the default skeleton with a title and rows", () => {
    const wrapper = mount(ASkeleton);
    const root = wrapper.get(".a_skeleton");
    expect(root.attributes("aria-busy")).toBe("true");
    expect(root.classes()).toContain("a_skeleton_animated");
    expect(wrapper.get("[role=status]").text()).toBe("_A_SKELETON_LOADING_");
    expect(wrapper.get(".a_skeleton__group").attributes("aria-hidden")).toBe("true");
    expect(wrapper.findAll(".a_skeleton__title")).toHaveLength(1);
    expect(wrapper.findAll(".a_skeleton__row")).toHaveLength(3);
    expect(wrapper.find(".a_skeleton__avatar").exists()).toBe(false);
  });

  it("supports avatar, title, rows, count and animated", () => {
    const wrapper = mount(ASkeleton, {
      props: { avatar: true, title: false, rows: 5, count: 2, animated: false },
    });
    expect(wrapper.findAll(".a_skeleton__group")).toHaveLength(2);
    expect(wrapper.findAll(".a_skeleton__avatar")).toHaveLength(2);
    expect(wrapper.find(".a_skeleton__title").exists()).toBe(false);
    expect(wrapper.findAll(".a_skeleton__row")).toHaveLength(10);
    expect(wrapper.get(".a_skeleton").classes()).not.toContain("a_skeleton_animated");
  });

  it("shows the content when loading is false", async() => {
    const wrapper = mount(ASkeleton, {
      props: { loading: true },
      slots: { default: () => h("p", { class: "content" }, "Content") },
    });
    expect(wrapper.find(".content").exists()).toBe(false);
    await wrapper.setProps({ loading: false });
    expect(wrapper.find(".a_skeleton").exists()).toBe(false);
    expect(wrapper.get(".content").text()).toBe("Content");
  });

  it("renders the template slot for every count", () => {
    const wrapper = mount(ASkeleton, {
      props: { count: 3 },
      slots: {
        template: ({ index }) => h(ASkeletonItem, { variant: "rect", class: `item_${ index }` }),
      },
    });
    expect(wrapper.findAll(".a_skeleton__item_rect")).toHaveLength(3);
    expect(wrapper.find(".item_2").exists()).toBe(true);
    expect(wrapper.find(".a_skeleton__row").exists()).toBe(false);
  });

  it("shows the skeleton only after the throttle time", async() => {
    vi.useFakeTimers();
    const wrapper = mount(ASkeleton, {
      props: { loading: true, throttle: 300 },
      slots: { default: () => h("p", { class: "content" }, "Content") },
    });
    expect(wrapper.find(".a_skeleton").exists()).toBe(false);
    vi.advanceTimersByTime(300);
    await nextTick();
    expect(wrapper.find(".a_skeleton").exists()).toBe(true);

    await wrapper.setProps({ loading: false });
    await wrapper.setProps({ loading: true });
    vi.advanceTimersByTime(100);
    await wrapper.setProps({ loading: false });
    vi.advanceTimersByTime(300);
    await nextTick();
    expect(wrapper.find(".a_skeleton").exists()).toBe(false);
    expect(wrapper.find(".content").exists()).toBe(true);
  });
});

describe("ASkeletonItem", () => {
  it("renders a variant with width and height", () => {
    const wrapper = mount(ASkeletonItem, {
      props: { variant: "button", width: 120, height: "2rem" },
    });
    const item = wrapper.get(".a_skeleton__item");
    expect(item.classes()).toContain("a_skeleton__item_button");
    expect(item.attributes("aria-hidden")).toBe("true");
    expect(item.attributes("style")).toBe("width: 120px; height: 2rem;");
    expect(item.element.tagName).toBe("SPAN");
  });

  it("uses the text variant by default", () => {
    const wrapper = mount(ASkeletonItem);
    expect(wrapper.classes()).toContain("a_skeleton__item_text");
    expect(wrapper.attributes("style")).toBeUndefined();
  });
});
