import AIcon from "../../AIcon/AIcon.vue";

import {
  ceil,
  indexOf,
  isNil,
  sortBy,
} from "lodash-es";

export default {
  name: "ATablePagination",
  components: {
    AIcon,
  },
  props: {
    current: {
      type: Number
    },
    total: {
      type: Number
    },
    offset: {
      // type: Number,
      default: 0
    },
    limit: {
      type: Number,
      default: 10
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    updateLimit: {
      type: Function,
      required: false,
    },
    updateOffset: {
      type: Function,
      required: false,
    },
  },
  data() {
    return {
      countMaxItems: 5,
      currentItem: undefined,
      maxItem: undefined,
    };
  },
  computed: {
    itemsPerPage() {
      const ITEMS_PER_PAGE = [10, 25, 50, 100];
      if (!isNil(this.limit) && indexOf(ITEMS_PER_PAGE, this.limit) === -1) {
        ITEMS_PER_PAGE.push(this.limit);
        return sortBy(ITEMS_PER_PAGE, el => el);
      }
      return ITEMS_PER_PAGE;
    },

    paginationList() {
      if (!this.total) {
        return [];
      }
      const pagList = [];
      this.maxItem = ceil(this.total / this.limit);
      this.currentItem = (this.offset / this.limit >> 0) + 1;
      pagList.push(this.currentItem);

      for (let i = this.currentItem - 1; i > this.currentItem - (this.countMaxItems - 2); i--) {
        if (i > 0) {
          pagList.unshift(i);
        }
      }

      for (let i = this.currentItem + 1; i < this.currentItem + this.countMaxItems; i++) {
        if (i <= this.maxItem) {
          pagList.push(i);
          if (pagList.length === this.countMaxItems) {
            break;
          }
        } else {
          break;
        }
      }

      if (pagList.length < this.countMaxItems) {
        for (let i = this.currentItem - 3; i > this.currentItem - this.countMaxItems; i--) {
          if (i > 0) {
            pagList.unshift(i);
            if (pagList.length === this.countMaxItems) {
              break;
            }
          }
        }
      }
      return pagList;
    },

    extraForTranslatePaginationFromTo() {
      return {
        start: this.startFormatted,
        current: this.currentFormatted,
        total: this.totalFormatted,
      };
    },

    startFormatted() {
      return this.filterCurrency(+this.offset + 1, "", 0);
    },

    currentFormatted() {
      return this.filterCurrency(+this.offset + this.current, "", 0);
    },

    totalFormatted() {
      return this.filterCurrency(this.total, "", 0);
    },

    disabledButtonFirstPage() {
      return this.disabled || this.currentItem === 1;
    },

    disabledButtonLastPage() {
      return this.disabled || this.currentItem === this.maxItem;
    },

    ariaDisabledButtonFirstPage() {
      return `${ this.disabledButtonFirstPage }`;
    },

    ariaDisabledButtonLastPage() {
      return `${ this.disabledButtonLastPage }`;
    },
  },
  methods: {
    updateOffsetFirstLocal() {
      if (this.disabledButtonFirstPage) {
        return;
      }
      this.updateOffset({
        offset: 0,
      });
    },

    updateOffsetLastLocal() {
      if (this.disabledButtonLastPage) {
        return;
      }
      this.updateOffset({
        offset: (this.maxItem - 1) * this.limit,
      });
    },

    updateOffsetLocal(item) {
      if (this.disabled || this.currentItem === item) {
        return;
      }
      this.updateOffset({
        offset: (item - 1) * this.limit,
      });
    },
  },
};
