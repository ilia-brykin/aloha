import {
  nextTick,
  reactive,
} from "vue";
import {
  afterEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";

import LocalAPI from "../LocalAPI";

describe("AWizard LocalAPI", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("reports internal and external active-step changes", async() => {
    vi.useFakeTimers();

    const props = reactive({
      isControlOutside: false,
      stepActive: undefined,
      stepsVisited: undefined,
    });
    const changeStep = vi.fn();
    const {
      initStepActive,
      stepActiveLocal,
    } = LocalAPI(props, { changeStep });

    initStepActive();
    vi.runOnlyPendingTimers();

    stepActiveLocal.value = 1;
    await nextTick();

    expect(changeStep).toHaveBeenLastCalledWith({
      stepIndex: 1,
      previousStepIndex: 0,
    });

    props.stepActive = 2;
    props.isControlOutside = true;
    await nextTick();

    expect(changeStep).toHaveBeenLastCalledWith({
      stepIndex: 2,
      previousStepIndex: 1,
    });
    expect(changeStep).toHaveBeenCalledTimes(2);
  });
});
