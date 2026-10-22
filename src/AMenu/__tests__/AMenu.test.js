import {
  nextTick,
  ref,
} from "vue";
import {
  describe,
  expect,
  it,
} from "vitest";
import {
  shallowMount,
} from "@vue/test-utils";

import AMenu from "../AMenu";

describe("AMenu inline placement", () => {
  it("opts into inline placement without changing the default", async() => {
    const wrapper = shallowMount(AMenu, {
      props: {
        canChangeBodyClass: false,
        useBackdropMobile: false,
      },
      global: {
        stubs: {
          AButton: {
            inheritAttrs: false,
            template: "<button />",
          },
        },
        config: {
          globalProperties: {
            $router: {
              currentRoute: ref({ fullPath: "/" }),
            },
          },
        },
      },
    });
    await nextTick();

    expect(wrapper.element.tagName).toBe("NAV");
    expect(wrapper.classes()).not.toContain("a_menu_inline");

    await wrapper.setProps({ isInline: true });
    expect(wrapper.classes()).toContain("a_menu_inline");
    expect(wrapper.classes()).toContain("a_menu_open");
    expect(document.body.classList.contains("a_menu__wrapper_open")).toBe(false);

    await wrapper.setProps({ isInline: false });
    expect(wrapper.classes()).not.toContain("a_menu_inline");
    wrapper.unmount();
  });
});
