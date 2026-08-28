/* eslint-disable vue/one-component-per-file */
import {
  defineComponent,
  h,
  nextTick,
  provide,
  ref,
} from "vue";
import {
  mount,
} from "@vue/test-utils";

import UiStyleHideAPI from "../UiStyleHideAPI";

import {
  AModelDependenciesInjection,
} from "../../const/UiInjectionKeys";

const Consumer = defineComponent({
  name: "UiStyleHideAPIConsumer",
  props: {
    dependencies: {
      type: [Array, Object],
      default: undefined,
    },
    isHide: {
      type: Boolean,
      default: false,
    },
    modelDependencies: {
      type: Object,
      default: undefined,
    },
  },
  setup(props) {
    const {
      componentStyleHide,
    } = UiStyleHideAPI(props);

    return () => h("div", {
      style: componentStyleHide.value,
    });
  },
});

describe("UiStyleHideAPI", () => {
  it("uses the nearest injected form model reactively", async() => {
    const modelDependencies = ref({
      controller: false,
    });
    const Provider = defineComponent({
      name: "UiStyleHideAPIProvider",
      setup() {
        provide(AModelDependenciesInjection, modelDependencies);
        return () => h(Consumer, {
          dependencies: {
            id: "controller",
            value: true,
          },
        });
      },
    });
    const wrapper = mount(Provider);

    expect(wrapper.get("div").isVisible()).toBe(false);

    modelDependencies.value = {
      controller: true,
    };
    await nextTick();

    expect(wrapper.get("div").isVisible()).toBe(true);
  });

  it("falls back to the modelDependencies prop without a provider", () => {
    const wrapper = mount(Consumer, {
      props: {
        dependencies: {
          id: "controller",
          value: true,
        },
        modelDependencies: {
          controller: true,
        },
      },
    });

    expect(wrapper.get("div").isVisible()).toBe(true);
  });

  it("allows an explicit modelDependencies prop to override an injected model", () => {
    const Provider = defineComponent({
      name: "UiStyleHideAPIOverrideProvider",
      setup() {
        provide(AModelDependenciesInjection, ref({
          controller: false,
        }));
        return () => h(Consumer, {
          dependencies: {
            id: "controller",
            value: true,
          },
          modelDependencies: {
            controller: true,
          },
        });
      },
    });
    const wrapper = mount(Provider);

    expect(wrapper.get("div").isVisible()).toBe(true);
  });
});
