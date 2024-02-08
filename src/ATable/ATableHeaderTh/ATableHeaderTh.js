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
          this.column.class,
          this.column.classHeader,
        ],
      }, [
        h(AButton, {
          class: [
            "a_table__th__btn",
            {
              "a_btn a_btn_link a_table__th__btn_sort": this.isSortable,
              a_table__th__btn_sequence: this.sequenceNumberSort,
            },
          ],
          iconLeft: this.column.icon,
          iconClass: "a_table__th__icon",
          textAriaHidden: this.column.textAriaHidden,
          title: this.titlesLocal,
          htmlScreenReader: this.column.textScreenReader,
          ...this.attributesForButtonSort,
        }, () => [
          this.titlesSort.map(titleSort => {
            return h(ATranslation, {
              html: titleSort,
              tag: "span",
              class: "a_sr_only",
            });
          }),
          this.column.label && h(ATranslation, {
            html: this.column.label,
            tag: "span",
            class: "a_table__th__text aloha_btn__ml_0",
            ariaHidden: this.column.textAriaHidden,
          }),
          this.isSortable && h("span", {
            class: "a_table__th__sort__box aloha_btn__ml_0",
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
