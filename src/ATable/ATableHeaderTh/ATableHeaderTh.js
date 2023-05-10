import {
  h,
} from "vue";

import AIcon from "../../AIcon/AIcon";
import ATranslation from "../../ATranslation/ATranslation";

import AttributesAPI from "./compositionAPI/AttributesAPI";
import ColumnStylesAPI from "../compositionAPI/ColumnStylesAPI";
import DragAndDropChildAPI from "../compositionAPI/DragAndDropChildAPI";
import SortAPI from "./compositionAPI/SortAPI";

export default {
  name: "ATableHeaderTh",
  components: {
    AIcon,
    ATranslation,
  },
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
    });

    const {
      ariaSort,
      attributesForButtonSort,
      componentSortLocal,
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
      componentSortLocal,
      iconsSortable,
      isSortable,
      root,
      sequenceNumberSort,
      titlesLocal,
      titlesSort,
    };
  },
  render() {
    if (this.column.isRender === false) {
      return "";
    }
    return h("div", this.attributesForTh, [
      h("div", {
        class: [
          "a_table__cell__child",
          this.column.class,
          this.column.classHeader,
        ],
      }, [
        h(this.componentSortLocal, this.attributesForButtonSort, [
          this.column.icon && h(AIcon, {
            icon: this.column.icon,
            class: "a_table__th__icon",
          }),
          this.column.label && h(ATranslation, {
            html: this.column.label,
            tag: "span",
            class: "a_table__th__text",
            ariaHidden: this.column.textAriaHidden,
          }),
          this.titlesLocal.length > 0 && h(ATranslation, {
            title: this.titlesLocal,
            ariaHidden: true,
            tag: "span",
            class: "a_position_absolute_all",
          }),
          this.column.textScreenReader && h(ATranslation, {
            html: this.column.textScreenReader,
            tag: "span",
            class: "a_sr_only",
          }),
          this.titlesSort.map(titleSort => {
            return h(ATranslation, {
              html: titleSort,
              tag: "span",
              class: "a_sr_only",
            });
          }),
          this.isSortable && h("span", {
            class: "a_table__th__sort__box",
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
