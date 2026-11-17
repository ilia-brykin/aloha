import {
  reactive,
} from "vue";
import {
  describe,
  expect,
  it,
  vi,
} from "vitest";

import ResizeAPI from "../ResizeAPI";

import EventBus from "../../../utils/EventBus";

describe("ResizeAPI", () => {
  it("removes the resize listener on destroy", () => {
    const toggleMenu = vi.fn();
    const {
      destroyEventBusUpdateViewOnResize,
      initEventBusUpdateViewOnResize,
    } = ResizeAPI(reactive({ isMenuOpenInitial: true, onlyMobile: false }), {
      toggleMenu,
    });

    initEventBusUpdateViewOnResize();
    EventBus.$emit("updateViewOnResize", false);
    expect(toggleMenu).toHaveBeenCalledTimes(1);

    destroyEventBusUpdateViewOnResize();
    EventBus.$emit("updateViewOnResize", false);
    expect(toggleMenu).toHaveBeenCalledTimes(1);
  });
});
