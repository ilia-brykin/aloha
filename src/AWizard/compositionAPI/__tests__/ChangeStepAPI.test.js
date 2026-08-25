import {
  describe,
  expect,
  it,
  jest,
} from "@jest/globals";

import ChangeStepAPI from "../ChangeStepAPI";

describe("AWizard ChangeStepAPI", () => {
  it("emits details about the changed step", () => {
    const emit = jest.fn();
    const steps = [
      { label: "Step 1" },
      { label: "Step 2" },
    ];
    const {
      changeStep,
    } = ChangeStepAPI({ steps }, { emit });

    changeStep({
      stepIndex: 1,
      previousStepIndex: 0,
    });

    expect(emit).toHaveBeenCalledWith("changeStep", {
      step: steps[1],
      stepIndex: 1,
      previousStepIndex: 0,
    });
  });
});
