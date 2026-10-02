import {
  reactive,
} from "vue";
import {
  describe,
  expect,
  it,
  vi,
} from "vitest";

import ScrollAPI from "../ScrollAPI";

describe("AModalWizard ScrollAPI", () => {
  it("scrolls the modal body when the active step changes", () => {
    const props = reactive({
      scrollToTopOnStepChange: true,
    });
    const scrollTo = vi.fn();
    const modalBody = {
      scrollTo,
    };

    const {
      modalBodyRef,
      scrollToTop,
    } = ScrollAPI(props);

    modalBodyRef.value = {
      modalRef: {
        querySelector: vi.fn(() => modalBody),
      },
    };

    scrollToTop();

    expect(scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: "auto",
    });

    props.scrollToTopOnStepChange = false;
    scrollToTop();

    expect(scrollTo).toHaveBeenCalledTimes(1);
  });
});
