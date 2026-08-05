import {
  computed,
  reactive,
} from "vue";
import {
  describe,
  expect,
  it,
} from "@jest/globals";

import SelectedFirstAPI from "../compositionAPI/SelectedFirstAPI";

import {
  AKeyId,
} from "../../../const/AKeys";

const item = (id, label, extra = {}) => ({
  [AKeyId]: id,
  _a_label: label,
  ...extra,
});

describe("ASelect SelectedFirstAPI", () => {
  it("keeps source order and removes selected values from all source lists", () => {
    const props = reactive({
      modelValue: [3, 1, 3, "exclusive"],
      showSelectedFirst: true,
      type: "multiselect",
    });
    const data = computed(() => [
      item(1, "One", { group: "A" }),
      item(2, "Two", { group: "A" }),
      item(3, "Three", { __invalidEntry__: true, group: "B" }),
    ]);
    const dataExtra = computed(() => [item(1, "Extra one"), item(4, "Four")]);
    const exclusiveOption = computed(() => item("exclusive", "Exclusive"));

    const result = SelectedFirstAPI(props, {
      data,
      dataExtra,
      exclusiveOption,
    });

    expect(result.dataSelected.value.map(currentItem => currentItem[AKeyId]))
      .toEqual(["exclusive", 1, 3]);
    expect(result.dataSelected.value[2]).toEqual(expect.objectContaining({
      __invalidEntry__: true,
      group: "B",
    }));
    expect(result.dataWithoutSelected.value.map(currentItem => currentItem[AKeyId]))
      .toEqual([2]);
    expect(result.dataExtraWithoutSelected.value.map(currentItem => currentItem[AKeyId]))
      .toEqual([4]);
    expect(result.exclusiveOptionWithoutSelected.value).toBeUndefined();
  });

  it("reuses the sorted data order instead of the model order", () => {
    const props = reactive({
      modelValue: [1, 3],
      showSelectedFirst: true,
      type: "multiselect",
    });
    const data = computed(() => [item(3, "Three"), item(2, "Two"), item(1, "One")]);

    const result = SelectedFirstAPI(props, { data });

    expect(result.dataSelected.value.map(currentItem => currentItem[AKeyId]))
      .toEqual([3, 1]);
  });

  it("supports false as a selected value in select mode", () => {
    const props = reactive({
      modelValue: false,
      showSelectedFirst: true,
      type: "select",
    });
    const data = computed(() => [item(false, "No"), item(true, "Yes")]);

    const result = SelectedFirstAPI(props, { data });

    expect(result.dataSelected.value.map(currentItem => currentItem[AKeyId]))
      .toEqual([false]);
    expect(result.dataWithoutSelected.value.map(currentItem => currentItem[AKeyId]))
      .toEqual([true]);
  });

  it("does not change lists when the prop is disabled", () => {
    const props = reactive({
      modelValue: [1],
      showSelectedFirst: false,
      type: "multiselect",
    });
    const sourceData = [item(1, "One"), item(2, "Two")];
    const data = computed(() => sourceData);

    const result = SelectedFirstAPI(props, { data });

    expect(result.dataSelected.value).toEqual([]);
    expect(result.dataWithoutSelected.value).toBe(sourceData);
  });
});
