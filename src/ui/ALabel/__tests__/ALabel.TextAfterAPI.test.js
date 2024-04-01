import TextAfterAPI from "../compositionAPI/TextAfterAPI";

describe("ALabel TextAfterAPI", () => {
  it("textAfterLabel should be empty when 'required' is false", () => {
    const {
      textAfterLabel,
    } = TextAfterAPI({ required: false });

    expect(textAfterLabel.value).toBe("");
  });

  it("textAfterLabel should be asterisk when 'required' is true", () => {
    const {
      textAfterLabel,
    } = TextAfterAPI({ required: true });

    expect(textAfterLabel.value).toBe("*");
  });
});
