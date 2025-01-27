import {
  mockVueInject,
} from "../../../../utilsTests/utilsTests";

describe("ATableSortingAdditional ColumnsAPI", () => {
  let props;
  let ColumnsAPI;

  beforeAll(async() => {
    mockVueInject({
      columnsOrdered: [
        { label: "Mocked Ordered 1", sortId: "3" },
        { label: "Mocked Ordered 2", sortId: "4" },
        { label: "Mocked Ordered without sort" },
      ],
    });

    // Dynamically import CompositionAPI after mocks are set up
    ColumnsAPI = (await import("../compositionAPI/ColumnsAPI")).default;
  });

  beforeEach(() => {
    props = {
      additionalSortingColumns: [
        { label: "additional 1", sortId: "1" },
        { label: "additional 2", sortId: "2" },
      ],
    };
  });

  it("counts all columns correctly", () => {
    const {
      countColumnsAll,
    } = ColumnsAPI(props);

    expect(countColumnsAll.value).toBe(4);
  });

  it("keys columns by sortId", () => {
    const {
      columnsAllKeyBySortId,
    } = ColumnsAPI(props);

    const keys = Object.keys(columnsAllKeyBySortId.value);
    expect(keys.sort()).toEqual(["1", "2", "3", "4"]);
  });

  it("contains correct data in columnsAll", () => {
    const {
      columnsAll,
    } = ColumnsAPI(props);

    expect(columnsAll.value).toEqual(expect.arrayContaining([
      expect.objectContaining({ label: "Mocked Ordered 1", sortId: "3" }),
      expect.objectContaining({ label: "Mocked Ordered 2", sortId: "4" }),
      expect.objectContaining({ label: "additional 1", sortId: "1" }),
      expect.objectContaining({ label: "additional 2", sortId: "2" }),
    ]));
  });
});
