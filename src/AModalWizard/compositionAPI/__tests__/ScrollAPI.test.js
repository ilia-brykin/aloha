import {
  reactive,
} from "vue";
import {
  describe,
  expect,
  it,
  jest,
} from "@jest/globals";

import ScrollAPI from "../ScrollAPI";

describe("AModalWizard ScrollAPI", () => {
  it("scrolls the modal body when the active step changes", () => {
    const props = reactive({
      scrollToTopOnStepChange: true,
    });
    const scrollTo = jest.fn();
    const modalBody = {
      scrollTo,
    };

    const {
      modalBodyRef,
      scrollToTop,
    } = ScrollAPI(props);

    modalBodyRef.value = {
      modalRef: {
        querySelector: jest.fn(() => modalBody),
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
