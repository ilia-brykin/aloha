import {
  mount,
} from "@vue/test-utils";

import AList from "../AList";

describe("AList", () => {
  test("keyLabel", () => {
    const ITEMS = [
      { label: "label 1" },
      { label: "label 2" },
      { label: "label 3" },
      { label: "label 4" },
    ];

    const wrapper = mount(AList, {
      props: {
        data: ITEMS,
        keyLabel: "label",
      },
    });

    expect(wrapper.findAll("li")).toHaveLength(4);
    expect(wrapper.text()).toContain("label 1label 2label 3label 4");
    expect(wrapper.html({ raw: true })).toBe("<ul><li><span>label 1</span></li><li><span>label 2</span></li><li><span>label 3</span></li><li><span>label 4</span></li></ul>");
  });
});

