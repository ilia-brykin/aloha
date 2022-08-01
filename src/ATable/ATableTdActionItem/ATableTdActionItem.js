import {
  h,
} from "vue";

import {
  isFunction,
} from "lodash-es";

export default {
  name: "ATableTdActionItem",
  props: {
    row: {
      type: Object,
      required: true,
    },
    rowAction: {
      type: Object,
      required: true,
    },
    rowIndex: {
      type: Number,
      required: true,
    },
  },
  computed: {
    isDivider() {
      return this.rowAction.isDivider;
    },

    component: function() {
      if (this.rowAction.isDivider) {
        return h("li", {
          class: ["a_dropdown__divider", this.classLocal],
          "aria-hidden": true,
          title: this.titleLocal,
        });
      }
      if (this.rowAction.slot) {
        return this.$slots[this.rowAction.slot]({
          row: this.row,
          rowIndex: this.rowIndex,
          rowAction: this.rowAction,
        });
      }
      return h("li", null, [
        h("button", {
          type: "button",
          class: ["a_dropdown__item a_table__row_action", this.classLocal],
          disabled: this.disabledLocal,
          onClick: this.onClick,
        }, [
          h("span", {
            class: "a_position_absolute_all",
            ariaHidden: true,
            title: this.titleLocal,
          }),
          h("span", {
            innerHTML: this.labelLocal,
          })
        ]),
      ]);
    },

    labelLocal() {
      if (this.rowAction.label) {
        return this.rowAction.label;
      }
      if (isFunction(this.rowAction.labelCallback)) {
        return this.rowAction.labelCallback({
          row: this.row,
          rowIndex: this.rowIndex,
          rowAction: this.rowAction,
        });
      }
    },

    titleLocal() {
      if (this.rowAction.title) {
        return this.rowAction.title;
      }
      if (isFunction(this.rowAction.titleCallback)) {
        return this.rowAction.titleCallback({
          row: this.row,
          rowIndex: this.rowIndex,
          rowAction: this.rowAction,
        });
      }
    },

    disabledLocal() {
      if (this.rowAction.disabled) {
        return this.rowAction.disabled;
      }
      if (isFunction(this.rowAction.disabledCallback)) {
        return this.rowAction.disabledCallback({
          row: this.row,
          rowIndex: this.rowIndex,
          rowAction: this.rowAction,
        });
      }
    },

    classLocal() {
      if (this.rowAction.class) {
        return this.rowAction.class;
      }
      if (isFunction(this.rowAction.classCallback)) {
        return this.rowAction.classCallback({
          row: this.row,
          rowIndex: this.rowIndex,
          rowAction: this.rowAction,
        });
      }
    },
  },
  methods: {
    onClick() {
      return this.rowAction.callback({
        row: this.row,
        rowIndex: this.rowIndex,
        rowAction: this.rowAction,
      });
    },
  },
  render() {
    return this.component;
  },
};
