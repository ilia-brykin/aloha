import {
  computed,
} from "vue";

import IdAPI from "../compositionAPI/IdAPI";

describe("ALabel IdAPI", () => {
  it("'forLabelLocal' and 'idLabelLocal' should return correct values when 'hideForLocal' and 'hideIdLocal' are false", () => {
    const props = { id: "user", idSuffix: "_123" };

    const {
      forLabelLocal,
      idLabelLocal,
    } = IdAPI(props, {
      hideForLocal: computed(() => false),
      hideIdLocal: computed(() => false),
    });

    expect(idLabelLocal.value).toBe("user_123");
    expect(forLabelLocal.value).toBe("user");
  });

  it("'forLabelLocal' and 'idLabelLocal' should be undefined when 'hideForLocal' and 'hideIdLocal' are true", () => {
    const props = { id: "user", idSuffix: "_123" };

    const {
      forLabelLocal,
      idLabelLocal,
    } = IdAPI(props, {
      hideForLocal: computed(() => true),
      hideIdLocal: computed(() => true),
    });

    expect(idLabelLocal.value).toBeUndefined();
    expect(forLabelLocal.value).toBeUndefined();
  });
});
