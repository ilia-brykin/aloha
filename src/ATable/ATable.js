import ATableCountProPage from "./ATableCountProPage/ATableCountProPage";
import ATableHeader from "./ATableHeader/ATableHeader";
import ATablePagination from "./ATablePagination/ATablePagination";
import ATableTopPanel from "./ATableTopPanel/ATableTopPanel";
import ATableTr from "./ATableTr/ATableTr";

import {
  h,
} from "vue";
import {
  cloneDeep,
  orderBy,
  startsWith,
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
    columns: {
      type: Array,
      required: true,
    },
    data: {
      type: Array,
      required: false,
    },
  },
  data() {
    return {
      resolved: undefined,
      error: undefined,
      modelSort: undefined,
      isLoading: false,
      rows: [],
      limit: 10,
      offset: 0,
      modelColumns: [],
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

    modelColumnsMapping() {
      const MODEL_COLUMNS = {};
      this.modelColumns.forEach(columnId => {
        MODEL_COLUMNS[columnId] = true;
      });
      return MODEL_COLUMNS;
    },
  },
  created() {
    this.initModelColumns();
  },
  methods: {
    initModelColumns() {
      this.modelColumns = this.columns.map(column => column.id);
    },

    changeModelSort({ sortId }) {
      if (this.modelSort === sortId) {
        this.modelSort = `-${ sortId }`;
      } else {
        this.modelSort = sortId;
      }
    },

    changeModelColumns(value) {
      this.modelColumns = value;
    },

    changeOffset(value) {
      this.offset = value;
    },

    changeLimit(value) {
      this.limit = value;
    },
  },
  render() {
    return h("div", null, [
      h(ATableTopPanel, {
        columns: this.columns,
        isLoading: this.isLoading,
        modelColumns: this.modelColumns,
        "onUpdate:model-columns": this.changeModelColumns,
      }),
      h("div", {
        class: "a_table",
      }, [
        h(ATableHeader, {
          columns: this.columns,
          modelColumnsMapping: this.modelColumnsMapping,
          modelSort: this.modelSort,
          isLoading: this.isLoading,
          "onChange-model-sort": this.changeModelSort,
        }),
        h("div", {
          class: "a_table__body"
        }, this.rowsLocal.map((row, rowIndex) => {
          return h(ATableTr, {
            row,
            rowIndex,
            columns: this.columns,
            modelColumnsMapping: this.modelColumnsMapping,
            isLoading: this.isLoading,
          }, this.$slots);
        })),
        h(ATablePagination, {
          limit: this.limit,
          totalRowsCount: this.totalRowsCountLocal,
          isLoading: this.isLoading,
          offset: this.offset,
          "onUpdate:offset": this.changeOffset,
        }),
        h(ATableCountProPage, {
          isLoading: this.isLoading,
          limit: this.limit,
          "onUpdate:limit": this.changeLimit,
        }),
      ]),
    ]);
  },
};
