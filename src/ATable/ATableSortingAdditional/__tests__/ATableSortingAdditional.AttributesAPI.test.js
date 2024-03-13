import {
  mockVueInject,
} from "../../../../utilsTests/utilsTests";

describe("ATableSortingAdditional AttributesAPI", () => {
  let AttributesAPI;

  beforeAll(async() => {
    mockVueInject({
      tableId: "aloha",
    });

    // Dynamically import CompositionAPI after mocks are set up
    AttributesAPI = (await import("../compositionAPI/AttributesAPI")).default;
  });

  it("idPrefix correctly", () => {
    const {
      idPrefix,
    } = AttributesAPI();

    expect(idPrefix.value).toBe("aloha_");
  });

  it("excludeRenderAttributes correctly", () => {
    const {
      excludeRenderAttributes,
    } = AttributesAPI();

    expect(excludeRenderAttributes).toStrictEqual(["additionalProps"]);
  });
});
