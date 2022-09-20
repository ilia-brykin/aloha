import {
  h, resolveComponent,
} from "vue";

import AIcon from "../../AIcon/AIcon";

import {
  cloneDeep,
  forEach, get,
  isFunction, isPlainObject, isString,
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
    buttonActionsId: {
      type: String,
      required: true,
    },
  },
  computed: {
    isDivider() {
      return this.rowAction.isDivider;
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
      return undefined;
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
      return undefined;
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
      return false;
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
      return "";
    },

    toLocal() {
      if (isString(this.rowAction.to)) {
        return this.rowAction.to;
      }
      if (isPlainObject(this.rowAction.to)) {
        const TO = cloneDeep(this.rowAction.to);
        const PARAMS = TO.params || {};
        if (this.rowAction.to.paramsDynamic) {
          forEach(this.rowAction.to.paramsDynamic, (value, key) => {
            PARAMS[key] = get(this.row, value);
          });
        }
        TO.params = PARAMS;
        return TO;
      }
      return undefined;
    },

    idLocal() {
      if (this.rowAction.id) {
        return `${ this.rowAction.id }_${ this.rowIndex }`;
      }
      return undefined;
    },

    hrefLocal() {
      if (this.rowAction.href) {
        return this.rowAction.href;
      }
      if (isFunction(this.rowAction.hrefCallback)) {
        return this.rowAction.hrefCallback({
          row: this.row,
          rowIndex: this.rowIndex,
          rowAction: this.rowAction,
        });
      }
      return "#";
    },
  },
  methods: {
    onClick() {
      return this.rowAction.callback({
        row: this.row,
        rowIndex: this.rowIndex,
        rowAction: this.rowAction,
        id: this.buttonActionsId,
      });
    },
  },
  render() {
    const CONTENT = [
      this.titleLocal && h("span", {
        class: "a_position_absolute_all",
        ariaHidden: true,
        title: this.titleLocal,
      }),
      this.rowAction.icon && h(AIcon, {
        class: "a_table__action__icon",
        icon: this.rowAction.icon,
      }),
      h("span", {
        innerHTML: this.labelLocal,
      }),
    ];

    if (this.rowAction.isDivider) {
      return h("li", {
        class: ["a_dropdown__divider", this.classLocal],
        "aria-hidden": true,
      });
    }
    if (this.rowAction.slot) {
      return this.$slots[this.rowAction.slot]({
        row: this.row,
        rowIndex: this.rowIndex,
        rowAction: this.rowAction,
        id: this.buttonActionsId,
      });
    }
    if (this.rowAction.type === "link") {
      return h("li", null, [
        this.rowAction.to ?
          h(resolveComponent("RouterLink"), {
            id: this.idLocal,
            class: ["a_dropdown__item a_table__row_action", this.classLocal],
            disabled: this.disabledLocal,
            to: this.toLocal,
          }, () => CONTENT) :
          h("a", {
            id: this.idLocal,
            class: ["a_dropdown__item a_table__row_action", this.classLocal],
            disabled: this.disabledLocal,
            href: this.hrefLocal,
          }, () => CONTENT),
      ]);
    }
    return h("li", null, [
      h("button", {
        id: this.idLocal,
        type: "button",
        class: ["a_dropdown__item a_table__row_action", this.classLocal],
        disabled: this.disabledLocal,
        onClick: this.onClick,
      }, CONTENT),
    ]);
  },
};
