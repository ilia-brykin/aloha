import {
  h,
  ref,
} from "vue";
import {
  describe,
  expect,
  it,
  jest,
} from "@jest/globals";
import {
  mount,
} from "@vue/test-utils";

import ATableHeaderTh from "../ATableHeaderTh/ATableHeaderTh";

jest.mock("../../AButton/AButton", () => ({
  name: "AButton",
  render() {
    return jest.requireActual("vue").h("span", this.$slots.default?.());
  },
}));
jest.mock("aloha-svg/dist/js/bootstrap/CaretDownFill", () => "");
jest.mock("aloha-svg/dist/js/bootstrap/CaretUpFill", () => "");

const ATranslationStub = {
  name: "ATranslation",
  props: {
    html: {
      type: [String, Number, Object, Array],
      default: undefined,
    },
    text: {
      type: [String, Number, Object, Array],
      default: undefined,
    },
  },
  render() {
    return h("span", this.html || this.text);
  },
};

const mountHeader = ({ column, slots }) => mount(ATableHeaderTh, {
  props: {
    column,
    columnIndex: 2,
    hasMultipleActions: false,
  },
  slots,
  global: {
    provide: {
      changeModelSort: () => {},
      columnWidthDefault: ref(250),
      isColumnsDnd: ref(false),
      isLoadingOptions: ref(false),
      isLoadingTable: ref(false),
      tableId: ref("table"),
      useRem: ref(false),
    },
    stubs: {
      ATranslation: ATranslationStub,
    },
  },
});

describe("ATable header slot", () => {
  it("renders the configured header slot instead of the label", () => {
    const wrapper = mountHeader({
      column: {
        id: "name",
        label: "Name label",
        headerSlot: "nameHeader",
      },
      slots: {
        nameHeader: ({ column, columnIndex }) => h(
          "strong",
          { class: "custom-header" },
          `${ column.id }-${ columnIndex }`,
        ),
      },
    });

    expect(wrapper.find(".custom-header").text()).toBe("name-2");
    expect(wrapper.text()).not.toContain("Name label");
  });

  it("renders the label when the configured header slot is not provided", () => {
    const wrapper = mountHeader({
      column: {
        label: "Name label",
        headerSlot: "nameHeader",
      },
    });

    expect(wrapper.text()).toContain("Name label");
  });
});
