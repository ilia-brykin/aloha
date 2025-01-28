/* eslint vue/no-ref-object-reactivity-loss: off */
import {
  computed,
  ref,
} from "vue";

import ModelAPI from "../compositionAPI/ModelAPI";

describe("ATableSortingAdditional ModelAPI", () => {
  it("initializes unapplied model sort correctly when no model is provided and opens dropdown", () => {
    const countColumnsAll = computed(() => 3);
    const unappliedModelSort = ref([]);
    const {
      initUnappliedModelSort,
    } = ModelAPI({
      modelSort: ref([]),
      isSortingMultiColumn: ref(true),
    }, {
      countColumnsAll,
      unappliedModelSort,
    });

    initUnappliedModelSort();

    expect(unappliedModelSort.value).toHaveLength(1);
    expect(unappliedModelSort.value[0].sortId).toBeUndefined();
    expect(unappliedModelSort.value[0].sortMode).toBe("asc");
  });

  it("updates unapplied model sort by adding undefined if the model has defined sort values", () => {
    const modelSortProvided = ref([
      { sortId: "1", sortMode: "desc" },
    ]);
    const unappliedModelSort = ref([]);
    const countColumnsAll = computed(() => 2);

    const {
      updateUnappliedModelSort,
    } = ModelAPI({
      isSortingMultiColumn: ref(true),
      modelSort: modelSortProvided,
    }, {
      countColumnsAll,
      unappliedModelSort,
    });

    updateUnappliedModelSort({ model: modelSortProvided.value });

    expect(unappliedModelSort.value).toHaveLength(2);
    expect(unappliedModelSort.value[0]).toEqual({ sortId: "1", sortMode: "desc" });
    expect(unappliedModelSort.value[1]).toEqual({ sortId: undefined, sortMode: "asc" });
  });

  it("correctly removes elements from unappliedModelSort", () => {
    const countColumnsAll = computed(() => 3);
    const unappliedModelSort = ref([
      { sortId: "1", sortMode: "desc" },
      { sortId: "2", sortMode: "desc" },
      { sortId: "3", sortMode: "asc" },
    ]);
    const {
      removeUnappliedModelSort,
    } = ModelAPI({
      isSortingMultiColumn: ref(true),
      modelSort: ref([]),
    }, {
      countColumnsAll,
      unappliedModelSort,
    });

    removeUnappliedModelSort({
      item: { additionalProps: { index: 2 } },
    });

    expect(unappliedModelSort.value).toHaveLength(3);
    expect(unappliedModelSort.value[2].sortId).toBeUndefined();
    expect(unappliedModelSort.value[2].sortMode).toBe("asc");

    removeUnappliedModelSort({
      item: { additionalProps: { index: 1 } },
    });

    expect(unappliedModelSort.value).toHaveLength(2);
    expect(unappliedModelSort.value[1].sortId).toBeUndefined();
    expect(unappliedModelSort.value[1].sortMode).toBe("asc");

    removeUnappliedModelSort({
      item: { additionalProps: { index: 0 } },
    });

    expect(unappliedModelSort.value).toHaveLength(1);
    expect(unappliedModelSort.value[0].sortId).toBeUndefined();
    expect(unappliedModelSort.value[0].sortMode).toBe("asc");
  });

  it("correctly change model", () => {
    const countColumnsAll = computed(() => 3);
    const unappliedModelSort = ref([
      { sortId: undefined, sortMode: "asc" },
    ]);
    const {
      updateUnappliedModelSort,
    } = ModelAPI({
      isSortingMultiColumn: ref(true),
      modelSort: ref([]),
    }, {
      countColumnsAll,
      unappliedModelSort,
    });

    let model = [
      { sortId: "1", sortMode: "asc" },
    ];
    updateUnappliedModelSort({ model });

    expect(unappliedModelSort.value).toHaveLength(2);
    expect(unappliedModelSort.value).toStrictEqual([
      { sortId: "1", sortMode: "asc" },
      { sortId: undefined, sortMode: "asc" },
    ]);

    model[1].sortMode = "desc";
    updateUnappliedModelSort({ model });

    expect(unappliedModelSort.value).toHaveLength(2);
    expect(unappliedModelSort.value).toStrictEqual([
      { sortId: "1", sortMode: "asc" },
      { sortId: undefined, sortMode: "desc" },
    ]);

    model[1].sortId = "2";
    updateUnappliedModelSort({ model });

    expect(unappliedModelSort.value).toHaveLength(3);
    expect(unappliedModelSort.value).toStrictEqual([
      { sortId: "1", sortMode: "asc" },
      { sortId: "2", sortMode: "desc" },
      { sortId: undefined, sortMode: "asc" },
    ]);

    model = [
      { sortId: "1", sortMode: "asc" },
      { sortId: "2", sortMode: "desc" },
      { sortId: "3", sortMode: "asc" },
    ];
    updateUnappliedModelSort({ model });

    expect(unappliedModelSort.value).toHaveLength(3);
    expect(unappliedModelSort.value).toStrictEqual([
      { sortId: "1", sortMode: "asc" },
      { sortId: "2", sortMode: "desc" },
      { sortId: "3", sortMode: "asc" },
    ]);
  });

  it("Initializes, updates, and removes unapplied model sort while maintaining a single-column sort constraint", () => {
    const countColumnsAll = computed(() => 3);
    const unappliedModelSort = ref([]);
    const {
      initUnappliedModelSort,
      removeUnappliedModelSort,
      updateUnappliedModelSort,
    } = ModelAPI({
      modelSort: ref([]),
      isSortingMultiColumn: ref(false),
    }, {
      countColumnsAll,
      unappliedModelSort,
    });

    initUnappliedModelSort();

    expect(unappliedModelSort.value).toHaveLength(1);
    expect(unappliedModelSort.value[0].sortId).toBeUndefined();
    expect(unappliedModelSort.value[0].sortMode).toBe("asc");

    const model = [
      { sortId: "1", sortMode: "asc" },
    ];
    updateUnappliedModelSort({ model });

    expect(unappliedModelSort.value).toHaveLength(1);
    expect(unappliedModelSort.value).toStrictEqual([
      { sortId: "1", sortMode: "asc" },
    ]);

    removeUnappliedModelSort({
      item: { additionalProps: { index: 0 } },
    });

    expect(unappliedModelSort.value).toHaveLength(1);
    expect(unappliedModelSort.value).toStrictEqual([
      { sortId: undefined, sortMode: "asc" },
    ]);
  });
});
