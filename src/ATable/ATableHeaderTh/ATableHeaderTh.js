import {
  h,
} from "vue";

import AButton from "../../AButton/AButton";
import ATranslation from "../../ATranslation/ATranslation";

import AttributesAPI from "./compositionAPI/AttributesAPI";
import ColumnStylesAPI from "../compositionAPI/ColumnStylesAPI";
import DragAndDropChildAPI from "../compositionAPI/DragAndDropChildAPI";
import SortAPI from "./compositionAPI/SortAPI";

export default {
  name: "ATableHeaderTh",
  props: {
    column: {
      type: Object,
      required: true,
    },
    columnGroupNames: {
      type: Array,
      required: false,
      default: undefined,
    },
    columnIndex: {
      type: Number,
      required: true,
    },
    columnIndexDraggable: {
      type: Number,
      required: false,
      default: -1,
    },
    disabledSort: {
      type: Boolean,
      required: false,
    },
    hasMultipleActions: {
      type: Boolean,
      required: true,
    },
    isSortingMultiColumn: {
      type: Boolean,
      required: false,
    },
    modelSort: {
      type: Array,
      required: false,
    },
    showFirstSortingSequenceNumber: {
      type: Boolean,
      required: false,
    },
    sortingSequenceNumberClass: {
      type: [String, Object],
      required: false,
    },
  },
  emits: [
    "dragendParent",
    "dragstartParent",
    "dragenterParent",
    "dragleaveParent",
  ],
  inject: [
    "changeModelSort",
    "isColumnsDnd",
    "isLoadingOptions",
    "isLoadingTable",
  ],
  setup(props, context) {
    const {
      columnsStyles,
    } = ColumnStylesAPI(props);

    const {
      attributesForRoot,
      isLocked,
      root,
    } = DragAndDropChildAPI(props, context, {
      classOverString: "a_table__th_over",
      inDropdown: false,
    });

    const {
      ariaSort,
      attributesForButtonSort,
      columnTextScreenReaderId,
      iconsSortable,
      isSortable,
      isSorting,
      sequenceNumberSort,
      titlesSort,
    } = SortAPI(props);

    const {
      attributesForTh,
      titlesLocal,
    } = AttributesAPI(props, {
      ariaSort,
      attributesForRoot,
      columnsStyles,
      isLocked,
      isSorting,
      titlesSort,
    });

    return {
      attributesForButtonSort,
      attributesForTh,
      columnTextScreenReaderId,
      columnsStyles,
      iconsSortable,
      isSortable,
      root,
      sequenceNumberSort,
      titlesLocal,
      titlesSort,
    };
  },
  render() {
    return h("div", this.attributesForTh, [
      h("div", {
        class: [
          "a_table__cell__child",
        ],
      }, [
        this.columnGroupNames && h(ATranslation, {
          html: this.columnGroupNames,
          tag: "span",
          class: "a_sr_only",
        }),
        h(ATranslation, {
          id: this.columnTextScreenReaderId,
          text: this.titlesLocal,
          tag: "span",
          class: "a_sr_only",
          ariaHidden: true,
        }),
        h(AButton, {
          class: [
            "a_table__th__btn",
            this.column.class,
            this.column.classHeader,
            {
              "a_btn a_btn_link a_table__th__btn_sort": this.isSortable,
              a_table__th__btn_sequence: this.sequenceNumberSort,
            },
          ],
          iconLeft: this.column.icon,
          iconClass: "a_table__th__icon",
          extra: this.column.extra,
          title: this.titlesLocal,
          textScreenReader: this.column.textScreenReader || undefined,
          ...this.attributesForButtonSort,
        }, () => [
          this.column.label && h(ATranslation, {
            html: this.column.label,
            tag: "span",
            extra: this.column.extra,
            class: "a_table__th__text aloha_element__ml_0",
            ariaHidden: !!this.column.textScreenReader,
          }),
          this.isSortable && h("span", {
            class: "a_table__th__sort__box aloha_element__ml_0",
          }, [
            this.sequenceNumberSort && h("span", {
              class: [
                "a_table__th__sort__sequence_num",
                this.sortingSequenceNumberClass,
              ],
            }, this.sequenceNumberSort),
            h("span", {
              class: "a_table__th__sort__icons",
            }, [
              ...this.iconsSortable,
            ]),
          ]),
        ]),
      ]),
    ]);
  },
};
