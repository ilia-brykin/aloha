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
  ACarousel,
} from "../../index";

import {
  setI18n,
  setLanguage,
  updateTranslation,
} from "../../ATranslation/compositionAPI/ATranslationAPI";

import {
  en as i18nEN,
} from "../../i18n/allLanguages";

const wrappers = [];

const DATA = [
  { id: "a", label: "Alpha" },
  { id: "b", label: "Beta" },
  { id: "c", label: "Gamma" },
  { id: "d", label: "Delta" },
];

const mountCarousel = async(props = {}, attrs = {}) => {
  const wrapper = mount(ACarousel, {
    props: {
      id: "car",
      ariaLabel: "Balls",
      data: DATA,
      keyId: "id",
      ...props,
    },
    attrs,
    slots: {
      item: ({ item }) => h("p", { class: "content" }, [item.label, h("a", { href: "#" }, "link")]),
    },
    attachTo: document.body,
  });
  wrappers.push(wrapper);
  await nextTick();
  return wrapper;
};

const tabs = wrapper => wrapper.findAll("[role=\"tab\"]");
const items = wrapper => wrapper.findAll(".a_carousel__item");
const activeItem = wrapper => wrapper.get(".a_carousel__item_active");
const arrow = (wrapper, type) => wrapper.get(`.a_carousel__arrow_${ type }`);
const autoplayButton = wrapper => wrapper.find("#car_autoplay");
const lastEmit = (wrapper, name) => wrapper.emitted(name)?.at(-1)?.[0];

