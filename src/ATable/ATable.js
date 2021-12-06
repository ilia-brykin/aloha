import ATableHeader from "./ATableHeader/ATableHeader.vue";
import ATablePagination from "./ATablePagination/ATablePagination.vue";
import ATableTr from "./ATableTr/ATableTr.vue";

import {
  orderBy,
  startsWith,
} from "lodash-es";

export default {
  name: "ATable",
  components: {
    ATableHeader,
    ATablePagination,
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
    };
  },
  computed: {
    rowsLocal() {
      if (this.isDataParent) {
        return this.dataSorted;
      }
      return this.rows;
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
  },
  methods: {
    changeModelSort({ sortId }) {
      if (this.modelSort === sortId) {
        this.modelSort = `-${ sortId }`;
      } else {
        this.modelSort = sortId;
      }
    },

    // orderBy
  },
  mounted() {

  },
};
