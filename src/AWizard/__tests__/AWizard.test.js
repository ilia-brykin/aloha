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
  AModalWizard,
  AWizard,
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

const STEPS = [
  { label: "Personal", slot: "step0" },
  { label: "Address", slot: "step1" },
  { label: "Summary", slot: "step2" },
];

const SLOTS = {
  step0: () => h("input", { id: "name", "aria-invalid": "true" }),
  step1: () => h("p", "Address step"),
  step2: () => h("p", "Summary step"),
};

const mountWizard = async(props = {}) => {
  const wrapper = mount(AWizard, {
    props: {
      id: "wizard",
      steps: STEPS,
      ...props,
    },
    slots: SLOTS,
    attachTo: document.body,
  });
  wrappers.push(wrapper);
  // the watch of the active step starts after a timeout
  vi.runOnlyPendingTimers();
  await nextTick();
  return wrapper;
};

const flush = async() => {
  await nextTick();
  await nextTick();
};

const stepLinks = wrapper => wrapper.findAll(".a_wizard__step__link");
const status = (wrapper, index) => wrapper.get(`#wizard_step_status_text_${ index }`).text();
const next = wrapper => wrapper.findAll(".a_wizard__toolbar button").at(-1);

describe("AWizard", () => {
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

  it("is a named group without role application and without tabindex", async() => {
    const wrapper = await mountWizard();
    const ROOT = wrapper.get("#wizard");
    expect(ROOT.attributes("role")).toBe("group");
    expect(ROOT.attributes("aria-label")).toBe("Wizard");
    expect(ROOT.attributes("tabindex")).toBeUndefined();
    expect(wrapper.find("[role=\"application\"]").exists()).toBe(false);
    expect(wrapper.get("#wizard_progressbar").text()).toBe("Step 1 of 3");
  });

  it("the steps are native buttons, the current step is text with aria-current", async() => {
    const wrapper = await mountWizard({ isForwardStepButtonDisabled: false });
    const LINKS = stepLinks(wrapper);
    expect(LINKS[0].element.tagName).toBe("SPAN");
    expect(LINKS[0].attributes("aria-current")).toBe("step");
    expect(LINKS[1].element.tagName).toBe("BUTTON");
    expect(LINKS[1].attributes("type")).toBe("button");
    expect(LINKS[1].attributes("aria-describedby")).toBe("wizard_step_status_text_1");
    expect(LINKS[1].attributes("role")).toBeUndefined();
    expect(LINKS[1].attributes("aria-controls")).toBeUndefined();

    await LINKS[2].trigger("click");
    await flush();
    expect(stepLinks(wrapper)[2].attributes("aria-current")).toBe("step");
  });

  it("forward steps are disabled buttons by default", async() => {
    const wrapper = await mountWizard();
    expect(stepLinks(wrapper)[1].attributes("disabled")).toBeDefined();
    expect(status(wrapper, 1)).toBe("Step upcoming");
  });

  it("visited and done come from the visited steps, not from the index", async() => {
    const wrapper = await mountWizard({ isForwardStepButtonDisabled: false });
    // upcoming steps that can be clicked are not "done"
    expect(stepLinks(wrapper)[1].classes()).toContain("upcoming");
    expect(stepLinks(wrapper)[1].classes()).not.toContain("done");

    // from 1 to 3: step 2 was not visited
    await stepLinks(wrapper)[2].trigger("click");
    await flush();
    expect(status(wrapper, 0)).toBe("Step visited");
    expect(status(wrapper, 1)).toBe("Step upcoming");
    expect(status(wrapper, 2)).toBe("Step current");
    expect(stepLinks(wrapper)[0].classes()).toContain("done");
    expect(stepLinks(wrapper)[1].classes()).toContain("upcoming");
  });

  it("uses the texts of the props for errors in the status and in the heading", async() => {
    const wrapper = await mountWizard({
      steps: [{ ...STEPS[0], error: true }, STEPS[1], STEPS[2]],
      stepIconErrorText: "Please check the step",
    });
    expect(status(wrapper, 0)).toBe("Step current, Please check the step");
    expect(wrapper.get("#wizard_0_heading").text()).toBe("Step 1 of 3: Personal – Please check the step");
  });

  it("a named group per step, the focus goes to the heading of the new step", async() => {
    const wrapper = await mountWizard({ isStepHeadingVisible: true, stepHeadingTag: "h2" });
    const PANE = wrapper.get("#wizard_0_content");
    expect(PANE.attributes("role")).toBe("group");
    expect(PANE.attributes("aria-labelledby")).toBe("wizard_0_heading");
    expect(wrapper.get("#wizard_0_heading").element.tagName).toBe("H2");
    expect(wrapper.get("#wizard_0_heading").classes()).not.toContain("a_sr_only");

    await next(wrapper).trigger("click");
    await flush();
    expect(document.activeElement.id).toBe("wizard_1_heading");
    expect(document.activeElement.textContent).toBe("Step 2 of 3: Address");
    expect(wrapper.emitted("changeStep")[0][0]).toMatchObject({ stepIndex: 1, previousStepIndex: 0 });
  });

  it("before-step-change false keeps the step and focuses the invalid field", async() => {
    const beforeStepChange = vi.fn(() => false);
    const wrapper = await mountWizard({ beforeStepChange });
    await next(wrapper).trigger("click");
    await flush();
    expect(beforeStepChange).toHaveBeenCalledWith({ direction: "forward", from: 0, to: 1, step: STEPS[1] });
    expect(stepLinks(wrapper)[0].attributes("aria-current")).toBe("step");
    expect(document.activeElement.id).toBe("name");
  });

  it("before-step-change with a Promise shows the loading and changes the step after it", async() => {
    let resolve;
    const wrapper = await mountWizard({
      beforeStepChange: () => new Promise(done => {
        resolve = done;
      }),
    });
    await next(wrapper).trigger("click");
    await flush();
    expect(stepLinks(wrapper)[0].attributes("aria-current")).toBe("step");
    expect(next(wrapper).find("[class*=\"spinner\"]").exists()).toBe(true);
    resolve(true);
    await flush();
    await flush();
    expect(stepLinks(wrapper)[1].attributes("aria-current")).toBe("step");
  });

  it("finish-button-text: the last step has a finish button", async() => {
    const wrapper = await mountWizard({ finishButtonText: "_A_WIZARD_FINISH_", stepActive: 2 });
    const BUTTON = next(wrapper);
    expect(BUTTON.text()).toBe("Finish");
    expect(BUTTON.attributes("disabled")).toBeUndefined();
    await BUTTON.trigger("click");
    expect(wrapper.emitted("finish")[0][0]).toMatchObject({ stepIndex: 2, step: STEPS[2] });

    const BLOCKED = await mountWizard({ id: "blocked", finishButtonText: "Finish", stepActive: 2, beforeStepChange: () => false });
    await next(BLOCKED).trigger("click");
    expect(BLOCKED.emitted("finish")).toBeUndefined();
  });
});

describe("AModalWizard", () => {
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

  it("is-save-button-last-step-only, the wizard has no own name in the modal", async() => {
    const wrapper = mount(AModalWizard, {
      props: {
        id: "modal",
        headerText: "New customer",
        steps: STEPS,
        isSaveButtonLastStepOnly: true,
        close: () => {},
        save: () => {},
      },
      slots: SLOTS,
      attachTo: document.body,
    });
    wrappers.push(wrapper);
    await flush();
    vi.runOnlyPendingTimers();
    await flush();
    const saveButton = () => Array.from(document.querySelectorAll("#modal button")).find(button => /save/i.test(button.textContent));
    expect(saveButton()).toBeUndefined();
    const WIZARD = document.getElementById("modal_wizard");
    expect(WIZARD.getAttribute("role")).toBeNull();

    const nextButton = () => Array.from(document.querySelectorAll("#modal_footer button")).find(button => button.textContent.includes("Next"));
    nextButton().click();
    await flush();
    nextButton().click();
    await flush();
    expect(saveButton()).toBeDefined();
  });
});