describe("ACarousel", () => {
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
    vi.useFakeTimers();
    setI18n({ en: { ...i18nEN } });
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

  describe("accessibility", () => {
    it("is a named section with roledescription carousel", async() => {
      const wrapper = await mountCarousel();
      const ROOT = wrapper.get("#car");
      expect(ROOT.element.tagName).toBe("SECTION");
      expect(ROOT.attributes("aria-roledescription")).toBe("carousel");
      expect(ROOT.attributes("aria-label")).toBe("Balls");
    });

    it("the tab of the active slide is selected, the others not (roving tabindex)", async() => {
      const wrapper = await mountCarousel();
      const TABS = tabs(wrapper);
      expect(TABS).toHaveLength(4);
      expect(TABS[0].attributes("aria-selected")).toBe("true");
      expect(TABS[0].attributes("tabindex")).toBe("0");
      expect(TABS[1].attributes("aria-selected")).toBe("false");
      expect(TABS[1].attributes("tabindex")).toBe("-1");
      expect(TABS[1].attributes("aria-controls")).toBe("car_item_2");
      expect(wrapper.get("[role=\"tablist\"]").attributes("aria-label")).toBe("Slides");
    });

    it("the slides are tabpanels with roledescription slide and 'n of count'", async() => {
      const wrapper = await mountCarousel();
      const ITEMS = items(wrapper);
      expect(ITEMS[0].attributes("role")).toBe("tabpanel");
      expect(ITEMS[0].attributes("aria-roledescription")).toBe("slide");
      expect(ITEMS[0].attributes("aria-label")).toBe("1 of 4");
      expect(ITEMS[0].attributes("aria-hidden")).toBeUndefined();
      expect(ITEMS[1].attributes("aria-hidden")).toBe("true");
      expect(ITEMS[1].get(".a_carousel__item__content").attributes("inert")).toBeDefined();
      expect(ITEMS[0].get(".a_carousel__item__content").attributes("inert")).toBeUndefined();
    });

    it("without tabs the slides are named groups", async() => {
      const wrapper = await mountCarousel({ indicatorsShow: false });
      expect(wrapper.find("[role=\"tablist\"]").exists()).toBe(false);
      expect(items(wrapper)[0].attributes("role")).toBe("group");
    });

    it("one slide: no tabs, no arrows", async() => {
      const wrapper = await mountCarousel({ data: [DATA[0]] });
      expect(wrapper.find("[role=\"tablist\"]").exists()).toBe(false);
      expect(wrapper.find(".a_carousel__arrow").exists()).toBe(false);
      expect(items(wrapper)[0].attributes("role")).toBe("group");
    });

    it("the region of the slides is polite", async() => {
      const wrapper = await mountCarousel();
      expect(wrapper.get(".a_carousel__items").attributes("aria-live")).toBe("polite");
    });

    it("arrows are named buttons", async() => {
      const wrapper = await mountCarousel();
      expect(arrow(wrapper, "previous").element.tagName).toBe("BUTTON");
      expect(arrow(wrapper, "previous").attributes("type")).toBe("button");
      expect(arrow(wrapper, "previous").text()).toContain("Previous slide");
      expect(arrow(wrapper, "next").text()).toContain("Next slide");
    });
  });

  describe("navigation", () => {
    it("arrows go to the next and the previous slide, round with loop", async() => {
      const wrapper = await mountCarousel();
      await arrow(wrapper, "next").trigger("click");
      expect(activeItem(wrapper).text()).toContain("Beta");
      expect(tabs(wrapper)[1].attributes("aria-selected")).toBe("true");

      await arrow(wrapper, "previous").trigger("click");
      await arrow(wrapper, "previous").trigger("click");
      expect(activeItem(wrapper).text()).toContain("Delta");
    });

    it("a click on a tab activates its slide", async() => {
      const wrapper = await mountCarousel();
      await tabs(wrapper)[2].trigger("click");
      expect(activeItem(wrapper).text()).toContain("Gamma");
    });

    it("keyboard in the tablist: arrows, Home, End, focus moves with", async() => {
      const wrapper = await mountCarousel();
      const TABLIST = wrapper.get("[role=\"tablist\"]");
      await TABLIST.trigger("keydown", { key: "ArrowRight" });
      await nextTick();
      expect(activeItem(wrapper).text()).toContain("Beta");
      expect(document.activeElement?.id).toBe("car_tab_2");

      await TABLIST.trigger("keydown", { key: "End" });
      await nextTick();
      expect(activeItem(wrapper).text()).toContain("Delta");
      expect(document.activeElement?.id).toBe("car_tab_4");

      await TABLIST.trigger("keydown", { key: "ArrowRight" });
      await nextTick();
      expect(activeItem(wrapper).text()).toContain("Alpha");

      await TABLIST.trigger("keydown", { key: "ArrowLeft" });
      await TABLIST.trigger("keydown", { key: "Home" });
      await nextTick();
      expect(activeItem(wrapper).text()).toContain("Alpha");
      expect(document.activeElement?.id).toBe("car_tab_1");
    });

    it("vertical: ArrowDown / ArrowUp and aria-orientation", async() => {
      const wrapper = await mountCarousel({ direction: "vertical" });
      const TABLIST = wrapper.get("[role=\"tablist\"]");
      expect(TABLIST.attributes("aria-orientation")).toBe("vertical");
      await TABLIST.trigger("keydown", { key: "ArrowDown" });
      expect(activeItem(wrapper).text()).toContain("Beta");
      await TABLIST.trigger("keydown", { key: "ArrowUp" });
      expect(activeItem(wrapper).text()).toContain("Alpha");
      await TABLIST.trigger("keydown", { key: "ArrowRight" });
      expect(activeItem(wrapper).text()).toContain("Alpha");
    });

    it("loop false: arrows are aria-disabled at the ends and do nothing", async() => {
      const wrapper = await mountCarousel({ loop: false });
      expect(arrow(wrapper, "previous").attributes("aria-disabled")).toBe("true");
      expect(arrow(wrapper, "previous").attributes("disabled")).toBeUndefined();
      await arrow(wrapper, "previous").trigger("click");
      expect(activeItem(wrapper).text()).toContain("Alpha");

      await wrapper.get("[role=\"tablist\"]").trigger("keydown", { key: "ArrowLeft" });
      expect(activeItem(wrapper).text()).toContain("Alpha");

      await tabs(wrapper)[3].trigger("click");
      expect(arrow(wrapper, "next").attributes("aria-disabled")).toBe("true");
      expect(arrow(wrapper, "previous").attributes("aria-disabled")).not.toBe("true");
    });

    it.each([
      [{ disabled: true }],
      [{ ariaDisabled: true }],
    ])("%o blocks arrows, tabs and keys", async props => {
      const wrapper = await mountCarousel(props);
      await arrow(wrapper, "next").trigger("click");
      await tabs(wrapper)[2].trigger("click");
      await wrapper.get("[role=\"tablist\"]").trigger("keydown", { key: "End" });
      expect(activeItem(wrapper).text()).toContain("Alpha");
    });

    it("aria-disabled is set on arrows and tabs", async() => {
      const wrapper = await mountCarousel({ ariaDisabled: true });
      expect(arrow(wrapper, "next").attributes("aria-disabled")).toBe("true");
      expect(tabs(wrapper)[1].attributes("aria-disabled")).toBe("true");
    });
  });

  describe("model and events", () => {
    it("v-model: initial value, update:modelValue and change with the previous slide", async() => {
      const wrapper = await mountCarousel({ modelValue: "c" });
      expect(activeItem(wrapper).text()).toContain("Gamma");
      expect(lastEmit(wrapper, "init")).toMatchObject({ id: "c" });

      await arrow(wrapper, "next").trigger("click");
      expect(lastEmit(wrapper, "update:modelValue")).toBe("d");
      expect(lastEmit(wrapper, "change")).toMatchObject({
        id: "d",
        item: { label: "Delta" },
        previousId: "c",
        previousItem: { label: "Gamma" },
      });
    });

    it("v-model: a change from outside activates the slide", async() => {
      const wrapper = await mountCarousel({ modelValue: "a" });
      await wrapper.setProps({ modelValue: "b" });
      expect(activeItem(wrapper).text()).toContain("Beta");
      expect(wrapper.emitted("update:modelValue")).toBeUndefined();
    });

    it("unknown model value: the first slide, the model gets its id", async() => {
      const wrapper = await mountCarousel({ modelValue: "x" });
      expect(activeItem(wrapper).text()).toContain("Alpha");
      expect(lastEmit(wrapper, "update:modelValue")).toBe("a");
    });

    it("without key-id the ids are the indexes", async() => {
      const wrapper = await mountCarousel({ keyId: undefined, modelValue: 2 });
      expect(activeItem(wrapper).text()).toContain("Gamma");
    });

    it("the active slide removed from data: the first slide", async() => {
      const wrapper = await mountCarousel({ modelValue: "c" });
      await wrapper.setProps({ data: [DATA[0], DATA[1]] });
      expect(activeItem(wrapper).text()).toContain("Alpha");
      expect(lastEmit(wrapper, "update:modelValue")).toBe("a");
    });

    it("exposes next, previous, setActiveItem, activeId, activeIndex", async() => {
      const wrapper = await mountCarousel();
      wrapper.vm.next();
      await nextTick();
      expect(wrapper.vm.activeId).toBe("b");
      expect(wrapper.vm.activeIndex).toBe(1);
      wrapper.vm.previous();
      wrapper.vm.setActiveItem("d");
      await nextTick();
      expect(activeItem(wrapper).text()).toContain("Delta");
    });
  });

  describe("texts", () => {
    it("own texts replace only the given default texts", async() => {
      const wrapper = await mountCarousel({ texts: { nextSlide: "Weiter" } });
      expect(arrow(wrapper, "next").text()).toContain("Weiter");
      expect(arrow(wrapper, "previous").text()).toContain("Previous slide");
      expect(tabs(wrapper)[0].text()).toContain("Slide 1");
    });

    it("key-label names the tabs, indicators-type labels shows them", async() => {
      const wrapper = await mountCarousel({ keyLabel: "label" });
      expect(tabs(wrapper)[1].text()).toContain("Beta");

      const LABELS = await mountCarousel({ keyLabel: "label", indicatorsType: "labels" });
      expect(LABELS.get(".a_carousel__tabs_labels").exists()).toBe(true);
      expect(tabs(LABELS)[2].text()).toBe("Gamma");
    });
  });

  describe("autoplay", () => {
    it("autoplay-start rotates, the button stops and starts again", async() => {
      const wrapper = await mountCarousel({ autoplayStart: true, autoplayInterval: 1000 });
      expect(wrapper.emitted("play")).toHaveLength(1);
      const BUTTON = autoplayButton(wrapper);
      expect(BUTTON.exists()).toBe(true);
      expect(BUTTON.text()).toContain("Stop automatic slide show");
      expect(wrapper.get(".a_carousel__items").attributes("aria-live")).toBe("off");

      vi.advanceTimersByTime(1000);
      await nextTick();
      expect(activeItem(wrapper).text()).toContain("Beta");

      await BUTTON.trigger("click");
      expect(wrapper.emitted("stop")).toHaveLength(1);
      expect(autoplayButton(wrapper).text()).toContain("Start automatic slide show");
      expect(wrapper.get(".a_carousel__items").attributes("aria-live")).toBe("polite");
      vi.advanceTimersByTime(3000);
      await nextTick();
      expect(activeItem(wrapper).text()).toContain("Beta");
    });

    it("the button of the rotation is the first element in the order of the focus", async() => {
      const wrapper = await mountCarousel({ autoplayShow: true });
      const FOCUSABLE = wrapper.get("#car").element.querySelectorAll("button");
      expect(FOCUSABLE[0].id).toBe("car_autoplay");
    });

    it("autoplay-show without autoplay-start: the button starts the rotation", async() => {
      const wrapper = await mountCarousel({ autoplayShow: true, autoplayInterval: 1000 });
      vi.advanceTimersByTime(2000);
      await nextTick();
      expect(activeItem(wrapper).text()).toContain("Alpha");
      await autoplayButton(wrapper).trigger("click");
      vi.advanceTimersByTime(1000);
      await nextTick();
      expect(activeItem(wrapper).text()).toContain("Beta");
    });

    it("the focus in the carousel stops the rotation, the focus on the button not", async() => {
      const wrapper = await mountCarousel({ autoplayStart: true });
      await autoplayButton(wrapper).trigger("focusin");
      expect(wrapper.emitted("stop")).toBeUndefined();
      await tabs(wrapper)[0].trigger("focusin");
      expect(wrapper.emitted("stop")).toHaveLength(1);
      expect(wrapper.vm.isPlaying).toBe(false);
    });

    it("the mouse over the carousel pauses the rotation", async() => {
      const wrapper = await mountCarousel({ autoplayStart: true, autoplayInterval: 1000 });
      await wrapper.get("#car").trigger("mouseenter");
      vi.advanceTimersByTime(3000);
      await nextTick();
      expect(activeItem(wrapper).text()).toContain("Alpha");
      await wrapper.get("#car").trigger("mouseleave");
      vi.advanceTimersByTime(1000);
      await nextTick();
      expect(activeItem(wrapper).text()).toContain("Beta");
    });

    it("loop false: the rotation stops on the last slide", async() => {
      const wrapper = await mountCarousel({ autoplayStart: true, autoplayInterval: 100, loop: false });
      await vi.advanceTimersByTimeAsync(100);
      await vi.advanceTimersByTimeAsync(100);
      await vi.advanceTimersByTimeAsync(100);
      await vi.advanceTimersByTimeAsync(100);
      await vi.advanceTimersByTimeAsync(100);
      expect(activeItem(wrapper).text()).toContain("Delta");
      expect(wrapper.emitted("stop")).toHaveLength(1);
    });

    it("prefers-reduced-motion: no automatic start", async() => {
      const MATCH_MEDIA = window.matchMedia;
      window.matchMedia = query => ({ matches: query.includes("reduce"), media: query });
      const wrapper = await mountCarousel({ autoplayStart: true });
      expect(wrapper.vm.isPlaying).toBe(false);
      expect(autoplayButton(wrapper).exists()).toBe(true);
      window.matchMedia = MATCH_MEDIA;
    });

    it("exposes play and stop", async() => {
      const wrapper = await mountCarousel({ autoplayShow: true });
      wrapper.vm.play();
      expect(wrapper.vm.isPlaying).toBe(true);
      wrapper.vm.stop();
      expect(wrapper.vm.isPlaying).toBe(false);
      expect(wrapper.emitted("play")).toHaveLength(1);
      expect(wrapper.emitted("stop")).toHaveLength(1);
    });
  });

  describe("view", () => {
    it("transition: the old slide leaves with aria-hidden and inert, then is hidden", async() => {
      const wrapper = await mountCarousel();
      await arrow(wrapper, "next").trigger("click");
      const LEAVING = wrapper.get(".a_carousel__item_leaving");
      expect(LEAVING.text()).toContain("Alpha");
      expect(LEAVING.attributes("aria-hidden")).toBe("true");
      expect(wrapper.get(".a_carousel__item_enter").text()).toContain("Beta");
      expect(wrapper.get("#car").classes()).toContain("a_carousel_direction_next");

      await LEAVING.trigger("animationend");
      expect(wrapper.find(".a_carousel__item_leaving").exists()).toBe(false);

      await arrow(wrapper, "previous").trigger("click");
      expect(wrapper.get("#car").classes()).toContain("a_carousel_direction_previous");
      vi.advanceTimersByTime(2000);
      await nextTick();
      expect(wrapper.find(".a_carousel__item_leaving").exists()).toBe(false);
    });

    it("transition none: no leaving slide", async() => {
      const wrapper = await mountCarousel({ transition: "none" });
      await arrow(wrapper, "next").trigger("click");
      expect(wrapper.find(".a_carousel__item_leaving").exists()).toBe(false);
    });

    it("card: the side slides are clickable, but hidden for the screen reader", async() => {
      const wrapper = await mountCarousel({ type: "card", cardScale: 0.8 });
      expect(wrapper.get("#car").classes()).toContain("a_carousel_card");
      const ITEMS = items(wrapper);
      expect(ITEMS[1].classes()).toContain("a_carousel__item_card_side");
      expect(ITEMS[3].classes()).toContain("a_carousel__item_card_side");
      expect(ITEMS[2].classes()).toContain("a_carousel__item_card_far");
      expect(ITEMS[1].attributes("style")).toContain("scale(0.8)");
      expect(ITEMS[1].get(".a_carousel__item__mask").attributes("aria-hidden")).toBe("true");

      await ITEMS[3].get(".a_carousel__item__mask").trigger("click");
      expect(activeItem(wrapper).text()).toContain("Delta");
    });

    it("height, direction, indicators placement outside", async() => {
      const wrapper = await mountCarousel({ height: "300px", direction: "vertical", indicatorsPlacement: "outside", motionBlur: true });
      const CLASSES = wrapper.get("#car").classes();
      expect(CLASSES).toEqual(expect.arrayContaining([
        "a_carousel_vertical",
        "a_carousel_tabs_outside",
        "a_carousel_height_fixed",
        "a_carousel_motion_blur",
      ]));
      expect(wrapper.get(".a_carousel__items").attributes("style")).toContain("height: 300px");
    });

    it("arrows-trigger: 'always' wins, hover and focus as classes", async() => {
      const ALWAYS = await mountCarousel({ arrowsTrigger: ["hover", "always"] });
      expect(ALWAYS.get("#car").classes().join(" ")).not.toContain("a_carousel_trigger");
      const HOVER = await mountCarousel({ arrowsTrigger: ["hover", "focus"] });
      expect(HOVER.get("#car").classes()).toEqual(expect.arrayContaining(["a_carousel_trigger_hover", "a_carousel_trigger_focus"]));
    });
  });
});
