import {
  isModelForFilterNotEmpty,
} from "../utilsUi";

describe("isModelForFilterNotEmpty", () => {
  it("returns false if the model ID does not exist in modelObj", () => {
    const filter = { modelId: "nonExistentId", type: "multiselect" };
    const modelObj = {};
    expect(isModelForFilterNotEmpty({ filter, modelObj })).toBe(false);
  });

  it("returns true for non-empty array model type", () => {
    const filter = { modelId: "existentArrayId", type: "multiselect" };
    const modelObj = { existentArrayId: [1, 2, 3] };
    expect(isModelForFilterNotEmpty({ filter, modelObj })).toBe(true);
  });

  it("returns false for empty array model type", () => {
    const filter = { modelId: "emptyArrayId", type: "checkbox" };
    const modelObj = { emptyArrayId: [] };
    expect(isModelForFilterNotEmpty({ filter, modelObj })).toBe(false);
  });

  it("returns true for non-empty object model type", () => {
    const filter = { modelId: "existentObjectId", type: "dateRange" };
    const modelObj = { existentObjectId: { startDate: "2021-01-01", endDate: "2021-01-31" } };
    expect(isModelForFilterNotEmpty({ filter, modelObj })).toBe(true);
  });

  it("returns false for empty object model type", () => {
    const filter = { modelId: "emptyObjectId", type: "numberRange" };
    const modelObj = { emptyObjectId: {} };
    expect(isModelForFilterNotEmpty({ filter, modelObj })).toBe(false);
  });

  it("returns false if modelId does not exist and uses filter.id for an empty model", () => {
    const filter = { id: "someId", type: "multiselect" };
    const modelObj = { someId: [] }; // Предполагаем, что массив пуст
    expect(isModelForFilterNotEmpty({ filter, modelObj })).toBe(false);
  });

  it("returns true if modelId does not exist and uses filter.id for a non-empty model array", () => {
    const filter = { id: "someArrayId", type: "checkbox" };
    const modelObj = { someArrayId: [1, 2, 3] }; // Не пустой массив
    expect(isModelForFilterNotEmpty({ filter, modelObj })).toBe(true);
  });

  it("returns false if modelId does not exist and uses filter.id for an empty model object", () => {
    const filter = { id: "someObjectId", type: "numberRange" };
    const modelObj = { someObjectId: {} }; // Пустой объект
    expect(isModelForFilterNotEmpty({ filter, modelObj })).toBe(false);
  });

  it("returns true if modelId does not exist and uses filter.id for a non-empty model object", () => {
    const filter = { id: "anotherObjectId", type: "dateRange" };
    const modelObj = { anotherObjectId: { startDate: "2021-02-01", endDate: "2021-02-28" } }; // Не пустой объект
    expect(isModelForFilterNotEmpty({ filter, modelObj })).toBe(true);
  });
});
