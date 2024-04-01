import IdAPI from "../compositionAPI/IdAPI";

describe("ALabel IdAPI", () => {
  it("'idLabel' and 'idLabelAttribute' should correctly concatenate 'id' and 'idSuffix' and apply 'id' when 'isIdVisible' is true", () => {
    const {
      idLabel,
      idLabelAttribut,
    } = IdAPI({ id: "user", idSuffix: "_123", isIdVisible: true });

    expect(idLabel.value).toBe("user_123");
    expect(idLabelAttribut.value).toEqual({ id: "user_123" });
  });

  it("'idLabel' should concatenate 'id' and 'idSuffix' but 'idLabelAttribute' should be empty when 'isIdVisible' is false", () => {
    const {
      idLabel,
      idLabelAttribut,
    } = IdAPI({ id: "user", idSuffix: "_123", isIdVisible: false });

    expect(idLabel.value).toBe("user_123");
    expect(idLabelAttribut.value).toEqual({});
  });
});
