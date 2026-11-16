import {
  computed,
  nextTick,
} from "vue";
import {
  describe,
  expect,
  it,
} from "vitest";

import {
  getTranslatedText,
} from "../UtilsAPI";
import {
  setI18n,
  setLanguage,
  updateTranslation,
} from "../ATranslationAPI";

describe("getTranslatedText", () => {
  it("updates a computed that was evaluated before the translation was loaded", async() => {
    const label = computed(() => getTranslatedText({ placeholder: "_TEST_LABEL_" }));

    // evaluated before any translation exists
    expect(label.value).toBe("_TEST_LABEL_");

    setI18n({
      de: {
        _TEST_LABEL_: "Beschriftung",
      },
    });
    setLanguage("de");
    updateTranslation();
    await nextTick();

    expect(label.value).toBe("Beschriftung");
  });
});
