import {
  computed,
  h,
} from "vue";

import ATableCountProPage from "./ATableCountProPage/ATableCountProPage";
import ATableHeader from "./ATableHeader/ATableHeader";
import ATablePagination from "./ATablePagination/ATablePagination";
import ATableTopPanel from "./ATableTopPanel/ATableTopPanel";
import ATableTr from "./ATableTr/ATableTr";

import {
  getModelColumnsOrderingDefault,
  getModelColumnsVisibleDefault,
} from "./utils/utils";
import {
  cloneDeep, forEach, get, isArray, isNil, isPlainObject, keyBy,
  orderBy,
  startsWith,
  uniqueId,
} from "lodash-es";


export default {
  name: "ATable",
  components: {
    ATableCountProPage,
    ATableHeader,
    ATablePagination,
    ATableTopPanel,
    ATableTr,
  },
  props: {
    id: {
      type: String,
      required: false,
      default: () => uniqueId("a_table"),
    },
    columns: {
      type: Array,
      required: true,
    },
    countAllRows: {
      type: Number,
      required: false,
      default: undefined,
    },
    label: {
      type: [String, Number],
      required: false,
      default: "",
    },
    labelTag: {
      type: String,
      required: false,
      default: "h2",
    },
    limitsPerPage: {
      type: Array,
      required: false,
      default: () => ["10", "25", "50", "100"],
    },
    limitStart: {
      type: Number,
      required: false,
      default: 10,
    },
    offsetStart: {
      type: Number,
      required: false,
      default: 0,
    },
    data: {
      type: [Array, Object, Promise],
      required: false,
    },
    isLoadingTable: {
      type: Boolean,
      required: false,
    },
    isLoadingOptions: {
      type: Boolean,
      required: false,
    },
    keyCountAllRowsInData: {
      type: String,
      required: false,
      default: "count",
    },
    modelColumnsOrdering: {
      type: Array,
      required: false,
      default: () => [],
    },
    modelColumnsVisible: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  emits: [
    "update:modelColumnsOrder",
    "update:modelColumnsVisible",
    "changeColumnsOrdering",
    "changeColumnsVisible",
    "changeLimit",
    "changeOffset",
    "changeSorting",
  ],
  provide() {
    return {
      changeColumnsOrdering: this.changeColumnsOrdering,
      changeModelColumnsVisible: this.changeModelColumnsVisible,
      changeModelSort: this.changeModelSort,
      columns: computed(() => this.columns),
      columnsOrdered: computed(() => this.columnsOrdered),
      isLoadingOptions: computed(() => this.isLoadingOptions),
      isLoadingTable: computed(() => this.isLoadingTable),
      modelColumnsVisibleLocal: computed(() => this.modelColumnsVisibleLocal),
      modelColumnsVisibleMapping: computed(() => this.modelColumnsVisibleMapping),
      tableId: computed(() => this.id),
    };
  },
  data() {
    return {
      resolved: undefined,
      error: undefined,
      modelSort: undefined,
      rows: [],
      limit: this.limitStart,
      offset: this.offsetStart,
      modelColumnsOrderingLocal: [],
      modelColumnsVisibleLocal: [],
    };
  },
  computed: {
    rowsLocal() {
      if (this.isDataParent) {
        return this.dataPaginated;
      }
      return this.rows;
    },

    dataPaginated() {
      if (this.limit) {
        const DATA_SORTED = cloneDeep(this.dataSorted);
        const INDEX_START = this.offset;
        const INDEX_END = INDEX_START + this.limit;
        return DATA_SORTED.slice(INDEX_START, INDEX_END);
      }
      return this.dataSorted;
    },

    dataSorted() {
      if (this.modelSort) {
        return orderBy(this.data, [this.sortOptions.model], [this.sortOptions.direction]);
      }
      return this.data;
    },

    sortOptions() {
      if (this.modelSort) {
        let directionSort = "asc";
        let modelSort = this.modelSort;
        if (startsWith(this.modelSort, "-")) {
          directionSort = "desc";
          modelSort = this.modelSort.slice(1);
        }
        return {
          direction: directionSort,
          model: modelSort,
        };
      }
    },

    isDataParent() {
      return !!this.data;
    },

    totalRowsCountLocal() {
      if (this.isDataParent) {
        return this.totalRowsCount;
      }
    },

    totalRowsCount() {
      return this.data.length;
    },

    modelColumnsVisibleMapping() {
      const MODEL_COLUMNS = {};
      this.modelColumnsVisibleLocal.forEach(columnId => {
        MODEL_COLUMNS[columnId] = true;
      });
      return MODEL_COLUMNS;
    },

    columnsOrdered() {
      const COLUMNS = [];
      forEach(this.modelColumnsOrderingLocal, columnId => {
        COLUMNS.push(this.columnsKeyById[columnId]);
      });
      return COLUMNS;
    },

    columnsKeyById() {
      return keyBy(this.columns, "id");
    },

    countAllRowsLocal() {
      if (!isNil(this.countAllRows)) {
        return this.countAllRows;
      }
      if (this.isDataObject) {
        return +get(this.data, this.keyCountAllRowsInData);
      }
      if (this.isDataArray) {
        return this.data.length;
      }
    },

    isDataObject() {
      return isPlainObject(this.data);
    },

    isDataArray() {
      return isArray(this.data);
    },
  },
  created() {
    this.initModelColumnsOrderingLocal();
    this.initModelColumnsVisibleLocal();
  },
  methods: {
    initModelColumnsOrderingLocal() {
      if (this.modelColumnsOrdering.length) {
        this.modelColumnsOrderingLocal = cloneDeep(this.modelColumnsOrdering);
      } else {
        this.modelColumnsOrderingLocal = getModelColumnsOrderingDefault(this.columns);
      }
    },

    initModelColumnsVisibleLocal() {
      if (this.modelColumnsVisible.length) {
        this.modelColumnsVisibleLocal = cloneDeep(this.modelColumnsVisible);
      } else {
        this.modelColumnsVisibleLocal = getModelColumnsVisibleDefault(this.columns);
      }
    },

    changeModelSort({ sortId }) {
      if (this.modelSort === sortId) {
        this.modelSort = `-${ sortId }`;
      } else if (this.modelSort === `-${ sortId }`) {
        this.modelSort = undefined;
      } else {
        this.modelSort = sortId;
      }
      this.$emit("changeSorting", {
        modelSort: this.modelSort,
      });
    },

    changeModelColumnsVisible(value) {
      this.modelColumnsVisibleLocal = value;
      this.$emit("update:modelColumnsVisible", cloneDeep(this.modelColumnsVisibleLocal));
    },

    changeOffset(offset) {
      this.offset = offset;
      this.$emit("changeOffset", {
        offset,
      });
    },

    changeLimit(limit) {
      this.limit = limit;
      this.$emit("changeLimit", {
        limit,
      });
    },

    changeColumnsOrdering({ modelColumnsOrderingLocal, columnIndexDraggable, columnIndexOver }) {
      if (columnIndexDraggable === columnIndexOver && !modelColumnsOrderingLocal) {
        return;
      }
      if (modelColumnsOrderingLocal) {
        this.modelColumnsOrderingLocal = modelColumnsOrderingLocal;
      } else {
        const ID_DRAGGABLE = this.modelColumnsOrderingLocal[columnIndexDraggable];
        this.modelColumnsOrderingLocal.splice(columnIndexDraggable, 1);
        this.modelColumnsOrderingLocal.splice(columnIndexOver, 0, ID_DRAGGABLE);
      }
      this.$emit("changeColumnsOrdering", {
        columnIndexDraggable,
        columnIndexOver,
        modelColumnsOrdering: this.modelColumnsOrderingLocal,
      });
    },
  },
  render() {
    return h("div", null, [
      h(ATableTopPanel, {
        countAllRows: this.countAllRowsLocal,
        label: this.label,
        labelTag: this.labelTag,
      }),
      h("div", {
        class: "a_table",
      }, [
        h(ATableHeader, {
          modelSort: this.modelSort,
        }),
        h("div", {
          class: "a_table__body"
        }, this.rowsLocal.map((row, rowIndex) => {
          return h(ATableTr, {
            row,
            rowIndex,
          }, this.$slots);
        })),
      ]),
      h("div", {
        class: "a_pagination__parent"
      }, [
        h(ATableCountProPage, {
          countAllRows: this.countAllRowsLocal,
          limitsPerPage: this.limitsPerPage,
          isLoadingTable: this.isLoadingTable,
          limit: this.limit,
          offset: this.offset,
          rowsLength: this.rowsLocal.length,
          "onUpdate:limit": this.changeLimit,
        }),
        h(ATablePagination, {
          limit: this.limit,
          totalRowsCount: this.totalRowsCountLocal,
          isLoadingTable: this.isLoadingTable,
          offset: this.offset,
          "onUpdate:offset": this.changeOffset,
        }),
      ]),
    ]);
  },
};
