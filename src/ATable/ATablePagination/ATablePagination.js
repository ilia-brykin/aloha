import AIcon from "../../AIcon/AIcon.vue";

import {
  ceil,
} from "lodash-es";

export default {
  name: "ATablePagination",
  components: {
    AIcon,
  },
  props: {
    totalRowsCount: {
      type: Number,
      required: true,
    },
    offset: {
      type: Number,
      required: true,
    },
    limit: {
      type: Number,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
  emits: [
    "update:offset",
  ],
  data() {
    return {
      countMaxItems: 5, // should odd be
      maxItem: undefined,
    };
  },
  computed: {
    paginationItems() {
      const PAGINATION_ITEMS = [];
      let currentItemIndex = -1;
      for (let i = this.countMaxItems - 1; i > -this.countMaxItems; i--) {
        const NUMBER = this.currentItem - i;
        if (NUMBER > 0 && NUMBER <= this.maxItems) {
          PAGINATION_ITEMS.push(NUMBER);
        }
        if (i === 0) {
          currentItemIndex = PAGINATION_ITEMS.length - 1;
        }
      }

      const {
        indexStart,
        indexEnd,
      } = this.getIndexStartAndEndForPagination({
        currentItemIndex,
        paginationLength: PAGINATION_ITEMS.length
      });
      return PAGINATION_ITEMS.slice(indexStart, indexEnd);
    },

    currentItem() {
      return (this.offset / this.limit >> 0) + 1;
    },

    maxItems() {
      return ceil(this.totalRowsCount / this.limit);
    },

    disabledButtonFirstPage() {
      return this.isLoading || this.currentItem === 1;
    },

    disabledButtonLastPage() {
      return this.isLoading || this.currentItem === this.maxItems;
    },
  },
  methods: {
    getIndexStartAndEndForPagination({ currentItemIndex, paginationLength }) {
      let indexStart = -1;
      let indexEnd = paginationLength + 1;
      const MIN_INDEX = Math.floor(this.countMaxItems / 2);
      const MAX_INDEX = (this.countMaxItems * 2 - 1);
      if (currentItemIndex <= MIN_INDEX) {
        indexStart = 0;
        indexEnd = this.countMaxItems;
      } else if (currentItemIndex >= (MAX_INDEX - (MIN_INDEX + 1))) {
        indexStart = MAX_INDEX - this.countMaxItems;
        indexEnd = MAX_INDEX;
      } else {
        indexStart = currentItemIndex - MIN_INDEX;
        indexEnd = currentItemIndex + MIN_INDEX + 1;
      }

      if (indexEnd > paginationLength) {
        const DIFF = indexEnd - paginationLength;
        indexEnd = paginationLength + 1;
        indexStart = indexStart - DIFF;
        if (indexStart < 0) {
          indexStart = 0;
        }
      }

      return {
        indexStart,
        indexEnd,
      };
    },

    updateOffset(item) {
      if (this.isLoading || item === this.currentItem) {
        return;
      }
      const OFFSET = (item - 1) * this.limit;
      this.$emit("update:offset", OFFSET);
    },

    updateOffsetFirst() {
      if (this.disabledButtonFirstPage) {
        return;
      }
      this.$emit("update:offset", 0);
    },

    updateOffsetLast() {
      if (this.disabledButtonLastPage) {
        return;
      }
      this.$emit("update:offset", (this.maxItems - 1) * this.limit);
    },
  },
};
