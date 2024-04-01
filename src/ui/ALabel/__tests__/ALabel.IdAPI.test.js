import IdAPI from "../compositionAPI/IdAPI";

describe("ALabel IdAPI", () => {
  it("'idLabel' and 'idLabelAttribute' should correctly concatenate 'id' and 'idSuffix' and apply 'id' when 'hideId' is false", () => {
    const {
      idLabel,
      idLabelAttribut,
    } = IdAPI({ id: "user", idSuffix: "_123", hideId: false });

    expect(idLabel.value).toBe("user_123");
    expect(idLabelAttribut.value).toEqual({ id: "user_123" });
  });

  it("'idLabel' should concatenate 'id' and 'idSuffix' but 'idLabelAttribute' should be empty when 'hideId' is true", () => {
    const {
      idLabel,
      idLabelAttribut,
    } = IdAPI({ id: "user", idSuffix: "_123", hideId: true });

    expect(idLabel.value).toBe("user_123");
    expect(idLabelAttribut.value).toEqual({});
  });
});
