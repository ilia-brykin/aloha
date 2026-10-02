import {
  h,
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

import AFieldset from "../AFieldset";
import {
  AFormPluginOptions,
} from "../../../plugins/AFormPlugin";

vi.mock("../../../index", async() => {
  const {
    computed,
    h: hLocal,
    ref,
  } = await vi.importActual("vue");
  const {
    AFormPluginOptions: pluginOptions,
  } = await vi.importActual("../../../plugins/AFormPlugin");

  const componentStub = {
    render() {
      return hLocal("div");
    },
  };

  return {
    AElement: componentStub,
    AErrorsText: componentStub,
    AFormHelpText: componentStub,
    AFormLabelDescription: componentStub,
    AFormPluginOptions: pluginOptions,
    AFormReadonly: componentStub,
    AGroup: componentStub,
    AUiTypes_typesContainer: ref({}),
    UiAPI: props => ({
      ariaDescribedbyLocal: computed(() => undefined),
      errorsId: computed(() => `${ props.id }_errors`),
      helpTextId: computed(() => `${ props.id }_help`),
      htmlIdLocal: computed(() => props.htmlId || props.id),
      isErrors: computed(() => false),
      labelDescriptionId: computed(() => `${ props.id }_description`),
    }),
    UiCollapseAPI: () => ({
      iconCollapse: computed(() => undefined),
      initIsCollapsedLocal: () => {},
      isCollapsedLocal: ref(false),
      titleCollapse: computed(() => undefined),
      toggleCollapse: () => {},
    }),
    UIExcludeRenderAttributesAPI: () => ({
      attributesToExcludeFromRender: computed(() => ({})),
    }),
    UiStyleHideAPI: () => ({
      componentStyleHide: computed(() => ""),
    }),
    UiTextAfterLabelAPI: () => ({
      textAfterLabel: computed(() => ""),
    }),
  };
});

vi.mock("../../AUiComponents", () => ({
  default: {},
}));

const COMPONENTS_ORIGINAL = AFormPluginOptions.components;

afterEach(() => {
  AFormPluginOptions.components = COMPONENTS_ORIGINAL;
});

describe("AFieldset classColumn", () => {
  it("applies classColumn to the child component without a wrapper element", () => {
    AFormPluginOptions.components = {
      testColumn: {
        inheritAttrs: false,
        render() {
          return h("section", {
            ...this.$attrs,
            "data-testid": "child",
          });
        },
      },
    };

    const wrapper = mount(AFieldset, {
      props: {
        children: [{
          classColumn: "test_column",
          id: "child",
          type: "testColumn",
        }],
        modelValue: {},
      },
    });

    const content = wrapper.get(".a_fieldset__content");
    const child = content.get("[data-testid='child']");

    expect(child.classes()).toContain("test_column");
    expect(child.element.parentElement).toBe(content.element);
  });
});
