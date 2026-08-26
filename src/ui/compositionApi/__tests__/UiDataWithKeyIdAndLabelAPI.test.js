import {
  createApp,
  defineComponent,
} from "vue";
import {
  describe,
  expect,
  it,
  jest,
} from "@jest/globals";

import UiDataWithKeyIdAndLabelAPI from "../UiDataWithKeyIdAndLabelAPI";

import {
  AKeyId,
  AKeyLabel,
} from "../../../const/AKeys";

jest.mock("../../../index", () => ({
  AKeyId: "_a_id",
  AKeyLabel: "_a_label",
  AKeyLabelSearch: "_a_label_search",
  extractTextFromHtml: value => value,
  getTranslatedText: ({ placeholder }) => placeholder,
  isArrayOfArrays: value => Array.isArray(value) && value.every(Array.isArray),
  isPlaceholderTranslate: () => false,
}));

const createProps = ({
  data,
  isDataSimpleArray = false,
  mergeData = false,
}) => ({
  alwaysTranslate: false,
  data,
  dataExtra: [],
  isDataSimpleArray,
  keyId: "id",
  keyLabel: "label",
  keyLabelCallback: undefined,
  mergeData,
  searchTextInHtml: false,
  translateData: false,
});

const useDataAPI = props => {
  let result;
  const app = createApp(defineComponent({
    name: "TestUiDataWithKeyIdAndLabelAPI",
    setup() {
      result = UiDataWithKeyIdAndLabelAPI(props);
      return () => null;
    },
  }));

  app.mount(document.createElement("div"));
  return result;
};

describe("UiDataWithKeyIdAndLabelAPI", () => {
  it("keeps replacing prop data with internally loaded data by default", () => {
    const {
      dataFromServer,
      dataLocal,
    } = useDataAPI(createProps({
      data: [
        { id: 1, label: "Prop one" },
        { id: 3, label: "Prop three" },
      ],
    }));

    dataFromServer.value = [
      { id: 1, label: "Internal one" },
      { id: 2, label: "Internal two" },
    ];

    expect(dataLocal.value.map(item => item[AKeyLabel])).toEqual([
      "Internal one",
      "Internal two",
    ]);
  });

  it("merges prop and internally loaded data by ID with internal items taking precedence", () => {
    const {
      dataFromServer,
      dataLocal,
    } = useDataAPI(createProps({
      data: [
        { id: 1, label: "Prop one" },
        { id: 3, label: "Prop three" },
      ],
      mergeData: true,
    }));

    dataFromServer.value = [
      { id: 1, label: "Internal one" },
      { id: 2, label: "Internal two" },
    ];

    expect(dataLocal.value.map(item => ({
      id: item[AKeyId],
      label: item[AKeyLabel],
    }))).toEqual([
      { id: 1, label: "Internal one" },
      { id: 2, label: "Internal two" },
      { id: 3, label: "Prop three" },
    ]);
  });

  it("merges simple arrays by their values", () => {
    const {
      dataFromServer,
      dataLocal,
    } = useDataAPI(createProps({
      data: ["one", "three"],
      isDataSimpleArray: true,
      mergeData: true,
    }));

    dataFromServer.value = ["one", "two"];

    expect(dataLocal.value.map(item => item[AKeyId])).toEqual([
      "one",
      "two",
      "three",
    ]);
  });
});
