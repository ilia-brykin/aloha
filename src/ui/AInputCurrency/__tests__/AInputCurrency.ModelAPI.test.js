import {
  reactive,
} from "vue";
import {
  describe,
  expect,
  it,
} from "@jest/globals";

import ModelAPI from "../compositionAPI/ModelAPI";

const getModelAPI = () => {
  const props = reactive({
    currencySymbol: "€",
    currencySymbolPosition: "right",
    decimalDivider: ",",
    decimalPartLength: 2,
    disabled: false,
    modelType: "number",
    modelUndefined: undefined,
    modelValue: 1234.5,
    required: false,
    skipRequiredModelInit: false,
    thousandDivider: ".",
  });
  const modelAPI = ModelAPI(props, {
    adjustFloatPartAndDivider: () => "1.234,50",
  });

  modelAPI.initLocalVars();

  return {
    modelAPI,
    props,
  };
};

describe("AInputCurrency ModelAPI", () => {
  it("adds the currency symbol to the readonly display value at the configured position", () => {
    const {
      modelAPI,
      props,
    } = getModelAPI();

    expect(modelAPI.displayValueReadonly.value).toBe("1.234,50 €");

    props.currencySymbol = "$";
    props.currencySymbolPosition = "left";

    expect(modelAPI.displayValueReadonly.value).toBe("$ 1.234,50");
  });

  it("does not add the currency symbol to an empty readonly display value", () => {
    const {
      modelAPI,
    } = getModelAPI();

    modelAPI.displayValue.value = "";

    expect(modelAPI.displayValueReadonly.value).toBe("");
  });

  it("keeps the readonly display value unchanged when the currency symbol is empty", () => {
    const {
      modelAPI,
      props,
    } = getModelAPI();

    props.currencySymbol = "";

    expect(modelAPI.displayValueReadonly.value).toBe("1.234,50");
  });
});
