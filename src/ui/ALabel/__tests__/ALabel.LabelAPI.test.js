import {
  describe,
  expect,
  it,
} from "@jest/globals";

import LabelAPI from "../compositionAPI/LabelAPI";

describe("ALabel LabelAPI", () => {
  it("textAfterLabel should be empty when 'required' is false", () => {
    const {
      textAfterLabel,
    } = LabelAPI({ required: false, label: "Aloha" });

    expect(textAfterLabel.value).toBe("");
  });

  it("textAfterLabel should be empty when 'label' is empty", () => {
    const {
      textAfterLabel,
    } = LabelAPI({ required: false, label: "" });

    expect(textAfterLabel.value).toBe("");
  });

  it("textAfterLabel should be asterisk when 'required' is true", () => {
    const {
      textAfterLabel,
    } = LabelAPI({ required: true, label: "Aloha" });

    expect(textAfterLabel.value).toBe("*");
  });
});
