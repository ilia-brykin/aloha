import {
  describe,
  expect,
  it,
} from "vitest";
import {
  mount,
} from "@vue/test-utils";

import AForm from "../../AForm/AForm";

import ASlider from "../ASlider";
import AUiComponents from "../../AUiComponents";

describe("ASlider in forms", () => {
  it("is registered as the form type slider", () => {
    expect(AUiComponents.slider).toBe(ASlider);
  });

  it("is rendered by AForm with type slider", () => {
    const wrapper = mount(AForm, {
      props: {
        modelValue: { volume: 40 },
        data: [
          {
            id: "volume",
            type: "slider",
            label: "Volume",
          },
        ],
      },
    });
    const SLIDER = wrapper.findComponent(ASlider);
    expect(SLIDER.exists()).toBe(true);
    expect(SLIDER.props("modelValue")).toBe(40);
    expect(wrapper.text()).toContain("Volume");
  });
});
